/** Greco-Persian Wars — Περσικοί Πόλεμοι · Global Conflicts */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const GRECO_PERSIAN_WARS = {
  id: "greco-persian-wars" as const,
  label: {
    en: "Greco-Persian Wars",
    el: "Περσικοί Πόλεμοι"
  },
  supertitle: {
    en: "Greece against the Persian Empire",
    el: "Η Ελλάδα εναντίον της Περσικής Αυτοκρατορίας"
  },
  title: {
    en: "The Greco-Persian Wars",
    el: "Οι Περσικοί Πόλεμοι"
  },
  subtitle: {
    en: "From the Ionian cities' revolt against the Great King and the burning of Sardis, through Darius's punitive expedition broken on the plain of Marathon, to Xerxes' vast invasion — the doomed stand at Thermopylae, the wooden walls that triumphed at Salamis, and the deliverance at Plataea. Slide across half a century in which a handful of quarrelsome city-states turned back the greatest empire on earth, and Greece found the confidence that would shape its golden age.",
    el: "Από την εξέγερση των ιωνικών πόλεων ενάντια στον Μεγάλο Βασιλέα και το κάψιμο των Σάρδεων, μέσα από την τιμωρητική εκστρατεία του Δαρείου που συνετρίβη στην πεδιάδα του Μαραθώνα, ως την τεράστια εισβολή του Ξέρξη — την καταδικασμένη αντίσταση στις Θερμοπύλες, τα ξύλινα τείχη που θριάμβευσαν στη Σαλαμίνα και τη λύτρωση στις Πλαταιές. Μετακινηθείτε μέσα σε μισόν αιώνα όπου μια χούφτα φιλόνικων πόλεων-κρατών απέκρουσαν τη μεγαλύτερη αυτοκρατορία της γης, κι η Ελλάδα βρήκε την αυτοπεποίθηση που θα διαμόρφωνε τη χρυσή της εποχή."
  },
  menuDescription: {
    en: "Half a century of war between the Greek city-states and Persia, from the Ionian Revolt and Marathon to Salamis and final victory.",
    el: "Μισός αιώνας πολέμου ανάμεσα στις ελληνικές πόλεις-κράτη και την Περσία, από την Ιωνική Επανάσταση και τον Μαραθώνα ως τη Σαλαμίνα και την τελική νίκη."
  },
  footerLabel: {
    en: "Greco-Persian Wars · 499–449 BC",
    el: "Περσικοί Πόλεμοι · 499–449 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Greco-Persian Wars",
    el: "Οι Περσικοί Πόλεμοι"
  },
  theme: THEMES.sapphire,
  timeline: [
    {
      year: -499,
      era: {
        en: "The Ionian Revolt",
        el: "Η Ιωνική Επανάσταση"
      },
      events: [
        {
          title: {
            en: "Ionia rises against the Great King",
            el: "Η Ιωνία εξεγείρεται κατά του Μεγάλου Βασιλέα"
          },
          description: {
            en: "The Greek cities of Ionia throw off Persian rule, and Athens sends ships to their aid.",
            el: "Οι ελληνικές πόλεις της Ιωνίας αποτινάσσουν την περσική κυριαρχία, κι η Αθήνα στέλνει πλοία να τις βοηθήσουν."
          },
          extendedDescription: {
            en: "Under Persian-backed tyrants, the wealthy Greek cities of the Anatolian coast chafed at foreign control. In 499 BC, led by Miletus, they rose in revolt, expelled their tyrants and appealed to the mainland for help. Sparta refused, but Athens and Eretria sent a small fleet — a decision that would draw the attention of the Persian king to the Greek world across the sea.",
            el: "Υπό τυράννους που στήριζε η Περσία, οι πλούσιες ελληνικές πόλεις των μικρασιατικών παραλίων δυσφορούσαν με τον ξένο έλεγχο. Το 499 π.Χ., με επικεφαλής τη Μίλητο, εξεγέρθηκαν, έδιωξαν τους τυράννους τους και ζήτησαν βοήθεια από τη μητροπολιτική Ελλάδα. Η Σπάρτη αρνήθηκε, όμως η Αθήνα κι η Ερέτρια έστειλαν έναν μικρό στόλο — μια απόφαση που θα έστρεφε την προσοχή του Πέρση βασιλιά στον ελληνικό κόσμο πέρα από τη θάλασσα."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Greek-Persian_duel.jpg?width=1024",
            alt: {
              en: "A Greek hoplite fighting a Persian warrior",
              el: "Έλληνας οπλίτης μάχεται Πέρση πολεμιστή"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -498,
      era: {
        en: "The Ionian Revolt",
        el: "Η Ιωνική Επανάσταση"
      },
      events: [
        {
          title: {
            en: "The burning of Sardis",
            el: "Το κάψιμο των Σάρδεων"
          },
          description: {
            en: "Ionian and Athenian troops storm and burn Sardis, the seat of Persian power in the west.",
            el: "Ίωνες κι Αθηναίοι επιτίθενται και καίνε τις Σάρδεις, την έδρα της περσικής εξουσίας στη Δύση."
          },
          extendedDescription: {
            en: "Marching inland, the rebels and their Athenian allies took Sardis, capital of the Persian satrapy of Lydia, and the city burned — including, by accident, a temple of the local goddess. The Persians rallied and drove the Greeks back to the coast, but the insult was not forgotten. King Darius, it was said, ordered a servant to repeat to him three times at every meal: \"Master, remember the Athenians.\"",
            el: "Προελαύνοντας στην ενδοχώρα, οι επαναστάτες κι οι Αθηναίοι σύμμαχοί τους κατέλαβαν τις Σάρδεις, πρωτεύουσα της περσικής σατραπείας της Λυδίας, κι η πόλη κάηκε — μαζί της, κατά λάθος, κι ένας ναός της τοπικής θεάς. Οι Πέρσες ανασυντάχθηκαν κι έσπρωξαν τους Έλληνες πίσω στην ακτή, όμως η προσβολή δεν ξεχάστηκε. Ο βασιλιάς Δαρείος, λέγεται, πρόσταξε έναν υπηρέτη να του επαναλαμβάνει τρεις φορές σε κάθε γεύμα: «Δέσποτα, μέμνησο των Αθηναίων»."
          },
          category: "military"
        }
      ]
    },
    {
      year: -494,
      era: {
        en: "The Ionian Revolt",
        el: "Η Ιωνική Επανάσταση"
      },
      events: [
        {
          title: {
            en: "Miletus falls at Lade",
            el: "Η Μίλητος πέφτει στη Λάδη"
          },
          description: {
            en: "The Persian fleet crushes the Ionians at Lade, and Miletus is sacked, ending the revolt.",
            el: "Ο περσικός στόλος συντρίβει τους Ίωνες στη Λάδη, κι η Μίλητος λεηλατείται, τερματίζοντας την επανάσταση."
          },
          extendedDescription: {
            en: "The revolt was decided at sea. Off the island of Lade, the Ionian fleet — divided and mistrustful — was broken by the Persians when several contingents deserted mid-battle. Miletus, the heart of the rebellion, was besieged and destroyed, its people killed or deported. Ionia returned to Persian rule, but Darius now turned his gaze to the mainland cities that had dared to help the rebels.",
            el: "Η επανάσταση κρίθηκε στη θάλασσα. Ανοιχτά της νήσου Λάδης, ο ιωνικός στόλος — διχασμένος και γεμάτος δυσπιστία — συνετρίβη από τους Πέρσες όταν αρκετά τμήματα λιποτάκτησαν στη μέση της μάχης. Η Μίλητος, η καρδιά της εξέγερσης, πολιορκήθηκε και καταστράφηκε, οι κάτοικοί της σκοτώθηκαν ή εκτοπίστηκαν. Η Ιωνία επέστρεψε στην περσική κυριαρχία, όμως ο Δαρείος έστρεφε πλέον το βλέμμα του στις πόλεις της κυρίως Ελλάδας που τόλμησαν να βοηθήσουν τους επαναστάτες."
          },
          category: "military"
        }
      ]
    },
    {
      year: -490,
      era: {
        en: "The First Persian Invasion",
        el: "Η Πρώτη Περσική Εισβολή"
      },
      events: [
        {
          title: {
            en: "Victory at Marathon",
            el: "Νίκη στον Μαραθώνα"
          },
          description: {
            en: "A Persian expedition lands at Marathon and is routed by the outnumbered Athenians under Miltiades.",
            el: "Μια περσική εκστρατεία αποβιβάζεται στον Μαραθώνα και τρέπεται σε φυγή από τους αριθμητικά κατώτερους Αθηναίους υπό τον Μιλτιάδη."
          },
          extendedDescription: {
            en: "In 490 BC Darius sent a fleet across the Aegean to punish Athens and Eretria. Eretria was betrayed and burned; then the Persians landed on the plain of Marathon, north of Athens. There the Athenians and their Plataean allies, though heavily outnumbered, charged at a run and enveloped the Persian line, driving it back to the ships. The victory — won without Sparta, whose army arrived too late — became the founding legend of Athenian courage.",
            el: "Το 490 π.Χ. ο Δαρείος έστειλε στόλο στο Αιγαίο για να τιμωρήσει την Αθήνα και την Ερέτρια. Η Ερέτρια προδόθηκε και κάηκε· έπειτα οι Πέρσες αποβιβάστηκαν στην πεδιάδα του Μαραθώνα, βόρεια της Αθήνας. Εκεί οι Αθηναίοι κι οι Πλαταιείς σύμμαχοί τους, αν και συντριπτικά λιγότεροι, όρμησαν τρέχοντας και περικύκλωσαν την περσική παράταξη, σπρώχνοντάς την πίσω στα πλοία. Η νίκη — που κερδήθηκε χωρίς τη Σπάρτη, της οποίας ο στρατός έφτασε πολύ αργά — έγινε ο ιδρυτικός μύθος του αθηναϊκού θάρρους."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Scene_of_the_Battle_of_Marathon.jpg?width=1024",
            alt: {
              en: "The Battle of Marathon, 490 BC",
              el: "Η μάχη του Μαραθώνα, 490 π.Χ."
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -480,
      era: {
        en: "The Invasion of Xerxes",
        el: "Η Εισβολή του Ξέρξη"
      },
      events: [
        {
          title: {
            en: "The stand at Thermopylae",
            el: "Η αντίσταση στις Θερμοπύλες"
          },
          description: {
            en: "Xerxes invades with a vast army; Leonidas and 300 Spartans die holding the pass at Thermopylae.",
            el: "Ο Ξέρξης εισβάλλει με τεράστιο στρατό· ο Λεωνίδας και 300 Σπαρτιάτες πέφτουν κρατώντας το στενό των Θερμοπυλών."
          },
          extendedDescription: {
            en: "Ten years after Marathon, Darius's son Xerxes came in person with an army of many nations and a great fleet, bridging the Hellespont to cross into Europe. A small Greek force under the Spartan king Leonidas held the narrow pass of Thermopylae for days against overwhelming numbers. Betrayed by a mountain path, Leonidas sent most of the army away and died with his 300 Spartans and their allies — buying time and a legend. At sea, the fleet fought the Persians to a standstill off Artemisium.",
            el: "Δέκα χρόνια μετά τον Μαραθώνα, ο γιος του Δαρείου Ξέρξης ήρθε ο ίδιος με στρατό πολλών εθνών κι έναν μεγάλο στόλο, ζεύοντας τον Ελλήσποντο για να περάσει στην Ευρώπη. Μια μικρή ελληνική δύναμη υπό τον Σπαρτιάτη βασιλιά Λεωνίδα κράτησε το στενό πέρασμα των Θερμοπυλών για μέρες ενάντια σε συντριπτικά πλήθη. Προδομένος από ένα ορεινό μονοπάτι, ο Λεωνίδας έδιωξε το μεγαλύτερο μέρος του στρατού κι έπεσε με τους 300 Σπαρτιάτες του και τους συμμάχους τους — κερδίζοντας χρόνο κι έναν θρύλο. Στη θάλασσα, ο στόλος αναμετρήθηκε ισόπαλα με τους Πέρσες στο Αρτεμίσιο."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jacques-Louis_David_-_Leonidas_at_Thermopylae_-_WGA6095.jpg?width=1024",
            alt: {
              en: "Leonidas at Thermopylae, by Jacques-Louis David",
              el: "Ο Λεωνίδας στις Θερμοπύλες, έργο του Ζακ-Λουί Νταβίντ"
            },
            credit: "Via Wikimedia Commons"
          }
        },
        {
          title: {
            en: "The sea-victory at Salamis",
            el: "Η ναυτική νίκη στη Σαλαμίνα"
          },
          description: {
            en: "Themistocles lures the Persian fleet into the straits of Salamis, where it is shattered.",
            el: "Ο Θεμιστοκλής παρασύρει τον περσικό στόλο στα στενά της Σαλαμίνας, όπου συντρίβεται."
          },
          extendedDescription: {
            en: "Athens was abandoned and burned, its people evacuated to the island of Salamis on the strength of an oracle about \"wooden walls\" — which Themistocles read as the fleet. In the narrow straits, where Persian numbers counted for nothing, the Greek triremes turned and destroyed the enemy armada as Xerxes watched from a throne on the shore. His communications threatened, the king withdrew to Asia, leaving his general Mardonius to finish the war.",
            el: "Η Αθήνα εγκαταλείφθηκε και κάηκε, ο πληθυσμός της μεταφέρθηκε στη νήσο Σαλαμίνα με βάση έναν χρησμό για «ξύλινα τείχη» — που ο Θεμιστοκλής ερμήνευσε ως τον στόλο. Στα στενά, όπου η περσική αριθμητική υπεροχή δεν μετρούσε, οι ελληνικές τριήρεις στράφηκαν και κατέστρεψαν την εχθρική αρμάδα, ενώ ο Ξέρξης παρακολουθούσε από θρόνο στην ακτή. Με τις γραμμές ανεφοδιασμού του απειλούμενες, ο βασιλιάς αποσύρθηκε στην Ασία, αφήνοντας τον στρατηγό του Μαρδόνιο να τελειώσει τον πόλεμο."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Battle_of_salamis.png?width=1024",
            alt: {
              en: "The naval Battle of Salamis, 480 BC",
              el: "Η ναυμαχία της Σαλαμίνας, 480 π.Χ."
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -479,
      era: {
        en: "The Invasion of Xerxes",
        el: "Η Εισβολή του Ξέρξη"
      },
      events: [
        {
          title: {
            en: "Plataea frees Greece",
            el: "Οι Πλαταιές ελευθερώνουν την Ελλάδα"
          },
          description: {
            en: "The Greek army destroys Mardonius's forces at Plataea, and a second victory at Mycale ends the invasion.",
            el: "Ο ελληνικός στρατός καταστρέφει τις δυνάμεις του Μαρδονίου στις Πλαταιές, και μια δεύτερη νίκη στη Μυκάλη τερματίζει την εισβολή."
          },
          extendedDescription: {
            en: "In 479 BC the largest Greek army yet assembled, led by the Spartan regent Pausanias, met Mardonius near Plataea in Boeotia. After days of manoeuvre the hoplite phalanx broke the Persian infantry and Mardonius was killed. On the same days, tradition held, a Greek fleet landed at Mycale in Ionia and destroyed the Persians' remaining ships and camp. The invasion was over; the Great King would never again lead an army into Greece.",
            el: "Το 479 π.Χ. ο μεγαλύτερος ελληνικός στρατός που είχε ως τότε συγκεντρωθεί, με επικεφαλής τον Σπαρτιάτη αντιβασιλέα Παυσανία, αντιμετώπισε τον Μαρδόνιο κοντά στις Πλαταιές της Βοιωτίας. Έπειτα από μέρες ελιγμών, η οπλιτική φάλαγγα διέσπασε το περσικό πεζικό κι ο Μαρδόνιος σκοτώθηκε. Τις ίδιες μέρες, κατά την παράδοση, ένας ελληνικός στόλος αποβιβάστηκε στη Μυκάλη της Ιωνίας και κατέστρεψε τα εναπομείναντα πλοία και το στρατόπεδο των Περσών. Η εισβολή είχε τελειώσει· ο Μεγάλος Βασιλιάς δεν θα οδηγούσε ποτέ ξανά στρατό στην Ελλάδα."
          },
          category: "military"
        }
      ]
    },
    {
      year: -478,
      era: {
        en: "The Greek Counter-offensive",
        el: "Η Ελληνική Αντεπίθεση"
      },
      events: [
        {
          title: {
            en: "The Delian League",
            el: "Η Δηλιακή Συμμαχία"
          },
          description: {
            en: "Athens leads a new alliance of maritime states to carry the war to Persia and free the Greeks of Asia.",
            el: "Η Αθήνα ηγείται μιας νέας συμμαχίας ναυτικών πόλεων για να μεταφέρει τον πόλεμο στην Περσία και να ελευθερώσει τους Έλληνες της Ασίας."
          },
          extendedDescription: {
            en: "With Sparta withdrawing from the sea, the Greek cities of the Aegean turned to Athens, forming an alliance based on the sacred island of Delos, where its treasury was kept. Each member gave ships or silver. The league drove the Persians from the Aegean and liberated the Ionian cities — but over time Athens turned its captains and its allies' tribute into the foundation of an empire of its own.",
            el: "Καθώς η Σπάρτη αποσυρόταν από τη θάλασσα, οι ελληνικές πόλεις του Αιγαίου στράφηκαν στην Αθήνα, σχηματίζοντας μια συμμαχία με έδρα το ιερό νησί της Δήλου, όπου φυλασσόταν το ταμείο της. Κάθε μέλος προσέφερε πλοία ή αργύριο. Η συμμαχία έδιωξε τους Πέρσες από το Αιγαίο κι ελευθέρωσε τις ιωνικές πόλεις — όμως με τον καιρό η Αθήνα μετέτρεψε τους στόλους της και τον φόρο των συμμάχων της στο θεμέλιο μιας δικής της αυτοκρατορίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: -466,
      era: {
        en: "The Greek Counter-offensive",
        el: "Η Ελληνική Αντεπίθεση"
      },
      events: [
        {
          title: {
            en: "Double victory at the Eurymedon",
            el: "Διπλή νίκη στον Ευρυμέδοντα"
          },
          description: {
            en: "Cimon destroys a Persian army and fleet in a single day at the Eurymedon river.",
            el: "Ο Κίμων καταστρέφει περσικό στρατό και στόλο σε μία μέρα στον ποταμό Ευρυμέδοντα."
          },
          extendedDescription: {
            en: "The Athenian commander Cimon, son of the victor of Marathon, carried the offensive to the southern coast of Asia Minor. At the mouth of the Eurymedon river in Pamphylia he won two battles in one day — first shattering the Persian fleet, then landing his marines to rout the army drawn up on the shore. The victory drove Persian power far back from the Aegean and marked the high tide of the Greek counter-offensive.",
            el: "Ο Αθηναίος στρατηγός Κίμων, γιος του νικητή του Μαραθώνα, μετέφερε την επίθεση στα νότια παράλια της Μικράς Ασίας. Στις εκβολές του ποταμού Ευρυμέδοντα στην Παμφυλία κέρδισε δύο μάχες σε μία μέρα — συντρίβοντας πρώτα τον περσικό στόλο κι έπειτα αποβιβάζοντας τους πεζοναύτες του για να τρέψουν σε φυγή τον στρατό που ήταν παραταγμένος στην ακτή. Η νίκη έσπρωξε την περσική ισχύ μακριά από το Αιγαίο και σήμανε το αποκορύφωμα της ελληνικής αντεπίθεσης."
          },
          category: "military"
        }
      ]
    },
    {
      year: -449,
      era: {
        en: "The Greek Counter-offensive",
        el: "Η Ελληνική Αντεπίθεση"
      },
      events: [
        {
          title: {
            en: "The Peace of Callias",
            el: "Η Καλλίειος Ειρήνη"
          },
          description: {
            en: "A negotiated peace, traditionally dated to 449 BC, ends half a century of war with Persia.",
            el: "Μια συνθήκη ειρήνης, που παραδοσιακά χρονολογείται στο 449 π.Χ., τερματίζει μισόν αιώνα πολέμου με την Περσία."
          },
          extendedDescription: {
            en: "According to later tradition, Athens and Persia came to terms in a settlement negotiated by Callias: the Persian king recognized the freedom of the Greek cities of Asia Minor and kept his fleets out of the Aegean, while Athens ceased its campaigns in the eastern Mediterranean. Whether or not a formal treaty was signed, the fighting was effectively over. Greece had preserved its independence — and Athens, at the head of its league, now stood at the summit of its power.",
            el: "Σύμφωνα με μεταγενέστερη παράδοση, η Αθήνα κι η Περσία συμβιβάστηκαν σε μια συμφωνία που διαπραγματεύτηκε ο Καλλίας: ο Πέρσης βασιλιάς αναγνώρισε την ελευθερία των ελληνικών πόλεων της Μικράς Ασίας και κράτησε τους στόλους του έξω από το Αιγαίο, ενώ η Αθήνα σταμάτησε τις εκστρατείες της στην ανατολική Μεσόγειο. Είτε υπογράφηκε επίσημη συνθήκη είτε όχι, οι μάχες είχαν ουσιαστικά τελειώσει. Η Ελλάδα είχε διαφυλάξει την ανεξαρτησία της — κι η Αθήνα, επικεφαλής της συμμαχίας της, στεκόταν πλέον στην κορυφή της δύναμής της."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
