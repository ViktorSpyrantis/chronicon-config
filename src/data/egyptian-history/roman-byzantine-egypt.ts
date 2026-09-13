/** Roman & Byzantine Egypt — Ρωμαϊκή & Βυζαντινή Αίγυπτος · Egyptian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const ROMAN_BYZANTINE_EGYPT = {
  id: "roman-byzantine-egypt" as const,
  label: {
    en: "Roman & Byzantine Egypt",
    el: "Ρωμαϊκή & Βυζαντινή Αίγυπτος"
  },
  supertitle: {
    en: "Aegyptus",
    el: "Αἴγυπτος"
  },
  title: {
    en: "Roman & Byzantine Egypt",
    el: "Ρωμαϊκή & Βυζαντινή Αίγυπτος"
  },
  subtitle: {
    en: "From Augustus' annexation of Egypt as the granary of Rome through the coming of Christianity and the learning of Alexandria, the Era of Martyrs and the birth of desert monasticism, the destruction of the Serapeum and the murder of Hypatia, the Coptic schism after Chalcedon and the Persian occupation, to the Arab conquest and the fall of Alexandria in 641 CE. Slide across nearly seven centuries in which Egypt became Christian and Coptic before passing to Islam.",
    el: "Από την προσάρτηση της Αιγύπτου από τον Αύγουστο ως σιτοβολώνα της Ρώμης, μέσα από την έλευση του Χριστιανισμού και την παιδεία της Αλεξάνδρειας, την Εποχή των Μαρτύρων και τη γέννηση του μοναχισμού της ερήμου, την καταστροφή του Σεραπείου και τη δολοφονία της Υπατίας, το κοπτικό σχίσμα μετά τη Χαλκηδόνα και την περσική κατοχή, ως την αραβική κατάκτηση και την άλωση της Αλεξάνδρειας το 641 μ.Χ. Μετακινηθείτε ανάμεσα σε σχεδόν επτά αιώνες κατά τους οποίους η Αίγυπτος έγινε χριστιανική και κοπτική πριν περάσει στο Ισλάμ."
  },
  menuDescription: {
    en: "Rome's breadbasket becomes a Christian land, from Augustus to the Arab conquest.",
    el: "Ο σιτοβολώνας της Ρώμης γίνεται χριστιανική γη, από τον Αύγουστο ως την αραβική κατάκτηση."
  },
  footerLabel: {
    en: "Roman & Byzantine Egypt · 30 BCE–641 CE",
    el: "Ρωμαϊκή & Βυζαντινή Αίγυπτος · 30 π.Χ.–641 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Roman & Byzantine Egypt",
    el: "Ρωμαϊκή & Βυζαντινή Αίγυπτος"
  },
  theme: THEMES.crimson,
  timeline: [
    {
      year: -30,
      era: {
        en: "Roman Province",
        el: "Ρωμαϊκή Επαρχία"
      },
      events: [
        {
          title: {
            en: "Augustus annexes Egypt",
            el: "Ο Αύγουστος προσαρτά την Αίγυπτο"
          },
          description: {
            en: "After the death of Cleopatra, Octavian makes Egypt his personal domain, a uniquely governed province and the indispensable granary of Rome.",
            el: "Μετά τον θάνατο της Κλεοπάτρας, ο Οκταβιανός καθιστά την Αίγυπτο προσωπικό του κτήμα, μια μοναδικά διοικούμενη επαρχία και τον απαραίτητο σιτοβολώνα της Ρώμης."
          },
          extendedDescription: {
            en: "Egypt was governed not by a senatorial proconsul but by a prefect of equestrian rank answerable directly to the emperor, and senators were forbidden even to enter without permission — so vital was its grain to feeding the city of Rome. The annual harvest, shipped from Alexandria, fed perhaps a third of the capital's population. Roman rule preserved the temples and the old religion at first, while a Greek-speaking elite and a vast bureaucracy taxed the fellahin who worked the land.",
            el: "Η Αίγυπτος κυβερνιόταν όχι από συγκλητικό ανθύπατο, αλλά από έπαρχο ιππικής τάξης που λογοδοτούσε απευθείας στον αυτοκράτορα, και στους συγκλητικούς απαγορευόταν ακόμη και να εισέλθουν χωρίς άδεια — τόσο ζωτικό ήταν το σιτάρι της για τη διατροφή της πόλης της Ρώμης. Η ετήσια συγκομιδή, που μεταφερόταν από την Αλεξάνδρεια, έτρεφε ίσως το ένα τρίτο του πληθυσμού της πρωτεύουσας. Η ρωμαϊκή κυριαρχία διατήρησε αρχικά τους ναούς και την παλαιά θρησκεία, ενώ μια ελληνόφωνη ελίτ και μια τεράστια γραφειοκρατία φορολογούσαν τους φελάχους που καλλιεργούσαν τη γη."
          },
          category: "political"
        }
      ]
    },
    {
      year: 42,
      era: {
        en: "The Coming of Christianity",
        el: "Η Έλευση του Χριστιανισμού"
      },
      events: [
        {
          title: {
            en: "Saint Mark and the Church of Alexandria",
            el: "Ο Άγιος Μάρκος και η Εκκλησία της Αλεξάνδρειας"
          },
          description: {
            en: "By tradition the Evangelist Mark brings Christianity to Alexandria, founding one of the oldest churches in the world and the seat of the future Coptic patriarchate.",
            el: "Κατά την παράδοση, ο Ευαγγελιστής Μάρκος φέρνει τον Χριστιανισμό στην Αλεξάνδρεια, ιδρύοντας μία από τις αρχαιότερες εκκλησίες στον κόσμο και την έδρα του μελλοντικού κοπτικού πατριαρχείου."
          },
          extendedDescription: {
            en: "The Egyptian Church traces its origin to the preaching of Saint Mark in the mid-first century. Alexandria, with its great Jewish community and its tradition of learning, became one of early Christianity's most important centres. The new faith spread rapidly among Greeks, Jews, and native Egyptians alike, and from the Egyptian tongue would come the word 'Copt' — from the Greek Aigyptios — to name the Christians of Egypt and their language.",
            el: "Η αιγυπτιακή Εκκλησία ανάγει την προέλευσή της στο κήρυγμα του Αγίου Μάρκου στα μέσα του πρώτου αιώνα. Η Αλεξάνδρεια, με τη μεγάλη εβραϊκή κοινότητά της και την παράδοση μάθησής της, έγινε ένα από τα σημαντικότερα κέντρα του πρώιμου Χριστιανισμού. Η νέα πίστη εξαπλώθηκε ταχύτατα μεταξύ Ελλήνων, Εβραίων και εγχώριων Αιγυπτίων, και από την αιγυπτιακή γλώσσα θα προερχόταν η λέξη «Κόπτης» — από το ελληνικό Αιγύπτιος — για να ονομάσει τους Χριστιανούς της Αιγύπτου και τη γλώσσα τους."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 200,
      era: {
        en: "Alexandrian Learning",
        el: "Αλεξανδρινή Παιδεία"
      },
      events: [
        {
          title: {
            en: "The Catechetical School of Alexandria",
            el: "Η Κατηχητική Σχολή της Αλεξάνδρειας"
          },
          description: {
            en: "Scholars such as Clement and Origen make Alexandria the intellectual capital of early Christianity, fusing Greek philosophy with Christian theology.",
            el: "Λόγιοι όπως ο Κλήμης και ο Ωριγένης καθιστούν την Αλεξάνδρεια την πνευματική πρωτεύουσα του πρώιμου Χριστιανισμού, συνδυάζοντας την ελληνική φιλοσοφία με τη χριστιανική θεολογία."
          },
          extendedDescription: {
            en: "Heir to the city's pagan tradition of scholarship, the Catechetical School became the foremost centre of Christian theology in the empire. Clement of Alexandria and his pupil Origen — the most prolific and influential biblical scholar of the age — pioneered the allegorical interpretation of Scripture and engaged deeply with Platonic philosophy. Their work shaped Christian doctrine for centuries, even as some of Origen's bolder speculations were later condemned.",
            el: "Κληρονόμος της παγανιστικής παράδοσης λογιοσύνης της πόλης, η Κατηχητική Σχολή έγινε το κορυφαίο κέντρο χριστιανικής θεολογίας στην αυτοκρατορία. Ο Κλήμης ο Αλεξανδρεύς και ο μαθητής του Ωριγένης — ο πιο παραγωγικός και σημαντικός βιβλικός λόγιος της εποχής — πρωτοστάτησαν στην αλληγορική ερμηνεία της Γραφής και συνδιαλέχθηκαν βαθιά με την πλατωνική φιλοσοφία. Το έργο τους διαμόρφωσε τη χριστιανική διδασκαλία για αιώνες, ακόμη και αν ορισμένες από τις τολμηρότερες θεωρίες του Ωριγένη καταδικάστηκαν αργότερα."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 303,
      era: {
        en: "The Era of Martyrs",
        el: "Η Εποχή των Μαρτύρων"
      },
      events: [
        {
          title: {
            en: "The Great Persecution",
            el: "Ο Μεγάλος Διωγμός"
          },
          description: {
            en: "Diocletian's persecution falls with terrible force on Egypt's Christians; so many die that the Coptic Church dates its calendar from his reign as the Era of Martyrs.",
            el: "Ο διωγμός του Διοκλητιανού πλήττει με τρομερή σφοδρότητα τους Χριστιανούς της Αιγύπτου· τόσοι πεθαίνουν ώστε η Κοπτική Εκκλησία χρονολογεί το ημερολόγιό της από τη βασιλεία του ως την Εποχή των Μαρτύρων."
          },
          extendedDescription: {
            en: "The persecution launched by Diocletian in 303 was the last and most severe assault on Christianity, and Egypt suffered grievously. The memory of the executions was so profound that the Coptic Church still numbers its years Anno Martyrum, beginning from Diocletian's accession in 284. A decade later the Edict of Milan brought toleration, and Egypt emerged as one of the most thoroughly Christian lands of the Roman world.",
            el: "Ο διωγμός που εξαπέλυσε ο Διοκλητιανός το 303 ήταν η τελευταία και σφοδρότερη επίθεση κατά του Χριστιανισμού, και η Αίγυπτος υπέφερε φρικτά. Η μνήμη των εκτελέσεων ήταν τόσο βαθιά ώστε η Κοπτική Εκκλησία ακόμη αριθμεί τα έτη της Anno Martyrum, ξεκινώντας από την άνοδο του Διοκλητιανού το 284. Μια δεκαετία αργότερα το Διάταγμα των Μεδιολάνων έφερε την ανεξιθρησκία, και η Αίγυπτος αναδύθηκε ως μία από τις πληρέστερα χριστιανικές χώρες του ρωμαϊκού κόσμου."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 320,
      era: {
        en: "The Desert Fathers",
        el: "Οι Πατέρες της Ερήμου"
      },
      events: [
        {
          title: {
            en: "The birth of Christian monasticism",
            el: "Η γέννηση του χριστιανικού μοναχισμού"
          },
          description: {
            en: "In the Egyptian desert, Saint Anthony's solitary life and Saint Pachomius' communal rule give birth to monasticism, which spreads across the Christian world.",
            el: "Στην αιγυπτιακή έρημο, η μοναχική ζωή του Αγίου Αντωνίου και ο κοινοβιακός κανόνας του Αγίου Παχωμίου γεννούν τον μοναχισμό, που εξαπλώνεται σε όλο τον χριστιανικό κόσμο."
          },
          extendedDescription: {
            en: "Saint Anthony the Great withdrew into the eastern desert around 270, becoming the model of the hermit whose struggles, recounted in Athanasius' famous Life, inspired countless imitators. Around 320 Saint Pachomius organised the first cenobitic monasteries, where monks lived a communal life under a written rule. From these Egyptian beginnings monasticism spread to Palestine, Syria, and the Latin West, making the deserts of Egypt, in a contemporary phrase, 'a city of monks.'",
            el: "Ο Άγιος Αντώνιος ο Μέγας αποσύρθηκε στην ανατολική έρημο γύρω στο 270, γινόμενος το πρότυπο του ερημίτη του οποίου οι αγώνες, που εξιστορούνται στον περίφημο Βίο από τον Αθανάσιο, ενέπνευσαν αναρίθμητους μιμητές. Γύρω στο 320 ο Άγιος Παχώμιος οργάνωσε τα πρώτα κοινοβιακά μοναστήρια, όπου οι μοναχοί ζούσαν κοινοβιακή ζωή υπό γραπτό κανόνα. Από αυτές τις αιγυπτιακές απαρχές ο μοναχισμός εξαπλώθηκε στην Παλαιστίνη, τη Συρία και τη λατινική Δύση, καθιστώντας τις ερήμους της Αιγύπτου, κατά μια σύγχρονη έκφραση, «μια πόλη μοναχών»."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 391,
      era: {
        en: "Christian Triumph",
        el: "Χριστιανικός Θρίαμβος"
      },
      events: [
        {
          title: {
            en: "The destruction of the Serapeum",
            el: "Η καταστροφή του Σεραπείου"
          },
          description: {
            en: "Following the anti-pagan edicts of Theodosius, the patriarch Theophilus leads the destruction of the great temple of Serapis, the proud symbol of pagan Alexandria.",
            el: "Μετά τα αντιπαγανιστικά διατάγματα του Θεοδοσίου, ο πατριάρχης Θεόφιλος ηγείται της καταστροφής του μεγάλου ναού του Σέραπη, του περήφανου συμβόλου της παγανιστικής Αλεξάνδρειας."
          },
          extendedDescription: {
            en: "The Serapeum, sanctuary of the Graeco-Egyptian god Serapis and home to a famous library, was the last great stronghold of paganism in the city. After violent clashes between Christians and pagans, Theophilus obtained imperial sanction and had the temple demolished, its cult statue smashed. The event marked the decisive triumph of Christianity in Egypt and the end of the public practice of the ancient religion, though the temple of Isis at Philae lingered on into the sixth century.",
            el: "Το Σεράπειο, ιερό του ελληνοαιγυπτιακού θεού Σέραπη και έδρα μιας περίφημης βιβλιοθήκης, ήταν το τελευταίο μεγάλο προπύργιο του παγανισμού στην πόλη. Μετά από βίαιες συγκρούσεις μεταξύ Χριστιανών και παγανιστών, ο Θεόφιλος εξασφάλισε αυτοκρατορική έγκριση και κατεδάφισε τον ναό, συντρίβοντας το λατρευτικό άγαλμά του. Το γεγονός σηματοδότησε τον αποφασιστικό θρίαμβο του Χριστιανισμού στην Αίγυπτο και το τέλος της δημόσιας άσκησης της αρχαίας θρησκείας, αν και ο ναός της Ίσιδος στις Φιλές επιβίωσε ως τον έκτο αιώνα."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 415,
      era: {
        en: "Christian Triumph",
        el: "Χριστιανικός Θρίαμβος"
      },
      events: [
        {
          title: {
            en: "The murder of Hypatia",
            el: "Η δολοφονία της Υπατίας"
          },
          description: {
            en: "The renowned philosopher and mathematician Hypatia is murdered by a Christian mob in Alexandria, an act long remembered as a symbol of the eclipse of classical learning.",
            el: "Η ξακουστή φιλόσοφος και μαθηματικός Υπατία δολοφονείται από χριστιανικό όχλο στην Αλεξάνδρεια, πράξη που έμεινε στη μνήμη ως σύμβολο της έκλειψης της κλασικής παιδείας."
          },
          extendedDescription: {
            en: "Hypatia, daughter of the mathematician Theon, was a celebrated Neoplatonist teacher admired by pagans and Christians alike. Caught in a bitter power struggle between the prefect Orestes and the patriarch Cyril, she was seized by a mob and brutally killed. Her death shocked contemporaries and has echoed through the centuries as an emblem of fanaticism and the decline of Alexandria's ancient intellectual glory, even as the city remained a great Christian metropolis.",
            el: "Η Υπατία, κόρη του μαθηματικού Θέωνα, ήταν φημισμένη νεοπλατωνική δασκάλα, θαυμαζόμενη από παγανιστές και Χριστιανούς εξίσου. Παγιδευμένη σε μια πικρή διαμάχη εξουσίας μεταξύ του επάρχου Ορέστη και του πατριάρχη Κυρίλλου, αρπάχθηκε από όχλο και δολοφονήθηκε βάναυσα. Ο θάνατός της συγκλόνισε τους συγχρόνους της και αντήχησε στους αιώνες ως έμβλημα του φανατισμού και της παρακμής της αρχαίας πνευματικής δόξας της Αλεξάνδρειας, ακόμη και αν η πόλη παρέμεινε μια μεγάλη χριστιανική μητρόπολη."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 451,
      era: {
        en: "The Coptic Church",
        el: "Η Κοπτική Εκκλησία"
      },
      events: [
        {
          title: {
            en: "The Council of Chalcedon and the schism",
            el: "Η Σύνοδος της Χαλκηδόνας και το σχίσμα"
          },
          description: {
            en: "The Council of Chalcedon's definition of Christ's two natures is rejected by most Egyptians, splitting the Coptic Church from the imperial Church of Constantinople.",
            el: "Ο ορισμός της Συνόδου της Χαλκηδόνας περί των δύο φύσεων του Χριστού απορρίπτεται από τους περισσότερους Αιγυπτίους, χωρίζοντας την Κοπτική Εκκλησία από την αυτοκρατορική Εκκλησία της Κωνσταντινούπολης."
          },
          extendedDescription: {
            en: "Egypt, heir to the theology of Cyril, overwhelmingly held to the Miaphysite belief in the single united nature of Christ and rejected Chalcedon's two-nature formula. The result was a lasting schism between the native Coptic Church and the Chalcedonian, Greek-speaking 'Melkite' church backed by the emperors. Imperial attempts to impose Chalcedon, sometimes by force, deepened the alienation of the Egyptian population from Constantinople — a division that would weigh heavily when new conquerors arrived.",
            el: "Η Αίγυπτος, κληρονόμος της θεολογίας του Κυρίλλου, κρατούσε συντριπτικά τη μιαφυσιτική πίστη στην ενιαία φύση του Χριστού και απέρριπτε τον περί δύο φύσεων τύπο της Χαλκηδόνας. Το αποτέλεσμα ήταν ένα διαρκές σχίσμα μεταξύ της εγχώριας Κοπτικής Εκκλησίας και της χαλκηδόνιας, ελληνόφωνης «μελχιτικής» εκκλησίας που στήριζαν οι αυτοκράτορες. Οι αυτοκρατορικές προσπάθειες επιβολής της Χαλκηδόνας, ενίοτε με τη βία, βάθυναν την αποξένωση του αιγυπτιακού πληθυσμού από την Κωνσταντινούπολη — μια διαίρεση που θα βάραινε όταν θα έφταναν νέοι κατακτητές."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 619,
      era: {
        en: "Persian Occupation",
        el: "Περσική Κατοχή"
      },
      events: [
        {
          title: {
            en: "The Sasanian conquest of Egypt",
            el: "Η σασανιδική κατάκτηση της Αιγύπτου"
          },
          description: {
            en: "Armies of the Persian king Khosrow II overrun Egypt, holding it for a decade until the emperor Heraclius wins it back for Byzantium.",
            el: "Στρατοί του Πέρση βασιλιά Χοσρόη Β΄ κατακλύζουν την Αίγυπτο, κρατώντας την για μια δεκαετία μέχρι ο αυτοκράτορας Ηράκλειος να την ανακτήσει για το Βυζάντιο."
          },
          extendedDescription: {
            en: "In the great last war between Rome and Persia, Sasanian forces seized Egypt around 619, cutting off the grain supply to Constantinople. For ten years Egypt was a Persian province, until Heraclius' stunning counter-offensive shattered the Sasanian empire and restored Byzantine rule by 629. But the long war had exhausted both empires, and a recovered but weakened Egypt, divided in faith and drained by conflict, lay open to a new power surging out of Arabia.",
            el: "Στον μεγάλο τελευταίο πόλεμο μεταξύ Ρώμης και Περσίας, σασανιδικές δυνάμεις κατέλαβαν την Αίγυπτο γύρω στο 619, κόβοντας την προμήθεια σιταριού προς την Κωνσταντινούπολη. Για δέκα χρόνια η Αίγυπτος ήταν περσική επαρχία, μέχρι που η εκπληκτική αντεπίθεση του Ηρακλείου συνέτριψε τη σασανιδική αυτοκρατορία και αποκατέστησε τη βυζαντινή κυριαρχία έως το 629. Όμως ο μακρύς πόλεμος είχε εξαντλήσει και τις δύο αυτοκρατορίες, και μια ανακτημένη αλλά αποδυναμωμένη Αίγυπτος, διαιρεμένη στην πίστη και στραγγισμένη από τη σύγκρουση, έμενε εκτεθειμένη σε μια νέα δύναμη που ξεπηδούσε από την Αραβία."
          },
          category: "military"
        }
      ]
    },
    {
      year: 641,
      era: {
        en: "The Arab Conquest",
        el: "Η Αραβική Κατάκτηση"
      },
      events: [
        {
          title: {
            en: "The fall of Alexandria",
            el: "Η άλωση της Αλεξάνδρειας"
          },
          description: {
            en: "The Arab general Amr ibn al-As conquers Egypt for the Caliphate and takes Alexandria, ending nearly seven centuries of Roman and Byzantine rule.",
            el: "Ο Άραβας στρατηγός Άμρ ιμπν αλ-Άς κατακτά την Αίγυπτο για το Χαλιφάτο και καταλαμβάνει την Αλεξάνδρεια, τερματίζοντας σχεδόν επτά αιώνες ρωμαϊκής και βυζαντινής κυριαρχίας."
          },
          extendedDescription: {
            en: "Invading in 639 with a small but determined army, Amr ibn al-As defeated the Byzantine forces at Heliopolis and took the great fortress of Babylon near modern Cairo, where he founded the garrison town of Fustat. After a long siege Alexandria capitulated, and by 641–642 Egypt had passed to the Rashidun Caliphate. Many Copts, estranged from Constantinople, offered little resistance to the new rulers, who at first taxed rather than converted them. Egypt's long Islamic age had begun, even as the Coptic Church endured.",
            el: "Εισβάλλοντας το 639 με έναν μικρό αλλά αποφασισμένο στρατό, ο Άμρ ιμπν αλ-Άς νίκησε τις βυζαντινές δυνάμεις στην Ηλιούπολη και κατέλαβε το μεγάλο φρούριο της Βαβυλώνας κοντά στο σημερινό Κάιρο, όπου ίδρυσε τη φρουραρχική πόλη Φουστάτ. Μετά από μακρά πολιορκία η Αλεξάνδρεια συνθηκολόγησε, και έως το 641–642 η Αίγυπτος είχε περάσει στο Χαλιφάτο των Ρασιντούν. Πολλοί Κόπτες, αποξενωμένοι από την Κωνσταντινούπολη, πρόβαλαν μικρή αντίσταση στους νέους ηγεμόνες, οι οποίοι αρχικά τους φορολογούσαν αντί να τους προσηλυτίζουν. Η μακρά ισλαμική εποχή της Αιγύπτου είχε αρχίσει, την ώρα που η Κοπτική Εκκλησία επιβίωνε."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
