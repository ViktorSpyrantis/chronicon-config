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
          extendedDescription: {
            en: "In March 1947 Truman asked Congress for $400 million to support Greece, then fighting a communist insurgency in its civil war, and Turkey, pledging to help 'free peoples' resist subjugation. That June Secretary of State George Marshall offered aid to rebuild war-ravaged Europe, and from 1948 to 1952 the Marshall Plan delivered some $13 billion to sixteen countries, Greece among them. The diplomat George Kennan's idea of 'containment' of Soviet power guided U.S. strategy, and in 1949 the North Atlantic Treaty created NATO.",
            el: "Τον Μάρτιο του 1947 ο Τρούμαν ζήτησε από το Κογκρέσο 400 εκατομμύρια δολάρια για τη στήριξη της Ελλάδας, που αντιμετώπιζε τότε την κομμουνιστική ανταρσία στον Εμφύλιο, και της Τουρκίας, δεσμευόμενος να βοηθά τους «ελεύθερους λαούς» να αντιστέκονται στην υποδούλωση. Εκείνον τον Ιούνιο ο υπουργός Εξωτερικών Τζορτζ Μάρσαλ πρόσφερε βοήθεια για την ανοικοδόμηση της κατεστραμμένης από τον πόλεμο Ευρώπης, και από το 1948 ως το 1952 το Σχέδιο Μάρσαλ διέθεσε περίπου 13 δισεκατομμύρια δολάρια σε δεκαέξι χώρες, ανάμεσά τους και την Ελλάδα. Η ιδέα του διπλωμάτη Τζορτζ Κέναν για την «ανάσχεση» της σοβιετικής ισχύος καθοδήγησε την αμερικανική στρατηγική, και το 1949 η Συνθήκη του Βορείου Ατλαντικού δημιούργησε το ΝΑΤΟ."
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
          extendedDescription: {
            en: "North Korea invaded the South in June 1950; General Douglas MacArthur's landing at Inchon drove the invaders back, but as UN forces neared the Chinese border, China intervened in massive numbers. Truman fired MacArthur in 1951 for publicly challenging his policy of limited war, and an armistice in 1953 left Korea divided near where it began; about 36,000 Americans died, and Greek troops also fought in the UN force. At home Senator Joseph McCarthy's reckless accusations ruined careers until the televised Army–McCarthy hearings of 1954 exposed him, and the Senate censured him that December.",
            el: "Η Βόρεια Κορέα εισέβαλε στη Νότια τον Ιούνιο του 1950· η απόβαση του στρατηγού Ντάγκλας ΜακΆρθουρ στην Ίντσον απώθησε τους εισβολείς, αλλά καθώς οι δυνάμεις του ΟΗΕ πλησίαζαν τα κινεζικά σύνορα, η Κίνα επενέβη με τεράστιες δυνάμεις. Ο Τρούμαν απέπεμψε τον ΜακΆρθουρ το 1951 επειδή αμφισβήτησε δημόσια την πολιτική του για περιορισμένο πόλεμο, και μια ανακωχή το 1953 άφησε την Κορέα διχασμένη κοντά στη γραμμή όπου είχε ξεκινήσει ο πόλεμος· περίπου 36.000 Αμερικανοί σκοτώθηκαν, και στη δύναμη του ΟΗΕ πολέμησαν και ελληνικά στρατεύματα. Στο εσωτερικό, οι απερίσκεπτες κατηγορίες του γερουσιαστή Τζόζεφ ΜακΚάρθι κατέστρεψαν σταδιοδρομίες, ώσπου οι τηλεοπτικές ακροάσεις Στρατού–ΜακΚάρθι το 1954 τον εξέθεσαν, και η Γερουσία τον επέπληξε εκείνον τον Δεκέμβριο."
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
          extendedDescription: {
            en: "Argued by the NAACP lawyer Thurgood Marshall, later the first Black Supreme Court justice, Brown was decided unanimously under Chief Justice Earl Warren, who wrote that 'separate educational facilities are inherently unequal'. Southern states answered with 'massive resistance', and in 1957 Eisenhower sent paratroopers to escort nine Black students into Central High School in Little Rock. In Montgomery, Alabama, Rosa Parks' arrest in December 1955 for refusing to give up her bus seat began a 381-day boycott that made the young Martin Luther King Jr. a national leader.",
            el: "Η υπόθεση Μπράουν, που υποστήριξε ο δικηγόρος της NAACP Θέργκουντ Μάρσαλ, αργότερα ο πρώτος μαύρος δικαστής του Ανωτάτου Δικαστηρίου, κρίθηκε ομόφωνα υπό τον πρόεδρο Ερλ Γουόρεν, ο οποίος έγραψε ότι «οι χωριστές εκπαιδευτικές εγκαταστάσεις είναι εγγενώς άνισες». Οι νότιες πολιτείες απάντησαν με «μαζική αντίσταση», και το 1957 ο Αϊζενχάουερ έστειλε αλεξιπτωτιστές να συνοδεύσουν εννέα μαύρους μαθητές στο Γυμνάσιο Central του Λιτλ Ροκ. Στο Μοντγκόμερι της Αλαμπάμα, η σύλληψη της Ρόζα Παρκς τον Δεκέμβριο του 1955, επειδή αρνήθηκε να παραχωρήσει τη θέση της στο λεωφορείο, ξεκίνησε ένα μποϊκοτάζ 381 ημερών που έκανε τον νεαρό Μάρτιν Λούθερ Κινγκ εθνικό ηγέτη."
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
          extendedDescription: {
            en: "A U-2 spy plane photographed Soviet nuclear missile sites under construction in Cuba on 14 October 1962, a year after the failed U.S.-backed Bay of Pigs invasion. Kennedy rejected air strikes and imposed a naval 'quarantine' of the island. Khrushchev agreed to remove the missiles in exchange for a public U.S. pledge not to invade Cuba and a secret promise to withdraw American Jupiter missiles from Turkey. A Washington–Moscow hotline and the 1963 Partial Test Ban Treaty followed.",
            el: "Ένα κατασκοπευτικό αεροσκάφος U-2 φωτογράφισε σοβιετικές εγκαταστάσεις πυρηνικών πυραύλων υπό κατασκευή στην Κούβα στις 14 Οκτωβρίου 1962, έναν χρόνο μετά την αποτυχημένη εισβολή στον Κόλπο των Χοίρων με αμερικανική στήριξη. Ο Κένεντι απέρριψε τις αεροπορικές επιδρομές και επέβαλε ναυτική «καραντίνα» στο νησί. Ο Χρουστσόφ δέχτηκε να αποσύρει τους πυραύλους με αντάλλαγμα μια δημόσια αμερικανική δέσμευση να μην εισβάλουν στην Κούβα και μια μυστική υπόσχεση να αποσυρθούν οι αμερικανικοί πύραυλοι Jupiter από την Τουρκία. Ακολούθησαν η «κόκκινη γραμμή» Ουάσινγκτον–Μόσχας και η Συνθήκη Μερικής Απαγόρευσης των Πυρηνικών Δοκιμών του 1963."
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
          extendedDescription: {
            en: "Some 250,000 people gathered at the Lincoln Memorial on 28 August 1963 for the March on Washington for Jobs and Freedom, where King spoke of a dream that his children would be judged 'not by the color of their skin but by the content of their character'. On 22 November, Kennedy was shot while riding in an open car through Dallas; the accused assassin, Lee Harvey Oswald, was himself killed two days later. His successor Lyndon Johnson used the national grief to pass the Civil Rights Act of 1964.",
            el: "Περίπου 250.000 άνθρωποι συγκεντρώθηκαν στο Μνημείο του Λίνκολν στις 28 Αυγούστου 1963 για την Πορεία προς την Ουάσινγκτον για Δουλειά και Ελευθερία, όπου ο Κινγκ μίλησε για ένα όνειρο ότι τα παιδιά του θα κρίνονται «όχι από το χρώμα του δέρματός τους αλλά από το περιεχόμενο του χαρακτήρα τους». Στις 22 Νοεμβρίου, ο Κένεντι πυροβολήθηκε ενώ διέσχιζε το Ντάλας σε ανοιχτό αυτοκίνητο· ο κατηγορούμενος δολοφόνος, Λι Χάρβεϊ Όσγουαλντ, σκοτώθηκε ο ίδιος δύο μέρες αργότερα. Ο διάδοχός του Λίντον Τζόνσον αξιοποίησε το εθνικό πένθος για να περάσει τον Νόμο για τα Πολιτικά Δικαιώματα του 1964."
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
          extendedDescription: {
            en: "On 'Bloody Sunday', 7 March 1965, state troopers beat peaceful marchers on the Edmund Pettus Bridge in Selma, Alabama; the televised violence helped pass the Voting Rights Act that August, which ended literacy tests and brought federal oversight to Southern elections. The same year the first U.S. combat troops landed in Vietnam, and by 1968 more than half a million were there. The war — in which some 58,000 Americans died — divided the nation, and 1968 brought the Tet Offensive and the assassinations of Martin Luther King Jr. and Robert Kennedy.",
            el: "Την «Ματωμένη Κυριακή», 7 Μαρτίου 1965, πολιτειακοί αστυνομικοί ξυλοκόπησαν ειρηνικούς διαδηλωτές στη γέφυρα Έντμουντ Πέτους στη Σέλμα της Αλαμπάμα· η βία που μεταδόθηκε στην τηλεόραση βοήθησε να ψηφιστεί εκείνον τον Αύγουστο ο Νόμος για τα Εκλογικά Δικαιώματα, που κατάργησε τα τεστ αλφαβητισμού και έθεσε τις εκλογές του Νότου υπό ομοσπονδιακή εποπτεία. Την ίδια χρονιά τα πρώτα αμερικανικά μάχιμα στρατεύματα αποβιβάστηκαν στο Βιετνάμ, και ως το 1968 βρίσκονταν εκεί πάνω από μισό εκατομμύριο. Ο πόλεμος — στον οποίο σκοτώθηκαν περίπου 58.000 Αμερικανοί — δίχασε το έθνος, και το 1968 έφερε την Επίθεση του Τετ και τις δολοφονίες του Μάρτιν Λούθερ Κινγκ και του Ρόμπερτ Κένεντι."
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
          extendedDescription: {
            en: "In 1961 Kennedy had challenged the nation to land a man on the Moon and return him safely before the decade was out. On 20 July 1969 Neil Armstrong and Buzz Aldrin set the lunar module Eagle down in the Sea of Tranquility while Michael Collins orbited above; Armstrong's words, 'That's one small step for man, one giant leap for mankind', were heard by hundreds of millions of people around the world. Twelve astronauts walked on the Moon before the Apollo programme ended in 1972.",
            el: "Το 1961 ο Κένεντι είχε θέσει στο έθνος τον στόχο να προσεληνώσει έναν άνθρωπο και να τον επιστρέψει με ασφάλεια πριν τελειώσει η δεκαετία. Στις 20 Ιουλίου 1969 ο Νιλ Άρμστρονγκ και ο Μπαζ Όλντριν προσεδάφισαν τη σεληνάκατο Eagle στη Θάλασσα της Γαλήνης, ενώ ο Μάικλ Κόλινς βρισκόταν σε τροχιά από πάνω· τα λόγια του Άρμστρονγκ, «Ένα μικρό βήμα για τον άνθρωπο, ένα τεράστιο άλμα για την ανθρωπότητα», ακούστηκαν από εκατοντάδες εκατομμύρια ανθρώπους σε όλο τον κόσμο. Δώδεκα αστροναύτες περπάτησαν στη Σελήνη πριν τελειώσει το πρόγραμμα Apollo το 1972."
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
          extendedDescription: {
            en: "It began with the arrest of five burglars inside the Democratic National Committee's offices at the Watergate complex in June 1972. Reporting by Bob Woodward and Carl Bernstein of The Washington Post and Senate hearings uncovered a cover-up reaching the White House, and the Supreme Court forced Nixon to release his secret tape recordings. Facing certain impeachment, he resigned on 9 August 1974; his successor Gerald Ford pardoned him. Saigon fell to North Vietnam in April 1975, and the decade was marked by oil shocks and inflation.",
            el: "Όλα ξεκίνησαν με τη σύλληψη πέντε διαρρηκτών μέσα στα γραφεία της Εθνικής Επιτροπής των Δημοκρατικών στο συγκρότημα Γουότεργκεϊτ τον Ιούνιο του 1972. Τα ρεπορτάζ του Μπομπ Γούντγουορντ και του Καρλ Μπερνστάιν της Washington Post και οι ακροάσεις της Γερουσίας αποκάλυψαν μια συγκάλυψη που έφτανε ως τον Λευκό Οίκο, και το Ανώτατο Δικαστήριο ανάγκασε τον Νίξον να δημοσιοποιήσει τις μυστικές ηχογραφήσεις του. Αντιμέτωπος με βέβαιη παραπομπή, παραιτήθηκε στις 9 Αυγούστου 1974· ο διάδοχός του Τζέραλντ Φορντ του απένειμε χάρη. Η Σαϊγκόν έπεσε στο Βόρειο Βιετνάμ τον Απρίλιο του 1975, και η δεκαετία σημαδεύτηκε από πετρελαϊκές κρίσεις και πληθωρισμό."
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
          extendedDescription: {
            en: "Reagan survived an assassination attempt weeks after taking office in 1981. His tax cuts and military build-up helped end the high inflation and recession of the early 1980s but tripled the national debt. After calling the Soviet Union an 'evil empire', he built a working relationship with Mikhail Gorbachev, and in Berlin in 1987 challenged him to 'tear down this wall'; the same year they signed the INF Treaty, the first to eliminate an entire class of nuclear weapons. The Iran–Contra scandal clouded his second term.",
            el: "Ο Ρέιγκαν επέζησε από απόπειρα δολοφονίας λίγες εβδομάδες μετά την ανάληψη των καθηκόντων του το 1981. Οι φορολογικές περικοπές και η στρατιωτική ενίσχυσή του βοήθησαν να τερματιστούν ο υψηλός πληθωρισμός και η ύφεση των αρχών της δεκαετίας του 1980, αλλά τριπλασίασαν το εθνικό χρέος. Αφού είχε αποκαλέσει τη Σοβιετική Ένωση «αυτοκρατορία του κακού», ανέπτυξε μια λειτουργική σχέση με τον Μιχαήλ Γκορμπατσόφ, και στο Βερολίνο το 1987 τον κάλεσε να «γκρεμίσει αυτό το τείχος»· την ίδια χρονιά υπέγραψαν τη Συνθήκη INF, την πρώτη που κατάργησε μια ολόκληρη κατηγορία πυρηνικών όπλων. Το σκάνδαλο Ιράν–Κόντρας σκίασε τη δεύτερη θητεία του."
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
          extendedDescription: {
            en: "The Berlin Wall fell in November 1989 and the communist regimes of Eastern Europe collapsed within months; Germany was reunified in 1990. In August 1991 hardliners in Moscow attempted a coup against Gorbachev, which failed when crowds led by Boris Yeltsin resisted in the streets. On 25 December 1991 Gorbachev resigned and the Soviet flag was lowered over the Kremlin, leaving fifteen independent republics; earlier that year the United States and the USSR had signed START I to cut their long-range nuclear arsenals.",
            el: "Το Τείχος του Βερολίνου έπεσε τον Νοέμβριο του 1989 και τα κομμουνιστικά καθεστώτα της Ανατολικής Ευρώπης κατέρρευσαν μέσα σε λίγους μήνες· η Γερμανία επανενώθηκε το 1990. Τον Αύγουστο του 1991 σκληροπυρηνικοί στη Μόσχα επιχείρησαν πραξικόπημα κατά του Γκορμπατσόφ, το οποίο απέτυχε όταν πλήθη με επικεφαλής τον Μπορίς Γέλτσιν αντιστάθηκαν στους δρόμους. Στις 25 Δεκεμβρίου 1991 ο Γκορμπατσόφ παραιτήθηκε και η σοβιετική σημαία κατέβηκε από το Κρεμλίνο, αφήνοντας δεκαπέντε ανεξάρτητες δημοκρατίες· νωρίτερα την ίδια χρονιά οι Ηνωμένες Πολιτείες και η ΕΣΣΔ είχαν υπογράψει τη Συνθήκη START I για τη μείωση των στρατηγικών πυρηνικών τους οπλοστασίων."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
