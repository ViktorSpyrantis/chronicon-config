/**
 * The section registry and the flat period navigation order.
 *
 * ─── Adding a section ─────────────────────────────────────────────────────
 * 1. Create `./<section-id>/` with an `index.ts` and its period files.
 * 2. Import its section const here and add it to `SECTION_MODULES` in the
 *    position you want it to appear.
 *
 * ─── Adding a period ──────────────────────────────────────────────────────
 * 1. Create `./<section-id>/<period-id>.ts` exporting a `PeriodDefinition`.
 * 2. Add its const to that section's `index.ts` `periods` array.
 * 3. Add its id to `PERIOD_ID_ORDER` below (its slot in the flat prev/next
 *    navigation order). `npm run validate` checks this stays in sync.
 */
import type { SectionModule } from "../types";
import { EGYPTIAN_HISTORY } from "./egyptian-history";
import { IRAQI_HISTORY } from "./iraqi-history";
import { ANCIENT_LEVANT } from "./ancient-levant";
import { PERSIAN_HISTORY } from "./persian-history";
import { INDIAN_HISTORY } from "./indian-history";
import { CHINESE_HISTORY } from "./chinese-history";
import { JAPANESE_HISTORY } from "./japanese-history";
import { GREEK_HISTORY } from "./greek-history";
import { ITALIAN_HISTORY } from "./italian-history";
import { BRITISH_HISTORY } from "./british-history";
import { GERMAN_HISTORY } from "./german-history";
import { FRENCH_HISTORY } from "./french-history";
import { SPANISH_HISTORY } from "./spanish-history";
import { RUSSIAN_HISTORY } from "./russian-history";
import { AMERICAN_HISTORY } from "./american-history";
import { GLOBAL_CONFLICTS } from "./global-conflicts";

/** Every section, in canonical display order. */
export const SECTION_MODULES = [
  EGYPTIAN_HISTORY,
  IRAQI_HISTORY,
  ANCIENT_LEVANT,
  PERSIAN_HISTORY,
  INDIAN_HISTORY,
  CHINESE_HISTORY,
  JAPANESE_HISTORY,
  GREEK_HISTORY,
  ITALIAN_HISTORY,
  BRITISH_HISTORY,
  GERMAN_HISTORY,
  FRENCH_HISTORY,
  SPANISH_HISTORY,
  RUSSIAN_HISTORY,
  AMERICAN_HISTORY,
  GLOBAL_CONFLICTS,
] satisfies readonly SectionModule[];

/**
 * The flat order of every period id — drives prev/next navigation and the
 * "all periods" listings. Kept explicit (it is not simply the sections
 * concatenated) to preserve the apps' existing navigation sequence.
 */
export const PERIOD_ID_ORDER = [
  "bronze-age-greece",
  "archaic-greece",
  "classical-greece",
  "hellenistic",
  "roman-greece",
  "rome",
  "eastern-roman",
  "ottoman-greece",
  "modern-greek-state",
  "pontus-asia-minor",
  "prehistoric-ancient-italy",
  "early-middle-ages",
  "high-middle-ages-city-states",
  "italian-renaissance",
  "italian-foreign-domination",
  "napoleonic-risorgimento",
  "liberal-italy-world-wars",
  "republic-of-italy",
  "prehistoric-roman-britain",
  "anglo-saxon-england",
  "norman-medieval-england",
  "early-modern-britain",
  "industrial-imperial-britain",
  "modern-britain",
  "germanic-antiquity",
  "holy-roman-empire",
  "prussia-german-unification",
  "german-empire",
  "weimar-republic",
  "nazi-germany-wwii",
  "modern-germany",
  "prehistoric-ancient-gaul",
  "frankish-kingdoms",
  "high-late-medieval-france",
  "renaissance-religious-wars-france",
  "absolute-monarchy-ancien-regime",
  "french-revolution-napoleon",
  "nineteenth-century-france",
  "world-wars-crisis-france",
  "modern-contemporary-france",
  "prehistoric-ancient-iberia",
  "roman-hispania",
  "visigothic-spain",
  "andalus-reconquista",
  "spanish-empire-golden-age",
  "bourbon-reforms-decline",
  "crisis-liberalism-lost-colonies",
  "early-20th-civil-war",
  "francoist-spain",
  "democratic-modern-spain",
  "early-slavic-pre-state",
  "kievan-rus",
  "fragmentation-mongol-period",
  "tsardom-of-russia",
  "russian-empire",
  "revolution-civil-war",
  "soviet-union",
  "russian-federation",
  "prehistoric-egypt",
  "early-dynastic-egypt",
  "old-kingdom-egypt",
  "first-intermediate-middle-kingdom-egypt",
  "second-intermediate-egypt",
  "new-kingdom-egypt",
  "third-intermediate-egypt",
  "late-period-egypt",
  "ptolemaic-egypt",
  "roman-byzantine-egypt",
  "islamic-egypt",
  "ottoman-egypt",
  "muhammad-ali-british-egypt",
  "republic-of-egypt",
  "sumer-early-mesopotamia",
  "akkadian-empire",
  "old-babylonian-assyrian",
  "kassite-middle-assyrian",
  "neo-assyrian-empire",
  "neo-babylonian-empire",
  "persian-greek-parthian-babylonia",
  "sasanian-mesopotamia",
  "rashidun-umayyad-iraq",
  "abbasid-baghdad",
  "mongol-ottoman-iraq",
  "modern-iraq",
  "canaan-bronze-age",
  "phoenicia",
  "israel-and-philistines",
  "united-monarchy",
  "two-kingdoms",
  "judah-and-exile",
  "return-second-temple",
  "hellenistic-judea-maccabees",
  "roman-judea",
  "elam-ancient-iran",
  "achaemenid-empire",
  "seleucid-parthian-iran",
  "sasanian-empire",
  "islamic-iran-caliphates",
  "seljuk-mongol-ilkhanate",
  "timurid-turkmen-iran",
  "safavid-empire",
  "afsharid-zand-qajar",
  "pahlavi-islamic-republic",
  "indus-valley",
  "vedic-period",
  "mahajanapadas",
  "maurya-empire",
  "post-mauryan-india",
  "gupta-empire",
  "early-medieval-india",
  "delhi-sultanate",
  "mughal-empire",
  "british-india",
  "republic-of-india",
  "ancient-china-xia-zhou",
  "qin-han-empire",
  "six-dynasties-sui",
  "tang-dynasty",
  "song-dynasty",
  "yuan-dynasty",
  "ming-dynasty",
  "qing-dynasty",
  "republican-china",
  "peoples-republic-china",
  "jomon-yayoi-japan",
  "kofun-asuka-japan",
  "nara-japan",
  "heian-japan",
  "kamakura-japan",
  "muromachi-japan",
  "azuchi-momoyama-japan",
  "edo-japan",
  "meiji-japan",
  "taisho-early-showa-japan",
  "postwar-japan",
  "greco-persian-wars",
  "peloponnesian-war",
  "wars-of-alexander",
  "punic-wars",
  "hundred-years-war",
  "thirty-years-war",
  "seven-years-war",
  "napoleonic-wars",
  "ww1",
  "ww2",
  "cold-war",
  "precolumbian-north-america",
  "colonial-america",
  "american-revolution",
  "early-republic",
  "antebellum-expansion",
  "civil-war-reconstruction",
  "gilded-age-progressive",
  "world-wars-depression",
  "cold-war-america",
  "contemporary-america",
] as const;
