/** Gupta Empire — Αυτοκρατορία των Γκούπτα · Indian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const GUPTA_EMPIRE = {
  id: "gupta-empire" as const,
  label: {
    en: "Gupta Empire",
    el: "Αυτοκρατορία των Γκούπτα"
  },
  supertitle: {
    en: "India's Golden Age",
    el: "Η Χρυσή Εποχή της Ινδίας"
  },
  title: {
    en: "The Gupta Empire",
    el: "Η Αυτοκρατορία των Γκούπτα"
  },
  subtitle: {
    en: "From the founding of the Gupta line and the conquests of Samudragupta, through the brilliant reign of Chandragupta II, the plays of Kalidasa and the mathematics of Aryabhata, to the painted caves of Ajanta and the coming of the Huna invaders. Slide across the age remembered as India's golden age — when Sanskrit letters, Hindu art and Indian science reached a height whose ideas, from the zero to the decimal, would travel the whole world.",
    el: "Από την ίδρυση της γενιάς των Γκούπτα και τις κατακτήσεις του Σαμουντραγκούπτα, μέσα από τη λαμπρή βασιλεία του Τσαντραγκούπτα Β΄, τα έργα του Καλιντάσα και τα μαθηματικά του Αριαμπάτα, ως τα ζωγραφισμένα σπήλαια της Ατζάντα και την έλευση των εισβολέων Χούνα. Μετακινηθείτε στην εποχή που θυμούνται ως χρυσή εποχή της Ινδίας — όταν τα σανσκριτικά γράμματα, η ινδουιστική τέχνη κι η ινδική επιστήμη έφτασαν σε ένα ύψος του οποίου οι ιδέες, από το μηδέν ως το δεκαδικό, θα ταξίδευαν σε όλο τον κόσμο."
  },
  menuDescription: {
    en: "India's classical golden age: Samudragupta, Kalidasa, Aryabhata and the birth of the zero.",
    el: "Η κλασική χρυσή εποχή της Ινδίας: ο Σαμουντραγκούπτα, ο Καλιντάσα, ο Αριαμπάτα και η γέννηση του μηδενός."
  },
  footerLabel: {
    en: "Gupta Empire · 320–550 AD",
    el: "Αυτοκρατορία των Γκούπτα · 320–550 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Gupta Empire",
    el: "Η Αυτοκρατορία των Γκούπτα"
  },
  theme: THEMES.violet,
  timeline: [
    {
      year: 320,
      era: {
        en: "The Founding",
        el: "Η Ίδρυση"
      },
      events: [
        {
          title: {
            en: "Chandragupta I founds the Guptas",
            el: "Ο Τσαντραγκούπτα Α΄ ιδρύει τους Γκούπτα"
          },
          description: {
            en: "From Magadha, Chandragupta I builds a new empire that will reunite much of northern India.",
            el: "Από τη Μαγκάντα, ο Τσαντραγκούπτα Α΄ χτίζει μια νέα αυτοκρατορία που θα επανενώσει μεγάλο μέρος της βόρειας Ινδίας."
          },
          extendedDescription: {
            en: "After centuries of division, a new dynasty rose in the old Mauryan heartland. Chandragupta I, strengthened by a royal marriage into the Licchavi clan, took the grand title Maharajadhiraja, \"great king of kings,\" and laid the foundation of an empire that would preside over a classical flowering of Indian civilisation.",
            el: "Ύστερα από αιώνες διαίρεσης, μια νέα δυναστεία υψώθηκε στην παλιά μαυρυακή καρδιά. Ο Τσαντραγκούπτα Α΄, ενισχυμένος από βασιλικό γάμο με τη φυλή των Λιτσάβι, πήρε τον μεγαλοπρεπή τίτλο Μαχαρατζαντιράτζα, «μέγας βασιλιάς των βασιλέων», κι έθεσε το θεμέλιο μιας αυτοκρατορίας που θα προήδρευε σε μια κλασική άνθηση του ινδικού πολιτισμού."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Queen_Kumaradevi_and_King_Chandragupta_I_on_a_coin.jpg?width=1024",
            alt: {
              en: "A gold coin of Chandragupta I",
              el: "Χρυσό νόμισμα του Τσαντραγκούπτα Α΄"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 350,
      era: {
        en: "The Conqueror",
        el: "Ο Κατακτητής"
      },
      events: [
        {
          title: {
            en: "Samudragupta the conqueror",
            el: "Ο Σαμουντραγκούπτα ο κατακτητής"
          },
          description: {
            en: "Samudragupta extends Gupta power across India in a sweep of conquests praised on the Allahabad pillar.",
            el: "Ο Σαμουντραγκούπτα επεκτείνει τη δύναμη των Γκούπτα σε όλη την Ινδία με μια σειρά κατακτήσεων εγκωμιασμένων στη στήλη του Αλαχαμπάντ."
          },
          extendedDescription: {
            en: "A warrior and poet, Samudragupta subdued the kings of the north and marched deep into the south, taking tribute and homage. A famous inscription on an old Ashokan pillar celebrates his victories and his gifts as a musician and scholar. Under him the Guptas became the paramount power of the subcontinent.",
            el: "Πολεμιστής και ποιητής, ο Σαμουντραγκούπτα υπέταξε τους βασιλείς του βορρά και βάδισε βαθιά στον νότο, παίρνοντας φόρο υποτελείας και υποταγή. Μια περίφημη επιγραφή σε μια παλιά στήλη του Ασόκα εγκωμιάζει τις νίκες του και τα χαρίσματά του ως μουσικού και λογίου. Επί των ημερών του οι Γκούπτα έγιναν η υπέρτατη δύναμη της υποηπείρου."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/SamudraguptaCoin.png?width=1024",
            alt: {
              en: "A gold coin of Samudragupta",
              el: "Χρυσό νόμισμα του Σαμουντραγκούπτα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 380,
      era: {
        en: "The Height of Empire",
        el: "Το Απόγειο της Αυτοκρατορίας"
      },
      events: [
        {
          title: {
            en: "Chandragupta II and the peak of empire",
            el: "Ο Τσαντραγκούπτα Β΄ και το απόγειο της αυτοκρατορίας"
          },
          description: {
            en: "Chandragupta II, called Vikramaditya, brings the empire to its height; the Chinese pilgrim Fa-Xian marvels at its peace.",
            el: "Ο Τσαντραγκούπτα Β΄, ο επονομαζόμενος Βικραμαντίτια, φέρνει την αυτοκρατορία στο απόγειό της· ο Κινέζος προσκυνητής Φα-Ξιάν θαυμάζει την ειρήνη της."
          },
          extendedDescription: {
            en: "Under Chandragupta II — \"Sun of Valour\" — the empire reached its greatest extent and prosperity. The Buddhist pilgrim Fa-Xian, travelling from China, described a contented, well-governed land of free hospitals and honest officials. His court was adorned by the \"nine gems,\" the finest scholars and poets of the age.",
            el: "Υπό τον Τσαντραγκούπτα Β΄ — «Ήλιο της Ανδρείας» — η αυτοκρατορία έφτασε στη μεγαλύτερη έκταση και ευημερία της. Ο βουδιστής προσκυνητής Φα-Ξιάν, ταξιδεύοντας από την Κίνα, περιέγραψε μια ικανοποιημένη, καλοκυβερνημένη χώρα με δωρεάν νοσοκομεία και έντιμους αξιωματούχους. Η αυλή του κοσμούνταν από τα «εννέα κοσμήματα», τους καλύτερους λογίους και ποιητές της εποχής."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/ChandraguptaIIOnHorse.jpg?width=1024",
            alt: {
              en: "A coin of Chandragupta II Vikramaditya",
              el: "Νόμισμα του Τσαντραγκούπτα Β΄ Βικραμαντίτια"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 405,
      era: {
        en: "The Golden Age",
        el: "Η Χρυσή Εποχή"
      },
      events: [
        {
          title: {
            en: "Kalidasa and classical Sanskrit",
            el: "Ο Καλιντάσα και τα κλασικά σανσκριτικά"
          },
          description: {
            en: "The poet Kalidasa writes plays and verse that become the summit of classical Sanskrit literature.",
            el: "Ο ποιητής Καλιντάσα γράφει έργα και στίχους που γίνονται η κορυφή της κλασικής σανσκριτικής λογοτεχνίας."
          },
          extendedDescription: {
            en: "The Gupta peace nourished a brilliant culture. Kalidasa, the greatest poet and dramatist of India, wrote the play Shakuntala and the lyric Meghaduta, works of such grace they have been loved for fifteen centuries. Around him flourished a classical age of literature, music, dance and refined courtly life.",
            el: "Η ειρήνη των Γκούπτα έθρεψε έναν λαμπρό πολιτισμό. Ο Καλιντάσα, ο μεγαλύτερος ποιητής και δραματουργός της Ινδίας, έγραψε το έργο Σακουντάλα και το λυρικό Μεγκαντούτα, έργα τόσο χαριτωμένα που αγαπιούνται εδώ και δεκαπέντε αιώνες. Γύρω του άνθισε μια κλασική εποχή λογοτεχνίας, μουσικής, χορού και εκλεπτυσμένης αυλικής ζωής."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kalidasa_inditing_the_cloud_Messenger%2C_A.D._375.jpg?width=1024",
            alt: {
              en: "The classical Sanskrit poet Kalidasa",
              el: "Ο κλασικός σανσκριτικός ποιητής Καλιντάσα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 450,
      era: {
        en: "The Golden Age",
        el: "Η Χρυσή Εποχή"
      },
      events: [
        {
          title: {
            en: "The painted caves of Ajanta",
            el: "Τα ζωγραφισμένα σπήλαια της Ατζάντα"
          },
          description: {
            en: "The murals of Ajanta and the rise of the Hindu temple mark a high point of classical Indian art.",
            el: "Οι τοιχογραφίες της Ατζάντα και η άνοδος του ινδουιστικού ναού σηματοδοτούν μια κορυφή της κλασικής ινδικής τέχνης."
          },
          extendedDescription: {
            en: "In the cliffs of Ajanta, painters filled Buddhist cave-halls with murals of the Buddha's past lives, glowing with colour and tender feeling — the masterpiece of ancient Indian painting. In the same era the free-standing stone Hindu temple took shape, beginning a tradition of sacred architecture that would cover the subcontinent.",
            el: "Στους γκρεμούς της Ατζάντα, ζωγράφοι γέμισαν βουδιστικές σπηλαιώδεις αίθουσες με τοιχογραφίες των προηγούμενων ζωών του Βούδα, που λάμπουν με χρώμα και τρυφερό συναίσθημα — το αριστούργημα της αρχαίας ινδικής ζωγραφικής. Την ίδια εποχή πήρε μορφή ο ελεύθερος λίθινος ινδουιστικός ναός, ξεκινώντας μια παράδοση ιερής αρχιτεκτονικής που θα κάλυπτε την υποήπειρο."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ajanta_%2863%29.jpg?width=1024",
            alt: {
              en: "The painted Buddhist caves of Ajanta",
              el: "Τα ζωγραφισμένα βουδιστικά σπήλαια της Ατζάντα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 499,
      era: {
        en: "The Golden Age",
        el: "Η Χρυσή Εποχή"
      },
      events: [
        {
          title: {
            en: "Aryabhata and the science of numbers",
            el: "Ο Αριαμπάτα και η επιστήμη των αριθμών"
          },
          description: {
            en: "The mathematician Aryabhata advances astronomy and the decimal system that gave the world the zero.",
            el: "Ο μαθηματικός Αριαμπάτα προάγει την αστρονομία και το δεκαδικό σύστημα που έδωσε στον κόσμο το μηδέν."
          },
          extendedDescription: {
            en: "Gupta scholars made India a wellspring of science. Aryabhata calculated the value of pi, proposed that the earth rotates on its axis, and worked with the place-value decimal system. The Indian concept of zero and the decimal numerals, later carried by Arab scholars to Europe, became the foundation of all modern mathematics.",
            el: "Οι λόγιοι των Γκούπτα έκαναν την Ινδία πηγή της επιστήμης. Ο Αριαμπάτα υπολόγισε την τιμή του πι, πρότεινε ότι η γη περιστρέφεται γύρω από τον άξονά της, και δούλεψε με το δεκαδικό σύστημα θέσης. Η ινδική έννοια του μηδενός και οι δεκαδικοί αριθμοί, που αργότερα μετέφεραν οι Άραβες λόγιοι στην Ευρώπη, έγιναν το θεμέλιο όλων των σύγχρονων μαθηματικών."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Aryabhatta_of_Bihar.jpg?width=1024",
            alt: {
              en: "A statue of the mathematician Aryabhata",
              el: "Άγαλμα του μαθηματικού Αριαμπάτα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 500,
      era: {
        en: "The Decline",
        el: "Η Παρακμή"
      },
      events: [
        {
          title: {
            en: "The Huna invasions",
            el: "Οι εισβολές των Χούνα"
          },
          description: {
            en: "Waves of Huna invaders from Central Asia batter the empire, and Gupta power crumbles.",
            el: "Κύματα εισβολέων Χούνα από την Κεντρική Ασία πλήττουν την αυτοκρατορία, κι η δύναμη των Γκούπτα καταρρέει."
          },
          extendedDescription: {
            en: "From the north-west came the Hunas — the Hephthalites, or White Huns — whose repeated invasions drained the empire's strength. Though the Guptas won victories, the cost broke them, and by the mid-sixth century the empire had fractured into regional kingdoms. The golden age was over, but its literature, science and art remained the classical measure of Indian civilisation.",
            el: "Από τη βορειοδύση ήρθαν οι Χούνα — οι Εφθαλίτες, ή Λευκοί Ούννοι — των οποίων οι επανειλημμένες εισβολές στράγγισαν τη δύναμη της αυτοκρατορίας. Αν και οι Γκούπτα κέρδισαν νίκες, το κόστος τους συνέτριψε, και ως τα μέσα του έκτου αιώνα η αυτοκρατορία είχε κατακερματιστεί σε περιφερειακά βασίλεια. Η χρυσή εποχή είχε τελειώσει, όμως η λογοτεχνία, η επιστήμη κι η τέχνη της παρέμειναν το κλασικό μέτρο του ινδικού πολιτισμού."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Alchon_Khingila_portrait.jpg?width=1024",
            alt: {
              en: "A coin of the Alchon Huns",
              el: "Νόμισμα των Ούννων Αλχόν"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
