/** Yuan Dynasty — Δυναστεία Γιουάν · Chinese History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const YUAN_DYNASTY = {
  id: "yuan-dynasty" as const,
  label: {
    en: "Yuan Dynasty",
    el: "Δυναστεία Γιουάν"
  },
  supertitle: {
    en: "元 · Yuan",
    el: "Γιουάν"
  },
  title: {
    en: "The Mongol Yuan Dynasty",
    el: "Η Μογγολική Δυναστεία Γιουάν"
  },
  subtitle: {
    en: "From Genghis Khan's invasion and Kublai Khan's proclamation of the Yuan through the Pax Mongolica and the travels of Marco Polo, the failed invasions of Japan and a cosmopolitan flowering of drama and porcelain, to the rebellions that swept the Mongols back to the steppe in 1368. Slide across the years to read the major events of China under Mongol rule.",
    el: "Από την εισβολή του Τζένγκις Χαν και την ανακήρυξη της Γιουάν από τον Κουμπλάι Χαν, μέσα από την Pax Mongolica και τα ταξίδια του Μάρκο Πόλο, τις αποτυχημένες εισβολές στην Ιαπωνία και ένα κοσμοπολίτικο άνθος θεάτρου και πορσελάνης, ως τις εξεγέρσεις που έδιωξαν τους Μογγόλους πίσω στη στέπα το 1368. Μετακινηθείτε ανάμεσα στα έτη για να διαβάσετε τα γεγονότα της Κίνας υπό μογγολική κυριαρχία."
  },
  menuDescription: {
    en: "Kublai Khan and Marco Polo: all China under the Mongols.",
    el: "Ο Κουμπλάι Χαν κι ο Μάρκο Πόλο: όλη η Κίνα υπό τους Μογγόλους."
  },
  footerLabel: {
    en: "Yuan Dynasty · 1271-1368 AD",
    el: "Δυναστεία Γιουάν · 1271-1368 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Mongol Yuan Dynasty",
    el: "Η Μογγολική Δυναστεία Γιουάν"
  },
  theme: THEMES.sapphire,
  timeline: [
    {
      year: 1211,
      era: {
        en: "The Mongol Invasions",
        el: "Οι Μογγολικές Εισβολές"
      },
      events: [
        {
          title: {
            en: "Genghis Khan invades China",
            el: "Ο Τζένγκις Χαν εισβάλλει στην Κίνα"
          },
          description: {
            en: "The united Mongols under Genghis Khan storm across the Great Wall into the Jin realm of north China.",
            el: "Οι ενωμένοι Μογγόλοι υπό τον Τζένγκις Χαν ορμούν πέρα από το Σινικό Τείχος στο βασίλειο των Τζιν στη βόρεια Κίνα."
          },
          extendedDescription: {
            en: "Having united the steppe tribes in 1206, Genghis Khan turned his cavalry on the settled empires to the south. His campaigns against the Jurchen Jin brought terror and devastation but also engineers and administrators into Mongol service, beginning the long conquest that his heirs would complete.",
            el: "Έχοντας ενώσει τις φυλές της στέπας το 1206, ο Τζένγκις Χαν έστρεψε το ιππικό του στις εγκατεστημένες αυτοκρατορίες του νότου. Οι εκστρατείες του εναντίον των Τζουρτσέν Τζιν έφεραν τρόμο και ερήμωση αλλά και μηχανικούς και διοικητές στην υπηρεσία των Μογγόλων, ξεκινώντας τη μακρά κατάκτηση που θα ολοκλήρωναν οι διάδοχοί του."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1271,
      era: {
        en: "Kublai Khan",
        el: "Ο Κουμπλάι Χαν"
      },
      events: [
        {
          title: {
            en: "Kublai Khan proclaims the Yuan",
            el: "Ο Κουμπλάι Χαν ανακηρύσσει τη Γιουάν"
          },
          description: {
            en: "Genghis's grandson Kublai declares the Yuan dynasty and rules China as a Chinese emperor from his capital at Dadu.",
            el: "Ο εγγονός του Τζένγκις, ο Κουμπλάι, ανακηρύσσει τη δυναστεία Γιουάν και κυβερνά την Κίνα ως Κινέζος αυτοκράτορας από την πρωτεύουσά του Νταντού."
          },
          extendedDescription: {
            en: "Kublai Khan chose to rule China not as a raider but as its emperor, adopting a Chinese dynastic name and building a magnificent capital at Dadu, modern Beijing. He unified the whole country under Mongol rule by 1279, presiding over the largest contiguous land empire history had known, now with China as its wealthy heart.",
            el: "Ο Κουμπλάι Χαν επέλεξε να κυβερνήσει την Κίνα όχι ως επιδρομέας αλλά ως αυτοκράτοράς της, υιοθετώντας κινεζικό δυναστικό όνομα και χτίζοντας μια μεγαλοπρεπή πρωτεύουσα στο Νταντού, το σύγχρονο Πεκίνο. Ένωσε ολόκληρη τη χώρα υπό μογγολική κυριαρχία ως το 1279, προεδρεύοντας της μεγαλύτερης ενιαίας χερσαίας αυτοκρατορίας που είχε γνωρίσει η ιστορία."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumKhubilaiPortrait.jpg?width=1024",
            alt: {
              en: "Kublai Khan, founder of the Yuan dynasty",
              el: "Ο Κουμπλάι Χαν, ιδρυτής της δυναστείας Γιουάν"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1275,
      era: {
        en: "Kublai Khan",
        el: "Ο Κουμπλάι Χαν"
      },
      events: [
        {
          title: {
            en: "Marco Polo at the Great Khan's court",
            el: "Ο Μάρκο Πόλο στην αυλή του Μεγάλου Χάνου"
          },
          description: {
            en: "The Venetian Marco Polo reaches Kublai's court, and the Mongol peace opens Eurasia to travellers and trade.",
            el: "Ο Βενετός Μάρκο Πόλο φτάνει στην αυλή του Κουμπλάι, και η μογγολική ειρήνη ανοίγει την Ευρασία σε ταξιδιώτες και εμπόριο."
          },
          extendedDescription: {
            en: "Under the Pax Mongolica a single power stretched from Korea to the Danube, and merchants, monks and envoys crossed it in safety. Marco Polo's account of the wealth of Cathay and the splendour of Kublai's court, whether wholly true or not, fired the European imagination and hinted at the riches that would one day draw Columbus westward.",
            el: "Υπό την Pax Mongolica μια ενιαία δύναμη εκτεινόταν από την Κορέα ως τον Δούναβη, και έμποροι, μοναχοί και απεσταλμένοι τη διέσχιζαν με ασφάλεια. Η αφήγηση του Μάρκο Πόλο για τον πλούτο του Καθάι και τη λαμπρότητα της αυλής του Κουμπλάι πυροδότησε την ευρωπαϊκή φαντασία και υπαινίχθηκε τα πλούτη που θα οδηγούσαν κάποτε τον Κολόμβο προς τη δύση."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Frontispice_%C3%A9dition_de_Nuremberg_1477_(cropped).png?width=1024",
            alt: {
              en: "Marco Polo, whose travels described the wealth of Yuan China",
              el: "Ο Μάρκο Πόλο, του οποίου τα ταξίδια περιέγραψαν τον πλούτο της Κίνας των Γιουάν"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1281,
      era: {
        en: "Kublai Khan",
        el: "Ο Κουμπλάι Χαν"
      },
      events: [
        {
          title: {
            en: "The kamikaze and the failed invasion of Japan",
            el: "Ο καμικάζι και η αποτυχημένη εισβολή στην Ιαπωνία"
          },
          description: {
            en: "A great Yuan armada sent against Japan is destroyed by a typhoon the Japanese hail as the 'divine wind.'",
            el: "Μια μεγάλη αρμάδα των Γιουάν σταλμένη κατά της Ιαπωνίας καταστρέφεται από τυφώνα που οι Ιάπωνες υμνούν ως τον «θεϊκό άνεμο»."
          },
          extendedDescription: {
            en: "Kublai twice tried to conquer Japan by sea. In 1281 his enormous fleet, one of the largest in pre-modern history, was shattered by a typhoon off Kyushu. The Japanese called the storm kamikaze, the divine wind, and the disaster showed the limits of Mongol power at the ocean's edge.",
            el: "Ο Κουμπλάι προσπάθησε δύο φορές να κατακτήσει την Ιαπωνία διά θαλάσσης. Το 1281 ο τεράστιος στόλος του, ένας από τους μεγαλύτερους της προνεωτερικής ιστορίας, συντρίφτηκε από τυφώνα κοντά στο Κιούσου. Οι Ιάπωνες ονόμασαν τη θύελλα καμικάζι, τον θεϊκό άνεμο, και η καταστροφή έδειξε τα όρια της μογγολικής ισχύος στην άκρη του ωκεανού."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1300,
      era: {
        en: "The Yuan Order",
        el: "Η Τάξη των Γιουάν"
      },
      events: [
        {
          title: {
            en: "A cosmopolitan empire and blue-and-white porcelain",
            el: "Μια κοσμοπολίτικη αυτοκρατορία και η ασπρογάλανη πορσελάνη"
          },
          description: {
            en: "Yuan China blends cultures across Eurasia, and its potters perfect the blue-and-white porcelain prized around the world.",
            el: "Η Κίνα των Γιουάν αναμειγνύει πολιτισμούς σε όλη την Ευρασία, και οι αγγειοπλάστες της τελειοποιούν την ασπρογάλανη πορσελάνη που εκτιμήθηκε σε όλον τον κόσμο."
          },
          extendedDescription: {
            en: "The Mongol elite ranked its subjects by origin and kept the Chinese literati at arm's length, so many turned from office to drama and painting; Yuan theatre became a classic of Chinese literature. Meanwhile potters at Jingdezhen, using cobalt traded from Persia, created the blue-and-white porcelain that would become one of China's most coveted exports.",
            el: "Η μογγολική ελίτ κατέτασσε τους υπηκόους της κατά καταγωγή και κρατούσε τους Κινέζους λόγιους σε απόσταση, έτσι πολλοί στράφηκαν από τα αξιώματα στο θέατρο και τη ζωγραφική· το θέατρο των Γιουάν έγινε κλασικό της κινεζικής λογοτεχνίας. Παράλληλα, οι αγγειοπλάστες του Τζινγκντετζέν, με κοβάλτιο από την Περσία, δημιούργησαν την ασπρογάλανη πορσελάνη."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/%E6%B8%85%E5%BA%B7%E7%86%99_%E6%99%AF%E5%BE%B7%E9%8E%AE%E7%AA%AF%E9%9D%92%E8%8A%B1%E4%BA%94%E5%80%AB%E5%9C%96%E7%85%A8%E7%93%B7%E7%93%B6-Vase_with_auspicious_animals_MET_DP-14359-001.jpg?width=1024",
            alt: {
              en: "Chinese blue-and-white porcelain, perfected under the Yuan",
              el: "Κινεζική ασπρογάλανη πορσελάνη, που τελειοποιήθηκε επί των Γιουάν"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1368,
      era: {
        en: "The Fall of the Yuan",
        el: "Η Πτώση των Γιουάν"
      },
      events: [
        {
          title: {
            en: "Rebellion sweeps the Mongols away",
            el: "Η εξέγερση σαρώνει τους Μογγόλους"
          },
          description: {
            en: "Famine, floods and the Red Turban revolts overwhelm the Yuan; the last emperor flees north as the Ming is proclaimed.",
            el: "Λιμός, πλημμύρες και οι εξεγέρσεις των Κόκκινων Τουρμπανιών καταβάλλουν τους Γιουάν· ο τελευταίος αυτοκράτορας φεύγει βόρεια καθώς ανακηρύσσεται η Μινγκ."
          },
          extendedDescription: {
            en: "A century of Mongol rule ended in disaster: the Yellow River flooded, plague and famine spread, and the Red Turban rebellions engulfed the country. The peasant leader Zhu Yuanzhang emerged victorious, took Dadu in 1368, and founded the Ming. The Mongol court withdrew to the steppe as the Northern Yuan, and China was again ruled by a native dynasty.",
            el: "Ένας αιώνας μογγολικής κυριαρχίας τελείωσε σε καταστροφή: ο Κίτρινος Ποταμός πλημμύρισε, η πανούκλα και ο λιμός εξαπλώθηκαν, και οι εξεγέρσεις των Κόκκινων Τουρμπανιών κατέκλυσαν τη χώρα. Ο αγρότης ηγέτης Τζου Γιουαντζάνγκ αναδείχθηκε νικητής, κατέλαβε το Νταντού το 1368 και ίδρυσε τη Μινγκ. Η μογγολική αυλή αποσύρθηκε στη στέπα."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
