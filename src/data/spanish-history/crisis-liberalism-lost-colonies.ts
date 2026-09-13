/** Crisis, Liberalism & Lost Colonies — Κρίση, Φιλελευθερισμός & Απώλεια Αποικιών · Spanish History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const CRISIS_LIBERALISM_LOST_COLONIES = {
  id: "crisis-liberalism-lost-colonies" as const,
  label: {
    en: "Crisis, Liberalism & Lost Colonies",
    el: "Κρίση, Φιλελευθερισμός & Απώλεια Αποικιών"
  },
  supertitle: {
    en: "España Liberal",
    el: "Φιλελεύθερη Ισπανία"
  },
  title: {
    en: "Crisis, Liberalism & Lost Colonies",
    el: "Κρίση, Φιλελευθερισμός & Απώλεια Αποικιών"
  },
  subtitle: {
    en: "From the surrender of a Napoleonic army at Bailén and the Constitution of Cádiz through Riego's pronunciamiento, the loss of the mainland American empire at Ayacucho, the Carlist Wars and Mendizábal's disentailment, the reign of Isabella II, the Glorious Revolution and the First Republic, the Cánovas Restoration and the turno pacífico, the rise of socialism and anarchism, to the Cuban war and the Disaster of '98. Slide across the nineteenth century when Spain lost an empire and tried to remake itself as a modern liberal nation.",
    el: "Από την παράδοση ενός ναπολεόντειου στρατού στο Μπαϊλέν και το Σύνταγμα του Κάδιθ, μέσα από το πρανουνθιαμιέντο του Ριέγο, την απώλεια της ηπειρωτικής αμερικανικής αυτοκρατορίας στο Αγιακούτσο, τους Καρλιστικούς Πολέμους και την desamortización του Μεντιθάμπαλ, τη βασιλεία της Ισαβέλλας Β΄, την Ένδοξη Επανάσταση και την Α΄ Δημοκρατία, την Παλινόρθωση του Κάνοβας και το turno pacífico, την άνοδο του σοσιαλισμού και του αναρχισμού, ως τον πόλεμο της Κούβας και την Καταστροφή του ’98. Μετακινηθείτε στον 19ο αιώνα, όταν η Ισπανία έχασε μια αυτοκρατορία και προσπάθησε να ανασυσταθεί ως σύγχρονο φιλελεύθερο έθνος."
  },
  menuDescription: {
    en: "A century of civil war and lost colonies, ending in the Disaster of 1898.",
    el: "Ένας αιώνας εμφυλίων πολέμων και χαμένων αποικιών, με τέλος την Καταστροφή του 1898."
  },
  footerLabel: {
    en: "Crisis, Liberalism & Lost Colonies · 1808–1898",
    el: "Κρίση, Φιλελευθερισμός & Απώλεια Αποικιών · 1808–1898"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Crisis, Liberalism & Lost Colonies",
    el: "Κρίση, Φιλελευθερισμός & Απώλεια Αποικιών"
  },
  theme: THEMES.rose,
  timeline: [
    {
      year: 1808,
      era: {
        en: "Bailén",
        el: "Μπαϊλέν"
      },
      events: [
        {
          title: {
            en: "Castaños wins at Bailén",
            el: "Ο Καστάνιος νικά στο Μπαϊλέν"
          },
          description: {
            en: "On 19 July, in the olive groves of Andalusia, the Spanish general Francisco Javier Castaños forces the surrender of an entire French corps under General Dupont — the first capitulation of a Napoleonic army in open battle and the spark of European hope against the Empire.",
            el: "Στις 19 Ιουλίου, στα ελαιοτεμάχια της Ανδαλουσίας, ο Ισπανός στρατηγός Φρανθίσκο Χαβιέρ Καστάνιος εξαναγκάζει σε παράδοση ολόκληρο γαλλικό σώμα στρατού υπό τον στρατηγό Ντυπόν — η πρώτη συνθηκολόγηση ναπολεόντειου στρατού σε ανοιχτή μάχη και η σπίθα της ευρωπαϊκής ελπίδας εναντίον της Αυτοκρατορίας."
          },
          extendedDescription: {
            en: "News of Bailén raced through Europe: in Vienna and Berlin patriots read of an army of Napoleon laying down its arms in the heat of the Sierra Morena. Joseph Bonaparte abandoned Madrid within days; Napoleon would have to come in person at the head of two hundred and fifty thousand men to restore his brother's throne. The Peninsular War — la Guerra de la Independencia — settled into six years of sieges, guerrilla, and Wellington's slow advance from Lisbon to the Pyrenees.",
            el: "Η είδηση του Μπαϊλέν διέτρεξε την Ευρώπη: στη Βιέννη και στο Βερολίνο πατριώτες διάβαζαν για έναν στρατό του Ναπολέοντα που κατέθετε τα όπλα μέσα στη ζέστη της Σιέρα Μορένα. Ο Ιωσήφ Βοναπάρτης εγκατέλειψε τη Μαδρίτη μέσα σε λίγες μέρες· ο Ναπολέων θα έπρεπε να έρθει αυτοπροσώπως επικεφαλής διακόσιων πενήντα χιλιάδων ανδρών για να αποκαταστήσει τον θρόνο του αδελφού του. Ο Πόλεμος της Χερσονήσου — la Guerra de la Independencia — εγκαταστάθηκε σε έξι χρόνια πολιορκιών, ανταρτοπολέμου και της αργής προέλασης του Ουέλινγκτον από τη Λισαβόνα στα Πυρηναία."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1812,
      era: {
        en: "La Pepa",
        el: "Η Πέπα"
      },
      events: [
        {
          title: {
            en: "The Constitution of Cádiz",
            el: "Το Σύνταγμα του Κάδιθ"
          },
          description: {
            en: "On 19 March — the feast of Saint Joseph, from which the constitution would take its nickname La Pepa — the extraordinary Cortes assembled at Cádiz proclaims a sovereignty resting in the nation, a single-chamber parliament, equal rights for Spaniards on both sides of the Atlantic, and freedom of the press.",
            el: "Στις 19 Μαρτίου — εορτή του Αγίου Ιωσήφ, από την οποία το σύνταγμα θα έπαιρνε το παρατσούκλι La Pepa — η έκτακτη σύνοδος των Κορτές στο Κάδιθ διακηρύσσει την κυριαρχία του έθνους, ενιαίο κοινοβούλιο, ίσα δικαιώματα για τους Ισπανούς και στις δύο πλευρές του Ατλαντικού και ελευθερία του Τύπου."
          },
          extendedDescription: {
            en: "Drafted under French bombardment by liberal deputies from across the empire — including criollos from Mexico, Lima, and Buenos Aires — the Cádiz Constitution was the first modern constitution of Spain and one of the most influential of the nineteenth century. Naples, Piedmont, Portugal, and Brazil would all model their charters on it. Within months of Wellington's victory at Vitoria in 1813 and Ferdinand VII's restoration in March 1814, the king would tear up La Pepa and restore the absolute monarchy — opening Spain's century of constitutional torment.",
            el: "Συντάχθηκε υπό γαλλικό βομβαρδισμό από φιλελεύθερους βουλευτές απ’ όλη την αυτοκρατορία — μεταξύ τους κρεολοί από το Μεξικό, τη Λίμα και το Μπουένος Άιρες — και το Σύνταγμα του Κάδιθ ήταν το πρώτο σύγχρονο σύνταγμα της Ισπανίας και ένα από τα πιο επιδραστικά του 19ου αιώνα. Η Νάπολη, το Πεδεμόντιο, η Πορτογαλία και η Βραζιλία θα μοντελοποιούσαν πάνω σ’ αυτό τους χάρτες τους. Μέσα σε μήνες από τη νίκη του Ουέλινγκτον στη Βιτόρια το 1813 και την παλινόρθωση του Φερδινάνδου Ζ΄ τον Μάρτιο του 1814, ο βασιλιάς θα έσκιζε τη La Pepa και θα αποκαθιστούσε την απόλυτη μοναρχία — εγκαινιάζοντας τον αιώνα του συνταγματικού βασανισμού της Ισπανίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1820,
      era: {
        en: "Liberal Triennium",
        el: "Φιλελεύθερη Τριετία"
      },
      events: [
        {
          title: {
            en: "Riego's pronunciamiento",
            el: "Το πρανουνθιαμιέντο του Ριέγο"
          },
          description: {
            en: "On 1 January, in the town of Cabezas de San Juan in Andalusia, Lieutenant-Colonel Rafael del Riego raises his troops — mustered for embarkation to fight the colonial rebels in America — and proclaims the restoration of the Constitution of 1812. The Liberal Triennium is born.",
            el: "Την 1η Ιανουαρίου, στην πόλη Καμπέθας ντε Σαν Χουάν της Ανδαλουσίας, ο αντισυνταγματάρχης Ραφαέλ ντελ Ριέγο ξεσηκώνει τα στρατεύματά του — συγκεντρωμένα για να μπαρκάρουν και να πολεμήσουν τους αποικιακούς επαναστάτες της Αμερικής — και διακηρύσσει την επαναφορά του Συντάγματος του 1812. Γεννιέται η Φιλελεύθερη Τριετία."
          },
          extendedDescription: {
            en: "The Trienio Liberal of 1820–1823 was a heady experiment in constitutional government cut short by foreign invasion. In April 1823 the Holy Alliance authorised Louis XVIII to send the 'Hundred Thousand Sons of Saint Louis' under the duc d'Angoulême to restore Ferdinand VII to absolute power. Riego was captured and hanged in Madrid on 7 November 1823. The 'Ominous Decade' that followed — 1823 to 1833, the last of Ferdinand's reign — broke the back of Spanish liberalism but also failed to save the American empire: in December 1824, at Ayacucho in Peru, the last royalist army on the mainland surrendered to Antonio José de Sucre.",
            el: "Η Trienio Liberal του 1820–1823 ήταν ένα μεθυστικό πείραμα συνταγματικής διακυβέρνησης που έκοψε στη μέση η ξένη εισβολή. Τον Απρίλιο του 1823 η Ιερά Συμμαχία εξουσιοδότησε τον Λουδοβίκο ΙΗ΄ να στείλει τους «Εκατό Χιλιάδες Υιούς του Αγίου Λουδοβίκου» υπό τον δούκα της Ανγκουλέμ για να επαναφέρει στην απόλυτη εξουσία τον Φερδινάνδο Ζ΄. Ο Ριέγο συνελήφθη και κρεμάστηκε στη Μαδρίτη στις 7 Νοεμβρίου 1823. Η «Δυσοίωνη Δεκαετία» που ακολούθησε — 1823 ως 1833, η τελευταία της βασιλείας του Φερδινάνδου — έσπασε τη ραχοκοκαλιά του ισπανικού φιλελευθερισμού, αλλά απέτυχε επίσης να σώσει την αμερικανική αυτοκρατορία: τον Δεκέμβριο του 1824, στο Αγιακούτσο του Περού, ο τελευταίος βασιλικός στρατός της ηπείρου παραδόθηκε στον Αντόνιο Χοσέ ντε Σούκρε."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1824,
      era: {
        en: "Ayacucho",
        el: "Αγιακούτσο"
      },
      events: [
        {
          title: {
            en: "Ayacucho and the end of mainland America",
            el: "Το Αγιακούτσο και το τέλος της ηπειρωτικής Αμερικής"
          },
          description: {
            en: "On 9 December, on the high plain of Ayacucho in the Peruvian Andes, the patriot army of Sucre destroys the last royalist force under Viceroy La Serna. The mainland empire of three centuries is gone; only Cuba, Puerto Rico, and the Philippines remain to Spain.",
            el: "Στις 9 Δεκεμβρίου, στο υψίπεδο του Αγιακούτσο στις περουβιανές Άνδεις, ο πατριωτικός στρατός του Σούκρε εκμηδενίζει την τελευταία βασιλική δύναμη υπό τον αντιβασιλέα Λα Σέρνα. Η ηπειρωτική αυτοκρατορία τριών αιώνων χάνεται· μόνο η Κούβα, το Πουέρτο Ρίκο και οι Φιλιππίνες παραμένουν στην Ισπανία."
          },
          extendedDescription: {
            en: "From the New Spain proclamation of independence (Iguala, 1821) through Bolívar's campaign in Venezuela and New Granada, San Martín's crossing of the Andes, and Sucre's final victory, the dismemberment of Spanish America took just fifteen years. Some sixteen new states emerged from the wreckage. The metropolitan economy, dependent on American silver for three hundred years, never recovered its old position; Spain in 1824 was a peripheral European power, with what would remain of empire kept by the strength of the Caribbean and Pacific.",
            el: "Από τη διακήρυξη ανεξαρτησίας της Νέας Ισπανίας (Ιγκουάλα, 1821), μέσα από την εκστρατεία του Μπολιβάρ στη Βενεζουέλα και τη Νέα Γρανάδα, τη διάβαση των Άνδεων από τον Σαν Μαρτίν και την τελική νίκη του Σούκρε, ο διαμελισμός της ισπανικής Αμερικής χρειάστηκε μόλις δεκαπέντε χρόνια. Δεκαέξι περίπου νέα κράτη προέκυψαν από τα ερείπια. Η μητροπολιτική οικονομία, εξαρτημένη από τον αμερικανικό άργυρο επί τριακόσια χρόνια, δεν ανέκτησε ποτέ την παλιά της θέση· η Ισπανία του 1824 ήταν μια περιφερειακή ευρωπαϊκή δύναμη, με τα υπολείμματα της αυτοκρατορίας της να κρατούν χάρη στις θέσεις της Καραϊβικής και του Ειρηνικού."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1833,
      era: {
        en: "First Carlist War",
        el: "Α΄ Καρλιστικός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Death of Ferdinand VII; the Carlist Wars open",
            el: "Θάνατος του Φερδινάνδου Ζ΄· αρχίζουν οι Καρλιστικοί Πόλεμοι"
          },
          description: {
            en: "Ferdinand VII dies on 29 September leaving the throne, by the contested Pragmatic Sanction, to his three-year-old daughter Isabella under the regency of her mother Maria Christina. The king's reactionary brother Don Carlos proclaims himself Carlos V — and the First Carlist War begins.",
            el: "Ο Φερδινάνδος Ζ΄ πεθαίνει στις 29 Σεπτεμβρίου αφήνοντας τον θρόνο, με την αμφισβητούμενη Πραγματική Κύρωση, στην τρίχρονη κόρη του Ισαβέλλα υπό την αντιβασιλεία της μητέρας της Μαρίας Χριστίνας. Ο αντιδραστικός αδελφός του βασιλιά Δον Κάρλος αυτοανακηρύσσεται Κάρλος Ε΄ — και αρχίζει ο Α΄ Καρλιστικός Πόλεμος."
          },
          extendedDescription: {
            en: "The Carlist cause — 'God, Country, King, Fueros' — gathered the legitimist clergy and the foral privileges of the Basque Country, Navarre, and parts of Catalonia and Aragon against the urban liberal Castile of the regency. Three Carlist wars (1833–40, 1846–49, 1872–76) would punctuate the century. The first ended only with the Convention of Vergara in 1839 — the famous 'embrace of Vergara' between Espartero and Maroto — and forced the regency to lean ever further upon the liberal officer corps, beginning the long age of military politics.",
            el: "Ο καρλιστικός σκοπός — «Θεός, Πατρίδα, Βασιλιάς, Φουέρος» — συγκέντρωσε τον λεγκιτιμιστικό κλήρο και τα προνόμια fueros της Χώρας των Βάσκων, της Ναβάρας και τμημάτων της Καταλωνίας και της Αραγκόνας ενάντια στην αστική φιλελεύθερη Καστίλη της αντιβασιλείας. Τρεις καρλιστικοί πόλεμοι (1833–40, 1846–49, 1872–76) θα στιγμάτιζαν τον αιώνα. Ο πρώτος έληξε μόνο με τη Σύμβαση της Βεργάρα το 1839 — τον περίφημο «εναγκαλισμό της Βεργάρα» μεταξύ Εσπαρτέρο και Μαρότο — και ανάγκασε την αντιβασιλεία να στηριχθεί όλο και περισσότερο στο φιλελεύθερο σώμα των αξιωματικών, ξεκινώντας τη μακρά εποχή της στρατιωτικής πολιτικής."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1836,
      era: {
        en: "Mendizábal",
        el: "Μεντιθάμπαλ"
      },
      events: [
        {
          title: {
            en: "Mendizábal disentails the Church",
            el: "Ο Μεντιθάμπαλ αποδεσμεύει τα εκκλησιαστικά κτήματα"
          },
          description: {
            en: "Prime Minister Juan Álvarez Mendizábal nationalises and auctions the lands of the monastic orders — the famous desamortización. Within a decade nearly two thirds of monastic estates are in lay hands.",
            el: "Ο πρωθυπουργός Χουάν Άλβαρες Μεντιθάμπαλ εθνικοποιεί και βγάζει σε πλειστηριασμό τις γαίες των μοναστικών ταγμάτων — η περίφημη desamortización. Μέσα σε μία δεκαετία τα δύο τρίτα σχεδόν της μοναστικής περιουσίας περνούν σε λαϊκά χέρια."
          },
          extendedDescription: {
            en: "Mendizábal's disentailment — extended after 1855 to the civil mortmain by Pascual Madoz — was designed to finance the Carlist War and create a class of liberal landowners loyal to the regime. The auctions enriched a few thousand bourgeois purchasers and accelerated the depopulation of the countryside; the loss of ecclesiastical patronage devastated rural welfare, schools, and hospitals. Spain's liberal revolution, like the French and Italian, was made at the expense of the Church — and would bequeath to the twentieth century an enduring divide between secular and clerical Spain.",
            el: "Η αποδέσμευση του Μεντιθάμπαλ — που επεκτάθηκε μετά το 1855 και στη μη κινητή ιδιοκτησία των δημοσίων φορέων από τον Πασκουάλ Μαδόθ — σχεδιάστηκε για να χρηματοδοτήσει τον καρλιστικό πόλεμο και να δημιουργήσει μια τάξη φιλελεύθερων γαιοκτημόνων πιστών στο καθεστώς. Οι πλειστηριασμοί πλούτισαν λίγες χιλιάδες αστούς αγοραστές και επιτάχυναν την αποψίλωση της υπαίθρου· η απώλεια της εκκλησιαστικής χορηγίας ισοπέδωσε την αγροτική πρόνοια, τα σχολεία και τα νοσοκομεία. Η φιλελεύθερη επανάσταση της Ισπανίας, όπως η γαλλική και η ιταλική, έγινε εις βάρος της Εκκλησίας — και θα κληροδοτούσε στον 20ό αιώνα ένα διαρκές χάσμα μεταξύ κοσμικής και κληρικής Ισπανίας."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1854,
      era: {
        en: "Vicálvaro",
        el: "Βικάλβαρο"
      },
      events: [
        {
          title: {
            en: "The Vicalvarada and the Progressive Biennium",
            el: "Το Βικαλβάρι και η Προοδευτική Διετία"
          },
          description: {
            en: "On the plain of Vicálvaro east of Madrid, Generals Leopoldo O'Donnell and Domingo Dulce face the loyalist forces of Isabella II in an indecisive skirmish, but the political movement they spark — the Vicalvarada — sweeps Espartero into power and opens the Progressive Biennium of 1854–1856.",
            el: "Στην πεδιάδα του Βικάλβαρο ανατολικά της Μαδρίτης, οι στρατηγοί Λεοπόλδο Ο’ Ντόνελ και Δομίνγκο Ντούλθε αντιπαρατίθενται με τις βασιλικές δυνάμεις της Ισαβέλλας Β΄ σε μια αμφίρροπη αψιμαχία, αλλά το πολιτικό κίνημα που πυροδοτούν — η Vicalvarada — φέρνει στην εξουσία τον Εσπαρτέρο και εγκαινιάζει την Προοδευτική Διετία του 1854–1856."
          },
          extendedDescription: {
            en: "Spain's nineteenth century would see fifty pronunciamientos, of which Vicalvaro is only the most theatrical. Madoz's general desamortización of 1855, the great expansion of the railways, the foundation of the Bank of Spain in 1856 — all date from the Bienio Progresista. The political instability also continued: between 1837 and 1868 there were thirty changes of government. Press and pulpit, café and salon, were full of the language of revolution; Galdós would later mine the era for his Episodios Nacionales.",
            el: "Ο 19ος αιώνας της Ισπανίας θα γνώριζε πενήντα πρανουνθιαμιέντος, από τα οποία το Βικάλβαρο είναι μόνο το πιο θεατρικό. Η γενική desamortización του Μαδόθ το 1855, η μεγάλη επέκταση των σιδηροδρόμων, η ίδρυση της Τράπεζας της Ισπανίας το 1856 — όλα χρονολογούνται από τη Bienio Progresista. Η πολιτική αστάθεια συνεχιζόταν επίσης: μεταξύ 1837 και 1868 σημειώθηκαν τριάντα αλλαγές κυβέρνησης. Ο Τύπος και ο άμβωνας, το καφενείο και το σαλόνι, ήταν γεμάτοι από τη γλώσσα της επανάστασης· ο Γκαλντός θα ανέσυρε αργότερα την εποχή στα Εθνικά Επεισόδιά του."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1868,
      era: {
        en: "La Gloriosa",
        el: "Η Ένδοξη"
      },
      events: [
        {
          title: {
            en: "The Glorious Revolution exiles Isabella II",
            el: "Η Ένδοξη Επανάσταση εξορίζει την Ισαβέλλα Β΄"
          },
          description: {
            en: "On 17 September Admiral Topete pronounces at Cádiz; on 28 September Generals Prim and Serrano defeat the royalists at the bridge of Alcolea. Isabella II, swimming at Lekeitio on the Biscay coast, crosses the French frontier on 30 September — and the throne of Spain is empty.",
            el: "Στις 17 Σεπτεμβρίου ο ναύαρχος Τοπέτε εξεγείρεται στο Κάδιθ· στις 28 Σεπτεμβρίου οι στρατηγοί Πριμ και Σεράνο νικούν τους βασιλικούς στη γέφυρα του Αλκολέα. Η Ισαβέλλα Β΄, κάνοντας μπάνιο στη Λεκέιτιο στην ακτή του Μπισκάι, διασχίζει τα γαλλικά σύνορα στις 30 Σεπτεμβρίου — και ο θρόνος της Ισπανίας είναι κενός."
          },
          extendedDescription: {
            en: "The Sexenio Democrático that followed was the most extraordinary constitutional experiment of the Spanish century. A new democratic constitution in 1869 enshrined universal male suffrage and freedom of religion; in 1870 the Cortes elected the Savoyard prince Amadeo I as king. He abdicated in February 1873 after two years, in despair, and the Cortes declared the First Spanish Republic. Four presidents — Figueras, Pi y Margall, Salmerón, Castelar — followed in eleven months, before the army restored the Bourbons in the person of Isabella's son Alfonso XII in December 1874.",
            el: "Η Sexenio Democrático που ακολούθησε ήταν το πιο εκπληκτικό συνταγματικό πείραμα του ισπανικού αιώνα. Νέο δημοκρατικό σύνταγμα το 1869 κατοχύρωνε καθολική ανδρική ψηφοφορία και ελευθερία θρησκείας· το 1870 τα Κορτές εξέλεξαν βασιλιά τον Σαβοϊάρδο πρίγκιπα Αμαδέο Α΄. Παραιτήθηκε τον Φεβρουάριο του 1873 ύστερα από δύο χρόνια, εξαντλημένος, και τα Κορτές διακήρυξαν την Α΄ Ισπανική Δημοκρατία. Τέσσερις πρόεδροι — Φιγκέρας, Πι ι Μαργκάλ, Σαλμερόν, Καστελάρ — διαδέχθηκαν ο ένας τον άλλον σε έντεκα μήνες, ώσπου ο στρατός επανέφερε τους Βουρβόνους στο πρόσωπο του γιου της Ισαβέλλας, Αλφόνσου ΙΒ΄, τον Δεκέμβριο του 1874."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1873,
      era: {
        en: "First Republic",
        el: "Α΄ Δημοκρατία"
      },
      events: [
        {
          title: {
            en: "The First Spanish Republic",
            el: "Η Α΄ Ισπανική Δημοκρατία"
          },
          description: {
            en: "On 11 February the Cortes proclaim the First Republic. Within months Spain is dismembered by the Third Carlist War in the north, the Ten Years War in Cuba, and the cantonalist rising of Cartagena in the south.",
            el: "Στις 11 Φεβρουαρίου τα Κορτές διακηρύσσουν την Α΄ Δημοκρατία. Μέσα σε λίγους μήνες η Ισπανία διαμελίζεται από τον Γ΄ Καρλιστικό Πόλεμο στον βορρά, τον Δεκαετή Πόλεμο στην Κούβα και την καντοναλιστική εξέγερση της Καρταχένας στον νότο."
          },
          extendedDescription: {
            en: "The first republic lasted only eleven months but produced extraordinary ideas: Francisco Pi y Margall's federal republic, Castelar's parliamentary humanism, Salmerón's principled resignation rather than sign a death warrant. Pi y Margall would translate Proudhon and dream of a federation of free Iberian peoples; the cantonalists, declaring Murcia, Andalusia, and Valencia each a sovereign canton, would push the federalism into anarchy. General Pavía's coup of 3 January 1874 — when he marched the Civil Guard into the Cortes — closed the experiment, and a year of conservative republicanism under Serrano led to the Bourbon Restoration that December.",
            el: "Η πρώτη δημοκρατία κράτησε μόλις έντεκα μήνες αλλά παρήγαγε εκπληκτικές ιδέες: την ομοσπονδιακή δημοκρατία του Φρανθίσκο Πι ι Μαργκάλ, τον κοινοβουλευτικό ανθρωπισμό του Καστελάρ, την ηθική παραίτηση του Σαλμερόν αντί να υπογράψει εκτελεστικό ένταλμα. Ο Πι ι Μαργκάλ θα μετέφραζε τον Προυντόν και θα ονειρευόταν ομοσπονδία ελεύθερων ιβηρικών λαών· οι καντοναλιστές, ανακηρύσσοντας τη Μούρθια, την Ανδαλουσία και τη Βαλένθια κυρίαρχα καντόνια, θα έσπρωχναν τον ομοσπονδισμό στην αναρχία. Το πραξικόπημα του στρατηγού Παβία στις 3 Ιανουαρίου 1874 — όταν εισέβαλε στα Κορτές με την Πολιτοφυλακή — έκλεισε το πείραμα, και ένας χρόνος συντηρητικής δημοκρατίας υπό τον Σεράνο οδήγησε στην Παλινόρθωση των Βουρβόνων τον Δεκέμβριο εκείνου του έτους."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1876,
      era: {
        en: "Restoration",
        el: "Παλινόρθωση"
      },
      events: [
        {
          title: {
            en: "The Cánovas Constitution",
            el: "Το Σύνταγμα του Κάνοβας"
          },
          description: {
            en: "Antonio Cánovas del Castillo, architect of the Restoration of Alfonso XII, promulgates a moderate constitution and inaugurates the turno pacífico — the orderly alternation in power of his Conservative and Sagasta's Liberal parties, sustained by managed elections.",
            el: "Ο Αντόνιο Κάνοβας ντελ Καστίγιο, αρχιτέκτων της Παλινόρθωσης του Αλφόνσου ΙΒ΄, διακηρύσσει ένα μετριοπαθές σύνταγμα και εγκαινιάζει το turno pacífico — την τακτική εναλλαγή στην εξουσία του Συντηρητικού του κόμματος και του Φιλελεύθερου του Σαγάστα, στηριγμένη σε χειραγωγημένες εκλογές."
          },
          extendedDescription: {
            en: "The turno worked through the caciques — local political bosses — and the encasillado, the pre-arranged list of constituency results agreed between the two leaders. For a quarter of a century it gave Spain political stability and modest economic growth: railways, banking, the renewed Catalan textile industry, the iron of Biscay. It also failed to integrate the peasantry, the new industrial working class, the regional movements of Catalonia and the Basque Country, or the Carlists. The crisis of 1898 would expose the regime's hollow centre; by 1923 it would be gone.",
            el: "Το turno λειτουργούσε μέσω των caciques — τοπικών πολιτικών αφεντικών — και του encasillado, του προσυμφωνημένου καταλόγου εκλογικών αποτελεσμάτων μεταξύ των δύο αρχηγών. Για ένα τέταρτο του αιώνα έδωσε στην Ισπανία πολιτική σταθερότητα και μέτρια οικονομική ανάπτυξη: σιδηρόδρομοι, τραπεζικός τομέας, η ανανεωμένη καταλανική κλωστοϋφαντουργία, ο σίδηρος του Μπισκάι. Απέτυχε επίσης να ενσωματώσει την αγροτιά, τη νέα βιομηχανική εργατική τάξη, τα περιφερειακά κινήματα της Καταλωνίας και της Χώρας των Βάσκων, ή τους Καρλιστές. Η κρίση του 1898 θα αποκάλυπτε το κούφιο κέντρο του καθεστώτος· ως το 1923 θα είχε εξαφανιστεί."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1879,
      era: {
        en: "Labour movement",
        el: "Εργατικό κίνημα"
      },
      events: [
        {
          title: {
            en: "Pablo Iglesias founds the PSOE",
            el: "Ο Πάμπλο Ιγκλέσιας ιδρύει το PSOE"
          },
          description: {
            en: "On 2 May in a tavern in Madrid, the typesetter Pablo Iglesias and twenty companions found the Spanish Socialist Workers' Party — el PSOE — the oldest left-wing party of southern Europe still in existence.",
            el: "Στις 2 Μαΐου, σε μια ταβέρνα της Μαδρίτης, ο στοιχειοθέτης Πάμπλο Ιγκλέσιας και είκοσι σύντροφοί του ιδρύουν το Ισπανικό Σοσιαλιστικό Εργατικό Κόμμα — το PSOE — το παλαιότερο αριστερό κόμμα της νότιας Ευρώπης που εξακολουθεί να υπάρχει."
          },
          extendedDescription: {
            en: "The Spanish labour movement of the late nineteenth century divided between Iglesias's Marxist socialists, predominantly Castilian and based in mining and printing, and a much larger anarchist movement centred in Catalonia and Andalusia and inspired by Bakunin. The CNT, the great anarcho-syndicalist confederation, would be founded in 1910. The conflict between these two left traditions — and their long alienation from a state that did not give the worker a vote until 1890 — would be the deep undertow of Spain's twentieth century.",
            el: "Το ισπανικό εργατικό κίνημα στα τέλη του 19ου αιώνα διασπάστηκε ανάμεσα στους μαρξιστές σοσιαλιστές του Ιγκλέσιας, κυρίως καστιλιανούς και με βάση τα ορυχεία και την τυπογραφία, και σε ένα πολύ μεγαλύτερο αναρχικό κίνημα με κέντρο την Καταλωνία και την Ανδαλουσία και εμπνευστή τον Μπακούνιν. Η CNT, η μεγάλη αναρχοσυνδικαλιστική συνομοσπονδία, θα ιδρυόταν το 1910. Η σύγκρουση μεταξύ αυτών των δύο αριστερών παραδόσεων — και η μακρά αποξένωσή τους από ένα κράτος που δεν έδωσε στον εργάτη ψήφο παρά μόνο το 1890 — θα ήταν το βαθύ υπόγειο ρεύμα του 20ού αιώνα της Ισπανίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1885,
      era: {
        en: "Regency",
        el: "Αντιβασιλεία"
      },
      events: [
        {
          title: {
            en: "The Regency of María Cristina",
            el: "Η Αντιβασιλεία της Μαρίας Χριστίνας"
          },
          description: {
            en: "On 25 November, Alfonso XII dies of tuberculosis at twenty-seven. His pregnant Habsburg widow María Cristina becomes regent; in May 1886 she gives birth to a posthumous son, Alfonso XIII, born King of Spain.",
            el: "Στις 25 Νοεμβρίου, ο Αλφόνσος ΙΒ΄ πεθαίνει από φυματίωση σε ηλικία είκοσι επτά ετών. Η έγκυος χήρα του από τους Αψβούργους, Μαρία Χριστίνα, γίνεται αντιβασίλισσα· τον Μάιο του 1886 γεννά μετά θάνατον γιο, τον Αλφόνσο ΙΓ΄, που γεννιέται βασιλιάς της Ισπανίας."
          },
          extendedDescription: {
            en: "The Pacto del Pardo — the secret agreement between Cánovas and Sagasta on the death of Alfonso XII — committed both parties to defend the regency. Under María Cristina the turno worked smoothly: universal male suffrage was restored in 1890, jury trials in 1888, civil marriage in 1889, and Catalan economic life flowered with the new factories of Sabadell and Terrassa. But Cuba was burning again from 1895, and on her son's sixteenth birthday in 1902 the regent would hand over a kingdom shaken to its foundations by the Disaster of '98.",
            el: "Το Pacto del Pardo — η μυστική συμφωνία ανάμεσα στον Κάνοβας και στον Σαγάστα στον θάνατο του Αλφόνσου ΙΒ΄ — δέσμευε και τα δύο κόμματα να υπερασπιστούν την αντιβασιλεία. Υπό τη Μαρία Χριστίνα το turno λειτουργούσε ομαλά: η καθολική ανδρική ψηφοφορία επαναφέρθηκε το 1890, οι δίκες με ενόρκους το 1888, ο πολιτικός γάμος το 1889, και η καταλανική οικονομία άνθησε με τα νέα εργοστάσια του Σαμπαντέλ και της Τεράσα. Όμως η Κούβα φλεγόταν ξανά από το 1895, και στα δεκαεξηνύχτατου γιου της το 1902 η αντιβασίλισσα θα παρέδιδε ένα βασίλειο κλονισμένο ως τα θεμέλιά του από την Καταστροφή του ’98."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1895,
      era: {
        en: "Cuban war",
        el: "Πόλεμος της Κούβας"
      },
      events: [
        {
          title: {
            en: "The Grito de Baire and the Cuban war",
            el: "Το Grito de Baire και ο πόλεμος της Κούβας"
          },
          description: {
            en: "On 24 February the call to arms is raised at Baire in eastern Cuba and the war of independence begins under the leadership of José Martí, Máximo Gómez, and Antonio Maceo. Martí dies in battle on 19 May; the rebellion deepens.",
            el: "Στις 24 Φεβρουαρίου η κλήση στα όπλα δίνεται στο Μπαϊρέ της ανατολικής Κούβας και ο πόλεμος της ανεξαρτησίας αρχίζει υπό την ηγεσία του Χοσέ Μαρτί, του Μάξιμο Γκόμεθ και του Αντόνιο Μασέο. Ο Μαρτί πέφτει στη μάχη στις 19 Μαΐου· η εξέγερση βαθαίνει."
          },
          extendedDescription: {
            en: "Spain dispatched General Valeriano Weyler, whose reconcentración policy herded Cuban peasants into garrisoned towns to deny food to the insurgents, killing tens of thousands by disease and starvation. The American 'yellow press' of Hearst and Pulitzer fed the United States with stories of Spanish atrocity. The destruction of the battleship USS Maine in Havana harbour on 15 February 1898 provided the casus belli, and in April Congress declared war.",
            el: "Η Ισπανία έστειλε τον στρατηγό Βαλεριάνο Βέιλερ, του οποίου η πολιτική reconcentración συγκέντρωσε τους κουβανούς αγρότες σε φρουρούμενες πόλεις για να στερήσει τους αντάρτες από τρόφιμα, σκοτώνοντας δεκάδες χιλιάδες από αρρώστιες και πείνα. Ο αμερικανικός «κίτρινος Τύπος» του Χερστ και του Πούλιτζερ τροφοδοτούσε τις ΗΠΑ με ιστορίες ισπανικών θηριωδιών. Η καταστροφή του θωρηκτού USS Maine στο λιμάνι της Αβάνας στις 15 Φεβρουαρίου 1898 παρείχε το casus belli, και τον Απρίλιο το Κογκρέσο κήρυξε πόλεμο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1898,
      era: {
        en: "Disaster of '98",
        el: "Καταστροφή του '98"
      },
      events: [
        {
          title: {
            en: "Cavite, Santiago, and the loss of empire",
            el: "Κάβιτε, Σαντιάγο, και η απώλεια της αυτοκρατορίας"
          },
          description: {
            en: "On 1 May, Commodore Dewey destroys the Spanish Pacific squadron at Manila Bay. On 3 July, Admiral Cervera's Atlantic fleet is shattered off Santiago de Cuba. By the Treaty of Paris in December, Spain cedes Cuba, Puerto Rico, the Philippines, and Guam — and the empire of Charles V is finally extinct.",
            el: "Στις 1 Μαΐου, ο κομοδώρος Ντιούι καταστρέφει την ισπανική μοίρα του Ειρηνικού στον Κόλπο της Μανίλας. Στις 3 Ιουλίου, ο ατλαντικός στόλος του ναυάρχου Θερβέρα συντρίβεται ανοιχτά του Σαντιάγο της Κούβας. Με τη Συνθήκη του Παρισιού τον Δεκέμβριο, η Ισπανία παραχωρεί την Κούβα, το Πουέρτο Ρίκο, τις Φιλιππίνες και το Γκουάμ — και η αυτοκρατορία του Καρόλου Ε΄ σβήνει τελεσίδικα."
          },
          extendedDescription: {
            en: "Cervera's fleet had sailed knowing it was a sacrifice; his ships were obsolete and outgunned. The Disaster of '98 — el Desastre — sent the Spanish nation into a long examination of conscience. From it came the literary 'Generation of '98' — Miguel de Unamuno, Pío Baroja, Antonio Machado, Azorín, Ramiro de Maeztu — and the regenerationist political thought of Joaquín Costa: 'school and pantry' to renew the country, 'double-lock the Cid's tomb' against the old militarist Spain. The twentieth century began for Spain in the rubble of empire.",
            el: "Ο στόλος του Θερβέρα είχε αποπλεύσει γνωρίζοντας ότι ήταν θυσία· τα πλοία του ήταν παλαιωμένα και πυροβολικά ασθενέστερα. Η Καταστροφή του ’98 — el Desastre — οδήγησε το ισπανικό έθνος σε μια μακρά αυτοεξέταση. Από αυτήν προέκυψε η λογοτεχνική «Γενιά του ’98» — Μιγκέλ ντε Ουναμούνο, Πίο Μπαρόχα, Αντόνιο Ματσάδο, Αθορίν, Ραμίρο ντε Μαέθτου — και η αναγεννησιακή πολιτική σκέψη του Χοακίν Κόστα: «σχολείο και κελάρι» για να ανανεωθεί η χώρα, «διπλοκλειδώστε τον τάφο του Σιντ» κατά της παλαιάς στρατιωτικής Ισπανίας. Ο εικοστός αιώνας άρχισε για την Ισπανία στα ερείπια της αυτοκρατορίας."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
