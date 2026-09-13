/** Italian Renaissance — Ιταλική Αναγέννηση · Italian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const ITALIAN_RENAISSANCE = {
  id: "italian-renaissance" as const,
  label: {
    en: "Italian Renaissance",
    el: "Ιταλική Αναγέννηση"
  },
  supertitle: {
    en: "Rinascimento",
    el: "Ριναστσιμέντο"
  },
  title: {
    en: "The Italian Renaissance",
    el: "Η Ιταλική Αναγέννηση"
  },
  subtitle: {
    en: "From Giotto and Petrarch to the Sack of Rome — the rebirth of classical learning, art, and political thought in the city-states of Italy. Slide across the centuries to read the major events that transformed Florence, Rome, and Venice into the cradle of the modern West.",
    el: "Από τον Τζιότο και τον Πετράρχη έως τη Λεηλασία της Ρώμης — η αναγέννηση της κλασικής παιδείας, της τέχνης και της πολιτικής σκέψης στις πόλεις-κράτη της Ιταλίας. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα γεγονότα που μετέτρεψαν τη Φλωρεντία, τη Ρώμη και τη Βενετία σε λίκνο του σύγχρονου δυτικού κόσμου."
  },
  menuDescription: {
    en: "Art, humanism and hard politics in the city-states that reinvented Europe.",
    el: "Τέχνη, ουμανισμός και σκληρή πολιτική στις πόλεις-κράτη που ανακάλυψαν ξανά την Ευρώπη."
  },
  footerLabel: {
    en: "Italian Renaissance · 1300-1600 AD",
    el: "Ιταλική Αναγέννηση · 1300-1600 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Italian Renaissance",
    el: "Ιταλική Αναγέννηση"
  },
  theme: THEMES.bronze,
  timeline: [
    {
      year: 1305,
      era: {
        en: "Trecento",
        el: "Τρετσέντο"
      },
      events: [
        {
          title: {
            en: "Giotto's Scrovegni Chapel Frescoes",
            el: "Οι Τοιχογραφίες του Τζιότο στο Παρεκκλήσι Σκροβένι"
          },
          description: {
            en: "Giotto di Bondone completes the fresco cycle in Padua, breaking from Byzantine convention with a new naturalism that anticipates the Renaissance.",
            el: "Ο Τζιότο ντι Μποντόνε ολοκληρώνει τον τοιχογραφικό κύκλο στην Πάδοβα, σπάζοντας τη βυζαντινή σύμβαση με έναν νέο νατουραλισμό που προαναγγέλλει την Αναγέννηση."
          },
          extendedDescription: {
            en: "Commissioned by the Paduan banker Enrico Scrovegni, partly to expiate the usury of his father Reginaldo (whom Dante had placed among the damned), the Arena Chapel cycle covers the walls with the lives of the Virgin and of Christ, set against a deep lapis-lazuli sky. Giotto abandoned the gold grounds and weightless figures of the Italo-Byzantine maniera greca in favour of solid bodies that cast shadows, occupy convincing architectural space, and register human emotion through gesture and glance. The Lamentation of Christ, with its mourners hunched over the dead body and angels writhing in the sky, became the touchstone of dramatic painting for every later generation. Vasari would later credit Giotto with re-founding the art of painting, and modern historians treat the Scrovegni frescoes as the first decisive step from medieval icon to Renaissance picture.",
            el: "Παραγγελμένος από τον Παδοβανό τραπεζίτη Ενρίκο Σκροβένι, εν μέρει προς εξιλέωση της τοκογλυφίας του πατέρα του Ρεϊνάλντο (τον οποίο ο Δάντης είχε τοποθετήσει μεταξύ των κολασμένων), ο κύκλος του Παρεκκλησίου της Αρένας καλύπτει τους τοίχους με σκηνές από τη ζωή της Παναγίας και του Χριστού, σε φόντο βαθύ ουρανού από lapis lazuli. Ο Τζιότο εγκατέλειψε τα χρυσά βάθη και τις άβαρες μορφές της ιταλο-βυζαντινής maniera greca χάριν στερεών σωμάτων που ρίχνουν σκιές, καταλαμβάνουν πειστικό αρχιτεκτονικό χώρο και αποδίδουν το ανθρώπινο συναίσθημα μέσω χειρονομίας και βλέμματος. Ο Επιτάφιος Θρήνος, με τους θρηνούντες σκυμμένους πάνω από το νεκρό σώμα και τους αγγέλους να συστρέφονται στον ουρανό, έγινε το σημείο αναφοράς της δραματικής ζωγραφικής για κάθε επόμενη γενιά. Ο Βαζάρι αργότερα θα απέδιδε στον Τζιότο την ανίδρυση της τέχνης της ζωγραφικής, και οι σύγχρονοι ιστορικοί θεωρούν τις τοιχογραφίες των Σκροβένι ως το πρώτο αποφασιστικό βήμα από τη μεσαιωνική εικόνα στον αναγεννησιακό πίνακα."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Giotto%20-%20Scrovegni%20-%20-36-%20-%20Lamentation%20%28The%20Mourning%20of%20Christ%29.jpg?width=1024",
            alt: {
              en: "Giotto, Lamentation of Christ, Scrovegni Chapel, Padua",
              el: "Τζιότο, Επιτάφιος Θρήνος, Παρεκκλήσι Σκροβένι, Πάδοβα"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1341,
      era: {
        en: "Humanism",
        el: "Ουμανισμός"
      },
      events: [
        {
          title: {
            en: "Petrarch Crowned Poet Laureate",
            el: "Στέψη του Πετράρχη ως Δαφνοστεφανωμένου Ποιητή"
          },
          description: {
            en: "Francesco Petrarca is crowned poet laureate on the Capitoline Hill in Rome, reviving an ancient honour and inaugurating Renaissance humanism.",
            el: "Ο Φραντσέσκο Πετράρκα στέφεται δαφνοστεφανωμένος ποιητής στον Καπιτωλίνο Λόφο της Ρώμης, αναβιώνοντας μια αρχαία τιμή και εγκαινιάζοντας τον αναγεννησιακό ουμανισμό."
          },
          extendedDescription: {
            en: "Petrarch had cultivated his reputation as the heir of the ancient poets through years of correspondence and self-promotion, securing simultaneous invitations from Paris and Rome before choosing the Eternal City for its classical resonance. On 8 April 1341, in a ceremony staged on the Capitoline by King Robert of Naples and the Roman senator Orso dell'Anguillara, he received a laurel wreath, a ring, and a privilegium granting him the right to teach poetry and history anywhere in Christendom. His coronation oration, the Collatio laureationis, defended poetry as a serious moral discipline rooted in the auctores of antiquity, articulating a programme for what would later be called the studia humanitatis. The hunt for forgotten Latin manuscripts that he pursued in monastic libraries — yielding rediscoveries such as Cicero's letters to Atticus — established the philological habits on which Italian humanism was built.",
            el: "Ο Πετράρχης είχε καλλιεργήσει επί χρόνια τη φήμη του ως διαδόχου των αρχαίων ποιητών μέσω αλληλογραφίας και αυτοπροβολής, εξασφαλίζοντας ταυτόχρονες προσκλήσεις από το Παρίσι και τη Ρώμη πριν επιλέξει την Αιώνια Πόλη χάρη στην κλασική της απήχηση. Στις 8 Απριλίου 1341, σε τελετή που οργανώθηκε στο Καπιτώλιο από τον βασιλιά Ροβέρτο της Νάπολης και τον Ρωμαίο συγκλητικό Όρσο ντελ' Ανγκουιλλάρα, έλαβε δάφνινο στέφανο, δαχτυλίδι και privilegium που του παρείχε το δικαίωμα να διδάσκει ποίηση και ιστορία οπουδήποτε στη Χριστιανοσύνη. Ο λόγος της στέψης του, η Collatio laureationis, υπερασπίσθηκε την ποίηση ως σοβαρή ηθική επιστήμη ριζωμένη στους auctores της αρχαιότητας, διατυπώνοντας ένα πρόγραμμα για ό,τι αργότερα θα ονομαζόταν studia humanitatis. Το κυνήγι ξεχασμένων λατινικών χειρογράφων στις μοναστηριακές βιβλιοθήκες — που απέφερε ανακαλύψεις όπως οι επιστολές του Κικέρωνα προς τον Αττικό — εγκαθίδρυσε τις φιλολογικές συνήθειες πάνω στις οποίες οικοδομήθηκε ο ιταλικός ουμανισμός."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Francesco_Petrarca00.jpg?width=1024",
            alt: {
              en: "Portrait of Francesco Petrarca",
              el: "Προσωπογραφία του Φραντσέσκο Πετράρκα"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1397,
      era: {
        en: "Medici Florence",
        el: "Φλωρεντία των Μεδίκων"
      },
      events: [
        {
          title: {
            en: "Founding of the Medici Bank",
            el: "Ίδρυση της Τράπεζας των Μεδίκων"
          },
          description: {
            en: "Giovanni di Bicci de' Medici founds the Medici Bank in Florence, building the financial foundation for a dynasty that will dominate Renaissance patronage.",
            el: "Ο Τζοβάνι ντι Μπίτσι ντε' Μέντιτσι ιδρύει την Τράπεζα των Μεδίκων στη Φλωρεντία, χτίζοντας τη χρηματοοικονομική βάση μιας δυναστείας που θα κυριαρχήσει στην αναγεννησιακή χορηγία τεχνών."
          },
          extendedDescription: {
            en: "Giovanni di Bicci had served his apprenticeship in his cousin Vieri's Roman bank before establishing his own institution as a partnership of branches in Rome, Florence, and later Venice, Geneva, Bruges, and London. The Medici Bank's pre-eminence rested on its position as the principal financier of the Apostolic Camera, a privilege that brought it the deposits of cardinals and the proceeds of papal taxation across Christendom. Innovations in double-entry bookkeeping, the development of bills of exchange that circumvented the Church's usury prohibitions, and a structure in which each branch operated as a semi-independent partnership allowed the firm to manage risk on an unprecedented international scale. The wealth generated by the bank funded Cosimo's library at San Marco, Brunelleschi's dome, and three generations of artistic patronage that effectively bankrolled the Florentine Renaissance.",
            el: "Ο Τζοβάνι ντι Μπίτσι είχε μαθητεύσει στη ρωμαϊκή τράπεζα του εξαδέλφου του Βιέρι πριν ιδρύσει το δικό του οίκο ως εταιρεία υποκαταστημάτων στη Ρώμη, τη Φλωρεντία και αργότερα στη Βενετία, τη Γενεύη, τη Μπριζ και το Λονδίνο. Η υπεροχή της Τράπεζας των Μεδίκων στηριζόταν στη θέση της ως κύριου χρηματοδότη της Αποστολικής Καμέρας, προνόμιο που της εξασφάλιζε τις καταθέσεις καρδιναλίων και τα έσοδα της παπικής φορολογίας σε όλη τη Χριστιανοσύνη. Καινοτομίες στη διπλογραφική λογιστική, η ανάπτυξη συναλλαγματικών που παρέκαμπταν την εκκλησιαστική απαγόρευση της τοκογλυφίας και μια δομή όπου κάθε υποκατάστημα λειτουργούσε ως ημι-ανεξάρτητη εταιρεία επέτρεψαν στον οίκο να διαχειρίζεται κινδύνους σε άνευ προηγουμένου διεθνή κλίμακα. Ο πλούτος που γεννούσε η τράπεζα χρηματοδότησε τη βιβλιοθήκη του Κοσίμο στον Άγιο Μάρκο, τον τρούλο του Μπρουνελλέσκι και τρεις γενιές χορηγίας τεχνών που ουσιαστικά συντήρησαν τη Φλωρεντινή Αναγέννηση."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Giovanni_di_Bicci_de%27_Medici.jpg?width=1024",
            alt: {
              en: "Posthumous portrait of Giovanni di Bicci de' Medici",
              el: "Μεταθανάτια προσωπογραφία του Τζοβάνι ντι Μπίτσι ντε' Μέντιτσι"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1401,
      era: {
        en: "Quattrocento",
        el: "Κουαντροτσέντο"
      },
      events: [
        {
          title: {
            en: "Florence Baptistery Doors Competition",
            el: "Διαγωνισμός για τις Θύρες του Βαπτιστηρίου της Φλωρεντίας"
          },
          description: {
            en: "Lorenzo Ghiberti wins the celebrated competition to design the bronze north doors of the Florence Baptistery, defeating Filippo Brunelleschi.",
            el: "Ο Λορέντσο Γκιμπέρτι κερδίζει τον περίφημο διαγωνισμό για τον σχεδιασμό των χάλκινων βόρειων θυρών του Βαπτιστηρίου της Φλωρεντίας, νικώντας τον Φίλιππο Μπρουνελλέσκι."
          },
          extendedDescription: {
            en: "The Arte di Calimala, the wealthy cloth-importers' guild that maintained the Baptistery, invited seven sculptors to submit a trial relief on the Sacrifice of Isaac, cast in the same quatrefoil frame that Andrea Pisano had used for the existing south doors. Ghiberti's panel cast as a single piece, lighter and more economical of bronze than Brunelleschi's two-part composition, won over the judges; according to Ghiberti's own Commentarii he was awarded the commission outright, while Antonio Manetti's life of Brunelleschi claims the two were offered the work jointly and Brunelleschi withdrew in disgust. The episode is conventionally treated as the symbolic opening of the Quattrocento, since the rejected Brunelleschi turned to architecture and the study of Roman ruins, while Ghiberti spent the next twenty-one years on the doors and a further twenty-seven on the gilded eastern doors that Michelangelo would call the Gates of Paradise.",
            el: "Η Τέχνη Καλιμάλα, η πλούσια συντεχνία εμπόρων υφασμάτων που συντηρούσε το Βαπτιστήριο, προσκάλεσε επτά γλύπτες να υποβάλουν δοκιμαστικό ανάγλυφο με τη Θυσία του Ισαάκ, χυτό στο ίδιο τετράφυλλο πλαίσιο που είχε χρησιμοποιήσει ο Αντρέα Πιζάνο για τις υπάρχουσες νότιες θύρες. Το πάνελ του Γκιμπέρτι, χυτό σε ενιαίο κομμάτι, ελαφρύτερο και οικονομικότερο σε χαλκό από τη δίκομματη σύνθεση του Μπρουνελλέσκι, υπερίσχυσε στους κριτές· σύμφωνα με τα ίδια τα Commentarii του Γκιμπέρτι του ανατέθηκε η παραγγελία αυτοτελώς, ενώ η βιογραφία του Μπρουνελλέσκι από τον Αντόνιο Μανέττι ισχυρίζεται ότι το έργο προσφέρθηκε από κοινού και ο Μπρουνελλέσκι αποσύρθηκε αγανακτισμένος. Το επεισόδιο θεωρείται συμβολικά η απαρχή του Κουαντροτσέντο, καθώς ο απορριφθείς Μπρουνελλέσκι στράφηκε στην αρχιτεκτονική και τη μελέτη των ρωμαϊκών ερειπίων, ενώ ο Γκιμπέρτι αφιέρωσε τα επόμενα είκοσι ένα χρόνια στις θύρες και άλλα είκοσι επτά στις επίχρυσες ανατολικές θύρες που ο Μικελάντζελο θα ονόμαζε Πύλες του Παραδείσου."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sacrifice_of_Isaac-Ghiberti.jpg?width=1024",
            alt: {
              en: "Lorenzo Ghiberti's competition panel, Sacrifice of Isaac, Bargello, Florence",
              el: "Το ανάγλυφο διαγωνισμού του Λορέντσο Γκιμπέρτι, Η Θυσία του Ισαάκ, Μπαρτζέλλο, Φλωρεντία"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1436,
      era: {
        en: "Architectural Revolution",
        el: "Αρχιτεκτονική Επανάσταση"
      },
      events: [
        {
          title: {
            en: "Brunelleschi Completes the Florence Cathedral Dome",
            el: "Ο Μπρουνελλέσκι Ολοκληρώνει τον Τρούλο του Καθεδρικού της Φλωρεντίας"
          },
          description: {
            en: "Filippo Brunelleschi finishes the dome of Santa Maria del Fiore, an engineering marvel and the defining symbol of the Florentine Renaissance.",
            el: "Ο Φίλιππο Μπρουνελλέσκι ολοκληρώνει τον τρούλο της Σάντα Μαρία ντελ Φιόρε, ένα τεχνολογικό θαύμα και το καθοριστικό σύμβολο της Φλωρεντινής Αναγέννησης."
          },
          extendedDescription: {
            en: "The cathedral of Florence had stood roofless over its octagonal crossing for more than a century when the Opera del Duomo, despairing of any conventional solution, accepted Brunelleschi's proposal to vault a span of nearly forty-three metres without a continuous wooden centring. His design used a double shell, an inner structural dome of brick laid in a herringbone pattern that allowed each course to lock in place before the mortar set, and an outer shell to shield it from weather. Stone and iron tension chains girded the base to resist the lateral thrust, while custom-built ox-hoists, reversible gears, and platforms designed by the architect himself raised some four million bricks to working height. Consecrated by Pope Eugene IV on 25 March 1436, the dome was the largest masonry vault ever built and remains so today. Its silhouette gave Florence a profile as instantly recognisable as that of any ancient capital and proclaimed that the city had not merely revived classical architecture but surpassed it.",
            el: "Ο καθεδρικός της Φλωρεντίας στεκόταν χωρίς στέγη πάνω από την οκταγωνική του διασταύρωση για πάνω από έναν αιώνα, όταν η Opera del Duomo, απελπισμένη για κάθε συμβατική λύση, αποδέχθηκε την πρόταση του Μπρουνελλέσκι να καλυφθεί με θόλο άνοιγμα σχεδόν σαράντα τριών μέτρων χωρίς συνεχές ξύλινο ικρίωμα. Ο σχεδιασμός του χρησιμοποιούσε διπλό κέλυφος: εσωτερικό δομικό τρούλο από οπτόπλινθο τοποθετημένο σε σχέδιο ψαροκόκαλου που επέτρεπε σε κάθε σειρά να κλειδώνει στη θέση της προτού στερεοποιηθεί το κονίαμα, και εξωτερικό κέλυφος που τον προστάτευε από τις καιρικές συνθήκες. Πέτρινες και σιδερένιες αλυσίδες έντασης ζώνωναν τη βάση για να αντισταθούν στις πλάγιες ωθήσεις, ενώ ειδικά κατασκευασμένα βοοκίνητα γερανοφόρα, αναστρέψιμα γρανάζια και εξέδρες σχεδιασμένα από τον ίδιο τον αρχιτέκτονα ανύψωναν περίπου τέσσερα εκατομμύρια οπτόπλινθους στο ύψος εργασίας. Καθαγιασμένος από τον πάπα Ευγένιο Δ' στις 25 Μαρτίου 1436, ο τρούλος ήταν ο μεγαλύτερος λιθόκτιστος θόλος που είχε ανεγερθεί ποτέ και παραμένει μέχρι σήμερα. Το περίγραμμά του χάρισε στη Φλωρεντία μια σιλουέτα τόσο αναγνωρίσιμη όσο εκείνη οποιασδήποτε αρχαίας πρωτεύουσας και διακήρυξε ότι η πόλη δεν είχε απλώς αναβιώσει την κλασική αρχιτεκτονική αλλά την είχε υπερβεί."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Cathedral_of_Santa_Maria_del_Fiore.jpg?width=1024",
            alt: {
              en: "Brunelleschi's dome over Santa Maria del Fiore, Florence",
              el: "Ο τρούλος του Μπρουνελλέσκι πάνω από τη Σάντα Μαρία ντελ Φιόρε, Φλωρεντία"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1453,
      era: {
        en: "Greek Scholars Arrive",
        el: "Άφιξη των Ελλήνων Λογίων"
      },
      events: [
        {
          title: {
            en: "Fall of Constantinople Brings Greek Learning West",
            el: "Η Άλωση της Πόλης Φέρνει την Ελληνική Παιδεία στη Δύση"
          },
          description: {
            en: "After the fall of Constantinople, Greek scholars and manuscripts flee to Italy, fuelling humanist studies in Florence, Venice and Rome.",
            el: "Μετά την Άλωση της Κωνσταντινούπολης, Έλληνες λόγιοι και χειρόγραφα καταφεύγουν στην Ιταλία, τροφοδοτώντας τις ουμανιστικές σπουδές σε Φλωρεντία, Βενετία και Ρώμη."
          },
          extendedDescription: {
            en: "The migration of Byzantine intellectuals westward had begun decades before 1453, accelerated by the Council of Ferrara–Florence in 1438–39, where figures such as Gemistos Plethon enthralled Cosimo de' Medici with the prospect of a renewed Platonism. The conquest of the city by Mehmed II turned a trickle into a flood: Cardinal Bessarion, the Greek metropolitan of Nicaea who had remained in Italy after the council, gathered fugitive scholars under his patronage and bequeathed his library of more than seven hundred Greek manuscripts to the Republic of Venice, where it became the nucleus of the Biblioteca Marciana. Teachers like John Argyropoulos, Theodore Gaza, Demetrios Chalkokondyles, and Janos Lascaris staffed chairs of Greek at Florence, Padua, and the new Greek Gymnasium in Rome, while the Aldine Press of Venice from 1495 began printing the Greek classics for a European readership. The result was the recovery of Plato, the Greek Fathers, the dramatists, and most of Plutarch in the original — a textual transfusion that decisively shaped the High Renaissance.",
            el: "Η μετανάστευση των Βυζαντινών διανοουμένων προς τη Δύση είχε αρχίσει δεκαετίες πριν το 1453, επιταχυνόμενη από τη Σύνοδο Φερράρας-Φλωρεντίας του 1438-39, όπου μορφές όπως ο Γεμιστός Πλήθων μάγεψαν τον Κοσίμο ντε' Μέντιτσι με την προοπτική ενός ανανεωμένου πλατωνισμού. Η κατάκτηση της Πόλης από τον Μωάμεθ Β' μετέτρεψε τη ροή σε κατακλυσμό: ο καρδινάλιος Βησσαρίων, ο Έλληνας μητροπολίτης Νικαίας που είχε παραμείνει στην Ιταλία μετά τη σύνοδο, συγκέντρωσε υπό την προστασία του πρόσφυγες λογίους και κληροδότησε τη βιβλιοθήκη του από πάνω από επτακόσια ελληνικά χειρόγραφα στη Δημοκρατία της Βενετίας, όπου αποτέλεσε τον πυρήνα της Μαρκιανής Βιβλιοθήκης. Δάσκαλοι όπως ο Ιωάννης Αργυρόπουλος, ο Θεόδωρος Γαζής, ο Δημήτριος Χαλκοκονδύλης και ο Ιανός Λάσκαρης κατέλαβαν έδρες ελληνικών στη Φλωρεντία, την Πάδοβα και το νέο Ελληνικό Γυμνάσιο της Ρώμης, ενώ ο Αλδινός Τύπος της Βενετίας από το 1495 άρχισε να τυπώνει τους Έλληνες κλασικούς για το ευρωπαϊκό αναγνωστικό κοινό. Το αποτέλεσμα ήταν η ανάκτηση του Πλάτωνα, των Ελλήνων Πατέρων, των δραματουργών και του μεγαλύτερου μέρους του Πλούταρχου στο πρωτότυπο — μια κειμενική μετάγγιση που διαμόρφωσε καθοριστικά την Υψηλή Αναγέννηση."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Cardinal_Bessarion.jpg?width=1024",
            alt: {
              en: "Portrait of Cardinal Bessarion, Greek scholar and patron of fugitive Byzantines",
              el: "Προσωπογραφία του καρδιναλίου Βησσαρίωνος, Έλληνα λογίου και προστάτη των Βυζαντινών προσφύγων"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1469,
      era: {
        en: "Laurentian Age",
        el: "Εποχή του Λαυρεντίου"
      },
      events: [
        {
          title: {
            en: "Lorenzo the Magnificent Rules Florence",
            el: "Ο Λαυρέντιος ο Μεγαλοπρεπής Κυβερνά τη Φλωρεντία"
          },
          description: {
            en: "Lorenzo de' Medici becomes de facto ruler of Florence, presiding over a golden age of art, poetry and Neoplatonic philosophy.",
            el: "Ο Λαυρέντιος ντε' Μέντιτσι γίνεται de facto κυβερνήτης της Φλωρεντίας, προεδρεύοντας μιας χρυσής εποχής τέχνης, ποίησης και νεοπλατωνικής φιλοσοφίας."
          },
          extendedDescription: {
            en: "Twenty years old at the death of his father Piero the Gouty, Lorenzo inherited not an office but a network of clients, marriages, and bank deposits that allowed the Medici to control the supposedly republican magistracies through carefully managed elections. He survived the Pazzi Conspiracy of 1478, in which his brother Giuliano was murdered during High Mass in the cathedral, and turned the failed coup into a permanent tightening of his regime. Diplomatic skill — most famously his solo embassy to Naples in 1479-80 to detach Ferrante from the anti-Florentine league — preserved an Italian peace that lasted until the year of his death. Around him gathered the Platonic Academy of Marsilio Ficino, the philological audacity of Angelo Poliziano, the syncretism of Pico della Mirandola, and the youthful Michelangelo, who lived in the Medici household and ate at Lorenzo's table. The vernacular poetry Lorenzo wrote himself, from the Canzoniere to the Carnival Songs, helped legitimise Italian as a literary language alongside Latin.",
            el: "Είκοσι ετών στον θάνατο του πατέρα του Πιέρο του Ποδαγρού, ο Λαυρέντιος κληρονόμησε όχι αξίωμα αλλά ένα δίκτυο πελατών, γάμων και τραπεζικών καταθέσεων που επέτρεπε στους Μεδίκους να ελέγχουν τις υποτιθέμενα δημοκρατικές αρχές μέσω προσεκτικά ρυθμισμένων εκλογών. Επιβίωσε της Συνωμοσίας των Πάτσι το 1478, κατά την οποία ο αδελφός του Τζουλιάνο δολοφονήθηκε κατά τη διάρκεια της Θείας Λειτουργίας στον καθεδρικό, και μετέτρεψε το αποτυχημένο πραξικόπημα σε μόνιμη συσφίξη του καθεστώτος του. Διπλωματική ικανότητα — με πιο διάσημη τη μοναχική αποστολή του στη Νάπολη το 1479-80 για να αποσπάσει τον Φερράντε από την αντιφλωρεντινή συμμαχία — διαφύλαξε μια ιταλική ειρήνη που διήρκεσε ως το έτος του θανάτου του. Γύρω του συγκεντρώθηκαν η Πλατωνική Ακαδημία του Μαρσίλιο Φιτσίνο, η φιλολογική τόλμη του Άντζελο Πολιτσιάνο, ο συγκρητισμός του Πίκο ντελα Μιράντολα και ο νεαρός Μικελάντζελο, που έμενε στο σπίτι των Μεδίκων και έτρωγε στο τραπέζι του Λαυρέντιου. Η λαϊκή ποίηση που έγραψε ο ίδιος ο Λαυρέντιος, από το Canzoniere έως τα Καρναβαλικά Άσματα, βοήθησε να νομιμοποιηθεί η ιταλική γλώσσα ως λογοτεχνικό μέσο πλάι στη λατινική."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Lorenzo_de_Medici-ritratto.jpg?width=1024",
            alt: {
              en: "Portrait of Lorenzo de' Medici, called the Magnificent",
              el: "Προσωπογραφία του Λαυρέντιου ντε' Μέντιτσι, του Μεγαλοπρεπούς"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1486,
      era: {
        en: "Botticelli's Masterpieces",
        el: "Αριστουργήματα του Μποττιτσέλι"
      },
      events: [
        {
          title: {
            en: "Botticelli Paints The Birth of Venus",
            el: "Ο Μποττιτσέλι Ζωγραφίζει τη Γέννηση της Αφροδίτης"
          },
          description: {
            en: "Sandro Botticelli completes The Birth of Venus for the Medici, fusing classical mythology with Christian Neoplatonism.",
            el: "Ο Σάντρο Μποττιτσέλι ολοκληρώνει τη Γέννηση της Αφροδίτης για τους Μεδίκους, συνταιριάζοντας την κλασική μυθολογία με τον χριστιανικό νεοπλατωνισμό."
          },
          extendedDescription: {
            en: "Painted on canvas rather than panel — an unusual choice that suited the villa setting for which it was probably destined — the Birth of Venus shows the goddess arriving on the shore of Cythera, blown by the entwined wind-gods Zephyr and Aura and met by an Hora bearing a flower-strewn mantle. The image draws on a description of an ancient lost painting by Apelles and on Poliziano's Stanze, but its philosophical meaning belongs to Marsilio Ficino's circle, in which the naked Venus represented Humanitas, the soul's beauty awakening to the contemplation of divine love. Botticelli's preference for outline over shadow, his pale tonalities, and the ornamental linearity of the goddess's hair were already old-fashioned beside the chiaroscuro of Leonardo, but it is precisely this poetic unreality that has made the picture iconic. Together with the Primavera, it inaugurated the Renaissance reinvention of mythological painting and would itself nearly perish during Savonarola's vogue, when Botticelli is said to have repented of his pagan pictures.",
            el: "Ζωγραφισμένη σε καμβά αντί για ξύλο — ασυνήθιστη επιλογή που ταίριαζε στο περιβάλλον βίλας για το οποίο πιθανότατα προοριζόταν — η Γέννηση της Αφροδίτης απεικονίζει τη θεά να φτάνει στις ακτές των Κυθήρων, φυσημένη από τους συμπλεγμένους ανέμους Ζέφυρο και Αύρα και υποδεχόμενη από μία Ώρα που της προσφέρει μανδύα κατάστικτο με άνθη. Η εικόνα εμπνέεται από περιγραφή ενός αρχαίου χαμένου πίνακα του Απελλή και από τις Στάντσε του Πολιτσιάνο, αλλά το φιλοσοφικό της νόημα ανήκει στον κύκλο του Μαρσίλιο Φιτσίνο, όπου η γυμνή Αφροδίτη εκπροσωπούσε την Humanitas, την ομορφιά της ψυχής που αφυπνίζεται στη θέαση της θείας αγάπης. Η προτίμηση του Μποττιτσέλι στο περίγραμμα έναντι της σκιάς, οι χλωμοί τόνοι του και η διακοσμητική γραμμικότητα των μαλλιών της θεάς ήταν ήδη ξεπερασμένα δίπλα στο κιαροσκούρο του Λεονάρντο, αλλά ακριβώς αυτή η ποιητική εξωπραγματικότητα έχει καταστήσει την εικόνα εμβληματική. Μαζί με την Άνοιξη εγκαινίασε την αναγεννησιακή ανακάλυψη της μυθολογικής ζωγραφικής και η ίδια παρ' ολίγον να χαθεί κατά την εποχή του Σαβοναρόλα, όταν, όπως λέγεται, ο Μποττιτσέλι μετανόησε για τους ειδωλολατρικούς του πίνακες."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg?width=1024",
            alt: {
              en: "Sandro Botticelli, The Birth of Venus, Uffizi Gallery, Florence",
              el: "Σάντρο Μποττιτσέλι, Η Γέννηση της Αφροδίτης, Πινακοθήκη Ουφίτσι, Φλωρεντία"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1498,
      era: {
        en: "Religious Crisis",
        el: "Θρησκευτική Κρίση"
      },
      events: [
        {
          title: {
            en: "Execution of Savonarola",
            el: "Εκτέλεση του Σαβοναρόλα"
          },
          description: {
            en: "The Dominican friar Girolamo Savonarola, who had ruled Florence as a moral republic and burned the 'vanities', is hanged and burned in the Piazza della Signoria.",
            el: "Ο Δομινικανός μοναχός Τζιρόλαμο Σαβοναρόλα, που είχε κυβερνήσει τη Φλωρεντία ως ηθική δημοκρατία και είχε κάψει τις «ματαιότητες», απαγχονίζεται και καίγεται στην Πιάτσα ντελλα Σινιορία."
          },
          extendedDescription: {
            en: "When the French invasion of 1494 expelled Piero de' Medici, Savonarola — already famous for apocalyptic sermons in San Marco — emerged as the moral guarantor of a restored Florentine republic, helping shape its Great Council on the Venetian model and prophesying that Florence would become the New Jerusalem. The Bonfires of the Vanities of 1497 and 1498, in which mirrors, cosmetics, gaming-tables, and works of profane art and literature were heaped on pyres in the Piazza della Signoria, were the showpieces of his moral campaign. Pope Alexander VI Borgia, infuriated by Savonarola's denunciations of curial corruption and his refusal to obey a summons to Rome, excommunicated him in 1497 and pressured the Signoria to act. Discredited by a botched trial by ordeal at which his Franciscan opponents had challenged him, Savonarola and two fellow Dominicans were tortured into confessions, hanged from a single cross-shaped scaffold, and their bodies burnt on the same spot where the vanities had been consumed; the ashes were thrown into the Arno to prevent their veneration as relics.",
            el: "Όταν η γαλλική εισβολή του 1494 εκδίωξε τον Πιέρο ντε' Μέντιτσι, ο Σαβοναρόλα — ήδη διάσημος για τα αποκαλυπτικά κηρύγματά του στο Σαν Μάρκο — αναδύθηκε ως ο ηθικός εγγυητής μιας αποκατεστημένης φλωρεντινής δημοκρατίας, συμβάλλοντας στη διαμόρφωση του Μεγάλου Συμβουλίου της κατά το βενετικό πρότυπο και προφητεύοντας ότι η Φλωρεντία θα γινόταν η Νέα Ιερουσαλήμ. Οι Πυρές των Ματαιοτήτων του 1497 και 1498, στις οποίες καθρέφτες, καλλυντικά, τραπέζια τυχερών παιγνίων και έργα κοσμικής τέχνης και λογοτεχνίας στοιβάχτηκαν σε πυρές στην Πιάτσα ντελλα Σινιορία, ήταν τα μεγάλα θεάματα της ηθικής του εκστρατείας. Ο πάπας Αλέξανδρος ΣΤ' Βοργίας, εξοργισμένος από τις καταγγελίες του Σαβοναρόλα για τη διαφθορά της Κουρίας και την άρνησή του να υπακούσει σε κλήση στη Ρώμη, τον αφόρισε το 1497 και πίεσε τη Σινιορία να δράσει. Απαξιωμένος από μια αποτυχημένη δίκη με δοκιμασία πυρός κατά την οποία τον είχαν προκαλέσει οι Φραγκισκανοί αντίπαλοί του, ο Σαβοναρόλα και δύο άλλοι Δομινικανοί υπέστησαν βασανιστήρια ώσπου να ομολογήσουν, απαγχονίστηκαν από ενιαίο σταυρόσχημο ικρίωμα και τα σώματά τους κάηκαν στο ίδιο σημείο όπου είχαν καεί οι ματαιότητες· οι στάχτες ρίχτηκαν στον Άρνο για να μην προσκυνηθούν ως λείψανα."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Execution_of_Girolamo_Savonarola_in_Florence.jpg?width=1024",
            alt: {
              en: "Anonymous painting of the execution of Savonarola in the Piazza della Signoria, c. 1498",
              el: "Ανώνυμος πίνακας της εκτέλεσης του Σαβοναρόλα στην Πιάτσα ντελλα Σινιορία, π. 1498"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1503,
      era: {
        en: "High Renaissance",
        el: "Υψηλή Αναγέννηση"
      },
      events: [
        {
          title: {
            en: "Leonardo Begins the Mona Lisa",
            el: "Ο Λεονάρντο Ξεκινά τη Μόνα Λίζα"
          },
          description: {
            en: "Leonardo da Vinci begins the portrait of Lisa Gherardini, working on it for years; it becomes the most celebrated painting in Western art.",
            el: "Ο Λεονάρντο ντα Βίντσι αρχίζει το πορτρέτο της Λίζα Γκεραρντίνι, δουλεύοντάς το για χρόνια· γίνεται ο πιο διάσημος πίνακας της δυτικής τέχνης."
          },
          extendedDescription: {
            en: "The sitter, identified by a marginal note that Agostino Vespucci wrote in 1503 in a copy of Cicero's letters, was the Florentine merchant Francesco del Giocondo's young second wife, possibly painted to celebrate the birth of a son and the purchase of a new house. Leonardo never delivered the picture: he carried it from Florence to Milan, to Rome, and finally to France in the train of Francis I, refining it for more than a decade. Its innovations — the three-quarter pose adapted from Flemish portraiture, the imaginary mountainous landscape unfolding behind the parapet, the sfumato that dissolves the corners of mouth and eyes into shadow so that the smile seems to hover and shift — became canonical for Renaissance portraiture. Acquired by the French crown after Leonardo's death at Amboise in 1519, the painting hung in royal collections and then in the Louvre, where its theft and triumphant return in 1911 made it the most famous picture in the world.",
            el: "Το μοντέλο, ταυτοποιημένο από μια περιθωριακή σημείωση που έγραψε ο Αγκοστίνο Βεσπούτσι το 1503 σε αντίτυπο των επιστολών του Κικέρωνα, ήταν η νεαρή δεύτερη σύζυγος του Φλωρεντινού εμπόρου Φραντσέσκο ντελ Τζοκόντο, ζωγραφισμένη ίσως για να εορτάσει τη γέννηση γιου και την αγορά νέας κατοικίας. Ο Λεονάρντο δεν παρέδωσε ποτέ τον πίνακα: τον κουβάλησε από τη Φλωρεντία στο Μιλάνο, στη Ρώμη και τέλος στη Γαλλία στη συνοδεία του Φραγκίσκου Α', εκλεπτύνοντάς τον για πάνω από μια δεκαετία. Οι καινοτομίες του — η στάση τριών τετάρτων, παραλλαγμένη από τη φλαμανδική προσωπογραφία, το φανταστικό ορεινό τοπίο που ξεδιπλώνεται πίσω από το στηθαίο, το sfumato που διαλύει τις γωνίες του στόματος και των ματιών σε σκιά ώστε το χαμόγελο να μοιάζει να αιωρείται και να αλλάζει — έγιναν κανονικά για την αναγεννησιακή προσωπογραφία. Αποκτημένος από το γαλλικό στέμμα μετά τον θάνατο του Λεονάρντο στο Αμπουάζ το 1519, ο πίνακας κρεμάστηκε σε βασιλικές συλλογές και έπειτα στο Λούβρο, όπου η κλοπή και η θριαμβευτική επιστροφή του το 1911 τον έκαναν τον πιο διάσημο πίνακα του κόσμου."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg?width=1024",
            alt: {
              en: "Leonardo da Vinci, Mona Lisa, Musée du Louvre, Paris",
              el: "Λεονάρντο ντα Βίντσι, Μόνα Λίζα, Μουσείο του Λούβρου, Παρίσι"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1508,
      era: {
        en: "Sistine Chapel",
        el: "Καπέλα Σιξτίνα"
      },
      events: [
        {
          title: {
            en: "Michelangelo Begins the Sistine Chapel Ceiling",
            el: "Ο Μικελάντζελο Ξεκινά την Οροφή της Καπέλα Σιξτίνα"
          },
          description: {
            en: "Pope Julius II commissions Michelangelo Buonarroti to paint the ceiling of the Sistine Chapel; he labours four years to complete it.",
            el: "Ο πάπας Ιούλιος Β' αναθέτει στον Μικελάντζελο Μπουοναρότι τη ζωγραφική της οροφής της Καπέλα Σιξτίνα· εργάζεται τέσσερα χρόνια για να την ολοκληρώσει."
          },
          extendedDescription: {
            en: "Michelangelo accepted the commission with reluctance, considering himself a sculptor rather than a painter and suspecting that Bramante had pressed his name on the pope to set him up for failure. He dismissed the team of Florentine fresco-painters first hired to assist him and worked, contrary to legend, standing on a custom scaffolding rather than lying on his back, painting upward with his head tilted until his beard 'pointed at heaven'. The original programme of twelve apostles grew, with Julius's permission, into the most ambitious fresco scheme of the Renaissance: nine scenes from Genesis from the Creation to the Drunkenness of Noah, framed by prophets and sibyls, ignudi, and the ancestors of Christ across more than a thousand square metres of vault. Unveiled on All Saints' Day 1512, the ceiling redefined the human body in painting and turned Michelangelo into the supreme artist of his age; Vasari claimed that everyone who saw it 'remained dazed and dumb'.",
            el: "Ο Μικελάντζελο δέχθηκε την παραγγελία απρόθυμα, θεωρώντας τον εαυτό του γλύπτη μάλλον παρά ζωγράφο και υποπτευόμενος ότι ο Μπραμάντε είχε προτείνει το όνομά του στον πάπα για να τον οδηγήσει σε αποτυχία. Απέλυσε την ομάδα Φλωρεντινών νωπογράφων που είχε αρχικά προσληφθεί για να τον βοηθήσουν και εργάστηκε, σε αντίθεση με τον θρύλο, όρθιος πάνω σε ειδικά κατασκευασμένο ικρίωμα και όχι ξαπλωμένος ανάσκελα, ζωγραφίζοντας προς τα πάνω με το κεφάλι ανασηκωμένο ώσπου τα γένια του «έδειχναν τον ουρανό». Το αρχικό πρόγραμμα των δώδεκα αποστόλων διογκώθηκε, με την άδεια του Ιουλίου, στο πιο φιλόδοξο νωπογραφικό σχέδιο της Αναγέννησης: εννέα σκηνές από τη Γένεση, από τη Δημιουργία ως τη Μέθη του Νώε, πλαισιωμένες από προφήτες και σίβυλλες, γυμνά νεανικά σώματα και τους προγόνους του Χριστού σε πάνω από χίλια τετραγωνικά μέτρα θόλου. Αποκαλυπτόμενη ανήμερα των Αγίων Πάντων του 1512, η οροφή επανακαθόρισε το ανθρώπινο σώμα στη ζωγραφική και ανέδειξε τον Μικελάντζελο ως τον υπέρτατο καλλιτέχνη της εποχής του· ο Βαζάρι ισχυρίστηκε ότι όσοι την έβλεπαν «έμεναν θαμπωμένοι και άφωνοι»."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg?width=1024",
            alt: {
              en: "Michelangelo, Creation of Adam, Sistine Chapel ceiling, Vatican",
              el: "Μικελάντζελο, Η Δημιουργία του Αδάμ, οροφή της Καπέλας Σιξτίνας, Βατικανό"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1513,
      era: {
        en: "Political Thought",
        el: "Πολιτική Σκέψη"
      },
      events: [
        {
          title: {
            en: "Machiavelli Writes The Prince",
            el: "Ο Μακιαβέλι Γράφει τον Ηγεμόνα"
          },
          description: {
            en: "Niccolò Machiavelli, exiled from Florentine politics, composes Il Principe, founding modern political philosophy.",
            el: "Ο Νικολό Μακιαβέλι, εξόριστος από τη φλωρεντινή πολιτική, συνθέτει τον Ηγεμόνα, θεμελιώνοντας τη σύγχρονη πολιτική φιλοσοφία."
          },
          extendedDescription: {
            en: "When the Medici returned to Florence in 1512 they purged the chancery of the republic Machiavelli had served for fourteen years; he was tortured on suspicion of conspiracy and confined to his small farm at Sant'Andrea in Percussina. There, in the famous letter to Francesco Vettori of December 1513, he described changing out of his muddy day-clothes each evening to enter his study 'as into the courts of the ancients', who answered his questions about statecraft. The result was Il Principe, a short, ruthless treatise dedicated first to Giuliano and then to Lorenzo de' Medici in the hope of recovering employment. By severing political analysis from Christian moral theology and Aristotelian virtue ethics, by treating the state as an instrument that demands a different morality from private life, and by drawing equally on ancient examples and on contemporary figures like Cesare Borgia, Machiavelli set the agenda for modern political thought. The book circulated in manuscript and was finally printed in 1532, after his death; placed on the Index of Forbidden Books in 1559, it remained the indispensable handbook of European reason of state.",
            el: "Όταν οι Μέδικοι επέστρεψαν στη Φλωρεντία το 1512, εκκαθάρισαν τη γραμματεία της δημοκρατίας στην οποία ο Μακιαβέλι είχε υπηρετήσει επί δεκατέσσερα χρόνια· βασανίστηκε με την υποψία συνωμοσίας και περιορίστηκε στο μικρό αγρόκτημά του στον Σαν Αντρέα ιν Περκουσίνα. Εκεί, στην περίφημη επιστολή του προς τον Φραντσέσκο Βεττόρι του Δεκεμβρίου 1513, περιέγραφε πώς άλλαζε κάθε βράδυ τα λασπωμένα καθημερινά του ρούχα για να εισέλθει στο γραφείο του «ως εις τας αυλάς των αρχαίων», οι οποίοι απαντούσαν στις ερωτήσεις του περί πολιτικής τέχνης. Το αποτέλεσμα ήταν ο Ηγεμών, μια σύντομη και αδυσώπητη πραγματεία αφιερωμένη πρώτα στον Τζουλιάνο και έπειτα στον Λαυρέντιο ντε' Μέντιτσι, με την ελπίδα ανάκτησης μιας θέσης. Αποσπώντας την πολιτική ανάλυση από τη χριστιανική ηθική θεολογία και την αριστοτελική ηθική των αρετών, αντιμετωπίζοντας το κράτος ως όργανο που απαιτεί ηθική διαφορετική από τον ιδιωτικό βίο, και αντλώντας εξίσου από τα αρχαία παραδείγματα και από σύγχρονες μορφές όπως ο Καίσαρ Βοργίας, ο Μακιαβέλι έθεσε την ατζέντα της νεότερης πολιτικής σκέψης. Το βιβλίο κυκλοφόρησε σε χειρόγραφα και τελικά τυπώθηκε το 1532, μετά τον θάνατό του· τοποθετημένο στον Index των Απαγορευμένων Βιβλίων το 1559, παρέμεινε το απαραίτητο εγχειρίδιο του ευρωπαϊκού λόγου του κράτους."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Santi_di_Tito_-_Niccolo_Machiavelli%27s_portrait_headcrop.jpg?width=1024",
            alt: {
              en: "Santi di Tito, posthumous portrait of Niccolò Machiavelli, Palazzo Vecchio, Florence",
              el: "Σάντι ντι Τίτο, μεταθανάτια προσωπογραφία του Νικολό Μακιαβέλι, Παλάτσο Βέκιο, Φλωρεντία"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1527,
      era: {
        en: "Sack of Rome",
        el: "Λεηλασία της Ρώμης"
      },
      events: [
        {
          title: {
            en: "Sack of Rome by Imperial Troops",
            el: "Λεηλασία της Ρώμης από τα Αυτοκρατορικά Στρατεύματα"
          },
          description: {
            en: "Mutinous troops of Charles V sack Rome, devastating the city and traditionally marking the end of the High Renaissance in Italy.",
            el: "Στασιάζοντα στρατεύματα του Καρόλου Ε' λεηλατούν τη Ρώμη, καταστρέφοντας την πόλη και σηματοδοτώντας παραδοσιακά το τέλος της Υψηλής Αναγέννησης στην Ιταλία."
          },
          extendedDescription: {
            en: "An imperial army of unpaid Spanish veterans and German Landsknechts under Charles de Bourbon, many of them Lutherans for whom Rome was the seat of Antichrist, marched on the city when its commander could no longer feed or restrain them. Bourbon was killed scaling the walls on 6 May — Benvenuto Cellini claimed the fatal arquebus shot — and the leaderless soldiery poured into the city. Pope Clement VII, a Medici, fled along the covered passetto to Castel Sant'Angelo while his Swiss Guard was annihilated on the steps of St Peter's. For eight days, and intermittently for months afterwards, the troops murdered, raped, ransomed cardinals, desecrated churches, melted papal tiaras, and reduced Rome's population from perhaps fifty-five thousand to ten thousand. Erasmus, no friend of the Curia, wrote that the city had not been sacked but obliterated; humanists across Europe took the catastrophe as divine judgement and the symbolic end of the Italian High Renaissance, scattering its surviving artists — Parmigianino, Rosso Fiorentino, Sebastiano del Piombo — to the courts of northern Italy and France.",
            el: "Ένας αυτοκρατορικός στρατός από απλήρωτους Ισπανούς βετεράνους και Γερμανούς Λάντσκνεχτ υπό τον Κάρολο ντε Μπουρμπόν, πολλοί από τους οποίους ήταν Λουθηρανοί για τους οποίους η Ρώμη ήταν η έδρα του Αντιχρίστου, βάδισαν εναντίον της πόλης όταν ο διοικητής τους δεν μπορούσε πλέον να τους τρέφει ή να τους συγκρατήσει. Ο Μπουρμπόν σκοτώθηκε ενώ σκαρφάλωνε στα τείχη στις 6 Μαΐου — ο Μπενβενούτο Τσελίνι ισχυρίστηκε ότι η μοιραία βολή αρκεβουζίου ήταν δική του — και το ακέφαλο στράτευμα εισέβαλε στην πόλη. Ο πάπας Κλήμης Ζ', από τους Μεδίκους, κατέφυγε μέσω του καλυμμένου διαδρόμου passetto στο Κάστρο του Αγίου Αγγέλου, ενώ η Ελβετική Φρουρά του εξοντώθηκε στα σκαλιά του Αγίου Πέτρου. Επί οκτώ ημέρες, και διακεκομμένα επί μήνες μετά, οι στρατιώτες σκότωναν, βίαζαν, εκβίαζαν λύτρα από καρδιναλίους, βεβήλωναν ναούς, έλιωναν παπικές τιάρες και μείωσαν τον πληθυσμό της Ρώμης από περίπου πενήντα πέντε χιλιάδες σε δέκα χιλιάδες. Ο Έρασμος, ουδόλως φίλος της Κουρίας, έγραψε ότι η πόλη δεν είχε λεηλατηθεί αλλά εξαφανιστεί· οι ουμανιστές σε όλη την Ευρώπη ερμήνευσαν την καταστροφή ως θεία κρίση και ως συμβολικό τέλος της Ιταλικής Υψηλής Αναγέννησης, σκορπώντας τους επιζώντες καλλιτέχνες της — τον Παρμιτζανίνο, τον Ρόσσο Φιορεντίνο, τον Σεμπαστιάνο ντελ Πιόμπο — στις αυλές της βόρειας Ιταλίας και της Γαλλίας."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sack_of_Rome_of_1527_by_Johannes_Lingelbach_17th_century.jpg?width=1024",
            alt: {
              en: "Johannes Lingelbach, The Sack of Rome of 1527, seventeenth century",
              el: "Γιοχάνες Λίνγκελμπαχ, Η Λεηλασία της Ρώμης του 1527, δέκατος έβδομος αιώνας"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1564,
      era: {
        en: "Late Renaissance",
        el: "Ύστερη Αναγέννηση"
      },
      events: [
        {
          title: {
            en: "Death of Michelangelo",
            el: "Θάνατος του Μικελάντζελο"
          },
          description: {
            en: "Michelangelo Buonarroti dies in Rome at 88, having shaped a century of art from the Pietà to the dome of St Peter's.",
            el: "Ο Μικελάντζελο Μπουοναρότι πεθαίνει στη Ρώμη σε ηλικία 88 ετών, έχοντας διαμορφώσει έναν αιώνα τέχνης από την Πιετά έως τον τρούλο του Αγίου Πέτρου."
          },
          extendedDescription: {
            en: "Michelangelo's last decades had been given over to architecture and devotion. Appointed chief architect of St Peter's in 1547 against his will, he refused payment and worked into his late eighties revising Bramante's plan, simplifying the crossing piers and designing the great hemispherical dome whose drum he saw rise but whose vault would be completed only after his death by Giacomo della Porta. He carved nothing for sale in his last years, working instead on the Rondanini Pietà, an unfinished, fragmented, ghost-like sculpture that he was still cutting six days before he died. He passed away in his house at Macel de' Corvi on 18 February 1564, attended by his disciple Daniele da Volterra and his servant. Cosimo I de' Medici had the body smuggled out of Rome to bypass papal claims and buried with extraordinary public honours in Santa Croce, where Vasari oversaw a tomb decorated with figures of Painting, Sculpture, and Architecture — a recognition that Michelangelo had practised all three at the highest level in a single life.",
            el: "Οι τελευταίες δεκαετίες του Μικελάντζελο είχαν αφιερωθεί στην αρχιτεκτονική και την ευσέβεια. Διορισμένος αρχιτέκτονας του Αγίου Πέτρου το 1547 παρά τη θέλησή του, αρνήθηκε αμοιβή και εργαζόταν ως τα τέλη της ογδοηκοστής δεκαετίας του βίου του αναθεωρώντας το σχέδιο του Μπραμάντε, απλοποιώντας τους πεσσούς της διασταύρωσης και σχεδιάζοντας τον μεγάλο ημισφαιρικό τρούλο, του οποίου το τύμπανο είδε να ανεγείρεται αλλά του οποίου ο θόλος ολοκληρώθηκε μόνο μετά τον θάνατό του από τον Τζάκομο ντέλλα Πόρτα. Δεν λάξευσε τίποτε προς πώληση τα τελευταία του χρόνια, εργαζόμενος αντ' αυτού στη Ρονταντίνι Πιετά, ένα ημιτελές, κατακερματισμένο, ονειρώδες γλυπτό που εξακολουθούσε να λαξεύει έξι ημέρες πριν πεθάνει. Απεβίωσε στο σπίτι του στο Μάτσελ ντε' Κόρβι στις 18 Φεβρουαρίου 1564, παρουσία του μαθητή του Ντανιέλε ντα Βολτέρρα και του υπηρέτη του. Ο Κοσίμος Α' ντε' Μέντιτσι μετέφερε λαθραία τη σορό από τη Ρώμη για να παρακάμψει τις παπικές διεκδικήσεις και την έθαψε με εξαιρετικές δημόσιες τιμές στη Σάντα Κρότσε, όπου ο Βαζάρι επέβλεψε τάφο διακοσμημένο με μορφές της Ζωγραφικής, της Γλυπτικής και της Αρχιτεκτονικής — αναγνώριση ότι ο Μικελάντζελο είχε ασκήσει και τις τρεις στο ανώτατο επίπεδο σε μία και μόνη ζωή."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Daniele_da_Volterra_%28Italian_-_Portrait_of_Michelangelo_Buonarroti_-_Google_Art_Project.jpg?width=1024",
            alt: {
              en: "Daniele da Volterra, Portrait of Michelangelo Buonarroti",
              el: "Ντανιέλε ντα Βολτέρρα, Προσωπογραφία του Μικελάντζελο Μπουοναρότι"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1600,
      era: {
        en: "End of an Era",
        el: "Τέλος μιας Εποχής"
      },
      events: [
        {
          title: {
            en: "Giordano Bruno Burned in Rome",
            el: "Καύση του Τζορντάνο Μπρούνο στη Ρώμη"
          },
          description: {
            en: "The philosopher Giordano Bruno is burned at the stake in the Campo de' Fiori for heresy, a moment often taken to mark the end of the Italian Renaissance.",
            el: "Ο φιλόσοφος Τζορντάνο Μπρούνο καίγεται στην πυρά στο Κάμπο ντε' Φιόρι ως αιρετικός, στιγμή που συχνά θεωρείται ως το τέλος της Ιταλικής Αναγέννησης."
          },
          extendedDescription: {
            en: "A renegade Dominican who had wandered through Geneva, Paris, London, Wittenberg, and Prague, Bruno fused Copernican astronomy with Hermetic and Neoplatonic mysticism into a vision of an infinite universe filled with countless inhabited worlds, in which God was an immanent soul rather than a transcendent creator. Lured back to Italy in 1591 by the Venetian patrician Giovanni Mocenigo, who then denounced him to the Inquisition, he spent seven years in Roman dungeons under questioning by Cardinal Robert Bellarmine. The charges that finally killed him concerned not heliocentrism but the Trinity, the Incarnation, the eternal soul, and the existence of multiple worlds. Refusing to recant, he was condemned on 8 February 1600 and led nine days later to the Campo de' Fiori, where his tongue was clamped to prevent further blasphemy and he was burned alive. The nineteenth-century memorial that now stands on the spot turned him into a martyr of free thought; whatever the precise content of his beliefs, his execution stands as a stark conclusion to the open intellectual ferment of the Italian Renaissance.",
            el: "Αποστάτης Δομινικανός, που είχε περιπλανηθεί στη Γενεύη, το Παρίσι, το Λονδίνο, τη Βιτεμβέργη και την Πράγα, ο Μπρούνο συγχώνευσε την κοπερνίκεια αστρονομία με τον ερμητικό και νεοπλατωνικό μυστικισμό σε ένα όραμα άπειρου σύμπαντος γεμάτου με αμέτρητους κατοικημένους κόσμους, όπου ο Θεός ήταν εμμενής ψυχή παρά υπερβατικός δημιουργός. Δελεασμένος να επιστρέψει στην Ιταλία το 1591 από τον Βενετσιάνο πατρίκιο Τζοβάνι Μοτσενίγκο, που έπειτα τον κατήγγειλε στην Ιερά Εξέταση, πέρασε επτά χρόνια στα ρωμαϊκά μπουντρούμια ανακρινόμενος από τον καρδινάλιο Ρομπέρτο Μπελλαρμίνο. Οι κατηγορίες που τελικά τον σκότωσαν δεν αφορούσαν τον ηλιοκεντρισμό αλλά την Τριάδα, τη Σάρκωση, την αθάνατη ψυχή και την ύπαρξη πολλαπλών κόσμων. Αρνούμενος να ανακαλέσει, καταδικάστηκε στις 8 Φεβρουαρίου 1600 και οδηγήθηκε εννέα ημέρες αργότερα στο Κάμπο ντε' Φιόρι, όπου του δέθηκε η γλώσσα για να μην εκστομίζει άλλες βλασφημίες και κάηκε ζωντανός. Το μνημείο του δεκάτου ενάτου αιώνα που στέκει σήμερα στο σημείο τον μετέτρεψε σε μάρτυρα της ελεύθερης σκέψης· όποιο και αν είναι το ακριβές περιεχόμενο των πεποιθήσεών του, η εκτέλεσή του στέκει ως ζοφερή κατακλείδα της ανοιχτής διανοητικής ζύμωσης της Ιταλικής Αναγέννησης."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Giordano_Bruno_Campo_dei_Fiori_cropped.jpg?width=1024",
            alt: {
              en: "Statue of Giordano Bruno by Ettore Ferrari, Campo de' Fiori, Rome",
              el: "Άγαλμα του Τζορντάνο Μπρούνο από τον Έττορε Φερράρι, Κάμπο ντε' Φιόρι, Ρώμη"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
