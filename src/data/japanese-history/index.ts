/** Japanese History — Ιαπωνική Ιστορία */
import type { SectionModule } from "../../types";
import { JOMON_YAYOI_JAPAN } from "./jomon-yayoi-japan";
import { KOFUN_ASUKA_JAPAN } from "./kofun-asuka-japan";
import { NARA_JAPAN } from "./nara-japan";
import { HEIAN_JAPAN } from "./heian-japan";
import { KAMAKURA_JAPAN } from "./kamakura-japan";
import { MUROMACHI_JAPAN } from "./muromachi-japan";
import { AZUCHI_MOMOYAMA_JAPAN } from "./azuchi-momoyama-japan";
import { EDO_JAPAN } from "./edo-japan";
import { MEIJI_JAPAN } from "./meiji-japan";
import { TAISHO_EARLY_SHOWA_JAPAN } from "./taisho-early-showa-japan";
import { POSTWAR_JAPAN } from "./postwar-japan";

export const JAPANESE_HISTORY = {
  id: "japanese-history" as const,
  label: {
    en: "Japanese History",
    el: "Ιαπωνική Ιστορία"
  },
  periods: [
    JOMON_YAYOI_JAPAN,
    KOFUN_ASUKA_JAPAN,
    NARA_JAPAN,
    HEIAN_JAPAN,
    KAMAKURA_JAPAN,
    MUROMACHI_JAPAN,
    AZUCHI_MOMOYAMA_JAPAN,
    EDO_JAPAN,
    MEIJI_JAPAN,
    TAISHO_EARLY_SHOWA_JAPAN,
    POSTWAR_JAPAN,
  ],
} satisfies SectionModule;
