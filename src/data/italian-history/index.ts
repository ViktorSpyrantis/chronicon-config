/** Italian History — Ιταλική Ιστορία */
import type { SectionModule } from "../../types";
import { PREHISTORIC_ANCIENT_ITALY } from "./prehistoric-ancient-italy";
import { ROME } from "./rome";
import { EARLY_MIDDLE_AGES } from "./early-middle-ages";
import { HIGH_MIDDLE_AGES_CITY_STATES } from "./high-middle-ages-city-states";
import { ITALIAN_RENAISSANCE } from "./italian-renaissance";
import { ITALIAN_FOREIGN_DOMINATION } from "./italian-foreign-domination";
import { NAPOLEONIC_RISORGIMENTO } from "./napoleonic-risorgimento";
import { LIBERAL_ITALY_WORLD_WARS } from "./liberal-italy-world-wars";
import { REPUBLIC_OF_ITALY } from "./republic-of-italy";

export const ITALIAN_HISTORY = {
  id: "italian-history" as const,
  label: {
    en: "Italian History",
    el: "Ιταλική Ιστορία"
  },
  periods: [
    PREHISTORIC_ANCIENT_ITALY,
    ROME,
    EARLY_MIDDLE_AGES,
    HIGH_MIDDLE_AGES_CITY_STATES,
    ITALIAN_RENAISSANCE,
    ITALIAN_FOREIGN_DOMINATION,
    NAPOLEONIC_RISORGIMENTO,
    LIBERAL_ITALY_WORLD_WARS,
    REPUBLIC_OF_ITALY,
  ],
} satisfies SectionModule;
