/** Global Conflicts — Παγκόσμιες Συγκρούσεις */
import type { SectionModule } from "../../types";
import { HUNDRED_YEARS_WAR } from "./hundred-years-war";
import { THIRTY_YEARS_WAR } from "./thirty-years-war";
import { SEVEN_YEARS_WAR } from "./seven-years-war";
import { NAPOLEONIC_WARS } from "./napoleonic-wars";
import { WW1 } from "./ww1";
import { WW2 } from "./ww2";
import { COLD_WAR } from "./cold-war";

export const GLOBAL_CONFLICTS = {
  id: "global-conflicts" as const,
  label: {
    en: "Global Conflicts",
    el: "Παγκόσμιες Συγκρούσεις"
  },
  periods: [
    HUNDRED_YEARS_WAR,
    THIRTY_YEARS_WAR,
    SEVEN_YEARS_WAR,
    NAPOLEONIC_WARS,
    WW1,
    WW2,
    COLD_WAR,
  ],
} satisfies SectionModule;
