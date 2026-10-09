/** Early Middle Ages / Frankish Kingdoms — Πρώιμος Μεσαίωνας / Φραγκικά Βασίλεια · French History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const FRANKISH_KINGDOMS = {
  id: "frankish-kingdoms" as const,
  label: {
    en: "Early Middle Ages / Frankish Kingdoms",
    el: "Πρώιμος Μεσαίωνας / Φραγκικά Βασίλεια"
  },
  supertitle: {
    en: "Francia",
    el: "Φραγκία"
  },
  title: {
    en: "Early Middle Ages: the Frankish Kingdoms",
    el: "Πρώιμος Μεσαίωνας: τα Φραγκικά Βασίλεια"
  },
  subtitle: {
    en: "From the great Rhine crossing of 406 and the baptism of Clovis through the Merovingian wars, Charles Martel at Poitiers, Charlemagne's imperial coronation in Rome, the Treaty of Verdun, the Viking sieges of Paris, and the foundation of Normandy, to the election of Hugh Capet and the dawn of the Capetian century. Slide across the centuries to read the major events that forged Francia.",
    el: "Από τη μεγάλη διάβαση του Ρήνου του 406 και τη βάπτιση του Χλωδοβίκου, μέσα από τους μεροβίγγειους πολέμους, τον Κάρολο Μαρτέλο στο Πουατιέ, την αυτοκρατορική στέψη του Καρλομάγνου στη Ρώμη, τη Συνθήκη του Βερντέν, τις πολιορκίες του Παρισιού από τους Βίκινγκς και την ίδρυση της Νορμανδίας, έως την εκλογή του Ούγου Καπετίνγκου και την αυγή του καπετιανού αιώνα. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα γεγονότα που σφυρηλάτησαν τη Φραγκία."
  },
  menuDescription: {
    en: "Clovis, Charlemagne and the partition of Verdun: the Franks build the West.",
    el: "Ο Χλωδοβίκος, ο Καρλομάγνος κι η διανομή του Βερντέν: οι Φράγκοι χτίζουν τη Δύση."
  },
  footerLabel: {
    en: "Frankish Kingdoms · 5th–10th centuries CE",
    el: "Φραγκικά Βασίλεια · 5ος–10ος αιώνας μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Early Middle Ages / Frankish Kingdoms",
    el: "Πρώιμος Μεσαίωνας / Φραγκικά Βασίλεια"
  },
  theme: THEMES.sapphire,
  timeline: [
    {
      year: 406,
      era: {
        en: "Crossing of the Rhine",
        el: "Διάβαση του Ρήνου"
      },
      events: [
        {
          title: {
            en: "Vandals, Alans, and Sueves break the frontier",
            el: "Βάνδαλοι, Αλανοί και Σουήβοι σπάζουν τη μεθόριο"
          },
          description: {
            en: "On the last day of 406, a confederation of Vandals, Alans, and Sueves crosses the frozen Rhine near Mainz. The Gallic provinces are pillaged for three years before the invaders pour on into Spain.",
            el: "Την τελευταία ημέρα του 406, συνομοσπονδία Βανδάλων, Αλανών και Σουήβων διασχίζει τον παγωμένο Ρήνο κοντά στη Μαγεντία. Οι γαλατικές επαρχίες λεηλατούνται για τρία χρόνια προτού οι εισβολείς εισβάλουν στην Ισπανία."
          },
          extendedDescription: {
            en: "Jerome's letter 123 lists the cities ruined: Mainz, Worms, Reims, Amiens, Arras, Tournai, Speyer, Strasbourg. The poet Orientius captures the trauma: 'all Gaul smoked on a single pyre'. The defence of the Rhine, broken for good, will be replaced over the next century by the patchwork settlements of Visigoths, Burgundians, and Franks.",
            el: "Η επιστολή 123 του Ιερωνύμου απαριθμεί τις κατεστραμμένες πόλεις: Μαγεντία, Βορμς, Ρεμς, Αμιένη, Αρράς, Τουρναί, Σπάιερ, Στρασβούργο. Ο ποιητής Οριέντιος συμπυκνώνει το τραύμα: «ολόκληρη η Γαλατία κάπνιζε σε μία πυρά». Η άμυνα του Ρήνου, σπασμένη οριστικά, θα αντικατασταθεί τον επόμενο αιώνα από τις διάσπαρτες εγκαταστάσεις Βησιγότθων, Βουργουνδών και Φράγκων."
          },
          category: "military"
        }
      ]
    },
    {
      year: 418,
      era: {
        en: "Foederate Settlements",
        el: "Εγκαταστάσεις Φοιδεράτων"
      },
      events: [
        {
          title: {
            en: "Visigoths settle in Aquitaine",
            el: "Οι Βησιγότθοι εγκαθίστανται στην Ακυτανία"
          },
          description: {
            en: "By treaty with the patrician Constantius, the Visigoths of Wallia are settled as Roman foederati in Aquitania Secunda, with Toulouse as their seat. A barbarian kingdom now sits inside the Gallic provinces.",
            el: "Με συνθήκη με τον πατρίκιο Κωνστάντιο, οι Βησιγότθοι του Ουαλλία εγκαθίστανται ως ρωμαϊκοί φοιδεράτοι στη Δευτέρα Ακυτανία, με έδρα την Τολώζα. Ένα βαρβαρικό βασίλειο βρίσκεται πλέον μέσα στις γαλατικές επαρχίες."
          },
          extendedDescription: {
            en: "Only eight years earlier, under Alaric, the Visigoths had sacked Rome itself; under Wallia they had fought the Vandals and Alans in Spain on Rome's behalf. The settlement at Toulouse became the first barbarian kingdom on Roman soil, and under King Euric (466–484) it grew to stretch from the Loire across most of Spain, with its own written law code. The Burgundians were settled in the Rhône valley on similar terms in 443.",
            el: "Μόλις οκτώ χρόνια νωρίτερα, υπό τον Αλάριχο, οι Βησιγότθοι είχαν λεηλατήσει την ίδια τη Ρώμη· υπό τον Βαλλία είχαν πολεμήσει τους Βανδάλους και τους Αλανούς στην Ισπανία για λογαριασμό της Ρώμης. Η εγκατάσταση στην Τουλούζη έγινε το πρώτο βαρβαρικό βασίλειο σε ρωμαϊκό έδαφος, και υπό τον βασιλιά Εύριχο (466–484) εκτάθηκε από τον Λίγηρα ως το μεγαλύτερο μέρος της Ισπανίας, με δικό του γραπτό νομικό κώδικα. Οι Βουργούνδιοι εγκαταστάθηκαν στην κοιλάδα του Ροδανού με ανάλογους όρους το 443."
          },
          category: "political"
        }
      ]
    },
    {
      year: 451,
      era: {
        en: "Attila's Invasion",
        el: "Εισβολή του Αττίλα"
      },
      events: [
        {
          title: {
            en: "The Catalaunian Plains",
            el: "Τα Καταλαυνικά Πεδία"
          },
          description: {
            en: "The Roman general Aetius, allied with the Visigoth Theodoric I and Frankish, Burgundian, and Alan contingents, halts Attila's Huns near Châlons. Theodoric falls in the battle, but the Huns are checked and turn back across the Rhine.",
            el: "Ο Ρωμαίος στρατηγός Αέτιος, σύμμαχος με τον Βησιγότθο Θεοδώριχο Α΄ και φραγκικά, βουργουνδικά και αλανικά σώματα, αναχαιτίζει τους Ούννους του Αττίλα κοντά στις Σαλόνες. Ο Θεοδώριχος πέφτει στη μάχη, αλλά οι Ούννοι αποκρούονται και επιστρέφουν πέρα από τον Ρήνο."
          },
          extendedDescription: {
            en: "Jordanes and the Gallic chronicles preserve the battle's place in Western memory as the last great victory of Roman arms in Gaul. The relief of Orléans by Aetius and the bishop Anianus would enter hagiography; so too would Saint Geneviève's intercession at Lutetia, said to have turned Attila away from Paris.",
            el: "Ο Ιορδάνης και τα γαλατικά χρονικά διασώζουν τη μάχη στη δυτική μνήμη ως την τελευταία μεγάλη νίκη των ρωμαϊκών όπλων στη Γαλατία. Η απελευθέρωση της Ορλεάνης από τον Αέτιο και τον επίσκοπο Ανιανό θα μπει στην αγιολογία· το ίδιο και η πρεσβεία της Αγίας Γενεβιέφης στη Λουτετία, που λέγεται ότι απομάκρυνε τον Αττίλα από το Παρίσι."
          },
          category: "military"
        }
      ]
    },
    {
      year: 486,
      era: {
        en: "Rise of the Franks",
        el: "Άνοδος των Φράγκων"
      },
      events: [
        {
          title: {
            en: "Clovis defeats Syagrius at Soissons",
            el: "Ο Χλώδοβικος νικά τον Συάγριο στη Σουασόν"
          },
          description: {
            en: "The young Salian Frankish king Clovis crushes Syagrius — the last Roman ruler of the Domain of Soissons between the Loire and the Somme — and absorbs his territory. The Gallo-Roman political order north of the Loire is at an end.",
            el: "Ο νεαρός Σάλιος Φράγκος βασιλιάς Χλώδοβικος συντρίβει τον Συάγριο — τον τελευταίο Ρωμαίο ηγεμόνα του Τομέα της Σουασόν μεταξύ Λίγηρα και Σομ — και απορροφά τα εδάφη του. Η γαλατορωμαϊκή πολιτική τάξη βόρεια του Λίγηρα τερματίζεται."
          },
          extendedDescription: {
            en: "Syagrius fled to the Visigothic court at Toulouse, which handed him over to Clovis to be put to death. Gregory of Tours tells how, after the battle, a Frankish warrior refused to give up a precious vase from a church, smashing it with his axe; a year later Clovis split the man's skull at an army review, saying 'Thus you did to the vase at Soissons.' The story shows a young king asserting authority over his war band while courting the Gallo-Roman bishops.",
            el: "Ο Συάγριος κατέφυγε στη βησιγοτθική αυλή της Τουλούζης, η οποία τον παρέδωσε στον Κλόβι για να θανατωθεί. Ο Γρηγόριος της Τουρ αφηγείται πώς, μετά τη μάχη, ένας Φράγκος πολεμιστής αρνήθηκε να παραδώσει ένα πολύτιμο αγγείο μιας εκκλησίας και το έσπασε με το τσεκούρι του· έναν χρόνο αργότερα ο Κλόβις του έσπασε το κρανίο σε μια επιθεώρηση του στρατού, λέγοντας: «Έτσι έκανες και στο αγγείο της Σουασόν». Η ιστορία δείχνει έναν νεαρό βασιλιά που επιβάλλει την εξουσία του στην πολεμική ακολουθία του, ενώ ταυτόχρονα προσεγγίζει τους γαλλορωμαίους επισκόπους."
          },
          category: "military"
        }
      ]
    },
    {
      year: 496,
      era: {
        en: "Conversion of the Franks",
        el: "Εκχριστιανισμός των Φράγκων"
      },
      events: [
        {
          title: {
            en: "The baptism of Clovis at Reims",
            el: "Η βάπτιση του Χλωδοβίκου στη Ρεμς"
          },
          description: {
            en: "After his victory over the Alemanni at Tolbiac, Clovis is baptised by bishop Remigius of Reims with three thousand warriors. He becomes the first Catholic king of a major Germanic people, while his rivals remain Arian heretics.",
            el: "Μετά τη νίκη του κατά των Αλαμανών στο Τόλβιακ, ο Χλώδοβικος βαπτίζεται από τον επίσκοπο Ρεμίγιο της Ρεμς μαζί με τρεις χιλιάδες πολεμιστές. Γίνεται ο πρώτος καθολικός βασιλιάς μεγάλου γερμανικού λαού, ενώ οι αντίπαλοί του παραμένουν αρειανοί αιρετικοί."
          },
          extendedDescription: {
            en: "Gregory of Tours, writing nearly a century later, transforms the conversion into the founding myth of Catholic France. Remigius' phrase to the king — 'bow your head, proud Sicamber; adore what you have burned, burn what you have adored' — and the legendary dove that brought the holy oil for the anointing would consecrate Reims as the coronation church of French kings for thirteen centuries.",
            el: "Ο Γρηγόριος της Τουρ, γράφοντας σχεδόν έναν αιώνα αργότερα, μετατρέπει τη μεταστροφή στον ιδρυτικό μύθο της καθολικής Γαλλίας. Η φράση του Ρεμιγίου προς τον βασιλιά — «σκύψε το κεφάλι σου, υπερήφανε Σίκαμβρε· λάτρευσε ό,τι έκαψες, κάψε ό,τι λάτρευσες» — και η θρυλική περιστερά που έφερε το άγιο μύρο για τη χρίση θα καθαγιάσουν τη Ρεμς ως εκκλησία της στέψης των Γάλλων βασιλέων για δεκατρείς αιώνες."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 507,
      era: {
        en: "Conquest of Aquitaine",
        el: "Κατάκτηση της Ακυτανίας"
      },
      events: [
        {
          title: {
            en: "Vouillé and the fall of the Visigoths",
            el: "Βουιγέ και η πτώση των Βησιγότθων"
          },
          description: {
            en: "At Vouillé near Poitiers, Clovis defeats and kills the Visigothic king Alaric II. The Visigoths are driven beyond the Pyrenees, and Aquitaine, the richest of the Roman provinces of Gaul, passes to the Franks.",
            el: "Στο Βουιγέ κοντά στο Πουατιέ, ο Χλώδοβικος νικά και σκοτώνει τον Βησιγότθο βασιλιά Αλάριχο Β΄. Οι Βησιγότθοι εκδιώκονται πέρα από τα Πυρηναία και η Ακυτανία, η πλουσιότερη από τις ρωμαϊκές επαρχίες της Γαλατίας, περνά στους Φράγκους."
          },
          extendedDescription: {
            en: "Clovis, now a Catholic, presented the war as a campaign against the Arian heretics, winning the support of the Gallo-Roman bishops. Only the intervention of the Ostrogothic king Theodoric saved the Mediterranean coast of Septimania, around Narbonne, for the Visigoths. In 508, at Tours, Clovis received honorary consular rank from the eastern emperor Anastasius, and he made Paris his capital; he died there around 511, having also had the Salic law of the Franks written down.",
            el: "Ο Κλόβις, πλέον καθολικός, παρουσίασε τον πόλεμο ως εκστρατεία κατά των αρειανών αιρετικών, κερδίζοντας την υποστήριξη των γαλλορωμαίων επισκόπων. Μόνο η παρέμβαση του βασιλιά των Οστρογότθων Θευδέριχου έσωσε για τους Βησιγότθους τη μεσογειακή ακτή της Σεπτιμανίας, γύρω από τη Ναρβόννη. Το 508, στην Τουρ, ο Κλόβις έλαβε τιμητικό αξίωμα υπάτου από τον αυτοκράτορα της Ανατολής Αναστάσιο, και έκανε το Παρίσι πρωτεύουσά του· πέθανε εκεί γύρω στο 511, έχοντας επίσης καταγράψει γραπτώς τον Σαλικό νόμο των Φράγκων."
          },
          category: "military"
        }
      ]
    },
    {
      year: 511,
      era: {
        en: "Division of the Frankish Kingdom",
        el: "Διαμοιρασμός του Φραγκικού Βασιλείου"
      },
      events: [
        {
          title: {
            en: "Death of Clovis; the kingdom is partitioned",
            el: "Θάνατος του Χλωδοβίκου· το βασίλειο διαμοιράζεται"
          },
          description: {
            en: "Clovis dies in his new capital, Paris, and is buried in the church of the Holy Apostles. His realm is divided among his four sons — Theuderic, Chlodomer, Childebert, and Chlothar — establishing the pattern of Merovingian partitions for two centuries.",
            el: "Ο Χλώδοβικος πεθαίνει στη νέα του πρωτεύουσα, το Παρίσι, και θάβεται στην εκκλησία των Αγίων Αποστόλων. Το βασίλειό του διαμοιράζεται στους τέσσερις γιους του — Θευδέριχο, Χλωδομέρη, Χιλδέβερτο και Χλώταρ — εγκαθιδρύοντας το πρότυπο των μεροβίγγειων διαμοιρασμών για δύο αιώνες."
          },
          extendedDescription: {
            en: "In the same year, the council of Orléans summoned by Clovis defines the relations of the Catholic Church to the new Frankish kingship: the bishops accept the king as patron of synods and confirmer of bishops, the king accepts canonical law. The Lex Salica, recording the customs of the Salian Franks in Latin, takes its earliest written form in his reign.",
            el: "Την ίδια χρονιά, η Σύνοδος της Ορλεάνης που συγκαλεί ο Χλώδοβικος καθορίζει τις σχέσεις της καθολικής Εκκλησίας με τη νέα φραγκική βασιλεία: οι επίσκοποι αποδέχονται τον βασιλιά ως προστάτη των συνόδων και επικυρωτή των επισκόπων, ο βασιλιάς δέχεται τον κανονικό νόμο. Η Lex Salica, που καταγράφει τα έθιμα των Σαλίων Φράγκων στα λατινικά, αποκτά τη γραπτή της μορφή στη βασιλεία του."
          },
          category: "political"
        }
      ]
    },
    {
      year: 561,
      era: {
        en: "Civil Wars of the Merovingians",
        el: "Εμφύλιοι των Μεροβιγγείων"
      },
      events: [
        {
          title: {
            en: "The feud of Fredegund and Brunhild",
            el: "Η διαμάχη Φρεδεγούνδης και Βρουνεχίλδης"
          },
          description: {
            en: "On the death of Chlothar I, the kingdom is again partitioned. The murder of the Visigothic princess Galswintha at the order of her husband Chilperic ignites a forty-year war between Brunhild of Austrasia and the slave-queen Fredegund of Neustria.",
            el: "Με τον θάνατο του Χλώταρ Α΄, το βασίλειο διαμοιράζεται και πάλι. Η δολοφονία της Βησιγότθης πριγκίπισσας Γκαλσουίνθας με εντολή του συζύγου της Χιλπέριχου ανάβει σαρανταετή πόλεμο μεταξύ της Βρουνεχίλδης της Αυστρασίας και της δούλης-βασίλισσας Φρεδεγούνδης της Νευστρίας."
          },
          extendedDescription: {
            en: "Gregory of Tours' Decem Libri Historiarum, written in this generation, is the great narrative of the bloody politics of the late sixth century. The age also produces the Latin poetry of Venantius Fortunatus and the foundation by Radegund of the Holy Cross at Poitiers, the first royal nunnery of the West.",
            el: "Τα Δέκα Βιβλία Ιστοριών του Γρηγορίου της Τουρ, γραμμένα σε αυτήν τη γενιά, είναι η μεγάλη αφήγηση των αιματηρών πολιτικών του ύστερου έκτου αιώνα. Η εποχή παράγει επίσης τη λατινική ποίηση του Βενάντιου Φορτουνάτου και την ίδρυση από τη Ραδεγούνδη της μονής του Τιμίου Σταυρού στο Πουατιέ, του πρώτου βασιλικού γυναικείου μοναστηριού της Δύσης."
          },
          category: "political"
        }
      ]
    },
    {
      year: 613,
      era: {
        en: "Reunification under Chlothar II",
        el: "Επανένωση επί Χλώταρ Β΄"
      },
      events: [
        {
          title: {
            en: "Chlothar II reunites the Franks",
            el: "Ο Χλώταρ Β΄ επανενώνει τους Φράγκους"
          },
          description: {
            en: "The Austrasian and Burgundian magnates surrender the aged Queen Brunhild to Chlothar II of Neustria, who has her tortured and torn apart by horses. The Frankish kingdoms are reunited, and the aristocracies of each region win the formal right to their own mayors of the palace.",
            el: "Οι Αυστρασιανοί και Βουργουνδοί μεγιστάνες παραδίδουν τη γερασμένη βασίλισσα Βρουνεχίλδη στον Χλώταρ Β΄ της Νευστρίας, ο οποίος τη βασανίζει και τη διαμελίζει με άλογα. Τα φραγκικά βασίλεια επανενώνονται, και οι αριστοκρατίες κάθε περιοχής κερδίζουν το επίσημο δικαίωμα στους δικούς τους μαϊορδόμους του παλατιού."
          },
          extendedDescription: {
            en: "Brunhild, a Visigothic princess, had dominated Frankish politics for half a century, locked in a bitter feud with Chlothar's mother Fredegund that had cost the lives of several kings. She was around seventy when she was put to death. In the Edict of Paris of 614, Chlothar promised that royal officials would be chosen from local landowners — a concession that strengthened the regional aristocracies on whom the Merovingian kings now depended.",
            el: "Η Βρουνεχίλδη, μια βησιγοτθική πριγκίπισσα, κυριαρχούσε στη φραγκική πολιτική επί μισό αιώνα, εμπλεκόμενη σε μια σκληρή βεντέτα με τη μητέρα του Χλωθάριου, Φρεδεγόνδη, που είχε κοστίσει τη ζωή σε αρκετούς βασιλείς. Ήταν γύρω στα εβδομήντα όταν θανατώθηκε. Με το Διάταγμα του Παρισιού του 614, ο Χλωθάριος υποσχέθηκε ότι οι βασιλικοί αξιωματούχοι θα επιλέγονταν από τους τοπικούς γαιοκτήμονες — μια παραχώρηση που ενίσχυσε τις περιφερειακές αριστοκρατίες από τις οποίες εξαρτιόνταν πλέον οι Μεροβίγγειοι βασιλείς."
          },
          category: "political"
        }
      ]
    },
    {
      year: 687,
      era: {
        en: "Rise of the Pippinids",
        el: "Άνοδος των Πιπινιδών"
      },
      events: [
        {
          title: {
            en: "Pippin of Herstal triumphs at Tertry",
            el: "Ο Πιπίνος του Χέρισταλ θριαμβεύει στο Τερτρύ"
          },
          description: {
            en: "Pippin II, mayor of the palace of Austrasia and grandfather of Charles Martel, defeats the Neustrian king and his mayor Berchar at Tertry. The mayors of the palace, not the Merovingian rois fainéants, now rule the Franks in fact.",
            el: "Ο Πιπίνος Β΄, μαϊορδόμος του παλατιού της Αυστρασίας και παππούς του Καρόλου Μαρτέλου, νικά τον Νευστριανό βασιλιά και τον μαϊορδόμό του Μπερχάρ στο Τερτρύ. Πλέον οι μαϊορδόμοι του παλατιού, όχι οι μεροβίγγειοι rois fainéants, κυβερνούν στην πράξη τους Φράγκους."
          },
          extendedDescription: {
            en: "The Merovingian kings continued to reign in name for more than sixty years; the Carolingian courtier Einhard later mocked them as long-haired figureheads driven around in ox-carts. Pippin's son Charles Martel defeated an Arab army near Poitiers in 732, and Charles's son Pippin the Short ended the pretence in 751, deposing the last Merovingian with the pope's blessing and being anointed king — the founding of the Carolingian dynasty.",
            el: "Οι Μεροβίγγειοι βασιλείς συνέχισαν να βασιλεύουν κατ' όνομα για πάνω από εξήντα χρόνια· ο καρολίγγειος αυλικός Αϊνχάρδος τους χλεύαζε αργότερα ως μακρυμάλληδες διακοσμητικούς ηγεμόνες που περιφέρονταν με βοϊδάμαξες. Ο γιος του Πιπίνου, Κάρολος Μαρτέλος, νίκησε έναν αραβικό στρατό κοντά στο Πουατιέ το 732, και ο γιος του Καρόλου, Πιπίνος ο Βραχύς, έθεσε τέλος στο προσχήμα το 751, εκθρονίζοντας τον τελευταίο Μεροβίγγειο με την ευλογία του πάπα και χριόμενος βασιλιάς — η ίδρυση της δυναστείας των Καρολιδών."
          },
          category: "political"
        }
      ]
    },
    {
      year: 732,
      era: {
        en: "The Arab Wars",
        el: "Πόλεμοι με τους Άραβες"
      },
      events: [
        {
          title: {
            en: "Charles Martel at Poitiers",
            el: "Ο Κάρολος Μαρτέλος στο Πουατιέ"
          },
          description: {
            en: "Between Tours and Poitiers, the Frankish mayor Charles Martel halts the Umayyad governor Abd al-Rahman al-Ghafiqi, who is killed in the fighting. The deepest raid of the Arab conquest into Christian Europe is broken.",
            el: "Μεταξύ Τουρ και Πουατιέ, ο Φράγκος μαϊορδόμος Κάρολος Μαρτέλος αναχαιτίζει τον Ομεϋάδη διοικητή Αμπντ αρ-Ραχμάν αλ-Γαφικί, που σκοτώνεται στις μάχες. Η βαθύτερη επιδρομή της αραβικής κατάκτησης στη χριστιανική Ευρώπη συντρίβεται."
          },
          extendedDescription: {
            en: "The contemporary Mozarabic Chronicle, the earliest source, gives Charles his cognomen — the Hammer. Edward Gibbon would later imagine, with characteristic colour, the muezzin calling the prayer from the pulpits of Oxford had Martel lost. The reality was more limited: Arab raids continued for a generation, but the days of conquest beyond the Pyrenees were over.",
            el: "Το σύγχρονο Μοζαραβικό Χρονικό, η παλαιότερη πηγή, δίνει στον Κάρολο την προσωνυμία — του Μαρτέλου, του Σφυριού. Ο Έντουαρντ Γκίμπον θα φανταζόταν αργότερα, με χαρακτηριστική γλαφυρότητα, τον μουεζίνη να καλεί σε προσευχή από τους άμβωνες της Οξφόρδης αν είχε χάσει ο Μαρτέλος. Η πραγματικότητα ήταν πιο περιορισμένη: οι αραβικές επιδρομές συνεχίστηκαν μια γενιά ακόμη, αλλά οι ημέρες κατάκτησης πέρα από τα Πυρηναία είχαν τελειώσει."
          },
          category: "military"
        }
      ]
    },
    {
      year: 751,
      era: {
        en: "Carolingian Coup",
        el: "Καρολίγγειο Πραξικόπημα"
      },
      events: [
        {
          title: {
            en: "Pippin the Short deposes the last Merovingian",
            el: "Ο Πιπίνος ο Βραχύς εκθρονίζει τον τελευταίο Μεροβίγγειο"
          },
          description: {
            en: "With the sanction of Pope Zacharias — 'better that he should be called king who has the power' — Pippin III deposes Childeric III, shaves the long royal hair of the Merovingian, and confines him to a monastery. Pippin is anointed king at Soissons.",
            el: "Με τη συγκατάθεση του πάπα Ζαχαρία — «καλύτερα να αποκαλείται βασιλιάς αυτός που έχει τη δύναμη» — ο Πιπίνος Γ΄ εκθρονίζει τον Χιλδέριχο Γ΄, κουρεύει τα μακριά βασιλικά μαλλιά του Μεροβίγγειου και τον περιορίζει σε μοναστήρι. Ο Πιπίνος χρίεται βασιλιάς στη Σουασόν."
          },
          extendedDescription: {
            en: "Three years later Pope Stephen II himself crosses the Alps and re-anoints Pippin and his sons Charlemagne and Carloman at Saint-Denis. In return, Pippin's army wrests the lands of the Lombard king Aistulf from him and grants them to the papacy — the Donation of Pippin, the territorial nucleus of the future Papal States.",
            el: "Τρία χρόνια αργότερα ο ίδιος ο πάπας Στέφανος Β΄ διασχίζει τις Άλπεις και ξαναχρίει τον Πιπίνο και τους γιους του Καρλομάγνο και Καρλομάννο στον Άγιο Διονύσιο. Σε αντάλλαγμα, ο στρατός του Πιπίνου αποσπά από τον Λομβαρδό βασιλιά Αϊστούλφο τα εδάφη του και τα παραχωρεί στον πάπα — η Δωρεά του Πιπίνου, ο εδαφικός πυρήνας των μελλοντικών Παπικών Κρατών."
          },
          category: "political"
        }
      ]
    },
    {
      year: 778,
      era: {
        en: "Charlemagne in Spain",
        el: "Ο Καρλομάγνος στην Ισπανία"
      },
      events: [
        {
          title: {
            en: "Roncesvalles and the death of Roland",
            el: "Ρονσεβάλ και ο θάνατος του Ρολάνδου"
          },
          description: {
            en: "Returning from an unsuccessful campaign against Saragossa, Charlemagne's rearguard is ambushed in the pass of Roncesvalles by Basques. The count of the Breton March, Hruodland, falls — and his death will become the founding epic of vernacular French literature.",
            el: "Επιστρέφοντας από ανεπιτυχή εκστρατεία εναντίον της Σαραγόσας, η οπισθοφυλακή του Καρλομάγνου ενεδρεύεται στο πέρασμα του Ρονσεβάλ από Βάσκους. Ο κόμης της Μάρκας της Βρετάνης, Χρουόδλαντ, πέφτει — και ο θάνατός του θα γίνει το ιδρυτικό έπος της γαλλικής δημώδους λογοτεχνίας."
          },
          extendedDescription: {
            en: "Three centuries later the Chanson de Roland would transmute the Basque raiders into Saracens and make Roland the paladin par excellence of Christendom. The campaign also produced the Spanish March, the buffer of frontier counties south of the Pyrenees that would slowly evolve into Catalonia.",
            el: "Τρεις αιώνες αργότερα η Chanson de Roland θα μετατρέψει τους Βάσκους επιδρομείς σε Σαρακηνούς και θα κάνει τον Ρολάνδο τον κατεξοχήν παλαδίνο της χριστιανοσύνης. Η εκστρατεία παρήγαγε επίσης την Ισπανική Μάρκα, τον προμαχώνα μεθοριακών κομητειών νότια των Πυρηναίων που θα εξελιχθεί αργά στην Καταλωνία."
          },
          category: "military"
        }
      ]
    },
    {
      year: 800,
      era: {
        en: "Restoration of the Empire",
        el: "Αποκατάσταση της Αυτοκρατορίας"
      },
      events: [
        {
          title: {
            en: "Charlemagne crowned emperor in Rome",
            el: "Ο Καρλομάγνος στέφεται αυτοκράτορας στη Ρώμη"
          },
          description: {
            en: "On Christmas Day in St Peter's, Pope Leo III places a crown on Charlemagne's head and the people of Rome acclaim him as Imperator Romanorum. Three centuries after the deposition of Romulus Augustulus, a Roman emperor sits again in the West.",
            el: "Την ημέρα των Χριστουγέννων στον Άγιο Πέτρο, ο πάπας Λέων Γ΄ θέτει στέμμα στο κεφάλι του Καρλομάγνου και ο λαός της Ρώμης τον επευφημεί ως Imperator Romanorum. Τρεις αιώνες μετά την εκθρόνιση του Ρωμύλου Αυγουστύλου, Ρωμαίος αυτοκράτορας κάθεται και πάλι στη Δύση."
          },
          extendedDescription: {
            en: "Charlemagne's biographer Einhard, in his Vita Karoli, claimed the king was annoyed at the surprise coronation. Whether or not that was true, the Byzantine court at Constantinople — where the empress Irene then sat alone — refused to recognise the new Western Augustus until 812, and only then in return for the recovery of Venice and Dalmatia. The Carolingian renaissance — the schools of Alcuin, the script of the Caroline minuscule, the palatine chapel at Aachen — was the cultural face of the new empire.",
            el: "Ο βιογράφος του Καρλομάγνου Εγινάρδος, στη Vita Karoli, ισχυρίστηκε ότι ο βασιλιάς ενοχλήθηκε από την αιφνιδιαστική στέψη. Είτε αυτό ήταν αλήθεια είτε όχι, η βυζαντινή αυλή στην Κωνσταντινούπολη — όπου η αυτοκράτειρα Ειρήνη καθόταν τότε μόνη — αρνήθηκε να αναγνωρίσει τον νέο Αύγουστο της Δύσης μέχρι το 812, και τότε μόνο σε αντάλλαγμα για την ανάκτηση της Βενετίας και της Δαλματίας. Η καρολίγγεια Αναγέννηση — οι σχολές του Αλκουίνου, η καρολίγγεια μικρογράμματη γραφή, το παλατινό παρεκκλήσι του Άαχεν — ήταν το πολιτιστικό πρόσωπο της νέας αυτοκρατορίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 814,
      era: {
        en: "Death of Charlemagne",
        el: "Θάνατος του Καρλομάγνου"
      },
      events: [
        {
          title: {
            en: "Louis the Pious succeeds his father",
            el: "Ο Λουδοβίκος ο Ευσεβής διαδέχεται τον πατέρα του"
          },
          description: {
            en: "Charlemagne dies at Aachen in his seventy-second year and is buried in the palatine chapel. His one surviving son, Louis the Pious, takes the empire — already crowned co-emperor at Aachen the year before — and inherits a realm that stretches from the Ebro to the Elbe.",
            el: "Ο Καρλομάγνος πεθαίνει στο Άαχεν στο εβδομηκοστό δεύτερο έτος του και θάβεται στο παλατινό παρεκκλήσι. Ο μοναδικός επιζών γιος του, Λουδοβίκος ο Ευσεβής, παίρνει την αυτοκρατορία — ήδη στεμμένος συναυτοκράτορας στο Άαχεν τον προηγούμενο χρόνο — και κληρονομεί έδαφος που εκτείνεται από τον Έβρο ως τον Έλβα."
          },
          extendedDescription: {
            en: "A devout reformer of the Church and the monasteries, Louis tried in 817 to secure the empire's unity by making his eldest son Lothar co-emperor. But the birth of a fourth son, the future Charles the Bald, set his sons against him; in 833 they deposed him at the 'Field of Lies' near Colmar, though he was restored a year later. After his death in 840 the brothers fought one another, and in 843 the Treaty of Verdun divided the empire into three kingdoms — the seeds of France and Germany.",
            el: "Ευσεβής μεταρρυθμιστής της Εκκλησίας και των μοναστηριών, ο Λουδοβίκος προσπάθησε το 817 να εξασφαλίσει την ενότητα της αυτοκρατορίας κάνοντας συναυτοκράτορα τον πρωτότοκο γιο του Λοθάριο. Όμως η γέννηση ενός τέταρτου γιου, του μελλοντικού Καρόλου του Φαλακρού, έστρεψε τους γιους του εναντίον του· το 833 τον εκθρόνισαν στο «Πεδίο των Ψεμάτων» κοντά στο Κολμάρ, αν και αποκαταστάθηκε έναν χρόνο αργότερα. Μετά τον θάνατό του το 840 τα αδέλφια πολέμησαν μεταξύ τους, και το 843 η Συνθήκη του Βερντέν μοίρασε την αυτοκρατορία σε τρία βασίλεια — τον σπόρο της Γαλλίας και της Γερμανίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 843,
      era: {
        en: "Partition of the Empire",
        el: "Διαμοιρασμός της Αυτοκρατορίας"
      },
      events: [
        {
          title: {
            en: "The Treaty of Verdun",
            el: "Η Συνθήκη του Βερντέν"
          },
          description: {
            en: "After three years of war among the sons of Louis the Pious, the Treaty of Verdun divides the Carolingian empire. Charles the Bald receives the western Francia, Louis the German the eastern, and the eldest Lothair the imperial title and the middle kingdom from the North Sea to Italy.",
            el: "Μετά από τριετή πόλεμο μεταξύ των γιων του Λουδοβίκου του Ευσεβούς, η Συνθήκη του Βερντέν διαμοιράζει την καρολίγγεια αυτοκρατορία. Ο Κάρολος ο Φαλακρός λαμβάνει τη δυτική Φραγκία, ο Λουδοβίκος ο Γερμανικός την ανατολική, και ο πρεσβύτερος Λοθάριος τον αυτοκρατορικό τίτλο και το μέσο βασίλειο από τη Βόρεια Θάλασσα ως την Ιταλία."
          },
          extendedDescription: {
            en: "Two years before, on the eve of the partition, Charles and Louis swore the Oaths of Strasbourg — each in the language of the other's followers. Louis's oath in Romance is the earliest extended document of what will become Old French, and the eastern oath in Theotisca lingua the earliest such document of German. The political language of two future nations is born in the same act.",
            el: "Δύο χρόνια νωρίτερα, στις παραμονές του διαμοιρασμού, ο Κάρολος και ο Λουδοβίκος ορκίστηκαν τους Όρκους του Στρασβούργου — καθένας στη γλώσσα των οπαδών του άλλου. Ο όρκος του Λουδοβίκου στη ρωμανική είναι το παλαιότερο εκτενές κείμενο αυτού που θα γίνει Παλαιά Γαλλική, και ο ανατολικός όρκος στη Theotisca lingua το παλαιότερο αντίστοιχο κείμενο της Γερμανικής. Η πολιτική γλώσσα δύο μελλοντικών εθνών γεννιέται στην ίδια πράξη."
          },
          category: "political"
        }
      ]
    },
    {
      year: 845,
      era: {
        en: "Viking Raids",
        el: "Επιδρομές Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "Ragnar's fleet sacks Paris",
            el: "Ο στόλος του Ράγκναρ αλώνει το Παρίσι"
          },
          description: {
            en: "A great Norse fleet under a leader the Frankish annals call Ragnar sails up the Seine and sacks Paris on Easter Sunday. Charles the Bald buys the Vikings off with seven thousand pounds of silver — the first of the great Danegelds of West Francia.",
            el: "Μεγάλος νορσικός στόλος υπό αρχηγό που τα φραγκικά χρονικά αποκαλούν Ράγκναρ ανεβαίνει τον Σηκουάνα και αλώνει το Παρίσι την Κυριακή του Πάσχα. Ο Κάρολος ο Φαλακρός εξαγοράζει τους Βίκινγκς με επτά χιλιάδες λίτρες αργύρου — το πρώτο από τα μεγάλα Danegeld της Δυτικής Φραγκίας."
          },
          extendedDescription: {
            en: "From the 830s the Vikings devastate the coasts and rivers of West Francia: the abbey of Saint-Wandrille burned, the cities of Rouen, Nantes, Bordeaux, and Toulouse plundered. The collapse of central defence drove the great castellans of the countryside to fortify their lands themselves, accelerating the rise of regional power that would define the tenth century.",
            el: "Από τη δεκαετία του 830 οι Βίκινγκς ερημώνουν τις ακτές και τα ποτάμια της Δυτικής Φραγκίας: το αββαείο του Σαιν-Βαντρίλ καμένο, οι πόλεις Ρουέν, Νάντη, Μπορντό και Τουλούζ λεηλατημένες. Η κατάρρευση της κεντρικής άμυνας ώθησε τους μεγάλους castellani της υπαίθρου να οχυρώσουν οι ίδιοι τα εδάφη τους, επιταχύνοντας την άνοδο της περιφερειακής εξουσίας που θα ορίσει τον δέκατο αιώνα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 877,
      era: {
        en: "Death of Charles the Bald",
        el: "Θάνατος του Καρόλου του Φαλακρού"
      },
      events: [
        {
          title: {
            en: "The Capitulary of Quierzy",
            el: "Το Καπιτουλάριο του Κιερζύ"
          },
          description: {
            en: "Departing for an Italian campaign, Charles the Bald issues the Capitulary of Quierzy, recognising in practice that the counties of his magnates pass to their sons in his absence. The capitulary is read in later centuries as the legal birth of hereditary fiefs.",
            el: "Αναχωρώντας για ιταλική εκστρατεία, ο Κάρολος ο Φαλακρός εκδίδει το Καπιτουλάριο του Κιερζύ, αναγνωρίζοντας στην πράξη ότι οι κομητείες των μεγιστάνων του περνούν στους γιους τους κατά την απουσία του. Το καπιτουλάριο διαβάζεται από μεταγενέστερους αιώνες ως η νομική γέννηση των κληρονομικών φέουδων."
          },
          extendedDescription: {
            en: "Charles the Bald died that October on his way back across the Alps. Under the pressure of Viking raids, royal power in West Francia steadily passed to counts and dukes who could raise troops locally, and their offices, lands and castles became family property. When the Carolingian line faltered, the magnates elected one of their own, Hugh Capet, as king in 987 — founding the Capetian dynasty that would rule France for eight centuries.",
            el: "Ο Κάρολος ο Φαλακρός πέθανε εκείνον τον Οκτώβριο στον δρόμο της επιστροφής μέσα από τις Άλπεις. Υπό την πίεση των επιδρομών των Βίκινγκς, η βασιλική εξουσία στη Δυτική Φραγκία πέρασε σταδιακά σε κόμητες και δούκες που μπορούσαν να συγκεντρώνουν στρατεύματα τοπικά, και τα αξιώματα, τα εδάφη και τα κάστρα τους έγιναν οικογενειακή περιουσία. Όταν η καρολίγγεια γραμμή εξασθένησε, οι μεγιστάνες εξέλεξαν έναν δικό τους, τον Ούγο Καπέτο, βασιλιά το 987 — ιδρύοντας τη δυναστεία των Καπετιδών που θα κυβερνούσε τη Γαλλία επί οκτώ αιώνες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 885,
      era: {
        en: "Defence of West Francia",
        el: "Άμυνα της Δυτικής Φραγκίας"
      },
      events: [
        {
          title: {
            en: "The siege of Paris",
            el: "Η πολιορκία του Παρισιού"
          },
          description: {
            en: "A Viking host of perhaps thirty thousand under Sigfred surrounds Paris, defended by Count Odo and bishop Gozlin from the Île de la Cité. The siege lasts almost a year. The poet-monk Abbo of Saint-Germain-des-Prés, an eyewitness, writes his Bella Parisiacae urbis.",
            el: "Σώμα Βίκινγκς ίσως τριάντα χιλιάδων υπό τον Σίγκφρεντ περικυκλώνει το Παρίσι, που αμύνεται από τον κόμη Όντο και τον επίσκοπο Γκοζλίν στην Île de la Cité. Η πολιορκία διαρκεί σχεδόν έναν χρόνο. Ο ποιητής-μοναχός Αββό του Saint-Germain-des-Prés, αυτόπτης μάρτυρας, γράφει τα Bella Parisiacae urbis του."
          },
          extendedDescription: {
            en: "The fat emperor Charles III arrives at last but disgraces himself by paying off the Norsemen and offering them Burgundy to plunder. Within two years he is deposed, and the Frankish magnates elect not a Carolingian but the hero of the siege, Odo of Paris — beginning the alternation of Robertians and Carolingians that will end a century later with Hugh Capet.",
            el: "Ο παχύς αυτοκράτορας Κάρολος Γ΄ φτάνει επιτέλους αλλά εξευτελίζεται πληρώνοντας τους Νορσούς και προσφέροντάς τους τη Βουργουνδία για λεηλασία. Μέσα σε δύο χρόνια εκθρονίζεται, και οι Φράγκοι μεγιστάνες εκλέγουν όχι Καρολίγγειο αλλά τον ήρωα της πολιορκίας, τον Όντο των Παρισίων — αρχίζοντας την εναλλαγή Ρομπερτιανών και Καρολιγγείων που θα τελειώσει έναν αιώνα αργότερα με τον Ούγο Καπετίνγκο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 911,
      era: {
        en: "Foundation of Normandy",
        el: "Ίδρυση της Νορμανδίας"
      },
      events: [
        {
          title: {
            en: "Saint-Clair-sur-Epte: the gift of Normandy",
            el: "Σαιν-Κλερ-σιρ-Επτ: το δώρο της Νορμανδίας"
          },
          description: {
            en: "After the Viking defeat at Chartres, King Charles the Simple grants the lands around the lower Seine to the Norse chieftain Rollo, on condition of baptism and homage. The duchy of Normandy is born.",
            el: "Μετά τη ήττα των Βίκινγκς στη Σαρτρ, ο βασιλιάς Κάρολος ο Απλούς παραχωρεί τα εδάφη γύρω από τον κάτω Σηκουάνα στον Νορσό αρχηγό Ρόλλο, με τον όρο της βάπτισης και του φόρου υποτέλειας. Το δουκάτο της Νορμανδίας γεννιέται."
          },
          extendedDescription: {
            en: "Dudo of Saint-Quentin, the first historian of the Normans, tells how Rollo's followers refused to kiss the king's foot in homage; one of them lifted the royal leg high and threw the king on his back. Within three generations the Norsemen would speak Romance, build stone donjons, and produce dukes — William Longsword, Richard the Fearless, Richard the Good — who would set in motion the conquest of England.",
            el: "Ο Ντούντο του Σαιν-Κεντέν, ο πρώτος ιστορικός των Νορμανδών, αφηγείται πώς οι ακόλουθοι του Ρόλλο αρνήθηκαν να φιλήσουν το πόδι του βασιλιά ως φόρο υποτέλειας· ένας από αυτούς σήκωσε ψηλά το βασιλικό πόδι και έριξε τον βασιλιά ανάσκελα. Σε τρεις γενιές οι Νορσοί θα μιλούν ρωμανικά, θα χτίζουν λίθινους πύργους και θα παράγουν δούκες — Γουλιέλμο Μακρύσπαθο, Ριχάρδο Άφοβο, Ριχάρδο τον Καλό — που θα θέσουν σε κίνηση την κατάκτηση της Αγγλίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 987,
      era: {
        en: "Election of Hugh Capet",
        el: "Εκλογή του Ούγου Καπετίνγκου"
      },
      events: [
        {
          title: {
            en: "The Capetian century begins",
            el: "Ο καπετιανός αιώνας αρχίζει"
          },
          description: {
            en: "On the death of Louis V, the magnates and Archbishop Adalbero of Reims pass over the Carolingian Charles of Lorraine and elect Hugh Capet, Duke of the Franks, king at Senlis. He is crowned at Noyon on 3 July. A dynasty that will rule France for eight hundred years is born.",
            el: "Με τον θάνατο του Λουδοβίκου Ε΄, οι μεγιστάνες και ο αρχιεπίσκοπος Ανταλβέρωνας της Ρεμς παρακάμπτουν τον Καρολίγγειο Κάρολο της Λοτρινγίας και εκλέγουν τον Ούγο Καπετίνγκο, Δούκα των Φράγκων, βασιλιά στο Σανλίς. Στέφεται στο Νουαγιόν στις 3 Ιουλίου. Μια δυναστεία που θα κυβερνήσει τη Γαλλία επί οκτακόσια χρόνια γεννιέται."
          },
          extendedDescription: {
            en: "Hugh's actual demesne was small — barely the Île-de-France between Paris and Orléans — and the great princes of Flanders, Normandy, Aquitaine, and Burgundy were richer and more powerful than he. But by anointing his son Robert the Pious co-king within months of his own coronation, Hugh founded the dynastic principle that would slowly, patiently, build the medieval kingdom of France out of the wreckage of West Francia.",
            el: "Η πραγματική κτήση του Ούγου ήταν μικρή — μόλις η Île-de-France μεταξύ Παρισίου και Ορλεάνης — και οι μεγάλοι ηγεμόνες Φλάνδρας, Νορμανδίας, Ακυτανίας και Βουργουνδίας ήταν πλουσιότεροι και ισχυρότεροι από αυτόν. Όμως χρίοντας τον γιο του Ροβέρτο τον Ευσεβή συμβασιλέα μέσα σε μήνες από τη δική του στέψη, ο Ούγος ίδρυσε τη δυναστική αρχή που θα κατασκεύαζε αργά και υπομονετικά το μεσαιωνικό βασίλειο της Γαλλίας από τα ερείπια της Δυτικής Φραγκίας."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
