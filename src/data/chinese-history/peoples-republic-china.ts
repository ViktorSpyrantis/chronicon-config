/** People's Republic of China — Λαϊκή Δημοκρατία της Κίνας · Chinese History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const PEOPLES_REPUBLIC_CHINA = {
  id: "peoples-republic-china" as const,
  label: {
    en: "People's Republic of China",
    el: "Λαϊκή Δημοκρατία της Κίνας"
  },
  supertitle: {
    en: "中華人民共和國 · PRC",
    el: "ΛΔ Κίνας"
  },
  title: {
    en: "The People's Republic of China",
    el: "Η Λαϊκή Δημοκρατία της Κίνας"
  },
  subtitle: {
    en: "From Mao's proclamation of the People's Republic through the Great Leap Forward and the Cultural Revolution, the opening to the United States, and Deng Xiaoping's reforms that transformed the economy, to the Tiananmen protests and China's rise to global power in the twenty-first century. Slide across the years to read the major events that made modern China.",
    el: "Από την ανακήρυξη της Λαϊκής Δημοκρατίας από τον Μάο, μέσα από το Μεγάλο Άλμα προς τα Εμπρός και την Πολιτιστική Επανάσταση, το άνοιγμα προς τις Ηνωμένες Πολιτείες και τις μεταρρυθμίσεις του Ντενγκ Σιαοπίνγκ που μεταμόρφωσαν την οικονομία, ως τις διαδηλώσεις της Τιενανμέν και την άνοδο της Κίνας σε παγκόσμια δύναμη τον εικοστό πρώτο αιώνα. Μετακινηθείτε ανάμεσα στα έτη για να διαβάσετε τα γεγονότα που διαμόρφωσαν τη σύγχρονη Κίνα."
  },
  menuDescription: {
    en: "Mao and Deng, the Cultural Revolution and reform: the making of modern China.",
    el: "Ο Μάο κι ο Ντενγκ, η Πολιτιστική Επανάσταση κι η μεταρρύθμιση: η δημιουργία της σύγχρονης Κίνας."
  },
  footerLabel: {
    en: "People's Republic of China · 1949-Present",
    el: "Λαϊκή Δημοκρατία της Κίνας · 1949-Σήμερα"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The People's Republic of China",
    el: "Η Λαϊκή Δημοκρατία της Κίνας"
  },
  theme: THEMES.rose,
  timeline: [
    {
      year: 1949,
      era: {
        en: "The Founding of the PRC",
        el: "Η Ίδρυση της ΛΔΚ"
      },
      events: [
        {
          title: {
            en: "Mao proclaims the People's Republic",
            el: "Ο Μάο ανακηρύσσει τη Λαϊκή Δημοκρατία"
          },
          description: {
            en: "On 1 October 1949 Mao Zedong stands atop Tiananmen and declares that the Chinese people have stood up.",
            el: "Την 1η Οκτωβρίου 1949 ο Μάο Τσε-τουνγκ στέκεται πάνω από την Τιενανμέν και διακηρύσσει ότι ο κινεζικός λαός σηκώθηκε όρθιος."
          },
          extendedDescription: {
            en: "The proclamation of the People's Republic ended decades of war and division and began the rule of the Chinese Communist Party. Mao's government set about land reform, the nationalization of industry, and the building of a one-party socialist state, allied at first with the Soviet Union.",
            el: "Η ανακήρυξη της Λαϊκής Δημοκρατίας τερμάτισε δεκαετίες πολέμου και διαίρεσης και ξεκίνησε τη διακυβέρνηση του Κομμουνιστικού Κόμματος της Κίνας. Η κυβέρνηση του Μάο ανέλαβε αγροτική μεταρρύθμιση, εθνικοποίηση της βιομηχανίας και οικοδόμηση ενός μονοκομματικού σοσιαλιστικού κράτους, συμμαχώντας αρχικά με τη Σοβιετική Ένωση."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mao_Proclaiming_New_China.JPG?width=1024",
            alt: {
              en: "Mao Zedong proclaims the People's Republic of China, 1 October 1949",
              el: "Ο Μάο Τσε-τουνγκ ανακηρύσσει τη Λαϊκή Δημοκρατία της Κίνας, 1 Οκτωβρίου 1949"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1958,
      era: {
        en: "The Mao Era",
        el: "Η Εποχή του Μάο"
      },
      events: [
        {
          title: {
            en: "The Great Leap Forward",
            el: "Το Μεγάλο Άλμα προς τα Εμπρός"
          },
          description: {
            en: "Mao's drive to industrialize overnight through rural communes ends in the deadliest famine in human history.",
            el: "Η εκστρατεία του Μάο για ακαριαία εκβιομηχάνιση μέσω αγροτικών κοινοτήτων καταλήγει στον φονικότερο λιμό της ανθρώπινης ιστορίας."
          },
          extendedDescription: {
            en: "The Great Leap Forward herded peasants into vast communes and set them to make steel in backyard furnaces. Wildly unrealistic targets, falsified reports and the collapse of farming brought famine on a catastrophic scale; tens of millions died between 1959 and 1961. It was the worst disaster of Mao's rule.",
            el: "Το Μεγάλο Άλμα συγκέντρωσε τους αγρότες σε τεράστιες κοινότητες και τους έβαλε να παράγουν χάλυβα σε αυτοσχέδιους κλιβάνους. Εξωπραγματικοί στόχοι, παραποιημένες αναφορές και η κατάρρευση της γεωργίας έφεραν λιμό καταστροφικής κλίμακας· δεκάδες εκατομμύρια πέθαναν ανάμεσα στο 1959 και το 1961."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mao_Zedong_1950_Portrait_(3x4_cropped)(2).jpg?width=1024",
            alt: {
              en: "Mao Zedong, chairman of the Chinese Communist Party",
              el: "Ο Μάο Τσε-τουνγκ, πρόεδρος του Κομμουνιστικού Κόμματος της Κίνας"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1966,
      era: {
        en: "The Cultural Revolution",
        el: "Η Πολιτιστική Επανάσταση"
      },
      events: [
        {
          title: {
            en: "The Cultural Revolution",
            el: "Η Πολιτιστική Επανάσταση"
          },
          description: {
            en: "Mao unleashes the Red Guards against the party and society, plunging China into a decade of upheaval.",
            el: "Ο Μάο εξαπολύει τους Ερυθροφρουρούς κατά του κόμματος και της κοινωνίας, βυθίζοντας την Κίνα σε μια δεκαετία αναταραχής."
          },
          extendedDescription: {
            en: "To reassert his authority and purge his rivals, Mao called on the young to rebel against the 'four olds' and against authority itself. The Red Guards persecuted teachers, officials and intellectuals, destroyed cultural treasures, and threw the country into chaos and violence until Mao's death in 1976 finally brought the movement to an end.",
            el: "Για να επιβεβαιώσει την εξουσία του και να εκκαθαρίσει τους αντιπάλους του, ο Μάο κάλεσε τους νέους να εξεγερθούν κατά των «τεσσάρων παλαιών» και κατά της ίδιας της εξουσίας. Οι Ερυθροφρουροί καταδίωξαν δασκάλους, αξιωματούχους και διανοουμένους, κατέστρεψαν πολιτιστικούς θησαυρούς και βύθισαν τη χώρα στο χάος ως τον θάνατο του Μάο το 1976."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Little_Red_Book_First_Edition_English_Scan.png?width=1024",
            alt: {
              en: "The 'Little Red Book' of Mao's quotations, emblem of the Cultural Revolution",
              el: "Το «Μικρό Κόκκινο Βιβλίο» με τα αποφθέγματα του Μάο, έμβλημα της Πολιτιστικής Επανάστασης"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1972,
      era: {
        en: "The Cultural Revolution",
        el: "Η Πολιτιστική Επανάσταση"
      },
      events: [
        {
          title: {
            en: "Nixon comes to China",
            el: "Ο Νίξον έρχεται στην Κίνα"
          },
          description: {
            en: "President Nixon's visit reopens relations with the United States, realigning the balance of the Cold War.",
            el: "Η επίσκεψη του προέδρου Νίξον επαναφέρει τις σχέσεις με τις Ηνωμένες Πολιτείες, ανακατατάσσοντας την ισορροπία του Ψυχρού Πολέμου."
          },
          extendedDescription: {
            en: "After a bitter split with the Soviet Union, Mao and Zhou Enlai received President Nixon in Beijing in 1972 — an astonishing reversal that opened China to the West. Within the decade the People's Republic took China's seat at the United Nations and won recognition from most of the world.",
            el: "Ύστερα από πικρή ρήξη με τη Σοβιετική Ένωση, ο Μάο και ο Τζόου Ενλάι υποδέχθηκαν τον πρόεδρο Νίξον στο Πεκίνο το 1972 — μια εκπληκτική αναστροφή που άνοιξε την Κίνα στη Δύση. Μέσα στη δεκαετία η Λαϊκή Δημοκρατία πήρε τη θέση της Κίνας στα Ηνωμένα Έθνη και κέρδισε την αναγνώριση του μεγαλύτερου μέρους του κόσμου."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1978,
      era: {
        en: "Reform and Opening",
        el: "Μεταρρύθμιση και Άνοιγμα"
      },
      events: [
        {
          title: {
            en: "Deng Xiaoping and reform and opening",
            el: "Ο Ντενγκ Σιαοπίνγκ και η μεταρρύθμιση και το άνοιγμα"
          },
          description: {
            en: "Deng Xiaoping launches market reforms that will lift hundreds of millions out of poverty and remake China.",
            el: "Ο Ντενγκ Σιαοπίνγκ εγκαινιάζει μεταρρυθμίσεις αγοράς που θα βγάλουν εκατοντάδες εκατομμύρια από τη φτώχεια και θα αναδιαμορφώσουν την Κίνα."
          },
          extendedDescription: {
            en: "Emerging as paramount leader after Mao, Deng dismantled the communes, welcomed private enterprise and foreign investment, and opened special economic zones such as Shenzhen. His pragmatic 'socialism with Chinese characteristics' unleashed the fastest sustained economic growth in world history.",
            el: "Αναδεικνυόμενος υπέρτατος ηγέτης μετά τον Μάο, ο Ντενγκ διέλυσε τις κοινότητες, καλωσόρισε την ιδιωτική επιχείρηση και τις ξένες επενδύσεις και άνοιξε ειδικές οικονομικές ζώνες όπως το Σεντζέν. Ο πραγματιστικός «σοσιαλισμός με κινεζικά χαρακτηριστικά» απελευθέρωσε την ταχύτερη διαρκή οικονομική ανάπτυξη στην παγκόσμια ιστορία."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Deng_Xiaoping_at_the_arrival_ceremony_for_the_Vice_Premier_of_China_(cropped).jpg?width=1024",
            alt: {
              en: "Deng Xiaoping, architect of China's reform and opening",
              el: "Ο Ντενγκ Σιαοπίνγκ, αρχιτέκτονας της μεταρρύθμισης και του ανοίγματος της Κίνας"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1989,
      era: {
        en: "Reform and Opening",
        el: "Μεταρρύθμιση και Άνοιγμα"
      },
      events: [
        {
          title: {
            en: "The Tiananmen Square protests",
            el: "Οι διαδηλώσεις της πλατείας Τιενανμέν"
          },
          description: {
            en: "Mass demonstrations for reform in Beijing end when the government declares martial law and clears the square by force.",
            el: "Μαζικές διαδηλώσεις για μεταρρυθμίσεις στο Πεκίνο τερματίζονται όταν η κυβέρνηση κηρύσσει στρατιωτικό νόμο και εκκενώνει την πλατεία με τη βία."
          },
          extendedDescription: {
            en: "In the spring of 1989 students and workers gathered in Tiananmen Square to call for political reform and an end to corruption. After weeks of protest the leadership declared martial law, and on 3–4 June the army moved in, with heavy loss of life. The crackdown ended hopes of political liberalization even as economic reform continued.",
            el: "Την άνοιξη του 1989 φοιτητές και εργάτες συγκεντρώθηκαν στην πλατεία Τιενανμέν ζητώντας πολιτική μεταρρύθμιση και τέλος της διαφθοράς. Ύστερα από εβδομάδες διαμαρτυρίας η ηγεσία κήρυξε στρατιωτικό νόμο, και στις 3–4 Ιουνίου ο στρατός επενέβη με βαρύ κόστος σε ζωές. Η καταστολή τερμάτισε τις ελπίδες πολιτικής φιλελευθεροποίησης."
          },
          category: "political"
        }
      ]
    },
    {
      year: 2001,
      era: {
        en: "The Rise of China",
        el: "Η Άνοδος της Κίνας"
      },
      events: [
        {
          title: {
            en: "China joins the World Trade Organization",
            el: "Η Κίνα εντάσσεται στον Παγκόσμιο Οργανισμό Εμπορίου"
          },
          description: {
            en: "China's entry into the WTO seals its place as the workshop of the world and an emerging economic superpower.",
            el: "Η ένταξη της Κίνας στον ΠΟΕ σφραγίζει τη θέση της ως το εργαστήρι του κόσμου και μια αναδυόμενη οικονομική υπερδύναμη."
          },
          extendedDescription: {
            en: "Joining the WTO in 2001 bound China ever tighter to the global economy. Exports surged, cities swelled, and hundreds of millions moved from countryside to factory. Within a decade China overtook Japan as the world's second-largest economy, and its skyline — from Shanghai's Pudong to a hundred new metropolises — announced a transformed nation.",
            el: "Η ένταξη στον ΠΟΕ το 2001 έδεσε την Κίνα ακόμη πιο σφιχτά με την παγκόσμια οικονομία. Οι εξαγωγές εκτοξεύθηκαν, οι πόλεις διογκώθηκαν και εκατοντάδες εκατομμύρια μετακινήθηκαν από την ύπαιθρο στο εργοστάσιο. Μέσα σε μια δεκαετία η Κίνα ξεπέρασε την Ιαπωνία ως η δεύτερη μεγαλύτερη οικονομία του κόσμου."
          },
          category: "other",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shanghai_skyline_from_the_bund.jpg?width=1024",
            alt: {
              en: "The Shanghai skyline, symbol of China's economic rise",
              el: "Ο ορίζοντας της Σαγκάης, σύμβολο της οικονομικής ανόδου της Κίνας"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 2008,
      era: {
        en: "The Rise of China",
        el: "Η Άνοδος της Κίνας"
      },
      events: [
        {
          title: {
            en: "The Beijing Olympics",
            el: "Οι Ολυμπιακοί Αγώνες του Πεκίνου"
          },
          description: {
            en: "China stages a dazzling Olympic Games, announcing its arrival as a confident world power.",
            el: "Η Κίνα διοργανώνει εκθαμβωτικούς Ολυμπιακούς Αγώνες, αναγγέλλοντας την άφιξή της ως μια αυτοπεποίθητη παγκόσμια δύναμη."
          },
          extendedDescription: {
            en: "The 2008 Beijing Olympics, opening on the eighth day of the eighth month, were a spectacle of national pride and organizational might. Coming as the West entered a financial crisis, they symbolized a shift in the balance of the world, with China increasingly central to the global economy and to world affairs.",
            el: "Οι Ολυμπιακοί Αγώνες του Πεκίνου του 2008, που άνοιξαν την όγδοη ημέρα του όγδοου μήνα, ήταν ένα θέαμα εθνικής υπερηφάνειας και οργανωτικής ισχύος. Καθώς η Δύση εισερχόταν σε χρηματοπιστωτική κρίση, συμβόλισαν μια μετατόπιση στην ισορροπία του κόσμου, με την Κίνα ολοένα κεντρικότερη."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 2013,
      era: {
        en: "The Rise of China",
        el: "Η Άνοδος της Κίνας"
      },
      events: [
        {
          title: {
            en: "Xi Jinping and the Belt and Road",
            el: "Ο Σι Τζινπίνγκ και ο Δρόμος του Μεταξιού"
          },
          description: {
            en: "Xi Jinping consolidates power and launches the Belt and Road Initiative, extending China's reach across the globe.",
            el: "Ο Σι Τζινπίνγκ συγκεντρώνει την εξουσία και εγκαινιάζει την Πρωτοβουλία Ζώνης και Δρόμου, επεκτείνοντας την επιρροή της Κίνας σε όλον τον κόσμο."
          },
          extendedDescription: {
            en: "Becoming leader in 2012–13, Xi Jinping centralized authority to a degree unseen since Mao and set out a vision of national rejuvenation. His Belt and Road Initiative financed infrastructure across Asia, Africa and Europe, while at home the party tightened its control — marking China's confident return to the front rank of world powers.",
            el: "Γινόμενος ηγέτης το 2012–13, ο Σι Τζινπίνγκ συγκεντρωποίησε την εξουσία σε βαθμό πρωτοφανή από την εποχή του Μάο και διατύπωσε ένα όραμα εθνικής αναγέννησης. Η Πρωτοβουλία Ζώνης και Δρόμου χρηματοδότησε υποδομές σε Ασία, Αφρική και Ευρώπη, ενώ στο εσωτερικό το κόμμα ενίσχυσε τον έλεγχό του."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
