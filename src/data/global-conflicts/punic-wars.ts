/** Punic Wars — Καρχηδονιακοί Πόλεμοι · Global Conflicts */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const PUNIC_WARS = {
  id: "punic-wars" as const,
  label: {
    en: "Punic Wars",
    el: "Καρχηδονιακοί Πόλεμοι"
  },
  supertitle: {
    en: "Rome against Carthage",
    el: "Ρώμη εναντίον Καρχηδόνας"
  },
  title: {
    en: "The Punic Wars",
    el: "Οι Καρχηδονιακοί Πόλεμοι"
  },
  subtitle: {
    en: "From the first clash over Sicily and the sea-battles that made Rome a naval power, through Hannibal's crossing of the Alps, the slaughter at Cannae and the long duel that carried the war from Italy to Spain and Africa, to Scipio's victory at Zama and the final, total destruction of Carthage. Slide across a century in which two Mediterranean powers fought three times for survival — and Rome emerged the master of the western world.",
    el: "Από την πρώτη σύγκρουση για τη Σικελία και τις ναυμαχίες που έκαναν τη Ρώμη ναυτική δύναμη, μέσα από το πέρασμα του Αννίβα στις Άλπεις, τη σφαγή στις Κάννες και τη μακρά μονομαχία που μετέφερε τον πόλεμο από την Ιταλία στην Ισπανία και την Αφρική, ως τη νίκη του Σκιπίωνα στη Ζάμα και την τελική, ολοκληρωτική καταστροφή της Καρχηδόνας. Μετακινηθείτε μέσα σε έναν αιώνα όπου δύο μεσογειακές δυνάμεις πολέμησαν τρεις φορές για την επιβίωσή τους — και η Ρώμη αναδείχθηκε κυρίαρχος του δυτικού κόσμου."
  },
  menuDescription: {
    en: "A century of war between Rome and Carthage, from Sicily and Hannibal to the razing of Carthage.",
    el: "Ένας αιώνας πολέμου Ρώμης και Καρχηδόνας, από τη Σικελία και τον Αννίβα ως την ισοπέδωση της Καρχηδόνας."
  },
  footerLabel: {
    en: "Punic Wars · 264–146 BC",
    el: "Καρχηδονιακοί Πόλεμοι · 264–146 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Punic Wars",
    el: "Οι Καρχηδονιακοί Πόλεμοι"
  },
  theme: THEMES.bronze,
  timeline: [
    {
      year: -264,
      era: {
        en: "The First Punic War",
        el: "Ο Πρώτος Καρχηδονιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "War erupts over Sicily",
            el: "Ξεσπά πόλεμος για τη Σικελία"
          },
          description: {
            en: "A quarrel over the city of Messana draws Rome and Carthage into their first war, fought for the island of Sicily.",
            el: "Μια διαμάχη για την πόλη της Μεσσάνας σύρει τη Ρώμη και την Καρχηδόνα στον πρώτο τους πόλεμο, για το νησί της Σικελίας."
          },
          extendedDescription: {
            en: "Rome, master of the Italian peninsula, and Carthage, the great maritime empire of the western Mediterranean, had long avoided each other. When Roman troops crossed to Sicily to aid the Mamertines of Messana, the two powers collided. What began as a local dispute became a struggle for the richest island in the sea, and the longest continuous war the ancient world had yet seen.",
            el: "Η Ρώμη, κυρίαρχος της ιταλικής χερσονήσου, και η Καρχηδόνα, η μεγάλη ναυτική αυτοκρατορία της δυτικής Μεσογείου, είχαν επί μακρόν αποφύγει η μία την άλλη. Όταν ρωμαϊκά στρατεύματα πέρασαν στη Σικελία για να βοηθήσουν τους Μαμερτίνους της Μεσσάνας, οι δύο δυνάμεις συγκρούστηκαν. Ό,τι ξεκίνησε ως τοπική διαφορά έγινε αγώνας για το πλουσιότερο νησί της θάλασσας, και ο μακρύτερος αδιάκοπος πόλεμος που είχε δει ως τότε ο αρχαίος κόσμος."
          },
          category: "military"
        }
      ]
    },
    {
      year: -260,
      era: {
        en: "The First Punic War",
        el: "Ο Πρώτος Καρχηδονιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Rome takes to the sea at Mylae",
            el: "Η Ρώμη βγαίνει στη θάλασσα στις Μύλες"
          },
          description: {
            en: "Building its first great fleet, Rome defeats the Carthaginian navy at Mylae with the boarding-bridge called the corvus.",
            el: "Χτίζοντας τον πρώτο μεγάλο στόλο της, η Ρώμη νικά το καρχηδονιακό ναυτικό στις Μύλες με τη γέφυρα εφόδου που ονομαζόταν κόραξ."
          },
          extendedDescription: {
            en: "Carthage ruled the waves, so Rome — a land power — built a war fleet almost from nothing, reputedly copying a wrecked Carthaginian ship. To turn sea-fights into the infantry battles it knew, Rome fitted its ships with the corvus, a spiked gangway that pinned an enemy vessel and let legionaries storm aboard. At Mylae the device won Rome its first naval victory and the confidence to contest the sea itself.",
            el: "Η Καρχηδόνα κυριαρχούσε στα κύματα, γι' αυτό η Ρώμη — μια χερσαία δύναμη — έχτισε πολεμικό στόλο σχεδόν από το τίποτα, αντιγράφοντας κατά την παράδοση ένα ναυαγισμένο καρχηδονιακό πλοίο. Για να μετατρέψει τις ναυμαχίες στις μάχες πεζικού που γνώριζε, η Ρώμη εφοδίασε τα πλοία της με τον κόρακα, μια ακιδωτή αποβάθρα που κάρφωνε το εχθρικό σκάφος κι επέτρεπε στους λεγεωνάριους να εφορμήσουν. Στις Μύλες η επινόηση χάρισε στη Ρώμη την πρώτη της ναυτική νίκη."
          },
          category: "military"
        }
      ]
    },
    {
      year: -256,
      era: {
        en: "The First Punic War",
        el: "Ο Πρώτος Καρχηδονιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Regulus invades Africa",
            el: "Ο Ρήγουλος εισβάλλει στην Αφρική"
          },
          description: {
            en: "A Roman army under Regulus lands in Africa but is crushed the next year outside Carthage itself.",
            el: "Ρωμαϊκός στρατός υπό τον Ρήγουλο αποβιβάζεται στην Αφρική, όμως συντρίβεται τον επόμενο χρόνο έξω από την ίδια την Καρχηδόνα."
          },
          extendedDescription: {
            en: "Emboldened by success at sea, Rome carried the war to Africa. Regulus won early victories, but demanded such harsh terms that Carthage fought on. Hiring the Spartan mercenary Xanthippus, the Carthaginians remade their army and destroyed the Roman force in 255, capturing Regulus. The gamble had failed, and the war returned to the grinding attrition of Sicily and the sea.",
            el: "Ενθαρρυμένη από την επιτυχία στη θάλασσα, η Ρώμη μετέφερε τον πόλεμο στην Αφρική. Ο Ρήγουλος κέρδισε πρώιμες νίκες, όμως απαίτησε τόσο σκληρούς όρους ώστε η Καρχηδόνα συνέχισε να πολεμά. Προσλαμβάνοντας τον Σπαρτιάτη μισθοφόρο Ξάνθιππο, οι Καρχηδόνιοι ανασυγκρότησαν τον στρατό τους και κατέστρεψαν τη ρωμαϊκή δύναμη το 255, αιχμαλωτίζοντας τον Ρήγουλο. Το ρίσκο είχε αποτύχει, και ο πόλεμος επέστρεψε στον φθοροποιό αγώνα της Σικελίας και της θάλασσας."
          },
          category: "military"
        }
      ]
    },
    {
      year: -241,
      era: {
        en: "The First Punic War",
        el: "Ο Πρώτος Καρχηδονιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Victory at the Aegates Islands",
            el: "Νίκη στις Αιγάτες Νήσους"
          },
          description: {
            en: "A new Roman fleet destroys Carthage's navy at the Aegates Islands, ending the First Punic War.",
            el: "Ένας νέος ρωμαϊκός στόλος καταστρέφει το ναυτικό της Καρχηδόνας στις Αιγάτες Νήσους, τερματίζοντας τον Πρώτο Καρχηδονιακό Πόλεμο."
          },
          extendedDescription: {
            en: "After more than twenty years and terrible losses of ships and men, private citizens funded a last Roman fleet. It caught the Carthaginian navy off western Sicily and shattered it. Exhausted, Carthage sued for peace, surrendering Sicily — Rome's first overseas province — and a vast indemnity. Rome had won its first great war and become a power beyond Italy.",
            el: "Έπειτα από πάνω από είκοσι χρόνια και τρομερές απώλειες πλοίων και ανδρών, ιδιώτες πολίτες χρηματοδότησαν έναν τελευταίο ρωμαϊκό στόλο. Αυτός αιφνιδίασε το καρχηδονιακό ναυτικό στα δυτικά της Σικελίας και το συνέτριψε. Εξαντλημένη, η Καρχηδόνα ζήτησε ειρήνη, παραδίδοντας τη Σικελία — την πρώτη υπερπόντια επαρχία της Ρώμης — και τεράστια αποζημίωση. Η Ρώμη είχε κερδίσει τον πρώτο μεγάλο πόλεμό της."
          },
          category: "political"
        }
      ]
    },
    {
      year: -218,
      era: {
        en: "The Second Punic War",
        el: "Ο Δεύτερος Καρχηδονιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Hannibal crosses the Alps",
            el: "Ο Αννίβας διασχίζει τις Άλπεις"
          },
          description: {
            en: "Hannibal leads an army with war elephants over the Alps into Italy, opening the Second Punic War.",
            el: "Ο Αννίβας οδηγεί στρατό με πολεμικούς ελέφαντες πάνω από τις Άλπεις στην Ιταλία, ανοίγοντας τον Δεύτερο Καρχηδονιακό Πόλεμο."
          },
          extendedDescription: {
            en: "From the Carthaginian base in Spain, the young general Hannibal Barca struck at Rome by the one road it never guarded. In an epic autumn march he brought an army — and its elephants — across the Alps, losing thousands to cold, rockfall and ambush. Descending into Italy, he defeated the Romans at the Trebia and Lake Trasimene and carried the war into the heart of the enemy's homeland.",
            el: "Από την καρχηδονιακή βάση στην Ισπανία, ο νεαρός στρατηγός Αννίβας Βάρκας χτύπησε τη Ρώμη από τον μόνο δρόμο που εκείνη δεν φύλαγε ποτέ. Σε μια επική φθινοπωρινή πορεία έφερε έναν στρατό — και τους ελέφαντές του — πάνω από τις Άλπεις, χάνοντας χιλιάδες από το κρύο, τις κατολισθήσεις και τις ενέδρες. Κατεβαίνοντας στην Ιταλία, νίκησε τους Ρωμαίους στην Τρεβία και τη Λίμνη Τρασιμένη και μετέφερε τον πόλεμο στην καρδιά της πατρίδας του εχθρού."
          },
          category: "military"
        }
      ]
    },
    {
      year: -216,
      era: {
        en: "The Second Punic War",
        el: "Ο Δεύτερος Καρχηδονιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "The slaughter at Cannae",
            el: "Η σφαγή στις Κάννες"
          },
          description: {
            en: "At Cannae, Hannibal encircles and annihilates a far larger Roman army in his masterpiece of battle.",
            el: "Στις Κάννες, ο Αννίβας περικυκλώνει κι αφανίζει έναν πολύ μεγαλύτερο ρωμαϊκό στρατό στο αριστούργημά του στη μάχη."
          },
          extendedDescription: {
            en: "Letting his centre give way while his cavalry swept around the flanks, Hannibal enveloped the massed Roman legions and destroyed them in a single day — tens of thousands killed in perhaps the bloodiest day's fighting in ancient history. Cannae became the textbook example of the battle of annihilation. Yet Rome, though it lost armies, consuls and allies, refused to surrender.",
            el: "Αφήνοντας το κέντρο του να υποχωρήσει ενώ το ιππικό του σάρωνε τα πλευρά, ο Αννίβας περικύκλωσε τις συγκεντρωμένες ρωμαϊκές λεγεώνες και τις κατέστρεψε σε μία μόνο ημέρα — δεκάδες χιλιάδες νεκροί στην ίσως αιματηρότερη ημέρα μάχης της αρχαίας ιστορίας. Οι Κάννες έγιναν το σχολικό παράδειγμα της μάχης αφανισμού. Κι όμως η Ρώμη, αν και έχασε στρατούς, υπάτους και συμμάχους, αρνήθηκε να παραδοθεί."
          },
          category: "military"
        }
      ]
    },
    {
      year: -206,
      era: {
        en: "The Second Punic War",
        el: "Ο Δεύτερος Καρχηδονιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Scipio wins Spain",
            el: "Ο Σκιπίωνας κερδίζει την Ισπανία"
          },
          description: {
            en: "The young Roman Scipio conquers Carthaginian Spain, cutting off Hannibal from his base of power.",
            el: "Ο νεαρός Ρωμαίος Σκιπίωνας κατακτά την καρχηδονιακή Ισπανία, αποκόπτοντας τον Αννίβα από τη βάση της δύναμής του."
          },
          extendedDescription: {
            en: "While Hannibal roamed Italy unbeaten but unable to take Rome, the war was decided elsewhere. Adopting a patient strategy of avoiding pitched battle at home, Rome sent Scipio to Spain, where he stormed New Carthage and broke Carthaginian power at Ilipa. With Spain lost, Hannibal was stranded, and the initiative passed at last to Rome.",
            el: "Ενώ ο Αννίβας περιπλανιόταν αήττητος στην Ιταλία μα ανίκανος να πάρει τη Ρώμη, ο πόλεμος κρίθηκε αλλού. Υιοθετώντας μια υπομονετική στρατηγική αποφυγής της κατά μέτωπο μάχης στην πατρίδα, η Ρώμη έστειλε τον Σκιπίωνα στην Ισπανία, όπου κατέλαβε εξ εφόδου τη Νέα Καρχηδόνα κι έσπασε την καρχηδονιακή ισχύ στην Ιλίπα. Με χαμένη την Ισπανία, ο Αννίβας απομονώθηκε, και η πρωτοβουλία πέρασε επιτέλους στη Ρώμη."
          },
          category: "military"
        }
      ]
    },
    {
      year: -202,
      era: {
        en: "The Second Punic War",
        el: "Ο Δεύτερος Καρχηδονιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Scipio defeats Hannibal at Zama",
            el: "Ο Σκιπίωνας νικά τον Αννίβα στη Ζάμα"
          },
          description: {
            en: "Recalled to defend Carthage, Hannibal is beaten by Scipio at Zama, ending the Second Punic War.",
            el: "Ανακαλεσμένος για να υπερασπιστεί την Καρχηδόνα, ο Αννίβας ηττάται από τον Σκιπίωνα στη Ζάμα, τερματίζοντας τον Δεύτερο Καρχηδονιακό Πόλεμο."
          },
          extendedDescription: {
            en: "Scipio carried the war to Africa at last, forcing Carthage to summon Hannibal home after fifteen years in Italy. On the field of Zama the two greatest commanders of the age faced each other. Scipio neutralized Hannibal's elephants and, with the help of Numidian cavalry, won the decisive victory. For his triumph Scipio took the name Africanus.",
            el: "Ο Σκιπίωνας μετέφερε επιτέλους τον πόλεμο στην Αφρική, αναγκάζοντας την Καρχηδόνα να ανακαλέσει τον Αννίβα ύστερα από δεκαπέντε χρόνια στην Ιταλία. Στο πεδίο της Ζάμα οι δύο μεγαλύτεροι στρατηλάτες της εποχής αντιμετώπισαν ο ένας τον άλλον. Ο Σκιπίωνας εξουδετέρωσε τους ελέφαντες του Αννίβα και, με τη βοήθεια του νουμιδικού ιππικού, κέρδισε την αποφασιστική νίκη. Για τον θρίαμβό του ο Σκιπίωνας πήρε το όνομα Αφρικανός."
          },
          category: "military"
        }
      ]
    },
    {
      year: -201,
      era: {
        en: "Carthage Humbled",
        el: "Η Ταπείνωση της Καρχηδόνας"
      },
      events: [
        {
          title: {
            en: "Carthage stripped of empire",
            el: "Η Καρχηδόνα απογυμνώνεται από την αυτοκρατορία της"
          },
          description: {
            en: "The peace leaves Carthage shorn of Spain and its fleet, a tributary confined to Africa.",
            el: "Η ειρήνη αφήνει την Καρχηδόνα χωρίς την Ισπανία και τον στόλο της, μια υποτελή περιορισμένη στην Αφρική."
          },
          extendedDescription: {
            en: "The terms were crushing: Carthage surrendered Spain and its islands, gave up all but ten warships, paid an enormous indemnity over fifty years, and swore to wage no war without Rome's consent. Once the greatest power of the western sea, it survived only as a trading city under Rome's shadow — but its very recovery would sow the seeds of a final, fatal war.",
            el: "Οι όροι ήταν συντριπτικοί: η Καρχηδόνα παρέδωσε την Ισπανία και τα νησιά της, εγκατέλειψε όλα εκτός από δέκα πολεμικά πλοία, πλήρωσε τεράστια αποζημίωση επί πενήντα χρόνια κι ορκίστηκε να μην κάνει πόλεμο χωρίς τη συγκατάθεση της Ρώμης. Κάποτε η μεγαλύτερη δύναμη της δυτικής θάλασσας, επιβίωσε μόνο ως εμπορική πόλη υπό τη σκιά της Ρώμης — όμως η ίδια η ανάκαμψή της θα έσπερνε τους σπόρους ενός τελικού, μοιραίου πολέμου."
          },
          category: "political"
        }
      ]
    },
    {
      year: -149,
      era: {
        en: "The Third Punic War",
        el: "Ο Τρίτος Καρχηδονιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "\"Carthage must be destroyed\"",
            el: "«Η Καρχηδόνα πρέπει να καταστραφεί»"
          },
          description: {
            en: "Fearing Carthage's revival, Rome seizes on a pretext and lays siege to the city.",
            el: "Φοβούμενη την αναβίωση της Καρχηδόνας, η Ρώμη αρπάζει μια πρόφαση και πολιορκεί την πόλη."
          },
          extendedDescription: {
            en: "Half a century of recovery made Carthage prosperous once more, and the senator Cato ended every speech with the words \"Carthage must be destroyed.\" When Carthage fought its Numidian neighbours in breach of the treaty, Rome declared war and demanded the impossible — that the city be abandoned. The Carthaginians instead chose to fight, and Rome settled in for a pitiless siege.",
            el: "Μισός αιώνας ανάκαμψης έκανε την Καρχηδόνα ξανά ευημερούσα, και ο συγκλητικός Κάτων τελείωνε κάθε ομιλία με τα λόγια «Η Καρχηδόνα πρέπει να καταστραφεί». Όταν η Καρχηδόνα πολέμησε τους Νουμίδες γείτονές της κατά παράβαση της συνθήκης, η Ρώμη κήρυξε πόλεμο κι απαίτησε το αδύνατο — να εγκαταλειφθεί η πόλη. Οι Καρχηδόνιοι επέλεξαν αντ' αυτού να πολεμήσουν, και η Ρώμη εγκαταστάθηκε για μια ανελέητη πολιορκία."
          },
          category: "military"
        }
      ]
    },
    {
      year: -146,
      era: {
        en: "The Third Punic War",
        el: "Ο Τρίτος Καρχηδονιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "The destruction of Carthage",
            el: "Η καταστροφή της Καρχηδόνας"
          },
          description: {
            en: "After a desperate defence, Carthage is stormed, burned and razed, leaving Rome supreme in the west.",
            el: "Έπειτα από απεγνωσμένη άμυνα, η Καρχηδόνα κυριεύεται, καίγεται και ισοπεδώνεται, αφήνοντας τη Ρώμη κυρίαρχη στη Δύση."
          },
          extendedDescription: {
            en: "Scipio Aemilianus took the city street by street in six days of savage fighting. Its people were killed or enslaved, its buildings pulled down and burned, and the site formally cursed. In the same year Rome destroyed Corinth in the east: the Mediterranean had become a Roman sea. The century-long duel with Carthage was over, and with it the last rival to Rome's dominion in the west.",
            el: "Ο Σκιπίωνας Αιμιλιανός κατέλαβε την πόλη δρόμο προς δρόμο σε έξι ημέρες άγριας μάχης. Οι κάτοικοί της σκοτώθηκαν ή υποδουλώθηκαν, τα κτήριά της γκρεμίστηκαν και κάηκαν, κι ο τόπος καταράστηκε επίσημα. Την ίδια χρονιά η Ρώμη κατέστρεψε την Κόρινθο στην Ανατολή: η Μεσόγειος είχε γίνει ρωμαϊκή θάλασσα. Η αιωνόβια μονομαχία με την Καρχηδόνα είχε τελειώσει, και μαζί της ο τελευταίος αντίπαλος της ρωμαϊκής κυριαρχίας στη Δύση."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
