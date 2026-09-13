/** Russian History — Ρωσική Ιστορία */
import type { SectionModule } from "../../types";
import { EARLY_SLAVIC_PRE_STATE } from "./early-slavic-pre-state";
import { KIEVAN_RUS } from "./kievan-rus";
import { FRAGMENTATION_MONGOL_PERIOD } from "./fragmentation-mongol-period";
import { TSARDOM_OF_RUSSIA } from "./tsardom-of-russia";
import { RUSSIAN_EMPIRE } from "./russian-empire";
import { REVOLUTION_CIVIL_WAR } from "./revolution-civil-war";
import { SOVIET_UNION } from "./soviet-union";
import { RUSSIAN_FEDERATION } from "./russian-federation";

export const RUSSIAN_HISTORY = {
  id: "russian-history" as const,
  label: {
    en: "Russian History",
    el: "Ρωσική Ιστορία"
  },
  periods: [
    EARLY_SLAVIC_PRE_STATE,
    KIEVAN_RUS,
    FRAGMENTATION_MONGOL_PERIOD,
    TSARDOM_OF_RUSSIA,
    RUSSIAN_EMPIRE,
    REVOLUTION_CIVIL_WAR,
    SOVIET_UNION,
    RUSSIAN_FEDERATION,
  ],
} satisfies SectionModule;
