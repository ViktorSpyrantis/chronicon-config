/** Prehistoric & Ancient Gaul — Προϊστορική & Αρχαία Γαλατία · French History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const PREHISTORIC_ANCIENT_GAUL = {
  id: "prehistoric-ancient-gaul" as const,
  label: {
    en: "Prehistoric & Ancient Gaul",
    el: "Προϊστορική & Αρχαία Γαλατία"
  },
  supertitle: {
    en: "Gallia",
    el: "Γαλατία"
  },
  title: {
    en: "Prehistoric & Ancient Gaul",
    el: "Προϊστορική & Αρχαία Γαλατία"
  },
  subtitle: {
    en: "From the Palaeolithic painters of Chauvet and Lascaux and the megaliths of Carnac through the Hallstatt and La Tène Celts, the Greek foundation of Massalia, Caesar's conquest at Alesia, and four centuries of Gallo-Roman civilisation to the twilight of Roman Gaul on the eve of the great migrations. Slide across the millennia to read the major events that shaped Gaul before France.",
    el: "Από τους παλαιολιθικούς ζωγράφους του Σωβέ και του Λασκώ και τους μεγαλίθους του Καρνάκ μέσα από τους Κέλτες του Χάλσταντ και της Λα Τεν, την ελληνική ίδρυση της Μασσαλίας, την κατάκτηση του Καίσαρα στην Αλέσια και τέσσερις αιώνες γαλατορωμαϊκού πολιτισμού έως το λυκόφως της Ρωμαϊκής Γαλατίας στις παραμονές των μεγάλων μεταναστεύσεων. Μετακινηθείτε ανάμεσα στις χιλιετίες για να διαβάσετε τα γεγονότα που διαμόρφωσαν τη Γαλατία πριν από τη Γαλλία."
  },
  menuDescription: {
    en: "Cave painters, the stones of Carnac, Vercingetorix, and the last emperors of the West.",
    el: "Ζωγράφοι των σπηλαίων, οι λίθοι του Καρνάκ, ο Βερκινγετόριγας κι οι τελευταίοι αυτοκράτορες της Δύσης."
  },
  footerLabel: {
    en: "Prehistoric & Ancient Gaul · before the 5th century CE",
    el: "Προϊστορική & Αρχαία Γαλατία · πριν από τον 5ο αιώνα μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Prehistoric & Ancient Gaul",
    el: "Προϊστορική & Αρχαία Γαλατία"
  },
  theme: THEMES.sage,
  timeline: [
    {
      year: -36000,
      era: {
        en: "Upper Palaeolithic",
        el: "Ανώτερη Παλαιολιθική"
      },
      events: [
        {
          title: {
            en: "The painters of the Chauvet Cave",
            el: "Οι ζωγράφοι του Σπηλαίου Σωβέ"
          },
          description: {
            en: "In the limestone gorges of the Ardèche, Aurignacian artists draw lions, rhinoceroses, and horses on the walls of the Chauvet Cave — among the earliest figurative art known.",
            el: "Στα ασβεστολιθικά φαράγγια της Αρντές, ωρινιάκιοι καλλιτέχνες ζωγραφίζουν λιοντάρια, ρινόκερους και άλογα στα τοιχώματα του Σπηλαίου Σωβέ — από τα παλαιότερα γνωστά δείγματα παραστατικής τέχνης."
          },
          extendedDescription: {
            en: "Radiocarbon dates place the oldest images in the cave to around 36,000 years ago, contemporary with the spread of anatomically modern humans across Europe. The Chauvet bestiary — predominantly dangerous animals rather than game species — and the use of shading and perspective overturn the old view that Palaeolithic art evolved gradually from crude beginnings.",
            el: "Οι ραδιοχρονολογήσεις τοποθετούν τις παλαιότερες παραστάσεις γύρω στα 36.000 χρόνια πριν, σύγχρονες με την εξάπλωση των ανατομικά σύγχρονων ανθρώπων στην Ευρώπη. Το ζωολόγιο του Σωβέ — κυρίως επικίνδυνα ζώα και όχι θηράματα — και η χρήση σκίασης και προοπτικής ανατρέπουν την παλιά αντίληψη ότι η παλαιολιθική τέχνη εξελίχθηκε σταδιακά από πρωτόγονες αρχές."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -17000,
      era: {
        en: "Magdalenian",
        el: "Μαγδαληναία"
      },
      events: [
        {
          title: {
            en: "The Hall of the Bulls at Lascaux",
            el: "Η Αίθουσα των Ταύρων στο Λασκώ"
          },
          description: {
            en: "Magdalenian hunters paint the great galleries of Lascaux in the Vézère valley of the Dordogne, depicting aurochs, horses, and stags in a coordinated programme of monumental images.",
            el: "Μαγδαληνιακοί κυνηγοί ζωγραφίζουν τις μεγάλες στοές του Λασκώ στην κοιλάδα της Βεζέρ της Ντορντόν, παριστάνοντας αγριοβόδια, άλογα και ελάφια σε ένα οργανωμένο σύνολο μνημειακών παραστάσεων."
          },
          extendedDescription: {
            en: "Discovered in 1940 by four boys following a dog down a fox-hole, Lascaux contains nearly two thousand figures across some seven hundred metres of galleries. The Vézère valley as a whole, with sites such as Cro-Magnon, La Madeleine, and Font-de-Gaume, would give its name to two of the great phases of the European Upper Palaeolithic.",
            el: "Ανακαλυμμένο το 1940 από τέσσερα αγόρια που ακολουθούσαν έναν σκύλο σε μια αλεπότρυπα, το Λασκώ περιέχει σχεδόν δύο χιλιάδες μορφές σε επτακόσια περίπου μέτρα στοών. Η κοιλάδα της Βεζέρ συνολικά, με θέσεις όπως ο Κρο-Μανιόν, η Μαντλέν και το Φον-ντε-Γκωμ, θα δώσει το όνομά της σε δύο από τις μεγάλες φάσεις της ευρωπαϊκής Ανώτερης Παλαιολιθικής."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Lascaux_painting.jpg?width=1024",
            alt: {
              en: "The cave paintings of Lascaux",
              el: "Οι βραχογραφίες του Λασκώ"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -5500,
      era: {
        en: "Early Neolithic",
        el: "Πρώιμη Νεολιθική"
      },
      events: [
        {
          title: {
            en: "Farming spreads across Gaul",
            el: "Η γεωργία εξαπλώνεται στη Γαλατία"
          },
          description: {
            en: "Two streams of Neolithic colonists converge on what will become Gaul: the Cardial Ware peoples of the Mediterranean coast and the Linearbandkeramik (LBK) farmers of the Rhine and Paris Basin.",
            el: "Δύο ρεύματα νεολιθικών αποίκων συγκλίνουν σε αυτό που θα γίνει Γαλατία: οι λαοί της Καρντιανής Κεραμικής στις μεσογειακές ακτές και οι γεωργοί της Γραμμικοταινιωτής Κεραμικής (LBK) στον Ρήνο και τη λεκάνη του Παρισιού."
          },
          extendedDescription: {
            en: "Ancient-DNA analyses confirm a substantial influx of Anatolian-derived farmers carrying wheat, barley, cattle, sheep, and pigs, who slowly mixed with indigenous Mesolithic foragers. By 5000 BC the long-houses of the LBK reach the Seine, and the first communal monuments — passage tombs, dolmens, and the so-called Bougon mounds — begin to appear across the west.",
            el: "Αναλύσεις αρχαίου DNA επιβεβαιώνουν σημαντική εισροή γεωργών ανατολιακής καταγωγής, που έφεραν σιτάρι, κριθάρι, βοοειδή, πρόβατα και χοίρους και αναμίχθηκαν σταδιακά με τους αυτόχθονες μεσολιθικούς τροφοσυλλέκτες. Γύρω στο 5000 π.Χ. τα μακρόστενα σπίτια της LBK φτάνουν στον Σηκουάνα και αρχίζουν να εμφανίζονται στη δύση οι πρώτοι κοινοτικοί τάφοι — θαλαμωτοί τάφοι, ντολμέν και οι λεγόμενοι τύμβοι του Μπουγκόν."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -4500,
      era: {
        en: "Middle Neolithic",
        el: "Μέση Νεολιθική"
      },
      events: [
        {
          title: {
            en: "The alignments of Carnac",
            el: "Οι ευθυγραμμίσεις του Καρνάκ"
          },
          description: {
            en: "On the southern coast of Brittany, Neolithic communities raise more than three thousand standing stones in long parallel rows at Carnac, alongside dolmens and tumuli that mark the dead.",
            el: "Στις νότιες ακτές της Βρετάνης, νεολιθικές κοινότητες υψώνουν περισσότερους από τρεις χιλιάδες όρθιους λίθους σε μακριές παράλληλες σειρές στο Καρνάκ, μαζί με ντολμέν και τύμβους που σηματοδοτούν τους νεκρούς."
          },
          extendedDescription: {
            en: "The Carnac alignments — Ménec, Kermario, Kerlescan — are part of a wider Armorican megalithic tradition that includes the Grand Menhir Brisé of Locmariaquer, originally some twenty metres tall. The purpose of the rows remains debated: astronomical observatories, processional ways, and territorial markers have all been proposed.",
            el: "Οι ευθυγραμμίσεις του Καρνάκ — Μενέκ, Κερμαριό, Κερλεσκάν — εντάσσονται στην ευρύτερη μεγαλιθική παράδοση της Αρμορικής, που περιλαμβάνει τον Μέγα Σπασμένο Μενχίρ του Λοκμαριακέ, αρχικά ύψους περίπου είκοσι μέτρων. Ο σκοπός των σειρών παραμένει αντικείμενο συζήτησης: αστρονομικά παρατηρητήρια, λιτανευτικές οδοί και ορόσημα έχουν προταθεί."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -2200,
      era: {
        en: "Early Bronze Age",
        el: "Πρώιμη Εποχή του Χαλκού"
      },
      events: [
        {
          title: {
            en: "Bell Beaker bronzes reach Gaul",
            el: "Τα μπρούτζινα της Κεραμικής Καμπάνας φτάνουν στη Γαλατία"
          },
          description: {
            en: "Bell Beaker communities, riding the steppe-derived genetic transformation of Western Europe, spread bronze metallurgy across Gaul. New warrior burials with daggers and archer's wristguards appear from the Rhône to the Channel.",
            el: "Οι κοινότητες της Κεραμικής Καμπάνας, με υπόβαθρο τη γενετική μεταμόρφωση της Δυτικής Ευρώπης από τη στέπα, διαδίδουν τη μεταλλουργία του χαλκού σε όλη τη Γαλατία. Νέες πολεμικές ταφές με εγχειρίδια και βραχιόλια τοξότη εμφανίζονται από τον Ροδανό έως τη Μάγχη."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -800,
      era: {
        en: "Early Iron Age (Hallstatt)",
        el: "Πρώιμη Εποχή του Σιδήρου (Χάλσταντ)"
      },
      events: [
        {
          title: {
            en: "Hallstatt princes of eastern Gaul",
            el: "Οι ηγεμόνες του Χάλσταντ στην ανατολική Γαλατία"
          },
          description: {
            en: "The Hallstatt culture spreads west from the Eastern Alps into Burgundy and the upper Rhône. Iron weapons replace bronze, and a warrior aristocracy buries its dead under great tumuli with four-wheeled wagons and imported wine sets.",
            el: "Ο πολιτισμός του Χάλσταντ εξαπλώνεται από τις Ανατολικές Άλπεις προς τη Βουργουνδία και τον άνω Ροδανό. Τα σιδερένια όπλα αντικαθιστούν τον μπρούτζο, και μια πολεμική αριστοκρατία θάβει τους νεκρούς της κάτω από μεγάλους τύμβους με τετράτροχα άρματα και εισαγόμενα οινικά σκεύη."
          },
          extendedDescription: {
            en: "The princely burial of Vix, near Châtillon-sur-Seine, would dramatise the wealth of these chiefs: the tomb of a woman buried around 500 BC contained a Greek bronze krater more than 1.6 metres tall, the largest known piece of Greek metalwork, evidence of intense trade with Massalia and the Etruscans.",
            el: "Η ηγεμονική ταφή της Βιξ, κοντά στο Σατιγιόν-σιρ-Σεν, θα δραματοποιήσει τον πλούτο αυτών των αρχηγών: ο τάφος μιας γυναίκας που θάφτηκε γύρω στο 500 π.Χ. περιείχε έναν ελληνικό χάλκινο κρατήρα ύψους άνω του 1,6 μέτρου, το μεγαλύτερο γνωστό κομμάτι ελληνικής μεταλλοτεχνίας, τεκμήριο εντατικού εμπορίου με τη Μασσαλία και τους Ετρούσκους."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -600,
      era: {
        en: "Greek Colonisation",
        el: "Ελληνικός Αποικισμός"
      },
      events: [
        {
          title: {
            en: "Phocaeans found Massalia",
            el: "Οι Φωκαείς ιδρύουν τη Μασσαλία"
          },
          description: {
            en: "Greek colonists from Phocaea in Ionia found Massalia (Marseille) at the mouth of the Rhône, the first city of what will become Gaul. The legend of Gyptis and Protis remembers a marriage alliance with the local Segobrigian chief Nannus.",
            el: "Έλληνες άποικοι από τη Φώκαια της Ιωνίας ιδρύουν τη Μασσαλία στις εκβολές του Ροδανού, την πρώτη πόλη αυτού που θα γίνει Γαλατία. Ο θρύλος της Γύπτιδας και του Πρώτιδος θυμάται έναν συνοικέσιο γάμο με τον τοπικό Σεγοβριγικό αρχηγό Νάνο."
          },
          extendedDescription: {
            en: "From Massalia the Greeks plant a string of trading colonies along the coast — Agathe (Agde), Nikaia (Nice), Antipolis (Antibes), Olbia, and Emporion further south — and push Mediterranean goods, the vine, the olive, and the alphabet into the Celtic hinterland. The voyage of Pytheas of Massalia around 325 BC will take Greek geography as far as Britain and the Arctic.",
            el: "Από τη Μασσαλία οι Έλληνες ιδρύουν σειρά εμπορικών αποικιών κατά μήκος της ακτής — Αγάθη (Αγκντ), Νίκαια (Νίκαια), Αντίπολις (Αντίμπ), Όλβια και Εμπόριον νοτιότερα — και διοχετεύουν μεσογειακά αγαθά, την άμπελο, την ελιά και το αλφάβητο στην κελτική ενδοχώρα. Το ταξίδι του Πυθέα του Μασσαλιώτη γύρω στο 325 π.Χ. θα μεταφέρει την ελληνική γεωγραφία ως τη Βρετανία και την Αρκτική."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -450,
      era: {
        en: "La Tène Culture",
        el: "Πολιτισμός της Λα Τεν"
      },
      events: [
        {
          title: {
            en: "The flowering of La Tène art",
            el: "Η ακμή της τέχνης της Λα Τεν"
          },
          description: {
            en: "A new Celtic style emerges around the Marne and the Moselle: curvilinear ornament of palmettes and tendrils, applied to swords, scabbards, gold torcs, and bronze flagons. It will be the visual language of the European Iron Age for four centuries.",
            el: "Ένα νέο κελτικό ύφος αναδύεται στις περιοχές του Μάρνη και του Μοζέλα: καμπυλόγραμμη διακόσμηση από ανθέμια και έλικες, που εφαρμόζεται σε ξίφη, θηκάρια, χρυσά τορκ και χάλκινες οινοχόες. Θα είναι η εικαστική γλώσσα της ευρωπαϊκής Εποχής του Σιδήρου για τέσσερις αιώνες."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -390,
      era: {
        en: "Celtic Expansion",
        el: "Κελτική Επέκταση"
      },
      events: [
        {
          title: {
            en: "Brennus and the sack of Rome",
            el: "Ο Βρέννος και η άλωση της Ρώμης"
          },
          description: {
            en: "A war-band of Senones under Brennus crosses the Alps, routs a Roman army at the Allia, and sacks Rome itself. Only the Capitol holds out. The traditional date, 390 BC, will haunt Roman memory for centuries.",
            el: "Πολεμικό σώμα Σένωνων με αρχηγό τον Βρέννο διασχίζει τις Άλπεις, συντρίβει ρωμαϊκό στρατό στον Αλλία και αλώνει την ίδια τη Ρώμη. Μόνο το Καπιτώλιο αντέχει. Η παραδοσιακή χρονολογία, 390 π.Χ., θα στοιχειώνει τη ρωμαϊκή μνήμη για αιώνες."
          },
          extendedDescription: {
            en: "The Gallic sack is the founding trauma of Roman foreign policy: Polybius traces Rome's later wariness of the Cisalpine Gauls and Caesar's projection of a Gallic threat back to this catastrophe. Brennus' alleged words at the weighing of the ransom — vae victis, 'woe to the conquered' — would become a Latin proverb.",
            el: "Η γαλατική άλωση είναι το ιδρυτικό τραύμα της ρωμαϊκής εξωτερικής πολιτικής: ο Πολύβιος ανάγει στη συμφορά αυτή τη μετέπειτα δυσπιστία της Ρώμης απέναντι στους Κισαλπινούς Γαλάτες και την προβολή της γαλατικής απειλής από τον Καίσαρα. Τα λόγια του Βρέννου κατά τη ζύγιση των λύτρων — vae victis, «αλίμονο στους ηττημένους» — θα γίνουν λατινική παροιμία."
          },
          category: "military"
        }
      ]
    },
    {
      year: -125,
      era: {
        en: "Roman Conquest of the South",
        el: "Ρωμαϊκή Κατάκτηση του Νότου"
      },
      events: [
        {
          title: {
            en: "Rome carves out Gallia Narbonensis",
            el: "Η Ρώμη δημιουργεί τη Γαλατία τη Ναρβωνησία"
          },
          description: {
            en: "Called by Massalia for help against the Saluvii and the Arverni, the consul Sextius Calvinus and his successors crush the southern Gauls. By 121 BC Quintus Fabius Maximus has earned the name Allobrogicus, and Rome organises the new province of Gallia Transalpina, soon called Narbonensis.",
            el: "Καλεσμένος από τη Μασσαλία για βοήθεια κατά των Σαλούβιων και των Αρβέρνων, ο ύπατος Σέξτιος Καλβίνος και οι διάδοχοί του συντρίβουν τους νότιους Γαλάτες. Μέχρι το 121 π.Χ. ο Κόιντος Φάβιος Μάξιμος έχει κερδίσει το όνομα Αλλοβρογικός, και η Ρώμη οργανώνει τη νέα επαρχία της Διαλπίνου Γαλατίας, που σύντομα θα ονομαστεί Ναρβωνησία."
          },
          extendedDescription: {
            en: "The colonia of Narbo Martius is founded in 118 BC, the first Roman citizen colony beyond the Alps. The Via Domitia is laid out to link Italy with Spain across the new province, and the wine, oil, and grain of southern Gaul are drawn into the imperial economy. Cicero would call Narbonensis 'rather a piece of Italy than a province'.",
            el: "Η αποικία της Νάρβωνος του Άρεως (Narbo Martius) ιδρύεται το 118 π.Χ., η πρώτη ρωμαϊκή αποικία πολιτών πέραν των Άλπεων. Χαράσσεται η Οδός Δομιτία για να συνδέσει την Ιταλία με την Ισπανία μέσω της νέας επαρχίας, και το κρασί, το λάδι και το σιτάρι της νότιας Γαλατίας εντάσσονται στην αυτοκρατορική οικονομία. Ο Κικέρων θα την αποκαλέσει «μάλλον κομμάτι της Ιταλίας παρά επαρχία»."
          },
          category: "political"
        }
      ]
    },
    {
      year: -58,
      era: {
        en: "Caesar's Gallic Wars",
        el: "Οι Γαλατικοί Πόλεμοι του Καίσαρα"
      },
      events: [
        {
          title: {
            en: "Caesar marches against the Helvetii",
            el: "Ο Καίσαρ βαδίζει κατά των Ελβετίων"
          },
          description: {
            en: "Julius Caesar, proconsul of Cisalpine Gaul and Illyricum, halts the migration of the Helvetii at Bibracte and pushes Ariovistus' Suebi back across the Rhine. The Gallic Wars have begun.",
            el: "Ο Ιούλιος Καίσαρ, ανθύπατος της Κισαλπίνης Γαλατίας και του Ιλλυρικού, αναχαιτίζει τη μετανάστευση των Ελβετίων στη Βιβράκτη και απωθεί τους Σουήβους του Αριοβίστου πίσω από τον Ρήνο. Οι Γαλατικοί Πόλεμοι έχουν αρχίσει."
          },
          category: "military"
        }
      ]
    },
    {
      year: -52,
      era: {
        en: "Conquest of Gaul",
        el: "Κατάκτηση της Γαλατίας"
      },
      events: [
        {
          title: {
            en: "Alesia: the fall of Vercingetorix",
            el: "Αλέσια: η πτώση του Βερκινγετόριγα"
          },
          description: {
            en: "After a year of pan-Gallic revolt led by the Arvernian Vercingetorix, Caesar besieges him at Alesia behind a double line of fortifications. The relief army of all Gaul is broken, Vercingetorix surrenders, and the independence of Gaul is over.",
            el: "Μετά από ένα έτος πανγαλατικής εξέγερσης με επικεφαλής τον Αρβέρνο Βερκινγετόριγα, ο Καίσαρ τον πολιορκεί στην Αλέσια πίσω από διπλή γραμμή οχυρώσεων. Ο στρατός βοηθείας ολόκληρης της Γαλατίας συντρίβεται, ο Βερκινγετόριξ παραδίδεται και η ανεξαρτησία της Γαλατίας έχει τελειώσει."
          },
          extendedDescription: {
            en: "Caesar's own Commentarii de bello Gallico — both campaign report and political pamphlet — would become the canonical Latin account and a foundational text of the Western military tradition. The captured Vercingetorix was paraded in Caesar's triumph of 46 BC and then executed in the Tullianum. He would later be reinvented in the nineteenth century as the first hero of the French nation.",
            el: "Τα ίδια τα Σχόλια του Καίσαρα για τον Γαλατικό Πόλεμο — ταυτόχρονα εκστρατευτική έκθεση και πολιτικό πάμφλετ — θα γίνουν η κανονική λατινική αφήγηση και θεμελιώδες κείμενο της δυτικής στρατιωτικής παράδοσης. Ο αιχμάλωτος Βερκινγετόριξ παρελαύνει στον θρίαμβο του Καίσαρα το 46 π.Χ. και στη συνέχεια εκτελείται στο Τυλλιανό. Τον δέκατο ένατο αιώνα θα ξαναεπινοηθεί ως ο πρώτος ήρωας του γαλλικού έθνους."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Vercing%C3%A9torix_stat%C3%A8re_Gallica_avers.jpg?width=1024",
            alt: {
              en: "Gallic gold stater bearing the name of Vercingetorix",
              el: "Χρυσός γαλατικός στατήρας με το όνομα του Βερκιγγετόριξ"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -27,
      era: {
        en: "Augustan Reorganisation",
        el: "Αυγούστεια Αναδιοργάνωση"
      },
      events: [
        {
          title: {
            en: "Augustus divides the Three Gauls",
            el: "Ο Αύγουστος διαιρεί τις Τρεις Γαλατίες"
          },
          description: {
            en: "Augustus reorganises the conquered territories into the imperial provinces of Aquitania, Lugdunensis, and Belgica — the Tres Galliae — alongside the older senatorial province of Narbonensis. Lugdunum (Lyon) becomes the capital of the Gauls.",
            el: "Ο Αύγουστος αναδιοργανώνει τα κατακτημένα εδάφη στις αυτοκρατορικές επαρχίες Ακυτανίας, Λουγδουνησίας και Βελγικής — τις Tres Galliae — μαζί με την παλαιότερη συγκλητική επαρχία της Ναρβωνησίας. Το Λούγδουνον (Λυών) γίνεται πρωτεύουσα των Γαλατιών."
          },
          extendedDescription: {
            en: "In 12 BC his stepson Drusus dedicates the Altar of Rome and Augustus at the confluence of the Rhône and Saône, where delegates of the sixty Gallic civitates meet every August for the Concilium Galliarum. The cult of the emperor, served by a single Gaul elected as sacerdos, knits the new provinces into the imperial system.",
            el: "Το 12 π.Χ. ο θετός γιος του Δρούσος εγκαινιάζει τον Βωμό της Ρώμης και του Αυγούστου στη συμβολή Ροδανού και Σαόνας, όπου εκπρόσωποι των εξήντα γαλατικών civitates συναντώνται κάθε Αύγουστο στο Concilium Galliarum. Η λατρεία του αυτοκράτορα, με υπεύθυνο έναν Γαλάτη εκλεγμένο ως sacerdos, ενώνει τις νέες επαρχίες με το αυτοκρατορικό σύστημα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 21,
      era: {
        en: "Early Empire",
        el: "Πρώιμη Αυτοκρατορία"
      },
      events: [
        {
          title: {
            en: "The revolt of Florus and Sacrovir",
            el: "Η εξέγερση του Φλώρου και του Σακροβίρου"
          },
          description: {
            en: "Crushed by Roman debt and taxes, the Treveri under Julius Florus and the Aedui under Julius Sacrovir rise in revolt. Tiberius' general Gaius Silius defeats them near Augustodunum (Autun) and the rising collapses within months.",
            el: "Καταπιεσμένοι από ρωμαϊκά χρέη και φόρους, οι Τρέβηροι με τον Ιούλιο Φλώρο και οι Αίδουοι με τον Ιούλιο Σακρόβιρο εξεγείρονται. Ο στρατηγός του Τιβερίου Γάιος Σίλιος τους συντρίβει κοντά στο Augustodunum (Ωτέν) και η εξέγερση καταρρέει μέσα σε μήνες."
          },
          category: "military"
        }
      ]
    },
    {
      year: 48,
      era: {
        en: "Claudian Integration",
        el: "Κλαυδιανή Ενσωμάτωση"
      },
      events: [
        {
          title: {
            en: "Claudius admits Gauls to the Senate",
            el: "Ο Κλαύδιος δέχεται Γαλάτες στη Σύγκλητο"
          },
          description: {
            en: "Born at Lugdunum, the emperor Claudius delivers a speech in the Senate — preserved both by Tacitus and on the bronze Lyon Tablet — granting senatorial eligibility to leading men of Gallia Comata. Gauls now sit among the patres of Rome.",
            el: "Γεννημένος στο Λούγδουνον, ο αυτοκράτορας Κλαύδιος εκφωνεί λόγο στη Σύγκλητο — που σώζεται τόσο από τον Τάκιτο όσο και στη χάλκινη πινακίδα της Λυών — απονέμοντας στους ηγέτες της μακρομάλλης Γαλατίας το δικαίωμα της συγκλητικής ιδιότητας. Γαλάτες κάθονται πλέον ανάμεσα στους patres της Ρώμης."
          },
          category: "political"
        }
      ]
    },
    {
      year: 70,
      era: {
        en: "Year of the Four Emperors",
        el: "Έτος των Τεσσάρων Αυτοκρατόρων"
      },
      events: [
        {
          title: {
            en: "The Batavian revolt",
            el: "Η εξέγερση των Βατάβων"
          },
          description: {
            en: "Exploiting the civil wars after Nero, the Batavian auxiliary commander Julius Civilis leads a great Rhine rising joined by the Treveri Julius Classicus and Julius Tutor. They proclaim an Imperium Galliarum at Trier before Cerialis crushes them on behalf of Vespasian.",
            el: "Εκμεταλλευόμενος τους εμφύλιους πολέμους μετά τον Νέρωνα, ο Βάταβος διοικητής βοηθητικών Ιούλιος Κιβίλης ηγείται μεγάλης εξέγερσης στον Ρήνο, στην οποία συμμετέχουν οι Τρέβηροι Ιούλιος Κλασσικός και Ιούλιος Τούτωρ. Ανακηρύσσουν Imperium Galliarum στην Τρίερ, προτού ο Κεριάλιος τους συντρίψει εκ μέρους του Βεσπασιανού."
          },
          category: "military"
        }
      ]
    },
    {
      year: 177,
      era: {
        en: "Antonine Gaul",
        el: "Αντωνίνεια Γαλατία"
      },
      events: [
        {
          title: {
            en: "The martyrs of Lyon",
            el: "Οι μάρτυρες της Λυών"
          },
          description: {
            en: "During the games of the Concilium Galliarum at Lugdunum, the Christian communities of Lyon and Vienne are denounced and tried. Forty-eight believers, including the slave-girl Blandina and the bishop Pothinus, die in the amphitheatre.",
            el: "Στους αγώνες του Concilium Galliarum στο Λούγδουνον, οι χριστιανικές κοινότητες της Λυών και της Βιέννης καταγγέλλονται και δικάζονται. Σαράντα οκτώ πιστοί, μεταξύ των οποίων η δούλη Βλανδίνα και ο επίσκοπος Ποθεινός, πεθαίνουν στο αμφιθέατρο."
          },
          extendedDescription: {
            en: "Their letter to the churches of Asia, preserved by Eusebius, is one of the earliest and most vivid martyr-acts. Eirenaios (Irenaeus), Pothinus' successor as bishop of Lyon and a pupil of Polycarp of Smyrna, would soon write Adversus Haereses, the foundational work of Latin theology in Gaul.",
            el: "Η επιστολή τους προς τις εκκλησίες της Ασίας, που διασώζει ο Ευσέβιος, είναι μία από τις παλαιότερες και πιο ζωντανές πράξεις μαρτύρων. Ο Ειρηναίος, διάδοχος του Ποθεινού ως επισκόπου Λυών και μαθητής του Πολυκάρπου Σμύρνης, θα γράψει σύντομα το Adversus Haereses, το θεμελιώδες έργο της λατινικής θεολογίας στη Γαλατία."
          },
          category: "religious"
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
            en: "Postumus proclaims the Gallic Empire",
            el: "Ο Πόστουμος ανακηρύσσει τη Γαλατική Αυτοκρατορία"
          },
          description: {
            en: "After Valerian's capture by the Persians and a Frankish breakthrough on the Rhine, the legionary commander Marcus Cassianius Latinius Postumus is acclaimed emperor at Cologne. His Imperium Galliarum will rule Gaul, Britain, and Spain for thirteen years.",
            el: "Μετά την αιχμαλωσία του Βαλεριανού από τους Πέρσες και την παραβίαση του Ρήνου από τους Φράγκους, ο διοικητής λεγεώνας Μάρκος Κασσιάνιος Λατίνιος Πόστουμος ανακηρύσσεται αυτοκράτορας στην Κολωνία. Η Imperium Galliarum του θα κυβερνήσει Γαλατία, Βρετανία και Ισπανία για δεκατρία χρόνια."
          },
          extendedDescription: {
            en: "Postumus and his successors — Victorinus, the Tetrici — minted their own coinage, maintained their own senate, and held the Rhine while the central empire fought Persia and the Goths. The breakaway state would be reabsorbed by Aurelian after the bloodless surrender of Tetricus at Châlons in 274.",
            el: "Ο Πόστουμος και οι διάδοχοί του — Βικτωρίνος, οι Τέτρικοι — έκοβαν δικό τους νόμισμα, διατηρούσαν δική τους σύγκλητο και κράτησαν τον Ρήνο όσο η κεντρική αυτοκρατορία πολεμούσε Πέρσες και Γότθους. Το αποσχισθέν κράτος θα επανενσωματωθεί από τον Αυρηλιανό μετά την αναίμακτη παράδοση του Τέτρικου στις Σαλόνες το 274."
          },
          category: "political"
        }
      ]
    },
    {
      year: 286,
      era: {
        en: "Tetrarchy",
        el: "Τετραρχία"
      },
      events: [
        {
          title: {
            en: "Maximian and the Bagaudae",
            el: "Ο Μαξιμιανός και οι Μπακαύδες"
          },
          description: {
            en: "Diocletian appoints Maximian as Augustus of the West with his capital at Trier. His first task is to crush the Bagaudae — peasant insurgents in Aquitania led by Aelianus and Amandus — and to restore the Rhine frontier against Franks and Alemanni.",
            el: "Ο Διοκλητιανός διορίζει τον Μαξιμιανό Αύγουστο της Δύσης με πρωτεύουσα την Τρίερ. Πρώτο του έργο είναι να συντρίψει τους Μπακαύδες — αγρότες εξεγερμένους στην Ακυτανία με αρχηγούς τον Αιλιανό και τον Αμανδό — και να αποκαταστήσει τη μεθόριο του Ρήνου κατά Φράγκων και Αλαμανών."
          },
          extendedDescription: {
            en: "Trier, made a tetrarchic capital, acquires its great basilica, baths, and the Porta Nigra. Diocletian's reforms split the four Gallic provinces into twelve smaller units, grouped under a new diocese of the Gauls and an overarching Praetorian Prefecture, the basic shape of late Roman administration in the West.",
            el: "Η Τρίερ, ως τετραρχική πρωτεύουσα, αποκτά τη μεγάλη βασιλική της, τα λουτρά και την Porta Nigra. Οι μεταρρυθμίσεις του Διοκλητιανού διασπούν τις τέσσερις γαλατικές επαρχίες σε δώδεκα μικρότερες, ομαδοποιημένες σε μια νέα διοίκηση των Γαλατιών και υπερκείμενη Πραιτωριανή Επαρχότητα — το βασικό σχήμα της υστερορωμαϊκής διοίκησης της Δύσης."
          },
          category: "political"
        }
      ]
    },
    {
      year: 314,
      era: {
        en: "Constantinian Church",
        el: "Κωνσταντίνεια Εκκλησία"
      },
      events: [
        {
          title: {
            en: "The Council of Arles",
            el: "Η Σύνοδος της Αρλ"
          },
          description: {
            en: "Constantine summons bishops from across the Western empire to Arles to settle the Donatist schism in Africa. The council — the first general gathering of the Latin Church — meets in the imperial residence of Arelate, soon to be the metropolis of southern Gaul.",
            el: "Ο Κωνσταντίνος συγκαλεί επισκόπους από όλη τη Δυτική αυτοκρατορία στην Αρλ για να ρυθμίσουν το δονατιστικό σχίσμα στην Αφρική. Η σύνοδος — η πρώτη γενική συνέλευση της λατινικής Εκκλησίας — συνεδριάζει στην αυτοκρατορική έδρα της Αρελάτης, σύντομα μητρόπολης της νότιας Γαλατίας."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 357,
      era: {
        en: "Recovery under Julian",
        el: "Αποκατάσταση επί Ιουλιανού"
      },
      events: [
        {
          title: {
            en: "Julian's victory at Strasbourg",
            el: "Η νίκη του Ιουλιανού στο Στρασβούργο"
          },
          description: {
            en: "The Caesar Julian, sent west by his cousin Constantius II with little experience and fewer troops, annihilates a great Alemannic confederation under Chnodomarius at Argentoratum (Strasbourg). The Rhine frontier is restored and Gaul saved from the brink.",
            el: "Ο Καίσαρ Ιουλιανός, σταλμένος στη Δύση από τον ξάδερφό του Κωνστάντιο Β΄ με λίγη πείρα και λιγότερους στρατιώτες, εκμηδενίζει μεγάλη αλαμαννική συνομοσπονδία υπό τον Χνοδομάριο στο Argentoratum (Στρασβούργο). Η μεθόριος του Ρήνου αποκαθίσταται και η Γαλατία σώζεται την τελευταία στιγμή."
          },
          extendedDescription: {
            en: "From his headquarters at Lutetia (Paris) Julian rebuilt roads, remitted taxes, and reformed the corrupt civilian administration. Three years later, on the same parade-ground at Lutetia, his troops would raise him on a shield and proclaim him Augustus — beginning the brief pagan reaction of his sole reign.",
            el: "Από το αρχηγείο του στη Λουτετία (Παρίσι) ο Ιουλιανός ξαναέκτισε δρόμους, χάρισε φόρους και μεταρρύθμισε τη διεφθαρμένη πολιτική διοίκηση. Τρία χρόνια αργότερα, στο ίδιο πεδίο παρελάσεων της Λουτετίας, οι στρατιώτες του θα τον υψώσουν σε ασπίδα και θα τον ανακηρύξουν Αύγουστο — αρχίζοντας τη σύντομη παγανιστική αντίδραση της μοναρχίας του."
          },
          category: "military"
        }
      ]
    },
    {
      year: 397,
      era: {
        en: "Christianisation of Gaul",
        el: "Εκχριστιανισμός της Γαλατίας"
      },
      events: [
        {
          title: {
            en: "The death of Martin of Tours",
            el: "Ο θάνατος του Μαρτίνου της Τουρ"
          },
          description: {
            en: "Martin, the soldier-turned-monk who founded the monastery of Marmoutier and became bishop of Tours, dies at Candes. His tomb on the Loire will be the first great cult-centre of Gallic Christianity and a model for the missionary bishop of the Latin West.",
            el: "Ο Μαρτίνος, στρατιώτης που έγινε μοναχός, ίδρυσε τη μονή του Μαρμουτιέ και έγινε επίσκοπος της Τουρ, πεθαίνει στο Καντ. Ο τάφος του στον Λίγηρα θα γίνει το πρώτο μεγάλο λατρευτικό κέντρο της γαλατικής χριστιανοσύνης και υπόδειγμα του ιεραποστολικού επισκόπου της λατινικής Δύσης."
          },
          extendedDescription: {
            en: "His friend Sulpicius Severus wrote the Vita Martini almost immediately, inventing the Latin saint's life as a genre. Martin's cloak (cappa), kept by the Merovingian kings, would give Frankish chapels their name. By 397 the rural sanctuaries of Gaul were being dismantled and the cult of the saints set in their place.",
            el: "Ο φίλος του Σουλπίκιος Σεβήρος έγραψε σχεδόν αμέσως τη Vita Martini, εφευρίσκοντας τον λατινικό βίο αγίου ως είδος. Ο μανδύας (cappa) του Μαρτίνου, που φύλαγαν οι Μεροβίγγειοι βασιλείς, θα δώσει το όνομά τους στα φραγκικά παρεκκλήσια. Μέχρι το 397 τα αγροτικά ιερά της Γαλατίας κατεδαφίζονταν και η λατρεία των αγίων εγκαθιδρυόταν στη θέση τους."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 400,
      era: {
        en: "Twilight of Roman Gaul",
        el: "Λυκόφως της Ρωμαϊκής Γαλατίας"
      },
      events: [
        {
          title: {
            en: "Stilicho strips the Rhine",
            el: "Ο Στιλίχων αδειάζει τον Ρήνο"
          },
          description: {
            en: "To face Alaric's Goths in Italy, the western generalissimo Stilicho withdraws troops from the Rhine garrisons. The Gallic limes is left dangerously thin on the eve of the great crossing of the Rhine that will follow on the last day of 406.",
            el: "Για να αντιμετωπίσει τους Γότθους του Αλαρίχου στην Ιταλία, ο δυτικός γενναιότατος Στιλίχων αποσύρει στρατεύματα από τις φρουρές του Ρήνου. Ο γαλατικός limes μένει επικίνδυνα αδύναμος την παραμονή της μεγάλης διάβασης του Ρήνου που θα ακολουθήσει την τελευταία ημέρα του 406."
          },
          extendedDescription: {
            en: "By the close of the fourth century Gaul is still Roman in language, law, and church, but its provincial aristocracy — the world of Ausonius of Bordeaux and Sulpicius Severus — already lives among Frankish foederati on the Rhine, Alan settlements in the Loire valley, and Visigothic auxiliaries marching south. The age of Vandals, Sueves, Burgundians, and finally Clovis lies just beyond the close of this period.",
            el: "Στο τέλος του τέταρτου αιώνα η Γαλατία είναι ακόμη ρωμαϊκή σε γλώσσα, δίκαιο και Εκκλησία, αλλά η επαρχιακή της αριστοκρατία — ο κόσμος του Αυσόνιου του Μπορντό και του Σουλπικίου Σεβήρου — ζει ήδη ανάμεσα σε Φράγκους foederati στον Ρήνο, αλανικούς εποικισμούς στην κοιλάδα του Λίγηρα και βησιγοτθικά βοηθητικά σώματα που βαδίζουν νότια. Η εποχή Βανδάλων, Σουήβων, Βουργουνδών και τελικά Χλωδοβίκου βρίσκεται μόλις πέρα από το τέλος αυτής της περιόδου."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
