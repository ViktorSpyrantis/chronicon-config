/** Russian Federation — Ρωσική Ομοσπονδία · Russian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const RUSSIAN_FEDERATION = {
  id: "russian-federation" as const,
  label: {
    en: "Russian Federation",
    el: "Ρωσική Ομοσπονδία"
  },
  supertitle: {
    en: "Российская Федерация",
    el: "Ρωσική Ομοσπονδία"
  },
  title: {
    en: "The Russian Federation",
    el: "Η Ρωσική Ομοσπονδία"
  },
  subtitle: {
    en: "From the dissolution of the Soviet Union in 1991 through the turbulent Yeltsin years of shock therapy and the Chechen wars, the rise of Vladimir Putin and the oil-fueled recovery, the annexation of Crimea and the confrontation with the West, to the full-scale invasion of Ukraine and beyond. Slide across the years to read the major events of post-Soviet Russia.",
    el: "Από τη διάλυση της Σοβιετικής Ένωσης το 1991, μέσα από τα ταραχώδη χρόνια του Γιέλτσιν με τη σοκ θεραπεία και τους πολέμους της Τσετσενίας, την άνοδο του Βλαντίμιρ Πούτιν και την οικονομική ανάκαμψη που τροφοδότησε το πετρέλαιο, την προσάρτηση της Κριμαίας και την αντιπαράθεση με τη Δύση, έως την ολοκληρωτική εισβολή στην Ουκρανία και πέρα από αυτήν. Μετακινηθείτε ανάμεσα στα έτη για να διαβάσετε τα σημαντικότερα γεγονότα της μετασοβιετικής Ρωσίας."
  },
  menuDescription: {
    en: "After the USSR: Yeltsin's chaos, Putin's rise, Crimea, and the war in Ukraine.",
    el: "Μετά την ΕΣΣΔ: το χάος του Γιέλτσιν, η άνοδος του Πούτιν, η Κριμαία κι ο πόλεμος στην Ουκρανία."
  },
  footerLabel: {
    en: "Russian Federation · 1991-Present",
    el: "Ρωσική Ομοσπονδία · 1991-Σήμερα"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Russian Federation",
    el: "Ρωσική Ομοσπονδία"
  },
  theme: THEMES.sapphire,
  timeline: [
    {
      year: 1991,
      era: {
        en: "Birth of the Federation",
        el: "Γέννηση της Ομοσπονδίας"
      },
      events: [
        {
          title: {
            en: "Russia emerges as an independent state",
            el: "Η Ρωσία αναδύεται ως ανεξάρτητο κράτος"
          },
          description: {
            en: "After the failed August coup, the Belavezha Accords of December dissolve the USSR; Boris Yeltsin, elected president in June, leads a sovereign Russian Federation.",
            el: "Μετά το αποτυχημένο πραξικόπημα του Αυγούστου, οι Συμφωνίες της Μπελαβέζα τον Δεκέμβριο διαλύουν την ΕΣΣΔ· ο Μπορίς Γιέλτσιν, εκλεγμένος πρόεδρος τον Ιούνιο, ηγείται μιας κυρίαρχης Ρωσικής Ομοσπονδίας."
          },
          extendedDescription: {
            en: "Russia inherited the Soviet seat at the United Nations Security Council, its nuclear arsenal, and its foreign debt. The new state faced the immense task of building democratic institutions and a market economy from the ruins of central planning.",
            el: "Η Ρωσία κληρονόμησε τη σοβιετική έδρα στο Συμβούλιο Ασφαλείας των Ηνωμένων Εθνών, το πυρηνικό της οπλοστάσιο και το εξωτερικό της χρέος. Το νέο κράτος αντιμετώπισε το τεράστιο έργο της οικοδόμησης δημοκρατικών θεσμών και οικονομίας της αγοράς από τα ερείπια του κεντρικού σχεδιασμού."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1992,
      era: {
        en: "Shock Therapy",
        el: "Σοκ Θεραπεία"
      },
      events: [
        {
          title: {
            en: "Price liberalization and shock therapy",
            el: "Απελευθέρωση των τιμών και σοκ θεραπεία"
          },
          description: {
            en: "Acting prime minister Yegor Gaidar frees most prices and launches rapid market reforms, unleashing hyperinflation that wipes out household savings.",
            el: "Ο υπηρεσιακός πρωθυπουργός Γιεγκόρ Γκάινταρ απελευθερώνει τις περισσότερες τιμές και ξεκινά ταχείες μεταρρυθμίσεις αγοράς, εξαπολύοντας υπερπληθωρισμό που εξανεμίζει τις αποταμιεύσεις των νοικοκυριών."
          },
          extendedDescription: {
            en: "Mass voucher privatization transferred state enterprises into private hands, but much wealth was concentrated among a small group of well-connected businessmen who became the new oligarchs. Living standards for millions collapsed.",
            el: "Η μαζική ιδιωτικοποίηση με κουπόνια μετέφερε τις κρατικές επιχειρήσεις σε ιδιωτικά χέρια, αλλά μεγάλο μέρος του πλούτου συγκεντρώθηκε σε μια μικρή ομάδα καλά δικτυωμένων επιχειρηματιών που έγιναν οι νέοι ολιγάρχες. Το βιοτικό επίπεδο εκατομμυρίων κατέρρευσε."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1993,
      era: {
        en: "Constitutional Crisis",
        el: "Συνταγματική Κρίση"
      },
      events: [
        {
          title: {
            en: "The shelling of the parliament and a new constitution",
            el: "Ο βομβαρδισμός του κοινοβουλίου και νέο σύνταγμα"
          },
          description: {
            en: "A power struggle between Yeltsin and parliament ends with tanks shelling the White House in October; a December referendum approves a constitution granting strong presidential powers.",
            el: "Η σύγκρουση εξουσίας ανάμεσα στον Γιέλτσιν και το κοινοβούλιο τερματίζεται με άρματα να βομβαρδίζουν τον Λευκό Οίκο τον Οκτώβριο· δημοψήφισμα τον Δεκέμβριο εγκρίνει σύνταγμα που παραχωρεί ισχυρές προεδρικές εξουσίες."
          },
          extendedDescription: {
            en: "The 1993 constitution shaped Russian politics for decades, concentrating authority in the presidency. The violent confrontation, which left scores dead in central Moscow, exposed the fragility of the young democracy.",
            el: "Το σύνταγμα του 1993 διαμόρφωσε τη ρωσική πολιτική για δεκαετίες, συγκεντρώνοντας την εξουσία στην προεδρία. Η βίαιη αντιπαράθεση, που άφησε δεκάδες νεκρούς στο κέντρο της Μόσχας, αποκάλυψε την ευθραυστότητα της νεαρής δημοκρατίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1994,
      era: {
        en: "The First Chechen War",
        el: "Ο Πρώτος Πόλεμος της Τσετσενίας"
      },
      events: [
        {
          title: {
            en: "Russia invades Chechnya",
            el: "Η Ρωσία εισβάλλει στην Τσετσενία"
          },
          description: {
            en: "Federal forces enter the breakaway republic of Chechnya in December, beginning a brutal war marked by the devastating battle for Grozny.",
            el: "Οι ομοσπονδιακές δυνάμεις εισέρχονται στην αποσχισθείσα δημοκρατία της Τσετσενίας τον Δεκέμβριο, ξεκινώντας έναν βάναυσο πόλεμο που σημαδεύεται από την καταστροφική μάχη για το Γκρόζνι."
          },
          extendedDescription: {
            en: "The war went badly for the poorly prepared Russian army. After heavy casualties on both sides and among civilians, the 1996 Khasavyurt Accord granted Chechnya de facto autonomy and ended the first conflict.",
            el: "Ο πόλεμος εξελίχθηκε άσχημα για τον κακοπροετοιμασμένο ρωσικό στρατό. Μετά από βαριές απώλειες και στις δύο πλευρές και ανάμεσα στους αμάχους, η Συμφωνία του Χασαβγιούρτ του 1996 παραχώρησε de facto αυτονομία στην Τσετσενία και τερμάτισε την πρώτη σύγκρουση."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1996,
      era: {
        en: "Yeltsin Re-elected",
        el: "Επανεκλογή Γιέλτσιν"
      },
      events: [
        {
          title: {
            en: "Yeltsin wins a second term",
            el: "Ο Γιέλτσιν κερδίζει δεύτερη θητεία"
          },
          description: {
            en: "Trailing badly in the polls, an ailing Yeltsin defeats Communist Gennady Zyuganov in a runoff, backed by oligarch-controlled media and Western support.",
            el: "Ενώ υστερούσε σημαντικά στις δημοσκοπήσεις, ο άρρωστος Γιέλτσιν νικά τον κομμουνιστή Γκενάντι Ζιουγκάνοφ στον δεύτερο γύρο, με τη στήριξη των ελεγχόμενων από ολιγάρχες ΜΜΕ και της Δύσης."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1998,
      era: {
        en: "Financial Crisis",
        el: "Οικονομική Κρίση"
      },
      events: [
        {
          title: {
            en: "The ruble crisis and default",
            el: "Η κρίση του ρουβλίου και η χρεοκοπία"
          },
          description: {
            en: "In August Russia devalues the ruble and defaults on its domestic debt, wiping out banks and savings and deepening public disillusion with the reforms.",
            el: "Τον Αύγουστο η Ρωσία υποτιμά το ρούβλι και χρεοκοπεί στο εσωτερικό της χρέος, εξαφανίζοντας τράπεζες και αποταμιεύσεις και βαθαίνοντας την απογοήτευση του κόσμου από τις μεταρρυθμίσεις."
          },
          extendedDescription: {
            en: "Falling oil prices and a fragile financial system triggered the collapse. Although painful, the cheaper ruble and recovering oil revenues set the stage for a rapid economic rebound in the following years.",
            el: "Η πτώση των τιμών του πετρελαίου και ένα εύθραυστο χρηματοπιστωτικό σύστημα προκάλεσαν την κατάρρευση. Αν και επώδυνο, το φθηνότερο ρούβλι και τα ανακάμπτοντα έσοδα από το πετρέλαιο προετοίμασαν το έδαφος για ταχεία οικονομική ανάκαμψη τα επόμενα χρόνια."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1999,
      era: {
        en: "The Rise of Putin",
        el: "Η Άνοδος του Πούτιν"
      },
      events: [
        {
          title: {
            en: "Putin becomes prime minister and the Second Chechen War begins",
            el: "Ο Πούτιν γίνεται πρωθυπουργός και αρχίζει ο Δεύτερος Πόλεμος της Τσετσενίας"
          },
          description: {
            en: "After apartment bombings shock the country, the little-known Vladimir Putin is named prime minister and launches a new war in Chechnya; on 31 December Yeltsin resigns and makes him acting president.",
            el: "Έπειτα από βομβιστικές επιθέσεις σε πολυκατοικίες που συγκλονίζουν τη χώρα, ο άγνωστος Βλαντίμιρ Πούτιν διορίζεται πρωθυπουργός και εξαπολύει νέο πόλεμο στην Τσετσενία· στις 31 Δεκεμβρίου ο Γιέλτσιν παραιτείται και τον καθιστά υπηρεσιακό πρόεδρο."
          },
          extendedDescription: {
            en: "Putin's decisive handling of the war made him popular and positioned him to win the presidency. His rise marked the end of the chaotic Yeltsin era and the beginning of a more centralized, assertive state.",
            el: "Ο αποφασιστικός χειρισμός του πολέμου από τον Πούτιν τον κατέστησε δημοφιλή και τον τοποθέτησε για να κερδίσει την προεδρία. Η άνοδός του σηματοδότησε το τέλος της χαοτικής εποχής Γιέλτσιν και την αρχή ενός πιο συγκεντρωτικού, διεκδικητικού κράτους."
          },
          category: "political"
        }
      ]
    },
    {
      year: 2000,
      era: {
        en: "The Putin Era",
        el: "Η Εποχή του Πούτιν"
      },
      events: [
        {
          title: {
            en: "Putin is elected president",
            el: "Ο Πούτιν εκλέγεται πρόεδρος"
          },
          description: {
            en: "Vladimir Putin wins the presidency in March and moves to restore the 'power vertical', curbing the oligarchs and the autonomy of the regions.",
            el: "Ο Βλαντίμιρ Πούτιν κερδίζει την προεδρία τον Μάρτιο και κινείται για να αποκαταστήσει τον «κάθετο άξονα εξουσίας», περιορίζοντας τους ολιγάρχες και την αυτονομία των περιφερειών."
          },
          extendedDescription: {
            en: "Rising oil and gas revenues fueled a decade of growth and recovering living standards that underpinned Putin's popularity. In August the nuclear submarine Kursk sank with all 118 hands lost, an early test of his leadership.",
            el: "Τα αυξανόμενα έσοδα από πετρέλαιο και φυσικό αέριο τροφοδότησαν μια δεκαετία ανάπτυξης και ανάκαμψης του βιοτικού επιπέδου που στήριξε τη δημοτικότητα του Πούτιν. Τον Αύγουστο το πυρηνικό υποβρύχιο Κουρσκ βυθίστηκε με 118 νεκρούς, μια πρώιμη δοκιμασία της ηγεσίας του."
          },
          category: "political"
        }
      ]
    },
    {
      year: 2004,
      era: {
        en: "Terror and Centralization",
        el: "Τρομοκρατία και Συγκεντρωτισμός"
      },
      events: [
        {
          title: {
            en: "The Beslan school siege",
            el: "Η ομηρία στο σχολείο του Μπεσλάν"
          },
          description: {
            en: "Chechen militants seize a school in Beslan in September; the three-day siege ends in carnage with more than 330 dead, many of them children.",
            el: "Τσετσένοι μαχητές καταλαμβάνουν σχολείο στο Μπεσλάν τον Σεπτέμβριο· η τριήμερη ομηρία τελειώνει σε σφαγή με πάνω από 330 νεκρούς, πολλούς από αυτούς παιδιά."
          },
          extendedDescription: {
            en: "Following Beslan and the 2002 Moscow theater siege, Putin abolished the direct election of regional governors and further consolidated central control, citing the need to fight terrorism.",
            el: "Μετά το Μπεσλάν και την ομηρία στο θέατρο της Μόσχας το 2002, ο Πούτιν κατήργησε την άμεση εκλογή των περιφερειακών κυβερνητών και ενίσχυσε περαιτέρω τον κεντρικό έλεγχο, επικαλούμενος την ανάγκη καταπολέμησης της τρομοκρατίας."
          },
          category: "military"
        }
      ]
    },
    {
      year: 2008,
      era: {
        en: "Tandem and War",
        el: "Δίδυμο και Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Medvedev presidency and the war with Georgia",
            el: "Προεδρία Μεντβέντεφ και ο πόλεμος με τη Γεωργία"
          },
          description: {
            en: "Barred by term limits, Putin becomes prime minister as Dmitry Medvedev takes the presidency; in August a brief war with Georgia ends with Russia recognizing Abkhazia and South Ossetia.",
            el: "Εμποδισμένος από τα όρια θητειών, ο Πούτιν γίνεται πρωθυπουργός καθώς ο Ντμίτρι Μεντβέντεφ αναλαμβάνει την προεδρία· τον Αύγουστο ένας σύντομος πόλεμος με τη Γεωργία τελειώνει με τη Ρωσία να αναγνωρίζει την Αμπχαζία και τη Νότια Οσετία."
          },
          extendedDescription: {
            en: "The 'tandem' kept Putin firmly in charge behind the scenes. The Georgian war signaled Moscow's willingness to use force against post-Soviet neighbors seeking closer ties with the West.",
            el: "Το «δίδυμο» κράτησε τον Πούτιν σταθερά στον έλεγχο παρασκηνιακά. Ο πόλεμος με τη Γεωργία σηματοδότησε την προθυμία της Μόσχας να χρησιμοποιήσει βία εναντίον μετασοβιετικών γειτόνων που επεδίωκαν στενότερους δεσμούς με τη Δύση."
          },
          category: "military"
        }
      ]
    },
    {
      year: 2012,
      era: {
        en: "Return to the Kremlin",
        el: "Επιστροφή στο Κρεμλίνο"
      },
      events: [
        {
          title: {
            en: "Putin returns to the presidency amid protests",
            el: "Ο Πούτιν επιστρέφει στην προεδρία εν μέσω διαδηλώσεων"
          },
          description: {
            en: "After mass protests over disputed 2011 parliamentary elections, Putin reclaims the presidency for a six-year term and tightens laws on assembly, the media, and 'foreign agents'.",
            el: "Μετά από μαζικές διαδηλώσεις για τις αμφισβητούμενες βουλευτικές εκλογές του 2011, ο Πούτιν ανακτά την προεδρία για εξαετή θητεία και αυστηροποιεί τους νόμους για τις συναθροίσεις, τα ΜΜΕ και τους «ξένους πράκτορες»."
          },
          category: "political"
        }
      ]
    },
    {
      year: 2014,
      era: {
        en: "Crimea and Confrontation",
        el: "Κριμαία και Αντιπαράθεση"
      },
      events: [
        {
          title: {
            en: "The annexation of Crimea",
            el: "Η προσάρτηση της Κριμαίας"
          },
          description: {
            en: "After the Maidan revolution in Ukraine, Russian forces seize Crimea and annex it following a disputed referendum; a war erupts in the eastern Donbas, drawing Western sanctions.",
            el: "Μετά την επανάσταση του Μαϊντάν στην Ουκρανία, ρωσικές δυνάμεις καταλαμβάνουν την Κριμαία και την προσαρτούν έπειτα από αμφισβητούμενο δημοψήφισμα· πόλεμος ξεσπά στο ανατολικό Ντονμπάς, προκαλώντας δυτικές κυρώσεις."
          },
          extendedDescription: {
            en: "The annexation, the first forcible seizure of European territory since World War II, transformed Russia's relations with the West. Sanctions and falling oil prices strained the economy, while patriotic sentiment briefly lifted Putin's ratings. Russia also hosted the Winter Olympics in Sochi that February.",
            el: "Η προσάρτηση, η πρώτη βίαιη κατάληψη ευρωπαϊκού εδάφους από τον Β΄ Παγκόσμιο Πόλεμο, μεταμόρφωσε τις σχέσεις της Ρωσίας με τη Δύση. Οι κυρώσεις και η πτώση των τιμών του πετρελαίου πίεσαν την οικονομία, ενώ το πατριωτικό αίσθημα ανέβασε προσωρινά τη δημοτικότητα του Πούτιν. Η Ρωσία φιλοξένησε επίσης τους Χειμερινούς Ολυμπιακούς Αγώνες στο Σότσι εκείνον τον Φεβρουάριο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 2015,
      era: {
        en: "Intervention in Syria",
        el: "Επέμβαση στη Συρία"
      },
      events: [
        {
          title: {
            en: "Russia intervenes in the Syrian civil war",
            el: "Η Ρωσία επεμβαίνει στον συριακό εμφύλιο πόλεμο"
          },
          description: {
            en: "In September Russia launches an air campaign in support of Bashar al-Assad, its first major military operation outside the former Soviet Union since Afghanistan.",
            el: "Τον Σεπτέμβριο η Ρωσία εξαπολύει αεροπορική εκστρατεία προς υποστήριξη του Μπασάρ αλ-Άσαντ, την πρώτη μεγάλη στρατιωτική της επιχείρηση εκτός της πρώην Σοβιετικής Ένωσης από το Αφγανιστάν."
          },
          extendedDescription: {
            en: "The intervention turned the tide of the war in Assad's favor and reasserted Russia as a power broker in the Middle East, securing its naval and air bases on the Mediterranean.",
            el: "Η επέμβαση άλλαξε την πορεία του πολέμου υπέρ του Άσαντ και επανέφερε τη Ρωσία ως ρυθμιστή ισχύος στη Μέση Ανατολή, εξασφαλίζοντας τις ναυτικές και αεροπορικές της βάσεις στη Μεσόγειο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 2018,
      era: {
        en: "Fourth Term",
        el: "Τέταρτη Θητεία"
      },
      events: [
        {
          title: {
            en: "Putin re-elected and Russia hosts the World Cup",
            el: "Επανεκλογή Πούτιν και η Ρωσία φιλοξενεί το Μουντιάλ"
          },
          description: {
            en: "Putin wins a fourth term with a landslide and Russia hosts a successful FIFA World Cup, even as tensions with the West deepen over the Skripal poisoning in Britain.",
            el: "Ο Πούτιν κερδίζει τέταρτη θητεία με συντριπτική πλειοψηφία και η Ρωσία φιλοξενεί ένα επιτυχημένο Παγκόσμιο Κύπελλο της FIFA, ακόμη και καθώς οι εντάσεις με τη Δύση βαθαίνουν για τη δηλητηρίαση Σκριπάλ στη Βρετανία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 2020,
      era: {
        en: "Constitutional Reset",
        el: "Συνταγματική Επαναφορά"
      },
      events: [
        {
          title: {
            en: "Constitutional amendments reset Putin's term limits",
            el: "Συνταγματικές τροπολογίες μηδενίζουν τα όρια θητειών του Πούτιν"
          },
          description: {
            en: "A nationwide vote approves sweeping constitutional changes that reset the count on Putin's terms, allowing him to remain president potentially until 2036, as the COVID-19 pandemic strikes.",
            el: "Πανεθνική ψηφοφορία εγκρίνει σαρωτικές συνταγματικές αλλαγές που μηδενίζουν τη μέτρηση των θητειών του Πούτιν, επιτρέποντάς του να παραμείνει πρόεδρος δυνητικά έως το 2036, ενώ η πανδημία COVID-19 πλήττει τη χώρα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 2022,
      era: {
        en: "Invasion of Ukraine",
        el: "Εισβολή στην Ουκρανία"
      },
      events: [
        {
          title: {
            en: "Russia launches a full-scale invasion of Ukraine",
            el: "Η Ρωσία εξαπολύει ολοκληρωτική εισβολή στην Ουκρανία"
          },
          description: {
            en: "On 24 February Russia invades Ukraine on multiple fronts; the assault on Kyiv fails, and the war becomes the largest in Europe since 1945, triggering unprecedented Western sanctions.",
            el: "Στις 24 Φεβρουαρίου η Ρωσία εισβάλλει στην Ουκρανία σε πολλαπλά μέτωπα· η επίθεση στο Κίεβο αποτυγχάνει και ο πόλεμος γίνεται ο μεγαλύτερος στην Ευρώπη από το 1945, προκαλώντας πρωτοφανείς δυτικές κυρώσεις."
          },
          extendedDescription: {
            en: "Russia later proclaimed the annexation of four Ukrainian regions it did not fully control. The war isolated Russia diplomatically, prompted the exodus of hundreds of thousands of citizens, and pushed Finland and Sweden toward NATO membership.",
            el: "Η Ρωσία αργότερα διακήρυξε την προσάρτηση τεσσάρων ουκρανικών περιφερειών που δεν έλεγχε πλήρως. Ο πόλεμος απομόνωσε διπλωματικά τη Ρωσία, προκάλεσε την έξοδο εκατοντάδων χιλιάδων πολιτών και ώθησε τη Φινλανδία και τη Σουηδία προς την ένταξη στο ΝΑΤΟ."
          },
          category: "military"
        }
      ]
    },
    {
      year: 2023,
      era: {
        en: "The Wagner Mutiny",
        el: "Η Ανταρσία της Βάγκνερ"
      },
      events: [
        {
          title: {
            en: "Prigozhin's short-lived mutiny",
            el: "Η σύντομη ανταρσία του Πριγκόζιν"
          },
          description: {
            en: "In June Yevgeny Prigozhin leads his Wagner mercenaries in a march toward Moscow before abruptly halting; two months later he dies in a plane crash.",
            el: "Τον Ιούνιο ο Γιεβγκένι Πριγκόζιν οδηγεί τους μισθοφόρους της Βάγκνερ σε πορεία προς τη Μόσχα πριν σταματήσει απότομα· δύο μήνες αργότερα σκοτώνεται σε αεροπορική συντριβή."
          },
          extendedDescription: {
            en: "The mutiny was the most serious challenge to Putin's authority in his more than two decades in power, briefly exposing cracks in the Russian state before the threat was neutralized.",
            el: "Η ανταρσία ήταν η σοβαρότερη πρόκληση στην εξουσία του Πούτιν στα πάνω από δύο δεκαετίες παραμονής του στην εξουσία, αποκαλύπτοντας προσωρινά ρωγμές στο ρωσικό κράτος προτού η απειλή εξουδετερωθεί."
          },
          category: "political"
        }
      ]
    },
    {
      year: 2024,
      era: {
        en: "Fifth Term",
        el: "Πέμπτη Θητεία"
      },
      events: [
        {
          title: {
            en: "Putin secures a fifth term as the war grinds on",
            el: "Ο Πούτιν εξασφαλίζει πέμπτη θητεία καθώς ο πόλεμος συνεχίζεται"
          },
          description: {
            en: "Putin wins a fifth presidential term in a tightly controlled election held weeks after the death in prison of opposition leader Alexei Navalny, while the war in Ukraine continues.",
            el: "Ο Πούτιν κερδίζει πέμπτη προεδρική θητεία σε αυστηρά ελεγχόμενες εκλογές που διεξάγονται εβδομάδες μετά τον θάνατο στη φυλακή του ηγέτη της αντιπολίτευσης Αλεξέι Ναβάλνι, ενώ ο πόλεμος στην Ουκρανία συνεχίζεται."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
