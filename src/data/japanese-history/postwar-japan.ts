/** Postwar & Contemporary Japan — Μεταπολεμική & Σύγχρονη Ιαπωνία · Japanese History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const POSTWAR_JAPAN = {
  id: "postwar-japan" as const,
  label: {
    en: "Postwar & Contemporary Japan",
    el: "Μεταπολεμική & Σύγχρονη Ιαπωνία"
  },
  supertitle: {
    en: "戦後 · Rebirth",
    el: "Αναγέννηση"
  },
  title: {
    en: "Postwar & Contemporary Japan",
    el: "Μεταπολεμική & Σύγχρονη Ιαπωνία"
  },
  subtitle: {
    en: "From the American occupation and a pacifist constitution, through the astonishing \"economic miracle\" that made a ruined country the world's second-largest economy, to the bursting of the bubble, the long stagnation, and the disasters and renewal of a mature democracy. Slide across the decades in which Japan rose from the ashes of 1945 to reinvent itself as a peaceful, prosperous and creative power.",
    el: "Από την αμερικανική κατοχή και ένα ειρηνιστικό σύνταγμα, μέσα από το εκπληκτικό «οικονομικό θαύμα» που έκανε μια ρημαγμένη χώρα τη δεύτερη μεγαλύτερη οικονομία του κόσμου, ως το σκάσιμο της φούσκας, τη μακρά στασιμότητα και τις καταστροφές και την ανανέωση μιας ώριμης δημοκρατίας. Μετακινηθείτε στις δεκαετίες όπου η Ιαπωνία σηκώθηκε από τις στάχτες του 1945 για να επανεφεύρει τον εαυτό της ως ειρηνική, ευημερούσα και δημιουργική δύναμη."
  },
  menuDescription: {
    en: "Occupation, the pacifist constitution, the economic miracle and modern Japan's stagnation and renewal.",
    el: "Κατοχή, το ειρηνιστικό σύνταγμα, το οικονομικό θαύμα και η στασιμότητα και ανανέωση της σύγχρονης Ιαπωνίας."
  },
  footerLabel: {
    en: "Postwar & Contemporary Japan · 1945–present",
    el: "Μεταπολεμική & Σύγχρονη Ιαπωνία · 1945–σήμερα"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Postwar & Contemporary Japan",
    el: "Μεταπολεμική & Σύγχρονη Ιαπωνία"
  },
  theme: THEMES.azure,
  timeline: [
    {
      year: 1947,
      era: {
        en: "The Occupation",
        el: "Η Κατοχή"
      },
      events: [
        {
          title: {
            en: "The pacifist constitution",
            el: "Το ειρηνιστικό σύνταγμα"
          },
          description: {
            en: "Under American occupation, Japan adopts a new constitution renouncing war and vesting sovereignty in the people.",
            el: "Υπό αμερικανική κατοχή, η Ιαπωνία υιοθετεί ένα νέο σύνταγμα που αποκηρύσσει τον πόλεμο και θέτει την κυριαρχία στον λαό."
          },
          extendedDescription: {
            en: "General MacArthur's occupation remade Japan: the emperor renounced his divinity and became a symbol, land was redistributed, women won the vote, and the great combines were loosened. The new constitution's Article 9 forever renounced war — a foundation of Japan's postwar identity as a peaceful nation that endures to this day.",
            el: "Η κατοχή του στρατηγού ΜακΆρθουρ αναδιαμόρφωσε την Ιαπωνία: ο αυτοκράτορας αποκήρυξε τη θεότητά του κι έγινε σύμβολο, η γη αναδιανεμήθηκε, οι γυναίκες κέρδισαν το δικαίωμα ψήφου, και τα μεγάλα συγκροτήματα χαλάρωσαν. Το Άρθρο 9 του νέου συντάγματος αποκήρυξε για πάντα τον πόλεμο — ένα θεμέλιο της μεταπολεμικής ταυτότητας της Ιαπωνίας ως ειρηνικού έθνους που αντέχει ως σήμερα."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Occupied_Japan.png?width=1024",
            alt: {
              en: "Occupied Japan under Allied administration",
              el: "Η κατεχόμενη Ιαπωνία υπό συμμαχική διοίκηση"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1951,
      era: {
        en: "Return to the World",
        el: "Επιστροφή στον Κόσμο"
      },
      events: [
        {
          title: {
            en: "The San Francisco Peace Treaty",
            el: "Η Συνθήκη Ειρήνης του Σαν Φρανσίσκο"
          },
          description: {
            en: "Japan signs the peace treaty ending the occupation and, allied to the United States, regains its independence.",
            el: "Η Ιαπωνία υπογράφει τη συνθήκη ειρήνης που τερματίζει την κατοχή και, σύμμαχη με τις Ηνωμένες Πολιτείες, ανακτά την ανεξαρτησία της."
          },
          extendedDescription: {
            en: "The 1951 treaty restored Japanese sovereignty from 1952, while a security pact kept American forces on Japanese soil. Sheltered under the American alliance and freed from heavy military spending, Japan could pour its energies into the economy — the strategic choice that shaped its entire postwar rise.",
            el: "Η συνθήκη του 1951 αποκατέστησε την ιαπωνική κυριαρχία από το 1952, ενώ ένα σύμφωνο ασφαλείας κράτησε αμερικανικές δυνάμεις σε ιαπωνικό έδαφος. Προστατευμένη υπό την αμερικανική συμμαχία και απαλλαγμένη από βαριές στρατιωτικές δαπάνες, η Ιαπωνία μπόρεσε να διοχετεύσει τις ενέργειές της στην οικονομία — η στρατηγική επιλογή που διαμόρφωσε ολόκληρη τη μεταπολεμική της άνοδο."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Yoshida_signs_San_Francisco_Peace_Treaty.jpg?width=1024",
            alt: {
              en: "Japan signs the San Francisco Peace Treaty, 1951",
              el: "Η Ιαπωνία υπογράφει τη Συνθήκη Ειρήνης του Σαν Φρανσίσκο, 1951"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1964,
      era: {
        en: "The Economic Miracle",
        el: "Το Οικονομικό Θαύμα"
      },
      events: [
        {
          title: {
            en: "The Tokyo Olympics",
            el: "Οι Ολυμπιακοί Αγώνες του Τόκιο"
          },
          description: {
            en: "The Tokyo Olympics and the first bullet train announce Japan's return as a modern, prosperous nation.",
            el: "Οι Ολυμπιακοί Αγώνες του Τόκιο και το πρώτο τρένο-σφαίρα αναγγέλλουν την επιστροφή της Ιαπωνίας ως σύγχρονου, ευημερούντος έθνους."
          },
          extendedDescription: {
            en: "Just nineteen years after defeat, Japan hosted the Olympics and opened the Shinkansen, the sleek bullet train between Tokyo and Osaka. Behind the spectacle lay a decade of near double-digit growth, as Japanese cars, cameras and electronics conquered world markets and a mass middle class took shape.",
            el: "Μόλις δεκαεννέα χρόνια μετά την ήττα, η Ιαπωνία φιλοξένησε τους Ολυμπιακούς Αγώνες και εγκαινίασε το Σινκάνσεν, το κομψό τρένο-σφαίρα ανάμεσα στο Τόκιο και την Οσάκα. Πίσω από το θέαμα κρυβόταν μια δεκαετία ανάπτυξης σχεδόν διψήφιου ρυθμού, καθώς ιαπωνικά αυτοκίνητα, φωτογραφικές μηχανές και ηλεκτρονικά κατακτούσαν τις παγκόσμιες αγορές και διαμορφωνόταν μια μαζική μεσαία τάξη."
          },
          category: "other",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shinkansen_Series0_R67_JNRcolor.jpg?width=1024",
            alt: {
              en: "The Shinkansen bullet train, opened for the 1964 Olympics",
              el: "Το τρένο-σφαίρα Σινκάνσεν, που εγκαινιάστηκε για τους Ολυμπιακούς του 1964"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1968,
      era: {
        en: "An Economic Superpower",
        el: "Οικονομική Υπερδύναμη"
      },
      events: [
        {
          title: {
            en: "The world's second economy",
            el: "Η δεύτερη οικονομία του κόσμου"
          },
          description: {
            en: "Japan becomes the second-largest economy on earth, a byword for industrial quality and technology.",
            el: "Η Ιαπωνία γίνεται η δεύτερη μεγαλύτερη οικονομία στη γη, συνώνυμο βιομηχανικής ποιότητας και τεχνολογίας."
          },
          extendedDescription: {
            en: "Surpassing West Germany, Japan stood second only to the United States. Its factories set the global standard for quality, its brands became household names worldwide, and its manga, anime and design began their own conquest of global culture. From the ashes of war had risen an economic superpower.",
            el: "Ξεπερνώντας τη Δυτική Γερμανία, η Ιαπωνία στάθηκε δεύτερη μόνο μετά τις Ηνωμένες Πολιτείες. Τα εργοστάσιά της έθεσαν το παγκόσμιο μέτρο ποιότητας, οι μάρκες της έγιναν οικεία ονόματα παγκοσμίως, και τα μάνγκα, τα άνιμε και ο σχεδιασμός της άρχισαν τη δική τους κατάκτηση της παγκόσμιας κουλτούρας. Από τις στάχτες του πολέμου είχε αναδυθεί μια οικονομική υπερδύναμη."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1989,
      era: {
        en: "The End of Shōwa",
        el: "Το Τέλος της Σόουα"
      },
      events: [
        {
          title: {
            en: "The Heisei era begins",
            el: "Αρχίζει η εποχή Χεϊσέι"
          },
          description: {
            en: "The death of Emperor Hirohito ends the long Shōwa era as the postwar economic bubble reaches its dizzy peak.",
            el: "Ο θάνατος του Αυτοκράτορα Χιροχίτο τερματίζει τη μακρά εποχή Σόουα καθώς η μεταπολεμική οικονομική φούσκα φτάνει στην ιλιγγιώδη κορυφή της."
          },
          extendedDescription: {
            en: "Hirohito's sixty-two-year reign had spanned militarism, war, defeat and rebirth; his son Akihito opened the Heisei era. Japanese land and stocks had soared to fantastical values, and the nation seemed poised to lead the world — but the speculative bubble was about to burst with lasting consequences.",
            el: "Η εξηνταδιάχρονη βασιλεία του Χιροχίτο είχε καλύψει τον μιλιταρισμό, τον πόλεμο, την ήττα και την αναγέννηση· ο γιος του Ακιχίτο άνοιξε την εποχή Χεϊσέι. Η ιαπωνική γη και οι μετοχές είχαν εκτοξευθεί σε φαντασιακές αξίες, και το έθνος έμοιαζε έτοιμο να ηγηθεί του κόσμου — όμως η κερδοσκοπική φούσκα ήταν έτοιμη να σκάσει με διαρκείς συνέπειες."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Emperor_Akihito_%282016%29.jpg?width=1024",
            alt: {
              en: "Emperor Akihito, whose accession opened the Heisei era",
              el: "Ο Αυτοκράτορας Ακιχίτο, του οποίου η ενθρόνιση άνοιξε την εποχή Χεϊσέι"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1991,
      era: {
        en: "The Lost Decades",
        el: "Οι Χαμένες Δεκαετίες"
      },
      events: [
        {
          title: {
            en: "The bubble bursts",
            el: "Η φούσκα σκάει"
          },
          description: {
            en: "The asset bubble collapses, opening a long era of stagnation, deflation and cautious reform.",
            el: "Η φούσκα των περιουσιακών στοιχείων καταρρέει, ανοίγοντας μια μακρά εποχή στασιμότητας, αποπληθωρισμού και επιφυλακτικών μεταρρυθμίσεων."
          },
          extendedDescription: {
            en: "When land and share prices crashed, banks were left crippled by bad debt and growth ground to a halt. The \"lost decades\" that followed brought deflation, insecure work and an ageing, shrinking population. Japan remained rich, orderly and inventive, but its era of soaring confidence was over, replaced by a search for stability.",
            el: "Όταν οι τιμές της γης και των μετοχών κατέρρευσαν, οι τράπεζες έμειναν παράλυτες από τα επισφαλή χρέη και η ανάπτυξη σταμάτησε. Οι «χαμένες δεκαετίες» που ακολούθησαν έφεραν αποπληθωρισμό, επισφαλή εργασία και έναν γηράσκοντα, συρρικνούμενο πληθυσμό. Η Ιαπωνία παρέμεινε πλούσια, οργανωμένη και εφευρετική, όμως η εποχή της εκτοξευόμενης αυτοπεποίθησής της είχε τελειώσει, αντικαταστημένη από μια αναζήτηση σταθερότητας."
          },
          category: "other",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Nikkei_225_Index.webp?width=1024",
            alt: {
              en: "The Nikkei index, whose crash opened the \"lost decades\"",
              el: "Ο δείκτης Νικέι, του οποίου η κατάρρευση άνοιξε τις «χαμένες δεκαετίες»"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 2011,
      era: {
        en: "Disaster and Resilience",
        el: "Καταστροφή και Ανθεκτικότητα"
      },
      events: [
        {
          title: {
            en: "The Tōhoku earthquake and Fukushima",
            el: "Ο Σεισμός του Τοχόκου και η Φουκουσίμα"
          },
          description: {
            en: "A massive earthquake and tsunami devastate the northeast and trigger the Fukushima nuclear disaster.",
            el: "Ένας τεράστιος σεισμός και τσουνάμι ισοπεδώνουν τον βορειοανατολικό και προκαλούν την πυρηνική καταστροφή της Φουκουσίμα."
          },
          extendedDescription: {
            en: "The most powerful earthquake in Japan's recorded history sent a tsunami crashing over the Tōhoku coast, killing some twenty thousand people and crippling the Fukushima nuclear plant. The nation's calm, disciplined response drew worldwide admiration, even as the disaster forced a hard reckoning with nuclear power and reconstruction.",
            el: "Ο ισχυρότερος σεισμός στην καταγεγραμμένη ιστορία της Ιαπωνίας έστειλε ένα τσουνάμι να σαρώσει την ακτή του Τοχόκου, σκοτώνοντας περίπου είκοσι χιλιάδες ανθρώπους και αχρηστεύοντας το πυρηνικό εργοστάσιο της Φουκουσίμα. Η ήρεμη, πειθαρχημένη αντίδραση του έθνους προκάλεσε παγκόσμιο θαυμασμό, την ώρα που η καταστροφή επέβαλε έναν σκληρό αναλογισμό για την πυρηνική ενέργεια και την ανασυγκρότηση."
          },
          category: "other",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/SH-60B_helicopter_flies_over_Sendai.jpg?width=1024",
            alt: {
              en: "Aftermath of the 2011 Tōhoku earthquake and tsunami",
              el: "Οι συνέπειες του σεισμού και του τσουνάμι του Τοχόκου το 2011"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 2019,
      era: {
        en: "The Reiwa Era",
        el: "Η Εποχή Ρέιβα"
      },
      events: [
        {
          title: {
            en: "The dawn of Reiwa",
            el: "Η αυγή της Ρέιβα"
          },
          description: {
            en: "Emperor Akihito abdicates and his son Naruhito ascends, opening the Reiwa era in a mature, peaceful Japan.",
            el: "Ο Αυτοκράτορας Ακιχίτο παραιτείται και ο γιος του Ναρουχίτο ανέρχεται, ανοίγοντας την εποχή Ρέιβα σε μια ώριμη, ειρηνική Ιαπωνία."
          },
          extendedDescription: {
            en: "In the first abdication in two centuries, the ageing Akihito passed the throne to Naruhito, and the era name Reiwa — \"beautiful harmony\" — began. A peaceful democracy and cultural powerhouse, Japan faces the new century grappling with a shrinking population and a rising China, still reinventing the balance of tradition and change that has defined its whole history.",
            el: "Στην πρώτη παραίτηση εδώ και δύο αιώνες, ο γηραιός Ακιχίτο παρέδωσε τον θρόνο στον Ναρουχίτο, και άρχισε το όνομα της εποχής Ρέιβα — «όμορφη αρμονία». Μια ειρηνική δημοκρατία και πολιτιστική δύναμη, η Ιαπωνία αντιμετωπίζει τον νέο αιώνα παλεύοντας με έναν συρρικνούμενο πληθυσμό και μια ανερχόμενη Κίνα, επανεφευρίσκοντας ακόμη την ισορροπία παράδοσης και αλλαγής που όρισε όλη της την ιστορία."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Emperor_Naruhito_20250611_%2854582524056%2C_cropped%29.jpg?width=1024",
            alt: {
              en: "Emperor Naruhito, whose reign opened the Reiwa era",
              el: "Ο Αυτοκράτορας Ναρουχίτο, του οποίου η βασιλεία άνοιξε την εποχή Ρέιβα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
