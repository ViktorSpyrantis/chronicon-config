/** World War II — Β΄ Παγκόσμιος Πόλεμος · Global Conflicts */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const WW2 = {
  id: "ww2" as const,
  label: {
    en: "World War II",
    el: "Β΄ Παγκόσμιος Πόλεμος"
  },
  supertitle: {
    en: "The Second World War",
    el: "Ο Δεύτερος Παγκόσμιος Πόλεμος"
  },
  title: {
    en: "The Second World War",
    el: "Ο Β΄ Παγκόσμιος Πόλεμος"
  },
  subtitle: {
    en: "From the German invasion of Poland to the surrender on the USS Missouri — six years of total war on five continents that killed seventy million people, broke the European empires, exposed the Holocaust, and ended with the splitting of the atom and the partition of the world. Slide across the months to read the major events that closed the short twentieth century.",
    el: "Από τη γερμανική εισβολή στην Πολωνία έως την παράδοση πάνω στο USS Missouri — έξι χρόνια ολοκληρωτικού πολέμου σε πέντε ηπείρους που σκότωσαν εβδομήντα εκατομμύρια ανθρώπους, διέλυσαν τις ευρωπαϊκές αυτοκρατορίες, αποκάλυψαν το Ολοκαύτωμα και τελείωσαν με τη διάσπαση του ατόμου και τη διχοτόμηση του κόσμου. Μετακινηθείτε ανάμεσα στους μήνες για να διαβάσετε τα γεγονότα που έκλεισαν τον σύντομο εικοστό αιώνα."
  },
  menuDescription: {
    en: "The deadliest war in history, from the invasion of Poland to the surrender of Japan.",
    el: "Ο πιο φονικός πόλεμος της ιστορίας, από την εισβολή στην Πολωνία ως την παράδοση της Ιαπωνίας."
  },
  footerLabel: {
    en: "World War II · 1939-1945",
    el: "Β΄ Παγκόσμιος Πόλεμος · 1939-1945"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "World War II",
    el: "Β΄ Παγκόσμιος Πόλεμος"
  },
  theme: THEMES.slate,
  timeline: [
    {
      year: 1939,
      month: 9,
      era: {
        en: "European War",
        el: "Ευρωπαϊκός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Germany invades Poland",
            el: "Η Γερμανία εισβάλλει στην Πολωνία"
          },
          description: {
            en: "On 1 September 1.5 million German troops cross the Polish frontier, supported by Stuka dive-bombers and Panzer divisions. Britain and France declare war on 3 September.",
            el: "Την 1η Σεπτεμβρίου 1,5 εκατομμύριο γερμανικά στρατεύματα διασχίζουν τα πολωνικά σύνορα, υποστηριζόμενα από βομβαρδιστικά Στούκα και τεθωρακισμένες μεραρχίες. Η Βρετανία και η Γαλλία κηρύσσουν τον πόλεμο στις 3 Σεπτεμβρίου."
          },
          extendedDescription: {
            en: "The invasion was prepared by the Molotov-Ribbentrop Pact of 23 August, whose secret protocol carved Eastern Europe into German and Soviet spheres. Warsaw fell on 27 September; the Red Army entered eastern Poland on 17 September. Within five weeks the Polish state had ceased to exist, partitioned along the Bug river. The Western Allies, despite their guarantees, launched no serious offensive — the 'Phoney War' had begun.",
            el: "Η εισβολή προετοιμάστηκε με το Σύμφωνο Μολότοφ-Ρίμπεντροπ της 23ης Αυγούστου, του οποίου το μυστικό πρωτόκολλο μοίραζε την Ανατολική Ευρώπη σε γερμανική και σοβιετική σφαίρα. Η Βαρσοβία έπεσε στις 27 Σεπτεμβρίου· ο Κόκκινος Στρατός εισήλθε στην ανατολική Πολωνία στις 17 Σεπτεμβρίου. Μέσα σε πέντε εβδομάδες το πολωνικό κράτος είχε πάψει να υπάρχει, διαμοιρασμένο κατά μήκος του Μπουγκ. Οι Δυτικοί Σύμμαχοι, παρά τις εγγυήσεις τους, δεν εξαπέλυσαν σοβαρή επίθεση — ο «Ψεύτικος Πόλεμος» είχε αρχίσει."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1939,
      month: 11,
      era: {
        en: "European War",
        el: "Ευρωπαϊκός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Winter War — Soviet invasion of Finland",
            el: "Χειμερινός Πόλεμος — Σοβιετική εισβολή στη Φινλανδία"
          },
          description: {
            en: "On 30 November the Red Army invades Finland after Helsinki refuses Soviet territorial demands. Finnish ski troops inflict humiliating defeats on Stalin's army through the winter.",
            el: "Στις 30 Νοεμβρίου ο Κόκκινος Στρατός εισβάλλει στη Φινλανδία αφού το Ελσίνκι αρνείται τις σοβιετικές εδαφικές απαιτήσεις. Φινλανδικά τμήματα σκι προκαλούν ταπεινωτικές ήττες στον στρατό του Στάλιν τον χειμώνα."
          },
          extendedDescription: {
            en: "Marshal Mannerheim's defenders, badly outnumbered and outgunned, exploited the forest and snow at Suomussalmi and along the Mannerheim Line. The Red Army's poor performance — partly the legacy of Stalin's officer purges — convinced Hitler that the Soviet Union was a hollow giant. Finland eventually had to cede 11% of her territory in March 1940, but kept her independence and her democracy.",
            el: "Οι αμυνόμενοι του στρατάρχη Μάννερχαϊμ, υποδεέστεροι σε αριθμό και οπλισμό, εκμεταλλεύτηκαν το δάσος και το χιόνι στο Σουομουσσάλμι και κατά μήκος της Γραμμής Μάννερχαϊμ. Η κακή απόδοση του Κόκκινου Στρατού — εν μέρει κληρονομιά των εκκαθαρίσεων του Στάλιν στο σώμα των αξιωματικών — έπεισε τον Χίτλερ ότι η Σοβιετική Ένωση ήταν ένας κούφιος γίγαντας. Η Φινλανδία τελικά παραχώρησε το 11% της επικράτειάς της τον Μάρτιο του 1940, αλλά διατήρησε την ανεξαρτησία και τη δημοκρατία της."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1940,
      month: 5,
      era: {
        en: "Fall of the West",
        el: "Πτώση της Δύσης"
      },
      events: [
        {
          title: {
            en: "Blitzkrieg in the West",
            el: "Μπλίτσκριγκ στη Δύση"
          },
          description: {
            en: "On 10 May the Wehrmacht invades the Netherlands, Belgium, Luxembourg, and France. Within six weeks the most powerful army in Europe is shattered.",
            el: "Στις 10 Μαΐου η Βέρμαχτ εισβάλλει σε Ολλανδία, Βέλγιο, Λουξεμβούργο και Γαλλία. Μέσα σε έξι εβδομάδες ο ισχυρότερος στρατός της Ευρώπης συντρίβεται."
          },
          extendedDescription: {
            en: "Manstein's plan threw seven Panzer divisions through the 'impassable' Ardennes, outflanking the Maginot Line. By 20 May Guderian had reached the Channel at Abbeville, trapping the British Expeditionary Force and the best of the French army in a pocket around Dunkirk. On the same 10 May, Neville Chamberlain resigned and Winston Churchill became Prime Minister, vowing 'blood, toil, tears, and sweat'. Between 26 May and 4 June, 338,000 Allied troops were evacuated from the Dunkirk beaches in Operation Dynamo.",
            el: "Το σχέδιο του Μάνστάιν εκτόξευσε επτά τεθωρακισμένες μεραρχίες μέσω των «αδιάβατων» Αρδεννών, παρακάμπτοντας τη Γραμμή Μαζινό. Μέχρι τις 20 Μαΐου ο Γκουντέριαν είχε φτάσει στη Μάγχη στην Αμπεβίλ, παγιδεύοντας τη Βρετανική Εκστρατευτική Δύναμη και το καλύτερο τμήμα του γαλλικού στρατού σε θύλακα γύρω από τη Δουνκέρκη. Την ίδια 10η Μαΐου, ο Νέβιλ Τσάμπερλεν παραιτήθηκε και ο Ουίνστον Τσώρτσιλ ανέλαβε πρωθυπουργός, ορκιζόμενος «αίμα, μόχθο, δάκρυα και ιδρώτα». Από 26 Μαΐου έως 4 Ιουνίου, 338.000 συμμαχικά στρατεύματα εκκενώθηκαν από τις παραλίες της Δουνκέρκης στην Επιχείρηση Δυναμώ."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1940,
      month: 6,
      era: {
        en: "Fall of the West",
        el: "Πτώση της Δύσης"
      },
      events: [
        {
          title: {
            en: "Fall of France",
            el: "Πτώση της Γαλλίας"
          },
          description: {
            en: "Paris falls on 14 June. On 22 June Marshal Pétain signs the armistice in the same Compiègne railway carriage where Germany surrendered in 1918. Italy enters the war on 10 June.",
            el: "Το Παρίσι πέφτει στις 14 Ιουνίου. Στις 22 Ιουνίου ο στρατάρχης Πεταίν υπογράφει την ανακωχή στο ίδιο σιδηροδρομικό βαγόνι της Κομπιένης όπου παραδόθηκε η Γερμανία το 1918. Η Ιταλία εισέρχεται στον πόλεμο στις 10 Ιουνίου."
          },
          extendedDescription: {
            en: "France was divided into a German-occupied north and west and a collaborationist 'Vichy' state in the south under Pétain. From London on 18 June, an obscure brigadier-general named Charles de Gaulle issued his BBC appeal to continue the fight: 'whatever happens, the flame of French resistance must not be extinguished, and will not be extinguished'. Mussolini's late entry, hoping for cheap territorial gains, would prove disastrous for Italy.",
            el: "Η Γαλλία χωρίστηκε σε γερμανοκρατούμενο βορρά και δύση και σε δοσίλογο κράτος του «Βισί» στον νότο υπό τον Πεταίν. Από το Λονδίνο στις 18 Ιουνίου, ένας άσημος ταξίαρχος ονόματι Σαρλ ντε Γκολ απηύθυνε από το BBC έκκλησή του να συνεχιστεί η μάχη: «ό,τι κι αν συμβεί, η φλόγα της γαλλικής αντίστασης δεν πρέπει να σβήσει και δεν θα σβήσει». Η καθυστερημένη είσοδος του Μουσολίνι, με την ελπίδα φθηνών εδαφικών κερδών, θα αποδεικνυόταν καταστροφική για την Ιταλία."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1940,
      month: 7,
      era: {
        en: "Battle of Britain",
        el: "Μάχη της Βρετανίας"
      },
      events: [
        {
          title: {
            en: "Battle of Britain begins",
            el: "Αρχίζει η Μάχη της Βρετανίας"
          },
          description: {
            en: "From July to October the Luftwaffe attempts to break the Royal Air Force as a prelude to invasion. The RAF's victory makes Operation Sea Lion impossible.",
            el: "Από Ιούλιο έως Οκτώβριο η Λουφτβάφε επιχειρεί να συντρίψει τη βρετανική Αεροπορία ως προοίμιο εισβολής. Η νίκη της RAF καθιστά την Επιχείρηση Θαλάσσιος Λέων αδύνατη."
          },
          extendedDescription: {
            en: "Air Chief Marshal Dowding's network of radar stations, Spitfire and Hurricane squadrons, and centralised command — the world's first integrated air-defence system — proved decisive. The Luftwaffe's switch to bombing London on 7 September gave Fighter Command time to recover. Of Churchill's most quoted lines, none has aged better: 'Never in the field of human conflict was so much owed by so many to so few.'",
            el: "Το δίκτυο σταθμών ραντάρ, οι μοίρες Spitfire και Hurricane και η κεντρική διοίκηση του αρχιπτεράρχου Ντάουντινγκ — το πρώτο ενοποιημένο σύστημα αεράμυνας στον κόσμο — αποδείχθηκαν καθοριστικά. Η μετάβαση της Λουφτβάφε στους βομβαρδισμούς του Λονδίνου στις 7 Σεπτεμβρίου έδωσε χρόνο στη Διοίκηση Καταδιωκτικών να ανακάμψει. Από όλες τις ρήσεις του Τσώρτσιλ, καμία δεν παλιώνει καλύτερα: «Ποτέ στο πεδίο της ανθρώπινης σύγκρουσης δεν όφειλαν τόσοι πολλοί τόσα πολλά σε τόσο λίγους»."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1940,
      month: 10,
      era: {
        en: "War Spreads",
        el: "Επέκταση του Πολέμου"
      },
      events: [
        {
          title: {
            en: "Italian invasion of Greece — Ohi Day",
            el: "Ιταλική εισβολή στην Ελλάδα — Επέτειος του ΟΧΙ"
          },
          description: {
            en: "On 28 October Prime Minister Ioannis Metaxas refuses Mussolini's ultimatum with a single word: 'No'. Italian forces cross the Albanian frontier hours later but are routed by the Greek army.",
            el: "Στις 28 Οκτωβρίου ο πρωθυπουργός Ιωάννης Μεταξάς απορρίπτει το τελεσίγραφο του Μουσολίνι με μία λέξη: «Όχι». Οι ιταλικές δυνάμεις διασχίζουν τα αλβανικά σύνορα ώρες αργότερα αλλά τρέπονται σε φυγή από τον ελληνικό στρατό."
          },
          extendedDescription: {
            en: "Greek troops under General Papagos counter-attacked into Italian-occupied Albania, capturing Korçë, Gjirokastër, and Himara. It was the first major Allied land victory of the war and a humiliation for Mussolini that would force Hitler to intervene in the Balkans the following spring. The 28 October date — 'Ohi Day' — remains a Greek national holiday, commemorating both the refusal and the war that followed.",
            el: "Ελληνικά στρατεύματα υπό τον στρατηγό Παπάγο αντεπιτέθηκαν στην ιταλοκρατούμενη Αλβανία, καταλαμβάνοντας Κορυτσά, Αργυρόκαστρο και Χειμάρρα. Ήταν η πρώτη μεγάλη συμμαχική χερσαία νίκη του πολέμου και ταπείνωση για τον Μουσολίνι που θα ανάγκαζε τον Χίτλερ να επέμβει στα Βαλκάνια την επόμενη άνοιξη. Η ημερομηνία 28 Οκτωβρίου — «Επέτειος του Όχι» — παραμένει εθνική εορτή, τιμώντας τόσο την άρνηση όσο και τον πόλεμο που ακολούθησε."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1941,
      month: 4,
      era: {
        en: "War Spreads",
        el: "Επέκταση του Πολέμου"
      },
      events: [
        {
          title: {
            en: "German invasion of Yugoslavia and Greece",
            el: "Γερμανική εισβολή στη Γιουγκοσλαβία και την Ελλάδα"
          },
          description: {
            en: "On 6 April the Wehrmacht crosses the Bulgarian frontier into both countries. Belgrade falls on 12 April; Athens on 27 April.",
            el: "Στις 6 Απριλίου η Βέρμαχτ διασχίζει τα βουλγαρικά σύνορα προς αμφότερες τις χώρες. Το Βελιγράδι πέφτει στις 12 Απριλίου· η Αθήνα στις 27 Απριλίου."
          },
          extendedDescription: {
            en: "Greek and Commonwealth forces fought delaying actions on the Metaxas Line, at the Vermio passes, and at Thermopylae, but could not stop the German armoured drive. King George II and the government withdrew to Crete and then Cairo. The Greek campaign delayed Operation Barbarossa by four to six crucial weeks — perhaps the most expensive Axis victory of the war. Triple occupation by Germans, Italians, and Bulgarians began a famine that, at its worst in the winter of 1941-42, killed tens of thousands in Athens alone and would claim some 300,000 Greek lives over the course of the occupation.",
            el: "Ελληνικές και Κοινοπολιτειακές δυνάμεις έδωσαν μάχες καθυστέρησης στη Γραμμή Μεταξά, στις διαβάσεις του Βερμίου και στις Θερμοπύλες, αλλά δεν μπόρεσαν να σταματήσουν τη γερμανική τεθωρακισμένη ορμή. Ο βασιλιάς Γεώργιος Β΄ και η κυβέρνηση αποχώρησαν στην Κρήτη και έπειτα στο Κάιρο. Η ελληνική εκστρατεία καθυστέρησε την Επιχείρηση Μπαρμπαρόσα κατά τέσσερις έως έξι κρίσιμες εβδομάδες — ίσως η πιο ακριβή νίκη του Άξονα στον πόλεμο. Η τριπλή κατοχή από Γερμανούς, Ιταλούς και Βουλγάρους εγκαινίασε λιμό που, στην κορύφωσή του τον χειμώνα 1941-42, σκότωσε δεκάδες χιλιάδες μόνο στην Αθήνα και συνολικά θα στοίχιζε περίπου 300.000 ζωές στην Ελλάδα κατά τη διάρκεια της κατοχής."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1941,
      month: 5,
      era: {
        en: "War Spreads",
        el: "Επέκταση του Πολέμου"
      },
      events: [
        {
          title: {
            en: "Battle of Crete",
            el: "Μάχη της Κρήτης"
          },
          description: {
            en: "From 20 May to 1 June, German Fallschirmjäger paratroopers seize Crete in the first major strategic airborne assault in history. Cretan civilians take up arms beside Allied troops.",
            el: "Από 20 Μαΐου έως 1 Ιουνίου, Γερμανοί αλεξιπτωτιστές Fallschirmjäger καταλαμβάνουν την Κρήτη στην πρώτη μεγάλη στρατηγική αερομεταφερόμενη επιχείρηση της ιστορίας. Κρητικοί άμαχοι λαμβάνουν τα όπλα μαζί με τα συμμαχικά στρατεύματα."
          },
          extendedDescription: {
            en: "Despite Allied warnings from Ultra-decoded German signals, defenders failed to prevent the seizure of Maleme airfield. Cretan resistance, with farmers attacking paratroopers using sickles and old rifles, contributed to losses so severe — 7,000 elite German casualties — that Hitler banned further large-scale airborne operations. The brutal German reprisals against Cretan villages presaged the occupation atrocities that would follow across Europe.",
            el: "Παρά τις συμμαχικές προειδοποιήσεις από αποκρυπτογραφημένα γερμανικά σήματα Ultra, οι αμυνόμενοι απέτυχαν να αποτρέψουν την κατάληψη του αεροδρομίου του Μάλεμε. Η αντίσταση των Κρητικών, με αγρότες να επιτίθενται σε αλεξιπτωτιστές με δρεπάνια και παλιά τουφέκια, συνέβαλε σε τόσο βαριές απώλειες — 7.000 επίλεκτοι Γερμανοί νεκροί και τραυματίες — ώστε ο Χίτλερ απαγόρευσε περαιτέρω αερομεταφερόμενες επιχειρήσεις μεγάλης κλίμακας. Τα βάναυσα γερμανικά αντίποινα κατά κρητικών χωριών προμήνυαν τις θηριωδίες της κατοχής που θα ακολουθούσαν σε όλη την Ευρώπη."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1941,
      month: 6,
      era: {
        en: "Eastern Front",
        el: "Ανατολικό Μέτωπο"
      },
      events: [
        {
          title: {
            en: "Operation Barbarossa",
            el: "Επιχείρηση Μπαρμπαρόσα"
          },
          description: {
            en: "On 22 June 3.8 million Axis soldiers in 153 divisions invade the Soviet Union along a 2,900-kilometre front — the largest military operation in history.",
            el: "Στις 22 Ιουνίου 3,8 εκατομμύρια στρατιώτες του Άξονα σε 153 μεραρχίες εισβάλλουν στη Σοβιετική Ένωση κατά μήκος μετώπου 2.900 χιλιομέτρων — η μεγαλύτερη στρατιωτική επιχείρηση στην ιστορία."
          },
          extendedDescription: {
            en: "Stalin, who had refused to believe the invasion warnings, suffered a nervous collapse for several days. By December the Wehrmacht stood at the gates of Moscow, having killed or captured three million Soviet soldiers. But General Winter intervened: temperatures dropped to -40°C and the German army, equipped only for a summer campaign, froze in its tracks. The Soviet counter-offensive of 5 December drove the invaders back from the capital. Behind the front lines, Einsatzgruppen death squads began the systematic murder of Soviet Jews — the start of the Holocaust by bullets.",
            el: "Ο Στάλιν, που είχε αρνηθεί να πιστέψει τις προειδοποιήσεις για την εισβολή, υπέστη νευρική κρίση για αρκετές ημέρες. Μέχρι τον Δεκέμβριο η Βέρμαχτ βρισκόταν στις πύλες της Μόσχας, έχοντας σκοτώσει ή αιχμαλωτίσει τρία εκατομμύρια Σοβιετικούς στρατιώτες. Αλλά ο Στρατηγός Χειμώνας παρενέβη: η θερμοκρασία έπεσε στους -40°C και ο γερμανικός στρατός, εξοπλισμένος μόνο για θερινή εκστρατεία, πάγωσε εκεί που βρισκόταν. Η σοβιετική αντεπίθεση της 5ης Δεκεμβρίου απώθησε τους εισβολείς από την πρωτεύουσα. Πίσω από τις γραμμές του μετώπου, τα Einsatzgruppen ξεκίνησαν τη συστηματική δολοφονία των Σοβιετικών Εβραίων — η αρχή του Ολοκαυτώματος με σφαίρες."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1941,
      month: 12,
      era: {
        en: "Global War",
        el: "Παγκόσμιος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Pearl Harbor & global war",
            el: "Περλ Χάρμπορ & παγκόσμιος πόλεμος"
          },
          description: {
            en: "On 7 December Japanese carrier aircraft attack the US Pacific Fleet at Pearl Harbor. Within four days Germany and Italy declare war on the United States.",
            el: "Στις 7 Δεκεμβρίου ιαπωνικά αεροπλάνα από αεροπλανοφόρα επιτίθενται στον αμερικανικό Στόλο του Ειρηνικού στο Περλ Χάρμπορ. Μέσα σε τέσσερις ημέρες η Γερμανία και η Ιταλία κηρύσσουν τον πόλεμο στις Ηνωμένες Πολιτείες."
          },
          extendedDescription: {
            en: "Six Japanese carriers launched 353 aircraft against the unprepared US base in Hawaii, sinking or damaging 19 ships and killing 2,403 Americans. Roosevelt called it 'a date which will live in infamy'. Within hours Japan also struck the Philippines, Malaya, Hong Kong, and Singapore. Hitler's gratuitous declaration of war on the US on 11 December — driven more by ideology than strategy — joined the European and Asian conflicts into a single world war the Axis could not win.",
            el: "Έξι ιαπωνικά αεροπλανοφόρα εκτόξευσαν 353 αεροσκάφη κατά της απροετοίμαστης αμερικανικής βάσης στη Χαβάη, βυθίζοντας ή προκαλώντας ζημιές σε 19 πλοία και σκοτώνοντας 2.403 Αμερικανούς. Ο Ρούζβελτ την αποκάλεσε «ημερομηνία που θα ζει στην ατιμία». Μέσα σε ώρες η Ιαπωνία χτύπησε επίσης τις Φιλιππίνες, τη Μαλαισία, το Χονγκ Κονγκ και τη Σιγκαπούρη. Η αυθαίρετη κήρυξη πολέμου του Χίτλερ κατά των ΗΠΑ στις 11 Δεκεμβρίου — προϊόν περισσότερο ιδεολογίας παρά στρατηγικής — ένωσε τις ευρωπαϊκές και ασιατικές συγκρούσεις σε έναν παγκόσμιο πόλεμο που ο Άξονας δεν μπορούσε να κερδίσει."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1942,
      month: 1,
      era: {
        en: "Holocaust & Total War",
        el: "Ολοκαύτωμα & Ολοκληρωτικός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Wannsee Conference",
            el: "Διάσκεψη του Βάνζεε"
          },
          description: {
            en: "On 20 January Reinhard Heydrich convenes fifteen senior Nazi officials at a villa near Berlin to coordinate the 'Final Solution to the Jewish question' — the industrial murder of European Jewry.",
            el: "Στις 20 Ιανουαρίου ο Ράινχαρντ Χάιντριχ συγκαλεί δεκαπέντε ανώτερους ναζιστές αξιωματούχους σε βίλα κοντά στο Βερολίνο για να συντονίσουν την «Τελική Λύση του εβραϊκού ζητήματος» — τη βιομηχανική δολοφονία των Εβραίων της Ευρώπης."
          },
          extendedDescription: {
            en: "The conference itself lasted only ninety minutes. Adolf Eichmann's protocol, surviving by accident as the only copy not destroyed, recorded plans to deport eleven million Jews from across Europe to extermination camps in occupied Poland. Auschwitz-Birkenau, Treblinka, Sobibor, and Belzec began industrial-scale murder in the spring of 1942. By war's end six million Jews — two-thirds of European Jewry — would be dead, alongside Roma, disabled people, Slavs, and political prisoners.",
            el: "Η ίδια η διάσκεψη διήρκεσε μόλις ενενήντα λεπτά. Το πρακτικό του Άντολφ Άιχμαν, που σώθηκε τυχαία ως το μόνο μη καταστραμμένο αντίγραφο, κατέγραφε σχέδια εκτόπισης έντεκα εκατομμυρίων Εβραίων από όλη την Ευρώπη σε στρατόπεδα εξόντωσης στην κατεχόμενη Πολωνία. Άουσβιτς-Μπίρκεναου, Τρεμπλίνκα, Σόμπιμπορ και Μπέλζετς ξεκίνησαν τη βιομηχανικής κλίμακας δολοφονία την άνοιξη του 1942. Μέχρι το τέλος του πολέμου έξι εκατομμύρια Εβραίοι — τα δύο τρίτα του εβραϊκού πληθυσμού της Ευρώπης — θα ήταν νεκροί, μαζί με Ρομά, ανάπηρους, Σλάβους και πολιτικούς κρατούμενους."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1942,
      month: 6,
      era: {
        en: "Tide Turns",
        el: "Η Πλάστιγγα Γέρνει"
      },
      events: [
        {
          title: {
            en: "Battle of Midway",
            el: "Μάχη του Μίντγουεϊ"
          },
          description: {
            en: "From 4-7 June US Navy dive-bombers cripple three Japanese carriers — Akagi, Kaga, and Sōryū — in a single astonishing six-minute strike, with Hiryū sunk later the same day. Japan loses the strategic initiative in the Pacific forever.",
            el: "Από 4-7 Ιουνίου βομβαρδιστικά καθέτου εφορμήσεως του αμερικανικού Ναυτικού αχρηστεύουν τρία ιαπωνικά αεροπλανοφόρα — Ακάγκι, Κάγκα και Σορίου — σε μία εκπληκτική επιδρομή έξι λεπτών, ενώ το Χιρίου βυθίζεται αργότερα την ίδια ημέρα. Η Ιαπωνία χάνει τη στρατηγική πρωτοβουλία στον Ειρηνικό για πάντα."
          },
          extendedDescription: {
            en: "Admiral Nimitz, forewarned by US codebreakers who had cracked the Japanese naval cipher JN-25, ambushed Admiral Nagumo's carrier strike force. SBD Dauntless dive-bombers from Enterprise and Yorktown caught the Japanese carriers with bombs and torpedoes on their flight decks, ready to launch. Six months after Pearl Harbor, the Imperial Japanese Navy had lost the battleships of carrier aviation. The long road back across the Pacific to Tokyo had begun.",
            el: "Ο ναύαρχος Νίμιτς, προειδοποιημένος από αμερικανούς αποκρυπτογράφους που είχαν σπάσει τον ιαπωνικό ναυτικό κώδικα JN-25, έστησε ενέδρα στη δύναμη αεροπλανοφόρων του ναυάρχου Ναγκούμο. Βομβαρδιστικά SBD Dauntless από τα Enterprise και Yorktown πέτυχαν τα ιαπωνικά αεροπλανοφόρα με βόμβες και τορπίλες πάνω στα καταστρώματα πτήσεων, έτοιμα για απογείωση. Έξι μήνες μετά το Περλ Χάρμπορ, το Ιαπωνικό Αυτοκρατορικό Ναυτικό είχε χάσει τα θωρηκτά της αεροναυτικής. Ο μακρύς δρόμος επιστροφής διαμέσου του Ειρηνικού προς το Τόκιο είχε αρχίσει."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1942,
      month: 8,
      era: {
        en: "Tide Turns",
        el: "Η Πλάστιγγα Γέρνει"
      },
      events: [
        {
          title: {
            en: "Battle of Stalingrad begins",
            el: "Αρχίζει η Μάχη του Στάλινγκραντ"
          },
          description: {
            en: "On 23 August the Luftwaffe levels Stalingrad in a thousand-bomber raid. The German 6th Army under Paulus enters the city, beginning the most savage urban battle of the war.",
            el: "Στις 23 Αυγούστου η Λουφτβάφε ισοπεδώνει το Στάλινγκραντ σε επιδρομή χιλίων βομβαρδιστικών. Η γερμανική 6η Στρατιά υπό τον Πάουλους εισέρχεται στην πόλη, ξεκινώντας την πιο άγρια αστική μάχη του πολέμου."
          },
          extendedDescription: {
            en: "Hitler's obsession with the city bearing Stalin's name pulled the Wehrmacht into a battle of sniper duels, cellar-by-cellar fighting, and the 'Rattenkrieg' — the rat war. Soviet General Chuikov's 62nd Army held the west bank of the Volga in shrinking pockets, sometimes only a few hundred metres wide, while supplies crossed the river under shellfire. By November the Germans held 90% of the rubble — but the Red Army was massing for the counter-stroke.",
            el: "Η εμμονή του Χίτλερ με την πόλη που έφερε το όνομα του Στάλιν παρέσυρε τη Βέρμαχτ σε μια μάχη μονομαχιών ελεύθερων σκοπευτών, μάχης από υπόγειο σε υπόγειο, και του «Rattenkrieg» — του πολέμου των ποντικιών. Η σοβιετική 62η Στρατιά του στρατηγού Τσουίκοφ κρατούσε τη δυτική όχθη του Βόλγα σε θύλακες που συρρικνώνονταν, κάποιες φορές μόλις μερικές εκατοντάδες μέτρα πλάτος, ενώ οι ανεφοδιασμοί διέσχιζαν το ποτάμι κάτω από κανονιοβολισμούς. Μέχρι τον Νοέμβριο οι Γερμανοί κατείχαν το 90% των ερειπίων — αλλά ο Κόκκινος Στρατός συγκέντρωνε δυνάμεις για το αντίκτυπο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1943,
      month: 2,
      era: {
        en: "Tide Turns",
        el: "Η Πλάστιγγα Γέρνει"
      },
      events: [
        {
          title: {
            en: "Surrender at Stalingrad",
            el: "Παράδοση στο Στάλινγκραντ"
          },
          description: {
            en: "On 2 February the remnants of the German 6th Army — 91,000 starving, frostbitten survivors — surrender. It is the first capitulation of a German field marshal in history.",
            el: "Στις 2 Φεβρουαρίου τα απομεινάρια της γερμανικής 6ης Στρατιάς — 91.000 πεινασμένοι, παγωμένοι επιζώντες — παραδίδονται. Είναι η πρώτη συνθηκολόγηση Γερμανού στρατάρχη στην ιστορία."
          },
          extendedDescription: {
            en: "Operation Uranus, launched on 19 November, had encircled 250,000 Axis soldiers in less than four days, exploiting weak Romanian and Italian flanks. Manstein's relief operation failed; Göring's promise of an air bridge proved fantasy. Hitler promoted Paulus to field marshal expecting his suicide, but Paulus surrendered instead. Of the captured, only about 5,000 would survive Soviet captivity. Goebbels declared three days of national mourning. The myth of German invincibility was broken.",
            el: "Η Επιχείρηση Ουρανός, που εξαπολύθηκε στις 19 Νοεμβρίου, είχε περικυκλώσει 250.000 στρατιώτες του Άξονα σε λιγότερο από τέσσερις ημέρες, εκμεταλλευόμενη τα ασθενή ρουμανικά και ιταλικά πλευρά. Η επιχείρηση ανακούφισης του Μάνστάιν απέτυχε· η υπόσχεση του Γκαίρινγκ για αερογέφυρα αποδείχθηκε φαντασία. Ο Χίτλερ προήγαγε τον Πάουλους σε στρατάρχη περιμένοντας την αυτοκτονία του, αλλά αντ' αυτού ο Πάουλους παραδόθηκε. Από τους αιχμαλώτους, μόλις 5.000 περίπου θα επιβίωναν της σοβιετικής αιχμαλωσίας. Ο Γκαίμπελς κήρυξε τριήμερο εθνικό πένθος. Ο μύθος του αήττητου γερμανικού στρατού κατέρρευσε."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1943,
      month: 7,
      era: {
        en: "Allied Offensives",
        el: "Συμμαχικές Επιθέσεις"
      },
      events: [
        {
          title: {
            en: "Kursk, Sicily, and the fall of Mussolini",
            el: "Κουρσκ, Σικελία και η πτώση του Μουσολίνι"
          },
          description: {
            en: "On 5 July begins the Battle of Kursk, the largest tank battle in history. On 10 July Allies land in Sicily. On 25 July the Fascist Grand Council deposes Mussolini.",
            el: "Στις 5 Ιουλίου αρχίζει η Μάχη του Κουρσκ, η μεγαλύτερη μάχη αρμάτων στην ιστορία. Στις 10 Ιουλίου οι Σύμμαχοι αποβιβάζονται στη Σικελία. Στις 25 Ιουλίου το Φασιστικό Μεγάλο Συμβούλιο εκθρονίζει τον Μουσολίνι."
          },
          extendedDescription: {
            en: "At Kursk's southern shoulder, on 12 July at Prokhorovka, more than a thousand tanks clashed in a single day. The Red Army absorbed Hitler's last great Eastern offensive and from then on dictated the pace of the war on the Eastern Front. In Italy, Operation Husky put 160,000 Anglo-American troops ashore on Sicily; King Victor Emmanuel III had Mussolini arrested at the palace. Marshal Badoglio's new government opened secret armistice talks with the Allies.",
            el: "Στον νότιο ώμο του Κουρσκ, στις 12 Ιουλίου στην Προχορόβκα, πάνω από χίλια άρματα συγκρούστηκαν σε μία ημέρα. Ο Κόκκινος Στρατός απορρόφησε την τελευταία μεγάλη ανατολική επίθεση του Χίτλερ και έκτοτε υπαγόρευε τον ρυθμό του πολέμου στο Ανατολικό Μέτωπο. Στην Ιταλία, η Επιχείρηση Husky αποβίβασε 160.000 Αγγλοαμερικανούς στρατιώτες στη Σικελία· ο βασιλιάς Βίκτωρ Εμμανουήλ Γ΄ διέταξε τη σύλληψη του Μουσολίνι στα ανάκτορα. Η νέα κυβέρνηση του στρατάρχη Μπαντόλιο άνοιξε μυστικές συνομιλίες ανακωχής με τους Συμμάχους."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1943,
      month: 9,
      era: {
        en: "Allied Offensives",
        el: "Συμμαχικές Επιθέσεις"
      },
      events: [
        {
          title: {
            en: "Italian armistice",
            el: "Ιταλική ανακωχή"
          },
          description: {
            en: "On 8 September Italy publicly switches sides. Germany seizes northern Italy, rescues Mussolini, and installs the puppet Italian Social Republic at Salò.",
            el: "Στις 8 Σεπτεμβρίου η Ιταλία αλλάζει δημόσια στρατόπεδο. Η Γερμανία καταλαμβάνει τη βόρεια Ιταλία, διασώζει τον Μουσολίνι και εγκαθιστά την ανδρείκελη Ιταλική Κοινωνική Δημοκρατία του Σαλό."
          },
          extendedDescription: {
            en: "The Italian campaign would grind on bloodily for another twenty months along Gustav Line, Anzio, Monte Cassino, and the Gothic Line. With Italy's collapse, German forces took over the occupation of Greece, the Aegean islands, and the Balkans, dramatically worsening conditions for civilian populations. SS Otto Skorzeny's daring glider raid rescued Mussolini from his mountain prison at Gran Sasso on 12 September.",
            el: "Η ιταλική εκστρατεία θα συνεχιζόταν αιματηρά για άλλους είκοσι μήνες στη Γραμμή Γκούσταβ, στο Άντσιο, στο Μόντε Κασίνο και στη Γοτθική Γραμμή. Με την κατάρρευση της Ιταλίας, οι γερμανικές δυνάμεις ανέλαβαν την κατοχή της Ελλάδας, των νησιών του Αιγαίου και των Βαλκανίων, χειροτερεύοντας δραματικά τις συνθήκες για τους άμαχους πληθυσμούς. Η τολμηρή επιδρομή του Ες-Ες Ότο Σκορτσένι με ανεμόπτερα ελευθέρωσε τον Μουσολίνι από την ορεινή φυλακή του στο Γκραν Σάσο στις 12 Σεπτεμβρίου."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1944,
      month: 6,
      era: {
        en: "Liberation of Europe",
        el: "Απελευθέρωση της Ευρώπης"
      },
      events: [
        {
          title: {
            en: "D-Day & Operation Bagration",
            el: "Ημέρα-Δ & Επιχείρηση Μπαγκρατιόν"
          },
          description: {
            en: "On 6 June 156,000 Allied troops land on five Normandy beaches in the largest seaborne invasion in history. On 22 June the Red Army launches Bagration, destroying Army Group Centre.",
            el: "Στις 6 Ιουνίου 156.000 συμμαχικά στρατεύματα αποβιβάζονται σε πέντε παραλίες της Νορμανδίας στη μεγαλύτερη θαλάσσια εισβολή στην ιστορία. Στις 22 Ιουνίου ο Κόκκινος Στρατός εξαπολύει την Μπαγκρατιόν, εξοντώνοντας την Ομάδα Στρατιών Κέντρο."
          },
          extendedDescription: {
            en: "Eisenhower's Operation Overlord opened the long-awaited second front in France. The American 1st Division at Omaha Beach took horrific casualties storming the bluffs; British, Canadian, Free French, and Polish forces secured Gold, Juno, Sword, and the airborne flanks. On the third anniversary of Barbarossa, the Soviet Bagration offensive — much larger than D-Day in scale — destroyed twenty-eight German divisions and tore a 400-kilometre hole in the Eastern Front. By August Soviet armies stood on the Vistula opposite Warsaw.",
            el: "Η Επιχείρηση Overlord του Αϊζενχάουερ άνοιξε το πολυαναμενόμενο δεύτερο μέτωπο στη Γαλλία. Η αμερικανική 1η Μεραρχία στην Όμαχα Μπιτς υπέστη φρικιαστικές απώλειες ανεβαίνοντας τους κρημνούς· βρετανικές, καναδικές, ελεύθερες γαλλικές και πολωνικές δυνάμεις εξασφάλισαν τις Γκολντ, Τζούνο, Σόρντ και τα αερομεταφερόμενα πλευρά. Στην τρίτη επέτειο της Μπαρμπαρόσα, η σοβιετική επίθεση Μπαγκρατιόν — πολύ μεγαλύτερη της Ημέρας-Δ σε κλίμακα — εξόντωσε είκοσι οκτώ γερμανικές μεραρχίες και άνοιξε ρήγμα 400 χιλιομέτρων στο Ανατολικό Μέτωπο. Μέχρι τον Αύγουστο σοβιετικοί στρατοί στέκονταν στον Βιστούλα απέναντι από τη Βαρσοβία."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1944,
      month: 8,
      era: {
        en: "Liberation of Europe",
        el: "Απελευθέρωση της Ευρώπης"
      },
      events: [
        {
          title: {
            en: "Liberation of Paris & Warsaw Uprising",
            el: "Απελευθέρωση του Παρισιού & Εξέγερση της Βαρσοβίας"
          },
          description: {
            en: "On 25 August Free French troops enter Paris and General de Gaulle marches down the Champs-Élysées. In Warsaw, the Polish Home Army rises against the Germans on 1 August.",
            el: "Στις 25 Αυγούστου ελεύθερες γαλλικές δυνάμεις εισέρχονται στο Παρίσι και ο στρατηγός ντε Γκολ παρελαύνει στα Ηλύσια Πεδία. Στη Βαρσοβία, ο πολωνικός Εσωτερικός Στρατός εξεγείρεται κατά των Γερμανών την 1η Αυγούστου."
          },
          extendedDescription: {
            en: "General Leclerc's 2nd Armoured Division reached Paris first, by Eisenhower's deliberate decision to give the French the honour of liberating their capital. The Warsaw Uprising — sixty-three days of urban combat in which the Home Army hoped to seize the city ahead of the advancing Soviets — was abandoned to its fate by Stalin, who halted his armies at the Vistula. The Wehrmacht systematically destroyed the city, killing 200,000 Poles. Stalin's calculated betrayal removed any non-communist Polish opposition.",
            el: "Η 2η Τεθωρακισμένη Μεραρχία του στρατηγού Λεκλέρ έφτασε πρώτη στο Παρίσι, με τη συνειδητή απόφαση του Αϊζενχάουερ να δοθεί στους Γάλλους η τιμή της απελευθέρωσης της πρωτεύουσάς τους. Η Εξέγερση της Βαρσοβίας — εξήντα τρεις ημέρες αστικών μαχών όπου ο Εσωτερικός Στρατός ήλπιζε να καταλάβει την πόλη πριν από τους Σοβιετικούς που προήλαυναν — εγκαταλείφθηκε στη μοίρα της από τον Στάλιν, που σταμάτησε τους στρατούς του στον Βιστούλα. Η Βέρμαχτ κατέστρεψε συστηματικά την πόλη, σκοτώνοντας 200.000 Πολωνούς. Η υπολογισμένη προδοσία του Στάλιν εξαφάνισε κάθε μη κομμουνιστική πολωνική αντιπολίτευση."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1944,
      month: 10,
      era: {
        en: "Liberation of Europe",
        el: "Απελευθέρωση της Ευρώπης"
      },
      events: [
        {
          title: {
            en: "Liberation of Athens",
            el: "Απελευθέρωση της Αθήνας"
          },
          description: {
            en: "On 12 October the Wehrmacht withdraws from Athens. British forces and the Greek government-in-exile arrive on 14 October to a city ravaged by famine and on the brink of civil war.",
            el: "Στις 12 Οκτωβρίου η Βέρμαχτ αποχωρεί από την Αθήνα. Βρετανικές δυνάμεις και η ελληνική εξόριστη κυβέρνηση φτάνουν στις 14 Οκτωβρίου σε μια πόλη ρημαγμένη από την πείνα και στα πρόθυρα εμφυλίου πολέμου."
          },
          extendedDescription: {
            en: "EAM-ELAS, the communist-led resistance, controlled most of the countryside; the smaller, royalist EDES and republican EKKA had operated mainly in Epirus and central Greece. Churchill's October agreement with Stalin in Moscow placed Greece in the British sphere — a decision that sealed the country's western alignment but at the cost of the December 1944 'Dekemvriana' street battles in Athens and the bitter civil war that would follow from 1946 to 1949.",
            el: "Το ΕΑΜ-ΕΛΑΣ, η κομμουνιστική Αντίσταση, έλεγχε το μεγαλύτερο μέρος της υπαίθρου· ο μικρότερος, βασιλόφρων ΕΔΕΣ και η δημοκρατική ΕΚΚΑ είχαν δράσει κυρίως σε Ήπειρο και κεντρική Ελλάδα. Η συμφωνία του Τσώρτσιλ με τον Στάλιν στη Μόσχα τον Οκτώβριο τοποθέτησε την Ελλάδα στη βρετανική σφαίρα — απόφαση που σφράγισε τη δυτική ευθυγράμμιση της χώρας αλλά με κόστος τις οδομαχίες των Δεκεμβριανών του 1944 στην Αθήνα και τον πικρό εμφύλιο πόλεμο που θα ακολουθούσε από το 1946 ως το 1949."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1945,
      month: 2,
      era: {
        en: "End in Europe",
        el: "Τέλος στην Ευρώπη"
      },
      events: [
        {
          title: {
            en: "Yalta Conference",
            el: "Διάσκεψη της Γιάλτας"
          },
          description: {
            en: "From 4-11 February Roosevelt, Churchill, and Stalin meet at the Crimean palace of Livadia to settle the post-war order. Their agreements draw the borders of Cold War Europe.",
            el: "Από 4-11 Φεβρουαρίου ο Ρούζβελτ, ο Τσώρτσιλ και ο Στάλιν συναντώνται στο ανάκτορο της Λιβάντια στην Κριμαία για να καθορίσουν τη μεταπολεμική τάξη. Οι συμφωνίες τους χαράζουν τα σύνορα της Ευρώπης του Ψυχρού Πολέμου."
          },
          extendedDescription: {
            en: "Roosevelt, gravely ill, sought Soviet entry into the war against Japan and Stalin's commitment to the new United Nations. Stalin secured Polish territorial concessions, recognition of his hand-picked Lublin government, and a sphere of influence across Eastern Europe couched in vague democratic promises. Churchill, the junior partner, salvaged occupation zones for France in Germany. Within three years the Iron Curtain Churchill named in his Fulton speech would have descended across the continent.",
            el: "Ο Ρούζβελτ, βαριά άρρωστος, επιδίωκε τη σοβιετική είσοδο στον πόλεμο κατά της Ιαπωνίας και τη δέσμευση του Στάλιν στα νέα Ηνωμένα Έθνη. Ο Στάλιν εξασφάλισε πολωνικές εδαφικές παραχωρήσεις, αναγνώριση της προσωπικά επιλεγμένης κυβέρνησης του Λούμπλιν και σφαίρα επιρροής σε όλη την Ανατολική Ευρώπη με αόριστες δημοκρατικές υποσχέσεις. Ο Τσώρτσιλ, ο τρίτος εταίρος, εξασφάλισε ζώνες κατοχής για τη Γαλλία στη Γερμανία. Μέσα σε τρία χρόνια το Σιδηρούν Παραπέτασμα που θα ονόμαζε ο Τσώρτσιλ στην ομιλία του στο Φούλτον θα είχε κατέβει σε όλη την ήπειρο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1945,
      month: 4,
      era: {
        en: "End in Europe",
        el: "Τέλος στην Ευρώπη"
      },
      events: [
        {
          title: {
            en: "Fall of Berlin",
            el: "Πτώση του Βερολίνου"
          },
          description: {
            en: "Roosevelt dies on 12 April; Mussolini is shot by partisans on 28 April; Hitler shoots himself in the Berlin bunker on 30 April as Soviet troops fight street by street toward the Reichstag.",
            el: "Ο Ρούζβελτ πεθαίνει στις 12 Απριλίου· ο Μουσολίνι πυροβολείται από αντάρτες στις 28 Απριλίου· ο Χίτλερ αυτοπυροβολείται στο καταφύγιο του Βερολίνου στις 30 Απριλίου καθώς σοβιετικά στρατεύματα μάχονται δρόμο-δρόμο προς το Ράιχσταγκ."
          },
          extendedDescription: {
            en: "Marshals Zhukov and Konev's two-and-a-half-million-man assault on Berlin began on 16 April. Mussolini and his mistress Clara Petacci were caught fleeing toward Switzerland; their bodies were strung up at a Milan petrol station. Hitler married Eva Braun on 29 April and shot her and himself the following afternoon. On 2 May Berlin's commandant surrendered the rubble of the Reich capital. Across Europe, the camps were being liberated — Bergen-Belsen by the British on 15 April, Dachau by the Americans on 29 April — exposing the scale of the Holocaust.",
            el: "Η επίθεση των στρατάρχων Ζούκοφ και Κόνιεφ με δυόμισι εκατομμύρια άντρες στο Βερολίνο άρχισε στις 16 Απριλίου. Ο Μουσολίνι και η ερωμένη του Κλάρα Πετάτσι συνελήφθησαν να διαφεύγουν προς την Ελβετία· τα σώματά τους κρεμάστηκαν σε ένα πρατήριο βενζίνης του Μιλάνου. Ο Χίτλερ νυμφεύθηκε την Έβα Μπράουν στις 29 Απριλίου και αυτοπυροβολήθηκε μαζί της το επόμενο απόγευμα. Στις 2 Μαΐου ο διοικητής του Βερολίνου παρέδωσε τα ερείπια της πρωτεύουσας του Ράιχ. Σε όλη την Ευρώπη, τα στρατόπεδα απελευθερώνονταν — Μπέργκεν-Μπέλσεν από τους Βρετανούς στις 15 Απριλίου, Νταχάου από τους Αμερικανούς στις 29 Απριλίου — αποκαλύπτοντας την κλίμακα του Ολοκαυτώματος."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1945,
      month: 5,
      era: {
        en: "End in Europe",
        el: "Τέλος στην Ευρώπη"
      },
      events: [
        {
          title: {
            en: "VE Day — German surrender",
            el: "Ημέρα της Νίκης στην Ευρώπη — Γερμανική παράδοση"
          },
          description: {
            en: "On 7 May Generaloberst Jodl signs Germany's unconditional surrender at Eisenhower's headquarters in Reims. The act is repeated for the Soviets in Berlin on 8 May.",
            el: "Στις 7 Μαΐου ο στρατηγός Γιοντλ υπογράφει την άνευ όρων παράδοση της Γερμανίας στο αρχηγείο του Αϊζενχάουερ στη Ρεμς. Η πράξη επαναλαμβάνεται για τους Σοβιετικούς στο Βερολίνο στις 8 Μαΐου."
          },
          extendedDescription: {
            en: "The Third Reich, proclaimed to last a thousand years, had survived twelve. Europe lay in ruins: 40 million dead, including the six million murdered Jews of the Holocaust; cities from Warsaw to Cologne in rubble; tens of millions displaced. Crowds danced in Trafalgar Square, Times Square, and the Place de la Concorde. In Moscow, fireworks lit the Kremlin. But the war in Asia continued, and Stalin's tanks now sat astride half a continent.",
            el: "Το Τρίτο Ράιχ, που είχε διακηρυχθεί ότι θα διαρκούσε χίλια χρόνια, είχε επιβιώσει δώδεκα. Η Ευρώπη βρισκόταν σε ερείπια: 40 εκατομμύρια νεκροί, συμπεριλαμβανομένων των έξι εκατομμυρίων δολοφονημένων Εβραίων του Ολοκαυτώματος· πόλεις από τη Βαρσοβία ως την Κολωνία σε ερείπια· δεκάδες εκατομμύρια εκτοπισμένοι. Πλήθη χόρευαν στην Πλατεία Τραφάλγκαρ, στην Τάιμς Σκουέαρ και στην Πλατεία Κονκόρντ. Στη Μόσχα, πυροτεχνήματα φώτισαν το Κρεμλίνο. Αλλά ο πόλεμος στην Ασία συνεχιζόταν, και τα τανκς του Στάλιν στέκονταν πλέον πάνω από μισή ήπειρο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1945,
      month: 8,
      era: {
        en: "End in Asia",
        el: "Τέλος στην Ασία"
      },
      events: [
        {
          title: {
            en: "Hiroshima, Nagasaki & Japanese surrender",
            el: "Χιροσίμα, Ναγκασάκι & Ιαπωνική παράδοση"
          },
          description: {
            en: "On 6 August an American B-29 drops the uranium bomb 'Little Boy' on Hiroshima. On 9 August 'Fat Man' destroys Nagasaki. On 15 August Emperor Hirohito announces surrender by radio.",
            el: "Στις 6 Αυγούστου ένα αμερικανικό B-29 ρίχνει την ουρανιούχο βόμβα «Little Boy» στη Χιροσίμα. Στις 9 Αυγούστου ο «Fat Man» καταστρέφει το Ναγκασάκι. Στις 15 Αυγούστου ο αυτοκράτορας Χιροχίτο ανακοινώνει την παράδοση από το ραδιόφωνο."
          },
          extendedDescription: {
            en: "Some 140,000 people in Hiroshima and 70,000 in Nagasaki died from blast, fire, and radiation by the year's end. Between the two strikes, on 9 August, the Soviet Union declared war on Japan and invaded Manchuria with 1.5 million troops, destroying the Kwantung Army in two weeks. President Truman, having succeeded Roosevelt in April, hoped the bomb would end the war without the projected million-casualty invasion of the home islands. Hirohito's broadcast — the first time the Japanese people had heard the imperial voice — spoke of 'enduring the unendurable'.",
            el: "Περίπου 140.000 άνθρωποι στη Χιροσίμα και 70.000 στο Ναγκασάκι πέθαναν από έκρηξη, φωτιά και ακτινοβολία μέχρι το τέλος του έτους. Ανάμεσα στις δύο επιθέσεις, στις 9 Αυγούστου, η Σοβιετική Ένωση κήρυξε τον πόλεμο στην Ιαπωνία και εισέβαλε στη Μαντζουρία με 1,5 εκατομμύριο στρατιώτες, εξοντώνοντας τη Στρατιά Κβαντούνγκ σε δύο εβδομάδες. Ο πρόεδρος Τρούμαν, που είχε διαδεχθεί τον Ρούζβελτ τον Απρίλιο, ήλπιζε ότι η βόμβα θα τερμάτιζε τον πόλεμο χωρίς την προβλεπόμενη εισβολή στα κύρια νησιά με το ένα εκατομμύριο απώλειες. Η εκπομπή του Χιροχίτο — η πρώτη φορά που ο ιαπωνικός λαός άκουγε την αυτοκρατορική φωνή — μίλησε για «αντοχή στο ανυπόφορο»."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1945,
      month: 9,
      era: {
        en: "End in Asia",
        el: "Τέλος στην Ασία"
      },
      events: [
        {
          title: {
            en: "Surrender on the USS Missouri",
            el: "Παράδοση στο USS Missouri"
          },
          description: {
            en: "On 2 September, in Tokyo Bay aboard the battleship Missouri, Foreign Minister Shigemitsu signs Japan's instrument of surrender. The Second World War is over.",
            el: "Στις 2 Σεπτεμβρίου, στον κόλπο του Τόκιο πάνω στο θωρηκτό Missouri, ο υπουργός Εξωτερικών Σιγκεμίτσου υπογράφει το έγγραφο παράδοσης της Ιαπωνίας. Ο Δεύτερος Παγκόσμιος Πόλεμος έχει τελειώσει."
          },
          extendedDescription: {
            en: "General MacArthur, Supreme Commander of the Allied Powers, presided over the twenty-three-minute ceremony. The deadliest conflict in history had killed between 70 and 85 million people — about 3% of humanity in 1940. From its ashes rose the United Nations, the Bretton Woods order, the European reconstruction, decolonisation across Asia and Africa, and a forty-five-year nuclear-armed standoff between the two superpowers it had created. The 'short twentieth century' that began in 1914 had ended; another, very different one was beginning.",
            el: "Ο στρατηγός ΜακΆρθουρ, Ανώτατος Διοικητής των Συμμαχικών Δυνάμεων, προήδρευσε στην εικοσιτριάλεπτη τελετή. Η πιο φονική σύγκρουση στην ιστορία είχε σκοτώσει μεταξύ 70 και 85 εκατομμυρίων ανθρώπων — περίπου το 3% της ανθρωπότητας του 1940. Από τις στάχτες της αναδύθηκαν τα Ηνωμένα Έθνη, η τάξη του Μπρέτον Γουντς, η ευρωπαϊκή ανασυγκρότηση, η αποαποικιοποίηση σε Ασία και Αφρική, και μια σαρανταπενταετής πυρηνική αναμέτρηση μεταξύ των δύο υπερδυνάμεων που είχε δημιουργήσει. Ο «σύντομος εικοστός αιώνας» που είχε αρχίσει το 1914 είχε τελειώσει· ένας άλλος, πολύ διαφορετικός, μόλις ξεκινούσε."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
