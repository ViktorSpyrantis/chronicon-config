/** Taishō & Early Shōwa Japan — Ιαπωνία Τάισο & Πρώιμης Σόουα · Japanese History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const TAISHO_EARLY_SHOWA_JAPAN = {
  id: "taisho-early-showa-japan" as const,
  label: {
    en: "Taishō & Early Shōwa Japan",
    el: "Ιαπωνία Τάισο & Πρώιμης Σόουα"
  },
  supertitle: {
    en: "大正・昭和 · Democracy and War",
    el: "Δημοκρατία και Πόλεμος"
  },
  title: {
    en: "Imperial Japan",
    el: "Η Αυτοκρατορική Ιαπωνία"
  },
  subtitle: {
    en: "From the brief liberal spring of \"Taishō democracy,\" through the Great Kantō earthquake and the slide into militarism and army rule, to the conquest of Manchuria, the war on China, and the vast Pacific war that ended over Hiroshima and Nagasaki. Slide across three fateful decades in which a modern, cultured Japan reached for empire, plunged into total war, and met catastrophe.",
    el: "Από τη σύντομη φιλελεύθερη άνοιξη της «δημοκρατίας Τάισο», μέσα από τον Μεγάλο Σεισμό του Καντό και την ολίσθηση προς τον μιλιταρισμό και τη στρατιωτική διακυβέρνηση, ως την κατάκτηση της Μαντζουρίας, τον πόλεμο κατά της Κίνας και τον τεράστιο πόλεμο του Ειρηνικού που τελείωσε πάνω από τη Χιροσίμα και το Ναγκασάκι. Μετακινηθείτε σε τρεις μοιραίες δεκαετίες όπου μια σύγχρονη, καλλιεργημένη Ιαπωνία άπλωσε το χέρι στην αυτοκρατορία, βυθίστηκε στον ολοκληρωτικό πόλεμο και συνάντησε την καταστροφή."
  },
  menuDescription: {
    en: "Taishō democracy, the turn to militarism, and Japan's road through the Pacific War to defeat.",
    el: "Η δημοκρατία Τάισο, η στροφή στον μιλιταρισμό και η πορεία της Ιαπωνίας μέσα από τον Πόλεμο του Ειρηνικού στην ήττα."
  },
  footerLabel: {
    en: "Taishō & Early Shōwa · 1912–1945 AD",
    el: "Τάισο & Πρώιμη Σόουα · 1912–1945 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Imperial Japan",
    el: "Η Αυτοκρατορική Ιαπωνία"
  },
  theme: THEMES.onyx,
  timeline: [
    {
      year: 1912,
      era: {
        en: "A New Reign",
        el: "Μια Νέα Βασιλεία"
      },
      events: [
        {
          title: {
            en: "The Taishō era and General Nogi's farewell",
            el: "Η εποχή Τάισο και ο αποχαιρετισμός του στρατηγού Νόγκι"
          },
          description: {
            en: "Emperor Yoshihito succeeds his father as the Taishō emperor; on the day of Meiji's funeral, General Nogi Maresuke and his wife take their own lives to follow their sovereign in death.",
            el: "Ο αυτοκράτορας Γιοσιχίτο διαδέχεται τον πατέρα του ως αυτοκράτορας Τάισο· την ημέρα της κηδείας του Μέιτζι, ο στρατηγός Νόγκι Μαρεσούκε και η σύζυγός του αυτοκτονούν για να ακολουθήσουν τον ηγεμόνα τους στον θάνατο."
          },
          extendedDescription: {
            en: "Nogi, the commander who had taken Port Arthur from Russia at a terrible cost in lives, revived the ancient samurai custom of junshi, following one's lord in death. His act stunned the nation and inspired novels such as Natsume Sōseki's Kokoro, which treated it as the end of the Meiji spirit. The new emperor was frail from childhood illness, and real power passed to the cabinets, the elder statesmen and, increasingly, the political parties.",
            el: "Ο Νόγκι, ο διοικητής που είχε καταλάβει το Πορτ Άρθουρ από τη Ρωσία με τρομερό κόστος σε ζωές, αναβίωσε το αρχαίο έθιμο των σαμουράι τζούνσι, να ακολουθεί κανείς τον άρχοντά του στον θάνατο. Η πράξη του συγκλόνισε το έθνος και ενέπνευσε μυθιστορήματα όπως το «Κοκόρο» του Νατσούμε Σοσέκι, που την είδε ως το τέλος του πνεύματος της εποχής Μέιτζι. Ο νέος αυτοκράτορας ήταν ασθενικός από μια παιδική ασθένεια, και η πραγματική εξουσία πέρασε στις κυβερνήσεις, στους γηραιούς πολιτικούς και, όλο και περισσότερο, στα πολιτικά κόμματα."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Count_Nogi_and_his_wife.JPG?width=1024",
            alt: {
              en: "Contemporary postcard of General Nogi Maresuke reading at home with his wife Shizuko",
              el: "Σύγχρονη καρτ ποστάλ με τον στρατηγό Νόγκι Μαρεσούκε να διαβάζει στο σπίτι του με τη σύζυγό του Σιζούκο"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1913,
      era: {
        en: "Taishō Political Crisis",
        el: "Πολιτική Κρίση Τάισο"
      },
      events: [
        {
          title: {
            en: "Crowds bring down a government",
            el: "Τα πλήθη ρίχνουν μια κυβέρνηση"
          },
          description: {
            en: "Mass protests around the Diet and a revolt by the parties force Prime Minister Katsura Tarō to resign after only two months in office.",
            el: "Μαζικές διαδηλώσεις γύρω από τη Βουλή και μια εξέγερση των κομμάτων αναγκάζουν τον πρωθυπουργό Κατσούρα Τάρο σε παραίτηση μετά από μόλις δύο μήνες στην εξουσία."
          },
          extendedDescription: {
            en: "Katsura, a general and protégé of the Meiji oligarch Yamagata, was seen as using the new emperor's name to override parliament. The 'Movement to Protect Constitutional Government' filled Tokyo's streets, and rioters attacked police boxes and pro-government newspapers. It was the first time popular pressure had toppled a Japanese cabinet, and it marked the beginning of the era later called 'Taishō democracy'.",
            el: "Ο Κατσούρα, στρατηγός και προστατευόμενος του ολιγάρχη της εποχής Μέιτζι Γιαμαγκάτα, θεωρήθηκε ότι χρησιμοποιούσε το όνομα του νέου αυτοκράτορα για να παρακάμψει το κοινοβούλιο. Το «Κίνημα για την Προστασία της Συνταγματικής Διακυβέρνησης» γέμισε τους δρόμους του Τόκιο, και ταραξίες επιτέθηκαν σε αστυνομικά φυλάκια και φιλοκυβερνητικές εφημερίδες. Ήταν η πρώτη φορά που η λαϊκή πίεση ανέτρεψε ιαπωνική κυβέρνηση, και σηματοδότησε την αρχή της εποχής που αργότερα ονομάστηκε «δημοκρατία Τάισο»."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Prince_Katsura_Tar%C5%8D.jpg?width=1024",
            alt: {
              en: "Portrait photograph of Prime Minister Katsura Tarō",
              el: "Φωτογραφικό πορτρέτο του πρωθυπουργού Κατσούρα Τάρο"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1914,
      era: {
        en: "World War I",
        el: "Α΄ Παγκόσμιος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Japan enters the First World War",
            el: "Η Ιαπωνία μπαίνει στον Α΄ Παγκόσμιο Πόλεμο"
          },
          description: {
            en: "Honouring its alliance with Britain, Japan declares war on Germany, captures the German base of Tsingtao in China and occupies Germany's Pacific islands.",
            el: "Τιμώντας τη συμμαχία της με τη Βρετανία, η Ιαπωνία κηρύσσει τον πόλεμο στη Γερμανία, καταλαμβάνει τη γερμανική βάση του Τσινγκτάο στην Κίνα και τα γερμανικά νησιά του Ειρηνικού."
          },
          extendedDescription: {
            en: "Tsingtao fell in November after a siege in which Japanese seaplanes flew some of the first naval air raids in history. The Marshall, Caroline and Mariana islands became Japanese mandates after the war. With Europe's powers absorbed by the war, Japanese industry and shipping boomed, and the country turned from a debtor into a creditor nation — while its army and government saw a chance to expand in China.",
            el: "Το Τσινγκτάο έπεσε τον Νοέμβριο μετά από μια πολιορκία κατά την οποία ιαπωνικά υδροπλάνα πραγματοποίησαν από τις πρώτες ναυτικές αεροπορικές επιδρομές της ιστορίας. Τα νησιά Μάρσαλ, Καρολίνες και Μαριάνες έγιναν ιαπωνικές εντολές μετά τον πόλεμο. Με τις ευρωπαϊκές δυνάμεις απορροφημένες από τον πόλεμο, η ιαπωνική βιομηχανία και ναυτιλία άνθισαν, και η χώρα από οφειλέτρια έγινε πιστώτρια — ενώ ο στρατός και η κυβέρνησή της είδαν μια ευκαιρία να επεκταθούν στην Κίνα."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Imperial_Japanese_Sailors_Coming_Ashore_at_the_Siege_of_Tsingtao_1914.png?width=1024",
            alt: {
              en: "Lines of boats carrying Imperial Japanese sailors ashore during the siege of Tsingtao, 1914",
              el: "Σειρές από βάρκες που μεταφέρουν Ιάπωνες ναύτες στην ακτή κατά την πολιορκία του Τσινγκτάο, 1914"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1915,
      era: {
        en: "World War I",
        el: "Α΄ Παγκόσμιος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "The Twenty-One Demands",
            el: "Οι Είκοσι Ένα Απαιτήσεις"
          },
          description: {
            en: "Japan presents China's president Yuan Shikai with a secret list of demands for rights in Shandong, Manchuria and beyond, and in May forces him to accept most of them by ultimatum.",
            el: "Η Ιαπωνία παρουσιάζει στον πρόεδρο της Κίνας Γιουάν Σικάι έναν μυστικό κατάλογο απαιτήσεων για δικαιώματα στη Σαντόνγκ, στη Μαντζουρία και αλλού, και τον Μάιο τον αναγκάζει να δεχτεί τις περισσότερες με τελεσίγραφο."
          },
          extendedDescription: {
            en: "The final group of demands, which would have placed Japanese advisers in China's government, was dropped after it leaked and drew British and American protest. Even so, the demands were a turning point: 9 May, the day China gave in, was remembered as 'National Humiliation Day', and anger at Japan fed the May Fourth Movement of 1919 when the Paris peace conference confirmed Japan's hold on Shandong.",
            el: "Η τελευταία ομάδα απαιτήσεων, που θα τοποθετούσε Ιάπωνες συμβούλους στην κυβέρνηση της Κίνας, αποσύρθηκε αφού διέρρευσε και προκάλεσε βρετανικές και αμερικανικές διαμαρτυρίες. Ακόμη κι έτσι, οι απαιτήσεις ήταν σημείο καμπής: η 9η Μαΐου, η μέρα που η Κίνα υποχώρησε, έμεινε στη μνήμη ως «Ημέρα Εθνικής Ταπείνωσης», και η οργή κατά της Ιαπωνίας τροφοδότησε το Κίνημα της 4ης Μαΐου του 1919, όταν η διάσκεψη ειρήνης του Παρισιού επικύρωσε τον έλεγχο της Ιαπωνίας στη Σαντόνγκ."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Group_photo_of_representatives_from_China_and_Japan_after_signing_Twenty-One_Demands.jpg?width=1024",
            alt: {
              en: "Chinese and Japanese representatives seated at the conference table after signing the treaties based on the Twenty-One Demands, 1915",
              el: "Κινέζοι και Ιάπωνες αντιπρόσωποι καθισμένοι στο τραπέζι των διαπραγματεύσεων μετά την υπογραφή των συνθηκών που βασίστηκαν στις Είκοσι Ένα Απαιτήσεις, 1915"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1916,
      era: {
        en: "Taishō Democracy",
        el: "Η Δημοκρατία Τάισο"
      },
      events: [
        {
          title: {
            en: "Yoshino Sakuzō and government for the people",
            el: "Ο Γιοσίνο Σακουζό και η διακυβέρνηση για τον λαό"
          },
          description: {
            en: "In an influential essay, the political scientist Yoshino Sakuzō argues that government must serve the welfare and will of the people — the intellectual charter of Taishō democracy.",
            el: "Σε ένα δοκίμιο με μεγάλη επιρροή, ο πολιτικός επιστήμονας Γιοσίνο Σακουζό υποστηρίζει ότι η διακυβέρνηση πρέπει να υπηρετεί την ευημερία και τη βούληση του λαού — ο πνευματικός χάρτης της δημοκρατίας Τάισο."
          },
          extendedDescription: {
            en: "Yoshino called his idea minponshugi, 'people-as-the-base-ism', carefully avoiding a word for popular sovereignty that would have challenged the emperor's position under the Meiji constitution. He called for universal male suffrage, cabinets responsible to parliament, and limits on the power of the military and the elder statesmen. His arguments inspired students, journalists and the labour movement, and many of his goals were won in the 1920s.",
            el: "Ο Γιοσίνο ονόμασε την ιδέα του μινπονσούγκι, «ο λαός ως θεμέλιο», αποφεύγοντας προσεκτικά μια λέξη για τη λαϊκή κυριαρχία που θα αμφισβητούσε τη θέση του αυτοκράτορα σύμφωνα με το σύνταγμα της εποχής Μέιτζι. Ζήτησε καθολική ανδρική ψηφοφορία, κυβερνήσεις υπόλογες στο κοινοβούλιο και περιορισμούς στην εξουσία του στρατού και των γηραιών πολιτικών. Τα επιχειρήματά του ενέπνευσαν φοιτητές, δημοσιογράφους και το εργατικό κίνημα, και πολλοί από τους στόχους του επιτεύχθηκαν τη δεκαετία του 1920."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Yoshino_Sakuzo_01.jpg?width=1024",
            alt: {
              en: "Portrait photograph of the political scientist Yoshino Sakuzō",
              el: "Φωτογραφικό πορτρέτο του πολιτικού επιστήμονα Γιοσίνο Σακουζό"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1918,
      era: {
        en: "Taishō Democracy",
        el: "Η Δημοκρατία Τάισο"
      },
      events: [
        {
          title: {
            en: "Party government and rice riots",
            el: "Κυβέρνηση κομμάτων και εξεγέρσεις του ρυζιού"
          },
          description: {
            en: "Amid nationwide rice riots, Japan gains its first commoner prime minister, in the liberal years of Taishō democracy.",
            el: "Μέσα σε πανεθνικές εξεγέρσεις του ρυζιού, η Ιαπωνία αποκτά τον πρώτο της πρωθυπουργό μη ευγενικής καταγωγής, στα φιλελεύθερα χρόνια της δημοκρατίας Τάισο."
          },
          extendedDescription: {
            en: "The 1910s and 1920s brought a hopeful liberalism: party cabinets, a lively press, mass culture and, in 1925, the vote for all adult men. Yet the same year a Peace Preservation Law armed the state against dissent, and the gains rested on shaky ground as economic crisis and army ambition gathered strength.",
            el: "Η δεκαετία του 1910 και του 1920 έφερε έναν ελπιδοφόρο φιλελευθερισμό: κυβερνήσεις κομμάτων, ζωντανό Τύπο, μαζική κουλτούρα και, το 1925, το δικαίωμα ψήφου σε όλους τους ενήλικες άνδρες. Ωστόσο την ίδια χρονιά ένας Νόμος Διατήρησης της Ειρήνης όπλισε το κράτος κατά της αντιπολίτευσης, και τα κεκτημένα στηρίζονταν σε σαθρό έδαφος καθώς η οικονομική κρίση και η φιλοδοξία του στρατού δυνάμωναν."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Takashi_Hara_formal.jpg?width=1024",
            alt: {
              en: "Prime Minister Hara Takashi",
              el: "Ο πρωθυπουργός Χάρα Τακάσι"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1923,
      era: {
        en: "Catastrophe",
        el: "Καταστροφή"
      },
      events: [
        {
          title: {
            en: "The Great Kantō earthquake",
            el: "Ο Μεγάλος Σεισμός του Καντό"
          },
          description: {
            en: "A colossal earthquake and firestorm devastate Tokyo and Yokohama, killing well over a hundred thousand people.",
            el: "Ένας κολοσσιαίος σεισμός και πυρκαγιά ισοπεδώνουν το Τόκιο και τη Γιοκοχάμα, σκοτώνοντας πολύ πάνω από εκατό χιλιάδες ανθρώπους."
          },
          extendedDescription: {
            en: "Striking at noon, the quake toppled the capital and ignited firestorms that consumed whole districts. In the chaos, rumours sparked massacres of Korean residents. The disaster erased much of old Tokyo — and the vast rebuilding that followed helped shape the sprawling modern metropolis that rose in its place.",
            el: "Χτυπώντας το μεσημέρι, ο σεισμός γκρέμισε την πρωτεύουσα και ξεσήκωσε πύρινες θύελλες που κατέφαγαν ολόκληρες συνοικίες. Μέσα στο χάος, φήμες πυροδότησαν σφαγές Κορεατών κατοίκων. Η καταστροφή έσβησε μεγάλο μέρος του παλιού Τόκιο — και η τεράστια ανοικοδόμηση που ακολούθησε βοήθησε να διαμορφωθεί η απέραντη σύγχρονη μητρόπολη που υψώθηκε στη θέση του."
          },
          category: "other",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Great_Kanto_Earthquake_%283767766524%29_%28cropped%29.jpg?width=1024",
            alt: {
              en: "Devastation of the 1923 Great Kantō earthquake",
              el: "Η καταστροφή από τον Μεγάλο Σεισμό του Καντό το 1923"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1931,
      era: {
        en: "The Turn to Militarism",
        el: "Η Στροφή στον Μιλιταρισμό"
      },
      events: [
        {
          title: {
            en: "The Manchurian Incident",
            el: "Το Συμβάν της Μαντζουρίας"
          },
          description: {
            en: "The army seizes Manchuria on a staged pretext, defying the government and the League of Nations.",
            el: "Ο στρατός καταλαμβάνει τη Μαντζουρία με σκηνοθετημένο πρόσχημα, αψηφώντας την κυβέρνηση και την Κοινωνία των Εθνών."
          },
          extendedDescription: {
            en: "Officers of the Kwantung Army blew up a railway and blamed the Chinese, then overran Manchuria and set up the puppet state of Manchukuo. When the League condemned the act, Japan simply walked out. Civilian government lost control of the military, and a wave of assassinations cowed the politicians who resisted.",
            el: "Αξιωματικοί του Στρατού του Κβαντούνγκ ανατίναξαν μια σιδηροδρομική γραμμή και κατηγόρησαν τους Κινέζους, έπειτα κατέκλυσαν τη Μαντζουρία και έστησαν το κράτος-μαριονέτα του Μαντζουκουό. Όταν η Κοινωνία των Εθνών καταδίκασε την πράξη, η Ιαπωνία απλώς αποχώρησε. Η πολιτική κυβέρνηση έχασε τον έλεγχο του στρατού, και ένα κύμα δολοφονιών εκφόβισε τους πολιτικούς που αντιστέκονταν."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mukden_1931_japan_shenyang.jpg?width=1024",
            alt: {
              en: "Japanese troops during the Manchurian Incident, 1931",
              el: "Ιαπωνικά στρατεύματα κατά το Συμβάν της Μαντζουρίας, 1931"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1937,
      era: {
        en: "The War in China",
        el: "Ο Πόλεμος στην Κίνα"
      },
      events: [
        {
          title: {
            en: "The Second Sino-Japanese War",
            el: "Ο Δεύτερος Σινοϊαπωνικός Πόλεμος"
          },
          description: {
            en: "Full-scale war engulfs China, marked by the atrocity of the Nanjing Massacre.",
            el: "Ολοκληρωτικός πόλεμος καταλαμβάνει την Κίνα, σημαδεμένος από τη θηριωδία της Σφαγής της Ναντζίνγκ."
          },
          extendedDescription: {
            en: "A clash at the Marco Polo Bridge exploded into all-out war. Japanese armies took the coastal cities and the capital Nanjing, where they massacred and raped on a horrifying scale. But China did not surrender; the war became a vast, bloody quagmire that drew Japan ever deeper and set it on a collision course with the West.",
            el: "Μια σύγκρουση στη Γέφυρα Μάρκο Πόλο εξερράγη σε ολοκληρωτικό πόλεμο. Ιαπωνικοί στρατοί πήραν τις παράκτιες πόλεις και την πρωτεύουσα Ναντζίνγκ, όπου προέβησαν σε σφαγές και βιασμούς σε φρικιαστική κλίμακα. Όμως η Κίνα δεν παραδόθηκε· ο πόλεμος έγινε ένα απέραντο, ματωμένο τέλμα που τραβούσε την Ιαπωνία ολοένα βαθύτερα και την έθετε σε τροχιά σύγκρουσης με τη Δύση."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Japanese_Special_Naval_Landing_Forces_in_Battle_of_Shanghai_1937.jpg?width=1024",
            alt: {
              en: "Japanese forces in the Battle of Shanghai, 1937",
              el: "Ιαπωνικές δυνάμεις στη Μάχη της Σαγκάης, 1937"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1941,
      era: {
        en: "The Pacific War",
        el: "Ο Πόλεμος του Ειρηνικού"
      },
      events: [
        {
          title: {
            en: "Pearl Harbor",
            el: "Το Περλ Χάρμπορ"
          },
          description: {
            en: "Japan attacks the United States fleet at Pearl Harbor and sweeps across Southeast Asia and the Pacific.",
            el: "Η Ιαπωνία επιτίθεται στον στόλο των Ηνωμένων Πολιτειών στο Περλ Χάρμπορ και σαρώνει τη Νοτιοανατολική Ασία και τον Ειρηνικό."
          },
          extendedDescription: {
            en: "Facing an American oil embargo over its war in China, Japan gambled on a knockout blow. Its carriers struck Pearl Harbor while its armies seized the Philippines, Malaya, Singapore and the Indies in a few triumphant months. But the sleeping giant was now awake, and the industrial might of America would prove overwhelming.",
            el: "Αντιμέτωπη με αμερικανικό εμπάργκο πετρελαίου για τον πόλεμό της στην Κίνα, η Ιαπωνία ρίσκαρε ένα αποφασιστικό πλήγμα. Τα αεροπλανοφόρα της χτύπησαν το Περλ Χάρμπορ ενώ οι στρατοί της κατέλαβαν τις Φιλιππίνες, τη Μαλαισία, τη Σιγκαπούρη και τις Ινδίες σε λίγους θριαμβευτικούς μήνες. Όμως ο κοιμισμένος γίγαντας είχε πλέον ξυπνήσει, και η βιομηχανική ισχύς της Αμερικής θα αποδεικνυόταν συντριπτική."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Attack_on_Pearl_Harbor_Japanese_planes_view.jpg?width=1024",
            alt: {
              en: "The Japanese attack on Pearl Harbor, 1941",
              el: "Η ιαπωνική επίθεση στο Περλ Χάρμπορ, 1941"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1942,
      era: {
        en: "The Tide Turns",
        el: "Η Παλίρροια Αλλάζει"
      },
      events: [
        {
          title: {
            en: "The Battle of Midway",
            el: "Η Μάχη του Μίντγουεϊ"
          },
          description: {
            en: "American carriers sink four Japanese flattops at Midway, turning the tide of the Pacific War.",
            el: "Αμερικανικά αεροπλανοφόρα βυθίζουν τέσσερα ιαπωνικά αεροπλανοφόρα στο Μίντγουεϊ, αντιστρέφοντας τη ροή του Πολέμου του Ειρηνικού."
          },
          extendedDescription: {
            en: "Six months after Pearl Harbor, the two carrier fleets met near Midway atoll. In a few minutes American dive-bombers destroyed the heart of Japan's carrier force, losses it could never replace. From that day Japan was on the defensive, and the long, brutal island-hopping campaign back toward the home islands began.",
            el: "Έξι μήνες μετά το Περλ Χάρμπορ, οι δύο στόλοι αεροπλανοφόρων συναντήθηκαν κοντά στην ατόλη Μίντγουεϊ. Σε λίγα λεπτά αμερικανικά βομβαρδιστικά καθέτου εφορμήσεως κατέστρεψαν την καρδιά της δύναμης αεροπλανοφόρων της Ιαπωνίας, απώλειες που δεν μπορούσε ποτέ να αναπληρώσει. Από εκείνη τη μέρα η Ιαπωνία ήταν σε άμυνα, και άρχισε η μακρά, βάναυση εκστρατεία αναρρίχησης από νησί σε νησί προς τα μητροπολιτικά νησιά."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/USS_Yorktown_%28CV-5%29_is_hit_by_a_torpedo_on_4_June_1942.jpg?width=1024",
            alt: {
              en: "The USS Yorktown hit at the Battle of Midway, 1942",
              el: "Το USS Yorktown πλήττεται στη Μάχη του Μίντγουεϊ, 1942"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1945,
      era: {
        en: "Defeat",
        el: "Ήττα"
      },
      events: [
        {
          title: {
            en: "Hiroshima, Nagasaki and surrender",
            el: "Χιροσίμα, Ναγκασάκι και παράδοση"
          },
          description: {
            en: "After atomic bombs fall on Hiroshima and Nagasaki, Emperor Hirohito announces Japan's surrender.",
            el: "Αφού ατομικές βόμβες πέφτουν στη Χιροσίμα και το Ναγκασάκι, ο Αυτοκράτορας Χιροχίτο ανακοινώνει την παράδοση της Ιαπωνίας."
          },
          extendedDescription: {
            en: "Firebombing had already gutted Japan's cities when atomic bombs destroyed Hiroshima and Nagasaki and the Soviet Union declared war. On 15 August the emperor's voice, never before heard by his people, called on them to \"endure the unendurable\" and accept defeat. An empire lay in ashes, and a shattered nation faced foreign occupation for the first time in its history.",
            el: "Οι εμπρηστικοί βομβαρδισμοί είχαν ήδη ρημάξει τις πόλεις της Ιαπωνίας όταν ατομικές βόμβες κατέστρεψαν τη Χιροσίμα και το Ναγκασάκι και η Σοβιετική Ένωση κήρυξε τον πόλεμο. Στις 15 Αυγούστου η φωνή του αυτοκράτορα, που ο λαός του δεν είχε ξανακούσει, τους κάλεσε να «αντέξουν το αβάσταχτο» και να δεχτούν την ήττα. Μια αυτοκρατορία κειτόταν στις στάχτες, και ένα συντετριμμένο έθνος αντιμετώπιζε ξένη κατοχή για πρώτη φορά στην ιστορία του."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Atomic_bombing_of_Japan.jpg?width=1024",
            alt: {
              en: "The atomic bombing that ended the Pacific War",
              el: "Ο ατομικός βομβαρδισμός που τερμάτισε τον Πόλεμο του Ειρηνικού"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
