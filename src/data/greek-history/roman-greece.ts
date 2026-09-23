/** Roman Greece — Ρωμαϊκή Ελλάδα · Greek History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const ROMAN_GREECE = {
  id: "roman-greece" as const,
  label: {
    en: "Roman Greece",
    el: "Ρωμαϊκή Ελλάδα"
  },
  supertitle: {
    en: "Provincia Achaea",
    el: "Επαρχία Αχαΐας"
  },
  title: {
    en: "Roman Greece",
    el: "Η Ρωμαϊκή Ελλάδα"
  },
  subtitle: {
    en: "From the Augustan settlement and the founding of the province of Achaea to the dedication of Constantinople — three and a half centuries during which the Greek world, governed by Roman law and gilded by emperors like Hadrian, became the intellectual heart of the empire. Slide across the centuries to read the major events of Greece under Rome.",
    el: "Από την Αυγούστεια διευθέτηση και την ίδρυση της επαρχίας της Αχαΐας έως τα εγκαίνια της Κωνσταντινουπόλεως — τρεισήμισι αιώνες κατά τους οποίους ο ελληνικός κόσμος, υπό ρωμαϊκό δίκαιο και υπό την προστασία αυτοκρατόρων όπως ο Αδριανός, έγινε η πνευματική καρδιά της αυτοκρατορίας. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα σημαντικότερα γεγονότα της Ελλάδας υπό τη Ρώμη."
  },
  menuDescription: {
    en: "Greece as a Roman province, from Augustus and Hadrian to the eve of Constantinople.",
    el: "Η Ελλάδα ως ρωμαϊκή επαρχία, από τον Αύγουστο και τον Αδριανό ως τις παραμονές της Κωνσταντινούπολης."
  },
  footerLabel: {
    en: "Roman Greece · 27 BC-324 AD",
    el: "Ρωμαϊκή Ελλάδα · 27 π.Χ.-324 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Roman Greece",
    el: "Ρωμαϊκή Ελλάδα"
  },
  theme: THEMES.ruby,
  timeline: [
    {
      year: -27,
      era: {
        en: "Augustan Settlement",
        el: "Αυγούστεια Τάξη"
      },
      events: [
        {
          title: {
            en: "Province of Achaea Established",
            el: "Ίδρυση της Επαρχίας της Αχαΐας"
          },
          description: {
            en: "Augustus reorganises the Greek mainland, detaching it from Macedonia and creating the senatorial province of Achaea with its capital at Corinth.",
            el: "Ο Αύγουστος αναδιοργανώνει την ηπειρωτική Ελλάδα, αποσπώντας την από τη Μακεδονία και ιδρύοντας τη συγκλητική επαρχία της Αχαΐας με πρωτεύουσα την Κόρινθο."
          },
          extendedDescription: {
            en: "In the great provincial settlement of 27 BC, Augustus divided the empire between himself and the Senate. Achaea — encompassing the Peloponnese, Attica, Boeotia, Phocis, Epirus south of the Acroceraunian range, and most of the Aegean islands — was assigned to the Senate and governed by an annual proconsul of praetorian rank. The capital was placed at Roman Corinth, refounded as Colonia Laus Iulia Corinthiensis by Julius Caesar in 44 BC. Athens, Sparta, Delphi and a handful of other cities retained the formal status of free or federated communities, but real power lay with the governor and with the great civic notables whose wealth Rome cultivated. The settlement gave the long-fought-over Greek world its most durable political framework since Alexander.",
            el: "Στη μεγάλη αναδιοργάνωση των επαρχιών του 27 π.Χ., ο Αύγουστος μοίρασε την αυτοκρατορία μεταξύ εαυτού και της Συγκλήτου. Η Αχαΐα — που περιλάμβανε την Πελοπόννησο, την Αττική, τη Βοιωτία, τη Φωκίδα, την Ήπειρο νοτίως των Ακροκεραυνίων και τα περισσότερα νησιά του Αιγαίου — δόθηκε στη Σύγκλητο και διοικήθηκε από ετήσιο ανθύπατο πραιτορικού βαθμού. Πρωτεύουσα ορίστηκε η ρωμαϊκή Κόρινθος, η οποία είχε επανιδρυθεί ως Colonia Laus Iulia Corinthiensis από τον Ιούλιο Καίσαρα το 44 π.Χ. Η Αθήνα, η Σπάρτη, οι Δελφοί και λίγες άλλες πόλεις διατήρησαν τον τυπικό χαρακτηρισμό ελεύθερων ή ομόσπονδων κοινοτήτων, αλλά η πραγματική εξουσία βρισκόταν στα χέρια του διοικητή και των μεγάλων αστών ευεργετών των οποίων τον πλούτο η Ρώμη καλλιεργούσε. Η νέα τάξη χάρισε στον πολυκύμαντο ελληνικό κόσμο το μακροβιότερο πολιτικό πλαίσιο μετά τον Αλέξανδρο."
          },
          category: "political"
        }
      ]
    },
    {
      year: -21,
      era: {
        en: "Augustan Settlement",
        el: "Αυγούστεια Τάξη"
      },
      events: [
        {
          title: {
            en: "Augustus at Athens and Sparta",
            el: "Ο Αύγουστος στην Αθήνα και τη Σπάρτη"
          },
          description: {
            en: "Augustus winters in Greece, confirming privileges for Sparta and curtailing those of Athens after the city had sided with Antony.",
            el: "Ο Αύγουστος ξεχειμωνιάζει στην Ελλάδα, επιβεβαιώνοντας τα προνόμια της Σπάρτης και περιορίζοντας εκείνα της Αθήνας, η οποία είχε ταχθεί με τον Αντώνιο."
          },
          extendedDescription: {
            en: "Returning eastward to settle the affairs of the Greek provinces, Augustus visited Athens during the winter of 21-20 BC. He rewarded Eurycles of Sparta, who had fought beside him at Actium, with effective rule of Laconia, and reaffirmed Spartan control of the Messenian seaboard. Athens fared less well: the city lost the islands of Aegina and Eretria, and the right to sell its citizenship was withdrawn. The emperor's reception in Greece was nevertheless lavish, and from this visit dates the long Augustan building programme on the Athenian Acropolis, including the small round temple of Roma and Augustus set just east of the Parthenon.",
            el: "Επιστρέφοντας ανατολικά για να ρυθμίσει τις υποθέσεις των ελληνικών επαρχιών, ο Αύγουστος επισκέφθηκε την Αθήνα τον χειμώνα του 21-20 π.Χ. Αντάμειψε τον Ευρυκλή τον Λακεδαιμόνιο, ο οποίος είχε πολεμήσει στο πλευρό του στο Άκτιο, παραχωρώντας του ουσιαστική εξουσία στη Λακωνία, και επιβεβαίωσε τον σπαρτιατικό έλεγχο στη μεσσηνιακή ακτή. Η Αθήνα δεν τα πήγε εξίσου καλά: έχασε την Αίγινα και την Ερέτρια, ενώ της αφαιρέθηκε το δικαίωμα πωλήσεως της ιδιότητας του πολίτη. Η υποδοχή του αυτοκράτορα στην Ελλάδα ήταν παρά ταύτα μεγαλοπρεπής, και από την επίσκεψη αυτή χρονολογείται το μακρύ αυγούστειο οικοδομικό πρόγραμμα στην αθηναϊκή Ακρόπολη, περιλαμβανομένου του μικρού κυκλικού ναού της Ρώμης και του Αυγούστου, ανατολικώς του Παρθενώνος."
          },
          category: "political"
        }
      ]
    },
    {
      year: 15,
      era: {
        en: "Julio-Claudian Greece",
        el: "Ιουλιοκλαυδιανή Ελλάδα"
      },
      events: [
        {
          title: {
            en: "Achaea Transferred to Imperial Administration",
            el: "Η Αχαΐα Μεταφέρεται στην Αυτοκρατορική Διοίκηση"
          },
          description: {
            en: "Tiberius removes Achaea and Macedonia from the Senate and unites them under an imperial legate at Moesia, citing the burden of provincial taxation.",
            el: "Ο Τιβέριος αφαιρεί την Αχαΐα και τη Μακεδονία από τη Σύγκλητο και τις ενοποιεί υπό αυτοκρατορικό λεγάτο στη Μοισία, επικαλούμενος το βάρος των επαρχιακών φόρων."
          },
          extendedDescription: {
            en: "Tacitus records that delegations from Achaea and Macedonia appealed to Tiberius for relief from the costs of supporting senatorial proconsuls; the emperor responded by detaching both provinces from the Senate and transferring them to the imperial legate of Moesia. The arrangement, which lasted until Claudius restored senatorial Achaea in AD 44, signalled the practical limits of the Augustan division: when economic distress threatened, the princeps assumed direct responsibility. For provincial Greeks, the consolidation also meant fewer governors to entertain and bribe, and a single chain of command stretching from the Danube to the Peloponnese.",
            el: "Ο Τάκιτος μνημονεύει ότι πρεσβείες από την Αχαΐα και τη Μακεδονία ζήτησαν από τον Τιβέριο ανακούφιση από τα έξοδα συντηρήσεως των συγκλητικών ανθυπάτων· ο αυτοκράτορας απάντησε αποσπώντας και τις δύο επαρχίες από τη Σύγκλητο και μεταφέροντάς τες στον αυτοκρατορικό λεγάτο της Μοισίας. Η ρύθμιση, η οποία διήρκεσε ώσπου ο Κλαύδιος αποκατέστησε τη συγκλητική Αχαΐα το 44 μ.Χ., φανέρωσε τα πρακτικά όρια της αυγούστειας διαιρέσεως: όταν απειλούσε οικονομική δυσπραγία, ο πρίγκιπας αναλάμβανε άμεση ευθύνη. Για τους επαρχιακούς Έλληνες, η συγκέντρωση σήμαινε επίσης λιγότερους διοικητές προς φιλοξενία και εξαγορά, και μία ενιαία ιεραρχία διοικήσεως που εκτεινόταν από τον Δούναβη ώς την Πελοπόννησο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 49,
      era: {
        en: "Pax Romana",
        el: "Pax Romana"
      },
      events: [
        {
          title: {
            en: "Paul Preaches at the Areopagus",
            el: "Ο Παύλος Κηρύσσει στον Άρειο Πάγο"
          },
          description: {
            en: "Paul of Tarsus delivers his famous speech 'to the Unknown God' in Athens, marking the first attested encounter between Greek philosophy and the Christian gospel.",
            el: "Ο Παύλος ο Ταρσεύς εκφωνεί τη διάσημη ομιλία του προς τον 'Αγνώστω Θεώ' στην Αθήνα, σηματοδοτώντας την πρώτη μαρτυρημένη συνάντηση ελληνικής φιλοσοφίας και χριστιανικού ευαγγελίου."
          },
          extendedDescription: {
            en: "According to the Acts of the Apostles, Paul, having fled persecution in Macedonia, came to Athens and found the city 'full of idols'. Disputing in the agora with Epicurean and Stoic philosophers, he was led up to the Areopagus, where he addressed his audience by citing an Athenian altar inscribed 'To an Unknown God'. The God of Israel, he argued, was that same unnamed deity, the maker of all nations who 'is not far from each one of us'. The speech, the most carefully Hellenised in the New Testament, persuaded only a handful — including Dionysius the Areopagite, later venerated as Athens' first bishop — but it established the city as a touchstone for every later attempt to reconcile Greek thought with Christian revelation.",
            el: "Σύμφωνα με τις Πράξεις των Αποστόλων, ο Παύλος, έχοντας διαφύγει διωγμό στη Μακεδονία, ήλθε στην Αθήνα και βρήκε την πόλη 'κατείδωλον'. Συζητώντας στην αγορά με Επικούρειους και Στωικούς φιλοσόφους, οδηγήθηκε στον Άρειο Πάγο, όπου απευθύνθηκε στο ακροατήριό του παραπέμποντας σε αθηναϊκό βωμό με την επιγραφή 'Αγνώστω Θεώ'. Ο Θεός του Ισραήλ, υποστήριξε, ήταν αυτή ακριβώς η ανώνυμη θεότητα, ο δημιουργός όλων των εθνών, που 'ου μακράν από ενός εκάστου ημών υπάρχοντα'. Η ομιλία, η πλέον προσεκτικά εξελληνισμένη της Καινής Διαθήκης, έπεισε μόνον ελαχίστους — μεταξύ των οποίων τον Διονύσιο τον Αρεοπαγίτη, μετέπειτα τιμώμενο ως πρώτο επίσκοπο των Αθηνών — αλλά εγκαθίδρυσε την πόλη ως σημείο αναφοράς για κάθε μετέπειτα προσπάθεια συμφιλιώσεως ελληνικής σκέψης και χριστιανικής αποκαλύψεως."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/V%26A_-_Raphael%2C_St_Paul_Preaching_in_Athens_(1515).jpg?width=1024",
            alt: {
              en: "Raphael's tapestry cartoon of Saint Paul preaching in Athens (1515), Victoria and Albert Museum",
              el: "Το σχέδιο ταπισερί του Ραφαήλ με τον Απόστολο Παύλο να κηρύσσει στην Αθήνα (1515), Μουσείο Βικτώριας και Αλβέρτου"
            },
            credit: "Raphael, Royal Collection, via Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 51,
      era: {
        en: "Pax Romana",
        el: "Pax Romana"
      },
      events: [
        {
          title: {
            en: "Paul Before Gallio at Corinth",
            el: "Ο Παύλος Ενώπιον του Γαλλίωνα στην Κόρινθο"
          },
          description: {
            en: "The Jewish community of Corinth accuses Paul before the proconsul Gallio, who dismisses the case — a hearing that provides the firmest date in the apostle's career.",
            el: "Η ιουδαϊκή κοινότητα της Κορίνθου κατηγορεί τον Παύλο ενώπιον του ανθυπάτου Γαλλίωνα, ο οποίος απορρίπτει την υπόθεση — ακρόαση που παρέχει την ασφαλέστερη χρονολόγηση στη σταδιοδρομία του αποστόλου."
          },
          extendedDescription: {
            en: "Lucius Junius Gallio Annaeanus, elder brother of the philosopher Seneca, governed Achaea in AD 51-52, as fixed by an inscription from Delphi quoting an imperial rescript of Claudius. During his proconsulship he was called upon to judge a complaint that Paul was 'persuading men to worship God in a manner contrary to the law'. Gallio, declining to adjudicate questions 'about words and names and your own law', drove the accusers from the tribunal. The episode, preserved in Acts 18, gives modern historians the one securely datable anchor in Paul's chronology, and reveals the working etiquette of Roman governance: religious disputes within a tolerated community were a matter for the community itself, not for the state.",
            el: "Ο Λούκιος Ιούνιος Γαλλίων Αννεάνος, μεγαλύτερος αδελφός του φιλοσόφου Σενέκα, διοίκησε την Αχαΐα το 51-52 μ.Χ., όπως ορίζει επιγραφή από τους Δελφούς που παραθέτει αυτοκρατορικό ρεσκρίπτο του Κλαυδίου. Κατά την ανθυπατεία του κλήθηκε να κρίνει καταγγελία ότι ο Παύλος 'αναπείθει τους ανθρώπους σέβεσθαι τον Θεόν παρά τον νόμον'. Ο Γαλλίων, αρνούμενος να αποφανθεί επί ζητημάτων 'λόγου και ονομάτων και νόμου του καθ' υμάς', εξεδίωξε τους κατηγόρους από το βήμα. Το επεισόδιο, σωζόμενο στις Πράξεις 18, παρέχει στους σύγχρονους ιστορικούς το μοναδικό ασφαλώς χρονολογήσιμο σημείο στη χρονολογία του Παύλου, και αποκαλύπτει την πρακτική του ρωμαϊκού τρόπου διακυβερνήσεως: οι θρησκευτικές διαμάχες εντός ανεκτής κοινότητος ήταν υπόθεσις της ίδιας της κοινότητος και όχι του κράτους."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 67,
      era: {
        en: "Julio-Claudian Greece",
        el: "Ιουλιοκλαυδιανή Ελλάδα"
      },
      events: [
        {
          title: {
            en: "Nero Proclaims the Freedom of the Greeks",
            el: "Ο Νέρων Κηρύσσει την Ελευθερία των Ελλήνων"
          },
          description: {
            en: "Standing before a vast crowd at the Isthmus of Corinth, the emperor Nero declares all Greece free of taxation and tribute in gratitude for its welcome of his artistic tour.",
            el: "Ενώπιον τεράστιου πλήθους στον Ισθμό της Κορίνθου, ο αυτοκράτορας Νέρων κηρύσσει όλη την Ελλάδα ελεύθερη από φορολογία και φόρους υποτελείας ως ευγνωμοσύνη για την υποδοχή της καλλιτεχνικής περιοδείας του."
          },
          extendedDescription: {
            en: "Nero crossed to Greece in the autumn of 66 to compete in person at the four crown games — Olympia, Delphi, Nemea and Isthmia — which were obligingly rescheduled to fall within his single visit. At the end of his tour, on 28 November 67 by the Julian calendar, the emperor mounted a platform at the Isthmus during the Isthmian Games and delivered, in Greek, a proclamation modelled on that of Flamininus 263 years earlier: Achaea was relieved of tribute and restored to liberty. The grant, preserved on an inscription from Akraiphia in Boeotia, was largely symbolic — Greek cities had paid little direct tax for generations — but it was hailed across the province with a wave of honours, statues and renamed festivals. Vespasian quietly rescinded the privilege a few years later, observing that the Greeks 'had forgotten how to be free'.",
            el: "Ο Νέρων διέβη στην Ελλάδα το φθινόπωρο του 66 για να αγωνιστεί ο ίδιος στους τέσσερις στεφανίτες αγώνες — Ολυμπία, Δελφούς, Νεμέα και Ισθμό — οι οποίοι ευδοκίμως ανασυντάχθηκαν ώστε να συμπέσουν με τη μοναδική επίσκεψή του. Στο τέλος της περιοδείας του, στις 28 Νοεμβρίου 67 κατά το ιουλιανό ημερολόγιο, ο αυτοκράτορας ανέβηκε σε βήμα στον Ισθμό κατά τη διάρκεια των Ισθμίων και εκφώνησε, στα ελληνικά, διακήρυξη πρότυπη της του Φλαμινίνου 263 χρόνια νωρίτερα: η Αχαΐα απαλλασσόταν φόρου και αποκαθίστατο στην ελευθερία. Η χορηγία, σωζόμενη σε επιγραφή από τις Ακραιφίες της Βοιωτίας, ήταν σε μεγάλο βαθμό συμβολική — οι ελληνικές πόλεις είχαν πληρώσει ελάχιστο άμεσο φόρο επί γενεές — έγινε όμως δεκτή σε όλη την επαρχία με κύμα τιμών, αγαλμάτων και μετονομασιών εορτών. Ο Βεσπασιανός σιωπηρά ανακάλεσε το προνόμιο λίγα χρόνια αργότερα, παρατηρώντας ότι οι Έλληνες 'είχαν ξεχάσει να είναι ελεύθεροι'."
          },
          category: "political"
        }
      ]
    },
    {
      year: 124,
      era: {
        en: "Age of Hadrian",
        el: "Εποχή του Αδριανού"
      },
      events: [
        {
          title: {
            en: "Hadrian's First Visit to Athens",
            el: "Η Πρώτη Επίσκεψη του Αδριανού στην Αθήνα"
          },
          description: {
            en: "The philhellene emperor Hadrian winters in Athens, is initiated into the Eleusinian Mysteries, and begins a building programme that will transform the city.",
            el: "Ο φιλέλληνας αυτοκράτορας Αδριανός ξεχειμωνιάζει στην Αθήνα, μυείται στα Ελευσίνια Μυστήρια και ξεκινά οικοδομικό πρόγραμμα που θα μεταμορφώσει την πόλη."
          },
          extendedDescription: {
            en: "Of all Roman emperors, Hadrian was the most thoroughly Greek by inclination — bearded in the Greek manner, fluent in the language, and a lover of its arts. He arrived in Athens in the autumn of 124, took initiation at Eleusis at the rank of mystes, and announced new privileges and a new code of laws for the city. Building works begun under his patronage included the completion of the colossal temple of Olympian Zeus (Olympieion), abandoned since the time of the Peisistratids; the Library of Hadrian north of the agora; a new aqueduct running from Mount Parnes; and an entirely new district east of the old walls — 'Hadrianopolis', the City of Hadrian — separated from the classical core by the surviving Arch of Hadrian. The visit inaugurated a half-century in which Athens became, alongside Rome and Alexandria, one of the genuine capitals of empire.",
            el: "Από όλους τους Ρωμαίους αυτοκράτορες, ο Αδριανός ήταν ο πιο εξελληνισμένος κατά τη διάθεση — γενειοφόρος καθ' ελληνικόν τρόπον, ευφραδής στη γλώσσα, και εραστής των τεχνών της. Έφθασε στην Αθήνα το φθινόπωρο του 124, μυήθηκε στην Ελευσίνα στον βαθμό του μύστου και ανήγγειλε νέα προνόμια και νέο κώδικα νόμων για την πόλη. Τα οικοδομήματα που ξεκίνησαν υπό τη χορηγία του περιλάμβαναν την αποπεράτωση του κολοσσιαίου ναού του Ολυμπίου Διός, ο οποίος είχε εγκαταλειφθεί από την εποχή των Πεισιστρατιδών· τη Βιβλιοθήκη του Αδριανού βόρεια της αγοράς· νέο υδραγωγείο από την Πάρνηθα· και ολόκληρη νέα συνοικία ανατολικά των παλαιών τειχών — την 'Αδριανούπολη', την Πόλη του Αδριανού — που χωριζόταν από τον κλασικό πυρήνα με την σωζόμενη Πύλη του Αδριανού. Η επίσκεψη εγκαινίασε μισό αιώνα κατά τον οποίο η Αθήνα κατέστη, μαζί με τη Ρώμη και την Αλεξάνδρεια, μία από τις πραγματικές πρωτεύουσες της αυτοκρατορίας."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 131,
      era: {
        en: "Age of Hadrian",
        el: "Εποχή του Αδριανού"
      },
      events: [
        {
          title: {
            en: "Dedication of the Olympieion and Foundation of the Panhellenion",
            el: "Εγκαίνια του Ολυμπιείου και Ίδρυση του Πανελληνίου"
          },
          description: {
            en: "Hadrian inaugurates the completed temple of Olympian Zeus and founds the Panhellenion, a league of Greek cities centred on Athens.",
            el: "Ο Αδριανός εγκαινιάζει τον αποπερατωμένο ναό του Ολυμπίου Διός και ιδρύει το Πανελλήνιο, ομοσπονδία ελληνικών πόλεων με κέντρο την Αθήνα."
          },
          extendedDescription: {
            en: "On his third and longest Greek visit, Hadrian presided over the dedication of the Olympieion, seven centuries after its foundations had been laid. A colossal chryselephantine statue of Zeus stood in the cella, with smaller statues of Hadrian himself ranged around the precinct as gifts of grateful cities. In the same year the emperor established the Panhellenion, a religious and civic federation open only to cities that could prove descent, however tenuous, from the historical Greek mainland or the Ionian colonies. Its assembly met in Athens beneath an imperial archon, settled disputes among member cities, regulated common festivals, and gave the eastern provinces — at last — a recognisable Hellenic political identity within the Roman framework. The league outlived Hadrian by some two centuries.",
            el: "Στην τρίτη και μακρότερη επίσκεψή του στην Ελλάδα, ο Αδριανός προήδρευσε στα εγκαίνια του Ολυμπιείου, επτά αιώνες μετά την κατάθεση των θεμελίων του. Κολοσσιαίο χρυσελεφάντινο άγαλμα του Διός υψωνόταν στο σηκό, ενώ μικρότερα αγάλματα του ίδιου του Αδριανού περιστοίχιζαν τον περίβολο ως δώρα ευγνωμονουσών πόλεων. Κατά το ίδιο έτος ο αυτοκράτορας ίδρυσε το Πανελλήνιο, θρησκευτική και πολιτική ομοσπονδία ανοιχτή μόνο σε πόλεις που μπορούσαν να αποδείξουν καταγωγή, έστω και χαλαρή, από την ιστορική ηπειρωτική Ελλάδα ή τις ιωνικές αποικίες. Η συνέλευσή του συνερχόταν στην Αθήνα υπό αυτοκρατορικό άρχοντα, διευθετούσε διαφορές μεταξύ μελών, ρύθμιζε κοινές εορτές και έδινε στις ανατολικές επαρχίες — επιτέλους — αναγνωρίσιμη ελληνική πολιτική ταυτότητα εντός του ρωμαϊκού πλαισίου. Η ομοσπονδία επέζησε του Αδριανού δύο σχεδόν αιώνες."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 161,
      era: {
        en: "Antonine Greece",
        el: "Αντωνίνεια Ελλάδα"
      },
      events: [
        {
          title: {
            en: "Herodes Atticus Builds the Athenian Odeon",
            el: "Ο Ηρώδης Αττικός Ανεγείρει το Αθηναϊκό Ωδείο"
          },
          description: {
            en: "The orator and benefactor Herodes Atticus completes a great roofed odeon on the south slope of the Acropolis, in memory of his late wife Regilla.",
            el: "Ο ρήτωρ και ευεργέτης Ηρώδης Αττικός αποπερατώνει μεγαλοπρεπές στεγασμένο ωδείο στη νότια κλιτύ της Ακροπόλεως, εις μνήμην της νεκρής συζύγου του Ρηγίλλης."
          },
          extendedDescription: {
            en: "Tiberius Claudius Atticus Herodes, consul ordinarius in 143, sophist, tutor to Marcus Aurelius and Lucius Verus, and reputedly the richest private citizen of the second-century Mediterranean, channelled his fortune into a programme of building that left its mark on every major Greek site. To his Athens he gave the rebuilt Panathenaic Stadium in white Pentelic marble (140), the aqueduct that bore water from Mount Parnes, and the steep stone Odeon on the Acropolis slope (c. 161), commemorating his wife Appia Annia Regilla after her death — circumstances over which Herodes was tried before Marcus Aurelius and acquitted. At Olympia he built the Nymphaeum (Exedra of Herodes), at Corinth a portico, at Delphi a stadium. His career, more than any other single life, defined the social possibilities and the ambivalent loyalties of the Hellenic elite under Rome.",
            el: "Ο Τιβέριος Κλαύδιος Αττικός Ηρώδης, τακτικός ύπατος το 143, σοφιστής, διδάσκαλος του Μάρκου Αυρηλίου και του Λουκίου Βήρου, και κατά τη φήμη ο πλουσιότερος ιδιώτης της Μεσογείου του 2ου αιώνα, διοχέτευσε την περιουσία του σε οικοδομικό πρόγραμμα που άφησε το αποτύπωμά του σε κάθε σημαντικό ελληνικό χώρο. Στην Αθήνα του δώρισε το ανακαινισμένο Παναθηναϊκό Στάδιο από λευκό πεντελικό μάρμαρο (140), το υδραγωγείο που έφερνε νερό από την Πάρνηθα, και το επιβλητικό λίθινο Ωδείο στην κλιτύ της Ακροπόλεως (περ. 161), εις μνήμην της συζύγου του Αππίας Αννίας Ρηγίλλης μετά τον θάνατό της — συνθήκες για τις οποίες ο Ηρώδης δικάστηκε ενώπιον του Μάρκου Αυρηλίου και αθωώθηκε. Στην Ολυμπία ανήγειρε το Νυμφαίο (Εξέδρα του Ηρώδου), στην Κόρινθο μία στοά, στους Δελφούς ένα στάδιο. Η σταδιοδρομία του, περισσότερο από οποιαδήποτε άλλη ζωή, όρισε τις κοινωνικές δυνατότητες και τις αμφίθυμες πίστεις της ελληνικής ελίτ υπό τη Ρώμη."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 175,
      era: {
        en: "Antonine Greece",
        el: "Αντωνίνεια Ελλάδα"
      },
      events: [
        {
          title: {
            en: "Pausanias Completes the Description of Greece",
            el: "Ο Παυσανίας Ολοκληρώνει την Περιήγηση της Ελλάδος"
          },
          description: {
            en: "The traveller Pausanias of Magnesia finishes his ten-book Description of Greece, an indispensable guide to the topography and antiquities of the Greek mainland.",
            el: "Ο περιηγητής Παυσανίας ο Μάγνης ολοκληρώνει την δεκάτομη Ελλάδος Περιήγηση, ανυπέρβλητο οδηγό της τοπογραφίας και των αρχαιοτήτων της ηπειρωτικής Ελλάδος."
          },
          extendedDescription: {
            en: "Travelling under the Antonines through Attica, Megaris, Corinth, Laconia, Messenia, Elis (with Olympia at its heart), Achaea, Arcadia, Boeotia and Phocis, Pausanias recorded what he saw with the eye of an antiquarian and the patience of a pilgrim. He noted the inscriptions on statues, the legends attached to sanctuaries, the offerings stored in temple treasuries, and the changes wrought by time, war and emperors. Without him we would not know the topography of the Athenian Agora, the layout of Olympia, the iconography of the Polygnotan paintings at Delphi, or the genealogies of half the Greek hero-cults. He completed his work around 175-180, and disappears from history thereafter.",
            el: "Περιοδεύοντας υπό τους Αντωνίνους μέσω της Αττικής, της Μεγαρίδος, της Κορινθίας, της Λακωνίας, της Μεσσηνίας, της Ηλείας (με την Ολυμπία στην καρδιά της), της Αχαΐας, της Αρκαδίας, της Βοιωτίας και της Φωκίδος, ο Παυσανίας κατέγραψε ό,τι έβλεπε με το βλέμμα του αρχαιοδίφου και την υπομονή του προσκυνητή. Σημείωνε τις επιγραφές των αγαλμάτων, τους θρύλους των ιερών, τα αναθήματα των ναϊκών θησαυρών, και τις αλλαγές που επέφεραν χρόνος, πόλεμος και αυτοκράτορες. Χωρίς αυτόν δεν θα γνωρίζαμε την τοπογραφία της Αρχαίας Αγοράς των Αθηνών, τη διάρθρωση της Ολυμπίας, την εικονογραφία των πολυγνώτειων ζωγραφικών στους Δελφούς, ή τις γενεαλογίες των μισών ελληνικών ηρωολατρειών. Ολοκλήρωσε το έργο του περί το 175-180, και έκτοτε χάνεται από την ιστορία."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 250,
      era: {
        en: "Third Century Crisis",
        el: "Κρίση του Τρίτου Αιώνα"
      },
      events: [
        {
          title: {
            en: "Goths Cross the Lower Danube",
            el: "Οι Γότθοι Διαβαίνουν τον Κάτω Δούναβη"
          },
          description: {
            en: "Under their king Cniva, the Goths break across the Danube into Moesia and Thrace, opening the first decade of barbarian raids on the Balkan peninsula.",
            el: "Υπό τον βασιλέα Κνίβα, οι Γότθοι διαβαίνουν τον Δούναβη στη Μοισία και τη Θράκη, εγκαινιάζοντας την πρώτη δεκαετία βαρβαρικών επιδρομών στη βαλκανική χερσόνησο."
          },
          extendedDescription: {
            en: "The Gothic incursions of 250-251, which culminated in the death of the emperor Decius and his son at the disastrous Battle of Abritus, were the first serious external threat the Balkan provinces had faced in three centuries. They opened a long age of insecurity for Greece: while the mountains shielded the Peloponnese for a time, the cities of Thrace and Macedonia were repeatedly stormed, and refugees, garrisoning, and the cost of new fortifications fell heavily on the curial classes whose benefactions had built the great public architecture of the Antonine age. The shock can be measured in the disappearance of new monumental inscriptions across much of Greece after about 250.",
            el: "Οι γοτθικές επιδρομές του 250-251, που κορυφώθηκαν με τον θάνατο του αυτοκράτορα Δεκίου και του υιού του στην ολέθρια μάχη του Αβρίττου, ήταν η πρώτη σοβαρή εξωτερική απειλή την οποία αντιμετώπισαν οι βαλκανικές επαρχίες σε τρεις αιώνες. Εγκαινίασαν μακρά εποχή ανασφάλειας για την Ελλάδα: αν και τα όρη προφύλαξαν την Πελοπόννησο για ένα διάστημα, οι πόλεις της Θράκης και της Μακεδονίας εκπορθήθηκαν επανειλημμένως, ενώ οι πρόσφυγες, η φύλαξις και το κόστος νέων τειχών βάρυναν τη βουλευτική τάξη της οποίας οι ευεργεσίες είχαν χτίσει τη μεγάλη δημόσια αρχιτεκτονική της αντωνίνειας εποχής. Το πλήγμα μετράται από την εξαφάνιση νέων μνημειακών επιγραφών σε μεγάλο μέρος της Ελλάδος μετά το 250 περίπου."
          },
          category: "military"
        }
      ]
    },
    {
      year: 267,
      era: {
        en: "Third Century Crisis",
        el: "Κρίση του Τρίτου Αιώνα"
      },
      events: [
        {
          title: {
            en: "The Herulian Sack of Athens",
            el: "Η Άλωση των Αθηνών από τους Ερούλους"
          },
          description: {
            en: "A seaborne band of Heruli, Goths and Peucini sails into the Aegean, sacks Athens, Corinth, Sparta, Argos and Olympia, and is finally defeated in battle by the Athenian historian Dexippus.",
            el: "Ένωση Ερούλων, Γότθων και Πευκίνων εισβάλλει διά θαλάσσης στο Αιγαίο, λεηλατεί τις Αθήνες, την Κόρινθο, τη Σπάρτη, το Άργος και την Ολυμπία, και τέλος νικάται από τον Αθηναίο ιστορικό Δέξιππο."
          },
          extendedDescription: {
            en: "Sailing in some five hundred boats from the Black Sea, the great Gothic-Herulian raid of 267 broke through the Bosporus, ravaged the coasts of Asia Minor, and fell upon mainland Greece. Athens, surprised before its walls could be repaired, was stormed; the agora was burnt, the libraries and great houses pillaged, but tradition reports that the raiders spared the books on the advice that 'while the Greeks read, they will never learn to fight'. The senator and historian P. Herennius Dexippus mustered two thousand local volunteers, ambushed the retreating raiders in the woods of Mount Pentelicus and cut down a substantial part of them. The shattered Athens of after 267 retreated behind a much shorter circuit of walls — the so-called Late Roman or Valerian Wall — built largely from the rubble of public monuments. The classical city, in any urban sense, never recovered.",
            el: "Πλέοντες με κάπου πεντακόσια πλοία από τον Εύξεινο, οι μεγάλες γοτθο-ερουλικές επιδρομές του 267 διέρρηξαν τον Βόσπορο, ερήμωσαν τα μικρασιατικά παράλια και έπεσαν στην ηπειρωτική Ελλάδα. Οι Αθήνες, ευρεθείσες απροετοίμαστες προτού τα τείχη τους ολοκληρωθούν, εκπορθήθηκαν· η αγορά κάηκε, οι βιβλιοθήκες και τα μεγάλα οικήματα λεηλατήθηκαν, αλλά η παράδοση αναφέρει ότι οι επιδρομείς γλίτωσαν τα βιβλία επί τη συμβουλή ότι 'όσο οι Έλληνες διαβάζουν, δεν θα μάθουν ποτέ να πολεμούν'. Ο συγκλητικός και ιστορικός Π. Ερέννιος Δέξιππος συγκέντρωσε δύο χιλιάδες ντόπιους εθελοντές, ενέδρευσε τους υποχωρούντες επιδρομείς στα δάση της Πεντέλης και κατέκοψε σημαντικό μέρος τους. Οι κλονισμένες Αθήνες μετά το 267 αποτραβήχθηκαν πίσω από πολύ μικρότερο κύκλο τειχών — το λεγόμενο Υστερορρωμαϊκό ή Βαλεριάνειο Τείχος — χτισμένο σε μεγάλο βαθμό από τα ερείπια δημοσίων μνημείων. Η κλασική πόλις, με κάθε αστική έννοια, δεν ανάκαμψε ποτέ."
          },
          category: "military"
        }
      ]
    },
    {
      year: 268,
      era: {
        en: "Third Century Crisis",
        el: "Κρίση του Τρίτου Αιώνα"
      },
      events: [
        {
          title: {
            en: "Battle of Naissus",
            el: "Η Μάχη της Ναϊσσού"
          },
          description: {
            en: "The emperor Gallienus, soon succeeded by Claudius II Gothicus, crushes a great Gothic host at Naissus in Moesia, ending the worst of the third-century invasions of the Balkans.",
            el: "Ο αυτοκράτορας Γαλλιηνός, ο οποίος διαδέχεται σύντομα από τον Κλαύδιο Β΄ τον Γοτθικό, συντρίβει μεγάλη γοτθική στρατιά στη Ναϊσσό της Μοισίας, τερματίζοντας τη χειρότερη φάση των εισβολών του 3ου αιώνα στα Βαλκάνια."
          },
          extendedDescription: {
            en: "The Roman counterstrike that followed the sack of the Aegean cities was decisive. A great Gothic army, perhaps fifty thousand strong, was overtaken at Naissus (modern Niš) in the late summer of 268 or 269, and slaughtered in such numbers that contemporary writers spoke of a generation of barbarian warriors lost. The victory earned Claudius the cognomen 'Gothicus' and bought the Balkans almost a century of relative peace; in Greece itself, the long process of rebuilding began under Diocletian's general programme of provincial reorganisation in the 290s.",
            el: "Η ρωμαϊκή αντεπίθεσις που ακολούθησε τη λεηλασία των πόλεων του Αιγαίου ήταν αποφασιστική. Μεγάλη γοτθική στρατιά, ίσως πενήντα χιλιάδων, καταλήφθηκε στη Ναϊσσό (σημερινό Νις) στα τέλη του καλοκαιριού του 268 ή 269 και κατασφαγιάστηκε σε τέτοιους αριθμούς, ώστε σύγχρονοι συγγραφείς μιλούσαν για μια χαμένη γενεά βαρβάρων πολεμιστών. Η νίκη χάρισε στον Κλαύδιο τον τίτλο 'Γοτθικός' και αγόρασε στα Βαλκάνια έναν σχεδόν αιώνα σχετικής ειρήνης· στην ίδια την Ελλάδα, η μακρά διαδικασία ανοικοδομήσεως άρχισε υπό το γενικό πρόγραμμα αναδιαρθρώσεως των επαρχιών του Διοκλητιανού στις δεκαετίες του 290."
          },
          category: "military"
        }
      ]
    },
    {
      year: 293,
      era: {
        en: "Diocletian and the Tetrarchy",
        el: "Διοκλητιανός και Τετραρχία"
      },
      events: [
        {
          title: {
            en: "Greece in the Diocese of Moesia",
            el: "Η Ελλάδα στη Διοίκηση της Μοισίας"
          },
          description: {
            en: "Under Diocletian's reform, Achaea, Macedonia and Epirus are grouped into the new Diocese of Moesia, governed from Thessalonica by the Caesar Galerius.",
            el: "Υπό τις μεταρρυθμίσεις του Διοκλητιανού, η Αχαΐα, η Μακεδονία και η Ήπειρος εντάσσονται στη νέα Διοίκηση Μοισίας, με έδρα τη Θεσσαλονίκη υπό τον Καίσαρα Γαλέριο."
          },
          extendedDescription: {
            en: "Diocletian's restructuring of the empire fragmented the old large provinces into more than a hundred smaller units, grouped into twelve dioceses each under a vicarius. Old Achaea was divided into Achaea proper (south of Thermopylae) and Epirus Vetus; Macedonia was split into Macedonia Prima and Salutaris; Crete and the Aegean islands were detached and assigned to the diocese of the East. The seat of Caesar Galerius at Thessalonica — adorned with the rotunda and triumphal arch still standing — became the de facto capital of the Roman Balkans and the operational base from which the empire's wars on the Danube and against Sasanian Persia were directed. For Greek civic life, the reform meant a more intrusive and hierarchical administration, but also the renewed importance of Thessalonica as a Hellenic metropolis second only to Constantinople-to-be.",
            el: "Η αναδιάρθρωσις της αυτοκρατορίας από τον Διοκλητιανό κατακερμάτισε τις παλαιές μεγάλες επαρχίες σε πλέον των εκατό μικρότερες μονάδες, ομαδοποιημένες σε δώδεκα διοικήσεις υπό βικάριο. Η παλαιά Αχαΐα διαιρέθηκε σε Αχαΐα κυρίως (νοτίως των Θερμοπυλών) και σε Παλαιά Ήπειρο· η Μακεδονία διαιρέθηκε σε Μακεδονία Α΄ και Σωτηρία· η Κρήτη και τα νησιά του Αιγαίου αποσπάσθηκαν και υπήχθησαν στη διοίκηση της Ανατολής. Η έδρα του Καίσαρα Γαλερίου στη Θεσσαλονίκη — κοσμημένη με τη Ροτόντα και την Αψίδα του Θριάμβου που σώζονται ακόμη — έγινε de facto πρωτεύουσα των ρωμαϊκών Βαλκανίων και η επιχειρησιακή βάση από την οποία διευθύνονταν οι πόλεμοι στον Δούναβη και κατά της Σασανιδικής Περσίας. Για την ελληνική αστική ζωή, η μεταρρύθμιση σήμαινε πιο εμπλεκόμενη και ιεραρχημένη διοίκηση, αλλά και την ανανεωμένη σημασία της Θεσσαλονίκης ως ελληνικής μητροπόλεως δευτέρας μόνον της μέλλουσας Κωνσταντινουπόλεως."
          },
          category: "political"
        }
      ]
    },
    {
      year: 303,
      era: {
        en: "Diocletian and the Tetrarchy",
        el: "Διοκλητιανός και Τετραρχία"
      },
      events: [
        {
          title: {
            en: "The Great Persecution",
            el: "Ο Μέγας Διωγμός"
          },
          description: {
            en: "Diocletian issues the first edicts of the Great Persecution; churches across Greece are demolished, scriptures burnt, and martyrdoms remembered down to modern times follow.",
            el: "Ο Διοκλητιανός εκδίδει τα πρώτα διατάγματα του Μεγάλου Διωγμού· εκκλησίες σε όλη την Ελλάδα κατεδαφίζονται, οι Γραφές καίγονται και ακολουθούν μαρτύρια που μνημονεύονται μέχρι σήμερα."
          },
          extendedDescription: {
            en: "On 23 February 303 the imperial edict ordered the dismantling of every Christian church and the surrender of all sacred books, followed by edicts that imprisoned clergy and compelled universal sacrifice. The persecution was pressed hardest in the eastern dioceses under Galerius. In Thessalonica, the soldier Demetrius — later patron saint of the city — and the slave-girl Anysia were among those put to death; in Achaea, the deacon Phileas of Corinth, and many others whose names entered the synaxaria of the later Greek church. The persecution petered out in the west after Constantine's father Constantius left it largely unenforced in Britain and Gaul, but in the Balkans and the Greek East it ran on with intermittent fury until the Edict of Toleration of 311.",
            el: "Στις 23 Φεβρουαρίου 303 το αυτοκρατορικό διάταγμα διέταξε την κατεδάφιση κάθε χριστιανικού ναού και την παράδοση όλων των ιερών βιβλίων, ενώ ακολούθησαν διατάγματα που φυλάκισαν κλήρο και επέβαλαν καθολική θυσία. Ο διωγμός πιέστηκε δριμύτερα στις ανατολικές διοικήσεις υπό τον Γαλέριο. Στη Θεσσαλονίκη, ο στρατιώτης Δημήτριος — μετέπειτα πολιούχος της πόλεως — και η δούλη Ανυσία υπήρξαν μεταξύ των θανατωθέντων· στην Αχαΐα, ο διάκονος Φιλέας της Κορίνθου, και πολλοί άλλοι των οποίων τα ονόματα εισήχθησαν στα συναξάρια της μεταγενέστερης ελληνικής Εκκλησίας. Ο διωγμός εξασθένησε στη Δύση όταν ο Κωνστάντιος, πατέρας του Κωνσταντίνου, τον άφησε σε μεγάλο βαθμό ανεκτέλεστο στη Βρετανία και τη Γαλατία, στα Βαλκάνια όμως και στην ελληνική Ανατολή συνεχίστηκε με διαλείπουσα μανία μέχρι το Διάταγμα Ανοχής του 311."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 311,
      era: {
        en: "Diocletian and the Tetrarchy",
        el: "Διοκλητιανός και Τετραρχία"
      },
      events: [
        {
          title: {
            en: "Edict of Serdica",
            el: "Διάταγμα της Σερδικής"
          },
          description: {
            en: "On his deathbed at Serdica, Galerius issues the Edict of Toleration, ending the persecution and recognising the right of Christians to worship within the Roman state.",
            el: "Στο νεκρικό κρεβάτι του στη Σερδική, ο Γαλέριος εκδίδει το Διάταγμα της Ανοχής, τερματίζοντας τον διωγμό και αναγνωρίζοντας το δικαίωμα των χριστιανών να λατρεύουν εντός του ρωμαϊκού κράτους."
          },
          extendedDescription: {
            en: "Stricken by an agonising disease that contemporaries read as divine punishment, the dying Galerius issued from Serdica (modern Sofia) — a city he had hoped to make his new Rome — an edict that admitted the failure of the persecution and granted Christians the right to exist 'on condition that they do nothing contrary to good order'. They were even asked to pray to their God for the emperor and for the safety of the state. The edict was the first imperial recognition that the church could not be eliminated by force; it preceded the more famous Edict of Milan by less than two years and set the stage for it. Galerius died a few days after publication.",
            el: "Πληγείς από επώδυνη ασθένεια που οι σύγχρονοι ερμήνευαν ως θεία τιμωρία, ο ετοιμοθάνατος Γαλέριος εξέδωσε από τη Σερδική (σημερινή Σόφια) — πόλη που είχε ελπίσει να μετατρέψει σε νέα Ρώμη — διάταγμα που αναγνώριζε την αποτυχία του διωγμού και χορηγούσε στους χριστιανούς το δικαίωμα να υπάρχουν 'υπό τον όρο να μη πράττουν ουδέν αντίθετο προς την ευταξίαν'. Τους ζητήθηκε μάλιστα να προσεύχονται προς τον Θεό τους για τον αυτοκράτορα και την ασφάλεια του κράτους. Το διάταγμα ήταν η πρώτη αυτοκρατορική αναγνώριση ότι η Εκκλησία δεν μπορούσε να εξαφανιστεί διά της βίας· προηγήθηκε του πιο γνωστού Διατάγματος των Μεδιολάνων κατά λιγότερο από δύο χρόνια και του προετοίμασε το έδαφος. Ο Γαλέριος πέθανε λίγες ημέρες μετά τη δημοσίευση."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 324,
      era: {
        en: "Constantine and the New Capital",
        el: "Κωνσταντίνος και η Νέα Πρωτεύουσα"
      },
      events: [
        {
          title: {
            en: "Constantine Defeats Licinius at Chrysopolis",
            el: "Ο Κωνσταντίνος Νικά τον Λικίνιο στη Χρυσούπολη"
          },
          description: {
            en: "Constantine defeats Licinius at Adrianople and Chrysopolis, reunites the empire under a single Christian sovereign, and chooses the Greek city of Byzantion as his new capital.",
            el: "Ο Κωνσταντίνος νικά τον Λικίνιο στην Αδριανούπολη και τη Χρυσούπολη, επανενώνει την αυτοκρατορία υπό έναν χριστιανό μονάρχη και επιλέγει την ελληνική πόλη του Βυζαντίου ως νέα πρωτεύουσα."
          },
          extendedDescription: {
            en: "Constantine's decisive victories of 324 — at Adrianople on 3 July and at Chrysopolis on 18 September — ended the civil wars of the Tetrarchy and made him sole Augustus. Within weeks he had marked out an enlarged circuit of walls around the old Megarian colony of Byzantion on the Bosporus, the site of which had impressed him during the campaign against Licinius. The new city, formally dedicated on 11 May 330 as Nova Roma but universally remembered as Constantinople, would within a generation eclipse Antioch, Alexandria and Rome itself, and provide the Greek world with the imperial centre it would not lose until 1453. With this act the long Roman epoch of the Greeks gave way to what later ages would call the Byzantine, though to those who lived through it, it was simply the unbroken continuation of the Roman state, conducted now in Greek and ruled from the city on the straits.",
            el: "Οι αποφασιστικές νίκες του Κωνσταντίνου το 324 — στην Αδριανούπολη την 3η Ιουλίου και στη Χρυσούπολη την 18η Σεπτεμβρίου — τερμάτισαν τους εμφυλίους της Τετραρχίας και τον ανέδειξαν μοναδικό Αύγουστο. Μέσα σε εβδομάδες είχε χαράξει διευρυμένο κύκλο τειχών γύρω από την παλαιά μεγαρική αποικία του Βυζαντίου στον Βόσπορο, του οποίου η θέση τον είχε εντυπωσιάσει κατά την εκστρατεία εναντίον του Λικινίου. Η νέα πόλις, που εγκαινιάστηκε επισήμως στις 11 Μαΐου 330 ως Νέα Ρώμη αλλά μνημονεύεται καθολικά ως Κωνσταντινούπολις, θα επισκίαζε εντός μιας γενεάς την Αντιόχεια, την Αλεξάνδρεια και την ίδια τη Ρώμη, και θα έδινε στον ελληνικό κόσμο το αυτοκρατορικό κέντρο που δεν θα έχανε μέχρι το 1453. Με την πράξη αυτή η μακρά ρωμαϊκή εποχή των Ελλήνων παραχωρούσε τη θέση της σε ό,τι οι μεταγενέστερες εποχές θα ονόμαζαν Βυζαντινή, αν και σε όσους έζησαν τότε, ήταν απλώς η αδιάκοπη συνέχεια του ρωμαϊκού κράτους, που τώρα διεξαγόταν στα ελληνικά και κυβερνιόταν από την πόλη επί των στενών."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
