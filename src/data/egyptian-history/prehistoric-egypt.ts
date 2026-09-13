/** Prehistoric Egypt — Προϊστορική Αίγυπτος · Egyptian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const PREHISTORIC_EGYPT = {
  id: "prehistoric-egypt" as const,
  label: {
    en: "Prehistoric Egypt",
    el: "Προϊστορική Αίγυπτος"
  },
  supertitle: {
    en: "Kemet",
    el: "Κεμέτ"
  },
  title: {
    en: "Prehistoric Egypt",
    el: "Προϊστορική Αίγυπτος"
  },
  subtitle: {
    en: "From the Acheulean hunters of the Nile valley and the cemetery of Jebel Sahaba through the cattle herders of Nabta Playa, the farming villages of the Faiyum and Merimde, and the Badarian and Naqada cultures, to the dawn of writing at Abydos and Narmer's union of the Two Lands around 3100 BCE. Slide across the millennia to read the major events that shaped Egypt before the pharaohs.",
    el: "Από τους αχελαίους κυνηγούς της κοιλάδας του Νείλου και το νεκροταφείο του Τζεμπέλ Σαχάμπα, μέσα από τους βοοτρόφους της Νάμπτα Πλάγια, τα γεωργικά χωριά του Φαγιούμ και της Μερίμντε, και τους πολιτισμούς των Μπανταρίων και της Νακάντα, ως την αυγή της γραφής στην Άβυδο και την ένωση των Δύο Χωρών από τον Νάρμερ γύρω στο 3100 π.Χ. Μετακινηθείτε ανάμεσα στις χιλιετίες για να διαβάσετε τα γεγονότα που διαμόρφωσαν την Αίγυπτο πριν από τους φαραώ."
  },
  menuDescription: {
    en: "Before the pharaohs: Nile hunters, Nabta Playa, and the cultures that became Egypt.",
    el: "Πριν από τους φαραώ: κυνηγοί του Νείλου, η Νάμπτα Πλάγια κι οι πολιτισμοί που έγιναν Αίγυπτος."
  },
  footerLabel: {
    en: "Prehistoric Egypt · before c. 3100 BCE",
    el: "Προϊστορική Αίγυπτος · πριν από περ. 3100 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Prehistoric Egypt",
    el: "Προϊστορική Αίγυπτος"
  },
  theme: THEMES.amber,
  timeline: [
    {
      year: -400000,
      era: {
        en: "Lower Palaeolithic",
        el: "Κατώτερη Παλαιολιθική"
      },
      events: [
        {
          title: {
            en: "Acheulean hunters of the Nile valley",
            el: "Αχελαίοι κυνηγοί της κοιλάδας του Νείλου"
          },
          description: {
            en: "Bands of early humans range along the terraces of the Nile and the springs of the Western Desert, leaving behind the symmetrical Acheulean hand-axes that mark the oldest human presence in Egypt.",
            el: "Ομάδες πρώιμων ανθρώπων περιπλανώνται κατά μήκος των αναβαθμίδων του Νείλου και των πηγών της Δυτικής Ερήμου, αφήνοντας πίσω τις συμμετρικές αχελαίες χειροπελέκεις που σηματοδοτούν την παλαιότερη ανθρώπινη παρουσία στην Αίγυπτο."
          },
          extendedDescription: {
            en: "Sites such as Arkin and the gravels of the Theban region and Kharga Oasis have yielded thousands of bifacial tools shaped by Homo erectus and early Homo sapiens. During the wetter phases of the Pleistocene the Sahara was a savannah crossed by lakes and rivers, and the Nile corridor served as one of the great highways out of Africa for successive waves of hominins.",
            el: "Θέσεις όπως το Αρκίν και τα χαλίκια της περιοχής των Θηβών και της όασης Χάργκα έχουν αποδώσει χιλιάδες αμφιπρόσωπα εργαλεία λαξευμένα από τον Homo erectus και τους πρώιμους Homo sapiens. Κατά τις υγρότερες φάσεις του Πλειστοκαίνου η Σαχάρα ήταν σαβάνα διασχιζόμενη από λίμνες και ποτάμια, και ο διάδρομος του Νείλου αποτέλεσε έναν από τους μεγάλους δρόμους εξόδου από την Αφρική για διαδοχικά κύματα ανθρωποειδών."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -13400,
      era: {
        en: "Late Palaeolithic",
        el: "Ύστερη Παλαιολιθική"
      },
      events: [
        {
          title: {
            en: "The cemetery of Jebel Sahaba",
            el: "Το νεκροταφείο του Τζεμπέλ Σαχάμπα"
          },
          description: {
            en: "On the east bank of the Nile in Nubia, hunter-gatherers bury their dead in an organised cemetery; many of the skeletons bear arrowhead wounds, evidence of some of the earliest known human conflict.",
            el: "Στην ανατολική όχθη του Νείλου στη Νουβία, κυνηγοί-τροφοσυλλέκτες θάβουν τους νεκρούς τους σε οργανωμένο νεκροταφείο· πολλοί από τους σκελετούς φέρουν τραύματα από αιχμές βελών, μαρτυρία μιας από τις παλαιότερες γνωστές ανθρώπινες συγκρούσεις."
          },
          extendedDescription: {
            en: "Excavated in the 1960s during the Aswan salvage campaigns, Jebel Sahaba (Site 117) holds dozens of burials of the Qadan culture. Stone projectile points embedded in the bones and recent re-analysis of healed and unhealed injuries suggest recurring violence, perhaps driven by competition for shrinking resources as the climate dried at the end of the last Ice Age.",
            el: "Ανασκαμμένο τη δεκαετία του 1960 κατά τις εκστρατείες διάσωσης του Ασουάν, το Τζεμπέλ Σαχάμπα (Θέση 117) περιέχει δεκάδες ταφές του πολιτισμού των Καντάν. Λίθινες αιχμές βλημάτων σφηνωμένες στα οστά και η πρόσφατη επανεξέταση επουλωμένων και μη τραυμάτων υποδηλώνουν επαναλαμβανόμενη βία, ίσως λόγω ανταγωνισμού για τους συρρικνούμενους πόρους καθώς το κλίμα ξήραινε στο τέλος της τελευταίας Εποχής των Παγετώνων."
          },
          category: "military"
        }
      ]
    },
    {
      year: -7000,
      era: {
        en: "Saharan Neolithic",
        el: "Σαχάρια Νεολιθική"
      },
      events: [
        {
          title: {
            en: "Cattle herders of Nabta Playa",
            el: "Βοοτρόφοι της Νάμπτα Πλάγια"
          },
          description: {
            en: "In a seasonal lake basin of the Western Desert, pastoral communities herd cattle, dig deep wells, and store grain, building one of the earliest organised societies in north-eastern Africa.",
            el: "Σε μια εποχιακή λεκάνη λίμνης της Δυτικής Ερήμου, ποιμενικές κοινότητες εκτρέφουν βοοειδή, σκάβουν βαθιά πηγάδια και αποθηκεύουν σιτηρά, δημιουργώντας μία από τις πρωιμότερες οργανωμένες κοινωνίες της βορειοανατολικής Αφρικής."
          },
          extendedDescription: {
            en: "During a humid phase the desert south-west of Abu Simbel supported herds of cattle that may have been domesticated locally. By around 4800 BCE the people of Nabta Playa raised a 'calendar circle' of standing stones and aligned megaliths — among the world's oldest astronomical monuments — and buried cattle in stone-roofed tumuli, foreshadowing the cattle cults and stellar religion of dynastic Egypt.",
            el: "Κατά μια υγρή φάση, η έρημος νοτιοδυτικά του Άμπου Σιμπέλ συντηρούσε κοπάδια βοοειδών που ίσως εξημερώθηκαν επιτόπου. Γύρω στο 4800 π.Χ. οι άνθρωποι της Νάμπτα Πλάγια ύψωσαν έναν «ημερολογιακό κύκλο» όρθιων λίθων και ευθυγραμμισμένων μεγαλίθων — από τα αρχαιότερα αστρονομικά μνημεία του κόσμου — και έθαψαν βοοειδή σε λιθόστεγους τύμβους, προοιωνίζοντας τις λατρείες των ταύρων και την αστρική θρησκεία της δυναστικής Αιγύπτου."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -5500,
      era: {
        en: "Neolithic",
        el: "Νεολιθική"
      },
      events: [
        {
          title: {
            en: "Farming villages of the Faiyum and Merimde",
            el: "Γεωργικά χωριά του Φαγιούμ και της Μερίμντε"
          },
          description: {
            en: "As the Sahara dries, communities settle along the Nile and the Faiyum lake, cultivating wheat and barley, herding sheep and goats, and weaving the first Egyptian villages from reed and mud.",
            el: "Καθώς η Σαχάρα ξηραίνεται, κοινότητες εγκαθίστανται κατά μήκος του Νείλου και της λίμνης του Φαγιούμ, καλλιεργώντας σιτάρι και κριθάρι, εκτρέφοντας πρόβατα και κατσίκια, και πλέκοντας τα πρώτα αιγυπτιακά χωριά από καλάμι και λάσπη."
          },
          extendedDescription: {
            en: "The Faiyum A culture and the large settlement of Merimde Beni Salama in the western Delta mark the arrival of Near Eastern domesticates in the Nile valley. Merimde, occupied for centuries, covered some 18 hectares and preserved granaries, hearths, and the earliest known Egyptian human face modelled in clay — the foundations of a settled, agricultural Egypt.",
            el: "Ο πολιτισμός Φαγιούμ Α και ο μεγάλος οικισμός Μερίμντε Μπένι Σαλάμα στο δυτικό Δέλτα σηματοδοτούν την άφιξη των εξημερωμένων ειδών της Εγγύς Ανατολής στην κοιλάδα του Νείλου. Η Μερίμντε, κατοικημένη για αιώνες, κάλυπτε περίπου 18 εκτάρια και διατήρησε σιταποθήκες, εστίες και το παλαιότερο γνωστό αιγυπτιακό ανθρώπινο πρόσωπο πλασμένο σε πηλό — τα θεμέλια μιας μόνιμα εγκατεστημένης, αγροτικής Αιγύπτου."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -4400,
      era: {
        en: "Predynastic Egypt",
        el: "Προδυναστική Αίγυπτος"
      },
      events: [
        {
          title: {
            en: "The Badarian culture of Upper Egypt",
            el: "Ο πολιτισμός των Μπανταρίων στην Άνω Αίγυπτο"
          },
          description: {
            en: "Around El-Badari in Upper Egypt, a refined farming culture produces thin rippled pottery, ivory and slate ornaments, and carefully arranged burials that hint at growing belief in an afterlife.",
            el: "Γύρω από το Ελ-Μπανταρί στην Άνω Αίγυπτο, ένας εκλεπτυσμένος γεωργικός πολιτισμός παράγει λεπτή κυματιστή κεραμική, στολίδια από ελεφαντόδοντο και σχιστόλιθο, και προσεκτικά διευθετημένες ταφές που υπαινίσσονται μια αυξανόμενη πίστη σε μια μετά θάνατον ζωή."
          },
          extendedDescription: {
            en: "The Badarians buried their dead in pits on the desert edge, wrapped in matting and accompanied by grave goods, with bodies laid facing west — a practice central to later Egyptian religion. Their distinctive black-topped, burnished ceramics and slate cosmetic palettes for grinding malachite eye-paint anticipate the material culture of the Naqada periods that followed.",
            el: "Οι Μπαντάριοι έθαβαν τους νεκρούς τους σε λάκκους στο όριο της ερήμου, τυλιγμένους σε ψάθες και συνοδευόμενους από κτερίσματα, με τα σώματα στραμμένα προς τη δύση — πρακτική κεντρική στη μεταγενέστερη αιγυπτιακή θρησκεία. Η χαρακτηριστική μαυρόστομη, στιλβωμένη κεραμική τους και οι σχιστολιθικές καλλυντικές παλέτες για το τρίψιμο του μαλαχίτη για μακιγιάζ ματιών προμηνύουν τον υλικό πολιτισμό των περιόδων Νακάντα που ακολούθησαν."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -4000,
      era: {
        en: "Naqada I (Amratian)",
        el: "Νακάντα Ι (Αμρατιανή)"
      },
      events: [
        {
          title: {
            en: "Rise of the Naqada culture",
            el: "Άνοδος του πολιτισμού της Νακάντα"
          },
          description: {
            en: "Centred on the great Upper Egyptian towns of Naqada, Hierakonpolis, and Abydos, the Amratian culture spreads a shared style of red-painted pottery, figurines, and decorated palettes along the Nile.",
            el: "Με επίκεντρο τις μεγάλες πόλεις της Άνω Αιγύπτου, τη Νακάντα, την Ιερακόνπολη και την Άβυδο, ο Αμρατιανός πολιτισμός διαδίδει ένα κοινό ύφος ερυθρόχρωμης κεραμικής, ειδωλίων και διακοσμημένων παλετών κατά μήκος του Νείλου."
          },
          extendedDescription: {
            en: "Named after the type-site of Naqada excavated by Flinders Petrie, the Amratian phase saw villages grow into towns with craft specialisation in pottery, stone vessels, and flint-working. Trade in gold, copper, and exotic stones knit the Nile valley together, while richer graves begin to reveal an emerging social hierarchy.",
            el: "Ονομασμένη από την ομώνυμη θέση της Νακάντα που ανέσκαψε ο Φλίντερς Πέτρι, η Αμρατιανή φάση είδε χωριά να εξελίσσονται σε πόλεις με εξειδίκευση στη βιοτεχνία κεραμικής, λίθινων αγγείων και κατεργασίας πυριτόλιθου. Το εμπόριο χρυσού, χαλκού και εξωτικών λίθων ένωσε την κοιλάδα του Νείλου, ενώ οι πλουσιότερες ταφές αρχίζουν να αποκαλύπτουν μια αναδυόμενη κοινωνική ιεραρχία."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -3500,
      era: {
        en: "Naqada II (Gerzean)",
        el: "Νακάντα ΙΙ (Γερζεανή)"
      },
      events: [
        {
          title: {
            en: "Towns, trade, and the first kings",
            el: "Πόλεις, εμπόριο και οι πρώτοι βασιλείς"
          },
          description: {
            en: "Hierakonpolis swells into a true town with a temple and elite cemeteries, long-distance trade reaches Mesopotamia and the Levant, and powerful chiefs begin to fashion the symbols of Egyptian kingship.",
            el: "Η Ιερακόνπολη διογκώνεται σε πραγματική πόλη με ναό και νεκροταφεία της ελίτ, το μακρινό εμπόριο φτάνει στη Μεσοποταμία και τον Λεβάντε, και ισχυροί αρχηγοί αρχίζουν να διαμορφώνουν τα σύμβολα της αιγυπτιακής βασιλείας."
          },
          extendedDescription: {
            en: "The Gerzean period brought a more uniform material culture across Upper and Lower Egypt, with mass-produced wavy-handled jars and pottery painted with boats, animals, and standards. At Hierakonpolis the painted Tomb 100 and a colossal cemetery point to rulers wielding ritual and military power; imported Mesopotamian motifs such as confronted animals and the rosette enter Egyptian art, foreshadowing a unified kingship.",
            el: "Η Γερζεανή περίοδος έφερε έναν πιο ομοιόμορφο υλικό πολιτισμό σε Άνω και Κάτω Αίγυπτο, με μαζικά παραγόμενα αγγεία με κυματιστές λαβές και κεραμική ζωγραφισμένη με πλοία, ζώα και λάβαρα. Στην Ιερακόνπολη ο ζωγραφισμένος Τάφος 100 και ένα κολοσσιαίο νεκροταφείο υποδεικνύουν ηγεμόνες που ασκούσαν τελετουργική και στρατιωτική εξουσία· εισαγόμενα μεσοποταμιακά μοτίβα, όπως τα αντικριστά ζώα και ο ρόδακας, εισέρχονται στην αιγυπτιακή τέχνη, προμηνύοντας μια ενοποιημένη βασιλεία."
          },
          category: "political"
        }
      ]
    },
    {
      year: -3250,
      era: {
        en: "Naqada III (Dynasty 0)",
        el: "Νακάντα ΙΙΙ (Δυναστεία 0)"
      },
      events: [
        {
          title: {
            en: "The dawn of writing at Abydos",
            el: "Η αυγή της γραφής στην Άβυδο"
          },
          description: {
            en: "In the royal tomb U-j at Abydos, bone and ivory tags incised with the earliest Egyptian hieroglyphic signs record goods and place-names, marking the birth of writing in the Nile valley.",
            el: "Στον βασιλικό τάφο U-j στην Άβυδο, πινακίδες από οστό και ελεφαντόδοντο χαραγμένες με τα παλαιότερα αιγυπτιακά ιερογλυφικά σημεία καταγράφουν αγαθά και τοπωνύμια, σηματοδοτώντας τη γέννηση της γραφής στην κοιλάδα του Νείλου."
          },
          extendedDescription: {
            en: "Tomb U-j, dated around 3250 BCE, belonged to a powerful predynastic ruler buried with hundreds of imported wine jars. Its small labels, bearing some of the world's oldest known writing, suggest that Egyptian script arose to administer royal estates. The Naqada III phase, often called Dynasty 0, saw the consolidation of competing Upper Egyptian polities under a line of kings — Scorpion, Ka, and others — who paved the way for unification.",
            el: "Ο τάφος U-j, χρονολογημένος γύρω στο 3250 π.Χ., ανήκε σε ισχυρό προδυναστικό ηγεμόνα θαμμένο με εκατοντάδες εισαγόμενα αγγεία κρασιού. Οι μικρές πινακίδες του, που φέρουν μερικά από τα αρχαιότερα γνωστά δείγματα γραφής στον κόσμο, υποδηλώνουν ότι η αιγυπτιακή γραφή προέκυψε για τη διαχείριση των βασιλικών κτημάτων. Η φάση Νακάντα ΙΙΙ, που συχνά αποκαλείται Δυναστεία 0, είδε την εδραίωση ανταγωνιστικών πολιτειών της Άνω Αιγύπτου υπό μια σειρά βασιλέων — του Σκορπιού, του Κα και άλλων — που προετοίμασαν το έδαφος για την ενοποίηση."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -3100,
      era: {
        en: "Unification",
        el: "Ενοποίηση"
      },
      events: [
        {
          title: {
            en: "Narmer and the union of the Two Lands",
            el: "Ο Νάρμερ και η ένωση των Δύο Χωρών"
          },
          description: {
            en: "King Narmer of Upper Egypt unites the Nile valley and Delta into a single kingdom; the great ceremonial palette from Hierakonpolis shows him wearing the crowns of both Upper and Lower Egypt.",
            el: "Ο βασιλιάς Νάρμερ της Άνω Αιγύπτου ενώνει την κοιλάδα του Νείλου και το Δέλτα σε ένα ενιαίο βασίλειο· η μεγάλη τελετουργική παλέτα από την Ιερακόνπολη τον απεικονίζει να φορά τα στέμματα τόσο της Άνω όσο και της Κάτω Αιγύπτου."
          },
          extendedDescription: {
            en: "The Narmer Palette, carved from siltstone around 3100 BCE, is often read as a monument to the unification of Egypt, depicting the king smiting his enemies and parading with his standards. Whether it records a single conquest or a longer process, the reign of Narmer — possibly the Menes of later tradition — closes the prehistoric age and inaugurates the First Dynasty, the beginning of more than three thousand years of pharaonic civilisation.",
            el: "Η Παλέτα του Νάρμερ, λαξευμένη από ιλυόλιθο γύρω στο 3100 π.Χ., ερμηνεύεται συχνά ως μνημείο της ενοποίησης της Αιγύπτου, απεικονίζοντας τον βασιλιά να πλήττει τους εχθρούς του και να παρελαύνει με τα λάβαρά του. Είτε καταγράφει μια μεμονωμένη κατάκτηση είτε μια μακρύτερη διαδικασία, η βασιλεία του Νάρμερ — πιθανώς του Μηνός της μεταγενέστερης παράδοσης — κλείνει την προϊστορική εποχή και εγκαινιάζει την Πρώτη Δυναστεία, την αρχή περισσότερων από τριών χιλιάδων ετών φαραωνικού πολιτισμού."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
