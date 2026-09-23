/** Stone & Bronze Age Scandinavia — Σκανδιναβία της Εποχής του Λίθου & του Χαλκού · Vikings & Scandinavia */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const PREHISTORIC_SCANDINAVIA = {
  id: "prehistoric-scandinavia" as const,
  label: {
    en: "Stone & Bronze Age North",
    el: "Ο Βορράς στην Εποχή του Λίθου & του Χαλκού"
  },
  supertitle: {
    en: "Prehistoric Scandinavia",
    el: "Προϊστορική Σκανδιναβία"
  },
  title: {
    en: "After the Ice: Stone & Bronze Age Scandinavia",
    el: "Μετά τους Πάγους: η Σκανδιναβία στην Εποχή του Λίθου & του Χαλκού"
  },
  subtitle: {
    en: "As the great ice sheet melted back, reindeer hunters followed the herds north onto a newly born land. Over ten thousand years they became fishers and shell-gatherers, then farmers raising giant stone tombs, and finally Bronze Age chieftains who worshipped the sun, carved ships into the rocks, and buried their dead in oak coffins. Slide across the millennia to watch the North come alive.",
    el: "Καθώς το μεγάλο στρώμα πάγου υποχωρούσε, κυνηγοί ταράνδων ακολούθησαν τα κοπάδια βόρεια, σε μια γη που μόλις γεννιόταν. Μέσα σε δέκα χιλιάδες χρόνια έγιναν ψαράδες και συλλέκτες οστράκων, έπειτα αγρότες που ύψωναν γιγάντιους λίθινους τάφους, και τέλος αρχηγοί της Εποχής του Χαλκού που λάτρευαν τον ήλιο, χάραζαν πλοία στους βράχους και έθαβαν τους νεκρούς τους σε δρύινα φέρετρα. Μετακινηθείτε στις χιλιετίες για να δείτε τον Βορρά να ζωντανεύει."
  },
  menuDescription: {
    en: "Reindeer hunters, megalith builders, and the sun-worshipping chiefs of the Nordic Bronze Age.",
    el: "Κυνηγοί ταράνδων, οικοδόμοι μεγαλίθων και οι ηλιολάτρες αρχηγοί της Σκανδιναβικής Εποχής του Χαλκού."
  },
  footerLabel: {
    en: "Stone & Bronze Age · c. 12,500-500 BC",
    el: "Εποχή του Λίθου & του Χαλκού · περ. 12.500-500 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Stone & Bronze Age Scandinavia",
    el: "Η Σκανδιναβία στην Εποχή του Λίθου & του Χαλκού"
  },
  theme: THEMES.sage,
  timeline: [
    {
      year: -12500,
      era: {
        en: "Late Palaeolithic",
        el: "Ύστερη Παλαιολιθική"
      },
      events: [
        {
          title: {
            en: "Reindeer hunters reach the North",
            el: "Οι κυνηγοί ταράνδων φτάνουν στον Βορρά"
          },
          description: {
            en: "As the Scandinavian ice sheet retreats, hunters of the Hamburg culture follow reindeer herds onto the tundra of what is now Denmark and southern Sweden.",
            el: "Καθώς ο σκανδιναβικός παγετώνας υποχωρεί, κυνηγοί του πολιτισμού του Αμβούργου ακολουθούν κοπάδια ταράνδων στην τούνδρα της σημερινής Δανίας και της νότιας Σουηδίας."
          },
          extendedDescription: {
            en: "For tens of thousands of years Scandinavia lay buried under ice up to three kilometres thick. When it began to melt, the first people to arrive were seasonal hunters from the North European Plain, armed with flint-tipped spears and following the reindeer on their migrations. They left little more than scattered tools and campsites, but they opened a land no human had walked before.",
            el: "Επί δεκάδες χιλιάδες χρόνια η Σκανδιναβία ήταν θαμμένη κάτω από πάγο πάχους έως και τριών χιλιομέτρων. Όταν άρχισε να λιώνει, οι πρώτοι που έφτασαν ήταν εποχικοί κυνηγοί από τη Βορειοευρωπαϊκή Πεδιάδα, οπλισμένοι με δόρατα με αιχμές από πυριτόλιθο, που ακολουθούσαν τους ταράνδους στις μετακινήσεις τους. Άφησαν ελάχιστα πέρα από διάσπαρτα εργαλεία και καταυλισμούς, αλλά άνοιξαν μια γη που κανένας άνθρωπος δεν είχε πατήσει πριν."
          },
          category: "other"
        }
      ]
    },
    {
      year: -8000,
      era: {
        en: "Mesolithic",
        el: "Μεσολιθική"
      },
      events: [
        {
          title: {
            en: "The Koelbjerg Woman",
            el: "Η Γυναίκα του Κέλμπιεργκ"
          },
          description: {
            en: "A woman dies and sinks into a lake on Funen; her bones, found in a peat bog in 1941, are the oldest human skeleton known from Denmark.",
            el: "Μια γυναίκα πεθαίνει και βυθίζεται σε μια λίμνη στη Φιονία· τα οστά της, που βρέθηκαν σε τυρφώνα το 1941, είναι ο αρχαιότερος γνωστός ανθρώπινος σκελετός της Δανίας."
          },
          extendedDescription: {
            en: "She lived in the Maglemose culture, when Denmark was still joined to Britain by the low plains of Doggerland and forests of birch and pine covered the land. Her people hunted elk, aurochs and wild boar, fished with bone hooks and dugout canoes, and camped beside lakes. Chemical analysis of her bones shows a diet drawn mostly from the land, not the sea.",
            el: "Έζησε στην εποχή του πολιτισμού του Μάγκλεμοζε, όταν η Δανία ήταν ακόμη ενωμένη με τη Βρετανία μέσω των πεδιάδων της Ντόγκερλαντ και δάση από σημύδες και πεύκα κάλυπταν τη γη. Ο λαός της κυνηγούσε άλκες, ύρους και αγριογούρουνα, ψάρευε με οστέινα αγκίστρια και μονόξυλα, και κατασκήνωνε δίπλα σε λίμνες. Η χημική ανάλυση των οστών της δείχνει διατροφή που προερχόταν κυρίως από τη στεριά και όχι από τη θάλασσα."
          },
          category: "other"
        }
      ]
    },
    {
      year: -5400,
      era: {
        en: "Mesolithic",
        el: "Μεσολιθική"
      },
      events: [
        {
          title: {
            en: "The shell-mound people of Ertebølle",
            el: "Οι άνθρωποι των σωρών από όστρακα του Έρτεμπελε"
          },
          description: {
            en: "The Ertebølle culture flourishes along Danish and Swedish coasts, living off oysters, fish and seals and piling up vast mounds of discarded shells.",
            el: "Ο πολιτισμός του Έρτεμπελε ανθίζει στις ακτές της Δανίας και της Σουηδίας, ζώντας από στρείδια, ψάρια και φώκιες και συσσωρεύοντας τεράστιους σωρούς από πεταμένα όστρακα."
          },
          extendedDescription: {
            en: "Rising seas had turned Denmark into an archipelago rich in food, and the Ertebølle people settled into semi-permanent coastal villages. Their 'kitchen middens' — some over a hundred metres long — preserve their tools, pottery and meals. They made some of the earliest pottery in the North and buried their dead with care: at Vedbæk a newborn was laid to rest on a swan's wing beside its mother.",
            el: "Η άνοδος της θάλασσας είχε μετατρέψει τη Δανία σε αρχιπέλαγος πλούσιο σε τροφή, και οι άνθρωποι του Έρτεμπελε εγκαταστάθηκαν σε ημιμόνιμα παράκτια χωριά. Οι «σωροί κουζίνας» τους — μερικοί μήκους άνω των εκατό μέτρων — διασώζουν τα εργαλεία, την κεραμική και τα γεύματά τους. Έφτιαξαν από τα πρώτα κεραμικά του Βορρά και έθαβαν τους νεκρούς τους με φροντίδα: στο Βέντμπεκ ένα νεογέννητο αναπαύθηκε πάνω σε φτερούγα κύκνου δίπλα στη μητέρα του."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -3900,
      era: {
        en: "Neolithic",
        el: "Νεολιθική"
      },
      events: [
        {
          title: {
            en: "Farming reaches Scandinavia",
            el: "Η γεωργία φτάνει στη Σκανδιναβία"
          },
          description: {
            en: "The Funnelbeaker culture brings crops, cattle and polished stone axes; within a few generations the hunter-fishers of the coast give way to farmers.",
            el: "Ο πολιτισμός των Χωνοειδών Κυπέλλων φέρνει σιτηρά, βοοειδή και λειασμένους λίθινους πελέκεις· μέσα σε λίγες γενιές οι κυνηγοί-ψαράδες των ακτών δίνουν τη θέση τους σε αγρότες."
          },
          extendedDescription: {
            en: "Named after its distinctive funnel-necked pottery, the new way of life arrived from the south around 4000 BCE, carried by incoming farmers whose DNA differs sharply from that of the older hunters. They cleared the forests with fire and flint axes, planted wheat and barley, and kept cattle, sheep and pigs. The diet of Scandinavians shifted from sea to land almost overnight.",
            el: "Ονομασμένος από τη χαρακτηριστική κεραμική του με χωνοειδή λαιμό, ο νέος τρόπος ζωής ήρθε από τον νότο γύρω στο 4000 π.Χ., φερμένος από νεοφερμένους αγρότες των οποίων το DNA διαφέρει έντονα από εκείνο των παλαιότερων κυνηγών. Καθάρισαν τα δάση με φωτιά και πελέκεις από πυριτόλιθο, έσπειραν σιτάρι και κριθάρι και εξέτρεφαν βοοειδή, πρόβατα και χοίρους. Η διατροφή των Σκανδιναβών πέρασε από τη θάλασσα στη στεριά σχεδόν εν μια νυκτί."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -3500,
      era: {
        en: "Neolithic",
        el: "Νεολιθική"
      },
      events: [
        {
          title: {
            en: "The age of dolmens and passage graves",
            el: "Η εποχή των ντολμέν και των διαδρομικών τάφων"
          },
          description: {
            en: "Farming communities raise thousands of megalithic tombs from huge boulders — dolmens and passage graves that still dot the Danish and Swedish landscape.",
            el: "Οι αγροτικές κοινότητες υψώνουν χιλιάδες μεγαλιθικούς τάφους από τεράστιους ογκόλιθους — ντολμέν και διαδρομικούς τάφους που ακόμη διανθίζουν το τοπίο της Δανίας και της Σουηδίας."
          },
          extendedDescription: {
            en: "The first dolmens were simple chambers of standing stones capped by a single slab; later passage graves added long stone corridors leading to collective burial chambers used for generations. Denmark alone still has thousands of these monuments. They were built to be seen — marking land, ancestry and the power of the communities that could muster the labour to move stones weighing many tonnes.",
            el: "Τα πρώτα ντολμέν ήταν απλοί θάλαμοι από όρθιες πέτρες σκεπασμένοι με μία πλάκα· αργότερα οι διαδρομικοί τάφοι πρόσθεσαν μακριούς πέτρινους διαδρόμους που οδηγούσαν σε ομαδικούς ταφικούς θαλάμους, οι οποίοι χρησιμοποιούνταν επί γενιές. Μόνο η Δανία διατηρεί ακόμη χιλιάδες τέτοια μνημεία. Χτίστηκαν για να φαίνονται — σημαδεύοντας τη γη, την καταγωγή και τη δύναμη των κοινοτήτων που μπορούσαν να κινητοποιήσουν τον κόπο για να μετακινήσουν πέτρες βάρους πολλών τόνων."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -2800,
      era: {
        en: "Late Neolithic",
        el: "Ύστερη Νεολιθική"
      },
      events: [
        {
          title: {
            en: "Newcomers from the steppe",
            el: "Νεοφερμένοι από τη στέπα"
          },
          description: {
            en: "The Single Grave and Battle Axe cultures spread across the North, burying individuals with stone battle-axes and corded pottery.",
            el: "Οι πολιτισμοί του Μονήρους Τάφου και του Πολεμικού Πελέκεως εξαπλώνονται στον Βορρά, θάβοντας τους νεκρούς μεμονωμένα με λίθινους πολεμικούς πελέκεις και σχοινόπλοκη κεραμική."
          },
          extendedDescription: {
            en: "Part of the wider Corded Ware world, these people carried a large share of ancestry from the Yamnaya herders of the Pontic–Caspian steppe, and many scholars link them with the spread of Indo-European languages — the distant ancestors of Norse. Collective megalithic tombs gave way to single burials under small mounds, a sign of new ideas about the individual, the family and status.",
            el: "Μέρος του ευρύτερου κόσμου της Σχοινόπλοκης Κεραμικής, αυτοί οι άνθρωποι είχαν μεγάλο μερίδιο καταγωγής από τους νομάδες Γιάμνα της Ποντοκασπιακής στέπας, και πολλοί μελετητές τους συνδέουν με τη διάδοση των ινδοευρωπαϊκών γλωσσών — των μακρινών προγόνων της νορδικής. Οι ομαδικοί μεγαλιθικοί τάφοι έδωσαν τη θέση τους σε μεμονωμένες ταφές κάτω από μικρούς τύμβους, σημάδι νέων αντιλήψεων για το άτομο, την οικογένεια και την κοινωνική θέση."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -1700,
      era: {
        en: "Nordic Bronze Age",
        el: "Σκανδιναβική Εποχή του Χαλκού"
      },
      events: [
        {
          title: {
            en: "The Nordic Bronze Age begins",
            el: "Αρχίζει η Σκανδιναβική Εποχή του Χαλκού"
          },
          description: {
            en: "Though the North has no copper or tin of its own, trade in amber brings bronze from the south, and a rich warrior aristocracy emerges.",
            el: "Αν και ο Βορράς δεν διαθέτει δικό του χαλκό ή κασσίτερο, το εμπόριο ήλεκτρου φέρνει μπρούντζο από τον νότο και αναδύεται μια πλούσια αριστοκρατία πολεμιστών."
          },
          extendedDescription: {
            en: "Baltic amber travelled south along trade routes as far as Mycenaean Greece, and bronze flowed back north. Local smiths became masters of the metal, casting swords, spiral-decorated ornaments and great curved horns called lurs, often found in pairs in bogs. Chiefs were buried under large barrows that still crown the ridges of Denmark and southern Sweden.",
            el: "Το ήλεκτρο της Βαλτικής ταξίδευε νότια μέσω εμπορικών δρόμων έως τη Μυκηναϊκή Ελλάδα, και ο μπρούντζος έρεε πίσω προς τον βορρά. Οι ντόπιοι σιδηρουργοί έγιναν δεξιοτέχνες του μετάλλου, χυτεύοντας ξίφη, κοσμήματα με σπειροειδή διακόσμηση και μεγάλα κυρτά κέρατα, τα λουρ, που συχνά βρίσκονται σε ζεύγη μέσα σε έλη. Οι αρχηγοί θάβονταν κάτω από μεγάλους τύμβους που ακόμη στεφανώνουν τις ράχες της Δανίας και της νότιας Σουηδίας."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -1400,
      era: {
        en: "Nordic Bronze Age",
        el: "Σκανδιναβική Εποχή του Χαλκού"
      },
      events: [
        {
          title: {
            en: "The Trundholm sun chariot",
            el: "Το ηλιακό άρμα του Τρούντχολμ"
          },
          description: {
            en: "Danish craftsmen make a bronze horse drawing a gilded sun disc on wheels — the most famous image of the Bronze Age sun cult.",
            el: "Δανοί τεχνίτες κατασκευάζουν ένα χάλκινο άλογο που σέρνει έναν επιχρυσωμένο ηλιακό δίσκο πάνω σε τροχούς — η πιο γνωστή απεικόνιση της ηλιολατρίας της Εποχής του Χαλκού."
          },
          extendedDescription: {
            en: "Found by a farmer ploughing a bog on Zealand in 1902, the chariot has one side of its disc gilded and the other left dark: the bright day-sun drawn across the sky, and the night-sun returning unseen. The belief that a horse pulled the sun by day and a ship carried it by night runs through the rock art and bronzes of the whole Nordic Bronze Age.",
            el: "Βρέθηκε από έναν αγρότη που όργωνε ένα έλος στη Ζηλανδία το 1902· η μία πλευρά του δίσκου είναι επιχρυσωμένη και η άλλη σκοτεινή: ο λαμπρός ήλιος της ημέρας που σύρεται στον ουρανό, και ο ήλιος της νύχτας που επιστρέφει αθέατος. Η πίστη ότι ένα άλογο έσερνε τον ήλιο τη μέρα και ένα πλοίο τον μετέφερε τη νύχτα διατρέχει τη βραχογραφία και τα χάλκινα έργα ολόκληρης της Σκανδιναβικής Εποχής του Χαλκού."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Solvognen_DO-6865_2000.jpg?width=1024",
            alt: {
              en: "The Trundholm sun chariot: a bronze horse drawing a gilded sun disc on wheels, National Museum of Denmark",
              el: "Το ηλιακό άρμα του Τρούντχολμ: ένα χάλκινο άλογο που σέρνει έναν επιχρυσωμένο ηλιακό δίσκο πάνω σε τροχούς, Εθνικό Μουσείο της Δανίας"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -1370,
      era: {
        en: "Nordic Bronze Age",
        el: "Σκανδιναβική Εποχή του Χαλκού"
      },
      events: [
        {
          title: {
            en: "The Egtved Girl is buried",
            el: "Η ταφή του Κοριτσιού του Έγκτβεντ"
          },
          description: {
            en: "In the summer of 1370 BCE, dated precisely by the rings of her oak coffin, a girl of 16–18 is buried in Jutland in a corded skirt and a bronze sun belt-disc.",
            el: "Το καλοκαίρι του 1370 π.Χ., όπως χρονολογείται με ακρίβεια από τους δακτυλίους του δρύινου φέρετρού της, ένα κορίτσι 16–18 ετών θάβεται στη Γιουτλάνδη με κοντή φούστα από κορδόνια και έναν χάλκινο ηλιακό δίσκο στη ζώνη."
          },
          extendedDescription: {
            en: "Her barrow sealed the coffin so well that her clothes, hair, nails and teeth survived for 3,400 years, along with a yarrow flower that shows she was buried in summer. A 2015 study of the strontium in her hair suggested she had travelled long distances, perhaps from the Black Forest, though the interpretation is debated. She offers a rare, intimate glimpse of a Bronze Age life.",
            el: "Ο τύμβος της σφράγισε το φέρετρο τόσο καλά που τα ρούχα, τα μαλλιά, τα νύχια και τα δόντια της διασώθηκαν επί 3.400 χρόνια, μαζί με ένα άνθος αχίλλειας που δείχνει ότι θάφτηκε καλοκαίρι. Μια μελέτη του 2015 για το στρόντιο στα μαλλιά της υπέθεσε ότι είχε ταξιδέψει μεγάλες αποστάσεις, ίσως από τον Μέλανα Δρυμό, αν και η ερμηνεία αμφισβητείται. Προσφέρει μια σπάνια, προσωπική ματιά σε μια ζωή της Εποχής του Χαλκού."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Egtvedpigen.jpg?width=1024",
            alt: {
              en: "The oak coffin and preserved clothing of the Egtved Girl on display",
              el: "Το δρύινο φέρετρο και τα διατηρημένα ενδύματα του Κοριτσιού του Έγκτβεντ σε έκθεση"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -1000,
      era: {
        en: "Nordic Bronze Age",
        el: "Σκανδιναβική Εποχή του Χαλκού"
      },
      events: [
        {
          title: {
            en: "The rock carvings of Tanum",
            el: "Οι βραχογραφίες του Τάνουμ"
          },
          description: {
            en: "On the smooth granite of western Sweden, Bronze Age people carve thousands of images of ships, warriors, ploughing oxen, sun symbols and ritual scenes.",
            el: "Στον λείο γρανίτη της δυτικής Σουηδίας, άνθρωποι της Εποχής του Χαλκού χαράζουν χιλιάδες παραστάσεις πλοίων, πολεμιστών, βοδιών που οργώνουν, ηλιακών συμβόλων και τελετουργικών σκηνών."
          },
          extendedDescription: {
            en: "The carvings at Tanum, a UNESCO World Heritage Site since 1994, were made over roughly a thousand years. Ships dominate — long canoe-like vessels crowded with paddlers — showing how central the sea already was to northern life and belief. Other panels show weddings, battles with axes and spears, and giant figures who may be gods. They are the richest picture of Bronze Age society in northern Europe.",
            el: "Οι χαράξεις στο Τάνουμ, Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO από το 1994, δημιουργήθηκαν σε διάστημα περίπου χιλίων ετών. Κυριαρχούν τα πλοία — μακρόστενα σκάφη σαν κανό, γεμάτα κωπηλάτες — δείχνοντας πόσο κεντρική ήταν ήδη η θάλασσα στη ζωή και στις πίστεις του Βορρά. Άλλες επιφάνειες δείχνουν γάμους, μάχες με πελέκεις και δόρατα, και γιγάντιες μορφές που ίσως είναι θεοί. Αποτελούν την πλουσιότερη εικόνα της κοινωνίας της Εποχής του Χαλκού στη βόρεια Ευρώπη."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tanumshede_2005_rock_carvings_Vitlycke.jpg?width=1024",
            alt: {
              en: "Bronze Age rock carving of a long ship at Vitlycke, Tanum, with the lines painted red",
              el: "Βραχογραφία της Εποχής του Χαλκού με ένα μακρόστενο πλοίο στο Βίτλικε του Τάνουμ, με τις γραμμές βαμμένες κόκκινες"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -500,
      era: {
        en: "Pre-Roman Iron Age",
        el: "Προρωμαϊκή Εποχή του Σιδήρου"
      },
      events: [
        {
          title: {
            en: "Iron and a colder climate",
            el: "Ο σίδηρος και ένα ψυχρότερο κλίμα"
          },
          description: {
            en: "The Bronze Age ends as the climate turns cooler and wetter, trade networks collapse, and local bog iron replaces imported bronze.",
            el: "Η Εποχή του Χαλκού τελειώνει καθώς το κλίμα γίνεται ψυχρότερο και υγρότερο, τα εμπορικά δίκτυα καταρρέουν και ο ντόπιος σίδηρος των ελών αντικαθιστά τον εισαγόμενο μπρούντζο."
          },
          extendedDescription: {
            en: "Iron could be smelted from ore dug out of Scandinavia's own bogs, so metal no longer depended on long-distance trade — and the chieftains whose power rested on controlling bronze lost their edge. Richly furnished burials disappear, villages of longhouses with cattle stalls under the same roof become the norm, and offerings are increasingly made in lakes and bogs rather than graves.",
            el: "Ο σίδηρος μπορούσε να εξαχθεί από μετάλλευμα σκαμμένο στα ίδια τα έλη της Σκανδιναβίας, οπότε το μέταλλο δεν εξαρτιόταν πλέον από το εμπόριο μεγάλων αποστάσεων — και οι αρχηγοί των οποίων η δύναμη στηριζόταν στον έλεγχο του μπρούντζου έχασαν το πλεονέκτημά τους. Οι πλούσια κτερισμένες ταφές εξαφανίζονται, χωριά με μακρόστενα σπίτια που στέγαζαν και τα ζώα κάτω από την ίδια στέγη γίνονται ο κανόνας, και οι προσφορές γίνονται όλο και περισσότερο σε λίμνες και έλη αντί για τάφους."
          },
          category: "other"
        }
      ]
    }
  ]
} satisfies PeriodDefinition;
