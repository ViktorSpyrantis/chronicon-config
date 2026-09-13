/** German History — Γερμανική Ιστορία */
import type { SectionModule } from "../../types";
import { GERMANIC_ANTIQUITY } from "./germanic-antiquity";
import { HOLY_ROMAN_EMPIRE } from "./holy-roman-empire";
import { PRUSSIA_GERMAN_UNIFICATION } from "./prussia-german-unification";
import { GERMAN_EMPIRE } from "./german-empire";
import { WEIMAR_REPUBLIC } from "./weimar-republic";
import { NAZI_GERMANY_WWII } from "./nazi-germany-wwii";
import { MODERN_GERMANY } from "./modern-germany";

export const GERMAN_HISTORY = {
  id: "german-history" as const,
  label: {
    en: "German History",
    el: "Γερμανική Ιστορία"
  },
  periods: [
    GERMANIC_ANTIQUITY,
    HOLY_ROMAN_EMPIRE,
    PRUSSIA_GERMAN_UNIFICATION,
    GERMAN_EMPIRE,
    WEIMAR_REPUBLIC,
    NAZI_GERMANY_WWII,
    MODERN_GERMANY,
  ],
} satisfies SectionModule;
