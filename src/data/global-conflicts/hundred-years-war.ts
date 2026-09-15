/** Hundred Years' War — Εκατονταετής Πόλεμος · Global Conflicts */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const HUNDRED_YEARS_WAR = {
  id: "hundred-years-war" as const,
  label: {
    en: "Hundred Years' War",
    el: "Εκατονταετής Πόλεμος"
  },
  supertitle: {
    en: "Plantagenet against Valois",
    el: "Πλανταγενέτες εναντίον Βαλουά"
  },
  title: {
    en: "The Hundred Years' War",
    el: "Ο Εκατονταετής Πόλεμος"
  },
  subtitle: {
    en: "From Edward III's claim to the crown of France and the confiscation of Gascony, through the longbow victories of Crécy and Poitiers, the capture of a French king and the triumph of Henry V at Agincourt, to the miraculous rising of Joan of Arc and the French recovery that ended at Castillon with the English driven from all of France but Calais. Slide across a century and more of siege, chevauchée, plague and dynasty, in which two crowns were contested and two nations were born.",
    el: "Από τη διεκδίκηση του στέμματος της Γαλλίας από τον Εδουάρδο Γ΄ και τη δήμευση της Γασκώνης, μέσα από τις νίκες του μακριού τόξου στο Κρεσί και το Πουατιέ, την αιχμαλωσία ενός Γάλλου βασιλιά και τον θρίαμβο του Ερρίκου Ε΄ στο Αζενκούρ, ως τη θαυματουργή άνοδο της Ιωάννας της Λωρραίνης και την ανάκαμψη της Γαλλίας που έκλεισε στο Καστιγιόν, με τους Άγγλους διωγμένους από όλη τη Γαλλία εκτός του Καλαί. Μετακινηθείτε ανάμεσα σε έναν αιώνα και πλέον πολιορκιών, επιδρομών, πανώλης και δυναστικής πάλης, όπου δύο στέμματα αμφισβητήθηκαν και δύο έθνη γεννήθηκαν."
  },
  menuDescription: {
    en: "A century of Anglo-French war, from Edward III's claim to Joan of Arc and the fall of English France.",
    el: "Ένας αιώνας αγγλογαλλικού πολέμου, από τη διεκδίκηση του Εδουάρδου Γ΄ ως την Ιωάννα της Λωρραίνης και την πτώση της αγγλικής Γαλλίας."
  },
  footerLabel: {
    en: "Hundred Years' War · 1337-1453",
    el: "Εκατονταετής Πόλεμος · 1337-1453"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Hundred Years' War",
    el: "Ο Εκατονταετής Πόλεμος"
  },
  theme: THEMES.azure,
  timeline: [
    {
      year: 1337,
      month: 5,
      era: {
        en: "The Cause of the Quarrel",
        el: "Η Αιτία της Διαμάχης"
      },
      events: [
        {
          title: {
            en: "Philip confiscates Aquitaine",
            el: "Ο Φίλιππος δημεύει την Ακουιτανία"
          },
          description: {
            en: "On 24 May, Philip VI of France declares forfeit the Duchy of Aquitaine, held by the kings of England as vassals of the French crown. Edward III of England — grandson of Philip IV of France through his mother Isabella — answers by reviving his own claim to the throne of France itself. A quarrel over a great fief becomes a war over a crown.",
            el: "Στις 24 Μαΐου, ο Φίλιππος ΣΤ΄ της Γαλλίας κηρύσσει έκπτωτο το Δουκάτο της Ακουιτανίας, το οποίο κατείχαν οι βασιλείς της Αγγλίας ως υποτελείς του γαλλικού στέμματος. Ο Εδουάρδος Γ΄ της Αγγλίας — εγγονός του Φιλίππου Δ΄ της Γαλλίας μέσω της μητέρας του Ισαβέλλας — απαντά αναβιώνοντας τη δική του διεκδίκηση στον ίδιο τον θρόνο της Γαλλίας. Μια διαμάχη για ένα μεγάλο φέουδο γίνεται πόλεμος για ένα στέμμα."
          },
          extendedDescription: {
            en: "When the main Capetian line died out in 1328, the French crown passed to Philip of Valois rather than to Edward, whose claim through a woman the French rejected — later justified by the so-called Salic law. The deeper cause was feudal anomaly: as Duke of Aquitaine the King of England was a vassal who bowed to no one, and no lasting peace was possible while an anointed king owed homage for half of south-western France.",
            el: "Όταν η κύρια γραμμή των Καπετιδών έσβησε το 1328, το γαλλικό στέμμα πέρασε στον Φίλιππο των Βαλουά και όχι στον Εδουάρδο, του οποίου τη διεκδίκηση μέσω γυναικείας γραμμής οι Γάλλοι απέρριψαν — δικαιολογημένη αργότερα με τον λεγόμενο Σαλικό νόμο. Η βαθύτερη αιτία ήταν μια φεουδαρχική ανωμαλία: ως Δούκας της Ακουιτανίας ο βασιλιάς της Αγγλίας ήταν ένας υποτελής που δεν υποκλινόταν σε κανέναν, και καμία διαρκής ειρήνη δεν ήταν δυνατή όσο ένας χρισμένος βασιλιάς όφειλε υποτέλεια για το μισό της νοτιοδυτικής Γαλλίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1340,
      month: 6,
      era: {
        en: "War at Sea",
        el: "Πόλεμος στη Θάλασσα"
      },
      events: [
        {
          title: {
            en: "England wins the sea at Sluys",
            el: "Η Αγγλία κερδίζει τη θάλασσα στο Σλάις"
          },
          description: {
            en: "On 24 June, in the crowded estuary of the Zwin off Sluys, Edward III destroys the French fleet, sinking or taking almost every ship. The victory gives England command of the Channel for a generation and ensures that the war will be fought on French, not English, soil. That same year Edward quarters the golden lilies of France with the leopards of England and styles himself King of France.",
            el: "Στις 24 Ιουνίου, στο πολυσύχναστο δέλτα του Ζβιν κοντά στο Σλάις, ο Εδουάρδος Γ΄ καταστρέφει τον γαλλικό στόλο, βυθίζοντας ή αιχμαλωτίζοντας σχεδόν κάθε πλοίο. Η νίκη δίνει στην Αγγλία τον έλεγχο της Μάγχης για μια γενιά και εξασφαλίζει ότι ο πόλεμος θα δοθεί σε γαλλικό, όχι αγγλικό, έδαφος. Την ίδια χρονιά ο Εδουάρδος συνενώνει τους χρυσούς κρίνους της Γαλλίας με τους λεοπαρδάλεις της Αγγλίας και αυτοανακηρύσσεται Βασιλιάς της Γαλλίας."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1346,
      month: 8,
      era: {
        en: "Crécy",
        el: "Κρεσί"
      },
      events: [
        {
          title: {
            en: "The longbow triumphs at Crécy",
            el: "Το μακρύ τόξο θριαμβεύει στο Κρεσί"
          },
          description: {
            en: "On 26 August, near Crécy in Ponthieu, Edward III's outnumbered army annihilates the flower of French chivalry. Massed English and Welsh longbowmen, shooting from prepared positions on a low ridge, cut down charge after charge of French knights. The blind King John of Bohemia is led into the fray to die; the Black Prince, aged sixteen, wins his spurs. It is a catastrophe for France and a revelation for Europe.",
            el: "Στις 26 Αυγούστου, κοντά στο Κρεσί στο Πονθιέ, ο αριθμητικά κατώτερος στρατός του Εδουάρδου Γ΄ εκμηδενίζει το άνθος του γαλλικού ιπποτισμού. Συγκεντρωμένοι Άγγλοι και Ουαλοί τοξότες με μακρύ τόξο, βάλλοντας από προετοιμασμένες θέσεις σε χαμηλό ύψωμα, θερίζουν τη μία έφοδο των Γάλλων ιπποτών μετά την άλλη. Ο τυφλός βασιλιάς Ιωάννης της Βοημίας οδηγείται στη μάχη για να πεθάνει· ο Μαύρος Πρίγκιπας, δεκαέξι ετών, κερδίζει τα σπιρούνια του. Είναι καταστροφή για τη Γαλλία και αποκάλυψη για την Ευρώπη."
          },
          extendedDescription: {
            en: "The longbow could be loosed far faster than a crossbow could be spanned, and its bodkin points punched through mail at range. Against dismounted English men-at-arms and a storm of arrows, the mounted charge that had ruled the battlefield for three centuries was broken. That commoners with a cheap wooden bow could fell armoured nobles carried a social meaning no one missed.",
            el: "Το μακρύ τόξο μπορούσε να εκτοξεύσει βέλη πολύ ταχύτερα απ' όσο μπορούσε να οπλιστεί μια βαλλίστρα, και οι σουβλερές αιχμές του διαπερνούσαν την αλυσιδωτή πανοπλία από απόσταση. Απέναντι σε πεζούς Άγγλους οπλίτες και σε μια καταιγίδα βελών, η έφοδος του ιππικού που κυριαρχούσε στο πεδίο της μάχης επί τρεις αιώνες συνετρίβη. Το ότι απλοί άνθρωποι με ένα φθηνό ξύλινο τόξο μπορούσαν να ρίξουν πανοπλισμένους ευγενείς είχε ένα κοινωνικό νόημα που κανείς δεν αγνόησε."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1347,
      month: 8,
      era: {
        en: "The Fall of Calais",
        el: "Η Πτώση του Καλαί"
      },
      events: [
        {
          title: {
            en: "Calais surrenders",
            el: "Το Καλαί παραδίδεται"
          },
          description: {
            en: "After an eleven-month siege, the starving port of Calais surrenders on 3 August. By tradition, six of its leading burghers walk out barefoot, ropes about their necks, to offer their lives for the town — spared only by the pleading of Queen Philippa. Calais becomes an English enclave and gateway into France, and will stay English for two hundred years. Within months the Black Death sweeps in, and the war pauses before a common death.",
            el: "Μετά από πολιορκία έντεκα μηνών, το λιμάνι του Καλαί, εξαντλημένο από την πείνα, παραδίδεται στις 3 Αυγούστου. Κατά την παράδοση, έξι από τους επιφανέστερους αστούς του βγαίνουν ξυπόλυτοι, με σχοινιά στον λαιμό, προσφέροντας τη ζωή τους για την πόλη — και σώζονται μόνο χάρη στις ικεσίες της βασίλισσας Φιλίππας. Το Καλαί γίνεται αγγλικός θύλακας και πύλη προς τη Γαλλία, και θα παραμείνει αγγλικό επί διακόσια χρόνια. Μέσα σε λίγους μήνες ο Μαύρος Θάνατος σαρώνει, και ο πόλεμος σταματά μπροστά σε έναν κοινό θάνατο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1356,
      month: 9,
      era: {
        en: "Poitiers",
        el: "Πουατιέ"
      },
      events: [
        {
          title: {
            en: "A king is taken at Poitiers",
            el: "Ένας βασιλιάς αιχμαλωτίζεται στο Πουατιέ"
          },
          description: {
            en: "On 19 September, the Black Prince, raiding north out of Aquitaine, is brought to battle near Poitiers. Once again the longbow and the dismounted English line shatter a far larger French army — and this time King John II of France himself is captured and carried in triumph to London. Leaderless and humiliated, France dissolves into the peasant fury of the Jacquerie and the Parisian revolt of Étienne Marcel.",
            el: "Στις 19 Σεπτεμβρίου, ο Μαύρος Πρίγκιπας, κάνοντας επιδρομή προς τον βορρά από την Ακουιτανία, αναγκάζεται σε μάχη κοντά στο Πουατιέ. Για άλλη μια φορά το μακρύ τόξο και η πεζή αγγλική γραμμή συντρίβουν έναν πολύ μεγαλύτερο γαλλικό στρατό — και αυτή τη φορά ο ίδιος ο βασιλιάς Ιωάννης Β΄ της Γαλλίας αιχμαλωτίζεται και μεταφέρεται θριαμβευτικά στο Λονδίνο. Ακέφαλη και ταπεινωμένη, η Γαλλία διαλύεται μέσα στη λαϊκή οργή της Ζακερί και στην εξέγερση του Ετιέν Μαρσέλ στο Παρίσι."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1360,
      month: 5,
      era: {
        en: "Brétigny",
        el: "Μπρετινί"
      },
      events: [
        {
          title: {
            en: "The peace of Brétigny",
            el: "Η ειρήνη του Μπρετινί"
          },
          description: {
            en: "On 8 May, the Treaty of Brétigny grants Edward III an enlarged Aquitaine in full sovereignty and an immense ransom for King John, in return for renouncing his claim to the French crown. It is the high-water mark of English fortune. Yet the formal renunciations are never exchanged, and within a decade Charles V of France, served by his constable Bertrand du Guesclin, patiently wins back nearly all of it by refusing open battle.",
            el: "Στις 8 Μαΐου, η Συνθήκη του Μπρετινί παραχωρεί στον Εδουάρδο Γ΄ μια διευρυμένη Ακουιτανία με πλήρη κυριαρχία και τεράστια λύτρα για τον βασιλιά Ιωάννη, με αντάλλαγμα την παραίτηση από τη διεκδίκηση του γαλλικού στέμματος. Είναι το ανώτατο σημείο της αγγλικής τύχης. Ωστόσο οι επίσημες παραιτήσεις δεν ανταλλάσσονται ποτέ, και μέσα σε μια δεκαετία ο Κάρολος Ε΄ της Γαλλίας, με τη βοήθεια του κονεστάβλου του Μπερτράν ντυ Γκεσκλέν, ανακτά υπομονετικά σχεδόν το σύνολό της αρνούμενος την ανοιχτή μάχη."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1415,
      month: 10,
      era: {
        en: "Agincourt",
        el: "Αζενκούρ"
      },
      events: [
        {
          title: {
            en: "Henry V and the field of Agincourt",
            el: "Ο Ερρίκος Ε΄ και το πεδίο του Αζενκούρ"
          },
          description: {
            en: "On 25 October — Saint Crispin's Day — Henry V of England, his army sick and heavily outnumbered, meets a great French host on a narrow, rain-soaked field between Agincourt and Tramecourt. The French men-at-arms, packed together and floundering in deep mud, are cut down by the longbow and finished with mallet and dagger. Thousands die or are taken while English losses are trifling. The victory reopens the war and makes Henry the arbiter of France's fate.",
            el: "Στις 25 Οκτωβρίου — την ημέρα του Αγίου Κρισπίνου — ο Ερρίκος Ε΄ της Αγγλίας, με τον στρατό του άρρωστο και συντριπτικά κατώτερο αριθμητικά, συναντά ένα μεγάλο γαλλικό εκστρατευτικό σώμα σε ένα στενό, βρεγμένο από τη βροχή πεδίο ανάμεσα στο Αζενκούρ και το Τραμεκούρ. Οι Γάλλοι οπλίτες, στριμωγμένοι και βυθισμένοι στη βαθιά λάσπη, θερίζονται από το μακρύ τόξο και αποτελειώνονται με σφυριά και εγχειρίδια. Χιλιάδες πεθαίνουν ή αιχμαλωτίζονται ενώ οι αγγλικές απώλειες είναι ασήμαντες. Η νίκη ξανανοίγει τον πόλεμο και καθιστά τον Ερρίκο διαιτητή της μοίρας της Γαλλίας."
          },
          extendedDescription: {
            en: "Henry's opportunity was France's own ruin. King Charles VI descended into recurring madness, and his kingdom tore itself apart in a civil war between the Armagnac and Burgundian factions. With the Burgundians his allies, Henry conquered Normandy and drove toward Paris. The battle would be immortalised by Shakespeare as the deed of a band of brothers, but its lesson was the same as Crécy's: discipline, ground and the bow.",
            el: "Η ευκαιρία του Ερρίκου ήταν η ίδια η καταστροφή της Γαλλίας. Ο βασιλιάς Κάρολος ΣΤ΄ βυθίστηκε σε επαναλαμβανόμενη παραφροσύνη, και το βασίλειό του σπαρασσόταν σε εμφύλιο πόλεμο ανάμεσα στις παρατάξεις των Αρμανιάκ και των Βουργουνδών. Με συμμάχους τους Βουργουνδούς, ο Ερρίκος κατέκτησε τη Νορμανδία και προήλασε προς το Παρίσι. Η μάχη θα απαθανατιζόταν από τον Σαίξπηρ ως το κατόρθωμα μιας αδελφότητας, όμως το δίδαγμά της ήταν το ίδιο με του Κρεσί: πειθαρχία, έδαφος και τόξο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1420,
      month: 5,
      era: {
        en: "Troyes",
        el: "Τρουά"
      },
      events: [
        {
          title: {
            en: "The Treaty of Troyes disinherits the Dauphin",
            el: "Η Συνθήκη της Τρουά αποκληρώνει τον Δελφίνο"
          },
          description: {
            en: "On 21 May, with Paris and the north in the hands of Henry V and his Burgundian allies, the mad Charles VI sets his seal to the Treaty of Troyes. Henry marries Charles's daughter Catherine and is recognised as regent and heir to the throne of France, while the Dauphin Charles is disinherited as illegitimate. For a moment the two crowns seem destined to rest upon a single English brow.",
            el: "Στις 21 Μαΐου, με το Παρίσι και τον βορρά στα χέρια του Ερρίκου Ε΄ και των Βουργουνδών συμμάχων του, ο παράφρων Κάρολος ΣΤ΄ σφραγίζει τη Συνθήκη της Τρουά. Ο Ερρίκος νυμφεύεται την κόρη του Καρόλου, Αικατερίνη, και αναγνωρίζεται ως αντιβασιλέας και διάδοχος του θρόνου της Γαλλίας, ενώ ο Δελφίνος Κάρολος αποκληρώνεται ως νόθος. Για μια στιγμή τα δύο στέμματα φαίνονται προορισμένα να αναπαυθούν πάνω σε ένα και μόνο αγγλικό μέτωπο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1429,
      month: 5,
      era: {
        en: "The Maid of Orléans",
        el: "Η Κόρη της Ορλεάνης"
      },
      events: [
        {
          title: {
            en: "Joan of Arc raises the siege of Orléans",
            el: "Η Ιωάννα της Λωρραίνης λύνει την πολιορκία της Ορλεάνης"
          },
          description: {
            en: "Both Henry V and Charles VI died in 1422, leaving the infant Henry VI proclaimed king of England and France while the disinherited Dauphin clung to the lands south of the Loire. By 1429 the English are besieging Orléans, the gateway to his realm, and his cause seems all but lost. Then Joan of Arc, a peasant girl of seventeen from Domrémy, comes to the Dauphin claiming a divine mission to save France. Given soldiers, she enters Orléans and on 8 May drives the English from their forts. The tide of the war turns.",
            el: "Τόσο ο Ερρίκος Ε΄ όσο και ο Κάρολος ΣΤ΄ πέθαναν το 1422, αφήνοντας τον βρέφος ακόμη Ερρίκο ΣΤ΄ να ανακηρυχθεί βασιλιάς της Αγγλίας και της Γαλλίας, ενώ ο αποκληρωμένος Δελφίνος κρατούσε μόνο τα εδάφη νότια του Λίγηρα. Ως το 1429 οι Άγγλοι πολιορκούν την Ορλεάνη, την πύλη προς το βασίλειό του, και η υπόθεσή του μοιάζει σχεδόν χαμένη. Τότε η Ιωάννα της Λωρραίνης, μια αγρότισσα δεκαεπτά ετών από το Ντομρεμί, έρχεται στον Δελφίνο ισχυριζόμενη θεϊκή αποστολή να σώσει τη Γαλλία. Παίρνοντας στρατιώτες, μπαίνει στην Ορλεάνη και στις 8 Μαΐου διώχνει τους Άγγλους από τα οχυρά τους. Η παλίρροια του πολέμου αντιστρέφεται."
          },
          extendedDescription: {
            en: "Joan said she was guided by the voices of saints. After Orléans she led the Dauphin through hostile country to Reims, where on 17 July 1429 he was anointed King Charles VII in the ancient coronation cathedral — the sacred rite that made his kingship unanswerable. More than any battle, Joan gave the French a cause that was at once national and religious, and the belief that God had not abandoned them.",
            el: "Η Ιωάννα έλεγε πως την καθοδηγούσαν οι φωνές αγίων. Μετά την Ορλεάνη οδήγησε τον Δελφίνο μέσα από εχθρική χώρα ως τη Ρενς, όπου στις 17 Ιουλίου 1429 χρίστηκε βασιλιάς Κάρολος Ζ΄ στον αρχαίο καθεδρικό των στέψεων — η ιερή τελετή που κατέστησε τη βασιλεία του αδιαμφισβήτητη. Περισσότερο από κάθε μάχη, η Ιωάννα έδωσε στους Γάλλους μια υπόθεση συγχρόνως εθνική και θρησκευτική, και την πίστη πως ο Θεός δεν τους είχε εγκαταλείψει."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1431,
      month: 5,
      era: {
        en: "The Stake at Rouen",
        el: "Η Πυρά στο Ρουέν"
      },
      events: [
        {
          title: {
            en: "Joan of Arc burns at Rouen",
            el: "Η Ιωάννα της Λωρραίνης καίγεται στο Ρουέν"
          },
          description: {
            en: "Captured by the Burgundians at Compiègne in 1430 and sold to the English, Joan is tried for heresy by a Church court at Rouen. On 30 May she is burned at the stake in the market square, nineteen years old. Her enemies mean to discredit the king she crowned; instead they make a martyr. A quarter of a century later the Church annuls her condemnation, and Charles VII, whom she saved, reigns on. In 1920 she is canonised a saint.",
            el: "Αιχμάλωτη των Βουργουνδών στην Κομπιένη το 1430 και πουλημένη στους Άγγλους, η Ιωάννα δικάζεται για αίρεση από εκκλησιαστικό δικαστήριο στο Ρουέν. Στις 30 Μαΐου καίγεται στην πυρά στην αγορά της πόλης, δεκαεννέα ετών. Οι εχθροί της σκοπεύουν να απαξιώσουν τον βασιλιά που έστεψε· αντ' αυτού δημιουργούν μια μάρτυρα. Ένα τέταρτο του αιώνα αργότερα η Εκκλησία ακυρώνει την καταδίκη της, και ο Κάρολος Ζ΄, που εκείνη έσωσε, εξακολουθεί να βασιλεύει. Το 1920 ανακηρύσσεται αγία."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1453,
      month: 7,
      era: {
        en: "Castillon",
        el: "Καστιγιόν"
      },
      events: [
        {
          title: {
            en: "Castillon ends the war",
            el: "Το Καστιγιόν τερματίζει τον πόλεμο"
          },
          description: {
            en: "On 17 July, at Castillon in Gascony, the veteran English commander John Talbot charges an entrenched French camp bristling with cannon and is killed as his army is torn apart by gunfire. Gascony, English since Eleanor of Aquitaine three centuries before, is lost. No treaty marks the ending; the war simply stops. Of all his French inheritance the king of England now holds only Calais, and France emerges unified, centralised, and armed with the first great royal artillery in Europe.",
            el: "Στις 17 Ιουλίου, στο Καστιγιόν της Γασκώνης, ο έμπειρος Άγγλος διοικητής Τζον Τάλμποτ εφορμά εναντίον ενός οχυρωμένου γαλλικού στρατοπέδου γεμάτου κανόνια και σκοτώνεται καθώς ο στρατός του κατακερματίζεται από τα πυρά. Η Γασκώνη, αγγλική από την εποχή της Ελεονώρας της Ακουιτανίας τρεις αιώνες πριν, χάνεται. Καμία συνθήκη δεν σημαδεύει το τέλος· ο πόλεμος απλώς σταματά. Από όλη τη γαλλική κληρονομιά του, ο βασιλιάς της Αγγλίας κρατά πλέον μόνο το Καλαί, και η Γαλλία αναδύεται ενοποιημένη, συγκεντρωτική και οπλισμένη με το πρώτο μεγάλο βασιλικό πυροβολικό της Ευρώπης."
          },
          extendedDescription: {
            en: "The long war forged the two nations that fought it. France was welded into a centralised kingdom with a standing army and a royal tax to pay for it; England, thrown back upon its island, turned toward the sea — and, almost at once, upon itself in the dynastic bloodletting of the Wars of the Roses. The age of the mounted knight was closing, and the age of gunpowder, standing armies, and the sovereign nation-state had begun.",
            el: "Ο μακρύς πόλεμος σφυρηλάτησε τα δύο έθνη που τον έδωσαν. Η Γαλλία συγκολλήθηκε σε ένα συγκεντρωτικό βασίλειο με μόνιμο στρατό και βασιλικό φόρο για να τον συντηρεί· η Αγγλία, απωθημένη πίσω στο νησί της, στράφηκε προς τη θάλασσα — και, σχεδόν αμέσως, εναντίον του εαυτού της στη δυναστική αιματοχυσία των Πολέμων των Ρόδων. Η εποχή του έφιππου ιππότη έκλεινε, και η εποχή της πυρίτιδας, των μόνιμων στρατών και του κυρίαρχου εθνικού κράτους είχε αρχίσει."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
