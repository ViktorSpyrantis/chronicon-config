/** Viking Kings & Voyagers — Βασιλείς & Θαλασσοπόροι Βίκινγκς · Vikings & Scandinavia */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const VIKING_KINGS_VOYAGERS = {
  id: "viking-kings-voyagers" as const,
  label: {
    en: "Viking Kings & Voyagers",
    el: "Βασιλείς & Θαλασσοπόροι Βίκινγκς"
  },
  supertitle: {
    en: "The Viking Age",
    el: "Η Εποχή των Βίκινγκς"
  },
  title: {
    en: "From Vinland to Byzantium: Viking Kings & Voyagers",
    el: "Από τη Βίνλαντ ως το Βυζάντιο: Βασιλείς & Θαλασσοπόροι Βίκινγκς"
  },
  subtitle: {
    en: "In the Viking Age's second century, raiders became rulers. Norsemen founded Normandy, Icelanders created one of the world's oldest parliaments, Greenland and Vinland were reached across the Atlantic, and Varangians guarded the Byzantine emperor. Kings like Harald Bluetooth and Cnut the Great forged Christian realms — until Harald Hardrada's fall at Stamford Bridge in 1066 closed the age. Slide from Normandy to the shores of America.",
    el: "Στον δεύτερο αιώνα της Εποχής των Βίκινγκς, οι επιδρομείς έγιναν ηγεμόνες. Οι Νορμανδοί ίδρυσαν τη Νορμανδία, οι Ισλανδοί δημιούργησαν ένα από τα αρχαιότερα κοινοβούλια του κόσμου, η Γροιλανδία και η Βίνλαντ έγιναν προσιτές πέρα από τον Ατλαντικό, και οι Βάραγγοι φρουρούσαν τον βυζαντινό αυτοκράτορα. Βασιλείς όπως ο Χάραλντ Κυανόδους και ο Κνούτος ο Μέγας σφυρηλάτησαν χριστιανικά βασίλεια — ώσπου η πτώση του Χάραλντ Χάρντραντα στο Στάμφορντ Μπριτζ το 1066 έκλεισε την εποχή. Μετακινηθείτε από τη Νορμανδία ως τις ακτές της Αμερικής."
  },
  menuDescription: {
    en: "Normandy, the Althing, Greenland and Vinland, the Varangian Guard, and Cnut's North Sea empire.",
    el: "Η Νορμανδία, η Άλθινγκ, η Γροιλανδία και η Βίνλαντ, η Βαράγγειος Φρουρά και η αυτοκρατορία της Βόρειας Θάλασσας του Κνούτου."
  },
  footerLabel: {
    en: "Viking Kings & Voyagers · AD 911-1066",
    el: "Βασιλείς & Θαλασσοπόροι Βίκινγκς · 911-1066 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Viking Kings & Voyagers",
    el: "Βασιλείς & Θαλασσοπόροι Βίκινγκς"
  },
  theme: THEMES.crimson,
  timeline: [
    {
      year: 911,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "Rollo receives Normandy",
            el: "Ο Ρόλλων λαμβάνει τη Νορμανδία"
          },
          description: {
            en: "By the Treaty of Saint-Clair-sur-Epte, King Charles the Simple grants the Viking leader Rollo land around Rouen in return for defending the Seine against other raiders.",
            el: "Με τη Συνθήκη του Σαιν-Κλερ-συρ-Επτ, ο βασιλιάς Κάρολος ο Απλοϊκός παραχωρεί στον αρχηγό των Βίκινγκς Ρόλλωνα γη γύρω από τη Ρουέν, με αντάλλαγμα να υπερασπίζεται τον Σηκουάνα από άλλους επιδρομείς."
          },
          extendedDescription: {
            en: "Rollo accepted baptism and his followers settled the land that took their name: Normandy, the land of the Northmen. Within a few generations they spoke French and had become fervent Christians and formidable mounted knights. Rollo's descendant William the Conqueror would take England in 1066, and other Normans would carve out kingdoms in southern Italy and Sicily.",
            el: "Ο Ρόλλων δέχτηκε το βάπτισμα και οι ακόλουθοί του εγκαταστάθηκαν στη γη που πήρε το όνομά τους: τη Νορμανδία, τη χώρα των Βορείων. Μέσα σε λίγες γενιές μιλούσαν γαλλικά και είχαν γίνει ένθερμοι χριστιανοί και τρομεροί έφιπποι ιππότες. Ο απόγονος του Ρόλλωνα, Γουλιέλμος ο Κατακτητής, θα κατακτούσε την Αγγλία το 1066, και άλλοι Νορμανδοί θα ίδρυαν βασίλεια στη νότια Ιταλία και στη Σικελία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 922,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "Ibn Fadlan meets the Rus",
            el: "Ο Ιμπν Φαντλάν συναντά τους Ρως"
          },
          description: {
            en: "On an embassy from the Abbasid caliph to the Volga Bulgars, the Arab traveller Ibn Fadlan meets Scandinavian traders and witnesses a chieftain's ship funeral.",
            el: "Σε πρεσβεία του Αββασίδη χαλίφη προς τους Βουλγάρους του Βόλγα, ο Άραβας περιηγητής Ιμπν Φαντλάν συναντά Σκανδιναβούς εμπόρους και γίνεται μάρτυρας της ταφής ενός αρχηγού σε πλοίο."
          },
          extendedDescription: {
            en: "He described the Rus as 'tall as date palms, blond and ruddy', tattooed from fingertips to neck, and shocked by their hygiene. His account of the funeral — in which a slave girl was killed to accompany her master, and the ship was burned — is one of the most vivid and disturbing eyewitness records of the Viking Age. The Rus had come down the Volga to sell furs and slaves for Islamic silver, hundreds of thousands of coins of which have been found in Scandinavia.",
            el: "Περιέγραψε τους Ρως ως «ψηλούς σαν φοινικόδεντρα, ξανθούς και κοκκινωπούς», με τατουάζ από τις άκρες των δαχτύλων ως τον λαιμό, και σοκαρίστηκε από την υγιεινή τους. Η αφήγησή του για την κηδεία — όπου μια σκλάβα θανατώθηκε για να συνοδεύσει τον αφέντη της και το πλοίο κάηκε — είναι μία από τις πιο ζωντανές και ανατριχιαστικές μαρτυρίες αυτόπτη της Εποχής των Βίκινγκς. Οι Ρως είχαν κατέβει τον Βόλγα για να πουλήσουν γούνες και σκλάβους με αντάλλαγμα ισλαμικό ασήμι, εκατοντάδες χιλιάδες νομίσματα του οποίου έχουν βρεθεί στη Σκανδιναβία."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 930,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "The Althing is founded",
            el: "Ιδρύεται η Άλθινγκ"
          },
          description: {
            en: "Icelanders establish the Althing, a national assembly held each summer at Þingvellir — one of the oldest parliaments in the world.",
            el: "Οι Ισλανδοί ιδρύουν την Άλθινγκ, μια εθνική συνέλευση που συνερχόταν κάθε καλοκαίρι στο Θίνγκβελιρ — ένα από τα αρχαιότερα κοινοβούλια του κόσμου."
          },
          extendedDescription: {
            en: "Iceland had no king. Instead, the chieftains and free farmers met for two weeks each June in a rift valley where the North American and Eurasian plates pull apart. A lawspeaker recited a third of the law from the Law Rock every year, the Law Council made new laws, and courts settled feuds. This 'commonwealth' lasted over three centuries, and its world of blood-feuds and lawsuits is the setting of the great Icelandic sagas.",
            el: "Η Ισλανδία δεν είχε βασιλιά. Αντίθετα, οι αρχηγοί και οι ελεύθεροι αγρότες συνέρχονταν για δύο εβδομάδες κάθε Ιούνιο σε μια κοιλάδα-ρήγμα όπου η βορειοαμερικανική και η ευρασιατική πλάκα απομακρύνονται. Ένας νομοαναγνώστης απήγγελλε κάθε χρόνο το ένα τρίτο του νόμου από τον Βράχο του Νόμου, το Νομοθετικό Συμβούλιο έφτιαχνε νέους νόμους και τα δικαστήρια έλυναν τις βεντέτες. Αυτή η «κοινοπολιτεία» διήρκεσε πάνω από τρεις αιώνες, και ο κόσμος της με τις βεντέτες και τις δίκες είναι το σκηνικό των μεγάλων ισλανδικών επών."
          },
          category: "political"
        }
      ]
    },
    {
      year: 954,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "Eric Bloodaxe and the end of Viking York",
            el: "Ο Έρικ Αιματοπέλεκυς και το τέλος της Υόρκης των Βίκινγκς"
          },
          description: {
            en: "Eric Bloodaxe, the last Viking king of York, is expelled and killed at Stainmore, and Northumbria passes to the English kings.",
            el: "Ο Έρικ Αιματοπέλεκυς, ο τελευταίος βασιλιάς Βίκινγκς της Υόρκης, εκδιώκεται και σκοτώνεται στο Στέινμορ, και η Νορθουμβρία περνά στους Άγγλους βασιλείς."
          },
          extendedDescription: {
            en: "Eric was a son of Harald Fairhair who had briefly ruled Norway before being driven out, earning his grim nickname by allegedly killing his brothers. At Jórvík he ruled a thriving town of craftsmen and traders whose remains — preserved in waterlogged soil at Coppergate — are among the richest Viking finds anywhere. His death completed the English reconquest of the Danelaw begun by Alfred's heirs.",
            el: "Ο Έρικ ήταν γιος του Χάραλντ Ωραιομάλλη που είχε κυβερνήσει για λίγο τη Νορβηγία πριν εκδιωχθεί, κερδίζοντας το ζοφερό του προσωνύμιο επειδή φέρεται να σκότωσε τα αδέλφια του. Στο Γιόρβικ κυβέρνησε μια ακμάζουσα πόλη τεχνιτών και εμπόρων, τα κατάλοιπα της οποίας — διατηρημένα σε υγρό έδαφος στο Κόπεργκεϊτ — συγκαταλέγονται στα πλουσιότερα ευρήματα Βίκινγκς οπουδήποτε. Ο θάνατός του ολοκλήρωσε την αγγλική ανακατάληψη του Ντέινλω που είχαν ξεκινήσει οι διάδοχοι του Άλφρεντ."
          },
          category: "political"
        }
      ]
    },
    {
      year: 965,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "Harald Bluetooth and the Jelling stone",
            el: "Ο Χάραλντ Κυανόδους και η πέτρα του Γέλινγκ"
          },
          description: {
            en: "King Harald Bluetooth raises a great runestone at Jelling, proclaiming that he 'won all Denmark and Norway and made the Danes Christian'.",
            el: "Ο βασιλιάς Χάραλντ Κυανόδους υψώνει μια μεγάλη ρουνική πέτρα στο Γέλινγκ, διακηρύσσοντας ότι «κέρδισε όλη τη Δανία και τη Νορβηγία και έκανε τους Δανούς χριστιανούς»."
          },
          extendedDescription: {
            en: "Carved with an image of Christ entwined in foliage, the stone is often called 'Denmark's baptismal certificate'. Harald also built the ring fortresses such as Trelleborg and Fyrkat, and a great bridge at Ravning Enge. A thousand years later his nickname was borrowed for the Bluetooth wireless standard, whose logo combines his initials in runes — a fitting name for a king who united peoples.",
            el: "Σκαλισμένη με μια απεικόνιση του Χριστού περιπλεγμένου σε φυλλώματα, η πέτρα αποκαλείται συχνά «το πιστοποιητικό βάπτισης της Δανίας». Ο Χάραλντ έχτισε επίσης τα κυκλικά φρούρια όπως το Τρέλεμποργκ και το Φίρκατ, και μια μεγάλη γέφυρα στο Ράβνινγκ Ένγκε. Χίλια χρόνια αργότερα το προσωνύμιό του δανείστηκε για την ασύρματη τεχνολογία Bluetooth, της οποίας το λογότυπο συνδυάζει τα αρχικά του σε ρούνους — ταιριαστό όνομα για έναν βασιλιά που ένωσε λαούς."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 985,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "Erik the Red settles Greenland",
            el: "Ο Έρικ ο Ερυθρός εποικίζει τη Γροιλανδία"
          },
          description: {
            en: "Exiled from Iceland for manslaughter, Erik the Red leads a fleet of settlers to the land he named 'Greenland' to make it sound inviting.",
            el: "Εξόριστος από την Ισλανδία για ανθρωποκτονία, ο Έρικ ο Ερυθρός οδηγεί έναν στόλο αποίκων στη γη που ονόμασε «Γροιλανδία» (Πράσινη Γη) για να ακούγεται ελκυστική."
          },
          extendedDescription: {
            en: "Of 25 ships that set out, only 14 arrived. The settlers founded two colonies in the sheltered fjords of the southwest, farming cattle and sheep and hunting walrus for the ivory that was prized in Europe. At its height Norse Greenland had perhaps 2,000–3,000 people, a bishop, and a cathedral. It survived for over four centuries at the edge of the known world.",
            el: "Από τα 25 πλοία που ξεκίνησαν, μόνο 14 έφτασαν. Οι άποικοι ίδρυσαν δύο αποικίες στα προστατευμένα φιόρδ του νοτιοδυτικού τμήματος, εκτρέφοντας βοοειδή και πρόβατα και κυνηγώντας θαλάσσιους ίππους για το ελεφαντόδοντο που ήταν περιζήτητο στην Ευρώπη. Στο απόγειό της η νορδική Γροιλανδία είχε ίσως 2.000–3.000 κατοίκους, έναν επίσκοπο και έναν καθεδρικό ναό. Επιβίωσε για πάνω από τέσσερις αιώνες στην άκρη του γνωστού κόσμου."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 988,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "The Varangian Guard",
            el: "Η Βαράγγειος Φρουρά"
          },
          description: {
            en: "Prince Vladimir of Kiev sends 6,000 Norse warriors to help Emperor Basil II; they become the core of the Varangian Guard, the emperor's personal bodyguard.",
            el: "Ο πρίγκιπας Βλαδίμηρος του Κιέβου στέλνει 6.000 νορδικούς πολεμιστές για να βοηθήσουν τον αυτοκράτορα Βασίλειο Β΄· γίνονται ο πυρήνας της Βαράγγειας Φρουράς, της προσωπικής φρουράς του αυτοκράτορα."
          },
          extendedDescription: {
            en: "In return for his help, Vladimir married Basil's sister Anna and accepted Orthodox Christianity for the Rus. The axe-bearing Varangians, valued for loyalty to the emperor rather than to any Byzantine faction, fought from Italy to Syria. Scandinavian men went 'out to Greece' for service and wealth, and runestones back home commemorate those who died in 'Grikkland'. Runes carved by Varangians survive on the balustrade of Hagia Sophia.",
            el: "Ως αντάλλαγμα για τη βοήθειά του, ο Βλαδίμηρος νυμφεύθηκε την αδελφή του Βασιλείου, Άννα, και δέχτηκε τον ορθόδοξο χριστιανισμό για τους Ρως. Οι πελεκυφόροι Βάραγγοι, πολύτιμοι για την πίστη τους στον αυτοκράτορα και όχι σε κάποια βυζαντινή φατρία, πολέμησαν από την Ιταλία ως τη Συρία. Σκανδιναβοί άνδρες πήγαιναν «έξω στην Ελλάδα» για υπηρεσία και πλούτο, και ρουνικές πέτρες στις πατρίδες τους τιμούν όσους πέθαναν στη «Γκρίκλαντ». Ρούνοι χαραγμένοι από Βαράγγους σώζονται στο στηθαίο της Αγίας Σοφίας."
          },
          category: "military"
        }
      ]
    },
    {
      year: 991,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "The Battle of Maldon and the Danegeld",
            el: "Η μάχη του Μάλντον και το Ντέινγκελντ"
          },
          description: {
            en: "Vikings defeat the English ealdorman Byrhtnoth at Maldon in Essex, and King Æthelred pays them 10,000 pounds of silver — the first of the great Danegelds.",
            el: "Οι Βίκινγκς νικούν τον Άγγλο έλντορμαν Μπίρτνοθ στο Μάλντον του Έσσεξ, και ο βασιλιάς Έθελρεντ τους πληρώνει 10.000 λίβρες ασήμι — το πρώτο από τα μεγάλα Ντέινγκελντ."
          },
          extendedDescription: {
            en: "An Old English poem immortalises Byrhtnoth's last stand and his loyal retainers who chose to die beside him. The payments that followed grew ever larger, reaching 48,000 pounds in 1012. So much English silver flowed north that more Anglo-Saxon coins of this period have been found in Scandinavia than in England itself. The new wave of raids was led by kings, and aimed at the English crown.",
            el: "Ένα παλαιοαγγλικό ποίημα απαθανατίζει την τελευταία αντίσταση του Μπίρτνοθ και τους πιστούς ακολούθους του που επέλεξαν να πεθάνουν δίπλα του. Οι πληρωμές που ακολούθησαν μεγάλωναν διαρκώς, φτάνοντας τις 48.000 λίβρες το 1012. Τόσο αγγλικό ασήμι έρευσε προς τον βορρά ώστε περισσότερα αγγλοσαξονικά νομίσματα αυτής της περιόδου έχουν βρεθεί στη Σκανδιναβία παρά στην ίδια την Αγγλία. Το νέο κύμα επιδρομών το οδηγούσαν βασιλείς, με στόχο το αγγλικό στέμμα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1000,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "Iceland chooses Christianity",
            el: "Η Ισλανδία επιλέγει τον χριστιανισμό"
          },
          description: {
            en: "Facing civil war between pagans and Christians, the Althing accepts the ruling of the lawspeaker Þorgeir that all Icelanders shall be baptised.",
            el: "Αντιμέτωπη με εμφύλιο πόλεμο ανάμεσα σε ειδωλολάτρες και χριστιανούς, η Άλθινγκ αποδέχεται την απόφαση του νομοαναγνώστη Θόργκεϊρ ότι όλοι οι Ισλανδοί θα βαπτιστούν."
          },
          extendedDescription: {
            en: "Þorgeir, himself a pagan, lay under his cloak for a day and a night before announcing his decision: 'If we divide the law, we divide the peace.' Iceland would be Christian, but pagans could still sacrifice in private and eat horse meat. Legend says he then threw his idols into the waterfall now called Goðafoss, 'waterfall of the gods'. It was a rare peaceful conversion of a whole people by vote.",
            el: "Ο Θόργκεϊρ, ο ίδιος ειδωλολάτρης, έμεινε ξαπλωμένος κάτω από τον μανδύα του για μια μέρα και μια νύχτα πριν ανακοινώσει την απόφασή του: «Αν διχάσουμε τον νόμο, θα διχάσουμε και την ειρήνη». Η Ισλανδία θα ήταν χριστιανική, αλλά οι ειδωλολάτρες μπορούσαν ακόμη να θυσιάζουν κατ' ιδίαν και να τρώνε κρέας αλόγου. Ο θρύλος λέει ότι έπειτα έριξε τα είδωλά του στον καταρράκτη που σήμερα λέγεται Γκόνταφος, «καταρράκτης των θεών». Ήταν ένας σπάνιος ειρηνικός εκχριστιανισμός ενός ολόκληρου λαού με ψηφοφορία."
          },
          category: "religious"
        },
        {
          title: {
            en: "Olaf Tryggvason falls at Svolder",
            el: "Ο Όλαφ Τρίγκβασον πέφτει στο Σβόλντερ"
          },
          description: {
            en: "King Olaf Tryggvason of Norway, who had forced Christianity on his realm, is defeated in a great sea battle by the kings of Denmark and Sweden and leaps into the sea.",
            el: "Ο βασιλιάς Όλαφ Τρίγκβασον της Νορβηγίας, που είχε επιβάλει τον χριστιανισμό στο βασίλειό του, ηττάται σε μια μεγάλη ναυμαχία από τους βασιλείς της Δανίας και της Σουηδίας και πηδά στη θάλασσα."
          },
          extendedDescription: {
            en: "Olaf had returned from Viking raids in England in 995 and seized the Norwegian throne, converting chieftains with the sword. At Svolder, fighting from his great ship the Long Serpent, he was overwhelmed by Sweyn Forkbeard of Denmark, Olof Skötkonung of Sweden and the Norwegian earl Eric. Rather than surrender, he jumped overboard in full armour; later legends insisted he had survived and become a monk.",
            el: "Ο Όλαφ είχε επιστρέψει από επιδρομές στην Αγγλία το 995 και κατέλαβε τον νορβηγικό θρόνο, προσηλυτίζοντας τους αρχηγούς με το ξίφος. Στο Σβόλντερ, πολεμώντας από το μεγάλο του πλοίο, το Μακρύ Φίδι, κατανικήθηκε από τον Σβέιν Διχαλογένη της Δανίας, τον Όλοφ Σέτκονουνγκ της Σουηδίας και τον Νορβηγό κόμη Έρικ. Αντί να παραδοθεί, πήδηξε στη θάλασσα με πλήρη πανοπλία· μεταγενέστεροι θρύλοι επέμεναν ότι είχε επιζήσει και έγινε μοναχός."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1013,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "Sweyn Forkbeard conquers England",
            el: "Ο Σβέιν Διχαλογένης κατακτά την Αγγλία"
          },
          description: {
            en: "The Danish king Sweyn Forkbeard invades England and is accepted as king, driving Æthelred the Unready into exile in Normandy.",
            el: "Ο Δανός βασιλιάς Σβέιν Διχαλογένης εισβάλλει στην Αγγλία και γίνεται αποδεκτός ως βασιλιάς, διώχνοντας τον Έθελρεντ τον Ανέτοιμο σε εξορία στη Νορμανδία."
          },
          extendedDescription: {
            en: "Sweyn's campaign was partly revenge for the St Brice's Day massacre of 1002, when Æthelred had ordered all Danes in England killed. His triumph was brief: he died in February 1014, only five weeks after being declared king. Æthelred returned, but the stage was set for Sweyn's son Cnut to finish what his father had begun.",
            el: "Η εκστρατεία του Σβέιν ήταν εν μέρει εκδίκηση για τη σφαγή της ημέρας του Αγίου Βρικίου το 1002, όταν ο Έθελρεντ είχε διατάξει να σκοτωθούν όλοι οι Δανοί στην Αγγλία. Ο θρίαμβός του ήταν σύντομος: πέθανε τον Φεβρουάριο του 1014, μόλις πέντε εβδομάδες αφότου ανακηρύχθηκε βασιλιάς. Ο Έθελρεντ επέστρεψε, αλλά το σκηνικό είχε στηθεί για να ολοκληρώσει ο γιος του Σβέιν, ο Κνούτος, ό,τι είχε αρχίσει ο πατέρας του."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1016,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "Cnut the Great, king of England",
            el: "Ο Κνούτος ο Μέγας, βασιλιάς της Αγγλίας"
          },
          description: {
            en: "After defeating Edmund Ironside at Assandun, Cnut becomes king of all England, and later of Denmark and Norway — ruling a North Sea empire.",
            el: "Αφού νικά τον Έντμουντ Σιδερόπλευρο στο Άσαντουν, ο Κνούτος γίνεται βασιλιάς όλης της Αγγλίας, και αργότερα της Δανίας και της Νορβηγίας — κυβερνώντας μια αυτοκρατορία της Βόρειας Θάλασσας."
          },
          extendedDescription: {
            en: "Cnut married Æthelred's widow Emma of Normandy, ruled through English law and churchmen, and made a pilgrimage to Rome in 1027 to attend the coronation of the emperor Conrad II. He inherited Denmark in 1018 and drove Olaf Haraldsson from Norway in 1028. The later story of his commanding the tide to turn back was told to show his piety, not his arrogance. His empire fell apart soon after his death in 1035.",
            el: "Ο Κνούτος νυμφεύθηκε τη χήρα του Έθελρεντ, Έμμα της Νορμανδίας, κυβέρνησε μέσω του αγγλικού δικαίου και του κλήρου, και ταξίδεψε ως προσκυνητής στη Ρώμη το 1027 για να παραστεί στη στέψη του αυτοκράτορα Κορράδου Β΄. Κληρονόμησε τη Δανία το 1018 και έδιωξε τον Όλαφ Χάραλντσον από τη Νορβηγία το 1028. Η μεταγενέστερη ιστορία όπου διατάζει την παλίρροια να υποχωρήσει ειπώθηκε για να δείξει την ευσέβειά του, όχι την αλαζονεία του. Η αυτοκρατορία του διαλύθηκε λίγο μετά τον θάνατό του το 1035."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1021,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "Vikings in America",
            el: "Οι Βίκινγκς στην Αμερική"
          },
          description: {
            en: "Norse Greenlanders cut wood at L'Anse aux Meadows in Newfoundland — tree rings date the felling precisely to 1021, the earliest known European presence in the Americas.",
            el: "Νορδικοί κάτοικοι της Γροιλανδίας κόβουν ξυλεία στο Λ'Ανς ω Μεντόουζ της Νέας Γης — οι δακτύλιοι των δέντρων χρονολογούν την υλοτομία ακριβώς στο 1021, η αρχαιότερη γνωστή ευρωπαϊκή παρουσία στην Αμερική."
          },
          extendedDescription: {
            en: "The sagas tell how Leif Erikson, son of Erik the Red, sailed west around the year 1000 to lands he called Helluland, Markland and Vinland, 'wine-land'. The site at L'Anse aux Meadows, discovered in 1960, confirmed the stories. A 2021 study used a spike in radiocarbon caused by a solar storm in 993 to show that wood there was cut with metal blades exactly in 1021. The Norse camp was used only briefly, but it came nearly five centuries before Columbus.",
            el: "Τα έπη αφηγούνται πώς ο Λέιφ Έρικσον, γιος του Έρικ του Ερυθρού, έπλευσε δυτικά γύρω στο έτος 1000 προς χώρες που ονόμασε Χέλουλαντ, Μάρκλαντ και Βίνλαντ, «χώρα του κρασιού». Η τοποθεσία στο Λ'Ανς ω Μεντόουζ, που ανακαλύφθηκε το 1960, επιβεβαίωσε τις ιστορίες. Μια μελέτη του 2021 χρησιμοποίησε μια αιχμή ραδιενεργού άνθρακα που προκάλεσε μια ηλιακή καταιγίδα το 993 για να δείξει ότι το ξύλο εκεί κόπηκε με μεταλλικές λεπίδες ακριβώς το 1021. Ο νορδικός καταυλισμός χρησιμοποιήθηκε μόνο για λίγο, αλλά προηγήθηκε του Κολόμβου κατά σχεδόν πέντε αιώνες."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1030,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "St Olaf falls at Stiklestad",
            el: "Ο Άγιος Όλαφ πέφτει στο Στίκλεσταντ"
          },
          description: {
            en: "Olaf Haraldsson, returning to reclaim Norway's throne, is killed by an army of farmers loyal to Cnut; within a year he is venerated as a saint.",
            el: "Ο Όλαφ Χάραλντσον, επιστρέφοντας για να ανακτήσει τον θρόνο της Νορβηγίας, σκοτώνεται από έναν στρατό αγροτών πιστών στον Κνούτο· μέσα σε έναν χρόνο τιμάται ως άγιος."
          },
          extendedDescription: {
            en: "Olaf had ruled Norway from 1015 and pressed Christianity on its chieftains as harshly as his namesake Olaf Tryggvason. After his death on 29 July 1030, miracles were reported at his grave, and his body was enshrined at Nidaros — today's Trondheim — where the great cathedral was later built over it. As Olaf the Holy he became Norway's 'eternal king' and patron saint, and Nidaros one of northern Europe's great pilgrimage sites.",
            el: "Ο Όλαφ κυβερνούσε τη Νορβηγία από το 1015 και επέβαλε τον χριστιανισμό στους αρχηγούς της τόσο σκληρά όσο και ο συνονόματός του Όλαφ Τρίγκβασον. Μετά τον θάνατό του στις 29 Ιουλίου 1030 αναφέρθηκαν θαύματα στον τάφο του, και το σώμα του τοποθετήθηκε σε λειψανοθήκη στο Νίνταρος — το σημερινό Τρόντχαϊμ — όπου αργότερα χτίστηκε από πάνω ο μεγάλος καθεδρικός ναός. Ως Όλαφ ο Άγιος έγινε ο «αιώνιος βασιλιάς» και προστάτης άγιος της Νορβηγίας, και το Νίνταρος ένας από τους μεγάλους τόπους προσκυνήματος της βόρειας Ευρώπης."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1042,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "Harald Hardrada in Constantinople",
            el: "Ο Χάραλντ Χάρντραντα στην Κωνσταντινούπολη"
          },
          description: {
            en: "After a decade as a commander of the Varangian Guard, Harald Sigurdsson escapes Constantinople with a fortune and returns north to become king of Norway.",
            el: "Μετά από μια δεκαετία ως διοικητής στη Βαράγγειο Φρουρά, ο Χάραλντ Σίγκουρδσον δραπετεύει από την Κωνσταντινούπολη με μια περιουσία και επιστρέφει στον βορρά για να γίνει βασιλιάς της Νορβηγίας."
          },
          extendedDescription: {
            en: "Harald had fought at Stiklestad at 15 beside his half-brother Olaf, then served the Rus and, from about 1034, the Byzantine emperors in Sicily, Bulgaria and the east. The sagas claim he took part in blinding Emperor Michael V in 1042. A runic inscription carved on the marble Lion of Piraeus — taken to Venice in 1687 — is thought to have been left by Varangians. Harald became king of Norway in 1046, earning the name Hardrada, 'hard ruler'.",
            el: "Ο Χάραλντ είχε πολεμήσει στο Στίκλεσταντ στα 15 του δίπλα στον ετεροθαλή αδελφό του Όλαφ, και έπειτα υπηρέτησε τους Ρως και, από το 1034 περίπου, τους βυζαντινούς αυτοκράτορες στη Σικελία, στη Βουλγαρία και στην Ανατολή. Τα έπη ισχυρίζονται ότι συμμετείχε στην τύφλωση του αυτοκράτορα Μιχαήλ Ε΄ το 1042. Μια ρουνική επιγραφή χαραγμένη στο μαρμάρινο Λιοντάρι του Πειραιά — που μεταφέρθηκε στη Βενετία το 1687 — πιστεύεται ότι αφέθηκε από Βαράγγους. Ο Χάραλντ έγινε βασιλιάς της Νορβηγίας το 1046, κερδίζοντας το όνομα Χάρντραντα, «σκληρός ηγεμόνας»."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1066,
      era: {
        en: "End of the Viking Age",
        el: "Τέλος της Εποχής των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "Stamford Bridge: the last great Viking invasion",
            el: "Στάμφορντ Μπριτζ: η τελευταία μεγάλη εισβολή των Βίκινγκς"
          },
          description: {
            en: "Harald Hardrada invades England to claim its crown but is killed by King Harold Godwinson at Stamford Bridge on 25 September 1066.",
            el: "Ο Χάραλντ Χάρντραντα εισβάλλει στην Αγγλία για να διεκδικήσει το στέμμα της, αλλά σκοτώνεται από τον βασιλιά Χάρολντ Γκόντγουινσον στο Στάμφορντ Μπριτζ στις 25 Σεπτεμβρίου 1066."
          },
          extendedDescription: {
            en: "Surprised without their armour on a hot day, the Norwegians were routed; of some 300 ships that came, the survivors needed only about two dozen to sail home. Three days later William of Normandy landed in the south, and Harold's exhausted army was defeated at Hastings on 14 October. With Hardrada's death, the age of great Scandinavian invasions ended — and it was a descendant of Viking settlers, William, who took England.",
            el: "Αιφνιδιασμένοι χωρίς τις πανοπλίες τους σε μια ζεστή μέρα, οι Νορβηγοί κατατροπώθηκαν· από τα περίπου 300 πλοία που είχαν έρθει, οι επιζώντες χρειάστηκαν μόνο δύο δωδεκάδες περίπου για να γυρίσουν στην πατρίδα. Τρεις μέρες αργότερα ο Γουλιέλμος της Νορμανδίας αποβιβάστηκε στον νότο, και ο εξαντλημένος στρατός του Χάρολντ ηττήθηκε στο Χέιστινγκς στις 14 Οκτωβρίου. Με τον θάνατο του Χάρντραντα, η εποχή των μεγάλων σκανδιναβικών εισβολών έληξε — και ήταν ένας απόγονος αποίκων Βίκινγκς, ο Γουλιέλμος, που κατέκτησε την Αγγλία."
          },
          category: "military"
        }
      ]
    }
  ]
} satisfies PeriodDefinition;
