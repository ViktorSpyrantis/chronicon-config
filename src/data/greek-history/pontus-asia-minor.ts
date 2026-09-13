/** Pontus & Asia Minor — Πόντος & Μικρά Ασία · Greek History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const PONTUS_ASIA_MINOR = {
  id: "pontus-asia-minor" as const,
  label: {
    en: "Pontus & Asia Minor",
    el: "Πόντος & Μικρά Ασία"
  },
  supertitle: {
    en: "Ιωνία · Πόντος",
    el: "Ιωνία · Πόντος"
  },
  title: {
    en: "Pontus and Asia Minor",
    el: "Ο Πόντος και η Μικρά Ασία"
  },
  subtitle: {
    en: "Three millennia of Hellenism in Anatolia and on the Black Sea — from the Aeolian and Ionian migrations that followed the Bronze Age collapse to the Treaty of Lausanne and the population exchange of 1923. A geographic chronicle of the cities, kingdoms, councils and catastrophes that shaped Greek life east of the Aegean.",
    el: "Τρεις χιλιετίες ελληνισμού στην Ανατολία και τον Εύξεινο Πόντο — από τις αιολικές και ιωνικές μεταναστεύσεις που ακολούθησαν την κατάρρευση της Εποχής του Χαλκού έως τη Συνθήκη της Λωζάννης και την ανταλλαγή των πληθυσμών του 1923. Μια γεωγραφική χρονογραφία των πόλεων, βασιλείων, συνόδων και καταστροφών που διαμόρφωσαν την ελληνική ζωή ανατολικά του Αιγαίου."
  },
  menuDescription: {
    en: "Three thousand years of Greek life in Ionia, Pontus and Cappadocia, ending in 1922.",
    el: "Τρεις χιλιετίες ελληνικής ζωής στην Ιωνία, τον Πόντο και την Καππαδοκία, με τέλος το 1922."
  },
  footerLabel: {
    en: "Pontus & Asia Minor · 1100 BC-1923 AD",
    el: "Πόντος & Μικρά Ασία · 1100 π.Χ.-1923 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Pontus and Asia Minor",
    el: "Πόντος και Μικρά Ασία"
  },
  theme: THEMES.amber,
  timeline: [
    {
      year: -1100,
      era: {
        en: "The Migrations",
        el: "Οι Μεταναστεύσεις"
      },
      events: [
        {
          title: {
            en: "The Aeolian and Ionian Migrations",
            el: "Αιολική και Ιωνική Μετανάστευση"
          },
          description: {
            en: "In the wake of the Bronze Age collapse, Greek-speaking refugees from Thessaly, Boeotia and Attica cross the Aegean and settle the western coast of Anatolia, founding the cities that will become Aeolis and Ionia.",
            el: "Στον απόηχο της κατάρρευσης της Εποχής του Χαλκού, ελληνόφωνοι πρόσφυγες από τη Θεσσαλία, τη Βοιωτία και την Αττική διαβαίνουν το Αιγαίο και εγκαθίστανται στα δυτικά παράλια της Ανατολίας, ιδρύοντας τις πόλεις που θα γίνουν η Αιολίδα και η Ιωνία."
          },
          extendedDescription: {
            en: "After the destruction of the Mycenaean palaces and the long centuries of dislocation that followed, Greek-speaking peoples crossed the Aegean in successive waves. The Aeolians from Boeotia and Thessaly took the northern coast and the great offshore island of Lesbos, founding Cyme, Mytilene, Smyrna and a further ten cities. South of them, the Ionians under leaders said to descend from the Athenian king Codrus settled Miletus, Ephesus, Colophon, Priene, Erythrae, Teos, Clazomenae, Phocaea, Samos and Chios, with Smyrna passing to them in time. South again, the Dorians established Halicarnassus, Cnidus, Cos, and the cities of Rhodes. The migration created a new Greek world facing east, in close contact with the Lydian and Phrygian interior, and laid the demographic foundation for nearly three millennia of Hellenism in Anatolia.",
            el: "Μετά την καταστροφή των μυκηναϊκών ανακτόρων και τους μακρούς αιώνες αναστάτωσης που ακολούθησαν, ελληνόφωνοι λαοί διέσχισαν το Αιγαίο σε διαδοχικά κύματα. Οι Αιολείς από τη Βοιωτία και τη Θεσσαλία κατέλαβαν τα βόρεια παράλια και τη μεγάλη νήσο της Λέσβου, ιδρύοντας την Κύμη, τη Μυτιλήνη, τη Σμύρνη και άλλες δέκα πόλεις. Νοτιότερα, οι Ίωνες υπό ηγέτες που έλεγαν ότι κατάγονταν από τον Αθηναίο βασιλέα Κόδρο εγκαταστάθηκαν στη Μίλητο, την Έφεσο, την Κολοφώνα, την Πριήνη, τις Ερυθρές, την Τέω, τις Κλαζομενές, τη Φώκαια, τη Σάμο και τη Χίο, ενώ η Σμύρνη πέρασε εν καιρώ σε αυτούς. Πιο νότια ακόμη, οι Δωριείς ίδρυσαν την Αλικαρνασσό, την Κνίδο, την Κω και τις πόλεις της Ρόδου. Η μετανάστευση δημιούργησε έναν νέο ελληνικό κόσμο στραμμένο προς την ανατολή, σε στενή επαφή με τη λυδική και φρυγική ενδοχώρα, και έθεσε τα δημογραφικά θεμέλια για σχεδόν τρεις χιλιετίες ελληνισμού στην Ανατολία."
          },
          category: "political"
        }
      ]
    },
    {
      year: -756,
      era: {
        en: "The Colonisation of the Black Sea",
        el: "Ο Αποικισμός του Εύξεινου Πόντου"
      },
      events: [
        {
          title: {
            en: "Sinope and Trapezus Founded",
            el: "Ίδρυση Σινώπης και Τραπεζούντας"
          },
          description: {
            en: "Milesian colonists found Sinope on the central Pontic coast; within a generation Sinope herself plants Trapezus to the east, anchoring Greek settlement along the entire southern shore of the Black Sea.",
            el: "Αποικιστές από τη Μίλητο ιδρύουν τη Σινώπη στο κεντρικό παραλίας του Εύξεινου Πόντου· εντός μιας γενεάς η ίδια η Σινώπη ιδρύει την Τραπεζούντα ανατολικά, αγκυρώνοντας την ελληνική παρουσία σε ολόκληρη τη νότια ακτή της Μαύρης Θάλασσας."
          },
          extendedDescription: {
            en: "The dates given by ancient writers — 756 BC for Sinope, a few decades later for Trapezus — are approximate, but the archaeological evidence confirms a vigorous Milesian colonial movement around the entire Black Sea in the late eighth and seventh centuries. Sinope, set on a great headland with two natural harbours, became the metropolis of the Pontus, controlling the iron trade with the interior and the maritime traffic between Anatolia and the Crimean steppe. Trapezus, on a high tableland (trapeza, 'table') above the sea, opened the route to Armenia and Persia. Other Milesian foundations — Amisus, Cerasus, Phasis, Dioscurias, Olbia, Panticapaeum — wove a girdle of Greek cities around what the colonists, in nervous propitiation, renamed the Euxine ('Hospitable') Sea. From these cities the Greek language would dominate the Pontic coast almost without interruption until 1923.",
            el: "Οι ημερομηνίες που δίνουν οι αρχαίοι συγγραφείς — 756 π.Χ. για τη Σινώπη, λίγες δεκαετίες αργότερα για την Τραπεζούντα — είναι κατά προσέγγιση, αλλά η αρχαιολογική μαρτυρία επιβεβαιώνει ένα ζωηρό μιλήσιο αποικιστικό κίνημα γύρω από ολόκληρο τον Εύξεινο Πόντο στα τέλη του ογδόου και τον έβδομο αιώνα. Η Σινώπη, χτισμένη σε μεγάλο ακρωτήριο με δύο φυσικά λιμάνια, έγινε η μητρόπολη του Πόντου, ελέγχοντας το εμπόριο σιδήρου με την ενδοχώρα και τη ναυσιπλοΐα μεταξύ της Ανατολίας και της κριμαϊκής στέπας. Η Τραπεζούς, σε υψηλό οροπέδιο (τράπεζα) πάνω από τη θάλασσα, άνοιγε τον δρόμο προς την Αρμενία και την Περσία. Άλλες μιλήσιες ιδρύσεις — Αμισός, Κερασούς, Φάσις, Διοσκουριάς, Ολβία, Παντικάπαιον — έπλεξαν μια ζώνη ελληνικών πόλεων γύρω από αυτό που οι ίδιοι οι αποικιστές, σε νευρικό εξευμενισμό, μετονόμασαν Εύξεινο ('φιλόξενο') Πόντο. Από αυτές τις πόλεις η ελληνική γλώσσα θα κυριαρχούσε στα ποντιακά παράλια σχεδόν αδιάκοπα μέχρι το 1923."
          },
          category: "political"
        }
      ]
    },
    {
      year: -650,
      era: {
        en: "The Ionian Renaissance",
        el: "Ιωνική Αναγέννηση"
      },
      events: [
        {
          title: {
            en: "The Panionion and Ionian Federation",
            el: "Το Πανιώνιον και η Ιωνική Δωδεκάπολις"
          },
          description: {
            en: "The twelve cities of Ionia formalise their religious and political federation around the sanctuary of Poseidon Heliconius on the Mycale promontory, the cultural and economic heart of the Greek east.",
            el: "Οι δώδεκα πόλεις της Ιωνίας θεσμοθετούν τη θρησκευτική και πολιτική τους ομοσπονδία γύρω από το ιερό του Ποσειδώνος Ελικωνίου στη Μυκάλη, την πολιτιστική και οικονομική καρδιά της ελληνικής Ανατολής."
          },
          extendedDescription: {
            en: "Ionian Anatolia in the seventh and sixth centuries was the wealthiest, most cosmopolitan and most intellectually adventurous region of the Greek world. Miletus, with its four harbours and a colonial network running from Egypt to the Crimea, was the largest Greek city of its day; her thinkers — Thales, Anaximander, Anaximenes — invented what later ages called philosophy by asking what the world was made of. Ephesus, with the great Artemision counted among the wonders of the world, was the religious centre. Phocaea sent ships as far as Massalia (Marseille) and Tartessus in Iberia. The twelve-city federation, the Panionion, met annually on the Mycale to celebrate the festival of the Panionia and to take collective decisions. The Ionian east was the laboratory in which lyric poetry, prose history, scientific cosmology and Greek monumental architecture in the Ionic order were first developed.",
            el: "Η ιωνική Ανατολία τον έβδομο και τον έκτο αιώνα ήταν η πλουσιότερη, η πλέον κοσμοπολίτικη και η πλέον τολμηρά πνευματικά περιοχή του ελληνικού κόσμου. Η Μίλητος, με τα τέσσερα λιμάνια της και ένα αποικιακό δίκτυο από την Αίγυπτο ως την Κριμαία, ήταν η μεγαλύτερη ελληνική πόλη της εποχής της· οι στοχαστές της — Θαλής, Αναξίμανδρος, Αναξιμένης — εφηύραν ό,τι οι μεταγενέστερες εποχές ονόμασαν φιλοσοφία, ρωτώντας από τι είναι φτιαγμένος ο κόσμος. Η Έφεσος, με το μέγα Αρτεμίσιον που συγκαταλεγόταν στα θαύματα του κόσμου, ήταν το θρησκευτικό κέντρο. Η Φώκαια έστελνε πλοία ως τη Μασσαλία και την Ταρτησσό στην Ιβηρία. Η δωδεκάπολις, το Πανιώνιον, συνερχόταν ετησίως στη Μυκάλη για τον εορτασμό των Πανιωνίων και για τη λήψη συλλογικών αποφάσεων. Η ιωνική Ανατολή ήταν το εργαστήρι όπου πρωτοαναπτύχθηκαν η λυρική ποίηση, η πεζογραφική ιστορία, η επιστημονική κοσμολογία και η μνημειακή ελληνική αρχιτεκτονική σε ιωνικό ρυθμό."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -547,
      era: {
        en: "Persian Rule",
        el: "Περσική Κυριαρχία"
      },
      events: [
        {
          title: {
            en: "Cyrus the Great Conquers Ionia",
            el: "Ο Κύρος ο Μέγας Κατακτά την Ιωνία"
          },
          description: {
            en: "After the fall of Croesus's Lydia, Cyrus's general Harpagus reduces the Ionian cities one by one, ending their independence and placing them under Achaemenid satraps.",
            el: "Μετά την πτώση της Λυδίας του Κροίσου, ο στρατηγός του Κύρου Άρπαγος υποτάσσει μία προς μία τις ιωνικές πόλεις, τερματίζοντας την ανεξαρτησία τους και θέτοντάς τες υπό αχαιμενίδες σατράπες."
          },
          extendedDescription: {
            en: "When Cyrus the Great destroyed the Lydian kingdom of Croesus in 547 BC, the Greek cities of Asia found themselves face to face with the Persian empire. They had paid tribute to Lydia for generations and offered to do the same to Cyrus, but he refused the deal — Croesus had been their ally — and sent Harpagus the Mede to reduce them by force. Most submitted after token resistance; Phocaea and Teos refused, and the bulk of their citizens sailed off, the Phocaeans to Alalia in Corsica and ultimately to Marseille, the Teans to Abdera in Thrace. The cities that remained were assigned to the satrapy of Sardis, governed by Greek tyrants installed by the Persians, and contributed contingents to the Persian fleet. For nearly fifty years the Greek east lay under an empire that, while rich and tolerant, denied it political voice.",
            el: "Όταν ο Κύρος ο Μέγας κατέλυσε το λυδικό βασίλειο του Κροίσου το 547 π.Χ., οι ελληνικές πόλεις της Ασίας βρέθηκαν αντιμέτωπες με την περσική αυτοκρατορία. Είχαν καταβάλει φόρο στη Λυδία επί γενεές και προσφέρθηκαν να πράξουν το ίδιο στον Κύρο, εκείνος όμως απέρριψε τη συμφωνία — ο Κροίσος ήταν σύμμαχός τους — και έστειλε τον Άρπαγο τον Μήδο να τις υποτάξει διά της βίας. Οι περισσότερες υπέκυψαν μετά από συμβολική αντίσταση· η Φώκαια και η Τέω αρνήθηκαν, και το μεγαλύτερο μέρος των πολιτών τους απέπλευσε, οι Φωκαείς προς την Αλαλία της Κορσικής και τελικά τη Μασσαλία, οι Τήιοι προς τα Άβδηρα στη Θράκη. Οι πόλεις που παρέμειναν εντάχθηκαν στη σατραπεία των Σάρδεων, διοικούμενες από έλληνες τυράννους εγκατεστημένους από τους Πέρσες, και προσέφεραν αποσπάσματα στον περσικό στόλο. Επί σχεδόν πενήντα έτη η ελληνική Ανατολή ήταν υπό αυτοκρατορία πλούσια και ανεκτική, που όμως της στερούσε πολιτική φωνή."
          },
          category: "military"
        }
      ]
    },
    {
      year: -499,
      era: {
        en: "The Ionian Revolt",
        el: "Ιωνική Επανάσταση"
      },
      events: [
        {
          title: {
            en: "The Ionian Revolt Begins",
            el: "Έναρξη της Ιωνικής Επανάστασης"
          },
          description: {
            en: "Aristagoras of Miletus rouses the Ionian cities against Persia and sails to Greece for help; Athens and Eretria send ships, and the burning of Sardis ignites the long Greco-Persian war.",
            el: "Ο Αρισταγόρας ο Μιλήσιος εξεγείρει τις ιωνικές πόλεις εναντίον της Περσίας και αποπλέει προς την Ελλάδα ζητώντας βοήθεια· η Αθήνα και η Ερέτρια στέλνουν πλοία, και η πυρπόληση των Σάρδεων ανάβει τον μακρύ ελληνοπερσικό πόλεμο."
          },
          extendedDescription: {
            en: "The revolt opened with the deposition of the pro-Persian tyrants of Ionia and the establishment of isonomies in their place. Aristagoras crossed the Aegean and, after being rebuffed by Sparta, found a hearing in Athens, which voted twenty ships, and in Eretria, which sent five. The combined Ionian and Athenian force marched inland from Ephesus and burnt the lower city of Sardis — though the citadel held — before being caught and defeated at Ephesus on the way home. The Athenians sailed away, leaving the Ionians to fight on alone. The revolt then spread to Cyprus, Caria and the Hellespont, but the Persian counterattack, methodical and overwhelming, picked the rebels apart over five years. The burning of Sardis Herodotus would identify as the spark that brought Darius to Marathon and Xerxes to Salamis: the moment when the long quarrel of Asia and Europe began in earnest.",
            el: "Η επανάσταση άνοιξε με την καθαίρεση των φιλοπερσικών τυράννων της Ιωνίας και την εγκαθίδρυση ισονομιών στη θέση τους. Ο Αρισταγόρας διέσχισε το Αιγαίο και, αφού απορρίφθηκε από τη Σπάρτη, βρήκε ακρόαση στην Αθήνα, που ψήφισε είκοσι πλοία, και στην Ερέτρια, που έστειλε πέντε. Η συνδυασμένη ιωνική και αθηναϊκή δύναμη βάδισε από την Έφεσο προς το εσωτερικό και πυρπόλησε την κάτω πόλη των Σάρδεων — αν και η ακρόπολη άντεξε — πριν συλληφθεί και ηττηθεί στην Έφεσο κατά την επιστροφή. Οι Αθηναίοι απέπλευσαν, εγκαταλείποντας τους Ίωνες να συνεχίσουν μόνοι. Η επανάσταση επεκτάθηκε τότε στην Κύπρο, την Καρία και τον Ελλήσποντο, αλλά η περσική αντεπίθεση, μεθοδική και συντριπτική, κατατεμάχισε τους εξεγερμένους σε πέντε χρόνια. Την πυρπόληση των Σάρδεων ο Ηρόδοτος θα αναγνώριζε ως τη σπίθα που έφερε τον Δαρείο στον Μαραθώνα και τον Ξέρξη στη Σαλαμίνα: τη στιγμή όπου η μακρά διαμάχη Ασίας και Ευρώπης άρχισε αληθινά."
          },
          category: "political"
        }
      ]
    },
    {
      year: -494,
      era: {
        en: "The Ionian Revolt",
        el: "Ιωνική Επανάσταση"
      },
      events: [
        {
          title: {
            en: "The Fall of Miletus",
            el: "Η Άλωση της Μιλήτου"
          },
          description: {
            en: "After the Ionian fleet is destroyed at Lade, the Persians take Miletus by storm, slaughter its men, enslave its women and children, and end the great age of Ionian civilisation.",
            el: "Μετά την καταστροφή του ιωνικού στόλου στη Λάδη, οι Πέρσες κυριεύουν τη Μίλητο με έφοδο, σφάζουν τους άνδρες της, ανδραποδίζουν τις γυναίκες και τα παιδιά, και τερματίζουν τη μεγάλη εποχή του ιωνικού πολιτισμού."
          },
          extendedDescription: {
            en: "The decisive naval battle of the Ionian Revolt was fought off the islet of Lade in 494 BC. The Ionians, with three hundred and fifty triremes drawn from every quarter of the Greek east, met a Phoenician fleet half as large again. The Samians defected on the morning of the battle; the line broke; the survivors fled. Miletus, besieged by land and sea, fell soon after. The Persians burnt the city, killed the men of military age, enslaved the women, transported the children deep into Persia, and dedicated the territory of the Milesian peraea to Persian nobles. The shock in Greece was profound — Phrynichus's tragedy The Capture of Miletus reduced an Athenian audience to tears and was banned by the assembly. Ionia was rebuilt, but the city that had been the intellectual capital of the Greek world never recovered her primacy.",
            el: "Η αποφασιστική ναυμαχία της Ιωνικής Επανάστασης δόθηκε ανοιχτά της νησίδος της Λάδης το 494 π.Χ. Οι Ίωνες, με τριακόσιες πενήντα τριήρεις από κάθε γωνία της ελληνικής Ανατολής, αντιμετώπισαν φοινικικό στόλο μιάμιση φορά μεγαλύτερο. Οι Σάμιοι αυτομόλησαν το πρωί της ναυμαχίας· η γραμμή έσπασε· οι επιζώντες έφυγαν. Η Μίλητος, πολιορκημένη από στεριά και θάλασσα, έπεσε λίγο αργότερα. Οι Πέρσες έκαψαν την πόλη, σκότωσαν τους άνδρες ηλικίας στρατεύσιμου, ανδραπόδισαν τις γυναίκες, μετέφεραν τα παιδιά βαθιά στην Περσία και αφιέρωσαν τη μιλησιακή περαία σε πέρσες ευγενείς. Το σοκ στην Ελλάδα ήταν βαθύ — η τραγωδία του Φρυνίχου Μιλήτου Άλωσις έκανε τους Αθηναίους θεατές να δακρύσουν και απαγορεύτηκε από την εκκλησία του δήμου. Η Ιωνία ξαναχτίστηκε, αλλά η πόλη που υπήρξε η πνευματική πρωτεύουσα του ελληνικού κόσμου δεν ανέκτησε ποτέ την πρωτεία της."
          },
          category: "military"
        }
      ]
    },
    {
      year: -386,
      era: {
        en: "Persian Restoration",
        el: "Περσική Επανάκτηση"
      },
      events: [
        {
          title: {
            en: "The King's Peace Returns Ionia to Persia",
            el: "Η Ανταλκίδειος Ειρήνη Παραδίδει την Ιωνία στους Πέρσες"
          },
          description: {
            en: "The Spartan-Persian treaty of Antalcidas concludes that 'the cities in Asia belong to the King', formally ceding the Greek east back to the Achaemenids in exchange for Persian backing against Athens and Thebes.",
            el: "Η σπαρτο-περσική συνθήκη του Ανταλκίδου ορίζει ότι 'αι εν Ασία πόλεις του Βασιλέως είναι', εκχωρώντας τυπικά την ελληνική Ανατολή στους Αχαιμενίδες με αντάλλαγμα την περσική στήριξη κατά της Αθήνας και της Θήβας."
          },
          extendedDescription: {
            en: "After the Persian Wars and the long Athenian-led Delian League had freed the Asian Greeks for most of the fifth century, the disastrous Sicilian expedition and the Peloponnesian War left Athens too weak to protect them. Sparta then took up the cause briefly under Agesilaus, but the war with Persia drained her resources and was finally settled by a treaty negotiated by the Spartan envoy Antalcidas. The King's Peace of 386 BC openly handed the Greek cities of Asia to Artaxerxes II in exchange for his enforcement of autonomy on the cities of mainland Greece. Greek public opinion was outraged but the treaty held for half a century, and the Ionian, Aeolian and Carian cities returned to a comfortable but politically diminished tributary status. The Asian Greeks would not be politically reunited with the rest of Hellas until Alexander.",
            el: "Μετά τους Περσικούς Πολέμους και την επί δεκαετίες αθηναϊκή Δηλιακή Συμμαχία που είχε ελευθερώσει τους Ασιάτες Έλληνες για το μεγαλύτερο μέρος του πέμπτου αιώνα, η καταστροφική Σικελική Εκστρατεία και ο Πελοποννησιακός Πόλεμος άφησαν την Αθήνα πολύ αδύναμη να τους προστατεύσει. Η Σπάρτη ανέλαβε για λίγο την υπόθεση υπό τον Αγησίλαο, αλλά ο πόλεμος με την Περσία στράγγισε τους πόρους της και τερματίστηκε με συνθήκη που διαπραγματεύτηκε ο σπαρτιάτης πρέσβης Ανταλκίδας. Η Ανταλκίδειος Ειρήνη του 386 π.Χ. παρέδιδε ανοιχτά τις ελληνικές πόλεις της Ασίας στον Αρταξέρξη Β΄ με αντάλλαγμα την επιβολή αυτονομίας στις πόλεις της κυρίως Ελλάδας. Η ελληνική κοινή γνώμη εξοργίστηκε, η συνθήκη όμως κράτησε μισόν αιώνα, και οι ιωνικές, αιολικές και καρικές πόλεις επέστρεψαν σε άνετο αλλά πολιτικά μειωμένο φόρου υποτελές καθεστώς. Οι Ασιάτες Έλληνες δεν θα επανενώνονταν πολιτικά με τον υπόλοιπο Ελληνισμό μέχρι τον Αλέξανδρο."
          },
          category: "political"
        }
      ]
    },
    {
      year: -334,
      era: {
        en: "The Macedonian Liberation",
        el: "Μακεδονική Απελευθέρωση"
      },
      events: [
        {
          title: {
            en: "Alexander Crosses to Asia",
            el: "Ο Αλέξανδρος Διαβαίνει στην Ασία"
          },
          description: {
            en: "Alexander of Macedon lands at the Hellespont, defeats the Persian satrapal army at the Granicus, and proclaims the liberation of the Greek cities of Asia.",
            el: "Ο Αλέξανδρος ο Μακεδών αποβιβάζεται στον Ελλήσποντο, νικά τη σατραπική στρατιά των Περσών στον Γρανικό, και διακηρύσσει την απελευθέρωση των ελληνικών πόλεων της Ασίας."
          },
          extendedDescription: {
            en: "In the spring of 334 BC, a Macedonian army of some forty thousand men crossed the Hellespont. Alexander, twenty-two years old, leapt from his ship in full armour to claim Asia as his by spear-right, and made his first sacrifice at Troy. A few weeks later, on the banks of the Granicus, he broke the assembled cavalry of the western satraps in a furious frontal charge that nearly cost him his life. The Greek cities of the coast threw open their gates almost without exception: at Ephesus he restored democracy and refounded the temple of Artemis; at Priene he laid the cornerstone of the Athena temple that still bears his dedicatory inscription. Sardis fell without a fight. The Hellenisation of the Anatolian interior, which Alexander's successors would carry through to Cappadocia and the upper Euphrates, began in these months. With Alexander's crossing the Greek east ceased to be a tributary frontier and became the heart of a new Hellenistic world stretching from the Adriatic to the Hindu Kush.",
            el: "Την άνοιξη του 334 π.Χ., μακεδονική στρατιά περίπου σαράντα χιλιάδων ανδρών διέσχισε τον Ελλήσποντο. Ο Αλέξανδρος, εικοσιδύο ετών, πήδησε από το πλοίο του πάνοπλος για να διεκδικήσει την Ασία δικαιώματι δόρατος, και έκανε την πρώτη του θυσία στην Τροία. Λίγες εβδομάδες αργότερα, στις όχθες του Γρανικού, διέλυσε το συγκεντρωμένο ιππικό των δυτικών σατραπών σε μανιώδη μετωπική έφοδο που παρά λίγο να του στοιχίσει τη ζωή. Οι ελληνικές πόλεις της παραλίας άνοιξαν σχεδόν ανεξαιρέτως τις πύλες τους: στην Έφεσο αποκατέστησε τη δημοκρατία και ξανάχτισε τον ναό της Αρτέμιδος· στην Πριήνη έθεσε τον θεμέλιο λίθο του ναού της Αθηνάς που φέρει ακόμη την αφιερωτική του επιγραφή. Οι Σάρδεις έπεσαν χωρίς μάχη. Ο εξελληνισμός του ανατολικού εσωτερικού, που οι διάδοχοι του Αλεξάνδρου θα οδηγούσαν ως την Καππαδοκία και τον άνω Ευφράτη, άρχισε αυτούς τους μήνες. Με τη διάβαση του Αλεξάνδρου η ελληνική Ανατολή έπαψε να είναι φόρου υποτελής εσχατιά και έγινε η καρδιά ενός νέου ελληνιστικού κόσμου που εκτεινόταν από την Αδριατική ως τον Ινδικό Καύκασο."
          },
          category: "military"
        }
      ]
    },
    {
      year: -281,
      era: {
        en: "The Successor Kingdoms",
        el: "Τα Βασίλεια των Διαδόχων"
      },
      events: [
        {
          title: {
            en: "Mithridates I Founds the Kingdom of Pontus",
            el: "Ο Μιθριδάτης Α΄ Ιδρύει το Βασίλειο του Πόντου"
          },
          description: {
            en: "Mithridates I Ktistes, a minor Persian dynast at Cius, slips away during the chaos following the Battle of Corupedium and proclaims himself king of Pontus, founding a dynasty that will dominate northern Anatolia for two centuries.",
            el: "Ο Μιθριδάτης Α΄ Κτίστης, μικροτοπικός πέρσης δυνάστης από την Κίο, διαφεύγει μέσα στο χάος μετά τη μάχη του Κουροπεδίου και ανακηρύσσει εαυτόν βασιλέα του Πόντου, ιδρύοντας δυναστεία που θα κυριαρχήσει στη βόρεια Ανατολία επί δύο αιώνες."
          },
          extendedDescription: {
            en: "The battle of Corupedium in 281 BC, in which the aged Seleucus killed Lysimachus and was promptly murdered by Ptolemy Ceraunus, broke the post-Alexander settlement of Asia Minor. Among those who exploited the vacuum was Mithridates, descended from one of the seven Persian noblemen who had killed the false Smerdis under Darius. From a base at Cius he carved out a kingdom in the north, founded a capital at Amaseia among the wooded mountains south of the Pontic coast, and adopted the title Ktistes — 'Founder'. His successors married Seleucid princesses, encouraged the Greek cities of the coast (which kept their own institutions), and pressed the boundaries of the kingdom outward until, under Mithridates VI Eupator a century and a half later, Pontus was the great Asian rival of Rome. The dynasty's mixture of Persian descent, Greek language and Anatolian power was the most successful Hellenistic synthesis the interior ever produced.",
            el: "Η μάχη του Κουροπεδίου το 281 π.Χ., στην οποία ο γέρων Σέλευκος σκότωσε τον Λυσίμαχο και σχεδόν αμέσως δολοφονήθηκε από τον Πτολεμαίο Κεραυνό, διέρρηξε τη μεταλεξανδρινή τάξη της Μικράς Ασίας. Μεταξύ εκείνων που εκμεταλλεύτηκαν το κενό ήταν ο Μιθριδάτης, απόγονος ενός από τους επτά πέρσες ευγενείς που είχαν σκοτώσει τον ψευδο-Σμέρδι υπό τον Δαρείο. Από βάση στην Κίο σμίλεψε ένα βασίλειο στον βορρά, ίδρυσε πρωτεύουσα στην Αμάσεια στα δασωμένα όρη νοτίως της ποντιακής ακτής, και πήρε τον τίτλο Κτίστης. Οι διάδοχοί του παντρεύτηκαν Σελευκίδες πριγκίπισσες, ενθάρρυναν τις ελληνικές πόλεις της παραλίας (που διατήρησαν τους θεσμούς τους), και ώθησαν τα σύνορα προς τα έξω, ώστε υπό τον Μιθριδάτη ΣΤ΄ Ευπάτορα έναν αιώνα και ήμισυ αργότερα, ο Πόντος ήταν ο μεγάλος ασιατικός αντίπαλος της Ρώμης. Το μείγμα περσικής καταγωγής, ελληνικής γλώσσας και ανατολικής ισχύος της δυναστείας ήταν η πιο επιτυχημένη ελληνιστική σύνθεση που γνώρισε ποτέ το εσωτερικό."
          },
          category: "political"
        }
      ]
    },
    {
      year: -263,
      era: {
        en: "The Successor Kingdoms",
        el: "Τα Βασίλεια των Διαδόχων"
      },
      events: [
        {
          title: {
            en: "Eumenes I and the Rise of Pergamon",
            el: "Ο Ευμένης Α΄ και η Άνοδος της Περγάμου"
          },
          description: {
            en: "Eumenes I throws off Seleucid suzerainty at Sardis and establishes Pergamon as an independent power, beginning the Attalid dynasty that will transform western Anatolia into a centre of Hellenistic art and learning.",
            el: "Ο Ευμένης Α΄ αποτινάσσει τη σελευκιδική επικυριαρχία στις Σάρδεις και εγκαθιδρύει την Πέργαμο ως ανεξάρτητη δύναμη, ξεκινώντας τη δυναστεία των Ατταλιδών που θα μεταμορφώσει τη δυτική Ανατολία σε κέντρο της ελληνιστικής τέχνης και της παιδείας."
          },
          extendedDescription: {
            en: "Pergamon, perched on a steep acropolis above the Caicus valley, had been left a war-treasury by Lysimachus and held in trust by his eunuch Philetaerus. Eumenes, Philetaerus's nephew and heir, defeated the Seleucid Antiochus I at Sardis in 261 BC and assumed kingship in all but name. His successors — Attalus I, Eumenes II, Attalus II — turned the city into one of the great cultural capitals of the Greek world: a great altar to Zeus that imitates the Parthenon's narrative ambition; a library of two hundred thousand volumes second only to Alexandria's; sculptors who carved the dying Gauls now in the Capitoline museum. The Attalid alliance with Rome from the Macedonian Wars onward shaped the fate of the eastern Mediterranean, and Pergamon's bequest to Rome in 133 BC would bring Roman power into Asia for the first time.",
            el: "Η Πέργαμος, σκαρφαλωμένη σε απόκρημνη ακρόπολη πάνω από την κοιλάδα του Καΐκου, είχε αφεθεί ως πολεμικό ταμείο από τον Λυσίμαχο και είχε εμπιστευθεί στον ευνούχο του Φιλέταιρο. Ο Ευμένης, ανιψιός και κληρονόμος του Φιλεταίρου, νίκησε τον σελευκίδη Αντίοχο Α΄ στις Σάρδεις το 261 π.Χ. και ανέλαβε βασιλικά δικαιώματα χωρίς τον τίτλο. Οι διάδοχοί του — Άτταλος Α΄, Ευμένης Β΄, Άταλος Β΄ — μετέτρεψαν την πόλη σε μία από τις μεγάλες πολιτιστικές πρωτεύουσες του ελληνικού κόσμου: τον μεγάλο βωμό του Διός που συναγωνίζεται την αφηγηματική φιλοδοξία του Παρθενώνος· βιβλιοθήκη διακοσίων χιλιάδων τόμων δεύτερη μόνον της Αλεξανδρινής· γλύπτες που λάξευσαν τους θνήσκοντες Γαλάτες που σώζονται σήμερα στο Καπιτώλιο. Η συμμαχία των Ατταλιδών με τη Ρώμη από τους Μακεδονικούς Πολέμους και έπειτα διαμόρφωσε τη μοίρα της ανατολικής Μεσογείου, και η κληροδοσία της Περγάμου στη Ρώμη το 133 π.Χ. θα έφερνε τη ρωμαϊκή δύναμη στην Ασία για πρώτη φορά."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -133,
      era: {
        en: "The Coming of Rome",
        el: "Η Έλευσις της Ρώμης"
      },
      events: [
        {
          title: {
            en: "Attalus III Wills Pergamon to Rome",
            el: "Ο Άτταλος Γ΄ Κληροδοτεί την Πέργαμο στη Ρώμη"
          },
          description: {
            en: "On his deathbed the last Attalid king bequeaths his kingdom to the Roman people; after suppressing the revolt of Aristonicus, Rome organises the province of Asia, the wealthiest in the empire.",
            el: "Στο νεκρικό κρεβάτι του ο τελευταίος Ατταλίδης βασιλέας κληροδοτεί το βασίλειό του στον ρωμαϊκό λαό· μετά την καταστολή της εξέγερσης του Αριστόνικου, η Ρώμη οργανώνει την επαρχία της Ασίας, την πλουσιότερη της αυτοκρατορίας."
          },
          extendedDescription: {
            en: "Attalus III was a scholarly and eccentric king who in his five-year reign devoted himself to pharmacology and the breeding of poisonous plants. He died childless in 133 BC, leaving his kingdom to Rome in a testament probably designed to forestall civil war. His illegitimate brother Aristonicus refused to recognise the will, declared himself Eumenes III, and led a revolt of slaves and free peasants under the banner of a 'state of the sun' (Heliopolis) heavily influenced by Stoic utopian thought. It took the Romans four years and the death of one consul to crush him. The new province of Asia, organised in 129 BC and tax-farmed by the publicani, became the most lucrative possession of the Republic, and the byword for the kind of provincial extortion that would help bring down Republican government. For the Greek cities themselves, Roman rule meant peace, civic prosperity, and the loss of the last shadow of political autonomy.",
            el: "Ο Άτταλος Γ΄ ήταν λόγιος και ιδιόρρυθμος βασιλέας που στην πενταετή βασιλεία του αφοσιώθηκε στη φαρμακολογία και την καλλιέργεια δηλητηριωδών φυτών. Πέθανε άτεκνος το 133 π.Χ., κληροδοτώντας το βασίλειό του στη Ρώμη με διαθήκη που πιθανώς αποσκοπούσε στην αποτροπή εμφυλίου. Ο νόθος αδελφός του Αριστόνικος αρνήθηκε να αναγνωρίσει τη διαθήκη, ανακηρύχθηκε Ευμένης Γ΄ και οδήγησε εξέγερση δούλων και ελευθέρων αγροτών υπό τη σημαία μιας 'πολιτείας του ήλιου' (Ηλιόπολις) επηρεασμένης βαθιά από στωικές ουτοπικές σκέψεις. Χρειάστηκαν στους Ρωμαίους τέσσερα χρόνια και ο θάνατος ενός υπάτου για να τον συντρίψουν. Η νέα επαρχία της Ασίας, οργανωμένη το 129 π.Χ. και ενοικιαζόμενη φορολογικά στους δημοσιώνες, έγινε το επικερδέστερο κτήμα της Δημοκρατίας και ο μέτρος του είδους της επαρχιακής εκβίασης που θα συνέβαλλε στην πτώση του δημοκρατικού πολιτεύματος. Για τις ίδιες τις ελληνικές πόλεις, η ρωμαϊκή κυριαρχία σήμαινε ειρήνη, αστική ευημερία και την απώλεια της τελευταίας σκιάς πολιτικής αυτονομίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: -88,
      era: {
        en: "Mithridates and the Crisis",
        el: "Ο Μιθριδάτης και η Κρίσις"
      },
      events: [
        {
          title: {
            en: "The Asiatic Vespers",
            el: "Οι Σφαγές των Ιταλών της Ασίας"
          },
          description: {
            en: "Mithridates VI of Pontus orders the simultaneous massacre of every Italian and Roman citizen in the Greek cities of Asia Minor; perhaps eighty thousand are killed in a single day.",
            el: "Ο Μιθριδάτης ΣΤ΄ του Πόντου διατάσσει την ταυτόχρονη σφαγή κάθε Ιταλού και Ρωμαίου πολίτη στις ελληνικές πόλεις της Μικράς Ασίας· ίσως ογδόντα χιλιάδες θανατώνονται σε μια ημέρα."
          },
          extendedDescription: {
            en: "Mithridates VI Eupator, the most brilliant and ruthless of the Pontic kings, had inherited the resentments of the Greek east against the Roman publicani and the dream of an Asia free of foreign rule. In 88 BC, having invaded the province of Asia and been received as a liberator at Ephesus, he wrote secret letters to the Greek city governments ordering them, on a single appointed day, to put to death every Italian — citizens, freedmen, slaves of Italian masters, even children — within their walls. The order was carried out with chilling thoroughness. Roman sources give totals of eighty or even a hundred and fifty thousand dead. The Asiatic Vespers committed the Greek cities irrevocably to Mithridates's cause and ensured that Rome's response, when it came under Sulla, would be a war of vengeance. Sulla took Athens by storm in 86, defeated Mithridates's general Archelaus at Chaeronea, and imposed on Asia a fine so enormous that the province was still paying it off a generation later.",
            el: "Ο Μιθριδάτης ΣΤ΄ Ευπάτωρ, ο λαμπρότερος και αδίστακτος των Ποντίων βασιλέων, είχε κληρονομήσει τις πικρίες της ελληνικής Ανατολής εναντίον των ρωμαίων δημοσιωνών και το όνειρο μιας Ασίας ελεύθερης από ξένο ζυγό. Το 88 π.Χ., αφού εισέβαλε στην επαρχία της Ασίας και έγινε δεκτός ως ελευθερωτής στην Έφεσο, έγραψε μυστικές επιστολές στις κυβερνήσεις των ελληνικών πόλεων διατάσσοντάς τες, μια ορισμένη ημέρα, να θανατώσουν κάθε Ιταλό — πολίτες, απελευθέρους, δούλους ιταλών κυρίων, ακόμη και παιδιά — εντός των τειχών τους. Η εντολή εκτελέστηκε με ψυχρή σχολαστικότητα. Οι ρωμαϊκές πηγές δίνουν αριθμούς ογδόντα ή και εκατόν πενήντα χιλιάδων νεκρών. Οι σφαγές δέσμευσαν αμετάκλητα τις ελληνικές πόλεις στην υπόθεση του Μιθριδάτη και διασφάλισαν ότι η ρωμαϊκή απάντηση, όταν θα ερχόταν υπό τον Σύλλα, θα ήταν πόλεμος εκδίκησης. Ο Σύλλας πήρε την Αθήνα με έφοδο το 86, νίκησε τον στρατηγό του Μιθριδάτη Αρχέλαο στη Χαιρώνεια, και επέβαλε στην Ασία πρόστιμο τόσο τεράστιο που η επαρχία ξεπλήρωνε ακόμη μια γενεά αργότερα."
          },
          category: "military"
        }
      ]
    },
    {
      year: -64,
      era: {
        en: "Pompey's Settlement",
        el: "Η Διευθέτηση του Πομπηίου"
      },
      events: [
        {
          title: {
            en: "Pompey Reorganises the Greek East",
            el: "Ο Πομπήιος Αναδιοργανώνει την Ελληνική Ανατολή"
          },
          description: {
            en: "After driving Mithridates to suicide in the Crimea, Pompey settles the affairs of Anatolia, annexing Pontus to Bithynia and ending the great age of Hellenistic kingdoms.",
            el: "Αφού οδηγεί τον Μιθριδάτη στην αυτοκτονία στην Κριμαία, ο Πομπήιος ρυθμίζει τις υποθέσεις της Ανατολίας, προσαρτώντας τον Πόντο στη Βιθυνία και τερματίζοντας τη μεγάλη εποχή των ελληνιστικών βασιλείων."
          },
          extendedDescription: {
            en: "Pompey's eastern campaign, the most consequential proconsular command of the late Republic, swept up the loose ends left by Lucullus. He defeated Mithridates at Nicopolis (a city he founded to commemorate the victory and which became a stronghold of Pontic Hellenism), drove the king into the Crimea where he eventually killed himself, deposed the last Seleucid, organised Syria as a province, and at Damascus settled the religious and political affairs of the Jewish state. In Anatolia he created the joint province of Pontus and Bithynia along the southern Black Sea coast, ringing the rest of the peninsula with client kingdoms that would be progressively absorbed over the next century. The Pompeian settlement, ratified by the Senate after years of obstruction, gave the Greek east the administrative shape it would keep through the long Roman peace, and gave the cities of the coast — Sinope, Amisus, Heraclea, Trapezus — a guarantee of municipal autonomy that the Empire would respect.",
            el: "Η ανατολική εκστρατεία του Πομπηίου, η σημαντικότερη ανθυπατική διοίκηση της ύστερης Δημοκρατίας, μάζεψε τα κουλουριασμένα νήματα που είχε αφήσει ο Λούκουλλος. Νίκησε τον Μιθριδάτη στη Νικόπολη (πόλη που ίδρυσε προς τιμήν της νίκης και που έγινε προπύργιο του ποντιακού ελληνισμού), τον έδιωξε στην Κριμαία όπου τελικά αυτοκτόνησε, καθαίρεσε τον τελευταίο Σελευκίδη, οργάνωσε τη Συρία ως επαρχία, και στη Δαμασκό ρύθμισε τις θρησκευτικές και πολιτικές υποθέσεις του ιουδαϊκού κράτους. Στην Ανατολία δημιούργησε τη συνδυασμένη επαρχία Πόντου και Βιθυνίας κατά μήκος της νότιας ποντιακής ακτής, περιβάλλοντας την υπόλοιπη χερσόνησο με υποτελή βασίλεια που θα ενσωματώνονταν σταδιακά τον επόμενο αιώνα. Η πομπηιανή διευθέτηση, επικυρωμένη από τη Σύγκλητο μετά από χρόνια κωλυσιεργίας, έδωσε στην ελληνική Ανατολή τη διοικητική μορφή που θα διατηρούσε καθ' όλη τη μακρά ρωμαϊκή ειρήνη, και έδωσε στις πόλεις της παραλίας — Σινώπη, Αμισό, Ηράκλεια, Τραπεζούντα — εγγύηση δημοτικής αυτονομίας που η Αυτοκρατορία θα σεβόταν."
          },
          category: "political"
        }
      ]
    },
    {
      year: 17,
      era: {
        en: "Roman Anatolia",
        el: "Ρωμαϊκή Ανατολία"
      },
      events: [
        {
          title: {
            en: "Cappadocia Annexed",
            el: "Προσάρτηση της Καππαδοκίας"
          },
          description: {
            en: "Tiberius deposes the last client king Archelaus, annexes Cappadocia as an imperial province, and brings Greek civic life to the high plateau where it had till then been only a veneer.",
            el: "Ο Τιβέριος καθαιρεί τον τελευταίο πελάτη βασιλέα Αρχέλαο, προσαρτά την Καππαδοκία ως αυτοκρατορική επαρχία, και φέρνει την ελληνική αστική ζωή στο υψίπεδο όπου έως τότε ήταν μόλις επίστρωμα."
          },
          extendedDescription: {
            en: "Cappadocia, the volcanic plateau between the upper Halys and the Taurus, had been ruled since the fourth century BC by a Persian-descended dynasty that had survived all the storms of the Hellenistic age by careful neutrality. Archelaus, the last of the line, ruled for fifty-five years and was a friend of Antony and then of Augustus, but quarrelled with Tiberius after the latter's accession. Tiberius summoned him to Rome, accused him of treason, and on his death in 17 AD annexed the kingdom. The new province ran from Pontus to the Euphrates and contained the strategic frontier garrisons of Melitene and Satala, two of the longest-occupied Roman bases in the East. Under Roman rule the Cappadocian cities — Caesarea (Mazaca), Tyana, Comana, Sebasteia — adopted Greek civic constitutions, Greek-language gymnasia, and Greek religious cults overlaid on the older Anatolian ones. Within two centuries Cappadocian Greek would become the literary medium of the great Cappadocian Fathers of the Church.",
            el: "Η Καππαδοκία, το ηφαιστειακό οροπέδιο μεταξύ του άνω Άλυος και του Ταύρου, κυβερνιόταν από τον τέταρτο αιώνα π.Χ. από δυναστεία περσικής καταγωγής που είχε επιβιώσει όλων των θυελλών της ελληνιστικής εποχής μέσω προσεκτικής ουδετερότητας. Ο Αρχέλαος, ο τελευταίος της σειράς, βασίλευσε πενήντα πέντε χρόνια και υπήρξε φίλος του Αντωνίου και έπειτα του Αυγούστου, ήρθε όμως σε ρήξη με τον Τιβέριο μετά την άνοδό του. Ο Τιβέριος τον κάλεσε στη Ρώμη, τον κατηγόρησε για προδοσία, και επί του θανάτου του το 17 μ.Χ. προσάρτησε το βασίλειο. Η νέα επαρχία εκτεινόταν από τον Πόντο ως τον Ευφράτη και περιλάμβανε τις στρατηγικές μεθοριακές φρουρές της Μελιτηνής και των Σατάλων, δύο από τις μακροβιότερα κατεχόμενες ρωμαϊκές βάσεις στην Ανατολή. Υπό τη ρωμαϊκή κυριαρχία οι καππαδοκικές πόλεις — Καισάρεια (Μάζακα), Τύανα, Κόμανα, Σεβάστεια — υιοθέτησαν ελληνικά αστικά πολιτεύματα, ελληνόφωνα γυμνάσια και ελληνικές θρησκευτικές λατρείες που υπερτέθηκαν στις παλαιότερες ανατολικές. Εντός δύο αιώνων η καππαδοκική ελληνική θα γινόταν η λογοτεχνική γλώσσα των μεγάλων Καππαδοκών Πατέρων της Εκκλησίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 53,
      era: {
        en: "The Apostolic Mission",
        el: "Η Αποστολική Αποστολή"
      },
      events: [
        {
          title: {
            en: "Paul Preaches at Ephesus",
            el: "Ο Παύλος Κηρύσσει στην Έφεσο"
          },
          description: {
            en: "Paul of Tarsus settles at Ephesus for over two years; from this base the Greek of Asia Minor becomes the first vehicle of Christian preaching, scripture and liturgy.",
            el: "Ο Παύλος ο Ταρσεύς εγκαθίσταται στην Έφεσο για περισσότερο από δύο χρόνια· από αυτή τη βάση η ελληνική της Μικράς Ασίας γίνεται το πρώτο όχημα χριστιανικού κηρύγματος, γραφής και λειτουργίας."
          },
          extendedDescription: {
            en: "Paul of Tarsus was Anatolian by birth — a Hellenised Jew of Cilicia, citizen of a Greek city, Pharisee by training. His three great missionary journeys swept through Asia Minor: Galatia, Pisidia, Phrygia, Lycaonia and at last Ephesus, where between roughly 52 and 55 AD he taught daily in the hall of Tyrannus and from where his correspondence with the churches of Corinth, Galatia and Philippi was carried. Of the seven churches addressed in the Apocalypse — Ephesus, Smyrna, Pergamon, Thyatira, Sardis, Philadelphia, Laodicea — all are Anatolian. The Gospel of John is traditionally placed at Ephesus; Polycarp's church was Smyrna; Ignatius of Antioch wrote his letters from Anatolian gaols. For the next millennium and a half Christianity would be, more than any other thing, an Anatolian religion in Greek garments.",
            el: "Ο Παύλος ο Ταρσεύς ήταν Ανατολίτης εκ γενετής — εξελληνισμένος εβραίος της Κιλικίας, πολίτης ελληνικής πόλεως, Φαρισαίος εκ παιδείας. Τα τρία μεγάλα ιεραποστολικά του ταξίδια διέτρεξαν τη Μικρά Ασία: Γαλατία, Πισιδία, Φρυγία, Λυκαονία και τελικά Έφεσος, όπου μεταξύ περίπου 52 και 55 μ.Χ. δίδασκε καθημερινά στη σχολή του Τυράννου και από όπου διεκπεραιωνόταν η αλληλογραφία του με τις εκκλησίες Κορίνθου, Γαλατίας και Φιλίππων. Από τις επτά εκκλησίες της Αποκαλύψεως — Έφεσος, Σμύρνη, Πέργαμος, Θυάτειρα, Σάρδεις, Φιλαδέλφεια, Λαοδίκεια — όλες είναι ανατολικές. Το κατά Ιωάννην Ευαγγέλιον τοποθετείται κατά παράδοση στην Έφεσο· η εκκλησία του Πολυκάρπου ήταν η Σμύρνη· ο Ιγνάτιος Αντιοχείας έγραψε τις επιστολές του από ανατολικές φυλακές. Για την επόμενη μιάμιση χιλιετία ο χριστιανισμός θα ήταν, περισσότερο από κάθε άλλο, μια ανατολική θρησκεία με ελληνικό ένδυμα."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 325,
      era: {
        en: "The Ecumenical Councils",
        el: "Αι Οικουμενικαί Σύνοδοι"
      },
      events: [
        {
          title: {
            en: "First Council of Nicaea",
            el: "Α΄ Οικουμενική Σύνοδος της Νικαίας"
          },
          description: {
            en: "Constantine convenes the first ecumenical council in the Bithynian city of Nicaea; the Nicene Creed defines the orthodoxy of the Christian world and Asia Minor becomes its theological heartland.",
            el: "Ο Κωνσταντίνος συγκαλεί την πρώτη οικουμενική σύνοδο στη βιθυνιακή πόλη της Νίκαιας· το Σύμβολο της Νικαίας ορίζει την ορθοδοξία του χριστιανικού κόσμου και η Μικρά Ασία γίνεται η θεολογική της καρδιά."
          },
          extendedDescription: {
            en: "Nicaea, a tidy provincial city on the lake of Ascanius opposite Constantinople, was chosen for its accessibility from both halves of the empire and for the imperial palace nearby. Over three hundred bishops attended — overwhelmingly Greek-speaking, overwhelmingly Anatolian. The council condemned the doctrine of Arius (himself an Alexandrian priest of Libyan descent) and produced the creed that defined the consubstantiality of the Son with the Father. Of the seven ecumenical councils of the undivided church, six would be held in Anatolia: Nicaea I (325), Constantinople I (381), Ephesus (431), Chalcedon (451), Constantinople II (553), Constantinople III (680-1), Nicaea II (787). The history of Christian doctrine for half a millennium is the history of Anatolian Greek theology arguing with itself.",
            el: "Η Νίκαια, τακτοποιημένη επαρχιακή πόλη στη λίμνη Ασκανία απέναντι από την Κωνσταντινούπολη, επελέγη για την προσβασιμότητά της και από τα δύο ήμισυ της αυτοκρατορίας και για το γειτονικό αυτοκρατορικό ανάκτορο. Παρευρέθηκαν πλέον των τριακοσίων επισκόπων — συντριπτικά ελληνόφωνοι, συντριπτικά ανατολικοί. Η σύνοδος καταδίκασε τη διδασκαλία του Αρείου (ίδιος αλεξανδρινός πρεσβύτερος λιβυκής καταγωγής) και εξέδωσε το σύμβολο που όρισε την ομοούσιον φύση του Υιού με τον Πατέρα. Από τις επτά οικουμενικές συνόδους της αδιαιρέτου Εκκλησίας, οι έξι θα γίνονταν στην Ανατολία: Α΄ Νικαίας (325), Α΄ Κωνσταντινουπόλεως (381), Εφέσου (431), Χαλκηδόνος (451), Β΄ Κωνσταντινουπόλεως (553), Γ΄ Κωνσταντινουπόλεως (680-1), Β΄ Νικαίας (787). Η ιστορία του χριστιανικού δόγματος επί μισή χιλιετία είναι η ιστορία της ανατολικής ελληνικής θεολογίας που συζητεί με τον εαυτό της."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 451,
      era: {
        en: "The Ecumenical Councils",
        el: "Αι Οικουμενικαί Σύνοδοι"
      },
      events: [
        {
          title: {
            en: "Council of Chalcedon",
            el: "Δ΄ Οικουμενική Σύνοδος της Χαλκηδόνος"
          },
          description: {
            en: "The fourth ecumenical council at Chalcedon defines the two natures of Christ; the rejection of the definition by the Oriental churches creates the schism that will outlive the empire.",
            el: "Η Δ΄ Οικουμενική Σύνοδος στη Χαλκηδόνα ορίζει τις δύο φύσεις του Χριστού· η απόρριψη του όρου από τις ανατολικές εκκλησίες δημιουργεί το σχίσμα που θα επιβιώσει της αυτοκρατορίας."
          },
          extendedDescription: {
            en: "Chalcedon, a coastal town across the Bosporus from Constantinople, hosted the largest of the ancient councils — perhaps six hundred bishops. The Chalcedonian definition, drafted in part from a letter of Pope Leo I, declared Christ to be 'one person in two natures, without confusion, without change, without division, without separation'. The Greek-speaking churches of Anatolia accepted it; the Syriac- and Coptic-speaking churches of Syria and Egypt rejected it as a betrayal of Cyril of Alexandria's vocabulary. The rupture, never healed, produced the Armenian, Syrian and Coptic Orthodox communions that survive to this day. Within Asia Minor, however, Chalcedonian orthodoxy became identical with imperial loyalty and with the slow theological consolidation of the Anatolian church around Constantinople. It was on this basis — Greek, Chalcedonian, imperial — that Anatolian Hellenism would survive the seventh-century crisis and emerge as Byzantine.",
            el: "Η Χαλκηδών, παράκτια πόλη απέναντι από την Κωνσταντινούπολη, φιλοξένησε τη μεγαλύτερη των αρχαίων συνόδων — ίσως εξακόσιοι επίσκοποι. Ο όρος της Χαλκηδόνος, βασισμένος εν μέρει σε επιστολή του πάπα Λέοντος Α΄, διεκήρυξε τον Χριστό 'εν δύο φύσεσιν ασυγχύτως, ατρέπτως, αδιαιρέτως, αχωρίστως'. Οι ελληνόφωνες εκκλησίες της Ανατολίας τον δέχθηκαν· οι συριόφωνες και κοπτόφωνες εκκλησίες της Συρίας και της Αιγύπτου τον απέρριψαν ως προδοσία του λεξιλογίου του Κυρίλλου Αλεξανδρείας. Η ρήξη, που ποτέ δεν επουλώθηκε, παρήγαγε τις αρμενικές, συριακές και κοπτικές ορθόδοξες κοινωνίες που επιβιώνουν έως σήμερα. Εντός όμως της Μικράς Ασίας, η χαλκηδόνια ορθοδοξία ταυτίστηκε με την αυτοκρατορική νομιμοφροσύνη και με τη βραδεία θεολογική παγίωση της ανατολικής εκκλησίας γύρω από την Κωνσταντινούπολη. Σ' αυτή τη βάση — ελληνική, χαλκηδόνια, αυτοκρατορική — ο ανατολικός ελληνισμός θα επιβίωνε της κρίσεως του εβδόμου αιώνα και θα αναδυόταν ως βυζαντινός."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1071,
      era: {
        en: "The Turkish Conquest",
        el: "Η Τουρκική Κατάκτησις"
      },
      events: [
        {
          title: {
            en: "The Battle of Manzikert",
            el: "Η Μάχη του Ματζικέρτ"
          },
          description: {
            en: "Alp Arslan defeats and captures the emperor Romanos IV at Manzikert in eastern Anatolia; the central plateau, the heart of Byzantine Greek-speaking civilisation for seven centuries, lies open to Turkmen tribes.",
            el: "Ο Αλπ Αρσλάν συντρίβει και αιχμαλωτίζει τον αυτοκράτορα Ρωμανό Δ΄ στο Ματζικέρτ της ανατολικής Ανατολίας· το κεντρικό οροπέδιο, η καρδιά του βυζαντινού ελληνόφωνου πολιτισμού επί επτά αιώνες, εκτίθεται στις τουρκομανικές φυλές."
          },
          extendedDescription: {
            en: "The defeat at Manzikert was not, in itself, a catastrophic loss of men — the Byzantine army was beaten but not annihilated, and Romanos was released after a chivalrous captivity. The catastrophe came in the political collapse that followed: civil war in Constantinople blinded and deposed Romanos, the army of the East dissolved into rival factions, and the Turkmen bands who had been picking at the frontier for a generation poured through the gap. Within twenty years they had reached Smyrna and the Aegean. The great cities of the coast were retaken by the First Crusade and by Alexius I, but the central plateau was lost forever. From the late eleventh century the Greek-speaking population of Cappadocia, Phrygia and Galatia begins its long retreat — to the coastal cities, to the offshore islands, to the secret rock churches of Göreme. The Sultanate of Rum, with its capital at Iconium (Konya), would rule from a Persianised Seljuk court using Greek scribes and Greek architectural traditions, but the demographic and religious balance of Anatolia tipped decisively, and forever, against Byzantium.",
            el: "Η ήττα στο Ματζικέρτ δεν ήταν, καθαυτή, καταστροφική απώλεια ανδρών — ο βυζαντινός στρατός ηττήθηκε αλλά δεν αφανίστηκε, και ο Ρωμανός ελευθερώθηκε μετά από ιπποτική αιχμαλωσία. Η καταστροφή ήρθε στην πολιτική κατάρρευση που ακολούθησε: εμφύλιος στην Κωνσταντινούπολη τύφλωσε και καθαίρεσε τον Ρωμανό, ο στρατός της Ανατολής διαλύθηκε σε αντίπαλες φατρίες, και τα τουρκομανικά σώματα που τσιμπολογούσαν τα σύνορα για μια γενεά εισέρρευσαν από το κενό. Μέσα σε είκοσι χρόνια είχαν φθάσει στη Σμύρνη και το Αιγαίο. Οι μεγάλες πόλεις της παραλίας ξανακαταλήφθηκαν από την Α΄ Σταυροφορία και τον Αλέξιο Α΄, αλλά το κεντρικό οροπέδιο χάθηκε για πάντα. Από τα τέλη του ενδέκατου αιώνα ο ελληνόφωνος πληθυσμός της Καππαδοκίας, της Φρυγίας και της Γαλατίας αρχίζει τη μακρά υποχώρησή του — στις παράκτιες πόλεις, στα νησιά του Αιγαίου, στους κρυφούς βραχονάους του Γκιορεμέ. Το σουλτανάτο του Ρουμ, με πρωτεύουσα το Ικόνιο, θα κυβερνούσε από εκπερσισμένη σελτζουκική αυλή με χρήση ελλήνων γραφέων και ελληνικών αρχιτεκτονικών παραδόσεων, αλλά η δημογραφική και θρησκευτική ισορροπία της Ανατολίας έγειρε αποφασιστικά, και για πάντα, κατά του Βυζαντίου."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1204,
      era: {
        en: "The Empire of Trebizond",
        el: "Η Αυτοκρατορία της Τραπεζούντος"
      },
      events: [
        {
          title: {
            en: "Alexios Komnenos Founds the Empire of Trebizond",
            el: "Ο Αλέξιος Κομνηνός Ιδρύει την Αυτοκρατορία της Τραπεζούντος"
          },
          description: {
            en: "Three weeks before the Latin sack of Constantinople, two grandsons of Andronikos I seize Trebizond with Georgian help; the small Pontic state will outlive Constantinople herself by eight years.",
            el: "Τρεις εβδομάδες πριν τη λατινική άλωση της Κωνσταντινούπολης, δύο εγγονοί του Ανδρονίκου Α΄ καταλαμβάνουν την Τραπεζούντα με γεωργιανή βοήθεια· το μικρό ποντιακό κράτος θα επιβιώσει της ίδιας της Κωνσταντινούπολης κατά οκτώ χρόνια."
          },
          extendedDescription: {
            en: "Alexios and David Komnenos, grandsons of the murdered emperor Andronikos I, had been raised at the court of their aunt Queen Tamar of Georgia. In April 1204, with Tamar's troops behind them, they took the great Pontic harbour of Trebizond and proclaimed Alexios emperor. They styled themselves Megas Komnenos — 'Grand Komnenos' — and ruled a long thin coastal strip from the Phasis to Sinope. Their state, smaller and less powerful than its rivals at Nicaea and Epirus, nonetheless cultivated the most refined Byzantine court culture outside the capital: the Cathedral of Hagia Sophia of Trebizond, with its Comnenian frescoes, is one of the great monuments of late Byzantine art. Trebizond's princesses were sought after for marriages from Constantinople to Tabriz; her merchants linked the Black Sea grain trade to the Genoese and Venetian networks; her monks gave the Pontic Greek language its distinctive medieval form. The empire lasted two hundred and fifty-seven years.",
            el: "Ο Αλέξιος και ο Δαβίδ Κομνηνός, εγγονοί του δολοφονημένου αυτοκράτορα Ανδρονίκου Α΄, είχαν μεγαλώσει στην αυλή της θείας τους βασίλισσας Τάμαρ της Γεωργίας. Τον Απρίλιο του 1204, με τα στρατεύματα της Τάμαρ πίσω τους, κατέλαβαν το μεγάλο ποντιακό λιμάνι της Τραπεζούντας και ανακήρυξαν τον Αλέξιο αυτοκράτορα. Αυτοαποκαλούνταν Μεγάλοι Κομνηνοί και κυβερνούσαν μια μακρά λεπτή παράκτια λωρίδα από τον Φάση ως τη Σινώπη. Το κράτος τους, μικρότερο και ασθενέστερο από τους αντιπάλους του στη Νίκαια και την Ήπειρο, καλλιέργησε όμως τον πιο εκλεπτυσμένο βυζαντινό αυλικό πολιτισμό εκτός της πρωτεύουσας: η Αγία Σοφία της Τραπεζούντας, με τις κομνήνεις τοιχογραφίες της, είναι ένα από τα μεγάλα μνημεία της ύστερης βυζαντινής τέχνης. Οι πριγκίπισσες της Τραπεζούντας ήταν περιζήτητες για γάμους από την Κωνσταντινούπολη ως την Ταυρίδα· οι έμποροί της συνέδεαν το εμπόριο σιτηρών του Ευξείνου με τα γενοβέζικα και βενετικά δίκτυα· οι μοναχοί της έδωσαν στην ποντιακή ελληνική την ιδιαίτερη μεσαιωνική της μορφή. Η αυτοκρατορία διήρκεσε διακόσια πενήντα επτά χρόνια."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1461,
      era: {
        en: "The Fall of Trebizond",
        el: "Η Άλωσις της Τραπεζούντος"
      },
      events: [
        {
          title: {
            en: "The Fall of Trebizond",
            el: "Η Άλωση της Τραπεζούντας"
          },
          description: {
            en: "Mehmed II besieges Trebizond by land and sea; the last Greek-speaking sovereign state of the East, David Megas Komnenos surrenders after a month, and the last Greek empire ends.",
            el: "Ο Μωάμεθ Β΄ πολιορκεί την Τραπεζούντα από στεριά και θάλασσα· ο τελευταίος ελληνόφωνος ηγεμόνας της Ανατολής, Δαβίδ Μέγας Κομνηνός, παραδίδεται μετά από μήνα, και το τελευταίο ελληνικό βασίλειο τερματίζεται."
          },
          extendedDescription: {
            en: "Mehmed II, having taken Constantinople in 1453, spent the next eight years systematically eliminating the splinter states. Trebizond was last. In the summer of 1461 he marched a great army through the Pontic mountains while his fleet sealed the harbour. David Komnenos, having lost his Turkmen allies and his hopes of Western help, surrendered on the promise of estates in Thrace; the city was spared a sack but its treasures and its workshops were taken to Constantinople. The Komneni were exiled and within two years David and his sons were executed on charges of treasonous correspondence. For the Greek Pontus the fall did not mean immediate Islamisation: the mountain villages of the interior, with their crypto-Christian and openly Christian communities, would speak Pontic Greek and observe Orthodox feasts continuously until 1923. But the political tradition of independent Anatolian Hellenism, founded in 281 BC with the Pontic kingdom and renewed in 1204 with the Komnenian empire, came to an end in August 1461.",
            el: "Ο Μωάμεθ Β΄, έχοντας πάρει την Κωνσταντινούπολη το 1453, αφιέρωσε τα επόμενα οκτώ χρόνια στη συστηματική εξάλειψη των διασπαρτών κρατιδίων. Η Τραπεζούς ήταν το τελευταίο. Το καλοκαίρι του 1461 οδήγησε μεγάλη στρατιά μέσα από τα ποντιακά όρη ενώ ο στόλος του απέκλεισε το λιμάνι. Ο Δαβίδ Κομνηνός, έχοντας χάσει τους τουρκομανικούς συμμάχους του και τις ελπίδες δυτικής βοήθειας, παραδόθηκε με την υπόσχεση κτημάτων στη Θράκη· η πόλη γλίτωσε τη λεηλασία αλλά οι θησαυροί και τα εργαστήριά της μεταφέρθηκαν στην Κωνσταντινούπολη. Οι Κομνηνοί εξορίστηκαν και εντός δύο ετών ο Δαβίδ και οι υιοί του εκτελέστηκαν με κατηγορίες προδοτικής αλληλογραφίας. Για τον ελληνικό Πόντο η πτώση δεν σήμανε άμεσο εξισλαμισμό: τα ορεινά χωριά του εσωτερικού, με τις κρυπτοχριστιανικές και ανοιχτά χριστιανικές κοινότητές τους, θα μιλούσαν ποντιακά ελληνικά και θα τηρούσαν την ορθόδοξη πίστη αδιάκοπα μέχρι το 1923. Όμως η πολιτική παράδοση ανεξάρτητου ανατολικού ελληνισμού, που είχε ιδρυθεί το 281 π.Χ. με το ποντιακό βασίλειο και ανανεωθεί το 1204 με την κομνηνή αυτοκρατορία, τερματίστηκε τον Αύγουστο του 1461."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1669,
      era: {
        en: "Ottoman Anatolia",
        el: "Οθωμανική Ανατολία"
      },
      events: [
        {
          title: {
            en: "The Phanariots Take the Patriarchate",
            el: "Οι Φαναριώτες Αναλαμβάνουν το Πατριαρχείο"
          },
          description: {
            en: "Greek merchant families of the Phanar quarter consolidate their hold on the Ecumenical Patriarchate and on the dragomanate; through these offices the Greek east of the Ottoman Empire is administered by Greeks for nearly two centuries.",
            el: "Ελληνικές εμπορικές οικογένειες της φαναριώτικης συνοικίας εδραιώνουν τον έλεγχο τους στο Οικουμενικό Πατριαρχείο και τη μεγάλη δραγομανία· μέσω αυτών των αξιωμάτων η ελληνική Ανατολή της Οθωμανικής Αυτοκρατορίας διοικείται από Έλληνες επί δύο σχεδόν αιώνες."
          },
          extendedDescription: {
            en: "After the conquest of Crete in 1669 and the consequent stabilisation of Ottoman power in the Aegean, a circle of Greek aristocratic families based in the Phanar — the patriarchal quarter of Constantinople — emerged as the indispensable intermediaries between the Porte and its Christian subjects. The Mavrokordatos, Ypsilantis, Kantakouzinos, Karatzas and Soutzos families supplied the Grand Dragomans of the Porte and of the Fleet, the Hospodars of Wallachia and Moldavia, and most of the patriarchs and bishops of the Greek east. Through their patronage Greek schools were founded in Smyrna, Bucharest, Iaşi, and a dozen Anatolian cities; Greek presses produced editions of the Fathers, of classical authors, and increasingly of Enlightenment texts. The Phanariot system was paternalistic and corrupt by the standards of any age, but it gave the Greek-speaking Christians of the Ottoman empire a continuous administrative and educational class for two hundred years.",
            el: "Μετά την κατάκτηση της Κρήτης το 1669 και τη συνακόλουθη σταθεροποίηση της οθωμανικής εξουσίας στο Αιγαίο, κύκλος ελληνικών αριστοκρατικών οικογενειών με έδρα τον Φανάρι — την πατριαρχική συνοικία της Κωνσταντινούπολης — αναδείχθηκε σε αναντικατάστατο μεσολαβητή μεταξύ της Πύλης και των χριστιανών υπηκόων της. Οι Μαυροκορδάτοι, Υψηλάντηδες, Καντακουζηνοί, Καρατζάδες και Σούτσοι παρείχαν τους Μέγαλους Δραγουμάνους της Πύλης και του Στόλου, τους Ηγεμόνες της Ουγγροβλαχίας και της Μολδαβίας, και τους περισσότερους πατριάρχες και επισκόπους της ελληνικής Ανατολής. Με τη χορηγία τους ιδρύθηκαν ελληνικά σχολεία στη Σμύρνη, στο Βουκουρέστι, στο Ιάσι και σε δώδεκα ανατολικές πόλεις· ελληνικά τυπογραφεία τύπωσαν εκδόσεις των Πατέρων, των κλασικών συγγραφέων, και ολοένα και περισσότερο διαφωτιστικών κειμένων. Το φαναριώτικο σύστημα ήταν πατερναλιστικό και διεφθαρμένο με τα μέτρα οποιασδήποτε εποχής, αλλά έδωσε στους ελληνόφωνους χριστιανούς της οθωμανικής αυτοκρατορίας μια συνεχή διοικητική και εκπαιδευτική τάξη επί διακόσια χρόνια."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1908,
      era: {
        en: "The Young Turk Era",
        el: "Η Εποχή των Νεοτούρκων"
      },
      events: [
        {
          title: {
            en: "The Young Turk Revolution",
            el: "Η Επανάσταση των Νεοτούρκων"
          },
          description: {
            en: "The Committee of Union and Progress forces the restoration of the constitution; initial hopes for Ottoman pluralism give way within a few years to a militant Turkish nationalism that targets the Greek and Armenian populations of Anatolia.",
            el: "Η Επιτροπή Ένωσις και Πρόοδος επιβάλλει την αποκατάσταση του συντάγματος· οι αρχικές ελπίδες για οθωμανικό πλουραλισμό δίνουν τη θέση τους μέσα σε λίγα χρόνια σε μαχητικό τουρκικό εθνικισμό που στρέφεται κατά των ελληνικών και αρμενικών πληθυσμών της Ανατολίας."
          },
          extendedDescription: {
            en: "On the eve of the First World War the Greek population of Anatolia probably exceeded two million: a million and a half in western Asia Minor — the great city of Smyrna alone had a Greek population larger than Athens — three hundred thousand in Pontus, two hundred thousand in Cappadocia, with smaller communities all along the Black Sea and the southern coast. Greek schools, Greek newspapers, Greek banks, Greek churches and Greek shipping companies dominated the eastern Mediterranean and the trade of the Black Sea. The Young Turk revolution of 1908 was initially welcomed by the Greek deputies elected to the Ottoman parliament. But the loss of the European provinces in the Balkan Wars of 1912-13, the rise of the radical CUP triumvirate of Enver, Talaat and Cemal, and the entry of the Empire into the First World War alongside Germany unleashed a programme of forced labour battalions, expulsions, and ultimately massacre directed at the Christian populations of Anatolia. Of the Greek Pontus and Asia Minor before 1914, almost nothing in its old form would survive the decade.",
            el: "Στις παραμονές του Α΄ Παγκοσμίου Πολέμου ο ελληνικός πληθυσμός της Ανατολίας πιθανότατα ξεπερνούσε τα δύο εκατομμύρια: ενάμισι εκατομμύριο στη δυτική Μικρά Ασία — η μεγάλη πόλη της Σμύρνης μόνο είχε ελληνικό πληθυσμό μεγαλύτερο από εκείνον της Αθήνας — τριακόσιες χιλιάδες στον Πόντο, διακόσιες χιλιάδες στην Καππαδοκία, με μικρότερες κοινότητες σε όλη την ποντιακή και νότια ακτή. Ελληνικά σχολεία, ελληνικές εφημερίδες, ελληνικές τράπεζες, ελληνικές εκκλησίες και ελληνικές ναυτιλιακές εταιρείες κυριαρχούσαν στην ανατολική Μεσόγειο και στο εμπόριο του Ευξείνου. Η νεοτουρκική επανάσταση του 1908 χαιρετίστηκε αρχικά από τους έλληνες βουλευτές που εξελέγησαν στο οθωμανικό κοινοβούλιο. Αλλά η απώλεια των ευρωπαϊκών επαρχιών στους Βαλκανικούς Πολέμους του 1912-13, η άνοδος της ριζοσπαστικής τριανδρίας των Ενβέρ, Ταλαάτ και Τζεμάλ, και η είσοδος της Αυτοκρατορίας στον Α΄ Παγκόσμιο Πόλεμο στο πλευρό της Γερμανίας απελευθέρωσαν ένα πρόγραμμα τάγματων εργασίας, εκτοπίσεων και τελικά σφαγών κατά των χριστιανικών πληθυσμών της Ανατολίας. Από τον ελληνικό Πόντο και τη Μικρά Ασία πριν το 1914, σχεδόν τίποτε στην παλαιά του μορφή δεν θα επιβίωνε της δεκαετίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1916,
      era: {
        en: "The Genocide of the Pontic Greeks",
        el: "Η Γενοκτονία των Ποντίων"
      },
      events: [
        {
          title: {
            en: "Deportations and Massacres in the Pontus",
            el: "Εκτοπισμοί και Σφαγές στον Πόντο"
          },
          description: {
            en: "The Ottoman government deports the male Greek population of the Pontus into labour battalions in the interior; mass starvation, summary executions and concentration in the Anatolian highlands kill an estimated three hundred thousand Pontic Greeks between 1914 and 1923.",
            el: "Η οθωμανική κυβέρνηση εκτοπίζει τον αρσενικό ελληνικό πληθυσμό του Πόντου σε τάγματα εργασίας στο εσωτερικό· η μαζική πείνα, οι συνοπτικές εκτελέσεις και η συγκέντρωση στα ανατολικά υψίπεδα σκοτώνουν περίπου τριακόσιες χιλιάδες Ποντίους Έλληνες μεταξύ 1914 και 1923."
          },
          extendedDescription: {
            en: "From 1914 the Ottoman authorities, citing security concerns over the proximity of the Russian front, began driving the Greek populations of the Pontic coast into the interior. Men between the ages of eighteen and forty-five were enrolled in the amele taburları — labour battalions — where the average life expectancy was a few months of starvation, exposure and ill-treatment in the railway and road camps of central Anatolia. Women, children and the elderly were marched on foot into Cappadocia and the upper Euphrates valley, with successive convoys dying in the snows of the Pontic mountains. After the Russian collapse of 1917 and the formation of irregular Greek guerrilla bands in the mountains of Santa, Argyroupolis and Bafra, the regime under Mustafa Kemal intensified the campaign. The death toll of Pontic Greeks between 1914 and 1923 is estimated at between two and three hundred and fifty thousand; the parallel toll among Greeks of the western and southern coasts brings the total to roughly half a million. The Hellenic Republic now commemorates 19 May as the Day of Remembrance of the Pontic Greek Genocide.",
            el: "Από το 1914 οι οθωμανικές αρχές, επικαλούμενες λόγους ασφαλείας λόγω της εγγύτητας του ρωσικού μετώπου, άρχισαν να εκδιώκουν τους ελληνικούς πληθυσμούς της ποντιακής ακτής στο εσωτερικό. Άνδρες ηλικίας δεκαοκτώ έως σαράντα πέντε ετών στρατολογήθηκαν στα αμελέ ταμπουρού — τάγματα εργασίας — όπου η μέση διάρκεια ζωής ήταν λίγοι μήνες πείνας, έκθεσης στο κρύο και κακομεταχείρισης στους σιδηροδρομικούς και οδικούς καταυλισμούς της κεντρικής Ανατολίας. Γυναίκες, παιδιά και ηλικιωμένοι αναγκάστηκαν σε πεζοπορία προς την Καππαδοκία και την άνω κοιλάδα του Ευφράτη, με διαδοχικές πομπές να χάνονται στα χιόνια των ποντιακών ορέων. Μετά τη ρωσική κατάρρευση του 1917 και τη συγκρότηση ατάκτων ποντιακών ανταρτικών στα όρη της Σάντα, της Αργυρουπόλεως και της Πάφρας, το καθεστώς υπό τον Μουσταφά Κεμάλ εντατικοποίησε την εκστρατεία. Ο αριθμός των νεκρών Ποντίων Ελλήνων μεταξύ 1914 και 1923 εκτιμάται μεταξύ διακοσίων και τριακοσίων πενήντα χιλιάδων· ο παράλληλος αριθμός μεταξύ των Ελλήνων της δυτικής και νότιας ακτής ανεβάζει το σύνολο σε περίπου μισό εκατομμύριο. Η Ελληνική Δημοκρατία τιμά σήμερα τη 19η Μαΐου ως Ημέρα Μνήμης της Γενοκτονίας των Ποντίων."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1919,
      era: {
        en: "The Asia Minor Campaign",
        el: "Η Μικρασιατική Εκστρατεία"
      },
      events: [
        {
          title: {
            en: "The Greek Landing at Smyrna",
            el: "Η Ελληνική Απόβαση στη Σμύρνη"
          },
          description: {
            en: "Under Allied authorisation a Greek army lands at Smyrna and is welcomed by the city's Greek population; the Megali Idea of recovering the Greek homelands of Asia seems within reach, and the long retreat of Hellenism on the Anatolian coast briefly reverses.",
            el: "Με συμμαχική εξουσιοδότηση ελληνικός στρατός αποβιβάζεται στη Σμύρνη και γίνεται δεκτός από τον ελληνικό πληθυσμό της πόλης· η Μεγάλη Ιδέα της ανάκτησης των ελληνικών εστιών της Ασίας φαντάζει εφικτή, και η μακρά υποχώρηση του ελληνισμού στην ανατολική ακτή αναστρέφεται προσωρινά."
          },
          extendedDescription: {
            en: "The Greek landing at Smyrna on 15 May 1919 was authorised by the Paris Peace Conference at the urging of Prime Minister Eleftherios Venizelos, who had aligned Greece with the Entente in 1917 and now sought to make good the promises of the wartime Allies. The first units to disembark were greeted at the quayside by a Greek population that made up perhaps half the city. Within weeks a Greek civil administration was operating across western Anatolia; within a year the Treaty of Sèvres had transferred Smyrna and its hinterland to Greek administration with a referendum to follow after five years. The Greek army, victorious in the early campaigns of 1920, advanced deep into Anatolia in pursuit of Mustafa Kemal's nationalist forces. The further it pressed, the longer its supply lines became and the more isolated diplomatically Athens grew. The fall of Venizelos in the November 1920 elections, the return of King Constantine and the consequent withdrawal of Allied support set the stage for the disaster of 1922.",
            el: "Η ελληνική απόβαση στη Σμύρνη την 15η Μαΐου 1919 εξουσιοδοτήθηκε από το Συνέδριο Ειρήνης των Παρισίων κατόπιν εισήγησης του πρωθυπουργού Ελευθερίου Βενιζέλου, ο οποίος είχε εντάξει την Ελλάδα στην Αντάντ το 1917 και επιδίωκε τώρα την εκπλήρωση των υποσχέσεων των πολεμικών συμμάχων. Οι πρώτες μονάδες που αποβιβάστηκαν χαιρετίστηκαν στην προκυμαία από ελληνικό πληθυσμό που αποτελούσε ίσως το μισό της πόλης. Εντός εβδομάδων ελληνική πολιτική διοίκηση λειτουργούσε σε όλη τη δυτική Μικρά Ασία· εντός έτους η Συνθήκη των Σεβρών είχε μεταφέρει τη Σμύρνη και την ενδοχώρα της σε ελληνική διοίκηση με δημοψήφισμα να ακολουθήσει μετά πέντε χρόνια. Ο ελληνικός στρατός, νικητής στις πρώτες εκστρατείες του 1920, προχώρησε βαθιά στην Ανατολία καταδιώκοντας τις εθνικιστικές δυνάμεις του Μουσταφά Κεμάλ. Όσο πιο μακριά προχωρούσε, τόσο μακρύτερες γίνονταν οι γραμμές ανεφοδιασμού του και τόσο πιο διπλωματικά απομονωμένη η Αθήνα. Η πτώση του Βενιζέλου στις εκλογές του Νοεμβρίου 1920, η επιστροφή του βασιλέως Κωνσταντίνου και η συνακόλουθη απόσυρση της συμμαχικής υποστήριξης προετοίμασαν το σκηνικό για την καταστροφή του 1922."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1922,
      era: {
        en: "The Asia Minor Catastrophe",
        el: "Η Μικρασιατική Καταστροφή"
      },
      events: [
        {
          title: {
            en: "The Burning of Smyrna",
            el: "Η Καταστροφή της Σμύρνης"
          },
          description: {
            en: "Mustafa Kemal's forces break the Greek front in August and reach Smyrna on 9 September; within a week the Greek and Armenian quarters are in flames and the three-thousand-year history of Greek Asia Minor effectively ends.",
            el: "Οι δυνάμεις του Μουσταφά Κεμάλ διασπούν το ελληνικό μέτωπο τον Αύγουστο και φθάνουν στη Σμύρνη την 9η Σεπτεμβρίου· εντός εβδομάδος η ελληνική και η αρμενική συνοικία τυλίγονται στις φλόγες και η τρισχιλιόχρονη ιστορία της ελληνικής Μικράς Ασίας ουσιαστικά τερματίζεται."
          },
          extendedDescription: {
            en: "The Turkish counteroffensive that opened on 26 August 1922 routed the Greek army within ten days. As the retreating Greek units burned villages in their wake, Turkish irregular forces and regular troops massacred Greek civilians and prisoners. On 9 September Kemal entered Smyrna. On 13 September fires broke out in the Armenian and Greek quarters which, fanned by sea breezes, consumed the central city over four days. The Christian population — perhaps three hundred thousand people, swollen by refugees from inland — was driven onto the quay between the flames and the harbour. American, British, French and Italian warships in the bay watched without intervening, on orders from their governments to preserve neutrality. Tens of thousands were eventually evacuated by Greek and American vessels under the command of Asa Jennings of the YMCA. The male population of military age was marched into the interior; few returned. The casualties of the fire and massacres are estimated between ten and a hundred thousand. With Smyrna in ashes, the long Greek presence on the Anatolian coast was at an end.",
            el: "Η τουρκική αντεπίθεση που άρχισε την 26η Αυγούστου 1922 διέλυσε τον ελληνικό στρατό εντός δέκα ημερών. Καθώς οι υποχωρούσες ελληνικές μονάδες έκαιγαν χωριά στο πέρασμά τους, τουρκικά άτακτα σώματα και τακτικά στρατεύματα έσφαζαν Έλληνες αμάχους και αιχμαλώτους. Την 9η Σεπτεμβρίου ο Κεμάλ εισήλθε στη Σμύρνη. Την 13η Σεπτεμβρίου ξέσπασαν πυρκαγιές στην αρμενική και την ελληνική συνοικία οι οποίες, διογκωθείσες από τη θαλασσινή αύρα, κατέκαψαν το κέντρο της πόλεως επί τέσσερις ημέρες. Ο χριστιανικός πληθυσμός — ίσως τριακόσιες χιλιάδες, διογκωμένος από πρόσφυγες της ενδοχώρας — εξωθήθηκε στην προκυμαία μεταξύ των φλογών και του λιμένος. Αμερικανικά, βρετανικά, γαλλικά και ιταλικά πολεμικά πλοία στον κόλπο παρακολουθούσαν χωρίς να επεμβαίνουν, βάσει εντολών των κυβερνήσεών τους για διατήρηση ουδετερότητας. Δεκάδες χιλιάδες απομακρύνθηκαν τελικά από ελληνικά και αμερικανικά σκάφη υπό τον Άσα Τζένινγκς της ΧΑΝ. Ο αρσενικός πληθυσμός στρατιωτικής ηλικίας οδηγήθηκε με πεζοπορία στο εσωτερικό· λίγοι επέστρεψαν. Τα θύματα της πυρκαγιάς και των σφαγών εκτιμώνται μεταξύ δέκα και εκατό χιλιάδων. Με τη Σμύρνη στις στάχτες, η μακρά ελληνική παρουσία στην ανατολική ακτή τερματίστηκε."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1923,
      era: {
        en: "The Population Exchange",
        el: "Η Ανταλλαγή των Πληθυσμών"
      },
      events: [
        {
          title: {
            en: "The Treaty of Lausanne and the Population Exchange",
            el: "Η Συνθήκη της Λωζάννης και η Ανταλλαγή Πληθυσμών"
          },
          description: {
            en: "The Treaty of Lausanne formalises the compulsory exchange of populations between Greece and Turkey; some 1.2 million Orthodox Christians are uprooted from Anatolia, ending the continuous Greek presence in Asia Minor that began with the Aeolian and Ionian migrations three thousand years earlier.",
            el: "Η Συνθήκη της Λωζάννης επικυρώνει την υποχρεωτική ανταλλαγή πληθυσμών μεταξύ Ελλάδος και Τουρκίας· περίπου 1,2 εκατομμύριο ορθόδοξοι χριστιανοί ξεριζώνονται από την Ανατολία, τερματίζοντας τη συνεχή ελληνική παρουσία στη Μικρά Ασία που είχε αρχίσει με την αιολική και ιωνική μετανάστευση τρεις χιλιετίες νωρίτερα."
          },
          extendedDescription: {
            en: "The convention of 30 January 1923, signed at Lausanne under League of Nations auspices by Eleftherios Venizelos for Greece and İsmet İnönü for Turkey, prescribed the compulsory exchange of Greek Orthodox subjects of Turkey for Muslim subjects of Greece. Religion, not language or ethnicity, was the criterion. Excluded were the Greeks of Constantinople, Imbros and Tenbros (preserved as a small remnant) and the Muslims of Western Thrace. Between January 1923 and the end of 1924 around 1.2 million Orthodox Christians moved from Anatolia to Greece, and around 400,000 Muslims moved from Greece to Turkey. Among the Anatolian refugees were Greek-speaking, Turkish-speaking (Karamanli), Pontic-speaking and Cappadocian-speaking communities, the latter two retaining medieval dialects that had drifted far from the standard. They came carrying the icons, manuscripts, codices and church silver of their abandoned home regions, and reshaped twentieth-century Greece — its demography (a quarter of the new population), its economy (Athens-Piraeus, Thessalonica), its music (rebetiko), its political life (the Refugee Settlement vote), and its self-understanding. With the exchange the Greek east, which had begun in the mists of the twelfth-century BC, formally ended, leaving a memory that would shape Greek culture for the rest of the twentieth century and beyond.",
            el: "Η σύμβαση της 30ής Ιανουαρίου 1923, υπογεγραμμένη στη Λωζάννη υπό την αιγίδα της Κοινωνίας των Εθνών από τον Ελευθέριο Βενιζέλο για την Ελλάδα και τον Ισμέτ Ινονού για την Τουρκία, όριζε την υποχρεωτική ανταλλαγή των ορθοδόξων χριστιανών υπηκόων της Τουρκίας με τους μουσουλμάνους υπηκόους της Ελλάδος. Κριτήριο ήταν η θρησκεία, όχι η γλώσσα ή η εθνότητα. Εξαιρέθηκαν οι Έλληνες της Κωνσταντινουπόλεως, της Ίμβρου και της Τενέδου (που διατηρήθηκαν ως μικρό υπόλειμμα) και οι μουσουλμάνοι της Δυτικής Θράκης. Μεταξύ Ιανουαρίου 1923 και τέλους 1924 περίπου 1,2 εκατομμύριο ορθόδοξοι χριστιανοί μετακινήθηκαν από την Ανατολία στην Ελλάδα, και περίπου 400.000 μουσουλμάνοι μετακινήθηκαν από την Ελλάδα στην Τουρκία. Μεταξύ των ανατολικών προσφύγων ήταν ελληνόφωνες, τουρκόφωνες (καραμανλίδικες), ποντιόφωνες και καππαδοκόφωνες κοινότητες, οι δύο τελευταίες διατηρώντας μεσαιωνικές διαλέκτους που είχαν αποκλίνει από την κοινή. Ήρθαν φέροντας τις εικόνες, τα χειρόγραφα, τους κώδικες και τα εκκλησιαστικά σκεύη των εγκαταλελειμμένων εστιών τους, και αναμόρφωσαν την Ελλάδα του εικοστού αιώνα — τη δημογραφία της (το ένα τέταρτο του νέου πληθυσμού), την οικονομία της (Αθήνα-Πειραιάς, Θεσσαλονίκη), τη μουσική της (ρεμπέτικο), την πολιτική της ζωή (η ψήφος των προσφύγων), και την αυτοκατανόησή της. Με την ανταλλαγή η ελληνική Ανατολή, που είχε αρχίσει στις ομίχλες του δωδέκατου π.Χ. αιώνα, τερματίστηκε επισήμως, αφήνοντας μια μνήμη που θα διαμόρφωνε τον ελληνικό πολιτισμό για το υπόλοιπο του εικοστού αιώνα και μετέπειτα."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
