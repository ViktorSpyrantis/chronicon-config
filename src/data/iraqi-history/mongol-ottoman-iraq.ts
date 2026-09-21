/** Mongol, Turkmen & Ottoman Iraq — Μογγολικό, Τουρκομανικό & Οθωμανικό Ιράκ · Iraqi History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const MONGOL_OTTOMAN_IRAQ = {
  id: "mongol-ottoman-iraq" as const,
  label: {
    en: "Mongol, Turkmen & Ottoman Iraq",
    el: "Μογγολικό, Τουρκομανικό & Οθωμανικό Ιράκ"
  },
  supertitle: {
    en: "Medieval & Ottoman Iraq",
    el: "Μεσαιωνικό & Οθωμανικό Ιράκ"
  },
  title: {
    en: "Mongol, Turkmen & Ottoman Iraq",
    el: "Μογγολικό, Τουρκομανικό & Οθωμανικό Ιράκ"
  },
  subtitle: {
    en: "After the Mongols, Iraq ceased to be the centre of anything. For six centuries it was a battered borderland — ruled from Mongol Tabriz, ravaged again by Timur, fought over by Turkmen confederations, and finally torn between the Ottoman and Safavid empires as a frontier between Sunni and Shia. Under Ottoman pashas it slept, until the First World War brought British armies up the rivers. Slide across Iraq's long twilight.",
    el: "Μετά τους Μογγόλους, το Ιράκ έπαψε να είναι το κέντρο οτιδήποτε. Επί έξι αιώνες υπήρξε ένα κατατρεγμένο σύνορο — κυβερνημένο από τη μογγολική Ταβρίζ, ρημαγμένο ξανά από τον Ταμερλάνο, αντικείμενο διαμάχης τουρκομανικών συνομοσπονδιών, και τελικά διχασμένο ανάμεσα στην Οθωμανική και τη Σαφαβιδική αυτοκρατορία ως σύνορο μεταξύ Σουνιτών και Σιιτών. Υπό τους Οθωμανούς πασάδες κοιμόταν, ώσπου ο Πρώτος Παγκόσμιος Πόλεμος έφερε βρετανικούς στρατούς πάνω στα ποτάμια. Μετακινηθείτε στο μακρύ λυκόφως του Ιράκ."
  },
  menuDescription: {
    en: "Ilkhans, Timur, the Turkmen, and the Ottoman–Safavid struggle for Iraq.",
    el: "Ιλχάνηδες, Ταμερλάνος, Τουρκομάνοι και η οθωμανοσαφαβιδική διαμάχη για το Ιράκ."
  },
  footerLabel: {
    en: "Mongol, Turkmen & Ottoman Iraq · 1258-1918",
    el: "Μογγολικό, Τουρκομανικό & Οθωμανικό Ιράκ · 1258-1918"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Mongol, Turkmen & Ottoman Iraq",
    el: "Μογγολικό, Τουρκομανικό & Οθωμανικό Ιράκ"
  },
  theme: THEMES.slate,
  timeline: [
    {
      year: 1258,
      era: {
        en: "Ilkhanate",
        el: "Ιλχανάτο"
      },
      events: [
        {
          title: {
            en: "Iraq under the Ilkhans",
            el: "Το Ιράκ υπό τους Ιλχάνηδες"
          },
          description: {
            en: "Once the centre of the world, Baghdad becomes a provincial town ruled by Mongol Ilkhans from distant Tabriz.",
            el: "Άλλοτε το κέντρο του κόσμου, η Βαγδάτη γίνεται μια επαρχιακή πόλη κυβερνημένη από Μογγόλους Ιλχάνηδες από τη μακρινή Ταβρίζ."
          },
          extendedDescription: {
            en: "The Mongol Ilkhanate ruled Iraq as a peripheral province of an empire centred in Iran. The elaborate irrigation canals that had watered Mesopotamia since Sumerian times fell into neglect, and much farmland reverted to marsh and desert. Baghdad's centuries of primacy were over; it would not be a capital again for seven hundred years.",
            el: "Το μογγολικό Ιλχανάτο κυβέρνησε το Ιράκ ως περιφερειακή επαρχία μιας αυτοκρατορίας με κέντρο το Ιράν. Τα περίτεχνα αρδευτικά κανάλια που πότιζαν τη Μεσοποταμία από τα σουμεριακά χρόνια έπεσαν σε εγκατάλειψη, και μεγάλο μέρος της καλλιεργήσιμης γης ξαναέγινε έλος και έρημος. Οι αιώνες πρωτοκαθεδρίας της Βαγδάτης είχαν τελειώσει· δεν θα ξαναγινόταν πρωτεύουσα για επτακόσια χρόνια."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1295,
      era: {
        en: "Ilkhanate",
        el: "Ιλχανάτο"
      },
      events: [
        {
          title: {
            en: "Ghazan Khan embraces Islam",
            el: "Ο Γαζάν Χαν ασπάζεται το Ισλάμ"
          },
          description: {
            en: "The Ilkhan Ghazan converts to Islam, and the Mongol rulers of Iraq and Iran become Muslim.",
            el: "Ο Ιλχάνης Γαζάν προσηλυτίζεται στο Ισλάμ, και οι Μογγόλοι ηγεμόνες του Ιράκ και του Ιράν γίνονται μουσουλμάνοι."
          },
          extendedDescription: {
            en: "Ghazan's conversion reconciled the Mongol dynasty with its Muslim subjects and brought a measure of recovery, with new building and tax reform. Yet Iraq remained a distant frontier of the Ilkhanate, and when that state collapsed in the 1330s the land fell to a scramble of local dynasties.",
            el: "Η μεταστροφή του Γαζάν συμφιλίωσε τη μογγολική δυναστεία με τους μουσουλμάνους υπηκόους της και έφερε κάποια ανάκαμψη, με νέες κατασκευές και φορολογική μεταρρύθμιση. Ωστόσο το Ιράκ παρέμεινε ένα μακρινό σύνορο του Ιλχανάτου, και όταν το κράτος αυτό κατέρρευσε τη δεκαετία του 1330, η χώρα έπεσε σε έναν συνωστισμό τοπικών δυναστειών."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1340,
      era: {
        en: "Jalayirid Dynasty",
        el: "Δυναστεία των Τζαλαϊριδών"
      },
      events: [
        {
          title: {
            en: "The Jalayirids of Baghdad",
            el: "Οι Τζαλαϊρίδες της Βαγδάτης"
          },
          description: {
            en: "The Jalayirid dynasty rules Iraq from Baghdad, bringing a brief revival of courtly art and manuscript painting.",
            el: "Η δυναστεία των Τζαλαϊριδών κυβερνά το Ιράκ από τη Βαγδάτη, φέρνοντας μια σύντομη αναβίωση της αυλικής τέχνης και της ζωγραφικής χειρογράφων."
          },
          extendedDescription: {
            en: "Emerging from the wreck of the Ilkhanate, the Jalayirids made Baghdad a capital once more and patronized poets and painters; the exquisite Baghdad school of miniature painting dates from their court. It was a last flicker of splendour before a far greater storm broke over the city.",
            el: "Αναδυόμενοι από τα συντρίμμια του Ιλχανάτου, οι Τζαλαϊρίδες έκαναν τη Βαγδάτη ξανά πρωτεύουσα και προστάτεψαν ποιητές και ζωγράφους· η εξαίσια σχολή μικρογραφίας της Βαγδάτης χρονολογείται από την αυλή τους. Ήταν μια τελευταία αναλαμπή μεγαλείου πριν ξεσπάσει πάνω στην πόλη μια πολύ μεγαλύτερη θύελλα."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1401,
      era: {
        en: "Timurid Invasions",
        el: "Εισβολές των Τιμουριδών"
      },
      events: [
        {
          title: {
            en: "Timur's massacre at Baghdad",
            el: "Η σφαγή του Ταμερλάνου στη Βαγδάτη"
          },
          description: {
            en: "The conqueror Timur storms Baghdad and butchers its people, building towers from the skulls of the dead.",
            el: "Ο κατακτητής Ταμερλάνος κυριεύει τη Βαγδάτη και κατασφάζει τον λαό της, χτίζοντας πύργους από τα κρανία των νεκρών."
          },
          extendedDescription: {
            en: "Timur (Tamerlane) sacked Baghdad twice, and in 1401 his soldiers were ordered to bring back severed heads, from which he raised grisly towers outside the walls. Coming atop the Mongol catastrophe, Timur's devastation confirmed the ruin of medieval Iraq, whose population and prosperity had collapsed far below their former heights.",
            el: "Ο Ταμερλάνος (Τιμούρ) λεηλάτησε τη Βαγδάτη δύο φορές, και το 1401 οι στρατιώτες του διατάχθηκαν να φέρουν κομμένα κεφάλια, από τα οποία ύψωσε φρικτούς πύργους έξω από τα τείχη. Ερχόμενη πάνω στη μογγολική καταστροφή, η ερήμωση του Ταμερλάνου επιβεβαίωσε τον όλεθρο του μεσαιωνικού Ιράκ, του οποίου ο πληθυσμός και η ευημερία είχαν καταρρεύσει πολύ κάτω από τα παλιά τους ύψη."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1411,
      era: {
        en: "Turkmen Confederations",
        el: "Τουρκομανικές Συνομοσπονδίες"
      },
      events: [
        {
          title: {
            en: "The Black Sheep and White Sheep",
            el: "Τα Μαύρα Πρόβατα και τα Λευκά Πρόβατα"
          },
          description: {
            en: "Rival Turkmen confederations, the Kara Koyunlu and Aq Koyunlu, contest Iraq amid its long decline.",
            el: "Αντίπαλες τουρκομανικές συνομοσπονδίες, οι Καρά Κογιουνλού και οι Ακ Κογιουνλού, διεκδικούν το Ιράκ μέσα στη μακρά παρακμή του."
          },
          extendedDescription: {
            en: "The 'Black Sheep' Kara Koyunlu and the 'White Sheep' Aq Koyunlu, tribal Turkmen dynasties, ruled Iraq in turn through the fifteenth century as one corner of their pastoral realms. Power lay with nomad cavalry and shifting confederations; the settled cities and canals of the plain mattered little to them.",
            el: "Οι «Μαυροπρόβατοι» Καρά Κογιουνλού και οι «Λευκοπρόβατοι» Ακ Κογιουνλού, φυλετικές τουρκομανικές δυναστείες, κυβέρνησαν το Ιράκ εναλλάξ κατά τον 15ο αιώνα ως μια γωνιά των ποιμενικών βασιλείων τους. Η εξουσία βρισκόταν στο νομαδικό ιππικό και στις μεταβαλλόμενες συνομοσπονδίες· οι εδραιωμένες πόλεις και τα κανάλια της πεδιάδας ελάχιστα τους ένοιαζαν."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1508,
      era: {
        en: "Safavid Iraq",
        el: "Σαφαβιδικό Ιράκ"
      },
      events: [
        {
          title: {
            en: "The Safavids and the shrine cities",
            el: "Οι Σαφαβίδες και οι ιερές πόλεις"
          },
          description: {
            en: "Shah Ismail's Safavids seize Iraq, exalting the Shia shrine cities of Najaf and Karbala.",
            el: "Οι Σαφαβίδες του Σαχ Ισμαήλ καταλαμβάνουν το Ιράκ, εξυμνώντας τις σιιτικές ιερές πόλεις Νατζάφ και Καρμπάλα."
          },
          extendedDescription: {
            en: "The new Safavid dynasty of Iran, militantly Shia, took Baghdad and lavished patronage on the tombs of Ali at Najaf and Husayn at Karbala, which drew pilgrims from across the Shia world. Iraq now lay on the fault line between Shia Iran and the Sunni Ottoman empire — a contested frontier for the next three centuries.",
            el: "Η νέα σαφαβιδική δυναστεία του Ιράν, μαχητικά σιιτική, πήρε τη Βαγδάτη και περιέβαλε με γενναιοδωρία τους τάφους του Άλι στο Νατζάφ και του Χουσεΐν στην Καρμπάλα, που προσέλκυαν προσκυνητές από όλον τον σιιτικό κόσμο. Το Ιράκ βρισκόταν πλέον πάνω στη ρωγμή ανάμεσα στο σιιτικό Ιράν και τη σουνιτική Οθωμανική αυτοκρατορία — ένα αμφισβητούμενο σύνορο για τους επόμενους τρεις αιώνες."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1534,
      era: {
        en: "Ottoman Iraq",
        el: "Οθωμανικό Ιράκ"
      },
      events: [
        {
          title: {
            en: "Suleiman takes Baghdad",
            el: "Ο Σουλεϊμάν παίρνει τη Βαγδάτη"
          },
          description: {
            en: "Suleiman the Magnificent conquers Baghdad for the Ottomans, beginning four centuries of Ottoman rule.",
            el: "Ο Σουλεϊμάν ο Μεγαλοπρεπής κατακτά τη Βαγδάτη για τους Οθωμανούς, εγκαινιάζοντας τέσσερις αιώνες οθωμανικής κυριαρχίας."
          },
          extendedDescription: {
            en: "Suleiman took Baghdad from the Safavids and organized Iraq into Ottoman provinces governed from Baghdad, Basra, and Mosul. He honoured the Sunni shrines and rebuilt the tomb of the jurist Abu Hanifa. But the Safavid threat never disappeared, and Iraq remained a war zone between the two great Muslim empires.",
            el: "Ο Σουλεϊμάν πήρε τη Βαγδάτη από τους Σαφαβίδες και οργάνωσε το Ιράκ σε οθωμανικές επαρχίες που κυβερνώνταν από τη Βαγδάτη, τη Βασόρα και τη Μοσούλη. Τίμησε τα σουνιτικά τεμένη και ξανάχτισε τον τάφο του νομοδιδασκάλου Αμπού Χανίφα. Όμως η σαφαβιδική απειλή δεν εξαφανίστηκε ποτέ, και το Ιράκ παρέμεινε εμπόλεμη ζώνη ανάμεσα στις δύο μεγάλες μουσουλμανικές αυτοκρατορίες."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1638,
      era: {
        en: "Ottoman Iraq",
        el: "Οθωμανικό Ιράκ"
      },
      events: [
        {
          title: {
            en: "Murad IV retakes Baghdad",
            el: "Ο Μουράτ Δ΄ ανακαταλαμβάνει τη Βαγδάτη"
          },
          description: {
            en: "After the Safavids seize Baghdad again, Sultan Murad IV storms it back, fixing the Ottoman–Persian border for good.",
            el: "Αφού οι Σαφαβίδες καταλαμβάνουν ξανά τη Βαγδάτη, ο σουλτάνος Μουράτ Δ΄ την ανακτά με έφοδο, καθορίζοντας οριστικά το οθωμανοπερσικό σύνορο."
          },
          extendedDescription: {
            en: "The Safavid shah Abbas had retaken Baghdad in 1623 and massacred its Sunnis; Murad IV led a great army to besiege and storm the city in 1638. The peace treaty that followed drew a border between the Ottoman and Persian empires that broadly survives as Iraq's eastern frontier today — one of the oldest continuous borders in the world.",
            el: "Ο Σαφαβίδης σάχης Αββάς είχε ανακαταλάβει τη Βαγδάτη το 1623 και είχε σφαγιάσει τους Σουνίτες της· ο Μουράτ Δ΄ οδήγησε έναν μεγάλο στρατό για να πολιορκήσει και να κυριεύσει την πόλη το 1638. Η συνθήκη ειρήνης που ακολούθησε χάραξε ένα σύνορο ανάμεσα στην Οθωμανική και την Περσική αυτοκρατορία που επιβιώνει σε γενικές γραμμές ως το ανατολικό σύνορο του Ιράκ σήμερα — ένα από τα αρχαιότερα συνεχή σύνορα του κόσμου."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1704,
      era: {
        en: "Ottoman Iraq",
        el: "Οθωμανικό Ιράκ"
      },
      events: [
        {
          title: {
            en: "The Mamluk pashas of Baghdad",
            el: "Οι Μαμελούκοι πασάδες της Βαγδάτης"
          },
          description: {
            en: "A dynasty of Georgian Mamluk officers rules Iraq in the sultan's name, nearly independent for over a century.",
            el: "Μια δυναστεία Γεωργιανών Μαμελούκων αξιωματικών κυβερνά το Ιράκ στο όνομα του σουλτάνου, σχεδόν ανεξάρτητη για πάνω από έναν αιώνα."
          },
          extendedDescription: {
            en: "From 1704 a self-perpetuating elite of Georgian slave-soldiers, the Mamluks, governed Iraq with wide autonomy, curbing the tribes and cultivating trade with British and other merchants. Their loose rule lasted until 1831, when a reforming sultan reasserted direct Ottoman control over the province.",
            el: "Από το 1704 μια αυτοσυντηρούμενη ελίτ Γεωργιανών δουλοστρατιωτών, οι Μαμελούκοι, κυβέρνησαν το Ιράκ με ευρεία αυτονομία, τιθασεύοντας τις φυλές και καλλιεργώντας το εμπόριο με Βρετανούς και άλλους εμπόρους. Η χαλαρή διακυβέρνησή τους κράτησε ως το 1831, όταν ένας μεταρρυθμιστής σουλτάνος επέβαλε ξανά άμεσο οθωμανικό έλεγχο στην επαρχία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1869,
      era: {
        en: "Ottoman Reforms",
        el: "Οθωμανικές Μεταρρυθμίσεις"
      },
      events: [
        {
          title: {
            en: "Midhat Pasha and the Tanzimat",
            el: "Ο Μιντχάτ Πασάς και το Τανζιμάτ"
          },
          description: {
            en: "The reformer Midhat Pasha modernizes Baghdad, bringing the first newspaper, steamboats, and secular schools.",
            el: "Ο μεταρρυθμιστής Μιντχάτ Πασάς εκσυγχρονίζει τη Βαγδάτη, φέρνοντας την πρώτη εφημερίδα, ατμόπλοια και κοσμικά σχολεία."
          },
          extendedDescription: {
            en: "As governor, Midhat Pasha dragged Ottoman Iraq into the modern age with the Tanzimat reforms — a printing press, hospitals, tramways, a new army, and settled land laws that reshaped tribal society. His brief tenure planted institutions and grievances alike that would shape the Iraq that emerged from the empire's fall.",
            el: "Ως κυβερνήτης, ο Μιντχάτ Πασάς έσυρε το οθωμανικό Ιράκ στη σύγχρονη εποχή με τις μεταρρυθμίσεις του Τανζιμάτ — τυπογραφείο, νοσοκομεία, τραμ, νέο στρατό και νόμους γαιοκτησίας που αναδιαμόρφωσαν τη φυλετική κοινωνία. Η σύντομη θητεία του φύτεψε τόσο θεσμούς όσο και δυσαρέσκειες που θα διαμόρφωναν το Ιράκ που θα αναδυόταν από την πτώση της αυτοκρατορίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1917,
      era: {
        en: "The First World War",
        el: "Ο Πρώτος Παγκόσμιος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "The British take Baghdad",
            el: "Οι Βρετανοί παίρνουν τη Βαγδάτη"
          },
          description: {
            en: "British forces capture Baghdad from the Ottomans, ending four centuries of Ottoman rule over Iraq.",
            el: "Βρετανικές δυνάμεις καταλαμβάνουν τη Βαγδάτη από τους Οθωμανούς, τερματίζοντας τέσσερις αιώνες οθωμανικής κυριαρχίας στο Ιράκ."
          },
          extendedDescription: {
            en: "The Mesopotamian campaign of the First World War — which had seen a British army trapped and forced to surrender at Kut in 1916 — ended with the fall of Baghdad in 1917. As the Ottoman Empire collapsed, Britain occupied the provinces of Baghdad, Basra, and Mosul, the raw material from which a new country called Iraq would be assembled.",
            el: "Η μεσοποταμιακή εκστρατεία του Πρώτου Παγκοσμίου Πολέμου — που είχε δει έναν βρετανικό στρατό παγιδευμένο και αναγκασμένο να παραδοθεί στο Κουτ το 1916 — έληξε με την πτώση της Βαγδάτης το 1917. Καθώς η Οθωμανική Αυτοκρατορία κατέρρεε, η Βρετανία κατέλαβε τις επαρχίες της Βαγδάτης, της Βασόρα και της Μοσούλης, την πρώτη ύλη από την οποία θα συναρμολογούνταν μια νέα χώρα ονόματι Ιράκ."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
