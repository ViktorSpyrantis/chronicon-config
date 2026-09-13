/**
 * Shared data model for Chronicon's configuration.
 *
 * These types are deliberately small and free of any rendering concerns so
 * that both chronicon (web) and chronicon-app (mobile) can share the exact
 * same data. Ids on the authoring types (`PeriodDefinition.id`,
 * `SectionModule.id`) are plain `string`s; the precise string-literal unions
 * `PeriodId` / `SectionId` are derived from the registered data in
 * `./periods` and `./sections`.
 */
import type { Locale, LocalizedString } from "./i18n";

export type { Locale, LocalizedString } from "./i18n";

/* ─── Historical events (a period's timeline) ─────────────────────────────── */

/** The kind of event, used for filtering and iconography. */
export type EventCategory =
  | "political"
  | "military"
  | "religious"
  | "cultural"
  | "other";

/** An illustration attached to an event. */
export interface EventImage {
  src: string;
  alt: LocalizedString;
  credit?: string;
}

/** A single historical event within a year. */
export interface HistoricalEvent {
  title: LocalizedString;
  description: LocalizedString;
  extendedDescription?: LocalizedString;
  category?: EventCategory;
  image?: EventImage;
}

/** All events for a single year (or a finer point in time via `month`). */
export interface YearEntry {
  year: number;
  month?: number;
  label?: string;
  era: LocalizedString;
  events: HistoricalEvent[];
}

/* ─── Themes ──────────────────────────────────────────────────────────────── */

/**
 * The palette key that identifies a theme, e.g. `"gold"`. It is also the
 * suffix of the web app's CSS class (`period-theme-gold`). Add a new key here
 * when introducing a new theme, then add it to `THEMES` and `PALETTES`.
 */
export type ThemeKey =
  | "amber"
  | "azure"
  | "bronze"
  | "copper"
  | "crimson"
  | "emerald"
  | "forest"
  | "gold"
  | "ivory"
  | "onyx"
  | "rose"
  | "ruby"
  | "sage"
  | "sapphire"
  | "slate"
  | "teal"
  | "terracotta"
  | "violet";

/**
 * The theme reference carried by every period. `name` is the human label and
 * `className` is the web app's CSS class; the remaining fields are the shared
 * structural class names both apps use. The concrete colour values live in
 * `PALETTES` (see `./themes`), keyed by the `className` suffix.
 */
export interface Theme {
  name: string;
  className: string;
  backdrop: string;
  frame: string;
  slider: string;
  gold: string;
  goldSoft: string;
  parchment: string;
  panel: string;
}

/** The body typeface a theme uses (the display face is always Cinzel). */
export type FontFamilyKey = "cormorant" | "alegreya";

/**
 * The canonical colours for a theme — the seven core values every consumer
 * derives its full colour set from. Mirrors the web app's CSS custom
 * properties and the native app's `PALETTES`.
 */
export interface Palette {
  primary: string;
  secondary: string;
  accent: string;
  bg: string;
  deep: string;
  text: string;
  body: FontFamilyKey;
}

/* ─── Periods ─────────────────────────────────────────────────────────────── */

/**
 * A period: a titled span of history with a localized presentation and a
 * timeline of events. This is the authoring shape used by each file under
 * `./data/<section>/<period>.ts`.
 */
export interface PeriodDefinition {
  /** Stable slug, unique across all sections (e.g. `"classical-greece"`). */
  id: string;
  /** Short label used in menus and selectors. */
  label: LocalizedString;
  /** Small line shown above the title. */
  supertitle: LocalizedString;
  /** The period's headline title. */
  title: LocalizedString;
  /** One or two sentences introducing the period. */
  subtitle: LocalizedString;
  /** A single sentence used in menus/cards. */
  menuDescription: LocalizedString;
  /** Label used in the footer, usually with a date range. */
  footerLabel: LocalizedString;
  /** Label for the timeline in the header. */
  headerTimelineLabel: LocalizedString;
  /** Heading shown above the timeline itself. */
  timelineHeading: LocalizedString;
  /** The chronological list of events for this period. */
  timeline: YearEntry[];
  /** The visual theme (see `./themes`). */
  theme: Theme;
}

/* ─── Sections ────────────────────────────────────────────────────────────── */

/**
 * The authoring shape of a section (a group of periods, e.g. "Greek History").
 * Each file under `./data/<section>/index.ts` exports one of these, listing
 * its periods in display order. The assembled, public form is
 * `SectionDefinition` (see `./sections`), where `periods` becomes `periodIds`.
 */
export interface SectionModule {
  /** Stable slug, unique across all sections (e.g. `"greek-history"`). */
  id: string;
  /** The section's display name. */
  label: LocalizedString;
  /** The section's periods, in display order. */
  periods: readonly PeriodDefinition[];
}
