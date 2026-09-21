/** Roman Hispania — Ρωμαϊκή Ισπανία · Spanish History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const ROMAN_HISPANIA = {
  id: "roman-hispania" as const,
  label: {
    en: "Roman Hispania",
    el: "Ρωμαϊκή Ισπανία"
  },
  supertitle: {
    en: "Hispania Romana",
    el: "Ρωμαϊκή Ισπανία"
  },
  title: {
    en: "Roman Hispania",
    el: "Ρωμαϊκή Ισπανία"
  },
  subtitle: {
    en: "From the Scipiones at Emporion and the storming of New Carthage through Viriathus and Numantia, Sertorius and Caesar at Munda, Augustus's Cantabrian wars and the founding of Emerita Augusta, the Hispano-Roman emperors Trajan and Hadrian, Seneca and Martial, the Council of Elvira and the execution of Priscillian, to the crossing of the Vandals and Alans, the rise of the Visigothic kingdom, and the end of Roman rule in the peninsula. Slide across the centuries to read the major events that made Hispania Roman.",
    el: "Από τους Σκιπίωνες στο Εμπόριον και την άλωση της Νέας Καρχηδόνας, μέσα από τον Βιρίαθο και τη Νουμαντία, τον Σερτώριο και τον Καίσαρα στη Μούντα, τους Καντάβριους πολέμους του Αυγούστου και την ίδρυση της Εμέριτα Αυγούστα, τους ισπανορωμαίους αυτοκράτορες Τραϊανό και Αδριανό, τον Σενέκα και τον Μαρτιάλη, τη Σύνοδο της Ελβίρας και την εκτέλεση του Πρισκιλλιανού, ως τη διάβαση των Βανδάλων και των Αλανών, την άνοδο του Βισιγοτθικού βασιλείου και το τέλος της ρωμαϊκής κυριαρχίας στη χερσόνησο. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα γεγονότα που έκαναν την Ιβηρική ρωμαϊκή."
  },
  menuDescription: {
    en: "Six centuries of Roman Hispania: Numantia, the emperors it gave Rome, and the Visigoths who inherited it.",
    el: "Έξι αιώνες ρωμαϊκής Ιβηρικής: η Νουμαντία, οι αυτοκράτορες που έδωσε στη Ρώμη κι οι Βισιγότθοι που την κληρονόμησαν."
  },
  footerLabel: {
    en: "Roman Hispania · 218 BCE – 5th century CE",
    el: "Ρωμαϊκή Ισπανία · 218 π.Χ. – 5ος αιώνας μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Roman Hispania",
    el: "Ρωμαϊκή Ισπανία"
  },
  theme: THEMES.ruby,
  timeline: [
    {
      year: -218,
      era: {
        en: "Second Punic War",
        el: "Β΄ Καρχηδονιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Gnaeus Scipio lands at Emporion",
            el: "Ο Γναίος Σκιπίων αποβιβάζεται στο Εμπόριον"
          },
          description: {
            en: "While Hannibal marches north through Gaul towards the Alps, the consul's brother Gnaeus Cornelius Scipio disembarks at the Greek colony of Emporion and opens the Iberian front of the Second Punic War.",
            el: "Ενώ ο Αννίβας προελαύνει βόρεια διαμέσου της Γαλατίας προς τις Άλπεις, ο αδελφός του υπάτου Γναίος Κορνήλιος Σκιπίων αποβιβάζεται στην ελληνική αποικία του Εμπορίου και ανοίγει το ιβηρικό μέτωπο του Β΄ Καρχηδονιακού Πολέμου."
          },
          extendedDescription: {
            en: "Polybius and Livy preserve the strategic logic: keep Hasdrubal Barca in Iberia and starve Hannibal of reinforcements. Gnaeus, joined the following year by his brother Publius, would campaign for seven years along the Ebro before both fell in twin disasters in 211 BC — leaving the salvage of the war in Iberia to a young Publius the son, the future Africanus.",
            el: "Ο Πολύβιος και ο Λίβιος διασώζουν τη στρατηγική λογική: να κρατηθεί ο Ασδρούβας ο Βάρκας στην Ιβηρική και να στερηθεί ο Αννίβας ενισχύσεων. Ο Γναίος, μαζί με τον αδελφό του Πόπλιο τον επόμενο χρόνο, θα εκστράτευσαν επί επτά χρόνια κατά μήκος του Ίβηρα, ώσπου έπεσαν και οι δύο σε διπλή καταστροφή το 211 π.Χ. — αφήνοντας τη σωτηρία του πολέμου στην Ιβηρική στον νεαρό Πόπλιο τον γιο, τον μελλοντικό Αφρικανό."
          },
          category: "military"
        }
      ]
    },
    {
      year: -209,
      era: {
        en: "Second Punic War",
        el: "Β΄ Καρχηδονιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Scipio storms New Carthage",
            el: "Ο Σκιπίωνας καταλαμβάνει τη Νέα Καρχηδόνα"
          },
          description: {
            en: "The 25-year-old Publius Cornelius Scipio takes the Barcid capital Qart Hadasht in a single day, wading his men through the lagoon at low tide while a feint engages the seaward walls.",
            el: "Ο εικοσιπεντάχρονος Πόπλιος Κορνήλιος Σκιπίων καταλαμβάνει την πρωτεύουσα των Βαρκιδών Καρτ Χαντάστ σε μία ημέρα, οδηγώντας τους άνδρες του διαμέσου της λιμνοθάλασσας με την άμπωτη, ενώ μια παραπλανητική επίθεση απασχολεί τα τείχη από τη θάλασσα."
          },
          extendedDescription: {
            en: "Polybius, who interviewed Scipio's friend Laelius, gives the famous account: Scipio learned from local fishermen that the lagoon was wadeable at evening, when the wind drove its waters out to sea. The fall of New Carthage delivered the silver mines, the Carthaginian war-chest, and the Iberian hostages — whom Scipio sent home with conspicuous courtesy, winning over tribe after tribe to Rome.",
            el: "Ο Πολύβιος, που πήρε συνέντευξη από τον φίλο του Σκιπίωνα Λαίλιο, δίνει την περίφημη αφήγηση: ο Σκιπίωνας έμαθε από ντόπιους ψαράδες ότι η λιμνοθάλασσα διασχιζόταν με τα πόδια το βράδυ, όταν ο άνεμος έσπρωχνε τα νερά στην ανοιχτή θάλασσα. Η πτώση της Νέας Καρχηδόνας παρέδωσε τα ορυχεία αργύρου, το πολεμικό θησαυροφυλάκιο των Καρχηδονίων και τους Ίβηρες ομήρους — τους οποίους ο Σκιπίωνας έστειλε στα σπίτια τους με επιδεικτική ευγένεια, κερδίζοντας φυλή με τη φυλή για τη Ρώμη."
          },
          category: "military"
        }
      ]
    },
    {
      year: -206,
      era: {
        en: "End of Punic Iberia",
        el: "Τέλος της Καρχηδονιακής Ιβηρικής"
      },
      events: [
        {
          title: {
            en: "Ilipa and the end of Carthaginian Iberia",
            el: "Η Ίλιπα και το τέλος της καρχηδονιακής Ιβηρικής"
          },
          description: {
            en: "At Ilipa on the Guadalquivir, Scipio outmanoeuvres Hasdrubal Gisco and Mago Barca and shatters the last great Carthaginian army in Iberia, ending three centuries of Punic presence in the peninsula.",
            el: "Στην Ίλιπα, στον Γουαδαλκιβίρ, ο Σκιπίωνας υπερκερά τον Ασδρούβα Γίσκωνα και τον Μάγωνα Βάρκα και συντρίβει τον τελευταίο μεγάλο καρχηδονιακό στρατό στην Ιβηρική, βάζοντας τέλος σε τρεις αιώνες φοινικικής παρουσίας στη χερσόνησο."
          },
          extendedDescription: {
            en: "Scipio's revolutionary battle plan — drawing up his weak Iberian allies in the centre and his veterans on the wings, the opposite of normal practice — would be studied as a textbook double envelopment. The remnants of the Barcid armies retreated to Gades, which capitulated in 206; Mago sailed for Italy, and Iberia became Roman by right of conquest.",
            el: "Το επαναστατικό σχέδιο μάχης του Σκιπίωνα — με τους ασθενείς Ίβηρες συμμάχους στο κέντρο και τους βετεράνους στα πτερύγια, αντίθετα από τη συνήθη πρακτική — θα μελετάται ως υπόδειγμα διπλής υπερκέρασης. Τα υπολείμματα των στρατών των Βαρκιδών αποσύρθηκαν στα Γάδειρα, που παραδόθηκαν το 206· ο Μάγων απέπλευσε για την Ιταλία, και η Ιβηρική έγινε ρωμαϊκή με το δικαίωμα της κατάκτησης."
          },
          category: "military"
        }
      ]
    },
    {
      year: -197,
      era: {
        en: "Early Roman Iberia",
        el: "Πρώιμη Ρωμαϊκή Ιβηρική"
      },
      events: [
        {
          title: {
            en: "Hispania becomes two provinces",
            el: "Η Ισπανία γίνεται δύο επαρχίες"
          },
          description: {
            en: "Rome divides the conquered ground into Hispania Citerior on the eastern seaboard and Hispania Ulterior in the south, each governed by a praetor — the first Roman provinces outside Italy and Sicily.",
            el: "Η Ρώμη χωρίζει το κατακτημένο έδαφος σε Ισπανία Κιτεριόρ (Εγγύς) στην ανατολική παράλια ζώνη και Ισπανία Ουλτεριόρ (Πέραν) στον νότο, καθεμιά υπό έναν πραίτορα — οι πρώτες ρωμαϊκές επαρχίες έξω από την Ιταλία και τη Σικελία."
          },
          extendedDescription: {
            en: "The new arrangement met immediate resistance. The Turdetanian revolt of 197 BC drew in Marcus Porcius Cato, who as consul of 195 marched the length of Hispania Citerior, supposedly disarming the indigenous towns in a single day. Cato boasted of taking more cities than he had spent days in the province — and went home with a triumph, the first of many over Iberian peoples.",
            el: "Η νέα διευθέτηση συνάντησε αμέσως αντίσταση. Η εξέγερση των Τουρδητανών το 197 π.Χ. έσυρε εκεί τον Μάρκο Πόρκιο Κάτωνα, ο οποίος ως ύπατος του 195 διέσχισε ολόκληρη την Ισπανία Κιτεριόρ, αφοπλίζοντας — όπως λέγεται — τις ιθαγενείς πόλεις σε μία ημέρα. Ο Κάτων καυχόταν ότι κατέλαβε περισσότερες πόλεις από όσες μέρες πέρασε στην επαρχία — και επέστρεψε στη Ρώμη με θρίαμβο, τον πρώτο από πολλούς εις βάρος ιβηρικών λαών."
          },
          category: "political"
        }
      ]
    },
    {
      year: -139,
      era: {
        en: "Lusitanian War",
        el: "Λουζιτανικός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "The murder of Viriathus",
            el: "Η δολοφονία του Βιριάθου"
          },
          description: {
            en: "After eight years of guerrilla war that had humbled successive Roman armies in the western sierras, the Lusitanian leader Viriathus is murdered in his sleep by three of his own envoys, bribed by the proconsul Servilius Caepio.",
            el: "Μετά από οκτώ χρόνια ανταρτοπολέμου που είχε ταπεινώσει διαδοχικούς ρωμαϊκούς στρατούς στις δυτικές οροσειρές, ο Λουζιτανός ηγέτης Βιρίαθος δολοφονείται στον ύπνο του από τρεις δικούς του απεσταλμένους, τους οποίους εξαγόρασε ο ανθύπατος Σερβίλιος Καιπίων."
          },
          extendedDescription: {
            en: "Appian preserves Caepio's chilling response when the assassins came for their reward: 'Rome does not pay traitors who kill their own commander.' Viriathus, a former shepherd turned strategist who had crushed five Roman armies and once made the Senate ratify a peace, would become a national hero of later Portugal and Spain — the first named figure of the Iberian historical imagination.",
            el: "Ο Αππιανός διασώζει την παγερή απάντηση του Καιπίωνα όταν οι δολοφόνοι ήρθαν για την αμοιβή τους: «Η Ρώμη δεν πληρώνει προδότες που σκοτώνουν τον ίδιο τους τον αρχηγό». Ο Βιρίαθος, πρώην βοσκός που έγινε στρατηγός και που είχε συντρίψει πέντε ρωμαϊκούς στρατούς και κάποτε ανάγκασε τη σύγκλητο να επικυρώσει συνθήκη ειρήνης, θα γινόταν εθνικός ήρωας της μετέπειτα Πορτογαλίας και Ισπανίας — η πρώτη επώνυμη μορφή του ιβηρικού ιστορικού φαντασιακού."
          },
          category: "military"
        }
      ]
    },
    {
      year: -133,
      era: {
        en: "Celtiberian Wars",
        el: "Κελτιβηρικοί Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "The fall of Numantia",
            el: "Η πτώση της Νουμαντίας"
          },
          description: {
            en: "After a fifteen-month blockade by Scipio Aemilianus, the Celtiberian hill-town of Numantia falls. Most of its defenders have killed themselves or one another rather than surrender; the survivors are sold into slavery and the city is razed.",
            el: "Ύστερα από δεκαπεντάμηνο αποκλεισμό από τον Σκιπίωνα τον Αιμιλιανό, η κελτιβηρική λοφώδης πόλη Νουμαντία πέφτει. Οι περισσότεροι υπερασπιστές της έχουν αυτοκτονήσει ή σκοτώσει ο ένας τον άλλον, παρά να παραδοθούν· οι επιζώντες πωλούνται ως δούλοι και η πόλη ισοπεδώνεται."
          },
          extendedDescription: {
            en: "Numantia, perched above the upper Douro, had defied Roman armies for twenty years and forced the consul Mancinus to surrender his army in 137. Polybius accompanied his patron Scipio Aemilianus — the destroyer of Carthage — to the siege and recorded its grim culmination. Like Masada and Saguntum, Numantia would become a touchstone of resistance in later Spanish memory, celebrated by Cervantes and the Romantics.",
            el: "Η Νουμαντία, σκαρφαλωμένη πάνω από τον άνω Δούερο, είχε αψηφήσει ρωμαϊκούς στρατούς επί είκοσι χρόνια και είχε αναγκάσει τον ύπατο Μαγκίνο να παραδώσει τον στρατό του το 137. Ο Πολύβιος συνόδευσε τον προστάτη του Σκιπίωνα τον Αιμιλιανό — τον καταστροφέα της Καρχηδόνας — στην πολιορκία και κατέγραψε τη ζοφερή κατάληξή της. Όπως η Μασσάδα και η Σάγουντο, η Νουμαντία θα γινόταν σύμβολο αντίστασης στη μεταγενέστερη ισπανική μνήμη, εξυμνημένο από τον Θερβάντες και τους Ρομαντικούς."
          },
          category: "military"
        }
      ]
    },
    {
      year: -72,
      era: {
        en: "Sertorian War",
        el: "Σερτόριος"
      },
      events: [
        {
          title: {
            en: "The death of Sertorius",
            el: "Ο θάνατος του Σερτορίου"
          },
          description: {
            en: "After almost a decade as the de facto ruler of an independent Roman state in Hispania, Quintus Sertorius is murdered at a banquet by his own lieutenant Marcus Perperna, who is in turn quickly crushed by Pompey.",
            el: "Μετά από σχεδόν μία δεκαετία ως ντε φάκτο κυβερνήτης ενός ανεξάρτητου ρωμαϊκού κράτους στην Ιβηρική, ο Κόιντος Σερτώριος δολοφονείται σε συμπόσιο από τον υπαρχηγό του Μάρκο Περπέρνα, ο οποίος με τη σειρά του συντρίβεται γρήγορα από τον Πομπήιο."
          },
          extendedDescription: {
            en: "Sertorius, a Marian fugitive, had built around himself a counter-government with its own senate of three hundred and a school for the sons of Iberian chieftains at Osca. His white doe — which Plutarch says he claimed to be sent by Diana with secret counsels — became a famous emblem of his rapport with the tribes. His death at the hands of jealous subordinates left Hispania safe for the Sullan order, and gave Pompey the laurels that would crown his career.",
            el: "Ο Σερτώριος, φυγάς οπαδός του Μαρίου, είχε χτίσει γύρω του μια αντικυβέρνηση με δική της σύγκλητο τριακοσίων μελών και σχολή για τους γιους των Ιβήρων αρχηγών στην Όσκα. Η λευκή ελαφίνα του — που, λέει ο Πλούταρχος, ισχυριζόταν πως του την έστελνε η Άρτεμη με μυστικές συμβουλές — έγινε περίφημο σύμβολο της συμπνοίας του με τις φυλές. Ο θάνατός του από φθονερούς υφισταμένους άφησε την Ιβηρική ασφαλή για το σύλλειο καθεστώς και χάρισε στον Πομπήιο τις δάφνες που θα στεφάνωναν την καριέρα του."
          },
          category: "military"
        }
      ]
    },
    {
      year: -45,
      era: {
        en: "Civil Wars",
        el: "Εμφύλιοι Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "Caesar wins at Munda",
            el: "Ο Καίσαρας νικά στη Μούντα"
          },
          description: {
            en: "On the plain of Munda in Hispania Ulterior, Caesar destroys the last Pompeian army under Pompey's sons Gnaeus and Sextus in a battle so close that he afterwards said he had at last fought not for victory but for his life.",
            el: "Στην πεδιάδα της Μούντας στην Ισπανία Ουλτεριόρ, ο Καίσαρας συντρίβει τον τελευταίο πομπηιανό στρατό υπό τους γιους του Πομπηίου Γναίο και Σέξτο σε μάχη τόσο αμφίρροπη, ώστε ο ίδιος είπε αργότερα πως αυτή τη φορά πολέμησε όχι για νίκη, αλλά για τη ζωή του."
          },
          extendedDescription: {
            en: "Gnaeus Pompey the Younger was caught and killed days later; Sextus escaped to Sicily. Munda ended the civil war that had begun at the Rubicon, and Caesar returned to Rome to celebrate his fifth triumph, accept the title dictator perpetuus, and be assassinated on the Ides of March the following spring. In Hispania, his legions founded colonies — Hispalis, Urso, Hispalis Iulia Romula — that would seed the Romanisation of Baetica.",
            el: "Ο Γναίος Πομπήιος ο Νεότερος συνελήφθη και σκοτώθηκε μετά από λίγες μέρες· ο Σέξτος διέφυγε στη Σικελία. Η Μούντα έβαλε τέλος στον εμφύλιο που είχε ξεκινήσει στον Ρουβίκωνα, και ο Καίσαρας επέστρεψε στη Ρώμη για να γιορτάσει τον πέμπτο του θρίαμβο, να ανακηρυχθεί dictator perpetuus και να δολοφονηθεί στις Ειδούς του Μαρτίου την επόμενη άνοιξη. Στην Ιβηρική, οι λεγεώνες του ίδρυσαν αποικίες — Ισπάλη, Ούρσο, Hispalis Iulia Romula — που θα σπέρνανε τον εκρωμαϊσμό της Βαιτικής."
          },
          category: "military"
        }
      ]
    },
    {
      year: -19,
      era: {
        en: "Augustan Hispania",
        el: "Αυγούστεια Ιβηρική"
      },
      events: [
        {
          title: {
            en: "Agrippa pacifies the Cantabrian north",
            el: "Ο Αγρίππας ειρηνεύει τον καντάβριο βορρά"
          },
          description: {
            en: "Marcus Vipsanius Agrippa breaks the resistance of the Cantabri and Astures of the northern coast, ending a generation of campaigning that had brought Augustus himself to Tarraco. For the first time the entire peninsula lies under Roman rule.",
            el: "Ο Μάρκος Βιψάνιος Αγρίππας συντρίβει την αντίσταση των Καντάβρων και των Αστούρων του βόρειου μετώπου, βάζοντας τέλος σε μια γενιά εκστρατειών που είχαν φέρει τον ίδιο τον Αύγουστο στην Ταρράκωνα. Για πρώτη φορά ολόκληρη η χερσόνησος βρίσκεται υπό ρωμαϊκή κυριαρχία."
          },
          extendedDescription: {
            en: "Augustus reorganised the conquered peninsula into three imperial provinces: Tarraconensis in the north and east, Lusitania in the west, and the senatorial province of Baetica in the south. Veterans of the Cantabrian wars founded Caesaraugusta (Zaragoza), Emerita Augusta (Mérida), and Asturica Augusta (Astorga). The gold mines of Las Médulas, worked by hydraulic mining on a colossal scale, would for two centuries make the north-west the bullion province of the empire.",
            el: "Ο Αύγουστος αναδιοργάνωσε την κατακτημένη χερσόνησο σε τρεις αυτοκρατορικές επαρχίες: την Ταρρακωνησία στον βορρά και την ανατολή, τη Λουζιτανία στη δύση και τη συγκλητική επαρχία Βαιτική στον νότο. Βετεράνοι των Καντάβριων πολέμων ίδρυσαν την Καισαραυγούστα (Σαραγόσα), την Εμέριτα Αυγούστα (Μέριδα) και την Αστούρικα Αυγούστα (Αστόργα). Τα ορυχεία χρυσού του Λας Μέντουλας, που εξορύσσονταν με υδραυλική μέθοδο σε κολοσσιαία κλίμακα, θα έκαναν για δύο αιώνες τα βορειοδυτικά τη χρυσοφόρα επαρχία της αυτοκρατορίας."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Aqueduct_of_Segovia_08.jpg?width=1024",
            alt: {
              en: "The Roman aqueduct of Segovia",
              el: "Το ρωμαϊκό υδραγωγείο της Σεγκόβια"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 98,
      era: {
        en: "Hispano-Roman empire",
        el: "Ισπανορωμαϊκή αυτοκρατορία"
      },
      events: [
        {
          title: {
            en: "Trajan, the first emperor from the provinces",
            el: "Τραϊανός, ο πρώτος αυτοκράτορας από τις επαρχίες"
          },
          description: {
            en: "On the death of Nerva, Marcus Ulpius Traianus, born at Italica in Baetica, ascends the throne — the first Roman emperor from outside Italy, and the beginning of a Hispano-Roman age that will give Rome its widest borders and some of its finest writers.",
            el: "Με τον θάνατο του Νέρβα, ο Μάρκος Ούλπιος Τραϊανός, γεννημένος στην Ιτάλικα της Βαιτικής, ανέρχεται στον θρόνο — ο πρώτος Ρωμαίος αυτοκράτορας εκτός Ιταλίας και η αρχή μιας ισπανορωμαϊκής εποχής που θα δώσει στη Ρώμη τα ευρύτερα σύνορά της και μερικούς από τους καλύτερους συγγραφείς της."
          },
          extendedDescription: {
            en: "Trajan's Dacian and Parthian wars carried the eagles to the Persian Gulf; his successor Hadrian, also from Italica, would consolidate the frontiers and travel the empire end to end. Hispania in the same century produced Seneca and Lucan of Corduba, the rhetorician Quintilian of Calagurris, the agronomist Columella of Gades, and the epigrammatist Martial of Bilbilis — a generation that made Latin literature itself partly Iberian.",
            el: "Οι δακικοί και παρθικοί πόλεμοι του Τραϊανού οδήγησαν τους αετούς ως τον Περσικό Κόλπο· ο διάδοχός του Αδριανός, επίσης από την Ιτάλικα, θα εδραίωνε τα σύνορα και θα ταξίδευε την αυτοκρατορία από άκρη σε άκρη. Η Ιβηρική του ίδιου αιώνα ανέδειξε τον Σενέκα και τον Λουκανό από την Κόρδουβα, τον ρητοροδιδάσκαλο Κοϊντιλιανό από τη Καλαγκούρρι, τον γεωπόνο Κολουμέλλα από τα Γάδειρα και τον επιγραμματοποιό Μαρτιάλη από τη Βιλβίλι — μια γενιά που έκανε την ίδια τη λατινική λογοτεχνία εν μέρει ιβηρική."
          },
          category: "political"
        }
      ]
    },
    {
      year: 212,
      era: {
        en: "Imperial citizenship",
        el: "Αυτοκρατορική ιθαγένεια"
      },
      events: [
        {
          title: {
            en: "The Constitutio Antoniniana",
            el: "Η Constitutio Antoniniana"
          },
          description: {
            en: "By the edict of Caracalla, every free inhabitant of the empire — including the towns and tribes of the three Hispanic provinces — becomes a Roman citizen, completing in law a Romanisation that municipal life had largely accomplished in practice.",
            el: "Με το διάταγμα του Καρακάλλα, κάθε ελεύθερος κάτοικος της αυτοκρατορίας — μαζί με τις πόλεις και τις φυλές των τριών ισπανικών επαρχιών — γίνεται Ρωμαίος πολίτης, ολοκληρώνοντας νομικά έναν εκρωμαϊσμό που η μουνικιπιακή ζωή είχε σε μεγάλο βαθμό κατορθώσει στην πράξη."
          },
          extendedDescription: {
            en: "By the time of Caracalla the chartered towns of Hispania were already thick on the ground — colonies and municipia from Tarraco and Barcino on the east to Emerita and Olisipo on the west, with Latin literacy, baths, theatres, and a network of Roman roads stitching the peninsula together. The hydraulic engineering of the Segovia aqueduct, the bridge of Alcántara, and the colossal dam at Proserpina still stand as monuments of this high empire.",
            el: "Στην εποχή του Καρακάλλα οι θεσμοθετημένες πόλεις της Ιβηρικής ήταν ήδη πυκνές — αποικίες και municipia από την Ταρράκωνα και τη Βαρκίνωνα στην ανατολή ως την Εμέριτα και την Ολιζιπώνα στη δύση, με λατινική παιδεία, λουτρά, θέατρα και ένα δίκτυο ρωμαϊκών δρόμων που έδεναν τη χερσόνησο. Τα υδραυλικά έργα του υδραγωγείου της Σεγκόβια, η γέφυρα της Αλκάνταρα και το κολοσσιαίο φράγμα της Προσερπίνας στέκουν ακόμη ως μνημεία αυτής της ύστερης ακμάζουσας αυτοκρατορίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 306,
      era: {
        en: "Christian Hispania",
        el: "Χριστιανική Ιβηρική"
      },
      events: [
        {
          title: {
            en: "The Council of Elvira",
            el: "Η Σύνοδος της Ελβίρας"
          },
          description: {
            en: "Around eighty-one canons agreed by nineteen bishops at Elvira near Granada give the earliest detailed picture of organised Christianity in the Latin West — a Hispanic Church already mature, austere, and confronting a still-pagan civic world.",
            el: "Περίπου ογδόντα ένας κανόνες, που συμφωνούν δεκαεννέα επίσκοποι στην Ελβίρα κοντά στη Γρανάδα, δίνουν την παλαιότερη λεπτομερή εικόνα της οργανωμένης χριστιανοσύνης στη λατινική Δύση — μια ισπανική Εκκλησία ήδη ώριμη, αυστηρή και αντιμέτωπη με έναν ακόμη ειδωλολατρικό αστικό κόσμο."
          },
          extendedDescription: {
            en: "The canons of Elvira ban images of the divine in churches, regulate marriage with Jews and pagans, and prescribe lifelong penance for apostates, idolaters, and adulterers. The council met under Diocletian, perhaps on the eve of the Great Persecution; within a generation Constantine had legalised Christianity, and a Hispanic bishop, Ossius of Corduba, would preside as imperial adviser at the Council of Nicaea.",
            el: "Οι κανόνες της Ελβίρας απαγορεύουν τις εικόνες του Θείου στις εκκλησίες, ρυθμίζουν τους γάμους με Ιουδαίους και ειδωλολάτρες και επιβάλλουν ισόβια μετάνοια σε αποστάτες, ειδωλολάτρες και μοιχούς. Η σύνοδος συνήλθε επί Διοκλητιανού, ίσως στις παραμονές του Μεγάλου Διωγμού· μέσα σε μία γενιά ο Κωνσταντίνος είχε νομιμοποιήσει τον Χριστιανισμό, και ένας Ίβηρας επίσκοπος, ο Όσιος της Κόρδουβας, θα προήδρευε ως αυτοκρατορικός σύμβουλος στη Σύνοδο της Νίκαιας."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 385,
      era: {
        en: "Late Roman Hispania",
        el: "Ύστερη Ρωμαϊκή Ιβηρική"
      },
      events: [
        {
          title: {
            en: "The execution of Priscillian",
            el: "Η εκτέλεση του Πρισκιλλιανού"
          },
          description: {
            en: "Priscillian, ascetic bishop of Ávila, is beheaded at Trier by the usurper Magnus Maximus — the first Christian executed for heresy by a Christian state, and a scandal that would haunt the conscience of the Latin Church.",
            el: "Ο Πρισκιλλιανός, ασκητικός επίσκοπος της Άβιλα, αποκεφαλίζεται στην Τρίερα από τον σφετεριστή Μάγνο Μάξιμο — ο πρώτος χριστιανός που εκτελείται για αίρεση από χριστιανικό κράτος, σκάνδαλο που θα στοιχειώσει τη συνείδηση της λατινικής Εκκλησίας."
          },
          extendedDescription: {
            en: "Priscillian's movement of lay ascetics, with a marked role for women, spread widely in Gallaecia and Lusitania and earned the bishop accusations of Manichaeism and sorcery. Martin of Tours and Ambrose of Milan both opposed the death sentence; Sulpicius Severus would record the trial with mounting horror. The cult of Priscillian as martyr persisted in Galicia, and some have speculatively linked his alleged tomb to the medieval pilgrim site of Santiago de Compostela.",
            el: "Το κίνημα των λαϊκών ασκητών του Πρισκιλλιανού, με έντονο ρόλο γυναικών, εξαπλώθηκε ευρέως στη Γαλλικία και τη Λουζιτανία και χρέωσε στον επίσκοπο τις κατηγορίες του μανιχαϊσμού και της μαγείας. Ο Μαρτίνος της Τουρ και ο Αμβρόσιος του Μιλάνου αντιτάχθηκαν στη θανατική καταδίκη· ο Σουλπίκιος Σεβήρος θα κατέγραφε τη δίκη με αυξανόμενη φρίκη. Η τιμή του Πρισκιλλιανού ως μάρτυρα διατηρήθηκε στη Γαλικία, και ορισμένοι έχουν με επιφυλάξεις συνδέσει τον υποτιθέμενο τάφο του με τον μεσαιωνικό προσκυνηματικό τόπο του Σαντιάγο ντε Κομποστέλα."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 409,
      era: {
        en: "The Great Crossing",
        el: "Η Μεγάλη Διάβαση"
      },
      events: [
        {
          title: {
            en: "Vandals, Alans, and Suebi enter Hispania",
            el: "Βάνδαλοι, Αλανοί και Σουήβοι εισέρχονται στην Ιβηρική"
          },
          description: {
            en: "Three years after their crossing of the frozen Rhine, the Vandals, Alans, and Suebi force the passes of the Pyrenees and pour into Hispania. Within months the diocese is partitioned by lot among the invaders.",
            el: "Τρία χρόνια μετά τη διάβαση του παγωμένου Ρήνου, οι Βάνδαλοι, οι Αλανοί και οι Σουήβοι αναγκάζουν τα περάσματα των Πυρηναίων και χύνονται στην Ιβηρική. Μέσα σε μήνες η διοίκηση μοιράζεται με κλήρωση μεταξύ των εισβολέων."
          },
          extendedDescription: {
            en: "Hydatius, bishop of Aquae Flaviae in Gallaecia, lived through the catastrophe and recorded it in his bleak chronicle: famine, pestilence, the four horsemen at last unloosed. The Asding Vandals and Suebi took Gallaecia; the Siling Vandals took Baetica; the Alans took Lusitania and Carthaginiensis. Roman Hispania did not yet end — but its towns would never again be safe.",
            el: "Ο Υδάτιος, επίσκοπος των Aquae Flaviae στη Γαλλικία, έζησε την καταστροφή και την κατέγραψε στη ζοφερή χρονογραφία του: λιμός, λοιμός, οι τέσσερις ιππείς επιτέλους λυμένοι. Οι Άσδιγγοι Βάνδαλοι και οι Σουήβοι πήραν τη Γαλλικία· οι Σίλιγγοι Βάνδαλοι την Βαιτική· οι Αλανοί τη Λουζιτανία και την Καρθαγινήσια. Η Ρωμαϊκή Ιβηρική δεν είχε ακόμη τελειώσει — αλλά οι πόλεις της δεν θα ήταν ποτέ ξανά ασφαλείς."
          },
          category: "military"
        }
      ]
    },
    {
      year: 456,
      era: {
        en: "Twilight of Roman Hispania",
        el: "Λυκόφως της Ρωμαϊκής Ιβηρικής"
      },
      events: [
        {
          title: {
            en: "Theodoric II shatters the Suevi at Órbigo",
            el: "Ο Θεοδώριχος Β΄ συντρίβει τους Σουήβους στον Όρβιγο"
          },
          description: {
            en: "On the river Órbigo near Astorga, the Visigothic king Theodoric II, acting as Roman federate, annihilates the army of the Suevic king Rechiarius. The Suevic kingdom collapses to a rump in Gallaecia and the Visigoths inherit the western Mediterranean settlement.",
            el: "Στον ποταμό Όρβιγο κοντά στην Αστόργα, ο Βισιγότθος βασιλιάς Θεοδώριχος Β΄, ενεργώντας ως ρωμαίος ομόσπονδος, εκμηδενίζει τον στρατό του Σουήβου βασιλιά Ρεχιάριου. Το βασίλειο των Σουήβων συρρικνώνεται σε ένα υπόλειμμα στη Γαλλικία και οι Βισιγότθοι κληρονομούν τη δυτική μεσογειακή διευθέτηση."
          },
          extendedDescription: {
            en: "The campaign was launched in the name of the emperor Avitus, a Gallo-Roman aristocrat whom Theodoric had himself made emperor the previous year. Rechiarius was captured fleeing through the rain in the Galician mountains, brought before Theodoric, and put to death. The Visigothic kings, still federate but in practice sovereign, would over the following decades absorb the imperial machinery of Hispania town by town.",
            el: "Η εκστρατεία ξεκίνησε στο όνομα του αυτοκράτορα Αβίτου, γαλλορωμαίου αριστοκράτη που ο ίδιος ο Θεοδώριχος είχε αναδείξει αυτοκράτορα τον προηγούμενο χρόνο. Ο Ρεχιάριος συνελήφθη ενώ διέφευγε μέσα στη βροχή στα γαλικιανά βουνά, οδηγήθηκε ενώπιον του Θεοδώριχου και θανατώθηκε. Οι Βισιγότθοι βασιλείς, ομόσπονδοι ακόμη αλλά στην πράξη κυρίαρχοι, θα απορροφούσαν τις επόμενες δεκαετίες την αυτοκρατορική μηχανή της Ιβηρικής, πόλη με πόλη."
          },
          category: "military"
        }
      ]
    },
    {
      year: 476,
      era: {
        en: "End of the Western Empire",
        el: "Τέλος της Δυτικής Αυτοκρατορίας"
      },
      events: [
        {
          title: {
            en: "End of empire, Visigothic Hispania begins",
            el: "Τέλος της αυτοκρατορίας, αρχή της Βισιγοτθικής Ιβηρικής"
          },
          description: {
            en: "With the deposition of Romulus Augustulus in Ravenna, the imperial title in the West lapses. In Hispania, only the rump province of Tarraconensis remains in titular Roman hands; everywhere else the Visigothic king is the only effective authority.",
            el: "Με την καθαίρεση του Ρωμύλου Αυγουστύλου στη Ραβέννα, ο αυτοκρατορικός τίτλος στη Δύση εκλείπει. Στην Ιβηρική, μόνο η συρρικνωμένη επαρχία της Ταρρακωνησίας παραμένει ονομαστικά σε ρωμαϊκά χέρια· παντού αλλού ο Βισιγότθος βασιλιάς είναι η μόνη πραγματική εξουσία."
          },
          extendedDescription: {
            en: "Euric, king of the Visigoths from 466 to 484, completed the conquest of Tarraconensis and issued the first written Visigothic code, the Codex Euricianus, blending Roman and Gothic law. Roman aristocrats kept their estates, the Latin language, and their Catholic faith; the Arian Visigothic monarchy would rule them for two centuries until Reccared's conversion in 589 — and the long medieval history of Spain would begin.",
            el: "Ο Ευρικός, βασιλιάς των Βισιγότθων από το 466 ως το 484, ολοκλήρωσε την κατάκτηση της Ταρρακωνησίας και εξέδωσε τον πρώτο γραπτό βισιγοτθικό κώδικα, τον Codex Euricianus, που συνδύαζε ρωμαϊκό και γοτθικό δίκαιο. Οι Ρωμαίοι αριστοκράτες κράτησαν τα κτήματα, τη λατινική γλώσσα και την καθολική πίστη τους· η αρειανική βισιγοτθική μοναρχία θα τους κυβερνούσε για δύο αιώνες ως τη μεταστροφή του Ρεκαρέδου το 589 — και θα άρχιζε η μακρά μεσαιωνική ιστορία της Ισπανίας."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
