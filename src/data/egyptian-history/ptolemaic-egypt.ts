/** Ptolemaic Period — Πτολεμαϊκή Περίοδος · Egyptian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const PTOLEMAIC_EGYPT = {
  id: "ptolemaic-egypt" as const,
  label: {
    en: "Ptolemaic Period",
    el: "Πτολεμαϊκή Περίοδος"
  },
  supertitle: {
    en: "Hellenistic Egypt",
    el: "Ελληνιστική Αίγυπτος"
  },
  title: {
    en: "The Ptolemaic Period",
    el: "Η Πτολεμαϊκή Περίοδος"
  },
  subtitle: {
    en: "From Alexander's conquest and the foundation of the dynasty by Ptolemy I through the golden age of Alexandria and its Library, the revolts and Roman shadow over the later Ptolemies, the Rosetta Stone and the dynasty's slow decline, to the reign of Cleopatra VII, the defeat at Actium, and the Roman annexation of Egypt in 30 BCE. Slide across three centuries of Greek pharaohs, when Egypt was the richest kingdom of the Hellenistic world.",
    el: "Από την κατάκτηση του Αλεξάνδρου και την ίδρυση της δυναστείας από τον Πτολεμαίο Α΄, μέσα από τη χρυσή εποχή της Αλεξάνδρειας και της Βιβλιοθήκης της, τις εξεγέρσεις και τη ρωμαϊκή σκιά πάνω από τους μεταγενέστερους Πτολεμαίους, τη Στήλη της Ροζέτας και την αργή παρακμή της δυναστείας, ως τη βασιλεία της Κλεοπάτρας Ζ΄, την ήττα στο Άκτιο και τη ρωμαϊκή προσάρτηση της Αιγύπτου το 30 π.Χ. Μετακινηθείτε ανάμεσα σε τρεις αιώνες Ελλήνων φαραώ, όταν η Αίγυπτος ήταν το πλουσιότερο βασίλειο του ελληνιστικού κόσμου."
  },
  menuDescription: {
    en: "Greek pharaohs, the Library of Alexandria, and Cleopatra's last stand at Actium.",
    el: "Έλληνες φαραώ, η Βιβλιοθήκη της Αλεξάνδρειας κι η τελευταία αναμέτρηση της Κλεοπάτρας στο Άκτιο."
  },
  footerLabel: {
    en: "Ptolemaic Period · 332–30 BCE",
    el: "Πτολεμαϊκή Περίοδος · 332–30 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Ptolemaic Period",
    el: "Η Πτολεμαϊκή Περίοδος"
  },
  theme: THEMES.violet,
  timeline: [
    {
      year: -323,
      era: {
        en: "Foundation",
        el: "Ίδρυση"
      },
      events: [
        {
          title: {
            en: "Ptolemy takes Egypt",
            el: "Ο Πτολεμαίος αναλαμβάνει την Αίγυπτο"
          },
          description: {
            en: "On the death of Alexander the Great, his general Ptolemy son of Lagus secures Egypt as satrap, founding the dynasty that will rule for nearly three centuries.",
            el: "Με τον θάνατο του Μεγάλου Αλεξάνδρου, ο στρατηγός του Πτολεμαίος, γιος του Λάγου, εξασφαλίζει την Αίγυπτο ως σατράπης, ιδρύοντας τη δυναστεία που θα κυβερνήσει για σχεδόν τρεις αιώνες."
          },
          extendedDescription: {
            en: "In the division of Alexander's empire among his generals, Ptolemy chose wealthy, defensible Egypt. He boldly hijacked Alexander's funeral cortège, bringing the conqueror's body to Memphis and later Alexandria to legitimise his rule. By 305 BCE he proclaimed himself King Ptolemy I Soter ('Saviour'), establishing a Macedonian-Greek monarchy that governed Egypt through a Greek-speaking elite while presenting itself to Egyptians in the guise of traditional pharaohs.",
            el: "Στη διανομή της αυτοκρατορίας του Αλεξάνδρου μεταξύ των στρατηγών του, ο Πτολεμαίος επέλεξε την πλούσια και εύκολα υπερασπίσιμη Αίγυπτο. Τολμηρά υπεξαίρεσε τη νεκρική πομπή του Αλεξάνδρου, φέρνοντας το σώμα του κατακτητή στη Μέμφιδα και αργότερα στην Αλεξάνδρεια για να νομιμοποιήσει την εξουσία του. Έως το 305 π.Χ. ανακηρύχθηκε Βασιλιάς Πτολεμαίος Α΄ Σωτήρ, εδραιώνοντας μια μακεδονική-ελληνική μοναρχία που κυβερνούσε την Αίγυπτο μέσω μιας ελληνόφωνης ελίτ, ενώ παρουσιαζόταν στους Αιγυπτίους με το προσωπείο των παραδοσιακών φαραώ."
          },
          category: "political"
        }
      ]
    },
    {
      year: -295,
      era: {
        en: "Early Ptolemies",
        el: "Πρώιμοι Πτολεμαίοι"
      },
      events: [
        {
          title: {
            en: "The Library and Museum of Alexandria",
            el: "Η Βιβλιοθήκη και το Μουσείο της Αλεξάνδρειας"
          },
          description: {
            en: "Ptolemy I and his son establish the Museum and Great Library of Alexandria, making the city the foremost centre of learning in the ancient world.",
            el: "Ο Πτολεμαίος Α΄ και ο γιος του ιδρύουν το Μουσείο και τη Μεγάλη Βιβλιοθήκη της Αλεξάνδρειας, καθιστώντας την πόλη το κορυφαίο κέντρο μάθησης του αρχαίου κόσμου."
          },
          extendedDescription: {
            en: "The Mouseion, a royally funded institute of scholars, and its Library, which aimed to collect all the writings of the world, drew the greatest minds of the age. Here Euclid systematised geometry, Eratosthenes measured the circumference of the Earth, Aristarchus proposed a sun-centred cosmos, and scholars edited the texts of Homer. Alexandria, with its Pharos lighthouse — one of the Seven Wonders — became the intellectual and commercial capital of the Hellenistic world.",
            el: "Το Μουσείον, ένα βασιλικά χρηματοδοτούμενο ινστιτούτο λογίων, και η Βιβλιοθήκη του, που στόχευε να συγκεντρώσει όλα τα γραπτά του κόσμου, προσέλκυσαν τα μεγαλύτερα πνεύματα της εποχής. Εδώ ο Ευκλείδης συστηματοποίησε τη γεωμετρία, ο Ερατοσθένης μέτρησε την περιφέρεια της Γης, ο Αρίσταρχος πρότεινε ένα ηλιοκεντρικό σύμπαν, και λόγιοι επιμελήθηκαν τα κείμενα του Ομήρου. Η Αλεξάνδρεια, με τον φάρο της — ένα από τα Επτά Θαύματα — έγινε η πνευματική και εμπορική πρωτεύουσα του ελληνιστικού κόσμου."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -283,
      era: {
        en: "Ptolemaic Dynasty",
        el: "Δυναστεία των Πτολεμαίων"
      },
      events: [
        {
          title: {
            en: "Ptolemy II and the height of the kingdom",
            el: "Ο Πτολεμαίος Β΄ και το απόγειο του βασιλείου"
          },
          description: {
            en: "Ptolemy II Philadelphus presides over the dynasty's golden age, expanding Egypt's empire abroad and its splendour at home.",
            el: "Ο Πτολεμαίος Β΄ Φιλάδελφος προεδρεύει της χρυσής εποχής της δυναστείας, επεκτείνοντας την αυτοκρατορία της Αιγύπτου στο εξωτερικό και τη μεγαλοπρέπειά της στο εσωτερικό."
          },
          extendedDescription: {
            en: "Under Ptolemy II the kingdom reached its zenith, controlling Cyprus, Cyrene, parts of the Aegean and the Levantine coast, and trading as far as India and Nubia. He married his sister Arsinoe II, founding the Ptolemaic custom of sibling marriage and a powerful ruler cult. His court patronised poets such as Callimachus and Theocritus, and tradition credits his reign with the start of the Septuagint, the Greek translation of the Hebrew scriptures made by the Jewish community of Alexandria.",
            el: "Επί Πτολεμαίου Β΄ το βασίλειο έφτασε στο απόγειό του, ελέγχοντας την Κύπρο, την Κυρήνη, τμήματα του Αιγαίου και τις ακτές του Λεβάντε, και εμπορευόμενο ως την Ινδία και τη Νουβία. Παντρεύτηκε την αδελφή του Αρσινόη Β΄, εγκαινιάζοντας το πτολεμαϊκό έθιμο του γάμου μεταξύ αδελφών και μια ισχυρή λατρεία των ηγεμόνων. Η αυλή του προστάτευσε ποιητές όπως ο Καλλίμαχος και ο Θεόκριτος, και η παράδοση αποδίδει στη βασιλεία του την έναρξη των Εβδομήκοντα, της ελληνικής μετάφρασης των εβραϊκών γραφών που έγινε από την εβραϊκή κοινότητα της Αλεξάνδρειας."
          },
          category: "political"
        }
      ]
    },
    {
      year: -217,
      era: {
        en: "Native Unrest",
        el: "Εγχώρια Αναταραχή"
      },
      events: [
        {
          title: {
            en: "Raphia and the revolt of the Egyptians",
            el: "Η Ραφία και η εξέγερση των Αιγυπτίων"
          },
          description: {
            en: "Ptolemy IV defeats the Seleucids at Raphia by arming native Egyptian troops, who soon turn their new confidence into revolt and a breakaway state in the south.",
            el: "Ο Πτολεμαίος Δ΄ νικά τους Σελευκίδες στη Ραφία οπλίζοντας εγχώρια αιγυπτιακά στρατεύματα, τα οποία σύντομα μετατρέπουν τη νέα τους αυτοπεποίθηση σε εξέγερση και ένα αποσχισμένο κράτος στον νότο."
          },
          extendedDescription: {
            en: "At the Battle of Raphia in 217 BCE against Antiochus III, the Ptolemies for the first time fielded a large Egyptian phalanx, winning a great victory. But the experience emboldened the native population: a major revolt erupted in Upper Egypt, where rebel pharaohs Haronnophris and Chaonnophris ruled an independent Thebaid for some twenty years. The later Ptolemies increasingly struggled with internal rebellion, dynastic feuds, and a restive priesthood, the dynasty's outward strength masking growing fragility.",
            el: "Στη Μάχη της Ραφίας το 217 π.Χ. εναντίον του Αντιόχου Γ΄, οι Πτολεμαίοι για πρώτη φορά παρέταξαν μια μεγάλη αιγυπτιακή φάλαγγα, κερδίζοντας μια μεγάλη νίκη. Όμως η εμπειρία ενθάρρυνε τον εγχώριο πληθυσμό: μια μεγάλη εξέγερση ξέσπασε στην Άνω Αίγυπτο, όπου οι επαναστάτες φαραώ Χαρονώφρις και Χαονώφρις κυβέρνησαν μια ανεξάρτητη Θηβαΐδα για περίπου είκοσι χρόνια. Οι μεταγενέστεροι Πτολεμαίοι αγωνίζονταν ολοένα και περισσότερο με εσωτερικές εξεγέρσεις, δυναστικές έριδες και ένα ανήσυχο ιερατείο, με την εξωτερική ισχύ της δυναστείας να συγκαλύπτει την αυξανόμενη ευθραυστότητα."
          },
          category: "military"
        }
      ]
    },
    {
      year: -196,
      era: {
        en: "Ptolemaic Egypt",
        el: "Πτολεμαϊκή Αίγυπτος"
      },
      events: [
        {
          title: {
            en: "The Rosetta Stone",
            el: "Η Στήλη της Ροζέτας"
          },
          description: {
            en: "Priests issue a decree honouring the boy-king Ptolemy V in three scripts; centuries later this trilingual stone will unlock the reading of hieroglyphs.",
            el: "Ιερείς εκδίδουν ένα διάταγμα προς τιμήν του παιδιού-βασιλιά Πτολεμαίου Ε΄ σε τρεις γραφές· αιώνες αργότερα αυτή η τρίγλωσση στήλη θα ξεκλειδώσει την ανάγνωση των ιερογλυφικών."
          },
          extendedDescription: {
            en: "The Memphis Decree of 196 BCE, recording priestly honours for Ptolemy V Epiphanes, was inscribed in hieroglyphic, Demotic, and Greek. Rediscovered by French soldiers in 1799 and studied above all by Jean-François Champollion, who announced his decipherment in 1822, the Rosetta Stone became the key that reopened three thousand years of ancient Egyptian writing to the modern world — the founding document of Egyptology.",
            el: "Το Διάταγμα της Μέμφιδος του 196 π.Χ., που κατέγραφε ιερατικές τιμές για τον Πτολεμαίο Ε΄ Επιφανή, χαράχτηκε σε ιερογλυφική, δημοτική και ελληνική γραφή. Ανακαλυμμένη εκ νέου από Γάλλους στρατιώτες το 1799 και μελετημένη πάνω απ' όλα από τον Ζαν-Φρανσουά Σαμπολιόν, ο οποίος ανήγγειλε την αποκρυπτογράφησή του το 1822, η Στήλη της Ροζέτας έγινε το κλειδί που ξανάνοιξε τρεις χιλιάδες χρόνια αρχαίας αιγυπτιακής γραφής στον σύγχρονο κόσμο — το ιδρυτικό έγγραφο της Αιγυπτιολογίας."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Rosetta_Stone.JPG?width=1024",
            alt: {
              en: "The Rosetta Stone",
              el: "Η Στήλη της Ροζέτας"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -168,
      era: {
        en: "Roman Shadow",
        el: "Ρωμαϊκή Σκιά"
      },
      events: [
        {
          title: {
            en: "Rome's 'Day of Eleusis'",
            el: "Η «Ημέρα της Ελευσίνας» της Ρώμης"
          },
          description: {
            en: "When the Seleucid king Antiochus IV invades Egypt, a single Roman envoy forces him to withdraw, revealing that Egypt's fate now lies in Rome's hands.",
            el: "Όταν ο Σελευκίδης βασιλιάς Αντίοχος Δ΄ εισβάλλει στην Αίγυπτο, ένας μόνο Ρωμαίος απεσταλμένος τον αναγκάζει να αποσυρθεί, αποκαλύπτοντας ότι η μοίρα της Αιγύπτου βρίσκεται πλέον στα χέρια της Ρώμης."
          },
          extendedDescription: {
            en: "Antiochus IV had all but conquered Ptolemaic Egypt when the Roman envoy Gaius Popillius Laenas met him near Alexandria. Handed a senatorial ultimatum to leave, Antiochus asked for time to consider; Popillius drew a circle in the sand around him and demanded an answer before he stepped out of it. The humiliated king withdrew. The episode showed that the Ptolemies survived only at Rome's pleasure, and successive kings increasingly sought Roman protection and arbitration.",
            el: "Ο Αντίοχος Δ΄ είχε σχεδόν κατακτήσει την πτολεμαϊκή Αίγυπτο όταν ο Ρωμαίος απεσταλμένος Γάιος Ποπίλλιος Λαίνας τον συνάντησε κοντά στην Αλεξάνδρεια. Λαμβάνοντας ένα τελεσίγραφο της Συγκλήτου να αποχωρήσει, ο Αντίοχος ζήτησε χρόνο να σκεφτεί· ο Ποπίλλιος χάραξε έναν κύκλο στην άμμο γύρω του και απαίτησε απάντηση πριν βγει από αυτόν. Ο ταπεινωμένος βασιλιάς αποσύρθηκε. Το επεισόδιο έδειξε ότι οι Πτολεμαίοι επιβίωναν μόνο με την ανοχή της Ρώμης, και διαδοχικοί βασιλείς αναζητούσαν ολοένα και περισσότερο ρωμαϊκή προστασία και διαιτησία."
          },
          category: "political"
        }
      ]
    },
    {
      year: -51,
      era: {
        en: "Cleopatra VII",
        el: "Κλεοπάτρα Ζ΄"
      },
      events: [
        {
          title: {
            en: "The accession of Cleopatra VII",
            el: "Η άνοδος της Κλεοπάτρας Ζ΄"
          },
          description: {
            en: "Cleopatra VII, the last and most famous of the Ptolemies, comes to the throne and binds Egypt's survival to the leaders of Rome.",
            el: "Η Κλεοπάτρα Ζ΄, η τελευταία και πιο διάσημη των Πτολεμαίων, ανεβαίνει στον θρόνο και συνδέει την επιβίωση της Αιγύπτου με τους ηγέτες της Ρώμης."
          },
          extendedDescription: {
            en: "Brilliant, multilingual, and politically astute — reputedly the first of her line to learn Egyptian — Cleopatra fought her siblings for the throne and won the backing of Julius Caesar, who restored her to power and fathered her son Caesarion. After Caesar's assassination she allied with Mark Antony, both as lovers and as partners in a vision of an eastern Mediterranean realm. Their union and ambitions, however, set them on a collision course with Caesar's heir, Octavian.",
            el: "Λαμπρή, πολύγλωσση και πολιτικά οξυδερκής — φημολογείται ως η πρώτη της γενιάς της που έμαθε αιγυπτιακά — η Κλεοπάτρα πάλεψε με τα αδέλφια της για τον θρόνο και κέρδισε την υποστήριξη του Ιουλίου Καίσαρα, ο οποίος την αποκατέστησε στην εξουσία και απέκτησε μαζί της τον γιο της Καισαρίωνα. Μετά τη δολοφονία του Καίσαρα συμμάχησε με τον Μάρκο Αντώνιο, ως εραστές αλλά και ως εταίροι σε ένα όραμα μιας ανατολικομεσογειακής επικράτειας. Η ένωση και οι φιλοδοξίες τους, ωστόσο, τους έθεσαν σε πορεία σύγκρουσης με τον κληρονόμο του Καίσαρα, τον Οκταβιανό."
          },
          category: "political"
        }
      ]
    },
    {
      year: -31,
      era: {
        en: "The Fall",
        el: "Η Πτώση"
      },
      events: [
        {
          title: {
            en: "Actium and the death of Cleopatra",
            el: "Το Άκτιο και ο θάνατος της Κλεοπάτρας"
          },
          description: {
            en: "Octavian crushes the fleet of Antony and Cleopatra at Actium; within a year both are dead and Egypt becomes a province of Rome, ending the age of the pharaohs.",
            el: "Ο Οκταβιανός συντρίβει τον στόλο του Αντωνίου και της Κλεοπάτρας στο Άκτιο· μέσα σε έναν χρόνο και οι δύο είναι νεκροί και η Αίγυπτος γίνεται επαρχία της Ρώμης, τερματίζοντας την εποχή των φαραώ."
          },
          extendedDescription: {
            en: "The naval Battle of Actium in 31 BCE off the coast of Greece destroyed the cause of Antony and Cleopatra. As Octavian advanced on Alexandria the following year, Antony took his own life, and Cleopatra, refusing to be paraded in a Roman triumph, died soon after — by tradition from the bite of an asp. Her son Caesarion was killed, the dynasty extinguished, and Egypt annexed as the personal domain of Octavian, now Augustus. Three thousand years of pharaonic rule had come to an end, and Egypt entered its long Roman age.",
            el: "Η ναυμαχία του Ακτίου το 31 π.Χ. στ' ανοιχτά των ακτών της Ελλάδας κατέστρεψε την υπόθεση του Αντωνίου και της Κλεοπάτρας. Καθώς ο Οκταβιανός προήλαυνε προς την Αλεξάνδρεια τον επόμενο χρόνο, ο Αντώνιος αυτοκτόνησε, και η Κλεοπάτρα, αρνούμενη να διαπομπευθεί σε ρωμαϊκό θρίαμβο, πέθανε λίγο αργότερα — κατά την παράδοση από το δάγκωμα μιας ασπίδας. Ο γιος της Καισαρίων σκοτώθηκε, η δυναστεία εξαλείφθηκε, και η Αίγυπτος προσαρτήθηκε ως προσωπικό κτήμα του Οκταβιανού, τώρα Αυγούστου. Τρεις χιλιάδες χρόνια φαραωνικής διακυβέρνησης είχαν λάβει τέλος, και η Αίγυπτος εισήλθε στη μακρά ρωμαϊκή της εποχή."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kleopatra-VII.-Altes-Museum-Berlin1.jpg?width=1024",
            alt: {
              en: "Portrait bust of Cleopatra VII",
              el: "Προτομή της Κλεοπάτρας Ζ΄"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
