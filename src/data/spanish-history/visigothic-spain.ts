/** Visigothic Spain — Βισιγοτθική Ισπανία · Spanish History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const VISIGOTHIC_SPAIN = {
  id: "visigothic-spain" as const,
  label: {
    en: "Visigothic Spain",
    el: "Βισιγοτθική Ισπανία"
  },
  supertitle: {
    en: "Regnum Gothorum",
    el: "Βασίλειο των Γότθων"
  },
  title: {
    en: "Visigothic Spain",
    el: "Βισιγοτθική Ισπανία"
  },
  subtitle: {
    en: "From the federate settlement of the Goths in Aquitaine and the long migration into Iberia after Vouillé through Leovigild's consolidation, Reccared's conversion to Catholicism, the Byzantine province of Spania, the encyclopaedic learning of Isidore of Seville and the great Councils of Toledo, the common law of the Liber Iudiciorum and the anointing of Wamba, to the civil war of Roderic and Tariq ibn Ziyad's crossing at Gibraltar. Slide across three centuries to read the major events that turned the Visigothic kingdom into Spain and ended it at Guadalete.",
    el: "Από την ομόσπονδη εγκατάσταση των Γότθων στην Ακουιτανία και τη μακρά μετανάστευση στην Ιβηρική μετά το Βουιγιέ, μέσα από την εδραίωση του Λεοβίγιλδου, τη μεταστροφή του Ρεκαρέδου στον καθολικισμό, τη βυζαντινή επαρχία της Σπάνιας, την εγκυκλοπαιδική παιδεία του Ισιδώρου της Σεβίλλης και τις μεγάλες Συνόδους του Τολέδου, το κοινό δίκαιο του Liber Iudiciorum και τη χρίση του Βάμβα, ως τον εμφύλιο του Ρόδερικ και τη διάβαση του Τάρικ ιμπν Ζιγιάντ στο Γιβραλτάρ. Μετακινηθείτε ανάμεσα σε τρεις αιώνες για να διαβάσετε τα γεγονότα που μετέτρεψαν το βισιγοτθικό βασίλειο σε Ισπανία και το τερμάτισαν στον Γουαδαλέτε."
  },
  menuDescription: {
    en: "The Visigothic kingdom from Vouillé to Guadalete, where it fell to the armies of Islam.",
    el: "Το Βισιγοτθικό βασίλειο από το Βουιγιέ ως το Γουαδαλέτε, όπου έπεσε στους στρατούς του Ισλάμ."
  },
  footerLabel: {
    en: "Visigothic Spain · 5th century – 711 CE",
    el: "Βισιγοτθική Ισπανία · 5ος αιώνας – 711 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Visigothic Spain",
    el: "Βισιγοτθική Ισπανία"
  },
  theme: THEMES.violet,
  timeline: [
    {
      year: 418,
      era: {
        en: "Federate Goths",
        el: "Ομόσπονδοι Γότθοι"
      },
      events: [
        {
          title: {
            en: "The Goths settled in Aquitaine",
            el: "Η εγκατάσταση των Γότθων στην Ακουιτανία"
          },
          description: {
            en: "By treaty with the patrician Constantius, the Visigoths under Wallia abandon their Iberian campaign against the Vandals and Alans and are settled as federates of the empire across Aquitania Secunda, with their seat at Tolosa.",
            el: "Με συνθήκη με τον πατρίκιο Κωνστάντιο, οι Βισιγότθοι υπό τον Βαλλία εγκαταλείπουν την εκστρατεία τους στην Ιβηρική εναντίον των Βανδάλων και των Αλανών και εγκαθίστανται ως ομόσπονδοι της αυτοκρατορίας στην Ακουιτανία Σεκούνδα, με έδρα την Τόλοσα."
          },
          extendedDescription: {
            en: "The settlement, recorded by Hydatius and Prosper, gave Rome a mobile field army under Gothic command and gave the Goths land of their own — vineyards along the Garonne in exchange for a generation of campaigning in the imperial service. From Tolosa their kings would intervene repeatedly in Hispania, smashing the Silings and Alans, harrying the Suevi, and by mid-century all but governing the diocese in the emperor's name.",
            el: "Η εγκατάσταση, που καταγράφει ο Υδάτιος και ο Πρόσπερος, έδωσε στη Ρώμη έναν κινητό στρατό υπό γοτθική διοίκηση και στους Γότθους δική τους γη — αμπελώνες κατά μήκος του Γαρούνα με αντάλλαγμα μια γενιά εκστρατειών στην αυτοκρατορική υπηρεσία. Από την Τόλοσα οι βασιλείς τους θα παρενέβαιναν επανειλημμένα στην Ιβηρική, συντρίβοντας τους Σίλιγγους και τους Αλανούς, παρενοχλώντας τους Σουήβους, και ως τα μέσα του αιώνα κυβερνώντας στην ουσία τη διοίκηση εξ ονόματος του αυτοκράτορα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 475,
      era: {
        en: "Kingdom of Toulouse",
        el: "Βασίλειο της Τολόσας"
      },
      events: [
        {
          title: {
            en: "Euric throws off Roman authority",
            el: "Ο Ευρικός αποτινάζει τη ρωμαϊκή εξουσία"
          },
          description: {
            en: "Euric repudiates the last formal ties to the empire, occupies the imperial city of Arles, and by treaty wrings recognition of a sovereign Visigothic kingdom from Provence to the Atlantic — including most of Hispania.",
            el: "Ο Ευρικός αποκηρύσσει τους τελευταίους τυπικούς δεσμούς με την αυτοκρατορία, καταλαμβάνει την αυτοκρατορική πόλη της Αρλ και με συνθήκη αποσπά την αναγνώριση κυρίαρχου Βισιγοτθικού βασιλείου από την Προβηγκία ως τον Ατλαντικό — περιλαμβανομένου του μεγαλύτερου μέρους της Ιβηρικής."
          },
          extendedDescription: {
            en: "Within a year the Western Roman emperor Romulus Augustulus would be deposed in Ravenna and the western title extinguished. Sidonius Apollinaris, bishop of Clermont-Ferrand, lived through Euric's conquest of the Auvergne and left a vivid portrait of the new king: pious in his Arian way, terrifying in war, surrounded by a court of cultivated Roman secretaries. The Codex Euricianus, the first written Visigothic law, codified the new order in Latin for both Goth and Roman.",
            el: "Μέσα σε ένα χρόνο ο Δυτικός Ρωμαίος αυτοκράτορας Ρωμύλος Αυγουστύλος θα καθαιρούνταν στη Ραβέννα και ο δυτικός τίτλος θα έσβηνε. Ο Σιδώνιος Απολλινάριος, επίσκοπος του Κλερμόν-Φερράν, έζησε την κατάκτηση της Ωβέρνης από τον Ευρικό και άφησε ζωντανή εικόνα του νέου βασιλιά: ευσεβής στον αρειανικό τρόπο του, τρομερός στον πόλεμο, περιστοιχισμένος από αυλή καλλιεργημένων Ρωμαίων γραμματικών. Ο Codex Euricianus, ο πρώτος γραπτός βισιγοτθικός νόμος, κωδικοποίησε τη νέα τάξη στα λατινικά για Γότθους και Ρωμαίους."
          },
          category: "political"
        }
      ]
    },
    {
      year: 507,
      era: {
        en: "Vouillé and after",
        el: "Βουιγιέ και μετά"
      },
      events: [
        {
          title: {
            en: "Clovis crushes Alaric II at Vouillé",
            el: "Ο Χλωδοβίκος συντρίβει τον Αλάριχο Β΄ στο Βουιγιέ"
          },
          description: {
            en: "On a plain near Poitiers the Frankish king Clovis defeats and personally kills Alaric II. The Visigothic kingdom loses its Aquitanian heart and is driven over the Pyrenees into Hispania, where it will remake itself in the next two generations.",
            el: "Σε μια πεδιάδα κοντά στο Πουατιέ ο Φράγκος βασιλιάς Χλωδοβίκος νικά και σκοτώνει ο ίδιος τον Αλάριχο Β΄. Το Βισιγοτθικό βασίλειο χάνει την ακουιτανική του καρδιά και αναγκάζεται να περάσει τα Πυρηναία στην Ιβηρική, όπου θα ανασυγκροτηθεί τις επόμενες δύο γενιές."
          },
          extendedDescription: {
            en: "Only the timely intervention of Alaric's father-in-law Theodoric the Great, king of Ostrogothic Italy, prevented total collapse: an Ostrogothic army secured Septimania, the strip of Mediterranean coast around Narbonne, which remained Visigothic for two more centuries. Alaric's grandson Amalaric grew up at the Ravenna court as Theodoric's ward, while the Goths in Hispania consolidated around Barcino, Emerita, and Toletum — the future Toledo.",
            el: "Μόνο η έγκαιρη παρέμβαση του πεθερού του Αλάριχου, Θεοδώριχου του Μέγα, βασιλιά της Οστρογοτθικής Ιταλίας, απέτρεψε την ολοκληρωτική κατάρρευση: οστρογοτθικός στρατός εξασφάλισε τη Σεπτιμανία, τη μεσογειακή παράκτια ζώνη γύρω από τη Ναρβόννη, η οποία παρέμεινε βισιγοτθική για άλλους δύο αιώνες. Ο εγγονός του Αλάριχου, Αμαλάριχος, μεγάλωσε στην αυλή της Ραβέννας υπό την κηδεμονία του Θεοδώριχου, ενώ οι Γότθοι στην Ιβηρική συγκεντρώθηκαν γύρω από τη Βαρκίνωνα, την Εμέριτα και το Τολέδο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 552,
      era: {
        en: "Byzantine Spania",
        el: "Βυζαντινή Σπάνια"
      },
      events: [
        {
          title: {
            en: "Justinian lands in the south",
            el: "Ο Ιουστινιανός αποβιβάζεται στον νότο"
          },
          description: {
            en: "Invited as an ally by the pretender Athanagild, an army of Justinian under the patrician Liberius lands in south-eastern Hispania and carves out the imperial province of Spania, with capitals at Carthago Spartaria and Malaca.",
            el: "Προσκαλούμενος ως σύμμαχος από τον διεκδικητή Αθαναγίλδο, στρατός του Ιουστινιανού υπό τον πατρίκιο Λιβέριο αποβιβάζεται στη νοτιοανατολική Ιβηρική και αποκόπτει την αυτοκρατορική επαρχία της Σπάνιας, με πρωτεύουσες την Καρθαγένη και τη Μαλάκα."
          },
          extendedDescription: {
            en: "The new province, the westernmost foothold of Justinian's renovatio imperii after Africa and Italy, would survive for some seventy years. From its court at Cartagena came the future bishop Leander of Seville, sent on embassy to Constantinople where he befriended Pope Gregory the Great. Byzantine Spania thus served as a conduit for eastern theological and architectural fashions into the Hispano-Gothic world.",
            el: "Η νέα επαρχία, το δυτικότερο προγεφύρωμα της renovatio imperii του Ιουστινιανού μετά την Αφρική και την Ιταλία, θα επιβίωνε επί εβδομήντα περίπου χρόνια. Από την αυλή της Καρταχένας προήλθε ο μελλοντικός επίσκοπος Λέανδρος της Σεβίλλης, που στάλθηκε σε πρεσβεία στην Κωνσταντινούπολη όπου έγινε φίλος του πάπα Γρηγορίου του Μεγάλου. Η Βυζαντινή Σπάνια λειτούργησε έτσι ως δίαυλος ανατολικών θεολογικών και αρχιτεκτονικών ρευμάτων προς τον ισπανογοτθικό κόσμο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 568,
      era: {
        en: "Leovigild",
        el: "Λεοβίγιλδος"
      },
      events: [
        {
          title: {
            en: "Leovigild ascends the throne",
            el: "Ο Λεοβίγιλδος ανέρχεται στον θρόνο"
          },
          description: {
            en: "The veteran general Leovigild becomes co-king with his brother Liuva and within five years sole ruler. In an eighteen-year reign of campaigns and reform he will weld the disparate Visigothic state into something like a kingdom.",
            el: "Ο έμπειρος στρατηγός Λεοβίγιλδος ανακηρύσσεται συμβασιλέας με τον αδελφό του Λιούβα και μέσα σε πέντε χρόνια μόνος κυρίαρχος. Σε δεκαοκτώ χρόνια εκστρατειών και μεταρρυθμίσεων θα συγκολλήσει το σκόρπιο βισιγοτθικό κράτος σε κάτι που μοιάζει με βασίλειο."
          },
          extendedDescription: {
            en: "Leovigild was the first Visigothic king to adopt the regalia of Constantinople — throne, mantle, crown, and the gold solidus stamped with his own image — to abolish the legal bar on marriages between Goths and Romans, and to fix a permanent royal seat at Toledo. He retook the Basque mountains, broke the rebel duchies of the south, and in 578 founded Recopolis (Reccopolis) for his son Reccared, the only entirely new city of post-Roman Europe whose name and ruins survive.",
            el: "Ο Λεοβίγιλδος ήταν ο πρώτος Βισιγότθος βασιλιάς που υιοθέτησε τα διάσημα της Κωνσταντινούπολης — θρόνο, μανδύα, στέμμα και το χρυσό σολίδο σφραγισμένο με την εικόνα του —, που κατήργησε τη νομική απαγόρευση γάμων μεταξύ Γότθων και Ρωμαίων και που εγκαθίδρυσε μόνιμη βασιλική έδρα στο Τολέδο. Ανακατέλαβε τα όρη των Βάσκων, συνέτριψε τα στασιαστικά δουκάτα του νότου και το 578 ίδρυσε τη Ρεκόπολη για τον γιο του Ρεκαρέδο, τη μοναδική εντελώς νέα πόλη της μεταρωμαϊκής Ευρώπης της οποίας το όνομα και τα ερείπια έχουν διασωθεί."
          },
          category: "political"
        }
      ]
    },
    {
      year: 585,
      era: {
        en: "End of the Suevi",
        el: "Τέλος των Σουήβων"
      },
      events: [
        {
          title: {
            en: "Leovigild absorbs the Suevic kingdom",
            el: "Ο Λεοβίγιλδος προσαρτά το Σουηβικό βασίλειο"
          },
          description: {
            en: "After his rebellious son Hermenegild dies in prison and the Suevic king Audeca takes monastic vows under duress, the kingdom of Gallaecia is annexed to the Visigothic crown. For the first time in two centuries one ruler holds all Iberia.",
            el: "Μετά τον θάνατο του στασιαστή γιου του Ερμενεγίλδου στη φυλακή και την αναγκαστική κουρά του Σουηβού βασιλιά Αουδέκα, το βασίλειο της Γαλλικίας προσαρτάται στη βισιγοτθική κορώνα. Για πρώτη φορά σε δύο αιώνες ένας ηγεμόνας κατέχει ολόκληρη την Ιβηρική."
          },
          extendedDescription: {
            en: "Hermenegild had revolted in 579, converted from Arianism to Catholicism under the influence of his Frankish wife Ingund and of Leander of Seville, and proclaimed himself king at Seville. His war pitted Catholic against Arian, son against father, Roman south against Gothic north; his death was remembered as a martyrdom by Pope Gregory the Great and would haunt the next reign. The Suevic kingdom, founded in 410, vanished into Visigothic Gallaecia.",
            el: "Ο Ερμενεγίλδος είχε στασιάσει το 579, είχε μεταστραφεί από τον αρειανισμό στον καθολικισμό υπό την επιρροή της Φραγκίδας συζύγου του Ινγκούντης και του Λέανδρου της Σεβίλλης και αυτοανακηρύχθηκε βασιλιάς στη Σεβίλλη. Ο πόλεμος του έβαλε καθολικούς κατά αρειανών, γιο κατά πατέρα, ρωμαϊκό νότο κατά γοτθικό βορρά· ο θάνατός του θυμήθηκε ως μαρτύριο από τον πάπα Γρηγόριο τον Μέγα και θα στοίχειωνε την επόμενη βασιλεία. Το Σουηβικό βασίλειο, ιδρυμένο το 410, χάθηκε μέσα στη βισιγοτθική Γαλλικία."
          },
          category: "military"
        }
      ]
    },
    {
      year: 589,
      era: {
        en: "Catholic conversion",
        el: "Καθολική μεταστροφή"
      },
      events: [
        {
          title: {
            en: "The Third Council of Toledo",
            el: "Η Γ΄ Σύνοδος του Τολέδου"
          },
          description: {
            en: "King Reccared, son of Leovigild, publicly abjures Arianism with his nobles and Arian bishops, and the Third Council of Toledo proclaims the Visigothic kingdom Catholic. The rupture of two centuries between Goth and Roman is healed in confession of one creed.",
            el: "Ο βασιλιάς Ρεκαρέδος, γιος του Λεοβίγιλδου, απαρνείται δημόσια τον αρειανισμό μαζί με τους ευγενείς και τους αρειανούς επισκόπους του, και η Γ΄ Σύνοδος του Τολέδου διακηρύσσει τη βισιγοτθική επικράτεια καθολική. Το ρήγμα δύο αιώνων μεταξύ Γότθων και Ρωμαίων κλείνει με την ομολογία ενός δόγματος."
          },
          extendedDescription: {
            en: "Leander of Seville preached the homily of conversion. The conciliar acta, which set the imperial style of Byzantine ceremonial alongside the Filioque clause in the Nicene Creed, would shape Spanish liturgy and law for a thousand years. From now on the councils of Toledo, attended by king, nobility, and episcopate together, function as the consultative organ of the kingdom and the gathering-place of an emerging Hispano-Gothic identity.",
            el: "Ο Λέανδρος της Σεβίλλης εκφώνησε την ομιλία της μεταστροφής. Τα πρακτικά της συνόδου, που εισήγαγαν το αυτοκρατορικό τυπικό του Βυζαντίου μαζί με τη ρήτρα του Filioque στο Σύμβολο της Νίκαιας, θα διαμόρφωναν τη λειτουργία και το δίκαιο της Ισπανίας επί χίλια χρόνια. Έκτοτε οι σύνοδοι του Τολέδου, με τη συμμετοχή του βασιλιά, της ευγενείας και του επισκοπικού σώματος μαζί, λειτουργούν ως συμβουλευτικό όργανο του βασιλείου και τόπος συγκρότησης μιας αναδυόμενης ισπανογοτθικής ταυτότητας."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 624,
      era: {
        en: "Unified kingdom",
        el: "Ενιαίο βασίλειο"
      },
      events: [
        {
          title: {
            en: "Suinthila expels the Byzantines",
            el: "Ο Σουίνθιλας εκδιώκει τους Βυζαντινούς"
          },
          description: {
            en: "King Suinthila reduces the last imperial garrisons in southern Hispania and ends the Byzantine province of Spania. For the first time the Visigothic monarchy rules the whole peninsula, from the Pyrenees to the Strait.",
            el: "Ο βασιλιάς Σουίνθιλας υποτάσσει τις τελευταίες αυτοκρατορικές φρουρές στη νότια Ιβηρική και τερματίζει τη βυζαντινή επαρχία της Σπάνιας. Για πρώτη φορά η βισιγοτθική μοναρχία κυβερνά ολόκληρη τη χερσόνησο, από τα Πυρηναία ως τα Στενά."
          },
          extendedDescription: {
            en: "Isidore of Seville, who wrote his De origine Gothorum to celebrate the achievement, called Suinthila the first king to rule a 'totius Spaniae monarchia' — the first formulation of Spain as a single political entity. The success would prove fragile: Suinthila was deposed by aristocratic conspiracy in 631 and the elective principle reasserted, beginning the political turbulence that would mark the seventh century.",
            el: "Ο Ισίδωρος της Σεβίλλης, που έγραψε το De origine Gothorum για να εξυμνήσει το επίτευγμα, χαρακτήρισε τον Σουίνθιλα ως τον πρώτο βασιλιά που κυβέρνησε «τη μοναρχία ολόκληρης της Ισπανίας» — την πρώτη διατύπωση της Ισπανίας ως ενιαίας πολιτικής οντότητας. Η επιτυχία αποδείχθηκε εύθραυστη: ο Σουίνθιλας καθαιρέθηκε από αριστοκρατική συνωμοσία το 631 και αναδείχθηκε εκ νέου η εκλογική αρχή, ξεκινώντας την πολιτική αναταραχή που θα σημάδευε τον έβδομο αιώνα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 636,
      era: {
        en: "Isidorian Spain",
        el: "Ισιδώρεια Ισπανία"
      },
      events: [
        {
          title: {
            en: "The death of Isidore of Seville",
            el: "Ο θάνατος του Ισιδώρου της Σεβίλλης"
          },
          description: {
            en: "On 4 April, the archbishop of Seville dies after almost forty years on his throne, leaving the encyclopaedic Etymologiae and a Hispano-Gothic Church organised, learned, and the intellectual heart of the Latin West.",
            el: "Στις 4 Απριλίου, ο αρχιεπίσκοπος της Σεβίλλης πεθαίνει ύστερα από σχεδόν σαράντα χρόνια στον θρόνο του, αφήνοντας τις εγκυκλοπαιδικές Ετυμολογίες και μια ισπανογοτθική Εκκλησία οργανωμένη, καλλιεργημένη και την πνευματική καρδιά της λατινικής Δύσης."
          },
          extendedDescription: {
            en: "Isidore's twenty books of Etymologiae preserved the entire intellectual inheritance of antiquity for the medieval West: from grammar and rhetoric through medicine, law, and zoology to clothing and furniture. In the centuries before Cassiodorus reached northern monasteries it was Isidore who taught the Latin Middle Ages to read. The Fourth Council of Toledo, which he presided over in 633, gave the kingdom of Spain its mature constitutional shape — a Catholic king, anointed and bound by canon law, ruling in concert with the bishops.",
            el: "Τα είκοσι βιβλία των Ετυμολογιών του Ισιδώρου διέσωσαν για τη μεσαιωνική Δύση ολόκληρη την πνευματική κληρονομιά της αρχαιότητας: από τη γραμματική και τη ρητορική, μέσα από την ιατρική, τη νομική και τη ζωολογία, ως τα ενδύματα και τα έπιπλα. Στους αιώνες πριν φτάσει ο Κασσιόδωρος στα μοναστήρια του βορρά, ήταν ο Ισίδωρος που δίδαξε τον λατινικό μεσαίωνα ν’ αναγνώσκει. Η Δ΄ Σύνοδος του Τολέδου, στην οποία προήδρευσε το 633, χάρισε στο βασίλειο της Ισπανίας την ώριμη συνταγματική μορφή του — ένας καθολικός βασιλιάς, χρισμένος και δεσμευμένος από τους κανόνες, που κυβερνά σε συμφωνία με τους επισκόπους."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 654,
      era: {
        en: "Common law",
        el: "Κοινό δίκαιο"
      },
      events: [
        {
          title: {
            en: "The Liber Iudiciorum",
            el: "Ο Liber Iudiciorum"
          },
          description: {
            en: "King Recceswinth promulgates the Liber Iudiciorum, abolishing the legal distinction between Goth and Roman and binding all subjects of the kingdom under one written code.",
            el: "Ο βασιλιάς Ρεκκεσουίνθος εκδίδει τον Liber Iudiciorum, καταργώντας τη νομική διάκριση μεταξύ Γότθου και Ρωμαίου και δεσμεύοντας όλους τους υπηκόους του βασιλείου σε έναν γραπτό κώδικα."
          },
          extendedDescription: {
            en: "Built on Euric's and Leovigild's earlier codes but vastly more comprehensive, the Liber would govern the Christian kingdoms of Spain through the long Reconquista as the Fuero Juzgo, and was still being cited in Castilian courts in the fifteenth century. Its sophistication — judicial procedure, family law, slave-owning, and minorities all systematically regulated — testifies to a Visigothic state of real bureaucratic depth, even as the politics of the seventh century turned ever more murderous.",
            el: "Χτισμένος πάνω στους παλαιότερους κώδικες του Ευρικού και του Λεοβίγιλδου, αλλά πολύ πιο πλήρης, ο Liber θα κυβερνούσε τα χριστιανικά βασίλεια της Ισπανίας στη μακρά Reconquista ως ο Fuero Juzgo, και εξακολουθούσε να επικαλείται στα καστιλιανικά δικαστήρια τον 15ο αιώνα. Η πολυπλοκότητά του — δικονομία, οικογενειακό δίκαιο, δουλεία, μειονότητες, όλα συστηματικά ρυθμισμένα — μαρτυρεί ένα βισιγοτθικό κράτος γραφειοκρατικού βάθους, την ίδια στιγμή που η πολιτική του έβδομου αιώνα γινόταν όλο και πιο αιματηρή."
          },
          category: "political"
        }
      ]
    },
    {
      year: 672,
      era: {
        en: "Wamba",
        el: "Βάμβας"
      },
      events: [
        {
          title: {
            en: "Wamba anointed at Toledo",
            el: "Ο Βάμβας χρίεται στο Τολέδο"
          },
          description: {
            en: "On the death of Recceswinth in his villa at Gérticos, the magnates elect the elderly aristocrat Wamba, who is solemnly anointed with holy chrism in the church of Saint Mary at Toledo — the first attested royal anointing in Latin Europe.",
            el: "Με τον θάνατο του Ρεκκεσουίνθου στην έπαυλή του στο Χερτίκος, οι μεγιστάνες εκλέγουν τον γηραιό αριστοκράτη Βάμβα, ο οποίος χρίεται πανηγυρικά με το άγιο μύρο στον ναό της Παναγίας του Τολέδου — η πρώτη μαρτυρημένη βασιλική χρίση στη λατινική Ευρώπη."
          },
          extendedDescription: {
            en: "The biographer Julian of Toledo described how a column of smoke arose from Wamba's head at the unction — a sign, said the chroniclers, of divine election. Wamba marched at once into Septimania to crush the rebellion of Count Paul, whose followers had crowned themselves at Nîmes. The Hispano-Gothic ritual would be inherited by the Carolingians, by way of the Frankish Church's debts to Toledo, and through them by all the consecrated monarchies of the medieval West.",
            el: "Ο βιογράφος Ιουλιανός του Τολέδου περιέγραψε πώς από το κεφάλι του Βάμβα κατά τη χρίση υψώθηκε στήλη καπνού — σημάδι, λέει ο χρονογράφος, θείας εκλογής. Ο Βάμβας βάδισε αμέσως στη Σεπτιμανία για να συντρίψει την εξέγερση του κόμη Παύλου, του οποίου οι οπαδοί είχαν αυτοστεφθεί στη Νιμ. Το ισπανογοτθικό τυπικό θα το κληρονομούσαν οι Καρολίδες, μέσω των οφειλών της φραγκικής Εκκλησίας στο Τολέδο, και μέσω αυτών όλες οι καθιερωμένες μοναρχίες του μεσαιωνικού δυτικού κόσμου."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 694,
      era: {
        en: "Decline",
        el: "Παρακμή"
      },
      events: [
        {
          title: {
            en: "The Seventeenth Council and the Jews",
            el: "Η ΙΖ΄ Σύνοδος και οι Εβραίοι"
          },
          description: {
            en: "At the Seventeenth Council of Toledo, King Egica accuses the Jewish community of conspiracy with Muslim raiders from across the Strait and orders their property confiscated and their children removed to Christian households.",
            el: "Στη Δέκατη Έβδομη Σύνοδο του Τολέδου, ο βασιλιάς Έγικας κατηγορεί την εβραϊκή κοινότητα για συνωμοσία με μουσουλμάνους επιδρομείς από τα Στενά και διατάζει τη δήμευση των περιουσιών της και τη μετακίνηση των παιδιών της σε χριστιανικά σπίτια."
          },
          extendedDescription: {
            en: "The seventh century had seen one antisemitic measure after another, from Sisebut's forced baptisms of 612–613 through the canons of the Fourth Council. The cumulative effect was to alienate a large, literate, urban population precisely at the moment the monarchy could least afford it. By 711, when the Berber raiders crossed at Tarifa, the Jewish communities of Mérida, Toledo, Córdoba, and Granada would welcome them — or be put in charge of garrisoning the cities after their conquest.",
            el: "Ο έβδομος αιώνας γνώρισε διαδοχικά αντισημιτικά μέτρα, από τους αναγκαστικούς βαπτισμούς του Σισέβουτου το 612–613 ως τους κανόνες της Δ΄ Συνόδου. Το αθροιστικό αποτέλεσμα ήταν η αποξένωση ενός μεγάλου, εγγράμματου, αστικού πληθυσμού ακριβώς τη στιγμή που η μοναρχία λιγότερο μπορούσε να την αντέξει. Το 711, όταν οι Βέρβεροι επιδρομείς πέρασαν τα Στενά στην Ταρίφα, οι εβραϊκές κοινότητες της Μέριδα, του Τολέδου, της Κόρδοβας και της Γρανάδας θα τους υποδέχονταν — ή θα αναλάμβαναν τη φρούρηση των πόλεων μετά την κατάκτηση."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 710,
      era: {
        en: "Civil war",
        el: "Εμφύλιος πόλεμος"
      },
      events: [
        {
          title: {
            en: "The disputed accession of Roderic",
            el: "Η αμφισβητούμενη ανάδειξη του Ρόδερικ"
          },
          description: {
            en: "On the death of King Wittiza, the dux of Baetica Roderic is raised on the shields of his faction at Córdoba. The sons of Wittiza retreat north and the kingdom slides into open civil war on the eve of the Berber crossing.",
            el: "Με τον θάνατο του βασιλιά Βιττίζα, ο δούκας της Βαιτικής Ρόδερικ ανυψώνεται πάνω στις ασπίδες της φατρίας του στην Κόρδοβα. Οι γιοι του Βιττίζα υποχωρούν στον βορρά και το βασίλειο γλιστράει σε ανοιχτό εμφύλιο πόλεμο στις παραμονές της βερβερικής διάβασης."
          },
          extendedDescription: {
            en: "Later Arab and Christian chronicles agree that Roderic spent his first months as king on the Basque frontier and was unable to concentrate his forces in the south. According to the Mozarabic Chronicle of 754, Wittiza's sons appealed for help to the Muslim governor of Tangier, Musa ibn Nusayr — opening the road for the expedition under his Berber freedman Tariq ibn Ziyad in the summer of 711.",
            el: "Μεταγενέστερες αραβικές και χριστιανικές πηγές συμφωνούν ότι ο Ρόδερικ πέρασε τους πρώτους μήνες της βασιλείας του στο σύνορο των Βάσκων και δεν μπόρεσε να συγκεντρώσει τις δυνάμεις του στον νότο. Σύμφωνα με το Μοζαραβικό Χρονικό του 754, οι γιοι του Βιττίζα ζήτησαν βοήθεια από τον μουσουλμάνο διοικητή της Ταγγέρης, Μούσα ιμπν Νουσάυρ — ανοίγοντας τον δρόμο για την εκστρατεία υπό τον βέρβερο απελεύθερό του Τάρικ ιμπν Ζιγιάντ το καλοκαίρι του 711."
          },
          category: "political"
        }
      ]
    },
    {
      year: 711,
      era: {
        en: "End of the Kingdom",
        el: "Τέλος του Βασιλείου"
      },
      events: [
        {
          title: {
            en: "Tariq ibn Ziyad and the Battle of Guadalete",
            el: "Ο Τάρικ ιμπν Ζιγιάντ και η Μάχη του Γουαδαλέτε"
          },
          description: {
            en: "In April the Berber commander Tariq ibn Ziyad crosses the Strait at the rock that would bear his name — Jabal Tariq, Gibraltar — with some seven thousand men. In July his army crushes Roderic at the river Guadalete in Cádiz, and the Visigothic kingdom dissolves in a single summer.",
            el: "Τον Απρίλιο ο Βέρβερος διοικητής Τάρικ ιμπν Ζιγιάντ διασχίζει τα Στενά στον βράχο που θα έπαιρνε το όνομά του — Τζαμπάλ Τάρικ, Γιβραλτάρ — με επτά περίπου χιλιάδες άνδρες. Τον Ιούλιο ο στρατός του συντρίβει τον Ρόδερικ στον ποταμό Γουαδαλέτε στο Κάδιθ, και το βισιγοτθικό βασίλειο διαλύεται σε ένα καλοκαίρι."
          },
          extendedDescription: {
            en: "Roderic's body was never found; only his diadem and his white sandal embroidered with rubies were recovered by the Arabs, according to Ibn Idhari. Tariq pressed inland and took Toledo by autumn. The following spring his master Musa ibn Nusayr crossed in person, and within four years the army of Damascus had reached the Pyrenees. Out of Visigothic Spain emerged al-Andalus — and on a coastal mountain in Asturias, in 718 or 722, a Visigothic noble named Pelagius would begin the Reconquista.",
            el: "Το σώμα του Ρόδερικ δεν βρέθηκε ποτέ· μόνο το διάδημά του και το λευκό σανδάλι του κεντημένο με ρουμπίνια ανακτήθηκαν από τους Άραβες, κατά τον Ιμπν Ιντάρι. Ο Τάρικ προχώρησε στην ενδοχώρα και πήρε το Τολέδο ως το φθινόπωρο. Την επόμενη άνοιξη ο κύριός του Μούσα ιμπν Νουσάυρ διέσχισε ο ίδιος τα Στενά, και μέσα σε τέσσερα χρόνια ο στρατός της Δαμασκού είχε φτάσει στα Πυρηναία. Από τη Βισιγοτθική Ισπανία γεννήθηκε η αλ-Άνδαλους — και σε ένα παράκτιο βουνό της Αστούριας, το 718 ή 722, ένας Βισιγότθος ευγενής με το όνομα Πελάγιος θα ξεκινούσε τη Reconquista."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
