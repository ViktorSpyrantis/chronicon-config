/** Republic of India — Δημοκρατία της Ινδίας · Indian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const REPUBLIC_OF_INDIA = {
  id: "republic-of-india" as const,
  label: {
    en: "Republic of India",
    el: "Δημοκρατία της Ινδίας"
  },
  supertitle: {
    en: "The World's Largest Democracy",
    el: "Η Μεγαλύτερη Δημοκρατία του Κόσμου"
  },
  title: {
    en: "The Republic of India",
    el: "Η Δημοκρατία της Ινδίας"
  },
  subtitle: {
    en: "From freedom at midnight and Nehru's building of a democratic, secular nation, through the adoption of a landmark constitution, wars with its neighbours and the birth of Bangladesh, to the trial of the Emergency, the great economic reforms of 1991 and India's emergence as a rising global power. Slide across the decades in which a vast, diverse subcontinent held together as the world's largest democracy and set out to remake itself in freedom.",
    el: "Από την ελευθερία τα μεσάνυχτα και το χτίσιμο ενός δημοκρατικού, κοσμικού έθνους από τον Νεχρού, μέσα από την υιοθέτηση ενός ιστορικού συντάγματος, πολέμους με τους γείτονές της και τη γέννηση του Μπανγκλαντές, ως τη δοκιμασία της Έκτακτης Ανάγκης, τις μεγάλες οικονομικές μεταρρυθμίσεις του 1991 και την ανάδειξη της Ινδίας σε ανερχόμενη παγκόσμια δύναμη. Μετακινηθείτε στις δεκαετίες όπου μια απέραντη, πολυποίκιλη υποήπειρος κρατήθηκε ενωμένη ως η μεγαλύτερη δημοκρατία του κόσμου κι επιχείρησε να αναπλάσει τον εαυτό της μέσα στην ελευθερία."
  },
  menuDescription: {
    en: "Independent India: Nehru, the constitution, the wars, 1991's reforms and a rising power.",
    el: "Η ανεξάρτητη Ινδία: ο Νεχρού, το σύνταγμα, οι πόλεμοι, οι μεταρρυθμίσεις του 1991 και μια ανερχόμενη δύναμη."
  },
  footerLabel: {
    en: "Republic of India · 1947–present",
    el: "Δημοκρατία της Ινδίας · 1947–σήμερα"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Republic of India",
    el: "Η Δημοκρατία της Ινδίας"
  },
  theme: THEMES.sapphire,
  timeline: [
    {
      year: 1947,
      era: {
        en: "A New Nation",
        el: "Ένα Νέο Έθνος"
      },
      events: [
        {
          title: {
            en: "Freedom at midnight",
            el: "Ελευθερία τα μεσάνυχτα"
          },
          description: {
            en: "India awakens to independence, and Jawaharlal Nehru becomes the first prime minister of a free nation.",
            el: "Η Ινδία ξυπνά στην ανεξαρτησία, κι ο Τζαβαχαρλάλ Νεχρού γίνεται ο πρώτος πρωθυπουργός ενός ελεύθερου έθνους."
          },
          extendedDescription: {
            en: "As midnight struck on 15 August 1947, Nehru hailed India's \"tryst with destiny.\" The new nation faced immense trials: the wounds of Partition, millions of refugees, and the task of welding hundreds of princely states into one country. Within months the shock of Gandhi's assassination tested the young republic's resolve to remain united and secular.",
            el: "Καθώς χτυπούσαν τα μεσάνυχτα της 15ης Αυγούστου 1947, ο Νεχρού χαιρέτισε το «ραντεβού της Ινδίας με το πεπρωμένο». Το νέο έθνος αντιμετώπιζε τεράστιες δοκιμασίες: τις πληγές του Διαμελισμού, εκατομμύρια πρόσφυγες, και το έργο της συγκόλλησης εκατοντάδων πριγκιπικών κρατών σε μία χώρα. Μέσα σε μήνες το σοκ της δολοφονίας του Γκάντι δοκίμασε την αποφασιστικότητα της νεαρής δημοκρατίας να παραμείνει ενωμένη και κοσμική."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Nehru_in_the_Netherlands%2C_1957.jpg?width=1024",
            alt: {
              en: "Jawaharlal Nehru, India's first prime minister",
              el: "Ο Τζαβαχαρλάλ Νεχρού, ο πρώτος πρωθυπουργός της Ινδίας"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1950,
      era: {
        en: "The Constitution",
        el: "Το Σύνταγμα"
      },
      events: [
        {
          title: {
            en: "India becomes a republic",
            el: "Η Ινδία γίνεται δημοκρατία"
          },
          description: {
            en: "A new constitution, largely shaped by B. R. Ambedkar, makes India a sovereign democratic republic.",
            el: "Ένα νέο σύνταγμα, διαμορφωμένο σε μεγάλο βαθμό από τον Μπ. Ρ. Αμπεντκάρ, καθιστά την Ινδία κυρίαρχη δημοκρατική πολιτεία."
          },
          extendedDescription: {
            en: "On 26 January 1950 India adopted one of the longest written constitutions in the world. Guided by the jurist and social reformer B. R. Ambedkar, himself born into an \"untouchable\" caste, it guaranteed universal adult suffrage, equality and fundamental rights, and outlawed untouchability. A land of staggering diversity and deep poverty had committed itself to democracy on the widest scale ever attempted.",
            el: "Στις 26 Ιανουαρίου 1950 η Ινδία υιοθέτησε ένα από τα μακρύτερα γραπτά συντάγματα του κόσμου. Καθοδηγούμενο από τον νομικό και κοινωνικό μεταρρυθμιστή Μπ. Ρ. Αμπεντκάρ, γεννημένο ο ίδιος σε κάστα «ανέγγιχτων», εγγυήθηκε καθολικό δικαίωμα ψήφου, ισότητα και θεμελιώδη δικαιώματα, κι έθεσε εκτός νόμου το ανέγγιχτο. Μια χώρα εκπληκτικής ποικιλομορφίας και βαθιάς φτώχειας είχε δεσμευτεί στη δημοκρατία στην ευρύτερη κλίμακα που είχε ποτέ επιχειρηθεί."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Dr._Bhimrao_Ambedkar.jpg?width=1024",
            alt: {
              en: "B. R. Ambedkar, architect of India's constitution",
              el: "Ο Μπ. Ρ. Αμπεντκάρ, αρχιτέκτονας του συντάγματος της Ινδίας"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1961,
      era: {
        en: "The Nehru Years",
        el: "Τα Χρόνια του Νεχρού"
      },
      events: [
        {
          title: {
            en: "Building the nation",
            el: "Χτίζοντας το έθνος"
          },
          description: {
            en: "Nehru pursues industry, planning and non-alignment abroad, and rounds out the map by taking Goa from Portugal.",
            el: "Ο Νεχρού επιδιώκει τη βιομηχανία, τον σχεδιασμό και την αδέσμευτη πολιτική στο εξωτερικό, κι ολοκληρώνει τον χάρτη παίρνοντας τη Γκόα από την Πορτογαλία."
          },
          extendedDescription: {
            en: "Nehru set India on a path of state-led industry, dams and steel mills, five-year plans and scientific institutes, while championing non-alignment between the Cold War blocs. The states were redrawn along linguistic lines, and in 1961 India ended Portugal's centuries-old rule in Goa. But a border war lost to China in 1962 shook the nation and dimmed Nehru's final years.",
            el: "Ο Νεχρού έβαλε την Ινδία σε πορεία κρατικής βιομηχανίας, φραγμάτων και χαλυβουργείων, πενταετών σχεδίων κι επιστημονικών ιδρυμάτων, ενώ υπερασπιζόταν την αδέσμευτη στάση ανάμεσα στα μπλοκ του Ψυχρού Πολέμου. Οι πολιτείες αναχαράχθηκαν κατά γλωσσικές γραμμές, και το 1961 η Ινδία τερμάτισε την αιωνόβια κυριαρχία της Πορτογαλίας στη Γκόα. Όμως ένας συνοριακός πόλεμος που χάθηκε από την Κίνα το 1962 συγκλόνισε το έθνος κι αμαύρωσε τα τελευταία χρόνια του Νεχρού."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1971,
      era: {
        en: "War and Neighbours",
        el: "Πόλεμος και Γείτονες"
      },
      events: [
        {
          title: {
            en: "The birth of Bangladesh",
            el: "Η γέννηση του Μπανγκλαντές"
          },
          description: {
            en: "India's victory in war with Pakistan frees the east and creates the new nation of Bangladesh.",
            el: "Η νίκη της Ινδίας στον πόλεμο με το Πακιστάν απελευθερώνει την ανατολή και δημιουργεί το νέο έθνος του Μπανγκλαντές."
          },
          extendedDescription: {
            en: "When a brutal crackdown in East Pakistan sent millions of refugees into India, Prime Minister Indira Gandhi went to war. In a swift December campaign India defeated Pakistan and midwifed the independent state of Bangladesh. The victory made India the dominant power of South Asia and marked the height of Indira Gandhi's authority.",
            el: "Όταν μια βάναυση καταστολή στο Ανατολικό Πακιστάν έστειλε εκατομμύρια πρόσφυγες στην Ινδία, η πρωθυπουργός Ίντιρα Γκάντι κήρυξε πόλεμο. Σε μια ταχεία εκστρατεία τον Δεκέμβριο η Ινδία νίκησε το Πακιστάν και μαίευσε το ανεξάρτητο κράτος του Μπανγκλαντές. Η νίκη έκανε την Ινδία την κυρίαρχη δύναμη της Νότιας Ασίας και σημάδεψε το απόγειο της εξουσίας της Ίντιρα Γκάντι."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Indira_Gandhi_official_portrait.png?width=1024",
            alt: {
              en: "Prime Minister Indira Gandhi",
              el: "Η πρωθυπουργός Ίντιρα Γκάντι"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1975,
      era: {
        en: "The Emergency",
        el: "Η Έκτακτη Ανάγκη"
      },
      events: [
        {
          title: {
            en: "The Emergency",
            el: "Η Έκτακτη Ανάγκη"
          },
          description: {
            en: "Indira Gandhi suspends democracy and rules by decree, until voters turn her out in 1977.",
            el: "Η Ίντιρα Γκάντι αναστέλλει τη δημοκρατία και κυβερνά με διατάγματα, ώσπου οι ψηφοφόροι την απομακρύνουν το 1977."
          },
          extendedDescription: {
            en: "Facing legal challenge and unrest, Indira Gandhi declared a state of Emergency in 1975, jailing opponents, censoring the press and suspending civil liberties for nearly two years. It was the republic's gravest test. Yet when she called elections in 1977, the people voted her out — and India's democracy, remarkably, held. She would return to power soon after.",
            el: "Αντιμέτωπη με νομική πρόκληση κι αναταραχή, η Ίντιρα Γκάντι κήρυξε κατάσταση Έκτακτης Ανάγκης το 1975, φυλακίζοντας αντιπάλους, λογοκρίνοντας τον Τύπο κι αναστέλλοντας τις πολιτικές ελευθερίες για σχεδόν δύο χρόνια. Ήταν η σοβαρότερη δοκιμασία της δημοκρατίας. Κι όμως, όταν προκήρυξε εκλογές το 1977, ο λαός την καταψήφισε — κι η δημοκρατία της Ινδίας, αξιοσημείωτα, άντεξε. Θα επέστρεφε στην εξουσία λίγο αργότερα."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Indira_Gandhi_1966.png?width=1024",
            alt: {
              en: "The Emergency of 1975 to 1977",
              el: "Η Έκτακτη Ανάγκη του 1975 έως 1977"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1991,
      era: {
        en: "The Economic Reforms",
        el: "Οι Οικονομικές Μεταρρυθμίσεις"
      },
      events: [
        {
          title: {
            en: "The great liberalisation",
            el: "Η μεγάλη φιλελευθεροποίηση"
          },
          description: {
            en: "A financial crisis drives India to open its economy, unleashing decades of rapid growth.",
            el: "Μια οικονομική κρίση ωθεί την Ινδία να ανοίξει την οικονομία της, απελευθερώνοντας δεκαετίες ταχείας ανάπτυξης."
          },
          extendedDescription: {
            en: "Near bankruptcy in 1991, India dismantled the tangle of controls known as the \"licence Raj,\" opening to trade, investment and private enterprise. Growth accelerated, a vast middle class emerged, and a booming software and services industry made India a hub of the global economy. Hundreds of millions began, slowly, to rise out of poverty.",
            el: "Στα πρόθυρα της χρεοκοπίας το 1991, η Ινδία διέλυσε το κουβάρι των ελέγχων που ήταν γνωστό ως «Ρατζ των αδειών», ανοίγοντας στο εμπόριο, τις επενδύσεις και την ιδιωτική επιχειρηματικότητα. Η ανάπτυξη επιταχύνθηκε, μια τεράστια μεσαία τάξη αναδύθηκε, κι μια ακμάζουσα βιομηχανία λογισμικού κι υπηρεσιών έκανε την Ινδία κόμβο της παγκόσμιας οικονομίας. Εκατοντάδες εκατομμύρια άρχισαν, αργά, να ανεβαίνουν πάνω από τη φτώχεια."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Official_Portrait_of_the_Prime_Minister_Dr._Manmohan_Singh_%283x4_cropped%29.jpg?width=1024",
            alt: {
              en: "Manmohan Singh, architect of the 1991 reforms",
              el: "Ο Μανμόχαν Σινγκ, αρχιτέκτονας των μεταρρυθμίσεων του 1991"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 2023,
      era: {
        en: "A Rising Power",
        el: "Μια Ανερχόμενη Δύναμη"
      },
      events: [
        {
          title: {
            en: "India rises on the world stage",
            el: "Η Ινδία ανεβαίνει στην παγκόσμια σκηνή"
          },
          description: {
            en: "Now the world's most populous nation, India lands a craft on the Moon and takes its place as a major power.",
            el: "Πλέον το πολυπληθέστερο έθνος του κόσμου, η Ινδία προσσελήνωσε ένα σκάφος και παίρνει τη θέση της ως μεγάλη δύναμη."
          },
          extendedDescription: {
            en: "In 2023 India became the most populous country on earth and, with the Chandrayaan-3 mission, the first to land near the Moon's south pole. A nuclear-armed power with a fast-growing economy, a vast diaspora and a thriving space and technology sector, India entered its ninth decade of freedom as one of the pivotal nations of the twenty-first century — still wrestling with poverty and inequality even as it reached for the stars.",
            el: "Το 2023 η Ινδία έγινε το πολυπληθέστερο κράτος της γης και, με την αποστολή Τσαντραγιάν-3, το πρώτο που προσσεληνώθηκε κοντά στον νότιο πόλο της Σελήνης. Μια πυρηνική δύναμη με ταχέως αναπτυσσόμενη οικονομία, τεράστια διασπορά κι έναν ακμάζοντα τομέα διαστήματος και τεχνολογίας, η Ινδία μπήκε στην ένατη δεκαετία της ελευθερίας της ως ένα από τα κομβικά έθνη του εικοστού πρώτου αιώνα — παλεύοντας ακόμη με τη φτώχεια και την ανισότητα ενώ άπλωνε το χέρι στα άστρα."
          },
          category: "other",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Chandrayaan-3_%E2%80%93_Image_of_Vikram_lander_on_lunar_surface_taken_by_Pragyan_rover_navcam_at_1104_IST%2C_30_August_2023_from_15_meters_away_%28with_text%29.webp?width=1024",
            alt: {
              en: "India's Chandrayaan-3 Moon mission",
              el: "Η σεληνιακή αποστολή Τσαντραγιάν-3 της Ινδίας"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
