/** Canaan & the Bronze Age — Χαναάν & η Εποχή του Χαλκού · Ancient Levant */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const CANAAN_BRONZE_AGE = {
  id: "canaan-bronze-age" as const,
  label: {
    en: "Canaan & the Bronze Age",
    el: "Χαναάν & η Εποχή του Χαλκού"
  },
  supertitle: {
    en: "The Ancient Levant",
    el: "Ο Αρχαίος Λεβάντες"
  },
  title: {
    en: "Canaan & the Bronze Age",
    el: "Χαναάν & η Εποχή του Χαλκού"
  },
  subtitle: {
    en: "Between Egypt and Mesopotamia, along the eastern shore of the Mediterranean, lay Canaan — a land of walled towns, cedar forests, and seafaring merchants. Here Semitic peoples built the first alphabet, worshipped Baal and El, and lived under the shadow of the pharaohs, until the great Bronze Age world collapsed around them. Slide across the millennia of Canaan before Israel.",
    el: "Ανάμεσα στην Αίγυπτο και τη Μεσοποταμία, κατά μήκος της ανατολικής ακτής της Μεσογείου, βρισκόταν η Χαναάν — μια γη οχυρωμένων πόλεων, δασών κέδρου και θαλασσοπόρων εμπόρων. Εδώ σημιτικοί λαοί έφτιαξαν το πρώτο αλφάβητο, λάτρεψαν τον Βάαλ και τον Ελ, και έζησαν υπό τη σκιά των φαραώ, ώσπου ο μεγάλος κόσμος της Εποχής του Χαλκού κατέρρευσε γύρω τους. Μετακινηθείτε στις χιλιετίες της Χαναάν πριν από το Ισραήλ."
  },
  menuDescription: {
    en: "The Canaanite city-states, the first alphabet, and the gods of the Levant.",
    el: "Οι χαναναϊκές πόλεις-κράτη, το πρώτο αλφάβητο και οι θεοί του Λεβάντε."
  },
  footerLabel: {
    en: "Canaan & the Bronze Age · 3000-1200 BC",
    el: "Χαναάν & η Εποχή του Χαλκού · 3000-1200 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Canaan & the Bronze Age",
    el: "Χαναάν & η Εποχή του Χαλκού"
  },
  theme: THEMES.bronze,
  timeline: [
    {
      year: -3000,
      label: "c. 3000 BC",
      era: {
        en: "Early Bronze Age",
        el: "Πρώιμη Εποχή του Χαλκού"
      },
      events: [
        {
          title: {
            en: "The first cities of Canaan",
            el: "Οι πρώτες πόλεις της Χαναάν"
          },
          description: {
            en: "Walled towns rise across Canaan, from Jericho to Megiddo, trading with Egypt and the wider Near East.",
            el: "Οχυρωμένες πόλεις υψώνονται σε όλη τη Χαναάν, από την Ιεριχώ ως το Μεγιδδώ, εμπορευόμενες με την Αίγυπτο και την ευρύτερη Εγγύς Ανατολή."
          },
          extendedDescription: {
            en: "Canaan was never a single kingdom but a patchwork of small city-states on the land bridge between the great powers. Jericho, one of the oldest walled towns on earth, and hilltop centres like Megiddo guarding the coastal road, grew rich on trade and farming, setting the pattern of independent Canaanite cities that lasted two thousand years.",
            el: "Η Χαναάν δεν υπήρξε ποτέ ένα ενιαίο βασίλειο αλλά ένα μωσαϊκό μικρών πόλεων-κρατών στη χερσαία γέφυρα ανάμεσα στις μεγάλες δυνάμεις. Η Ιεριχώ, μία από τις αρχαιότερες οχυρωμένες πόλεις της γης, και λοφώδη κέντρα όπως το Μεγιδδώ που φύλαγε τον παραλιακό δρόμο, πλούτισαν από το εμπόριο και τη γεωργία, καθιερώνοντας το μοτίβο των ανεξάρτητων χαναναϊκών πόλεων που κράτησε δύο χιλιετίες."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -2400,
      label: "c. 2400 BC",
      era: {
        en: "Early Bronze Age",
        el: "Πρώιμη Εποχή του Χαλκού"
      },
      events: [
        {
          title: {
            en: "Ebla, archive of the north",
            el: "Η Έμπλα, αρχείο του βορρά"
          },
          description: {
            en: "The Syrian city of Ebla flourishes as a commercial power, leaving thousands of tablets in an early Semitic tongue.",
            el: "Η συριακή πόλη Έμπλα ακμάζει ως εμπορική δύναμη, αφήνοντας χιλιάδες πινακίδες σε μια πρώιμη σημιτική γλώσσα."
          },
          extendedDescription: {
            en: "Discovered in the 1970s, the palace archive of Ebla revealed a wealthy northern Levantine kingdom trading in textiles and metals from Egypt to Mesopotamia. Its tablets, written in a Semitic language close to later Canaanite, show a literate, cosmopolitan Levant a thousand years before Israel, before the city was destroyed by an eastern conqueror.",
            el: "Ανακαλυμμένο τη δεκαετία του 1970, το ανακτορικό αρχείο της Έμπλα αποκάλυψε ένα πλούσιο βόρειο λεβαντινό βασίλειο που εμπορευόταν υφάσματα και μέταλλα από την Αίγυπτο ως τη Μεσοποταμία. Οι πινακίδες του, γραμμένες σε σημιτική γλώσσα κοντινή στη μεταγενέστερη χαναναϊκή, δείχνουν έναν εγγράμματο, κοσμοπολίτικο Λεβάντε χίλια χρόνια πριν από το Ισραήλ, προτού η πόλη καταστραφεί από έναν ανατολικό κατακτητή."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -1900,
      label: "c. 1900 BC",
      era: {
        en: "Middle Bronze Age",
        el: "Μέση Εποχή του Χαλκού"
      },
      events: [
        {
          title: {
            en: "Byblos and the cedars",
            el: "Η Βύβλος και οι κέδροι"
          },
          description: {
            en: "The port of Byblos grows rich shipping Lebanese cedar to timber-poor Egypt, binding the two worlds together.",
            el: "Το λιμάνι της Βύβλου πλουτίζει μεταφέροντας λιβανέζικο κέδρο στην φτωχή σε ξυλεία Αίγυπτο, δένοντας τους δύο κόσμους μεταξύ τους."
          },
          extendedDescription: {
            en: "For millennia Byblos was Egypt's chief supplier of cedar wood, prized for temples, ships, and coffins, and in return absorbed Egyptian culture and gods. So central was Byblos to the papyrus trade that the Greeks took their word for book — biblion, the root of 'Bible' — from its name. The coastal cities looked always to the sea.",
            el: "Επί χιλιετίες η Βύβλος ήταν ο κύριος προμηθευτής κέδρου της Αιγύπτου, πολύτιμου για ναούς, πλοία και σαρκοφάγους, και σε αντάλλαγμα απορρόφησε την αιγυπτιακή κουλτούρα και θεούς. Τόσο κεντρική ήταν η Βύβλος στο εμπόριο του παπύρου ώστε οι Έλληνες πήραν τη λέξη τους για το βιβλίο — βιβλίον, η ρίζα της «Βίβλου» — από το όνομά της. Οι παράκτιες πόλεις κοιτούσαν πάντα προς τη θάλασσα."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -1800,
      label: "c. 1800 BC",
      era: {
        en: "Middle Bronze Age",
        el: "Μέση Εποχή του Χαλκού"
      },
      events: [
        {
          title: {
            en: "The first alphabet",
            el: "Το πρώτο αλφάβητο"
          },
          description: {
            en: "Canaanite workers adapt Egyptian signs into a simple alphabet — the ancestor of nearly every alphabet on earth.",
            el: "Χαναναίοι εργάτες προσαρμόζουν αιγυπτιακά σύμβολα σε ένα απλό αλφάβητο — τον πρόγονο σχεδόν κάθε αλφαβήτου της γης."
          },
          extendedDescription: {
            en: "In place of the hundreds of signs of Egyptian and cuneiform writing, Semitic speakers in Canaan and the Sinai created a script of about thirty signs, each standing for a single sound. This proto-Canaanite alphabet, simple enough for ordinary people to learn, was the ancestor of the Phoenician, Hebrew, Aramaic, Greek, and Latin alphabets — one of history's most consequential inventions.",
            el: "Στη θέση των εκατοντάδων συμβόλων της αιγυπτιακής και της σφηνοειδούς γραφής, σημιτόφωνοι στη Χαναάν και το Σινά δημιούργησαν μια γραφή περίπου τριάντα συμβόλων, καθένα από τα οποία αντιστοιχούσε σε έναν μόνο ήχο. Αυτό το πρωτοχαναναϊκό αλφάβητο, αρκετά απλό ώστε να το μαθαίνουν και οι απλοί άνθρωποι, ήταν ο πρόγονος του φοινικικού, του εβραϊκού, του αραμαϊκού, του ελληνικού και του λατινικού αλφαβήτου — μία από τις πιο καθοριστικές εφευρέσεις της ιστορίας."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -1650,
      label: "c. 1650 BC",
      era: {
        en: "Middle Bronze Age",
        el: "Μέση Εποχή του Χαλκού"
      },
      events: [
        {
          title: {
            en: "The Hyksos rule Egypt",
            el: "Οι Υξώς κυβερνούν την Αίγυπτο"
          },
          description: {
            en: "Canaanite rulers, the Hyksos, seize the Egyptian Delta and govern Egypt itself for a century.",
            el: "Χαναναίοι ηγεμόνες, οι Υξώς, καταλαμβάνουν το αιγυπτιακό Δέλτα και κυβερνούν την ίδια την Αίγυπτο επί έναν αιώνα."
          },
          extendedDescription: {
            en: "Waves of Canaanite settlers in the eastern Nile Delta rose to found the Hyksos dynasty, foreign pharaohs who ruled Lower Egypt from their capital at Avaris. They brought the horse and chariot, the composite bow, and bronze-working, transforming Egyptian warfare — before the resurgent pharaohs of Thebes drove them back into Canaan.",
            el: "Κύματα Χαναναίων εποίκων στο ανατολικό Δέλτα του Νείλου ανήλθαν και ίδρυσαν τη δυναστεία των Υξώς, ξένους φαραώ που κυβερνούσαν την Κάτω Αίγυπτο από την πρωτεύουσά τους Άβαρι. Έφεραν το άλογο και το άρμα, το σύνθετο τόξο και την κατεργασία του χαλκού, μεταμορφώνοντας την αιγυπτιακή πολεμική τέχνη — προτού οι αναγεννημένοι φαραώ των Θηβών τους διώξουν πίσω στη Χαναάν."
          },
          category: "political"
        }
      ]
    },
    {
      year: -1457,
      era: {
        en: "Late Bronze Age",
        el: "Ύστερη Εποχή του Χαλκού"
      },
      events: [
        {
          title: {
            en: "Thutmose III at Megiddo",
            el: "Ο Θούτμωσις Γ΄ στο Μεγιδδώ"
          },
          description: {
            en: "The pharaoh Thutmose III crushes a Canaanite coalition at Megiddo, bringing the Levant under Egyptian rule.",
            el: "Ο φαραώ Θούτμωσις Γ΄ συντρίβει μια χαναναϊκή συμμαχία στο Μεγιδδώ, φέρνοντας τον Λεβάντε υπό αιγυπτιακή κυριαρχία."
          },
          extendedDescription: {
            en: "The Battle of Megiddo is the earliest battle recorded in reliable detail, inscribed on the walls of the temple at Karnak. Thutmose's victory made Canaan an Egyptian province for centuries, its city-kings paying tribute and sending their sons as hostages to the pharaoh's court. Megiddo's strategic pass gave its name, through Greek, to Armageddon.",
            el: "Η Μάχη του Μεγιδδώ είναι η αρχαιότερη μάχη καταγεγραμμένη με αξιόπιστες λεπτομέρειες, χαραγμένη στους τοίχους του ναού του Καρνάκ. Η νίκη του Θούτμωσι έκανε τη Χαναάν αιγυπτιακή επαρχία για αιώνες, με τους βασιλείς των πόλεών της να πληρώνουν φόρο και να στέλνουν τους γιους τους ως ομήρους στην αυλή του φαραώ. Το στρατηγικό πέρασμα του Μεγιδδώ έδωσε το όνομά του, μέσω των ελληνικών, στον Αρμαγεδδώνα."
          },
          category: "military"
        }
      ]
    },
    {
      year: -1400,
      label: "c. 1400 BC",
      era: {
        en: "Late Bronze Age",
        el: "Ύστερη Εποχή του Χαλκού"
      },
      events: [
        {
          title: {
            en: "Ugarit: gods and letters",
            el: "Η Ουγκαρίτ: θεοί και γράμματα"
          },
          description: {
            en: "The rich port of Ugarit records the myths of Baal and El in its own cuneiform alphabet.",
            el: "Το πλούσιο λιμάνι της Ουγκαρίτ καταγράφει τους μύθους του Βάαλ και του Ελ στο δικό του σφηνοειδές αλφάβητο."
          },
          extendedDescription: {
            en: "Ugarit's archives preserve the fullest picture we have of Canaanite religion — the storm god Baal, the high god El, the goddesses Asherah and Anat — in an alphabet of cuneiform signs. These myths, close cousins of stories later echoed and challenged in the Hebrew Bible, reveal the shared religious world from which Israelite faith would emerge.",
            el: "Τα αρχεία της Ουγκαρίτ διασώζουν την πληρέστερη εικόνα που έχουμε για τη χαναναϊκή θρησκεία — τον θεό της καταιγίδας Βάαλ, τον ύψιστο θεό Ελ, τις θεές Ασερά και Ανάτ — σε ένα αλφάβητο σφηνοειδών συμβόλων. Αυτοί οι μύθοι, στενοί συγγενείς ιστοριών που αργότερα αντηχούν και αμφισβητούνται στην Εβραϊκή Βίβλο, αποκαλύπτουν τον κοινό θρησκευτικό κόσμο από τον οποίο θα αναδυόταν η ισραηλιτική πίστη."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Baal%20thunderbolt%20Louvre%20AO15775.jpg?width=1024",
            alt: {
              en: "The 'Baal with Thunderbolt' stele, a Canaanite storm god, from Ugarit",
              el: "Η στήλη «Βάαλ με τον Κεραυνό», χαναναϊκού θεού της καταιγίδας, από την Ουγκαρίτ"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -1350,
      label: "c. 1350 BC",
      era: {
        en: "Late Bronze Age",
        el: "Ύστερη Εποχή του Χαλκού"
      },
      events: [
        {
          title: {
            en: "The Amarna letters",
            el: "Οι επιστολές της Αμάρνα"
          },
          description: {
            en: "Canaanite city-kings beg the pharaoh for help against rivals and marauding Habiru in letters found in Egypt.",
            el: "Χαναναίοι βασιλείς πόλεων ικετεύουν τον φαραώ για βοήθεια κατά αντιπάλων και επιδρομέων Χαμπίρου σε επιστολές που βρέθηκαν στην Αίγυπτο."
          },
          extendedDescription: {
            en: "The Amarna archive includes dozens of anxious letters from the mayors of Canaanite towns — Jerusalem, Megiddo, Byblos, Shechem — pleading for Egyptian troops against their neighbours and against the Habiru, uprooted bands of raiders and outlaws. The name Habiru has long intrigued scholars for its faint echo of the later word 'Hebrew.'",
            el: "Το αρχείο της Αμάρνα περιλαμβάνει δεκάδες αγωνιώδεις επιστολές από τους άρχοντες χαναναϊκών πόλεων — Ιερουσαλήμ, Μεγιδδώ, Βύβλος, Σιχέμ — που εκλιπαρούν για αιγυπτιακά στρατεύματα κατά των γειτόνων τους και κατά των Χαμπίρου, ξεριζωμένων ομάδων επιδρομέων και παρανόμων. Το όνομα Χαμπίρου εδώ και καιρό γοητεύει τους μελετητές για την αμυδρή του απήχηση στη μεταγενέστερη λέξη «Εβραίος»."
          },
          category: "political"
        }
      ]
    },
    {
      year: -1200,
      label: "c. 1200 BC",
      era: {
        en: "Bronze Age Collapse",
        el: "Κατάρρευση της Εποχής του Χαλκού"
      },
      events: [
        {
          title: {
            en: "The Bronze Age collapse",
            el: "Η κατάρρευση της Εποχής του Χαλκού"
          },
          description: {
            en: "Invasions by the Sea Peoples and a wider catastrophe destroy Ugarit and shatter the old order of the Levant.",
            el: "Εισβολές των Λαών της Θάλασσας και μια ευρύτερη καταστροφή αφανίζουν την Ουγκαρίτ και συντρίβουν την παλιά τάξη του Λεβάντε."
          },
          extendedDescription: {
            en: "Around 1200 BCE the great Bronze Age civilizations collapsed in a storm of invasion, famine, and upheaval. Ugarit was burned and never rebuilt; Egyptian power in Canaan faded; the Hittite empire fell. Out of the wreckage new peoples emerged in the Levant — the Philistines on the coast, the Arameans inland, and, in the hills, the Israelites.",
            el: "Γύρω στο 1200 π.Χ. οι μεγάλοι πολιτισμοί της Εποχής του Χαλκού κατέρρευσαν μέσα σε μια θύελλα εισβολών, πείνας και αναταραχής. Η Ουγκαρίτ κάηκε και δεν ξαναχτίστηκε ποτέ· η αιγυπτιακή ισχύς στη Χαναάν έσβησε· η αυτοκρατορία των Χετταίων έπεσε. Από τα συντρίμμια αναδύθηκαν νέοι λαοί στον Λεβάντε — οι Φιλισταίοι στην ακτή, οι Αραμαίοι στην ενδοχώρα και, στους λόφους, οι Ισραηλίτες."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
