/** Spanish History — Ισπανική Ιστορία */
import type { SectionModule } from "../../types";
import { PREHISTORIC_ANCIENT_IBERIA } from "./prehistoric-ancient-iberia";
import { ROMAN_HISPANIA } from "./roman-hispania";
import { VISIGOTHIC_SPAIN } from "./visigothic-spain";
import { ANDALUS_RECONQUISTA } from "./andalus-reconquista";
import { SPANISH_EMPIRE_GOLDEN_AGE } from "./spanish-empire-golden-age";
import { BOURBON_REFORMS_DECLINE } from "./bourbon-reforms-decline";
import { CRISIS_LIBERALISM_LOST_COLONIES } from "./crisis-liberalism-lost-colonies";
import { EARLY_20TH_CIVIL_WAR } from "./early-20th-civil-war";
import { FRANCOIST_SPAIN } from "./francoist-spain";
import { DEMOCRATIC_MODERN_SPAIN } from "./democratic-modern-spain";

export const SPANISH_HISTORY = {
  id: "spanish-history" as const,
  label: {
    en: "Spanish History",
    el: "Ισπανική Ιστορία"
  },
  periods: [
    PREHISTORIC_ANCIENT_IBERIA,
    ROMAN_HISPANIA,
    VISIGOTHIC_SPAIN,
    ANDALUS_RECONQUISTA,
    SPANISH_EMPIRE_GOLDEN_AGE,
    BOURBON_REFORMS_DECLINE,
    CRISIS_LIBERALISM_LOST_COLONIES,
    EARLY_20TH_CIVIL_WAR,
    FRANCOIST_SPAIN,
    DEMOCRATIC_MODERN_SPAIN,
  ],
} satisfies SectionModule;
