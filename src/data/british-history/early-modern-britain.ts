/** Early Modern Britain — Πρώιμη Νεωτερική Βρετανία · British History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const EARLY_MODERN_BRITAIN = {
  id: "early-modern-britain" as const,
  label: {
    en: "Early Modern Britain",
    el: "Πρώιμη Νεωτερική Βρετανία"
  },
  supertitle: {
    en: "Tudor & Stuart",
    el: "Τυδώρ & Στιούαρτ"
  },
  title: {
    en: "Early Modern Britain",
    el: "Η Πρώιμη Νεωτερική Βρετανία"
  },
  subtitle: {
    en: "From the accession of Henry VII at Bosworth Field through the English Reformation, the Elizabethan age and the Spanish Armada, the Union of the Crowns and the King James Bible, the Civil Wars and the execution of Charles I, Cromwell's Protectorate, the Restoration of Charles II, the Glorious Revolution, and the Act of Union to the Hanoverian succession of 1714. Slide across the centuries to read the major events that made modern Britain.",
    el: "Από την άνοδο του Ερρίκου Ζ΄ στο Πεδίο του Μπόσγουορθ μέσα από την Αγγλική Μεταρρύθμιση, την εποχή της Ελισάβετ και την Ισπανική Αρμάδα, την Ένωση των Στεμμάτων και τη Βίβλο του Βασιλέως Ιακώβου, τους Εμφυλίους Πολέμους και την εκτέλεση του Καρόλου Α΄, την Προστασία του Κρόμγουελ, την Παλινόρθωση του Καρόλου Β΄, την Ένδοξη Επανάσταση και τους Νόμους της Ένωσης, έως τη διαδοχή των Ανοβεριανών το 1714. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα γεγονότα που έπλασαν τη σύγχρονη Βρετανία."
  },
  menuDescription: {
    en: "Tudors and Stuarts, the Armada and the Civil Wars, up to the Union of 1707.",
    el: "Τυδώρ και Στιούαρτ, η Αρμάδα κι οι Εμφύλιοι, ως την Ένωση του 1707."
  },
  footerLabel: {
    en: "Early Modern Britain · 1485-1714 AD",
    el: "Πρώιμη Νεωτερική Βρετανία · 1485-1714 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Early Modern Britain",
    el: "Πρώιμη Νεωτερική Βρετανία"
  },
  theme: THEMES.emerald,
  timeline: [
    {
      year: 1485,
      era: {
        en: "Tudor Dynasty",
        el: "Δυναστεία των Τυδώρ"
      },
      events: [
        {
          title: {
            en: "Henry VII founds the Tudor dynasty",
            el: "Ο Ερρίκος Ζ΄ ιδρύει τη δυναστεία των Τυδώρ"
          },
          description: {
            en: "Two months after Bosworth, Henry Tudor is crowned at Westminster as Henry VII. In January 1486 he marries Elizabeth of York, uniting the warring houses; their badge — the Tudor rose, red over white — becomes the symbol of a new England.",
            el: "Δύο μήνες μετά το Μπόσγουορθ, ο Ερρίκος Τυδώρ στέφεται στο Ουέστμινστερ ως Ερρίκος Ζ΄. Τον Ιανουάριο του 1486 παντρεύεται την Ελισάβετ του Γιορκ, ενώνοντας τους εχθρευόμενους οίκους· το έμβλημά τους — το ρόδο των Τυδώρ, κόκκινο πάνω σε λευκό — γίνεται το σύμβολο μιας νέας Αγγλίας."
          },
          extendedDescription: {
            en: "Henry's claim to the throne was thin, but his patient government was decisive. He brought the over-mighty barons to heel through bonds and recognisances, restored royal finances through the chamber system and the Court of Star Chamber, kept England out of expensive European wars, and built the Tudor navy. By his death in 1509 he had transformed the bankrupt, exhausted realm he inherited into the most solvent monarchy in Europe.",
            el: "Η διεκδίκηση του θρόνου από τον Ερρίκο ήταν ισχνή, αλλά η υπομονετική διακυβέρνησή του υπήρξε καθοριστική. Τιθάσευσε τους υπερισχυρούς βαρώνους μέσω εγγυοδικιών, αποκατέστησε τα βασιλικά οικονομικά μέσω του «θαλαμικού» συστήματος και του Δικαστηρίου του Έναστρου Θαλάμου, κράτησε την Αγγλία μακριά από δαπανηρούς ευρωπαϊκούς πολέμους και έχτισε τον στόλο των Τυδώρ. Όταν πέθανε το 1509 είχε μεταμορφώσει το χρεοκοπημένο, εξαντλημένο βασίλειο που κληρονόμησε στη φερέγγυα μοναρχία της Ευρώπης."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1509,
      era: {
        en: "Henry VIII",
        el: "Ερρίκος Η΄"
      },
      events: [
        {
          title: {
            en: "Accession of Henry VIII",
            el: "Άνοδος του Ερρίκου Η΄ στον θρόνο"
          },
          description: {
            en: "The eighteen-year-old Henry VIII inherits his father's full treasury and marries Catherine of Aragon, widow of his elder brother Arthur. The Renaissance prince — handsome, athletic, learned, devout — is hailed across Europe as a new Achilles.",
            el: "Ο δεκαοκτάχρονος Ερρίκος Η΄ κληρονομεί το γεμάτο θησαυροφυλάκιο του πατέρα του και παντρεύεται την Αικατερίνη της Αραγωνίας, χήρα του μεγαλύτερου αδελφού του Αρθούρου. Ο πρίγκιπας της Αναγέννησης — ωραίος, αθλητικός, λόγιος, ευσεβής — επευφημείται σε όλη την Ευρώπη ως νέος Αχιλλέας."
          },
          extendedDescription: {
            en: "Henry's early reign was dominated by his chief minister Cardinal Wolsey and by costly French wars in which Henry sought the glory of Agincourt. He wrote a defence of the seven sacraments against Luther in 1521 and Pope Leo X awarded him the title Fidei Defensor — Defender of the Faith — still borne by British monarchs today. The crisis of his reign was personal: Catherine bore him only one surviving child, a daughter Mary, and from about 1525 Henry became convinced that his marriage was cursed.",
            el: "Η πρώιμη βασιλεία του κυριαρχήθηκε από τον πρωθυπουργό του καρδινάλιο Γούλσι και από δαπανηρούς γαλλικούς πολέμους όπου ο Ερρίκος αναζητούσε τη δόξα του Αζινκούρ. Έγραψε υπεράσπιση των επτά μυστηρίων κατά του Λούθηρου το 1521 και ο πάπας Λέων Ι΄ του απένειμε τον τίτλο Fidei Defensor — Υπερασπιστής της Πίστεως — που ακόμη φέρουν οι Βρετανοί μονάρχες. Η κρίση της βασιλείας του ήταν προσωπική: η Αικατερίνη του γέννησε μόνο μία επιβιώσασα κόρη, τη Μαρία, και από το 1525 περίπου ο Ερρίκος πείστηκε ότι ο γάμος του ήταν καταραμένος."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1534,
      era: {
        en: "English Reformation",
        el: "Αγγλική Μεταρρύθμιση"
      },
      events: [
        {
          title: {
            en: "Act of Supremacy and the break with Rome",
            el: "Νόμος της Υπεροχής και η ρήξη με τη Ρώμη"
          },
          description: {
            en: "Refused his annulment by Pope Clement VII, Henry pushes through Parliament the Act of Supremacy, declaring himself 'the only Supreme Head in Earth of the Church of England'. Thomas More and John Fisher are executed for refusing the oath.",
            el: "Έχοντας λάβει άρνηση ακύρωσης του γάμου του από τον πάπα Κλήμη Ζ΄, ο Ερρίκος περνάει από το Κοινοβούλιο τον Νόμο της Υπεροχής, ανακηρύσσοντας τον εαυτό του «τη μοναδική Υπέρτατη Κεφαλή της Εκκλησίας της Αγγλίας επί γης». Ο Θωμάς Μορ και ο Ιωάννης Φίσερ εκτελούνται για άρνηση να ορκιστούν."
          },
          extendedDescription: {
            en: "Henry's chief minister Thomas Cromwell engineered the legal severance with consummate skill: a sequence of statutes between 1532 and 1536 transferred papal jurisdiction, papal revenue, and ecclesiastical sovereignty to the crown. The break was political rather than doctrinal — Henry remained largely Catholic in belief — but it set in motion a reformation his son would radicalise and his daughter Mary fail to reverse. Anne Boleyn was crowned queen in 1533; her daughter Elizabeth was born in September.",
            el: "Ο πρωθυπουργός του Ερρίκου Θωμάς Κρόμγουελ σχεδίασε τη νομική ρήξη με αριστοτεχνική δεξιότητα: μια σειρά νόμων μεταξύ 1532 και 1536 μετέφερε την παπική δικαιοδοσία, τα παπικά έσοδα και την εκκλησιαστική κυριαρχία στο στέμμα. Η ρήξη ήταν πολιτική και όχι δογματική — ο Ερρίκος παρέμενε σε μεγάλο βαθμό καθολικός στην πίστη — αλλά έθεσε σε κίνηση μια μεταρρύθμιση που ο γιος του θα ριζοσπαστικοποιούσε και η κόρη του Μαρία θα αποτύγχανε να αντιστρέψει. Η Άννα Μπολέιν στέφθηκε βασίλισσα το 1533· η κόρη της Ελισάβετ γεννήθηκε τον Σεπτέμβριο."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1536,
      era: {
        en: "English Reformation",
        el: "Αγγλική Μεταρρύθμιση"
      },
      events: [
        {
          title: {
            en: "Dissolution of the Monasteries",
            el: "Διάλυση των Μοναστηριών"
          },
          description: {
            en: "Beginning with smaller houses in 1536 and finishing with the great abbeys in 1540, Cromwell dissolves the religious houses of England and Wales, transferring their lands — perhaps a quarter of the wealth of the kingdom — to the crown and through it to a new gentry.",
            el: "Ξεκινώντας με τα μικρότερα ιδρύματα το 1536 και ολοκληρώνοντας με τα μεγάλα αββαεία το 1540, ο Κρόμγουελ διαλύει τα θρησκευτικά ιδρύματα της Αγγλίας και της Ουαλίας, μεταβιβάζοντας τις γαίες τους — ίσως το ένα τέταρτο του πλούτου του βασιλείου — στο στέμμα και μέσω αυτού σε μια νέα τάξη γαιοκτημόνων."
          },
          extendedDescription: {
            en: "The Dissolution was the largest transfer of property in English history before the twentieth century. It enriched the crown briefly and the gentry permanently, and it created a Protestant property interest that made the Reformation impossible to reverse. It also obliterated centuries of devotion, learning, and welfare: monastic libraries scattered, infirmaries closed, the poor thrown on parish charity. The ruined abbeys at Fountains, Tintern, and Glastonbury remain among the most haunting landscapes in England.",
            el: "Η Διάλυση υπήρξε η μεγαλύτερη μεταβίβαση περιουσίας στην αγγλική ιστορία πριν τον 20ό αιώνα. Πλούτισε στιγμιαία το στέμμα και μόνιμα την τάξη των γαιοκτημόνων, και δημιούργησε ένα προτεσταντικό περιουσιακό συμφέρον που έκανε αδύνατη την ανατροπή της Μεταρρύθμισης. Επίσης εξαφάνισε αιώνες ευλάβειας, παιδείας και φιλανθρωπίας: μοναστηριακές βιβλιοθήκες διασκορπίστηκαν, νοσοκομεία έκλεισαν, οι φτωχοί ρίχτηκαν στην ενοριακή ελεημοσύνη. Τα ερειπωμένα αββαεία στο Φάουντινς, στο Τίντερν και στο Γκλάστονμπερι παραμένουν από τα πιο στοιχειωμένα τοπία της Αγγλίας."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1558,
      era: {
        en: "Elizabethan Age",
        el: "Εποχή της Ελισάβετ"
      },
      events: [
        {
          title: {
            en: "Accession of Elizabeth I",
            el: "Άνοδος της Ελισάβετ Α΄ στον θρόνο"
          },
          description: {
            en: "On the death of her Catholic half-sister Mary I, the twenty-five-year-old Elizabeth Tudor inherits a divided kingdom. Her Religious Settlement of 1559 establishes a moderate Protestant Church of England that will hold for centuries.",
            el: "Με τον θάνατο της καθολικής ετεροθαλούς αδελφής της Μαρίας Α΄, η εικοσιπεντάχρονη Ελισάβετ Τυδώρ κληρονομεί ένα διχασμένο βασίλειο. Ο Θρησκευτικός Διακανονισμός της το 1559 εγκαθιδρύει μια μετριοπαθή προτεσταντική Εκκλησία της Αγγλίας που θα διατηρηθεί για αιώνες."
          },
          extendedDescription: {
            en: "Mary's three-year reign had burned nearly three hundred Protestants at the stake — the 'Marian persecutions' that John Foxe's Book of Martyrs would imprint on the Protestant imagination. Elizabeth avoided her sister's zealotry and her father's matrimonial chaos: refusing to marry, she made herself the Virgin Queen, married symbolically to her kingdom. Her forty-four-year reign coincided with Shakespeare, Marlowe, Spenser, Byrd, Hilliard, and the seafaring of Drake, Hawkins, and Raleigh — the founding age of English literature and English sea-power.",
            el: "Η τρίχρονη βασιλεία της Μαρίας είχε στείλει στην πυρά σχεδόν τριακόσιους προτεστάντες — οι «μαριανές διώξεις» που το Βιβλίο των Μαρτύρων του Τζων Φοξ θα αποτύπωνε στην προτεσταντική φαντασία. Η Ελισάβετ απέφυγε τον ζηλωτισμό της αδελφής της και το συζυγικό χάος του πατέρα της: αρνούμενη να παντρευτεί, έκανε τον εαυτό της Παρθένα Βασίλισσα, συμβολικά νυμφευμένη με το βασίλειό της. Η σαραντατετραετής βασιλεία της συνέπεσε με τους Σαίξπηρ, Μάρλοου, Σπένσερ, Μπερντ, Χίλιαρντ και τις θαλάσσιες εξορμήσεις των Ντρέικ, Χόκινς και Ράλι — η ιδρυτική εποχή της αγγλικής λογοτεχνίας και της αγγλικής ναυτικής ισχύος."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1587,
      era: {
        en: "Elizabethan Age",
        el: "Εποχή της Ελισάβετ"
      },
      events: [
        {
          title: {
            en: "Execution of Mary, Queen of Scots",
            el: "Εκτέλεση της Μαρίας Στιούαρτ"
          },
          description: {
            en: "After nineteen years of English captivity and a string of plots in her name, Mary Stuart — Catholic, deposed queen of Scots, granddaughter of Henry VII — is beheaded at Fotheringhay Castle on 8 February. Elizabeth signed the warrant; she would later claim she had not meant it to be acted on.",
            el: "Μετά από δεκαεννέα χρόνια αγγλικής αιχμαλωσίας και σειρά συνωμοσιών στο όνομά της, η Μαρία Στιούαρτ — καθολική, εκθρονισμένη βασίλισσα των Σκώτων, εγγονή του Ερρίκου Ζ΄ — αποκεφαλίζεται στο κάστρο του Φόθερινγκχεϊ στις 8 Φεβρουαρίου. Η Ελισάβετ είχε υπογράψει το ένταλμα· αργότερα θα ισχυριζόταν ότι δεν είχε εννοήσει να εκτελεστεί."
          },
          extendedDescription: {
            en: "Mary's execution removed the most plausible Catholic claimant to Elizabeth's throne and infuriated Philip II of Spain, who had long contemplated an invasion of England. Philip's preparations accelerated within months. Yet Mary had also, in 1566, given birth to a son, James — raised a Protestant in Scotland, and the man who would eventually unite the crowns of the two kingdoms in his own person.",
            el: "Η εκτέλεση της Μαρίας απομάκρυνε τον πιο πιθανό καθολικό διεκδικητή του θρόνου της Ελισάβετ και εξόργισε τον Φίλιππο Β΄ της Ισπανίας, που είχε για καιρό μελετήσει εισβολή στην Αγγλία. Οι προετοιμασίες του Φιλίππου επιταχύνθηκαν μέσα σε μήνες. Ωστόσο η Μαρία είχε επίσης γεννήσει το 1566 έναν γιο, τον Ιάκωβο — που μεγάλωσε ως προτεστάντης στη Σκωτία και που τελικά θα ένωνε τα στέμματα των δύο βασιλείων στο πρόσωπό του."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1588,
      era: {
        en: "Elizabethan Age",
        el: "Εποχή της Ελισάβετ"
      },
      events: [
        {
          title: {
            en: "Defeat of the Spanish Armada",
            el: "Ήττα της Ισπανικής Αρμάδας"
          },
          description: {
            en: "In July and August an Armada of 130 ships and 30,000 men, sent by Philip II to invade England, is harried up the Channel by Howard, Drake, and Hawkins, scattered by fireships at Calais, mauled at Gravelines, and finally destroyed by Atlantic storms off Ireland.",
            el: "Τον Ιούλιο και τον Αύγουστο μια Αρμάδα 130 πλοίων και 30.000 ανδρών, σταλμένη από τον Φίλιππο Β΄ να εισβάλει στην Αγγλία, παρενοχλείται κατά μήκος της Μάγχης από τους Χάουαρντ, Ντρέικ και Χόκινς, διασκορπίζεται από πυρπολικά στο Καλαί, καταπονείται στις Γκραβλίν και τελικά καταστρέφεται από ατλαντικές καταιγίδες κοντά στην Ιρλανδία."
          },
          extendedDescription: {
            en: "Elizabeth's speech to her troops at Tilbury — 'I know I have the body of a weak and feeble woman, but I have the heart and stomach of a king' — became the founding rhetoric of English martial nationhood. The Armada's failure was due less to English gunnery than to weather and Spanish logistical strain, but its political effect was immense: it preserved Protestant England, broke Spanish naval prestige, and launched the legend of Britannia ruling the waves. The war with Spain would drag on inconclusively until 1604.",
            el: "Η ομιλία της Ελισάβετ στα στρατεύματά της στο Τίλμπερι — «Γνωρίζω ότι έχω το σώμα μιας αδύναμης γυναίκας, αλλά έχω την καρδιά και την τόλμη ενός βασιλιά» — έγινε η ιδρυτική ρητορική της αγγλικής πολεμικής εθνότητας. Η αποτυχία της Αρμάδας οφειλόταν λιγότερο στο αγγλικό πυροβολικό και περισσότερο στον καιρό και στην ισπανική εφοδιαστική πίεση, αλλά το πολιτικό της αποτέλεσμα ήταν τεράστιο: διέσωσε την προτεσταντική Αγγλία, έσπασε τη ναυτική φήμη της Ισπανίας και ξεκίνησε τον θρύλο της Βρετανίας που κυριαρχεί στις θάλασσες. Ο πόλεμος με την Ισπανία θα συνεχιζόταν αδιέξοδα μέχρι το 1604."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1603,
      era: {
        en: "Union of the Crowns",
        el: "Ένωση των Στεμμάτων"
      },
      events: [
        {
          title: {
            en: "Union of the Crowns under James I",
            el: "Ένωση των Στεμμάτων υπό τον Ιάκωβο Α΄"
          },
          description: {
            en: "Childless and dying, Elizabeth I names James VI of Scotland as her heir. He rides south to be crowned James I of England, uniting the crowns of the two ancient enemies — though not yet their parliaments — in his own person.",
            el: "Άτεκνη και ετοιμοθάνατη, η Ελισάβετ Α΄ ονομάζει διάδοχό της τον Ιάκωβο ΣΤ΄ της Σκωτίας. Εκείνος κατεβαίνει στον νότο για να στεφθεί Ιάκωβος Α΄ της Αγγλίας, ενώνοντας τα στέμματα των δύο αρχαίων εχθρών — αν και όχι ακόμη τα κοινοβούλιά τους — στο πρόσωπό του."
          },
          extendedDescription: {
            en: "James was the great-great-grandson of Henry VII, a learned author of treatises on witchcraft, kingship (Basilikon Doron), and tobacco (which he loathed), and the son of the queen Elizabeth had executed. His succession passed peacefully, ending Tudor anxieties about civil war. He proposed a deeper union of the kingdoms; English parliament refused. The new style 'Great Britain' was used on coinage but not yet in law. James's son Charles would prove less skilled at managing the multiple kingdoms he inherited.",
            el: "Ο Ιάκωβος ήταν δισέγγονος του Ερρίκου Ζ΄, λόγιος συγγραφέας πραγματειών για τη μαγεία, τη βασιλεία (Basilikon Doron) και τον καπνό (που απεχθανόταν), και γιος της βασίλισσας που είχε εκτελέσει η Ελισάβετ. Η διαδοχή του πέρασε ειρηνικά, τερματίζοντας τις αγωνίες των Τυδώρ για εμφύλιο. Πρότεινε βαθύτερη ένωση των βασιλείων· το αγγλικό Κοινοβούλιο αρνήθηκε. Ο νέος τίτλος «Μεγάλη Βρετανία» χρησιμοποιήθηκε στα νομίσματα αλλά όχι ακόμη στον νόμο. Ο γιος του Ιακώβου Κάρολος θα αποδεικνυόταν λιγότερο επιδέξιος στη διαχείριση των πολλαπλών βασιλείων που κληρονόμησε."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1605,
      era: {
        en: "Jacobean England",
        el: "Ιακώβεια Αγγλία"
      },
      events: [
        {
          title: {
            en: "Gunpowder Plot",
            el: "Συνωμοσία του Μπαρουτιού"
          },
          description: {
            en: "On 5 November Guy Fawkes is discovered beneath the House of Lords with thirty-six barrels of gunpowder. The plot of a small group of Catholic gentry to blow up king and Parliament at the state opening is foiled; the conspirators are hunted down and executed.",
            el: "Στις 5 Νοεμβρίου ο Γκάι Φοκς ανακαλύπτεται κάτω από τη Βουλή των Λόρδων με τριάντα έξι βαρέλια μπαρούτι. Η συνωμοσία μιας μικρής ομάδας καθολικών ευγενών να ανατινάξουν τον βασιλιά και το Κοινοβούλιο στην επίσημη έναρξη της συνόδου ματαιώνεται· οι συνωμότες κυνηγούνται και εκτελούνται."
          },
          extendedDescription: {
            en: "The plot's failure unleashed a fresh wave of anti-Catholic legislation: an oath of allegiance designed to be unswearable by loyal Catholics, fines, exclusion from the professions, recusancy returns. It also forged a national festival: Bonfire Night, still celebrated every 5 November, with effigies of Fawkes burned in the streets. The conspirator's mask, by an accident of twenty-first-century cinema, would much later become the global icon of anonymous protest.",
            el: "Η αποτυχία της συνωμοσίας απελευθέρωσε ένα νέο κύμα αντικαθολικής νομοθεσίας: όρκος πίστης σχεδιασμένος να μην μπορεί να δοθεί από πιστούς καθολικούς, πρόστιμα, αποκλεισμός από τα επαγγέλματα, αρχεία recusancy. Δημιούργησε επίσης μια εθνική γιορτή: η «Νύχτα των Πυρών», που γιορτάζεται ακόμη κάθε 5η Νοεμβρίου με ομοιώματα του Φοκς να καίγονται στους δρόμους. Η μάσκα του συνωμότη, από κινηματογραφικό ατύχημα του 21ου αιώνα, θα γινόταν πολύ αργότερα παγκόσμιο εικονοσύμβολο της ανώνυμης διαμαρτυρίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1611,
      era: {
        en: "Jacobean England",
        el: "Ιακώβεια Αγγλία"
      },
      events: [
        {
          title: {
            en: "King James Bible published",
            el: "Δημοσίευση της Βίβλου του Βασιλέως Ιακώβου"
          },
          description: {
            en: "Six committees of forty-seven scholars, working at Oxford, Cambridge, and Westminster for seven years, produce the Authorised Version of the Bible. It will dominate English religion and prose for three hundred years.",
            el: "Έξι επιτροπές με σαράντα επτά λογίους, εργαζόμενες στην Οξφόρδη, το Κέιμπριτζ και το Ουέστμινστερ για επτά χρόνια, παράγουν την Επίσημη Έκδοση της Βίβλου. Θα κυριαρχήσει στην αγγλική θρησκεία και πεζογραφία για τριακόσια χρόνια."
          },
          extendedDescription: {
            en: "The translators drew heavily on the work of William Tyndale, burned a heretic in 1536, whose phrases — 'salt of the earth', 'powers that be', 'the apple of his eye' — have entered the English language. The King James Version's combination of dignity, simplicity, and rhythm shaped the prose of Bunyan, Milton, the metaphysical poets, the Romantics, and twentieth-century writers from Lincoln to Martin Luther King. With Shakespeare's First Folio of 1623 it forms one of the two pillars of literary English.",
            el: "Οι μεταφραστές βασίστηκαν σε μεγάλο βαθμό στο έργο του Γουίλιαμ Τίντεϊλ, που είχε καεί ως αιρετικός το 1536, του οποίου οι φράσεις — «το αλάτι της γης», «οι ισχύουσες αρχές», «η κόρη του ματιού του» — έχουν περάσει στην αγγλική γλώσσα. Ο συνδυασμός αξιοπρέπειας, απλότητας και ρυθμού της Βίβλου του Βασιλέως Ιακώβου διαμόρφωσε την πρόζα του Μπάνιαν, του Μίλτον, των μεταφυσικών ποιητών, των Ρομαντικών και συγγραφέων του 20ού αιώνα από τον Λίνκολν έως τον Μάρτιν Λούθερ Κινγκ. Μαζί με το First Folio του Σαίξπηρ το 1623 αποτελεί έναν από τους δύο στύλους της λογοτεχνικής αγγλικής γλώσσας."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1620,
      era: {
        en: "Colonial Expansion",
        el: "Αποικιακή Επέκταση"
      },
      events: [
        {
          title: {
            en: "The Mayflower lands at Plymouth",
            el: "Το Μέιφλαουερ αποβιβάζεται στο Πλίμουθ"
          },
          description: {
            en: "After a sixty-six-day Atlantic crossing, 102 English separatists land at Cape Cod and found Plymouth Colony in New England. Before disembarking they sign the Mayflower Compact, agreeing to form a 'civil body politic' under majority rule.",
            el: "Μετά από εξήντα έξι ημέρες διάπλου του Ατλαντικού, 102 Άγγλοι αποσχιστές αποβιβάζονται στο Κέιπ Κοντ και ιδρύουν την αποικία του Πλίμουθ στη Νέα Αγγλία. Πριν αποβιβαστούν, υπογράφουν τη Συμφωνία του Μέιφλαουερ, συμφωνώντας να σχηματίσουν ένα «πολιτικό σώμα» υπό την αρχή της πλειοψηφίας."
          },
          extendedDescription: {
            en: "Plymouth was the second permanent English settlement in North America, founded thirteen years after Jamestown in Virginia (1607). It was a small, religious colony, soon overshadowed by the larger Massachusetts Bay settlement of 1630. But the Mayflower Pilgrims gave English America its founding myth: the first Thanksgiving in 1621 became, after a long delay, a national festival of the United States. Across the seventeenth century English settlers, planters, indentured servants, and African slaves populated colonies from Newfoundland to Barbados.",
            el: "Το Πλίμουθ ήταν ο δεύτερος μόνιμος αγγλικός οικισμός στη Βόρεια Αμερική, ιδρυμένος δεκατρία χρόνια μετά το Τζέιμσταουν στη Βιρτζίνια (1607). Ήταν μια μικρή θρησκευτική αποικία, που σύντομα επισκιάστηκε από τη μεγαλύτερη αποικία του κόλπου της Μασαχουσέτης το 1630. Αλλά οι Προσκυνητές του Μέιφλαουερ έδωσαν στην αγγλική Αμερική τον ιδρυτικό της μύθο: οι πρώτες Ευχαριστίες του 1621 έγιναν, μετά από μεγάλη καθυστέρηση, εθνική γιορτή των Ηνωμένων Πολιτειών. Στη διάρκεια του 17ου αιώνα Άγγλοι έποικοι, φυτευτές, συμβατικοί δούλοι και Αφρικανοί σκλάβοι εποίκισαν αποικίες από τη Νέα Γη έως τα Μπαρμπάντος."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1642,
      era: {
        en: "English Civil War",
        el: "Αγγλικός Εμφύλιος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Civil War breaks out",
            el: "Ξεσπά ο Εμφύλιος Πόλεμος"
          },
          description: {
            en: "After eleven years of personal rule without Parliament and a failed attempt to arrest five members in the Commons, Charles I raises his standard at Nottingham in August. England divides between Royalist Cavaliers and Parliamentarian Roundheads.",
            el: "Μετά από έντεκα χρόνια προσωπικής διακυβέρνησης χωρίς Κοινοβούλιο και μια αποτυχημένη απόπειρα να συλλάβει πέντε μέλη στη Βουλή των Κοινοτήτων, ο Κάρολος Α΄ υψώνει το βασιλικό λάβαρό του στο Νότιγχαμ τον Αύγουστο. Η Αγγλία διαιρείται μεταξύ Βασιλικών Καβαλιέρων και Κοινοβουλευτικών Στρογγυλοκέφαλων."
          },
          extendedDescription: {
            en: "The conflict was the most catastrophic in English history before the twentieth century: perhaps one in twenty of the population died in the three civil wars and related campaigns in Scotland and Ireland, a higher proportional toll than the First World War. The New Model Army, raised by Parliament in 1645 and led by Sir Thomas Fairfax and Oliver Cromwell, decided the issue at Naseby. Charles surrendered in 1646 and a second war in 1648 ended in his trial and execution.",
            el: "Η σύγκρουση υπήρξε η πιο καταστροφική στην αγγλική ιστορία πριν τον 20ό αιώνα: ίσως ένας στους είκοσι του πληθυσμού πέθανε στους τρεις εμφυλίους και τις σχετικές εκστρατείες στη Σκωτία και την Ιρλανδία, αναλογικά υψηλότερο τίμημα από τον Α΄ Παγκόσμιο Πόλεμο. Ο Νέος Πρότυπος Στρατός, που σήκωσε το Κοινοβούλιο το 1645 υπό τους Σερ Τόμας Φέρφαξ και Όλιβερ Κρόμγουελ, έκρινε την έκβαση στο Νέιζμπι. Ο Κάρολος παραδόθηκε το 1646 και ένας δεύτερος πόλεμος το 1648 κατέληξε στη δίκη και την εκτέλεσή του."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1649,
      era: {
        en: "Commonwealth",
        el: "Κοινοπολιτεία"
      },
      events: [
        {
          title: {
            en: "Execution of Charles I",
            el: "Εκτέλεση του Καρόλου Α΄"
          },
          description: {
            en: "On 30 January Charles I, having refused to recognise the court trying him, is beheaded on a scaffold outside the Banqueting House at Whitehall. Parliament abolishes the monarchy and the House of Lords; England is declared a Commonwealth — a republic.",
            el: "Στις 30 Ιανουαρίου ο Κάρολος Α΄, αρνούμενος να αναγνωρίσει το δικαστήριο που τον δικάζει, αποκεφαλίζεται σε ικρίωμα έξω από το Banqueting House του Γουάιτχολ. Το Κοινοβούλιο καταργεί τη μοναρχία και τη Βουλή των Λόρδων· η Αγγλία ανακηρύσσεται Κοινοπολιτεία — δημοκρατία."
          },
          extendedDescription: {
            en: "The judicial killing of an anointed king was without precedent in European history. Charles wore two shirts to the scaffold so that he might not shiver and seem to flinch; he addressed a few words to the crowd, prayed, and laid his head on the block. The shock reverberated across Europe and steeled monarchies against constitutional encroachment for a generation. For the next eleven years England would be ruled, in different forms, by Oliver Cromwell.",
            el: "Η δικαστική θανάτωση ενός κεχρισμένου βασιλιά ήταν άνευ προηγουμένου στην ευρωπαϊκή ιστορία. Ο Κάρολος φόρεσε δύο πουκάμισα στο ικρίωμα ώστε να μην ριγήσει και φανεί ότι δείλιασε· απηύθυνε λίγα λόγια στο πλήθος, προσευχήθηκε και ακούμπησε το κεφάλι του στο κούτσουρο. Το σοκ αντήχησε σε όλη την Ευρώπη και θωράκισε τις μοναρχίες ενάντια σε συνταγματικές παρεμβάσεις για μια γενιά. Για τα επόμενα έντεκα χρόνια η Αγγλία θα κυβερνιόταν, σε διαφορετικές μορφές, από τον Όλιβερ Κρόμγουελ."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1653,
      era: {
        en: "Protectorate",
        el: "Προστασία"
      },
      events: [
        {
          title: {
            en: "Cromwell becomes Lord Protector",
            el: "Ο Κρόμγουελ γίνεται Λόρδος Προστάτης"
          },
          description: {
            en: "After dissolving the Rump Parliament at sword-point in April and seeing the Barebones Parliament dissolve itself in December, Oliver Cromwell accepts the title of Lord Protector under a written constitution, the Instrument of Government — the first and only such document in English history.",
            el: "Αφού διαλύει το Rump Parliament με τη βία τον Απρίλιο και βλέπει το Barebones Parliament να αυτοδιαλύεται τον Δεκέμβριο, ο Όλιβερ Κρόμγουελ δέχεται τον τίτλο του Λόρδου Προστάτη υπό ένα γραπτό σύνταγμα, το Όργανο Διακυβέρνησης — το πρώτο και μοναδικό τέτοιο έγγραφο στην αγγλική ιστορία."
          },
          extendedDescription: {
            en: "Cromwell's five-year rule was severe at home — censorship, prohibition of Christmas as popish, brutal subjugation of Ireland at Drogheda and Wexford in 1649-50 — and assertive abroad, defeating the Dutch at sea, conquering Jamaica from Spain, readmitting the Jews to England after centuries of exclusion. He refused the crown in 1657 but kept many of its trappings. After his death in 1658 the Protectorate collapsed within eighteen months under his son Richard, and General George Monck marched south to engineer the king's return.",
            el: "Η πενταετής διακυβέρνηση του Κρόμγουελ ήταν αυστηρή στο εσωτερικό — λογοκρισία, απαγόρευση των Χριστουγέννων ως παπιστικών, βάναυση καθυπόταξη της Ιρλανδίας στο Ντρόγκεντα και στο Γουέξφορντ το 1649-50 — και επιθετική στο εξωτερικό, νικώντας τους Ολλανδούς στη θάλασσα, κατακτώντας την Τζαμάικα από την Ισπανία, ξαναδεχόμενος τους Εβραίους στην Αγγλία μετά από αιώνες αποκλεισμού. Αρνήθηκε το στέμμα το 1657 αλλά κράτησε πολλά από τα γνωρίσματά του. Μετά τον θάνατό του το 1658 το Προτεκτοράτο κατέρρευσε μέσα σε δεκαοκτώ μήνες υπό τον γιο του Ρίτσαρντ, και ο στρατηγός Τζορτζ Μονκ προέλασε νότια για να μηχανεύσει την επιστροφή του βασιλιά."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1660,
      era: {
        en: "Restoration",
        el: "Παλινόρθωση"
      },
      events: [
        {
          title: {
            en: "Restoration of Charles II",
            el: "Παλινόρθωση του Καρόλου Β΄"
          },
          description: {
            en: "On 29 May, his thirtieth birthday, Charles II rides into London to scenes of national rejoicing. The monarchy, the Lords, and the Church of England are restored; the theatres reopen; a Cavalier Parliament settles old scores.",
            el: "Στις 29 Μαΐου, την τριακοστή του γενέθλιο ημέρα, ο Κάρολος Β΄ μπαίνει στο Λονδίνο μέσα σε σκηνές εθνικής ευθυμίας. Η μοναρχία, οι Λόρδοι και η Εκκλησία της Αγγλίας αποκαθίστανται· τα θέατρα ξανανοίγουν· ένα κοινοβούλιο Καβαλιέρων ξεκαθαρίζει παλιούς λογαριασμούς."
          },
          extendedDescription: {
            en: "The Restoration was a settlement as much as a return: Charles agreed at Breda to a general pardon (with exceptions for the regicides, several of whom were hanged, drawn, and quartered), to religious toleration in principle, and to parliamentary control of taxation. Cromwell's body was disinterred and posthumously hanged; the Bare Bones zealots gave way to the wit and licence of the Restoration court. Pepys's diary, Wren's London, Newton's Cambridge, Dryden's verse — the long English Renaissance had its second wind.",
            el: "Η Παλινόρθωση ήταν διακανονισμός όσο και επιστροφή: ο Κάρολος συμφώνησε στην Μπρέντα σε γενική αμνηστία (με εξαιρέσεις για τους βασιλοκτόνους, πολλοί από τους οποίους κρεμάστηκαν, σύρθηκαν και τετραμελίστηκαν), σε θρησκευτική ανοχή κατ' αρχήν, και σε κοινοβουλευτικό έλεγχο της φορολογίας. Το σώμα του Κρόμγουελ ξεθάφτηκε και κρεμάστηκε μεταθανατίως· οι ζηλωτές παραχώρησαν τη θέση τους στο πνεύμα και την ελευθεριότητα της αυλής της Παλινόρθωσης. Το Ημερολόγιο του Πεπς, το Λονδίνο του Ρεν, το Κέιμπριτζ του Νεύτωνα, ο στίχος του Ντράιντεν — η μακρά αγγλική Αναγέννηση πήρε δεύτερη πνοή."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1666,
      era: {
        en: "Restoration",
        el: "Παλινόρθωση"
      },
      events: [
        {
          title: {
            en: "Great Fire of London",
            el: "Μεγάλη Πυρκαγιά του Λονδίνου"
          },
          description: {
            en: "In the early hours of 2 September a fire breaks out in Pudding Lane and rages for four days through the medieval City of London. Eighty-seven parish churches, including Old St Paul's, and around 13,200 houses are destroyed; remarkably, only a handful of people are confirmed dead.",
            el: "Τις πρώτες ώρες της 2ας Σεπτεμβρίου ξεσπά πυρκαγιά στο Πούντινγκ Λέιν και μαίνεται για τέσσερις ημέρες μέσα από τη μεσαιωνική Πόλη του Λονδίνου. Ογδόντα επτά ενοριακοί ναοί, συμπεριλαμβανομένου του παλιού Αγίου Παύλου, και περίπου 13.200 σπίτια καταστρέφονται· εντυπωσιακά, μόνο μια χούφτα νεκροί επιβεβαιώνεται."
          },
          extendedDescription: {
            en: "The fire followed a year of plague — the last major outbreak in England, which had killed perhaps 100,000 Londoners in 1665. Together they reshaped the capital: Christopher Wren's plan for a baroque rebuilt city was rejected as too ambitious, but he was commissioned to design fifty-one new churches, of which St Paul's Cathedral (1675-1710) is the masterpiece. Building regulations after the fire required brick rather than timber and wider streets — an early step toward the modern city.",
            el: "Η πυρκαγιά ακολούθησε μια χρονιά πανώλης — την τελευταία μεγάλη επιδημία στην Αγγλία, που είχε σκοτώσει ίσως 100.000 Λονδρέζους το 1665. Μαζί αναμόρφωσαν την πρωτεύουσα: το σχέδιο του Κρίστοφερ Ρεν για μια μπαρόκ ανοικοδομημένη πόλη απορρίφθηκε ως υπερβολικά φιλόδοξο, αλλά του ανατέθηκε ο σχεδιασμός πενήντα ενός νέων ναών, με αριστούργημα τον Καθεδρικό του Αγίου Παύλου (1675-1710). Οι νέες οικοδομικές διατάξεις μετά την πυρκαγιά απαιτούσαν τούβλο αντί ξύλου και πλατύτερους δρόμους — πρώτο βήμα προς τη σύγχρονη πόλη."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1688,
      era: {
        en: "Glorious Revolution",
        el: "Ένδοξη Επανάσταση"
      },
      events: [
        {
          title: {
            en: "The Glorious Revolution",
            el: "Η Ένδοξη Επανάσταση"
          },
          description: {
            en: "Alarmed by the Catholic policies of James II and the birth of his son, seven leading politicians invite William of Orange, the Protestant Stadtholder of Holland and James's son-in-law, to invade. William lands at Brixham in Devon in November with a Dutch army; James flees to France.",
            el: "Ανήσυχοι από την καθολική πολιτική του Ιακώβου Β΄ και τη γέννηση του γιου του, επτά κορυφαίοι πολιτικοί προσκαλούν τον Γουλιέλμο της Οράγγης, τον προτεστάντη Σταδχόλδερ της Ολλανδίας και γαμπρό του Ιακώβου, να εισβάλει. Ο Γουλιέλμος αποβιβάζεται στο Μπρίξαμ του Ντέβον τον Νοέμβριο με ολλανδικό στρατό· ο Ιάκωβος δραπετεύει στη Γαλλία."
          },
          extendedDescription: {
            en: "William and his wife Mary, James's elder Protestant daughter, accepted the crown jointly in 1689 on terms set by a Convention Parliament — terms enshrined in the Bill of Rights that same year. The Bill outlawed royal suspension of laws, taxation without parliamentary consent, and a standing army in peacetime; it guaranteed the right to petition the crown and free elections. Together with the Toleration Act (1689) it laid the constitutional foundations of modern Britain. James's Catholic resistance in Ireland was crushed at the Boyne in 1690.",
            el: "Ο Γουλιέλμος και η σύζυγός του Μαρία, μεγαλύτερη προτεστάντισσα κόρη του Ιακώβου, αποδέχθηκαν το στέμμα από κοινού το 1689 με όρους που έθεσε ένα Συντακτικό Κοινοβούλιο — όρους που κατοχυρώθηκαν στη Διακήρυξη των Δικαιωμάτων του ίδιου χρόνου. Η Διακήρυξη απαγόρευσε τη βασιλική αναστολή νόμων, τη φορολογία χωρίς κοινοβουλευτική συγκατάθεση και τον μόνιμο στρατό σε καιρό ειρήνης· εγγυήθηκε το δικαίωμα αναφοράς προς το στέμμα και τις ελεύθερες εκλογές. Μαζί με τον Νόμο της Ανοχής (1689) έθεσε τα συνταγματικά θεμέλια της σύγχρονης Βρετανίας. Η καθολική αντίσταση του Ιακώβου στην Ιρλανδία συνετρίβη στον Μπόιν το 1690."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1707,
      era: {
        en: "Acts of Union",
        el: "Νόμοι της Ένωσης"
      },
      events: [
        {
          title: {
            en: "Acts of Union: Great Britain is born",
            el: "Νόμοι της Ένωσης: Γεννιέται η Μεγάλη Βρετανία"
          },
          description: {
            en: "After parallel Acts in London and Edinburgh, on 1 May the Kingdoms of England and Scotland are merged into the single Kingdom of Great Britain. A new Union Jack flag, combining the crosses of St George and St Andrew, flies over a single Parliament at Westminster.",
            el: "Μετά από παράλληλους νόμους στο Λονδίνο και το Εδιμβούργο, την 1η Μαΐου τα Βασίλεια της Αγγλίας και της Σκωτίας συγχωνεύονται στο ενιαίο Βασίλειο της Μεγάλης Βρετανίας. Μια νέα σημαία Union Jack, συνδυάζοντας τους σταυρούς του Αγίου Γεωργίου και του Αγίου Ανδρέα, κυματίζει πάνω από ένα ενιαίο Κοινοβούλιο στο Ουέστμινστερ."
          },
          extendedDescription: {
            en: "The Union was driven by the Hanoverian succession problem and by Scottish financial collapse after the disastrous Darien colony in Panama. Forty-five Scottish MPs and sixteen elected Scottish peers entered Westminster; Scotland kept its own legal system, Presbyterian church, and education. The Scottish poet Robert Burns would later lament that the country had been 'bought and sold for English gold'. But the Union opened the colonial empire to Scottish enterprise, and the Scottish Enlightenment of Hume, Smith, and Hutton would soon flower.",
            el: "Η Ένωση οδηγήθηκε από το πρόβλημα της διαδοχής των Ανοβεριανών και από την οικονομική κατάρρευση της Σκωτίας μετά την καταστροφική αποικία του Νταριέν στον Παναμά. Σαράντα πέντε Σκώτοι βουλευτές και δεκαέξι εκλεγμένοι Σκώτοι ομότιμοι μπήκαν στο Ουέστμινστερ· η Σκωτία κράτησε δικό της νομικό σύστημα, πρεσβυτεριανή εκκλησία και εκπαίδευση. Ο Σκώτος ποιητής Ρόμπερτ Μπερνς θα θρηνούσε αργότερα ότι η χώρα είχε «πουληθεί και αγοραστεί για αγγλικό χρυσό». Όμως η Ένωση άνοιξε την αποικιακή αυτοκρατορία στη σκωτική επιχειρηματικότητα, και ο Σκωτικός Διαφωτισμός των Χιουμ, Σμιθ και Χάτον σύντομα θα ανθούσε."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1714,
      era: {
        en: "Hanoverian Succession",
        el: "Διαδοχή των Ανοβεριανών"
      },
      events: [
        {
          title: {
            en: "Death of Anne and Hanoverian succession",
            el: "Θάνατος της Άννας και διαδοχή των Ανοβεριανών"
          },
          description: {
            en: "Queen Anne, the last Stuart monarch, dies on 1 August having outlived all seventeen of her pregnancies. By the Act of Settlement (1701) the crown passes over fifty-seven Catholic claimants to the Protestant Georg Ludwig, Elector of Hanover, who arrives in September as King George I.",
            el: "Η βασίλισσα Άννα, η τελευταία μονάρχης του οίκου των Στιούαρτ, πεθαίνει την 1η Αυγούστου έχοντας επιβιώσει και από τις δεκαεπτά εγκυμοσύνες της. Με τον Νόμο του Διακανονισμού (1701) το στέμμα προσπερνά πενήντα επτά καθολικούς διεκδικητές και περνά στον προτεστάντη Γκέοργκ Λούντβιγκ, Εκλέκτορα του Ανόβερου, που φτάνει τον Σεπτέμβριο ως βασιλιάς Γεώργιος Α΄."
          },
          extendedDescription: {
            en: "George I spoke little English and preferred his German ministers; he never visited his Hanoverian electorate without longing for return. The political consequence was the rise of the cabinet, presided over from 1721 by Sir Robert Walpole — Britain's first 'prime minister' in the modern sense — and a long Whig ascendancy. The Hanoverian line would see Britain through the loss of America, the wars against Napoleon, and the building of the second British Empire. Early Modern Britain has ended; the long eighteenth century begins.",
            el: "Ο Γεώργιος Α΄ μιλούσε λίγα αγγλικά και προτιμούσε τους Γερμανούς υπουργούς του· δεν επισκεπτόταν ποτέ τον Ανοβεριανό εκλεκτορικό του τόπο χωρίς να λαχταρά να επιστρέψει. Η πολιτική συνέπεια ήταν η άνοδος του υπουργικού συμβουλίου, υπό την προεδρία από το 1721 του Σερ Ρόμπερτ Γουόλπολ — του πρώτου «πρωθυπουργού» της Βρετανίας με τη σύγχρονη έννοια — και μια μακρά υπεροχή των Ουίγων. Η γραμμή των Ανοβεριανών θα οδηγούσε τη Βρετανία μέσα από την απώλεια της Αμερικής, τους πολέμους κατά του Ναπολέοντος και την οικοδόμηση της δεύτερης Βρετανικής Αυτοκρατορίας. Η Πρώιμη Νεωτερική Βρετανία τελείωσε· ο μακρύς 18ος αιώνας αρχίζει."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
