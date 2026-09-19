# chronicon-config

Shared **configuration and content** for Chronicon — the single source of truth
for the languages, themes, sections, periods, and historical timelines used by
both apps:

- [**chronicon**](https://github.com/ViktorSpyrantis/chronicon) — the web app (Next.js)
- [**chronicon-app**](https://github.com/ViktorSpyrantis/chronicon-app) — the mobile app (Expo / React Native)

Today the two apps each carry their own copy of this data. This package pulls it
into one place so it is authored, translated, and reviewed once, and consumed by
both. It is written as plain, typed TypeScript modules with no runtime
dependencies.

> The apps are **not** modified by this repository. Migrating them to import from
> `chronicon-config` is a separate, later step (see [Consuming this package](#consuming-this-package)).

## What's inside

| Data | Count |
| --- | --- |
| Languages (locales) | 2 — English (`en`), Greek (`el`) |
| Sections | 16 |
| Periods | 156 |
| Historical events | ~2,155 across all timelines |
| Themes / palettes | 18 |

Every piece of user-facing text is a `LocalizedString` (`{ en, el }`), so all
content exists in every language.

## Concepts

- **Section** — a top-level grouping of periods, e.g. *Greek History*,
  *American History*, *Global Conflicts*. (The apps currently call these
  "regions"; see [Compatibility](#compatibility-region-aliases).)
- **Period** — a titled span of history within a section, e.g. *Classical
  Greece*. A period carries its localized presentation (labels, titles,
  descriptions), a **theme**, and a **timeline**.
- **Timeline** — the chronological list of `YearEntry` items for a period, each
  holding one or more `HistoricalEvent`s.
- **Theme / palette** — the visual identity a period uses. `THEMES` is the
  reference each period stores; `PALETTES` holds the canonical colours.
- **Locale** — a language. Adding one is designed to be a localized change.

## Layout

```
src/
  index.ts              # public API (import from here)
  i18n.ts               # Locale, LOCALES, LOCALE_NAMES, UI copy, localize()
  types.ts              # the shared data model (types only)
  themes.ts             # THEMES + PALETTES (18 themes)
  periods.ts            # assembles PERIODS / PERIOD_ORDER / getPeriod(...)
  sections.ts           # assembles SECTIONS / SECTION_ORDER / getSectionForPeriod(...)
  data/
    index.ts            # the section registry + the flat period navigation order
    <section-id>/
      index.ts          # the section: id, label, and its ordered periods
      <period-id>.ts    # one self-contained period (metadata + full timeline)
scripts/
  validate.ts           # structural + translation-completeness checks
```

Each period lives in exactly one self-contained file, so a period's metadata and
its entire timeline sit together. Sections and periods are wired up through small
registries, which is what makes adding new ones a local change.

## Consuming this package

Both apps are TypeScript and bundle their dependencies, so they can import the
source directly:

```ts
import {
  SECTIONS,
  PERIODS,
  PERIOD_ORDER,
  getPeriod,
  sectionOrderForLocale,
  UI,
  LOCALES,
  type Locale,
  type PeriodDefinition,
} from "chronicon-config";
```

- **chronicon (Next.js)** — add `transpilePackages: ["chronicon-config"]` to
  `next.config.mjs` so Next compiles the package's TypeScript.
- **chronicon-app (Expo / Metro)** — Metro transpiles workspace TypeScript; no
  extra config is typically required.

Prefer a pre-compiled build instead? `npm run build` emits JavaScript and
`.d.ts` files to `dist/`.

### Compatibility: `region` aliases

The apps currently call sections **regions**. To make migration a pure
import-path change, the package also exports region-named aliases:

| Canonical (`section`) | Alias (`region`) |
| --- | --- |
| `SECTIONS` | `REGIONS` |
| `SECTION_IDS` | `REGION_IDS` |
| `SECTION_ORDER` | `REGION_ORDER` |
| `sectionOrderForLocale` | `regionOrderForLocale` |
| `getSectionForPeriod` | `getRegionForPeriod` |
| `SectionId` | `Region` |
| `SectionDefinition` | `RegionDefinition` |
| `PeriodId` | `Period` |

New code should prefer the `section` names.

## Extending the data

After any change, run:

```bash
npm run typecheck   # types line up
npm run validate    # ids unique, orders in sync, every string translated
```

### Add a period

1. Create `src/data/<section-id>/<period-id>.ts`:

   ```ts
   import type { PeriodDefinition } from "../../types";
   import { THEMES } from "../../themes";

   export const MY_PERIOD = {
     id: "my-period" as const,
     label: { en: "My Period", el: "…" },
     supertitle: { en: "…", el: "…" },
     title: { en: "…", el: "…" },
     subtitle: { en: "…", el: "…" },
     menuDescription: { en: "…", el: "…" },
     footerLabel: { en: "…", el: "…" },
     headerTimelineLabel: { en: "…", el: "…" },
     timelineHeading: { en: "…", el: "…" },
     theme: THEMES.gold,
     timeline: [
       {
         year: 1204,
         era: { en: "…", el: "…" },
         events: [
           {
             title: { en: "…", el: "…" },
             description: { en: "…", el: "…" },
             category: "political",
           },
         ],
       },
     ],
   } satisfies PeriodDefinition;
   ```

2. Add it to that section's `src/data/<section-id>/index.ts` `periods` array,
   in the position you want it to appear.
3. Add its id to `PERIOD_ID_ORDER` in `src/data/index.ts` (its slot in the flat
   prev/next navigation order).

The `PeriodId` union updates automatically from the registered data.

### Add a section

1. Create `src/data/<section-id>/` with an `index.ts` and its period files:

   ```ts
   import type { SectionModule } from "../../types";
   import { FIRST_PERIOD } from "./first-period";

   export const MY_SECTION = {
     id: "my-section" as const,
     label: { en: "My Section", el: "…" },
     periods: [FIRST_PERIOD],
   } satisfies SectionModule;
   ```

2. Import its const in `src/data/index.ts` and add it to `SECTION_MODULES` where
   it should appear.
3. Add its periods to `PERIOD_ID_ORDER`.
4. Optionally place it in the English-first order in `src/sections.ts`
   (`SECTION_ORDER_EN`); unlisted sections keep their canonical position.

### Add a language

1. In `src/i18n.ts`: add the code to the `Locale` union, to `LOCALES`, and a
   display name to `LOCALE_NAMES`; add the locale's `UI` copy.
2. Every `LocalizedString` is a `Record<Locale, string>`, so `npm run typecheck`
   now flags each string that still needs a translation, and `npm run validate`
   lists them grouped by section/period.
3. `localize(value, locale)` falls back to `DEFAULT_LOCALE` while a language is
   only partly translated, so the apps keep working during the rollout.

### Add a theme

1. Add its key to the `ThemeKey` union in `src/types.ts`.
2. Add an entry to both `THEMES` and `PALETTES` in `src/themes.ts`.
3. Reference it from a period via `theme: THEMES.<key>`.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run typecheck` | Type-checks the whole package (`tsc --noEmit`). |
| `npm run validate` | Structural checks + a per-locale translation-completeness report. |
| `npm run build` | Emits compiled JS + `.d.ts` to `dist/` (optional). |
