/** Safavid Empire — Αυτοκρατορία των Σαφαβιδών · Persian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const SAFAVID_EMPIRE = {
  id: "safavid-empire" as const,
  label: {
    en: "Safavid Empire",
    el: "Αυτοκρατορία των Σαφαβιδών"
  },
  supertitle: {
    en: "Shia Iran",
    el: "Σιιτικό Ιράν"
  },
  title: {
    en: "The Safavid Empire",
    el: "Η Αυτοκρατορία των Σαφαβιδών"
  },
  subtitle: {
    en: "From Shah Ismail's reunification of Iran and the making of a Shia nation through the wars with the Ottomans, the golden age of Abbas the Great and the splendour of Isfahan, 'half the world,' to the long decline and the sudden Afghan sack that brought the dynasty down. Slide across the centuries to read the major events of the empire that made Iran Shia.",
    el: "Από την επανένωση του Ιράν από τον Σαχ Ισμαήλ και τη δημιουργία ενός σιιτικού έθνους, μέσα από τους πολέμους με τους Οθωμανούς, τη χρυσή εποχή του Αββά του Μεγάλου και τη λαμπρότητα της Ισφαχάν, του «μισού κόσμου», ως τη μακρά παρακμή και την αιφνίδια αφγανική λεηλασία που κατέρριψε τη δυναστεία. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα γεγονότα της αυτοκρατορίας που έκανε το Ιράν σιιτικό."
  },
  menuDescription: {
    en: "Iran reunited and made Shia, and the wonder of Abbas the Great's Isfahan.",
    el: "Το Ιράν ξανά ενωμένο και σιιτικό, και το θαύμα της Ισφαχάν του Αββά του Μεγάλου."
  },
  footerLabel: {
    en: "Safavid Empire · 1501-1736 AD",
    el: "Αυτοκρατορία των Σαφαβιδών · 1501-1736 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Imperial Timeline",
    el: "Αυτοκρατορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Safavid Empire",
    el: "Η Αυτοκρατορία των Σαφαβιδών"
  },
  theme: THEMES.sapphire,
  timeline: [
    {
      year: 1501,
      era: {
        en: "Shah Ismail I",
        el: "Σαχ Ισμαήλ Α΄"
      },
      events: [
        {
          title: {
            en: "The founding of Safavid Iran",
            el: "Η ίδρυση του σαφαβιδικού Ιράν"
          },
          description: {
            en: "Shah Ismail I unites Iran under his rule and makes Twelver Shiism the state religion, setting it apart from the Sunni world.",
            el: "Ο Σαχ Ισμαήλ Α΄ ενώνει το Ιράν υπό την εξουσία του και καθιστά τον δωδεκαϊμαμικό σιισμό κρατική θρησκεία, διαχωρίζοντάς το από τον σουνιτικό κόσμο."
          },
          extendedDescription: {
            en: "For the first time since the seventh century a native dynasty ruled a unified Iran within roughly its modern borders. Ismail's forced conversion of a largely Sunni population to Shiism was gradual and often harsh, but it forged a durable religious identity that has shaped Iran ever since.",
            el: "Για πρώτη φορά από τον 7ο αιώνα μια εγχώρια δυναστεία κυβερνούσε ένα ενωμένο Ιράν εντός περίπου των σημερινών του συνόρων. Ο βίαιος εξαναγκασμός ενός σε μεγάλο βαθμό σουνιτικού πληθυσμού στον σιισμό από τον Ισμαήλ ήταν σταδιακός και συχνά σκληρός, όμως σφυρηλάτησε μια ανθεκτική θρησκευτική ταυτότητα που έκτοτε διαμορφώνει το Ιράν."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shah_Ismail_I_Safavid,_Behzad.jpg?width=1024",
            alt: {
              en: "Shah Ismail I, founder of the Safavid dynasty",
              el: "Ο Σαχ Ισμαήλ Α΄, ιδρυτής της δυναστείας των Σαφαβιδών"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1514,
      era: {
        en: "Shah Ismail I",
        el: "Σαχ Ισμαήλ Α΄"
      },
      events: [
        {
          title: {
            en: "Defeat at Chaldiran",
            el: "Ήττα στο Τσαλντιράν"
          },
          description: {
            en: "The Ottomans defeat Ismail at Chaldiran, checking Safavid expansion and beginning two centuries of war between the empires.",
            el: "Οι Οθωμανοί νικούν τον Ισμαήλ στο Τσαλντιράν, ανακόπτοντας τη σαφαβιδική επέκταση και ξεκινώντας δύο αιώνες πολέμου ανάμεσα στις αυτοκρατορίες."
          },
          extendedDescription: {
            en: "Sultan Selim I's cannon and janissary muskets shattered the Qizilbash cavalry, whose faith in Ismail's invincibility was broken. The defeat cost Ismail eastern Anatolia and fixed a hostile Sunni-Shia frontier with the Ottomans that would endure for generations.",
            el: "Τα κανόνια και τα μουσκέτα των γενιτσάρων του σουλτάνου Σελίμ Α΄ συνέτριψαν το ιππικό των Κιζιλμπάς, των οποίων η πίστη στο αήττητο του Ισμαήλ κατέρρευσε. Η ήττα κόστισε στον Ισμαήλ την ανατολική Ανατολία και εδραίωσε ένα εχθρικό σουνιτικό-σιιτικό σύνορο με τους Οθωμανούς που θα διαρκούσε γενεές."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/A_painting_in_Chehel_Sotoun1.jpg?width=1024",
            alt: {
              en: "A painting at Chehel Sotoun depicting the Battle of Chaldiran",
              el: "Πίνακας στο Τσεχέλ Σοτούν με τη μάχη του Τσαλντιράν"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1588,
      era: {
        en: "Abbas the Great",
        el: "Αββάς ο Μέγας"
      },
      events: [
        {
          title: {
            en: "The accession of Shah Abbas I",
            el: "Η άνοδος του Σαχ Αββάς Α΄"
          },
          description: {
            en: "Shah Abbas I takes the throne and begins to rebuild the empire, curbing the Qizilbash and forging a new army.",
            el: "Ο Σαχ Αββάς Α΄ ανεβαίνει στον θρόνο και αρχίζει να ανοικοδομεί την αυτοκρατορία, περιορίζοντας τους Κιζιλμπάς και σφυρηλατώντας έναν νέο στρατό."
          },
          extendedDescription: {
            en: "Inheriting a realm beset by tribal factions and foreign invasion, Abbas broke the power of the Qizilbash lords by building a standing army of ghulams — slave-soldiers of Caucasian origin — equipped with muskets and artillery on the European model. His reforms turned a faltering state into a great power.",
            el: "Κληρονομώντας ένα κράτος βασανισμένο από φυλετικές παρατάξεις και ξένες εισβολές, ο Αββάς έσπασε την ισχύ των αρχόντων Κιζιλμπάς χτίζοντας έναν μόνιμο στρατό γκουλάμ — δούλων-στρατιωτών καυκασιανής καταγωγής — εξοπλισμένων με μουσκέτα και πυροβολικό κατά το ευρωπαϊκό πρότυπο. Οι μεταρρυθμίσεις του μετέτρεψαν ένα κλονισμένο κράτος σε μεγάλη δύναμη."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/12_Abu%27l_Hasan_Jahangir_Welcoming_Shah_%27Abbas,_ca._1618,_Freer_Gallery_of_Art,_Washington_DC_(portrait).jpg?width=1024",
            alt: {
              en: "Shah Abbas I embraced by the Mughal emperor Jahangir, allegorical painting",
              el: "Ο Σαχ Αμπάς Α΄ σε εναγκαλισμό με τον Μογγόλο αυτοκράτορα Τζαχανγκίρ, αλληγορικός πίνακας"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1598,
      era: {
        en: "Abbas the Great",
        el: "Αββάς ο Μέγας"
      },
      events: [
        {
          title: {
            en: "Isfahan becomes the capital",
            el: "Η Ισφαχάν γίνεται πρωτεύουσα"
          },
          description: {
            en: "Abbas moves his capital to Isfahan and transforms it into one of the most beautiful cities in the world.",
            el: "Ο Αββάς μεταφέρει την πρωτεύουσά του στην Ισφαχάν και τη μεταμορφώνει σε μία από τις ωραιότερες πόλεις του κόσμου."
          },
          extendedDescription: {
            en: "Around the vast Naqsh-e Jahan square rose the Shah Mosque, the Sheikh Lotfollah Mosque, the Ali Qapu palace, and the great bazaar — a masterpiece of tilework and proportion. 'Isfahan is half the world,' Persians said. The city drew merchants, artists, and diplomats from Europe, India, and beyond.",
            el: "Γύρω από την τεράστια πλατεία Νακς-ε Τζαχάν υψώθηκαν το Τζαμί του Σάχη, το Τζαμί Σεΐχ Λοτφολάχ, το ανάκτορο Αλί Καπού και το μεγάλο παζάρι — ένα αριστούργημα πλακιδίων και αναλογιών. «Η Ισφαχάν είναι ο μισός κόσμος», έλεγαν οι Πέρσες. Η πόλη προσέλκυε εμπόρους, καλλιτέχνες και διπλωμάτες από την Ευρώπη, την Ινδία και πέρα από αυτές."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Naqsh-i_Jahan_Square,_Jan._2018.jpg?width=1024",
            alt: {
              en: "Naqsh-e Jahan Square in Isfahan, heart of Shah Abbas's capital",
              el: "Η πλατεία Νακς-ε Τζαχάν στην Ισφαχάν, καρδιά της πρωτεύουσας του Σαχ Αμπάς"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1602,
      era: {
        en: "Abbas the Great",
        el: "Αββάς ο Μέγας"
      },
      events: [
        {
          title: {
            en: "The silk trade and European embassies",
            el: "Το εμπόριο μεταξιού και οι ευρωπαϊκές πρεσβείες"
          },
          description: {
            en: "Abbas builds a state silk monopoly and welcomes English and other European merchants and envoys to Iran.",
            el: "Ο Αββάς οικοδομεί ένα κρατικό μονοπώλιο μεταξιού και υποδέχεται Άγγλους και άλλους Ευρωπαίους εμπόρους και απεσταλμένους στο Ιράν."
          },
          extendedDescription: {
            en: "Seeking allies against the Ottomans, Abbas cultivated ties with European powers and resettled thousands of Armenian silk-traders in New Julfa, a suburb of Isfahan. With English help he expelled the Portuguese from Hormuz in 1622, opening the Persian Gulf trade to new partners.",
            el: "Αναζητώντας συμμάχους εναντίον των Οθωμανών, ο Αββάς καλλιέργησε δεσμούς με τις ευρωπαϊκές δυνάμεις και μετεγκατέστησε χιλιάδες Αρμένιους εμπόρους μεταξιού στη Νέα Τζούλφα, προάστιο της Ισφαχάν. Με αγγλική βοήθεια εκδίωξε τους Πορτογάλους από το Ορμούζ το 1622, ανοίγοντας το εμπόριο του Περσικού Κόλπου σε νέους εταίρους."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1629,
      era: {
        en: "The Long Decline",
        el: "Η Μακρά Παρακμή"
      },
      events: [
        {
          title: {
            en: "The death of Abbas and the age of the harem",
            el: "Ο θάνατος του Αββάς και η εποχή του χαρεμιού"
          },
          description: {
            en: "After Abbas dies, later shahs are raised in the harem, and real power drifts to courtiers, eunuchs, and clerics.",
            el: "Μετά τον θάνατο του Αββάς, οι μεταγενέστεροι σάχηδες ανατρέφονται στο χαρέμι, και η πραγματική εξουσία περνά σε αυλικούς, ευνούχους και κληρικούς."
          },
          extendedDescription: {
            en: "Fearful of rebellious sons, Abbas had confined the princes to the harem, and his successors grew up sheltered and unprepared to rule. Though the empire remained wealthy and its arts brilliant, its government slowly weakened while the Shia clergy gained influence over society and state.",
            el: "Φοβούμενος επαναστατημένους γιους, ο Αββάς είχε περιορίσει τους πρίγκιπες στο χαρέμι, και οι διάδοχοί του μεγάλωσαν προστατευμένοι και ανέτοιμοι να κυβερνήσουν. Αν και η αυτοκρατορία παρέμενε πλούσια και οι τέχνες της λαμπρές, η διακυβέρνησή της αποδυναμωνόταν αργά, ενώ ο σιιτικός κλήρος αποκτούσε επιρροή στην κοινωνία και το κράτος."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1666,
      era: {
        en: "The Long Decline",
        el: "Η Μακρά Παρακμή"
      },
      events: [
        {
          title: {
            en: "The reign of Shah Suleiman",
            el: "Η βασιλεία του Σαχ Σουλεϊμάν"
          },
          description: {
            en: "Under a series of pleasure-loving and pious shahs, Safavid Iran drifts, its frontiers neglected and its army decayed.",
            el: "Υπό μια σειρά φιλήδονων και ευσεβών σάχηδων, το σαφαβιδικό Ιράν αδρανεί, με τα σύνορά του παραμελημένα και τον στρατό του παρηκμασμένο."
          },
          extendedDescription: {
            en: "The mid-century shahs largely withdrew from governing. Rising clerical intolerance pressed on Sunnis, Christians, and Zoroastrians alike, alienating frontier peoples. Behind a facade of splendour the machinery of the state was rusting, and the tribes of the borderlands grew restive.",
            el: "Οι σάχηδες των μέσων του αιώνα αποσύρθηκαν σε μεγάλο βαθμό από τη διακυβέρνηση. Η αυξανόμενη κληρική μισαλλοδοξία πίεζε σουνίτες, χριστιανούς και ζωροάστρες, αποξενώνοντας τους συνοριακούς λαούς. Πίσω από μια πρόσοψη λαμπρότητας ο μηχανισμός του κράτους σκούριαζε, και οι φυλές των παραμεθόριων γίνονταν ανήσυχες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1722,
      era: {
        en: "Fall of the Safavids",
        el: "Πτώση των Σαφαβιδών"
      },
      events: [
        {
          title: {
            en: "The Afghans sack Isfahan",
            el: "Οι Αφγανοί λεηλατούν την Ισφαχάν"
          },
          description: {
            en: "An Afghan army besieges and takes Isfahan, and the shah abdicates — the sudden collapse of the Safavid Empire.",
            el: "Ένας αφγανικός στρατός πολιορκεί και καταλαμβάνει την Ισφαχάν, και ο σάχης παραιτείται — η αιφνίδια κατάρρευση της Αυτοκρατορίας των Σαφαβιδών."
          },
          extendedDescription: {
            en: "The Ghilzai Afghans under Mahmud Hotak besieged the capital for six months; famine killed tens of thousands before Shah Sultan Husayn surrendered his crown. The fall stunned the world and plunged Iran into decades of invasion and civil war, as Ottomans and Russians seized border provinces.",
            el: "Οι Αφγανοί Γκιλζάι υπό τον Μαχμούντ Χοτάκ πολιόρκησαν την πρωτεύουσα επί έξι μήνες· ο λιμός σκότωσε δεκάδες χιλιάδες πριν ο Σαχ Σουλτάν Χουσεΐν παραδώσει το στέμμα του. Η πτώση συγκλόνισε τον κόσμο και βύθισε το Ιράν σε δεκαετίες εισβολών και εμφυλίου πολέμου, καθώς Οθωμανοί και Ρώσοι άρπαζαν συνοριακές επαρχίες."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1736,
      era: {
        en: "Fall of the Safavids",
        el: "Πτώση των Σαφαβιδών"
      },
      events: [
        {
          title: {
            en: "Nader Khan ends the dynasty",
            el: "Ο Ναντέρ Χαν τερματίζει τη δυναστεία"
          },
          description: {
            en: "The warlord Nader, having driven out the Afghans, deposes the last Safavid puppet and crowns himself shah.",
            el: "Ο πολέμαρχος Ναντέρ, έχοντας εκδιώξει τους Αφγανούς, καθαιρεί τον τελευταίο Σαφαβίδη ανδρείκελο και στέφεται σάχης."
          },
          extendedDescription: {
            en: "A brilliant general of humble origin, Nader had restored Iran's borders in the name of a Safavid figurehead. In 1736 he claimed the throne himself, ending the dynasty that had ruled for over two centuries and opening the turbulent age of the Afsharids, Zands, and Qajars.",
            el: "Λαμπρός στρατηγός ταπεινής καταγωγής, ο Ναντέρ είχε αποκαταστήσει τα σύνορα του Ιράν στο όνομα ενός Σαφαβίδη ανδρείκελου. Το 1736 διεκδίκησε ο ίδιος τον θρόνο, τερματίζοντας τη δυναστεία που είχε κυβερνήσει πάνω από δύο αιώνες και ανοίγοντας την ταραγμένη εποχή των Αφσαρίδων, των Ζαντ και των Κατζάρ."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
