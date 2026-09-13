/** Song Dynasty — Δυναστεία Σονγκ · Chinese History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const SONG_DYNASTY = {
  id: "song-dynasty" as const,
  label: {
    en: "Song Dynasty",
    el: "Δυναστεία Σονγκ"
  },
  supertitle: {
    en: "宋 · Song",
    el: "Σονγκ"
  },
  title: {
    en: "The Song Dynasty",
    el: "Η Δυναστεία Σονγκ"
  },
  subtitle: {
    en: "From the reunification under Taizu and a commercial revolution of cities, paper money and ocean trade through the inventions of gunpowder, the compass and printing, the loss of the north to the Jurchen and the brilliance of the Southern Song, to the neo-Confucian synthesis of Zhu Xi and the Mongol conquest of 1279. Slide across the centuries to read the major events of China's most inventive age.",
    el: "Από την επανένωση υπό τον Ταϊτσού και μια εμπορική επανάσταση πόλεων, χαρτονομίσματος και θαλάσσιου εμπορίου, μέσα από τις εφευρέσεις της πυρίτιδας, της πυξίδας και της τυπογραφίας, την απώλεια του βορρά στους Τζουρτσέν και τη λαμπρότητα της Νότιας Σονγκ, ως τη νεοκομφουκιανή σύνθεση του Τζου Σι και τη μογγολική κατάκτηση του 1279. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα γεγονότα της πιο εφευρετικής εποχής της Κίνας."
  },
  menuDescription: {
    en: "Gunpowder, the compass and paper money: China's commercial and scientific golden age.",
    el: "Πυρίτιδα, πυξίδα και χαρτονόμισμα: η εμπορική και επιστημονική χρυσή εποχή της Κίνας."
  },
  footerLabel: {
    en: "Song Dynasty · 960-1279 AD",
    el: "Δυναστεία Σονγκ · 960-1279 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Song Dynasty",
    el: "Η Δυναστεία Σονγκ"
  },
  theme: THEMES.emerald,
  timeline: [
    {
      year: 960,
      era: {
        en: "The Northern Song",
        el: "Η Βόρεια Σονγκ"
      },
      events: [
        {
          title: {
            en: "Emperor Taizu founds the Song",
            el: "Ο Αυτοκράτορας Ταϊτσού ιδρύει τη Σονγκ"
          },
          description: {
            en: "The general Zhao Kuangyin reunites most of China and founds the Song, curbing the power of the army for good.",
            el: "Ο στρατηγός Τζάο Κουανγκγίν επανενώνει το μεγαλύτερο μέρος της Κίνας και ιδρύει τη Σονγκ, περιορίζοντας οριστικά την ισχύ του στρατού."
          },
          extendedDescription: {
            en: "Raised to the throne by his soldiers, Taizu ended the chaos of the Five Dynasties but resolved that no general would ever overthrow him as he had risen. He famously persuaded his commanders to retire, subordinated the military to civilian scholar-officials, and built a state ruled by the brush rather than the sword.",
            el: "Ανυψωμένος στον θρόνο από τους στρατιώτες του, ο Ταϊτσού τερμάτισε το χάος των Πέντε Δυναστειών αλλά αποφάσισε ότι κανένας στρατηγός δεν θα τον ανέτρεπε όπως είχε ανέλθει ο ίδιος. Έπεισε τους διοικητές του να αποσυρθούν, υπέταξε τον στρατό στους πολιτικούς λόγιους-αξιωματούχους και έχτισε ένα κράτος που κυβερνούσε η πένα παρά το ξίφος."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Song_Taizu.jpg?width=1024",
            alt: {
              en: "Emperor Taizu, founder of the Song dynasty",
              el: "Ο Αυτοκράτορας Ταϊτσού, ιδρυτής της δυναστείας Σονγκ"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1023,
      era: {
        en: "The Northern Song",
        el: "Η Βόρεια Σονγκ"
      },
      events: [
        {
          title: {
            en: "Paper money and a commercial revolution",
            el: "Το χαρτονόμισμα και μια εμπορική επανάσταση"
          },
          description: {
            en: "The Song state issues the world's first government paper money amid a booming economy of cities and trade.",
            el: "Το κράτος της Σονγκ εκδίδει το πρώτο κρατικό χαρτονόμισμα στον κόσμο, μέσα σε μια ακμάζουσα οικονομία πόλεων και εμπορίου."
          },
          extendedDescription: {
            en: "Song China underwent a commercial revolution: great cities of a million souls, bustling markets, ocean-going junks, and a money economy so vibrant that copper coin ran short and the state issued printed notes called jiaozi. Coal and iron industries, water-powered machinery and a national market made Song China the most advanced economy on earth.",
            el: "Η Κίνα της Σονγκ γνώρισε μια εμπορική επανάσταση: μεγάλες πόλεις εκατομμυρίων ψυχών, πολύβουες αγορές, ποντοπόρα πλοία και μια νομισματική οικονομία τόσο ζωντανή που το χάλκινο νόμισμα σπάνιζε και το κράτος εξέδωσε τυπωμένα χαρτονομίσματα, τα τζιαοζί. Οι βιομηχανίες άνθρακα και σιδήρου έκαναν την Κίνα της Σονγκ την πιο προηγμένη οικονομία της γης."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bianjing_city_gate.JPG?width=1024",
            alt: {
              en: "A city gate from the scroll 'Along the River During the Qingming Festival', depicting Song commerce",
              el: "Πύλη πόλης από τον κύλινδρο «Κατά μήκος του Ποταμού στη Γιορτή Τσινγκμίνγκ», που απεικονίζει το εμπόριο των Σονγκ"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1088,
      era: {
        en: "The Northern Song",
        el: "Η Βόρεια Σονγκ"
      },
      events: [
        {
          title: {
            en: "Gunpowder, the compass, and printing",
            el: "Η πυρίτιδα, η πυξίδα και η τυπογραφία"
          },
          description: {
            en: "Song engineers harness gunpowder for war, the magnetic compass for navigation, and movable type for printing.",
            el: "Οι μηχανικοί της Σονγκ αξιοποιούν την πυρίτιδα στον πόλεμο, τη μαγνητική πυξίδα στη ναυσιπλοΐα και τα κινητά στοιχεία στην τυπογραφία."
          },
          extendedDescription: {
            en: "The scholar Shen Kuo described the magnetic compass and movable-type printing in his Dream Pool Essays, while military texts recorded gunpowder weapons — fire-lances, bombs and early rockets. Three of the inventions that would remake the world took mature form under the Song, centuries before they reached Europe.",
            el: "Ο λόγιος Σεν Κουό περιέγραψε τη μαγνητική πυξίδα και την τυπογραφία με κινητά στοιχεία στα Δοκίμιά του, ενώ στρατιωτικά κείμενα κατέγραψαν όπλα πυρίτιδας — πύρινες λόγχες, βόμβες και πρώιμους πυραύλους. Τρεις από τις εφευρέσεις που θα άλλαζαν τον κόσμο ωρίμασαν επί Σονγκ, αιώνες πριν φτάσουν στην Ευρώπη."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shen_Kua_sketch.jpg?width=1024",
            alt: {
              en: "The polymath Shen Kuo, who described the compass and movable type",
              el: "Ο πολυμαθής Σεν Κουό, που περιέγραψε την πυξίδα και τα κινητά στοιχεία"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1127,
      era: {
        en: "The Southern Song",
        el: "Η Νότια Σονγκ"
      },
      events: [
        {
          title: {
            en: "The Jin conquer the north",
            el: "Οι Τζιν κατακτούν τον βορρά"
          },
          description: {
            en: "The Jurchen Jin sack Kaifeng and seize north China; the Song court flees south and rules from Hangzhou.",
            el: "Οι Τζουρτσέν Τζιν λεηλατούν το Καϊφένγκ και καταλαμβάνουν τη βόρεια Κίνα· η αυλή της Σονγκ καταφεύγει νότια και κυβερνά από το Χανγκτσόου."
          },
          extendedDescription: {
            en: "In the Jingkang disaster of 1127 the Jurchen captured the Song capital and two emperors. A prince escaped to refound the dynasty at Hangzhou as the Southern Song. Diminished but immensely rich, it presided over a dazzling maritime and cultural flowering even as it paid tribute to the northern conquerors.",
            el: "Στην καταστροφή του Τζινγκκάνγκ το 1127 οι Τζουρτσέν αιχμαλώτισαν την πρωτεύουσα της Σονγκ και δύο αυτοκράτορες. Ένας πρίγκιπας διέφυγε και ξαναΐδρυσε τη δυναστεία στο Χανγκτσόου ως Νότια Σονγκ. Μικρότερη μα αμύθητα πλούσια, προήδρευσε ενός εκθαμβωτικού ναυτικού και πολιτιστικού άνθους."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1130,
      era: {
        en: "The Southern Song",
        el: "Η Νότια Σονγκ"
      },
      events: [
        {
          title: {
            en: "Zhu Xi and Neo-Confucianism",
            el: "Ο Τζου Σι και ο Νεοκομφουκιανισμός"
          },
          description: {
            en: "The philosopher Zhu Xi reshapes Confucian thought into a grand system that will dominate China for centuries.",
            el: "Ο φιλόσοφος Τζου Σι αναδιαμορφώνει την κομφουκιανή σκέψη σε ένα μεγαλειώδες σύστημα που θα κυριαρχήσει στην Κίνα επί αιώνες."
          },
          extendedDescription: {
            en: "Zhu Xi synthesized centuries of thought into Neo-Confucianism, giving the old ethics a metaphysical depth drawn partly from Buddhism and Daoism. His commentaries on the Four Books became the basis of the imperial examinations until 1905, shaping the minds of every educated person in China, Korea, Japan and Vietnam.",
            el: "Ο Τζου Σι συνέθεσε αιώνες σκέψης στον Νεοκομφουκιανισμό, δίνοντας στην παλιά ηθική ένα μεταφυσικό βάθος αντλημένο εν μέρει από τον Βουδισμό και τον Ταοϊσμό. Τα σχόλιά του στα Τέσσερα Βιβλία έγιναν η βάση των αυτοκρατορικών εξετάσεων ως το 1905, διαμορφώνοντας κάθε μορφωμένο άνθρωπο στην Κίνα, την Κορέα, την Ιαπωνία και το Βιετνάμ."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%94%AF%E4%B8%80%E5%8F%AF%E9%9D%A0%E7%9A%84%E6%9C%B1%E7%86%B9%E7%94%BB%E5%83%8F.jpg?width=1024",
            alt: {
              en: "Zhu Xi, the philosopher who reshaped Confucian thought",
              el: "Ο Τζου Σι, ο φιλόσοφος που αναδιαμόρφωσε την κομφουκιανή σκέψη"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1200,
      era: {
        en: "The Southern Song",
        el: "Η Νότια Σονγκ"
      },
      events: [
        {
          title: {
            en: "The splendour of Hangzhou",
            el: "Η λαμπρότητα του Χανγκτσόου"
          },
          description: {
            en: "Hangzhou grows into perhaps the largest and richest city in the world, a marvel of gardens, markets and art.",
            el: "Το Χανγκτσόου εξελίσσεται ίσως στη μεγαλύτερη και πλουσιότερη πόλη του κόσμου, ένα θαύμα κήπων, αγορών και τέχνης."
          },
          extendedDescription: {
            en: "The Southern Song capital astonished later visitors like Marco Polo, who called it the finest city in the world. Its landscape painters, its refined porcelain and its printed books mark a cultural summit. Behind the beauty, however, a new power was rising on the steppe that would sweep it all away.",
            el: "Η πρωτεύουσα της Νότιας Σονγκ κατέπληξε μεταγενέστερους επισκέπτες όπως τον Μάρκο Πόλο, που την αποκάλεσε την ωραιότερη πόλη του κόσμου. Οι τοπιογράφοι της, η εκλεπτυσμένη πορσελάνη της και τα τυπωμένα βιβλία της σηματοδοτούν μια πολιτιστική κορυφή. Πίσω από την ομορφιά, όμως, μια νέα δύναμη ανέτελλε στη στέπα."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1279,
      era: {
        en: "The Mongol Conquest",
        el: "Η Μογγολική Κατάκτηση"
      },
      events: [
        {
          title: {
            en: "The Mongols destroy the Song",
            el: "Οι Μογγόλοι καταστρέφουν τη Σονγκ"
          },
          description: {
            en: "At the sea battle of Yamen the last Song resistance is crushed, and all China falls to the Mongols for the first time.",
            el: "Στη ναυμαχία του Γιαμέν η τελευταία αντίσταση της Σονγκ συντρίβεται, και όλη η Κίνα πέφτει για πρώτη φορά στους Μογγόλους."
          },
          extendedDescription: {
            en: "After a decades-long war, Kublai Khan's forces overwhelmed the Southern Song. At Yamen in 1279 a loyal minister leapt into the sea clutching the boy emperor rather than surrender. For the first time in its history, all of China lay under foreign rule — the Mongol Yuan dynasty.",
            el: "Ύστερα από πόλεμο δεκαετιών, οι δυνάμεις του Κουμπλάι Χαν κατέβαλαν τη Νότια Σονγκ. Στο Γιαμέν το 1279 ένας πιστός υπουργός πήδηξε στη θάλασσα κρατώντας τον παιδί-αυτοκράτορα παρά να παραδοθεί. Για πρώτη φορά στην ιστορία της, ολόκληρη η Κίνα βρέθηκε υπό ξένη κυριαρχία — τη μογγολική δυναστεία Γιουάν."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
