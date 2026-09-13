/** Russian Empire — Ρωσική Αυτοκρατορία · Russian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const RUSSIAN_EMPIRE = {
  id: "russian-empire" as const,
  label: {
    en: "Russian Empire",
    el: "Ρωσική Αυτοκρατορία"
  },
  supertitle: {
    en: "Imperium Rossicum",
    el: "Ρωσική Αυτοκρατορία"
  },
  title: {
    en: "The Russian Empire",
    el: "Η Ρωσική Αυτοκρατορία"
  },
  subtitle: {
    en: "From Peter the Great's proclamation of empire in 1721 through Catherine the Great's conquests, the defeat of Napoleon in 1812, the golden age of Russian literature, the emancipation of the serfs, rapid industrialization, and the revolution of 1905, to the Great War and the fall of the Romanovs in 1917. Slide across the years to read the major events of two centuries of imperial Russia.",
    el: "Από την ανακήρυξη της αυτοκρατορίας από τον Πέτρο τον Μέγα το 1721, μέσα από τις κατακτήσεις της Αικατερίνης της Μεγάλης, την ήττα του Ναπολέοντα το 1812, τη χρυσή εποχή της ρωσικής λογοτεχνίας, την απελευθέρωση των δουλοπάροικων, την ταχεία εκβιομηχάνιση και την επανάσταση του 1905, έως τον Μεγάλο Πόλεμο και την πτώση των Ρομανόφ το 1917. Μετακινηθείτε ανάμεσα στα έτη για να διαβάσετε τα σημαντικότερα γεγονότα δύο αιώνων αυτοκρατορικής Ρωσίας."
  },
  menuDescription: {
    en: "Peter, Catherine, 1812 and the freeing of the serfs, until revolution ended the Romanovs.",
    el: "Ο Πέτρος, η Αικατερίνη, το 1812 κι η απελευθέρωση των δουλοπάροικων, ώσπου η επανάσταση τερμάτισε τους Ρομανόφ."
  },
  footerLabel: {
    en: "Russian Empire · 1721-1917",
    el: "Ρωσική Αυτοκρατορία · 1721-1917"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Russian Empire",
    el: "Ρωσική Αυτοκρατορία"
  },
  theme: THEMES.forest,
  timeline: [
    {
      year: 1721,
      era: {
        en: "Birth of the Empire",
        el: "Γέννηση της Αυτοκρατορίας"
      },
      events: [
        {
          title: {
            en: "Peter the Great proclaims the Russian Empire",
            el: "Ο Πέτρος ο Μέγας ανακηρύσσει τη Ρωσική Αυτοκρατορία"
          },
          description: {
            en: "After victory over Sweden in the Great Northern War, the Senate confers on Peter I the title 'Emperor of All Russia', formally founding the Russian Empire.",
            el: "Μετά τη νίκη επί της Σουηδίας στον Μεγάλο Βόρειο Πόλεμο, η Γερουσία απονέμει στον Πέτρο Α΄ τον τίτλο «Αυτοκράτορα Πάσης Ρωσίας», ιδρύοντας επίσημα τη Ρωσική Αυτοκρατορία."
          },
          extendedDescription: {
            en: "Peter's reign had already remade Russia: a regular army and navy, a new capital at Saint Petersburg, Western dress and technique, and a state church subordinated to the crown. The imperial title proclaimed Russia's arrival as a great European power.",
            el: "Η βασιλεία του Πέτρου είχε ήδη ανασχηματίσει τη Ρωσία: τακτικός στρατός και ναυτικό, νέα πρωτεύουσα στην Αγία Πετρούπολη, δυτική ενδυμασία και τεχνική, και μια κρατική Εκκλησία υποταγμένη στο στέμμα. Ο αυτοκρατορικός τίτλος διακήρυξε την άφιξη της Ρωσίας ως μεγάλης ευρωπαϊκής δύναμης."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1722,
      era: {
        en: "Service State",
        el: "Κράτος της υπηρεσίας"
      },
      events: [
        {
          title: {
            en: "The Table of Ranks",
            el: "Ο Πίνακας των Βαθμών"
          },
          description: {
            en: "Peter issues the Table of Ranks, ordering state service into fourteen parallel grades and basing status on merit and office rather than birth.",
            el: "Ο Πέτρος εκδίδει τον Πίνακα των Βαθμών, οργανώνοντας την κρατική υπηρεσία σε δεκατέσσερις παράλληλες βαθμίδες και θεμελιώνοντας το κύρος στην αξία και το αξίωμα αντί στην καταγωγή."
          },
          extendedDescription: {
            en: "The Table of Ranks tied the nobility to lifelong service to the state and opened, in principle, a path to noble status through achievement. It shaped Russian officialdom and the service ethos of the empire for nearly two centuries.",
            el: "Ο Πίνακας των Βαθμών έδεσε την αριστοκρατία σε ισόβια υπηρεσία προς το κράτος και άνοιξε, καταρχήν, έναν δρόμο προς την ευγένεια μέσω της επίτευξης. Διαμόρφωσε τη ρωσική γραφειοκρατία και το ήθος της υπηρεσίας της αυτοκρατορίας για σχεδόν δύο αιώνες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1725,
      era: {
        en: "After Peter",
        el: "Μετά τον Πέτρο"
      },
      events: [
        {
          title: {
            en: "Death of Peter the Great",
            el: "Θάνατος του Πέτρου του Μεγάλου"
          },
          description: {
            en: "Peter dies without naming an heir, opening an era of palace coups in which the imperial guards repeatedly make and unmake rulers.",
            el: "Ο Πέτρος πεθαίνει χωρίς να ορίσει διάδοχο, ανοίγοντας μια εποχή ανακτορικών πραξικοπημάτων στην οποία η αυτοκρατορική φρουρά επανειλημμένα ανεβάζει και κατεβάζει ηγεμόνες."
          },
          extendedDescription: {
            en: "His widow became Catherine I, the first of several rulers raised by the guards. The 'era of palace revolutions' lasted until 1762, with weak or short-lived sovereigns and powerful favorites dominating the throne.",
            el: "Η χήρα του έγινε Αικατερίνη Α΄, η πρώτη από αρκετούς ηγεμόνες που ανέδειξε η φρουρά. Η «εποχή των ανακτορικών επαναστάσεων» διήρκεσε έως το 1762, με αδύναμους ή βραχύβιους ηγεμόνες και ισχυρούς ευνοούμενους να κυριαρχούν στον θρόνο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1755,
      era: {
        en: "Enlightenment",
        el: "Διαφωτισμός"
      },
      events: [
        {
          title: {
            en: "Foundation of Moscow University",
            el: "Ίδρυση του Πανεπιστημίου της Μόσχας"
          },
          description: {
            en: "Under Empress Elizabeth, the scholar Mikhail Lomonosov helps found Moscow University, a milestone in Russian science and higher learning.",
            el: "Επί αυτοκράτειρας Ελισάβετ, ο λόγιος Μιχαήλ Λομονόσοφ συμβάλλει στην ίδρυση του Πανεπιστημίου της Μόσχας, ορόσημο για τη ρωσική επιστήμη και την ανώτατη παιδεία."
          },
          extendedDescription: {
            en: "Elizabeth's reign brought cultural brilliance: the Baroque architecture of Rastrelli, the founding of the Academy of Arts, and the rise of a Russian scientific and literary culture that flowered fully under Catherine the Great.",
            el: "Η βασιλεία της Ελισάβετ έφερε πολιτιστική λαμπρότητα: τη μπαρόκ αρχιτεκτονική του Ραστρέλι, την ίδρυση της Ακαδημίας Τεχνών και την άνοδο μιας ρωσικής επιστημονικής και λογοτεχνικής παιδείας που άνθισε πλήρως επί Αικατερίνης της Μεγάλης."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1762,
      era: {
        en: "Catherine the Great",
        el: "Αικατερίνη η Μεγάλη"
      },
      events: [
        {
          title: {
            en: "Catherine II seizes the throne",
            el: "Η Αικατερίνη Β΄ καταλαμβάνει τον θρόνο"
          },
          description: {
            en: "A German-born princess, Catherine overthrows her husband Peter III in a guard coup and begins a thirty-four-year reign as Catherine the Great.",
            el: "Πριγκίπισσα γερμανικής καταγωγής, η Αικατερίνη ανατρέπει τον σύζυγό της Πέτρο Γ΄ σε πραξικόπημα της φρουράς και αρχίζει μια βασιλεία τριάντα τεσσάρων ετών ως Αικατερίνη η Μεγάλη."
          },
          extendedDescription: {
            en: "An admirer of the Enlightenment and correspondent of Voltaire, Catherine expanded the empire, reformed administration, and patronized the arts. Yet she also entrenched serfdom, and her enlightened ideals coexisted with autocratic power.",
            el: "Θαυμάστρια του Διαφωτισμού και αλληλογράφος του Βολταίρου, η Αικατερίνη επέκτεινε την αυτοκρατορία, μεταρρύθμισε τη διοίκηση και προστάτευσε τις τέχνες. Ωστόσο εδραίωσε επίσης τη δουλοπαροικία, και τα φωτισμένα ιδανικά της συνυπήρχαν με την απολυταρχική εξουσία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1774,
      era: {
        en: "Expansion South",
        el: "Επέκταση στον νότο"
      },
      events: [
        {
          title: {
            en: "The Treaty of Küçük Kaynarca",
            el: "Η Συνθήκη του Κιουτσούκ Καϊναρτζά"
          },
          description: {
            en: "Victory in the Russo-Turkish War gives Russia a foothold on the Black Sea and a claimed right to protect Orthodox Christians in the Ottoman Empire.",
            el: "Η νίκη στον Ρωσοτουρκικό Πόλεμο δίνει στη Ρωσία προγεφύρωμα στη Μαύρη Θάλασσα και διεκδικούμενο δικαίωμα προστασίας των ορθόδοξων χριστιανών στην Οθωμανική Αυτοκρατορία."
          },
          extendedDescription: {
            en: "The treaty marked Russia's emergence as a Black Sea power and the start of the long 'Eastern Question'. The claimed protectorate over Ottoman Orthodox subjects became a recurring pretext for Russian intervention in the Balkans and the Near East.",
            el: "Η συνθήκη σηματοδότησε την ανάδειξη της Ρωσίας σε δύναμη της Μαύρης Θάλασσας και την αρχή του μακρού «Ανατολικού Ζητήματος». Το διεκδικούμενο προτεκτοράτο επί των ορθόδοξων υπηκόων της Οθωμανικής Αυτοκρατορίας έγινε επανερχόμενη πρόφαση ρωσικής επέμβασης στα Βαλκάνια και την Εγγύς Ανατολή."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1775,
      era: {
        en: "Peasant War",
        el: "Αγροτικός πόλεμος"
      },
      events: [
        {
          title: {
            en: "The suppression of Pugachev's rebellion",
            el: "Η καταστολή της εξέγερσης του Πουγκατσόφ"
          },
          description: {
            en: "The Cossack Yemelyan Pugachev, claiming to be the murdered Peter III, leads a vast revolt of Cossacks, serfs, and peoples of the Urals before being captured and executed.",
            el: "Ο Κοζάκος Γιεμελιάν Πουγκατσόφ, ισχυριζόμενος ότι είναι ο δολοφονημένος Πέτρος Γ΄, ηγείται μιας τεράστιας εξέγερσης Κοζάκων, δουλοπάροικων και λαών των Ουραλίων προτού συλληφθεί και εκτελεστεί."
          },
          extendedDescription: {
            en: "Pugachev's rising (1773-1775) was the largest peasant revolt in Russian history. Its brutal suppression hardened Catherine's conservatism, leading to a sweeping reorganization of provincial government and a tighter grip of the gentry over the serfs.",
            el: "Η εξέγερση του Πουγκατσόφ (1773-1775) ήταν η μεγαλύτερη αγροτική εξέγερση στη ρωσική ιστορία. Η βάναυση καταστολή της σκλήρυνε τον συντηρητισμό της Αικατερίνης, οδηγώντας σε σαρωτική αναδιοργάνωση της επαρχιακής διοίκησης και σε αυστηρότερο έλεγχο των ευγενών επί των δουλοπάροικων."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1783,
      era: {
        en: "Crimea",
        el: "Κριμαία"
      },
      events: [
        {
          title: {
            en: "Annexation of the Crimea",
            el: "Προσάρτηση της Κριμαίας"
          },
          description: {
            en: "Catherine annexes the Crimean Khanate, the last remnant of the Golden Horde, securing the northern Black Sea coast and founding the naval base of Sevastopol.",
            el: "Η Αικατερίνη προσαρτά το Χανάτο της Κριμαίας, το τελευταίο απομεινάρι της Χρυσής Ορδής, εξασφαλίζοντας τη βόρεια ακτή της Μαύρης Θάλασσας και ιδρύοντας τη ναυτική βάση της Σεβαστούπολης."
          },
          extendedDescription: {
            en: "The conquest of 'New Russia' opened the southern steppe to settlement and made the empire a Mediterranean-facing power. Potemkin's colonization of the region became a celebrated, and partly mythologized, project of imperial development.",
            el: "Η κατάκτηση της «Νέας Ρωσίας» άνοιξε τη νότια στέπα στον εποικισμό και κατέστησε την αυτοκρατορία δύναμη με μεσογειακό προσανατολισμό. Ο αποικισμός της περιοχής από τον Ποτέμκιν έγινε ένα φημισμένο, και εν μέρει μυθοποιημένο, έργο αυτοκρατορικής ανάπτυξης."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1795,
      era: {
        en: "Partition of Poland",
        el: "Διαμελισμός της Πολωνίας"
      },
      events: [
        {
          title: {
            en: "The final partition of Poland-Lithuania",
            el: "Ο τελικός διαμελισμός της Πολωνίας-Λιθουανίας"
          },
          description: {
            en: "In the third partition, Russia, Prussia, and Austria erase Poland-Lithuania from the map, with Russia taking the largest share in the east.",
            el: "Στον τρίτο διαμελισμό, η Ρωσία, η Πρωσία και η Αυστρία σβήνουν την Πολωνία-Λιθουανία από τον χάρτη, με τη Ρωσία να παίρνει το μεγαλύτερο μερίδιο στα ανατολικά."
          },
          extendedDescription: {
            en: "Through the partitions of 1772, 1793, and 1795 Russia absorbed Belarus, Lithuania, and much of Ukraine, gaining vast lands and a large Jewish population later confined to the Pale of Settlement. The Polish question would trouble the empire for over a century.",
            el: "Μέσω των διαμελισμών του 1772, 1793 και 1795 η Ρωσία απορρόφησε τη Λευκορωσία, τη Λιθουανία και μεγάλο μέρος της Ουκρανίας, αποκτώντας τεράστιες εκτάσεις και μεγάλο εβραϊκό πληθυσμό που αργότερα περιορίστηκε στη Ζώνη Εγκατάστασης. Το πολωνικό ζήτημα θα ταλάνιζε την αυτοκρατορία για πάνω από έναν αιώνα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1812,
      era: {
        en: "The Patriotic War",
        el: "Ο Πατριωτικός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Napoleon's invasion and the burning of Moscow",
            el: "Η εισβολή του Ναπολέοντα και η πυρπόληση της Μόσχας"
          },
          description: {
            en: "Napoleon's Grande Armée invades Russia, fights the bloody battle of Borodino, and enters a Moscow set ablaze, before a catastrophic winter retreat destroys the army.",
            el: "Η Μεγάλη Στρατιά του Ναπολέοντα εισβάλλει στη Ρωσία, δίνει την αιματηρή μάχη του Μποροντινό και εισέρχεται σε μια Μόσχα στις φλόγες, προτού μια καταστροφική χειμερινή υποχώρηση εξοντώσει τον στρατό."
          },
          extendedDescription: {
            en: "The destruction of the Grande Armée broke Napoleon's power and made Russia the arbiter of Europe. The 'Patriotic War of 1812' became a foundational national epic, immortalized in Tolstoy's War and Peace, and Russian troops entered Paris in 1814.",
            el: "Η καταστροφή της Μεγάλης Στρατιάς συνέτριψε την ισχύ του Ναπολέοντα και κατέστησε τη Ρωσία διαιτητή της Ευρώπης. Ο «Πατριωτικός Πόλεμος του 1812» έγινε θεμελιώδες εθνικό έπος, αποθανατισμένο στο «Πόλεμος και Ειρήνη» του Τολστόι, και ρωσικά στρατεύματα εισήλθαν στο Παρίσι το 1814."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1814,
      era: {
        en: "Arbiter of Europe",
        el: "Διαιτητής της Ευρώπης"
      },
      events: [
        {
          title: {
            en: "Alexander I and the Congress of Vienna",
            el: "Ο Αλέξανδρος Α΄ και το Συνέδριο της Βιέννης"
          },
          description: {
            en: "Tsar Alexander I leads the victorious coalition into Paris and, at the Congress of Vienna, shapes the post-Napoleonic order and the Holy Alliance.",
            el: "Ο τσάρος Αλέξανδρος Α΄ οδηγεί τον νικηφόρο συνασπισμό στο Παρίσι και, στο Συνέδριο της Βιέννης, διαμορφώνει τη μεταναπολεόντεια τάξη και την Ιερά Συμμαχία."
          },
          extendedDescription: {
            en: "Russia emerged as the dominant land power of Europe and a pillar of conservative order. Alexander gained Finland and a Kingdom of Poland in personal union with the tsar, while the Holy Alliance pledged the monarchs to defend throne and altar against revolution.",
            el: "Η Ρωσία αναδείχθηκε σε κυρίαρχη χερσαία δύναμη της Ευρώπης και πυλώνα της συντηρητικής τάξης. Ο Αλέξανδρος απέκτησε τη Φινλανδία και ένα Βασίλειο της Πολωνίας σε προσωπική ένωση με τον τσάρο, ενώ η Ιερά Συμμαχία δέσμευσε τους μονάρχες να υπερασπιστούν τον θρόνο και τον βωμό κατά της επανάστασης."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1825,
      era: {
        en: "The Decembrists",
        el: "Οι Δεκεμβριστές"
      },
      events: [
        {
          title: {
            en: "The Decembrist revolt",
            el: "Η εξέγερση των Δεκεμβριστών"
          },
          description: {
            en: "On the accession of Nicholas I, liberal army officers rise in Saint Petersburg demanding a constitution, but the revolt is swiftly crushed.",
            el: "Κατά την ανάρρηση του Νικολάου Α΄, φιλελεύθεροι αξιωματικοί του στρατού εξεγείρονται στην Αγία Πετρούπολη ζητώντας σύνταγμα, αλλά η εξέγερση συντρίβεται γρήγορα."
          },
          extendedDescription: {
            en: "The Decembrists, many of them veterans who had seen the West, became martyrs of the Russian reform movement. Their failure pushed Nicholas I toward a reign of rigid autocracy, censorship, and the doctrine of 'Orthodoxy, Autocracy, and Nationality'.",
            el: "Οι Δεκεμβριστές, πολλοί από τους οποίους ήταν βετεράνοι που είχαν δει τη Δύση, έγιναν μάρτυρες του ρωσικού μεταρρυθμιστικού κινήματος. Η αποτυχία τους ώθησε τον Νικόλαο Α΄ προς μια βασιλεία άκαμπτης απολυταρχίας, λογοκρισίας και του δόγματος «Ορθοδοξία, Απολυταρχία και Εθνικότητα»."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1837,
      era: {
        en: "Golden Age of Letters",
        el: "Χρυσή Εποχή των Γραμμάτων"
      },
      events: [
        {
          title: {
            en: "The death of Pushkin",
            el: "Ο θάνατος του Πούσκιν"
          },
          description: {
            en: "Alexander Pushkin, the founder of modern Russian literature, dies after a duel, at the height of a great age of Russian poetry and prose.",
            el: "Ο Αλέξανδρος Πούσκιν, ο θεμελιωτής της σύγχρονης ρωσικής λογοτεχνίας, πεθαίνει έπειτα από μονομαχία, στο απόγειο μιας μεγάλης εποχής της ρωσικής ποίησης και πεζογραφίας."
          },
          extendedDescription: {
            en: "The nineteenth century became the golden age of Russian culture, from Pushkin, Gogol, and Lermontov to Dostoevsky, Tolstoy, and Chekhov, and the music of Glinka, Tchaikovsky, and the Mighty Handful. Russian arts won a place at the summit of world culture.",
            el: "Ο δέκατος ένατος αιώνας έγινε η χρυσή εποχή του ρωσικού πολιτισμού, από τον Πούσκιν, τον Γκόγκολ και τον Λέρμοντοφ έως τον Ντοστογιέφσκι, τον Τολστόι και τον Τσέχοφ, και τη μουσική του Γκλίνκα, του Τσαϊκόφσκι και της Ομάδας των Πέντε. Οι ρωσικές τέχνες κέρδισαν θέση στην κορυφή του παγκόσμιου πολιτισμού."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1853,
      era: {
        en: "The Crimean War",
        el: "Ο Κριμαϊκός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "The Crimean War begins",
            el: "Αρχίζει ο Κριμαϊκός Πόλεμος"
          },
          description: {
            en: "A quarrel over the holy places escalates into war with the Ottomans, Britain, and France, who besiege the great naval base of Sevastopol.",
            el: "Μια διαμάχη για τους Αγίους Τόπους κλιμακώνεται σε πόλεμο με τους Οθωμανούς, τη Βρετανία και τη Γαλλία, που πολιορκούν τη μεγάλη ναυτική βάση της Σεβαστούπολης."
          },
          extendedDescription: {
            en: "Defeat in the Crimean War (1853-1856) exposed Russia's backwardness against the industrial West. The shock convinced the new tsar, Alexander II, that the empire could not survive as a great power without deep internal reform.",
            el: "Η ήττα στον Κριμαϊκό Πόλεμο (1853-1856) αποκάλυψε την καθυστέρηση της Ρωσίας απέναντι στη βιομηχανική Δύση. Το σοκ έπεισε τον νέο τσάρο, Αλέξανδρο Β΄, ότι η αυτοκρατορία δεν μπορούσε να επιβιώσει ως μεγάλη δύναμη χωρίς βαθιά εσωτερική μεταρρύθμιση."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1861,
      era: {
        en: "The Great Reforms",
        el: "Οι Μεγάλες Μεταρρυθμίσεις"
      },
      events: [
        {
          title: {
            en: "Emancipation of the serfs",
            el: "Απελευθέρωση των δουλοπάροικων"
          },
          description: {
            en: "Tsar Alexander II abolishes serfdom, freeing some twenty-three million peasants in the greatest single act of social reform in Russian history.",
            el: "Ο τσάρος Αλέξανδρος Β΄ καταργεί τη δουλοπαροικία, ελευθερώνοντας περίπου είκοσι τρία εκατομμύρια χωρικούς στη μεγαλύτερη μεμονωμένη πράξη κοινωνικής μεταρρύθμισης στη ρωσική ιστορία."
          },
          extendedDescription: {
            en: "The emancipation, followed by reforms of local government (the zemstva), the courts, and the army, transformed the empire. Yet burdensome redemption payments and continued land hunger left many peasants discontented, sowing seeds of future unrest.",
            el: "Η απελευθέρωση, ακολουθούμενη από μεταρρυθμίσεις της τοπικής αυτοδιοίκησης (τα ζέμστβα), της δικαιοσύνης και του στρατού, μεταμόρφωσε την αυτοκρατορία. Ωστόσο οι επαχθείς πληρωμές εξαγοράς και η συνεχιζόμενη πείνα για γη άφησαν πολλούς χωρικούς δυσαρεστημένους, σπέρνοντας τους σπόρους μελλοντικής αναταραχής."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1867,
      era: {
        en: "The Empire's Edges",
        el: "Τα άκρα της Αυτοκρατορίας"
      },
      events: [
        {
          title: {
            en: "The sale of Alaska",
            el: "Η πώληση της Αλάσκας"
          },
          description: {
            en: "Russia sells Alaska to the United States for 7.2 million dollars, withdrawing from North America as it pushes deeper into Central Asia.",
            el: "Η Ρωσία πουλά την Αλάσκα στις Ηνωμένες Πολιτείες έναντι 7,2 εκατομμυρίων δολαρίων, αποσυρόμενη από τη Βόρεια Αμερική καθώς διεισδύει βαθύτερα στην Κεντρική Ασία."
          },
          extendedDescription: {
            en: "While shedding distant Alaska, the empire conquered the khanates of Central Asia — Tashkent, Samarkand, Bukhara, and Khiva — in the same decades. This expansion fed the 'Great Game' rivalry with the British Empire over the approaches to India.",
            el: "Ενώ απέβαλλε τη μακρινή Αλάσκα, η αυτοκρατορία κατακτούσε τα χανάτα της Κεντρικής Ασίας — την Τασκένδη, τη Σαμαρκάνδη, τη Μπουχάρα και τη Χίβα — τις ίδιες δεκαετίες. Η επέκταση αυτή τροφοδότησε τον ανταγωνισμό του «Μεγάλου Παιχνιδιού» με τη Βρετανική Αυτοκρατορία για τις προσβάσεις προς την Ινδία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1878,
      era: {
        en: "Liberator of the Balkans",
        el: "Απελευθερωτής των Βαλκανίων"
      },
      events: [
        {
          title: {
            en: "The Treaty of San Stefano",
            el: "Η Συνθήκη του Αγίου Στεφάνου"
          },
          description: {
            en: "Victory over the Ottomans in 1877-1878 lets Russia dictate the Treaty of San Stefano, creating a large Bulgaria and confirming the independence of Balkan states.",
            el: "Η νίκη επί των Οθωμανών το 1877-1878 επιτρέπει στη Ρωσία να υπαγορεύσει τη Συνθήκη του Αγίου Στεφάνου, δημιουργώντας μια μεγάλη Βουλγαρία και επιβεβαιώνοντας την ανεξαρτησία βαλκανικών κρατών."
          },
          extendedDescription: {
            en: "Alarmed by Russian gains, the European powers revised the settlement at the Congress of Berlin. The war advanced pan-Slavism and Russia's role as protector of Balkan Orthodox Christians, but also deepened the rivalries that would help ignite 1914.",
            el: "Ανήσυχες από τα ρωσικά κέρδη, οι ευρωπαϊκές δυνάμεις αναθεώρησαν τη διευθέτηση στο Συνέδριο του Βερολίνου. Ο πόλεμος προώθησε τον πανσλαβισμό και τον ρόλο της Ρωσίας ως προστάτιδας των βαλκάνιων ορθόδοξων χριστιανών, αλλά βάθυνε επίσης τους ανταγωνισμούς που θα συνέβαλλαν στην έκρηξη του 1914."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1881,
      era: {
        en: "Assassination",
        el: "Δολοφονία"
      },
      events: [
        {
          title: {
            en: "The assassination of Alexander II",
            el: "Η δολοφονία του Αλεξάνδρου Β΄"
          },
          description: {
            en: "The reforming 'Tsar Liberator' is killed by a bomb of the revolutionary group People's Will, on the very day he had approved a tentative reform.",
            el: "Ο μεταρρυθμιστής «Τσάρος Απελευθερωτής» σκοτώνεται από βόμβα της επαναστατικής ομάδας «Λαϊκή Θέληση», την ίδια ημέρα που είχε εγκρίνει μια δοκιμαστική μεταρρύθμιση."
          },
          extendedDescription: {
            en: "His son Alexander III responded with reaction: tighter autocracy, censorship, Russification of minorities, and pogroms against the Jews. The cycle of repression and revolutionary violence would intensify under his successor, Nicholas II.",
            el: "Ο γιος του Αλέξανδρος Γ΄ απάντησε με αντίδραση: αυστηρότερη απολυταρχία, λογοκρισία, εκρωσισμό των μειονοτήτων και πογκρόμ κατά των Εβραίων. Ο κύκλος της καταστολής και της επαναστατικής βίας θα εντεινόταν επί του διαδόχου του, Νικολάου Β΄."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1891,
      era: {
        en: "Industrialization",
        el: "Εκβιομηχάνιση"
      },
      events: [
        {
          title: {
            en: "Construction of the Trans-Siberian Railway begins",
            el: "Αρχίζει η κατασκευή του Υπερσιβηρικού Σιδηροδρόμου"
          },
          description: {
            en: "Work begins on the Trans-Siberian Railway, the spine of a rapid industrial drive that would link Moscow to the Pacific across more than 9,000 kilometers.",
            el: "Αρχίζουν οι εργασίες για τον Υπερσιβηρικό Σιδηρόδρομο, τη ραχοκοκαλιά μιας ταχείας βιομηχανικής προσπάθειας που θα συνέδεε τη Μόσχα με τον Ειρηνικό σε απόσταση μεγαλύτερη των 9.000 χιλιομέτρων."
          },
          extendedDescription: {
            en: "Under finance ministers like Sergei Witte, Russia industrialized rapidly in the 1890s, with foreign capital, new factories, and a growing urban working class. Industrial growth strengthened the state but created the volatile proletariat that would drive revolution.",
            el: "Υπό υπουργούς οικονομικών όπως ο Σεργκέι Βίττε, η Ρωσία εκβιομηχανίστηκε ραγδαία τη δεκαετία του 1890, με ξένα κεφάλαια, νέα εργοστάσια και μια αυξανόμενη αστική εργατική τάξη. Η βιομηχανική ανάπτυξη ενίσχυσε το κράτος αλλά δημιούργησε το ευμετάβλητο προλεταριάτο που θα οδηγούσε στην επανάσταση."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1905,
      era: {
        en: "The First Revolution",
        el: "Η Πρώτη Επανάσταση"
      },
      events: [
        {
          title: {
            en: "Bloody Sunday and the Revolution of 1905",
            el: "Η Ματωμένη Κυριακή και η Επανάσταση του 1905"
          },
          description: {
            en: "Troops fire on peaceful petitioners outside the Winter Palace, igniting a year of strikes, mutinies, and unrest that forces the tsar to grant a parliament.",
            el: "Στρατεύματα ανοίγουν πυρ κατά ειρηνικών διαδηλωτών έξω από τα Χειμερινά Ανάκτορα, πυροδοτώντας έναν χρόνο απεργιών, ανταρσιών και αναταραχής που αναγκάζει τον τσάρο να παραχωρήσει κοινοβούλιο."
          },
          extendedDescription: {
            en: "The revolution followed humiliating defeat in the Russo-Japanese War (1904-1905). The October Manifesto promised civil liberties and an elected Duma, but Nicholas II soon clawed back power, leaving the underlying tensions unresolved.",
            el: "Η επανάσταση ακολούθησε την ταπεινωτική ήττα στον Ρωσοϊαπωνικό Πόλεμο (1904-1905). Το Μανιφέστο του Οκτωβρίου υποσχέθηκε πολιτικές ελευθερίες και μια εκλεγμένη Δούμα, αλλά ο Νικόλαος Β΄ σύντομα ανέκτησε την εξουσία, αφήνοντας τις υποκείμενες εντάσεις άλυτες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1906,
      era: {
        en: "Reform and Reaction",
        el: "Μεταρρύθμιση και αντίδραση"
      },
      events: [
        {
          title: {
            en: "The Stolypin agrarian reforms",
            el: "Οι αγροτικές μεταρρυθμίσεις του Στολίπιν"
          },
          description: {
            en: "Prime Minister Pyotr Stolypin combines harsh repression with land reforms meant to create a class of independent, conservative peasant farmers.",
            el: "Ο πρωθυπουργός Πιοτρ Στολίπιν συνδυάζει σκληρή καταστολή με αγροτικές μεταρρυθμίσεις που αποσκοπούν στη δημιουργία μιας τάξης ανεξάρτητων, συντηρητικών αγροτών."
          },
          extendedDescription: {
            en: "Stolypin hoped to stabilize the monarchy by giving peasants a stake in private property, his 'wager on the strong'. His assassination in 1911 cut short the experiment, and the chance for peaceful evolution narrowed as 1914 approached.",
            el: "Ο Στολίπιν ήλπιζε να σταθεροποιήσει τη μοναρχία δίνοντας στους χωρικούς μερίδιο στην ιδιωτική ιδιοκτησία, το «στοίχημά του στους ισχυρούς». Η δολοφονία του το 1911 διέκοψε το πείραμα, και η ευκαιρία για ειρηνική εξέλιξη στένεψε καθώς πλησίαζε το 1914."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1914,
      era: {
        en: "The Great War",
        el: "Ο Μεγάλος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Russia enters the First World War",
            el: "Η Ρωσία εισέρχεται στον Α΄ Παγκόσμιο Πόλεμο"
          },
          description: {
            en: "In defense of Serbia, Russia mobilizes against Germany and Austria-Hungary, plunging the empire into a vast and ruinous war.",
            el: "Προς υπεράσπιση της Σερβίας, η Ρωσία επιστρατεύεται κατά της Γερμανίας και της Αυστροουγγαρίας, βυθίζοντας την αυτοκρατορία σε έναν τεράστιο και καταστροφικό πόλεμο."
          },
          extendedDescription: {
            en: "Early defeats at Tannenberg and the Masurian Lakes, staggering casualties, and economic collapse drained the regime's legitimacy. The tsar's decision to take personal command at the front, leaving the capital to the Empress and Rasputin, deepened the crisis.",
            el: "Οι πρώιμες ήττες στο Τάνενμπεργκ και τις Μαζουρικές Λίμνες, οι συγκλονιστικές απώλειες και η οικονομική κατάρρευση αποστράγγισαν τη νομιμότητα του καθεστώτος. Η απόφαση του τσάρου να αναλάβει προσωπικά τη διοίκηση στο μέτωπο, αφήνοντας την πρωτεύουσα στην αυτοκράτειρα και τον Ρασπούτιν, βάθυνε την κρίση."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1917,
      era: {
        en: "Fall of the Romanovs",
        el: "Πτώση των Ρομανόφ"
      },
      events: [
        {
          title: {
            en: "The February Revolution and the abdication of Nicholas II",
            el: "Η Φεβρουαριανή Επανάσταση και η παραίτηση του Νικολάου Β΄"
          },
          description: {
            en: "Bread riots and mutiny in Petrograd force Nicholas II to abdicate, ending three centuries of Romanov rule and the Russian Empire itself.",
            el: "Εξεγέρσεις για το ψωμί και ανταρσία στην Πετρούπολη αναγκάζουν τον Νικόλαο Β΄ να παραιτηθεί, τερματίζοντας τρεις αιώνες κυριαρχίας των Ρομανόφ και την ίδια τη Ρωσική Αυτοκρατορία."
          },
          extendedDescription: {
            en: "Power passed to a Provisional Government sharing authority with the Petrograd Soviet. Within months the Bolsheviks would seize control in October, and in 1918 the imperial family was executed, closing the long history of tsarist Russia.",
            el: "Η εξουσία πέρασε σε μια Προσωρινή Κυβέρνηση που μοιραζόταν την αρχή με το Σοβιέτ της Πετρούπολης. Μέσα σε λίγους μήνες οι Μπολσεβίκοι θα έπαιρναν τον έλεγχο τον Οκτώβριο, και το 1918 η αυτοκρατορική οικογένεια εκτελέστηκε, κλείνοντας τη μακρά ιστορία της τσαρικής Ρωσίας."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
