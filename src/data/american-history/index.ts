/** American History — Αμερικανική Ιστορία */
import type { SectionModule } from "../../types";
import { PRECOLUMBIAN_NORTH_AMERICA } from "./precolumbian-north-america";
import { COLONIAL_AMERICA } from "./colonial-america";
import { AMERICAN_REVOLUTION } from "./american-revolution";
import { EARLY_REPUBLIC } from "./early-republic";
import { ANTEBELLUM_EXPANSION } from "./antebellum-expansion";
import { CIVIL_WAR_RECONSTRUCTION } from "./civil-war-reconstruction";
import { GILDED_AGE_PROGRESSIVE } from "./gilded-age-progressive";
import { WORLD_WARS_DEPRESSION } from "./world-wars-depression";
import { COLD_WAR_AMERICA } from "./cold-war-america";
import { CONTEMPORARY_AMERICA } from "./contemporary-america";

export const AMERICAN_HISTORY = {
  id: "american-history" as const,
  label: {
    en: "American History",
    el: "Αμερικανική Ιστορία"
  },
  periods: [
    PRECOLUMBIAN_NORTH_AMERICA,
    COLONIAL_AMERICA,
    AMERICAN_REVOLUTION,
    EARLY_REPUBLIC,
    ANTEBELLUM_EXPANSION,
    CIVIL_WAR_RECONSTRUCTION,
    GILDED_AGE_PROGRESSIVE,
    WORLD_WARS_DEPRESSION,
    COLD_WAR_AMERICA,
    CONTEMPORARY_AMERICA,
  ],
} satisfies SectionModule;
