/** Persian History — Περσική Ιστορία */
import type { SectionModule } from "../../types";
import { ELAM_ANCIENT_IRAN } from "./elam-ancient-iran";
import { ACHAEMENID_EMPIRE } from "./achaemenid-empire";
import { SELEUCID_PARTHIAN_IRAN } from "./seleucid-parthian-iran";
import { SASANIAN_EMPIRE } from "./sasanian-empire";
import { ISLAMIC_IRAN_CALIPHATES } from "./islamic-iran-caliphates";
import { SELJUK_MONGOL_ILKHANATE } from "./seljuk-mongol-ilkhanate";
import { TIMURID_TURKMEN_IRAN } from "./timurid-turkmen-iran";
import { SAFAVID_EMPIRE } from "./safavid-empire";
import { AFSHARID_ZAND_QAJAR } from "./afsharid-zand-qajar";
import { PAHLAVI_ISLAMIC_REPUBLIC } from "./pahlavi-islamic-republic";

export const PERSIAN_HISTORY = {
  id: "persian-history" as const,
  label: {
    en: "Persian History",
    el: "Περσική Ιστορία"
  },
  periods: [
    ELAM_ANCIENT_IRAN,
    ACHAEMENID_EMPIRE,
    SELEUCID_PARTHIAN_IRAN,
    SASANIAN_EMPIRE,
    ISLAMIC_IRAN_CALIPHATES,
    SELJUK_MONGOL_ILKHANATE,
    TIMURID_TURKMEN_IRAN,
    SAFAVID_EMPIRE,
    AFSHARID_ZAND_QAJAR,
    PAHLAVI_ISLAMIC_REPUBLIC,
  ],
} satisfies SectionModule;
