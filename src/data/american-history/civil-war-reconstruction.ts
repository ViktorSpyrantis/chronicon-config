/** Civil War & Reconstruction — Εμφύλιος Πόλεμος & Ανασυγκρότηση · American History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const CIVIL_WAR_RECONSTRUCTION = {
  id: "civil-war-reconstruction" as const,
  label: {
    en: "Civil War & Reconstruction",
    el: "Εμφύλιος Πόλεμος & Ανασυγκρότηση"
  },
  supertitle: {
    en: "A House Divided · 1861-1877",
    el: "Ένα Διχασμένο Σπίτι"
  },
  title: {
    en: "The Civil War & Reconstruction",
    el: "Ο Εμφύλιος Πόλεμος & η Ανασυγκρότηση"
  },
  subtitle: {
    en: "From the guns over Fort Sumter through the bloodiest battles in American history, the Emancipation Proclamation, and Lincoln's assassination, to the constitutional amendments that abolished slavery and promised equality — and the fraught decade that tried, and largely failed, to secure it. Slide across the years to relive the nation's defining ordeal.",
    el: "Από τα κανόνια πάνω από το Φορτ Σάμτερ, μέσα από τις πιο αιματηρές μάχες στην αμερικανική ιστορία, τη Διακήρυξη της Χειραφέτησης και τη δολοφονία του Λίνκολν, ως τις συνταγματικές τροπολογίες που κατάργησαν τη δουλεία και υποσχέθηκαν ισότητα — και τη δύσκολη δεκαετία που προσπάθησε, και σε μεγάλο βαθμό απέτυχε, να την εξασφαλίσει. Μετακινηθείτε ανάμεσα στα έτη για να ζήσετε ξανά την καθοριστική δοκιμασία του έθνους."
  },
  menuDescription: {
    en: "The war that ended slavery and the struggle to rebuild the Union.",
    el: "Ο πόλεμος που τερμάτισε τη δουλεία και ο αγώνας ανοικοδόμησης της Ένωσης."
  },
  footerLabel: {
    en: "Civil War & Reconstruction · 1861-1877",
    el: "Εμφύλιος Πόλεμος & Ανασυγκρότηση · 1861-1877"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Civil War & Reconstruction",
    el: "Ο Εμφύλιος Πόλεμος & η Ανασυγκρότηση"
  },
  theme: THEMES.slate,
  timeline: [
    {
      year: 1861,
      era: {
        en: "The War Begins",
        el: "Ο πόλεμος αρχίζει"
      },
      events: [
        {
          title: {
            en: "Fort Sumter and the outbreak of war",
            el: "Το Φορτ Σάμτερ και το ξέσπασμα του πολέμου"
          },
          description: {
            en: "Confederate guns fire on Fort Sumter in Charleston Harbor, opening the Civil War. Eleven Southern states form the Confederacy to defend slavery and states' rights.",
            el: "Τα κανόνια της Συνομοσπονδίας βάλλουν κατά του Φορτ Σάμτερ στο λιμάνι του Τσάρλεστον, ανοίγοντας τον Εμφύλιο Πόλεμο. Έντεκα νότιες πολιτείες σχηματίζουν τη Συνομοσπονδία για να υπερασπιστούν τη δουλεία και τα δικαιώματα των πολιτειών."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1862,
      era: {
        en: "Total War",
        el: "Ολοκληρωτικός πόλεμος"
      },
      events: [
        {
          title: {
            en: "Antietam, the bloodiest day",
            el: "Το Άντιεταμ, η πιο αιματηρή ημέρα"
          },
          description: {
            en: "The Battle of Antietam becomes the single bloodiest day in American history, with over 22,000 casualties, and gives Lincoln the victory he needs to act against slavery.",
            el: "Η Μάχη του Άντιεταμ γίνεται η πιο αιματηρή ημέρα στην αμερικανική ιστορία, με πάνω από 22.000 απώλειες, και δίνει στον Λίνκολν τη νίκη που χρειάζεται για να δράσει κατά της δουλείας."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1863,
      era: {
        en: "A New Birth of Freedom",
        el: "Μια νέα γέννηση της ελευθερίας"
      },
      events: [
        {
          title: {
            en: "Emancipation Proclamation and Gettysburg",
            el: "Η Διακήρυξη της Χειραφέτησης και το Γκέτισμπεργκ"
          },
          description: {
            en: "Lincoln's Emancipation Proclamation frees enslaved people in the rebel states and makes ending slavery a war aim; the Union victory at Gettysburg turns the tide of the war.",
            el: "Η Διακήρυξη της Χειραφέτησης του Λίνκολν απελευθερώνει τους σκλαβωμένους στις αποστάτισσες πολιτείες και καθιστά τον τερματισμό της δουλείας πολεμικό στόχο· η νίκη της Ένωσης στο Γκέτισμπεργκ αντιστρέφει την πορεία του πολέμου."
          },
          extendedDescription: {
            en: "At the dedication of the battlefield cemetery, Lincoln's brief Gettysburg Address redefined the war as a struggle for human equality and 'government of the people, by the people, for the people.'",
            el: "Στα εγκαίνια του κοιμητηρίου του πεδίου της μάχης, η σύντομη Ομιλία του Γκέτισμπεργκ του Λίνκολν επαναπροσδιόρισε τον πόλεμο ως αγώνα για την ανθρώπινη ισότητα και για «κυβέρνηση του λαού, από τον λαό, για τον λαό»."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Thure_de_Thulstrup_-_L._Prang_and_Co._-_Battle_of_Gettysburg_-_Restoration_by_Adam_Cuerden_(cropped).jpg?width=1024",
            alt: {
              en: "The Battle of Gettysburg, painting by Thure de Thulstrup",
              el: "Η μάχη του Γκέτισμπεργκ, έργο του Τούρε ντε Θούλστρουπ"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1865,
      era: {
        en: "Victory and Tragedy",
        el: "Νίκη και τραγωδία"
      },
      events: [
        {
          title: {
            en: "Appomattox, the 13th Amendment, and Lincoln's death",
            el: "Το Απομάτοξ, η 13η Τροπολογία και ο θάνατος του Λίνκολν"
          },
          description: {
            en: "Lee surrenders at Appomattox, ending the war; the Thirteenth Amendment abolishes slavery. Days later, Lincoln is assassinated, leaving Reconstruction to lesser hands.",
            el: "Ο Λι παραδίδεται στο Απομάτοξ, τερματίζοντας τον πόλεμο· η Δέκατη Τρίτη Τροπολογία καταργεί τη δουλεία. Λίγες ημέρες αργότερα, ο Λίνκολν δολοφονείται, αφήνοντας την Ανασυγκρότηση σε λιγότερο ικανά χέρια."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Abraham_Lincoln_O-77_matte_collodion_print.jpg?width=1024",
            alt: {
              en: "Portrait of Abraham Lincoln (1863)",
              el: "Προσωπογραφία του Αβραάμ Λίνκολν (1863)"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1868,
      era: {
        en: "Reconstruction",
        el: "Ανασυγκρότηση"
      },
      events: [
        {
          title: {
            en: "The Fourteenth Amendment",
            el: "Η Δέκατη Τέταρτη Τροπολογία"
          },
          description: {
            en: "The Fourteenth Amendment grants citizenship and equal protection under the law to all born in the United States, a cornerstone of American civil rights.",
            el: "Η Δέκατη Τέταρτη Τροπολογία παρέχει ιθαγένεια και ίση προστασία ενώπιον του νόμου σε όλους όσους γεννιούνται στις Ηνωμένες Πολιτείες, έναν ακρογωνιαίο λίθο των αμερικανικών πολιτικών δικαιωμάτων."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1870,
      era: {
        en: "The Vote",
        el: "Η ψήφος"
      },
      events: [
        {
          title: {
            en: "The Fifteenth Amendment and Black officeholders",
            el: "Η Δέκατη Πέμπτη Τροπολογία και μαύροι αξιωματούχοι"
          },
          description: {
            en: "The Fifteenth Amendment bars denying the vote on grounds of race; Black men are elected to Congress and state legislatures across the South.",
            el: "Η Δέκατη Πέμπτη Τροπολογία απαγορεύει την άρνηση του δικαιώματος ψήφου με βάση τη φυλή· μαύροι άνδρες εκλέγονται στο Κογκρέσο και στα νομοθετικά σώματα των πολιτειών σε ολόκληρο τον Νότο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1877,
      era: {
        en: "Reconstruction Abandoned",
        el: "Η εγκατάλειψη της Ανασυγκρότησης"
      },
      events: [
        {
          title: {
            en: "The Compromise of 1877",
            el: "Ο Συμβιβασμός του 1877"
          },
          description: {
            en: "A disputed election is settled by withdrawing federal troops from the South, ending Reconstruction and opening the way to disenfranchisement and Jim Crow segregation.",
            el: "Μια αμφισβητούμενη εκλογή διευθετείται με την απόσυρση των ομοσπονδιακών στρατευμάτων από τον Νότο, τερματίζοντας την Ανασυγκρότηση και ανοίγοντας τον δρόμο στη στέρηση δικαιωμάτων και στον φυλετικό διαχωρισμό Τζιμ Κρόου."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
