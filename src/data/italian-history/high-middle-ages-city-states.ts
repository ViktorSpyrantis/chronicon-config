/** High Middle Ages & City-States — Ώριμος Μεσαίωνας & Πόλεις-Κράτη · Italian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const HIGH_MIDDLE_AGES_CITY_STATES = {
  id: "high-middle-ages-city-states" as const,
  label: {
    en: "High Middle Ages & City-States",
    el: "Ώριμος Μεσαίωνας & Πόλεις-Κράτη"
  },
  supertitle: {
    en: "Comuni e Signorie",
    el: "Πόλεις-Κράτη"
  },
  title: {
    en: "High Middle Ages & the City-States",
    el: "Ώριμος Μεσαίωνας & Πόλεις-Κράτη"
  },
  subtitle: {
    en: "From the Norman conquest of the south and the clash of popes and emperors to the rise of the communes, the maritime empires of Venice and Genoa, the friars and the Black Death, the age of the signorie and the Peace of Lodi, ending with the French invasion of 1494 — the centuries in which the Italian city-states became the wealthiest and most inventive polities of medieval Europe. Slide across the centuries to read the major events of Italy's high and late Middle Ages.",
    el: "Από τη νορμανδική κατάκτηση του Νότου και τη σύγκρουση παπών και αυτοκρατόρων ως την άνοδο των κοινοτήτων, τις ναυτικές αυτοκρατορίες της Βενετίας και της Γένοβας, τα επαιτικά τάγματα και τον Μαύρο Θάνατο, την εποχή των σινιορίε και την Ειρήνη της Λόντι, καταλήγοντας στη γαλλική εισβολή του 1494 — οι αιώνες κατά τους οποίους οι ιταλικές πόλεις-κράτη έγιναν οι πλουσιότερες και πιο εφευρετικές πολιτείες της μεσαιωνικής Ευρώπης. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα σημαντικότερα γεγονότα του ώριμου και ύστερου ιταλικού Μεσαίωνα."
  },
  menuDescription: {
    en: "Communes and the Black Death, Venice and the signorie, up to the eve of the Italian Wars.",
    el: "Κοινότητες και Μαύρος Θάνατος, η Βενετία κι οι σινιορίε, ως τις παραμονές των Ιταλικών Πολέμων."
  },
  footerLabel: {
    en: "High Middle Ages & City-States · 1000-1494 AD",
    el: "Ώριμος Μεσαίωνας & Πόλεις-Κράτη · 1000-1494 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "High Middle Ages & the City-States",
    el: "Ώριμος Μεσαίωνας & Πόλεις-Κράτη"
  },
  theme: THEMES.amber,
  timeline: [
    {
      year: 1017,
      era: {
        en: "Norman South",
        el: "Νορμανδικός Νότος"
      },
      events: [
        {
          title: {
            en: "Norman Adventurers Arrive in the South",
            el: "Νορμανδοί Τυχοδιώκτες Φτάνουν στον Νότο"
          },
          description: {
            en: "Norman knights, met as pilgrims at the shrine of St Michael on Monte Gargano, join the Lombard rebel Melus of Bari in a revolt against Byzantine rule in Apulia.",
            el: "Νορμανδοί ιππότες, που συναντήθηκαν ως προσκυνητές στο ιερό του Αγίου Μιχαήλ στο όρος Γκαργκάνο, ενώνονται με τον Λομβαρδό επαναστάτη Μέλο του Μπάρι σε μια εξέγερση κατά της βυζαντινής κυριαρχίας στην Απουλία."
          },
          extendedDescription: {
            en: "Southern Italy was then a patchwork of Byzantine provinces, Lombard principalities such as Salerno, Capua and Benevento, the maritime duchies of Naples, Amalfi and Gaeta, and Muslim-ruled Sicily. The rebellion was crushed by the Byzantine catepan Basil Boioannes at Cannae in 1018, on the site of Hannibal's victory, but the Normans stayed on as mercenaries for whichever lord would pay them. Within fifty years their descendants would rule the whole south.",
            el: "Η νότια Ιταλία ήταν τότε ένα μωσαϊκό από βυζαντινές επαρχίες, λομβαρδικά πριγκιπάτα όπως το Σαλέρνο, η Κάπουα και το Μπενεβέντο, τα ναυτικά δουκάτα της Νάπολης, του Αμάλφι και της Γκαέτα, και τη Σικελία υπό μουσουλμανική κυριαρχία. Η εξέγερση συντρίφτηκε από τον βυζαντινό κατεπάνω Βασίλειο Βοϊωάννη στις Κάννες το 1018, στον τόπο της νίκης του Αννίβα, αλλά οι Νορμανδοί έμειναν ως μισθοφόροι για όποιον άρχοντα τους πλήρωνε. Μέσα σε πενήντα χρόνια οι απόγονοί τους θα κυβερνούσαν ολόκληρο τον νότο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1025,
      era: {
        en: "Romanesque Italy",
        el: "Ρομανική Ιταλία"
      },
      events: [
        {
          title: {
            en: "Guido of Arezzo Invents Modern Musical Notation",
            el: "Ο Γκουίντο του Αρέτσο Επινοεί τη Σύγχρονη Μουσική Σημειογραφία"
          },
          description: {
            en: "The Benedictine monk Guido of Arezzo writes his Micrologus, setting out a staff of lines for writing pitch and the syllables ut, re, mi, fa, sol, la for teaching singers.",
            el: "Ο βενεδικτίνος μοναχός Γκουίντο του Αρέτσο γράφει το Micrologus, εισάγοντας ένα πεντάγραμμο από γραμμές για την καταγραφή του τονικού ύψους και τις συλλαβές ut, re, mi, fa, sol, la για τη διδασκαλία των ψαλτών."
          },
          extendedDescription: {
            en: "Guido took the syllables from the first notes of each line of a hymn to St John the Baptist, Ut queant laxis, so that singers could learn a new chant from the page rather than by years of imitation. Pope John XIX invited him to Rome to demonstrate the method. His lines and clefs are the direct ancestors of the modern stave, and 'ut' later became 'do'. The Guidonian hand, a teaching aid that mapped the notes onto the joints of the hand, was named after him.",
            el: "Ο Γκουίντο πήρε τις συλλαβές από τις πρώτες νότες κάθε στίχου ενός ύμνου στον Άγιο Ιωάννη τον Βαπτιστή, του Ut queant laxis, ώστε οι ψάλτες να μπορούν να μαθαίνουν ένα νέο μέλος από τη σελίδα και όχι με χρόνια μίμησης. Ο πάπας Ιωάννης ΙΘ΄ τον κάλεσε στη Ρώμη για να επιδείξει τη μέθοδο. Οι γραμμές και τα κλειδιά του είναι οι άμεσοι πρόγονοι του σύγχρονου πενταγράμμου, και το «ut» έγινε αργότερα «ντο». Το «χέρι του Γκουίντο», ένα διδακτικό βοήθημα που αντιστοίχιζε τις νότες στις αρθρώσεις του χεριού, πήρε το όνομά του."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Guidonian_hand.jpg?width=1024",
            alt: {
              en: "The Guidonian hand in a medieval manuscript: the notes of the scale written on the joints of an open hand",
              el: "Το «χέρι του Γκουίντο» σε μεσαιωνικό χειρόγραφο: οι νότες της κλίμακας γραμμένες στις αρθρώσεις ενός ανοιχτού χεριού"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1030,
      era: {
        en: "Norman South",
        el: "Νορμανδικός Νότος"
      },
      events: [
        {
          title: {
            en: "Rainulf Drengot Receives Aversa",
            el: "Ο Ραΐνουλφος Ντρεγκότ Λαμβάνει την Αβέρσα"
          },
          description: {
            en: "Duke Sergius IV of Naples grants the county of Aversa to his Norman ally Rainulf Drengot — the first lordship held by Normans in Italy.",
            el: "Ο δούκας Σέργιος Δ΄ της Νάπολης παραχωρεί την κομητεία της Αβέρσας στον Νορμανδό σύμμαχό του Ραΐνουλφο Ντρεγκότ — η πρώτη κυριαρχία που κατείχαν Νορμανδοί στην Ιταλία."
          },
          extendedDescription: {
            en: "Aversa became a magnet for landless younger sons from Normandy. Among the newcomers in the 1030s were the sons of Tancred of Hauteville, a minor knight with twelve sons; William 'Iron Arm' and Drogo fought for the Byzantine general George Maniakes in his campaign to retake Sicily from the Arabs in 1038. Their half-brothers Robert Guiscard and Roger would later found the Norman kingdom of the south.",
            el: "Η Αβέρσα έγινε πόλος έλξης για ακτήμονες νεότερους γιους από τη Νορμανδία. Ανάμεσα στους νεοφερμένους της δεκαετίας του 1030 ήταν οι γιοι του Ταγκρέδου του Οτβίλ, ενός μικρού ιππότη με δώδεκα γιους· ο Γουλιέλμος «Σιδερένιο Χέρι» και ο Δρώγων πολέμησαν για τον βυζαντινό στρατηγό Γεώργιο Μανιάκη στην εκστρατεία του για την ανακατάληψη της Σικελίας από τους Άραβες το 1038. Οι ετεροθαλείς αδελφοί τους Ροβέρτος Γυϊσκάρδος και Ρογήρος θα ίδρυαν αργότερα το νορμανδικό βασίλειο του νότου."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1053,
      era: {
        en: "Norman South",
        el: "Νορμανδικός Νότος"
      },
      events: [
        {
          title: {
            en: "Battle of Civitate: The Normans Capture a Pope",
            el: "Μάχη της Τσιβιτάτε: οι Νορμανδοί Αιχμαλωτίζουν έναν Πάπα"
          },
          description: {
            en: "Pope Leo IX leads an army of Swabians and Italians against the Normans of Apulia, but is routed at Civitate and held captive at Benevento.",
            el: "Ο πάπας Λέων Θ΄ οδηγεί έναν στρατό από Σουάβους και Ιταλούς εναντίον των Νορμανδών της Απουλίας, αλλά κατατροπώνεται στην Τσιβιτάτε και κρατείται αιχμάλωτος στο Μπενεβέντο."
          },
          extendedDescription: {
            en: "The pope had hoped to join forces with the Byzantines to drive the Normans out, but the Norman leaders, among them Humphrey of Hauteville, Robert Guiscard and Richard of Aversa, struck first and cut down the Swabian infantry. They then knelt before their captive and treated him with honour, while holding him for nine months. The failed alliance was followed in 1054 by the break between the churches of Rome and Constantinople, and the papacy soon decided that the Normans were better as allies than as enemies.",
            el: "Ο πάπας ήλπιζε να ενώσει τις δυνάμεις του με τους Βυζαντινούς για να διώξει τους Νορμανδούς, αλλά οι Νορμανδοί ηγέτες, ανάμεσά τους ο Ομφρέδος του Οτβίλ, ο Ροβέρτος Γυϊσκάρδος και ο Ριχάρδος της Αβέρσας, χτύπησαν πρώτοι και κατέσφαξαν το σουαβικό πεζικό. Έπειτα γονάτισαν μπροστά στον αιχμάλωτό τους και του φέρθηκαν με τιμές, κρατώντας τον ωστόσο επί εννέα μήνες. Τη συμμαχία που απέτυχε ακολούθησε το 1054 η ρήξη ανάμεσα στις Εκκλησίες της Ρώμης και της Κωνσταντινούπολης, και η παπωσύνη σύντομα αποφάσισε ότι οι Νορμανδοί ήταν προτιμότεροι ως σύμμαχοι παρά ως εχθροί."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Army_of_Leo_IX_departing_from_Rome_before_the_battle_of_Civitate%2C_1053.jpg?width=1024",
            alt: {
              en: "19th-century engraving of Pope Leo IX's army leaving Rome before the Battle of Civitate",
              el: "Χαρακτικό του 19ου αιώνα με τον στρατό του πάπα Λέοντα Θ΄ να αναχωρεί από τη Ρώμη πριν από τη μάχη της Τσιβιτάτε"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1059,
      era: {
        en: "Church Reform",
        el: "Εκκλησιαστική Μεταρρύθμιση"
      },
      events: [
        {
          title: {
            en: "The Cardinals Are Given the Election of Popes",
            el: "Η Εκλογή των Παπών Ανατίθεται στους Καρδιναλίους"
          },
          description: {
            en: "Pope Nicholas II's decree In nomine Domini places the election of the pope in the hands of the cardinals, to free the papacy from Roman nobles and the German emperor.",
            el: "Το διάταγμα του πάπα Νικολάου Β΄ In nomine Domini αναθέτει την εκλογή του πάπα στους καρδιναλίους, για να απελευθερώσει την παπωσύνη από τους Ρωμαίους ευγενείς και τον Γερμανό αυτοκράτορα."
          },
          extendedDescription: {
            en: "For two centuries popes had been made and unmade by rival Roman families or imposed by emperors. The decree was the work of the reform party around the monk Hildebrand, the future Gregory VII, whose clash with Henry IV would lead to Canossa. In modified form, election by the cardinals — later in conclave — remains the rule today.",
            el: "Επί δύο αιώνες οι πάπες αναδεικνύονταν και καθαιρούνταν από αντίπαλες ρωμαϊκές οικογένειες ή επιβάλλονταν από αυτοκράτορες. Το διάταγμα ήταν έργο της μεταρρυθμιστικής μερίδας γύρω από τον μοναχό Ιλδεβράνδο, τον μελλοντικό Γρηγόριο Ζ΄, του οποίου η σύγκρουση με τον Ερρίκο Δ΄ θα οδηγούσε στην Κανόσσα. Σε τροποποιημένη μορφή, η εκλογή από τους καρδιναλίους — αργότερα σε κονκλάβιο — παραμένει ο κανόνας ως σήμερα."
          },
          category: "religious"
        },
        {
          title: {
            en: "Treaty of Melfi: Robert Guiscard Becomes a Papal Duke",
            el: "Συνθήκη του Μέλφι: ο Ροβέρτος Γυϊσκάρδος Γίνεται Δούκας του Πάπα"
          },
          description: {
            en: "At Melfi, Nicholas II invests Robert Guiscard as duke of Apulia and Calabria and, 'with the help of God and St Peter', of Sicily still to be conquered, in return for his fealty.",
            el: "Στο Μέλφι, ο Νικόλαος Β΄ περιβάλλει τον Ροβέρτο Γυϊσκάρδο με τον τίτλο του δούκα της Απουλίας και της Καλαβρίας και, «με τη βοήθεια του Θεού και του Αγίου Πέτρου», της Σικελίας που δεν είχε ακόμη κατακτηθεί, με αντάλλαγμα την υποτέλειά του."
          },
          extendedDescription: {
            en: "Six years after Civitate, the papacy turned its former enemies into vassals and protectors. The Normans gained legitimacy for conquests made at the expense of Byzantium, the Lombard princes and the Muslims of Sicily; the reforming popes gained a military force independent of the emperor. The alliance shaped the politics of southern Italy for the next two centuries, and papal overlordship over the kingdom of Sicily would be claimed until the 19th century.",
            el: "Έξι χρόνια μετά την Τσιβιτάτε, η παπωσύνη μετέτρεψε τους πρώην εχθρούς της σε υποτελείς και προστάτες. Οι Νορμανδοί απέκτησαν νομιμοποίηση για κατακτήσεις εις βάρος του Βυζαντίου, των Λομβαρδών πριγκίπων και των μουσουλμάνων της Σικελίας· οι μεταρρυθμιστές πάπες απέκτησαν μια στρατιωτική δύναμη ανεξάρτητη από τον αυτοκράτορα. Η συμμαχία διαμόρφωσε την πολιτική της νότιας Ιταλίας για τους επόμενους δύο αιώνες, και η παπική επικυριαρχία στο βασίλειο της Σικελίας διεκδικούνταν ως τον 19ο αιώνα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1061,
      era: {
        en: "Norman Sicily",
        el: "Νορμανδική Σικελία"
      },
      events: [
        {
          title: {
            en: "The Norman Conquest of Sicily Begins",
            el: "Αρχίζει η Νορμανδική Κατάκτηση της Σικελίας"
          },
          description: {
            en: "Robert Guiscard and his youngest brother Roger cross the Strait of Messina and take Messina, beginning a thirty-year conquest of Muslim Sicily.",
            el: "Ο Ροβέρτος Γυϊσκάρδος και ο μικρότερος αδελφός του Ρογήρος διασχίζουν τον Πορθμό της Μεσσήνης και καταλαμβάνουν τη Μεσσήνη, ξεκινώντας μια τριακονταετή κατάκτηση της μουσουλμανικής Σικελίας."
          },
          extendedDescription: {
            en: "The island had been ruled by Arab emirs for two centuries and was divided among rival lords, one of whom invited the Normans in. Roger won a great victory at Cerami in 1063; Palermo fell in 1072 and the last Muslim stronghold, Noto, in 1091. As Count of Sicily, Roger governed a mixed population of Greek Christians, Arabic-speaking Muslims and Latin settlers, laying the foundations for the multicultural kingdom of his son Roger II.",
            el: "Το νησί κυβερνιόταν από Άραβες εμίρηδες επί δύο αιώνες και ήταν μοιρασμένο ανάμεσα σε αντίπαλους άρχοντες, ένας από τους οποίους κάλεσε τους Νορμανδούς. Ο Ρογήρος κέρδισε μια μεγάλη νίκη στο Τσεράμι το 1063· το Παλέρμο έπεσε το 1072 και το τελευταίο μουσουλμανικό προπύργιο, το Νότο, το 1091. Ως κόμης της Σικελίας, ο Ρογήρος κυβέρνησε έναν μεικτό πληθυσμό Ελλήνων χριστιανών, αραβόφωνων μουσουλμάνων και Λατίνων εποίκων, θέτοντας τα θεμέλια για το πολυπολιτισμικό βασίλειο του γιου του, Ρογήρου Β΄."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Landing_of_Robert_Guiscard_in_Sicily_(A._de_Neuville).jpg?width=1024",
            alt: {
              en: "Alphonse de Neuville's 19th-century illustration of Robert Guiscard's Norman knights landing in Sicily",
              el: "Εικονογράφηση του Αλφόνς ντε Νεβίλ (19ος αιώνας) με τους Νορμανδούς ιππότες του Ροβέρτου Γυϊσκάρδου να αποβιβάζονται στη Σικελία"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1063,
      era: {
        en: "Maritime Republics",
        el: "Ναυτικές Δημοκρατίες"
      },
      events: [
        {
          title: {
            en: "Pisa Raids Palermo and Begins Its Cathedral",
            el: "Η Πίζα Επιτίθεται στο Παλέρμο και Ξεκινά τον Καθεδρικό της"
          },
          description: {
            en: "A Pisan fleet breaks into the harbour of Muslim Palermo and carries off rich plunder, which pays for the building of Pisa's great new cathedral, begun the same year.",
            el: "Ένας πισάτικος στόλος εισβάλλει στο λιμάνι του μουσουλμανικού Παλέρμου και αποκομίζει πλούσια λάφυρα, με τα οποία χρηματοδοτείται η ανέγερση του μεγάλου νέου καθεδρικού ναού της Πίζας, που ξεκινά την ίδια χρονιά."
          },
          extendedDescription: {
            en: "Designed by the architect Buscheto, whose tomb is set into the façade, the cathedral became the model of Pisan Romanesque, with its tiers of arcades in white and grey marble; its bell tower, begun in 1173, is the famous Leaning Tower. An inscription on the façade records the Palermo raid. Pisa, Genoa, Venice and Amalfi were turning into the maritime republics that would dominate Mediterranean trade and take part in the Crusades.",
            el: "Σχεδιασμένος από τον αρχιτέκτονα Μπουσκέτο, ο τάφος του οποίου είναι ενσωματωμένος στην πρόσοψη, ο καθεδρικός έγινε το πρότυπο του πισάτικου ρομανικού ρυθμού, με τις σειρές τοξοστοιχιών του σε λευκό και γκρίζο μάρμαρο· το καμπαναριό του, που ξεκίνησε το 1173, είναι ο περίφημος Κεκλιμένος Πύργος. Μια επιγραφή στην πρόσοψη καταγράφει την επιδρομή στο Παλέρμο. Η Πίζα, η Γένοβα, η Βενετία και το Αμάλφι εξελίσσονταν στις ναυτικές δημοκρατίες που θα κυριαρχούσαν στο μεσογειακό εμπόριο και θα έπαιρναν μέρος στις Σταυροφορίες."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Duomo_di_Pisa_1.jpg?width=1024",
            alt: {
              en: "The arcaded marble façade of Pisa Cathedral",
              el: "Η μαρμάρινη πρόσοψη του καθεδρικού ναού της Πίζας με τις τοξοστοιχίες της"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1071,
      era: {
        en: "Norman South",
        el: "Νορμανδικός Νότος"
      },
      events: [
        {
          title: {
            en: "Norman Conquest of Bari Ends Byzantine Italy",
            el: "Η Νορμανδική Άλωση του Μπάρι Τερματίζει τη Βυζαντινή Ιταλία"
          },
          description: {
            en: "After a three-year siege, Robert Guiscard captures Bari, the last Byzantine stronghold in Italy, completing the Norman conquest of the south.",
            el: "Έπειτα από τριετή πολιορκία, ο Ροβέρτος Γυϊσκάρδος καταλαμβάνει το Μπάρι, το τελευταίο βυζαντινό προπύργιο στην Ιταλία, ολοκληρώνοντας τη νορμανδική κατάκτηση του Νότου."
          },
          extendedDescription: {
            en: "Bari, capital of the Byzantine catepanate of Italy and the principal Greek city of Apulia, surrendered to Robert Guiscard on 16 April 1071, only months before the catastrophic imperial defeat at Manzikert in the East. With its fall, more than five centuries of unbroken Roman government in the southern peninsula came to an end. The Hauteville Normans — sons of an obscure lord of the Cotentin who had arrived as pilgrims and mercenaries earlier in the century — had now united Apulia, Calabria, and most of Campania under their rule and were preparing to cross to Sicily. Byzantine institutions, Greek liturgy, and Greek-speaking communities would persist for centuries in the Salento and Calabria, but politically the Mezzogiorno henceforth belonged to a Latin Catholic state.",
            el: "Το Μπάρι, πρωτεύουσα του βυζαντινού κατεπανικίου της Ιταλίας και κύρια ελληνική πόλη της Απουλίας, παραδόθηκε στον Ροβέρτο Γυϊσκάρδο στις 16 Απριλίου 1071, λίγους μόλις μήνες πριν από την καταστροφική αυτοκρατορική ήττα στο Ματζικέρτ στην Ανατολή. Με την πτώση της έληξαν πάνω από πέντε αιώνες αδιάλειπτης ρωμαϊκής διακυβέρνησης στη νότια χερσόνησο. Οι Νορμανδοί Ωτβίλ — γιοι ενός ασήμαντου άρχοντα του Κοτεντέν που είχαν φθάσει ως προσκυνητές και μισθοφόροι νωρίτερα τον αιώνα — είχαν πλέον ενώσει την Απουλία, την Καλαβρία και το μεγαλύτερο μέρος της Καμπανίας υπό την κυριαρχία τους και προετοιμάζονταν να περάσουν στη Σικελία. Βυζαντινοί θεσμοί, ελληνική λειτουργία και ελληνόφωνες κοινότητες θα διατηρούνταν για αιώνες στο Σαλέντο και την Καλαβρία, αλλά πολιτικά το Mezzogiorno θα ανήκε εφεξής σε λατινικό καθολικό κράτος."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1077,
      era: {
        en: "Investiture Controversy",
        el: "Διαμάχη της Περιβολής"
      },
      events: [
        {
          title: {
            en: "Henry IV's Walk to Canossa",
            el: "Η Οδοιπορία του Ερρίκου Δ' στην Κανόσσα"
          },
          description: {
            en: "Excommunicated by Pope Gregory VII, Emperor Henry IV stands barefoot in the snow outside the castle of Matilda of Tuscany until the pope grants him absolution.",
            el: "Αναθεματισμένος από τον Πάπα Γρηγόριο Ζ', ο αυτοκράτορας Ερρίκος Δ' στέκεται ξυπόλυτος στο χιόνι έξω από το κάστρο της Ματίλδας της Τοσκάνης μέχρι ο πάπας να του χορηγήσει άφεση."
          },
          extendedDescription: {
            en: "The quarrel over lay investiture — the right of secular rulers to install bishops and abbots — had reached a crisis when Gregory VII excommunicated Henry IV in 1076 for ignoring his decree. Faced with rebellion among his German princes, Henry crossed the Alps in midwinter and presented himself at Canossa, the fortress of the Pope's ally, the great Tuscan countess Matilda. For three days, according to Lambert of Hersfeld, the king stood barefoot in penitential robes outside the gate, until Gregory at last admitted and absolved him. The drama did not settle the question — the Investiture Controversy ground on until the Concordat of Worms in 1122 — but it dramatised, in a single tableau, the medieval pope's claim to judge kings and gave the European political vocabulary the phrase 'to go to Canossa'.",
            el: "Η διαμάχη για τη λαϊκή περιβολή — το δικαίωμα των κοσμικών ηγεμόνων να εγκαθιστούν επισκόπους και ηγουμένους — είχε φτάσει σε κρίση όταν ο Γρηγόριος Ζ' αναθεμάτισε τον Ερρίκο Δ' το 1076 επειδή αγνοούσε το διάταγμά του. Αντιμέτωπος με εξέγερση των Γερμανών ηγεμόνων του, ο Ερρίκος διέσχισε τις Άλπεις καταχείμωνο και παρουσιάστηκε στην Κανόσσα, το φρούριο της συμμάχου του Πάπα, της μεγάλης κόμισσας της Τοσκάνης Ματίλδας. Επί τρεις ημέρες, κατά τον Λαμβέρτο του Χέρσφελντ, ο βασιλιάς στάθηκε ξυπόλυτος με μετανοιακά ράσα έξω από την πύλη, ώσπου ο Γρηγόριος τον δέχθηκε επιτέλους και του χορήγησε άφεση. Το επεισόδιο δεν έλυσε το ζήτημα — η Διαμάχη της Περιβολής εξακολούθησε μέχρι το Κογκορδάτο της Βορμς το 1122 — αλλά δραματοποίησε, σε μια ενιαία εικόνα, τη μεσαιωνική παπική αξίωση να κρίνει βασιλείς και πρόσφερε στο ευρωπαϊκό πολιτικό λεξιλόγιο τη φράση «πηγαίνω στην Κανόσσα»."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Schwoiser_Heinrich_vor_Canossa.jpg?width=1024",
            alt: {
              en: "Henry IV at Canossa, by Eduard Schwoiser",
              el: "Ο Ερρίκος Δ' στην Κανόσσα, του Έντουαρντ Σβόιζερ"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1130,
      era: {
        en: "Norman Sicily",
        el: "Νορμανδική Σικελία"
      },
      events: [
        {
          title: {
            en: "Roger II Crowned King of Sicily",
            el: "Ο Ρογήρος Β' Στέφεται Βασιλιάς της Σικελίας"
          },
          description: {
            en: "Roger II is crowned in Palermo, uniting the Norman lands of southern Italy and Sicily into a single kingdom that becomes the most cosmopolitan court of medieval Europe.",
            el: "Ο Ρογήρος Β' στέφεται στο Παλέρμο, ενώνοντας τα νορμανδικά εδάφη της Νότιας Ιταλίας και της Σικελίας σε ένα ενιαίο βασίλειο που γίνεται η πιο κοσμοπολίτικη αυλή της μεσαιωνικής Ευρώπης."
          },
          extendedDescription: {
            en: "On Christmas Day 1130, in the cathedral of Palermo, the Antipope Anacletus II's legate placed a crown on Roger II's head and proclaimed him rex Siciliae. The new monarchy fused the conquests of Robert Guiscard in the south with Roger I's Sicily into the Regnum Siciliae, a state stretching from the Abruzzi to the African coast at one point. Roger's chancery employed Greek, Latin, and Arabic side by side; his admiral George of Antioch was a Byzantine Greek, his geographer al-Idrisi a Moroccan, his architects drew on Fatimid, Byzantine, and Romanesque models. The Cappella Palatina and the cathedrals of Cefalù and Monreale display this convivencia in stone, mosaic, and muqarnas, and the Norman kingdom — inherited later by the Hohenstaufen — would remain the most centralised and bureaucratically advanced state in medieval Italy.",
            el: "Ανήμερα τα Χριστούγεννα του 1130, στον καθεδρικό του Παλέρμου, ο λεγάτος του αντιπάπα Ανακλήτου Β' τοποθέτησε στέμμα στο κεφάλι του Ρογήρου Β' και τον ανακήρυξε rex Siciliae. Η νέα μοναρχία ένωσε τις κατακτήσεις του Ροβέρτου Γυϊσκάρδου στον Νότο με τη Σικελία του Ρογήρου Α' στο Regnum Siciliae, ένα κράτος που σε μια στιγμή έφτανε από τα Αμπρούτσι ως τις αφρικανικές ακτές. Η καγκελαρία του Ρογήρου χρησιμοποιούσε ελληνικά, λατινικά και αραβικά πλάι πλάι· ο ναύαρχός του Γεώργιος Αντιοχείας ήταν Βυζαντινός Έλληνας, ο γεωγράφος του αλ-Ιντρίσι Μαροκινός, οι αρχιτέκτονές του εμπνέονταν από φατιμιδικά, βυζαντινά και ρωμανικά πρότυπα. Η Cappella Palatina και οι καθεδρικοί της Κεφαλού και του Μονρεάλε αποτυπώνουν αυτή την convivencia σε πέτρα, ψηφιδωτό και mukarnas, και το νορμανδικό βασίλειο — που κληρονόμησαν αργότερα οι Χοενστάουφεν — θα παρέμενε το πιο συγκεντρωτικό και γραφειοκρατικά προηγμένο κράτος της μεσαιωνικής Ιταλίας."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Roger_II_Sicily.jpg?width=1024",
            alt: {
              en: "Mosaic of Roger II crowned by Christ, Martorana church, Palermo",
              el: "Ψηφιδωτό του Ρογήρου Β' στεφόμενου από τον Χριστό, εκκλησία Μαρτοράνα, Παλέρμο"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1176,
      era: {
        en: "Lombard League",
        el: "Λομβαρδικός Σύνδεσμος"
      },
      events: [
        {
          title: {
            en: "Battle of Legnano",
            el: "Μάχη του Λενιάνο"
          },
          description: {
            en: "The communes of the Lombard League defeat Frederick Barbarossa, vindicating the right of Italian cities to self-government within the empire.",
            el: "Οι κοινότητες του Λομβαρδικού Συνδέσμου νικούν τον Φρειδερίκο Βαρβαρόσσα, κατοχυρώνοντας το δικαίωμα των ιταλικών πόλεων στην αυτοδιοίκηση εντός της αυτοκρατορίας."
          },
          extendedDescription: {
            en: "Frederick I Hohenstaufen had crossed the Alps repeatedly to enforce imperial regalia over the booming north Italian cities, sacking Milan to its foundations in 1162. In response Pope Alexander III blessed an alliance of Milan, Cremona, Bergamo, Brescia, Mantua, Lodi, Piacenza, Parma, Modena, Bologna, and others — the Lombard League — and its members built the new fortress-city of Alessandria as a standing rebuke to the emperor. On 29 May 1176, the league's foot militia, anchored on the Carroccio (a great ox-drawn standard waggon) and the Compagnia della Morte of Milanese knights, defeated Frederick's heavy cavalry at Legnano. The Peace of Constance in 1183 acknowledged the communes' right to elect their own consuls, levy taxes, and judge their citizens, while remaining nominal subjects of the empire — the legal foundation of the city-state Italy that would eventually flower into the Renaissance.",
            el: "Ο Φρειδερίκος Α' Χοενστάουφεν είχε διασχίσει επανειλημμένα τις Άλπεις για να επιβάλει τα αυτοκρατορικά regalia πάνω στις ακμάζουσες πόλεις της Βόρειας Ιταλίας, ισοπεδώνοντας το Μιλάνο το 1162. Σε απάντηση, ο Πάπας Αλέξανδρος Γ' ευλόγησε συμμαχία του Μιλάνου, της Κρεμόνας, του Μπέργαμο, της Μπρέσια, της Μάντοβα, της Λόντι, της Πιατσέντσα, της Πάρμα, της Μόδενα, της Μπολόνια και άλλων — τον Λομβαρδικό Σύνδεσμο — και τα μέλη του ίδρυσαν τη νέα φρουριακή πόλη Αλεσσάντρια ως μόνιμη πρόκληση προς τον αυτοκράτορα. Στις 29 Μαΐου 1176, η πεζική πολιτοφυλακή του συνδέσμου, αγκυροβολημένη γύρω από το Carroccio (ένα μεγάλο βωδάμαξο με την πολεμική σημαία) και τη Compagnia della Morte των ιπποτών του Μιλάνου, νίκησε τη βαριά ιππική του Φρειδερίκου στο Λενιάνο. Η Ειρήνη της Κωνσταντίας το 1183 αναγνώρισε στις κοινότητες το δικαίωμα να εκλέγουν τους δικούς τους υπάτους, να επιβάλλουν φόρους και να δικάζουν τους πολίτες τους, παραμένοντας ονομαστικά υποτελείς της αυτοκρατορίας — το νομικό θεμέλιο της Ιταλίας των πόλεων-κρατών που θα ανθούσε εν τέλει στην Αναγέννηση."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/The_battle_of_Legnano_(1870)%2C_by_Amos_Cassioli.jpg?width=1024",
            alt: {
              en: "Battle of Legnano, by Amos Cassioli",
              el: "Η Μάχη του Λενιάνο, του Άμος Κασσιόλι"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1204,
      era: {
        en: "Mediterranean Empire of Venice",
        el: "Μεσογειακή Αυτοκρατορία της Βενετίας"
      },
      events: [
        {
          title: {
            en: "Sack of Constantinople by the Fourth Crusade",
            el: "Η Άλωση της Κωνσταντινούπολης από την Δ' Σταυροφορία"
          },
          description: {
            en: "Diverted by Doge Enrico Dandolo, the Fourth Crusade storms Constantinople; Venice receives three-eighths of the Byzantine empire and becomes a Mediterranean superpower.",
            el: "Εκτραμμένη από τον δόγη Ερίκο Δάνδολο, η Δ' Σταυροφορία καταλαμβάνει την Κωνσταντινούπολη· η Βενετία λαμβάνει τα τρία όγδοα της Βυζαντινής Αυτοκρατορίας και αναδεικνύεται μεσογειακή υπερδύναμη."
          },
          extendedDescription: {
            en: "Unable to pay the enormous fleet that Venice had built for them, the Fourth Crusaders accepted Doge Dandolo's proposal to first reconquer Zara for Venice and then to install a Byzantine pretender, Alexios IV, in Constantinople in exchange for further subsidies. When the new emperor failed to deliver, the army stormed the city on 12-13 April 1204 in a sack of unprecedented brutality. The partition treaty (Partitio Romaniae) carved up the Byzantine inheritance: Venice took three-eighths, including Crete, Negroponte, the Ionian Islands, ports across the Aegean, and a quarter and a half of Constantinople itself. The new Stato da Mar, reorganised over the following decades, transformed a city of merchants into the dominant naval power of the Eastern Mediterranean and decisively skewed the balance of Italian commerce toward Venice and away from its Genoese and Pisan rivals.",
            el: "Αδυνατώντας να πληρώσουν τον τεράστιο στόλο που είχε κατασκευάσει η Βενετία γι' αυτούς, οι Σταυροφόροι της Δ' δέχθηκαν την πρόταση του δόγη Δανδόλου να ανακαταλάβουν πρώτα τη Ζάρα για τη Βενετία και κατόπιν να εγκαθιδρύσουν τον Βυζαντινό μνηστήρα Αλέξιο Δ' στην Κωνσταντινούπολη με αντάλλαγμα περαιτέρω επιχορηγήσεις. Όταν ο νέος αυτοκράτορας απέτυχε να εκπληρώσει τις υποσχέσεις, ο στρατός κατέλαβε εξ εφόδου την Πόλη στις 12-13 Απριλίου 1204, σε λεηλασία πρωτοφανούς βιαιότητας. Η συνθήκη διανομής (Partitio Romaniae) διαμοίρασε τη βυζαντινή κληρονομιά: η Βενετία πήρε τα τρία όγδοα, συμπεριλαμβανομένων της Κρήτης, της Εύβοιας, των Επτανήσων, λιμανιών στο Αιγαίο και ενός τετάρτου και μισού της ίδιας της Κωνσταντινούπολης. Το νέο Stato da Mar, αναδιοργανωμένο τις επόμενες δεκαετίες, μετέτρεψε μια πόλη εμπόρων στην κυρίαρχη ναυτική δύναμη της Ανατολικής Μεσογείου και έγειρε αποφασιστικά τη ζυγαριά του ιταλικού εμπορίου υπέρ της Βενετίας έναντι των Γενοβέζων και Πιζάνων αντιπάλων της."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/ConquestOfConstantinopleByTheCrusadersIn1204.jpg?width=1024",
            alt: {
              en: "Conquest of Constantinople by the Crusaders, by Tintoretto",
              el: "Η Άλωση της Κωνσταντινούπολης από τους Σταυροφόρους, του Τιντορέττο"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1209,
      era: {
        en: "Mendicant Orders",
        el: "Επαιτικά Τάγματα"
      },
      events: [
        {
          title: {
            en: "Francis of Assisi Founds the Friars Minor",
            el: "Ο Φραγκίσκος της Ασσίζης Ιδρύει τους Φραγκισκανούς"
          },
          description: {
            en: "Pope Innocent III orally approves the rule of Francesco di Bernardone, launching a movement of voluntary poverty that transforms medieval religion.",
            el: "Ο Πάπας Ιννοκέντιος Γ' εγκρίνει προφορικά τον κανόνα του Φραντσέσκο ντι Μπερναρντόνε, εγκαινιάζοντας ένα κίνημα εκούσιας πτωχείας που μεταμορφώνει τη μεσαιωνική θρησκεία."
          },
          extendedDescription: {
            en: "The son of an Assisi cloth merchant, Francis renounced his inheritance in the public square in 1206, stripping naked before the bishop and his father. Three years later he and eleven companions walked to Rome and persuaded Innocent III, the most powerful pope of the Middle Ages, to approve their primitive rule of literal Gospel poverty. From the rebuilt chapel of the Porziuncola the friars fanned out across Italy and beyond, preaching in the vernacular, ministering to lepers, and founding houses in the new mendicant style — austere preaching churches that drew crowds the secular clergy could no longer reach. Francis's stigmata at La Verna in 1224, his canticle of Brother Sun in Umbrian Italian, and the swift parallel rise of Dominic's Order of Preachers reshaped popular piety, theology, and even the visual arts: it was for the Franciscans of Assisi that Cimabue and the young Giotto would paint the cycles that begin Italian art's modern history.",
            el: "Γιος ενός εμπόρου υφασμάτων της Ασσίζης, ο Φραγκίσκος αποποιήθηκε την κληρονομιά του στη δημόσια πλατεία το 1206, γυμνώθηκε μπροστά στον επίσκοπο και τον πατέρα του. Τρία χρόνια αργότερα, αυτός και έντεκα σύντροφοί του βάδισαν προς τη Ρώμη και έπεισαν τον Ιννοκέντιο Γ', τον ισχυρότερο πάπα του Μεσαίωνα, να εγκρίνει τον πρωτόλειο κανόνα τους περί κατά γράμμα ευαγγελικής πτωχείας. Από το ανακαινισμένο παρεκκλήσι της Πορτσιούνκολας, οι αδελφοί απλώθηκαν σε όλη την Ιταλία και πέρα από αυτήν, κηρύσσοντας στη δημοτική γλώσσα, διακονώντας τους λεπρούς και ιδρύοντας οίκους με το νέο επαιτικό ύφος — αυστηρές «κηρυκτικές» εκκλησίες που προσέλκυαν πλήθη τα οποία ο εγκόσμιος κλήρος δεν μπορούσε πλέον να αγγίξει. Τα στίγματα του Φραγκίσκου στη Λα Βέρνα το 1224, ο ύμνος του «Αδελφέ Ήλιε» στα ομβριακά ιταλικά και η ταχεία παράλληλη άνοδος του Τάγματος των Κηρύκων του Δομινίκου ανανέωσαν τη λαϊκή ευσέβεια, τη θεολογία και ακόμη και τις εικαστικές τέχνες: για τους Φραγκισκανούς της Ασσίζης ζωγράφισαν ο Τσιμαμπούε και ο νεαρός Τζιότο τους κύκλους με τους οποίους αρχίζει η σύγχρονη ιστορία της ιταλικής τέχνης."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Giotto_di_Bondone_-_Legend_of_St_Francis_-_13._Institution_of_the_Crib_at_Greccio_-_WGA09135.jpg?width=1024",
            alt: {
              en: "Saint Francis at Greccio, fresco by Giotto, Upper Basilica of Assisi",
              el: "Ο Άγιος Φραγκίσκος στο Γκρέτσιο, τοιχογραφία του Τζιότο, Άνω Βασιλική της Ασσίζης"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1250,
      era: {
        en: "Hohenstaufen Italy",
        el: "Χοενστάουφικη Ιταλία"
      },
      events: [
        {
          title: {
            en: "Death of Frederick II, Stupor Mundi",
            el: "Θάνατος του Φρειδερίκου Β', Stupor Mundi"
          },
          description: {
            en: "The Hohenstaufen emperor Frederick II dies in Apulia, leaving his Italian kingdom to a generation of war between papacy and empire.",
            el: "Ο Χοενστάουφος αυτοκράτορας Φρειδερίκος Β' πεθαίνει στην Απουλία, αφήνοντας το ιταλικό βασίλειό του σε μια γενιά πολέμων μεταξύ παπισμού και αυτοκρατορίας."
          },
          extendedDescription: {
            en: "Born in a tent in Iesi to a Hohenstaufen father and a Norman mother, raised in multilingual Palermo, and crowned king of Sicily, Germany, and Italy as well as emperor and king of Jerusalem, Frederick II was called by contemporaries stupor mundi — the wonder of the world. From the citadel of Foggia he ruled an unprecedented Mediterranean state with Arabic-trained falconers, a Saracen guard, and chancery scholars who produced his treatise on falconry and the great Liber Augustalis law-code of 1231. His running war with the papacy of Gregory IX and Innocent IV cost him two excommunications and turned every Italian commune into a battleground of Guelfs (papal) and Ghibellines (imperial). When he died at Castel Fiorentino in December 1250 the crusade against his line continued; within twenty years the male Hohenstaufen had been extinguished, the Kingdom of Sicily had passed to the Angevins, and the imperial idea in Italy was effectively ended.",
            el: "Γεννημένος σε σκηνή στο Γέζι από Χοενστάουφο πατέρα και Νορμανδή μητέρα, μεγαλωμένος στο πολύγλωσσο Παλέρμο, και στεφθείς βασιλιάς της Σικελίας, της Γερμανίας και της Ιταλίας, καθώς και αυτοκράτορας και βασιλιάς της Ιερουσαλήμ, ο Φρειδερίκος Β' αποκαλούνταν από τους συγχρόνους του stupor mundi — το θαύμα του κόσμου. Από την ακρόπολη της Φότζα κυβερνούσε ένα πρωτοφανές μεσογειακό κράτος με αραβομαθείς ιερακάριους, σαρακηνική φρουρά και λόγιους της καγκελαρίας που παρήγαγαν την πραγματεία του περί ιερακοθηρίας και τον μεγάλο νομοθετικό κώδικα Liber Augustalis του 1231. Ο διαρκής πόλεμος του με τους πάπες Γρηγόριο Θ' και Ιννοκέντιο Δ' του στοίχισε δύο αναθέματα και μετέτρεψε κάθε ιταλική κοινότητα σε πεδίο μάχης Γουέλφων (παπικών) και Γιβελλίνων (αυτοκρατορικών). Όταν πέθανε στο Καστέλ Φιορεντίνο τον Δεκέμβριο του 1250, η σταυροφορία κατά της γενιάς του συνεχίστηκε· μέσα σε είκοσι χρόνια οι άρρενες Χοενστάουφεν είχαν εκλείψει, το Βασίλειο της Σικελίας είχε περιέλθει στους Ανδεγαβούς, και η αυτοκρατορική ιδέα στην Ιταλία είχε ουσιαστικά τερματιστεί."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Frederick_II_and_eagle.jpg?width=1024",
            alt: {
              en: "Frederick II with his falcon, from his treatise De arte venandi cum avibus",
              el: "Ο Φρειδερίκος Β' με το γεράκι του, από την πραγματεία του De arte venandi cum avibus"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1266,
      era: {
        en: "Angevin South",
        el: "Ανδεγαβός Νότος"
      },
      events: [
        {
          title: {
            en: "Battle of Benevento and Angevin Conquest of Naples",
            el: "Μάχη του Μπενεβέντο και Ανδεγαβική Κατάκτηση της Νάπολης"
          },
          description: {
            en: "Charles of Anjou defeats and kills Manfred Hohenstaufen at Benevento, securing the Kingdom of Sicily as a French papal fief.",
            el: "Ο Κάρολος του Ανζού νικά και σκοτώνει τον Μανφρέδο των Χοενστάουφεν στο Μπενεβέντο, εξασφαλίζοντας το Βασίλειο της Σικελίας ως γαλλικό παπικό φέουδο."
          },
          extendedDescription: {
            en: "After years of papal proclamation that the Kingdom of Sicily was forfeit to the Holy See, Pope Urban IV finally found a champion in Charles of Anjou, brother of Saint Louis IX of France. Crowned king of Sicily in Rome in 1266, Charles marched south with a Franco-papal army and met Manfred — Frederick II's brilliant illegitimate son — at Benevento on 26 February. After his Italian Ghibelline allies broke, Manfred charged into the centre of the Angevin line and was cut down. Charles entered Naples in triumph, transferring the kingdom's centre of gravity from Palermo to Naples and welding the Italian south to a French dynasty whose ambitions reached as far as a planned reconquest of Constantinople. The price would be paid in 1282, when the Sicilians revolted against his rule in the Sicilian Vespers.",
            el: "Έπειτα από χρόνια παπικών διακηρύξεων ότι το Βασίλειο της Σικελίας είχε περιέλθει στην Αγία Έδρα, ο Πάπας Ουρβανός Δ' βρήκε επιτέλους πρωταγωνιστή στον Κάρολο του Ανζού, αδελφό του Αγίου Λουδοβίκου Θ' της Γαλλίας. Στεφθείς βασιλιάς της Σικελίας στη Ρώμη το 1266, ο Κάρολος βάδισε προς τον Νότο με γαλλο-παπικό στρατό και συνάντησε τον Μανφρέδο — τον λαμπρό νόθο γιο του Φρειδερίκου Β' — στο Μπενεβέντο στις 26 Φεβρουαρίου. Όταν οι Ιταλοί Γιβελλίνοι σύμμαχοί του υποχώρησαν, ο Μανφρέδος όρμησε στο κέντρο της ανδεγαβικής γραμμής και έπεσε. Ο Κάρολος εισήλθε θριαμβευτικά στη Νάπολη, μεταθέτοντας το πολιτικό κέντρο βάρους του βασιλείου από το Παλέρμο στη Νάπολη και δένοντας τον ιταλικό Νότο με γαλλική δυναστεία της οποίας οι φιλοδοξίες έφταναν ως και την επανάκτηση της Κωνσταντινούπολης. Το τίμημα θα πληρωνόταν το 1282, όταν οι Σικελοί επαναστάτησαν εναντίον του στους Σικελικούς Εσπερινούς."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1282,
      era: {
        en: "Sicilian Vespers",
        el: "Σικελικοί Εσπερινοί"
      },
      events: [
        {
          title: {
            en: "The Sicilian Vespers",
            el: "Οι Σικελικοί Εσπερινοί"
          },
          description: {
            en: "An evening insurrection in Palermo on Easter Monday massacres the French garrison and brings the Aragonese into Sicily, splitting the Norman kingdom in two.",
            el: "Μια απογευματινή εξέγερση στο Παλέρμο τη Δευτέρα του Πάσχα κατασφάζει τη γαλλική φρουρά και εισάγει τους Αραγωνέζους στη Σικελία, διασπώντας το νορμανδικό βασίλειο στα δύο."
          },
          extendedDescription: {
            en: "On the evening of 30 March 1282, as the bells of Palermo rang for Vespers outside the church of Santo Spirito, a French sergeant's harassment of a Sicilian woman ignited a riot that swept the city and, within weeks, the whole island. Thousands of Frenchmen — soldiers, officials, even Sicilian women suspected of speaking French — were killed. The rebel communes invited Peter III of Aragon, husband of Manfred's daughter Constance, to take the crown; he landed at Trapani in August. The War of the Vespers that followed lasted twenty years and split the Regnum Siciliae into a Sicilian (Aragonese) kingdom centred on Palermo and a so-called Sicilian (Angevin) kingdom centred on Naples. The southern question — two competing dynasties, two centres, two political cultures — would haunt Italian history into the nineteenth century.",
            el: "Το βράδυ της 30ής Μαρτίου 1282, ενώ οι καμπάνες του Παλέρμου χτυπούσαν για τον εσπερινό έξω από την εκκλησία του Αγίου Πνεύματος, η παρενόχληση μιας Σικελής γυναίκας από έναν Γάλλο λοχία πυροδότησε εξέγερση που σάρωσε την πόλη και, μέσα σε εβδομάδες, ολόκληρο το νησί. Χιλιάδες Γάλλοι — στρατιώτες, αξιωματούχοι, ακόμη και Σικελές γυναίκες ύποπτες ότι μιλούσαν γαλλικά — σκοτώθηκαν. Οι επαναστατημένες κοινότητες κάλεσαν τον Πέτρο Γ' της Αραγωνίας, σύζυγο της Κωνσταντίας θυγατέρας του Μανφρέδου, να αναλάβει το στέμμα· εκείνος αποβιβάστηκε στο Τράπανι τον Αύγουστο. Ο Πόλεμος των Εσπερινών που ακολούθησε διήρκεσε είκοσι χρόνια και διέσπασε το Regnum Siciliae σε ένα Σικελικό (Αραγωνικό) βασίλειο με κέντρο το Παλέρμο και ένα «Σικελικό» (Ανδεγαβικό) βασίλειο με κέντρο τη Νάπολη. Το νότιο ζήτημα — δύο αντίπαλες δυναστείες, δύο κέντρα, δύο πολιτικές κουλτούρες — θα στοίχειωνε την ιταλική ιστορία ως τον δέκατο ένατο αιώνα."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Francesco_Hayez_023.jpg?width=1024",
            alt: {
              en: "I Vespri Siciliani, by Francesco Hayez",
              el: "Οι Σικελικοί Εσπερινοί, του Φραντσέσκο Χάγιεζ"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1295,
      era: {
        en: "Mercantile Italy",
        el: "Εμπορική Ιταλία"
      },
      events: [
        {
          title: {
            en: "Marco Polo Returns to Venice",
            el: "Επιστροφή του Μάρκο Πόλο στη Βενετία"
          },
          description: {
            en: "Marco Polo, his father, and uncle return to Venice after twenty-four years in the Mongol empire, bringing the East within imaginative reach of the Italian merchant cities.",
            el: "Ο Μάρκο Πόλο, ο πατέρας και ο θείος του επιστρέφουν στη Βενετία ύστερα από εικοσιτέσσερα χρόνια στη μογγολική αυτοκρατορία, φέρνοντας την Ανατολή στη φανταστική εμβέλεια των ιταλικών εμπορικών πόλεων."
          },
          extendedDescription: {
            en: "The Polos had left Venice in 1271, crossed Persia and the Pamirs, and reached the court of the Great Khan Kublai at Khanbaliq, where Marco served for nearly two decades as an envoy across the Mongol realm. They returned by sea via Sumatra and Persia, arriving home in 1295 with caravan boxes of jewels, jade, and silk. A few years later, captured during a Genoese-Venetian sea battle, Marco dictated his Description of the World — known to posterity as the Travels — to a fellow prisoner, the Pisan romance-writer Rustichello. The book's pictures of paper money, coal, asbestos, vast Chinese cities, and the spice islands of the Indian Ocean fired the imagination of Italian merchants and mapmakers; Christopher Columbus would later carry an annotated copy on his voyages, certain that Cathay lay just beyond the western horizon.",
            el: "Οι Πόλο είχαν αναχωρήσει από τη Βενετία το 1271, διέσχισαν την Περσία και τα Πάμιρ και έφθασαν στην αυλή του Μεγάλου Χάνου Κουμπλάι στο Χανμπαλίκ, όπου ο Μάρκο υπηρέτησε σχεδόν δύο δεκαετίες ως απεσταλμένος σε όλη τη μογγολική επικράτεια. Επέστρεψαν δια θαλάσσης μέσω Σουμάτρας και Περσίας, φθάνοντας στην πατρίδα τους το 1295 με κιβώτια καραβανιού γεμάτα κοσμήματα, νεφρίτη και μετάξι. Λίγα χρόνια αργότερα, αιχμάλωτος έπειτα από γενοβέζο-βενετική ναυμαχία, ο Μάρκο υπαγόρευσε την Περιγραφή του Κόσμου — γνωστή στους μεταγενέστερους ως Τα Ταξίδια — σε έναν συγκρατούμενό του, τον Πιζάνο μυθιστοριογράφο Ρουστιτσέλο. Οι περιγραφές του χάρτινου χρήματος, του λιθάνθρακα, του αμιάντου, των τεράστιων κινεζικών πόλεων και των νησιών των μπαχαρικών του Ινδικού Ωκεανού φλόγισαν τη φαντασία των Ιταλών εμπόρων και χαρτογράφων· ο Χριστόφορος Κολόμβος θα έπαιρνε αργότερα μαζί του στα ταξίδια του ένα σημειωμένο αντίτυπο, βέβαιος ότι η Καθάη βρισκόταν λίγο πέρα από τον δυτικό ορίζοντα."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Marco_Polo_-_costume_tartare.jpg?width=1024",
            alt: {
              en: "Marco Polo in Tartar dress, 18th-century engraving",
              el: "Ο Μάρκο Πόλο με ταρταρική ενδυμασία, χαλκογραφία του 18ου αιώνα"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1300,
      era: {
        en: "Eve of the Trecento",
        el: "Παραμονές του Τρετσέντο"
      },
      events: [
        {
          title: {
            en: "First Roman Jubilee Proclaimed by Boniface VIII",
            el: "Πρώτο Ρωμαϊκό Ιωβηλαίο από τον Βονιφάτιο Η'"
          },
          description: {
            en: "Pope Boniface VIII proclaims the first Holy Year, drawing perhaps two hundred thousand pilgrims to Rome — among them Dante, who sets his Divine Comedy in the Easter of 1300.",
            el: "Ο Πάπας Βονιφάτιος Η' κηρύσσει το πρώτο Άγιο Έτος, προσελκύοντας ίσως διακόσιες χιλιάδες προσκυνητές στη Ρώμη — ανάμεσά τους και τον Δάντη, που τοποθετεί τη Θεία Κωμωδία του στο Πάσχα του 1300."
          },
          extendedDescription: {
            en: "On 22 February 1300 the bull Antiquorum habet fida relatio promised plenary indulgence to any pilgrim who visited the basilicas of Saint Peter and Saint Paul on a fixed number of days during that year. The roads of Italy filled with pilgrims; Giovanni Villani, who was there, decided to write his chronicle of Florence in response to the spectacle. Yet the high-water mark of medieval papal authority was nearer than Boniface knew: within three years he had been seized at Anagni by the agents of Philip the Fair of France, and within nine the papacy had moved to Avignon. The same year, the exiled Florentine Dante Alighieri set his Divina Commedia in Easter week 1300, a literary monument that closes the Latin Middle Ages and opens the Italian language to modernity. With Giotto already at work on the Scrovegni Chapel and Petrarch's birth only four years off, the medieval Italian world was sliding, almost imperceptibly, into the Renaissance.",
            el: "Στις 22 Φεβρουαρίου 1300 η βούλα Antiquorum habet fida relatio υποσχόταν πλήρη συγχωροχάρτι σε κάθε προσκυνητή που θα επισκεπτόταν τις βασιλικές του Αγίου Πέτρου και του Αγίου Παύλου ορισμένο αριθμό ημερών εντός του έτους. Οι δρόμοι της Ιταλίας γέμισαν προσκυνητές· ο Τζοβάνι Βιλλάνι, που βρέθηκε εκεί, αποφάσισε να γράψει το Χρονικό της Φλωρεντίας ως ανταπόκριση στο θέαμα. Ωστόσο, το αποκορύφωμα της μεσαιωνικής παπικής εξουσίας ήταν πιο κοντά απ' όσο νόμιζε ο Βονιφάτιος: μέσα σε τρία χρόνια θα είχε συλληφθεί στην Ανάνια από πράκτορες του Φιλίππου του Ωραίου της Γαλλίας, και μέσα σε εννέα ο παπισμός θα είχε μεταφερθεί στην Αβινιόν. Την ίδια χρονιά, ο εξόριστος Φλωρεντίνος Δάντης Αλιγκιέρι τοποθέτησε τη Θεία Κωμωδία στην εβδομάδα του Πάσχα του 1300, λογοτεχνικό μνημείο που κλείνει τον λατινικό Μεσαίωνα και ανοίγει την ιταλική γλώσσα στη νεωτερικότητα. Με τον Τζιότο ήδη να εργάζεται στο Παρεκκλήσι Σκροβένι και τη γέννηση του Πετράρχη μόλις τέσσερα χρόνια μακριά, ο μεσαιωνικός ιταλικός κόσμος γλιστρούσε, σχεδόν ανεπαίσθητα, στην Αναγέννηση."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Giotto_-_Scrovegni_-_-37-_-_Resurrection_(Noli_me_tangere).jpg?width=1024",
            alt: {
              en: "Giotto, Resurrection (Noli me tangere), Scrovegni Chapel — painted in the years following the Jubilee of 1300",
              el: "Τζιότο, Ανάσταση (Noli me tangere), Παρεκκλήσι Σκροβένι — ζωγραφισμένο τα χρόνια μετά το Ιωβηλαίο του 1300"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1347,
      era: {
        en: "The Black Death",
        el: "Ο Μαύρος Θάνατος"
      },
      events: [
        {
          title: {
            en: "The Black Death Reaches Italy",
            el: "Ο Μαύρος Θάνατος Φτάνει στην Ιταλία"
          },
          description: {
            en: "Genoese galleys carry the plague from the Black Sea to Messina, Genoa, and Venice, unleashing a pandemic that kills perhaps half the peninsula's people.",
            el: "Γενοβέζικες γαλέρες μεταφέρουν την πανώλη από τη Μαύρη Θάλασσα στη Μεσσήνη, τη Γένοβα και τη Βενετία, εξαπολύοντας μια πανδημία που σκοτώνει ίσως τον μισό πληθυσμό της χερσονήσου."
          },
          extendedDescription: {
            en: "In October 1347 a fleet of Genoese trading galleys, fleeing the Mongol siege of Caffa in the Crimea, put in at Messina with dead and dying men aboard; within months the plague had leapt to Genoa, Pisa, and Venice and spread up the peninsula. Florence, whose ordeal Giovanni Boccaccio set down in the preface to the Decameron, may have lost three-fifths of its inhabitants. The demographic catastrophe of 1347-1351 emptied the contado, broke long-distance trade, drove up wages and social tension, and reshaped the economy of the Italian city-states for generations. Recurring outbreaks would haunt Italy for the next three centuries, but the survivors of the first visitation inherited a more fluid, more urban, and in places wealthier society.",
            el: "Τον Οκτώβριο του 1347 ένας στόλος γενοβέζικων εμπορικών γαλερών, που έφευγε από τη μογγολική πολιορκία της Κάφφα στην Κριμαία, κατέπλευσε στη Μεσσήνη με νεκρούς και ετοιμοθάνατους· μέσα σε μήνες η πανώλη πέρασε στη Γένοβα, την Πίζα και τη Βενετία και εξαπλώθηκε στη χερσόνησο. Η Φλωρεντία, της οποίας τη δοκιμασία κατέγραψε ο Τζοβάνι Βοκκάκιος στον πρόλογο του Δεκαημέρου, ίσως έχασε τα τρία πέμπτα των κατοίκων της. Η δημογραφική καταστροφή του 1347-1351 ερήμωσε την ύπαιθρο, διέκοψε το μακρινό εμπόριο, εκτόξευσε τους μισθούς και τις κοινωνικές εντάσεις και αναδιαμόρφωσε την οικονομία των ιταλικών πόλεων-κρατών για γενιές. Επανερχόμενες εξάρσεις θα στοίχειωναν την Ιταλία τους επόμενους τρεις αιώνες, όμως οι επιζώντες της πρώτης επιδρομής κληρονόμησαν μια πιο ρευστή, πιο αστική και κατά τόπους πλουσιότερη κοινωνία."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1378,
      era: {
        en: "Venice and Genoa",
        el: "Βενετία και Γένοβα"
      },
      events: [
        {
          title: {
            en: "The War of Chioggia",
            el: "Ο Πόλεμος της Κιότζα"
          },
          description: {
            en: "In the climactic round of their long rivalry, Venice traps and destroys the Genoese fleet at Chioggia, confirming its supremacy in the eastern Mediterranean trade.",
            el: "Στον αποφασιστικό γύρο της μακράς αντιπαλότητάς τους, η Βενετία παγιδεύει και καταστρέφει τον γενοβέζικο στόλο στην Κιότζα, επιβεβαιώνοντας την υπεροχή της στο εμπόριο της ανατολικής Μεσογείου."
          },
          extendedDescription: {
            en: "The fourth Venetian-Genoese war reached its crisis in 1379 when a Genoese fleet seized Chioggia at the southern edge of the Venetian lagoon, the closest any enemy had ever come to the city itself. With their backs to the sea, the Venetians under Vettor Pisani and Carlo Zeno blockaded the blockaders, and after a winter siege the trapped Genoese surrendered in June 1380. The Peace of Turin of 1381 left both republics exhausted, but Genoa, riven by domestic faction, never again seriously challenged Venetian dominance in the Levant. Venice emerged as the unrivalled maritime power of Italy and soon turned to building a mainland empire, the Domini di Terraferma, across Padua, Vicenza, Verona, and beyond.",
            el: "Ο τέταρτος βενετο-γενοβέζικος πόλεμος έφτασε στην κορύφωσή του το 1379, όταν γενοβέζικος στόλος κατέλαβε την Κιότζα στο νότιο άκρο της βενετικής λιμνοθάλασσας — η εγγύτερη προσέγγιση εχθρού στην ίδια την πόλη. Με την πλάτη στη θάλασσα, οι Βενετοί υπό τον Βέττορ Πιζάνι και τον Κάρλο Τζένο απέκλεισαν τους πολιορκητές, και έπειτα από χειμερινή πολιορκία οι παγιδευμένοι Γενοβέζοι παραδόθηκαν τον Ιούνιο του 1380. Η Ειρήνη του Τορίνου του 1381 άφησε και τις δύο δημοκρατίες εξαντλημένες, αλλά η Γένοβα, διχασμένη από εσωτερικές φατρίες, δεν αμφισβήτησε ποτέ ξανά σοβαρά τη βενετική κυριαρχία στη Λεβαντίνη. Η Βενετία αναδείχθηκε αδιαφιλονίκητη ναυτική δύναμη της Ιταλίας και σύντομα στράφηκε στην οικοδόμηση χερσαίας αυτοκρατορίας, των Domini di Terraferma, στην Πάδοβα, τη Βιτσέντσα, τη Βερόνα και πέρα από αυτές."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1402,
      era: {
        en: "Age of the Signorie",
        el: "Εποχή των Σινιορίε"
      },
      events: [
        {
          title: {
            en: "Death of Gian Galeazzo Visconti",
            el: "Θάνατος του Τζαν Γκαλεάτσο Βισκόντι"
          },
          description: {
            en: "On the verge of uniting northern Italy under Milan, Duke Gian Galeazzo Visconti dies of plague, and his network of signorie collapses, sparing the independence of Florence.",
            el: "Λίγο πριν ενώσει τη Βόρεια Ιταλία υπό το Μιλάνο, ο δούκας Τζαν Γκαλεάτσο Βισκόντι πεθαίνει από πανώλη, και το δίκτυο των σινιορίε του καταρρέει, διασώζοντας την ανεξαρτησία της Φλωρεντίας."
          },
          extendedDescription: {
            en: "Having bought the title of Duke of Milan from the emperor in 1395, Gian Galeazzo Visconti assembled by purchase, marriage, and conquest the largest territorial state Italy had seen since antiquity, swallowing Verona, Padua, Pisa, Siena, Perugia, and Bologna and encircling a desperate Florence. His sudden death from fever near Milan in September 1402 shattered the Visconti hegemony almost overnight, as condottieri and subject cities broke away. Florentine humanists led by Leonardo Bruni cast their city's survival as the triumph of republican liberty over tyranny — a founding myth of civic humanism — while the episode confirmed that no single power could yet master the peninsula, locking Italy into a multipolar system of competing states.",
            el: "Έχοντας αγοράσει τον τίτλο του Δούκα του Μιλάνου από τον αυτοκράτορα το 1395, ο Τζαν Γκαλεάτσο Βισκόντι συγκρότησε με αγορές, γάμους και κατακτήσεις το μεγαλύτερο εδαφικό κράτος που είχε δει η Ιταλία από την αρχαιότητα, καταπίνοντας τη Βερόνα, την Πάδοβα, την Πίζα, τη Σιένα, την Περούτζα και την Μπολόνια και περικυκλώνοντας μια απελπισμένη Φλωρεντία. Ο αιφνίδιος θάνατός του από πυρετό κοντά στο Μιλάνο τον Σεπτέμβριο του 1402 διέλυσε την ηγεμονία των Βισκόντι σχεδόν εν μία νυκτί, καθώς κοντοτιέροι και υποτελείς πόλεις αποσπάστηκαν. Οι Φλωρεντίνοι ουμανιστές με επικεφαλής τον Λεονάρντο Μπρούνι παρουσίασαν την επιβίωση της πόλης τους ως θρίαμβο της δημοκρατικής ελευθερίας επί της τυραννίας — έναν ιδρυτικό μύθο του αστικού ουμανισμού — ενώ το επεισόδιο επιβεβαίωσε ότι καμία μεμονωμένη δύναμη δεν μπορούσε ακόμη να κυριαρχήσει στη χερσόνησο, κλειδώνοντας την Ιταλία σε ένα πολυπολικό σύστημα ανταγωνιστικών κρατών."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1442,
      era: {
        en: "Aragonese Naples",
        el: "Αραγωνική Νάπολη"
      },
      events: [
        {
          title: {
            en: "Alfonso of Aragon Conquers Naples",
            el: "Ο Αλφόνσος της Αραγωνίας Κατακτά τη Νάπολη"
          },
          description: {
            en: "Alfonso V of Aragon takes Naples, reuniting the mainland south with Sicily and bringing a brilliant Renaissance court to the Italian Mezzogiorno.",
            el: "Ο Αλφόνσος Ε' της Αραγωνίας καταλαμβάνει τη Νάπολη, επανενώνοντας τον ηπειρωτικό Νότο με τη Σικελία και φέρνοντας μια λαμπρή αναγεννησιακή αυλή στον ιταλικό Μετζοτζόρνο."
          },
          extendedDescription: {
            en: "When the childless Angevin queen Joanna II of Naples died, her contested will set off a long war between Rene of Anjou and Alfonso V of Aragon, already king of Sicily, Sardinia, Aragon, and Valencia. After a siege famously broken when his troops entered through an aqueduct, Alfonso took Naples in 1442 and made it his favourite residence, styling himself rex utriusque Siciliae, king of the Two Sicilies. 'Il Magnanimo' rebuilt the Castel Nuovo with its great triumphal marble arch, gathered humanists such as Lorenzo Valla and Antonio Beccadelli, and founded an academy that made Naples a southern capital of the new learning. His realm fused the Aragonese Mediterranean with the Italian states-system and became one of the five powers whose balance the Peace of Lodi would soon stabilise.",
            el: "Όταν η άτεκνη Ανδεγαβή βασίλισσα Ιωάννα Β' της Νάπολης πέθανε, η αμφισβητούμενη διαθήκη της πυροδότησε μακρύ πόλεμο ανάμεσα στον Ρενέ του Ανζού και τον Αλφόνσο Ε' της Αραγωνίας, ήδη βασιλιά της Σικελίας, της Σαρδηνίας, της Αραγωνίας και της Βαλένθια. Έπειτα από πολιορκία που, όπως λέγεται, έσπασε όταν τα στρατεύματά του εισήλθαν μέσα από υδραγωγείο, ο Αλφόνσος κατέλαβε τη Νάπολη το 1442 και την έκανε αγαπημένη του κατοικία, αυτοτιτλοφορούμενος rex utriusque Siciliae, βασιλιάς των Δύο Σικελιών. Ο «Μεγαλόψυχος» ανοικοδόμησε το Καστέλ Νουόβο με τη μεγάλη μαρμάρινη θριαμβική αψίδα του, συγκέντρωσε ουμανιστές όπως ο Λορέντσο Βάλλα και ο Αντόνιο Μπεκκαντέλλι και ίδρυσε ακαδημία που έκανε τη Νάπολη νότια πρωτεύουσα της νέας παιδείας. Το βασίλειό του ένωσε την αραγωνική Μεσόγειο με το σύστημα των ιταλικών κρατών και έγινε μία από τις πέντε δυνάμεις των οποίων την ισορροπία θα σταθεροποιούσε σύντομα η Ειρήνη της Λόντι."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1454,
      era: {
        en: "Balance of Power",
        el: "Ισορροπία Δυνάμεων"
      },
      events: [
        {
          title: {
            en: "Peace of Lodi and the Italic League",
            el: "Η Ειρήνη της Λόντι και ο Ιταλικός Σύνδεσμος"
          },
          description: {
            en: "Milan, Venice, Florence, Naples, and the Papacy settle their wars at Lodi and form the Italic League, inaugurating forty years of relative peace and a classic five-power balance.",
            el: "Το Μιλάνο, η Βενετία, η Φλωρεντία, η Νάπολη και ο Παπισμός τερματίζουν τους πολέμους τους στη Λόντι και σχηματίζουν τον Ιταλικό Σύνδεσμο, εγκαινιάζοντας σαράντα χρόνια σχετικής ειρήνης και μια κλασική ισορροπία πέντε δυνάμεων."
          },
          extendedDescription: {
            en: "After the wars over the Milanese succession, in which the condottiere Francesco Sforza seized the duchy, the exhausted northern powers signed the Peace of Lodi on 9 April 1454. The following year Pope Nicholas V's Italic League bound the five major states — the duchy of Milan, the republics of Venice and Florence, the Kingdom of Naples, and the Papal States — into a mutual-defence pact partly aimed at the Ottoman threat after the fall of Constantinople in 1453. The settlement froze the political map of the peninsula and produced roughly four decades in which diplomacy, resident ambassadors, and a self-conscious balance of power replaced open war. This Laurentian peace, presided over from Florence by Lorenzo de' Medici, gave the high Renaissance the stability in which it flourished — until the French invasion of 1494 swept it all away.",
            el: "Έπειτα από τους πολέμους για τη διαδοχή του Μιλάνου, στους οποίους ο κοντοτιέρος Φραντσέσκο Σφόρτσα άρπαξε το δουκάτο, οι εξαντλημένες βόρειες δυνάμεις υπέγραψαν την Ειρήνη της Λόντι στις 9 Απριλίου 1454. Τον επόμενο χρόνο ο Ιταλικός Σύνδεσμος του Πάπα Νικολάου Ε' έδεσε τα πέντε μεγάλα κράτη — το δουκάτο του Μιλάνου, τις δημοκρατίες της Βενετίας και της Φλωρεντίας, το Βασίλειο της Νάπολης και τα Παπικά Κράτη — σε σύμφωνο αμοιβαίας άμυνας, εν μέρει στραμμένο κατά της οθωμανικής απειλής μετά την Άλωση της Κωνσταντινούπολης το 1453. Η διευθέτηση πάγωσε τον πολιτικό χάρτη της χερσονήσου και δημιούργησε περίπου τέσσερις δεκαετίες κατά τις οποίες η διπλωματία, οι μόνιμοι πρεσβευτές και μια συνειδητή ισορροπία δυνάμεων αντικατέστησαν τον ανοιχτό πόλεμο. Αυτή η λαυρεντιανή ειρήνη, υπό την αιγίδα του Λορέντσο ντε Μέντιτσι από τη Φλωρεντία, χάρισε στην ώριμη Αναγέννηση τη σταθερότητα μέσα στην οποία άνθησε — ώσπου η γαλλική εισβολή του 1494 τα σάρωσε όλα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1494,
      era: {
        en: "The Italian Wars Begin",
        el: "Αρχίζουν οι Ιταλικοί Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "Charles VIII of France Invades Italy",
            el: "Ο Κάρολος Η' της Γαλλίας Εισβάλλει στην Ιταλία"
          },
          description: {
            en: "A French army marches the length of the peninsula to claim Naples, shattering the Italic League's balance of power and opening the long Italian Wars.",
            el: "Γαλλικός στρατός διασχίζει ολόκληρη τη χερσόνησο για να διεκδικήσει τη Νάπολη, συντρίβοντας την ισορροπία δυνάμεων του Ιταλικού Συνδέσμου και ανοίγοντας τους μακρούς Ιταλικούς Πολέμους."
          },
          extendedDescription: {
            en: "Invited by Ludovico Sforza of Milan and pressing an Angevin claim to Naples, Charles VIII crossed the Alps in 1494 with an army of perhaps thirty thousand men and a formidable siege train of bronze artillery. The French marched south almost unopposed, expelling the Medici from Florence — where the friar Girolamo Savonarola briefly made the city a republic of austere virtue — and entering Naples in February 1495. The shock galvanised a hostile League of Venice that soon forced Charles to retreat, but the spell of Italian invulnerability was broken. For the next sixty-five years France and Habsburg Spain would fight their dynastic wars on Italian soil, ending the age of the independent city-states and ushering in the foreign domination of the peninsula. The year 1494 is the conventional close of the Italian Middle Ages and the political watershed of the high Renaissance.",
            el: "Προσκεκλημένος από τον Λοδοβίκο Σφόρτσα του Μιλάνου και προβάλλοντας ανδεγαβική αξίωση στη Νάπολη, ο Κάρολος Η' διέσχισε τις Άλπεις το 1494 με στρατό ίσως τριάντα χιλιάδων ανδρών και έναν τρομερό πολιορκητικό στόλο χάλκινου πυροβολικού. Οι Γάλλοι βάδισαν προς τον Νότο σχεδόν χωρίς αντίσταση, εκδιώκοντας τους Μεδίκους από τη Φλωρεντία — όπου ο μοναχός Τζιρόλαμο Σαβοναρόλα έκανε για λίγο την πόλη δημοκρατία αυστηρής αρετής — και εισερχόμενοι στη Νάπολη τον Φεβρουάριο του 1495. Το σοκ κινητοποίησε έναν εχθρικό Σύνδεσμο της Βενετίας που σύντομα ανάγκασε τον Κάρολο να υποχωρήσει, όμως το ξόρκι του ιταλικού απαραβίαστου είχε σπάσει. Τα επόμενα εξήντα πέντε χρόνια η Γαλλία και η αψβουργική Ισπανία θα διεξήγαγαν τους δυναστικούς τους πολέμους σε ιταλικό έδαφος, τερματίζοντας την εποχή των ανεξάρτητων πόλεων-κρατών και εγκαινιάζοντας την ξένη κυριαρχία στη χερσόνησο. Το έτος 1494 αποτελεί το συμβατικό τέλος του ιταλικού Μεσαίωνα και την πολιτική τομή της ώριμης Αναγέννησης."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
