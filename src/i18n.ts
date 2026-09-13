/**
 * Languages & UI strings — the single source of truth for every locale
 * Chronicon speaks. Both chronicon (web) and chronicon-app (mobile) read
 * their locale list, locale names, and shared UI copy from here.
 *
 * ─── Adding a new language ────────────────────────────────────────────────
 * 1. Add its code to the `Locale` union below (e.g. `"en" | "el" | "fr"`).
 * 2. Add it to `LOCALES` and give it a display name in `LOCALE_NAMES`.
 * 3. Add the new key to the `UI` record (TypeScript will flag it as missing).
 * 4. Every `LocalizedString` in the data (sections, periods, events) is a
 *    `Record<Locale, string>`, so `tsc` will now flag each place that still
 *    needs a translation. Run `npm run typecheck` to get the full list, or
 *    `npm run validate` for a report grouped by section/period.
 *
 * `DEFAULT_LOCALE` and `localize()` (bottom of this file) let the apps fall
 * back gracefully to a base language while a new one is only partly translated.
 */
export type Locale = "en" | "el";

export type LocalizedString = Record<Locale, string>;

export const LOCALES: Locale[] = ["en", "el"];

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  el: "Ελληνικά",
};

export const UI: Record<
  Locale,
  {
    timelineHeading: string;
    yearSuffix: string;
    foundation: string;
    fall: string;
    previousYear: string;
    nextYear: string;
    earlier: string;
    later: string;
    milestones: (n: number) => string;
    ofYear: string;
    footerLine: string;
    languageLabel: string;
    sliderLabel: string;
    jumpTo: (year: number) => string;
    periodLabel: string;
    categories: {
      political: string;
      military: string;
      religious: string;
      cultural: string;
      other: string;
    };
    readMore: string;
    showLess: string;
    filterLabel: string;
    filterAll: string;
    moreThisYear: (n: number) => string;
    months: readonly string[];
  }
> = {
  en: {
    timelineHeading: "The Imperial Timeline",
    yearSuffix: "AD",
    foundation: "Foundation of Constantinople",
    fall: "Fall of Constantinople",
    previousYear: "Previous year",
    nextYear: "Next year",
    earlier: "← Earlier",
    later: "Later →",
    milestones: (n) => `${n} milestones`,
    ofYear: "In the year of Our Lord",
    footerLine: "Βασιλεία Ῥωμαίων · 330 – 1453",
    languageLabel: "Language",
    sliderLabel: "Timeline slider",
    jumpTo: (year) => `Jump to ${year}`,
    periodLabel: "Historical Period",
    categories: {
      political: "Political",
      military: "Military",
      religious: "Religious",
      cultural: "Cultural",
      other: "Event",
    },
    readMore: "Read more",
    showLess: "Show less",
    filterLabel: "Filter by category",
    filterAll: "All",
    moreThisYear: (n) => `+${n} more this year`,
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  el: {
    timelineHeading: "Η Αυτοκρατορική Χρονογραμμή",
    yearSuffix: "μ.Χ.",
    foundation: "Ίδρυση της Κωνσταντινούπολης",
    fall: "Άλωση της Κωνσταντινούπολης",
    previousYear: "Προηγούμενο έτος",
    nextYear: "Επόμενο έτος",
    earlier: "← Παλαιότερα",
    later: "Νεότερα →",
    milestones: (n) => `${n} σταθμοί`,
    ofYear: "Εν έτει Κυρίου",
    footerLine: "Βασιλεία Ρωμαίων · 330 – 1453",
    languageLabel: "Γλώσσα",
    sliderLabel: "Ολισθητής χρονογραμμής",
    jumpTo: (year) => `Μετάβαση στο ${year}`,
    periodLabel: "Ιστορική Περίοδος",
    categories: {
      political: "Πολιτικά",
      military: "Στρατιωτικά",
      religious: "Θρησκευτικά",
      cultural: "Πολιτιστικά",
      other: "Γεγονός",
    },
    readMore: "Διαβάστε περισσότερα",
    showLess: "Λιγότερα",
    filterLabel: "Φιλτράρισμα κατά κατηγορία",
    filterAll: "Όλα",
    moreThisYear: (n) => `+${n} ακόμη αυτό το έτος`,
    months: [
      "Ιανουάριος",
      "Φεβρουάριος",
      "Μάρτιος",
      "Απρίλιος",
      "Μάιος",
      "Ιούνιος",
      "Ιούλιος",
      "Αύγουστος",
      "Σεπτέμβριος",
      "Οκτώβριος",
      "Νοέμβριος",
      "Δεκέμβριος",
    ],
  },
};

/**
 * The base language. Used as the fallback in `localize()` when a string has
 * not yet been translated into some other locale.
 */
export const DEFAULT_LOCALE: Locale = "en";

/**
 * Read a `LocalizedString` for a locale, falling back to `DEFAULT_LOCALE`
 * (and then to any available value) when the requested locale is missing or
 * empty. Handy while a newly added language is still being translated.
 */
export function localize(
  value: LocalizedString,
  locale: Locale,
  fallback: Locale = DEFAULT_LOCALE,
): string {
  return value[locale] || value[fallback] || Object.values(value)[0] || "";
}
