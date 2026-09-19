/** Modern Iraq — Σύγχρονο Ιράκ · Iraqi History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const MODERN_IRAQ = {
  id: "modern-iraq" as const,
  label: {
    en: "Modern Iraq",
    el: "Σύγχρονο Ιράκ"
  },
  supertitle: {
    en: "Modern Iraq",
    el: "Σύγχρονο Ιράκ"
  },
  title: {
    en: "Modern Iraq",
    el: "Σύγχρονο Ιράκ"
  },
  subtitle: {
    en: "Out of the Ottoman provinces of Baghdad, Basra, and Mosul, Britain assembled a new state, and Iraqis have been contesting its shape ever since — through monarchy and revolution, the Ba'ath and Saddam Hussein, a generation of wars, and the long struggle to rebuild. Across a century, the land of the world's first cities has sought to become a modern nation. Slide across the history of Iraq from its founding to today.",
    el: "Από τις οθωμανικές επαρχίες της Βαγδάτης, της Βασόρα και της Μοσούλης, η Βρετανία συναρμολόγησε ένα νέο κράτος, και οι Ιρακινοί αμφισβητούν έκτοτε τη μορφή του — μέσα από μοναρχία και επανάσταση, το Μπάαθ και τον Σαντάμ Χουσεΐν, μια γενιά πολέμων και τον μακρύ αγώνα της ανοικοδόμησης. Μέσα σε έναν αιώνα, η γη των πρώτων πόλεων του κόσμου προσπάθησε να γίνει σύγχρονο έθνος. Μετακινηθείτε στην ιστορία του Ιράκ από την ίδρυσή του ως σήμερα."
  },
  menuDescription: {
    en: "From the Hashemite kingdom through Saddam and the wars to Iraq today.",
    el: "Από το χασεμιτικό βασίλειο, μέσα από τον Σαντάμ και τους πολέμους, ως το Ιράκ σήμερα."
  },
  footerLabel: {
    en: "Modern Iraq · 1920-present",
    el: "Σύγχρονο Ιράκ · 1920-σήμερα"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Modern Iraq",
    el: "Σύγχρονο Ιράκ"
  },
  theme: THEMES.ruby,
  timeline: [
    {
      year: 1920,
      era: {
        en: "British Mandate",
        el: "Βρετανική Εντολή"
      },
      events: [
        {
          title: {
            en: "The Great Iraqi Revolt",
            el: "Η Μεγάλη Ιρακινή Εξέγερση"
          },
          description: {
            en: "A widespread revolt against British occupation unites Sunni and Shia and forges a sense of Iraqi nationhood.",
            el: "Μια ευρεία εξέγερση κατά της βρετανικής κατοχής ενώνει Σουνίτες και Σιίτες και σφυρηλατεί ένα αίσθημα ιρακινής εθνικής ταυτότητας."
          },
          extendedDescription: {
            en: "When Britain received a League of Nations mandate over Iraq, tribes and townsfolk across the middle Euphrates rose in a costly rebellion. Though crushed, the 1920 revolt convinced Britain to rule through an Arab monarchy rather than direct administration — and it became a founding myth of Iraqi nationalism, remembered as the moment the country's communities acted as one.",
            el: "Όταν η Βρετανία έλαβε εντολή της Κοινωνίας των Εθνών για το Ιράκ, φυλές και αστοί σε όλο τον μέσο Ευφράτη ξεσηκώθηκαν σε μια δαπανηρή εξέγερση. Αν και συνετρίβη, η εξέγερση του 1920 έπεισε τη Βρετανία να κυβερνήσει μέσω μιας αραβικής μοναρχίας αντί για άμεση διοίκηση — και έγινε ιδρυτικός μύθος του ιρακινού εθνικισμού, ως η στιγμή που οι κοινότητες της χώρας έδρασαν ως μία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1921,
      era: {
        en: "Kingdom of Iraq",
        el: "Βασίλειο του Ιράκ"
      },
      events: [
        {
          title: {
            en: "King Faisal and the Kingdom of Iraq",
            el: "Ο βασιλιάς Φεϊσάλ και το Βασίλειο του Ιράκ"
          },
          description: {
            en: "Britain installs the Hashemite prince Faisal I as king of a new Iraqi state under British mandate.",
            el: "Η Βρετανία εγκαθιστά τον Χασεμίτη πρίγκιπα Φεϊσάλ Α΄ ως βασιλιά ενός νέου ιρακινού κράτους υπό βρετανική εντολή."
          },
          extendedDescription: {
            en: "Faisal, a leader of the Arab Revolt lately driven from Syria, was made king of Iraq after a carefully managed referendum. He faced the hard task of welding together Kurds and Arabs, Sunni and Shia, city and tribe into a single nation, and of steering a course toward real independence from his British patrons.",
            el: "Ο Φεϊσάλ, ηγέτης της Αραβικής Εξέγερσης που είχε πρόσφατα εκδιωχθεί από τη Συρία, έγινε βασιλιάς του Ιράκ έπειτα από ένα προσεκτικά κατευθυνόμενο δημοψήφισμα. Αντιμετώπισε το δύσκολο έργο να συνενώσει Κούρδους και Άραβες, Σουνίτες και Σιίτες, πόλη και φυλή σε ένα ενιαίο έθνος, και να χαράξει πορεία προς την πραγματική ανεξαρτησία από τους Βρετανούς προστάτες του."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Faisal%20I%20of%20Iraq%20circa%201920.jpg?width=1024",
            alt: {
              en: "King Faisal I, first king of modern Iraq, around 1920",
              el: "Ο βασιλιάς Φεϊσάλ Α΄, πρώτος βασιλιάς του σύγχρονου Ιράκ, γύρω στο 1920"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1932,
      era: {
        en: "Kingdom of Iraq",
        el: "Βασίλειο του Ιράκ"
      },
      events: [
        {
          title: {
            en: "Independence",
            el: "Η ανεξαρτησία"
          },
          description: {
            en: "Iraq becomes formally independent and joins the League of Nations, though British influence remains strong.",
            el: "Το Ιράκ γίνεται τυπικά ανεξάρτητο και εντάσσεται στην Κοινωνία των Εθνών, αν και η βρετανική επιρροή παραμένει ισχυρή."
          },
          extendedDescription: {
            en: "In 1932 the mandate formally ended and Iraq entered the League of Nations as a sovereign kingdom — the first of the mandated Arab states to do so. Yet treaties left Britain with air bases and a decisive say in oil and defence, and the young kingdom's politics grew turbulent, marked by coups and the rising power of the army.",
            el: "Το 1932 η εντολή έληξε τυπικά και το Ιράκ εισήλθε στην Κοινωνία των Εθνών ως κυρίαρχο βασίλειο — το πρώτο από τα υπό εντολή αραβικά κράτη που το έκανε. Ωστόσο οι συνθήκες άφησαν στη Βρετανία αεροπορικές βάσεις και καθοριστικό λόγο στο πετρέλαιο και την άμυνα, και η πολιτική του νεαρού βασιλείου έγινε ταραγμένη, σημαδεμένη από πραξικοπήματα και την αυξανόμενη ισχύ του στρατού."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1958,
      era: {
        en: "Republic of Iraq",
        el: "Δημοκρατία του Ιράκ"
      },
      events: [
        {
          title: {
            en: "The 14 July Revolution",
            el: "Η Επανάσταση της 14ης Ιουλίου"
          },
          description: {
            en: "Army officers overthrow the monarchy, kill the royal family, and proclaim the Republic of Iraq.",
            el: "Αξιωματικοί του στρατού ανατρέπουν τη μοναρχία, σκοτώνουν τη βασιλική οικογένεια και ανακηρύσσουν τη Δημοκρατία του Ιράκ."
          },
          extendedDescription: {
            en: "Led by Abd al-Karim Qasim, officers seized Baghdad in a swift coup, ending the Hashemite monarchy and Iraq's western alignment. The revolution ushered in a republic, land reform, and a new assertiveness over the country's oil — but also opened decades of instability, as rival factions and ideologies fought for control of the state.",
            el: "Με επικεφαλής τον Άμπντ αλ-Καρίμ Κασέμ, αξιωματικοί κατέλαβαν τη Βαγδάτη σε ένα ταχύ πραξικόπημα, τερματίζοντας τη χασεμιτική μοναρχία και τη δυτική ευθυγράμμιση του Ιράκ. Η επανάσταση εγκαινίασε μια δημοκρατία, αγροτική μεταρρύθμιση και μια νέα διεκδίκηση του πετρελαίου της χώρας — αλλά άνοιξε επίσης δεκαετίες αστάθειας, καθώς αντίπαλες φατρίες και ιδεολογίες πάλευαν για τον έλεγχο του κράτους."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1968,
      era: {
        en: "Republic of Iraq",
        el: "Δημοκρατία του Ιράκ"
      },
      events: [
        {
          title: {
            en: "The Ba'ath Party seizes power",
            el: "Το Κόμμα Μπάαθ καταλαμβάνει την εξουσία"
          },
          description: {
            en: "The Arab nationalist Ba'ath Party takes control of Iraq, beginning thirty-five years of one-party rule.",
            el: "Το αραβικό εθνικιστικό Κόμμα Μπάαθ αναλαμβάνει τον έλεγχο του Ιράκ, ξεκινώντας τριάντα πέντε χρόνια μονοκομματικής διακυβέρνησης."
          },
          extendedDescription: {
            en: "After a decade of coups, the Ba'ath Party took power for good in 1968. Fuelled by soaring oil revenues after the industry was nationalized, the new regime expanded schools, health care, and infrastructure while building a pervasive security state. Real power gathered in the hands of a rising deputy, Saddam Hussein.",
            el: "Έπειτα από μια δεκαετία πραξικοπημάτων, το Κόμμα Μπάαθ πήρε την εξουσία οριστικά το 1968. Τροφοδοτούμενο από τα εκτοξευόμενα έσοδα του πετρελαίου μετά την εθνικοποίηση της βιομηχανίας, το νέο καθεστώς επέκτεινε σχολεία, υγειονομική περίθαλψη και υποδομές, χτίζοντας παράλληλα ένα διάχυτο κράτος ασφαλείας. Η πραγματική εξουσία συγκεντρωνόταν στα χέρια ενός ανερχόμενου αντιπροέδρου, του Σαντάμ Χουσεΐν."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1979,
      era: {
        en: "Republic of Iraq",
        el: "Δημοκρατία του Ιράκ"
      },
      events: [
        {
          title: {
            en: "Saddam Hussein takes power",
            el: "Ο Σαντάμ Χουσεΐν αναλαμβάνει την εξουσία"
          },
          description: {
            en: "Saddam Hussein becomes president and consolidates absolute control through a sweeping purge.",
            el: "Ο Σαντάμ Χουσεΐν γίνεται πρόεδρος και εδραιώνει απόλυτο έλεγχο μέσα από μια σαρωτική εκκαθάριση."
          },
          extendedDescription: {
            en: "On becoming president, Saddam eliminated rivals within the party and centred the state on himself, ruling through fear, patronage, and a cult of personality. His decades in power would bring Iraq immense oil wealth and modernization — and a succession of catastrophic wars that devastated the country and its neighbours.",
            el: "Γινόμενος πρόεδρος, ο Σαντάμ εξόντωσε τους αντιπάλους του εντός του κόμματος και επικέντρωσε το κράτος στον εαυτό του, κυβερνώντας μέσα από τον φόβο, την ευνοιοκρατία και μια λατρεία της προσωπικότητας. Οι δεκαετίες του στην εξουσία θα έφερναν στο Ιράκ τεράστιο πετρελαϊκό πλούτο και εκσυγχρονισμό — και μια σειρά καταστροφικών πολέμων που ερήμωσαν τη χώρα και τους γείτονές της."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1980,
      era: {
        en: "The Wars",
        el: "Οι Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "The Iran–Iraq War",
            el: "Ο Πόλεμος Ιράν–Ιράκ"
          },
          description: {
            en: "Iraq invades revolutionary Iran, opening an eight-year war that costs perhaps a million lives.",
            el: "Το Ιράκ εισβάλλει στο επαναστατικό Ιράν, ανοίγοντας έναν οκταετή πόλεμο που κοστίζει ίσως ένα εκατομμύριο ζωές."
          },
          extendedDescription: {
            en: "Hoping to exploit the chaos of Iran's revolution, Saddam launched an invasion that bogged down into one of the longest and bloodiest conventional wars of the twentieth century, marked by trench fighting, missile strikes on cities, and the use of chemical weapons. It ended in 1988 in stalemate, leaving Iraq victorious in name but crushed by debt.",
            el: "Ελπίζοντας να εκμεταλλευτεί το χάος της ιρανικής επανάστασης, ο Σαντάμ εξαπέλυσε μια εισβολή που τέλμάτωσε σε έναν από τους μακρύτερους και αιματηρότερους συμβατικούς πολέμους του 20ού αιώνα, σημαδεμένο από πόλεμο χαρακωμάτων, πυραυλικά χτυπήματα σε πόλεις και χρήση χημικών όπλων. Έληξε το 1988 σε αδιέξοδο, αφήνοντας το Ιράκ νικητή κατ' όνομα αλλά συντετριμμένο από χρέη."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1990,
      era: {
        en: "The Wars",
        el: "Οι Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "The invasion of Kuwait and the Gulf War",
            el: "Η εισβολή στο Κουβέιτ και ο Πόλεμος του Κόλπου"
          },
          description: {
            en: "Iraq annexes Kuwait, and a US-led coalition drives it out, leaving Iraq under crippling sanctions.",
            el: "Το Ιράκ προσαρτά το Κουβέιτ, και ένας συνασπισμός υπό τις ΗΠΑ το εκδιώκει, αφήνοντας το Ιράκ υπό εξοντωτικές κυρώσεις."
          },
          extendedDescription: {
            en: "Saddam's seizure of oil-rich Kuwait in 1990 united a broad international coalition, which expelled the Iraqi army in early 1991. Uprisings by Shia in the south and Kurds in the north were crushed. The years that followed brought a decade of United Nations sanctions and no-fly zones that impoverished the population while leaving the regime in place.",
            el: "Η κατάληψη του πλούσιου σε πετρέλαιο Κουβέιτ από τον Σαντάμ το 1990 ένωσε έναν ευρύ διεθνή συνασπισμό, που εξεδίωξε τον ιρακινό στρατό στις αρχές του 1991. Εξεγέρσεις των Σιιτών στον νότο και των Κούρδων στον βορρά συνετρίβησαν. Τα χρόνια που ακολούθησαν έφεραν μια δεκαετία κυρώσεων του ΟΗΕ και ζωνών απαγόρευσης πτήσεων που φτώχυναν τον πληθυσμό αφήνοντας το καθεστώς στη θέση του."
          },
          category: "military"
        }
      ]
    },
    {
      year: 2003,
      era: {
        en: "War & Occupation",
        el: "Πόλεμος & Κατοχή"
      },
      events: [
        {
          title: {
            en: "The fall of Saddam Hussein",
            el: "Η πτώση του Σαντάμ Χουσεΐν"
          },
          description: {
            en: "A US-led invasion topples Saddam Hussein, beginning an occupation and years of insurgency and civil strife.",
            el: "Μια εισβολή υπό τις ΗΠΑ ανατρέπει τον Σαντάμ Χουσεΐν, ξεκινώντας μια κατοχή και χρόνια ανταρσίας και εμφύλιας διαμάχης."
          },
          extendedDescription: {
            en: "The 2003 invasion swiftly ended Ba'athist rule, but the disbanding of the army and state plunged Iraq into insurgency and, by 2006, sectarian civil war between Sunni and Shia. Saddam was captured and executed, and a new constitution created a federal parliamentary republic — born amid violence that would take years to subside.",
            el: "Η εισβολή του 2003 τερμάτισε γρήγορα τη διακυβέρνηση των Μπααθικών, όμως η διάλυση του στρατού και του κράτους βύθισε το Ιράκ στην ανταρσία και, ως το 2006, σε σεκταριστικό εμφύλιο πόλεμο ανάμεσα σε Σουνίτες και Σιίτες. Ο Σαντάμ συνελήφθη και εκτελέστηκε, και ένα νέο σύνταγμα δημιούργησε μια ομοσπονδιακή κοινοβουλευτική δημοκρατία — γεννημένη μέσα σε βία που θα χρειαζόταν χρόνια για να καταλαγιάσει."
          },
          category: "political"
        }
      ]
    },
    {
      year: 2014,
      era: {
        en: "War against ISIS",
        el: "Πόλεμος κατά του ISIS"
      },
      events: [
        {
          title: {
            en: "The war against ISIS",
            el: "Ο πόλεμος κατά του ISIS"
          },
          description: {
            en: "The Islamic State seizes Mosul and a third of Iraq before being driven out in years of hard fighting.",
            el: "Το Ισλαμικό Κράτος καταλαμβάνει τη Μοσούλη και το ένα τρίτο του Ιράκ προτού εκδιωχθεί έπειτα από χρόνια σκληρών μαχών."
          },
          extendedDescription: {
            en: "In 2014 the militant group ISIS captured Mosul and declared a 'caliphate' across swathes of Iraq and Syria, persecuting minorities such as the Yazidis. Iraqi forces, Kurdish fighters, and an international coalition fought a grinding campaign to retake the country city by city, culminating in the liberation of Mosul in 2017 after brutal urban combat.",
            el: "Το 2014 η μαχητική οργάνωση ISIS κατέλαβε τη Μοσούλη και ανακήρυξε ένα «χαλιφάτο» σε εκτάσεις του Ιράκ και της Συρίας, διώκοντας μειονότητες όπως οι Γιαζίντι. Ιρακινές δυνάμεις, Κούρδοι μαχητές και ένας διεθνής συνασπισμός έδωσαν μια εξαντλητική εκστρατεία για να ανακτήσουν τη χώρα πόλη προς πόλη, με αποκορύφωμα την απελευθέρωση της Μοσούλης το 2017 έπειτα από βάναυσες μάχες πόλης."
          },
          category: "military"
        }
      ]
    },
    {
      year: 2021,
      label: "2021-present",
      era: {
        en: "Iraq Today",
        el: "Το Ιράκ Σήμερα"
      },
      events: [
        {
          title: {
            en: "Iraq today",
            el: "Το Ιράκ σήμερα"
          },
          description: {
            en: "A federal republic rich in oil and heritage rebuilds, balancing its communities and reclaiming its ancient past.",
            el: "Μια ομοσπονδιακή δημοκρατία πλούσια σε πετρέλαιο και κληρονομιά ανοικοδομείται, ισορροπώντας τις κοινότητές της και ανακτώντας το αρχαίο της παρελθόν."
          },
          extendedDescription: {
            en: "After decades of war, Iraq remains a young, oil-rich federal republic, with an autonomous Kurdistan region in the north and holy cities that draw millions of Shia pilgrims. Its people, stirred by protest movements demanding reform, contend with sectarian politics and reconstruction — while the museums of Baghdad and the restored ruins of Ur, Babylon, and Nineveh reclaim the heritage of the land where cities and writing began.",
            el: "Έπειτα από δεκαετίες πολέμου, το Ιράκ παραμένει μια νεαρή, πλούσια σε πετρέλαιο ομοσπονδιακή δημοκρατία, με μια αυτόνομη περιοχή του Κουρδιστάν στον βορρά και ιερές πόλεις που προσελκύουν εκατομμύρια Σιίτες προσκυνητές. Ο λαός του, εμπνευσμένος από κινήματα διαμαρτυρίας που ζητούν μεταρρυθμίσεις, παλεύει με τη σεκταριστική πολιτική και την ανοικοδόμηση — ενώ τα μουσεία της Βαγδάτης και τα αναστηλωμένα ερείπια της Ουρ, της Βαβυλώνας και της Νινευή ανακτούν την κληρονομιά της γης όπου γεννήθηκαν οι πόλεις και η γραφή."
          },
          category: "cultural"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
