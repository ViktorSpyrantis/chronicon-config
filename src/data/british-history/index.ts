/** British History — Βρετανική Ιστορία */
import type { SectionModule } from "../../types";
import { PREHISTORIC_ROMAN_BRITAIN } from "./prehistoric-roman-britain";
import { ANGLO_SAXON_ENGLAND } from "./anglo-saxon-england";
import { NORMAN_MEDIEVAL_ENGLAND } from "./norman-medieval-england";
import { EARLY_MODERN_BRITAIN } from "./early-modern-britain";
import { INDUSTRIAL_IMPERIAL_BRITAIN } from "./industrial-imperial-britain";
import { MODERN_BRITAIN } from "./modern-britain";

export const BRITISH_HISTORY = {
  id: "british-history" as const,
  label: {
    en: "British History",
    el: "Βρετανική Ιστορία"
  },
  periods: [
    PREHISTORIC_ROMAN_BRITAIN,
    ANGLO_SAXON_ENGLAND,
    NORMAN_MEDIEVAL_ENGLAND,
    EARLY_MODERN_BRITAIN,
    INDUSTRIAL_IMPERIAL_BRITAIN,
    MODERN_BRITAIN,
  ],
} satisfies SectionModule;
