/** World Wars & the Nordic Model — Παγκόσμιοι Πόλεμοι & το Σκανδιναβικό Μοντέλο · Vikings & Scandinavia */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const MODERN_NORDIC_COUNTRIES = {
  id: "modern-nordic-countries" as const,
  label: {
    en: "World Wars & the Nordic Model",
    el: "Παγκόσμιοι Πόλεμοι & το Σκανδιναβικό Μοντέλο"
  },
  supertitle: {
    en: "Modern Scandinavia",
    el: "Σύγχρονη Σκανδιναβία"
  },
  title: {
    en: "From Occupation to Welfare State: The Modern Nordic Countries",
    el: "Από την Κατοχή στο Κράτος Πρόνοιας: οι Σύγχρονες Σκανδιναβικές Χώρες"
  },
  subtitle: {
    en: "The 20th century brought independence to Finland and Iceland, civil war and the heroic Winter War, and Nazi occupation for Denmark and Norway while Sweden stayed neutral. Out of these trials the Nordic countries built some of the world's most prosperous, equal and trusted societies — the 'Nordic model' — founded on welfare states, cooperation and, for Norway, North Sea oil. After the Cold War, Russia's invasion of Ukraine finally brought Finland and Sweden into NATO. Slide across a century of war, peace and reinvention.",
    el: "Ο 20ός αιώνας έφερε την ανεξαρτησία στη Φινλανδία και την Ισλανδία, εμφύλιο πόλεμο και τον ηρωικό Χειμερινό Πόλεμο, και ναζιστική κατοχή στη Δανία και τη Νορβηγία, ενώ η Σουηδία έμεινε ουδέτερη. Μέσα από αυτές τις δοκιμασίες οι σκανδιναβικές χώρες έχτισαν μερικές από τις πιο ευημερούσες, ισότιμες κοινωνίες του κόσμου με τα υψηλότερα επίπεδα εμπιστοσύνης — το «σκανδιναβικό μοντέλο» — θεμελιωμένο στο κράτος πρόνοιας, στη συνεργασία και, για τη Νορβηγία, στο πετρέλαιο της Βόρειας Θάλασσας. Μετά τον Ψυχρό Πόλεμο, η εισβολή της Ρωσίας στην Ουκρανία έφερε τελικά τη Φινλανδία και τη Σουηδία στο ΝΑΤΟ. Μετακινηθείτε σε έναν αιώνα πολέμου, ειρήνης και αναγέννησης."
  },
  menuDescription: {
    en: "Finnish independence, the Winter War, occupation and resistance, the welfare state, oil, and NATO.",
    el: "Η φινλανδική ανεξαρτησία, ο Χειμερινός Πόλεμος, η κατοχή και η αντίσταση, το κράτος πρόνοιας, το πετρέλαιο και το ΝΑΤΟ."
  },
  footerLabel: {
    en: "Modern Scandinavia · 1914-present",
    el: "Σύγχρονη Σκανδιναβία · 1914-σήμερα"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "World Wars & the Nordic Model",
    el: "Παγκόσμιοι Πόλεμοι & το Σκανδιναβικό Μοντέλο"
  },
  theme: THEMES.teal,
  timeline: [
    {
      year: 1917,
      era: {
        en: "World War I",
        el: "Α΄ Παγκόσμιος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Finland declares independence",
            el: "Η Φινλανδία κηρύσσει την ανεξαρτησία της"
          },
          description: {
            en: "Amid the collapse of the Russian Empire, Finland's parliament declares independence on 6 December 1917; Lenin's government recognises it weeks later.",
            el: "Εν μέσω της κατάρρευσης της Ρωσικής Αυτοκρατορίας, το κοινοβούλιο της Φινλανδίας κηρύσσει την ανεξαρτησία στις 6 Δεκεμβρίου 1917· η κυβέρνηση του Λένιν την αναγνωρίζει λίγες εβδομάδες αργότερα."
          },
          extendedDescription: {
            en: "Denmark, Norway and Sweden had stayed neutral through World War I, though their merchant fleets suffered heavily from submarine warfare. Finland's independence came out of Russia's revolutions. Its first months were overshadowed by a bitter civil war in early 1918 between the socialist 'Reds' and the conservative 'Whites' under General Mannerheim; the Whites won with German help, and some 36,000 people died, many in prison camps.",
            el: "Η Δανία, η Νορβηγία και η Σουηδία είχαν μείνει ουδέτερες στον Α΄ Παγκόσμιο Πόλεμο, αν και τα εμπορικά τους ναυτικά υπέφεραν βαριά από τον υποβρύχιο πόλεμο. Η ανεξαρτησία της Φινλανδίας προήλθε από τις επαναστάσεις της Ρωσίας. Οι πρώτοι της μήνες σκιάστηκαν από έναν σκληρό εμφύλιο πόλεμο στις αρχές του 1918 ανάμεσα στους σοσιαλιστές «Ερυθρούς» και τους συντηρητικούς «Λευκούς» υπό τον στρατηγό Μάνερχαϊμ· οι Λευκοί νίκησαν με γερμανική βοήθεια, και περίπου 36.000 άνθρωποι πέθαναν, πολλοί σε στρατόπεδα κράτησης."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1918,
      era: {
        en: "Interwar Years",
        el: "Μεσοπόλεμος"
      },
      events: [
        {
          title: {
            en: "Iceland becomes a sovereign kingdom",
            el: "Η Ισλανδία γίνεται κυρίαρχο βασίλειο"
          },
          description: {
            en: "On 1 December 1918, Iceland becomes a sovereign state in personal union with Denmark, sharing only the king and foreign policy.",
            el: "Την 1η Δεκεμβρίου 1918, η Ισλανδία γίνεται κυρίαρχο κράτος σε προσωπική ένωση με τη Δανία, μοιραζόμενη μόνο τον βασιλιά και την εξωτερική πολιτική."
          },
          extendedDescription: {
            en: "Iceland's independence movement, led in the 19th century by Jón Sigurðsson, had won home rule in 1904. The Act of Union of 1918 allowed either side to end the union after 25 years. In 1920, a plebiscite also returned northern Schleswig to Denmark, drawing the Danish–German border where it lies today.",
            el: "Το κίνημα ανεξαρτησίας της Ισλανδίας, με ηγέτη τον 19ο αιώνα τον Γιον Σίγκουρδσον, είχε κερδίσει αυτοδιοίκηση το 1904. Η Πράξη Ένωσης του 1918 επέτρεπε σε οποιαδήποτε πλευρά να τερματίσει την ένωση μετά από 25 χρόνια. Το 1920, ένα δημοψήφισμα επέστρεψε επίσης το βόρειο Σλέσβιχ στη Δανία, χαράζοντας τα δανογερμανικά σύνορα εκεί όπου βρίσκονται σήμερα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1932,
      era: {
        en: "Interwar Years",
        el: "Μεσοπόλεμος"
      },
      events: [
        {
          title: {
            en: "The People's Home",
            el: "Το «Σπίτι του Λαού»"
          },
          description: {
            en: "Per Albin Hansson's Social Democrats take power in Sweden, beginning 44 years in government, broken only by a few months in 1936, and the building of the Swedish welfare state.",
            el: "Οι Σοσιαλδημοκράτες του Περ Άλμπιν Χάνσον αναλαμβάνουν την εξουσία στη Σουηδία, ξεκινώντας 44 χρόνια διακυβέρνησης, με μόνη διακοπή λίγους μήνες το 1936, και την οικοδόμηση του σουηδικού κράτους πρόνοιας."
          },
          extendedDescription: {
            en: "Hansson had spoken of Sweden as a folkhem — a 'people's home' where no one would be privileged or neglected. In 1938 the Saltsjöbaden Agreement between unions and employers set the pattern of peaceful collective bargaining. Across the North, similar compromises between workers, farmers and business laid the foundations of the Nordic model: universal welfare, strong unions, and open market economies.",
            el: "Ο Χάνσον είχε μιλήσει για τη Σουηδία ως folkhem — ένα «σπίτι του λαού» όπου κανείς δεν θα ήταν προνομιούχος ή παραμελημένος. Το 1938 η Συμφωνία του Σαλτσεμπάντεν ανάμεσα σε συνδικάτα και εργοδότες καθιέρωσε το πρότυπο των ειρηνικών συλλογικών διαπραγματεύσεων. Σε όλο τον Βορρά, ανάλογοι συμβιβασμοί ανάμεσα σε εργάτες, αγρότες και επιχειρήσεις έθεσαν τα θεμέλια του σκανδιναβικού μοντέλου: καθολική πρόνοια, ισχυρά συνδικάτα και ανοιχτές οικονομίες της αγοράς."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1939,
      era: {
        en: "World War II",
        el: "Β΄ Παγκόσμιος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "The Winter War",
            el: "Ο Χειμερινός Πόλεμος"
          },
          description: {
            en: "On 30 November 1939 the Soviet Union invades Finland; for 105 days the vastly outnumbered Finns hold out in bitter cold before ceding Karelia in March 1940.",
            el: "Στις 30 Νοεμβρίου 1939 η Σοβιετική Ένωση εισβάλλει στη Φινλανδία· επί 105 ημέρες οι πολύ λιγότεροι Φινλανδοί αντέχουν σε τσουχτερό κρύο, πριν παραχωρήσουν την Καρελία τον Μάρτιο του 1940."
          },
          extendedDescription: {
            en: "White-clad Finnish ski troops ambushed Soviet columns in the forests, and the world gave the 'Molotov cocktail' its name here. The Soviets lost well over 100,000 men. Finland kept its independence but lost about a tenth of its territory, and over 400,000 Karelians were evacuated. Seeking to regain it, Finland fought alongside Germany against the USSR in the Continuation War of 1941–44.",
            el: "Φινλανδοί σκιέρ-στρατιώτες ντυμένοι στα λευκά έστηναν ενέδρες στις σοβιετικές φάλαγγες μέσα στα δάση, και εδώ πήρε το όνομά της η «βόμβα μολότοφ». Οι Σοβιετικοί έχασαν πολύ περισσότερους από 100.000 άνδρες. Η Φινλανδία διατήρησε την ανεξαρτησία της αλλά έχασε περίπου το ένα δέκατο της επικράτειάς της, και πάνω από 400.000 Καρελιανοί εκκενώθηκαν. Επιδιώκοντας να την ανακτήσει, η Φινλανδία πολέμησε στο πλευρό της Γερμανίας κατά της ΕΣΣΔ στον Πόλεμο της Συνέχειας του 1941–44."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1940,
      era: {
        en: "World War II",
        el: "Β΄ Παγκόσμιος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Germany invades Denmark and Norway",
            el: "Η Γερμανία εισβάλλει στη Δανία και στη Νορβηγία"
          },
          description: {
            en: "On 9 April 1940 Germany occupies Denmark within hours and invades Norway, which fights on for two months before King Haakon VII and the government escape to London.",
            el: "Στις 9 Απριλίου 1940 η Γερμανία καταλαμβάνει τη Δανία μέσα σε λίγες ώρες και εισβάλλει στη Νορβηγία, η οποία πολεμά επί δύο μήνες πριν ο βασιλιάς Χάακον Ζ΄ και η κυβέρνηση διαφύγουν στο Λονδίνο."
          },
          extendedDescription: {
            en: "In the Oslofjord, the old guns and torpedoes of Oscarsborg fortress sank the German cruiser Blücher, buying time for the royal family and government to escape. Haakon refused German demands to appoint the collaborator Vidkun Quisling — whose name became a byword for traitor. Norway's large merchant fleet served the Allies, and resistance fighters sabotaged the heavy-water plant at Vemork, crippling the Nazi nuclear programme. Sweden stayed neutral, making concessions to Germany while sheltering refugees.",
            el: "Στο Οσλοφιόρδ, τα παλιά πυροβόλα και οι τορπίλες του φρουρίου του Όσκαρσμποργκ βύθισαν το γερμανικό καταδρομικό Μπλύχερ, κερδίζοντας χρόνο για να διαφύγουν η βασιλική οικογένεια και η κυβέρνηση. Ο Χάακον αρνήθηκε τις γερμανικές απαιτήσεις να διορίσει τον δωσίλογο Βίντκουν Κουίσλινγκ — του οποίου το όνομα έγινε συνώνυμο του προδότη. Ο μεγάλος εμπορικός στόλος της Νορβηγίας υπηρέτησε τους Συμμάχους, και αντιστασιακοί σαμποτάρισαν το εργοστάσιο βαρέος ύδατος στο Βέμορκ, πλήττοντας το ναζιστικό πυρηνικό πρόγραμμα. Η Σουηδία έμεινε ουδέτερη, κάνοντας παραχωρήσεις στη Γερμανία ενώ παράλληλα προσέφερε άσυλο σε πρόσφυγες."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1943,
      era: {
        en: "World War II",
        el: "Β΄ Παγκόσμιος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "The rescue of the Danish Jews",
            el: "Η διάσωση των Εβραίων της Δανίας"
          },
          description: {
            en: "Warned of a Nazi round-up, ordinary Danes hide their Jewish neighbours and ferry some 7,000 of them across the Øresund to safety in Sweden in fishing boats.",
            el: "Προειδοποιημένοι για μια ναζιστική επιχείρηση σύλληψης, απλοί Δανοί κρύβουν τους Εβραίους γείτονές τους και μεταφέρουν περίπου 7.000 από αυτούς με ψαρόβαρκες πέρα από το Έρεσουντ, στην ασφάλεια της Σουηδίας."
          },
          extendedDescription: {
            en: "The warning was leaked by the German diplomat Georg Ferdinand Duckwitz. Over a few weeks in October 1943, doctors, students, fishermen and police helped almost the entire Jewish community escape; fewer than 500 were caught and sent to Theresienstadt, and most of them survived. Sweden, which had announced it would take them in, received them. It remains one of the most remarkable acts of collective rescue of the Holocaust.",
            el: "Την προειδοποίηση διέρρευσε ο Γερμανός διπλωμάτης Γκέοργκ Φέρντιναντ Ντάκβιτς. Μέσα σε λίγες εβδομάδες τον Οκτώβριο του 1943, γιατροί, φοιτητές, ψαράδες και αστυνομικοί βοήθησαν σχεδόν ολόκληρη την εβραϊκή κοινότητα να διαφύγει· λιγότεροι από 500 συνελήφθησαν και στάλθηκαν στο Τερεζίνσταντ, και οι περισσότεροι από αυτούς επέζησαν. Η Σουηδία, που είχε ανακοινώσει ότι θα τους δεχόταν, τους υποδέχθηκε. Παραμένει μία από τις πιο αξιοσημείωτες πράξεις συλλογικής διάσωσης του Ολοκαυτώματος."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1944,
      era: {
        en: "World War II",
        el: "Β΄ Παγκόσμιος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "The Republic of Iceland",
            el: "Η Δημοκρατία της Ισλανδίας"
          },
          description: {
            en: "With Denmark under German occupation, Iceland ends the union and proclaims a republic at Þingvellir on 17 June 1944, in pouring rain before tens of thousands of people.",
            el: "Με τη Δανία υπό γερμανική κατοχή, η Ισλανδία τερματίζει την ένωση και ανακηρύσσει δημοκρατία στο Θίνγκβελιρ στις 17 Ιουνίου 1944, κάτω από καταρρακτώδη βροχή, μπροστά σε δεκάδες χιλιάδες ανθρώπους."
          },
          extendedDescription: {
            en: "Iceland had been occupied by British and later American forces since 1940 to keep it out of German hands. The date was the birthday of Jón Sigurðsson, the hero of the independence movement, and the place was the ancient meeting ground of the Althing. King Christian X, though hurt by the timing, sent his congratulations. The American base at Keflavík would make Iceland a key outpost of the Cold War.",
            el: "Η Ισλανδία βρισκόταν υπό κατοχή βρετανικών και αργότερα αμερικανικών δυνάμεων από το 1940, για να μην πέσει σε γερμανικά χέρια. Η ημερομηνία ήταν τα γενέθλια του Γιον Σίγκουρδσον, του ήρωα του κινήματος ανεξαρτησίας, και ο τόπος ήταν ο αρχαίος χώρος συνέλευσης της Άλθινγκ. Ο βασιλιάς Χριστιανός Ι΄, αν και πληγωμένος από τη χρονική συγκυρία, έστειλε τα συγχαρητήριά του. Η αμερικανική βάση στο Κέφλαβικ θα έκανε την Ισλανδία βασικό προπύργιο του Ψυχρού Πολέμου."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1949,
      era: {
        en: "Cold War",
        el: "Ψυχρός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Three Nordic states join NATO",
            el: "Τρία σκανδιναβικά κράτη εντάσσονται στο ΝΑΤΟ"
          },
          description: {
            en: "After talks on a Scandinavian defence union fail, Denmark, Norway and Iceland become founding members of NATO, while Sweden stays non-aligned.",
            el: "Αφού οι συνομιλίες για μια σκανδιναβική αμυντική ένωση αποτυγχάνουν, η Δανία, η Νορβηγία και η Ισλανδία γίνονται ιδρυτικά μέλη του ΝΑΤΟ, ενώ η Σουηδία μένει αδέσμευτη."
          },
          extendedDescription: {
            en: "The lesson of 1940 — that neutrality had not protected Denmark and Norway — weighed heavily. Finland, bound by a 1948 treaty of friendship with the USSR, walked a careful line between East and West that outsiders called 'Finlandisation'. In 1952 the Nordic Council was founded, and a passport union and common labour market soon followed, making the North one of the most integrated regions in the world.",
            el: "Το δίδαγμα του 1940 — ότι η ουδετερότητα δεν είχε προστατέψει τη Δανία και τη Νορβηγία — βάραινε πολύ. Η Φινλανδία, δεσμευμένη από μια συνθήκη φιλίας του 1948 με την ΕΣΣΔ, βάδιζε μια προσεκτική γραμμή ανάμεσα σε Ανατολή και Δύση, που οι ξένοι αποκάλεσαν «φινλανδοποίηση». Το 1952 ιδρύθηκε το Σκανδιναβικό Συμβούλιο, και σύντομα ακολούθησαν μια ένωση διαβατηρίων και μια κοινή αγορά εργασίας, κάνοντας τον Βορρά μία από τις πιο ολοκληρωμένες περιοχές του κόσμου."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1969,
      era: {
        en: "Cold War",
        el: "Ψυχρός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Oil in the North Sea",
            el: "Πετρέλαιο στη Βόρεια Θάλασσα"
          },
          description: {
            en: "Just before Christmas 1969, the Ekofisk field is discovered on Norway's continental shelf, transforming a nation of fishermen and shipowners into one of the world's richest countries.",
            el: "Λίγο πριν από τα Χριστούγεννα του 1969, ανακαλύπτεται το κοίτασμα Εκοφίσκ στην υφαλοκρηπίδα της Νορβηγίας, μετατρέποντας ένα έθνος ψαράδων και εφοπλιστών σε μία από τις πλουσιότερες χώρες του κόσμου."
          },
          extendedDescription: {
            en: "Norway insisted on state control through the company Statoil (now Equinor) and strict licensing. In 1990 Norway set up a sovereign wealth fund for its petroleum revenues, now among the largest in the world, invested abroad for future generations and governed by ethical guidelines. In a 1972 referendum Norwegians voted against joining the European Community — and did so again in 1994.",
            el: "Η Νορβηγία επέμεινε στον κρατικό έλεγχο μέσω της εταιρείας Statoil (σήμερα Equinor) και σε αυστηρές άδειες. Το 1990 η Νορβηγία ίδρυσε ένα κρατικό επενδυτικό ταμείο για τα έσοδα από το πετρέλαιο, σήμερα από τα μεγαλύτερα του κόσμου, που επενδύεται στο εξωτερικό για τις μελλοντικές γενιές και διέπεται από ηθικές κατευθυντήριες γραμμές. Σε δημοψήφισμα το 1972 οι Νορβηγοί ψήφισαν κατά της ένταξης στην Ευρωπαϊκή Κοινότητα — και το ίδιο έκαναν ξανά το 1994."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1973,
      era: {
        en: "Cold War",
        el: "Ψυχρός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Denmark joins the European Community",
            el: "Η Δανία εντάσσεται στην Ευρωπαϊκή Κοινότητα"
          },
          description: {
            en: "Denmark becomes the first Nordic member of the European Community on 1 January 1973, together with the United Kingdom and Ireland.",
            el: "Η Δανία γίνεται το πρώτο σκανδιναβικό μέλος της Ευρωπαϊκής Κοινότητας την 1η Ιανουαρίου 1973, μαζί με το Ηνωμένο Βασίλειο και την Ιρλανδία."
          },
          extendedDescription: {
            en: "Danish farmers depended heavily on the British market, so when Britain joined, Denmark followed. Greenland, which went with Denmark, won home rule in 1979 and voted to leave the Community, which it did in 1985 — decades before Brexit. Danish voters would later reject the Maastricht Treaty in 1992, winning opt-outs before approving it the following year.",
            el: "Οι Δανοί αγρότες εξαρτιόνταν σε μεγάλο βαθμό από τη βρετανική αγορά, οπότε όταν εντάχθηκε η Βρετανία, ακολούθησε και η Δανία. Η Γροιλανδία, που μπήκε μαζί με τη Δανία, απέκτησε αυτοδιοίκηση το 1979 και ψήφισε να αποχωρήσει από την Κοινότητα, κάτι που έγινε το 1985 — δεκαετίες πριν από το Brexit. Οι Δανοί ψηφοφόροι θα απέρριπταν αργότερα τη Συνθήκη του Μάαστριχτ το 1992, κερδίζοντας εξαιρέσεις πριν την εγκρίνουν την επόμενη χρονιά."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1986,
      era: {
        en: "Cold War",
        el: "Ψυχρός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "The murder of Olof Palme",
            el: "Η δολοφονία του Όλοφ Πάλμε"
          },
          description: {
            en: "Swedish Prime Minister Olof Palme is shot dead on a Stockholm street on 28 February 1986 while walking home from the cinema with his wife, without bodyguards.",
            el: "Ο Σουηδός πρωθυπουργός Όλοφ Πάλμε δολοφονείται με πυροβολισμό σε έναν δρόμο της Στοκχόλμης στις 28 Φεβρουαρίου 1986, ενώ επέστρεφε σπίτι από τον κινηματογράφο με τη σύζυγό του, χωρίς σωματοφύλακες."
          },
          extendedDescription: {
            en: "Palme, an outspoken critic of the Vietnam War, apartheid and the Soviet invasion of Czechoslovakia, was a towering and divisive figure. The killing shattered Sweden's sense of innocence. After one of the largest police investigations in history, prosecutors in 2020 named a man who had died in 2000 as the likely killer and closed the case, though many doubts remain. Two months later, radiation from Chernobyl was first detected in the West at Sweden's Forsmark nuclear plant.",
            el: "Ο Πάλμε, ένθερμος επικριτής του πολέμου του Βιετνάμ, του απαρτχάιντ και της σοβιετικής εισβολής στην Τσεχοσλοβακία, ήταν μια επιβλητική και διχαστική μορφή. Η δολοφονία γκρέμισε την αίσθηση αθωότητας της Σουηδίας. Μετά από μία από τις μεγαλύτερες αστυνομικές έρευνες στην ιστορία, οι εισαγγελείς το 2020 κατονόμασαν ως πιθανό δράστη έναν άνδρα που είχε πεθάνει το 2000 και έκλεισαν την υπόθεση, αν και πολλές αμφιβολίες παραμένουν. Δύο μήνες αργότερα, η ραδιενέργεια από το Τσερνόμπιλ εντοπίστηκε για πρώτη φορά στη Δύση στον πυρηνικό σταθμό Φόρσμαρκ της Σουηδίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1995,
      era: {
        en: "Post-Cold War",
        el: "Μετά τον Ψυχρό Πόλεμο"
      },
      events: [
        {
          title: {
            en: "Sweden and Finland join the EU",
            el: "Η Σουηδία και η Φινλανδία εντάσσονται στην ΕΕ"
          },
          description: {
            en: "With the Cold War over, Sweden and Finland join the European Union on 1 January 1995; Norway, after a second referendum, stays out.",
            el: "Με το τέλος του Ψυχρού Πολέμου, η Σουηδία και η Φινλανδία εντάσσονται στην Ευρωπαϊκή Ένωση την 1η Ιανουαρίου 1995· η Νορβηγία, μετά από δεύτερο δημοψήφισμα, μένει εκτός."
          },
          extendedDescription: {
            en: "Both countries had been shaken by severe banking crises in the early 1990s, and the Soviet collapse removed the barrier to Western integration. Finland went further and adopted the euro in 1999, while Swedes rejected it in a 2003 referendum. In 2000 the Øresund Bridge opened, linking Copenhagen and Malmö by road and rail for the first time.",
            el: "Και οι δύο χώρες είχαν κλονιστεί από σοβαρές τραπεζικές κρίσεις στις αρχές της δεκαετίας του 1990, και η κατάρρευση της Σοβιετικής Ένωσης άρθηκε το εμπόδιο για τη δυτική ολοκλήρωση. Η Φινλανδία προχώρησε περισσότερο και υιοθέτησε το ευρώ το 1999, ενώ οι Σουηδοί το απέρριψαν σε δημοψήφισμα το 2003. Το 2000 εγκαινιάστηκε η Γέφυρα του Έρεσουντ, που για πρώτη φορά ένωσε οδικώς και σιδηροδρομικώς την Κοπεγχάγη με το Μάλμε."
          },
          category: "political"
        }
      ]
    },
    {
      year: 2011,
      era: {
        en: "21st Century",
        el: "21ος Αιώνας"
      },
      events: [
        {
          title: {
            en: "The Oslo and Utøya attacks",
            el: "Οι επιθέσεις στο Όσλο και στην Ουτέγια"
          },
          description: {
            en: "On 22 July 2011 a far-right terrorist bombs the government quarter in Oslo and then shoots young people at a Labour Party youth camp on the island of Utøya, killing 77 in all.",
            el: "Στις 22 Ιουλίου 2011 ένας ακροδεξιός τρομοκράτης βάζει βόμβα στη συνοικία των κυβερνητικών κτιρίων στο Όσλο και έπειτα πυροβολεί νέους σε μια κατασκήνωση της νεολαίας του Εργατικού Κόμματος στο νησί Ουτέγια, σκοτώνοντας συνολικά 77 ανθρώπους."
          },
          extendedDescription: {
            en: "Most of the victims on Utøya were teenagers. It was the deadliest attack in Norway since World War II. Prime Minister Jens Stoltenberg's response — that Norway would answer with 'more democracy, more openness, and more humanity' — was widely admired. The perpetrator was sentenced to Norway's maximum term of preventive detention, which can be extended indefinitely.",
            el: "Τα περισσότερα θύματα στην Ουτέγια ήταν έφηβοι. Ήταν η πιο φονική επίθεση στη Νορβηγία από τον Β΄ Παγκόσμιο Πόλεμο. Η απάντηση του πρωθυπουργού Γενς Στόλτενμπεργκ — ότι η Νορβηγία θα απαντούσε με «περισσότερη δημοκρατία, περισσότερη διαφάνεια και περισσότερη ανθρωπιά» — προκάλεσε ευρύ θαυμασμό. Ο δράστης καταδικάστηκε στη μέγιστη ποινή προληπτικής κράτησης της Νορβηγίας, η οποία μπορεί να παρατείνεται επ' αόριστον."
          },
          category: "political"
        }
      ]
    },
    {
      year: 2023,
      era: {
        en: "21st Century",
        el: "21ος Αιώνας"
      },
      events: [
        {
          title: {
            en: "Finland joins NATO",
            el: "Η Φινλανδία εντάσσεται στο ΝΑΤΟ"
          },
          description: {
            en: "Abandoning decades of military non-alignment after Russia's full-scale invasion of Ukraine, Finland becomes NATO's 31st member on 4 April 2023.",
            el: "Εγκαταλείποντας δεκαετίες στρατιωτικής αδέσμευτης πολιτικής μετά την εισβολή πλήρους κλίμακας της Ρωσίας στην Ουκρανία, η Φινλανδία γίνεται το 31ο μέλος του ΝΑΤΟ στις 4 Απριλίου 2023."
          },
          extendedDescription: {
            en: "Public support for membership in Finland jumped from around a quarter to over three-quarters within weeks of the February 2022 invasion. Finland's accession more than doubled NATO's land border with Russia, adding some 1,340 kilometres. Finland brought one of Europe's largest artillery forces and a wartime army of some 280,000 troops, built on universal male conscription.",
            el: "Η δημόσια υποστήριξη για την ένταξη στη Φινλανδία εκτινάχθηκε από περίπου ένα τέταρτο σε πάνω από τρία τέταρτα μέσα σε λίγες εβδομάδες από την εισβολή του Φεβρουαρίου 2022. Η ένταξη της Φινλανδίας υπερδιπλασίασε τα χερσαία σύνορα του ΝΑΤΟ με τη Ρωσία, προσθέτοντας περίπου 1.340 χιλιόμετρα. Η Φινλανδία έφερε μία από τις μεγαλύτερες δυνάμεις πυροβολικού της Ευρώπης και έναν στρατό πολέμου περίπου 280.000 ανδρών, βασισμένο στην καθολική ανδρική θητεία."
          },
          category: "military"
        }
      ]
    },
    {
      year: 2024,
      era: {
        en: "21st Century",
        el: "21ος Αιώνας"
      },
      events: [
        {
          title: {
            en: "Sweden ends two centuries of neutrality",
            el: "Η Σουηδία τερματίζει δύο αιώνες ουδετερότητας"
          },
          description: {
            en: "After nearly two years of waiting for Turkish and Hungarian approval, Sweden becomes NATO's 32nd member on 7 March 2024 — the whole Nordic region now in one alliance.",
            el: "Μετά από σχεδόν δύο χρόνια αναμονής για την έγκριση της Τουρκίας και της Ουγγαρίας, η Σουηδία γίνεται το 32ο μέλος του ΝΑΤΟ στις 7 Μαρτίου 2024 — ολόκληρη η σκανδιναβική περιοχή πλέον σε μία συμμαχία."
          },
          extendedDescription: {
            en: "Sweden had not fought a war since the brief campaign against Norway in 1814, and non-alignment had been part of its national identity through two world wars and the Cold War. Joining NATO turned the Baltic Sea into what some called a 'NATO lake', surrounded by allied states except for Russia's coast around St Petersburg and Kaliningrad. It closed a chapter that began when Charles XII's empire fell.",
            el: "Η Σουηδία δεν είχε πολεμήσει από τη σύντομη εκστρατεία εναντίον της Νορβηγίας το 1814, και η αδέσμευτη πολιτική ήταν μέρος της εθνικής της ταυτότητας σε δύο παγκόσμιους πολέμους και στον Ψυχρό Πόλεμο. Η ένταξη στο ΝΑΤΟ μετέτρεψε τη Βαλτική σε αυτό που ορισμένοι αποκάλεσαν «λίμνη του ΝΑΤΟ», περιβαλλόμενη από συμμαχικά κράτη εκτός από τις ρωσικές ακτές γύρω από την Αγία Πετρούπολη και το Καλίνινγκραντ. Έκλεισε ένα κεφάλαιο που είχε ανοίξει όταν έπεσε η αυτοκρατορία του Καρόλου ΙΒ΄."
          },
          category: "military"
        }
      ]
    }
  ]
} satisfies PeriodDefinition;
