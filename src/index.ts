/**
 * chronicon-config — shared configuration and content for Chronicon.
 *
 * The single source of truth for the languages, themes, sections, periods, and
 * historical timelines used by both chronicon (web) and chronicon-app (mobile).
 *
 * Canonical vocabulary is "section" (a group of periods). The apps currently
 * call these "regions"; drop-in `region`-named aliases are exported at the
 * bottom so they can migrate with only an import-path change.
 */

// ─── Languages & UI ──────────────────────────────────────────────────────────
export {
  LOCALES,
  LOCALE_NAMES,
  UI,
  DEFAULT_LOCALE,
  localize,
  type Locale,
  type LocalizedString,
} from "./i18n";

// ─── Data model ───────────────────────────────────────────────────────────────
export type {
  EventCategory,
  EventImage,
  HistoricalEvent,
  YearEntry,
  Theme,
  ThemeKey,
  FontFamilyKey,
  Palette,
  PeriodDefinition,
  SectionModule,
} from "./types";

// ─── Themes & palettes ─────────────────────────────────────────────────────────
export { THEMES, PALETTES } from "./themes";

// ─── Periods ────────────────────────────────────────────────────────────────────
export {
  PERIODS,
  PERIOD_IDS,
  PERIOD_ORDER,
  getPeriod,
  getPeriodLabel,
  type PeriodId,
} from "./periods";

// ─── Sections ─────────────────────────────────────────────────────────────────
export {
  SECTIONS,
  SECTION_IDS,
  SECTION_ORDER,
  sectionOrderForLocale,
  getSectionForPeriod,
  type SectionId,
  type SectionDefinition,
} from "./sections";

// The raw section registry and the flat period-id order, for tooling or custom
// orderings that need the underlying data directly.
export { SECTION_MODULES, PERIOD_ID_ORDER } from "./data";

// ─── Backwards-compatible "region" vocabulary ──────────────────────────────────
// chronicon / chronicon-app call sections "regions". Prefer the "section" names
// above in new code; these aliases exist to ease migration of the two apps.
export {
  SECTIONS as REGIONS,
  SECTION_IDS as REGION_IDS,
  SECTION_ORDER as REGION_ORDER,
  sectionOrderForLocale as regionOrderForLocale,
  getSectionForPeriod as getRegionForPeriod,
  type SectionId as Region,
  type SectionDefinition as RegionDefinition,
} from "./sections";
export { type PeriodId as Period } from "./periods";
