/** Kofun & Asuka Period — Περίοδος Κοφούν & Άσουκα · Japanese History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const KOFUN_ASUKA_JAPAN = {
  id: "kofun-asuka-japan" as const,
  label: {
    en: "Kofun & Asuka Period",
    el: "Περίοδος Κοφούν & Άσουκα"
  },
  supertitle: {
    en: "古墳・飛鳥 · Yamato Japan",
    el: "Ιαπωνία του Γιαμάτο"
  },
  title: {
    en: "The Kofun & Asuka Period",
    el: "Η Περίοδος Κοφούν & Άσουκα"
  },
  subtitle: {
    en: "From the giant keyhole tomb-mounds of the Yamato kings and their clay haniwa guardians, through the coming of Buddhism from Korea and the reforms of Prince Shōtoku, to the Taika revolution that remade Japan on the Chinese model and the first true emperors. Slide across the age when scattered chiefdoms became a state, and the islands took the name Nihon — the source of the sun.",
    el: "Από τους γιγαντιαίους τυμβώδεις τάφους σε σχήμα κλειδαρότρυπας των βασιλέων του Γιαμάτο και τους πήλινους φρουρούς χανίβα, μέσα από την έλευση του Βουδισμού από την Κορέα και τις μεταρρυθμίσεις του Πρίγκιπα Σοτόκου, ως την επανάσταση Τάικα που αναδιαμόρφωσε την Ιαπωνία κατά το κινεζικό πρότυπο και τους πρώτους πραγματικούς αυτοκράτορες. Μετακινηθείτε στην εποχή που διάσπαρτες ηγεμονίες έγιναν κράτος και τα νησιά πήραν το όνομα Νιχόν — η πηγή του ήλιου."
  },
  menuDescription: {
    en: "Giant tomb-mounds, the coming of Buddhism, Prince Shōtoku and the birth of the Yamato state.",
    el: "Γιγαντιαίοι τύμβοι, η έλευση του Βουδισμού, ο Πρίγκιπας Σοτόκου και η γέννηση του κράτους του Γιαμάτο."
  },
  footerLabel: {
    en: "Kofun & Asuka Period · 300–710 AD",
    el: "Περίοδος Κοφούν & Άσουκα · 300–710 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Kofun & Asuka Period",
    el: "Η Περίοδος Κοφούν & Άσουκα"
  },
  theme: THEMES.bronze,
  timeline: [
    {
      year: 300,
      era: {
        en: "The Kofun Period",
        el: "Η Περίοδος Κοφούν"
      },
      events: [
        {
          title: {
            en: "The age of the great tombs",
            el: "Η εποχή των μεγάλων τάφων"
          },
          description: {
            en: "Powerful chiefs raise enormous keyhole-shaped burial mounds, the kofun that give the age its name.",
            el: "Ισχυροί αρχηγοί ανεγείρουν τεράστιους ταφικούς τύμβους σε σχήμα κλειδαρότρυπας, τα κοφούν που δίνουν το όνομά τους στην εποχή."
          },
          extendedDescription: {
            en: "The largest, attributed to Emperor Nintoku near Osaka, is nearly half a kilometre long — one of the biggest tombs on earth. Ringed by moats and topped with clay haniwa figures of warriors, horses and houses, the kofun proclaimed the power of an emerging elite that would coalesce into the Yamato court.",
            el: "Ο μεγαλύτερος, αποδιδόμενος στον Αυτοκράτορα Νιντόκου κοντά στην Οσάκα, έχει μήκος σχεδόν μισό χιλιόμετρο — ένας από τους μεγαλύτερους τάφους στη γη. Περιτριγυρισμένα από τάφρους και στεφανωμένα με πήλινες μορφές χανίβα πολεμιστών, αλόγων και σπιτιών, τα κοφούν διακήρυσσαν τη δύναμη μιας αναδυόμενης ελίτ που θα συνενωνόταν στην αυλή του Γιαμάτο."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 400,
      era: {
        en: "The Yamato Court",
        el: "Η Αυλή του Γιαμάτο"
      },
      events: [
        {
          title: {
            en: "The rise of Yamato",
            el: "Η άνοδος του Γιαμάτο"
          },
          description: {
            en: "The kings of the Yamato plain extend their overlordship across central Japan, tied by trade and war to the kingdoms of Korea.",
            el: "Οι βασιλείς της πεδιάδας του Γιαμάτο επεκτείνουν την επικυριαρχία τους στην κεντρική Ιαπωνία, δεμένοι με εμπόριο και πόλεμο με τα βασίλεια της Κορέας."
          },
          extendedDescription: {
            en: "Ruling through a hierarchy of aristocratic clans, the uji, the Yamato kings drew iron, horses, scribes and craftsmen from allied Baekje. Immigrant families brought writing in Chinese characters, weaving and metallurgy, knitting the young state into the wider civilization of East Asia.",
            el: "Κυβερνώντας μέσα από μια ιεραρχία αριστοκρατικών γενών, των ουτζί, οι βασιλείς του Γιαμάτο αντλούσαν σίδηρο, άλογα, γραφείς και τεχνίτες από τη σύμμαχο Μπεκτσέ. Μεταναστευτικές οικογένειες έφεραν τη γραφή με κινεζικά ιδεογράμματα, την υφαντική και τη μεταλλουργία, εντάσσοντας το νεαρό κράτος στον ευρύτερο πολιτισμό της Ανατολικής Ασίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 538,
      era: {
        en: "The Coming of Buddhism",
        el: "Η Έλευση του Βουδισμού"
      },
      events: [
        {
          title: {
            en: "Buddhism reaches Japan",
            el: "Ο Βουδισμός φτάνει στην Ιαπωνία"
          },
          description: {
            en: "A mission from the Korean kingdom of Baekje brings Buddhist images and scriptures to the Yamato court.",
            el: "Μια αποστολή από το κορεατικό βασίλειο της Μπεκτσέ φέρνει βουδιστικές εικόνες και γραφές στην αυλή του Γιαμάτο."
          },
          extendedDescription: {
            en: "The new faith split the court. The Soga clan embraced it while the Mononobe and Nakatomi defended the native gods, the kami. The Soga prevailed, and Buddhism — with its temples, learning and links to the continent — became a pillar of the state, worshipped alongside, not instead of, the older Shintō spirits.",
            el: "Η νέα πίστη διχάζει την αυλή. Το γένος των Σόγκα την αγκάλιασε ενώ οι Μονονόμπε και οι Νακατόμι υπερασπίστηκαν τους ντόπιους θεούς, τους κάμι. Οι Σόγκα επικράτησαν, και ο Βουδισμός — με τους ναούς, τη μάθηση και τους δεσμούς του με την ήπειρο — έγινε πυλώνας του κράτους, λατρευόμενος παράλληλα, όχι αντί, με τα παλαιότερα πνεύματα του Σιντό."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 604,
      era: {
        en: "Prince Shōtoku",
        el: "Ο Πρίγκιπας Σοτόκου"
      },
      events: [
        {
          title: {
            en: "Prince Shōtoku's constitution",
            el: "Το σύνταγμα του Πρίγκιπα Σοτόκου"
          },
          description: {
            en: "Regent Prince Shōtoku issues the Seventeen-Article Constitution, urging harmony, Buddhist virtue and obedience to the throne.",
            el: "Ο αντιβασιλέας Πρίγκιπας Σοτόκου εκδίδει το Σύνταγμα των Δεκαεπτά Άρθρων, προτρέποντας σε αρμονία, βουδιστική αρετή και υπακοή στον θρόνο."
          },
          extendedDescription: {
            en: "More a set of moral principles than laws, the constitution set out a Chinese-style ideal of centralized, ethical government. Shōtoku sent embassies to Sui China as an equal, patronized Buddhism, and founded the temple of Hōryū-ji, whose wooden halls still stand as the oldest in the world.",
            el: "Περισσότερο σύνολο ηθικών αρχών παρά νόμων, το σύνταγμα καθόρισε ένα κινεζικού τύπου ιδεώδες συγκεντρωτικής, ηθικής διακυβέρνησης. Ο Σοτόκου έστειλε πρεσβείες στην Κίνα των Σούι ως ίσος προς ίσο, προστάτευσε τον Βουδισμό και ίδρυσε τον ναό Χορίτζι, του οποίου οι ξύλινες αίθουσες στέκουν ακόμη ως οι αρχαιότερες στον κόσμο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 645,
      era: {
        en: "The Taika Reform",
        el: "Η Μεταρρύθμιση Τάικα"
      },
      events: [
        {
          title: {
            en: "The Taika Reform",
            el: "Η Μεταρρύθμιση Τάικα"
          },
          description: {
            en: "After the fall of the overmighty Soga, sweeping reforms remake Japan as a centralized, Chinese-style empire.",
            el: "Μετά την πτώση των υπερβολικά ισχυρών Σόγκα, σαρωτικές μεταρρυθμίσεις αναπλάθουν την Ιαπωνία ως ένα συγκεντρωτικό, κινεζικού τύπου κράτος."
          },
          extendedDescription: {
            en: "In a palace coup, Prince Naka-no-Ōe and Nakatomi no Kamatari destroyed the Soga and launched the Taika (\"Great Change\") reforms. Land and people were declared the emperor's, provinces and taxes were reorganized on the Tang pattern, and the ruler took the exalted title tennō — heavenly sovereign.",
            el: "Σε πραξικόπημα του παλατιού, ο Πρίγκιπας Νάκα-νο-Όε και ο Νακατόμι νο Καματάρι εξόντωσαν τους Σόγκα και ξεκίνησαν τις μεταρρυθμίσεις Τάικα («Μεγάλη Αλλαγή»). Η γη και ο λαός ανακηρύχθηκαν ιδιοκτησία του αυτοκράτορα, επαρχίες και φόροι αναδιοργανώθηκαν κατά το πρότυπο των Τανγκ, και ο ηγεμόνας πήρε τον εξυψωμένο τίτλο τενό — ουράνιος κυρίαρχος."
          },
          category: "political"
        }
      ]
    },
    {
      year: 672,
      era: {
        en: "Emperor Tenmu",
        el: "Ο Αυτοκράτορας Τένμου"
      },
      events: [
        {
          title: {
            en: "The Jinshin War and Emperor Tenmu",
            el: "Ο Πόλεμος Τζινσίν και ο Αυτοκράτορας Τένμου"
          },
          description: {
            en: "A war of succession brings Emperor Tenmu to the throne, who exalts the imperial house and its divine descent.",
            el: "Ένας πόλεμος διαδοχής ανεβάζει στον θρόνο τον Αυτοκράτορα Τένμου, που εξυψώνει τον αυτοκρατορικό οίκο και τη θεϊκή του καταγωγή."
          },
          extendedDescription: {
            en: "Victorious in the fierce Jinshin War of 672, Tenmu ruled with new authority, strengthening the bureaucracy and ordering the histories that would justify his line. It was in his reign that the ideology of a heaven-descended, unbroken imperial dynasty took firm shape.",
            el: "Νικητής στον σφοδρό Πόλεμο Τζινσίν του 672, ο Τένμου κυβέρνησε με νέα εξουσία, ενισχύοντας τη γραφειοκρατία και παραγγέλνοντας τις ιστορίες που θα δικαίωναν τη γενιά του. Στη βασιλεία του πήρε στέρεη μορφή η ιδεολογία μιας ουρανοκατέβατης, αδιάσπαστης αυτοκρατορικής δυναστείας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 701,
      era: {
        en: "The Ritsuryō State",
        el: "Το Κράτος Ριτσουριό"
      },
      events: [
        {
          title: {
            en: "The Taihō Code",
            el: "Ο Κώδικας Τάιχο"
          },
          description: {
            en: "The Taihō Code lays down a complete legal system, completing Japan's transformation into a bureaucratic empire.",
            el: "Ο Κώδικας Τάιχο θεσπίζει ένα πλήρες νομικό σύστημα, ολοκληρώνοντας τη μεταμόρφωση της Ιαπωνίας σε γραφειοκρατικό κράτος."
          },
          extendedDescription: {
            en: "Modelled closely on Tang law, the Taihō Code organized the government into ministries, defined ranks and taxes, and distributed rice land to the peasantry. This ritsuryō system, however imperfectly it worked in practice, framed the Japanese state for centuries and set the stage for the founding of a permanent capital at Nara.",
            el: "Διαμορφωμένος στενά κατά το δίκαιο των Τανγκ, ο Κώδικας Τάιχο οργάνωσε τη διοίκηση σε υπουργεία, όρισε βαθμούς και φόρους και διένειμε ορυζώνες στους αγρότες. Αυτό το σύστημα ριτσουριό, όσο ατελώς κι αν λειτούργησε στην πράξη, πλαισίωσε το ιαπωνικό κράτος για αιώνες και προετοίμασε την ίδρυση μόνιμης πρωτεύουσας στη Νάρα."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
