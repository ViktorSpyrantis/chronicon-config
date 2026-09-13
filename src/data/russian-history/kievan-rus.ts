/** Kievan Rus' — Ρως του Κιέβου · Russian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const KIEVAN_RUS = {
  id: "kievan-rus" as const,
  label: {
    en: "Kievan Rus'",
    el: "Ρως του Κιέβου"
  },
  supertitle: {
    en: "Rus' of Kyiv",
    el: "Η Ρως του Κιέβου"
  },
  title: {
    en: "Kievan Rus'",
    el: "Ρως του Κιέβου"
  },
  subtitle: {
    en: "From the traditional calling of Rurik around 862 to the Mongol sack of Kyiv in 1240, Kievan Rus' joined northern river routes, Slavic lands, steppe frontiers, and Byzantine Christianity into one of medieval Europe's great political worlds.",
    el: "Από την παραδοσιακή κλήση του Ρούρικ γύρω στο 862 έως τη μογγολική λεηλασία του Κιέβου το 1240, η Ρως του Κιέβου ένωσε βόρειους ποτάμιους δρόμους, σλαβικές χώρες, στεπικά σύνορα και τον βυζαντινό χριστιανισμό σε έναν από τους μεγάλους πολιτικούς κόσμους της μεσαιωνικής Ευρώπης."
  },
  menuDescription: {
    en: "Rurik's line, Vladimir's baptism and Yaroslav's golden age, until the Mongols came.",
    el: "Η γενιά του Ρούρικ, η βάπτιση του Βλαδίμηρου κι η χρυσή εποχή του Γιαροσλάβου, ώσπου ήρθαν οι Μογγόλοι."
  },
  footerLabel: {
    en: "Kievan Rus' · c. 862-1240",
    el: "Ρως του Κιέβου · περ. 862-1240"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Kievan Rus'",
    el: "Ρως του Κιέβου"
  },
  theme: THEMES.gold,
  timeline: [
    {
      year: 862,
      era: {
        en: "Varangian Beginnings",
        el: "Βαραγγικές απαρχές"
      },
      events: [
        {
          title: {
            en: "Rurik is invited to rule at Novgorod",
            el: "Ο Ρούρικ καλείται να κυβερνήσει στο Νόβγκοροντ"
          },
          description: {
            en: "According to the Primary Chronicle, Slavic and Finnic groups invite the Varangian Rurik and his brothers to bring order to the northern lands.",
            el: "Σύμφωνα με το Πρώτο Χρονικό, σλαβικές και φιννικές ομάδες καλούν τον Βαράγγο Ρούρικ και τους αδελφούς του για να φέρουν τάξη στις βόρειες χώρες."
          },
          extendedDescription: {
            en: "The story is part memory, part dynastic origin legend, but it marks the conventional beginning of Rus' political history. Rurik's name became the foundation for the later Riurikid dynasty, whose princes would rule Kyiv, Novgorod, Vladimir-Suzdal, Galicia-Volhynia, and Moscow.",
            el: "Η αφήγηση είναι εν μέρει μνήμη και εν μέρει δυναστικός ιδρυτικός θρύλος, αλλά σηματοδοτεί τη συμβατική αρχή της πολιτικής ιστορίας της Ρως. Το όνομα του Ρούρικ έγινε θεμέλιο της μεταγενέστερης δυναστείας των Ρουρικιδών, της οποίας οι πρίγκιπες θα κυβερνούσαν το Κίεβο, το Νόβγκοροντ, το Βλαντίμιρ-Σούζνταλ, τη Γαλικία-Βολυνία και τη Μόσχα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 882,
      era: {
        en: "Kyiv Becomes the Center",
        el: "Το Κίεβο γίνεται κέντρο"
      },
      events: [
        {
          title: {
            en: "Oleg seizes Kyiv",
            el: "Ο Όλεγκ καταλαμβάνει το Κίεβο"
          },
          description: {
            en: "Oleg moves south from Novgorod, kills Askold and Dir, and makes Kyiv the strategic center of Rus' on the Dnieper route to Byzantium.",
            el: "Ο Όλεγκ κινείται νότια από το Νόβγκοροντ, σκοτώνει τον Άσκολντ και τον Ντιρ, και καθιστά το Κίεβο στρατηγικό κέντρο της Ρως στη διαδρομή του Δνείπερου προς το Βυζάντιο."
          },
          extendedDescription: {
            en: "Kyiv controlled the middle Dnieper, the tribute-rich lands of the Poliane, and the road toward the Black Sea. The union of northern river networks with the Dnieper axis gave Rus' its first durable political geography.",
            el: "Το Κίεβο έλεγχε τον μέσο Δνείπερο, τις πλούσιες σε φόρο χώρες των Πολιάνων και τον δρόμο προς τον Εύξεινο Πόντο. Η ένωση των βόρειων ποτάμιων δικτύων με τον άξονα του Δνείπερου έδωσε στη Ρως την πρώτη σταθερή πολιτική της γεωγραφία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 907,
      era: {
        en: "Rus' and Byzantium",
        el: "Ρως και Βυζάντιο"
      },
      events: [
        {
          title: {
            en: "Oleg campaigns against Constantinople",
            el: "Ο Όλεγκ εκστρατεύει κατά της Κωνσταντινούπολης"
          },
          description: {
            en: "The chronicle remembers Oleg leading a great expedition against Constantinople and winning favorable trading rights for Rus' merchants.",
            el: "Το χρονικό θυμάται τον Όλεγκ να οδηγεί μεγάλη εκστρατεία κατά της Κωνσταντινούπολης και να εξασφαλίζει ευνοϊκά εμπορικά δικαιώματα για τους εμπόρους της Ρως."
          },
          extendedDescription: {
            en: "The famous image of Oleg nailing his shield to the gates of Constantinople is legendary, but Rus'-Byzantine treaties of the early tenth century show the real issue: controlled access to the empire's markets, safe conduct, tribute, and diplomatic recognition.",
            el: "Η περίφημη εικόνα του Όλεγκ που καρφώνει την ασπίδα του στις πύλες της Κωνσταντινούπολης είναι θρυλική, όμως οι ρωσοβυζαντινές συνθήκες των αρχών του 10ου αιώνα δείχνουν το πραγματικό διακύβευμα: ελεγχόμενη πρόσβαση στις αγορές της αυτοκρατορίας, ασφαλή διέλευση, φόρο και διπλωματική αναγνώριση."
          },
          category: "military"
        }
      ]
    },
    {
      year: 945,
      era: {
        en: "Tribute and Reform",
        el: "Φόρος και μεταρρύθμιση"
      },
      events: [
        {
          title: {
            en: "Igor is killed; Olga reforms tribute",
            el: "Ο Ίγκορ σκοτώνεται· η Όλγα μεταρρυθμίζει τον φόρο"
          },
          description: {
            en: "Prince Igor is killed by the Drevlians after attempting to collect extra tribute. His widow Olga takes revenge and reorganizes tribute collection through fixed stations and obligations.",
            el: "Ο πρίγκιπας Ίγκορ σκοτώνεται από τους Δρεβλιάνους όταν προσπαθεί να συλλέξει πρόσθετο φόρο. Η χήρα του Όλγα εκδικείται και αναδιοργανώνει τη φορολογία μέσω σταθερών σταθμών και υποχρεώσεων."
          },
          extendedDescription: {
            en: "Olga's reforms are among the first signs of administrative consolidation in Rus'. She later visits Constantinople and receives baptism, becoming an important Christian precursor before the official conversion of the realm.",
            el: "Οι μεταρρυθμίσεις της Όλγας είναι από τα πρώτα σημάδια διοικητικής ενοποίησης στη Ρως. Αργότερα επισκέπτεται την Κωνσταντινούπολη και βαπτίζεται, αποτελώντας σημαντική χριστιανική πρόδρομο πριν από τον επίσημο εκχριστιανισμό της χώρας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 965,
      era: {
        en: "Sviatoslav's Wars",
        el: "Οι πόλεμοι του Σβιατοσλάβου"
      },
      events: [
        {
          title: {
            en: "Sviatoslav breaks Khazar power",
            el: "Ο Σβιατοσλάβος συντρίβει τη χαζαρική ισχύ"
          },
          description: {
            en: "Sviatoslav campaigns down the Don and Volga, defeats the Khazars, and destroys major centers including Sarkel and Itil.",
            el: "Ο Σβιατοσλάβος εκστρατεύει κατά μήκος του Ντον και του Βόλγα, νικά τους Χαζάρους και καταστρέφει μεγάλα κέντρα όπως το Σάρκελ και το Ιτίλ."
          },
          extendedDescription: {
            en: "The victory opened the steppe but also removed a buffer between Rus' and nomadic powers such as the Pechenegs. Sviatoslav then turned toward the Balkans, dreaming of a Danubian power center before Byzantine pressure forced him back.",
            el: "Η νίκη άνοιξε τη στέπα, αλλά αφαίρεσε και ένα ενδιάμεσο φράγμα ανάμεσα στη Ρως και νομαδικές δυνάμεις όπως οι Πετσενέγοι. Ο Σβιατοσλάβος στράφηκε έπειτα προς τα Βαλκάνια, ονειρευόμενος κέντρο ισχύος στον Δούναβη πριν η βυζαντινή πίεση τον αναγκάσει να επιστρέψει."
          },
          category: "military"
        }
      ]
    },
    {
      year: 988,
      era: {
        en: "Christianization",
        el: "Εκχριστιανισμός"
      },
      events: [
        {
          title: {
            en: "Vladimir baptizes Rus'",
            el: "Ο Βλαδίμηρος βαπτίζει τη Ρως"
          },
          description: {
            en: "Vladimir the Great accepts Christianity from Byzantium, marries the imperial princess Anna, and orders the baptism of Kyiv.",
            el: "Ο Βλαδίμηρος ο Μέγας δέχεται τον χριστιανισμό από το Βυζάντιο, νυμφεύεται την αυτοκρατορική πριγκίπισσα Άννα και διατάζει τη βάπτιση του Κιέβου."
          },
          extendedDescription: {
            en: "The conversion tied Rus' to the Orthodox Christian world, Byzantine diplomacy, church architecture, literacy, icons, and Slavic liturgy. Pagan practices did not vanish overnight, but the baptism of 988 became the central sacred memory of medieval Rus'.",
            el: "Ο εκχριστιανισμός συνέδεσε τη Ρως με τον ορθόδοξο χριστιανικό κόσμο, τη βυζαντινή διπλωματία, την εκκλησιαστική αρχιτεκτονική, τη γραμματεία, τις εικόνες και τη σλαβική λειτουργία. Οι παγανιστικές πρακτικές δεν εξαφανίστηκαν αμέσως, αλλά η βάπτιση του 988 έγινε η κεντρική ιερή μνήμη της μεσαιωνικής Ρως."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1019,
      era: {
        en: "Yaroslav the Wise",
        el: "Ο Γιαροσλάβος ο Σοφός"
      },
      events: [
        {
          title: {
            en: "Yaroslav consolidates the Kievan realm",
            el: "Ο Γιαροσλάβος εδραιώνει το κράτος του Κιέβου"
          },
          description: {
            en: "After dynastic warfare, Yaroslav the Wise secures Kyiv and presides over one of the high points of Rus' power, law, learning, and diplomacy.",
            el: "Μετά από δυναστικούς πολέμους, ο Γιαροσλάβος ο Σοφός εξασφαλίζει το Κίεβο και προεδρεύει σε μία από τις κορυφώσεις της ισχύος, του δικαίου, της μάθησης και της διπλωματίας της Ρως."
          },
          extendedDescription: {
            en: "Yaroslav promoted the building of Saint Sophia Cathedral, supported translation and book culture, and was associated with the Russkaya Pravda law code. His daughters and relatives married into royal houses from France to Hungary and Norway.",
            el: "Ο Γιαροσλάβος προώθησε την ανέγερση του καθεδρικού της Αγίας Σοφίας, στήριξε τη μετάφραση και την κουλτούρα του βιβλίου, και συνδέθηκε με τη Ρωσική Αλήθεια, τον κώδικα νόμων. Οι κόρες και συγγενείς του παντρεύτηκαν σε βασιλικούς οίκους από τη Γαλλία έως την Ουγγαρία και τη Νορβηγία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1054,
      era: {
        en: "Partition of the Princes",
        el: "Η διανομή των πριγκίπων"
      },
      events: [
        {
          title: {
            en: "Yaroslav's sons inherit a divided realm",
            el: "Οι γιοι του Γιαροσλάβου κληρονομούν διαιρεμένο κράτος"
          },
          description: {
            en: "Yaroslav's death leaves Rus' divided among his sons, creating a rotating seniority system centered on Kyiv but increasingly strained by family rivalry.",
            el: "Ο θάνατος του Γιαροσλάβου αφήνει τη Ρως μοιρασμένη στους γιους του, δημιουργώντας ένα σύστημα διαδοχής κατά αρχαιότητα με κέντρο το Κίεβο αλλά όλο και πιο πιεσμένο από οικογενειακούς ανταγωνισμούς."
          },
          extendedDescription: {
            en: "The system could coordinate princely rule in theory, but in practice it encouraged competition over Kyiv, Novgorod, Chernigov, Pereiaslav, Smolensk, and other centers. The political map of Rus' became more regional and more dynamic.",
            el: "Το σύστημα μπορούσε θεωρητικά να συντονίσει την πριγκιπική εξουσία, αλλά στην πράξη ενθάρρυνε τον ανταγωνισμό για το Κίεβο, το Νόβγκοροντ, το Τσερνίγκοφ, το Περεγιασλάβλ, το Σμολένσκ και άλλα κέντρα. Ο πολιτικός χάρτης της Ρως έγινε πιο περιφερειακός και πιο δυναμικός."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1097,
      era: {
        en: "Princely Congresses",
        el: "Πριγκιπικά συνέδρια"
      },
      events: [
        {
          title: {
            en: "The Congress of Liubech tries to end civil war",
            el: "Το συνέδριο του Λιούμπετς προσπαθεί να τερματίσει τον εμφύλιο"
          },
          description: {
            en: "Rus' princes meet at Liubech and agree that each should hold his patrimonial land, an attempt to reduce dynastic conflict and focus on the steppe threat.",
            el: "Οι πρίγκιπες της Ρως συναντώνται στο Λιούμπετς και συμφωνούν ότι καθένας πρέπει να κρατά την πατρική του γη, σε προσπάθεια να μειωθεί η δυναστική σύγκρουση και να αντιμετωπιστεί η απειλή της στέπας."
          },
          extendedDescription: {
            en: "The phrase 'let each hold his patrimony' marks a shift away from a single Kievan inheritance toward hereditary regional principalities. It was a practical compromise, but it also made the fragmentation of Rus' more permanent.",
            el: "Η φράση «ας κρατά ο καθένας την πατρική του κτήση» σηματοδοτεί μετατόπιση από μία ενιαία κληρονομιά του Κιέβου προς κληρονομικές περιφερειακές ηγεμονίες. Ήταν πρακτικός συμβιβασμός, αλλά έκανε και τον κατακερματισμό της Ρως πιο μόνιμο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1113,
      era: {
        en: "Vladimir Monomakh",
        el: "Βλαδίμηρος Μονομάχος"
      },
      events: [
        {
          title: {
            en: "Vladimir Monomakh takes Kyiv",
            el: "Ο Βλαδίμηρος Μονομάχος αναλαμβάνει το Κίεβο"
          },
          description: {
            en: "After unrest in Kyiv, Vladimir Monomakh becomes grand prince and restores a measure of unity, authority, and military confidence.",
            el: "Μετά από αναταραχή στο Κίεβο, ο Βλαδίμηρος Μονομάχος γίνεται μέγας πρίγκιπας και αποκαθιστά ένα μέτρο ενότητας, κύρους και στρατιωτικής αυτοπεποίθησης."
          },
          extendedDescription: {
            en: "Monomakh's reign was remembered as a late golden age. He campaigned against the Cumans, issued legal reforms limiting abuses by moneylenders, and left an Instruction to his children that became a classic of princely moral writing.",
            el: "Η βασιλεία του Μονομάχου μνημονεύτηκε ως όψιμη χρυσή εποχή. Εκστράτευσε κατά των Κουμάνων, εξέδωσε νομικές μεταρρυθμίσεις που περιόριζαν τις καταχρήσεις των τοκογλύφων και άφησε τη Διδαχή προς τα παιδιά του, κλασικό κείμενο πριγκιπικής ηθικής γραμματείας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1169,
      era: {
        en: "Decline of Kyiv",
        el: "Παρακμή του Κιέβου"
      },
      events: [
        {
          title: {
            en: "Andrei Bogoliubsky sacks Kyiv",
            el: "Ο Αντρέι Μπογκολιούμπσκι λεηλατεί το Κίεβο"
          },
          description: {
            en: "Forces of Andrei Bogoliubsky of Vladimir-Suzdal capture and sack Kyiv, signaling that political gravity is moving toward regional principalities.",
            el: "Οι δυνάμεις του Αντρέι Μπογκολιούμπσκι του Βλαντίμιρ-Σούζνταλ καταλαμβάνουν και λεηλατούν το Κίεβο, δείχνοντας ότι το πολιτικό βάρος μετακινείται προς τις περιφερειακές ηγεμονίες."
          },
          extendedDescription: {
            en: "Kyiv remained prestigious, but it was no longer the unquestioned center. Vladimir-Suzdal in the northeast, Galicia-Volhynia in the southwest, Novgorod in the north, and other principalities developed their own political identities.",
            el: "Το Κίεβο παρέμεινε περίβλεπτο, αλλά δεν ήταν πλέον αδιαμφισβήτητο κέντρο. Το Βλαντίμιρ-Σούζνταλ στα βορειοανατολικά, η Γαλικία-Βολυνία στα νοτιοδυτικά, το Νόβγκοροντ στον βορρά και άλλες ηγεμονίες ανέπτυξαν δικές τους πολιτικές ταυτότητες."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1223,
      era: {
        en: "Mongol First Contact",
        el: "Πρώτη επαφή με τους Μογγόλους"
      },
      events: [
        {
          title: {
            en: "Rus' princes are defeated at the Kalka River",
            el: "Οι πρίγκιπες της Ρως ηττώνται στον ποταμό Κάλκα"
          },
          description: {
            en: "A coalition of Rus' princes and Cuman allies confronts a Mongol reconnaissance army and is crushed at the Kalka River.",
            el: "Συνασπισμός πριγκίπων της Ρως και Κουμάνων συμμάχων αντιμετωπίζει μογγολικό αναγνωριστικό στρατό και συντρίβεται στον ποταμό Κάλκα."
          },
          extendedDescription: {
            en: "The Mongols withdrew after the victory, so the disaster did not immediately end Rus'. Yet Kalka revealed the weakness of divided princely coordination and foreshadowed the far larger invasion that would follow under Batu Khan.",
            el: "Οι Μογγόλοι αποσύρθηκαν μετά τη νίκη, οπότε η καταστροφή δεν τερμάτισε αμέσως τη Ρως. Ωστόσο η Κάλκα αποκάλυψε την αδυναμία συντονισμού των διαιρεμένων πριγκίπων και προανήγγειλε την πολύ μεγαλύτερη εισβολή που θα ακολουθούσε υπό τον Μπατού Χαν."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1240,
      era: {
        en: "Mongol Conquest",
        el: "Μογγολική κατάκτηση"
      },
      events: [
        {
          title: {
            en: "Batu Khan sacks Kyiv",
            el: "Ο Μπατού Χαν λεηλατεί το Κίεβο"
          },
          description: {
            en: "Mongol forces under Batu Khan storm Kyiv in December 1240, devastating the old capital and ending the Kievan period as a political order.",
            el: "Μογγολικές δυνάμεις υπό τον Μπατού Χαν κυριεύουν το Κίεβο τον Δεκέμβριο του 1240, καταστρέφοντας την παλαιά πρωτεύουσα και τερματίζοντας την περίοδο του Κιέβου ως πολιτική τάξη."
          },
          extendedDescription: {
            en: "The fall of Kyiv did not erase Rus' culture, Orthodoxy, or the Riurikid dynasties, but it changed their world. The western principalities, Novgorod, Vladimir-Suzdal, and later Moscow would navigate Mongol overlordship in different ways.",
            el: "Η πτώση του Κιέβου δεν εξαφάνισε τον πολιτισμό της Ρως, την Ορθοδοξία ή τις δυναστείες των Ρουρικιδών, αλλά άλλαξε τον κόσμο τους. Οι δυτικές ηγεμονίες, το Νόβγκοροντ, το Βλαντίμιρ-Σούζνταλ και αργότερα η Μόσχα θα αντιμετώπιζαν τη μογγολική επικυριαρχία με διαφορετικούς τρόπους."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
