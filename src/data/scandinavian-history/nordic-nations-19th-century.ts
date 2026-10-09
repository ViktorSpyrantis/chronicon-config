/** Nations, Emigration & Reform — Έθνη, Μετανάστευση & Μεταρρυθμίσεις · Vikings & Scandinavia */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const NORDIC_NATIONS_19TH_CENTURY = {
  id: "nordic-nations-19th-century" as const,
  label: {
    en: "Nations, Emigration & Reform",
    el: "Έθνη, Μετανάστευση & Μεταρρυθμίσεις"
  },
  supertitle: {
    en: "19th-Century Scandinavia",
    el: "Η Σκανδιναβία του 19ου Αιώνα"
  },
  title: {
    en: "Fairy Tales, Frontiers & Freedom: The Nordic 19th Century",
    el: "Παραμύθια, Σύνορα & Ελευθερία: ο Σκανδιναβικός 19ος Αιώνας"
  },
  subtitle: {
    en: "In the century after Napoleon, the Nordic peoples discovered themselves as nations. Andersen's fairy tales and the Finnish Kalevala, Ibsen's plays and Munch's Scream made the North famous. Denmark became a constitutional monarchy but lost Schleswig to Prussia; famine drove more than a million Swedes to America; Nansen and Amundsen conquered the ice; and Norway won its independence without a shot fired. Slide across a century of nation-building, art and exploration.",
    el: "Τον αιώνα μετά τον Ναπολέοντα, οι λαοί του Βορρά ανακάλυψαν τον εαυτό τους ως έθνη. Τα παραμύθια του Άντερσεν και η φινλανδική Καλεβάλα, τα έργα του Ίψεν και η «Κραυγή» του Μουνκ έκαναν τον Βορρά διάσημο. Η Δανία έγινε συνταγματική μοναρχία αλλά έχασε το Σλέσβιχ από την Πρωσία· ο λιμός έδιωξε πάνω από ένα εκατομμύριο Σουηδούς στην Αμερική· ο Νάνσεν και ο Άμουντσεν κατέκτησαν τους πάγους· και η Νορβηγία κέρδισε την ανεξαρτησία της χωρίς να πέσει ούτε μία τουφεκιά. Μετακινηθείτε σε έναν αιώνα εθνικής οικοδόμησης, τέχνης και εξερεύνησης."
  },
  menuDescription: {
    en: "Andersen and Ibsen, the Schleswig wars, mass emigration, polar explorers, and Norwegian independence.",
    el: "Ο Άντερσεν και ο Ίψεν, οι πόλεμοι του Σλέσβιχ, η μαζική μετανάστευση, οι εξερευνητές των πόλων και η ανεξαρτησία της Νορβηγίας."
  },
  footerLabel: {
    en: "Nations & Reform · 1815-1914",
    el: "Έθνη & Μεταρρυθμίσεις · 1815-1914"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Nations, Emigration & Reform",
    el: "Έθνη, Μετανάστευση & Μεταρρυθμίσεις"
  },
  theme: THEMES.forest,
  timeline: [
    {
      year: 1835,
      era: {
        en: "National Romanticism",
        el: "Εθνικός Ρομαντισμός"
      },
      events: [
        {
          title: {
            en: "Andersen's first fairy tales",
            el: "Τα πρώτα παραμύθια του Άντερσεν"
          },
          description: {
            en: "Hans Christian Andersen, a poor shoemaker's son from Odense, publishes his first booklet of fairy tales, including 'The Tinderbox' and 'The Princess and the Pea'.",
            el: "Ο Χανς Κρίστιαν Άντερσεν, φτωχός γιος τσαγκάρη από το Όντενσε, δημοσιεύει το πρώτο του τεύχος παραμυθιών, με «Το Τσακμάκι» και «Η Πριγκίπισσα και το Μπιζέλι»."
          },
          extendedDescription: {
            en: "Critics at first dismissed them as childish, but Andersen went on to write over 150 tales — 'The Little Mermaid', 'The Ugly Duckling', 'The Emperor's New Clothes', 'The Snow Queen' — that have been translated into more languages than almost any other literature. This was Denmark's Golden Age, the time of the philosopher Søren Kierkegaard, the sculptor Bertel Thorvaldsen and the theologian N. F. S. Grundtvig, whose folk high schools shaped Nordic education.",
            el: "Οι κριτικοί αρχικά τα απέρριψαν ως παιδαριώδη, αλλά ο Άντερσεν έγραψε στη συνέχεια πάνω από 150 παραμύθια — «Η Μικρή Γοργόνα», «Το Ασχημόπαπο», «Τα Καινούργια Ρούχα του Αυτοκράτορα», «Η Βασίλισσα του Χιονιού» — που έχουν μεταφραστεί σε περισσότερες γλώσσες από σχεδόν οποιαδήποτε άλλη λογοτεχνία. Ήταν ο Χρυσός Αιώνας της Δανίας, η εποχή του φιλοσόφου Σέρεν Κίρκεγκωρ, του γλύπτη Μπέρτελ Τόρβαλντσεν και του θεολόγου Ν. Φ. Σ. Γκρούντβιγκ, του οποίου οι λαϊκές ανώτερες σχολές διαμόρφωσαν τη σκανδιναβική εκπαίδευση."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hans_Christian_Andersen_by_Thora_Hallager_1869.jpg?width=1024",
            alt: {
              en: "Hans Christian Andersen, photographed by Thora Hallager in 1869",
              el: "Ο Χανς Κρίστιαν Άντερσεν, φωτογραφημένος από τη Θόρα Χαλάγκερ το 1869"
            },
            credit: "Via Wikimedia Commons"
          }
        },
        {
          title: {
            en: "The Kalevala",
            el: "Η Καλεβάλα"
          },
          description: {
            en: "Elias Lönnrot publishes the Kalevala, an epic compiled from Finnish and Karelian folk poetry that becomes the foundation of Finnish national identity.",
            el: "Ο Ελίας Λένροτ δημοσιεύει την Καλεβάλα, ένα έπος συγκεντρωμένο από φινλανδική και καρελιανή λαϊκή ποίηση, που γίνεται το θεμέλιο της φινλανδικής εθνικής ταυτότητας."
          },
          extendedDescription: {
            en: "Lönnrot, a country doctor, travelled for years among the singers of Karelia recording their ancient runes. His epic of the sage Väinämöinen, the smith Ilmarinen and the magical Sampo gave Finns, then under Russian rule and with Swedish as the language of their elite, a literature of their own. It inspired Sibelius' music and Gallen-Kallela's paintings; 28 February is Finland's Kalevala Day.",
            el: "Ο Λένροτ, ένας επαρχιακός γιατρός, ταξίδεψε επί χρόνια ανάμεσα στους τραγουδιστές της Καρελίας καταγράφοντας τα αρχαία τους άσματα. Το έπος του για τον σοφό Βαϊναμόινεν, τον σιδηρουργό Ιλμαρίνεν και το μαγικό Σάμπο έδωσε στους Φινλανδούς, που τότε βρίσκονταν υπό ρωσική κυριαρχία και είχαν τη σουηδική ως γλώσσα της ελίτ τους, μια δική τους λογοτεχνία. Ενέπνευσε τη μουσική του Σιμπέλιους και τους πίνακες του Γκάλεν-Κάλελα· η 28η Φεβρουαρίου είναι η Ημέρα της Καλεβάλα στη Φινλανδία."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1849,
      era: {
        en: "Constitutional Era",
        el: "Συνταγματική Εποχή"
      },
      events: [
        {
          title: {
            en: "Denmark's June Constitution",
            el: "Το Ιουνιανό Σύνταγμα της Δανίας"
          },
          description: {
            en: "Amid the revolutions of 1848 and war with the Schleswig-Holstein rebels, King Frederick VII signs a constitution on 5 June, ending absolute monarchy in Denmark.",
            el: "Εν μέσω των επαναστάσεων του 1848 και του πολέμου με τους επαναστάτες του Σλέσβιχ-Χολστάιν, ο βασιλιάς Φρειδερίκος Ζ΄ υπογράφει ένα σύνταγμα στις 5 Ιουνίου, τερματίζοντας την απόλυτη μοναρχία στη Δανία."
          },
          extendedDescription: {
            en: "The constitution created a two-chamber parliament, the Rigsdag, guaranteed freedom of speech, religion and assembly, and gave the vote to independent men over thirty — one of Europe's broadest franchises at the time. Frederick VII accepted it without bloodshed, earning great popularity. At the same time the First Schleswig War (1848–51) was being fought against German nationalists in the duchies; Denmark won, but the question of Schleswig's future remained unresolved. 5 June is still Denmark's Constitution Day.",
            el: "Το σύνταγμα δημιούργησε ένα κοινοβούλιο δύο σωμάτων, το Ρίγκσνταγκ, εγγυήθηκε την ελευθερία του λόγου, της θρησκείας και του συνέρχεσθαι και έδωσε ψήφο στους ανεξάρτητους άνδρες άνω των τριάντα — ένα από τα ευρύτερα εκλογικά σώματα της Ευρώπης εκείνη την εποχή. Ο Φρειδερίκος Ζ΄ το αποδέχτηκε χωρίς αιματοχυσία, κερδίζοντας μεγάλη δημοτικότητα. Την ίδια εποχή διεξαγόταν ο Πρώτος Πόλεμος του Σλέσβιχ (1848–51) εναντίον των Γερμανών εθνικιστών στα δουκάτα· η Δανία νίκησε, αλλά το ζήτημα του μέλλοντος του Σλέσβιχ έμεινε άλυτο. Η 5η Ιουνίου είναι ακόμη η Ημέρα του Συντάγματος στη Δανία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1864,
      era: {
        en: "Constitutional Era",
        el: "Συνταγματική Εποχή"
      },
      events: [
        {
          title: {
            en: "Defeat at Dybbøl",
            el: "Η ήττα στο Ντίμπελ"
          },
          description: {
            en: "Prussia and Austria invade; after the storming of the Dybbøl redoubts on 18 April, Denmark loses Schleswig, Holstein and Lauenburg — two-fifths of its territory.",
            el: "Η Πρωσία και η Αυστρία εισβάλλουν· μετά την έφοδο στα οχυρώματα του Ντίμπελ στις 18 Απριλίου, η Δανία χάνει το Σλέσβιχ, το Χολστάιν και το Λάουενμπουργκ — τα δύο πέμπτα της επικράτειάς της."
          },
          extendedDescription: {
            en: "Danish nationalists had tried to bind Schleswig closer to Denmark, giving Bismarck a pretext for war. Denmark hoped in vain for British or Swedish help. The defeat was a national trauma, summed up in the motto 'What was lost outwardly must be won inwardly' — Danes turned to reclaiming heathland, building cooperatives and folk high schools. For Prussia, it was the first of the three wars that would unite Germany.",
            el: "Οι Δανοί εθνικιστές είχαν προσπαθήσει να δέσουν στενότερα το Σλέσβιχ με τη Δανία, δίνοντας στον Βίσμαρκ πρόσχημα για πόλεμο. Η Δανία ήλπιζε μάταια σε βρετανική ή σουηδική βοήθεια. Η ήττα ήταν εθνικό τραύμα, που συνοψίστηκε στο σύνθημα «Ό,τι χάθηκε προς τα έξω πρέπει να κερδηθεί προς τα μέσα» — οι Δανοί στράφηκαν στην αξιοποίηση των χερσότοπων, στη δημιουργία συνεταιρισμών και λαϊκών ανώτερων σχολών. Για την Πρωσία, ήταν ο πρώτος από τους τρεις πολέμους που θα ένωναν τη Γερμανία."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Stormen_p%C3%A5_Dybb%C3%B8l.jpg?width=1024",
            alt: {
              en: "A painting of the Prussian storming of the Dybbøl redoubts in 1864",
              el: "Πίνακας με την πρωσική έφοδο στα οχυρώματα του Ντίμπελ το 1864"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1867,
      era: {
        en: "Industrial Age",
        el: "Βιομηχανική Εποχή"
      },
      events: [
        {
          title: {
            en: "Famine and the great emigration",
            el: "Ο λιμός και η μεγάλη μετανάστευση"
          },
          description: {
            en: "Crop failures bring famine to Finland in 1866–68 and to northern Sweden in 1867–69, swelling a wave of emigration that would carry over a million Swedes and hundreds of thousands of Norwegians to America.",
            el: "Οι αποτυχημένες σοδειές φέρνουν λιμό στη Φινλανδία το 1866–68 και στη βόρεια Σουηδία το 1867–69, διογκώνοντας ένα κύμα μετανάστευσης που θα οδηγούσε πάνω από ένα εκατομμύριο Σουηδούς και εκατοντάδες χιλιάδες Νορβηγούς στην Αμερική."
          },
          extendedDescription: {
            en: "Between about 1850 and 1930 roughly a fifth of Sweden's population left, and Norway lost a larger share of its people than any European country except Ireland. Most settled in the American Midwest — Minnesota, Wisconsin, Illinois — as farmers and workers. The same year, 1867, Alfred Nobel patented dynamite, one of the inventions that made the fortune he would leave to fund the Nobel Prizes.",
            el: "Από το 1850 περίπου ως το 1930 έφυγε περίπου το ένα πέμπτο του πληθυσμού της Σουηδίας, και η Νορβηγία έχασε μεγαλύτερο ποσοστό του πληθυσμού της από κάθε άλλη ευρωπαϊκή χώρα εκτός από την Ιρλανδία. Οι περισσότεροι εγκαταστάθηκαν στην αμερικανική Μεσοδυτική — Μινεσότα, Ουισκόνσιν, Ιλινόι — ως αγρότες και εργάτες. Την ίδια χρονιά, το 1867, ο Άλφρεντ Νόμπελ κατοχύρωσε με δίπλωμα ευρεσιτεχνίας τον δυναμίτη, μία από τις εφευρέσεις που του απέφεραν την περιουσία που θα άφηνε για να χρηματοδοτηθούν τα Βραβεία Νόμπελ."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1879,
      era: {
        en: "Modern Breakthrough",
        el: "Νεωτερική Τομή"
      },
      events: [
        {
          title: {
            en: "Ibsen's A Doll's House",
            el: "Το «Κουκλόσπιτο» του Ίψεν"
          },
          description: {
            en: "Henrik Ibsen's play A Doll's House premieres in Copenhagen; its heroine Nora walking out on her husband and children scandalises audiences across Europe.",
            el: "Το έργο του Χένρικ Ίψεν «Κουκλόσπιτο» κάνει πρεμιέρα στην Κοπεγχάγη· η ηρωίδα του, η Νόρα, που εγκαταλείπει τον άντρα και τα παιδιά της, σκανδαλίζει το κοινό σε όλη την Ευρώπη."
          },
          extendedDescription: {
            en: "The 'door slam heard around the world' made Ibsen, often called the father of modern drama, the most discussed playwright of his age. With Ghosts, An Enemy of the People and Hedda Gabler he dragged social problems onto the stage. He was part of the 'Modern Breakthrough' of Nordic literature and art alongside August Strindberg in Sweden and the critic Georg Brandes in Denmark.",
            el: "Το «χτύπημα της πόρτας που ακούστηκε σε όλο τον κόσμο» έκανε τον Ίψεν, που συχνά αποκαλείται πατέρας του σύγχρονου δράματος, τον πιο πολυσυζητημένο θεατρικό συγγραφέα της εποχής του. Με τους «Βρικόλακες», τον «Εχθρό του Λαού» και την «Έντα Γκάμπλερ» έφερε τα κοινωνικά προβλήματα στη σκηνή. Ήταν μέρος της «Νεωτερικής Τομής» της σκανδιναβικής λογοτεχνίας και τέχνης μαζί με τον Αύγουστο Στρίντμπεργκ στη Σουηδία και τον κριτικό Γκέοργκ Μπράντες στη Δανία."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1888,
      era: {
        en: "Age of Exploration",
        el: "Εποχή της Εξερεύνησης"
      },
      events: [
        {
          title: {
            en: "Nansen crosses Greenland",
            el: "Ο Νάνσεν διασχίζει τη Γροιλανδία"
          },
          description: {
            en: "Fridtjof Nansen and five companions make the first crossing of the Greenland ice sheet on skis, from east to west.",
            el: "Ο Φρίτιοφ Νάνσεν και πέντε σύντροφοί του πραγματοποιούν την πρώτη διάσχιση του στρώματος πάγου της Γροιλανδίας με χιονοπέδιλα, από τα ανατολικά προς τα δυτικά."
          },
          extendedDescription: {
            en: "Nansen deliberately started on the uninhabited east coast so there would be no retreat. His success made skiing internationally famous. In 1893–96 he let his ship Fram freeze into the Arctic pack ice to drift toward the North Pole, reaching a record farthest north. Later, as a diplomat, he helped repatriate prisoners of war, created the 'Nansen passport' for stateless refugees, and helped resettle the Greek refugees from Asia Minor after 1922, winning the Nobel Peace Prize that same year.",
            el: "Ο Νάνσεν ξεκίνησε σκόπιμα από την ακατοίκητη ανατολική ακτή ώστε να μην υπάρχει δρόμος υποχώρησης. Η επιτυχία του έκανε το σκι διάσημο διεθνώς. Το 1893–96 άφησε το πλοίο του, το Φραμ, να παγιδευτεί στους πάγους της Αρκτικής για να παρασυρθεί προς τον Βόρειο Πόλο, φτάνοντας σε ρεκόρ βορειότερου σημείου. Αργότερα, ως διπλωμάτης, βοήθησε στον επαναπατρισμό αιχμαλώτων πολέμου, δημιούργησε το «διαβατήριο Νάνσεν» για απάτριδες πρόσφυγες και συνέβαλε στην αποκατάσταση των Ελλήνων προσφύγων της Μικράς Ασίας μετά το 1922, κερδίζοντας το Νόμπελ Ειρήνης την ίδια χρονιά."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1893,
      era: {
        en: "Modern Breakthrough",
        el: "Νεωτερική Τομή"
      },
      events: [
        {
          title: {
            en: "Munch paints The Scream",
            el: "Ο Μουνκ ζωγραφίζει την «Κραυγή»"
          },
          description: {
            en: "The Norwegian artist Edvard Munch creates The Scream, a swirling image of anguish that becomes one of the most recognisable artworks in the world.",
            el: "Ο Νορβηγός καλλιτέχνης Έντβαρντ Μουνκ δημιουργεί την «Κραυγή», μια στροβιλιζόμενη εικόνα αγωνίας που γίνεται ένα από τα πιο αναγνωρίσιμα έργα τέχνης στον κόσμο."
          },
          extendedDescription: {
            en: "Munch described walking at sunset near Kristiania (Oslo) when the sky turned blood-red and he 'sensed an infinite scream passing through nature'. He made several versions in paint and pastel and a lithograph. Part of his 'Frieze of Life' on love, anxiety and death, The Scream helped found Expressionism and became an icon of modern anxiety.",
            el: "Ο Μουνκ περιέγραψε ότι περπατούσε στο ηλιοβασίλεμα κοντά στην Κριστιάνια (Όσλο) όταν ο ουρανός έγινε κόκκινος σαν αίμα και «ένιωσε μια ατέλειωτη κραυγή να διαπερνά τη φύση». Έφτιαξε πολλές εκδοχές με λάδι και παστέλ και μια λιθογραφία. Μέρος της «Ζωφόρου της Ζωής» του για τον έρωτα, το άγχος και τον θάνατο, η «Κραυγή» βοήθησε να θεμελιωθεί ο εξπρεσιονισμός και έγινε σύμβολο του σύγχρονου άγχους."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg?width=1024",
            alt: {
              en: "Edvard Munch's The Scream (1893), National Gallery of Norway",
              el: "Η «Κραυγή» του Έντβαρντ Μουνκ (1893), Εθνική Πινακοθήκη της Νορβηγίας"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1901,
      era: {
        en: "Belle Époque",
        el: "Μπελ Επόκ"
      },
      events: [
        {
          title: {
            en: "The first Nobel Prizes",
            el: "Τα πρώτα Βραβεία Νόμπελ"
          },
          description: {
            en: "On the fifth anniversary of Alfred Nobel's death, the first Nobel Prizes are awarded in Stockholm and, for peace, in Kristiania.",
            el: "Στην πέμπτη επέτειο του θανάτου του Άλφρεντ Νόμπελ, απονέμονται τα πρώτα Βραβεία Νόμπελ στη Στοκχόλμη και, για την ειρήνη, στην Κριστιάνια."
          },
          extendedDescription: {
            en: "Nobel, the Swedish chemist and industrialist, left most of his fortune to fund prizes in physics, chemistry, medicine, literature and peace — according to a popular story, after a premature obituary called him 'the merchant of death'. He entrusted the peace prize to a committee of Norway's Storting, then still in union with Sweden. The first laureates included Wilhelm Röntgen for X-rays and Henry Dunant, founder of the Red Cross.",
            el: "Ο Νόμπελ, ο Σουηδός χημικός και βιομήχανος, άφησε το μεγαλύτερο μέρος της περιουσίας του για να χρηματοδοτηθούν βραβεία στη φυσική, τη χημεία, την ιατρική, τη λογοτεχνία και την ειρήνη — σύμφωνα με μια δημοφιλή ιστορία, αφού μια πρόωρη νεκρολογία τον αποκάλεσε «έμπορο του θανάτου». Εμπιστεύτηκε το βραβείο ειρήνης σε μια επιτροπή του νορβηγικού Στόρτινγκ, που τότε βρισκόταν ακόμη σε ένωση με τη Σουηδία. Στους πρώτους βραβευθέντες ήταν ο Βίλχελμ Ρέντγκεν για τις ακτίνες Χ και ο Ερρίκος Ντυνάν, ιδρυτής του Ερυθρού Σταυρού."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1905,
      era: {
        en: "Belle Époque",
        el: "Μπελ Επόκ"
      },
      events: [
        {
          title: {
            en: "Norway becomes independent",
            el: "Η Νορβηγία γίνεται ανεξάρτητη"
          },
          description: {
            en: "On 7 June the Storting declares the union with Sweden dissolved; after a referendum and tense negotiations, the separation is accepted peacefully.",
            el: "Στις 7 Ιουνίου το Στόρτινγκ κηρύσσει τη διάλυση της ένωσης με τη Σουηδία· μετά από δημοψήφισμα και τεταμένες διαπραγματεύσεις, ο χωρισμός γίνεται αποδεκτός ειρηνικά."
          },
          extendedDescription: {
            en: "The crisis was triggered by a dispute over Norway's right to its own consular service. In an August referendum, 368,208 Norwegian men voted for dissolution and only 184 against, while women collected petitions to show their support. Troops were mobilised on both sides, but war was avoided. A Danish prince was elected king as Haakon VII — a peaceful break-up often held up as a model for resolving national conflicts.",
            el: "Την κρίση πυροδότησε μια διαφωνία για το δικαίωμα της Νορβηγίας σε δική της προξενική υπηρεσία. Σε δημοψήφισμα τον Αύγουστο, 368.208 Νορβηγοί άνδρες ψήφισαν υπέρ της διάλυσης και μόνο 184 κατά, ενώ οι γυναίκες συγκέντρωσαν υπογραφές για να δείξουν την υποστήριξή τους. Στρατεύματα κινητοποιήθηκαν και από τις δύο πλευρές, αλλά ο πόλεμος αποφεύχθηκε. Ένας Δανός πρίγκιπας εξελέγη βασιλιάς ως Χάακον Ζ΄ — ένας ειρηνικός χωρισμός που συχνά προβάλλεται ως πρότυπο επίλυσης εθνικών συγκρούσεων."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1906,
      era: {
        en: "Belle Époque",
        el: "Μπελ Επόκ"
      },
      events: [
        {
          title: {
            en: "Finnish women win full political rights",
            el: "Οι Φινλανδές κερδίζουν πλήρη πολιτικά δικαιώματα"
          },
          description: {
            en: "The Grand Duchy of Finland introduces universal suffrage — the first in Europe to give women the vote, and the first anywhere to give all adult women full rights both to vote and to stand for parliament.",
            el: "Το Μεγάλο Δουκάτο της Φινλανδίας θεσπίζει την καθολική ψηφοφορία — η πρώτη χώρα της Ευρώπης που δίνει ψήφο στις γυναίκες, και η πρώτη οπουδήποτε που δίνει σε όλες τις ενήλικες γυναίκες πλήρες δικαίωμα τόσο να ψηφίζουν όσο και να εκλέγονται στο κοινοβούλιο."
          },
          extendedDescription: {
            en: "The reform came after the 1905 general strike that swept the Russian Empire forced the tsar to make concessions. The old four-estate Diet was replaced by a single-chamber parliament elected by all adults. In 1907, nineteen women took their seats — the first female members of a national parliament anywhere. Norway gave women the vote in 1913, Denmark and Iceland in 1915, and Sweden in 1919.",
            el: "Η μεταρρύθμιση ήρθε αφού η γενική απεργία του 1905, που σάρωσε τη Ρωσική Αυτοκρατορία, ανάγκασε τον τσάρο να κάνει παραχωρήσεις. Η παλιά Βουλή των τεσσάρων τάξεων αντικαταστάθηκε από ένα μονοεδρικό κοινοβούλιο που εκλεγόταν από όλους τους ενηλίκους. Το 1907, δεκαεννέα γυναίκες κατέλαβαν τις έδρες τους — τα πρώτα γυναικεία μέλη εθνικού κοινοβουλίου οπουδήποτε. Η Νορβηγία έδωσε ψήφο στις γυναίκες το 1913, η Δανία και η Ισλανδία το 1915 και η Σουηδία το 1919."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1911,
      era: {
        en: "Age of Exploration",
        el: "Εποχή της Εξερεύνησης"
      },
      events: [
        {
          title: {
            en: "Amundsen reaches the South Pole",
            el: "Ο Άμουντσεν φτάνει στον Νότιο Πόλο"
          },
          description: {
            en: "Roald Amundsen and four companions become the first people to reach the South Pole, on 14 December 1911, five weeks ahead of Robert Falcon Scott.",
            el: "Ο Ρόαλντ Άμουντσεν και τέσσερις σύντροφοί του γίνονται οι πρώτοι άνθρωποι που φτάνουν στον Νότιο Πόλο, στις 14 Δεκεμβρίου 1911, πέντε εβδομάδες πριν από τον Ρόμπερτ Φάλκον Σκοτ."
          },
          extendedDescription: {
            en: "Amundsen, who had already been the first to sail the Northwest Passage (1903–06), used skis and dog sleds and planned meticulously, learning from the Inuit how to survive the cold. He had secretly switched his goal from the North to the South Pole, sailing in Nansen's Fram. Scott's British party reached the Pole in January 1912 to find the Norwegian tent and flag; all five died on the return journey.",
            el: "Ο Άμουντσεν, που είχε ήδη γίνει ο πρώτος που διέπλευσε το Βορειοδυτικό Πέρασμα (1903–06), χρησιμοποίησε χιονοπέδιλα και έλκηθρα με σκύλους και σχεδίασε με σχολαστικότητα, μαθαίνοντας από τους Ινουίτ πώς να επιβιώνει στο κρύο. Είχε αλλάξει κρυφά τον στόχο του από τον Βόρειο στον Νότιο Πόλο, ταξιδεύοντας με το Φραμ του Νάνσεν. Η βρετανική ομάδα του Σκοτ έφτασε στον Πόλο τον Ιανουάριο του 1912 και βρήκε τη νορβηγική σκηνή και σημαία· και οι πέντε πέθαναν στο ταξίδι της επιστροφής."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Scotts_Gruppe_am_Polheim-Zelt_Amundsens.jpg?width=1024",
            alt: {
              en: "Scott's party at Polheim, the tent Amundsen left at the South Pole, in January 1912",
              el: "Η ομάδα του Σκοτ στο Πόλχαϊμ, τη σκηνή που άφησε ο Άμουντσεν στον Νότιο Πόλο, τον Ιανουάριο του 1912"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    }
  ]
} satisfies PeriodDefinition;
