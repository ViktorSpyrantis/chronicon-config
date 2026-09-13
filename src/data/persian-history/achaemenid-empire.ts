/** Achaemenid Empire — Αυτοκρατορία των Αχαιμενιδών · Persian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const ACHAEMENID_EMPIRE = {
  id: "achaemenid-empire" as const,
  label: {
    en: "Achaemenid Empire",
    el: "Αυτοκρατορία των Αχαιμενιδών"
  },
  supertitle: {
    en: "Persian Empire",
    el: "Περσική Αυτοκρατορία"
  },
  title: {
    en: "The Achaemenid Empire",
    el: "Η Αυτοκρατορία των Αχαιμενιδών"
  },
  subtitle: {
    en: "From Cyrus the Great's overthrow of the Medes and the conquest of Babylon through Darius's satrapies, the Royal Road and Persepolis, the Persian Wars against the Greeks, to the coming of Alexander and the fall of Darius III. Slide across the centuries to read the major events of the first Persian world empire.",
    el: "Από την ανατροπή των Μήδων και την κατάκτηση της Βαβυλώνας από τον Κύρο τον Μέγα, μέσα από τις σατραπείες του Δαρείου, τη Βασιλική Οδό και την Περσέπολη, τους Περσικούς Πολέμους εναντίον των Ελλήνων, ως την έλευση του Αλεξάνδρου και την πτώση του Δαρείου Γ΄. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα γεγονότα της πρώτης περσικής παγκόσμιας αυτοκρατορίας."
  },
  menuDescription: {
    en: "Cyrus, Darius and Xerxes: the first world empire, from Persepolis to the Persian Wars.",
    el: "Ο Κύρος, ο Δαρείος κι ο Ξέρξης: η πρώτη παγκόσμια αυτοκρατορία, από την Περσέπολη ως τους Περσικούς Πολέμους."
  },
  footerLabel: {
    en: "Achaemenid Empire · 550-330 BC",
    el: "Αυτοκρατορία των Αχαιμενιδών · 550-330 π.Χ."
  },
  headerTimelineLabel: {
    en: "Imperial Timeline",
    el: "Αυτοκρατορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Achaemenid Empire",
    el: "Η Αυτοκρατορία των Αχαιμενιδών"
  },
  theme: THEMES.gold,
  timeline: [
    {
      year: -550,
      era: {
        en: "Cyrus the Great",
        el: "Κύρος ο Μέγας"
      },
      events: [
        {
          title: {
            en: "Cyrus overthrows the Medes",
            el: "Ο Κύρος ανατρέπει τους Μήδους"
          },
          description: {
            en: "Cyrus II of Persia defeats his overlord Astyages, unites Medes and Persians, and founds the Achaemenid Empire.",
            el: "Ο Κύρος Β΄ της Περσίας νικά τον κυρίαρχό του Αστυάγη, ενώνει Μήδους και Πέρσες και ιδρύει την Αυτοκρατορία των Αχαιμενιδών."
          },
          extendedDescription: {
            en: "When the Median army mutinied and handed Astyages to Cyrus, the vassal became master of a great kingdom stretching from Anatolia to the Iranian plateau. Cyrus treated the Medes not as conquered subjects but as partners, setting the pattern of tolerance and inclusion that would define his empire.",
            el: "Όταν ο μηδικός στρατός στασίασε και παρέδωσε τον Αστυάγη στον Κύρο, ο υποτελής έγινε κύριος ενός μεγάλου βασιλείου που εκτεινόταν από την Ανατολία ως το ιρανικό οροπέδιο. Ο Κύρος αντιμετώπισε τους Μήδους όχι ως κατακτημένους υπηκόους αλλά ως εταίρους, θέτοντας το πρότυπο ανοχής και συμπερίληψης που θα χαρακτήριζε την αυτοκρατορία του."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Cyrus_II_(The_Great)_(cropped).jpg?width=1024",
            alt: {
              en: "Cyrus the Great, founder of the Achaemenid Empire",
              el: "Ο Κύρος ο Μέγας, ιδρυτής της Αυτοκρατορίας των Αχαιμενιδών"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -547,
      era: {
        en: "Cyrus the Great",
        el: "Κύρος ο Μέγας"
      },
      events: [
        {
          title: {
            en: "The conquest of Lydia and Croesus",
            el: "Η κατάκτηση της Λυδίας και ο Κροίσος"
          },
          description: {
            en: "Cyrus defeats the fabulously rich King Croesus of Lydia and brings the Greek cities of Ionia under Persian rule.",
            el: "Ο Κύρος νικά τον μυθικά πλούσιο βασιλιά Κροίσο της Λυδίας και υποτάσσει τις ελληνικές πόλεις της Ιωνίας στην περσική κυριαρχία."
          },
          extendedDescription: {
            en: "Warned by the Delphic oracle that a great empire would fall, Croesus crossed the river Halys — and destroyed his own. Cyrus captured Sardis and, according to legend, spared Croesus from the pyre. The fall of Lydia carried Persian power to the Aegean and set the stage for two centuries of conflict between Persia and the Greeks.",
            el: "Προειδοποιημένος από το μαντείο των Δελφών ότι μια μεγάλη αυτοκρατορία θα έπεφτε, ο Κροίσος διέβη τον ποταμό Άλυ — και κατέστρεψε τη δική του. Ο Κύρος κατέλαβε τις Σάρδεις και, κατά τον θρύλο, γλίτωσε τον Κροίσο από την πυρά. Η πτώση της Λυδίας μετέφερε την περσική ισχύ ως το Αιγαίο και προετοίμασε δύο αιώνες σύγκρουσης ανάμεσα στην Περσία και τους Έλληνες."
          },
          category: "military"
        }
      ]
    },
    {
      year: -539,
      era: {
        en: "Cyrus the Great",
        el: "Κύρος ο Μέγας"
      },
      events: [
        {
          title: {
            en: "The fall of Babylon",
            el: "Η πτώση της Βαβυλώνας"
          },
          description: {
            en: "Cyrus enters Babylon almost without a fight and frees the exiled Jews to return to Jerusalem.",
            el: "Ο Κύρος εισέρχεται στη Βαβυλώνα σχεδόν αμαχητί και επιτρέπει στους εξόριστους Ιουδαίους να επιστρέψουν στην Ιερουσαλήμ."
          },
          extendedDescription: {
            en: "The Cyrus Cylinder proclaims his respect for Babylon's gods and his release of captive peoples; the Hebrew Bible hails him as the Lord's anointed. Whether policy or piety, this tolerance let a multi-ethnic empire hold together, and it earned Cyrus a reputation for justice that endured across cultures for millennia.",
            el: "Ο Κύλινδρος του Κύρου διακηρύσσει τον σεβασμό του προς τους θεούς της Βαβυλώνας και την απελευθέρωση των αιχμάλωτων λαών· η Εβραϊκή Βίβλος τον εξυμνεί ως τον χρισμένο του Κυρίου. Είτε πολιτική είτε ευσέβεια, αυτή η ανοχή επέτρεψε σε μια πολυεθνική αυτοκρατορία να συγκρατηθεί και χάρισε στον Κύρο φήμη δικαιοσύνης που άντεξε μέσα στους πολιτισμούς επί χιλιετίες."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Cyrus_Cylinder_front.jpg?width=1024",
            alt: {
              en: "The Cyrus Cylinder, recording Cyrus's capture of Babylon",
              el: "Ο Κύλινδρος του Κύρου, που καταγράφει την κατάληψη της Βαβυλώνας"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -530,
      era: {
        en: "Cambyses",
        el: "Καμβύσης"
      },
      events: [
        {
          title: {
            en: "Death of Cyrus; Cambyses takes Egypt",
            el: "Θάνατος του Κύρου· ο Καμβύσης κατακτά την Αίγυπτο"
          },
          description: {
            en: "Cyrus dies on the eastern frontier, and his son Cambyses II conquers Egypt at the Battle of Pelusium in 525 BCE.",
            el: "Ο Κύρος πεθαίνει στο ανατολικό σύνορο και ο γιος του Καμβύσης Β΄ κατακτά την Αίγυπτο στη μάχη του Πηλουσίου το 525 π.Χ."
          },
          extendedDescription: {
            en: "With Egypt added to the empire, Achaemenid Persia stretched from Libya to the Indus. Greek sources paint Cambyses as a mad tyrant who mocked Egyptian gods, but Egyptian evidence shows him taking pharaonic titles and honouring local cults — a reminder of how much the record was shaped by hostile Greek pens.",
            el: "Με την προσθήκη της Αιγύπτου στην αυτοκρατορία, η Περσία των Αχαιμενιδών εκτεινόταν από τη Λιβύη ως τον Ινδό. Ελληνικές πηγές παρουσιάζουν τον Καμβύση ως τρελό τύραννο που χλεύαζε τους αιγυπτιακούς θεούς, όμως αιγυπτιακά τεκμήρια τον δείχνουν να λαμβάνει φαραωνικούς τίτλους και να τιμά τις τοπικές λατρείες — υπενθύμιση του πόσο διαμορφώθηκε η ιστορία από εχθρικές ελληνικές πένες."
          },
          category: "military"
        }
      ]
    },
    {
      year: -522,
      era: {
        en: "Darius the Great",
        el: "Δαρείος ο Μέγας"
      },
      events: [
        {
          title: {
            en: "Darius seizes the throne",
            el: "Ο Δαρείος καταλαμβάνει τον θρόνο"
          },
          description: {
            en: "After a disputed succession, Darius I takes power and proclaims his victory in the great inscription of Behistun.",
            el: "Έπειτα από αμφισβητούμενη διαδοχή, ο Δαρείος Α΄ αναλαμβάνει την εξουσία και διακηρύσσει τη νίκη του στη μεγάλη επιγραφή του Μπεχιστούν."
          },
          extendedDescription: {
            en: "Darius crushed a wave of revolts across the empire and recorded his triumph in three languages on a cliff at Behistun — the trilingual key that later unlocked cuneiform. A distant cousin of Cyrus, he ruled by the grace of Ahura Mazda and reshaped the empire into a lasting institution.",
            el: "Ο Δαρείος κατέστειλε ένα κύμα εξεγέρσεων σε όλη την αυτοκρατορία και κατέγραψε τον θρίαμβό του σε τρεις γλώσσες πάνω σε βράχο στο Μπεχιστούν — το τρίγλωσσο κλειδί που αργότερα αποκρυπτογράφησε τη σφηνοειδή γραφή. Μακρινός εξάδελφος του Κύρου, κυβέρνησε με τη χάρη του Αχούρα Μάζντα και μεταμόρφωσε την αυτοκρατορία σε έναν διαρκή θεσμό."
          },
          category: "political"
        }
      ]
    },
    {
      year: -518,
      era: {
        en: "Darius the Great",
        el: "Δαρείος ο Μέγας"
      },
      events: [
        {
          title: {
            en: "Satrapies, roads, and Persepolis",
            el: "Σατραπείες, δρόμοι και Περσέπολη"
          },
          description: {
            en: "Darius organizes the empire into satrapies, builds the Royal Road, and begins the ceremonial capital of Persepolis.",
            el: "Ο Δαρείος οργανώνει την αυτοκρατορία σε σατραπείες, κατασκευάζει τη Βασιλική Οδό και ξεκινά την τελετουργική πρωτεύουσα, την Περσέπολη."
          },
          extendedDescription: {
            en: "Darius divided his lands into some twenty satrapies with fixed tribute, standardized coinage with the gold daric, and linked Sardis to Susa by a road covered in a week by royal couriers. At Persepolis, tribute-bearers of every nation were carved climbing the great stairways — an image of a world empire united under the King of Kings.",
            el: "Ο Δαρείος χώρισε τα εδάφη του σε περίπου είκοσι σατραπείες με καθορισμένο φόρο, τυποποίησε το νόμισμα με τον χρυσό δαρεικό και συνέδεσε τις Σάρδεις με τα Σούσα με έναν δρόμο που οι βασιλικοί ταχυδρόμοι διέσχιζαν σε μια εβδομάδα. Στην Περσέπολη, φοροφόροι κάθε έθνους λαξεύτηκαν να ανεβαίνουν τα μεγάλα κλιμακοστάσια — εικόνα μιας παγκόσμιας αυτοκρατορίας ενωμένης υπό τον Βασιλέα των Βασιλέων."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Persepolis001.jpg?width=1024",
            alt: {
              en: "The ruins of Persepolis, ceremonial capital of Darius the Great",
              el: "Τα ερείπια της Περσέπολης, τελετουργικής πρωτεύουσας του Δαρείου του Μεγάλου"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -490,
      era: {
        en: "The Persian Wars",
        el: "Περσικοί Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "Marathon",
            el: "Ο Μαραθώνας"
          },
          description: {
            en: "Darius's expedition against Athens is defeated on the plain of Marathon, the first great check to Persian expansion in Europe.",
            el: "Η εκστρατεία του Δαρείου εναντίον της Αθήνας ηττάται στην πεδιάδα του Μαραθώνα, το πρώτο μεγάλο ανάχωμα στην περσική επέκταση στην Ευρώπη."
          },
          extendedDescription: {
            en: "Sent to punish Athens and Eretria for aiding the Ionian Revolt, the Persian force was routed by the Athenian hoplites. In the long Persian view Marathon was a frontier skirmish; in the Greek imagination it became a founding legend of freedom against despotism — a difference of perspective that colours the whole tradition.",
            el: "Σταλμένη να τιμωρήσει την Αθήνα και την Ερέτρια για τη βοήθειά τους στην Ιωνική Επανάσταση, η περσική δύναμη τράπηκε σε φυγή από τους Αθηναίους οπλίτες. Στη μακρά περσική οπτική ο Μαραθώνας ήταν μια συνοριακή αψιμαχία· στην ελληνική φαντασία έγινε ιδρυτικός θρύλος ελευθερίας ενάντια στον δεσποτισμό — μια διαφορά οπτικής που χρωματίζει ολόκληρη την παράδοση."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Scene_of_the_Battle_of_Marathon.jpg?width=1024",
            alt: {
              en: "The Battle of Marathon (490 BCE)",
              el: "Η μάχη του Μαραθώνα (490 π.Χ.)"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -480,
      era: {
        en: "The Persian Wars",
        el: "Περσικοί Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "Xerxes invades Greece",
            el: "Ο Ξέρξης εισβάλλει στην Ελλάδα"
          },
          description: {
            en: "Xerxes I leads a vast army into Greece, wins at Thermopylae, and burns Athens — but his fleet is shattered at Salamis.",
            el: "Ο Ξέρξης Α΄ οδηγεί έναν τεράστιο στρατό στην Ελλάδα, νικά στις Θερμοπύλες και πυρπολεί την Αθήνα — αλλά ο στόλος του συντρίβεται στη Σαλαμίνα."
          },
          extendedDescription: {
            en: "Xerxes bridged the Hellespont and crushed the Spartans at Thermopylae, but the Greek victory at Salamis and the defeat of his land army at Plataea the next year ended the invasion. The wars fixed the enduring image of Persia in the Western tradition, even as the empire itself remained the dominant power of the age.",
            el: "Ο Ξέρξης γεφύρωσε τον Ελλήσποντο και συνέτριψε τους Σπαρτιάτες στις Θερμοπύλες, όμως η ελληνική νίκη στη Σαλαμίνα και η ήττα του χερσαίου στρατού του στις Πλαταιές τον επόμενο χρόνο τερμάτισαν την εισβολή. Οι πόλεμοι καθήλωσαν τη διαρκή εικόνα της Περσίας στη δυτική παράδοση, μολονότι η ίδια η αυτοκρατορία παρέμεινε η κυρίαρχη δύναμη της εποχής."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Battle_of_salamis.png?width=1024",
            alt: {
              en: "The naval Battle of Salamis (480 BCE)",
              el: "Η ναυμαχία της Σαλαμίνας (480 π.Χ.)"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -465,
      era: {
        en: "The Later Achaemenids",
        el: "Ύστεροι Αχαιμενίδες"
      },
      events: [
        {
          title: {
            en: "The empire at its height under Artaxerxes I",
            el: "Η αυτοκρατορία στο απόγειό της υπό τον Αρταξέρξη Α΄"
          },
          description: {
            en: "For all its frontier reverses, the Achaemenid Empire remains the wealthiest and most populous state on earth, ruling perhaps a third of humanity.",
            el: "Παρά τις συνοριακές αναποδιές της, η Αυτοκρατορία των Αχαιμενιδών παραμένει το πλουσιότερο και πολυπληθέστερο κράτος της γης, κυβερνώντας ίσως το ένα τρίτο της ανθρωπότητας."
          },
          extendedDescription: {
            en: "The Peace of Callias eased the conflict with Athens, and Persian gold increasingly shaped Greek politics from afar. Aramaic served as the common administrative language from Egypt to India, tolerant governance held a patchwork of peoples together, and the King of Kings presided over a court of unrivalled splendour.",
            el: "Η Ειρήνη του Καλλία άμβλυνε τη σύγκρουση με την Αθήνα, ενώ ο περσικός χρυσός διαμόρφωνε ολοένα και περισσότερο την ελληνική πολιτική από μακριά. Η αραμαϊκή χρησίμευε ως κοινή διοικητική γλώσσα από την Αίγυπτο ως την Ινδία, η ανεκτική διακυβέρνηση συγκρατούσε ένα μωσαϊκό λαών και ο Βασιλεύς των Βασιλέων προήδρευε μιας αυλής ασύγκριτης λαμπρότητας."
          },
          category: "political"
        }
      ]
    },
    {
      year: -401,
      era: {
        en: "The Later Achaemenids",
        el: "Ύστεροι Αχαιμενίδες"
      },
      events: [
        {
          title: {
            en: "Cunaxa and the March of the Ten Thousand",
            el: "Τα Κούναξα και η Κάθοδος των Μυρίων"
          },
          description: {
            en: "The rebel prince Cyrus the Younger falls at Cunaxa, and his Greek mercenaries fight their way home across the empire.",
            el: "Ο επαναστάτης πρίγκιπας Κύρος ο Νεότερος πέφτει στα Κούναξα και οι Έλληνες μισθοφόροι του πολεμούν για να επιστρέψουν διασχίζοντας την αυτοκρατορία."
          },
          extendedDescription: {
            en: "Xenophon's Anabasis told how the Ten Thousand, stranded deep in Mesopotamia, marched to the Black Sea — and revealed to the Greek world how a small disciplined force could cross the Persian heartland. The lesson was not lost on a young Macedonian named Alexander.",
            el: "Η Ανάβαση του Ξενοφώντα αφηγήθηκε πώς οι Μύριοι, εγκλωβισμένοι βαθιά στη Μεσοποταμία, βάδισαν ως τον Εύξεινο Πόντο — και αποκάλυψαν στον ελληνικό κόσμο πώς μια μικρή πειθαρχημένη δύναμη μπορούσε να διασχίσει την περσική ενδοχώρα. Το μάθημα δεν πέρασε απαρατήρητο από έναν νεαρό Μακεδόνα ονόματι Αλέξανδρο."
          },
          category: "military"
        }
      ]
    },
    {
      year: -334,
      era: {
        en: "Fall of the Empire",
        el: "Πτώση της Αυτοκρατορίας"
      },
      events: [
        {
          title: {
            en: "Alexander invades Asia",
            el: "Ο Αλέξανδρος εισβάλλει στην Ασία"
          },
          description: {
            en: "Alexander of Macedon crosses into Asia and defeats Persian armies at the Granicus and at Issus.",
            el: "Ο Αλέξανδρος της Μακεδονίας διαβαίνει στην Ασία και νικά τους περσικούς στρατούς στον Γρανικό και στην Ισσό."
          },
          extendedDescription: {
            en: "In a lightning campaign Alexander broke the western defences of the empire, and at Issus in 333 BCE he routed Darius III himself, capturing the royal family. City after city opened its gates, and the Achaemenid order, three centuries old, began to unravel from the west.",
            el: "Σε μια αστραπιαία εκστρατεία ο Αλέξανδρος διέσπασε τις δυτικές άμυνες της αυτοκρατορίας, και στην Ισσό το 333 π.Χ. έτρεψε σε φυγή τον ίδιο τον Δαρείο Γ΄, αιχμαλωτίζοντας τη βασιλική οικογένεια. Η μία πόλη μετά την άλλη άνοιγε τις πύλες της, και η τάξη των Αχαιμενιδών, τριών αιώνων, άρχισε να διαλύεται από τη δύση."
          },
          category: "military"
        }
      ]
    },
    {
      year: -330,
      era: {
        en: "Fall of the Empire",
        el: "Πτώση της Αυτοκρατορίας"
      },
      events: [
        {
          title: {
            en: "Gaugamela and the death of Darius III",
            el: "Τα Γαυγάμηλα και ο θάνατος του Δαρείου Γ΄"
          },
          description: {
            en: "Alexander wins the decisive victory at Gaugamela, takes Persepolis, and Darius III is murdered by his own satrap — ending the Achaemenid Empire.",
            el: "Ο Αλέξανδρος κερδίζει την αποφασιστική νίκη στα Γαυγάμηλα, καταλαμβάνει την Περσέπολη, και ο Δαρείος Γ΄ δολοφονείται από τον ίδιο του τον σατράπη — τερματίζοντας την Αυτοκρατορία των Αχαιμενιδών."
          },
          extendedDescription: {
            en: "After Gaugamela, Alexander entered Babylon and Susa and burned the palaces of Persepolis, perhaps in revenge for Xerxes' sack of Athens. The fugitive Darius was killed by the satrap Bessus; Alexander gave him a royal burial and claimed the empire for himself. Two hundred and twenty years of Achaemenid rule were over — but Persia would rise again.",
            el: "Μετά τα Γαυγάμηλα, ο Αλέξανδρος εισήλθε στη Βαβυλώνα και τα Σούσα και πυρπόλησε τα ανάκτορα της Περσέπολης, ίσως ως εκδίκηση για τη λεηλασία της Αθήνας από τον Ξέρξη. Ο φυγάς Δαρείος σκοτώθηκε από τον σατράπη Βήσσο· ο Αλέξανδρος του πρόσφερε βασιλική ταφή και διεκδίκησε την αυτοκρατορία για τον εαυτό του. Διακόσια είκοσι χρόνια αχαιμενιδικής κυριαρχίας είχαν τελειώσει — όμως η Περσία θα ανέτελλε ξανά."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Pietro_da_Cortona_-_Battle_of_Alexander_versus_Darius_-_Google_Art_Project.jpg?width=1024",
            alt: {
              en: "Alexander defeats Darius III, painting by Pietro da Cortona",
              el: "Ο Αλέξανδρος νικά τον Δαρείο Γ΄, πίνακας του Pietro da Cortona"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
