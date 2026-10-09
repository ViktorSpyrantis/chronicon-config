/** Vikings & Scandinavia — Βίκινγκς & Σκανδιναβία */
import type { SectionModule } from "../../types";
import { PREHISTORIC_SCANDINAVIA } from "./prehistoric-scandinavia";
import { IRON_AGE_SCANDINAVIA } from "./iron-age-scandinavia";
import { VIKING_RAIDS } from "./viking-raids";
import { VIKING_KINGS_VOYAGERS } from "./viking-kings-voyagers";
import { MEDIEVAL_NORDIC_KINGDOMS } from "./medieval-nordic-kingdoms";
import { KALMAR_UNION } from "./kalmar-union";
import { REFORMATION_GREAT_POWER } from "./reformation-great-power";
import { ENLIGHTENMENT_NAPOLEONIC_NORTH } from "./enlightenment-napoleonic-north";
import { NORDIC_NATIONS_19TH_CENTURY } from "./nordic-nations-19th-century";
import { MODERN_NORDIC_COUNTRIES } from "./modern-nordic-countries";

export const SCANDINAVIAN_HISTORY = {
  id: "scandinavian-history" as const,
  label: {
    en: "Vikings & Scandinavia",
    el: "Βίκινγκς & Σκανδιναβία"
  },
  periods: [
    PREHISTORIC_SCANDINAVIA,
    IRON_AGE_SCANDINAVIA,
    VIKING_RAIDS,
    VIKING_KINGS_VOYAGERS,
    MEDIEVAL_NORDIC_KINGDOMS,
    KALMAR_UNION,
    REFORMATION_GREAT_POWER,
    ENLIGHTENMENT_NAPOLEONIC_NORTH,
    NORDIC_NATIONS_19TH_CENTURY,
    MODERN_NORDIC_COUNTRIES,
  ],
} satisfies SectionModule;
