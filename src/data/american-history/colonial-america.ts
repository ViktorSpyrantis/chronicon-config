/** Colonial America — Αποικιακή Αμερική · American History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const COLONIAL_AMERICA = {
  id: "colonial-america" as const,
  label: {
    en: "Colonial America",
    el: "Αποικιακή Αμερική"
  },
  supertitle: {
    en: "Thirteen Colonies · 1492-1763",
    el: "Δεκατρείς Αποικίες"
  },
  title: {
    en: "Colonial America",
    el: "Αποικιακή Αμερική"
  },
  subtitle: {
    en: "From Columbus's landfall and the first permanent settlements at Jamestown and Plymouth, through the growth of thirteen distinct colonies, the tragic rise of slavery, and the religious fervor of the Great Awakening, to the imperial wars that left Britain master of eastern North America. Slide across the years to trace the colonial roots of the United States.",
    el: "Από την αποβίβαση του Κολόμβου και τους πρώτους μόνιμους οικισμούς στο Τζέιμσταουν και το Πλίμουθ, μέσα από την ανάπτυξη δεκατριών ξεχωριστών αποικιών, τη τραγική άνοδο της δουλείας και τον θρησκευτικό ζήλο της Μεγάλης Αφύπνισης, ως τους αυτοκρατορικούς πολέμους που άφησαν τη Βρετανία κυρίαρχη της ανατολικής Βόρειας Αμερικής. Μετακινηθείτε ανάμεσα στα έτη για να ανιχνεύσετε τις αποικιακές ρίζες των Ηνωμένων Πολιτειών."
  },
  menuDescription: {
    en: "Jamestown to the French and Indian War: the making of colonial America.",
    el: "Από το Τζέιμσταουν ως τον Γαλλοϊνδιανικό Πόλεμο: η διαμόρφωση της αποικιακής Αμερικής."
  },
  footerLabel: {
    en: "Colonial America · 1492-1763",
    el: "Αποικιακή Αμερική · 1492-1763"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Colonial America",
    el: "Αποικιακή Αμερική"
  },
  theme: THEMES.bronze,
  timeline: [
    {
      year: 1492,
      era: {
        en: "Contact",
        el: "Επαφή"
      },
      events: [
        {
          title: {
            en: "Columbus reaches the Americas",
            el: "Ο Κολόμβος φτάνει στην Αμερική"
          },
          description: {
            en: "Sailing for Spain, Christopher Columbus makes landfall in the Caribbean, opening the Americas to European colonization and the vast, often catastrophic Columbian Exchange.",
            el: "Ταξιδεύοντας για λογαριασμό της Ισπανίας, ο Χριστόφορος Κολόμβος αποβιβάζεται στην Καραϊβική, ανοίγοντας την Αμερική στον ευρωπαϊκό αποικισμό και στη μεγάλη, συχνά καταστροφική Κολομβιανή Ανταλλαγή."
          },
          extendedDescription: {
            en: "The exchange of crops, animals, and ideas transformed both hemispheres, but Old World diseases such as smallpox devastated Indigenous populations, killing a large share within a century of contact.",
            el: "Η ανταλλαγή καλλιεργειών, ζώων και ιδεών μεταμόρφωσε και τα δύο ημισφαίρια, αλλά ασθένειες του Παλαιού Κόσμου όπως η ευλογιά ερήμωσαν τους ιθαγενείς πληθυσμούς, σκοτώνοντας μεγάλο μέρος τους μέσα σε έναν αιώνα από την επαφή."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1607,
      era: {
        en: "First Settlements",
        el: "Οι πρώτοι οικισμοί"
      },
      events: [
        {
          title: {
            en: "Jamestown founded in Virginia",
            el: "Ίδρυση του Τζέιμσταουν στη Βιρτζίνια"
          },
          description: {
            en: "English colonists plant Jamestown, the first permanent English settlement in North America; after early starvation it survives on tobacco, a crop that will shape the Southern economy.",
            el: "Άγγλοι άποικοι ιδρύουν το Τζέιμσταουν, τον πρώτο μόνιμο αγγλικό οικισμό στη Βόρεια Αμερική· μετά από αρχικό λιμό, επιβιώνει χάρη στον καπνό, μια καλλιέργεια που θα διαμορφώσει την οικονομία του Νότου."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1619,
      era: {
        en: "Slavery Takes Root",
        el: "Η δουλεία ριζώνει"
      },
      events: [
        {
          title: {
            en: "The first enslaved Africans in Virginia",
            el: "Οι πρώτοι σκλαβωμένοι Αφρικανοί στη Βιρτζίνια"
          },
          description: {
            en: "A ship brings the first recorded enslaved Africans to Virginia, the beginning of a brutal system of racial slavery that will underpin the colonial economy for generations.",
            el: "Ένα πλοίο φέρνει τους πρώτους καταγεγραμμένους σκλαβωμένους Αφρικανούς στη Βιρτζίνια, την αρχή ενός βάναυσου συστήματος φυλετικής δουλείας που θα στηρίξει την αποικιακή οικονομία για γενιές."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1620,
      era: {
        en: "New England",
        el: "Νέα Αγγλία"
      },
      events: [
        {
          title: {
            en: "The Pilgrims and the Mayflower Compact",
            el: "Οι Προσκυνητές και το Σύμφωνο του Μέιφλαουερ"
          },
          description: {
            en: "Separatist Pilgrims land at Plymouth and sign the Mayflower Compact, an early agreement of self-government, founding a Puritan New England built around church and town meeting.",
            el: "Αποσχιστές Προσκυνητές αποβιβάζονται στο Πλίμουθ και υπογράφουν το Σύμφωνο του Μέιφλαουερ, μια πρώιμη συμφωνία αυτοδιοίκησης, ιδρύοντας μια πουριτανική Νέα Αγγλία δομημένη γύρω από την εκκλησία και τη συνέλευση της κοινότητας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1682,
      era: {
        en: "Proprietary Colonies",
        el: "Ιδιοκτησιακές αποικίες"
      },
      events: [
        {
          title: {
            en: "William Penn founds Pennsylvania",
            el: "Ο Γουίλιαμ Πεν ιδρύει την Πενσιλβάνια"
          },
          description: {
            en: "Quaker William Penn establishes Pennsylvania as a haven of religious tolerance, and lays out Philadelphia — soon one of the largest and most prosperous cities in the colonies.",
            el: "Ο Κουάκερος Γουίλιαμ Πεν ιδρύει την Πενσιλβάνια ως καταφύγιο θρησκευτικής ανοχής και σχεδιάζει τη Φιλαδέλφεια — σύντομα μία από τις μεγαλύτερες και πιο ευημερούσες πόλεις των αποικιών."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1692,
      era: {
        en: "Fear and Faith",
        el: "Φόβος και πίστη"
      },
      events: [
        {
          title: {
            en: "The Salem witch trials",
            el: "Οι δίκες μαγισσών του Σάλεμ"
          },
          description: {
            en: "In Puritan Massachusetts a wave of witchcraft accusations leads to the execution of twenty people, a lasting emblem of mass hysteria and the dangers of religious zeal.",
            el: "Στο πουριτανικό Μασαχουσέτη ένα κύμα κατηγοριών για μαγεία οδηγεί στην εκτέλεση είκοσι ανθρώπων, ένα διαχρονικό σύμβολο της μαζικής υστερίας και των κινδύνων του θρησκευτικού φανατισμού."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1730,
      era: {
        en: "The Great Awakening",
        el: "Η Μεγάλη Αφύπνιση"
      },
      events: [
        {
          title: {
            en: "A religious revival sweeps the colonies",
            el: "Μια θρησκευτική αναγέννηση σαρώνει τις αποικίες"
          },
          description: {
            en: "Fiery preachers like Jonathan Edwards and George Whitefield spark the Great Awakening, an emotional revival that crosses colonial lines and fosters a shared American identity.",
            el: "Φλογεροί ιεροκήρυκες όπως ο Τζόναθαν Έντουαρντς και ο Τζορτζ Γουάιτφιλντ πυροδοτούν τη Μεγάλη Αφύπνιση, μια συναισθηματική θρησκευτική αναγέννηση που ξεπερνά τα όρια των αποικιών και καλλιεργεί μια κοινή αμερικανική ταυτότητα."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1754,
      era: {
        en: "Imperial War",
        el: "Αυτοκρατορικός πόλεμος"
      },
      events: [
        {
          title: {
            en: "The French and Indian War",
            el: "Ο Γαλλοϊνδιανικός Πόλεμος"
          },
          description: {
            en: "Britain and France, each allied with Indigenous nations, fight for control of North America. British victory removes the French threat but leaves London with enormous war debts.",
            el: "Η Βρετανία και η Γαλλία, καθεμία σύμμαχη με ιθαγενή έθνη, μάχονται για τον έλεγχο της Βόρειας Αμερικής. Η βρετανική νίκη απομακρύνει τη γαλλική απειλή, αλλά αφήνει το Λονδίνο με τεράστια πολεμικά χρέη."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1763,
      era: {
        en: "Aftermath of Victory",
        el: "Ο απόηχος της νίκης"
      },
      events: [
        {
          title: {
            en: "Treaty of Paris and the Proclamation Line",
            el: "Η Συνθήκη των Παρισίων και η Γραμμή της Διακήρυξης"
          },
          description: {
            en: "The 1763 Treaty of Paris gives Britain a vast North American empire, but a royal proclamation barring settlement west of the Appalachians angers colonists eager for land.",
            el: "Η Συνθήκη των Παρισίων του 1763 δίνει στη Βρετανία μια τεράστια βορειοαμερικανική αυτοκρατορία, αλλά μια βασιλική διακήρυξη που απαγορεύει τον εποικισμό δυτικά των Απαλαχίων εξοργίζει τους αποίκους που διψούν για γη."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
