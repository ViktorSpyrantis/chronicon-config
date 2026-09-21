/** Old Kingdom — Παλαιό Βασίλειο · Egyptian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const OLD_KINGDOM_EGYPT = {
  id: "old-kingdom-egypt" as const,
  label: {
    en: "Old Kingdom",
    el: "Παλαιό Βασίλειο"
  },
  supertitle: {
    en: "Age of the Pyramids",
    el: "Εποχή των Πυραμίδων"
  },
  title: {
    en: "The Old Kingdom",
    el: "Το Παλαιό Βασίλειο"
  },
  subtitle: {
    en: "From Djoser's Step Pyramid and the genius of Imhotep through Sneferu's perfecting of the form, the Great Pyramid of Khufu and the Sphinx of Khafre at Giza, the sun temples and Pyramid Texts of the Fifth Dynasty, and the long reign of Pepi II, to the collapse of central authority around 2181 BCE. Slide across the Age of the Pyramids, when divine kingship reached its monumental height.",
    el: "Από την Κλιμακωτή Πυραμίδα του Ζοζέρ και τη μεγαλοφυΐα του Ιμχοτέπ, μέσα από την τελειοποίηση της μορφής από τον Σνεφρού, τη Μεγάλη Πυραμίδα του Χέοπα και τη Σφίγγα του Χεφρήνου στη Γκίζα, τους ηλιακούς ναούς και τα Κείμενα των Πυραμίδων της Πέμπτης Δυναστείας, και τη μακρά βασιλεία του Πέπι Β΄, ως την κατάρρευση της κεντρικής εξουσίας γύρω στο 2181 π.Χ. Μετακινηθείτε ανάμεσα στην Εποχή των Πυραμίδων, όταν η θεϊκή βασιλεία έφτασε στο μνημειακό απόγειό της."
  },
  menuDescription: {
    en: "The Age of the Pyramids: Djoser, Imhotep, Giza, and the collapse that followed.",
    el: "Η Εποχή των Πυραμίδων: ο Ζοζέρ, ο Ιμχοτέπ, η Γκίζα κι η κατάρρευση που ακολούθησε."
  },
  footerLabel: {
    en: "Old Kingdom · c. 2686–2181 BCE",
    el: "Παλαιό Βασίλειο · περ. 2686–2181 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Old Kingdom",
    el: "Το Παλαιό Βασίλειο"
  },
  theme: THEMES.gold,
  timeline: [
    {
      year: -2670,
      era: {
        en: "Third Dynasty",
        el: "Τρίτη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Djoser, Imhotep, and the Step Pyramid",
            el: "Ο Ζοζέρ, ο Ιμχοτέπ και η Κλιμακωτή Πυραμίδα"
          },
          description: {
            en: "King Djoser and his architect Imhotep raise the Step Pyramid at Saqqara, the first monumental building of dressed stone and the prototype of all later pyramids.",
            el: "Ο βασιλιάς Ζοζέρ και ο αρχιτέκτονάς του Ιμχοτέπ υψώνουν την Κλιμακωτή Πυραμίδα στη Σακκάρα, το πρώτο μνημειακό οικοδόμημα λαξευμένου λίθου και το πρότυπο όλων των μεταγενέστερων πυραμίδων."
          },
          extendedDescription: {
            en: "Imhotep — later deified as a god of wisdom and medicine — transformed the traditional mud-brick mastaba into a six-stepped tower rising some 60 metres above an immense walled funerary complex with dummy chapels, courts, and a serdab housing a statue of the king. The achievement marked a leap in engineering, royal ideology, and the organisation of labour, and made Saqqara the spiritual heart of the early Old Kingdom.",
            el: "Ο Ιμχοτέπ — που αργότερα θεοποιήθηκε ως θεός της σοφίας και της ιατρικής — μεταμόρφωσε τον παραδοσιακό πλίνθινο μασταμπά σε έναν εξαβάθμιο πύργο που υψωνόταν περίπου 60 μέτρα πάνω από ένα τεράστιο τειχισμένο νεκρικό συγκρότημα με εικονικά παρεκκλήσια, αυλές και ένα σερντάμπ που στέγαζε άγαλμα του βασιλιά. Το επίτευγμα σηματοδότησε ένα άλμα στη μηχανική, τη βασιλική ιδεολογία και την οργάνωση της εργασίας, και κατέστησε τη Σακκάρα την πνευματική καρδιά του πρώιμου Παλαιού Βασιλείου."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -2600,
      era: {
        en: "Fourth Dynasty",
        el: "Τέταρτη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Sneferu and the perfecting of the pyramid",
            el: "Ο Σνεφρού και η τελειοποίηση της πυραμίδας"
          },
          description: {
            en: "Sneferu, founder of the Fourth Dynasty, builds on a colossal scale — the Meidum pyramid, the Bent Pyramid, and the Red Pyramid — achieving the first true smooth-sided pyramid.",
            el: "Ο Σνεφρού, ιδρυτής της Τέταρτης Δυναστείας, οικοδομεί σε κολοσσιαία κλίμακα — την πυραμίδα του Μεϊντούμ, την Κεκλιμένη Πυραμίδα και την Κόκκινη Πυραμίδα — επιτυγχάνοντας την πρώτη πραγματική πυραμίδα με λείες πλευρές."
          },
          extendedDescription: {
            en: "Sneferu moved more stone than any other pharaoh. The collapse-prone Meidum pyramid and the change of angle in the Bent Pyramid at Dahshur record the trial and error of geometry, while the Red Pyramid succeeded as the first true pyramid. His reign also saw expeditions to Sinai for turquoise and copper, raids into Nubia and Libya for captives and cattle, and the import of cedar from Lebanon — the apparatus of a confident, expanding state.",
            el: "Ο Σνεφρού μετακίνησε περισσότερο λίθο από κάθε άλλο φαραώ. Η επιρρεπής σε κατάρρευση πυραμίδα του Μεϊντούμ και η αλλαγή γωνίας στην Κεκλιμένη Πυραμίδα στο Νταχσούρ καταγράφουν τη δοκιμή και το λάθος της γεωμετρίας, ενώ η Κόκκινη Πυραμίδα πέτυχε ως η πρώτη πραγματική πυραμίδα. Η βασιλεία του είδε επίσης αποστολές στο Σινά για τυρκουάζ και χαλκό, επιδρομές στη Νουβία και τη Λιβύη για αιχμαλώτους και βοοειδή, και την εισαγωγή κέδρου από τον Λίβανο — τον μηχανισμό ενός σίγουρου, διευρυνόμενου κράτους."
          },
          category: "political"
        }
      ]
    },
    {
      year: -2560,
      era: {
        en: "Fourth Dynasty",
        el: "Τέταρτη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Khufu and the Great Pyramid of Giza",
            el: "Ο Χέοπας και η Μεγάλη Πυραμίδα της Γκίζας"
          },
          description: {
            en: "Khufu (Cheops) raises the Great Pyramid at Giza, the largest stone monument ever built and the last surviving Wonder of the Ancient World.",
            el: "Ο Χέοπας (Khufu) υψώνει τη Μεγάλη Πυραμίδα στη Γκίζα, το μεγαλύτερο λίθινο μνημείο που χτίστηκε ποτέ και το μόνο σωζόμενο Θαύμα του Αρχαίου Κόσμου."
          },
          extendedDescription: {
            en: "Rising originally to about 146 metres from roughly 2.3 million blocks, the Great Pyramid embodied the zenith of Old Kingdom power and organisation. Recent finds — the workers' town at Giza and the logbook of the inspector Merer, recording the transport of Tura limestone — show a skilled, well-fed labour force rather than the slaves of legend. Khufu's complex included causeways, mortuary and valley temples, and the dismantled cedar 'solar boats' buried beside the pyramid.",
            el: "Υψούμενη αρχικά σε περίπου 146 μέτρα από περίπου 2,3 εκατομμύρια ογκόλιθους, η Μεγάλη Πυραμίδα ενσάρκωνε το απόγειο της ισχύος και της οργάνωσης του Παλαιού Βασιλείου. Πρόσφατα ευρήματα — η πόλη των εργατών στη Γκίζα και το ημερολόγιο του επιθεωρητή Μερέρ, που καταγράφει τη μεταφορά ασβεστόλιθου της Τούρα — δείχνουν ένα εξειδικευμένο, καλοθρεμμένο εργατικό δυναμικό αντί για τους σκλάβους του μύθου. Το συγκρότημα του Χέοπα περιλάμβανε λιθόστρωτους δρόμους, νεκρικούς και κοιλαδικούς ναούς, και τα αποσυναρμολογημένα κέδρινα «ηλιακά πλοία» θαμμένα δίπλα στην πυραμίδα."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Pyramid_of_Giza_-_Pyramid_of_Khufu.jpg?width=1024",
            alt: {
              en: "The Great Pyramid of Giza",
              el: "Η Μεγάλη Πυραμίδα της Γκίζας"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -2532,
      era: {
        en: "Fourth Dynasty",
        el: "Τέταρτη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Khafre, Menkaure, and the Great Sphinx",
            el: "Ο Χεφρήνος, ο Μυκερίνος και η Μεγάλη Σφίγγα"
          },
          description: {
            en: "Khafre and Menkaure complete the Giza necropolis with two more pyramids; the Great Sphinx, carved from the bedrock, guards Khafre's causeway.",
            el: "Ο Χεφρήνος και ο Μυκερίνος ολοκληρώνουν τη νεκρόπολη της Γκίζας με δύο ακόμη πυραμίδες· η Μεγάλη Σφίγγα, λαξευμένη από το μητρικό βράχο, φυλάσσει τον λιθόστρωτο δρόμο του Χεφρήνου."
          },
          extendedDescription: {
            en: "Khafre's pyramid, slightly smaller than his father's but built on higher ground, appears the tallest of the three. The Great Sphinx — a recumbent lion with a royal head, most likely Khafre's — became the largest monolithic statue of antiquity. Menkaure's smaller pyramid and exquisite triad statues close the Giza plateau. The exceptional diorite seated statue of Khafre, with the Horus-falcon embracing his head, expresses the divine nature of Old Kingdom kingship.",
            el: "Η πυραμίδα του Χεφρήνου, ελαφρώς μικρότερη από εκείνη του πατέρα του αλλά χτισμένη σε υψηλότερο έδαφος, φαίνεται η ψηλότερη από τις τρεις. Η Μεγάλη Σφίγγα — ένα ξαπλωμένο λιοντάρι με βασιλικό κεφάλι, πιθανότατα του Χεφρήνου — έγινε το μεγαλύτερο μονολιθικό άγαλμα της αρχαιότητας. Η μικρότερη πυραμίδα του Μυκερίνου και τα εξαίσια τριαδικά αγάλματά του κλείνουν το οροπέδιο της Γκίζας. Το εξαιρετικό διοριτικό καθιστό άγαλμα του Χεφρήνου, με το γεράκι-Ώρο να αγκαλιάζει το κεφάλι του, εκφράζει τη θεϊκή φύση της βασιλείας του Παλαιού Βασιλείου."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sphinx_with_the_third_pyramid.jpg?width=1024",
            alt: {
              en: "The Great Sphinx of Giza",
              el: "Η Μεγάλη Σφίγγα της Γκίζας"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -2400,
      era: {
        en: "Fifth Dynasty",
        el: "Πέμπτη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Sun temples and the rise of Ra",
            el: "Ηλιακοί ναοί και η άνοδος του Ρα"
          },
          description: {
            en: "The kings of the Fifth Dynasty build open-air sun temples to the god Ra at Abu Ghurab and Abusir, signalling the ascendancy of the solar cult of Heliopolis.",
            el: "Οι βασιλείς της Πέμπτης Δυναστείας χτίζουν υπαίθριους ηλιακούς ναούς στον θεό Ρα στο Άμπου Γκουράμπ και το Αμπουσίρ, σηματοδοτώντας την επικράτηση της ηλιακής λατρείας της Ηλιούπολης."
          },
          extendedDescription: {
            en: "From Userkaf onward, pharaohs styled themselves 'Son of Ra' and built sun temples centred on a squat obelisk and a great open-air altar. Their own pyramids at Abusir and Saqqara were smaller and more poorly built than those of Giza, but their mortuary temples were richly decorated. The growing prominence of the priesthood of Ra and of high officials reflected a gradual diffusion of wealth and authority away from the absolute crown.",
            el: "Από τον Ουσερκάφ και έπειτα, οι φαραώ αυτοαποκαλούνταν «Υιοί του Ρα» και έχτιζαν ηλιακούς ναούς με επίκεντρο έναν κοντό οβελίσκο και ένα μεγάλο υπαίθριο βωμό. Οι δικές τους πυραμίδες στο Αμπουσίρ και τη Σακκάρα ήταν μικρότερες και χειρότερα χτισμένες από εκείνες της Γκίζας, αλλά οι νεκρικοί ναοί τους ήταν πλούσια διακοσμημένοι. Η αυξανόμενη ισχύς του ιερατείου του Ρα και των ανώτατων αξιωματούχων αντανακλούσε μια σταδιακή διάχυση του πλούτου και της εξουσίας μακριά από το απόλυτο στέμμα."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -2350,
      era: {
        en: "Fifth Dynasty",
        el: "Πέμπτη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "The Pyramid Texts of Unas",
            el: "Τα Κείμενα των Πυραμίδων του Ούνας"
          },
          description: {
            en: "Unas, last king of the Fifth Dynasty, inscribes the walls of his pyramid at Saqqara with the Pyramid Texts, the oldest religious writings in the world.",
            el: "Ο Ούνας, τελευταίος βασιλιάς της Πέμπτης Δυναστείας, χαράσσει στους τοίχους της πυραμίδας του στη Σακκάρα τα Κείμενα των Πυραμίδων, τα αρχαιότερα θρησκευτικά κείμενα στον κόσμο."
          },
          extendedDescription: {
            en: "The Pyramid Texts are a corpus of spells, hymns, and ritual utterances meant to protect the dead king and guarantee his ascent to the heavens to join the sun god and the circumpolar stars. First carved under Unas around 2350 BCE and used by later kings and queens, they are the ancestors of the Coffin Texts and the Book of the Dead, and the foundation of all later Egyptian funerary literature.",
            el: "Τα Κείμενα των Πυραμίδων είναι ένα σώμα ξορκιών, ύμνων και τελετουργικών εκφωνήσεων που προορίζονταν να προστατεύσουν τον νεκρό βασιλιά και να εγγυηθούν την ανάβασή του στους ουρανούς για να ενωθεί με τον θεό-ήλιο και τα περιπολικά άστρα. Χαραγμένα για πρώτη φορά επί Ούνας γύρω στο 2350 π.Χ. και χρησιμοποιημένα από μεταγενέστερους βασιλείς και βασίλισσες, είναι οι πρόγονοι των Κειμένων των Σαρκοφάγων και του Βιβλίου των Νεκρών, και το θεμέλιο όλης της μεταγενέστερης αιγυπτιακής νεκρικής γραμματείας."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -2278,
      era: {
        en: "Sixth Dynasty",
        el: "Έκτη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "The long reign of Pepi II",
            el: "Η μακρά βασιλεία του Πέπι Β΄"
          },
          description: {
            en: "Pepi II ascends the throne as a child and reigns for as long as ninety years, the longest documented reign in history, during which royal power slowly ebbs.",
            el: "Ο Πέπι Β΄ ανεβαίνει στον θρόνο ως παιδί και βασιλεύει έως και ενενήντα χρόνια, η μακρύτερη τεκμηριωμένη βασιλεία στην ιστορία, κατά την οποία η βασιλική εξουσία υποχωρεί αργά."
          },
          extendedDescription: {
            en: "The Sixth Dynasty preserved the apparatus of the state — trading and quarrying expeditions to Nubia, the Sinai, and Punt are recorded in officials' tomb autobiographies such as that of Harkhuf, who brought a dancing 'dwarf' back to the boy-king. Yet over Pepi II's enormously long reign, provincial governors (nomarchs) grew hereditary and powerful, tax exemptions drained the treasury, and the centralised authority that had built the pyramids gradually weakened.",
            el: "Η Έκτη Δυναστεία διατήρησε τον μηχανισμό του κράτους — εμπορικές και λατομικές αποστολές στη Νουβία, το Σινά και το Πουντ καταγράφονται στις αυτοβιογραφίες τάφων αξιωματούχων, όπως εκείνη του Χαρχούφ, ο οποίος έφερε έναν χορεύοντα «νάνο» πίσω στον παιδί-βασιλιά. Ωστόσο, κατά τη θεόρατα μακρά βασιλεία του Πέπι Β΄, οι επαρχιακοί διοικητές (νομάρχες) έγιναν κληρονομικοί και ισχυροί, οι φοροαπαλλαγές στράγγισαν το θησαυροφυλάκιο, και η συγκεντρωτική εξουσία που είχε χτίσει τις πυραμίδες σταδιακά αποδυναμώθηκε."
          },
          category: "political"
        }
      ]
    },
    {
      year: -2181,
      era: {
        en: "Collapse",
        el: "Κατάρρευση"
      },
      events: [
        {
          title: {
            en: "The fall of the Old Kingdom",
            el: "Η πτώση του Παλαιού Βασιλείου"
          },
          description: {
            en: "After Pepi II, the monarchy fragments into the ephemeral Seventh and Eighth Dynasties; central authority collapses and Egypt slides into the First Intermediate Period.",
            el: "Μετά τον Πέπι Β΄, η μοναρχία κατακερματίζεται στις εφήμερες Έβδομη και Όγδοη Δυναστεία· η κεντρική εξουσία καταρρέει και η Αίγυπτος ολισθαίνει στην Πρώτη Ενδιάμεση Περίοδο."
          },
          extendedDescription: {
            en: "The end of the Old Kingdom resulted from a convergence of forces: the over-mighty provincial nomarchs, an exhausted treasury, and a series of low Nile floods linked to a wider climatic drought that brought famine. Manetho lists seventy kings of Memphis ruling seventy days — a memory of rapid, fractured succession. Power devolved to local rulers at Herakleopolis and Thebes, ending the age of god-kings and pyramids and ushering in a century and more of division.",
            el: "Το τέλος του Παλαιού Βασιλείου προέκυψε από μια σύγκλιση δυνάμεων: τους υπερβολικά ισχυρούς επαρχιακούς νομάρχες, ένα εξαντλημένο θησαυροφυλάκιο, και μια σειρά χαμηλών πλημμυρών του Νείλου που συνδέονται με μια ευρύτερη κλιματική ξηρασία που έφερε λιμό. Ο Μανέθων αναφέρει εβδομήντα βασιλείς της Μέμφιδος που κυβέρνησαν εβδομήντα ημέρες — ανάμνηση μιας ταχείας, κατακερματισμένης διαδοχής. Η εξουσία μεταβιβάστηκε σε τοπικούς ηγεμόνες στην Ηρακλεόπολη και τη Θήβα, τερματίζοντας την εποχή των θεών-βασιλέων και των πυραμίδων και εγκαινιάζοντας έναν αιώνα και πλέον διαίρεσης."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
