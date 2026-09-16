/** Delhi Sultanate — Σουλτανάτο του Δελχί · Indian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const DELHI_SULTANATE = {
  id: "delhi-sultanate" as const,
  label: {
    en: "Delhi Sultanate",
    el: "Σουλτανάτο του Δελχί"
  },
  supertitle: {
    en: "The Sultans of Delhi",
    el: "Οι Σουλτάνοι του Δελχί"
  },
  title: {
    en: "The Delhi Sultanate",
    el: "Το Σουλτανάτο του Δελχί"
  },
  subtitle: {
    en: "From the founding of Turkish rule at Delhi and the towering Qutb Minar, through the conquering ambition of Alauddin Khalji and the wild schemes of Muhammad bin Tughlaq, to the rise of Vijayanagara in the south and the devastating sack of Delhi by Timur. Slide across three centuries in which five dynasties ruled from Delhi, a new Indo-Islamic civilisation of language, architecture and faith took shape, and the ground was laid for the Mughal empire to come.",
    el: "Από την ίδρυση της τουρκικής κυριαρχίας στο Δελχί και το πανύψηλο Κουτμπ Μινάρ, μέσα από την κατακτητική φιλοδοξία του Αλαουντίν Χαλτζί και τα παράτολμα σχέδια του Μωάμεθ μπιν Τουγκλάκ, ως την άνοδο της Βιτζαγιαναγκάρα στον νότο και την καταστροφική λεηλασία του Δελχί από τον Ταμερλάνο. Μετακινηθείτε μέσα σε τρεις αιώνες όπου πέντε δυναστείες κυβέρνησαν από το Δελχί, ένας νέος ινδοϊσλαμικός πολιτισμός γλώσσας, αρχιτεκτονικής και πίστης πήρε μορφή, κι ετοιμάστηκε το έδαφος για τη μουγκαλική αυτοκρατορία που ερχόταν."
  },
  menuDescription: {
    en: "Three centuries of Turkish and Afghan sultans at Delhi, from Qutb Minar to Timur's sack.",
    el: "Τρεις αιώνες Τούρκων και Αφγανών σουλτάνων στο Δελχί, από το Κουτμπ Μινάρ ως τη λεηλασία του Ταμερλάνου."
  },
  footerLabel: {
    en: "Delhi Sultanate · 1206–1526 AD",
    el: "Σουλτανάτο του Δελχί · 1206–1526 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Delhi Sultanate",
    el: "Το Σουλτανάτο του Δελχί"
  },
  theme: THEMES.slate,
  timeline: [
    {
      year: 1206,
      era: {
        en: "The Slave Dynasty",
        el: "Η Δυναστεία των Δούλων"
      },
      events: [
        {
          title: {
            en: "The founding of the Sultanate",
            el: "Η ίδρυση του Σουλτανάτου"
          },
          description: {
            en: "Qutb-ud-din Aibak, a former slave, founds the Delhi Sultanate and begins the great Qutb Minar.",
            el: "Ο Κουτμπ-ουντ-ντιν Αϊμπάκ, πρώην δούλος, ιδρύει το Σουλτανάτο του Δελχί κι αρχίζει το μεγάλο Κουτμπ Μινάρ."
          },
          extendedDescription: {
            en: "Aibak, a Turkish slave-general risen to command, made himself the first sultan of Delhi, beginning the line later called the Slave dynasty. He raised the soaring victory tower of the Qutb Minar and, beside it, one of India's first great mosques. His successor Iltutmish consolidated the new state and spared it, by paying homage, the fury of the Mongols.",
            el: "Ο Αϊμπάκ, Τούρκος δούλος-στρατηγός που ανήλθε στην αρχηγία, ανακήρυξε τον εαυτό του πρώτο σουλτάνο του Δελχί, ξεκινώντας τη γενιά που αργότερα ονομάστηκε Δυναστεία των Δούλων. Ύψωσε τον υψιπετή πύργο νίκης του Κουτμπ Μινάρ και, δίπλα του, ένα από τα πρώτα μεγάλα τζαμιά της Ινδίας. Ο διάδοχός του Ιλτουτμίς εδραίωσε το νέο κράτος και το γλίτωσε, αποτίοντας φόρο τιμής, από τη μανία των Μογγόλων."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Qutb_Minar_2022.jpg?width=1024",
            alt: {
              en: "The Qutb Minar in Delhi",
              el: "Το Κουτμπ Μινάρ στο Δελχί"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1236,
      era: {
        en: "The Slave Dynasty",
        el: "Η Δυναστεία των Δούλων"
      },
      events: [
        {
          title: {
            en: "Razia, sultana of Delhi",
            el: "Η Ραζία, σουλτάνα του Δελχί"
          },
          description: {
            en: "Razia becomes the only woman ever to rule the Delhi Sultanate, a rare female sovereign in the age.",
            el: "Η Ραζία γίνεται η μόνη γυναίκα που κυβέρνησε ποτέ το Σουλτανάτο του Δελχί, μια σπάνια γυναίκα κυρίαρχος για την εποχή."
          },
          extendedDescription: {
            en: "Chosen by her father Iltutmish over her brothers, Razia Sultana ruled ably and rode to war at the head of her army, defying the norms of her time. But the Turkish nobles would not long endure a woman on the throne; after a few years she was overthrown and killed. Her brief reign remained a singular chapter in the history of the Sultanate.",
            el: "Επιλεγμένη από τον πατέρα της Ιλτουτμίς έναντι των αδελφών της, η Ραζία Σουλτάνα κυβέρνησε ικανά κι έφιππη οδήγησε τον στρατό της στον πόλεμο, αψηφώντας τους κανόνες της εποχής της. Όμως οι Τούρκοι ευγενείς δεν θα ανέχονταν για πολύ μια γυναίκα στον θρόνο· ύστερα από λίγα χρόνια ανατράπηκε και σκοτώθηκε. Η σύντομη βασιλεία της παρέμεινε ένα μοναδικό κεφάλαιο στην ιστορία του Σουλτανάτου."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Painting_of_Razia_Sultana_of_the_Delhi_Sultanate%2C_from_the_lacquer-binding_cover_of_a_manuscript_of_Tulsi_Das%27_%27Ramcharitmanas%27%2C_ca.1830%E2%80%9336.jpg?width=1024",
            alt: {
              en: "Razia Sultana, the only woman to rule Delhi",
              el: "Η Ραζία Σουλτάνα, η μόνη γυναίκα που κυβέρνησε το Δελχί"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1298,
      era: {
        en: "The Khalji Dynasty",
        el: "Η Δυναστεία των Χαλτζί"
      },
      events: [
        {
          title: {
            en: "Alauddin Khalji at the height of power",
            el: "Ο Αλαουντίν Χαλτζί στο απόγειο της δύναμης"
          },
          description: {
            en: "Alauddin Khalji repels the Mongols, conquers deep into the south, and controls prices with an iron hand.",
            el: "Ο Αλαουντίν Χαλτζί αποκρούει τους Μογγόλους, κατακτά βαθιά στον νότο κι ελέγχει τις τιμές με σιδερένιο χέρι."
          },
          extendedDescription: {
            en: "The most formidable of the sultans, Alauddin beat back repeated Mongol invasions and sent his general Malik Kafur raiding as far as the tip of the peninsula, bringing home vast plunder. At home he imposed strict market controls and a powerful standing army. Under him the Sultanate reached the peak of its territorial power.",
            el: "Ο πιο τρομερός από τους σουλτάνους, ο Αλαουντίν απέκρουσε επανειλημμένες μογγολικές εισβολές κι έστειλε τον στρατηγό του Μαλίκ Καφούρ σε επιδρομές ως την άκρη της χερσονήσου, φέρνοντας πίσω τεράστια λάφυρα. Στο εσωτερικό επέβαλε αυστηρούς ελέγχους της αγοράς κι έναν ισχυρό μόνιμο στρατό. Επί των ημερών του το Σουλτανάτο έφτασε στην κορύφωση της εδαφικής του δύναμης."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Execution_of_Jalal-al-Din_Firuzshah_II_%28r1290-96%29%2C_Jami_al-Tawarikh_%28Alauddin_Khalji_detail%29.jpg?width=1024",
            alt: {
              en: "Sultan Alauddin Khalji",
              el: "Ο σουλτάνος Αλαουντίν Χαλτζί"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1327,
      era: {
        en: "The Tughlaq Dynasty",
        el: "Η Δυναστεία των Τουγκλάκ"
      },
      events: [
        {
          title: {
            en: "The schemes of Muhammad bin Tughlaq",
            el: "Τα σχέδια του Μωάμεθ μπιν Τουγκλάκ"
          },
          description: {
            en: "The learned but rash Muhammad bin Tughlaq ruins the empire with grand projects, from moving the capital to token money.",
            el: "Ο πολυμαθής μα παράτολμος Μωάμεθ μπιν Τουγκλάκ καταστρέφει την αυτοκρατορία με μεγαλεπήβολα σχέδια, από τη μεταφορά της πρωτεύουσας ως το συμβολικό χρήμα."
          },
          extendedDescription: {
            en: "Brilliant and visionary yet fatally impulsive, Muhammad bin Tughlaq forced the population of Delhi to march to a new capital at Daulatabad in the Deccan, then reversed himself; he issued a token bronze currency that was promptly forged into worthlessness. His experiments emptied the treasury and sparked revolts, and the overextended empire began to break apart.",
            el: "Λαμπρός και οραματιστής μα μοιραία παρορμητικός, ο Μωάμεθ μπιν Τουγκλάκ ανάγκασε τον πληθυσμό του Δελχί να βαδίσει σε νέα πρωτεύουσα στο Νταουλαταμπάντ στο Ντεκάν, κι έπειτα ανακάλεσε την απόφασή του· εξέδωσε ένα συμβολικό χάλκινο νόμισμα που γρήγορα παραχαράχθηκε ως το σημείο να αχρηστευθεί. Τα πειράματά του άδειασαν το ταμείο και πυροδότησαν εξεγέρσεις, κι η υπερεκτεταμένη αυτοκρατορία άρχισε να διαλύεται."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Walls_of_Tughlaqabad_Fort.jpg?width=1024",
            alt: {
              en: "The fortress of Tughlaqabad",
              el: "Το φρούριο του Τουγκλακαμπάντ"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1336,
      era: {
        en: "The South Breaks Free",
        el: "Ο Νότος Απελευθερώνεται"
      },
      events: [
        {
          title: {
            en: "The rise of Vijayanagara",
            el: "Η άνοδος της Βιτζαγιαναγκάρα"
          },
          description: {
            en: "As the Sultanate recedes, the great Hindu empire of Vijayanagara rises to rule the south.",
            el: "Καθώς το Σουλτανάτο υποχωρεί, η μεγάλη ινδουιστική αυτοκρατορία της Βιτζαγιαναγκάρα υψώνεται για να κυβερνήσει τον νότο."
          },
          extendedDescription: {
            en: "In the wake of Tughlaq's collapse, southern India threw off Delhi's rule. The empire of Vijayanagara, \"the city of victory,\" rose to dominate the peninsula for over two centuries, its capital a wonder of temples and markets that dazzled foreign visitors. To its north the Muslim Bahmani sultanate arose, and the two would contend for the Deccan.",
            el: "Στον απόηχο της κατάρρευσης των Τουγκλάκ, η νότια Ινδία απέβαλε την κυριαρχία του Δελχί. Η αυτοκρατορία της Βιτζαγιαναγκάρα, «της πόλης της νίκης», υψώθηκε για να κυριαρχήσει στη χερσόνησο επί δύο και πλέον αιώνες, με την πρωτεύουσά της ένα θαύμα ναών κι αγορών που θάμπωνε τους ξένους επισκέπτες. Στον βορρά της αναδύθηκε το μουσουλμανικό σουλτανάτο των Μπαχμανί, και οι δύο θα διεκδικούσαν το Ντεκάν."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Wide_angle_of_Galigopuram_of_Virupaksha_Temple%2C_Hampi_%2804%29_%28cropped%29.jpg?width=1024",
            alt: {
              en: "The ruins of Vijayanagara at Hampi",
              el: "Τα ερείπια της Βιτζαγιαναγκάρα στη Χάμπι"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1398,
      era: {
        en: "The Sack of Delhi",
        el: "Η Λεηλασία του Δελχί"
      },
      events: [
        {
          title: {
            en: "Timur sacks Delhi",
            el: "Ο Ταμερλάνος λεηλατεί το Δελχί"
          },
          description: {
            en: "The conqueror Timur storms Delhi, massacring its people and leaving the Sultanate in ruins.",
            el: "Ο κατακτητής Ταμερλάνος κυριεύει το Δελχί, σφάζοντας τον λαό του κι αφήνοντας το Σουλτανάτο ερείπια."
          },
          extendedDescription: {
            en: "Sweeping down from Central Asia, Timur crushed the Sultanate's armies and took Delhi, subjecting the city to a horrific massacre and plunder from which it took generations to recover. He withdrew laden with treasure and captives, leaving the Sultanate shattered into fragments. The blow hastened its long decline toward a final Afghan dynasty.",
            el: "Κατεβαίνοντας ορμητικά από την Κεντρική Ασία, ο Ταμερλάνος συνέτριψε τους στρατούς του Σουλτανάτου και πήρε το Δελχί, υποβάλλοντας την πόλη σε φρικτή σφαγή και λεηλασία από την οποία χρειάστηκαν γενιές για να συνέλθει. Αποσύρθηκε φορτωμένος θησαυρούς κι αιχμαλώτους, αφήνοντας το Σουλτανάτο θρυμματισμένο. Το πλήγμα επιτάχυνε τη μακρά παρακμή του προς μια τελευταία αφγανική δυναστεία."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Timur_reconstruction03.jpg?width=1024",
            alt: {
              en: "The conqueror Timur",
              el: "Ο κατακτητής Ταμερλάνος"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1451,
      era: {
        en: "The Lodi Dynasty",
        el: "Η Δυναστεία των Λόντι"
      },
      events: [
        {
          title: {
            en: "The Lodis, last of the sultans",
            el: "Οι Λόντι, οι τελευταίοι των σουλτάνων"
          },
          description: {
            en: "The Afghan Lodi dynasty rules a shrunken Sultanate, the last before the coming of the Mughals.",
            el: "Η αφγανική δυναστεία των Λόντι κυβερνά ένα συρρικνωμένο Σουλτανάτο, το τελευταίο πριν από την έλευση των Μουγκάλ."
          },
          extendedDescription: {
            en: "The Lodis, an Afghan line, restored some order to the diminished Sultanate and founded the city of Agra. But their rule rested on quarrelsome nobles, and when Sultan Ibrahim Lodi alienated his chiefs, one of them invited a Central Asian prince, Babur, to intervene. At Panipat in 1526 that invitation would end the Sultanate and begin the Mughal age.",
            el: "Οι Λόντι, μια αφγανική γενιά, αποκατέστησαν κάποια τάξη στο μειωμένο Σουλτανάτο κι ίδρυσαν την πόλη της Άγκρα. Όμως η κυριαρχία τους στηριζόταν σε φιλόνικους ευγενείς, κι όταν ο σουλτάνος Ιμπραχίμ Λόντι αποξένωσε τους αρχηγούς του, ένας από αυτούς κάλεσε έναν πρίγκιπα της Κεντρικής Ασίας, τον Μπαμπούρ, να επέμβει. Στο Πανιπάτ το 1526 εκείνη η πρόσκληση θα τερμάτιζε το Σουλτανάτο και θα ξεκινούσε τη μουγκαλική εποχή."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Lodhi_Gardens_on_a_sunny_day.jpg?width=1024",
            alt: {
              en: "A Lodi-era tomb in Delhi",
              el: "Τάφος της εποχής των Λόντι στο Δελχί"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
