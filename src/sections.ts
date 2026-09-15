/**
 * Sections — groups of periods (e.g. "Greek History"), assembled from the
 * section registry in `./data`.
 *
 * `SectionModule` (the authoring shape, in `./types`) carries the full period
 * objects; the public `SectionDefinition` here exposes them as ordered
 * `periodIds`, matching what the apps consume. To add a section, see the
 * instructions in `./data/index.ts`.
 */
import { SECTION_MODULES } from "./data";
import type { Locale, LocalizedString } from "./i18n";
import type { PeriodId } from "./periods";

/** The precise union of every section id, derived from the registered data. */
export type SectionId = (typeof SECTION_MODULES)[number]["id"];

/** A section as consumed by the apps: a label plus its ordered period ids. */
export interface SectionDefinition {
  id: SectionId;
  label: LocalizedString;
  periodIds: readonly PeriodId[];
}

const sectionOrder: SectionDefinition[] = SECTION_MODULES.map((module) => ({
  id: module.id,
  label: module.label,
  periodIds: module.periods.map((period) => period.id),
}));

/** Every section, in canonical display order. */
export const SECTION_ORDER: readonly SectionDefinition[] = sectionOrder;

/** Every section, keyed by id. */
export const SECTIONS: Record<SectionId, SectionDefinition> = Object.fromEntries(
  sectionOrder.map((section) => [section.id, section]),
) as Record<SectionId, SectionDefinition>;

/** Every section id, in canonical display order. */
export const SECTION_IDS: readonly SectionId[] = sectionOrder.map((s) => s.id);

// The landing page leads with the sections most relevant to English readers;
// anything not listed keeps its canonical position at the end, so newly added
// sections still appear. Greek (and any other locale) keeps the canonical order.
const SECTION_ORDER_EN: readonly SectionId[] = [
  "american-history",
  "british-history",
  "global-conflicts",
  "greek-history",
  "italian-history",
  "egyptian-history",
  "french-history",
  "german-history",
  "russian-history",
  "chinese-history",
  "japanese-history",
  "persian-history",
  "spanish-history",
];

/** Section display order, tuned per locale (English surfaces its content first). */
export function sectionOrderForLocale(locale: Locale): readonly SectionDefinition[] {
  if (locale !== "en") {
    return SECTION_ORDER;
  }
  const seen = new Set<SectionId>();
  const ordered: SectionDefinition[] = [];
  for (const id of SECTION_ORDER_EN) {
    const section = SECTIONS[id];
    if (section && !seen.has(id)) {
      ordered.push(section);
      seen.add(id);
    }
  }
  for (const section of SECTION_ORDER) {
    if (!seen.has(section.id)) {
      ordered.push(section);
      seen.add(section.id);
    }
  }
  return ordered;
}

/** The section a period belongs to (falls back to the first section). */
export function getSectionForPeriod(periodId: PeriodId): SectionDefinition {
  const section = SECTION_ORDER.find((s) => s.periodIds.includes(periodId));
  return section ?? SECTION_ORDER[0];
}
