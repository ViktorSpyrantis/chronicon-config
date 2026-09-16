/** Indian History — Ινδική Ιστορία */
import type { SectionModule } from "../../types";
import { INDUS_VALLEY } from "./indus-valley";
import { VEDIC_PERIOD } from "./vedic-period";
import { MAHAJANAPADAS } from "./mahajanapadas";
import { MAURYA_EMPIRE } from "./maurya-empire";
import { POST_MAURYAN_INDIA } from "./post-mauryan-india";
import { GUPTA_EMPIRE } from "./gupta-empire";
import { EARLY_MEDIEVAL_INDIA } from "./early-medieval-india";
import { DELHI_SULTANATE } from "./delhi-sultanate";
import { MUGHAL_EMPIRE } from "./mughal-empire";
import { BRITISH_INDIA } from "./british-india";
import { REPUBLIC_OF_INDIA } from "./republic-of-india";

export const INDIAN_HISTORY = {
  id: "indian-history" as const,
  label: {
    en: "Indian History",
    el: "Ινδική Ιστορία"
  },
  periods: [
    INDUS_VALLEY,
    VEDIC_PERIOD,
    MAHAJANAPADAS,
    MAURYA_EMPIRE,
    POST_MAURYAN_INDIA,
    GUPTA_EMPIRE,
    EARLY_MEDIEVAL_INDIA,
    DELHI_SULTANATE,
    MUGHAL_EMPIRE,
    BRITISH_INDIA,
    REPUBLIC_OF_INDIA,
  ],
} satisfies SectionModule;
