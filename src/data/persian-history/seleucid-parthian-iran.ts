/** Seleucid & Parthian Iran — Σελευκιδικό & Παρθικό Ιράν · Persian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const SELEUCID_PARTHIAN_IRAN = {
  id: "seleucid-parthian-iran" as const,
  label: {
    en: "Seleucid & Parthian Iran",
    el: "Σελευκιδικό & Παρθικό Ιράν"
  },
  supertitle: {
    en: "Arsacid Iran",
    el: "Αρσακιδικό Ιράν"
  },
  title: {
    en: "Seleucid & Parthian Iran",
    el: "Σελευκιδικό & Παρθικό Ιράν"
  },
  subtitle: {
    en: "From Alexander's Hellenistic heirs and the Greek kingdoms of the East through the rise of the Parthian Arsacids, the annihilation of Crassus at Carrhae, and four centuries of rivalry with Rome along the Euphrates, to the fall of Parthia before the Sasanians. Slide across the centuries to read the major events of Iran between the empires.",
    el: "Από τους ελληνιστικούς κληρονόμους του Αλεξάνδρου και τα ελληνικά βασίλεια της Ανατολής, μέσα από την άνοδο των Πάρθων Αρσακιδών, την εκμηδένιση του Κράσσου στις Κάρρες και τέσσερις αιώνες ανταγωνισμού με τη Ρώμη κατά μήκος του Ευφράτη, ως την πτώση της Παρθίας μπροστά στους Σασανίδες. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα γεγονότα του Ιράν ανάμεσα στις αυτοκρατορίες."
  },
  menuDescription: {
    en: "Alexander's heirs and the Parthian horse-archers who fought Rome to a standstill.",
    el: "Οι κληρονόμοι του Αλεξάνδρου κι οι Πάρθοι ιπποτοξότες που κράτησαν τη Ρώμη σε αδιέξοδο."
  },
  footerLabel: {
    en: "Seleucid & Parthian Iran · 330 BC-224 AD",
    el: "Σελευκιδικό & Παρθικό Ιράν · 330 π.Χ.-224 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Seleucid & Parthian Iran",
    el: "Σελευκιδικό & Παρθικό Ιράν"
  },
  theme: THEMES.bronze,
  timeline: [
    {
      year: -312,
      era: {
        en: "Seleucid Kingdom",
        el: "Βασίλειο των Σελευκιδών"
      },
      events: [
        {
          title: {
            en: "Seleucus founds his kingdom",
            el: "Ο Σέλευκος ιδρύει το βασίλειό του"
          },
          description: {
            en: "After Alexander's death, his general Seleucus takes Babylon and builds a vast realm across Iran and the East.",
            el: "Μετά τον θάνατο του Αλεξάνδρου, ο στρατηγός του Σέλευκος καταλαμβάνει τη Βαβυλώνα και οικοδομεί ένα τεράστιο κράτος στο Ιράν και την Ανατολή."
          },
          extendedDescription: {
            en: "Seleucus I Nicator won the largest share of Alexander's empire, from the Mediterranean to the borders of India. He founded Greek cities such as Seleucia on the Tigris and later Antioch, seeding the Iranian world with Hellenistic culture even as he ruled its ancient peoples.",
            el: "Ο Σέλευκος Α΄ ο Νικάτωρ κέρδισε το μεγαλύτερο μερίδιο της αυτοκρατορίας του Αλεξάνδρου, από τη Μεσόγειο ως τα σύνορα της Ινδίας. Ίδρυσε ελληνικές πόλεις όπως τη Σελεύκεια επί του Τίγρη και αργότερα την Αντιόχεια, σπέρνοντας τον ιρανικό κόσμο με ελληνιστικό πολιτισμό, ενώ κυβερνούσε τους αρχαίους λαούς του."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Seleukos_I_Nikator_Bronze_Roman_100BCE-100CE_Museo_Archeologico_Nazionale_Naples_AN_5590_1.jpg?width=1024",
            alt: {
              en: "Bronze bust of Seleucus I Nicator",
              el: "Χάλκινη προτομή του Σέλευκου Α΄ Νικάτορα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -305,
      era: {
        en: "Seleucid Kingdom",
        el: "Βασίλειο των Σελευκιδών"
      },
      events: [
        {
          title: {
            en: "Seleucus cedes the east to the Mauryas",
            el: "Ο Σέλευκος παραχωρεί την Ανατολή στους Μαυρύα"
          },
          description: {
            en: "Seleucus makes peace with Chandragupta Maurya, ceding the eastern provinces in exchange for 500 war elephants.",
            el: "Ο Σέλευκος συνάπτει ειρήνη με τον Τσαντραγκούπτα Μαυρύα, παραχωρώντας τις ανατολικές επαρχίες με αντάλλαγμα 500 πολεμικούς ελέφαντες."
          },
          extendedDescription: {
            en: "Unable to hold the Indus lands, Seleucus traded them for the elephants that would win him the Battle of Ipsus. The treaty opened a lasting exchange between the Hellenistic and Indian worlds, complete with a Seleucid ambassador, Megasthenes, at the Mauryan court.",
            el: "Αδυνατώντας να κρατήσει τα εδάφη του Ινδού, ο Σέλευκος τα αντάλλαξε με τους ελέφαντες που θα του χάριζαν τη μάχη της Ιψού. Η συνθήκη άνοιξε μια διαρκή ανταλλαγή ανάμεσα στον ελληνιστικό και τον ινδικό κόσμο, με έναν Σελευκίδη πρέσβη, τον Μεγασθένη, στην αυλή των Μαυρύα."
          },
          category: "political"
        }
      ]
    },
    {
      year: -247,
      era: {
        en: "Rise of Parthia",
        el: "Άνοδος της Παρθίας"
      },
      events: [
        {
          title: {
            en: "Arsaces and the Parthian revolt",
            el: "Ο Αρσάκης και η παρθική εξέγερση"
          },
          description: {
            en: "Arsaces, chief of the Parni, seizes the satrapy of Parthia from the Seleucids and founds the Arsacid dynasty.",
            el: "Ο Αρσάκης, αρχηγός των Πάρνων, αποσπά τη σατραπεία της Παρθίας από τους Σελευκίδες και ιδρύει τη δυναστεία των Αρσακιδών."
          },
          extendedDescription: {
            en: "The Parni were an Iranian nomadic people from the steppe northeast of Iran. Their chief Arsaces overran Parthia as Seleucid power weakened, founding a line that would rule for nearly five centuries and count 247 BCE as year one of its era. From these modest beginnings grew Rome's greatest eastern rival.",
            el: "Οι Πάρνοι ήταν ιρανικός νομαδικός λαός από τη στέπα βορειοανατολικά του Ιράν. Ο αρχηγός τους Αρσάκης κατέλαβε την Παρθία καθώς η σελευκιδική ισχύς αποδυναμωνόταν, ιδρύοντας μια δυναστεία που θα κυβερνούσε σχεδόν πέντε αιώνες και θεωρούσε το 247 π.Χ. ως έτος πρώτο της εποχής της. Από αυτές τις ταπεινές απαρχές γεννήθηκε ο μεγαλύτερος ανατολικός αντίπαλος της Ρώμης."
          },
          category: "political"
        }
      ]
    },
    {
      year: -238,
      era: {
        en: "Rise of Parthia",
        el: "Άνοδος της Παρθίας"
      },
      events: [
        {
          title: {
            en: "The Greco-Bactrian kingdom",
            el: "Το ελληνοβακτριανό βασίλειο"
          },
          description: {
            en: "Far to the east, the Greek governor Diodotus breaks away to found the independent kingdom of Bactria.",
            el: "Μακριά στην ανατολή, ο Έλληνας διοικητής Διόδοτος αποσχίζεται για να ιδρύσει το ανεξάρτητο βασίλειο της Βακτριανής."
          },
          extendedDescription: {
            en: "In the fertile lands of modern Afghanistan and Central Asia, Greek settlers built a remarkable Hellenistic kingdom that later pushed into India. Cities like Ai-Khanoum blended Greek theatres and gymnasia with Iranian and Indian life, a lasting fusion at the eastern edge of the Greek world.",
            el: "Στα εύφορα εδάφη του σημερινού Αφγανιστάν και της Κεντρικής Ασίας, Έλληνες άποικοι έχτισαν ένα αξιοσημείωτο ελληνιστικό βασίλειο που αργότερα προχώρησε στην Ινδία. Πόλεις όπως το Άι-Χανούμ συνδύαζαν ελληνικά θέατρα και γυμναστήρια με ιρανική και ινδική ζωή, μια διαρκής σύντηξη στο ανατολικό άκρο του ελληνικού κόσμου."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -141,
      era: {
        en: "Parthian Empire",
        el: "Παρθική Αυτοκρατορία"
      },
      events: [
        {
          title: {
            en: "Mithridates I takes Mesopotamia",
            el: "Ο Μιθριδάτης Α΄ κατακτά τη Μεσοποταμία"
          },
          description: {
            en: "Mithridates I conquers Media and Babylonia, turning the Parthian realm into a true empire from the Euphrates to the East.",
            el: "Ο Μιθριδάτης Α΄ κατακτά τη Μηδία και τη Βαβυλωνία, μετατρέποντας το παρθικό κράτος σε μια πραγματική αυτοκρατορία από τον Ευφράτη ως την Ανατολή."
          },
          extendedDescription: {
            en: "Mithridates I entered Seleucia on the Tigris and took the ancient title 'King of Kings.' The Parthians presented themselves as heirs of the Achaemenids while keeping much Hellenistic culture — their coins bore Greek legends, and 'Philhellene' was a favoured royal epithet.",
            el: "Ο Μιθριδάτης Α΄ εισήλθε στη Σελεύκεια επί του Τίγρη και έλαβε τον αρχαίο τίτλο «Βασιλεύς των Βασιλέων». Οι Πάρθοι παρουσιάζονταν ως κληρονόμοι των Αχαιμενιδών, διατηρώντας ωστόσο πολύ από τον ελληνιστικό πολιτισμό — τα νομίσματά τους έφεραν ελληνικές επιγραφές, και το «Φιλέλλην» ήταν προσφιλές βασιλικό επίθετο."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Coin_of_Mithradates_I_of_Parthia,_Seleucia_mint.jpg?width=1024",
            alt: {
              en: "Coin of the Parthian king Mithridates I",
              el: "Νόμισμα του Πάρθου βασιλιά Μιθριδάτη Α΄"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -53,
      era: {
        en: "Parthia and Rome",
        el: "Παρθία και Ρώμη"
      },
      events: [
        {
          title: {
            en: "The Parthians annihilate Crassus at Carrhae",
            el: "Οι Πάρθοι εκμηδενίζουν τον Κράσσο στις Κάρρες"
          },
          description: {
            en: "At Carrhae, Parthian horse-archers destroy the Roman army of Crassus, one of Rome's worst defeats.",
            el: "Στις Κάρρες, οι Πάρθοι ιπποτοξότες καταστρέφουν τον ρωμαϊκό στρατό του Κράσσου, μία από τις χειρότερες ήττες της Ρώμης."
          },
          extendedDescription: {
            en: "The general Surena's cataphracts and mounted archers surrounded the legions on the open plain; Crassus and his son died, and the captured legionary standards became a lasting Roman humiliation. Carrhae set the Euphrates as the durable frontier between two empires that would clash for three hundred years.",
            el: "Οι κατάφρακτοι και οι έφιπποι τοξότες του στρατηγού Σουρήνα περικύκλωσαν τις λεγεώνες στην ανοιχτή πεδιάδα· ο Κράσσος και ο γιος του σκοτώθηκαν, και τα αιχμάλωτα σημαία των λεγεώνων έγιναν διαρκής ρωμαϊκή ταπείνωση. Οι Κάρρες καθιέρωσαν τον Ευφράτη ως το ανθεκτικό σύνορο ανάμεσα σε δύο αυτοκρατορίες που θα συγκρούονταν επί τριακόσια χρόνια."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Battle_of_Carrhae_(Caesar%CB%90_A_History_Of_The_Art_Of_War_Among_The_Romans_Down_To_The_End,_vol._II,_1892).jpg?width=1024",
            alt: {
              en: "Map of the Battle of Carrhae (53 BCE)",
              el: "Χάρτης της μάχης των Καρρών (53 π.Χ.)"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -20,
      era: {
        en: "Parthia and Rome",
        el: "Παρθία και Ρώμη"
      },
      events: [
        {
          title: {
            en: "Augustus recovers the lost standards",
            el: "Ο Αύγουστος ανακτά τα χαμένα σημαία"
          },
          description: {
            en: "Through diplomacy rather than war, Augustus secures the return of the standards lost at Carrhae, a peace celebrated across Rome.",
            el: "Μέσω διπλωματίας και όχι πολέμου, ο Αύγουστος εξασφαλίζει την επιστροφή των σημαίων που χάθηκαν στις Κάρρες, μια ειρήνη που γιορτάστηκε σε όλη τη Ρώμη."
          },
          extendedDescription: {
            en: "The settlement between Augustus and the Parthian king Phraates IV recognized both empires as near-equals and made Armenia a shared buffer. The recovered eagles were paraded as a triumph and immortalized on the breastplate of the Prima Porta statue of Augustus.",
            el: "Ο διακανονισμός ανάμεσα στον Αύγουστο και τον Πάρθο βασιλιά Φραάτη Δ΄ αναγνώριζε και τις δύο αυτοκρατορίες ως σχεδόν ισότιμες και κατέστησε την Αρμενία κοινή ουδέτερη ζώνη. Οι ανακτημένοι αετοί παρελάστηκαν ως θρίαμβος και απαθανατίστηκαν στον θώρακα του αγάλματος του Αυγούστου της Πρίμα Πόρτα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 116,
      era: {
        en: "Parthia and Rome",
        el: "Παρθία και Ρώμη"
      },
      events: [
        {
          title: {
            en: "Trajan reaches the Persian Gulf",
            el: "Ο Τραϊανός φτάνει στον Περσικό Κόλπο"
          },
          description: {
            en: "The emperor Trajan overruns Mesopotamia and briefly reaches the Persian Gulf, the high-water mark of Roman advance into the East.",
            el: "Ο αυτοκράτορας Τραϊανός κατακλύζει τη Μεσοποταμία και για λίγο φτάνει στον Περσικό Κόλπο, το ακρότατο σημείο της ρωμαϊκής προέλασης στην Ανατολή."
          },
          extendedDescription: {
            en: "Trajan captured the Parthian capital Ctesiphon and gazed at ships bound for India, wishing he were young enough to march on like Alexander. But revolts erupted behind him, and his successor Hadrian withdrew to the Euphrates — a reminder that the vast Iranian world could not be permanently held from the west.",
            el: "Ο Τραϊανός κατέλαβε την παρθική πρωτεύουσα Κτησιφώντα και ατένισε πλοία που έπλεαν για την Ινδία, ευχόμενος να ήταν αρκετά νέος ώστε να προελάσει σαν τον Αλέξανδρο. Όμως εξεγέρσεις ξέσπασαν πίσω του, και ο διάδοχός του Αδριανός αποσύρθηκε στον Ευφράτη — υπενθύμιση ότι ο αχανής ιρανικός κόσμος δεν μπορούσε να κρατηθεί μόνιμα από τη δύση."
          },
          category: "military"
        }
      ]
    },
    {
      year: 148,
      era: {
        en: "The Silk Road",
        el: "Ο Δρόμος του Μεταξιού"
      },
      events: [
        {
          title: {
            en: "Parthia astride the Silk Road",
            el: "Η Παρθία ανάμεσα στους δρόμους του μεταξιού"
          },
          description: {
            en: "The Parthian Empire grows rich as the middleman of the caravan trade between Rome and Han China.",
            el: "Η Παρθική Αυτοκρατορία πλουτίζει ως ο μεσάζων του καραβανιού εμπορίου ανάμεσα στη Ρώμη και τη Χαν Κίνα."
          },
          extendedDescription: {
            en: "Chinese envoys reached Parthia, and silk, spices, and glass flowed across the empire's roads and river ports. Cities such as Hatra, Ctesiphon, and Nisa flourished, and a distinctive Parthian art — with its frontal, formal figures — spread from Mesopotamia to Central Asia.",
            el: "Κινέζοι απεσταλμένοι έφτασαν στην Παρθία, και μετάξι, μπαχαρικά και γυαλί κυλούσαν στους δρόμους και τα ποτάμια λιμάνια της αυτοκρατορίας. Πόλεις όπως η Χάτρα, η Κτησιφώντα και η Νίσα άκμασαν, και μια ιδιαίτερη παρθική τέχνη — με τις μετωπικές, τυπικές μορφές της — εξαπλώθηκε από τη Μεσοποταμία ως την Κεντρική Ασία."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Map_of_the_Parthian_Empire_under_Mithridates_II.svg?width=1024",
            alt: {
              en: "The Parthian Empire at its height under Mithridates II",
              el: "Η Παρθική Αυτοκρατορία στο απόγειό της υπό τον Μιθριδάτη Β΄"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 224,
      era: {
        en: "Fall of Parthia",
        el: "Πτώση της Παρθίας"
      },
      events: [
        {
          title: {
            en: "Ardashir overthrows the Arsacids",
            el: "Ο Αρντασίρ ανατρέπει τους Αρσακίδες"
          },
          description: {
            en: "Ardashir of Persis defeats the last Parthian king Artabanus IV, ending the Arsacid dynasty and founding the Sasanian Empire.",
            el: "Ο Αρντασίρ της Περσίδας νικά τον τελευταίο Πάρθο βασιλιά Αρτάβανο Δ΄, τερματίζοντας τη δυναστεία των Αρσακιδών και ιδρύοντας την Αυτοκρατορία των Σασανιδών."
          },
          extendedDescription: {
            en: "A local ruler from Fars, the Achaemenid heartland, Ardashir rose against his Parthian overlord and crushed him at the Battle of Hormozdgan. He proclaimed a revived Persian empire, more centralized and self-consciously Iranian and Zoroastrian than Parthia had been — the dynasty that would rival Rome and Byzantium for four centuries.",
            el: "Τοπικός ηγεμόνας από τη Φαρς, την καρδιά των Αχαιμενιδών, ο Αρντασίρ εξεγέρθηκε ενάντια στον Πάρθο κυρίαρχό του και τον συνέτριψε στη μάχη του Χορμοζντγκάν. Διακήρυξε μια αναγεννημένη περσική αυτοκρατορία, πιο συγκεντρωτική και συνειδητά ιρανική και ζωροαστρική απ' ό,τι υπήρξε η Παρθία — τη δυναστεία που θα αντιμαχόταν τη Ρώμη και το Βυζάντιο επί τέσσερις αιώνες."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
