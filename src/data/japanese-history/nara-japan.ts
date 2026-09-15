/** Nara Period — Περίοδος Νάρα · Japanese History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const NARA_JAPAN = {
  id: "nara-japan" as const,
  label: {
    en: "Nara Period",
    el: "Περίοδος Νάρα"
  },
  supertitle: {
    en: "奈良 · The First Capital",
    el: "Η Πρώτη Πρωτεύουσα"
  },
  title: {
    en: "The Nara Period",
    el: "Η Περίοδος Νάρα"
  },
  subtitle: {
    en: "From the founding of Japan's first great capital on the Chinese model, through the writing of the Kojiki and Nihon Shoki that fixed the myths of the imperial house, to the casting of the colossal Great Buddha of Tōdai-ji and the poetry of the Man'yōshū. Slide across a brilliant, turbulent century in which a Buddhist, bureaucratic Japan flowered — and the power of monks and nobles nearly overturned the throne.",
    el: "Από την ίδρυση της πρώτης μεγάλης πρωτεύουσας της Ιαπωνίας κατά το κινεζικό πρότυπο, μέσα από τη συγγραφή του Κοτζίκι και του Νιχόν Σόκι που αποτύπωσαν τους μύθους του αυτοκρατορικού οίκου, ως τη χύτευση του κολοσσιαίου Μεγάλου Βούδα του Τοντάιτζι και την ποίηση του Μανιόσου. Μετακινηθείτε σε έναν λαμπρό, ταραγμένο αιώνα όπου άνθισε μια βουδιστική, γραφειοκρατική Ιαπωνία — και η δύναμη μοναχών και ευγενών παραλίγο να ανατρέψει τον θρόνο."
  },
  menuDescription: {
    en: "Japan's first capital, its founding chronicles and the Great Buddha of Tōdai-ji.",
    el: "Η πρώτη πρωτεύουσα της Ιαπωνίας, τα ιδρυτικά της χρονικά και ο Μεγάλος Βούδας του Τοντάιτζι."
  },
  footerLabel: {
    en: "Nara Period · 710–794 AD",
    el: "Περίοδος Νάρα · 710–794 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Nara Period",
    el: "Η Περίοδος Νάρα"
  },
  theme: THEMES.gold,
  timeline: [
    {
      year: 710,
      era: {
        en: "The New Capital",
        el: "Η Νέα Πρωτεύουσα"
      },
      events: [
        {
          title: {
            en: "The founding of Heijō-kyō",
            el: "Η ίδρυση της Χεϊτζό-κιό"
          },
          description: {
            en: "The court builds a permanent capital at Heijō-kyō, modern Nara, laid out on a grand grid modelled on Tang Chang'an.",
            el: "Η αυλή χτίζει μόνιμη πρωτεύουσα στη Χεϊτζό-κιό, τη σημερινή Νάρα, σχεδιασμένη σε μεγαλειώδη κάνναβο κατά το πρότυπο του Τσανγκάν των Τανγκ."
          },
          extendedDescription: {
            en: "Earlier rulers had moved the court on each accession; now Japan had a fixed city of broad avenues, palaces and monasteries. For eight decades Nara was the heart of a Buddhist civilization, drawing scholars, artists and monks from across Asia and marking Japan's arrival as a cultured imperial state.",
            el: "Παλαιότεροι ηγεμόνες μετακινούσαν την αυλή με κάθε ενθρόνιση· τώρα η Ιαπωνία είχε μια σταθερή πόλη με φαρδιές λεωφόρους, ανάκτορα και μοναστήρια. Για οκτώ δεκαετίες η Νάρα ήταν η καρδιά ενός βουδιστικού πολιτισμού, προσελκύοντας λόγιους, καλλιτέχνες και μοναχούς από όλη την Ασία και σηματοδοτώντας την ανάδειξη της Ιαπωνίας σε καλλιεργημένο αυτοκρατορικό κράτος."
          },
          category: "political"
        }
      ]
    },
    {
      year: 712,
      era: {
        en: "The Founding Chronicles",
        el: "Τα Ιδρυτικά Χρονικά"
      },
      events: [
        {
          title: {
            en: "The Kojiki and Nihon Shoki",
            el: "Το Κοτζίκι και το Νιχόν Σόκι"
          },
          description: {
            en: "Japan's oldest books, the Kojiki and the Nihon Shoki, set down the myths, gods and imperial genealogies of the realm.",
            el: "Τα αρχαιότερα βιβλία της Ιαπωνίας, το Κοτζίκι και το Νιχόν Σόκι, καταγράφουν τους μύθους, τους θεούς και τις αυτοκρατορικές γενεαλογίες του βασιλείου."
          },
          extendedDescription: {
            en: "Compiled in 712 and 720, these chronicles traced the imperial line from the sun-goddess Amaterasu down to the reigning house, weaving Shintō myth and Chinese-style history together. They gave the throne a divine charter and remain the founding texts of Japanese identity and the Shintō faith.",
            el: "Συνταγμένα το 712 και το 720, τα χρονικά αυτά ανήγαγαν την αυτοκρατορική γενιά από τη θεά του ήλιου Αματεράσου ως τον βασιλεύοντα οίκο, πλέκοντας μαζί τον μύθο του Σιντό και την κινεζικού τύπου ιστορία. Έδωσαν στον θρόνο θεϊκή νομιμοποίηση και παραμένουν τα θεμελιώδη κείμενα της ιαπωνικής ταυτότητας και της πίστης του Σιντό."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 741,
      era: {
        en: "Emperor Shōmu",
        el: "Ο Αυτοκράτορας Σόμου"
      },
      events: [
        {
          title: {
            en: "A temple in every province",
            el: "Ένας ναός σε κάθε επαρχία"
          },
          description: {
            en: "The devout Emperor Shōmu orders a network of state Buddhist temples, the kokubunji, across the land.",
            el: "Ο ευσεβής Αυτοκράτορας Σόμου διατάζει ένα δίκτυο κρατικών βουδιστικών ναών, των κοκουμπούντζι, σε όλη τη χώρα."
          },
          extendedDescription: {
            en: "Amid plague and rebellion, Shōmu turned to Buddhism to protect the realm, decreeing an official monastery and convent in each province. The faith became an arm of the state, its clergy powerful and its great temples richly endowed — a policy that culminated in the Great Buddha of Nara.",
            el: "Μέσα σε πανώλη και εξεγέρσεις, ο Σόμου στράφηκε στον Βουδισμό για να προστατεύσει το βασίλειο, ορίζοντας ένα επίσημο μοναστήρι και μια μονή σε κάθε επαρχία. Η πίστη έγινε βραχίονας του κράτους, ο κλήρος της ισχυρός και οι μεγάλοι ναοί της πλούσια προικισμένοι — πολιτική που κορυφώθηκε στον Μεγάλο Βούδα της Νάρα."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 752,
      era: {
        en: "The Great Buddha",
        el: "Ο Μεγάλος Βούδας"
      },
      events: [
        {
          title: {
            en: "The Great Buddha of Tōdai-ji",
            el: "Ο Μεγάλος Βούδας του Τοντάιτζι"
          },
          description: {
            en: "The colossal bronze Buddha of Tōdai-ji is consecrated in a dazzling ceremony drawing monks from across Asia.",
            el: "Ο κολοσσιαίος χάλκινος Βούδας του Τοντάιτζι εγκαινιάζεται σε μια εκθαμβωτική τελετή που συγκεντρώνει μοναχούς από όλη την Ασία."
          },
          extendedDescription: {
            en: "Rising some sixteen metres and cast from hundreds of tonnes of bronze, the Daibutsu was the greatest artistic feat of the age, nearly bankrupting the treasury. At its \"eye-opening\" ceremony an Indian monk painted in the pupils, and gifts sent from as far as Persia survive still in the Shōsōin treasure house.",
            el: "Υψώνοντας περίπου δεκαέξι μέτρα και χυτευμένος από εκατοντάδες τόνους χαλκού, ο Νταϊμπούτσου ήταν το μεγαλύτερο καλλιτεχνικό επίτευγμα της εποχής, σχεδόν χρεοκοπώντας το ταμείο. Στην τελετή του «ανοίγματος των ματιών» ένας Ινδός μοναχός ζωγράφισε τις κόρες, και δώρα σταλμένα ως και από την Περσία σώζονται ακόμη στον θησαυροφυλάκιο Σοσόιν."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 759,
      era: {
        en: "The Poets",
        el: "Οι Ποιητές"
      },
      events: [
        {
          title: {
            en: "The Man'yōshū anthology",
            el: "Η ανθολογία Μανιόσου"
          },
          description: {
            en: "The Man'yōshū gathers over four thousand poems, from emperors to frontier guards, in the earliest treasury of Japanese verse.",
            el: "Το Μανιόσου συγκεντρώνει πάνω από τέσσερις χιλιάδες ποιήματα, από αυτοκράτορες ως συνοριοφύλακες, στο αρχαιότερο θησαυροφυλάκιο ιαπωνικής ποίησης."
          },
          extendedDescription: {
            en: "Its name means \"Collection of Ten Thousand Leaves.\" Written in Chinese characters used for their sound to render Japanese, the anthology preserves voices of every rank in a fresh, direct tone. It stands as a monument to a native literary culture already confident in its own language.",
            el: "Το όνομά του σημαίνει «Συλλογή Δέκα Χιλιάδων Φύλλων». Γραμμένη με κινεζικά ιδεογράμματα που χρησιμοποιούνται για την ηχητική τους αξία ώστε να αποδοθεί η ιαπωνική γλώσσα, η ανθολογία διασώζει φωνές κάθε τάξης σε τόνο φρέσκο και άμεσο. Στέκει ως μνημείο μιας ντόπιας λογοτεχνικής κουλτούρας ήδη σίγουρης για τη δική της γλώσσα."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 770,
      era: {
        en: "Monks and Power",
        el: "Μοναχοί και Εξουσία"
      },
      events: [
        {
          title: {
            en: "The Dōkyō affair",
            el: "Η υπόθεση Ντόκιο"
          },
          description: {
            en: "The monk Dōkyō rises to dominate the court and reaches for the throne itself before being cast out on the empress's death.",
            el: "Ο μοναχός Ντόκιο ανέρχεται ώστε να κυριαρχήσει στην αυλή και απλώνει το χέρι στον ίδιο τον θρόνο, προτού εκδιωχθεί με τον θάνατο της αυτοκράτειρας."
          },
          extendedDescription: {
            en: "Favoured by Empress Kōken, Dōkyō gathered such power that an oracle was said to name him the next sovereign. The threat of a monk-emperor so alarmed the nobles that after Kōken died he was banished — and the episode hardened a resolve to move the capital away from Nara's overmighty monasteries.",
            el: "Ευνοούμενος από την Αυτοκράτειρα Κόκεν, ο Ντόκιο συγκέντρωσε τόση δύναμη ώστε ένας χρησμός φέρεται να τον όρισε επόμενο κυρίαρχο. Η απειλή ενός μοναχού-αυτοκράτορα τρόμαξε τόσο τους ευγενείς που, μόλις πέθανε η Κόκεν, εξορίστηκε — και το επεισόδιο σκλήρυνε την απόφαση να μετακινηθεί η πρωτεύουσα μακριά από τα υπερβολικά ισχυρά μοναστήρια της Νάρα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 784,
      era: {
        en: "Leaving Nara",
        el: "Αναχώρηση από τη Νάρα"
      },
      events: [
        {
          title: {
            en: "The court moves on",
            el: "Η αυλή μετακινείται"
          },
          description: {
            en: "Emperor Kanmu abandons Nara, seeking a capital free of its entrenched temples and clans.",
            el: "Ο Αυτοκράτορας Κάνμου εγκαταλείπει τη Νάρα, αναζητώντας πρωτεύουσα απαλλαγμένη από τους παγιωμένους ναούς και τα γένη της."
          },
          extendedDescription: {
            en: "To escape the political weight of the Nara monasteries, Kanmu first built a capital at Nagaoka, then abandoned it after ill omens and a murder. His search would end a decade later in a new city to the north, Heian-kyō, opening one of the most brilliant ages of Japanese history.",
            el: "Για να ξεφύγει από το πολιτικό βάρος των μοναστηριών της Νάρα, ο Κάνμου έχτισε πρώτα πρωτεύουσα στη Ναγκαόκα, την οποία εγκατέλειψε ύστερα από κακούς οιωνούς κι έναν φόνο. Η αναζήτησή του θα τελείωνε μια δεκαετία αργότερα σε μια νέα πόλη στον βορρά, τη Χεϊάν-κιό, ανοίγοντας μία από τις λαμπρότερες εποχές της ιαπωνικής ιστορίας."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
