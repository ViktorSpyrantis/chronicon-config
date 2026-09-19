/** Return & the Second Temple — Επιστροφή & ο Δεύτερος Ναός · Ancient Levant */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const RETURN_SECOND_TEMPLE = {
  id: "return-second-temple" as const,
  label: {
    en: "Return & the Second Temple",
    el: "Επιστροφή & ο Δεύτερος Ναός"
  },
  supertitle: {
    en: "The Ancient Levant",
    el: "Ο Αρχαίος Λεβάντες"
  },
  title: {
    en: "The Return & the Second Temple",
    el: "Η Επιστροφή & ο Δεύτερος Ναός"
  },
  subtitle: {
    en: "Under the tolerant rule of Persia, exiles returned to Jerusalem, rebuilt the Temple, and restored the walls. Ezra brought back the Law and Nehemiah the walls, and around the Torah a people scattered by conquest remade itself — becoming, in these quiet centuries, recognizably Jewish. Slide across the age of the Second Temple's beginnings under the Great Kings.",
    el: "Υπό την ανεκτική κυριαρχία της Περσίας, εξόριστοι επέστρεψαν στην Ιερουσαλήμ, ξανάχτισαν τον Ναό και αποκατέστησαν τα τείχη. Ο Έσδρας έφερε πίσω τον Νόμο και ο Νεεμίας τα τείχη, και γύρω από την Τορά ένας λαός διασκορπισμένος από την κατάκτηση αναδημιουργήθηκε — γινόμενος, σε αυτούς τους ήσυχους αιώνες, αναγνωρίσιμα ιουδαϊκός. Μετακινηθείτε στην εποχή των απαρχών του Δεύτερου Ναού υπό τους Μεγάλους Βασιλείς."
  },
  menuDescription: {
    en: "The return from exile, the rebuilt Temple, and the making of Judaism.",
    el: "Η επιστροφή από την εξορία, ο ανοικοδομημένος Ναός και η διαμόρφωση του Ιουδαϊσμού."
  },
  footerLabel: {
    en: "Return & the Second Temple · 538-332 BC",
    el: "Επιστροφή & ο Δεύτερος Ναός · 538-332 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Return & the Second Temple",
    el: "Επιστροφή & ο Δεύτερος Ναός"
  },
  theme: THEMES.sage,
  timeline: [
    {
      year: -538,
      era: {
        en: "The Return",
        el: "Η Επιστροφή"
      },
      events: [
        {
          title: {
            en: "The return to Zion",
            el: "Η επιστροφή στη Σιών"
          },
          description: {
            en: "The first exiles journey home from Babylon to a ruined Jerusalem to rebuild their community.",
            el: "Οι πρώτοι εξόριστοι ταξιδεύουν από τη Βαβυλώνα πίσω σε μια ερειπωμένη Ιερουσαλήμ για να ξαναχτίσουν την κοινότητά τους."
          },
          extendedDescription: {
            en: "Granted leave by Cyrus, groups of Judeans returned over the following decades under leaders such as Sheshbazzar and Zerubbabel, a prince of David's line. They came back to a poor and broken land, far smaller than the old kingdom, to begin the long work of restoration — while many others chose to remain in the flourishing communities of Babylon.",
            el: "Με την άδεια του Κύρου, ομάδες Ιουδαίων επέστρεψαν τις επόμενες δεκαετίες υπό ηγέτες όπως ο Σασαβασάρ και ο Ζοροβάβελ, ένας πρίγκιπας από τη γενιά του Δαβίδ. Γύρισαν σε μια φτωχή και τσακισμένη γη, πολύ μικρότερη από το παλιό βασίλειο, για να ξεκινήσουν το μακρύ έργο της αποκατάστασης — ενώ πολλοί άλλοι επέλεξαν να παραμείνουν στις ανθούσες κοινότητες της Βαβυλώνας."
          },
          category: "political"
        }
      ]
    },
    {
      year: -515,
      era: {
        en: "The Return",
        el: "Η Επιστροφή"
      },
      events: [
        {
          title: {
            en: "The Second Temple rebuilt",
            el: "Ο Δεύτερος Ναός ξαναχτίζεται"
          },
          description: {
            en: "Urged on by the prophets Haggai and Zechariah, the returnees complete a new Temple in Jerusalem.",
            el: "Παροτρυνόμενοι από τους προφήτες Αγγαίο και Ζαχαρία, οι επαναπατρισμένοι ολοκληρώνουν έναν νέο Ναό στην Ιερουσαλήμ."
          },
          extendedDescription: {
            en: "After years of poverty and delay, the Second Temple was finished around 516 BCE — humbler than Solomon's, and, some elders wept to see, without the lost Ark. Yet it restored the centre of worship and made Jerusalem once more the focus of the Jewish world, a role its Temple would hold for nearly six centuries.",
            el: "Έπειτα από χρόνια φτώχειας και καθυστέρησης, ο Δεύτερος Ναός ολοκληρώθηκε γύρω στο 516 π.Χ. — ταπεινότερος από εκείνον του Σολομώντα και, όπως θρήνησαν βλέποντας κάποιοι γέροντες, χωρίς τη χαμένη Κιβωτό. Ωστόσο αποκατέστησε το κέντρο της λατρείας και έκανε την Ιερουσαλήμ και πάλι το επίκεντρο του ιουδαϊκού κόσμου, ρόλο που ο Ναός της θα κρατούσε για σχεδόν έξι αιώνες."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -458,
      era: {
        en: "Persian Yehud",
        el: "Περσικό Γεχούντ"
      },
      events: [
        {
          title: {
            en: "Ezra and the Law",
            el: "Ο Έσδρας και ο Νόμος"
          },
          description: {
            en: "The scribe Ezra returns from Babylon with the Law and reads it aloud to the whole people.",
            el: "Ο γραμματέας Έσδρας επιστρέφει από τη Βαβυλώνα με τον Νόμο και τον διαβάζει δυνατά σε όλο τον λαό."
          },
          extendedDescription: {
            en: "Ezra, a priest and scholar, brought the Torah from Babylon with Persian backing and made it the constitution of the restored community, reading it publicly and demanding the people live by it. His work placed the written Law at the heart of Jewish life — a shift so profound that tradition remembers him as a second Moses.",
            el: "Ο Έσδρας, ιερέας και λόγιος, έφερε την Τορά από τη Βαβυλώνα με περσική στήριξη και την έκανε το καταστατικό της αποκατεστημένης κοινότητας, διαβάζοντάς την δημόσια και απαιτώντας ο λαός να ζει σύμφωνα με αυτήν. Το έργο του τοποθέτησε τον γραπτό Νόμο στην καρδιά της ιουδαϊκής ζωής — μια μεταβολή τόσο βαθιά ώστε η παράδοση τον θυμάται ως δεύτερο Μωυσή."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -445,
      era: {
        en: "Persian Yehud",
        el: "Περσικό Γεχούντ"
      },
      events: [
        {
          title: {
            en: "Nehemiah rebuilds the walls",
            el: "Ο Νεεμίας ξαναχτίζει τα τείχη"
          },
          description: {
            en: "Nehemiah, a Jewish official at the Persian court, is sent to govern Judah and rebuild Jerusalem's walls.",
            el: "Ο Νεεμίας, Ιουδαίος αξιωματούχος της περσικής αυλής, στέλνεται να κυβερνήσει τον Ιούδα και να ξαναχτίσει τα τείχη της Ιερουσαλήμ."
          },
          extendedDescription: {
            en: "Cupbearer to the Persian king, Nehemiah won appointment as governor and rebuilt Jerusalem's walls in a rapid, contested effort, refortifying the city against hostile neighbours. With Ezra, he pressed religious and social reforms, and together the two set the restored community on firm foundations under Persian protection.",
            el: "Οινοχόος του Πέρση βασιλιά, ο Νεεμίας κέρδισε τον διορισμό του ως κυβερνήτη και ξανάχτισε τα τείχη της Ιερουσαλήμ σε μια γρήγορη, αμφισβητούμενη προσπάθεια, ξαναοχυρώνοντας την πόλη απέναντι σε εχθρικούς γείτονες. Μαζί με τον Έσδρα, προώθησε θρησκευτικές και κοινωνικές μεταρρυθμίσεις, και μαζί οι δύο έθεσαν την αποκατεστημένη κοινότητα σε στέρεα θεμέλια υπό περσική προστασία."
          },
          category: "political"
        }
      ]
    },
    {
      year: -430,
      label: "c. 430 BC",
      era: {
        en: "Persian Yehud",
        el: "Περσικό Γεχούντ"
      },
      events: [
        {
          title: {
            en: "The making of Judaism",
            el: "Η διαμόρφωση του Ιουδαϊσμού"
          },
          description: {
            en: "Around the Temple and the Torah, the returned community takes on the shape of the Jewish faith.",
            el: "Γύρω από τον Ναό και την Τορά, η επαναπατρισμένη κοινότητα παίρνει τη μορφή της ιουδαϊκής πίστης."
          },
          extendedDescription: {
            en: "In these centuries the religion of ancient Israel matured into Judaism: strict monotheism, life ordered by the Law, the sabbath and festivals, and a people increasingly defined by faith and covenant rather than a kingdom. The very name 'Jew,' from Judah, dates from this age of a small people with an outsized spiritual legacy.",
            el: "Σε αυτούς τους αιώνες η θρησκεία του αρχαίου Ισραήλ ωρίμασε σε Ιουδαϊσμό: αυστηρός μονοθεϊσμός, ζωή ρυθμισμένη από τον Νόμο, το σάββατο και οι εορτές, και ένας λαός που ολοένα οριζόταν από την πίστη και τη διαθήκη παρά από ένα βασίλειο. Το ίδιο το όνομα «Ιουδαίος», από τον Ιούδα, χρονολογείται από αυτή την εποχή ενός μικρού λαού με δυσανάλογα μεγάλη πνευματική κληρονομιά."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -420,
      label: "c. 420 BC",
      era: {
        en: "Persian Yehud",
        el: "Περσικό Γεχούντ"
      },
      events: [
        {
          title: {
            en: "The Samaritans",
            el: "Οι Σαμαρείτες"
          },
          description: {
            en: "The people of Samaria, worshippers of the same God, drift apart from the Jews of Jerusalem.",
            el: "Ο λαός της Σαμάρειας, λάτρεις του ίδιου Θεού, απομακρύνεται από τους Ιουδαίους της Ιερουσαλήμ."
          },
          extendedDescription: {
            en: "In the north, the Samaritans kept the Torah and worshipped the God of Israel but rejected Jerusalem, holding Mount Gerizim as the true holy place, where they later built their own temple. The growing rift between Jews and Samaritans, two branches of the same heritage, would echo for centuries — including in the Gospels' famous parable.",
            el: "Στον βορρά, οι Σαμαρείτες κράτησαν την Τορά και λάτρευαν τον Θεό του Ισραήλ αλλά απέρριπταν την Ιερουσαλήμ, θεωρώντας το Όρος Γαριζίν τον αληθινό ιερό τόπο, όπου αργότερα έχτισαν τον δικό τους ναό. Το διευρυνόμενο ρήγμα ανάμεσα σε Ιουδαίους και Σαμαρείτες, δύο κλάδους της ίδιας κληρονομιάς, θα αντηχούσε επί αιώνες — μεταξύ άλλων στη γνωστή παραβολή των Ευαγγελίων."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -407,
      era: {
        en: "The Diaspora",
        el: "Η Διασπορά"
      },
      events: [
        {
          title: {
            en: "The Jews of Elephantine",
            el: "Οι Ιουδαίοι της Ελεφαντίνης"
          },
          description: {
            en: "Papyri reveal a Jewish military colony in far-off Egypt with its own temple on the Nile.",
            el: "Πάπυροι αποκαλύπτουν μια ιουδαϊκή στρατιωτική αποικία στη μακρινή Αίγυπτο με δικό της ναό στον Νείλο."
          },
          extendedDescription: {
            en: "At Elephantine, an island in the Nile, a garrison of Jewish soldiers in Persian service left a rich archive of Aramaic papyri — letters, contracts, and appeals about their own temple to Yahweh. This vivid window onto a diaspora community shows how far the Jewish people had already spread, and how varied their worship still was, in the fifth century BCE.",
            el: "Στην Ελεφαντίνη, ένα νησί στον Νείλο, μια φρουρά Ιουδαίων στρατιωτών σε περσική υπηρεσία άφησε ένα πλούσιο αρχείο αραμαϊκών παπύρων — επιστολές, συμβόλαια και εκκλήσεις για τον δικό τους ναό προς τον Γιαχβέ. Αυτό το ζωντανό παράθυρο σε μια κοινότητα της διασποράς δείχνει πόσο μακριά είχε ήδη εξαπλωθεί ο ιουδαϊκός λαός, και πόσο ποικίλη ήταν ακόμη η λατρεία του, τον 5ο αιώνα π.Χ."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -400,
      label: "c. 400 BC",
      era: {
        en: "Persian Yehud",
        el: "Περσικό Γεχούντ"
      },
      events: [
        {
          title: {
            en: "The temple-state of Yehud",
            el: "Το ναϊκό κράτος του Γεχούντ"
          },
          description: {
            en: "Judah settles into a small, self-governing temple province led by its high priest under Persian oversight.",
            el: "Ο Ιούδας εγκαθίσταται σε μια μικρή, αυτοδιοικούμενη ναϊκή επαρχία με επικεφαλής τον αρχιερέα του υπό περσική εποπτεία."
          },
          extendedDescription: {
            en: "For a century and more Yehud was a modest, quiet province, its life centred on the Temple and increasingly led by the high priest, who minted small silver coins stamped 'YHD.' Sheltered within the vast Persian Empire, the Jewish community grew into the religious institutions that would carry it through the storms to come.",
            el: "Επί έναν αιώνα και πλέον το Γεχούντ ήταν μια μέτρια, ήσυχη επαρχία, με τη ζωή της επικεντρωμένη στον Ναό και ολοένα καθοδηγούμενη από τον αρχιερέα, που έκοβε μικρά ασημένια νομίσματα με τη σφραγίδα «ΓΧΝΤ». Προστατευμένη μέσα στην απέραντη Περσική Αυτοκρατορία, η ιουδαϊκή κοινότητα αναπτύχθηκε στους θρησκευτικούς θεσμούς που θα την οδηγούσαν μέσα από τις επερχόμενες θύελλες."
          },
          category: "political"
        }
      ]
    },
    {
      year: -332,
      era: {
        en: "Macedonian Conquest",
        el: "Μακεδονική Κατάκτηση"
      },
      events: [
        {
          title: {
            en: "Alexander ends Persian rule",
            el: "Ο Αλέξανδρος τερματίζει την περσική κυριαρχία"
          },
          description: {
            en: "Alexander the Great passes through the Levant, and Judea enters the Greek world.",
            el: "Ο Μέγας Αλέξανδρος περνά από τον Λεβάντε, και η Ιουδαία εισέρχεται στον ελληνικό κόσμο."
          },
          extendedDescription: {
            en: "As Alexander swept south to Egypt, Judea passed peacefully into his empire, and two centuries of Persian rule ended. Greek language, cities, and ideas now began to flow into the Levant, opening the Hellenistic age — an encounter that would enrich, tempt, and eventually convulse the Jewish world.",
            el: "Καθώς ο Αλέξανδρος σάρωνε νότια προς την Αίγυπτο, η Ιουδαία πέρασε ειρηνικά στην αυτοκρατορία του, και δύο αιώνες περσικής κυριαρχίας τελείωσαν. Η ελληνική γλώσσα, οι πόλεις και οι ιδέες άρχισαν τώρα να ρέουν στον Λεβάντε, ανοίγοντας την ελληνιστική εποχή — μια συνάντηση που θα πλούτιζε, θα δελέαζε και τελικά θα συγκλόνιζε τον ιουδαϊκό κόσμο."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
