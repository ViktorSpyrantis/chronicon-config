/** Gilded Age & Progressive Era — Χρυσωμένη Εποχή & Προοδευτική Εποχή · American History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const GILDED_AGE_PROGRESSIVE = {
  id: "gilded-age-progressive" as const,
  label: {
    en: "Gilded Age & Progressive Era",
    el: "Χρυσωμένη Εποχή & Προοδευτική Εποχή"
  },
  supertitle: {
    en: "Industry & Reform · 1869-1914",
    el: "Βιομηχανία & Μεταρρύθμιση"
  },
  title: {
    en: "The Gilded Age & Progressive Era",
    el: "Η Χρυσωμένη Εποχή & η Προοδευτική Εποχή"
  },
  subtitle: {
    en: "From the transcontinental railroad and the steel and oil empires of Rockefeller and Carnegie, through waves of immigration and the close of the frontier, to an overseas empire and the Progressive drive to tame industrial capitalism. Slide across the years to watch the United States remake itself into a world power.",
    el: "Από τον υπερηπειρωτικό σιδηρόδρομο και τις αυτοκρατορίες χάλυβα και πετρελαίου των Ρόκφελερ και Κάρνεγκι, μέσα από κύματα μετανάστευσης και το κλείσιμο του συνόρου, ως μια υπερπόντια αυτοκρατορία και την προοδευτική ώθηση για τιθάσευση του βιομηχανικού καπιταλισμού. Μετακινηθείτε ανάμεσα στα έτη για να δείτε τις Ηνωμένες Πολιτείες να αναμορφώνονται σε παγκόσμια δύναμη."
  },
  menuDescription: {
    en: "Railroads, immigration, big business, and the age of reform.",
    el: "Σιδηρόδρομοι, μετανάστευση, μεγάλες επιχειρήσεις και η εποχή της μεταρρύθμισης."
  },
  footerLabel: {
    en: "Gilded Age & Progressive Era · 1869-1914",
    el: "Χρυσωμένη Εποχή & Προοδευτική Εποχή · 1869-1914"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Gilded Age & Progressive Era",
    el: "Η Χρυσωμένη Εποχή & η Προοδευτική Εποχή"
  },
  theme: THEMES.gold,
  timeline: [
    {
      year: 1869,
      era: {
        en: "The Iron Road",
        el: "Ο σιδερένιος δρόμος"
      },
      events: [
        {
          title: {
            en: "The Transcontinental Railroad",
            el: "Ο Υπερηπειρωτικός Σιδηρόδρομος"
          },
          description: {
            en: "The joining of the rails at Promontory Summit links the coasts, binding the nation together and accelerating settlement of the West — often at Native peoples' expense.",
            el: "Η ένωση των σιδηροτροχιών στο Πρόμοντορι Σάμιτ συνδέει τις ακτές, ενώνοντας το έθνος και επιταχύνοντας τον εποικισμό της Δύσης — συχνά εις βάρος των ιθαγενών λαών."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/East_and_West_Shaking_hands_at_the_laying_of_last_rail_Union_Pacific_Railroad_-_Restoration.jpg?width=1024",
            alt: {
              en: "The Golden Spike ceremony at Promontory Summit, 1869",
              el: "Η τελετή του Χρυσού Καρφιού στο Προμοντόρι Σάμιτ, 1869"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1882,
      era: {
        en: "Captains of Industry",
        el: "Οι μεγιστάνες της βιομηχανίας"
      },
      events: [
        {
          title: {
            en: "Rockefeller, Carnegie, and big business",
            el: "Ρόκφελερ, Κάρνεγκι και οι μεγάλες επιχειρήσεις"
          },
          description: {
            en: "Industrialists like John D. Rockefeller and Andrew Carnegie build vast oil and steel empires, amassing enormous fortunes as trusts come to dominate the economy.",
            el: "Βιομήχανοι όπως ο Τζον Ντ. Ρόκφελερ και ο Άντριου Κάρνεγκι χτίζουν τεράστιες αυτοκρατορίες πετρελαίου και χάλυβα, συσσωρεύοντας τεράστιες περιουσίες καθώς τα τραστ κυριαρχούν στην οικονομία."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1886,
      era: {
        en: "Labor Rises",
        el: "Η εργασία εξεγείρεται"
      },
      events: [
        {
          title: {
            en: "The Haymarket affair and organized labor",
            el: "Η υπόθεση Χεϊμάρκετ και το οργανωμένο εργατικό κίνημα"
          },
          description: {
            en: "As workers demand the eight-hour day, a bombing at Chicago's Haymarket Square sets back the labor movement even as unions like the American Federation of Labor grow.",
            el: "Καθώς οι εργάτες απαιτούν το οκτάωρο, μια βομβιστική επίθεση στην πλατεία Χεϊμάρκετ του Σικάγο πλήττει το εργατικό κίνημα, ακόμη κι ενώ συνδικάτα όπως η Αμερικανική Ομοσπονδία Εργασίας αναπτύσσονται."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1890,
      era: {
        en: "The Closing Frontier",
        el: "Το κλείσιμο του συνόρου"
      },
      events: [
        {
          title: {
            en: "Wounded Knee and the end of the frontier",
            el: "Το Γουντέντ Νι και το τέλος του συνόρου"
          },
          description: {
            en: "The massacre at Wounded Knee marks the tragic close of the Indian Wars; the census declares the frontier settled, ending an era of continental expansion.",
            el: "Η σφαγή στο Γουντέντ Νι σηματοδοτεί το τραγικό τέλος των Ινδιανικών Πολέμων· η απογραφή κηρύσσει το σύνορο εποικισμένο, τερματίζοντας μια εποχή ηπειρωτικής εξάπλωσης."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1892,
      era: {
        en: "The Golden Door",
        el: "Η χρυσή πύλη"
      },
      events: [
        {
          title: {
            en: "Ellis Island and mass immigration",
            el: "Το Νησί Έλις και η μαζική μετανάστευση"
          },
          description: {
            en: "Ellis Island opens as millions of immigrants from southern and eastern Europe arrive, transforming American cities and industry and reshaping the nation's identity.",
            el: "Το Νησί Έλις ανοίγει καθώς εκατομμύρια μετανάστες από τη νότια και ανατολική Ευρώπη φτάνουν, μεταμορφώνοντας τις αμερικανικές πόλεις και τη βιομηχανία και αναδιαμορφώνοντας την ταυτότητα του έθνους."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1898,
      era: {
        en: "An Overseas Empire",
        el: "Μια υπερπόντια αυτοκρατορία"
      },
      events: [
        {
          title: {
            en: "The Spanish-American War",
            el: "Ο Ισπανοαμερικανικός Πόλεμος"
          },
          description: {
            en: "Victory over Spain gives the United States Puerto Rico, Guam, and the Philippines, launching the country as an imperial power on the world stage.",
            el: "Η νίκη επί της Ισπανίας δίνει στις Ηνωμένες Πολιτείες το Πουέρτο Ρίκο, το Γκουάμ και τις Φιλιππίνες, εκτοξεύοντας τη χώρα ως αυτοκρατορική δύναμη στην παγκόσμια σκηνή."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1901,
      era: {
        en: "The Progressive Era",
        el: "Η Προοδευτική Εποχή"
      },
      events: [
        {
          title: {
            en: "Theodore Roosevelt and reform",
            el: "Ο Θίοντορ Ρούζβελτ και η μεταρρύθμιση"
          },
          description: {
            en: "President Theodore Roosevelt battles the trusts, champions conservation, and pushes consumer protections, embodying the Progressive drive to tame industrial capitalism.",
            el: "Ο πρόεδρος Θίοντορ Ρούζβελτ αντιμάχεται τα τραστ, υπερασπίζεται τη διατήρηση της φύσης και προωθεί την προστασία των καταναλωτών, ενσαρκώνοντας την προοδευτική ώθηση για τιθάσευση του βιομηχανικού καπιταλισμού."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1903,
      era: {
        en: "An Age of Invention",
        el: "Μια εποχή εφευρέσεων"
      },
      events: [
        {
          title: {
            en: "The Wright brothers take flight",
            el: "Οι αδελφοί Ράιτ πετούν"
          },
          description: {
            en: "At Kitty Hawk the Wright brothers achieve the first powered flight; within a generation the automobile and the airplane will remake daily life and industry.",
            el: "Στο Κίτι Χοκ οι αδελφοί Ράιτ πραγματοποιούν την πρώτη μηχανοκίνητη πτήση· μέσα σε μια γενιά το αυτοκίνητο και το αεροπλάνο θα αναδιαμορφώσουν την καθημερινή ζωή και τη βιομηχανία."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1913,
      era: {
        en: "Reforming the System",
        el: "Μεταρρύθμιση του συστήματος"
      },
      events: [
        {
          title: {
            en: "Income tax and the Federal Reserve",
            el: "Ο φόρος εισοδήματος και η Ομοσπονδιακή Τράπεζα"
          },
          description: {
            en: "The Sixteenth Amendment creates a federal income tax and the Federal Reserve is founded, reshaping the government's role in the economy on the eve of world war.",
            el: "Η Δέκατη Έκτη Τροπολογία θεσπίζει ομοσπονδιακό φόρο εισοδήματος και ιδρύεται η Ομοσπονδιακή Τράπεζα, αναδιαμορφώνοντας τον ρόλο της κυβέρνησης στην οικονομία στο κατώφλι του παγκοσμίου πολέμου."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
