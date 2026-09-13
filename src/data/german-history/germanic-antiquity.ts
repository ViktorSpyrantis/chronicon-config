/** Germanic Antiquity — Γερμανική Αρχαιότητα · German History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const GERMANIC_ANTIQUITY = {
  id: "germanic-antiquity" as const,
  label: {
    en: "Germanic Antiquity",
    el: "Γερμανική Αρχαιότητα"
  },
  supertitle: {
    en: "Germania",
    el: "Γερμανία"
  },
  title: {
    en: "Germanic Antiquity & the Migration Era",
    el: "Η Γερμανική Αρχαιότητα και η Εποχή των Μεταναστεύσεων"
  },
  subtitle: {
    en: "From the Iron Age peoples of the Jastorf culture and the terror of the Cimbri through Caesar at the Rhine, the disaster of Varus in the Teutoburg, Tacitus's Germania, the great migrations of Goths, Vandals, and Franks, the conversion of Clovis, and the missions of Boniface, to the imperial coronation of Charlemagne in Rome. Slide across the centuries to read the major events that turned a frontier of free tribes into the Christian empire of the West.",
    el: "Από τους λαούς της Εποχής του Σιδήρου του πολιτισμού του Γιάστορφ και τον τρόμο των Κίμβρων, μέσα από τον Καίσαρα στον Ρήνο, την καταστροφή του Βάρου στο Τευτοβούργο, τη Γερμανία του Τακίτου, τις μεγάλες μεταναστεύσεις Γότθων, Βανδάλων και Φράγκων, τη βάπτιση του Χλώδοβικου και τις ιεραποστολές του Βονιφάτιου, έως την αυτοκρατορική στέψη του Καρλομάγνου στη Ρώμη. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα γεγονότα που μετέτρεψαν μια μεθόριο ελεύθερων φύλων στη χριστιανική αυτοκρατορία της Δύσης."
  },
  menuDescription: {
    en: "From Arminius in the Teutoburg forest to the great migrations and Charlemagne's crown.",
    el: "Από τον Αρμίνιο στο δάσος του Τευτοβουργίου ως τις μεγάλες μεταναστεύσεις και το στέμμα του Καρλομάγνου."
  },
  footerLabel: {
    en: "Germanic Antiquity · 750 BC-800 AD",
    el: "Γερμανική Αρχαιότητα · 750 π.Χ.-800 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Germanic Antiquity & the Migration Era",
    el: "Γερμανική Αρχαιότητα & Εποχή των Μεταναστεύσεων"
  },
  theme: THEMES.bronze,
  timeline: [
    {
      year: -750,
      era: {
        en: "Pre-Roman Iron Age",
        el: "Προρωμαϊκή Εποχή του Σιδήρου"
      },
      events: [
        {
          title: {
            en: "The Jastorf culture takes shape",
            el: "Διαμορφώνεται ο πολιτισμός του Γιάστορφ"
          },
          description: {
            en: "Across the lowlands between the lower Elbe and the Jutland peninsula, a distinctive Iron Age culture emerges that archaeologists call Jastorf — usually identified as the cradle of the Germanic-speaking peoples.",
            el: "Στις πεδιάδες ανάμεσα στον κάτω Έλβα και τη χερσόνησο της Γιουτλάνδης, αναδύεται ένας ξεχωριστός πολιτισμός της Εποχής του Σιδήρου που οι αρχαιολόγοι ονομάζουν Γιάστορφ — και συνήθως ταυτίζεται με το λίκνο των γερμανόφωνων λαών."
          },
          extendedDescription: {
            en: "The Jastorf cemeteries, with their urned cremations, simple iron brooches, and modest weapon graves, contrast sharply with the rich Hallstatt and La Tène princely burials further south. Linguists place the operation of Grimm's Law — the consonant shift that distinguishes Germanic from the other Indo-European branches — somewhere in this milieu in the late first millennium BC. From Jastorf, expanding bands will push south into the Celtic-speaking forests of central Europe and west toward the Rhine.",
            el: "Τα νεκροταφεία του Γιάστορφ, με τις τεφροδόχες καύσεις, τα απλά σιδερένια κοσμήματα και τους μέτριους τάφους πολεμιστών, αντιπαρατίθενται έντονα με τις πλούσιες πριγκιπικές ταφές των Χάλλσταττ και Λα Τεν νοτιότερα. Οι γλωσσολόγοι τοποθετούν τη λειτουργία του Νόμου του Γκριμ — τη συμφωνική μετατόπιση που διακρίνει τη γερμανική από τους άλλους ινδοευρωπαϊκούς κλάδους — κάπου σε αυτό το περιβάλλον στα τέλη της α΄ προχριστιανικής χιλιετίας. Από το Γιάστορφ, εξαπλούμενες ομάδες θα ωθηθούν προς νότο στα κελτόφωνα δάση της κεντρικής Ευρώπης και δυτικά προς τον Ρήνο."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -113,
      era: {
        en: "Cimbrian War",
        el: "Κιμβρικός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "The Cimbri and Teutones erupt south",
            el: "Οι Κίμβροι και οι Τεύτονες ξεσπούν προς τον νότο"
          },
          description: {
            en: "Driven from their Jutland homelands by climate change and rising seas, the Cimbri, Teutones, and Ambrones cross the Alps and crush the Roman consul Cn. Papirius Carbo at Noreia — the first great clash between Rome and the Germanic peoples.",
            el: "Εκδιωγμένοι από τις πατρίδες τους στη Γιουτλάνδη από κλιματική αλλαγή και ανερχόμενα θαλάσσια ύδατα, οι Κίμβροι, οι Τεύτονες και οι Άμβρωνες διασχίζουν τις Άλπεις και συντρίβουν τον Ρωμαίο ύπατο Κν. Παπίριο Κάρβωνα στη Νωρεία — η πρώτη μεγάλη σύγκρουση μεταξύ Ρώμης και γερμανικών λαών."
          },
          extendedDescription: {
            en: "For thirteen years Italy lived in terror of these wandering nations. Successive Roman armies were annihilated — at Burdigala in 107, at Arausio in 105 BC where, by Livy's count, eighty thousand legionaries perished in one of Rome's worst defeats. Only the reforms of Gaius Marius, who professionalised the legions and recruited the proletarii, finally turned the tide: the Teutones were destroyed at Aquae Sextiae in 102 and the Cimbri at Vercellae in 101 BC. The terror cimbricus shaped Roman memory of the north for a century.",
            el: "Για δεκατρία χρόνια η Ιταλία έζησε με τον τρόμο αυτών των περιπλανώμενων εθνών. Διαδοχικοί ρωμαϊκοί στρατοί εκμηδενίστηκαν — στο Βουρδίγαλο το 107, στο Αραυσίωνα το 105 π.Χ. όπου, κατά τον Λίβιο, ογδόντα χιλιάδες λεγεωνάριοι χάθηκαν σε μία από τις χειρότερες ήττες της Ρώμης. Μόνο οι μεταρρυθμίσεις του Γάιου Μάριου, ο οποίος επαγγελματοποίησε τις λεγεώνες και στρατολόγησε τους proletarii, τελικά άλλαξαν την πορεία: οι Τεύτονες καταστράφηκαν στα Aquae Sextiae το 102 και οι Κίμβροι στις Βερκέλλες το 101 π.Χ. Ο terror cimbricus σημάδεψε τη ρωμαϊκή μνήμη για τον βορρά για έναν αιώνα."
          },
          category: "military"
        }
      ]
    },
    {
      year: -58,
      era: {
        en: "Caesar in Gaul",
        el: "Καίσαρ στη Γαλατία"
      },
      events: [
        {
          title: {
            en: "Caesar defeats Ariovistus",
            el: "Ο Καίσαρ νικά τον Αριόβιστο"
          },
          description: {
            en: "In the Vosges, Julius Caesar crushes the Suebian war-king Ariovistus, who had crossed the Rhine and seized lands in Alsace. The Rhine begins its long career as the frontier between Roman Gaul and free Germania.",
            el: "Στα Βόσγια όρη, ο Ιούλιος Καίσαρ συντρίβει τον Σουηβό πολεμικό βασιλιά Αριόβιστο, που είχε διασχίσει τον Ρήνο και καταλάβει εδάφη στην Αλσατία. Ο Ρήνος ξεκινά τη μακρά πορεία του ως σύνορο μεταξύ της ρωμαϊκής Γαλατίας και της ελεύθερης Γερμανίας."
          },
          extendedDescription: {
            en: "In Book I of the Gallic War, Caesar describes Ariovistus as a barbarian king who had imposed himself on the Sequani and demanded the surrender of Roman allies. Caesar's victory was decisive: the Germani fled to the Rhine, many drowning in the river. In 55 BC he would bridge the Rhine itself — a feat of engineering — and again in 53, demonstrating Rome's reach without intending permanent conquest east of the river. The geography Caesar imagined, with the Rhine as a sharp ethnic boundary between Celtic Gauls and Germanic peoples, would shape European cartography for two thousand years.",
            el: "Στο Α΄ βιβλίο του Γαλατικού Πολέμου, ο Καίσαρ περιγράφει τον Αριόβιστο ως βάρβαρο βασιλιά που είχε επιβληθεί στους Σηκουανούς και απαιτούσε την παράδοση Ρωμαίων συμμάχων. Η νίκη του Καίσαρα ήταν καθοριστική: οι Γερμανοί τράπηκαν προς τον Ρήνο, πολλοί πνίγηκαν στον ποταμό. Το 55 π.Χ. θα γεφύρωνε τον ίδιο τον Ρήνο — μηχανικό κατόρθωμα — και πάλι το 53, δείχνοντας την εμβέλεια της Ρώμης χωρίς πρόθεση μόνιμης κατάκτησης ανατολικά του ποταμού. Η γεωγραφία που φαντάστηκε ο Καίσαρ, με τον Ρήνο ως απότομο εθνοτικό όριο μεταξύ Κελτών Γαλατών και Γερμανικών λαών, θα διαμόρφωνε την ευρωπαϊκή χαρτογραφία για δύο χιλιετίες."
          },
          category: "military"
        }
      ]
    },
    {
      year: -12,
      era: {
        en: "Augustan Germany",
        el: "Αυγούστεια Γερμανία"
      },
      events: [
        {
          title: {
            en: "Drusus crosses the Rhine",
            el: "Ο Δρούσος διασχίζει τον Ρήνο"
          },
          description: {
            en: "Drusus the Elder, stepson of Augustus, launches the first systematic Roman conquest east of the Rhine, campaigning to the Weser and the Elbe. For a generation it appears that a province of Germania between Rhine and Elbe will join the empire.",
            el: "Ο Δρούσος ο Πρεσβύτερος, προγονός του Αυγούστου, εξαπολύει την πρώτη συστηματική ρωμαϊκή κατάκτηση ανατολικά του Ρήνου, εκστρατεύοντας ως τον Βέζερ και τον Έλβα. Για μια γενιά φαίνεται ότι μια επαρχία Γερμανίας ανάμεσα στον Ρήνο και τον Έλβα θα ενταχθεί στην αυτοκρατορία."
          },
          extendedDescription: {
            en: "Between 12 and 9 BC Drusus drove the legions deep into the German interior, cut a canal — the fossa Drusiana — to connect the Rhine to the North Sea, and reached the Elbe before turning back. He died in 9 BC after falling from his horse on the return march; the senate granted him and his descendants the cognomen Germanicus. His brother, the future emperor Tiberius, continued the work. Roman forts, supply bases, and a planned colonia at Waldgirmes show that Augustus genuinely intended a Germanic province — until everything collapsed in 9 AD.",
            el: "Μεταξύ 12 και 9 π.Χ. ο Δρούσος οδήγησε τις λεγεώνες βαθιά στο γερμανικό εσωτερικό, διάνοιξε διώρυγα — τη fossa Drusiana — για να συνδέσει τον Ρήνο με τη Βόρεια Θάλασσα, και έφτασε ως τον Έλβα πριν επιστρέψει. Πέθανε το 9 π.Χ. έπειτα από πτώση από το άλογό του στην επιστροφή· η σύγκλητος του απένειμε καθώς και στους απογόνους του το προσωνύμιο Germanicus. Ο αδελφός του, ο μετέπειτα αυτοκράτορας Τιβέριος, συνέχισε το έργο. Ρωμαϊκά οχυρά, βάσεις ανεφοδιασμού και μια σχεδιασμένη colonia στο Βάλντγκιρμες δείχνουν ότι ο Αύγουστος πραγματικά σκόπευε γερμανική επαρχία — μέχρι την κατάρρευση του 9 μ.Χ."
          },
          category: "military"
        }
      ]
    },
    {
      year: 9,
      era: {
        en: "Teutoburg Forest",
        el: "Δάσος του Τευτοβούργου"
      },
      events: [
        {
          title: {
            en: "The Varus disaster",
            el: "Η καταστροφή του Βάρου"
          },
          description: {
            en: "In the forests of the Teutoburg, the Cheruscan prince Arminius — a Roman-trained auxiliary officer — ambushes the army of Publius Quinctilius Varus and annihilates three legions, XVII, XVIII, and XIX, with their eagles. Augustus, hearing the news, beats his head against a door, crying out 'Quinctili Vare, legiones redde!'",
            el: "Στα δάση του Τευτοβούργου, ο Χερουσκός πρίγκιπας Αρμίνιος — ρωμαϊκής εκπαίδευσης αξιωματικός βοηθητικών — ενεδρεύει τον στρατό του Ποπλίου Κουιγκτιλίου Βάρου και εκμηδενίζει τρεις λεγεώνες, την XVII, την XVIII και την XIX, με τους αετούς τους. Ο Αύγουστος, ακούγοντας τα νέα, χτυπά το κεφάλι του σε πόρτα φωνάζοντας «Κουιγκτίλιε Βάρε, δώσε πίσω τις λεγεώνες!»."
          },
          extendedDescription: {
            en: "The battle, fought over three rainy days near the modern village of Kalkriese in Lower Saxony, was the worst defeat of Augustus's reign. Varus, betrayed by his trusted ally Arminius, fell on his sword; the Romans were cut down piecemeal as the column was strung out along forest tracks. The numbers XVII, XVIII, and XIX were never reissued. Although Germanicus would recover two of the lost eagles in punitive campaigns from 14 to 16 AD, Rome's strategic ambition east of the Rhine was finished. The free Germania that survived would, a thousand years later, take Arminius as the founding hero ('Hermann') of a German national mythology.",
            el: "Η μάχη, που έγινε επί τρεις βροχερές ημέρες κοντά στο σημερινό χωριό Κάλκριζε στην Κάτω Σαξονία, ήταν η χειρότερη ήττα της βασιλείας του Αυγούστου. Ο Βάρος, προδομένος από τον έμπιστο σύμμαχό του Αρμίνιο, έπεσε πάνω στο ξίφος του· οι Ρωμαίοι κατασφάζονταν τμηματικά καθώς η φάλαγγα ήταν εκτεταμένη σε δασικά μονοπάτια. Οι αριθμοί XVII, XVIII και XIX δεν ξανααποδόθηκαν ποτέ. Παρότι ο Γερμανικός θα ανακτούσε δύο από τους χαμένους αετούς σε τιμωρητικές εκστρατείες από το 14 ως το 16 μ.Χ., η στρατηγική φιλοδοξία της Ρώμης ανατολικά του Ρήνου είχε τελειώσει. Η ελεύθερη Γερμανία που επέζησε θα έπαιρνε, χίλια χρόνια αργότερα, τον Αρμίνιο ως ιδρυτικό ήρωα («Χέρμαν») μιας γερμανικής εθνικής μυθολογίας."
          },
          category: "military"
        }
      ]
    },
    {
      year: 16,
      era: {
        en: "Germanicus Recalled",
        el: "Ανάκληση του Γερμανικού"
      },
      events: [
        {
          title: {
            en: "Tiberius pulls Germanicus back",
            el: "Ο Τιβέριος ανακαλεί τον Γερμανικό"
          },
          description: {
            en: "After three years of punitive campaigns east of the Rhine — recovering lost eagles, defeating Arminius at Idistaviso, and surviving devastating North Sea storms — Germanicus is recalled by his uncle Tiberius. Rome formally abandons the project of conquering Germania.",
            el: "Έπειτα από τρία χρόνια τιμωρητικών εκστρατειών ανατολικά του Ρήνου — ανακτώντας χαμένους αετούς, νικώντας τον Αρμίνιο στο Ιδιστάβισο και επιβιώνοντας καταστροφικών καταιγίδων της Βόρειας Θάλασσας — ο Γερμανικός ανακαλείται από τον θείο του Τιβέριο. Η Ρώμη εγκαταλείπει επισήμως το σχέδιο κατάκτησης της Γερμανίας."
          },
          extendedDescription: {
            en: "Tiberius judged that further conquest would cost more than it could ever yield. The Rhine, with its fortified line of legionary camps from Vetera to Argentoratum, would now be Rome's permanent northern frontier in the west. East of it the Germani were left to their own quarrels — including the murder of Arminius himself, in 21 AD, by jealous kinsmen. Within a few decades the limes Germanicus, eventually fortified with palisade and watchtowers from the Rhine to the upper Danube, would mark the line for centuries.",
            el: "Ο Τιβέριος έκρινε ότι περαιτέρω κατάκτηση θα κόστιζε περισσότερο από όσο θα μπορούσε ποτέ να αποδώσει. Ο Ρήνος, με την οχυρωμένη γραμμή λεγεωνάριων στρατοπέδων από τα Βέτερα ως το Αργεντοράτο, θα ήταν τώρα το μόνιμο βόρειο σύνορο της Ρώμης στη Δύση. Ανατολικά του οι Γερμανοί έμειναν στις δικές τους έριδες — συμπεριλαμβανομένης της δολοφονίας του ίδιου του Αρμινίου, το 21 μ.Χ., από φθονερούς συγγενείς. Μέσα σε λίγες δεκαετίες το limes Germanicus, τελικά οχυρωμένο με πάσσαλους και σκοπιές από τον Ρήνο ως τον άνω Δούναβη, θα σημάδευε τη γραμμή για αιώνες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 98,
      era: {
        en: "Tacitus's Germania",
        el: "Η Γερμανία του Τακίτου"
      },
      events: [
        {
          title: {
            en: "Tacitus writes the Germania",
            el: "Ο Τάκιτος γράφει τη Γερμανία"
          },
          description: {
            en: "The senator Cornelius Tacitus publishes the De origine et situ Germanorum — a short ethnographic monograph on the tribes beyond the Rhine. It will become the single most influential ancient text on the Germanic peoples and the foundation of every later European theory about them.",
            el: "Ο συγκλητικός Κορνήλιος Τάκιτος δημοσιεύει το De origine et situ Germanorum — μια σύντομη εθνογραφική μονογραφία για τα φύλα πέρα από τον Ρήνο. Θα γίνει το μοναδικότερα επιδραστικό αρχαίο κείμενο για τους γερμανικούς λαούς και η βάση κάθε μεταγενέστερης ευρωπαϊκής θεωρίας περί αυτών."
          },
          extendedDescription: {
            en: "Tacitus depicts a hardy, free, war-like people whose plain virtues he holds up as a moral mirror to a decadent Roman aristocracy. He catalogues their tribes — Chauci, Frisii, Suebi, Cherusci, Marcomanni, Quadi, Goths — describes their assemblies, their gods (Tuisto, Mannus, the goddess Nerthus), their funerary rites, their drinking and dicing. The Germania survived as a single late manuscript that resurfaced in the Renaissance; in nineteenth- and twentieth-century Germany it would be misread as a charter of racial purity, with calamitous consequences.",
            el: "Ο Τάκιτος απεικονίζει έναν σκληραγωγημένο, ελεύθερο, πολεμικό λαό του οποίου τις απλές αρετές χρησιμοποιεί ως ηθικό κάτοπτρο για μια παρακμασμένη ρωμαϊκή αριστοκρατία. Καταγράφει τα φύλα τους — Χαύκους, Φρίσιους, Σουήβους, Χερούσκους, Μαρκομάννους, Κουάδους, Γότθους — περιγράφει τις συνελεύσεις τους, τους θεούς τους (Τουίστο, Μάννο, τη θεά Νέρθο), τις ταφικές τους τελετές, την οινοποσία και τη χαρτοπαιξία τους. Η Γερμανία επέζησε ως ένα μοναδικό μεσαιωνικό χειρόγραφο που ξαναεμφανίστηκε στην Αναγέννηση· στη Γερμανία του 19ου και του 20ού αιώνα θα διαβαζόταν λανθασμένα ως καταστατικός χάρτης φυλετικής καθαρότητας, με ολέθριες συνέπειες."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 166,
      era: {
        en: "Marcomannic Wars",
        el: "Μαρκομαννικοί Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "The Marcomanni break the Danube",
            el: "Οι Μαρκομάννοι σπάνε τη γραμμή του Δούναβη"
          },
          description: {
            en: "A coalition of Marcomanni, Quadi, Iazyges, and other peoples crosses the middle Danube into Pannonia and Noricum, briefly besieging Aquileia. Marcus Aurelius spends most of the rest of his reign on the frontier fighting them, writing his Meditations between campaigns.",
            el: "Συνασπισμός Μαρκομάννων, Κουάδων, Ιαζύγων και άλλων λαών διασχίζει τον μέσο Δούναβη προς την Παννονία και τη Νωρική, πολιορκώντας για λίγο την Ακυληία. Ο Μάρκος Αυρήλιος περνά το μεγαλύτερο μέρος της υπόλοιπης βασιλείας του στη μεθόριο πολεμώντας τους, γράφοντας τα Εις Εαυτόν μεταξύ εκστρατειών."
          },
          extendedDescription: {
            en: "The Marcomannic Wars (166-180) were Rome's most serious northern crisis since Varus. Pestilence — the Antonine Plague brought back by troops from Parthia — combined with simultaneous pressure on Rhine and Danube to strain the empire to its limit. Marcus Aurelius even sold imperial regalia to fund the campaigns. He died at Vindobona (Vienna) in 180. His son Commodus quickly made peace and abandoned the planned new provinces of Marcomannia and Sarmatia. The wars marked the start of a long pattern: Germanic confederations massing on the Danube, repeatedly tested by emperor after emperor.",
            el: "Οι Μαρκομαννικοί Πόλεμοι (166-180) ήταν η σοβαρότερη βόρεια κρίση της Ρώμης από την εποχή του Βάρου. Λοιμός — η Αντωνίνεια Νόσος που έφεραν στρατιώτες από την Παρθία — σε συνδυασμό με ταυτόχρονη πίεση σε Ρήνο και Δούναβη ώθησαν την αυτοκρατορία στα όριά της. Ο Μάρκος Αυρήλιος πούλησε ακόμη και αυτοκρατορικά κειμήλια για να χρηματοδοτήσει τις εκστρατείες. Πέθανε στη Βινδομπόνα (Βιέννη) το 180. Ο γιος του Κόμμοδος έκλεισε γρήγορα ειρήνη και εγκατέλειψε τις σχεδιαζόμενες νέες επαρχίες Μαρκομαννίας και Σαρματίας. Οι πόλεμοι σήμαναν την αρχή ενός μακρού μοτίβου: γερμανικοί συνασπισμοί συγκεντρωμένοι στον Δούναβη, που δοκίμαζαν επανειλημμένα τους αυτοκράτορες έναν προς έναν."
          },
          category: "military"
        }
      ]
    },
    {
      year: 260,
      era: {
        en: "Crisis of the Third Century",
        el: "Κρίση του Τρίτου Αιώνα"
      },
      events: [
        {
          title: {
            en: "The Alemanni and Franks emerge",
            el: "Αναδύονται οι Αλαμαννοί και οι Φράγκοι"
          },
          description: {
            en: "As Roman power totters under simultaneous civil wars, Persian invasion, and plague, new Germanic confederations — the Alemanni in the upper Rhine and the Franks on the lower — break through the limes. The Agri Decumates between the Rhine and Danube are permanently lost.",
            el: "Καθώς η ρωμαϊκή ισχύς κλονίζεται από ταυτόχρονους εμφυλίους, περσική εισβολή και λοιμό, νέοι γερμανικοί συνασπισμοί — οι Αλαμαννοί στον άνω Ρήνο και οι Φράγκοι στον κάτω — σπάνε το limes. Οι Agri Decumates μεταξύ Ρήνου και Δούναβη χάνονται οριστικά."
          },
          extendedDescription: {
            en: "The third-century crisis transformed the Germanic world as much as it transformed Rome. Small tribes consolidated into large confederations: the Alemanni ('all men') in the south-west, the Franks ('free' or 'fierce') in the north-west, the Saxons along the North Sea, and the Goths along the Black Sea coast. Gallienus and his successors held the Rhine itself but never regained the lands behind it. By 275 most of the right-bank forts had been abandoned and the new frontier ran along the river, with a chain of late-Roman fortresses backed by mobile cavalry armies — the comitatenses. The world Tacitus had described was gone.",
            el: "Η κρίση του τρίτου αιώνα μεταμόρφωσε τον γερμανικό κόσμο όσο μεταμόρφωσε τη Ρώμη. Μικρά φύλα ενοποιήθηκαν σε μεγάλους συνασπισμούς: οι Αλαμαννοί («όλοι οι άνδρες») στα νοτιοδυτικά, οι Φράγκοι («ελεύθεροι» ή «άγριοι») στα βορειοδυτικά, οι Σάξονες κατά μήκος της Βόρειας Θάλασσας και οι Γότθοι κατά μήκος της ακτής του Εύξεινου. Ο Γαλλιηνός και οι διάδοχοί του κράτησαν τον ίδιο τον Ρήνο αλλά ποτέ δεν ξανακέρδισαν τα εδάφη πίσω του. Έως το 275 τα περισσότερα οχυρά της δεξιάς όχθης είχαν εγκαταλειφθεί και το νέο σύνορο εκτεινόταν κατά μήκος του ποταμού, με αλυσίδα υστερορωμαϊκών φρουρίων με υποστήριξη κινητών στρατευμάτων ιππικού — των comitatenses. Ο κόσμος που είχε περιγράψει ο Τάκιτος είχε χαθεί."
          },
          category: "military"
        }
      ]
    },
    {
      year: 357,
      era: {
        en: "Battle of Strasbourg",
        el: "Μάχη του Αργεντοράτου"
      },
      events: [
        {
          title: {
            en: "Julian crushes the Alemanni at Strasbourg",
            el: "Ο Ιουλιανός συντρίβει τους Αλαμαννούς στο Αργεντοράτο"
          },
          description: {
            en: "Outside Argentoratum (modern Strasbourg), the Caesar Julian — soon to be the last pagan emperor — destroys an army of seven Alemannic kings under Chnodomar. The Rhine frontier is briefly restored.",
            el: "Έξω από το Αργεντοράτο (το σημερινό Στρασβούργο), ο Καίσαρ Ιουλιανός — σύντομα ο τελευταίος εθνικός αυτοκράτορας — καταστρέφει στρατό επτά Αλαμαννών βασιλέων υπό τον Χνοδομάρο. Η μεθόριος του Ρήνου αποκαθίσταται για λίγο."
          },
          extendedDescription: {
            en: "Ammianus Marcellinus, an eyewitness officer, gives a famous account: 13,000 Roman troops against perhaps 35,000 Germani. Roman discipline and a counter-charge by the catafractarii cavalry turned the day; six thousand Alemanni were killed against fewer than three hundred Romans. Chnodomar was captured and sent to Rome, where he died of disease. Julian then crossed the Rhine, burned villages, and dictated terms — but no new province was attempted. His victory marked the high tide of late-Roman success against the Germani in the west.",
            el: "Ο Αμμιανός Μαρκελλίνος, αυτόπτης αξιωματικός, δίνει περιώνυμη αφήγηση: 13.000 Ρωμαίοι έναντι ίσως 35.000 Γερμανών. Η ρωμαϊκή πειθαρχία και αντεπίθεση από το θωρακοφόρο ιππικό catafractarii έκριναν την ημέρα· έξι χιλιάδες Αλαμαννοί σκοτώθηκαν έναντι λιγότερων από τριακοσίων Ρωμαίων. Ο Χνοδομάρος συνελήφθη και εστάλη στη Ρώμη, όπου πέθανε από ασθένεια. Ο Ιουλιανός διέσχισε τον Ρήνο, έκαψε χωριά και υπαγόρευσε όρους — αλλά καμία νέα επαρχία δεν επιχειρήθηκε. Η νίκη του σήμανε την κορύφωση της υστερορωμαϊκής επιτυχίας έναντι των Γερμανών στη Δύση."
          },
          category: "military"
        }
      ]
    },
    {
      year: 376,
      era: {
        en: "Gothic Crossing",
        el: "Γοτθική Διάβαση"
      },
      events: [
        {
          title: {
            en: "The Goths cross the Danube",
            el: "Οι Γότθοι διασχίζουν τον Δούναβη"
          },
          description: {
            en: "Pushed west by the Huns, perhaps two hundred thousand Tervingi Goths under Fritigern beg the emperor Valens for asylum and are admitted across the Danube into Thrace — the first time an entire foreign nation is settled inside Roman territory under arms.",
            el: "Πιεσμένοι δυτικά από τους Ούννους, ίσως διακόσιες χιλιάδες Τέρβινγοι Γότθοι υπό τον Φριτίγερν εκλιπαρούν τον αυτοκράτορα Ουάλη για άσυλο και γίνονται δεκτοί διά μέσου του Δουνάβεως στη Θράκη — για πρώτη φορά ολόκληρο ξένο έθνος εγκαθίσταται εντός ρωμαϊκής επικράτειας ένοπλο."
          },
          extendedDescription: {
            en: "Roman administrators, demanding exorbitant prices for grain and even selling Gothic children into slavery for dog-meat, soon provoked a revolt. The Goths armed themselves and ravaged the Balkans. The crisis foreshadowed everything that would follow: the empire could no longer absorb migrating peoples cleanly, and what began as a refugee admission would become, within a generation, the seed of independent Germanic kingdoms on imperial soil.",
            el: "Ρωμαίοι διοικητικοί, απαιτώντας υπερβολικές τιμές για το σιτάρι και πουλώντας ακόμη και γοτθόπουλα ως δούλους για κρέας σκύλου, σύντομα προκάλεσαν εξέγερση. Οι Γότθοι οπλίστηκαν και ρήμαξαν τα Βαλκάνια. Η κρίση προμήνυε όσα θα ακολουθούσαν: η αυτοκρατορία δεν μπορούσε πια να αφομοιώσει μεταναστευτικά έθνη ομαλά, και αυτό που ξεκίνησε ως υποδοχή προσφύγων θα γινόταν, μέσα σε μία γενιά, ο σπόρος ανεξάρτητων γερμανικών βασιλείων σε αυτοκρατορικό έδαφος."
          },
          category: "political"
        }
      ]
    },
    {
      year: 378,
      era: {
        en: "Adrianople",
        el: "Αδριανούπολη"
      },
      events: [
        {
          title: {
            en: "Valens falls at Adrianople",
            el: "Ο Ουάλης πέφτει στην Αδριανούπολη"
          },
          description: {
            en: "On 9 August, in the Thracian heat, the emperor Valens attacks Fritigern's Gothic army without waiting for his nephew Gratian's reinforcements. The Gothic cavalry, returning from foraging, surrounds the Roman line. Two-thirds of the eastern field army is destroyed; the emperor himself disappears in the rout.",
            el: "Στις 9 Αυγούστου, στη θρακική ζέστη, ο αυτοκράτορας Ουάλης επιτίθεται στον γοτθικό στρατό του Φριτίγερν χωρίς να περιμένει τις ενισχύσεις του ανιψιού του Γρατιανού. Το γοτθικό ιππικό, επιστρέφοντας από επισιτισμό, περικυκλώνει τη ρωμαϊκή γραμμή. Τα δύο τρίτα του ανατολικού στρατού καταστρέφονται· ο ίδιος ο αυτοκράτορας εξαφανίζεται μέσα στη φυγή."
          },
          extendedDescription: {
            en: "Ammianus called Adrianople a defeat unmatched since Cannae. The eastern empire lost its emperor, its army, and the prestige of Roman invincibility on its own soil. The Goths were never expelled. In 382 Theodosius signed a treaty admitting them as federated allies — a precedent that would in time legalize entire Germanic kingdoms within the empire. After Adrianople, classical historians like Pirenne and Heather would argue, Rome stops fighting to keep the Germani out and starts negotiating about where they will settle.",
            el: "Ο Αμμιανός ονόμασε την Αδριανούπολη ήττα ασύγκριτη από τις Κάννες. Η ανατολική αυτοκρατορία έχασε τον αυτοκράτορά της, τον στρατό της και το κύρος του ανίκητου της Ρώμης στο ίδιο της το έδαφος. Οι Γότθοι ποτέ δεν εκδιώχθηκαν. Το 382 ο Θεοδόσιος υπέγραψε συνθήκη δεχόμενος αυτούς ως ομόσπονδους συμμάχους — προηγούμενο που σε καιρό θα νομιμοποιούσε ολόκληρα γερμανικά βασίλεια εντός της αυτοκρατορίας. Μετά την Αδριανούπολη, κλασικοί ιστορικοί όπως ο Πιρέν και ο Χήδερ θα υποστηρίξουν, η Ρώμη παύει να πολεμά να κρατήσει τους Γερμανούς έξω και αρχίζει να διαπραγματεύεται πού θα εγκατασταθούν."
          },
          category: "military"
        }
      ]
    },
    {
      year: 406,
      era: {
        en: "Crossing of the Rhine",
        el: "Διάβαση του Ρήνου"
      },
      events: [
        {
          title: {
            en: "Vandals, Suebi, and Alans cross the frozen Rhine",
            el: "Βάνδαλοι, Σουήβοι και Αλανοί διασχίζουν τον παγωμένο Ρήνο"
          },
          description: {
            en: "On the night of 31 December, an enormous host of Vandals, Suebi, and Iranian-speaking Alans cross the frozen Rhine near Mainz, sweeping into Gaul. The Roman frontier between Germania and the empire collapses for good.",
            el: "Τη νύχτα της 31ης Δεκεμβρίου, ένας τεράστιος στρατός Βανδάλων, Σουήβων και ιρανόφωνων Αλανών διασχίζει τον παγωμένο Ρήνο κοντά στο Μάιντς, σαρώνοντας τη Γαλατία. Η ρωμαϊκή μεθόριος μεταξύ Γερμανίας και αυτοκρατορίας καταρρέει οριστικά."
          },
          extendedDescription: {
            en: "The crossing was made possible, the chronicler Prosper says, by a freeze so deep that the Rhine became 'a level highway'. The Vandals and their allies plundered Gaul for three years before crossing the Pyrenees into Spain in 409. By 429 a younger generation under Geiseric would cross from Spain into Africa and, in 439, seize Carthage, founding the first Germanic kingdom on a Mediterranean shore. The Rhine, frontier of the Roman west for four centuries, had been broken on a single winter's night.",
            el: "Η διάβαση κατέστη δυνατή, λέει ο χρονογράφος Πρόσπερος, από μια τόσο βαθιά παγωνιά που ο Ρήνος έγινε «λεία λεωφόρος». Οι Βάνδαλοι και οι σύμμαχοί τους λεηλάτησαν τη Γαλατία επί τρία χρόνια προτού διασχίσουν τα Πυρηναία προς την Ισπανία το 409. Έως το 429 νεότερη γενιά υπό τον Γεζέριχο θα περνούσε από την Ισπανία στην Αφρική και, το 439, θα καταλάμβανε την Καρχηδόνα, ιδρύοντας το πρώτο γερμανικό βασίλειο σε μεσογειακή ακτή. Ο Ρήνος, μεθόριος της ρωμαϊκής Δύσης για τέσσερις αιώνες, είχε σπάσει σε μία νύχτα του χειμώνα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 410,
      era: {
        en: "Sack of Rome",
        el: "Άλωση της Ρώμης"
      },
      events: [
        {
          title: {
            en: "Alaric's Visigoths sack Rome",
            el: "Οι Βησιγότθοι του Αλαρίχου λεηλατούν τη Ρώμη"
          },
          description: {
            en: "On 24 August, after years of negotiation and two earlier blockades, Alaric's Visigoths enter Rome. For three days they plunder the eternal city — the first foreign army to do so in eight hundred years. Jerome, in Bethlehem, lays down his pen.",
            el: "Στις 24 Αυγούστου, ύστερα από χρόνια διαπραγματεύσεων και δύο προηγούμενες πολιορκίες, οι Βησιγότθοι του Αλαρίχου εισέρχονται στη Ρώμη. Επί τρεις ημέρες λεηλατούν την αιώνια πόλη — ο πρώτος ξένος στρατός που το πράττει εδώ και οχτακόσια χρόνια. Ο Ιερώνυμος, στη Βηθλεέμ, αφήνει το γραφείο του."
          },
          extendedDescription: {
            en: "Although Rome had ceased to be an imperial capital long before, its symbolic weight made the sack a thunderclap across the Mediterranean. Augustine of Hippo began writing the City of God in answer to pagans who blamed the new Christian religion for the disaster. Alaric himself died of fever within months; his successors led the Visigoths into Gaul and then Spain, where they founded the Visigothic kingdom that would last until the Muslim conquest of 711. The sack of 410 closed the long argument over whether the Germani would settle inside the empire — they already had.",
            el: "Αν και η Ρώμη είχε πάψει να είναι αυτοκρατορική πρωτεύουσα πολύ νωρίτερα, το συμβολικό της βάρος έκανε τη λεηλασία βροντή σε όλη τη Μεσόγειο. Ο Αυγουστίνος Ιππώνος άρχισε να γράφει την Πολιτεία του Θεού απαντώντας σε εθνικούς που κατηγορούσαν τη νέα χριστιανική θρησκεία για την καταστροφή. Ο ίδιος ο Αλάριχος πέθανε από πυρετό μέσα σε μήνες· οι διάδοχοί του οδήγησαν τους Βησιγότθους στη Γαλατία και κατόπιν στην Ισπανία, όπου ίδρυσαν το Βησιγοτθικό βασίλειο που θα διαρκούσε μέχρι την αραβική κατάκτηση του 711. Η Άλωση του 410 έκλεισε τη μακρά συζήτηση για το αν οι Γερμανοί θα εγκαθίσταντο εντός της αυτοκρατορίας — ήταν ήδη εκεί."
          },
          category: "military"
        }
      ]
    },
    {
      year: 451,
      era: {
        en: "Catalaunian Plains",
        el: "Πεδιάδες των Καταλαυνών"
      },
      events: [
        {
          title: {
            en: "Aetius and the Visigoths stop Attila",
            el: "Ο Αέτιος και οι Βησιγότθοι σταματούν τον Αττίλα"
          },
          description: {
            en: "On the Catalaunian Plains in Champagne, the Roman general Aetius — at the head of a coalition of Visigoths, Franks, Burgundians, Alans, and the last Roman regulars — fights Attila the Hun to a bloody stalemate that ends the Hunnic invasion of Gaul.",
            el: "Στις Πεδιάδες των Καταλαυνών στη Σαμπανία, ο Ρωμαίος στρατηγός Αέτιος — επικεφαλής συνασπισμού Βησιγότθων, Φράγκων, Βουργουνδών, Αλανών και των τελευταίων ρωμαϊκών τακτικών — πολεμά τον Αττίλα τον Ούννο σε αιματηρή ισοπαλία που τερματίζει την ουννική εισβολή στη Γαλατία."
          },
          extendedDescription: {
            en: "Jordanes, writing a century later, described the battle as a deluge of blood in which the Visigothic king Theodoric I was killed in the fighting. Attila withdrew across the Rhine and turned south into Italy the next year, where the legend of Pope Leo I turning him back at the Mincio took shape. Attila died in 453, and his empire dissolved in a single generation. The Catalaunian Plains is best read as the moment when the new Germanic kingdoms — Visigoths, Franks, Burgundians — fought as the successors of Rome's western army to defend the same lands the legions once held.",
            el: "Ο Ιορδάνης, γράφοντας έναν αιώνα αργότερα, περιέγραψε τη μάχη ως κατακλυσμό αίματος στον οποίο ο Βησιγότθος βασιλιάς Θεοδώριχος Α΄ σκοτώθηκε στη μάχη. Ο Αττίλας απεσύρθη πέρα από τον Ρήνο και στράφηκε νότια στην Ιταλία τον επόμενο χρόνο, όπου διαμορφώθηκε ο θρύλος του Πάπα Λέοντος Α΄ που τον γύρισε πίσω στον Μίντσιο. Ο Αττίλας πέθανε το 453, και η αυτοκρατορία του διαλύθηκε σε μία γενιά. Οι Πεδιάδες των Καταλαυνών διαβάζονται καλύτερα ως η στιγμή που τα νέα γερμανικά βασίλεια — Βησιγότθοι, Φράγκοι, Βουργουνδοί — πολέμησαν ως διάδοχοι του δυτικού στρατού της Ρώμης για να υπερασπιστούν τα ίδια εδάφη που κάποτε κρατούσαν οι λεγεώνες."
          },
          category: "military"
        }
      ]
    },
    {
      year: 476,
      era: {
        en: "End of Western Empire",
        el: "Τέλος της Δυτικής Αυτοκρατορίας"
      },
      events: [
        {
          title: {
            en: "Odoacer deposes Romulus Augustulus",
            el: "Ο Οδόακρος καθαιρεί τον Ρωμύλο Αυγουστύλο"
          },
          description: {
            en: "A federate officer of mixed Scirian–Germanic descent named Odoacer overthrows the boy-emperor Romulus Augustulus, sends the western imperial regalia to Constantinople, and rules Italy as king under nominal eastern suzerainty.",
            el: "Ένας ομόσπονδος αξιωματικός μικτής Σκιρικής-Γερμανικής καταγωγής, ονόματι Οδόακρος, ανατρέπει τον παιδί-αυτοκράτορα Ρωμύλο Αυγουστύλο, στέλνει τα δυτικά αυτοκρατορικά σύμβολα στην Κωνσταντινούπολη και κυβερνά την Ιταλία ως βασιλιάς υπό ονομαστική ανατολική επικυριαρχία."
          },
          extendedDescription: {
            en: "Contemporaries scarcely registered the moment as a turning point. The west had been ruled by Germanic strongmen — Stilicho, Ricimer, Gundobad — for two generations; the imperial title had simply become superfluous. The eastern emperor Zeno acknowledged Odoacer's title of patricius. In 488 Zeno would dispatch Theodoric the Ostrogoth to displace him, and from 493 to 526 Italy would be ruled from Ravenna by an Ostrogothic king who kept Roman law, the senate, and the consulship. The Germanic kingdoms now were the empire, in everything but name.",
            el: "Οι σύγχρονοι δύσκολα κατέγραψαν τη στιγμή ως καμπή. Η Δύση κυβερνιόταν από γερμανούς ισχυρούς άνδρες — τον Στιλίχωνα, τον Ρικίμερο, τον Γκουντομπάδο — εδώ και δύο γενιές· ο αυτοκρατορικός τίτλος είχε απλά γίνει περιττός. Ο ανατολικός αυτοκράτορας Ζήνων αναγνώρισε τον τίτλο του πατρικίου του Οδόακρου. Το 488 ο Ζήνων θα έστελνε τον Θευδέριχο τον Οστρογότθο να τον εκτοπίσει, και από το 493 ως το 526 η Ιταλία θα κυβερνιόταν από τη Ραβέννα από έναν οστρογοτθικό βασιλιά που διατηρούσε το ρωμαϊκό δίκαιο, τη σύγκλητο και την υπατεία. Τα γερμανικά βασίλεια τώρα ήταν η αυτοκρατορία, σε όλα εκτός από το όνομα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 481,
      era: {
        en: "Rise of the Franks",
        el: "Άνοδος των Φράγκων"
      },
      events: [
        {
          title: {
            en: "Clovis becomes king of the Salian Franks",
            el: "Ο Χλωδοβίκος γίνεται βασιλιάς των Σαλίων Φράγκων"
          },
          description: {
            en: "At fifteen, Clovis succeeds his father Childeric as king of the Salian Franks around Tournai. Within thirty years he will conquer most of Gaul, eliminate his rival Frankish kings, and found the Merovingian dynasty that will rule the western Germanic heartland for two and a half centuries.",
            el: "Στα δεκαπέντε του, ο Χλωδοβίκος διαδέχεται τον πατέρα του Χιλδέριχο ως βασιλιάς των Σαλίων Φράγκων γύρω από την Τουρναί. Μέσα σε τριάντα χρόνια θα κατακτήσει το μεγαλύτερο μέρος της Γαλατίας, θα εξοντώσει τους ανταγωνιστές Φράγκους βασιλείς και θα ιδρύσει τη δυναστεία των Μεροβιγγείων που θα κυβερνήσει τον δυτικό γερμανικό πυρήνα για δυόμισι αιώνες."
          },
          extendedDescription: {
            en: "Gregory of Tours, our chief source, depicts Clovis as cunning, treacherous, and providential — Constantine the Great and David rolled into one. He defeated the last Roman commander in northern Gaul, Syagrius, at Soissons in 486; subdued the Alemanni at Tolbiac around 496; and ended Visigothic rule north of the Pyrenees at Vouillé in 507. The genius of the Merovingian settlement was that Clovis and his successors ruled both their Germanic warriors under their tribal Salic Law and the Gallo-Roman population under Roman provincial law, a dual system that became the seedbed of medieval European kingship.",
            el: "Ο Γρηγόριος Τύρων, η κύρια πηγή μας, απεικονίζει τον Χλωδοβίκο πανούργο, δόλιο και προνοιακό — Μέγα Κωνσταντίνο και Δαβίδ σε ένα. Νίκησε τον τελευταίο Ρωμαίο διοικητή στη βόρεια Γαλατία, τον Συάγριο, στη Σουασόν το 486· υπέταξε τους Αλαμαννούς στο Τολβιακό περίπου το 496· και τερμάτισε τη βησιγοτθική κυριαρχία βορείως των Πυρηναίων στο Βουιγιέ το 507. Η ιδιοφυΐα του μεροβιγγειακού συστήματος ήταν ότι ο Χλωδοβίκος και οι διάδοχοί του κυβέρνησαν και τους Γερμανούς πολεμιστές τους υπό τον φυλετικό Σαλικό Νόμο και τον γαλατορωμαϊκό πληθυσμό υπό το ρωμαϊκό επαρχιακό δίκαιο, ένα διπλό σύστημα που έγινε ο σπόρος της μεσαιωνικής ευρωπαϊκής βασιλείας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 496,
      era: {
        en: "Conversion of Clovis",
        el: "Βάπτιση του Χλωδοβίκου"
      },
      events: [
        {
          title: {
            en: "Clovis is baptised at Reims",
            el: "Ο Χλωδοβίκος βαπτίζεται στη Ρεμς"
          },
          description: {
            en: "At Reims, after a desperate vow on the battlefield against the Alemanni, Clovis accepts baptism from bishop Remigius along with three thousand of his warriors. Alone among the Germanic kings, the Franks embrace Catholic rather than Arian Christianity.",
            el: "Στη Ρεμς, μετά από απελπισμένη υπόσχεση στο πεδίο της μάχης ενάντια στους Αλαμαννούς, ο Χλωδοβίκος δέχεται τη βάπτιση από τον επίσκοπο Ρεμίγιο μαζί με τρεις χιλιάδες πολεμιστές του. Μόνοι μεταξύ των γερμανικών βασιλέων, οι Φράγκοι ασπάζονται τον καθολικό χριστιανισμό αντί του αρειανισμού."
          },
          extendedDescription: {
            en: "The date is uncertain — some scholars prefer 508 — but the consequence is enormous. The Visigoths, Vandals, Ostrogoths, Burgundians, and Lombards were all Arian, separated from their Catholic Roman subjects by an unbridgeable doctrinal gulf. The Franks were not. The Gallo-Roman bishops, masters of land and patronage, became allies rather than enemies of the Merovingian dynasty. This single choice would, over centuries, make the Frankish realm the natural partner of the papacy and the indispensable seed of medieval Christendom.",
            el: "Η χρονολογία είναι αβέβαιη — ορισμένοι μελετητές προτιμούν το 508 — αλλά η συνέπεια είναι τεράστια. Οι Βησιγότθοι, οι Βάνδαλοι, οι Οστρογότθοι, οι Βουργουνδοί και οι Λομβαρδοί ήταν όλοι αρειανοί, χωρισμένοι από τους καθολικούς ρωμαίους υπηκόους τους από ένα αγεφύρωτο δογματικό χάσμα. Οι Φράγκοι όχι. Οι γαλατορωμαίοι επίσκοποι, αφέντες γης και προστασίας, έγιναν σύμμαχοι αντί εχθροί της δυναστείας των Μεροβιγγείων. Αυτή η μοναδική επιλογή θα έκανε, μέσα σε αιώνες, το φραγκικό βασίλειο τον φυσικό σύμμαχο του παπισμού και τον αναντικατάστατο σπόρο της μεσαιωνικής χριστιανοσύνης."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 568,
      era: {
        en: "Lombards in Italy",
        el: "Λομβαρδοί στην Ιταλία"
      },
      events: [
        {
          title: {
            en: "The Lombards invade Italy",
            el: "Οι Λομβαρδοί εισβάλλουν στην Ιταλία"
          },
          description: {
            en: "Under their king Alboin, the Lombards — a Germanic people lately settled in Pannonia — pour across the Julian Alps into Italy, exhausted by Justinian's Gothic war. Within five years they take Pavia and reduce Byzantine rule to a coastal patchwork.",
            el: "Υπό τον βασιλιά τους Αλβοΐνο, οι Λομβαρδοί — γερμανικός λαός που πρόσφατα εγκαταστάθηκε στην Παννονία — εισέρχονται μέσω των Ιουλίων Άλπεων στην Ιταλία, εξαντλημένη από τον γοτθικό πόλεμο του Ιουστινιανού. Μέσα σε πέντε χρόνια κυριεύουν την Παβία και περιορίζουν τη βυζαντινή κυριαρχία σε ένα παράκτιο μωσαϊκό."
          },
          extendedDescription: {
            en: "The Lombard kingdom and its peripheral duchies — Spoleto, Benevento — would dominate the Italian peninsula until Charlemagne overthrew the last king Desiderius in 774. Lombard law-codes, beginning with the Edict of Rothari in 643, preserve some of the richest evidence of early Germanic legal tradition. The Lombards are also the last people to be plausibly called barbarians in a contemporary Roman sense; after them, the Germanic kingdoms of Europe begin to look like medieval polities rather than late-antique migrations.",
            el: "Το λομβαρδικό βασίλειο και τα περιφερειακά του δουκάτα — Σπολέτο, Μπενεβέντο — θα κυριαρχούσαν στην ιταλική χερσόνησο έως ότου ο Καρλομάγνος ανέτρεψε τον τελευταίο βασιλιά Δεσιδέριο το 774. Λομβαρδικοί νομικοί κώδικες, αρχίζοντας από το Διάταγμα του Ρόθαρι το 643, διατηρούν μερικές από τις πλουσιότερες μαρτυρίες πρώιμης γερμανικής νομικής παράδοσης. Οι Λομβαρδοί είναι επίσης ο τελευταίος λαός που μπορεί εύλογα να ονομαστεί βάρβαρος με τη ρωμαϊκή σύγχρονη έννοια· μετά από αυτούς, τα γερμανικά βασίλεια της Ευρώπης αρχίζουν να μοιάζουν με μεσαιωνικά κράτη αντί για υστερορωμαϊκές μεταναστεύσεις."
          },
          category: "military"
        }
      ]
    },
    {
      year: 687,
      era: {
        en: "Battle of Tertry",
        el: "Μάχη της Τερτρύ"
      },
      events: [
        {
          title: {
            en: "Pippin of Herstal unites the Frankish realm",
            el: "Ο Πιπίνος του Χέρσταλ ενώνει το φραγκικό βασίλειο"
          },
          description: {
            en: "Pippin of Herstal, Mayor of the Palace of Austrasia, defeats the Neustrian forces at Tertry and brings all the Frankish lands under his effective control. The Merovingian kings dwindle into 'do-nothing kings' (rois fainéants); the future belongs to Pippin's family — the Carolingians.",
            el: "Ο Πιπίνος του Χέρσταλ, Αυλάρχης της Αυστρασίας, νικά τις δυνάμεις της Νευστρίας στην Τερτρύ και θέτει όλα τα φραγκικά εδάφη υπό τον πραγματικό του έλεγχο. Οι μεροβίγγειοι βασιλείς ξεπέφτουν σε «τεμπέληδες βασιλιάδες» (rois fainéants)· το μέλλον ανήκει στην οικογένεια του Πιπίνου — τους Καρολίγγειους."
          },
          extendedDescription: {
            en: "From Tertry onward, real power in the Frankish realm passed from the throne to the mayoralty. Pippin's son Charles Martel ('the Hammer') would consolidate the position; his grandson Pippin the Short would in 751 simply replace the last Merovingian. In the same generation, the eastern Germanic frontier became a missionary field: Pippin and his successors patronised the Anglo-Saxon evangelists who would baptise Frisia, Hesse, Thuringia, and finally Saxony itself.",
            el: "Από την Τερτρύ και ύστερα, η πραγματική εξουσία στο φραγκικό βασίλειο πέρασε από τον θρόνο στην αυλαρχία. Ο γιος του Πιπίνου Κάρολος Μαρτέλος («ο Σφυροκόπος») θα εδραίωνε τη θέση· ο εγγονός του Πιπίνος ο Βραχύς θα αντικαθιστούσε απλώς το 751 τον τελευταίο Μεροβίγγειο. Στην ίδια γενιά, το ανατολικό γερμανικό σύνορο έγινε ιεραποστολικός χώρος: ο Πιπίνος και οι διάδοχοί του προστάτευσαν τους αγγλοσάξονες ευαγγελιστές που θα βάπτιζαν τη Φρισία, την Έσση, τη Θουριγγία και τελικά την ίδια τη Σαξονία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 732,
      era: {
        en: "Battle of Tours",
        el: "Μάχη του Πουατιέ"
      },
      events: [
        {
          title: {
            en: "Charles Martel halts the Arabs at Tours",
            el: "Ο Κάρολος Μαρτέλος αναχαιτίζει τους Άραβες στο Πουατιέ"
          },
          description: {
            en: "Between Tours and Poitiers, Charles Martel — Pippin's son and Mayor of the Palace — defeats the Umayyad raiding army of Abd al-Rahman and kills its commander. The northward expansion of Islam in western Europe is checked.",
            el: "Μεταξύ Τουρ και Πουατιέ, ο Κάρολος Μαρτέλος — γιος του Πιπίνου και Αυλάρχης — νικά τον επιδρομικό στρατό των Ομεϋαδών του Αμπντ αλ-Ραχμάν και σκοτώνει τον διοικητή του. Η βόρεια εξάπλωση του Ισλάμ στη δυτική Ευρώπη αναχαιτίζεται."
          },
          extendedDescription: {
            en: "Modern historians dispute whether Tours was as decisive as Edward Gibbon famously claimed — the Arab raid was probably a foraging expedition more than a war of conquest — but for medieval Europeans the victory cemented Frankish prestige and the Carolingians' claim to defend Christendom. Charles's nickname Martellus, 'the Hammer', dates from the next generation. The booty distributed after the battle helped Charles fund the heavy cavalry — armoured horsemen on stirruped saddles — that would become the model for the medieval knight.",
            el: "Σύγχρονοι ιστορικοί αμφισβητούν αν η μάχη του Πουατιέ ήταν τόσο αποφασιστική όσο διακήρυξε ο Έντουαρντ Γκίμπον — η αραβική επιδρομή ήταν μάλλον επιχείρηση επισιτισμού παρά κατακτητικός πόλεμος — αλλά για τους μεσαιωνικούς Ευρωπαίους η νίκη εδραίωσε το φραγκικό κύρος και την αξίωση των Καρολίγγειων να υπερασπίζονται τη χριστιανοσύνη. Το προσωνύμιο του Καρόλου Martellus, «ο Σφυροκόπος», χρονολογείται από την επόμενη γενιά. Τα λάφυρα που μοιράστηκαν μετά τη μάχη βοήθησαν τον Κάρολο να χρηματοδοτήσει το βαρύ ιππικό — θωρακισμένους ιππείς σε αναβατήρες — που θα γινόταν το πρότυπο του μεσαιωνικού ιππότη."
          },
          category: "military"
        }
      ]
    },
    {
      year: 754,
      era: {
        en: "Boniface and the Carolingians",
        el: "Βονιφάτιος και Καρολίγγειοι"
      },
      events: [
        {
          title: {
            en: "Martyrdom of Boniface; anointing of Pippin",
            el: "Μαρτύριο του Βονιφάτιου· χρίση του Πιπίνου"
          },
          description: {
            en: "In Frisia, the Anglo-Saxon missionary Boniface, who had felled Donar's Oak and re-organised the Church across Germania, is murdered by pagans at Dokkum. In the same year Pope Stephen II travels to St-Denis and anoints Pippin the Short as king, recognising the new Carolingian dynasty.",
            el: "Στη Φρισία, ο αγγλοσάξονας ιεραπόστολος Βονιφάτιος, που είχε κόψει τη Βελανιδιά του Δονάρ και αναδιοργανώσει την Εκκλησία σε όλη τη Γερμανία, δολοφονείται από εθνικούς στο Ντόκκουμ. Την ίδια χρονιά ο Πάπας Στέφανος Β΄ ταξιδεύει στο Σαιν-Ντενί και χρίει τον Πιπίνο τον Βραχύ βασιλιά, αναγνωρίζοντας τη νέα δυναστεία των Καρολίγγειων."
          },
          extendedDescription: {
            en: "Boniface's life — from his English origins as Winfrith of Crediton through forty years of mission across Frisia, Hesse, Thuringia, and Bavaria — is the most important religious story of eighth-century Germany. The papal anointing of Pippin, paid for by the Donation of Pippin that gave Rome and Ravenna to the papacy, fused Frankish kingship with biblical and Roman models. Together these two events of 754 marked the moment when Germania became Christendom: the old Germanic religion was driven into the forests of Saxony and Scandinavia, while a new alliance of Frankish king and Roman pope took shape that would, half a century later, restore an emperor in the West.",
            el: "Η ζωή του Βονιφάτιου — από τις αγγλικές καταβολές του ως Γουίνφριθ του Κρέντιτον μέχρι σαράντα χρόνια ιεραποστολής στη Φρισία, την Έσση, τη Θουριγγία και τη Βαυαρία — είναι η σημαντικότερη θρησκευτική ιστορία της Γερμανίας του ογδόου αιώνα. Η παπική χρίση του Πιπίνου, που πληρώθηκε από τη Δωρεά του Πιπίνου που έδωσε τη Ρώμη και τη Ραβέννα στον παπισμό, συνένωσε τη φραγκική βασιλεία με βιβλικά και ρωμαϊκά πρότυπα. Μαζί αυτά τα δύο γεγονότα του 754 σήμαναν τη στιγμή που η Γερμανία έγινε χριστιανοσύνη: η παλιά γερμανική θρησκεία ωθήθηκε στα δάση της Σαξονίας και της Σκανδιναβίας, ενώ μια νέα συμμαχία φραγκικού βασιλιά και ρωμαίου πάπα διαμορφώθηκε που θα αποκαθιστούσε, μισόν αιώνα αργότερα, αυτοκράτορα στη Δύση."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 772,
      era: {
        en: "Saxon Wars",
        el: "Σαξονικοί Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "Charlemagne begins the Saxon Wars",
            el: "Ο Καρλομάγνος ξεκινά τους Σαξονικούς Πολέμους"
          },
          description: {
            en: "Charlemagne crosses the Eresburg and fells the Irminsul — the great wooden idol of the pagan Saxons — beginning thirty-three years of intermittent war to conquer and forcibly convert the last independent Germanic people east of the Rhine.",
            el: "Ο Καρλομάγνος διασχίζει το Έρεσμπουργκ και ρίχνει την Ιρμινσούλ — το μεγάλο ξύλινο είδωλο των ειδωλολατρών Σαξόνων — ξεκινώντας τριάντα τρία χρόνια διακεκομμένου πολέμου για να κατακτήσει και να εκχριστιανίσει με τη βία τον τελευταίο ανεξάρτητο γερμανικό λαό ανατολικά του Ρήνου."
          },
          extendedDescription: {
            en: "The Saxon Wars were the longest, ugliest, and most consequential of Charlemagne's campaigns. The Saxons under Widukind rose repeatedly; the Capitulary of Paderborn made baptism a capital matter and outlawed cremation and the eating of horseflesh. The grimmest moment came in 782, when Charlemagne executed forty-five hundred Saxon prisoners at Verden in a single day. Only by 804 was Saxony fully subdued; mass deportations and Frankish colonists completed what the sword had begun. The eventual reward, however, was decisive: a Christian Saxony would within two centuries provide the imperial dynasty of Ottonian Germany.",
            el: "Οι Σαξονικοί Πόλεμοι ήταν οι μακρύτεροι, σκληρότεροι και πιο μοιραίοι από τις εκστρατείες του Καρλομάγνου. Οι Σάξονες υπό τον Βιδουκίνδο εξεγέρθηκαν επανειλημμένα· το Καπιτουλάριο του Πάντερμπορν έκανε το βάπτισμα κεφαλικό ζήτημα και απαγόρευσε την καύση και την κατανάλωση κρέατος αλόγου. Η ζοφερότερη στιγμή ήρθε το 782, όταν ο Καρλομάγνος εκτέλεσε τέσσερις χιλιάδες πεντακόσιους Σάξονες αιχμαλώτους στο Βέρντεν σε μία μέρα. Μόνο μέχρι το 804 υποτάχθηκε πλήρως η Σαξονία· μαζικές μετακινήσεις πληθυσμών και φράγκοι έποικοι ολοκλήρωσαν αυτό που είχε αρχίσει το σπαθί. Η τελική ανταμοιβή, ωστόσο, ήταν αποφασιστική: μια χριστιανική Σαξονία θα παρείχε μέσα σε δύο αιώνες τη δυναστεία των Όθωνων της Γερμανίας."
          },
          category: "military"
        }
      ]
    },
    {
      year: 800,
      era: {
        en: "Imperial Coronation",
        el: "Αυτοκρατορική Στέψη"
      },
      events: [
        {
          title: {
            en: "Charlemagne crowned emperor in Rome",
            el: "Ο Καρλομάγνος στέφεται αυτοκράτορας στη Ρώμη"
          },
          description: {
            en: "On Christmas Day, in St Peter's Basilica, Pope Leo III sets a crown upon the head of the kneeling Charles and the Roman people acclaim him Augustus. For the first time since 476 there is an emperor in the West — a Germanic king crowned by the bishop of Rome.",
            el: "Την ημέρα των Χριστουγέννων, στη Βασιλική του Αγίου Πέτρου, ο Πάπας Λέων Γ΄ θέτει στέμμα στο κεφάλι του γονυκλινούς Καρόλου και ο ρωμαϊκός λαός τον ανευφημεί Αύγουστο. Για πρώτη φορά από το 476 υπάρχει αυτοκράτορας στη Δύση — γερμανός βασιλιάς στεμμένος από τον επίσκοπο της Ρώμης."
          },
          extendedDescription: {
            en: "Einhard claimed that Charlemagne had been unaware of the pope's plan, but few historians believe him. The Byzantines, who had their own emperor in Constantinople — at that moment the empress Irene — were outraged at what they saw as a usurpation. From this Christmas would flow the medieval Empire that, transformed across the centuries, would survive in name as the Holy Roman Empire until Napoleon dissolved it in 1806. The coronation of 800 is the natural close of Germanic antiquity: the heirs of Arminius and Alaric were no longer barbarians at the gates but the legitimate rulers of the western Christian world.",
            el: "Ο Εϊνχάρδος ισχυρίστηκε ότι ο Καρλομάγνος αγνοούσε το σχέδιο του πάπα, αλλά λίγοι ιστορικοί τον πιστεύουν. Οι Βυζαντινοί, που είχαν τον δικό τους αυτοκράτορα στην Κωνσταντινούπολη — εκείνη τη στιγμή την αυτοκράτειρα Ειρήνη — εξοργίστηκαν με αυτό που θεώρησαν σφετερισμό. Από αυτά τα Χριστούγεννα θα πήγαζε η μεσαιωνική Αυτοκρατορία που, μετασχηματισμένη μέσα στους αιώνες, θα επιβίωνε ονομαστικά ως η Αγία Ρωμαϊκή Αυτοκρατορία έως ότου ο Ναπολέων τη διέλυσε το 1806. Η στέψη του 800 είναι η φυσική κατακλείδα της γερμανικής αρχαιότητας: οι κληρονόμοι του Αρμινίου και του Αλαρίχου δεν ήταν πλέον βάρβαροι στις πύλες αλλά οι νόμιμοι κυρίαρχοι του δυτικού χριστιανικού κόσμου."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
