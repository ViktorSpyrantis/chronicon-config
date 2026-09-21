/** Roman Judea — Ρωμαϊκή Ιουδαία · Ancient Levant */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const ROMAN_JUDEA = {
  id: "roman-judea" as const,
  label: {
    en: "Roman Judea",
    el: "Ρωμαϊκή Ιουδαία"
  },
  supertitle: {
    en: "The Ancient Levant",
    el: "Ο Αρχαίος Λεβάντες"
  },
  title: {
    en: "Roman Judea",
    el: "Ρωμαϊκή Ιουδαία"
  },
  subtitle: {
    en: "Under Rome, the land saw its most fateful centuries. Herod rebuilt the Temple on a colossal scale; a Galilean teacher named Jesus gave rise to a new faith; and two desperate revolts against Rome ended in the destruction of the Temple and the barring of Jews from Jerusalem. From these catastrophes emerged rabbinic Judaism and Christianity — two faiths that would remake the world. Slide across the Roman age of the Levant.",
    el: "Υπό τη Ρώμη, η γη γνώρισε τους πιο μοιραίους της αιώνες. Ο Ηρώδης ξανάχτισε τον Ναό σε κολοσσιαία κλίμακα· ένας Γαλιλαίος δάσκαλος ονόματι Ιησούς έδωσε αφορμή για μια νέα πίστη· και δύο απεγνωσμένες εξεγέρσεις κατά της Ρώμης κατέληξαν στην καταστροφή του Ναού και στον αποκλεισμό των Ιουδαίων από την Ιερουσαλήμ. Από αυτές τις καταστροφές αναδύθηκαν ο ραβινικός Ιουδαϊσμός και ο Χριστιανισμός — δύο πίστεις που θα ξαναέπλαθαν τον κόσμο. Μετακινηθείτε στη ρωμαϊκή εποχή του Λεβάντε."
  },
  menuDescription: {
    en: "Herod, the rise of Christianity, the fall of the Temple, and the diaspora.",
    el: "Ο Ηρώδης, η άνοδος του Χριστιανισμού, η πτώση του Ναού και η διασπορά."
  },
  footerLabel: {
    en: "Roman Judea · 63 BC-AD 135",
    el: "Ρωμαϊκή Ιουδαία · 63 π.Χ.-135 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Roman Judea",
    el: "Ρωμαϊκή Ιουδαία"
  },
  theme: THEMES.crimson,
  timeline: [
    {
      year: -37,
      era: {
        en: "Herodian Kingdom",
        el: "Ηρωδιανό Βασίλειο"
      },
      events: [
        {
          title: {
            en: "Herod the Great",
            el: "Ο Ηρώδης ο Μέγας"
          },
          description: {
            en: "Rome installs Herod as king of Judea, a brilliant, ruthless builder who rules for thirty-three years.",
            el: "Η Ρώμη εγκαθιστά τον Ηρώδη ως βασιλιά της Ιουδαίας, έναν λαμπρό, αδίστακτο οικοδόμο που κυβερνά για τριάντα τρία χρόνια."
          },
          extendedDescription: {
            en: "Herod, of Idumean descent, won the throne with Roman backing and held it by cunning, terror, and grand ambition. He built the port of Caesarea, the desert fortresses of Masada and Herodium, and much else, keeping Judea loyal to Rome — even as his savagery within his own family became legendary.",
            el: "Ο Ηρώδης, ιδουμαϊκής καταγωγής, κέρδισε τον θρόνο με ρωμαϊκή στήριξη και τον κράτησε με πανουργία, τρόμο και μεγάλη φιλοδοξία. Έχτισε το λιμάνι της Καισάρειας, τα ερημικά φρούρια της Μασάδα και του Ηρωδείου, και πολλά άλλα, κρατώντας την Ιουδαία πιστή στη Ρώμη — ακόμη κι ενώ η αγριότητά του μέσα στην ίδια του την οικογένεια έγινε θρυλική."
          },
          category: "political"
        }
      ]
    },
    {
      year: -20,
      era: {
        en: "Herodian Kingdom",
        el: "Ηρωδιανό Βασίλειο"
      },
      events: [
        {
          title: {
            en: "Herod's Temple",
            el: "Ο Ναός του Ηρώδη"
          },
          description: {
            en: "Herod rebuilds the Second Temple on a magnificent scale, its great platform surviving as the Western Wall.",
            el: "Ο Ηρώδης ξαναχτίζει τον Δεύτερο Ναό σε μεγαλόπρεπη κλίμακα, με τη μεγάλη πλατφόρμα του να επιβιώνει ως το Δυτικό Τείχος."
          },
          extendedDescription: {
            en: "Herod doubled the Temple Mount and raised a Temple of dazzling white stone and gold, one of the wonders of the Roman east. Its enormous retaining walls still stand; the Western Wall, the holiest site in Judaism today, is a remnant of Herod's platform — all that survived the catastrophe soon to come.",
            el: "Ο Ηρώδης διπλασίασε το Όρος του Ναού και ύψωσε έναν Ναό από εκθαμβωτική λευκή πέτρα και χρυσό, ένα από τα θαύματα της ρωμαϊκής ανατολής. Τα τεράστια τοιχία αντιστήριξής του στέκονται ακόμη· το Δυτικό Τείχος, ο ιερότερος τόπος του Ιουδαϊσμού σήμερα, είναι υπόλειμμα της πλατφόρμας του Ηρώδη — το μόνο που επέζησε της καταστροφής που σύντομα θα ερχόταν."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 6,
      era: {
        en: "Roman Province",
        el: "Ρωμαϊκή Επαρχία"
      },
      events: [
        {
          title: {
            en: "Judea becomes a Roman province",
            el: "Η Ιουδαία γίνεται ρωμαϊκή επαρχία"
          },
          description: {
            en: "Rome takes over direct rule of Judea, governing through prefects and a census that stokes unrest.",
            el: "Η Ρώμη αναλαμβάνει την άμεση διακυβέρνηση της Ιουδαίας, κυβερνώντας μέσω επάρχων και μιας απογραφής που υποδαυλίζει την αναταραχή."
          },
          extendedDescription: {
            en: "After Herod's kingdom was divided and mismanaged, Rome placed Judea under its own governors. A tax census provoked a revolt by Judas the Galilean and gave rise to the Zealots, who held that God alone should rule. Roman rule was efficient but resented, and the province simmered with messianic hope and rebellion.",
            el: "Αφού το βασίλειο του Ηρώδη διαιρέθηκε και κακοδιοικήθηκε, η Ρώμη έθεσε την Ιουδαία υπό τους δικούς της κυβερνήτες. Μια φορολογική απογραφή προκάλεσε εξέγερση από τον Ιούδα τον Γαλιλαίο και γέννησε τους Ζηλωτές, που πίστευαν ότι μόνο ο Θεός έπρεπε να κυβερνά. Η ρωμαϊκή κυριαρχία ήταν αποτελεσματική αλλά μισητή, και η επαρχία έβραζε με μεσσιανική ελπίδα και εξέγερση."
          },
          category: "political"
        }
      ]
    },
    {
      year: 30,
      label: "c. AD 30",
      era: {
        en: "Roman Province",
        el: "Ρωμαϊκή Επαρχία"
      },
      events: [
        {
          title: {
            en: "Jesus of Nazareth",
            el: "Ο Ιησούς από τη Ναζαρέτ"
          },
          description: {
            en: "A Jewish teacher from Galilee is crucified in Jerusalem; from his followers arises Christianity.",
            el: "Ένας Ιουδαίος δάσκαλος από τη Γαλιλαία σταυρώνεται στην Ιερουσαλήμ· από τους οπαδούς του αναδύεται ο Χριστιανισμός."
          },
          extendedDescription: {
            en: "Jesus of Nazareth preached in Galilee and Judea and was executed by crucifixion under the Roman prefect Pontius Pilate. His followers proclaimed that he had risen, and their movement, at first a current within Judaism, spread through the Roman world to become Christianity — a faith that would grow from this Judean root into the largest religion on earth.",
            el: "Ο Ιησούς από τη Ναζαρέτ κήρυξε στη Γαλιλαία και την Ιουδαία και εκτελέστηκε με σταύρωση υπό τον Ρωμαίο έπαρχο Πόντιο Πιλάτο. Οι οπαδοί του διακήρυξαν ότι είχε αναστηθεί, και το κίνημά τους, αρχικά ένα ρεύμα εντός του Ιουδαϊσμού, εξαπλώθηκε στον ρωμαϊκό κόσμο για να γίνει ο Χριστιανισμός — μια πίστη που θα μεγάλωνε από αυτή την ιουδαϊκή ρίζα στη μεγαλύτερη θρησκεία της γης."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 66,
      era: {
        en: "The Great Revolt",
        el: "Η Μεγάλη Επανάσταση"
      },
      events: [
        {
          title: {
            en: "The Great Jewish Revolt",
            el: "Η Μεγάλη Ιουδαϊκή Επανάσταση"
          },
          description: {
            en: "Judea rises against Rome, expelling the Romans from Jerusalem and igniting a devastating war.",
            el: "Η Ιουδαία εξεγείρεται κατά της Ρώμης, εκδιώκοντας τους Ρωμαίους από την Ιερουσαλήμ και πυροδοτώντας έναν καταστροφικό πόλεμο."
          },
          extendedDescription: {
            en: "Years of misrule and religious insult finally boiled over into open revolt. The rebels drove out the Roman garrison and defeated a relieving army, and for a time Judea was free. Rome answered with overwhelming force: the general Vespasian, soon emperor, and his son Titus methodically reconquered the country, closing in on Jerusalem.",
            el: "Χρόνια κακοδιοίκησης και θρησκευτικής προσβολής ξεχείλισαν τελικά σε ανοιχτή εξέγερση. Οι επαναστάτες έδιωξαν τη ρωμαϊκή φρουρά και νίκησαν έναν στρατό που ερχόταν σε βοήθεια, και για ένα διάστημα η Ιουδαία ήταν ελεύθερη. Η Ρώμη απάντησε με συντριπτική δύναμη: ο στρατηγός Βεσπασιανός, σύντομα αυτοκράτορας, και ο γιος του Τίτος ανακατέκτησαν μεθοδικά τη χώρα, στενεύοντας τον κλοιό γύρω από την Ιερουσαλήμ."
          },
          category: "military"
        }
      ]
    },
    {
      year: 70,
      era: {
        en: "The Great Revolt",
        el: "Η Μεγάλη Επανάσταση"
      },
      events: [
        {
          title: {
            en: "The destruction of the Second Temple",
            el: "Η καταστροφή του Δεύτερου Ναού"
          },
          description: {
            en: "Titus storms Jerusalem and burns the Temple, a catastrophe that transforms Judaism forever.",
            el: "Ο Τίτος κυριεύει την Ιερουσαλήμ και καίει τον Ναό, μια καταστροφή που μεταμορφώνει τον Ιουδαϊσμό για πάντα."
          },
          extendedDescription: {
            en: "After a brutal siege, the Romans took Jerusalem and destroyed the Temple in 70 CE; the spoils, including the golden menorah, were paraded in Rome and carved on the Arch of Titus. The loss of the Temple ended the sacrificial worship at the heart of ancient Judaism — and forced the faith to reinvent itself around the Torah and the synagogue.",
            el: "Έπειτα από μια βάναυση πολιορκία, οι Ρωμαίοι πήραν την Ιερουσαλήμ και κατέστρεψαν τον Ναό το 70 μ.Χ.· τα λάφυρα, μεταξύ τους η χρυσή επτάφωτη λυχνία, παρελάστηκαν στη Ρώμη και λαξεύτηκαν στην Αψίδα του Τίτου. Η απώλεια του Ναού τερμάτισε τη θυσιαστική λατρεία στην καρδιά του αρχαίου Ιουδαϊσμού — και ανάγκασε την πίστη να επανεφεύρει τον εαυτό της γύρω από την Τορά και τη συναγωγή."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Arch%20of%20Titus%20Menorah.png?width=1024",
            alt: {
              en: "The menorah carried off from Jerusalem, on the Arch of Titus in Rome",
              el: "Η επτάφωτη λυχνία που μεταφέρθηκε από την Ιερουσαλήμ, στην Αψίδα του Τίτου στη Ρώμη"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 73,
      era: {
        en: "The Great Revolt",
        el: "Η Μεγάλη Επανάσταση"
      },
      events: [
        {
          title: {
            en: "The last stand at Masada",
            el: "Η τελευταία αντίσταση στη Μασάδα"
          },
          description: {
            en: "The final rebels hold out on the desert fortress of Masada until the Romans breach its walls.",
            el: "Οι τελευταίοι επαναστάτες αντιστέκονται στο ερημικό φρούριο της Μασάδα ώσπου οι Ρωμαίοι διαρρηγνύουν τα τείχη του."
          },
          extendedDescription: {
            en: "The last holdouts of the revolt seized Herod's clifftop fortress of Masada by the Dead Sea. The Romans built a vast siege ramp to reach it, and according to the historian Josephus, the defenders chose death over slavery when the walls finally fell. Masada became a lasting symbol of resistance and the terrible cost of the war.",
            el: "Οι τελευταίοι αντιστασιακοί της εξέγερσης κατέλαβαν το φρούριο του Ηρώδη στη Μασάδα, πάνω σε γκρεμό δίπλα στη Νεκρά Θάλασσα. Οι Ρωμαίοι έχτισαν μια τεράστια πολιορκητική ράμπα για να το φτάσουν, και σύμφωνα με τον ιστορικό Ιώσηπο, οι υπερασπιστές επέλεξαν τον θάνατο αντί της σκλαβιάς όταν τα τείχη τελικά έπεσαν. Η Μασάδα έγινε ένα διαχρονικό σύμβολο αντίστασης και του φοβερού κόστους του πολέμου."
          },
          category: "military"
        }
      ]
    },
    {
      year: 90,
      label: "c. AD 90",
      era: {
        en: "After the Temple",
        el: "Μετά τον Ναό"
      },
      events: [
        {
          title: {
            en: "The rabbis of Yavneh",
            el: "Οι ραβίνοι της Γιαβνέ"
          },
          description: {
            en: "Sages gathering at Yavneh reshape Judaism around study and the Law after the Temple's loss.",
            el: "Σοφοί που συγκεντρώνονται στη Γιαβνέ αναδιαμορφώνουν τον Ιουδαϊσμό γύρω από τη μελέτη και τον Νόμο μετά την απώλεια του Ναού."
          },
          extendedDescription: {
            en: "With the Temple gone, a circle of sages, led by tradition's Johanan ben Zakkai, gathered at Yavneh to refound Judaism on the study and practice of the Law. Their work of interpretation began the rabbinic tradition that produced the Mishnah and Talmud — the form of Judaism that has endured, without Temple or sacrifice, ever since.",
            el: "Με τον Ναό χαμένο, ένας κύκλος σοφών, με επικεφαλής κατά την παράδοση τον Γιοχανάν μπεν Ζακάι, συγκεντρώθηκε στη Γιαβνέ για να ξαναθεμελιώσει τον Ιουδαϊσμό στη μελέτη και την τήρηση του Νόμου. Το ερμηνευτικό τους έργο ξεκίνησε τη ραβινική παράδοση που παρήγαγε τη Μισνά και το Ταλμούδ — τη μορφή του Ιουδαϊσμού που έχει αντέξει, χωρίς Ναό και θυσία, από τότε."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 132,
      era: {
        en: "Bar Kokhba Revolt",
        el: "Επανάσταση του Μπαρ Κοχβά"
      },
      events: [
        {
          title: {
            en: "The Bar Kokhba Revolt",
            el: "Η επανάσταση του Μπαρ Κοχβά"
          },
          description: {
            en: "A last great revolt under Simon bar Kokhba briefly frees Judea before Rome crushes it.",
            el: "Μια τελευταία μεγάλη εξέγερση υπό τον Σίμωνα Μπαρ Κοχβά ελευθερώνει για λίγο την Ιουδαία προτού η Ρώμη τη συντρίψει."
          },
          extendedDescription: {
            en: "Provoked by the emperor Hadrian's plans for Jerusalem, the Jews rose a final time under Simon bar Kokhba, hailed by some as the messiah. For three years they held an independent state, but Rome poured in legions and crushed the revolt with terrible slaughter, laying waste to Judea and its villages.",
            el: "Προκαλούμενοι από τα σχέδια του αυτοκράτορα Αδριανού για την Ιερουσαλήμ, οι Ιουδαίοι ξεσηκώθηκαν για τελευταία φορά υπό τον Σίμωνα Μπαρ Κοχβά, που κάποιοι χαιρέτισαν ως τον μεσσία. Επί τρία χρόνια κράτησαν ένα ανεξάρτητο κράτος, όμως η Ρώμη έριξε λεγεώνες και συνέτριψε την εξέγερση με φοβερή σφαγή, ερημώνοντας την Ιουδαία και τα χωριά της."
          },
          category: "military"
        }
      ]
    },
    {
      year: 135,
      era: {
        en: "Aelia Capitolina",
        el: "Αιλία Καπιτωλίνα"
      },
      events: [
        {
          title: {
            en: "Aelia Capitolina and the diaspora",
            el: "Η Αιλία Καπιτωλίνα και η διασπορά"
          },
          description: {
            en: "Rome rebuilds Jerusalem as a pagan city and bars Jews from it, deepening the long dispersion.",
            el: "Η Ρώμη ξαναχτίζει την Ιερουσαλήμ ως ειδωλολατρική πόλη και αποκλείει τους Ιουδαίους από αυτήν, βαθαίνοντας τη μακρά διασπορά."
          },
          extendedDescription: {
            en: "After the revolt, Hadrian refounded Jerusalem as the Roman colony Aelia Capitolina, forbade Jews to enter, and renamed the province Syria Palaestina to erase the name of Judea. The centre of Jewish life shifted for good to Galilee and the diaspora — yet, carried in scripture and prayer, the memory of this land endured across the world for eighteen centuries.",
            el: "Μετά την εξέγερση, ο Αδριανός ξαναΐδρυσε την Ιερουσαλήμ ως τη ρωμαϊκή αποικία Αιλία Καπιτωλίνα, απαγόρευσε στους Ιουδαίους να εισέρχονται και μετονόμασε την επαρχία σε Συρία Παλαιστίνη για να σβήσει το όνομα της Ιουδαίας. Το κέντρο της ιουδαϊκής ζωής μετατοπίστηκε οριστικά στη Γαλιλαία και τη διασπορά — ωστόσο, κρατημένη στη γραφή και την προσευχή, η μνήμη αυτής της γης άντεξε σε όλον τον κόσμο επί δεκαοκτώ αιώνες."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
