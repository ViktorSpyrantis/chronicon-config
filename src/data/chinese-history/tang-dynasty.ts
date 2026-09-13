/** Tang Dynasty — Δυναστεία Τανγκ · Chinese History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const TANG_DYNASTY = {
  id: "tang-dynasty" as const,
  label: {
    en: "Tang Dynasty",
    el: "Δυναστεία Τανγκ"
  },
  supertitle: {
    en: "唐 · Tang",
    el: "Τανγκ"
  },
  title: {
    en: "The Tang Dynasty",
    el: "Η Δυναστεία Τανγκ"
  },
  subtitle: {
    en: "From the founding of the Tang and the model reign of Taizong through the pilgrim Xuanzang, the reign of Wu Zetian, China's only empress, and the poetic golden age of Xuanzong, to the catastrophe of the An Lushan Rebellion, the birth of printing, and the dynasty's long fall. Slide across the centuries to read the major events of medieval China's most brilliant age.",
    el: "Από την ίδρυση των Τανγκ και την υποδειγματική βασιλεία του Ταϊτσόνγκ, μέσα από τον προσκυνητή Σουάντζανγκ, τη βασιλεία της Ου Τζετιάν, της μόνης αυτοκράτειρας της Κίνας, και τη χρυσή ποιητική εποχή του Σουάντζονγκ, ως την καταστροφή της εξέγερσης του Αν Λουσάν, τη γέννηση της τυπογραφίας και τη μακρά πτώση της δυναστείας. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα γεγονότα της πιο λαμπρής εποχής της μεσαιωνικής Κίνας."
  },
  menuDescription: {
    en: "Cosmopolitan Chang'an, Empress Wu and Li Bai: China's golden age.",
    el: "Το κοσμοπολίτικο Τσανγκάν, η Αυτοκράτειρα Ου κι ο Λι Μπάι: η χρυσή εποχή της Κίνας."
  },
  footerLabel: {
    en: "Tang Dynasty · 618-907 AD",
    el: "Δυναστεία Τανγκ · 618-907 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Tang Dynasty",
    el: "Η Δυναστεία Τανγκ"
  },
  theme: THEMES.gold,
  timeline: [
    {
      year: 618,
      era: {
        en: "Founding of the Tang",
        el: "Ίδρυση της Τανγκ"
      },
      events: [
        {
          title: {
            en: "The Tang dynasty is founded",
            el: "Ιδρύεται η δυναστεία Τανγκ"
          },
          description: {
            en: "Li Yuan proclaims the Tang dynasty at Chang'an, soon to become the greatest city on earth.",
            el: "Ο Λι Γιουάν ανακηρύσσει τη δυναστεία Τανγκ στο Τσανγκάν, που σύντομα θα γίνει η μεγαλύτερη πόλη του κόσμου."
          },
          extendedDescription: {
            en: "Rising from the collapse of the Sui, the Tang inherited a reunited empire and a working central government. Its capital Chang'an, laid out on a vast grid, would grow to over a million people — a cosmopolitan hub of merchants, monks and envoys from across Asia, and the eastern terminus of the Silk Road.",
            el: "Αναδυόμενη από την κατάρρευση των Σούι, η Τανγκ κληρονόμησε μια επανενωμένη αυτοκρατορία και μια λειτουργική κεντρική διοίκηση. Η πρωτεύουσά της Τσανγκάν, σχεδιασμένη σε τεράστιο κάνναβο, θα έφτανε το ένα εκατομμύριο κατοίκους — ένα κοσμοπολίτικο κέντρο εμπόρων, μοναχών και απεσταλμένων από όλη την Ασία."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%94%90_%E4%B8%89%E5%BD%A9%E7%A2%97-Bowl_MET_DP342650.jpg?width=1024",
            alt: {
              en: "Tang three-colour (sancai) glazed pottery, mark of the cosmopolitan age",
              el: "Τρίχρωμη (σανκάι) εφυαλωμένη κεραμική των Τανγκ, σήμα της κοσμοπολίτικης εποχής"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 626,
      era: {
        en: "Emperor Taizong",
        el: "Ο Αυτοκράτορας Ταϊτσόνγκ"
      },
      events: [
        {
          title: {
            en: "Taizong and the Reign of Zhenguan",
            el: "Ο Ταϊτσόνγκ και η Βασιλεία Τζενγκουάν"
          },
          description: {
            en: "Emperor Taizong presides over a model reign of good government, expanding the empire deep into Central Asia.",
            el: "Ο Αυτοκράτορας Ταϊτσόνγκ προΐσταται μιας υποδειγματικής βασιλείας χρηστής διακυβέρνησης, επεκτείνοντας την αυτοκρατορία βαθιά στην Κεντρική Ασία."
          },
          extendedDescription: {
            en: "Coming to the throne after killing his brothers, Taizong nonetheless became the ideal Confucian ruler in later memory. He listened to frank ministers, lightened taxes, revived the examination system, and defeated the Eastern Turks — earning from the steppe peoples the title of Heavenly Khan and making Tang power supreme across Asia.",
            el: "Ανεβαίνοντας στον θρόνο αφού σκότωσε τους αδελφούς του, ο Ταϊτσόνγκ έγινε παρ' όλα αυτά ο ιδανικός κομφουκιανός ηγεμόνας στη μεταγενέστερη μνήμη. Άκουγε ειλικρινείς υπουργούς, ελάφρυνε τους φόρους, αναβίωσε το σύστημα των εξετάσεων και νίκησε τους Ανατολικούς Τούρκους — κερδίζοντας από τους λαούς της στέπας τον τίτλο του Ουράνιου Χάνου."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/TangTaizong.jpg?width=1024",
            alt: {
              en: "Emperor Taizong of Tang, model of the ideal ruler",
              el: "Ο Αυτοκράτορας Ταϊτσόνγκ των Τανγκ, πρότυπο του ιδανικού ηγεμόνα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 645,
      era: {
        en: "Emperor Taizong",
        el: "Ο Αυτοκράτορας Ταϊτσόνγκ"
      },
      events: [
        {
          title: {
            en: "Xuanzang returns from India",
            el: "Ο Σουάντζανγκ επιστρέφει από την Ινδία"
          },
          description: {
            en: "The monk Xuanzang returns from a sixteen-year pilgrimage to India, laden with Buddhist scriptures to translate.",
            el: "Ο μοναχός Σουάντζανγκ επιστρέφει από ένα δεκαεξαετές προσκύνημα στην Ινδία, φορτωμένος με βουδιστικές γραφές προς μετάφραση."
          },
          extendedDescription: {
            en: "Defying a travel ban, Xuanzang crossed the deserts and mountains to the Buddhist heartland of India, studied at the great monastery of Nalanda, and came home to a hero's welcome. His translations and his travelogue enriched Chinese Buddhism, and his journey was later transformed into the beloved novel Journey to the West.",
            el: "Παραβιάζοντας απαγόρευση ταξιδιού, ο Σουάντζανγκ διέσχισε ερήμους και βουνά ως τη βουδιστική καρδιά της Ινδίας, σπούδασε στο μεγάλο μοναστήρι της Ναλάντα και επέστρεψε σε μια αποθεωτική υποδοχή. Οι μεταφράσεις και το οδοιπορικό του εμπλούτισαν τον κινεζικό Βουδισμό, και το ταξίδι του μεταπλάστηκε αργότερα στο αγαπημένο μυθιστόρημα Ταξίδι στη Δύση."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 690,
      era: {
        en: "Empress Wu",
        el: "Η Αυτοκράτειρα Ου"
      },
      events: [
        {
          title: {
            en: "Wu Zetian, China's only empress",
            el: "Η Ου Τζετιάν, η μόνη αυτοκράτειρα της Κίνας"
          },
          description: {
            en: "Wu Zetian takes the throne in her own name — the only woman ever to rule China as emperor.",
            el: "Η Ου Τζετιάν ανεβαίνει στον θρόνο στο δικό της όνομα — η μόνη γυναίκα που κυβέρνησε ποτέ την Κίνα ως αυτοκράτορας."
          },
          extendedDescription: {
            en: "Rising from concubine to empress consort to sole ruler, Wu Zetian proclaimed her own Zhou dynasty in 690. Ruthless to her rivals but shrewd in government, she promoted able officials through the examinations, patronized Buddhism, and held the empire together, defying every Confucian norm about a woman's place.",
            el: "Ανερχόμενη από παλλακίδα σε αυτοκράτειρα σύζυγο και μόνη ηγεμόνα, η Ου Τζετιάν ανακήρυξε τη δική της δυναστεία Τζου το 690. Αδίστακτη προς τους αντιπάλους της αλλά οξυδερκής στη διακυβέρνηση, προήγαγε ικανούς αξιωματούχους μέσω των εξετάσεων και συγκράτησε την αυτοκρατορία, καταλύοντας κάθε κομφουκιανικό κανόνα για τη θέση της γυναίκας."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%94%90%E5%90%8E%E8%A1%8C%E5%BE%9E%E5%9C%96_(%E5%B1%80%E9%83%A8)_-_%E6%AD%A6%E5%89%87%E5%A4%A9.png?width=1024",
            alt: {
              en: "Wu Zetian, the only woman to rule China as emperor",
              el: "Η Ου Τζετιάν, η μόνη γυναίκα που κυβέρνησε την Κίνα ως αυτοκράτορας"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 713,
      era: {
        en: "Emperor Xuanzong",
        el: "Ο Αυτοκράτορας Σουάντζονγκ"
      },
      events: [
        {
          title: {
            en: "The brilliant reign of Xuanzong",
            el: "Η λαμπρή βασιλεία του Σουάντζονγκ"
          },
          description: {
            en: "Under Emperor Xuanzong the Tang reaches its cultural height, an age of poetry, music, and prosperity.",
            el: "Επί Αυτοκράτορα Σουάντζονγκ η Τανγκ φτάνει στην πολιτιστική της ακμή, μια εποχή ποίησης, μουσικής και ευημερίας."
          },
          extendedDescription: {
            en: "The early decades of Xuanzong's long reign were remembered as a golden age. The court patronized music and dance, foreign faiths and merchants filled Chang'an, and the greatest poets of China — Li Bai and Du Fu — gave voice to the era. It was the high noon of the Tang, before the storm.",
            el: "Οι πρώτες δεκαετίες της μακράς βασιλείας του Σουάντζονγκ θυμούνταν ως χρυσή εποχή. Η αυλή προστάτευε τη μουσική και τον χορό, ξένες θρησκείες και έμποροι γέμιζαν το Τσανγκάν, και οι μεγαλύτεροι ποιητές της Κίνας — ο Λι Μπάι και ο Ντου Φου — έδωσαν φωνή στην εποχή. Ήταν το απόγειο της Τανγκ, πριν από την καταιγίδα."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/LiBai.jpg?width=1024",
            alt: {
              en: "The poet Li Bai, one of the great voices of the Tang golden age",
              el: "Ο ποιητής Λι Μπάι, μία από τις μεγάλες φωνές της χρυσής εποχής των Τανγκ"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 755,
      era: {
        en: "The An Lushan Rebellion",
        el: "Η Εξέγερση του Αν Λουσάν"
      },
      events: [
        {
          title: {
            en: "The An Lushan Rebellion",
            el: "Η Εξέγερση του Αν Λουσάν"
          },
          description: {
            en: "The general An Lushan revolts, plunging the empire into a catastrophic war from which the Tang never fully recovers.",
            el: "Ο στρατηγός Αν Λουσάν εξεγείρεται, βυθίζοντας την αυτοκρατορία σε έναν καταστροφικό πόλεμο από τον οποίο η Τανγκ ποτέ δεν ανακάμπτει πλήρως."
          },
          extendedDescription: {
            en: "The frontier general An Lushan marched on the capital, and the emperor fled while his soldiers forced the execution of his beloved consort Yang Guifei. The eight-year war and the census collapse that followed may have cost tens of millions of lives. The Tang endured for another century and a half, but its central power was permanently broken.",
            el: "Ο μεθοριακός στρατηγός Αν Λουσάν βάδισε προς την πρωτεύουσα, και ο αυτοκράτορας κατέφυγε ενώ οι στρατιώτες του επέβαλαν τον θάνατο της αγαπημένης του παλλακίδας Γιανγκ Γκουιφέι. Ο οκταετής πόλεμος και η κατάρρευση της απογραφής που ακολούθησε ίσως κόστισαν δεκάδες εκατομμύρια ζωές. Η Τανγκ άντεξε άλλον ενάμιση αιώνα, όμως η κεντρική της ισχύς έσπασε οριστικά."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%B8%9D%E9%89%B4%E5%9B%BE%E8%AF%B4.Recueil_Historique_des_Principaux_Traits_de_la_Vie_des_Empereurs_Chinois.95%E5%B8%A7%E5%9B%BE.%E5%BD%A9%E7%BB%98%E5%86%8C%E9%A1%B5.%E7%BA%A618%E4%B8%96%E7%BA%AA_(page_19_%E5%AE%A0%E5%B9%B8%E7%95%AA%E5%B0%86)_(%E5%AE%89%E7%A6%84%E5%B1%B1)_(cropped).jpg?width=1024",
            alt: {
              en: "An Lushan, whose rebellion shattered the power of the Tang",
              el: "Ο Αν Λουσάν, του οποίου η εξέγερση συνέτριψε την ισχύ των Τανγκ"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 868,
      era: {
        en: "The Late Tang",
        el: "Η Ύστερη Τανγκ"
      },
      events: [
        {
          title: {
            en: "The Diamond Sutra and printing",
            el: "Το Διαμαντένιο Σούτρα και η τυπογραφία"
          },
          description: {
            en: "A printed copy of the Diamond Sutra is made — the world's earliest dated, complete printed book.",
            el: "Τυπώνεται αντίγραφο του Διαμαντένιου Σούτρα — το αρχαιότερο χρονολογημένο, πλήρες τυπωμένο βιβλίο του κόσμου."
          },
          extendedDescription: {
            en: "Woodblock printing, developed to spread Buddhist texts, produced in 868 the Diamond Sutra scroll later found at Dunhuang — the oldest surviving printed book bearing a date. Centuries before Gutenberg, China had begun to mass-produce the written word, a revolution that would transform learning across East Asia.",
            el: "Η ξυλογραφία, που αναπτύχθηκε για τη διάδοση βουδιστικών κειμένων, παρήγαγε το 868 τον κύλινδρο του Διαμαντένιου Σούτρα που βρέθηκε αργότερα στο Ντουνχουάνγκ — το αρχαιότερο σωζόμενο τυπωμένο βιβλίο με χρονολογία. Αιώνες πριν από τον Γουτεμβέργιο, η Κίνα είχε αρχίσει να αναπαράγει μαζικά τον γραπτό λόγο."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 907,
      era: {
        en: "The Fall of the Tang",
        el: "Η Πτώση της Τανγκ"
      },
      events: [
        {
          title: {
            en: "The fall of the Tang",
            el: "Η πτώση της Τανγκ"
          },
          description: {
            en: "After rebellion and warlordism hollow out the dynasty, the last Tang emperor is deposed, opening a new age of division.",
            el: "Αφού η εξέγερση και η πολεμαρχία υπονομεύουν τη δυναστεία, ο τελευταίος αυτοκράτορας της Τανγκ καθαιρείται, ανοίγοντας μια νέα εποχή διαίρεσης."
          },
          extendedDescription: {
            en: "The Huang Chao rebellion of the 870s sacked the great cities and shattered what remained of Tang authority. In 907 the warlord Zhu Wen deposed the last emperor, and China fractured into the Five Dynasties and Ten Kingdoms. The most brilliant empire of the medieval world had ended, but its poetry and prestige echoed for centuries.",
            el: "Η εξέγερση του Χουάνγκ Τσάο τη δεκαετία του 870 λεηλάτησε τις μεγάλες πόλεις και συνέτριψε ό,τι απέμενε από την εξουσία της Τανγκ. Το 907 ο πολέμαρχος Τζου Ουέν καθαίρεσε τον τελευταίο αυτοκράτορα, και η Κίνα κατακερματίστηκε στις Πέντε Δυναστείες και τα Δέκα Βασίλεια. Η πιο λαμπρή αυτοκρατορία του μεσαιωνικού κόσμου είχε τελειώσει."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
