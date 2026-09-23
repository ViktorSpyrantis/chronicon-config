# CLAUDE.md

Shared, typed content for the Chronicon web app (`chronicon`) and mobile app
(`chronicon-app`): sections, periods, timelines, themes, and UI copy. Plain
TypeScript, no runtime dependencies. See `README.md` for the full data model and
the step-by-step "Extending the data" recipes.

## Workflow

- Work on the `develop` branch. `main` is updated by merging `develop`.
- Always `git pull origin develop` before starting work; the SessionStart hook
  does this automatically in cloud sessions.
- Before committing, both must pass:
  ```bash
  npm run typecheck   # tsc --noEmit
  npm run validate    # ids unique, orders in sync, every string translated
  ```
  A PostToolUse hook runs both after every edit under `src/` and reports failures.
- There is no test suite; `validate` is the correctness check.
- GitHub Actions (`.github/workflows/ci.yml`) runs the same two checks on
  pushes to `main`/`develop` and on every pull request.

## Content rules

- **Every user-facing string is bilingual.** `LocalizedString` is `{ en, el }`.
  Never leave `el` empty or copy the English into it — write real Greek.
  This includes image `alt` text.
- **One period per file**: `src/data/<section-id>/<period-id>.ts`, exporting an
  `UPPER_SNAKE_CASE` const that ends with `satisfies PeriodDefinition`. Ids are
  kebab-case and `as const`.
- **Registering a new period** takes two edits, or `validate` fails:
  1. add it to its section's `src/data/<section-id>/index.ts` `periods` array;
  2. add its id to `PERIOD_ID_ORDER` in `src/data/index.ts`.
- **A new section** also goes in `SECTION_MODULES` in `src/data/index.ts`, and
  optionally `SECTION_ORDER_EN` in `src/sections.ts`.
- Themes are referenced as `theme: THEMES.<key>`; a new theme needs entries in
  `ThemeKey` (`src/types.ts`), `THEMES`, and `PALETTES` (`src/themes.ts`).
- Timeline years are numbers; BCE years are negative (e.g. `year: -2254`).
- Historical content must be accurate. Don't invent events, dates, or quotes.

## Images

Event images (`EventImage` in `src/types.ts`) follow this convention:

```ts
image: {
  src: "https://commons.wikimedia.org/wiki/Special:FilePath/<File_name.jpg>?width=1024",
  alt: { en: "…", el: "…" },
  credit: "Via Wikimedia Commons",
},
```

- Use Wikimedia Commons only, with the `Special:FilePath/…?width=1024` form.
  Percent-encode non-ASCII characters in the file name.
- **Verify every image before adding it**: confirm the file exists on Commons
  (e.g. via the Commons API) and look at what it actually shows. Never guess a
  file name.
- Alt text describes the actual image (map, portrait, coin, reconstruction…),
  not just the event, in both English and Greek.

## Commits

Clear, descriptive messages that name the section/period touched, e.g.
"Add Punic Wars period to Global Conflicts (en + el)".
