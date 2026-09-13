/** Roman History — Ρωμαϊκή Ιστορία · Italian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const ROME = {
  id: "rome" as const,
  label: {
    en: "Roman History",
    el: "Ρωμαϊκή Ιστορία"
  },
  supertitle: {
    en: "SPQR",
    el: "SPQR"
  },
  title: {
    en: "Roman History",
    el: "Ρωμαϊκή Ιστορία"
  },
  subtitle: {
    en: "From the founding of Rome to the fall of the Western Empire",
    el: "Από την ίδρυση της Ρώμης μέχρι την πτώση της Δυτικής Αυτοκρατορίας"
  },
  menuDescription: {
    en: "From a village on the Tiber to an empire that outlived itself.",
    el: "Από ένα χωριό στον Τίβερη ως μια αυτοκρατορία που ξεπέρασε τον εαυτό της."
  },
  footerLabel: {
    en: "Roman History · 753 BC-476 AD",
    el: "Ρωμαϊκή Ιστορία · 753 π.Χ.-476 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Roman History",
    el: "Ρωμαϊκή Ιστορία"
  },
  theme: THEMES.bronze,
  timeline: [
    {
      year: -753,
      era: {
        en: "Founding of Rome",
        el: "Ίδρυση της Ρώμης"
      },
      events: [
        {
          title: {
            en: "Founding of Rome",
            el: "Ίδρυση της Ρώμης"
          },
          description: {
            en: "Traditional date for the founding of Rome by Romulus and Remus, marking the beginning of Roman civilization.",
            el: "Παραδοσιακή χρονολογία για την ίδρυση της Ρώμης από τον Ρωμύλο και τον Ρέμο, που σηματοδοτεί την αρχή του ρωμαϊκού πολιτισμού."
          },
          extendedDescription: {
            en: "The date of 753 BC was fixed by later Roman scholars, above all Varro, who reconstructed it from genealogies and king-lists. The story of Romulus and Remus, suckled by a she-wolf and descended from Trojan Aeneas, is legendary rather than strictly historical, though archaeology confirms continuous settlement on the Palatine Hill from at least the tenth century BC. The myth gave Rome a heroic foundation narrative that linked it to the Greek epic tradition while asserting a distinct Italic identity. From these small hilltop villages would grow the city that came to dominate the Mediterranean world.",
            el: "Η χρονολογία του 753 π.Χ. καθορίστηκε από μεταγενέστερους Ρωμαίους λογίους, κυρίως τον Βάρρωνα, που την ανασυνέθεσε από γενεαλογίες και βασιλικούς καταλόγους. Η ιστορία του Ρωμύλου και του Ρέμου, που θήλασαν από λύκαινα και καταγόταν από τον Τρώα Αινεία, είναι θρυλική παρά αυστηρά ιστορική, αν και η αρχαιολογία επιβεβαιώνει συνεχή κατοίκηση του Παλατίνου Λόφου από τουλάχιστον τον δέκατο αιώνα π.Χ. Ο μύθος προσέφερε στη Ρώμη ηρωική αφήγηση ίδρυσης που τη συνέδεε με την ελληνική επική παράδοση, διαφυλάσσοντας ταυτόχρονα ξεχωριστή ιταλική ταυτότητα. Από αυτά τα μικρά χωριά θα αναδυόταν η πόλη που κυριάρχησε στη Μεσόγειο."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/She-wolf_suckles_Romulus_and_Remus.jpg?width=1024",
            alt: {
              en: "Capitoline Wolf suckling Romulus and Remus, Capitoline Museums, Rome",
              el: "Η Λύκαινα του Καπιτωλίου θηλάζει τον Ρωμύλο και τον Ρέμο, Καπιτωλινά Μουσεία"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: -509,
      era: {
        en: "Roman Republic",
        el: "Ρωμαϊκή Δημοκρατία"
      },
      events: [
        {
          title: {
            en: "Founding of the Republic",
            el: "Ίδρυση της Δημοκρατίας"
          },
          description: {
            en: "The Roman Republic is established after the overthrow of the last king, Lucius Tarquinius Superbus.",
            el: "Η Ρωμαϊκή Δημοκρατία εγκαθιδρύεται μετά την ανατροπή του τελευταίου βασιλιά, Λούκιου Ταρκύνιου του Υπερήφανου."
          },
          extendedDescription: {
            en: "According to tradition, the expulsion of the Tarquins was sparked by the rape of Lucretia by the king's son and led by Lucius Junius Brutus, an ancestor invoked centuries later by Caesar's assassins. In place of monarchy the Romans created a system of two annually elected consuls, balanced by the Senate and popular assemblies, designed to prevent any single individual from accumulating dominant power. Modern scholars caution that early Republican history was reshaped by later annalists and contains much legend, but the constitutional framework that emerged would endure for nearly five centuries. The Republic became the political form within which Rome conquered Italy and the Mediterranean.",
            el: "Σύμφωνα με την παράδοση, η εκδίωξη των Ταρκυνίων προκλήθηκε από τη βίαια προσβολή της Λουκρητίας από τον γιο του βασιλιά και ηγήθηκε από τον Λεύκιο Ιούνιο Βρούτο, πρόγονο που οι δολοφόνοι του Καίσαρα θα επικαλούνταν αιώνες αργότερα. Στη θέση της μοναρχίας οι Ρωμαίοι θέσπισαν σύστημα δύο ετησίως εκλεγόμενων υπάτων, σε ισορροπία με τη Σύγκλητο και τις λαϊκές συνελεύσεις, σχεδιασμένο ώστε κανείς να μη συγκεντρώνει απόλυτη εξουσία. Οι σύγχρονοι ιστορικοί επισημαίνουν ότι η πρώιμη Δημοκρατία διαμορφώθηκε από μεταγενέστερους χρονογράφους και περιέχει πολλά θρυλικά στοιχεία, όμως το συνταγματικό πλαίσιο που διαμορφώθηκε διήρκεσε σχεδόν πέντε αιώνες. Η Δημοκρατία υπήρξε το πολιτικό σχήμα μέσα στο οποίο η Ρώμη κατέκτησε την Ιταλία και τη Μεσόγειο."
          },
          category: "political"
        }
      ]
    },
    {
      year: -494,
      era: {
        en: "Conflict of the Orders",
        el: "Σύγκρουση των Τάξεων"
      },
      events: [
        {
          title: {
            en: "First Secession of the Plebs",
            el: "Πρώτη Απόσχιση των Πληβείων"
          },
          description: {
            en: "Plebeians withdraw from Rome in protest against debt and patrician domination, forcing the creation of the office of Tribune of the Plebs.",
            el: "Οι πληβείοι αποχωρούν από τη Ρώμη διαμαρτυρόμενοι για τα χρέη και την πατρικιακή κυριαρχία, εξαναγκάζοντας τη δημιουργία του αξιώματος του Δημάρχου των Πληβείων."
          },
          extendedDescription: {
            en: "The plebeian withdrawal to the Sacred Mount was effectively a general strike, depriving Rome of its soldiers and laborers in the midst of warfare with neighboring peoples. The patricians, who monopolized magistracies and priesthoods, were compelled to negotiate, and the resulting Tribunes of the Plebs were granted personal inviolability and the power to veto magistrates' acts. This was the first episode in the long Conflict of the Orders, the gradual extension of political and legal rights to the plebeian majority. Although later annalists embellished the details, the secession established the principle that the lower orders could win concessions through collective action.",
            el: "Η απόσυρση των πληβείων στο Ιερό Όρος ήταν ουσιαστικά γενική απεργία, που στερούσε από τη Ρώμη τους στρατιώτες και τους εργάτες της εν μέσω πολέμων με γειτονικούς λαούς. Οι πατρίκιοι, που μονοπωλούσαν τα αξιώματα και τις ιερατείες, αναγκάστηκαν να διαπραγματευτούν, και οι Δήμαρχοι των Πληβείων που προέκυψαν απέκτησαν προσωπικό απαραβίαστο και δικαίωμα αρνησικυρίας στις πράξεις των αρχόντων. Επρόκειτο για το πρώτο επεισόδιο στη μακρά Σύγκρουση των Τάξεων, τη σταδιακή επέκταση πολιτικών και νομικών δικαιωμάτων στην πλειοψηφία των πληβείων. Αν και μεταγενέστεροι χρονογράφοι εξωράισαν τις λεπτομέρειες, η απόσχιση καθιέρωσε την αρχή ότι οι κατώτερες τάξεις μπορούν να κερδίζουν παραχωρήσεις με συλλογική δράση."
          },
          category: "political"
        }
      ]
    },
    {
      year: -451,
      era: {
        en: "Legal Reform",
        el: "Νομική Μεταρρύθμιση"
      },
      events: [
        {
          title: {
            en: "Twelve Tables issued",
            el: "Θέσπιση των Δώδεκα Δελτών"
          },
          description: {
            en: "Rome publishes the Twelve Tables, the first written Roman law code, laying the foundations of Roman legal tradition.",
            el: "Η Ρώμη δημοσιεύει τις Δώδεκα Δέλτους, τον πρώτο γραπτό ρωμαϊκό νομικό κώδικα, θέτοντας τα θεμέλια της ρωμαϊκής νομικής παράδοσης."
          },
          extendedDescription: {
            en: "The Twelve Tables were drafted by a special commission of ten men, the decemviri, in response to plebeian demands that the customary law administered by patrician judges be set down in writing. Tradition held that the commissioners studied Greek legal practice before producing tables that covered procedure, family, property, debt, and crime. Though the original bronze tablets perished in the Gallic sack of 390 BC, their contents survived in citations and shaped centuries of legal education. The very act of publication transformed law from a patrician secret into a shared civic possession.",
            el: "Οι Δώδεκα Δέλτοι συντάχθηκαν από ειδική επιτροπή δέκα ανδρών, τους δεκεμβίρους, ως απάντηση στις απαιτήσεις των πληβείων να καταγραφεί το εθιμικό δίκαιο που εφάρμοζαν οι πατρίκιοι δικαστές. Η παράδοση αναφέρει ότι οι επίτροποι μελέτησαν την ελληνική νομική πρακτική πριν συντάξουν τις δέλτους, που κάλυπταν τη δικονομία, την οικογένεια, την ιδιοκτησία, τα χρέη και τα εγκλήματα. Αν και οι αρχικές χάλκινες πινακίδες χάθηκαν στη γαλατική λεηλασία του 390 π.Χ., το περιεχόμενό τους διασώθηκε σε παραπομπές και διαμόρφωσε αιώνες νομικής εκπαίδευσης. Η ίδια η δημοσίευσή τους μετέτρεψε το δίκαιο από πατρικιακό μυστικό σε κοινό πολιτικό κτήμα."
          },
          category: "political"
        }
      ]
    },
    {
      year: -390,
      era: {
        en: "Gallic Invasion",
        el: "Γαλατική Εισβολή"
      },
      events: [
        {
          title: {
            en: "Sack of Rome by Gauls",
            el: "Λεηλασία της Ρώμης από τους Γαλάτες"
          },
          description: {
            en: "The Gauls under Brennus sack Rome, except for the Capitoline Hill, marking one of Rome's greatest defeats.",
            el: "Οι Γαλάτες υπό τον Βρέννο λεηλατούν τη Ρώμη, εκτός από τον Καπιτωλίνο Λόφο, σημειώνοντας μία από τις μεγαλύτερες ήττες της."
          },
          extendedDescription: {
            en: "After crushing a Roman army at the river Allia, the Senones moved south and entered an undefended city, burning much of it and besieging the citadel on the Capitoline. Tradition recalls the cackling of the sacred geese of Juno that betrayed a night attack and the famous demand of Brennus that the Romans pay a humiliating ransom in gold. The trauma left a deep imprint on Roman memory, encouraging the construction of the Servian Wall and reinforcing a sense that survival required relentless military preparation. For centuries afterward Romans dated documents and prodigies in relation to the Gallic catastrophe.",
            el: "Αφού συνέτριψαν ρωμαϊκό στρατό στον ποταμό Αλλία, οι Σένονες κατέβηκαν νότια και εισήλθαν σε μια απροστάτευτη πόλη, πυρπολώντας μεγάλο μέρος της και πολιορκώντας την ακρόπολη στον Καπιτωλίνο. Η παράδοση θυμάται τις κραυγές των ιερών χηνών της Ήρας που πρόδωσαν νυχτερινή έφοδο και την περίφημη απαίτηση του Βρέννου να καταβάλουν οι Ρωμαίοι ταπεινωτικά λύτρα σε χρυσό. Η εμπειρία άφησε βαθύ αποτύπωμα στη ρωμαϊκή μνήμη, οδηγώντας στην ανέγερση του Σερβιανού Τείχους και ενισχύοντας την πεποίθηση ότι η επιβίωση απαιτεί αδιάλειπτη στρατιωτική ετοιμότητα. Για αιώνες οι Ρωμαίοι χρονολογούσαν έγγραφα και θεοσημίες σε σχέση με τη γαλατική καταστροφή."
          },
          category: "military"
        }
      ]
    },
    {
      year: -340,
      era: {
        en: "Latin War",
        el: "Λατινικός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Latin War and the devotio of Decius Mus",
            el: "Λατινικός Πόλεμος και η devotio του Δεκίου Μου"
          },
          description: {
            en: "Rome defeats a coalition of Latin allies demanding equal political rights, dissolves the old Latin League and remakes its alliances on terms that bind Italy ever more tightly to Roman authority.",
            el: "Η Ρώμη νικά συνασπισμό Λατίνων συμμάχων που απαιτούν ίσα πολιτικά δικαιώματα, διαλύει την παλαιά Λατινική Συμμαχία και ανασυγκροτεί τις συμμαχίες της με όρους που δένουν ολοένα στενότερα την Ιταλία στη ρωμαϊκή εξουσία."
          },
          extendedDescription: {
            en: "After half a century of joint warfare against Volscians and Aequians, the cities of Latium demanded that one of the consulships and half the seats in the Senate be reserved for their own citizens. Rome refused, and the resulting war pitted the consuls Titus Manlius Torquatus and Publius Decius Mus against the combined Latin and Campanian levies. At the battle near Mount Vesuvius — preserved chiefly through Livy's vivid retelling — the Romans were nearly broken on their left wing until Decius, in fulfilment of an oracle that one army's commander must die, performed the formal devotio: covering his head with the toga, he consecrated himself and the enemy ranks to the gods of the underworld and rode into the Latin lines to be killed. The Romans rallied and won. Two years of further fighting ended in 338 with a settlement that abolished the Latin League and bound the cities individually to Rome by tailored treaties of alliance, citizenship without vote, or full incorporation. The 'Latin settlement' became the durable model for all subsequent Roman expansion in Italy.",
            el: "Μετά από μισό αιώνα κοινών πολέμων εναντίον Βόλσκων και Αικανών, οι πόλεις του Λατίου ζήτησαν να αποκλείεται για τους πολίτες τους η μία υπατεία και τα μισά εδώλια της Συγκλήτου. Η Ρώμη αρνήθηκε, και ο πόλεμος που ακολούθησε αντιπαρέταξε τους υπάτους Τίτο Μάνλιο Τορκουάτο και Πόπλιο Δέκιο Μου εναντίον των ηνωμένων λατινικών και καμπανικών στρατευμάτων. Στη μάχη πλησίον του Βεζουβίου — σωζόμενη κυρίως διά της ζωντανής αφηγήσεως του Λιβίου — οι Ρωμαίοι παρ' ολίγον να συντριβούν στην αριστερή πτέρυγά τους, μέχρι που ο Δέκιος, εκπληρώνοντας χρησμό σύμφωνα με τον οποίο ο αρχηγός του ενός στρατού όφειλε να αποθάνει, ετέλεσε την επίσημη devotio: καλύπτοντας την κεφαλή του με την τήβεννο, αφιέρωσε τον εαυτό του και τις γραμμές του εχθρού στους θεούς του Άδη και επέλασε εντός των λατινικών τάξεων για να σκοτωθεί. Οι Ρωμαίοι ανασυντάχθηκαν και νίκησαν. Δύο χρόνια περαιτέρω πολέμων έληξαν το 338 με ρύθμιση που κατήργησε τη Λατινική Συμμαχία και έδεσε τις πόλεις χωριστά προς τη Ρώμη με ειδικά κατά περίπτωση συμφώνα συμμαχίας, πολιτείας άνευ ψήφου ή πλήρους ενσωματώσεως. Η 'λατινική ρύθμισις' έγινε το μόνιμον πρότυπον κάθε μεταγενεστέρας ρωμαϊκής επεκτάσεως στην Ιταλίαν."
          },
          category: "military"
        }
      ]
    },
    {
      year: -312,
      era: {
        en: "Roman Expansion",
        el: "Ρωμαϊκή Επέκταση"
      },
      events: [
        {
          title: {
            en: "Appian Way begun",
            el: "Έναρξη της Αππίας Οδού"
          },
          description: {
            en: "Construction begins on the Appian Way, the great military road that helps Rome project power across Italy.",
            el: "Αρχίζει η κατασκευή της Αππίας Οδού, του μεγάλου στρατιωτικού δρόμου που βοηθά τη Ρώμη να προβάλλει ισχύ σε όλη την Ιταλία."
          },
          extendedDescription: {
            en: "Initiated by the censor Appius Claudius Caecus during the Second Samnite War, the road first ran from Rome to Capua and was later extended all the way to Brundisium on the Adriatic coast. Its straight, paved course allowed legions to march swiftly into Campania and the south, decisively shifting the strategic balance against the Samnites. The Appia became the model for the dense network of Roman roads that would eventually connect every province of the empire. Praised by Statius as the queen of long roads, it carried not only soldiers but also goods, ideas, and cults across Italy for centuries.",
            el: "Ξεκινημένη από τον τιμητή Άππιο Κλαύδιο Καίκο κατά τον Β΄ Σαμνιτικό Πόλεμο, η οδός συνέδεε αρχικά τη Ρώμη με την Καπύη και αργότερα επεκτάθηκε ως το Βρινδήσιο στην αδριατική ακτή. Η ευθεία, λιθόστρωτη πορεία της επέτρεπε στις λεγεώνες να βαδίζουν ταχύτατα προς την Καμπανία και τον Νότο, μεταβάλλοντας αποφασιστικά τη στρατηγική ισορροπία απέναντι στους Σαμνίτες. Η Αππία έγινε το πρότυπο του πυκνού δικτύου ρωμαϊκών δρόμων που θα συνέδεε τελικά κάθε επαρχία της αυτοκρατορίας. Εγκωμιασμένη από τον Στάτιο ως βασίλισσα των μακρών οδών, μετέφερε για αιώνες όχι μόνο στρατιώτες αλλά και αγαθά, ιδέες και λατρείες σε όλη την Ιταλία."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -280,
      era: {
        en: "Pyrrhic War",
        el: "Πυρρικός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Pyrrhus invades Italy",
            el: "Ο Πύρρος εισβάλλει στην Ιταλία"
          },
          description: {
            en: "Pyrrhus of Epirus crosses to Italy at the invitation of Tarentum, defeats the Romans at Heraclea with his elephants, and inaugurates the conflict that ends with Rome's mastery of southern Italy.",
            el: "Ο Πύρρος της Ηπείρου διαβαίνει στην Ιταλία ύστερα από πρόσκληση του Τάραντος, νικά τους Ρωμαίους στην Ηράκλεια με τους ελέφαντές του και εγκαινιάζει τη σύγκρουση που τερματίζεται με τη ρωμαϊκή κυριαρχία επί της κάτω Ιταλίας."
          },
          extendedDescription: {
            en: "When Roman warships violated a treaty by entering the Tarentine gulf, the Greek city of Tarentum appealed to Pyrrhus, the most celebrated general of the Hellenistic age and a kinsman of Alexander, to defend the Greek cities of Italy. He landed with about twenty-five thousand men and twenty war elephants, animals previously unseen on Italian soil, and crushed the consul Publius Valerius Laevinus at Heraclea. A second victory at Asculum the next year cost him so heavily that, according to Plutarch, he remarked that another such victory would undo him — the original 'Pyrrhic victory'. After a Sicilian interlude against Carthage, he returned to Italy and was finally checked at Beneventum in 275 by Manius Curius Dentatus. The Romans had absorbed defeat at the hands of the most polished army of the Hellenistic world without surrendering, demonstrating to the Mediterranean east that a new power had emerged in the west. Within a decade Rome controlled the whole Italian peninsula south of the Po and was ready to challenge Carthage.",
            el: "Όταν ρωμαϊκά πλοία παραβίασαν συνθήκη εισερχόμενα στον Ταραντινό κόλπο, η ελληνική πόλις του Τάραντος εκάλεσε τον Πύρρο, τον διασημότατο στρατηγό της ελληνιστικής εποχής και συγγενή του Αλεξάνδρου, να υπερασπιστεί τις ελληνικές πόλεις της Ιταλίας. Αποβιβάστηκε με περίπου είκοσι πέντε χιλιάδες άνδρες και είκοσι πολεμικούς ελέφαντες, ζώα έως τότε άγνωστα στο ιταλικό έδαφος, και συνέτριψε τον ύπατο Πόπλιο Ουαλέριο Λαιβίνο στην Ηράκλεια. Δεύτερη νίκη στο Άσκλον τον επόμενο χρόνο του εστοίχισε τόσο βαριές απώλειες ώστε, κατά τον Πλούταρχο, παρατήρησε ότι άλλη μία τέτοια νίκη θα τον κατέστρεφε — η αρχική 'Πύρρειος νίκη'. Έπειτα από σικελική παρένθεση εναντίον της Καρχηδόνος, επέστρεψε στην Ιταλία και τελικώς ανακόπηκε στο Βενεβέντο το 275 από τον Μάνιο Κούριο Δεντάτο. Οι Ρωμαίοι απορρόφησαν την ήττα από τον πλέον εκλεπτυσμένο στρατό του ελληνιστικού κόσμου χωρίς να παραδοθούν, αποδεικνύοντας στην ανατολική Μεσόγειο ότι νέα δύναμις είχε αναδυθεί στη Δύση. Μέσα σε μία δεκαετία, η Ρώμη έλεγχε ολόκληρη την ιταλική χερσόνησο νοτίως του Πάδου και ήταν έτοιμη να αντιμετωπίσει την Καρχηδόνα."
          },
          category: "military"
        }
      ]
    },
    {
      year: -264,
      era: {
        en: "First Punic War",
        el: "Α΄ Καρχηδονιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "First Punic War begins",
            el: "Έναρξη του Α΄ Καρχηδονιακού Πολέμου"
          },
          description: {
            en: "Rome and Carthage begin the First Punic War, a 23-year conflict for control of Sicily and the Western Mediterranean.",
            el: "Η Ρώμη και η Καρχηδόνα αρχίζουν τον Α΄ Καρχηδονιακό Πόλεμο, μια σύγκρουση 23 ετών για τον έλεγχο της Σικελίας και της δυτικής Μεσογείου."
          },
          extendedDescription: {
            en: "The war was triggered by Roman intervention on behalf of the Mamertines, mercenaries who had seized the Sicilian city of Messana, which alarmed Carthage's long-established interests on the island. To challenge the great Punic naval power Rome had to build a fleet almost from scratch, reportedly copying a captured Carthaginian warship and adopting the boarding bridge known as the corvus. The conflict transformed Rome from a primarily land-based Italian power into a maritime contender across the Mediterranean. It also demonstrated the extraordinary manpower reserves of the Roman alliance system, which could absorb staggering losses and rebuild fleets repeatedly.",
            el: "Ο πόλεμος ξέσπασε όταν η Ρώμη επενέβη υπέρ των Μαμερτίνων, μισθοφόρων που είχαν καταλάβει τη σικελική πόλη Μεσσήνη, αναστατώνοντας τα μακροχρόνια συμφέροντα της Καρχηδόνας στη νήσο. Για να αναμετρηθεί με τη μεγάλη ναυτική δύναμη των Φοινίκων, η Ρώμη υποχρεώθηκε να συγκροτήσει στόλο σχεδόν από το μηδέν, αντιγράφοντας, όπως αναφέρεται, αιχμαλωτισμένο καρχηδονιακό σκάφος και υιοθετώντας τη γέφυρα αγκίστρωσης, τον κόρβο. Η σύγκρουση μεταμόρφωσε τη Ρώμη από ιταλική χερσαία δύναμη σε διεκδικητή της κυριαρχίας στη Μεσόγειο. Ανέδειξε επίσης τα τεράστια αποθέματα ανθρώπινου δυναμικού του ρωμαϊκού συμμαχικού συστήματος, που μπορούσε να απορροφά συγκλονιστικές απώλειες και να ανασυγκροτεί στόλους ξανά και ξανά."
          },
          category: "military"
        }
      ]
    },
    {
      year: -241,
      era: {
        en: "First Punic War",
        el: "Α΄ Καρχηδονιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Rome defeats Carthage",
            el: "Η Ρώμη νικά την Καρχηδόνα"
          },
          description: {
            en: "Rome defeats Carthage, gaining control of Sicily and emerging as the dominant power in the Western Mediterranean.",
            el: "Η Ρώμη νικά την Καρχηδόνα, αποκτά τον έλεγχο της Σικελίας και αναδεικνύεται κυρίαρχη δύναμη στη δυτική Μεσόγειο."
          },
          extendedDescription: {
            en: "The decisive Roman victory at the Aegates Islands shattered Carthage's last relief fleet and forced its general Hamilcar Barca to negotiate. Under the resulting treaty Carthage evacuated Sicily and paid a heavy indemnity, and the island became Rome's first overseas province, an entirely new constitutional category. The peace was punitive and humiliating, fueling Carthaginian resentment and laying the groundwork for the next conflict under Hamilcar's son Hannibal. For Rome, ruling territory beyond Italy raised novel questions about taxation, administration, and the status of provincial subjects that would shape its political development for generations.",
            el: "Η αποφασιστική ρωμαϊκή νίκη στις Αιγάτες Νήσους συνέτριψε τον τελευταίο καρχηδονιακό στόλο επικουρίας και ανάγκασε τον στρατηγό Αμίλκα Βάρκα να συνθηκολογήσει. Σύμφωνα με τη συνθήκη, η Καρχηδόνα εκκένωσε τη Σικελία και κατέβαλε βαριά αποζημίωση, ενώ η νήσος έγινε η πρώτη υπερπόντια επαρχία της Ρώμης, μια εντελώς νέα συνταγματική κατηγορία. Η ειρήνη υπήρξε τιμωρητική και ταπεινωτική, τροφοδοτώντας την καρχηδονιακή πικρία και προετοιμάζοντας την επόμενη σύγκρουση υπό τον γιο του Αμίλκα, τον Αννίβα. Για τη Ρώμη, η διακυβέρνηση εδαφών εκτός Ιταλίας έθεσε νέα ερωτήματα φορολογίας, διοίκησης και καθεστώτος των υπηκόων, που θα διαμόρφωναν την πολιτική της εξέλιξη για γενεές."
          },
          category: "military"
        }
      ]
    },
    {
      year: -218,
      era: {
        en: "Second Punic War",
        el: "Β΄ Καρχηδονιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Hannibal crosses the Alps",
            el: "Ο Αννίβας διασχίζει τις Άλπεις"
          },
          description: {
            en: "Hannibal Barca leads his army, including war elephants, across the Alps into Italy, beginning the Second Punic War.",
            el: "Ο Αννίβας Βάρκας οδηγεί τον στρατό του, μαζί με πολεμικούς ελέφαντες, διασχίζοντας τις Άλπεις προς την Ιταλία και εγκαινιάζοντας τον Β΄ Καρχηδονιακό Πόλεμο."
          },
          extendedDescription: {
            en: "Setting out from his Spanish base at New Carthage, Hannibal led tens of thousands of infantry, cavalry, and African elephants on an audacious overland march, crossing the Pyrenees, the Rhone, and finally the snow-bound Alpine passes in late autumn. The crossing inflicted appalling losses, but it brought a hostile army into Italy from a direction the Romans had thought impossible and rallied many Gallic tribes of the Po valley to his banner. The strategic shock dictated the entire shape of the Second Punic War, forcing Rome to fight on its own soil. Polybius, who interviewed survivors, made the march one of the most celebrated feats in ancient military history.",
            el: "Ξεκινώντας από την ισπανική βάση του στη Νέα Καρχηδόνα, ο Αννίβας οδήγησε δεκάδες χιλιάδες πεζούς, ιππείς και αφρικανούς ελέφαντες σε τολμηρή χερσαία πορεία, διασχίζοντας τα Πυρηναία, τον Ροδανό και τέλος τα χιονισμένα περάσματα των Άλπεων στα τέλη του φθινοπώρου. Η διάβαση προκάλεσε τρομερές απώλειες, έφερε όμως εχθρικό στρατό στην Ιταλία από κατεύθυνση που οι Ρωμαίοι θεωρούσαν αδιάβατη και προσέλκυσε υπό τη σημαία του πολλές γαλατικές φυλές της κοιλάδας του Πάδου. Το στρατηγικό σοκ καθόρισε όλη τη μορφή του Β΄ Καρχηδονιακού Πολέμου, αναγκάζοντας τη Ρώμη να πολεμήσει στο ίδιο της το έδαφος. Ο Πολύβιος, που πήρε συνεντεύξεις από επιζώντες, ανέδειξε την πορεία σε ένα από τα διασημότερα στρατιωτικά κατορθώματα της αρχαιότητας."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Heinrich_Leutemann_-_Hannibals_Übergang_über_die_Alpen_(cropped).jpg?width=1024",
            alt: {
              en: "Hannibal crossing the Alps, lithograph by Heinrich Leutemann",
              el: "Ο Αννίβας διασχίζει τις Άλπεις, λιθογραφία του Heinrich Leutemann"
            },
            credit: "Heinrich Leutemann, via Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: -216,
      era: {
        en: "Second Punic War",
        el: "Β΄ Καρχηδονιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Battle of Cannae",
            el: "Μάχη των Καννών"
          },
          description: {
            en: "Hannibal achieves his greatest victory at the Battle of Cannae, destroying the Roman army in one of history's most brilliant tactical victories.",
            el: "Ο Αννίβας πετυχαίνει τη μεγαλύτερη νίκη του στη Μάχη των Καννών, συντρίβοντας τον ρωμαϊκό στρατό σε μία από τις λαμπρότερες τακτικές νίκες της ιστορίας."
          },
          extendedDescription: {
            en: "Facing a Roman army nearly twice the size of his own, Hannibal arranged his line in a deliberately weak crescent that gave way under Roman pressure, while his veteran African infantry and Numidian cavalry enveloped both flanks. The resulting double encirclement annihilated perhaps fifty thousand Romans in a single afternoon, including the consul Lucius Aemilius Paullus and scores of senators. Cannae became the textbook example of tactical genius and is still studied at military academies today. Yet despite the catastrophe, Rome refused to negotiate, recruited fresh legions, and adopted the cautious Fabian strategy that would slowly grind Hannibal down in Italy.",
            el: "Αντιμετωπίζοντας ρωμαϊκό στρατό σχεδόν διπλάσιο του δικού του, ο Αννίβας παρέταξε τη γραμμή του σε σκόπιμα αδύναμη ημισέληνο, που υποχώρησε υπό την πίεση των Ρωμαίων, ενώ οι έμπειροι Αφρικανοί πεζοί και οι Νουμίδες ιππείς του κύκλωσαν και τα δύο πλευρά. Η διπλή περικύκλωση εξόντωσε ίσως πενήντα χιλιάδες Ρωμαίους σε ένα μόνο απόγευμα, ανάμεσά τους τον ύπατο Λεύκιο Αιμίλιο Παύλο και πλήθος συγκλητικών. Οι Κάννες έγιναν το υπόδειγμα τακτικής ιδιοφυΐας και διδάσκονται μέχρι σήμερα στις στρατιωτικές ακαδημίες. Παρά την καταστροφή, η Ρώμη αρνήθηκε να διαπραγματευτεί, στρατολόγησε νέες λεγεώνες και υιοθέτησε τη συνετή τακτική του Φαβίου, που θα κατέτριβε σταδιακά τον Αννίβα στην Ιταλία."
          },
          category: "military",
          image: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/The_Death_of_Paulus_Aemilius_at_the_Battle_of_Cannae.jpg/960px-The_Death_of_Paulus_Aemilius_at_the_Battle_of_Cannae.jpg",
            alt: {
              en: "The Death of Paulus Aemilius at the Battle of Cannae",
              el: "Ο Θάνατος του Παύλου Αιμιλίου στη Μάχη των Καννών"
            },
            credit: "John Trumbull, via Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: -202,
      era: {
        en: "Second Punic War",
        el: "Β΄ Καρχηδονιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Rome defeats Hannibal",
            el: "Η Ρώμη νικά τον Αννίβα"
          },
          description: {
            en: "Scipio Africanus defeats Hannibal at the Battle of Zama, ending the Second Punic War and establishing Roman dominance in the Mediterranean.",
            el: "Ο Σκιπίων ο Αφρικανός νικά τον Αννίβα στη Μάχη της Ζάμας, τερματίζοντας τον Β΄ Καρχηδονιακό Πόλεμο και εδραιώνοντας τη ρωμαϊκή κυριαρχία στη Μεσόγειο."
          },
          extendedDescription: {
            en: "By invading North Africa, Publius Cornelius Scipio compelled the Carthaginians to recall Hannibal from Italy after fifteen years of campaigning. At Zama, Scipio's tactical innovations and the defection of the Numidian king Masinissa's superb cavalry to the Roman side neutralized Hannibal's elephants and outflanked his infantry. The peace terms stripped Carthage of its overseas territories, its war fleet, and its right to wage war without Roman permission. Rome was left without any rival in the western Mediterranean and turned its attention east, soon humbling the Hellenistic kingdoms of Macedon and the Seleucids.",
            el: "Εισβάλλοντας στη Βόρεια Αφρική, ο Πόπλιος Κορνήλιος Σκιπίων ανάγκασε τους Καρχηδονίους να ανακαλέσουν τον Αννίβα από την Ιταλία ύστερα από δεκαπέντε χρόνια εκστρατειών. Στη Ζάμα οι τακτικές καινοτομίες του Σκιπίωνα και η αυτομόληση του εξαίρετου ιππικού του Νουμίδα βασιλιά Μασσινίσσα στο πλευρό των Ρωμαίων εξουδετέρωσαν τους ελέφαντες του Αννίβα και υπερκέρασαν το πεζικό του. Οι όροι της ειρήνης στέρησαν από την Καρχηδόνα τις υπερπόντιες κτήσεις, τον πολεμικό στόλο και το δικαίωμα να πολεμά χωρίς ρωμαϊκή άδεια. Η Ρώμη έμεινε χωρίς αντίπαλο στη δυτική Μεσόγειο και έστρεψε το βλέμμα της ανατολικά, ταπεινώνοντας σύντομα τα ελληνιστικά βασίλεια της Μακεδονίας και των Σελευκιδών."
          },
          category: "military"
        }
      ]
    },
    {
      year: -149,
      era: {
        en: "Third Punic War",
        el: "Γ΄ Καρχηδονιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Third Punic War begins",
            el: "Έναρξη του Γ΄ Καρχηδονιακού Πολέμου"
          },
          description: {
            en: "Rome begins the Third Punic War, determined to destroy Carthage once and for all.",
            el: "Η Ρώμη αρχίζει τον Γ΄ Καρχηδονιακό Πόλεμο, αποφασισμένη να καταστρέψει οριστικά την Καρχηδόνα."
          },
          extendedDescription: {
            en: "Half a century after Zama, a recovering Carthage clashed with the Numidian king Masinissa, and its decision to defend itself was treated by Rome as a violation of the earlier treaty. The senator Marcus Porcius Cato had ended every speech with the cry that Carthage must be destroyed, and a faction at Rome was determined to remove the rival permanently. The Romans demanded the surrender of the city and its abandonment for an inland site, terms calculated to be unacceptable. When the Carthaginians refused, the legions began a brutal three-year siege that would culminate in the city's annihilation.",
            el: "Μισό αιώνα μετά τη Ζάμα, μια ανακάμπτουσα Καρχηδόνα συγκρούστηκε με τον Νουμίδα βασιλιά Μασσινίσσα, και η απόφασή της να αμυνθεί θεωρήθηκε από τη Ρώμη παραβίαση της προηγούμενης συνθήκης. Ο συγκλητικός Μάρκος Πόρκιος Κάτων τελείωνε κάθε λόγο του με τη ρήση ότι η Καρχηδόνα πρέπει να καταστραφεί, ενώ μερίδα της Ρώμης ήταν αποφασισμένη να εξαφανίσει οριστικά τον αντίπαλο. Οι Ρωμαίοι απαίτησαν την παράδοση της πόλης και τη μετοίκησή της σε εσωτερική θέση, όρους σκόπιμα απαράδεκτους. Όταν οι Καρχηδόνιοι αρνήθηκαν, οι λεγεώνες άρχισαν βάναυση τριετή πολιορκία που θα κατέληγε στον αφανισμό της πόλης."
          },
          category: "military"
        }
      ]
    },
    {
      year: -146,
      era: {
        en: "Destruction of Carthage",
        el: "Καταστροφή της Καρχηδόνας"
      },
      events: [
        {
          title: {
            en: "Destruction of Carthage",
            el: "Καταστροφή της Καρχηδόνας"
          },
          description: {
            en: "Roman forces completely destroy Carthage, ending the Third Punic War and eliminating Rome's greatest rival.",
            el: "Οι ρωμαϊκές δυνάμεις καταστρέφουν ολοκληρωτικά την Καρχηδόνα, τερματίζοντας τον Γ΄ Καρχηδονιακό Πόλεμο και εξαλείφοντας τον μεγαλύτερο αντίπαλο της Ρώμης."
          },
          extendedDescription: {
            en: "Under the command of Scipio Aemilianus, the adopted grandson of the victor of Zama, Roman forces stormed the city after fierce street-by-street fighting that lasted six days. The survivors were sold into slavery, the buildings systematically demolished, and the territory turned into the new province of Africa. The same year saw the Roman destruction of Corinth, sealing Rome's mastery over both the western and eastern Mediterranean. Polybius, present at Carthage's fall, recorded that Scipio wept as he watched the flames, quoting Homer and reflecting that one day Rome itself might suffer the same fate.",
            el: "Υπό την ηγεσία του Σκιπίωνα Αιμιλιανού, του θετού εγγονού του νικητή της Ζάμας, οι ρωμαϊκές δυνάμεις κατέλαβαν την πόλη ύστερα από σκληρές μάχες δρόμο προς δρόμο που κράτησαν έξι ημέρες. Οι επιζώντες πουλήθηκαν ως δούλοι, τα κτίρια κατεδαφίστηκαν συστηματικά και η περιοχή μετατράπηκε στη νέα επαρχία της Αφρικής. Την ίδια χρονιά οι Ρωμαίοι κατέστρεψαν και την Κόρινθο, σφραγίζοντας την κυριαρχία τους τόσο στη δυτική όσο και στην ανατολική Μεσόγειο. Ο Πολύβιος, παρών στην πτώση της Καρχηδόνας, καταγράφει ότι ο Σκιπίων έκλαψε βλέποντας τις φλόγες, απαγγέλλοντας Όμηρο και αναλογιζόμενος ότι κάποια ημέρα η ίδια η Ρώμη θα μπορούσε να γνωρίσει ανάλογη μοίρα."
          },
          category: "military"
        }
      ]
    },
    {
      year: -143,
      era: {
        en: "Numantine War",
        el: "Νομαντινός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Numantine War begins",
            el: "Έναρξη του Νομαντινού Πολέμου"
          },
          description: {
            en: "The Celtiberian town of Numantia rises against Roman pressure in the Iberian interior, beginning a twenty-year resistance that humiliates one Roman army after another.",
            el: "Η κελτιβηρική πόλη της Νομαντίας ξεσηκώνεται εναντίον της ρωμαϊκής πιέσεως στην ιβηρική ενδοχώρα, αρχίζοντας μια εικοσαετή αντίσταση που ταπεινώνει διαδοχικά ρωμαϊκά στρατεύματα."
          },
          extendedDescription: {
            en: "After the murder of the Lusitanian leader Viriathus, who had stalemated Roman armies for nearly a decade, attention turned to Numantia, a heavily fortified hilltop town on the Duero whose population was perhaps four thousand. A succession of consuls — Quintus Pompeius, Marcus Popilius Laenas, Gaius Hostilius Mancinus — found themselves outmanoeuvred in the rugged country, and Mancinus, surrounded with twenty thousand men in 137, was forced to sign a treaty so humiliating that the Senate repudiated it and offered him naked and bound to the Numantines, who refused to accept him. The contrast with the recent destruction of Carthage was unbearable: a tiny Celtiberian town was making a great power look ridiculous. Only when Scipio Aemilianus, fresh from Carthage, took command in 134 was the war ended, by sealing Numantia behind seven Roman camps and a wall and starving it into a mass suicide the following year. The campaign provided a young military tribune named Gaius Marius and a still younger Tiberius Gracchus with their first independent commands.",
            el: "Μετά τη δολοφονία του Λουσιτανού ηγέτη Βιριάθου, που είχε αναχαιτίσει τις ρωμαϊκές στρατιές επί σχεδόν μια δεκαετία, η προσοχή στράφηκε στη Νομαντία, μια ισχυρά οχυρωμένη ορεινή πόλη στον Δούρο με πληθυσμό ίσως τεσσάρων χιλιάδων. Διαδοχικοί ύπατοι — ο Κόιντος Πομπήιος, ο Μάρκος Ποπίλιος Λαίνας, ο Γάιος Οστίλιος Μαγκίνος — βρέθηκαν να ξεγελιούνται σε τραχύ έδαφος, και ο Μαγκίνος, περικυκλωμένος με είκοσι χιλιάδες άνδρες το 137, αναγκάστηκε να υπογράψει συνθήκη τόσο ταπεινωτική ώστε η Σύγκλητος την απέρριψε και τον προσέφερε γυμνό και δεμένο στους Νομαντίνους, οι οποίοι αρνήθηκαν να τον δεχθούν. Η αντίθεση με την πρόσφατη καταστροφή της Καρχηδόνος ήταν αβάσταχτη: μια μικρή κελτιβηρική πόλη έκανε μια μεγάλη δύναμη να φαίνεται γελοία. Μόνον όταν ο Σκιπίων Αιμιλιανός, φερμένος από την Καρχηδόνα, ανέλαβε τη διοίκηση το 134 ετερματίσθη ο πόλεμος, αφού περιέκλεισε τη Νομαντία πίσω από επτά ρωμαϊκά στρατόπεδα και τείχος και την παρέδωσε στη λιμοκτονία και σε ομαδική αυτοκτονία τον επόμενο χρόνο. Στην εκστρατεία ένας νέος χιλίαρχος ονόματι Γάιος Μάριος και ένας ακόμη νεότερος Τιβέριος Γράκχος έλαβαν τις πρώτες τους ανεξάρτητες θητείες."
          },
          category: "military"
        }
      ]
    },
    {
      year: -133,
      era: {
        en: "Social Reforms",
        el: "Κοινωνικές Μεταρρυθμίσεις"
      },
      events: [
        {
          title: {
            en: "Tiberius Gracchus' reforms",
            el: "Μεταρρυθμίσεις του Τιβέριου Γράκχου"
          },
          description: {
            en: "Tiberius Gracchus proposes land reforms to help the poor, but is murdered by senators, marking the beginning of political violence.",
            el: "Ο Τιβέριος Γράκχος προτείνει αγροτικές μεταρρυθμίσεις για να βοηθήσει τους φτωχούς, αλλά δολοφονείται από συγκλητικούς, σηματοδοτώντας την αρχή της πολιτικής βίας."
          },
          extendedDescription: {
            en: "As tribune of the plebs, Tiberius Gracchus sought to redistribute portions of the public land that wealthy senators had absorbed into vast estates worked by slaves, restoring small holdings to the citizen-soldiers whose ranks were thinning. He bypassed senatorial obstruction by appealing directly to the popular assembly and deposing a fellow tribune, breaking with established convention. When he stood for an unprecedented second term, a senatorial mob led by Scipio Nasica clubbed him to death on the Capitol. The murder shattered the unwritten rule that political disputes at Rome would be settled without bloodshed and inaugurated the violent century that would destroy the Republic.",
            el: "Ως δήμαρχος των πληβείων, ο Τιβέριος Γράκχος επεδίωξε να αναδιανείμει τμήματα της δημόσιας γης που πλούσιοι συγκλητικοί είχαν ενσωματώσει σε τεράστιες εκτάσεις δουλοκαλλιεργούμενες, αποκαθιστώντας μικρές ιδιοκτησίες στους πολίτες-στρατιώτες των οποίων οι τάξεις αραίωναν. Παρέκαμψε τη συγκλητική παρακώλυση απευθυνόμενος ευθέως στη λαϊκή συνέλευση και καθαιρώντας ομόλογο δήμαρχο, σπάζοντας πάγια συμβατικότητα. Όταν διεκδίκησε άνευ προηγουμένου δεύτερη θητεία, συγκλητικός όχλος υπό τον Σκιπίωνα Νασικά τον κατακρεούργησε στον Καπιτωλίνο. Η δολοφονία διέλυσε τον άγραφο κανόνα ότι οι πολιτικές διαφορές στη Ρώμη επιλύονταν χωρίς αιματοχυσία και εγκαινίασε τον βίαιο αιώνα που θα κατέστρεφε τη Δημοκρατία."
          },
          category: "political"
        }
      ]
    },
    {
      year: -121,
      era: {
        en: "Social Reforms",
        el: "Κοινωνικές Μεταρρυθμίσεις"
      },
      events: [
        {
          title: {
            en: "Gaius Gracchus' reforms",
            el: "Μεταρρυθμίσεις του Γάιου Γράκχου"
          },
          description: {
            en: "Gaius Gracchus continues his brother's reforms but is also killed, further destabilizing the Republic.",
            el: "Ο Γάιος Γράκχος συνεχίζει τις μεταρρυθμίσεις του αδελφού του αλλά επίσης σκοτώνεται, αποσταθεροποιώντας ακόμη περισσότερο τη Δημοκρατία."
          },
          extendedDescription: {
            en: "More radical than his brother, Gaius used the tribunate to push through subsidized grain for urban citizens, judicial reform that empowered the equestrian order against senatorial corruption, and proposals to extend citizenship to Rome's Italian allies. The Senate responded with the first issuance of the senatus consultum ultimum, an emergency decree authorizing the consul Lucius Opimius to use force. Some three thousand of Gaius's supporters were killed in the resulting violence, and Gaius himself died, reportedly by his own hand. His career deepened the polarization of Roman politics into populares, who appealed to the people, and optimates, who defended senatorial authority.",
            el: "Πιο ριζοσπαστικός από τον αδελφό του, ο Γάιος χρησιμοποίησε τη δημαρχία για να ψηφίσει επιδοτούμενο σιτηρέσιο για τους αστούς πολίτες, δικαστική μεταρρύθμιση που ενίσχυε την ιπποτική τάξη έναντι της συγκλητικής διαφθοράς και προτάσεις επέκτασης της πολιτείας στους ιταλούς συμμάχους της Ρώμης. Η Σύγκλητος απάντησε με την πρώτη έκδοση του senatus consultum ultimum, έκτακτου διατάγματος που εξουσιοδοτούσε τον ύπατο Λεύκιο Οπίμιο να χρησιμοποιήσει βία. Περίπου τρεις χιλιάδες οπαδοί του Γαΐου σκοτώθηκαν στη βία που ακολούθησε, ενώ ο ίδιος ο Γάιος βρήκε τον θάνατο, λέγεται από το ίδιο του το χέρι. Η πορεία του βάθυνε την πόλωση της ρωμαϊκής πολιτικής σε populares, που απευθύνονταν στον λαό, και optimates, που υπερασπίζονταν τη συγκλητική εξουσία."
          },
          category: "political"
        }
      ]
    },
    {
      year: -111,
      era: {
        en: "Jugurthine War",
        el: "Πόλεμος του Ιουγούρθα"
      },
      events: [
        {
          title: {
            en: "Jugurthine War begins",
            el: "Έναρξη του Πολέμου του Ιουγούρθα"
          },
          description: {
            en: "Rome declares war on the Numidian king Jugurtha after his murder of his cousin Adherbal at Cirta, exposing the depth of senatorial corruption and the weakness of the Republic's armies.",
            el: "Η Ρώμη κηρύσσει τον πόλεμο στον Νουμίδα βασιλιά Ιουγούρθα μετά τη δολοφονία του εξαδέλφου του Αδέρβα στην Κίρτα, αποκαλύπτοντας το βάθος της συγκλητικής διαφθοράς και την αδυναμία των στρατευμάτων της Δημοκρατίας."
          },
          extendedDescription: {
            en: "On the death of Micipsa, his uncle and adoptive father, Jugurtha had divided the Numidian kingdom with his cousins Hiempsal and Adherbal, then killed the first and besieged the second in Cirta until the Italian merchants of the city, intervening, were massacred along with him. The killing of Italians forced senatorial action where bribery had previously paralysed it. Sallust's monograph, the principal source, treats the war as a moral parable in which the venal Roman elite repeatedly accepted Numidian gold — Jugurtha himself reportedly remarked, on leaving Rome, that the city was for sale and would soon find a buyer. Successive armies under Calpurnius Bestia and Spurius Albinus were bought off or routed in the desert; only the consulship of Quintus Caecilius Metellus restored discipline, and the war was finally won by his legate Gaius Marius, who stood for the consulship from camp and brought Jugurtha to Rome in chains in 105. The campaign launched the careers of both Marius and his quaestor Lucius Cornelius Sulla, and made plain that the army was now an instrument open to capture by ambitious individuals against the Senate.",
            el: "Με τον θάνατο του Μικίψα, θείου και θετού πατέρα του, ο Ιουγούρθας είχε διαμοιράσει το νουμιδικό βασίλειο με τους εξαδέλφους του Ιεμψάλη και Αδέρβα, εφόνευσε τον πρώτο και πολιόρκησε τον δεύτερο στην Κίρτα έως ότου οι Ιταλοί έμποροι της πόλεως, παρεμβαίνοντας, εσφαγιάσθησαν μαζί του. Η σφαγή Ιταλών εξανάγκασε τη Σύγκλητο σε δράση εκεί όπου η δωροδοκία την είχε έως τότε παραλύσει. Η μονογραφία του Σαλλούστιου, η κύρια πηγή, αντιμετωπίζει τον πόλεμο ως ηθικήν παραβολή στην οποία η εξωνημένη ρωμαϊκή ελίτ δέχεται επανειλημμένως νουμιδικό χρυσό — ο ίδιος ο Ιουγούρθας λέγεται ότι παρατήρησε φεύγοντας από τη Ρώμη ότι η πόλη ήταν προς πώλησιν και θα έβρισκε σύντομα αγοραστή. Διαδοχικές στρατιές υπό τον Καλπούρνιο Βηστία και τον Σπούριο Άλβινο εξωνήθησαν ή κατατροπώθησαν στην έρημο· μόνον η υπατεία του Κοΐντου Καικιλίου Μετέλλου αποκατέστησε την πειθαρχία, και ο πόλεμος κερδήθηκε τελικώς από τον υπατικό του πρεσβευτή Γάιο Μάριο, ο οποίος έθεσε υποψηφιότητα από το στρατόπεδο και έφερε τον Ιουγούρθα δέσμιο στη Ρώμη το 105. Η εκστρατεία εγκαινίασε τις σταδιοδρομίες τόσο του Μαρίου όσο και του ταμία του Λευκίου Κορνηλίου Σύλλα, και κατέστησε σαφές ότι ο στρατός ήταν πλέον εργαλείο διαθέσιμο σε φιλόδοξα άτομα εναντίον της Συγκλήτου."
          },
          category: "political"
        }
      ]
    },
    {
      year: -107,
      era: {
        en: "Military Reform",
        el: "Στρατιωτική Μεταρρύθμιση"
      },
      events: [
        {
          title: {
            en: "Marian reforms",
            el: "Οι μεταρρυθμίσεις του Μάριου"
          },
          description: {
            en: "Gaius Marius reforms the Roman army by recruiting landless citizens, transforming the legions into a more professional fighting force.",
            el: "Ο Γάιος Μάριος μεταρρυθμίζει τον ρωμαϊκό στρατό στρατολογώντας ακτήμονες πολίτες, μετατρέποντας τις λεγεώνες σε πιο επαγγελματική πολεμική δύναμη."
          },
          extendedDescription: {
            en: "Faced with manpower shortages during the Jugurthine War in Numidia and the looming threat of the Cimbri and Teutones in the north, Marius abolished the property qualification for legionary service and opened the ranks to the proletarii. He standardized equipment and training, made the cohort the basic tactical unit, and adopted the eagle as the universal legionary standard. The reform created a long-service professional army, but soldiers now looked to their commander for the land grants traditionally provided by the state. This new bond between general and legions would prove a decisive instrument in the civil wars of Sulla, Caesar, and Augustus.",
            el: "Αντιμέτωπος με ελλείψεις ανθρώπινου δυναμικού κατά τον Πόλεμο του Ιουγούρθα στη Νουμιδία και την επερχόμενη απειλή των Κίμβρων και των Τευτόνων στον βορρά, ο Μάριος κατήργησε το περιουσιακό κριτήριο για την υπηρεσία στις λεγεώνες και άνοιξε τις τάξεις στους ακτήμονες. Τυποποίησε τον οπλισμό και την εκπαίδευση, καθιέρωσε τη σπείρα ως βασική τακτική μονάδα και υιοθέτησε τον αετό ως καθολικό σύμβολο των λεγεώνων. Η μεταρρύθμιση δημιούργησε μακρόχρονα επαγγελματικό στρατό, αλλά οι στρατιώτες πλέον αναζητούσαν στον στρατηγό τους τις παροχές γης που παραδοσιακά εξασφάλιζε το κράτος. Αυτός ο νέος δεσμός στρατηγού και λεγεώνων θα αποδεικνυόταν αποφασιστικό εργαλείο στους εμφύλιους πολέμους του Σύλλα, του Καίσαρα και του Αυγούστου."
          },
          category: "military"
        }
      ]
    },
    {
      year: -101,
      era: {
        en: "Cimbric War",
        el: "Πόλεμος των Κίμβρων"
      },
      events: [
        {
          title: {
            en: "Battle of Vercellae",
            el: "Η μάχη των Βερκελλών"
          },
          description: {
            en: "Marius and Catulus annihilate the Cimbri on the Raudine Plain, ending the great northern threat that had haunted Rome for more than a decade.",
            el: "Ο Μάριος και ο Κάτουλος εξολοθρεύουν τους Κίμβρους στη Ραυδινή πεδιάδα, τερματίζοντας τη μεγάλη βόρεια απειλή που είχε στοιχειώσει τη Ρώμη επί πλέον της δεκαετίας."
          },
          extendedDescription: {
            en: "The migration of the Cimbri and the Teutones from Jutland into central Europe and Gaul had inflicted a series of catastrophic defeats on Roman armies, culminating at Arausio in 105 where perhaps eighty thousand soldiers were killed in a single afternoon — a worse loss than Cannae. The Senate, abandoning constitutional scruples, returned Marius to the consulship year after year, and the new professional army he had built crushed the Teutones at Aquae Sextiae in 102. The following summer Marius and his colleague Quintus Lutatius Catulus brought the Cimbri to battle on the Raudine Plain near Vercellae in northern Italy. Plutarch records that the heat and dust favoured the Romans, that Cimbric warriors chained themselves together so that none might flee, and that the wagon laager of their wives and children became the scene of a final, terrible self-slaughter when the line broke. About sixty thousand Cimbri were killed and as many sold into slavery. Marius, hailed as the third founder of Rome after Romulus and Camillus, became consul for an unprecedented sixth time the following year — but his political destiny would prove far more troubled than his military one.",
            el: "Η μετανάστευση των Κίμβρων και των Τευτόνων από την Γιουτλάνδην εις την κεντρικήν Ευρώπην και τη Γαλατίαν είχε προξενήσει σειράν καταστροφικών ηττών εις τας ρωμαϊκάς στρατιάς, κορυφουμένη εις το Αραύσιον το 105, όπου ίσως ογδοήκοντα χιλιάδες στρατιώται εφονεύθησαν εντός ενός απογεύματος — απώλεια βαρυτέρα και αυτής των Καννών. Η Σύγκλητος, εγκαταλείπουσα τους συνταγματικούς ενδοιασμούς, επανέφερε τον Μάριον εις την υπατείαν έτος μετ' έτος, και ο νέος επαγγελματικός στρατός που είχεν οικοδομήσει συνέτριψε τους Τεύτονας εις Aquae Sextiae το 102. Το ακόλουθον θέρος, ο Μάριος και ο συνάδελφός του Κόιντος Λουτάτιος Κάτουλος συνεπλάκησαν με τους Κίμβρους εις τη Ραυδινήν πεδιάδα παρά τας Βερκέλλας εις την βόρειον Ιταλίαν. Ο Πλούταρχος αναφέρει ότι η ζέστη και η σκόνη ηυνόουν τους Ρωμαίους, ότι Κίμβροι πολεμισταί εδέθησαν αλλήλοις δια να μη φύγει ουδείς, και ότι η αμαξαποθήκη των γυναικών και τέκνων των μετετράπη εις σκηνήν τελικής, φοβεράς αυτοσφαγής όταν η γραμμή υπεχώρησε. Περίπου εξήντα χιλιάδες Κίμβροι εφονεύθησαν και ισάριθμοι επωλήθησαν εις δουλείαν. Ο Μάριος, χαιρετισθείς ως ο τρίτος κτίστης της Ρώμης μετά τον Ρωμύλον και τον Κάμιλλον, έγινεν ύπατος δι' έκτην και άνευ προηγουμένου φοράν τον επόμενον χρόνον — αλλ' η πολιτική του μοίρα θα απεδεικνύετο πολύ ταραχωδεστέρα της στρατιωτικής."
          },
          category: "military"
        }
      ]
    },
    {
      year: -88,
      era: {
        en: "Social War",
        el: "Συμμαχικός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Social War begins",
            el: "Έναρξη του Συμμαχικού Πολέμου"
          },
          description: {
            en: "Italian allies revolt against Rome, demanding citizenship rights in the Social War.",
            el: "Οι ιταλικοί σύμμαχοι επαναστατούν εναντίον της Ρώμης, απαιτώντας δικαιώματα πολιτείας στον Συμμαχικό Πόλεμο."
          },
          extendedDescription: {
            en: "For more than a century the socii had supplied much of the manpower for Rome's wars without sharing in the political rights or material rewards of citizenship. When the tribune Marcus Livius Drusus was murdered after proposing enfranchisement, the Marsi, Samnites, and other Italian peoples rose in arms, even minting their own coinage and naming their federation Italia. The fighting was savage and inconclusive on the battlefield, but Rome won the war by passing the Lex Julia and the Lex Plautia Papiria, which extended citizenship to those who laid down their arms. The conflict effectively unified the Italian peninsula as a single political community for the first time.",
            el: "Επί περισσότερο από έναν αιώνα οι socii προσέφεραν μεγάλο μέρος του ανθρώπινου δυναμικού των ρωμαϊκών πολέμων χωρίς να μοιράζονται τα πολιτικά δικαιώματα ή τα υλικά οφέλη της πολιτείας. Όταν δολοφονήθηκε ο δήμαρχος Μάρκος Λίβιος Δρούσος αφού πρότεινε την παραχώρησή τους, οι Μάρσοι, οι Σαμνίτες και άλλοι ιταλικοί λαοί ξεσηκώθηκαν με τα όπλα, κόβοντας μάλιστα δικό τους νόμισμα και ονομάζοντας την ομοσπονδία τους Italia. Οι μάχες υπήρξαν άγριες και αμφίρροπες, αλλά η Ρώμη κέρδισε τον πόλεμο ψηφίζοντας τη Lex Julia και τη Lex Plautia Papiria, που παραχωρούσαν την πολιτεία σε όσους κατέθεταν τα όπλα. Η σύγκρουση ένωσε ουσιαστικά για πρώτη φορά την ιταλική χερσόνησο σε μία πολιτική κοινότητα."
          },
          category: "military"
        }
      ]
    },
    {
      year: -82,
      era: {
        en: "Civil Wars",
        el: "Εμφύλιοι Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "Sulla becomes dictator",
            el: "Ο Σύλλας γίνεται δικτάτορας"
          },
          description: {
            en: "Lucius Cornelius Sulla becomes dictator of Rome after defeating his opponents in civil war, beginning a new era of personal rule.",
            el: "Ο Λεύκιος Κορνήλιος Σύλλας γίνεται δικτάτορας της Ρώμης αφού νικά τους αντιπάλους του στον εμφύλιο πόλεμο, εγκαινιάζοντας μια νέα εποχή προσωπικής εξουσίας."
          },
          extendedDescription: {
            en: "After campaigns against Mithridates of Pontus, Sulla returned to Italy and seized Rome by force from the Marian faction, becoming the first Roman to march his legions on the city. He had himself appointed dictator without time limit, an extraordinary revival of the old emergency office, and used his power to publish proscription lists in which thousands of enemies were murdered and their property confiscated. His constitutional reforms strengthened the Senate, weakened the tribunes, and sought to entrench optimate dominance for a generation. Sulla's voluntary abdication in 79 BC astonished contemporaries, but his precedent of seizing power through arms would haunt the Republic until its end.",
            el: "Έπειτα από εκστρατείες κατά του Μιθριδάτη του Πόντου, ο Σύλλας επέστρεψε στην Ιταλία και κατέλαβε τη Ρώμη με τη βία από τη μαριανή παράταξη, γινόμενος ο πρώτος Ρωμαίος που οδήγησε τις λεγεώνες του εναντίον της πόλης. Αναδείχθηκε δικτάτορας χωρίς χρονικό όριο, εξαιρετική αναβίωση του παλαιού έκτακτου αξιώματος, και χρησιμοποίησε την εξουσία του για να εκδώσει τους πίνακες των διαγραφών, στους οποίους χιλιάδες αντίπαλοι δολοφονήθηκαν και οι περιουσίες τους δημεύθηκαν. Οι συνταγματικές μεταρρυθμίσεις του ενίσχυσαν τη Σύγκλητο, αποδυνάμωσαν τους δημάρχους και επιχείρησαν να εδραιώσουν τη συντηρητική κυριαρχία για μια γενιά. Η εθελοντική αποχώρησή του το 79 π.Χ. εξέπληξε τους συγχρόνους, αλλά το προηγούμενο της κατάληψης της εξουσίας με τα όπλα θα στοίχειωνε τη Δημοκρατία ως το τέλος της."
          },
          category: "political"
        }
      ]
    },
    {
      year: -73,
      era: {
        en: "Slave Revolt",
        el: "Εξέγερση Δούλων"
      },
      events: [
        {
          title: {
            en: "Spartacus' rebellion",
            el: "Εξέγερση του Σπάρτακου"
          },
          description: {
            en: "Spartacus leads the largest slave rebellion in Roman history, threatening the Republic before being defeated.",
            el: "Ο Σπάρτακος ηγείται της μεγαλύτερης εξέγερσης δούλων στη ρωμαϊκή ιστορία, απειλώντας τη Δημοκρατία πριν τελικά ηττηθεί."
          },
          extendedDescription: {
            en: "A Thracian by birth and a former auxiliary turned gladiator, Spartacus broke out of Lentulus Batiatus' training school at Capua with seventy-eight comrades and took refuge on Mount Vesuvius. The numbers swelled as runaway slaves and dispossessed Italians joined: at its height the rebel army was perhaps seventy thousand strong, organized along Roman lines but divided in counsel between Spartacus, Crixus, and Oenomaus. Over two years they smashed legionary forces in southern Italy and marched to the Alps before turning back, possibly because their followers refused to disperse. The revolt exposed the fragility of Italy's slave-based agriculture and prompted lasting Roman fear of servile uprising.",
            el: "Θράκας στην καταγωγή και πρώην βοηθητικός που εξελίχθηκε σε μονομάχο, ο Σπάρτακος δραπέτευσε από τη σχολή του Λέντλου Βατιάτου στην Καπύη με εβδομήντα οκτώ συντρόφους και κατέφυγε στο όρος Βεζούβιος. Οι αριθμοί διογκώθηκαν καθώς δραπέτες δούλοι και απελεύθεροι Ιταλοί προσχώρησαν: στην ακμή του ο επαναστατικός στρατός αριθμούσε ίσως εβδομήντα χιλιάδες άνδρες, οργανωμένος κατά ρωμαϊκό πρότυπο αλλά διχασμένος ως προς την αρχηγία ανάμεσα στον Σπάρτακο, τον Κρίξο και τον Οινόμαο. Σε δύο χρόνια συνέτριψαν λεγεωνάριες δυνάμεις στη νότια Ιταλία και προέλασαν προς τις Άλπεις προτού στραφούν πίσω, ενδεχομένως επειδή οι ακόλουθοί τους αρνήθηκαν να διασκορπιστούν. Η εξέγερση αποκάλυψε την ευθραυστότητα της δουλοκτητικής γεωργίας της Ιταλίας και προκάλεσε διαρκή ρωμαϊκό φόβο για δουλικές εξεγέρσεις."
          },
          category: "military"
        }
      ]
    },
    {
      year: -71,
      era: {
        en: "Slave Revolt",
        el: "Εξέγερση Δούλων"
      },
      events: [
        {
          title: {
            en: "Defeat of Spartacus",
            el: "Ήττα του Σπάρτακου"
          },
          description: {
            en: "Marcus Licinius Crassus defeats Spartacus and crucifies 6,000 survivors along the Appian Way as a warning.",
            el: "Ο Μάρκος Λικίνιος Κράσσος νικά τον Σπάρτακο και σταυρώνει 6.000 επιζώντες κατά μήκος της Αππίας Οδού ως παραδειγματισμό."
          },
          extendedDescription: {
            en: "Granted extraordinary command of eight legions, Crassus restored discipline by reviving the ancient punishment of decimation, then fortified the toe of Italy with a wall to bottle Spartacus' army at Bruttium. After his sea passage to Sicily fell through, Spartacus broke out and was finally cornered on the river Silarus. He was killed in the front rank, his body never identified. About six thousand prisoners were crucified along the 200-kilometer Via Appia from Capua to Rome — an exemplary horror that lasted for years. Pompey, returning from Spain, mopped up survivors and claimed credit; the personal rivalry that resulted shaped late Republican politics, ultimately driving Caesar's First Triumvirate.",
            el: "Λαμβάνοντας έκτακτη διοίκηση οκτώ λεγεώνων, ο Κράσσος αποκατέστησε την πειθαρχία αναβιώνοντας την αρχαία ποινή του δεκατισμού και έπειτα οχύρωσε τη μύτη της Ιταλίας με τείχος για να περιορίσει τον στρατό του Σπάρτακου στο Βρούτιο. Μετά την αποτυχημένη απόπειρα διέλευσης στη Σικελία, ο Σπάρτακος διέρρηξε τον αποκλεισμό και τελικά παγιδεύτηκε στον Σιλάρι ποταμό. Σκοτώθηκε στην πρώτη γραμμή, και το σώμα του ποτέ δεν αναγνωρίστηκε. Περίπου έξι χιλιάδες αιχμάλωτοι σταυρώθηκαν κατά μήκος της Αππίας Οδού των 200 χιλιομέτρων από την Καπύη ως τη Ρώμη — παραδειγματική φρίκη που διατηρήθηκε επί χρόνια. Ο Πομπήιος, επιστρέφοντας από την Ισπανία, εξάλειψε τους επιζώντες και απαίτησε τα εύσημα· η προσωπική αντιπαλότητα που προέκυψε διαμόρφωσε την πολιτική της ύστερης Δημοκρατίας, οδηγώντας τελικά στην Πρώτη Τριανδρία του Καίσαρα."
          },
          category: "military"
        }
      ]
    },
    {
      year: -63,
      era: {
        en: "Catilinarian Conspiracy",
        el: "Συνωμοσία του Κατιλίνα"
      },
      events: [
        {
          title: {
            en: "Catilinarian Conspiracy",
            el: "Η Συνωμοσία του Κατιλίνα"
          },
          description: {
            en: "Cicero, as consul, exposes Catiline's plot to seize Rome by armed insurrection and executes its ringleaders without trial — a triumph that haunts him for the rest of his life.",
            el: "Ο Κικέρων, ως ύπατος, αποκαλύπτει το σχέδιο του Κατιλίνα να καταλάβει τη Ρώμη με ένοπλη εξέγερση και εκτελεί άνευ δίκης τους ηγέτες της — θρίαμβος που θα τον βασανίζει ως το τέλος της ζωής του."
          },
          extendedDescription: {
            en: "Lucius Sergius Catilina, an impoverished patrician who had twice failed to win the consulship, gathered round him a coalition of indebted veterans of Sulla, ruined nobles and dispossessed Italians, and laid plans for armed insurrection in the city while a separate force gathered in Etruria under the Sullan veteran Gaius Manlius. The new consul Marcus Tullius Cicero learned of the plot through the courtesan Fulvia and unmasked it in the Senate with the speech that begins 'How long, O Catilina, will you abuse our patience?'. Catiline fled to his army; the urban conspirators, betrayed by Allobrogian envoys whom they had tried to recruit, were arrested and, after a debate in which Caesar urged life imprisonment and Cato execution, were strangled in the Tullianum at the consul's order. Catiline himself fell at Pistoria the next January, fighting at the head of his men. Cicero called himself the saviour of the Republic; his political enemies, eventually led by Clodius, would prosecute him for the executions and drive him into exile, and the question of whether the senatus consultum ultimum could override the citizen's right to trial would echo through the Republic's last years.",
            el: "Ο Λεύκιος Σέργιος Κατιλίνας, ένας εξαθλιωμένος πατρίκιος που είχε αποτύχει δις να κερδίσει την υπατεία, συγκέντρωσε γύρω του συνασπισμό κατάχρεων βετεράνων του Σύλλα, καταστραμμένων ευγενών και εκτοπισμένων Ιταλών, και κατέστρωσε σχέδια ένοπλης εξέγερσης στην πόλη ενώ χωριστή δύναμη συγκεντρωνόταν στην Ετρουρία υπό τον Συλλανό βετεράνο Γάιο Μάνλιο. Ο νέος ύπατος Μάρκος Τύλλιος Κικέρων πληροφορήθηκε το σχέδιο μέσω της εταίρας Φουλβίας και το αποκάλυψε στη Σύγκλητο με τον λόγο που αρχίζει «Quousque tandem abutere, Catilina, patientia nostra?». Ο Κατιλίνας έφυγε στον στρατό του· οι αστικοί συνωμότες, προδομένοι από Αλλοβριγικούς πρέσβεις που είχαν επιχειρήσει να στρατολογήσουν, συνελήφθησαν και, μετά από συζήτηση κατά την οποία ο Καίσαρας πρότεινε ισόβια κάθειρξη και ο Κάτων εκτέλεση, στραγγαλίστηκαν στο Τυλλιανό κατά διαταγή του υπάτου. Ο ίδιος ο Κατιλίνας έπεσε στο Πιστώριο τον επόμενο Ιανουάριο, μαχόμενος επικεφαλής των ανδρών του. Ο Κικέρων αυτοαποκαλέστηκε σωτήρας της Δημοκρατίας· οι πολιτικοί του εχθροί, με επικεφαλής τελικά τον Κλώδιο, θα τον δίωκαν για τις εκτελέσεις και θα τον οδηγούσαν στην εξορία, και το ερώτημα αν το senatus consultum ultimum μπορούσε να ακυρώσει το δικαίωμα του πολίτη σε δίκη θα αντηχούσε στα τελευταία χρόνια της Δημοκρατίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: -60,
      era: {
        en: "First Triumvirate",
        el: "Πρώτη Τριανδρία"
      },
      events: [
        {
          title: {
            en: "First Triumvirate formed",
            el: "Σχηματισμός της Πρώτης Τριανδρίας"
          },
          description: {
            en: "Julius Caesar, Pompey, and Crassus form the First Triumvirate, a political alliance that dominates Roman politics.",
            el: "Ο Ιούλιος Καίσαρας, ο Πομπήιος και ο Κράσσος σχηματίζουν την Πρώτη Τριανδρία, μια πολιτική συμμαχία που κυριαρχεί στη ρωμαϊκή πολιτική."
          },
          extendedDescription: {
            en: "The arrangement was no formal magistracy but a private bargain — what Suetonius later called 'the conspiracy of the three' — by which Caesar would secure Pompey's veterans land grants and ratify his eastern settlement, Crassus would obtain favorable terms for the publicani who had backed him, and the consular elections of the next year would be guaranteed for Caesar. Sealed by Pompey's marriage to Caesar's daughter Julia, the pact effectively neutered the Senate; Cato's resistance was overrun, and Cicero went into exile. Renewed at Luca in 56 BC, the alliance survived only as long as the personal bonds held. Crassus' death at Carrhae in 53 and Julia's earlier death in childbirth removed both restraints, leaving Caesar and Pompey to confront each other.",
            el: "Η συμφωνία δεν ήταν τυπικό αξίωμα, αλλά ιδιωτική συναλλαγή — ό,τι ο Σουητώνιος αποκάλεσε αργότερα 'τη συνωμοσία των τριών' — μέσω της οποίας ο Καίσαρας θα εξασφάλιζε γαιοπρόσοδο για τους βετεράνους του Πομπηίου και θα κύρωνε την ανατολική του ρύθμιση, ο Κράσσος θα αποκτούσε ευνοϊκούς όρους για τους πουμπλικάνους που τον υποστήριζαν και οι υπατικές εκλογές του επόμενου έτους θα ήταν εξασφαλισμένες για τον Καίσαρα. Επικυρωμένη με τον γάμο του Πομπηίου με την κόρη του Καίσαρα Ιουλία, η συμφωνία στην ουσία ευνούχισε τη Σύγκλητο· η αντίσταση του Κάτωνος συντρίβηκε, και ο Κικέρων κατέφυγε στην εξορία. Ανανεώθηκε στη Λούκα το 56 π.Χ. αλλά η συμμαχία διατηρήθηκε όσο κρατούσαν οι προσωπικοί δεσμοί. Ο θάνατος του Κράσσου στις Κάρρες το 53 και ο πρότερος θάνατος της Ιουλίας στον τοκετό άρανε αμφότερους τους χαλινούς, αφήνοντας Καίσαρα και Πομπήιο αντιμέτωπους."
          },
          category: "political"
        }
      ]
    },
    {
      year: -58,
      era: {
        en: "Gallic Wars",
        el: "Γαλατικοί Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "Gallic Wars begin",
            el: "Έναρξη των Γαλατικών Πολέμων"
          },
          description: {
            en: "Julius Caesar begins his conquest of Gaul, which will expand Roman territory and make him immensely wealthy and popular.",
            el: "Ο Ιούλιος Καίσαρας αρχίζει την κατάκτηση της Γαλατίας, η οποία θα επεκτείνει τη ρωμαϊκή επικράτεια και θα τον κάνει εξαιρετικά πλούσιο και δημοφιλή."
          },
          extendedDescription: {
            en: "Granted a five-year proconsular command over Cisalpine and Transalpine Gaul as well as Illyricum, Caesar used the migration of the Helvetii as pretext to lead his legions north of the Roman frontier. Over eight campaigning seasons he reduced the entire territory between the Rhine and the Atlantic, repelled two German incursions, and twice crossed the Channel to Britain — exploits he immortalized in his own crisp third-person Commentaries on the Gallic War. The conclusive victory came at Alesia in 52 BC, where Vercingetorix's confederation was crushed by a double siege wall. Roman estimates of one million Gauls killed and another million enslaved are exaggerated but indicate the campaign's scale. Gaul's silver, slaves, and grateful veterans gave Caesar the resources for the civil war.",
            el: "Έχοντας λάβει πενταετή ανθυπατική διοίκηση επί της Εντεύθεν και Πέραν Άλπεων Γαλατίας καθώς και του Ιλλυρικού, ο Καίσαρας χρησιμοποίησε τη μετανάστευση των Ελβετίων ως πρόσχημα για να οδηγήσει τις λεγεώνες του βόρεια του ρωμαϊκού συνόρου. Σε οκτώ εκστρατευτικές περιόδους υπέταξε ολόκληρο το έδαφος ανάμεσα στον Ρήνο και στον Ατλαντικό, απέκρουσε δύο γερμανικές επιδρομές και διέσχισε δύο φορές τη Μάγχη προς τη Βρετανία — κατορθώματα που απαθανάτισε στα δικά του λακωνικά Υπομνήματα του Γαλατικού Πολέμου σε τρίτο πρόσωπο. Η τελική νίκη ήλθε στην Αλέσια το 52 π.Χ., όπου η συνομοσπονδία του Βερκινγετόριγος συνετρίβη από διπλό περιτείχισμα. Οι ρωμαϊκές εκτιμήσεις περί ενός εκατομμυρίου σκοτωμένων και ισάριθμων υποδουλωμένων Γαλατών είναι υπερβολικές αλλά αποκαλύπτουν την κλίμακα της εκστρατείας. Ο άργυρος, οι δούλοι και οι ευγνώμονες βετεράνοι της Γαλατίας έδωσαν στον Καίσαρα τους πόρους για τον εμφύλιο πόλεμο."
          },
          category: "military"
        }
      ]
    },
    {
      year: -49,
      era: {
        en: "Civil War",
        el: "Εμφύλιος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Caesar crosses the Rubicon",
            el: "Ο Καίσαρας διασχίζει τον Ρουβίκωνα"
          },
          description: {
            en: "Caesar crosses the Rubicon River with his army, defying the Senate and beginning the civil war that will end the Republic.",
            el: "Ο Καίσαρας διασχίζει τον ποταμό Ρουβίκωνα με τον στρατό του, αψηφώντας τη Σύγκλητο και αρχίζοντας τον εμφύλιο πόλεμο που θα τερματίσει τη Δημοκρατία."
          },
          extendedDescription: {
            en: "The narrow Rubicon marked the legal frontier of Italy proper, beyond which a Roman magistrate could not bring his legions without committing treason. The Senate, urged by Pompey and Cato, had ordered Caesar to lay down his command before standing for a second consulship; he chose instead to lead the Thirteenth Legion across the river. Suetonius records the words traditionally attributed to him at the crossing: 'Alea iacta est' — 'the die is cast.' Within sixty days he was master of Italy, Pompey having evacuated by sea to Greece. The phrase has since become proverbial for any irrevocable step, and the action ended four centuries of senatorial primacy in Roman government.",
            el: "Ο στενός Ρουβίκων αποτελούσε το νόμιμο σύνορο της κυρίως Ιταλίας, πέρα από το οποίο Ρωμαίος αξιωματούχος δεν μπορούσε να φέρει τις λεγεώνες του χωρίς να διαπράξει εσχάτη προδοσία. Η Σύγκλητος, παρακινημένη από τον Πομπήιο και τον Κάτωνα, είχε διατάξει τον Καίσαρα να αποθέσει τη διοίκησή του προτού θέσει υποψηφιότητα για δεύτερη υπατεία· εκείνος επέλεξε αντ' αυτού να διοικήσει την Δεκάτη Τρίτη Λεγεώνα στη διέλευση του ποταμού. Ο Σουητώνιος καταγράφει τα λόγια που παραδοσιακά του αποδίδονται στη διάβαση: 'Alea iacta est' — 'ερρίφθη ο κύβος'. Μέσα σε εξήντα ημέρες ήταν κύριος της Ιταλίας, με τον Πομπήιο να έχει αποπλεύσει προς την Ελλάδα. Η φράση έκτοτε έχει γίνει παροιμιώδης για κάθε αμετάκλητο βήμα, και η πράξη τερμάτισε τέσσερις αιώνες υπεροχής της Συγκλήτου στη ρωμαϊκή διακυβέρνηση."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Retrato_de_Julio_César_(26724093101).jpg?width=1024",
            alt: {
              en: "Bust of Julius Caesar (Tusculum portrait)",
              el: "Προτομή του Ιούλιου Καίσαρα (Πορτραίτο του Tusculum)"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: -48,
      era: {
        en: "Civil War",
        el: "Εμφύλιος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Battle of Pharsalus",
            el: "Μάχη των Φαρσάλων"
          },
          description: {
            en: "Caesar defeats Pompey at the Battle of Pharsalus, becoming the undisputed ruler of Rome.",
            el: "Ο Καίσαρας νικά τον Πομπήιο στη Μάχη των Φαρσάλων, γινόμενος ο αδιαμφισβήτητος κυρίαρχος της Ρώμης."
          },
          extendedDescription: {
            en: "On the Thessalian plain, Caesar's veterans of the Gallic War — perhaps twenty-two thousand foot and a thousand horse — confronted Pompey's larger but less seasoned army of forty-five thousand infantry and seven thousand cavalry. Anticipating that Pompey's massed cavalry on his right would attempt to envelop, Caesar concealed a fourth line of cohorts behind his right wing with orders to strike at the faces of the Pompeian horsemen with their pila. The maneuver worked spectacularly: Pompey's cavalry broke, his light infantry was cut down, and his legions were rolled up. Pompey fled the field, ultimately to Egypt, where he was murdered. Caesar, ostentatiously merciful, spared most senatorial prisoners — including Brutus.",
            el: "Στη θεσσαλική πεδιάδα, οι βετεράνοι του Καίσαρα από τον Γαλατικό Πόλεμο — ίσως είκοσι δύο χιλιάδες πεζοί και χίλιοι ιππείς — αντιμετώπισαν τον μεγαλύτερο αλλά λιγότερο έμπειρο στρατό του Πομπηίου, σαράντα πέντε χιλιάδων πεζών και επτά χιλιάδων ιππέων. Προβλέποντας ότι το πυκνό ιππικό του Πομπηίου στο δεξιό κέρας θα επιχειρούσε υπερκερωτική κίνηση, ο Καίσαρας έκρυψε τέταρτη γραμμή σπειρών πίσω από το δεξιό του κέρας με διαταγή να κτυπήσουν τα πρόσωπα των πομπηιανών ιππέων με τα πιλούμ. Ο ελιγμός πέτυχε εντυπωσιακά: το ιππικό του Πομπηίου διελύθη, οι ψιλοί κατασφάγησαν και οι λεγεώνες του ξετυλίχθηκαν. Ο Πομπήιος έφυγε από το πεδίο, καταλήγοντας στην Αίγυπτο, όπου δολοφονήθηκε. Ο Καίσαρας, με επιδεικτική επιείκεια, χάρισε τη ζωή στους περισσότερους συγκλητικούς αιχμαλώτους — μεταξύ αυτών και του Βρούτου."
          },
          category: "military",
          image: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Apollonio_di_Giovanni_-_The_Battle_of_Pharsalus_and_the_Death_of_Pompey_-_1974.394_-_Art_Institute_of_Chicago.jpg/960px-Apollonio_di_Giovanni_-_The_Battle_of_Pharsalus_and_the_Death_of_Pompey_-_1974.394_-_Art_Institute_of_Chicago.jpg",
            alt: {
              en: "Battle of Pharsalus painting",
              el: "Εικόνα της Μάχης των Φαρσάλων"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: -44,
      era: {
        en: "Assassination",
        el: "Δολοφονία"
      },
      events: [
        {
          title: {
            en: "Assassination of Julius Caesar",
            el: "Δολοφονία του Ιούλιου Καίσαρα"
          },
          description: {
            en: "Julius Caesar is assassinated by a group of senators led by Brutus and Cassius, plunging Rome into another civil war.",
            el: "Ο Ιούλιος Καίσαρας δολοφονείται από ομάδα συγκλητικών με επικεφαλής τον Βρούτο και τον Κάσσιο, βυθίζοντας τη Ρώμη σε έναν ακόμη εμφύλιο πόλεμο."
          },
          extendedDescription: {
            en: "Made dictator perpetuo a month earlier, Caesar's monarchical drift — refusal to rise before the Senate, gold statues, the offered diadem at the Lupercalia — had alienated even those he had pardoned after Pharsalus. Some sixty senators conspired under the leadership of Marcus Brutus and Gaius Cassius. On the Ides of March (15 March 44 BC) they fell on him in the portico attached to the Theatre of Pompey, stabbing him twenty-three times. Plutarch records the dying words 'καί σύ, τέκνον' — 'you too, child' — addressed to Brutus, the source of Shakespeare's 'Et tu, Brute.' The killers expected the Republic to revive automatically; instead the people mourned, Antony's funeral oration roused the city, and a thirteen-year sequence of civil wars began.",
            el: "Κηρυγμένος δικτάτορας ισόβιος ένα μήνα νωρίτερα, η μοναρχική κλίση του Καίσαρα — άρνηση να σηκωθεί ενώπιον της Συγκλήτου, χρυσά αγάλματα, το διάδημα που του προσφέρθηκε στα Λουπερκάλια — είχε αποξενώσει ακόμη και εκείνους που είχε χαρίσει μετά τα Φάρσαλα. Περίπου εξήντα συγκλητικοί συνωμότησαν υπό την ηγεσία του Μάρκου Βρούτου και του Γάιου Κάσσιου. Στις Ειδούς του Μαρτίου (15 Μαρτίου 44 π.Χ.) έπεσαν επάνω του στη στοά που ήταν προσαρτημένη στο Θέατρο του Πομπηίου, μαχαιρώνοντάς τον είκοσι τρεις φορές. Ο Πλούταρχος καταγράφει τα ετοιμοθάνατα λόγια 'και σύ, τέκνον' απευθυνόμενα στον Βρούτο, πηγή του σαιξπηρικού 'Et tu, Brute'. Οι δολοφόνοι ανέμεναν αυτόματη αναβίωση της Δημοκρατίας· αντ' αυτής, ο λαός θρήνησε, ο επικήδειος του Αντωνίου αναστάτωσε την πόλη και ξεκίνησε δεκατριετής ακολουθία εμφυλίων πολέμων."
          },
          category: "political",
          image: {
            src: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Vincenzo_Camuccini%2C_The_Death_of_Julius_Caesar_%28detail%29.jpg",
            alt: {
              en: "The Death of Caesar, painting by Vincenzo Camuccini (c. 1804)",
              el: "Ο θάνατος του Καίσαρα, πίνακας του Vincenzo Camuccini (περ. 1804)"
            },
            credit: "Vincenzo Camuccini, via Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: -43,
      era: {
        en: "Second Triumvirate",
        el: "Δεύτερη Τριανδρία"
      },
      events: [
        {
          title: {
            en: "Second Triumvirate formed",
            el: "Σχηματισμός της Δεύτερης Τριανδρίας"
          },
          description: {
            en: "Octavian, Mark Antony, and Lepidus form the Second Triumvirate to defeat Caesar's assassins and rule Rome.",
            el: "Ο Οκταβιανός, ο Μάρκος Αντώνιος και ο Λέπιδος σχηματίζουν τη Δεύτερη Τριανδρία για να νικήσουν τους δολοφόνους του Καίσαρα και να κυβερνήσουν τη Ρώμη."
          },
          extendedDescription: {
            en: "Unlike its informal predecessor, the Second Triumvirate was constituted as a five-year magistracy by the lex Titia, granting the three men full powers 'to set the Republic in order.' They began with proscriptions in the Sullan style: lists of three hundred senators and two thousand knights condemned to death and confiscation, with rewards for informers and slave-killers. Cicero, whose Philippics had assailed Antony, was hunted down and his head and hands nailed to the rostra. The wealth seized financed the campaign against Brutus and Cassius. The triumvirs divided the empire — Antony took the East, Octavian the West, Lepidus Africa — but mutual rivalry would soon reduce the partnership to two and then to one.",
            el: "Αντίθετα από την ανεπίσημη προκάτοχό της, η Δεύτερη Τριανδρία συγκροτήθηκε ως πενταετές αξίωμα με τη lex Titia, που έδινε στους τρεις πλήρεις εξουσίες 'για να αποκαταστήσουν τη Δημοκρατία'. Άρχισαν με προγραφές κατά το συλλιανό πρότυπο: κατάλογοι τριακοσίων συγκλητικών και δύο χιλιάδων ιππέων καταδικασμένων σε θάνατο και δήμευση, με αμοιβές για καταδότες και δολοφόνους-δούλους. Ο Κικέρων, του οποίου οι Φιλιππικοί είχαν πλήξει τον Αντώνιο, καταδιώχθηκε και η κεφαλή και τα χέρια του καρφώθηκαν στους εμβόλους. Ο πλούτος που δημεύθηκε χρηματοδότησε την εκστρατεία εναντίον του Βρούτου και του Κάσσιου. Οι τριανδροί διένειμαν την αυτοκρατορία — ο Αντώνιος πήρε την Ανατολή, ο Οκταβιανός τη Δύση, ο Λέπιδος την Αφρική — αλλά η αμοιβαία αντιπαλότητα θα συρρίκνωνε σύντομα τη συνεταιρική σχέση σε δύο, και έπειτα σε έναν."
          },
          category: "political"
        }
      ]
    },
    {
      year: -42,
      era: {
        en: "Civil War",
        el: "Εμφύλιος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Battle of Philippi",
            el: "Μάχη των Φιλίππων"
          },
          description: {
            en: "The forces of the Second Triumvirate defeat Brutus and Cassius, avenging Caesar's death.",
            el: "Οι δυνάμεις της Δεύτερης Τριανδρίας νικούν τον Βρούτο και τον Κάσσιο, εκδικούμενες τον θάνατο του Καίσαρα."
          },
          extendedDescription: {
            en: "On the plain east of Philippi in Macedonia, two engagements were fought three weeks apart. In the first, Antony broke Cassius' line; the latter, mistakenly believing Brutus also defeated, ordered his slave to kill him. Brutus had in fact overrun Octavian's camp. In the second battle Antony and Octavian's combined forces shattered Brutus' army; Brutus, finding his cause ruined, fell on his sword. Tradition has him quoting a line from Euripides as he died. Philippi finished the senatorial Republican faction as a military force; the surviving Optimates joined the camps of either triumvir. Octavian's later propaganda would treat the campaign as the moment Caesar's deification was vindicated and the new order legitimized.",
            el: "Στην πεδιάδα ανατολικά των Φιλίππων στη Μακεδονία, δύο μάχες δόθηκαν με τρεις εβδομάδες απόσταση. Στην πρώτη, ο Αντώνιος συνέτριψε τη γραμμή του Κάσσιου· εκείνος, νομίζοντας λανθασμένα ότι και ο Βρούτος είχε ηττηθεί, διέταξε τον δούλο του να τον σκοτώσει. Στην πραγματικότητα ο Βρούτος είχε καταλάβει το στρατόπεδο του Οκταβιανού. Στη δεύτερη μάχη οι ενωμένες δυνάμεις του Αντωνίου και του Οκταβιανού συνέτριψαν τον στρατό του Βρούτου· ο Βρούτος, βλέποντας την υπόθεσή του χαμένη, έπεσε στο ξίφος του. Η παράδοση τον φέρει να απαγγέλλει στίχο του Ευριπίδη πεθαίνοντας. Οι Φίλιπποι τερμάτισαν τη συγκλητική ρεπουμπλικανική παράταξη ως στρατιωτική δύναμη· οι επιζώντες Οπτιμάτες προσχώρησαν στα στρατόπεδα των δύο τριανδρών. Η μεταγενέστερη προπαγάνδα του Οκταβιανού θα παρουσίαζε την εκστρατεία ως τη στιγμή της επιβεβαίωσης της θεοποίησης του Καίσαρα και της νομιμοποίησης της νέας τάξης."
          },
          category: "military"
        }
      ]
    },
    {
      year: -31,
      era: {
        en: "End of the Republic",
        el: "Τέλος της Δημοκρατίας"
      },
      events: [
        {
          title: {
            en: "Battle of Actium",
            el: "Ναυμαχία του Ακτίου"
          },
          description: {
            en: "Octavian defeats Mark Antony and Cleopatra at the Battle of Actium, ending the civil wars and the Roman Republic.",
            el: "Ο Οκταβιανός νικά τον Μάρκο Αντώνιο και την Κλεοπάτρα στη Ναυμαχία του Ακτίου, τερματίζοντας τους εμφύλιους πολέμους και τη Ρωμαϊκή Δημοκρατία."
          },
          extendedDescription: {
            en: "Octavian's loyal admiral Marcus Vipsanius Agrippa had spent the previous year cutting Antony's supply lines along the western Greek coast, eventually penning his fleet within the Ambracian Gulf. When Antony broke out, his heavier galleys were outmaneuvered by Agrippa's lighter Liburnian ships. Cleopatra's Egyptian squadron pulled away under sail; Antony followed her with a few vessels, and the rest of his fleet surrendered after burning. The land army gave up a week later. The victory left Octavian sole master of the Roman world. Egypt was annexed, Cleopatra and Antony killed themselves the following summer, and Octavian returned to Rome to receive in 27 BC the unprecedented honors that converted the Republic into a principate.",
            el: "Ο πιστός ναύαρχος του Οκταβιανού, ο Μάρκος Βιψάνιος Αγρίππας, είχε αφιερώσει το προηγούμενο έτος αποκόπτοντας τις γραμμές ανεφοδιασμού του Αντωνίου κατά μήκος της δυτικής ελληνικής ακτής, παγιδεύοντας τελικά τον στόλο του στον Αμβρακικό κόλπο. Όταν ο Αντώνιος βγήκε από αυτόν, οι βαρύτερες γαλέρες του ξεπεράστηκαν στους ελιγμούς από τα ελαφρύτερα λιβυρνικά πλοία του Αγρίππα. Η αιγυπτιακή μοίρα της Κλεοπάτρας απέπλευσε με πανί· ο Αντώνιος την ακολούθησε με λίγα πλοία, και ο υπόλοιπος στόλος παραδόθηκε αφού πυρπολήθηκε. Ο χερσαίος στρατός παραδόθηκε μία εβδομάδα αργότερα. Η νίκη άφησε τον Οκταβιανό μοναδικό κύριο του ρωμαϊκού κόσμου. Η Αίγυπτος προσαρτήθηκε, ο Αντώνιος και η Κλεοπάτρα αυτοκτόνησαν το επόμενο καλοκαίρι, και ο Οκταβιανός επέστρεψε στη Ρώμη για να λάβει το 27 π.Χ. τις πρωτόγνωρες τιμές που μεταμόρφωσαν τη Δημοκρατία σε ηγεμονία."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Castro_Battle_of_Actium.jpg?width=1024",
            alt: {
              en: "The Battle of Actium, painting by Lorenzo A. Castro (1672)",
              el: "Η Ναυμαχία του Ακτίου, πίνακας του Lorenzo A. Castro (1672)"
            },
            credit: "Lorenzo A. Castro, via Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: -27,
      era: {
        en: "Roman Empire",
        el: "Ρωμαϊκή Αυτοκρατορία"
      },
      events: [
        {
          title: {
            en: "Augustus becomes Emperor",
            el: "Ο Αύγουστος γίνεται αυτοκράτορας"
          },
          description: {
            en: "Octavian takes the title Augustus and becomes the first Roman Emperor, beginning the Pax Romana.",
            el: "Ο Οκταβιανός λαμβάνει τον τίτλο του Αυγούστου και γίνεται ο πρώτος Ρωμαίος αυτοκράτορας, εγκαινιάζοντας την Pax Romana."
          },
          extendedDescription: {
            en: "In what is called the First Constitutional Settlement, Octavian formally restored the Republic to the Senate and people on 13 January, then accepted in return a ten-year proconsular command over the provinces requiring legions, the consulship, and the unprecedented honorific 'Augustus' — a religiously charged word evoking augury and increase. He never used the title rex; his preferred designation was princeps, 'first citizen.' Tribunician powers and the role of pontifex maximus would later be added piecemeal, building a monarchy under republican forms. The forty-one years of his rule established institutions, frontiers, and a peace whose memory haunted later centuries. Tacitus' epigram captured it: men accepted the new order 'so long as they kept the appearance of the old.'",
            el: "Στη λεγόμενη Πρώτη Συνταγματική Ρύθμιση, ο Οκταβιανός παρέδωσε τυπικά τη Δημοκρατία στη Σύγκλητο και τον λαό στις 13 Ιανουαρίου, και έπειτα δέχθηκε ως αντάλλαγμα δεκαετή ανθυπατική διοίκηση επί των επαρχιών που χρειάζονταν λεγεώνες, την υπατεία και τον πρωτοφανή τιμητικό τίτλο 'Αύγουστος' — λέξη φορτισμένη θρησκευτικά που παρέπεμπε στην οιωνοσκοπία και την αύξηση. Δεν χρησιμοποίησε ποτέ τον τίτλο rex· η προτιμώμενη ονομασία του ήταν princeps, 'πρώτος των πολιτών'. Οι δημαρχικές εξουσίες και ο ρόλος του pontifex maximus θα προστίθεντο αργότερα τμηματικά, οικοδομώντας μοναρχία υπό δημοκρατικές μορφές. Τα σαράντα ένα χρόνια της εξουσίας του εγκαθίδρυσαν θεσμούς, σύνορα και ειρήνη που στοίχειωσαν τους μετέπειτα αιώνες. Το επίγραμμα του Τάκιτου αποτυπώνει την κατάσταση: οι άνδρες δέχθηκαν τη νέα τάξη 'εφόσον διατηρούσε τη μορφή της παλιάς'."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Statue-Augustus.jpg?width=1024",
            alt: {
              en: "Augustus of Prima Porta, marble statue (1st century AD)",
              el: "Ο Αύγουστος της Πρίμα Πόρτα, μαρμάρινο άγαλμα (1ος αι. μ.Χ.)"
            },
            credit: "Vatican Museums, via Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 4,
      era: {
        en: "Early Empire",
        el: "Πρώιμη Αυτοκρατορία"
      },
      events: [
        {
          title: {
            en: "Death of Augustus",
            el: "Θάνατος του Αυγούστου"
          },
          description: {
            en: "Augustus dies after a 41-year reign, succeeded by Tiberius, marking the first peaceful imperial succession.",
            el: "Ο Αύγουστος πεθαίνει έπειτα από βασιλεία 41 ετών και διαδέχεται ο Τιβέριος, σηματοδοτώντας την πρώτη ειρηνική αυτοκρατορική διαδοχή."
          },
          extendedDescription: {
            en: "Augustus died at Nola in Campania on 19 August AD 14, having survived to seventy-five despite chronic ill health. Suetonius records his last words to friends gathered around — 'Have I played the role well? Then applaud as I leave the stage' — and a separate, tender farewell to Livia. The succession had been settled with characteristic care: Tiberius, his stepson and adopted heir, had already been associated in tribunician power and proconsular imperium. The Senate met in due form, deified the dead emperor, and confirmed Tiberius — although Tiberius himself, in a long charade Tacitus describes acidly, pretended reluctance. The Pax Romana entered its second generation under a new and very different ruler.",
            el: "Ο Αύγουστος πέθανε στη Νώλα της Καμπανίας στις 19 Αυγούστου του 14 μ.Χ., επιζώντας έως τα εβδομήντα πέντε παρά τη χρόνια ασθενική του υγεία. Ο Σουητώνιος καταγράφει τα τελευταία του λόγια προς τους φίλους που είχαν συγκεντρωθεί — 'Έπαιξα καλά τον ρόλο μου; Τότε χειροκροτήστε καθώς αποχωρώ από τη σκηνή' — και ξεχωριστό τρυφερό αποχαιρετισμό στη Λιβία. Η διαδοχή είχε ρυθμιστεί με τη χαρακτηριστική φροντίδα του: ο Τιβέριος, προγονός του και υιοθετημένος κληρονόμος, είχε ήδη συνδεθεί με δημαρχικές εξουσίες και ανθυπατικό imperium. Η Σύγκλητος συνεδρίασε με την τάξη, θεοποίησε τον νεκρό αυτοκράτορα και επικύρωσε τον Τιβέριο — αν και ο ίδιος ο Τιβέριος, σε μακρύ θέατρο που ο Τάκιτος περιγράφει καυστικά, προσποιήθηκε διστακτικότητα. Η Pax Romana εισήλθε στη δεύτερη γενεά της υπό νέο και πολύ διαφορετικό ηγεμόνα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 9,
      era: {
        en: "Frontier Crisis",
        el: "Κρίση των Συνόρων"
      },
      events: [
        {
          title: {
            en: "Battle of the Teutoburg Forest",
            el: "Μάχη του Τευτοβούργιου Δρυμού"
          },
          description: {
            en: "Three Roman legions are destroyed in Germany by Arminius, ending Augustus' hopes of expanding the empire deep into Germania.",
            el: "Τρεις ρωμαϊκές λεγεώνες καταστρέφονται στη Γερμανία από τον Αρμίνιο, τερματίζοντας τις ελπίδες του Αυγούστου να επεκτείνει την αυτοκρατορία βαθιά στη Γερμανία."
          },
          extendedDescription: {
            en: "The governor of the new German province, Publius Quinctilius Varus, was lured into the wooded uplands east of the Rhine by his trusted Cheruscan auxiliary commander, Arminius — a Roman citizen and equestrian who had secretly federated the German tribes against Rome. Strung out along narrow trackways in driving rain, the legions XVII, XVIII, and XIX were ambushed over three days and annihilated. Varus fell on his sword. Augustus, on hearing the news, is said to have torn his clothes and cried out in his palace: 'Quintilius Varus, give me back my legions!' The lost numerals were never reused. The Rhine became the empire's permanent northern frontier, and Germania remained beyond Roman power for the next four centuries.",
            el: "Ο διοικητής της νέας γερμανικής επαρχίας, Πόπλιος Κουϊντίλιος Ουάρος, παρασύρθηκε στα δασώδη υψίπεδα ανατολικά του Ρήνου από τον έμπιστο διοικητή των Χερούσκων βοηθητικών του, τον Αρμίνιο — Ρωμαίο πολίτη και ιππέα που είχε μυστικά συνομοσπονδιοποιήσει τις γερμανικές φυλές εναντίον της Ρώμης. Παραταγμένες σε στενά μονοπάτια κάτω από καταρρακτώδη βροχή, οι λεγεώνες XVII, XVIII και XIX ενεδρεύθηκαν επί τρεις ημέρες και αφανίστηκαν. Ο Ουάρος έπεσε στο ξίφος του. Ο Αύγουστος, μαθαίνοντας την είδηση, λέγεται ότι έσχισε τα ρούχα του και αναφώνησε στο ανάκτορο: 'Quintilius Vare, legiones redde!' — 'Κουϊντίλιε Ουάρε, απόδωσε τις λεγεώνες!'. Οι αριθμοί τους δεν επαναχρησιμοποιήθηκαν ποτέ. Ο Ρήνος έγινε το μόνιμο βόρειο σύνορο της αυτοκρατορίας, και η Γερμανία παρέμεινε εκτός ρωμαϊκής εξουσίας για τους επόμενους τέσσερις αιώνες."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Otto_Albert_Koch_Varusschlacht_1909.jpg?width=1024",
            alt: {
              en: "The Varus Battle, painting by Otto Albert Koch (1909)",
              el: "Η μάχη του Βάρου, πίνακας του Otto Albert Koch (1909)"
            },
            credit: "Otto Albert Koch, via Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 14,
      era: {
        en: "Julio-Claudian Dynasty",
        el: "Ιουλιο-Κλαυδιανή Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Tiberius becomes Emperor",
            el: "Ο Τιβέριος γίνεται αυτοκράτορας"
          },
          description: {
            en: "Tiberius becomes Emperor, beginning a reign marked by paranoia and the rise of the Praetorian Guard's political power.",
            el: "Ο Τιβέριος γίνεται αυτοκράτορας, αρχίζοντας μια βασιλεία που χαρακτηρίζεται από παράνοια και την άνοδο της πολιτικής ισχύος της Πραιτοριανής Φρουράς."
          },
          extendedDescription: {
            en: "An able commander hardened by long campaigns on the Rhine and Danube, Tiberius assumed power at fifty-four with the misanthropic resentment of a man who had been Augustus' second choice. The first decade of his rule was administratively conscientious, but the trials for treason — maiestas — multiplied as the elderly emperor withdrew to Capri. There the Praetorian prefect Sejanus rose almost to co-rule, plotting against the imperial heirs until Tiberius destroyed him in a single day. Tacitus' Annals turn the reign into a moral fable of arbitrary power. Tiberius died on Capri in 37, smothered by Caligula's chamberlain according to one tradition, leaving an empire he had governed sullenly for twenty-three years.",
            el: "Ικανός διοικητής σκληραγωγημένος από μακρές εκστρατείες στον Ρήνο και τον Δούναβη, ο Τιβέριος ανέλαβε την εξουσία στα πενήντα τέσσερά του χρόνια με τη μισανθρωπική μνησικακία ανθρώπου που υπήρξε δεύτερη επιλογή του Αυγούστου. Η πρώτη δεκαετία της εξουσίας του ήταν διοικητικά ευσυνείδητη, αλλά οι δίκες προδοσίας — maiestas — πολλαπλασιάστηκαν καθώς ο γηραιός αυτοκράτορας αποτραβήχτηκε στην Καπρέα. Εκεί, ο πραιτοριανός έπαρχος Σηιανός αναδείχθηκε σχεδόν ως συνάρχοντας, σχεδιάζοντας εναντίον των αυτοκρατορικών διαδόχων ώσπου ο Τιβέριος τον εξολόθρευσε σε μία ημέρα. Τα Χρονικά του Τάκιτου μετατρέπουν τη βασιλεία του σε ηθική παραβολή της αυθαίρετης εξουσίας. Ο Τιβέριος πέθανε στην Καπρέα το 37, ασφυκτιασμένος κατά μία παράδοση από τον θαλαμηπόλο του Καλιγούλα, αφήνοντας αυτοκρατορία την οποία είχε διοικήσει σκυθρωπά επί είκοσι τρία χρόνια."
          },
          category: "political"
        }
      ]
    },
    {
      year: 37,
      era: {
        en: "Julio-Claudian Dynasty",
        el: "Ιουλιο-Κλαυδιανή Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Caligula becomes Emperor",
            el: "Ο Καλιγούλας γίνεται αυτοκράτορας"
          },
          description: {
            en: "Caligula becomes Emperor, beginning a reign of extravagance and cruelty that ends in his assassination.",
            el: "Ο Καλιγούλας γίνεται αυτοκράτορας, αρχίζοντας μια βασιλεία υπερβολής και σκληρότητας που τελειώνει με τη δολοφονία του."
          },
          extendedDescription: {
            en: "Gaius — nicknamed 'little boots' from the soldiers' shoes he had worn in his father's German camp as a child — was hailed with relief after Tiberius. The first six months were promising: amnesty for exiles, restoration of the assemblies, magnificent games. After a serious illness, however, sources record erratic and capricious cruelty. He executed cousins, declared his sister Drusilla a goddess, ordered a bridge of boats built across the Bay of Baiae, and appears to have planned to make his horse Incitatus consul — though scholars debate whether such anecdotes are sober record or hostile satire. After only four years he was murdered in a corridor of the Palatine by Praetorian officers, the first reigning emperor to fall to a coup.",
            el: "Ο Γάιος — με το παρατσούκλι 'παπουτσάκι' από τις στρατιωτικές αρβύλες που φορούσε ως παιδί στο γερμανικό στρατόπεδο του πατέρα του — υποδέχθηκε με ανακούφιση μετά τον Τιβέριο. Οι πρώτοι έξι μήνες ήταν υποσχόμενοι: αμνηστία στους εξόριστους, αποκατάσταση των συνελεύσεων, μεγαλοπρεπείς αγώνες. Μετά από βαριά ασθένεια, ωστόσο, οι πηγές καταγράφουν ασταθή και ιδιότροπη σκληρότητα. Εκτέλεσε ξαδέλφια του, ανακήρυξε την αδελφή του Δρουσίλλα θεά, διέταξε την κατασκευή πλωτής γέφυρας στον Κόλπο των Βαϊών και φαίνεται ότι σχεδίαζε να ανακηρύξει το άλογό του Ινκιτάτο ύπατο — αν και οι ειδικοί συζητούν αν τέτοια ανέκδοτα είναι νηφάλια καταγραφή ή εχθρική σάτιρα. Μετά από μόλις τέσσερα χρόνια δολοφονήθηκε σε διάδρομο του Παλατινού από αξιωματικούς της Πραιτοριανής, ο πρώτος αυτοκράτορας εν ενεργεία που έπεσε από πραξικόπημα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 41,
      era: {
        en: "Julio-Claudian Dynasty",
        el: "Ιουλιο-Κλαυδιανή Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Claudius becomes Emperor",
            el: "Ο Κλαύδιος γίνεται αυτοκράτορας"
          },
          description: {
            en: "Claudius becomes Emperor and conquers Britain, expanding the empire to its greatest extent.",
            el: "Ο Κλαύδιος γίνεται αυτοκράτορας και κατακτά τη Βρετανία, επεκτείνοντας την αυτοκρατορία στη μέγιστη έκτασή της."
          },
          extendedDescription: {
            en: "Found trembling behind a curtain in the palace after Caligula's murder, Claudius was hailed by the Praetorians as emperor — the Senate, which contemplated restoring the Republic, gave way to the inevitable. A scholar of Etruscology and Carthaginian history with a stutter and a limp that had concealed his political mind, he proved an able administrator: extending citizenship in Gaul, building the harbor at Ostia, and codifying the bureaucracy with freedmen secretaries. The conquest of Britain, begun in 43 with four legions and a triumphal personal appearance by the emperor, integrated the southern third of the island. He died in 54, almost certainly poisoned by his fourth wife Agrippina to clear the throne for her son Nero.",
            el: "Βρισκόμενος τρέμοντας πίσω από κουρτίνα του ανακτόρου μετά τη δολοφονία του Καλιγούλα, ο Κλαύδιος αναγορεύθηκε από τους Πραιτοριανούς αυτοκράτορας — η Σύγκλητος, που σκέπτηκε να επαναφέρει τη Δημοκρατία, υποχώρησε στο αναπόφευκτο. Λόγιος της ετρουσκολογίας και της καρχηδονιακής ιστορίας, με τραυλισμό και χωλότητα που είχαν αποκρύψει τον πολιτικό του νου, αποδείχθηκε ικανός διοικητής: επέκτεινε την πολιτεία στη Γαλατία, κατασκεύασε το λιμάνι της Ώστιας και κωδικοποίησε τη γραφειοκρατία με γραμματείς απελεύθερους. Η κατάκτηση της Βρετανίας, που άρχισε το 43 με τέσσερις λεγεώνες και θριαμβευτική προσωπική εμφάνιση του αυτοκράτορα, ενσωμάτωσε το νότιο τρίτο του νησιού. Πέθανε το 54, σχεδόν βεβαίως δηλητηριασμένος από την τέταρτη σύζυγό του Αγριππίνα, ώστε να ανοίξει ο θρόνος για τον γιο της Νέρωνα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 54,
      era: {
        en: "Julio-Claudian Dynasty",
        el: "Ιουλιο-Κλαυδιανή Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Nero becomes Emperor",
            el: "Ο Νέρων γίνεται αυτοκράτορας"
          },
          description: {
            en: "Nero becomes Emperor, beginning a reign that starts well but ends in tyranny and persecution of Christians.",
            el: "Ο Νέρων γίνεται αυτοκράτορας, αρχίζοντας μια βασιλεία που ξεκινά καλά αλλά καταλήγει σε τυραννία και διωγμούς των χριστιανών."
          },
          extendedDescription: {
            en: "Acceding at sixteen under the guidance of his tutor Seneca and the Praetorian prefect Burrus, Nero opened with what Trajan later called the quinquennium aureum — five years of moderate, well-administered rule. The drift toward absolutism began with the murder of his stepbrother Britannicus and accelerated after he had his mother Agrippina killed in 59. He fancied himself an artist and chariot-racer, scandalizing the elite by performing in public on Greek tours. After the Great Fire of Rome in 64 he scapegoated the small Christian community and began the first imperial persecution. Provincial revolts and Praetorian betrayal at last drove him to suicide in 68, lamenting 'qualis artifex pereo' — 'what an artist dies in me.'",
            el: "Ανερχόμενος στον θρόνο στα δεκαέξι του υπό την καθοδήγηση του δασκάλου του Σενέκα και του πραιτοριανού επάρχου Βούρρου, ο Νέρων άνοιξε τη βασιλεία με αυτό που ο Τραϊανός θα αποκαλούσε αργότερα quinquennium aureum — πέντε χρόνια μετριοπαθούς, καλοδιοικημένης εξουσίας. Η ολίσθηση προς την απολυταρχία ξεκίνησε με τη δολοφονία του ετεροθαλούς αδελφού του Βρεταννικού και επιταχύνθηκε όταν διέταξε τη δολοφονία της μητέρας του Αγριππίνας το 59. Φανταζόταν τον εαυτό του καλλιτέχνη και αρματοδρόμο, σκανδαλίζοντας την ελίτ με δημόσιες εμφανίσεις σε ελληνικές περιοδείες. Μετά τη Μεγάλη Πυρκαγιά της Ρώμης το 64, χρησιμοποίησε ως αποδιοπομπαίο τράγο τη μικρή χριστιανική κοινότητα και άρχισε τον πρώτο αυτοκρατορικό διωγμό. Οι επαρχιακές εξεγέρσεις και η προδοσία της Πραιτοριανής Φρουράς τον οδήγησαν τέλος σε αυτοκτονία το 68, με την οδυρμένη φράση 'qualis artifex pereo' — 'τέτοιος καλλιτέχνης πεθαίνει μέσα μου'."
          },
          category: "political"
        }
      ]
    },
    {
      year: 64,
      era: {
        en: "Great Fire",
        el: "Μεγάλη Πυρκαγιά"
      },
      events: [
        {
          title: {
            en: "Great Fire of Rome",
            el: "Μεγάλη Πυρκαγιά της Ρώμης"
          },
          description: {
            en: "A great fire destroys much of Rome, and Nero allegedly plays his lyre while watching the city burn.",
            el: "Μια μεγάλη πυρκαγιά καταστρέφει μεγάλο μέρος της Ρώμης και ο Νέρων λέγεται πως έπαιζε λύρα ενώ παρακολουθούσε την πόλη να καίγεται."
          },
          extendedDescription: {
            en: "The fire broke out among the wooden shops near the Circus Maximus on the night of 18 July and burned for six days, then revived for three more, devastating ten of Rome's fourteen districts. Nero was at Antium when it began and hurried back to organize relief: opening the imperial gardens to refugees, lowering grain prices, and rebuilding wider streets and brick-and-stone facades. Suetonius and Cassius Dio nevertheless preserve the story that he sang the Iliad's 'Sack of Troy' from a tower as the flames rose — a charge Tacitus reports as rumor without endorsing. To deflect popular suspicion, Nero blamed and tortured the Christians of Rome. The vast Domus Aurea he raised over the cleared land deepened the suspicion that he had welcomed, even arranged, the disaster.",
            el: "Η πυρκαγιά ξέσπασε στα ξύλινα καταστήματα κοντά στον Κίρκο Μάξιμο τη νύχτα της 18ης Ιουλίου και κάηκε επί έξι ημέρες, ξαναζωντάνεψε για άλλες τρεις, ερημώνοντας δέκα από τις δεκατέσσερις συνοικίες της Ρώμης. Ο Νέρων βρισκόταν στο Άντιο όταν άρχισε και επέστρεψε βιαστικά για να οργανώσει αρωγή: άνοιξε τους αυτοκρατορικούς κήπους σε πρόσφυγες, μείωσε τις τιμές των σιτηρών και ανοικοδόμησε ευρύτερους δρόμους και προσόψεις από τούβλο και πέτρα. Παρόλα αυτά, ο Σουητώνιος και ο Κάσσιος Δίων διασώζουν την ιστορία ότι τραγουδούσε την 'Άλωση της Τροίας' από τον πύργο καθώς οι φλόγες ανέβαιναν — κατηγορία που ο Τάκιτος αναφέρει ως φήμη χωρίς να την επικυρώνει. Για να αποτρέψει τη λαϊκή υποψία, ο Νέρων κατηγόρησε και βασάνισε τους χριστιανούς της Ρώμης. Το τεράστιο Domus Aurea που ανήγειρε επί των κατεστραμμένων εκτάσεων εμβάθυνε την υποψία ότι είχε υποδεχθεί, ή και διοργανώσει, την καταστροφή."
          },
          category: "other",
          image: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hubert_Robert_-_The_Fire_of_Rome_-_Google_Art_Project.jpg/960px-Hubert_Robert_-_The_Fire_of_Rome_-_Google_Art_Project.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
            alt: {
              en: "The Fire of Rome, painting by Hubert Robert (1771)",
              el: "Η πυρκαγιά της Ρώμης, πίνακας του Hubert Robert (1771)"
            },
            credit: "Hubert Robert, via Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 68,
      era: {
        en: "Year of Four Emperors",
        el: "Έτος των Τεσσάρων Αυτοκρατόρων"
      },
      events: [
        {
          title: {
            en: "Year of Four Emperors begins",
            el: "Έναρξη του Έτους των Τεσσάρων Αυτοκρατόρων"
          },
          description: {
            en: "Nero commits suicide, beginning the chaotic Year of Four Emperors in which four different men rule Rome.",
            el: "Ο Νέρων αυτοκτονεί, αρχίζοντας το χαοτικό Έτος των Τεσσάρων Αυτοκρατόρων, κατά το οποίο τέσσερις διαφορετικοί άνδρες κυβερνούν τη Ρώμη."
          },
          extendedDescription: {
            en: "The aged Galba, governor of Hispania Tarraconensis, marched on Rome at the urging of the western legions and was acclaimed emperor in June 68; Nero's death cleared his path. But within seven months Galba was murdered by the Praetorians for refusing to pay the donative he had promised, and replaced by Otho, his own associate; three months later Otho fell in battle to Vitellius, commander on the Rhine; eight months after that Vitellius himself was overthrown by the Flavian commander Vespasian, marching from Judaea. Tacitus' famous diagnosis of the year — that 'a secret of empire had been revealed: emperors could be made elsewhere than at Rome' — captured a permanent shift: the throne now belonged to whoever could command the legions on the frontier.",
            el: "Ο γηραιός Γάλβας, διοικητής της Ταρρακωνικής Ισπανίας, βάδισε προς τη Ρώμη με την παρότρυνση των δυτικών λεγεώνων και ανακηρύχθηκε αυτοκράτορας τον Ιούνιο του 68· ο θάνατος του Νέρωνα του άνοιξε τον δρόμο. Αλλά μέσα σε επτά μήνες ο Γάλβας δολοφονήθηκε από τους Πραιτοριανούς επειδή αρνήθηκε να πληρώσει το δονάτιβο που είχε υποσχεθεί, και αντικαταστάθηκε από τον Όθωνα, σύντροφό του· τρεις μήνες αργότερα ο Όθων έπεσε σε μάχη με τον Βιτέλλιο, διοικητή στον Ρήνο· οκτώ μήνες έπειτα ο ίδιος ο Βιτέλλιος ανατράπηκε από τον Φλάβιο διοικητή Βεσπασιανό, που βάδιζε από την Ιουδαία. Η ξακουστή διάγνωση του Τάκιτου για το έτος — ότι 'ένα μυστικό της αυτοκρατορίας είχε αποκαλυφθεί: αυτοκράτορες μπορούσαν να αναδειχθούν και αλλού πέρα από τη Ρώμη' — αποτύπωσε μόνιμη μετατόπιση: ο θρόνος ανήκε πλέον σε όποιον μπορούσε να διοικήσει τις λεγεώνες των συνόρων."
          },
          category: "political"
        }
      ]
    },
    {
      year: 69,
      era: {
        en: "Flavian Dynasty",
        el: "Φλαβιανή Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Vespasian becomes Emperor",
            el: "Ο Βεσπασιανός γίνεται αυτοκράτορας"
          },
          description: {
            en: "Vespasian becomes Emperor, founding the Flavian Dynasty and beginning a period of stability and reconstruction.",
            el: "Ο Βεσπασιανός γίνεται αυτοκράτορας, ιδρύοντας τη Φλαβιανή Δυναστεία και εγκαινιάζοντας μια περίοδο σταθερότητας και ανασυγκρότησης."
          },
          extendedDescription: {
            en: "The first emperor of equestrian — not senatorial — origin, Vespasian was a tough Sabine of plain manners who had distinguished himself in Britain under Claudius and was suppressing the Jewish revolt when proclaimed emperor by his eastern legions. He left his elder son Titus to finish at Jerusalem and entered Rome in late 69. His reign restored order: budget discipline (with the famous tax on public urinals — 'pecunia non olet,' money does not stink — when Titus protested), public works including the Colosseum, and a sober pragmatism. He secured the dynastic principle by associating Titus and Domitian as colleagues. His deathbed remark, 'Vae, puto deus fio' — 'Oh dear, I think I'm becoming a god' — captures his style perfectly.",
            el: "Ο πρώτος αυτοκράτορας ιππικής — όχι συγκλητικής — καταγωγής, ο Βεσπασιανός ήταν ένας σκληροτράχηλος Σαβίνος με λιτούς τρόπους, που είχε διακριθεί στη Βρετανία επί Κλαυδίου και κατέπνιγε την ιουδαϊκή εξέγερση όταν ανακηρύχθηκε αυτοκράτορας από τις ανατολικές του λεγεώνες. Άφησε τον μεγαλύτερο γιο του Τίτο να ολοκληρώσει το έργο στην Ιερουσαλήμ και εισήλθε στη Ρώμη στα τέλη του 69. Η βασιλεία του αποκατέστησε την τάξη: δημοσιονομική πειθαρχία (με τον περίφημο φόρο στα δημόσια ουρητήρια — 'pecunia non olet', τα χρήματα δεν μυρίζουν — όταν διαμαρτυρήθηκε ο Τίτος), δημόσια έργα ανάμεσά τους το Κολοσσαίο, και μετριοπαθή πραγματισμό. Εξασφάλισε τη δυναστική αρχή συνδέοντας τους Τίτο και Δομιτιανό ως συναξιωματικούς. Η ετοιμοθάνατη παρατήρησή του 'Vae, puto deus fio' — 'Αλίμονο, νομίζω ότι γίνομαι θεός' — αποτυπώνει τέλεια τον χαρακτήρα του."
          },
          category: "political"
        }
      ]
    },
    {
      year: 70,
      era: {
        en: "Jewish Revolt",
        el: "Ιουδαϊκή Εξέγερση"
      },
      events: [
        {
          title: {
            en: "Destruction of Jerusalem",
            el: "Καταστροφή της Ιερουσαλήμ"
          },
          description: {
            en: "Titus destroys Jerusalem and the Second Temple, ending the Jewish Revolt and beginning the Jewish diaspora.",
            el: "Ο Τίτος καταστρέφει την Ιερουσαλήμ και τον Δεύτερο Ναό, τερματίζοντας την Ιουδαϊκή Εξέγερση και αρχίζοντας τη ιουδαϊκή διασπορά."
          },
          extendedDescription: {
            en: "After a five-month siege of the city in which factions of Zealots and Sicarii fought one another even amid Roman attack, Titus' four legions stormed the Antonia fortress and pressed into the Temple precinct. The Temple itself caught fire on the 9th of Av — the same date, by tradition, on which Solomon's Temple had fallen six centuries earlier. Josephus, who served as Titus' interpreter, reports that Titus tried to save the sanctuary; later Christian tradition holds the opposite. The treasures — the menorah, the table of showbread, the silver trumpets — were borne in triumph through Rome and depicted on the Arch of Titus, where they remain visible. The destruction ended Temple Judaism and inaugurated the rabbinic and diasporic forms of Jewish religion that have endured since.",
            el: "Μετά από πεντάμηνη πολιορκία της πόλης κατά την οποία οι φατρίες των Ζηλωτών και των Σικαρίων αλληλοσπαράζονταν ακόμη και μέσα στη ρωμαϊκή επίθεση, οι τέσσερις λεγεώνες του Τίτου κατέλαβαν το φρούριο Αντωνία και εισέβαλαν στον περίβολο του Ναού. Ο ίδιος ο Ναός πήρε φωτιά στις 9 του Αβ — την ίδια ημέρα κατά την παράδοση που έπεσε ο Ναός του Σολομώντα έξι αιώνες νωρίτερα. Ο Ιώσηπος, που υπηρέτησε ως διερμηνέας του Τίτου, αναφέρει ότι ο Τίτος προσπάθησε να σώσει το άγιο των αγίων· η μεταγενέστερη χριστιανική παράδοση υποστηρίζει το αντίθετο. Οι θησαυροί — η μενορά, η τράπεζα της προθέσεως, οι αργυρές σάλπιγγες — μεταφέρθηκαν θριαμβευτικά στη Ρώμη και απεικονίστηκαν στην Αψίδα του Τίτου, όπου παραμένουν ορατοί. Η καταστροφή τερμάτισε τον ναϊκό Ιουδαϊσμό και εγκαινίασε τις ραββινικές και διασπορικές μορφές ιουδαϊκής θρησκείας που έχουν παραμείνει έκτοτε."
          },
          category: "military"
        }
      ]
    },
    {
      year: 79,
      era: {
        en: "Natural Disaster",
        el: "Φυσική Καταστροφή"
      },
      events: [
        {
          title: {
            en: "Eruption of Vesuvius",
            el: "Έκρηξη του Βεζούβιου"
          },
          description: {
            en: "Mount Vesuvius erupts, destroying Pompeii and Herculaneum and preserving them for archaeology.",
            el: "Ο Βεζούβιος εκρήγνυται, καταστρέφοντας την Πομπηία και το Ηράκλειο και διατηρώντας τα για την αρχαιολογία."
          },
          extendedDescription: {
            en: "Long dormant and not understood by the inhabitants of the bay as a volcano, Vesuvius erupted on what Pliny the Younger gives as the ninth day before the Kalends of September — though the date is now disputed in favor of late autumn. Pliny's two letters to Tacitus, written from Misenum twenty-five years later, describe the umbrella-shaped column of pumice and the death of his uncle Pliny the Elder, suffocated by ash on the beach at Stabiae while attempting rescue. Pompeii was buried under several meters of pumice and ash, Herculaneum under deeper pyroclastic flow. Excavations from the eighteenth century onward have recovered streets, frescoes, graffiti, and plaster casts of the dying — the most vivid surviving cross-section of any Roman city.",
            el: "Από καιρό αδρανής και μη αναγνωρίσιμος ως ηφαίστειο από τους κατοίκους του κόλπου, ο Βεζούβιος εξερράγη σε ό,τι ο Πλίνιος ο Νεότερος δίνει ως η ένατη ημέρα πριν από τις Καλένδες του Σεπτεμβρίου — αν και η ημερομηνία αμφισβητείται σήμερα υπέρ του τέλους του φθινοπώρου. Οι δύο επιστολές του Πλίνιου προς τον Τάκιτο, γραμμένες από το Μισηνό είκοσι πέντε χρόνια αργότερα, περιγράφουν τη σαν ομπρέλα στήλη ελαφρόπετρας και τον θάνατο του θείου του Πλίνιου του Πρεσβύτερου, που ασφυκτιάθηκε από στάχτη στην παραλία του Σταβιάς ενώ προσπαθούσε διάσωση. Η Πομπηία θάφτηκε κάτω από αρκετά μέτρα ελαφρόπετρας και τέφρας, το Ηράκλειο κάτω από βαθύτερη πυροκλαστική ροή. Οι ανασκαφές από τον δέκατο όγδοο αιώνα και έπειτα έχουν αποκαλύψει δρόμους, νωπογραφίες, γκράφιτι και γύψινα εκμαγεία των θανόντων — την πιο ζωντανή σωζόμενη τομή οποιασδήποτε ρωμαϊκής πόλης."
          },
          category: "other",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Karl_Brullov_-_The_Last_Day_of_Pompeii_-_Google_Art_Project.jpg?width=1024",
            alt: {
              en: "The Last Day of Pompeii, painting by Karl Bryullov (1830–1833)",
              el: "Η τελευταία ημέρα της Πομπηίας, πίνακας του Karl Bryullov (1830–1833)"
            },
            credit: "Karl Bryullov, via Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 80,
      era: {
        en: "Flavian Dynasty",
        el: "Φλαβιανή Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Colosseum completed",
            el: "Ολοκλήρωση του Κολοσσαίου"
          },
          description: {
            en: "The Colosseum is completed under Titus, becoming the symbol of Roman engineering and entertainment.",
            el: "Το Κολοσσαίο ολοκληρώνεται επί Τίτου, γινόμενο σύμβολο της ρωμαϊκής μηχανικής και ψυχαγωγίας."
          },
          extendedDescription: {
            en: "Begun by Vespasian on the drained lake of Nero's Golden House — a deliberate reclaiming of the city for the people — and completed by Titus, the Flavian Amphitheatre seated some fifty thousand spectators on four tiers, with a retractable awning rigged by sailors of the Misenum fleet. Inaugural games lasted a hundred days and featured naumachiae, beast hunts, and gladiatorial combats funded by Jewish spoils, as the dedicatory inscription proclaims. Its later name, Colosseum, derived from the colossal statue of Nero — refashioned as Sol — that stood beside it. Despite earthquakes, stone-robbing, and centuries of varied use as fortress, quarry, and church, it remains the largest amphitheatre ever built and the visual emblem of Rome.",
            el: "Αρχισμένο από τον Βεσπασιανό στην αποξηραμένη λίμνη της Χρυσής Οικίας του Νέρωνα — συνειδητή ανάκτηση της πόλης για τον λαό — και ολοκληρωμένο από τον Τίτο, το Φλαβιανό Αμφιθέατρο φιλοξενούσε περίπου πενήντα χιλιάδες θεατές σε τέσσερα επίπεδα, με αποσπώμενο ίστιο που χειρίζονταν ναύτες του στόλου του Μισηνού. Οι εγκαινιαστικοί αγώνες κράτησαν εκατό ημέρες και περιλάμβαναν ναυμαχίες, θηριομαχίες και μονομαχίες χρηματοδοτούμενες από τα ιουδαϊκά λάφυρα, όπως διακηρύσσει η αναθηματική επιγραφή. Το μεταγενέστερο όνομά του, Κολοσσαίο, προήλθε από το κολοσσιαίο άγαλμα του Νέρωνα — μετασχηματισμένο σε Ήλιο — που στεκόταν δίπλα του. Παρά τους σεισμούς, τη ληστεία λίθων και τους αιώνες ποικίλης χρήσης ως φρούριο, λατομείο και εκκλησία, παραμένει το μεγαλύτερο αμφιθέατρο που χτίστηκε ποτέ και το εικονικό έμβλημα της Ρώμης."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Colosseo_2020.jpg?width=1024",
            alt: {
              en: "The Colosseum, Rome",
              el: "Το Κολοσσαίο, Ρώμη"
            },
            credit: "Wikimedia Commons, CC BY-SA"
          }
        }
      ]
    },
    {
      year: 96,
      era: {
        en: "Imperial Transition",
        el: "Αυτοκρατορική Μετάβαση"
      },
      events: [
        {
          title: {
            en: "Nerva becomes Emperor",
            el: "Ο Νέρβας γίνεται αυτοκράτορας"
          },
          description: {
            en: "After the assassination of Domitian, Nerva becomes emperor and begins the adoptive succession that leads into the era of the Five Good Emperors.",
            el: "Μετά τη δολοφονία του Δομιτιανού, ο Νέρβας γίνεται αυτοκράτορας και εγκαινιάζει τη θετή διαδοχή που οδηγεί στην εποχή των Πέντε Καλών Αυτοκρατόρων."
          },
          extendedDescription: {
            en: "An elderly senator and former consul of unblemished reputation, Marcus Cocceius Nerva was selected by the Senate after Domitian's stabbing in his bedchamber by palace freedmen and Praetorian officers. His sixteen months of rule were marked by amnesty, the recall of exiles, and tactful financial economies, but also by tension with the Praetorian Guard, which forced him to surrender Domitian's killers. Sensing his own weakness, Nerva adopted the popular Rhine commander Marcus Ulpius Trajan as his son and successor — establishing, by accident more than design, the principle of merit-based imperial adoption that would furnish Rome with four more able rulers and the eighty-three-year stretch Edward Gibbon called 'the period in the history of the world during which the condition of the human race was most happy and prosperous.'",
            el: "Ηλικιωμένος συγκλητικός και πρώην ύπατος αψεγάδιαστης φήμης, ο Μάρκος Κοκκήιος Νέρβας επιλέχθηκε από τη Σύγκλητο μετά τη μαχαίρωση του Δομιτιανού στο υπνοδωμάτιό του από απελεύθερους του ανακτόρου και πραιτοριανούς αξιωματικούς. Οι δεκαέξι μήνες της εξουσίας του χαρακτηρίστηκαν από αμνηστία, ανάκληση εξορίστων και διακριτικές δημοσιονομικές οικονομίες, αλλά και από εντάσεις με την Πραιτοριανή Φρουρά, που τον εξανάγκασε να παραδώσει τους δολοφόνους του Δομιτιανού. Αντιλαμβανόμενος την αδυναμία του, ο Νέρβας υιοθέτησε τον δημοφιλή διοικητή του Ρήνου Μάρκο Ούλπιο Τραϊανό ως υιό και διάδοχο — εδραιώνοντας, περισσότερο τυχαία παρά εσκεμμένα, την αρχή της θετής αυτοκρατορικής διαδοχής βάσει αξίας, που θα έδινε στη Ρώμη άλλους τέσσερις ικανούς ηγέτες και το ογδονταετές διάστημα που ο Έντουαρντ Γκίμπον αποκάλεσε 'την περίοδο κατά την οποία η ανθρωπότητα γνώρισε τη μέγιστη ευτυχία και ευημερία'."
          },
          category: "political"
        }
      ]
    },
    {
      year: 98,
      era: {
        en: "Five Good Emperors",
        el: "Οι Πέντε Καλοί Αυτοκράτορες"
      },
      events: [
        {
          title: {
            en: "Trajan becomes Emperor",
            el: "Ο Τραϊανός γίνεται αυτοκράτορας"
          },
          description: {
            en: "Trajan becomes Emperor, beginning the golden age of the Five Good Emperors and the greatest extent of the empire.",
            el: "Ο Τραϊανός γίνεται αυτοκράτορας, εγκαινιάζοντας τη χρυσή εποχή των Πέντε Καλών Αυτοκρατόρων και τη μέγιστη έκταση της αυτοκρατορίας."
          },
          extendedDescription: {
            en: "Born at Italica in Spain, Trajan was the first emperor of provincial origin and proved both a vigorous soldier and an able administrator. His two Dacian wars (101–106) annexed gold-rich Transylvania and were celebrated on the spiral relief of Trajan's Column, the only surviving narrative of the campaigns. The Parthian war of 113–117 carried Roman arms briefly to the Persian Gulf, the empire's farthest extent. At home, he funded an alimenta scheme for the children of poor citizens, built a new forum and harbor, and corresponded — Pliny the Younger's letters preserve the exchange — with provincial governors on cases ranging from a fire brigade in Bithynia to a magistrate's perplexity over Christians. The Senate's later acclamation 'felicior Augusto, melior Traiano' — 'luckier than Augustus, better than Trajan' — fixed his name as the standard.",
            el: "Γεννημένος στην Ιταλική της Ισπανίας, ο Τραϊανός υπήρξε ο πρώτος αυτοκράτορας επαρχιακής καταγωγής και αναδείχθηκε ταυτόχρονα ρωμαλέος στρατιώτης και ικανός διοικητής. Οι δύο δακικοί πόλεμοί του (101–106) προσήρτησαν τη χρυσοφόρα Τρανσυλβανία και απαθανατίστηκαν στην ελικοειδή ανάγλυφη παράσταση της Στήλης του Τραϊανού, τη μοναδική σωζόμενη αφήγηση των εκστρατειών. Ο παρθικός πόλεμος του 113–117 οδήγησε τα ρωμαϊκά όπλα φευγαλέα ως τον Περσικό Κόλπο, τη μέγιστη έκταση της αυτοκρατορίας. Εσωτερικά, χρηματοδότησε σύστημα alimenta για τα παιδιά των φτωχών πολιτών, ανήγειρε νέο Φόρουμ και λιμάνι, και αλληλογραφούσε — οι επιστολές του Πλίνιου του Νεότερου διασώζουν την ανταλλαγή — με επαρχιακούς διοικητές για υποθέσεις που κυμαίνονταν από πυροσβεστικό σώμα στη Βιθυνία έως την αμηχανία ενός δικαστή απέναντι σε χριστιανούς. Η μετέπειτα αναφώνηση της Συγκλήτου 'felicior Augusto, melior Traiano' — 'πιο τυχερός από τον Αύγουστο, καλύτερος από τον Τραϊανό' — εδραίωσε το όνομά του ως πρότυπο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 117,
      era: {
        en: "Peak Empire",
        el: "Ακμή της Αυτοκρατορίας"
      },
      events: [
        {
          title: {
            en: "Hadrian becomes Emperor",
            el: "Ο Αδριανός γίνεται αυτοκράτορας"
          },
          description: {
            en: "Hadrian becomes Emperor and consolidates the empire's borders, building Hadrian's Wall in Britain.",
            el: "Ο Αδριανός γίνεται αυτοκράτορας και εδραιώνει τα σύνορα της αυτοκρατορίας, χτίζοντας το Τείχος του Αδριανού στη Βρετανία."
          },
          extendedDescription: {
            en: "Hadrian's adoption by Trajan was a deathbed affair so ill-attested that contemporaries suspected forgery by the empress Plotina. Whatever the truth, his accession marked a strategic turn: the new emperor abandoned Trajan's Mesopotamian conquests and instead spent more than half his reign touring the provinces, inspecting frontiers, and commissioning fortifications. The wall across northern Britain was the most famous of these works, but he also built the Pantheon's surviving rotunda, the great villa at Tibur, and his own circular mausoleum (today Castel Sant'Angelo). A passionate Hellenophile, he beautified Athens and grieved publicly for his drowned favorite Antinous. The brutal suppression of the Bar Kokhba revolt in Judaea darkened his last years.",
            el: "Η υιοθεσία του Αδριανού από τον Τραϊανό ήταν υπόθεση εν ώρα θανάτου, τόσο κακώς μαρτυρημένη, ώστε οι σύγχρονοι υπέθεταν πλαστογράφηση από την αυτοκράτειρα Πλωτίνα. Όποια κι αν είναι η αλήθεια, η ανάβασή του σήμανε στρατηγική στροφή: ο νέος αυτοκράτορας εγκατέλειψε τις μεσοποταμιακές κατακτήσεις του Τραϊανού και αντ' αυτών αφιέρωσε πάνω από το ήμισυ της βασιλείας του σε περιοδείες στις επαρχίες, επιθεωρώντας σύνορα και αναθέτοντας οχυρώσεις. Το τείχος στη βόρεια Βρετανία ήταν το πιο διάσημο από τα έργα αυτά, αλλά κατασκεύασε επίσης τη σωζόμενη ροτόντα του Πανθέου, τη μεγάλη έπαυλη του Τιβύρ και το δικό του κυκλικό μαυσωλείο (το σημερινό Καστέλο ντε Σαντ' Αντζέλο). Παθιασμένος ελληνιστής, ωραιοποίησε την Αθήνα και θρήνησε δημόσια τον πνιγμένο αγαπημένο του Αντίνοο. Η αιματηρή καταστολή της εξέγερσης του Μπαρ Κοχβά στην Ιουδαία σκίασε τα τελευταία χρόνια του."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bust_Hadrian_Musei_Capitolini_MC817.jpg?width=1024",
            alt: {
              en: "Bust of the Emperor Hadrian, Capitoline Museums, Rome",
              el: "Προτομή του αυτοκράτορα Αδριανού, Καπιτωλινά Μουσεία, Ρώμη"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 122,
      era: {
        en: "Frontier Defense",
        el: "Άμυνα των Συνόρων"
      },
      events: [
        {
          title: {
            en: "Hadrian's Wall begun",
            el: "Έναρξη κατασκευής του Τείχους του Αδριανού"
          },
          description: {
            en: "Construction begins on Hadrian's Wall to defend Roman Britain from northern tribes.",
            el: "Αρχίζει η κατασκευή του Τείχους του Αδριανού για την υπεράσπιση της ρωμαϊκής Βρετανίας από τις βόρειες φυλές."
          },
          extendedDescription: {
            en: "Begun on the emperor's personal inspection of Britain in 122, the wall stretched for some 117 kilometers from the Solway Firth to Wallsend on the Tyne. Built mostly of stone, six legions and auxiliaries faced it with a fighting platform, sixteen full forts, smaller mile-castles every Roman mile, and two intervening turrets. The biographer of the Historia Augusta calls it a defense to 'separate the Romans from the barbarians,' but the structure functioned as much as a regulated frontier — controlling movement, levying tolls, and channeling trade — as a barrier against invasion. Garrisons drawn from Tungrians, Batavians, and Spanish auxiliaries held it for nearly three centuries. Substantial stretches survive today, comprising one of the most legible material relics of the Roman frontier.",
            el: "Ξεκίνησε με την προσωπική επιθεώρηση του αυτοκράτορα στη Βρετανία το 122, και το τείχος εκτεινόταν περίπου 117 χιλιόμετρα από τον κόλπο του Σόλγουεϊ ως το Γουάλσεντ στον Τάιν. Κτισμένο κυρίως από πέτρα, έξι λεγεώνες και επικουρικά τμήματα το κατασκεύασαν με μαχόμενη πλατφόρμα, δεκαέξι πλήρη φρούρια, μικρότερα οχυρά κάθε ρωμαϊκό μίλι και δύο ενδιάμεσους πυργίσκους. Ο βιογράφος της Historia Augusta το αποκαλεί άμυνα 'που χωρίζει τους Ρωμαίους από τους βαρβάρους', αλλά το έργο λειτουργούσε εξίσου ως ρυθμιζόμενο σύνορο — έλεγχος κίνησης, είσπραξη διοδίων και διοχέτευση εμπορίου — όσο και ως φραγμός σε εισβολή. Φρουρές από Τούγγρους, Βατάβους και Ισπανούς επικουρικούς το κράτησαν επί σχεδόν τρεις αιώνες. Σημαντικά τμήματά του σώζονται μέχρι σήμερα, αποτελώντας ένα από τα πιο ευανάγνωστα υλικά κατάλοιπα του ρωμαϊκού συνόρου."
          },
          category: "military",
          image: {
            src: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Hadrian%27s_Wall_west_of_Housesteads_3.jpg?width=1024",
            alt: {
              en: "Hadrian's Wall near Housesteads, Northumberland",
              el: "Το Τείχος του Αδριανού κοντά στο Housesteads, Νορθάμπερλαντ"
            },
            credit: "Wikimedia Commons, CC BY-SA"
          }
        }
      ]
    },
    {
      year: 180,
      era: {
        en: "End of Pax Romana",
        el: "Τέλος της Pax Romana"
      },
      events: [
        {
          title: {
            en: "Death of Marcus Aurelius",
            el: "Θάνατος του Μάρκου Αυρήλιου"
          },
          description: {
            en: "Marcus Aurelius dies, ending the Pax Romana and beginning the decline of the Roman Empire.",
            el: "Ο Μάρκος Αυρήλιος πεθαίνει, τερματίζοντας την Pax Romana και αρχίζοντας την παρακμή της Ρωμαϊκής Αυτοκρατορίας."
          },
          extendedDescription: {
            en: "Marcus Aurelius spent the last twelve years of his life on the Danube frontier in defensive war against the Marcomanni and Quadi, finding solace in the Stoic notebook now known as the Meditations — perhaps the most enduring philosophical work composed by a head of state. He died at Vindobona (modern Vienna) of plague or natural exhaustion, having broken with the long Antonine tradition by transmitting power to his biological son Commodus rather than seeking the best available successor. The choice proved disastrous: Commodus was vain and unstable, and his assassination in 192 plunged Rome into civil war. With Marcus' death the period of stable, principled imperial rule that began under Nerva closed, and the structural crises of the later second and third centuries began to take hold.",
            el: "Ο Μάρκος Αυρήλιος αφιέρωσε τα τελευταία δώδεκα χρόνια της ζωής του στα δουναβικά σύνορα σε αμυντικό πόλεμο εναντίον των Μαρκομάνων και των Κουάδων, βρίσκοντας παρηγοριά στο στωικό σημειωματάριο που σήμερα είναι γνωστό ως 'Τα εις εαυτόν' — ίσως το πιο αξιομνημόνευτο φιλοσοφικό έργο που συντέθηκε από αρχηγό κράτους. Πέθανε στη Βιδομπόνα (σύγχρονη Βιέννη) από λοιμό ή φυσική εξάντληση, σπάζοντας τη μακρά αντωνινή παράδοση μεταβιβάζοντας την εξουσία στον φυσικό του γιο Κόμμοδο αντί να αναζητήσει τον καλύτερο διαθέσιμο διάδοχο. Η επιλογή αποδείχθηκε καταστροφική: ο Κόμμοδος υπήρξε ματαιόδοξος και ασταθής, και η δολοφονία του το 192 βύθισε τη Ρώμη σε εμφύλιο πόλεμο. Με τον θάνατο του Μάρκου έκλεισε η περίοδος της σταθερής, αρχωμένης από αρχές αυτοκρατορικής εξουσίας που είχε αρχίσει επί Νέρβα, και άρχισαν να εκδηλώνονται οι δομικές κρίσεις του ύστερου δεύτερου και του τρίτου αιώνα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 193,
      era: {
        en: "Year of Five Emperors",
        el: "Έτος των Πέντε Αυτοκρατόρων"
      },
      events: [
        {
          title: {
            en: "Year of Five Emperors",
            el: "Έτος των Πέντε Αυτοκρατόρων"
          },
          description: {
            en: "Five different emperors rule Rome in a single year, beginning the Crisis of the Third Century.",
            el: "Πέντε διαφορετικοί αυτοκράτορες κυβερνούν τη Ρώμη μέσα σε ένα μόνο έτος, αρχίζοντας την Κρίση του Τρίτου Αιώνα."
          },
          extendedDescription: {
            en: "Commodus' strangling on New Year's Eve was followed by the brief reign of the upright Pertinax, murdered by his own Praetorians after only eighty-seven days; the Praetorians then auctioned the empire to the wealthy Didius Julianus. The provincial armies refused the result. Three rival commanders rose: Septimius Severus on the Danube, Pescennius Niger in Syria, and Clodius Albinus in Britain. Severus, marching first on Rome, executed Julianus, then turned to defeat Niger at Issus and Albinus at Lugdunum (197). The 'Year of the Five Emperors' established the Severan dynasty but exposed how fragile the principate had become; the throne now followed the legions, and the central institutions could not protect themselves against their own armies.",
            el: "Η στραγγαλισμός του Κόμμοδου παραμονή Πρωτοχρονιάς ακολουθήθηκε από τη σύντομη βασιλεία του ευθυτενούς Περτίνακα, που δολοφονήθηκε από τους ίδιους τους Πραιτοριανούς του μετά από μόλις ογδόντα επτά ημέρες· οι Πραιτοριανοί δημοπράτησαν στη συνέχεια την αυτοκρατορία στον πλούσιο Δίδιο Ιουλιανό. Οι επαρχιακοί στρατοί αρνήθηκαν το αποτέλεσμα. Τρεις αντίπαλοι διοικητές εξεγέρθηκαν: ο Σεπτίμιος Σεβήρος στον Δούναβη, ο Πεσκέννιος Νίγερ στη Συρία και ο Κλώδιος Αλβίνος στη Βρετανία. Ο Σεβήρος, βαδίζοντας πρώτα στη Ρώμη, εκτέλεσε τον Ιουλιανό και κατόπιν στράφηκε για να νικήσει τον Νίγερ στην Ισσό και τον Αλβίνο στο Λούγδουνο (197). Το 'Έτος των Πέντε Αυτοκρατόρων' εδραίωσε τη σεβηριανή δυναστεία αλλά αποκάλυψε πόσο εύθραυστη είχε καταστεί η ηγεμονία· ο θρόνος ακολουθούσε πλέον τις λεγεώνες, και οι κεντρικοί θεσμοί δεν μπορούσαν να προστατευθούν απέναντι στους ίδιους τους στρατούς τους."
          },
          category: "political"
        }
      ]
    },
    {
      year: 212,
      era: {
        en: "Citizenship Reform",
        el: "Μεταρρύθμιση της Πολιτείας"
      },
      events: [
        {
          title: {
            en: "Constitutio Antoniniana",
            el: "Constitutio Antoniniana"
          },
          description: {
            en: "Caracalla grants citizenship to all free men in the empire, fundamentally changing Roman society.",
            el: "Ο Καρακάλλας απονέμει την ιδιότητα του πολίτη σε όλους τους ελεύθερους άνδρες της αυτοκρατορίας, αλλάζοντας θεμελιωδώς τη ρωμαϊκή κοινωνία."
          },
          extendedDescription: {
            en: "By a single edict — its tattered Greek text survives on a papyrus from Egypt — the emperor extended Roman citizenship to almost all free inhabitants of the provinces. Cassius Dio, hostile, attributed the act to greed, since citizens paid certain taxes that non-citizens did not. But the measure also crowned a centuries-long process by which the privileges of citizenship had been progressively diluted, and it imposed a uniform legal framework on a Mediterranean-wide population that had outgrown the Italian-Latin core. The traditional juridical distinction between citizen and provincial gave way to the new categories of honestiores and humiliores — privileged and humble — that would shape law and society in the late empire and into Byzantium.",
            el: "Με ένα μόνο διάταγμα — του οποίου το φθαρμένο ελληνικό κείμενο διασώζεται σε πάπυρο από την Αίγυπτο — ο αυτοκράτορας απένειμε τη ρωμαϊκή πολιτεία σχεδόν σε όλους τους ελεύθερους κατοίκους των επαρχιών. Ο Κάσσιος Δίων, εχθρικός, απέδωσε την πράξη σε απληστία, καθώς οι πολίτες κατέβαλλαν ορισμένους φόρους που δεν επιβαρύνονταν οι μη πολίτες. Αλλά το μέτρο επιστεγάζε επίσης διαδικασία αιώνων κατά την οποία τα προνόμια της πολιτείας είχαν προοδευτικά αραιωθεί, και επέβαλε ενιαίο νομικό πλαίσιο σε μεσογειακό πληθυσμό που είχε ξεπεράσει τον ιταλο-λατινικό πυρήνα. Η παραδοσιακή νομική διάκριση μεταξύ πολίτη και επαρχιωτών αντικαταστάθηκε από τις νέες κατηγορίες των honestiores και humiliores — προνομιούχων και ταπεινών — που θα διαμόρφωναν το δίκαιο και την κοινωνία της ύστερης αυτοκρατορίας και του Βυζαντίου."
          },
          category: "political"
        }
      ]
    },
    {
      year: 235,
      era: {
        en: "Crisis of Third Century",
        el: "Κρίση του Τρίτου Αιώνα"
      },
      events: [
        {
          title: {
            en: "Crisis of the Third Century begins",
            el: "Έναρξη της Κρίσης του Τρίτου Αιώνα"
          },
          description: {
            en: "The empire enters a 50-year period of civil war, barbarian invasions, and economic collapse.",
            el: "Η αυτοκρατορία εισέρχεται σε μια πεντηκονταετή περίοδο εμφυλίων πολέμων, βαρβαρικών εισβολών και οικονομικής κατάρρευσης."
          },
          extendedDescription: {
            en: "The murder of the last Severan, Severus Alexander, by his own troops in 235 opened a half-century in which Rome saw more than twenty officially recognized emperors and a far greater number of usurpers. Goths broke through the Danube; Persia under the new Sasanian dynasty captured the emperor Valerian alive; the silver coinage was inflated to a copper wash; the empire briefly fragmented into the Gallic Empire of Postumus and the Palmyrene domains of Zenobia. Plague — probably smallpox — devastated the provinces. The crisis only ended with the heavy-handed restoration of Aurelian (270–275) and the structural reforms of Diocletian. Modern historians dispute whether 'crisis' is too strong; what is certain is that the empire emerging in 284 was institutionally a different state from the one Marcus Aurelius had ruled.",
            el: "Η δολοφονία του τελευταίου Σεβήρου, του Σεβήρου Αλεξάνδρου, από τους ίδιους τους στρατιώτες του το 235, εγκαινίασε μισό αιώνα κατά τον οποίο η Ρώμη γνώρισε περισσότερους από είκοσι επισήμως αναγνωρισμένους αυτοκράτορες και πολύ μεγαλύτερο αριθμό σφετεριστών. Οι Γότθοι διέρρηξαν τον Δούναβη· η Περσία υπό τη νέα σασσανιδική δυναστεία αιχμαλώτισε ζωντανό τον αυτοκράτορα Ουαλεριανό· το ασημένιο νόμισμα υποτιμήθηκε σε χάλκινο επίστρωμα· η αυτοκρατορία διασπάστηκε προσωρινά στη Γαλατική Αυτοκρατορία του Ποστούμιου και την Παλμυρινή κυριαρχία της Ζηνοβίας. Λοιμός — πιθανότατα ευλογιά — ερήμωσε τις επαρχίες. Η κρίση τερματίστηκε μόνο με τη βίαιη αποκατάσταση του Αυρηλιανού (270–275) και τις δομικές μεταρρυθμίσεις του Διοκλητιανού. Σύγχρονοι ιστορικοί αμφισβητούν αν ο όρος 'κρίση' είναι υπερβολικός· βέβαιο είναι ότι η αυτοκρατορία που αναδύθηκε το 284 ήταν θεσμικά άλλο κράτος από εκείνο που είχε κυβερνήσει ο Μάρκος Αυρήλιος."
          },
          category: "military"
        }
      ]
    },
    {
      year: 284,
      era: {
        en: "Dominate Period",
        el: "Περίοδος του Δομινάτου"
      },
      events: [
        {
          title: {
            en: "Diocletian becomes Emperor",
            el: "Ο Διοκλητιανός γίνεται αυτοκράτορας"
          },
          description: {
            en: "Diocletian becomes Emperor and reforms the empire, ending the Crisis of the Third Century.",
            el: "Ο Διοκλητιανός γίνεται αυτοκράτορας και μεταρρυθμίζει την αυτοκρατορία, τερματίζοντας την Κρίση του Τρίτου Αιώνα."
          },
          extendedDescription: {
            en: "An Illyrian soldier of obscure birth, Diocletian was acclaimed emperor by the eastern army and within a year had eliminated his rivals. His twenty-year reign rebuilt the state from the ground up: the Tetrarchy, with two senior Augusti and two junior Caesars sharing the empire's four prefectures; doubled provincial divisions; a separated civil and military hierarchy; the Edict on Maximum Prices in an effort to stem inflation; and a final great persecution of the Christians. The new style was openly autocratic — the title dominus replaced princeps, and elaborate court ceremony was modeled on Persia. In 305, in an unprecedented act, Diocletian abdicated and retired to his palace at Salona on the Adriatic, where he is said to have answered an appeal to return to power by remarking that his cabbages were giving him too much pleasure to leave.",
            el: "Ιλλυριός στρατιώτης άσημης καταγωγής, ο Διοκλητιανός ανακηρύχθηκε αυτοκράτορας από τον ανατολικό στρατό και μέσα σε έναν χρόνο εξάλειψε τους αντιπάλους του. Η εικοσαετής βασιλεία του ανοικοδόμησε το κράτος από τα θεμέλια: η Τετραρχία, με δύο πρεσβύτερους Αυγούστους και δύο νεότερους Καίσαρες να μοιράζονται τις τέσσερις επαρχότητες της αυτοκρατορίας· ο διπλασιασμός των επαρχιακών διαιρέσεων· ο διαχωρισμός πολιτικής και στρατιωτικής ιεραρχίας· το Διάταγμα περί Μεγίστων Τιμών σε προσπάθεια ανακοπής του πληθωρισμού· και μια τελευταία μεγάλη δίωξη των χριστιανών. Το νέο ύφος ήταν φανερά απολυταρχικό — ο τίτλος dominus αντικατέστησε τον princeps, και η περίτεχνη αυλική τελετουργία διαμορφώθηκε κατά το περσικό πρότυπο. Το 305, σε πρωτοφανή πράξη, ο Διοκλητιανός παραιτήθηκε και αποσύρθηκε στο ανάκτορό του στη Σαλώνα της Αδριατικής, όπου λέγεται ότι σε έκκληση να επιστρέψει στην εξουσία απάντησε ότι τα λάχανά του του προσέφεραν υπερβολική ευχαρίστηση για να τα εγκαταλείψει."
          },
          category: "political"
        }
      ]
    },
    {
      year: 313,
      era: {
        en: "Christianization",
        el: "Εκχριστιανισμός"
      },
      events: [
        {
          title: {
            en: "Edict of Milan",
            el: "Διάταγμα των Μεδιολάνων"
          },
          description: {
            en: "Constantine issues the Edict of Milan, granting religious tolerance to Christians throughout the empire.",
            el: "Ο Κωνσταντίνος εκδίδει το Διάταγμα των Μεδιολάνων, παραχωρώντας θρησκευτική ανοχή στους χριστιανούς σε όλη την αυτοκρατορία."
          },
          extendedDescription: {
            en: "Strictly speaking the Edict of Milan was not a single edict but a joint policy proclaimed by Constantine and his eastern colleague Licinius after their meeting at Milan: a circular letter, preserved in Lactantius and Eusebius, instructing provincial governors to restore confiscated Christian property and to grant 'free and absolute power of religion' to all. The Diocletianic persecution had effectively ended in the West already; the new measure ratified that change and extended toleration eastward. Restitution went further than the Galerian decree of 311. Constantine's own conversion — whether dated to the 312 vision before the Milvian Bridge or to a later moment — meant that within a generation Christianity moved from a persecuted sect to the favored religion of the imperial court.",
            el: "Αυστηρά μιλώντας, το Διάταγμα των Μεδιολάνων δεν ήταν ένα μεμονωμένο διάταγμα αλλά κοινή πολιτική που εξήγγειλαν ο Κωνσταντίνος και ο ανατολικός συνεργάτης του Λικίνιος μετά τη συνάντησή τους στα Μεδιόλανα: εγκύκλιος επιστολή, διασωσμένη στον Λακτάντιο και τον Ευσέβιο, που έδινε εντολή στους επαρχιακούς διοικητές να αποδώσουν την κατασχεθείσα χριστιανική περιουσία και να εκχωρήσουν 'ελεύθερη και απόλυτη εξουσία θρησκείας' σε όλους. Ο διωγμός του Διοκλητιανού είχε ουσιαστικά τερματιστεί ήδη στη Δύση· το νέο μέτρο επικύρωσε εκείνη την αλλαγή και επέκτεινε την ανοχή προς ανατολάς. Η αποκατάσταση πήγε παραπέρα από το γαλεριανό διάταγμα του 311. Η ίδια η μεταστροφή του Κωνσταντίνου — είτε χρονολογηθεί στην οπτασία προ της Μουλβίου Γέφυρας του 312 είτε σε μεταγενέστερο χρόνο — σήμαινε ότι μέσα σε μία γενεά ο Χριστιανισμός μετακινήθηκε από διωκόμενη αίρεση στην ευνοούμενη θρησκεία της αυτοκρατορικής αυλής."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 325,
      era: {
        en: "Christian Empire",
        el: "Χριστιανική Αυτοκρατορία"
      },
      events: [
        {
          title: {
            en: "First Council of Nicaea",
            el: "Α΄ Οικουμενική Σύνοδος της Νίκαιας"
          },
          description: {
            en: "Constantine convenes the First Council of Nicaea, establishing a common statement of Christian belief and deepening imperial involvement in church affairs.",
            el: "Ο Κωνσταντίνος συγκαλεί την Α΄ Οικουμενική Σύνοδο της Νίκαιας, διαμορφώνοντας κοινή διατύπωση της χριστιανικής πίστης και ενισχύοντας την αυτοκρατορική εμπλοκή στις εκκλησιαστικές υποθέσεις."
          },
          extendedDescription: {
            en: "Some 318 bishops — the symbolic number of Abraham's servants — gathered at imperial expense in Bithynian Nicaea to settle the Arian dispute over whether the Son was of the same substance (homoousios) as the Father. After weeks of debate, with Constantine personally attending sessions, the council adopted a creed affirming consubstantiality and condemned Arius. It also fixed the calculation of Easter, set canons on church discipline, and recognized the precedence of the major sees. Two bishops who refused to subscribe were exiled. The council's significance went beyond doctrine: it inaugurated the model of imperially convoked ecumenical councils, in which the emperor acted as guarantor of orthodoxy — a relationship that would shape Roman Christianity for over a millennium.",
            el: "Περίπου 318 επίσκοποι — ο συμβολικός αριθμός των δούλων του Αβραάμ — συγκεντρώθηκαν με αυτοκρατορική δαπάνη στη Νίκαια της Βιθυνίας για να επιλύσουν την αρειανή έριδα περί του αν ο Υιός ήταν ομοούσιος με τον Πατέρα. Μετά από εβδομάδες συζήτησης, με τον Κωνσταντίνο να παρίσταται προσωπικά σε συνεδριάσεις, η σύνοδος ενέκρινε σύμβολο πίστεως που διακήρυσσε το ομοούσιο και καταδίκασε τον Άρειο. Καθόρισε επίσης τον υπολογισμό του Πάσχα, θέσπισε κανόνες εκκλησιαστικής τάξης και αναγνώρισε την προτεραιότητα των μεγάλων εδρών. Δύο επίσκοποι που αρνήθηκαν να υπογράψουν εξορίστηκαν. Η σημασία της Συνόδου ξεπερνούσε το δογματικό πεδίο: εγκαινίασε το πρότυπο των οικουμενικών συνόδων που συγκαλούσε ο αυτοκράτορας, στις οποίες ο μονάρχης ενεργούσε ως εγγυητής της ορθοδοξίας — σχέση που θα διαμόρφωνε τον ρωμαϊκό Χριστιανισμό για πάνω από μία χιλιετία."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 330,
      era: {
        en: "New Capital",
        el: "Νέα Πρωτεύουσα"
      },
      events: [
        {
          title: {
            en: "Founding of Constantinople",
            el: "Ίδρυση της Κωνσταντινούπολης"
          },
          description: {
            en: "Constantine dedicates Constantinople as the new capital of the Roman Empire, shifting power eastward.",
            el: "Ο Κωνσταντίνος αφιερώνει την Κωνσταντινούπολη ως νέα πρωτεύουσα της Ρωμαϊκής Αυτοκρατορίας, μετατοπίζοντας την εξουσία προς την ανατολή."
          },
          extendedDescription: {
            en: "On 11 May, after six years of construction, Constantine dedicated the rebuilt city of Byzantium under its new name 'New Rome' — though the popular usage Constantinopolis quickly prevailed. The site, occupying the triangle between the Bosporus, the Sea of Marmara, and the Golden Horn, was effectively impregnable from land and sea, commanded the grain route from the Euxine, and lay at the strategic center of the empire's defensive priorities along the Danube and the eastern frontier. Constantine doubled the city's walls outward, transferred a Senate, established a palace, and stocked the streets and squares with statuary collected from across the Greek world. Within a century the city had become the empire's effective capital and would remain so for the next 1,123 years.",
            el: "Στις 11 Μαΐου, μετά από έξι χρόνια κατασκευών, ο Κωνσταντίνος εγκαινίασε την ανακαινισμένη πόλη του Βυζαντίου με το νέο όνομα 'Νέα Ρώμη' — αν και η λαϊκή χρήση Κωνσταντινούπολη επικράτησε γρήγορα. Η θέση, που καταλάμβανε το τρίγωνο μεταξύ του Βοσπόρου, της Προποντίδας και του Κεράτιου Κόλπου, ήταν ουσιαστικά απόρθητη από ξηράς και θαλάσσης, ήλεγχε τον δρόμο των σιτηρών από τον Εύξεινο και βρισκόταν στο στρατηγικό κέντρο των αμυντικών προτεραιοτήτων της αυτοκρατορίας στον Δούναβη και το ανατολικό σύνορο. Ο Κωνσταντίνος διπλασίασε προς τα έξω τα τείχη της πόλης, μετέφερε Σύγκλητο, ίδρυσε ανάκτορο και γέμισε τους δρόμους και τις πλατείες με αγάλματα συγκεντρωμένα από ολόκληρο τον ελληνικό κόσμο. Μέσα σε έναν αιώνα, η πόλη έγινε η ουσιαστική πρωτεύουσα της αυτοκρατορίας και θα παρέμενε έτσι για τα επόμενα 1.123 χρόνια."
          },
          category: "political"
        }
      ]
    },
    {
      year: 378,
      era: {
        en: "Gothic War",
        el: "Γοτθικός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Battle of Adrianople",
            el: "Μάχη της Αδριανούπολης"
          },
          description: {
            en: "The Goths destroy a major Roman army and kill Emperor Valens at Adrianople, exposing the empire's military weakness in the late fourth century.",
            el: "Οι Γότθοι συντρίβουν μεγάλο ρωμαϊκό στρατό και σκοτώνουν τον αυτοκράτορα Ουάλη στην Αδριανούπολη, αποκαλύπτοντας τη στρατιωτική αδυναμία της αυτοκρατορίας στα τέλη του 4ου αιώνα."
          },
          extendedDescription: {
            en: "Two years earlier, the Tervingi and Greuthungi Goths — fleeing Hunnic pressure on the steppes — had been admitted across the Danube as refugees, only to be exploited and abused by Roman officials. Their armed revolt was met by the eastern emperor Valens with about thirty thousand men. Refusing to wait for Gratian's western reinforcements, Valens attacked on a hot August afternoon and was caught off-balance when the Gothic cavalry, returning from foraging, fell on his right flank. Two-thirds of the Roman army was killed; Valens himself disappeared, possibly burned alive in a peasant's hut he had taken shelter in. The defeat ranks with Cannae and Carrhae as Rome's worst, and contemporaries — including Ammianus Marcellinus, who closes his history at this point — recognized in it a turning of historical fate.",
            el: "Δύο χρόνια νωρίτερα, οι Τέρβιγγοι και οι Γρευθούγγοι Γότθοι — που ξέφευγαν από την ουννική πίεση στις στέπες — είχαν γίνει δεκτοί ως πρόσφυγες πέρα από τον Δούναβη, μόνο για να εκμεταλλευθούν και να κακοποιηθούν από Ρωμαίους αξιωματούχους. Η ένοπλη εξέγερσή τους αντιμετωπίστηκε από τον ανατολικό αυτοκράτορα Ουάλη με περίπου τριάντα χιλιάδες άνδρες. Αρνούμενος να περιμένει τις δυτικές ενισχύσεις του Γρατιανού, ο Ουάλης επιτέθηκε ένα ζεστό αυγουστιάτικο απόγευμα και αιφνιδιάστηκε όταν το γοτθικό ιππικό, επιστρέφοντας από επισιτιστική αναζήτηση, έπληξε το δεξιό κέρας. Τα δύο τρίτα του ρωμαϊκού στρατού σκοτώθηκαν· ο ίδιος ο Ουάλης εξαφανίστηκε, ίσως καμένος ζωντανός σε αγροτικό καλύβι όπου είχε καταφύγει. Η ήττα κατατάσσεται μαζί με τις Κάννες και τις Κάρρες ανάμεσα στις χειρότερες της Ρώμης, και οι σύγχρονοι — μεταξύ τους και ο Αμμιανός Μαρκελλίνος, που τερματίζει εδώ την ιστορία του — αναγνώρισαν σε αυτή ιστορική στροφή."
          },
          category: "military"
        }
      ]
    },
    {
      year: 395,
      era: {
        en: "Division of Empire",
        el: "Διαίρεση της Αυτοκρατορίας"
      },
      events: [
        {
          title: {
            en: "Division of Roman Empire",
            el: "Διαίρεση της Ρωμαϊκής Αυτοκρατορίας"
          },
          description: {
            en: "Theodosius divides the empire into Eastern and Western halves, never to be reunited.",
            el: "Ο Θεοδόσιος διαιρεί την αυτοκρατορία σε ανατολικό και δυτικό τμήμα, τα οποία δεν θα επανενωθούν ποτέ."
          },
          extendedDescription: {
            en: "On his deathbed at Milan after his last campaign against the western usurper Eugenius, Theodosius — the last emperor to rule a unified Roman world — left the East to his eighteen-year-old son Arcadius and the West to the eleven-year-old Honorius, with the able general Stilicho as effective regent. Earlier divisions of the empire had been administrative; this one, made permanent by the deaths of both brothers in mutual mistrust over the next decades, became the structural shape of the late Roman state. The two courts at Constantinople and Ravenna gradually drifted apart in language, ceremonial, and policy, and although later emperors styled themselves rulers of the whole empire, no individual sovereign would govern both halves again.",
            el: "Στο νεκρικό κρεβάτι στα Μεδιόλανα έπειτα από την τελευταία εκστρατεία του εναντίον του δυτικού σφετεριστή Ευγενίου, ο Θεοδόσιος — ο τελευταίος αυτοκράτορας που κυβέρνησε ενιαίο ρωμαϊκό κόσμο — άφησε την Ανατολή στον δεκαοκτάχρονο γιο του Αρκάδιο και τη Δύση στον εντεκάχρονο Ονώριο, με τον ικανό στρατηγό Στιλίχωνα ως ουσιαστικό αντιβασιλέα. Προηγούμενες διαιρέσεις της αυτοκρατορίας ήταν διοικητικές· αυτή, που έγινε μόνιμη με τους θανάτους και των δύο αδελφών μέσα στην αμοιβαία δυσπιστία των επόμενων δεκαετιών, εδραιώθηκε ως δομικό σχήμα του ύστερου ρωμαϊκού κράτους. Οι δύο αυλές στην Κωνσταντινούπολη και τη Ραβέννα απομακρύνθηκαν σταδιακά σε γλώσσα, τυπικό και πολιτική, και αν και μεταγενέστεροι αυτοκράτορες αυτοτιτλοφορήθηκαν κυβερνήτες όλης της αυτοκρατορίας, ποτέ ξανά δεν θα κυβερνούσε ένας μόνος μονάρχης και τα δύο τμήματα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 410,
      era: {
        en: "Barbarian Invasions",
        el: "Βαρβαρικές Εισβολές"
      },
      events: [
        {
          title: {
            en: "Sack of Rome",
            el: "Λεηλασία της Ρώμης"
          },
          description: {
            en: "Alaric and the Visigoths sack Rome, the first time the city has been taken by foreign invaders in 800 years.",
            el: "Ο Αλάριχος και οι Βησιγότθοι λεηλατούν τη Ρώμη, για πρώτη φορά έπειτα από 800 χρόνια που η πόλη καταλαμβάνεται από ξένους εισβολείς."
          },
          extendedDescription: {
            en: "Alaric had bargained for years with the western court at Ravenna for land and a Roman command, but Honorius — distracted by the Stilicho affair — repeatedly refused. After two earlier blockades and a brief negotiated peace, the Visigoths slipped into Rome through the Salarian Gate, possibly opened by sympathetic slaves, on the night of 24 August 410. The sack lasted three days. Alaric, an Arian Christian, granted protection to those who took refuge in the basilicas of St Peter and St Paul, but plundering was thorough; the elderly virgin Marcella died of injuries inflicted in her own home. The psychological shock across the Mediterranean was greater than the material damage. Augustine answered the cry that 'Rome had fallen' with the City of God; Jerome wept that 'the head of the Roman empire is severed.'",
            el: "Ο Αλάριχος είχε διαπραγματευθεί επί χρόνια με τη δυτική αυλή στη Ραβέννα για γη και ρωμαϊκή διοίκηση, αλλά ο Ονώριος — απορροφημένος από την υπόθεση του Στιλίχωνος — αρνιόταν επανειλημμένα. Μετά από δύο προηγούμενους αποκλεισμούς και σύντομη διαπραγματευμένη ειρήνη, οι Βησιγότθοι εισήλθαν στη Ρώμη από τη Σαλαρία Πύλη, πιθανόν ανοιγμένη από συμπαθούντες δούλους, τη νύχτα της 24ης Αυγούστου 410. Η λεηλασία διήρκεσε τρεις ημέρες. Ο Αλάριχος, αρειανός χριστιανός, παραχώρησε προστασία σε όσους κατέφυγαν στις βασιλικές του Αγίου Πέτρου και του Αγίου Παύλου, αλλά η αρπαγή ήταν ενδελεχής· η ηλικιωμένη παρθένα Μαρκέλλα πέθανε από τα τραύματα που της επιβλήθηκαν στο σπίτι της. Η ψυχολογική καταλυτικότητα σε όλη τη Μεσόγειο ήταν μεγαλύτερη από την υλική ζημία. Ο Αυγουστίνος απάντησε στην κραυγή ότι 'η Ρώμη έπεσε' με την Πολιτεία του Θεού· ο Ιερώνυμος θρήνησε ότι 'το κεφάλι της ρωμαϊκής αυτοκρατορίας έχει αποκοπεί'."
          },
          category: "military"
        }
      ]
    },
    {
      year: 451,
      era: {
        en: "Defense of the West",
        el: "Άμυνα της Δύσης"
      },
      events: [
        {
          title: {
            en: "Battle of the Catalaunian Plains",
            el: "Μάχη των Καταλαυνικών Πεδίων"
          },
          description: {
            en: "A Roman-led coalition under Aetius halts Attila's advance into Gaul, winning one of the last major military victories of the Western Empire.",
            el: "Συνασπισμός υπό ρωμαϊκή ηγεσία με επικεφαλής τον Αέτιο αναχαιτίζει την προέλαση του Αττίλα στη Γαλατία, πετυχαίνοντας μία από τις τελευταίες μεγάλες στρατιωτικές νίκες της Δυτικής Αυτοκρατορίας."
          },
          extendedDescription: {
            en: "Attila had crossed the Rhine in spring with a polyglot host of Huns, Ostrogoths, Gepids, Heruli, and other federates, devastating northern Gaul as far as Aurelianum (Orléans), which held out under its bishop. The patrician Aetius, the western empire's last great soldier, gathered a similarly composite force — Roman regulars, Visigoths under King Theodoric, Burgundians, Franks, Saxons, Alans — and forced battle on the open plain west of Troyes. The day-long fight was savage; Theodoric was killed, but the Hunnic line broke at evening. Attila withdrew to the Rhine; the next year he would invade Italy. Aetius' achievement, perhaps the last of its scale by a western Roman general, did not save him: in 454 he was murdered by the very emperor he had served, Valentinian III.",
            el: "Ο Αττίλας είχε διασχίσει τον Ρήνο την άνοιξη με πολυγλωσσική στρατιά Ούννων, Οστρογότθων, Γεπιδών, Ερούλων και άλλων ομόσπονδων λαών, ερημώνοντας τη βόρεια Γαλατία ως την Aurelianum (Ορλεάνη), που άντεξε υπό τον επίσκοπό της. Ο πατρίκιος Αέτιος, ο τελευταίος μεγάλος στρατιώτης της δυτικής αυτοκρατορίας, συγκέντρωσε εξίσου σύνθετη δύναμη — Ρωμαίους τακτικούς, Βησιγότθους υπό τον βασιλιά Θεοδώριχο, Βουργουνδούς, Φράγκους, Σάξονες, Αλανούς — και επέβαλε μάχη στην ανοιχτή πεδιάδα δυτικά της Τρουά. Η ολοήμερη σύγκρουση υπήρξε άγρια· ο Θεοδώριχος έπεσε, αλλά η γραμμή των Ούννων διελύθη το βράδυ. Ο Αττίλας υποχώρησε προς τον Ρήνο· το επόμενο έτος θα εισέβαλε στην Ιταλία. Το επίτευγμα του Αετίου, ίσως το τελευταίο τέτοιας κλίμακας από Ρωμαίο στρατηγό της Δύσης, δεν τον έσωσε: το 454 δολοφονήθηκε από τον ίδιο τον αυτοκράτορα που υπηρέτησε, τον Ουαλεντινιανό Γ΄."
          },
          category: "military"
        }
      ]
    },
    {
      year: 452,
      era: {
        en: "Barbarian Invasions",
        el: "Βαρβαρικές Εισβολές"
      },
      events: [
        {
          title: {
            en: "Attila invades Italy",
            el: "Ο Αττίλας εισβάλλει στην Ιταλία"
          },
          description: {
            en: "Attila the Hun invades Italy but is persuaded to withdraw by Pope Leo I.",
            el: "Ο Αττίλας ο Ούννος εισβάλλει στην Ιταλία αλλά πείθεται να αποσυρθεί από τον πάπα Λέοντα Α΄."
          },
          extendedDescription: {
            en: "Crossing the Julian Alps, Attila stormed Aquileia after a long siege so thoroughly that, according to legend, refugees fled into the lagoons and there founded the future Venice. He sacked Mediolanum, Patavium, and Ticinum, but his army was weakened by famine and an outbreak of plague when he reached the Mincio. There a Roman embassy met him, led by Pope Leo I — the meeting later mythologized in Raphael's Stanze fresco, where the apostles Peter and Paul appear over Leo's shoulder to overawe the Hunnic king. The realistic explanations are mundane: ravaged supply, eastern Roman pressure on Pannonia, and a substantial subsidy. Attila withdrew across the Danube and died the following year, reportedly in his sleep on his wedding night. His confederation collapsed within a generation.",
            el: "Διασχίζοντας τις Ιουλιανές Άλπεις, ο Αττίλας κατέλαβε την Ακυλεία μετά από μακρά πολιορκία, τόσο εξονυχιστικά που, σύμφωνα με τον θρύλο, οι πρόσφυγες κατέφυγαν στα έλη και ίδρυσαν εκεί τη μελλοντική Βενετία. Λεηλάτησε τα Μεδιόλανα, την Παταβία και το Τικίνο, αλλά ο στρατός του εξασθένησε από λιμό και επιδημία λοιμού όταν έφθασε στον Μίνκιο. Εκεί τον συνάντησε ρωμαϊκή πρεσβεία υπό τον πάπα Λέοντα Α΄ — η συνάντηση μυθοποιήθηκε αργότερα στη νωπογραφία του Ραφαήλ στις Στάντσες, όπου οι απόστολοι Πέτρος και Παύλος εμφανίζονται πάνω από τον ώμο του Λέοντα για να εκφοβίσουν τον βασιλιά των Ούννων. Οι ρεαλιστικές εξηγήσεις είναι πεζές: ερημωμένος ανεφοδιασμός, ανατολικορωμαϊκή πίεση στην Παννονία και ουσιαστικό χορήγημα. Ο Αττίλας αποσύρθηκε πέραν του Δουνάβεως και πέθανε το επόμενο έτος, λέγεται στον ύπνο του τη νύχτα του γάμου του. Η συνομοσπονδία του κατέρρευσε μέσα σε μία γενεά."
          },
          category: "military"
        }
      ]
    },
    {
      year: 455,
      era: {
        en: "Barbarian Invasions",
        el: "Βαρβαρικές Εισβολές"
      },
      events: [
        {
          title: {
            en: "Vandals sack Rome",
            el: "Οι Βάνδαλοι λεηλατούν τη Ρώμη"
          },
          description: {
            en: "The Vandals sack Rome, carrying off treasures including those taken from the Temple in Jerusalem.",
            el: "Οι Βάνδαλοι λεηλατούν τη Ρώμη, παίρνοντας θησαυρούς, ανάμεσά τους και εκείνους που είχαν αφαιρεθεί από τον Ναό της Ιερουσαλήμ."
          },
          extendedDescription: {
            en: "Geiseric, king of the Vandals from his fortified capital at Carthage, sailed across the Mediterranean and landed at the mouth of the Tiber on the pretext of a broken marriage agreement with the western imperial family. Pope Leo again negotiated, this time more modestly: he persuaded Geiseric to spare the population from massacre and the city from fire in exchange for unhindered fourteen-day plunder. The Vandals carried off the empress Eudoxia and her daughters, the gilded bronze tiles of the Temple of Jupiter, and — most famously — the menorah and other treasures Titus had brought from Jerusalem nearly four centuries earlier. The English word 'vandalism' takes its name from the violence of these days, although by the standards of the age the city was remarkably spared.",
            el: "Ο Γεζέριχος, βασιλιάς των Βανδάλων από την οχυρωμένη πρωτεύουσά του στην Καρχηδόνα, έπλευσε διασχίζοντας τη Μεσόγειο και αποβιβάστηκε στο στόμιο του Τίβερη με πρόσχημα τη διάλυση γαμήλιας συμφωνίας με τη δυτική αυτοκρατορική οικογένεια. Ο πάπας Λέων διαπραγματεύθηκε εκ νέου, αυτή τη φορά πιο μετριοπαθώς: έπεισε τον Γεζέριχο να φεισθεί τον πληθυσμό από σφαγή και την πόλη από φωτιά, με αντάλλαγμα ανεμπόδιστη δεκατετραήμερη λεηλασία. Οι Βάνδαλοι μετέφεραν την αυτοκράτειρα Ευδοξία και τις θυγατέρες της, τα επίχρυσα χάλκινα κεραμίδια του ναού του Διός και — πιο φημισμένα — τη μενορά και άλλους θησαυρούς που είχε φέρει ο Τίτος από την Ιερουσαλήμ τέσσερις σχεδόν αιώνες νωρίτερα. Η αγγλική λέξη 'vandalism' πήρε το όνομά της από τη βία εκείνων των ημερών, αν και κατά τα μέτρα της εποχής η πόλη υπέστη αξιοσημείωτα μικρή βλάβη."
          },
          category: "military"
        }
      ]
    },
    {
      year: 476,
      era: {
        en: "Fall of Western Empire",
        el: "Πτώση της Δυτικής Αυτοκρατορίας"
      },
      events: [
        {
          title: {
            en: "Fall of Western Roman Empire",
            el: "Πτώση της Δυτικής Ρωμαϊκής Αυτοκρατορίας"
          },
          description: {
            en: "Romulus Augustulus, the last Western Roman Emperor, is deposed by the Germanic chieftain Odoacer, ending the Western Roman Empire.",
            el: "Ο Ρωμύλος Αυγουστύλος, ο τελευταίος δυτικός Ρωμαίος αυτοκράτορας, εκθρονίζεται από τον γερμανό ηγεμόνα Οδόακρο, τερματίζοντας τη Δυτική Ρωμαϊκή Αυτοκρατορία."
          },
          extendedDescription: {
            en: "Romulus Augustulus was a teenage figurehead installed by his father, the magister militum Orestes, in the previous year. When the federate troops demanded a third of Italy's land in payment, Orestes refused and was killed by their leader Odoacer at Pavia. Odoacer entered Ravenna, deposed Romulus, and — choosing not to install another puppet — sent the imperial regalia to Constantinople with a message that the West needed only one emperor, and he was already there. The Senate continued to meet, daily life largely went on, and contemporaries did not perceive 476 as a watershed; the date was made decisive only by later historians, especially Edward Gibbon. Yet from that moment, no emperor ruled in the western half of the empire, while in the East the Roman state continued for nearly another thousand years.",
            el: "Ο Ρωμύλος Αυγουστύλος ήταν ένας έφηβος μαριονέτα εγκατεστημένος από τον πατέρα του, τον magister militum Ορέστη, τον προηγούμενο χρόνο. Όταν τα ομόσπονδα στρατεύματα ζήτησαν το ένα τρίτο των γαιών της Ιταλίας ως πληρωμή, ο Ορέστης αρνήθηκε και σκοτώθηκε από τον αρχηγό τους Οδόακρο στην Παβία. Ο Οδόακρος εισήλθε στη Ραβέννα, καθαίρεσε τον Ρωμύλο και — επιλέγοντας να μην εγκαταστήσει άλλη μαριονέτα — απέστειλε τα αυτοκρατορικά διάσημα στην Κωνσταντινούπολη με μήνυμα ότι η Δύση χρειαζόταν μόνον έναν αυτοκράτορα, και αυτός ήταν ήδη εκεί. Η Σύγκλητος εξακολούθησε να συνεδριάζει, η καθημερινή ζωή συνεχίστηκε σε μεγάλο βαθμό, και οι σύγχρονοι δεν εκλάμβαναν το 476 ως ορόσημο· η ημερομηνία απέκτησε ορόσημη σημασία μόνον από μεταγενέστερους ιστορικούς, ιδίως τον Έντουαρντ Γκίμπον. Ωστόσο, από εκείνη τη στιγμή, κανείς αυτοκράτορας δεν κυβέρνησε στο δυτικό τμήμα της αυτοκρατορίας, ενώ στην Ανατολή το ρωμαϊκό κράτος συνεχίστηκε για άλλα σχεδόν χίλια χρόνια."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
