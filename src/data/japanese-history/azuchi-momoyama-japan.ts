/** Azuchi–Momoyama Period — Περίοδος Αζούτσι–Μομογιάμα · Japanese History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const AZUCHI_MOMOYAMA_JAPAN = {
  id: "azuchi-momoyama-japan" as const,
  label: {
    en: "Azuchi–Momoyama Period",
    el: "Περίοδος Αζούτσι–Μομογιάμα"
  },
  supertitle: {
    en: "安土桃山 · The Unifiers",
    el: "Οι Ενοποιητές"
  },
  title: {
    en: "The Azuchi–Momoyama Period",
    el: "Η Περίοδος Αζούτσι–Μομογιάμα"
  },
  subtitle: {
    en: "From Oda Nobunaga's brutal campaigns to unite Japan, through Toyotomi Hideyoshi's completion of the conquest, his sword hunt and grand castles, and the doomed invasions of Korea, to the decisive clash at Sekigahara that made Tokugawa Ieyasu master of the realm. Slide across a short, violent generation of gunfire and gold-leaf, when three warlords ended a century of chaos and forged the modern Japanese state.",
    el: "Από τις βάναυσες εκστρατείες του Όντα Νομπουνάγκα για την ενοποίηση της Ιαπωνίας, μέσα από την ολοκλήρωση της κατάκτησης από τον Τογιοτόμι Χιντεγιόσι, το κυνήγι των σπαθιών και τα μεγαλοπρεπή του κάστρα, και τις καταδικασμένες εισβολές στην Κορέα, ως την αποφασιστική σύγκρουση στο Σεκιγκαχάρα που έκανε τον Τοκουγκάουα Ιεγιάσου κύριο του βασιλείου. Μετακινηθείτε σε μια σύντομη, βίαιη γενιά πυρός και χρυσού, όταν τρεις πολέμαρχοι τερμάτισαν έναν αιώνα χάους και σφυρηλάτησαν το σύγχρονο ιαπωνικό κράτος."
  },
  menuDescription: {
    en: "Nobunaga, Hideyoshi and the reunification of Japan, ending at the battle of Sekigahara.",
    el: "Ο Νομπουνάγκα, ο Χιντεγιόσι και η επανένωση της Ιαπωνίας, με κατάληξη τη μάχη του Σεκιγκαχάρα."
  },
  footerLabel: {
    en: "Azuchi–Momoyama Period · 1568–1600 AD",
    el: "Περίοδος Αζούτσι–Μομογιάμα · 1568–1600 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Azuchi–Momoyama Period",
    el: "Η Περίοδος Αζούτσι–Μομογιάμα"
  },
  theme: THEMES.crimson,
  timeline: [
    {
      year: 1568,
      era: {
        en: "Oda Nobunaga",
        el: "Ο Όντα Νομπουνάγκα"
      },
      events: [
        {
          title: {
            en: "Nobunaga enters Kyoto",
            el: "Ο Νομπουνάγκα εισέρχεται στο Κιότο"
          },
          description: {
            en: "Oda Nobunaga marches into the capital and begins the ruthless reunification of a shattered Japan.",
            el: "Ο Όντα Νομπουνάγκα βαδίζει στην πρωτεύουσα και ξεκινά την αδίστακτη επανένωση μιας κατακερματισμένης Ιαπωνίας."
          },
          extendedDescription: {
            en: "A minor lord of daring and cruelty, Nobunaga made himself the strongest man in Japan through gunpowder tactics and terror. He crushed rival warlords, broke the armies of the militant Buddhist monasteries — burning Mount Hiei — and welcomed European guns and missionaries as tools against his enemies.",
            el: "Ένας δευτερεύων άρχοντας τόλμης και σκληρότητας, ο Νομπουνάγκα έγινε ο ισχυρότερος άνθρωπος στην Ιαπωνία μέσω τακτικών πυρίτιδας και τρόμου. Συνέτριψε αντίπαλους πολέμαρχους, διέλυσε τους στρατούς των μαχητικών βουδιστικών μοναστηριών — καίγοντας το όρος Χιέι — και καλωσόρισε τα ευρωπαϊκά όπλα και τους ιεραπόστολους ως εργαλεία κατά των εχθρών του."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1575,
      era: {
        en: "Oda Nobunaga",
        el: "Ο Όντα Νομπουνάγκα"
      },
      events: [
        {
          title: {
            en: "The Battle of Nagashino",
            el: "Η Μάχη του Ναγκασίνο"
          },
          description: {
            en: "At Nagashino, Nobunaga's massed gunners cut down the famous cavalry of the Takeda, proving the new warfare.",
            el: "Στο Ναγκασίνο, οι μαζικοί τυφεκιοφόροι του Νομπουνάγκα θερίζουν το ξακουστό ιππικό των Τακέντα, αποδεικνύοντας τη νέα μορφή πολέμου."
          },
          extendedDescription: {
            en: "Sheltering some three thousand gunmen behind wooden palisades, Nobunaga broke the celebrated Takeda horsemen with rolling volleys of fire. The battle became a symbol of how firearms and disciplined foot soldiers had overturned the age of the mounted samurai, and it confirmed Nobunaga's dominance of central Japan.",
            el: "Προστατεύοντας περίπου τρεις χιλιάδες τυφεκιοφόρους πίσω από ξύλινα παλισάντ, ο Νομπουνάγκα συνέτριψε τους περίφημους ιππείς των Τακέντα με διαδοχικές ομοβροντίες. Η μάχη έγινε σύμβολο του πώς τα πυροβόλα και οι πειθαρχημένοι πεζοί είχαν ανατρέψει την εποχή του έφιππου σαμουράι, και επιβεβαίωσε την κυριαρχία του Νομπουνάγκα στην κεντρική Ιαπωνία."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1582,
      era: {
        en: "The Honnō-ji Incident",
        el: "Το Συμβάν του Χονό-τζι"
      },
      events: [
        {
          title: {
            en: "The death of Nobunaga",
            el: "Ο θάνατος του Νομπουνάγκα"
          },
          description: {
            en: "Betrayed by his general Akechi Mitsuhide, Nobunaga is trapped at the Honnō-ji temple and dies as it burns.",
            el: "Προδομένος από τον στρατηγό του Ακέτσι Μιτσουχίντε, ο Νομπουνάγκα παγιδεύεται στον ναό Χονό-τζι και πεθαίνει καθώς αυτός καίγεται."
          },
          extendedDescription: {
            en: "With Japan almost in his grasp, Nobunaga was surprised in Kyoto by a treacherous vassal and took his own life amid the flames. His ablest general, Toyotomi Hideyoshi, avenged him within days and seized his mantle — a peasant-born soldier now poised to complete the unification of the realm.",
            el: "Με την Ιαπωνία σχεδόν στα χέρια του, ο Νομπουνάγκα αιφνιδιάστηκε στο Κιότο από έναν δόλιο υποτελή κι έθεσε τέρμα στη ζωή του μέσα στις φλόγες. Ο ικανότερος στρατηγός του, ο Τογιοτόμι Χιντεγιόσι, τον εκδικήθηκε μέσα σε λίγες ημέρες και άρπαξε τον μανδύα του — ένας στρατιώτης αγροτικής καταγωγής έτοιμος τώρα να ολοκληρώσει την ενοποίηση του βασιλείου."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1588,
      era: {
        en: "Toyotomi Hideyoshi",
        el: "Ο Τογιοτόμι Χιντεγιόσι"
      },
      events: [
        {
          title: {
            en: "Hideyoshi's sword hunt",
            el: "Το κυνήγι των σπαθιών του Χιντεγιόσι"
          },
          description: {
            en: "Master of Japan, Hideyoshi disarms the peasantry and freezes the social order between warrior and farmer.",
            el: "Κύριος της Ιαπωνίας, ο Χιντεγιόσι αφοπλίζει τους αγρότες και παγώνει την κοινωνική τάξη ανάμεσα στον πολεμιστή και τον γεωργό."
          },
          extendedDescription: {
            en: "Having unified the country by 1590, Hideyoshi set out to secure it. His famous \"sword hunt\" stripped weapons from commoners, and his surveys fixed each person as either samurai or peasant. These measures ended the social fluidity of the warring states and laid the groundwork for the rigid order of the Tokugawa peace.",
            el: "Έχοντας ενοποιήσει τη χώρα ως το 1590, ο Χιντεγιόσι επιχείρησε να την ασφαλίσει. Το περίφημο «κυνήγι των σπαθιών» αφαίρεσε τα όπλα από τους απλούς ανθρώπους, και οι απογραφές του καθήλωσαν τον καθένα ως σαμουράι ή αγρότη. Τα μέτρα αυτά τερμάτισαν την κοινωνική ρευστότητα των αντιμαχόμενων κρατών και έθεσαν τα θεμέλια της άκαμπτης τάξης της ειρήνης των Τοκουγκάουα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1592,
      era: {
        en: "The Korean Invasions",
        el: "Οι Εισβολές στην Κορέα"
      },
      events: [
        {
          title: {
            en: "The invasions of Korea",
            el: "Οι εισβολές στην Κορέα"
          },
          description: {
            en: "Hideyoshi hurls vast armies against Korea in a bid to conquer Ming China, only to be ground down and repulsed.",
            el: "Ο Χιντεγιόσι εξαπολύει τεράστιους στρατούς κατά της Κορέας σε μια απόπειρα να κατακτήσει την Κίνα των Μινγκ, μόνο για να καθηλωθεί και να αποκρουστεί."
          },
          extendedDescription: {
            en: "In two great campaigns Japanese armies overran much of Korea but could not hold it. The Korean admiral Yi Sun-sin devastated their fleets with his armoured \"turtle ships,\" Ming armies poured in, and guerrillas harried the invaders. The wars ended in withdrawal on Hideyoshi's death in 1598, having brought ruin to Korea and glory to none.",
            el: "Σε δύο μεγάλες εκστρατείες ιαπωνικοί στρατοί κατέκλυσαν μεγάλο μέρος της Κορέας αλλά δεν μπόρεσαν να την κρατήσουν. Ο Κορεάτης ναύαρχος Γι Σουν-σιν αφάνισε τους στόλους τους με τα θωρακισμένα «χελωνόπλοια» του, στρατοί των Μινγκ εισέρρευσαν, και αντάρτες παρενοχλούσαν τους εισβολείς. Οι πόλεμοι έληξαν με αποχώρηση στον θάνατο του Χιντεγιόσι το 1598, έχοντας φέρει καταστροφή στην Κορέα και δόξα σε κανέναν."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1600,
      era: {
        en: "The Battle of Sekigahara",
        el: "Η Μάχη του Σεκιγκαχάρα"
      },
      events: [
        {
          title: {
            en: "The Battle of Sekigahara",
            el: "Η Μάχη του Σεκιγκαχάρα"
          },
          description: {
            en: "Tokugawa Ieyasu triumphs at Sekigahara, the decisive battle that leaves him the undisputed master of Japan.",
            el: "Ο Τοκουγκάουα Ιεγιάσου θριαμβεύει στο Σεκιγκαχάρα, την αποφασιστική μάχη που τον αφήνει αδιαμφισβήτητο κύριο της Ιαπωνίας."
          },
          extendedDescription: {
            en: "After Hideyoshi's death, his followers split, and the greatest lords gathered on a misty field in two vast coalitions. A well-timed defection turned the battle to Ieyasu, who shattered his rivals in a single day. Within three years he would take the title of shogun and found a dynasty that ruled Japan for over two and a half centuries.",
            el: "Μετά τον θάνατο του Χιντεγιόσι, οι οπαδοί του διχάστηκαν, και οι μεγαλύτεροι άρχοντες συγκεντρώθηκαν σε ένα ομιχλώδες πεδίο σε δύο τεράστιους συνασπισμούς. Μια εύστοχα χρονισμένη αυτομόληση έγειρε τη μάχη υπέρ του Ιεγιάσου, που συνέτριψε τους αντιπάλους του σε μία μόνο ημέρα. Μέσα σε τρία χρόνια θα έπαιρνε τον τίτλο του σογκούν και θα ίδρυε μια δυναστεία που κυβέρνησε την Ιαπωνία για πάνω από δυόμισι αιώνες."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
