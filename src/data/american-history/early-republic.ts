/** The Early Republic — Η Πρώιμη Δημοκρατία · American History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const EARLY_REPUBLIC = {
  id: "early-republic" as const,
  label: {
    en: "The Early Republic",
    el: "Η Πρώιμη Δημοκρατία"
  },
  supertitle: {
    en: "Young Nation · 1789-1836",
    el: "Νεαρό Έθνος"
  },
  title: {
    en: "The Early Republic",
    el: "Η Πρώιμη Δημοκρατία"
  },
  subtitle: {
    en: "From Hamilton's financial system and the first peaceful transfer of power, through the Louisiana Purchase that doubled the nation, a second war with Britain, and the rise of Jacksonian democracy, to the market revolution and the tragic removal of Native peoples. Slide across the years to watch a young republic find its footing.",
    el: "Από το χρηματοοικονομικό σύστημα του Χάμιλτον και την πρώτη ειρηνική μεταβίβαση εξουσίας, μέσα από την Αγορά της Λουιζιάνα που διπλασίασε το έθνος, έναν δεύτερο πόλεμο με τη Βρετανία και την άνοδο της δημοκρατίας του Τζάκσον, ως την επανάσταση της αγοράς και τη τραγική απομάκρυνση των ιθαγενών λαών. Μετακινηθείτε ανάμεσα στα έτη για να δείτε μια νεαρή δημοκρατία να βρίσκει τα πατήματά της."
  },
  menuDescription: {
    en: "Louisiana, the War of 1812, and Jacksonian democracy.",
    el: "Η Λουιζιάνα, ο Πόλεμος του 1812 και η δημοκρατία του Τζάκσον."
  },
  footerLabel: {
    en: "The Early Republic · 1789-1836",
    el: "Η Πρώιμη Δημοκρατία · 1789-1836"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Early Republic",
    el: "Η Πρώιμη Δημοκρατία"
  },
  theme: THEMES.sapphire,
  timeline: [
    {
      year: 1791,
      era: {
        en: "Foundations",
        el: "Θεμέλια"
      },
      events: [
        {
          title: {
            en: "Hamilton's financial system",
            el: "Το χρηματοοικονομικό σύστημα του Χάμιλτον"
          },
          description: {
            en: "Treasury Secretary Alexander Hamilton establishes a national bank and assumes state debts, building the credit of the new nation but igniting the first party rivalries.",
            el: "Ο υπουργός Οικονομικών Αλέξανδρος Χάμιλτον ιδρύει μια εθνική τράπεζα και αναλαμβάνει τα χρέη των πολιτειών, χτίζοντας την πιστοληπτική ικανότητα του νέου έθνους αλλά πυροδοτώντας τις πρώτες κομματικές αντιπαλότητες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1800,
      era: {
        en: "Peaceful Transfer",
        el: "Ειρηνική μεταβίβαση"
      },
      events: [
        {
          title: {
            en: "The 'Revolution of 1800'",
            el: "Η «Επανάσταση του 1800»"
          },
          description: {
            en: "Thomas Jefferson's election transfers power peacefully from the Federalists to the Democratic-Republicans, proving the young constitution could survive a change of party.",
            el: "Η εκλογή του Τόμας Τζέφερσον μεταβιβάζει ειρηνικά την εξουσία από τους Φεντεραλιστές στους Δημοκρατικούς-Ρεπουμπλικάνους, αποδεικνύοντας ότι το νεαρό σύνταγμα μπορούσε να επιβιώσει από μια αλλαγή κόμματος."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1803,
      era: {
        en: "A Continent Opens",
        el: "Μια ήπειρος ανοίγει"
      },
      events: [
        {
          title: {
            en: "The Louisiana Purchase",
            el: "Η Αγορά της Λουιζιάνα"
          },
          description: {
            en: "Jefferson buys the vast Louisiana Territory from France, doubling the size of the United States and opening the way to westward expansion.",
            el: "Ο Τζέφερσον αγοράζει το τεράστιο Έδαφος της Λουιζιάνα από τη Γαλλία, διπλασιάζοντας το μέγεθος των Ηνωμένων Πολιτειών και ανοίγοντας τον δρόμο για την εξάπλωση προς τα δυτικά."
          },
          extendedDescription: {
            en: "In 1804 Lewis and Clark set out to explore the new lands, guided in part by the Shoshone woman Sacagawea, reaching the Pacific and mapping a route across the continent.",
            el: "Το 1804 οι Λιούις και Κλαρκ ξεκινούν να εξερευνήσουν τις νέες εκτάσεις, καθοδηγούμενοι εν μέρει από τη Σοσόνε γυναίκα Σακαγκάουια, φτάνοντας στον Ειρηνικό και χαρτογραφώντας μια διαδρομή σε ολόκληρη την ήπειρο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1812,
      era: {
        en: "Second War with Britain",
        el: "Δεύτερος πόλεμος με τη Βρετανία"
      },
      events: [
        {
          title: {
            en: "The War of 1812",
            el: "Ο Πόλεμος του 1812"
          },
          description: {
            en: "The United States goes to war with Britain over trade and impressment. British troops burn Washington in 1814, but the war ends in a draw that confirms American independence.",
            el: "Οι Ηνωμένες Πολιτείες πηγαίνουν σε πόλεμο με τη Βρετανία για το εμπόριο και τη βίαιη ναυτολόγηση. Βρετανικά στρατεύματα πυρπολούν την Ουάσινγκτον το 1814, αλλά ο πόλεμος λήγει ισόπαλος, επιβεβαιώνοντας την αμερικανική ανεξαρτησία."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1823,
      era: {
        en: "A Hemisphere's Doctrine",
        el: "Το δόγμα ενός ημισφαιρίου"
      },
      events: [
        {
          title: {
            en: "The Monroe Doctrine",
            el: "Το Δόγμα Μονρόε"
          },
          description: {
            en: "President Monroe warns European powers against further colonization in the Americas, staking out the Western Hemisphere as a U.S. sphere of influence.",
            el: "Ο πρόεδρος Μονρόε προειδοποιεί τις ευρωπαϊκές δυνάμεις κατά περαιτέρω αποικισμού στην Αμερική, διεκδικώντας το Δυτικό Ημισφαίριο ως σφαίρα επιρροής των ΗΠΑ."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1828,
      era: {
        en: "Jacksonian Democracy",
        el: "Η δημοκρατία του Τζάκσον"
      },
      events: [
        {
          title: {
            en: "Andrew Jackson and the common man",
            el: "Ο Άντριου Τζάκσον και ο κοινός άνθρωπος"
          },
          description: {
            en: "The election of war hero Andrew Jackson ushers in an era of expanded white male suffrage and populist politics that reshape American democracy.",
            el: "Η εκλογή του ήρωα πολέμου Άντριου Τζάκσον εγκαινιάζει μια εποχή διευρυμένου εκλογικού δικαιώματος για λευκούς άνδρες και λαϊκιστικής πολιτικής που αναδιαμορφώνουν την αμερικανική δημοκρατία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1830,
      era: {
        en: "Dispossession",
        el: "Εκτόπιση"
      },
      events: [
        {
          title: {
            en: "Indian Removal and the Trail of Tears",
            el: "Η Απομάκρυνση των Ινδιάνων και το Μονοπάτι των Δακρύων"
          },
          description: {
            en: "The Indian Removal Act forces tens of thousands of Native people from their homelands; the Cherokee march west along the deadly Trail of Tears.",
            el: "Ο Νόμος περί Απομάκρυνσης των Ινδιάνων εκδιώκει δεκάδες χιλιάδες ιθαγενείς από τις πατρίδες τους· οι Τσερόκι βαδίζουν προς τα δυτικά κατά μήκος του θανατηφόρου Μονοπατιού των Δακρύων."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1831,
      era: {
        en: "The Market Revolution",
        el: "Η επανάσταση της αγοράς"
      },
      events: [
        {
          title: {
            en: "Canals, factories, and reform",
            el: "Κανάλια, εργοστάσια και μεταρρύθμιση"
          },
          description: {
            en: "Canals, textile mills, and a booming market economy transform the North, while reform movements — temperance, abolition, and women's rights — begin to stir.",
            el: "Κανάλια, κλωστοϋφαντουργεία και μια ακμάζουσα οικονομία της αγοράς μεταμορφώνουν τον Βορρά, ενώ κινήματα μεταρρύθμισης — εγκράτεια, κατάργηση της δουλείας και δικαιώματα των γυναικών — αρχίζουν να αναδύονται."
          },
          category: "cultural"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
