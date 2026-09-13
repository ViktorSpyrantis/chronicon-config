/** Sasanian Empire — Αυτοκρατορία των Σασανιδών · Persian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const SASANIAN_EMPIRE = {
  id: "sasanian-empire" as const,
  label: {
    en: "Sasanian Empire",
    el: "Αυτοκρατορία των Σασανιδών"
  },
  supertitle: {
    en: "Ērānshahr",
    el: "Ερανσάχρ"
  },
  title: {
    en: "The Sasanian Empire",
    el: "Η Αυτοκρατορία των Σασανιδών"
  },
  subtitle: {
    en: "From Ardashir's revival of the Persian empire and Shapur's capture of a Roman emperor through the Zoroastrian state church, the golden age of Khosrow the Just, and the last great war with Byzantium, to the Arab conquest and the death of the last king of kings. Slide across the centuries to read the major events of the last pre-Islamic Persian empire.",
    el: "Από την αναβίωση της περσικής αυτοκρατορίας από τον Αρντασίρ και την αιχμαλωσία ενός Ρωμαίου αυτοκράτορα από τον Σαπώρ, μέσα από τη ζωροαστρική κρατική εκκλησία, τη χρυσή εποχή του Χοσρόη του Δίκαιου και τον τελευταίο μεγάλο πόλεμο με το Βυζάντιο, ως την αραβική κατάκτηση και τον θάνατο του τελευταίου βασιλέα των βασιλέων. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα γεγονότα της τελευταίας προϊσλαμικής περσικής αυτοκρατορίας."
  },
  menuDescription: {
    en: "Rome's equal in the East: Zoroastrian Persia from Ardashir to the Arab conquest.",
    el: "Ισότιμη της Ρώμης στην Ανατολή: η ζωροαστρική Περσία από τον Αρντασίρ ως την αραβική κατάκτηση."
  },
  footerLabel: {
    en: "Sasanian Empire · 224-651 AD",
    el: "Αυτοκρατορία των Σασανιδών · 224-651 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Imperial Timeline",
    el: "Αυτοκρατορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Sasanian Empire",
    el: "Η Αυτοκρατορία των Σασανιδών"
  },
  theme: THEMES.crimson,
  timeline: [
    {
      year: 224,
      era: {
        en: "Ardashir I",
        el: "Αρντασίρ Α΄"
      },
      events: [
        {
          title: {
            en: "The founding of the Sasanian Empire",
            el: "Η ίδρυση της Αυτοκρατορίας των Σασανιδών"
          },
          description: {
            en: "Ardashir I overthrows the Parthians and proclaims a revived Persian empire ruled from Ctesiphon.",
            el: "Ο Αρντασίρ Α΄ ανατρέπει τους Πάρθους και διακηρύσσει μια αναγεννημένη περσική αυτοκρατορία με έδρα την Κτησιφώντα."
          },
          extendedDescription: {
            en: "Named for his ancestor Sasan, Ardashir centralized the loose Parthian confederation into a bureaucratic state, elevated Zoroastrianism as a state religion, and looked back to the Achaemenids as models. His empire would endure over four centuries as the superpower of the East.",
            el: "Ονομασμένος από τον πρόγονό του Σασάν, ο Αρντασίρ μετέτρεψε τη χαλαρή παρθική συνομοσπονδία σε ένα γραφειοκρατικό κράτος, ανύψωσε τον Ζωροαστρισμό σε κρατική θρησκεία και ανέτρεχε στους Αχαιμενίδες ως πρότυπα. Η αυτοκρατορία του θα άντεχε πάνω από τέσσερις αιώνες ως η υπερδύναμη της Ανατολής."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Dinar_of_Ardashir_I_(cropped).jpg?width=1024",
            alt: {
              en: "Gold dinar of Ardashir I, founder of the Sasanian Empire",
              el: "Χρυσό δηνάριο του Αρντασίρ Α΄, ιδρυτή της Σασανιδικής Αυτοκρατορίας"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 260,
      era: {
        en: "Shapur I",
        el: "Σαπώρ Α΄"
      },
      events: [
        {
          title: {
            en: "Shapur I captures the emperor Valerian",
            el: "Ο Σαπώρ Α΄ αιχμαλωτίζει τον αυτοκράτορα Βαλεριανό"
          },
          description: {
            en: "Shapur I defeats and captures the Roman emperor Valerian at Edessa, an unprecedented humiliation for Rome.",
            el: "Ο Σαπώρ Α΄ νικά και αιχμαλωτίζει τον Ρωμαίο αυτοκράτορα Βαλεριανό στην Έδεσσα, μια πρωτοφανής ταπείνωση για τη Ρώμη."
          },
          extendedDescription: {
            en: "Shapur celebrated his triumph over three emperors — Gordian, Philip, and Valerian — in monumental rock reliefs at Naqsh-e Rustam and a boastful trilingual inscription. Valerian is said to have died in captivity, and the deportation of Roman prisoners helped build cities and the great dam at Shushtar.",
            el: "Ο Σαπώρ γιόρτασε τον θρίαμβό του επί τριών αυτοκρατόρων — του Γορδιανού, του Φιλίππου και του Βαλεριανού — σε μνημειακά βραχογλυπτά στο Νακς-ε Ρουστάμ και σε μια καυχησιάρικη τρίγλωσση επιγραφή. Ο Βαλεριανός λέγεται πως πέθανε στην αιχμαλωσία, ενώ η εκτόπιση Ρωμαίων αιχμαλώτων βοήθησε να χτιστούν πόλεις και το μεγάλο φράγμα του Σουστάρ."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shapour_I_statue.gif?width=1024",
            alt: {
              en: "Colossal statue of Shapur I, who captured the emperor Valerian",
              el: "Κολοσσιαίο άγαλμα του Σαπούρ Α΄, που αιχμαλώτισε τον αυτοκράτορα Βαλεριανό"
            },
            credit: "Via Wikimedia Commons"
          }
        },
        {
          title: {
            en: "Mani and the Manichaean religion",
            el: "Ο Μάνης και η μανιχαϊστική θρησκεία"
          },
          description: {
            en: "The prophet Mani preaches a new universal faith at the Sasanian court, blending Zoroastrian, Christian, and Buddhist ideas.",
            el: "Ο προφήτης Μάνης κηρύσσει μια νέα οικουμενική πίστη στην αυλή των Σασανιδών, συνδυάζοντας ζωροαστρικές, χριστιανικές και βουδιστικές ιδέες."
          },
          extendedDescription: {
            en: "Manichaeism taught a stark dualism of light and darkness and spread from the Atlantic to China. Tolerated under Shapur, Mani was later executed under priestly pressure, but his religion would trouble emperors and popes for a thousand years and give the word 'Manichaean' to the world.",
            el: "Ο Μανιχαϊσμός δίδασκε έναν απόλυτο δυϊσμό φωτός και σκότους και εξαπλώθηκε από τον Ατλαντικό ως την Κίνα. Ανεκτός υπό τον Σαπώρ, ο Μάνης εκτελέστηκε αργότερα υπό την πίεση του ιερατείου, όμως η θρησκεία του θα ταλαιπωρούσε αυτοκράτορες και πάπες επί χίλια χρόνια και θα χάριζε στον κόσμο τη λέξη «μανιχαϊστικός»."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Seal_of_Mani_(cleaned_up)._Seal_with_figure_of_Mani,_possibly_3rd_century_CE,_possibly_Irak._Cabinet_des_M%C3%A9dailles,_Paris.jpg?width=1024",
            alt: {
              en: "A seal depicting Mani, founder of Manichaeism",
              el: "Σφραγίδα με απεικόνιση του Μάνη, ιδρυτή του Μανιχαϊσμού"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 309,
      era: {
        en: "Shapur II",
        el: "Σαπώρ Β΄"
      },
      events: [
        {
          title: {
            en: "The long reign of Shapur II",
            el: "Η μακρά βασιλεία του Σαπώρ Β΄"
          },
          description: {
            en: "Crowned in the womb, Shapur II reigns seventy years, recovering territory from Rome and firmly establishing Zoroastrian orthodoxy.",
            el: "Στεμμένος πριν καν γεννηθεί, ο Σαπώρ Β΄ βασιλεύει εβδομήντα χρόνια, ανακτώντας εδάφη από τη Ρώμη και εδραιώνοντας τη ζωροαστρική ορθοδοξία."
          },
          extendedDescription: {
            en: "Shapur II's wars forced the emperor Julian's fatal Persian campaign of 363, after which Rome ceded Nisibis and Armenia. Under him the Avesta was compiled and a state church took shape, while Christians within the empire — now suspect as Rome's co-religionists — faced persecution.",
            el: "Οι πόλεμοι του Σαπώρ Β΄ προκάλεσαν τη μοιραία περσική εκστρατεία του αυτοκράτορα Ιουλιανού το 363, μετά την οποία η Ρώμη παραχώρησε τη Νίσιβη και την Αρμενία. Επί των ημερών του συντάχθηκε η Αβέστα και διαμορφώθηκε μια κρατική εκκλησία, ενώ οι χριστιανοί εντός της αυτοκρατορίας — ύποπτοι πλέον ως ομόθρησκοι της Ρώμης — αντιμετώπισαν διωγμούς."
          },
          category: "military"
        }
      ]
    },
    {
      year: 484,
      era: {
        en: "Crisis and Reform",
        el: "Κρίση και Μεταρρύθμιση"
      },
      events: [
        {
          title: {
            en: "The revolt of Mazdak",
            el: "Η εξέγερση του Μαζντάκ"
          },
          description: {
            en: "The reformer Mazdak preaches a radical creed of shared property, winning royal favour before a violent backlash.",
            el: "Ο μεταρρυθμιστής Μαζντάκ κηρύσσει ένα ριζοσπαστικό δόγμα κοινοκτημοσύνης, κερδίζοντας τη βασιλική εύνοια πριν από μια βίαιη αντίδραση."
          },
          extendedDescription: {
            en: "Mazdak's movement, backed for a time by King Kavad I, challenged the power of the nobility and the priesthood with calls to share wealth. It was crushed in a massacre around 528, but the upheaval it caused pushed the state toward the sweeping reforms of the next reign.",
            el: "Το κίνημα του Μαζντάκ, που για ένα διάστημα υποστηρίχθηκε από τον βασιλιά Καβάντ Α΄, αμφισβήτησε την ισχύ της αριστοκρατίας και του ιερατείου με εκκλήσεις για μοιρασιά του πλούτου. Συνετρίβη σε μια σφαγή γύρω στο 528, όμως η αναταραχή που προκάλεσε ώθησε το κράτος προς τις σαρωτικές μεταρρυθμίσεις της επόμενης βασιλείας."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 531,
      era: {
        en: "Khosrow I",
        el: "Χοσρόης Α΄"
      },
      events: [
        {
          title: {
            en: "The golden age of Khosrow the Just",
            el: "Η χρυσή εποχή του Χοσρόη του Δίκαιου"
          },
          description: {
            en: "Khosrow I reforms taxation and the army, patronizes learning, and raises the Sasanian Empire to its cultural peak.",
            el: "Ο Χοσρόης Α΄ μεταρρυθμίζει τη φορολογία και τον στρατό, προστατεύει τα γράμματα και ανεβάζει την Αυτοκρατορία των Σασανιδών στο πολιτιστικό της απόγειο."
          },
          extendedDescription: {
            en: "Khosrow Anushirvan ('of immortal soul') is remembered as the model just king. He welcomed Greek philosophers fleeing Justinian's closure of the Academy, sponsored translations from Sanskrit and Greek, and founded the academy of Gondeshapur, a great centre of medicine that helped transmit ancient learning to the Islamic world.",
            el: "Ο Χοσρόης Ανουσιρβάν («της αθάνατης ψυχής») μνημονεύεται ως το πρότυπο του δίκαιου βασιλιά. Υποδέχτηκε Έλληνες φιλοσόφους που έφευγαν μετά το κλείσιμο της Ακαδημίας από τον Ιουστινιανό, χρηματοδότησε μεταφράσεις από τα σανσκριτικά και τα ελληνικά, και ίδρυσε την ακαδημία του Γκοντεσαπούρ, ένα μεγάλο κέντρο ιατρικής που βοήθησε να μεταδοθεί η αρχαία γνώση στον ισλαμικό κόσμο."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Plate_of_the_Sasanian_king_Khosrow_I_Anushirvan.jpg?width=1024",
            alt: {
              en: "A Sasanian plate depicting King Khosrow I Anushirvan",
              el: "Σασανιδικός δίσκος με τον βασιλιά Χοσρόη Α΄ Ανουσιρβάν"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 570,
      era: {
        en: "Khosrow I",
        el: "Χοσρόης Α΄"
      },
      events: [
        {
          title: {
            en: "Persia conquers Yemen",
            el: "Η Περσία κατακτά την Υεμένη"
          },
          description: {
            en: "Sasanian forces intervene in southern Arabia and drive out the Ethiopians, extending Persian power to the Indian Ocean.",
            el: "Δυνάμεις των Σασανιδών επεμβαίνουν στη νότια Αραβία και εκδιώκουν τους Αιθίοπες, επεκτείνοντας την περσική ισχύ ως τον Ινδικό Ωκεανό."
          },
          extendedDescription: {
            en: "At the height of its reach the empire touched three seas and controlled much of the trade between the Mediterranean and Asia. In the same era, according to tradition, the Prophet Muhammad was born far to the south in Mecca — the world into which Islam would soon be born was one dominated by Persia and Byzantium.",
            el: "Στο απόγειο της εμβέλειάς της η αυτοκρατορία άγγιζε τρεις θάλασσες και έλεγχε μεγάλο μέρος του εμπορίου ανάμεσα στη Μεσόγειο και την Ασία. Την ίδια εποχή, κατά την παράδοση, ο Προφήτης Μωάμεθ γεννήθηκε μακριά στον νότο, στη Μέκκα — ο κόσμος μέσα στον οποίο θα γεννιόταν σύντομα το Ισλάμ ήταν ένας κόσμος κυριαρχούμενος από την Περσία και το Βυζάντιο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 614,
      era: {
        en: "Khosrow II",
        el: "Χοσρόης Β΄"
      },
      events: [
        {
          title: {
            en: "Khosrow II takes Jerusalem",
            el: "Ο Χοσρόης Β΄ καταλαμβάνει την Ιερουσαλήμ"
          },
          description: {
            en: "In the last great Persian offensive, Sasanian armies seize Syria, Palestine, and Egypt and carry off the True Cross.",
            el: "Στην τελευταία μεγάλη περσική επίθεση, οι στρατοί των Σασανιδών καταλαμβάνουν τη Συρία, την Παλαιστίνη και την Αίγυπτο και αρπάζουν τον Τίμιο Σταυρό."
          },
          extendedDescription: {
            en: "Khosrow II Parviz overran the richest provinces of the Byzantine Empire and reached the walls of Constantinople itself. For a moment it seemed the old Achaemenid empire had been restored — but the effort had exhausted both great powers and left them fatally weakened before an unforeseen storm from the desert.",
            el: "Ο Χοσρόης Β΄ Παρβίζ κατέλαβε τις πλουσιότερες επαρχίες της Βυζαντινής Αυτοκρατορίας και έφτασε ως τα ίδια τα τείχη της Κωνσταντινούπολης. Για μια στιγμή φάνηκε πως η παλαιά αχαιμενιδική αυτοκρατορία είχε αποκατασταθεί — όμως η προσπάθεια είχε εξαντλήσει και τις δύο μεγάλες δυνάμεις και τις άφησε θανάσιμα αποδυναμωμένες μπροστά σε μια απρόβλεπτη θύελλα από την έρημο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 628,
      era: {
        en: "Heraclius and Collapse",
        el: "Ηράκλειος και Κατάρρευση"
      },
      events: [
        {
          title: {
            en: "Heraclius turns the tide",
            el: "Ο Ηράκλειος αντιστρέφει την πλάστιγγα"
          },
          description: {
            en: "The Byzantine emperor Heraclius strikes deep into Persia, and Khosrow II is overthrown and killed amid civil war.",
            el: "Ο Βυζαντινός αυτοκράτορας Ηράκλειος εισχωρεί βαθιά στην Περσία, και ο Χοσρόης Β΄ ανατρέπεται και σκοτώνεται μέσα σε εμφύλιο πόλεμο."
          },
          extendedDescription: {
            en: "Heraclius's daring counter-offensive won at Nineveh in 627 and forced Persia to surrender its conquests. Khosrow was murdered by his own son, and a decade of coups and plagues followed, shattering the Sasanian state at the very moment a new power was rising in Arabia.",
            el: "Η τολμηρή αντεπίθεση του Ηράκλειου νίκησε στη Νινευή το 627 και ανάγκασε την Περσία να παραδώσει τις κατακτήσεις της. Ο Χοσρόης δολοφονήθηκε από τον ίδιο του τον γιο, και ακολούθησε μια δεκαετία πραξικοπημάτων και επιδημιών που συνέτριψαν το κράτος των Σασανιδών ακριβώς τη στιγμή που μια νέα δύναμη ανερχόταν στην Αραβία."
          },
          category: "military"
        }
      ]
    },
    {
      year: 636,
      era: {
        en: "The Arab Conquest",
        el: "Η Αραβική Κατάκτηση"
      },
      events: [
        {
          title: {
            en: "The Battle of al-Qadisiyyah",
            el: "Η μάχη της αλ-Καντισίγια"
          },
          description: {
            en: "Arab Muslim armies destroy the main Sasanian force at al-Qadisiyyah, opening the road to Ctesiphon.",
            el: "Άραβες μουσουλμανικοί στρατοί καταστρέφουν την κύρια δύναμη των Σασανιδών στην αλ-Καντισίγια, ανοίγοντας τον δρόμο για την Κτησιφώντα."
          },
          extendedDescription: {
            en: "After a hard-fought battle near the Euphrates, the Arabs broke the imperial army and soon took the capital, seizing its fabled treasures. The exhausted empire, drained by the Byzantine war and internal chaos, could not withstand the disciplined faith-driven armies of the new Caliphate.",
            el: "Έπειτα από μια σκληρή μάχη κοντά στον Ευφράτη, οι Άραβες συνέτριψαν τον αυτοκρατορικό στρατό και σύντομα κατέλαβαν την πρωτεύουσα, αρπάζοντας τους θρυλικούς θησαυρούς της. Η εξαντλημένη αυτοκρατορία, στραγγισμένη από τον βυζαντινό πόλεμο και το εσωτερικό χάος, δεν μπόρεσε να αντισταθεί στους πειθαρχημένους, εμπνευσμένους από την πίστη στρατούς του νέου Χαλιφάτου."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Depiction_of_the_Battle_of_al-Q%C4%81disiyyah_from_a_manuscript_of_the_Persian_epic_Sh%C4%81h-n%C4%81meh._Source-_British_Library_(MS._I.O.Islamic_3265_(1614)_f._602r).jpg?width=1024",
            alt: {
              en: "The Battle of al-Qadisiyyah, from a manuscript of the Shahnameh",
              el: "Η μάχη του Καντισίγια, από χειρόγραφο του Σαχναμέ"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 651,
      era: {
        en: "The Arab Conquest",
        el: "Η Αραβική Κατάκτηση"
      },
      events: [
        {
          title: {
            en: "The death of Yazdegerd III",
            el: "Ο θάνατος του Γιαζντγκέρντ Γ΄"
          },
          description: {
            en: "The last Sasanian king is killed at Merv while fleeing, ending four centuries of Persian empire.",
            el: "Ο τελευταίος Σασανίδης βασιλιάς σκοτώνεται στη Μερβ ενώ διαφεύγει, τερματίζοντας τέσσερις αιώνες περσικής αυτοκρατορίας."
          },
          extendedDescription: {
            en: "Yazdegerd III wandered his collapsing realm seeking allies and was murdered by a miller. His son fled to China. The Sasanian state was gone, but its administration, art, and courtly ideals were absorbed by the conquerors — Persia was defeated in war yet would reshape Islamic civilization itself.",
            el: "Ο Γιαζντγκέρντ Γ΄ περιπλανήθηκε στο καταρρέον κράτος του αναζητώντας συμμάχους και δολοφονήθηκε από έναν μυλωνά. Ο γιος του κατέφυγε στην Κίνα. Το κράτος των Σασανιδών είχε χαθεί, όμως η διοίκηση, η τέχνη και τα αυλικά του ιδεώδη απορροφήθηκαν από τους κατακτητές — η Περσία ηττήθηκε στον πόλεμο, ωστόσο θα ξαναδιαμόρφωνε τον ίδιο τον ισλαμικό πολιτισμό."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
