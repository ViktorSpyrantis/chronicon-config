/** Qing Dynasty — Δυναστεία Τσινγκ · Chinese History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const QING_DYNASTY = {
  id: "qing-dynasty" as const,
  label: {
    en: "Qing Dynasty",
    el: "Δυναστεία Τσινγκ"
  },
  supertitle: {
    en: "清 · Qing",
    el: "Τσινγκ"
  },
  title: {
    en: "The Qing Dynasty",
    el: "Η Δυναστεία Τσινγκ"
  },
  subtitle: {
    en: "From the Manchu conquest and the long, brilliant reigns of Kangxi and Qianlong that doubled the empire, through the Opium Wars and the unequal treaties, the catastrophic Taiping Rebellion and the Boxer uprising, to the abdication of the last emperor in 1912. Slide across the centuries to read the major events of China's last imperial dynasty.",
    el: "Από την κατάκτηση των Μαντζού και τις μακρές, λαμπρές βασιλείες του Κανγκσί και του Τσιενλόνγκ που διπλασίασαν την αυτοκρατορία, μέσα από τους Πολέμους του Οπίου και τις άνισες συνθήκες, την καταστροφική Εξέγερση των Ταϊπίνγκ και την εξέγερση των Μπόξερ, ως την παραίτηση του τελευταίου αυτοκράτορα το 1912. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα γεγονότα της τελευταίας αυτοκρατορικής δυναστείας της Κίνας."
  },
  menuDescription: {
    en: "The Manchu empire at its height, the Opium Wars, and the fall of imperial China.",
    el: "Η αυτοκρατορία των Μαντζού στην ακμή της, οι Πόλεμοι του Οπίου κι η πτώση της αυτοκρατορικής Κίνας."
  },
  footerLabel: {
    en: "Qing Dynasty · 1644-1912 AD",
    el: "Δυναστεία Τσινγκ · 1644-1912 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Qing Dynasty",
    el: "Η Δυναστεία Τσινγκ"
  },
  theme: THEMES.amber,
  timeline: [
    {
      year: 1644,
      era: {
        en: "The Manchu Conquest",
        el: "Η Κατάκτηση των Μαντζού"
      },
      events: [
        {
          title: {
            en: "The Manchus take the Dragon Throne",
            el: "Οι Μαντζού καταλαμβάνουν τον Θρόνο του Δράκου"
          },
          description: {
            en: "The Manchu Qing enter Beijing and begin the conquest of China, imposing the queue as a sign of submission.",
            el: "Οι Μαντζού Τσινγκ εισέρχονται στο Πεκίνο και ξεκινούν την κατάκτηση της Κίνας, επιβάλλοντας την πλεξούδα ως σημάδι υποταγής."
          },
          extendedDescription: {
            en: "A people from beyond the Great Wall, the Manchus numbered only a fraction of the Chinese they came to rule. They conquered through discipline, banner armies and Chinese collaborators, and demanded that all men shave their foreheads and wear the queue on pain of death — a daily reminder of who now held the Mandate of Heaven.",
            el: "Λαός από πέρα του Σινικού Τείχους, οι Μαντζού ήταν μόλις ένα κλάσμα των Κινέζων που ήρθαν να κυβερνήσουν. Κατέκτησαν μέσω πειθαρχίας, στρατών των λαβάρων και Κινέζων συνεργατών, και απαίτησαν όλοι οι άνδρες να ξυρίζουν το μέτωπο και να φορούν την πλεξούδα επί ποινή θανάτου."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1661,
      era: {
        en: "The Kangxi Emperor",
        el: "Ο Αυτοκράτορας Κανγκσί"
      },
      events: [
        {
          title: {
            en: "The long reign of Kangxi",
            el: "Η μακρά βασιλεία του Κανγκσί"
          },
          description: {
            en: "The Kangxi Emperor consolidates Qing rule in a reign of sixty-one years, one of the longest in world history.",
            el: "Ο Αυτοκράτορας Κανγκσί εδραιώνει την κυριαρχία των Τσινγκ σε μια βασιλεία εξήντα ενός ετών, μία από τις μακρότερες στην παγκόσμια ιστορία."
          },
          extendedDescription: {
            en: "Coming to the throne as a boy, Kangxi grew into one of China's ablest rulers. He suppressed the revolt of the southern feudatories, annexed Taiwan, held back Russia on the Amur, and patronized scholarship and the arts. Under him the Qing became a stable, prosperous empire that would dominate East Asia.",
            el: "Ανεβαίνοντας στον θρόνο ως παιδί, ο Κανγκσί εξελίχθηκε σε έναν από τους ικανότερους ηγεμόνες της Κίνας. Κατέστειλε την εξέγερση των νότιων υποτελών, προσάρτησε την Ταϊβάν, ανέκοψε τη Ρωσία στον Αμούρ και προστάτευσε τη λογιοσύνη και τις τέχνες. Επί των ημερών του η Τσινγκ έγινε μια σταθερή, ευημερούσα αυτοκρατορία."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/%E6%B8%85%E5%9C%A3%E7%A5%96%E5%BA%B7%E7%86%99%E7%9A%87%E5%B8%9D%E6%9C%9D%E6%9C%8D%E5%83%8F.jpg?width=1024",
            alt: {
              en: "The Kangxi Emperor, one of China's ablest and longest-reigning rulers",
              el: "Ο Αυτοκράτορας Κανγκσί, ένας από τους ικανότερους και μακροβιότερους ηγεμόνες της Κίνας"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1735,
      era: {
        en: "The Qianlong Emperor",
        el: "Ο Αυτοκράτορας Τσιενλόνγκ"
      },
      events: [
        {
          title: {
            en: "The Qing at its zenith under Qianlong",
            el: "Η Τσινγκ στο απόγειό της υπό τον Τσιενλόνγκ"
          },
          description: {
            en: "The Qianlong Emperor expands China to its greatest extent, ruling a third of humanity at the empire's height.",
            el: "Ο Αυτοκράτορας Τσιενλόνγκ επεκτείνει την Κίνα στη μέγιστη έκτασή της, κυβερνώντας το ένα τρίτο της ανθρωπότητας στο απόγειο της αυτοκρατορίας."
          },
          extendedDescription: {
            en: "Under Qianlong the Qing conquered Xinjiang and dominated Tibet and Mongolia, doubling the empire's size and fixing much of China's modern frontier. His court was fabulously wealthy and his cultural projects immense, but late in his long reign corruption spread and population pressure mounted, sowing troubles his heirs would reap.",
            el: "Υπό τον Τσιενλόνγκ η Τσινγκ κατέκτησε το Σιντζιάνγκ και κυριάρχησε στο Θιβέτ και τη Μογγολία, διπλασιάζοντας το μέγεθος της αυτοκρατορίας και καθορίζοντας μεγάλο μέρος του σύγχρονου συνόρου της Κίνας. Η αυλή του ήταν αμύθητα πλούσια, όμως αργά στη μακρά βασιλεία του η διαφθορά εξαπλώθηκε και η πληθυσμιακή πίεση αυξήθηκε."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/%E4%B9%BE%E9%9A%86%E7%9A%87%E5%B8%9D%E6%9C%9D%E6%9C%8D%E5%83%8F%E8%BD%B4.png?width=1024",
            alt: {
              en: "The Qianlong Emperor, under whom the Qing reached its greatest extent",
              el: "Ο Αυτοκράτορας Τσιενλόνγκ, επί του οποίου η Τσινγκ έφτασε στη μέγιστη έκτασή της"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1839,
      era: {
        en: "The Opium Wars",
        el: "Οι Πόλεμοι του Οπίου"
      },
      events: [
        {
          title: {
            en: "The First Opium War",
            el: "Ο Πρώτος Πόλεμος του Οπίου"
          },
          description: {
            en: "Britain wages war to force the opium trade on China, and the defeated Qing cede Hong Kong and open the treaty ports.",
            el: "Η Βρετανία διεξάγει πόλεμο για να επιβάλει το εμπόριο οπίου στην Κίνα, και η ηττημένη Τσινγκ παραχωρεί το Χονγκ Κονγκ και ανοίγει τα λιμάνια των συνθηκών."
          },
          extendedDescription: {
            en: "When Commissioner Lin Zexu destroyed British opium at Canton, Britain sent gunboats. The Qing, their armies no match for modern warships, were crushed. The Treaty of Nanjing of 1842 ceded Hong Kong, opened five ports and imposed indemnities — the first of the 'unequal treaties' that opened a century of humiliation for China.",
            el: "Όταν ο επίτροπος Λιν Ζεσού κατέστρεψε βρετανικό όπιο στην Καντόνα, η Βρετανία έστειλε κανονιοφόρους. Η Τσινγκ, με στρατούς ασύγκριτους με τα σύγχρονα πολεμικά πλοία, συντρίφτηκε. Η Συνθήκη του Ναντζίνγκ του 1842 παραχώρησε το Χονγκ Κονγκ, άνοιξε πέντε λιμάνια και επέβαλε αποζημιώσεις — η πρώτη από τις «άνισες συνθήκες»."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Destroying_Chinese_war_junks,_by_E._Duncan_(1843).jpg?width=1024",
            alt: {
              en: "British warships destroy Chinese junks in the First Opium War (1843 print)",
              el: "Βρετανικά πολεμικά καταστρέφουν κινεζικά πλοία στον Πρώτο Πόλεμο του Οπίου (χαρακτικό 1843)"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1851,
      era: {
        en: "The Taiping Rebellion",
        el: "Η Εξέγερση των Ταϊπίνγκ"
      },
      events: [
        {
          title: {
            en: "The Taiping Rebellion",
            el: "Η Εξέγερση των Ταϊπίνγκ"
          },
          description: {
            en: "A visionary who believed himself Christ's brother leads a rebellion that may have cost twenty million lives.",
            el: "Ένας οραματιστής που πίστευε ότι ήταν αδελφός του Χριστού ηγείται μιας εξέγερσης που ίσως κόστισε είκοσι εκατομμύρια ζωές."
          },
          extendedDescription: {
            en: "Hong Xiuquan, having failed the examinations and read Christian tracts, proclaimed a Heavenly Kingdom of Great Peace and seized Nanjing. For fourteen years the Taiping controlled much of the south. The civil war that crushed them was among the deadliest in human history, and it left the Qing hollowed out and dependent on provincial armies.",
            el: "Ο Χονγκ Σιουτσουάν, έχοντας αποτύχει στις εξετάσεις και διαβάσει χριστιανικά φυλλάδια, ανακήρυξε ένα Ουράνιο Βασίλειο της Μεγάλης Ειρήνης και κατέλαβε το Ναντζίνγκ. Επί δεκατέσσερα χρόνια οι Ταϊπίνγκ έλεγχαν μεγάλο μέρος του νότου. Ο εμφύλιος που τους συνέτριψε ήταν από τους φονικότερους στην ανθρώπινη ιστορία."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Regaining_the_Provincial_City_Anqing2.jpg?width=1024",
            alt: {
              en: "Qing forces retake a city during the Taiping Rebellion",
              el: "Δυνάμεις των Τσινγκ ανακαταλαμβάνουν πόλη κατά την Εξέγερση των Ταϊπίνγκ"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1900,
      era: {
        en: "The Late Qing",
        el: "Η Ύστερη Τσινγκ"
      },
      events: [
        {
          title: {
            en: "The Boxer Rebellion",
            el: "Η Εξέγερση των Μπόξερ"
          },
          description: {
            en: "An anti-foreign uprising besieges the Beijing legations, and an eight-nation army sacks the capital in reprisal.",
            el: "Μια αντιξενική εξέγερση πολιορκεί τις πρεσβείες του Πεκίνου, και στρατός οκτώ εθνών λεηλατεί την πρωτεύουσα ως αντίποινα."
          },
          extendedDescription: {
            en: "The Boxers, a movement of martial-arts societies, rose against foreign missionaries and imperialism and besieged the legation quarter, backed by the Empress Dowager Cixi. An eight-nation expedition relieved the siege and imposed a crushing indemnity. The debacle exposed the Qing's helplessness and hastened calls for revolution.",
            el: "Οι Μπόξερ, ένα κίνημα εταιρειών πολεμικών τεχνών, ξεσηκώθηκαν κατά των ξένων ιεραποστόλων και του ιμπεριαλισμού και πολιόρκησαν τη συνοικία των πρεσβειών, με την υποστήριξη της Αυτοκράτειρας Σιξί. Μια αποστολή οκτώ εθνών έλυσε την πολιορκία και επέβαλε συντριπτική αποζημίωση, αποκαλύπτοντας την ανημπόρια της Τσινγκ."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Taku_Forts_Landing.JPG?width=1024",
            alt: {
              en: "Foreign forces land at the Taku Forts during the Boxer Rebellion",
              el: "Ξένες δυνάμεις αποβιβάζονται στα Οχυρά Τακού κατά την Εξέγερση των Μπόξερ"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1912,
      era: {
        en: "The Fall of the Qing",
        el: "Η Πτώση της Τσινγκ"
      },
      events: [
        {
          title: {
            en: "The last emperor abdicates",
            el: "Ο τελευταίος αυτοκράτορας παραιτείται"
          },
          description: {
            en: "The Xinhai Revolution ends the empire; the child emperor Puyi abdicates and two thousand years of monarchy are over.",
            el: "Η Επανάσταση Σινχάι τερματίζει την αυτοκρατορία· ο παιδί-αυτοκράτορας Πουγί παραιτείται και δύο χιλιετίες μοναρχίας τελειώνουν."
          },
          extendedDescription: {
            en: "The revolution that began at Wuchang in October 1911 spread province by province until the dynasty collapsed. In February 1912 the six-year-old Puyi, the last emperor, formally abdicated. The imperial system that had governed China since Qin Shi Huang was gone, replaced by a fragile new republic.",
            el: "Η επανάσταση που ξεκίνησε στο Ουτσάνγκ τον Οκτώβριο του 1911 εξαπλώθηκε επαρχία προς επαρχία ώσπου η δυναστεία κατέρρευσε. Τον Φεβρουάριο του 1912 ο εξάχρονος Πουγί, ο τελευταίος αυτοκράτορας, παραιτήθηκε επισήμως. Το αυτοκρατορικό σύστημα που κυβερνούσε την Κίνα από τον Τσιν Σι Χουάνγκ είχε χαθεί."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
