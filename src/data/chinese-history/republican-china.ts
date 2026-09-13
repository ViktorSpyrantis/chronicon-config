/** Republican China — Δημοκρατική Κίνα · Chinese History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const REPUBLICAN_CHINA = {
  id: "republican-china" as const,
  label: {
    en: "Republican China",
    el: "Δημοκρατική Κίνα"
  },
  supertitle: {
    en: "中華民國 · Republic",
    el: "Δημοκρατία της Κίνας"
  },
  title: {
    en: "Republican China",
    el: "Η Δημοκρατική Κίνα"
  },
  subtitle: {
    en: "From the Xinhai Revolution and Sun Yat-sen's republic through the warlord era, the ferment of the May Fourth Movement, Chiang Kai-shek's unification and the Long March, to the war with Japan and the civil war that ended in Communist victory in 1949. Slide across the years to read the major events of China's turbulent republican age.",
    el: "Από την Επανάσταση Σινχάι και τη δημοκρατία του Σουν Γιατ-σεν, μέσα από την εποχή των πολεμάρχων, τον αναβρασμό του Κινήματος της Τετάρτης Μαΐου, την ενοποίηση του Τσιανγκ Κάι-σεκ και τη Μεγάλη Πορεία, ως τον πόλεμο με την Ιαπωνία και τον εμφύλιο που έληξε με κομμουνιστική νίκη το 1949. Μετακινηθείτε ανάμεσα στα έτη για να διαβάσετε τα γεγονότα της ταραγμένης δημοκρατικής εποχής της Κίνας."
  },
  menuDescription: {
    en: "Sun Yat-sen and Chiang Kai-shek, the warlords, the Long March and the war with Japan.",
    el: "Ο Σουν Γιατ-σεν κι ο Τσιανγκ Κάι-σεκ, οι πολέμαρχοι, η Μεγάλη Πορεία κι ο πόλεμος με την Ιαπωνία."
  },
  footerLabel: {
    en: "Republican China · 1912-1949 AD",
    el: "Δημοκρατική Κίνα · 1912-1949 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Republican China",
    el: "Η Δημοκρατική Κίνα"
  },
  theme: THEMES.copper,
  timeline: [
    {
      year: 1911,
      era: {
        en: "The Xinhai Revolution",
        el: "Η Επανάσταση Σινχάι"
      },
      events: [
        {
          title: {
            en: "Sun Yat-sen and the birth of the Republic",
            el: "Ο Σουν Γιατ-σεν και η γέννηση της Δημοκρατίας"
          },
          description: {
            en: "The Xinhai Revolution overthrows the Qing, and Sun Yat-sen becomes provisional president of a new Chinese republic.",
            el: "Η Επανάσταση Σινχάι ανατρέπει τους Τσινγκ, και ο Σουν Γιατ-σεν γίνεται προσωρινός πρόεδρος μιας νέας κινεζικής δημοκρατίας."
          },
          extendedDescription: {
            en: "The revolutionary Sun Yat-sen, long an exile organizing against the dynasty, returned to lead the new Republic of China founded on his principles of nationalism, democracy and the people's livelihood. But real power lay with the general Yuan Shikai, to whom Sun soon ceded the presidency in exchange for the emperor's abdication.",
            el: "Ο επαναστάτης Σουν Γιατ-σεν, επί μακρόν εξόριστος που οργάνωνε την αντίσταση κατά της δυναστείας, επέστρεψε να ηγηθεί της νέας Δημοκρατίας της Κίνας, θεμελιωμένης στις αρχές του για τον εθνικισμό, τη δημοκρατία και τα προς το ζην του λαού. Όμως η πραγματική εξουσία βρισκόταν στον στρατηγό Γιουάν Σικάι."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%AD%99%E4%B8%AD%E5%B1%B1%E8%82%96%E5%83%8F.jpg?width=1024",
            alt: {
              en: "Sun Yat-sen, founding father of the Republic of China",
              el: "Ο Σουν Γιατ-σεν, ιδρυτής πατέρας της Δημοκρατίας της Κίνας"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1916,
      era: {
        en: "The Warlord Era",
        el: "Η Εποχή των Πολεμάρχων"
      },
      events: [
        {
          title: {
            en: "China fractures under the warlords",
            el: "Η Κίνα κατακερματίζεται υπό τους πολεμάρχους"
          },
          description: {
            en: "After Yuan Shikai's death, central authority collapses and rival militarists carve China into warlord fiefs.",
            el: "Μετά τον θάνατο του Γιουάν Σικάι, η κεντρική εξουσία καταρρέει και αντίπαλοι στρατιωτικοί διαμελίζουν την Κίνα σε φέουδα πολεμάρχων."
          },
          extendedDescription: {
            en: "Yuan Shikai's attempt to make himself emperor discredited him, and his death in 1916 left no one able to hold China together. For over a decade rival warlords fought for territory and the hollow prize of Beijing, while the country fragmented and foreign powers pressed their advantage.",
            el: "Η προσπάθεια του Γιουάν Σικάι να ανακηρυχθεί αυτοκράτορας τον απαξίωσε, και ο θάνατός του το 1916 δεν άφησε κανέναν ικανό να συγκρατήσει την Κίνα. Επί μία δεκαετία και πλέον αντίπαλοι πολέμαρχοι πολεμούσαν για εδάφη και για το κενό έπαθλο του Πεκίνου, ενώ η χώρα κατακερματιζόταν."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1919,
      era: {
        en: "The New Culture",
        el: "Ο Νέος Πολιτισμός"
      },
      events: [
        {
          title: {
            en: "The May Fourth Movement",
            el: "Το Κίνημα της Τετάρτης Μαΐου"
          },
          description: {
            en: "Students protest the Versailles betrayal of China, igniting a movement for new culture, science and national renewal.",
            el: "Φοιτητές διαδηλώνουν κατά της προδοσίας της Κίνας στις Βερσαλλίες, πυροδοτώντας ένα κίνημα για νέο πολιτισμό, επιστήμη και εθνική αναγέννηση."
          },
          extendedDescription: {
            en: "When the Versailles Treaty handed Germany's concessions in Shandong to Japan, outraged students demonstrated in Beijing on 4 May 1919. The protest crystallized the New Culture Movement's demands for democracy, science and vernacular literature, and its ferment gave rise to new political forces — including, in 1921, the Chinese Communist Party.",
            el: "Όταν η Συνθήκη των Βερσαλλιών παρέδωσε τις γερμανικές παραχωρήσεις στο Σαντόνγκ στην Ιαπωνία, εξοργισμένοι φοιτητές διαδήλωσαν στο Πεκίνο στις 4 Μαΐου 1919. Η διαμαρτυρία αποκρυστάλλωσε τα αιτήματα του Κινήματος Νέου Πολιτισμού για δημοκρατία, επιστήμη και δημώδη λογοτεχνία, και γέννησε νέες πολιτικές δυνάμεις."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Chinese_protestors_march_against_the_Treaty_of_Versailles_(May_4,_1919).jpg?width=1024",
            alt: {
              en: "Students march in Beijing during the May Fourth Movement of 1919",
              el: "Φοιτητές διαδηλώνουν στο Πεκίνο κατά το Κίνημα της Τετάρτης Μαΐου του 1919"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1928,
      era: {
        en: "The Nationalist Government",
        el: "Η Εθνικιστική Κυβέρνηση"
      },
      events: [
        {
          title: {
            en: "Chiang Kai-shek and the Northern Expedition",
            el: "Ο Τσιανγκ Κάι-σεκ και η Βόρεια Εκστρατεία"
          },
          description: {
            en: "Chiang Kai-shek's Northern Expedition defeats the warlords and unites China under a Nationalist government at Nanjing.",
            el: "Η Βόρεια Εκστρατεία του Τσιανγκ Κάι-σεκ νικά τους πολεμάρχους και ενώνει την Κίνα υπό εθνικιστική κυβέρνηση στο Ναντζίνγκ."
          },
          extendedDescription: {
            en: "Sun Yat-sen's successor Chiang Kai-shek led the Nationalist armies north from Canton, defeating or absorbing the warlords and establishing a new government at Nanjing in 1928. But he turned violently on his former Communist allies in 1927, beginning a struggle between Nationalists and Communists that would decide China's fate.",
            el: "Ο διάδοχος του Σουν Γιατ-σεν, ο Τσιανγκ Κάι-σεκ, οδήγησε τους εθνικιστικούς στρατούς βόρεια από την Καντόνα, νικώντας ή απορροφώντας τους πολεμάρχους και εγκαθιδρύοντας νέα κυβέρνηση στο Ναντζίνγκ το 1928. Όμως στράφηκε βίαια κατά των πρώην κομμουνιστών συμμάχων του το 1927."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/%E8%94%A3%E4%B8%AD%E6%AD%A3%E7%B8%BD%E7%B5%B1%E7%8E%89%E7%85%A7.png?width=1024",
            alt: {
              en: "Chiang Kai-shek, leader of the Nationalist government",
              el: "Ο Τσιανγκ Κάι-σεκ, ηγέτης της εθνικιστικής κυβέρνησης"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1934,
      era: {
        en: "The Chinese Civil War",
        el: "Ο Κινεζικός Εμφύλιος"
      },
      events: [
        {
          title: {
            en: "The Long March",
            el: "Η Μεγάλη Πορεία"
          },
          description: {
            en: "Encircled by Nationalist armies, the Communists break out on a punishing 9,000-kilometre retreat that makes Mao their leader.",
            el: "Περικυκλωμένοι από εθνικιστικούς στρατούς, οι κομμουνιστές διασπούν τον κλοιό σε μια εξοντωτική υποχώρηση 9.000 χιλιομέτρων που αναδεικνύει τον Μάο ηγέτη τους."
          },
          extendedDescription: {
            en: "To escape Chiang's encirclement of their southern base, the Red Army set out in 1934 on the Long March, a year-long trek across mountains and rivers to a new refuge at Yan'an. Only a fraction survived, but the ordeal became a founding legend of Chinese Communism and confirmed Mao Zedong as its paramount leader.",
            el: "Για να ξεφύγει από την περικύκλωση του Τσιανγκ, ο Κόκκινος Στρατός ξεκίνησε το 1934 τη Μεγάλη Πορεία, μια οδοιπορία ενός έτους μέσα από βουνά και ποτάμια προς νέο καταφύγιο στο Γιαν'άν. Επέζησε μόνο ένα κλάσμα, όμως η δοκιμασία έγινε ιδρυτικός θρύλος του κινεζικού κομμουνισμού και επιβεβαίωσε τον Μάο Τσε-τουνγκ ως υπέρτατο ηγέτη του."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Map_of_the_Long_March_1934-1935-en.svg?width=1024",
            alt: {
              en: "Map of the Communist Long March of 1934–1935",
              el: "Χάρτης της κομμουνιστικής Μεγάλης Πορείας του 1934–1935"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1937,
      era: {
        en: "The War with Japan",
        el: "Ο Πόλεμος με την Ιαπωνία"
      },
      events: [
        {
          title: {
            en: "The Second Sino-Japanese War",
            el: "Ο Δεύτερος Σινοϊαπωνικός Πόλεμος"
          },
          description: {
            en: "Japan launches a full invasion of China; the horrors include the Nanjing Massacre, and the nation fights on for eight years.",
            el: "Η Ιαπωνία εξαπολύει ολομέτωπη εισβολή στην Κίνα· στη φρίκη περιλαμβάνεται η Σφαγή του Ναντζίνγκ, και το έθνος πολεμά επί οκτώ χρόνια."
          },
          extendedDescription: {
            en: "The clash at the Marco Polo Bridge in July 1937 opened all-out war. Japanese armies took the coast and the great cities, committing atrocities such as the Nanjing Massacre. Nationalists and Communists formed an uneasy united front, and China's vast resistance tied down millions of Japanese troops through the Second World War, at a cost of perhaps fifteen million Chinese lives.",
            el: "Η σύγκρουση στη Γέφυρα Μάρκο Πόλο τον Ιούλιο του 1937 άνοιξε ολοκληρωτικό πόλεμο. Ιαπωνικοί στρατοί κατέλαβαν τις ακτές και τις μεγάλες πόλεις, διαπράττοντας φρικαλεότητες όπως η Σφαγή του Ναντζίνγκ. Εθνικιστές και κομμουνιστές σχημάτισαν ένα εύθραυστο ενιαίο μέτωπο, και η τεράστια αντίσταση της Κίνας καθήλωσε εκατομμύρια ιαπωνικά στρατεύματα."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Japanese_Special_Naval_Landing_Forces_in_Battle_of_Shanghai_1937.jpg?width=1024",
            alt: {
              en: "Japanese forces during the Battle of Shanghai in 1937",
              el: "Ιαπωνικές δυνάμεις κατά τη Μάχη της Σαγκάης το 1937"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1949,
      era: {
        en: "The Communist Victory",
        el: "Η Κομμουνιστική Νίκη"
      },
      events: [
        {
          title: {
            en: "The Communists win the civil war",
            el: "Οι κομμουνιστές κερδίζουν τον εμφύλιο"
          },
          description: {
            en: "The resumed civil war ends in Communist victory; the Nationalists flee to Taiwan as Mao proclaims the People's Republic.",
            el: "Ο επαναληφθείς εμφύλιος καταλήγει σε κομμουνιστική νίκη· οι εθνικιστές καταφεύγουν στην Ταϊβάν καθώς ο Μάο ανακηρύσσει τη Λαϊκή Δημοκρατία."
          },
          extendedDescription: {
            en: "After Japan's defeat, the truce between Nationalists and Communists collapsed into renewed civil war. Better organized and enjoying peasant support, the Communists swept the country by 1949. Chiang Kai-shek's government retreated to Taiwan, and on 1 October Mao Zedong proclaimed the People's Republic of China in Beijing.",
            el: "Μετά την ήττα της Ιαπωνίας, η ανακωχή ανάμεσα σε εθνικιστές και κομμουνιστές κατέρρευσε σε νέο εμφύλιο. Καλύτερα οργανωμένοι και με τη στήριξη των αγροτών, οι κομμουνιστές σάρωσαν τη χώρα ως το 1949. Η κυβέρνηση του Τσιανγκ Κάι-σεκ υποχώρησε στην Ταϊβάν, και την 1η Οκτωβρίου ο Μάο Τσε-τουνγκ ανακήρυξε τη Λαϊκή Δημοκρατία της Κίνας στο Πεκίνο."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
