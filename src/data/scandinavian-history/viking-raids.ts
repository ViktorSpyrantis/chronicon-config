/** The Viking Raids — Οι Επιδρομές των Βίκινγκς · Vikings & Scandinavia */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const VIKING_RAIDS = {
  id: "viking-raids" as const,
  label: {
    en: "The Viking Raids",
    el: "Οι Επιδρομές των Βίκινγκς"
  },
  supertitle: {
    en: "The Viking Age",
    el: "Η Εποχή των Βίκινγκς"
  },
  title: {
    en: "Fury from the North: The Viking Raids",
    el: "Η Οργή από τον Βορρά: οι Επιδρομές των Βίκινγκς"
  },
  subtitle: {
    en: "In 793 dragon-prowed ships fell upon the monastery of Lindisfarne, and for a century no coast of Europe was safe. Norse raiders sacked Paris and Seville, founded Dublin, rowed down the rivers of Russia to the walls of Constantinople, and turned from plunder to conquest with the Great Heathen Army in England — while settlers sailed west to the empty shores of Iceland. Slide across the century that gave the Vikings their name.",
    el: "Το 793 πλοία με πλώρες σε σχήμα δράκου έπεσαν πάνω στο μοναστήρι του Λίντισφαρν, και επί έναν αιώνα καμία ακτή της Ευρώπης δεν ήταν ασφαλής. Νορδικοί επιδρομείς λεηλάτησαν το Παρίσι και τη Σεβίλλη, ίδρυσαν το Δουβλίνο, κατέβηκαν με κουπιά τα ποτάμια της Ρωσίας ως τα τείχη της Κωνσταντινούπολης και πέρασαν από τη λεηλασία στην κατάκτηση με τον Μεγάλο Ειδωλολατρικό Στρατό στην Αγγλία — ενώ άποικοι έπλεαν δυτικά προς τις έρημες ακτές της Ισλανδίας. Μετακινηθείτε στον αιώνα που έδωσε στους Βίκινγκς το όνομά τους."
  },
  menuDescription: {
    en: "Lindisfarne, the sieges of Paris, the Rus at Constantinople, and the Great Heathen Army.",
    el: "Το Λίντισφαρν, οι πολιορκίες του Παρισιού, οι Ρως στην Κωνσταντινούπολη και ο Μεγάλος Ειδωλολατρικός Στρατός."
  },
  footerLabel: {
    en: "The Viking Raids · AD 789-886",
    el: "Οι Επιδρομές των Βίκινγκς · 789-886 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Viking Raids",
    el: "Οι Επιδρομές των Βίκινγκς"
  },
  theme: THEMES.onyx,
  timeline: [
    {
      year: 789,
      era: {
        en: "Early Viking Age",
        el: "Πρώιμη Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "Bloodshed at Portland",
            el: "Αίμα στο Πόρτλαντ"
          },
          description: {
            en: "Three ships of Northmen land at Portland in Wessex and kill the king's reeve, who had mistaken them for merchants — the first recorded Viking attack on England.",
            el: "Τρία πλοία Βορείων αποβιβάζονται στο Πόρτλαντ του Ουέσσεξ και σκοτώνουν τον βασιλικό επίτροπο, που τους είχε περάσει για εμπόρους — η πρώτη καταγεγραμμένη επίθεση Βίκινγκς στην Αγγλία."
          },
          extendedDescription: {
            en: "The Anglo-Saxon Chronicle records that the reeve Beaduheard rode down to meet the strangers and ordered them to the royal manor, 'for he did not know what they were', and was slain. The chronicler added that these were 'the first ships of Danish men which came to the land of the English' — though they were probably Norwegians from Hordaland. It was a small incident, but a warning of what was coming.",
            el: "Το Αγγλοσαξονικό Χρονικό αναφέρει ότι ο επίτροπος Μπέαντουχερντ κατέβηκε έφιππος να συναντήσει τους ξένους και τους διέταξε να πάνε στο βασιλικό κτήμα, «γιατί δεν ήξερε τι ήταν», και σκοτώθηκε. Ο χρονογράφος πρόσθεσε ότι αυτά ήταν «τα πρώτα πλοία Δανών που ήρθαν στη χώρα των Άγγλων» — αν και ήταν πιθανότατα Νορβηγοί από το Χόρνταλαντ. Ήταν ένα μικρό επεισόδιο, αλλά μια προειδοποίηση για όσα έρχονταν."
          },
          category: "military"
        }
      ]
    },
    {
      year: 793,
      era: {
        en: "Early Viking Age",
        el: "Πρώιμη Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "The sack of Lindisfarne",
            el: "Η λεηλασία του Λίντισφαρν"
          },
          description: {
            en: "Vikings plunder the holy island monastery of Lindisfarne off Northumbria, killing monks and carrying off treasure and slaves — the raid that opens the Viking Age.",
            el: "Βίκινγκς λεηλατούν το μοναστήρι του ιερού νησιού Λίντισφαρν στα ανοιχτά της Νορθουμβρίας, σκοτώνοντας μοναχούς και αρπάζοντας θησαυρούς και σκλάβους — η επιδρομή που ανοίγει την Εποχή των Βίκινγκς."
          },
          extendedDescription: {
            en: "Lindisfarne was one of the holiest places in England, the home of St Cuthbert and the famous Lindisfarne Gospels. The scholar Alcuin, writing from Charlemagne's court, was horrified: 'Never before has such terror appeared in Britain… the church of St Cuthbert spattered with the blood of the priests of God.' Undefended monasteries full of precious metal were an irresistible target, and the raids spread quickly around the British Isles.",
            el: "Το Λίντισφαρν ήταν ένας από τους ιερότερους τόπους της Αγγλίας, η έδρα του Αγίου Κάθμπερτ και των περίφημων Ευαγγελίων του Λίντισφαρν. Ο λόγιος Αλκουίνος, γράφοντας από την αυλή του Καρλομάγνου, ήταν συγκλονισμένος: «Ποτέ πριν δεν εμφανίστηκε τέτοιος τρόμος στη Βρετανία… η εκκλησία του Αγίου Κάθμπερτ ραντισμένη με το αίμα των ιερέων του Θεού». Τα ανυπεράσπιστα μοναστήρια γεμάτα πολύτιμα μέταλλα ήταν ακαταμάχητος στόχος, και οι επιδρομές εξαπλώθηκαν γρήγορα σε όλα τα Βρετανικά Νησιά."
          },
          category: "military"
        }
      ]
    },
    {
      year: 795,
      era: {
        en: "Early Viking Age",
        el: "Πρώιμη Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "Raids on Iona and Ireland",
            el: "Επιδρομές στην Αϊόνα και στην Ιρλανδία"
          },
          description: {
            en: "Norse raiders strike the great monastery of Iona in the Hebrides and the coasts of Ireland, beginning decades of attacks on the Celtic church.",
            el: "Νορδικοί επιδρομείς χτυπούν το μεγάλο μοναστήρι της Αϊόνας στις Εβρίδες και τις ακτές της Ιρλανδίας, ξεκινώντας δεκαετίες επιθέσεων κατά της κελτικής Εκκλησίας."
          },
          extendedDescription: {
            en: "Iona, founded by St Columba in 563, was raided again in 802 and in 806, when 68 monks were killed. Its community eventually fled to Kells in Ireland, probably carrying with them the unfinished Book of Kells. Irish annals record raid after raid on monasteries along the coasts. Norwegians sailing by way of Shetland and Orkney made the Scottish islands their stepping stones to the west.",
            el: "Η Αϊόνα, που ιδρύθηκε από τον Άγιο Κολούμβα το 563, δέχτηκε ξανά επιδρομή το 802 και το 806, όταν σκοτώθηκαν 68 μοναχοί. Η κοινότητά της τελικά κατέφυγε στο Κελς της Ιρλανδίας, παίρνοντας πιθανότατα μαζί της το ημιτελές Βιβλίο του Κελς. Τα ιρλανδικά χρονικά καταγράφουν επιδρομή μετά από επιδρομή σε μοναστήρια κατά μήκος των ακτών. Οι Νορβηγοί, πλέοντας μέσω των Σέτλαντ και των Όρκνεϊ, έκαναν τα σκωτικά νησιά τα σκαλοπάτια τους προς τη δύση."
          },
          category: "military"
        }
      ]
    },
    {
      year: 810,
      era: {
        en: "Early Viking Age",
        el: "Πρώιμη Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "King Godfred challenges Charlemagne",
            el: "Ο βασιλιάς Γκόντφρεντ προκαλεί τον Καρλομάγνο"
          },
          description: {
            en: "The Danish king Godfred ravages Frisia with 200 ships and boasts he will meet Charlemagne in battle at Aachen — but is murdered by one of his own men.",
            el: "Ο Δανός βασιλιάς Γκόντφρεντ λεηλατεί τη Φρισία με 200 πλοία και καυχιέται ότι θα συναντήσει τον Καρλομάγνο σε μάχη στο Άαχεν — αλλά δολοφονείται από έναν δικό του άνθρωπο."
          },
          extendedDescription: {
            en: "Godfred was the first Danish king known in detail from Frankish sources. He had already destroyed the Slavic trading town of Reric and moved its merchants to Hedeby, and he extended the Danevirke to guard his border. His confrontation with the Frankish empire shows that the Viking expansion was not just a matter of pirates: Scandinavian kings were emerging as players in European power politics.",
            el: "Ο Γκόντφρεντ ήταν ο πρώτος Δανός βασιλιάς που γνωρίζουμε με λεπτομέρεια από φραγκικές πηγές. Είχε ήδη καταστρέψει τη σλαβική εμπορική πόλη Ρέρικ και μεταφέρει τους εμπόρους της στο Χέντεμπι, και επέκτεινε το Ντάνεβιρκε για να φυλάει τα σύνορά του. Η αντιπαράθεσή του με τη Φραγκική Αυτοκρατορία δείχνει ότι η επέκταση των Βίκινγκς δεν ήταν απλώς υπόθεση πειρατών: οι Σκανδιναβοί βασιλείς αναδύονταν ως παίκτες στην ευρωπαϊκή πολιτική ισχύος."
          },
          category: "political"
        }
      ]
    },
    {
      year: 829,
      era: {
        en: "Early Viking Age",
        el: "Πρώιμη Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "Ansgar's mission to Birka",
            el: "Η αποστολή του Άνσγκαρ στη Μπίρκα"
          },
          description: {
            en: "The Frankish monk Ansgar travels to Birka, the Swedish trading town on Lake Mälaren, bringing the first Christian mission to Sweden.",
            el: "Ο Φράγκος μοναχός Άνσγκαρ ταξιδεύει στη Μπίρκα, τη σουηδική εμπορική πόλη στη λίμνη Μέλαρεν, φέρνοντας την πρώτη χριστιανική ιεραποστολή στη Σουηδία."
          },
          extendedDescription: {
            en: "Robbed by pirates on the way, Ansgar reached Birka with little more than his books, but he was allowed to preach and built a small church. Birka was a bustling port where furs from the north and silver from the Islamic world changed hands. Ansgar's mission had little lasting success — Sweden would not become Christian for two more centuries — but he became revered as the 'Apostle of the North'.",
            el: "Ληστευμένος από πειρατές στον δρόμο, ο Άνσγκαρ έφτασε στη Μπίρκα σχεδόν μόνο με τα βιβλία του, αλλά του επετράπη να κηρύξει και έχτισε μια μικρή εκκλησία. Η Μπίρκα ήταν ένα πολυσύχναστο λιμάνι όπου γούνες από τον βορρά και ασήμι από τον ισλαμικό κόσμο άλλαζαν χέρια. Η αποστολή του Άνσγκαρ είχε ελάχιστη διαρκή επιτυχία — η Σουηδία δεν θα γινόταν χριστιανική για άλλους δύο αιώνες — αλλά τιμήθηκε ως ο «Απόστολος του Βορρά»."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 841,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "The founding of Dublin",
            el: "Η ίδρυση του Δουβλίνου"
          },
          description: {
            en: "Norse raiders build a fortified ship-base on the River Liffey — the origin of Dublin, which becomes the greatest Viking town in the West.",
            el: "Νορδικοί επιδρομείς χτίζουν μια οχυρωμένη βάση πλοίων στον ποταμό Λίφι — η αρχή του Δουβλίνου, που εξελίσσεται στη μεγαλύτερη πόλη των Βίκινγκς στη Δύση."
          },
          extendedDescription: {
            en: "Instead of returning home each winter, the Vikings began to overwinter in Ireland in fortified camps the Irish called longphuirt. The one at Dublin — from the Irish Dubh Linn, 'black pool' — grew into a trading town and slave market linking Scandinavia, Britain, Francia and Iberia. Viking Dublin also founded Wexford, Waterford and Limerick, giving Ireland its first real towns.",
            el: "Αντί να επιστρέφουν στην πατρίδα κάθε χειμώνα, οι Βίκινγκς άρχισαν να ξεχειμωνιάζουν στην Ιρλανδία σε οχυρωμένα στρατόπεδα που οι Ιρλανδοί ονόμαζαν longphuirt. Εκείνο στο Δουβλίνο — από το ιρλανδικό Dubh Linn, «μαύρη λιμνούλα» — εξελίχθηκε σε εμπορική πόλη και σκλαβοπάζαρο που συνέδεε τη Σκανδιναβία, τη Βρετανία, τη Φραγκία και την Ιβηρική. Οι Βίκινγκς ίδρυσαν επίσης το Γουέξφορντ, το Γουότερφορντ και το Λίμερικ, δίνοντας στην Ιρλανδία τις πρώτες πραγματικές πόλεις της."
          },
          category: "political"
        }
      ]
    },
    {
      year: 844,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "Vikings sack Seville",
            el: "Οι Βίκινγκς λεηλατούν τη Σεβίλλη"
          },
          description: {
            en: "A Viking fleet sails up the Guadalquivir and plunders Seville, until the army of the Emir of Córdoba routs them.",
            el: "Ένας στόλος Βίκινγκς ανεβαίνει τον Γουαδαλκιβίρ και λεηλατεί τη Σεβίλλη, ώσπου ο στρατός του εμίρη της Κόρδοβας τους κατατροπώνει."
          },
          extendedDescription: {
            en: "Arab chroniclers called the raiders al-Majūs, 'fire-worshippers'. After a week of plunder, the Umayyad emir Abd al-Rahman II struck back, destroying some thirty ships and hanging captives from the palm trees of Seville. The emir then built a fleet and coastal defences, and later sent an envoy, the poet al-Ghazal, possibly to a Viking court in the north — a rare meeting of the Islamic and Norse worlds.",
            el: "Οι Άραβες χρονογράφοι αποκαλούσαν τους επιδρομείς αλ-Ματζούς, «πυρολάτρες». Μετά από μια εβδομάδα λεηλασιών, ο Ομεϋάδης εμίρης Αμπντ αλ-Ραχμάν Β΄ αντεπιτέθηκε, καταστρέφοντας περίπου τριάντα πλοία και κρεμώντας αιχμαλώτους από τους φοίνικες της Σεβίλλης. Ο εμίρης στη συνέχεια ναυπήγησε στόλο και κατασκεύασε παράκτιες οχυρώσεις, και αργότερα έστειλε έναν απεσταλμένο, τον ποιητή αλ-Γκαζάλ, ίσως σε κάποια αυλή Βίκινγκς στον βορρά — μια σπάνια συνάντηση του ισλαμικού και του νορδικού κόσμου."
          },
          category: "military"
        }
      ]
    },
    {
      year: 845,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "Ragnar at the gates of Paris",
            el: "Ο Ράγκναρ στις πύλες του Παρισιού"
          },
          description: {
            en: "A Viking fleet led by a chieftain named Reginherus — often identified with the legendary Ragnar Lodbrok — sails up the Seine and takes Paris on Easter Sunday.",
            el: "Ένας στόλος Βίκινγκς με επικεφαλής έναν αρχηγό ονόματι Ρεγκίνχερους — που συχνά ταυτίζεται με τον θρυλικό Ράγκναρ Λόντμπροκ — ανεβαίνει τον Σηκουάνα και καταλαμβάνει το Παρίσι την Κυριακή του Πάσχα."
          },
          extendedDescription: {
            en: "The Frankish king Charles the Bald paid the raiders 7,000 pounds of silver to leave — the first of many such payments in Francia. Handing over tribute bought peace for a season but advertised how profitable raiding could be. Whether Reginherus was the Ragnar of later sagas, whose sons were said to lead the Great Heathen Army, is uncertain: Ragnar Lodbrok is a figure more of legend than of history.",
            el: "Ο Φράγκος βασιλιάς Κάρολος ο Φαλακρός πλήρωσε στους επιδρομείς 7.000 λίβρες ασήμι για να φύγουν — η πρώτη από πολλές τέτοιες πληρωμές στη Φραγκία. Η καταβολή φόρου αγόραζε ειρήνη για μια σεζόν, αλλά διαφήμιζε πόσο κερδοφόρες μπορούσαν να είναι οι επιδρομές. Αν ο Ρεγκίνχερους ήταν ο Ράγκναρ των μεταγενέστερων επών, του οποίου οι γιοι λέγεται ότι ηγήθηκαν του Μεγάλου Ειδωλολατρικού Στρατού, είναι αβέβαιο: ο Ράγκναρ Λόντμπροκ είναι μορφή περισσότερο του θρύλου παρά της ιστορίας."
          },
          category: "military"
        }
      ]
    },
    {
      year: 859,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "Into the Mediterranean",
            el: "Στη Μεσόγειο"
          },
          description: {
            en: "The chieftains Hastein and Björn Ironside lead 62 ships through the Strait of Gibraltar on a three-year raid across the Mediterranean.",
            el: "Οι αρχηγοί Χάστεϊν και Μπιορν Σιδερόπλευρος οδηγούν 62 πλοία μέσα από το Στενό του Γιβραλτάρ σε μια τριετή επιδρομή σε όλη τη Μεσόγειο."
          },
          extendedDescription: {
            en: "They raided Morocco, the Balearic Islands, southern France and Italy, where they sacked the town of Luna. A later legend claims Hastein mistook Luna for Rome, faked his own death, and had himself carried into the town in a coffin before leaping out sword in hand. On the way home the fleet was badly mauled by the Andalusian navy, and only a fraction of the ships returned.",
            el: "Επιτέθηκαν στο Μαρόκο, στις Βαλεαρίδες, στη νότια Γαλλία και στην Ιταλία, όπου λεηλάτησαν την πόλη Λούνα. Ένας μεταγενέστερος θρύλος λέει ότι ο Χάστεϊν πέρασε τη Λούνα για τη Ρώμη, προσποιήθηκε τον θάνατό του και βάλθηκε να τον μεταφέρουν μέσα στην πόλη σε φέρετρο, πριν πεταχτεί έξω με το ξίφος στο χέρι. Στον δρόμο της επιστροφής ο στόλος δέχτηκε βαρύ πλήγμα από το ναυτικό της Ανδαλουσίας, και μόνο ένα μικρό μέρος των πλοίων επέστρεψε."
          },
          category: "military"
        }
      ]
    },
    {
      year: 860,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "The Rus attack Constantinople",
            el: "Οι Ρως επιτίθενται στην Κωνσταντινούπολη"
          },
          description: {
            en: "Some 200 ships of the Rus — Scandinavians who had crossed the rivers of eastern Europe — suddenly appear before Constantinople and ravage its suburbs.",
            el: "Περίπου 200 πλοία των Ρως — Σκανδιναβών που είχαν διασχίσει τα ποτάμια της ανατολικής Ευρώπης — εμφανίζονται ξαφνικά μπροστά στην Κωνσταντινούπολη και λεηλατούν τα προάστιά της."
          },
          extendedDescription: {
            en: "They struck on 18 June while Emperor Michael III was away campaigning. Patriarch Photios preached two sermons describing the terror of 'a fierce and barbarous people' and a city saved, as the Byzantines believed, by the robe of the Virgin carried along the walls. The raid marked the Rus' dramatic entry into Byzantine history. Within a few years Photios reported that they had accepted a bishop — the first Christian mission to the Rus.",
            el: "Επιτέθηκαν στις 18 Ιουνίου, ενώ ο αυτοκράτορας Μιχαήλ Γ΄ έλειπε σε εκστρατεία. Ο πατριάρχης Φώτιος εκφώνησε δύο ομιλίες περιγράφοντας τον τρόμο από «ένα άγριο και βάρβαρο έθνος» και μια πόλη που σώθηκε, όπως πίστευαν οι Βυζαντινοί, από την εσθήτα της Θεοτόκου που περιφέρθηκε στα τείχη. Η επιδρομή σηματοδότησε τη θεαματική είσοδο των Ρως στη βυζαντινή ιστορία. Μέσα σε λίγα χρόνια ο Φώτιος ανέφερε ότι είχαν δεχτεί επίσκοπο — η πρώτη χριστιανική αποστολή στους Ρως."
          },
          category: "military"
        }
      ]
    },
    {
      year: 865,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "The Great Heathen Army lands",
            el: "Η απόβαση του Μεγάλου Ειδωλολατρικού Στρατού"
          },
          description: {
            en: "A large Danish army lands in East Anglia, not to raid but to conquer; within a few years it has taken York and destroyed the kingdoms of Northumbria and East Anglia.",
            el: "Ένας μεγάλος δανικός στρατός αποβιβάζεται στην Ανατολική Αγγλία, όχι για επιδρομή αλλά για κατάκτηση· μέσα σε λίγα χρόνια έχει καταλάβει την Υόρκη και έχει καταλύσει τα βασίλεια της Νορθουμβρίας και της Ανατολικής Αγγλίας."
          },
          extendedDescription: {
            en: "Tradition names its leaders as Ivar the Boneless, Halfdan and Ubba, sons of Ragnar Lodbrok. York fell in 866 and became Jórvík, capital of a Viking kingdom. King Edmund of East Anglia was killed in 869 and later venerated as a martyr. Mercia submitted, and only Wessex was left standing among the English kingdoms. The army's winter camp at Torksey has yielded thousands of coins, weights and gaming pieces.",
            el: "Η παράδοση κατονομάζει ως αρχηγούς του τον Ίβαρ τον Άνευ Οστών, τον Χάλφνταν και τον Ούμπα, γιους του Ράγκναρ Λόντμπροκ. Η Υόρκη έπεσε το 866 και έγινε το Γιόρβικ, πρωτεύουσα ενός βασιλείου των Βίκινγκς. Ο βασιλιάς Έντμουντ της Ανατολικής Αγγλίας σκοτώθηκε το 869 και αργότερα τιμήθηκε ως μάρτυρας. Η Μερκία υποτάχθηκε, και από τα αγγλικά βασίλεια μόνο το Ουέσσεξ έμεινε όρθιο. Το χειμερινό στρατόπεδο του στρατού στο Τόρκσεϊ έχει αποδώσει χιλιάδες νομίσματα, σταθμά και πιόνια παιχνιδιών."
          },
          category: "military"
        }
      ]
    },
    {
      year: 872,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "Harald Fairhair and the Battle of Hafrsfjord",
            el: "Ο Χάραλντ Ωραιομάλλης και η μάχη του Χάφρσφιορντ"
          },
          description: {
            en: "According to the sagas, Harald Fairhair defeats rival kings at Hafrsfjord near Stavanger and becomes the first king of all Norway; the traditional date is 872.",
            el: "Σύμφωνα με τα έπη, ο Χάραλντ Ωραιομάλλης νικά αντίπαλους βασιλείς στο Χάφρσφιορντ κοντά στο Σταβάνγκερ και γίνεται ο πρώτος βασιλιάς όλης της Νορβηγίας· η παραδοσιακή χρονολογία είναι το 872."
          },
          extendedDescription: {
            en: "Snorri Sturluson tells how Harald vowed not to cut or comb his hair until he ruled all Norway — hence his nickname. Modern historians place the battle later, perhaps around 880–900, and doubt that his rule stretched far beyond the western coast. But the sagas claimed that chieftains who refused to submit fled west to Iceland, making Harald's unification the founding story of both Norway and the Icelandic settlement.",
            el: "Ο Σνόρι Στούρλουσον αφηγείται πώς ο Χάραλντ ορκίστηκε να μην κόψει ούτε να χτενίσει τα μαλλιά του μέχρι να κυβερνήσει όλη τη Νορβηγία — εξ ου και το προσωνύμιό του. Οι σύγχρονοι ιστορικοί τοποθετούν τη μάχη αργότερα, ίσως γύρω στο 880–900, και αμφιβάλλουν ότι η εξουσία του εκτεινόταν πολύ πέρα από τη δυτική ακτή. Όμως τα έπη υποστήριζαν ότι οι αρχηγοί που αρνήθηκαν να υποταχθούν κατέφυγαν δυτικά στην Ισλανδία, κάνοντας την ενοποίηση του Χάραλντ την ιδρυτική ιστορία τόσο της Νορβηγίας όσο και του εποικισμού της Ισλανδίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 874,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "The settlement of Iceland",
            el: "Ο εποικισμός της Ισλανδίας"
          },
          description: {
            en: "Ingólfr Arnarson, by tradition the first permanent settler, makes his home at Reykjavík; within sixty years Iceland's habitable land is claimed.",
            el: "Ο Ίνγκολφουρ Άρναρσον, κατά την παράδοση ο πρώτος μόνιμος άποικος, εγκαθίσταται στο Ρέικιαβικ· μέσα σε εξήντα χρόνια όλη η κατοικήσιμη γη της Ισλανδίας έχει καταληφθεί."
          },
          extendedDescription: {
            en: "The Book of Settlements says Ingólfr threw the carved pillars of his high-seat overboard and settled where they washed ashore, at the 'smoky bay' of Reykjavík, named for its steaming hot springs. Settlers came from Norway and from Norse colonies in the British Isles, bringing many Irish and Scottish slaves and wives; DNA studies show much of Iceland's female ancestry is Gaelic. Irish hermit monks may already have been living on the island.",
            el: "Το Βιβλίο των Εποικισμών λέει ότι ο Ίνγκολφουρ έριξε στη θάλασσα τις σκαλιστές κολόνες του θρόνου του και εγκαταστάθηκε εκεί όπου εκείνες ξεβράστηκαν, στον «καπνισμένο κόλπο» του Ρέικιαβικ, που ονομάστηκε έτσι από τις αχνιστές θερμές πηγές του. Οι άποικοι ήρθαν από τη Νορβηγία και από νορδικές αποικίες στα Βρετανικά Νησιά, φέρνοντας πολλούς Ιρλανδούς και Σκωτσέζους σκλάβους και συζύγους· μελέτες DNA δείχνουν ότι μεγάλο μέρος της γυναικείας καταγωγής της Ισλανδίας είναι γαελικό. Ιρλανδοί ερημίτες μοναχοί ίσως ζούσαν ήδη στο νησί."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 878,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "Alfred the Great wins at Edington",
            el: "Ο Άλφρεντ ο Μέγας νικά στο Έντινγκτον"
          },
          description: {
            en: "Surprised by the Danes and driven into the Somerset marshes, King Alfred of Wessex rallies his army and defeats Guthrum at Edington, halting the Viking conquest of England.",
            el: "Αιφνιδιασμένος από τους Δανούς και εκδιωγμένος στα έλη του Σόμερσετ, ο βασιλιάς Άλφρεντ του Ουέσσεξ ανασυντάσσει τον στρατό του και νικά τον Γκούθρουμ στο Έντινγκτον, ανακόπτοντας την κατάκτηση της Αγγλίας από τους Βίκινγκς."
          },
          extendedDescription: {
            en: "After his victory, Alfred had Guthrum baptised as his godson. A later treaty divided England: the lands north and east of a line along Watling Street became the Danelaw, where Scandinavian law and custom prevailed. The Danes left a deep mark on English — words such as sky, egg, knife, law and they are Norse — and on hundreds of place names ending in -by and -thorpe.",
            el: "Μετά τη νίκη του, ο Άλφρεντ βάφτισε τον Γκούθρουμ ως αναδεκτό του. Μια μεταγενέστερη συνθήκη διαίρεσε την Αγγλία: τα εδάφη βόρεια και ανατολικά μιας γραμμής κατά μήκος της οδού Γουότλινγκ έγιναν το Ντέινλω, όπου επικρατούσε το σκανδιναβικό δίκαιο και έθιμο. Οι Δανοί άφησαν βαθύ αποτύπωμα στην αγγλική γλώσσα — λέξεις όπως sky, egg, knife, law και they είναι νορδικές — και σε εκατοντάδες τοπωνύμια που τελειώνουν σε -by και -thorpe."
          },
          category: "military"
        }
      ]
    },
    {
      year: 885,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "The great siege of Paris",
            el: "Η μεγάλη πολιορκία του Παρισιού"
          },
          description: {
            en: "Hundreds of Viking ships besiege Paris for nearly a year, but Count Odo and Bishop Gozlin hold the fortified island city.",
            el: "Εκατοντάδες πλοία Βίκινγκς πολιορκούν το Παρίσι για σχεδόν έναν χρόνο, αλλά ο κόμης Όντων και ο επίσκοπος Γκοζλέν κρατούν την οχυρωμένη νησιωτική πόλη."
          },
          extendedDescription: {
            en: "The monk Abbo, an eyewitness, described towers, siege engines and fire-ships hurled against the bridges of the Île de la Cité. When Emperor Charles the Fat finally arrived in 886, he did not fight but paid the Vikings and let them sail on to plunder Burgundy. His weakness cost him his throne, while Odo's heroism won him the crown of West Francia in 888 — the first step toward the later Capetian dynasty.",
            el: "Ο μοναχός Άμπο, αυτόπτης μάρτυρας, περιέγραψε πύργους, πολιορκητικές μηχανές και πυρπολικά που εξαπολύθηκαν κατά των γεφυρών της Ιλ ντε λα Σιτέ. Όταν ο αυτοκράτορας Κάρολος ο Παχύς έφτασε τελικά το 886, δεν πολέμησε αλλά πλήρωσε τους Βίκινγκς και τους άφησε να πλεύσουν για να λεηλατήσουν τη Βουργουνδία. Η αδυναμία του του κόστισε τον θρόνο, ενώ ο ηρωισμός του Όντωνα του χάρισε το στέμμα της Δυτικής Φραγκίας το 888 — το πρώτο βήμα προς τη μεταγενέστερη δυναστεία των Καπετιδών."
          },
          category: "military"
        }
      ]
    }
  ]
} satisfies PeriodDefinition;
