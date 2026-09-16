/** Post-Mauryan India — Μεταμαυρυακή Ινδία · Indian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const POST_MAURYAN_INDIA = {
  id: "post-mauryan-india" as const,
  label: {
    en: "Post-Mauryan India",
    el: "Μεταμαυρυακή Ινδία"
  },
  supertitle: {
    en: "Kushans, Satavahanas & the South",
    el: "Κουσάν, Σαταβαχάνα & ο Νότος"
  },
  title: {
    en: "Post-Mauryan India",
    el: "Η Μεταμαυρυακή Ινδία"
  },
  subtitle: {
    en: "From the successor states of the Mauryas and the Indo-Greek kings of the north-west, through the Deccan empire of the Satavahanas and the golden age of the Kushans astride the Silk Road, to the Tamil south of the Sangam poets and a booming trade that carried Indian goods to Rome. Slide across five centuries of division and dazzling cross-cultural exchange, in which Buddhism first took human form in art and India became the hub of a wider ancient world.",
    el: "Από τα διάδοχα κράτη των Μαυρύα και τους ελληνιστικούς βασιλείς της βορειοδύσης, μέσα από την αυτοκρατορία των Σαταβαχάνα στο Ντεκάν και τη χρυσή εποχή των Κουσάν πάνω στον Δρόμο του Μεταξιού, ως τον ταμιλικό νότο των ποιητών Σανγκάμ κι ένα ακμάζον εμπόριο που μετέφερε ινδικά αγαθά ως τη Ρώμη. Μετακινηθείτε μέσα σε πέντε αιώνες διαίρεσης και εκθαμβωτικής διαπολιτισμικής ανταλλαγής, όπου ο Βουδισμός πήρε για πρώτη φορά ανθρώπινη μορφή στην τέχνη κι η Ινδία έγινε κόμβος ενός ευρύτερου αρχαίου κόσμου."
  },
  menuDescription: {
    en: "Indo-Greeks, the Kushans of the Silk Road, the Deccan and the Roman trade of the Tamil south.",
    el: "Ινδοέλληνες, οι Κουσάν του Δρόμου του Μεταξιού, το Ντεκάν και το ρωμαϊκό εμπόριο του ταμιλικού νότου."
  },
  footerLabel: {
    en: "Post-Mauryan India · 185 BC–320 AD",
    el: "Μεταμαυρυακή Ινδία · 185 π.Χ.–320 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Post-Mauryan India",
    el: "Η Μεταμαυρυακή Ινδία"
  },
  theme: THEMES.copper,
  timeline: [
    {
      year: -185,
      era: {
        en: "The Successor States",
        el: "Τα Διάδοχα Κράτη"
      },
      events: [
        {
          title: {
            en: "The Shungas and a divided north",
            el: "Οι Σούνγκα κι ένας διαιρεμένος βορράς"
          },
          description: {
            en: "As the Mauryas fall, the Shunga dynasty and rival kingdoms carve up northern India.",
            el: "Καθώς πέφτουν οι Μαυρύα, η δυναστεία των Σούνγκα και αντίπαλα βασίλεια μοιράζονται τη βόρεια Ινδία."
          },
          extendedDescription: {
            en: "The Shungas held the Mauryan heartland around Pataliputra, patronizing Brahminical religion and the arts, including the great Buddhist stupa at Bharhut and the gateways of Sanchi. But their realm was only one of many, as India entered centuries of political division and vigorous regional culture.",
            el: "Οι Σούνγκα κράτησαν τη μαυρυακή καρδιά γύρω από την Παταλιπούτρα, προστατεύοντας τη βραχμανική θρησκεία και τις τέχνες, μεταξύ των οποίων τη μεγάλη βουδιστική στούπα στο Μπαρχούτ και τις πύλες του Σάντσι. Όμως το βασίλειό τους ήταν ένα μόνο από πολλά, καθώς η Ινδία εισερχόταν σε αιώνες πολιτικής διαίρεσης και ζωηρής περιφερειακής κουλτούρας."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bharhut_stupa_original_layout.jpg?width=1024",
            alt: {
              en: "A carved railing from the Buddhist stupa at Bharhut",
              el: "Λαξευμένο κιγκλίδωμα από τη βουδιστική στούπα στο Μπαρχούτ"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -155,
      era: {
        en: "The Indo-Greeks",
        el: "Οι Ινδοέλληνες"
      },
      events: [
        {
          title: {
            en: "Menander, the Greek king of India",
            el: "Ο Μένανδρος, ο Έλληνας βασιλιάς της Ινδίας"
          },
          description: {
            en: "Indo-Greek kings such as Menander rule the north-west, blending Hellenistic and Indian worlds.",
            el: "Ινδοέλληνες βασιλείς όπως ο Μένανδρος κυβερνούν τη βορειοδύση, συγκερνώντας τον ελληνιστικό και τον ινδικό κόσμο."
          },
          extendedDescription: {
            en: "Descendants of Alexander's Bactrian Greeks pushed into the Punjab, and the greatest of them, Menander — remembered in India as Milinda — is celebrated in a Buddhist text for his dialogue with a monk. Their coins, bearing Greek and Indian scripts and gods, embody a remarkable fusion of cultures on the frontier of two civilisations.",
            el: "Απόγονοι των Βακτριανών Ελλήνων του Αλεξάνδρου προχώρησαν στο Παντζάμπ, κι ο μεγαλύτερος από αυτούς, ο Μένανδρος — γνωστός στην Ινδία ως Μιλίντα — τιμάται σε βουδιστικό κείμενο για τον διάλογό του με έναν μοναχό. Τα νομίσματά τους, με ελληνικές και ινδικές γραφές και θεούς, ενσαρκώνουν μια αξιοσημείωτη σύντηξη πολιτισμών στα σύνορα δύο κόσμων."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Menander_I%2C_portrait_from_coinage.jpg?width=1024",
            alt: {
              en: "A coin of the Indo-Greek king Menander I",
              el: "Νόμισμα του ινδοέλληνα βασιλιά Μενάνδρου Α΄"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -50,
      era: {
        en: "The Deccan",
        el: "Το Ντεκάν"
      },
      events: [
        {
          title: {
            en: "The Satavahanas of the Deccan",
            el: "Οι Σαταβαχάνα του Ντεκάν"
          },
          description: {
            en: "The Satavahana dynasty builds a powerful empire across the Deccan, linking north and south.",
            el: "Η δυναστεία των Σαταβαχάνα χτίζει μια ισχυρή αυτοκρατορία στο Ντεκάν, συνδέοντας βορρά και νότο."
          },
          extendedDescription: {
            en: "Rising in the central plateau, the Satavahanas dominated the Deccan for centuries, growing rich on the trade routes between the Gangetic north and the ports of the coasts. Great patrons of religion, they endowed the Buddhist cave-monasteries and stupas — Amaravati chief among them — whose sculpture is a glory of early Indian art.",
            el: "Ανερχόμενοι στο κεντρικό οροπέδιο, οι Σαταβαχάνα κυριάρχησαν στο Ντεκάν επί αιώνες, πλουτίζοντας από τους εμπορικούς δρόμους ανάμεσα στον γαγγητικό βορρά και τα λιμάνια των ακτών. Μεγάλοι προστάτες της θρησκείας, προίκισαν τα βουδιστικά σπηλαιώδη μοναστήρια και τις στούπες — με πρώτη την Αμαραβάτι — των οποίων η γλυπτική είναι δόξα της πρώιμης ινδικής τέχνης."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/British_Museum_Asia_14.jpg?width=1024",
            alt: {
              en: "The Buddhist stupa of Amaravati",
              el: "Η βουδιστική στούπα της Αμαραβάτι"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 127,
      era: {
        en: "The Kushan Empire",
        el: "Η Αυτοκρατορία των Κουσάν"
      },
      events: [
        {
          title: {
            en: "Kanishka and the Kushans",
            el: "Ο Κανίσκα και οι Κουσάν"
          },
          description: {
            en: "Under Kanishka the Kushan empire straddles the Silk Road, and Buddhism flowers and spreads to China.",
            el: "Υπό τον Κανίσκα η αυτοκρατορία των Κουσάν εκτείνεται πάνω στον Δρόμο του Μεταξιού, κι ο Βουδισμός ανθίζει και διαδίδεται στην Κίνα."
          },
          extendedDescription: {
            en: "A people from Central Asia, the Kushans built an empire spanning Afghanistan and northern India, controlling the trade that flowed between Rome, India and China. Their greatest king, Kanishka, was a patron of Buddhism: under him the reformed Mahayana teaching, and the first images of the Buddha, spread north along the Silk Road toward China and East Asia.",
            el: "Ένας λαός από την Κεντρική Ασία, οι Κουσάν έχτισαν μια αυτοκρατορία που κάλυπτε το Αφγανιστάν και τη βόρεια Ινδία, ελέγχοντας το εμπόριο που έρρεε ανάμεσα στη Ρώμη, την Ινδία και την Κίνα. Ο μεγαλύτερος βασιλιάς τους, ο Κανίσκα, ήταν προστάτης του Βουδισμού: επί των ημερών του η μεταρρυθμισμένη διδασκαλία Μαχαγιάνα, και οι πρώτες εικόνες του Βούδα, διαδόθηκαν βόρεια κατά μήκος του Δρόμου του Μεταξιού προς την Κίνα και την Ανατολική Ασία."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/KanishkaCoin3.JPG?width=1024",
            alt: {
              en: "The Kushan emperor Kanishka",
              el: "Ο αυτοκράτορας των Κουσάν Κανίσκα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 150,
      era: {
        en: "Art and Faith",
        el: "Τέχνη και Πίστη"
      },
      events: [
        {
          title: {
            en: "The first images of the Buddha",
            el: "Οι πρώτες εικόνες του Βούδα"
          },
          description: {
            en: "In the workshops of Gandhara and Mathura, artists give the Buddha human form for the first time.",
            el: "Στα εργαστήρια της Γκαντάρα και της Ματούρα, καλλιτέχνες δίνουν για πρώτη φορά ανθρώπινη μορφή στον Βούδα."
          },
          extendedDescription: {
            en: "For centuries the Buddha had been shown only by symbols — a wheel, a tree, an empty throne. Now, at the meeting of cultures, sculptors began to portray him as a man: at Gandhara in a Greco-Roman style with flowing robes, at Mathura in a rounder Indian idiom. The image of the meditating Buddha, born here, would spread across half the world.",
            el: "Επί αιώνες ο Βούδας εικονιζόταν μόνο με σύμβολα — έναν τροχό, ένα δέντρο, έναν άδειο θρόνο. Τώρα, στη συνάντηση των πολιτισμών, γλύπτες άρχισαν να τον απεικονίζουν ως άνθρωπο: στη Γκαντάρα σε ελληνορωμαϊκό ύφος με ρέοντα ενδύματα, στη Ματούρα σε πιο στρογγυλό ινδικό ιδίωμα. Η εικόνα του διαλογιζόμενου Βούδα, που γεννήθηκε εδώ, θα απλωνόταν στον μισό κόσμο."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Gandhara_Buddha_%28tnm%29.jpeg?width=1024",
            alt: {
              en: "A Gandhara sculpture of the Buddha",
              el: "Γλυπτό του Βούδα από τη Γκαντάρα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 200,
      era: {
        en: "The Tamil South",
        el: "Ο Ταμιλικός Νότος"
      },
      events: [
        {
          title: {
            en: "The Sangam age and the Roman trade",
            el: "Η εποχή Σανγκάμ και το ρωμαϊκό εμπόριο"
          },
          description: {
            en: "In the far south, the Tamil kingdoms of the Sangam poets grow rich shipping spices and pearls to Rome.",
            el: "Στον μακρινό νότο, τα ταμιλικά βασίλεια των ποιητών Σανγκάμ πλουτίζουν στέλνοντας μπαχαρικά και μαργαριτάρια στη Ρώμη."
          },
          extendedDescription: {
            en: "Beyond the reach of the northern empires, the Chera, Chola and Pandya kingdoms of the Tamil land flourished, celebrated in the exquisite secular poetry of the Sangam. Riding the monsoon winds, ships carried their pepper, pearls and gems to the Roman world in exchange for gold; hoards of Roman coins still surface in the south, testimony to a trade that spanned the ancient seas.",
            el: "Πέρα από την εμβέλεια των βόρειων αυτοκρατοριών, τα βασίλεια Τσέρα, Τσόλα και Πάντυα της ταμιλικής γης άκμασαν, υμνημένα στην εξαίσια κοσμική ποίηση των Σανγκάμ. Καβαλώντας τους ανέμους των μουσώνων, πλοία μετέφεραν το πιπέρι, τα μαργαριτάρια και τους πολύτιμους λίθους τους στον ρωμαϊκό κόσμο με αντάλλαγμα χρυσό· θησαυροί ρωμαϊκών νομισμάτων εμφανίζονται ακόμη στον νότο, μαρτυρία ενός εμπορίου που κάλυπτε τις αρχαίες θάλασσες."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/TabulaPeutingerianaMuziris.jpg?width=1024",
            alt: {
              en: "The ancient Tamil trading coast of Muziris",
              el: "Η αρχαία ταμιλική εμπορική ακτή της Μουζίρις"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
