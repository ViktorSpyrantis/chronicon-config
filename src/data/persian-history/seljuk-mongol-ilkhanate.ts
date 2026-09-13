/** Seljuks, Mongols & Ilkhanate — Σελτζούκοι, Μογγόλοι & Ιλχανάτο · Persian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const SELJUK_MONGOL_ILKHANATE = {
  id: "seljuk-mongol-ilkhanate" as const,
  label: {
    en: "Seljuks, Mongols & Ilkhanate",
    el: "Σελτζούκοι, Μογγόλοι & Ιλχανάτο"
  },
  supertitle: {
    en: "Turks & Mongols",
    el: "Τούρκοι & Μογγόλοι"
  },
  title: {
    en: "Seljuks, Mongols & the Ilkhanate",
    el: "Σελτζούκοι, Μογγόλοι & το Ιλχανάτο"
  },
  subtitle: {
    en: "From the Turkish Seljuks and the Persian statecraft of Nizam al-Mulk through the Assassins of Alamut and the poetry of Omar Khayyam, to the cataclysm of the Mongol invasion, the sack of Baghdad, and the Persianized Mongol Ilkhanate that rose from the ruins. Slide across the centuries to read the major events of Iran under Turk and Mongol.",
    el: "Από τους Τούρκους Σελτζούκους και την περσική πολιτική τέχνη του Νιζάμ αλ-Μουλκ, μέσα από τους Ασσασίνους του Αλαμούτ και την ποίηση του Ομάρ Καγιάμ, ως τον κατακλυσμό της μογγολικής εισβολής, τη λεηλασία της Βαγδάτης και το περσοποιημένο μογγολικό Ιλχανάτο που αναδύθηκε από τα ερείπια. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα γεγονότα του Ιράν υπό Τούρκους και Μογγόλους."
  },
  menuDescription: {
    en: "Seljuk sultans, the Assassins of Alamut, and the Mongol storm that remade Iran.",
    el: "Σελτζούκοι σουλτάνοι, οι Ασσασίνοι του Αλαμούτ κι η μογγολική θύελλα που ξαναέπλασε το Ιράν."
  },
  footerLabel: {
    en: "Seljuks, Mongols & Ilkhanate · 1040-1370 AD",
    el: "Σελτζούκοι, Μογγόλοι & Ιλχανάτο · 1040-1370 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Seljuks, Mongols & the Ilkhanate",
    el: "Σελτζούκοι, Μογγόλοι & το Ιλχανάτο"
  },
  theme: THEMES.slate,
  timeline: [
    {
      year: 1040,
      era: {
        en: "The Great Seljuks",
        el: "Οι Μεγάλοι Σελτζούκοι"
      },
      events: [
        {
          title: {
            en: "The Seljuks win at Dandanaqan",
            el: "Οι Σελτζούκοι νικούν στο Νταντανακάν"
          },
          description: {
            en: "The Turkish Seljuks defeat the Ghaznavids at Dandanaqan and become masters of Khurasan and Iran.",
            el: "Οι Τούρκοι Σελτζούκοι νικούν τους Γαζνεβίδες στο Νταντανακάν και γίνονται κύριοι του Χορασάν και του Ιράν."
          },
          extendedDescription: {
            en: "Nomadic Oghuz Turks converted to Sunni Islam, the Seljuks under Tughril Beg swept across Iran and in 1055 entered Baghdad, freeing the caliph from the Shia Buyids. They ruled as sultans in the caliph's name, and their empire fused Turkish military power with Persian administration and culture.",
            el: "Νομάδες Ογούζοι Τούρκοι που ασπάστηκαν το σουνιτικό Ισλάμ, οι Σελτζούκοι υπό τον Τογρούλ Μπεγκ σάρωσαν το Ιράν και το 1055 εισήλθαν στη Βαγδάτη, ελευθερώνοντας τον χαλίφη από τους σιίτες Μπουγίδες. Κυβέρνησαν ως σουλτάνοι στο όνομα του χαλίφη, και η αυτοκρατορία τους συνένωσε την τουρκική στρατιωτική ισχύ με την περσική διοίκηση και τον περσικό πολιτισμό."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1063,
      era: {
        en: "The Great Seljuks",
        el: "Οι Μεγάλοι Σελτζούκοι"
      },
      events: [
        {
          title: {
            en: "Nizam al-Mulk and the Persian order",
            el: "Ο Νιζάμ αλ-Μουλκ και η περσική τάξη"
          },
          description: {
            en: "The Persian vizier Nizam al-Mulk governs the Seljuk Empire, founds the Nizamiyya colleges, and writes his manual of statecraft.",
            el: "Ο Πέρσης βεζίρης Νιζάμ αλ-Μουλκ κυβερνά τη Σελτζουκική Αυτοκρατορία, ιδρύει τα κολέγια Νιζαμίγια και γράφει το εγχειρίδιο πολιτικής του τέχνης."
          },
          extendedDescription: {
            en: "For thirty years Nizam al-Mulk ran the empire under Alp Arslan and Malik Shah, building a network of madrasas to train orthodox scholars and administrators. His Siyasatnama ('Book of Government') became a classic of Persian political thought. His assassination in 1092 signalled the empire's coming fragmentation.",
            el: "Επί τριάντα χρόνια ο Νιζάμ αλ-Μουλκ διοικούσε την αυτοκρατορία υπό τον Αλπ Αρσλάν και τον Μαλίκ Σαχ, χτίζοντας ένα δίκτυο μεντρεσέδων για την εκπαίδευση ορθόδοξων λογίων και διοικητών. Το Σιγιασατναμά του («Βιβλίο της Διακυβέρνησης») έγινε κλασικό έργο της περσικής πολιτικής σκέψης. Η δολοφονία του το 1092 προμήνυσε τον επερχόμενο κατακερματισμό της αυτοκρατορίας."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Nizam_Al-Mulk.png?width=1024",
            alt: {
              en: "Nizam al-Mulk, Seljuk vizier and author of the Siyasatnama",
              el: "Ο Νιζάμ αλ-Μουλκ, βεζίρης των Σελτζούκων και συγγραφέας του Σιγιασάτναμα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1071,
      era: {
        en: "The Great Seljuks",
        el: "Οι Μεγάλοι Σελτζούκοι"
      },
      events: [
        {
          title: {
            en: "Manzikert opens Anatolia",
            el: "Το Ματζικέρτ ανοίγει την Ανατολία"
          },
          description: {
            en: "Alp Arslan crushes the Byzantine army at Manzikert, opening Anatolia to Turkish settlement.",
            el: "Ο Αλπ Αρσλάν συντρίβει τον βυζαντινό στρατό στο Ματζικέρτ, ανοίγοντας την Ανατολία στον τουρκικό εποικισμό."
          },
          extendedDescription: {
            en: "The capture of the emperor Romanos IV shattered Byzantine defences and let Turkish tribes flood into Asia Minor, a turning point that would eventually lead to the Crusades and, much later, the Ottoman Empire. For Iran, Seljuk power was now at its zenith, stretching from the Mediterranean to Central Asia.",
            el: "Η αιχμαλωσία του αυτοκράτορα Ρωμανού Δ΄ διέλυσε τις βυζαντινές άμυνες και επέτρεψε σε τουρκικές φυλές να κατακλύσουν τη Μικρά Ασία, ένα σημείο καμπής που θα οδηγούσε τελικά στις Σταυροφορίες και, πολύ αργότερα, στην Οθωμανική Αυτοκρατορία. Για το Ιράν, η σελτζουκική ισχύς βρισκόταν πλέον στο ζενίθ της, εκτεινόμενη από τη Μεσόγειο ως την Κεντρική Ασία."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Battle_of_Manzikert_(1071).webp?width=1024",
            alt: {
              en: "The Battle of Manzikert (1071)",
              el: "Η μάχη του Ματζικέρτ (1071)"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1090,
      era: {
        en: "The Assassins",
        el: "Οι Ασσασίνοι"
      },
      events: [
        {
          title: {
            en: "Hassan-i Sabbah seizes Alamut",
            el: "Ο Χασάν-ι Σαμπάχ καταλαμβάνει το Αλαμούτ"
          },
          description: {
            en: "The Ismaili leader Hassan-i Sabbah takes the mountain fortress of Alamut and founds the order of the Nizari 'Assassins.'",
            el: "Ο ισμαηλίτης ηγέτης Χασάν-ι Σαμπάχ κυριεύει το ορεινό φρούριο του Αλαμούτ και ιδρύει το τάγμα των νιζάρι «Ασσασίνων»."
          },
          extendedDescription: {
            en: "From Alamut and a chain of castles, the Nizari Ismailis waged a campaign of targeted killings against Seljuk and other rulers, striking fear far beyond their small numbers. European Crusaders brought home garbled tales that gave the word 'assassin' to the languages of the West.",
            el: "Από το Αλαμούτ και μια αλυσίδα κάστρων, οι νιζάρι ισμαηλίτες διεξήγαγαν μια εκστρατεία στοχευμένων δολοφονιών εναντίον Σελτζούκων και άλλων ηγεμόνων, σπέρνοντας φόβο πολύ πέρα από τον μικρό αριθμό τους. Ευρωπαίοι σταυροφόροι έφεραν πίσω παραμορφωμένες ιστορίες που χάρισαν τη λέξη «ασσασίνος» στις γλώσσες της Δύσης."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Iran_-_Qazvin_-_Alamout_Castle_-_panoramio_(1).jpg?width=1024",
            alt: {
              en: "The ruins of Alamut Castle, stronghold of the Nizari Ismailis",
              el: "Τα ερείπια του κάστρου του Αλαμούτ, προπύργιο των Νιζαρί Ισμαηλιτών"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1131,
      era: {
        en: "The Persian Renaissance",
        el: "Η Περσική Αναγέννηση"
      },
      events: [
        {
          title: {
            en: "Omar Khayyam, poet and astronomer",
            el: "Ο Ομάρ Καγιάμ, ποιητής και αστρονόμος"
          },
          description: {
            en: "The polymath Omar Khayyam, famed for his quatrains and his solar calendar, dies at Nishapur.",
            el: "Ο πολυμαθής Ομάρ Καγιάμ, ξακουστός για τα τετράστιχά του και το ηλιακό ημερολόγιό του, πεθαίνει στη Νισαπούρ."
          },
          extendedDescription: {
            en: "Under Seljuk patronage Khayyam reformed the calendar to remarkable accuracy and advanced algebra. His Rubaiyat, later famous in the West through Edward FitzGerald's translation, capture a meditative, wine-tinged skepticism — one voice in the extraordinary Persian literary culture flourishing under Turkish rule.",
            el: "Υπό τη σελτζουκική χορηγία ο Καγιάμ μεταρρύθμισε το ημερολόγιο με αξιοσημείωτη ακρίβεια και προήγαγε την άλγεβρα. Το Ρουμπαγιάτ του, αργότερα ξακουστό στη Δύση μέσω της μετάφρασης του Έντουαρντ Φιτζέραλντ, αποτυπώνει έναν στοχαστικό, οινοβαμμένο σκεπτικισμό — μία φωνή μέσα στην εξαιρετική περσική λογοτεχνική κουλτούρα που άνθιζε υπό την τουρκική κυριαρχία."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hakim_Omar_Khayam_-_panoramio.jpg?width=1024",
            alt: {
              en: "Statue of Omar Khayyam, poet and astronomer",
              el: "Άγαλμα του Ομάρ Καγιάμ, ποιητή και αστρονόμου"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1219,
      era: {
        en: "The Mongol Storm",
        el: "Η Μογγολική Θύελλα"
      },
      events: [
        {
          title: {
            en: "Genghis Khan invades Iran",
            el: "Ο Τζένγκις Χαν εισβάλλει στο Ιράν"
          },
          description: {
            en: "The Mongols under Genghis Khan pour into the Khwarazmian Empire, unleashing devastation on the cities of Iran.",
            el: "Οι Μογγόλοι υπό τον Τζένγκις Χαν εισβάλλουν στην Αυτοκρατορία των Χορεζμίων, εξαπολύοντας καταστροφή στις πόλεις του Ιράν."
          },
          extendedDescription: {
            en: "Provoked by the massacre of his envoys, Genghis Khan turned west with terrible force. Bukhara, Samarkand, Merv, Nishapur, and Herat were stormed and their populations slaughtered in numbers that scarred the Iranian world for generations. Irrigation systems and libraries built over centuries were destroyed in months.",
            el: "Εξοργισμένος από τη σφαγή των απεσταλμένων του, ο Τζένγκις Χαν στράφηκε δυτικά με τρομερή ορμή. Η Μπουχάρα, η Σαμαρκάνδη, η Μερβ, η Νισαπούρ και η Χεράτ κυριεύτηκαν και οι πληθυσμοί τους σφαγιάστηκαν σε αριθμούς που σημάδεψαν τον ιρανικό κόσμο επί γενεές. Αρδευτικά συστήματα και βιβλιοθήκες χτισμένα επί αιώνες καταστράφηκαν μέσα σε μήνες."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumGenghisPortrait.jpg?width=1024",
            alt: {
              en: "Portrait of Genghis Khan, whose armies invaded Iran",
              el: "Πορτρέτο του Τζένγκις Χαν, του οποίου οι στρατοί εισέβαλαν στο Ιράν"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1256,
      era: {
        en: "The Ilkhanate",
        el: "Το Ιλχανάτο"
      },
      events: [
        {
          title: {
            en: "Hulagu founds the Ilkhanate",
            el: "Ο Χουλαγκού ιδρύει το Ιλχανάτο"
          },
          description: {
            en: "Genghis Khan's grandson Hulagu destroys the Assassins of Alamut, sacks Baghdad in 1258, and founds a Mongol realm in Iran.",
            el: "Ο εγγονός του Τζένγκις Χαν, ο Χουλαγκού, καταστρέφει τους Ασσασίνους του Αλαμούτ, λεηλατεί τη Βαγδάτη το 1258 και ιδρύει ένα μογγολικό κράτος στο Ιράν."
          },
          extendedDescription: {
            en: "Hulagu's sack of Baghdad ended the Abbasid Caliphate and, by tradition, killed the last caliph. Yet his dynasty, the Ilkhans, settled into Iran and were gradually captured by its civilization — adopting Persian as the language of court and culture and rebuilding what the conquest had wrecked.",
            el: "Η λεηλασία της Βαγδάτης από τον Χουλαγκού τερμάτισε το Αββασιδικό Χαλιφάτο και, κατά την παράδοση, σκότωσε τον τελευταίο χαλίφη. Ωστόσο η δυναστεία του, οι Ιλχάνοι, εγκαταστάθηκαν στο Ιράν και σταδιακά αιχμαλωτίστηκαν από τον πολιτισμό του — υιοθετώντας την περσική ως γλώσσα της αυλής και του πολιτισμού και ανοικοδομώντας ό,τι είχε καταστρέψει η κατάκτηση."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1295,
      era: {
        en: "The Ilkhanate",
        el: "Το Ιλχανάτο"
      },
      events: [
        {
          title: {
            en: "Ghazan Khan converts to Islam",
            el: "Ο Γαζάν Χαν ασπάζεται το Ισλάμ"
          },
          description: {
            en: "The Ilkhan Ghazan adopts Islam and, with his vizier Rashid al-Din, reforms the state and sponsors a great flowering of art.",
            el: "Ο Ιλχάνος Γαζάν ασπάζεται το Ισλάμ και, μαζί με τον βεζίρη του Ρασίντ αλ-Ντιν, μεταρρυθμίζει το κράτος και χρηματοδοτεί μια μεγάλη άνθηση της τέχνης."
          },
          extendedDescription: {
            en: "Ghazan's conversion completed the Mongols' absorption into the Iranian-Islamic world. His minister Rashid al-Din, a physician and historian, compiled the Jami al-Tawarikh, a pioneering world history, and Ilkhanid workshops produced sumptuous illustrated manuscripts blending Persian and East Asian styles.",
            el: "Ο εξισλαμισμός του Γαζάν ολοκλήρωσε την αφομοίωση των Μογγόλων στον ιρανοϊσλαμικό κόσμο. Ο υπουργός του Ρασίντ αλ-Ντιν, ιατρός και ιστορικός, συνέταξε το Τζαμί αλ-Ταουαρίχ, μια πρωτοποριακή παγκόσμια ιστορία, και τα εργαστήρια των Ιλχάνων παρήγαγαν πολυτελή εικονογραφημένα χειρόγραφα που συνδύαζαν περσικά και ανατολικοασιατικά στοιχεία."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1335,
      era: {
        en: "Fragmentation",
        el: "Κατακερματισμός"
      },
      events: [
        {
          title: {
            en: "The collapse of the Ilkhanate",
            el: "Η κατάρρευση του Ιλχανάτου"
          },
          description: {
            en: "With the death of Abu Sa'id and no clear heir, the Ilkhanate dissolves into rival successor states.",
            el: "Με τον θάνατο του Αμπού Σαΐντ και χωρίς σαφή διάδοχο, το Ιλχανάτο διαλύεται σε αντίπαλα διάδοχα κράτη."
          },
          extendedDescription: {
            en: "Dynasties like the Jalayirids, Muzaffarids, and Sarbadars carved up the Iranian lands, an age of disunity remembered for the exquisite lyric poetry of Hafez of Shiraz. This fractured landscape lay open to conquest — and out of Transoxiana a new world-conqueror was already rising.",
            el: "Δυναστείες όπως οι Τζαλαϊρίδες, οι Μουζαφφαρίδες και οι Σαρμπαντάρ μοίρασαν τα ιρανικά εδάφη, μια εποχή διχόνοιας που έμεινε στη μνήμη για την εξαίσια λυρική ποίηση του Χαφέζ της Σιράζ. Αυτό το κατακερματισμένο τοπίο έμενε ανοιχτό στην κατάκτηση — και από την Υπερωξιανή ανερχόταν ήδη ένας νέος κατακτητής του κόσμου."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
