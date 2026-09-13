/** Greek History — Ελληνική Ιστορία */
import type { SectionModule } from "../../types";
import { BRONZE_AGE_GREECE } from "./bronze-age-greece";
import { ARCHAIC_GREECE } from "./archaic-greece";
import { CLASSICAL_GREECE } from "./classical-greece";
import { HELLENISTIC } from "./hellenistic";
import { ROMAN_GREECE } from "./roman-greece";
import { EASTERN_ROMAN } from "./eastern-roman";
import { OTTOMAN_GREECE } from "./ottoman-greece";
import { MODERN_GREEK_STATE } from "./modern-greek-state";
import { PONTUS_ASIA_MINOR } from "./pontus-asia-minor";

export const GREEK_HISTORY = {
  id: "greek-history" as const,
  label: {
    en: "Greek History",
    el: "Ελληνική Ιστορία"
  },
  periods: [
    BRONZE_AGE_GREECE,
    ARCHAIC_GREECE,
    CLASSICAL_GREECE,
    HELLENISTIC,
    ROMAN_GREECE,
    EASTERN_ROMAN,
    OTTOMAN_GREECE,
    MODERN_GREEK_STATE,
    PONTUS_ASIA_MINOR,
  ],
} satisfies SectionModule;
