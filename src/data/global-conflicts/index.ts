/** Global Conflicts — Παγκόσμιες Συγκρούσεις */
import type { SectionModule } from "../../types";
import { GRECO_PERSIAN_WARS } from "./greco-persian-wars";
import { PELOPONNESIAN_WAR } from "./peloponnesian-war";
import { WARS_OF_ALEXANDER } from "./wars-of-alexander";
import { PUNIC_WARS } from "./punic-wars";
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
    GRECO_PERSIAN_WARS,
    PELOPONNESIAN_WAR,
    WARS_OF_ALEXANDER,
    PUNIC_WARS,
    HUNDRED_YEARS_WAR,
    THIRTY_YEARS_WAR,
    SEVEN_YEARS_WAR,
    NAPOLEONIC_WARS,
    WW1,
    WW2,
    COLD_WAR,
  ],
} satisfies SectionModule;
