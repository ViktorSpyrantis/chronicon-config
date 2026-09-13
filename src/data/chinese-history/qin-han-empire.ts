/** Qin & Han Empire — Αυτοκρατορία Τσιν & Χαν · Chinese History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const QIN_HAN_EMPIRE = {
  id: "qin-han-empire" as const,
  label: {
    en: "Qin & Han Empire",
    el: "Αυτοκρατορία Τσιν & Χαν"
  },
  supertitle: {
    en: "秦漢 · Qin-Han",
    el: "Τσιν-Χαν"
  },
  title: {
    en: "The Qin & Han Empire",
    el: "Η Αυτοκρατορία Τσιν & Χαν"
  },
  subtitle: {
    en: "From the First Emperor's unification, the Great Wall and the Terracotta Army through the founding of the Han by a peasant, the golden age of Emperor Wu and the opening of the Silk Road, to the invention of paper and the fall of the Han before the warlords. Slide across the centuries to read the major events of China's first great empires.",
    el: "Από την ενοποίηση του Πρώτου Αυτοκράτορα, το Σινικό Τείχος και τον Πήλινο Στρατό, μέσα από την ίδρυση της Χαν από έναν χωρικό, τη χρυσή εποχή του Αυτοκράτορα Ου και το άνοιγμα του Δρόμου του Μεταξιού, ως την εφεύρεση του χαρτιού και την πτώση της Χαν μπροστά στους πολεμάρχους. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα γεγονότα των πρώτων μεγάλων αυτοκρατοριών της Κίνας."
  },
  menuDescription: {
    en: "The First Emperor and the Terracotta Army, the Han and the Silk Road.",
    el: "Ο Πρώτος Αυτοκράτορας κι ο Πήλινος Στρατός, η Χαν κι ο Δρόμος του Μεταξιού."
  },
  footerLabel: {
    en: "Qin & Han Empire · 221 BC-220 AD",
    el: "Αυτοκρατορία Τσιν & Χαν · 221 π.Χ.-220 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Qin & Han Empire",
    el: "Η Αυτοκρατορία Τσιν & Χαν"
  },
  theme: THEMES.crimson,
  timeline: [
    {
      year: -221,
      era: {
        en: "The Qin Dynasty",
        el: "Η Δυναστεία Τσιν"
      },
      events: [
        {
          title: {
            en: "The First Emperor forges an empire",
            el: "Ο Πρώτος Αυτοκράτορας σφυρηλατεί μια αυτοκρατορία"
          },
          description: {
            en: "Qin Shi Huang standardizes the script, coinage, weights and axle-widths, and divides China into centrally governed commanderies.",
            el: "Ο Τσιν Σι Χουάνγκ τυποποιεί τη γραφή, το νόμισμα, τα μέτρα και το πλάτος των αξόνων, και διαιρεί την Κίνα σε κεντρικά διοικούμενες επαρχίες."
          },
          extendedDescription: {
            en: "Ruling by the harsh doctrines of Legalism, the First Emperor abolished the old feudal nobility and imposed a uniform administration on all China. He standardized writing so that officials everywhere could read the same documents, unified currency and measures, and built a road network radiating from the capital — creating the machinery of a single state.",
            el: "Κυβερνώντας με τα σκληρά δόγματα του Νομικισμού, ο Πρώτος Αυτοκράτορας κατάργησε την παλιά φεουδαρχική αριστοκρατία και επέβαλε ενιαία διοίκηση σε όλη την Κίνα. Τυποποίησε τη γραφή ώστε οι αξιωματούχοι παντού να διαβάζουν τα ίδια έγγραφα, ενοποίησε το νόμισμα και τα μέτρα και έχτισε οδικό δίκτυο που ακτινοβολούσε από την πρωτεύουσα."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/QinShiHuang19century.jpg?width=1024",
            alt: {
              en: "Qin Shi Huang, First Emperor of a united China, in a 19th-century portrait",
              el: "Ο Τσιν Σι Χουάνγκ, Πρώτος Αυτοκράτορας μιας ενωμένης Κίνας, σε πορτρέτο του 19ου αιώνα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -214,
      era: {
        en: "The Qin Dynasty",
        el: "Η Δυναστεία Τσιν"
      },
      events: [
        {
          title: {
            en: "The Great Wall and the northern frontier",
            el: "Το Σινικό Τείχος και το βόρειο σύνορο"
          },
          description: {
            en: "Qin armies drive back the Xiongnu nomads and link older ramparts into a single long wall along the steppe frontier.",
            el: "Οι στρατοί του Τσιν αποκρούουν τους νομάδες Σιονγκνού και συνδέουν παλαιότερα τείχη σε ένα ενιαίο μακρύ τείχος κατά μήκος του συνόρου της στέπας."
          },
          extendedDescription: {
            en: "To hold the frontier against the mounted Xiongnu, General Meng Tian joined and extended the walls of the former northern states. Built by conscript and convict labour at terrible human cost, this early Great Wall was of rammed earth, far from the stone battlements of later ages, but it fixed the enduring line between the farmed south and the nomad steppe.",
            el: "Για να κρατήσει το σύνορο απέναντι στους έφιππους Σιονγκνού, ο στρατηγός Μενγκ Τιαν ένωσε και επέκτεινε τα τείχη των πρώην βόρειων κρατών. Χτισμένο από κληρωτούς και καταδίκους με τρομερό ανθρώπινο κόστος, αυτό το πρώιμο Σινικό Τείχος ήταν από συμπιεσμένο χώμα, όμως καθόρισε τη διαρκή γραμμή ανάμεσα στον καλλιεργημένο νότο και τη στέπα των νομάδων."
          },
          category: "military"
        }
      ]
    },
    {
      year: -210,
      era: {
        en: "The Qin Dynasty",
        el: "Η Δυναστεία Τσιν"
      },
      events: [
        {
          title: {
            en: "The Terracotta Army and the death of the emperor",
            el: "Ο Πήλινος Στρατός και ο θάνατος του αυτοκράτορα"
          },
          description: {
            en: "The First Emperor dies seeking immortality and is buried with an army of thousands of life-sized terracotta soldiers.",
            el: "Ο Πρώτος Αυτοκράτορας πεθαίνει αναζητώντας την αθανασία και θάβεται με έναν στρατό χιλιάδων πήλινων στρατιωτών σε φυσικό μέγεθος."
          },
          extendedDescription: {
            en: "Obsessed with defeating death, Qin Shi Huang sent expeditions for elixirs and may have poisoned himself with mercury. His vast tomb near Xi'an was guarded by the Terracotta Army — thousands of individually modelled warriors, horses and chariots — rediscovered in 1974 and now among the wonders of world archaeology.",
            el: "Έμμονος με το να νικήσει τον θάνατο, ο Τσιν Σι Χουάνγκ έστελνε αποστολές για ελιξίρια και ίσως δηλητηριάστηκε με υδράργυρο. Ο τεράστιος τάφος του κοντά στη Σιάν φυλασσόταν από τον Πήλινο Στρατό — χιλιάδες μεμονωμένα πλασμένους πολεμιστές, άλογα και άρματα — που ξαναβρέθηκε το 1974."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/51714-Terracota-Army.jpg?width=1024",
            alt: {
              en: "The Terracotta Army guarding the tomb of the First Emperor near Xi'an",
              el: "Ο Πήλινος Στρατός που φυλάει τον τάφο του Πρώτου Αυτοκράτορα κοντά στη Σιάν"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -206,
      era: {
        en: "Founding of the Han",
        el: "Ίδρυση της Χαν"
      },
      events: [
        {
          title: {
            en: "The peasant who founded the Han",
            el: "Ο χωρικός που ίδρυσε τη Χαν"
          },
          description: {
            en: "The Qin collapses in revolt; the commoner Liu Bang triumphs in civil war and founds the Han dynasty as Emperor Gaozu.",
            el: "Το Τσιν καταρρέει σε εξέγερση· ο κοινός θνητός Λιου Μπανγκ θριαμβεύει στον εμφύλιο και ιδρύει τη δυναστεία Χαν ως αυτοκράτορας Γκαοζού."
          },
          extendedDescription: {
            en: "Within four years of the First Emperor's death the resented Qin was swept away. From the ensuing struggle emerged Liu Bang, a man of humble birth who defeated the aristocratic warlord Xiang Yu. As Emperor Gaozu he softened the Qin's harshest laws while keeping its centralized state — a blend of Legalist structure and Confucian ideals that defined imperial China.",
            el: "Μέσα σε τέσσερα χρόνια από τον θάνατο του Πρώτου Αυτοκράτορα, το μισητό Τσιν σαρώθηκε. Από τον αγώνα που ακολούθησε αναδείχθηκε ο Λιου Μπανγκ, άνθρωπος ταπεινής καταγωγής που νίκησε τον αριστοκράτη πολέμαρχο Σιανγκ Γιου. Ως αυτοκράτορας Γκαοζού μαλάκωσε τους σκληρότερους νόμους του Τσιν διατηρώντας το συγκεντρωτικό κράτος του."
          },
          category: "political"
        }
      ]
    },
    {
      year: -141,
      era: {
        en: "The Western Han",
        el: "Η Δυτική Χαν"
      },
      events: [
        {
          title: {
            en: "Emperor Wu and the height of the Han",
            el: "Ο Αυτοκράτορας Ου και η ακμή της Χαν"
          },
          description: {
            en: "Emperor Wu expands the empire in every direction and makes Confucianism the doctrine of the state.",
            el: "Ο Αυτοκράτορας Ου επεκτείνει την αυτοκρατορία προς κάθε κατεύθυνση και καθιστά τον Κομφουκιανισμό δόγμα του κράτους."
          },
          extendedDescription: {
            en: "In a reign of fifty-four years Emperor Wu drove the Xiongnu deep into the steppe, annexed lands in the south and in Korea, and established the examination-tinged Confucian state that would endure for two millennia. His imperial academy trained officials in the classics, binding government to a shared moral tradition.",
            el: "Σε μια βασιλεία πενήντα τεσσάρων ετών ο Αυτοκράτορας Ου έσπρωξε τους Σιονγκνού βαθιά στη στέπα, προσάρτησε εδάφη στον νότο και στην Κορέα και εδραίωσε το κομφουκιανικό κράτος που θα διαρκούσε δύο χιλιετίες. Η αυτοκρατορική του ακαδημία εκπαίδευε αξιωματούχους στα κλασικά κείμενα."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/%E6%BC%A2%E6%AD%A6%E5%B8%9D.jpg?width=1024",
            alt: {
              en: "Emperor Wu of Han, under whom the dynasty reached its height",
              el: "Ο Αυτοκράτορας Ου της Χαν, επί του οποίου η δυναστεία έφτασε στην ακμή της"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -138,
      era: {
        en: "The Western Han",
        el: "Η Δυτική Χαν"
      },
      events: [
        {
          title: {
            en: "Zhang Qian and the opening of the Silk Road",
            el: "Ο Τζανγκ Τσιαν και το άνοιγμα του Δρόμου του Μεταξιού"
          },
          description: {
            en: "The envoy Zhang Qian journeys into Central Asia, opening the trade routes that would carry Chinese silk to Rome.",
            el: "Ο απεσταλμένος Τζανγκ Τσιαν ταξιδεύει στην Κεντρική Ασία, ανοίγοντας τους εμπορικούς δρόμους που θα μετέφεραν το κινεζικό μετάξι ως τη Ρώμη."
          },
          extendedDescription: {
            en: "Sent by Emperor Wu to seek allies against the Xiongnu, Zhang Qian was captured, escaped, and returned after thirteen years with knowledge of the western lands. His journeys opened the network later called the Silk Road, along which silk, horses, ideas and eventually Buddhism travelled between China and the wider world.",
            el: "Σταλμένος από τον Αυτοκράτορα Ου να αναζητήσει συμμάχους εναντίον των Σιονγκνού, ο Τζανγκ Τσιαν αιχμαλωτίστηκε, δραπέτευσε και επέστρεψε ύστερα από δεκατρία χρόνια με γνώση των δυτικών χωρών. Τα ταξίδια του άνοιξαν το δίκτυο που αργότερα ονομάστηκε Δρόμος του Μεταξιού."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Silk_road_Kazakhstan.svg?width=1024",
            alt: {
              en: "Map of the Silk Road trade routes opened under the Han",
              el: "Χάρτης των εμπορικών δρόμων του Μεταξιού που άνοιξαν επί Χαν"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -100,
      era: {
        en: "The Western Han",
        el: "Η Δυτική Χαν"
      },
      events: [
        {
          title: {
            en: "Sima Qian and the Records of the Grand Historian",
            el: "Ο Σιμά Τσιαν και τα Χρονικά του Μεγάλου Ιστορικού"
          },
          description: {
            en: "The court historian Sima Qian completes the Shiji, the model for two thousand years of Chinese history-writing.",
            el: "Ο αυλικός ιστορικός Σιμά Τσιαν ολοκληρώνει το Σιτζί, το πρότυπο για δύο χιλιετίες κινεζικής ιστοριογραφίας."
          },
          extendedDescription: {
            en: "Punished with mutilation for defending a disgraced general, Sima Qian chose to live in order to finish his father's great project: a history of the Chinese world from the mythical emperors to his own day. The Records of the Grand Historian set the form — annals, treatises and biographies — that every later dynastic history would follow.",
            el: "Τιμωρημένος με ακρωτηριασμό επειδή υπερασπίστηκε έναν εξευτελισμένο στρατηγό, ο Σιμά Τσιαν επέλεξε να ζήσει για να ολοκληρώσει το μεγάλο έργο του πατέρα του: μια ιστορία του κινεζικού κόσμου από τους μυθικούς αυτοκράτορες ως την εποχή του. Τα Χρονικά καθόρισαν τη μορφή που θα ακολουθούσε κάθε μεταγενέστερη δυναστική ιστορία."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Si_maqian.jpg?width=1024",
            alt: {
              en: "Sima Qian, the Grand Historian and father of Chinese historiography",
              el: "Ο Σιμά Τσιαν, ο Μέγας Ιστορικός και πατέρας της κινεζικής ιστοριογραφίας"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 9,
      era: {
        en: "The Wang Mang Interregnum",
        el: "Το Μεσοβασίλειο του Ουάνγκ Μανγκ"
      },
      events: [
        {
          title: {
            en: "Wang Mang usurps the throne",
            el: "Ο Ουάνγκ Μανγκ σφετερίζεται τον θρόνο"
          },
          description: {
            en: "The regent Wang Mang seizes power and founds the short-lived Xin dynasty, attempting sweeping and disastrous reforms.",
            el: "Ο αντιβασιλέας Ουάνγκ Μανγκ αρπάζει την εξουσία και ιδρύει τη βραχύβια δυναστεία Σιν, επιχειρώντας σαρωτικές και καταστροφικές μεταρρυθμίσεις."
          },
          extendedDescription: {
            en: "A Confucian idealist, Wang Mang nationalized land and abolished slavery in the name of a golden antiquity, but his measures brought chaos. Floods of the Yellow River and the great Red Eyebrows rebellion destroyed his regime, and after his death the Han was restored — a vivid demonstration of the Mandate of Heaven passing and returning.",
            el: "Κομφουκιανός ιδεαλιστής, ο Ουάνγκ Μανγκ εθνικοποίησε τη γη και κατάργησε τη δουλεία στο όνομα μιας χρυσής αρχαιότητας, όμως τα μέτρα του έφεραν χάος. Πλημμύρες του Κίτρινου Ποταμού και η μεγάλη εξέγερση των Κόκκινων Φρυδιών κατέστρεψαν το καθεστώς του, και μετά τον θάνατό του η Χαν αποκαταστάθηκε."
          },
          category: "political"
        }
      ]
    },
    {
      year: 105,
      era: {
        en: "The Eastern Han",
        el: "Η Ανατολική Χαν"
      },
      events: [
        {
          title: {
            en: "Cai Lun and the invention of paper",
            el: "Ο Τσάι Λουν και η εφεύρεση του χαρτιού"
          },
          description: {
            en: "The court official Cai Lun perfects a cheap papermaking process, one of China's most far-reaching gifts to the world.",
            el: "Ο αυλικός αξιωματούχος Τσάι Λουν τελειοποιεί μια φθηνή μέθοδο χαρτοποιίας, ένα από τα πιο μακρόπνοα δώρα της Κίνας στον κόσμο."
          },
          extendedDescription: {
            en: "Around 105 CE Cai Lun reported to the Han court a method of making paper from bark, hemp, rags and fishing nets. Light, cheap and easy to write on, paper spread slowly westward over the following centuries, reaching the Islamic world and Europe and transforming record-keeping, learning and administration everywhere it went.",
            el: "Γύρω στο 105 μ.Χ. ο Τσάι Λουν ανέφερε στην αυλή της Χαν μια μέθοδο παρασκευής χαρτιού από φλοιό, κάνναβη, κουρέλια και δίχτυα. Ελαφρύ, φθηνό και εύκολο για γραφή, το χαρτί εξαπλώθηκε αργά προς τη Δύση τους επόμενους αιώνες, φτάνοντας στον ισλαμικό κόσμο και την Ευρώπη."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 184,
      era: {
        en: "The Fall of the Han",
        el: "Η Πτώση της Χαν"
      },
      events: [
        {
          title: {
            en: "The Yellow Turbans and the end of the Han",
            el: "Τα Κίτρινα Τουρμπάνια και το τέλος της Χαν"
          },
          description: {
            en: "A vast peasant uprising shatters the dynasty's authority, and by 220 the last Han emperor abdicates as warlords carve up China.",
            el: "Μια τεράστια αγροτική εξέγερση συντρίβει το κύρος της δυναστείας, και ως το 220 ο τελευταίος αυτοκράτορας της Χαν παραιτείται καθώς πολέμαρχοι διαμελίζουν την Κίνα."
          },
          extendedDescription: {
            en: "The Daoist-inspired Yellow Turban rebellion of 184 was crushed only by regional generals who then turned on the throne. Real power passed to warlords such as Cao Cao, and in 220 the powerless Emperor Xian yielded the throne. Four hundred years of Han rule ended, opening the divided age of the Three Kingdoms.",
            el: "Η εμπνευσμένη από τον Ταοϊσμό εξέγερση των Κίτρινων Τουρμπανιών του 184 συντρίβηκε μόνο από τοπικούς στρατηγούς που έπειτα στράφηκαν στον θρόνο. Η πραγματική εξουσία πέρασε σε πολέμαρχους όπως ο Τσάο Τσάο, και το 220 ο ανίσχυρος Αυτοκράτορας Σιάν παρέδωσε τον θρόνο. Τετρακόσια χρόνια κυριαρχίας της Χαν τελείωσαν."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
