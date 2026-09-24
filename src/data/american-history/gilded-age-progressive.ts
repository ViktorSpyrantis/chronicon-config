/** Gilded Age & Progressive Era — Χρυσωμένη Εποχή & Προοδευτική Εποχή · American History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const GILDED_AGE_PROGRESSIVE = {
  id: "gilded-age-progressive" as const,
  label: {
    en: "Gilded Age & Progressive Era",
    el: "Χρυσωμένη Εποχή & Προοδευτική Εποχή"
  },
  supertitle: {
    en: "Industry & Reform · 1869-1914",
    el: "Βιομηχανία & Μεταρρύθμιση"
  },
  title: {
    en: "The Gilded Age & Progressive Era",
    el: "Η Χρυσωμένη Εποχή & η Προοδευτική Εποχή"
  },
  subtitle: {
    en: "From the transcontinental railroad and the steel and oil empires of Rockefeller and Carnegie, through waves of immigration and the close of the frontier, to an overseas empire and the Progressive drive to tame industrial capitalism. Slide across the years to watch the United States remake itself into a world power.",
    el: "Από τον υπερηπειρωτικό σιδηρόδρομο και τις αυτοκρατορίες χάλυβα και πετρελαίου των Ρόκφελερ και Κάρνεγκι, μέσα από κύματα μετανάστευσης και το κλείσιμο του συνόρου, ως μια υπερπόντια αυτοκρατορία και την προοδευτική ώθηση για τιθάσευση του βιομηχανικού καπιταλισμού. Μετακινηθείτε ανάμεσα στα έτη για να δείτε τις Ηνωμένες Πολιτείες να αναμορφώνονται σε παγκόσμια δύναμη."
  },
  menuDescription: {
    en: "Railroads, immigration, big business, and the age of reform.",
    el: "Σιδηρόδρομοι, μετανάστευση, μεγάλες επιχειρήσεις και η εποχή της μεταρρύθμισης."
  },
  footerLabel: {
    en: "Gilded Age & Progressive Era · 1869-1914",
    el: "Χρυσωμένη Εποχή & Προοδευτική Εποχή · 1869-1914"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Gilded Age & Progressive Era",
    el: "Η Χρυσωμένη Εποχή & η Προοδευτική Εποχή"
  },
  theme: THEMES.gold,
  timeline: [
    {
      year: 1869,
      era: {
        en: "The Iron Road",
        el: "Ο σιδερένιος δρόμος"
      },
      events: [
        {
          title: {
            en: "The Transcontinental Railroad",
            el: "Ο Υπερηπειρωτικός Σιδηρόδρομος"
          },
          description: {
            en: "The joining of the rails at Promontory Summit links the coasts, binding the nation together and accelerating settlement of the West — often at Native peoples' expense.",
            el: "Η ένωση των σιδηροτροχιών στο Πρόμοντορι Σάμιτ συνδέει τις ακτές, ενώνοντας το έθνος και επιταχύνοντας τον εποικισμό της Δύσης — συχνά εις βάρος των ιθαγενών λαών."
          },
          extendedDescription: {
            en: "The Central Pacific built east from Sacramento, largely with the labour of some ten to fifteen thousand Chinese workers who blasted tunnels through the Sierra Nevada, while the Union Pacific, with many Irish workers, built west from Nebraska. The lines met at Promontory Summit, Utah, on 10 May 1869, where a ceremonial golden spike was driven. The railroad opened the Plains to settlers and hunters who slaughtered the bison herds on which Plains nations depended, and in 1882 Congress barred Chinese immigration altogether.",
            el: "Ο Central Pacific χτίστηκε ανατολικά από το Σακραμέντο, κυρίως με την εργασία δέκα έως δεκαπέντε χιλιάδων Κινέζων εργατών που άνοιξαν σήραγγες με εκρηκτικά μέσα από τη Σιέρα Νεβάδα, ενώ ο Union Pacific, με πολλούς Ιρλανδούς εργάτες, χτίστηκε δυτικά από τη Νεμπράσκα. Οι γραμμές συναντήθηκαν στο Προμόντορι Σάμιτ της Γιούτα στις 10 Μαΐου 1869, όπου καρφώθηκε ένα τελετουργικό χρυσό καρφί. Ο σιδηρόδρομος άνοιξε τις Πεδιάδες σε εποίκους και κυνηγούς που εξολόθρευσαν τα κοπάδια των βισώνων από τα οποία εξαρτιόνταν τα έθνη των Πεδιάδων, και το 1882 το Κογκρέσο απαγόρευσε εντελώς την κινεζική μετανάστευση."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/East_and_West_Shaking_hands_at_the_laying_of_last_rail_Union_Pacific_Railroad_-_Restoration.jpg?width=1024",
            alt: {
              en: "The Golden Spike ceremony at Promontory Summit, 1869",
              el: "Η τελετή του Χρυσού Καρφιού στο Προμοντόρι Σάμιτ, 1869"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1882,
      era: {
        en: "Captains of Industry",
        el: "Οι μεγιστάνες της βιομηχανίας"
      },
      events: [
        {
          title: {
            en: "Rockefeller, Carnegie, and big business",
            el: "Ρόκφελερ, Κάρνεγκι και οι μεγάλες επιχειρήσεις"
          },
          description: {
            en: "Industrialists like John D. Rockefeller and Andrew Carnegie build vast oil and steel empires, amassing enormous fortunes as trusts come to dominate the economy.",
            el: "Βιομήχανοι όπως ο Τζον Ντ. Ρόκφελερ και ο Άντριου Κάρνεγκι χτίζουν τεράστιες αυτοκρατορίες πετρελαίου και χάλυβα, συσσωρεύοντας τεράστιες περιουσίες καθώς τα τραστ κυριαρχούν στην οικονομία."
          },
          extendedDescription: {
            en: "Rockefeller's Standard Oil Trust, organised in 1882, came to control about 90 percent of American oil refining through efficiency, secret railroad rebates and ruthless undercutting of rivals. Andrew Carnegie, a Scottish immigrant who began as a bobbin boy, built a steel empire he sold to J. P. Morgan in 1901 to form U.S. Steel, then gave most of his fortune away, funding some 2,500 public libraries. Mark Twain called the era the 'Gilded Age' — golden on the surface, cheap underneath — and Congress passed the Sherman Antitrust Act in 1890.",
            el: "Το Standard Oil Trust του Ροκφέλερ, που οργανώθηκε το 1882, έφτασε να ελέγχει περίπου το 90% της αμερικανικής διύλισης πετρελαίου μέσω αποδοτικότητας, μυστικών εκπτώσεων από τους σιδηροδρόμους και ανελέητου υποσκελισμού των ανταγωνιστών. Ο Άντριου Κάρνεγκι, Σκωτσέζος μετανάστης που ξεκίνησε ως παιδί σε κλωστήριο, έχτισε μια αυτοκρατορία χάλυβα που πούλησε στον Τζ. Π. Μόργκαν το 1901 για να σχηματιστεί η U.S. Steel, και έπειτα χάρισε το μεγαλύτερο μέρος της περιουσίας του, χρηματοδοτώντας περίπου 2.500 δημόσιες βιβλιοθήκες. Ο Μαρκ Τουέιν ονόμασε την εποχή «Επίχρυση Εποχή» — χρυσή στην επιφάνεια, φτηνή από κάτω — και το Κογκρέσο ψήφισε τον αντιμονοπωλιακό Νόμο Σέρμαν το 1890."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1886,
      era: {
        en: "Labor Rises",
        el: "Η εργασία εξεγείρεται"
      },
      events: [
        {
          title: {
            en: "The Haymarket affair and organized labor",
            el: "Η υπόθεση Χεϊμάρκετ και το οργανωμένο εργατικό κίνημα"
          },
          description: {
            en: "As workers demand the eight-hour day, a bombing at Chicago's Haymarket Square sets back the labor movement even as unions like the American Federation of Labor grow.",
            el: "Καθώς οι εργάτες απαιτούν το οκτάωρο, μια βομβιστική επίθεση στην πλατεία Χεϊμάρκετ του Σικάγο πλήττει το εργατικό κίνημα, ακόμη κι ενώ συνδικάτα όπως η Αμερικανική Ομοσπονδία Εργασίας αναπτύσσονται."
          },
          extendedDescription: {
            en: "On 4 May 1886, at a Chicago rally called after police had killed strikers the day before, someone threw a bomb that killed seven policemen; police fire killed several civilians. Eight anarchists were convicted with little evidence of any link to the bomb, and four were hanged. The affair is the origin of 1 May as International Workers' Day, and that December Samuel Gompers founded the American Federation of Labor, which focused on wages and hours for skilled workers.",
            el: "Στις 4 Μαΐου 1886, σε μια συγκέντρωση στο Σικάγο που οργανώθηκε αφού η αστυνομία είχε σκοτώσει απεργούς την προηγουμένη, κάποιος πέταξε μια βόμβα που σκότωσε επτά αστυνομικούς· τα πυρά της αστυνομίας σκότωσαν αρκετούς αμάχους. Οκτώ αναρχικοί καταδικάστηκαν με ελάχιστα στοιχεία που να τους συνδέουν με τη βόμβα, και τέσσερις απαγχονίστηκαν. Η υπόθεση είναι η αφετηρία της Πρωτομαγιάς ως Παγκόσμιας Ημέρας των Εργατών, και εκείνον τον Δεκέμβριο ο Σάμιουελ Γκόμπερς ίδρυσε την Αμερικανική Ομοσπονδία Εργασίας, που επικεντρώθηκε στους μισθούς και στα ωράρια των ειδικευμένων εργατών."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1890,
      era: {
        en: "The Closing Frontier",
        el: "Το κλείσιμο του συνόρου"
      },
      events: [
        {
          title: {
            en: "Wounded Knee and the end of the frontier",
            el: "Το Γουντέντ Νι και το τέλος του συνόρου"
          },
          description: {
            en: "The massacre at Wounded Knee marks the tragic close of the Indian Wars; the census declares the frontier settled, ending an era of continental expansion.",
            el: "Η σφαγή στο Γουντέντ Νι σηματοδοτεί το τραγικό τέλος των Ινδιανικών Πολέμων· η απογραφή κηρύσσει το σύνορο εποικισμένο, τερματίζοντας μια εποχή ηπειρωτικής εξάπλωσης."
          },
          extendedDescription: {
            en: "The Ghost Dance, a spiritual movement promising the return of the dead and the bison, alarmed U.S. officials; the Lakota leader Sitting Bull was killed during an attempt to arrest him on 15 December 1890. Two weeks later, as soldiers of the 7th Cavalry disarmed a band of Lakota at Wounded Knee Creek, South Dakota, shooting broke out and some 250 to 300 Lakota, many of them women and children, were killed. The 1890 census declared that a frontier line no longer existed, prompting Frederick Jackson Turner's famous 'frontier thesis' in 1893.",
            el: "Ο Χορός των Πνευμάτων, ένα πνευματικό κίνημα που υπόσχονταν την επιστροφή των νεκρών και των βισώνων, ανησύχησε τους Αμερικανούς αξιωματούχους· ο ηγέτης των Λακότα Σίτινγκ Μπουλ σκοτώθηκε σε μια απόπειρα σύλληψής του στις 15 Δεκεμβρίου 1890. Δύο εβδομάδες αργότερα, καθώς στρατιώτες του 7ου Ιππικού αφόπλιζαν μια ομάδα Λακότα στο ρέμα Γούντεντ Νι της Νότιας Ντακότα, ξέσπασαν πυροβολισμοί και σκοτώθηκαν περίπου 250 έως 300 Λακότα, πολλοί από αυτούς γυναίκες και παιδιά. Η απογραφή του 1890 δήλωσε ότι δεν υπήρχε πια γραμμή μεθορίου, κάτι που οδήγησε στη διάσημη «θεωρία της μεθορίου» του Φρέντερικ Τζάκσον Τέρνερ το 1893."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1892,
      era: {
        en: "The Golden Door",
        el: "Η χρυσή πύλη"
      },
      events: [
        {
          title: {
            en: "Ellis Island and mass immigration",
            el: "Το Νησί Έλις και η μαζική μετανάστευση"
          },
          description: {
            en: "Ellis Island opens as millions of immigrants from southern and eastern Europe arrive, transforming American cities and industry and reshaping the nation's identity.",
            el: "Το Νησί Έλις ανοίγει καθώς εκατομμύρια μετανάστες από τη νότια και ανατολική Ευρώπη φτάνουν, μεταμορφώνοντας τις αμερικανικές πόλεις και τη βιομηχανία και αναδιαμορφώνοντας την ταυτότητα του έθνους."
          },
          extendedDescription: {
            en: "Ellis Island, in New York Harbor within sight of the Statue of Liberty dedicated in 1886, processed some twelve million immigrants before it closed in 1954; the first was Annie Moore, a teenager from County Cork. Italians, Poles, Jews from the Russian Empire, Greeks and many others filled the tenements of the cities and the mills and mines of industry. A backlash of nativism led to the Immigration Act of 1924, which slashed arrivals from southern and eastern Europe with strict national quotas.",
            el: "Το Έλις Άιλαντ, στο λιμάνι της Νέας Υόρκης, σε απόσταση οπτικής επαφής από το Άγαλμα της Ελευθερίας που είχε εγκαινιαστεί το 1886, διεκπεραίωσε περίπου δώδεκα εκατομμύρια μετανάστες ως το κλείσιμό του το 1954· η πρώτη ήταν η Άνι Μουρ, μια έφηβη από την κομητεία Κορκ. Ιταλοί, Πολωνοί, Εβραίοι από τη Ρωσική Αυτοκρατορία, Έλληνες και πολλοί άλλοι γέμισαν τις πολυκατοικίες των πόλεων και τα εργοστάσια και τα ορυχεία της βιομηχανίας. Μια αντίδραση εθνικισμού οδήγησε στον Νόμο για τη Μετανάστευση του 1924, που περιόρισε δραστικά τις αφίξεις από τη νότια και ανατολική Ευρώπη με αυστηρές εθνικές ποσοστώσεις."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1898,
      era: {
        en: "An Overseas Empire",
        el: "Μια υπερπόντια αυτοκρατορία"
      },
      events: [
        {
          title: {
            en: "The Spanish-American War",
            el: "Ο Ισπανοαμερικανικός Πόλεμος"
          },
          description: {
            en: "Victory over Spain gives the United States Puerto Rico, Guam, and the Philippines, launching the country as an imperial power on the world stage.",
            el: "Η νίκη επί της Ισπανίας δίνει στις Ηνωμένες Πολιτείες το Πουέρτο Ρίκο, το Γκουάμ και τις Φιλιππίνες, εκτοξεύοντας τη χώρα ως αυτοκρατορική δύναμη στην παγκόσμια σκηνή."
          },
          extendedDescription: {
            en: "The mysterious explosion of the battleship USS Maine in Havana harbour in February 1898, blamed on Spain by the sensationalist 'yellow press', led to war in support of the Cuban independence struggle. Theodore Roosevelt's Rough Riders charged up San Juan Heights, and the diplomat John Hay called it 'a splendid little war'. But in the Philippines, Filipino nationalists who had fought Spain now fought the Americans in a brutal war from 1899 to 1902 in which some 200,000 Filipino civilians died. Hawaii was annexed the same year.",
            el: "Η μυστηριώδης έκρηξη του θωρηκτού USS Maine στο λιμάνι της Αβάνας τον Φεβρουάριο του 1898, που ο εντυπωσιοθηρικός «κίτρινος Τύπος» απέδωσε στην Ισπανία, οδήγησε σε πόλεμο για τη στήριξη του κουβανικού αγώνα για ανεξαρτησία. Οι Rough Riders του Θεόδωρου Ρούζβελτ εφόρμησαν στα υψώματα του Σαν Χουάν, και ο διπλωμάτης Τζον Χέι τον αποκάλεσε «έναν υπέροχο μικρό πόλεμο». Όμως στις Φιλιππίνες, οι Φιλιππινέζοι εθνικιστές που είχαν πολεμήσει την Ισπανία πολέμησαν τώρα τους Αμερικανούς σε έναν βάναυσο πόλεμο από το 1899 ως το 1902, στον οποίο πέθαναν περίπου 200.000 Φιλιππινέζοι άμαχοι. Η Χαβάη προσαρτήθηκε την ίδια χρονιά."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1901,
      era: {
        en: "The Progressive Era",
        el: "Η Προοδευτική Εποχή"
      },
      events: [
        {
          title: {
            en: "Theodore Roosevelt and reform",
            el: "Ο Θίοντορ Ρούζβελτ και η μεταρρύθμιση"
          },
          description: {
            en: "President Theodore Roosevelt battles the trusts, champions conservation, and pushes consumer protections, embodying the Progressive drive to tame industrial capitalism.",
            el: "Ο πρόεδρος Θίοντορ Ρούζβελτ αντιμάχεται τα τραστ, υπερασπίζεται τη διατήρηση της φύσης και προωθεί την προστασία των καταναλωτών, ενσαρκώνοντας την προοδευτική ώθηση για τιθάσευση του βιομηχανικού καπιταλισμού."
          },
          extendedDescription: {
            en: "Roosevelt became president at 42 when William McKinley was assassinated in September 1901, the youngest ever to hold the office. His administration sued to break up the Northern Securities railroad trust, and after Upton Sinclair's novel The Jungle exposed the meatpacking industry, he signed the Pure Food and Drug and Meat Inspection Acts of 1906. He placed some 230 million acres under federal protection as forests, parks and wildlife refuges, and won the Nobel Peace Prize for mediating an end to the Russo-Japanese War.",
            el: "Ο Ρούζβελτ έγινε πρόεδρος στα 42 του, όταν δολοφονήθηκε ο Γουίλιαμ ΜακΚίνλεϊ τον Σεπτέμβριο του 1901, ο νεότερος που ανέλαβε ποτέ το αξίωμα. Η κυβέρνησή του προσέφυγε στη δικαιοσύνη για να διαλύσει το σιδηροδρομικό τραστ Northern Securities, και αφού το μυθιστόρημα «Η Ζούγκλα» του Άπτον Σινκλέρ αποκάλυψε τη βιομηχανία επεξεργασίας κρέατος, υπέγραψε τους νόμους για τα Καθαρά Τρόφιμα και Φάρμακα και για τον Έλεγχο του Κρέατος το 1906. Έθεσε περίπου 930.000 τετραγωνικά χιλιόμετρα υπό ομοσπονδιακή προστασία ως δάση, πάρκα και καταφύγια άγριας ζωής, και κέρδισε το Νόμπελ Ειρήνης για τη μεσολάβησή του στον τερματισμό του Ρωσοϊαπωνικού Πολέμου."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1903,
      era: {
        en: "An Age of Invention",
        el: "Μια εποχή εφευρέσεων"
      },
      events: [
        {
          title: {
            en: "The Wright brothers take flight",
            el: "Οι αδελφοί Ράιτ πετούν"
          },
          description: {
            en: "At Kitty Hawk the Wright brothers achieve the first powered flight; within a generation the automobile and the airplane will remake daily life and industry.",
            el: "Στο Κίτι Χοκ οι αδελφοί Ράιτ πραγματοποιούν την πρώτη μηχανοκίνητη πτήση· μέσα σε μια γενιά το αυτοκίνητο και το αεροπλάνο θα αναδιαμορφώσουν την καθημερινή ζωή και τη βιομηχανία."
          },
          extendedDescription: {
            en: "Wilbur and Orville Wright, bicycle makers from Dayton, Ohio, solved the problem of control with their system of 'wing-warping' and built their own lightweight engine. On 17 December 1903 Orville flew for twelve seconds over 120 feet at Kill Devil Hills near Kitty Hawk, North Carolina; by the fourth flight that day Wilbur covered 852 feet in 59 seconds. Five years later Henry Ford launched the Model T, and in 1913 his moving assembly line made cars affordable for millions.",
            el: "Ο Γουίλμπουρ και ο Όρβιλ Ράιτ, κατασκευαστές ποδηλάτων από το Ντέιτον του Οχάιο, έλυσαν το πρόβλημα του ελέγχου με το σύστημα «στρέβλωσης των πτερύγων» και κατασκεύασαν τον δικό τους ελαφρύ κινητήρα. Στις 17 Δεκεμβρίου 1903 ο Όρβιλ πέταξε για δώδεκα δευτερόλεπτα σε απόσταση 37 μέτρων στο Κιλ Ντέβιλ Χιλς κοντά στο Κίτι Χοκ της Βόρειας Καρολίνας· στην τέταρτη πτήση εκείνης της μέρας ο Γουίλμπουρ κάλυψε 260 μέτρα σε 59 δευτερόλεπτα. Πέντε χρόνια αργότερα ο Χένρι Φορντ λάνσαρε το Model T, και το 1913 η κινούμενη γραμμή συναρμολόγησής του έκανε τα αυτοκίνητα προσιτά σε εκατομμύρια."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1913,
      era: {
        en: "Reforming the System",
        el: "Μεταρρύθμιση του συστήματος"
      },
      events: [
        {
          title: {
            en: "Income tax and the Federal Reserve",
            el: "Ο φόρος εισοδήματος και η Ομοσπονδιακή Τράπεζα"
          },
          description: {
            en: "The Sixteenth Amendment creates a federal income tax and the Federal Reserve is founded, reshaping the government's role in the economy on the eve of world war.",
            el: "Η Δέκατη Έκτη Τροπολογία θεσπίζει ομοσπονδιακό φόρο εισοδήματος και ιδρύεται η Ομοσπονδιακή Τράπεζα, αναδιαμορφώνοντας τον ρόλο της κυβέρνησης στην οικονομία στο κατώφλι του παγκοσμίου πολέμου."
          },
          extendedDescription: {
            en: "The Sixteenth Amendment, ratified in February 1913, overturned an 1895 Supreme Court ruling and allowed a federal tax on incomes; at first it fell only on the wealthiest few percent. After the Panic of 1907 had been stemmed only by the private intervention of J. P. Morgan, President Woodrow Wilson signed the Federal Reserve Act in December to create a central bank. The same year the Seventeenth Amendment provided for the direct election of senators.",
            el: "Η Δέκατη Έκτη Τροπολογία, που επικυρώθηκε τον Φεβρουάριο του 1913, ανέτρεψε μια απόφαση του Ανωτάτου Δικαστηρίου του 1895 και επέτρεψε έναν ομοσπονδιακό φόρο εισοδήματος· αρχικά επιβάρυνε μόνο το πλουσιότερο μικρό ποσοστό. Αφού ο Πανικός του 1907 είχε αναχαιτιστεί μόνο με την ιδιωτική παρέμβαση του Τζ. Π. Μόργκαν, ο πρόεδρος Γούντροου Γουίλσον υπέγραψε τον Δεκέμβριο τον Νόμο για την Ομοσπονδιακή Τράπεζα, δημιουργώντας μια κεντρική τράπεζα. Την ίδια χρονιά η Δέκατη Έβδομη Τροπολογία καθιέρωσε την άμεση εκλογή των γερουσιαστών."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
