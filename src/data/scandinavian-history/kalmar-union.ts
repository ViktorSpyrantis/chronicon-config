/** The Kalmar Union — Η Ένωση του Κάλμαρ · Vikings & Scandinavia */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const KALMAR_UNION = {
  id: "kalmar-union" as const,
  label: {
    en: "The Kalmar Union",
    el: "Η Ένωση του Κάλμαρ"
  },
  supertitle: {
    en: "Late Medieval Scandinavia",
    el: "Ύστερη Μεσαιωνική Σκανδιναβία"
  },
  title: {
    en: "Three Crowns, One King: The Kalmar Union",
    el: "Τρία Στέμματα, Ένας Βασιλιάς: η Ένωση του Κάλμαρ"
  },
  subtitle: {
    en: "In 1397 Queen Margaret had her great-nephew crowned king of Denmark, Norway and Sweden at Kalmar, creating one of the largest realms in Europe. For over a century the union held — through the Sound Dues, peasant rebellions and the first Swedish parliaments — while Norse Greenland quietly faded away. It ended in blood in Stockholm in 1520, and from the ashes rose Gustav Vasa's independent Sweden. Slide across the last age of a united North.",
    el: "Το 1397 η βασίλισσα Μαργαρίτα έστεψε τον ανιψιό της βασιλιά της Δανίας, της Νορβηγίας και της Σουηδίας στο Κάλμαρ, δημιουργώντας ένα από τα μεγαλύτερα κράτη της Ευρώπης. Επί πάνω από έναν αιώνα η ένωση άντεξε — μέσα από τα Διόδια του Πορθμού, αγροτικές εξεγέρσεις και τις πρώτες σουηδικές συνελεύσεις — ενώ η νορδική Γροιλανδία έσβηνε αθόρυβα. Τελείωσε με αίμα στη Στοκχόλμη το 1520, και από τις στάχτες της αναδύθηκε η ανεξάρτητη Σουηδία του Γουσταύου Βάσα. Μετακινηθείτε στην τελευταία εποχή ενός ενωμένου Βορρά."
  },
  menuDescription: {
    en: "Queen Margaret's union of three kingdoms, from its coronation at Kalmar to the Stockholm Bloodbath.",
    el: "Η ένωση των τριών βασιλείων της βασίλισσας Μαργαρίτας, από τη στέψη στο Κάλμαρ ως το Λουτρό Αίματος της Στοκχόλμης."
  },
  footerLabel: {
    en: "The Kalmar Union · AD 1397-1523",
    el: "Η Ένωση του Κάλμαρ · 1397-1523 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Kalmar Union",
    el: "Η Ένωση του Κάλμαρ"
  },
  theme: THEMES.sapphire,
  timeline: [
    {
      year: 1397,
      era: {
        en: "Kalmar Union",
        el: "Ένωση του Κάλμαρ"
      },
      events: [
        {
          title: {
            en: "Coronation at Kalmar",
            el: "Η στέψη στο Κάλμαρ"
          },
          description: {
            en: "Eric of Pomerania is crowned king of Denmark, Norway and Sweden at Kalmar, uniting all three Scandinavian kingdoms under one monarch.",
            el: "Ο Έρικ της Πομερανίας στέφεται βασιλιάς της Δανίας, της Νορβηγίας και της Σουηδίας στο Κάλμαρ, ενώνοντας και τα τρία σκανδιναβικά βασίλεια υπό έναν μονάρχη."
          },
          extendedDescription: {
            en: "The union realm stretched from Greenland to Finland, which was then part of Sweden. A 'union letter' drafted at the coronation promised that the kingdoms would share one king forever while keeping their own laws, but it was never formally ratified, and the Swedes would later dispute what had been agreed. Real power remained with Margaret until her death in 1412, and the union was always strongest when Denmark could impose it.",
            el: "Το κράτος της ένωσης εκτεινόταν από τη Γροιλανδία ως τη Φινλανδία, που τότε ήταν μέρος της Σουηδίας. Μια «επιστολή ένωσης» που συντάχθηκε στη στέψη υποσχόταν ότι τα βασίλεια θα μοιράζονταν για πάντα έναν βασιλιά, διατηρώντας τους δικούς τους νόμους, αλλά ποτέ δεν επικυρώθηκε επίσημα, και οι Σουηδοί αργότερα αμφισβήτησαν τι είχε συμφωνηθεί. Η πραγματική εξουσία έμεινε στη Μαργαρίτα ως τον θάνατό της το 1412, και η ένωση ήταν πάντα πιο ισχυρή όταν η Δανία μπορούσε να την επιβάλει."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kalmar_castle_(by_Pudelek).JPG?width=1024",
            alt: {
              en: "Kalmar Castle in southern Sweden, the royal fortress of the town where the union was sealed",
              el: "Το Κάστρο του Κάλμαρ στη νότια Σουηδία, το βασιλικό φρούριο της πόλης όπου επισφραγίστηκε η ένωση"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1408,
      era: {
        en: "Kalmar Union",
        el: "Ένωση του Κάλμαρ"
      },
      events: [
        {
          title: {
            en: "A last wedding in Norse Greenland",
            el: "Ένας τελευταίος γάμος στη νορδική Γροιλανδία"
          },
          description: {
            en: "A wedding at Hvalsey Church in Greenland is recorded in Icelandic documents — the last written news ever heard from the Norse settlements.",
            el: "Ένας γάμος στην εκκλησία του Χβάλσεϊ στη Γροιλανδία καταγράφεται σε ισλανδικά έγγραφα — τα τελευταία γραπτά νέα που ακούστηκαν ποτέ από τους νορδικούς οικισμούς."
          },
          extendedDescription: {
            en: "The Western Settlement had already been abandoned by the mid-14th century, and by the late 1400s the Eastern Settlement was empty too. Why Norse Greenland died is still debated: a cooling climate, falling demand for walrus ivory, lost contact with Norway, conflict or competition with the Inuit, and perhaps simple emigration all played a part. When missionaries arrived in 1721, they found only ruins.",
            el: "Ο Δυτικός Οικισμός είχε ήδη εγκαταλειφθεί ως τα μέσα του 14ου αιώνα, και ως τα τέλη του 15ου ο Ανατολικός Οικισμός είχε επίσης ερημώσει. Το γιατί χάθηκε η νορδική Γροιλανδία συζητείται ακόμη: ένα ψυχρότερο κλίμα, η πτώση της ζήτησης για ελεφαντόδοντο θαλάσσιου ίππου, η απώλεια της επαφής με τη Νορβηγία, η σύγκρουση ή ο ανταγωνισμός με τους Ινουίτ και ίσως απλώς η μετανάστευση έπαιξαν όλα κάποιον ρόλο. Όταν έφτασαν ιεραπόστολοι το 1721, βρήκαν μόνο ερείπια."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1429,
      era: {
        en: "Kalmar Union",
        el: "Ένωση του Κάλμαρ"
      },
      events: [
        {
          title: {
            en: "The Sound Dues",
            el: "Τα Διόδια του Πορθμού"
          },
          description: {
            en: "Eric of Pomerania begins charging every foreign ship passing through the Øresund a toll, collected at his new castle at Helsingør.",
            el: "Ο Έρικ της Πομερανίας αρχίζει να χρεώνει διόδια σε κάθε ξένο πλοίο που περνά από το Έρεσουντ, τα οποία εισπράττονται στο νέο του κάστρο στο Χέλσινγκερ."
          },
          extendedDescription: {
            en: "Because the Øresund was the main gateway between the Baltic and the North Sea, the dues became the Danish crown's richest source of income, paying for its fleets and palaces. The toll was levied for over four centuries, until 1857, and the Sound Toll registers are a treasure trove for historians of European trade. The castle at Helsingør was later rebuilt as Kronborg — the Elsinore of Shakespeare's Hamlet.",
            el: "Επειδή το Έρεσουντ ήταν η κύρια πύλη ανάμεσα στη Βαλτική και τη Βόρεια Θάλασσα, τα διόδια έγιναν η πλουσιότερη πηγή εσόδων του δανικού στέμματος, χρηματοδοτώντας τους στόλους και τα ανάκτορά του. Τα διόδια εισπράττονταν για πάνω από τέσσερις αιώνες, ως το 1857, και τα μητρώα τους είναι θησαυρός για τους ιστορικούς του ευρωπαϊκού εμπορίου. Το κάστρο στο Χέλσινγκερ ξαναχτίστηκε αργότερα ως Κρόνμποργκ — το Έλσινορ του «Άμλετ» του Σαίξπηρ."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1434,
      era: {
        en: "Kalmar Union",
        el: "Ένωση του Κάλμαρ"
      },
      events: [
        {
          title: {
            en: "Engelbrekt's rebellion",
            el: "Η εξέγερση του Ένγκελμπρεκτ"
          },
          description: {
            en: "The miners and peasants of Dalarna rise under the mine-owner Engelbrekt Engelbrektsson against King Eric's foreign bailiffs and heavy war taxes.",
            el: "Οι μεταλλωρύχοι και οι αγρότες της Νταλαρνα εξεγείρονται υπό τον ιδιοκτήτη ορυχείων Ένγκελμπρεκτ Ένγκελμπρεκτσον εναντίον των ξένων επιστατών του βασιλιά Έρικ και των βαριών πολεμικών φόρων."
          },
          extendedDescription: {
            en: "Eric's long war against the Hanseatic League had disrupted Sweden's vital iron and copper exports, and his Danish and German governors were hated. The rebels stormed royal castles across the country. In 1435 Engelbrekt was chosen as regent at a meeting in Arboga that included representatives of the towns and peasants — often seen as the first Swedish Riksdag. He was murdered in 1436, but became a national hero.",
            el: "Ο μακρύς πόλεμος του Έρικ εναντίον της Χανσεατικής Ένωσης είχε διαταράξει τις ζωτικές εξαγωγές σιδήρου και χαλκού της Σουηδίας, και οι Δανοί και Γερμανοί διοικητές του ήταν μισητοί. Οι επαναστάτες κατέλαβαν βασιλικά κάστρα σε όλη τη χώρα. Το 1435 ο Ένγκελμπρεκτ επιλέχθηκε αντιβασιλέας σε μια συνάντηση στην Άρμπογκα όπου συμμετείχαν αντιπρόσωποι των πόλεων και των αγροτών — που συχνά θεωρείται το πρώτο σουηδικό Ρίκσνταγκ. Δολοφονήθηκε το 1436, αλλά έγινε εθνικός ήρωας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1448,
      era: {
        en: "Kalmar Union",
        el: "Ένωση του Κάλμαρ"
      },
      events: [
        {
          title: {
            en: "The House of Oldenburg",
            el: "Ο Οίκος του Όλντενμπουργκ"
          },
          description: {
            en: "Christian I, a German count, is elected king of Denmark, founding the Oldenburg dynasty that still reigns in Denmark today.",
            el: "Ο Χριστιανός Α΄, ένας Γερμανός κόμης, εκλέγεται βασιλιάς της Δανίας, ιδρύοντας τη δυναστεία του Όλντενμπουργκ που βασιλεύει ακόμη στη Δανία."
          },
          extendedDescription: {
            en: "Christian became king of Norway in 1450 and of Sweden in 1457, briefly restoring the full union. In 1460, by the Treaty of Ribe, he was also chosen duke of Schleswig and count of Holstein, on the promise that the two lands would remain 'forever undivided' — a phrase that would fuel the Schleswig-Holstein conflicts of the 19th century. The present Danish royal house descends from him.",
            el: "Ο Χριστιανός έγινε βασιλιάς της Νορβηγίας το 1450 και της Σουηδίας το 1457, αποκαθιστώντας για λίγο την πλήρη ένωση. Το 1460, με τη Συνθήκη του Ρίμπε, επιλέχθηκε επίσης δούκας του Σλέσβιχ και κόμης του Χολστάιν, με την υπόσχεση ότι οι δύο χώρες θα έμεναν «για πάντα αδιαίρετες» — μια φράση που θα τροφοδοτούσε τις συγκρούσεις για το Σλέσβιχ-Χολστάιν τον 19ο αιώνα. Ο σημερινός δανικός βασιλικός οίκος κατάγεται από αυτόν."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1468,
      era: {
        en: "Kalmar Union",
        el: "Ένωση του Κάλμαρ"
      },
      events: [
        {
          title: {
            en: "Orkney and Shetland pledged to Scotland",
            el: "Οι Όρκνεϊ και οι Σέτλαντ ενεχυριάζονται στη Σκωτία"
          },
          description: {
            en: "Unable to pay his daughter's dowry for her marriage to James III of Scotland, Christian I pledges Orkney and, a year later, Shetland — which are never redeemed.",
            el: "Μη μπορώντας να πληρώσει την προίκα της κόρης του για τον γάμο της με τον Ιάκωβο Γ΄ της Σκωτίας, ο Χριστιανός Α΄ ενεχυριάζει τις Όρκνεϊ και, έναν χρόνο αργότερα, τις Σέτλαντ — που δεν εξαγοράστηκαν ποτέ."
          },
          extendedDescription: {
            en: "The islands had been Norse since the Viking Age, and their people spoke Norn, a Scandinavian language that survived in Shetland into the 18th century. The pledge was meant to be temporary, and Danish kings tried for generations to buy the islands back, but Scotland formally annexed them in 1472. Norse place names, festivals such as Shetland's Up Helly Aa, and a strong sense of northern identity survive there today.",
            el: "Τα νησιά ήταν νορδικά από την Εποχή των Βίκινγκς, και οι κάτοικοί τους μιλούσαν τη νορν, μια σκανδιναβική γλώσσα που επέζησε στις Σέτλαντ ως τον 18ο αιώνα. Το ενέχυρο υποτίθεται ότι ήταν προσωρινό, και οι Δανοί βασιλείς προσπάθησαν επί γενιές να εξαγοράσουν τα νησιά, αλλά η Σκωτία τα προσάρτησε επίσημα το 1472. Νορδικά τοπωνύμια, γιορτές όπως το Απ Χέλι Άα των Σέτλαντ και μια έντονη αίσθηση βόρειας ταυτότητας επιβιώνουν εκεί ως σήμερα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1471,
      era: {
        en: "Kalmar Union",
        el: "Ένωση του Κάλμαρ"
      },
      events: [
        {
          title: {
            en: "The Battle of Brunkeberg",
            el: "Η μάχη του Μπρούνκεμπεργκ"
          },
          description: {
            en: "The Swedish regent Sten Sture the Elder defeats Christian I outside Stockholm, keeping Sweden effectively independent of the union for decades.",
            el: "Ο Σουηδός αντιβασιλέας Στεν Στούρε ο Πρεσβύτερος νικά τον Χριστιανό Α΄ έξω από τη Στοκχόλμη, κρατώντας τη Σουηδία ουσιαστικά ανεξάρτητη από την ένωση για δεκαετίες."
          },
          extendedDescription: {
            en: "Christian was wounded in the mouth and lost several teeth. To celebrate, Sten Sture commissioned the great sculpture of St George and the Dragon for Stockholm's cathedral — the dragon standing for Denmark. For the next half century the union survived only in name, as the Sture regents governed Sweden and the Danish kings repeatedly tried to reassert their claim.",
            el: "Ο Χριστιανός τραυματίστηκε στο στόμα και έχασε αρκετά δόντια. Για να γιορτάσει, ο Στεν Στούρε παρήγγειλε το μεγάλο γλυπτό του Αγίου Γεωργίου και του Δράκου για τον καθεδρικό ναό της Στοκχόλμης — με τον δράκο να συμβολίζει τη Δανία. Τον επόμενο μισό αιώνα η ένωση επιβίωνε μόνο κατ' όνομα, καθώς οι αντιβασιλείς Στούρε κυβερνούσαν τη Σουηδία και οι Δανοί βασιλείς προσπαθούσαν ξανά και ξανά να επιβάλουν τις αξιώσεις τους."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Stockholm%2C_Saint_George_and_the_Dragon_in_Storkyrkan.jpg?width=1024",
            alt: {
              en: "The sculpture of St George and the Dragon in Stockholm Cathedral, commissioned to commemorate Brunkeberg",
              el: "Το γλυπτό του Αγίου Γεωργίου και του Δράκου στον καθεδρικό ναό της Στοκχόλμης, που παραγγέλθηκε σε ανάμνηση του Μπρούνκεμπεργκ"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1477,
      era: {
        en: "Kalmar Union",
        el: "Ένωση του Κάλμαρ"
      },
      events: [
        {
          title: {
            en: "The first Nordic universities",
            el: "Τα πρώτα πανεπιστήμια του Βορρά"
          },
          description: {
            en: "Uppsala University is founded in 1477, followed by the University of Copenhagen in 1479 — the first universities in Scandinavia.",
            el: "Το Πανεπιστήμιο της Ουψάλας ιδρύεται το 1477 και ακολουθεί το Πανεπιστήμιο της Κοπεγχάγης το 1479 — τα πρώτα πανεπιστήμια της Σκανδιναβίας."
          },
          extendedDescription: {
            en: "Until then, Scandinavian students had to travel to Paris, Prague, Rostock or Leipzig to study. Uppsala's founding was sponsored by Archbishop Jakob Ulvsson and Sten Sture, and it was partly a statement of Swedish independence; Copenhagen's followed as a Danish answer. Both would become great centres of learning — Uppsala later home to Linnaeus and Celsius, Copenhagen to Tycho Brahe and Niels Bohr.",
            el: "Ως τότε, οι Σκανδιναβοί φοιτητές έπρεπε να ταξιδεύουν στο Παρίσι, στην Πράγα, στο Ρόστοκ ή στη Λειψία για να σπουδάσουν. Η ίδρυση της Ουψάλας χρηματοδοτήθηκε από τον αρχιεπίσκοπο Γιάκομπ Ούλβσον και τον Στεν Στούρε και ήταν εν μέρει δήλωση σουηδικής ανεξαρτησίας· της Κοπεγχάγης ακολούθησε ως δανική απάντηση. Και τα δύο θα γίνονταν μεγάλα κέντρα γνώσης — η Ουψάλα αργότερα έδρα του Λινναίου και του Κέλσιου, η Κοπεγχάγη του Τύχο Μπράχε και του Νιλς Μπορ."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1520,
      era: {
        en: "Kalmar Union",
        el: "Ένωση του Κάλμαρ"
      },
      events: [
        {
          title: {
            en: "The Stockholm Bloodbath",
            el: "Το Λουτρό Αίματος της Στοκχόλμης"
          },
          description: {
            en: "Days after his coronation as king of Sweden, Christian II has some eighty nobles, bishops and burghers who had opposed him beheaded in Stockholm's great square.",
            el: "Λίγες μέρες μετά τη στέψη του ως βασιλιά της Σουηδίας, ο Χριστιανός Β΄ βάζει να αποκεφαλίσουν στη μεγάλη πλατεία της Στοκχόλμης περίπου ογδόντα ευγενείς, επισκόπους και αστούς που του είχαν αντισταθεί."
          },
          extendedDescription: {
            en: "Christian II had conquered Sweden after the regent Sten Sture the Younger was mortally wounded. At a feast in November 1520 he promised an amnesty, then had his former opponents tried as heretics and executed over two days. Among the dead was Erik Johansson Vasa. Rather than crush Swedish resistance, the massacre ignited it — led by Erik's son, the young nobleman Gustav Vasa.",
            el: "Ο Χριστιανός Β΄ είχε κατακτήσει τη Σουηδία αφού ο αντιβασιλέας Στεν Στούρε ο Νεότερος τραυματίστηκε θανάσιμα. Σε ένα γεύμα τον Νοέμβριο του 1520 υποσχέθηκε αμνηστία, και έπειτα έβαλε να δικαστούν οι πρώην αντίπαλοί του ως αιρετικοί και να εκτελεστούν μέσα σε δύο μέρες. Ανάμεσα στους νεκρούς ήταν ο Έρικ Γιοχάνσον Βάσα. Αντί να συντρίψει τη σουηδική αντίσταση, η σφαγή την πυροδότησε — με επικεφαλής τον γιο του Έρικ, τον νεαρό ευγενή Γουστάβο Βάσα."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Stockholm_Bloodbath.jpg?width=1024",
            alt: {
              en: "A coloured copy of the 16th-century woodcut depicting the executions of the Stockholm Bloodbath",
              el: "Χρωματισμένο αντίγραφο της ξυλογραφίας του 16ου αιώνα που απεικονίζει τις εκτελέσεις του Λουτρού Αίματος της Στοκχόλμης"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1523,
      era: {
        en: "Kalmar Union",
        el: "Ένωση του Κάλμαρ"
      },
      events: [
        {
          title: {
            en: "Gustav Vasa, king of Sweden",
            el: "Ο Γουστάβος Βάσα, βασιλιάς της Σουηδίας"
          },
          description: {
            en: "After a two-year war of liberation begun among the peasants of Dalarna, Gustav Vasa is elected king of Sweden on 6 June 1523, ending the Kalmar Union.",
            el: "Μετά από έναν διετή απελευθερωτικό πόλεμο που ξεκίνησε ανάμεσα στους αγρότες της Νταλαρνα, ο Γουστάβος Βάσα εκλέγεται βασιλιάς της Σουηδίας στις 6 Ιουνίου 1523, θέτοντας τέλος στην Ένωση του Κάλμαρ."
          },
          extendedDescription: {
            en: "Legend tells how Gustav, fleeing Danish soldiers on skis, was overtaken by two men from Mora who persuaded him to return and lead the revolt — an escape commemorated today by the Vasaloppet, the world's oldest and largest cross-country ski race. With help from Lübeck, his forces took Stockholm. 6 June is now Sweden's National Day. That same year Christian II was deposed in Denmark, and Norway remained bound to Denmark alone.",
            el: "Ο θρύλος λέει ότι ο Γουστάβος, καθώς έφευγε με χιονοπέδιλα από Δανούς στρατιώτες, τον πρόλαβαν δύο άνδρες από τη Μόρα και τον έπεισαν να επιστρέψει και να ηγηθεί της εξέγερσης — μια διαφυγή που τιμά σήμερα το Βάσαλοπετ, ο αρχαιότερος και μεγαλύτερος αγώνας σκι αντοχής στον κόσμο. Με τη βοήθεια του Λύμπεκ, οι δυνάμεις του κατέλαβαν τη Στοκχόλμη. Η 6η Ιουνίου είναι σήμερα η Εθνική Ημέρα της Σουηδίας. Την ίδια χρονιά ο Χριστιανός Β΄ εκθρονίστηκε στη Δανία, και η Νορβηγία έμεινε δεμένη μόνο με τη Δανία."
          },
          category: "political"
        }
      ]
    }
  ]
} satisfies PeriodDefinition;
