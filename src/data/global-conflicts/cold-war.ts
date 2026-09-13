/** The Cold War — Ο Ψυχρός Πόλεμος · Global Conflicts */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const COLD_WAR = {
  id: "cold-war" as const,
  label: {
    en: "The Cold War",
    el: "Ο Ψυχρός Πόλεμος"
  },
  supertitle: {
    en: "East vs West",
    el: "Ανατολή εναντίον Δύσης"
  },
  title: {
    en: "The Cold War",
    el: "Ο Ψυχρός Πόλεμος"
  },
  subtitle: {
    en: "From the Truman Doctrine and the Berlin Airlift through the Korean War, the Cuban Missile Crisis and Vietnam, the Prague Spring and the moon landing, to the Soviet war in Afghanistan, Gorbachev's reforms, the fall of the Berlin Wall, and the dissolution of the Soviet Union. Slide across the forty-year contest between the superpowers that divided the world and never quite became a war.",
    el: "Από το Δόγμα Τρούμαν και την Αερογέφυρα του Βερολίνου, μέσα από τον Πόλεμο της Κορέας, την Κρίση των Πυραύλων της Κούβας και το Βιετνάμ, την Άνοιξη της Πράγας και την προσσελήνωση, ως τον σοβιετικό πόλεμο στο Αφγανιστάν, τις μεταρρυθμίσεις του Γκορμπατσόφ, την πτώση του Τείχους του Βερολίνου και τη διάλυση της Σοβιετικής Ένωσης. Μετακινηθείτε ανάμεσα στη σαραντάχρονη αναμέτρηση των υπερδυνάμεων που διαίρεσε τον κόσμο και ποτέ δεν έγινε πραγματικά πόλεμος."
  },
  menuDescription: {
    en: "Forty years the world held its breath: Berlin, Cuba, Afghanistan, and the Wall.",
    el: "Σαράντα χρόνια που ο κόσμος κράτησε την ανάσα του: Βερολίνο, Κούβα, Αφγανιστάν και το Τείχος."
  },
  footerLabel: {
    en: "The Cold War · 1947-1991",
    el: "Ο Ψυχρός Πόλεμος · 1947-1991"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Cold War",
    el: "Ο Ψυχρός Πόλεμος"
  },
  theme: THEMES.crimson,
  timeline: [
    {
      year: 1947,
      month: 3,
      era: {
        en: "The Iron Curtain",
        el: "Το Σιδηρούν Παραπέτασμα"
      },
      events: [
        {
          title: {
            en: "The Truman Doctrine and the Marshall Plan",
            el: "Το Δόγμα Τρούμαν και το Σχέδιο Μάρσαλ"
          },
          description: {
            en: "On 12 March, President Truman pledges American support to 'free peoples resisting subjugation', beginning with aid to Greece and Turkey. In June, Secretary of State Marshall announces a vast programme of economic aid to rebuild a shattered Europe. The two initiatives define the American policy of containment; Stalin forbids the Eastern bloc to take part, and the continent is cleft in two.",
            el: "Στις 12 Μαρτίου, ο Πρόεδρος Τρούμαν δεσμεύεται για αμερικανική στήριξη σε «ελεύθερους λαούς που αντιστέκονται στην υποδούλωση», αρχίζοντας με βοήθεια προς την Ελλάδα και την Τουρκία. Τον Ιούνιο, ο υπουργός Εξωτερικών Μάρσαλ ανακοινώνει ένα τεράστιο πρόγραμμα οικονομικής βοήθειας για την ανοικοδόμηση μιας κατεστραμμένης Ευρώπης. Οι δύο πρωτοβουλίες ορίζουν την αμερικανική πολιτική της ανάσχεσης· ο Στάλιν απαγορεύει στο Ανατολικό μπλοκ να συμμετάσχει, και η ήπειρος σχίζεται στα δύο."
          },
          extendedDescription: {
            en: "Winston Churchill had already named the new frontier at Fulton, Missouri, in March 1946: 'From Stettin in the Baltic to Trieste in the Adriatic, an iron curtain has descended across the Continent.' The wartime alliance of the Grand Coalition had dissolved within two years of victory into a global ideological confrontation between liberal capitalism and Soviet communism that would shape the next four decades.",
            el: "Ο Ουίνστον Τσόρτσιλ είχε ήδη ονομάσει το νέο σύνορο στο Φούλτον του Μιζούρι, τον Μάρτιο του 1946: «Από το Στέτιν στη Βαλτική ως την Τεργέστη στην Αδριατική, ένα σιδηρούν παραπέτασμα έχει κατέβει στην ήπειρο». Η πολεμική συμμαχία του Μεγάλου Συνασπισμού είχε διαλυθεί μέσα σε δύο χρόνια από τη νίκη σε μια παγκόσμια ιδεολογική αντιπαράθεση μεταξύ φιλελεύθερου καπιταλισμού και σοβιετικού κομμουνισμού που θα διαμόρφωνε τις επόμενες τέσσερις δεκαετίες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1948,
      month: 6,
      era: {
        en: "The Berlin Blockade",
        el: "Ο Αποκλεισμός του Βερολίνου"
      },
      events: [
        {
          title: {
            en: "The Berlin Airlift",
            el: "Η Αερογέφυρα του Βερολίνου"
          },
          description: {
            en: "On 24 June, Stalin cuts all land routes into West Berlin, hoping to starve the Western sectors of the divided city out of the deep interior of the Soviet zone. Instead the Western allies mount the Berlin Airlift: for eleven months, aircraft land every few minutes, day and night, flying in food and coal for two million people. In May 1949 Stalin lifts the blockade, defeated.",
            el: "Στις 24 Ιουνίου, ο Στάλιν κόβει όλες τις χερσαίες οδούς προς το Δυτικό Βερολίνο, ελπίζοντας να λιμοκτονήσει τους δυτικούς τομείς της διχοτομημένης πόλης, βαθιά μέσα στη σοβιετική ζώνη. Αντ' αυτού οι Δυτικοί σύμμαχοι στήνουν την Αερογέφυρα του Βερολίνου: επί έντεκα μήνες, αεροσκάφη προσγειώνονται κάθε λίγα λεπτά, μέρα και νύχτα, μεταφέροντας τρόφιμα και άνθρακα για δύο εκατομμύρια ανθρώπους. Τον Μάιο του 1949 ο Στάλιν αίρει τον αποκλεισμό, ηττημένος."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1949,
      month: 4,
      era: {
        en: "Two Blocs, Two Bombs",
        el: "Δύο Μπλοκ, Δύο Βόμβες"
      },
      events: [
        {
          title: {
            en: "NATO, the Soviet bomb, and Red China",
            el: "Το ΝΑΤΟ, η σοβιετική βόμβα και η Κόκκινη Κίνα"
          },
          description: {
            en: "1949 hardens the divide. On 4 April the Western democracies sign the North Atlantic Treaty, binding North America to the defence of Europe. In August the Soviet Union tests its first atomic bomb, ending the American monopoly. And on 1 October, Mao Zedong proclaims the People's Republic of China from the gate of Heavenly Peace. The Cold War is now global and nuclear.",
            el: "Το 1949 σκληραίνει τη διαίρεση. Στις 4 Απριλίου οι δυτικές δημοκρατίες υπογράφουν το Βορειοατλαντικό Σύμφωνο, δεσμεύοντας τη Βόρεια Αμερική στην άμυνα της Ευρώπης. Τον Αύγουστο η Σοβιετική Ένωση δοκιμάζει την πρώτη της ατομική βόμβα, τερματίζοντας το αμερικανικό μονοπώλιο. Και την 1η Οκτωβρίου, ο Μάο Τσε Τουνγκ ανακηρύσσει τη Λαϊκή Δημοκρατία της Κίνας από την Πύλη της Ουράνιας Ειρήνης. Ο Ψυχρός Πόλεμος είναι πλέον παγκόσμιος και πυρηνικός."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1950,
      month: 6,
      era: {
        en: "The Korean War",
        el: "Ο Πόλεμος της Κορέας"
      },
      events: [
        {
          title: {
            en: "Hot war in Korea",
            el: "Θερμός πόλεμος στην Κορέα"
          },
          description: {
            en: "On 25 June, communist North Korea invades the South. The United Nations, in the Soviet Union's absence from the Security Council, authorises a defence led by the United States. Three years of war follow, drawing in the new People's Republic of China; the front stabilises near the 38th parallel where it began. The armistice of 1953 leaves Korea divided and some three million dead.",
            el: "Στις 25 Ιουνίου, η κομμουνιστική Βόρεια Κορέα εισβάλλει στον Νότο. Ο ΟΗΕ, εν απουσία της Σοβιετικής Ένωσης από το Συμβούλιο Ασφαλείας, εξουσιοδοτεί μια άμυνα με επικεφαλής τις Ηνωμένες Πολιτείες. Ακολουθούν τρία χρόνια πολέμου, που παρασύρουν τη νέα Λαϊκή Δημοκρατία της Κίνας· το μέτωπο σταθεροποιείται κοντά στον 38ο παράλληλο απ' όπου ξεκίνησε. Η ανακωχή του 1953 αφήνει την Κορέα διαιρεμένη και περίπου τρία εκατομμύρια νεκρούς."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1956,
      month: 10,
      era: {
        en: "Budapest",
        el: "Βουδαπέστη"
      },
      events: [
        {
          title: {
            en: "The Hungarian Revolution is crushed",
            el: "Η Ουγγρική Επανάσταση συντρίβεται"
          },
          description: {
            en: "In October a national uprising in Hungary topples the Stalinist regime and declares neutrality and withdrawal from the Warsaw Pact — the Soviet military alliance formed the year before. On 4 November Soviet tanks roll into Budapest and drown the revolution in blood; some 2,500 Hungarians die and 200,000 flee west. The West, distracted by the simultaneous Suez Crisis, does not intervene.",
            el: "Τον Οκτώβριο μια εθνική εξέγερση στην Ουγγαρία ανατρέπει το σταλινικό καθεστώς και κηρύσσει ουδετερότητα και αποχώρηση από το Σύμφωνο της Βαρσοβίας — τη σοβιετική στρατιωτική συμμαχία που σχηματίστηκε τον προηγούμενο χρόνο. Στις 4 Νοεμβρίου σοβιετικά τανκς εισβάλλουν στη Βουδαπέστη και πνίγουν την επανάσταση στο αίμα· περίπου 2.500 Ούγγροι πεθαίνουν και 200.000 διαφεύγουν στη Δύση. Η Δύση, αποσπασμένη από την ταυτόχρονη Κρίση του Σουέζ, δεν επεμβαίνει."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1961,
      month: 8,
      era: {
        en: "The Berlin Wall",
        el: "Το Τείχος του Βερολίνου"
      },
      events: [
        {
          title: {
            en: "A wall divides Berlin",
            el: "Ένα τείχος διαιρεί το Βερολίνο"
          },
          description: {
            en: "On the night of 13 August, to stop the haemorrhage of refugees fleeing to the West through the last open door in the Iron Curtain, East Germany seals off West Berlin with barbed wire, soon replaced by a concrete wall. For twenty-eight years the Berlin Wall stands as the physical symbol of a divided Europe and a divided world.",
            el: "Τη νύχτα της 13ης Αυγούστου, για να σταματήσει την αιμορραγία των προσφύγων που διέφευγαν στη Δύση μέσα από την τελευταία ανοιχτή πόρτα του Σιδηρού Παραπετάσματος, η Ανατολική Γερμανία σφραγίζει το Δυτικό Βερολίνο με συρματόπλεγμα, που σύντομα αντικαθίσταται από ένα τσιμεντένιο τείχος. Επί είκοσι οκτώ χρόνια το Τείχος του Βερολίνου στέκει ως το υλικό σύμβολο μιας διαιρεμένης Ευρώπης και ενός διαιρεμένου κόσμου."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1962,
      month: 10,
      era: {
        en: "The Cuban Missile Crisis",
        el: "Η Κρίση των Πυραύλων της Κούβας"
      },
      events: [
        {
          title: {
            en: "Thirteen days on the brink",
            el: "Δεκατρείς ημέρες στο χείλος"
          },
          description: {
            en: "In October, American U-2 flights reveal Soviet nuclear missiles being installed in Cuba, ninety miles from Florida. For thirteen days the world stands closer to nuclear war than ever before or since, as Kennedy blockades the island and demands their removal. On 28 October Khrushchev backs down; in secret, the United States agrees to withdraw its own missiles from Turkey. Both sides, shaken, install a hotline and begin to talk.",
            el: "Τον Οκτώβριο, αμερικανικές πτήσεις U-2 αποκαλύπτουν σοβιετικούς πυρηνικούς πυραύλους να εγκαθίστανται στην Κούβα, ενενήντα μίλια από τη Φλόριντα. Επί δεκατρείς ημέρες ο κόσμος στέκεται πιο κοντά σε πυρηνικό πόλεμο από ποτέ, καθώς ο Κένεντι αποκλείει το νησί και απαιτεί την απομάκρυνσή τους. Στις 28 Οκτωβρίου ο Χρουστσόφ υποχωρεί· κρυφά, οι Ηνωμένες Πολιτείες συμφωνούν να αποσύρουν τους δικούς τους πυραύλους από την Τουρκία. Και οι δύο πλευρές, κλονισμένες, εγκαθιστούν μια «κόκκινη γραμμή» και αρχίζουν να μιλούν."
          },
          extendedDescription: {
            en: "The crisis was the hinge of the Cold War. Having peered into the abyss, both superpowers pulled back: the Partial Test Ban Treaty followed in 1963, and the long process of détente and arms control began. The confrontation also confirmed the logic of 'mutually assured destruction' — the grim guarantee that neither side could win a nuclear war, which would keep the peace, of a kind, for the next quarter-century.",
            el: "Η κρίση ήταν ο άξονας του Ψυχρού Πολέμου. Έχοντας κοιτάξει στην άβυσσο, και οι δύο υπερδυνάμεις τραβήχτηκαν πίσω: η Συνθήκη Μερικής Απαγόρευσης των Πυρηνικών Δοκιμών ακολούθησε το 1963, και άρχισε η μακρά διαδικασία της ύφεσης και του ελέγχου των εξοπλισμών. Η αντιπαράθεση επιβεβαίωσε επίσης τη λογική της «αμοιβαίως εξασφαλισμένης καταστροφής» — τη ζοφερή εγγύηση ότι καμία πλευρά δεν μπορούσε να κερδίσει έναν πυρηνικό πόλεμο, που θα κρατούσε μια κάποια ειρήνη για το επόμενο τέταρτο του αιώνα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1968,
      month: 8,
      era: {
        en: "The Prague Spring",
        el: "Η Άνοιξη της Πράγας"
      },
      events: [
        {
          title: {
            en: "Tanks end 'socialism with a human face'",
            el: "Τα τανκς τερματίζουν τον «σοσιαλισμό με ανθρώπινο πρόσωπο»"
          },
          description: {
            en: "Under Alexander Dubček, Czechoslovakia attempts a liberalising reform of communism — the Prague Spring. On the night of 20-21 August, half a million Warsaw Pact troops invade to crush it. The 'Brezhnev Doctrine' proclaims the right of the Soviet bloc to intervene wherever socialism is threatened. In the West, the invasion disillusions a generation of communists.",
            el: "Υπό τον Αλεξάντερ Ντούμπτσεκ, η Τσεχοσλοβακία επιχειρεί μια φιλελεύθερη μεταρρύθμιση του κομμουνισμού — την Άνοιξη της Πράγας. Τη νύχτα της 20ής προς 21η Αυγούστου, μισό εκατομμύριο στρατεύματα του Συμφώνου της Βαρσοβίας εισβάλλουν για να τη συντρίψουν. Το «Δόγμα Μπρέζνιεφ» διακηρύσσει το δικαίωμα του σοβιετικού μπλοκ να επεμβαίνει όπου απειλείται ο σοσιαλισμός. Στη Δύση, η εισβολή απογοητεύει μια γενιά κομμουνιστών."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1969,
      month: 7,
      era: {
        en: "The Space Race",
        el: "Ο Διαστημικός Αγώνας"
      },
      events: [
        {
          title: {
            en: "Americans walk on the Moon",
            el: "Αμερικανοί περπατούν στη Σελήνη"
          },
          description: {
            en: "On 20 July, Apollo 11 lands on the Moon and Neil Armstrong takes 'one small step for man, one giant leap for mankind'. The triumph answers the Soviet lead of the previous decade — Sputnik in 1957, Gagarin the first man in space in 1961 — and wins the space race that had become the Cold War's grandest contest of prestige and technology.",
            el: "Στις 20 Ιουλίου, το Apollo 11 προσσεληνώνεται και ο Νιλ Άρμστρονγκ κάνει «ένα μικρό βήμα για τον άνθρωπο, ένα γιγάντιο άλμα για την ανθρωπότητα». Ο θρίαμβος απαντά στο σοβιετικό προβάδισμα της προηγούμενης δεκαετίας — ο Σπούτνικ το 1957, ο Γκαγκάριν ο πρώτος άνθρωπος στο διάστημα το 1961 — και κερδίζει τον διαστημικό αγώνα που είχε γίνει η μεγαλοπρεπέστερη αναμέτρηση κύρους και τεχνολογίας του Ψυχρού Πολέμου."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1975,
      month: 4,
      era: {
        en: "Vietnam",
        el: "Βιετνάμ"
      },
      events: [
        {
          title: {
            en: "The fall of Saigon",
            el: "Η πτώση της Σαϊγκόν"
          },
          description: {
            en: "On 30 April, North Vietnamese tanks crash through the gates of the presidential palace in Saigon as the last Americans are lifted by helicopter from the embassy roof. After a decade of direct American involvement, 58,000 US and millions of Vietnamese dead, the war ends in communist victory and a united Vietnam. It is the greatest defeat of American power in the Cold War.",
            el: "Στις 30 Απριλίου, βορειοβιετναμέζικα τανκς διαρρηγνύουν τις πύλες του προεδρικού μεγάρου στη Σαϊγκόν καθώς οι τελευταίοι Αμερικανοί απομακρύνονται με ελικόπτερο από τη στέγη της πρεσβείας. Μετά από μια δεκαετία άμεσης αμερικανικής εμπλοκής, 58.000 Αμερικανούς και εκατομμύρια Βιετναμέζους νεκρούς, ο πόλεμος τελειώνει με κομμουνιστική νίκη και ένα ενωμένο Βιετνάμ. Είναι η μεγαλύτερη ήττα της αμερικανικής ισχύος στον Ψυχρό Πόλεμο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1979,
      month: 12,
      era: {
        en: "Afghanistan",
        el: "Αφγανιστάν"
      },
      events: [
        {
          title: {
            en: "The Soviet invasion of Afghanistan",
            el: "Η σοβιετική εισβολή στο Αφγανιστάν"
          },
          description: {
            en: "On 24 December, Soviet forces invade Afghanistan to prop up a faltering communist government. They are met by a fierce insurgency of mujahideen fighters, armed and financed by the United States, Pakistan, and Saudi Arabia. The ten-year war — the Soviet Union's own Vietnam — bleeds the Red Army, drains the treasury, and shakes faith in the system at home.",
            el: "Στις 24 Δεκεμβρίου, σοβιετικές δυνάμεις εισβάλλουν στο Αφγανιστάν για να στηρίξουν μια κλονιζόμενη κομμουνιστική κυβέρνηση. Αντιμετωπίζουν μια άγρια εξέγερση μαχητών μουτζαχεντίν, οπλισμένων και χρηματοδοτούμενων από τις Ηνωμένες Πολιτείες, το Πακιστάν και τη Σαουδική Αραβία. Ο δεκάχρονος πόλεμος — το Βιετνάμ της ίδιας της Σοβιετικής Ένωσης — αιμορραγεί τον Κόκκινο Στρατό, στραγγίζει το θησαυροφυλάκιο και κλονίζει την πίστη στο σύστημα στο εσωτερικό."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1985,
      month: 3,
      era: {
        en: "Glasnost and Perestroika",
        el: "Γκλάσνοστ και Περεστρόικα"
      },
      events: [
        {
          title: {
            en: "Gorbachev tries to save the system",
            el: "Ο Γκορμπατσόφ προσπαθεί να σώσει το σύστημα"
          },
          description: {
            en: "In March, Mikhail Gorbachev becomes leader of a Soviet Union sclerotic and stagnant. To revive it he launches perestroika — restructuring — and glasnost — openness. He seeks arms reductions with President Reagan and renounces the Brezhnev Doctrine. But reform unleashes forces he cannot control: once the peoples of the bloc no longer fear Soviet tanks, the empire begins to crack.",
            el: "Τον Μάρτιο, ο Μιχαήλ Γκορμπατσόφ γίνεται ηγέτης μιας Σοβιετικής Ένωσης σκληρυμένης και στάσιμης. Για να την αναζωογονήσει εξαπολύει την περεστρόικα — αναδιάρθρωση — και τη γκλάσνοστ — διαφάνεια. Επιδιώκει μειώσεις εξοπλισμών με τον Πρόεδρο Ρίγκαν και αποκηρύσσει το Δόγμα Μπρέζνιεφ. Αλλά η μεταρρύθμιση απελευθερώνει δυνάμεις που δεν μπορεί να ελέγξει: μόλις οι λαοί του μπλοκ πάψουν να φοβούνται τα σοβιετικά τανκς, η αυτοκρατορία αρχίζει να ραγίζει."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1989,
      month: 11,
      era: {
        en: "The Fall of the Wall",
        el: "Η Πτώση του Τείχους"
      },
      events: [
        {
          title: {
            en: "1989 and the fall of the Berlin Wall",
            el: "Το 1989 και η πτώση του Τείχους του Βερολίνου"
          },
          description: {
            en: "Through 1989 the communist regimes of Eastern Europe fall one after another — in Poland, Hungary, Czechoslovakia, Bulgaria, and Romania — in a wave of mostly peaceful revolutions. On the night of 9 November, an East German official's confused announcement sends crowds to the Berlin Wall; the guards stand aside, and the people tear it down. The Iron Curtain is lifted.",
            el: "Μέσα στο 1989 τα κομμουνιστικά καθεστώτα της Ανατολικής Ευρώπης πέφτουν το ένα μετά το άλλο — στην Πολωνία, την Ουγγαρία, την Τσεχοσλοβακία, τη Βουλγαρία και τη Ρουμανία — σε ένα κύμα κατά κύριο λόγο ειρηνικών επαναστάσεων. Τη νύχτα της 9ης Νοεμβρίου, η μπερδεμένη ανακοίνωση ενός Ανατολικογερμανού αξιωματούχου στέλνει τα πλήθη στο Τείχος του Βερολίνου· οι φρουροί παραμερίζουν, και ο λαός το γκρεμίζει. Το Σιδηρούν Παραπέτασμα ανασηκώνεται."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1991,
      month: 12,
      era: {
        en: "The End of the Soviet Union",
        el: "Το Τέλος της Σοβιετικής Ένωσης"
      },
      events: [
        {
          title: {
            en: "The red flag comes down over the Kremlin",
            el: "Η κόκκινη σημαία κατεβαίνει από το Κρεμλίνο"
          },
          description: {
            en: "After a failed hardliners' coup in August accelerates the collapse, the Soviet republics declare independence one by one. On 25 December Gorbachev resigns; the hammer-and-sickle is lowered over the Kremlin for the last time and replaced by the Russian tricolour. On 26 December the Soviet Union formally ceases to exist. The Cold War is over, and with it the short twentieth century.",
            el: "Αφού ένα αποτυχημένο πραξικόπημα σκληροπυρηνικών τον Αύγουστο επιταχύνει την κατάρρευση, οι σοβιετικές δημοκρατίες κηρύσσουν την ανεξαρτησία τους μία προς μία. Στις 25 Δεκεμβρίου ο Γκορμπατσόφ παραιτείται· το σφυροδρέπανο κατεβαίνει από το Κρεμλίνο για τελευταία φορά και αντικαθίσταται από τη ρωσική τρίχρωμη σημαία. Στις 26 Δεκεμβρίου η Σοβιετική Ένωση παύει επίσημα να υπάρχει. Ο Ψυχρός Πόλεμος έχει τελειώσει, και μαζί του ο σύντομος εικοστός αιώνας."
          },
          extendedDescription: {
            en: "The forty-four-year contest ended without the great-power war it had always threatened. Its close left the United States the sole superpower and inaugurated a brief 'unipolar moment'; some spoke of the 'end of history'. But the collapse also unfroze conflicts the Cold War had held in check, and the map of Eurasia — fifteen new states from the Soviet Union alone — would take decades to settle.",
            el: "Η σαραντατετράχρονη αναμέτρηση τελείωσε χωρίς τον πόλεμο των μεγάλων δυνάμεων που πάντα απειλούσε. Το κλείσιμό της άφησε τις Ηνωμένες Πολιτείες τη μόνη υπερδύναμη και εγκαινίασε μια σύντομη «μονοπολική στιγμή»· κάποιοι μίλησαν για το «τέλος της ιστορίας». Αλλά η κατάρρευση ξεπάγωσε επίσης συγκρούσεις που ο Ψυχρός Πόλεμος είχε κρατήσει υπό έλεγχο, και ο χάρτης της Ευρασίας — δεκαπέντε νέα κράτη μόνο από τη Σοβιετική Ένωση — θα χρειαζόταν δεκαετίες για να καθίσει."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
