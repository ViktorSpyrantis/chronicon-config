/**
 * Checks that event images point at files that exist on Wikimedia Commons.
 * Run with `npm run check:images`. Needs network access, so it is kept out of
 * `validate`.
 *
 *   npm run check:images                      # check every image in the data
 *   npm run check:images -- "File name.jpg"   # look up specific files (names or URLs)
 *   npm run check:images -- --search "Battle of Legnano"   # find candidate files
 *
 * Looking up or searching prints each file's size, type, Commons page, a 640px
 * preview URL, and the `src` to use — use it to vet a candidate image before
 * adding it.
 *
 * Uses the Commons API in batches of 50 (one request at a time, backing off on
 * HTTP 429) rather than downloading every image.
 */
import { SECTION_MODULES } from "../src/data";
import type { PeriodDefinition } from "../src/types";

const API = "https://commons.wikimedia.org/w/api.php";
const USER_AGENT = "chronicon-config image check (https://github.com/ViktorSpyrantis/chronicon-config)";
const BATCH = 50;

interface ImageInfo {
  url: string;
  descriptionurl: string;
  thumburl?: string;
  width: number;
  height: number;
  size: number;
  mime: string;
}

interface QueryResponse {
  query?: {
    normalized?: { from: string; to: string }[];
    redirects?: { from: string; to: string }[];
    pages?: { title: string; missing?: boolean; imageinfo?: ImageInfo[] }[];
  };
}

/** Commons file title ("File:Foo bar.jpg") for a Commons URL or bare file name, or null. */
function toTitle(srcOrName: string): string | null {
  let name: string;
  if (/^https?:\/\//.test(srcOrName)) {
    const url = new URL(srcOrName);
    const filePath = url.pathname.match(/\/wiki\/Special:FilePath\/(.+)$/);
    // upload.wikimedia.org/wikipedia/commons/[thumb/]a/ab/<name>[/<width>px-<name>]
    const upload = url.pathname.match(/^\/wikipedia\/commons\/(?:thumb\/)?[0-9a-f]\/[0-9a-f]{2}\/([^/]+)/);
    const page = url.pathname.match(/\/wiki\/File:(.+)$/);
    const raw = filePath?.[1] ?? upload?.[1] ?? page?.[1];
    if (!raw || !/(^|\.)wikimedia\.org$/.test(url.hostname)) return null;
    name = decodeURIComponent(raw);
  } else {
    name = srcOrName.replace(/^File:/i, "");
  }
  name = name.replace(/_/g, " ").trim();
  return name ? `File:${name.charAt(0).toUpperCase()}${name.slice(1)}` : null;
}

/** GET the Commons API, backing off on HTTP 429. */
async function api(params: URLSearchParams): Promise<unknown> {
  for (let attempt = 1; ; attempt++) {
    const res = await fetch(`${API}?${params}`, { headers: { "User-Agent": USER_AGENT } });
    if (res.status === 429 && attempt < 6) {
      const wait = Number(res.headers.get("retry-after")) || 2 ** attempt;
      await new Promise((r) => setTimeout(r, wait * 1000));
      continue;
    }
    if (!res.ok) throw new Error(`Commons API returned HTTP ${res.status}`);
    return res.json();
  }
}

async function queryBatch(titles: string[], thumbWidth?: number): Promise<Map<string, ImageInfo | null>> {
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    formatversion: "2",
    redirects: "1",
    prop: "imageinfo",
    iiprop: "url|size|mime",
    titles: titles.join("|"),
  });
  if (thumbWidth) params.set("iiurlwidth", String(thumbWidth));

  const body = (await api(params)) as QueryResponse;
  // Follow the API's title normalization and redirects back to our titles.
  const alias = new Map<string, string>();
  for (const { from, to } of [...(body.query?.normalized ?? []), ...(body.query?.redirects ?? [])]) {
    alias.set(from, to);
  }
  const byTitle = new Map<string, ImageInfo | null>();
  for (const page of body.query?.pages ?? []) {
    byTitle.set(page.title, page.missing || !page.imageinfo ? null : page.imageinfo[0]);
  }
  const result = new Map<string, ImageInfo | null>();
  for (const title of titles) {
    let t = title;
    for (let i = 0; i < 3 && alias.has(t); i++) t = alias.get(t)!;
    result.set(title, byTitle.get(t) ?? null);
  }
  return result;
}

async function lookup(titles: string[], thumbWidth?: number): Promise<Map<string, ImageInfo | null>> {
  const unique = [...new Set(titles)];
  const all = new Map<string, ImageInfo | null>();
  for (let i = 0; i < unique.length; i += BATCH) {
    for (const [k, v] of await queryBatch(unique.slice(i, i + BATCH), thumbWidth)) all.set(k, v);
  }
  return all;
}

function printInfo(title: string, info: ImageInfo): void {
  const file = encodeURIComponent(title.slice(5).replace(/ /g, "_"));
  console.log(`✅ ${title}`);
  console.log(`   ${info.width}×${info.height} ${info.mime}, ${Math.round(info.size / 1024)} KB`);
  console.log(`   page:    ${info.descriptionurl}`);
  console.log(`   preview: ${info.thumburl ?? info.url}`);
  console.log(`   src:     https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=1024`);
}

/** Search Commons files and print the top matches. */
async function search(query: string): Promise<number> {
  const body = (await api(
    new URLSearchParams({
      action: "query",
      format: "json",
      formatversion: "2",
      list: "search",
      srnamespace: "6",
      srlimit: "10",
      srsearch: query,
    }),
  )) as { query?: { search?: { title: string }[] } };
  const titles = (body.query?.search ?? []).map((r) => r.title);
  if (titles.length === 0) {
    console.log(`No Commons files match "${query}"`);
    return 1;
  }
  const found = await lookup(titles, 640);
  for (const title of titles) {
    const info = found.get(title);
    if (info) printInfo(title, info);
  }
  return 0;
}

/** Mode 1: look up the files named on the command line. */
async function checkNamed(args: string[]): Promise<number> {
  const titles = args.map((a) => ({ arg: a, title: toTitle(a) }));
  const found = await lookup(titles.flatMap((t) => (t.title ? [t.title] : [])), 640);
  let failures = 0;
  for (const { arg, title } of titles) {
    const info = title ? found.get(title) : null;
    if (!title) {
      console.log(`❌ ${arg}\n   not a Wikimedia Commons file name or URL`);
    } else if (!info) {
      console.log(`❌ ${title}\n   does not exist on Commons`);
    } else {
      printInfo(title, info);
      continue;
    }
    failures++;
  }
  return failures;
}

/** Mode 2: check every image referenced by the data. */
async function checkAll(): Promise<number> {
  const refs: { where: string; src: string; title: string | null }[] = [];
  for (const section of SECTION_MODULES) {
    for (const period of section.periods as readonly PeriodDefinition[]) {
      for (const entry of period.timeline) {
        entry.events.forEach((event, i) => {
          if (!event.image) return;
          refs.push({
            where: `${section.id}/${period.id} year ${entry.year} event #${i}`,
            src: event.image.src,
            title: toTitle(event.image.src),
          });
        });
      }
    }
  }

  const found = await lookup(refs.flatMap((r) => (r.title ? [r.title] : [])));
  const broken = refs.filter((r) => !r.title || !found.get(r.title));

  console.log(`Checked ${refs.length} images (${found.size} distinct files) on Wikimedia Commons`);
  if (broken.length === 0) {
    console.log("✅ all images exist");
    return 0;
  }
  console.error(`\n❌ ${broken.length} broken image(s):`);
  for (const r of broken) {
    console.error(`  - ${r.where}\n    ${r.title ? `${r.title} does not exist` : "not a Commons URL"}: ${r.src}`);
  }
  return broken.length;
}

const args = process.argv.slice(2);
try {
  const failures =
    args[0] === "--search"
      ? await search(args.slice(1).join(" "))
      : args.length > 0
        ? await checkNamed(args)
        : await checkAll();
  process.exit(failures > 0 ? 1 : 0);
} catch (err) {
  console.error(`Could not reach Wikimedia Commons: ${err instanceof Error ? err.message : err}`);
  process.exit(2);
}
