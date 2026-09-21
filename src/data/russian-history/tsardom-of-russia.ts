/** Tsardom of Russia — Τσαρικό Κράτος της Ρωσίας · Russian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const TSARDOM_OF_RUSSIA = {
  id: "tsardom-of-russia" as const,
  label: {
    en: "Tsardom of Russia",
    el: "Τσαρικό Κράτος της Ρωσίας"
  },
  supertitle: {
    en: "Tsardom of Russia",
    el: "Τσαρᾶτο της Ρωσίας"
  },
  title: {
    en: "The Tsardom of Russia",
    el: "Το Τσαρικό Κράτος της Ρωσίας"
  },
  subtitle: {
    en: "From the coronation of Ivan the Terrible in 1547 through the conquest of the Volga and Siberia, the Time of Troubles, the rise of the Romanovs, the binding of the serfs and the schism of the Church, to Peter the Great's victory over Sweden and the proclamation of the Russian Empire in 1721. Slide across the years to read the major events that turned Muscovy into a great European power.",
    el: "Από τη στέψη του Ιβάν του Τρομερού το 1547, μέσα από την κατάκτηση του Βόλγα και της Σιβηρίας, την Εποχή των Ταραχών, την άνοδο των Ρομανόφ, τη δέσμευση των δουλοπάροικων και το σχίσμα της Εκκλησίας, έως τη νίκη του Πέτρου του Μεγάλου επί της Σουηδίας και την ανακήρυξη της Ρωσικής Αυτοκρατορίας το 1721. Μετακινηθείτε ανάμεσα στα έτη για να διαβάσετε τα σημαντικότερα γεγονότα που μετέτρεψαν τη Μοσχοβία σε μεγάλη ευρωπαϊκή δύναμη."
  },
  menuDescription: {
    en: "From Ivan the Terrible, through the Time of Troubles, to Peter the Great's new empire.",
    el: "Από τον Ιβάν τον Τρομερό, μέσα από την Εποχή των Ταραχών, ως τη νέα αυτοκρατορία του Πέτρου του Μεγάλου."
  },
  footerLabel: {
    en: "Tsardom of Russia · 1547-1721",
    el: "Τσαρικό Κράτος της Ρωσίας · 1547-1721"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Tsardom of Russia",
    el: "Τσαρικό Κράτος της Ρωσίας"
  },
  theme: THEMES.bronze,
  timeline: [
    {
      year: 1547,
      era: {
        en: "Birth of the Tsardom",
        el: "Γέννηση του τσαρικού κράτους"
      },
      events: [
        {
          title: {
            en: "Ivan IV is crowned tsar of all Russia",
            el: "Ο Ιβάν Δ΄ στέφεται τσάρος πάσης Ρωσίας"
          },
          description: {
            en: "In the Dormition Cathedral of the Moscow Kremlin, the sixteen-year-old grand prince Ivan IV is crowned tsar, the first ruler of Moscow to take the imperial title formally.",
            el: "Στον Καθεδρικό Ναό της Κοιμήσεως του Κρεμλίνου της Μόσχας, ο δεκαεξάχρονος μέγας πρίγκιπας Ιβάν Δ΄ στέφεται τσάρος, ο πρώτος ηγεμόνας της Μόσχας που λαμβάνει επίσημα τον αυτοκρατορικό τίτλο."
          },
          extendedDescription: {
            en: "The title tsar derived from the Latin 'caesar' and signaled that Moscow now claimed the heritage of the Orthodox emperors of Constantinople. The coronation transformed a grand principality into a tsardom and gave ideological form to a century of Muscovite expansion and centralization.",
            el: "Ο τίτλος «τσάρος» προερχόταν από το λατινικό «caesar» και σηματοδοτούσε ότι η Μόσχα διεκδικούσε πλέον την κληρονομιά των ορθόδοξων αυτοκρατόρων της Κωνσταντινούπολης. Η στέψη μετέτρεψε μια μεγάλη ηγεμονία σε τσαρικό κράτος και έδωσε ιδεολογική μορφή σε έναν αιώνα μοσχοβίτικης επέκτασης και συγκεντρωτισμού."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/IoannIV_reconstruction_by_Gerasimov02.jpg?width=1024",
            alt: {
              en: "Mikhail Gerasimov's forensic reconstruction of Ivan the Terrible",
              el: "Η εγκληματολογική ανακατασκευή του Ιβάν του Τρομερού από τον Μιχαήλ Γερασίμοφ"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1549,
      era: {
        en: "Reform of the State",
        el: "Μεταρρύθμιση του κράτους"
      },
      events: [
        {
          title: {
            en: "The first Zemsky Sobor convenes",
            el: "Συγκαλείται το πρώτο Ζέμσκι Σόμπορ"
          },
          description: {
            en: "Ivan IV summons the first 'Assembly of the Land', bringing together clergy, boyars, and servitors to support a program of reform under the so-called Chosen Council.",
            el: "Ο Ιβάν Δ΄ συγκαλεί την πρώτη «Συνέλευση της Γης», φέρνοντας μαζί κλήρο, βογιάρους και αυλικούς για να στηρίξουν ένα πρόγραμμα μεταρρυθμίσεων υπό την λεγόμενη Εκλεκτή Σύνοδο."
          },
          extendedDescription: {
            en: "The early years of Ivan's reign produced a new law code (the Sudebnik of 1550), reform of local government, and the creation of the streltsy musketeers. These measures strengthened the central state and the service nobility on which it depended.",
            el: "Τα πρώτα χρόνια της βασιλείας του Ιβάν παρήγαγαν έναν νέο νομικό κώδικα (το Σούντεμπνικ του 1550), μεταρρύθμιση της τοπικής διοίκησης και τη δημιουργία των τυφεκιοφόρων στρέλτσι. Τα μέτρα αυτά ενίσχυσαν το κεντρικό κράτος και την υπηρεσιακή αριστοκρατία από την οποία εξαρτιόταν."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1552,
      era: {
        en: "Eastward Expansion",
        el: "Επέκταση προς ανατολάς"
      },
      events: [
        {
          title: {
            en: "Conquest of the Khanate of Kazan",
            el: "Κατάκτηση του Χανάτου του Καζάν"
          },
          description: {
            en: "Ivan IV's armies storm Kazan, destroying the Tatar khanate on the middle Volga and opening the river to Russian control.",
            el: "Οι στρατοί του Ιβάν Δ΄ καταλαμβάνουν το Καζάν, καταστρέφοντας το ταταρικό χανάτο στον μέσο Βόλγα και ανοίγοντας τον ποταμό στον ρωσικό έλεγχο."
          },
          extendedDescription: {
            en: "Kazan was the first major Muslim state absorbed by Moscow and a turning point in the reversal of the old Mongol-Tatar order. Its fall is commemorated by Saint Basil's Cathedral on Red Square, built to mark the victory.",
            el: "Το Καζάν ήταν το πρώτο μεγάλο μουσουλμανικό κράτος που απορρόφησε η Μόσχα και σημείο καμπής στην αντιστροφή της παλαιάς μογγολοταταρικής τάξης. Η πτώση του τιμάται με τον Καθεδρικό Ναό του Αγίου Βασιλείου στην Κόκκινη Πλατεία, που χτίστηκε για να σηματοδοτήσει τη νίκη."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1556,
      era: {
        en: "The Volga Secured",
        el: "Ο Βόλγας εξασφαλίζεται"
      },
      events: [
        {
          title: {
            en: "Annexation of the Khanate of Astrakhan",
            el: "Προσάρτηση του Χανάτου του Αστραχάν"
          },
          description: {
            en: "Moscow takes Astrakhan at the mouth of the Volga, gaining control of the entire river and access to the Caspian Sea.",
            el: "Η Μόσχα καταλαμβάνει το Αστραχάν στις εκβολές του Βόλγα, αποκτώντας τον έλεγχο ολόκληρου του ποταμού και πρόσβαση στην Κασπία Θάλασσα."
          },
          extendedDescription: {
            en: "With Kazan and Astrakhan, Russia controlled a vital trade artery linking the forest north to Persia and Central Asia. The conquests opened the way to the steppe and to the long Russian advance toward the Caucasus and the East.",
            el: "Με το Καζάν και το Αστραχάν, η Ρωσία ήλεγχε μια ζωτική εμπορική αρτηρία που συνέδεε τον δασικό βορρά με την Περσία και την Κεντρική Ασία. Οι κατακτήσεις άνοιξαν τον δρόμο προς τη στέπα και προς τη μακρά ρωσική προέλαση προς τον Καύκασο και την Ανατολή."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1565,
      era: {
        en: "The Oprichnina",
        el: "Η Οπρίτσνινα"
      },
      events: [
        {
          title: {
            en: "Ivan IV launches the oprichnina",
            el: "Ο Ιβάν Δ΄ εγκαινιάζει την οπρίτσνινα"
          },
          description: {
            en: "Ivan divides the realm and creates the oprichnina, a personal domain policed by black-clad oprichniki who terrorize the boyar aristocracy.",
            el: "Ο Ιβάν διαιρεί το κράτος και δημιουργεί την οπρίτσνινα, μια προσωπική επικράτεια που αστυνομεύεται από μαυροντυμένους οπρίτσνικι οι οποίοι τρομοκρατούν τη βογιαρική αριστοκρατία."
          },
          extendedDescription: {
            en: "The oprichnina (1565-1572) was a campaign of confiscation, exile, and mass execution aimed at breaking aristocratic power. Its violence, paired with war, plague, and famine, devastated central Russia and earned Ivan his epithet 'the Terrible' (Grozny, 'the Awesome' or 'Dread').",
            el: "Η οπρίτσνινα (1565-1572) ήταν μια εκστρατεία δημεύσεων, εξοριών και μαζικών εκτελέσεων με στόχο τη συντριβή της αριστοκρατικής ισχύος. Η βία της, σε συνδυασμό με πόλεμο, πανώλη και λιμό, ερήμωσε την κεντρική Ρωσία και χάρισε στον Ιβάν το προσωνύμιο «Τρομερός» (Γκρόζνι, «ο Φοβερός»)."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1571,
      era: {
        en: "Crisis and War",
        el: "Κρίση και πόλεμος"
      },
      events: [
        {
          title: {
            en: "Crimean Tatars burn Moscow",
            el: "Τάταροι της Κριμαίας πυρπολούν τη Μόσχα"
          },
          description: {
            en: "An army of the Crimean Khanate under Devlet Giray storms and burns Moscow, exposing the strain of Ivan's wars and the weakness of the oprichnina system.",
            el: "Στρατός του Χανάτου της Κριμαίας υπό τον Ντεβλέτ Γκιράι καταλαμβάνει και πυρπολεί τη Μόσχα, αποκαλύπτοντας την καταπόνηση από τους πολέμους του Ιβάν και την αδυναμία του συστήματος της οπρίτσνινα."
          },
          extendedDescription: {
            en: "The sack was a humiliating disaster, but in 1572 a reformed Russian army crushed the Crimeans at Molodi, halting the Tatar threat to the heartland. The same year Ivan abolished the oprichnina, whose excesses had become unsustainable.",
            el: "Η λεηλασία ήταν μια ταπεινωτική καταστροφή, αλλά το 1572 ένας αναμορφωμένος ρωσικός στρατός συνέτριψε τους Κριμαίους στο Μολόντι, αναχαιτίζοντας την ταταρική απειλή προς την καρδιά του κράτους. Την ίδια χρονιά ο Ιβάν κατάργησε την οπρίτσνινα, της οποίας οι υπερβολές είχαν γίνει αβάσταχτες."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1582,
      era: {
        en: "Into Siberia",
        el: "Προς τη Σιβηρία"
      },
      events: [
        {
          title: {
            en: "Yermak's Cossacks open the conquest of Siberia",
            el: "Οι Κοζάκοι του Γερμάκ ανοίγουν την κατάκτηση της Σιβηρίας"
          },
          description: {
            en: "The Cossack ataman Yermak Timofeyevich, in the service of the Stroganov merchants, defeats the Khanate of Sibir and begins Russia's expansion across the Urals.",
            el: "Ο Κοζάκος αταμάνος Γερμάκ Τιμοφέγιεβιτς, στην υπηρεσία των εμπόρων Στρογκάνοφ, νικά το Χανάτο του Σιμπίρ και αρχίζει τη ρωσική επέκταση πέρα από τα Ουράλια."
          },
          extendedDescription: {
            en: "Yermak's campaign began a century of rapid eastward movement by Cossacks, fur traders, and explorers. Drawn by sable and other furs, Russians crossed all of northern Asia and reached the Pacific by the 1640s, creating the largest contiguous land empire on earth.",
            el: "Η εκστρατεία του Γερμάκ ξεκίνησε έναν αιώνα ταχείας προέλασης προς ανατολάς από Κοζάκους, εμπόρους γουναρικών και εξερευνητές. Ελκυόμενοι από τη ζιβελίνα και άλλα γουναρικά, οι Ρώσοι διέσχισαν όλη τη βόρεια Ασία και έφτασαν στον Ειρηνικό μέχρι τη δεκαετία του 1640, δημιουργώντας τη μεγαλύτερη ενιαία χερσαία αυτοκρατορία στη γη."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1584,
      era: {
        en: "Death of Ivan",
        el: "Θάνατος του Ιβάν"
      },
      events: [
        {
          title: {
            en: "Death of Ivan the Terrible",
            el: "Θάνατος του Ιβάν του Τρομερού"
          },
          description: {
            en: "Ivan IV dies, leaving the throne to his weak and pious son Feodor I, with real power held by the regent Boris Godunov.",
            el: "Ο Ιβάν Δ΄ πεθαίνει, αφήνοντας τον θρόνο στον αδύναμο και ευσεβή γιο του Φέοντορ Α΄, με την πραγματική εξουσία στα χέρια του αντιβασιλέα Μπορίς Γκοντούνοφ."
          },
          extendedDescription: {
            en: "In a fit of rage in 1581 Ivan had killed his able heir, the Tsarevich Ivan, leaving the dynasty dangerously weak. The exhausted, war-torn country now entered an uncertain succession that would soon plunge Russia into chaos.",
            el: "Σε ένα ξέσπασμα οργής το 1581 ο Ιβάν είχε σκοτώσει τον ικανό διάδοχό του, τον τσαρέβιτς Ιβάν, αφήνοντας τη δυναστεία επικίνδυνα αδύναμη. Η εξαντλημένη, πληγωμένη από τον πόλεμο χώρα εισήλθε τώρα σε μια αβέβαιη διαδοχή που σύντομα θα βύθιζε τη Ρωσία στο χάος."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1589,
      era: {
        en: "An Independent Church",
        el: "Μια ανεξάρτητη Εκκλησία"
      },
      events: [
        {
          title: {
            en: "The Moscow Patriarchate is established",
            el: "Ιδρύεται το Πατριαρχείο Μόσχας"
          },
          description: {
            en: "With the consent of the Eastern patriarchs, the metropolitan of Moscow, Job, is raised to patriarch, giving the Russian Church its own independent head.",
            el: "Με τη συναίνεση των ανατολικών πατριαρχών, ο μητροπολίτης Μόσχας Ιώβ ανυψώνεται σε πατριάρχη, δίνοντας στη Ρωσική Εκκλησία δικό της ανεξάρτητο επικεφαλής."
          },
          extendedDescription: {
            en: "The new patriarchate confirmed Moscow's claim to leadership of the Orthodox world after the fall of Constantinople. The idea of Moscow as a 'Third Rome', guardian of true Christianity, gave the tsardom a powerful sense of sacred mission.",
            el: "Το νέο πατριαρχείο επιβεβαίωσε την αξίωση της Μόσχας για ηγεσία του ορθόδοξου κόσμου μετά την πτώση της Κωνσταντινούπολης. Η ιδέα της Μόσχας ως «Τρίτης Ρώμης», φύλακα του αληθινού χριστιανισμού, έδωσε στο τσαρικό κράτος μια ισχυρή αίσθηση ιερής αποστολής."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1598,
      era: {
        en: "End of a Dynasty",
        el: "Τέλος μιας δυναστείας"
      },
      events: [
        {
          title: {
            en: "The Rurikid line ends; Boris Godunov is elected tsar",
            el: "Η γραμμή των Ρουρικιδών τελειώνει· ο Μπορίς Γκοντούνοφ εκλέγεται τσάρος"
          },
          description: {
            en: "The death of the childless Feodor I extinguishes the ancient dynasty of Rurik, and a Zemsky Sobor elects the regent Boris Godunov as tsar.",
            el: "Ο θάνατος του άτεκνου Φέοντορ Α΄ σβήνει την αρχαία δυναστεία του Ρούρικ, και ένα Ζέμσκι Σόμπορ εκλέγει τον αντιβασιλέα Μπορίς Γκοντούνοφ τσάρο."
          },
          extendedDescription: {
            en: "Godunov was an able administrator, but he lacked the prestige of dynastic blood. Doubts about his legitimacy, the suspicious earlier death of the boy-prince Dmitry at Uglich, and looming famine set the stage for a national catastrophe.",
            el: "Ο Γκοντούνοφ ήταν ικανός διοικητής, αλλά του έλειπε το κύρος του δυναστικού αίματος. Αμφιβολίες για τη νομιμότητά του, ο ύποπτος προγενέστερος θάνατος του παιδιού-πρίγκιπα Ντμίτρι στο Ούγκλιτς και ο επερχόμενος λιμός προετοίμασαν το έδαφος για μια εθνική καταστροφή."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1601,
      era: {
        en: "The Great Famine",
        el: "Ο Μεγάλος Λιμός"
      },
      events: [
        {
          title: {
            en: "Famine devastates Russia",
            el: "Λιμός ερημώνει τη Ρωσία"
          },
          description: {
            en: "A catastrophic famine, caused by ruined harvests after a global cooling event, kills perhaps a third of the population and shatters confidence in Boris Godunov's rule.",
            el: "Ένας καταστροφικός λιμός, που προκλήθηκε από κατεστραμμένες σοδειές έπειτα από ένα παγκόσμιο ψυχρό κύμα, σκοτώνει ίσως το ένα τρίτο του πληθυσμού και κλονίζει την εμπιστοσύνη στη διακυβέρνηση του Μπορίς Γκοντούνοφ."
          },
          extendedDescription: {
            en: "The famine of 1601-1603 followed the eruption of the Peruvian volcano Huaynaputina, which disrupted climates worldwide. Mass starvation, banditry, and despair undermined the new tsar and helped open the period of dynastic and civil collapse known as the Time of Troubles.",
            el: "Ο λιμός του 1601-1603 ακολούθησε την έκρηξη του περουβιανού ηφαιστείου Ουαϊναπουτίνα, που διατάραξε τα κλίματα παγκοσμίως. Η μαζική πείνα, η ληστεία και η απελπισία υπονόμευσαν τον νέο τσάρο και βοήθησαν να ανοίξει η περίοδος δυναστικής και εμφύλιας κατάρρευσης γνωστή ως Εποχή των Ταραχών."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1605,
      era: {
        en: "Time of Troubles",
        el: "Εποχή των Ταραχών"
      },
      events: [
        {
          title: {
            en: "False Dmitry I seizes the throne",
            el: "Ο Ψευδο-Ντμίτρι Α΄ καταλαμβάνει τον θρόνο"
          },
          description: {
            en: "After Boris Godunov's sudden death, a pretender claiming to be the murdered Tsarevich Dmitry, backed by Polish-Lithuanian magnates, enters Moscow and is crowned tsar.",
            el: "Μετά τον αιφνίδιο θάνατο του Μπορίς Γκοντούνοφ, ένας σφετεριστής που ισχυρίζεται ότι είναι ο δολοφονημένος τσαρέβιτς Ντμίτρι, με τη στήριξη πολωνολιθουανών μεγιστάνων, εισέρχεται στη Μόσχα και στέφεται τσάρος."
          },
          extendedDescription: {
            en: "False Dmitry I was murdered within a year, the first of several pretenders. The Time of Troubles (c. 1598-1613) brought civil war, peasant revolts, foreign invasion, and competing claimants, threatening the very survival of the Russian state.",
            el: "Ο Ψευδο-Ντμίτρι Α΄ δολοφονήθηκε μέσα σε έναν χρόνο, ο πρώτος από αρκετούς σφετεριστές. Η Εποχή των Ταραχών (περ. 1598-1613) έφερε εμφύλιο πόλεμο, αγροτικές εξεγέρσεις, ξένη εισβολή και ανταγωνιστικούς διεκδικητές, απειλώντας την ίδια την επιβίωση του ρωσικού κράτους."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1610,
      era: {
        en: "Polish Occupation",
        el: "Πολωνική κατοχή"
      },
      events: [
        {
          title: {
            en: "Polish forces occupy Moscow",
            el: "Πολωνικές δυνάμεις καταλαμβάνουν τη Μόσχα"
          },
          description: {
            en: "Amid the collapse of central authority, Polish-Lithuanian troops occupy the Moscow Kremlin and the boyars offer the throne to the Polish prince Władysław.",
            el: "Μέσα στην κατάρρευση της κεντρικής εξουσίας, πολωνολιθουανικά στρατεύματα καταλαμβάνουν το Κρεμλίνο της Μόσχας και οι βογιάροι προσφέρουν τον θρόνο στον Πολωνό πρίγκιπα Βλάντισλαβ."
          },
          extendedDescription: {
            en: "The occupation, together with Swedish intervention in the north, marked the lowest point of the Troubles. The presence of Catholic foreigners in the Orthodox heartland provoked a powerful national and religious reaction against the invaders.",
            el: "Η κατοχή, μαζί με τη σουηδική επέμβαση στον βορρά, σηματοδότησε το χαμηλότερο σημείο των Ταραχών. Η παρουσία καθολικών ξένων στην ορθόδοξη καρδιά του κράτους προκάλεσε μια ισχυρή εθνική και θρησκευτική αντίδραση κατά των εισβολέων."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1612,
      era: {
        en: "National Deliverance",
        el: "Εθνική απελευθέρωση"
      },
      events: [
        {
          title: {
            en: "Minin and Pozharsky liberate Moscow",
            el: "Ο Μίνιν και ο Ποζάρσκι απελευθερώνουν τη Μόσχα"
          },
          description: {
            en: "A volunteer army raised in Nizhny Novgorod by the merchant Kuzma Minin and Prince Dmitry Pozharsky drives the Polish garrison from the Kremlin.",
            el: "Ένας εθελοντικός στρατός που συγκροτήθηκε στο Νίζνι Νόβγκοροντ από τον έμπορο Κούζμα Μίνιν και τον πρίγκιπα Ντμίτρι Ποζάρσκι εκδιώκει την πολωνική φρουρά από το Κρεμλίνο."
          },
          extendedDescription: {
            en: "The liberation of Moscow became one of the founding patriotic memories of Russia, still commemorated as Unity Day. With the capital freed, the country could at last gather to choose a new and legitimate dynasty.",
            el: "Η απελευθέρωση της Μόσχας έγινε μια από τις ιδρυτικές πατριωτικές μνήμες της Ρωσίας, που τιμάται ακόμη ως Ημέρα της Ενότητας. Με την πρωτεύουσα ελεύθερη, η χώρα μπορούσε επιτέλους να συγκεντρωθεί για να επιλέξει μια νέα και νόμιμη δυναστεία."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Saint_Basil's_Cathedral_in_Moscow.jpg?width=1024",
            alt: {
              en: "Saint Basil's Cathedral on Red Square, Moscow",
              el: "Ο καθεδρικός του Αγίου Βασιλείου στην Κόκκινη Πλατεία, Μόσχα"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1613,
      era: {
        en: "The Romanovs",
        el: "Οι Ρομανόφ"
      },
      events: [
        {
          title: {
            en: "Michael Romanov is elected tsar",
            el: "Ο Μιχαήλ Ρομανόφ εκλέγεται τσάρος"
          },
          description: {
            en: "A great Zemsky Sobor elects the sixteen-year-old Michael Romanov as tsar, founding the dynasty that would rule Russia until 1917.",
            el: "Ένα μεγάλο Ζέμσκι Σόμπορ εκλέγει τον δεκαεξάχρονο Μιχαήλ Ρομανόφ τσάρο, ιδρύοντας τη δυναστεία που θα κυβερνούσε τη Ρωσία ως το 1917."
          },
          extendedDescription: {
            en: "Michael's accession ended the Time of Troubles and restored legitimate monarchy. Related by marriage to the old Rurikid house, the Romanovs slowly rebuilt the shattered state, recovered lost lands, and reasserted central authority.",
            el: "Η ανάρρηση του Μιχαήλ τερμάτισε την Εποχή των Ταραχών και αποκατέστησε τη νόμιμη μοναρχία. Συγγενείς εξ αγχιστείας με τον παλαιό οίκο των Ρουρικιδών, οι Ρομανόφ ανοικοδόμησαν αργά το κατεστραμμένο κράτος, ανέκτησαν χαμένες γαίες και επανέφεραν την κεντρική εξουσία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1649,
      era: {
        en: "Law and Serfdom",
        el: "Νόμος και δουλοπαροικία"
      },
      events: [
        {
          title: {
            en: "The Sobornoye Ulozheniye binds the serfs",
            el: "Το Σομπόρνογιε Ουλοζένιγιε δεσμεύει τους δουλοπάροικους"
          },
          description: {
            en: "Under Tsar Alexis, a comprehensive law code abolishes the time limit on recovering fugitive peasants, binding serfs permanently to the land and their masters.",
            el: "Επί τσάρου Αλεξίου, ένας περιεκτικός νομικός κώδικας καταργεί το χρονικό όριο ανάκτησης φυγάδων χωρικών, δεσμεύοντας μόνιμα τους δουλοπάροικους στη γη και στους αφέντες τους."
          },
          extendedDescription: {
            en: "The Ulozhenie of 1649 codified Russian society as a hierarchy of bound estates serving the state. Full serfdom would shape Russian life for over two centuries, until its abolition in 1861, and underpinned the power of the landed nobility.",
            el: "Το Ουλοζένιγιε του 1649 κωδικοποίησε τη ρωσική κοινωνία ως ιεραρχία δεσμευμένων τάξεων που υπηρετούσαν το κράτος. Η πλήρης δουλοπαροικία θα διαμόρφωνε τη ρωσική ζωή για πάνω από δύο αιώνες, ως την κατάργησή της το 1861, και στήριζε την ισχύ της γαιοκτήμονος αριστοκρατίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1652,
      era: {
        en: "The Great Schism",
        el: "Το Μεγάλο Σχίσμα"
      },
      events: [
        {
          title: {
            en: "Patriarch Nikon's reforms split the Church",
            el: "Οι μεταρρυθμίσεις του Πατριάρχη Νίκωνα διχάζουν την Εκκλησία"
          },
          description: {
            en: "Patriarch Nikon revises liturgical books and rituals to match Greek practice, provoking fierce resistance from traditionalists led by the archpriest Avvakum.",
            el: "Ο Πατριάρχης Νίκων αναθεωρεί λειτουργικά βιβλία και τελετουργικά ώστε να ταιριάζουν με την ελληνική πρακτική, προκαλώντας σφοδρή αντίσταση από τους παραδοσιακούς υπό τον αρχιερέα Αββακούμ."
          },
          extendedDescription: {
            en: "Nikon's reforms triggered the Raskol, the great schism of Russian Orthodoxy. The Old Believers who rejected the changes were persecuted for generations, many choosing exile, flight to the frontier, or even self-immolation rather than submit.",
            el: "Οι μεταρρυθμίσεις του Νίκωνα προκάλεσαν τον Ρασκόλ, το μεγάλο σχίσμα της ρωσικής Ορθοδοξίας. Οι Παλαιόπιστοι που απέρριψαν τις αλλαγές διώχθηκαν για γενιές, και πολλοί επέλεξαν την εξορία, τη φυγή στη μεθόριο ή ακόμη και την αυτοπυρπόληση παρά να υποταχθούν."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1654,
      era: {
        en: "Union with Ukraine",
        el: "Ένωση με την Ουκρανία"
      },
      events: [
        {
          title: {
            en: "The Pereyaslav Agreement",
            el: "Η Συμφωνία του Περεγιασλάβ"
          },
          description: {
            en: "The Cossack hetman Bohdan Khmelnytsky places the Zaporozhian Host under the protection of the tsar, drawing Russia into war with Poland-Lithuania.",
            el: "Ο Κοζάκος χετμάνος Μπογκντάν Χμελνίτσκι θέτει τον Στρατό των Ζαπορόζιων υπό την προστασία του τσάρου, σύροντας τη Ρωσία σε πόλεμο με την Πολωνία-Λιθουανία."
          },
          extendedDescription: {
            en: "The agreement followed Khmelnytsky's great Cossack uprising against Polish rule. It began the long, contested incorporation of Ukrainian lands into the Russian orbit, a relationship whose meaning is still fiercely debated today.",
            el: "Η συμφωνία ακολούθησε τη μεγάλη κοζακική εξέγερση του Χμελνίτσκι κατά της πολωνικής κυριαρχίας. Ξεκίνησε τη μακρά και αμφισβητούμενη ενσωμάτωση ουκρανικών εδαφών στη ρωσική σφαίρα, μια σχέση της οποίας το νόημα συζητείται έντονα ακόμη και σήμερα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1667,
      era: {
        en: "Gains from Poland",
        el: "Κέρδη από την Πολωνία"
      },
      events: [
        {
          title: {
            en: "The Truce of Andrusovo",
            el: "Η Ανακωχή του Αντρούσοβο"
          },
          description: {
            en: "The Thirteen Years' War with Poland-Lithuania ends with Russia gaining Smolensk and left-bank Ukraine, including the city of Kyiv.",
            el: "Ο Δεκατριάχρονος Πόλεμος με την Πολωνία-Λιθουανία τελειώνει με τη Ρωσία να κερδίζει το Σμολένσκ και την Ουκρανία της αριστερής όχθης, συμπεριλαμβανομένης της πόλης του Κιέβου."
          },
          extendedDescription: {
            en: "Andrusovo marked a decisive shift of power eastward, as a recovering Russia overtook a declining Poland-Lithuania. The acquisition of Kyiv carried deep symbolic weight, reuniting Moscow with the ancient cradle of Rus' Christianity.",
            el: "Το Αντρούσοβο σηματοδότησε μια αποφασιστική μετατόπιση ισχύος προς ανατολάς, καθώς μια ανακάμπτουσα Ρωσία προσπερνούσε μια παρακμάζουσα Πολωνία-Λιθουανία. Η απόκτηση του Κιέβου είχε βαθύ συμβολικό βάρος, επανενώνοντας τη Μόσχα με το αρχαίο λίκνο του χριστιανισμού της Ρως."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1670,
      era: {
        en: "Cossack Rebellion",
        el: "Κοζακική εξέγερση"
      },
      events: [
        {
          title: {
            en: "The revolt of Stenka Razin",
            el: "Η εξέγερση του Στένκα Ραζίν"
          },
          description: {
            en: "The Don Cossack Stenka Razin leads a vast rebellion of Cossacks, peasants, and frontier peoples along the Volga against the nobility and the state.",
            el: "Ο Κοζάκος του Ντον Στένκα Ραζίν ηγείται μιας τεράστιας εξέγερσης Κοζάκων, χωρικών και μεθοριακών λαών κατά μήκος του Βόλγα ενάντια στην αριστοκρατία και το κράτος."
          },
          extendedDescription: {
            en: "Razin's rising swept the lower and middle Volga before government armies crushed it, and he was executed in Moscow in 1671. His revolt became legendary in folk song as a symbol of popular defiance against serfdom and oppression.",
            el: "Η εξέγερση του Ραζίν σάρωσε τον κάτω και μέσο Βόλγα προτού οι κυβερνητικοί στρατοί τη συντρίψουν, και εκτελέστηκε στη Μόσχα το 1671. Η εξέγερσή του έγινε θρυλική σε λαϊκά τραγούδια ως σύμβολο λαϊκής αντίστασης κατά της δουλοπαροικίας και της καταπίεσης."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1682,
      era: {
        en: "A Divided Throne",
        el: "Ένας διαιρεμένος θρόνος"
      },
      events: [
        {
          title: {
            en: "Peter I and Ivan V become joint tsars",
            el: "Ο Πέτρος Α΄ και ο Ιβάν Ε΄ γίνονται συντσάροι"
          },
          description: {
            en: "After a bloody streltsy revolt, the boy Peter and his sickly half-brother Ivan V are proclaimed joint tsars, with their sister Sophia ruling as regent.",
            el: "Έπειτα από μια αιματηρή εξέγερση των στρέλτσι, το παιδί Πέτρος και ο φιλάσθενος ετεροθαλής αδελφός του Ιβάν Ε΄ ανακηρύσσονται συντσάροι, με την αδελφή τους Σοφία να κυβερνά ως αντιβασίλισσα."
          },
          extendedDescription: {
            en: "The violence Peter witnessed as a child left a lasting hatred of the streltsy and of Kremlin court intrigue. Sidelined during Sophia's regency, he spent his youth among soldiers and foreign craftsmen, forming the ideas that would transform Russia.",
            el: "Η βία που είδε ο Πέτρος ως παιδί του άφησε ένα διαρκές μίσος για τους στρέλτσι και για τις αυλικές ίντριγκες του Κρεμλίνου. Παραγκωνισμένος κατά την αντιβασιλεία της Σοφίας, πέρασε τη νεότητά του ανάμεσα σε στρατιώτες και ξένους τεχνίτες, διαμορφώνοντας τις ιδέες που θα μεταμόρφωναν τη Ρωσία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1689,
      era: {
        en: "Peter Takes Power",
        el: "Ο Πέτρος αναλαμβάνει την εξουσία"
      },
      events: [
        {
          title: {
            en: "Peter overthrows the regent Sophia",
            el: "Ο Πέτρος ανατρέπει την αντιβασίλισσα Σοφία"
          },
          description: {
            en: "The seventeen-year-old Peter outmaneuvers his half-sister Sophia, confines her to a convent, and takes real power into his own hands.",
            el: "Ο δεκαεπτάχρονος Πέτρος ξεπερνά σε ελιγμούς την ετεροθαλή αδελφή του Σοφία, την περιορίζει σε μοναστήρι και παίρνει την πραγματική εξουσία στα χέρια του."
          },
          extendedDescription: {
            en: "The same year, the Treaty of Nerchinsk fixed Russia's far-eastern border with Qing China, the first treaty between the two empires. Peter's reign would turn outward, toward the sea, the West, and the remaking of the Russian state.",
            el: "Την ίδια χρονιά, η Συνθήκη του Νερτσίνσκ καθόρισε το άπω-ανατολικό σύνορο της Ρωσίας με την Κίνα των Τσινγκ, η πρώτη συνθήκη μεταξύ των δύο αυτοκρατοριών. Η βασιλεία του Πέτρου θα στρεφόταν προς τα έξω, προς τη θάλασσα, τη Δύση και την ανασυγκρότηση του ρωσικού κράτους."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1696,
      era: {
        en: "A Window to the Sea",
        el: "Ένα παράθυρο στη θάλασσα"
      },
      events: [
        {
          title: {
            en: "Peter captures Azov from the Ottomans",
            el: "Ο Πέτρος καταλαμβάνει το Αζόφ από τους Οθωμανούς"
          },
          description: {
            en: "On his second campaign, Peter takes the Ottoman fortress of Azov with the help of a newly built river fleet, gaining an outlet to the southern seas.",
            el: "Στη δεύτερη εκστρατεία του, ο Πέτρος καταλαμβάνει το οθωμανικό φρούριο του Αζόφ με τη βοήθεια ενός νεόκτιστου ποτάμιου στόλου, αποκτώντας διέξοδο προς τις νότιες θάλασσες."
          },
          extendedDescription: {
            en: "Azov convinced Peter of the value of sea power and modern technique. It led directly to his Grand Embassy to Western Europe in 1697-1698, where he studied shipbuilding, sciences, and statecraft, often traveling incognito as a common workman.",
            el: "Το Αζόφ έπεισε τον Πέτρο για την αξία της ναυτικής ισχύος και της σύγχρονης τεχνικής. Οδήγησε άμεσα στη Μεγάλη Πρεσβεία του στη Δυτική Ευρώπη το 1697-1698, όπου μελέτησε ναυπηγική, επιστήμες και τέχνη της διακυβέρνησης, ταξιδεύοντας συχνά ινκόγκνιτο ως απλός εργάτης."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1700,
      era: {
        en: "The Great Northern War",
        el: "Ο Μεγάλος Βόρειος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "War with Sweden begins at Narva",
            el: "Ο πόλεμος με τη Σουηδία αρχίζει στη Νάρβα"
          },
          description: {
            en: "Peter launches the Great Northern War against Sweden but suffers a crushing defeat at Narva, where Charles XII routs a much larger Russian army.",
            el: "Ο Πέτρος εξαπολύει τον Μεγάλο Βόρειο Πόλεμο κατά της Σουηδίας αλλά υφίσταται συντριπτική ήττα στη Νάρβα, όπου ο Κάρολος ΙΒ΄ διαλύει έναν πολύ μεγαλύτερο ρωσικό στρατό."
          },
          extendedDescription: {
            en: "Narva was a humiliation that became a spur. Peter rebuilt his army wholesale, casting new cannon (some from church bells), drilling regular regiments, and forging the modern military machine that would eventually overturn Swedish supremacy in the Baltic.",
            el: "Η Νάρβα ήταν μια ταπείνωση που έγινε κίνητρο. Ο Πέτρος ανασυγκρότησε εκ θεμελίων τον στρατό του, χύνοντας νέα κανόνια (μερικά από καμπάνες εκκλησιών), εκπαιδεύοντας τακτικά συντάγματα και σφυρηλατώντας τη σύγχρονη πολεμική μηχανή που τελικά θα ανέτρεπε τη σουηδική υπεροχή στη Βαλτική."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1703,
      era: {
        en: "A New Capital",
        el: "Μια νέα πρωτεύουσα"
      },
      events: [
        {
          title: {
            en: "Peter founds Saint Petersburg",
            el: "Ο Πέτρος ιδρύει την Αγία Πετρούπολη"
          },
          description: {
            en: "On marshland newly seized from Sweden at the mouth of the Neva, Peter founds Saint Petersburg, his 'window to the West'.",
            el: "Σε ελώδη γη που μόλις είχε αρπαχθεί από τη Σουηδία στις εκβολές του Νέβα, ο Πέτρος ιδρύει την Αγία Πετρούπολη, το «παράθυρό» του προς τη Δύση."
          },
          extendedDescription: {
            en: "Built at enormous human cost, the new city became the capital in 1712, a deliberate break with old Muscovy. With its European architecture and Baltic outlook, Saint Petersburg embodied Peter's drive to remake Russia as a modern European power.",
            el: "Χτισμένη με τεράστιο ανθρώπινο κόστος, η νέα πόλη έγινε πρωτεύουσα το 1712, μια ηθελημένη ρήξη με την παλαιά Μοσχοβία. Με την ευρωπαϊκή αρχιτεκτονική και τον βαλτικό προσανατολισμό της, η Αγία Πετρούπολη ενσάρκωσε την προσπάθεια του Πέτρου να ανασχηματίσει τη Ρωσία ως σύγχρονη ευρωπαϊκή δύναμη."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Inconnu_d'apr%C3%A8s_J.-M._Nattier,_Portrait_de_Pierre_Ier_(mus%C3%A9e_de_l%E2%80%99Ermitage).jpg?width=1024",
            alt: {
              en: "Portrait of Peter the Great",
              el: "Προσωπογραφία του Μεγάλου Πέτρου"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1709,
      era: {
        en: "Poltava",
        el: "Πολτάβα"
      },
      events: [
        {
          title: {
            en: "The Battle of Poltava",
            el: "Η Μάχη της Πολτάβα"
          },
          description: {
            en: "Peter's reformed army decisively defeats Charles XII of Sweden at Poltava in Ukraine, breaking Swedish military power.",
            el: "Ο αναμορφωμένος στρατός του Πέτρου νικά αποφασιστικά τον Κάρολο ΙΒ΄ της Σουηδίας στην Πολτάβα της Ουκρανίας, συντρίβοντας τη σουηδική στρατιωτική ισχύ."
          },
          extendedDescription: {
            en: "Poltava was one of the most consequential battles in European history. It shattered Sweden's standing as a great power and announced Russia's arrival as the dominant force in the north and east of the continent.",
            el: "Η Πολτάβα ήταν μία από τις πιο καθοριστικές μάχες στην ευρωπαϊκή ιστορία. Συνέτριψε τη θέση της Σουηδίας ως μεγάλης δύναμης και ανήγγειλε την άφιξη της Ρωσίας ως κυρίαρχης δύναμης στον βορρά και την ανατολή της ηπείρου."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1721,
      era: {
        en: "The Russian Empire",
        el: "Η Ρωσική Αυτοκρατορία"
      },
      events: [
        {
          title: {
            en: "Peter the Great is proclaimed emperor",
            el: "Ο Πέτρος ο Μέγας ανακηρύσσεται αυτοκράτορας"
          },
          description: {
            en: "The Treaty of Nystad ends the Great Northern War with victory over Sweden, and the Senate proclaims Peter 'Emperor of All Russia', founding the Russian Empire.",
            el: "Η Συνθήκη του Νύσταντ τερματίζει τον Μεγάλο Βόρειο Πόλεμο με νίκη επί της Σουηδίας, και η Γερουσία ανακηρύσσει τον Πέτρο «Αυτοκράτορα Πάσης Ρωσίας», ιδρύοντας τη Ρωσική Αυτοκρατορία."
          },
          extendedDescription: {
            en: "With Nystad, Russia secured the Baltic provinces and a permanent sea coast. The change of title from tsar to emperor marked the end of the old Muscovite tsardom and the formal birth of the Russian Empire that would endure until 1917.",
            el: "Με το Νύσταντ, η Ρωσία εξασφάλισε τις βαλτικές επαρχίες και μόνιμη θαλάσσια ακτή. Η αλλαγή του τίτλου από τσάρος σε αυτοκράτορας σηματοδότησε το τέλος του παλαιού μοσχοβίτικου τσαρικού κράτους και την επίσημη γέννηση της Ρωσικής Αυτοκρατορίας που θα διαρκούσε ως το 1917."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
