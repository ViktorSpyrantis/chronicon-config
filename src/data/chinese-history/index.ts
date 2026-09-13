/** Chinese History — Κινεζική Ιστορία */
import type { SectionModule } from "../../types";
import { ANCIENT_CHINA_XIA_ZHOU } from "./ancient-china-xia-zhou";
import { QIN_HAN_EMPIRE } from "./qin-han-empire";
import { SIX_DYNASTIES_SUI } from "./six-dynasties-sui";
import { TANG_DYNASTY } from "./tang-dynasty";
import { SONG_DYNASTY } from "./song-dynasty";
import { YUAN_DYNASTY } from "./yuan-dynasty";
import { MING_DYNASTY } from "./ming-dynasty";
import { QING_DYNASTY } from "./qing-dynasty";
import { REPUBLICAN_CHINA } from "./republican-china";
import { PEOPLES_REPUBLIC_CHINA } from "./peoples-republic-china";

export const CHINESE_HISTORY = {
  id: "chinese-history" as const,
  label: {
    en: "Chinese History",
    el: "Κινεζική Ιστορία"
  },
  periods: [
    ANCIENT_CHINA_XIA_ZHOU,
    QIN_HAN_EMPIRE,
    SIX_DYNASTIES_SUI,
    TANG_DYNASTY,
    SONG_DYNASTY,
    YUAN_DYNASTY,
    MING_DYNASTY,
    QING_DYNASTY,
    REPUBLICAN_CHINA,
    PEOPLES_REPUBLIC_CHINA,
  ],
} satisfies SectionModule;
