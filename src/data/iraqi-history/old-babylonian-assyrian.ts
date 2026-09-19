/** Old Babylonian & Assyrian Age — Παλαιοβαβυλωνιακή & Ασσυριακή Εποχή · Iraqi History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const OLD_BABYLONIAN_ASSYRIAN = {
  id: "old-babylonian-assyrian" as const,
  label: {
    en: "Old Babylonian & Assyrian Age",
    el: "Παλαιοβαβυλωνιακή & Ασσυριακή Εποχή"
  },
  supertitle: {
    en: "Ancient Mesopotamia",
    el: "Αρχαία Μεσοποταμία"
  },
  title: {
    en: "The Old Babylonian & Assyrian Age",
    el: "Η Παλαιοβαβυλωνιακή & Ασσυριακή Εποχή"
  },
  subtitle: {
    en: "Amorite kings raised new dynasties across Mesopotamia — merchant Assur in the north, brilliant Mari on the Euphrates, and above all Babylon, where Hammurabi built an empire and carved his famous laws in stone. From the caravans of the Assyrian traders to the Hittite chariots that sacked Babylon, follow the age that made Babylon eternal.",
    el: "Αμορραίοι βασιλείς ύψωσαν νέες δυναστείες σε όλη τη Μεσοποταμία — την εμπορική Ασσούρ στον βορρά, τη λαμπρή Μάρι στον Ευφράτη και πάνω απ' όλα τη Βαβυλώνα, όπου ο Χαμουραμπί έχτισε αυτοκρατορία και χάραξε τους περίφημους νόμους του στην πέτρα. Από τα καραβάνια των Ασσυρίων εμπόρων ως τα χεττιτικά άρματα που λεηλάτησαν τη Βαβυλώνα, ακολουθήστε την εποχή που έκανε τη Βαβυλώνα αιώνια."
  },
  menuDescription: {
    en: "Hammurabi's Babylon, the traders of Assur, and the archives of Mari.",
    el: "Η Βαβυλώνα του Χαμουραμπί, οι έμποροι της Ασσούρ και τα αρχεία της Μάρι."
  },
  footerLabel: {
    en: "Old Babylonian & Assyrian Age · 2000-1595 BC",
    el: "Παλαιοβαβυλωνιακή & Ασσυριακή Εποχή · 2000-1595 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Old Babylonian & Assyrian Age",
    el: "Η Παλαιοβαβυλωνιακή & Ασσυριακή Εποχή"
  },
  theme: THEMES.amber,
  timeline: [
    {
      year: -1920,
      era: {
        en: "Old Assyrian Period",
        el: "Παλαιοασσυριακή Περίοδος"
      },
      events: [
        {
          title: {
            en: "The traders of Assur",
            el: "Οι έμποροι της Ασσούρ"
          },
          description: {
            en: "Merchants from the northern city of Assur run a caravan network deep into Anatolia, leaving thousands of business letters in clay.",
            el: "Έμποροι από τη βόρεια πόλη της Ασσούρ διευθύνουν ένα δίκτυο καραβανιών βαθιά στην Ανατολία, αφήνοντας χιλιάδες εμπορικές επιστολές σε πηλό."
          },
          extendedDescription: {
            en: "At Kanesh in central Anatolia, the Assyrian trading colony (karum) has yielded over twenty thousand tablets — records of tin and textiles carried north in exchange for silver and gold. This first Assyrian commercial empire, run by family firms and their wives back home in Assur, is one of the best-documented economies of the ancient world.",
            el: "Στην Κανές της κεντρικής Ανατολίας, η ασσυριακή εμπορική αποικία (κάρουμ) έχει αποδώσει πάνω από είκοσι χιλιάδες πινακίδες — αρχεία κασσίτερου και υφασμάτων που μεταφέρονταν βόρεια με αντάλλαγμα ασήμι και χρυσό. Αυτή η πρώτη ασσυριακή εμπορική αυτοκρατορία, που τη διηύθυναν οικογενειακές επιχειρήσεις και οι σύζυγοί τους πίσω στην Ασσούρ, είναι μία από τις καλύτερα τεκμηριωμένες οικονομίες του αρχαίου κόσμου."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -1894,
      era: {
        en: "First Dynasty of Babylon",
        el: "Πρώτη Δυναστεία της Βαβυλώνας"
      },
      events: [
        {
          title: {
            en: "The founding of Babylon's dynasty",
            el: "Η ίδρυση της δυναστείας της Βαβυλώνας"
          },
          description: {
            en: "The Amorite chief Sumu-abum makes Babylon, until now a minor town, the seat of an independent kingdom.",
            el: "Ο Αμορραίος αρχηγός Σουμού-αμπούμ κάνει τη Βαβυλώνα, ως τώρα ασήμαντη κωμόπολη, έδρα ενός ανεξάρτητου βασιλείου."
          },
          extendedDescription: {
            en: "Amorite tribal leaders had seized power in city after city as Ur's empire collapsed. At Babylon on the Euphrates, Sumu-abum founded a dynasty that for a century was just one of many small Amorite kingdoms — until its sixth king turned it into the greatest name in Mesopotamian history.",
            el: "Αμορραίοι φύλαρχοι είχαν αρπάξει την εξουσία σε πόλη μετά την πόλη καθώς κατέρρεε η αυτοκρατορία της Ουρ. Στη Βαβυλώνα, πάνω στον Ευφράτη, ο Σουμού-αμπούμ ίδρυσε μια δυναστεία που για έναν αιώνα ήταν απλώς ένα από τα πολλά μικρά αμορραϊκά βασίλεια — ώσπου ο έκτος βασιλιάς της τη μετέτρεψε στο μεγαλύτερο όνομα της μεσοποταμιακής ιστορίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: -1808,
      era: {
        en: "Old Assyrian Period",
        el: "Παλαιοασσυριακή Περίοδος"
      },
      events: [
        {
          title: {
            en: "Shamshi-Adad's northern kingdom",
            el: "Το βόρειο βασίλειο του Σαμσί-Αντάντ"
          },
          description: {
            en: "Shamshi-Adad I conquers Assur and much of upper Mesopotamia, forging the first Assyrian kingdom.",
            el: "Ο Σαμσί-Αντάντ Α΄ κατακτά την Ασσούρ και μεγάλο μέρος της άνω Μεσοποταμίας, σφυρηλατώντας το πρώτο ασσυριακό βασίλειο."
          },
          extendedDescription: {
            en: "An Amorite conqueror, Shamshi-Adad united the north under a single crown and set his sons over Mari and Ekallatum, showering them with advice preserved in the Mari letters. His realm fell apart at his death, but he had shown what an Assyrian state could be — a lesson its kings would remember a thousand years on.",
            el: "Αμορραίος κατακτητής, ο Σαμσί-Αντάντ ένωσε τον βορρά υπό ένα στέμμα και τοποθέτησε τους γιους του πάνω από τη Μάρι και το Εκαλλάτουμ, καταιγίζοντάς τους με συμβουλές που διασώθηκαν στις επιστολές της Μάρι. Το κράτος του διαλύθηκε με τον θάνατό του, όμως είχε δείξει τι μπορούσε να γίνει ένα ασσυριακό κράτος — μάθημα που οι βασιλείς του θα θυμούνταν χίλια χρόνια αργότερα."
          },
          category: "political"
        }
      ]
    },
    {
      year: -1792,
      era: {
        en: "First Dynasty of Babylon",
        el: "Πρώτη Δυναστεία της Βαβυλώνας"
      },
      events: [
        {
          title: {
            en: "Hammurabi takes the throne",
            el: "Ο Χαμουραμπί ανεβαίνει στον θρόνο"
          },
          description: {
            en: "Hammurabi becomes king of a still-modest Babylon and begins a patient rise among the warring powers of the plain.",
            el: "Ο Χαμουραμπί γίνεται βασιλιάς μιας ακόμη μέτριας Βαβυλώνας και ξεκινά μια υπομονετική άνοδο ανάμεσα στις εμπόλεμες δυνάμεις της πεδιάδας."
          },
          extendedDescription: {
            en: "For his first decades Hammurabi ruled a small kingdom hemmed in by Larsa, Eshnunna, Mari, and Assyria. He bided his time, digging canals and strengthening walls, building alliances and breaking them, until the balance of power tilted his way. Then, in a lightning series of campaigns, he made himself master of Mesopotamia.",
            el: "Για τις πρώτες του δεκαετίες ο Χαμουραμπί κυβερνούσε ένα μικρό βασίλειο περικυκλωμένο από τη Λάρσα, την Εσνούννα, τη Μάρι και την Ασσυρία. Περίμενε την ώρα του, σκάβοντας κανάλια και ενισχύοντας τείχη, χτίζοντας συμμαχίες και σπάζοντάς τες, ώσπου η ισορροπία δυνάμεων έγειρε προς το μέρος του. Τότε, σε μια αστραπιαία σειρά εκστρατειών, έγινε κύριος της Μεσοποταμίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: -1780,
      era: {
        en: "First Dynasty of Babylon",
        el: "Πρώτη Δυναστεία της Βαβυλώνας"
      },
      events: [
        {
          title: {
            en: "The archives of Mari",
            el: "Τα αρχεία της Μάρι"
          },
          description: {
            en: "At the Euphrates city of Mari, King Zimri-Lim's palace keeps a vast diplomatic archive that lights up the whole age.",
            el: "Στην πόλη Μάρι του Ευφράτη, το ανάκτορο του βασιλιά Ζιμρί-Λιμ κρατά ένα τεράστιο διπλωματικό αρχείο που φωτίζει ολόκληρη την εποχή."
          },
          extendedDescription: {
            en: "The twenty thousand letters and records of Mari's royal palace reveal a world of shifting alliances, prophets, marriage diplomacy, and tribal politics. One famous letter reports that ten kings each followed Hammurabi, Rim-Sin, or a handful of other great rulers — a rare snapshot of the balance of power on the eve of Babylon's rise.",
            el: "Οι είκοσι χιλιάδες επιστολές και αρχεία του βασιλικού ανακτόρου της Μάρι αποκαλύπτουν έναν κόσμο μεταβαλλόμενων συμμαχιών, προφητών, γαμήλιας διπλωματίας και φυλετικής πολιτικής. Μια περίφημη επιστολή αναφέρει ότι δέκα βασιλείς ακολουθούσαν τον καθένα από τους Χαμουραμπί, Ριμ-Σιν ή λίγους άλλους μεγάλους ηγεμόνες — ένα σπάνιο στιγμιότυπο της ισορροπίας δυνάμεων στις παραμονές της ανόδου της Βαβυλώνας."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -1763,
      era: {
        en: "First Dynasty of Babylon",
        el: "Πρώτη Δυναστεία της Βαβυλώνας"
      },
      events: [
        {
          title: {
            en: "Hammurabi conquers Mesopotamia",
            el: "Ο Χαμουραμπί κατακτά τη Μεσοποταμία"
          },
          description: {
            en: "In a few swift years Hammurabi crushes Larsa, Eshnunna, and Mari, uniting the land under Babylon for the first time.",
            el: "Μέσα σε λίγα γρήγορα χρόνια ο Χαμουραμπί συντρίβει τη Λάρσα, την Εσνούννα και τη Μάρι, ενώνοντας τη χώρα υπό τη Βαβυλώνα για πρώτη φορά."
          },
          extendedDescription: {
            en: "Hammurabi defeated the old king Rim-Sin of Larsa, overran Eshnunna, and finally turned on his ally Zimri-Lim, sacking Mari and burning its great palace. By the end he ruled from the Persian Gulf to the edge of Assyria — the empire that made Babylon the political and cultural centre of the Near East.",
            el: "Ο Χαμουραμπί νίκησε τον γηραιό βασιλιά Ριμ-Σιν της Λάρσα, κατέλαβε την Εσνούννα και τελικά στράφηκε κατά του συμμάχου του Ζιμρί-Λιμ, λεηλατώντας τη Μάρι και καίγοντας το μεγάλο ανάκτορό της. Στο τέλος κυβερνούσε από τον Περσικό Κόλπο ως τα όρια της Ασσυρίας — η αυτοκρατορία που έκανε τη Βαβυλώνα το πολιτικό και πολιτισμικό κέντρο της Εγγύς Ανατολής."
          },
          category: "military"
        }
      ]
    },
    {
      year: -1754,
      era: {
        en: "First Dynasty of Babylon",
        el: "Πρώτη Δυναστεία της Βαβυλώνας"
      },
      events: [
        {
          title: {
            en: "The Code of Hammurabi",
            el: "Ο Κώδικας του Χαμουραμπί"
          },
          description: {
            en: "Hammurabi has nearly three hundred laws carved on a great stone stele, crowned by an image of the king before the god of justice.",
            el: "Ο Χαμουραμπί χαράζει σχεδόν τριακόσιους νόμους σε μια μεγάλη λίθινη στήλη, στεφανωμένη με εικόνα του βασιλιά μπροστά στον θεό της δικαιοσύνης."
          },
          extendedDescription: {
            en: "The Code, topped by a relief of Hammurabi receiving the law from the sun god Shamash, sets fees, wages, and punishments — often 'an eye for an eye,' with penalties graded by social rank. Though not the first Mesopotamian law code, it is the most complete, and its black diorite stele, looted to Susa and now in the Louvre, is the enduring symbol of ancient law.",
            el: "Ο Κώδικας, στεφανωμένος με ανάγλυφο του Χαμουραμπί να λαμβάνει τον νόμο από τον θεό ήλιο Σαμάς, ορίζει αμοιβές, μισθούς και ποινές — συχνά «οφθαλμόν αντί οφθαλμού», με τιμωρίες διαβαθμισμένες κατά κοινωνική τάξη. Αν και δεν είναι ο πρώτος μεσοποταμιακός νομικός κώδικας, είναι ο πληρέστερος, και η μαύρη διοριτική στήλη του, λεηλατημένη στα Σούσα και σήμερα στο Λούβρο, είναι το διαχρονικό σύμβολο του αρχαίου δικαίου."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/P1050763%20Louvre%20code%20Hammurabi%20face%20rwk.JPG?width=1024",
            alt: {
              en: "The upper relief of the Code of Hammurabi stele, now in the Louvre",
              el: "Το άνω ανάγλυφο της στήλης του Κώδικα του Χαμουραμπί, σήμερα στο Λούβρο"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -1740,
      era: {
        en: "First Dynasty of Babylon",
        el: "Πρώτη Δυναστεία της Βαβυλώνας"
      },
      events: [
        {
          title: {
            en: "Marduk and the decline of the dynasty",
            el: "Ο Μαρδούκ και η παρακμή της δυναστείας"
          },
          description: {
            en: "Under Hammurabi's son Samsu-iluna the empire frays as the south revolts and the Sealand breaks away.",
            el: "Υπό τον γιο του Χαμουραμπί, Σαμσού-ιλούνα, η αυτοκρατορία φθείρεται καθώς ο νότος επαναστατεί και η Χώρα της Θάλασσας αποσχίζεται."
          },
          extendedDescription: {
            en: "Babylon's empire barely outlived its founder. Samsu-iluna fought revolts across the south, and the old Sumerian heartland around Ur and Uruk, exhausted by war and shifting rivers, was largely abandoned. Yet Babylon endured as the holy city of the god Marduk, whose rise to king of the gods mirrored the city's own claim to primacy.",
            el: "Η αυτοκρατορία της Βαβυλώνας μόλις που επέζησε του ιδρυτή της. Ο Σαμσού-ιλούνα πολέμησε εξεγέρσεις σε όλο τον νότο, και η παλιά σουμεριακή καρδιά γύρω από την Ουρ και την Ουρούκ, εξαντλημένη από τον πόλεμο και τις μετατοπίσεις των ποταμών, εγκαταλείφθηκε σε μεγάλο βαθμό. Ωστόσο η Βαβυλώνα άντεξε ως η ιερή πόλη του θεού Μαρδούκ, του οποίου η άνοδος σε βασιλιά των θεών αντικατόπτριζε τη διεκδίκηση πρωτοκαθεδρίας της ίδιας της πόλης."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -1595,
      era: {
        en: "First Dynasty of Babylon",
        el: "Πρώτη Δυναστεία της Βαβυλώνας"
      },
      events: [
        {
          title: {
            en: "The Hittites sack Babylon",
            el: "Οι Χετταίοι λεηλατούν τη Βαβυλώνα"
          },
          description: {
            en: "The Hittite king Mursili I raids down the Euphrates and sacks Babylon, ending Hammurabi's dynasty and opening the way for the Kassites.",
            el: "Ο Χετταίος βασιλιάς Μουρσίλι Α΄ επιδράμει κατεβαίνοντας τον Ευφράτη και λεηλατεί τη Βαβυλώνα, τερματίζοντας τη δυναστεία του Χαμουραμπί και ανοίγοντας τον δρόμο στους Κασσίτες."
          },
          extendedDescription: {
            en: "In a stunning long-range raid, Mursili I struck from Anatolia, plundered Babylon, and carried off the statue of Marduk — then withdrew, leaving chaos behind. Into the vacuum moved the Kassites, mountain newcomers who would rule Babylon longer than any native dynasty, opening a new age.",
            el: "Σε μια εκπληκτική επιδρομή μεγάλης ακτίνας, ο Μουρσίλι Α΄ χτύπησε από την Ανατολία, λεηλάτησε τη Βαβυλώνα και άρπαξε το άγαλμα του Μαρδούκ — και ύστερα αποσύρθηκε, αφήνοντας πίσω του χάος. Στο κενό εισήλθαν οι Κασσίτες, ορεινοί νεοφερμένοι που θα κυβερνούσαν τη Βαβυλώνα περισσότερο από κάθε ντόπια δυναστεία, ανοίγοντας μια νέα εποχή."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
