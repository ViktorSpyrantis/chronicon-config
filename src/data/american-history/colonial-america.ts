/** Colonial America — Αποικιακή Αμερική · American History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const COLONIAL_AMERICA = {
  id: "colonial-america" as const,
  label: {
    en: "Colonial America",
    el: "Αποικιακή Αμερική"
  },
  supertitle: {
    en: "Thirteen Colonies · 1492-1763",
    el: "Δεκατρείς Αποικίες"
  },
  title: {
    en: "Colonial America",
    el: "Αποικιακή Αμερική"
  },
  subtitle: {
    en: "From Columbus's landfall and the first permanent settlements at Jamestown and Plymouth, through the growth of thirteen distinct colonies, the tragic rise of slavery, and the religious fervor of the Great Awakening, to the imperial wars that left Britain master of eastern North America. Slide across the years to trace the colonial roots of the United States.",
    el: "Από την αποβίβαση του Κολόμβου και τους πρώτους μόνιμους οικισμούς στο Τζέιμσταουν και το Πλίμουθ, μέσα από την ανάπτυξη δεκατριών ξεχωριστών αποικιών, τη τραγική άνοδο της δουλείας και τον θρησκευτικό ζήλο της Μεγάλης Αφύπνισης, ως τους αυτοκρατορικούς πολέμους που άφησαν τη Βρετανία κυρίαρχη της ανατολικής Βόρειας Αμερικής. Μετακινηθείτε ανάμεσα στα έτη για να ανιχνεύσετε τις αποικιακές ρίζες των Ηνωμένων Πολιτειών."
  },
  menuDescription: {
    en: "Jamestown to the French and Indian War: the making of colonial America.",
    el: "Από το Τζέιμσταουν ως τον Γαλλοϊνδιανικό Πόλεμο: η διαμόρφωση της αποικιακής Αμερικής."
  },
  footerLabel: {
    en: "Colonial America · 1492-1763",
    el: "Αποικιακή Αμερική · 1492-1763"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Colonial America",
    el: "Αποικιακή Αμερική"
  },
  theme: THEMES.bronze,
  timeline: [
    {
      year: 1492,
      era: {
        en: "Contact",
        el: "Επαφή"
      },
      events: [
        {
          title: {
            en: "Columbus reaches the Americas",
            el: "Ο Κολόμβος φτάνει στην Αμερική"
          },
          description: {
            en: "Sailing for Spain, Christopher Columbus makes landfall in the Caribbean, opening the Americas to European colonization and the vast, often catastrophic Columbian Exchange.",
            el: "Ταξιδεύοντας για λογαριασμό της Ισπανίας, ο Χριστόφορος Κολόμβος αποβιβάζεται στην Καραϊβική, ανοίγοντας την Αμερική στον ευρωπαϊκό αποικισμό και στη μεγάλη, συχνά καταστροφική Κολομβιανή Ανταλλαγή."
          },
          extendedDescription: {
            en: "The exchange of crops, animals, and ideas transformed both hemispheres, but Old World diseases such as smallpox devastated Indigenous populations, killing a large share within a century of contact.",
            el: "Η ανταλλαγή καλλιεργειών, ζώων και ιδεών μεταμόρφωσε και τα δύο ημισφαίρια, αλλά ασθένειες του Παλαιού Κόσμου όπως η ευλογιά ερήμωσαν τους ιθαγενείς πληθυσμούς, σκοτώνοντας μεγάλο μέρος τους μέσα σε έναν αιώνα από την επαφή."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1607,
      era: {
        en: "First Settlements",
        el: "Οι πρώτοι οικισμοί"
      },
      events: [
        {
          title: {
            en: "Jamestown founded in Virginia",
            el: "Ίδρυση του Τζέιμσταουν στη Βιρτζίνια"
          },
          description: {
            en: "English colonists plant Jamestown, the first permanent English settlement in North America; after early starvation it survives on tobacco, a crop that will shape the Southern economy.",
            el: "Άγγλοι άποικοι ιδρύουν το Τζέιμσταουν, τον πρώτο μόνιμο αγγλικό οικισμό στη Βόρεια Αμερική· μετά από αρχικό λιμό, επιβιώνει χάρη στον καπνό, μια καλλιέργεια που θα διαμορφώσει την οικονομία του Νότου."
          },
          extendedDescription: {
            en: "Of the roughly one hundred men and boys who landed in May 1607, most were dead within a year, and the 'Starving Time' of 1609–10 left only about sixty survivors. The Powhatan confederacy both traded with and fought the newcomers; the marriage of Pocahontas to the planter John Rolfe in 1614 brought a brief peace. Rolfe's tobacco became Virginia's cash crop, and in 1619 the colony's General Assembly met — the first elected legislature in English America.",
            el: "Από τους περίπου εκατό άνδρες και αγόρια που αποβιβάστηκαν τον Μάιο του 1607, οι περισσότεροι είχαν πεθάνει μέσα σε έναν χρόνο, και η «Εποχή της Πείνας» του 1609–10 άφησε μόνο περίπου εξήντα επιζώντες. Η συνομοσπονδία των Πάουχαταν εμπορευόταν αλλά και πολεμούσε με τους νεοφερμένους· ο γάμος της Ποκαχόντας με τον φυτευτή Τζον Ρολφ το 1614 έφερε μια σύντομη ειρήνη. Ο καπνός του Ρολφ έγινε η εμπορική καλλιέργεια της Βιρτζίνια, και το 1619 συνεδρίασε η Γενική Συνέλευση της αποικίας — το πρώτο εκλεγμένο νομοθετικό σώμα της αγγλικής Αμερικής."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1619,
      era: {
        en: "Slavery Takes Root",
        el: "Η δουλεία ριζώνει"
      },
      events: [
        {
          title: {
            en: "The first enslaved Africans in Virginia",
            el: "Οι πρώτοι σκλαβωμένοι Αφρικανοί στη Βιρτζίνια"
          },
          description: {
            en: "A ship brings the first recorded enslaved Africans to Virginia, the beginning of a brutal system of racial slavery that will underpin the colonial economy for generations.",
            el: "Ένα πλοίο φέρνει τους πρώτους καταγεγραμμένους σκλαβωμένους Αφρικανούς στη Βιρτζίνια, την αρχή ενός βάναυσου συστήματος φυλετικής δουλείας που θα στηρίξει την αποικιακή οικονομία για γενιές."
          },
          extendedDescription: {
            en: "About twenty Africans, captured in Angola and seized from a Portuguese slave ship by English privateers, were traded at Point Comfort for provisions. Their legal status was at first uncertain, and some early Africans in Virginia gained their freedom; but over the following decades colonial laws made slavery lifelong, hereditary and based on race. By the eve of the Revolution, roughly a fifth of the colonies' population was enslaved.",
            el: "Περίπου είκοσι Αφρικανοί, που είχαν αιχμαλωτιστεί στην Αγκόλα και αρπάχτηκαν από ένα πορτογαλικό δουλεμπορικό πλοίο από Άγγλους κουρσάρους, ανταλλάχθηκαν με εφόδια στο Πόιντ Κόμφορτ. Το νομικό τους καθεστώς ήταν αρχικά αβέβαιο, και ορισμένοι από τους πρώτους Αφρικανούς της Βιρτζίνια απέκτησαν την ελευθερία τους· όμως τις επόμενες δεκαετίες οι αποικιακοί νόμοι έκαναν τη δουλεία ισόβια, κληρονομική και φυλετική. Στις παραμονές της Επανάστασης, περίπου το ένα πέμπτο του πληθυσμού των αποικιών ήταν σκλάβοι."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1620,
      era: {
        en: "New England",
        el: "Νέα Αγγλία"
      },
      events: [
        {
          title: {
            en: "The Pilgrims and the Mayflower Compact",
            el: "Οι Προσκυνητές και το Σύμφωνο του Μέιφλαουερ"
          },
          description: {
            en: "Separatist Pilgrims land at Plymouth and sign the Mayflower Compact, an early agreement of self-government, founding a Puritan New England built around church and town meeting.",
            el: "Αποσχιστές Προσκυνητές αποβιβάζονται στο Πλίμουθ και υπογράφουν το Σύμφωνο του Μέιφλαουερ, μια πρώιμη συμφωνία αυτοδιοίκησης, ιδρύοντας μια πουριτανική Νέα Αγγλία δομημένη γύρω από την εκκλησία και τη συνέλευση της κοινότητας."
          },
          extendedDescription: {
            en: "The Mayflower's 102 passengers were bound for Virginia but made landfall at Cape Cod; before going ashore, 41 men signed a compact to form a 'civil body politic'. Half the settlers died in the first winter, and the colony survived with help from the Wampanoag, including Squanto, who had learned English after being kidnapped to Europe. The harvest feast of 1621 is remembered as the first Thanksgiving; the much larger Puritan migration to Massachusetts Bay began in 1630.",
            el: "Οι 102 επιβάτες του Mayflower κατευθύνονταν στη Βιρτζίνια, αλλά έφτασαν στο Κέιπ Κοντ· πριν αποβιβαστούν, 41 άνδρες υπέγραψαν ένα σύμφωνο για να σχηματίσουν ένα «πολιτικό σώμα». Οι μισοί άποικοι πέθαναν τον πρώτο χειμώνα, και η αποικία επέζησε με τη βοήθεια των Γουαμπανόαγκ, ανάμεσά τους του Σκουάντο, που είχε μάθει αγγλικά αφού είχε απαχθεί στην Ευρώπη. Το γιορτινό γεύμα της συγκομιδής του 1621 μνημονεύεται ως η πρώτη Ημέρα των Ευχαριστιών· η πολύ μεγαλύτερη μετανάστευση των Πουριτανών στον Κόλπο της Μασαχουσέτης άρχισε το 1630."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1682,
      era: {
        en: "Proprietary Colonies",
        el: "Ιδιοκτησιακές αποικίες"
      },
      events: [
        {
          title: {
            en: "William Penn founds Pennsylvania",
            el: "Ο Γουίλιαμ Πεν ιδρύει την Πενσιλβάνια"
          },
          description: {
            en: "Quaker William Penn establishes Pennsylvania as a haven of religious tolerance, and lays out Philadelphia — soon one of the largest and most prosperous cities in the colonies.",
            el: "Ο Κουάκερος Γουίλιαμ Πεν ιδρύει την Πενσιλβάνια ως καταφύγιο θρησκευτικής ανοχής και σχεδιάζει τη Φιλαδέλφεια — σύντομα μία από τις μεγαλύτερες και πιο ευημερούσες πόλεις των αποικιών."
          },
          extendedDescription: {
            en: "Penn received the colony from Charles II in 1681 in settlement of a royal debt owed to his father, an admiral. His Frame of Government guaranteed freedom of worship, and he negotiated land purchases with the Lenape, remembered in the legend of a treaty under an elm tree at Shackamaxon. Philadelphia — the 'city of brotherly love' — was laid out on a grid, and by the 1770s it was among the largest cities of the British Empire.",
            el: "Ο Πεν έλαβε την αποικία από τον Κάρολο Β΄ το 1681 για την εξόφληση ενός βασιλικού χρέους προς τον πατέρα του, έναν ναύαρχο. Το Πλαίσιο Διακυβέρνησής του εγγυόταν την ελευθερία της λατρείας, και διαπραγματεύτηκε αγορές γης με τους Λενάπε, κάτι που θυμίζει ο θρύλος μιας συνθήκης κάτω από μια φτελιά στο Σακαμάξον. Η Φιλαδέλφεια — η «πόλη της αδελφικής αγάπης» — χαράχτηκε σε κάναβο, και ως τη δεκαετία του 1770 ήταν ανάμεσα στις μεγαλύτερες πόλεις της Βρετανικής Αυτοκρατορίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1692,
      era: {
        en: "Fear and Faith",
        el: "Φόβος και πίστη"
      },
      events: [
        {
          title: {
            en: "The Salem witch trials",
            el: "Οι δίκες μαγισσών του Σάλεμ"
          },
          description: {
            en: "In Puritan Massachusetts a wave of witchcraft accusations leads to the execution of twenty people, a lasting emblem of mass hysteria and the dangers of religious zeal.",
            el: "Στο πουριτανικό Μασαχουσέτη ένα κύμα κατηγοριών για μαγεία οδηγεί στην εκτέλεση είκοσι ανθρώπων, ένα διαχρονικό σύμβολο της μαζικής υστερίας και των κινδύνων του θρησκευτικού φανατισμού."
          },
          extendedDescription: {
            en: "The accusations began with girls in Salem Village suffering fits and spread until more than two hundred people had been accused. Nineteen were hanged, one man was pressed to death under stones for refusing to plead, and several more died in jail. The court accepted 'spectral evidence' — testimony about visions — until ministers such as Increase Mather objected; within a few years several jurors and the judge Samuel Sewall publicly repented.",
            el: "Οι κατηγορίες ξεκίνησαν με κορίτσια στο χωριό Σάλεμ που έπαθαν κρίσεις σπασμών και εξαπλώθηκαν ώσπου κατηγορήθηκαν πάνω από διακόσιοι άνθρωποι. Δεκαεννέα απαγχονίστηκαν, ένας άνδρας συνθλίφτηκε μέχρι θανάτου κάτω από πέτρες επειδή αρνήθηκε να απολογηθεί, και αρκετοί ακόμη πέθαναν στη φυλακή. Το δικαστήριο δεχόταν «φασματικά τεκμήρια» — μαρτυρίες για οράματα — ώσπου ιερείς όπως ο Ίνκριζ Μάδερ διαμαρτυρήθηκαν· μέσα σε λίγα χρόνια αρκετοί ένορκοι και ο δικαστής Σάμιουελ Σιούαλ μετανόησαν δημόσια."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1730,
      era: {
        en: "The Great Awakening",
        el: "Η Μεγάλη Αφύπνιση"
      },
      events: [
        {
          title: {
            en: "A religious revival sweeps the colonies",
            el: "Μια θρησκευτική αναγέννηση σαρώνει τις αποικίες"
          },
          description: {
            en: "Fiery preachers like Jonathan Edwards and George Whitefield spark the Great Awakening, an emotional revival that crosses colonial lines and fosters a shared American identity.",
            el: "Φλογεροί ιεροκήρυκες όπως ο Τζόναθαν Έντουαρντς και ο Τζορτζ Γουάιτφιλντ πυροδοτούν τη Μεγάλη Αφύπνιση, μια συναισθηματική θρησκευτική αναγέννηση που ξεπερνά τα όρια των αποικιών και καλλιεργεί μια κοινή αμερικανική ταυτότητα."
          },
          extendedDescription: {
            en: "The English preacher George Whitefield toured the colonies from 1739 and drew outdoor crowds of many thousands; Benjamin Franklin calculated that his voice could reach some 30,000 people at once. Jonathan Edwards' sermon 'Sinners in the Hands of an Angry God' (1741) became the revival's most famous text. The Awakening split congregations, encouraged ordinary believers to challenge established clergy, and led to new colleges such as Princeton.",
            el: "Ο Άγγλος ιεροκήρυκας Τζορτζ Γουάιτφιλντ περιόδευσε στις αποικίες από το 1739 και συγκέντρωνε υπαίθρια πλήθη χιλιάδων ανθρώπων· ο Βενιαμίν Φραγκλίνος υπολόγισε ότι η φωνή του μπορούσε να φτάσει σε περίπου 30.000 ανθρώπους ταυτόχρονα. Το κήρυγμα του Τζόναθαν Έντουαρντς «Αμαρτωλοί στα χέρια ενός οργισμένου Θεού» (1741) έγινε το πιο γνωστό κείμενο της αναβίωσης. Η Αφύπνιση δίχασε εκκλησιάσματα, ενθάρρυνε τους απλούς πιστούς να αμφισβητήσουν τον καθιερωμένο κλήρο και οδήγησε σε νέα κολέγια όπως το Πρίνστον."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1754,
      era: {
        en: "Imperial War",
        el: "Αυτοκρατορικός πόλεμος"
      },
      events: [
        {
          title: {
            en: "The French and Indian War",
            el: "Ο Γαλλοϊνδιανικός Πόλεμος"
          },
          description: {
            en: "Britain and France, each allied with Indigenous nations, fight for control of North America. British victory removes the French threat but leaves London with enormous war debts.",
            el: "Η Βρετανία και η Γαλλία, καθεμία σύμμαχη με ιθαγενή έθνη, μάχονται για τον έλεγχο της Βόρειας Αμερικής. Η βρετανική νίκη απομακρύνει τη γαλλική απειλή, αλλά αφήνει το Λονδίνο με τεράστια πολεμικά χρέη."
          },
          extendedDescription: {
            en: "The war began in the Ohio Valley, where a young Virginia officer, George Washington, clashed with French forces and was forced to surrender Fort Necessity in 1754. It merged into the global Seven Years' War, and the British capture of Quebec in 1759 decided the fate of North America. To pay the debt and the cost of troops to guard the frontier, Britain turned to taxing the colonies — the road that led to revolution.",
            el: "Ο πόλεμος ξεκίνησε στην κοιλάδα του Οχάιο, όπου ένας νεαρός αξιωματικός της Βιρτζίνια, ο Τζορτζ Ουάσινγκτον, συγκρούστηκε με γαλλικές δυνάμεις και αναγκάστηκε να παραδώσει το Φορτ Νεσέσιτι το 1754. Ενσωματώθηκε στον παγκόσμιο Επταετή Πόλεμο, και η βρετανική κατάληψη του Κεμπέκ το 1759 έκρινε την τύχη της Βόρειας Αμερικής. Για να πληρώσει το χρέος και το κόστος των στρατευμάτων που φύλαγαν τα σύνορα, η Βρετανία στράφηκε στη φορολόγηση των αποικιών — ο δρόμος που οδήγησε στην επανάσταση."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1763,
      era: {
        en: "Aftermath of Victory",
        el: "Ο απόηχος της νίκης"
      },
      events: [
        {
          title: {
            en: "Treaty of Paris and the Proclamation Line",
            el: "Η Συνθήκη των Παρισίων και η Γραμμή της Διακήρυξης"
          },
          description: {
            en: "The 1763 Treaty of Paris gives Britain a vast North American empire, but a royal proclamation barring settlement west of the Appalachians angers colonists eager for land.",
            el: "Η Συνθήκη των Παρισίων του 1763 δίνει στη Βρετανία μια τεράστια βορειοαμερικανική αυτοκρατορία, αλλά μια βασιλική διακήρυξη που απαγορεύει τον εποικισμό δυτικά των Απαλαχίων εξοργίζει τους αποίκους που διψούν για γη."
          },
          extendedDescription: {
            en: "France gave up Canada and its lands east of the Mississippi to Britain, and Louisiana west of the river to Spain. The same year, Pontiac's War — a coordinated uprising of Native nations around the Great Lakes — showed the cost of pushing settlers west, and the Proclamation Line was meant to keep the peace. Colonists and land speculators, George Washington among them, saw it as a barrier to their ambitions.",
            el: "Η Γαλλία παραχώρησε τον Καναδά και τα εδάφη της ανατολικά του Μισισιπή στη Βρετανία και τη Λουιζιάνα δυτικά του ποταμού στην Ισπανία. Την ίδια χρονιά, ο Πόλεμος του Πόντιακ — μια συντονισμένη εξέγερση ιθαγενών εθνών γύρω από τις Μεγάλες Λίμνες — έδειξε το κόστος της προώθησης των αποίκων προς τα δυτικά, και η Γραμμή της Διακήρυξης προοριζόταν να διατηρήσει την ειρήνη. Οι άποικοι και οι κερδοσκόποι γης, ανάμεσά τους και ο Τζορτζ Ουάσινγκτον, την είδαν ως φραγμό στις φιλοδοξίες τους."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
