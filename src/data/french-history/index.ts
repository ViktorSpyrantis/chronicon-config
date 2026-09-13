/** French History — Γαλλική Ιστορία */
import type { SectionModule } from "../../types";
import { PREHISTORIC_ANCIENT_GAUL } from "./prehistoric-ancient-gaul";
import { FRANKISH_KINGDOMS } from "./frankish-kingdoms";
import { HIGH_LATE_MEDIEVAL_FRANCE } from "./high-late-medieval-france";
import { RENAISSANCE_RELIGIOUS_WARS_FRANCE } from "./renaissance-religious-wars-france";
import { ABSOLUTE_MONARCHY_ANCIEN_REGIME } from "./absolute-monarchy-ancien-regime";
import { FRENCH_REVOLUTION_NAPOLEON } from "./french-revolution-napoleon";
import { NINETEENTH_CENTURY_FRANCE } from "./nineteenth-century-france";
import { WORLD_WARS_CRISIS_FRANCE } from "./world-wars-crisis-france";
import { MODERN_CONTEMPORARY_FRANCE } from "./modern-contemporary-france";

export const FRENCH_HISTORY = {
  id: "french-history" as const,
  label: {
    en: "French History",
    el: "Γαλλική Ιστορία"
  },
  periods: [
    PREHISTORIC_ANCIENT_GAUL,
    FRANKISH_KINGDOMS,
    HIGH_LATE_MEDIEVAL_FRANCE,
    RENAISSANCE_RELIGIOUS_WARS_FRANCE,
    ABSOLUTE_MONARCHY_ANCIEN_REGIME,
    FRENCH_REVOLUTION_NAPOLEON,
    NINETEENTH_CENTURY_FRANCE,
    WORLD_WARS_CRISIS_FRANCE,
    MODERN_CONTEMPORARY_FRANCE,
  ],
} satisfies SectionModule;
