/** Vedic Period — Βεδική Περίοδος · Indian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const VEDIC_PERIOD = {
  id: "vedic-period" as const,
  label: {
    en: "Vedic Period",
    el: "Βεδική Περίοδος"
  },
  supertitle: {
    en: "The Age of the Vedas",
    el: "Η Εποχή των Βεδών"
  },
  title: {
    en: "The Vedic Period",
    el: "Η Βεδική Περίοδος"
  },
  subtitle: {
    en: "From the coming of Indo-Aryan peoples and the hymns of the Rigveda, through the spread of iron and settled farming across the Ganges plain and the shaping of the social order of varna, to the philosophical fire of the Upanishads and the rise of the first kingdoms and cities. Slide across a thousand years, remembered in an oral literature of astonishing power, in which the enduring framework of Indian religion and society was forged.",
    el: "Από την έλευση των ινδοάριων λαών και τους ύμνους της Ριγκβέδα, μέσα από τη διάδοση του σιδήρου και της μόνιμης γεωργίας στην πεδιάδα του Γάγγη και τη διαμόρφωση της κοινωνικής τάξης των βάρνα, ως τη φιλοσοφική φλόγα των Ουπανισάδων και την άνοδο των πρώτων βασιλείων και πόλεων. Μετακινηθείτε μέσα σε μια χιλιετία, θυμισμένη σε μια προφορική λογοτεχνία εκπληκτικής δύναμης, όπου σφυρηλατήθηκε το διαχρονικό πλαίσιο της ινδικής θρησκείας και κοινωνίας."
  },
  menuDescription: {
    en: "The hymns of the Vedas, the Ganges kingdoms and the birth of India's religious order.",
    el: "Οι ύμνοι των Βεδών, τα βασίλεια του Γάγγη και η γέννηση της θρησκευτικής τάξης της Ινδίας."
  },
  footerLabel: {
    en: "Vedic Period · c. 1500–600 BC",
    el: "Βεδική Περίοδος · περ. 1500–600 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Vedic Period",
    el: "Η Βεδική Περίοδος"
  },
  theme: THEMES.amber,
  timeline: [
    {
      year: -1500,
      era: {
        en: "The Early Vedic Age",
        el: "Η Πρώιμη Βεδική Εποχή"
      },
      events: [
        {
          title: {
            en: "The coming of the Vedas",
            el: "Η έλευση των Βεδών"
          },
          description: {
            en: "Indo-Aryan peoples spread into north-west India, bringing the Sanskrit hymns that became the Rigveda.",
            el: "Ινδοάριοι λαοί εξαπλώνονται στη βορειοδυτική Ινδία, φέρνοντας τους σανσκριτικούς ύμνους που έγιναν η Ριγκβέδα."
          },
          extendedDescription: {
            en: "Speaking an early form of Sanskrit, pastoral peoples herding cattle and driving horse-chariots composed a vast body of sacred verse. Preserved with astonishing fidelity by memory alone for centuries, the Rigveda is among the oldest religious texts still in use, and the foundation of a new age in the Indian subcontinent.",
            el: "Μιλώντας μια πρώιμη μορφή σανσκριτικής, ποιμενικοί λαοί που έβοσκαν βοοειδή κι οδηγούσαν άρματα με άλογα συνέθεσαν ένα τεράστιο σώμα ιερής ποίησης. Διατηρημένη με εκπληκτική πιστότητα μόνο μέσω μνήμης επί αιώνες, η Ριγκβέδα είναι από τα αρχαιότερα θρησκευτικά κείμενα που χρησιμοποιούνται ακόμη, και το θεμέλιο μιας νέας εποχής στην ινδική υποήπειρο."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -1200,
      era: {
        en: "The Early Vedic Age",
        el: "Η Πρώιμη Βεδική Εποχή"
      },
      events: [
        {
          title: {
            en: "The world of the Rigveda",
            el: "Ο κόσμος της Ριγκβέδα"
          },
          description: {
            en: "The hymns reveal a world of cattle-herding clans, warrior chiefs and gods of fire, storm and dawn.",
            el: "Οι ύμνοι αποκαλύπτουν έναν κόσμο φυλών κτηνοτρόφων, πολεμιστών αρχηγών και θεών της φωτιάς, της καταιγίδας και της αυγής."
          },
          extendedDescription: {
            en: "The early Aryans lived in tribes led by a raja, prizing cattle and horses and worshipping deities such as Indra the thunderer, Agni the fire and Ushas the dawn through fire sacrifice. Their poetry, both hymn and riddle, captures a mobile, exuberant society on the plains of the Punjab, not yet bound to cities or a rigid order.",
            el: "Οι πρώιμοι Άριοι ζούσαν σε φυλές υπό έναν ράτζα, εκτιμώντας βοοειδή και άλογα και λατρεύοντας θεότητες όπως ο Ίντρα ο κεραυνοφόρος, ο Άγκνι η φωτιά και η Ουσάς η αυγή μέσω θυσίας στη φωτιά. Η ποίησή τους, ύμνος και αίνιγμα μαζί, αποτυπώνει μια κινητική, ζωντανή κοινωνία στις πεδιάδες του Παντζάμπ, όχι ακόμη δεμένη με πόλεις ή άκαμπτη τάξη."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -1000,
      era: {
        en: "The Later Vedic Age",
        el: "Η Ύστερη Βεδική Εποχή"
      },
      events: [
        {
          title: {
            en: "Iron and the Ganges",
            el: "Ο σίδηρος και ο Γάγγης"
          },
          description: {
            en: "Armed with iron, the Vedic peoples clear the forests of the Ganges plain and settle to farming.",
            el: "Οπλισμένοι με σίδηρο, οι βεδικοί λαοί καθαρίζουν τα δάση της πεδιάδας του Γάγγη κι εγκαθίστανται στη γεωργία."
          },
          extendedDescription: {
            en: "Iron axes and ploughs let settlers clear the dense forests east of the Punjab and turn to rice farming on the fertile Ganges plain. Tribes hardened into territorial kingdoms, wealth grew, and society became more settled and hierarchical, moving from the herders' world of the early Vedas toward one of villages, kings and priests.",
            el: "Σιδερένιοι πελέκεις και άροτρα επέτρεψαν στους εποίκους να καθαρίσουν τα πυκνά δάση ανατολικά του Παντζάμπ και να στραφούν στην καλλιέργεια ρυζιού στην εύφορη πεδιάδα του Γάγγη. Οι φυλές σκλήρυναν σε εδαφικά βασίλεια, ο πλούτος αυξήθηκε, και η κοινωνία έγινε πιο εγκατεστημένη και ιεραρχική, περνώντας από τον κόσμο των κτηνοτρόφων των πρώιμων Βεδών σε έναν κόσμο χωριών, βασιλέων και ιερέων."
          },
          category: "political"
        }
      ]
    },
    {
      year: -900,
      era: {
        en: "The Later Vedic Age",
        el: "Η Ύστερη Βεδική Εποχή"
      },
      events: [
        {
          title: {
            en: "Kings, priests and sacrifice",
            el: "Βασιλείς, ιερείς και θυσία"
          },
          description: {
            en: "In the Kuru-Panchala realm, elaborate rituals and a powerful priesthood bind kingship to the sacred.",
            el: "Στο βασίλειο των Κούρου-Παντσάλα, περίτεχνες τελετουργίες κι ένα ισχυρό ιερατείο δένουν τη βασιλεία με το ιερό."
          },
          extendedDescription: {
            en: "The kingdom of the Kurus and Panchalas became the heartland of later Vedic culture, its memory preserved in the epic Mahabharata. Grand sacrifices, some lasting months, exalted the king and enriched the Brahmin priests who alone knew their secrets — a spiritual authority that would shape Indian society for millennia.",
            el: "Το βασίλειο των Κούρου και των Παντσάλα έγινε η καρδιά της ύστερης βεδικής κουλτούρας, με τη μνήμη του διατηρημένη στο έπος Μαχαμπαράτα. Μεγαλειώδεις θυσίες, κάποιες διαρκείας μηνών, εξύψωναν τον βασιλιά κι εμπλούτιζαν τους βραχμάνους ιερείς που μόνοι γνώριζαν τα μυστικά τους — μια πνευματική εξουσία που θα διαμόρφωνε την ινδική κοινωνία για χιλιετίες."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -800,
      era: {
        en: "The Later Vedic Age",
        el: "Η Ύστερη Βεδική Εποχή"
      },
      events: [
        {
          title: {
            en: "The order of varna",
            el: "Η τάξη των βάρνα"
          },
          description: {
            en: "Society is ordered into the four varnas — priests, warriors, producers and servants — the root of the caste system.",
            el: "Η κοινωνία τάσσεται σε τέσσερις βάρνα — ιερείς, πολεμιστές, παραγωγούς και υπηρέτες — η ρίζα του συστήματος των καστών."
          },
          extendedDescription: {
            en: "Later Vedic texts describe a fourfold order: Brahmins who taught and sacrificed, Kshatriyas who ruled and fought, Vaishyas who farmed and traded, and Shudras who served. Justified by a famous creation hymn, this hierarchy of varna hardened over time into the intricate, hereditary system of caste that would structure Indian life.",
            el: "Ύστερα βεδικά κείμενα περιγράφουν μια τετραμερή τάξη: βραχμάνους που δίδασκαν και θυσίαζαν, κσατρίγια που κυβερνούσαν και πολεμούσαν, βαΐσγια που καλλιεργούσαν κι εμπορεύονταν, και σούντρα που υπηρετούσαν. Δικαιολογημένη από έναν περίφημο ύμνο δημιουργίας, αυτή η ιεραρχία των βάρνα σκλήρυνε με τον καιρό στο περίπλοκο, κληρονομικό σύστημα των καστών."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -700,
      era: {
        en: "The Upanishads",
        el: "Οι Ουπανισάδες"
      },
      events: [
        {
          title: {
            en: "The philosophy of the Upanishads",
            el: "Η φιλοσοφία των Ουπανισάδων"
          },
          description: {
            en: "Forest sages turn from ritual to inner truth, teaching of the self, karma and release in the Upanishads.",
            el: "Σοφοί του δάσους στρέφονται από την τελετουργία στην εσωτερική αλήθεια, διδάσκοντας για τον εαυτό, το κάρμα και τη λύτρωση στις Ουπανισάδες."
          },
          extendedDescription: {
            en: "As some grew weary of sacrifice, wandering thinkers asked deeper questions. The Upanishads taught that the individual self, atman, is one with the ultimate reality, brahman, and that the soul is reborn according to its deeds, karma, until it wins release, moksha. These ideas became the philosophical core of Hinduism and shaped all later Indian thought.",
            el: "Καθώς κάποιοι κουράστηκαν από τη θυσία, περιπλανώμενοι στοχαστές έθεσαν βαθύτερα ερωτήματα. Οι Ουπανισάδες δίδαξαν ότι ο ατομικός εαυτός, το άτμαν, είναι ένα με την απόλυτη πραγματικότητα, το μπράχμαν, και ότι η ψυχή αναγεννιέται σύμφωνα με τις πράξεις της, το κάρμα, ώσπου να κερδίσει τη λύτρωση, το μόκσα. Οι ιδέες αυτές έγιναν ο φιλοσοφικός πυρήνας του Ινδουισμού."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -600,
      era: {
        en: "Toward the Kingdoms",
        el: "Προς τα Βασίλεια"
      },
      events: [
        {
          title: {
            en: "Kingdoms and cities rise",
            el: "Ανεβαίνουν βασίλεια και πόλεις"
          },
          description: {
            en: "As the Vedic age closes, the plain fills with rival kingdoms and a new wave of cities and trade.",
            el: "Καθώς κλείνει η βεδική εποχή, η πεδιάδα γεμίζει με αντίπαλα βασίλεια κι ένα νέο κύμα πόλεων και εμπορίου."
          },
          extendedDescription: {
            en: "By 600 BC the tribal patchwork had consolidated into larger states, and towns grew again along the Ganges amid a lively trade and the first coins. This \"second urbanisation\" set the stage for the great kingdoms of the Mahajanapadas — and for the age of the Buddha and the first Indian empires.",
            el: "Ως το 600 π.Χ. το φυλετικό μωσαϊκό είχε συμπυκνωθεί σε μεγαλύτερα κράτη, και πόλεις ξαναμεγάλωσαν κατά μήκος του Γάγγη μέσα σε ζωηρό εμπόριο και τα πρώτα νομίσματα. Αυτή η «δεύτερη αστικοποίηση» προετοίμασε τη σκηνή για τα μεγάλα βασίλεια των Μαχατζαναπάντα — και για την εποχή του Βούδα και των πρώτων ινδικών αυτοκρατοριών."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
