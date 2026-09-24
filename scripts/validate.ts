/**
 * Consistency checks for the Chronicon configuration. Run with `npm run validate`.
 *
 * Self-contained (does not depend on the apps). Verifies structural integrity
 * (including that every timeline is in chronological order)
 * and reports any `LocalizedString` that is missing a translation — handy after
 * adding a period, a section, or a new language.
 */
import { LOCALES, type LocalizedString } from "../src/i18n";
import { SECTION_MODULES, PERIOD_ID_ORDER } from "../src/data";
import { THEMES, PALETTES } from "../src/themes";
import type { PeriodDefinition, ThemeKey } from "../src/types";

const errors: string[] = [];
const missingByLocale: Record<string, number> = {};
for (const l of LOCALES) missingByLocale[l] = 0;

function checkLocalized(value: LocalizedString | undefined, where: string): void {
  if (!value) return;
  for (const locale of LOCALES) {
    const text = value[locale];
    if (typeof text !== "string" || text.trim() === "") {
      missingByLocale[locale]++;
      if (missingByLocale[locale] <= 20) {
        errors.push(`missing/empty ${locale} translation: ${where}`);
      }
    }
  }
}

// 1) Unique section ids; unique period ids across all sections.
const sectionIds = new Set<string>();
const periodIds = new Set<string>();
for (const section of SECTION_MODULES) {
  if (sectionIds.has(section.id)) errors.push(`duplicate section id: ${section.id}`);
  sectionIds.add(section.id);

  checkLocalized(section.label, `section "${section.id}".label`);

  for (const period of section.periods as readonly PeriodDefinition[]) {
    if (periodIds.has(period.id)) {
      errors.push(`duplicate period id: ${period.id} (also in another section)`);
    }
    periodIds.add(period.id);

    const base = `period "${period.id}"`;
    checkLocalized(period.label, `${base}.label`);
    checkLocalized(period.supertitle, `${base}.supertitle`);
    checkLocalized(period.title, `${base}.title`);
    checkLocalized(period.subtitle, `${base}.subtitle`);
    checkLocalized(period.menuDescription, `${base}.menuDescription`);
    checkLocalized(period.footerLabel, `${base}.footerLabel`);
    checkLocalized(period.headerTimelineLabel, `${base}.headerTimelineLabel`);
    checkLocalized(period.timelineHeading, `${base}.timelineHeading`);

    // Theme reference must be a real theme.
    const key = period.theme.className.replace("period-theme-", "") as ThemeKey;
    if (!THEMES[key]) errors.push(`${base} references unknown theme "${key}"`);

    // Timeline localized content.
    for (const year of period.timeline) {
      const yWhere = `${base} year ${year.year}`;
      checkLocalized(year.era, `${yWhere}.era`);
      for (let i = 0; i < year.events.length; i++) {
        const event = year.events[i];
        const eWhere = `${yWhere} event #${i + 1}`;
        checkLocalized(event.title, `${eWhere}.title`);
        checkLocalized(event.description, `${eWhere}.description`);
        checkLocalized(event.extendedDescription, `${eWhere}.extendedDescription`);
        if (event.image) checkLocalized(event.image.alt, `${eWhere}.image.alt`);
      }
    }

    // Timeline entries must be in chronological order (by year, then month).
    const when = (y: { year: number; month?: number }) => `${y.year}${y.month ? `/${y.month}` : ""}`;
    for (let i = 1; i < period.timeline.length; i++) {
      const prev = period.timeline[i - 1];
      const cur = period.timeline[i];
      if (cur.year < prev.year || (cur.year === prev.year && (cur.month ?? 0) < (prev.month ?? 0))) {
        errors.push(`${base} timeline out of order: ${when(prev)} is followed by ${when(cur)}`);
      }
    }
  }
}

// 2) PERIOD_ID_ORDER must list exactly the registered periods, once each.
const orderSet = new Set<string>(PERIOD_ID_ORDER);
if (orderSet.size !== PERIOD_ID_ORDER.length) {
  errors.push("PERIOD_ID_ORDER contains duplicates");
}
for (const id of PERIOD_ID_ORDER) {
  if (!periodIds.has(id)) errors.push(`PERIOD_ID_ORDER lists unknown period: ${id}`);
}
for (const id of periodIds) {
  if (!orderSet.has(id)) errors.push(`period "${id}" is missing from PERIOD_ID_ORDER`);
}

// 3) Every theme has a palette and vice versa.
for (const key of Object.keys(THEMES) as ThemeKey[]) {
  if (!PALETTES[key]) errors.push(`theme "${key}" has no palette in PALETTES`);
}
for (const key of Object.keys(PALETTES) as ThemeKey[]) {
  if (!THEMES[key]) errors.push(`palette "${key}" has no theme in THEMES`);
}

// ─── report ────────────────────────────────────────────────────────────────
const translationErrors = LOCALES.reduce((n, l) => n + missingByLocale[l], 0);
const structuralErrors = errors.length - Math.min(errors.length, translationErrors);

console.log(
  `Chronicon config: ${sectionIds.size} sections, ${periodIds.size} periods, ${Object.keys(THEMES).length} themes, locales [${LOCALES.join(", ")}]`,
);
for (const locale of LOCALES) {
  const n = missingByLocale[locale];
  console.log(`  ${locale}: ${n === 0 ? "fully translated" : `${n} missing/empty string(s)`}`);
}

if (errors.length === 0) {
  console.log("✅ validation passed");
} else {
  console.error(`\n❌ ${errors.length} issue(s) found:`);
  for (const e of errors.slice(0, 60)) console.error(`  - ${e}`);
  if (errors.length > 60) console.error(`  … and ${errors.length - 60} more`);
  void structuralErrors;
  process.exit(1);
}
