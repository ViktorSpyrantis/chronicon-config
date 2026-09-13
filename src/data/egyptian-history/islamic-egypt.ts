/** Islamic Egypt — Ισλαμική Αίγυπτος · Egyptian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const ISLAMIC_EGYPT = {
  id: "islamic-egypt" as const,
  label: {
    en: "Islamic Egypt",
    el: "Ισλαμική Αίγυπτος"
  },
  supertitle: {
    en: "Misr",
    el: "Μισρ"
  },
  title: {
    en: "Islamic Egypt",
    el: "Ισλαμική Αίγυπτος"
  },
  subtitle: {
    en: "From the Arab conquest and the founding of Fustat through the autonomous Tulunid and Ikhshidid emirs, the Shia Fatimid caliphate that founded Cairo and al-Azhar, Saladin and the Ayyubids who restored Sunni Islam and fought the Crusaders, and the warrior Mamluk Sultanate that halted the Mongols at Ayn Jalut, to the Black Death and the Ottoman conquest of 1517. Slide across nine centuries in which Egypt became an Arabic-speaking, Muslim land and Cairo a great city of the Islamic world.",
    el: "Από την αραβική κατάκτηση και την ίδρυση της Φουστάτ, μέσα από τους αυτόνομους εμίρηδες Τουλουνίδες και Ιχσιντίδες, το σιιτικό φατιμιδικό χαλιφάτο που ίδρυσε το Κάιρο και το αλ-Άζχαρ, τον Σαλαντίν και τους Αγιουβίδες που αποκατέστησαν το σουνιτικό Ισλάμ και πολέμησαν τους Σταυροφόρους, και το πολεμικό Σουλτανάτο των Μαμελούκων που ανέκοψε τους Μογγόλους στο Άιν Τζαλούτ, ως τον Μαύρο Θάνατο και την οθωμανική κατάκτηση του 1517. Μετακινηθείτε ανάμεσα σε εννέα αιώνες κατά τους οποίους η Αίγυπτος έγινε μια αραβόφωνη, μουσουλμανική χώρα και το Κάιρο μια μεγάλη πόλη του ισλαμικού κόσμου."
  },
  menuDescription: {
    en: "The Fatimids found Cairo, Saladin rules, and the Mamluks hold Egypt until 1517.",
    el: "Οι Φατιμίδες ιδρύουν το Κάιρο, ο Σαλαντίν κυβερνά κι οι Μαμελούκοι κρατούν την Αίγυπτο ως το 1517."
  },
  footerLabel: {
    en: "Islamic Egypt · 641–1517",
    el: "Ισλαμική Αίγυπτος · 641–1517"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Islamic Egypt",
    el: "Ισλαμική Αίγυπτος"
  },
  theme: THEMES.emerald,
  timeline: [
    {
      year: 641,
      era: {
        en: "The Arab Conquest",
        el: "Η Αραβική Κατάκτηση"
      },
      events: [
        {
          title: {
            en: "The founding of Fustat",
            el: "Η ίδρυση της Φουστάτ"
          },
          description: {
            en: "Having taken Egypt for the Caliphate, the general Amr ibn al-As establishes the garrison city of Fustat beside the old fortress of Babylon, the seed of future Cairo.",
            el: "Έχοντας καταλάβει την Αίγυπτο για το Χαλιφάτο, ο στρατηγός Άμρ ιμπν αλ-Άς ιδρύει τη φρουραρχική πόλη Φουστάτ δίπλα στο παλαιό φρούριο της Βαβυλώνας, τον σπόρο του μελλοντικού Καΐρου."
          },
          extendedDescription: {
            en: "Rather than rule from Greek Alexandria, the Muslim conquerors built a new capital inland at Fustat, where Amr raised the first mosque in Africa, which still bears his name. Egypt became a province of the Rashidun and then Umayyad Caliphates, governed for the tribute of its grain and taxes. The Coptic majority kept their faith under the jizya poll-tax, but over the following centuries Arabic gradually replaced Coptic and Greek, and Islam slowly spread among the population.",
            el: "Αντί να κυβερνήσουν από την ελληνική Αλεξάνδρεια, οι μουσουλμάνοι κατακτητές έχτισαν μια νέα πρωτεύουσα στην ενδοχώρα, τη Φουστάτ, όπου ο Άμρ ύψωσε το πρώτο τζαμί στην Αφρική, που ακόμη φέρει το όνομά του. Η Αίγυπτος έγινε επαρχία του Χαλιφάτου των Ρασιντούν και κατόπιν των Ομεϋαδών, κυβερνώμενη για τον φόρο του σιταριού και των φόρων της. Η κοπτική πλειονότητα κράτησε την πίστη της υπό τον κεφαλικό φόρο τζίζια, αλλά στους επόμενους αιώνες τα αραβικά αντικατέστησαν σταδιακά τα κοπτικά και τα ελληνικά, και το Ισλάμ εξαπλώθηκε αργά στον πληθυσμό."
          },
          category: "political"
        }
      ]
    },
    {
      year: 868,
      era: {
        en: "Tulunids & Ikhshidids",
        el: "Τουλουνίδες & Ιχσιντίδες"
      },
      events: [
        {
          title: {
            en: "Ahmad ibn Tulun and Egyptian autonomy",
            el: "Ο Άχμαντ ιμπν Τουλούν και η αιγυπτιακή αυτονομία"
          },
          description: {
            en: "The Turkish governor Ahmad ibn Tulun makes Egypt effectively independent of Baghdad, founding a short-lived dynasty and a magnificent mosque.",
            el: "Ο Τούρκος διοικητής Άχμαντ ιμπν Τουλούν καθιστά την Αίγυπτο ουσιαστικά ανεξάρτητη από τη Βαγδάτη, ιδρύοντας μια βραχύβια δυναστεία και ένα μεγαλοπρεπές τζαμί."
          },
          extendedDescription: {
            en: "Sent as a deputy governor by the Abbasid caliph, Ibn Tulun built up his own army and treasury and ceased remitting tribute to Baghdad, ruling Egypt and Syria as an autonomous emir. He founded a new princely quarter, al-Qata'i, crowned by the great congregational mosque that still bears his name, one of the oldest and largest in Egypt. After the Tulunids fell, the Ikhshidid dynasty similarly governed Egypt with little reference to the weakening Abbasid centre.",
            el: "Σταλμένος ως αναπληρωτής διοικητής από τον Αββασίδη χαλίφη, ο ιμπν Τουλούν δημιούργησε δικό του στρατό και θησαυροφυλάκιο και έπαψε να αποδίδει φόρο στη Βαγδάτη, κυβερνώντας την Αίγυπτο και τη Συρία ως αυτόνομος εμίρης. Ίδρυσε μια νέα ηγεμονική συνοικία, την αλ-Κατάι, στεφανωμένη από το μεγάλο τζαμί που ακόμη φέρει το όνομά του, ένα από τα παλαιότερα και μεγαλύτερα της Αιγύπτου. Αφού έπεσαν οι Τουλουνίδες, η δυναστεία των Ιχσιντιδών κυβέρνησε ομοίως την Αίγυπτο με ελάχιστη αναφορά στο εξασθενούν αββασιδικό κέντρο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 969,
      era: {
        en: "The Fatimid Caliphate",
        el: "Το Φατιμιδικό Χαλιφάτο"
      },
      events: [
        {
          title: {
            en: "The Fatimids found Cairo",
            el: "Οι Φατιμίδες ιδρύουν το Κάιρο"
          },
          description: {
            en: "The Shia Fatimid caliphate conquers Egypt and founds a new royal city, al-Qahira — Cairo — as the capital of an empire stretching across North Africa.",
            el: "Το σιιτικό φατιμιδικό χαλιφάτο κατακτά την Αίγυπτο και ιδρύει μια νέα βασιλική πόλη, την αλ-Κάχιρα — το Κάιρο — ως πρωτεύουσα μιας αυτοκρατορίας που εκτείνεται σε όλη τη Βόρεια Αφρική."
          },
          extendedDescription: {
            en: "The Fatimids, an Ismaili Shia dynasty claiming descent from the Prophet's daughter Fatima, conquered Egypt from their base in Tunisia and made it the heart of a rival caliphate to Abbasid Baghdad. Their general Jawhar laid out the walled city of al-Qahira, 'the Victorious,' and founded the mosque of al-Azhar, which grew into one of the foremost centres of Islamic learning in the world. Under the Fatimids Cairo flourished as a great cosmopolitan capital of trade, scholarship, and splendour.",
            el: "Οι Φατιμίδες, μια ισμαηλιτική σιιτική δυναστεία που διεκδικούσε καταγωγή από την κόρη του Προφήτη Φατίμα, κατέκτησαν την Αίγυπτο από τη βάση τους στην Τυνησία και την κατέστησαν την καρδιά ενός χαλιφάτου αντίπαλου της αββασιδικής Βαγδάτης. Ο στρατηγός τους Τζαουχάρ σχεδίασε την τειχισμένη πόλη αλ-Κάχιρα, «τη Νικηφόρα», και ίδρυσε το τζαμί αλ-Άζχαρ, που εξελίχθηκε σε ένα από τα κορυφαία κέντρα ισλαμικής μάθησης στον κόσμο. Υπό τους Φατιμίδες το Κάιρο άκμασε ως μια μεγάλη κοσμοπολίτικη πρωτεύουσα εμπορίου, λογιοσύνης και μεγαλοπρέπειας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 996,
      era: {
        en: "The Fatimid Caliphate",
        el: "Το Φατιμιδικό Χαλιφάτο"
      },
      events: [
        {
          title: {
            en: "The reign of al-Hakim",
            el: "Η βασιλεία του αλ-Χάκιμ"
          },
          description: {
            en: "The eccentric caliph al-Hakim presides over Fatimid Egypt at its height in learning, yet his erratic decrees, including the destruction of churches, leave a dark legacy.",
            el: "Ο εκκεντρικός χαλίφης αλ-Χάκιμ προεδρεύει της φατιμιδικής Αιγύπτου στο απόγειό της στη μάθηση, όμως τα ασταθή διατάγματά του, συμπεριλαμβανομένης της καταστροφής εκκλησιών, αφήνουν μια σκοτεινή κληρονομιά."
          },
          extendedDescription: {
            en: "Al-Hakim bi-Amr Allah founded the House of Knowledge (Dar al-Hikma), a great library and academy that drew scholars such as the physicist Ibn al-Haytham, a pioneer of optics and the scientific method. Yet his reign was also marked by harsh and unpredictable edicts and the persecution of Christians and Jews, including the demolition of the Church of the Holy Sepulchre in Jerusalem. He vanished mysteriously in 1021 and was later revered as a divine figure by the Druze faith.",
            el: "Ο αλ-Χάκιμ μπι-Άμρ Αλλάχ ίδρυσε τον Οίκο της Γνώσης (Νταρ αλ-Χίκμα), μια μεγάλη βιβλιοθήκη και ακαδημία που προσέλκυσε λογίους όπως ο φυσικός ιμπν αλ-Χάιθαμ, πρωτοπόρος της οπτικής και της επιστημονικής μεθόδου. Όμως η βασιλεία του σημαδεύτηκε επίσης από σκληρά και απρόβλεπτα διατάγματα και τον διωγμό Χριστιανών και Εβραίων, συμπεριλαμβανομένης της κατεδάφισης του Ναού του Παναγίου Τάφου στην Ιερουσαλήμ. Εξαφανίστηκε μυστηριωδώς το 1021 και αργότερα λατρεύτηκε ως θεϊκή μορφή από τη θρησκεία των Δρούζων."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1171,
      era: {
        en: "The Ayyubid Dynasty",
        el: "Η Δυναστεία των Αγιουβιδών"
      },
      events: [
        {
          title: {
            en: "Saladin and the rise of the Ayyubids",
            el: "Ο Σαλαντίν και η άνοδος των Αγιουβιδών"
          },
          description: {
            en: "Saladin abolishes the Fatimid caliphate, restores Sunni Islam in Egypt, and makes the country the base of his war against the Crusader states.",
            el: "Ο Σαλαντίν καταργεί το φατιμιδικό χαλιφάτο, αποκαθιστά το σουνιτικό Ισλάμ στην Αίγυπτο και καθιστά τη χώρα τη βάση του πολέμου του κατά των σταυροφορικών κρατών."
          },
          extendedDescription: {
            en: "Salah al-Din (Saladin), a Kurdish commander, ended the two-century Fatimid caliphate in 1171 and founded the Ayyubid dynasty, returning Egypt to Sunni allegiance under nominal Abbasid authority. He fortified Cairo with the great Citadel that still dominates the city, and from Egypt's wealth built the army with which he reconquered Jerusalem from the Crusaders in 1187 — becoming the most celebrated Muslim leader of the Crusades, renowned even among his enemies for his chivalry.",
            el: "Ο Σαλάχ αντ-Ντιν (Σαλαντίν), Κούρδος στρατηγός, τερμάτισε το δύο αιώνων φατιμιδικό χαλιφάτο το 1171 και ίδρυσε τη δυναστεία των Αγιουβιδών, επαναφέροντας την Αίγυπτο στη σουνιτική πίστη υπό την ονομαστική αββασιδική εξουσία. Οχύρωσε το Κάιρο με τη μεγάλη Ακρόπολη που ακόμη δεσπόζει στην πόλη, και από τον πλούτο της Αιγύπτου έχτισε τον στρατό με τον οποίο ανακατέκτησε την Ιερουσαλήμ από τους Σταυροφόρους το 1187 — γινόμενος ο πιο ξακουστός μουσουλμάνος ηγέτης των Σταυροφοριών, φημισμένος ακόμη και μεταξύ των εχθρών του για τον ιπποτισμό του."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1250,
      era: {
        en: "The Mamluk Sultanate",
        el: "Το Σουλτανάτο των Μαμελούκων"
      },
      events: [
        {
          title: {
            en: "The Mamluks seize power",
            el: "Οι Μαμελούκοι αρπάζουν την εξουσία"
          },
          description: {
            en: "The slave-soldiers of the Ayyubids overthrow their masters and establish the Mamluk Sultanate, a warrior state ruled by an elite of freed military slaves.",
            el: "Οι δουλοστρατιώτες των Αγιουβιδών ανατρέπουν τους κυρίους τους και εδραιώνουν το Σουλτανάτο των Μαμελούκων, ένα πολεμικό κράτος κυβερνώμενο από μια ελίτ απελευθερωμένων στρατιωτικών δούλων."
          },
          extendedDescription: {
            en: "The Mamluks — Turkic and later Circassian slaves trained as elite cavalry — seized the throne of Egypt in 1250 amid the turmoil of the Seventh Crusade, even capturing the French king Louis IX. Their unusual system, in which power passed not by heredity but among the ranks of the military slave elite, produced a formidable state. Cairo under the Mamluks became the largest and richest city of the Islamic world outside of perhaps Baghdad, adorned with magnificent mosques, madrasas, and mausoleums.",
            el: "Οι Μαμελούκοι — τουρκικοί και αργότερα κιρκάσιοι δούλοι εκπαιδευμένοι ως ελίτ ιππικό — άρπαξαν τον θρόνο της Αιγύπτου το 1250 μέσα στην αναταραχή της Έβδομης Σταυροφορίας, αιχμαλωτίζοντας ακόμη και τον Γάλλο βασιλιά Λουδοβίκο Θ΄. Το ασυνήθιστο σύστημά τους, στο οποίο η εξουσία περνούσε όχι κληρονομικά αλλά μεταξύ των τάξεων της στρατιωτικής δουλικής ελίτ, παρήγαγε ένα τρομερό κράτος. Το Κάιρο υπό τους Μαμελούκους έγινε η μεγαλύτερη και πλουσιότερη πόλη του ισλαμικού κόσμου εκτός ίσως της Βαγδάτης, στολισμένη με μεγαλοπρεπή τζαμιά, μεντρεσέδες και μαυσωλεία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1260,
      era: {
        en: "The Mamluk Sultanate",
        el: "Το Σουλτανάτο των Μαμελούκων"
      },
      events: [
        {
          title: {
            en: "Ayn Jalut halts the Mongols",
            el: "Το Άιν Τζαλούτ ανακόπτει τους Μογγόλους"
          },
          description: {
            en: "At Ayn Jalut the Mamluk army under Qutuz and Baybars defeats the seemingly invincible Mongols, saving Egypt and the Islamic heartland from conquest.",
            el: "Στο Άιν Τζαλούτ ο στρατός των Μαμελούκων υπό τον Κουτούζ και τον Μπαϊμπάρς νικά τους φαινομενικά ανίκητους Μογγόλους, σώζοντας την Αίγυπτο και την ισλαμική καρδιά από την κατάκτηση."
          },
          extendedDescription: {
            en: "After the Mongols had sacked Baghdad in 1258 and extinguished the Abbasid caliphate, they advanced on Egypt. In 1260 at Ayn Jalut in Galilee the Mamluks won one of history's decisive battles, the first major defeat to halt the Mongol tide. The victorious general Baybars soon took the throne and became the true architect of the Mamluk state, installing a puppet Abbasid caliph in Cairo and waging relentless war against the remaining Crusader strongholds.",
            el: "Αφού οι Μογγόλοι είχαν λεηλατήσει τη Βαγδάτη το 1258 και είχαν σβήσει το αββασιδικό χαλιφάτο, προήλασαν προς την Αίγυπτο. Το 1260 στο Άιν Τζαλούτ στη Γαλιλαία οι Μαμελούκοι κέρδισαν μία από τις αποφασιστικές μάχες της ιστορίας, την πρώτη μεγάλη ήττα που ανέκοψε το μογγολικό κύμα. Ο νικητής στρατηγός Μπαϊμπάρς σύντομα κατέλαβε τον θρόνο και έγινε ο πραγματικός αρχιτέκτονας του μαμελουκικού κράτους, εγκαθιστώντας έναν ανδρείκελο Αββασίδη χαλίφη στο Κάιρο και διεξάγοντας αδυσώπητο πόλεμο κατά των εναπομεινάντων σταυροφορικών οχυρών."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1348,
      era: {
        en: "Plague & Crisis",
        el: "Πανώλη & Κρίση"
      },
      events: [
        {
          title: {
            en: "The Black Death strikes Egypt",
            el: "Ο Μαύρος Θάνατος πλήττει την Αίγυπτο"
          },
          description: {
            en: "The Black Death sweeps through Egypt, killing perhaps a third of its people and beginning a long demographic and economic decline of the Mamluk state.",
            el: "Ο Μαύρος Θάνατος σαρώνει την Αίγυπτο, σκοτώνοντας ίσως το ένα τρίτο του πληθυσμού της και ξεκινώντας μια μακρά δημογραφική και οικονομική παρακμή του μαμελουκικού κράτους."
          },
          extendedDescription: {
            en: "The great plague of 1347–1349 devastated Cairo, then one of the world's largest cities, and recurred in waves over the following century and a half. The catastrophic loss of population, peasants and craftsmen alike, undermined agriculture, irrigation, and trade. Combined with heavy taxation, factional strife among the Mamluk emirs, and the later shift of spice trade routes, the plague began the slow decline of a state that had once been the greatest power of the Near East.",
            el: "Η μεγάλη πανώλη του 1347–1349 ερήμωσε το Κάιρο, τότε μία από τις μεγαλύτερες πόλεις του κόσμου, και επανήλθε σε κύματα τον επόμενο ενάμιση αιώνα. Η καταστροφική απώλεια πληθυσμού, αγροτών και τεχνιτών, υπέσκαψε τη γεωργία, την άρδευση και το εμπόριο. Σε συνδυασμό με τη βαριά φορολογία, τις φατριαστικές διαμάχες μεταξύ των Μαμελούκων εμίρηδων και τη μεταγενέστερη μετατόπιση των δρόμων του εμπορίου μπαχαρικών, η πανώλη ξεκίνησε την αργή παρακμή ενός κράτους που υπήρξε κάποτε η μεγαλύτερη δύναμη της Εγγύς Ανατολής."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1517,
      era: {
        en: "The Ottoman Conquest",
        el: "Η Οθωμανική Κατάκτηση"
      },
      events: [
        {
          title: {
            en: "The Ottomans conquer Egypt",
            el: "Οι Οθωμανοί κατακτούν την Αίγυπτο"
          },
          description: {
            en: "Sultan Selim I defeats the last Mamluk sultan and annexes Egypt to the Ottoman Empire, ending nine centuries of rule from Cairo.",
            el: "Ο σουλτάνος Σελίμ Α΄ νικά τον τελευταίο σουλτάνο των Μαμελούκων και προσαρτά την Αίγυπτο στην Οθωμανική Αυτοκρατορία, τερματίζοντας εννέα αιώνες διακυβέρνησης από το Κάιρο."
          },
          extendedDescription: {
            en: "After crushing the Mamluks at Marj Dabiq in Syria in 1516 and at al-Raydaniyya outside Cairo in 1517, Selim I hanged the last sultan, Tuman Bay, and made Egypt a province of the Ottoman Empire. The Ottomans assumed the guardianship of the holy cities of Mecca and Medina and, by tradition, the title of caliph. Egypt would be governed from Istanbul for three centuries, though the Mamluk beys survived as a powerful local class, until Napoleon's invasion of 1798 opened the modern age.",
            el: "Αφού συνέτριψε τους Μαμελούκους στο Μαρτζ Νταμπίκ στη Συρία το 1516 και στην αλ-Ραϊντανίγια έξω από το Κάιρο το 1517, ο Σελίμ Α΄ απαγχόνισε τον τελευταίο σουλτάνο, τον Τουμάν Μπαΐ, και κατέστησε την Αίγυπτο επαρχία της Οθωμανικής Αυτοκρατορίας. Οι Οθωμανοί ανέλαβαν την κηδεμονία των ιερών πόλεων της Μέκκας και της Μεδίνας και, κατά την παράδοση, τον τίτλο του χαλίφη. Η Αίγυπτος θα κυβερνιόταν από την Κωνσταντινούπολη για τρεις αιώνες, αν και οι Μαμελούκοι μπέηδες επιβίωσαν ως ισχυρή τοπική τάξη, μέχρι που η εισβολή του Ναπολέοντα το 1798 άνοιξε τη σύγχρονη εποχή."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
