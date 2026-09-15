/** Taishō & Early Shōwa Japan — Ιαπωνία Τάισο & Πρώιμης Σόουα · Japanese History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const TAISHO_EARLY_SHOWA_JAPAN = {
  id: "taisho-early-showa-japan" as const,
  label: {
    en: "Taishō & Early Shōwa Japan",
    el: "Ιαπωνία Τάισο & Πρώιμης Σόουα"
  },
  supertitle: {
    en: "大正・昭和 · Democracy and War",
    el: "Δημοκρατία και Πόλεμος"
  },
  title: {
    en: "Imperial Japan",
    el: "Η Αυτοκρατορική Ιαπωνία"
  },
  subtitle: {
    en: "From the brief liberal spring of \"Taishō democracy,\" through the Great Kantō earthquake and the slide into militarism and army rule, to the conquest of Manchuria, the war on China, and the vast Pacific war that ended over Hiroshima and Nagasaki. Slide across three fateful decades in which a modern, cultured Japan reached for empire, plunged into total war, and met catastrophe.",
    el: "Από τη σύντομη φιλελεύθερη άνοιξη της «δημοκρατίας Τάισο», μέσα από τον Μεγάλο Σεισμό του Καντό και την ολίσθηση προς τον μιλιταρισμό και τη στρατιωτική διακυβέρνηση, ως την κατάκτηση της Μαντζουρίας, τον πόλεμο κατά της Κίνας και τον τεράστιο πόλεμο του Ειρηνικού που τελείωσε πάνω από τη Χιροσίμα και το Ναγκασάκι. Μετακινηθείτε σε τρεις μοιραίες δεκαετίες όπου μια σύγχρονη, καλλιεργημένη Ιαπωνία άπλωσε το χέρι στην αυτοκρατορία, βυθίστηκε στον ολοκληρωτικό πόλεμο και συνάντησε την καταστροφή."
  },
  menuDescription: {
    en: "Taishō democracy, the turn to militarism, and Japan's road through the Pacific War to defeat.",
    el: "Η δημοκρατία Τάισο, η στροφή στον μιλιταρισμό και η πορεία της Ιαπωνίας μέσα από τον Πόλεμο του Ειρηνικού στην ήττα."
  },
  footerLabel: {
    en: "Taishō & Early Shōwa · 1912–1945 AD",
    el: "Τάισο & Πρώιμη Σόουα · 1912–1945 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Imperial Japan",
    el: "Η Αυτοκρατορική Ιαπωνία"
  },
  theme: THEMES.onyx,
  timeline: [
    {
      year: 1918,
      era: {
        en: "Taishō Democracy",
        el: "Η Δημοκρατία Τάισο"
      },
      events: [
        {
          title: {
            en: "Party government and rice riots",
            el: "Κυβέρνηση κομμάτων και εξεγέρσεις του ρυζιού"
          },
          description: {
            en: "Amid nationwide rice riots, Japan gains its first commoner prime minister, in the liberal years of Taishō democracy.",
            el: "Μέσα σε πανεθνικές εξεγέρσεις του ρυζιού, η Ιαπωνία αποκτά τον πρώτο της πρωθυπουργό μη ευγενικής καταγωγής, στα φιλελεύθερα χρόνια της δημοκρατίας Τάισο."
          },
          extendedDescription: {
            en: "The 1910s and 1920s brought a hopeful liberalism: party cabinets, a lively press, mass culture and, in 1925, the vote for all adult men. Yet the same year a Peace Preservation Law armed the state against dissent, and the gains rested on shaky ground as economic crisis and army ambition gathered strength.",
            el: "Η δεκαετία του 1910 και του 1920 έφερε έναν ελπιδοφόρο φιλελευθερισμό: κυβερνήσεις κομμάτων, ζωντανό Τύπο, μαζική κουλτούρα και, το 1925, το δικαίωμα ψήφου σε όλους τους ενήλικες άνδρες. Ωστόσο την ίδια χρονιά ένας Νόμος Διατήρησης της Ειρήνης όπλισε το κράτος κατά της αντιπολίτευσης, και τα κεκτημένα στηρίζονταν σε σαθρό έδαφος καθώς η οικονομική κρίση και η φιλοδοξία του στρατού δυνάμωναν."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1923,
      era: {
        en: "Catastrophe",
        el: "Καταστροφή"
      },
      events: [
        {
          title: {
            en: "The Great Kantō earthquake",
            el: "Ο Μεγάλος Σεισμός του Καντό"
          },
          description: {
            en: "A colossal earthquake and firestorm devastate Tokyo and Yokohama, killing well over a hundred thousand people.",
            el: "Ένας κολοσσιαίος σεισμός και πυρκαγιά ισοπεδώνουν το Τόκιο και τη Γιοκοχάμα, σκοτώνοντας πολύ πάνω από εκατό χιλιάδες ανθρώπους."
          },
          extendedDescription: {
            en: "Striking at noon, the quake toppled the capital and ignited firestorms that consumed whole districts. In the chaos, rumours sparked massacres of Korean residents. The disaster erased much of old Tokyo — and the vast rebuilding that followed helped shape the sprawling modern metropolis that rose in its place.",
            el: "Χτυπώντας το μεσημέρι, ο σεισμός γκρέμισε την πρωτεύουσα και ξεσήκωσε πύρινες θύελλες που κατέφαγαν ολόκληρες συνοικίες. Μέσα στο χάος, φήμες πυροδότησαν σφαγές Κορεατών κατοίκων. Η καταστροφή έσβησε μεγάλο μέρος του παλιού Τόκιο — και η τεράστια ανοικοδόμηση που ακολούθησε βοήθησε να διαμορφωθεί η απέραντη σύγχρονη μητρόπολη που υψώθηκε στη θέση του."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1931,
      era: {
        en: "The Turn to Militarism",
        el: "Η Στροφή στον Μιλιταρισμό"
      },
      events: [
        {
          title: {
            en: "The Manchurian Incident",
            el: "Το Συμβάν της Μαντζουρίας"
          },
          description: {
            en: "The army seizes Manchuria on a staged pretext, defying the government and the League of Nations.",
            el: "Ο στρατός καταλαμβάνει τη Μαντζουρία με σκηνοθετημένο πρόσχημα, αψηφώντας την κυβέρνηση και την Κοινωνία των Εθνών."
          },
          extendedDescription: {
            en: "Officers of the Kwantung Army blew up a railway and blamed the Chinese, then overran Manchuria and set up the puppet state of Manchukuo. When the League condemned the act, Japan simply walked out. Civilian government lost control of the military, and a wave of assassinations cowed the politicians who resisted.",
            el: "Αξιωματικοί του Στρατού του Κβαντούνγκ ανατίναξαν μια σιδηροδρομική γραμμή και κατηγόρησαν τους Κινέζους, έπειτα κατέκλυσαν τη Μαντζουρία και έστησαν το κράτος-μαριονέτα του Μαντζουκουό. Όταν η Κοινωνία των Εθνών καταδίκασε την πράξη, η Ιαπωνία απλώς αποχώρησε. Η πολιτική κυβέρνηση έχασε τον έλεγχο του στρατού, και ένα κύμα δολοφονιών εκφόβισε τους πολιτικούς που αντιστέκονταν."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1937,
      era: {
        en: "The War in China",
        el: "Ο Πόλεμος στην Κίνα"
      },
      events: [
        {
          title: {
            en: "The Second Sino-Japanese War",
            el: "Ο Δεύτερος Σινοϊαπωνικός Πόλεμος"
          },
          description: {
            en: "Full-scale war engulfs China, marked by the atrocity of the Nanjing Massacre.",
            el: "Ολοκληρωτικός πόλεμος καταλαμβάνει την Κίνα, σημαδεμένος από τη θηριωδία της Σφαγής της Ναντζίνγκ."
          },
          extendedDescription: {
            en: "A clash at the Marco Polo Bridge exploded into all-out war. Japanese armies took the coastal cities and the capital Nanjing, where they massacred and raped on a horrifying scale. But China did not surrender; the war became a vast, bloody quagmire that drew Japan ever deeper and set it on a collision course with the West.",
            el: "Μια σύγκρουση στη Γέφυρα Μάρκο Πόλο εξερράγη σε ολοκληρωτικό πόλεμο. Ιαπωνικοί στρατοί πήραν τις παράκτιες πόλεις και την πρωτεύουσα Ναντζίνγκ, όπου προέβησαν σε σφαγές και βιασμούς σε φρικιαστική κλίμακα. Όμως η Κίνα δεν παραδόθηκε· ο πόλεμος έγινε ένα απέραντο, ματωμένο τέλμα που τραβούσε την Ιαπωνία ολοένα βαθύτερα και την έθετε σε τροχιά σύγκρουσης με τη Δύση."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1941,
      era: {
        en: "The Pacific War",
        el: "Ο Πόλεμος του Ειρηνικού"
      },
      events: [
        {
          title: {
            en: "Pearl Harbor",
            el: "Το Περλ Χάρμπορ"
          },
          description: {
            en: "Japan attacks the United States fleet at Pearl Harbor and sweeps across Southeast Asia and the Pacific.",
            el: "Η Ιαπωνία επιτίθεται στον στόλο των Ηνωμένων Πολιτειών στο Περλ Χάρμπορ και σαρώνει τη Νοτιοανατολική Ασία και τον Ειρηνικό."
          },
          extendedDescription: {
            en: "Facing an American oil embargo over its war in China, Japan gambled on a knockout blow. Its carriers struck Pearl Harbor while its armies seized the Philippines, Malaya, Singapore and the Indies in a few triumphant months. But the sleeping giant was now awake, and the industrial might of America would prove overwhelming.",
            el: "Αντιμέτωπη με αμερικανικό εμπάργκο πετρελαίου για τον πόλεμό της στην Κίνα, η Ιαπωνία ρίσκαρε ένα αποφασιστικό πλήγμα. Τα αεροπλανοφόρα της χτύπησαν το Περλ Χάρμπορ ενώ οι στρατοί της κατέλαβαν τις Φιλιππίνες, τη Μαλαισία, τη Σιγκαπούρη και τις Ινδίες σε λίγους θριαμβευτικούς μήνες. Όμως ο κοιμισμένος γίγαντας είχε πλέον ξυπνήσει, και η βιομηχανική ισχύς της Αμερικής θα αποδεικνυόταν συντριπτική."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1942,
      era: {
        en: "The Tide Turns",
        el: "Η Παλίρροια Αλλάζει"
      },
      events: [
        {
          title: {
            en: "The Battle of Midway",
            el: "Η Μάχη του Μίντγουεϊ"
          },
          description: {
            en: "American carriers sink four Japanese flattops at Midway, turning the tide of the Pacific War.",
            el: "Αμερικανικά αεροπλανοφόρα βυθίζουν τέσσερα ιαπωνικά αεροπλανοφόρα στο Μίντγουεϊ, αντιστρέφοντας τη ροή του Πολέμου του Ειρηνικού."
          },
          extendedDescription: {
            en: "Six months after Pearl Harbor, the two carrier fleets met near Midway atoll. In a few minutes American dive-bombers destroyed the heart of Japan's carrier force, losses it could never replace. From that day Japan was on the defensive, and the long, brutal island-hopping campaign back toward the home islands began.",
            el: "Έξι μήνες μετά το Περλ Χάρμπορ, οι δύο στόλοι αεροπλανοφόρων συναντήθηκαν κοντά στην ατόλη Μίντγουεϊ. Σε λίγα λεπτά αμερικανικά βομβαρδιστικά καθέτου εφορμήσεως κατέστρεψαν την καρδιά της δύναμης αεροπλανοφόρων της Ιαπωνίας, απώλειες που δεν μπορούσε ποτέ να αναπληρώσει. Από εκείνη τη μέρα η Ιαπωνία ήταν σε άμυνα, και άρχισε η μακρά, βάναυση εκστρατεία αναρρίχησης από νησί σε νησί προς τα μητροπολιτικά νησιά."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1945,
      era: {
        en: "Defeat",
        el: "Ήττα"
      },
      events: [
        {
          title: {
            en: "Hiroshima, Nagasaki and surrender",
            el: "Χιροσίμα, Ναγκασάκι και παράδοση"
          },
          description: {
            en: "After atomic bombs fall on Hiroshima and Nagasaki, Emperor Hirohito announces Japan's surrender.",
            el: "Αφού ατομικές βόμβες πέφτουν στη Χιροσίμα και το Ναγκασάκι, ο Αυτοκράτορας Χιροχίτο ανακοινώνει την παράδοση της Ιαπωνίας."
          },
          extendedDescription: {
            en: "Firebombing had already gutted Japan's cities when atomic bombs destroyed Hiroshima and Nagasaki and the Soviet Union declared war. On 15 August the emperor's voice, never before heard by his people, called on them to \"endure the unendurable\" and accept defeat. An empire lay in ashes, and a shattered nation faced foreign occupation for the first time in its history.",
            el: "Οι εμπρηστικοί βομβαρδισμοί είχαν ήδη ρημάξει τις πόλεις της Ιαπωνίας όταν ατομικές βόμβες κατέστρεψαν τη Χιροσίμα και το Ναγκασάκι και η Σοβιετική Ένωση κήρυξε τον πόλεμο. Στις 15 Αυγούστου η φωνή του αυτοκράτορα, που ο λαός του δεν είχε ξανακούσει, τους κάλεσε να «αντέξουν το αβάσταχτο» και να δεχτούν την ήττα. Μια αυτοκρατορία κειτόταν στις στάχτες, και ένα συντετριμμένο έθνος αντιμετώπιζε ξένη κατοχή για πρώτη φορά στην ιστορία του."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
