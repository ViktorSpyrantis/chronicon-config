/** Renaissance & Religious Wars — Αναγέννηση & Πόλεμοι των Θρησκειών · French History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const RENAISSANCE_RELIGIOUS_WARS_FRANCE = {
  id: "renaissance-religious-wars-france" as const,
  label: {
    en: "Renaissance & Religious Wars",
    el: "Αναγέννηση & Πόλεμοι των Θρησκειών"
  },
  supertitle: {
    en: "Renaissance Française",
    el: "Γαλλική Αναγέννηση"
  },
  title: {
    en: "French Renaissance & Wars of Religion",
    el: "Γαλλική Αναγέννηση & Πόλεμοι των Θρησκειών"
  },
  subtitle: {
    en: "From Louis XII and the Italian Wars through Francis I at Marignano, Leonardo at Amboise, the châteaux of the Loire and the Edict of Villers-Cotterêts, the disaster at Pavia, the Affair of the Placards and the rise of Calvinism, the massacre of Saint Bartholomew, the Catholic League, the assassination of Henri III, to Henri IV's conversion, the Edict of Nantes, and the knife of Ravaillac. Slide across the centuries to read the major events that made and unmade the Renaissance monarchy of France.",
    el: "Από τον Λουδοβίκο ΙΒ΄ και τους Ιταλικούς Πολέμους, μέσα από τον Φραγκίσκο Α΄ στο Μαριγνάνο, τον Λεονάρντο στην Αμπουάζ, τα châteaux του Λίγηρα και το Έδικτο του Βιλέρ-Κοτερέ, την καταστροφή της Παβίας, την υπόθεση των Πλακάρ και την άνοδο του Καλβινισμού, τη σφαγή του Αγίου Βαρθολομαίου, την Καθολική Λίγκα, τη δολοφονία του Ερρίκου Γ΄, έως τη μεταστροφή του Ερρίκου Δ΄, το Έδικτο της Ναντ και το μαχαίρι του Ραβαγιάκ. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα γεγονότα που έπλασαν και διέλυσαν την αναγεννησιακή μοναρχία της Γαλλίας."
  },
  menuDescription: {
    en: "Francis I and Leonardo, then decades of religious war ending at the Edict of Nantes.",
    el: "Ο Φραγκίσκος Α΄ κι ο Λεονάρντο, κι έπειτα δεκαετίες θρησκευτικών πολέμων ως το Έδικτο της Ναντ."
  },
  footerLabel: {
    en: "French Renaissance & Wars of Religion · 15th–16th centuries CE",
    el: "Γαλλική Αναγέννηση & Πόλεμοι των Θρησκειών · 15ος–16ος αιώνας μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Renaissance & Religious Wars",
    el: "Αναγέννηση & Πόλεμοι των Θρησκειών"
  },
  theme: THEMES.violet,
  timeline: [
    {
      year: 1498,
      era: {
        en: "Louis XII",
        el: "Λουδοβίκος ΙΒ΄"
      },
      events: [
        {
          title: {
            en: "The Father of the People takes the throne",
            el: "Ο Πατέρας του Λαού ανεβαίνει στον θρόνο"
          },
          description: {
            en: "On the death of Charles VIII in an accident at Amboise, the Orléans cousin Louis XII inherits the crown. He has the marriage to Charles's widow Anne of Brittany annulled and remarried, keeping Brittany within the royal house, and renews the war for Milan.",
            el: "Με τον θάνατο του Καρόλου Η΄ από ατύχημα στην Αμπουάζ, ο εξάδελφος της Ορλεάνης Λουδοβίκος ΙΒ΄ κληρονομεί το στέμμα. Φροντίζει να ακυρωθεί ο γάμος με τη χήρα του Καρόλου, Άννα της Βρετάνης, και να την παντρευτεί ο ίδιος, κρατώντας τη Βρετάνη στον βασιλικό οίκο, και ξανανοίγει τον πόλεμο για το Μιλάνο."
          },
          extendedDescription: {
            en: "His reign would be celebrated for the lowering of the taille, the codification of customary law, and a court at Blois that drew Italian humanists, painters, and architects. The early French Renaissance — at Amboise, Blois, Gaillon for the cardinal d'Amboise — bloomed on the back of Italian conquest and Italian taste.",
            el: "Η βασιλεία του θα τιμηθεί για τη μείωση της taille, την κωδικοποίηση του εθιμικού δικαίου και μια αυλή στο Μπλουά που έλκυε Ιταλούς ουμανιστές, ζωγράφους και αρχιτέκτονες. Η πρώιμη γαλλική Αναγέννηση — στην Αμπουάζ, στο Μπλουά, στο Γκαϊγιόν για τον καρδινάλιο ντ' Αμπουάζ — άνθισε πάνω στην ιταλική κατάκτηση και το ιταλικό γούστο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1515,
      era: {
        en: "Accession of Francis I",
        el: "Άνοδος του Φραγκίσκου Α΄"
      },
      events: [
        {
          title: {
            en: "Marignano: the victory of a giant",
            el: "Μαριγνάνο: η νίκη ενός γίγαντα"
          },
          description: {
            en: "Six months after his coronation, the twenty-year-old Francis I crosses the Alps with the largest French army the century has seen and defeats the Swiss pikemen at Marignano in a two-day battle. He is knighted on the field by the Chevalier Bayard. Milan is his.",
            el: "Έξι μήνες μετά τη στέψη του, ο εικοσάχρονος Φραγκίσκος Α΄ διασχίζει τις Άλπεις με τον μεγαλύτερο γαλλικό στρατό που έχει δει ο αιώνας και νικά τους Ελβετούς πικενιέρους στο Μαριγνάνο σε διήμερη μάχη. Χρίεται ιππότης επί του πεδίου από τον Σεβαλιέ Μπαγιάρ. Το Μιλάνο είναι δικό του."
          },
          extendedDescription: {
            en: "Francis would bring Leonardo da Vinci to France in 1516 with three paintings under his arm — the Mona Lisa among them — and lodge him at the manor of Clos Lucé beside the royal château of Amboise until his death in 1519. The Renaissance châteaux of the Loire — Chambord, Blois, Azay-le-Rideau, Chenonceau — and Pierre Lescot's new Louvre would soon make Francis the great royal patron of the French Renaissance.",
            el: "Ο Φραγκίσκος θα φέρει τον Λεονάρντο ντα Βίντσι στη Γαλλία το 1516 με τρεις πίνακες υπό μάλης — μεταξύ τους τη Μόνα Λίζα — και θα τον στεγάσει στο μανόρ του Κλο Λυσέ δίπλα στο βασιλικό château της Αμπουάζ μέχρι τον θάνατό του το 1519. Τα αναγεννησιακά châteaux του Λίγηρα — Σαμπόρ, Μπλουά, Αζαί-λε-Ριντό, Σενονσό — και το νέο Λούβρο του Πιερ Λεσκό θα κάνουν σύντομα τον Φραγκίσκο τον μεγάλο βασιλικό προστάτη της γαλλικής Αναγέννησης."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1516,
      era: {
        en: "Concordat of Bologna",
        el: "Κονκορδάτο της Μπολόνια"
      },
      events: [
        {
          title: {
            en: "The king takes the Gallican Church",
            el: "Ο βασιλιάς παίρνει τη γαλλικανική Εκκλησία"
          },
          description: {
            en: "Pope Leo X and Francis I sign at Bologna a concordat that gives the king the nomination of all French bishops, abbots, and major priories. In return, France abandons the radical conciliarism of the Pragmatic Sanction of Bourges. The French crown now controls the wealth and the personnel of the Gallican Church.",
            el: "Ο πάπας Λέων Ι΄ και ο Φραγκίσκος Α΄ υπογράφουν στη Μπολόνια κονκορδάτο που δίνει στον βασιλιά την ονομασία όλων των Γάλλων επισκόπων, ηγουμένων και μεγάλων προωρισμών. Σε αντάλλαγμα, η Γαλλία εγκαταλείπει τον ριζοσπαστικό συμβουλιαρισμό της Πραγματικής Σαγκσιόν της Μπουρζ. Το γαλλικό στέμμα ελέγχει πλέον τον πλούτο και το προσωπικό της γαλλικανικής Εκκλησίας."
          },
          extendedDescription: {
            en: "The Parlement of Paris resisted registering the concordat for two years, seeing it as a surrender of Gallican liberties to Rome. Because the king already controlled the Church's appointments and wealth, the French crown had far less to gain from breaking with the papacy than the kings of England or Sweden — one reason historians give for France remaining Catholic. The concordat governed Church and state in France until the Revolution.",
            el: "Το Κοινοβούλιο του Παρισιού αρνιόταν επί δύο χρόνια να καταχωρίσει το κονκορδάτο, θεωρώντας το παράδοση των γαλλικανικών ελευθεριών στη Ρώμη. Επειδή ο βασιλιάς έλεγχε ήδη τους διορισμούς και τον πλούτο της Εκκλησίας, το γαλλικό στέμμα είχε πολύ λιγότερα να κερδίσει από μια ρήξη με την παπωσύνη απ' ό,τι οι βασιλείς της Αγγλίας ή της Σουηδίας — ένας από τους λόγους που δίνουν οι ιστορικοί για το ότι η Γαλλία έμεινε καθολική. Το κονκορδάτο ρύθμιζε τις σχέσεις Εκκλησίας και κράτους στη Γαλλία ως την Επανάσταση."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1520,
      era: {
        en: "Renaissance Diplomacy",
        el: "Αναγεννησιακή Διπλωματία"
      },
      events: [
        {
          title: {
            en: "The Field of the Cloth of Gold",
            el: "Το Πεδίο του Χρυσού Υφάσματος"
          },
          description: {
            en: "Outside Calais, near Guînes, Francis I and Henry VIII of England meet for eighteen days of jousts, banquets, masques, and wrestling in a temporary city of gold and silk. The summit looks like a peace; in reality, both men are courting the new emperor Charles V.",
            el: "Έξω από το Καλέ, κοντά στο Γκυίν, ο Φραγκίσκος Α΄ και ο Ερρίκος Η΄ της Αγγλίας συναντώνται για δεκαοκτώ ημέρες κονταρομαχίες, συμπόσια, παραστάσεις και πάλη σε μια προσωρινή πόλη από χρυσό και μετάξι. Η σύνοδος μοιάζει με ειρήνη· στην πραγματικότητα, και οι δύο άνδρες φλερτάρουν με τον νέο αυτοκράτορα Κάρολο Ε΄."
          },
          extendedDescription: {
            en: "Francis had lost the imperial election to Charles in 1519. With the Habsburg now ruling Spain, Naples, the Low Countries, Austria, and the Empire, France was encircled on every land border. The dynastic struggle between Valois and Habsburg, fought from Pavia to Saint-Quentin, would be the master question of European politics for forty years.",
            el: "Ο Φραγκίσκος είχε χάσει την αυτοκρατορική εκλογή από τον Κάρολο το 1519. Με τον Αψβούργο να κυβερνά Ισπανία, Νάπολη, Κάτω Χώρες, Αυστρία και Αυτοκρατορία, η Γαλλία ήταν περικυκλωμένη σε κάθε χερσαία μεθόριο. Ο δυναστικός αγώνας μεταξύ Βαλουά και Αψβούργων, που έδωσε μάχη από την Παβία ως το Σαιν-Κεντέν, θα ήταν το κύριο ζήτημα της ευρωπαϊκής πολιτικής επί σαράντα χρόνια."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1525,
      era: {
        en: "Disaster in Italy",
        el: "Καταστροφή στην Ιταλία"
      },
      events: [
        {
          title: {
            en: "Pavia: 'all is lost save honour'",
            el: "Παβία: «όλα χάθηκαν εκτός από την τιμή»"
          },
          description: {
            en: "Outside Pavia in Lombardy, the Spanish-imperial arquebusiers of Charles V destroy the French chivalry under Francis I in a few hours. The flower of the nobility falls; Francis is taken prisoner and carried to Madrid. From there he writes to his mother the celebrated phrase: 'all is lost save honour, and life, which is safe'.",
            el: "Έξω από την Παβία στη Λομβαρδία, οι ισπανο-αυτοκρατορικοί αρκεβουζιοφόροι του Καρόλου Ε΄ καταστρέφουν τη γαλλική ιπποσύνη υπό τον Φραγκίσκο Α΄ σε λίγες ώρες. Το άνθος της ευγένειας πέφτει· ο Φραγκίσκος συλλαμβάνεται και μεταφέρεται στη Μαδρίτη. Από εκεί γράφει στη μητέρα του τη φράση: «όλα χάθηκαν εκτός από την τιμή και τη ζωή, που είναι ασφαλής»."
          },
          extendedDescription: {
            en: "The battle was fought on Charles V's twenty-fifth birthday. To win his release by the Treaty of Madrid in 1526, Francis gave up Burgundy and his claims in Italy and handed over his two young sons as hostages — then repudiated the treaty as soon as he was free. Seeking allies against the Habsburgs, he went on to conclude an alliance with the Ottoman sultan Suleiman the Magnificent, to the scandal of Christian Europe.",
            el: "Η μάχη δόθηκε την ημέρα των εικοστών πέμπτων γενεθλίων του Καρόλου Ε΄. Για να κερδίσει την απελευθέρωσή του με τη Συνθήκη της Μαδρίτης το 1526, ο Φραγκίσκος παραιτήθηκε από τη Βουργουνδία και από τις διεκδικήσεις του στην Ιταλία και παρέδωσε ως ομήρους τους δύο μικρούς γιους του — και έπειτα αποκήρυξε τη συνθήκη μόλις ελευθερώθηκε. Αναζητώντας συμμάχους κατά των Αψβούργων, σύναψε στη συνέχεια συμμαχία με τον Οθωμανό σουλτάνο Σουλεϊμάν τον Μεγαλοπρεπή, προς σκανδαλισμό της χριστιανικής Ευρώπης."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1532,
      era: {
        en: "Annexation of Brittany",
        el: "Προσάρτηση της Βρετάνης"
      },
      events: [
        {
          title: {
            en: "Brittany is united with France",
            el: "Η Βρετάνη ενώνεται με τη Γαλλία"
          },
          description: {
            en: "By the Edict of Union at Vannes, the duchy of Brittany — inherited by Francis I's late wife Claude from her mother Anne — is permanently united with the kingdom of France, on condition of preserving its liberties. The last great independent feudal principality is gone.",
            el: "Με το Έδικτο της Ένωσης στη Βαν, το δουκάτο της Βρετάνης — που κληρονόμησε η εκλιπούσα σύζυγος του Φραγκίσκου Α΄, Κλωντ, από τη μητέρα της Άννα — ενώνεται οριστικά με το βασίλειο της Γαλλίας, με τον όρο να διατηρήσει τις ελευθερίες του. Η τελευταία μεγάλη ανεξάρτητη φεουδαρχική ηγεμονία έχει εκλείψει."
          },
          extendedDescription: {
            en: "Anne of Brittany had been married in turn to two French kings, Charles VIII and Louis XII, to bring the duchy under French control. The Edict of Union preserved Breton privileges, including the consent of the Estates of Brittany to taxation and a separate Parlement created at Rennes, until the Revolution abolished provincial rights in 1789. The Breton language, spoken by much of the western peninsula, survived for centuries and is still taught today.",
            el: "Η Άννα της Βρετάνης είχε παντρευτεί διαδοχικά δύο Γάλλους βασιλείς, τον Κάρολο Η΄ και τον Λουδοβίκο ΙΒ΄, ώστε το δουκάτο να περάσει υπό γαλλικό έλεγχο. Το Διάταγμα της Ένωσης διατήρησε τα βρετονικά προνόμια, μεταξύ αυτών τη συναίνεση των Τάξεων της Βρετάνης στη φορολογία και ένα χωριστό Κοινοβούλιο που ιδρύθηκε στη Ρεν, ώσπου η Επανάσταση κατάργησε τα επαρχιακά δικαιώματα το 1789. Η βρετονική γλώσσα, που τη μιλούσε μεγάλο μέρος της δυτικής χερσονήσου, επέζησε επί αιώνες και διδάσκεται ακόμη σήμερα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1534,
      era: {
        en: "Affair of the Placards",
        el: "Υπόθεση των Πλακάρ"
      },
      events: [
        {
          title: {
            en: "Placards against the Mass",
            el: "Πλακάτ κατά της Θείας Λειτουργίας"
          },
          description: {
            en: "On the night of 17 October, anti-Eucharistic broadsheets attributed to the pastor Antoine Marcourt are posted in Paris, Orléans, Tours, Rouen, Blois — and on the bedroom door of the king himself at Amboise. A young John Calvin flees France. The first systematic persecution of French Protestants begins.",
            el: "Τη νύχτα της 17ης Οκτωβρίου, αντιευχαριστικά φυλλάδια αποδιδόμενα στον πάστορα Αντουάν Μαρκούρ τοιχοκολλούνται στο Παρίσι, την Ορλεάνη, την Τουρ, τη Ρουέν, το Μπλουά — και στην πόρτα της κρεβατοκάμαρας του ίδιου του βασιλιά στην Αμπουάζ. Ένας νεαρός Ζαν Καλβίνος εγκαταλείπει τη Γαλλία. Η πρώτη συστηματική δίωξη των Γάλλων Προτεσταντών αρχίζει."
          },
          extendedDescription: {
            en: "The same year, Jacques Cartier sailed from Saint-Malo, planted a cross at Gaspé, and claimed for the king the lands of Hochelaga and Stadacona — the beginning of New France in the valley of the Saint Lawrence. Calvin, settling at Geneva, would publish in 1536 the Institutio Christianae Religionis, the most influential French prose of the century and the doctrinal nucleus of the Huguenot movement.",
            el: "Την ίδια χρονιά, ο Ζακ Καρτιέ απέπλευσε από το Σαιν-Μαλό, έστησε σταυρό στο Γκασπέ και διεκδίκησε για τον βασιλιά τις γαίες της Ochelaga και της Stadacona — η αρχή της Νέας Γαλλίας στην κοιλάδα του Αγίου Λαυρεντίου. Ο Καλβίνος, εγκαθιστάμενος στη Γενεύη, θα δημοσιεύσει το 1536 την Institutio Christianae Religionis, την πιο επιδραστική γαλλική πρόζα του αιώνα και τον δογματικό πυρήνα του Ουγενοτικού κινήματος."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1539,
      era: {
        en: "French as State Language",
        el: "Η Γαλλική ως Κρατική Γλώσσα"
      },
      events: [
        {
          title: {
            en: "The Edict of Villers-Cotterêts",
            el: "Το Έδικτο του Βιλέρ-Κοτερέ"
          },
          description: {
            en: "Francis I orders that all royal acts, judgements, and ecclesiastical records — until now in Latin or local langues — be written 'en langaige maternel françois'. The edict also requires every parish to keep a register of baptisms. The French language and the modern administrative state advance together.",
            el: "Ο Φραγκίσκος Α΄ διατάζει όλες οι βασιλικές πράξεις, αποφάσεις και εκκλησιαστικά αρχεία — μέχρι τώρα στα λατινικά ή τις τοπικές langues — να γράφονται «en langaige maternel françois». Το έδικτο απαιτεί επίσης κάθε ενορία να τηρεί μητρώο βαπτίσεων. Η γαλλική γλώσσα και το σύγχρονο διοικητικό κράτος προχωρούν μαζί."
          },
          extendedDescription: {
            en: "Its articles on language, the 110th and 111th, are still in force, making the edict the oldest French law still applied today. Parish registers of baptisms, and later of marriages and burials, became the foundation of civil records and of family history in France. The château of Villers-Cotterêts, where Francis signed it, was restored and reopened in 2023 as the International City of the French Language.",
            el: "Τα άρθρα του για τη γλώσσα, το 110ο και το 111ο, ισχύουν ακόμη, κάνοντας το διάταγμα τον αρχαιότερο γαλλικό νόμο που εφαρμόζεται ως σήμερα. Τα ενοριακά μητρώα βαπτίσεων, και αργότερα γάμων και ταφών, έγιναν το θεμέλιο των ληξιαρχικών αρχείων και της οικογενειακής ιστορίας στη Γαλλία. Το κάστρο του Βιλέρ-Κοτρέ, όπου το υπέγραψε ο Φραγκίσκος, αναστηλώθηκε και άνοιξε ξανά το 2023 ως Διεθνής Πόλη της Γαλλικής Γλώσσας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1547,
      era: {
        en: "Reign of Henry II",
        el: "Βασιλεία του Ερρίκου Β΄"
      },
      events: [
        {
          title: {
            en: "Henry II and the court of Diane",
            el: "Ο Ερρίκος Β΄ και η αυλή της Νταϊάν"
          },
          description: {
            en: "Francis I dies at Rambouillet; his second son Henry II succeeds him. The court is dominated by his Italian-born queen, Catherine de' Medici, and by his older mistress, Diane de Poitiers, for whom Philibert de l'Orme builds the bridge across the Cher at Chenonceau.",
            el: "Ο Φραγκίσκος Α΄ πεθαίνει στο Ραμπουιγέ· τον διαδέχεται ο δεύτερος γιος του Ερρίκος Β΄. Η αυλή κυριαρχείται από την Ιταλίδα βασίλισσά του, την Αικατερίνη των Μεδίκων, και από την πιο μεγάλη ερωμένη του, Νταϊάν ντε Πουατιέ, για την οποία ο Φιλιμπέρ ντε λ' Ορμ χτίζει τη γέφυρα πάνω από τον Σερ στο Σενονσό."
          },
          extendedDescription: {
            en: "Henry's reign saw the chambre ardente of the Parlement of Paris specially erected to try heretics, the foundation of the Pléiade poets around Ronsard and du Bellay, and the seizure of the imperial bishoprics of Metz, Toul, and Verdun in 1552 — strategic prizes France would keep for centuries.",
            el: "Η βασιλεία του Ερρίκου είδε την chambre ardente του Κοινοβουλίου του Παρισιού να συγκροτείται ειδικά για να δικάζει αιρετικούς, την ίδρυση των ποιητών της Pléiade γύρω από τον Ρονσάρ και τον ντι Μπελαί και την κατάληψη των αυτοκρατορικών επισκοπών Μετς, Τουλ και Βερντέν το 1552 — στρατηγικά τρόπαια που η Γαλλία θα κρατούσε επί αιώνες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1559,
      era: {
        en: "End of the Italian Wars",
        el: "Τέλος των Ιταλικών Πολέμων"
      },
      events: [
        {
          title: {
            en: "Cateau-Cambrésis and the death of a king",
            el: "Κατώ-Καμπρεζύ και ο θάνατος ενός βασιλιά"
          },
          description: {
            en: "Henry II signs the Treaty of Cateau-Cambrésis with Philip II of Spain. France renounces sixty-five years of Italian ambitions but keeps Calais and the Three Bishoprics. At the tournament celebrating the peace, the king is mortally wounded in the eye by the lance of Gabriel de Montgomery and dies eleven days later.",
            el: "Ο Ερρίκος Β΄ υπογράφει τη Συνθήκη του Κατώ-Καμπρεζύ με τον Φίλιππο Β΄ της Ισπανίας. Η Γαλλία αποποιείται εξήντα πέντε χρόνια ιταλικών φιλοδοξιών αλλά κρατά το Καλέ και τις Τρεις Επισκοπές. Στο τουρνουά εορτασμού της ειρήνης, ο βασιλιάς τραυματίζεται θανάσιμα στο μάτι από τη λόγχη του Γκαμπριέλ ντε Μομγκόμερι και πεθαίνει έντεκα ημέρες αργότερα."
          },
          extendedDescription: {
            en: "The death of a strong king at forty left France in the hands of three sickly sons under the tutelage of Catherine de' Medici, with three great noble houses — the Guise (Catholic), the Bourbon (royal, mostly Protestant), and the Montmorency-Châtillon (mixed) — manoeuvring for control. Within three years the kingdom would slide into the Wars of Religion.",
            el: "Ο θάνατος ενός ισχυρού βασιλιά στα σαράντα του άφησε τη Γαλλία στα χέρια τριών αρρωστιάρικων γιων υπό την κηδεμονία της Αικατερίνης των Μεδίκων, με τρεις μεγάλους οίκους ευγενών — τους Γκιζ (Καθολικοί), τους Βουρβώνους (βασιλικός, κυρίως Προτεσταντικός) και τους Μομορανσί-Σατιγιόν (μικτός) — να ελίσσονται για τον έλεγχο. Σε τρία χρόνια το βασίλειο θα γλιστρούσε στους Πολέμους των Θρησκειών."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1562,
      era: {
        en: "Wars of Religion Begin",
        el: "Πόλεμοι των Θρησκειών Αρχίζουν"
      },
      events: [
        {
          title: {
            en: "The massacre of Vassy",
            el: "Η σφαγή του Βασύ"
          },
          description: {
            en: "Passing through the Champagne town of Vassy on a Sunday in March, the duc François de Guise and his armed retinue fall on a Huguenot congregation worshipping in a barn. Some seventy are killed. The Protestant prince of Condé takes up arms; the first of eight Wars of Religion has begun.",
            el: "Περνώντας από την πόλη Βασύ της Καμπανίας μια Κυριακή του Μαρτίου, ο δούκας Φρανσουά ντε Γκιζ και η ένοπλη ακολουθία του επιτίθενται σε Ουγενοτική σύναξη που λατρεύει σε αχυρώνα. Σκοτώνονται περίπου εβδομήντα. Ο Προτεστάντης πρίγκιπας ντε Κοντέ παίρνει τα όπλα· ο πρώτος από οκτώ Πολέμους των Θρησκειών έχει αρχίσει."
          },
          extendedDescription: {
            en: "By 1562 perhaps two million of the eighteen million inhabitants of France were Huguenots, with strongholds at La Rochelle, Montauban, Nîmes, and through the south. The Edict of Saint-Germain (January 1562) had granted them limited toleration; Vassy began thirty-six years of intermittent civil war that would only end with the Edict of Nantes.",
            el: "Μέχρι το 1562 ίσως δύο εκατομμύρια από τα δεκαοκτώ εκατομμύρια κατοίκους της Γαλλίας ήταν Ουγενότοι, με προπύργια στη Λα Ροσέλ, το Μομποζέν, τη Νιμ και σε όλο τον νότο. Το Έδικτο του Σαιν-Ζερμέν (Ιανουάριος 1562) τους είχε χορηγήσει περιορισμένη ανοχή· το Βασύ άρχισε τριάντα έξι χρόνια διαλείπουσας εμφύλιας σύρραξης που θα τελείωναν μόνο με το Έδικτο της Ναντ."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1572,
      era: {
        en: "Saint Bartholomew's Day",
        el: "Ημέρα του Αγίου Βαρθολομαίου"
      },
      events: [
        {
          title: {
            en: "The Saint Bartholomew's Day massacre",
            el: "Η σφαγή της Νύχτας του Αγίου Βαρθολομαίου"
          },
          description: {
            en: "On the night of 23-24 August, in the days after the wedding of Henri of Navarre to Marguerite de Valois, the queen mother Catherine and Charles IX authorise the murder of the Huguenot leadership in Paris. The order escapes the palace; the city rises, and the killing spreads to the provinces for weeks. Admiral Coligny is among the first to die.",
            el: "Τη νύχτα της 23-24 Αυγούστου, τις ημέρες μετά τον γάμο του Ερρίκου της Ναβάρρας με τη Μαργαρίτα των Βαλουά, η μητέρα-βασίλισσα Αικατερίνη και ο Κάρολος Θ΄ εξουσιοδοτούν τη δολοφονία της Ουγενοτικής ηγεσίας στο Παρίσι. Η εντολή ξεφεύγει από το παλάτι· η πόλη ξεσηκώνεται και οι σφαγές απλώνονται στις επαρχίες για εβδομάδες. Ο ναύαρχος Κολινί είναι από τους πρώτους που πεθαίνουν."
          },
          extendedDescription: {
            en: "Modern estimates put the Paris dead at two to three thousand and the provincial total at perhaps ten thousand. The massacre radicalised both confessions: the Huguenots embraced the resistance theories of the so-called monarchomachs (Hotman's Francogallia, Mornay's Vindiciae contra tyrannos); Catholic militants would soon organise the Holy League. Henri of Navarre, the bridegroom, saved his life by abjuring his faith and remained a virtual prisoner at court for nearly four years.",
            el: "Σύγχρονες εκτιμήσεις τοποθετούν τους νεκρούς του Παρισιού σε δύο με τρεις χιλιάδες και το σύνολο των επαρχιών σε ίσως δέκα χιλιάδες. Η σφαγή ριζοσπαστικοποίησε και τις δύο ομολογίες: οι Ουγενότοι αγκάλιασαν τις θεωρίες αντίστασης των λεγόμενων monarchomachs (η Francogallia του Ότμαν, οι Vindiciae contra tyrannos του Μορνέ)· οι Καθολικοί μαχητικοί θα οργάνωναν σύντομα την Ιερή Λίγκα. Ο Ερρίκος της Ναβάρρας, ο γαμπρός, έσωσε τη ζωή του απαρνούμενος την πίστη του και παρέμεινε ουσιαστικά κρατούμενος στην αυλή για σχεδόν τέσσερα χρόνια."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/La_masacre_de_San_Bartolom%C3%A9,_por_Fran%C3%A7ois_Dubois.jpg?width=1024",
            alt: {
              en: "The St. Bartholomew's Day Massacre, by François Dubois",
              el: "Η σφαγή του Αγίου Βαρθολομαίου, έργο του Φρανσουά Ντιμπουά"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1576,
      era: {
        en: "The Catholic League",
        el: "Η Καθολική Λίγκα"
      },
      events: [
        {
          title: {
            en: "The Holy League takes shape",
            el: "Η Ιερή Λίγκα παίρνει μορφή"
          },
          description: {
            en: "After the Edict of Beaulieu grants the Huguenots wide concessions, the Catholic militants of Picardy form the first chapter of the Sainte Ligue. Henri, duc de Guise, soon takes leadership of a national network that will challenge the crown for the next thirteen years.",
            el: "Μετά το Έδικτο του Μπολιέ που παραχωρεί στους Ουγενότους ευρείες παραχωρήσεις, οι Καθολικοί μαχητικοί της Πικαρδίας σχηματίζουν το πρώτο παράρτημα της Sainte Ligue. Ο Ερρίκος, δούκας του Γκιζ, αναλαμβάνει σύντομα την ηγεσία ενός εθνικού δικτύου που θα προκαλέσει το στέμμα για τα επόμενα δεκατρία χρόνια."
          },
          extendedDescription: {
            en: "Henri of Guise, nicknamed 'le Balafré' for the scar on his face, was the son of the Catholic leader assassinated in 1563 and a leading figure in the St Bartholomew's Day massacre of 1572. The League gained new urgency in 1584, when the death of the king's last brother made the Protestant Henri of Navarre heir to the throne. That year Guise signed the secret Treaty of Joinville with Philip II of Spain, whose money sustained the League's war against a Protestant succession.",
            el: "Ο Ερρίκος του Γκιζ, που τον αποκαλούσαν «le Balafré» λόγω της ουλής στο πρόσωπό του, ήταν γιος του καθολικού ηγέτη που δολοφονήθηκε το 1563 και κεντρική μορφή της σφαγής της νύχτας του Αγίου Βαρθολομαίου το 1572. Η Λίγκα απέκτησε νέα επιτακτικότητα το 1584, όταν ο θάνατος του τελευταίου αδελφού του βασιλιά έκανε τον προτεστάντη Ερρίκο της Ναβάρρας διάδοχο του θρόνου. Εκείνη τη χρονιά ο Γκιζ υπέγραψε τη μυστική Συνθήκη της Ζουανβίλ με τον Φίλιππο Β΄ της Ισπανίας, του οποίου τα χρήματα στήριξαν τον πόλεμο της Λίγκας κατά μιας προτεσταντικής διαδοχής."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1588,
      era: {
        en: "Day of the Barricades",
        el: "Ημέρα των Οδοφραγμάτων"
      },
      events: [
        {
          title: {
            en: "Henri III flees Paris; Guise dies at Blois",
            el: "Ο Ερρίκος Γ΄ φεύγει από το Παρίσι· ο Γκιζ πεθαίνει στο Μπλουά"
          },
          description: {
            en: "Henri III brings Swiss troops into Paris against the Guise; the city throws up barricades and the king flees to Chartres. In December, summoning the duke to the royal château at Blois under safe conduct, he has Guise and his brother the cardinal murdered in his bedchamber.",
            el: "Ο Ερρίκος Γ΄ φέρνει Ελβετικά στρατεύματα στο Παρίσι κατά των Γκιζ· η πόλη υψώνει οδοφράγματα και ο βασιλιάς διαφεύγει στη Σαρτρ. Τον Δεκέμβριο, καλώντας τον δούκα στο βασιλικό château του Μπλουά υπό εγγύηση ασφαλείας, διατάζει τη δολοφονία του Γκιζ και του αδελφού του καρδιναλίου στην κρεβατοκάμαρά του."
          },
          extendedDescription: {
            en: "The 'Day of the Barricades' on 12 May 1588 left Guise master of Paris and forced the king to call the Estates-General at Blois, where the League dominated. The duke was cut down by members of the king's bodyguard, the 'Forty-Five'; Henri III is said to have remarked that his enemy looked even taller dead than alive. Catherine de' Medici, the king's mother, died two weeks later, and Catholic France rose against a king it now saw as a murderer.",
            el: "Η «Ημέρα των Οδοφραγμάτων», στις 12 Μαΐου 1588, άφησε τον Γκιζ κύριο του Παρισιού και ανάγκασε τον βασιλιά να συγκαλέσει τις Γενικές Τάξεις στο Μπλουά, όπου κυριαρχούσε η Λίγκα. Ο δούκας κατακρεουργήθηκε από μέλη της φρουράς του βασιλιά, τους «Σαράντα Πέντε»· ο Ερρίκος Γ΄ λέγεται ότι παρατήρησε πως ο εχθρός του έμοιαζε ακόμη ψηλότερος νεκρός απ' ό,τι ζωντανός. Η Αικατερίνη των Μεδίκων, η μητέρα του βασιλιά, πέθανε δύο εβδομάδες αργότερα, και η καθολική Γαλλία εξεγέρθηκε κατά ενός βασιλιά που θεωρούσε πλέον δολοφόνο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1589,
      era: {
        en: "The Bourbon Succession",
        el: "Η Διαδοχή των Βουρβώνων"
      },
      events: [
        {
          title: {
            en: "Henri III is assassinated; Henri IV becomes king",
            el: "Ο Ερρίκος Γ΄ δολοφονείται· ο Ερρίκος Δ΄ γίνεται βασιλιάς"
          },
          description: {
            en: "Besieging League-held Paris with Henri of Navarre, Henri III is stabbed at Saint-Cloud by the Dominican friar Jacques Clément, sent by the League. With his dying breath he names Navarre his heir. The last Valois dies; the Bourbon dynasty begins.",
            el: "Πολιορκώντας το Παρίσι, που κρατούσε η Λίγκα, μαζί με τον Ερρίκο της Ναβάρρας, ο Ερρίκος Γ΄ μαχαιρώνεται στο Σαιν-Κλου από τον Δομινικανό μοναχό Ζακ Κλεμάν, σταλμένο από τη Λίγκα. Με την τελευταία του πνοή ονομάζει τον Ναβαρρέζο διάδοχό του. Ο τελευταίος Βαλουά πεθαίνει· η δυναστεία των Βουρβώνων αρχίζει."
          },
          extendedDescription: {
            en: "Jacques Clément gained an audience by claiming to carry secret letters and stabbed the king in the abdomen; he was killed on the spot by the guards, and Henri III died the following day. The League refused to recognise a Protestant king and proclaimed the aged Cardinal de Bourbon as 'Charles X', while many royalist Catholic nobles left Henri IV's army. The new king had to conquer his own kingdom.",
            el: "Ο Ζακ Κλεμάν εξασφάλισε ακρόαση ισχυριζόμενος ότι μετέφερε μυστικές επιστολές και μαχαίρωσε τον βασιλιά στην κοιλιά· σκοτώθηκε επί τόπου από τους φρουρούς, και ο Ερρίκος Γ΄ πέθανε την επόμενη μέρα. Η Λίγκα αρνήθηκε να αναγνωρίσει προτεστάντη βασιλιά και ανακήρυξε τον ηλικιωμένο καρδινάλιο των Βουρβόνων «Κάρολο Ι΄», ενώ πολλοί βασιλόφρονες καθολικοί ευγενείς εγκατέλειψαν τον στρατό του Ερρίκου Δ΄. Ο νέος βασιλιάς έπρεπε να κατακτήσει το ίδιο του το βασίλειο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1590,
      era: {
        en: "Henri IV's War",
        el: "Ο Πόλεμος του Ερρίκου Δ΄"
      },
      events: [
        {
          title: {
            en: "Ivry and the siege of Paris",
            el: "Ιβρί και η πολιορκία του Παρισιού"
          },
          description: {
            en: "At Ivry-la-Bataille in March, Henri IV — 'Ralliez-vous à mon panache blanc' — crushes the League army under the duc de Mayenne and lays siege to Paris. The city eats its dogs, cats, and the grass of the Tuileries before a Spanish relief army under Alessandro Farnese, Duke of Parma, forces him to lift the siege.",
            el: "Στο Ιβρί-λα-Μπαταί τον Μάρτιο, ο Ερρίκος Δ΄ — «Συγκεντρωθείτε γύρω από το λευκό μου λοφίο» — συντρίβει τον στρατό της Λίγκας υπό τον δούκα του Μαγιέν και πολιορκεί το Παρίσι. Η πόλη τρώει τα σκυλιά, τις γάτες της και το γρασίδι των Τυιλερί προτού ισπανικός στρατός βοηθείας υπό τον Αλεσάντρο Φαρνέζε, δούκα της Πάρμας, τον αναγκάσει να λύσει την πολιορκία."
          },
          extendedDescription: {
            en: "The blockade of Paris lasted through the summer of 1590, and tens of thousands of Parisians are thought to have died of hunger; League preachers kept the city defiant. The intervention of Spanish troops showed that the civil war had become part of Philip II's European struggle against Protestantism. Henri IV began to see that military victory alone could not win him a Catholic capital.",
            el: "Ο αποκλεισμός του Παρισιού κράτησε όλο το καλοκαίρι του 1590, και πιστεύεται ότι δεκάδες χιλιάδες Παριζιάνοι πέθαναν από την πείνα· οι ιεροκήρυκες της Λίγκας κράτησαν την πόλη ανυπότακτη. Η παρέμβαση των ισπανικών στρατευμάτων έδειξε ότι ο εμφύλιος πόλεμος είχε γίνει μέρος του ευρωπαϊκού αγώνα του Φιλίππου Β΄ κατά του προτεσταντισμού. Ο Ερρίκος Δ΄ άρχισε να καταλαβαίνει ότι μόνο με τη στρατιωτική νίκη δεν θα κέρδιζε μια καθολική πρωτεύουσα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1593,
      era: {
        en: "Conversion of Henri IV",
        el: "Μεταστροφή του Ερρίκου Δ΄"
      },
      events: [
        {
          title: {
            en: "'Paris is well worth a Mass'",
            el: "«Το Παρίσι αξίζει μια Λειτουργία»"
          },
          description: {
            en: "Convinced that he will never enter his capital while he remains a Protestant, Henri IV abjures his Calvinism at the abbey of Saint-Denis on 25 July. The Parisian apocryphon attributed to him — 'Paris vaut bien une messe' — captures the political theology of the act. Paris opens its gates the following March.",
            el: "Πεπεισμένος ότι δεν θα μπει ποτέ στην πρωτεύουσά του όσο παραμένει Προτεστάντης, ο Ερρίκος Δ΄ απαρνείται τον Καλβινισμό του στο αββαείο του Σαιν-Ντενί στις 25 Ιουλίου. Το παρισινό απόκρυφο που του αποδίδεται — «Paris vaut bien une messe» — συμπυκνώνει την πολιτική θεολογία της πράξης. Το Παρίσι ανοίγει τις πύλες του τον επόμενο Μάρτιο."
          },
          extendedDescription: {
            en: "With Reims still held by the League, Henri IV was crowned at Chartres in February 1594, and entered Paris the following month almost without resistance. Pope Clement VIII lifted his excommunication in 1595, and the war with Spain ended in 1598 with the Peace of Vervins. His conversion disappointed many Huguenots but offered war-weary Catholics a king they could accept, opening the way to peace.",
            el: "Με τη Ρενς να βρίσκεται ακόμη στα χέρια της Λίγκας, ο Ερρίκος Δ΄ στέφθηκε στη Σαρτρ τον Φεβρουάριο του 1594 και μπήκε στο Παρίσι τον επόμενο μήνα σχεδόν χωρίς αντίσταση. Ο πάπας Κλήμης Η΄ ήρε τον αφορισμό του το 1595, και ο πόλεμος με την Ισπανία έληξε το 1598 με την Ειρήνη του Βερβέν. Η μεταστροφή του απογοήτευσε πολλούς Ουγενότους, αλλά πρόσφερε στους κουρασμένους από τον πόλεμο καθολικούς έναν βασιλιά που μπορούσαν να αποδεχτούν, ανοίγοντας τον δρόμο προς την ειρήνη."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1598,
      era: {
        en: "Edict of Nantes",
        el: "Έδικτο της Ναντ"
      },
      events: [
        {
          title: {
            en: "The Edict of Nantes and the peace of Vervins",
            el: "Το Έδικτο της Ναντ και η ειρήνη του Βερβέν"
          },
          description: {
            en: "On 13 April Henri IV signs at Nantes the edict that grants the Huguenots freedom of conscience, restricted freedom of worship, equal civil rights, and some hundred and fifty fortified places of refuge. Three weeks later the Treaty of Vervins ends the war with Spain. The Wars of Religion are over.",
            el: "Στις 13 Απριλίου ο Ερρίκος Δ΄ υπογράφει στη Ναντ το έδικτο που χορηγεί στους Ουγενότους ελευθερία συνείδησης, περιορισμένη ελευθερία λατρείας, ίσα πολιτικά δικαιώματα και εκατόν πενήντα περίπου οχυρωμένα μέρη καταφυγής. Τρεις εβδομάδες αργότερα η Συνθήκη του Βερβέν τερματίζει τον πόλεμο με την Ισπανία. Οι Πόλεμοι των Θρησκειών έχουν τελειώσει."
          },
          extendedDescription: {
            en: "With his great minister Sully — the duc de Sully, Superintendent of Finances — Henri rebuilt the bankrupt kingdom: roads and canals, the silk industry of Lyon, the pauline d'or, the founding of Quebec by Champlain in 1608. The Place Royale (now Place des Vosges) and the Pont-Neuf still preserve the urban face of his Paris. The reign would become, in long retrospect, France's image of a benevolent monarchy.",
            el: "Με τον μεγάλο υπουργό του Σιλί — τον δούκα του Σιλί, Γενικό Επόπτη των Οικονομικών — ο Ερρίκος ξανάχτισε το χρεοκοπημένο βασίλειο: δρόμοι και διώρυγες, η μεταξοβιομηχανία της Λυών, το pauline d'or, η ίδρυση του Κεμπέκ από τον Σαμπλέν το 1608. Η Place Royale (σήμερα Place des Vosges) και η Pont-Neuf διατηρούν ακόμη την αστική όψη του Παρισιού του. Η βασιλεία θα γίνει, σε μακρά αναδρομή, η γαλλική εικόνα μιας ευεργετικής μοναρχίας."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1610,
      era: {
        en: "Death of Henri IV",
        el: "Θάνατος του Ερρίκου Δ΄"
      },
      events: [
        {
          title: {
            en: "Ravaillac stabs the king on the rue de la Ferronnerie",
            el: "Ο Ραβαγιάκ μαχαιρώνει τον βασιλιά στη rue de la Ferronnerie"
          },
          description: {
            en: "On 14 May, as his carriage is stuck in traffic on the narrow rue de la Ferronnerie in Paris, Henri IV is stabbed three times by the Catholic fanatic François Ravaillac. He dies on the way back to the Louvre. His nine-year-old son becomes Louis XIII, with the queen mother Marie de' Medici as regent.",
            el: "Στις 14 Μαΐου, καθώς η άμαξά του έχει κολλήσει στην κίνηση στη στενή rue de la Ferronnerie στο Παρίσι, ο Ερρίκος Δ΄ μαχαιρώνεται τρεις φορές από τον Καθολικό φανατικό Φρανσουά Ραβαγιάκ. Πεθαίνει στον δρόμο προς το Λούβρο. Ο εννιάχρονος γιος του γίνεται Λουδοβίκος ΙΓ΄, με τη μητέρα-βασίλισσα Μαρία των Μεδίκων ως αντιβασίλισσα."
          },
          extendedDescription: {
            en: "The murder of the king who had reconciled Catholic and Protestant — and who was on the eve of an intervention against the Habsburgs in the Cleves succession — ended the Bourbon settlement at its most fragile moment. The seventeenth century — of Richelieu and Mazarin, of the Fronde and Louis XIV — opens with the screams of a queen-regent over a body laid out in the Louvre.",
            el: "Ο φόνος του βασιλιά που είχε συμφιλιώσει Καθολικούς και Προτεστάντες — και που ήταν στις παραμονές μιας επέμβασης κατά των Αψβούργων στη διαδοχή του Κλέβε — τερμάτισε τη βουρβωνική διευθέτηση στην πιο εύθραυστη στιγμή της. Ο δέκατος έβδομος αιώνας — του Ρισελιέ και του Μαζαρέν, της Φροντ και του Λουδοβίκου ΙΔ΄ — ανοίγει με τις κραυγές μιας αντιβασίλισσας πάνω από ένα σώμα ξαπλωμένο στο Λούβρο."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
