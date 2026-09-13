/** World Wars & Crisis — Παγκόσμιοι Πόλεμοι & Κρίση · French History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const WORLD_WARS_CRISIS_FRANCE = {
  id: "world-wars-crisis-france" as const,
  label: {
    en: "World Wars & Crisis",
    el: "Παγκόσμιοι Πόλεμοι & Κρίση"
  },
  supertitle: {
    en: "République en péril",
    el: "Δημοκρατία σε κίνδυνο"
  },
  title: {
    en: "France in the Age of the World Wars",
    el: "Η Γαλλία στην Εποχή των Παγκοσμίων Πολέμων"
  },
  subtitle: {
    en: "From the taxis of the Marne and Verdun through Clemenceau and the armistice of Rethondes, the unsettled interwar of the Ruhr and the Maginot Line, the 6 February riots and the Popular Front, the Strange Defeat of 1940 and the regime of Vichy, the Vel d'Hiv round-up and the National Council of the Resistance, to D-Day, the liberation of Paris, and the second 8 May of 1945. Slide month by month through France's most violent generation.",
    el: "Από τα ταξί του Μάρνη και το Βερντέν, μέσα από τον Κλεμανσώ και την ανακωχή του Ρεθόντ, το ασταθές μεσοπόλεμο του Ρουρ και της Γραμμής Μαζινό, τις ταραχές της 6ης Φεβρουαρίου και το Λαϊκό Μέτωπο, την Παράξενη Ήττα του 1940 και το καθεστώς του Βισύ, τη σύλληψη του Vel d'Hiv και το Εθνικό Συμβούλιο της Αντίστασης, ως την Ημέρα Δ, την απελευθέρωση του Παρισιού και τη δεύτερη 8η Μαΐου του 1945. Μετακινηθείτε μήνα προς μήνα στην πιο βίαιη γενιά της Γαλλίας."
  },
  menuDescription: {
    en: "Two wars in thirty years: the Marne, Verdun, Vichy, the Resistance, and a freed Paris.",
    el: "Δύο πόλεμοι σε τριάντα χρόνια: ο Μάρνης, το Βερντέν, το Βισύ, η Αντίσταση κι ένα ελεύθερο Παρίσι."
  },
  footerLabel: {
    en: "France · World Wars & Crisis · 1914–1945",
    el: "Γαλλία · Παγκόσμιοι Πόλεμοι & Κρίση · 1914–1945"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "World Wars & Crisis",
    el: "Παγκόσμιοι Πόλεμοι & Κρίση"
  },
  theme: THEMES.slate,
  timeline: [
    {
      year: 1914,
      month: 9,
      era: {
        en: "Miracle of the Marne",
        el: "Θαύμα του Μάρνη"
      },
      events: [
        {
          title: {
            en: "Joffre saves Paris with the taxis of the Marne",
            el: "Ο Ζοφρ σώζει το Παρίσι με τα ταξί του Μάρνη"
          },
          description: {
            en: "After the disasters of the Battle of the Frontiers in August, General Joffre turns at the Marne on 5 September. Six hundred Parisian taxicabs requisitioned by Gallieni carry six thousand infantry to the front. By 12 September the German First Army is in retreat. The Schlieffen Plan, and the hope of a short war, are dead.",
            el: "Μετά τις καταστροφές της Μάχης των Συνόρων τον Αύγουστο, ο στρατηγός Ζοφρ στρέφεται στον Μάρνη στις 5 Σεπτεμβρίου. Εξακόσια ταξί του Παρισιού επιταγμένα από τον Γκαλιενί μεταφέρουν έξι χιλιάδες πεζούς στο μέτωπο. Μέχρι τις 12 Σεπτεμβρίου η Πρώτη Γερμανική Στρατιά υποχωρεί. Το Σχέδιο Σλίφεν, και η ελπίδα ενός σύντομου πολέμου, έχουν πεθάνει."
          },
          extendedDescription: {
            en: "The opening battles cost France a quarter of a million casualties in three weeks — including more dead on 22 August alone than any other single day of the war. The 'race to the sea' that followed extended a continuous line of trenches from the Channel to the Swiss border. By December France had lost a tenth of her national territory — including 80 per cent of her coal and steel — and the war that her army had drilled to win in a summer was settling into four winters of mud.",
            el: "Οι αρχικές μάχες κόστισαν στη Γαλλία ένα τέταρτο του εκατομμυρίου απώλειες σε τρεις εβδομάδες — με περισσότερους νεκρούς μόνο στις 22 Αυγούστου από οποιαδήποτε άλλη μέρα του πολέμου. Ο «δρόμος προς τη θάλασσα» που ακολούθησε επέκτεινε συνεχή γραμμή χαρακωμάτων από τη Μάγχη στα ελβετικά σύνορα. Μέχρι τον Δεκέμβριο η Γαλλία είχε χάσει το ένα δέκατο του εθνικού της εδάφους — μαζί με το 80% του άνθρακα και χάλυβά της — και ο πόλεμος που ο στρατός της είχε εκπαιδευτεί να κερδίσει σε ένα καλοκαίρι κατασταλάζει σε τέσσερις χειμώνες λάσπης."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1915,
      era: {
        en: "Trench Warfare",
        el: "Πόλεμος Χαρακωμάτων"
      },
      events: [
        {
          title: {
            en: "Champagne, gas, and Artois",
            el: "Σαμπάνια, αέρια και Αρτουά"
          },
          description: {
            en: "Joffre's grandes offensives in Artois (May, September) and Champagne (February, September) gain a few kilometres at a cost of three hundred thousand French casualties for the year. On 22 April at Ypres the Germans first use chlorine gas; from 1915 the chemical war is permanent. The Western Front does not move.",
            el: "Οι grandes offensives του Ζοφρ στο Αρτουά (Μάιος, Σεπτέμβριος) και τη Σαμπάνια (Φεβρουάριος, Σεπτέμβριος) κερδίζουν λίγα χιλιόμετρα με τίμημα τριακόσιες χιλιάδες γαλλικές απώλειες για τη χρονιά. Στις 22 Απριλίου στο Υπρ οι Γερμανοί χρησιμοποιούν για πρώτη φορά αέριο χλωρίου· από το 1915 ο χημικός πόλεμος είναι μόνιμος. Το Δυτικό Μέτωπο δεν κινείται."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1916,
      month: 2,
      era: {
        en: "Verdun",
        el: "Βερντέν"
      },
      events: [
        {
          title: {
            en: "'Ils ne passeront pas'",
            el: "«Ils ne passeront pas»"
          },
          description: {
            en: "On 21 February, a million-shell bombardment opens the German attack on the salient at Verdun. Falkenhayn's stated aim is to 'bleed France white'. General Pétain, brought up from the rear, organises the defence and the supply route called the Voie Sacrée. The slogan attributed to him — they shall not pass — becomes the watchword of the year.",
            el: "Στις 21 Φεβρουαρίου, βομβαρδισμός ενός εκατομμυρίου οβίδων ανοίγει τη γερμανική επίθεση στον προεξοχή του Βερντέν. Ο δηλωμένος σκοπός του Φάλκενχαϋν είναι να «αιμορραγήσει τη Γαλλία». Ο στρατηγός Πετέν, που φέρνεται από τα μετόπισθεν, οργανώνει την άμυνα και τον δρόμο εφοδιασμού που λέγεται Voie Sacrée. Το σύνθημα που του αποδίδεται — δεν θα περάσουν — γίνεται το λάιτ μοτίφ της χρονιάς."
          },
          extendedDescription: {
            en: "By December, when the Germans were pushed back to their starting line, the ten-month battle had cost some seven hundred thousand French and German casualties between them. Almost every French regiment of the line passed through the meat-grinder; Verdun is to the French what the Somme is to the British. Pétain's prestige, born of these months, would carry him to the head of state twenty-four years later.",
            el: "Μέχρι τον Δεκέμβριο, όταν οι Γερμανοί απωθήθηκαν στην αρχική γραμμή, η δεκάμηνη μάχη είχε κοστίσει περίπου επτακόσιες χιλιάδες γαλλικές και γερμανικές απώλειες συνολικά. Σχεδόν κάθε γαλλικό σύνταγμα γραμμής πέρασε από τον μύλο· το Βερντέν είναι για τους Γάλλους ό,τι ο Σομ για τους Βρετανούς. Το γόητρο του Πετέν, γεννημένο από αυτούς τους μήνες, θα τον έφερνε στην αρχηγία του κράτους είκοσι τέσσερα χρόνια αργότερα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1917,
      month: 4,
      era: {
        en: "Nivelle Offensive",
        el: "Επίθεση Νιβέλ"
      },
      events: [
        {
          title: {
            en: "The Chemin des Dames disaster",
            el: "Η καταστροφή του Chemin des Dames"
          },
          description: {
            en: "General Nivelle, who has replaced Joffre, promises that his April offensive will break the German line in forty-eight hours. On the Chemin des Dames ridge above the Aisne, French infantry charge into uncut wire and machine-gun nests. By 9 May they have lost 187,000 men for a few kilometres of ground.",
            el: "Ο στρατηγός Νιβέλ, που έχει αντικαταστήσει τον Ζοφρ, υπόσχεται ότι η επίθεσή του τον Απρίλιο θα σπάσει τη γερμανική γραμμή σε σαράντα οκτώ ώρες. Στη ράχη του Chemin des Dames πάνω από τον Αιν, γαλλικό πεζικό εφορμά σε άκοπο συρματόπλεγμα και πολυβολεία. Μέχρι τις 9 Μαΐου έχουν χάσει 187.000 άνδρες για λίγα χιλιόμετρα εδάφους."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1917,
      month: 5,
      era: {
        en: "Mutinies of 1917",
        el: "Στασιασμοί του 1917"
      },
      events: [
        {
          title: {
            en: "Pétain restores the army",
            el: "Ο Πετέν αποκαθιστά τον στρατό"
          },
          description: {
            en: "From late April, units in some seventy divisions refuse to attack. Some 30,000-40,000 men are involved. Pétain replaces Nivelle, suspends offensives, improves food and leave, has 49 mutineers shot and 600 imprisoned. By August the army holds — and waits for the Americans.",
            el: "Από τα τέλη Απριλίου, μονάδες σε περίπου εβδομήντα μεραρχίες αρνούνται να επιτεθούν. Συμμετέχουν περίπου 30.000-40.000 άνδρες. Ο Πετέν αντικαθιστά τον Νιβέλ, αναστέλλει τις επιθέσεις, βελτιώνει το φαγητό και τις άδειες, εκτελεί 49 στασιαστές και φυλακίζει 600. Μέχρι τον Αύγουστο ο στρατός κρατά — και περιμένει τους Αμερικανούς."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1917,
      month: 11,
      era: {
        en: "The Tiger",
        el: "Ο Τίγρης"
      },
      events: [
        {
          title: {
            en: "Clemenceau forms his war ministry",
            el: "Ο Κλεμανσώ σχηματίζει το πολεμικό υπουργείο"
          },
          description: {
            en: "On 16 November, President Poincaré recalls his old enemy Georges Clemenceau — the Tiger, seventy-six years old, anti-clerical, anti-defeatist, anti-everything — to form a government of national war. His program: 'I wage war. In foreign policy, I wage war. In domestic policy, I wage war.' Joseph Caillaux, the leader of the peace party, is arrested for treason.",
            el: "Στις 16 Νοεμβρίου, ο Πρόεδρος Πουανκαρέ ανακαλεί τον παλιό του εχθρό Ζωρζ Κλεμανσώ — τον Τίγρη, εβδομήντα έξι ετών, αντικληρικαλιστή, αντηττοπαθή, αντί-όλων — να σχηματίσει κυβέρνηση εθνικού πολέμου. Το πρόγραμμά του: «Διεξάγω πόλεμο. Στην εξωτερική πολιτική, διεξάγω πόλεμο. Στην εσωτερική πολιτική, διεξάγω πόλεμο». Ο Ζοζέφ Καγιό, ηγέτης του ειρηνευτικού κόμματος, συλλαμβάνεται για προδοσία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1918,
      month: 3,
      era: {
        en: "Spring Offensive",
        el: "Εαρινή Επίθεση"
      },
      events: [
        {
          title: {
            en: "Ludendorff strikes — and Foch takes command",
            el: "Ο Λούντεντορφ χτυπά — και ο Φος αναλαμβάνει τη διοίκηση"
          },
          description: {
            en: "On 21 March Ludendorff opens his last gamble: five great offensives that drive the British and French back, in places sixty kilometres. Paris is shelled by the Big Bertha. On 26 March, at the conference of Doullens, the allies agree to put all their armies under a single commander: Ferdinand Foch is appointed généralissime.",
            el: "Στις 21 Μαρτίου ο Λούντεντορφ ανοίγει το τελευταίο του στοίχημα: πέντε μεγάλες επιθέσεις που απωθούν Βρετανούς και Γάλλους, σε ορισμένα σημεία εξήντα χιλιόμετρα. Το Παρίσι βομβαρδίζεται από τη Μεγάλη Μπέρτα. Στις 26 Μαρτίου, στη συνδιάσκεψη του Ντουλέν, οι σύμμαχοι συμφωνούν να θέσουν όλους τους στρατούς τους κάτω από έναν διοικητή: ο Φερντινάν Φος διορίζεται généralissime."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1918,
      month: 7,
      era: {
        en: "Second Marne",
        el: "Δεύτερος Μάρνης"
      },
      events: [
        {
          title: {
            en: "Foch and Mangin counter-attack",
            el: "Φος και Μανζέν αντεπιτίθενται"
          },
          description: {
            en: "On 15 July Ludendorff makes a last push on the Marne. On 18 July, with Mangin's tanks emerging from the forest of Villers-Cotterêts, Foch counter-attacks. The German front gives way. From 8 August — Ludendorff's 'black day' at Amiens — the allies advance for one hundred days without stopping until the armistice.",
            el: "Στις 15 Ιουλίου ο Λούντεντορφ κάνει τελευταία ώθηση στον Μάρνη. Στις 18 Ιουλίου, με τα τανκς του Μανζέν να αναδύονται από το δάσος του Villers-Cotterêts, ο Φος αντεπιτίθεται. Το γερμανικό μέτωπο υποχωρεί. Από τις 8 Αυγούστου — η «μαύρη ημέρα» του Λούντεντορφ στο Αμιέν — οι σύμμαχοι προελαύνουν επί εκατό ημέρες χωρίς να σταματήσουν μέχρι την ανακωχή."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1918,
      month: 11,
      era: {
        en: "Armistice",
        el: "Ανακωχή"
      },
      events: [
        {
          title: {
            en: "The eleventh hour at Rethondes",
            el: "Η ενδέκατη ώρα στο Ρεθόντ"
          },
          description: {
            en: "On 11 November at 5 a.m., in Foch's railway carriage standing on a forest siding at Rethondes near Compiègne, the German plenipotentiaries sign the armistice. At 11 a.m. the guns fall silent on the Western Front. France has lost 1,400,000 dead, 4,000,000 wounded, 700,000 prisoners — and she has Alsace and Lorraine back.",
            el: "Στις 11 Νοεμβρίου στις 5 το πρωί, στο σιδηροδρομικό βαγόνι του Φος που στέκει σε δάσος κοντά στο Compiègne στο Ρεθόντ, οι Γερμανοί πληρεξούσιοι υπογράφουν την ανακωχή. Στις 11 το πρωί τα όπλα σιωπούν στο Δυτικό Μέτωπο. Η Γαλλία έχει χάσει 1.400.000 νεκρούς, 4.000.000 τραυματίες, 700.000 αιχμαλώτους — και έχει την Αλσατία και τη Λωραίνη πίσω."
          },
          extendedDescription: {
            en: "The cost in men — proportionally the heaviest of any major belligerent — emptied the villages, broke the demographic curve, and produced a generation of mutilés de guerre who became permanent fixtures of French life. The black-clothed widows of the 1920s were everywhere; every commune in France would build its monument aux morts. The peace had been won; but the country that won it would never be quite the same again.",
            el: "Το κόστος σε άνδρες — αναλογικά το βαρύτερο οποιουδήποτε μεγάλου εμπολέμου — άδειασε τα χωριά, έσπασε τη δημογραφική καμπύλη και παρήγαγε μια γενιά mutilés de guerre που έγιναν μόνιμα μέρη της γαλλικής ζωής. Οι μαυροφορεμένες χήρες της δεκαετίας του 1920 ήταν παντού· κάθε κοινότητα στη Γαλλία θα έχτιζε το monument aux morts της. Η ειρήνη είχε κερδηθεί· αλλά η χώρα που την κέρδισε δεν θα ήταν ποτέ ξανά εντελώς η ίδια."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1919,
      month: 6,
      era: {
        en: "Treaty of Versailles",
        el: "Συνθήκη των Βερσαλλιών"
      },
      events: [
        {
          title: {
            en: "The peace is signed in the Hall of Mirrors",
            el: "Η ειρήνη υπογράφεται στην Αίθουσα των Κατόπτρων"
          },
          description: {
            en: "On 28 June, five years to the day after Sarajevo, the Treaty of Versailles is signed in the Galerie des Glaces — where the German Empire had been proclaimed in 1871. Clemenceau wins Alsace-Lorraine, the demilitarised Rheinland, the Saar, reparations, and Article 231 — but not the eastern frontier on the Rhine that Foch had demanded.",
            el: "Στις 28 Ιουνίου, ακριβώς πέντε χρόνια μετά το Σεράγεβο, η Συνθήκη των Βερσαλλιών υπογράφεται στη Galerie des Glaces — όπου η Γερμανική Αυτοκρατορία είχε ανακηρυχθεί το 1871. Ο Κλεμανσώ κερδίζει την Αλσατία-Λωραίνη, την αποστρατιωτικοποιημένη Ρηνανία, το Σάαρ, αποζημιώσεις και το Άρθρο 231 — αλλά όχι το ανατολικό σύνορο στον Ρήνο που είχε απαιτήσει ο Φος."
          },
          extendedDescription: {
            en: "'This is not a peace,' Foch is supposed to have said as he left the conference, 'it is an armistice for twenty years.' He was off by sixty-five days. The American Senate would refuse to ratify the treaty or the security guarantee that came with it; Britain would soon drift towards revisionism. The French diplomatic system after Versailles — small allies in eastern Europe, the Maginot Line — was a system designed to make the impossible work.",
            el: "«Αυτό δεν είναι ειρήνη», λέγεται ότι είπε ο Φος καθώς έφευγε από τη συνδιάσκεψη, «είναι ανακωχή είκοσι ετών». Έπεσε έξω κατά εξήντα πέντε ημέρες. Η αμερικανική Γερουσία θα αρνιόταν να επικυρώσει τη συνθήκη ή την εγγύηση ασφαλείας που τη συνόδευε· η Βρετανία σύντομα θα παρασύρονταν προς τον αναθεωρητισμό. Το γαλλικό διπλωματικό σύστημα μετά τις Βερσαλλίες — μικροί σύμμαχοι στην ανατολική Ευρώπη, η Γραμμή Μαζινό — ήταν σύστημα σχεδιασμένο να κάνει το αδύνατο να λειτουργήσει."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1923,
      month: 1,
      era: {
        en: "Ruhr Crisis",
        el: "Κρίση του Ρουρ"
      },
      events: [
        {
          title: {
            en: "Poincaré sends the troops into the Ruhr",
            el: "Ο Πουανκαρέ στέλνει στρατεύματα στο Ρουρ"
          },
          description: {
            en: "Tired of German reparations defaults, Premier Poincaré sends sixty thousand French and Belgian troops into the Ruhr industrial basin on 11 January to collect coal and coke at gunpoint. Berlin orders passive resistance; the hyper-inflation that ruins the German middle class follows. By autumn France has won the dispute and lost the peace.",
            el: "Κουρασμένος από τις γερμανικές αθετήσεις αποζημιώσεων, ο πρωθυπουργός Πουανκαρέ στέλνει εξήντα χιλιάδες Γάλλους και Βέλγους στρατιώτες στη βιομηχανική λεκάνη του Ρουρ στις 11 Ιανουαρίου για να εισπράξουν άνθρακα και κωκ με την απειλή των όπλων. Το Βερολίνο διατάζει παθητική αντίσταση· ο υπερπληθωρισμός που καταστρέφει τη γερμανική μεσαία τάξη ακολουθεί. Μέχρι το φθινόπωρο η Γαλλία έχει κερδίσει τη διαφορά και χάσει την ειρήνη."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1930,
      era: {
        en: "Maginot Line",
        el: "Γραμμή Μαζινό"
      },
      events: [
        {
          title: {
            en: "Parliament votes the Maginot Line",
            el: "Το κοινοβούλιο ψηφίζει τη Γραμμή Μαζινό"
          },
          description: {
            en: "On 4 January 1930 the Chamber votes three billion francs for a chain of underground forts along the German border, designed by the war minister André Maginot. By 1936 the line of casemates, barracks, and ammunition lifts runs from Switzerland to Luxembourg — but stops on the Belgian border, where high command does not dare offend a small ally.",
            el: "Στις 4 Ιανουαρίου 1930 η Βουλή ψηφίζει τρία δισεκατομμύρια φράγκα για αλυσίδα υπόγειων φρουρίων κατά μήκος του γερμανικού συνόρου, σχεδιασμένη από τον υπουργό πολέμου Αντρέ Μαζινό. Μέχρι το 1936 η γραμμή των πολυβολείων, στρατώνων και ανελκυστήρων πυρομαχικών εκτείνεται από την Ελβετία ως το Λουξεμβούργο — αλλά σταματά στο βελγικό σύνορο, όπου η ανώτατη διοίκηση δεν τολμά να προσβάλει έναν μικρό σύμμαχο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1934,
      month: 2,
      era: {
        en: "6 February Riots",
        el: "Ταραχές της 6ης Φεβρουαρίου"
      },
      events: [
        {
          title: {
            en: "The right marches on the Palais Bourbon",
            el: "Η δεξιά βαδίζει στο Palais Bourbon"
          },
          description: {
            en: "Inflamed by the Stavisky financial scandal, the leagues — Croix-de-Feu, Action française, Jeunesses patriotes — converge on the Place de la Concorde on the evening of 6 February. The Garde mobile fires on the crowd; 17 demonstrators and one policeman are killed, more than two thousand wounded. The Daladier government falls overnight. The Third Republic has had its 'fascist' scare.",
            el: "Αναζωπυρωμένες από το οικονομικό σκάνδαλο Σταβίσκι, οι λίγκες — Croix-de-Feu, Action française, Jeunesses patriotes — συγκλίνουν στην Place de la Concorde το βράδυ της 6ης Φεβρουαρίου. Η Garde mobile πυροβολεί το πλήθος· 17 διαδηλωτές και ένας αστυνομικός σκοτώνονται, πάνω από δύο χιλιάδες τραυματίζονται. Η κυβέρνηση Νταλαντιέ πέφτει μέσα στη νύχτα. Η Τρίτη Δημοκρατία έχει τον «φασιστικό» της φόβο."
          },
          extendedDescription: {
            en: "The shock of 6 February drove the socialists, communists, and radicals into the anti-fascist coalition that would become the Popular Front. Within a year the PCF was instructed by the Comintern to abandon its 'class against class' line; in July 1935, on the Bastille Day procession, Léon Blum, Maurice Thorez, and Édouard Daladier marched together at the head of half a million.",
            el: "Το σοκ της 6ης Φεβρουαρίου έσπρωξε τους σοσιαλιστές, κομμουνιστές και ριζοσπάστες στον αντιφασιστικό συνασπισμό που θα γινόταν το Λαϊκό Μέτωπο. Σε έναν χρόνο το PCF έλαβε εντολή από την Κομιντέρν να εγκαταλείψει τη γραμμή «τάξη κατά τάξης»· τον Ιούλιο του 1935, στην παρέλαση της εορτής της Βαστίλης, ο Λεόν Μπλουμ, ο Μωρίς Τορέζ και ο Εντουάρ Νταλαντιέ βάδισαν μαζί στην κεφαλή μισού εκατομμυρίου."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1936,
      month: 6,
      era: {
        en: "Popular Front",
        el: "Λαϊκό Μέτωπο"
      },
      events: [
        {
          title: {
            en: "Blum's government and the Matignon accords",
            el: "Η κυβέρνηση Μπλουμ και οι Συμφωνίες του Ματινιόν"
          },
          description: {
            en: "After the May elections give the Popular Front a majority, Léon Blum — the first socialist and the first Jewish prime minister of France — forms a government on 4 June. Two million workers occupy the factories. The Matignon agreements of 7 June grant the forty-hour week, paid holidays of two weeks, and collective bargaining. Workers go to the sea, many for the first time.",
            el: "Μετά τις εκλογές του Μαΐου που δίνουν στο Λαϊκό Μέτωπο πλειοψηφία, ο Λεόν Μπλουμ — ο πρώτος σοσιαλιστής και ο πρώτος Εβραίος πρωθυπουργός της Γαλλίας — σχηματίζει κυβέρνηση στις 4 Ιουνίου. Δύο εκατομμύρια εργάτες καταλαμβάνουν τα εργοστάσια. Οι Συμφωνίες του Ματινιόν στις 7 Ιουνίου παραχωρούν την εβδομάδα σαράντα ωρών, διακοπές μετ' αποδοχών δύο εβδομάδων και συλλογικές διαπραγματεύσεις. Οι εργάτες πάνε στη θάλασσα, πολλοί για πρώτη φορά."
          },
          extendedDescription: {
            en: "Blum's government also nationalised the railways, brought the Bank of France under public control, and reformed the rural lending banks. But it was paralysed abroad by the Spanish Civil War — Blum, terrified of dividing France further, accepted non-intervention while his heart was with the Republic — and at home by the flight of capital. Within a year his ministry had fallen and the social conquests began to be quietly rolled back.",
            el: "Η κυβέρνηση Μπλουμ εθνικοποίησε επίσης τους σιδηροδρόμους, έθεσε την Τράπεζα της Γαλλίας υπό δημόσιο έλεγχο και μεταρρύθμισε τις αγροτικές δανειστικές τράπεζες. Αλλά παραλύθηκε στο εξωτερικό από τον Ισπανικό Εμφύλιο — ο Μπλουμ, τρομαγμένος να μη διχάσει περαιτέρω τη Γαλλία, αποδέχθηκε τη μη επέμβαση ενώ η καρδιά του ήταν με τη Δημοκρατία — και στο εσωτερικό από τη φυγή κεφαλαίων. Σε έναν χρόνο το υπουργείο του είχε πέσει και οι κοινωνικές κατακτήσεις άρχισαν να ανατρέπονται σιωπηρά."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1938,
      month: 9,
      era: {
        en: "Munich",
        el: "Μόναχο"
      },
      events: [
        {
          title: {
            en: "Daladier returns from Munich",
            el: "Ο Νταλαντιέ επιστρέφει από το Μόναχο"
          },
          description: {
            en: "On 29 September, at Munich, Daladier and Chamberlain consign Czechoslovakia's Sudetenland to Hitler in return for promises of peace. Landing at Le Bourget on the 30th to a crowd cheering him as a hero, the premier mutters: 'the fools — if they only knew!'",
            el: "Στις 29 Σεπτεμβρίου, στο Μόναχο, ο Νταλαντιέ και ο Τσάμπερλεν παραδίδουν τη σουδητική περιοχή της Τσεχοσλοβακίας στον Χίτλερ έναντι υποσχέσεων ειρήνης. Προσγειούμενος στο Le Bourget στις 30 σε πλήθος που τον επευφημεί ως ήρωα, ο πρωθυπουργός μουρμουρίζει: «οι ανόητοι — αν μόνο ήξεραν!»"
          },
          category: "political"
        }
      ]
    },
    {
      year: 1939,
      month: 9,
      era: {
        en: "Drôle de guerre",
        el: "Drôle de guerre"
      },
      events: [
        {
          title: {
            en: "France declares war on Germany",
            el: "Η Γαλλία κηρύσσει πόλεμο στη Γερμανία"
          },
          description: {
            en: "On 3 September, two days after Hitler invades Poland, France honours her treaty obligations and declares war. The army mobilises five million men. There follows the drôle de guerre — the Phoney War — eight months of inactivity behind the Maginot Line while Poland is partitioned and Stalin invades Finland.",
            el: "Στις 3 Σεπτεμβρίου, δύο ημέρες μετά την εισβολή του Χίτλερ στην Πολωνία, η Γαλλία τιμά τις συνθηκικές της υποχρεώσεις και κηρύσσει πόλεμο. Ο στρατός επιστρατεύει πέντε εκατομμύρια άνδρες. Ακολουθεί η drôle de guerre — ο Ψευδής Πόλεμος — οκτώ μήνες αδράνειας πίσω από τη Γραμμή Μαζινό ενώ η Πολωνία διαμοιράζεται και ο Στάλιν εισβάλλει στη Φινλανδία."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1940,
      month: 5,
      era: {
        en: "Battle of France",
        el: "Μάχη της Γαλλίας"
      },
      events: [
        {
          title: {
            en: "Guderian breaks the line at Sedan",
            el: "Ο Γκουντέριαν σπάει τη γραμμή στο Σεντάν"
          },
          description: {
            en: "On 10 May Hitler attacks west. Three Panzer corps under Guderian, Reinhardt, and Hoth slip through the supposedly impassable Ardennes, cross the Meuse at Sedan on 13-14 May, and race for the Channel. By 21 May they have cut the allied armies in two; by 4 June the British and French rearguards are evacuating Dunkirk.",
            el: "Στις 10 Μαΐου ο Χίτλερ επιτίθεται στη Δύση. Τρία σώματα Panzer υπό τους Γκουντέριαν, Ράινχαρντ και Χοτ διέρχονται μέσα από τις δήθεν αδιάβατες Αρδέννες, διασχίζουν τον Μεύση στο Σεντάν στις 13-14 Μαΐου και τρέχουν προς τη Μάγχη. Μέχρι τις 21 Μαΐου έχουν κόψει τους συμμαχικούς στρατούς στα δύο· μέχρι τις 4 Ιουνίου Βρετανοί και Γαλλικοί οπισθοφύλακες εκκενώνουν τη Δουνκέρκη."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1940,
      month: 6,
      era: {
        en: "Strange Defeat",
        el: "Παράξενη Ήττα"
      },
      events: [
        {
          title: {
            en: "The fall of Paris, the appeal of 18 June, the armistice of Rethondes",
            el: "Η πτώση του Παρισιού, η Έκκληση της 18ης Ιουνίου, η ανακωχή του Ρεθόντ"
          },
          description: {
            en: "On 14 June the German army enters an open Paris. On 16 June Pétain replaces Reynaud as premier and asks for an armistice. On 18 June, from a BBC studio in London, General de Gaulle broadcasts the Appel: 'whatever happens, the flame of French resistance must not and shall not go out.' On 22 June, in Foch's railway carriage at Rethondes, Hitler dictates an armistice. France is to be cut in two; she is to keep her empire and her fleet; the Vichy regime is born.",
            el: "Στις 14 Ιουνίου ο γερμανικός στρατός μπαίνει σε ένα ανοιχτό Παρίσι. Στις 16 Ιουνίου ο Πετέν αντικαθιστά τον Ρεϋνώ ως πρωθυπουργό και ζητά ανακωχή. Στις 18 Ιουνίου, από στούντιο του BBC στο Λονδίνο, ο στρατηγός ντε Γκωλ μεταδίδει την Έκκληση: «ό,τι κι αν συμβεί, η φλόγα της γαλλικής αντίστασης δεν πρέπει και δεν θα σβήσει». Στις 22 Ιουνίου, στο σιδηροδρομικό βαγόνι του Φος στο Ρεθόντ, ο Χίτλερ υπαγορεύει ανακωχή. Η Γαλλία θα κοπεί στα δύο· θα κρατήσει την αυτοκρατορία και τον στόλο της· το καθεστώς του Βισύ γεννιέται."
          },
          extendedDescription: {
            en: "The 'strange defeat', as the historian Marc Bloch would call it from the maquis before being shot in 1944, lost France 100,000 dead, 200,000 wounded, and 1,800,000 prisoners in six weeks. The military catastrophe was not — as both Vichy and the Resistance would later claim — the result of an internal rottenness; it was the result of bad doctrine, bad command, and the misuse of equipment that in some categories outnumbered the German. But it ended the Third Republic.",
            el: "Η «παράξενη ήττα», όπως θα την έλεγε ο ιστορικός Μαρκ Μπλοχ από το maquis πριν εκτελεστεί το 1944, κόστισε στη Γαλλία 100.000 νεκρούς, 200.000 τραυματίες και 1.800.000 αιχμαλώτους σε έξι εβδομάδες. Η στρατιωτική καταστροφή δεν ήταν — όπως θα ισχυρίζονταν αργότερα τόσο το Βισύ όσο και η Αντίσταση — το αποτέλεσμα μιας εσωτερικής σαπίλας· ήταν το αποτέλεσμα κακού δόγματος, κακής διοίκησης και κακής χρήσης εξοπλισμού που σε ορισμένες κατηγορίες υπερτερούσε αριθμητικά του γερμανικού. Αλλά τερμάτισε την Τρίτη Δημοκρατία."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1940,
      month: 7,
      era: {
        en: "Vichy Regime",
        el: "Καθεστώς του Βισύ"
      },
      events: [
        {
          title: {
            en: "Full powers to Pétain at Vichy",
            el: "Πλήρεις εξουσίες στον Πετέν στο Βισύ"
          },
          description: {
            en: "On 10 July at the casino of Vichy, the National Assembly — by 569 votes to 80 — grants full constituent powers to Marshal Pétain. The Third Republic, born in defeat in 1870, dies in defeat in 1940. The 'État français' replaces it. Liberté · Égalité · Fraternité is replaced by Travail · Famille · Patrie.",
            el: "Στις 10 Ιουλίου στο καζίνο του Βισύ, η Εθνοσυνέλευση — με 569 ψήφους έναντι 80 — χορηγεί πλήρεις συντακτικές εξουσίες στον στρατάρχη Πετέν. Η Τρίτη Δημοκρατία, γεννημένη στην ήττα του 1870, πεθαίνει στην ήττα του 1940. Το «État français» την αντικαθιστά. Liberté · Égalité · Fraternité αντικαθίσταται από Travail · Famille · Patrie."
          },
          extendedDescription: {
            en: "By 3 October Vichy had passed without German prompting the first Statut des Juifs, excluding Jews from the public service, the army, and most of the liberal professions. The 'national revolution' of Pétain and Pierre Laval would commit France to collaboration with the occupier, to its own anti-Semitic legislation, and ultimately — through the gendarmerie's roundups of Jews for deportation — to complicity in the Final Solution.",
            el: "Μέχρι τις 3 Οκτωβρίου το Βισύ είχε ψηφίσει χωρίς γερμανική προτροπή τον πρώτο Statut des Juifs, αποκλείοντας τους Εβραίους από τη δημόσια υπηρεσία, τον στρατό και τα περισσότερα ελευθέρια επαγγέλματα. Η «εθνική επανάσταση» του Πετέν και του Πιέρ Λαβάλ θα δέσμευε τη Γαλλία σε συνεργασία με τον κατακτητή, σε δική της αντισημιτική νομοθεσία και τελικά — μέσω των συλλήψεων των Εβραίων από τη χωροφυλακή για εκτόπιση — σε συνενοχή στην Τελική Λύση."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1942,
      month: 7,
      era: {
        en: "Vel d'Hiv Round-up",
        el: "Σύλληψη του Vel d'Hiv"
      },
      events: [
        {
          title: {
            en: "Thirteen thousand Jews are arrested in Paris",
            el: "Δεκατρείς χιλιάδες Εβραίοι συλλαμβάνονται στο Παρίσι"
          },
          description: {
            en: "On 16-17 July, more than thirteen thousand Jews — including four thousand children — are arrested in Paris by French police acting on German requisitions. Thousands are crowded into the Vélodrome d'Hiver near the Eiffel Tower without food or water for five days. From there they are sent to Drancy, and from Drancy to Auschwitz.",
            el: "Στις 16-17 Ιουλίου, περισσότεροι από δεκατρείς χιλιάδες Εβραίοι — μεταξύ αυτών και τέσσερις χιλιάδες παιδιά — συλλαμβάνονται στο Παρίσι από τη γαλλική αστυνομία που εκτελεί γερμανικές απαιτήσεις. Χιλιάδες στιβάζονται στο Vélodrome d'Hiver κοντά στον Πύργο του Άιφελ χωρίς φαγητό ή νερό επί πέντε ημέρες. Από εκεί στέλνονται στο Drancy, και από το Drancy στο Άουσβιτς."
          },
          extendedDescription: {
            en: "Of the seventy-six thousand Jews deported from France during the Occupation, fewer than three per cent returned. The role of the French state in the deportation — through the Statuts des Juifs, the Commissariat aux Questions Juives, and the gendarmerie — was officially acknowledged by President Jacques Chirac only on 16 July 1995, on the anniversary of the round-up.",
            el: "Από τους εβδομήντα έξι χιλιάδες Εβραίους που εκτοπίστηκαν από τη Γαλλία κατά την Κατοχή, λιγότεροι από το τρία τοις εκατό επέστρεψαν. Ο ρόλος του γαλλικού κράτους στην εκτόπιση — μέσω των Statuts des Juifs, του Commissariat aux Questions Juives και της χωροφυλακής — αναγνωρίστηκε επίσημα από τον Πρόεδρο Ζακ Σιράκ μόνο στις 16 Ιουλίου 1995, στην επέτειο της σύλληψης."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1942,
      month: 11,
      era: {
        en: "Occupation of the Free Zone",
        el: "Κατοχή της Ελεύθερης Ζώνης"
      },
      events: [
        {
          title: {
            en: "The Germans occupy southern France; the fleet scuttles itself at Toulon",
            el: "Οι Γερμανοί κατέχουν τη νότια Γαλλία· ο στόλος αυτοβυθίζεται στην Τουλόν"
          },
          description: {
            en: "After the allied landings in French North Africa on 8 November, German troops cross the demarcation line on 11 November and occupy the southern zone. On 27 November, to keep them out of German hands, the French Mediterranean fleet at Toulon scuttles itself: 77 vessels, including three battleships and seven cruisers, are sunk by their own crews.",
            el: "Μετά τις συμμαχικές αποβάσεις στη γαλλική Βόρεια Αφρική στις 8 Νοεμβρίου, γερμανικά στρατεύματα διέρχονται τη γραμμή διαχωρισμού στις 11 Νοεμβρίου και καταλαμβάνουν τη νότια ζώνη. Στις 27 Νοεμβρίου, για να μην πέσει στα γερμανικά χέρια, ο γαλλικός μεσογειακός στόλος στην Τουλόν αυτοβυθίζεται: 77 σκάφη, μεταξύ αυτών τρία θωρηκτά και επτά καταδρομικά, βυθίζονται από τα ίδια τα πληρώματά τους."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1943,
      month: 5,
      era: {
        en: "Unification of the Resistance",
        el: "Ενοποίηση της Αντίστασης"
      },
      events: [
        {
          title: {
            en: "Jean Moulin's National Council of the Resistance",
            el: "Το Εθνικό Συμβούλιο της Αντίστασης του Ζαν Μουλέν"
          },
          description: {
            en: "On 27 May, in a clandestine apartment on the rue du Four in Paris, Jean Moulin gathers the eight major Resistance movements, the two trade-union centrals, and the six pre-war political parties into a single Conseil national de la Résistance. The CNR recognises de Gaulle as head of the French resistance. Within a month Moulin will be betrayed, tortured by Klaus Barbie, and die.",
            el: "Στις 27 Μαΐου, σε κρυφό διαμέρισμα στη rue du Four στο Παρίσι, ο Ζαν Μουλέν συγκεντρώνει τα οκτώ μεγαλύτερα κινήματα της Αντίστασης, τις δύο συνδικαλιστικές κεντρικές και τα έξι προπολεμικά πολιτικά κόμματα σε ένα ενιαίο Conseil national de la Résistance. Το CNR αναγνωρίζει τον ντε Γκωλ ως αρχηγό της γαλλικής αντίστασης. Σε έναν μήνα ο Μουλέν θα προδοθεί, θα βασανιστεί από τον Κλάους Μπάρμπι και θα πεθάνει."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1944,
      month: 6,
      era: {
        en: "D-Day",
        el: "Ημέρα Δ"
      },
      events: [
        {
          title: {
            en: "The Normandy landings",
            el: "Οι αποβάσεις στη Νορμανδία"
          },
          description: {
            en: "On 6 June, 156,000 American, British, Canadian, and Free French troops land on the five beaches of Normandy from Utah to Sword. The maquis rises behind the German lines on the BBC's signal: 'les sanglots longs des violons de l'automne'. Twelve weeks later, on 25 August, the 2nd Armoured Division of General Leclerc enters Paris.",
            el: "Στις 6 Ιουνίου, 156.000 Αμερικανοί, Βρετανοί, Καναδοί και Ελεύθεροι Γάλλοι αποβιβάζονται στις πέντε παραλίες της Νορμανδίας από την Utah ως τη Sword. Το maquis ξεσηκώνεται πίσω από τις γερμανικές γραμμές με το σήμα του BBC: «les sanglots longs des violons de l'automne». Δώδεκα εβδομάδες αργότερα, στις 25 Αυγούστου, η 2η Τεθωρακισμένη Μεραρχία του στρατηγού Λεκλέρ μπαίνει στο Παρίσι."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1944,
      month: 8,
      era: {
        en: "Liberation of Paris",
        el: "Απελευθέρωση του Παρισιού"
      },
      events: [
        {
          title: {
            en: "'Paris outraged! Paris broken! Paris martyred! But Paris liberated!'",
            el: "«Παρίσι προσβεβλημένο! Παρίσι σπασμένο! Παρίσι μαρτυρικό! Αλλά Παρίσι ελεύθερο!»"
          },
          description: {
            en: "After six days of insurrection by the Parisian FFI, Leclerc's tanks enter the capital on 25 August. The German commander Choltitz surrenders at the Hôtel Meurice, defying Hitler's order to burn the city. The next day de Gaulle walks down the Champs-Élysées at the head of the procession, from the Étoile to Notre-Dame, snipers still firing from the rooftops.",
            el: "Μετά από έξι ημέρες εξέγερσης της παρισινής FFI, τα τανκς του Λεκλέρ μπαίνουν στην πρωτεύουσα στις 25 Αυγούστου. Ο Γερμανός διοικητής Χολτίτς παραδίδεται στο Hôtel Meurice, αψηφώντας την εντολή του Χίτλερ να κάψει την πόλη. Την επομένη ο ντε Γκωλ βαδίζει κάτω από τα Champs-Élysées επικεφαλής της παρέλασης, από το Étoile ως τη Notre-Dame, με ελεύθερους σκοπευτές να πυροβολούν ακόμη από τις στέγες."
          },
          extendedDescription: {
            en: "De Gaulle's speech at the Hôtel de Ville on the same evening set the tone of the liberation myth: 'Paris liberated by herself, liberated by her own people, with the help of the armies of France, with the support and assistance of all France, of fighting France, of the only France, of the true and eternal France'. The éclipse — the four years of Vichy and Occupation — was officially closed in a single sentence.",
            el: "Ο λόγος του ντε Γκωλ στο Hôtel de Ville το ίδιο απόγευμα έθεσε τον τόνο του απελευθερωτικού μύθου: «Παρίσι απελευθερωμένο από το ίδιο, απελευθερωμένο από τον δικό του λαό, με τη βοήθεια των στρατών της Γαλλίας, με την υποστήριξη και τη συνδρομή ολόκληρης της Γαλλίας, της μαχόμενης Γαλλίας, της μόνης Γαλλίας, της αληθινής και αιώνιας Γαλλίας». Η éclipse — τα τέσσερα χρόνια του Βισύ και της Κατοχής — έκλεισε επίσημα σε μία πρόταση."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1944,
      month: 10,
      era: {
        en: "The Provisional Government",
        el: "Η Προσωρινή Κυβέρνηση"
      },
      events: [
        {
          title: {
            en: "Women win the vote; the épuration begins",
            el: "Οι γυναίκες κερδίζουν την ψήφο· αρχίζει η épuration"
          },
          description: {
            en: "By an ordinance of 21 April 1944, signed at Algiers, French women have been granted the right to vote and stand for election. They cast ballots for the first time at the municipal elections of April 1945. Meanwhile the épuration is under way: nearly 10,000 collaborators are summarily executed in the months around the liberation; the journalist Brasillach is shot, Pétain and Laval tried, Pétain's death sentence commuted to imprisonment on the Île d'Yeu, Laval shot in October 1945.",
            el: "Με διάταγμα της 21ης Απριλίου 1944, υπογεγραμμένο στο Αλγέρι, οι Γαλλίδες έχουν αποκτήσει το δικαίωμα ψήφου και υποψηφιότητας. Ψηφίζουν για πρώτη φορά στις δημοτικές εκλογές του Απριλίου 1945. Εν τω μεταξύ είναι σε εξέλιξη η épuration: σχεδόν 10.000 συνεργάτες εκτελούνται συνοπτικά στους μήνες γύρω από την απελευθέρωση· ο δημοσιογράφος Μπρασιγιάκ τυφεκίζεται, ο Πετέν και ο Λαβάλ δικάζονται, η θανατική ποινή του Πετέν μετατρέπεται σε φυλάκιση στο Île d'Yeu, ο Λαβάλ εκτελείται τον Οκτώβριο του 1945."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1945,
      month: 5,
      era: {
        en: "V-E Day and Sétif",
        el: "Ημέρα Νίκης και Σετίφ"
      },
      events: [
        {
          title: {
            en: "Victory in Europe; massacre in Algeria",
            el: "Νίκη στην Ευρώπη· σφαγή στην Αλγερία"
          },
          description: {
            en: "On 7 May at Reims and again on 8 May at Berlin-Karlshorst — in the presence of General de Lattre de Tassigny for France — Germany surrenders unconditionally. The same day, in the Algerian town of Sétif, a victory parade turns into demonstrations for Algerian independence; the army and settler vigilantes kill thousands of Muslims. The war that ends in Europe begins in the empire.",
            el: "Στις 7 Μαΐου στη Ρεμς και ξανά στις 8 Μαΐου στο Βερολίνο-Καρλσχορστ — παρουσία του στρατηγού ντε Λατρ ντε Τασινί για τη Γαλλία — η Γερμανία παραδίδεται άνευ όρων. Την ίδια ημέρα, στην αλγερινή πόλη Σετίφ, μια παρέλαση νίκης μετατρέπεται σε διαδηλώσεις για την αλγερινή ανεξαρτησία· ο στρατός και πολιτοφυλακές αποίκων σκοτώνουν χιλιάδες μουσουλμάνους. Ο πόλεμος που τελειώνει στην Ευρώπη αρχίζει στην αυτοκρατορία."
          },
          extendedDescription: {
            en: "The second 8 May, in the words of the Algerian historian Mohammed Harbi, 'began the war of independence'. Behind the victory parades of Paris and London, the next thirty years of decolonisation — Indochina, Madagascar, Cameroon, North Africa, Algeria — were already being prepared. The triumphant moment of 1945 was the watershed of two histories: the end of the war against Hitler and the beginning of the long agony of the French colonial empire.",
            el: "Η δεύτερη 8η Μαΐου, με τα λόγια του Αλγερινού ιστορικού Μοχάμεντ Χαρμπί, «άρχισε τον πόλεμο της ανεξαρτησίας». Πίσω από τις παρελάσεις νίκης του Παρισιού και του Λονδίνου, τα επόμενα τριάντα χρόνια αποαποικιοποίησης — Ινδοκίνα, Μαδαγασκάρη, Καμερούν, Βόρεια Αφρική, Αλγερία — προετοιμάζονταν ήδη. Η θριαμβευτική στιγμή του 1945 ήταν η υδρολογική γραμμή δύο ιστοριών: το τέλος του πολέμου κατά του Χίτλερ και η αρχή της μακράς αγωνίας της γαλλικής αποικιακής αυτοκρατορίας."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
