/** Bronze Age Greece — Ελλάδα της Εποχής του Χαλκού · Greek History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const BRONZE_AGE_GREECE = {
  id: "bronze-age-greece" as const,
  label: {
    en: "Bronze Age Greece",
    el: "Ελλάδα της Εποχής του Χαλκού"
  },
  supertitle: {
    en: "Aegean Bronze Age",
    el: "Αιγαιακή Εποχή του Χαλκού"
  },
  title: {
    en: "Bronze Age Greece",
    el: "Η Ελλάδα της Εποχής του Χαλκού"
  },
  subtitle: {
    en: "From the Cycladic seafarers and the Minoan palaces of Crete to the Mycenaean citadels and the great Late Bronze Age collapse. Slide across the millennia to read the major events that shaped the Aegean before the Greek alphabet was born.",
    el: "Από τους Κυκλαδίτες θαλασσοπόρους και τα μινωικά ανάκτορα της Κρήτης έως τις μυκηναϊκές ακροπόλεις και τη μεγάλη κατάρρευση της Ύστερης Εποχής του Χαλκού. Μετακινηθείτε ανάμεσα στις χιλιετίες για να διαβάσετε τα γεγονότα που διαμόρφωσαν το Αιγαίο πριν γεννηθεί το ελληνικό αλφάβητο."
  },
  menuDescription: {
    en: "Cycladic idols, Minoan palaces and Mycenaean warlords: Greece before it had an alphabet.",
    el: "Κυκλαδικά ειδώλια, μινωικά ανάκτορα και μυκηναίοι άνακτες: η Ελλάδα πριν αποκτήσει αλφάβητο."
  },
  footerLabel: {
    en: "Bronze Age Greece · 3200-1100 BC",
    el: "Ελλάδα της Εποχής του Χαλκού · 3200-1100 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Bronze Age Greece",
    el: "Ελλάδα της Εποχής του Χαλκού"
  },
  theme: THEMES.terracotta,
  timeline: [
    {
      year: -3200,
      era: {
        en: "Early Bronze Age",
        el: "Πρώιμη Εποχή του Χαλκού"
      },
      events: [
        {
          title: {
            en: "Dawn of the Aegean Bronze Age",
            el: "Αυγή της Εποχής του Χαλκού στο Αιγαίο"
          },
          description: {
            en: "Copper and tin metallurgy spreads across the Aegean. Early Cycladic, Early Helladic, and Early Minoan cultures take shape on the islands and mainland.",
            el: "Η μεταλλουργία του χαλκού και του κασσίτερου εξαπλώνεται στο Αιγαίο. Διαμορφώνονται ο Πρωτοκυκλαδικός, ο Πρωτοελλαδικός και ο Πρωτομινωικός πολιτισμός σε νησιά και ηπειρωτική χώρα."
          },
          extendedDescription: {
            en: "Around 3200 BC small farming communities of the Aegean began to participate in long-distance trade in obsidian, marble, and metals. The transition from stone to bronze tools coincided with denser settlement, fortified hilltops, and the emergence of regional elites. The Cyclades, ringed by reliable winds and abundant Melian obsidian, became one of the earliest seafaring cultures of Europe.",
            el: "Γύρω στο 3200 π.Χ., μικρές αγροτικές κοινότητες του Αιγαίου άρχισαν να μετέχουν σε εμπόριο μεγάλων αποστάσεων με οψιδιανό, μάρμαρο και μέταλλα. Η μετάβαση από τα λίθινα στα χάλκινα εργαλεία συνοδεύτηκε από πυκνότερους οικισμούς, οχυρωμένους λόφους και την ανάδυση τοπικών ελίτ. Οι Κυκλάδες, με σταθερούς ανέμους και τον πλούσιο οψιδιανό της Μήλου, έγιναν ένας από τους πρώτους θαλασσοπόρους πολιτισμούς της Ευρώπης."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -2700,
      era: {
        en: "Cycladic Civilization",
        el: "Κυκλαδικός Πολιτισμός"
      },
      events: [
        {
          title: {
            en: "Flourishing of the Cycladic culture",
            el: "Ακμή του Κυκλαδικού Πολιτισμού"
          },
          description: {
            en: "The Cycladic islands produce the iconic marble figurines and longboats that define the Early Bronze Age Aegean.",
            el: "Τα νησιά των Κυκλάδων παράγουν τα εμβληματικά μαρμάρινα ειδώλια και τα μακρόστενα πλοία που χαρακτηρίζουν την Πρώιμη Εποχή του Χαλκού στο Αιγαίο."
          },
          extendedDescription: {
            en: "From roughly 2700 to 2300 BC, settlements such as Chalandriani on Syros, Skarkos on Ios, and Akrotiri on Thera reached their first peak. Cycladic sculptors carved schematic, folded-arm female figures of Parian and Naxian marble — abstractions that would inspire Brancusi, Modigliani, and Picasso four millennia later. Painted longboats on contemporary 'frying pans' attest to a cohesive maritime network across the islands.",
            el: "Από περίπου το 2700 έως το 2300 π.Χ., οικισμοί όπως η Χαλανδριανή στη Σύρο, ο Σκάρκος στην Ίο και το Ακρωτήρι στη Θήρα έφτασαν στην πρώτη τους ακμή. Οι Κυκλαδίτες γλύπτες σκάλιζαν σχηματικά γυναικεία ειδώλια με σταυρωμένα χέρια από παριανό και ναξιακό μάρμαρο — αφαιρέσεις που θα ενέπνεαν τον Μπρανκούζι, τον Μοντιλιάνι και τον Πικάσο τέσσερις χιλιετίες αργότερα. Ζωγραφισμένα πλοία σε σύγχρονα «τηγανόσχημα» σκεύη μαρτυρούν συνεκτικό θαλάσσιο δίκτυο."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -2500,
      era: {
        en: "Corridor House Era",
        el: "Εποχή των Οικιών Διαδρόμου"
      },
      events: [
        {
          title: {
            en: "Lerna's House of Tiles",
            el: "Ο Οίκος των Κεράμων στη Λέρνα"
          },
          description: {
            en: "At Lerna in the Argolid, a monumental two-storey 'corridor house' with a tiled roof and clay sealings is built — a high point of Early Helladic II society.",
            el: "Στη Λέρνα της Αργολίδας χτίζεται ένα μνημειώδες διώροφο «οίκημα διαδρόμου» με κεραμοσκεπή και πήλινες σφραγίσεις — κορυφαία στιγμή της Πρωτοελλαδικής ΙΙ κοινωνίας."
          },
          extendedDescription: {
            en: "The House of Tiles, roughly 25 by 12 metres, is the largest pre-palatial building so far known on the Greek mainland. Hundreds of clay sealings excavated from its corridors imply central storage and redistribution of goods — a small bureaucracy without writing. Similar 'corridor houses' at Akovitika in Messenia, Thebes, and Kolonna on Aegina show a shared elite architectural tradition that would be wiped out in the destructions of c. 2200 BC.",
            el: "Ο Οίκος των Κεράμων, διαστάσεων περίπου 25 επί 12 μέτρα, είναι το μεγαλύτερο γνωστό προ-ανακτορικό κτήριο της ηπειρωτικής Ελλάδας. Εκατοντάδες πήλινες σφραγίσεις από τους διαδρόμους του υποδηλώνουν κεντρική αποθήκευση και αναδιανομή αγαθών — μια μικρή γραφειοκρατία χωρίς γραφή. Παρόμοιες «οικίες διαδρόμου» στα Ακοβίτικα της Μεσσηνίας, στη Θήβα και στην Κολόνα της Αίγινας μαρτυρούν μια κοινή ελιτίστικη αρχιτεκτονική παράδοση που θα εξαφανιζόταν στις καταστροφές του 2200 π.Χ."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -2200,
      era: {
        en: "Early Helladic Crisis",
        el: "Πρωτοελλαδική Κρίση"
      },
      events: [
        {
          title: {
            en: "Destruction of EH II settlements",
            el: "Καταστροφή των ΠΕ ΙΙ οικισμών"
          },
          description: {
            en: "Mainland centers like Lerna's House of Tiles are burned. Population shifts and possible new arrivals reshape the Greek mainland.",
            el: "Ηπειρωτικά κέντρα όπως ο Οίκος των Κεράμων στη Λέρνα καταστρέφονται από φωτιά. Πληθυσμιακές μετακινήσεις και πιθανές νέες αφίξεις αναδιαμορφώνουν την ηπειρωτική Ελλάδα."
          },
          extendedDescription: {
            en: "The wave of destructions around 2200 BC ended a period of monumental 'corridor houses' on the mainland and ushered in the more modest Early Helladic III culture. Some scholars connect the rupture to the climatic '4.2-kiloyear event' that disrupted civilizations from Egypt to Mesopotamia, others to incoming Indo-European speakers. Whatever the cause, by 2000 BC the mainland was poorer and more village-based, while Crete moved confidently toward urban palatial societies.",
            el: "Το κύμα καταστροφών γύρω στο 2200 π.Χ. τερμάτισε μια περίοδο μνημειωδών «οικιών διαδρόμων» στην ηπειρωτική Ελλάδα και εγκαινίασε την πιο μέτρια Πρωτοελλαδική ΙΙΙ φάση. Κάποιοι μελετητές συνδέουν τη ρήξη με το κλιματικό «γεγονός των 4,2 χιλιετιών» που έπληξε πολιτισμούς από την Αίγυπτο έως τη Μεσοποταμία, άλλοι με την άφιξη ινδοευρωπαϊκών ομάδων. Όπως και να έχει, μέχρι το 2000 π.Χ. η ηπειρωτική χώρα είχε γίνει φτωχότερη και πιο χωριάτικη, ενώ η Κρήτη βάδιζε σταθερά προς αστικές ανακτορικές κοινωνίες."
          },
          category: "other"
        }
      ]
    },
    {
      year: -2000,
      era: {
        en: "Middle Helladic Begins",
        el: "Έναρξη της Μεσοελλαδικής"
      },
      events: [
        {
          title: {
            en: "Indo-European Greek-speakers reshape the mainland",
            el: "Ινδοευρωπαίοι ελληνόφωνοι αναδιαμορφώνουν την ηπειρωτική χώρα"
          },
          description: {
            en: "Material culture changes across mainland Greece — wheel-made grey 'Minyan' ware, intramural cist-grave burials, and likely the arrival of Indo-European Greek-speakers at the start of the Middle Helladic.",
            el: "Η υλική κουλτούρα της ηπειρωτικής Ελλάδας αλλάζει — τροχήλατη γκρίζα «μινυακή» κεραμική, ταφές μέσα στους οικισμούς σε κιβωτιόσχημους τάφους, και πιθανότατα η άφιξη ινδοευρωπαίων ελληνόφωνων στην αρχή της Μεσοελλαδικής."
          },
          extendedDescription: {
            en: "Around 2000 BC the mainland enters the Middle Helladic period with a sober, wheel-made grey ware named after Minyas of Orchomenos, intramural cist graves, and a less stratified society than that of the corridor houses. Many linguists see this rupture as the moment Indo-European Greek-speakers settled in the peninsula, though others place the arrival earlier or later. From this gene pool would emerge the Mycenaean elites whose tablets, four centuries later, record the earliest deciphered Greek.",
            el: "Γύρω στο 2000 π.Χ. η ηπειρωτική χώρα εισέρχεται στη Μεσοελλαδική περίοδο με μια λιτή, τροχήλατη γκρίζα κεραμική που πήρε το όνομά της από τον Μινύα του Ορχομενού, ταφές σε κιβωτιόσχημους τάφους εντός των οικισμών και κοινωνία λιγότερο ιεραρχημένη από εκείνη των οικιών διαδρόμου. Πολλοί γλωσσολόγοι θεωρούν αυτή τη ρήξη ως τη στιγμή που ινδοευρωπαίοι ελληνόφωνοι εγκαταστάθηκαν στη χερσόνησο, ενώ άλλοι τοποθετούν την άφιξη νωρίτερα ή αργότερα. Από αυτή τη δεξαμενή θα αναδυόταν η μυκηναϊκή ελίτ, της οποίας οι πινακίδες θα κατέγραφαν τέσσερις αιώνες αργότερα την αρχαιότερη αποκρυπτογραφημένη ελληνική."
          },
          category: "other"
        }
      ]
    },
    {
      year: -1900,
      era: {
        en: "Old Palace Period",
        el: "Παλαιοανακτορική Περίοδος"
      },
      events: [
        {
          title: {
            en: "Rise of the first Minoan palaces",
            el: "Άνοδος των πρώτων μινωικών ανακτόρων"
          },
          description: {
            en: "On Crete, the first palace complexes are built at Knossos, Phaistos, and Malia, marking the beginning of European palatial civilization.",
            el: "Στην Κρήτη χτίζονται τα πρώτα ανακτορικά συγκροτήματα στην Κνωσό, τη Φαιστό και τα Μάλια, σηματοδοτώντας την έναρξη του ευρωπαϊκού ανακτορικού πολιτισμού."
          },
          extendedDescription: {
            en: "Around 1900 BC, Cretans built the first multi-storey palatial complexes around large central courts. These were not simply royal residences but administrative, religious, and economic hubs that stored grain, oil, and wine in vast magazines and operated workshops for fine ceramics, seal stones, and metalwork. The first writing system in Europe, Cretan Hieroglyphic, appears on contemporary clay documents and seals.",
            el: "Γύρω στο 1900 π.Χ., οι Κρήτες έχτισαν τα πρώτα πολυώροφα ανακτορικά συγκροτήματα γύρω από μεγάλες κεντρικές αυλές. Δεν ήταν απλώς βασιλικές κατοικίες, αλλά διοικητικά, θρησκευτικά και οικονομικά κέντρα που αποθήκευαν σιτηρά, λάδι και κρασί σε τεράστιες αποθήκες και λειτουργούσαν εργαστήρια για εκλεπτυσμένη κεραμική, σφραγιδόλιθους και μεταλλοτεχνία. Η πρώτη γραφή της Ευρώπης, η Κρητική Ιερογλυφική, εμφανίζεται σε σύγχρονα πήλινα έγγραφα και σφραγίδες."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -1800,
      era: {
        en: "Minoan Thalassocracy Expands",
        el: "Επέκταση Μινωικής Θαλασσοκρατίας"
      },
      events: [
        {
          title: {
            en: "Minoan trade reaches Egypt and the Levant",
            el: "Το μινωικό εμπόριο φτάνει στην Αίγυπτο και την Εγγύς Ανατολή"
          },
          description: {
            en: "Cretan Kamares ware appears in Egyptian and Levantine elite tombs, while Egyptian alabaster and Syrian tin reach Crete in return.",
            el: "Η κρητική κεραμική Καμαρών εμφανίζεται σε ελιτίστικους τάφους της Αιγύπτου και της Εγγύς Ανατολής, ενώ αιγυπτιακό αλάβαστρο και συριακός κασσίτερος φτάνουν στην Κρήτη ως ανταπόδοση."
          },
          extendedDescription: {
            en: "From the Old Palace period onward, Cretan Kamares ware — its black grounds painted with yellow and red spirals — appears at Lahun in the Faiyum and at Avaris, the Hyksos capital in the Egyptian Delta. Cretan goods were also traded at Byblos and Ugarit on the Levantine coast. In return Egyptian alabaster, faience, and ostrich eggs reached Knossos. Tomb paintings at 18th-Dynasty Thebes would later depict tribute-bearing 'Keftiu' (Cretans), evidence of how deeply Minoan craftsmen had embedded themselves in eastern Mediterranean diplomacy.",
            el: "Από την Παλαιοανακτορική περίοδο και μετά, η κρητική κεραμική Καμαρών — με τα μαύρα έδαφη και τις κίτρινες και κόκκινες σπείρες — εμφανίζεται στο Λάχουν του Φαγιούμ και στην Άβαρι, την πρωτεύουσα των Υξώς στο Δέλτα του Νείλου. Κρητικά προϊόντα διακινούνταν επίσης στη Βύβλο και την Ουγκαρίτ στις ακτές της Εγγύς Ανατολής. Σε αντάλλαγμα, αιγυπτιακό αλάβαστρο, φαγεντιανή και αυγά στρουθοκαμήλου έφταναν στην Κνωσό. Τοιχογραφίες θηβαϊκών τάφων της 18ης Δυναστείας θα απεικόνιζαν αργότερα «Κεφτιού» (Κρήτες) να φέρουν δώρα, μαρτυρώντας πόσο βαθιά είχαν εδραιωθεί οι μινωίτες τεχνίτες στη διπλωματία της ανατολικής Μεσογείου."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -1700,
      era: {
        en: "New Palace Period",
        el: "Νεοανακτορική Περίοδος"
      },
      events: [
        {
          title: {
            en: "Rebuilding of the Minoan palaces",
            el: "Ανοικοδόμηση των μινωικών ανακτόρων"
          },
          description: {
            en: "After widespread destructions (probably from earthquakes), the Minoan palaces are rebuilt on a grander scale. Linear A appears.",
            el: "Μετά από εκτεταμένες καταστροφές (πιθανότατα από σεισμούς), τα μινωικά ανάκτορα ανοικοδομούνται σε μεγαλύτερη κλίμακα. Εμφανίζεται η Γραμμική Α."
          },
          extendedDescription: {
            en: "The 'Neopalatial' period (c. 1700-1450 BC) is the high point of Minoan civilization. The rebuilt palaces of Knossos, Phaistos, Malia, and Zakros, plus regional centres like Galatas and Kato Zakros, organised a thalassocracy that traded with Egypt, the Levant, and the Cyclades. Frescoes of bull-leapers, dolphins, and saffron-gatherers adorned palatial walls. The Linear A script — still undeciphered — recorded an unknown 'Minoan' language.",
            el: "Η «Νεοανακτορική» περίοδος (περ. 1700-1450 π.Χ.) είναι η ακμή του μινωικού πολιτισμού. Τα ανοικοδομημένα ανάκτορα της Κνωσού, της Φαιστού, των Μαλίων και της Ζάκρου, μαζί με περιφερειακά κέντρα όπως ο Γαλατάς και τα Κάτω Ζάκρος, οργάνωσαν θαλασσοκρατία που εμπορευόταν με Αίγυπτο, Εγγύς Ανατολή και Κυκλάδες. Τοιχογραφίες ταυροκαθαψίων, δελφινιών και κροκοσυλλεκτριών κοσμούσαν τους ανακτορικούς τοίχους. Η Γραμμική Α — ακόμη μη αποκρυπτογραφημένη — κατέγραφε μια άγνωστη «μινωική» γλώσσα."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -1620,
      era: {
        en: "Theran Eruption",
        el: "Έκρηξη της Θήρας"
      },
      events: [
        {
          title: {
            en: "Eruption of Thera",
            el: "Έκρηξη του ηφαιστείου της Θήρας"
          },
          description: {
            en: "One of the largest volcanic eruptions in human history devastates Thera (Santorini) and buries the prosperous town of Akrotiri.",
            el: "Μία από τις μεγαλύτερες ηφαιστειακές εκρήξεις στην ιστορία του ανθρώπου ισοπεδώνει τη Θήρα (Σαντορίνη) και θάβει την ακμάζουσα πόλη του Ακρωτηρίου."
          },
          extendedDescription: {
            en: "Modern radiocarbon dates place the eruption around 1600-1620 BC; some Egyptian-derived chronologies argue for c. 1500 BC. The Plinian column reached the stratosphere, and tsunamis battered the northern coasts of Crete. The town of Akrotiri — preserved Pompeii-like under metres of pumice, with multi-storey houses and exquisite frescoes of swallows and the 'Spring Fresco' — appears to have been evacuated before the climactic event. The eruption left climatic traces in tree-rings as far as Ireland and California.",
            el: "Σύγχρονες χρονολογήσεις με άνθρακα-14 τοποθετούν την έκρηξη γύρω στο 1600-1620 π.Χ.· κάποιες αιγυπτιοκεντρικές χρονολογήσεις υποστηρίζουν το 1500 π.Χ. περίπου. Η πλίνια στήλη έφτασε τη στρατόσφαιρα και τσουνάμι χτύπησαν τις βόρειες ακτές της Κρήτης. Η πόλη του Ακρωτηρίου — διατηρημένη σαν Πομπηία κάτω από μέτρα ελαφρόπετρας, με πολυώροφα σπίτια και θαυμάσιες τοιχογραφίες χελιδονιών και την «Άνοιξη» — φαίνεται ότι εκκενώθηκε πριν από την κορυφαία έκρηξη. Η έκρηξη άφησε κλιματικά ίχνη σε δακτυλίους δέντρων ως την Ιρλανδία και την Καλιφόρνια."
          },
          category: "other"
        }
      ]
    },
    {
      year: -1600,
      era: {
        en: "Shaft Grave Era",
        el: "Εποχή των Λακκοειδών Τάφων"
      },
      events: [
        {
          title: {
            en: "Mycenae's Shaft Graves",
            el: "Λακκοειδείς Τάφοι των Μυκηνών"
          },
          description: {
            en: "Spectacularly rich shaft graves at Mycenae signal the rise of warrior elites on the Greek mainland.",
            el: "Εξαιρετικά πλούσιοι λακκοειδείς τάφοι στις Μυκήνες σηματοδοτούν την άνοδο πολεμικών ελίτ στην ηπειρωτική Ελλάδα."
          },
          extendedDescription: {
            en: "Excavated by Heinrich Schliemann in 1876 and a later team at Grave Circle B, the Mycenaean shaft graves contained the gold death masks (including the so-called 'Mask of Agamemnon'), inlaid daggers, amber from the Baltic, and Egyptian ostrich eggs. The contents reveal a militarised, outward-looking elite drawing on a vast Bronze Age trade network — and asserting itself in monumental burials a century before any palace was built.",
            el: "Ανεσκαμμένοι από τον Ερρίκο Σλήμαν το 1876 και αργότερα στον ταφικό κύκλο Β, οι μυκηναϊκοί λακκοειδείς τάφοι περιείχαν χρυσές νεκρικές προσωπίδες (μεταξύ τους η λεγόμενη «προσωπίδα του Αγαμέμνονα»), εγχειρίδια με ένθετες παραστάσεις, ήλεκτρο από τη Βαλτική και αιγυπτιακά αυγά στρουθοκαμήλου. Τα ευρήματα αποκαλύπτουν μια στρατιωτικοποιημένη, εξωστρεφή ελίτ που αξιοποιούσε ένα τεράστιο δίκτυο εμπορίου της Εποχής του Χαλκού και αυτοεπιβαλλόταν με μνημειακές ταφές αιώνα πριν χτιστεί οποιοδήποτε ανάκτορο."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/MaskeAgamemnon.JPG?width=1024",
            alt: {
              en: "The 'Mask of Agamemnon', gold funerary mask from Shaft Grave V at Mycenae (c. 1550 BC)",
              el: "Η «Προσωπίδα του Αγαμέμνονα», χρυσή νεκρική προσωπίδα από τον Λακκοειδή Τάφο V των Μυκηνών (περ. 1550 π.Χ.)"
            },
            credit: "National Archaeological Museum of Athens, via Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: -1500,
      era: {
        en: "Late Minoan IB",
        el: "Υστερομινωική ΙΒ"
      },
      events: [
        {
          title: {
            en: "The Marine Style flourishes",
            el: "Άνθηση της Θαλάσσιας Τεχνοτροπίας"
          },
          description: {
            en: "Late Minoan IB potters cover ceramic vessels with octopuses, argonauts, and dolphins — the so-called 'Marine Style', the high point of Aegean naturalism.",
            el: "Οι κεραμείς της Υστερομινωικής ΙΒ καλύπτουν τα αγγεία με χταπόδια, ναυτίλους και δελφίνια — η λεγόμενη «Θαλάσσια Τεχνοτροπία», η κορυφαία στιγμή του αιγαιακού νατουραλισμού."
          },
          extendedDescription: {
            en: "The Marine Style flourished briefly across Crete and the Cyclades. Its masterpiece, the octopus stirrup-jar from Gournia, wraps eight tentacles around the entire body of the vase. The fashion spread to Mycenaean workshops on the mainland and travelled with Aegean trade as far as Cyprus and the Levant. Late Minoan IB ended in a wave of destructions across Crete around 1450 BC, often linked to the Mycenaean takeover of Knossos.",
            el: "Η Θαλάσσια Τεχνοτροπία άκμασε για λίγο στην Κρήτη και τις Κυκλάδες. Το αριστούργημά της, ο ψευδόστομος αμφορέας με χταπόδι από τη Γουρνιά, τυλίγει οκτώ πλοκάμια γύρω από όλο το σώμα του αγγείου. Η μόδα διαδόθηκε σε μυκηναϊκά εργαστήρια της ηπειρωτικής χώρας και ταξίδεψε με το αιγαιακό εμπόριο ως την Κύπρο και την Εγγύς Ανατολή. Η Υστερομινωική ΙΒ τερματίστηκε με ένα κύμα καταστροφών στην Κρήτη γύρω στο 1450 π.Χ., που συχνά συνδέεται με τη μυκηναϊκή κατάληψη της Κνωσού."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -1450,
      era: {
        en: "Mycenaean Ascendancy",
        el: "Άνοδος των Μυκηναίων"
      },
      events: [
        {
          title: {
            en: "Destruction of Minoan palaces; Mycenaeans take Knossos",
            el: "Καταστροφή των μινωικών ανακτόρων· Οι Μυκηναίοι καταλαμβάνουν την Κνωσό"
          },
          description: {
            en: "All major Minoan palaces except Knossos are destroyed. Knossos comes under Mycenaean Greek control, and Linear B (recording an early form of Greek) appears.",
            el: "Όλα τα κύρια μινωικά ανάκτορα εκτός από την Κνωσό καταστρέφονται. Η Κνωσός περνά υπό μυκηναϊκή ελληνική κυριαρχία και εμφανίζεται η Γραμμική Β (που καταγράφει πρώιμη μορφή ελληνικής)."
          },
          extendedDescription: {
            en: "The collapse of the Minoan thalassocracy remains debated — earthquakes, the after-effects of Thera, internal revolt, and Mycenaean invasion have all been proposed. What is clear is that by 1450 BC Knossos was administered in Linear B, an adapted Minoan script that recorded Greek. Mycenaean warriors, palaces, and pottery styles spread across the Aegean: from Miletus on the Anatolian coast to Cyprus and the Levant.",
            el: "Η κατάρρευση της μινωικής θαλασσοκρατίας παραμένει αντικείμενο συζήτησης — έχουν προταθεί σεισμοί, οι συνέπειες της έκρηξης της Θήρας, εσωτερικές εξεγέρσεις και μυκηναϊκή εισβολή. Ό,τι είναι σαφές είναι ότι μέχρι το 1450 π.Χ. η Κνωσός διοικούνταν στη Γραμμική Β, μια προσαρμοσμένη μινωική γραφή που κατέγραφε ελληνικά. Μυκηναίοι πολεμιστές, ανάκτορα και κεραμικοί ρυθμοί εξαπλώθηκαν στο Αιγαίο: από τη Μίλητο στις ακτές της Μικράς Ασίας ως την Κύπρο και την Εγγύς Ανατολή."
          },
          category: "military"
        }
      ]
    },
    {
      year: -1350,
      era: {
        en: "Mycenaean Palatial Era",
        el: "Μυκηναϊκή Ανακτορική Εποχή"
      },
      events: [
        {
          title: {
            en: "Apogee of Mycenaean palatial civilization",
            el: "Ακμή της μυκηναϊκής ανακτορικής κοινωνίας"
          },
          description: {
            en: "Citadels at Mycenae, Tiryns, Pylos, and Thebes administer the Greek mainland. Cyclopean walls, tholos tombs, and Linear B archives flourish.",
            el: "Οι ακροπόλεις των Μυκηνών, της Τίρυνθας, της Πύλου και της Θήβας διοικούν την ηπειρωτική Ελλάδα. Ακμάζουν τα κυκλώπεια τείχη, οι θολωτοί τάφοι και τα αρχεία της Γραμμικής Β."
          },
          extendedDescription: {
            en: "Each palace was ruled by a wanax (king) supported by a lawagetas (war leader), priests, and a dense bureaucracy that recorded chariot inventories, perfume production, and offerings to a recognisably Greek pantheon — Zeus, Poseidon, Hera, Hermes, and a goddess called di-wo-nu-so (Dionysos). Palatial workshops produced bronze armour, ivory inlays, and the inlaid daggers and golden cups that would later inspire Homer's descriptions of heroic gear.",
            el: "Κάθε ανάκτορο κυβερνούσε ένας Άναξ (ϝάναξ), υποστηριζόμενος από έναν Λαϝαγέτα (πολέμαρχο), ιερείς και μια πυκνή γραφειοκρατία που κατέγραφε άρματα, παραγωγή αρωμάτων και προσφορές σε ένα αναγνωρίσιμα ελληνικό πάνθεον — Δία, Ποσειδώνα, Ήρα, Ερμή και μια θεά αποκαλούμενη di-wo-nu-so (Διόνυσο). Τα ανακτορικά εργαστήρια παρήγαγαν χάλκινες πανοπλίες, ένθετα ελεφαντοστού και τα διακοσμημένα εγχειρίδια και χρυσά κύπελλα που αργότερα θα ενέπνεαν τις ομηρικές περιγραφές του ηρωικού οπλισμού."
          },
          category: "political"
        }
      ]
    },
    {
      year: -1300,
      era: {
        en: "Cyclopean Fortifications",
        el: "Κυκλώπεια Οχύρωση"
      },
      events: [
        {
          title: {
            en: "The Lion Gate of Mycenae",
            el: "Η Πύλη των Λεόντων στις Μυκήνες"
          },
          description: {
            en: "The Lion Gate is built at Mycenae as the citadel's Cyclopean walls are extended; Tiryns, Midea, and Athens fortify in parallel.",
            el: "Στις Μυκήνες χτίζεται η Πύλη των Λεόντων ενώ τα κυκλώπεια τείχη της ακρόπολης επεκτείνονται· η Τίρυνς, η Μιδέα και η Αθήνα οχυρώνονται παράλληλα."
          },
          extendedDescription: {
            en: "The Lion Gate, with its 20-tonne lintel and triangular relief of two heraldic lions flanking a column, is the oldest monumental sculpture in mainland Europe. Around the same time the citadels at Tiryns, Midea, Gla in Boeotia, and the Acropolis of Athens were enclosed in massive 'Cyclopean' walls of unmortared boulders — so called because later Greeks could not believe mortals had moved the stones. The wave of fortification, together with hidden underground cisterns at Mycenae and Athens, suggests rising insecurity across the late 13th-century Aegean.",
            el: "Η Πύλη των Λεόντων, με το υπέρθυρο των 20 τόνων και το τριγωνικό ανάγλυφο δύο εραλδικών λεόντων εκατέρωθεν ενός κίονα, είναι η αρχαιότερη μνημειώδης γλυπτική στην ηπειρωτική Ευρώπη. Την ίδια εποχή οι ακροπόλεις στην Τίρυνθα, τη Μιδέα, τη Γλα της Βοιωτίας και την Ακρόπολη των Αθηνών περικλείονταν με τεράστια «κυκλώπεια» τείχη από ογκόλιθους χωρίς κονίαμα — αποκαλούμενα έτσι επειδή μεταγενέστεροι Έλληνες δεν πίστευαν ότι θνητοί μπορούσαν να μετακινήσουν τους λίθους. Το κύμα οχύρωσης, μαζί με κρυφές υπόγειες δεξαμενές στις Μυκήνες και στην Αθήνα, υποδηλώνει αυξανόμενη ανασφάλεια στο Αιγαίο του ύστερου 13ου αιώνα."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Lions-Gate-Mycenae.jpg?width=1024",
            alt: {
              en: "The Lion Gate, the main entrance to the citadel of Mycenae (c. 1250 BC)",
              el: "Η Πύλη των Λεόντων, η κύρια είσοδος της ακρόπολης των Μυκηνών (περ. 1250 π.Χ.)"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: -1250,
      era: {
        en: "Late Mycenaean Era",
        el: "Ύστερη Μυκηναϊκή Εποχή"
      },
      events: [
        {
          title: {
            en: "Traditional date of the Trojan War",
            el: "Παραδοσιακή χρονολογία του Τρωικού Πολέμου"
          },
          description: {
            en: "Around this time, ancient tradition places the Achaean expedition against Troy. Troy VI/VIIa is destroyed in roughly the same period.",
            el: "Περίπου εκείνη την εποχή η αρχαία παράδοση τοποθετεί την αχαϊκή εκστρατεία κατά της Τροίας. Η Τροία VI/VIIa καταστρέφεται περίπου την ίδια περίοδο."
          },
          extendedDescription: {
            en: "The historical kernel of the Iliad — if it has one — most likely dates to the 13th century BC, when Hittite tablets refer to a kingdom of Ahhiyawa (almost certainly the Mycenaean Achaeans) interfering in western Anatolia and to a city of Wilusa (Ilios/Troy) on the same coast. Archaeologically, Troy VIIa was destroyed by fire around 1180 BC. Whether the conflict resembled Homer's epic is debated, but the geography and political setting fit the Late Bronze Age remarkably well.",
            el: "Ο ιστορικός πυρήνας της Ιλιάδας — αν υπάρχει — πιθανότατα ανήκει στον 13ο αιώνα π.Χ., όταν χιττιτικές πινακίδες αναφέρονται σε βασίλειο Αχιγιάβα (σχεδόν σίγουρα τους μυκηναίους Αχαιούς) που ανακατεύεται στη δυτική Ανατολία και σε μια πόλη Wilusa (Ίλιος/Τροία) στην ίδια ακτή. Αρχαιολογικά, η Τροία VIIa καταστράφηκε από πυρκαγιά γύρω στο 1180 π.Χ. Αν η σύγκρουση έμοιαζε με το ομηρικό έπος είναι αμφισβητούμενο, όμως η γεωγραφία και το πολιτικό σκηνικό ταιριάζουν αξιοσημείωτα με την Ύστερη Εποχή του Χαλκού."
          },
          category: "military"
        }
      ]
    },
    {
      year: -1200,
      era: {
        en: "Bronze Age Collapse",
        el: "Κατάρρευση της Εποχής του Χαλκού"
      },
      events: [
        {
          title: {
            en: "Destruction of the Mycenaean palaces",
            el: "Καταστροφή των μυκηναϊκών ανακτόρων"
          },
          description: {
            en: "Pylos, Mycenae, Tiryns, and Thebes burn. Within a generation, palatial bureaucracy, Linear B writing, and long-distance trade collapse across the eastern Mediterranean.",
            el: "Η Πύλος, οι Μυκήνες, η Τίρυνς και η Θήβα παραδίδονται στις φλόγες. Μέσα σε μια γενιά, η ανακτορική γραφειοκρατία, η Γραμμική Β και το εμπόριο μεγάλων αποστάσεων καταρρέουν σε όλη την ανατολική Μεσόγειο."
          },
          extendedDescription: {
            en: "The collapse around 1200-1180 BC was a system-wide catastrophe that toppled the Hittite Empire, ended the Mycenaean palaces, and emptied great cities like Ugarit and Hattusa. Causes likely combined drought, earthquakes, internal revolt, the migrations of the so-called 'Sea Peoples', and the brittleness of palace economies dependent on long supply chains. In Greece, Pylos's last Linear B tablets record frantic preparations against a coastal threat — and were baked hard by the very fire that destroyed the palace, paradoxically preserving them.",
            el: "Η κατάρρευση του 1200-1180 π.Χ. ήταν μια συστημική καταστροφή που ανέτρεψε τη Χιττιτική Αυτοκρατορία, τερμάτισε τα μυκηναϊκά ανάκτορα και άδειασε μεγάλες πόλεις όπως η Ουγκαρίτ και η Χαττούσα. Τα αίτια πιθανότατα συνδύαζαν ξηρασία, σεισμούς, εσωτερικές εξεγέρσεις, τις μετακινήσεις των λεγόμενων «Λαών της Θάλασσας» και την ευθραυστότητα ανακτορικών οικονομιών εξαρτημένων από μακρές αλυσίδες εφοδιασμού. Στην Ελλάδα, οι τελευταίες πινακίδες Γραμμικής Β της Πύλου καταγράφουν πυρετώδεις προετοιμασίες απέναντι σε παράκτια απειλή — και ψήθηκαν από την ίδια τη φωτιά που κατέστρεψε το ανάκτορο, διασώζοντάς τες παραδόξως."
          },
          category: "military"
        }
      ]
    },
    {
      year: -1180,
      era: {
        en: "Sea Peoples",
        el: "Λαοί της Θάλασσας"
      },
      events: [
        {
          title: {
            en: "Troy VIIa burns; Sea Peoples ravage the eastern Mediterranean",
            el: "Η Τροία VIIa καίγεται· οι Λαοί της Θάλασσας λεηλατούν την ανατολική Μεσόγειο"
          },
          description: {
            en: "Troy VIIa is destroyed by fire. Pharaoh Ramesses III repels a coalition of 'Sea Peoples' on the Egyptian Delta, and the Hittite capital Hattusa is abandoned around the same time.",
            el: "Η Τροία VIIa καταστρέφεται από φωτιά. Ο Φαραώ Ραμσής Γ' αποκρούει συνασπισμό «Λαών της Θάλασσας» στο Δέλτα του Νείλου, ενώ περίπου την ίδια εποχή εγκαταλείπεται η χιττιτική πρωτεύουσα Χαττούσα."
          },
          extendedDescription: {
            en: "In his eighth year (c. 1177 BC by the conventional Egyptian chronology), Ramesses III recorded a great victory at the mouths of the Nile over the Peleset, Tjekker, Shekelesh, Denyen, and Weshesh — peoples who had already destroyed the Hittites and sacked Ugarit on the Syrian coast. Some of these names echo later Aegean ones (Peleset → Philistines; Denyen → Danaoi). Whether the Sea Peoples were a cause or a symptom of the wider collapse, by the end of the 12th century BC every major Late Bronze Age palace from Knossos to Hattusa was either ruined or much reduced.",
            el: "Στο όγδοο έτος της βασιλείας του (περ. 1177 π.Χ. κατά τη συμβατική αιγυπτιακή χρονολόγηση), ο Ραμσής Γ' κατέγραψε μεγάλη νίκη στις εκβολές του Νείλου εναντίον των Πελεσέτ, Τζεκέρ, Σεκελές, Ντενιέν και Ουεσές — λαών που είχαν ήδη καταστρέψει τους Χιττίτες και λεηλατήσει την Ουγκαρίτ στις συριακές ακτές. Κάποια από αυτά τα ονόματα παραπέμπουν σε μεταγενέστερα αιγαιακά (Πελεσέτ → Φιλισταίοι· Ντενιέν → Δαναοί). Είτε αιτία είτε σύμπτωμα της ευρύτερης κατάρρευσης, μέχρι το τέλος του 12ου αιώνα π.Χ. κάθε μεγάλο ανάκτορο της Ύστερης Εποχής του Χαλκού από την Κνωσό ως τη Χαττούσα ήταν είτε ερειπωμένο είτε σημαντικά συρρικνωμένο."
          },
          category: "military"
        }
      ]
    },
    {
      year: -1100,
      era: {
        en: "Post-Palatial Period",
        el: "Μετα-ανακτορική Περίοδος"
      },
      events: [
        {
          title: {
            en: "End of the Bronze Age",
            el: "Τέλος της Εποχής του Χαλκού"
          },
          description: {
            en: "The last Mycenaean centres fade. Greece enters the Early Iron Age — the so-called 'Greek Dark Ages' — with sharply reduced population, lost writing, and new burial customs.",
            el: "Τα τελευταία μυκηναϊκά κέντρα σβήνουν. Η Ελλάδα εισέρχεται στην Πρώιμη Εποχή του Σιδήρου — τους λεγόμενους «Ελληνικούς Σκοτεινούς Αιώνες» — με δραματικά μειωμένο πληθυσμό, χαμένη γραφή και νέα ταφικά έθιμα."
          },
          extendedDescription: {
            en: "By 1100 BC the Aegean had lost roughly three quarters of its known settlements. Iron metallurgy spread, partly because tin had become hard to obtain. Refugee movements reshaped the map: Ionians moved across to the Anatolian coast (founding cities like Miletus and Ephesus), Aeolians to Lesbos and the Troad, and Dorians settled in the Peloponnese, Crete, and the southern islands. From this fragmented world the Geometric, Archaic, and Classical Greek civilizations would re-emerge over the following centuries.",
            el: "Μέχρι το 1100 π.Χ. το Αιγαίο είχε χάσει περίπου τα τρία τέταρτα των γνωστών οικισμών του. Η σιδηροτεχνία εξαπλώθηκε, εν μέρει επειδή ο κασσίτερος είχε γίνει δυσεύρετος. Προσφυγικά κινήματα αναδιαμόρφωσαν τον χάρτη: οι Ίωνες πέρασαν στις ακτές της Μικράς Ασίας (ιδρύοντας πόλεις όπως η Μίλητος και η Έφεσος), οι Αιολείς στη Λέσβο και την Τρωάδα, και οι Δωριείς εγκαταστάθηκαν στην Πελοπόννησο, την Κρήτη και τα νότια νησιά. Από αυτόν τον κατακερματισμένο κόσμο θα αναδυόταν στους επόμενους αιώνες ο Γεωμετρικός, Αρχαϊκός και Κλασικός ελληνικός πολιτισμός."
          },
          category: "cultural"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
