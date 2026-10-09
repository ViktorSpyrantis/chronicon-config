/** Five Dynasties & Ten Kingdoms — Πέντε Δυναστείες & Δέκα Βασίλεια · Chinese History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const FIVE_DYNASTIES_TEN_KINGDOMS = {
  id: "five-dynasties-ten-kingdoms" as const,
  label: {
    en: "Five Dynasties & Ten Kingdoms",
    el: "Πέντε Δυναστείες & Δέκα Βασίλεια"
  },
  supertitle: {
    en: "五代十國 · Five Dynasties",
    el: "Πέντε Δυναστείες"
  },
  title: {
    en: "The Five Dynasties & Ten Kingdoms",
    el: "Οι Πέντε Δυναστείες & τα Δέκα Βασίλεια"
  },
  subtitle: {
    en: "When the Tang fell in 907, China shattered. In the north, five short-lived dynasties seized Kaifeng and Luoyang one after another, several founded by Shatuo Turkish generals; in the south, ten smaller kingdoms flourished in relative peace. The Khitans built an empire on the steppe frontier and took the northern passes, Vietnam broke free after a thousand years of Chinese rule, and printed books and new poetry spread — until a general of the last dynasty founded the Song. Slide across half a century of division.",
    el: "Όταν έπεσαν οι Τανγκ το 907, η Κίνα θρυμματίστηκε. Στον βορρά, πέντε βραχύβιες δυναστείες κατέλαβαν η μία μετά την άλλη το Κάιφενγκ και το Λουογιάνγκ, αρκετές από αυτές ιδρυμένες από Τούρκους στρατηγούς Σατούο· στον νότο, δέκα μικρότερα βασίλεια άνθισαν σε σχετική ειρήνη. Οι Χιτάν έχτισαν μια αυτοκρατορία στα σύνορα της στέπας και κατέλαβαν τα βόρεια περάσματα, το Βιετνάμ απελευθερώθηκε μετά από χίλια χρόνια κινεζικής κυριαρχίας, και τα τυπωμένα βιβλία και η νέα ποίηση διαδόθηκαν — ώσπου ένας στρατηγός της τελευταίας δυναστείας ίδρυσε τους Σονγκ. Μετακινηθείτε σε μισό αιώνα διχασμού."
  },
  menuDescription: {
    en: "Warlord dynasties in the north, rich kingdoms in the south, and the rise of the Khitans.",
    el: "Δυναστείες πολεμάρχων στον βορρά, πλούσια βασίλεια στον νότο και η άνοδος των Χιτάν."
  },
  footerLabel: {
    en: "Five Dynasties & Ten Kingdoms · 907-960 AD",
    el: "Πέντε Δυναστείες & Δέκα Βασίλεια · 907-960 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Five Dynasties & Ten Kingdoms",
    el: "Οι Πέντε Δυναστείες & τα Δέκα Βασίλεια"
  },
  theme: THEMES.teal,
  timeline: [
    {
      year: 907,
      era: {
        en: "Later Liang",
        el: "Ύστερη Λιάνγκ"
      },
      events: [
        {
          title: {
            en: "Zhu Wen founds the Later Liang",
            el: "Ο Τζου Ουέν ιδρύει την Ύστερη Λιάνγκ"
          },
          description: {
            en: "The warlord Zhu Wen forces the last Tang emperor to abdicate and makes himself emperor at Kaifeng — the first of the Five Dynasties.",
            el: "Ο πολέμαρχος Τζου Ουέν αναγκάζει τον τελευταίο αυτοκράτορα Τανγκ να παραιτηθεί και ανακηρύσσεται αυτοκράτορας στο Κάιφενγκ — η πρώτη από τις Πέντε Δυναστείες."
          },
          extendedDescription: {
            en: "A former salt-smuggler and rebel who had changed sides, Zhu Wen had already murdered most of the Tang court. His Later Liang controlled only the Yellow River plain, and it was one of five northern dynasties that followed each other in barely fifty years — Liang, Tang, Jin, Han and Zhou, each called 'Later' to distinguish it from an older namesake. Meanwhile ten regional kingdoms, mostly in the south, went their own way.",
            el: "Πρώην λαθρέμπορος αλατιού και επαναστάτης που είχε αλλάξει στρατόπεδο, ο Τζου Ουέν είχε ήδη δολοφονήσει το μεγαλύτερο μέρος της αυλής των Τανγκ. Η Ύστερη Λιάνγκ του έλεγχε μόνο την πεδιάδα του Κίτρινου Ποταμού και ήταν μία από τις πέντε βόρειες δυναστείες που διαδέχθηκαν η μία την άλλη σε μόλις πενήντα χρόνια — Λιάνγκ, Τανγκ, Τζιν, Χαν και Τζόου, καθεμιά με το προσωνύμιο «Ύστερη» για να ξεχωρίζει από μια παλαιότερη συνώνυμη. Στο μεταξύ, δέκα περιφερειακά βασίλεια, κυρίως στον νότο, ακολούθησαν τον δικό τους δρόμο."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Five_Dynasties_907-960_AD.jpg?width=1024",
            alt: {
              en: "Historical maps of China during the Five Dynasties, 907–960, showing the northern dynasties and the southern kingdoms",
              el: "Ιστορικοί χάρτες της Κίνας την εποχή των Πέντε Δυναστειών, 907–960, με τις βόρειες δυναστείες και τα νότια βασίλεια"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 910,
      era: {
        en: "Ten Kingdoms",
        el: "Δέκα Βασίλεια"
      },
      events: [
        {
          title: {
            en: "Wuyue builds the Qiantang seawall",
            el: "Το Ουγιουέ χτίζει το θαλάσσιο τείχος του Τσιεντάνγκ"
          },
          description: {
            en: "Qian Liu, king of Wuyue, protects his capital Hangzhou from the Qiantang River's tidal bore with a great seawall of stone-filled bamboo cages.",
            el: "Ο Τσιέν Λιου, βασιλιάς του Ουγιουέ, προστατεύει την πρωτεύουσά του Χανγκτσόου από το παλιρροϊκό κύμα του ποταμού Τσιεντάνγκ με ένα μεγάλο θαλάσσιο τείχος από καλάμινα κλουβιά γεμάτα πέτρες."
          },
          extendedDescription: {
            en: "Legend says Qian Liu ordered his archers to shoot arrows at the tidal bore to drive it back before the work could begin. Wuyue, on the coast south of the Yangtze, avoided the wars of the north by paying tribute to whichever dynasty held Kaifeng, and grew rich on trade, silk and Buddhist patronage. Its peaceful surrender to the Song in 978 spared Hangzhou, which later became the Southern Song capital.",
            el: "Ο θρύλος λέει ότι ο Τσιέν Λιου διέταξε τους τοξότες του να ρίξουν βέλη στο παλιρροϊκό κύμα για να το απωθήσουν πριν ξεκινήσουν τα έργα. Το Ουγιουέ, στην ακτή νότια του Γιανγκτσέ, απέφυγε τους πολέμους του βορρά πληρώνοντας φόρο υποτέλειας σε όποια δυναστεία κρατούσε το Κάιφενγκ, και πλούτισε από το εμπόριο, το μετάξι και τη βουδιστική χορηγία. Η ειρηνική παράδοσή του στους Σονγκ το 978 γλίτωσε το Χανγκτσόου, που αργότερα έγινε πρωτεύουσα των Νότιων Σονγκ."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 916,
      era: {
        en: "The Khitan Rise",
        el: "Η Άνοδος των Χιτάν"
      },
      events: [
        {
          title: {
            en: "Abaoji, emperor of the Khitans",
            el: "Ο Αμπαότζι, αυτοκράτορας των Χιτάν"
          },
          description: {
            en: "The Khitan chieftain Abaoji proclaims himself emperor, founding the state that will become the Liao empire on China's northern frontier.",
            el: "Ο αρχηγός των Χιτάν Αμπαότζι ανακηρύσσεται αυτοκράτορας, ιδρύοντας το κράτος που θα γίνει η αυτοκρατορία Λιάο στα βόρεια σύνορα της Κίνας."
          },
          extendedDescription: {
            en: "Abaoji united the Khitan tribes of Manchuria and Mongolia, created a Khitan script in 920, and ruled farmers and herders through separate administrations — a model later steppe empires would copy. The Khitans became so dominant in the north that their name, as 'Cathay', became the word for China itself in Central Asia, Russia and medieval Europe.",
            el: "Ο Αμπαότζι ένωσε τις φυλές των Χιτάν της Μαντζουρίας και της Μογγολίας, δημιούργησε μια χιτανική γραφή το 920 και κυβέρνησε αγρότες και νομάδες μέσω χωριστών διοικήσεων — ένα πρότυπο που θα αντέγραφαν μεταγενέστερες αυτοκρατορίες της στέπας. Οι Χιτάν κυριάρχησαν τόσο στον βορρά ώστε το όνομά τους, ως «Κατάι», έγινε η λέξη για την ίδια την Κίνα στην Κεντρική Ασία, στη Ρωσία και στη μεσαιωνική Ευρώπη."
          },
          category: "political"
        }
      ]
    },
    {
      year: 923,
      era: {
        en: "Later Tang",
        el: "Ύστερη Τανγκ"
      },
      events: [
        {
          title: {
            en: "The Later Tang of the Shatuo Turks",
            el: "Η Ύστερη Τανγκ των Τούρκων Σατούο"
          },
          description: {
            en: "Li Cunxu, a general of Shatuo Turkish descent, destroys the Later Liang and founds the Later Tang, claiming to restore the fallen dynasty.",
            el: "Ο Λι Τσουνσιού, στρατηγός τουρκικής καταγωγής Σατούο, καταλύει την Ύστερη Λιάνγκ και ιδρύει την Ύστερη Τανγκ, διεκδικώντας την αποκατάσταση της πεσμένης δυναστείας."
          },
          extendedDescription: {
            en: "Li Cunxu's family had been granted the Tang imperial surname for loyal service, so he presented his conquest as a restoration. A brilliant soldier, he was also passionate about the theatre, performing on stage himself and showering favours on actors — and in 926 he was killed in a mutiny led by one of them. Three of the five northern dynasties were founded by men of Shatuo Turkish origin.",
            el: "Η οικογένεια του Λι Τσουνσιού είχε λάβει το αυτοκρατορικό επώνυμο των Τανγκ για την πιστή της υπηρεσία, οπότε εκείνος παρουσίασε την κατάκτησή του ως αποκατάσταση. Λαμπρός στρατιωτικός, ήταν επίσης παθιασμένος με το θέατρο, εμφανιζόταν ο ίδιος στη σκηνή και γέμιζε τους ηθοποιούς με εύνοιες — και το 926 σκοτώθηκε σε μια ανταρσία με επικεφαλής έναν από αυτούς. Τρεις από τις πέντε βόρειες δυναστείες ιδρύθηκαν από άνδρες τουρκικής καταγωγής Σατούο."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Five_Dynasties_Ten_Kingdoms_923_CE.png?width=1024",
            alt: {
              en: "Map of China in 923, divided between the Later Tang in the north and the southern kingdoms",
              el: "Χάρτης της Κίνας το 923, μοιρασμένης ανάμεσα στην Ύστερη Τανγκ στον βορρά και στα νότια βασίλεια"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 932,
      era: {
        en: "Later Tang",
        el: "Ύστερη Τανγκ"
      },
      events: [
        {
          title: {
            en: "The Confucian classics go to print",
            el: "Τα κομφουκιανά κλασικά έργα τυπώνονται"
          },
          description: {
            en: "At the minister Feng Dao's urging, the court begins printing the Confucian classics from carved woodblocks, a project finished in 953.",
            el: "Με την παρότρυνση του υπουργού Φενγκ Ντάο, η αυλή αρχίζει να τυπώνει τα κομφουκιανά κλασικά έργα από σκαλισμένες ξύλινες πλάκες, ένα έργο που ολοκληρώθηκε το 953."
          },
          extendedDescription: {
            en: "Woodblock printing had been used for Buddhist texts and calendars since the Tang, but this was the first official printing of the classics, in some 130 volumes. Feng Dao himself was a survivor who served ten emperors of five dynasties and was later condemned by moralists for disloyalty. The printed classics made standard texts cheap and widely available, preparing the way for the book culture and examination system of the Song.",
            el: "Η ξυλογραφική τυπογραφία χρησιμοποιούνταν για βουδιστικά κείμενα και ημερολόγια ήδη από την εποχή των Τανγκ, αλλά αυτή ήταν η πρώτη επίσημη έκδοση των κλασικών, σε περίπου 130 τόμους. Ο ίδιος ο Φενγκ Ντάο ήταν ένας επιζών που υπηρέτησε δέκα αυτοκράτορες πέντε δυναστειών και αργότερα καταδικάστηκε από ηθικολόγους για απιστία. Τα τυπωμένα κλασικά έκαναν τα καθιερωμένα κείμενα φθηνά και ευρέως διαθέσιμα, προετοιμάζοντας την κουλτούρα του βιβλίου και το σύστημα εξετάσεων των Σονγκ."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 936,
      era: {
        en: "Later Jin",
        el: "Ύστερη Τζιν"
      },
      events: [
        {
          title: {
            en: "The Sixteen Prefectures are ceded",
            el: "Η παραχώρηση των Δεκαέξι Νομών"
          },
          description: {
            en: "To win Khitan backing for his new Later Jin dynasty, Shi Jingtang hands them the Sixteen Prefectures, including the site of modern Beijing.",
            el: "Για να κερδίσει την υποστήριξη των Χιτάν για τη νέα του δυναστεία, την Ύστερη Τζιν, ο Σι Τζινγκτάνγκ τους παραχωρεί τους Δεκαέξι Νομούς, ανάμεσά τους και τη θέση του σημερινού Πεκίνου."
          },
          extendedDescription: {
            en: "Shi Jingtang also agreed to call the Khitan emperor 'father' and pay yearly tribute. The ceded lands contained the mountain passes that guarded the North China Plain, leaving it open to the steppe. The Song would try and fail to recover them, and they remained outside Chinese rule until the Ming took Beijing in 1368 — a loss remembered for centuries as a national humiliation.",
            el: "Ο Σι Τζινγκτάνγκ δέχτηκε επίσης να αποκαλεί τον αυτοκράτορα των Χιτάν «πατέρα» και να πληρώνει ετήσιο φόρο υποτέλειας. Τα εδάφη που παραχωρήθηκαν περιλάμβαναν τα ορεινά περάσματα που φύλαγαν τη Βόρεια Κινεζική Πεδιάδα, αφήνοντάς την ανοιχτή στη στέπα. Οι Σονγκ θα προσπαθούσαν μάταια να τα ανακτήσουν, και έμειναν εκτός κινεζικής κυριαρχίας ώσπου οι Μινγκ κατέλαβαν το Πεκίνο το 1368 — μια απώλεια που έμεινε στη μνήμη επί αιώνες ως εθνική ταπείνωση."
          },
          category: "political"
        }
      ]
    },
    {
      year: 937,
      era: {
        en: "Ten Kingdoms",
        el: "Δέκα Βασίλεια"
      },
      events: [
        {
          title: {
            en: "The Southern Tang and the culture of the south",
            el: "Η Νότια Τανγκ και ο πολιτισμός του νότου"
          },
          description: {
            en: "Li Bian founds the Southern Tang at Nanjing, the largest and most refined of the southern kingdoms.",
            el: "Ο Λι Μπιάν ιδρύει τη Νότια Τανγκ στο Ναντζίνγκ, το μεγαλύτερο και πιο εκλεπτυσμένο από τα νότια βασίλεια."
          },
          extendedDescription: {
            en: "While the north suffered war after war, the south's kingdoms grew in population and wealth. The Southern Tang court became a centre of painting, calligraphy and poetry; its last ruler, Li Yu, is one of China's greatest writers of ci lyrics. The court painter Gu Hongzhong's Night Revels of Han Xizai, known today from a later Song copy, shows a Southern Tang minister's evening of music and feasting.",
            el: "Ενώ ο βορράς υπέφερε από πόλεμο σε πόλεμο, τα βασίλεια του νότου αυξήθηκαν σε πληθυσμό και πλούτο. Η αυλή της Νότιας Τανγκ έγινε κέντρο ζωγραφικής, καλλιγραφίας και ποίησης· ο τελευταίος ηγεμόνας της, ο Λι Γιου, είναι ένας από τους μεγαλύτερους ποιητές λυρικών ασμάτων τσι της Κίνας. Το «Νυχτερινό γλέντι του Χαν Σιζάι» του αυλικού ζωγράφου Γκου Χονγκτζόνγκ, γνωστό σήμερα από ένα μεταγενέστερο αντίγραφο των Σονγκ, δείχνει τη βραδιά μουσικής και συμποσίου ενός υπουργού της Νότιας Τανγκ."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Han_Xizai_Night_Party_(part).jpg?width=1024",
            alt: {
              en: "Detail of the Night Revels of Han Xizai: the minister and his guests at a banquet, from a Song copy of Gu Hongzhong's painting",
              el: "Λεπτομέρεια από το «Νυχτερινό γλέντι του Χαν Σιζάι»: ο υπουργός και οι καλεσμένοι του σε συμπόσιο, από αντίγραφο των Σονγκ του πίνακα του Γκου Χονγκτζόνγκ"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 938,
      era: {
        en: "Ten Kingdoms",
        el: "Δέκα Βασίλεια"
      },
      events: [
        {
          title: {
            en: "Vietnam wins its independence at Bạch Đằng",
            el: "Το Βιετνάμ κερδίζει την ανεξαρτησία του στο Μπαχ Ντανγκ"
          },
          description: {
            en: "Ngô Quyền destroys a Southern Han fleet on the Bạch Đằng River, ending about a thousand years of Chinese rule over northern Vietnam.",
            el: "Ο Νγκο Κουγιέν καταστρέφει έναν στόλο της Νότιας Χαν στον ποταμό Μπαχ Ντανγκ, τερματίζοντας περίπου χίλια χρόνια κινεζικής κυριαρχίας στο βόρειο Βιετνάμ."
          },
          extendedDescription: {
            en: "Ngô Quyền planted iron-tipped stakes in the riverbed, hidden at high tide, then lured the Southern Han ships upstream and attacked as the tide ebbed, leaving them impaled and stranded. He proclaimed himself king in 939. The same tactic was used on the same river against the Song in 981 and the Mongols in 1288, and Bạch Đằng remains a symbol of Vietnamese independence.",
            el: "Ο Νγκο Κουγιέν έμπηξε πασσάλους με σιδερένιες αιχμές στην κοίτη του ποταμού, κρυμμένους στην πλημμυρίδα, έπειτα παρέσυρε τα πλοία της Νότιας Χαν προς τα πάνω και επιτέθηκε όταν τα νερά υποχώρησαν, αφήνοντάς τα καρφωμένα και ακινητοποιημένα. Ανακηρύχθηκε βασιλιάς το 939. Η ίδια τακτική χρησιμοποιήθηκε στον ίδιο ποταμό κατά των Σονγκ το 981 και των Μογγόλων το 1288, και το Μπαχ Ντανγκ παραμένει σύμβολο της βιετναμικής ανεξαρτησίας."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ng%C3%B4_Quy%E1%BB%81n_%C4%91%E1%BA%A1i_ph%C3%A1_qu%C3%A2n_Nam_H%C3%A1n_tr%C3%AAn_s%C3%B4ng_B%E1%BA%A1ch_%C4%90%E1%BA%B1ng.jpg?width=1024",
            alt: {
              en: "Vietnamese folk woodblock print of Ngô Quyền defeating the Southern Han fleet on the Bạch Đằng River",
              el: "Βιετναμέζικη λαϊκή ξυλογραφία με τον Νγκο Κουγιέν να συντρίβει τον στόλο της Νότιας Χαν στον ποταμό Μπαχ Ντανγκ"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 947,
      era: {
        en: "Later Han",
        el: "Ύστερη Χαν"
      },
      events: [
        {
          title: {
            en: "The Khitans take Kaifeng",
            el: "Οι Χιτάν καταλαμβάνουν το Κάιφενγκ"
          },
          description: {
            en: "After the Later Jin defies them, the Khitan emperor captures Kaifeng and proclaims the Liao dynasty, but soon withdraws north.",
            el: "Αφού η Ύστερη Τζιν τους αψηφά, ο αυτοκράτορας των Χιτάν καταλαμβάνει το Κάιφενγκ και ανακηρύσσει τη δυναστεία Λιάο, αλλά σύντομα αποσύρεται στον βορρά."
          },
          extendedDescription: {
            en: "Shi Jingtang's successor had refused to call himself the Khitans' 'grandson' and subject. The Khitan emperor Deguang took the capital and wore Chinese imperial robes, but his troops' plundering provoked resistance and he died on the retreat. In the vacuum the general Liu Zhiyuan founded the Later Han, the shortest of the five dynasties, which lasted only until 951.",
            el: "Ο διάδοχος του Σι Τζινγκτάνγκ είχε αρνηθεί να αποκαλεί τον εαυτό του «εγγονό» και υποτελή των Χιτάν. Ο αυτοκράτορας των Χιτάν Ντεγκουάνγκ κατέλαβε την πρωτεύουσα και φόρεσε κινεζικά αυτοκρατορικά ενδύματα, αλλά οι λεηλασίες των στρατευμάτων του προκάλεσαν αντίσταση, και πέθανε κατά την υποχώρηση. Στο κενό που δημιουργήθηκε, ο στρατηγός Λιου Τζιγιουάν ίδρυσε την Ύστερη Χαν, τη συντομότερη από τις πέντε δυναστείες, που διήρκεσε μόνο ως το 951."
          },
          category: "military"
        }
      ]
    },
    {
      year: 955,
      era: {
        en: "Later Zhou",
        el: "Ύστερη Τζόου"
      },
      events: [
        {
          title: {
            en: "Shizong of the Later Zhou prepares reunification",
            el: "Ο Σιτζόνγκ της Ύστερης Τζόου προετοιμάζει την επανένωση"
          },
          description: {
            en: "The able emperor Shizong closes tens of thousands of Buddhist monasteries, melts their bronze statues into coin, and rebuilds the army to reunite China.",
            el: "Ο ικανός αυτοκράτορας Σιτζόνγκ κλείνει δεκάδες χιλιάδες βουδιστικά μοναστήρια, λιώνει τα χάλκινα αγάλματά τους για να κόψει νομίσματα και ανασυγκροτεί τον στρατό για να επανενώσει την Κίνα."
          },
          extendedDescription: {
            en: "Shizong strengthened the palace army, took the lands north of the Yangtze from the Southern Tang in 958, and campaigned against the Khitans to recover the Sixteen Prefectures. He died in 959, leaving a child on the throne. The next year his commander Zhao Kuangyin was acclaimed emperor by his troops and founded the Song, completing the reunification Shizong had begun.",
            el: "Ο Σιτζόνγκ ενίσχυσε τον στρατό των ανακτόρων, πήρε τα εδάφη βόρεια του Γιανγκτσέ από τη Νότια Τανγκ το 958 και εκστράτευσε κατά των Χιτάν για να ανακτήσει τους Δεκαέξι Νομούς. Πέθανε το 959, αφήνοντας ένα παιδί στον θρόνο. Την επόμενη χρονιά ο διοικητής του Τζάο Κουανγκγίν ανακηρύχθηκε αυτοκράτορας από τα στρατεύματά του και ίδρυσε τους Σονγκ, ολοκληρώνοντας την επανένωση που είχε ξεκινήσει ο Σιτζόνγκ."
          },
          category: "political"
        }
      ]
    }
  ]
} satisfies PeriodDefinition;
