/** The Weimar Republic — Δημοκρατία της Βαϊμάρης · German History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const WEIMAR_REPUBLIC = {
  id: "weimar-republic" as const,
  label: {
    en: "The Weimar Republic",
    el: "Δημοκρατία της Βαϊμάρης"
  },
  supertitle: {
    en: "Weimarer Republik",
    el: "Δημοκρατία της Βαϊμάρης"
  },
  title: {
    en: "The Weimar Republic",
    el: "Η Δημοκρατία της Βαϊμάρης"
  },
  subtitle: {
    en: "From the murder of Rosa Luxemburg and the National Assembly at Weimar through Versailles, the Kapp Putsch, the hyperinflation of 1923, the Beer Hall Putsch, and the Dawes Plan, the cultural brilliance of Bauhaus and Brecht, the Locarno settlement and the election of Hindenburg, to the Wall Street Crash, Brüning's deflation, the Nazi breakthrough, the year of five elections, and the Enabling Act that ended Germany's first democracy. Slide across the decades to read the major events of fourteen turbulent years.",
    el: "Από τη δολοφονία της Ρόζας Λούξεμπουργκ και την Εθνική Συνέλευση της Βαϊμάρης μέσα από τις Βερσαλλίες, το Πραξικόπημα του Καπ, τον υπερπληθωρισμό του 1923, το Πραξικόπημα της Μπυραρίας και το Σχέδιο Ντόους, την πολιτιστική λαμπρότητα του Bauhaus και του Μπρεχτ, τη διευθέτηση του Λοκάρνο και την εκλογή του Χίντενμπουργκ, έως το Κραχ της Wall Street, τον αποπληθωρισμό του Μπρύνινγκ, τη ναζιστική ρήξη, το έτος των πέντε εκλογών και τον Εξουσιοδοτικό Νόμο που τερμάτισε την πρώτη δημοκρατία της Γερμανίας. Μετακινηθείτε ανάμεσα στις δεκαετίες για να διαβάσετε τα γεγονότα δεκατέσσερων ταραχωδών χρόνων."
  },
  menuDescription: {
    en: "Fourteen fragile years between Versailles and Hitler: revolt, hyperinflation, jazz, and collapse.",
    el: "Δεκατέσσερα εύθραυστα χρόνια ανάμεσα στις Βερσαλλίες και τον Χίτλερ: εξέγερση, υπερπληθωρισμός, τζαζ και κατάρρευση."
  },
  footerLabel: {
    en: "The Weimar Republic · 1919-1933 AD",
    el: "Δημοκρατία της Βαϊμάρης · 1919-1933 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Weimar Republic",
    el: "Δημοκρατία της Βαϊμάρης"
  },
  theme: THEMES.violet,
  timeline: [
    {
      year: 1919,
      month: 1,
      era: {
        en: "Spartacist Uprising",
        el: "Σπαρτακιστική Εξέγερση"
      },
      events: [
        {
          title: {
            en: "Murder of Rosa Luxemburg and Karl Liebknecht",
            el: "Δολοφονία της Ρόζας Λούξεμπουργκ και του Καρλ Λίμπκνεχτ"
          },
          description: {
            en: "After a week of street fighting in Berlin between Spartacist communists and government-backed Freikorps, the captured leaders of the Communist Party of Germany — Rosa Luxemburg and Karl Liebknecht — are beaten and shot on 15 January. Luxemburg's body is thrown into the Landwehr canal.",
            el: "Έπειτα από μια εβδομάδα οδομαχιών στο Βερολίνο μεταξύ Σπαρτακιστών κομμουνιστών και κυβερνητικών Freikorps, οι αιχμαλωτισμένοι ηγέτες του Κομμουνιστικού Κόμματος Γερμανίας — η Ρόζα Λούξεμπουργκ και ο Καρλ Λίμπκνεχτ — δέρνονται και πυροβολούνται στις 15 Ιανουαρίου. Το σώμα της Λούξεμπουργκ ρίχνεται στο κανάλι Landwehr."
          },
          extendedDescription: {
            en: "The Spartacist Uprising was the first great test of the November settlement. Friedrich Ebert's SPD government, in alliance with the army under General Groener and the irregular Freikorps under Gustav Noske, chose to crush the revolutionary left rather than risk a Russian-style upheaval. The strategy preserved parliamentary democracy but at the price of poisoning the left's politics for fifteen years: the KPD would never forgive the SPD for the murders, and the divided socialism that resulted would prove fatally weak against the Nazis. The Freikorps the government had unleashed would also turn against the Republic — many of their officers would, a decade later, march behind Hitler.",
            el: "Η Σπαρτακιστική Εξέγερση ήταν η πρώτη μεγάλη δοκιμασία της διευθέτησης του Νοεμβρίου. Η κυβέρνηση του SPD του Φρίντριχ Έμπερτ, σε συμμαχία με τον στρατό υπό τον Στρατηγό Γκρένερ και τα παράτυπα Freikorps υπό τον Γκούσταβ Νόσκε, επέλεξε να συντρίψει την επαναστατική Αριστερά παρά να ρισκάρει αναταραχή ρωσικού τύπου. Η στρατηγική διατήρησε την κοινοβουλευτική δημοκρατία αλλά με το τίμημα της δηλητηρίασης της αριστερής πολιτικής για δεκαπέντε χρόνια: το KPD δεν θα συγχωρούσε ποτέ το SPD για τις δολοφονίες, και ο διαιρεμένος σοσιαλισμός που προέκυψε θα αποδεικνυόταν θανάσιμα αδύναμος κατά των Ναζί. Τα Freikorps που είχε εξαπολύσει η κυβέρνηση θα στρέφονταν επίσης κατά της Δημοκρατίας — πολλοί από τους αξιωματικούς τους θα παρέλαυναν, μια δεκαετία αργότερα, πίσω από τον Χίτλερ."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1919,
      month: 6,
      era: {
        en: "Versailles",
        el: "Βερσαλλίες"
      },
      events: [
        {
          title: {
            en: "The Treaty of Versailles signed under protest",
            el: "Η Συνθήκη των Βερσαλλιών υπογράφεται υπό διαμαρτυρία"
          },
          description: {
            en: "On 28 June, five years to the day after Sarajevo, the German foreign minister Hermann Müller signs the Treaty of Versailles in the Hall of Mirrors where Wilhelm I was proclaimed emperor in 1871. Germany loses 13 percent of its territory and 10 percent of its population, accepts the 'war guilt' of Article 231, and is presented with a reparations bill to be set later.",
            el: "Στις 28 Ιουνίου, πέντε χρόνια ακριβώς μετά το Σαράγεβο, ο γερμανός υπουργός εξωτερικών Χέρμαν Μύλερ υπογράφει τη Συνθήκη των Βερσαλλιών στην Αίθουσα των Κατόπτρων όπου ο Γουλιέλμος Α΄ είχε ανακηρυχθεί αυτοκράτορας το 1871. Η Γερμανία χάνει το 13 τοις εκατό της επικράτειάς της και το 10 τοις εκατό του πληθυσμού της, αποδέχεται την «πολεμική ενοχή» του Άρθρου 231 και της παρουσιάζεται λογαριασμός αποζημιώσεων που θα οριστεί αργότερα."
          },
          extendedDescription: {
            en: "Versailles imposed Alsace-Lorraine to France, the Saar to League administration, Eupen-Malmédy to Belgium, Northern Schleswig to Denmark, and the Polish Corridor cutting East Prussia from the rest of the Reich. The German army was capped at 100,000 men, the navy at six pre-Dreadnought battleships, the air force abolished, the Rhineland demilitarised. Reparations were eventually fixed in 1921 at 132 billion gold marks. The treaty was, in Maynard Keynes's instant judgement in The Economic Consequences of the Peace, 'a Carthaginian peace'. Every government of the Republic would, for the next fourteen years, expend its political capital trying to revise it.",
            el: "Οι Βερσαλλίες αποδίδουν την Αλσατία-Λωρραίνη στη Γαλλία, το Σάαρ στη διοίκηση της Κοινωνίας των Εθνών, το Έιπεν-Μαλμεντί στο Βέλγιο, τη Βόρεια Σλέσβιγκ στη Δανία και τον Πολωνικό Διάδρομο που χωρίζει την Ανατολική Πρωσία από το υπόλοιπο Reich. Ο γερμανικός στρατός περιορίζεται σε 100.000 άνδρες, το ναυτικό σε έξι προ-Dreadnought θωρηκτά, η αεροπορία καταργείται, η Ρηνανία αποστρατιωτικοποιείται. Οι αποζημιώσεις τελικά καθορίζονται το 1921 σε 132 δισεκατομμύρια χρυσά μάρκα. Η συνθήκη ήταν, στην άμεση κρίση του Μέιναρντ Κέινς στις Οικονομικές Συνέπειες της Ειρήνης, «μια καρχηδονιακή ειρήνη». Κάθε κυβέρνηση της Δημοκρατίας θα ξόδευε, για τα επόμενα δεκατέσσερα χρόνια, το πολιτικό της κεφάλαιο προσπαθώντας να την αναθεωρήσει."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1919,
      month: 8,
      era: {
        en: "Weimar Constitution",
        el: "Σύνταγμα της Βαϊμάρης"
      },
      events: [
        {
          title: {
            en: "The Weimar Constitution adopted",
            el: "Το Σύνταγμα της Βαϊμάρης υιοθετείται"
          },
          description: {
            en: "Meeting in the National Theatre at Weimar — chosen for its association with Goethe and Schiller, away from revolutionary Berlin — the National Assembly under jurist Hugo Preuß adopts a constitution. Germany becomes a federal parliamentary republic with proportional representation, universal suffrage for men and women, and an emergency-powers article — Article 48 — that will prove fatal.",
            el: "Συνεδριάζοντας στο Εθνικό Θέατρο της Βαϊμάρης — επιλεγμένο για τη σύνδεσή του με τον Γκαίτε και τον Σίλλερ, μακριά από το επαναστατικό Βερολίνο — η Εθνική Συνέλευση υπό τον νομικό Χούγκο Πρόις υιοθετεί σύνταγμα. Η Γερμανία γίνεται ομοσπονδιακή κοινοβουλευτική δημοκρατία με αναλογική εκπροσώπηση, καθολική ψηφοφορία για άνδρες και γυναίκες, και ένα άρθρο εκτάκτων εξουσιών — το Άρθρο 48 — που θα αποδειχθεί μοιραίο."
          },
          extendedDescription: {
            en: "The Weimar Constitution was, on paper, the most liberal in Europe. Catalogue of civil rights, social rights to housing and education, an independent judiciary, an elected Reichspräsident who served seven years and could dissolve the Reichstag. But the strict proportional representation produced a Reichstag of fifteen and more parties, none ever able to command a majority; the directly elected presidency created an alternative source of legitimacy to parliament; and Article 48, drafted as an emergency reserve for crisis, would by 1932 become the routine instrument of government. The constitution functioned for a decade and then, slowly, allowed itself to be dismantled.",
            el: "Το Σύνταγμα της Βαϊμάρης ήταν, στο χαρτί, το πιο φιλελεύθερο στην Ευρώπη. Κατάλογος ατομικών δικαιωμάτων, κοινωνικά δικαιώματα στη στέγη και την εκπαίδευση, ανεξάρτητη δικαιοσύνη, αιρετός Reichspräsident που υπηρετούσε εφτά χρόνια και μπορούσε να διαλύσει το Reichstag. Αλλά η αυστηρή αναλογική εκπροσώπηση παρήγαγε ένα Reichstag δεκαπέντε και περισσότερων κομμάτων, κανένα ποτέ ικανό να εξασφαλίσει πλειοψηφία· η άμεσα εκλεγμένη προεδρία δημιούργησε εναλλακτική πηγή νομιμοποίησης παράλληλη στο κοινοβούλιο· και το Άρθρο 48, διατυπωμένο ως εφεδρεία έκτακτης ανάγκης για κρίση, θα γινόταν έως το 1932 το συνηθισμένο εργαλείο διακυβέρνησης. Το σύνταγμα λειτούργησε για μια δεκαετία και μετά, σιγά σιγά, άφησε τον εαυτό του να αποσυναρμολογηθεί."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1920,
      month: 3,
      era: {
        en: "Kapp Putsch",
        el: "Πραξικόπημα του Καπ"
      },
      events: [
        {
          title: {
            en: "The Kapp Putsch and the general strike",
            el: "Το Πραξικόπημα του Καπ και η γενική απεργία"
          },
          description: {
            en: "On 13 March, rebel Freikorps under Wolfgang Kapp and General Walther von Lüttwitz march on Berlin. The army refuses to defend the Republic — General Hans von Seeckt declares 'Reichswehr does not shoot at Reichswehr' — but the trade unions call a general strike that paralyses the country within hours. The putsch collapses in four days.",
            el: "Στις 13 Μαρτίου, στασιαστές Freikorps υπό τον Βόλφγκανγκ Καπ και τον Στρατηγό Βάλτερ φον Λύτβιτς βαδίζουν προς το Βερολίνο. Ο στρατός αρνείται να υπερασπίσει τη Δημοκρατία — ο Στρατηγός Χανς φον Σέεκτ διακηρύσσει «Reichswehr δεν πυροβολεί Reichswehr» — αλλά τα συνδικάτα κηρύσσουν γενική απεργία που παραλύει τη χώρα μέσα σε ώρες. Το πραξικόπημα καταρρέει σε τέσσερις ημέρες."
          },
          extendedDescription: {
            en: "The general strike of March 1920 — twelve million workers, the largest in German history — was the moment when the working class saved the Weimar constitution from the very army it depended on. The lesson Ebert and Noske failed to learn was that the Reichswehr was politically unreliable: officers who refused to fire on right-wing putschists would happily fire on left-wing strikers in the Ruhr a few weeks later, killing 1,000 in the suppression of the Ruhr Uprising. The Freikorps that mounted the Kapp Putsch were not punished; their officers' careers continued in the new army. The seeds of 1933 were already visible in 1920.",
            el: "Η γενική απεργία του Μαρτίου 1920 — δώδεκα εκατομμύρια εργάτες, η μεγαλύτερη στη γερμανική ιστορία — ήταν η στιγμή που η εργατική τάξη έσωσε το σύνταγμα της Βαϊμάρης από τον ίδιο τον στρατό από τον οποίο εξαρτιόταν. Το μάθημα που ο Έμπερτ και ο Νόσκε απέτυχαν να μάθουν ήταν ότι η Reichswehr ήταν πολιτικά αναξιόπιστη: αξιωματικοί που αρνούνταν να πυροβολήσουν δεξιούς πραξικοπηματίες θα πυροβολούσαν ευχαρίστως αριστερούς απεργούς στο Ρουρ λίγες εβδομάδες αργότερα, σκοτώνοντας 1.000 στην καταστολή της Εξέγερσης του Ρουρ. Τα Freikorps που πραγματοποίησαν το Πραξικόπημα του Καπ δεν τιμωρήθηκαν· οι καριέρες των αξιωματικών τους συνεχίστηκαν στον νέο στρατό. Οι σπόροι του 1933 ήταν ήδη ορατοί το 1920."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1922,
      month: 4,
      era: {
        en: "Rapallo and Rathenau",
        el: "Ραπάλλο και Ράτενάου"
      },
      events: [
        {
          title: {
            en: "Treaty of Rapallo and the murder of Rathenau",
            el: "Συνθήκη του Ραπάλλο και η δολοφονία του Ράτενάου"
          },
          description: {
            en: "On 16 April, on the margins of the Genoa Conference, Foreign Minister Walther Rathenau signs the Treaty of Rapallo with Soviet Russia: the two pariahs of Europe restore relations, renounce reparations, and open the way for secret German military cooperation on Russian soil. Two months later, on 24 June, Rathenau is murdered by right-wing assassins in Berlin.",
            el: "Στις 16 Απριλίου, στο περιθώριο του Συνεδρίου της Γένουας, ο υπουργός εξωτερικών Βάλτερ Ράτενάου υπογράφει τη Συνθήκη του Ραπάλλο με τη Σοβιετική Ρωσία: οι δύο παρίες της Ευρώπης αποκαθιστούν σχέσεις, παραιτούνται από αποζημιώσεις και ανοίγουν τον δρόμο για μυστική γερμανική στρατιωτική συνεργασία σε ρωσικό έδαφος. Δύο μήνες αργότερα, στις 24 Ιουνίου, ο Ράτενάου δολοφονείται από ακροδεξιούς δολοφόνους στο Βερολίνο."
          },
          extendedDescription: {
            en: "Rapallo was the most consequential diplomatic stroke of the Weimar Republic: a quiet Russo-German partnership of the dispossessed that allowed Reichswehr tank and aviation training at Kazan and Lipetsk in exchange for German industrial assistance to Soviet five-year plans. The arrangement would survive until Hitler tore it up in 1933. Rathenau himself — the brilliant Jewish industrialist who had organised the German war economy and then served Stresemann's predecessors as the architect of fulfilment policy — was killed by members of the secret Organisation Consul, who chanted on the streets afterwards 'Knallt ab den Walther Rathenau, die gottverfluchte Judensau' ('Shoot down Walther Rathenau, the goddamned Jewish swine'). His killers, like Erzberger's the previous summer, were celebrated as patriotic martyrs by half the right-wing press.",
            el: "Το Ραπάλλο ήταν η πιο μοιραία διπλωματική κίνηση της Δημοκρατίας της Βαϊμάρης: μια ήσυχη ρωσογερμανική εταιρική σχέση των αποστερημένων που επέτρεψε εκπαίδευση αρμάτων μάχης και αεροπορίας της Reichswehr στο Καζάν και το Λίπετσκ σε αντάλλαγμα γερμανικής βιομηχανικής βοήθειας στα σοβιετικά πενταετή σχέδια. Η διευθέτηση θα επιβίωνε έως ότου ο Χίτλερ τη σκίσει το 1933. Ο ίδιος ο Ράτενάου — ο λαμπρός Εβραίος βιομήχανος που είχε οργανώσει τη γερμανική πολεμική οικονομία και κατόπιν υπηρέτησε τους προκατόχους του Στρέζεμαν ως αρχιτέκτονας της πολιτικής εκπλήρωσης — σκοτώθηκε από μέλη της μυστικής Οργάνωσης Consul, που φώναζαν στους δρόμους μετά «Knallt ab den Walther Rathenau, die gottverfluchte Judensau» («Πυροβολήστε τον Βάλτερ Ράτενάου, το καταραμένο εβραϊκό γουρούνι»). Οι δολοφόνοι του, όπως εκείνοι του Έρτσμπεργκερ το προηγούμενο καλοκαίρι, εορτάστηκαν ως πατριωτικοί μάρτυρες από το μισό δεξιό τύπο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1923,
      month: 1,
      era: {
        en: "Year of Crisis",
        el: "Έτος Κρίσης"
      },
      events: [
        {
          title: {
            en: "Ruhr occupation and hyperinflation",
            el: "Κατοχή του Ρουρ και υπερπληθωρισμός"
          },
          description: {
            en: "When Germany defaults on reparations, French and Belgian troops occupy the Ruhr industrial basin in January. The government calls for passive resistance and prints money to pay striking workers; the result is the most spectacular hyperinflation in history. By November, one dollar costs 4.2 trillion marks.",
            el: "Όταν η Γερμανία αθετεί τις αποζημιώσεις, γαλλικά και βελγικά στρατεύματα καταλαμβάνουν τη βιομηχανική λεκάνη του Ρουρ τον Ιανουάριο. Η κυβέρνηση καλεί σε παθητική αντίσταση και τυπώνει χρήμα για να πληρώνει απεργούς εργάτες· το αποτέλεσμα είναι ο πιο θεαματικός υπερπληθωρισμός στην ιστορία. Έως τον Νοέμβριο, ένα δολάριο κοστίζει 4,2 τρισεκατομμύρια μάρκα."
          },
          extendedDescription: {
            en: "Workers were paid twice a day and rushed to spend the morning's wages before the afternoon's price rises. Hausfrauen carried banknotes in laundry baskets and burned them for warmth — they cost less than firewood. Pensioners, savers, and middle-class people on fixed incomes were wiped out; a generation's bourgeois savings evaporated. The trauma of 1923 made the German middle classes pathologically afraid of inflation — a fear that would, ten years later, help fuel acceptance of Brüning's deflationary policies that produced the mass unemployment Hitler exploited. Currency reform under the Rentenmark in November, engineered by Hjalmar Schacht, finally stopped the spiral.",
            el: "Οι εργάτες πληρώνονταν δύο φορές την ημέρα και έσπευδαν να ξοδέψουν τα πρωινά μισθούς προτού αυξηθούν οι απογευματινές τιμές. Νοικοκυρές κουβαλούσαν τραπεζογραμμάτια σε καλάθια ρούχων και τα έκαιγαν για ζεστασιά — κόστιζαν λιγότερο από καυσόξυλα. Συνταξιούχοι, αποταμιευτές και μεσοαστοί με σταθερά εισοδήματα εξαφανίστηκαν· οι αστικές αποταμιεύσεις μιας γενιάς εξατμίστηκαν. Το τραύμα του 1923 έκανε τις γερμανικές μεσαίες τάξεις παθολογικά φοβισμένες για τον πληθωρισμό — φόβο που θα, δέκα χρόνια αργότερα, βοηθούσε να τροφοδοτηθεί η αποδοχή των αποπληθωριστικών πολιτικών του Μπρύνινγκ που παρήγαγαν τη μαζική ανεργία που εκμεταλλεύτηκε ο Χίτλερ. Η νομισματική μεταρρύθμιση υπό το Rentenmark τον Νοέμβριο, σχεδιασμένη από τον Χιάλμαρ Σαχτ, τελικά σταμάτησε τη σπείρα."
          },
          category: "political"
        },
        {
          title: {
            en: "The Beer Hall Putsch in Munich",
            el: "Το Πραξικόπημα της Μπυραρίας στο Μόναχο"
          },
          description: {
            en: "On 8-9 November, a thirty-four-year-old Austrian agitator named Adolf Hitler tries to launch a 'march on Berlin' from a Munich beer hall. The National Socialists are dispersed by sixteen rifle shots from the Bavarian police at the Feldherrnhalle. Hitler flees, is captured two days later, and is sentenced to five years' imprisonment.",
            el: "Στις 8-9 Νοεμβρίου, ένας τριάντα τεσσάρων ετών αυστριακός ταραχοποιός ονόματι Άντολφ Χίτλερ προσπαθεί να εξαπολύσει «πορεία προς το Βερολίνο» από μια μπυραρία του Μονάχου. Οι Εθνικοσοσιαλιστές διασκορπίζονται από δεκαέξι πυροβολισμούς της βαυαρικής αστυνομίας στο Feldherrnhalle. Ο Χίτλερ φεύγει, συλλαμβάνεται δύο μέρες αργότερα και καταδικάζεται σε πέντε χρόνια φυλάκισης."
          },
          extendedDescription: {
            en: "Hitler served only nine months at Landsberg fortress, in conditions that he later compared favourably to a university. He used the time to dictate the first volume of Mein Kampf to Rudolf Hess. The trial, in which the judge allowed him to make day-long political speeches, turned him into a national figure; the leniency of the sentence — for high treason — revealed the Bavarian judiciary's sympathy with the radical right. Hitler emerged from prison convinced of two lessons: that street insurrection could not succeed in Germany, and that the way to power was through the ballot box and the patient use of legal forms. He would spend the next ten years applying both.",
            el: "Ο Χίτλερ εξέτισε μόνο εννέα μήνες στο φρούριο του Λάντσμπεργκ, σε συνθήκες που αργότερα συνέκρινε ευνοϊκά με πανεπιστήμιο. Χρησιμοποίησε τον χρόνο για να υπαγορεύσει τον πρώτο τόμο του Mein Kampf στον Ρούντολφ Ες. Η δίκη, στην οποία ο δικαστής τού επέτρεψε να εκφωνεί ολοήμερες πολιτικές ομιλίες, τον μετέτρεψε σε εθνική φυσιογνωμία· η επιείκεια της ποινής — για εσχάτη προδοσία — αποκάλυψε τη συμπάθεια της βαυαρικής δικαιοσύνης προς τη ριζοσπαστική δεξιά. Ο Χίτλερ βγήκε από τη φυλακή πεπεισμένος για δύο μαθήματα: ότι η επανάσταση του δρόμου δεν μπορούσε να επιτύχει στη Γερμανία, και ότι ο δρόμος προς την εξουσία περνούσε από την κάλπη και την υπομονετική χρήση νομικών μορφών. Θα ξόδευε τα επόμενα δέκα χρόνια εφαρμόζοντας και τα δύο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1924,
      month: 8,
      era: {
        en: "Dawes Plan",
        el: "Σχέδιο Ντόους"
      },
      events: [
        {
          title: {
            en: "The Dawes Plan and the start of recovery",
            el: "Το Σχέδιο Ντόους και η αρχή της ανάκαμψης"
          },
          description: {
            en: "An international committee under the American banker Charles G. Dawes restructures German reparations on a sliding scale tied to economic capacity, and underwrites a stabilisation loan of 800 million gold marks. American capital begins to flow into Germany; by 1928 the Reich is once again the largest industrial economy in Europe.",
            el: "Διεθνής επιτροπή υπό τον αμερικανό τραπεζίτη Τσαρλς Τζι Ντόους αναδιαρθρώνει τις γερμανικές αποζημιώσεις σε κλιμακούμενη βάση συνδεδεμένη με την οικονομική ικανότητα και εγγυάται δάνειο σταθεροποίησης 800 εκατομμυρίων χρυσών μάρκων. Αμερικανικό κεφάλαιο αρχίζει να ρέει στη Γερμανία· έως το 1928 το Reich είναι ξανά η μεγαλύτερη βιομηχανική οικονομία στην Ευρώπη."
          },
          extendedDescription: {
            en: "The Dawes years — christened 'the Golden Twenties' in retrospect — were the only stretch of Weimar prosperity, financed by short-term American loans recycled to pay reparations to the Allies who repaid their war debts to America. The system worked beautifully until Wall Street stopped lending in 1929, at which point it collapsed in months. Germany used the breathing space remarkably well: industrial output recovered to 1913 levels by 1927, modern Bauhaus architecture and Brecht's theatre flourished in Berlin, the eight-hour day became normal, and the welfare state expanded. The Republic seemed at last to be working — even as its political foundations remained dangerously narrow.",
            el: "Τα χρόνια Ντόους — βαφτισμένα «Χρυσά Είκοσι» αναδρομικά — ήταν η μοναδική περίοδος ευημερίας της Βαϊμάρης, χρηματοδοτημένη από βραχυπρόθεσμα αμερικανικά δάνεια που ανακυκλώνονταν για να πληρώσουν τις αποζημιώσεις προς τους Συμμάχους που αποπλήρωναν τα πολεμικά χρέη τους στην Αμερική. Το σύστημα δούλευε όμορφα έως ότου η Wall Street σταμάτησε να δανείζει το 1929, οπότε κατέρρευσε σε μήνες. Η Γερμανία χρησιμοποίησε αυτή την ανάσα αξιοσημείωτα καλά: η βιομηχανική παραγωγή ανέκαμψε στα επίπεδα του 1913 έως το 1927, η μοντέρνα Bauhaus αρχιτεκτονική και το θέατρο του Μπρεχτ άνθισαν στο Βερολίνο, το οχτάωρο έγινε κανονικό και το κράτος πρόνοιας επεκτάθηκε. Η Δημοκρατία φαινόταν επιτέλους να λειτουργεί — ακόμη κι αν τα πολιτικά της θεμέλια παρέμεναν επικίνδυνα στενά."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1925,
      month: 10,
      era: {
        en: "Locarno",
        el: "Λοκάρνο"
      },
      events: [
        {
          title: {
            en: "Locarno Treaties; Hindenburg elected president",
            el: "Συνθήκες του Λοκάρνο· ο Χίντενμπουργκ εκλέγεται πρόεδρος"
          },
          description: {
            en: "In April, the seventy-seven-year-old Field Marshal Paul von Hindenburg is elected Reichspräsident after Ebert's death. In October, foreign minister Gustav Stresemann signs the Locarno Treaties: Germany voluntarily guarantees its western frontier with France and Belgium. Aristide Briand and Stresemann share the Nobel Peace Prize the following year.",
            el: "Τον Απρίλιο, ο εβδομηνταεπτά ετών Στρατάρχης Πάουλ φον Χίντενμπουργκ εκλέγεται Reichspräsident μετά τον θάνατο του Έμπερτ. Τον Οκτώβριο, ο υπουργός εξωτερικών Γκούσταβ Στρέζεμαν υπογράφει τις Συνθήκες του Λοκάρνο: η Γερμανία εγγυάται εθελοντικά το δυτικό της σύνορο με τη Γαλλία και το Βέλγιο. Ο Αριστείδης Μπριάν και ο Στρέζεμαν μοιράζονται το Νόμπελ Ειρήνης τον επόμενο χρόνο."
          },
          extendedDescription: {
            en: "The contradiction of 1925 captured Weimar in miniature. Stresemann's foreign policy — patient, multilateral, aimed at peaceful revision — would by 1926 secure Germany a permanent seat on the League of Nations Council. The election of Hindenburg, by contrast, put a monarchist conservative at the head of the Republican state, a man who never accepted the Republic he was supposed to defend. The two strands — democratic foreign policy and authoritarian domestic instinct — coexisted as long as Stresemann lived. When he died in October 1929, three weeks before the Wall Street Crash, the balance fell apart.",
            el: "Η αντίφαση του 1925 αποτύπωσε τη Βαϊμάρη σε μικρογραφία. Η εξωτερική πολιτική του Στρέζεμαν — υπομονετική, πολυμερής, στοχευμένη στην ειρηνική αναθεώρηση — έως το 1926 θα εξασφάλιζε στη Γερμανία μόνιμη έδρα στο Συμβούλιο της Κοινωνίας των Εθνών. Η εκλογή του Χίντενμπουργκ, αντίθετα, έβαζε έναν μοναρχικό συντηρητικό στην κεφαλή του Δημοκρατικού κράτους, άνδρα που ποτέ δεν αποδέχτηκε τη Δημοκρατία που υποτίθεται ότι υπερασπιζόταν. Οι δύο τάσεις — δημοκρατική εξωτερική πολιτική και αυταρχικό εσωτερικό ένστικτο — συνυπήρχαν για όσο ζούσε ο Στρέζεμαν. Όταν πέθανε τον Οκτώβριο του 1929, τρεις εβδομάδες πριν από το Κραχ της Wall Street, η ισορροπία διαλύθηκε."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1927,
      month: 1,
      era: {
        en: "Weimar Culture",
        el: "Πολιτισμός της Βαϊμάρης"
      },
      events: [
        {
          title: {
            en: "The brilliance of Weimar culture",
            el: "Η λαμπρότητα του πολιτισμού της Βαϊμάρης"
          },
          description: {
            en: "Fritz Lang's Metropolis opens in Berlin; the Bauhaus moves to a new Gropius-designed campus in Dessau; Bertolt Brecht and Kurt Weill stage the Threepenny Opera the next year. Thomas Mann, Stefan Zweig, Heinrich Mann, Alfred Döblin, Walter Benjamin, Theodor Adorno, Erich Maria Remarque, Marlene Dietrich — Weimar's brief flowering remakes modern culture.",
            el: "Η Μητρόπολη του Φριτς Λανγκ έχει πρεμιέρα στο Βερολίνο· το Bauhaus μετακομίζει σε νέο σχεδιασμένο από τον Γκρόπιους κάμπους στο Ντεσσάου· ο Μπέρτολτ Μπρεχτ και ο Κουρτ Βάιλ ανεβάζουν την Όπερα της Πεντάρας τον επόμενο χρόνο. Ο Τόμας Μαν, ο Στέφαν Τσβάιχ, ο Χάινριχ Μαν, ο Άλφρεντ Ντέμπλιν, ο Βάλτερ Μπένγιαμιν, ο Τέοντορ Αντόρνο, ο Έριχ Μαρία Ρεμάρκ, η Μαρλέν Ντίτριχ — η σύντομη άνθηση της Βαϊμάρης ξαναφτιάχνει τη σύγχρονη κουλτούρα."
          },
          extendedDescription: {
            en: "Weimar Berlin had perhaps a million inhabitants when the new century opened; by 1925 it had four million, the third-largest city in the world. Its cabaret scene, its sexual freedom, its experimental theatre, its physics, its psychoanalysis — Einstein and Freud were household names — and its political cinema together produced what Peter Gay called a culture of outsiders newly installed inside. Most of its central figures were Jewish; many were exiled or murdered after 1933. What Weimar created was disproportionately important to twentieth-century culture: from Bauhaus furniture and the typeface of every modern paperback to the political philosophy of the Frankfurt School. The Republic that hated itself produced art that the world would love.",
            el: "Το Βερολίνο της Βαϊμάρης είχε ίσως εκατομμύριο κατοίκους όταν άνοιξε ο νέος αιώνας· έως το 1925 είχε τέσσερα εκατομμύρια, την τρίτη μεγαλύτερη πόλη του κόσμου. Η σκηνή καμπαρέ της, η σεξουαλική της ελευθερία, το πειραματικό θέατρο, η φυσική της, η ψυχανάλυση — ο Αϊνστάιν και ο Φρόιντ ήταν οικιακά ονόματα — και ο πολιτικός κινηματογράφος της παρήγαγαν μαζί αυτό που ο Πίτερ Γκέι αποκάλεσε κουλτούρα από outsiders νέα εγκατεστημένους μέσα. Οι περισσότερες από τις κεντρικές φυσιογνωμίες της ήταν εβραϊκές· πολλοί εξορίστηκαν ή δολοφονήθηκαν μετά το 1933. Αυτό που δημιούργησε η Βαϊμάρη ήταν δυσανάλογα σημαντικό για την κουλτούρα του εικοστού αιώνα: από τα έπιπλα Bauhaus και τη γραμματοσειρά κάθε σύγχρονου τσέπης βιβλίου έως την πολιτική φιλοσοφία της Σχολής της Φραγκφούρτης. Η Δημοκρατία που μισούσε τον εαυτό της παρήγαγε τέχνη που θα αγαπούσε ο κόσμος."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1929,
      month: 10,
      era: {
        en: "Crash",
        el: "Κραχ"
      },
      events: [
        {
          title: {
            en: "Death of Stresemann; the Wall Street Crash",
            el: "Θάνατος του Στρέζεμαν· το Κραχ της Wall Street"
          },
          description: {
            en: "On 3 October, Gustav Stresemann dies of a stroke at fifty-one. Three weeks later, on 24 October — Black Thursday — Wall Street crashes. American banks call in their short-term loans; the German economy enters free fall. By the end of 1932, German industrial production has been halved and six million Germans are unemployed.",
            el: "Στις 3 Οκτωβρίου, ο Γκούσταβ Στρέζεμαν πεθαίνει από εγκεφαλικό στα πενηνταένα. Τρεις εβδομάδες αργότερα, στις 24 Οκτωβρίου — Μαύρη Πέμπτη — η Wall Street καταρρέει. Αμερικανικές τράπεζες απαιτούν τα βραχυπρόθεσμα δάνειά τους πίσω· η γερμανική οικονομία μπαίνει σε ελεύθερη πτώση. Έως το τέλος του 1932, η γερμανική βιομηχανική παραγωγή έχει υποδιπλασιαστεί και έξι εκατομμύρια Γερμανοί είναι άνεργοι."
          },
          extendedDescription: {
            en: "The combination — within weeks — of Stresemann's death and the global financial crash was the moment when Weimar's stability ended. Stresemann's last political achievement, the Young Plan, was meant to settle reparations permanently; it would now be impossible to implement. The German banking crisis of 1931, with the collapse of the Vienna Creditanstalt and then the Berlin Darmstädter Bank, forced bank holidays and capital controls. The Hoover Moratorium suspended reparations in June 1931, but politically the damage was done. The economic catastrophe destroyed the parliamentary centre and threw millions of voters toward radical solutions on both extremes.",
            el: "Ο συνδυασμός — μέσα σε εβδομάδες — του θανάτου του Στρέζεμαν και του παγκόσμιου χρηματοοικονομικού κραχ ήταν η στιγμή που τελείωσε η σταθερότητα της Βαϊμάρης. Το τελευταίο πολιτικό επίτευγμα του Στρέζεμαν, το Σχέδιο Γιανγκ, σκόπευε να ρυθμίσει μόνιμα τις αποζημιώσεις· τώρα θα ήταν αδύνατο να εφαρμοστεί. Η γερμανική τραπεζική κρίση του 1931, με την κατάρρευση της Creditanstalt της Βιέννης και κατόπιν της Darmstädter Bank του Βερολίνου, ανάγκασε τραπεζικές αργίες και ελέγχους κεφαλαίου. Το Μορατόριουμ Χούβερ ανέστειλε τις αποζημιώσεις τον Ιούνιο του 1931, αλλά πολιτικά η ζημιά είχε γίνει. Η οικονομική καταστροφή κατέστρεψε το κοινοβουλευτικό κέντρο και ώθησε εκατομμύρια ψηφοφόρους προς ριζοσπαστικές λύσεις και στα δύο άκρα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1930,
      month: 3,
      era: {
        en: "Presidential Cabinets",
        el: "Προεδρικά Καμπινέτα"
      },
      events: [
        {
          title: {
            en: "Brüning and the Article 48 government",
            el: "Ο Μπρύνινγκ και η κυβέρνηση του Άρθρου 48"
          },
          description: {
            en: "On 30 March, the SPD-led Müller cabinet falls over unemployment insurance contributions — the last parliamentary majority of the Republic. President Hindenburg appoints Heinrich Brüning of the Centre as chancellor, governing by emergency decree. In the September Reichstag election the Nazis explode from 12 to 107 seats; the KPD also gains. The democratic centre is shattered.",
            el: "Στις 30 Μαρτίου, η κυβέρνηση Μύλερ υπό το SPD πέφτει πάνω σε εισφορές ασφάλισης ανεργίας — η τελευταία κοινοβουλευτική πλειοψηφία της Δημοκρατίας. Ο Πρόεδρος Χίντενμπουργκ διορίζει τον Χάινριχ Μπρύνινγκ του Κέντρου ως καγκελάριο, κυβερνώντας με διάταγμα έκτακτης ανάγκης. Στις εκλογές του Reichstag τον Σεπτέμβριο οι Ναζί εκρήγνυνται από 12 σε 107 έδρες· το KPD επίσης κερδίζει. Το δημοκρατικό κέντρο έχει συντριβεί."
          },
          extendedDescription: {
            en: "Brüning has been called Weimar's gravedigger. His deflationary policy — wage cuts, budget cuts, tax increases as the economy contracted — was driven by an iron determination to demonstrate that reparations were unpayable, but it deepened the depression dramatically. By 1932 he had cut civil-service salaries 23 percent and unemployment benefits to subsistence level; he had also alienated almost every political constituency. His successor, Franz von Papen, would govern with even less parliamentary support; Kurt von Schleicher, the army's political general, would replace him with a minority cabinet of his own. None of them controlled the Reichstag; all of them depended on Hindenburg's emergency powers. The Weimar Constitution, in everything but form, had ended in 1930.",
            el: "Ο Μπρύνινγκ έχει αποκληθεί ο νεκροθάφτης της Βαϊμάρης. Η αποπληθωριστική πολιτική του — περικοπές μισθών, περικοπές προϋπολογισμού, αυξήσεις φόρων καθώς η οικονομία συρρικνωνόταν — οδηγούνταν από σιδερένια αποφασιστικότητα να δείξει ότι οι αποζημιώσεις ήταν αδύνατο να πληρωθούν, αλλά βάθυνε δραματικά την κατάθλιψη. Έως το 1932 είχε κόψει τους μισθούς δημοσίων υπαλλήλων κατά 23 τοις εκατό και τα επιδόματα ανεργίας σε επίπεδο επιβίωσης· είχε επίσης αποξενώσει σχεδόν κάθε πολιτική εκλογική βάση. Ο διάδοχός του, Φραντς φον Πάπεν, θα κυβερνούσε με ακόμη λιγότερη κοινοβουλευτική υποστήριξη· ο Κουρτ φον Σλάιχερ, ο πολιτικός στρατηγός του στρατού, θα τον αντικαθιστούσε με μειοψηφικό υπουργείο δικής του δημιουργίας. Κανένας τους δεν έλεγχε το Reichstag· όλοι εξαρτιόνταν από τις έκτακτες εξουσίες του Χίντενμπουργκ. Το Σύνταγμα της Βαϊμάρης, σε όλα εκτός από τη μορφή, είχε τελειώσει το 1930."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1932,
      month: 4,
      era: {
        en: "Year of Five Elections",
        el: "Έτος Πέντε Εκλογών"
      },
      events: [
        {
          title: {
            en: "Hindenburg re-elected; the Nazis become the largest party",
            el: "Επανεκλογή Χίντενμπουργκ· οι Ναζί γίνονται το μεγαλύτερο κόμμα"
          },
          description: {
            en: "In April, Hindenburg defeats Hitler for re-election to the presidency. In the July Reichstag election, the NSDAP wins 230 seats and 37 percent of the vote — the largest party in German history at that point. In November the Nazis lose 34 seats; their wave has crested. But by then Hindenburg's advisers are convinced that Hitler must be brought into government to control him.",
            el: "Τον Απρίλιο, ο Χίντενμπουργκ νικά τον Χίτλερ για επανεκλογή στην προεδρία. Στις εκλογές του Reichstag τον Ιούλιο, το NSDAP κερδίζει 230 έδρες και 37 τοις εκατό της ψήφου — το μεγαλύτερο κόμμα στη γερμανική ιστορία ως τότε. Τον Νοέμβριο οι Ναζί χάνουν 34 έδρες· το κύμα τους έχει κορυφωθεί. Αλλά τότε οι σύμβουλοι του Χίντενμπουργκ είναι πεπεισμένοι ότι ο Χίτλερ πρέπει να μπει στην κυβέρνηση για να τον ελέγξουν."
          },
          extendedDescription: {
            en: "The presidential election of 1932 was a moment of clarity: 53 percent of Germans voted for the man who had crushed Tannenberg, 37 percent for the corporal who had won the Iron Cross at his orders. Both extremes — the Nazis and the Communists — together polled more than half of all Reichstag votes by November. The reactionary cabal around Hindenburg — Papen, the agrarians, the heavy industrialists, the senior army — calculated that they could 'tame' Hitler by binding him in a cabinet where conservatives would hold the key portfolios. Papen famously told a colleague in late January 1933: 'You are wrong. We've hired him for our act. In two months we'll have pushed Hitler so far into a corner that he'll squeak.' The judgement would be the most consequential miscalculation in twentieth-century European history.",
            el: "Οι προεδρικές εκλογές του 1932 ήταν στιγμή σαφήνειας: 53 τοις εκατό των Γερμανών ψήφισαν τον άνδρα που είχε συντρίψει το Τάννενμπεργκ, 37 τοις εκατό τον δεκανέα που είχε κερδίσει τον Σιδηρού Σταυρό υπό τις διαταγές του. Και τα δύο άκρα — Ναζί και Κομμουνιστές — μαζί συγκέντρωσαν περισσότερο από το μισό όλων των ψήφων του Reichstag έως τον Νοέμβριο. Η αντιδραστική κλίκα γύρω από τον Χίντενμπουργκ — ο Πάπεν, οι αγρότες, οι βαριοί βιομήχανοι, η ανώτατη στρατιωτική ηγεσία — υπολόγισε ότι μπορούσαν να «εξημερώσουν» τον Χίτλερ δένοντάς τον σε καμπινέτο όπου συντηρητικοί θα κρατούσαν τα κλειδιά υπουργεία. Ο Πάπεν είπε περιώνυμα σε συνάδελφό του στα τέλη Ιανουαρίου 1933: «Κάνεις λάθος. Τον προσλάβαμε για το νούμερό μας. Σε δύο μήνες θα έχουμε σπρώξει τον Χίτλερ τόσο γωνία που θα τσιρίξει». Η κρίση θα ήταν ο πιο μοιραίος λανθασμένος υπολογισμός στην ευρωπαϊκή ιστορία του εικοστού αιώνα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1933,
      month: 1,
      era: {
        en: "Machtergreifung",
        el: "Machtergreifung"
      },
      events: [
        {
          title: {
            en: "Hitler appointed Chancellor",
            el: "Ο Χίτλερ διορίζεται Καγκελάριος"
          },
          description: {
            en: "On 30 January, after weeks of intrigue by Papen, the agrarian magnate Oskar von Hindenburg, and the banker Kurt von Schröder, the eighty-five-year-old Reichspräsident Hindenburg signs the appointment of Adolf Hitler as Reich Chancellor. The cabinet contains only three Nazis. By summer it will be the only party in Germany.",
            el: "Στις 30 Ιανουαρίου, μετά από εβδομάδες σκευωριών του Πάπεν, του αγροτικού μεγιστάνα Όσκαρ φον Χίντενμπουργκ και του τραπεζίτη Κουρτ φον Σρέντερ, ο ογδονταπεντάχρονος Reichspräsident Χίντενμπουργκ υπογράφει τον διορισμό του Άντολφ Χίτλερ ως Καγκελάριου του Reich. Το υπουργικό συμβούλιο περιέχει μόνο τρεις Ναζί. Έως το καλοκαίρι θα είναι το μοναδικό κόμμα στη Γερμανία."
          },
          extendedDescription: {
            en: "The handover of power — Machtergreifung in Nazi propaganda, Machtübertragung in scholarly hindsight — was constitutional in every formal sense: Hitler became chancellor through the same procedure that had appointed Brüning, Papen, and Schleicher. The crucial decision was Hindenburg's, made on the advice of conservatives who believed they could control him. The new cabinet contained eight non-Nazis, including Papen as vice-chancellor and Hugenberg representing heavy industry; Hitler had only the chancellorship, the interior ministry (Frick), and a portfolio without portfolio (Göring). It looked, on 30 January, like another short-lived coalition. The torch-light parade through the Brandenburg Gate that evening — six hours of SA columns watched by Hindenburg from one window and Hitler from another — was the first sign that things might be different.",
            el: "Η μεταβίβαση εξουσίας — Machtergreifung στη ναζιστική προπαγάνδα, Machtübertragung στην επιστημονική αναδρομική θεώρηση — ήταν συνταγματική με κάθε τυπική έννοια: ο Χίτλερ έγινε καγκελάριος μέσω της ίδιας διαδικασίας που είχε διορίσει τον Μπρύνινγκ, τον Πάπεν και τον Σλάιχερ. Η κρίσιμη απόφαση ήταν του Χίντενμπουργκ, που έγινε με τη συμβουλή συντηρητικών που πίστευαν ότι μπορούσαν να τον ελέγξουν. Το νέο υπουργικό συμβούλιο περιείχε οχτώ μη Ναζί, συμπεριλαμβανομένου του Πάπεν ως αντικαγκελάριο και του Χούγκενμπεργκ που εκπροσωπούσε τη βαριά βιομηχανία· ο Χίτλερ είχε μόνο την καγκελαρία, το υπουργείο εσωτερικών (Φρικ) και ένα χαρτοφυλάκιο χωρίς χαρτοφυλάκιο (Γκέρινγκ). Έμοιαζε, στις 30 Ιανουαρίου, με άλλον έναν βραχύβιο συνασπισμό. Η παρέλαση με δαυλούς μέσα από την Πύλη του Βρανδεμβούργου εκείνη την εσπέρα — έξι ώρες στηλών SA που παρακολουθούσε ο Χίντενμπουργκ από ένα παράθυρο και ο Χίτλερ από ένα άλλο — ήταν το πρώτο σημάδι ότι τα πράγματα μπορεί να ήταν διαφορετικά."
          },
          category: "political"
        },
        {
          title: {
            en: "The Reichstag Fire and the Enabling Act",
            el: "Η Πυρκαγιά του Reichstag και ο Εξουσιοδοτικός Νόμος"
          },
          description: {
            en: "On the night of 27 February, the Reichstag building burns. A young Dutch Communist, Marinus van der Lubbe, is found inside. The next morning Hindenburg signs the Reichstag Fire Decree, suspending civil liberties under Article 48. On 23 March, with Communist deputies arrested and Social Democrats coerced, the Reichstag passes the Enabling Act — 441 to 94 — granting Hitler four years of dictatorial powers. The Weimar Republic is over.",
            el: "Τη νύχτα της 27ης Φεβρουαρίου, το κτίριο του Reichstag καίγεται. Ένας νεαρός Ολλανδός Κομμουνιστής, ο Μαρίνους φαν ντερ Λούμπε, βρίσκεται μέσα. Το επόμενο πρωί ο Χίντενμπουργκ υπογράφει το Διάταγμα Πυρκαγιάς του Reichstag, αναστέλλοντας τις ατομικές ελευθερίες υπό το Άρθρο 48. Στις 23 Μαρτίου, με τους Κομμουνιστές βουλευτές συλληφθέντες και τους Σοσιαλδημοκράτες υπό πίεση, το Reichstag ψηφίζει τον Εξουσιοδοτικό Νόμο — 441 προς 94 — παραχωρώντας στον Χίτλερ τέσσερα χρόνια δικτατορικών εξουσιών. Η Δημοκρατία της Βαϊμάρης έχει τελειώσει."
          },
          extendedDescription: {
            en: "Whether van der Lubbe acted alone or whether the SA helped him is still debated by historians; what mattered politically was that Hitler had a pretext for the emergency decree he had been waiting for. The Reichstag Fire Decree suspended habeas corpus, the secrecy of the post, and freedom of assembly — and was never lifted for as long as the Third Reich existed. The Enabling Act, voted in the Kroll Opera House under the watchful eyes of SA stormtroopers, allowed Hitler's cabinet to issue laws without the Reichstag's involvement for four years. Only the SPD opposed it; Otto Wels gave a famous defiant speech to the empty Communist benches and the menacing brownshirts. The constitutional dictatorship that began on 23 March 1933 would last until May 1945.",
            el: "Αν ο φαν ντερ Λούμπε έδρασε μόνος ή αν τον βοήθησαν τα SA συζητείται ακόμη από τους ιστορικούς· αυτό που είχε σημασία πολιτικά ήταν ότι ο Χίτλερ είχε πρόφαση για το διάταγμα έκτακτης ανάγκης που περίμενε. Το Διάταγμα Πυρκαγιάς του Reichstag ανέστειλε το habeas corpus, το απόρρητο της αλληλογραφίας και την ελευθερία του συνέρχεσθαι — και ποτέ δεν ήρθη όσο υπήρχε το Τρίτο Reich. Ο Εξουσιοδοτικός Νόμος, ψηφισμένος στην Όπερα Κρολ υπό τα προσεχτικά μάτια των τραμπούκων SA, επέτρεπε στο υπουργικό συμβούλιο του Χίτλερ να εκδίδει νόμους χωρίς τη συμμετοχή του Reichstag για τέσσερα χρόνια. Μόνο το SPD αντιτάχθηκε· ο Όττο Βελς εκφώνησε περίφημη προκλητική ομιλία στα άδεια κομμουνιστικά έδρανα και στους απειλητικούς καφέ-πουκαμισάδες. Η συνταγματική δικτατορία που άρχισε στις 23 Μαρτίου 1933 θα διαρκούσε έως τον Μάιο του 1945."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
