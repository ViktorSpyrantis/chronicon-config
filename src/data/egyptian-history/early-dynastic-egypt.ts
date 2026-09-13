/** Early Dynastic Period — Πρωτοδυναστική Περίοδος · Egyptian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const EARLY_DYNASTIC_EGYPT = {
  id: "early-dynastic-egypt" as const,
  label: {
    en: "Early Dynastic Period",
    el: "Πρωτοδυναστική Περίοδος"
  },
  supertitle: {
    en: "Tawy",
    el: "Τάουι"
  },
  title: {
    en: "Early Dynastic Egypt",
    el: "Πρωτοδυναστική Αίγυπτος"
  },
  subtitle: {
    en: "From Narmer's founding of the First Dynasty and the rise of Memphis through the royal tombs of Abydos, the birth of writing and administration, the Second Dynasty's move to Saqqara and the Horus–Seth conflict, to Khasekhemwy's reunification and the accession of Djoser around 2686 BCE. Slide across the centuries in which a unified Egyptian state and the institution of divine kingship took shape.",
    el: "Από την ίδρυση της Πρώτης Δυναστείας από τον Νάρμερ και την άνοδο της Μέμφιδος, μέσα από τους βασιλικούς τάφους της Αβύδου, τη γέννηση της γραφής και της διοίκησης, τη μετακίνηση της Δεύτερης Δυναστείας στη Σακκάρα και τη σύγκρουση Ώρου–Σηθ, ως την επανένωση από τον Χασεχέμουι και την άνοδο του Ζοζέρ γύρω στο 2686 π.Χ. Μετακινηθείτε ανάμεσα στους αιώνες κατά τους οποίους διαμορφώθηκε ένα ενοποιημένο αιγυπτιακό κράτος και ο θεσμός της θεϊκής βασιλείας."
  },
  menuDescription: {
    en: "The first pharaohs unite the Two Lands and found Memphis.",
    el: "Οι πρώτοι φαραώ ενώνουν τις Δύο Χώρες και ιδρύουν τη Μέμφιδα."
  },
  footerLabel: {
    en: "Early Dynastic Egypt · c. 3100–2686 BCE",
    el: "Πρωτοδυναστική Αίγυπτος · περ. 3100–2686 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Early Dynastic Egypt",
    el: "Πρωτοδυναστική Αίγυπτος"
  },
  theme: THEMES.bronze,
  timeline: [
    {
      year: -3100,
      era: {
        en: "First Dynasty",
        el: "Πρώτη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Narmer founds the First Dynasty",
            el: "Ο Νάρμερ ιδρύει την Πρώτη Δυναστεία"
          },
          description: {
            en: "Narmer, ruler of a unified Upper and Lower Egypt, inaugurates the First Dynasty, establishing a single kingship over the Two Lands and a royal cemetery at Abydos.",
            el: "Ο Νάρμερ, ηγεμόνας μιας ενοποιημένης Άνω και Κάτω Αιγύπτου, εγκαινιάζει την Πρώτη Δυναστεία, εδραιώνοντας μια ενιαία βασιλεία επί των Δύο Χωρών και ένα βασιλικό νεκροταφείο στην Άβυδο."
          },
          extendedDescription: {
            en: "Narmer — often identified with the Menes of later tradition — is the first king of the unified state recorded in the Abydos and Saqqara king lists. His name appears on inscriptions from the Delta to the Sinai and as far as southern Canaan, attesting to royal authority and trade across a vast realm. The Narmer Palette, found at Hierakonpolis, became the founding icon of pharaonic kingship, showing the king crowned with both the White Crown of the south and the Red Crown of the north.",
            el: "Ο Νάρμερ — που συχνά ταυτίζεται με τον Μηνά της μεταγενέστερης παράδοσης — είναι ο πρώτος βασιλιάς του ενοποιημένου κράτους που καταγράφεται στους βασιλικούς καταλόγους της Αβύδου και της Σακκάρα. Το όνομά του εμφανίζεται σε επιγραφές από το Δέλτα ως το Σινά και ως τη νότια Χαναάν, μαρτυρώντας τη βασιλική εξουσία και το εμπόριο σε μια απέραντη επικράτεια. Η Παλέτα του Νάρμερ, που βρέθηκε στην Ιερακόνπολη, έγινε το ιδρυτικό σύμβολο της φαραωνικής βασιλείας, απεικονίζοντας τον βασιλιά στεμμένο τόσο με το Λευκό Στέμμα του νότου όσο και με το Κόκκινο Στέμμα του βορρά."
          },
          category: "political"
        }
      ]
    },
    {
      year: -3050,
      era: {
        en: "First Dynasty",
        el: "Πρώτη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "The founding of Memphis",
            el: "Η ίδρυση της Μέμφιδος"
          },
          description: {
            en: "A new capital rises at the apex of the Delta, where Upper and Lower Egypt meet; tradition credits its foundation to the first king, who is said to have dammed the Nile to reclaim the land.",
            el: "Μια νέα πρωτεύουσα ανυψώνεται στην κορυφή του Δέλτα, εκεί όπου συναντώνται η Άνω και η Κάτω Αίγυπτος· η παράδοση αποδίδει την ίδρυσή της στον πρώτο βασιλιά, ο οποίος λέγεται ότι εξέτρεψε τον Νείλο για να αποξηράνει τη γη."
          },
          extendedDescription: {
            en: "Memphis, known anciently as Inebu-hedj ('White Walls'), commanded the junction of the valley and the Delta and would remain Egypt's administrative heart for centuries. According to Herodotus and Manetho, the first king diverted the Nile with a great dyke to drain the plain on which the city was built. Its vast necropolis at Saqqara, dominated by elite mastaba tombs, mirrored the city's importance, while the god Ptah became its patron and a creator deity of the cosmos.",
            el: "Η Μέμφις, γνωστή στην αρχαιότητα ως Ινέμπου-χετζ («Λευκά Τείχη»), δέσποζε στη συμβολή της κοιλάδας και του Δέλτα και θα παρέμενε η διοικητική καρδιά της Αιγύπτου για αιώνες. Σύμφωνα με τον Ηρόδοτο και τον Μανέθωνα, ο πρώτος βασιλιάς εξέτρεψε τον Νείλο με ένα μεγάλο ανάχωμα για να αποξηράνει την πεδιάδα όπου χτίστηκε η πόλη. Η εκτεταμένη νεκρόπολή της στη Σακκάρα, με κυρίαρχους τους μασταμπά τάφους της ελίτ, αντικατόπτριζε τη σημασία της πόλης, ενώ ο θεός Πταχ έγινε προστάτης της και δημιουργός θεός του σύμπαντος."
          },
          category: "political"
        }
      ]
    },
    {
      year: -3000,
      era: {
        en: "First Dynasty",
        el: "Πρώτη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Royal tombs and the cult of kingship at Abydos",
            el: "Βασιλικοί τάφοι και η λατρεία της βασιλείας στην Άβυδο"
          },
          description: {
            en: "The kings of the First Dynasty are buried in great brick tombs at Abydos, surrounded by subsidiary graves of retainers, marking the rise of an elaborate royal funerary cult.",
            el: "Οι βασιλείς της Πρώτης Δυναστείας θάβονται σε μεγάλους πλίνθινους τάφους στην Άβυδο, περιστοιχισμένοι από βοηθητικές ταφές υπηρετών, σηματοδοτώντας την άνοδο μιας περίτεχνης βασιλικής νεκρικής λατρείας."
          },
          extendedDescription: {
            en: "At Umm el-Qa'ab near Abydos, kings such as Aha, Djer, Djet, and Den raised mud-brick funerary complexes accompanied by hundreds of sacrificial burials — courtiers, servants, and even dwarfs and dogs — interred to serve the king in the afterlife, a practice abandoned by later dynasties. Under Den the kingship reached new heights: he was the first to adopt the nesut-bity ('He of the Sedge and Bee') title symbolising rule over the Two Lands, and his reign saw the first depiction of a king wearing the double crown.",
            el: "Στο Ουμ ελ-Κάαμπ κοντά στην Άβυδο, βασιλείς όπως ο Άχα, ο Τζερ, ο Τζετ και ο Ντεν ύψωσαν πλίνθινα νεκρικά συγκροτήματα συνοδευόμενα από εκατοντάδες θυσιαστικές ταφές — αυλικών, υπηρετών, ακόμη και νάνων και σκύλων — θαμμένων για να υπηρετούν τον βασιλιά στη μετά θάνατον ζωή, πρακτική που εγκαταλείφθηκε από τις μεταγενέστερες δυναστείες. Επί Ντεν η βασιλεία έφτασε σε νέα ύψη: ήταν ο πρώτος που υιοθέτησε τον τίτλο νεσούτ-μπιτι («Αυτός της Βούρλας και της Μέλισσας») που συμβόλιζε την κυριαρχία επί των Δύο Χωρών, και η βασιλεία του είδε την πρώτη απεικόνιση βασιλιά να φορά το διπλό στέμμα."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -2950,
      era: {
        en: "First Dynasty",
        el: "Πρώτη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Writing, administration, and the royal annals",
            el: "Γραφή, διοίκηση και τα βασιλικά χρονικά"
          },
          description: {
            en: "An expanding bureaucracy keeps records on ivory and ebony labels, papyrus, and stone, dating years by notable events and the biennial cattle count that underpinned royal taxation.",
            el: "Μια διογκούμενη γραφειοκρατία τηρεί αρχεία σε πινακίδες από ελεφαντόδοντο και έβενο, σε πάπυρο και σε λίθο, χρονολογώντας τα έτη με αξιοσημείωτα γεγονότα και τη διετή απογραφή βοοειδών που στήριζε τη βασιλική φορολογία."
          },
          extendedDescription: {
            en: "Year-labels from the royal tombs and later compilations such as the Palermo Stone preserve the earliest Egyptian annals, recording festivals, military campaigns, temple foundations, and the height of the annual Nile flood. The state organised the collection of taxes in grain and cattle, controlled trade in copper, turquoise, and timber, and maintained royal estates throughout the country, laying the administrative foundations on which the pyramid-building Old Kingdom would later rest.",
            el: "Οι πινακίδες ετών από τους βασιλικούς τάφους και μεταγενέστερες συντάξεις όπως ο Λίθος του Παλέρμο διασώζουν τα αρχαιότερα αιγυπτιακά χρονικά, καταγράφοντας εορτές, στρατιωτικές εκστρατείες, ιδρύσεις ναών και το ύψος της ετήσιας πλημμύρας του Νείλου. Το κράτος οργάνωσε τη συλλογή φόρων σε σιτηρά και βοοειδή, έλεγξε το εμπόριο χαλκού, τυρκουάζ και ξυλείας, και διατήρησε βασιλικά κτήματα σε όλη τη χώρα, θέτοντας τα διοικητικά θεμέλια πάνω στα οποία θα στηριζόταν αργότερα το πυραμιδοφόρο Παλαιό Βασίλειο."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -2890,
      era: {
        en: "Second Dynasty",
        el: "Δεύτερη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "The Second Dynasty and the shift to Saqqara",
            el: "Η Δεύτερη Δυναστεία και η μετατόπιση στη Σακκάρα"
          },
          description: {
            en: "A new line of kings beginning with Hotepsekhemwy rules from Memphis and is buried at Saqqara, as the centre of royal power moves north and the kingdom faces growing internal strain.",
            el: "Μια νέα σειρά βασιλέων με αρχή τον Χοτεπσεχέμουι κυβερνά από τη Μέμφιδα και θάβεται στη Σακκάρα, καθώς το κέντρο της βασιλικής εξουσίας μετατοπίζεται βόρεια και το βασίλειο αντιμετωπίζει αυξανόμενη εσωτερική ένταση."
          },
          extendedDescription: {
            en: "The early Second Dynasty kings — Hotepsekhemwy, Raneb, and Nynetjer — abandoned Abydos for vast underground gallery tombs beneath the Saqqara plateau. Their reigns saw further development of the royal cult and the Sed-festival of jubilee, but the later dynasty was marked by obscurity and apparent conflict, with some evidence pointing to a division between the rule of Upper and Lower Egypt.",
            el: "Οι πρώτοι βασιλείς της Δεύτερης Δυναστείας — ο Χοτεπσεχέμουι, ο Ρανέμπ και ο Νινέτζερ — εγκατέλειψαν την Άβυδο για τεράστιους υπόγειους τάφους-στοές κάτω από το οροπέδιο της Σακκάρα. Οι βασιλείες τους είδαν την περαιτέρω ανάπτυξη της βασιλικής λατρείας και της εορτής Σεντ του ιωβηλαίου, αλλά η ύστερη δυναστεία σημαδεύτηκε από αφάνεια και φαινομενική σύγκρουση, με ορισμένες ενδείξεις να υποδεικνύουν διαίρεση μεταξύ της κυριαρχίας της Άνω και της Κάτω Αιγύπτου."
          },
          category: "political"
        }
      ]
    },
    {
      year: -2730,
      era: {
        en: "Second Dynasty",
        el: "Δεύτερη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Peribsen, Khasekhemwy, and the Horus–Seth conflict",
            el: "Ο Περίμπσεν, ο Χασεχέμουι και η σύγκρουση Ώρου–Σηθ"
          },
          description: {
            en: "King Peribsen places his name under the god Seth rather than Horus, hinting at religious or political schism; his successor Khasekhemwy reunites the land under both Horus and Seth.",
            el: "Ο βασιλιάς Περίμπσεν τοποθετεί το όνομά του υπό τον θεό Σηθ αντί του Ώρου, υπαινισσόμενος θρησκευτικό ή πολιτικό σχίσμα· ο διάδοχός του Χασεχέμουι επανενώνει τη χώρα υπό τον Ώρο και τον Σηθ μαζί."
          },
          extendedDescription: {
            en: "Peribsen's adoption of the Seth-animal over the traditional Horus-falcon on his serekh is read by many scholars as a sign of upheaval within the kingdom. Khasekhemwy, the last king of the Second Dynasty, recorded victories over northern enemies and crowned his serekh with both Horus and Seth — a symbol of reconciliation. He raised monumental stone architecture, including the great enclosure of Shunet el-Zebib at Abydos, and his reign restored a unity that set the stage for the Old Kingdom.",
            el: "Η υιοθέτηση του ζώου του Σηθ αντί του παραδοσιακού γερακιού-Ώρου στο σερέχ του Περίμπσεν ερμηνεύεται από πολλούς μελετητές ως σημάδι αναταραχής εντός του βασιλείου. Ο Χασεχέμουι, ο τελευταίος βασιλιάς της Δεύτερης Δυναστείας, κατέγραψε νίκες επί βόρειων εχθρών και στεφάνωσε το σερέχ του τόσο με τον Ώρο όσο και με τον Σηθ — σύμβολο συμφιλίωσης. Ανήγειρε μνημειακή λίθινη αρχιτεκτονική, μεταξύ άλλων το μεγάλο περίβολο Σουνέτ ελ-Ζεμπίμπ στην Άβυδο, και η βασιλεία του αποκατέστησε μια ενότητα που προετοίμασε το έδαφος για το Παλαιό Βασίλειο."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -2686,
      era: {
        en: "Toward the Old Kingdom",
        el: "Προς το Παλαιό Βασίλειο"
      },
      events: [
        {
          title: {
            en: "Djoser and the threshold of the Old Kingdom",
            el: "Ο Ζοζέρ και το κατώφλι του Παλαιού Βασιλείου"
          },
          description: {
            en: "The accession of Djoser inaugurates the Third Dynasty and the Old Kingdom; with his architect Imhotep he would soon raise the Step Pyramid, the first monumental stone building in history.",
            el: "Η άνοδος του Ζοζέρ εγκαινιάζει την Τρίτη Δυναστεία και το Παλαιό Βασίλειο· με τον αρχιτέκτονά του Ιμχοτέπ θα ύψωνε σύντομα την Κλιμακωτή Πυραμίδα, το πρώτο μνημειακό λίθινο οικοδόμημα στην ιστορία."
          },
          extendedDescription: {
            en: "The transition from the Second to the Third Dynasty around 2686 BCE marks the conventional boundary between the Early Dynastic Period and the Old Kingdom. Djoser inherited a unified, well-administered state and a tradition of monumental building in stone. His Step Pyramid complex at Saqqara, designed by the polymath Imhotep, transformed the royal mastaba into a soaring stairway to the heavens, opening the great age of pyramid construction.",
            el: "Η μετάβαση από τη Δεύτερη στην Τρίτη Δυναστεία γύρω στο 2686 π.Χ. σηματοδοτεί το συμβατικό όριο μεταξύ της Πρωτοδυναστικής Περιόδου και του Παλαιού Βασιλείου. Ο Ζοζέρ κληρονόμησε ένα ενοποιημένο, καλά διοικούμενο κράτος και μια παράδοση μνημειακής οικοδόμησης σε λίθο. Το συγκρότημα της Κλιμακωτής Πυραμίδας του στη Σακκάρα, σχεδιασμένο από τον πολυμαθή Ιμχοτέπ, μεταμόρφωσε τον βασιλικό μασταμπά σε μια ανυψούμενη σκάλα προς τους ουρανούς, ανοίγοντας τη μεγάλη εποχή της κατασκευής πυραμίδων."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
