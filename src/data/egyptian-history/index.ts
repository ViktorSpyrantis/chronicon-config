/** Egyptian History — Αιγυπτιακή Ιστορία */
import type { SectionModule } from "../../types";
import { PREHISTORIC_EGYPT } from "./prehistoric-egypt";
import { EARLY_DYNASTIC_EGYPT } from "./early-dynastic-egypt";
import { OLD_KINGDOM_EGYPT } from "./old-kingdom-egypt";
import { FIRST_INTERMEDIATE_MIDDLE_KINGDOM_EGYPT } from "./first-intermediate-middle-kingdom-egypt";
import { SECOND_INTERMEDIATE_EGYPT } from "./second-intermediate-egypt";
import { NEW_KINGDOM_EGYPT } from "./new-kingdom-egypt";
import { THIRD_INTERMEDIATE_EGYPT } from "./third-intermediate-egypt";
import { LATE_PERIOD_EGYPT } from "./late-period-egypt";
import { PTOLEMAIC_EGYPT } from "./ptolemaic-egypt";
import { ROMAN_BYZANTINE_EGYPT } from "./roman-byzantine-egypt";
import { ISLAMIC_EGYPT } from "./islamic-egypt";
import { OTTOMAN_EGYPT } from "./ottoman-egypt";
import { MUHAMMAD_ALI_BRITISH_EGYPT } from "./muhammad-ali-british-egypt";
import { REPUBLIC_OF_EGYPT } from "./republic-of-egypt";

export const EGYPTIAN_HISTORY = {
  id: "egyptian-history" as const,
  label: {
    en: "Egyptian History",
    el: "Αιγυπτιακή Ιστορία"
  },
  periods: [
    PREHISTORIC_EGYPT,
    EARLY_DYNASTIC_EGYPT,
    OLD_KINGDOM_EGYPT,
    FIRST_INTERMEDIATE_MIDDLE_KINGDOM_EGYPT,
    SECOND_INTERMEDIATE_EGYPT,
    NEW_KINGDOM_EGYPT,
    THIRD_INTERMEDIATE_EGYPT,
    LATE_PERIOD_EGYPT,
    PTOLEMAIC_EGYPT,
    ROMAN_BYZANTINE_EGYPT,
    ISLAMIC_EGYPT,
    OTTOMAN_EGYPT,
    MUHAMMAD_ALI_BRITISH_EGYPT,
    REPUBLIC_OF_EGYPT,
  ],
} satisfies SectionModule;
