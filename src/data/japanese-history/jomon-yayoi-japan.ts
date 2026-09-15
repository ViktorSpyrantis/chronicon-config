/** Jōmon & Yayoi Japan — Ιαπωνία Τζόμον & Γιαγιόι · Japanese History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const JOMON_YAYOI_JAPAN = {
  id: "jomon-yayoi-japan" as const,
  label: {
    en: "Jōmon & Yayoi Japan",
    el: "Ιαπωνία Τζόμον & Γιαγιόι"
  },
  supertitle: {
    en: "縄文・弥生 · Before the State",
    el: "Πριν από το Κράτος"
  },
  title: {
    en: "Prehistoric Japan",
    el: "Προϊστορική Ιαπωνία"
  },
  subtitle: {
    en: "From the ice-age hunters who made some of the world's oldest pottery, through twelve thousand years of Jōmon foragers with their cord-marked jars and clay figurines, to the coming of wet-rice farming, bronze and iron with the Yayoi, and the first Japanese chiefdoms glimpsed in the records of China. Slide across the long dawn of the islands, before writing and before emperors.",
    el: "Από τους κυνηγούς της εποχής των παγετώνων που έφτιαξαν μερικά από τα αρχαιότερα αγγεία του κόσμου, μέσα από δώδεκα χιλιάδες χρόνια τροφοσυλλεκτών Τζόμον με τα σχοινοειδώς διακοσμημένα δοχεία και τα πήλινα ειδώλιά τους, ως την έλευση της υγρής καλλιέργειας ρυζιού, του χαλκού και του σιδήρου με τους Γιαγιόι, και τις πρώτες ιαπωνικές ηγεμονίες που διακρίνονται στα κινεζικά χρονικά. Μετακινηθείτε στη μακρά αυγή των νησιών, πριν από τη γραφή και πριν από τους αυτοκράτορες."
  },
  menuDescription: {
    en: "The islands before writing: Jōmon foragers, then Yayoi rice, bronze and the first chiefdoms.",
    el: "Τα νησιά πριν από τη γραφή: τροφοσυλλέκτες Τζόμον, έπειτα ρύζι, χαλκός και οι πρώτες ηγεμονίες των Γιαγιόι."
  },
  footerLabel: {
    en: "Jōmon & Yayoi Japan · c. 14,000 BC–300 AD",
    el: "Ιαπωνία Τζόμον & Γιαγιόι · περ. 14.000 π.Χ.–300 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Prehistoric Japan",
    el: "Προϊστορική Ιαπωνία"
  },
  theme: THEMES.sage,
  timeline: [
    {
      year: -14000,
      era: {
        en: "The Jōmon Period",
        el: "Η Περίοδος Τζόμον"
      },
      events: [
        {
          title: {
            en: "The world's oldest pottery",
            el: "Η αρχαιότερη κεραμική του κόσμου"
          },
          description: {
            en: "As the ice age ends, hunter-gatherers in the Japanese islands make cord-marked pots — among the earliest ceramics ever found.",
            el: "Καθώς τελειώνει η εποχή των παγετώνων, τροφοσυλλέκτες στα ιαπωνικά νησιά φτιάχνουν σχοινοειδώς διακοσμημένα αγγεία — από τα αρχαιότερα κεραμικά που έχουν βρεθεί."
          },
          extendedDescription: {
            en: "The word Jōmon means \"cord-marked,\" after the patterns pressed into the clay. Made by settled foragers rather than farmers, these vessels are older than pottery anywhere in the Near East, and mark the beginning of one of the longest continuous cultures in human history.",
            el: "Η λέξη Τζόμον σημαίνει «σχοινοειδώς διακοσμημένο», από τα μοτίβα που αποτυπώνονταν στον πηλό. Φτιαγμένα από εγκατεστημένους τροφοσυλλέκτες κι όχι από γεωργούς, τα αγγεία αυτά είναι παλαιότερα από την κεραμική οπουδήποτε στην Εγγύς Ανατολή και σηματοδοτούν την αρχή ενός από τους πιο μακρόβιους πολιτισμούς της ανθρώπινης ιστορίας."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -5000,
      era: {
        en: "The Jōmon Period",
        el: "Η Περίοδος Τζόμον"
      },
      events: [
        {
          title: {
            en: "Villages of the foragers",
            el: "Τα χωριά των τροφοσυλλεκτών"
          },
          description: {
            en: "Jōmon communities such as Sannai-Maruyama grow into large, settled villages living on nuts, fish and game.",
            el: "Κοινότητες Τζόμον όπως το Σαναΐ-Μαρουγιάμα εξελίσσονται σε μεγάλα, μόνιμα χωριά που ζουν από καρπούς, ψάρια και θηράματα."
          },
          extendedDescription: {
            en: "The site of Sannai-Maruyama in the north supported hundreds of people for over a millennium, with great timber posts, storage pits and long-distance trade in obsidian and jade. Rich in marine and forest food, the Jōmon reached a density and permanence rare for a people without agriculture.",
            el: "Ο οικισμός Σαναΐ-Μαρουγιάμα στον βορρά συντηρούσε εκατοντάδες ανθρώπους για πάνω από μια χιλιετία, με μεγάλους ξύλινους πασσάλους, αποθηκευτικούς λάκκους και εμπόριο οψιδιανού και νεφρίτη σε μεγάλες αποστάσεις. Πλούσιοι σε θαλάσσια και δασική τροφή, οι Τζόμον έφτασαν σε πυκνότητα και μονιμότητα σπάνια για λαό χωρίς γεωργία."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -1000,
      era: {
        en: "The Jōmon Period",
        el: "Η Περίοδος Τζόμον"
      },
      events: [
        {
          title: {
            en: "The dogū figurines",
            el: "Τα ειδώλια ντογκού"
          },
          description: {
            en: "Late Jōmon artisans shape enigmatic clay figurines, the dogū, with goggle-eyes and elaborate bodies.",
            el: "Τεχνίτες της ύστερης Τζόμον πλάθουν αινιγματικά πήλινα ειδώλια, τα ντογκού, με γουρλωτά μάτια και περίτεχνα σώματα."
          },
          extendedDescription: {
            en: "Thousands of these figurines survive, most deliberately broken, perhaps in rituals of healing or fertility. Alongside stone circles and elaborate burials, they reveal a spiritual world of remarkable depth in a society still thousands of years from cities or kings.",
            el: "Χιλιάδες τέτοια ειδώλια σώζονται, τα περισσότερα σκόπιμα σπασμένα, ίσως σε τελετές θεραπείας ή γονιμότητας. Μαζί με λίθινους κύκλους και περίτεχνες ταφές, αποκαλύπτουν έναν πνευματικό κόσμο αξιοσημείωτου βάθους σε μια κοινωνία ακόμη χιλιετίες μακριά από πόλεις ή βασιλείς."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -300,
      era: {
        en: "The Yayoi Period",
        el: "Η Περίοδος Γιαγιόι"
      },
      events: [
        {
          title: {
            en: "Rice, bronze and iron arrive",
            el: "Έρχονται το ρύζι, ο χαλκός και ο σίδηρος"
          },
          description: {
            en: "Migrants from the Asian mainland bring wet-rice paddy farming and metalworking, opening the Yayoi age.",
            el: "Μετανάστες από την ασιατική ήπειρο φέρνουν την υγρή καλλιέργεια ρυζιού σε ορυζώνες και τη μεταλλουργία, ανοίγοντας την εποχή των Γιαγιόι."
          },
          extendedDescription: {
            en: "Named for a district of Tokyo where their plainer pottery was first found, the Yayoi transformed the islands. Paddy fields fed a growing population, iron tools and bronze ritual objects spread, and society began to divide into rich and poor, ruler and ruled.",
            el: "Ονομασμένοι από μια συνοικία του Τόκιο όπου βρέθηκε πρώτα η απλούστερη κεραμική τους, οι Γιαγιόι μεταμόρφωσαν τα νησιά. Οι ορυζώνες έθρεψαν έναν αυξανόμενο πληθυσμό, σιδερένια εργαλεία και χάλκινα τελετουργικά αντικείμενα διαδόθηκαν, και η κοινωνία άρχισε να χωρίζεται σε πλούσιους και φτωχούς, άρχοντες και αρχόμενους."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -100,
      era: {
        en: "The Yayoi Period",
        el: "Η Περίοδος Γιαγιόι"
      },
      events: [
        {
          title: {
            en: "Chiefdoms and bronze bells",
            el: "Ηγεμονίες και χάλκινες καμπάνες"
          },
          description: {
            en: "Moated villages compete for land and water, and communities cast great ceremonial bronze bells, the dōtaku.",
            el: "Χωριά με τάφρους ανταγωνίζονται για γη και νερό, και κοινότητες χύνουν μεγάλες τελετουργικές χάλκινες καμπάνες, τα ντοτάκου."
          },
          extendedDescription: {
            en: "As paddy land became wealth worth fighting for, villages fortified themselves with ditches and watchtowers, and chiefs rose above the rest. The bronze dōtaku, too thin to ring and buried on hillsides, hint at farming rituals that bound these little polities together.",
            el: "Καθώς η γη των ορυζώνων έγινε πλούτος για τον οποίο άξιζε να πολεμά κανείς, τα χωριά οχυρώθηκαν με τάφρους και σκοπιές, και οι αρχηγοί υψώθηκαν πάνω από τους υπόλοιπους. Τα χάλκινα ντοτάκου, υπερβολικά λεπτά για να ηχούν και θαμμένα σε πλαγιές, υπαινίσσονται αγροτικές τελετές που έδεναν αυτές τις μικρές ηγεμονίες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 57,
      era: {
        en: "The Yayoi Period",
        el: "Η Περίοδος Γιαγιόι"
      },
      events: [
        {
          title: {
            en: "The gold seal of Na",
            el: "Η χρυσή σφραγίδα του Να"
          },
          description: {
            en: "The Chinese Han court grants a gold seal to an envoy from the country of Na — Japan's first appearance in written history.",
            el: "Η κινεζική αυλή των Χαν χορηγεί χρυσή σφραγίδα σε απεσταλμένο της χώρας Να — η πρώτη εμφάνιση της Ιαπωνίας στη γραπτή ιστορία."
          },
          extendedDescription: {
            en: "A Han history records that in 57 AD an embassy came from Na, one of the many statelets of Wa, as the Chinese called Japan. A gold seal reading \"King of Na of Wa, vassal of Han\" was dug up on Kyushu in 1784, a startling confirmation of that first contact across the sea.",
            el: "Μια ιστορία των Χαν καταγράφει ότι το 57 μ.Χ. ήρθε πρεσβεία από το Να, ένα από τα πολλά κρατίδια της Ουά, όπως αποκαλούσαν οι Κινέζοι την Ιαπωνία. Μια χρυσή σφραγίδα με την επιγραφή «Βασιλιάς του Να της Ουά, υποτελής των Χαν» ξεθάφτηκε στο Κιούσου το 1784, μια εκπληκτική επιβεβαίωση εκείνης της πρώτης επαφής μέσα από τη θάλασσα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 239,
      era: {
        en: "Queen Himiko",
        el: "Η Βασίλισσα Χιμίκο"
      },
      events: [
        {
          title: {
            en: "Himiko, shaman-queen of Yamatai",
            el: "Η Χιμίκο, ιέρεια-βασίλισσα του Γιαματάι"
          },
          description: {
            en: "The Chinese chronicles describe Himiko, a shaman-queen who ruled the land of Yamatai and sent tribute to the Wei court.",
            el: "Τα κινεζικά χρονικά περιγράφουν τη Χιμίκο, μια ιέρεια-βασίλισσα που κυβερνούσε τη χώρα του Γιαματάι κι έστελνε φόρο υποτελείας στην αυλή των Ουέι."
          },
          extendedDescription: {
            en: "According to the Wei Zhi, Himiko unified some thirty warring communities and ruled through religious authority, secluded and served by a thousand attendants. Where Yamatai lay — on Kyushu or in the Yamato plain — is still fiercely debated, for it touches the very origins of the later Japanese state.",
            el: "Σύμφωνα με το Ουέι Τζι, η Χιμίκο ένωσε περίπου τριάντα αντιμαχόμενες κοινότητες και κυβερνούσε μέσω θρησκευτικής εξουσίας, απομονωμένη και υπηρετούμενη από χίλιους ακολούθους. Το πού βρισκόταν το Γιαματάι — στο Κιούσου ή στην πεδιάδα του Γιαμάτο — συζητείται ακόμη έντονα, καθώς αγγίζει τις ίδιες τις απαρχές του μετέπειτα ιαπωνικού κράτους."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
