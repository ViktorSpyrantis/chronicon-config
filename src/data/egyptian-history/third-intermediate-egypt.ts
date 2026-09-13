/** Third Intermediate Period — Τρίτη Ενδιάμεση Περίοδος · Egyptian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const THIRD_INTERMEDIATE_EGYPT = {
  id: "third-intermediate-egypt" as const,
  label: {
    en: "Third Intermediate Period",
    el: "Τρίτη Ενδιάμεση Περίοδος"
  },
  supertitle: {
    en: "Division & Foreign Kings",
    el: "Διαίρεση & Ξένοι Βασιλείς"
  },
  title: {
    en: "The Third Intermediate Period",
    el: "Η Τρίτη Ενδιάμεση Περίοδος"
  },
  subtitle: {
    en: "From the division of Egypt between the Tanite kings and the Theban priests of Amun, through the Libyan dynasties of Shoshenq I and the splintering of the land, the conquest by the Kushite pharaohs of the Twenty-fifth Dynasty and the height of Taharqa, to the Assyrian sack of Thebes and Psamtik I's reunification under Sais around 664 BCE. Slide across centuries of division, foreign kings, and revival along the Nile.",
    el: "Από τη διαίρεση της Αιγύπτου ανάμεσα στους τανιτικούς βασιλείς και τους θηβαίους ιερείς του Άμμωνα, μέσα από τις λιβυκές δυναστείες του Σεσόγχι Α΄ και τον κατακερματισμό της χώρας, την κατάκτηση από τους Κουσίτες φαραώ της Εικοστής Πέμπτης Δυναστείας και το απόγειο του Τααρκά, ως την ασσυριακή λεηλασία της Θήβας και την επανένωση από τον Ψαμμήτιχο Α΄ υπό τη Σάιδα γύρω στο 664 π.Χ. Μετακινηθείτε ανάμεσα σε αιώνες διαίρεσης, ξένων βασιλέων και αναγέννησης κατά μήκος του Νείλου."
  },
  menuDescription: {
    en: "A divided Egypt under Libyan and Kushite kings, until Assyria and then Saïs reunite it.",
    el: "Μια διαιρεμένη Αίγυπτος υπό λίβυους και κουσίτες βασιλείς, ώσπου η Ασσυρία κι έπειτα η Σάις την ενώνουν."
  },
  footerLabel: {
    en: "Third Intermediate Period · c. 1069–664 BCE",
    el: "Τρίτη Ενδιάμεση Περίοδος · περ. 1069–664 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Third Intermediate Period",
    el: "Η Τρίτη Ενδιάμεση Περίοδος"
  },
  theme: THEMES.copper,
  timeline: [
    {
      year: -1069,
      era: {
        en: "Twenty-first Dynasty",
        el: "Εικοστή Πρώτη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "A land divided between Tanis and Thebes",
            el: "Μια χώρα διαιρεμένη ανάμεσα στην Τάνη και τη Θήβα"
          },
          description: {
            en: "With the New Kingdom ended, the Twenty-first Dynasty rules the Delta from Tanis while the high priests of Amun govern the south from Thebes, splitting Egypt in two.",
            el: "Με το Νέο Βασίλειο να έχει τελειώσει, η Εικοστή Πρώτη Δυναστεία κυβερνά το Δέλτα από την Τάνη, ενώ οι αρχιερείς του Άμμωνα διοικούν τον νότο από τη Θήβα, διχοτομώντας την Αίγυπτο."
          },
          extendedDescription: {
            en: "The kings at Tanis (Djanet) in the eastern Delta and the priest-rulers of Amun at Thebes were closely linked by blood and marriage and broadly cooperated, but Egypt's political unity was gone. Tanis became a new northern capital, its temples built with stone quarried from nearby Pi-Ramesses. The intact royal tombs found there in 1939–1940, with their silver coffins and gold masks, rival Tutankhamun's for their treasure.",
            el: "Οι βασιλείς της Τάνης (Ντζάνετ) στο ανατολικό Δέλτα και οι ιερείς-ηγεμόνες του Άμμωνα στη Θήβα συνδέονταν στενά με δεσμούς αίματος και γάμου και γενικά συνεργάζονταν, αλλά η πολιτική ενότητα της Αιγύπτου είχε χαθεί. Η Τάνη έγινε νέα βόρεια πρωτεύουσα, με τους ναούς της χτισμένους από λίθο λατομημένο από τη γειτονική Πι-Ραμσής. Οι ανέπαφοι βασιλικοί τάφοι που βρέθηκαν εκεί το 1939–1940, με τις ασημένιες σαρκοφάγους και τις χρυσές μάσκες τους, ανταγωνίζονται εκείνους του Τουταγχαμών σε θησαυρό."
          },
          category: "political"
        }
      ]
    },
    {
      year: -1000,
      era: {
        en: "Twenty-first Dynasty",
        el: "Εικοστή Πρώτη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "The royal mummy caches of Thebes",
            el: "Οι κρύπτες των βασιλικών μουμιών της Θήβας"
          },
          description: {
            en: "To save the great pharaohs from rampant tomb robbery, the Theban priests gather and rebury dozens of royal mummies in hidden caches.",
            el: "Για να σώσουν τους μεγάλους φαραώ από την εκτεταμένη τυμβωρυχία, οι θηβαίοι ιερείς συγκεντρώνουν και ενταφιάζουν εκ νέου δεκάδες βασιλικές μούμιες σε κρυφές κρύπτες."
          },
          extendedDescription: {
            en: "As order frayed, the priests of Amun systematically rewrapped and relocated the mummies of New Kingdom rulers — among them Seti I, Ramesses II, and Thutmose III — to protect them from looters. Two great caches, one at Deir el-Bahari and one in the tomb of Amenhotep II, were rediscovered in the late nineteenth century, returning the bodies of Egypt's most famous kings to the modern world.",
            el: "Καθώς η τάξη διαλυόταν, οι ιερείς του Άμμωνα συστηματικά ξανατύλιγαν και μετέφεραν τις μούμιες των ηγεμόνων του Νέου Βασιλείου — μεταξύ τους ο Σέτι Α΄, ο Ραμσής Β΄ και ο Θούτμωσης Γ΄ — για να τις προστατεύσουν από τους λεηλάτες. Δύο μεγάλες κρύπτες, μία στο Ντέιρ ελ-Μπαχάρι και μία στον τάφο του Αμένοφι Β΄, ανακαλύφθηκαν εκ νέου στα τέλη του δέκατου ένατου αιώνα, επιστρέφοντας τα σώματα των πιο διάσημων βασιλέων της Αιγύπτου στον σύγχρονο κόσμο."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -945,
      era: {
        en: "Twenty-second Dynasty",
        el: "Εικοστή Δεύτερη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Shoshenq I and the Libyan dynasty",
            el: "Ο Σεσόγχις Α΄ και η λιβυκή δυναστεία"
          },
          description: {
            en: "Shoshenq I, of Libyan descent, seizes the throne and briefly reunites Egypt, then campaigns into Canaan in a raid echoed in the Hebrew Bible.",
            el: "Ο Σεσόγχις Α΄, λιβυκής καταγωγής, καταλαμβάνει τον θρόνο και επανενώνει για λίγο την Αίγυπτο, και κατόπιν εκστρατεύει στη Χαναάν σε μια επιδρομή που απηχείται στην Εβραϊκή Βίβλο."
          },
          extendedDescription: {
            en: "Descended from Libyan Meshwesh chieftains long settled in Egypt, Shoshenq I founded the Twenty-second Dynasty at Bubastis and reasserted central control, installing his own son as high priest of Amun. His campaign through Palestine, listed on a triumphal relief at Karnak, is widely identified with the biblical Pharaoh Shishak who plundered the Temple of Jerusalem. His reign was the last sustained moment of Egyptian unity and power for centuries.",
            el: "Καταγόμενος από λίβυους οπλαρχηγούς Μεσγουές εγκατεστημένους από καιρό στην Αίγυπτο, ο Σεσόγχις Α΄ ίδρυσε την Εικοστή Δεύτερη Δυναστεία στη Βούβαστη και επανεπέβαλε τον κεντρικό έλεγχο, τοποθετώντας τον δικό του γιο ως αρχιερέα του Άμμωνα. Η εκστρατεία του στην Παλαιστίνη, καταγεγραμμένη σε θριαμβικό ανάγλυφο στο Καρνάκ, ταυτίζεται ευρέως με τον βιβλικό Φαραώ Σισάκ που λεηλάτησε τον Ναό της Ιερουσαλήμ. Η βασιλεία του ήταν η τελευταία παρατεταμένη στιγμή αιγυπτιακής ενότητας και ισχύος για αιώνες."
          },
          category: "military"
        }
      ]
    },
    {
      year: -818,
      era: {
        en: "An Age of Fragmentation",
        el: "Μια Εποχή Κατακερματισμού"
      },
      events: [
        {
          title: {
            en: "Rival kings and the splintering of power",
            el: "Αντίπαλοι βασιλείς και ο κατακερματισμός της εξουσίας"
          },
          description: {
            en: "Egypt fractures into a patchwork of competing dynasties and local rulers, with the Twenty-third Dynasty rising alongside the Twenty-second and chiefs governing the Delta.",
            el: "Η Αίγυπτος κατακερματίζεται σε ένα μωσαϊκό ανταγωνιστικών δυναστειών και τοπικών ηγεμόνων, με την Εικοστή Τρίτη Δυναστεία να αναδύεται παράλληλα με την Εικοστή Δεύτερη και αρχηγούς να διοικούν το Δέλτα."
          },
          extendedDescription: {
            en: "By the later ninth and eighth centuries Egypt had no single ruler. The Twenty-third Dynasty emerged as a rival line, while Libyan 'great chiefs of the Ma' and local princes carved out semi-independent territories across the Delta and Middle Egypt. This bewildering political fragmentation, with several kings reigning at once, left Egypt weak and ripe for intervention from beyond its borders — from the south, where a new power was rising in Nubia.",
            el: "Έως τον ύστερο ένατο και τον όγδοο αιώνα η Αίγυπτος δεν είχε ενιαίο ηγεμόνα. Η Εικοστή Τρίτη Δυναστεία αναδύθηκε ως αντίπαλη γενιά, ενώ λίβυοι «μεγάλοι αρχηγοί των Μα» και τοπικοί ηγεμόνες σχημάτισαν ημιανεξάρτητες επικράτειες σε όλο το Δέλτα και τη Μέση Αίγυπτο. Αυτός ο σαστιστικός πολιτικός κατακερματισμός, με αρκετούς βασιλείς να βασιλεύουν ταυτόχρονα, άφησε την Αίγυπτο αδύναμη και ώριμη για επέμβαση από πέρα από τα σύνορά της — από τον νότο, όπου μια νέα δύναμη ανέβαινε στη Νουβία."
          },
          category: "political"
        }
      ]
    },
    {
      year: -728,
      era: {
        en: "Twenty-fifth Dynasty",
        el: "Εικοστή Πέμπτη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "The Kushite pharaohs conquer Egypt",
            el: "Οι Κουσίτες φαραώ κατακτούν την Αίγυπτο"
          },
          description: {
            en: "Piye, king of Kush, marches north from Napata and subdues the warring rulers of Egypt, founding the Nubian Twenty-fifth Dynasty over the whole Nile valley.",
            el: "Ο Πίγε, βασιλιάς του Κους, προελαύνει βόρεια από τη Ναπάτα και υποτάσσει τους αλληλομαχόμενους ηγεμόνες της Αιγύπτου, ιδρύοντας τη νουβική Εικοστή Πέμπτη Δυναστεία επί ολόκληρης της κοιλάδας του Νείλου."
          },
          extendedDescription: {
            en: "From their capital at Napata below the Fourth Cataract, the kings of Kush had embraced Egyptian religion and the cult of Amun. Piye (Piankhi) launched a great campaign recorded on his Victory Stele, taking Memphis and receiving the submission of the Delta princes. His successors — Shabaka, Shabataka, Taharqa, and Tanutamun — ruled a reunified Egypt and Nubia, presenting themselves as restorers of pharaonic tradition and reviving Old Kingdom art, even building small pyramids for their burials in Nubia.",
            el: "Από την πρωτεύουσά τους Ναπάτα κάτω από τον Τέταρτο Καταρράκτη, οι βασιλείς του Κους είχαν ασπαστεί την αιγυπτιακή θρησκεία και τη λατρεία του Άμμωνα. Ο Πίγε (Πιάνχι) εξαπέλυσε μια μεγάλη εκστρατεία καταγεγραμμένη στη Στήλη της Νίκης του, καταλαμβάνοντας τη Μέμφιδα και δεχόμενος την υποταγή των ηγεμόνων του Δέλτα. Οι διάδοχοί του — ο Σαμπάκα, ο Σαμπατάκα, ο Τααρκά και ο Τανουταμών — κυβέρνησαν μια επανενωμένη Αίγυπτο και Νουβία, παρουσιαζόμενοι ως αναστηλωτές της φαραωνικής παράδοσης και αναβιώνοντας την τέχνη του Παλαιού Βασιλείου, χτίζοντας ακόμη και μικρές πυραμίδες για τις ταφές τους στη Νουβία."
          },
          category: "political"
        }
      ]
    },
    {
      year: -690,
      era: {
        en: "Twenty-fifth Dynasty",
        el: "Εικοστή Πέμπτη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Taharqa and the height of Kushite Egypt",
            el: "Ο Τααρκά και το απόγειο της Κουσιτικής Αιγύπτου"
          },
          description: {
            en: "The Kushite pharaoh Taharqa presides over a cultural revival and an ambitious building programme, but soon faces the rising might of the Assyrian empire.",
            el: "Ο Κουσίτης φαραώ Τααρκά προεδρεύει μιας πολιτιστικής αναγέννησης και ενός φιλόδοξου οικοδομικού προγράμματος, αλλά σύντομα αντιμετωπίζει την ανερχόμενη ισχύ της ασσυριακής αυτοκρατορίας."
          },
          extendedDescription: {
            en: "Taharqa's long reign saw monuments raised the length of the Nile, from Karnak, where he added a great colonnade, to the temples of Nubia. He intervened in the politics of the Levant, supporting states resisting Assyria — a policy that drew the wrath of the kings of Nineveh. The Hebrew Bible remembers him as 'Tirhakah, king of Cush.' His Egypt was prosperous and pious, but it stood directly in the path of the most powerful military machine of the age.",
            el: "Η μακρά βασιλεία του Τααρκά είδε μνημεία να υψώνονται σε όλο το μήκος του Νείλου, από το Καρνάκ, όπου πρόσθεσε μια μεγάλη κιονοστοιχία, ως τους ναούς της Νουβίας. Επενέβη στην πολιτική του Λεβάντε, υποστηρίζοντας κράτη που αντιστέκονταν στην Ασσυρία — πολιτική που προκάλεσε την οργή των βασιλέων της Νινευή. Η Εβραϊκή Βίβλος τον θυμάται ως «Θαρακά, βασιλιά του Κους». Η Αίγυπτός του ήταν εύπορη και ευσεβής, αλλά βρισκόταν ακριβώς στον δρόμο της ισχυρότερης πολεμικής μηχανής της εποχής."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -671,
      era: {
        en: "Assyrian Invasions",
        el: "Ασσυριακές Εισβολές"
      },
      events: [
        {
          title: {
            en: "The Assyrians sack Memphis and Thebes",
            el: "Οι Ασσύριοι λεηλατούν τη Μέμφιδα και τη Θήβα"
          },
          description: {
            en: "The Assyrian kings Esarhaddon and Ashurbanipal invade Egypt, drive out the Kushite pharaohs, and in 663 BCE sack the holy city of Thebes.",
            el: "Οι Ασσύριοι βασιλείς Ασαρχαδδών και Ασσουρμπανιπάλ εισβάλλουν στην Αίγυπτο, εκδιώκουν τους Κουσίτες φαραώ και το 663 π.Χ. λεηλατούν την ιερή πόλη της Θήβας."
          },
          extendedDescription: {
            en: "In 671 BCE Esarhaddon captured Memphis and made Egypt a tributary, installing local vassals. When Taharqa and later Tanutamun resisted, Ashurbanipal returned and in 663 BCE stormed and plundered Thebes — a catastrophe so shocking it was still recalled a generation later by the prophet Nahum. The Assyrians could not hold distant Egypt directly, so they ruled through Egyptian client-princes, chief among them the family of Necho of Sais in the western Delta.",
            el: "Το 671 π.Χ. ο Ασαρχαδδών κατέλαβε τη Μέμφιδα και κατέστησε την Αίγυπτο υποτελή, εγκαθιστώντας τοπικούς υποτελείς. Όταν ο Τααρκά και αργότερα ο Τανουταμών αντιστάθηκαν, ο Ασσουρμπανιπάλ επέστρεψε και το 663 π.Χ. κατέλαβε και λεηλάτησε τη Θήβα — μια καταστροφή τόσο συγκλονιστική ώστε τη θυμόταν ακόμη μια γενιά αργότερα ο προφήτης Ναούμ. Οι Ασσύριοι δεν μπορούσαν να κρατήσουν άμεσα τη μακρινή Αίγυπτο, οπότε κυβέρνησαν μέσω αιγυπτίων υποτελών ηγεμόνων, με πρώτη την οικογένεια του Νεχώ της Σάιδας στο δυτικό Δέλτα."
          },
          category: "military"
        }
      ]
    },
    {
      year: -664,
      era: {
        en: "Toward the Saite Revival",
        el: "Προς τη Σαϊτική Αναγέννηση"
      },
      events: [
        {
          title: {
            en: "Psamtik I reunites Egypt under Sais",
            el: "Ο Ψαμμήτιχος Α΄ επανενώνει την Αίγυπτο υπό τη Σάιδα"
          },
          description: {
            en: "Psamtik I of Sais throws off Assyrian overlordship and reunites Egypt, founding the Twenty-sixth Dynasty and ending the Third Intermediate Period.",
            el: "Ο Ψαμμήτιχος Α΄ της Σάιδας αποτινάσσει την ασσυριακή επικυριαρχία και επανενώνει την Αίγυπτο, ιδρύοντας την Εικοστή Έκτη Δυναστεία και τερματίζοντας την Τρίτη Ενδιάμεση Περίοδο."
          },
          extendedDescription: {
            en: "Installed as a vassal by the Assyrians, Psamtik I skilfully exploited their withdrawal, employing Greek and Carian mercenaries to bring the Delta princes and Thebes under his sole authority — sealed by having his daughter Nitocris adopted as God's Wife of Amun. His reign inaugurated the Saite renaissance, an era of archaising art, renewed prosperity, and openness to Greek traders at Naucratis, reuniting Egypt and opening the Late Period.",
            el: "Εγκατεστημένος ως υποτελής από τους Ασσυρίους, ο Ψαμμήτιχος Α΄ εκμεταλλεύτηκε επιδέξια την αποχώρησή τους, χρησιμοποιώντας Έλληνες και Κάρες μισθοφόρους για να φέρει τους ηγεμόνες του Δέλτα και τη Θήβα υπό τη μοναδική εξουσία του — σφραγισμένη με την υιοθεσία της κόρης του Νιτώκριδος ως Θεϊκής Συζύγου του Άμμωνα. Η βασιλεία του εγκαινίασε τη σαϊτική αναγέννηση, μια εποχή αρχαΐζουσας τέχνης, ανανεωμένης ευημερίας και ανοίγματος στους Έλληνες εμπόρους στη Ναύκρατη, επανενώνοντας την Αίγυπτο και ανοίγοντας την Ύστερη Περίοδο."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
