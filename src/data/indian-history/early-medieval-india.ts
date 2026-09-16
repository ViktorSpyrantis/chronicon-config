/** Early Medieval India — Πρώιμη Μεσαιωνική Ινδία · Indian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const EARLY_MEDIEVAL_INDIA = {
  id: "early-medieval-india" as const,
  label: {
    en: "Early Medieval India",
    el: "Πρώιμη Μεσαιωνική Ινδία"
  },
  supertitle: {
    en: "Temples, Cholas & Rajputs",
    el: "Ναοί, Τσόλα & Ρατζπούτ"
  },
  title: {
    en: "Early Medieval India",
    el: "Η Πρώιμη Μεσαιωνική Ινδία"
  },
  subtitle: {
    en: "From Harsha's last great northern empire and the three-way struggle for Kanauj, through the temple-building age of the Hindu revival and the mighty Chola empire that sent its fleets across the Indian Ocean, to the raids of Mahmud of Ghazni and the Turkish conquest that opened a new era. Slide across six centuries of regional splendour — of soaring temples, bronze gods and warrior kings — as classical India gave way to the medieval world.",
    el: "Από την τελευταία μεγάλη βόρεια αυτοκρατορία του Χάρσα και τον τριμερή αγώνα για το Κανάουτζ, μέσα από την εποχή της ναοδομίας της ινδουιστικής αναγέννησης και την ισχυρή αυτοκρατορία των Τσόλα που έστειλε τους στόλους της στον Ινδικό Ωκεανό, ως τις επιδρομές του Μαχμούντ της Γάζνα και την τουρκική κατάκτηση που άνοιξε μια νέα εποχή. Μετακινηθείτε μέσα σε έξι αιώνες περιφερειακής λαμπρότητας — υψιπετών ναών, χάλκινων θεών και πολεμιστών βασιλέων — καθώς η κλασική Ινδία έδινε τη θέση της στον μεσαιωνικό κόσμο."
  },
  menuDescription: {
    en: "Harsha, the temple age, the Chola sea-empire and the coming of Turkish conquest.",
    el: "Ο Χάρσα, η εποχή των ναών, η θαλάσσια αυτοκρατορία των Τσόλα και η έλευση της τουρκικής κατάκτησης."
  },
  footerLabel: {
    en: "Early Medieval India · 606–1206 AD",
    el: "Πρώιμη Μεσαιωνική Ινδία · 606–1206 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Early Medieval India",
    el: "Η Πρώιμη Μεσαιωνική Ινδία"
  },
  theme: THEMES.teal,
  timeline: [
    {
      year: 606,
      era: {
        en: "Harsha of Kanauj",
        el: "Ο Χάρσα του Κανάουτζ"
      },
      events: [
        {
          title: {
            en: "Harsha's northern empire",
            el: "Η βόρεια αυτοκρατορία του Χάρσα"
          },
          description: {
            en: "Harsha reunites much of the north under one crown; the Chinese pilgrim Xuanzang visits his court.",
            el: "Ο Χάρσα επανενώνει μεγάλο μέρος του βορρά υπό ένα στέμμα· ο Κινέζος προσκυνητής Σουάντζανγκ επισκέπτεται την αυλή του."
          },
          extendedDescription: {
            en: "The young king Harsha built the last great empire of northern India before the Turkish conquests, ruling from Kanauj with a scholar's love of learning; he was himself a playwright. The Chinese monk Xuanzang spent years in his realm and left a vivid account of its cities, universities and faith. With Harsha's death the north fell again into rival kingdoms.",
            el: "Ο νεαρός βασιλιάς Χάρσα έχτισε την τελευταία μεγάλη αυτοκρατορία της βόρειας Ινδίας πριν από τις τουρκικές κατακτήσεις, κυβερνώντας από το Κανάουτζ με την αγάπη ενός λογίου για τη μάθηση· ήταν ο ίδιος θεατρικός συγγραφέας. Ο Κινέζος μοναχός Σουάντζανγκ πέρασε χρόνια στο βασίλειό του κι άφησε μια ζωντανή περιγραφή των πόλεων, των πανεπιστημίων και της πίστης του. Με τον θάνατο του Χάρσα ο βορράς έπεσε ξανά σε αντίπαλα βασίλεια."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Harshavardhana_Circa_AD_606-647.jpg?width=1024",
            alt: {
              en: "A coin of the emperor Harsha",
              el: "Νόμισμα του αυτοκράτορα Χάρσα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 750,
      era: {
        en: "The Struggle for the North",
        el: "Ο Αγώνας για τον Βορρά"
      },
      events: [
        {
          title: {
            en: "The tripartite struggle",
            el: "Ο τριμερής αγώνας"
          },
          description: {
            en: "Three great powers — Palas, Pratiharas and Rashtrakutas — fight for control of the Ganges and Kanauj.",
            el: "Τρεις μεγάλες δυνάμεις — Πάλα, Πρατιχάρα και Ραστρακούτα — μάχονται για τον έλεγχο του Γάγγη και του Κανάουτζ."
          },
          extendedDescription: {
            en: "For two centuries the Pala kings of Bengal, the Pratiharas of the west and the Rashtrakutas of the Deccan waged a three-cornered war for the symbolic prize of Kanauj. None could hold it for long, but each was a great power in its own right — the Palas patrons of Buddhism and the university of Nalanda, the Rashtrakutas builders of the astonishing rock-cut temple of Kailasa at Ellora.",
            el: "Επί δύο αιώνες οι βασιλείς Πάλα της Βεγγάλης, οι Πρατιχάρα της δύσης και οι Ραστρακούτα του Ντεκάν διεξήγαγαν έναν τριγωνικό πόλεμο για το συμβολικό έπαθλο του Κανάουτζ. Κανείς δεν μπόρεσε να το κρατήσει για πολύ, όμως ο καθένας ήταν μεγάλη δύναμη από μόνος του — οι Πάλα προστάτες του Βουδισμού και του πανεπιστημίου της Ναλάντα, οι Ραστρακούτα οικοδόμοι του εκπληκτικού λαξευτού ναού της Καϊλάσα στην Ελόρα."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Temple_No.-_3%2C_Nalanda_Archaeological_Site.jpg?width=1024",
            alt: {
              en: "The Buddhist university of Nalanda",
              el: "Το βουδιστικό πανεπιστήμιο της Ναλάντα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 800,
      era: {
        en: "The Age of Temples",
        el: "Η Εποχή των Ναών"
      },
      events: [
        {
          title: {
            en: "Shankara and the Hindu revival",
            el: "Ο Σανκάρα και η ινδουιστική αναγέννηση"
          },
          description: {
            en: "The philosopher Shankara renews Hindu thought as devotional bhakti and temple-building sweep the land.",
            el: "Ο φιλόσοφος Σανκάρα ανανεώνει την ινδουιστική σκέψη καθώς η λατρευτική μπάκτι κι η ναοδομία σαρώνουν τη χώρα."
          },
          extendedDescription: {
            en: "The brilliant young philosopher Adi Shankara systematized the Advaita doctrine of non-duality and founded monasteries across India, reinvigorating Hinduism as Buddhism waned. At the same time, the passionate devotional movement of bhakti spread, and kingdoms poured their wealth into ever-grander stone temples that became the beating heart of Indian religious life.",
            el: "Ο λαμπρός νεαρός φιλόσοφος Άντι Σανκάρα συστηματοποίησε το δόγμα Αντβάιτα της μη δυαδικότητας κι ίδρυσε μοναστήρια σε όλη την Ινδία, αναζωογονώντας τον Ινδουισμό καθώς ο Βουδισμός έφθινε. Ταυτόχρονα, το παθιασμένο λατρευτικό κίνημα της μπάκτι διαδόθηκε, και βασίλεια έριχναν τον πλούτο τους σε ολοένα μεγαλοπρεπέστερους λίθινους ναούς που έγιναν η καρδιά της ινδικής θρησκευτικής ζωής."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Raja_Ravi_Varma_-_Sankaracharya.jpg?width=1024",
            alt: {
              en: "The philosopher Adi Shankara",
              el: "Ο φιλόσοφος Άντι Σανκάρα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 985,
      era: {
        en: "The Chola Empire",
        el: "Η Αυτοκρατορία των Τσόλα"
      },
      events: [
        {
          title: {
            en: "Rajaraja and the great Chola temple",
            el: "Ο Ρατζαράτζα και ο μεγάλος ναός των Τσόλα"
          },
          description: {
            en: "In the south, Rajaraja Chola raises a vast empire and builds the towering Brihadisvara temple at Thanjavur.",
            el: "Στον νότο, ο Ρατζαράτζα Τσόλα υψώνει μια απέραντη αυτοκρατορία και χτίζει τον πανύψηλο ναό Μπριχαντισβάρα στο Τανζαβούρ."
          },
          extendedDescription: {
            en: "The Cholas built the greatest of the southern empires. Rajaraja I and his son Rajendra ruled the Tamil land and beyond, crowning their capital with the colossal Brihadisvara temple, its tower rising over sixty metres. The age produced the sublime Chola bronzes — above all the dancing Shiva, Nataraja — among the supreme achievements of world sculpture.",
            el: "Οι Τσόλα έχτισαν τη μεγαλύτερη από τις νότιες αυτοκρατορίες. Ο Ρατζαράτζα Α΄ κι ο γιος του Ρατζέντρα κυβέρνησαν την ταμιλική γη και πέρα από αυτήν, στεφανώνοντας την πρωτεύουσά τους με τον κολοσσιαίο ναό Μπριχαντισβάρα, με τον πύργο του να υψώνεται πάνω από εξήντα μέτρα. Η εποχή παρήγαγε τα υπέροχα χάλκινα των Τσόλα — πάνω από όλα τον χορεύοντα Σίβα, τον Ναταράτζα — από τα ύψιστα επιτεύγματα της παγκόσμιας γλυπτικής."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Brihadisvara_Temple_during_Maha_Shivaratri-WUS03611_%28edit%29.jpg?width=1024",
            alt: {
              en: "The Brihadisvara temple at Thanjavur",
              el: "Ο ναός Μπριχαντισβάρα στο Τανζαβούρ"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1025,
      era: {
        en: "The Chola Empire",
        el: "Η Αυτοκρατορία των Τσόλα"
      },
      events: [
        {
          title: {
            en: "The Cholas cross the sea",
            el: "Οι Τσόλα διασχίζουν τη θάλασσα"
          },
          description: {
            en: "Rajendra Chola sends a great fleet across the Bay of Bengal to raid the empire of Srivijaya.",
            el: "Ο Ρατζέντρα Τσόλα στέλνει μεγάλο στόλο πέρα από τον Κόλπο της Βεγγάλης για να επιδράμει στην αυτοκρατορία της Σριβιτζάγια."
          },
          extendedDescription: {
            en: "In a rare feat of Indian sea-power, Rajendra Chola launched a naval expedition across the Bay of Bengal against Srivijaya in Southeast Asia, seizing its ports and treasure. Chola merchants and culture reached the shores of Sumatra and beyond, and the dynasty's influence, in temples and trade, still marks the lands around the Indian Ocean.",
            el: "Σε ένα σπάνιο κατόρθωμα ινδικής θαλάσσιας ισχύος, ο Ρατζέντρα Τσόλα εξαπέλυσε ναυτική εκστρατεία πέρα από τον Κόλπο της Βεγγάλης εναντίον της Σριβιτζάγια στη Νοτιοανατολική Ασία, αρπάζοντας τα λιμάνια και τους θησαυρούς της. Οι έμποροι κι ο πολιτισμός των Τσόλα έφτασαν στις ακτές της Σουμάτρα και πέρα από αυτήν, κι η επιρροή της δυναστείας, σε ναούς κι εμπόριο, σημαδεύει ακόμη τις χώρες γύρω από τον Ινδικό Ωκεανό."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Rajendra_Chola_%28cropped%29.JPG?width=1024",
            alt: {
              en: "The Chola emperor Rajendra I",
              el: "Ο αυτοκράτορας των Τσόλα Ρατζέντρα Α΄"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1018,
      era: {
        en: "The Raiders from the North-West",
        el: "Οι Επιδρομείς της Βορειοδύσης"
      },
      events: [
        {
          title: {
            en: "The raids of Mahmud of Ghazni",
            el: "Οι επιδρομές του Μαχμούντ της Γάζνα"
          },
          description: {
            en: "Mahmud of Ghazni leads repeated raids into India, plundering its rich temples, including Somnath.",
            el: "Ο Μαχμούντ της Γάζνα ηγείται επανειλημμένων επιδρομών στην Ινδία, λεηλατώντας τους πλούσιους ναούς της, μεταξύ τους το Σομνάτ."
          },
          extendedDescription: {
            en: "From Afghanistan the Turkic sultan Mahmud of Ghazni launched some seventeen raids into northern India, drawn by the fabulous wealth of its temples. His sack of the great shrine of Somnath in 1025 became notorious. Mahmud did not stay to rule, but his raids exposed the disunity of the Indian kingdoms and foreshadowed the conquests to come.",
            el: "Από το Αφγανιστάν ο Τούρκος σουλτάνος Μαχμούντ της Γάζνα εξαπέλυσε περίπου δεκαεπτά επιδρομές στη βόρεια Ινδία, ελκυσμένος από τον μυθικό πλούτο των ναών της. Η λεηλασία του μεγάλου ιερού του Σομνάτ το 1025 έγινε περιβόητη. Ο Μαχμούντ δεν έμεινε για να κυβερνήσει, όμως οι επιδρομές του αποκάλυψαν τη διχόνοια των ινδικών βασιλείων και προμήνυσαν τις κατακτήσεις που έρχονταν."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mahmud_of_Ghazni%2C_Ghaznavid_ruler%2C_conquering_Qasdar_%28modern_Khuzdar%29_in_India%2C_miniature_from_the_Jami%CA%BF_al-Tawarikh_of_Rashid_al-Din_Il-Khanid_Tabriz_Ms_Or_20_f.108v.jpg?width=1024",
            alt: {
              en: "Mahmud of Ghazni, raider of India's temples",
              el: "Ο Μαχμούντ της Γάζνα, επιδρομέας των ναών της Ινδίας"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1192,
      era: {
        en: "The Turkish Conquest",
        el: "Η Τουρκική Κατάκτηση"
      },
      events: [
        {
          title: {
            en: "The battle of Tarain",
            el: "Η μάχη του Ταράιν"
          },
          description: {
            en: "Muhammad of Ghor defeats Prithviraj Chauhan at Tarain, opening northern India to Turkish rule.",
            el: "Ο Μωάμεθ του Γκορ νικά τον Πριτβιράτζ Τσαουχάν στο Ταράιν, ανοίγοντας τη βόρεια Ινδία στην τουρκική κυριαρχία."
          },
          extendedDescription: {
            en: "A year after being beaten by the Rajput king Prithviraj Chauhan, Muhammad of Ghor returned and crushed him at the second battle of Tarain. This time the conquerors stayed. Muhammad's general Qutb-ud-din Aibak took Delhi and, on his master's death, founded a new Muslim state in India — the Delhi Sultanate — beginning a new age in the subcontinent's history.",
            el: "Έναν χρόνο αφότου νικήθηκε από τον Ρατζπούτ βασιλιά Πριτβιράτζ Τσαουχάν, ο Μωάμεθ του Γκορ επέστρεψε και τον συνέτριψε στη δεύτερη μάχη του Ταράιν. Αυτή τη φορά οι κατακτητές έμειναν. Ο στρατηγός του Μωάμεθ, Κουτμπ-ουντ-ντιν Αϊμπάκ, πήρε το Δελχί και, με τον θάνατο του κυρίου του, ίδρυσε ένα νέο μουσουλμανικό κράτος στην Ινδία — το Σουλτανάτο του Δελχί — ξεκινώντας μια νέα εποχή στην ιστορία της υποηπείρου."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Posthumous_painting_depicting_Prithviraj_Chauhan_from_Kota_%28colour%29.jpg?width=1024",
            alt: {
              en: "The Rajput king Prithviraj Chauhan",
              el: "Ο Ρατζπούτ βασιλιάς Πριτβιράτζ Τσαουχάν"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
