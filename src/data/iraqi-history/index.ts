/** Iraqi History — Ιρακινή Ιστορία */
import type { SectionModule } from "../../types";
import { SUMER_EARLY_MESOPOTAMIA } from "./sumer-early-mesopotamia";
import { AKKADIAN_EMPIRE } from "./akkadian-empire";
import { OLD_BABYLONIAN_ASSYRIAN } from "./old-babylonian-assyrian";
import { KASSITE_MIDDLE_ASSYRIAN } from "./kassite-middle-assyrian";
import { NEO_ASSYRIAN_EMPIRE } from "./neo-assyrian-empire";
import { NEO_BABYLONIAN_EMPIRE } from "./neo-babylonian-empire";
import { PERSIAN_GREEK_PARTHIAN_BABYLONIA } from "./persian-greek-parthian-babylonia";
import { SASANIAN_MESOPOTAMIA } from "./sasanian-mesopotamia";
import { RASHIDUN_UMAYYAD_IRAQ } from "./rashidun-umayyad-iraq";
import { ABBASID_BAGHDAD } from "./abbasid-baghdad";
import { MONGOL_OTTOMAN_IRAQ } from "./mongol-ottoman-iraq";
import { MODERN_IRAQ } from "./modern-iraq";

export const IRAQI_HISTORY = {
  id: "iraqi-history" as const,
  label: {
    en: "Iraqi History",
    el: "Ιρακινή Ιστορία"
  },
  periods: [
    SUMER_EARLY_MESOPOTAMIA,
    AKKADIAN_EMPIRE,
    OLD_BABYLONIAN_ASSYRIAN,
    KASSITE_MIDDLE_ASSYRIAN,
    NEO_ASSYRIAN_EMPIRE,
    NEO_BABYLONIAN_EMPIRE,
    PERSIAN_GREEK_PARTHIAN_BABYLONIA,
    SASANIAN_MESOPOTAMIA,
    RASHIDUN_UMAYYAD_IRAQ,
    ABBASID_BAGHDAD,
    MONGOL_OTTOMAN_IRAQ,
    MODERN_IRAQ,
  ],
} satisfies SectionModule;
