/**
 * Emit the JSON snapshot the apps fetch at build time.
 *
 * chronicon (web) fetches this file during `next build` and, when it validates,
 * builds from it instead of its bundled local copy — falling back to local if
 * the fetch is unavailable or too slow. Run it after changing any data:
 *
 *   npm run build:snapshot        # writes ./chronicon.json
 *
 * The three UI fields that are functions at runtime (`milestones`, `jumpTo`,
 * `moreThisYear`) are serialized as template strings with `{n}` / `{year}`
 * placeholders; the consumer turns them back into functions.
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

import {
  PERIODS,
  PERIOD_IDS,
  REGIONS,
  REGION_IDS,
  UI,
  LOCALES,
  LOCALE_NAMES,
  THEMES,
  PALETTES,
} from "../src/index";

const SCHEMA = 1;
const require = createRequire(import.meta.url);
const pkg = require("../package.json") as { version?: string };

// The UI fields that are functions; each is called with its placeholder token
// so the interpolated result *is* the template (e.g. `milestones("{n}")` ->
// "{n} milestones"). Keep in sync with the consumer's rehydrateUI().
const FN_PLACEHOLDER: Record<string, string> = {
  milestones: "{n}",
  jumpTo: "{year}",
  moreThisYear: "{n}",
};

function serializeUi(ui: (typeof UI)[keyof typeof UI]) {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(ui)) {
    if (typeof value === "function") {
      const token = FN_PLACEHOLDER[key];
      if (!token) {
        throw new Error(
          `UI.${key} is a function with no known placeholder; add it to ` +
            `FN_PLACEHOLDER (and to the consumer's rehydrateUI).`,
        );
      }
      out[key] = (value as unknown as (arg: string) => string)(token);
    } else {
      out[key] = value;
    }
  }
  return out;
}

const ui = Object.fromEntries(
  LOCALES.map((locale) => [locale, serializeUi(UI[locale])]),
);

const snapshot = {
  schema: SCHEMA,
  source: "config",
  version: pkg.version ?? null,
  generatedAt: new Date().toISOString(),
  locales: LOCALES,
  localeNames: LOCALE_NAMES,
  ui,
  themes: THEMES,
  palettes: PALETTES,
  periodIds: PERIOD_IDS,
  periods: PERIODS,
  regionIds: REGION_IDS,
  regions: REGIONS,
};

const outPath =
  process.argv[2] ??
  join(dirname(fileURLToPath(import.meta.url)), "..", "chronicon.json");

writeFileSync(outPath, JSON.stringify(snapshot) + "\n");
console.log(
  `Wrote ${outPath} — ${PERIOD_IDS.length} periods, ${REGION_IDS.length} sections, ` +
    `schema ${SCHEMA}, version ${snapshot.version ?? "(none)"}.`,
);
