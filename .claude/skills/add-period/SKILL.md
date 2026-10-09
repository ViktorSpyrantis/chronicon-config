---
name: add-period
description: Add a new historical period (or a whole new section) to the Chronicon data — create the period file with a bilingual (en + el) timeline, register it, and validate. Use when asked to add a period, era, war, dynasty, or section to Chronicon.
---

# Add a period or section

The data model and conventions are in `CLAUDE.md` and README.md
("Extending the data"). This is the procedure.

## 1. Plan before writing

- Pull first: `git pull origin develop`.
- Read the target section's `src/data/<section-id>/index.ts` and one or two of
  its existing period files. Match their tone, depth, event count per year, and
  how they use `era`, `category`, and `extendedDescription`.
- Decide the period's id (kebab-case), its position in the section, and its
  slot in `PERIOD_ID_ORDER` (`src/data/index.ts`), which is the flat prev/next
  navigation order.
- Pick a theme from `THEMES` in `src/themes.ts` that fits and isn't already
  used by the neighbouring periods.

## 2. Write the period file

Create `src/data/<section-id>/<period-id>.ts` with an `UPPER_SNAKE_CASE`
export that ends in `satisfies PeriodDefinition` (copy the shape from a
sibling file, not from memory).

- Every string is `{ en, el }`. Write real Greek in `el`, with correct
  accents, and Greek forms of names (e.g. «Ναράμ-Σιν», «Βαβυλώνα»). Never
  copy the English into `el`.
- Years are numbers; BCE is negative. Keep the timeline in chronological order.
- Be accurate: only real events, dates, and people. If a date is uncertain,
  say so in the text ("c.", «περ.») and don't invent precision.

## 3. Register it

1. Import it and add it to the `periods` array in the section's `index.ts`.
2. Add its id to `PERIOD_ID_ORDER` in `src/data/index.ts`.

For a **new section**, also create `src/data/<section-id>/index.ts`
(`satisfies SectionModule`), add it to `SECTION_MODULES` in
`src/data/index.ts`, and optionally to `SECTION_ORDER_EN` in `src/sections.ts`.

## 4. Validate

```bash
npm run typecheck
npm run validate
```

Both must pass, with both locales "fully translated". Fix anything reported.

## 5. Images (optional)

To illustrate key events, follow the `add-event-images` skill.

## 6. Commit

Commit on `develop` with a message naming the section and period, e.g.
"Add Punic Wars period to Global Conflicts (en + el)", and push.
