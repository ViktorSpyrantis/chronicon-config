/** Ancient Levant — Αρχαίος Λεβάντες */
import type { SectionModule } from "../../types";
import { CANAAN_BRONZE_AGE } from "./canaan-bronze-age";
import { PHOENICIA } from "./phoenicia";
import { ISRAEL_AND_PHILISTINES } from "./israel-and-philistines";
import { UNITED_MONARCHY } from "./united-monarchy";
import { TWO_KINGDOMS } from "./two-kingdoms";
import { JUDAH_AND_EXILE } from "./judah-and-exile";
import { RETURN_SECOND_TEMPLE } from "./return-second-temple";
import { HELLENISTIC_JUDEA_MACCABEES } from "./hellenistic-judea-maccabees";
import { ROMAN_JUDEA } from "./roman-judea";

export const ANCIENT_LEVANT = {
  id: "ancient-levant" as const,
  label: {
    en: "Ancient Levant",
    el: "Αρχαίος Λεβάντες"
  },
  periods: [
    CANAAN_BRONZE_AGE,
    PHOENICIA,
    ISRAEL_AND_PHILISTINES,
    UNITED_MONARCHY,
    TWO_KINGDOMS,
    JUDAH_AND_EXILE,
    RETURN_SECOND_TEMPLE,
    HELLENISTIC_JUDEA_MACCABEES,
    ROMAN_JUDEA,
  ],
} satisfies SectionModule;
