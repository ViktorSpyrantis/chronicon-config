/** Norman & Medieval England — Νορμανδική & Μεσαιωνική Αγγλία · British History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const NORMAN_MEDIEVAL_ENGLAND = {
  id: "norman-medieval-england" as const,
  label: {
    en: "Norman & Medieval England",
    el: "Νορμανδική & Μεσαιωνική Αγγλία"
  },
  supertitle: {
    en: "Plantagenet",
    el: "Πλανταγενέτες"
  },
  title: {
    en: "Norman & Medieval England",
    el: "Η Νορμανδική & Μεσαιωνική Αγγλία"
  },
  subtitle: {
    en: "From the Norman Conquest and the Domesday Book through the Angevin Empire, Magna Carta, the rise of Parliament, the conquest of Wales, the Black Death, and the Hundred Years War, to the Wars of the Roses and the end of the Plantagenets at Bosworth Field. Slide across the centuries to read the major events that shaped medieval England.",
    el: "Από τη Νορμανδική Κατάκτηση και το Domesday Book μέσα από την Ανζουιανή Αυτοκρατορία, τη Magna Carta, την άνοδο του Κοινοβουλίου, την κατάκτηση της Ουαλίας, τον Μαύρο Θάνατο και τον Εκατονταετή Πόλεμο, έως τους Πολέμους των Ρόδων και το τέλος των Πλανταγενετών στο Πεδίο του Μπόσγουορθ. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα γεγονότα που διαμόρφωσαν τη μεσαιωνική Αγγλία."
  },
  menuDescription: {
    en: "Normans and Magna Carta, Agincourt and the Wars of the Roses: England from 1066 to Bosworth.",
    el: "Νορμανδοί και Magna Carta, Αζινκούρ και Πόλεμοι των Ρόδων: η Αγγλία από το 1066 ως το Μπόσγουορθ."
  },
  footerLabel: {
    en: "Norman & Medieval England · 1066-1485 AD",
    el: "Νορμανδική & Μεσαιωνική Αγγλία · 1066-1485 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Norman & Medieval England",
    el: "Νορμανδική & Μεσαιωνική Αγγλία"
  },
  theme: THEMES.ivory,
  timeline: [
    {
      year: 1066,
      era: {
        en: "Norman Conquest",
        el: "Νορμανδική Κατάκτηση"
      },
      events: [
        {
          title: {
            en: "William the Conqueror crowned at Westminster",
            el: "Ο Γουλιέλμος ο Κατακτητής στέφεται στο Ουέστμινστερ"
          },
          description: {
            en: "On Christmas Day Duke William of Normandy is crowned king of England in Edward the Confessor's new abbey, while his guards outside, mistaking the cheers for a riot, set fire to nearby houses.",
            el: "Την ημέρα των Χριστουγέννων, ο δούκας Γουλιέλμος της Νορμανδίας στέφεται βασιλιάς της Αγγλίας στο νέο αββαείο του Εδουάρδου του Ομολογητή, ενώ οι φρουροί του απ' έξω, παρερμηνεύοντας τις επευφημίες ως ταραχή, βάζουν φωτιά σε γειτονικά σπίτια."
          },
          extendedDescription: {
            en: "Within twenty years the Old English aristocracy had been almost completely dispossessed; by the time of Domesday only a handful of native English landholders survived at any rank. The Normans imposed a new continental order on England: motte-and-bailey castles in every shire, French as the language of court and law, Romanesque cathedrals rising at Canterbury, Durham, and Winchester, and a king who held all land in tenure and granted it back through a strict feudal hierarchy.",
            el: "Μέσα σε είκοσι χρόνια, η παλαιοαγγλική αριστοκρατία είχε σχεδόν εξ ολοκλήρου εκτοπιστεί· την εποχή της Domesday, μόνο ελάχιστοι ιθαγενείς Άγγλοι γαιοκτήμονες απέμεναν σε οποιαδήποτε βαθμίδα. Οι Νορμανδοί επέβαλαν στην Αγγλία μια νέα ηπειρωτική τάξη: «motte-and-bailey» κάστρα σε κάθε νομό, τα γαλλικά ως γλώσσα της αυλής και του νόμου, ρωμανικούς καθεδρικούς να υψώνονται στο Κάντερμπερι, στο Ντάραμ και στο Ουίντσεστερ, και έναν βασιλιά που κατείχε όλη τη γη και την παραχωρούσε μέσω αυστηρής φεουδαρχικής ιεραρχίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1086,
      era: {
        en: "Norman England",
        el: "Νορμανδική Αγγλία"
      },
      events: [
        {
          title: {
            en: "Domesday Book",
            el: "Το Βιβλίο της Ημέρας της Κρίσεως"
          },
          description: {
            en: "William commissions a comprehensive survey of his new kingdom — every manor, every plough, every mill, valued before the Conquest and now. The English called it 'Domesday' because, like the Last Judgement, there was no appeal from its verdict.",
            el: "Ο Γουλιέλμος αναθέτει μια εκτενή απογραφή του νέου του βασιλείου — κάθε αρχοντικό, κάθε άροτρο, κάθε μύλος, αποτιμημένα πριν και μετά την κατάκτηση. Οι Άγγλοι το ονόμασαν «Domesday», γιατί, όπως και η Δευτέρα Παρουσία, δεν χωρούσε ένσταση κατά της ετυμηγορίας του."
          },
          extendedDescription: {
            en: "The Domesday Book is the most detailed administrative record produced by any state in medieval Europe — completed in less than a year by royal commissioners who took sworn testimony from juries in every hundred of the kingdom. It survives intact in the National Archives and remains a legal record: until 2002 it could still be cited in English courts to prove the antiquity of a manor's rights.",
            el: "Το Domesday Book είναι το πιο λεπτομερές διοικητικό αρχείο που παρήγαγε οποιοδήποτε κράτος στη μεσαιωνική Ευρώπη — ολοκληρώθηκε σε λιγότερο από έναν χρόνο από βασιλικούς απεσταλμένους που έπαιρναν ένορκες καταθέσεις από επιτροπές σε κάθε διοικητική ενότητα του βασιλείου. Σώζεται ακέραιο στα Εθνικά Αρχεία και παραμένει νομικό έγγραφο: έως το 2002 μπορούσε να παρατεθεί σε αγγλικά δικαστήρια για να αποδειχθεί η αρχαιότητα των δικαιωμάτων ενός αρχοντικού."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1100,
      era: {
        en: "Norman England",
        el: "Νορμανδική Αγγλία"
      },
      events: [
        {
          title: {
            en: "Henry I and the Charter of Liberties",
            el: "Ο Ερρίκος Α΄ και ο Χάρτης των Ελευθεριών"
          },
          description: {
            en: "After his brother William Rufus is killed by an arrow in the New Forest, Henry seizes the throne and issues a Coronation Charter promising to abolish the abuses of his predecessor. The document is the distant ancestor of Magna Carta.",
            el: "Μετά τον θάνατο του αδελφού του Γουλιέλμου Ρούφου από βέλος στο Νιου Φόρεστ, ο Ερρίκος αρπάζει τον θρόνο και εκδίδει Χάρτη της Στέψης, υποσχόμενος να καταργήσει τις καταχρήσεις του προκατόχου του. Το έγγραφο είναι ο μακρινός πρόγονος της Magna Carta."
          },
          extendedDescription: {
            en: "Henry's thirty-five-year reign brought administrative innovation: the Exchequer, the itinerant justices, the first English coinage of consistent purity since Cnut. By marrying Edith — a descendant of Alfred — and renaming her Matilda, he tied the Norman dynasty to the West-Saxon line, conciliating his English subjects. But the loss of his only legitimate son William Adelin in the wreck of the White Ship in 1120 set the kingdom up for a generation of civil war.",
            el: "Η τριανταπενταετής βασιλεία του Ερρίκου έφερε διοικητική καινοτομία: το Εξιστόριο (Exchequer), τους περιοδεύοντες δικαστές, την πρώτη αγγλική κοπή νομισμάτων σταθερής καθαρότητας μετά τον Κανούτο. Παντρευόμενος την Έντιθ — απόγονο του Αλφρέδου — και μετονομάζοντάς την Ματθίλδη, συνέδεσε τη νορμανδική δυναστεία με τον δυτικοσαξονικό οίκο, καθησυχάζοντας τους Άγγλους υπηκόους του. Αλλά η απώλεια του μοναδικού νόμιμου γιου του Γουλιέλμου Άντελιν στο ναυάγιο του «Λευκού Πλοίου» το 1120 προετοίμασε το βασίλειο για μια γενιά εμφυλίου πολέμου."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1135,
      era: {
        en: "The Anarchy",
        el: "Η Αναρχία"
      },
      events: [
        {
          title: {
            en: "The Anarchy begins",
            el: "Αρχίζει η Αναρχία"
          },
          description: {
            en: "Henry I's nephew Stephen of Blois seizes the throne against the claim of Henry's daughter Empress Matilda. Nineteen years of civil war follow — a time, said the chronicler, when 'Christ and his saints slept'.",
            el: "Ο ανιψιός του Ερρίκου Α΄ Στέφανος του Μπλουά αρπάζει τον θρόνο κατά της διεκδίκησης της θυγατέρας του Ερρίκου, της αυτοκράτειρας Ματθίλδης. Ακολουθούν δεκαεννέα χρόνια εμφυλίου πολέμου — μια εποχή, κατά τον χρονικογράφο, που «ο Χριστός και οι άγιοί του κοιμούνταν»."
          },
          extendedDescription: {
            en: "Matilda came within a hair's breadth of being crowned in 1141 after capturing Stephen at the Battle of Lincoln, but her arrogance alienated London and her advantage slipped away. The war finally ended at the Treaty of Winchester in 1153, when the childless Stephen recognised Matilda's son Henry of Anjou as his heir. Henry would inherit the next year and inaugurate the Plantagenet dynasty.",
            el: "Η Ματθίλδη βρέθηκε ένα βήμα από τη στέψη το 1141, αφού αιχμαλώτισε τον Στέφανο στη Μάχη του Λίνκολν, αλλά η αλαζονεία της απομάκρυνε το Λονδίνο και το πλεονέκτημά της εξαφανίστηκε. Ο πόλεμος έληξε με τη Συνθήκη του Ουίντσεστερ το 1153, όταν ο άτεκνος Στέφανος αναγνώρισε τον γιο της Ματθίλδης, Ερρίκο του Ανζού, ως κληρονόμο του. Ο Ερρίκος θα κληρονομούσε τον επόμενο χρόνο και θα εγκαινίαζε τη δυναστεία των Πλανταγενετών."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1154,
      era: {
        en: "Angevin Empire",
        el: "Ανζουιανή Αυτοκρατορία"
      },
      events: [
        {
          title: {
            en: "Henry II and the Angevin Empire",
            el: "Ο Ερρίκος Β΄ και η Ανζουιανή Αυτοκρατορία"
          },
          description: {
            en: "Twenty-one-year-old Henry of Anjou inherits England. With Normandy from his mother, Anjou from his father, and Aquitaine through his marriage to Eleanor, he rules a vast Angevin Empire stretching from Northumberland to the Pyrenees.",
            el: "Ο εικοσιενός Ερρίκος του Ανζού κληρονομεί την Αγγλία. Με τη Νορμανδία από τη μητέρα του, το Ανζού από τον πατέρα του και την Ακουιτανία μέσω του γάμου του με την Ελεονώρα, κυβερνά μια τεράστια Ανζουιανή Αυτοκρατορία που εκτείνεται από τη Νορθουμβρία έως τα Πυρηναία."
          },
          extendedDescription: {
            en: "Henry II is the architect of the English common law. His Assize of Clarendon (1166) established the grand jury; his itinerant justices created a body of decisions that crossed local custom; royal writs, available for purchase in standard forms, drew litigation into the king's courts. Trial by jury slowly replaced trial by ordeal. By the time of his death, the legal system of England had taken the shape it would retain for centuries.",
            el: "Ο Ερρίκος Β΄ είναι ο αρχιτέκτονας του αγγλικού common law. Η Διάταξη του Κλάρενδον (1166) εγκαθίδρυσε το «μεγάλο σώμα ενόρκων»· οι περιοδεύοντες δικαστές του δημιούργησαν ένα corpus αποφάσεων που υπερέβαινε τα τοπικά έθιμα· βασιλικά γράμματα, διαθέσιμα προς αγορά σε τυποποιημένες μορφές, οδηγούσαν τις διαφορές στα βασιλικά δικαστήρια. Η δίκη με ενόρκους αντικατέστησε σταδιακά τη δίκη με δοκιμασία. Όταν πέθανε, το νομικό σύστημα της Αγγλίας είχε πάρει τη μορφή που θα διατηρούσε για αιώνες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1170,
      era: {
        en: "Angevin Empire",
        el: "Ανζουιανή Αυτοκρατορία"
      },
      events: [
        {
          title: {
            en: "Murder of Thomas Becket",
            el: "Δολοφονία του Θωμά Μπέκετ"
          },
          description: {
            en: "On 29 December four knights of the king's household ride to Canterbury and cut down Archbishop Thomas Becket at the altar of his own cathedral. The act of the king's rash words — 'Will no one rid me of this turbulent priest?' — shocks Christendom.",
            el: "Στις 29 Δεκεμβρίου, τέσσερις ιππότες της βασιλικής αυλής φτάνουν στο Κάντερμπερι και κατασφάζουν τον αρχιεπίσκοπο Θωμά Μπέκετ μπροστά στο θυσιαστήριο του ίδιου του καθεδρικού του. Η πράξη — προκληθείσα από τις απερίσκεπτες λέξεις του βασιλιά «Δεν θα με απαλλάξει κανείς από αυτόν τον ταραχοποιό ιερέα;» — συγκλονίζει τη χριστιανοσύνη."
          },
          extendedDescription: {
            en: "Becket, once Henry's chancellor and friend, had become his most stubborn opponent on the question of clerical immunity from royal courts. His murder made him an instant martyr: canonised within three years, his Canterbury shrine became the greatest pilgrimage destination in Britain, immortalised by Chaucer two centuries later. Henry was forced to walk barefoot through Canterbury and be flogged by the monks before the saint's tomb — a humiliation that nonetheless restored him to the Church's good graces.",
            el: "Ο Μπέκετ, άλλοτε καγκελάριος και φίλος του Ερρίκου, είχε γίνει ο πιο πεισματάρης αντίπαλός του στο ζήτημα της ασυλίας του κλήρου από τα βασιλικά δικαστήρια. Η δολοφονία του τον έκανε αμέσως μάρτυρα: αγιοκαταχωρισμένος μέσα σε τρία χρόνια, ο τάφος του στο Κάντερμπερι έγινε ο μεγαλύτερος προορισμός προσκυνήματος στη Βρετανία, αθανατισμένος από τον Τσώσερ δύο αιώνες αργότερα. Ο Ερρίκος αναγκάστηκε να περπατήσει ξυπόλυτος μέσα στο Κάντερμπερι και να μαστιγωθεί από τους μοναχούς μπροστά στον τάφο του αγίου — ταπείνωση που, παρ' όλα αυτά, τον επανέφερε στην εύνοια της Εκκλησίας."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1189,
      era: {
        en: "Third Crusade",
        el: "Τρίτη Σταυροφορία"
      },
      events: [
        {
          title: {
            en: "Richard the Lionheart and the Third Crusade",
            el: "Ο Ριχάρδος Λεοντόκαρδος και η Τρίτη Σταυροφορία"
          },
          description: {
            en: "Henry II's son Richard I succeeds him and within months takes the cross, joining Philip Augustus of France and Frederick Barbarossa to recover Jerusalem from Saladin. He spends six months of his ten-year reign in England.",
            el: "Ο γιος του Ερρίκου Β΄ Ριχάρδος Α΄ τον διαδέχεται και μέσα σε μήνες παίρνει τον σταυρό, ενώνοντας τις δυνάμεις του με τον Φίλιππο Αύγουστο της Γαλλίας και τον Φρειδερίκο Μπαρμπαρόσσα για να ανακτήσει την Ιερουσαλήμ από τον Σαλαδίνο. Περνά μόλις έξι μήνες της δεκαετούς βασιλείας του στην Αγγλία."
          },
          extendedDescription: {
            en: "Richard captured Acre, defeated Saladin at Arsuf, and twice came within sight of Jerusalem before judging it untakeable. Returning home in 1192 he was captured by Duke Leopold of Austria and held for a colossal ransom that drained England's silver — 100,000 marks, equivalent to two or three years of royal revenue. The Lionheart became a folk hero through the legend of Robin Hood, although in life he treated England chiefly as a treasury for his French wars.",
            el: "Ο Ριχάρδος κατέλαβε την Άκκα, νίκησε τον Σαλαδίνο στο Αρσούφ και δύο φορές έφτασε σε απόσταση βολής από την Ιερουσαλήμ πριν κρίνει ότι δεν μπορούσε να καταληφθεί. Επιστρέφοντας το 1192 αιχμαλωτίστηκε από τον δούκα Λεοπόλδο της Αυστρίας και κρατήθηκε για ένα τεράστιο λύτρο που στράγγισε το ασήμι της Αγγλίας — 100.000 μάρκα, ισόποσα δύο ή τριών ετών βασιλικών εσόδων. Ο Λεοντόκαρδος έγινε λαϊκός ήρωας μέσω του θρύλου του Ρομπέν των Δασών, αν και στη ζωή του χρησιμοποίησε την Αγγλία κυρίως ως θησαυροφυλάκιο για τους γαλλικούς του πολέμους."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1215,
      era: {
        en: "Magna Carta",
        el: "Magna Carta"
      },
      events: [
        {
          title: {
            en: "Magna Carta sealed at Runnymede",
            el: "Η Magna Carta σφραγίζεται στο Ράνιμιντ"
          },
          description: {
            en: "On 15 June, in a meadow beside the Thames, King John seals a charter forced upon him by rebellious barons. It limits royal authority by law and declares that no free man may be imprisoned or deprived of his rights except by lawful judgement of his peers.",
            el: "Στις 15 Ιουνίου, σε ένα λιβάδι δίπλα στον Τάμεση, ο βασιλιάς Ιωάννης σφραγίζει έναν χάρτη που του επιβλήθηκε από εξεγερμένους βαρώνους. Περιορίζει τη βασιλική εξουσία διά νόμου και διακηρύσσει ότι κανένας ελεύθερος άνθρωπος δεν μπορεί να φυλακιστεί ή να στερηθεί τα δικαιώματά του παρά μόνο με νόμιμη κρίση των ομοίων του."
          },
          extendedDescription: {
            en: "Magna Carta — the Great Charter — was a peace treaty that immediately failed: within months John repudiated it and the barons invited Prince Louis of France to invade. But after John's death from dysentery in 1216, the regents of his nine-year-old son Henry III reissued the charter as a foundational document. Three clauses, including the prohibition on imprisonment without lawful judgement, remain on the English statute book to this day. Across eight centuries it became the talismanic text of Anglo-American constitutionalism.",
            el: "Η Magna Carta — ο Μέγας Χάρτης — ήταν μια συνθήκη ειρήνης που απέτυχε αμέσως: μέσα σε μήνες, ο Ιωάννης την απέρριψε και οι βαρώνοι κάλεσαν τον πρίγκιπα Λουδοβίκο της Γαλλίας να εισβάλει. Αλλά μετά τον θάνατο του Ιωάννη από δυσεντερία το 1216, οι αντιβασιλείς του εννιάχρονου γιου του Ερρίκου Γ΄ επανεξέδωσαν τον χάρτη ως θεμελιώδες έγγραφο. Τρεις παράγραφοι, μεταξύ τους η απαγόρευση φυλάκισης χωρίς νόμιμη κρίση, παραμένουν στο αγγλικό νομοθετικό σώμα μέχρι σήμερα. Στους οκτώ αιώνες που ακολούθησαν, έγινε το σύμβολο του αγγλοαμερικανικού συνταγματισμού."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1265,
      era: {
        en: "Parliament",
        el: "Κοινοβούλιο"
      },
      events: [
        {
          title: {
            en: "Simon de Montfort's Parliament",
            el: "Το Κοινοβούλιο του Σίμωνα ντε Μονφόρ"
          },
          description: {
            en: "Having captured Henry III at the Battle of Lewes the previous year, the rebel earl Simon de Montfort summons a parliament that, for the first time, includes elected representatives of the towns alongside the barons and bishops.",
            el: "Έχοντας αιχμαλωτίσει τον Ερρίκο Γ΄ στη Μάχη του Λιούις τον προηγούμενο χρόνο, ο επαναστάτης κόμης Σίμων ντε Μονφόρ συγκαλεί ένα κοινοβούλιο που, για πρώτη φορά, περιλαμβάνει εκλεγμένους εκπροσώπους των πόλεων μαζί με τους βαρώνους και τους επισκόπους."
          },
          extendedDescription: {
            en: "Montfort's experiment in baronial government collapsed within months — he was killed and mutilated at Evesham in August 1265 by the king's son, the future Edward I. But the idea of a representative parliament survived. In 1295 Edward himself summoned the so-called Model Parliament with the principle 'that which touches all should be approved by all', and from then on the king required the consent of an assembly of lords and commons to raise extraordinary taxation. The seed planted at Lewes would grow into the English constitution.",
            el: "Το πείραμα διακυβέρνησης από τους βαρώνους του Μονφόρ κατέρρευσε μέσα σε μήνες — σκοτώθηκε και διαμελίστηκε στο Έβσαμ τον Αύγουστο του 1265 από τον γιο του βασιλιά, τον μετέπειτα Εδουάρδο Α΄. Αλλά η ιδέα ενός αντιπροσωπευτικού κοινοβουλίου επιβίωσε. Το 1295 ο ίδιος ο Εδουάρδος συγκάλεσε το λεγόμενο «Πρότυπο Κοινοβούλιο» με την αρχή «αυτό που αφορά όλους πρέπει να εγκρίνεται από όλους», και έκτοτε ο βασιλιάς χρειαζόταν τη συγκατάθεση μιας συνέλευσης ευγενών και κοινών για την επιβολή έκτακτης φορολογίας. Ο σπόρος που φυτεύτηκε στο Λιούις θα μεγάλωνε στο αγγλικό σύνταγμα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1284,
      era: {
        en: "Edward I",
        el: "Εδουάρδος Α΄"
      },
      events: [
        {
          title: {
            en: "Conquest of Wales",
            el: "Κατάκτηση της Ουαλίας"
          },
          description: {
            en: "After the death of Llywelyn ap Gruffudd, the last native Prince of Wales, Edward I issues the Statute of Rhuddlan, annexing Wales to the English crown. He builds a ring of mighty castles — Caernarfon, Conwy, Harlech, Beaumaris — to hold the conquest.",
            el: "Μετά τον θάνατο του Λιουέλιν απ Γκρύφιδ, του τελευταίου ιθαγενούς Πρίγκιπα της Ουαλίας, ο Εδουάρδος Α΄ εκδίδει το Καταστατικό του Ρουθλάν, προσαρτώντας την Ουαλία στο αγγλικό στέμμα. Χτίζει έναν δακτύλιο επιβλητικών κάστρων — Κάερναρφον, Κόνγουι, Χάρλεχ, Μπομάρις — για να εδραιώσει την κατάκτηση."
          },
          extendedDescription: {
            en: "Edward's Welsh castles, designed by the Savoyard master mason James of St George, are among the supreme achievements of medieval military architecture and a UNESCO World Heritage Site today. To pacify the conquered country, in 1301 Edward invested his infant son — the future Edward II, born at Caernarfon — as the first English Prince of Wales, a title held by the heir apparent ever since. Wales would not regain a parliament of its own until 1999.",
            el: "Τα ουαλικά κάστρα του Εδουάρδου, σχεδιασμένα από τον Σαβοϊάρδο μάστορα Ζαμς του Αγίου Γεωργίου, ανήκουν στα κορυφαία επιτεύγματα της μεσαιωνικής στρατιωτικής αρχιτεκτονικής και σήμερα είναι Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO. Για να ειρηνεύσει την κατακτημένη χώρα, το 1301 ο Εδουάρδος ανακήρυξε τον βρεφικής ηλικίας γιο του — τον μετέπειτα Εδουάρδο Β΄, γεννημένο στο Κάερναρφον — πρώτο Άγγλο Πρίγκιπα της Ουαλίας, τίτλος που έκτοτε φέρει ο διάδοχος. Η Ουαλία δεν θα ξαναποκτούσε δικό της κοινοβούλιο μέχρι το 1999."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1314,
      era: {
        en: "Scottish Wars",
        el: "Σκωτικοί Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "Battle of Bannockburn",
            el: "Μάχη του Μπάνοκμπερν"
          },
          description: {
            en: "Outside Stirling, Robert Bruce destroys the army of Edward II — perhaps twenty thousand strong, two or three times his own — in a two-day battle that secures Scottish independence for the rest of the Middle Ages.",
            el: "Έξω από το Στέρλινγκ, ο Ρόμπερτ Μπρους συντρίβει τον στρατό του Εδουάρδου Β΄ — ίσως είκοσι χιλιάδων, δύο ή τρεις φορές μεγαλύτερο από τον δικό του — σε διήμερη μάχη που εξασφαλίζει τη σκωτική ανεξαρτησία για την υπόλοιπη μεσαιωνική εποχή."
          },
          extendedDescription: {
            en: "Edward I, 'the Hammer of the Scots', had nearly conquered Scotland; his weaker son lost everything his father had won. The Declaration of Arbroath in 1320, addressed to Pope John XXII, asserted that 'for as long as a hundred of us remain alive, we shall never on any conditions submit to the dominion of the English' — one of the earliest national-independence manifestos in European history. Edward III would finally recognise Scotland's independence by the Treaty of Edinburgh-Northampton in 1328.",
            el: "Ο Εδουάρδος Α΄, «το Σφυρί των Σκώτων», είχε σχεδόν κατακτήσει τη Σκωτία· ο πιο αδύναμος γιος του έχασε όλα όσα είχε κερδίσει ο πατέρας του. Η Διακήρυξη του Άρμπροθ το 1320, απευθυνόμενη στον πάπα Ιωάννη ΚΒ΄, διακήρυσσε ότι «όσο εκατό από εμάς παραμένουν ζωντανοί, δεν θα υποταχθούμε ποτέ με κανέναν όρο στην κυριαρχία των Άγγλων» — ένα από τα πρωιμότερα μανιφέστα εθνικής ανεξαρτησίας στην ευρωπαϊκή ιστορία. Ο Εδουάρδος Γ΄ θα αναγνώριζε τελικά τη σκωτική ανεξαρτησία με τη Συνθήκη του Εδιμβούργου-Νορθάμπτον το 1328."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1337,
      era: {
        en: "Hundred Years War",
        el: "Εκατονταετής Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Hundred Years War begins",
            el: "Αρχίζει ο Εκατονταετής Πόλεμος"
          },
          description: {
            en: "Citing his descent from Philip the Fair through his mother Isabella, Edward III lays claim to the throne of France. Philip VI confiscates Aquitaine; Edward responds by quartering the French lilies with the English lions on his arms. The longest war in Western history has begun.",
            el: "Επικαλούμενος την καταγωγή του από τον Φίλιππο τον Ωραίο μέσω της μητέρας του Ισαβέλλας, ο Εδουάρδος Γ΄ διεκδικεί τον θρόνο της Γαλλίας. Ο Φίλιππος ΣΤ΄ δημεύει την Ακουιτανία· ο Εδουάρδος απαντά συνδυάζοντας τους γαλλικούς κρίνους με τα αγγλικά λιοντάρια στο οικόσημό του. Ο μακρύτερος πόλεμος της δυτικής ιστορίας έχει αρχίσει."
          },
          extendedDescription: {
            en: "What began as a dynastic and feudal quarrel grew into a war of national identities. Edward's son the Black Prince became a chivalric hero across Europe; the longbow proved a battlefield revolution; English replaced French at court and in Parliament. The war, fought in fits and starts for 116 years, would finally end in 1453 with England expelled from all of France except Calais. By then both kingdoms had been transformed.",
            el: "Αυτό που ξεκίνησε ως δυναστική και φεουδαρχική διαμάχη μετατράπηκε σε πόλεμο εθνικών ταυτοτήτων. Ο γιος του Εδουάρδου, ο Μαύρος Πρίγκιπας, έγινε ιπποτικός ήρωας σε όλη την Ευρώπη· το μακρύ τόξο αποδείχθηκε επανάσταση στο πεδίο της μάχης· τα αγγλικά αντικατέστησαν τα γαλλικά στην αυλή και στο Κοινοβούλιο. Ο πόλεμος, διεξαγόμενος με διακοπές για 116 χρόνια, θα τελείωνε τελικά το 1453 με την εκδίωξη της Αγγλίας από όλη τη Γαλλία εκτός του Καλαί. Μέχρι τότε και τα δύο βασίλεια είχαν μεταμορφωθεί."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1346,
      era: {
        en: "Hundred Years War",
        el: "Εκατονταετής Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Battle of Crécy",
            el: "Μάχη του Κρεσύ"
          },
          description: {
            en: "On 26 August Edward III and the Black Prince destroy a French army three times the size of their own. The English longbowmen — yeoman archers drilled in mass volley — annihilate the flower of French chivalry in a few hours of arrow storm.",
            el: "Στις 26 Αυγούστου ο Εδουάρδος Γ΄ και ο Μαύρος Πρίγκιπας συντρίβουν έναν γαλλικό στρατό τρεις φορές μεγαλύτερο από τον δικό τους. Οι Άγγλοι τοξότες του μεγάλου τόξου — γιόμεν τοξότες εκπαιδευμένοι σε μαζικές βολές — εξοντώνουν την ανθοφορία του γαλλικού ιπποτισμού σε λίγες ώρες καταιγίδας βελών."
          },
          extendedDescription: {
            en: "Crécy was followed by the capture of Calais in 1347, the Black Prince's victory at Poitiers in 1356 (where King John II of France was taken prisoner), and the Treaty of Brétigny in 1360 — a high tide of English fortunes. The longbow, which a strong yeoman could fire ten times a minute to two hundred metres, made the heavily armoured French knight obsolete. Edward also founded the Order of the Garter in 1348, the oldest surviving order of chivalry in the world.",
            el: "Το Κρεσύ ακολουθήθηκε από την κατάληψη του Καλαί το 1347, τη νίκη του Μαύρου Πρίγκιπα στο Πουατιέ το 1356 (όπου αιχμαλωτίστηκε ο βασιλιάς της Γαλλίας Ιωάννης Β΄) και τη Συνθήκη του Μπρετινί το 1360 — η κορύφωση της αγγλικής τύχης. Το μακρύ τόξο, που ένας δυνατός γιόμεν μπορούσε να βάλει δέκα φορές το λεπτό σε απόσταση διακοσίων μέτρων, κατέστησε ξεπερασμένο τον βαριά οπλισμένο Γάλλο ιππότη. Ο Εδουάρδος ίδρυσε επίσης το Τάγμα της Περικνημίδας το 1348, το αρχαιότερο σωζόμενο τάγμα ιπποτισμού στον κόσμο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1348,
      era: {
        en: "Black Death",
        el: "Μαύρος Θάνατος"
      },
      events: [
        {
          title: {
            en: "The Black Death reaches England",
            el: "Ο Μαύρος Θάνατος φτάνει στην Αγγλία"
          },
          description: {
            en: "In June the plague lands at Melcombe in Dorset, carried by sailors from Gascony. Within eighteen months it has killed perhaps two of every five people in England. Whole villages vanish; surviving labourers demand wages four times what they earned the year before.",
            el: "Τον Ιούνιο, η πανώλη φτάνει στο Μέλκομπ του Ντόρσετ, μεταφερόμενη από ναύτες από τη Γασκώνη. Μέσα σε δεκαοκτώ μήνες έχει σκοτώσει ίσως δύο στους πέντε κατοίκους της Αγγλίας. Ολόκληρα χωριά εξαφανίζονται· οι επιζώντες εργάτες απαιτούν μεροκάματα τετραπλάσια από εκείνα του προηγούμενου χρόνου."
          },
          extendedDescription: {
            en: "Yersinia pestis ravaged a population already weakened by the Great Famine of 1315-17 and the long European cooling of the Little Ice Age. England would not recover its pre-plague population of around five million until the seventeenth century. The shock was social as well as demographic: parliament's Statute of Labourers (1351) tried to fix wages at pre-plague levels, but the peasantry, suddenly possessed of bargaining power, would not accept it. The strain culminated in the Peasants' Revolt of 1381.",
            el: "Η Yersinia pestis ρήμαξε έναν πληθυσμό ήδη εξασθενημένο από τον Μεγάλο Λιμό του 1315-17 και τη μακρά ευρωπαϊκή ψύξη της Μικρής Εποχής των Παγετώνων. Η Αγγλία δεν θα ανέκαμπτε στον προ-πανώλης πληθυσμό της των περίπου πέντε εκατομμυρίων μέχρι τον 17ο αιώνα. Το σοκ ήταν κοινωνικό όσο και δημογραφικό: το Καταστατικό των Εργατών του Κοινοβουλίου (1351) προσπάθησε να καθηλώσει τα μεροκάματα στα προ-πανώλης επίπεδα, αλλά η αγροτιά, ξαφνικά οπλισμένη με διαπραγματευτική δύναμη, δεν το δέχτηκε. Η ένταση κορυφώθηκε στην Εξέγερση των Αγροτών το 1381."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1381,
      era: {
        en: "Peasants' Revolt",
        el: "Εξέγερση των Αγροτών"
      },
      events: [
        {
          title: {
            en: "The Peasants' Revolt",
            el: "Η Εξέγερση των Αγροτών"
          },
          description: {
            en: "Sparked by a poll tax to pay for the French war, the peasants of Kent and Essex march on London under Wat Tyler and the preacher John Ball. They sack the Savoy Palace, behead the archbishop of Canterbury, and meet the boy-king Richard II at Smithfield, where Tyler is killed.",
            el: "Πυροδοτημένη από έναν κεφαλικό φόρο για τον γαλλικό πόλεμο, οι αγρότες του Κεντ και του Έσσεξ προελαύνουν στο Λονδίνο υπό τον Γουότ Τάιλερ και τον ιεροκήρυκα Τζων Μπολ. Λεηλατούν το Παλάτι του Σαβόυ, αποκεφαλίζουν τον αρχιεπίσκοπο του Κάντερμπερι και συναντούν τον παιδικής ηλικίας βασιλιά Ριχάρδο Β΄ στο Σμίθφιλντ, όπου σκοτώνεται ο Τάιλερ."
          },
          extendedDescription: {
            en: "John Ball's question — 'When Adam delved and Eve span, who was then the gentleman?' — became one of the famous slogans of medieval social radicalism. The fourteen-year-old Richard II rode out personally to confront the rebels and promised reforms; after Tyler's killing he is said to have cried 'I will be your captain', leading the leaderless crowd away from London. The promises were repudiated within days and ringleaders were hunted down, but the poll tax was abandoned and serfdom in England slowly faded over the following century.",
            el: "Η ερώτηση του Τζων Μπολ — «Όταν ο Αδάμ έσκαβε και η Εύα ύφαινε, ποιος ήταν τότε ο αριστοκράτης;» — έγινε ένα από τα διασημότερα συνθήματα του μεσαιωνικού κοινωνικού ριζοσπαστισμού. Ο δεκατετράχρονος Ριχάρδος Β΄ πήγε αυτοπροσώπως να αντιμετωπίσει τους επαναστάτες και υποσχέθηκε μεταρρυθμίσεις· μετά τον φόνο του Τάιλερ λέγεται ότι φώναξε «Εγώ θα είμαι ο αρχηγός σας», οδηγώντας το ακέφαλο πλήθος μακριά από το Λονδίνο. Οι υποσχέσεις αθετήθηκαν μέσα σε ημέρες και οι αρχηγοί κυνηγήθηκαν, αλλά ο κεφαλικός φόρος εγκαταλείφθηκε και η δουλοπαροικία στην Αγγλία ξεθώριασε σταδιακά στον επόμενο αιώνα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1399,
      era: {
        en: "House of Lancaster",
        el: "Οίκος του Λάνκαστερ"
      },
      events: [
        {
          title: {
            en: "Deposition of Richard II",
            el: "Καθαίρεση του Ριχάρδου Β΄"
          },
          description: {
            en: "Returning from Irish campaigns, Richard II is captured by his exiled cousin Henry Bolingbroke. Parliament accepts his abdication and Bolingbroke takes the throne as Henry IV — the first king of the House of Lancaster, and the first English king to be deposed for tyranny.",
            el: "Επιστρέφοντας από εκστρατείες στην Ιρλανδία, ο Ριχάρδος Β΄ αιχμαλωτίζεται από τον εξόριστο ξάδελφό του Ερρίκο Μπόλινγκμπροκ. Το Κοινοβούλιο δέχεται την παραίτησή του και ο Μπόλινγκμπροκ ανεβαίνει στον θρόνο ως Ερρίκος Δ΄ — ο πρώτος βασιλιάς του Οίκου του Λάνκαστερ και ο πρώτος Άγγλος βασιλιάς που καθαιρέθηκε για τυραννία."
          },
          extendedDescription: {
            en: "Richard died — almost certainly murdered — at Pontefract Castle within months, but his ghost would haunt the dynasty. The Lancastrian claim ran through John of Gaunt, third son of Edward III; a rival claim ran through Edward's second son Lionel of Antwerp and his descendants the Mortimers and Yorks. The dispute, planted in 1399, would erupt sixty years later as the Wars of the Roses. Shakespeare made the deposition the opening of his great Henriad cycle.",
            el: "Ο Ριχάρδος πέθανε — σχεδόν σίγουρα δολοφονημένος — στο Κάστρο του Πόντεφρακτ μέσα σε μήνες, αλλά το φάντασμά του θα στοίχειωνε τη δυναστεία. Η Λανκαστριανή διεκδίκηση καταγόταν από τον Ιωάννη του Γκαντ, τρίτο γιο του Εδουάρδου Γ΄· μια αντίπαλη διεκδίκηση καταγόταν από τον δευτερότοκο Λάιονελ της Αμβέρσας και τους απογόνους του Μόρτιμερ και Γιορκ. Η διαφορά, φυτεμένη το 1399, θα ξεσπούσε εξήντα χρόνια αργότερα ως οι Πόλεμοι των Ρόδων. Ο Σαίξπηρ έκανε την καθαίρεση το άνοιγμα του μεγάλου Ερρίκειου κύκλου του."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1415,
      era: {
        en: "Hundred Years War",
        el: "Εκατονταετής Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Battle of Agincourt",
            el: "Μάχη του Αζινκούρ"
          },
          description: {
            en: "On St Crispin's Day, Henry V leads an exhausted and outnumbered English army to crushing victory over the French at Agincourt. The longbow once again wins the day; thousands of French nobles die in the mud or under English knives.",
            el: "Την ημέρα του Αγίου Κρισπίνου, ο Ερρίκος Ε΄ οδηγεί έναν εξαντλημένο και αριθμητικά υποδεέστερο αγγλικό στρατό σε συντριπτική νίκη επί των Γάλλων στο Αζινκούρ. Το μακρύ τόξο κερδίζει και πάλι τη μάχη· χιλιάδες Γάλλοι ευγενείς πεθαίνουν μέσα στη λάσπη ή κάτω από αγγλικά μαχαίρια."
          },
          extendedDescription: {
            en: "By the Treaty of Troyes in 1420 Henry was recognised heir to the French throne and married Charles VI's daughter Catherine of Valois. Two years later he was dead at thirty-five from dysentery, leaving an infant son, Henry VI, as king of both kingdoms. The French recovery under Joan of Arc began at Orléans in 1429, and by 1453 the English had lost everything but Calais. Shakespeare's Henry V — 'we few, we happy few, we band of brothers' — made Agincourt the founding myth of English martial nationhood.",
            el: "Με τη Συνθήκη του Τρουά το 1420, ο Ερρίκος αναγνωρίστηκε διάδοχος του γαλλικού θρόνου και παντρεύτηκε την κόρη του Καρόλου Στ΄ Αικατερίνη του Βαλουά. Δύο χρόνια αργότερα ήταν νεκρός στα τριάντα πέντε από δυσεντερία, αφήνοντας έναν βρέφος γιο, τον Ερρίκο Στ΄, βασιλιά και των δύο βασιλείων. Η γαλλική ανάκαμψη υπό την Ιωάννα της Λωραίνης άρχισε στην Ορλεάνη το 1429, και έως το 1453 οι Άγγλοι είχαν χάσει τα πάντα εκτός του Καλαί. Ο «Ερρίκος Ε΄» του Σαίξπηρ — «εμείς οι λίγοι, εμείς οι ευτυχείς λίγοι, εμείς η ομάδα των αδελφών» — έκανε το Αζινκούρ τον ιδρυτικό μύθο της αγγλικής πολεμικής εθνότητας."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1455,
      era: {
        en: "Wars of the Roses",
        el: "Πόλεμοι των Ρόδων"
      },
      events: [
        {
          title: {
            en: "Wars of the Roses begin",
            el: "Αρχίζουν οι Πόλεμοι των Ρόδων"
          },
          description: {
            en: "At the first Battle of St Albans, Richard Duke of York defeats and kills the leading Lancastrian nobles serving the unstable Henry VI. The thirty-year dynastic struggle between the white rose of York and the red rose of Lancaster has begun.",
            el: "Στην πρώτη Μάχη του Σεντ Όλμπανς, ο Ριχάρδος, δούκας του Γιορκ, νικά και σκοτώνει τους κορυφαίους Λανκαστριανούς ευγενείς που υπηρετούν τον ψυχικά ασταθή Ερρίκο Στ΄. Έχει αρχίσει η τριαντάχρονη δυναστική αναμέτρηση μεταξύ του λευκού ρόδου του Γιορκ και του ερυθρού ρόδου του Λάνκαστερ."
          },
          extendedDescription: {
            en: "The wars were a series of intermittent campaigns between the rival branches of the Plantagenet dynasty, fought largely by retinues of armoured aristocrats while the wider country went about its business. Edward IV of York seized the throne in 1461, lost it briefly in 1470, and recovered it in 1471. His brother Richard III usurped it from Edward's young sons — the Princes in the Tower — in 1483. The Lancastrian claim, by then narrowed to the obscure exile Henry Tudor, would prevail at Bosworth.",
            el: "Οι πόλεμοι ήταν μια σειρά διακοπτόμενων εκστρατειών μεταξύ των αντίπαλων κλάδων της δυναστείας των Πλανταγενετών, που διεξάγονταν κυρίως από συνοδείες θωρακισμένων αριστοκρατών, ενώ η ευρύτερη χώρα συνέχιζε τη ζωή της. Ο Εδουάρδος Δ΄ του Γιορκ άρπαξε τον θρόνο το 1461, τον έχασε στιγμιαία το 1470 και τον ανέκτησε το 1471. Ο αδελφός του Ριχάρδος Γ΄ τον σφετερίστηκε από τους νεαρούς γιους του Εδουάρδου — τους «Πρίγκιπες στον Πύργο» — το 1483. Η Λανκαστριανή διεκδίκηση, μέχρι τότε περιορισμένη στον αφανή εξόριστο Ερρίκο Τυδώρ, θα επικρατούσε στο Μπόσγουορθ."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1485,
      era: {
        en: "End of the Plantagenets",
        el: "Τέλος των Πλανταγενετών"
      },
      events: [
        {
          title: {
            en: "Battle of Bosworth Field",
            el: "Μάχη του Πεδίου του Μπόσγουορθ"
          },
          description: {
            en: "On 22 August Henry Tudor lands in Wales, marches into England, and defeats Richard III at Bosworth Field in Leicestershire. The last Plantagenet king is killed in a desperate cavalry charge; the crown is found in a thornbush and placed on the head of Henry VII.",
            el: "Στις 22 Αυγούστου, ο Ερρίκος Τυδώρ αποβιβάζεται στην Ουαλία, προελαύνει στην Αγγλία και νικά τον Ριχάρδο Γ΄ στο Πεδίο του Μπόσγουορθ στο Λέστερσιρ. Ο τελευταίος βασιλιάς των Πλανταγενετών σκοτώνεται σε απελπιστική έφοδο ιππικού· το στέμμα βρίσκεται μέσα σε ένα αγκαθωτό θάμνο και τοποθετείται στο κεφάλι του Ερρίκου Ζ΄."
          },
          extendedDescription: {
            en: "Richard III, the last English king to die in battle, was the last Plantagenet — a dynasty that had ruled for 331 years since Henry II. Henry Tudor, descendant of Edward III through John of Gaunt's bastard Beaufort line and possessed of only the slenderest hereditary claim, won by force of arms and married Edward IV's daughter Elizabeth of York to unite the warring houses. The Tudor rose, red over white, became the symbol of a new dynasty. Richard's skeleton, rediscovered under a Leicester car park in 2012, was reburied in Leicester Cathedral in 2015.",
            el: "Ο Ριχάρδος Γ΄, ο τελευταίος Άγγλος βασιλιάς που πέθανε σε μάχη, ήταν ο τελευταίος Πλανταγενέτης — μιας δυναστείας που είχε κυβερνήσει για 331 χρόνια από τον Ερρίκο Β΄. Ο Ερρίκος Τυδώρ, απόγονος του Εδουάρδου Γ΄ μέσω της νόθας γραμμής Μπώφορτ του Ιωάννη του Γκαντ και με την πιο λεπτή κληρονομική διεκδίκηση, νίκησε διά των όπλων και παντρεύτηκε την κόρη του Εδουάρδου Δ΄ Ελισάβετ του Γιορκ για να ενώσει τους εχθρευόμενους οίκους. Το ρόδο των Τυδώρ, κόκκινο πάνω σε λευκό, έγινε το σύμβολο μιας νέας δυναστείας. Ο σκελετός του Ριχάρδου, που ανακαλύφθηκε ξανά κάτω από έναν χώρο στάθμευσης του Λέστερ το 2012, θάφτηκε ξανά στον καθεδρικό του Λέστερ το 2015."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
