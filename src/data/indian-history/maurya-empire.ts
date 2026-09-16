/** Maurya Empire — Αυτοκρατορία των Μαυρύα · Indian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const MAURYA_EMPIRE = {
  id: "maurya-empire" as const,
  label: {
    en: "Maurya Empire",
    el: "Αυτοκρατορία των Μαυρύα"
  },
  supertitle: {
    en: "Chandragupta and Ashoka",
    el: "Ο Τσαντραγκούπτα και ο Ασόκα"
  },
  title: {
    en: "The Maurya Empire",
    el: "Η Αυτοκρατορία των Μαυρύα"
  },
  subtitle: {
    en: "From Chandragupta's overthrow of the Nandas and the building of India's first great empire, through his pact with Alexander's successor and the vast realm ruled from Pataliputra, to the bloody conquest of Kalinga that turned the emperor Ashoka to the Buddhist dharma and his message of righteousness carved on rock across the land. Slide across the age when the subcontinent was first united, and an emperor renounced war at the height of his power.",
    el: "Από την ανατροπή των Νάντα από τον Τσαντραγκούπτα και το χτίσιμο της πρώτης μεγάλης αυτοκρατορίας της Ινδίας, μέσα από το σύμφωνό του με τον διάδοχο του Αλεξάνδρου και το απέραντο βασίλειο που κυβερνιόταν από την Παταλιπούτρα, ως την αιματηρή κατάκτηση της Καλίνγκα που έστρεψε τον αυτοκράτορα Ασόκα στη βουδιστική ντάρμα και το μήνυμα της δικαιοσύνης του λαξευμένο σε βράχους σε όλη τη χώρα. Μετακινηθείτε στην εποχή που η υποήπειρος ενώθηκε για πρώτη φορά, κι ένας αυτοκράτορας απαρνήθηκε τον πόλεμο στο απόγειο της δύναμής του."
  },
  menuDescription: {
    en: "India's first empire, from Chandragupta and Chanakya to Ashoka's turn to the Buddhist dharma.",
    el: "Η πρώτη αυτοκρατορία της Ινδίας, από τον Τσαντραγκούπτα και τον Τσανάκια ως τη στροφή του Ασόκα στη βουδιστική ντάρμα."
  },
  footerLabel: {
    en: "Maurya Empire · 321–185 BC",
    el: "Αυτοκρατορία των Μαυρύα · 321–185 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Maurya Empire",
    el: "Η Αυτοκρατορία των Μαυρύα"
  },
  theme: THEMES.gold,
  timeline: [
    {
      year: -321,
      era: {
        en: "The Founding",
        el: "Η Ίδρυση"
      },
      events: [
        {
          title: {
            en: "Chandragupta founds the empire",
            el: "Ο Τσαντραγκούπτα ιδρύει την αυτοκρατορία"
          },
          description: {
            en: "Guided by the shrewd Chanakya, Chandragupta Maurya overthrows the Nandas and founds India's first empire.",
            el: "Καθοδηγούμενος από τον οξυδερκή Τσανάκια, ο Τσαντραγκούπτα Μαυρύα ανατρέπει τους Νάντα και ιδρύει την πρώτη αυτοκρατορία της Ινδίας."
          },
          extendedDescription: {
            en: "A young adventurer aided by the brilliant strategist Chanakya — author of the Arthashastra, a ruthless manual of statecraft — Chandragupta seized the Nanda throne at Pataliputra and forged a centralized empire across northern India. From a single capital he ruled through a vast bureaucracy, standing army and network of spies.",
            el: "Ένας νεαρός τυχοδιώκτης με τη βοήθεια του λαμπρού στρατηγικού νου Τσανάκια — συγγραφέα της Αρθασάστρα, ενός αδίστακτου εγχειριδίου διακυβέρνησης — ο Τσαντραγκούπτα άρπαξε τον θρόνο των Νάντα στην Παταλιπούτρα και σφυρηλάτησε μια συγκεντρωτική αυτοκρατορία σε όλη τη βόρεια Ινδία. Από μια μόνη πρωτεύουσα κυβερνούσε μέσω μιας τεράστιας γραφειοκρατίας, μόνιμου στρατού και δικτύου κατασκόπων."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Lomas_Rishi_entrance.jpg?width=1024",
            alt: {
              en: "A Mauryan-era rock-cut cave at Barabar",
              el: "Λαξευτό σπήλαιο της εποχής των Μαυρύα στο Μπαραμπάρ"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -305,
      era: {
        en: "The Founding",
        el: "Η Ίδρυση"
      },
      events: [
        {
          title: {
            en: "Peace with Seleucus",
            el: "Ειρήνη με τον Σέλευκο"
          },
          description: {
            en: "Chandragupta defeats Seleucus, Alexander's successor, gaining vast lands and 500 war-elephants in the peace.",
            el: "Ο Τσαντραγκούπτα νικά τον Σέλευκο, διάδοχο του Αλεξάνδρου, κερδίζοντας απέραντες γαίες και 500 πολεμικούς ελέφαντες στην ειρήνη."
          },
          extendedDescription: {
            en: "When Seleucus tried to recover Alexander's Indian conquests, Chandragupta drove him back and won the eastern provinces of the Greek empire, sealing the peace with a marriage alliance and a gift of five hundred elephants. The Greek envoy Megasthenes lived at Pataliputra and described its splendour, giving the classical world its first detailed picture of India.",
            el: "Όταν ο Σέλευκος προσπάθησε να ανακτήσει τις ινδικές κατακτήσεις του Αλεξάνδρου, ο Τσαντραγκούπτα τον απώθησε και κέρδισε τις ανατολικές επαρχίες της ελληνικής αυτοκρατορίας, σφραγίζοντας την ειρήνη με γαμήλια συμμαχία κι ένα δώρο πεντακοσίων ελεφάντων. Ο Έλληνας απεσταλμένος Μεγασθένης έζησε στην Παταλιπούτρα και περιέγραψε τη λαμπρότητά της, δίνοντας στον κλασικό κόσμο την πρώτη λεπτομερή εικόνα της Ινδίας."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Seleukos_I_Nikator_Bronze_Roman_100BCE-100CE_Museo_Archeologico_Nazionale_Naples_AN_5590_1.jpg?width=1024",
            alt: {
              en: "Seleucus I Nicator, who made peace with Chandragupta",
              el: "Ο Σέλευκος Α΄ Νικάτωρ, που έκανε ειρήνη με τον Τσαντραγκούπτα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -268,
      era: {
        en: "Ashoka the Great",
        el: "Ο Ασόκα ο Μέγας"
      },
      events: [
        {
          title: {
            en: "Ashoka takes the throne",
            el: "Ο Ασόκα ανεβαίνει στον θρόνο"
          },
          description: {
            en: "Chandragupta's grandson Ashoka inherits and extends the empire to nearly the whole subcontinent.",
            el: "Ο εγγονός του Τσαντραγκούπτα, ο Ασόκα, κληρονομεί κι επεκτείνει την αυτοκρατορία σχεδόν σε όλη την υποήπειρο."
          },
          extendedDescription: {
            en: "The greatest of the Mauryas came to power as a hard and ambitious ruler. Under Ashoka the empire reached its height, stretching from Afghanistan to the south of the peninsula — the most nearly complete unification of India before modern times. Only the far south lay beyond his grasp.",
            el: "Ο μεγαλύτερος των Μαυρύα ήρθε στην εξουσία ως σκληρός και φιλόδοξος ηγεμόνας. Υπό τον Ασόκα η αυτοκρατορία έφτασε στο απόγειό της, εκτεινόμενη από το Αφγανιστάν ως τον νότο της χερσονήσου — η σχεδόν πληρέστερη ενοποίηση της Ινδίας πριν από τη νεότερη εποχή. Μόνο ο μακρινός νότος έμεινε πέρα από τα χέρια του."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ashoka%27s_visit_to_the_Ramagrama_stupa_Sanchi_Stupa_1_Southern_gateway.jpg?width=1024",
            alt: {
              en: "The emperor Ashoka",
              el: "Ο αυτοκράτορας Ασόκα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -261,
      era: {
        en: "Ashoka the Great",
        el: "Ο Ασόκα ο Μέγας"
      },
      events: [
        {
          title: {
            en: "The war in Kalinga",
            el: "Ο πόλεμος στην Καλίνγκα"
          },
          description: {
            en: "Ashoka's brutal conquest of Kalinga, with its vast slaughter, fills him with remorse and changes his life.",
            el: "Η βάναυση κατάκτηση της Καλίνγκα από τον Ασόκα, με την τεράστια σφαγή της, τον γεμίζει τύψεις κι αλλάζει τη ζωή του."
          },
          extendedDescription: {
            en: "The war against the independent kingdom of Kalinga was won at a terrible cost — by Ashoka's own account, a hundred thousand slain and many more deported. Sickened by the suffering he had caused, the emperor renounced war forever. It was, he declared on stone, the moment he embraced the dharma — a rare confession of guilt by any ruler in history.",
            el: "Ο πόλεμος κατά του ανεξάρτητου βασιλείου της Καλίνγκα κερδήθηκε με τρομερό κόστος — κατά τη δική του μαρτυρία, εκατό χιλιάδες σφαγμένοι και πολλοί περισσότεροι εκτοπισμένοι. Αηδιασμένος από τον πόνο που είχε προκαλέσει, ο αυτοκράτορας απαρνήθηκε τον πόλεμο για πάντα. Ήταν, όπως διακήρυξε σε πέτρα, η στιγμή που αγκάλιασε την ντάρμα — μια σπάνια ομολογία ενοχής από οποιονδήποτε ηγεμόνα στην ιστορία."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/ShantiSthupa_Dhauli.jpg?width=1024",
            alt: {
              en: "Ashoka's rock edict at Dhauli, near the Kalinga battlefield",
              el: "Το διάταγμα σε βράχο του Ασόκα στη Νταουλί, κοντά στο πεδίο της Καλίνγκα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -260,
      era: {
        en: "The Dharma",
        el: "Η Ντάρμα"
      },
      events: [
        {
          title: {
            en: "Ashoka's edicts of righteousness",
            el: "Τα διατάγματα δικαιοσύνης του Ασόκα"
          },
          description: {
            en: "Ashoka has his message of dharma — tolerance, non-violence and welfare — carved on rocks and pillars across the empire.",
            el: "Ο Ασόκα λαξεύει το μήνυμα της ντάρμα του — ανοχή, μη βία και ευημερία — σε βράχους και στήλες σε όλη την αυτοκρατορία."
          },
          extendedDescription: {
            en: "In edicts inscribed on polished stone pillars and rock faces — the earliest surviving Indian writing since the Indus — Ashoka urged compassion, respect for all faiths, care for animals, and the planting of wells and shade-trees. He appointed officers of dharma and softened the harsh Mauryan state. His lion capital at Sarnath is today the emblem of the Republic of India.",
            el: "Σε διατάγματα χαραγμένα σε στιλβωμένες λίθινες στήλες και όψεις βράχων — η αρχαιότερη σωζόμενη ινδική γραφή μετά τον Ινδό — ο Ασόκα προέτρεπε σε συμπόνια, σεβασμό όλων των θρησκειών, φροντίδα των ζώων και φύτεμα πηγαδιών και σκιερών δέντρων. Διόρισε αξιωματούχους της ντάρμα και μαλάκωσε το σκληρό μαυρυακό κράτος. Το λεοντόσχημο κιονόκρανό του στο Σάρνατ είναι σήμερα το έμβλημα της Δημοκρατίας της Ινδίας."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sarnath_capital.jpg?width=1024",
            alt: {
              en: "The Lion Capital of Ashoka, emblem of the Republic of India",
              el: "Το Λεοντόσχημο Κιονόκρανο του Ασόκα, έμβλημα της Δημοκρατίας της Ινδίας"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -250,
      era: {
        en: "The Dharma",
        el: "Η Ντάρμα"
      },
      events: [
        {
          title: {
            en: "Buddhism goes abroad",
            el: "Ο Βουδισμός ταξιδεύει"
          },
          description: {
            en: "Ashoka sends Buddhist missionaries as far as Sri Lanka and the Greek kingdoms, spreading the faith beyond India.",
            el: "Ο Ασόκα στέλνει βουδιστές ιεραπόστολους ως τη Σρι Λάνκα και τα ελληνικά βασίλεια, διαδίδοντας την πίστη πέρα από την Ινδία."
          },
          extendedDescription: {
            en: "Ashoka convened a great Buddhist council and dispatched missions across Asia and to the Hellenistic west. His son Mahinda is said to have carried the teaching to Sri Lanka, where it took deep root. Through his patronage a regional creed began its transformation into one of the great world religions.",
            el: "Ο Ασόκα συγκάλεσε μια μεγάλη βουδιστική σύνοδο κι απέστειλε αποστολές σε όλη την Ασία και στη δυτική ελληνιστική επικράτεια. Ο γιος του Μαχίντα λέγεται ότι μετέφερε τη διδασκαλία στη Σρι Λάνκα, όπου ρίζωσε βαθιά. Μέσα από την προστασία του μια περιφερειακή πίστη άρχισε τη μεταμόρφωσή της σε μία από τις μεγάλες παγκόσμιες θρησκείες."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/East_Gateway_-_Stupa_1_-_Sanchi_Hill_2013-02-21_4398.JPG?width=1024",
            alt: {
              en: "The Great Stupa at Sanchi",
              el: "Η Μεγάλη Στούπα στο Σάντσι"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -185,
      era: {
        en: "The Fall",
        el: "Η Πτώση"
      },
      events: [
        {
          title: {
            en: "The fall of the Mauryas",
            el: "Η πτώση των Μαυρύα"
          },
          description: {
            en: "Half a century after Ashoka, the last Maurya is overthrown and the great empire dissolves.",
            el: "Μισό αιώνα μετά τον Ασόκα, ο τελευταίος Μαυρύα ανατρέπεται και η μεγάλη αυτοκρατορία διαλύεται."
          },
          extendedDescription: {
            en: "After Ashoka's death the empire weakened, its huge army and bureaucracy a burden as central control slipped. In 185 BC the general Pushyamitra Shunga killed the last Maurya emperor and seized the throne. India fragmented once more into regional states, but the Mauryan ideal of a united subcontinent endured as a memory and a model.",
            el: "Μετά τον θάνατο του Ασόκα η αυτοκρατορία εξασθένησε, ο τεράστιος στρατός και η γραφειοκρατία της βάρος καθώς ο κεντρικός έλεγχος χαλάρωνε. Το 185 π.Χ. ο στρατηγός Πουσιαμίτρα Σούνγκα σκότωσε τον τελευταίο αυτοκράτορα Μαυρύα κι άρπαξε τον θρόνο. Η Ινδία κατακερματίστηκε ξανά σε περιφερειακά κράτη, όμως το μαυρυακό ιδεώδες μιας ενωμένης υποηπείρου επιβίωσε ως μνήμη και πρότυπο."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bharhut_Sunga_individual.jpg?width=1024",
            alt: {
              en: "Pushyamitra Shunga, who overthrew the Mauryas",
              el: "Ο Πουσιαμίτρα Σούνγκα, που ανέτρεψε τους Μαυρύα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
