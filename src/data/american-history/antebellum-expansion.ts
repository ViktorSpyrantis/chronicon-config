/** Antebellum America — Προπολεμική Αμερική · American History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const ANTEBELLUM_EXPANSION = {
  id: "antebellum-expansion" as const,
  label: {
    en: "Antebellum America",
    el: "Προπολεμική Αμερική"
  },
  supertitle: {
    en: "Manifest Destiny · 1836-1860",
    el: "Το Πεπρωμένο Έθνος"
  },
  title: {
    en: "Antebellum America & Westward Expansion",
    el: "Προπολεμική Αμερική & Εξάπλωση στη Δύση"
  },
  subtitle: {
    en: "From Texas independence and the war with Mexico that carried the nation to the Pacific, through the Gold Rush and the first stirrings of women's rights, to the widening rift over slavery that drove Bleeding Kansas, Dred Scott, and the road to disunion. Slide across the years to watch a restless nation march toward civil war.",
    el: "Από την ανεξαρτησία του Τέξας και τον πόλεμο με το Μεξικό που έφερε το έθνος ως τον Ειρηνικό, μέσα από τον Πυρετό του Χρυσού και τα πρώτα σκιρτήματα των δικαιωμάτων των γυναικών, ως το διευρυνόμενο ρήγμα για τη δουλεία που οδήγησε στο Ματωμένο Κάνσας, στην υπόθεση Ντρεντ Σκοτ και στον δρόμο προς τη διάσπαση. Μετακινηθείτε ανάμεσα στα έτη για να δείτε ένα ανήσυχο έθνος να βαδίζει προς τον εμφύλιο πόλεμο."
  },
  menuDescription: {
    en: "Manifest Destiny, the Mexican War, and the crisis over slavery.",
    el: "Το Πεπρωμένο Έθνος, ο Μεξικανικός Πόλεμος και η κρίση για τη δουλεία."
  },
  footerLabel: {
    en: "Antebellum America · 1836-1860",
    el: "Προπολεμική Αμερική · 1836-1860"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Antebellum America",
    el: "Προπολεμική Αμερική"
  },
  theme: THEMES.amber,
  timeline: [
    {
      year: 1836,
      era: {
        en: "The Republic of Texas",
        el: "Η Δημοκρατία του Τέξας"
      },
      events: [
        {
          title: {
            en: "Texas independence and the Alamo",
            el: "Η ανεξαρτησία του Τέξας και το Άλαμο"
          },
          description: {
            en: "American settlers in Texas revolt against Mexico; after the doomed stand at the Alamo, they win independence and establish the Republic of Texas.",
            el: "Αμερικανοί άποικοι στο Τέξας εξεγείρονται κατά του Μεξικού· μετά την καταδικασμένη αντίσταση στο Άλαμο, κερδίζουν την ανεξαρτησία και ιδρύουν τη Δημοκρατία του Τέξας."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1845,
      era: {
        en: "Manifest Destiny",
        el: "Το Πεπρωμένο Έθνος"
      },
      events: [
        {
          title: {
            en: "Manifest Destiny and annexation",
            el: "Το Πεπρωμένο Έθνος και η προσάρτηση"
          },
          description: {
            en: "The belief that the United States was destined to span the continent — 'Manifest Destiny' — drives the annexation of Texas and fuels demands for still more territory.",
            el: "Η πεποίθηση ότι οι Ηνωμένες Πολιτείες ήταν προορισμένες να εκταθούν σε ολόκληρη την ήπειρο — το «Πεπρωμένο Έθνος» — οδηγεί στην προσάρτηση του Τέξας και τροφοδοτεί απαιτήσεις για ακόμη περισσότερα εδάφη."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/American_Progress_(John_Gast_painting).jpg?width=1024",
            alt: {
              en: "American Progress by John Gast (1872)",
              el: "Αμερικανική Πρόοδος, έργο του Τζον Γκαστ (1872)"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1846,
      era: {
        en: "War with Mexico",
        el: "Πόλεμος με το Μεξικό"
      },
      events: [
        {
          title: {
            en: "The Mexican-American War",
            el: "Ο Μεξικανοαμερικανικός Πόλεμος"
          },
          description: {
            en: "Victory over Mexico brings California and the Southwest into the Union, but the new lands reopen the explosive question of whether slavery should expand westward.",
            el: "Η νίκη επί του Μεξικού φέρνει την Καλιφόρνια και τη Νοτιοδύση στην Ένωση, αλλά τα νέα εδάφη ξανανοίγουν το εκρηκτικό ζήτημα του αν η δουλεία έπρεπε να επεκταθεί προς τα δυτικά."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1848,
      era: {
        en: "Gold and Reform",
        el: "Χρυσός και μεταρρύθμιση"
      },
      events: [
        {
          title: {
            en: "Gold Rush and the Seneca Falls Convention",
            el: "Ο Πυρετός του Χρυσού και η Συνέλευση του Σένεκα Φολς"
          },
          description: {
            en: "The discovery of gold in California draws hundreds of thousands westward, while at Seneca Falls reformers issue the first major call for women's rights in America.",
            el: "Η ανακάλυψη χρυσού στην Καλιφόρνια προσελκύει εκατοντάδες χιλιάδες προς τα δυτικά, ενώ στο Σένεκα Φολς μεταρρυθμιστές εκδίδουν το πρώτο μεγάλο κάλεσμα για τα δικαιώματα των γυναικών στην Αμερική."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1850,
      era: {
        en: "An Uneasy Compromise",
        el: "Ένας εύθραυστος συμβιβασμός"
      },
      events: [
        {
          title: {
            en: "The Compromise of 1850",
            el: "Ο Συμβιβασμός του 1850"
          },
          description: {
            en: "Congress tries to balance slave and free states, but the harsh Fugitive Slave Act outrages the North and deepens sectional bitterness.",
            el: "Το Κογκρέσο προσπαθεί να ισορροπήσει τις δουλοκτητικές και τις ελεύθερες πολιτείες, αλλά ο σκληρός Νόμος περί Φυγάδων Δούλων εξοργίζει τον Βορρά και βαθαίνει την περιφερειακή πικρία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1854,
      era: {
        en: "Bleeding Kansas",
        el: "Το Ματωμένο Κάνσας"
      },
      events: [
        {
          title: {
            en: "Kansas-Nebraska Act and a new party",
            el: "Ο Νόμος Κάνσας-Νεμπράσκα και ένα νέο κόμμα"
          },
          description: {
            en: "Letting territories vote on slavery sparks violence in 'Bleeding Kansas' and gives rise to the antislavery Republican Party.",
            el: "Η δυνατότητα των εδαφών να ψηφίζουν για τη δουλεία πυροδοτεί βία στο «Ματωμένο Κάνσας» και γεννά το αντιδουλοκτητικό Ρεπουμπλικανικό Κόμμα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1857,
      era: {
        en: "The Courts and the Crisis",
        el: "Τα δικαστήρια και η κρίση"
      },
      events: [
        {
          title: {
            en: "The Dred Scott decision",
            el: "Η απόφαση Ντρεντ Σκοτ"
          },
          description: {
            en: "The Supreme Court rules that Black Americans are not citizens and that Congress cannot bar slavery from the territories, inflaming the North and pushing the nation nearer to war.",
            el: "Το Ανώτατο Δικαστήριο αποφαίνεται ότι οι μαύροι Αμερικανοί δεν είναι πολίτες και ότι το Κογκρέσο δεν μπορεί να απαγορεύσει τη δουλεία στα εδάφη, εξοργίζοντας τον Βορρά και σπρώχνοντας το έθνος πιο κοντά στον πόλεμο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1859,
      era: {
        en: "The Brink",
        el: "Το χείλος"
      },
      events: [
        {
          title: {
            en: "John Brown's raid on Harpers Ferry",
            el: "Η επιδρομή του Τζον Μπράουν στο Χάρπερς Φέρι"
          },
          description: {
            en: "Abolitionist John Brown attacks a federal arsenal hoping to spark a slave uprising. His execution makes him a martyr in the North and a terror in the South.",
            el: "Ο αβολιτιονιστής Τζον Μπράουν επιτίθεται σε ένα ομοσπονδιακό οπλοστάσιο ελπίζοντας να πυροδοτήσει εξέγερση δούλων. Η εκτέλεσή του τον καθιστά μάρτυρα στον Βορρά και τρόμο στον Νότο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1860,
      era: {
        en: "Toward Disunion",
        el: "Προς τη διάσπαση"
      },
      events: [
        {
          title: {
            en: "Lincoln's election and secession",
            el: "Η εκλογή του Λίνκολν και η απόσχιση"
          },
          description: {
            en: "Abraham Lincoln wins the presidency without a single Southern electoral vote; within weeks South Carolina secedes, and the Union begins to break apart.",
            el: "Ο Αβραάμ Λίνκολν κερδίζει την προεδρία χωρίς ούτε μία εκλογική ψήφο από τον Νότο· μέσα σε εβδομάδες η Νότια Καρολίνα αποσχίζεται και η Ένωση αρχίζει να διαλύεται."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
