/** Eastern Roman Empire — Ανατολική Ρωμαϊκή Αυτοκρατορία · Greek History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const EASTERN_ROMAN = {
  id: "eastern-roman" as const,
  label: {
    en: "Eastern Roman Empire",
    el: "Ανατολική Ρωμαϊκή Αυτοκρατορία"
  },
  supertitle: {
    en: "Ῥωμανία",
    el: "Ρωμανία"
  },
  title: {
    en: "The Eastern Roman Empire",
    el: "Η Ανατολική Ρωμαϊκή Αυτοκρατορία"
  },
  subtitle: {
    en: "A thousand years of Roman glory from the Bosporus — a timeline of Byzantium from the dedication of Constantinople in 330 AD to the fall of the City in 1453. Slide across the centuries to read the major events of each year.",
    el: "Χίλια χρόνια ρωμαϊκής δόξας από τον Βόσπορο — μια χρονογραμμή του Βυζαντίου από τα εγκαίνια της Κωνσταντινούπολης το 330 μ.Χ. μέχρι την Άλωση της Πόλης το 1453. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα σημαντικότερα γεγονότα κάθε χρονιάς."
  },
  menuDescription: {
    en: "A thousand years of Rome that never fell, ruled from Constantinople.",
    el: "Χίλια χρόνια Ρώμης που δεν έπεσε, με κέντρο την Κωνσταντινούπολη."
  },
  footerLabel: {
    en: "Eastern Roman Empire · 330-1453 AD",
    el: "Ανατολική Ρωμαϊκή Αυτοκρατορία · 330-1453 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Imperial Timeline",
    el: "Αυτοκρατορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Imperial Timeline",
    el: "Η Αυτοκρατορική Χρονογραμμή"
  },
  theme: THEMES.gold,
  timeline: [
    {
      year: 330,
      era: {
        en: "Foundation",
        el: "Ίδρυση"
      },
      events: [
        {
          title: {
            en: "Inauguration of Constantinople",
            el: "Τα εγκαίνια της Κωνσταντινούπολης"
          },
          description: {
            en: "Emperor Constantine the Great dedicates Nova Roma on the Bosporus on 11 May, transforming the Greek city of Byzantion into the new capital of the Roman Empire.",
            el: "Ο αυτοκράτορας Κωνσταντίνος ο Μέγας εγκαινιάζει την Νέα Ρώμη στον Βόσπορο στις 11 Μαΐου, μετατρέποντας την ελληνική πόλη Βυζάντιο στην νέα πρωτεύουσα της Ρωμαϊκής Αυτοκρατορίας."
          },
          extendedDescription: {
            en: "The choice of Byzantion crowned years of strategic deliberation: the site commanded the maritime route between the Aegean and the Black Sea and lay near the empire's threatened Danubian and Persian frontiers. Constantine endowed the city with a senate, a hippodrome, fora, and grand basilicas, populating it with works of art carried from across the Greek East. Although the emperor never proscribed paganism, the new capital was conceived as a Christian foundation, complete with churches dedicated to the apostles and the Holy Wisdom. Modern historians debate whether 330 marks the true beginning of a distinct Eastern Roman polity or merely a shift of imperial residence, but for later Roman tradition the day of dedication was remembered as the city's birthday.",
            el: "Η επιλογή του Βυζαντίου επιστέγασε χρόνια στρατηγικών διεργασιών: η θέση δέσποζε στον θαλάσσιο δρόμο μεταξύ Αιγαίου και Ευξείνου Πόντου και βρισκόταν πλησίον των απειλουμένων δουναβίων και περσικών συνόρων της αυτοκρατορίας. Ο Κωνσταντίνος προίκισε την πόλη με σύγκλητο, ιππόδρομο, φόρα και μεγαλοπρεπείς βασιλικές, εποικίζοντάς την με έργα τέχνης μεταφερμένα από ολόκληρη την ελληνική Ανατολή. Αν και ο αυτοκράτορας ουδέποτε απηγόρευσε τον παγανισμό, η νέα πρωτεύουσα νοήθηκε ως χριστιανικό ίδρυμα, εφοδιασμένη με ναούς αφιερωμένους στους Αποστόλους και την Αγία Σοφία. Οι σύγχρονοι ιστορικοί αμφισβητούν αν το 330 σηματοδοτεί την πραγματική απαρχή ενός διακριτού ανατολικορωμαϊκού κράτους ή απλώς τη μετατόπιση της αυτοκρατορικής έδρας, αλλά για τη μετέπειτα ρωμαϊκή παράδοση η ημέρα των εγκαινίων εθεωρείτο τα γενέθλια της Πόλεως."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/0_Gaius_Flavius_Valerius_Constantinus%2C_Palatino.jpg?width=1024",
            alt: {
              en: "Colossal head of Constantine the Great, Capitoline Museums, Rome",
              el: "Κολοσσιαία κεφαλή του Κωνσταντίνου του Μεγάλου, Καπιτωλινά Μουσεία, Ρώμη"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 337,
      era: {
        en: "Constantinian Dynasty",
        el: "Δυναστεία Κωνσταντίνου"
      },
      events: [
        {
          title: {
            en: "Death of Constantine the Great",
            el: "Ο θάνατος του Κωνσταντίνου του Μεγάλου"
          },
          description: {
            en: "Constantine is baptised on his deathbed and dies near Nicomedia, leaving the empire divided among his three sons.",
            el: "Ο Κωνσταντίνος βαπτίζεται στο κρεβάτι του θανάτου του και πεθαίνει κοντά στη Νικομήδεια, αφήνοντας την αυτοκρατορία χωρισμένη ανάμεσα στους τρεις υιούς του."
          },
          extendedDescription: {
            en: "Constantine received baptism from Eusebius of Nicomedia, a bishop with Arian sympathies, an irony that long troubled later Orthodox writers but reflected the unsettled doctrinal landscape before Nicaea's victory was secured. His death was followed by a bloody dynastic purge in which most of his collateral male relatives were murdered, leaving only the three surviving sons — Constantine II, Constantius II, and Constans — and two younger cousins, the future Gallus and Julian, alive. The empire was partitioned: Constantine II took Gaul, Britain and Spain; Constans, Italy, Illyricum and Africa; Constantius, the wealthier East. The arrangement quickly collapsed into civil war and theological strife, foreshadowing the difficulties that would attend every subsequent imperial succession.",
            el: "Ο Κωνσταντίνος έλαβε το βάπτισμα από τον Ευσέβιο Νικομηδείας, επίσκοπο με αρειανικές κλίσεις, ειρωνεία που μακρόχρονα προβλημάτιζε τους μετέπειτα ορθοδόξους συγγραφείς αλλά αντικατόπτριζε το ασταθές δογματικό τοπίο πριν εδραιωθεί η νίκη της Νικαίας. Τον θάνατό του ακολούθησε αιματηρή δυναστική εκκαθάριση κατά την οποία οι περισσότεροι άρρενες πλάγιοι συγγενείς του εφονεύθησαν, αφήνοντας ζωντανούς μόνον τους τρεις επιζώντες υιούς — Κωνσταντίνο Β΄, Κωνστάντιο Β΄ και Κώνσταντα — και δύο νεαρούς εξαδέλφους, τον μετέπειτα Γάλλο και τον Ιουλιανό. Η αυτοκρατορία διαμοιράσθη: ο Κωνσταντίνος Β΄ έλαβε τη Γαλατία, τη Βρετανία και την Ισπανία· ο Κώνστας την Ιταλία, το Ιλλυρικόν και την Αφρική· ο Κωνστάντιος την πλουσιωτέρα Ανατολή. Ο διακανονισμός κατέρρευσε ταχέως σε εμφύλιο πόλεμο και θεολογικές έριδες, προαναγγέλλοντας τις δυσχέρειες που θα συνώδευαν κάθε μετέπειτα αυτοκρατορική διαδοχή."
          },
          category: "political"
        }
      ]
    },
    {
      year: 361,
      era: {
        en: "Constantinian Dynasty",
        el: "Δυναστεία Κωνσταντίνου"
      },
      events: [
        {
          title: {
            en: "Julian the Apostate becomes sole emperor",
            el: "Ο Ιουλιανός ο Αποστάτης γίνεται αυτοκράτορας"
          },
          description: {
            en: "Julian attempts a revival of classical paganism and Hellenic learning, reversing the Christianisation of the state.",
            el: "Ο Ιουλιανός επιχειρεί την αναβίωση του κλασικού ειδωλολατρικού θρησκεύματος και της ελληνικής παιδείας, αναιρώντας την χριστιανοποίηση του κράτους."
          },
          extendedDescription: {
            en: "Raised a Christian but secretly schooled in Neoplatonism by philosophers such as Maximus of Ephesus, Julian declared his pagan allegiance only after the death of his cousin Constantius II made open profession safe. His religious programme was sophisticated rather than violent: he restored temple endowments, organised the priesthood along ecclesiastical lines, and famously forbade Christians from teaching the classical authors, reasoning that they could not honestly expound gods they rejected. Christian writers branded him 'the Apostate', yet contemporaries such as Ammianus Marcellinus admired his austere life and administrative diligence. His Persian campaign of 363 ended his reign abruptly when he was struck by a spear at Maranga, and with him died the last serious imperial attempt to roll back Christianisation.",
            el: "Ανατραφείς ως χριστιανός αλλά κρυφίως διδαχθείς τον νεοπλατωνισμό από φιλοσόφους όπως ο Μάξιμος Εφέσιος, ο Ιουλιανός εκδήλωσε την παγανιστική του αφοσίωση μόνον αφότου ο θάνατος του εξαδέλφου του Κωνσταντίου Β΄ κατέστησε ασφαλή την ανοικτή ομολογία. Το θρησκευτικό του πρόγραμμα ήταν εκλεπτυσμένο μάλλον παρά βίαιο: αποκατέστησε τις δωρεές των ναών, οργάνωσε το ιερατείο κατά εκκλησιαστικά πρότυπα και περιφήμως απηγόρευσε στους χριστιανούς να διδάσκουν τους κλασικούς συγγραφείς, υποστηρίζων ότι δεν ηδύναντο εντίμως να εξηγούν θεούς που απέρριπταν. Οι χριστιανοί συγγραφείς τον στιγμάτισαν ως «Αποστάτη», ωστόσο σύγχρονοι όπως ο Αμμιανός Μαρκελλίνος εθαύμαζαν τον λιτό βίο και τη διοικητική του επιμέλεια. Η περσική του εκστρατεία του 363 ετερμάτισε αποτόμως τη βασιλεία του όταν εκτυπήθη από λόγχη στη Μάραγγα, και μαζί του απέθανε η τελευταία σοβαρή αυτοκρατορική προσπάθεια ανατροπής της χριστιανοποιήσεως."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Gold_Solidus_of_Julian_the_Apostate%2C_Sirmium.jpg?width=1024",
            alt: {
              en: "Julian the Apostate coin",
              el: "Νόμισμα του Ιουλιανού του Αποστάτη"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 378,
      era: {
        en: "Late Roman",
        el: "Ύστερη Ρωμαϊκή περίοδος"
      },
      events: [
        {
          title: {
            en: "Battle of Adrianople",
            el: "Η μάχη της Αδριανούπολης"
          },
          description: {
            en: "Emperor Valens is killed by the Goths; a catastrophic defeat that marks the beginning of the barbarian settlements within the empire.",
            el: "Ο αυτοκράτορας Ουάλης σκοτώνεται από τους Γότθους· μια καταστροφική ήττα που σηματοδοτεί την αρχή της εγκατάστασης βαρβάρων μέσα στην αυτοκρατορία."
          },
          extendedDescription: {
            en: "The disaster grew out of the Hunnic pressure that had driven the Tervingi and Greuthungi to seek asylum south of the Danube in 376. Mismanagement by Roman officials, who exploited the refugees with extortionate grain prices, transformed a humanitarian admission into open revolt. On 9 August 378, Valens engaged the Gothic confederation outside Adrianople without waiting for his nephew Gratian's western reinforcements; some two-thirds of the eastern field army perished, and the emperor's body was never recovered. Ammianus Marcellinus called it the worst Roman defeat since Cannae. The political settlement that followed under Theodosius I tolerated armed Gothic groups inside imperial territory, inaugurating a fateful experiment in the federation of barbarian peoples that would shape late Roman politics for a century.",
            el: "Η καταστροφή προέκυψε από την ουννική πίεση που είχε ωθήσει τους Τερβίγγους και Γρευθούγγους να ζητήσουν άσυλον νοτίως του Δουνάβεως το 376. Η κακοδιοίκησις των ρωμαϊκών αρχών, που εκμεταλλεύθησαν τους πρόσφυγας με αρπακτικές τιμές σιτηρών, μετέτρεψε μίαν ανθρωπιστικήν αποδοχήν εις ανοικτήν εξέγερσιν. Στις 9 Αυγούστου 378 ο Ουάλης συνεκρούσθη με τη γοτθική συνομοσπονδίαν έξω της Αδριανουπόλεως χωρίς να αναμείνει τις δυτικές ενισχύσεις του ανεψιού του Γρατιανού· περί τα δύο τρίτα του ανατολικού στρατού απωλέσθησαν και το σώμα του αυτοκράτορος ουδέποτε ανευρέθη. Ο Αμμιανός Μαρκελλίνος την απεκάλεσε τη χειρίστην ρωμαϊκήν ήτταν από των Καννών. Ο πολιτικός διακανονισμός που ηκολούθησεν υπό τον Θεοδόσιον Α΄ ηνέχθη ενόπλους γοτθικές ομάδες εντός του αυτοκρατορικού εδάφους, εγκαινιάζων ένα μοιραίο πείραμα ομοσπονδίας βαρβαρικών λαών που θα εσχημάτιζε την υστερορωμαϊκήν πολιτικήν επί έναν αιώνα."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Battle_of_Adrianople_1.png?width=1024",
            alt: {
              en: "Battle of Adrianople",
              el: "Η μάχη της Αδριανούπολης"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 381,
      era: {
        en: "Theodosian Dynasty",
        el: "Δυναστεία Θεοδοσίου"
      },
      events: [
        {
          title: {
            en: "First Council of Constantinople",
            el: "Η πρώτη Οικουμενική Σύνοδος της Κωνσταντινούπολης"
          },
          description: {
            en: "The second ecumenical council affirms the Nicene Creed and elevates the see of Constantinople to second rank after Rome.",
            el: "Η δεύτερη οικουμενική σύνοδος επιβεβαιώνει το Νικαϊκό Σύμβολο και ανυψώνει το θρόνο της Κωνσταντινούπολης σε δεύτερη θέση μετά τη Ρώμη."
          },
          extendedDescription: {
            en: "Convoked by Theodosius I and presided over successively by Meletius of Antioch, Gregory of Nazianzus and Nectarius, the council settled the Trinitarian controversies that had outlived Nicaea, condemning the Pneumatomachoi who denied the divinity of the Holy Spirit. It produced the expanded creed still recited in the liturgy and reaffirmed Nicaea against residual Arian and Apollinarian currents. Its third canon, ranking the new capital immediately after Rome on the grounds that the city was 'New Rome', planted the seed of the centuries-long quarrel over ecclesiastical primacy that would help drive Rome and Constantinople apart. The council also marks the legal triumph of Nicene Christianity as the official faith of the empire under Theodosius's edict Cunctos populos of the previous year.",
            el: "Συγκληθείσα από τον Θεοδόσιον Α΄ και διαδοχικώς προεδρευθείσα υπό του Μελετίου Αντιοχείας, του Γρηγορίου Ναζιανζηνού και του Νεκταρίου, η σύνοδος επέλυσε τας τριαδικάς διαμάχας που είχον επιζήσει της Νικαίας, καταδικάζουσα τους Πνευματομάχους οι οποίοι ηρνούντο τη θεότητα του Αγίου Πνεύματος. Παρήγαγε το διευρυμένον σύμβολον το οποίο εξακολουθεί να απαγγέλλεται εν τη λειτουργία και επανεβεβαίωσε τη Νίκαιαν έναντι υπολοίπων αρειανικών και απολλιναριστικών ρευμάτων. Ο τρίτος της κανών, κατατάσσων τη νέαν πρωτεύουσαν ευθύς μετά τη Ρώμην επί τη βάσει ότι η πόλις ήτο «Νέα Ρώμη», έσπειρε τον σπόρον της αιωνοβίου διαμάχης περί εκκλησιαστικού πρωτείου που θα συνέβαλλεν εις την απομάκρυνσιν Ρώμης και Κωνσταντινουπόλεως. Η σύνοδος σηματοδοτεί επίσης τον νομικόν θρίαμβον του Νικαϊκού Χριστιανισμού ως επισήμου πίστεως της αυτοκρατορίας, βάσει του διατάγματος Cunctos populos του Θεοδοσίου του προηγουμένου έτους."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 395,
      era: {
        en: "Theodosian Dynasty",
        el: "Δυναστεία Θεοδοσίου"
      },
      events: [
        {
          title: {
            en: "Permanent division of the Empire",
            el: "Η μόνιμη διαίρεση της Αυτοκρατορίας"
          },
          description: {
            en: "On the death of Theodosius I, the empire is divided between his sons Arcadius (East) and Honorius (West); the Eastern Roman Empire begins its independent course.",
            el: "Με το θάνατο του Θεοδοσίου Α΄, η αυτοκρατορία διαιρείται ανάμεσα στους γιούς του Αρκάδιο (Ανατολή) και Ονώριο (Δύση)· η Ανατολική Ρωμαϊκή Αυτοκρατορία ξεκινά την ανεξάρτητη διαδρομή της."
          },
          extendedDescription: {
            en: "Contemporaries did not see 395 as the rupture later historians would emphasise: administrative bipartition had been a recurring feature since Diocletian, and the two courts continued to share consuls, coinage and the fiction of a single state. Yet because neither half was ever again ruled by a single emperor, the year became, in retrospect, the watershed between Eastern and Western trajectories. Arcadius inherited a wealthier, more urbanised East defended by the new Theodosian walls under construction and by an army increasingly Romanised in command; Honorius inherited a fiscally exhausted West dominated by the Vandal magister militum Stilicho. Within two decades the West would be overrun by Goths, Vandals and Suevi, while the East, by diplomacy and luck, would consolidate as the surviving Roman state.",
            el: "Οι σύγχρονοι δεν εθεώρουν το 395 ως τη ρήξιν την οποίαν οι μετέπειτα ιστορικοί θα ετόνιζαν: η διοικητική διχοτόμησις ήτο επαναλαμβανόμενον γνώρισμα από του Διοκλητιανού, και αι δύο αυλαί εξηκολούθουν να μοιράζωνται υπάτους, νομίσματα και τη φαντασίωσιν ενιαίου κράτους. Πλην όμως, διότι ουδέτερον ήμισυ ηγεμονεύθη ποτέ πάλιν από ενιαίον αυτοκράτορα, το έτος κατέστη, εκ των υστέρων, η υδροκρίτις μεταξύ ανατολικής και δυτικής τροχιάς. Ο Αρκάδιος εκληρονόμησε πλουσιωτέραν, αστικωτέραν Ανατολήν προστατευομένην από τα νέα Θεοδοσιανά τείχη και από στρατόν εξελληνιζόμενον εις τη διοίκησιν· ο Ονώριος εκληρονόμησε δημοσιονομικώς εξηντλημένην Δύσιν κυριαρχουμένην από τον βάνδαλον magister militum Στιλίχωνα. Εντός δύο δεκαετιών η Δύσις θα κατεκλύζετο από Γότθους, Βανδάλους και Σουήβους, ενώ η Ανατολή, διά διπλωματίας και τύχης, θα παγιούτο ως το επιζών ρωμαϊκόν κράτος."
          },
          category: "political"
        }
      ]
    },
    {
      year: 400,
      era: {
        en: "Theodosian Dynasty",
        el: "Δυναστεία Θεοδοσίου"
      },
      events: [
        {
          title: {
            en: "Gothic revolt under Gainas",
            el: "Η γοτθική εξέγερση του Γαΐνα"
          },
          description: {
            en: "The Gothic general Gainas briefly dominates Constantinople before being defeated, highlighting the empire's reliance on barbarian troops.",
            el: "Ο γοτθικός στρατηγός Γαΐνας κυριαρχεί για λίγο χρόνο στην Κωνσταντινούπολη πριν να ηττηθεί, αναδεικνύοντας την εξάρτηση της αυτοκρατορίας από βάρβαρα στρατεύματα."
          },
          extendedDescription: {
            en: "Gainas had risen through the federate ranks under Theodosius and engineered the fall of the eunuch praetorian prefect Eutropius. When he sought a Christian church inside the walls for his Arian Goths, the populace and the patriarch John Chrysostom resisted, and a riot left thousands of his soldiers dead in the burning federate church. Gainas attempted to lead his remaining men out of the city, was hunted across Thrace, and was finally killed by the Hun Uldin near the Danube; his head was sent to Arcadius. The episode stands as a turning point in eastern policy: thereafter the court of Constantinople systematically replaced its Gothic federates with Isaurian highlanders and Armenians, sparing the East the fate that overtook the West a generation later.",
            el: "Ο Γαΐνας είχεν αναδειχθεί μέσω των τάξεων των ομοσπόνδων υπό τον Θεοδόσιον και εμηχανεύθη την πτώσιν του ευνούχου επάρχου του πραιτωρίου Ευτροπίου. Όταν εζήτησε χριστιανικόν ναόν εντός των τειχών διά τους αρειανούς Γότθους του, ο λαός και ο πατριάρχης Ιωάννης Χρυσόστομος αντέστησαν, και ταραχή άφησε χιλιάδας στρατιώτας του νεκρούς εις τον φλεγόμενον ναόν των ομοσπόνδων. Ο Γαΐνας επεχείρησε να οδηγήσει τους εναπομείναντας έξω της πόλεως, κατεδιώχθη ανά τη Θράκην και τελικώς εφονεύθη υπό του Ούννου Ουλδίνου πλησίον του Δουνάβεως· η κεφαλή του απεστάλη εις τον Αρκάδιον. Το επεισόδιον αποτελεί καμπήν εις την ανατολικήν πολιτικήν: έκτοτε η αυλή της Κωνσταντινουπόλεως αντικατέστησε συστηματικώς τους Γότθους ομοσπόνδους με ισαύρους ορεσιβίους και Αρμενίους, εξοικονομούσα εις την Ανατολήν την τύχην που εύρεν τη Δύσιν μίαν γενεάν αργότερον."
          },
          category: "military"
        }
      ]
    },
    {
      year: 410,
      era: {
        en: "Theodosian Dynasty",
        el: "Δυναστεία Θεοδοσίου"
      },
      events: [
        {
          title: {
            en: "Sack of Rome",
            el: "Η άλωση της Ρώμης"
          },
          description: {
            en: "Alaric and the Visigoths sack Rome, sending shockwaves through the Roman world. Emperor Honorius remains in Ravenna while Stilicho struggles to contain the crisis.",
            el: "Ο Αλάριχος και οι Βησίγοτθοι λεηλατούν τη Ρώμη, προκαλώντας σοκ σε όλο τον ρωμαϊκό κόσμο. Ο αυτοκράτορας Ονώριος παραμένει στη Ραβέννα ενώ ο Στιλίχων προσπαθεί να αποτρέψει την κρίση."
          },
          extendedDescription: {
            en: "Stilicho had in fact been executed in 408 on suspicion of treason, depriving the West of its only able commander and triggering a massacre of barbarian families that drove their kinsmen into Alaric's camp. Three times the Visigoths besieged Rome before storming the Salarian Gate on 24 August 410; the sack lasted three days and, by ancient standards, was relatively restrained, the Gothic king sparing churches as places of asylum. The psychological shock nevertheless reverberated across the Mediterranean: Jerome wept in his Bethlehem cell, while Augustine in Hippo composed the City of God to argue that Rome's calamity could not be blamed on the abandonment of the old gods. For Constantinople, the event accelerated the perception that the imperial centre of gravity had irrevocably shifted east.",
            el: "Ο Στιλίχων είχεν εκτελεσθεί ήδη το 408 επί υποψία προδοσίας, στερών τη Δύσιν του μόνου ικανού στρατηγού της και πυροδοτών σφαγήν βαρβαρικών οικογενειών που ώθησε τους συγγενείς των εις τη στρατοπεδείαν του Αλαρίχου. Τρεις φοράς επολιόρκησαν οι Βησίγοτθοι τη Ρώμην προτού εφορμήσουν διά της Σαλαρίας Πύλης την 24ην Αυγούστου 410· η λεηλασία διήρκεσε τρεις ημέρας και, κατά τα αρχαία μέτρα, υπήρξε σχετικώς συγκρατημένη, του γοτθικού βασιλέως εξαιρούντος τους ναούς ως χώρους ασύλου. Ο ψυχολογικός κλονισμός εν τούτοις αντήχησεν εις ολόκληρον τη Μεσόγειον: ο Ιερώνυμος εδάκρυσεν εις το κελλίον του εν Βηθλεέμ, ενώ ο Αυγουστίνος εν Ιππώνι συνέθεσε τη Πολιτείαν του Θεού επιχειρηματολογών ότι η συμφορά της Ρώμης δεν ηδύνατο να αποδοθεί εις την εγκατάλειψιν των αρχαίων θεών. Διά τη Κωνσταντινούπολιν, το γεγονός επετάχυνε την αντίληψιν ότι το αυτοκρατορικόν κέντρον βαρύτητος είχε μετατοπισθεί αμετακλήτως εις τη Ανατολήν."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sack_of_Rome_by_the_Visigoths_on_24_August_410_by_JN_Sylvestre_1890.jpg?width=1024",
            alt: {
              en: "Sack of Rome by the Visigoths, painting by J.-N. Sylvestre (1890)",
              el: "Η άλωση της Ρώμης από τους Βησιγότθους, πίνακας του J.-N. Sylvestre (1890)"
            },
            credit: "Joseph-Noël Sylvestre, via Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 425,
      era: {
        en: "Theodosian Dynasty",
        el: "Δυναστεία Θεοδοσίου"
      },
      events: [
        {
          title: {
            en: "Foundation of the University of Constantinople",
            el: "Η ίδρυση του Πανεπιστημίου της Κωνσταντινούπολης"
          },
          description: {
            en: "Theodosius II establishes the Pandidakterion, the first higher learning institution in the Byzantine Empire, focusing on Greek philosophy and law.",
            el: "Ο Θεοδόσιος Β΄ ιδρύει το Πανδιδακτήριον, το πρώτο ίδρυμα ανώτατης εκπαίδευσης στη Βυζαντινή Αυτοκρατορία, εστιάζοντας στην ελληνική φιλοσοφία και νομολογία."
          },
          extendedDescription: {
            en: "The constitution of 27 February 425, preserved in the Theodosian Code, organised teaching in the capital around thirty-one publicly salaried chairs: ten Greek and ten Latin grammarians, five Greek and three Latin rhetors, two professors of law and one of philosophy. The new auditoria, situated in the Capitolium near the Forum of Theodosius, were to monopolise public instruction in the city, with private teachers strictly limited. Although it should not be confused with a medieval university in the western sense, the Pandidakterion provided continuity for Hellenic paideia within a Christian framework and trained generations of imperial bureaucrats. Reformed and reorganised under Bardas in the ninth century and again under Constantine IX in 1045, it remained a cornerstone of Roman higher learning until 1453.",
            el: "Η διάταξις της 27ης Φεβρουαρίου 425, διασωθείσα εν τω Θεοδοσιανώ Κώδικι, ωργάνωσε τη διδασκαλίαν εις τη πρωτεύουσαν περί τριάκοντα μίαν δημοσίως επιμισθίους έδρας: δέκα ελληνικούς και δέκα λατίνους γραμματικούς, πέντε έλληνας και τρεις λατίνους ρήτορας, δύο καθηγητάς δικαίου και έναν φιλοσοφίας. Τα νέα ακροατήρια, εγκατεστημένα εν τω Καπιτωλίω πλησίον του Φόρου Θεοδοσίου, επρόκειτο να μονοπωλήσουν τη δημοσίαν διδασκαλίαν εν τη πόλει, των ιδιωτών διδασκάλων αυστηρώς περιοριζομένων. Καίτοι δεν πρέπει να συγχέεται με μεσαιωνικόν πανεπιστήμιον δυτικής μορφής, το Πανδιδακτήριον παρείχε συνέχειαν εις την ελληνικήν παιδείαν εντός χριστιανικού πλαισίου και κατήρτισε γενεάς αυτοκρατορικών αξιωματούχων. Μεταρρυθμισθέν υπό του Βάρδα τον ένατον αιώνα και πάλιν υπό του Κωνσταντίνου Θ΄ το 1045, παρέμεινεν ακρογωνιαίος λίθος της ρωμαϊκής ανωτέρας παιδείας έως το 1453."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 431,
      era: {
        en: "Ecumenical Councils",
        el: "Οικουμενικαί Σύνοδοι"
      },
      events: [
        {
          title: {
            en: "Council of Ephesus",
            el: "Η εν Εφέσω Σύνοδος"
          },
          description: {
            en: "The Third Ecumenical Council condemns Nestorius and proclaims the Virgin Mary as Theotokos — at the cost of severing the Church of Persia and sowing the seed of the later Christological schism.",
            el: "Η Τρίτη Οικουμενική Σύνοδος καταδικάζει τον Νεστόριον και ανακηρύσσει την Παρθένον Μαρίαν Θεοτόκον — με τίμημα την απόσχισιν της Εκκλησίας της Περσίας και την σπορά μεταγενεστέρου χριστολογικού σχίσματος."
          },
          extendedDescription: {
            en: "The dispute had begun in Constantinople, where the Antiochene archbishop Nestorius preached that Mary should be called Christotokos rather than Theotokos, since she had borne not the eternal Word but the man whom the Word indwelt. Cyril of Alexandria, defending the long-established Marian title and seeing in Nestorius's theology a dangerous separation of the natures of Christ, secured the support of Pope Celestine I and pressed Theodosius II to summon a council. Cyril, arriving with his Egyptian bishops before the Antiochenes had completed their journey, opened proceedings without the eastern delegation and condemned Nestorius within a single day. When John of Antioch arrived and held a counter-synod that excommunicated Cyril, the emperor for some weeks recognised both depositions before settling decisively for Cyril. Nestorius was deposed and eventually exiled to the Egyptian desert, while the Persian Church, refusing to accept the verdict, broke with the imperial church and developed independently. The council fixed Theotokos as the touchstone of orthodoxy, but the unresolved tension between Alexandrian and Antiochene Christology would erupt twenty years later at Chalcedon.",
            el: "Η διαμάχη είχεν αρχίσει εν Κωνσταντινουπόλει, όπου ο εξ Αντιοχείας ορμώμενος αρχιεπίσκοπος Νεστόριος εκήρυσσεν ότι η Μαρία έπρεπε να καλήται Χριστοτόκος μάλλον παρά Θεοτόκος, επειδή είχε τέξει ουχί τον αιώνιον Λόγον αλλά τον άνθρωπον εν τω οποίω ο Λόγος ενεσκήνωσεν. Ο Κύριλλος Αλεξανδρείας, υπερασπιζόμενος τον μακράν παγιωμένον Μαριακόν τίτλον και βλέπων εν τη θεολογία του Νεστορίου επικίνδυνον διάκρισιν των φύσεων του Χριστού, εξησφάλισε την υποστήριξιν του Πάπα Κελεστίνου Α΄ και επίεσε τον Θεοδόσιον Β΄ να συγκαλέση σύνοδον. Ο Κύριλλος, αφικνούμενος μετά των αιγυπτίων επισκόπων του πριν ολοκληρώσουν την οδοιπορίαν των οι Αντιοχείς, ήρξατο των εργασιών άνευ της ανατολικής αντιπροσωπείας και κατεδίκασε τον Νεστόριον εντός μιας ημέρας. Όταν ο Ιωάννης Αντιοχείας έφθασε και συνεκάλεσεν αντι-σύνοδον αφορίζουσαν τον Κύριλλον, ο αυτοκράτωρ επί τινας εβδομάδας ανεγνώριζεν αμφοτέρας τας καθαιρέσεις προτού αποφασίση οριστικώς υπέρ του Κυρίλλου. Ο Νεστόριος καθηρέθη και τελικώς εξωρίσθη εις την αιγυπτιακήν έρημον, ενώ η Περσική Εκκλησία, αρνουμένη να αποδεχθή την απόφασιν, διέκοψε τας σχέσεις της προς την αυτοκρατορικήν εκκλησίαν και εξειλίχθη ανεξαρτήτως. Η σύνοδος ώρισε το «Θεοτόκος» ως κριτήριον ορθοδοξίας, αλλ' η ανεπίλυτος έντασις μεταξύ της αλεξανδρινής και της αντιοχικής χριστολογίας θα ανεφλέγετο εικοσαετίαν αργότερον εν Χαλκηδόνι."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 438,
      era: {
        en: "Theodosian Dynasty",
        el: "Δυναστεία Θεοδοσίου"
      },
      events: [
        {
          title: {
            en: "Codex Theodosianus promulgated",
            el: "Δημοσίευση του Κώδικα του Θεοδοσίου"
          },
          description: {
            en: "Theodosius II issues a comprehensive compilation of imperial constitutions since Constantine — the first major Christian Roman law code.",
            el: "Ο Θεοδόσιος Β΄ εκδίδει μια ολοκληρωμένη συλλογή αυτοκρατορικών διαταγμάτων από τον Κωνσταντίνο — ο πρώτος σημαντικός χριστιανικός κώδικας ρωμαϊκού νόμου."
          },
          extendedDescription: {
            en: "Drafted over nearly a decade by a commission of jurists led by Antiochus, the Code gathered general imperial laws issued from 312 onward into sixteen books arranged by subject. Its sixteenth book on religion, devoted entirely to ecclesiastical legislation, christianised Roman law in a way the Diocletianic compilations had not. Promulgated simultaneously in the East and accepted by Valentinian III in the West, the Codex was the first legislation since the Twelve Tables to bind both halves of the empire and survived as the basis of barbarian law-codes such as the Lex Romana Visigothorum. It remained the working law of the East until the more ambitious Justinianic Corpus a century later.",
            el: "Συντεταγμένος επί σχεδόν δεκαετίαν υπό επιτροπής νομικών υπό την ηγεσίαν του Αντιόχου, ο Κώδιξ συνεκέντρωσε τους γενικούς αυτοκρατορικούς νόμους εκδοθέντας από του 312 και εφεξής εις δεκαέξι βιβλία διατεταγμένα κατά θέματα. Το δέκατον έκτον βιβλίον περί θρησκείας, αφιερωμένον εξ ολοκλήρου εις την εκκλησιαστικήν νομοθεσίαν, εχριστιανοποίησε το ρωμαϊκόν δίκαιον κατά τρόπον που αι διοκλητιάνειοι συλλογαί δεν είχον. Δημοσιευθείς ταυτοχρόνως εν τη Ανατολή και αποδεχθείς υπό του Ουαλεντινιανού Γ΄ εν τη Δύσει, ο Κώδιξ υπήρξεν η πρώτη νομοθεσία από των Δωδεκαδέλτων που εδέσμευσεν αμφότερα τα ημίση της αυτοκρατορίας και επεβίωσεν ως βάσις βαρβαρικών κωδίκων όπως ο Lex Romana Visigothorum. Παρέμεινε το ισχύον δίκαιον της Ανατολής έως το φιλοδοξότερον ιουστινιάνειον Corpus έναν αιώνα αργότερον."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 439,
      era: {
        en: "Vandal Kingdom",
        el: "Βανδαλικόν Βασίλειον"
      },
      events: [
        {
          title: {
            en: "Vandals seize Carthage",
            el: "Οι Βάνδαλοι καταλαμβάνουν την Καρχηδόνα"
          },
          description: {
            en: "Geiseric and his Vandals capture Carthage by surprise, depriving the empire of its richest African province and the granary that had fed Rome for six centuries.",
            el: "Ο Γιζέριχος και οι Βάνδαλοι αυτού καταλαμβάνουν αιφνιδιαστικώς την Καρχηδόνα, στερών την αυτοκρατορίαν της πλουσιωτέρας αφρικανικής επαρχίας της και του σιτοβολώνος ο οποίος έτρεφε την Ρώμην επί έξι αιώνας."
          },
          extendedDescription: {
            en: "The Vandals, displaced by Hunnic pressure beyond the Danube, had crossed Gaul and Spain and ferried over to Africa in 429 at the invitation, it was alleged, of the Roman general Bonifatius. After ten years of campaigning they had been confined by treaty to Numidia and Mauretania while Carthage and the wealthy proconsular province remained Roman. On 19 October 439, Geiseric, exploiting the Vandal feast day and the absence of the Roman fleet, marched on Carthage and entered the unprepared city without serious fighting. The cathedral and other churches were given over to Arian worship, the great estates of the senatorial aristocracy were confiscated and parcelled out among Vandal warriors, and a substantial royal navy was constructed in the Carthaginian harbours. With Africa lost, the western emperors at Ravenna lost the tax base that had funded the field armies, while Constantinople also felt the blow: the eastern fleet sent to recover the province in 468 would suffer one of the worst naval defeats of late antiquity.",
            el: "Οι Βάνδαλοι, εκτοπισμένοι υπό της ουννικής πιέσεως πέραν του Δουνάβεως, είχον διασχίσει την Γαλατίαν και την Ισπανίαν και είχον περαιωθή εις την Αφρικήν το 429, κατά πρόσκλησιν ως ελέγετο του Ρωμαίου στρατηγού Βονιφατίου. Μετά δεκαετή πολεμικάς επιχειρήσεις είχον περιορισθή διά συνθήκης εις την Νουμιδίαν και Μαυριτανίαν, ενώ η Καρχηδών και η πλουσία ανθυπατική επαρχία παρέμενον ρωμαϊκαί. Την 19ην Οκτωβρίου 439, ο Γιζέριχος, εκμεταλλευόμενος την βανδαλικήν εορτήν και την απουσίαν του ρωμαϊκού στόλου, εβάδισε κατά της Καρχηδόνος και εισήλθεν εις την απαράσκευον πόλιν άνευ σοβαράς μάχης. Ο καθεδρικός ναός και οι λοιποί ναοί παρεδόθησαν εις την αρειανικήν λατρείαν, τα μεγάλα κτήματα της συγκλητικής αριστοκρατίας εδημεύθησαν και διεμοιράσθησαν εις βανδάλους πολεμιστάς, και σημαντικός βασιλικός στόλος ωκοδομήθη εις τους καρχηδονιακούς λιμένας. Μετά την απώλειαν της Αφρικής, οι δυτικοί αυτοκράτορες της Ραβέννης απώλεσαν τον φορολογικόν πυρήνα που εχρηματοδότει τας πολεμικάς στρατιάς, ενώ και η Κωνσταντινούπολις αισθάνθη το πλήγμα: ο ανατολικός στόλος που απεστάλη να ανακτήση την επαρχίαν το 468 θα υφίστατο μίαν εκ των χειροτέρων ναυτικών ηττών της ύστερης αρχαιότητος."
          },
          category: "military"
        }
      ]
    },
    {
      year: 447,
      era: {
        en: "Theodosian Dynasty",
        el: "Δυναστεία Θεοδοσίου"
      },
      events: [
        {
          title: {
            en: "Great earthquake and Hunnic invasion",
            el: "Μεγάλος σεισμός και ούνικη εισβολή"
          },
          description: {
            en: "A massive earthquake damages Constantinople's walls, which are hastily rebuilt under the direction of Prefect Cyrus before Attila's invasion of the Balkans.",
            el: "Ένας τεράστιος σεισμός προκαλεί ζημιές στα τείχη της Κωνσταντινούπολης, τα οποία επανοικοδομούνται βιασμένα υπό την επίβλεψη του Επάρχου Κύρου πριν από την εισβολή του Αττίλα στα Βαλκάνια."
          },
          extendedDescription: {
            en: "The earthquake of 27 January 447 toppled fifty-seven towers of the land walls just as Attila's confederation was crossing the Danube. The praetorian prefect Constantinus, often conflated in tradition with Cyrus of Panopolis, organised the circus factions of the Blues and Greens into rival construction crews; an inscription preserved on the Mevlevihane Gate boasts that the work was completed in sixty days. Attila nevertheless plundered Thrace and exacted a vastly increased tribute, but he did not attempt the city. The episode demonstrated both the unique strategic importance of the Theodosian walls — which would shield Constantinople for a thousand years — and the dependence of the Eastern court on diplomacy and gold to redirect threats it could not meet militarily.",
            el: "Ο σεισμός της 27ης Ιανουαρίου 447 κατέρριψε πεντήκοντα επτά πύργους των χερσαίων τειχών τη στιγμήν ακριβώς που η συνομοσπονδία του Αττίλα διέβαινε τον Δούναβιν. Ο έπαρχος του πραιτωρίου Κωνσταντίνος, συχνά συγχεόμενος εν τη παραδόσει με τον Κύρον Πανοπολίτην, ωργάνωσε τας ιπποδρομίας φατρίας των Πρασίνων και των Βενέτων εις αντιπάλους ομάδας οικοδομής· επιγραφή σωζομένη επί της Πύλης Μεβλεβιχανέ καυχάται ότι το έργον συνεπληρώθη εντός εξήκοντα ημερών. Ο Αττίλας εν τούτοις ελεηλάτησε τη Θράκην και απήτησεν επαυξημένον πάκτον, αλλά δεν επεχείρησε τη Πόλιν. Το επεισόδιον κατέδειξε τόσον τη μοναδικήν στρατηγικήν σημασίαν των Θεοδοσιανών τειχών — τα οποία θα προεστάτευαν τη Κωνσταντινούπολιν επί χιλιετίαν — όσον και την εξάρτησιν της ανατολικής αυλής από τη διπλωματίαν και τον χρυσόν, διά τη κατευθυνσιν απειλών τας οποίας δεν ηδύνατο να αντιμετωπίσει στρατιωτικώς."
          },
          category: "military"
        }
      ]
    },
    {
      year: 451,
      era: {
        en: "Theodosian Dynasty",
        el: "Δυναστεία Θεοδοσίου"
      },
      events: [
        {
          title: {
            en: "Council of Chalcedon",
            el: "Η Σύνοδος της Χαλκηδόνας"
          },
          description: {
            en: "The Fourth Ecumenical Council defines the two natures of Christ and sparks centuries of theological conflict with the Miaphysite churches of Egypt, Syria and Armenia.",
            el: "Η τέταρτη οικουμενική σύνοδος ορίζει τις δύο φύσεις του Χριστού και αναφλέγει αιώνες θεολογικής διαμάχης με τις Μιαφυσιτικές εκκλησίες της Αιγύπτου, Συρίας και Αρμενίας."
          },
          extendedDescription: {
            en: "Convoked by Emperor Marcian and his consort Pulcheria, the council assembled some six hundred bishops at the Church of Saint Euphemia, the largest gathering of the patristic age. Its Definition, drafted under the influence of Pope Leo's Tome, taught that Christ is one Person in two natures, divine and human, 'without confusion, change, division, or separation', repudiating both Nestorian dualism and the Eutychian monophysitism endorsed at Ephesus II. The twenty-eighth canon, granting Constantinople equal privileges to Old Rome, was rejected by Leo and prefigured the eventual rupture of Christendom. The dogmatic settlement provoked durable schisms in Egypt, Syria and Armenia, weakening imperial cohesion in the very provinces that would, two centuries later, fall most quickly to the Arabs.",
            el: "Συγκληθείσα υπό του αυτοκράτορος Μαρκιανού και της συζύγου του Πουλχερίας, η σύνοδος συνεκέντρωσε περί τους εξακοσίους επισκόπους εν τω ναώ της Αγίας Ευφημίας, η μεγίστη συνάθροισις της πατερικής εποχής. Ο Όρος της, συντεταγμένος υπό την επίδρασιν του Τόμου του πάπα Λέοντος, εδίδαξεν ότι ο Χριστός είναι εν Πρόσωπον εν δύο φύσεσιν, θεϊκή και ανθρωπίνη, «ασυγχύτως, ατρέπτως, αδιαιρέτως, αχωρίστως», αποκρούουσα τόσον τον νεστοριανόν δυϊσμόν όσον και τον ευτυχιανόν μονοφυσιτισμόν τον επικυρωθέντα εν τη Β΄ Εφέσου. Ο εικοστός όγδοος κανών, παρέχων εις τη Κωνσταντινούπολιν ίσα προνόμια προς την παλαιάν Ρώμην, απερρίφθη υπό του Λέοντος και προεικόνισε τη μέλλουσαν ρήξιν της χριστιανοσύνης. Η δογματική ρύθμισις προεκάλεσε μακροχρόνια σχίσματα εν Αιγύπτω, Συρία και Αρμενία, εξασθενούσα τη συνοχήν της αυτοκρατορίας εις τας ίδιας επαρχίας που, δύο αιώνας ύστερον, θα κατέπιπτον ταχύτερα εις τους Άραβας."
          },
          category: "religious"
        },
        {
          title: {
            en: "Battle of the Catalaunian Plains",
            el: "Η μάχη των Καταλαυνικών Πεδίων"
          },
          description: {
            en: "Roman and Visigothic forces under Flavius Aetius halt Attila's advance in Gaul, though the Huns remain a threat to the Eastern Empire.",
            el: "Ρωμαϊκές και βησίγοτθικές δυνάμεις υπό τον Φλάβιο Αέτιο σταματούν την προέλαση του Αττίλα στη Γαλλία, αν και οι Ούννοι παραμένουν απειλή για την Ανατολική Αυτοκρατορία."
          },
          extendedDescription: {
            en: "Aetius, the last great commander of the Western Roman field army, cobbled together a coalition of Visigoths under King Theodoric I, Alans, Burgundians and Frankish federates to meet the Hunnic confederation that had spent the spring sacking the cities of northern Gaul. The clash on the Catalaunian Plains, somewhere near modern Châlons, was unprecedented in scale: the Visigothic king fell on the field, but the Huns were forced to withdraw behind their wagon laager and ultimately retreat over the Rhine. The victory preserved Gaul as a Roman, and soon Frankish, polity rather than a Hunnic dependency, but it did not break Attila, who turned south in 452 to ravage Italy. For the East, the battle reduced the immediate Hunnic pressure but offered no relief from the tribute that had drained the Constantinopolitan treasury for a decade.",
            el: "Ο Αέτιος, ο τελευταίος μέγας στρατηγός του δυτικορωμαϊκού στρατού, συνεκρότησε συμμαχίαν εκ Βησιγότθων υπό τον βασιλέα Θεοδώριχον Α΄, Αλανών, Βουργουνδών και Φράγκων ομοσπόνδων διά να αντιμετωπίσει τη συνομοσπονδίαν των Ούννων, η οποία είχε δαπανήσει την άνοιξιν λεηλατούσα τας πόλεις της βορείου Γαλατίας. Η σύγκρουσις εις τα Καταλαυνικά Πεδία, κάπου πλησίον της σημερινής Σαλόν, υπήρξεν άνευ προηγουμένου εις μέγεθος: ο βησιγοτθικός βασιλεύς έπεσεν επί του πεδίου, αλλ' οι Ούννοι ηναγκάσθησαν να αποσυρθούν όπισθεν του οχυρώματος των αμαξών των και τελικώς να επιστρέψουν πέραν του Ρήνου. Η νίκη διετήρησε τη Γαλατίαν ως ρωμαϊκόν, και ταχέως φραγκικόν, κράτος αντί ουννικού υποτελούς, αλλά δεν συνέτριψε τον Αττίλαν, που εστράφη προς νότον το 452 διά να λεηλατήσει τη Ιταλίαν. Διά την Ανατολήν, η μάχη μετρίασε τη ανάγκη της στιγμής αλλά δεν παρέσχε ανακούφισιν από τον φόρον που είχεν εξαντλήσει το ταμείον της Κωνσταντινουπόλεως επί μίαν δεκαετίαν."
          },
          category: "military"
        }
      ]
    },
    {
      year: 453,
      era: {
        en: "Theodosian Dynasty",
        el: "Δυναστεία Θεοδοσίου"
      },
      events: [
        {
          title: {
            en: "Death of Attila",
            el: "Ο θάνατος του Αττίλα"
          },
          description: {
            en: "The Hunnic empire fragments after Attila's death, removing the immediate threat to the Eastern Roman Empire.",
            el: "Η Ούνικη Αυτοκρατορία κατακερματίζεται μετά το θάνατο του Αττίλα, εξουδετερώνοντας τον άμεσο κίνδυνο για την Ανατολική Ρωμαϊκή Αυτοκρατορία."
          },
          extendedDescription: {
            en: "Attila died, according to the chronicler Priscus, of a haemorrhage on his wedding night to a Germanic bride named Ildico, and was buried in three nested coffins of gold, silver and iron in a secret grave. His sons quarrelled at once over the inheritance, and the subject Germanic peoples, led by the Gepid king Ardaric, defeated them at the Battle of Nedao the following year. The Hunnic confederation dissolved into a constellation of warbands; some bands entered Roman service, while the lands north of the lower Danube passed to Gepids, Ostrogoths and Heruli. For Constantinople the relief was profound: the annual tribute of 2,100 pounds of gold extorted by Attila lapsed, the Danubian limes could be reorganised, and Marcian was free to focus on the Chalcedonian settlement and the recovery of Illyricum.",
            el: "Ο Αττίλας απέθανεν, κατά τον χρονικογράφον Πρίσκον, εξ αιμορραγίας κατά τη νυκτογαμίαν του με γερμανικήν νύμφην ονόματι Ιλδικώ, και ετάφη εις τρία εμφωλευμένα φέρετρα εκ χρυσού, αργύρου και σιδήρου εν κρυφώ τάφω. Οι υιοί του ευθύς ηριζον περί της κληρονομίας, και τα υποτελή γερμανικά γένη, υπό τον γέπιδα βασιλέα Αρδάριχον, τους ενίκησαν εις τη μάχην του Νεδάο κατά το επόμενον έτος. Η ουννική συνομοσπονδία διελύθη εις ένα αστερισμόν ένοπλων ομάδων· μερικαί εισήλθον εις τη ρωμαϊκήν υπηρεσίαν, ενώ αι χώραι βορείως του κάτω Δουνάβεως περιήλθον εις Γέπιδας, Οστρογότθους και Ερούλους. Διά τη Κωνσταντινούπολιν η ανακούφισις υπήρξε βαθεία: ο ετήσιος φόρος των 2.100 λιτρών χρυσού τον οποίον είχεν εκβιάσει ο Αττίλας έπαυσε, το δουνάβειον limes ηδυνήθη να αναδιοργανωθεί, και ο Μαρκιανός ηλευθερώθη να επικεντρωθεί εις τη χαλκηδόνειον ρύθμισιν και τη ανάκτησιν του Ιλλυρικού."
          },
          category: "political"
        }
      ]
    },
    {
      year: 476,
      era: {
        en: "Leonid Dynasty",
        el: "Δυναστεία Λέοντα"
      },
      events: [
        {
          title: {
            en: "Fall of the Western Empire",
            el: "Η πτώση της Δυτικής Αυτοκρατορίας"
          },
          description: {
            en: "Odoacer deposes Romulus Augustulus; Emperor Zeno in Constantinople becomes the sole Roman emperor in theory, though in practice the West passes to barbarian kings.",
            el: "Ο Οδόακρος καθαιρεί τον Ρωμύλο Αύγουστο· ο αυτοκράτορας Ζήνων στην Κωνσταντινούπολη γίνεται ο μόνος ρωμαϊκός αυτοκράτορας θεωρητικά, ενώ στην πράξη η Δύση μεταβιβάζεται σε βάρβαρους βασιλείς."
          },
          extendedDescription: {
            en: "The deposition of the boy-emperor Romulus, mockingly called Augustulus, was less a cataclysm than the formalisation of a process under way for half a century: the army of Italy, recruited largely from Heruli and Sciri, simply pensioned off its puppet and sent the imperial regalia to Constantinople. Odoacer ruled as rex, professing to govern Italy in the name of the eastern emperor, and Zeno tactically endorsed the fiction while plotting the Ostrogothic invasion under Theoderic that would replace him in 493. Contemporary easterners did not regard 476 as the fall of Rome — for them the empire continued, embodied in Constantinople — and the date acquired symbolic weight only with later humanist historiography. Yet from this year forward, the Mediterranean was a world in which the Roman name belonged to one capital alone.",
            el: "Η καθαίρεσις του παιδός αυτοκράτορος Ρωμύλου, ο οποίος εμπαικτικώς ωνομάσθη Αυγουστύλος, υπήρξεν ολιγώτερον κατακλυσμός και μάλλον η τυπική περάτωσις διεργασίας που εξελισσόταν επί ήμισυν αιώνα: ο στρατός της Ιταλίας, στρατολογημένος εν πολλοίς εκ Ερούλων και Σκίρων, απλώς απέπεμψε τον ανδρείκελον και απέστειλε τα αυτοκρατορικά διάσημα εις τη Κωνσταντινούπολιν. Ο Οδόακρος εβασίλευσεν ως rex, προσποιούμενος ότι εκυβέρνα τη Ιταλίαν εν ονόματι του ανατολικού αυτοκράτορος, και ο Ζήνων τακτικώς υπεστήριξε τη φαντασίωσιν, ενώ ταυτοχρόνως εμηχανεύετο τη οστρογοτθικήν εισβολήν του Θεοδωρίχου που θα τον αντικαθιστούσε το 493. Οι σύγχρονοι ανατολίται δεν εθεώρουν το 476 ως πτώσιν της Ρώμης — δι' αυτούς η αυτοκρατορία εξηκολούθει, ενσαρκωμένη εν τη Κωνσταντινουπόλει — και η ημερομηνία απέκτησεν συμβολικόν βάρος μόνον με τη μετέπειτα ουμανιστικήν ιστοριογραφίαν. Πλην όμως, από τούτου του έτους και εφεξής, η Μεσόγειος ήτο κόσμος εις τον οποίον το ρωμαϊκόν όνομα ανήκεν εις μίαν και μόνην πρωτεύουσαν."
          },
          category: "political"
        }
      ]
    },
    {
      year: 502,
      era: {
        en: "Anastasian Persian War",
        el: "Αναστασιανός Περσικός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Anastasian War with Persia",
            el: "Ο Αναστασιανός Πόλεμος με την Περσίαν"
          },
          description: {
            en: "Kavad I attacks the eastern frontier and storms Amida, opening the first major war between Rome and Sasanian Persia in nearly a century and prompting Anastasius to fortify Dara as the new Roman bulwark in Mesopotamia.",
            el: "Ο Καβάδης Α΄ επιτίθεται κατά του ανατολικού μετώπου και αλώνει την Άμιδαν, εγκαινιάζων τον πρώτον μεγάλον πόλεμον μεταξύ Ρώμης και Σασανιδικής Περσίας μετά παρέλευσιν ενός σχεδόν αιώνος και ωθών τον Αναστάσιον να οχυρώση τα Δάρα ως νέον ρωμαϊκόν προπύργιον εν τη Μεσοποταμία."
          },
          extendedDescription: {
            en: "After eighty years of broken peace, Kavad, hard-pressed at home by the social-religious revolution of Mazdak and by tribute owed to the Hephthalite Huns, demanded that Anastasius resume the customary Roman subsidies for the joint defence of the Caucasus. When the emperor refused, the king of kings invaded Roman Armenia, took Theodosiopolis, and laid siege to Amida, which fell after eighty days of bitter resistance. Joshua the Stylite, our principal source, describes Persian engineers tunnelling under the walls and citizens defending the breaches with women and children passing stones. Roman counter-offensives under Areobindus, Patricius and Hypatius were ill-coordinated and largely unsuccessful, and the war ended in 506 with a seven-year truce that left the strategic balance roughly unchanged. The most consequential result was Anastasius's decision to convert the village of Dara into a great fortress directly opposite the Persian stronghold of Nisibis, in flagrant violation of an old treaty, providing the Roman command in Mesopotamia with a base from which Belisarius would later fight in Justinian's wars.",
            el: "Μετά παρέλευσιν ογδοήκοντα ετών διατεταραγμένης ειρήνης, ο Καβάδης, πιεζόμενος εν τω οίκω του υπό της κοινωνικο-θρησκευτικής επαναστάσεως του Μαζδάκ και του φόρου υποτελείας προς τους Ευθαλίτας Ούννους, απήτησε να αναλάβη ο Αναστάσιος εκ νέου τας συνήθεις ρωμαϊκάς επιχορηγήσεις διά την κοινήν άμυναν του Καυκάσου. Αρνηθέντος του αυτοκράτορος, ο βασιλεύς των βασιλέων εισέβαλεν εις την ρωμαϊκήν Αρμενίαν, κατέλαβε την Θεοδοσιούπολιν και επολιόρκησε την Άμιδαν, ήτις έπεσεν μετά ογδοήκοντα ημέρας πικράς αντιστάσεως. Ο Ιησούς ο Στυλίτης, η κύρια ημών πηγή, περιγράφει Πέρσας μηχανικούς διανοίγοντας υπονόμους κάτωθεν των τειχών και πολίτας υπερασπιζομένους τα ρήγματα με γυναίκας και παιδία να μεταφέρουν λίθους. Αι ρωμαϊκαί αντεπιθέσεις υπό τον Αρεόβινδον, τον Πατρίκιον και τον Υπάτιον υπήρξαν ανεπαρκώς συντονισμέναι και εν μεγάλω βαθμώ ανεπιτυχείς, και ο πόλεμος ετερματίσθη το 506 διά εκεχειρίας επταετούς που άφησε την στρατηγικήν ισορροπίαν περίπου αμετάβλητον. Η σημαντικωτέρα συνέπεια υπήρξεν η απόφασις του Αναστασίου να μεταβάλη την κωμόπολιν των Δάρων εις μέγα φρούριον αντικρύ του περσικού οχυρού της Νισίβιος, εις κατάφωρον παραβίασιν παλαιάς συνθήκης, παρέχων εις την ρωμαϊκήν διοίκησιν εν Μεσοποταμία ορμητήριον εκ του οποίου ο Βελισάριος θα ηγωνίζετο αργότερον εις τους πολέμους του Ιουστινιανού."
          },
          category: "military"
        }
      ]
    },
    {
      year: 527,
      era: {
        en: "Justinianic Dynasty",
        el: "Δυναστεία Ιουστινιανού"
      },
      events: [
        {
          title: {
            en: "Accession of Justinian I",
            el: "Η ανάβαση του Ιουστινιανού Α΄ στον θρόνο"
          },
          description: {
            en: "Justinian and Theodora begin a reign marked by legal reform, monumental building, and the attempt to restore the Roman Mediterranean.",
            el: "Ο Ιουστινιανός και η Θεοδώρα ξεκινούν μια βασιλεία που χαρακτηρίζεται από νομική μεταρρύθμιση, μνημειακές κατασκευές και την προσπάθεια αποκατάστασης της Ρωμαϊκής Μεσογείου."
          },
          extendedDescription: {
            en: "Born Petrus Sabbatius in an Illyrian peasant family, Justinian had effectively governed since the accession of his uncle Justin I in 518 and brought to the throne a programme of breathtaking ambition: codification of Roman law, reconquest of the lost western provinces, the religious reunification of Chalcedonians and Miaphysites, and a building campaign without parallel since Augustus. His marriage to the actress Theodora, made possible by a special law lifting the prohibition on senators marrying entertainers, gave him a partner of formidable political acumen who would prove decisive at the Nika riots and in shaping religious policy. The reign drew on the talents of an extraordinary generation — Tribonian, Belisarius, Narses, Procopius, John the Cappadocian, and the architects of Hagia Sophia — and would leave the empire exhausted but transformed.",
            el: "Γεννηθείς Πέτρος Σαββάτιος εις ιλλυρικήν αγροτικήν οικογένειαν, ο Ιουστινιανός ουσιαστικώς εκυβέρνα από της ανόδου του θείου του Ιουστίνου Α΄ το 518, και εκόμισεν εις τον θρόνον πρόγραμμα ιλιγγιώδους φιλοδοξίας: κωδικοποίησιν του ρωμαϊκού δικαίου, ανάκτησιν των απολεσθεισών δυτικών επαρχιών, θρησκευτικήν επανένωσιν Χαλκηδονίων και Μονοφυσιτών και οικοδομικόν πρόγραμμα άνευ παραλλήλου από του Αυγούστου. Ο γάμος του με τη Θεοδώραν, ηθοποιόν, καταστάς δυνατός χάρις εις ειδικόν νόμον που ήρε την απαγόρευσιν γάμου συγκλητικών μετά γυναικών του θεάτρου, του παρέσχε σύντροφον φοβεράς πολιτικής οξύτητος, η οποία θα απεδεικνύετο καθοριστική κατά τα Νικά και εις τη διαμόρφωσιν της θρησκευτικής πολιτικής. Η βασιλεία ήντλησεν από τα τάλαντα μιας εξαιρετικής γενεάς — Τριβωνιανού, Βελισαρίου, Ναρσή, Προκοπίου, Ιωάννου του Καππαδόκου και των αρχιτεκτόνων της Αγίας Σοφίας — και θα άφηνε τη Ρωμανίαν εξηντλημένην αλλά μεταμορφωμένην."
          },
          category: "political"
        }
      ]
    },
    {
      year: 532,
      era: {
        en: "Justinianic Dynasty",
        el: "Δυναστεία Ιουστινιανού"
      },
      events: [
        {
          title: {
            en: "Nika Riots",
            el: "Οι ταραχές του Νίκα"
          },
          description: {
            en: "A rebellion of the circus factions nearly topples Justinian; Theodora's resolve and Belisarius's troops save the throne. Much of Constantinople burns.",
            el: "Μια εξέγερση των ιπποδρόμων φατριών σχεδόν ανατρέπει τον Ιουστινιανό· η αποφασιστικότητα της Θεοδώρας και τα στρατεύματα του Βελισαρίου σώζουν τον θρόνο. Μεγάλο μέρος της Κωνσταντινούπολης καίγεται."
          },
          extendedDescription: {
            en: "Heavy taxation imposed by John of Cappadocia and resentment of unpopular ministers had united the rival Blue and Green circus factions, normally bitter enemies. From the Hippodrome cry of 'Nika!' — 'Conquer!' — the demonstrators turned to arson, gutting the original Hagia Sophia and the Senate House, and acclaimed an alternate emperor. Justinian was on the point of fleeing by ship when, by Procopius' account, Theodora rallied him with her famous declaration that 'royalty is a fine burial-shroud.' Belisarius and Mundus then trapped some thirty thousand rioters in the Hippodrome and slaughtered them. The reign was secured, but the burnt city would be rebuilt to a far more imperial design.",
            el: "Η βαριά φορολογία που επέβαλε ο Ιωάννης ο Καππαδόκης και η αγανάκτηση κατά μη δημοφιλών υπουργών είχαν ενώσει τις αντίπαλες δήμους των Βενέτων και των Πρασίνων, υπό κανονικές συνθήκες πικροί εχθροί. Από το κάλεσμα του Ιπποδρόμου 'Νίκα!' οι διαδηλωτές πέρασαν σε εμπρησμό, καταστρέφοντας την αρχική Αγία Σοφία και το Σύγκλητο, και αναγόρευσαν αντι-αυτοκράτορα. Ο Ιουστινιανός ήταν έτοιμος να διαφύγει με πλοίο όταν, κατά τον Προκόπιο, η Θεοδώρα τον ανακούφισε με τη ξακουστή της δήλωση ότι 'η βασιλεία είναι ωραίο ένδυμα ταφής'. Ο Βελισάριος και ο Μούνδος παγίδευσαν στη συνέχεια περίπου τριάντα χιλιάδες εξεγερμένους στον Ιππόδρομο και τους κατέσφαξαν. Η βασιλεία εξασφαλίστηκε, αλλά η καμένη πόλη θα ξανακτιζόταν σε πολύ πιο αυτοκρατορικό σχέδιο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 537,
      era: {
        en: "Justinianic Dynasty",
        el: "Δυναστεία Ιουστινιανού"
      },
      events: [
        {
          title: {
            en: "Consecration of Hagia Sophia",
            el: "Τα εγκαίνια της Αγίας Σοφίας"
          },
          description: {
            en: "The 'Great Church' designed by Anthemios of Tralles and Isidoros of Miletos is dedicated. Justinian reportedly exclaims, 'Solomon, I have surpassed thee!'",
            el: "Η Μεγάλη Εκκλησία που σχεδίασαν ο Ανθέμιος της Τράλλης και ο Ισίδωρος της Μιλήτου εγκαινιάζεται. Λέγεται ότι ο Ιουστινιανός ανέφωνε: «Σολομών, σε υπερέβην!»"
          },
          extendedDescription: {
            en: "Built in only five years on the site of two earlier basilicas burned in the Nika riots, the Great Church combined a square plan with a vast central dome 31 meters across, set on four pendentives over arches that allowed the masonry to seem to float on a ring of forty windows. The mathematicians-architects Anthemios and Isidoros applied principles drawn from Heron and Apollonios; ten thousand workmen and the wealth of the empire were poured into the project. Polychrome marbles, mosaics, and a silver iconostasis filled the interior, where the Patriarch and emperor both took ceremonial roles. For nine centuries Hagia Sophia was the largest enclosed space in the world; it remained the cathedral of Eastern Christendom and the architectural template of Orthodox church-building.",
            el: "Κτισμένη μέσα σε μόλις πέντε χρόνια στη θέση δύο προηγούμενων βασιλικών που είχαν καεί στα Νίκα, η Μεγάλη Εκκλησία συνδύαζε τετράγωνη κάτοψη με τεράστιο κεντρικό τρούλο 31 μέτρων διαμέτρου, στηριζόμενο σε τέσσερα σφαιρικά τρίγωνα πάνω σε τόξα που έκαναν την τοιχοποιία να φαίνεται να αιωρείται σε δακτύλιο σαράντα παραθύρων. Οι μαθηματικοί-αρχιτέκτονες Ανθέμιος και Ισίδωρος εφάρμοσαν αρχές αντλημένες από τον Ήρωνα και τον Απολλώνιο· δέκα χιλιάδες εργάτες και ο πλούτος της αυτοκρατορίας διοχετεύτηκαν στο έργο. Πολύχρωμα μάρμαρα, ψηφιδωτά και ασημένιο τέμπλο γέμισαν το εσωτερικό, όπου ο Πατριάρχης και ο αυτοκράτορας ανελάμβαναν αμφότεροι τελετουργικούς ρόλους. Επί εννέα αιώνες η Αγία Σοφία ήταν ο μεγαλύτερος κλειστός χώρος στον κόσμο· παρέμεινε ο μητροπολιτικός ναός της Ανατολικής Χριστιανοσύνης και το αρχιτεκτονικό πρότυπο της ορθόδοξης ναοδομίας."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hagia_Sophia_Mars_2013.jpg?width=1024",
            alt: {
              en: "Exterior of Hagia Sophia in Constantinople (Istanbul)",
              el: "Εξωτερική όψη της Αγίας Σοφίας στην Κωνσταντινούπολη"
            },
            credit: "Wikimedia Commons / Arild Vågen, CC BY-SA"
          }
        }
      ]
    },
    {
      year: 540,
      era: {
        en: "Justinianic Dynasty",
        el: "Δυναστεία Ιουστινιανού"
      },
      events: [
        {
          title: {
            en: "Plague of Justinian",
            el: "Η πανώλη του Ιουστινιανού"
          },
          description: {
            en: "The first recorded pandemic sweeps through Constantinople and the Mediterranean, killing millions and weakening the empire's economy and military recruitment.",
            el: "Η πρώτη καταγεγραμμένη πανδημία σαρώνει την Κωνσταντινούπολη και τη Μεσόγειο, σκοτώνοντας εκατομμύρια ανθρώπους και αποδυναμώνοντας την οικονομία και στρατιωτικές δυνάμεις της αυτοκρατορίας."
          },
          extendedDescription: {
            en: "Procopius' eyewitness account places the disease's arrival at Pelusium in Egypt in 541 and its outbreak in the capital in 542; modern paleogenetics has identified the pathogen as Yersinia pestis — the same organism responsible for the Black Death eight centuries later. At its height the plague is said to have killed five thousand a day in Constantinople; Justinian himself fell ill but recovered. The pandemic returned in cycles for two centuries, draining manpower at the height of the western reconquests, contributing to fiscal collapse, and probably halving the empire's population. Most modern historians regard it as a pivotal factor in the empire's failure to consolidate Justinian's Mediterranean restoration.",
            el: "Η αυτοπρόσωπη μαρτυρία του Προκοπίου τοποθετεί την άφιξη της νόσου στο Πηλούσιο της Αιγύπτου το 541 και την έξαρσή της στην πρωτεύουσα το 542· η σύγχρονη παλαιογενετική έχει αναγνωρίσει το παθογόνο ως Yersinia pestis — τον ίδιο μικροοργανισμό που ευθύνεται για τον Μαύρο Θάνατο οκτώ αιώνες αργότερα. Στην κορύφωσή του ο λοιμός φέρεται να σκότωνε πέντε χιλιάδες την ημέρα στην Κωνσταντινούπολη· ο ίδιος ο Ιουστινιανός αρρώστησε αλλά ανάρρωσε. Η πανδημία επανερχόταν σε κύματα επί δύο αιώνες, αποστραγγίζοντας ανθρώπινο δυναμικό στην κορύφωση της δυτικής ανάκτησης, συμβάλλοντας σε δημοσιονομική κατάρρευση και πιθανόν μειώνοντας στο μισό τον πληθυσμό της αυτοκρατορίας. Οι περισσότεροι σύγχρονοι ιστορικοί τη θεωρούν καθοριστικό παράγοντα στην αδυναμία της αυτοκρατορίας να εδραιώσει τη μεσογειακή αποκατάσταση του Ιουστινιανού."
          },
          category: "other"
        }
      ]
    },
    {
      year: 542,
      era: {
        en: "Justinianic Dynasty",
        el: "Δυναστεία Ιουστινιανού"
      },
      events: [
        {
          title: {
            en: "Death of Belisarius's wife Antonina",
            el: "Ο θάνατος της Αντωνίνας, συζύγου του Βελισαρίου"
          },
          description: {
            en: "The influential Antonina, wife of the great general Belisarius, dies. Her political maneuvering had been crucial in court politics during the reconquest.",
            el: "Η επιδραστική Αντωνίνα, σύζυγος του μεγάλου στρατηγού Βελισαρίου, πεθαίνει. Τα πολιτικά της δίχτυα ήταν κρίσιμα στην αυλική πολιτική κατά την ανάκτηση."
          },
          extendedDescription: {
            en: "Daughter of a charioteer and former actress like her friend Theodora, Antonina accompanied Belisarius on the Vandal and Gothic campaigns and is reported by Procopius (in both his official and Secret histories) to have served as her husband's de facto deputy in the field. Her partnership with the empress made her the most powerful woman at court after Theodora, and she used that influence to bring down their common enemy John of Cappadocia. Procopius' Secret History, vehemently hostile, charges her with adultery, sorcery, and intrigue; the truth is harder to recover. Her death — the dating is in fact disputed, with some sources placing it after 565 — removed one of the great political operators of the reign.",
            el: "Κόρη ηνιόχου και πρώην ηθοποιός όπως η φίλη της Θεοδώρα, η Αντωνίνα συνόδευσε τον Βελισάριο στις εκστρατείες κατά Βανδάλων και Γότθων και κατά τον Προκόπιο (τόσο στην επίσημη όσο και στην Απόκρυφη ιστορία του) λειτούργησε de facto ως υπαρχηγός του συζύγου της στο πεδίο. Η συνεργασία της με την αυτοκράτειρα την κατέστησε την ισχυρότερη γυναίκα στην αυλή μετά τη Θεοδώρα, και χρησιμοποίησε την επιρροή αυτή για να ανατρέψει τον κοινό τους εχθρό, τον Ιωάννη τον Καππαδόκη. Η Απόκρυφη Ιστορία του Προκοπίου, σφοδρά εχθρική, την κατηγορεί για μοιχεία, μαγεία και συνωμοσίες· η αλήθεια είναι δυσκολότερο να ανασυρθεί. Ο θάνατός της — η χρονολογία είναι αμφισβητούμενη, με ορισμένες πηγές να τον τοποθετούν μετά το 565 — αφαίρεσε από τη βασιλεία έναν από τους μεγαλύτερους πολιτικούς διεκπεραιωτές της."
          },
          category: "political"
        }
      ]
    },
    {
      year: 554,
      era: {
        en: "Justinianic Dynasty",
        el: "Δυναστεία Ιουστινιανού"
      },
      events: [
        {
          title: {
            en: "Reconquest of Italy completed",
            el: "Ολοκλήρωση της ανάκτησης της Ιταλίας"
          },
          description: {
            en: "With the Pragmatic Sanction Justinian reorganises reconquered Italy; Africa, Italy and parts of Spain are once again under Roman rule.",
            el: "Με το Πραγματικό Διάταγμα ο Ιουστινιανός αναοργανώνει την ανακτηθείσα Ιταλία· η Αφρική, η Ιταλία και μέρη της Ισπανίας επανέρχονται υπό ρωμαϊκή κυριαρχία."
          },
          extendedDescription: {
            en: "After two decades of campaigning that had laid waste to the peninsula, Belisarius and especially Narses had broken Ostrogothic resistance at Taginae and Mons Lactarius. The Pragmatic Sanction of 13 August 554 restored confiscated estates to senatorial families, suppressed Ostrogothic legal arrangements, and re-extended the Justinianic Code over Italy, while imposing heavy taxes to pay for the reconquest. Procopius famously estimated that the wars had cost Italy more lives than any earlier disaster. Together with the African and southern Spanish provinces won earlier, the reconquests momentarily restored a Mediterranean empire — but at such cost in money, manpower, and devastation that the new western provinces would soon fall to the Lombards and Visigoths.",
            el: "Μετά από δύο δεκαετίες εκστρατειών που είχαν ερημώσει τη χερσόνησο, ο Βελισάριος και ιδίως ο Ναρσής είχαν θραύσει την οστρογοτθική αντίσταση στα Τάγινα και στον Λακταρίο. Η Pragmatica Sanctio της 13ης Αυγούστου 554 αποκατέστησε τις δημευμένες περιουσίες στις συγκλητικές οικογένειες, κατήργησε τις οστρογοτθικές νομικές διευθετήσεις και επανέφερε τον Ιουστινιάνειο Κώδικα στην Ιταλία, επιβάλλοντας ταυτόχρονα βαριούς φόρους για να καλυφθεί το κόστος της ανάκτησης. Ο Προκόπιος ανέφερε εκτιμώντας ότι ο πόλεμος είχε στοιχίσει στην Ιταλία περισσότερες ζωές από κάθε προηγούμενη καταστροφή. Μαζί με τις αφρικανικές και τις νότιες ισπανικές επαρχίες που είχαν κερδηθεί νωρίτερα, οι ανακτήσεις αποκατέστησαν στιγμιαία μια μεσογειακή αυτοκρατορία — αλλά με τόσο κόστος σε χρήμα, ανθρώπινο δυναμικό και ερήμωση, ώστε οι νέες δυτικές επαρχίες σύντομα θα έπεφταν στους Λογγοβάρδους και τους Βησιγότθους."
          },
          category: "military"
        }
      ]
    },
    {
      year: 610,
      era: {
        en: "Heraclian Dynasty",
        el: "Δυναστεία Ηράκλειου"
      },
      events: [
        {
          title: {
            en: "Heraclius seizes the throne",
            el: "Ο Ηράκλειος κατακτά τον θρόνο"
          },
          description: {
            en: "Sailing from Africa, Heraclius overthrows the tyrant Phocas and inherits an empire besieged by Sasanid Persia and the Avars.",
            el: "Πλέοντας από την Αφρική, ο Ηράκλειος ανατρέπει τον τύραννο Φώκα και κληρονομεί μια αυτοκρατορία που πολιορκείται από τους Σασανίδες Πέρσες και τους Άβαρες."
          },
          extendedDescription: {
            en: "The brutal coup that had brought Phocas to power in 602 had thrown the army into revolt and given the Sasanian king Khosrow II the pretext for a generation of devastating war. The exarch of Africa Heraclius the Elder dispatched his son with a small fleet from Carthage; the people opened the harbor chains, and Phocas was hauled before the new emperor and beheaded. The empire Heraclius inherited had already lost much of Syria; in the next decade Persia would seize Antioch, Damascus, Jerusalem (carrying off the True Cross), and Egypt, while the Avars besieged the Balkans. Few rulers have come to power facing a worse strategic position; over the next twenty years he would reverse it.",
            el: "Το βίαιο πραξικόπημα που είχε ανεβάσει τον Φωκά στην εξουσία το 602 είχε ρίξει τον στρατό σε εξέγερση και είχε δώσει στον Σασσανίδη βασιλιά Χοσρόη Β΄ το πρόσχημα για πόλεμο μιας ολόκληρης γενιάς. Ο έξαρχος της Αφρικής, Ηράκλειος ο Πρεσβύτερος, απέστειλε τον γιο του με μικρό στόλο από την Καρχηδόνα· ο λαός άνοιξε τις αλυσίδες του λιμανιού και ο Φωκάς σύρθηκε ενώπιον του νέου αυτοκράτορα και αποκεφαλίστηκε. Η αυτοκρατορία που κληρονόμησε ο Ηράκλειος είχε ήδη χάσει μεγάλο μέρος της Συρίας· μέσα στην επόμενη δεκαετία η Περσία θα κατελάμβανε την Αντιόχεια, τη Δαμασκό, την Ιερουσαλήμ (αρπάζοντας τον Τίμιο Σταυρό) και την Αίγυπτο, ενώ οι Άβαρες πολιορκούσαν τα Βαλκάνια. Λίγοι ηγεμόνες έχουν αναλάβει την εξουσία αντιμετωπίζοντας χειρότερη στρατηγική θέση· τα επόμενα είκοσι χρόνια θα την αντέστρεφε."
          },
          category: "political"
        }
      ]
    },
    {
      year: 626,
      era: {
        en: "Heraclian Dynasty",
        el: "Δυναστεία Ηράκλειου"
      },
      events: [
        {
          title: {
            en: "Siege of Constantinople",
            el: "Η πολιορκία της Κωνσταντινούπολης"
          },
          description: {
            en: "The combined Avar–Sasanid assault on the capital fails. The victory is credited to the Theotokos, protector of the City.",
            el: "Η συνδυασμένη επίθεση των Αβάρων και Σασανιδών στην πρωτεύουσα αποτυγχάνει. Η νίκη αποδίδεται στη Θεοτόκο, προστάτιδα της Πόλης."
          },
          extendedDescription: {
            en: "While Heraclius was campaigning deep in Asia Minor against the Persians, an Avar khagan brought eighty thousand men, including Slavic auxiliaries, before the Theodosian walls; on the Asian side, the Persian army of Shahrbaraz watched but could not cross the Bosporus, since the Roman fleet held the strait. Patriarch Sergios paraded an icon of the Theotokos along the walls, and the city's defenders broke a flotilla of Slavic dugouts attempting to cross the Golden Horn. The Avar assault collapsed in failure. The Akathistos hymn — sung in Orthodox churches every Lent — celebrates the deliverance, and the title 'Champion General' (Ὑπέρμαχος Στρατηγός) attached to the Virgin from this day onward.",
            el: "Ενώ ο Ηράκλειος εκστράτευε βαθιά στη Μικρά Ασία εναντίον των Περσών, ο χάγανος των Αβάρων έφερε ογδόντα χιλιάδες άνδρες, μεταξύ των οποίων Σλάβοι επικουρικοί, μπροστά στα Θεοδοσιανά Τείχη· στην ασιατική πλευρά, ο περσικός στρατός του Σαρβαράζου παρατηρούσε αλλά δεν μπορούσε να διαβεί τον Βόσπορο, καθώς ο ρωμαϊκός στόλος κρατούσε τον πορθμό. Ο Πατριάρχης Σέργιος περιέφερε εικόνα της Θεοτόκου κατά μήκος των τειχών, και οι αμυνόμενοι της πόλης συνέτριψαν στόλο σλαβικών μονόξυλων που επιχείρησε να διαβεί τον Κεράτιο. Η επίθεση των Αβάρων κατέρρευσε. Ο Ακάθιστος Ύμνος — που ψάλλεται στους ορθόδοξους ναούς κάθε Σαρακοστή — εορτάζει τη σωτηρία, και ο τίτλος 'Ὑπέρμαχος Στρατηγός' απεδόθη στην Παναγία από εκείνη την ημέρα και έπειτα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 636,
      era: {
        en: "Heraclian Dynasty",
        el: "Δυναστεία Ηράκλειου"
      },
      events: [
        {
          title: {
            en: "Battle of Yarmuk",
            el: "Η μάχη του Γιαρμούκ"
          },
          description: {
            en: "The Arab armies crush the Romans in Syria; within a decade Syria, Palestine, Egypt and Mesopotamia are lost to the new Caliphate.",
            el: "Τα αραβικά στρατεύματα συντρίβουν τους Ρωμαίους στη Συρία· εντός μιας δεκαετίας η Συρία, Παλαιστίνη, Αίγυπτος και Μεσοποταμία χάνονται στο νέο Χαλιφάτο."
          },
          extendedDescription: {
            en: "Heraclius's nephew Theodore Trithyrius and the eunuch Vahan brought perhaps fifty thousand mostly Armenian and Anatolian troops to the river Yarmuk in southern Syria, where the Arab general Khalid ibn al-Walid faced them with a smaller but more cohesive force. After six days of skirmishing and political quarrels among the Roman commanders, a sandstorm blew into the Roman ranks on the sixth day; Khalid attacked, the Christian Arab Ghassanid auxiliaries deserted, and the army was crushed. Within four years Damascus, Antioch, Jerusalem, and the Levant were Caliphate territory; Heraclius, on hearing the news, is said to have bid Syria farewell from the Cilician gates: 'Peace unto thee, Syria; what a beautiful land for the enemy.'",
            el: "Ο ανηψιός του Ηρακλείου Θεόδωρος ο Τριθύριος και ο ευνούχος Βαχάν έφεραν ίσως πενήντα χιλιάδες, κυρίως Αρμενίους και ανατολίτες στρατιώτες, στον Ιερομύακα ποταμό της νότιας Συρίας, όπου ο άραβας στρατηγός Χάλιντ ιμπν αλ-Ουαλίντ τους αντιμετώπισε με μικρότερη αλλά πιο συνεκτική δύναμη. Μετά από έξι ημέρες αψιμαχιών και πολιτικών διαφορών μεταξύ των Ρωμαίων διοικητών, αμμοθύελλα φύσηξε στις ρωμαϊκές γραμμές την έκτη ημέρα· ο Χάλιντ επιτέθηκε, οι χριστιανοί Άραβες Γασσανίδες επικουρικοί λιποτάκτησαν, και ο στρατός συνετρίβη. Μέσα σε τέσσερα χρόνια η Δαμασκός, η Αντιόχεια, η Ιερουσαλήμ και το Λεβάντε ήταν εδάφη του Χαλιφάτου· ο Ηράκλειος, μαθαίνοντας την είδηση, λέγεται ότι αποχαιρέτισε τη Συρία από τις πύλες της Κιλικίας: 'Ειρήνη μετά σου, Συρία· τί ωραία γη για τον εχθρό!'."
          },
          category: "military"
        }
      ]
    },
    {
      year: 641,
      era: {
        en: "Heraclian Dynasty",
        el: "Δυναστεία Ηράκλειου"
      },
      events: [
        {
          title: {
            en: "Death of Heraclius and Arab conquest of Egypt",
            el: "Ο θάνατος του Ηράκλειου και η αραβική κατάληψη της Αιγύπτου"
          },
          description: {
            en: "Heraclius dies after a disastrous reign that saw the loss of Syria, Palestine, and Egypt to the Arab Caliphate. His sons Constantine III and Heraklonas briefly rule together.",
            el: "Ο Ηράκλειος πεθαίνει μετά από μια καταστροφική βασιλεία που είδε την απώλεια της Συρίας, Παλαιστίνης και Αιγύπτου στο Χαλιφάτο. Οι γιοι του Κωνσταντίνος Γ΄ και Ηρακλωνάς κυβερνούν για λίγο μαζί."
          },
          extendedDescription: {
            en: "Heraclius had inherited a Persian crisis and resolved it brilliantly with the campaign that ended at Nineveh in 627; only to see his recovered eastern provinces collapse before the Arab tide a decade later. He died ill and demoralized, divided between Constantine III, son of his first marriage, and Heraklonas, son of his controversial niece-wife Martina. Their joint reign lasted months: Constantine died of tuberculosis (or, by rumor, poisoning by Martina), and the army deposed Heraklonas, slitting his nose and exiling him with his mother. The emperor Constans II, Heraclius's young grandson, emerged from the chaos to face the unstoppable expansion of the Caliphate. The historiographical reassessment that revived Heraclius's reputation as a heroic strategist began only in modern scholarship.",
            el: "Ο Ηράκλειος είχε κληρονομήσει την περσική κρίση και την είχε επιλύσει ένδοξα με την εκστρατεία που τερματίστηκε στη Νινευή το 627· μόνο για να δει τις ανακτηθείσες ανατολικές επαρχίες του να καταρρέουν μπροστά στο αραβικό κύμα μία δεκαετία αργότερα. Πέθανε άρρωστος και αποθαρρυμένος, διχασμένος μεταξύ του Κωνσταντίνου Γ΄, γιου του πρώτου του γάμου, και του Ηρακλωνά, γιου της αμφιλεγόμενης ανιψιάς-συζύγου του Μαρτίνας. Η συμβασιλεία τους κράτησε μήνες: ο Κωνσταντίνος πέθανε από φυματίωση (ή, κατά τη φήμη, από δηλητηρίαση από τη Μαρτίνα), και ο στρατός καθαίρεσε τον Ηρακλωνά, σχίζοντάς του τη μύτη και εξορίζοντάς τον μαζί με τη μητέρα του. Ο νεαρός εγγονός του Ηρακλείου, Κώνστας Β΄, αναδύθηκε από το χάος για να αντιμετωπίσει την ασταμάτητη επέκταση του Χαλιφάτου. Η αναθεώρηση που αποκατέστησε τη φήμη του Ηρακλείου ως ηρωικού στρατηγού άρχισε μόλις στη σύγχρονη ιστοριογραφία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 642,
      era: {
        en: "Heraclian Dynasty",
        el: "Δυναστεία Ηράκλειου"
      },
      events: [
        {
          title: {
            en: "Fall of Alexandria",
            el: "Η πτώση της Αλεξάνδρειας"
          },
          description: {
            en: "The Arab conquest of Egypt is completed with the capture of Alexandria, ending over 600 years of Roman rule in the province.",
            el: "Η αραβική κατάληψη της Αιγύπτου ολοκληρώνεται με την κατάληψη της Αλεξάνδρειας, τερματίζοντας πάνω από 600 χρόνια ρωμαϊκής κυριαρχίας στην επαρχία."
          },
          extendedDescription: {
            en: "Amr ibn al-As had taken the Roman provincial fortress of Babylon (in present-day Cairo) the previous year. The patriarch and former governor Cyrus negotiated the surrender of Alexandria after a long siege, agreeing to evacuate the imperial garrison; the Caliphate guaranteed the property and worship of those who remained. A brief Roman recovery in 645 was reversed within months, and Alexandria, the second city of the empire, passed permanently from Roman rule. The loss of Egypt — the empire's principal grain supplier and richest tax province — was a structural blow that the truncated empire would feel for centuries, forcing the army to live on Anatolian and Balkan resources alone.",
            el: "Ο Άμρ ιμπν αλ-Ας είχε καταλάβει το ρωμαϊκό επαρχιακό φρούριο της Βαβυλώνος (στο σημερινό Κάιρο) τον προηγούμενο χρόνο. Ο πατριάρχης και πρώην κυβερνήτης Κύρος διαπραγματεύτηκε την παράδοση της Αλεξάνδρειας μετά από μακρά πολιορκία, συμφωνώντας να εκκενώσει την αυτοκρατορική φρουρά· το Χαλιφάτο εγγυήθηκε την περιουσία και τη λατρεία όσων παρέμειναν. Σύντομη ρωμαϊκή ανακατάληψη το 645 αντιστράφηκε μέσα σε μήνες, και η Αλεξάνδρεια, η δεύτερη πόλη της αυτοκρατορίας, πέρασε οριστικά από τη ρωμαϊκή κυριαρχία. Η απώλεια της Αιγύπτου — του κυριότερου προμηθευτή σιτηρών και της πλουσιότερης φορολογικής επαρχίας της αυτοκρατορίας — υπήρξε δομικό πλήγμα που η ακρωτηριασμένη αυτοκρατορία θα ένιωθε επί αιώνες, αναγκάζοντας τον στρατό να συντηρείται μόνο με ανατολίτικους και βαλκανικούς πόρους."
          },
          category: "military"
        }
      ]
    },
    {
      year: 655,
      era: {
        en: "Heraclian Dynasty",
        el: "Δυναστεία Ηράκλειου"
      },
      events: [
        {
          title: {
            en: "Battle of the Masts",
            el: "Η μάχη των Ιστών"
          },
          description: {
            en: "An imperial fleet led personally by Constans II is annihilated off the Lycian coast by the new Arab navy of Mu'awiya, ending Roman naval supremacy in the eastern Mediterranean.",
            el: "Αυτοκρατορικός στόλος υπό τον ίδιον τον Κώνσταντα Β΄ εξολοθρεύεται έξωθεν της λυκιακής ακτής υπό του νέου αραβικού ναυτικού του Μωαβία, τερματίζων την ρωμαϊκήν ναυτικήν υπεροχήν εις την ανατολικήν Μεσόγειον."
          },
          extendedDescription: {
            en: "After the loss of Egypt and Syria, the empire still commanded the seas, on which the supply of grain to the capital and the cohesion of its remaining provinces depended. Mu'awiya, governor of Syria and architect of Arab sea-power, had built fleets at Acre and Alexandria using captive Coptic and Syrian shipwrights, and in 655 led perhaps two hundred vessels into the Aegean. Constans II, then in the prime of his reign, met him off the Lycian harbour of Phoinix at the head of a larger Roman fleet. According to Theophanes, the ships were lashed together — Arab and Roman alike — for boarding combat that resembled a land battle conducted on water, and so close-fought that the emperor himself exchanged armour with a soldier to escape capture, while the sea ran red with the blood of his men. Of the Roman fleet little remained. Although a revolt in Syria and the first fitna delayed Arab exploitation of the victory, the strategic implication was permanent: Roman command of the eastern sea was over, and the islands and coasts of the empire were exposed to a generation of raiding that would culminate in the great siege of 674–678.",
            el: "Μετά την απώλειαν της Αιγύπτου και της Συρίας, η αυτοκρατορία εξακολουθούσεν να κυριαρχή εις τας θαλάσσας, εξ ων εξηρτάτο η τροφοδοσία της πρωτευούσης διά σίτου και η συνοχή των επιλοίπων επαρχιών της. Ο Μωαβίας, διοικητής της Συρίας και αρχιτέκτων της αραβικής ναυτικής δυνάμεως, είχεν οικοδομήσει στόλους εις την Πτολεμαΐδα και την Αλεξάνδρειαν διά αιχμαλώτων κοπτών και σύρων ναυπηγών, και το 655 ωδήγησεν ίσως διακόσια σκάφη εις το Αιγαίον. Ο Κώνστας Β΄, εις την ακμήν της βασιλείας του, τον αντιμετώπισεν έναντι του λυκιακού λιμένος του Φοίνικος, επί κεφαλής μεγαλυτέρου ρωμαϊκού στόλου. Κατά τον Θεοφάνη, τα πλοία εδέθησαν αλλήλοις — αραβικά και ρωμαϊκά ομοίως — διά μάχης εκ του συστάδην που ομοίαζε προς χερσαίαν επιχείρησιν εκτελουμένην επί υδάτων, και τόσον εκ του πλησίον διεξήχθη ώστε ο αυτοκράτωρ αυτός αντήλλαξε πανοπλίαν με στρατιώτην διά να διαφύγη την σύλληψιν, ενώ η θάλασσα έβαψεν εκ του αίματος των ανδρών του. Εκ του ρωμαϊκού στόλου ολίγα απέμεινον. Καίτοι εξέγερσις εν Συρία και η πρώτη φιτνά εκαθυστέρησαν την εκμετάλλευσιν της νίκης υπό των Αράβων, η στρατηγική συνέπεια υπήρξε μόνιμος: η ρωμαϊκή κυριαρχία της ανατολικής θαλάσσης ετερματίσθη, και αι νήσοι και αι ακταί της αυτοκρατορίας εξετέθησαν εις γενεάν επιδρομών, που θα εκορυφούτο εις την μεγάλην πολιορκίαν του 674–678."
          },
          category: "military"
        }
      ]
    },
    {
      year: 668,
      era: {
        en: "Heraclian Dynasty",
        el: "Δυναστεία Ηράκλειου"
      },
      events: [
        {
          title: {
            en: "Murder of Constans II",
            el: "Ο φόνος του Κωνσταντίνου Β΄"
          },
          description: {
            en: "Constans II, who had moved the imperial court to Syracuse and attempted to centralize control in the West, is assassinated in his bath. Constantine IV succeeds him.",
            el: "Ο Κωνστάντιος Β΄, που είχε μεταφέρει την αυλή στη Συρακούσα και επιχείρησε να κεντρικοποιήσει τον έλεγχο στη Δύση, δολοφονείται στο μπάνιό του. Ο Κωνσταντίνος Δ΄ τον διαδέχεται."
          },
          extendedDescription: {
            en: "Disliked in Constantinople for his role in the murder of his brother Theodosius and his support of Monothelitism, Constans transferred the court to Syracuse in 663, perhaps intending to make Sicily the new center of an embattled western empire. His tax demands and abrasive manner alienated the Italians and the western army. He was struck down in the bath at Daphne with a soap-dish wielded by his chamberlain Andrew. The army of Sicily proclaimed the Armenian Mezezius emperor, but he was overthrown and beheaded within months by Constantine IV, who returned the court to Constantinople. The episode confirmed that, after the Arab conquests, the empire's center of gravity could no longer be moved off the Bosporus.",
            el: "Αντιπαθής στην Κωνσταντινούπολη λόγω του ρόλου του στη δολοφονία του αδελφού του Θεοδοσίου και της υποστήριξής του στον Μονοθελητισμό, ο Κώνστας μετέφερε την αυλή στις Συρακούσες το 663, ίσως με την πρόθεση να καταστήσει τη Σικελία το νέο κέντρο μιας πολιορκούμενης δυτικής αυτοκρατορίας. Οι φορολογικές απαιτήσεις και η σκληρή του συμπεριφορά αποξένωσαν τους Ιταλούς και τον δυτικό στρατό. Τον σκότωσαν στο λουτρό της Δάφνης με σαπουνοθήκη που χειρίστηκε ο θαλαμηπόλος του Ανδρέας. Ο στρατός της Σικελίας ανακήρυξε τον Αρμένιο Μεζέζιο αυτοκράτορα, αλλά εκείνος ανατράπηκε και αποκεφαλίστηκε μέσα σε μήνες από τον Κωνσταντίνο Δ΄, που επανέφερε την αυλή στην Κωνσταντινούπολη. Το επεισόδιο επιβεβαίωσε ότι, μετά τις αραβικές κατακτήσεις, το κέντρο βάρους της αυτοκρατορίας δεν μπορούσε πλέον να μετακινηθεί έξω από τον Βόσπορο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 678,
      era: {
        en: "Heraclian Dynasty",
        el: "Δυναστεία Ηράκλειου"
      },
      events: [
        {
          title: {
            en: "First Arab siege of Constantinople fails",
            el: "Η πρώτη αραβική πολιορκία της Κωνσταντινούπολης αποτυγχάνει"
          },
          description: {
            en: "The five-year Arab siege is broken by Byzantine use of Greek fire and the arrival of Bulgarian allies. The Caliphate's expansion is temporarily halted.",
            el: "Η πενταετής αραβική πολιορκία σπάει με τη χρήση του υγρού πυρ από τους Βυζαντινούς και την άφιξη βουλγαρικών συμμάχων. Η επέκταση του Χαλιφάτου σταματά προσωρινά."
          },
          extendedDescription: {
            en: "From 674 to 678 the Caliphate's fleet kept up an annual blockade from the base it had seized at Cyzicus. Constantine IV, in command of the defense, deployed a new weapon — the incendiary 'Greek fire' invented by the Syrian engineer Kallinikos — sprayed from siphons mounted on dromones to set the Umayyad ships ablaze in waters where seawater could not extinguish it. After the destruction of the besieging fleet and a costly land defeat in Lycia, Caliph Mu'awiya signed a thirty-year peace and agreed to pay tribute. Theophanes regarded the deliverance as comparable to that of 626; in modern military history it is often paired with Tours (732) as a turning point that preserved Christian Europe.",
            el: "Από το 674 έως το 678 ο στόλος του Χαλιφάτου διατηρούσε ετήσιο αποκλεισμό από τη βάση που είχε καταλάβει στην Κύζικο. Ο Κωνσταντίνος Δ΄, επικεφαλής της άμυνας, ανέπτυξε νέο όπλο — το εμπρηστικό 'υγρό πυρ' που είχε εφεύρει ο Σύρος μηχανικός Καλλίνικος — εκτοξευόμενο από σίφωνες τοποθετημένους σε δρόμωνες για να βάλει φωτιά στα πλοία των Ομαϊάδων σε νερά όπου το θαλασσινό νερό δεν μπορούσε να τη σβήσει. Μετά την καταστροφή του πολιορκούντος στόλου και μια δαπανηρή χερσαία ήττα στη Λυκία, ο χαλίφης Μωαβίας υπέγραψε τριαντάχρονη ειρήνη και δέχθηκε να καταβάλει φόρο υποτέλειας. Ο Θεοφάνης θεώρησε τη σωτηρία συγκρίσιμη με εκείνη του 626· στη σύγχρονη στρατιωτική ιστορία συχνά συνδέεται με την Τουρς (732) ως σημείο καμπής που διέσωσε τη χριστιανική Ευρώπη."
          },
          category: "military"
        }
      ]
    },
    {
      year: 681,
      era: {
        en: "Ecumenical Councils",
        el: "Οικουμενικαί Σύνοδοι"
      },
      events: [
        {
          title: {
            en: "Third Council of Constantinople",
            el: "Η Τρίτη εν Κωνσταντινουπόλει Σύνοδος"
          },
          description: {
            en: "The Sixth Ecumenical Council, summoned by Constantine IV, condemns Monothelitism and affirms two natural wills in Christ — closing the long Christological controversy that had divided the empire since Heraclius.",
            el: "Η Έκτη Οικουμενική Σύνοδος, συγκληθείσα υπό του Κωνσταντίνου Δ΄, καταδικάζει τον Μονοθελητισμόν και διακηρύσσει δύο φυσικά θελήματα εν Χριστώ — τερματίζουσα την μακράν χριστολογικήν διαμάχην ήτις είχε διαιρέσει την αυτοκρατορίαν από των ημερών του Ηρακλείου."
          },
          extendedDescription: {
            en: "Heraclius and his patriarch Sergius had devised the doctrine that Christ, though of two natures, possessed a single divine-human will and energy, hoping to reconcile the Monophysite communities of Egypt and Syria with the Chalcedonian church and present a united front to the Arabs. The compromise had been rejected in the West, anathematised by Pope Martin I at the Lateran Synod of 649 — for which Martin and Maximus the Confessor were arrested, mutilated and exiled by Constans II — and by 680 the empire had lost the eastern provinces it had been intended to reconcile. Constantine IV, having repulsed the Arabs from before Constantinople, summoned a council of some 170 bishops in the imperial palace and presided over its first eleven sessions in person. After ten months of debate, the council condemned the late patriarchs Sergius, Pyrrhus, Paul and Peter, together with Pope Honorius of Rome, and defined that Christ has two wills and two energies, the human will freely and unconfusedly conformed to the divine. The verdict reunited Rome and Constantinople, sealed the dyothelite definition that has remained Orthodox and Catholic doctrine ever since, and brought to a close the great age of Christological synods.",
            el: "Ο Ηράκλειος και ο πατριάρχης αυτού Σέργιος είχον επινοήσει το δόγμα ότι ο Χριστός, καίτοι εκ δύο φύσεων, εκέκτητο εν θεανθρώπινον θέλημα και ενέργειαν, ελπίζοντες να συμφιλιώσουν τας μονοφυσιτικάς κοινότητας της Αιγύπτου και της Συρίας με την χαλκηδονικήν εκκλησίαν και να παρουσιάσουν κοινόν μέτωπον έναντι των Αράβων. Ο συμβιβασμός είχεν απορριφθή εν τη Δύσει, αναθεματισθείς υπό του Πάπα Μαρτίνου Α΄ εν τη Λατερανική Συνόδω του 649 — διά τον οποίον λόγον ο Μαρτίνος και ο Μάξιμος ο Ομολογητής συνελήφθησαν, ηκρωτηριάσθησαν και εξωρίσθησαν υπό του Κώνσταντος Β΄ — και έως το 680 η αυτοκρατορία είχεν απολέσει τας ανατολικάς επαρχίας τας οποίας η συμφιλίωσις απέβλεπε να κρατήση. Ο Κωνσταντίνος Δ΄, αφού απέκρουσε τους Άραβας από προ της Κωνσταντινουπόλεως, συνεκάλεσε σύνοδον περίπου εκατόν εβδομήκοντα επισκόπων εις το αυτοκρατορικόν παλάτιον και προήδρευσε των πρώτων ένδεκα συνεδριάσεων αυτοπροσώπως. Μετά δεκάμηνον συζήτησιν, η σύνοδος κατεδίκασε τους τελευτήσαντας πατριάρχας Σέργιον, Πύρρον, Παύλον και Πέτρον, ομού μετά του Πάπα Ονωρίου της Ρώμης, και ώρισεν ότι ο Χριστός έχει δύο θελήματα και δύο ενεργείας, του ανθρωπίνου θελήματος ελευθέρως και ασυγχύτως συμμορφουμένου προς το θείον. Η απόφασις επανήνωσε την Ρώμην και την Κωνσταντινούπολιν, εσφράγισε τον δυοθελήτην ορισμόν που έκτοτε παραμένει ορθόδοξον και καθολικόν δόγμα, και έφερεν εις πέρας την μεγάλην εποχήν των χριστολογικών συνόδων."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 698,
      era: {
        en: "Heraclian Dynasty",
        el: "Δυναστεία Ηράκλειου"
      },
      events: [
        {
          title: {
            en: "Loss of Carthage",
            el: "Η απώλεια της Καρχηδόνας"
          },
          description: {
            en: "The Exarchate of Africa falls to the Arabs, ending Byzantine presence in North Africa west of Egypt and forcing the empire to rely on maritime trade.",
            el: "Το Εξαρχάτο της Αφρικής πέφτει στους Αράβους, τερματίζοντας την βυζαντινή παρουσία στη Βόρεια Αφρική δυτικά της Αιγύπτου και αναγκάζοντας την αυτοκρατορία να στηριχθεί στο ναυτικό εμπόριο."
          },
          extendedDescription: {
            en: "Justinian's reconquered African province had survived as the western Exarchate at Carthage for over a century, but Berber resistance to the Arabs had collapsed and the Umayyad armies of Hassan ibn al-Nu'man finally captured the city in 698, sacked it, and built a new garrison capital nearby at Tunis. A Byzantine relief expedition under John the Patrician briefly recovered Carthage but was driven out the next year. The fall ended an unbroken Roman presence in the western Mediterranean dating to the destruction of the Punic city by Scipio Aemilianus eight and a half centuries earlier. The exarchate's loss completed the empire's transformation into the predominantly Anatolian and Aegean state that historians call middle Byzantium.",
            el: "Η ανακτηθείσα αφρικανική επαρχία του Ιουστινιανού είχε επιβιώσει ως δυτικό Εξαρχάτο στην Καρχηδόνα για πάνω από έναν αιώνα, αλλά η αντίσταση των Βερβέρων στους Άραβες είχε καταρρεύσει και οι ομαϊαδικοί στρατοί του Χασσάν ιμπν αν-Νουμάν κατέλαβαν τέλος την πόλη το 698, τη λεηλάτησαν και έχτισαν νέα πρωτεύουσα-φρουρά κοντά στην Τυνισία. Βυζαντινή εκστρατεία ανακούφισης υπό τον πατρίκιο Ιωάννη ανακατέλαβε φευγαλέα την Καρχηδόνα αλλά εκδιώχθηκε τον επόμενο χρόνο. Η πτώση τερμάτισε αδιάλειπτη ρωμαϊκή παρουσία στη δυτική Μεσόγειο που χρονολογείτο από την καταστροφή της φοινικικής πόλης από τον Σκιπίωνα Αιμιλιανό οκτώμισι αιώνες νωρίτερα. Η απώλεια του εξαρχάτου ολοκλήρωσε τη μεταμόρφωση της αυτοκρατορίας στο κατά κύριο λόγο ανατολίτικο και αιγαιακό κράτος που οι ιστορικοί αποκαλούν μέσο Βυζάντιο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 717,
      era: {
        en: "Isaurian Dynasty",
        el: "Δυναστεία Ισαύρων"
      },
      events: [
        {
          title: {
            en: "Leo III and the second Arab siege",
            el: "Ο Λέων Γ΄ και η δεύτερη αραβική πολιορκία"
          },
          description: {
            en: "Leo the Isaurian takes the throne and, together with Greek fire, breaks the great Umayyad siege of Constantinople in 718 — a turning point for Europe.",
            el: "Ο Λέων ο Ισαύρης αναλαμβάνει τον θρόνο και, με τη βοήθεια του υγρού πυρ, σπάει τη μεγάλη πολιορκία των Ομαϊάδων της Κωνσταντινούπολης το 718 — σημείο καμπής για την Ευρώπη."
          },
          extendedDescription: {
            en: "Maslama's land army of perhaps eighty thousand and a fleet of eighteen hundred ships were the largest Arab force ever assembled against the capital. Leo, an experienced strategos of the Anatolikon theme, secured the throne by deposing the unpopular Theodosios III and immediately made the defense his own. The fleet was destroyed in two engagements with Greek-fire-throwing dromones, supplies were intercepted, the bitter winter of 717–718 froze the besiegers, and a Bulgarian attack on the Arab rear sealed their fate. Maslama withdrew having lost perhaps four-fifths of his army. The deliverance saved the imperial heartland and broke the Umayyad strategic momentum; the Caliphate would never again threaten Constantinople with such force.",
            el: "Ο χερσαίος στρατός του Μασλαμά, ίσως ογδόντα χιλιάδων, και στόλος χιλίων οκτακοσίων πλοίων ήταν η μεγαλύτερη αραβική δύναμη που είχε ποτέ συγκεντρωθεί εναντίον της πρωτεύουσας. Ο Λέων, έμπειρος στρατηγός του θέματος των Ανατολικών, εξασφάλισε τον θρόνο καθαιρώντας τον αντιδημοφιλή Θεοδόσιο Γ΄ και ανέλαβε αμέσως ο ίδιος την άμυνα. Ο στόλος καταστράφηκε σε δύο συμπλοκές από δρόμωνες που εκτόξευαν υγρό πυρ, οι προμήθειες διακόπηκαν, ο σκληρός χειμώνας του 717–718 πάγωσε τους πολιορκητές, και βουλγαρική επίθεση στα νώτα των Αράβων σφράγισε τη μοίρα τους. Ο Μασλαμάς αποσύρθηκε έχοντας χάσει ίσως τα τέσσερα πέμπτα του στρατού του. Η σωτηρία διέσωσε τον κορμό της αυτοκρατορίας και έθραυσε τη στρατηγική ορμή των Ομαϊάδων· το Χαλιφάτο δεν θα απειλούσε ξανά την Κωνσταντινούπολη με τέτοια δύναμη."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Greekfire-madridskylitzes1.jpg?width=1024",
            alt: {
              en: "Byzantine ship using Greek fire, Madrid Skylitzes manuscript (12th c.)",
              el: "Βυζαντινό πλοίο χρησιμοποιεί υγρό πυρ, χειρόγραφο Σκυλίτζη της Μαδρίτης (12ος αι.)"
            },
            credit: "Madrid Skylitzes, via Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 726,
      era: {
        en: "Isaurian Dynasty",
        el: "Δυναστεία Ισαύρων"
      },
      events: [
        {
          title: {
            en: "First Iconoclasm begins",
            el: "Αρχή της πρώτης εικονοκλασίας"
          },
          description: {
            en: "Leo III orders the removal of sacred images, igniting more than a century of religious and political strife.",
            el: "Ο Λέων Γ΄ διατάζει την αφαίρεση ιερών εικόνων, ανάβοντας πάνω από έναν αιώνα θρησκευτικής και πολιτικής σύγκρουσης."
          },
          extendedDescription: {
            en: "Following the catastrophic eruption of Thera-Santorini and other ill omens, Leo seems to have concluded that imperial reverses were divine punishment for the veneration of religious images, which the Old Testament forbade. He ordered the removal of the great icon of Christ Antiphonites over the Chalke gate of the palace; the soldier who climbed up was lynched by an outraged crowd of women. Two further imperial edicts widened the policy. The reasons for iconoclasm — Islamic and Jewish influence, theological scruple, anti-monastic politics, eastern provincial sentiment — remain debated. The controversy split the empire for over a century and definitively damaged relations with Rome, where the popes refused to comply.",
            el: "Έπειτα από την καταστροφική έκρηξη της Θήρας και άλλα δυσοίωνα σημεία, ο Λέων φαίνεται ότι κατέληξε στο συμπέρασμα ότι οι αυτοκρατορικές αντιξοότητες ήταν θεϊκή τιμωρία για την προσκύνηση των ιερών εικόνων, που η Παλαιά Διαθήκη απαγόρευε. Διέταξε την απομάκρυνση της μεγάλης εικόνας του Χριστού Αντιφωνητή πάνω από την Χαλκή πύλη του ανακτόρου· ο στρατιώτης που σκαρφάλωσε λυντσαρίστηκε από εξαγριωμένο πλήθος γυναικών. Δύο ακόμη αυτοκρατορικά διατάγματα διεύρυναν την πολιτική. Τα κίνητρα της εικονομαχίας — ισλαμική και ιουδαϊκή επιρροή, θεολογικός ενδοιασμός, αντιμοναστική πολιτική, ανατολίτικο επαρχιακό αίσθημα — παραμένουν αντικείμενο συζήτησης. Η διαμάχη διέσπασε την αυτοκρατορία επί έναν αιώνα και κλόνισε οριστικά τις σχέσεις με τη Ρώμη, όπου οι πάπες αρνήθηκαν να συμμορφωθούν."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Clasm_Chludov_detail_9th_century.jpg?width=1024",
            alt: {
              en: "Iconoclasm in the Chludov Psalter, 9th century",
              el: "Εικονομαχία στο Χλουδοβιανό Ψαλτήρι, 9ος αι."
            },
            credit: "Chludov Psalter, via Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 730,
      era: {
        en: "Isaurian Dynasty",
        el: "Δυναστεία Ισαύρων"
      },
      events: [
        {
          title: {
            en: "Iconoclastic Council of Hieria",
            el: "Η εικονοκλαστική Σύνοδος της Ιερείας"
          },
          description: {
            en: "Leo III convenes a council that declares icons a form of idolatry, beginning the systematic removal of religious images throughout the empire.",
            el: "Ο Λέων Γ΄ συγκαλεί σύνοδο που δηλώνει τις εικόνες ως μορφή ειδωλολατρείας, αρχίζοντας την συστηματική αφαίρεση θρησκευτικών εικόνων σε όλη την αυτοκρατορία."
          },
          extendedDescription: {
            en: "The note attached to this 730 entry conflates two events: the second iconoclast edict of Leo III in that year — which deposed the iconophile Patriarch Germanos and made adherence to imagery a punishable offense — and the formal Iconoclast Council of Hieria, in fact convened by Leo's son Constantine V in 754. That council, attended by 338 bishops but without representation from Rome or the eastern patriarchates, declared that any image of Christ was either Nestorian or Monophysite, and condemned icon-veneration as idolatry. Its decisions inaugurated the most aggressive phase of the persecution, with the destruction of frescoes and mosaics, the harassment of monasteries, and the martyrdom of holy men such as Stephen the Younger.",
            el: "Η σημείωση που συνδέεται με αυτή την καταχώρηση του 730 συγχωνεύει δύο γεγονότα: το δεύτερο εικονομαχικό διάταγμα του Λέοντος Γ΄ εκείνου του έτους — που καθαίρεσε τον εικονόφιλο Πατριάρχη Γερμανό και κατέστησε την προσκύνηση εικόνων αξιόποινο αδίκημα — και την επίσημη Εικονομαχική Σύνοδο της Ιερείας, που στην πραγματικότητα συγκάλεσε ο γιος του Λέοντος, Κωνσταντίνος Ε΄, το 754. Η σύνοδος, στην οποία παρέστησαν 338 επίσκοποι αλλά χωρίς εκπρόσωπο της Ρώμης ή των ανατολικών πατριαρχείων, διακήρυξε ότι κάθε εικόνα του Χριστού ήταν είτε νεστοριανική είτε μονοφυσιτική, και κατεδίκασε την προσκύνηση των εικόνων ως ειδωλολατρία. Οι αποφάσεις της εγκαινίασαν την οξύτερη φάση του διωγμού, με την καταστροφή τοιχογραφιών και ψηφιδωτών, τις παρενοχλήσεις μοναστηριών και το μαρτύριο αγίων ανδρών όπως ο Στέφανος ο Νέος."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/48-manasses-chronicle.jpg?width=1024",
            alt: {
              en: "Manasses Chronicle, 12th century",
              el: "Χρονικό Μανάση, 12ος αι."
            },
            credit: "Manasses Chronicle, via Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 764,
      era: {
        en: "Isaurian Dynasty",
        el: "Δυναστεία Ισαύρων"
      },
      events: [
        {
          title: {
            en: "Death of Stephen the Younger",
            el: "Ο θάνατος του Στεφάνου του Νέου"
          },
          description: {
            en: "The leading iconodule martyr is executed for opposing iconoclasm, becoming a symbol of resistance to imperial religious policy.",
            el: "Ο κύριος εικονοδουλικός μάρτυρας εκτελείται για αντίσταση στην εικονοκλασία, γίνοντας σύμβολο αντίστασης στη θρησκευτική πολιτική της αυτοκρατορίας."
          },
          extendedDescription: {
            en: "The Vita of Stephen the Younger, hagiographic but rich in detail, recounts how the abbot of Mount Saint Auxentios in Bithynia became the most outspoken iconophile of his generation, harboring monks who fled persecution and rebuking Constantine V to his face. After repeated arrest and exile, he was dragged through the streets of Constantinople by the imperial Tagmata, his skull dashed against a pillar in the Pelagian Forum on 28 November 765 (the chronology often cited as 754 reflects an older dating). His feast on 28 November and the cult that grew around his memory made him the iconic martyr of the iconophile resistance and a touchstone for the eventual restoration of icons.",
            el: "Ο Βίος του Στεφάνου του Νέου, αγιογραφικός αλλά πλούσιος σε λεπτομέρειες, εκθέτει πώς ο ηγούμενος του όρους του Αγίου Αυξεντίου της Βιθυνίας έγινε ο πιο αδιάλλακτος εικονόφιλος της γενιάς του, παρέχοντας καταφύγιο σε μοναχούς που ξέφευγαν τον διωγμό και επιπλήττοντας ευθέως τον Κωνσταντίνο Ε΄. Μετά από επανειλημμένες συλλήψεις και εξορίες, σύρθηκε στους δρόμους της Κωνσταντινούπολης από τα αυτοκρατορικά Τάγματα και η κεφαλή του συντρίφθηκε σε στύλο στο Πελάγιον Φόρο την 28 Νοεμβρίου 765 (η χρονολόγηση που συχνά αναφέρεται ως 754 αντανακλά παλαιότερη παράδοση). Η εορτή του στις 28 Νοεμβρίου και η λατρεία που αναπτύχθηκε γύρω από τη μνήμη του τον κατέστησαν τον εμβληματικό μάρτυρα της εικονόφιλης αντίστασης και ορόσημο για την τελική αποκατάσταση των εικόνων."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 780,
      era: {
        en: "Isaurian Dynasty",
        el: "Δυναστεία Ισαύρων"
      },
      events: [
        {
          title: {
            en: "Accession of Constantine VI",
            el: "Η ανάβαση του Κωνσταντίνου Στ΄ στον θρόνο"
          },
          description: {
            en: "The nine-year-old Constantine VI becomes emperor under the regency of his mother Irene, who will eventually depose him.",
            el: "Ο εννέα ετών Κωνσταντίνος Στ΄ γίνεται αυτοκράτορας υπό την επιμέλεια της μητέρας του Ειρήνης, η οποία τελικά θα τον ανατρέψει."
          },
          extendedDescription: {
            en: "Irene, an iconophile from Athens, used the regency to dismantle the iconoclast policy of her late husband Leo IV: convening the Second Council of Nicaea in 787, restoring image-veneration, and purging the army of iconoclast officers. Mother and son fell out as Constantine grew older; in 797, after a confused civil war, Irene had him arrested in the Porphyra chamber where he had been born and blinded so brutally that he died of his wounds. Irene then ruled in her own name as basilissa — the first woman to use the male title — until deposed in 802. Frankish chroniclers, considering the throne therefore vacant, used her sole rule as legal pretext for the coronation of Charlemagne in 800.",
            el: "Η Ειρήνη, εικονόφιλη από την Αθήνα, χρησιμοποίησε την αντιβασιλεία για να αποδομήσει την εικονομαχική πολιτική του εκλιπόντος συζύγου της Λέοντος Δ΄: συγκάλεσε τη Β΄ Σύνοδο της Νικαίας το 787, αποκατέστησε την προσκύνηση των εικόνων και εκκαθάρισε τον στρατό από εικονομάχους αξιωματικούς. Μητέρα και γιος συγκρούστηκαν καθώς ο Κωνσταντίνος μεγάλωνε· το 797, ύστερα από συγκεχυμένο εμφύλιο πόλεμο, η Ειρήνη τον συνέλαβε στο Πορφύρα, την αίθουσα όπου είχε γεννηθεί, και τον τύφλωσε με τόση βαρβαρότητα, ώστε πέθανε από τα τραύματά του. Η Ειρήνη κυβέρνησε εν συνεχεία στο όνομά της ως βασίλισσα — η πρώτη γυναίκα που χρησιμοποίησε τον αρσενικό τίτλο — έως ότου ανατράπηκε το 802. Οι Φραγκικοί χρονογράφοι, θεωρώντας τον θρόνο κατά συνέπεια κενό, χρησιμοποίησαν τη μονοκρατορία της ως νομικό πρόσχημα για τη στέψη του Καρλομάγνου το 800."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Solidus_of_Constantine_VI%2C_DO.png?width=1024",
            alt: {
              en: "Solidus of Constantine VI",
              el: "Σολίδος του Κωνσταντίνου ΣΤ΄"
            },
            credit: "Dumbarton Oaks, via Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 787,
      era: {
        en: "Isaurian Dynasty",
        el: "Δυναστεία Ισαύρων"
      },
      events: [
        {
          title: {
            en: "Second Council of Nicaea",
            el: "Η δεύτερη Σύνοδος της Νικαίας"
          },
          description: {
            en: "Empress Irene convenes the seventh ecumenical council, which restores the veneration of icons.",
            el: "Η αυτοκράτειρα Ειρήνη συγκαλεί την έβδομη οικουμενική σύνοδο, που αποκαθιστά τον σεβασμό των εικόνων."
          },
          extendedDescription: {
            en: "An attempt to convoke the council in Constantinople in 786 had been broken up by iconoclast soldiers; Irene moved it the following year to Nicaea, the symbolic site of the first ecumenical council. Some 350 bishops, with papal legates and representatives of the eastern patriarchates, refuted the iconoclast pronouncements of Hieria and produced the famous distinction between proskynesis (veneration) due to icons as honoring the persons depicted, and latreia (worship) due to God alone. Although peripheral resistance continued, and a second iconoclasm would briefly return after 815, the council's authority eventually prevailed and is recognized as the Seventh Ecumenical Council by both Orthodox and Catholic churches.",
            el: "Προηγούμενη απόπειρα σύγκλησης της συνόδου στην Κωνσταντινούπολη το 786 είχε διαλυθεί από εικονομάχους στρατιώτες· η Ειρήνη τη μετέφερε τον επόμενο χρόνο στη Νίκαια, τον συμβολικό τόπο της Α΄ οικουμενικής συνόδου. Περίπου 350 επίσκοποι, μαζί με τους παπικούς λεγάτους και εκπροσώπους των ανατολικών πατριαρχείων, αντέκρουσαν τις εικονομαχικές αποφάσεις της Ιερείας και διατύπωσαν την περίφημη διάκριση μεταξύ της προσκυνήσεως που οφείλεται στις εικόνες ως τιμή προς τα εικονιζόμενα πρόσωπα, και της λατρείας που οφείλεται μόνον στον Θεό. Αν και η περιφερειακή αντίσταση συνεχίστηκε, και η δεύτερη εικονομαχία θα επανερχόταν προσωρινά μετά το 815, η εξουσία της συνόδου τελικά επικράτησε και αναγνωρίζεται ως η Ζ΄ Οικουμενική Σύνοδος τόσο από την Ορθόδοξη όσο και από την Καθολική Εκκλησία."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Menologion_of_Basil_024.jpg?width=1024",
            alt: {
              en: "The Second Council of Nicaea: the emperor enthroned among the bishops, a condemned heretic prostrate before them, miniature from the Menologion of Basil II",
              el: "Η Β΄ Σύνοδος της Νικαίας: ο αυτοκράτορας ένθρονος ανάμεσα στους επισκόπους, με έναν καταδικασμένο αιρετικό πεσμένο μπροστά τους, μικρογραφία από το Μηνολόγιο του Βασιλείου Β΄"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 843,
      era: {
        en: "Amorian Dynasty",
        el: "Δυναστεία Αμορίας"
      },
      events: [
        {
          title: {
            en: "Triumph of Orthodoxy",
            el: "Ο θρίαμβος της Ορθοδοξίας"
          },
          description: {
            en: "Empress Theodora definitively restores the icons. The feast is still celebrated on the first Sunday of Lent.",
            el: "Η αυτοκράτειρα Θεοδώρα αποκαθιστά οριστικά τις εικόνες. Η εορτή εξακολουθεί να γιορτάζεται την πρώτη Κυριακή της Σαρακοστής."
          },
          extendedDescription: {
            en: "After the death of the iconoclast emperor Theophilos, his widow Theodora and her chief minister Theoktistos quietly engineered the deposition of the iconoclast Patriarch John VII the Grammarian and his replacement by the iconophile Methodios. A synod that met in March 843 reaffirmed the canons of Nicaea II and proclaimed the restoration of icons; the great procession that followed, on the first Sunday of Lent, has been celebrated ever since as the Sunday of Orthodoxy. The decision quietly preserved the memory of Theophilos by the legend that Theodora had successfully prayed for his pardon. The end of iconoclasm closed a defining theological controversy of the medieval Roman Empire and reset the relation between imperial power and church doctrine.",
            el: "Έπειτα από τον θάνατο του εικονομάχου αυτοκράτορα Θεόφιλου, η χήρα του Θεοδώρα και ο πρωθυπουργός της Θεόκτιστος ενεργήσαν διακριτικά για την καθαίρεση του εικονομάχου Πατριάρχη Ιωάννη Ζ΄ Γραμματικού και την αντικατάστασή του από τον εικονόφιλο Μεθόδιο. Σύνοδος που συνεδρίασε τον Μάρτιο του 843 επανεπιβεβαίωσε τους κανόνες της Νίκαιας Β΄ και ανακήρυξε την αποκατάσταση των εικόνων· η μεγάλη πομπή που ακολούθησε, την πρώτη Κυριακή της Σαρακοστής, εορτάζεται έκτοτε ως Κυριακή της Ορθοδοξίας. Η απόφαση διέσωσε διακριτικά τη μνήμη του Θεοφίλου μέσω του μύθου ότι η Θεοδώρα είχε επιτύχει με προσευχή τη συγχώρεσή του. Το τέλος της εικονομαχίας έκλεισε καθοριστική θεολογική διαμάχη της μεσαιωνικής Ρωμανίας και επανακαθόρισε τη σχέση αυτοκρατορικής εξουσίας και εκκλησιαστικού δόγματος."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 860,
      era: {
        en: "Macedonian Dynasty",
        el: "Δυναστεία Μακεδονίας"
      },
      events: [
        {
          title: {
            en: "Rus' attack on Constantinople",
            el: "Η επίθεση των Ρούς στην Κωνσταντινούπολη"
          },
          description: {
            en: "The first recorded attack by the Rus' on Constantinople is repelled, marking the beginning of Byzantine-Rus' relations that will shape Eastern European history.",
            el: "Η πρώτη καταγεγραμμένη επίθεση των Ρούς στην Κωνσταντινούπολη αποτρέπεται, σημαδεύοντας την αρχή των βυζαντινών-ρουσικών σχέσεων που θα διαμορφώσουν την ανατολική ευρωπαϊκή ιστορία."
          },
          extendedDescription: {
            en: "On 18 June 860 some two hundred Rus' longships, having sailed down the Dnieper from Kiev, suddenly appeared off the Bosporus while Emperor Michael III was campaigning against the Arabs in Asia Minor. The unprepared capital was thrown into panic; the Patriarch Photios, in two surviving homilies of striking power, described the descent of these 'unknown' people on a defenseless city. The Rus' raided the suburbs and offshore islands for three weeks before withdrawing — Russian chronicles attribute their departure to the storm that arose when Photios dipped the Theotokos's robe in the sea. The encounter inaugurated formal contact, and within a generation the first attempt at evangelizing the Rus' had begun.",
            el: "Στις 18 Ιουνίου 860, περίπου διακόσια ρωσικά μακριά πλοία, αφού διέσχισαν τον Δνείπερο από το Κίεβο, εμφανίστηκαν αιφνίδια εντός του Βοσπόρου, ενώ ο αυτοκράτορας Μιχαήλ Γ΄ εξεστράτευε εναντίον των Αράβων στη Μικρά Ασία. Η απροετοίμαστη πρωτεύουσα κυριεύθηκε από πανικό· ο Πατριάρχης Φώτιος, σε δύο σωζόμενες ομιλίες εντυπωσιακής δύναμης, περιέγραψε την κάθοδο αυτών των 'αγνώστων' ανθρώπων κατά ανυπεράσπιστης πόλης. Οι Ρως λεηλάτησαν τα προάστια και τα παράκτια νησιά επί τρεις εβδομάδες προτού αποσυρθούν — οι ρωσικοί χρονογράφοι αποδίδουν την αναχώρησή τους στην καταιγίδα που σηκώθηκε όταν ο Φώτιος βούτηξε το μαφόριο της Θεοτόκου στη θάλασσα. Η συνάντηση εγκαινίασε επίσημη επαφή, και μέσα σε μία γενιά είχε ξεκινήσει η πρώτη προσπάθεια ευαγγελισμού των Ρως."
          },
          category: "military"
        }
      ]
    },
    {
      year: 863,
      era: {
        en: "Macedonian Dynasty",
        el: "Δυναστεία Μακεδονίας"
      },
      events: [
        {
          title: {
            en: "Mission of Cyril and Methodius",
            el: "Η αποστολή του Κυρίλλου και του Μεθοδίου"
          },
          description: {
            en: "The brothers from Thessalonica begin their mission to the Slavs, creating the Glagolitic alphabet and translating the liturgy into Slavonic.",
            el: "Οι αδελφοί από τη Θεσσαλονίκη ξεκινούν την αποστολή τους στους Σλάβους, δημιουργώντας το γλαγολιτικό αλφάβητο και μεταφράζοντας τη λειτουργία στη σλαβική."
          },
          extendedDescription: {
            en: "The Moravian prince Rastislav, seeking a counterweight to Frankish ecclesiastical and political pressure, requested teachers from Constantinople who could preach in the Slavic language. Patriarch Photios sent the brothers Constantine — better known by his monastic name Cyril — and Methodios, both natives of multilingual Thessalonica. To support the mission Constantine devised the Glagolitic alphabet, calibrated to Slavic phonology, and translated the Gospels, the Psalms, and the liturgy. Despite later opposition from Frankish bishops who insisted on the 'three sacred languages,' the brothers obtained papal approval. Their disciples after expulsion from Moravia carried the work to Bulgaria and beyond, and the simplified Cyrillic alphabet developed there would furnish the script of more than a hundred million Orthodox Slavs.",
            el: "Ο Μοραβός ηγεμόνας Ραστισλάβος, αναζητώντας αντιστάθμισμα στη φραγκική εκκλησιαστική και πολιτική πίεση, ζήτησε από την Κωνσταντινούπολη δασκάλους που θα μπορούσαν να κηρύξουν στη σλαβική γλώσσα. Ο Πατριάρχης Φώτιος έστειλε τους αδελφούς Κωνσταντίνο — γνωστότερο με το μοναχικό όνομα Κύριλλος — και Μεθόδιο, αμφότερους με καταγωγή από την πολυγλωσσική Θεσσαλονίκη. Για να υποστηρίξει την αποστολή, ο Κωνσταντίνος επινόησε το γλαγολιτικό αλφάβητο, σχεδιασμένο για τη σλαβική φωνολογία, και μετέφρασε τα Ευαγγέλια, τους Ψαλμούς και τη Θεία Λειτουργία. Παρά τη μετέπειτα εχθρότητα φραγκικών επισκόπων που επέμεναν στις 'τρεις ιερές γλώσσες', οι αδελφοί έλαβαν παπική έγκριση. Οι μαθητές τους, μετά την εκδίωξή τους από τη Μοραβία, μετέφεραν το έργο στη Βουλγαρία και πέρα, και το απλοποιημένο κυριλλικό αλφάβητο που αναπτύχθηκε εκεί θα έδινε τη γραφή σε περισσότερους από εκατό εκατομμύρια Ορθοδόξους Σλάβους."
          },
          category: "cultural"
        },
        {
          title: {
            en: "Battle of Lalakaon",
            el: "Η μάχη του Λαλακάου"
          },
          description: {
            en: "Emperor Michael III and Petronas decisively defeat the Abbasid forces, ending the Arab threat to Anatolia and beginning the Byzantine resurgence.",
            el: "Ο αυτοκράτορας Μιχαήλ Γ΄ και ο Πετρωνάς νικούν αποφασιστικά τις αββασίδες δυνάμεις, τερματίζοντας την αραβική απειλή στη Μικρά Ασία και αρχίζοντας την βυζαντινή αναγέννηση."
          },
          extendedDescription: {
            en: "The Paulician chieftain Karbeas had supported Omar al-Aqta of Melitene in a deep raid that pushed across the Anatolian plateau and reached the Black Sea. Petronas, the emperor's uncle, used a meticulously coordinated maneuver — three converging columns from the Anatolian themes, the imperial tagmata under Michael, and the Armeniakon — to trap the raiding force at the Lalakaon river in eastern Paphlagonia. The encirclement was complete; almost the whole Arab column was destroyed and Omar himself killed. The victory ended the era of large annual Arab incursions and is generally taken as the moment when the strategic balance between the empire and the Caliphate began definitively to tilt back toward Constantinople.",
            el: "Ο παυλικιανός αρχηγός Καρβέας είχε υποστηρίξει τον Ομάρ αλ-Άκτα της Μελιτηνής σε βαθιά επιδρομή που διέσχισε το ανατολίτικο οροπέδιο και έφθασε ως τον Εύξεινο Πόντο. Ο Πετρωνάς, θείος του αυτοκράτορα, χρησιμοποίησε σχολαστικά συντονισμένο ελιγμό — τρεις συγκλίνουσες φάλαγγες από τα ανατολίτικα θέματα, τα αυτοκρατορικά τάγματα υπό τον Μιχαήλ και τους Αρμενιάκους — για να παγιδεύσει την επιδρομική δύναμη στον ποταμό Λαλακάωνα της ανατολικής Παφλαγονίας. Η περικύκλωση ήταν πλήρης· σχεδόν ολόκληρη η αραβική φάλαγγα καταστράφηκε και ο ίδιος ο Ομάρ σκοτώθηκε. Η νίκη τερμάτισε την εποχή των μεγάλων ετήσιων αραβικών επιδρομών και θεωρείται γενικά η στιγμή κατά την οποία η στρατηγική ισορροπία ανάμεσα στην αυτοκρατορία και το Χαλιφάτο άρχισε οριστικά να γέρνει πίσω προς την Κωνσταντινούπολη."
          },
          category: "military"
        }
      ]
    },
    {
      year: 867,
      era: {
        en: "Macedonian Dynasty",
        el: "Δυναστεία Μακεδονίας"
      },
      events: [
        {
          title: {
            en: "Accession of Basil I",
            el: "Η ανάβαση του Βασιλείου Α΄ στον θρόνο"
          },
          description: {
            en: "Basil the Macedonian founds the dynasty that will preside over the golden age of Byzantium.",
            el: "Ο Βασίλειος ο Μακεδόνας ιδρύει τη δυναστεία που θα προεδρεύσει την χρυσή εποχή του Βυζαντίου."
          },
          extendedDescription: {
            en: "An Armenian peasant from the theme of Macedonia who had risen through service in great households, Basil caught the eye of the dissolute Michael III and was made chief stable-master, then co-emperor in 866. After murdering Michael's powerful uncle Bardas with imperial complicity, he murdered Michael himself in 867. The seizure of power was sordid, but Basil's twenty-year reign was disciplined and legalistic: military campaigns recovered ground in Italy, the legal codification of the Eisagoge and Procheiron began the work later completed in the Basilika, and the new dynasty he founded would rule for almost two centuries — providing Byzantium's most stable and prosperous era since the Justinianic age.",
            el: "Αρμένιος αγρότης από το θέμα της Μακεδονίας που είχε αναδειχθεί υπηρετώντας σε μεγάλους οίκους, ο Βασίλειος τράβηξε την προσοχή του ασύδοτου Μιχαήλ Γ΄ και έγινε αρχιεπιστάτης των ίππων, και κατόπιν συναυτοκράτορας το 866. Αφού δολοφόνησε με αυτοκρατορική συνενοχή τον ισχυρό θείο του Μιχαήλ, Βάρδα, δολοφόνησε και τον ίδιο τον Μιχαήλ το 867. Η αρπαγή της εξουσίας ήταν σκοτεινή, αλλά η εικοσαετής βασιλεία του Βασιλείου υπήρξε πειθαρχημένη και νομικιστική: στρατιωτικές εκστρατείες ανέκτησαν εδάφη στην Ιταλία, η νομική κωδικοποίηση της Εισαγωγής και του Προχείρου εγκαινίασε το έργο που θα ολοκλήρωναν αργότερα τα Βασιλικά, και η νέα δυναστεία που ίδρυσε θα κυβερνούσε επί δύο σχεδόν αιώνες — δίνοντας στο Βυζάντιο την πιο σταθερή και ευημερούσα εποχή του από την ιουστινιάνεια εποχή."
          },
          category: "political"
        }
      ]
    },
    {
      year: 976,
      era: {
        en: "Macedonian Dynasty",
        el: "Δυναστεία Μακεδονίας"
      },
      events: [
        {
          title: {
            en: "Basil II becomes sole emperor",
            el: "Ο Βασίλειος Β΄ γίνεται ο μόνος αυτοκράτορας"
          },
          description: {
            en: "The Bulgar-Slayer begins a long reign that will bring Byzantium to its greatest extent since Justinian.",
            el: "Ο Βουλγαροκτόνος αρχίζει μια μεγάλη βασιλεία που θα φέρει το Βυζάντιο στο μεγαλύτερο εύρος του από τον Ιουστινιανό."
          },
          extendedDescription: {
            en: "Twenty-eight years old at his uncle John I Tzimiskes's death, Basil II had already nominally been emperor since 960 but had stood aside while powerful regents ran affairs. Two great rebellions of the Anatolian magnates Bardas Skleros and Bardas Phokas in his early years taught him to mistrust and curtail the military aristocracy; the laws on the protection of free peasants from great-estate encroachment date from this period. He never married, lived austerely, and on the throne combined ascetic personal habits with relentless campaigning. Over half a century of rule he would expand the empire from the Adriatic to Armenia, double its revenues, and leave a treasury full enough to finance his successors' indulgence — and ultimately his dynasty's collapse.",
            el: "Στα είκοσι οκτώ του χρόνια κατά τον θάνατο του θείου του Ιωάννη Α΄ Τζιμισκή, ο Βασίλειος Β΄ ήταν ήδη ονομαστικά αυτοκράτορας από το 960, αλλά παρέμενε στο περιθώριο όσο ισχυροί επίτροποι διοικούσαν τις υποθέσεις. Δύο μεγάλες εξεγέρσεις των Ανατολίτικων μεγιστάνων Βάρδα Σκληρού και Βάρδα Φωκά στα πρώτα του χρόνια του δίδαξαν να δυσπιστεί και να περιστέλλει τη στρατιωτική αριστοκρατία· οι νόμοι για την προστασία των ελεύθερων αγροτών από την επέκταση των μεγάλων κτημάτων χρονολογούνται σε αυτή την περίοδο. Δεν παντρεύτηκε ποτέ, ζούσε λιτά, και στον θρόνο συνδύαζε ασκητικές προσωπικές συνήθειες με ακούραστες εκστρατείες. Σε μισό αιώνα εξουσίας θα επεξέτεινε την αυτοκρατορία από την Αδριατική ως την Αρμενία, θα διπλασίαζε τα έσοδά της και θα άφηνε ταμείο τόσο πλήρες ώστε να χρηματοδοτήσει την ασωτία των διαδόχων του — και τελικά την κατάρρευση της δυναστείας του."
          },
          category: "political"
        }
      ]
    },
    {
      year: 988,
      era: {
        en: "Macedonian Dynasty",
        el: "Δυναστεία Μακεδονίας"
      },
      events: [
        {
          title: {
            en: "Conversion of the Rus'",
            el: "Η χριστιανοποίηση των Ρούς"
          },
          description: {
            en: "Vladimir of Kiev marries Anna Porphyrogenita and accepts Orthodox Christianity, drawing the Rus' into the Byzantine commonwealth.",
            el: "Ο Βλαδίμηρ του Κιέβου παντρεύεται την Άννα Πορφυρογέννητη και αποδέχεται την Ορθόδοξη Χριστιανότητα, εισάγοντας τους Ρούς στη βυζαντινή κοινοπολιτεία."
          },
          extendedDescription: {
            en: "Pressed by the rebellion of Bardas Phokas, Basil II appealed to the Kievan prince Vladimir for military aid. The price was extraordinary: the hand of Basil's sister Anna, born in the porphyra chamber and therefore a porphyrogenita whose marriage to a foreign ruler had no Byzantine precedent. The condition was Vladimir's baptism. Six thousand Rus' Varangians arrived to crush Phokas at Chrysopolis and Abydos and would form the famous Varangian Guard for centuries afterward. Vladimir was baptized — the Russian Primary Chronicle places this at Cherson — and undertook the mass conversion of his realm, importing clergy, art, and law from Constantinople. The cultural and religious orientation of the Russian world for the next thousand years was settled in this episode.",
            el: "Πιεζόμενος από την εξέγερση του Βάρδα Φωκά, ο Βασίλειος Β΄ απευθύνθηκε στον Κιεβινό ηγεμόνα Βλαδίμηρο για στρατιωτική βοήθεια. Το τίμημα ήταν ασυνήθιστο: το χέρι της αδελφής του Βασιλείου, Άννας, γεννημένης στην Πορφύρα και επομένως πορφυρογέννητης, της οποίας ο γάμος με ξένο ηγεμόνα δεν είχε βυζαντινό προηγούμενο. Όρος ήταν η βάπτιση του Βλαδίμηρου. Έξι χιλιάδες Ρως Βάραγγοι έφτασαν για να συντρίψουν τον Φωκά στη Χρυσούπολη και την Άβυδο, και θα σχημάτιζαν την περίφημη Φρουρά των Βαράγγων επί αιώνες. Ο Βλαδίμηρος βαπτίστηκε — το ρωσικό Πρωτόλειο Χρονικό τοποθετεί τη βάπτιση στη Χερσώνα — και ανέλαβε τη μαζική μεταστροφή του βασιλείου του, εισάγοντας κλήρο, τέχνη και δίκαιο από την Κωνσταντινούπολη. Ο πολιτισμικός και θρησκευτικός προσανατολισμός του ρωσικού κόσμου για τα επόμενα χίλια χρόνια κρίθηκε σε αυτό το επεισόδιο."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Lebedev_baptism.jpg?width=1024",
            alt: {
              en: "The Christianization of Kievan Rus', painting by Klavdy Lebedev",
              el: "Η χριστιανοποίηση των Ρως του Κιέβου, πίνακας του Klavdy Lebedev"
            },
            credit: "Klavdy Lebedev, via Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 989,
      era: {
        en: "Macedonian Dynasty",
        el: "Δυναστεία Μακεδονίας"
      },
      events: [
        {
          title: {
            en: "Basil II suppresses Bardas Phokas rebellion",
            el: "Ο Βασίλειος Β΄ καταστέλλει την εξέγερση του Βάρδα Φωκά"
          },
          description: {
            en: "The general Bardas Phokas rebels against Basil II but is defeated at the Battle of Abydos, securing Basil's absolute authority.",
            el: "Ο στρατηγός Βάρδας Φωκάς επαναστατεί κατά του Βασιλείου Β΄ αλλά ηττάται στη μάχη του Αβύδου, εξασφαλίζοντας την απόλυτη εξουσία του Βασιλείου."
          },
          extendedDescription: {
            en: "The most dangerous of the great Anatolian magnates, Phokas had once helped Basil suppress an earlier revolt by Bardas Skleros, but in 987 he had himself proclaimed emperor and within a year controlled most of Asia Minor. With his Rus' allies newly arrived and his own household troops, Basil crossed the Bosporus to Chrysopolis, defeated Phokas's son Nikephoros, and at Abydos the following spring met the rebel himself. Phokas was charging across the field at the imperial standard, sword raised, when he fell from his horse and died on the spot — possibly of a stroke, possibly of poison administered by a servant. The collapse of his army secured Basil's throne and broke the political power of the great military aristocracy he had risen from.",
            el: "Ο πιο επικίνδυνος από τους μεγάλους ανατολίτικους μεγιστάνες, ο Φωκάς είχε άλλοτε βοηθήσει τον Βασίλειο να καταστείλει προηγούμενη εξέγερση του Βάρδα Σκληρού, αλλά το 987 ανακηρύχθηκε αυτοκράτορας και μέσα σε έναν χρόνο έλεγχε το μεγαλύτερο μέρος της Μικράς Ασίας. Με τους νεοαφιχθέντες Ρως συμμάχους του και τα προσωπικά του στρατεύματα, ο Βασίλειος διέσχισε τον Βόσπορο στη Χρυσούπολη, νίκησε τον γιο του Φωκά, Νικηφόρο, και στην Άβυδο την επόμενη άνοιξη συνάντησε τον ίδιο τον επαναστάτη. Ο Φωκάς πραγματοποιούσε έφοδο στο πεδίο εναντίον της αυτοκρατορικής σημαίας, με το ξίφος υψωμένο, όταν έπεσε από το άλογό του και πέθανε επί τόπου — ίσως από εγκεφαλικό, ίσως από δηλητήριο που του χορήγησε υπηρέτης. Η κατάρρευση του στρατού του εξασφάλισε τον θρόνο του Βασιλείου και έθραυσε την πολιτική δύναμη της μεγάλης στρατιωτικής αριστοκρατίας από την οποία είχε αναδειχθεί."
          },
          category: "military"
        }
      ]
    },
    {
      year: 995,
      era: {
        en: "Macedonian Dynasty",
        el: "Δυναστεία Μακεδονίας"
      },
      events: [
        {
          title: {
            en: "Basil II's Bulgarian campaigns begin",
            el: "Αρχή των βουλγαρικών εκστρατειών του Βασιλείου Β΄"
          },
          description: {
            en: "Basil II launches annual campaigns against Bulgaria, systematically destroying Bulgarian resistance and earning his future epithet.",
            el: "Ο Βασίλειος Β΄ ξεκινά ετήσιες εκστρατείες κατά της Βουλγαρίας, συστηματικά καταστρέφοντας την βουλγαρική αντίσταση και κερδίζοντας το μελλοντικό του επίθετο."
          },
          extendedDescription: {
            en: "The Bulgarian Tsar Samuel had restored the Cometopuli kingdom on the western Balkans during Basil's preoccupation with the eastern revolts; in 986 he had inflicted on the emperor a sharp defeat at the Trajan's Gates pass. Beginning in 991 — and especially after the resolution of the eastern frontier in 1001 — Basil mounted methodical, year-by-year campaigns: capturing fortresses, destroying granaries, refusing pitched battle on disadvantageous terms, and trusting time and attrition to grind down Bulgarian resistance. The strategy was unfashionable but successful. Over a quarter of a century the Bulgarian state was steadily reduced; the campaign would culminate in 1014 at Kleidion and the final extinction of the kingdom four years later.",
            el: "Ο Βούλγαρος Τσάρος Σαμουήλ είχε αποκαταστήσει το βασίλειο των Κομητοπούλων στα δυτικά Βαλκάνια όσο ο Βασίλειος ήταν απορροφημένος με τις ανατολικές εξεγέρσεις· το 986 είχε επιβάλει στον αυτοκράτορα οξεία ήττα στο πέρασμα της Πύλης του Τραϊανού. Από το 991 — και ιδιαίτερα μετά τη ρύθμιση του ανατολικού συνόρου το 1001 — ο Βασίλειος προέβη σε μεθοδικές, ετήσιες εκστρατείες: κατάκτηση φρουρίων, καταστροφή σιταποθηκών, αποφυγή τακτικής μάχης σε δυσμενείς όρους, και εμπιστοσύνη στον χρόνο και τη φθορά για να εξαντλήσει τη βουλγαρική αντίσταση. Η στρατηγική ήταν μη συνηθισμένη αλλά επιτυχής. Σε ένα τέταρτο του αιώνα το βουλγαρικό κράτος συρρικνώθηκε σταθερά· η εκστρατεία θα κορυφωνόταν το 1014 στο Κλειδί και θα ολοκληρωνόταν με την οριστική εξάλειψη του βασιλείου τέσσερα χρόνια αργότερα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1014,
      era: {
        en: "Macedonian Dynasty",
        el: "Δυναστεία Μακεδονίας"
      },
      events: [
        {
          title: {
            en: "Battle of Kleidion",
            el: "Η μάχη του Κλειδίου"
          },
          description: {
            en: "Basil II annihilates the Bulgarian army; the surviving prisoners are blinded, earning him the epithet Boulgaroktonos.",
            el: "Ο Βασίλειος Β΄ εξοντώνει τον βουλγαρικό στρατό· οι επιζώντες αιχμάλωτοι τυφλώνονται, του δίνοντας το επίθετο του Βουλγαροκτόνου."
          },
          extendedDescription: {
            en: "After a quarter-century of methodical attrition, Samuel's army made a stand in the steep pass of Kleidion in the Belasica mountains. Basil's frontal assault was checked, but a flanking column under Nikephoros Xiphias scaled the heights and fell on the Bulgarian rear, trapping the army. Skylitzes records that some 14,000 prisoners were blinded — every hundredth man left with one eye to lead the rest home. Tsar Samuel, awaiting the survivors at his fortress of Prilep, is said to have died of a stroke when the column appeared. Modern historians regard the casualty figures as inflated, but the campaign was decisive: within four years the last Bulgarian resistance collapsed and the entire Balkan peninsula was reincorporated into the empire for the first time since the seventh century.",
            el: "Μετά από ένα τέταρτο αιώνα μεθοδικής φθοράς, ο στρατός του Σαμουήλ παρατάχθηκε στο απόκρημνο πέρασμα του Κλειδίου στο όρος Μπελασίτσα. Η μετωπική επίθεση του Βασιλείου ανακόπηκε, αλλά πλευρική φάλαγγα υπό τον Νικηφόρο Ξιφία σκαρφάλωσε τις κορυφές και έπληξε τα νώτα των Βουλγάρων, παγιδεύοντας τον στρατό. Ο Σκυλίτζης καταγράφει ότι περίπου 14.000 αιχμάλωτοι τυφλώθηκαν — κάθε εκατοστός άνδρας αφέθηκε με ένα μάτι για να οδηγήσει τους υπόλοιπους πίσω. Ο Τσάρος Σαμουήλ, που περίμενε τους επιζώντες στο φρούριό του στον Πρίλεπ, λέγεται ότι πέθανε από εγκεφαλικό όταν εμφανίστηκε η φάλαγγα. Σύγχρονοι ιστορικοί θεωρούν τους αριθμούς απωλειών υπερβολικούς, αλλά η εκστρατεία υπήρξε καθοριστική: μέσα σε τέσσερα χρόνια η τελευταία βουλγαρική αντίσταση κατέρρευσε και ολόκληρη η βαλκανική χερσόνησος επανενσωματώθηκε στην αυτοκρατορία για πρώτη φορά από τον έβδομο αιώνα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1025,
      era: {
        en: "Macedonian Dynasty",
        el: "Δυναστεία Μακεδονίας"
      },
      events: [
        {
          title: {
            en: "Death of Basil II",
            el: "Ο θάνατος του Βασιλείου Β΄"
          },
          description: {
            en: "The empire stretches from the Danube to Syria and from Italy to the Caucasus; the zenith of medieval Byzantine power.",
            el: "Η αυτοκρατορία εκτείνεται από τον Δούναβη έως τη Συρία και από την Ιταλία έως τον Καύκασο· την κορυφή της μεσαιωνικής βυζαντινής ισχύος."
          },
          extendedDescription: {
            en: "Basil died in December 1025, sixty-eight years old, on the eve of leading an expedition against the Arabs of Sicily. He was buried in modest dress at the church of St John the Theologian outside the walls — disdaining the imperial mausoleum at the Holy Apostles. The empire he left was at its medieval territorial peak, with full provincial revenues, a treasury reportedly containing 200,000 talents, and frontiers stable on every side. Within fifty years, however, this inheritance would be squandered: his unmarried successors had no children to perpetuate the dynasty, his civilian-aristocratic successors disbanded the very themes and tagmata that had won his victories, and the disaster of Manzikert lay ahead. Modern Byzantinists treat his death as the high-water mark of the medieval Roman state.",
            el: "Ο Βασίλειος πέθανε τον Δεκέμβριο του 1025, εξήντα οκτώ ετών, την παραμονή της εκστρατείας του εναντίον των Αράβων της Σικελίας. Τάφηκε με λιτή ενδυμασία στον ναό του Αγίου Ιωάννη του Θεολόγου εκτός των τειχών — αρνούμενος το αυτοκρατορικό μαυσωλείο των Αγίων Αποστόλων. Η αυτοκρατορία που άφησε βρισκόταν στη μεσαιωνική εδαφική κορύφωσή της, με πλήρη επαρχιακά έσοδα, ταμείο που φέρεται να περιείχε 200.000 τάλαντα και σταθερά σύνορα από κάθε πλευρά. Εντός πενήντα ετών, ωστόσο, αυτή η κληρονομιά θα σπαταλιόταν: οι άγαμοι διάδοχοί του δεν είχαν παιδιά για να διαιωνίσουν τη δυναστεία, οι αστικοί-αριστοκρατικοί διάδοχοί του διέλυσαν τα ίδια τα θέματα και τα τάγματα που είχαν κερδίσει τις νίκες του, και η καταστροφή του Μαντζικέρτ βρισκόταν μπροστά. Οι σύγχρονοι βυζαντινολόγοι θεωρούν τον θάνατό του την ύπατη κορύφωση του μεσαιωνικού ρωμαϊκού κράτους."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Basilios_II.jpg?width=1024",
            alt: {
              en: "Emperor Basil II in triumph, miniature from his Psalter",
              el: "Ο αυτοκράτορας Βασίλειος Β΄ θριαμβευτής, μικρογραφία από το Ψαλτήριό του"
            },
            credit: "Marciana Library, Venice, via Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1054,
      era: {
        en: "Macedonian Dynasty",
        el: "Δυναστεία Μακεδονίας"
      },
      events: [
        {
          title: {
            en: "Great Schism",
            el: "Το Μεγάλο Σχίσμα"
          },
          description: {
            en: "Mutual excommunications between Cardinal Humbert and Patriarch Michael Keroularios formalise the split between Latin and Greek Christendom.",
            el: "Αμοιβαίες αφορισμοί ανάμεσα στον Καρδινάλιο Ουμβέρτο και τον Πατριάρχη Μιχαήλ Κηρουλάριο επισημοποιούν το σχίσμα ανάμεσα στη Λατινική και ελληνική Χριστιανότητα."
          },
          extendedDescription: {
            en: "The immediate triggers were petty: an argument over whether the Eucharistic bread should be leavened or unleavened (the Greek versus Latin practice), the patriarch's closure of Latin-rite churches in Constantinople, and the abrasive personalities of the papal legate Cardinal Humbert of Silva Candida and the patriarch Michael Keroularios. On 16 July 1054, Humbert laid a bull of excommunication against Keroularios on the altar of Hagia Sophia and walked out; the patriarch promptly excommunicated him in turn. Both sides intended limited gestures, and contemporaries did not see the moment as definitive. Yet the underlying differences — the Filioque clause, papal claims of universal jurisdiction, and divergent ecclesiologies — never closed, and the rupture was sealed politically by the Fourth Crusade in 1204. The mutual anathemas of 1054 were lifted only in 1965 by Paul VI and Athenagoras.",
            el: "Τα άμεσα ερεθίσματα ήταν δευτερεύοντα: διαφωνία για το αν ο ευχαριστιακός άρτος πρέπει να είναι ένζυμος ή άζυμος (η ελληνική έναντι της λατινικής πρακτικής), η κατάκλειση των λατινικών ναών στην Κωνσταντινούπολη από τον Πατριάρχη και οι σκληρές προσωπικότητες του παπικού λεγάτου, καρδιναλίου Ουμβέρτου της Σίλβα Κάντιδα, και του Πατριάρχη Μιχαήλ Κηρουλάριου. Στις 16 Ιουλίου 1054 ο Ουμβέρτος απέθεσε βούλλα αφορισμού κατά του Κηρουλάριου στο θυσιαστήριο της Αγίας Σοφίας και αποχώρησε· ο Πατριάρχης τον αφόρισε με τη σειρά του. Αμφότερες οι πλευρές προτίθεντο περιορισμένες χειρονομίες, και οι σύγχρονοι δεν έβλεπαν τη στιγμή ως οριστική. Όμως οι υποκείμενες διαφορές — το Filioque, οι παπικές αξιώσεις παγκόσμιας δικαιοδοσίας και οι αποκλίνουσες εκκλησιολογίες — ποτέ δεν έκλεισαν, και η ρήξη σφραγίστηκε πολιτικά από την Δ΄ Σταυροφορία το 1204. Τα αμοιβαία αναθέματα του 1054 ήρθησαν μόλις το 1965 από τον Παύλο ΣΤ΄ και τον Αθηναγόρα."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1067,
      era: {
        en: "Macedonian Dynasty",
        el: "Δυναστεία Μακεδονίας"
      },
      events: [
        {
          title: {
            en: "Death of Constantine X Doukas",
            el: "Ο θάνατος του Κωνσταντίνου Ι΄ Δούκα"
          },
          description: {
            en: "Constantine X dies, leaving the empire to his young sons under the regency of Empress Eudokia Makrembolitissa, who soon marries Romanos IV Diogenes.",
            el: "Ο Κωνσταντίνος Ι΄ πεθαίνει, αφήνοντας την αυτοκρατορία στους νεαρούς γιούς του υπό την επιμέλεια της αυτοκράτειρας Ευδοκίας Μακρεμβολίτισσας, που σύντομα παντρεύεται τον Ρωμανό Δ΄ Διογένη."
          },
          extendedDescription: {
            en: "Constantine X belonged to the civilian aristocracy faction that distrusted the army and had spent his short reign disbanding the eastern themes, dismissing veteran officers, and starving the frontier provinces of resources — exactly when the Seljuk Turks were beginning their probing raids into Anatolia. The dying emperor extracted from his wife an oath never to remarry, then named her regent. Within a year, however, the Patriarch John Xiphilinos absolved Eudokia of the oath, and she married the Cappadocian general Romanos Diogenes, who was crowned Romanos IV. The hope was that a soldier-emperor could repair the eastern frontier; Manzikert, four years later, would prove the gamble disastrous.",
            el: "Ο Κωνσταντίνος Ι΄ ανήκε στην αστική αριστοκρατική παράταξη που δυσπιστούσε προς τον στρατό και είχε αφιερώσει τη σύντομη βασιλεία του στη διάλυση των ανατολίτικων θεμάτων, στην απόλυση βετεράνων αξιωματικών και στην αφυδάτωση των συνοριακών επαρχιών από πόρους — ακριβώς όταν οι Σελτζούκοι Τούρκοι άρχιζαν τις διερευνητικές επιδρομές τους στη Μικρά Ασία. Ο ετοιμοθάνατος αυτοκράτορας πήρε από τη σύζυγό του όρκο να μην ξαναπαντρευτεί και κατόπιν την όρισε αντιβασίλισσα. Μέσα σε έναν χρόνο, ωστόσο, ο Πατριάρχης Ιωάννης Ξιφιλίνος απάλλαξε την Ευδοκία από τον όρκο, και εκείνη παντρεύτηκε τον Καππαδόκη στρατηγό Ρωμανό Διογένη, που στέφθηκε ως Ρωμανός Δ΄. Η ελπίδα ήταν ότι ένας στρατιώτης-αυτοκράτορας θα μπορούσε να επιδιορθώσει το ανατολικό σύνορο· ο Μαντζικέρτ, τέσσερα χρόνια αργότερα, θα αποδείκνυε καταστροφικό το στοίχημα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1071,
      era: {
        en: "Doukid Dynasty",
        el: "Δυναστεία Δούκα"
      },
      events: [
        {
          title: {
            en: "Battle of Manzikert",
            el: "Η μάχη του Μανζικέρτ"
          },
          description: {
            en: "Emperor Romanos IV is defeated and captured by the Seljuk Turks, opening Anatolia — the empire's demographic heart — to Turkish settlement.",
            el: "Ο αυτοκράτορας Ρωμανός Δ΄ ηττάται και αιχμαλωτίζεται από τους Σελτζούκους Τούρκους, ανοίγοντας τη Μικρά Ασία — τη δημογραφική καρδιά της αυτοκρατορίας — στην τουρκική εγκατάσταση."
          },
          extendedDescription: {
            en: "Romanos led an unwieldy army of perhaps forty thousand — including untrustworthy mercenary contingents and feuding noble retinues — into eastern Armenia in pursuit of the Seljuk sultan Alp Arslan. North of Lake Van, near the fortress of Manzikert, the two armies met. The Cappadocian magnate Andronikos Doukas, marching in the rear, refused to advance when the imperial center was hard-pressed and instead spread the rumor that Romanos had fallen, leading to the army's collapse. Romanos was captured, treated with courtesy by Alp Arslan, and ransomed home — only to be deposed, blinded so brutally that he died of his wounds, and the eastern frontier abandoned by the new Doukas regime. Within a decade Turkish raiders had reached the Aegean, and Anatolia, the empire's manpower reservoir for centuries, was lost.",
            el: "Ο Ρωμανός οδήγησε δυσκίνητο στρατό ίσως σαράντα χιλιάδων — συμπεριλαμβανομένων αναξιόπιστων μισθοφορικών σωμάτων και διχονομούντων αριστοκρατικών ακολούθων — στην ανατολική Αρμενία σε καταδίωξη του Σελτζούκου σουλτάνου Άλπ Άρσλαν. Βόρεια της λίμνης Βαν, κοντά στο φρούριο του Μαντζικέρτ, οι δύο στρατοί συναντήθηκαν. Ο Καππαδόκης μεγιστάνας Ανδρόνικος Δούκας, που βάδιζε στα νώτα, αρνήθηκε να προελάσει όταν το αυτοκρατορικό κέντρο πιεζόταν, και αντ' αυτού διέδωσε τη φήμη ότι ο Ρωμανός είχε πέσει, οδηγώντας στην κατάρρευση του στρατού. Ο Ρωμανός αιχμαλωτίσθη, του φέρθηκαν με ευγένεια από τον Άλπ Άρσλαν, και αφέθηκε ελεύθερος έναντι λύτρων — μόνο για να καθαιρεθεί, να τυφλωθεί τόσο βάρβαρα ώστε πέθανε από τα τραύματα, και το ανατολικό σύνορο εγκαταλείφθηκε από το νέο καθεστώς των Δουκών. Μέσα σε μία δεκαετία, οι τουρκικές επιδρομές είχαν φτάσει το Αιγαίο, και η Μικρά Ασία, το αποθεματικό ανθρώπινου δυναμικού της αυτοκρατορίας επί αιώνες, χάθηκε."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/131_Bataille_de_Malazgirt.jpg?width=1024",
            alt: {
              en: "Battle of Manzikert (1071), 15th-century French miniature",
              el: "Η μάχη του Μαντζικέρτ (1071), γαλλική μικρογραφία του 15ου αιώνα"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        },
        {
          title: {
            en: "Fall of Bari",
            el: "Η πτώση του Bari"
          },
          description: {
            en: "The last Byzantine stronghold in Italy falls to the Normans, ending five centuries of Roman rule in the peninsula.",
            el: "Το τελευταίο βυζαντινό φρούριο στην Ιταλία πέφτει στους Νορμανδούς, τερματίζοντας πέντε αιώνες ρωμαϊκής κυριαρχίας στη χερσόνησο."
          },
          extendedDescription: {
            en: "After three years of siege, the great commercial port of Bari, capital of the Catepanate of Italy, surrendered to Robert Guiscard on 16 April. The Catepanate had been the empire's southern Italian province since the late ninth century, with Greek-speaking populations in Apulia and Calabria, and had survived earlier Norman incursions only with extraordinary effort. Its loss in the same year as Manzikert was no coincidence: imperial attention was elsewhere, and a relief fleet sent from Constantinople under the Byzantine admiral Stephanos was beaten back. Robert went on to seize the rest of southern Italy and Sicily, founding what would become the Norman kingdom. The events of 1071 ended Roman political presence in the peninsula that had begun seventeen centuries earlier.",
            el: "Μετά από τριετή πολιορκία, το μεγάλο εμπορικό λιμάνι του Μπάρι, πρωτεύουσα του Κατεπανικίου της Ιταλίας, παραδόθηκε στον Ρομπέρτο Γυϊσκάρδο στις 16 Απριλίου. Το Κατεπανίκιο ήταν η νότια ιταλική επαρχία της αυτοκρατορίας από τα τέλη του ένατου αιώνα, με ελληνόφωνους πληθυσμούς στην Απουλία και την Καλαβρία, και είχε επιβιώσει προηγούμενες νορμανδικές εισβολές μόνον με εξαιρετική προσπάθεια. Η απώλειά του την ίδια χρονιά με το Μαντζικέρτ δεν ήταν σύμπτωση: η αυτοκρατορική προσοχή ήταν αλλού, και βυζαντινός στόλος ανακούφισης που στάλθηκε από την Κωνσταντινούπολη υπό τον ναύαρχο Στέφανο αντιμετωπίστηκε. Ο Ρομπέρτος προχώρησε να καταλάβει το υπόλοιπο της νότιας Ιταλίας και της Σικελίας, ιδρύοντας το μέλλον νορμανδικό βασίλειο. Τα γεγονότα του 1071 τερμάτισαν τη ρωμαϊκή πολιτική παρουσία στη χερσόνησο που είχε αρχίσει δεκαεπτά αιώνες νωρίτερα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1081,
      era: {
        en: "Komnenian Dynasty",
        el: "Δυναστεία Κομνηνών"
      },
      events: [
        {
          title: {
            en: "Alexios I Komnenos takes the throne",
            el: "Ο Αλέξιος Α΄ Κομνηνός ανέβαινει στον θρόνο"
          },
          description: {
            en: "Alexios begins the Komnenian restoration, reforming the army, the coinage and the aristocracy.",
            el: "Ο Αλέξιος ξεκινά την Κομνηνειακή αναγέννηση, μεταρρυθμίζοντας το στρατό, τα νομίσματα και την αριστοκρατία."
          },
          extendedDescription: {
            en: "Alexios I came to power at thirty-three, the third military emperor in five years and the heir of two military aristocratic families, the Komnenoi and Doukai. The empire he inherited was bankrupt, with most of Anatolia held by Turkish emirates and Robert Guiscard preparing to invade the western provinces. Through the next three decades — campaigning against Normans, Pechenegs, Turks, and Crusaders, debasing and then restoring a stable gold coinage (the hyperpyron), and binding the great families to the dynasty by marriage — he stabilized the state and created the family-based 'Komnenian system' that would govern the empire for a century. His daughter Anna's Alexiad, written from her own deposed retreat decades later, gives an unrivaled portrait of his reign.",
            el: "Ο Αλέξιος Α΄ ήλθε στην εξουσία στα τριάντα τρία του χρόνια, ο τρίτος στρατιωτικός αυτοκράτορας μέσα σε πέντε χρόνια και κληρονόμος δύο στρατιωτικών αριστοκρατικών οικογενειών, των Κομνηνών και των Δουκών. Η αυτοκρατορία που κληρονόμησε ήταν χρεοκοπημένη, με το μεγαλύτερο μέρος της Μικράς Ασίας στα χέρια τουρκικών εμιράτων και τον Ρομπέρτο Γυϊσκάρδο να ετοιμάζεται να εισβάλει στις δυτικές επαρχίες. Στις επόμενες τρεις δεκαετίες — εκστρατεύοντας εναντίον Νορμανδών, Πετσενέγων, Τούρκων και Σταυροφόρων, υποτιμώντας και κατόπιν αποκαθιστώντας σταθερό χρυσό νόμισμα (το υπέρπυρον), και δεσμεύοντας τις μεγάλες οικογένειες στη δυναστεία με γάμους — σταθεροποίησε το κράτος και δημιούργησε το οικογενειοκρατικό 'κομνήνειο σύστημα' που θα κυβερνούσε την αυτοκρατορία επί έναν αιώνα. Η Αλεξιάς της κόρης του Άννας, γραμμένη δεκαετίες αργότερα από την καθαιρεμένη μοναστική απομόνωσή της, παρέχει απαράμιλλη προσωπογραφία της βασιλείας του."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1095,
      era: {
        en: "Komnenian Dynasty",
        el: "Δυναστεία Κομνηνών"
      },
      events: [
        {
          title: {
            en: "Call of the First Crusade",
            el: "Το κάλεσμα της Πρώτης Σταυροφορίας"
          },
          description: {
            en: "Alexios's appeal for Western mercenaries provokes Urban II's summons to Clermont; Latin armies march east.",
            el: "Η έκκληση του Αλέξιου για δυτικούς μισθοφόρους προκαλεί την πρόσκληση του Ουρβανού Β΄ στη Κλερμόν· λατινικά στρατεύματα πορεύονται ανατολικά."
          },
          extendedDescription: {
            en: "Alexios had asked Pope Urban II for a small contingent of mounted mercenaries to help recover western Asia Minor from the Turks; what he received in answer was a continent-wide armed pilgrimage. Urban's sermon at Clermont in November 1095, with its cry 'Deus vult,' framed the response as a war for the liberation of Jerusalem and offered indulgence to all who took the cross. Tens of thousands of armed Westerners, organized in autonomous princely armies under Bohemond, Godfrey of Bouillon, and Raymond of Toulouse, converged on Constantinople through 1096–97, an inflow Alexios had never anticipated and could only manage with elaborate ceremonial and reluctant supplies. The First Crusade did recover Anatolia's western coast — but it also created the Latin states of the East and seeded the deepening mistrust that would explode at 1204.",
            el: "Ο Αλέξιος είχε ζητήσει από τον πάπα Ουρβανό Β΄ μικρό σώμα έφιππων μισθοφόρων για να ανακτήσει τη δυτική Μικρά Ασία από τους Τούρκους· εκείνο που έλαβε ως απάντηση ήταν μια ηπειρωτική ένοπλη προσκύνηση. Το κήρυγμα του Ουρβανού στο Κλερμόν τον Νοέμβριο του 1095, με την κραυγή 'Deus vult', πλαισίωσε την απάντηση ως πόλεμο για την απελευθέρωση της Ιερουσαλήμ και πρόσφερε άφεση αμαρτιών σε όσους έπαιρναν τον σταυρό. Δεκάδες χιλιάδες οπλισμένοι Δυτικοί, οργανωμένοι σε αυτόνομους ηγεμονικούς στρατούς υπό τον Βοημόντο, τον Γοδεφρίδο της Μπουιγιόν και τον Ραϊμόνδο της Τουλούζης, συνέκλιναν στην Κωνσταντινούπολη το 1096–97, εισροή που ο Αλέξιος δεν είχε ποτέ φανταστεί και που μπόρεσε να διαχειριστεί μόνο με περίτεχνη εθιμοτυπία και απρόθυμες προμήθειες. Η Α΄ Σταυροφορία ανέκτησε πράγματι τη δυτική ακτή της Μικράς Ασίας — αλλά δημιούργησε επίσης τα λατινικά κράτη της Ανατολής και έσπειρε τη βαθαίνουσα δυσπιστία που θα ξεσπούσε το 1204."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Passages_d'outremer_Fr5594%2C_fol._19r%2C_Concile_de_Clermont.jpg?width=1024",
            alt: {
              en: "Pope Urban II at the Council of Clermont, miniature from the 15th-century Passages d'outremer",
              el: "Ο πάπας Ουρβανός Β΄ στη Σύνοδο του Κλερμόν, μικρογραφία από το χειρόγραφο Passages d'outremer του 15ου αιώνα"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1108,
      era: {
        en: "Komnenian Dynasty",
        el: "Δυναστεία Κομνηνών"
      },
      events: [
        {
          title: {
            en: "Treaty of Devol",
            el: "Η Συνθήκη του Δεβόλου"
          },
          description: {
            en: "Alexios I forces Bohemond of Antioch to acknowledge Byzantine suzerainty over the Crusader states, though the treaty is never fully implemented.",
            el: "Ο Αλέξιος Α΄ αναγκάζει τον Βοημόντο της Αντιόχειας να αναγνωρίσει τη βυζαντινή υπερκυριαρχία στα κράτη των Σταυροφόρων, αν και η συνθήκη δεν εφαρμόζεται ποτέ πλήρως."
          },
          extendedDescription: {
            en: "Bohemond, prince of Antioch and the most belligerent of the First Crusade leaders, had violated his oath to return Antioch to the empire. He returned to Italy to whip up a second crusade against Byzantium itself and crossed to Epirus in 1107. After failing to capture Dyrrachion, his army was contained and starved by Alexios's strategy of harassment until he sued for terms. The Treaty of Devol was a humiliating personal submission: Bohemond accepted vassalage to the emperor, was to surrender Antioch to a Byzantine garrison upon his death, and renounced any further independent action. He returned to Italy and died there in 1111 without ever returning to Antioch — and his nephew Tancred ignored the treaty entirely. The agreement nevertheless became a touchstone Byzantine claim over the principality for the next two generations.",
            el: "Ο Βοημόντος, πρίγκιπας της Αντιόχειας και ο πιο πολεμοχαρής από τους ηγέτες της Α΄ Σταυροφορίας, είχε παραβιάσει τον όρκο του να επιστρέψει την Αντιόχεια στην αυτοκρατορία. Επέστρεψε στην Ιταλία για να ξεσηκώσει δεύτερη σταυροφορία εναντίον του ίδιου του Βυζαντίου, και διέβη στην Ήπειρο το 1107. Αφού απέτυχε να καταλάβει το Δυρράχιον, ο στρατός του περιορίστηκε και ταλαιπωρήθηκε από τη στρατηγική παρενόχλησης του Αλεξίου ώσπου ζήτησε όρους. Η Συνθήκη του Δεβόλου ήταν ταπεινωτική προσωπική υποταγή: ο Βοημόντος αποδέχθηκε υποτέλεια στον αυτοκράτορα, όφειλε να παραδώσει την Αντιόχεια σε βυζαντινή φρουρά μετά τον θάνατό του και απαρνήθηκε κάθε περαιτέρω ανεξάρτητη δράση. Επέστρεψε στην Ιταλία και πέθανε εκεί το 1111 χωρίς ποτέ να επιστρέψει στην Αντιόχεια — και ο ανηψιός του Τανκρέδος αγνόησε εντελώς τη συνθήκη. Η συμφωνία ωστόσο έγινε ορόσημο της βυζαντινής αξίωσης επί του πριγκιπάτου για τις δύο επόμενες γενιές."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1118,
      era: {
        en: "Komnenian Dynasty",
        el: "Δυναστεία Κομνηνών"
      },
      events: [
        {
          title: {
            en: "Accession of John II Komnenos",
            el: "Η ανάβαση του Ιωάννη Β΄ Κομνηνού στον θρόνο"
          },
          description: {
            en: "John II, known as 'the Good', begins a reign marked by military success, piety, and efforts to restore Byzantine authority in Anatolia.",
            el: "Ο Ιωάννης Β΄, γνωστός ως «ο Καλός», ξεκινά μια βασιλεία που χαρακτηρίζεται από στρατιωτικές νίκες, ευσέβεια και προσπάθειες αποκατάστασης της βυζαντινής εξουσίας στη Μικρά Ασία."
          },
          extendedDescription: {
            en: "Eldest son of Alexios I, John frustrated his sister Anna's coup attempt at his accession and went on to twenty-five years of patient, soldierly rule. He was austere, generous to the army, and famous for his personal restraint — Niketas Choniates calls him the most upright Komnenian. His campaigns recovered Pisidia, Pamphylia, and Cilicia from the Turks and the Armenians, secured the Pontic frontier against Danishmendid raids, and reasserted Byzantine suzerainty over the Crusader states of Antioch and Edessa. He died of sepsis from a hunting accident in Cilicia in 1143, at the moment of preparing his final eastern campaign. His reign represents the high noon of the Komnenian restoration.",
            el: "Πρωτότοκος γιος του Αλέξιου Α΄, ο Ιωάννης ματαίωσε την απόπειρα πραξικοπήματος της αδελφής του Άννας στην ανάβασή του και ακολούθησε εικοσιπενταετή υπομονετική, στρατιωτική εξουσία. Ήταν λιτοδίαιτος, γενναιόδωρος προς τον στρατό και ξακουστός για την προσωπική του εγκράτεια — ο Νικήτας Χωνιάτης τον αποκαλεί τον πιο ηθικό Κομνηνό. Οι εκστρατείες του ανέκτησαν την Πισιδία, την Παμφυλία και την Κιλικία από Τούρκους και Αρμενίους, εξασφάλισαν το ποντιακό σύνορο εναντίον των επιδρομών των Δανισμενδιδών και επανεπιβεβαίωσαν τη βυζαντινή υποτέλεια επί των σταυροφορικών κρατών της Αντιόχειας και της Έδεσσας. Πέθανε από σήψη μετά από ατύχημα κυνηγίου στην Κιλικία το 1143, ακριβώς όταν ετοίμαζε την τελική ανατολική εκστρατεία του. Η βασιλεία του αντιπροσωπεύει το ζενίθ της κομνηνείου αποκατάστασης."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1143,
      era: {
        en: "Komnenian Dynasty",
        el: "Δυναστεία Κομνηνών"
      },
      events: [
        {
          title: {
            en: "Accession of Manuel I Komnenos",
            el: "Η ανάβαση του Μανουήλ Α΄ Κομνηνού στον θρόνο"
          },
          description: {
            en: "Manuel presides over a brilliant, cosmopolitan court, balancing Crusader states, the Sultanate of Rum, and the West.",
            el: "Ο Μανουήλ προεδρεύει μιας λαμπρής, κοσμοπολίτιστης αυλής, ισορροπώντας τα κράτη των Σταυροφόρων, το Σουλτανάτο της Ρούμ και τη Δύση."
          },
          extendedDescription: {
            en: "John II passed over his elder sons in favor of the youngest, Manuel, who proved a brilliant, charismatic, and overactive ruler. Educated as much in Latin as in Greek customs, he kept a court that hosted Frankish tournaments alongside Orthodox liturgy, married first a German princess and then an Antiochene princess, and pursued an ambitious western policy aimed at the imperial crown of Italy. Diplomatic and military intervention extended Byzantine influence into Hungary, the Crusader states, and southern Italy. The Second Crusade passed through his realm, and he played decisive roles in Crusader politics. But his eastern policy ended in disaster at Myriokephalon in 1176, and the financial overreach of his cosmopolitan ambitions left the empire fragile at his death.",
            el: "Ο Ιωάννης Β΄ παρέκαμψε τους μεγαλύτερους γιους του υπέρ του μικρότερου, του Μανουήλ, που αποδείχθηκε λαμπρός, χαρισματικός και υπερδραστήριος ηγεμόνας. Εκπαιδευμένος εξίσου στα λατινικά όσο και στα ελληνικά έθιμα, διατηρούσε αυλή που φιλοξενούσε φραγκικά κονταροτουρνέ μαζί με την ορθόδοξη λειτουργία, παντρεύτηκε αρχικά μια Γερμανίδα πριγκίπισσα και έπειτα μια Αντιοχεινή, και επιδίωξε φιλόδοξη δυτική πολιτική με στόχο το αυτοκρατορικό στέμμα της Ιταλίας. Διπλωματική και στρατιωτική παρέμβαση επέκτεινε τη βυζαντινή επιρροή στην Ουγγαρία, τα σταυροφορικά κράτη και τη νότια Ιταλία. Η Β΄ Σταυροφορία διέσχισε το βασίλειό του, και έπαιξε καθοριστικούς ρόλους στην πολιτική των Σταυροφόρων. Αλλά η ανατολική του πολιτική κατέληξε σε καταστροφή στη Μυριοκέφαλο το 1176, και η οικονομική υπερέκταση των κοσμοπολίτικων φιλοδοξιών του άφησε την αυτοκρατορία εύθραυστη κατά τον θάνατό του."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1176,
      era: {
        en: "Komnenian Dynasty",
        el: "Δυναστεία Κομνηνών"
      },
      events: [
        {
          title: {
            en: "Battle of Myriokephalon",
            el: "Η μάχη της Μυριοκεφάλου"
          },
          description: {
            en: "Manuel's army is mauled by the Seljuks at a mountain pass in Phrygia; Byzantine hopes of reconquering the Anatolian plateau fade.",
            el: "Το στρατό του Μανουήλ χτυπάται σκληρά από τους Σελτζούκους σε ένα ορεινό πέρασμα της Φρυγίας· οι ελπίδες του Βυζαντίου για ανάκτηση του ανατολικού οροπεδίου αποδυναμώνονται."
          },
          extendedDescription: {
            en: "Marching toward the Seljuk capital of Iconium with an army of perhaps thirty-five thousand, Manuel allowed his column to be strung out through the narrow defile of Tzybritze. Sultan Kilij Arslan II ambushed it on both flanks, destroying baggage and rear units before the main column could deploy. Manuel reportedly considered abandoning his army to escape but was shamed by his officers into staying. The Seljuks, surprisingly, allowed him to withdraw on harsh terms — apparently fearing the cost of a final assault. The defeat exposed the limits of imperial power in Anatolia and dashed any prospect of permanently rolling back Turkish settlement on the plateau. Niketas Choniates compared it explicitly to Manzikert, though it was less catastrophic in the field; the strategic effect was similar.",
            el: "Βαδίζοντας προς τη σελτζουκική πρωτεύουσα του Ικονίου με στρατό ίσως τριάντα πέντε χιλιάδων, ο Μανουήλ επέτρεψε στη φάλαγγά του να εκτεθεί στο στενό πέρασμα του Τζιβρίτζε. Ο σουλτάνος Κιλίτζ Άρσλαν Β΄ της επιτέθηκε από τις δύο πλευρές, καταστρέφοντας τα φορτία και την οπισθοφυλακή προτού το κύριο σώμα μπορέσει να αναπτυχθεί. Ο Μανουήλ φέρεται να σκέφτηκε να εγκαταλείψει τον στρατό του για να σωθεί, αλλά οι αξιωματικοί του τον εξάναγκασαν με ντροπή να παραμείνει. Οι Σελτζούκοι, εκπληκτικά, του επέτρεψαν να αποσυρθεί με σκληρούς όρους — προφανώς φοβούμενοι το κόστος τελικής επίθεσης. Η ήττα αποκάλυψε τα όρια της αυτοκρατορικής εξουσίας στη Μικρά Ασία και κατέρριψε κάθε προοπτική μόνιμης ανατροπής της τουρκικής εγκατάστασης στο οροπέδιο. Ο Νικήτας Χωνιάτης την συνέκρινε ρητά με το Μαντζικέρτ, αν και ήταν λιγότερο καταστροφική στο πεδίο· το στρατηγικό αποτέλεσμα ήταν παρόμοιο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1180,
      era: {
        en: "Komnenian Dynasty",
        el: "Δυναστεία Κομνηνών"
      },
      events: [
        {
          title: {
            en: "Death of Manuel I Komnenos",
            el: "Ο θάνατος του Μανουήλ Α΄ Κομνηνού"
          },
          description: {
            en: "Manuel dies, leaving his 11-year-old son Alexios II under the regency of Empress Maria of Antioch, leading to political instability.",
            el: "Ο Μανουήλ πεθαίνει, αφήνοντας τον 11χρονο γιό του Αλέξιο Β΄ υπό την επιμέλεια της αυτοκράτειρας Μαρίας της Αντιόχειας, οδηγώντας σε πολιτική αστάθεια."
          },
          extendedDescription: {
            en: "Manuel's foreign-born widow Maria-Xene exercised the regency through her favorite the protosebastos Alexios Komnenos, whose pro-Latin policies and rumored romance with the empress alienated both the Constantinopolitan populace and the Komnenian family. In April 1182 the elderly cousin Andronikos Komnenos marched on the capital from Pontus and entered to riotous welcome; a massacre of the city's Latin merchants followed, in which thousands were killed and Western witnesses such as Eustathios of Thessalonica recorded their horror. Andronikos disposed of Maria, then of Alexios II — strangled with a bowstring on his orders — and seized power as co-emperor and then sole emperor. The political collapse that began with Manuel's death ended in chronic civil war and accelerated the empire's decline.",
            el: "Η ξενόφερτη χήρα του Μανουήλ Μαρία-Ξένη ασκούσε την αντιβασιλεία μέσω του ευνοούμενού της, του πρωτοσέβαστου Αλέξιου Κομνηνού, του οποίου η φιλο-λατινική πολιτική και η φημολογούμενη ερωτική σχέση με την αυτοκράτειρα αποξένωσαν τόσο τον λαό της Κωνσταντινούπολης όσο και την κομνήνεια οικογένεια. Τον Απρίλιο του 1182 ο ηλικιωμένος ξάδελφος Ανδρόνικος Κομνηνός εξεστράτευσε προς την πρωτεύουσα από τον Πόντο και εισήλθε με θερμή υποδοχή· σφαγή των Λατίνων εμπόρων της πόλης ακολούθησε, στην οποία σκοτώθηκαν χιλιάδες, και δυτικοί μάρτυρες όπως ο Ευστάθιος Θεσσαλονίκης κατέγραψαν τη φρίκη τους. Ο Ανδρόνικος εξάλειψε τη Μαρία, κατόπιν τον Αλέξιο Β΄ — που στραγγαλίστηκε με χορδή τόξου με εντολή του — και κατέλαβε την εξουσία ως συναυτοκράτορας και έπειτα μοναδικός αυτοκράτορας. Η πολιτική κατάρρευση που άρχισε με τον θάνατο του Μανουήλ κατέληξε σε χρόνιο εμφύλιο πόλεμο και επιτάχυνε την παρακμή της αυτοκρατορίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1185,
      era: {
        en: "Komnenian Dynasty",
        el: "Δυναστεία Κομνηνών"
      },
      events: [
        {
          title: {
            en: "Norman sack of Thessalonica",
            el: "Η νορμανδική λεηλασία της Θεσσαλονίκης"
          },
          description: {
            en: "William II of Sicily captures and sacks Thessalonica, the empire's second city, exposing military weakness under the Komnenoi.",
            el: "Ο Γουλιέλμος Β΄ της Σικελίας καταλαμβάνει και λεηλατεί τη Θεσσαλονίκη, τη δεύτερη πόλη της αυτοκρατορίας, αποκαλύπτοντας στρατιωτική αδυναμία υπό τους Κομνηνούς."
          },
          extendedDescription: {
            en: "Exploiting Andronikos's terror at home, William II of Sicily landed an army at Dyrrachion and a second force besieged Thessalonica. The city's defense was incompetently handled by David Komnenos and the imperial garrison fled at the decisive moment. The Normans broke in on 24 August and gave the city over to a sack of unprecedented brutality — eyewitness Eustathios of Thessalonica, who lived through it, leaves a harrowing record of seven days of slaughter, rape, and sacrilege in churches. Many thousands died. The trauma reached Constantinople with the survivors and contributed directly to the overthrow of Andronikos within a month. The Norman army was driven off in the autumn at the Strymon, but the wound to the empire's prestige was lasting.",
            el: "Εκμεταλλευόμενος τον τρόμο του Ανδρόνικου στο εσωτερικό, ο Γουλιέλμος Β΄ της Σικελίας αποβίβασε στρατό στο Δυρράχιον και δεύτερη δύναμη πολιόρκησε τη Θεσσαλονίκη. Η άμυνα της πόλης διοικήθηκε ανεπαρκώς από τον Δαβίδ Κομνηνό, και η αυτοκρατορική φρουρά εγκατέλειψε τη μάχη στην κρίσιμη στιγμή. Οι Νορμανδοί εισχώρησαν στις 24 Αυγούστου και παρέδωσαν την πόλη σε λεηλασία πρωτοφανούς σκληρότητας — ο αυτόπτης Ευστάθιος Θεσσαλονίκης, που έζησε μέσα από αυτήν, αφήνει συγκλονιστική μαρτυρία επτά ημερών σφαγής, βιασμών και βεβηλώσεων σε ναούς. Πολλές χιλιάδες έχασαν τη ζωή τους. Το τραύμα έφτασε στην Κωνσταντινούπολη με τους επιζώντες και συνέβαλε άμεσα στην ανατροπή του Ανδρόνικου μέσα σε έναν μήνα. Ο νορμανδικός στρατός εκδιώχθηκε το φθινόπωρο στον Στρυμόνα, αλλά η πληγή στο γόητρο της αυτοκρατορίας παρέμεινε διαρκής."
          },
          category: "military"
        },
        {
          title: {
            en: "Accession of Isaac II Angelos",
            el: "Η ανάβαση του Ισαάκιου Β΄ Αγγέλου στον θρόνο"
          },
          description: {
            en: "Isaac II overthrows and kills the tyrannical Andronikos I Komnenos, beginning the incompetent Angelos dynasty.",
            el: "Ο Ισαάκιος Β΄ ανατρέπει και σκοτώνει τον τύραννο Ανδρόνικο Α΄ Κομνηνό, αρχίζοντας τη μη ικανή δυναστεία των Αγγέλων."
          },
          extendedDescription: {
            en: "Andronikos's reign of terror, while popular at first for its assault on aristocratic abuses, had alienated nearly every constituency. When Andronikos ordered the arrest of Isaac Angelos on a divinatory pretext, Isaac killed the imperial agent, fled to Hagia Sophia, and was acclaimed there. The mob seized Andronikos in the palace, paraded him on a mangy camel, and tortured him to death over three days. Isaac II was a vacillating, dim ruler whose decade in power saw the Vlach-Bulgarian revolt establish a new Bulgarian state, the Third Crusade pass through with hostility, and the imperial finances collapse. He was deposed and blinded in 1195 by his own brother Alexios III. The Angeloi, with brief restoration, would preside over the empire until 1204.",
            el: "Η τρομοκρατική βασιλεία του Ανδρόνικου, αν και αρχικά δημοφιλής για την επίθεσή της στις αριστοκρατικές καταχρήσεις, είχε αποξενώσει σχεδόν κάθε ομάδα. Όταν ο Ανδρόνικος διέταξε τη σύλληψη του Ισαακίου Αγγέλου με μαντικό πρόσχημα, ο Ισαάκιος σκότωσε τον αυτοκρατορικό απεσταλμένο, κατέφυγε στην Αγία Σοφία και ανακηρύχθηκε εκεί. Ο όχλος συνέλαβε τον Ανδρόνικο στο ανάκτορο, τον έσυρε σε ψωραλέα καμήλα και τον βασάνισε μέχρι θανάτου επί τρεις ημέρες. Ο Ισαάκιος Β΄ ήταν παλίνδρομος και αμβλύς ηγεμόνας του οποίου η δεκαετία στην εξουσία είδε την βλαχοβουλγαρική εξέγερση να εγκαθιδρύει νέο βουλγαρικό κράτος, την Γ΄ Σταυροφορία να διέρχεται με εχθρότητα και τα αυτοκρατορικά οικονομικά να καταρρέουν. Καθαιρέθηκε και τυφλώθηκε το 1195 από τον ίδιο του τον αδελφό Αλέξιο Γ΄. Οι Άγγελοι, με σύντομη αποκατάσταση, θα διοικούσαν την αυτοκρατορία ως το 1204."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1194,
      era: {
        en: "Angelos Dynasty",
        el: "Δυναστεία Αγγέλων"
      },
      events: [
        {
          title: {
            en: "Battle of Arcadiopolis",
            el: "Η μάχη της Αρκαδιούπολης"
          },
          description: {
            en: "The Bulgarians under Tsar Kaloyan defeat the Byzantine army, establishing the Second Bulgarian Empire as a major threat.",
            el: "Οι Βούλγαροι υπό τον Τσάρ Κάλογιαν ηττούν το βυζαντινό στρατό, ιδρύοντας τη Δεύτερη Βουλγαρική Αυτοκρατορία ως μεγάλη απειλή."
          },
          extendedDescription: {
            en: "The Vlach-Bulgarian uprising under the brothers Peter and Asen had begun in 1185 in resentment at heavy taxation imposed for Isaac II's wedding. By 1194, under their younger brother Kaloyan, the rebels had built a state spanning much of modern Bulgaria. At Arcadiopolis in eastern Thrace, an imperial army sent to recover lost territory was overwhelmed in another humiliating defeat that Niketas Choniates compares to Adrianople of 378. The Second Bulgarian Empire was now a permanent feature of the Balkan landscape, securing recognition from Pope Innocent III in 1204 and reaching its peak under Kaloyan's nephew Ivan Asen II — a powerful neighbor that the diminished post-1204 empire would have to negotiate with for centuries.",
            el: "Η βλαχοβουλγαρική εξέγερση υπό τους αδελφούς Πέτρο και Ασένη είχε αρχίσει το 1185 από αγανάκτηση για τη βαριά φορολογία που είχε επιβληθεί για τον γάμο του Ισαακίου Β΄. Έως το 1194, υπό τον νεότερο αδελφό τους Κάλογιαν, οι επαναστάτες είχαν δημιουργήσει κράτος που εκτεινόταν σε μεγάλο μέρος της σημερινής Βουλγαρίας. Στην Αρκαδιούπολη της ανατολικής Θράκης, αυτοκρατορικός στρατός που στάλθηκε για ανάκτηση των χαμένων εδαφών συνετρίβη σε άλλη ταπεινωτική ήττα την οποία ο Νικήτας Χωνιάτης συγκρίνει με την Αδριανούπολη του 378. Η Δεύτερη Βουλγαρική Αυτοκρατορία ήταν πλέον μόνιμο χαρακτηριστικό του βαλκανικού τοπίου, εξασφαλίζοντας αναγνώριση από τον πάπα Ιννοκέντιο Γ΄ το 1204 και φτάνοντας στην ακμή της υπό τον ανηψιό του Κάλογιαν, Ιωάννη Ασένη Β΄ — ισχυρός γείτονας με τον οποίο η συρρικνωμένη μετά το 1204 αυτοκρατορία θα έπρεπε να διαπραγματεύεται επί αιώνες."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1204,
      era: {
        en: "Latin Occupation",
        el: "Λατινική Κατοχή"
      },
      events: [
        {
          title: {
            en: "Sack of Constantinople",
            el: "Η άλωση της Κωνσταντινούπολης"
          },
          description: {
            en: "The Fourth Crusade storms and pillages the capital. The empire is broken into Latin and Greek successor states — Nicaea, Epiros, and Trebizond.",
            el: "Η Τέταρτη Σταυροφορία επιτίθεται και λεηλατεί την πρωτεύουσα. Η αυτοκρατορία κατακερματίζεται σε λατινικά και ελληνικά διάδοχα κράτη — Νικαία, Ήπειρος και Τραπεζούντα."
          },
          extendedDescription: {
            en: "Diverted from its original Egyptian destination by Venetian financial pressure and the dynastic claims of the deposed prince Alexios IV, the Fourth Crusade forced its way into Constantinople first as a restorer in 1203, then as a conqueror after Alexios's murder. On 13 April 1204 the Crusader-Venetian force broke through the harbor walls and gave the city over to a three-day sack of unprecedented systematic destruction: relics, statues, and books were carried off, the great equestrian monuments melted for coin, the famous bronze horses of Hagia Sophia shipped to Venice. A Latin Empire was set up in the city, with Greek successor states emerging at Nicaea (under the Laskarids), Epiros (under the Komnenoi-Doukai), and Trebizond (under the Komnenoi). The schism between East and West was made permanent.",
            el: "Παρεκτρεπόμενη από τον αρχικό αιγυπτιακό προορισμό της από βενετική οικονομική πίεση και τις δυναστικές αξιώσεις του εκπτώτου πρίγκιπα Αλεξίου Δ΄, η Δ΄ Σταυροφορία εισέβαλε στην Κωνσταντινούπολη πρώτα ως αποκαταστάτρια το 1203, και κατόπιν ως κατακτήτρια μετά τη δολοφονία του Αλεξίου. Στις 13 Απριλίου 1204 η σταυροφορική-βενετική δύναμη διέρρηξε τα τείχη του λιμανιού και παρέδωσε την πόλη σε τριήμερη λεηλασία πρωτοφανούς συστηματικής καταστροφής: λείψανα, αγάλματα και βιβλία μεταφέρθηκαν, τα μεγάλα έφιππα μνημεία λιώθηκαν για νομίσματα, τα ξακουστά χάλκινα άλογα της Αγίας Σοφίας μεταφέρθηκαν στη Βενετία. Στην πόλη εγκαθιδρύθηκε Λατινική Αυτοκρατορία, με ελληνικά διάδοχα κράτη να αναδύονται στη Νίκαια (υπό τους Λασκάριδες), στην Ήπειρο (υπό τους Κομνηνούς-Δούκες) και στην Τραπεζούντα (υπό τους Κομνηνούς). Το σχίσμα μεταξύ Ανατολής και Δύσης έγινε μόνιμο."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Eug%C3%A8ne_Delacroix_-_The_Entry_of_the_Crusaders_into_Constantinople_-_WGA6202.jpg?width=1024",
            alt: {
              en: "Eugène Delacroix, The Entry of the Crusaders into Constantinople (1840)",
              el: "Ευγένιος Ντελακρουά, Η είσοδος των Σταυροφόρων στην Κωνσταντινούπολη (1840)"
            },
            credit: "Eugène Delacroix, via Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1261,
      era: {
        en: "Palaiologan Dynasty",
        el: "Δυναστεία Παλαιολόγων"
      },
      events: [
        {
          title: {
            en: "Recovery of Constantinople",
            el: "Η ανάκτηση της Κωνσταντινούπολης"
          },
          description: {
            en: "Michael VIII Palaiologos restores the empire in the capital, but a diminished, impoverished shadow of its former self.",
            el: "Ο Μιχαήλ Η΄ Παλαιολόγος αποκαθιστά την αυτοκρατορία στην πρωτεύουσα, αλλά ως ένα μικρό, φτωχό σκιάχτρο του παρελθόντος."
          },
          extendedDescription: {
            en: "Half a century of Latin occupation had left Constantinople depopulated and dilapidated. While the Latin emperor Baldwin II was abroad seeking aid, the Nicaean general Alexios Strategopoulos took the city almost without resistance on 25 July 1261 with only eight hundred men, exploiting an entrance through an unguarded postern shown by local Greeks. Michael VIII Palaiologos — already regent and co-emperor at Nicaea, having displaced the young John IV Laskaris — re-entered the capital in solemn procession behind the icon of the Theotokos Hodegetria. He spent the next twenty years rebuilding the city's monuments, balancing diplomacy among Italians, Mongols, and Mamluks, and maneuvering against Charles of Anjou's planned reconquest. The restored empire, however, was a regional power: Anatolia would not be recovered, and the eastern Aegean and Balkans alone formed its core.",
            el: "Μισός αιώνας λατινικής κατοχής είχε αφήσει την Κωνσταντινούπολη αποψιλωμένη και ερειπωμένη. Ενώ ο Λατίνος αυτοκράτορας Βαλδουίνος Β΄ ήταν στο εξωτερικό αναζητώντας βοήθεια, ο Νικαιεύς στρατηγός Αλέξιος Στρατηγόπουλος κατέλαβε την πόλη σχεδόν χωρίς αντίσταση στις 25 Ιουλίου 1261 με μόλις οκτακόσιους άνδρες, εκμεταλλευόμενος είσοδο από αφύλακτη παραπύλη που του υπέδειξαν ντόπιοι Έλληνες. Ο Μιχαήλ Η΄ Παλαιολόγος — ήδη αντιβασιλέας και συναυτοκράτορας στη Νίκαια, έχοντας εκτοπίσει τον νεαρό Ιωάννη Δ΄ Λάσκαρι — επανεισήλθε στην πρωτεύουσα σε επίσημη πομπή πίσω από την εικόνα της Παναγίας Οδηγήτριας. Αφιέρωσε τα επόμενα είκοσι χρόνια στην ανοικοδόμηση των μνημείων της πόλης, στην ισορροπία διπλωματίας ανάμεσα σε Ιταλούς, Μογγόλους και Μαμελούκους, και στους ελιγμούς εναντίον της σχεδιαζόμενης ανακατάκτησης του Καρόλου της Ανιού. Η αποκαταστημένη αυτοκρατορία, ωστόσο, ήταν περιφερειακή δύναμη: η Μικρά Ασία δεν θα ανακτάτο, και ο πυρήνας της θα ήταν μόνο το ανατολικό Αιγαίο και τα Βαλκάνια."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1282,
      era: {
        en: "Palaiologan Dynasty",
        el: "Δυναστεία Παλαιολόγων"
      },
      events: [
        {
          title: {
            en: "Sicilian Vespers",
            el: "Οι Σικελικοί Εσπερινοί"
          },
          description: {
            en: "Byzantine diplomacy and gold help ignite the rebellion that destroys Charles of Anjou's plans to reconquer Constantinople.",
            el: "Η βυζαντινή διπλωματία και το χρυσό βοηθούν να ανάψουν την εξέγερση που καταστρέφει τα σχέδια του Κάρολου της Ανιού για ανάκτηση της Κωνσταντινούπολης."
          },
          extendedDescription: {
            en: "Charles of Anjou, king of Sicily, had assembled an enormous fleet at Messina to launch a long-prepared crusade against Constantinople. On the evening of Easter Monday, 30 March 1282, an incident at the Church of the Holy Spirit outside Palermo — a French sergeant insulting a Sicilian noblewoman — flared into a popular massacre of the French garrison and rapidly spread across the island. Within weeks Charles had lost Sicily and was forced to abandon his eastern expedition entirely. Michael VIII's diplomacy had been at the heart of the conspiracy: imperial subsidies funded the agents of Peter III of Aragon and connected him with the Genoese and the Sicilian opposition. The dying emperor told his son that he could thank God for the deliverance, having spent his treasury to engineer it.",
            el: "Ο Κάρολος της Ανιού, βασιλιάς της Σικελίας, είχε συγκεντρώσει τεράστιο στόλο στη Μεσσήνη για να εξαπολύσει μια από καιρό προετοιμασμένη σταυροφορία εναντίον της Κωνσταντινούπολης. Το βράδυ της Δευτέρας του Πάσχα, 30 Μαρτίου 1282, ένα συμβάν στον ναό του Αγίου Πνεύματος έξω από το Παλέρμο — Γάλλος λοχίας προσέβαλε μια Σικελή ευγενίδα — εξελίχθηκε σε λαϊκή σφαγή της γαλλικής φρουράς και εξαπλώθηκε ταχύτατα σε ολόκληρο το νησί. Σε εβδομάδες ο Κάρολος είχε χάσει τη Σικελία και αναγκάστηκε να εγκαταλείψει εντελώς την ανατολική του εκστρατεία. Η διπλωματία του Μιχαήλ Η΄ ήταν στην καρδιά της συνωμοσίας: αυτοκρατορικές επιδοτήσεις χρηματοδότησαν τους πράκτορες του Πέτρου Γ΄ της Αραγωνίας και τον συνέδεσαν με τους Γενουάτες και τη σικελική αντιπολίτευση. Ο ετοιμοθάνατος αυτοκράτορας είπε στον γιο του ότι μπορούσε να ευχαριστήσει τον Θεό για τη σωτηρία, έχοντας ξοδέψει το ταμείο του για να την ενορχηστρώσει."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1299,
      era: {
        en: "Palaiologan Dynasty",
        el: "Δυναστεία Παλαιολόγων"
      },
      events: [
        {
          title: {
            en: "Founding of the Ottoman Emirate",
            el: "Η ίδρυση του Οθωμανικού Εμιράτου"
          },
          description: {
            en: "Osman I declares independence from the Seljuk Sultanate of Rum, establishing the Ottoman state that will eventually conquer Constantinople.",
            el: "Ο Οσμάν Α΄ δηλώνει ανεξαρτησία από το Σελτζούκιο Σουλτανάτο της Ρούμ, ιδρύοντας το Οθωμανικό κράτος που θα κατακτήσει τελικά την Κωνσταντινούπολη."
          },
          extendedDescription: {
            en: "The collapse of the Seljuk Sultanate of Rum under Mongol pressure left a frontier of small Turkish ghazi emirates along the western edge of Anatolia, harassing the weakened Byzantine border. Among them was the chief Osman, founder of a small principality on the Sakarya river opposite Bithynia. Tradition places his victory at the Battle of Bapheus near Nicomedia in 1302 as the moment of effective independence, though the symbolic 1299 date is conventional. Osman's small emirate had access to Greek-speaking renegades, suspended Byzantine soldiery, and freedom of movement that the larger Anatolian beyliks lacked, and he positioned it to absorb Byzantine territory and refugees alike. Within four generations his descendants would rule Constantinople.",
            el: "Η κατάρρευση του Σελτζουκικού Σουλτανάτου του Ρουμ υπό τη μογγολική πίεση άφησε ένα σύνορο μικρών τουρκικών εμιράτων ghazi κατά μήκος της δυτικής άκρης της Μικράς Ασίας, τα οποία παρενοχλούσαν το αποδυναμωμένο βυζαντινό σύνορο. Μεταξύ τους ήταν ο αρχηγός Οσμάν, ιδρυτής μικρού πριγκιπάτου στον ποταμό Σαγγάριο απέναντι από τη Βιθυνία. Η παράδοση τοποθετεί τη νίκη του στη μάχη του Βαφέως κοντά στη Νικομήδεια το 1302 ως τη στιγμή της ουσιαστικής ανεξαρτησίας, αν και η συμβολική ημερομηνία 1299 είναι συμβατική. Το μικρό εμιράτο του Οσμάν είχε πρόσβαση σε ελληνόφωνους αυτόμολους, στάσιμους Βυζαντινούς στρατιώτες και ελευθερία κίνησης που έλειπε από τα μεγαλύτερα ανατολίτικα μπεϋλίκια, και το τοποθέτησε ώστε να απορροφά τόσο βυζαντινά εδάφη όσο και πρόσφυγες. Εντός τεσσάρων γενεών οι απόγονοί του θα κυβερνούσαν την Κωνσταντινούπολη."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1303,
      era: {
        en: "Palaiologan Dynasty",
        el: "Δυναστεία Παλαιολόγων"
      },
      events: [
        {
          title: {
            en: "Catalan Grand Company arrives",
            el: "Η άφιξη της Καταλανικής Μεγάλης Εταιρίας"
          },
          description: {
            en: "The Catalan mercenaries, hired by Emperor Andronikos II, turn against their employers and ravage Thrace and Macedonia.",
            el: "Οι Καταλανοί μισθοφόροι, που προσλήφθηκαν από τον αυτοκράτορα Ανδρόνικο Β΄, στρέφονται κατά των εργοδοτών τους και λεηλατούν τη Θράκη και τη Μακεδονία."
          },
          extendedDescription: {
            en: "Desperate for soldiers against the Turks, Andronikos II hired some six thousand veterans of the War of the Sicilian Vespers under Roger de Flor. They achieved striking initial successes in Anatolia but quarreled with imperial officers over arrears of pay; in April 1305 the co-emperor Michael IX had Roger murdered at the palace at Adrianople. The Catalans took terrible revenge: they declared war on the empire, ravaged Thrace and Macedonia from a fortified base at Gallipoli for two years, then marched south through Thessaly and seized the Frankish duchy of Athens at the Battle of Halmyros in 1311. The 'Catalan Vengeance' devastated the European provinces at the very moment they could least afford it and accelerated the empire's loss of effective control in the Aegean basin.",
            el: "Απελπισμένος για στρατιώτες εναντίον των Τούρκων, ο Ανδρόνικος Β΄ προσέλαβε περίπου έξι χιλιάδες βετεράνους του Πολέμου των Σικελιανών Εσπερινών υπό τον Ρότζερ ντε Φλορ. Πέτυχαν εντυπωσιακές αρχικές επιτυχίες στη Μικρά Ασία αλλά ήρθαν σε σύγκρουση με τους αυτοκρατορικούς αξιωματικούς για καθυστερημένες πληρωμές· τον Απρίλιο του 1305 ο συναυτοκράτορας Μιχαήλ Θ΄ διέταξε τη δολοφονία του Ρότζερ στο ανάκτορο της Αδριανούπολης. Οι Καταλανοί πήραν τρομερή εκδίκηση: κήρυξαν πόλεμο στην αυτοκρατορία, ερήμωσαν τη Θράκη και τη Μακεδονία από οχυρωμένη βάση στα Γαλλίπολη επί δύο χρόνια, και κατόπιν προέλασαν νότια διαμέσου της Θεσσαλίας και κατέλαβαν το φραγκικό δουκάτο των Αθηνών στη μάχη του Αλμυρού το 1311. Η 'Καταλανική Εκδίκηση' ερήμωσε τις ευρωπαϊκές επαρχίες ακριβώς όταν λιγότερο μπορούσαν να το αντέξουν και επιτάχυνε την απώλεια αποτελεσματικού ελέγχου στη λεκάνη του Αιγαίου."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1326,
      era: {
        en: "Palaiologan Dynasty",
        el: "Δυναστεία Παλαιολόγων"
      },
      events: [
        {
          title: {
            en: "Fall of Bursa",
            el: "Η πτώση της Βούρσας"
          },
          description: {
            en: "The Ottomans capture Bursa, making it their first capital and establishing a foothold in northwestern Anatolia.",
            el: "Οι Οθωμανοί καταλαμβάνουν τη Βούρσα, κάνοντάς την την πρώτη τους πρωτεύουσα και αποκτώντας ένα προγεφύρωμα στη βορειοδυτική Μικρά Ασία."
          },
          extendedDescription: {
            en: "After a slow, decade-long blockade, Bursa surrendered to Osman's son Orhan, just before Osman's death — Ottoman tradition holds that the news reached the dying founder on his sickbed. Bursa became the dynasty's first true capital, its dead were entombed there, and the city's mosques and tombs would be the focus of Ottoman religious legitimacy for two centuries. The fall destroyed the last serious Byzantine power base in northwestern Asia Minor and left only Nicomedia and Nicaea (which would fall in 1331 and 1337) as Roman strongholds in the region. Within a generation Orhan would be drawing on the manpower of Bursa's hinterland to project Ottoman power into Europe.",
            el: "Μετά από βραδύ, δεκαετή αποκλεισμό, η Προύσα παραδόθηκε στον γιο του Οσμάν, Ορχάν, λίγο πριν τον θάνατο του Οσμάν — η οθωμανική παράδοση θέλει την είδηση να φτάνει στον ετοιμοθάνατο ιδρυτή στο νεκρικό κρεβάτι του. Η Προύσα έγινε η πρώτη πραγματική πρωτεύουσα της δυναστείας, εκεί ενταφιάστηκαν οι νεκροί της, και τα τεμένη και οι τάφοι της πόλης θα αποτελούσαν την εστία της οθωμανικής θρησκευτικής νομιμότητας επί δύο αιώνες. Η πτώση κατέστρεψε την τελευταία σοβαρή βυζαντινή βάση ισχύος στη βορειοδυτική Μικρά Ασία και άφησε μόνο τη Νικομήδεια και τη Νίκαια (που θα έπεφταν το 1331 και το 1337) ως ρωμαϊκά οχυρά στην περιοχή. Μέσα σε μία γενεά ο Ορχάν θα αντλούσε από το ανθρώπινο δυναμικό της ενδοχώρας της Προύσας για να προβάλει την οθωμανική ισχύ στην Ευρώπη."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1341,
      era: {
        en: "Palaiologan Dynasty",
        el: "Δυναστεία Παλαιολόγων"
      },
      events: [
        {
          title: {
            en: "Beginning of the civil war",
            el: "Η αρχή του εμφυλίου πολέμου"
          },
          description: {
            en: "The death of Andronikos III sparks a devastating civil war between John VI Kantakouzenos and the regency of John V Palaiologos.",
            el: "Ο θάνατος του Ανδρονίκου Γ΄ προκαλεί έναν καταστροφικό εμφύλιο πόλεμο ανάμεσα στον Ιωάννη Στ΄ Καντακουζηνό και την αντιβασιλεία του Ιωάννη Ε΄ Παλαιολόγου."
          },
          extendedDescription: {
            en: "John Kantakouzenos, the late emperor's chief minister and most experienced general, expected to assume the regency for the nine-year-old John V. Empress-mother Anna of Savoy, the patriarch John Kalekas, and the parakoimomenos Alexios Apokaukos froze him out instead, denounced him as a usurper, and stripped his estates. Kantakouzenos had himself proclaimed emperor at Didymoteichon and a six-year civil war began that ravaged Thrace and Macedonia and bled the dwindling resources of the empire. Both sides imported Turkish auxiliaries — the Ottomans crossed into Europe in this conflict — and the linked Zealot revolt at Thessalonica added a class war. The settlement of 1347 brought Kantakouzenos to power as senior co-emperor, but the empire was now at the mercy of the Ottoman ally he had introduced.",
            el: "Ο Ιωάννης Καντακουζηνός, πρωθυπουργός του εκλιπόντος αυτοκράτορα και ο πιο έμπειρος στρατηγός, ανέμενε να αναλάβει την αντιβασιλεία του εννιάχρονου Ιωάννη Ε΄. Η αυτοκράτειρα-μήτηρ Άννα της Σαβοΐας, ο πατριάρχης Ιωάννης Καλέκας και ο παρακοιμώμενος Αλέξιος Απόκαυκος τον απέκλεισαν αντιθέτως, τον κατηγόρησαν ως σφετεριστή και του δήμευσαν τα κτήματα. Ο Καντακουζηνός ανακηρύχθηκε αυτοκράτορας στο Διδυμότειχο και άρχισε εξαετής εμφύλιος πόλεμος που ερήμωσε τη Θράκη και τη Μακεδονία και αιμορράγησε τους φθίνοντες πόρους της αυτοκρατορίας. Και οι δύο πλευρές εισήγαγαν τουρκικά επικουρικά σώματα — οι Οθωμανοί διαβίβασαν στην Ευρώπη σε αυτή τη σύγκρουση — και η συναφής εξέγερση των Ζηλωτών στη Θεσσαλονίκη πρόσθεσε ταξικό πόλεμο. Η ρύθμιση του 1347 έφερε τον Καντακουζηνό στην εξουσία ως πρεσβύτερο συναυτοκράτορα, αλλά η αυτοκρατορία βρισκόταν πλέον στο έλεος του οθωμανού συμμάχου που εκείνος είχε εισαγάγει."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1354,
      era: {
        en: "Palaiologan Dynasty",
        el: "Δυναστεία Παλαιολόγων"
      },
      events: [
        {
          title: {
            en: "Ottomans cross into Europe",
            el: "Οι Οθωμανοί διαβαίνουν στην Ευρώπη"
          },
          description: {
            en: "The earthquake at Gallipoli allows the Ottomans to seize their first European foothold; the noose begins to tighten around the capital.",
            el: "Ο σεισμός στην Καλλίπολη επιτρέπει στους Οθωμανούς να καταλάβουν το πρώτο τους ευρωπαϊκό προγεφύρωμα· ο βρόχος αρχίζει να σφίγγεται γύρω από την πρωτεύουσα."
          },
          extendedDescription: {
            en: "Süleyman, son of the Ottoman sultan Orhan and son-in-law of John VI Kantakouzenos, had been crossing into Thrace as an imperial ally. On 2 March 1354 a major earthquake destroyed the walls of Gallipoli; Süleyman seized the town the following day, planted a permanent garrison, and refused all imperial demands to withdraw. Greek contemporaries saw the timing as providential — but for the Turks, who treated their occupation of the Hellespont peninsula as a divine sign of their European destiny. Within thirty years the Ottomans had taken Adrianople and made it their European capital, and within a century the city's walls would be the only Roman territory left around Constantinople. Kantakouzenos, blamed for inviting the Turks in, abdicated in disgrace later in 1354.",
            el: "Ο Σουλεϊμάν, γιος του Οθωμανού σουλτάνου Ορχάν και γαμβρός του Ιωάννη Στ΄ Καντακουζηνού, είχε διαβαίνει στη Θράκη ως αυτοκρατορικός σύμμαχος. Στις 2 Μαρτίου 1354 μεγάλος σεισμός κατέστρεψε τα τείχη της Καλλίπολης· ο Σουλεϊμάν κατέλαβε την πόλη την επόμενη ημέρα, εγκατέστησε μόνιμη φρουρά και αρνήθηκε κάθε αυτοκρατορική απαίτηση αποχώρησης. Οι σύγχρονοι Έλληνες είδαν τη συγκυρία ως πρόνοια — αλλά υπέρ των Τούρκων, που αντιμετώπισαν την κατάληψη της χερσονήσου του Ελλησπόντου ως θεϊκό σημάδι του ευρωπαϊκού πεπρωμένου τους. Μέσα σε τριάντα χρόνια οι Οθωμανοί είχαν καταλάβει την Αδριανούπολη και την είχαν κάνει ευρωπαϊκή πρωτεύουσά τους, και μέσα σε έναν αιώνα τα τείχη της πόλης θα ήταν το μόνο ρωμαϊκό έδαφος γύρω από την Κωνσταντινούπολη. Ο Καντακουζηνός, κατηγορούμενος ότι κάλεσε τους Τούρκους, παραιτήθηκε με ντροπή αργότερα το 1354."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1396,
      era: {
        en: "Palaiologan Dynasty",
        el: "Δυναστεία Παλαιολόγων"
      },
      events: [
        {
          title: {
            en: "Battle of Nicopolis",
            el: "Η μάχη της Νικοπόλης"
          },
          description: {
            en: "A Crusader army led by Sigismund of Hungary is annihilated by Bayezid I, ending hopes of relieving Byzantine pressure.",
            el: "Ένα σταυροφορικό στρατό υπό τον Σίγισμουνδο της Ουγγαρίας εξολοθρεύεται από τον Μπαγιαζήτ Α΄, τερματίζοντας τις ελπίδες ανακούφισης της βυζαντινής πίεσης."
          },
          extendedDescription: {
            en: "Pressed by Bayezid's blockade of Constantinople, the empire and the papacy persuaded Sigismund of Hungary to mount a great anti-Ottoman crusade. Some sixteen thousand Hungarians, French Burgundian knights, Wallachians, and Hospitallers besieged Nicopolis on the Danube. Bayezid lifted the siege of Constantinople and arrived faster than expected. The French knights, refusing to be advised by Sigismund, charged uphill, broke the Ottoman front line, and were enveloped and slaughtered when the Sultan's reserves came up. Sigismund escaped by ship down the Danube; thousands of prisoners were executed. Nicopolis was the last serious Western attempt to relieve Byzantine pressure for half a century, and its failure left Constantinople essentially alone.",
            el: "Πιεσμένος από τον αποκλεισμό της Κωνσταντινούπολης από τον Βαγιαζήτ, η αυτοκρατορία και ο πάπας έπεισαν τον Σιγισμούνδο της Ουγγαρίας να οργανώσει μεγάλη αντι-οθωμανική σταυροφορία. Περίπου δεκαέξι χιλιάδες Ούγγροι, Γάλλοι βουργουνδοί ιππότες, Βλάχοι και Ιωαννίτες πολιόρκησαν τη Νικόπολη στον Δούναβη. Ο Βαγιαζήτ έλυσε την πολιορκία της Κωνσταντινούπολης και έφτασε ταχύτερα από το αναμενόμενο. Οι Γάλλοι ιππότες, αρνούμενοι να συμβουλευτούν τον Σιγισμούνδο, επιτέθηκαν ανηφορικά, διέρρηξαν την πρώτη γραμμή των Οθωμανών και περικυκλώθηκαν και κατασφάγησαν όταν έφθασαν οι εφεδρείες του σουλτάνου. Ο Σιγισμούνδος διέφυγε με πλοίο κατά τον Δούναβη· χιλιάδες αιχμάλωτοι εκτελέστηκαν. Η Νικόπολη ήταν η τελευταία σοβαρή δυτική απόπειρα ανακούφισης της βυζαντινής πίεσης για μισό αιώνα, και η αποτυχία της άφησε την Κωνσταντινούπολη ουσιαστικά μόνη."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1422,
      era: {
        en: "Palaiologan Dynasty",
        el: "Δυναστεία Παλαιολόγων"
      },
      events: [
        {
          title: {
            en: "First Ottoman siege of Constantinople",
            el: "Η πρώτη οθωμανική πολιορκία της Κωνσταντινούπολης"
          },
          description: {
            en: "Murad II besieges Constantinople but withdraws after the appearance of the legendary 'Last Emperor' prophecy.",
            el: "Ο Μουράτ Β΄ πολιορκεί την Κωνσταντινούπολη αλλά αποχωρεί μετά την εμφάνιση της θρυλικής προφητείας του «Τελευταίου Αυτοκράτορα»."
          },
          extendedDescription: {
            en: "After the death of Mehmed I, the empire backed his rebel uncle Mustafa as a pretender, prompting the new sultan Murad II to lay siege to the capital from June to September 1422 — the first sustained Ottoman attempt at Constantinople since 1411. Murad assembled siege engines and made a major assault on 24 August, repulsed at heavy cost. Greek tradition attributed the deliverance to a vision of the Theotokos seen on the walls; the practical reasons were the simultaneous revolt of Murad's brother Mustafa Çelebi in Anatolia, which forced him to lift the siege. The episode showed that the Theodosian walls could still defend the city against a fifteenth-century army; the lesson was not lost on Murad's son Mehmed II, who would invest in cannon when he tried again.",
            el: "Μετά τον θάνατο του Μεχμέτ Α΄, η αυτοκρατορία υποστήριξε τον επαναστάτη θείο του Μουσταφά ως διεκδικητή, παρακινώντας τον νέο σουλτάνο Μουράτ Β΄ να πολιορκήσει την πρωτεύουσα από τον Ιούνιο ως τον Σεπτέμβριο του 1422 — την πρώτη συνεχή οθωμανική απόπειρα κατά της Κωνσταντινούπολης από το 1411. Ο Μουράτ συγκέντρωσε πολιορκητικές μηχανές και πραγματοποίησε σημαντική επίθεση στις 24 Αυγούστου, που αποκρούστηκε με βαρύ κόστος. Η ελληνική παράδοση απέδωσε τη σωτηρία σε όραμα της Θεοτόκου που εμφανίστηκε στα τείχη· οι πρακτικοί λόγοι ήταν η σύγχρονη εξέγερση του αδελφού του Μουράτ, Μουσταφά Τσελεμπή, στη Μικρά Ασία, που τον ανάγκασε να λύσει την πολιορκία. Το επεισόδιο έδειξε ότι τα Θεοδοσιανά τείχη μπορούσαν ακόμη να υπερασπίσουν την πόλη απέναντι σε στρατό του δέκατου πέμπτου αιώνα· το δίδαγμα δεν διέφυγε του γιου του Μουράτ, Μεχμέτ Β΄, ο οποίος θα επένδυε σε κανόνια όταν θα ξαναπροσπαθούσε."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1439,
      era: {
        en: "Palaiologan Dynasty",
        el: "Δυναστεία Παλαιολόγων"
      },
      events: [
        {
          title: {
            en: "Council of Florence",
            el: "Η Σύνοδος της Φλωρεντίας"
          },
          description: {
            en: "Emperor John VIII agrees to a union of Churches in exchange for Western aid. The union is bitterly rejected by most of the Orthodox faithful.",
            el: "Ο αυτοκράτορας Ιωάννης Η΄ συμφωνεί σε ένωση των Εκκλησιών με αντάλλαγμα δυτική βοήθεια. Η ένωση απορρίπτεται πικρά από τους περισσότερους Ορθόδοξους πιστούς."
          },
          extendedDescription: {
            en: "Faced with imminent Ottoman conquest, John VIII led a Byzantine delegation including the patriarch Joseph II and the elderly philosopher Plethon to a council in Italy that, after long debates, accepted Latin theology on the Filioque, purgatory, papal primacy, and the Eucharistic bread. The bull Laetentur Caeli of 6 July 1439 proclaimed reunion. Nearly all the Greek signatories — except Mark Eugenikos of Ephesos, who refused — repudiated their signatures on returning home; the Constantinopolitan populace's slogan was 'Better the Sultan's turban than the cardinal's hat.' Western military aid duly arrived in 1444, but was destroyed at the Battle of Varna. The union remained an unhealed wound and would be formally annulled by an Orthodox synod in 1484, after the empire's fall.",
            el: "Αντιμέτωπος με επικείμενη οθωμανική κατάκτηση, ο Ιωάννης Η΄ οδήγησε βυζαντινή αντιπροσωπεία, συμπεριλαμβανομένων του πατριάρχη Ιωσήφ Β΄ και του γηραιού φιλοσόφου Πλήθωνα, σε σύνοδο στην Ιταλία η οποία, μετά από μακρές συζητήσεις, αποδέχθηκε τη λατινική θεολογία περί του Filioque, του καθαρτηρίου, του παπικού πρωτείου και του ευχαριστιακού άρτου. Η βούλλα Laetentur Caeli της 6ης Ιουλίου 1439 ανακήρυξε την ένωση. Σχεδόν όλοι οι Έλληνες υπογράφοντες — εκτός του Μάρκου Ευγενικού της Εφέσου, που αρνήθηκε — απαρνήθηκαν τις υπογραφές τους επιστρέφοντας στην πατρίδα· το σύνθημα του πληθυσμού της Κωνσταντινούπολης ήταν 'Καλύτερα του Σουλτάνου το σαρίκι παρά του καρδιναλίου το καπέλο'. Δυτική στρατιωτική βοήθεια έφτασε δεόντως το 1444, αλλά καταστράφηκε στη μάχη της Βάρνας. Η ένωση παρέμεινε αθεράπευτη πληγή και θα ακυρωνόταν επίσημα από ορθόδοξη σύνοδο το 1484, μετά την πτώση της αυτοκρατορίας."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1453,
      era: {
        en: "End of Empire",
        el: "Τέλος της Αυτοκρατορίας"
      },
      events: [
        {
          title: {
            en: "Fall of Constantinople",
            el: "Η άλωση της Κωνσταντινούπολης"
          },
          description: {
            en: "On 29 May, after a 53-day siege, Sultan Mehmed II breaches the Theodosian Walls. Emperor Constantine XI dies in the final assault. The Roman Empire, after 1,123 years, comes to an end.",
            el: "Στις 29 Μαΐου, μετά από 53 ημέρες πολιορκίας, ο σουλτάνος Μεχμέτ Β΄ διαρρηγνύει τα Θεοδοσιανά τείχη. Ο αυτοκράτορας Κωνσταντίνος ΙΑ΄ πεθαίνει στην τελική επίθεση. Η Ρωμαϊκή Αυτοκρατορία, μετά από 1.123 χρόνια, έρχεται στο τέλος της."
          },
          extendedDescription: {
            en: "Mehmed II had assembled some 80,000 men, an Ottoman fleet, and the great bombards cast by the Hungarian engineer Orban — one of which fired stone balls weighing half a ton. Constantine XI defended with about 7,000 soldiers, including the Genoese contingent of Giovanni Giustiniani Longo, behind walls a thousand years old that had withstood every previous assault. After fifty-three days of bombardment, mining, and assaults, the Ottomans broke in through the Kerkoporta postern — left ajar by accident or treachery — at dawn on 29 May. Constantine, last of the Romans, threw off his imperial regalia and died fighting in the breach. Mehmed entered Hagia Sophia at noon, took the title Kayser-i Rum (Caesar of Rome), and made the city his capital as Konstantiniyye. The eleven-century Roman Empire was over.",
            el: "Ο Μεχμέτ Β΄ είχε συγκεντρώσει περίπου 80.000 άνδρες, οθωμανικό στόλο και τα μεγάλα κανόνια που είχε χυτεύσει ο Ούγγρος μηχανικός Ορμπάν — ένα από τα οποία εκσφενδόνιζε λίθινες σφαίρες βάρους μισού τόνου. Ο Κωνσταντίνος ΙΑ΄ άμυνε με περίπου 7.000 στρατιώτες, συμπεριλαμβανομένου του γενουατικού τμήματος του Τζοβάννι Τζιουστινιάνι Λόνγκο, πίσω από τείχη χιλίων ετών που είχαν αντέξει σε κάθε προηγούμενη επίθεση. Μετά από πενήντα τρεις ημέρες κανονιοβολισμών, υπονόμευσης και επιθέσεων, οι Οθωμανοί εισέβαλαν από την παραπύλη της Κερκόπορτας — αφημένης ανοιχτής από παράβλεψη ή προδοσία — την αυγή της 29ης Μαΐου. Ο Κωνσταντίνος, ο τελευταίος των Ρωμαίων, πέταξε τα αυτοκρατορικά διάσημα και πέθανε μαχόμενος στη ρωγμή. Ο Μεχμέτ εισήλθε στην Αγία Σοφία το μεσημέρι, έλαβε τον τίτλο Kayser-i Rum (Καίσαρ της Ρώμης) και έκανε την πόλη πρωτεύουσά του ως Κωνσταντινίγιε. Η ρωμαϊκή αυτοκρατορία των έντεκα αιώνων είχε τελειώσει."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Zonaro_GatesofConst.jpg?width=1024",
            alt: {
              en: "Mehmed II entering Constantinople, painting by Fausto Zonaro",
              el: "Ο Μεχμέτ Β΄ εισέρχεται στην Κωνσταντινούπολη, ζωγραφική του Φάουστο Ζονάρο"
            },
            credit: "Fausto Zonaro, via Wikimedia Commons (public domain)"
          }
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
