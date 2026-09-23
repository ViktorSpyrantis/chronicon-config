/** Iron Age Scandinavia — Η Σκανδιναβία στην Εποχή του Σιδήρου · Vikings & Scandinavia */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const IRON_AGE_SCANDINAVIA = {
  id: "iron-age-scandinavia" as const,
  label: {
    en: "Iron Age Scandinavia",
    el: "Η Σκανδιναβία στην Εποχή του Σιδήρου"
  },
  supertitle: {
    en: "Before the Vikings",
    el: "Πριν από τους Βίκινγκς"
  },
  title: {
    en: "Bog Bodies, Runes & Gold: Iron Age Scandinavia",
    el: "Σώματα των Ελών, Ρούνοι & Χρυσός: η Σκανδιναβία στην Εποχή του Σιδήρου"
  },
  subtitle: {
    en: "For a thousand years before the first Viking raid, the peoples of the North sacrificed men and weapons in their bogs, traded and fought on the edge of the Roman world, and invented the runes. Warrior halls rose at Uppsala, the first towns appeared at Ribe, and ship-borne war bands were already sailing the Baltic. Slide across the centuries to see the Viking Age taking shape.",
    el: "Επί χίλια χρόνια πριν από την πρώτη επιδρομή των Βίκινγκς, οι λαοί του Βορρά θυσίαζαν ανθρώπους και όπλα στα έλη τους, εμπορεύονταν και πολεμούσαν στο περιθώριο του ρωμαϊκού κόσμου και επινόησαν τους ρούνους. Αίθουσες πολεμιστών υψώθηκαν στην Ουψάλα, οι πρώτες πόλεις εμφανίστηκαν στο Ρίμπε, και πολεμικές ομάδες με πλοία ήδη διέσχιζαν τη Βαλτική. Μετακινηθείτε στους αιώνες για να δείτε την Εποχή των Βίκινγκς να διαμορφώνεται."
  },
  menuDescription: {
    en: "Bog sacrifices, the first runes, Roman contacts, and the warrior kingdoms that bred the Vikings.",
    el: "Θυσίες στα έλη, οι πρώτοι ρούνοι, οι επαφές με τη Ρώμη και τα πολεμικά βασίλεια από τα οποία γεννήθηκαν οι Βίκινγκς."
  },
  footerLabel: {
    en: "Iron Age · c. 500 BC-AD 793",
    el: "Εποχή του Σιδήρου · περ. 500 π.Χ.-793 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Iron Age Scandinavia",
    el: "Η Σκανδιναβία στην Εποχή του Σιδήρου"
  },
  theme: THEMES.bronze,
  timeline: [
    {
      year: -400,
      era: {
        en: "Pre-Roman Iron Age",
        el: "Προρωμαϊκή Εποχή του Σιδήρου"
      },
      events: [
        {
          title: {
            en: "Tollund Man",
            el: "Ο Άνθρωπος του Τόλουντ"
          },
          description: {
            en: "A man is hanged and laid in a Jutland bog, where the acidic peat preserves his face so perfectly that his finders in 1950 thought he was a recent murder victim.",
            el: "Ένας άνδρας απαγχονίζεται και τοποθετείται σε ένα έλος της Γιουτλάνδης, όπου η όξινη τύρφη διατηρεί το πρόσωπό του τόσο τέλεια ώστε όσοι τον βρήκαν το 1950 νόμισαν πως ήταν θύμα πρόσφατου φόνου."
          },
          extendedDescription: {
            en: "Radiocarbon dating places his death around 405–380 BCE. He was naked except for a pointed skin cap and a belt, with the plaited leather noose still around his neck; his last meal was a porridge of barley, flax and wild seeds. Like many of the North's bog bodies, he was probably a human sacrifice, offered to the powers believed to dwell in these wet, in-between places.",
            el: "Η ραδιοχρονολόγηση τοποθετεί τον θάνατό του γύρω στο 405–380 π.Χ. Ήταν γυμνός, με εξαίρεση έναν μυτερό δερμάτινο σκούφο και μια ζώνη, με την πλεκτή δερμάτινη θηλιά ακόμη γύρω από τον λαιμό του· το τελευταίο του γεύμα ήταν χυλός από κριθάρι, λινάρι και άγριους σπόρους. Όπως πολλά από τα σώματα των ελών του Βορρά, ήταν πιθανότατα ανθρωποθυσία, προσφορά στις δυνάμεις που πίστευαν ότι κατοικούσαν σε αυτούς τους υγρούς, μεταιχμιακούς τόπους."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -350,
      era: {
        en: "Pre-Roman Iron Age",
        el: "Προρωμαϊκή Εποχή του Σιδήρου"
      },
      events: [
        {
          title: {
            en: "The Hjortspring boat",
            el: "Το πλοίο του Γιόρτσπρινγκ"
          },
          description: {
            en: "Islanders on Als sink a defeated raiding party's war canoe in a bog along with its weapons — the oldest plank-built boat found in Scandinavia.",
            el: "Κάτοικοι του νησιού Αλς βυθίζουν σε ένα έλος το πολεμικό σκάφος μιας ηττημένης ομάδας επιδρομέων μαζί με τα όπλα της — το αρχαιότερο σκάφος από σανίδες που έχει βρεθεί στη Σκανδιναβία."
          },
          extendedDescription: {
            en: "The 19-metre, lime-wood boat was paddled rather than rowed and carried around twenty warriors. It was found in 1921 with shields, spears, swords and chain mail, enough to equip a small army — most likely spoils taken from invaders and sacrificed in thanks for victory. It shows that ship-borne raiding across the Baltic was already an old tradition a thousand years before the Vikings.",
            el: "Το σκάφος των 19 μέτρων, από ξύλο φλαμουριάς, κινούνταν με κουπιά-φτυάρια και όχι με κωπηλασία σε σκαρμούς και μετέφερε περίπου είκοσι πολεμιστές. Βρέθηκε το 1921 μαζί με ασπίδες, δόρατα, ξίφη και αλυσιδωτούς θώρακες, αρκετά για να εξοπλίσουν έναν μικρό στρατό — πιθανότατα λάφυρα από εισβολείς που θυσιάστηκαν ως ευχαριστία για τη νίκη. Δείχνει ότι οι επιδρομές με πλοία στη Βαλτική ήταν ήδη παλιά παράδοση χίλια χρόνια πριν από τους Βίκινγκς."
          },
          category: "military"
        }
      ]
    },
    {
      year: -105,
      era: {
        en: "Pre-Roman Iron Age",
        el: "Προρωμαϊκή Εποχή του Σιδήρου"
      },
      events: [
        {
          title: {
            en: "The Cimbri crush Rome at Arausio",
            el: "Οι Κίμβροι συντρίβουν τη Ρώμη στην Αραυσιώνα"
          },
          description: {
            en: "The Cimbri and Teutones, peoples whom ancient writers traced to Jutland, destroy two Roman armies in Gaul in one of Rome's worst defeats.",
            el: "Οι Κίμβροι και οι Τεύτονες, λαοί που οι αρχαίοι συγγραφείς τοποθετούσαν στη Γιουτλάνδη, αφανίζουν δύο ρωμαϊκούς στρατούς στη Γαλατία σε μία από τις χειρότερες ήττες της Ρώμης."
          },
          extendedDescription: {
            en: "Having left their northern homes around 120 BCE, the migrating Cimbri wandered through central Europe, defeating Roman forces at Noreia in 113 BCE before the catastrophe of Arausio. Rome answered by letting Gaius Marius reform its army, and he annihilated the Teutones at Aquae Sextiae in 102 BCE and the Cimbri at Vercellae in 101 BCE. Their name is traditionally linked with Himmerland, a district of northern Jutland.",
            el: "Έχοντας εγκαταλείψει τις βόρειες πατρίδες τους γύρω στο 120 π.Χ., οι Κίμβροι περιπλανήθηκαν στην κεντρική Ευρώπη, νικώντας τους Ρωμαίους στη Νωρηία το 113 π.Χ. πριν από την καταστροφή της Αραυσιώνας. Η Ρώμη απάντησε επιτρέποντας στον Γάιο Μάριο να αναμορφώσει τον στρατό της, και εκείνος εξόντωσε τους Τεύτονες στις Ακουαί Σεξτιαί το 102 π.Χ. και τους Κίμβρους στις Βερκέλλες το 101 π.Χ. Το όνομά τους συνδέεται παραδοσιακά με το Χίμερλαντ, μια περιοχή της βόρειας Γιουτλάνδης."
          },
          category: "military"
        }
      ]
    },
    {
      year: -100,
      era: {
        en: "Pre-Roman Iron Age",
        el: "Προρωμαϊκή Εποχή του Σιδήρου"
      },
      events: [
        {
          title: {
            en: "The Gundestrup cauldron",
            el: "Ο λέβητας του Γκούντεστρουπ"
          },
          description: {
            en: "A great silver cauldron decorated with gods, warriors and beasts is dismantled and laid in a Jutland bog, where it is found in 1891.",
            el: "Ένας μεγάλος ασημένιος λέβητας διακοσμημένος με θεούς, πολεμιστές και θηρία αποσυναρμολογείται και τοποθετείται σε ένα έλος της Γιουτλάνδης, όπου βρίσκεται το 1891."
          },
          extendedDescription: {
            en: "The largest known piece of European Iron Age silverwork, it was probably made in southeastern Europe, with Thracian craftsmanship and Celtic imagery — including an antlered god often identified as Cernunnos and a procession of warriors with carnyx war-trumpets. How it reached Denmark, whether as loot, gift or trade, is unknown, but its deposit shows the North's links to the wider world of Iron Age Europe.",
            el: "Το μεγαλύτερο γνωστό ασημένιο έργο της ευρωπαϊκής Εποχής του Σιδήρου κατασκευάστηκε πιθανότατα στη νοτιοανατολική Ευρώπη, με θρακική τεχνική και κελτική εικονογραφία — ανάμεσά της ένας θεός με κέρατα ελαφιού που συχνά ταυτίζεται με τον Κερνούνο, και μια πομπή πολεμιστών με πολεμικές σάλπιγγες κάρνυξ. Πώς έφτασε στη Δανία, ως λάφυρο, δώρο ή εμπόρευμα, είναι άγνωστο, αλλά η απόθεσή του δείχνει τους δεσμούς του Βορρά με τον ευρύτερο κόσμο της ευρωπαϊκής Εποχής του Σιδήρου."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 98,
      era: {
        en: "Roman Iron Age",
        el: "Ρωμαϊκή Εποχή του Σιδήρου"
      },
      events: [
        {
          title: {
            en: "Tacitus describes the Suiones",
            el: "Ο Τάκιτος περιγράφει τους Σουίωνες"
          },
          description: {
            en: "In his Germania, the Roman historian Tacitus mentions the Suiones — the Swedes — as a people 'powerful in ships' living in the Ocean beyond the Germans.",
            el: "Στη «Γερμανία» του, ο Ρωμαίος ιστορικός Τάκιτος αναφέρει τους Σουίωνες — τους Σουηδούς — ως λαό «ισχυρό σε πλοία» που ζει στον Ωκεανό πέρα από τους Γερμανούς."
          },
          extendedDescription: {
            en: "Tacitus never went north himself, but he gathered reports from traders and soldiers. He noted that the Suiones' ships had a prow at each end so they could be beached from either direction, that they honoured wealth, and that they were ruled by a single king. It is the first written mention of the people who would give their name to Sweden, and a glimpse of the seafaring culture that would one day produce the Vikings.",
            el: "Ο Τάκιτος δεν ταξίδεψε ποτέ ο ίδιος στον βορρά, αλλά συγκέντρωσε αναφορές από εμπόρους και στρατιώτες. Σημείωσε ότι τα πλοία των Σουιώνων είχαν πλώρη και στις δύο άκρες, ώστε να προσαράζουν από οποιαδήποτε κατεύθυνση, ότι τιμούσαν τον πλούτο και ότι κυβερνιούνταν από έναν μόνο βασιλιά. Είναι η πρώτη γραπτή μνεία του λαού που θα έδινε το όνομά του στη Σουηδία, και μια ματιά στη ναυτική κουλτούρα που μια μέρα θα γεννούσε τους Βίκινγκς."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 160,
      era: {
        en: "Roman Iron Age",
        el: "Ρωμαϊκή Εποχή του Σιδήρου"
      },
      events: [
        {
          title: {
            en: "The first runes",
            el: "Οι πρώτοι ρούνοι"
          },
          description: {
            en: "A bone comb from Vimose on Funen bears the word 'harja' — one of the earliest known inscriptions in runes, the North's own alphabet.",
            el: "Ένα οστέινο χτένι από το Βίμοζε στη Φιονία φέρει τη λέξη «harja» — μία από τις αρχαιότερες γνωστές επιγραφές σε ρούνους, το δικό του αλφάβητο του Βορρά."
          },
          extendedDescription: {
            en: "The runic alphabet, called the futhark after its first six letters, was probably adapted from Latin or North Italic letters by Germanic people in contact with the Roman world. Its straight, angular strokes were suited to carving in wood, bone and stone. The older futhark of 24 runes would later be simplified into the 16-rune younger futhark of the Viking Age.",
            el: "Το ρουνικό αλφάβητο, που ονομάζεται φούθαρκ από τα πρώτα του έξι γράμματα, πιθανότατα προσαρμόστηκε από λατινικά ή βορειοϊταλικά γράμματα από γερμανικούς λαούς σε επαφή με τον ρωμαϊκό κόσμο. Οι ευθείες, γωνιώδεις γραμμές του ταίριαζαν στη χάραξη σε ξύλο, οστό και πέτρα. Το παλαιότερο φούθαρκ των 24 ρούνων αργότερα απλοποιήθηκε στο νεότερο φούθαρκ των 16 ρούνων της Εποχής των Βίκινγκς."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 205,
      era: {
        en: "Roman Iron Age",
        el: "Ρωμαϊκή Εποχή του Σιδήρου"
      },
      events: [
        {
          title: {
            en: "The great weapon sacrifice at Illerup Ådal",
            el: "Η μεγάλη θυσία όπλων στο Ίλερουπ Όνταλ"
          },
          description: {
            en: "After repelling an invading army, the people of eastern Jutland smash its weapons and throw them into a lake — the largest such deposit ever found.",
            el: "Αφού απωθούν έναν εισβάλλοντα στρατό, οι κάτοικοι της ανατολικής Γιουτλάνδης σπάνε τα όπλα του και τα ρίχνουν σε μια λίμνη — η μεγαλύτερη τέτοια απόθεση που έχει βρεθεί ποτέ."
          },
          extendedDescription: {
            en: "Archaeologists recovered some 15,000 objects: hundreds of spears and lances, swords — many of them Roman-made — shields, and the silver-decorated gear of commanders. Analysis suggests the invaders, perhaps a thousand strong, came from Norway or western Sweden. The deposit reveals an organised army with a clear hierarchy, centuries before the kingdoms of the Viking Age.",
            el: "Οι αρχαιολόγοι ανέσυραν περίπου 15.000 αντικείμενα: εκατοντάδες δόρατα και λόγχες, ξίφη — πολλά από αυτά ρωμαϊκής κατασκευής — ασπίδες και τον εξοπλισμό των διοικητών διακοσμημένο με ασήμι. Η ανάλυση δείχνει ότι οι εισβολείς, ίσως χίλιοι άνδρες, ήρθαν από τη Νορβηγία ή τη δυτική Σουηδία. Η απόθεση αποκαλύπτει έναν οργανωμένο στρατό με σαφή ιεραρχία, αιώνες πριν από τα βασίλεια της Εποχής των Βίκινγκς."
          },
          category: "military"
        }
      ]
    },
    {
      year: 400,
      era: {
        en: "Migration Period",
        el: "Περίοδος των Μεταναστεύσεων"
      },
      events: [
        {
          title: {
            en: "The Golden Horns of Gallehus",
            el: "Τα Χρυσά Κέρατα του Γκάλεχους"
          },
          description: {
            en: "Two magnificent gold horns are made in southern Jutland; one bears a runic line that is among the oldest verse in any Germanic language.",
            el: "Δύο μεγαλοπρεπή χρυσά κέρατα κατασκευάζονται στη νότια Γιουτλάνδη· το ένα φέρει μια ρουνική γραμμή που συγκαταλέγεται στους αρχαιότερους στίχους σε οποιαδήποτε γερμανική γλώσσα."
          },
          extendedDescription: {
            en: "The inscription reads 'I, Hlewagastiz, son of Holt, made the horn.' Found by chance in 1639 and 1734, the horns became Danish national treasures — until 1802, when a goldsmith stole them from the royal collection and melted them down. The replicas in Copenhagen today were made from old drawings, and the loss inspired a famous poem that helped launch Danish Romanticism.",
            el: "Η επιγραφή γράφει: «Εγώ, ο Χλεβαγκάστιζ, γιος του Χολτ, έφτιαξα το κέρας». Βρέθηκαν τυχαία το 1639 και το 1734 και έγιναν εθνικοί θησαυροί της Δανίας — ώσπου το 1802 ένας χρυσοχόος τα έκλεψε από τη βασιλική συλλογή και τα έλιωσε. Τα αντίγραφα στην Κοπεγχάγη σήμερα κατασκευάστηκαν από παλιά σχέδια, και η απώλεια ενέπνευσε ένα διάσημο ποίημα που βοήθησε να ξεκινήσει ο δανικός ρομαντισμός."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 536,
      era: {
        en: "Migration Period",
        el: "Περίοδος των Μεταναστεύσεων"
      },
      events: [
        {
          title: {
            en: "The year without a summer",
            el: "Η χρονιά χωρίς καλοκαίρι"
          },
          description: {
            en: "Volcanic eruptions veil the sun across the Northern Hemisphere; in Scandinavia harvests fail for years and many farms are abandoned.",
            el: "Ηφαιστειακές εκρήξεις καλύπτουν τον ήλιο σε όλο το Βόρειο Ημισφαίριο· στη Σκανδιναβία οι σοδειές αποτυγχάνουν για χρόνια και πολλές φάρμες εγκαταλείπονται."
          },
          extendedDescription: {
            en: "Byzantine writers noted that the sun shone dimly 'like the moon' for a whole year. Ice cores and tree rings confirm massive eruptions in 536 and 540, followed by the coldest decade in two thousand years. In Scandinavia, pollen records show fields turning to forest, and people buried great hoards of gold, perhaps as offerings to bring back the sun. Some scholars see echoes of this catastrophe in the myth of Fimbulwinter, the endless winter before Ragnarök.",
            el: "Βυζαντινοί συγγραφείς σημείωσαν ότι ο ήλιος έλαμπε αμυδρά «σαν τη σελήνη» επί έναν ολόκληρο χρόνο. Οι πυρήνες πάγου και οι δακτύλιοι των δέντρων επιβεβαιώνουν τεράστιες εκρήξεις το 536 και το 540, που ακολουθήθηκαν από την ψυχρότερη δεκαετία των τελευταίων δύο χιλιάδων ετών. Στη Σκανδιναβία, τα δεδομένα γύρης δείχνουν χωράφια να μετατρέπονται σε δάσος, και οι άνθρωποι έθαψαν μεγάλους θησαυρούς χρυσού, ίσως ως προσφορές για να επιστρέψει ο ήλιος. Ορισμένοι μελετητές βλέπουν απόηχους αυτής της καταστροφής στον μύθο του Φίμπουλβιντερ, του ατελείωτου χειμώνα πριν από το Ράγκναροκ."
          },
          category: "other"
        }
      ]
    },
    {
      year: 550,
      era: {
        en: "Vendel Period",
        el: "Περίοδος Βέντελ"
      },
      events: [
        {
          title: {
            en: "The royal mounds of Old Uppsala",
            el: "Οι βασιλικοί τύμβοι της Παλαιάς Ουψάλας"
          },
          description: {
            en: "Great burial mounds rise at Gamla Uppsala, seat of the legendary Yngling kings, as a warrior elite buried with crested helmets and boats emerges in central Sweden.",
            el: "Μεγάλοι ταφικοί τύμβοι υψώνονται στη Γκάμλα Ουψάλα, έδρα των θρυλικών βασιλέων Ύνγκλινγκ, καθώς στην κεντρική Σουηδία αναδύεται μια ελίτ πολεμιστών που θάβεται με λοφιοφόρα κράνη και πλοία."
          },
          extendedDescription: {
            en: "The Vendel period, named after rich boat graves at Vendel and Valsgärde, produced ornate helmets closely resembling the one from Sutton Hoo in England, showing links between the elites of the North Sea world. Later sagas placed the pagan cult centre of the Swedes at Uppsala, with its three great mounds traditionally assigned to the god-descended kings Aun, Egil and Adils. This was the heroic world later remembered in the poem Beowulf.",
            el: "Η περίοδος Βέντελ, που ονομάστηκε από τους πλούσιους τάφους-πλοία στο Βέντελ και στο Βάλσγκερντε, παρήγαγε περίτεχνα κράνη που μοιάζουν πολύ με εκείνο του Σάτον Χου στην Αγγλία, δείχνοντας τους δεσμούς μεταξύ των ελίτ του κόσμου της Βόρειας Θάλασσας. Μεταγενέστερα έπη τοποθέτησαν το ειδωλολατρικό λατρευτικό κέντρο των Σουηδών στην Ουψάλα, με τους τρεις μεγάλους τύμβους της να αποδίδονται παραδοσιακά στους θεόσταλτους βασιλείς Άουν, Έγκιλ και Άντιλς. Αυτός ήταν ο ηρωικός κόσμος που αργότερα θυμάται το ποίημα Μπέογουλφ."
          },
          category: "political"
        }
      ]
    },
    {
      year: 705,
      era: {
        en: "Vendel Period",
        el: "Περίοδος Βέντελ"
      },
      events: [
        {
          title: {
            en: "Ribe, Scandinavia's first town",
            el: "Το Ρίμπε, η πρώτη πόλη της Σκανδιναβίας"
          },
          description: {
            en: "A seasonal marketplace is laid out on the river at Ribe in southwest Jutland — the oldest town in Scandinavia, dated by tree rings to the early 700s.",
            el: "Μια εποχική αγορά οργανώνεται στον ποταμό στο Ρίμπε, στη νοτιοδυτική Γιουτλάνδη — η αρχαιότερη πόλη της Σκανδιναβίας, χρονολογημένη από τους δακτυλίους των δέντρων στις αρχές του 8ου αιώνα."
          },
          extendedDescription: {
            en: "Plots were marked out in a regular grid, implying a king powerful enough to organise and protect trade. Craftsmen worked amber, glass beads, antler combs and bronze, while merchants brought Frisian cloth, Rhineland wine and pottery. Ribe tied Scandinavia into the trading networks of the Frankish world — the same networks whose wealth would soon draw the Vikings south.",
            el: "Τα οικόπεδα χαράχτηκαν σε κανονικό κάναβο, κάτι που προϋποθέτει έναν βασιλιά αρκετά ισχυρό ώστε να οργανώνει και να προστατεύει το εμπόριο. Οι τεχνίτες επεξεργάζονταν ήλεκτρο, γυάλινες χάντρες, χτένες από κέρατο ελαφιού και μπρούντζο, ενώ οι έμποροι έφερναν φριζικά υφάσματα, κρασί και κεραμικά από τη Ρηνανία. Το Ρίμπε έδεσε τη Σκανδιναβία με τα εμπορικά δίκτυα του φραγκικού κόσμου — τα ίδια δίκτυα των οποίων ο πλούτος σύντομα θα τραβούσε τους Βίκινγκς προς τον νότο."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 737,
      era: {
        en: "Vendel Period",
        el: "Περίοδος Βέντελ"
      },
      events: [
        {
          title: {
            en: "The Danevirke is strengthened",
            el: "Η ενίσχυση του Ντάνεβιρκε"
          },
          description: {
            en: "Danish rulers build a major phase of the Danevirke, the great earthwork across the neck of Jutland, dated by tree rings to 737.",
            el: "Οι Δανοί ηγεμόνες κατασκευάζουν μια μεγάλη φάση του Ντάνεβιρκε, του μεγάλου χωμάτινου τείχους στον αυχένα της Γιουτλάνδης, που χρονολογείται από τους δακτυλίους των δέντρων στο 737."
          },
          extendedDescription: {
            en: "Stretching some 30 kilometres between marshes and fjords, the Danevirke guarded Denmark's southern border against the Saxons, Slavs and, later, the Franks. Building on this scale required a ruler who could command labour across a large territory — strong evidence of an early Danish kingdom. The wall was rebuilt and extended many times, and was still manned by the Danish army at the start of the war of 1864.",
            el: "Εκτεινόμενο σε περίπου 30 χιλιόμετρα ανάμεσα σε έλη και φιόρδ, το Ντάνεβιρκε φύλαγε τα νότια σύνορα της Δανίας από τους Σάξονες, τους Σλάβους και, αργότερα, τους Φράγκους. Μια κατασκευή τέτοιας κλίμακας απαιτούσε έναν ηγεμόνα ικανό να διατάζει εργατικά χέρια σε μια μεγάλη επικράτεια — ισχυρή ένδειξη ενός πρώιμου δανικού βασιλείου. Το τείχος ξαναχτίστηκε και επεκτάθηκε πολλές φορές, και ήταν ακόμη επανδρωμένο από τον δανικό στρατό στην αρχή του πολέμου του 1864."
          },
          category: "military"
        }
      ]
    },
    {
      year: 750,
      era: {
        en: "Vendel Period",
        el: "Περίοδος Βέντελ"
      },
      events: [
        {
          title: {
            en: "The Salme ship burials",
            el: "Οι ταφές-πλοία του Σάλμε"
          },
          description: {
            en: "Some forty warriors from central Sweden, killed on a raid, are buried in two ships on the Estonian island of Saaremaa — the earliest known Viking-style raid.",
            el: "Περίπου σαράντα πολεμιστές από την κεντρική Σουηδία, που σκοτώθηκαν σε μια επιδρομή, θάβονται σε δύο πλοία στο εσθονικό νησί Σααρεμάα — η αρχαιότερη γνωστή επιδρομή τύπου Βίκινγκς."
          },
          extendedDescription: {
            en: "Discovered during roadworks in 2008, the burials held men who had died violently, laid out with swords, gaming pieces, hunting dogs and hawks. DNA and isotope studies show they came from the Mälaren region of Sweden, and some were probably brothers. Decades before Lindisfarne, they prove that Scandinavian war bands were already sailing east across the Baltic in search of plunder and power.",
            el: "Ανακαλύφθηκαν κατά τη διάρκεια οδικών έργων το 2008 και περιείχαν άνδρες που είχαν πεθάνει βίαια, τοποθετημένους με ξίφη, πιόνια επιτραπέζιων παιχνιδιών, κυνηγόσκυλα και γεράκια. Μελέτες DNA και ισοτόπων δείχνουν ότι προέρχονταν από την περιοχή της λίμνης Μέλαρεν στη Σουηδία, και μερικοί ήταν πιθανότατα αδέλφια. Δεκαετίες πριν από το Λίντισφαρν, αποδεικνύουν ότι οι σκανδιναβικές πολεμικές ομάδες ήδη έπλεαν ανατολικά στη Βαλτική αναζητώντας λάφυρα και εξουσία."
          },
          category: "military"
        }
      ]
    }
  ]
} satisfies PeriodDefinition;
