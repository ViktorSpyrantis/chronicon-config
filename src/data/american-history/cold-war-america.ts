/** Cold War America — Η Αμερική του Ψυχρού Πολέμου · American History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const COLD_WAR_AMERICA = {
  id: "cold-war-america" as const,
  label: {
    en: "Cold War America",
    el: "Η Αμερική του Ψυχρού Πολέμου"
  },
  supertitle: {
    en: "Superpower · 1947-1991",
    el: "Υπερδύναμη"
  },
  title: {
    en: "Postwar & Cold War America",
    el: "Η Μεταπολεμική Αμερική & ο Ψυχρός Πόλεμος"
  },
  subtitle: {
    en: "From the doctrine of containment and the Korean War, through the civil rights movement, the Cuban Missile Crisis, the Moon landing, and the traumas of Vietnam and Watergate, to the Reagan years and the collapse of the Soviet Union. Slide across the years to relive America's long rivalry with the Soviet Union.",
    el: "Από το δόγμα της ανάσχεσης και τον Πόλεμο της Κορέας, μέσα από το κίνημα για τα πολιτικά δικαιώματα, την Κρίση των Πυραύλων της Κούβας, την προσσελήνωση και τα τραύματα του Βιετνάμ και του Γουότεργκεϊτ, ως τα χρόνια του Ρίγκαν και την κατάρρευση της Σοβιετικής Ένωσης. Μετακινηθείτε ανάμεσα στα έτη για να ζήσετε ξανά τη μακρά αντιπαλότητα της Αμερικής με τη Σοβιετική Ένωση."
  },
  menuDescription: {
    en: "Containment, civil rights, the Moon, Vietnam, and the Cold War's end.",
    el: "Ανάσχεση, πολιτικά δικαιώματα, η Σελήνη, το Βιετνάμ και το τέλος του Ψυχρού Πολέμου."
  },
  footerLabel: {
    en: "Cold War America · 1947-1991",
    el: "Η Αμερική του Ψυχρού Πολέμου · 1947-1991"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Postwar & Cold War America",
    el: "Η Μεταπολεμική Αμερική & ο Ψυχρός Πόλεμος"
  },
  theme: THEMES.ruby,
  timeline: [
    {
      year: 1947,
      era: {
        en: "The Cold War Begins",
        el: "Ο Ψυχρός Πόλεμος αρχίζει"
      },
      events: [
        {
          title: {
            en: "Containment and the Marshall Plan",
            el: "Ανάσχεση και το Σχέδιο Μάρσαλ"
          },
          description: {
            en: "The Truman Doctrine and the Marshall Plan commit the United States to containing communism and rebuilding Western Europe, framing decades of global rivalry with the Soviet Union.",
            el: "Το Δόγμα Τρούμαν και το Σχέδιο Μάρσαλ δεσμεύουν τις Ηνωμένες Πολιτείες στην ανάσχεση του κομμουνισμού και στην ανοικοδόμηση της Δυτικής Ευρώπης, οριοθετώντας δεκαετίες παγκόσμιας αντιπαλότητας με τη Σοβιετική Ένωση."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1950,
      era: {
        en: "Hot Wars, Cold Fear",
        el: "Θερμοί πόλεμοι, ψυχρός φόβος"
      },
      events: [
        {
          title: {
            en: "The Korean War and McCarthyism",
            el: "Ο Πόλεμος της Κορέας και ο μακαρθισμός"
          },
          description: {
            en: "The United States leads a UN force in the Korean War, while at home Senator Joseph McCarthy's hunt for communists fuels a climate of suspicion and fear.",
            el: "Οι Ηνωμένες Πολιτείες ηγούνται μιας δύναμης του ΟΗΕ στον Πόλεμο της Κορέας, ενώ στο εσωτερικό το κυνήγι κομμουνιστών από τον γερουσιαστή Τζόζεφ Μακάρθι τροφοδοτεί ένα κλίμα καχυποψίας και φόβου."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1954,
      era: {
        en: "Civil Rights",
        el: "Πολιτικά δικαιώματα"
      },
      events: [
        {
          title: {
            en: "Brown v. Board and the movement",
            el: "Η υπόθεση Μπράουν και το κίνημα"
          },
          description: {
            en: "The Supreme Court strikes down school segregation in Brown v. Board of Education, and the Montgomery bus boycott launches Martin Luther King Jr. and the civil rights movement.",
            el: "Το Ανώτατο Δικαστήριο καταργεί τον φυλετικό διαχωρισμό στα σχολεία στην υπόθεση Μπράουν κατά του Συμβουλίου Εκπαίδευσης, και το μποϊκοτάζ των λεωφορείων του Μοντγκόμερι αναδεικνύει τον Μάρτιν Λούθερ Κινγκ και το κίνημα για τα πολιτικά δικαιώματα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1962,
      era: {
        en: "Brink of War",
        el: "Στο χείλος του πολέμου"
      },
      events: [
        {
          title: {
            en: "The Cuban Missile Crisis",
            el: "Η Κρίση των Πυραύλων της Κούβας"
          },
          description: {
            en: "For thirteen days the United States and Soviet Union stand on the edge of nuclear war over missiles in Cuba, before Kennedy and Khrushchev step back from the brink.",
            el: "Για δεκατρείς ημέρες οι Ηνωμένες Πολιτείες και η Σοβιετική Ένωση βρίσκονται στο χείλος πυρηνικού πολέμου για πυραύλους στην Κούβα, προτού ο Κένεντι και ο Χρουστσόφ κάνουν πίσω από το χείλος."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1963,
      era: {
        en: "Dreams and Assassination",
        el: "Όνειρα και δολοφονία"
      },
      events: [
        {
          title: {
            en: "'I Have a Dream' and the death of Kennedy",
            el: "«Έχω ένα όνειρο» και ο θάνατος του Κένεντι"
          },
          description: {
            en: "King's 'I Have a Dream' speech crowns the March on Washington; months later President Kennedy is assassinated in Dallas, shaking the nation.",
            el: "Η ομιλία «Έχω ένα όνειρο» του Κινγκ στέφει την Πορεία προς την Ουάσινγκτον· μήνες αργότερα ο πρόεδρος Κένεντι δολοφονείται στο Ντάλας, συγκλονίζοντας το έθνος."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1965,
      era: {
        en: "Rights and War",
        el: "Δικαιώματα και πόλεμος"
      },
      events: [
        {
          title: {
            en: "Voting Rights Act and Vietnam escalation",
            el: "Ο Νόμος περί Δικαιωμάτων Ψήφου και η κλιμάκωση στο Βιετνάμ"
          },
          description: {
            en: "Landmark civil rights and voting laws end legal segregation, even as President Johnson deepens American involvement in the divisive Vietnam War.",
            el: "Ορόσημα νομοθεσίας για τα πολιτικά δικαιώματα και το δικαίωμα ψήφου τερματίζουν τον νομικό διαχωρισμό, ακόμη κι ενώ ο πρόεδρος Τζόνσον βαθαίνει την αμερικανική εμπλοκή στον διχαστικό Πόλεμο του Βιετνάμ."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1969,
      era: {
        en: "The Moon",
        el: "Η Σελήνη"
      },
      events: [
        {
          title: {
            en: "Apollo 11 lands on the Moon",
            el: "Το Απόλλων 11 προσσελήνωση"
          },
          description: {
            en: "Neil Armstrong becomes the first human to walk on the Moon, a triumph of the space race and a defining moment of American technological achievement.",
            el: "Ο Νιλ Άρμστρονγκ γίνεται ο πρώτος άνθρωπος που περπατά στη Σελήνη, ένας θρίαμβος του διαστημικού αγώνα και μια καθοριστική στιγμή του αμερικανικού τεχνολογικού επιτεύγματος."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/A_Man_on_the_Moon,_AS11-40-5903_(cropped).jpg?width=1024",
            alt: {
              en: "Astronaut Buzz Aldrin on the Moon, 1969",
              el: "Ο αστροναύτης Μπαζ Όλντριν στη Σελήνη, 1969"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1974,
      era: {
        en: "Crisis of Confidence",
        el: "Κρίση εμπιστοσύνης"
      },
      events: [
        {
          title: {
            en: "Watergate and Nixon's resignation",
            el: "Το Γουότεργκεϊτ και η παραίτηση Νίξον"
          },
          description: {
            en: "The Watergate scandal forces President Nixon to resign — the only president ever to do so — deepening public distrust of government amid Vietnam's end and economic malaise.",
            el: "Το σκάνδαλο Γουότεργκεϊτ αναγκάζει τον πρόεδρο Νίξον να παραιτηθεί — τον μοναδικό πρόεδρο που το έκανε ποτέ — βαθαίνοντας τη δημόσια δυσπιστία προς την κυβέρνηση εν μέσω του τέλους του Βιετνάμ και της οικονομικής δυσπραγίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1981,
      era: {
        en: "The Reagan Era",
        el: "Η εποχή Ρίγκαν"
      },
      events: [
        {
          title: {
            en: "Reagan, tax cuts, and the Cold War's end",
            el: "Ο Ρίγκαν, οι φοροελαφρύνσεις και το τέλος του Ψυχρού Πολέμου"
          },
          description: {
            en: "Ronald Reagan cuts taxes, builds up the military, and confronts the Soviet Union; his diplomacy with Gorbachev helps bring the Cold War toward a peaceful close.",
            el: "Ο Ρόναλντ Ρίγκαν μειώνει τους φόρους, ενισχύει τον στρατό και αντιμετωπίζει τη Σοβιετική Ένωση· η διπλωματία του με τον Γκορμπατσόφ βοηθά να φτάσει ο Ψυχρός Πόλεμος σε ένα ειρηνικό τέλος."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1991,
      era: {
        en: "The Cold War Ends",
        el: "Ο Ψυχρός Πόλεμος τελειώνει"
      },
      events: [
        {
          title: {
            en: "Collapse of the Soviet Union",
            el: "Η κατάρρευση της Σοβιετικής Ένωσης"
          },
          description: {
            en: "The Soviet Union dissolves, leaving the United States as the world's sole superpower and opening a new, uncertain era in global affairs.",
            el: "Η Σοβιετική Ένωση διαλύεται, αφήνοντας τις Ηνωμένες Πολιτείες ως τη μοναδική υπερδύναμη του κόσμου και ανοίγοντας μια νέα, αβέβαιη εποχή στις παγκόσμιες υποθέσεις."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
