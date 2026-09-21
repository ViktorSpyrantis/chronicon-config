/** The Spanish Empire & Golden Age — Ισπανική Αυτοκρατορία & Χρυσός Αιώνας · Spanish History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const SPANISH_EMPIRE_GOLDEN_AGE = {
  id: "spanish-empire-golden-age" as const,
  label: {
    en: "The Spanish Empire & Golden Age",
    el: "Ισπανική Αυτοκρατορία & Χρυσός Αιώνας"
  },
  supertitle: {
    en: "Monarchía Hispánica",
    el: "Ισπανική Μοναρχία"
  },
  title: {
    en: "The Spanish Empire & Golden Age",
    el: "Η Ισπανική Αυτοκρατορία & ο Χρυσός Αιώνας"
  },
  subtitle: {
    en: "From the Treaty of Tordesillas and the inheritance of Charles V through the conquests of Mexico and Peru, the Escorial of Philip II, Lepanto and the union with Portugal, the catastrophe of the Armada, Cervantes and the Siglo de Oro of El Greco, Velázquez, Lope, and Calderón, the expulsion of the Moriscos and the revolts of Catalonia and Portugal, the broken tercios at Rocroi and the Peace of the Pyrenees, to the bewitched death of Carlos II in 1700. Slide across two centuries when the king of Spain ruled the most extensive empire of the early modern world.",
    el: "Από τη Συνθήκη του Τορδεσίλιας και την κληρονομιά του Καρόλου Ε΄, μέσα από τις κατακτήσεις του Μεξικού και του Περού, το Εσκοριάλ του Φιλίππου Β΄, το Λέπαντο και την ένωση με την Πορτογαλία, την καταστροφή της Αρμάδας, τον Θερβάντες και τον Siglo de Oro του Ελ Γκρέκο, του Βελάθκεθ, του Λόπε και του Καλδερόν, την εκδίωξη των Μορίσκος και τις εξεγέρσεις της Καταλωνίας και της Πορτογαλίας, τα συντριμμένα τέρθιος στο Ροκρουά και την Ειρήνη των Πυρηναίων, ως τον μαγεμένο θάνατο του Κάρλος Β΄ το 1700. Μετακινηθείτε ανάμεσα σε δύο αιώνες κατά τους οποίους ο βασιλιάς της Ισπανίας κυβέρνησε τη μεγαλύτερη αυτοκρατορία του πρώιμου νεότερου κόσμου."
  },
  menuDescription: {
    en: "The empire on which the sun never set: Cortés, Lepanto, Velázquez, and slow decline.",
    el: "Η αυτοκρατορία όπου ο ήλιος δεν έδυε ποτέ: ο Κορτές, το Λέπαντο, ο Βελάθκεθ κι η αργή παρακμή."
  },
  footerLabel: {
    en: "Spanish Empire & Golden Age · 1492–1700",
    el: "Ισπανική Αυτοκρατορία & Χρυσός Αιώνας · 1492–1700"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Spanish Empire & Golden Age",
    el: "Η Ισπανική Αυτοκρατορία & ο Χρυσός Αιώνας"
  },
  theme: THEMES.ruby,
  timeline: [
    {
      year: 1494,
      era: {
        en: "The world divided",
        el: "Διαίρεση του κόσμου"
      },
      events: [
        {
          title: {
            en: "The Treaty of Tordesillas",
            el: "Η Συνθήκη του Τορδεσίλιας"
          },
          description: {
            en: "Mediated by Pope Alexander VI Borgia, Spain and Portugal divide the unconquered world along a meridian 370 leagues west of the Cape Verde Islands — granting Brazil to Portugal and the rest of the Americas to Castile.",
            el: "Με τη μεσολάβηση του πάπα Αλεξάνδρου ΣΤ΄ Βοργία, η Ισπανία και η Πορτογαλία μοιράζουν τον ακατάκτητο κόσμο κατά μήκος ενός μεσημβρινού 370 λεγκών δυτικά των Νήσων του Πράσινου Ακρωτηρίου — δίνοντας τη Βραζιλία στην Πορτογαλία και την υπόλοιπη Αμερική στην Καστίλη."
          },
          extendedDescription: {
            en: "Tordesillas, signed on 7 June 1494, drew the most ambitious line ever drawn on a map. Within fifteen years Cabral had landed in Brazil and Albuquerque in Goa; within thirty Magellan and Elcano had circumnavigated the globe. The treaty would govern Iberian rivalry across two oceans until the Union of the Crowns in 1580 — and provoke the famous protest of Francis I of France: 'I should like to see Adam's will excluding me from a share of the world.'",
            el: "Το Τορδεσίλιας, υπογεγραμμένο στις 7 Ιουνίου 1494, χάραξε την πιο φιλόδοξη γραμμή που τραβήχτηκε ποτέ πάνω σε χάρτη. Μέσα σε δεκαπέντε χρόνια ο Καμπράλ είχε αποβιβαστεί στη Βραζιλία και ο Αλμπουκέρκι στη Γκόα· μέσα σε τριάντα ο Μαγγελάνος και ο Ελκάνο είχαν κάνει τον γύρο του κόσμου. Η συνθήκη θα ρύθμιζε την ιβηρική αντιπαλότητα σε δύο ωκεανούς ως την Ένωση των Στεμμάτων το 1580 — και θα προκαλούσε την περίφημη διαμαρτυρία του Φραγκίσκου Α΄ της Γαλλίας: «Θα ’θελα να δω τη διαθήκη του Αδάμ που με αποκλείει από μερίδιο στον κόσμο»."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1516,
      era: {
        en: "Habsburg succession",
        el: "Αψβουργική διαδοχή"
      },
      events: [
        {
          title: {
            en: "Charles of Ghent inherits Spain",
            el: "Ο Κάρολος της Γάνδης κληρονομεί την Ισπανία"
          },
          description: {
            en: "At sixteen, the Burgundian-born Charles of Habsburg — grandson of Ferdinand and Isabella, of Maximilian I and Mary of Burgundy — becomes king of Castile and Aragon. Three years later he is elected Holy Roman Emperor as Charles V, and a worldwide monarchy is born.",
            el: "Σε ηλικία δεκαέξι ετών, ο Κάρολος των Αψβούργων, γεννημένος στη Γάνδη — εγγονός του Φερδινάνδου και της Ισαβέλλας, του Μαξιμιλιανού Α΄ και της Μαρίας της Βουργουνδίας — γίνεται βασιλιάς της Καστίλης και της Αραγκόνας. Τρία χρόνια αργότερα εκλέγεται Αυτοκράτορας της Αγίας Ρωμαϊκής Αυτοκρατορίας ως Κάρολος Ε΄, και γεννιέται μια μοναρχία παγκόσμιας έκτασης."
          },
          extendedDescription: {
            en: "Charles arrived from Flanders speaking no Castilian and surrounded by Flemish courtiers, provoking the comuneros revolt of 1520–21. After their defeat at Villalar he learned the language, married Isabel of Portugal, and from his palace in Toledo and the chambers of his treasurer Francisco de los Cobos ruled Spain, the Netherlands, Naples and Sicily, the Habsburg patrimony in Austria, and the new conquests of the Indies. His was the empire on which, in a famous phrase, the sun did not set.",
            el: "Ο Κάρολος έφτασε από τη Φλάνδρα χωρίς να μιλά καστιλιανά και περιστοιχισμένος από Φλαμανδούς αυλικούς, προκαλώντας την εξέγερση των comuneros το 1520–21. Μετά την ήττα τους στο Βιγιαλάρ έμαθε τη γλώσσα, παντρεύτηκε την Ισαβέλλα της Πορτογαλίας και από το παλάτι του στο Τολέδο και τα γραφεία του ταμία Φρανθίσκο ντε λος Κόβος κυβέρνησε την Ισπανία, τις Κάτω Χώρες, τη Νάπολη και τη Σικελία, την αψβουργική κληρονομιά στην Αυστρία και τις νέες κατακτήσεις των Ινδιών. Δική του ήταν η αυτοκρατορία στην οποία, στην περίφημη φράση, ο ήλιος δεν έδυε."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1521,
      era: {
        en: "Conquest of Mexico",
        el: "Κατάκτηση του Μεξικού"
      },
      events: [
        {
          title: {
            en: "Cortés takes Tenochtitlán",
            el: "Ο Κορτές καταλαμβάνει την Τενοτστιτλάν"
          },
          description: {
            en: "On 13 August, after a three-month siege, the Aztec capital of Tenochtitlán falls to Hernán Cortés and his coalition of Spaniards and Tlaxcalan allies. The lake-city is razed, the emperor Cuauhtémoc captured, and the empire of Moctezuma extinguished.",
            el: "Στις 13 Αυγούστου, μετά από τρίμηνη πολιορκία, η αζτεκική πρωτεύουσα Τενοτστιτλάν πέφτει στον Ερνάν Κορτές και στον συνασπισμό Ισπανών και Τλασκαλάν συμμάχων του. Η λιμνοπόλη ισοπεδώνεται, ο αυτοκράτορας Κουαουτέμοκ συλλαμβάνεται και η αυτοκρατορία του Μοτεζούμα σβήνει."
          },
          extendedDescription: {
            en: "Cortés had sailed from Cuba in 1519 against orders, burnt his ships on the coast of Veracruz, and marched inland with some six hundred men to a city of two hundred thousand. Smallpox, brought from Spain, devastated the defenders during the siege; Bernal Díaz del Castillo, who fought every day of the campaign, would later write the True History of the Conquest of New Spain. On the ruins of Tenochtitlán the Spaniards laid out Mexico City, the new capital of the viceroyalty of New Spain.",
            el: "Ο Κορτές είχε αποπλεύσει από την Κούβα το 1519 παρά τις διαταγές, είχε πυρπολήσει τα πλοία του στις ακτές της Βερακρούς και είχε προχωρήσει στην ενδοχώρα με εξακόσιους περίπου άνδρες προς μια πόλη διακοσίων χιλιάδων. Η ευλογιά, φερμένη από την Ισπανία, αποδεκάτισε τους υπερασπιστές κατά την πολιορκία· ο Μπερνάλ Ντίαθ ντελ Καστίγιο, που πολέμησε κάθε μέρα της εκστρατείας, θα έγραφε αργότερα την Αληθή Ιστορία της Κατάκτησης της Νέας Ισπανίας. Πάνω στα ερείπια της Τενοτστιτλάν οι Ισπανοί χάραξαν την Πόλη του Μεξικού, νέα πρωτεύουσα της αντιβασιλείας της Νέας Ισπανίας."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1533,
      era: {
        en: "Conquest of Peru",
        el: "Κατάκτηση του Περού"
      },
      events: [
        {
          title: {
            en: "Pizarro executes Atahualpa",
            el: "Ο Πιζάρρο εκτελεί τον Αταουάλπα"
          },
          description: {
            en: "Six months after seizing him at Cajamarca, Francisco Pizarro has the captive Inca emperor Atahualpa garrotted in the public square — the famous 'room of gold' ransom paid in vain. In November the Spaniards enter Cuzco and the Inca empire passes to Castile.",
            el: "Έξι μήνες αφότου τον αιχμαλώτισε στο Καχαμάρκα, ο Φρανθίσκο Πιζάρρο διατάζει τον στραγγαλισμό του αιχμαλώτου αυτοκράτορα των Ίνκας Αταουάλπα στην κεντρική πλατεία — τα περίφημα λύτρα της «αίθουσας του χρυσού» δόθηκαν μάταια. Τον Νοέμβριο οι Ισπανοί μπαίνουν στο Κούσκο και η αυτοκρατορία των Ίνκας περνά στην Καστίλη."
          },
          extendedDescription: {
            en: "Pizarro had landed in Tumbes in 1532 with one hundred and sixty-eight men and twenty-seven horses, exploiting the civil war between Atahualpa and his brother Huáscar. Within a generation the silver mountain of Potosí (1545) would be discovered in Upper Peru, and a stream of bullion across the Pacific via Manila and across the Atlantic via Havana would underwrite a century of Habsburg wars. The conquistadores themselves fell out: Pizarro was murdered in Lima in 1541 by the partisans of his rival Diego de Almagro.",
            el: "Ο Πιζάρρο είχε αποβιβαστεί στο Τούμπες το 1532 με εκατόν εξήντα οκτώ άνδρες και είκοσι επτά άλογα, εκμεταλλευόμενος τον εμφύλιο μεταξύ του Αταουάλπα και του αδελφού του Ουάσκαρ. Μέσα σε μία γενιά θα ανακαλυπτόταν το αργυρό βουνό του Ποτοσί (1545) στο Άνω Περού, και ένα ρεύμα αργύρου διαμέσου του Ειρηνικού μέσω Μανίλας και διαμέσου του Ατλαντικού μέσω Αβάνας θα χρηματοδοτούσε έναν αιώνα αψβουργικών πολέμων. Οι ίδιοι οι κονκισταδόρες ήρθαν σε ρήξη: ο Πιζάρρο δολοφονήθηκε στη Λίμα το 1541 από τους οπαδούς του αντιπάλου του Διέγο ντε Αλμάγρο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1556,
      era: {
        en: "Philip II",
        el: "Φίλιππος Β΄"
      },
      events: [
        {
          title: {
            en: "Charles V abdicates",
            el: "Ο Κάρολος Ε΄ παραιτείται"
          },
          description: {
            en: "Worn out by gout and forty years of war, Charles V hands the crowns of Spain, the Indies, Naples, Sicily, and the Netherlands to his son Philip II, and retires to the monastery of Yuste in Extremadura to die two years later.",
            el: "Εξαντλημένος από την ποδάγρα και σαράντα χρόνια πολέμου, ο Κάρολος Ε΄ παραδίδει τις κορώνες της Ισπανίας, των Ινδιών, της Νάπολης, της Σικελίας και των Κάτω Χωρών στον γιο του Φίλιππο Β΄ και αποσύρεται στο μοναστήρι του Γιούστε στην Εστρεμαδούρα όπου πεθαίνει δύο χρόνια αργότερα."
          },
          extendedDescription: {
            en: "The Austrian Habsburg lands and the imperial title went separately to Charles's brother Ferdinand. Philip II, twenty-nine, austere and devoted to his desk, would govern from the great new monastery-palace of El Escorial which he began in 1563 above the village of San Lorenzo. From a single room in the Escorial — and behind a mountain of paperwork that earned him the byname 'the prudent king' — he ruled the largest empire of the early modern world.",
            el: "Τα αψβουργικά εδάφη της Αυστρίας και ο αυτοκρατορικός τίτλος πέρασαν χωριστά στον αδελφό του Καρόλου, Φερδινάνδο. Ο Φίλιππος Β΄, εικοσιεννέα ετών, αυστηρός και αφοσιωμένος στο γραφείο του, θα κυβερνούσε από το μεγάλο νέο μοναστηριο-παλάτι του Εσκοριάλ, που άρχισε το 1563 πάνω από το χωριό του Αγίου Λαυρεντίου. Από ένα μόνο δωμάτιο στο Εσκοριάλ — και πίσω από ένα βουνό χαρτιών που του χάρισε το προσωνύμιο «ο φρόνιμος βασιλιάς» — κυβέρνησε τη μεγαλύτερη αυτοκρατορία του πρώιμου νεότερου κόσμου."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1571,
      era: {
        en: "Lepanto",
        el: "Λέπαντο"
      },
      events: [
        {
          title: {
            en: "Don John at Lepanto",
            el: "Ο Δον Χουάν στο Λέπαντο"
          },
          description: {
            en: "On 7 October, the galleys of the Holy League, commanded by Philip II's half-brother Don John of Austria, annihilate the Ottoman fleet of Ali Pasha in the Gulf of Patras. Some thirty thousand Turks die in a single afternoon; fifteen thousand Christian galley-slaves are freed.",
            el: "Στις 7 Οκτωβρίου, οι γαλέρες της Ιεράς Συμμαχίας, υπό τη διοίκηση του ετεροθαλούς αδελφού του Φιλίππου Β΄, Δον Χουάν της Αυστρίας, εκμηδενίζουν τον οθωμανικό στόλο του Αλή Πασά στον Πατραϊκό Κόλπο. Γύρω στους τριάντα χιλιάδες Τούρκοι σκοτώνονται σε μια απογευματινή μάχη· δεκαπέντε χιλιάδες χριστιανοί κωπηλάτες-σκλάβοι ελευθερώνονται."
          },
          extendedDescription: {
            en: "The Holy League, sealed by Pope Pius V between Spain, Venice, and the smaller Italian states, deployed two hundred and thirty galleys against three hundred Turkish. On board the squadron of Don Álvaro de Bazán a young arquebusier from Alcalá de Henares named Miguel de Cervantes lost the use of his left hand — the 'glory of his right', as he later put it. Cervantes was captured by Algerian corsairs in 1575 and spent five years a slave at Algiers before being ransomed by the Trinitarians.",
            el: "Η Ιερά Συμμαχία, σφραγισμένη από τον πάπα Πίο Ε΄ μεταξύ Ισπανίας, Βενετίας και των μικρότερων ιταλικών κρατών, παρέταξε διακόσιες τριάντα γαλέρες εναντίον τριακοσίων τουρκικών. Στη μοίρα του Δον Άλβαρο ντε Μπαζάν, ένας νεαρός αρκεβουζιοφόρος από την Αλκαλά ντε Ενάρες, ο Μιγκέλ ντε Θερβάντες, έχασε τη χρήση του αριστερού χεριού του — «η δόξα του δεξιού του», όπως θα έλεγε αργότερα. Ο Θερβάντες αιχμαλωτίστηκε από Αλγερινούς κουρσάρους το 1575 και πέρασε πέντε χρόνια σκλάβος στο Αλγέρι ώσπου τον εξαγόρασαν οι Τρινιτάριοι."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Laureys_a_Castro_-_The_Battle_of_Lepanto.jpeg?width=1024",
            alt: {
              en: "The Battle of Lepanto, 1571",
              el: "Η ναυμαχία της Ναυπάκτου, 1571"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1580,
      era: {
        en: "Iberian Union",
        el: "Ιβηρική Ένωση"
      },
      events: [
        {
          title: {
            en: "Philip II inherits Portugal",
            el: "Ο Φίλιππος Β΄ κληρονομεί την Πορτογαλία"
          },
          description: {
            en: "After King Sebastian of Portugal dies childless at Alcácer Quibir and his great-uncle Cardinal Henry follows in 1580, Philip II claims the Portuguese crown by inheritance, takes Lisbon, and unites the two Iberian monarchies and their overseas empires under a single dynasty.",
            el: "Μετά τον θάνατο του βασιλιά Σεμπαστιάν της Πορτογαλίας στο Αλκάθερ Κιμπίρ χωρίς απογόνους και τη διαδοχή του από τον προθείο του καρδινάλιο Ερρίκο που πεθαίνει το 1580, ο Φίλιππος Β΄ διεκδικεί το πορτογαλικό στέμμα ως κληρονόμος, καταλαμβάνει τη Λισαβόνα και ενώνει τις δύο ιβηρικές μοναρχίες και τις υπερπόντιες αυτοκρατορίες τους υπό μία δυναστεία."
          },
          extendedDescription: {
            en: "The Iberian Union of 1580 made Philip the master of an empire stretching from Brazil, Macau, Goa, Mozambique, and the Philippines through Lisbon and the Netherlands to Mexico, Peru, and Manila. The two crowns remained legally distinct: the Cortes of Tomar (1581) guaranteed Portuguese laws, currency, and administration. The union would last until the Portuguese Restoration of 1640 — sixty years that wove the global trade systems of Iberia together as never before.",
            el: "Η Ιβηρική Ένωση του 1580 έκανε τον Φίλιππο κύριο μιας αυτοκρατορίας που εκτεινόταν από τη Βραζιλία, το Μακάο, την Γκόα, τη Μοζαμβίκη και τις Φιλιππίνες, μέσα από τη Λισαβόνα και τις Κάτω Χώρες, ως το Μεξικό, το Περού και τη Μανίλα. Τα δύο στέμματα παρέμειναν νομικά διακριτά: το Κορτές του Τομάρ (1581) εγγυήθηκε τους πορτογαλικούς νόμους, το νόμισμα και τη διοίκηση. Η ένωση θα κρατούσε ως την πορτογαλική παλινόρθωση του 1640 — εξήντα χρόνια κατά τα οποία τα παγκόσμια εμπορικά συστήματα της Ιβηρικής συνυφάνθηκαν όπως ποτέ άλλοτε."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1588,
      era: {
        en: "The Armada",
        el: "Η Αρμάδα"
      },
      events: [
        {
          title: {
            en: "The Invincible Armada",
            el: "Η Αήττητη Αρμάδα"
          },
          description: {
            en: "Philip II's great fleet of one hundred and thirty ships sails from Lisbon to escort the army of Flanders across the Channel to England. Storms, English fireships, and dogged Dutch and English gunnery wreck it in the Channel, the North Sea, and off the coasts of Scotland and Ireland.",
            el: "Ο μεγάλος στόλος του Φιλίππου Β΄, εκατόν τριάντα πλοίων, αποπλέει από τη Λισαβόνα για να συνοδεύσει τον στρατό της Φλάνδρας στη διάβαση της Μάγχης προς την Αγγλία. Καταιγίδες, αγγλικά πυρπολικά και επίμονο ολλανδικό και αγγλικό πυροβολικό τον συντρίβουν στη Μάγχη, στη Βόρεια Θάλασσα και στις ακτές της Σκωτίας και της Ιρλανδίας."
          },
          extendedDescription: {
            en: "Of the Armada's thirty thousand men, perhaps half came home. The disaster did not end Spanish naval power — Philip ordered a new fleet, and Anglo-Spanish war continued until 1604 — but it gave the Protestant powers and their Calvinist sea-rovers the legend of victory they needed. In 1588 the long Dutch Revolt was sixteen years old and would last another sixty. Spanish silver continued to flow, but the Netherlands would never be recovered, and the eighty-year war would mark the limits of even Habsburg power.",
            el: "Από τις τριάντα χιλιάδες άνδρες της Αρμάδας, ίσως οι μισοί γύρισαν πίσω. Η καταστροφή δεν τελείωσε την ισπανική ναυτική ισχύ — ο Φίλιππος διέταξε νέο στόλο, και ο αγγλοϊσπανικός πόλεμος συνεχίστηκε ως το 1604 — αλλά έδωσε στις προτεσταντικές δυνάμεις και στους καλβινιστές πειρατές τους τον θρύλο της νίκης που χρειάζονταν. Το 1588 η μεγάλη ολλανδική εξέγερση είχε ήδη δεκαέξι χρόνια ζωής και θα κρατούσε άλλα εξήντα. Ο ισπανικός άργυρος εξακολουθούσε να ρέει, αλλά οι Κάτω Χώρες δεν θα ανακτηθούν ποτέ, και ο ογδοντάχρονος πόλεμος θα σημάδευε τα όρια της ίδιας της αψβουργικής ισχύος."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1605,
      era: {
        en: "Siglo de Oro",
        el: "Χρυσός Αιώνας"
      },
      events: [
        {
          title: {
            en: "Don Quixote, Part I",
            el: "Δον Κιχώτης, Α΄ μέρος"
          },
          description: {
            en: "From a Madrid press in January appears El Ingenioso Hidalgo Don Quijote de la Mancha by Miguel de Cervantes. By summer the knight-errant and his squire are being recognised in the streets of Spanish cities; within a few years the book is translated across Europe.",
            el: "Από ένα μαδριλένικο τυπογραφείο τον Ιανουάριο κυκλοφορεί το El Ingenioso Hidalgo Don Quijote de la Mancha του Μιγκέλ ντε Θερβάντες. Μέχρι το καλοκαίρι ο ιππότης και ο ιπποκόμος του αναγνωρίζονται στους δρόμους των ισπανικών πόλεων· σε λίγα χρόνια το βιβλίο μεταφράζεται σε ολόκληρη την Ευρώπη."
          },
          extendedDescription: {
            en: "Don Quixote crowned a generation that reshaped European literature: Lope de Vega, who wrote over four hundred plays for the corrales of Madrid; the bitter, dazzling poetry of Francisco de Quevedo; the dense, lapidary verse of Luis de Góngora; the religious sonnets of Saint Teresa and Saint John of the Cross. In painting, the Cretan exile Domenikos Theotokopoulos — El Greco — had been working at Toledo since 1577; in 1599 a six-year-old Diego Velázquez began his studies in Seville.",
            el: "Ο Δον Κιχώτης στέφθηκε μια γενιά που αναμόρφωσε την ευρωπαϊκή λογοτεχνία: ο Λόπε ντε Βέγα, που έγραψε πάνω από τετρακόσια θεατρικά έργα για τα corrales της Μαδρίτης· η πικρή, εκθαμβωτική ποίηση του Φρανθίσκο ντε Κεβέδο· οι πυκνοί, λαπιδάριοι στίχοι του Λουίς ντε Γκόνγκορα· τα θρησκευτικά σονέτα της Αγίας Τερέζας και του Αγίου Ιωάννη του Σταυρού. Στη ζωγραφική, ο Κρητικός εξόριστος Δομήνικος Θεοτοκόπουλος — Ελ Γκρέκο — εργαζόταν στο Τολέδο από το 1577· το 1599 ένας εξάχρονος Διέγο Βελάθκεθ άρχιζε τις σπουδές του στη Σεβίλλη."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Title_page_first_edition_Don_Quijote.jpg?width=1024",
            alt: {
              en: "The title page of Don Quixote (1605)",
              el: "Η σελίδα τίτλου του Δον Κιχώτη (1605)"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1609,
      era: {
        en: "Expulsion of the Moriscos",
        el: "Εκδίωξη των Μορίσκος"
      },
      events: [
        {
          title: {
            en: "Philip III expels the Moriscos",
            el: "Ο Φίλιππος Γ΄ εκδιώκει τους Μορίσκος"
          },
          description: {
            en: "Beginning in Valencia in September, royal decrees order the expulsion of every Morisco — Christian descendants of Iberian Muslims — from Spain. Over five years some three hundred thousand are shipped to North Africa, depopulating Valencian and Aragonese countryside.",
            el: "Ξεκινώντας από τη Βαλένθια τον Σεπτέμβριο, βασιλικά διατάγματα διατάζουν την εκδίωξη όλων των Μορίσκος — χριστιανών απογόνων των ιβήρων μουσουλμάνων — από την Ισπανία. Σε πέντε χρόνια περίπου τριακόσιες χιλιάδες μεταφέρονται στη Βόρεια Αφρική, αφήνοντας ερημωμένη την ύπαιθρο της Βαλένθια και της Αραγκόνας."
          },
          extendedDescription: {
            en: "The Moriscos had been forcibly baptised after the Granada rebellions of 1499 and 1568, but most still spoke Arabic, wore traditional dress, and observed Friday rest. Their expulsion, ordered by the favourite duke of Lerma, was hailed as a final completion of the Reconquista; in practice it stripped the eastern kingdoms of their best market-gardeners and silk-workers. Cervantes treated the question with strained ambivalence in Don Quixote, Part II: 'In Spain there is no truer Christian than I, and no greater stranger.'",
            el: "Οι Μορίσκος είχαν βαπτιστεί με τη βία μετά τις εξεγέρσεις της Γρανάδας του 1499 και του 1568, αλλά οι περισσότεροι μιλούσαν ακόμη αραβικά, φορούσαν παραδοσιακή ενδυμασία και τηρούσαν την ανάπαυση της Παρασκευής. Η εκδίωξή τους, που διατάχθηκε από τον ευνοούμενο δούκα της Λέρμας, χαιρετίστηκε ως οριστική ολοκλήρωση της Reconquista· στην πράξη στέρησε τα ανατολικά βασίλεια από τους καλύτερους κηπουρούς και μεταξουργούς τους. Ο Θερβάντες αντιμετωπίζει το ζήτημα με τεταμένη αμφιθυμία στον Δον Κιχώτη, Β΄ μέρος: «Στην Ισπανία δεν υπάρχει πιο γνήσιος χριστιανός από εμένα, και πιο μεγάλος ξένος»."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1640,
      era: {
        en: "Crisis of the monarchy",
        el: "Κρίση της μοναρχίας"
      },
      events: [
        {
          title: {
            en: "Catalonia and Portugal revolt",
            el: "Καταλωνία και Πορτογαλία επαναστατούν"
          },
          description: {
            en: "In June, Catalan reapers rise against billeted Castilian troops and murder the viceroy in Barcelona. In December, the Duke of Braganza is proclaimed João IV of Portugal at Lisbon. The count-duke of Olivares's grand project of a unitary Spanish monarchy collapses.",
            el: "Τον Ιούνιο, οι Καταλανοί θεριστές ξεσηκώνονται κατά καστιλιανών στρατευμάτων που στρατωνίζονται στα σπίτια τους και δολοφονούν τον αντιβασιλέα στη Βαρκελώνη. Τον Δεκέμβριο, ο δούκας της Μπραγκάντσα ανακηρύσσεται Ζοάο Δ΄ της Πορτογαλίας στη Λισαβόνα. Το μεγάλο σχέδιο του κόμη-δούκα του Ολιβάρες για μια ενιαία ισπανική μοναρχία καταρρέει."
          },
          extendedDescription: {
            en: "Olivares, valido of Philip IV since 1622, had tried to spread the burden of Spain's wars across all the realms of the king. His Union of Arms provoked Catalonia and Portugal first, then Naples in 1647 (Masaniello), then Andalusia. Sixty years of Habsburg Portugal ended in 1640, and from 1668 the House of Braganza was sovereign again. Catalonia, after twelve years of war and the Sack of Barcelona by the French in 1652, returned to Spain on the old constitutional terms — but the dream of a single Spanish state was abandoned for a generation.",
            el: "Ο Ολιβάρες, valido του Φιλίππου Δ΄ από το 1622, είχε προσπαθήσει να επιμερίσει το βάρος των ισπανικών πολέμων σε όλα τα βασίλεια του βασιλιά. Η Ένωση των Όπλων προκάλεσε πρώτα την Καταλωνία και την Πορτογαλία, μετά τη Νάπολη το 1647 (Μαζανιέλο), έπειτα την Ανδαλουσία. Τα εξήντα χρόνια αψβουργικής Πορτογαλίας τερματίστηκαν το 1640, και από το 1668 ο οίκος των Μπραγκάντσα ήταν ξανά κυρίαρχος. Η Καταλωνία, ύστερα από δωδεκαετή πόλεμο και τη Λεηλασία της Βαρκελώνης από τους Γάλλους το 1652, επέστρεψε στην Ισπανία με τους παλιούς συνταγματικούς όρους — αλλά το όνειρο ενός ενιαίου ισπανικού κράτους εγκαταλείφθηκε για μια γενιά."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1643,
      era: {
        en: "Rocroi",
        el: "Ροκρουά"
      },
      events: [
        {
          title: {
            en: "The tercios broken at Rocroi",
            el: "Τα τέρθιος συντρίβονται στο Ροκρουά"
          },
          description: {
            en: "On 19 May, the twenty-one-year-old duc d'Enghien — the future Great Condé — breaks the Spanish tercios on the field of Rocroi in the Ardennes. The legend of the invincible Spanish infantry, undefeated for a century, ends in a single afternoon.",
            el: "Στις 19 Μαΐου, ο εικοσιενός ετών δούκας ντ’ Ανγκιέν — ο μελλοντικός Μέγας Κοντέ — συντρίβει τα ισπανικά τέρθιος στο πεδίο του Ροκρουά στις Αρδέννες. Ο μύθος του αήττητου ισπανικού πεζικού, που είχε μείνει ανίκητο επί έναν αιώνα, τελειώνει σε ένα απόγευμα."
          },
          extendedDescription: {
            en: "Six thousand Spanish veterans died on the field, eight thousand were taken prisoner. The Thirty Years' War, in which Spain had fought to keep the Spanish Road from Milan to Flanders open, ended five years later at the Peace of Westphalia (1648): the United Provinces' independence was finally recognised. Spain fought on against France until the Peace of the Pyrenees (1659), which gave Louis XIV the Roussillon and Cerdagne and the hand of the Infanta Maria Theresa — and set the dynastic trap that would explode in 1700.",
            el: "Έξι χιλιάδες Ισπανοί βετεράνοι έπεσαν στο πεδίο, οκτώ χιλιάδες αιχμαλωτίστηκαν. Ο Τριακονταετής Πόλεμος, στον οποίο η Ισπανία είχε πολεμήσει για να κρατήσει ανοιχτό τον Ισπανικό Δρόμο από το Μιλάνο στη Φλάνδρα, τερματίστηκε πέντε χρόνια αργότερα με την Ειρήνη της Βεστφαλίας (1648): η ανεξαρτησία των Ηνωμένων Επαρχιών αναγνωρίστηκε τελικά. Η Ισπανία συνέχισε να πολεμά τη Γαλλία ως την Ειρήνη των Πυρηναίων (1659), που έδωσε στον Λουδοβίκο ΙΔ΄ τη Ρουσιγιόν και την Κερντάνια και το χέρι της ινφάντας Μαρίας Θηρεσίας — και έστησε τη δυναστική παγίδα που θα εξερρήγνυτο το 1700."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1656,
      era: {
        en: "The court of Philip IV",
        el: "Η αυλή του Φιλίππου Δ΄"
      },
      events: [
        {
          title: {
            en: "Velázquez paints Las Meninas",
            el: "Ο Βελάθκεθ ζωγραφίζει τις Μενίνες"
          },
          description: {
            en: "In his studio in the royal alcázar of Madrid, the king's painter Diego Velázquez completes The Family of Philip IV — Las Meninas — a vast canvas of the Infanta Margarita, her ladies, dwarves, dog, the painter himself at his easel, and the king and queen reflected in a mirror at the far wall.",
            el: "Στο εργαστήριό του στο βασιλικό αλκάθαρ της Μαδρίτης, ο ζωγράφος του βασιλιά Διέγο Βελάθκεθ ολοκληρώνει την Οικογένεια του Φιλίππου Δ΄ — τις Μενίνες — έναν τεράστιο πίνακα με την ινφάντα Μαργαρίτα, τις κυρίες της, τους νάνους, τον σκύλο, τον ίδιο τον ζωγράφο μπροστά στο καβαλέτο, και τον βασιλιά και τη βασίλισσα που αντανακλώνται σε έναν καθρέφτη στον βάθος."
          },
          extendedDescription: {
            en: "Velázquez had been at court since 1623, when Olivares brought him from Seville to paint Philip IV. The painter's two journeys to Italy — where he met Bernini and painted the burning portrait of Pope Innocent X — fed back into a court production of unequalled depth and human truth. Murillo in Seville and Zurbarán in Estremadura worked in different keys; the playwright Calderón de la Barca, by then chaplain of the king, presented the autos sacramentales every Corpus Christi in Madrid. Spain's political fortunes were collapsing — but the Golden Age was still at its zenith.",
            el: "Ο Βελάθκεθ βρισκόταν στην αυλή από το 1623, όταν ο Ολιβάρες τον έφερε από τη Σεβίλλη για να ζωγραφίσει τον Φίλιππο Δ΄. Τα δύο ταξίδια του ζωγράφου στην Ιταλία — όπου γνώρισε τον Μπερνίνι και ζωγράφισε το φλεγόμενο πορτρέτο του πάπα Ινοκεντίου Ι΄ — τροφοδότησαν μια αυλική παραγωγή ασύγκριτου βάθους και ανθρώπινης αλήθειας. Ο Μουρίγιο στη Σεβίλλη και ο Θουρμπαράν στην Εστρεμαδούρα δούλευαν σε διαφορετικούς τόνους· ο θεατρικός συγγραφέας Καλδερόν ντε λα Μπάρκα, τότε εφημέριος του βασιλιά, παρουσίαζε τα autos sacramentales κάθε Corpus Christi στη Μαδρίτη. Η πολιτική τύχη της Ισπανίας κατέρρεε — αλλά ο Χρυσός Αιώνας βρισκόταν ακόμη στο ζενίθ του."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Las_Meninas,_by_Diego_Vel%C3%A1zquez,_from_Prado_in_Google_Earth.jpg?width=1024",
            alt: {
              en: "Las Meninas, by Diego Velázquez",
              el: "Οι Δεσποινίδες των Τιμών (Las Meninas), του Ντιέγκο Βελάθκεθ"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1659,
      era: {
        en: "Peace of the Pyrenees",
        el: "Ειρήνη των Πυρηναίων"
      },
      events: [
        {
          title: {
            en: "Peace on the Isle of Pheasants",
            el: "Ειρήνη στο Νησί των Φασιανών"
          },
          description: {
            en: "On the river Bidasoa between France and Spain, the chief ministers Cardinal Mazarin and Don Luis de Haro sign the Peace of the Pyrenees, ending twenty-four years of Franco-Spanish war and arranging the marriage of Louis XIV to the Infanta María Teresa.",
            el: "Στον ποταμό Μπιντασόα, μεταξύ Γαλλίας και Ισπανίας, οι πρωθυπουργοί καρδινάλιος Μαζαρίνος και Δον Λουίς ντε Άρο υπογράφουν την Ειρήνη των Πυρηναίων, τερματίζοντας εικοσιτετράχρονο γαλλοϊσπανικό πόλεμο και κανονίζοντας τον γάμο του Λουδοβίκου ΙΔ΄ με την ινφάντα Μαρία Θηρεσία."
          },
          extendedDescription: {
            en: "Spain ceded Roussillon and Cerdagne to France, fixing the Pyrenees as the modern frontier. The Infanta renounced her rights to the Spanish succession in exchange for a dowry of five hundred thousand gold écus — which, in the event, was never paid. Forty years later Louis XIV would invoke the unpaid dowry to claim the Spanish throne for his grandson, and the diplomatic clock that had begun ticking on the Isle of Pheasants would strike at the death of Carlos II.",
            el: "Η Ισπανία παραχώρησε τη Ρουσιγιόν και την Κερντάνια στη Γαλλία, ορίζοντας τα Πυρηναία ως το σύγχρονο σύνορο. Η ινφάντα απαρνήθηκε τα δικαιώματά της στην ισπανική διαδοχή με αντάλλαγμα προίκα πεντακοσίων χιλιάδων χρυσών εκύ — η οποία, όπως αποδείχθηκε, δεν καταβλήθηκε ποτέ. Σαράντα χρόνια αργότερα ο Λουδοβίκος ΙΔ΄ θα επικαλούνταν την απλήρωτη προίκα για να διεκδικήσει τον ισπανικό θρόνο για τον εγγονό του, και το διπλωματικό ρολόι που είχε ξεκινήσει να μετρά στο Νησί των Φασιανών θα χτυπούσε με τον θάνατο του Κάρλος Β΄."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1700,
      era: {
        en: "End of Habsburg Spain",
        el: "Τέλος της Αψβουργικής Ισπανίας"
      },
      events: [
        {
          title: {
            en: "The death of Carlos the Bewitched",
            el: "Ο θάνατος του Κάρλος του Μαγεμένου"
          },
          description: {
            en: "On 1 November, the childless and physically broken Carlos II dies at the alcázar of Madrid. By his last testament he leaves the entire Spanish inheritance to Philip of Anjou, grandson of Louis XIV — and the Spanish Succession war opens within months.",
            el: "Την 1η Νοεμβρίου, ο άτεκνος και σωματικά κατεστραμμένος Κάρλος Β΄ πεθαίνει στο αλκάθαρ της Μαδρίτης. Με την τελευταία διαθήκη του αφήνει ολόκληρη την ισπανική κληρονομιά στον Φίλιππο της Ανζού, εγγονό του Λουδοβίκου ΙΔ΄ — και ο Πόλεμος της Ισπανικής Διαδοχής ξεσπά μέσα σε μήνες."
          },
          extendedDescription: {
            en: "Two centuries of dynastic inbreeding — Carlos's father, grandfather, and great-grandfather all married their nieces — had ended in a king of whom even the papal nuncio said he was 'short, lame, epileptic, senile, and completely bald before thirty-five, always on the verge of death'. The accession of the Bourbon Philip V brought Spain into the orbit of France; over the following century, with much pain, it would also bring the centralising reforms of the eighteenth century. The Spain of the Catholic Monarchs and the Habsburgs — composite, polyphonic, world-spanning — was over.",
            el: "Δύο αιώνες δυναστικής ενδογαμίας — ο πατέρας, ο παππούς και ο προπάππος του Κάρλος είχαν παντρευτεί όλοι τις ανιψιές τους — είχαν καταλήξει σε έναν βασιλιά για τον οποίο ακόμη και ο παπικός νούντσιος είπε ότι ήταν «κοντός, χωλός, επιληπτικός, γεροντοπαθής και τελείως φαλακρός πριν τα τριανταπέντε, πάντα στα όρια του θανάτου». Η ανάδειξη του Βουρβόνου Φιλίππου Ε΄ έφερε την Ισπανία στην τροχιά της Γαλλίας· τον επόμενο αιώνα, με πολύ πόνο, θα έφερνε και τις συγκεντρωτικές μεταρρυθμίσεις του 18ου αιώνα. Η Ισπανία των Καθολικών Μοναρχών και των Αψβούργων — σύνθετη, πολυφωνική, παγκόσμιας έκτασης — είχε τελειώσει."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
