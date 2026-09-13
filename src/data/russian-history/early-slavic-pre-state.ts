/** Early Slavic / Pre-State Period — Πρώιμη σλαβική / προκρατική περίοδος · Russian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const EARLY_SLAVIC_PRE_STATE = {
  id: "early-slavic-pre-state" as const,
  label: {
    en: "Early Slavic / Pre-State Period",
    el: "Πρώιμη σλαβική / προκρατική περίοδος"
  },
  supertitle: {
    en: "Before Rus'",
    el: "Πριν από τη Ρως"
  },
  title: {
    en: "Early Slavic / Pre-State Period",
    el: "Πρώιμη σλαβική / προκρατική περίοδος"
  },
  subtitle: {
    en: "Before c. 862 CE, the future Russian lands were a mosaic of forest peoples, Slavic-speaking communities, Finnic neighbors, steppe powers, and northern river routes. Slide across the centuries before the traditional beginning of Rus' political history.",
    el: "Πριν από περίπου το 862 μ.Χ., οι μελλοντικές ρωσικές χώρες ήταν μωσαϊκό δασικών λαών, σλαβόφωνων κοινοτήτων, φιννικών γειτόνων, δυνάμεων της στέπας και βόρειων ποτάμιων δρόμων. Μετακινηθείτε στους αιώνες πριν από τη συμβατική αρχή της πολιτικής ιστορίας της Ρως."
  },
  menuDescription: {
    en: "Slavs, Finns, steppe nomads and Varangians, in the centuries before Rus'.",
    el: "Σλάβοι, Φίννοι, νομάδες της στέπας και Βάραγγοι, στους αιώνες πριν από τη Ρως."
  },
  footerLabel: {
    en: "Early Slavic / Pre-State Period · before c. 862 CE",
    el: "Πρώιμη σλαβική / προκρατική περίοδος · πριν από περ. 862 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Early Slavic / Pre-State Period",
    el: "Πρώιμη σλαβική / προκρατική περίοδος"
  },
  theme: THEMES.forest,
  timeline: [
    {
      year: -500,
      era: {
        en: "Forest-Zone Background",
        el: "Υπόβαθρο της δασικής ζώνης"
      },
      events: [
        {
          title: {
            en: "Iron Age communities occupy the northern forest lands",
            el: "Κοινότητες της Εποχής του Σιδήρου κατοικούν στα βόρεια δάση"
          },
          description: {
            en: "Across the Dnieper, Dvina, Oka, and Volga forest zones, small farming, hunting, and fishing communities form the deep archaeological background for later Slavic, Baltic, and Finnic worlds.",
            el: "Στις δασικές ζώνες του Δνείπερου, του Ντβίνα, του Όκα και του Βόλγα, μικρές αγροτικές, κυνηγετικές και αλιευτικές κοινότητες διαμορφώνουν το βαθύ αρχαιολογικό υπόβαθρο των μεταγενέστερων σλαβικών, βαλτικών και φιννικών κόσμων."
          },
          extendedDescription: {
            en: "There is no Russian state, and no single people can be projected back into this period. The future heartlands of Rus' are a mosaic of river valleys, mixed forests, shifting clearings, and long-distance exchange routes linking the Baltic, the Black Sea steppe, and the Ural-Volga region.",
            el: "Δεν υπάρχει ακόμη ρωσικό κράτος και κανένας ενιαίος λαός δεν μπορεί να προβληθεί απευθείας σε αυτή την περίοδο. Οι μελλοντικοί πυρήνες της Ρως είναι μωσαϊκό από ποτάμιες κοιλάδες, μεικτά δάση, μετακινούμενα ξέφωτα και μακρινά δίκτυα ανταλλαγών που συνδέουν τη Βαλτική, τη στέπα του Εύξεινου Πόντου και την περιοχή Ουραλίων-Βόλγα."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 200,
      era: {
        en: "Proto-Slavic Formation",
        el: "Διαμόρφωση των πρωτοσλαβικών ομάδων"
      },
      events: [
        {
          title: {
            en: "Proto-Slavic speech communities consolidate",
            el: "Σταθεροποιούνται πρωτοσλαβικές γλωσσικές κοινότητες"
          },
          description: {
            en: "Between the upper Dnieper, Pripet marshes, and neighboring forest-steppe, related dialect communities gradually become recognizable as Proto-Slavic.",
            el: "Μεταξύ του άνω Δνείπερου, των ελών του Πρίπιατ και της γειτονικής δασοστέπας, συγγενείς διάλεκτοι γίνονται σταδιακά αναγνωρίσιμες ως πρωτοσλαβικές."
          },
          extendedDescription: {
            en: "The process is linguistic and cultural rather than political. Archaeological labels remain debated, but the broad picture is of dispersed villages, slash-and-burn cultivation, livestock keeping, river travel, and contact with Baltic, Germanic, Iranian, and Finnic-speaking neighbors.",
            el: "Η διαδικασία είναι γλωσσική και πολιτισμική, όχι πολιτική. Οι αρχαιολογικές ονομασίες παραμένουν αντικείμενο συζήτησης, αλλά η γενική εικόνα είναι διάσπαρτα χωριά, καλλιέργεια με εκχέρσωση και καύση, κτηνοτροφία, ποτάμιες μετακινήσεις και επαφές με βαλτικούς, γερμανικούς, ιρανικούς και φιννικούς γείτονες."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 375,
      era: {
        en: "Hunnic Shock",
        el: "Το πλήγμα των Ούννων"
      },
      events: [
        {
          title: {
            en: "The steppe upheaval reaches eastern Europe",
            el: "Η αναστάτωση της στέπας φτάνει στην ανατολική Ευρώπη"
          },
          description: {
            en: "The Huns break Gothic power north of the Black Sea, unsettling the steppe and forest-steppe frontier where Slavic-speaking communities live among Goths, Sarmatians, and other peoples.",
            el: "Οι Ούννοι διαλύουν τη γοτθική ισχύ βόρεια του Εύξεινου Πόντου, αναστατώνοντας το όριο στέπας και δασοστέπας όπου σλαβόφωνες κοινότητες ζουν ανάμεσα σε Γότθους, Σαρμάτες και άλλους λαούς."
          },
          extendedDescription: {
            en: "This shock is part of the wider Migration Period. Population movements, tribute networks, and military pressure open space for Slavic expansion in later centuries, though the communities involved are still clan-based and village-centered rather than state-forming.",
            el: "Το πλήγμα αυτό είναι μέρος της ευρύτερης Εποχής των Μεταναστεύσεων. Μετακινήσεις πληθυσμών, δίκτυα φόρου και στρατιωτική πίεση ανοίγουν χώρο για σλαβική εξάπλωση στους επόμενους αιώνες, αν και οι κοινότητες παραμένουν βασισμένες σε γένη και χωριά, όχι σε κρατικούς θεσμούς."
          },
          category: "military"
        }
      ]
    },
    {
      year: 500,
      era: {
        en: "Early Slavic Expansion",
        el: "Πρώιμη σλαβική εξάπλωση"
      },
      events: [
        {
          title: {
            en: "Slavic groups spread through river corridors",
            el: "Σλαβικές ομάδες εξαπλώνονται μέσω ποτάμιων διαδρόμων"
          },
          description: {
            en: "By the sixth century, Slavic groups are visible from the middle Danube to the Dnieper and beyond, moving along rivers and forest-steppe edges.",
            el: "Τον 6ο αιώνα, σλαβικές ομάδες είναι πλέον ορατές από τον μέσο Δούναβη έως τον Δνείπερο και πέρα από αυτόν, κινούμενες κατά μήκος ποταμών και ορίων δασοστέπας."
          },
          extendedDescription: {
            en: "Byzantine authors describe Sclaveni and Antes as numerous, mobile, and difficult to subdue. Their settlements are typically small and lightly built, suited to shifting cultivation and local autonomy. This is the human landscape from which later East Slavic tribal groupings will emerge.",
            el: "Βυζαντινοί συγγραφείς περιγράφουν τους Σκλαβηνούς και τους Άντες ως πολυάριθμους, ευκίνητους και δύσκολους στην υποταγή. Οι οικισμοί τους είναι συνήθως μικροί και ελαφριά κατασκευασμένοι, κατάλληλοι για μετακινούμενη καλλιέργεια και τοπική αυτονομία. Από αυτό το ανθρώπινο τοπίο θα αναδυθούν οι μεταγενέστερες ανατολικοσλαβικές φυλετικές ομάδες."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 560,
      era: {
        en: "Avars and Antes",
        el: "Άβαροι και Άντες"
      },
      events: [
        {
          title: {
            en: "Avar power reshapes Slavic politics",
            el: "Η αβαρική ισχύς αναδιαμορφώνει τη σλαβική πολιτική"
          },
          description: {
            en: "The Avar Khaganate dominates much of the Danube basin and pressures Slavic and Antic groups, drawing some into raiding, tribute, and military service.",
            el: "Το Χαγανάτο των Αβάρων κυριαρχεί σε μεγάλο μέρος της λεκάνης του Δούναβη και πιέζει σλαβικές και αντικές ομάδες, εντάσσοντας ορισμένες σε επιδρομές, φόρο και στρατιωτική υπηρεσία."
          },
          extendedDescription: {
            en: "The Antes, often connected with the eastern Slavic frontier, vanish from written sources after the early seventh century. Their disappearance does not mean population collapse; it likely reflects the end of a political label in a world of fast-changing alliances.",
            el: "Οι Άντες, που συχνά συνδέονται με το ανατολικό σλαβικό όριο, εξαφανίζονται από τις γραπτές πηγές μετά τις αρχές του 7ου αιώνα. Αυτό δεν σημαίνει απαραίτητα πληθυσμιακή κατάρρευση· πιθανότερα δείχνει το τέλος μιας πολιτικής ονομασίας σε έναν κόσμο γρήγορα μεταβαλλόμενων συμμαχιών."
          },
          category: "political"
        }
      ]
    },
    {
      year: 650,
      era: {
        en: "Khazar Frontier",
        el: "Το χαζαρικό σύνορο"
      },
      events: [
        {
          title: {
            en: "The Khazar Khaganate controls the southern steppe",
            el: "Το Χαγανάτο των Χαζάρων ελέγχει τη νότια στέπα"
          },
          description: {
            en: "Khazar power rises between the lower Volga, Don, and north Caspian, placing many forest-steppe peoples in a world of tribute, trade, and diplomacy.",
            el: "Η ισχύς των Χαζάρων ανέρχεται μεταξύ κάτω Βόλγα, Ντον και βόρειας Κασπίας, εντάσσοντας πολλούς λαούς της δασοστέπας σε έναν κόσμο φόρου, εμπορίου και διπλωματίας."
          },
          extendedDescription: {
            en: "Several East Slavic groups later remembered in the Primary Chronicle, including the Poliane and Severiane, lived near this Khazar sphere. Tribute obligations and steppe contacts helped shape the political geography that Rus' leaders would inherit.",
            el: "Αρκετές ανατολικοσλαβικές ομάδες που αργότερα μνημονεύονται στο Πρώτο Χρονικό, όπως οι Πολιάνοι και οι Σεβεριάνοι, ζούσαν κοντά σε αυτή τη χαζαρική σφαίρα. Οι υποχρεώσεις φόρου και οι επαφές με τη στέπα βοήθησαν να διαμορφωθεί η πολιτική γεωγραφία που θα κληρονομούσαν οι ηγεμόνες της Ρως."
          },
          category: "political"
        }
      ]
    },
    {
      year: 750,
      era: {
        en: "East Slavic Tribal World",
        el: "Ο ανατολικοσλαβικός φυλετικός κόσμος"
      },
      events: [
        {
          title: {
            en: "Named East Slavic groupings take shape",
            el: "Διαμορφώνονται ονομαστές ανατολικοσλαβικές ομάδες"
          },
          description: {
            en: "Poliane, Drevlians, Severiane, Krivichi, Ilmen Slavs, Vyatichi, Radimichi, and others occupy river basins from the middle Dnieper to Lake Ilmen and the upper Volga.",
            el: "Πολιάνοι, Δρεβλιάνοι, Σεβεριάνοι, Κριβίτσι, Σλάβοι του Ίλμεν, Βιάτιτσι, Ραντίμιτσι και άλλοι κατοικούν λεκάνες ποταμών από τον μέσο Δνείπερο έως τη λίμνη Ίλμεν και τον άνω Βόλγα."
          },
          extendedDescription: {
            en: "These are not states in the later sense. They are regional communities tied to rivers, forests, tribute routes, cult sites, kinship, and seasonal economies. Their diversity is essential to early Russian history: Rus' will be built over this patchwork rather than simply replacing it.",
            el: "Δεν πρόκειται για κράτη με τη μεταγενέστερη έννοια. Είναι περιφερειακές κοινότητες δεμένες με ποτάμια, δάση, διαδρομές φόρου, ιερούς τόπους, συγγένεια και εποχικές οικονομίες. Η ποικιλία τους είναι ουσιώδης για την πρώιμη ρωσική ιστορία: η Ρως θα οικοδομηθεί πάνω σε αυτό το μωσαϊκό και όχι απλώς θα το αντικαταστήσει."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 800,
      era: {
        en: "Northern Trade Routes",
        el: "Βόρειες εμπορικές οδοί"
      },
      events: [
        {
          title: {
            en: "Baltic, Volga, and Dnieper routes intensify",
            el: "Εντείνονται οι οδοί Βαλτικής, Βόλγα και Δνείπερου"
          },
          description: {
            en: "Scandinavian traders and warriors, Finnic communities, Slavic settlements, and steppe powers become tied together by fur, wax, slaves, silver, and river travel.",
            el: "Σκανδιναβοί έμποροι και πολεμιστές, φιννικές κοινότητες, σλαβικοί οικισμοί και δυνάμεις της στέπας συνδέονται μέσω γούνας, κεριού, δούλων, αργύρου και ποτάμιων μετακινήσεων."
          },
          extendedDescription: {
            en: "The route from the Varangians to the Greeks was not a single road but a chain of waterways, portages, fortified points, and local bargains. Places such as Ladoga and the Volkhov-Ilmen network became especially important in joining the Baltic world to the future Dnieper axis.",
            el: "Η οδός από τους Βαράγγους στους Έλληνες δεν ήταν ένας μοναδικός δρόμος αλλά αλυσίδα υδάτινων διαδρομών, μεταφορών από ξηρά, οχυρωμένων σημείων και τοπικών συμφωνιών. Τόποι όπως η Λάντογκα και το δίκτυο Βόλχοβ-Ίλμεν έγιναν ιδιαίτερα σημαντικοί στη σύνδεση του βαλτικού κόσμου με τον μελλοντικό άξονα του Δνείπερου."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 839,
      era: {
        en: "First Rus' Notices",
        el: "Πρώτες μνείες της Ρως"
      },
      events: [
        {
          title: {
            en: "The name Rus' appears in diplomatic record",
            el: "Το όνομα Ρως εμφανίζεται σε διπλωματική μαρτυρία"
          },
          description: {
            en: "Envoys called Rhos appear at the court of Louis the Pious after visiting Constantinople, one of the first written signs of the northern trading-warrior network that will soon be called Rus'.",
            el: "Απεσταλμένοι που ονομάζονται Rhos εμφανίζονται στην αυλή του Λουδοβίκου του Ευσεβούς μετά από επίσκεψη στην Κωνσταντινούπολη, μία από τις πρώτες γραπτές ενδείξεις του βόρειου εμπορικού και πολεμικού δικτύου που σύντομα θα ονομαστεί Ρως."
          },
          extendedDescription: {
            en: "The Frankish annals identify these envoys as Swedes, which is central to the long debate over Scandinavian and Slavic roles in the origins of Rus'. Whatever their exact identity, the notice shows that the Baltic-Dnieper-Black Sea connection was already plugged into Byzantine and western diplomacy before the traditional date of 862.",
            el: "Τα φραγκικά χρονικά ταυτίζουν τους απεσταλμένους με Σουηδούς, γεγονός κεντρικό στη μακρά συζήτηση για τον σκανδιναβικό και τον σλαβικό ρόλο στις απαρχές της Ρως. Όποια κι αν ήταν η ακριβής τους ταυτότητα, η μαρτυρία δείχνει ότι η σύνδεση Βαλτικής-Δνείπερου-Εύξεινου Πόντου είχε ήδη ενταχθεί στη βυζαντινή και δυτική διπλωματία πριν από την παραδοσιακή χρονολογία του 862."
          },
          category: "political"
        }
      ]
    },
    {
      year: 859,
      era: {
        en: "On the Eve of State Formation",
        el: "Στις παραμονές της κρατικής συγκρότησης"
      },
      events: [
        {
          title: {
            en: "Tribute networks precede the invitation of the Varangians",
            el: "Δίκτυα φόρου προηγούνται της πρόσκλησης των Βαράγγων"
          },
          description: {
            en: "The Primary Chronicle presents northern Slavic and Finnic groups paying tribute to Varangians, while other East Slavic groups remain within or near the Khazar tribute world.",
            el: "Το Πρώτο Χρονικό παρουσιάζει βόρειες σλαβικές και φιννικές ομάδες να πληρώνουν φόρο σε Βαράγγους, ενώ άλλες ανατολικοσλαβικές ομάδες παραμένουν μέσα ή κοντά στον χάζαρικο κόσμο του φόρου."
          },
          extendedDescription: {
            en: "This is the threshold moment before the conventional beginning of Rus' political history in 862. Whether read as legend, memory, or compressed political tradition, the story points to a real landscape of tribute, river control, multiethnic settlements, and competition among local elites.",
            el: "Αυτή είναι η οριακή στιγμή πριν από τη συμβατική αρχή της πολιτικής ιστορίας της Ρως το 862. Είτε διαβαστεί ως θρύλος, είτε ως μνήμη, είτε ως συμπυκνωμένη πολιτική παράδοση, η αφήγηση δείχνει ένα πραγματικό τοπίο φόρου, ελέγχου ποταμών, πολυεθνικών οικισμών και ανταγωνισμού τοπικών ελίτ."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
