/** Reformation & Sweden's Age of Greatness — Μεταρρύθμιση & η Εποχή Μεγαλείου της Σουηδίας · Vikings & Scandinavia */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const REFORMATION_GREAT_POWER = {
  id: "reformation-great-power" as const,
  label: {
    en: "Reformation & Age of Greatness",
    el: "Μεταρρύθμιση & Εποχή Μεγαλείου"
  },
  supertitle: {
    en: "Early Modern Scandinavia",
    el: "Πρώιμη Νεότερη Σκανδιναβία"
  },
  title: {
    en: "Lutheran Kings & Warrior Empires: Scandinavia 1523-1721",
    el: "Λουθηρανοί Βασιλείς & Πολεμικές Αυτοκρατορίες: η Σκανδιναβία 1523-1721"
  },
  subtitle: {
    en: "The Reformation swept away the Catholic Church in the North and made its kings masters of church and state. Then Denmark–Norway and Sweden fought for mastery of the Baltic in war after war. Under Gustavus Adolphus and his heirs, Sweden rose to be a great European power — marching over frozen seas and deep into Germany, Poland and Russia — until Charles XII's defeat at Poltava brought its age of greatness to an end. Slide across two centuries of faith, war and empire.",
    el: "Η Μεταρρύθμιση σάρωσε την Καθολική Εκκλησία στον Βορρά και έκανε τους βασιλείς του κυρίους της Εκκλησίας και του κράτους. Έπειτα η Δανία–Νορβηγία και η Σουηδία πολέμησαν για την κυριαρχία στη Βαλτική σε πόλεμο μετά από πόλεμο. Υπό τον Γουσταύο Αδόλφο και τους διαδόχους του, η Σουηδία αναδείχθηκε σε μεγάλη ευρωπαϊκή δύναμη — βαδίζοντας πάνω σε παγωμένες θάλασσες και βαθιά μέσα στη Γερμανία, την Πολωνία και τη Ρωσία — ώσπου η ήττα του Καρόλου ΙΒ΄ στην Πολτάβα έθεσε τέλος στην εποχή μεγαλείου της. Μετακινηθείτε σε δύο αιώνες πίστης, πολέμου και αυτοκρατορίας."
  },
  menuDescription: {
    en: "The Lutheran Reformation, the Danish–Swedish wars, and Sweden's century as a great power.",
    el: "Η Λουθηρανική Μεταρρύθμιση, οι δανοσουηδικοί πόλεμοι και ο αιώνας της Σουηδίας ως μεγάλης δύναμης."
  },
  footerLabel: {
    en: "Reformation & Great Power · 1523-1721",
    el: "Μεταρρύθμιση & Μεγάλη Δύναμη · 1523-1721"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Reformation & Sweden's Age of Greatness",
    el: "Μεταρρύθμιση & η Εποχή Μεγαλείου της Σουηδίας"
  },
  theme: THEMES.azure,
  timeline: [
    {
      year: 1527,
      era: {
        en: "Reformation",
        el: "Μεταρρύθμιση"
      },
      events: [
        {
          title: {
            en: "Gustav Vasa breaks with Rome",
            el: "Ο Γουστάβος Βάσα ρήγνυται με τη Ρώμη"
          },
          description: {
            en: "At the Riksdag of Västerås, Gustav Vasa threatens to abdicate unless the church's lands and wealth are handed to the crown; the estates give way.",
            el: "Στο Ρίκσνταγκ του Βέστερος, ο Γουστάβος Βάσα απειλεί να παραιτηθεί αν η γη και ο πλούτος της Εκκλησίας δεν περάσουν στο στέμμα· οι τάξεις υποχωρούν."
          },
          extendedDescription: {
            en: "Gustav needed money to repay his debts to Lübeck, and the church owned a fifth of Sweden's land. Västerås placed the church under royal control and allowed Lutheran preaching. The brothers Olaus and Laurentius Petri, who had studied at Wittenberg, led the Reformation, and in 1541 the Gustav Vasa Bible gave Swedes the scriptures in their own language, shaping the modern Swedish tongue.",
            el: "Ο Γουστάβος χρειαζόταν χρήματα για να αποπληρώσει τα χρέη του στο Λύμπεκ, και η Εκκλησία κατείχε το ένα πέμπτο της γης της Σουηδίας. Το Βέστερος έθεσε την Εκκλησία υπό βασιλικό έλεγχο και επέτρεψε το λουθηρανικό κήρυγμα. Οι αδελφοί Όλαους και Λαουρέντιους Πέτρι, που είχαν σπουδάσει στη Βιτεμβέργη, ηγήθηκαν της Μεταρρύθμισης, και το 1541 η Βίβλος του Γουσταύου Βάσα έδωσε στους Σουηδούς τις Γραφές στη γλώσσα τους, διαμορφώνοντας τη σύγχρονη σουηδική."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1536,
      era: {
        en: "Reformation",
        el: "Μεταρρύθμιση"
      },
      events: [
        {
          title: {
            en: "Denmark–Norway turns Lutheran",
            el: "Η Δανία–Νορβηγία γίνεται λουθηρανική"
          },
          description: {
            en: "After winning the civil war known as the Count's Feud, Christian III arrests the Catholic bishops and makes Lutheranism the state religion of Denmark and Norway.",
            el: "Αφού κερδίζει τον εμφύλιο πόλεμο γνωστό ως Διαμάχη του Κόμη, ο Χριστιανός Γ΄ συλλαμβάνει τους καθολικούς επισκόπους και κάνει τον λουθηρανισμό επίσημη θρησκεία της Δανίας και της Νορβηγίας."
          },
          extendedDescription: {
            en: "The confiscated church estates made the crown the largest landowner in the realm. Norway paid a heavy price: its last Catholic archbishop, Olav Engelbrektsson, had backed the losing side and fled, and in 1537 Norway's own council was abolished. Christian III declared that Norway would henceforth be a part of the Danish crown 'like Jutland or Funen' — the beginning of what Norwegians later called the 'four-hundred-year night'.",
            el: "Τα κατασχεμένα εκκλησιαστικά κτήματα έκαναν το στέμμα τον μεγαλύτερο γαιοκτήμονα του κράτους. Η Νορβηγία πλήρωσε βαρύ τίμημα: ο τελευταίος καθολικός αρχιεπίσκοπός της, ο Όλαβ Ένγκελμπρεκτσον, είχε υποστηρίξει τους ηττημένους και διέφυγε, και το 1537 το δικό της συμβούλιο καταργήθηκε. Ο Χριστιανός Γ΄ δήλωσε ότι η Νορβηγία θα ήταν στο εξής μέρος του δανικού στέμματος «όπως η Γιουτλάνδη ή η Φιονία» — η αρχή αυτού που οι Νορβηγοί αργότερα ονόμασαν «νύχτα των τετρακοσίων ετών»."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1550,
      era: {
        en: "Reformation",
        el: "Μεταρρύθμιση"
      },
      events: [
        {
          title: {
            en: "The last Catholic bishop of Iceland",
            el: "Ο τελευταίος καθολικός επίσκοπος της Ισλανδίας"
          },
          description: {
            en: "Jón Arason, bishop of Hólar, who had led resistance to the Lutheran Reformation in Iceland, is beheaded with two of his sons at Skálholt.",
            el: "Ο Γιον Άρασον, επίσκοπος του Χόλαρ, που είχε ηγηθεί της αντίστασης στη Λουθηρανική Μεταρρύθμιση στην Ισλανδία, αποκεφαλίζεται μαζί με δύο γιους του στο Σκάλχολτ."
          },
          extendedDescription: {
            en: "Jón Arason — a Catholic bishop with children, as was common in Iceland — had fought the Danish crown's new church order for years and even captured his Lutheran rival. His execution without a proper trial broke the last resistance, and Iceland became Lutheran. He is remembered as a national hero who defended Icelandic rights against Denmark. He also brought the first printing press to Iceland, around 1530.",
            el: "Ο Γιον Άρασον — καθολικός επίσκοπος με παιδιά, όπως ήταν σύνηθες στην Ισλανδία — είχε πολεμήσει επί χρόνια τη νέα εκκλησιαστική τάξη του δανικού στέμματος και είχε αιχμαλωτίσει ακόμη και τον λουθηρανό αντίπαλό του. Η εκτέλεσή του χωρίς κανονική δίκη έσπασε την τελευταία αντίσταση, και η Ισλανδία έγινε λουθηρανική. Τον θυμούνται ως εθνικό ήρωα που υπερασπίστηκε τα δικαιώματα των Ισλανδών απέναντι στη Δανία. Έφερε επίσης το πρώτο τυπογραφείο στην Ισλανδία, γύρω στο 1530."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1563,
      era: {
        en: "Nordic Wars",
        el: "Βόρειοι Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "The Northern Seven Years' War",
            el: "Ο Βόρειος Επταετής Πόλεμος"
          },
          description: {
            en: "Denmark–Norway and Sweden go to war over dominance in the Baltic and the use of the Three Crowns symbol; seven years of bloody stalemate follow.",
            el: "Η Δανία–Νορβηγία και η Σουηδία πολεμούν για την κυριαρχία στη Βαλτική και τη χρήση του συμβόλου των Τριών Στεμμάτων· ακολουθούν επτά χρόνια αιματηρού αδιεξόδου."
          },
          extendedDescription: {
            en: "The Danish king Frederick II hoped to restore the Kalmar Union, while Sweden's mentally unstable Eric XIV sought to break Denmark's grip on western trade routes. The war devastated border provinces and saw large naval battles off Gotland and Öland, where the great Swedish warship Mars sank. The Peace of Stettin in 1570 changed little, but it began a cycle of Danish–Swedish wars that would last 150 years.",
            el: "Ο Δανός βασιλιάς Φρειδερίκος Β΄ ήλπιζε να αποκαταστήσει την Ένωση του Κάλμαρ, ενώ ο ψυχικά ασταθής Έρικ ΙΔ΄ της Σουηδίας επιδίωκε να σπάσει τον έλεγχο της Δανίας στους δυτικούς εμπορικούς δρόμους. Ο πόλεμος ερήμωσε τις παραμεθόριες επαρχίες και είδε μεγάλες ναυμαχίες στα ανοιχτά του Γκότλαντ και του Έλαντ, όπου βυθίστηκε το μεγάλο σουηδικό πολεμικό πλοίο Μαρς. Η Ειρήνη του Στετίνου το 1570 άλλαξε ελάχιστα, αλλά ξεκίνησε έναν κύκλο δανοσουηδικών πολέμων που θα κρατούσε 150 χρόνια."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1611,
      era: {
        en: "Age of Greatness",
        el: "Εποχή Μεγαλείου"
      },
      events: [
        {
          title: {
            en: "Gustavus Adolphus takes the throne",
            el: "Ο Γουσταύος Αδόλφος ανεβαίνει στον θρόνο"
          },
          description: {
            en: "Sixteen-year-old Gustavus Adolphus becomes king of Sweden in the middle of wars with Denmark, Russia and Poland.",
            el: "Ο δεκαεξάχρονος Γουσταύος Αδόλφος γίνεται βασιλιάς της Σουηδίας εν μέσω πολέμων με τη Δανία, τη Ρωσία και την Πολωνία."
          },
          extendedDescription: {
            en: "With his chancellor Axel Oxenstierna, Gustavus Adolphus modernised the Swedish state: an efficient central government, a national conscripted army, and new tactics that combined mobile field artillery, disciplined musketeers and shock cavalry. He founded Gothenburg and a string of schools, and made peace with Denmark and Russia to concentrate on Poland — and then on Germany.",
            el: "Με τον καγκελάριό του Άξελ Όξενστιερνα, ο Γουσταύος Αδόλφος εκσυγχρόνισε το σουηδικό κράτος: μια αποτελεσματική κεντρική διοίκηση, έναν εθνικό στρατό από στρατευσίμους και νέες τακτικές που συνδύαζαν ευκίνητο πυροβολικό πεδίου, πειθαρχημένους μουσκετοφόρους και ιππικό κρούσης. Ίδρυσε το Γκέτεμποργκ και μια σειρά από σχολεία, και συνήψε ειρήνη με τη Δανία και τη Ρωσία για να επικεντρωθεί στην Πολωνία — και έπειτα στη Γερμανία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1628,
      era: {
        en: "Age of Greatness",
        el: "Εποχή Μεγαλείου"
      },
      events: [
        {
          title: {
            en: "The Vasa sinks",
            el: "Το Βάσα βυθίζεται"
          },
          description: {
            en: "The mighty new warship Vasa, pride of the Swedish navy, heels over and sinks in Stockholm harbour less than a nautical mile into her maiden voyage.",
            el: "Το πανίσχυρο νέο πολεμικό πλοίο Βάσα, το καμάρι του σουηδικού ναυτικού, γέρνει και βυθίζεται στο λιμάνι της Στοκχόλμης λιγότερο από ένα ναυτικό μίλι μετά την έναρξη του παρθενικού του ταξιδιού."
          },
          extendedDescription: {
            en: "Built top-heavy with two gun decks and 64 cannon, the Vasa capsized in a light gust on 10 August 1628 as crowds watched from the shore. Around thirty people died. The cold, brackish water of the Baltic, free of shipworms, preserved her almost intact. She was raised in 1961 and is now the centrepiece of Stockholm's Vasa Museum — the only almost fully intact 17th-century ship in the world.",
            el: "Κατασκευασμένο βαρύ στο πάνω μέρος, με δύο καταστρώματα πυροβόλων και 64 κανόνια, το Βάσα ανατράπηκε από μια ελαφριά ριπή ανέμου στις 10 Αυγούστου 1628, ενώ πλήθη παρακολουθούσαν από την ακτή. Περίπου τριάντα άνθρωποι σκοτώθηκαν. Τα κρύα, υφάλμυρα νερά της Βαλτικής, χωρίς σκουλήκια του ξύλου, το διατήρησαν σχεδόν ανέπαφο. Ανελκύστηκε το 1961 και είναι σήμερα το κεντρικό έκθεμα του Μουσείου Βάσα της Στοκχόλμης — το μόνο σχεδόν ακέραιο πλοίο του 17ου αιώνα στον κόσμο."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Stern_of_the_Vasa_ship%2C_Vasa_Museum%2C_Stockholm%2C_Sweden_julesvernex2.jpg?width=1024",
            alt: {
              en: "The richly carved stern of the warship Vasa in the Vasa Museum, Stockholm",
              el: "Η πλούσια σκαλισμένη πρύμνη του πολεμικού πλοίου Βάσα στο Μουσείο Βάσα της Στοκχόλμης"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1632,
      era: {
        en: "Age of Greatness",
        el: "Εποχή Μεγαλείου"
      },
      events: [
        {
          title: {
            en: "The Lion of the North falls at Lützen",
            el: "Ο Λέων του Βορρά πέφτει στο Λύτσεν"
          },
          description: {
            en: "Gustavus Adolphus, who had entered the Thirty Years' War in 1630 to save the Protestant cause, is killed leading a cavalry charge in the fog at Lützen — though his army wins the battle.",
            el: "Ο Γουσταύος Αδόλφος, που είχε μπει στον Τριακονταετή Πόλεμο το 1630 για να σώσει την προτεσταντική υπόθεση, σκοτώνεται οδηγώντας μια έφοδο ιππικού μέσα στην ομίχλη στο Λύτσεν — αν και ο στρατός του κερδίζει τη μάχη."
          },
          extendedDescription: {
            en: "In two years Gustavus had swept across Germany, crushing the imperial army at Breitenfeld in 1631 and marching as far as Munich. His death left his six-year-old daughter Christina on the throne, but Oxenstierna kept Sweden in the war. At the Peace of Westphalia in 1648 Sweden won Western Pomerania, Wismar and Bremen-Verden, gaining a foothold in the Holy Roman Empire and a seat among Europe's great powers.",
            el: "Μέσα σε δύο χρόνια ο Γουσταύος είχε σαρώσει τη Γερμανία, συντρίβοντας τον αυτοκρατορικό στρατό στο Μπράιτενφελντ το 1631 και βαδίζοντας ως το Μόναχο. Ο θάνατός του άφησε στον θρόνο την εξάχρονη κόρη του Χριστίνα, αλλά ο Όξενστιερνα κράτησε τη Σουηδία στον πόλεμο. Στην Ειρήνη της Βεστφαλίας το 1648 η Σουηδία κέρδισε τη Δυτική Πομερανία, το Βίσμαρ και τη Βρέμη-Φέρντεν, αποκτώντας ερείσμα στην Αγία Ρωμαϊκή Αυτοκρατορία και θέση ανάμεσα στις μεγάλες δυνάμεις της Ευρώπης."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Death_of_King_Gustav_II_Adolf_of_Sweden_at_the_Battle_of_L%C3%BCtzen%2C_1855%2C_by_Carl_Wahlbom%2C_Nationalmuseum%2C_Stockholm%2C_Sweden.jpg?width=1024",
            alt: {
              en: "Carl Wahlbom's 1855 painting of the death of Gustavus Adolphus in a cavalry mêlée at Lützen",
              el: "Πίνακας του Καρλ Βάλμπομ (1855) με τον θάνατο του Γουσταύου Αδόλφου μέσα σε συμπλοκή ιππικού στο Λύτσεν"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1638,
      era: {
        en: "Age of Greatness",
        el: "Εποχή Μεγαλείου"
      },
      events: [
        {
          title: {
            en: "New Sweden in America",
            el: "Η Νέα Σουηδία στην Αμερική"
          },
          description: {
            en: "Swedish and Finnish colonists found Fort Christina, on the site of today's Wilmington, Delaware — the colony of New Sweden.",
            el: "Σουηδοί και Φινλανδοί άποικοι ιδρύουν το Φρούριο Χριστίνα, στη θέση του σημερινού Γουίλμινγκτον του Ντέλαγουερ — την αποικία της Νέας Σουηδίας."
          },
          extendedDescription: {
            en: "The colony traded in furs and tobacco along the Delaware River and never had more than a few hundred settlers. It was captured by the Dutch of New Amsterdam in 1655. Its lasting legacy was surprising: Finnish settlers are thought to have introduced the log cabin to North America, which became a symbol of the American frontier.",
            el: "Η αποικία εμπορευόταν γούνες και καπνό κατά μήκος του ποταμού Ντέλαγουερ και ποτέ δεν είχε περισσότερους από μερικές εκατοντάδες αποίκους. Καταλήφθηκε από τους Ολλανδούς του Νέου Άμστερνταμ το 1655. Η διαρκής κληρονομιά της ήταν απρόσμενη: πιστεύεται ότι οι Φινλανδοί άποικοι εισήγαγαν στη Βόρεια Αμερική την ξύλινη καλύβα από κορμούς, που έγινε σύμβολο της αμερικανικής μεθορίου."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1658,
      era: {
        en: "Age of Greatness",
        el: "Εποχή Μεγαλείου"
      },
      events: [
        {
          title: {
            en: "The march across the frozen Belts",
            el: "Η πορεία πάνω στους παγωμένους πορθμούς"
          },
          description: {
            en: "In a bitter winter, Charles X Gustav marches his army across the frozen straits of the Little and Great Belt to Zealand, forcing Denmark to accept the Treaty of Roskilde.",
            el: "Σε έναν σκληρό χειμώνα, ο Κάρολος Ι΄ Γουστάβος οδηγεί τον στρατό του πάνω στους παγωμένους πορθμούς του Μικρού και του Μεγάλου Μπελτ ως τη Ζηλανδία, αναγκάζοντας τη Δανία να δεχτεί τη Συνθήκη του Ρόσκιλε."
          },
          extendedDescription: {
            en: "Some Swedish cavalry went through the ice and drowned, but the gamble succeeded. Denmark ceded Scania, Halland, Blekinge, Bornholm, Bohuslän and Trøndelag. Charles soon broke the peace to try to conquer Denmark entirely, but Copenhagen held out; in 1660 Bornholm and Trøndelag were returned. The southern provinces, however, became permanently Swedish, and the Øresund became a border between the two kingdoms.",
            el: "Ορισμένοι Σουηδοί ιππείς έπεσαν μέσα από τον πάγο και πνίγηκαν, αλλά το ρίσκο πέτυχε. Η Δανία παραχώρησε τη Σκανία, το Χάλαντ, το Μπλέκινγκε, το Μπόρνχολμ, το Μπούχουσλεν και το Τρέντελαγκ. Ο Κάρολος σύντομα παραβίασε την ειρήνη για να κατακτήσει ολόκληρη τη Δανία, αλλά η Κοπεγχάγη άντεξε· το 1660 το Μπόρνχολμ και το Τρέντελαγκ επιστράφηκαν. Οι νότιες επαρχίες, ωστόσο, έγιναν μόνιμα σουηδικές, και το Έρεσουντ έγινε σύνορο ανάμεσα στα δύο βασίλεια."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1660,
      era: {
        en: "Age of Absolutism",
        el: "Εποχή της Απολυταρχίας"
      },
      events: [
        {
          title: {
            en: "Absolute monarchy in Denmark–Norway",
            el: "Απόλυτη μοναρχία στη Δανία–Νορβηγία"
          },
          description: {
            en: "After the siege of Copenhagen, the burghers and clergy join King Frederick III to break the power of the nobility and make the crown hereditary and absolute.",
            el: "Μετά την πολιορκία της Κοπεγχάγης, οι αστοί και ο κλήρος συμπαρατάσσονται με τον βασιλιά Φρειδερίκο Γ΄ για να σπάσουν την ισχύ των ευγενών και να κάνουν το στέμμα κληρονομικό και απόλυτο."
          },
          extendedDescription: {
            en: "The Royal Law of 1665 — the only written constitution of an absolute monarchy in Europe — declared that the king was answerable to God alone and above all human law. It swept away the old coronation charters and the council of nobles. Paradoxically, absolutism opened state service to commoners and created an efficient bureaucracy; it lasted in Denmark until 1849.",
            el: "Ο Βασιλικός Νόμος του 1665 — το μόνο γραπτό σύνταγμα απόλυτης μοναρχίας στην Ευρώπη — διακήρυσσε ότι ο βασιλιάς λογοδοτούσε μόνο στον Θεό και ήταν πάνω από κάθε ανθρώπινο νόμο. Σάρωσε τους παλιούς χάρτες στέψης και το συμβούλιο των ευγενών. Παραδόξως, η απολυταρχία άνοιξε την κρατική υπηρεσία στους μη ευγενείς και δημιούργησε μια αποτελεσματική γραφειοκρατία· διήρκεσε στη Δανία ως το 1849."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1700,
      era: {
        en: "Great Northern War",
        el: "Μεγάλος Βόρειος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Charles XII's triumph at Narva",
            el: "Ο θρίαμβος του Καρόλου ΙΒ΄ στη Νάρβα"
          },
          description: {
            en: "Attacked by Denmark, Saxony–Poland and Russia, eighteen-year-old Charles XII knocks Denmark out of the war and then routs a much larger Russian army at Narva in a snowstorm.",
            el: "Δεχόμενος επίθεση από τη Δανία, τη Σαξονία–Πολωνία και τη Ρωσία, ο δεκαοκτάχρονος Κάρολος ΙΒ΄ βγάζει τη Δανία από τον πόλεμο και έπειτα κατατροπώνει έναν πολύ μεγαλύτερο ρωσικό στρατό στη Νάρβα μέσα σε χιονοθύελλα."
          },
          extendedDescription: {
            en: "The allies had hoped to carve up Sweden's empire while its king was young and untested. Instead, Charles landed near Copenhagen and forced Denmark to make peace, then crossed the Baltic and, with some 10,000 men, attacked Peter the Great's army of over 30,000, the snow blowing into the Russians' faces. The victory made Charles famous across Europe, but he then spent years campaigning in Poland, giving Peter time to rebuild.",
            el: "Οι σύμμαχοι ήλπιζαν να μοιράσουν την αυτοκρατορία της Σουηδίας όσο ο βασιλιάς της ήταν νέος και άπειρος. Αντίθετα, ο Κάρολος αποβιβάστηκε κοντά στην Κοπεγχάγη και ανάγκασε τη Δανία να συνάψει ειρήνη, έπειτα διέσχισε τη Βαλτική και, με περίπου 10.000 άνδρες, επιτέθηκε στον στρατό του Μεγάλου Πέτρου που ξεπερνούσε τους 30.000, με το χιόνι να φυσά στα πρόσωπα των Ρώσων. Η νίκη έκανε τον Κάρολο διάσημο σε όλη την Ευρώπη, αλλά έπειτα πέρασε χρόνια εκστρατεύοντας στην Πολωνία, δίνοντας στον Πέτρο χρόνο να ανασυνταχθεί."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1709,
      era: {
        en: "Great Northern War",
        el: "Μεγάλος Βόρειος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Disaster at Poltava",
            el: "Η καταστροφή της Πολτάβα"
          },
          description: {
            en: "After a march deep into Ukraine through the terrible winter of 1708–09, Charles XII's army is destroyed by Peter the Great at Poltava; the king flees to the Ottoman Empire.",
            el: "Μετά από μια πορεία βαθιά μέσα στην Ουκρανία στον τρομερό χειμώνα του 1708–09, ο στρατός του Καρόλου ΙΒ΄ καταστρέφεται από τον Μέγα Πέτρο στην Πολτάβα· ο βασιλιάς καταφεύγει στην Οθωμανική Αυτοκρατορία."
          },
          extendedDescription: {
            en: "Charles, wounded in the foot before the battle, had to direct it from a litter. Most of the surviving army surrendered days later at Perevolochna. The king spent five years as an increasingly unwelcome guest of the sultan at Bender, even fighting off Ottoman troops in a skirmish in 1713. Poltava marked the moment Russia replaced Sweden as the dominant power of northern Europe.",
            el: "Ο Κάρολος, τραυματισμένος στο πόδι πριν από τη μάχη, αναγκάστηκε να τη διευθύνει από φορείο. Το μεγαλύτερο μέρος του στρατού που επέζησε παραδόθηκε λίγες μέρες αργότερα στην Περεβολότσνα. Ο βασιλιάς πέρασε πέντε χρόνια ως όλο και λιγότερο ευπρόσδεκτος φιλοξενούμενος του σουλτάνου στο Μπέντερ, φτάνοντας μάλιστα να αποκρούσει οθωμανικά στρατεύματα σε μια συμπλοκή το 1713. Η Πολτάβα σηματοδότησε τη στιγμή που η Ρωσία αντικατέστησε τη Σουηδία ως την κυρίαρχη δύναμη της βόρειας Ευρώπης."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1718,
      era: {
        en: "Great Northern War",
        el: "Μεγάλος Βόρειος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Charles XII killed at Fredriksten",
            el: "Ο Κάρολος ΙΒ΄ σκοτώνεται στο Φρέντρικστεν"
          },
          description: {
            en: "While besieging the Norwegian fortress of Fredriksten, Charles XII is killed by a bullet to the head as he inspects the siege trenches at night.",
            el: "Ενώ πολιορκεί το νορβηγικό φρούριο του Φρέντρικστεν, ο Κάρολος ΙΒ΄ σκοτώνεται από μια σφαίρα στο κεφάλι καθώς επιθεωρεί τα χαρακώματα της πολιορκίας τη νύχτα."
          },
          extendedDescription: {
            en: "Whether the shot came from the Norwegian defenders or from one of his own men has been debated ever since; his remains have been exhumed several times without settling the question. Charles had no children, and with his death Swedish absolutism collapsed. The exhausted country turned to a new constitution that gave power to the Riksdag.",
            el: "Το αν η βολή ήρθε από τους Νορβηγούς υπερασπιστές ή από κάποιον δικό του άνθρωπο συζητείται από τότε· τα λείψανά του έχουν εκταφεί αρκετές φορές χωρίς να λυθεί το ζήτημα. Ο Κάρολος δεν είχε παιδιά, και με τον θάνατό του η σουηδική απολυταρχία κατέρρευσε. Η εξαντλημένη χώρα στράφηκε σε ένα νέο σύνταγμα που έδινε την εξουσία στο Ρίκσνταγκ."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Gustaf_Cederstr%C3%B6m_-_Bringing_Home_the_Body_of_King_Karl_XII_of_Sweden_-_Google_Art_Project.jpg?width=1024",
            alt: {
              en: "Gustaf Cederström's painting of Swedish soldiers carrying the body of Charles XII home through the snow",
              el: "Πίνακας του Γκούσταφ Σέντερστρεμ με Σουηδούς στρατιώτες να μεταφέρουν τη σορό του Καρόλου ΙΒ΄ μέσα στο χιόνι"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1721,
      era: {
        en: "Great Northern War",
        el: "Μεγάλος Βόρειος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "The Treaty of Nystad",
            el: "Η Συνθήκη του Νίσταντ"
          },
          description: {
            en: "Sweden makes peace with Russia, ceding Livonia, Estonia, Ingria and part of Karelia; its age as a great power is over.",
            el: "Η Σουηδία συνάπτει ειρήνη με τη Ρωσία, παραχωρώντας τη Λιβονία, την Εσθονία, την Ινγκρία και μέρος της Καρελίας· η εποχή της ως μεγάλης δύναμης έχει τελειώσει."
          },
          extendedDescription: {
            en: "Peter the Great celebrated by taking the title of emperor. On the land Sweden had lost in Ingria, he had already built his new capital, St Petersburg, as Russia's 'window on Europe'. Sweden kept Finland, which Russian troops had occupied during the 'Great Wrath', and its remaining German territories — but it would never again be able to challenge Russia for mastery of the Baltic.",
            el: "Ο Μέγας Πέτρος γιόρτασε παίρνοντας τον τίτλο του αυτοκράτορα. Στα εδάφη της Ινγκρίας που είχε χάσει η Σουηδία, είχε ήδη χτίσει τη νέα του πρωτεύουσα, την Αγία Πετρούπολη, ως το «παράθυρο της Ρωσίας στην Ευρώπη». Η Σουηδία κράτησε τη Φινλανδία, την οποία τα ρωσικά στρατεύματα είχαν καταλάβει κατά τη «Μεγάλη Οργή», και τα υπόλοιπα γερμανικά εδάφη της — αλλά δεν θα μπορούσε ποτέ ξανά να αμφισβητήσει την κυριαρχία της Ρωσίας στη Βαλτική."
          },
          category: "political"
        }
      ]
    }
  ]
} satisfies PeriodDefinition;
