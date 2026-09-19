/** Hellenistic Judea & the Maccabees — Ελληνιστική Ιουδαία & οι Μακκαβαίοι · Ancient Levant */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const HELLENISTIC_JUDEA_MACCABEES = {
  id: "hellenistic-judea-maccabees" as const,
  label: {
    en: "Hellenistic Judea & the Maccabees",
    el: "Ελληνιστική Ιουδαία & οι Μακκαβαίοι"
  },
  supertitle: {
    en: "The Ancient Levant",
    el: "Ο Αρχαίος Λεβάντες"
  },
  title: {
    en: "Hellenistic Judea & the Maccabees",
    el: "Ελληνιστική Ιουδαία & οι Μακκαβαίοι"
  },
  subtitle: {
    en: "Caught between the Greek kingdoms of Egypt and Syria, Judea wrestled with the seductive power of Greek culture. When a Seleucid king tried to stamp out the Jewish religion, the Maccabees rose in revolt, won back the Temple, and forged an independent Jewish kingdom for the first time in four centuries — until Rome arrived. Slide across the Hellenistic age of the Jews.",
    el: "Παγιδευμένη ανάμεσα στα ελληνικά βασίλεια της Αιγύπτου και της Συρίας, η Ιουδαία πάλεψε με τη σαγηνευτική δύναμη του ελληνικού πολιτισμού. Όταν ένας Σελευκίδης βασιλιάς προσπάθησε να εξαλείψει την ιουδαϊκή θρησκεία, οι Μακκαβαίοι ξεσηκώθηκαν, ανέκτησαν τον Ναό και σφυρηλάτησαν ένα ανεξάρτητο ιουδαϊκό βασίλειο για πρώτη φορά έπειτα από τέσσερις αιώνες — ώσπου έφτασε η Ρώμη. Μετακινηθείτε στην ελληνιστική εποχή των Ιουδαίων."
  },
  menuDescription: {
    en: "The Septuagint, the Maccabean Revolt, and the Hasmonean kingdom.",
    el: "Η Μετάφραση των Εβδομήκοντα, η επανάσταση των Μακκαβαίων και το βασίλειο των Ασμοναίων."
  },
  footerLabel: {
    en: "Hellenistic Judea · 320-63 BC",
    el: "Ελληνιστική Ιουδαία · 320-63 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Hellenistic Judea & the Maccabees",
    el: "Ελληνιστική Ιουδαία & οι Μακκαβαίοι"
  },
  theme: THEMES.emerald,
  timeline: [
    {
      year: -320,
      label: "c. 320 BC",
      era: {
        en: "Ptolemaic Rule",
        el: "Πτολεμαϊκή Κυριαρχία"
      },
      events: [
        {
          title: {
            en: "Between the Greek kingdoms",
            el: "Ανάμεσα στα ελληνικά βασίλεια"
          },
          description: {
            en: "After Alexander's death, Judea falls to the Ptolemies of Egypt, one prize in the wars of his successors.",
            el: "Μετά τον θάνατο του Αλεξάνδρου, η Ιουδαία περιέρχεται στους Πτολεμαίους της Αιγύπτου, ένα έπαθλο στους πολέμους των διαδόχων του."
          },
          extendedDescription: {
            en: "Alexander's generals carved his empire into rival Greek kingdoms, and Judea, on the border between Ptolemaic Egypt and Seleucid Syria, was fought over for a century. Under the Ptolemies the Jews kept their Temple and Law and prospered, while Greek cities, coins, and customs spread through the surrounding land.",
            el: "Οι στρατηγοί του Αλεξάνδρου τεμάχισαν την αυτοκρατορία του σε αντίπαλα ελληνικά βασίλεια, και η Ιουδαία, στο σύνορο ανάμεσα στην Πτολεμαϊκή Αίγυπτο και τη Σελευκιδική Συρία, υπήρξε αντικείμενο διαμάχης επί έναν αιώνα. Υπό τους Πτολεμαίους οι Ιουδαίοι κράτησαν τον Ναό και τον Νόμο τους και ευημέρησαν, ενώ ελληνικές πόλεις, νομίσματα και έθιμα εξαπλώνονταν στη γύρω γη."
          },
          category: "political"
        }
      ]
    },
    {
      year: -280,
      label: "c. 280 BC",
      era: {
        en: "Ptolemaic Rule",
        el: "Πτολεμαϊκή Κυριαρχία"
      },
      events: [
        {
          title: {
            en: "The Septuagint",
            el: "Η Μετάφραση των Εβδομήκοντα"
          },
          description: {
            en: "Jewish scholars in Alexandria translate the Torah into Greek for the great diaspora of Egypt.",
            el: "Ιουδαίοι λόγιοι στην Αλεξάνδρεια μεταφράζουν την Τορά στα ελληνικά για τη μεγάλη διασπορά της Αιγύπτου."
          },
          extendedDescription: {
            en: "For the many Jews of Alexandria who now spoke only Greek, scholars translated the Hebrew scriptures into Greek — the Septuagint, named for its legendary seventy translators. It was the first great translation of the Bible, the version read by Greek-speaking Jews and later by the early Christians, and a landmark meeting of Hebrew faith and Greek language.",
            el: "Για τους πολλούς Ιουδαίους της Αλεξάνδρειας που πλέον μιλούσαν μόνο ελληνικά, λόγιοι μετέφρασαν τις εβραϊκές γραφές στα ελληνικά — τη Μετάφραση των Εβδομήκοντα, ονομασμένη από τους θρυλικούς εβδομήντα μεταφραστές της. Ήταν η πρώτη μεγάλη μετάφραση της Βίβλου, η εκδοχή που διάβαζαν οι ελληνόφωνοι Ιουδαίοι και αργότερα οι πρώτοι χριστιανοί, και ένα ορόσημο συνάντησης της εβραϊκής πίστης με την ελληνική γλώσσα."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -200,
      era: {
        en: "Seleucid Rule",
        el: "Σελευκιδική Κυριαρχία"
      },
      events: [
        {
          title: {
            en: "The Seleucids win Judea",
            el: "Οι Σελευκίδες κερδίζουν την Ιουδαία"
          },
          description: {
            en: "Antiochus III defeats Egypt at Panium and brings Judea under Seleucid rule.",
            el: "Ο Αντίοχος Γ΄ νικά την Αίγυπτο στο Πάνειον και φέρνει την Ιουδαία υπό σελευκιδική κυριαρχία."
          },
          extendedDescription: {
            en: "The Seleucid king Antiochus III took Judea from the Ptolemies and at first confirmed the Jews' right to live by their ancestral laws. But his costly wars with Rome drained the treasury, and his successors would look on the Temple's wealth and the Jews' distinct religion with a more dangerous eye.",
            el: "Ο Σελευκίδης βασιλιάς Αντίοχος Γ΄ πήρε την Ιουδαία από τους Πτολεμαίους και αρχικά επιβεβαίωσε το δικαίωμα των Ιουδαίων να ζουν σύμφωνα με τους πατροπαράδοτους νόμους τους. Όμως οι δαπανηροί πόλεμοί του με τη Ρώμη στράγγισαν το θησαυροφυλάκιο, και οι διάδοχοί του θα κοιτούσαν τον πλούτο του Ναού και την ιδιαίτερη θρησκεία των Ιουδαίων με πιο επικίνδυνο μάτι."
          },
          category: "military"
        }
      ]
    },
    {
      year: -175,
      era: {
        en: "Seleucid Rule",
        el: "Σελευκιδική Κυριαρχία"
      },
      events: [
        {
          title: {
            en: "The Hellenizers of Jerusalem",
            el: "Οι εξελληνιστές της Ιερουσαλήμ"
          },
          description: {
            en: "Ambitious priests buy the high priesthood and turn Jerusalem into a Greek city, splitting Jewish society.",
            el: "Φιλόδοξοι ιερείς αγοράζουν την αρχιερωσύνη και μετατρέπουν την Ιερουσαλήμ σε ελληνική πόλη, διχάζοντας την ιουδαϊκή κοινωνία."
          },
          extendedDescription: {
            en: "A faction of the Jewish elite embraced Greek ways, bought the high priesthood from the king, and built a gymnasium beneath the Temple. To some this was welcome modernity; to others, a betrayal of the covenant. The bitter struggle between Hellenizers and traditionalists tore Jerusalem apart and invited disaster.",
            el: "Μια μερίδα της ιουδαϊκής ελίτ ασπάστηκε τα ελληνικά ήθη, αγόρασε την αρχιερωσύνη από τον βασιλιά και έχτισε ένα γυμνάσιο κάτω από τον Ναό. Για κάποιους αυτό ήταν ευπρόσδεκτος εκσυγχρονισμός· για άλλους, προδοσία της διαθήκης. Ο πικρός αγώνας ανάμεσα σε εξελληνιστές και παραδοσιακούς διέσπασε την Ιερουσαλήμ και προσκάλεσε την καταστροφή."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -167,
      era: {
        en: "The Persecution",
        el: "Ο Διωγμός"
      },
      events: [
        {
          title: {
            en: "Antiochus IV and the persecution",
            el: "Ο Αντίοχος Δ΄ και ο διωγμός"
          },
          description: {
            en: "Antiochus IV outlaws the Jewish religion and desecrates the Temple, provoking open resistance.",
            el: "Ο Αντίοχος Δ΄ θέτει εκτός νόμου την ιουδαϊκή θρησκεία και βεβηλώνει τον Ναό, προκαλώντας ανοιχτή αντίσταση."
          },
          extendedDescription: {
            en: "Intervening in Jerusalem's strife, Antiochus IV banned circumcision, the sabbath, and the Torah, and rededicated the Temple to Zeus — an outrage the book of Daniel calls 'the abomination of desolation.' It was one of history's first religious persecutions, and it turned simmering discontent into rebellion.",
            el: "Παρεμβαίνοντας στη διαμάχη της Ιερουσαλήμ, ο Αντίοχος Δ΄ απαγόρευσε την περιτομή, το σάββατο και την Τορά, και αφιέρωσε ξανά τον Ναό στον Δία — μια προσβολή που το βιβλίο του Δανιήλ αποκαλεί «το βδέλυγμα της ερημώσεως». Ήταν ένας από τους πρώτους θρησκευτικούς διωγμούς της ιστορίας, και μετέτρεψε την υποβόσκουσα δυσαρέσκεια σε εξέγερση."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -166,
      era: {
        en: "Maccabean Revolt",
        el: "Επανάσταση των Μακκαβαίων"
      },
      events: [
        {
          title: {
            en: "The Maccabean Revolt",
            el: "Η επανάσταση των Μακκαβαίων"
          },
          description: {
            en: "The priest Mattathias and his sons raise a guerrilla revolt against the Seleucids and the Hellenizers.",
            el: "Ο ιερέας Ματταθίας και οι γιοι του σηκώνουν μια ανταρτοπόλεμη εξέγερση κατά των Σελευκιδών και των εξελληνιστών."
          },
          extendedDescription: {
            en: "The rebellion began when the priest Mattathias refused to sacrifice to the Greek gods and, with his sons, took to the hills. His son Judas, nicknamed Maccabeus ('the Hammer'), proved a brilliant guerrilla commander, defeating far larger Seleucid armies in the rugged country of Judea.",
            el: "Η εξέγερση άρχισε όταν ο ιερέας Ματταθίας αρνήθηκε να θυσιάσει στους ελληνικούς θεούς και, μαζί με τους γιους του, βγήκε στα βουνά. Ο γιος του Ιούδας, με το παρατσούκλι Μακκαβαίος («το Σφυρί»), αποδείχθηκε λαμπρός αρχηγός ανταρτοπολέμου, νικώντας πολύ μεγαλύτερους σελευκιδικούς στρατούς στην τραχιά χώρα της Ιουδαίας."
          },
          category: "military"
        }
      ]
    },
    {
      year: -164,
      era: {
        en: "Maccabean Revolt",
        el: "Επανάσταση των Μακκαβαίων"
      },
      events: [
        {
          title: {
            en: "The rededication of the Temple",
            el: "Η επανακαθιέρωση του Ναού"
          },
          description: {
            en: "Judas Maccabeus retakes Jerusalem and purifies the Temple — the origin of the festival of Hanukkah.",
            el: "Ο Ιούδας ο Μακκαβαίος ανακαταλαμβάνει την Ιερουσαλήμ και εξαγνίζει τον Ναό — η προέλευση της εορτής της Χανουκά."
          },
          extendedDescription: {
            en: "Three years after its desecration, Judas recaptured the Temple, tore down the pagan altar, and rededicated it to the God of Israel. The eight-day celebration became the festival of Hanukkah, the 'Feast of Dedication,' commemorating the rededication and the survival of the Jewish faith against overwhelming odds.",
            el: "Τρία χρόνια μετά τη βεβήλωσή του, ο Ιούδας ανακατέλαβε τον Ναό, γκρέμισε τον ειδωλολατρικό βωμό και τον αφιέρωσε ξανά στον Θεό του Ισραήλ. Ο οκταήμερος εορτασμός έγινε η εορτή της Χανουκά, η «Γιορτή των Εγκαινίων», που μνημονεύει την επανακαθιέρωση και την επιβίωση της ιουδαϊκής πίστης ενάντια σε συντριπτικές πιθανότητες."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -142,
      era: {
        en: "Hasmonean Kingdom",
        el: "Βασίλειο των Ασμοναίων"
      },
      events: [
        {
          title: {
            en: "Hasmonean independence",
            el: "Η ανεξαρτησία των Ασμοναίων"
          },
          description: {
            en: "Under Simon, the last Maccabee brother, Judea wins full independence as the Hasmonean state.",
            el: "Υπό τον Σίμωνα, τον τελευταίο αδελφό των Μακκαβαίων, η Ιουδαία κερδίζει πλήρη ανεξαρτησία ως κράτος των Ασμοναίων."
          },
          extendedDescription: {
            en: "Simon secured freedom from Seleucid taxes and was acclaimed both high priest and ruler, founding the Hasmonean dynasty. For the first time since the Babylonian conquest, the Jews governed themselves — a hard-won independence that combined kingly and priestly power in a single family.",
            el: "Ο Σίμων εξασφάλισε την απαλλαγή από τους σελευκιδικούς φόρους και ανακηρύχθηκε τόσο αρχιερέας όσο και ηγεμόνας, ιδρύοντας τη δυναστεία των Ασμοναίων. Για πρώτη φορά μετά τη βαβυλωνιακή κατάκτηση, οι Ιουδαίοι κυβερνούσαν τον εαυτό τους — μια δύσκολα κερδισμένη ανεξαρτησία που συνδύαζε τη βασιλική και την ιερατική εξουσία σε μία οικογένεια."
          },
          category: "political"
        }
      ]
    },
    {
      year: -103,
      era: {
        en: "Hasmonean Kingdom",
        el: "Βασίλειο των Ασμοναίων"
      },
      events: [
        {
          title: {
            en: "The Hasmonean kingdom and its sects",
            el: "Το βασίλειο των Ασμοναίων και οι αιρέσεις του"
          },
          description: {
            en: "The Hasmoneans expand their realm, while Pharisees, Sadducees, and Essenes divide Jewish society.",
            el: "Οι Ασμοναίοι επεκτείνουν το κράτος τους, ενώ Φαρισαίοι, Σαδδουκαίοι και Εσσαίοι διχάζουν την ιουδαϊκή κοινωνία."
          },
          extendedDescription: {
            en: "Kings like John Hyrcanus and Alexander Jannaeus enlarged Judea, conquering neighbours and forcibly converting the Idumeans. Prosperity and power bred division: the Pharisees, Sadducees, and the withdrawn Essenes — perhaps the community behind the Dead Sea Scrolls — offered rival visions of Jewish life that would shape the age of Jesus.",
            el: "Βασιλείς όπως ο Ιωάννης Υρκανός και ο Αλέξανδρος Ιανναίος διεύρυναν την Ιουδαία, κατακτώντας γείτονες και προσηλυτίζοντας βίαια τους Ιδουμαίους. Η ευημερία και η ισχύς γέννησαν διαίρεση: οι Φαρισαίοι, οι Σαδδουκαίοι και οι απομονωμένοι Εσσαίοι — ίσως η κοινότητα πίσω από τους Χειρόγραφα της Νεκράς Θάλασσας — πρόσφεραν αντίπαλα οράματα της ιουδαϊκής ζωής που θα διαμόρφωναν την εποχή του Ιησού."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -63,
      era: {
        en: "Roman Intervention",
        el: "Ρωμαϊκή Επέμβαση"
      },
      events: [
        {
          title: {
            en: "Pompey takes Jerusalem",
            el: "Ο Πομπήιος καταλαμβάνει την Ιερουσαλήμ"
          },
          description: {
            en: "The Roman general Pompey intervenes in a Hasmonean civil war and captures Jerusalem for Rome.",
            el: "Ο Ρωμαίος στρατηγός Πομπήιος επεμβαίνει σε έναν εμφύλιο πόλεμο των Ασμοναίων και καταλαμβάνει την Ιερουσαλήμ για τη Ρώμη."
          },
          extendedDescription: {
            en: "When two Hasmonean brothers fought over the throne, both appealed to Rome, and Pompey settled the matter by besieging and taking Jerusalem, even entering the Temple's Holy of Holies. Judea's brief independence was over; it became a Roman client, and soon the stage for a new and fateful chapter.",
            el: "Όταν δύο αδελφοί των Ασμοναίων πάλεψαν για τον θρόνο, και οι δύο απευθύνθηκαν στη Ρώμη, και ο Πομπήιος έλυσε το ζήτημα πολιορκώντας και καταλαμβάνοντας την Ιερουσαλήμ, εισερχόμενος μάλιστα στα Άγια των Αγίων του Ναού. Η σύντομη ανεξαρτησία της Ιουδαίας είχε τελειώσει· έγινε υποτελής της Ρώμης, και σύντομα η σκηνή ενός νέου και μοιραίου κεφαλαίου."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
