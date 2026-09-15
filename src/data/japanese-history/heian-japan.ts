/** Heian Period — Περίοδος Χεϊάν · Japanese History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const HEIAN_JAPAN = {
  id: "heian-japan" as const,
  label: {
    en: "Heian Period",
    el: "Περίοδος Χεϊάν"
  },
  supertitle: {
    en: "平安 · The Court of Peace",
    el: "Η Αυλή της Ειρήνης"
  },
  title: {
    en: "The Heian Period",
    el: "Η Περίοδος Χεϊάν"
  },
  subtitle: {
    en: "From the founding of Kyoto and the rise of the Fujiwara regents, through a refined court world that produced The Tale of Genji and the first great flowering of a purely Japanese culture, to the growth of the provincial warriors and the Genpei War that ended the age of the courtiers. Slide across four centuries in which beauty ruled the capital while, in the provinces, the sword was quietly being sharpened.",
    el: "Από την ίδρυση του Κιότο και την άνοδο των αντιβασιλέων Φουτζιβάρα, μέσα από έναν εκλεπτυσμένο κόσμο της αυλής που γέννησε την Ιστορία του Γκέντζι και την πρώτη μεγάλη άνθηση ενός καθαρά ιαπωνικού πολιτισμού, ως την ανάπτυξη των επαρχιακών πολεμιστών και τον Πόλεμο Γκενπέι που έκλεισε την εποχή των αυλικών. Μετακινηθείτε σε τέσσερις αιώνες όπου η ομορφιά κυβερνούσε την πρωτεύουσα ενώ, στις επαρχίες, το σπαθί ακονιζόταν σιωπηλά."
  },
  menuDescription: {
    en: "Kyoto, the Fujiwara regents, The Tale of Genji and the rise of the samurai.",
    el: "Το Κιότο, οι αντιβασιλείς Φουτζιβάρα, η Ιστορία του Γκέντζι και η άνοδος των σαμουράι."
  },
  footerLabel: {
    en: "Heian Period · 794–1185 AD",
    el: "Περίοδος Χεϊάν · 794–1185 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Heian Period",
    el: "Η Περίοδος Χεϊάν"
  },
  theme: THEMES.rose,
  timeline: [
    {
      year: 794,
      era: {
        en: "The New Capital",
        el: "Η Νέα Πρωτεύουσα"
      },
      events: [
        {
          title: {
            en: "The founding of Heian-kyō",
            el: "Η ίδρυση της Χεϊάν-κιό"
          },
          description: {
            en: "Emperor Kanmu founds Heian-kyō, the \"capital of peace and tranquility\" — the city of Kyoto, Japan's home for a thousand years.",
            el: "Ο Αυτοκράτορας Κάνμου ιδρύει τη Χεϊάν-κιό, την «πρωτεύουσα της ειρήνης και της γαλήνης» — την πόλη του Κιότο, έδρα της Ιαπωνίας για χίλια χρόνια."
          },
          extendedDescription: {
            en: "Laid out once more on the Chinese grid but never dominated by its monasteries, the new capital gave its name to the whole era. Kyoto would remain the imperial seat until 1868, and the culture forged within its palaces set the standard of refinement for all later Japanese history.",
            el: "Σχεδιασμένη για άλλη μια φορά στον κινεζικό κάνναβο αλλά ποτέ κυριαρχούμενη από τα μοναστήρια της, η νέα πρωτεύουσα έδωσε το όνομά της σε όλη την εποχή. Το Κιότο θα παρέμενε αυτοκρατορική έδρα ως το 1868, και ο πολιτισμός που σφυρηλατήθηκε στα ανάκτορά του καθόρισε το μέτρο της κομψότητας για όλη τη μετέπειτα ιαπωνική ιστορία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 805,
      era: {
        en: "New Buddhism",
        el: "Νέος Βουδισμός"
      },
      events: [
        {
          title: {
            en: "Saichō and Kūkai",
            el: "Ο Σαϊτσό και ο Κούκαϊ"
          },
          description: {
            en: "The monks Saichō and Kūkai return from China and found the Tendai and Shingon schools of esoteric Buddhism.",
            el: "Οι μοναχοί Σαϊτσό και Κούκαϊ επιστρέφουν από την Κίνα και ιδρύουν τις σχολές Τεντάι και Σινγκόν του εσωτερικού Βουδισμού."
          },
          extendedDescription: {
            en: "Saichō built his monastery on Mount Hiei above Kyoto, Kūkai his on remote Mount Kōya. Their mountain temples, with mystic rituals, mandalas and mantras, drew Buddhism out of the old Nara capital and deep into aristocratic life. Kūkai was also revered as a calligrapher and, by legend, the shaper of the Japanese syllabary.",
            el: "Ο Σαϊτσό έχτισε το μοναστήρι του στο όρος Χιέι πάνω από το Κιότο, ο Κούκαϊ το δικό του στο απομακρυσμένο όρος Κόγια. Οι ορεινοί ναοί τους, με μυστικιστικές τελετές, μάνταλα και μάντρα, τράβηξαν τον Βουδισμό έξω από την παλιά πρωτεύουσα της Νάρα και βαθιά μέσα στην αριστοκρατική ζωή. Ο Κούκαϊ τιμήθηκε επίσης ως καλλιγράφος και, κατά τον θρύλο, ως ο διαμορφωτής του ιαπωνικού συλλαβαρίου."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 866,
      era: {
        en: "The Fujiwara Regents",
        el: "Οι Αντιβασιλείς Φουτζιβάρα"
      },
      events: [
        {
          title: {
            en: "The Fujiwara take the regency",
            el: "Οι Φουτζιβάρα αναλαμβάνουν την αντιβασιλεία"
          },
          description: {
            en: "The Fujiwara clan seizes the office of regent, ruling in the emperor's name by marrying their daughters to the throne.",
            el: "Το γένος των Φουτζιβάρα αρπάζει το αξίωμα του αντιβασιλέα, κυβερνώντας στο όνομα του αυτοκράτορα παντρεύοντας τις κόρες του με τον θρόνο."
          },
          extendedDescription: {
            en: "By making themselves grandfathers and fathers-in-law of emperors, the Fujiwara controlled the court for two centuries. Sovereigns reigned as children and abdicated young, while a Fujiwara regent held real power. Under their patronage the capital became a hothouse of art, poetry and exquisite manners.",
            el: "Κάνοντας τους εαυτούς τους παππούδες και πεθερούς των αυτοκρατόρων, οι Φουτζιβάρα έλεγχαν την αυλή για δύο αιώνες. Οι ηγεμόνες βασίλευαν ως παιδιά και παραιτούνταν νέοι, ενώ ένας αντιβασιλέας Φουτζιβάρα κρατούσε την πραγματική εξουσία. Υπό την προστασία τους η πρωτεύουσα έγινε θερμοκήπιο τέχνης, ποίησης και εκλεπτυσμένων τρόπων."
          },
          category: "political"
        }
      ]
    },
    {
      year: 894,
      era: {
        en: "A National Culture",
        el: "Ένας Εθνικός Πολιτισμός"
      },
      events: [
        {
          title: {
            en: "The last embassy to China",
            el: "Η τελευταία πρεσβεία στην Κίνα"
          },
          description: {
            en: "Japan halts its official missions to Tang China, turning inward to develop a culture of its own.",
            el: "Η Ιαπωνία σταματά τις επίσημες αποστολές της στην Κίνα των Τανγκ, στρεφόμενη προς τα μέσα για να αναπτύξει έναν δικό της πολιτισμό."
          },
          extendedDescription: {
            en: "The scholar Sugawara no Michizane advised ending the costly embassies as the Tang declined. Cut loose from constant borrowing, the court refined a distinctly Japanese aesthetic — the kana syllabary, native poetry and prose, and a cult of taste and sensitivity, the \"sensibility to things,\" that shaped everything from love letters to landscape gardens.",
            el: "Ο λόγιος Σουγκαβάρα νο Μιτσιζάνε συμβούλευσε τον τερματισμό των δαπανηρών πρεσβειών καθώς οι Τανγκ παρήκμαζαν. Ελεύθερη από τον διαρκή δανεισμό, η αυλή εκλέπτυνε μια χαρακτηριστικά ιαπωνική αισθητική — το συλλαβάριο κάνα, τη ντόπια ποίηση και πεζογραφία, και μια λατρεία του γούστου και της ευαισθησίας που διαμόρφωσε τα πάντα, από τα ερωτικά γράμματα ως τους κήπους."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1008,
      era: {
        en: "The Golden Court",
        el: "Η Χρυσή Αυλή"
      },
      events: [
        {
          title: {
            en: "Murasaki Shikibu's Tale of Genji",
            el: "Η Ιστορία του Γκέντζι της Μουρασάκι Σικίμπου"
          },
          description: {
            en: "The lady-in-waiting Murasaki Shikibu writes The Tale of Genji, often called the world's first novel.",
            el: "Η κυρία επί των τιμών Μουρασάκι Σικίμπου γράφει την Ιστορία του Γκέντζι, που συχνά αποκαλείται το πρώτο μυθιστόρημα του κόσμου."
          },
          extendedDescription: {
            en: "Written in flowing kana at the court of the Fujiwara, Genji follows the loves and sorrows of a radiant prince with a psychological depth unmatched for centuries. Alongside Sei Shōnagon's witty Pillow Book, it crowned a remarkable moment when women writers gave Heian Japan its most enduring literature.",
            el: "Γραμμένο σε ρέουσα κάνα στην αυλή των Φουτζιβάρα, το Γκέντζι παρακολουθεί τους έρωτες και τις θλίψεις ενός λαμπερού πρίγκιπα με ψυχολογικό βάθος ασυναγώνιστο για αιώνες. Μαζί με το πνευματώδες Βιβλίο του Προσκεφαλιού της Σέι Σόναγκον, στεφάνωσε μια αξιοσημείωτη στιγμή όπου γυναίκες συγγραφείς έδωσαν στη Χεϊάν Ιαπωνία την πιο διαχρονική της λογοτεχνία."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1052,
      era: {
        en: "The Age of Mappō",
        el: "Η Εποχή του Μαπό"
      },
      events: [
        {
          title: {
            en: "Pure Land faith and the Byōdō-in",
            el: "Η πίστη της Καθαρής Γης και το Μπιόντο-ιν"
          },
          description: {
            en: "As many fear the dawn of mappō, the age of decline, the Byōdō-in temple rises as an image of the Buddha's paradise.",
            el: "Καθώς πολλοί φοβούνται την αυγή του μαπό, της εποχής της παρακμής, ανεγείρεται ο ναός Μπιόντο-ιν ως εικόνα του παραδείσου του Βούδα."
          },
          extendedDescription: {
            en: "The Buddhist reckoning placed the start of a degenerate final age in 1052, and the anxious turned to Amida Buddha, who promised rebirth in a Pure Land to any who called his name. The Phoenix Hall of the Byōdō-in, mirrored in its pond near Kyoto, made that paradise visible and still adorns the ten-yen coin.",
            el: "Ο βουδιστικός υπολογισμός τοποθετούσε την έναρξη μιας εκφυλισμένης τελικής εποχής στο 1052, και οι ανήσυχοι στράφηκαν στον Βούδα Αμίντα, που υποσχόταν αναγέννηση σε μια Καθαρή Γη σε όποιον πρόφερε το όνομά του. Η Αίθουσα του Φοίνικα του Μπιόντο-ιν, καθρεφτισμένη στη λιμνούλα της κοντά στο Κιότο, έκανε ορατό αυτόν τον παράδεισο και κοσμεί ακόμη το νόμισμα των δέκα γιεν."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1156,
      era: {
        en: "The Warriors Enter",
        el: "Οι Πολεμιστές Εισέρχονται"
      },
      events: [
        {
          title: {
            en: "The samurai enter politics",
            el: "Οι σαμουράι εισέρχονται στην πολιτική"
          },
          description: {
            en: "The Hōgen and Heiji disturbances draw the provincial warrior clans into the heart of court struggles.",
            el: "Οι ταραχές Χόγκεν και Χεϊτζί σύρουν τα επαρχιακά πολεμικά γένη στην καρδιά των αγώνων της αυλής."
          },
          extendedDescription: {
            en: "For generations the Taira and Minamoto warriors had policed the provinces and put down revolts for the aristocracy. Now, called in to settle disputes within the court itself, they discovered where power truly lay. Taira no Kiyomori emerged supreme, the first warrior to dominate the imperial capital.",
            el: "Επί γενιές οι πολεμιστές Τάιρα και Μιναμότο αστυνόμευαν τις επαρχίες και κατέστελλαν εξεγέρσεις για λογαριασμό της αριστοκρατίας. Τώρα, καλεσμένοι να λύσουν διαφορές μέσα στην ίδια την αυλή, ανακάλυψαν πού βρισκόταν πραγματικά η εξουσία. Ο Τάιρα νο Κιγιομόρι αναδείχθηκε κυρίαρχος, ο πρώτος πολεμιστής που δέσποσε στην αυτοκρατορική πρωτεύουσα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1185,
      era: {
        en: "The Genpei War",
        el: "Ο Πόλεμος Γκενπέι"
      },
      events: [
        {
          title: {
            en: "The Genpei War and Dan-no-ura",
            el: "Ο Πόλεμος Γκενπέι και το Νταν-νο-ούρα"
          },
          description: {
            en: "The Minamoto crush the Taira at the sea-battle of Dan-no-ura, ending the rule of the courtiers.",
            el: "Οι Μιναμότο συντρίβουν τους Τάιρα στη ναυμαχία του Νταν-νο-ούρα, τερματίζοντας την κυριαρχία των αυλικών."
          },
          extendedDescription: {
            en: "The five-year Genpei War pitted the two great warrior houses against each other across Japan. At Dan-no-ura in 1185 the Minamoto fleet destroyed the Taira, and the child-emperor Antoku drowned with his grandmother beneath the waves. The victory of Minamoto no Yoritomo opened the age of the samurai and the shogun.",
            el: "Ο πενταετής Πόλεμος Γκενπέι έστρεψε τους δύο μεγάλους πολεμικούς οίκους τον έναν εναντίον του άλλου σε όλη την Ιαπωνία. Στο Νταν-νο-ούρα το 1185 ο στόλος των Μιναμότο κατέστρεψε τους Τάιρα, και ο παιδι-αυτοκράτορας Αντόκου πνίγηκε μαζί με τη γιαγιά του κάτω από τα κύματα. Η νίκη του Μιναμότο νο Γιοριτόμο άνοιξε την εποχή των σαμουράι και του σογκούν."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
