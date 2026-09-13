/** Afsharid, Zand & Qajar Iran — Αφσαριδικό, Ζαντ & Κατζαρικό Ιράν · Persian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const AFSHARID_ZAND_QAJAR = {
  id: "afsharid-zand-qajar" as const,
  label: {
    en: "Afsharid, Zand & Qajar Iran",
    el: "Αφσαριδικό, Ζαντ & Κατζαρικό Ιράν"
  },
  supertitle: {
    en: "The Long Nineteenth Century",
    el: "Ο Μακρύς Δέκατος Ένατος Αιώνας"
  },
  title: {
    en: "Afsharid, Zand & Qajar Iran",
    el: "Αφσαριδικό, Ζαντ & Κατζαρικό Ιράν"
  },
  subtitle: {
    en: "From the conquering Nader Shah and the sack of Delhi through the gentle interlude of Karim Khan Zand, the Qajar founding of Tehran, the loss of the Caucasus to Russia and the pressures of the Great Game, to the Tobacco Protest and the Constitutional Revolution that ended the Qajar century. Slide across the years to read the major events of Iran between the Safavids and the Pahlavis.",
    el: "Από τον κατακτητή Ναντέρ Σαχ και τη λεηλασία του Δελχί, μέσα από το ήπιο ιντερμέτζο του Καρίμ Χαν Ζαντ, την ίδρυση της Τεχεράνης από τους Κατζάρ, την απώλεια του Καυκάσου από τη Ρωσία και τις πιέσεις του Μεγάλου Παιχνιδιού, ως τη Διαμαρτυρία του Καπνού και τη Συνταγματική Επανάσταση που τερμάτισε τον αιώνα των Κατζάρ. Μετακινηθείτε ανάμεσα στα έτη για να διαβάσετε τα γεγονότα του Ιράν ανάμεσα στους Σαφαβίδες και τους Παχλαβί."
  },
  menuDescription: {
    en: "Nader Shah's conquests and the Qajar century of lost provinces and reform.",
    el: "Οι κατακτήσεις του Ναντέρ Σαχ κι ο αιώνας των Κατζάρ, με χαμένες επαρχίες και μεταρρυθμίσεις."
  },
  footerLabel: {
    en: "Afsharid, Zand & Qajar Iran · 1736-1925 AD",
    el: "Αφσαριδικό, Ζαντ & Κατζαρικό Ιράν · 1736-1925 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Afsharid, Zand & Qajar Iran",
    el: "Αφσαριδικό, Ζαντ & Κατζαρικό Ιράν"
  },
  theme: THEMES.rose,
  timeline: [
    {
      year: 1736,
      era: {
        en: "Nader Shah",
        el: "Ναντέρ Σαχ"
      },
      events: [
        {
          title: {
            en: "Nader Shah, the Napoleon of Persia",
            el: "Ο Ναντέρ Σαχ, ο Ναπολέων της Περσίας"
          },
          description: {
            en: "The soldier Nader Shah crowns himself and launches a decade of brilliant, brutal conquests across Asia.",
            el: "Ο στρατιώτης Ναντέρ Σαχ στέφεται και εξαπολύει μια δεκαετία λαμπρών, σκληρών κατακτήσεων σε όλη την Ασία."
          },
          extendedDescription: {
            en: "Rising from a tribe of the Afshar, Nader was one of history's great military commanders. He expelled the Afghans and Ottomans, restored Iran's frontiers, and built an empire by the sword — but his rule grew ever more tyrannical and paranoid as his victories mounted.",
            el: "Αναδυόμενος από μια φυλή των Αφσάρ, ο Ναντέρ υπήρξε ένας από τους μεγάλους στρατιωτικούς ηγέτες της ιστορίας. Εκδίωξε τους Αφγανούς και τους Οθωμανούς, αποκατέστησε τα σύνορα του Ιράν και οικοδόμησε μια αυτοκρατορία με το σπαθί — όμως η κυριαρχία του γινόταν ολοένα πιο τυραννική και παρανοϊκή καθώς οι νίκες του πλήθαιναν."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Contemporary_portrait_of_Nader_Shah._Artist_unknown,_created_in_ca._1740_in_Iran_(cropped).jpg?width=1024",
            alt: {
              en: "Contemporary portrait of Nader Shah (r. 1736–1747)",
              el: "Σύγχρονο πορτρέτο του Ναδίρ Σαχ (βασ. 1736–1747)"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1739,
      era: {
        en: "Nader Shah",
        el: "Ναντέρ Σαχ"
      },
      events: [
        {
          title: {
            en: "The sack of Delhi and the Peacock Throne",
            el: "Η λεηλασία του Δελχί και ο Θρόνος του Παγωνιού"
          },
          description: {
            en: "Nader invades India, crushes the Mughals at Karnal, and carries home the Peacock Throne and the Koh-i-Noor diamond.",
            el: "Ο Ναντέρ εισβάλλει στην Ινδία, συντρίβει τους Μογγόλους στο Καρνάλ και μεταφέρει στην πατρίδα τον Θρόνο του Παγωνιού και το διαμάντι Κοχ-ι-Νουρ."
          },
          extendedDescription: {
            en: "The plunder of Delhi was so vast that Nader remitted taxes in Iran for three years. But the wealth did not bring stability. Increasingly cruel and half-blind with suspicion — he even blinded his own son — Nader was assassinated by his officers in 1747, and his empire fell apart at once.",
            el: "Η λεηλασία του Δελχί ήταν τόσο τεράστια ώστε ο Ναντέρ κατάργησε τους φόρους στο Ιράν επί τρία χρόνια. Όμως ο πλούτος δεν έφερε σταθερότητα. Ολοένα πιο σκληρός και σχεδόν τυφλωμένος από καχυποψία — τύφλωσε ακόμη και τον ίδιο του τον γιο — ο Ναντέρ δολοφονήθηκε από τους αξιωματικούς του το 1747, και η αυτοκρατορία του διαλύθηκε αμέσως."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/A_painting_in_Chehel_Sotoun2.jpg?width=1024",
            alt: {
              en: "A painting at Chehel Sotoun, Isfahan, showing the Battle of Karnal",
              el: "Πίνακας στο Τσεχέλ Σοτούν της Ισφαχάν με τη μάχη του Καρνάλ"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1751,
      era: {
        en: "Karim Khan Zand",
        el: "Καρίμ Χαν Ζαντ"
      },
      events: [
        {
          title: {
            en: "Karim Khan and the peace of Shiraz",
            el: "Ο Καρίμ Χαν και η ειρήνη της Σιράζ"
          },
          description: {
            en: "Karim Khan Zand restores order to much of Iran and rules from Shiraz with rare moderation and care for his people.",
            el: "Ο Καρίμ Χαν Ζαντ αποκαθιστά την τάξη σε μεγάλο μέρος του Ιράν και κυβερνά από τη Σιράζ με σπάνια μετριοπάθεια και φροντίδα για τον λαό του."
          },
          extendedDescription: {
            en: "Refusing the title of shah, calling himself only Vakil ('regent' or 'advocate' of the people), Karim Khan gave Iran a generation of relative peace and prosperity. He beautified Shiraz with gardens, bazaars, and mosques, and his reign was remembered fondly amid the turmoil that came before and after.",
            el: "Αρνούμενος τον τίτλο του σάχη, αυτοαποκαλούμενος μόνο Βακίλ («αντιβασιλέας» ή «συνήγορος» του λαού), ο Καρίμ Χαν χάρισε στο Ιράν μια γενιά σχετικής ειρήνης και ευημερίας. Καλλώπισε τη Σιράζ με κήπους, παζάρια και τζαμιά, και η βασιλεία του έμεινε στη μνήμη με νοσταλγία μέσα στην αναταραχή που προηγήθηκε και ακολούθησε."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Karim_Khan-e_Zand.png?width=1024",
            alt: {
              en: "Karim Khan Zand, ruler of Iran (r. 1751–1779)",
              el: "Ο Καρίμ Χαν Ζαντ, ηγεμόνας του Ιράν (βασ. 1751–1779)"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1796,
      era: {
        en: "The Qajar Dynasty",
        el: "Η Δυναστεία των Κατζάρ"
      },
      events: [
        {
          title: {
            en: "Agha Mohammad Khan founds the Qajar dynasty",
            el: "Ο Αγά Μοχάμαντ Χαν ιδρύει τη δυναστεία των Κατζάρ"
          },
          description: {
            en: "The ruthless Agha Mohammad Khan reunites Iran, is crowned shah, and makes Tehran his capital.",
            el: "Ο αδίστακτος Αγά Μοχάμαντ Χαν επανενώνει το Ιράν, στέφεται σάχης και κάνει την Τεχεράνη πρωτεύουσά του."
          },
          extendedDescription: {
            en: "A eunuch since childhood and hardened by years as a hostage, Agha Mohammad crushed the Zands and reasserted Iranian control over the Caucasus with terrible severity. He established Tehran, then a modest town, as the capital it remains today. His assassination in 1797 passed the throne to his nephew Fath-Ali Shah.",
            el: "Ευνούχος από παιδί και σκληραγωγημένος από χρόνια ομηρίας, ο Αγά Μοχάμαντ συνέτριψε τους Ζαντ και επανεπέβαλε τον ιρανικό έλεγχο στον Καύκασο με τρομερή σκληρότητα. Καθιέρωσε την Τεχεράνη, τότε μια μέτρια κωμόπολη, ως την πρωτεύουσα που παραμένει σήμερα. Η δολοφονία του το 1797 πέρασε τον θρόνο στον ανιψιό του Φαθ-Αλί Σαχ."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/A_portrait_of_Agha_Muhammad_Khan,_Persia,_Qajar,_dated_1795.jpg?width=1024",
            alt: {
              en: "Agha Mohammad Khan Qajar, founder of the Qajar dynasty",
              el: "Ο Αγά Μοχάμαντ Χαν Κατζάρ, ιδρυτής της δυναστείας των Κατζάρ"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1828,
      era: {
        en: "The Qajar Dynasty",
        el: "Η Δυναστεία των Κατζάρ"
      },
      events: [
        {
          title: {
            en: "Iran loses the Caucasus to Russia",
            el: "Το Ιράν χάνει τον Καύκασο από τη Ρωσία"
          },
          description: {
            en: "After two disastrous wars, the Treaty of Turkmenchay cedes Georgia, Armenia, and Azerbaijan to the Russian Empire.",
            el: "Έπειτα από δύο καταστροφικούς πολέμους, η Συνθήκη του Τουρκμαντσάι παραχωρεί τη Γεωργία, την Αρμενία και το Αζερμπαϊτζάν στη Ρωσική Αυτοκρατορία."
          },
          extendedDescription: {
            en: "The Russo-Persian wars exposed how far Iran had fallen behind militarily. Turkmenchay imposed a harsh indemnity, capitulations granting Russians extraterritorial rights, and the loss of the rich Caucasian provinces. It marked the start of a century in which Iran struggled to keep its independence between Russia and Britain.",
            el: "Οι ρωσοπερσικοί πόλεμοι αποκάλυψαν πόσο πολύ είχε μείνει στρατιωτικά πίσω το Ιράν. Η συνθήκη του Τουρκμαντσάι επέβαλε βαριά αποζημίωση, διομολογήσεις που παραχωρούσαν στους Ρώσους δικαιώματα ετεροδικίας, και την απώλεια των πλούσιων καυκασιανών επαρχιών. Σηματοδότησε την αρχή ενός αιώνα κατά τον οποίο το Ιράν πάλευε να κρατήσει την ανεξαρτησία του ανάμεσα στη Ρωσία και τη Βρετανία."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Gulistan-Treaty.jpg?width=1024",
            alt: {
              en: "The Treaty of Gulistan (1813), ceding the Caucasus to Russia",
              el: "Η Συνθήκη του Γκιουλιστάν (1813), που παραχώρησε τον Καύκασο στη Ρωσία"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1848,
      era: {
        en: "Reform and Reaction",
        el: "Μεταρρύθμιση και Αντίδραση"
      },
      events: [
        {
          title: {
            en: "Amir Kabir and the Babi movement",
            el: "Ο Αμίρ Καμπίρ και το κίνημα των Μπαμπί"
          },
          description: {
            en: "The reforming minister Amir Kabir modernizes Iran and suppresses the new Babi faith, forerunner of the Baha'i religion.",
            el: "Ο μεταρρυθμιστής υπουργός Αμίρ Καμπίρ εκσυγχρονίζει το Ιράν και καταστέλλει τη νέα πίστη των Μπαμπί, πρόδρομο της θρησκείας των Μπαχάι."
          },
          extendedDescription: {
            en: "Amir Kabir founded the Dar al-Funun, Iran's first modern polytechnic, and tried to curb corruption and foreign influence before court intrigue led to his execution. In the same years the Bab proclaimed a new religion that spread rapidly and was violently persecuted, giving rise to the worldwide Baha'i faith.",
            el: "Ο Αμίρ Καμπίρ ίδρυσε το Νταρ αλ-Φουνούν, το πρώτο σύγχρονο πολυτεχνείο του Ιράν, και προσπάθησε να περιορίσει τη διαφθορά και την ξένη επιρροή, προτού οι αυλικές ίντριγκες οδηγήσουν στην εκτέλεσή του. Τα ίδια χρόνια ο Μπαμπ διακήρυξε μια νέα θρησκεία που εξαπλώθηκε ταχύτατα και διώχθηκε βίαια, δίνοντας γέννηση στην παγκόσμια πίστη των Μπαχάι."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1890,
      era: {
        en: "The Great Game",
        el: "Το Μεγάλο Παιχνίδι"
      },
      events: [
        {
          title: {
            en: "The Tobacco Protest",
            el: "Η Διαμαρτυρία του Καπνού"
          },
          description: {
            en: "A nationwide boycott forces the shah to cancel a tobacco monopoly granted to a British company, the first mass political victory.",
            el: "Ένα πανεθνικό μποϊκοτάζ αναγκάζει τον σάχη να ακυρώσει ένα μονοπώλιο καπνού που είχε παραχωρηθεί σε βρετανική εταιρεία, η πρώτη μαζική πολιτική νίκη."
          },
          extendedDescription: {
            en: "When Naser al-Din Shah sold the tobacco concession to foreigners, a fatwa by a leading cleric led Iranians — even the shah's own harem — to give up smoking until the deal was revoked. The protest showed the growing power of an alliance between the clergy, the bazaar merchants, and reformist intellectuals against royal concessions to foreign interests.",
            el: "Όταν ο Νάσερ αλ-Ντιν Σαχ πούλησε την παραχώρηση του καπνού σε ξένους, μια φάτουα από κορυφαίο κληρικό οδήγησε τους Ιρανούς — ακόμη και το ίδιο το χαρέμι του σάχη — να εγκαταλείψουν το κάπνισμα ώσπου να ανακληθεί η συμφωνία. Η διαμαρτυρία έδειξε την αυξανόμενη δύναμη μιας συμμαχίας ανάμεσα στον κλήρο, τους εμπόρους του παζαριού και τους μεταρρυθμιστές διανοούμενους ενάντια στις βασιλικές παραχωρήσεις σε ξένα συμφέροντα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1906,
      era: {
        en: "Constitutional Revolution",
        el: "Συνταγματική Επανάσταση"
      },
      events: [
        {
          title: {
            en: "The Constitutional Revolution",
            el: "Η Συνταγματική Επανάσταση"
          },
          description: {
            en: "Popular pressure forces the shah to grant a constitution and Iran's first parliament, the Majles.",
            el: "Η λαϊκή πίεση αναγκάζει τον σάχη να παραχωρήσει σύνταγμα και το πρώτο κοινοβούλιο του Ιράν, το Ματζλές."
          },
          extendedDescription: {
            en: "A coalition of merchants, clerics, and reformers won a written constitution and an elected assembly, a landmark in the modern Middle East. But the new order was fragile: the shah bombarded parliament in 1908, Russia and Britain carved Iran into spheres of influence in 1907, and the constitution's promise remained largely unfulfilled.",
            el: "Ένας συνασπισμός εμπόρων, κληρικών και μεταρρυθμιστών κέρδισε ένα γραπτό σύνταγμα και μια εκλεγμένη συνέλευση, ορόσημο στη σύγχρονη Μέση Ανατολή. Όμως η νέα τάξη ήταν εύθραυστη: ο σάχης βομβάρδισε το κοινοβούλιο το 1908, η Ρωσία και η Βρετανία μοίρασαν το Ιράν σε σφαίρες επιρροής το 1907, και η υπόσχεση του συντάγματος έμεινε σε μεγάλο βαθμό ανεκπλήρωτη."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sattarkhan_%26_Bagherkhan.jpg?width=1024",
            alt: {
              en: "Sattar Khan and Bagher Khan, leaders of the Constitutional Revolution",
              el: "Ο Σατάρ Χαν και ο Μπαγκέρ Χαν, ηγέτες της Συνταγματικής Επανάστασης"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1921,
      era: {
        en: "End of the Qajars",
        el: "Τέλος των Κατζάρ"
      },
      events: [
        {
          title: {
            en: "The coup of Reza Khan",
            el: "Το πραξικόπημα του Ρεζά Χαν"
          },
          description: {
            en: "The Cossack officer Reza Khan seizes power in a coup and rises to become the strongman of a shattered Iran.",
            el: "Ο αξιωματικός των Κοζάκων Ρεζά Χαν καταλαμβάνει την εξουσία με πραξικόπημα και αναδεικνύεται σε ισχυρό άνδρα ενός διαλυμένου Ιράν."
          },
          extendedDescription: {
            en: "After the First World War left Iran occupied and near collapse, Reza Khan marched on Tehran, took control of the army, and became prime minister. Within four years he would depose the last Qajar shah and found a new dynasty, ending 130 years of Qajar rule and opening the Pahlavi era.",
            el: "Αφού ο Πρώτος Παγκόσμιος Πόλεμος άφησε το Ιράν κατεχόμενο και στα πρόθυρα της κατάρρευσης, ο Ρεζά Χαν βάδισε προς την Τεχεράνη, ανέλαβε τον έλεγχο του στρατού και έγινε πρωθυπουργός. Μέσα σε τέσσερα χρόνια θα καθαιρούσε τον τελευταίο Κατζάρη σάχη και θα ίδρυε μια νέα δυναστεία, τερματίζοντας 130 χρόνια κυριαρχίας των Κατζάρ και ανοίγοντας την εποχή των Παχλαβί."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
