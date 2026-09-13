/** Timurid & Turkmen Iran — Τιμουριδικό & Τουρκομανικό Ιράν · Persian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const TIMURID_TURKMEN_IRAN = {
  id: "timurid-turkmen-iran" as const,
  label: {
    en: "Timurid & Turkmen Iran",
    el: "Τιμουριδικό & Τουρκομανικό Ιράν"
  },
  supertitle: {
    en: "The Timurid Renaissance",
    el: "Η Αναγέννηση των Τιμουριδών"
  },
  title: {
    en: "Timurid & Turkmen Iran",
    el: "Τιμουριδικό & Τουρκομανικό Ιράν"
  },
  subtitle: {
    en: "From the conquests of Timur and the sack of Delhi through the dazzling Timurid Renaissance of Herat and Samarkand, the observatory of Ulugh Beg, and the rival Black Sheep and White Sheep Turkmen, to the militant Sufi order from which Shah Ismail would forge the Safavid state. Slide across the years to read the major events of Iran between the Mongols and the Safavids.",
    el: "Από τις κατακτήσεις του Ταμερλάνου και τη λεηλασία του Δελχί, μέσα από την εκθαμβωτική Αναγέννηση των Τιμουριδών στη Χεράτ και τη Σαμαρκάνδη, το αστεροσκοπείο του Ουλούγκ Μπεγκ και τους αντίπαλους Τουρκομάνους του Μαύρου και του Άσπρου Προβάτου, ως το μαχητικό σουφικό τάγμα από το οποίο ο Σαχ Ισμαήλ θα σφυρηλατούσε το κράτος των Σαφαβιδών. Μετακινηθείτε ανάμεσα στα έτη για να διαβάσετε τα γεγονότα του Ιράν ανάμεσα στους Μογγόλους και τους Σαφαβίδες."
  },
  menuDescription: {
    en: "Tamerlane's conquests and the brilliant art of Herat and Samarkand.",
    el: "Οι κατακτήσεις του Ταμερλάνου κι η λαμπρή τέχνη της Χεράτ και της Σαμαρκάνδης."
  },
  footerLabel: {
    en: "Timurid & Turkmen Iran · 1370-1501 AD",
    el: "Τιμουριδικό & Τουρκομανικό Ιράν · 1370-1501 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Timurid & Turkmen Iran",
    el: "Τιμουριδικό & Τουρκομανικό Ιράν"
  },
  theme: THEMES.violet,
  timeline: [
    {
      year: 1370,
      era: {
        en: "The Rise of Timur",
        el: "Η Άνοδος του Ταμερλάνου"
      },
      events: [
        {
          title: {
            en: "Timur seizes power in Samarkand",
            el: "Ο Ταμερλάνος καταλαμβάνει την εξουσία στη Σαμαρκάνδη"
          },
          description: {
            en: "The warlord Timur (Tamerlane) makes himself master of Transoxiana and begins the conquest of Iran.",
            el: "Ο πολέμαρχος Ταμερλάνος (Τιμούρ) γίνεται κύριος της Υπερωξιανής και ξεκινά την κατάκτηση του Ιράν."
          },
          extendedDescription: {
            en: "A Turco-Mongol from near Samarkand, Timur claimed the mantle of Genghis Khan and built a vast empire through relentless war. Over the next decades he overran Iran, sacked Delhi, defeated the Ottomans, and left towers of skulls behind him — even as he made his capital one of the wonders of the world.",
            el: "Τουρκομογγόλος από τα περίχωρα της Σαμαρκάνδης, ο Ταμερλάνος διεκδίκησε τον μανδύα του Τζένγκις Χαν και οικοδόμησε μια τεράστια αυτοκρατορία μέσα από αδιάκοπο πόλεμο. Τις επόμενες δεκαετίες κατέλαβε το Ιράν, λεηλάτησε το Δελχί, νίκησε τους Οθωμανούς και άφησε πίσω του πύργους από κρανία — τη στιγμή που έκανε την πρωτεύουσά του ένα από τα θαύματα του κόσμου."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Timur_reconstruction03.jpg?width=1024",
            alt: {
              en: "Facial reconstruction of Timur (Tamerlane)",
              el: "Ανάπλαση του προσώπου του Ταμερλάνου (Τιμούρ)"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1398,
      era: {
        en: "The Conquests of Timur",
        el: "Οι Κατακτήσεις του Ταμερλάνου"
      },
      events: [
        {
          title: {
            en: "Timur sacks Delhi",
            el: "Ο Ταμερλάνος λεηλατεί το Δελχί"
          },
          description: {
            en: "Timur storms Delhi and massacres its inhabitants, one of the bloodiest episodes of his campaigns.",
            el: "Ο Ταμερλάνος κυριεύει το Δελχί και σφαγιάζει τους κατοίκους του, ένα από τα πιο αιματηρά επεισόδια των εκστρατειών του."
          },
          extendedDescription: {
            en: "The plunder of the wealthy sultanate enriched Timur's empire and fed the building of Samarkand. He carried off artisans and craftsmen to adorn his capital, a practice that concentrated the talent of Asia in his Central Asian heartland even as it depopulated the lands he conquered.",
            el: "Η λεηλασία του πλούσιου σουλτανάτου εμπλούτισε την αυτοκρατορία του Ταμερλάνου και τροφοδότησε το χτίσιμο της Σαμαρκάνδης. Απήγαγε τεχνίτες και μαστόρους για να στολίσουν την πρωτεύουσά του, μια πρακτική που συγκέντρωσε το ταλέντο της Ασίας στην κεντροασιατική του καρδιά, ενώ ερήμωνε τα εδάφη που κατακτούσε."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1402,
      era: {
        en: "The Conquests of Timur",
        el: "Οι Κατακτήσεις του Ταμερλάνου"
      },
      events: [
        {
          title: {
            en: "Timur defeats the Ottomans at Ankara",
            el: "Ο Ταμερλάνος νικά τους Οθωμανούς στην Άγκυρα"
          },
          description: {
            en: "At Ankara, Timur crushes the Ottoman sultan Bayezid I and takes him prisoner, briefly shattering the young Ottoman state.",
            el: "Στην Άγκυρα, ο Ταμερλάνος συντρίβει τον Οθωμανό σουλτάνο Βαγιαζίτ Α΄ και τον αιχμαλωτίζει, διαλύοντας προσωρινά το νεαρό οθωμανικό κράτος."
          },
          extendedDescription: {
            en: "The capture of Bayezid plunged the Ottomans into a decade of civil war and delayed the fall of Constantinople by fifty years. Timur, now the undisputed master of the Islamic east, turned toward a planned invasion of China — but died at Otrar in 1405 before he could set out.",
            el: "Η αιχμαλωσία του Βαγιαζίτ βύθισε τους Οθωμανούς σε μια δεκαετία εμφυλίου πολέμου και καθυστέρησε την Άλωση της Κωνσταντινούπολης κατά πενήντα χρόνια. Ο Ταμερλάνος, αδιαμφισβήτητος πλέον κύριος της ισλαμικής ανατολής, στράφηκε προς μια σχεδιασμένη εισβολή στην Κίνα — αλλά πέθανε στο Οτράρ το 1405 πριν προλάβει να ξεκινήσει."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Timur_reviews_his_troops_in_the_plain_of_Sivas_in_the_battle_of_Ankara_in_mid-summer_1402._Zafarnama_of_1436,_facing_folios_356r_(left),_355v_(right).jpg?width=1024",
            alt: {
              en: "Timur's army before the Battle of Ankara, from a Zafarnama manuscript",
              el: "Ο στρατός του Τιμούρ πριν τη μάχη της Άγκυρας, από χειρόγραφο Ζαφαρναμά"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1405,
      era: {
        en: "The Timurid Renaissance",
        el: "Η Αναγέννηση των Τιμουριδών"
      },
      events: [
        {
          title: {
            en: "Shah Rukh and the golden age of Herat",
            el: "Ο Σαχ Ρουχ και η χρυσή εποχή της Χεράτ"
          },
          description: {
            en: "Timur's son Shah Rukh moves the capital to Herat and presides over a dazzling revival of Persian art and letters.",
            el: "Ο γιος του Ταμερλάνου, ο Σαχ Ρουχ, μεταφέρει την πρωτεύουσα στη Χεράτ και επιβλέπει μια εκθαμβωτική αναβίωση της περσικής τέχνης και των γραμμάτων."
          },
          extendedDescription: {
            en: "Under Shah Rukh and his cultured queen Gawhar Shad, Herat became the jewel of the Persianate world. Miniature painting, calligraphy, architecture, and poetry flourished, and the Timurid style would inspire the Mughals of India and the Safavids of Iran for generations to come.",
            el: "Υπό τον Σαχ Ρουχ και τη μορφωμένη βασίλισσά του Γκάουχαρ Σαντ, η Χεράτ έγινε το κόσμημα του περσίζοντος κόσμου. Η μικρογραφία, η καλλιγραφία, η αρχιτεκτονική και η ποίηση άνθισαν, και το τιμουριδικό ύφος θα ενέπνεε τους Μογγόλους της Ινδίας και τους Σαφαβίδες του Ιράν για γενεές."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Contemporary_portrait_of_Shah_Rukh,_painted_in_his_lifetime_in_1435-36,_by_commission_of_his_son_Ibrahim_Sultan.jpg?width=1024",
            alt: {
              en: "Contemporary portrait of Shah Rukh, Timurid ruler of Herat",
              el: "Σύγχρονο πορτρέτο του Σαχ Ρουχ, Τιμουρίδη ηγεμόνα της Χεράτ"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1420,
      era: {
        en: "The Timurid Renaissance",
        el: "Η Αναγέννηση των Τιμουριδών"
      },
      events: [
        {
          title: {
            en: "Ulugh Beg's observatory at Samarkand",
            el: "Το αστεροσκοπείο του Ουλούγκ Μπεγκ στη Σαμαρκάνδη"
          },
          description: {
            en: "The scholar-prince Ulugh Beg builds a great observatory at Samarkand and compiles a celebrated star catalogue.",
            el: "Ο λόγιος πρίγκιπας Ουλούγκ Μπεγκ χτίζει ένα μεγάλο αστεροσκοπείο στη Σαμαρκάνδη και συντάσσει έναν ξακουστό κατάλογο άστρων."
          },
          extendedDescription: {
            en: "Timur's grandson Ulugh Beg was an astronomer of the first rank. His Zij-i Sultani mapped over a thousand stars with an accuracy unmatched for two centuries. His murder by his own son in 1449 was a blow to Timurid science, but his tables spread west and were studied in Europe.",
            el: "Ο εγγονός του Ταμερλάνου, ο Ουλούγκ Μπεγκ, ήταν αστρονόμος πρώτης τάξης. Το Ζιτζ-ι Σουλτανί του χαρτογράφησε πάνω από χίλια άστρα με ακρίβεια απαράμιλλη για δύο αιώνες. Η δολοφονία του από τον ίδιο του τον γιο το 1449 υπήρξε πλήγμα για την τιμουριδική επιστήμη, όμως οι πίνακές του εξαπλώθηκαν δυτικά και μελετήθηκαν στην Ευρώπη."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ulugh_Beg_Observatory_02.jpg?width=1024",
            alt: {
              en: "The remains of Ulugh Beg's observatory at Samarkand",
              el: "Τα κατάλοιπα του αστεροσκοπείου του Ουλούγκ Μπεγκ στη Σαμαρκάνδη"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1450,
      era: {
        en: "The Turkmen Confederations",
        el: "Οι Τουρκομανικές Συνομοσπονδίες"
      },
      events: [
        {
          title: {
            en: "The Qara Qoyunlu and Aq Qoyunlu",
            el: "Οι Καρά Κογιουνλού και οι Ακ Κογιουνλού"
          },
          description: {
            en: "The 'Black Sheep' and 'White Sheep' Turkmen confederations contend for western Iran as Timurid power fades.",
            el: "Οι τουρκομανικές συνομοσπονδίες του «Μαύρου Προβάτου» και του «Άσπρου Προβάτου» διεκδικούν το δυτικό Ιράν καθώς η ισχύς των Τιμουριδών σβήνει."
          },
          extendedDescription: {
            en: "The Qara Qoyunlu and their rivals the Aq Qoyunlu were tribal confederations of Oghuz Turks who ruled Azerbaijan, western Iran, and Iraq from Tabriz. Their courts too patronized Persian culture, and their endless wars set the stage for a new power rising among the Sufi orders of the northwest.",
            el: "Οι Καρά Κογιουνλού και οι αντίπαλοί τους Ακ Κογιουνλού ήταν φυλετικές συνομοσπονδίες Ογούζων Τούρκων που κυβερνούσαν το Αζερμπαϊτζάν, το δυτικό Ιράν και το Ιράκ από την Ταυρίδα. Και οι αυλές τους προστάτευαν τον περσικό πολιτισμό, και οι ατέλειωτοι πόλεμοί τους προετοίμασαν το έδαφος για μια νέα δύναμη που ανερχόταν ανάμεσα στα σουφικά τάγματα του βορειοδυτικού Ιράν."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1478,
      era: {
        en: "The Turkmen Confederations",
        el: "Οι Τουρκομανικές Συνομοσπονδίες"
      },
      events: [
        {
          title: {
            en: "Uzun Hasan and the Aq Qoyunlu zenith",
            el: "Ο Ουζούν Χασάν και το απόγειο των Ακ Κογιουνλού"
          },
          description: {
            en: "Under Uzun Hasan the Aq Qoyunlu dominate Iran and negotiate with Venice against the Ottomans before his death in 1478.",
            el: "Υπό τον Ουζούν Χασάν οι Ακ Κογιουνλού κυριαρχούν στο Ιράν και διαπραγματεύονται με τη Βενετία εναντίον των Οθωμανών πριν από τον θάνατό του το 1478."
          },
          extendedDescription: {
            en: "Uzun Hasan defeated the Qara Qoyunlu and the Timurids and sought European allies against the rising Ottomans, but was beaten at Otlukbeli in 1473. His realm fractured after his death — and his own grandson would soon be swept aside by the Safavid revolution born of a militant Sufi brotherhood.",
            el: "Ο Ουζούν Χασάν νίκησε τους Καρά Κογιουνλού και τους Τιμουρίδες και αναζήτησε ευρωπαίους συμμάχους εναντίον των ανερχόμενων Οθωμανών, αλλά ηττήθηκε στο Οτλουκμπελί το 1473. Το κράτος του κατακερματίστηκε μετά τον θάνατό του — και ο ίδιος του ο εγγονός θα παραμεριζόταν σύντομα από τη σαφαβιδική επανάσταση που γεννήθηκε από μια μαχητική σουφική αδελφότητα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1488,
      era: {
        en: "Seeds of the Safavids",
        el: "Οι Σπόροι των Σαφαβιδών"
      },
      events: [
        {
          title: {
            en: "The Safaviyya order turns militant",
            el: "Το τάγμα Σαφαβίγια γίνεται μαχητικό"
          },
          description: {
            en: "The Sufi order of Ardabil, once quietist, becomes a militant Shia movement with a devoted following of Qizilbash warriors.",
            el: "Το σουφικό τάγμα του Αρντάμπιλ, άλλοτε ησυχαστικό, γίνεται ένα μαχητικό σιιτικό κίνημα με αφοσιωμένους πολεμιστές Κιζιλμπάς."
          },
          extendedDescription: {
            en: "The Safavid family transformed their spiritual brotherhood into a revolutionary force, drawing Turkmen tribesmen — the 'red-heads' or Qizilbash — who revered their leaders as near-divine. When the child Ismail inherited the order's leadership, he carried both a claim to sanctity and an army of fanatical devotees.",
            el: "Η οικογένεια των Σαφαβιδών μεταμόρφωσε την πνευματική τους αδελφότητα σε μια επαναστατική δύναμη, προσελκύοντας Τουρκομάνους φυλάρχους — τους «κοκκινοκέφαλους» ή Κιζιλμπάς — που λάτρευαν τους ηγέτες τους σχεδόν ως θεούς. Όταν το παιδί Ισμαήλ κληρονόμησε την ηγεσία του τάγματος, έφερε τόσο μια αξίωση αγιότητας όσο και έναν στρατό φανατικών οπαδών."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1501,
      era: {
        en: "Seeds of the Safavids",
        el: "Οι Σπόροι των Σαφαβιδών"
      },
      events: [
        {
          title: {
            en: "Ismail proclaims the Safavid state",
            el: "Ο Ισμαήλ διακηρύσσει το κράτος των Σαφαβιδών"
          },
          description: {
            en: "The fifteen-year-old Ismail takes Tabriz, crowns himself shah, and declares Twelver Shiism the religion of Iran.",
            el: "Ο δεκαπεντάχρονος Ισμαήλ καταλαμβάνει την Ταυρίδα, στέφεται σάχης και διακηρύσσει τον δωδεκαϊμαμικό σιισμό ως θρησκεία του Ιράν."
          },
          extendedDescription: {
            en: "With his Qizilbash cavalry Ismail overthrew the Aq Qoyunlu and seized the northwest, founding the dynasty that would reunify Iran for the first time since the Arab conquest. His decision to impose Shiism gave the new state a distinct identity that still shapes Iran — the opening of the Safavid age.",
            el: "Με το ιππικό των Κιζιλμπάς ο Ισμαήλ ανέτρεψε τους Ακ Κογιουνλού και κατέλαβε το βορειοδυτικό Ιράν, ιδρύοντας τη δυναστεία που θα επανένωνε το Ιράν για πρώτη φορά μετά την αραβική κατάκτηση. Η απόφασή του να επιβάλει τον σιισμό έδωσε στο νέο κράτος μια ξεχωριστή ταυτότητα που διαμορφώνει ακόμη το Ιράν — το άνοιγμα της εποχής των Σαφαβιδών."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
