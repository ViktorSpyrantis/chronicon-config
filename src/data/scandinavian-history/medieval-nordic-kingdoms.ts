/** Medieval Nordic Kingdoms — Τα Μεσαιωνικά Βασίλεια του Βορρά · Vikings & Scandinavia */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const MEDIEVAL_NORDIC_KINGDOMS = {
  id: "medieval-nordic-kingdoms" as const,
  label: {
    en: "Medieval Nordic Kingdoms",
    el: "Τα Μεσαιωνικά Βασίλεια του Βορρά"
  },
  supertitle: {
    en: "Medieval Scandinavia",
    el: "Μεσαιωνική Σκανδιναβία"
  },
  title: {
    en: "Crowns, Crosses & Sagas: The Medieval Nordic Kingdoms",
    el: "Στέμματα, Σταυροί & Έπη: τα Μεσαιωνικά Βασίλεια του Βορρά"
  },
  subtitle: {
    en: "After the Viking Age, Denmark, Norway and Sweden became Christian kingdoms with archbishops, cathedrals and written laws. Danish crusaders sailed to Estonia, Norway's kings ruled an Atlantic empire from Iceland to the Hebrides, Icelanders wrote down the sagas and the old gods' myths, and German merchants of the Hanseatic League came to dominate northern trade — until the Black Death and a formidable queen reshaped the North. Slide across three centuries of medieval Scandinavia.",
    el: "Μετά την Εποχή των Βίκινγκς, η Δανία, η Νορβηγία και η Σουηδία έγιναν χριστιανικά βασίλεια με αρχιεπισκόπους, καθεδρικούς ναούς και γραπτούς νόμους. Δανοί σταυροφόροι έπλευσαν στην Εσθονία, οι βασιλείς της Νορβηγίας κυβέρνησαν μια ατλαντική αυτοκρατορία από την Ισλανδία ως τις Εβρίδες, οι Ισλανδοί κατέγραψαν τα έπη και τους μύθους των παλαιών θεών, και οι Γερμανοί έμποροι της Χανσεατικής Ένωσης κυριάρχησαν στο εμπόριο του Βορρά — ώσπου ο Μαύρος Θάνατος και μια σπουδαία βασίλισσα αναδιαμόρφωσαν τη Σκανδιναβία. Μετακινηθείτε σε τρεις αιώνες μεσαιωνικής Σκανδιναβίας."
  },
  menuDescription: {
    en: "Archbishoprics, crusades, the Icelandic sagas, the Hanseatic League, and the rise of Queen Margaret.",
    el: "Αρχιεπισκοπές, σταυροφορίες, τα ισλανδικά έπη, η Χανσεατική Ένωση και η άνοδος της βασίλισσας Μαργαρίτας."
  },
  footerLabel: {
    en: "Medieval Kingdoms · AD 1066-1397",
    el: "Μεσαιωνικά Βασίλεια · 1066-1397 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Medieval Nordic Kingdoms",
    el: "Τα Μεσαιωνικά Βασίλεια του Βορρά"
  },
  theme: THEMES.gold,
  timeline: [
    {
      year: 1075,
      era: {
        en: "High Middle Ages",
        el: "Ύστερος Μεσαίωνας"
      },
      events: [
        {
          title: {
            en: "Adam of Bremen describes the temple at Uppsala",
            el: "Ο Αδάμ της Βρέμης περιγράφει τον ναό της Ουψάλας"
          },
          description: {
            en: "The German chronicler Adam of Bremen writes of a golden pagan temple at Uppsala with statues of Thor, Odin and Freyr, where men and animals were sacrificed every nine years.",
            el: "Ο Γερμανός χρονογράφος Αδάμ της Βρέμης γράφει για έναν χρυσό ειδωλολατρικό ναό στην Ουψάλα με αγάλματα του Θωρ, του Όντιν και του Φρέιρ, όπου κάθε εννέα χρόνια θυσιάζονταν άνθρωποι και ζώα."
          },
          extendedDescription: {
            en: "Adam never visited Uppsala and relied on informants, so historians treat his lurid account with caution, and no temple has been found. But it shows that while Denmark and Norway were officially Christian, the Swedes of the Mälaren region still clung to the old gods. Sweden's conversion was slow and contested, completed only in the 12th century.",
            el: "Ο Αδάμ δεν επισκέφθηκε ποτέ την Ουψάλα και βασίστηκε σε πληροφοριοδότες, οπότε οι ιστορικοί αντιμετωπίζουν με επιφύλαξη την εντυπωσιακή αφήγησή του, και κανένας ναός δεν έχει βρεθεί. Δείχνει όμως ότι ενώ η Δανία και η Νορβηγία ήταν επίσημα χριστιανικές, οι Σουηδοί της περιοχής της Μέλαρεν έμεναν ακόμη προσκολλημένοι στους παλαιούς θεούς. Ο εκχριστιανισμός της Σουηδίας ήταν αργός και αμφισβητούμενος, και ολοκληρώθηκε μόλις τον 12ο αιώνα."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1103,
      era: {
        en: "High Middle Ages",
        el: "Ύστερος Μεσαίωνας"
      },
      events: [
        {
          title: {
            en: "An archbishop for the North",
            el: "Ένας αρχιεπίσκοπος για τον Βορρά"
          },
          description: {
            en: "Lund, then in Danish Scania, becomes the seat of an archbishop over all Scandinavia, freeing the northern church from the German archbishops of Hamburg-Bremen.",
            el: "Το Λουντ, τότε στη δανική Σκανία, γίνεται έδρα αρχιεπισκόπου για ολόκληρη τη Σκανδιναβία, απελευθερώνοντας την Εκκλησία του Βορρά από τους Γερμανούς αρχιεπισκόπους του Αμβούργου-Βρέμης."
          },
          extendedDescription: {
            en: "The move was a triumph for the Danish kings, who wanted a church independent of the German emperor's influence. Norway got its own archbishop at Nidaros in 1153, and Sweden at Uppsala in 1164. Great Romanesque cathedrals rose at Lund, Ribe and Trondheim, and the church brought Latin learning, writing and new ideas of kingship to the North.",
            el: "Η μεταβολή ήταν θρίαμβος για τους Δανούς βασιλείς, που ήθελαν μια Εκκλησία ανεξάρτητη από την επιρροή του Γερμανού αυτοκράτορα. Η Νορβηγία απέκτησε δικό της αρχιεπίσκοπο στο Νίνταρος το 1153 και η Σουηδία στην Ουψάλα το 1164. Μεγάλοι ρωμανικοί καθεδρικοί ναοί υψώθηκαν στο Λουντ, στο Ρίμπε και στο Τρόντχαϊμ, και η Εκκλησία έφερε στον Βορρά τη λατινική παιδεία, τη γραφή και νέες ιδέες για τη βασιλεία."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1167,
      era: {
        en: "High Middle Ages",
        el: "Ύστερος Μεσαίωνας"
      },
      events: [
        {
          title: {
            en: "Bishop Absalon founds Copenhagen",
            el: "Ο επίσκοπος Άμπσαλον ιδρύει την Κοπεγχάγη"
          },
          description: {
            en: "Absalon, warrior-bishop of Roskilde, builds a castle on an islet by the fishing village of Havn — the beginning of Copenhagen, the 'merchants' harbour'.",
            el: "Ο Άμπσαλον, πολεμιστής επίσκοπος του Ρόσκιλε, χτίζει ένα κάστρο σε ένα νησάκι δίπλα στο ψαροχώρι Χαβν — η αρχή της Κοπεγχάγης, του «λιμανιού των εμπόρων»."
          },
          extendedDescription: {
            en: "Absalon was the right hand of King Valdemar the Great and led Danish fleets against the pagan Wends of the southern Baltic, capturing their great temple at Arkona on Rügen in 1168. His castle guarded the Øresund against pirates and the rich herring fisheries. Copenhagen grew into Denmark's capital by the 15th century, and Absalon's statue still stands on horseback in the city he founded.",
            el: "Ο Άμπσαλον ήταν το δεξί χέρι του βασιλιά Βάλντεμαρ του Μεγάλου και οδήγησε δανικούς στόλους εναντίον των ειδωλολατρών Βένδων της νότιας Βαλτικής, καταλαμβάνοντας τον μεγάλο ναό τους στην Αρκόνα της Ρίγκεν το 1168. Το κάστρο του φύλαγε το Έρεσουντ από τους πειρατές και τα πλούσια αλιευτικά πεδία της ρέγγας. Η Κοπεγχάγη εξελίχθηκε σε πρωτεύουσα της Δανίας ως τον 15ο αιώνα, και ο έφιππος ανδριάντας του Άμπσαλον στέκεται ακόμη στην πόλη που ίδρυσε."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1219,
      era: {
        en: "High Middle Ages",
        el: "Ύστερος Μεσαίωνας"
      },
      events: [
        {
          title: {
            en: "The Dannebrog falls from the sky",
            el: "Το Ντάνεμπρογκ πέφτει από τον ουρανό"
          },
          description: {
            en: "King Valdemar II leads a crusade to Estonia and wins the Battle of Lyndanisse, where legend says a red banner with a white cross fell from heaven — the Danish flag.",
            el: "Ο βασιλιάς Βάλντεμαρ Β΄ ηγείται μιας σταυροφορίας στην Εσθονία και κερδίζει τη μάχη του Λίντανισε, όπου ο θρύλος λέει ότι ένα κόκκινο λάβαρο με λευκό σταυρό έπεσε από τον ουρανό — η σημαία της Δανίας."
          },
          extendedDescription: {
            en: "The legend is first recorded three centuries later, but the Dannebrog is considered the oldest continuously used national flag in the world. The Danes built a castle at Lyndanisse, which the Estonians called Tallinn — 'Danish town'. Valdemar the Victorious ruled a Baltic empire at its height, but in 1223 he was kidnapped by a German count, and Denmark lost most of its conquests.",
            el: "Ο θρύλος καταγράφεται για πρώτη φορά τρεις αιώνες αργότερα, αλλά το Ντάνεμπρογκ θεωρείται η αρχαιότερη εθνική σημαία του κόσμου σε συνεχή χρήση. Οι Δανοί έχτισαν ένα κάστρο στο Λίντανισε, το οποίο οι Εσθονοί ονόμασαν Ταλίν — «δανική πόλη». Ο Βάλντεμαρ ο Νικηφόρος κυβέρνησε μια αυτοκρατορία της Βαλτικής στο απόγειό της, αλλά το 1223 απήχθη από έναν Γερμανό κόμη, και η Δανία έχασε τις περισσότερες κατακτήσεις της."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/CA_Lorentzen%2C_Dannebrog_falder_ned_fra_himlen_under_Volmerslaget_ved_Lyndanisse_Tallin_i_Estland_den_15_juni_1219%2C_1809%2C_KMS274%2C_Statens_Museum_for_Kunst.jpg?width=1024",
            alt: {
              en: "C. A. Lorentzen's 1809 painting of the Dannebrog falling from the sky at the Battle of Lyndanisse",
              el: "Πίνακας του Κ. Α. Λόρεντσεν (1809) με το Ντάνεμπρογκ να πέφτει από τον ουρανό στη μάχη του Λίντανισε"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1220,
      era: {
        en: "High Middle Ages",
        el: "Ύστερος Μεσαίωνας"
      },
      events: [
        {
          title: {
            en: "Snorri Sturluson writes the Prose Edda",
            el: "Ο Σνόρι Στούρλουσον γράφει την Πεζή Έντα"
          },
          description: {
            en: "The Icelandic chieftain and poet Snorri Sturluson writes the Prose Edda, the richest source for Norse mythology, and later Heimskringla, the sagas of the Norwegian kings.",
            el: "Ο Ισλανδός αρχηγός και ποιητής Σνόρι Στούρλουσον γράφει την Πεζή Έντα, την πλουσιότερη πηγή για τη σκανδιναβική μυθολογία, και αργότερα τη Χάιμσκρινγκλα, τα έπη των βασιλέων της Νορβηγίας."
          },
          extendedDescription: {
            en: "Much of what the world knows of Odin, Thor, Loki, Valhalla and Ragnarök comes from Snorri, who wrote the Edda as a handbook for poets two centuries after Iceland's conversion. The 13th century was Iceland's golden age of writing: anonymous authors produced the family sagas, such as Njáls saga and Egils saga, masterpieces of medieval prose. Snorri himself was murdered in his cellar in 1241 on the orders of the Norwegian king.",
            el: "Πολλά από όσα γνωρίζει ο κόσμος για τον Όντιν, τον Θωρ, τον Λόκι, τη Βαλχάλα και το Ράγκναροκ προέρχονται από τον Σνόρι, ο οποίος έγραψε την Έντα ως εγχειρίδιο για ποιητές δύο αιώνες μετά τον εκχριστιανισμό της Ισλανδίας. Ο 13ος αιώνας ήταν ο χρυσός αιώνας της ισλανδικής γραφής: ανώνυμοι συγγραφείς δημιούργησαν τα οικογενειακά έπη, όπως το Έπος του Νιαλ και το Έπος του Έγκιλ, αριστουργήματα της μεσαιωνικής πεζογραφίας. Ο ίδιος ο Σνόρι δολοφονήθηκε στο κελάρι του το 1241 με εντολή του Νορβηγού βασιλιά."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1262,
      era: {
        en: "High Middle Ages",
        el: "Ύστερος Μεσαίωνας"
      },
      events: [
        {
          title: {
            en: "Iceland submits to Norway",
            el: "Η Ισλανδία υποτάσσεται στη Νορβηγία"
          },
          description: {
            en: "Exhausted by decades of civil war among its chieftains, Iceland accepts the rule of King Haakon IV of Norway, ending the independent commonwealth.",
            el: "Εξαντλημένη από δεκαετίες εμφυλίου πολέμου ανάμεσα στους αρχηγούς της, η Ισλανδία αποδέχεται την εξουσία του βασιλιά Χάακον Δ΄ της Νορβηγίας, τερματίζοντας την ανεξάρτητη κοινοπολιτεία."
          },
          extendedDescription: {
            en: "The 'Age of the Sturlungs' had seen a handful of powerful families fight for control, with the Norwegian crown playing them against each other. By the Old Covenant of 1262–64, Icelanders agreed to pay tax to the king in return for peace and guaranteed shipping. Greenland submitted around the same time. Norway's realm now stretched across the North Atlantic — its greatest extent.",
            el: "Η «Εποχή των Στούρλουνγκ» είχε δει λίγες ισχυρές οικογένειες να πολεμούν για την εξουσία, με το νορβηγικό στέμμα να τις στρέφει τη μία εναντίον της άλλης. Με την Παλαιά Σύμβαση του 1262–64, οι Ισλανδοί συμφώνησαν να πληρώνουν φόρο στον βασιλιά με αντάλλαγμα ειρήνη και εγγυημένη ναυσιπλοΐα. Η Γροιλανδία υποτάχθηκε την ίδια περίπου εποχή. Το βασίλειο της Νορβηγίας εκτεινόταν πλέον σε όλο τον Βόρειο Ατλαντικό — η μεγαλύτερη έκτασή του."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1263,
      era: {
        en: "High Middle Ages",
        el: "Ύστερος Μεσαίωνας"
      },
      events: [
        {
          title: {
            en: "The Battle of Largs",
            el: "Η μάχη του Λαρτζ"
          },
          description: {
            en: "King Haakon IV sails with a great fleet to defend Norway's hold on the Hebrides, but storms and a Scottish army at Largs force him back; he dies in Orkney that winter.",
            el: "Ο βασιλιάς Χάακον Δ΄ πλέει με μεγάλο στόλο για να υπερασπιστεί την κυριαρχία της Νορβηγίας στις Εβρίδες, αλλά οι καταιγίδες και ένας σκωτικός στρατός στο Λαρτζ τον αναγκάζουν να υποχωρήσει· πεθαίνει στις Όρκνεϊ εκείνον τον χειμώνα."
          },
          extendedDescription: {
            en: "The battle itself was indecisive, but it ended Norway's power in the western isles. By the Treaty of Perth in 1266, Haakon's son Magnus the Law-mender sold the Hebrides and the Isle of Man to Scotland. Orkney and Shetland remained Norwegian for another two centuries. Magnus went on to give Norway a single national law code in 1274, one of the most advanced in Europe.",
            el: "Η ίδια η μάχη δεν ήταν καθοριστική, αλλά τερμάτισε την ισχύ της Νορβηγίας στα δυτικά νησιά. Με τη Συνθήκη του Περθ το 1266, ο γιος του Χάακον, Μάγκνους ο Νομοθέτης, πούλησε τις Εβρίδες και τη Νήσο του Μαν στη Σκωτία. Οι Όρκνεϊ και οι Σέτλαντ έμειναν νορβηγικές για άλλους δύο αιώνες. Ο Μάγκνους στη συνέχεια έδωσε στη Νορβηγία έναν ενιαίο εθνικό νομικό κώδικα το 1274, έναν από τους πιο προηγμένους της Ευρώπης."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1282,
      era: {
        en: "High Middle Ages",
        el: "Ύστερος Μεσαίωνας"
      },
      events: [
        {
          title: {
            en: "Denmark's first royal charter",
            el: "Ο πρώτος βασιλικός χάρτης της Δανίας"
          },
          description: {
            en: "The Danish nobles force King Eric V Klipping to sign a charter limiting royal power and requiring an annual parliament — sometimes called Denmark's Magna Carta.",
            el: "Οι Δανοί ευγενείς αναγκάζουν τον βασιλιά Έρικ Ε΄ Κλίπινγκ να υπογράψει έναν χάρτη που περιορίζει τη βασιλική εξουσία και προβλέπει ετήσια συνέλευση — που μερικές φορές αποκαλείται η Μάγκνα Κάρτα της Δανίας."
          },
          extendedDescription: {
            en: "The charter promised that no one would be imprisoned without trial and that the king would summon the magnates each year. Eric was murdered in 1286 in a barn at Finderup, a crime that remains one of Denmark's great medieval mysteries. From this time, Danish kings had to sign a coronation charter (håndfæstning) before taking the throne — until absolutism swept the system away in 1660.",
            el: "Ο χάρτης υποσχόταν ότι κανείς δεν θα φυλακιζόταν χωρίς δίκη και ότι ο βασιλιάς θα συγκαλούσε τους μεγιστάνες κάθε χρόνο. Ο Έρικ δολοφονήθηκε το 1286 σε έναν αχυρώνα στο Φίντερουπ, ένα έγκλημα που παραμένει ένα από τα μεγάλα μεσαιωνικά μυστήρια της Δανίας. Από τότε, οι Δανοί βασιλείς έπρεπε να υπογράφουν χάρτη στέψης (håndfæstning) πριν ανέβουν στον θρόνο — ώσπου η απολυταρχία σάρωσε το σύστημα το 1660."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1319,
      era: {
        en: "Late Middle Ages",
        el: "Ύστερος Μεσαίωνας"
      },
      events: [
        {
          title: {
            en: "Norway and Sweden share a king",
            el: "Νορβηγία και Σουηδία μοιράζονται βασιλιά"
          },
          description: {
            en: "The three-year-old Magnus Eriksson inherits the Norwegian crown and is elected king of Sweden, joining the two kingdoms under one ruler for the first time.",
            el: "Ο τρίχρονος Μάγκνους Έρικσον κληρονομεί το νορβηγικό στέμμα και εκλέγεται βασιλιάς της Σουηδίας, ενώνοντας για πρώτη φορά τα δύο βασίλεια υπό έναν ηγεμόνα."
          },
          extendedDescription: {
            en: "Magnus' long reign brought Sweden its first national law code (c. 1350) and, briefly, control of Scania, bought from Denmark in 1332. But the union was personal, not institutional, and nobles in both countries resented an absent king. Magnus' reign was later marred by the Black Death and by the loss of Scania to Denmark's Valdemar Atterdag in 1360.",
            el: "Η μακρά βασιλεία του Μάγκνους έδωσε στη Σουηδία τον πρώτο εθνικό νομικό της κώδικα (περ. 1350) και, για λίγο, τον έλεγχο της Σκανίας, που αγοράστηκε από τη Δανία το 1332. Όμως η ένωση ήταν προσωπική και όχι θεσμική, και οι ευγενείς και των δύο χωρών δυσανασχετούσαν με έναν απόντα βασιλιά. Η βασιλεία του Μάγκνους αμαυρώθηκε αργότερα από τον Μαύρο Θάνατο και από την απώλεια της Σκανίας από τον Βάλντεμαρ Άτερνταγκ της Δανίας το 1360."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1349,
      era: {
        en: "Late Middle Ages",
        el: "Ύστερος Μεσαίωνας"
      },
      events: [
        {
          title: {
            en: "The Black Death reaches Norway",
            el: "Ο Μαύρος Θάνατος φτάνει στη Νορβηγία"
          },
          description: {
            en: "An English ship brings the plague to Bergen; within two years perhaps half of Norway's population is dead, and countless farms lie empty.",
            el: "Ένα αγγλικό πλοίο φέρνει την πανώλη στο Μπέργκεν· μέσα σε δύο χρόνια ίσως ο μισός πληθυσμός της Νορβηγίας έχει πεθάνει και αμέτρητες φάρμες μένουν έρημες."
          },
          extendedDescription: {
            en: "Norway, with its scattered farms and thin population, was hit especially hard, and the plague returned repeatedly in the following decades. The nobility and church lost much of their income, royal administration withered, and the country's ability to act independently was badly weakened. Many historians see the Black Death as the reason Norway would spend the next four centuries as the junior partner of Denmark.",
            el: "Η Νορβηγία, με τις διάσπαρτες φάρμες και τον αραιό πληθυσμό της, επλήγη ιδιαίτερα σκληρά, και η πανώλη επέστρεφε ξανά και ξανά τις επόμενες δεκαετίες. Οι ευγενείς και η Εκκλησία έχασαν μεγάλο μέρος των εσόδων τους, η βασιλική διοίκηση μαράζωσε και η ικανότητα της χώρας να δρα ανεξάρτητα αποδυναμώθηκε σοβαρά. Πολλοί ιστορικοί βλέπουν στον Μαύρο Θάνατο τον λόγο για τον οποίο η Νορβηγία θα περνούσε τους επόμενους τέσσερις αιώνες ως ο ασθενέστερος εταίρος της Δανίας."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1361,
      era: {
        en: "Late Middle Ages",
        el: "Ύστερος Μεσαίωνας"
      },
      events: [
        {
          title: {
            en: "Valdemar Atterdag sacks Visby",
            el: "Ο Βάλντεμαρ Άτερνταγκ λεηλατεί το Βίσμπι"
          },
          description: {
            en: "King Valdemar IV of Denmark invades Gotland, slaughters its peasant army outside the walls of Visby, and forces the rich Hanseatic town to pay a huge ransom.",
            el: "Ο βασιλιάς Βάλντεμαρ Δ΄ της Δανίας εισβάλλει στο Γκότλαντ, σφάζει τον αγροτικό στρατό του έξω από τα τείχη του Βίσμπι και αναγκάζει την πλούσια χανσεατική πόλη να πληρώσει τεράστια λύτρα."
          },
          extendedDescription: {
            en: "Some 1,800 Gotland farmers, many old or young and poorly armed, were killed; their mass graves, excavated in the 20th century, preserved armour and wounds in grim detail. Valdemar had spent his reign rebuilding a Denmark that had been pawned off to German lords piece by piece. His attack on a Hanseatic town, however, provoked a war with the whole League.",
            el: "Περίπου 1.800 αγρότες του Γκότλαντ, πολλοί ηλικιωμένοι ή νεαροί και φτωχά οπλισμένοι, σκοτώθηκαν· οι ομαδικοί τάφοι τους, που ανασκάφηκαν τον 20ό αιώνα, διατήρησαν πανοπλίες και τραύματα με φρικτή λεπτομέρεια. Ο Βάλντεμαρ είχε περάσει τη βασιλεία του ανασυνθέτοντας μια Δανία που είχε ενεχυριαστεί κομμάτι-κομμάτι σε Γερμανούς άρχοντες. Η επίθεσή του σε μια χανσεατική πόλη, ωστόσο, προκάλεσε πόλεμο με ολόκληρη την Ένωση."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Carl_Gustaf_Hellqvist_-_Valdemar_Atterdag_Holding_Visby_to_Ransom%2C_1361_-_Google_Art_Project.jpg?width=1024",
            alt: {
              en: "Carl Gustaf Hellqvist's 1882 painting of Valdemar Atterdag holding Visby to ransom",
              el: "Πίνακας του Καρλ Γκούσταφ Χέλκβιστ (1882) με τον Βάλντεμαρ Άτερνταγκ να ζητά λύτρα από το Βίσμπι"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1370,
      era: {
        en: "Late Middle Ages",
        el: "Ύστερος Μεσαίωνας"
      },
      events: [
        {
          title: {
            en: "The Peace of Stralsund",
            el: "Η Ειρήνη του Στράλζουντ"
          },
          description: {
            en: "Defeated by the Hanseatic League, Denmark grants the German merchants sweeping trade privileges and control of fortresses on the Øresund for fifteen years.",
            el: "Ηττημένη από τη Χανσεατική Ένωση, η Δανία παραχωρεί στους Γερμανούς εμπόρους εκτεταμένα εμπορικά προνόμια και τον έλεγχο φρουρίων στο Έρεσουντ για δεκαπέντε χρόνια."
          },
          extendedDescription: {
            en: "The peace marked the height of Hanseatic power. From their kontor at Bryggen in Bergen, German merchants controlled the export of Norwegian stockfish; in Stockholm and Visby they dominated trade and town councils; the herring markets of Scania made them rich. The League even claimed a voice in choosing Denmark's next king — a sign of how much northern politics now depended on Lübeck.",
            el: "Η ειρήνη σηματοδότησε το απόγειο της χανσεατικής ισχύος. Από το εμπορικό τους πρακτορείο στο Μπρίγκεν του Μπέργκεν, οι Γερμανοί έμποροι έλεγχαν την εξαγωγή του νορβηγικού παστού μπακαλιάρου· στη Στοκχόλμη και στο Βίσμπι κυριαρχούσαν στο εμπόριο και στα δημοτικά συμβούλια· οι αγορές ρέγγας της Σκανίας τους έκαναν πλούσιους. Η Ένωση διεκδίκησε ακόμη και λόγο στην επιλογή του επόμενου βασιλιά της Δανίας — ένδειξη του πόσο η πολιτική του Βορρά εξαρτιόταν πλέον από το Λύμπεκ."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1380,
      era: {
        en: "Late Middle Ages",
        el: "Ύστερος Μεσαίωνας"
      },
      events: [
        {
          title: {
            en: "Denmark and Norway united",
            el: "Δανία και Νορβηγία ενώνονται"
          },
          description: {
            en: "Young Olaf, son of Margaret of Denmark and King Haakon VI of Norway, inherits both crowns — the start of a union between Denmark and Norway that will last until 1814.",
            el: "Ο νεαρός Όλαφ, γιος της Μαργαρίτας της Δανίας και του βασιλιά Χάακον ΣΤ΄ της Νορβηγίας, κληρονομεί και τα δύο στέμματα — η αρχή μιας ένωσης Δανίας και Νορβηγίας που θα διαρκέσει ως το 1814."
          },
          extendedDescription: {
            en: "Olaf had been elected king of Denmark in 1376 as a child, with his mother Margaret, daughter of Valdemar Atterdag, governing in his name. When his father died in 1380 he inherited Norway too. Olaf died suddenly in 1387, aged seventeen, but Margaret was so firmly in control that both kingdoms accepted her as their ruler — a remarkable position for a woman in medieval Europe.",
            el: "Ο Όλαφ είχε εκλεγεί βασιλιάς της Δανίας το 1376 ως παιδί, με τη μητέρα του Μαργαρίτα, κόρη του Βάλντεμαρ Άτερνταγκ, να κυβερνά στο όνομά του. Όταν ο πατέρας του πέθανε το 1380, κληρονόμησε και τη Νορβηγία. Ο Όλαφ πέθανε ξαφνικά το 1387, σε ηλικία δεκαεπτά ετών, αλλά η Μαργαρίτα είχε τόσο σταθερά τον έλεγχο ώστε και τα δύο βασίλεια την αποδέχτηκαν ως ηγεμόνα τους — μια αξιοσημείωτη θέση για μια γυναίκα στη μεσαιωνική Ευρώπη."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1389,
      era: {
        en: "Late Middle Ages",
        el: "Ύστερος Μεσαίωνας"
      },
      events: [
        {
          title: {
            en: "Margaret triumphs at Åsle",
            el: "Η Μαργαρίτα θριαμβεύει στο Όσλε"
          },
          description: {
            en: "Swedish nobles call on Margaret against their unpopular German-born king, Albert of Mecklenburg; her army defeats and captures him at Åsle.",
            el: "Οι Σουηδοί ευγενείς καλούν τη Μαργαρίτα εναντίον του αντιδημοφιλούς γερμανικής καταγωγής βασιλιά τους, του Αλβέρτου του Μεκλεμβούργου· ο στρατός της τον νικά και τον αιχμαλωτίζει στο Όσλε."
          },
          extendedDescription: {
            en: "Albert had mocked Margaret as 'King Breechless' and sent her a whetstone to sharpen her needles. After Åsle she held him prisoner for six years, though Stockholm, defended by his German supporters, held out until 1398. Margaret now controlled all three Scandinavian kingdoms — and set about making the union permanent through her young great-nephew, Eric of Pomerania.",
            el: "Ο Αλβέρτος είχε χλευάσει τη Μαργαρίτα ως «Βασιλιά Χωρίς Βράκα» και της είχε στείλει ένα ακόνι για να ακονίζει τις βελόνες της. Μετά το Όσλε τον κράτησε αιχμάλωτο επί έξι χρόνια, αν και η Στοκχόλμη, που την υπερασπίζονταν οι Γερμανοί υποστηρικτές του, αντιστάθηκε ως το 1398. Η Μαργαρίτα έλεγχε πλέον και τα τρία σκανδιναβικά βασίλεια — και ξεκίνησε να κάνει την ένωση μόνιμη μέσω του νεαρού ανιψιού της, του Έρικ της Πομερανίας."
          },
          category: "military"
        }
      ]
    }
  ]
} satisfies PeriodDefinition;
