/** Revolution & Civil War — Επανάσταση & Εμφύλιος Πόλεμος · Russian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const REVOLUTION_CIVIL_WAR = {
  id: "revolution-civil-war" as const,
  label: {
    en: "Revolution & Civil War",
    el: "Επανάσταση & Εμφύλιος Πόλεμος"
  },
  supertitle: {
    en: "1917 · Революция",
    el: "1917 · Επανάσταση"
  },
  title: {
    en: "Revolution & Civil War",
    el: "Επανάσταση & Εμφύλιος Πόλεμος"
  },
  subtitle: {
    en: "From the fall of the monarchy in the February Revolution and Lenin's return through the Bolshevik seizure of power in October, the peace of Brest-Litovsk, the execution of the Romanovs, the Red Terror, and the great Civil War of Reds against Whites, to the victory of the Bolsheviks, the famine of 1921, and the founding of the Soviet Union in 1922. Slide month by month through the five years that overthrew an empire and built a new kind of state.",
    el: "Από την πτώση της μοναρχίας στη Φεβρουαριανή Επανάσταση και την επιστροφή του Λένιν, μέσα από την κατάληψη της εξουσίας από τους Μπολσεβίκους τον Οκτώβριο, την ειρήνη του Μπρεστ-Λιτόφσκ, την εκτέλεση των Ρομανόφ, τον Κόκκινο Τρόμο και τον μεγάλο Εμφύλιο Πόλεμο Κόκκινων εναντίον Λευκών, έως τη νίκη των Μπολσεβίκων, τον λιμό του 1921 και την ίδρυση της Σοβιετικής Ένωσης το 1922. Μετακινηθείτε μήνα προς μήνα στα πέντε χρόνια που ανέτρεψαν μια αυτοκρατορία και έχτισαν ένα νέο είδος κράτους."
  },
  menuDescription: {
    en: "Five years that remade the world: February, Red October, civil war, and a new union.",
    el: "Πέντε χρόνια που άλλαξαν τον κόσμο: ο Φεβρουάριος, ο Κόκκινος Οκτώβρης, ο εμφύλιος και μια νέα ένωση."
  },
  footerLabel: {
    en: "Revolution & Civil War · 1917-1922",
    el: "Επανάσταση & Εμφύλιος Πόλεμος · 1917-1922"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Revolution & Civil War",
    el: "Επανάσταση & Εμφύλιος Πόλεμος"
  },
  theme: THEMES.amber,
  timeline: [
    {
      year: 1917,
      month: 3,
      era: {
        en: "February Revolution",
        el: "Φεβρουαριανή Επανάσταση"
      },
      events: [
        {
          title: {
            en: "The fall of the monarchy",
            el: "Η πτώση της μοναρχίας"
          },
          description: {
            en: "Bread riots and a soldiers' mutiny in Petrograd force Nicholas II to abdicate, ending Romanov rule. A Provisional Government forms alongside the Petrograd Soviet.",
            el: "Εξεγέρσεις για το ψωμί και ανταρσία στρατιωτών στην Πετρούπολη αναγκάζουν τον Νικόλαο Β΄ να παραιτηθεί, τερματίζοντας την κυριαρχία των Ρομανόφ. Μια Προσωρινή Κυβέρνηση σχηματίζεται παράλληλα με το Σοβιέτ της Πετρούπολης."
          },
          extendedDescription: {
            en: "The February Revolution (March by the Western calendar) created a system of 'dual power': the liberal Provisional Government claimed formal authority, while the Petrograd Soviet of Workers' and Soldiers' Deputies controlled the streets, the railways, and the loyalty of the garrison. The contradiction would paralyze Russia for eight months.",
            el: "Η Φεβρουαριανή Επανάσταση (Μάρτιος κατά το δυτικό ημερολόγιο) δημιούργησε ένα σύστημα «δυαδικής εξουσίας»: η φιλελεύθερη Προσωρινή Κυβέρνηση διεκδικούσε την επίσημη αρχή, ενώ το Σοβιέτ Εργατών και Στρατιωτών της Πετρούπολης ήλεγχε τους δρόμους, τους σιδηροδρόμους και την πίστη της φρουράς. Η αντίφαση θα παρέλυε τη Ρωσία για οκτώ μήνες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1917,
      month: 4,
      era: {
        en: "Lenin Returns",
        el: "Επιστροφή του Λένιν"
      },
      events: [
        {
          title: {
            en: "Lenin's return and the April Theses",
            el: "Η επιστροφή του Λένιν και οι Θέσεις του Απριλίου"
          },
          description: {
            en: "Transported from Swiss exile in a sealed train through Germany, Lenin arrives at the Finland Station and demands 'all power to the soviets' and an end to the war.",
            el: "Μεταφερόμενος από την ελβετική εξορία με σφραγισμένο τρένο μέσω Γερμανίας, ο Λένιν φτάνει στον Σταθμό της Φινλανδίας και απαιτεί «όλη η εξουσία στα σοβιέτ» και τερματισμό του πολέμου."
          },
          extendedDescription: {
            en: "The April Theses rejected any cooperation with the Provisional Government and committed the Bolsheviks to a second, socialist revolution. Lenin's slogans — 'Peace, Land, and Bread' and 'All Power to the Soviets' — gave the party a clear and radical program as popular patience with the war wore thin.",
            el: "Οι Θέσεις του Απριλίου απέρριπταν κάθε συνεργασία με την Προσωρινή Κυβέρνηση και δέσμευαν τους Μπολσεβίκους σε μια δεύτερη, σοσιαλιστική επανάσταση. Τα συνθήματα του Λένιν — «Ειρήνη, Γη και Ψωμί» και «Όλη η εξουσία στα σοβιέτ» — έδωσαν στο κόμμα ένα σαφές και ριζοσπαστικό πρόγραμμα καθώς η λαϊκή υπομονή με τον πόλεμο εξαντλούνταν."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Lenin_in_1920_(cropped).jpg?width=1024",
            alt: {
              en: "Vladimir Lenin",
              el: "Ο Βλαντίμιρ Λένιν"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1917,
      month: 7,
      era: {
        en: "The July Days",
        el: "Οι Ημέρες του Ιουλίου"
      },
      events: [
        {
          title: {
            en: "The July Days and Kerensky's rise",
            el: "Οι Ημέρες του Ιουλίου και η άνοδος του Κερένσκι"
          },
          description: {
            en: "A premature armed rising by soldiers and workers in Petrograd collapses; the Bolsheviks are suppressed and Lenin flees to Finland, while Alexander Kerensky becomes prime minister.",
            el: "Μια πρόωρη ένοπλη εξέγερση στρατιωτών και εργατών στην Πετρούπολη καταρρέει· οι Μπολσεβίκοι καταστέλλονται και ο Λένιν διαφεύγει στη Φινλανδία, ενώ ο Αλεξάντερ Κερένσκι γίνεται πρωθυπουργός."
          },
          extendedDescription: {
            en: "The failure of the disastrous Kerensky Offensive at the front fed the unrest. Though the July Days were a Bolshevik setback, the underlying crisis — war-weariness, economic collapse, and land hunger — only deepened, and the party would recover within weeks.",
            el: "Η αποτυχία της καταστροφικής Επίθεσης Κερένσκι στο μέτωπο τροφοδότησε την αναταραχή. Αν και οι Ημέρες του Ιουλίου ήταν οπισθοδρόμηση για τους Μπολσεβίκους, η υποκείμενη κρίση — η κούραση από τον πόλεμο, η οικονομική κατάρρευση και η πείνα για γη — μόνο βάθυνε, και το κόμμα θα ανέκαμπτε μέσα σε εβδομάδες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1917,
      month: 9,
      era: {
        en: "The Kornilov Affair",
        el: "Η Υπόθεση Κορνίλοφ"
      },
      events: [
        {
          title: {
            en: "The Kornilov Affair",
            el: "Η Υπόθεση Κορνίλοφ"
          },
          description: {
            en: "General Lavr Kornilov marches on Petrograd in what Kerensky denounces as a coup attempt; to stop him, the government arms the Bolshevik Red Guards.",
            el: "Ο στρατηγός Λαβρ Κορνίλοφ βαδίζει εναντίον της Πετρούπολης σε αυτό που ο Κερένσκι καταγγέλλει ως απόπειρα πραξικοπήματος· για να τον σταματήσει, η κυβέρνηση εξοπλίζει τις μπολσεβίκικες Κόκκινες Φρουρές."
          },
          extendedDescription: {
            en: "The affair was catastrophic for Kerensky and decisive for the Bolsheviks. Having helped defeat Kornilov, the party emerged armed, vindicated, and newly popular, soon winning majorities in the Petrograd and Moscow soviets and reviving the cry of 'All Power to the Soviets'.",
            el: "Η υπόθεση ήταν καταστροφική για τον Κερένσκι και αποφασιστική για τους Μπολσεβίκους. Έχοντας βοηθήσει να νικηθεί ο Κορνίλοφ, το κόμμα αναδείχθηκε οπλισμένο, δικαιωμένο και εκ νέου δημοφιλές, κερδίζοντας σύντομα πλειοψηφίες στα σοβιέτ της Πετρούπολης και της Μόσχας και αναβιώνοντας την κραυγή «Όλη η εξουσία στα σοβιέτ»."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1917,
      month: 11,
      era: {
        en: "October Revolution",
        el: "Οκτωβριανή Επανάσταση"
      },
      events: [
        {
          title: {
            en: "The Bolsheviks seize power",
            el: "Οι Μπολσεβίκοι καταλαμβάνουν την εξουσία"
          },
          description: {
            en: "On the night of 7-8 November (25-26 October Old Style), Red Guards and sailors storm the Winter Palace, overthrow the Provisional Government, and proclaim soviet rule.",
            el: "Τη νύχτα της 7ης προς 8η Νοεμβρίου (25-26 Οκτωβρίου με το παλαιό ημερολόγιο), Κόκκινες Φρουρές και ναύτες καταλαμβάνουν τα Χειμερινά Ανάκτορα, ανατρέπουν την Προσωρινή Κυβέρνηση και ανακηρύσσουν τη σοβιετική εξουσία."
          },
          extendedDescription: {
            en: "Organized by Trotsky's Military Revolutionary Committee, the near-bloodless coup was ratified by the Second Congress of Soviets. The new government issued the Decree on Peace and the Decree on Land, and a Council of People's Commissars under Lenin took power — the first avowedly communist government in history.",
            el: "Οργανωμένο από τη Στρατιωτική Επαναστατική Επιτροπή του Τρότσκι, το σχεδόν αναίμακτο πραξικόπημα επικυρώθηκε από το Δεύτερο Συνέδριο των Σοβιέτ. Η νέα κυβέρνηση εξέδωσε το Διάταγμα για την Ειρήνη και το Διάταγμα για τη Γη, και ένα Συμβούλιο των Λαϊκών Επιτρόπων υπό τον Λένιν ανέλαβε την εξουσία — η πρώτη ομολογημένα κομμουνιστική κυβέρνηση στην ιστορία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1917,
      month: 12,
      era: {
        en: "The New Regime",
        el: "Το νέο καθεστώς"
      },
      events: [
        {
          title: {
            en: "The Cheka and an armistice",
            el: "Η Τσεκά και μια ανακωχή"
          },
          description: {
            en: "The Bolsheviks establish the Cheka secret police under Felix Dzerzhinsky and open armistice talks with the Central Powers at Brest-Litovsk.",
            el: "Οι Μπολσεβίκοι ιδρύουν τη μυστική αστυνομία Τσεκά υπό τον Φέλιξ Ντζερζίνσκι και ανοίγουν συνομιλίες ανακωχής με τις Κεντρικές Δυνάμεις στο Μπρεστ-Λιτόφσκ."
          },
          extendedDescription: {
            en: "The Cheka would become the instrument of revolutionary terror and the ancestor of the GPU, NKVD, and KGB. Seeking to honor the promise of peace, Lenin pressed for an exit from the World War even at a ruinous territorial price.",
            el: "Η Τσεκά θα γινόταν το όργανο του επαναστατικού τρόμου και ο πρόγονος της GPU, της NKVD και της KGB. Επιδιώκοντας να τιμήσει την υπόσχεση για ειρήνη, ο Λένιν πίεσε για έξοδο από τον Παγκόσμιο Πόλεμο ακόμη και με καταστροφικό εδαφικό τίμημα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1918,
      month: 1,
      era: {
        en: "One-Party State",
        el: "Μονοκομματικό κράτος"
      },
      events: [
        {
          title: {
            en: "The Constituent Assembly is dissolved",
            el: "Διαλύεται η Συντακτική Συνέλευση"
          },
          description: {
            en: "After the Bolsheviks lose the national election to the Socialist Revolutionaries, armed sailors shut down the Constituent Assembly after a single day.",
            el: "Αφού οι Μπολσεβίκοι χάνουν τις εθνικές εκλογές από τους Σοσιαλεπαναστάτες, ένοπλοι ναύτες κλείνουν τη Συντακτική Συνέλευση έπειτα από μία μόνο ημέρα."
          },
          extendedDescription: {
            en: "The dissolution ended Russia's brief experiment with multiparty democracy. It signaled that the Bolsheviks would rule alone, by force if necessary, and pushed their socialist rivals and liberal opponents toward armed resistance.",
            el: "Η διάλυση τερμάτισε το σύντομο πείραμα της Ρωσίας με την πολυκομματική δημοκρατία. Σηματοδότησε ότι οι Μπολσεβίκοι θα κυβερνούσαν μόνοι, με τη βία αν χρειαζόταν, και ώθησε τους σοσιαλιστές αντιπάλους και τους φιλελεύθερους αντιπολιτευόμενούς τους προς την ένοπλη αντίσταση."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1918,
      month: 3,
      era: {
        en: "Exit from the War",
        el: "Έξοδος από τον πόλεμο"
      },
      events: [
        {
          title: {
            en: "The Treaty of Brest-Litovsk",
            el: "Η Συνθήκη του Μπρεστ-Λιτόφσκ"
          },
          description: {
            en: "Russia signs a harsh peace with Germany, surrendering Ukraine, the Baltic lands, and Poland; the capital is moved from Petrograd to Moscow.",
            el: "Η Ρωσία υπογράφει σκληρή ειρήνη με τη Γερμανία, παραχωρώντας την Ουκρανία, τις βαλτικές χώρες και την Πολωνία· η πρωτεύουσα μεταφέρεται από την Πετρούπολη στη Μόσχα."
          },
          extendedDescription: {
            en: "Brest-Litovsk cost Russia a third of its population and much of its industry and grain. Though annulled when Germany collapsed in November 1918, the humiliating treaty enraged nationalists and former allies alike and helped ignite the full-scale Civil War.",
            el: "Το Μπρεστ-Λιτόφσκ κόστισε στη Ρωσία το ένα τρίτο του πληθυσμού της και μεγάλο μέρος της βιομηχανίας και του σιταριού της. Αν και ακυρώθηκε όταν η Γερμανία κατέρρευσε τον Νοέμβριο του 1918, η ταπεινωτική συνθήκη εξόργισε τόσο τους εθνικιστές όσο και τους πρώην συμμάχους και συνέβαλε στην έκρηξη του πλήρους Εμφυλίου Πολέμου."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1918,
      month: 6,
      era: {
        en: "Civil War Erupts",
        el: "Ξεσπά ο Εμφύλιος"
      },
      events: [
        {
          title: {
            en: "The Czechoslovak Legion and War Communism",
            el: "Η Τσεχοσλοβακική Λεγεώνα και ο Πολεμικός Κομμουνισμός"
          },
          description: {
            en: "A revolt by the Czechoslovak Legion along the Trans-Siberian Railway sparks open civil war, as the Bolsheviks impose War Communism to feed the cities and the Red Army.",
            el: "Μια εξέγερση της Τσεχοσλοβακικής Λεγεώνας κατά μήκος του Υπερσιβηρικού Σιδηροδρόμου πυροδοτεί ανοιχτό εμφύλιο πόλεμο, καθώς οι Μπολσεβίκοι επιβάλλουν τον Πολεμικό Κομμουνισμό για να τραφούν οι πόλεις και ο Κόκκινος Στρατός."
          },
          extendedDescription: {
            en: "War Communism meant the forced requisition of grain, the nationalization of industry, and the militarization of labor. The conflict pitted the Red Army, organized by Trotsky, against the loosely allied 'White' armies, backed by Allied intervention forces.",
            el: "Ο Πολεμικός Κομμουνισμός σήμαινε τη βίαιη επίταξη σιτηρών, την εθνικοποίηση της βιομηχανίας και τη στρατιωτικοποίηση της εργασίας. Η σύγκρουση αντιπαρέταξε τον Κόκκινο Στρατό, οργανωμένο από τον Τρότσκι, με τους χαλαρά συμμαχημένους «Λευκούς» στρατούς, που υποστηρίζονταν από συμμαχικές δυνάμεις επέμβασης."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1918,
      month: 7,
      era: {
        en: "Death of the Romanovs",
        el: "Θάνατος των Ρομανόφ"
      },
      events: [
        {
          title: {
            en: "The execution of the imperial family",
            el: "Η εκτέλεση της αυτοκρατορικής οικογένειας"
          },
          description: {
            en: "As White forces approach, Nicholas II, his wife, their five children, and their servants are shot in a cellar in Yekaterinburg.",
            el: "Καθώς πλησιάζουν οι Λευκές δυνάμεις, ο Νικόλαος Β΄, η σύζυγός του, τα πέντε παιδιά τους και οι υπηρέτες τους εκτελούνται σε ένα υπόγειο στο Γιεκατερίνμπουργκ."
          },
          extendedDescription: {
            en: "The murder of the Romanovs was meant to deny the Whites a living symbol and to mark a point of no return. The secret killing and disposal of the bodies became one of the enduring mysteries of the revolution, resolved only with the discovery and identification of the remains decades later.",
            el: "Η δολοφονία των Ρομανόφ είχε σκοπό να στερήσει από τους Λευκούς ένα ζωντανό σύμβολο και να σηματοδοτήσει ένα σημείο χωρίς επιστροφή. Η μυστική εκτέλεση και η απόκρυψη των σορών έγινε ένα από τα διαρκή μυστήρια της επανάστασης, που λύθηκε μόνο με την ανακάλυψη και ταυτοποίηση των λειψάνων δεκαετίες αργότερα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1918,
      month: 9,
      era: {
        en: "The Red Terror",
        el: "Ο Κόκκινος Τρόμος"
      },
      events: [
        {
          title: {
            en: "The Red Terror is unleashed",
            el: "Εξαπολύεται ο Κόκκινος Τρόμος"
          },
          description: {
            en: "After an assassination attempt wounds Lenin, the Bolsheviks proclaim a campaign of mass arrests, hostage-taking, and executions against 'class enemies'.",
            el: "Έπειτα από απόπειρα δολοφονίας που τραυματίζει τον Λένιν, οι Μπολσεβίκοι κηρύσσουν εκστρατεία μαζικών συλλήψεων, ομηρίας και εκτελέσεων κατά των «ταξικών εχθρών»."
          },
          extendedDescription: {
            en: "Carried out by the Cheka, the Red Terror institutionalized political violence as a tool of the new state. It was answered by a 'White Terror' in the territories held by the anti-Bolshevik armies; both sides killed prisoners and civilians on a vast scale.",
            el: "Διεξαγόμενος από την Τσεκά, ο Κόκκινος Τρόμος θεσμοθέτησε την πολιτική βία ως εργαλείο του νέου κράτους. Του απάντησε ένας «Λευκός Τρόμος» στα εδάφη που κατείχαν οι αντιμπολσεβίκικοι στρατοί· και οι δύο πλευρές σκότωσαν αιχμαλώτους και αμάχους σε τεράστια κλίμακα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1919,
      month: 3,
      era: {
        en: "World Revolution",
        el: "Παγκόσμια επανάσταση"
      },
      events: [
        {
          title: {
            en: "Kolchak's offensive and the founding of the Comintern",
            el: "Η επίθεση του Κολτσάκ και η ίδρυση της Κομιντέρν"
          },
          description: {
            en: "Admiral Kolchak, 'Supreme Ruler' of the Whites, drives west from Siberia, while in Moscow the Bolsheviks found the Communist International to spread revolution abroad.",
            el: "Ο ναύαρχος Κολτσάκ, «Ύπατος Άρχων» των Λευκών, προελαύνει δυτικά από τη Σιβηρία, ενώ στη Μόσχα οι Μπολσεβίκοι ιδρύουν την Κομμουνιστική Διεθνή για να διαδώσουν την επανάσταση στο εξωτερικό."
          },
          extendedDescription: {
            en: "1919 was the most dangerous year of the Civil War, with White armies attacking from Siberia, the south, and the Baltic. The Comintern reflected the Bolsheviks' belief that their survival depended on revolution spreading to Germany and beyond.",
            el: "Το 1919 ήταν η πιο επικίνδυνη χρονιά του Εμφυλίου, με τους Λευκούς στρατούς να επιτίθενται από τη Σιβηρία, τον νότο και τη Βαλτική. Η Κομιντέρν αντανακλούσε την πεποίθηση των Μπολσεβίκων ότι η επιβίωσή τους εξαρτιόταν από την εξάπλωση της επανάστασης στη Γερμανία και πέρα από αυτήν."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1919,
      month: 10,
      era: {
        en: "The Whites at the Gates",
        el: "Οι Λευκοί στις πύλες"
      },
      events: [
        {
          title: {
            en: "Denikin and Yudenich are turned back",
            el: "Ο Ντενίκιν και ο Γιουντένιτς αποκρούονται"
          },
          description: {
            en: "General Denikin's drive on Moscow reaches Oryol and Yudenich nears Petrograd, but the Red Army halts both at the high-water mark of the White cause.",
            el: "Η προέλαση του στρατηγού Ντενίκιν προς τη Μόσχα φτάνει στο Οριόλ και ο Γιουντένιτς πλησιάζει την Πετρούπολη, αλλά ο Κόκκινος Στρατός αναχαιτίζει και τους δύο στο ανώτατο σημείο της Λευκής υπόθεσης."
          },
          extendedDescription: {
            en: "After this autumn crisis the tide turned decisively. The Reds held interior lines, the railways, and the industrial heartland, while the Whites were divided, far-flung, and discredited by reaction and corruption. Through 1920 the Red Army went over to the offensive on every front.",
            el: "Μετά από αυτή τη φθινοπωρινή κρίση η ροή άλλαξε αποφασιστικά. Οι Κόκκινοι κρατούσαν τις εσωτερικές γραμμές, τους σιδηροδρόμους και τη βιομηχανική καρδιά, ενώ οι Λευκοί ήταν διαιρεμένοι, διασκορπισμένοι και απαξιωμένοι από την αντίδραση και τη διαφθορά. Μέσα στο 1920 ο Κόκκινος Στρατός πέρασε στην επίθεση σε κάθε μέτωπο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1920,
      month: 8,
      era: {
        en: "War with Poland",
        el: "Πόλεμος με την Πολωνία"
      },
      events: [
        {
          title: {
            en: "The Battle of Warsaw",
            el: "Η Μάχη της Βαρσοβίας"
          },
          description: {
            en: "The Red Army's advance on Warsaw, aiming to carry revolution into Europe, is shattered by a Polish counterattack known as the 'Miracle on the Vistula'.",
            el: "Η προέλαση του Κόκκινου Στρατού προς τη Βαρσοβία, με στόχο να μεταφέρει την επανάσταση στην Ευρώπη, συντρίβεται από πολωνική αντεπίθεση γνωστή ως «Θαύμα στον Βιστούλα»."
          },
          extendedDescription: {
            en: "The defeat ended Bolshevik hopes of a quick link-up with revolutionaries in Germany. The Polish-Soviet War was settled by the Treaty of Riga in 1921, fixing a border that left millions of Ukrainians and Belarusians inside Poland.",
            el: "Η ήττα τερμάτισε τις ελπίδες των Μπολσεβίκων για γρήγορη σύνδεση με τους επαναστάτες στη Γερμανία. Ο Πολωνοσοβιετικός Πόλεμος διευθετήθηκε με τη Συνθήκη της Ρίγας το 1921, καθορίζοντας ένα σύνορο που άφηνε εκατομμύρια Ουκρανούς και Λευκορώσους εντός της Πολωνίας."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1920,
      month: 11,
      era: {
        en: "Victory of the Reds",
        el: "Νίκη των Κόκκινων"
      },
      events: [
        {
          title: {
            en: "The fall of Crimea and Wrangel's evacuation",
            el: "Η πτώση της Κριμαίας και η εκκένωση του Βράνγκελ"
          },
          description: {
            en: "The Red Army breaks the last major White army under General Wrangel, who evacuates over 100,000 soldiers and civilians from Crimea by sea.",
            el: "Ο Κόκκινος Στρατός συντρίβει τον τελευταίο μεγάλο Λευκό στρατό υπό τον στρατηγό Βράνγκελ, ο οποίος εκκενώνει πάνω από 100.000 στρατιώτες και αμάχους από την Κριμαία διά θαλάσσης."
          },
          extendedDescription: {
            en: "Wrangel's evacuation effectively ended the Civil War in European Russia and began the great White emigration. Fighting continued in the Caucasus, Central Asia, and the Far East, but Bolshevik victory was now assured at a cost of millions dead from war, terror, and disease.",
            el: "Η εκκένωση του Βράνγκελ ουσιαστικά τερμάτισε τον Εμφύλιο στην ευρωπαϊκή Ρωσία και ξεκίνησε τη μεγάλη Λευκή προσφυγιά. Οι μάχες συνεχίστηκαν στον Καύκασο, την Κεντρική Ασία και την Άπω Ανατολή, αλλά η νίκη των Μπολσεβίκων ήταν πλέον εξασφαλισμένη, με κόστος εκατομμύρια νεκρούς από πόλεμο, τρόμο και ασθένειες."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1921,
      month: 3,
      era: {
        en: "Crisis and Retreat",
        el: "Κρίση και υποχώρηση"
      },
      events: [
        {
          title: {
            en: "Kronstadt and the New Economic Policy",
            el: "Η Κρονστάνδη και η Νέα Οικονομική Πολιτική"
          },
          description: {
            en: "Sailors at the Kronstadt naval base rise against Bolshevik rule and are crushed; days later, Lenin replaces War Communism with the market-friendly New Economic Policy.",
            el: "Οι ναύτες της ναυτικής βάσης της Κρονστάνδης εξεγείρονται κατά της μπολσεβίκικης εξουσίας και συντρίβονται· λίγες ημέρες αργότερα, ο Λένιν αντικαθιστά τον Πολεμικό Κομμουνισμό με τη φιλική προς την αγορά Νέα Οικονομική Πολιτική."
          },
          extendedDescription: {
            en: "The Kronstadt revolt, led by former revolutionary heroes demanding 'soviets without Bolsheviks', shocked the party. The NEP allowed peasants to sell surplus grain and small private trade to revive, a pragmatic retreat that restored the shattered economy through the 1920s.",
            el: "Η εξέγερση της Κρονστάνδης, με επικεφαλής πρώην επαναστατικούς ήρωες που ζητούσαν «σοβιέτ χωρίς Μπολσεβίκους», συγκλόνισε το κόμμα. Η ΝΕΠ επέτρεψε στους χωρικούς να πωλούν το πλεόνασμα σιτηρών και αναβίωσε το μικρό ιδιωτικό εμπόριο, μια πραγματιστική υποχώρηση που αποκατέστησε την κατεστραμμένη οικονομία μέσα στη δεκαετία του 1920."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1921,
      month: 8,
      era: {
        en: "Famine",
        el: "Λιμός"
      },
      events: [
        {
          title: {
            en: "The Russian famine of 1921-1922",
            el: "Ο ρωσικός λιμός του 1921-1922"
          },
          description: {
            en: "Drought, war, and grain requisition trigger a catastrophic famine along the Volga that kills around five million people despite international relief.",
            el: "Η ξηρασία, ο πόλεμος και η επίταξη σιτηρών προκαλούν έναν καταστροφικό λιμό κατά μήκος του Βόλγα που σκοτώνει περίπου πέντε εκατομμύρια ανθρώπους παρά τη διεθνή βοήθεια."
          },
          extendedDescription: {
            en: "The famine was relieved in part by the American Relief Administration under Herbert Hoover, which fed millions. The disaster underlined the human cost of the revolutionary years and reinforced the case for the more moderate course of the NEP.",
            el: "Ο λιμός ανακουφίστηκε εν μέρει από την Αμερικανική Διοίκηση Αρωγής υπό τον Χέρμπερτ Χούβερ, που έθρεψε εκατομμύρια. Η καταστροφή υπογράμμισε το ανθρώπινο κόστος των επαναστατικών χρόνων και ενίσχυσε το επιχείρημα για την πιο μετριοπαθή πορεία της ΝΕΠ."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1922,
      month: 4,
      era: {
        en: "Rise of Stalin",
        el: "Άνοδος του Στάλιν"
      },
      events: [
        {
          title: {
            en: "Stalin becomes General Secretary",
            el: "Ο Στάλιν γίνεται Γενικός Γραμματέας"
          },
          description: {
            en: "Joseph Stalin is appointed General Secretary of the Communist Party, an administrative post he will build into the base of supreme power.",
            el: "Ο Ιωσήφ Στάλιν διορίζεται Γενικός Γραμματέας του Κομμουνιστικού Κόμματος, ένα διοικητικό αξίωμα που θα μετατρέψει σε βάση της υπέρτατης εξουσίας."
          },
          extendedDescription: {
            en: "As Lenin's health failed after a series of strokes, a struggle for the succession began. Lenin's 'Testament' warned against Stalin's growing power, but the warning was suppressed, and Stalin steadily outmaneuvered Trotsky and his other rivals.",
            el: "Καθώς η υγεία του Λένιν κατέρρεε έπειτα από σειρά εγκεφαλικών, άρχισε ένας αγώνας για τη διαδοχή. Η «Διαθήκη» του Λένιν προειδοποιούσε για την αυξανόμενη ισχύ του Στάλιν, αλλά η προειδοποίηση αποσιωπήθηκε, και ο Στάλιν σταδιακά ξεπέρασε σε ελιγμούς τον Τρότσκι και τους άλλους αντιπάλους του."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1922,
      month: 12,
      era: {
        en: "Birth of the USSR",
        el: "Γέννηση της ΕΣΣΔ"
      },
      events: [
        {
          title: {
            en: "Foundation of the Soviet Union",
            el: "Ίδρυση της Σοβιετικής Ένωσης"
          },
          description: {
            en: "On 30 December 1922, the Russian, Ukrainian, Belarusian, and Transcaucasian republics unite to form the Union of Soviet Socialist Republics.",
            el: "Στις 30 Δεκεμβρίου 1922, η ρωσική, η ουκρανική, η λευκορωσική και η υπερκαυκασιανή δημοκρατία ενώνονται για να σχηματίσουν την Ένωση Σοβιετικών Σοσιαλιστικών Δημοκρατιών."
          },
          extendedDescription: {
            en: "The creation of the USSR formally ended the revolutionary and civil war era and founded the state that would endure until 1991. On the ruins of the empire, the Bolsheviks had built a new kind of polity — a one-party socialist union spanning Eurasia.",
            el: "Η δημιουργία της ΕΣΣΔ τερμάτισε επίσημα την εποχή της επανάστασης και του εμφυλίου πολέμου και ίδρυσε το κράτος που θα διαρκούσε έως το 1991. Στα ερείπια της αυτοκρατορίας, οι Μπολσεβίκοι είχαν χτίσει ένα νέο είδος πολιτείας — μια μονοκομματική σοσιαλιστική ένωση που εκτεινόταν σε όλη την Ευρασία."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
