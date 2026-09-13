/**
 * Periods — assembled from the section registry in `./data`.
 *
 * The individual periods live in `./data/<section>/<period>.ts`; this module
 * only stitches them together into the lookups the apps consume. To add a
 * period, see the instructions in `./data/index.ts`.
 */
import { SECTION_MODULES, PERIOD_ID_ORDER } from "./data";
import type { Locale } from "./i18n";
import type { PeriodDefinition } from "./types";

/** The precise union of every period id, derived from the registered data. */
export type PeriodId = (typeof SECTION_MODULES)[number]["periods"][number]["id"];

// Build the id → definition lookup from every section's periods.
const periodMap = {} as Record<PeriodId, PeriodDefinition>;
for (const section of SECTION_MODULES) {
  for (const period of section.periods) {
    periodMap[period.id] = period;
  }
}

/** Every period, keyed by id. */
export const PERIODS: Record<PeriodId, PeriodDefinition> = periodMap;

/** Every period id, in flat navigation order (see `PERIOD_ID_ORDER`). */
export const PERIOD_IDS: readonly PeriodId[] = PERIOD_ID_ORDER;

/** Every period, in flat navigation order (drives prev/next navigation). */
export const PERIOD_ORDER: readonly PeriodDefinition[] = PERIOD_IDS.map(
  (id) => PERIODS[id],
);

/** Look up a period by id. */
export function getPeriod(id: PeriodId): PeriodDefinition {
  return PERIODS[id];
}

/** A period's short label in the given locale. */
export function getPeriodLabel(id: PeriodId, locale: Locale): string {
  return PERIODS[id].label[locale];
}
