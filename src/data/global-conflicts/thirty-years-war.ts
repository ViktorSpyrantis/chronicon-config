/** Thirty Years' War — Τριακονταετής Πόλεμος · Global Conflicts */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const THIRTY_YEARS_WAR = {
  id: "thirty-years-war" as const,
  label: {
    en: "Thirty Years' War",
    el: "Τριακονταετής Πόλεμος"
  },
  supertitle: {
    en: "Bellum Tricennale",
    el: "Ο Θρησκευτικός Πόλεμος"
  },
  title: {
    en: "The Thirty Years' War",
    el: "Ο Τριακονταετής Πόλεμος"
  },
  subtitle: {
    en: "From the Defenestration of Prague and the Bohemian Revolt through the Danish and Swedish interventions, the sack of Magdeburg, Breitenfeld and the death of Gustavus Adolphus at Lützen, the French entry and Rocroi, to the Peace of Westphalia that ended the wars of religion and founded the modern order of sovereign states. Slide across the decades of the war that killed a third of Germany and remade Europe.",
    el: "Από την Εκπαραθύρωση της Πράγας και τη Βοημική Εξέγερση, μέσα από τις δανικές και σουηδικές επεμβάσεις, τη λεηλασία του Μαγδεβούργου, το Μπράιτενφελντ και τον θάνατο του Γουσταύου Αδόλφου στο Λύτσεν, τη γαλλική είσοδο και το Ροκρουά, ως την Ειρήνη της Βεστφαλίας που τερμάτισε τους θρησκευτικούς πολέμους και θεμελίωσε τη σύγχρονη τάξη των κυρίαρχων κρατών. Μετακινηθείτε ανάμεσα στις δεκαετίες του πολέμου που σκότωσε το ένα τρίτο της Γερμανίας και ξαναέφτιαξε την Ευρώπη."
  },
  menuDescription: {
    en: "Thirty years that bled the Empire, from a window in Prague to the Peace of Westphalia.",
    el: "Τριάντα χρόνια που αιμορράγησαν την Αυτοκρατορία, από ένα παράθυρο στην Πράγα ως την Ειρήνη της Βεστφαλίας."
  },
  footerLabel: {
    en: "Thirty Years' War · 1618-1648",
    el: "Τριακονταετής Πόλεμος · 1618-1648"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Thirty Years' War",
    el: "Ο Τριακονταετής Πόλεμος"
  },
  theme: THEMES.copper,
  timeline: [
    {
      year: 1618,
      month: 5,
      era: {
        en: "The Bohemian Revolt",
        el: "Η Βοημική Εξέγερση"
      },
      events: [
        {
          title: {
            en: "The Defenestration of Prague",
            el: "Η Εκπαραθύρωση της Πράγας"
          },
          description: {
            en: "On 23 May, Protestant nobles hurl two Catholic imperial governors and their secretary from a window of the Hradčany castle in Prague. All three survive the fall — Catholics say by the grace of angels, Protestants by a dung heap. The act of defiance against the Habsburg emperor sets Bohemia in open revolt and lights a fire that will burn for thirty years.",
            el: "Στις 23 Μαΐου, Προτεστάντες ευγενείς πετούν δύο Καθολικούς αυτοκρατορικούς κυβερνήτες και τον γραμματέα τους από ένα παράθυρο του κάστρου Χράντσανι στην Πράγα. Και οι τρεις επιβιώνουν από την πτώση — οι Καθολικοί λένε με τη χάρη αγγέλων, οι Προτεστάντες χάρη σε έναν σωρό κοπριάς. Η πράξη αψηφισίας κατά του Αψβούργου αυτοκράτορα θέτει τη Βοημία σε ανοιχτή εξέγερση και ανάβει μια φωτιά που θα καίει επί τριάντα χρόνια."
          },
          extendedDescription: {
            en: "The revolt was the explosion of tensions left unresolved by the Peace of Augsburg of 1555, which had recognised Lutheranism but not Calvinism and had frozen a confessional balance the Counter-Reformation was determined to overturn. The Bohemian estates deposed Ferdinand of Styria and offered their crown to the Calvinist Elector Palatine, Frederick V — the 'Winter King'. What began as a local rising over religious liberty would draw in every great power of Europe.",
            el: "Η εξέγερση ήταν η έκρηξη εντάσεων που είχε αφήσει άλυτες η Ειρήνη του Άουγκσμπουργκ του 1555, η οποία είχε αναγνωρίσει τον λουθηρανισμό αλλά όχι τον καλβινισμό και είχε παγώσει μια ομολογιακή ισορροπία που η Αντιμεταρρύθμιση ήταν αποφασισμένη να ανατρέψει. Οι βοημικές τάξεις καθαίρεσαν τον Φερδινάνδο της Στυρίας και πρόσφεραν το στέμμα τους στον Καλβινιστή εκλέκτορα του Παλατινάτου, Φρειδερίκο Ε΄ — τον «Χειμωνιάτικο Βασιλιά». Ό,τι άρχισε ως τοπική εξέγερση για τη θρησκευτική ελευθερία θα παρέσυρε κάθε μεγάλη δύναμη της Ευρώπης."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Prager_Fenstersturz_Wahrhafftige_Zeitung_aus_Prag.JPG?width=1024",
            alt: {
              en: "The Defenestration of Prague, 1618",
              el: "Ο δεφενεστρασμός της Πράγας, 1618"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1620,
      month: 11,
      era: {
        en: "White Mountain",
        el: "Λευκό Όρος"
      },
      events: [
        {
          title: {
            en: "The Winter King is broken at White Mountain",
            el: "Ο Χειμωνιάτικος Βασιλιάς συντρίβεται στο Λευκό Όρος"
          },
          description: {
            en: "On 8 November, outside Prague, the Catholic League army under Tilly and the imperial forces crush the Bohemian rebels at the Battle of White Mountain in barely an hour. Frederick V flees into exile; his reign has lasted one winter. The Bohemian nobility is executed or dispossessed, the kingdom forcibly re-Catholicised, and the Habsburg grip on central Europe restored.",
            el: "Στις 8 Νοεμβρίου, έξω από την Πράγα, ο στρατός της Καθολικής Ένωσης υπό τον Τίλλυ και οι αυτοκρατορικές δυνάμεις συντρίβουν τους Βοημούς επαναστάτες στη Μάχη του Λευκού Όρους σε μόλις μία ώρα. Ο Φρειδερίκος Ε΄ διαφεύγει στην εξορία· η βασιλεία του κράτησε έναν χειμώνα. Η βοημική αριστοκρατία εκτελείται ή απαλλοτριώνεται, το βασίλειο επανακαθολικοποιείται βίαια, και η αψβουργική λαβή στην κεντρική Ευρώπη αποκαθίσταται."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1626,
      month: 8,
      era: {
        en: "The Danish War",
        el: "Ο Δανικός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Denmark enters — and Tilly wins at Lutter",
            el: "Η Δανία μπαίνει — και ο Τίλλυ νικά στο Λούττερ"
          },
          description: {
            en: "Alarmed by the Catholic advance into northern Germany, King Christian IV of Denmark intervenes as champion of the Protestant cause. On 27 August at Lutter, Tilly routs the Danish army. Meanwhile the emperor's new generalissimo, the Bohemian entrepreneur Albrecht von Wallenstein, raises a vast private army and sweeps the Protestants from the north. By 1629 the imperial cause is triumphant from the Alps to the Baltic.",
            el: "Ανήσυχος από την καθολική προέλαση στη βόρεια Γερμανία, ο βασιλιάς Χριστιανός Δ΄ της Δανίας επεμβαίνει ως υπέρμαχος της προτεσταντικής υπόθεσης. Στις 27 Αυγούστου στο Λούττερ, ο Τίλλυ κατατροπώνει τον δανικό στρατό. Εν τω μεταξύ ο νέος στρατηγός του αυτοκράτορα, ο Βοημός επιχειρηματίας Άλμπρεχτ φον Βαλενστάιν, σηκώνει έναν τεράστιο ιδιωτικό στρατό και σαρώνει τους Προτεστάντες από τον βορρά. Ως το 1629 η αυτοκρατορική υπόθεση θριαμβεύει από τις Άλπεις ως τη Βαλτική."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1629,
      month: 3,
      era: {
        en: "Edict of Restitution",
        el: "Διάταγμα της Αποκατάστασης"
      },
      events: [
        {
          title: {
            en: "Ferdinand overreaches",
            el: "Ο Φερδινάνδος υπερβαίνει τα όρια"
          },
          description: {
            en: "On 6 March, at the height of his power, Emperor Ferdinand II issues the Edict of Restitution, ordering the return to the Catholic Church of all ecclesiastical lands secularised since 1552. The edict alarms Lutheran and Catholic princes alike, who fear an imperial absolutism that would crush the liberties of the German states. Ferdinand's triumph sows the seeds of his undoing.",
            el: "Στις 6 Μαρτίου, στο απόγειο της δύναμής του, ο αυτοκράτορας Φερδινάνδος Β΄ εκδίδει το Διάταγμα της Αποκατάστασης, διατάζοντας την επιστροφή στην Καθολική Εκκλησία όλων των εκκλησιαστικών κτημάτων που είχαν κοσμικοποιηθεί από το 1552. Το διάταγμα ανησυχεί εξίσου Λουθηρανούς και Καθολικούς ηγεμόνες, που φοβούνται έναν αυτοκρατορικό απολυταρχισμό ικανό να συντρίψει τις ελευθερίες των γερμανικών κρατών. Ο θρίαμβος του Φερδινάνδου σπέρνει τους σπόρους της καταστροφής του."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1631,
      month: 5,
      era: {
        en: "The Sack of Magdeburg",
        el: "Η Λεηλασία του Μαγδεβούργου"
      },
      events: [
        {
          title: {
            en: "Magdeburg burns",
            el: "Το Μαγδεβούργο καίγεται"
          },
          description: {
            en: "On 20 May, after a long siege, Tilly's imperial and Leaguer army storms the Protestant city of Magdeburg. In the sack that follows, fire consumes the city and some 20,000 of its 25,000 inhabitants perish. The atrocity horrifies Protestant Europe and becomes a byword for the war's savagery; 'Magdeburg quarter' enters the language as a synonym for no mercy at all.",
            el: "Στις 20 Μαΐου, μετά από μακρά πολιορκία, ο αυτοκρατορικός στρατός του Τίλλυ και της Ένωσης καταλαμβάνει με έφοδο την προτεσταντική πόλη του Μαγδεβούργου. Στη λεηλασία που ακολουθεί, η φωτιά καταπίνει την πόλη και περίπου 20.000 από τους 25.000 κατοίκους της χάνονται. Η θηριωδία τρομοκρατεί την προτεσταντική Ευρώπη και γίνεται παροιμιώδης για την αγριότητα του πολέμου· η «χάρη του Μαγδεβούργου» μπαίνει στη γλώσσα ως συνώνυμο της παντελούς έλλειψης ελέους."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1631,
      month: 9,
      era: {
        en: "The Lion of the North",
        el: "Ο Λέων του Βορρά"
      },
      events: [
        {
          title: {
            en: "Gustavus Adolphus triumphs at Breitenfeld",
            el: "Ο Γουσταύος Αδόλφος θριαμβεύει στο Μπράιτενφελντ"
          },
          description: {
            en: "King Gustavus Adolphus of Sweden — the 'Lion of the North' — has landed in Pomerania in 1630 with a disciplined, professional army and revolutionary tactics of mobile artillery and combined arms. On 17 September at Breitenfeld, near Leipzig, he annihilates Tilly's hitherto invincible army. It is the first great Protestant victory of the war, and it carries the Swedes deep into Catholic Germany.",
            el: "Ο βασιλιάς Γουσταύος Αδόλφος της Σουηδίας — ο «Λέων του Βορρά» — έχει αποβιβαστεί στην Πομερανία το 1630 με έναν πειθαρχημένο, επαγγελματικό στρατό και επαναστατικές τακτικές κινητού πυροβολικού και συνδυασμένων όπλων. Στις 17 Σεπτεμβρίου στο Μπράιτενφελντ, κοντά στη Λειψία, εκμηδενίζει τον ως τότε αήττητο στρατό του Τίλλυ. Είναι η πρώτη μεγάλη προτεσταντική νίκη του πολέμου, και οδηγεί τους Σουηδούς βαθιά μέσα στην καθολική Γερμανία."
          },
          extendedDescription: {
            en: "Breitenfeld is often called the birth of modern warfare. Gustavus's lighter, more mobile formations, his massed field guns, and his integration of infantry, cavalry, and artillery broke the ponderous Spanish-style squares that had dominated the battlefield for a century. For a year the Swedish king marched almost at will through Germany. His subsidies came from Catholic France: Cardinal Richelieu, pursuing raison d'état, funded the Protestant champion against the Habsburgs.",
            el: "Το Μπράιτενφελντ αποκαλείται συχνά η γέννηση του σύγχρονου πολέμου. Οι ελαφρύτεροι, πιο ευκίνητοι σχηματισμοί του Γουσταύου, τα συγκεντρωμένα πεδινά πυροβόλα του και η ενσωμάτωση πεζικού, ιππικού και πυροβολικού έσπασαν τα βαριά ισπανικού τύπου τετράγωνα που κυριαρχούσαν στο πεδίο της μάχης επί έναν αιώνα. Επί έναν χρόνο ο Σουηδός βασιλιάς βάδιζε σχεδόν κατά βούληση μέσα από τη Γερμανία. Οι επιχορηγήσεις του έρχονταν από την καθολική Γαλλία: ο καρδινάλιος Ρισελιέ, επιδιώκοντας το raison d'état, χρηματοδοτούσε τον προτεστάντη υπέρμαχο κατά των Αψβούργων."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1632,
      month: 11,
      era: {
        en: "Lützen",
        el: "Λύτσεν"
      },
      events: [
        {
          title: {
            en: "The Lion falls",
            el: "Ο Λέων πέφτει"
          },
          description: {
            en: "On 16 November, in fog near Lützen, the Swedes under Gustavus Adolphus meet Wallenstein, recalled to imperial command. The Swedes win the field, but the king, leading a cavalry charge, is shot from his horse and killed. The Protestant cause loses its inspired leader; the war, deprived of its one figure who might have ended it in victory, grinds on without direction.",
            el: "Στις 16 Νοεμβρίου, μέσα στην ομίχλη κοντά στο Λύτσεν, οι Σουηδοί υπό τον Γουσταύο Αδόλφο συναντούν τον Βαλενστάιν, που έχει ανακληθεί στην αυτοκρατορική διοίκηση. Οι Σουηδοί κερδίζουν το πεδίο, αλλά ο βασιλιάς, οδηγώντας μια έφοδο ιππικού, πέφτει από το άλογό του πυροβολημένος και σκοτώνεται. Η προτεσταντική υπόθεση χάνει τον εμπνευσμένο ηγέτη της· ο πόλεμος, στερημένος από τη μοναδική μορφή που ίσως τον τελείωνε με νίκη, συνεχίζεται χωρίς κατεύθυνση."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1635,
      month: 5,
      era: {
        en: "France Enters the War",
        el: "Η Γαλλία Μπαίνει στον Πόλεμο"
      },
      events: [
        {
          title: {
            en: "Richelieu declares war on Spain",
            el: "Ο Ρισελιέ κηρύσσει τον πόλεμο στην Ισπανία"
          },
          description: {
            en: "After the Swedes are crushed at Nördlingen in September 1634 and the German Protestants make the Peace of Prague with the emperor, France abandons its role as paymaster and enters the war openly. On 19 May 1635 Louis XIII declares war on Habsburg Spain. What had been a German religious war becomes a continental struggle for power between the Bourbons and the Habsburgs, fought from the Rhine to the Pyrenees.",
            el: "Αφού οι Σουηδοί συντρίβονται στο Νέρντλινγκεν τον Σεπτέμβριο του 1634 και οι Γερμανοί Προτεστάντες συνάπτουν την Ειρήνη της Πράγας με τον αυτοκράτορα, η Γαλλία εγκαταλείπει τον ρόλο του χρηματοδότη και μπαίνει ανοιχτά στον πόλεμο. Στις 19 Μαΐου 1635 ο Λουδοβίκος ΙΓ΄ κηρύσσει τον πόλεμο στην αψβουργική Ισπανία. Ό,τι ήταν γερμανικός θρησκευτικός πόλεμος γίνεται μια ηπειρωτική πάλη για την ισχύ μεταξύ των Βουρβώνων και των Αψβούργων, που δίνεται από τον Ρήνο ως τα Πυρηναία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1643,
      month: 5,
      era: {
        en: "Rocroi",
        el: "Ροκρουά"
      },
      events: [
        {
          title: {
            en: "The Spanish tercios break at Rocroi",
            el: "Τα ισπανικά τέρσιος συντρίβονται στο Ροκρουά"
          },
          description: {
            en: "On 19 May, five days after the death of Louis XIII, the twenty-one-year-old Duke of Enghien — the future Great Condé — destroys the army of Spain at Rocroi in the Ardennes. The famous Spanish tercios, the finest infantry in Europe for a century, stand and die where they fought. The battle shatters the myth of Spanish invincibility and announces the rise of France as the first military power on the continent.",
            el: "Στις 19 Μαΐου, πέντε ημέρες μετά τον θάνατο του Λουδοβίκου ΙΓ΄, ο εικοσιενάχρονος δούκας του Ανγκιέν — ο μελλοντικός Μέγας Κοντέ — καταστρέφει τον στρατό της Ισπανίας στο Ροκρουά στις Αρδέννες. Τα περίφημα ισπανικά τέρσιος, το καλύτερο πεζικό της Ευρώπης επί έναν αιώνα, στέκονται και πεθαίνουν εκεί όπου πολέμησαν. Η μάχη συντρίβει τον μύθο της ισπανικής αήττητης ισχύος και αναγγέλλει την άνοδο της Γαλλίας ως της πρώτης στρατιωτικής δύναμης της ηπείρου."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1648,
      month: 10,
      era: {
        en: "The Peace of Westphalia",
        el: "Η Ειρήνη της Βεστφαλίας"
      },
      events: [
        {
          title: {
            en: "Westphalia and the birth of the modern state system",
            el: "Η Βεστφαλία και η γέννηση του σύγχρονου κρατικού συστήματος"
          },
          description: {
            en: "On 24 October, after five years of negotiation at Münster and Osnabrück, the Peace of Westphalia ends the war. Calvinism is recognised; the German princes win near-sovereignty; the Dutch and the Swiss gain independence; France and Sweden take territory and prestige. The dream of a universal Catholic empire is dead. In its place stands a Europe of sovereign states, each supreme within its borders.",
            el: "Στις 24 Οκτωβρίου, μετά από πέντε χρόνια διαπραγματεύσεων στο Μύνστερ και το Όσναμπρυκ, η Ειρήνη της Βεστφαλίας τερματίζει τον πόλεμο. Ο καλβινισμός αναγνωρίζεται· οι Γερμανοί ηγεμόνες κερδίζουν σχεδόν την κυριαρχία· οι Ολλανδοί και οι Ελβετοί αποκτούν ανεξαρτησία· η Γαλλία και η Σουηδία παίρνουν εδάφη και κύρος. Το όνειρο μιας οικουμενικής καθολικής αυτοκρατορίας έχει πεθάνει. Στη θέση του στέκεται μια Ευρώπη κυρίαρχων κρατών, το καθένα υπέρτατο εντός των συνόρων του."
          },
          extendedDescription: {
            en: "The war had killed perhaps eight million people — as much as a third of the population of Germany in the worst-hit regions — through battle, famine, and plague. Whole provinces were depopulated and would not recover for generations. But the settlement of 1648 founded the principle of state sovereignty and non-interference that historians call the 'Westphalian system' — the constitutional grammar of international relations down to the present day.",
            el: "Ο πόλεμος είχε σκοτώσει ίσως οκτώ εκατομμύρια ανθρώπους — έως και το ένα τρίτο του πληθυσμού της Γερμανίας στις πιο πληγείσες περιοχές — μέσω μάχης, λιμού και πανώλης. Ολόκληρες επαρχίες ερημώθηκαν και δεν θα ανέκαμπταν για γενιές. Αλλά ο διακανονισμός του 1648 θεμελίωσε την αρχή της κρατικής κυριαρχίας και της μη επέμβασης που οι ιστορικοί αποκαλούν «σύστημα της Βεστφαλίας» — τη συνταγματική γραμματική των διεθνών σχέσεων ως τις μέρες μας."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
