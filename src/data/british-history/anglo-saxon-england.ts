/** Anglo-Saxon England — Αγγλοσαξονική Αγγλία · British History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const ANGLO_SAXON_ENGLAND = {
  id: "anglo-saxon-england" as const,
  label: {
    en: "Anglo-Saxon England",
    el: "Αγγλοσαξονική Αγγλία"
  },
  supertitle: {
    en: "Englaland",
    el: "Ένγκλαλαντ"
  },
  title: {
    en: "Anglo-Saxon England",
    el: "Η Αγγλοσαξονική Αγγλία"
  },
  subtitle: {
    en: "From the post-Roman migrations of Angles, Saxons, and Jutes and the legendary landing of Hengist and Horsa, through the Christianisation of the heptarchy, the age of Bede, Alfred's wars against the Danes, and the empire of Cnut, to the Norman Conquest of 1066. Slide across the centuries to read the major events that forged the kingdom of England.",
    el: "Από τις μεταρωμαϊκές μεταναστεύσεις Άγγλων, Σαξόνων και Γιουτλανδών και τη θρυλική απόβαση του Χένγκιστ και του Χόρσα, μέσα από τον εκχριστιανισμό της Επταρχίας, την εποχή του Βέδα, τους πολέμους του Αλφρέδου με τους Δανούς και την αυτοκρατορία του Κανούτου, έως τη Νορμανδική Κατάκτηση του 1066. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα γεγονότα που σφυρηλάτησαν το βασίλειο της Αγγλίας."
  },
  menuDescription: {
    en: "The making of England, from the Saxon migrations to Alfred, Cnut, and Hastings.",
    el: "Η γέννηση της Αγγλίας, από τις σαξονικές μεταναστεύσεις ως τον Αλφρέδο, τον Κανούτο και το Χάστινγκς."
  },
  footerLabel: {
    en: "Anglo-Saxon England · 449-1066 AD",
    el: "Αγγλοσαξονική Αγγλία · 449-1066 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Anglo-Saxon England",
    el: "Αγγλοσαξονική Αγγλία"
  },
  theme: THEMES.amber,
  timeline: [
    {
      year: 449,
      era: {
        en: "Adventus Saxonum",
        el: "Άφιξη των Σαξόνων"
      },
      events: [
        {
          title: {
            en: "Hengist and Horsa land in Kent",
            el: "Ο Χένγκιστ και ο Χόρσα αποβιβάζονται στο Κεντ"
          },
          description: {
            en: "According to the Anglo-Saxon Chronicle, the British king Vortigern invites the Jutish brothers Hengist and Horsa to defend the island against the Picts. They settle in Thanet and soon turn on their hosts — the symbolic beginning of the English settlement.",
            el: "Σύμφωνα με το Αγγλοσαξονικό Χρονικό, ο Βρετανός βασιλιάς Βορτιγέρνης προσκαλεί τους Γιουτλανδούς αδελφούς Χένγκιστ και Χόρσα να υπερασπιστούν το νησί από τους Πικτούς. Εγκαθίστανται στο Θάνετ και σύντομα στρέφονται κατά των οικοδεσποτών τους — η συμβολική αρχή της αγγλικής εποίκισης."
          },
          extendedDescription: {
            en: "The date is traditional rather than archaeological: cremation cemeteries and grübenhaus huts of distinctly North German type are attested in eastern England from the early fifth century. Whether by invitation, conquest, or piecemeal settlement, Angles from southern Denmark, Saxons from northwestern Germany, and Jutes from Jutland gradually displaced or absorbed the Romano-British population east of a line from the Solent to the Humber. Their language, a West Germanic dialect, would in time become English.",
            el: "Η ημερομηνία είναι παραδοσιακή και όχι αρχαιολογική: νεκροταφεία καύσεων και υπόσκαφες καλύβες βορειογερμανικού τύπου μαρτυρούνται στην ανατολική Αγγλία από τις αρχές του 5ου αιώνα. Είτε μέσω πρόσκλησης, είτε κατάκτησης, είτε σταδιακής εποίκισης, Άγγλοι από τη νότια Δανία, Σάξονες από τη βορειοδυτική Γερμανία και Γιουτλανδοί από την Ιουτλάνδη εκτόπισαν ή αφομοίωσαν σταδιακά τον ρωμαιοβρετανικό πληθυσμό ανατολικά μιας γραμμής Σόλεντ-Χάμπερ. Η γλώσσα τους, μια δυτικογερμανική διάλεκτος, θα γινόταν στο πέρασμα του χρόνου τα Αγγλικά."
          },
          category: "military"
        }
      ]
    },
    {
      year: 500,
      era: {
        en: "Britons resist",
        el: "Οι Βρετανοί αντιστέκονται"
      },
      events: [
        {
          title: {
            en: "Battle of Mons Badonicus",
            el: "Μάχη του Όρους Βάδωνος"
          },
          description: {
            en: "Somewhere in southern Britain — site unknown — a Romano-British army inflicts a heavy defeat on the advancing Saxons. The British monk Gildas, writing a generation later, says the victory bought the island fifty years of uneasy peace.",
            el: "Κάπου στη νότια Βρετανία — η ακριβής τοποθεσία αγνοείται — ένας ρωμαιοβρετανικός στρατός νικά συντριπτικά τους προελαύνοντες Σάξονες. Ο Βρετανός μοναχός Γκίλντας, γράφοντας μια γενιά αργότερα, λέει ότι η νίκη χάρισε στο νησί πενήντα χρόνια εύθραυστης ειρήνης."
          },
          extendedDescription: {
            en: "Mount Badon is the historical kernel around which the legend of King Arthur eventually crystallised: the ninth-century Historia Brittonum credits 'dux bellorum' Arthur with the victory, though no source before that names him. The battle, real and important, did not reverse the long Germanic settlement but interrupted it: pollen records show Britons recovered lost ground in parts of the south for a generation.",
            el: "Το Όρος Βάδωνος είναι ο ιστορικός πυρήνας γύρω από τον οποίο κρυστάλλωσε εν τέλει ο θρύλος του Βασιλιά Αρθούρου: η Historia Brittonum του 9ου αιώνα αποδίδει τη νίκη στον «dux bellorum» Αρθούρο, αν και καμία πηγή πριν από αυτήν δεν τον κατονομάζει. Η μάχη, πραγματική και σημαντική, δεν ανέτρεψε τη μακρά γερμανική εποίκιση αλλά τη διέκοψε: παλαιοοικολογικά δεδομένα δείχνουν ότι οι Βρετανοί ανέκτησαν χαμένα εδάφη σε τμήματα του νότου για μια γενιά."
          },
          category: "military"
        }
      ]
    },
    {
      year: 597,
      era: {
        en: "Gregorian Mission",
        el: "Γρηγοριανή Αποστολή"
      },
      events: [
        {
          title: {
            en: "Augustine lands in Kent",
            el: "Ο Αυγουστίνος αποβιβάζεται στο Κεντ"
          },
          description: {
            en: "Sent by Pope Gregory the Great, the monk Augustine arrives at the court of King Æthelberht of Kent with forty companions. The king, whose Frankish queen Bertha is already Christian, is baptised and grants Augustine a seat at Canterbury.",
            el: "Σταλμένος από τον Πάπα Γρηγόριο τον Μεγάλο, ο μοναχός Αυγουστίνος φτάνει στην αυλή του βασιλιά Έθελμπερτ του Κεντ με σαράντα συνοδούς. Ο βασιλιάς, του οποίου η Φραγκίδα σύζυγος Βέρθα είναι ήδη χριστιανή, βαπτίζεται και παραχωρεί στον Αυγουστίνο έδρα στο Κάντερμπερι."
          },
          extendedDescription: {
            en: "Bede tells the story of how Gregory, seeing fair-haired English slave boys in the Roman market, asked who they were; told they were 'Angles', he said 'non Angli sed angeli' — 'not Angles but angels'. The Roman mission planted Latin Christianity in the south-east; in the north, Irish monks from Iona had already begun parallel evangelisation. The two streams would clash, and merge, at the Synod of Whitby.",
            el: "Ο Βέδας αφηγείται πώς ο Γρηγόριος, βλέποντας ξανθούς Άγγλους δούλους στη ρωμαϊκή αγορά, ρώτησε ποιοι είναι· όταν του είπαν ότι είναι «Άγγλοι», απάντησε «non Angli sed angeli» — «όχι Άγγλοι, αλλά άγγελοι». Η ρωμαϊκή αποστολή φύτεψε τον λατινικό χριστιανισμό στα νοτιοανατολικά· στον βορρά, Ιρλανδοί μοναχοί από την Ιόνα είχαν ήδη ξεκινήσει παράλληλο ευαγγελισμό. Τα δύο ρεύματα θα συγκρούονταν, και θα συγχωνεύονταν, στη Σύνοδο του Γουίτμπι."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 625,
      era: {
        en: "Heptarchy",
        el: "Επταρχία"
      },
      events: [
        {
          title: {
            en: "The Sutton Hoo ship burial",
            el: "Ο πλοιοταφικός τύμβος του Σάτον Χου"
          },
          description: {
            en: "Around this date a great Anglo-Saxon king — most likely Rædwald of East Anglia — is laid to rest in a 27-metre oak ship buried under a mound at Sutton Hoo, with a magnificent helmet, gold shoulder-clasps, and Byzantine silver.",
            el: "Γύρω σε αυτήν την ημερομηνία ένας μεγάλος αγγλοσαξονικός βασιλιάς — πιθανότατα ο Ραίντγουαλντ της Ανατολικής Αγγλίας — ενταφιάζεται σε δρύινο πλοίο μήκους 27 μέτρων κάτω από τύμβο στο Σάτον Χου, μαζί με υπέροχο κράνος, χρυσές ωμικές πόρπες και βυζαντινό άργυρο."
          },
          extendedDescription: {
            en: "Discovered on the eve of the Second World War, Sutton Hoo overturned a Victorian image of the Anglo-Saxons as barbarous interlopers. The helmet's iron mask, the cloisonné garnet shoulder-clasps imported through Frankish networks, the Coptic bronze bowl, and the Byzantine silver platters of Anastasius I attest to an East Anglian kingship plugged into Mediterranean trade. The treasure also shows the hybrid religious world Bede describes: pagan ship-burial alongside christening spoons and apostle plate.",
            el: "Ανακαλυμμένο στα πρόθυρα του Β΄ Παγκοσμίου Πολέμου, το Σάτον Χου ανέτρεψε τη βικτωριανή εικόνα των Αγγλοσαξόνων ως βαρβάρων εισβολέων. Η σιδερένια προσωπίδα του κράνους, οι χρυσές ωμικές πόρπες με κλωβωτή διακόσμηση από γρανάτη — εισηγμένες μέσω φραγκικών δικτύων — η κοπτική χάλκινη λεκάνη και τα βυζαντινά αργυρά πιάτα του Αναστασίου Α΄ μαρτυρούν ένα βασίλειο της Ανατολικής Αγγλίας συνδεδεμένο με το μεσογειακό εμπόριο. Ο θησαυρός αποκαλύπτει επίσης τον υβριδικό θρησκευτικό κόσμο που περιγράφει ο Βέδας: παγανιστική ταφή σε πλοίο μαζί με κουτάλια βαπτίσματος και πιάτα με τους Αποστόλους."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 664,
      era: {
        en: "Synod of Whitby",
        el: "Σύνοδος του Γουίτμπι"
      },
      events: [
        {
          title: {
            en: "Northumbria chooses Rome",
            el: "Η Νορθουμβρία επιλέγει τη Ρώμη"
          },
          description: {
            en: "King Oswiu of Northumbria summons a synod at the double monastery of Whitby to decide whether the English church should follow the Roman or the Irish calculation of Easter. Persuaded by Wilfrid of Ripon, Oswiu chooses Rome.",
            el: "Ο βασιλιάς Όσγουιου της Νορθουμβρίας συγκαλεί σύνοδο στη διπλή μονή του Γουίτμπι για να αποφασίσει αν η αγγλική εκκλησία θα ακολουθεί τη ρωμαϊκή ή την ιρλανδική σύνταξη του Πάσχα. Πεπεισμένος από τον Γουίλφριντ του Ρίπον, ο Όσγουιου επιλέγει τη Ρώμη."
          },
          extendedDescription: {
            en: "The Easter controversy was a proxy for two visions of the church: the rigorous, monastic, peripheral Christianity of Iona and the centralised, urban, Latin Christianity of Canterbury. The decision aligned England with continental Latin Europe rather than the Atlantic Celtic world — a choice with profound consequences for liturgy, learning, and the political imagination of the kingdom. Within decades the English Church would produce its first great scholars, Theodore of Tarsus and Bede, and become a missionary power in its own right.",
            el: "Η διαμάχη για το Πάσχα ήταν ένα προσχηματικό ζήτημα για δύο εκκλησιαστικά οράματα: τον αυστηρό, μοναστικό, περιφερειακό χριστιανισμό της Ιόνα και τον συγκεντρωτικό, αστικό, λατινικό χριστιανισμό του Κάντερμπερι. Η απόφαση εναρμόνισε την Αγγλία με τη λατινική ηπειρωτική Ευρώπη και όχι με τον ατλαντικό κελτικό κόσμο — επιλογή με βαθιές συνέπειες για τη λειτουργία, τη λογιοσύνη και την πολιτική φαντασία του βασιλείου. Μέσα σε δεκαετίες η Αγγλική Εκκλησία θα γεννούσε τους πρώτους μεγάλους λογίους της, τον Θεόδωρο της Ταρσού και τον Βέδα, και θα γινόταν ιεραποστολική δύναμη η ίδια."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 731,
      era: {
        en: "Northumbrian Renaissance",
        el: "Νορθουμβριανή Αναγέννηση"
      },
      events: [
        {
          title: {
            en: "Bede completes the Ecclesiastical History",
            el: "Ο Βέδας ολοκληρώνει την «Εκκλησιαστική Ιστορία»"
          },
          description: {
            en: "At Jarrow on the Tyne, the monk Bede finishes his Historia Ecclesiastica Gentis Anglorum, the great history that first imagines the English as a single Christian people and dates events from the Incarnation in our familiar AD form.",
            el: "Στο Τζάρροου, στις όχθες του Τάιν, ο μοναχός Βέδας ολοκληρώνει τη «Historia Ecclesiastica Gentis Anglorum», τη μεγάλη ιστορία που για πρώτη φορά φαντάζεται τους Άγγλους ως ενιαίο χριστιανικό λαό και χρονολογεί τα γεγονότα από την Ενσάρκωση με τη γνωστή μας μορφή «μ.Χ.»."
          },
          extendedDescription: {
            en: "Bede, who never travelled further than Lindisfarne, produced one of the great works of medieval Latin literature: precise, sourced from witnesses and documents, and shaped by a clear vision of providential history. His use of Dionysius Exiguus's Anno Domini reckoning would become standard across Europe. He also wrote scientific treatises, biblical commentaries, and saints' lives that fed Carolingian Europe's hunger for English Latin learning.",
            el: "Ο Βέδας, που ποτέ δεν ταξίδεψε μακρύτερα από το Λίντισφαρν, παρήγαγε ένα από τα μεγάλα έργα της μεσαιωνικής λατινικής λογοτεχνίας: ακριβές, βασισμένο σε μάρτυρες και έγγραφα, και διαμορφωμένο από καθαρό όραμα προνοιακής ιστορίας. Η χρήση του «Anno Domini» του Διονυσίου του Μικρού θα γινόταν πανευρωπαϊκή νόρμα. Έγραψε επίσης επιστημονικές πραγματείες, βιβλικά υπομνήματα και βίους αγίων που τροφοδότησαν την πείνα της Καρολίγγειας Ευρώπης για αγγλική λατινική παιδεία."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 757,
      era: {
        en: "Mercian Supremacy",
        el: "Μερκιανή Υπεροχή"
      },
      events: [
        {
          title: {
            en: "Offa becomes king of Mercia",
            el: "Ο Όφφα γίνεται βασιλιάς της Μερκίας"
          },
          description: {
            en: "After a brief civil war Offa takes the Mercian throne, ruling for thirty-nine years. He extends Mercian power over Kent, Sussex, and East Anglia, corresponds with Charlemagne as an equal, and builds the great earthwork dyke that still bears his name.",
            el: "Μετά από σύντομο εμφύλιο, ο Όφφα ανεβαίνει στον θρόνο της Μερκίας και βασιλεύει τριάντα εννέα χρόνια. Επεκτείνει τη μερκιανή κυριαρχία στο Κεντ, το Σάσεξ και την Ανατολική Αγγλία, αλληλογραφεί με τον Καρλομάγνο ως ίσος και κατασκευάζει τη μεγάλη χωμάτινη οχύρωση που ακόμη φέρει το όνομά του."
          },
          extendedDescription: {
            en: "Offa's Dyke, running roughly 130 km along the modern Welsh border, is the longest linear earthwork in Britain and one of the largest in early medieval Europe. He also reformed the silver penny, the coin that would dominate English exchange for half a millennium, and bullied a papal legation in 786 into recognising a third English archbishopric at Lichfield. After his death the over-extended Mercian hegemony was eclipsed by a rising Wessex.",
            el: "Το Τείχος του Όφφα, που εκτείνεται περίπου 130 χλμ. κατά μήκος των σημερινών ουαλικών συνόρων, είναι το μακρύτερο γραμμικό χωμάτινο έργο της Βρετανίας και ένα από τα μεγαλύτερα της πρώιμης μεσαιωνικής Ευρώπης. Αναμόρφωσε επίσης την αργυρή πένα, το νόμισμα που θα κυριαρχούσε στις αγγλικές συναλλαγές για μισή χιλιετία, και πίεσε παπική αντιπροσωπεία το 786 να αναγνωρίσει τρίτη αγγλική αρχιεπισκοπή στο Λίτσφιλντ. Μετά τον θάνατό του, η υπερεκτεταμένη μερκιανή ηγεμονία επισκιάστηκε από την ανερχόμενη Ουέσσεξ."
          },
          category: "political"
        }
      ]
    },
    {
      year: 793,
      era: {
        en: "Viking Age",
        el: "Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "Vikings sack Lindisfarne",
            el: "Οι Βίκινγκς λεηλατούν το Λίντισφαρν"
          },
          description: {
            en: "On 8 June Norse raiders descend on the island monastery of Lindisfarne, slaughtering monks and carrying off the relics of Saint Cuthbert. Alcuin, writing from Charlemagne's court, calls it a catastrophe never before imagined.",
            el: "Στις 8 Ιουνίου, Σκανδιναβοί επιδρομείς πέφτουν στη νησιωτική μονή του Λίντισφαρν, σφάζοντας μοναχούς και αρπάζοντας τα λείψανα του Αγίου Κούθβερτ. Ο Αλκουίνος, γράφοντας από την αυλή του Καρλομάγνου, την αποκαλεί καταστροφή που δεν είχε ποτέ φανταστεί κανείς."
          },
          extendedDescription: {
            en: "The Lindisfarne raid opened a Viking century in the British Isles. Within two generations the Great Heathen Army of Ivar the Boneless and Halfdan would land in East Anglia (865), overrun Northumbria, Mercia, and East Anglia, and threaten Wessex itself. The defeat of three of the four English kingdoms by 878 left the survival of any English polity hanging on the resistance of Alfred of Wessex.",
            el: "Η επιδρομή στο Λίντισφαρν άνοιξε έναν βίκινγκ αιώνα στις Βρετανικές Νήσους. Μέσα σε δύο γενιές, ο Μεγάλος Ειδωλολατρικός Στρατός του Ίβαρ του Ασπόνδυλου και του Χάλφνταν θα αποβιβαζόταν στην Ανατολική Αγγλία (865), θα κατακτούσε τη Νορθουμβρία, τη Μερκία και την Ανατολική Αγγλία και θα απειλούσε την ίδια την Ουέσσεξ. Η ήττα τριών από τα τέσσερα αγγλικά βασίλεια έως το 878 άφησε την επιβίωση οποιασδήποτε αγγλικής πολιτείας να κρέμεται από την αντίσταση του Αλφρέδου της Ουέσσεξ."
          },
          category: "military"
        }
      ]
    },
    {
      year: 871,
      era: {
        en: "Reign of Alfred",
        el: "Βασιλεία του Αλφρέδου"
      },
      events: [
        {
          title: {
            en: "Alfred becomes king of Wessex",
            el: "Ο Αλφρέδος γίνεται βασιλιάς της Ουέσσεξ"
          },
          description: {
            en: "After his elder brother Æthelred dies of wounds taken fighting the Danes, the twenty-one-year-old Alfred takes the throne in a year of nine pitched battles. Wessex alone remains of the four English kingdoms.",
            el: "Μετά τον θάνατο του μεγαλύτερου αδελφού του Έθελρεντ από τραύματα στις μάχες κατά των Δανών, ο εικοσιενός Αλφρέδος αναλαμβάνει τον θρόνο σε μια χρονιά εννέα τακτικών μαχών. Από τα τέσσερα αγγλικά βασίλεια απομένει μόνο η Ουέσσεξ."
          },
          extendedDescription: {
            en: "Alfred is the only English monarch to bear the epithet 'the Great'. After a desperate winter hiding in the Somerset marshes at Athelney in 878 — the moment of the legendary burnt cakes — he rallied the western shires, defeated Guthrum at Edington, and forced him to accept baptism. The peace of Wedmore divided England between Wessex and a 'Danelaw' east of the Watling Street, but it preserved an English realm for Alfred's heirs to expand.",
            el: "Ο Αλφρέδος είναι ο μοναδικός Άγγλος μονάρχης που φέρει το επίθετο «ο Μέγας». Μετά από έναν απελπιστικό χειμώνα κρυμμένος στους βάλτους του Σόμερσετ στο Άθελνεϊ το 878 — η στιγμή των θρυλικών καμμένων κέικ — συγκέντρωσε τους δυτικούς νομούς, νίκησε τον Γκούθρουμ στο Έντινγκτον και τον ανάγκασε να βαπτιστεί. Η ειρήνη του Γουέντμορ χώρισε την Αγγλία ανάμεσα στην Ουέσσεξ και έναν «Ντέιλο» ανατολικά της Γουάτλινγκ Στρητ, αλλά διατήρησε ένα αγγλικό βασίλειο για τους κληρονόμους του Αλφρέδου να επεκτείνουν."
          },
          category: "political"
        }
      ]
    },
    {
      year: 878,
      era: {
        en: "Reign of Alfred",
        el: "Βασιλεία του Αλφρέδου"
      },
      events: [
        {
          title: {
            en: "Battle of Edington",
            el: "Μάχη του Έντινγκτον"
          },
          description: {
            en: "In May Alfred emerges from the marshes of Athelney with the fyrd of Somerset, Wiltshire, and Hampshire and defeats the Viking king Guthrum at Edington. Guthrum surrenders, is baptised with Alfred as his godfather, and withdraws to East Anglia.",
            el: "Τον Μάιο, ο Αλφρέδος βγαίνει από τους βάλτους του Άθελνεϊ με τη φούρντα του Σόμερσετ, του Ουίλτσιρ και του Χάμπσιρ και νικά τον βασιλιά των Βίκινγκς Γκούθρουμ στο Έντινγκτον. Ο Γκούθρουμ παραδίδεται, βαπτίζεται με τον Αλφρέδο ως νονό και αποσύρεται στην Ανατολική Αγγλία."
          },
          extendedDescription: {
            en: "Edington saved Wessex and gave Alfred the breathing space to rebuild. Over the next two decades he reorganised the military around fortified burhs, created a navy, codified the laws, and patronised a remarkable programme of translation from Latin to Old English, personally rendering Gregory the Great's Pastoral Care and Boethius's Consolation of Philosophy. The Anglo-Saxon Chronicle was begun under his patronage. The result was not just a surviving kingdom but a literate vernacular polity.",
            el: "Το Έντινγκτον έσωσε την Ουέσσεξ και έδωσε στον Αλφρέδο την ανάσα να ξαναχτίσει. Τις επόμενες δύο δεκαετίες αναδιοργάνωσε τον στρατό γύρω από οχυρωμένα «burhs», δημιούργησε ναυτικό, κωδικοποίησε τους νόμους και χρηματοδότησε ένα αξιοσημείωτο πρόγραμμα μετάφρασης από τα Λατινικά στα Παλαιά Αγγλικά, αποδίδοντας ο ίδιος την «Ποιμαντική Φροντίδα» του Γρηγορίου του Μεγάλου και την «Παραμυθία της Φιλοσοφίας» του Βοηθίου. Το Αγγλοσαξονικό Χρονικό ξεκίνησε υπό την προστασία του. Το αποτέλεσμα δεν ήταν απλώς ένα βασίλειο που επιβίωσε αλλά μια εγγράμματη δημώδης πολιτεία."
          },
          category: "military"
        }
      ]
    },
    {
      year: 924,
      era: {
        en: "First King of the English",
        el: "Πρώτος Βασιλιάς των Άγγλων"
      },
      events: [
        {
          title: {
            en: "Athelstan succeeds to Wessex and Mercia",
            el: "Ο Άθελσταν διαδέχεται την Ουέσσεξ και τη Μερκία"
          },
          description: {
            en: "Alfred's grandson Athelstan inherits the combined kingdoms of Wessex and Mercia. By 927 he conquers the Viking kingdom of York, taking the styling rex Anglorum — king of the English — for the first time.",
            el: "Ο εγγονός του Αλφρέδου Άθελσταν κληρονομεί τα ενωμένα βασίλεια της Ουέσσεξ και της Μερκίας. Έως το 927 κατακτά το βασίλειο των Βίκινγκς του Γιορκ, λαμβάνοντας για πρώτη φορά τον τίτλο «rex Anglorum» — βασιλιάς των Άγγλων."
          },
          extendedDescription: {
            en: "Athelstan's court was the most cosmopolitan in tenth-century Europe: a brother-in-law of Hugh of the Franks, the foster-father of Hákon of Norway, ally of Otto of Saxony, and recipient of relics and books from across Christendom. His charters first use the formula 'rex totius Britanniae'. The unification of England under one crown — a more durable achievement than even Charlemagne's empire — dates from his reign.",
            el: "Η αυλή του Άθελσταν ήταν η πιο κοσμοπολίτικη της Ευρώπης του 10ου αιώνα: γαμπρός του Ούγου των Φράγκων, θετός πατέρας του Χάκον της Νορβηγίας, σύμμαχος του Όθωνα της Σαξονίας και αποδέκτης λειψάνων και βιβλίων από όλη τη χριστιανοσύνη. Τα έγγραφά του χρησιμοποιούν πρώτα τη φόρμουλα «rex totius Britanniae». Η ενοποίηση της Αγγλίας υπό ένα στέμμα — επίτευγμα πιο ανθεκτικό ακόμα και από την αυτοκρατορία του Καρλομάγνου — χρονολογείται από τη βασιλεία του."
          },
          category: "political"
        }
      ]
    },
    {
      year: 937,
      era: {
        en: "First King of the English",
        el: "Πρώτος Βασιλιάς των Άγγλων"
      },
      events: [
        {
          title: {
            en: "Battle of Brunanburh",
            el: "Μάχη του Μπρούναμπερ"
          },
          description: {
            en: "A coalition of Olaf Guthfrithson of Dublin, Constantine II of Alba, and Owain of Strathclyde invades England. Athelstan and his half-brother Edmund crush them at Brunanburh in one of the bloodiest battles ever fought on English soil.",
            el: "Συνασπισμός του Όλαφ Γκούθφριθσον του Δουβλίνου, του Κωνσταντίνου Β΄ του Άλμπα και του Όουεν του Στράθκλαϊντ εισβάλλει στην Αγγλία. Ο Άθελσταν και ο ετεροθαλής αδελφός του Έντμουντ τους συντρίβουν στο Μπρούναμπερ σε μια από τις πιο αιματηρές μάχες που έχουν δοθεί ποτέ στην αγγλική γη."
          },
          extendedDescription: {
            en: "The Anglo-Saxon Chronicle entry for 937 is the oldest surviving English poem of any length on a historical subject — a triumphalist verse celebrating a victory that confirmed the Cerdicing dynasty as masters of all Britain south of the Forth. Five kings and seven Norse earls fell in the slaughter. The site of Brunanburh has never been firmly identified but is most likely on the Wirral peninsula.",
            el: "Η εγγραφή του Αγγλοσαξονικού Χρονικού για το 937 είναι το αρχαιότερο σωζόμενο αγγλικό ποίημα οποιουδήποτε μεγέθους σε ιστορικό θέμα — θριαμβικός στίχος που υμνεί μια νίκη που επιβεβαίωσε τη δυναστεία των Σερντίκινγκ ως κυρίαρχη ολόκληρης της Βρετανίας νότια του Φορθ. Πέντε βασιλιάδες και επτά Σκανδιναβοί κόμητες έπεσαν στη σφαγή. Η τοποθεσία του Μπρούναμπερ δεν έχει ποτέ ταυτιστεί με βεβαιότητα, αλλά πιθανότατα βρίσκεται στη χερσόνησο του Γουίραλ."
          },
          category: "military"
        }
      ]
    },
    {
      year: 991,
      era: {
        en: "Second Viking Age",
        el: "Δεύτερη Εποχή των Βίκινγκς"
      },
      events: [
        {
          title: {
            en: "Battle of Maldon and the first Danegeld",
            el: "Μάχη του Μάλντον και ο πρώτος Δανικός Φόρος"
          },
          description: {
            en: "Ealdorman Byrhtnoth of Essex dies fighting a large Viking raiding force at Maldon. King Æthelred the Unready pays the Danes 10,000 pounds of silver to depart — the first of a long series of tribute payments that will bleed the kingdom.",
            el: "Ο εάλντορμαν Μπίρχτνοθ του Έσσεξ πέφτει αντιμετωπίζοντας μεγάλη δύναμη Βίκινγκς στο Μάλντον. Ο βασιλιάς Έθελρεντ ο Άβουλος πληρώνει στους Δανούς 10.000 λίβρες ασημιού για να φύγουν — η πρώτη από μια μακρά σειρά φόρων υποτέλειας που θα αφαιμάξουν το βασίλειο."
          },
          extendedDescription: {
            en: "The poem 'The Battle of Maldon', composed shortly after the defeat, immortalises Byrhtnoth's last stand and his words to his retainers — 'thought shall be the harder, heart shall be the keener, courage shall be the greater, as our might lessens'. The Danegelds of Æthelred's reign — some 250,000 pounds of silver between 991 and 1018 — pumped silver out of England and into the hoards of Scandinavia, where English coins still turn up in their thousands.",
            el: "Το ποίημα «Η Μάχη του Μάλντον», συντεθειμένο λίγο μετά την ήττα, αθανατίζει την τελευταία στιγμή του Μπίρχτνοθ και τα λόγια του προς τους ακολούθους του — «η σκέψη θα είναι σκληρότερη, η καρδιά πιο αποφασιστική, το θάρρος μεγαλύτερο, καθώς η δύναμή μας ελαττώνεται». Οι «δανεγκέλντ» της βασιλείας του Έθελρεντ — περίπου 250.000 λίβρες ασημιού μεταξύ 991 και 1018 — άντλησαν ασήμι από την Αγγλία προς τους θησαυρούς της Σκανδιναβίας, όπου αγγλικά νομίσματα βρίσκονται ακόμη κατά χιλιάδες."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1016,
      era: {
        en: "Anglo-Danish Kingdom",
        el: "Αγγλοδανικό Βασίλειο"
      },
      events: [
        {
          title: {
            en: "Cnut becomes king of England",
            el: "Ο Κανούτος γίνεται βασιλιάς της Αγγλίας"
          },
          description: {
            en: "After the deaths of Æthelred and his son Edmund Ironside, the Danish prince Cnut is acknowledged king of England. With Denmark, Norway, and parts of Sweden also under his rule, he creates a short-lived North Sea Empire.",
            el: "Μετά τους θανάτους του Έθελρεντ και του γιου του Έντμουντ του «Σιδερόπλευρου», ο Δανός πρίγκιπας Κανούτος αναγνωρίζεται βασιλιάς της Αγγλίας. Έχοντας υπό την εξουσία του και τη Δανία, τη Νορβηγία και μέρη της Σουηδίας, δημιουργεί μια βραχύβια Αυτοκρατορία της Βόρειας Θάλασσας."
          },
          extendedDescription: {
            en: "Cnut's twenty-year reign was, against expectation, a high point of English good government. He upheld Anglo-Saxon law, married Æthelred's widow Emma, made pilgrimage to Rome, and ruled through earls of mixed English and Danish ancestry. The famous (and probably misunderstood) episode of his commanding the tide to stop was a parable about the limits of royal power. After his death in 1035 the empire fell apart and the throne returned in 1042 to the West-Saxon house in the person of Edward the Confessor.",
            el: "Η εικοσαετής βασιλεία του Κανούτου ήταν, παρά τις προσδοκίες, μια κορύφωση της αγγλικής χρηστής διακυβέρνησης. Διατήρησε τον αγγλοσαξονικό νόμο, παντρεύτηκε τη χήρα του Έθελρεντ Έμμα, προσκύνησε στη Ρώμη και κυβέρνησε μέσω κομήτων μικτής αγγλικής και δανικής καταγωγής. Το διάσημο (και πιθανότατα παρανοημένο) επεισόδιο όπου διέταξε την παλίρροια να σταματήσει ήταν μια παραβολή για τα όρια της βασιλικής εξουσίας. Μετά τον θάνατό του το 1035, η αυτοκρατορία διαλύθηκε και ο θρόνος επέστρεψε το 1042 στον δυτικοσαξονικό οίκο στο πρόσωπο του Εδουάρδου του Ομολογητή."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1042,
      era: {
        en: "Edward the Confessor",
        el: "Εδουάρδος ο Ομολογητής"
      },
      events: [
        {
          title: {
            en: "Edward the Confessor returns to England",
            el: "Ο Εδουάρδος ο Ομολογητής επιστρέφει στην Αγγλία"
          },
          description: {
            en: "After three decades of exile at the Norman court, Æthelred's son Edward is crowned king. His reign sees the rise of the great Godwin earldom, an influx of Norman favourites, and the building of a vast new abbey at Westminster.",
            el: "Μετά από τρεις δεκαετίες εξορίας στην αυλή της Νορμανδίας, ο γιος του Έθελρεντ Εδουάρδος στέφεται βασιλιάς. Η βασιλεία του βλέπει την άνοδο του ισχυρού κομητείου του Γκόντγουιν, την εισροή Νορμανδών ευνοούμενων και την ανέγερση ενός τεράστιου νέου αββαείου στο Ουέστμινστερ."
          },
          extendedDescription: {
            en: "Edward died childless on 5 January 1066 in his new Westminster Abbey, which had been consecrated only days before. His succession was disputed at once: Harold Godwinson, the most powerful earl, was crowned the next day; Harald Hardrada of Norway claimed the throne by treaty with Cnut's son; Duke William of Normandy claimed it by promise. All three would meet on the battlefield within the year.",
            el: "Ο Εδουάρδος πέθανε άτεκνος στις 5 Ιανουαρίου 1066 στο νέο του Αββαείο του Ουέστμινστερ, το οποίο είχε εγκαινιαστεί λίγες ημέρες πριν. Η διαδοχή αμφισβητήθηκε αμέσως: ο Χάρολντ Γκόντγουινσον, ο ισχυρότερος κόμης, στέφθηκε την επόμενη ημέρα· ο Χάραλντ Χάρντραντα της Νορβηγίας διεκδίκησε τον θρόνο με συμφωνία από τον γιο του Κανούτου· ο δούκας Γουίλιαμ της Νορμανδίας τον διεκδίκησε με υπόσχεση. Και οι τρεις θα συναντιόνταν στο πεδίο της μάχης μέσα στον χρόνο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1066,
      era: {
        en: "Norman Conquest",
        el: "Νορμανδική Κατάκτηση"
      },
      events: [
        {
          title: {
            en: "Battles of Stamford Bridge and Hastings",
            el: "Μάχες του Στάμφορντ Μπριτζ και του Χάστινγκς"
          },
          description: {
            en: "On 25 September Harold Godwinson destroys Harald Hardrada's invading army at Stamford Bridge in Yorkshire. Three weeks later, on 14 October, he is killed and his army broken by William of Normandy at Hastings. The Anglo-Saxon kingdom of England ends on a single autumn day.",
            el: "Στις 25 Σεπτεμβρίου ο Χάρολντ Γκόντγουινσον συντρίβει τον εισβάλλοντα στρατό του Χάραλντ Χάρντραντα στο Στάμφορντ Μπριτζ του Γιορκσάιρ. Τρεις εβδομάδες αργότερα, στις 14 Οκτωβρίου, σκοτώνεται και ο στρατός του διαλύεται από τον Γουίλιαμ της Νορμανδίας στο Χάστινγκς. Το αγγλοσαξονικό βασίλειο της Αγγλίας τελειώνει σε μία φθινοπωρινή ημέρα."
          },
          extendedDescription: {
            en: "Hastings was a close-run thing: an all-day battle on Senlac Ridge in which the English shield-wall stood firm until Harold fell — by arrow, by sword, or both, depending on the source. William, crowned at Westminster on Christmas Day 1066, would transform the kingdom: replacing the Anglo-Saxon aristocracy with a Norman one, introducing the motte-and-bailey castle, reorganising the church, and within twenty years compiling the Domesday Book, the most detailed survey of any medieval kingdom. The Old English ruling class vanished within a generation; the language survived, transformed, in the mouths of the conquered.",
            el: "Το Χάστινγκς υπήρξε αμφίρροπη υπόθεση: ολοήμερη μάχη στο Σένλακ Ριντζ, όπου το αγγλικό τείχος ασπίδων κράτησε σταθερά μέχρι την πτώση του Χάρολντ — από βέλος, από σπαθί ή και τα δύο, αναλόγως της πηγής. Ο Γουίλιαμ, στεφθείς στο Ουέστμινστερ την Ημέρα των Χριστουγέννων 1066, θα μεταμόρφωνε το βασίλειο: αντικαθιστώντας την αγγλοσαξονική αριστοκρατία με μια νορμανδική, εισάγοντας το «motte-and-bailey» κάστρο, αναδιοργανώνοντας την εκκλησία και, μέσα σε είκοσι χρόνια, συντάσσοντας το Domesday Book, την πιο λεπτομερή απογραφή οποιουδήποτε μεσαιωνικού βασιλείου. Η παλαιοαγγλική άρχουσα τάξη εξαφανίστηκε μέσα σε μία γενιά· η γλώσσα επιβίωσε, μεταμορφωμένη, στο στόμα των κατακτημένων."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
