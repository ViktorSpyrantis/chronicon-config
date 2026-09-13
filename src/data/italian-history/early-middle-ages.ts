/** Early Middle Ages — Πρώιμος Μεσαίωνας · Italian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const EARLY_MIDDLE_AGES = {
  id: "early-middle-ages" as const,
  label: {
    en: "Early Middle Ages",
    el: "Πρώιμος Μεσαίωνας"
  },
  supertitle: {
    en: "Alto Medioevo",
    el: "Πρώιμος Μεσαίωνας"
  },
  title: {
    en: "Early Medieval Italy",
    el: "Πρώιμη Μεσαιωνική Ιταλία"
  },
  subtitle: {
    en: "From the deposition of Romulus Augustulus to the imperial coronation of Otto the Great — Ostrogothic kings, Byzantine exarchs, Lombard dukes, Carolingian emperors, the rise of the popes, and the Saracen raids that shaped the Italian peninsula in the five centuries between the fall of Rome and the year 1000. Slide across the centuries to read the major events of Italy's early Middle Ages.",
    el: "Από την καθαίρεση του Ρωμύλου Αυγουστύλου ως την αυτοκρατορική στέψη του Όθωνα του Μεγάλου — Οστρογότθοι βασιλείς, Βυζαντινοί έξαρχοι, Λομβαρδοί δούκες, Καρολίγγειοι αυτοκράτορες, η άνοδος των παπών και οι σαρακηνικές επιδρομές που διαμόρφωσαν την ιταλική χερσόνησο στους πέντε αιώνες ανάμεσα στην πτώση της Ρώμης και το έτος 1000. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα σημαντικότερα γεγονότα του πρώιμου ιταλικού Μεσαίωνα."
  },
  menuDescription: {
    en: "Rome has fallen, and Ostrogoths, Lombards, popes and Franks contend for Italy.",
    el: "Η Ρώμη έχει πέσει, κι Οστρογότθοι, Λομβαρδοί, πάπες και Φράγκοι διεκδικούν την Ιταλία."
  },
  footerLabel: {
    en: "Early Middle Ages · 476-1000 AD",
    el: "Πρώιμος Μεσαίωνας · 476-1000 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Early Medieval Italy",
    el: "Πρώιμη Μεσαιωνική Ιταλία"
  },
  theme: THEMES.copper,
  timeline: [
    {
      year: 476,
      era: {
        en: "End of the Western Empire",
        el: "Τέλος της Δυτικής Αυτοκρατορίας"
      },
      events: [
        {
          title: {
            en: "Odoacer Deposes Romulus Augustulus",
            el: "Ο Οδόακρος Καθαιρεί τον Ρωμύλο Αυγουστύλο"
          },
          description: {
            en: "The Germanic commander Odoacer deposes the boy emperor Romulus Augustulus and sends the imperial regalia to Constantinople, ending the line of Western Roman emperors.",
            el: "Ο Γερμανός στρατηγός Οδόακρος καθαιρεί τον παιδί-αυτοκράτορα Ρωμύλο Αυγουστύλο και αποστέλλει τα αυτοκρατορικά διάσημα στην Κωνσταντινούπολη, τερματίζοντας τη σειρά των αυτοκρατόρων της Δύσης."
          },
          extendedDescription: {
            en: "On 4 September 476, the federate troops of Italy proclaimed Odoacer their king after his victory over the patrician Orestes at Pavia. The deposed Romulus Augustulus, barely a teenager and the son of Orestes, was pensioned off to a villa in Campania, while Odoacer dispatched the western imperial insignia to Emperor Zeno in Constantinople with the message that one emperor sufficed for the Roman world. The act was less a cataclysm than a ratification of decades of political reality: real power in Italy had long rested with barbarian generals commanding the Roman army. Yet later historiography, from Marcellinus Comes to Edward Gibbon, would seize upon 476 as the symbolic close of the Western Empire and the conventional opening of the Middle Ages in the Latin West.",
            el: "Στις 4 Σεπτεμβρίου 476, τα ομόσπονδα στρατεύματα της Ιταλίας ανακήρυξαν βασιλιά τους τον Οδόακρο μετά τη νίκη του επί του πατρικίου Ορέστη στην Παβία. Ο καθαιρεθείς Ρωμύλος Αυγουστύλος, μόλις έφηβος και γιος του Ορέστη, αποσύρθηκε με σύνταξη σε έπαυλη στην Καμπανία, ενώ ο Οδόακρος έστειλε τα δυτικά αυτοκρατορικά διάσημα στον αυτοκράτορα Ζήνωνα στην Κωνσταντινούπολη με το μήνυμα ότι ένας αυτοκράτορας αρκούσε για τον ρωμαϊκό κόσμο. Η πράξη ήταν λιγότερο κατακλυσμός και περισσότερο επικύρωση μιας πολιτικής πραγματικότητας δεκαετιών: η πραγματική εξουσία στην Ιταλία ανήκε από καιρό σε βαρβάρους στρατηγούς που διοικούσαν τον ρωμαϊκό στρατό. Ωστόσο, η μεταγενέστερη ιστοριογραφία, από τον Μαρκελλίνο Κόμητα έως τον Έντουαρντ Γκίμπον, θα έβλεπε στο 476 το συμβολικό τέλος της Δυτικής Αυτοκρατορίας και τη συμβατική αρχή του Μεσαίωνα στη λατινική Δύση."
          },
          category: "political",
          image: {
            src: "https://upload.wikimedia.org/wikipedia/commons/c/c6/RomulusAugustus.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
            alt: {
              en: "Tremissis of Romulus Augustulus, last Western Roman emperor",
              el: "Τρεμίσσης του Ρωμύλου Αυγουστύλου, τελευταίου αυτοκράτορα της Δύσης"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 493,
      era: {
        en: "Ostrogothic Italy",
        el: "Οστρογοτθική Ιταλία"
      },
      events: [
        {
          title: {
            en: "Theodoric the Great Establishes the Ostrogothic Kingdom",
            el: "Ο Θεοδώριχος ο Μέγας Ιδρύει το Οστρογοτθικό Βασίλειο"
          },
          description: {
            en: "Theodoric, sent westward by Emperor Zeno, defeats and personally kills Odoacer at Ravenna, founding an Ostrogothic kingdom that preserves Roman administration.",
            el: "Ο Θεοδώριχος, σταλμένος δυτικά από τον αυτοκράτορα Ζήνωνα, νικά και σκοτώνει αυτοπροσώπως τον Οδόακρο στη Ραβέννα, ιδρύοντας ένα οστρογοτθικό βασίλειο που διατηρεί τη ρωμαϊκή διοίκηση."
          },
          extendedDescription: {
            en: "After a three-year siege of Ravenna, Theodoric and Odoacer agreed in March 493 to share rule over Italy, sealing the pact at a banquet in the imperial palace. There Theodoric struck down his rival with his own sword, reportedly remarking that the wretch had no bones, and proceeded to massacre Odoacer's followers across Italy. As rex gentium and patricius Romanorum, Theodoric ruled from Ravenna with the consent of Constantinople, retaining the Roman senate, the consulship, and Roman law for his Latin subjects while reserving military command for the Goths. Under his ministers Cassiodorus and Boethius, Italy enjoyed a generation of recovery and a remarkable late-classical culture, exemplified by the basilica of Sant'Apollinare Nuovo and the great mausoleum he built for himself outside Ravenna.",
            el: "Έπειτα από τριετή πολιορκία της Ραβέννας, ο Θεοδώριχος και ο Οδόακρος συμφώνησαν τον Μάρτιο του 493 να μοιραστούν την εξουσία στην Ιταλία, επισφραγίζοντας τη συμφωνία σε δείπνο στο αυτοκρατορικό παλάτι. Εκεί ο Θεοδώριχος σκότωσε τον αντίπαλό του με το ίδιο του το ξίφος, παρατηρώντας —λέγεται— ότι ο άθλιος δεν είχε καθόλου κόκκαλα, και προχώρησε στη σφαγή των οπαδών του Οδόακρου σε όλη την Ιταλία. Ως rex gentium και patricius Romanorum, ο Θεοδώριχος κυβέρνησε από τη Ραβέννα με τη συγκατάθεση της Κωνσταντινούπολης, διατηρώντας τη ρωμαϊκή σύγκλητο, την υπατεία και το ρωμαϊκό δίκαιο για τους Λατίνους υπηκόους του, ενώ επιφύλασσε τη στρατιωτική διοίκηση στους Γότθους. Υπό τους υπουργούς του Κασσιόδωρο και Βοήθιο, η Ιταλία γνώρισε μια γενιά ανάκαμψης και αξιοθαύμαστο ύστερο-κλασικό πολιτισμό, με χαρακτηριστικά παραδείγματα τη βασιλική του Sant'Apollinare Nuovo και το μεγάλο μαυσωλείο που έχτισε για τον εαυτό του έξω από τη Ραβέννα."
          },
          category: "political",
          image: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Mausoleum_of_Theodoric_%28Ravenna%29_-_Exterior.jpg/960px-Mausoleum_of_Theodoric_%28Ravenna%29_-_Exterior.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
            alt: {
              en: "Mausoleum of Theodoric, Ravenna",
              el: "Μαυσωλείο του Θεοδώριχου, Ραβέννα"
            },
            credit: "Wikimedia Commons (CC BY-SA)"
          }
        }
      ]
    },
    {
      year: 554,
      era: {
        en: "Byzantine Italy",
        el: "Βυζαντινή Ιταλία"
      },
      events: [
        {
          title: {
            en: "Pragmatic Sanction Restores Imperial Rule",
            el: "Η Πραγματική Κύρωση Αποκαθιστά την Αυτοκρατορική Κυριαρχία"
          },
          description: {
            en: "After two decades of devastating Gothic Wars, Justinian's Pragmatic Sanction (Sanctio Pragmatica) reincorporates Italy into the Roman Empire, ruled from Constantinople through an exarch at Ravenna.",
            el: "Έπειτα από δύο δεκαετίες καταστροφικών Γοτθικών Πολέμων, η Πραγματική Κύρωση (Sanctio Pragmatica) του Ιουστινιανού επανεντάσσει την Ιταλία στη Ρωμαϊκή Αυτοκρατορία, διοικούμενη από την Κωνσταντινούπολη μέσω εξάρχου στη Ραβέννα."
          },
          extendedDescription: {
            en: "Issued on 13 August 554 at the request of Pope Vigilius, the Pragmatic Sanction pro petitione Vigilii formally extended Roman law to Italy and confirmed the property and privileges of the senatorial class, the Church, and the cities, even as it cancelled the grants made by the Gothic kings Totila and Teia. Belisarius and Narses had finally crushed Ostrogothic resistance at Taginae and Mons Lactarius, but the price was catastrophic: Rome itself had been besieged five times, the aqueducts cut, the Senate effectively extinguished, and the agrarian economy of the peninsula shattered. The reconquered country was reorganised as a praetorian prefecture and, from the 580s, as the Exarchate of Ravenna, a Greek-speaking imperial outpost whose mosaics at San Vitale still proclaim the union of Roman emperor and Christian Church.",
            el: "Εκδοθείσα στις 13 Αυγούστου 554 κατόπιν αιτήματος του Πάπα Βιγιλίου, η Pragmatica Sanctio pro petitione Vigilii επεξέτεινε επίσημα το ρωμαϊκό δίκαιο στην Ιταλία και επιβεβαίωσε την περιουσία και τα προνόμια της συγκλητικής τάξης, της Εκκλησίας και των πόλεων, ακυρώνοντας ταυτόχρονα τις παραχωρήσεις των Γότθων βασιλέων Τοτίλα και Τεΐα. Ο Βελισάριος και ο Ναρσής είχαν επιτέλους συντρίψει την οστρογοτθική αντίσταση στην Τάγινα και το Mons Lactarius, αλλά το τίμημα ήταν καταστροφικό: η ίδια η Ρώμη πολιορκήθηκε πέντε φορές, τα υδραγωγεία κόπηκαν, η Σύγκλητος ουσιαστικά εξαφανίστηκε και η αγροτική οικονομία της χερσονήσου συντρίφτηκε. Η ανακτηθείσα χώρα αναδιοργανώθηκε σε πραιτωριανή επαρχία και, από τη δεκαετία του 580, σε Εξαρχάτο της Ραβέννας — ένα ελληνόφωνο αυτοκρατορικό προπύργιο, του οποίου τα ψηφιδωτά στον Άγιο Βιτάλιο διακηρύσσουν ακόμη την ένωση Ρωμαίου αυτοκράτορα και Χριστιανικής Εκκλησίας."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Meister_von_San_Vitale_in_Ravenna.jpg?width=1024",
            alt: {
              en: "Justinian and his retinue, mosaic from San Vitale, Ravenna",
              el: "Ο Ιουστινιανός και η ακολουθία του, ψηφιδωτό από τον Άγιο Βιτάλιο, Ραβέννα"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 568,
      era: {
        en: "Lombard Invasion",
        el: "Λομβαρδική Εισβολή"
      },
      events: [
        {
          title: {
            en: "Alboin Leads the Lombards into Italy",
            el: "Ο Αλβοΐνος Οδηγεί τους Λομβαρδούς στην Ιταλία"
          },
          description: {
            en: "King Alboin leads the Lombards from Pannonia across the Julian Alps, beginning a conquest that fragments Italy between Lombard kings, dukes, and the Byzantine exarchate.",
            el: "Ο βασιλιάς Αλβοΐνος οδηγεί τους Λομβαρδούς από την Παννονία μέσω των Ιουλιανών Άλπεων, ξεκινώντας μια κατάκτηση που κατακερματίζει την Ιταλία μεταξύ Λομβαρδών βασιλέων, δουκών και του Βυζαντινού εξαρχάτου."
          },
          extendedDescription: {
            en: "In the spring of 568, Alboin reportedly summoned every people he could rouse — Lombards, Saxons, Gepids, Bulgars, Sarmatians — and crossed the eastern passes into a peninsula exhausted by the Gothic Wars and ravaged by the plague. Pavia fell after a three-year siege and became the new royal capital. Within a generation Lombard duchies had been carved out from Friuli to Spoleto and Benevento, while Byzantine authority retreated to a string of coastal corridors linking Ravenna, Rome, Naples, and the south. The political map of the peninsula that this invasion produced — north under Germanic rulers, the centre under the Pope, the south fought over by Greeks, Lombards, and later Arabs and Normans — would endure, in different guises, for thirteen hundred years.",
            el: "Την άνοιξη του 568, ο Αλβοΐνος, λέγεται ότι κάλεσε κάθε λαό που μπορούσε να εξεγείρει — Λομβαρδούς, Σάξονες, Γέπιδες, Βουλγάρους, Σαρμάτες — και πέρασε τα ανατολικά περάσματα σε μια χερσόνησο εξουθενωμένη από τους Γοτθικούς Πολέμους και ρημαγμένη από την πανώλη. Η Παβία έπεσε ύστερα από τριετή πολιορκία και έγινε η νέα βασιλική πρωτεύουσα. Μέσα σε μια γενιά είχαν χαραχθεί λομβαρδικά δουκάτα από το Φριούλι έως το Σπολέτο και το Μπενεβέντο, ενώ η βυζαντινή εξουσία υποχώρησε σε μια αλυσίδα παράκτιων διαδρόμων που συνέδεε τη Ραβέννα, τη Ρώμη, τη Νάπολη και τον Νότο. Ο πολιτικός χάρτης της χερσονήσου που γέννησε αυτή η εισβολή — Βορράς υπό γερμανικούς ηγεμόνες, κέντρο υπό τον Πάπα, Νότος αμφισβητούμενος μεταξύ Ελλήνων, Λομβαρδών και αργότερα Αράβων και Νορμανδών — θα διαρκούσε, σε διάφορες μορφές, για δεκατρείς αιώνες."
          },
          category: "military",
          image: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Byzantine_and_Longobard_Italy_-_600_AD.png/960px-Byzantine_and_Longobard_Italy_-_600_AD.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
            alt: {
              en: "Map of Lombard and Byzantine Italy, late 6th century",
              el: "Χάρτης της Λομβαρδικής και Βυζαντινής Ιταλίας, ύστερος 6ος αιώνας"
            },
            credit: "Wikimedia Commons (CC BY-SA)"
          }
        }
      ]
    },
    {
      year: 590,
      era: {
        en: "Papal Rome",
        el: "Παπική Ρώμη"
      },
      events: [
        {
          title: {
            en: "Gregory the Great Becomes Pope",
            el: "Ο Γρηγόριος ο Μέγας Γίνεται Πάπας"
          },
          description: {
            en: "The former prefect of Rome, Gregory I, is elected pope and transforms the bishopric of Rome into the de facto government of central Italy.",
            el: "Ο πρώην έπαρχος της Ρώμης, Γρηγόριος Α', εκλέγεται πάπας και μεταμορφώνει την επισκοπή της Ρώμης σε εκ των πραγμάτων κυβέρνηση της κεντρικής Ιταλίας."
          },
          extendedDescription: {
            en: "Gregory took the throne of Saint Peter at a moment when Lombard armies stood within sight of Rome's walls, the Tiber had flooded, plague stalked the city, and imperial pay for the garrison had failed to arrive. Drawing on the vast estates of the Patrimony of Saint Peter scattered from Sicily to Provence, he organised grain shipments, ransomed captives, paid soldiers, and negotiated truces directly with the Lombard kings — actions traditionally reserved to the emperor. He also dispatched the mission of Augustine to convert the English, codified the liturgy that bears his name, and wrote the Pastoral Rule that became the Carolingian handbook for bishops. The reach of his correspondence and the practical sovereignty he exercised in Italy laid the foundation for the medieval papacy as a temporal as well as spiritual power.",
            el: "Ο Γρηγόριος ανέβηκε στον θρόνο του Αγίου Πέτρου σε μια στιγμή που λομβαρδικά στρατεύματα βρίσκονταν εντός οπτικής επαφής με τα τείχη της Ρώμης, ο Τίβερης είχε πλημμυρίσει, η πανώλη μάστιζε την πόλη και ο αυτοκρατορικός μισθός της φρουράς είχε καθυστερήσει. Αξιοποιώντας τα τεράστια κτήματα του Πατριμονίου του Αγίου Πέτρου, διασκορπισμένα από τη Σικελία ως την Προβηγκία, οργάνωσε αποστολές σιτηρών, εξαγόρασε αιχμαλώτους, πλήρωσε στρατιώτες και διαπραγματεύτηκε εκεχειρίες απευθείας με τους Λομβαρδούς βασιλείς — ενέργειες παραδοσιακά επιφυλαγμένες στον αυτοκράτορα. Έστειλε επίσης την αποστολή του Αυγουστίνου για τον εκχριστιανισμό των Άγγλων, κωδικοποίησε τη λειτουργία που φέρει το όνομά του και συνέγραψε τον Ποιμαντικό Κανόνα που έγινε το καρολίγγειο εγχειρίδιο των επισκόπων. Η εμβέλεια της αλληλογραφίας του και η πρακτική κυριαρχία που άσκησε στην Ιταλία έθεσαν τα θεμέλια του μεσαιωνικού παπισμού ως κοσμικής αλλά και πνευματικής εξουσίας."
          },
          category: "religious",
          image: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Carlo_Saraceni_%281579-1620%29_%28possibly%29_-_Saint_Gregory_the_Great_-_H.4811_-_Thirlestane_Castle.jpg/960px-Carlo_Saraceni_%281579-1620%29_%28possibly%29_-_Saint_Gregory_the_Great_-_H.4811_-_Thirlestane_Castle.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
            alt: {
              en: "Saint Gregory the Great, by Carlo Saraceni",
              el: "Ο Άγιος Γρηγόριος ο Μέγας, του Κάρλο Σαρατσένι"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 751,
      era: {
        en: "Lombard Italy",
        el: "Λομβαρδική Ιταλία"
      },
      events: [
        {
          title: {
            en: "Fall of the Exarchate of Ravenna",
            el: "Πτώση του Εξαρχάτου της Ραβέννας"
          },
          description: {
            en: "The Lombard king Aistulf captures Ravenna, ending two centuries of Byzantine government in northern Italy and forcing the popes to seek a new protector beyond the Alps.",
            el: "Ο Λομβαρδός βασιλιάς Αιστούλφος καταλαμβάνει τη Ραβέννα, τερματίζοντας δύο αιώνες βυζαντινής διοίκησης στη Βόρεια Ιταλία και εξαναγκάζοντας τους πάπες να αναζητήσουν νέο προστάτη πέρα από τις Άλπεις."
          },
          extendedDescription: {
            en: "After a long blockade, Aistulf entered Ravenna in the summer of 751 and proclaimed himself master of all the lands once held by the exarch, including the Pentapolis on the Adriatic. The fall of the city was a watershed: it ended Greek imperial authority in the Po valley, isolated Rome from the rest of Christendom, and threatened the city itself with absorption into the Lombard kingdom. Pope Stephen II, finding no help from Constantinople — distracted by the iconoclast crisis and a Bulgar war — crossed the Alps in the dead of winter to seek the protection of the new Carolingian dynasty in Francia. The diplomatic earthquake that followed would, within twenty years, replace the Lombard kingdom with a Frankish one and tie the destiny of Italy to the politics of the Rhine.",
            el: "Έπειτα από μακρά πολιορκία, ο Αιστούλφος εισήλθε στη Ραβέννα το καλοκαίρι του 751 και αυτοανακηρύχθηκε κύριος όλων των εδαφών που κατείχε άλλοτε ο έξαρχος, μαζί με την Πεντάπολη της Αδριατικής. Η πτώση της πόλης ήταν τομή: τερμάτισε την ελληνική αυτοκρατορική εξουσία στην κοιλάδα του Πάδου, απομόνωσε τη Ρώμη από την υπόλοιπη Χριστιανοσύνη και απείλησε την ίδια την πόλη με ενσωμάτωση στο λομβαρδικό βασίλειο. Ο Πάπας Στέφανος Β', μη βρίσκοντας βοήθεια από την Κωνσταντινούπολη — απορροφημένη στη μαινόμενη εικονομαχία και σε πόλεμο με τους Βουλγάρους — διέσχισε τις Άλπεις καταχείμωνο για να ζητήσει την προστασία της νέας καρολίγγειας δυναστείας στη Φραγκία. Ο διπλωματικός σεισμός που ακολούθησε θα αντικαθιστούσε, μέσα σε είκοσι χρόνια, το λομβαρδικό βασίλειο με ένα φραγκικό και θα έδενε τη μοίρα της Ιταλίας με την πολιτική του Ρήνου."
          },
          category: "military"
        }
      ]
    },
    {
      year: 756,
      era: {
        en: "Patrimony of Saint Peter",
        el: "Πατριμόνιο του Αγίου Πέτρου"
      },
      events: [
        {
          title: {
            en: "Donation of Pepin",
            el: "Δωρεά του Πεπίνου"
          },
          description: {
            en: "King Pepin the Short hands the lands of the former exarchate over to the pope, creating the temporal Papal States.",
            el: "Ο βασιλιάς Πεπίνος ο Βραχύς παραχωρεί τα εδάφη του πρώην εξαρχάτου στον πάπα, δημιουργώντας τα κοσμικά Παπικά Κράτη."
          },
          extendedDescription: {
            en: "Twice in three years Pepin the Short crossed the Alps at the head of a Frankish army to humble King Aistulf. After his second victory in 756 he refused Byzantine demands to return the conquered cities to the emperor and instead laid the keys of Ravenna, the Pentapolis, and twenty-two other towns on the tomb of Saint Peter, charging his envoy Fulrad of Saint-Denis with delivering them to Pope Stephen. The act, soon embellished by the forged Donation of Constantine, gave the popes a continuous strip of territory from the Tyrrhenian to the Adriatic and a sovereign role they would not relinquish until 1870. It also bound the papacy to the Carolingians: the price of protection from the Lombards was the legitimation of a Frankish royal house and, eventually, the resurrection of a western emperor.",
            el: "Δύο φορές σε τρία χρόνια, ο Πεπίνος ο Βραχύς διέσχισε τις Άλπεις επικεφαλής φραγκικού στρατού για να ταπεινώσει τον βασιλιά Αιστούλφο. Μετά τη δεύτερη νίκη του το 756 αρνήθηκε τις βυζαντινές απαιτήσεις να επιστρέψει τις κατακτημένες πόλεις στον αυτοκράτορα και αντί γι' αυτό απέθεσε τα κλειδιά της Ραβέννας, της Πεντάπολης και άλλων είκοσι δύο πόλεων στον τάφο του Αγίου Πέτρου, αναθέτοντας στον απεσταλμένο του Φουλράδο του Σαιν-Ντενί την παράδοσή τους στον Πάπα Στέφανο. Η πράξη, σύντομα στολισμένη με την πλαστή Δωρεά του Κωνσταντίνου, παρείχε στους πάπες μια συνεχή λωρίδα εδάφους από την Τυρρηνική ως την Αδριατική και έναν κυριαρχικό ρόλο τον οποίο δεν θα εγκατέλειπαν παρά μόνο το 1870. Έδενε επίσης τον παπισμό με τους Καρολίγγειους: το τίμημα της προστασίας από τους Λομβαρδούς ήταν η νομιμοποίηση μιας φραγκικής βασιλικής οικογένειας και, εν τέλει, η αναγέννηση ενός Δυτικού αυτοκράτορα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 774,
      era: {
        en: "Carolingian Italy",
        el: "Καρολίγγεια Ιταλία"
      },
      events: [
        {
          title: {
            en: "Charlemagne Conquers the Lombard Kingdom",
            el: "Ο Καρλομάγνος Κατακτά το Λομβαρδικό Βασίλειο"
          },
          description: {
            en: "Charlemagne takes Pavia, deposes King Desiderius, and assumes the Iron Crown of the Lombards, ending two centuries of Lombard rule in northern Italy.",
            el: "Ο Καρλομάγνος καταλαμβάνει την Παβία, καθαιρεί τον βασιλιά Δεσιδέριο και αναλαμβάνει το Σιδηρούν Στέμμα των Λομβαρδών, τερματίζοντας δύο αιώνες λομβαρδικής κυριαρχίας στη Βόρεια Ιταλία."
          },
          extendedDescription: {
            en: "Pope Hadrian I, threatened once more by a Lombard king who refused to honour earlier donations, summoned the Franks across the Alps in 773. Charlemagne besieged Pavia for nine months, breached the walls in early June 774, and accepted the surrender of Desiderius, whom he packed off to a Frankish monastery. Where his father Pepin had merely defended the popes, Charlemagne absorbed the Lombard kingdom outright, styling himself rex Francorum et Langobardorum and uniting most of Italy north of Rome with the Frankish realm. The conquest installed Frankish counts in old Lombard cities, opened the peninsula to the Carolingian renaissance of letters and script, and set the stage for the imperial coronation that would follow on Christmas Day 800.",
            el: "Ο Πάπας Αδριανός Α', απειλούμενος εκ νέου από Λομβαρδό βασιλιά που αρνιόταν να τηρήσει τις προηγούμενες δωρεές, κάλεσε τους Φράγκους πέρα από τις Άλπεις το 773. Ο Καρλομάγνος πολιόρκησε την Παβία επί εννέα μήνες, παραβίασε τα τείχη στις αρχές Ιουνίου 774 και δέχθηκε την παράδοση του Δεσιδερίου, τον οποίο απέστειλε σε φραγκικό μοναστήρι. Εκεί όπου ο πατέρας του Πεπίνος είχε απλώς υπερασπιστεί τους πάπες, ο Καρλομάγνος απορρόφησε εξ ολοκλήρου το λομβαρδικό βασίλειο, αυτοτιτλοφορούμενος rex Francorum et Langobardorum και ενώνοντας το μεγαλύτερο μέρος της Ιταλίας βόρεια της Ρώμης με το φραγκικό κράτος. Η κατάκτηση εγκατέστησε Φράγκους κόμητες στις παλιές λομβαρδικές πόλεις, άνοιξε τη χερσόνησο στην καρολίγγεια αναγέννηση της γραμματείας και της γραφής, και προετοίμασε το έδαφος για την αυτοκρατορική στέψη που θα ακολουθούσε τα Χριστούγεννα του 800."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Iron_Crown.JPG?width=1024",
            alt: {
              en: "The Iron Crown of Lombardy, Monza Cathedral",
              el: "Το Σιδηρούν Στέμμα των Λομβαρδών, Καθεδρικός της Μόντζας"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 800,
      era: {
        en: "Holy Roman Idea",
        el: "Ιδέα της Ιερής Ρωμαϊκής Αυτοκρατορίας"
      },
      events: [
        {
          title: {
            en: "Coronation of Charlemagne in Rome",
            el: "Στέψη του Καρλομάγνου στη Ρώμη"
          },
          description: {
            en: "On Christmas Day, Pope Leo III crowns Charlemagne emperor in Saint Peter's Basilica, reviving a western imperial title and binding Italy to a transalpine empire.",
            el: "Ανήμερα τα Χριστούγεννα, ο Πάπας Λέων Γ' στέφει τον Καρλομάγνο αυτοκράτορα στη Βασιλική του Αγίου Πέτρου, αναβιώνοντας έναν δυτικό αυτοκρατορικό τίτλο και δένοντας την Ιταλία με μια διάλπεια αυτοκρατορία."
          },
          extendedDescription: {
            en: "Leo III, lately rescued from a Roman conspiracy that had tried to mutilate him, met Charlemagne at Saint Peter's during the Christmas Mass of 800. As the king rose from prayer, the pope set a crown on his head and the assembled Romans hailed him as Augustus. Charlemagne, according to his biographer Einhard, claimed afterward that he would not have entered the church had he known what Leo intended — a stance that allowed him to negotiate later with Empress Irene of Constantinople over the affront. Whatever his private feelings, the coronation announced that the West now had a Christian emperor again, that the bishop of Rome could make him, and that Italy was destined to be the stage on which medieval emperors and popes contested the Roman inheritance.",
            el: "Ο Λέων Γ', μόλις είχε διασωθεί από ρωμαϊκή συνωμοσία που είχε επιχειρήσει να τον ακρωτηριάσει, συνάντησε τον Καρλομάγνο στον Άγιο Πέτρο κατά τη χριστουγεννιάτικη Λειτουργία του 800. Καθώς ο βασιλιάς σηκωνόταν από την προσευχή, ο πάπας τοποθέτησε στέμμα στο κεφάλι του και ο συγκεντρωμένος ρωμαϊκός λαός τον επευφήμησε ως Αύγουστο. Ο Καρλομάγνος, κατά τον βιογράφο του Εϊνχάρδο, ισχυρίστηκε αργότερα ότι δεν θα είχε εισέλθει στον ναό αν γνώριζε τις προθέσεις του Λέοντα — στάση που του επέτρεψε να διαπραγματευτεί αργότερα με την Αυτοκράτειρα Ειρήνη της Κωνσταντινούπολης για την προσβολή. Όποια κι αν ήταν τα προσωπικά του αισθήματα, η στέψη ανακοίνωνε ότι η Δύση είχε και πάλι Χριστιανό αυτοκράτορα, ότι ο επίσκοπος της Ρώμης μπορούσε να τον αναδείξει και ότι η Ιταλία προοριζόταν να γίνει η σκηνή πάνω στην οποία οι μεσαιωνικοί αυτοκράτορες και πάπες θα διεκδικούσαν τη ρωμαϊκή κληρονομιά."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Karl_der_Grosse_-_Pippin_von_Italien.jpg?width=1024",
            alt: {
              en: "Charlemagne and his son Pepin of Italy, 9th-century manuscript",
              el: "Ο Καρλομάγνος και ο γιος του Πεπίνος της Ιταλίας, χειρόγραφο του 9ου αιώνα"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 827,
      era: {
        en: "Saracen Sicily",
        el: "Σαρακηνική Σικελία"
      },
      events: [
        {
          title: {
            en: "Aghlabid Invasion of Sicily Begins",
            el: "Αρχίζει η Αγλαβιδική Εισβολή στη Σικελία"
          },
          description: {
            en: "An Aghlabid expedition lands at Mazara, opening a long war that will detach Sicily from the Byzantine empire and turn Palermo into one of the great Mediterranean capitals of Islam.",
            el: "Μια αγλαβιδική εκστρατεία αποβιβάζεται στη Μαζάρα, ανοίγοντας έναν μακρύ πόλεμο που θα αποκόψει τη Σικελία από τη Βυζαντινή Αυτοκρατορία και θα μετατρέψει το Παλέρμο σε μία από τις μεγάλες μεσογειακές πρωτεύουσες του Ισλάμ."
          },
          extendedDescription: {
            en: "The invasion was launched at the invitation of the rebel Byzantine commander Euphemius, but it quickly became a religious war led by the qadi Asad ibn al-Furat. Palermo fell in 831, Messina in 843, and Syracuse — the ancient Greek capital — held out heroically until 878. Under Aghlabid, Fatimid, and Kalbid emirs, Sicily was reorganised on Islamic lines, with new crops (citrus, sugar cane, cotton, durum wheat for pasta), Arabic place-names, and a flourishing scholarly community. The island became a meeting-ground of Greek, Latin, and Arabic learning that would feed both the later Norman court and the Andalusian transmission of classical philosophy to Europe.",
            el: "Η εισβολή ξεκίνησε ύστερα από πρόσκληση του αποστάτη Βυζαντινού στρατηγού Ευφημίου, αλλά γρήγορα μετατράπηκε σε θρησκευτικό πόλεμο υπό την ηγεσία του κάδι Ασάντ ιμπν αλ-Φουράτ. Το Παλέρμο έπεσε το 831, η Μεσσήνη το 843, και οι Συρακούσες — η αρχαία ελληνική πρωτεύουσα — αντιστάθηκαν ηρωικά μέχρι το 878. Υπό τους Αγλαβίδες, τους Φατιμίδες και τους Καλβίδες εμίρηδες, η Σικελία αναδιοργανώθηκε σε ισλαμική βάση, με νέες καλλιέργειες (εσπεριδοειδή, ζαχαροκάλαμο, βαμβάκι, σκληρό σίτο για ζυμαρικά), αραβικά τοπωνύμια και μια ακμάζουσα κοινότητα λογίων. Το νησί έγινε τόπος συνάντησης ελληνικής, λατινικής και αραβικής μάθησης, που θα τροφοδοτούσε αργότερα τόσο τη νορμανδική αυλή όσο και την ανδαλουσιανή μεταβίβαση της κλασικής φιλοσοφίας στην Ευρώπη."
          },
          category: "military"
        }
      ]
    },
    {
      year: 962,
      era: {
        en: "Holy Roman Empire",
        el: "Ιερή Ρωμαϊκή Αυτοκρατορία"
      },
      events: [
        {
          title: {
            en: "Otto I Crowned Holy Roman Emperor",
            el: "Ο Όθων Α' Στέφεται Αυτοκράτορας της Ιερής Ρωμαϊκής Αυτοκρατορίας"
          },
          description: {
            en: "Pope John XII crowns the Saxon king Otto I in Rome, refounding the western empire on a German base and inaugurating the long entanglement of Italy with the Reich.",
            el: "Ο Πάπας Ιωάννης ΙΒ' στέφει τον Σάξονα βασιλιά Όθωνα Α' στη Ρώμη, επανιδρύοντας τη δυτική αυτοκρατορία σε γερμανική βάση και εγκαινιάζοντας τη μακρά εμπλοκή της Ιταλίας με το Ράιχ."
          },
          extendedDescription: {
            en: "Otto crossed the Alps in 961 to answer a papal appeal against King Berengar II of Italy. After defeating Berengar he entered Rome and on 2 February 962 was anointed and crowned by John XII; the imperial title, vacant in practice since the death of Berengar I in 924, was now firmly attached to the German monarchy. The Privilegium Ottonianum sworn that month confirmed the donations of earlier emperors to the Roman church but reserved imperial approval of papal elections — terms that would generate centuries of conflict over the relative authority of pope and emperor. From 962 until 1806 the Roman imperial title would be claimed by a succession of Germanic rulers, each of whom would expect to be crowned in Italy and to be obeyed there.",
            el: "Ο Όθων διέσχισε τις Άλπεις το 961 ανταποκρινόμενος σε παπική έκκληση κατά του βασιλιά Βερεγκάριου Β' της Ιταλίας. Αφού νίκησε τον Βερεγκάριο, εισήλθε στη Ρώμη και στις 2 Φεβρουαρίου 962 χρίστηκε και στέφθηκε από τον Ιωάννη ΙΒ'· ο αυτοκρατορικός τίτλος, ουσιαστικά κενός από τον θάνατο του Βερεγκάριου Α' το 924, έδενε πλέον σταθερά με τη γερμανική μοναρχία. Το Privilegium Ottonianum που ορκίστηκε εκείνον τον μήνα επιβεβαίωνε τις δωρεές προηγούμενων αυτοκρατόρων προς τη Ρωμαϊκή Εκκλησία, αλλά επιφύλασσε αυτοκρατορική έγκριση των παπικών εκλογών — όροι που θα γεννούσαν αιώνες σύγκρουσης για τη σχετική εξουσία πάπα και αυτοκράτορα. Από το 962 έως το 1806, ο ρωμαϊκός αυτοκρατορικός τίτλος θα διεκδικούνταν από μια διαδοχή γερμανών ηγεμόνων, καθένας από τους οποίους θα προσδοκούσε να στεφθεί στην Ιταλία και να υπακούεται εκεί."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1000,
      era: {
        en: "Maritime Republics",
        el: "Ναυτικές Δημοκρατίες"
      },
      events: [
        {
          title: {
            en: "Doge Pietro II Orseolo's Dalmatian Expedition",
            el: "Δαλματική Εκστρατεία του Δόγη Πιέτρο Β' Ορσέολο"
          },
          description: {
            en: "The Doge of Venice sails the eastern Adriatic in person, securing tributes from the Dalmatian cities and inaugurating Venice's long career as a Mediterranean sea-power.",
            el: "Ο Δόγης της Βενετίας πλέει αυτοπροσώπως στην ανατολική Αδριατική, εξασφαλίζοντας φόρους υποτέλειας από τις δαλματικές πόλεις και εγκαινιάζοντας τη μακρόχρονη πορεία της Βενετίας ως μεσογειακής ναυτικής δύναμης."
          },
          extendedDescription: {
            en: "On Ascension Day 1000, Pietro II Orseolo set sail with a Venetian fleet to protect the Dalmatian Romance towns from Croatian and Narentine pressure. Within weeks Zara, Trogir, Spalato, and Ragusa had accepted Venetian protection, and the doge added Dux Dalmatiae to his titles. To commemorate the campaign, Venice instituted the annual Sposalizio del Mar, the symbolic marriage of the city to the sea celebrated each Ascension. The expedition prefigured the rise of the Italian maritime republics — Amalfi, Pisa, Genoa, and Venice — whose merchants would dominate the medieval Mediterranean economy and whose competition would shape everything from the Crusades to the discovery of the New World.",
            el: "Την ημέρα της Αναλήψεως του 1000, ο Πιέτρο Β' Ορσέολο απέπλευσε με βενετικό στόλο για να προστατεύσει τις δαλματικές ρωμανικές πόλεις από τις πιέσεις των Κροατών και των Ναρεντίνων. Μέσα σε εβδομάδες η Ζάρα, η Τραού, ο Σπάλατος και η Ραγούσα είχαν αποδεχθεί τη βενετική προστασία και ο δόγης πρόσθεσε τον τίτλο Dux Dalmatiae. Για να τιμήσει την εκστρατεία, η Βενετία θέσπισε το ετήσιο Sposalizio del Mar, τον συμβολικό «γάμο» της πόλης με τη θάλασσα που εορταζόταν κάθε Ανάληψη. Η εκστρατεία προεικόνιζε την άνοδο των ιταλικών ναυτικών δημοκρατιών — Αμάλφης, Πίζας, Γένοβας και Βενετίας — των οποίων οι έμποροι θα κυριαρχούσαν στη μεσαιωνική μεσογειακή οικονομία και των οποίων ο ανταγωνισμός θα διαμόρφωνε τα πάντα, από τις Σταυροφορίες ως την ανακάλυψη του Νέου Κόσμου."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bocche_di_Cattaro.jpg?width=1024",
            alt: {
              en: "Bay of Kotor, the southern reach of medieval Venetian Dalmatia",
              el: "Κόλπος του Κατάρο, το νότιο όριο της μεσαιωνικής βενετικής Δαλματίας"
            },
            credit: "Wikimedia Commons (CC BY-SA)"
          }
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
