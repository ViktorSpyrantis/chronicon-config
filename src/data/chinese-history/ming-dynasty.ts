/** Ming Dynasty — Δυναστεία Μινγκ · Chinese History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const MING_DYNASTY = {
  id: "ming-dynasty" as const,
  label: {
    en: "Ming Dynasty",
    el: "Δυναστεία Μινγκ"
  },
  supertitle: {
    en: "明 · Ming",
    el: "Μινγκ"
  },
  title: {
    en: "The Ming Dynasty",
    el: "Η Δυναστεία Μινγκ"
  },
  subtitle: {
    en: "From the peasant founder Hongwu who drove out the Mongols through the treasure voyages of Zheng He, the building of the Forbidden City and the Great Wall in stone, and the coming of the Jesuits, to the crises of famine and rebellion that brought in the Manchus in 1644. Slide across the centuries to read the major events of the last native Chinese dynasty.",
    el: "Από τον χωρικό ιδρυτή Χονγκγού που έδιωξε τους Μογγόλους, μέσα από τα ταξίδια των θησαυρών του Τζενγκ Χε, το χτίσιμο της Απαγορευμένης Πόλης και του Σινικού Τείχους σε πέτρα, και την έλευση των Ιησουϊτών, ως τις κρίσεις λιμού και εξέγερσης που έφεραν τους Μαντζού το 1644. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα γεγονότα της τελευταίας γηγενούς κινεζικής δυναστείας."
  },
  menuDescription: {
    en: "The Forbidden City, Zheng He's treasure fleets, and the Great Wall in stone.",
    el: "Η Απαγορευμένη Πόλη, οι στόλοι των θησαυρών του Τζενγκ Χε και το πέτρινο Σινικό Τείχος."
  },
  footerLabel: {
    en: "Ming Dynasty · 1368-1644 AD",
    el: "Δυναστεία Μινγκ · 1368-1644 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Ming Dynasty",
    el: "Η Δυναστεία Μινγκ"
  },
  theme: THEMES.ruby,
  timeline: [
    {
      year: 1368,
      era: {
        en: "The Hongwu Emperor",
        el: "Ο Αυτοκράτορας Χονγκγού"
      },
      events: [
        {
          title: {
            en: "A beggar founds the Ming",
            el: "Ένας ζητιάνος ιδρύει τη Μινγκ"
          },
          description: {
            en: "Zhu Yuanzhang, born a penniless peasant, drives out the Mongols and founds the Ming as the Hongwu Emperor.",
            el: "Ο Τζου Γιουαντζάνγκ, γεννημένος άπορος χωρικός, εκδιώκει τους Μογγόλους και ιδρύει τη Μινγκ ως Αυτοκράτορας Χονγκγού."
          },
          extendedDescription: {
            en: "Orphaned by plague and once a wandering monk, Zhu Yuanzhang rose through the rebel ranks to expel the Yuan and reunify China. As the Hongwu Emperor he rebuilt the country on a Confucian and agrarian ideal, restored the examinations, and ruled with a suspicious severity, purging tens of thousands he feared might threaten his throne.",
            el: "Ορφανός από την πανούκλα και κάποτε περιπλανώμενος μοναχός, ο Τζου Γιουαντζάνγκ ανέβηκε στις τάξεις των επαναστατών για να εκδιώξει τους Γιουάν και να επανενώσει την Κίνα. Ως Αυτοκράτορας Χονγκγού ανοικοδόμησε τη χώρα πάνω σε ένα κομφουκιανικό και αγροτικό ιδανικό, αποκατέστησε τις εξετάσεις και κυβέρνησε με καχύποπτη αυστηρότητα."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_assis_de_l%27empereur_Ming_Taizu.jpg?width=1024",
            alt: {
              en: "The Hongwu Emperor, peasant founder of the Ming dynasty",
              el: "Ο Αυτοκράτορας Χονγκγού, χωρικός ιδρυτής της δυναστείας Μινγκ"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1405,
      era: {
        en: "The Yongle Emperor",
        el: "Ο Αυτοκράτορας Γιονγκλέ"
      },
      events: [
        {
          title: {
            en: "Zheng He and the treasure fleets",
            el: "Ο Τζενγκ Χε και οι στόλοι των θησαυρών"
          },
          description: {
            en: "The admiral Zheng He leads vast fleets across the Indian Ocean, reaching Arabia and the coast of Africa.",
            el: "Ο ναύαρχος Τζενγκ Χε οδηγεί τεράστιους στόλους στον Ινδικό Ωκεανό, φτάνοντας ως την Αραβία και τις ακτές της Αφρικής."
          },
          extendedDescription: {
            en: "Between 1405 and 1433 the Muslim eunuch admiral Zheng He commanded seven expeditions of hundreds of ships and tens of thousands of men — some vessels far larger than any European ship of the age. They projected Ming prestige as far as Mecca and Malindi, but after his death the voyages were halted and China turned inward.",
            el: "Ανάμεσα στο 1405 και το 1433 ο μουσουλμάνος ευνούχος ναύαρχος Τζενγκ Χε διοίκησε επτά αποστολές εκατοντάδων πλοίων και δεκάδων χιλιάδων ανδρών — μερικά σκάφη πολύ μεγαλύτερα από κάθε ευρωπαϊκό πλοίο της εποχής. Πρόβαλαν το κύρος των Μινγκ ως τη Μέκκα και το Μαλίντι, όμως μετά τον θάνατό του τα ταξίδια σταμάτησαν."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/ZhengHeShips.gif?width=1024",
            alt: {
              en: "A treasure ship of Zheng He's fleet compared with a European caravel",
              el: "Πλοίο-θησαυρός του στόλου του Τζενγκ Χε σε σύγκριση με ευρωπαϊκή καραβέλα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1420,
      era: {
        en: "The Yongle Emperor",
        el: "Ο Αυτοκράτορας Γιονγκλέ"
      },
      events: [
        {
          title: {
            en: "The Forbidden City and the move to Beijing",
            el: "Η Απαγορευμένη Πόλη και η μεταφορά στο Πεκίνο"
          },
          description: {
            en: "The Yongle Emperor moves the capital to Beijing and builds the Forbidden City as the seat of imperial power.",
            el: "Ο Αυτοκράτορας Γιονγκλέ μεταφέρει την πρωτεύουσα στο Πεκίνο και χτίζει την Απαγορευμένη Πόλη ως έδρα της αυτοκρατορικής εξουσίας."
          },
          extendedDescription: {
            en: "Having seized the throne from his nephew, the Yongle Emperor moved the capital north to Beijing to guard the frontier and confront the Mongols. There he raised the Forbidden City, a vast walled palace of golden roofs and marble courts that would house the emperors of China for five centuries, and rebuilt the Grand Canal to feed the new capital.",
            el: "Έχοντας αρπάξει τον θρόνο από τον ανιψιό του, ο Αυτοκράτορας Γιονγκλέ μετέφερε την πρωτεύουσα βόρεια στο Πεκίνο για να φυλάξει το σύνορο. Εκεί ύψωσε την Απαγορευμένη Πόλη, ένα τεράστιο τειχισμένο ανάκτορο με χρυσές στέγες και μαρμάρινες αυλές που θα στέγαζε τους αυτοκράτορες της Κίνας επί πέντε αιώνες."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Forbidden_City_-_View_from_Coal_Hill.jpg?width=1024",
            alt: {
              en: "The Forbidden City in Beijing, imperial palace built under the Yongle Emperor",
              el: "Η Απαγορευμένη Πόλη στο Πεκίνο, αυτοκρατορικό ανάκτορο χτισμένο επί του Αυτοκράτορα Γιονγκλέ"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1550,
      era: {
        en: "The Middle Ming",
        el: "Η Μέση Μινγκ"
      },
      events: [
        {
          title: {
            en: "The Great Wall rebuilt in stone",
            el: "Το Σινικό Τείχος ξαναχτισμένο σε πέτρα"
          },
          description: {
            en: "Facing renewed Mongol raids, the Ming rebuild the Great Wall in the mighty brick-and-stone form seen today.",
            el: "Αντιμέτωποι με ανανεωμένες μογγολικές επιδρομές, οι Μινγκ ξαναχτίζουν το Σινικό Τείχος στην πανίσχυρη μορφή από τούβλο και πέτρα που βλέπουμε σήμερα."
          },
          extendedDescription: {
            en: "The Ming abandoned the offensive and turned to defence, raising the greatest fortification in history along the northern frontier. Its watchtowers, ramparts and gates, built of brick and dressed stone, are the Great Wall the modern world knows — a monument as much to the Ming's fears as to its power.",
            el: "Οι Μινγκ εγκατέλειψαν την επίθεση και στράφηκαν στην άμυνα, υψώνοντας τη μεγαλύτερη οχύρωση της ιστορίας κατά μήκος του βόρειου συνόρου. Οι πύργοι, τα τείχη και οι πύλες της, χτισμένα από τούβλο και λαξευτή πέτρα, είναι το Σινικό Τείχος που γνωρίζει ο σύγχρονος κόσμος — μνημείο τόσο των φόβων των Μινγκ όσο και της ισχύος τους."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Great_Wall_of_China_at_Jinshanling-edit.jpg?width=1024",
            alt: {
              en: "The Ming Great Wall at Jinshanling, built of brick and stone",
              el: "Το Σινικό Τείχος των Μινγκ στο Τζινσανλίνγκ, χτισμένο από τούβλο και πέτρα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1582,
      era: {
        en: "The Late Ming",
        el: "Η Ύστερη Μινγκ"
      },
      events: [
        {
          title: {
            en: "Matteo Ricci and the Jesuits",
            el: "Ο Ματέο Ρίτσι και οι Ιησουΐτες"
          },
          description: {
            en: "Jesuit missionaries reach China, exchanging Western science and clocks for a place at the Ming court.",
            el: "Ιησουΐτες ιεραπόστολοι φτάνουν στην Κίνα, ανταλλάσσοντας δυτική επιστήμη και ρολόγια για μια θέση στην αυλή των Μινγκ."
          },
          extendedDescription: {
            en: "The Italian Jesuit Matteo Ricci mastered Chinese, dressed as a scholar, and won respect at court with European mathematics, astronomy and mechanical clocks. His mission opened a remarkable dialogue between Chinese and Western learning, even as silver from the New World poured into the Ming economy through global trade.",
            el: "Ο Ιταλός Ιησουΐτης Ματέο Ρίτσι έμαθε άριστα κινεζικά, ντύθηκε ως λόγιος και κέρδισε τον σεβασμό στην αυλή με ευρωπαϊκά μαθηματικά, αστρονομία και μηχανικά ρολόγια. Η αποστολή του άνοιξε έναν αξιοσημείωτο διάλογο ανάμεσα στην κινεζική και τη δυτική γνώση, ενώ ασήμι από τον Νέο Κόσμο έρεε στην οικονομία των Μινγκ."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1644,
      era: {
        en: "The Fall of the Ming",
        el: "Η Πτώση της Μινγκ"
      },
      events: [
        {
          title: {
            en: "Rebels and Manchus bring down the Ming",
            el: "Επαναστάτες και Μαντζού καταρρίπτουν τη Μινγκ"
          },
          description: {
            en: "A rebel army takes Beijing and the last Ming emperor hangs himself; the Manchus sweep in to found the Qing.",
            el: "Επαναστατικός στρατός καταλαμβάνει το Πεκίνο και ο τελευταίος αυτοκράτορας των Μινγκ κρεμιέται· οι Μαντζού εισβάλλουν και ιδρύουν τη δυναστεία Τσινγκ."
          },
          extendedDescription: {
            en: "Crippled by famine, plague, fiscal crisis and corruption, the Ming fell as the rebel Li Zicheng seized Beijing in 1644 and the Chongzhen Emperor hanged himself on a hill behind the palace. A Ming general opened the passes to the Manchus, who defeated the rebels, took the capital, and established the Qing — the last imperial dynasty of China.",
            el: "Παραλυμένη από λιμό, πανούκλα, δημοσιονομική κρίση και διαφθορά, η Μινγκ έπεσε όταν ο επαναστάτης Λι Ζιτσένγκ κατέλαβε το Πεκίνο το 1644 και ο Αυτοκράτορας Τσονγκτζέν κρεμάστηκε σε έναν λόφο πίσω από το ανάκτορο. Ένας στρατηγός των Μινγκ άνοιξε τα περάσματα στους Μαντζού, που νίκησαν τους επαναστάτες και ίδρυσαν τη δυναστεία Τσινγκ."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
