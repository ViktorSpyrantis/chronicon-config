/** Late Period — Ύστερη Περίοδος · Egyptian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const LATE_PERIOD_EGYPT = {
  id: "late-period-egypt" as const,
  label: {
    en: "Late Period",
    el: "Ύστερη Περίοδος"
  },
  supertitle: {
    en: "The Last Pharaohs",
    el: "Οι Τελευταίοι Φαραώ"
  },
  title: {
    en: "The Late Period",
    el: "Η Ύστερη Περίοδος"
  },
  subtitle: {
    en: "From the Saite renaissance of the Twenty-sixth Dynasty and Necho II's wars and canal, through Amasis' golden age, the Persian conquest of Cambyses and the satrapy of the Achaemenids, the restored independence of the last native pharaohs and Nectanebo's temples, to the second Persian conquest and the arrival of Alexander the Great in 332 BCE. Slide across the final centuries of pharaonic Egypt, caught between revival and foreign empire.",
    el: "Από τη Σαϊτική αναγέννηση της Εικοστής Έκτης Δυναστείας και τους πολέμους και τη διώρυγα του Νεχώ Β΄, μέσα από τη χρυσή εποχή του Άμασι, την περσική κατάκτηση του Καμβύση και τη σατραπεία των Αχαιμενιδών, την αποκατεστημένη ανεξαρτησία των τελευταίων εγχώριων φαραώ και τους ναούς του Νεκτανεβώ, ως τη δεύτερη περσική κατάκτηση και την άφιξη του Μεγάλου Αλεξάνδρου το 332 π.Χ. Μετακινηθείτε ανάμεσα στους τελευταίους αιώνες της φαραωνικής Αιγύπτου, παγιδευμένης ανάμεσα στην αναγέννηση και την ξένη αυτοκρατορία."
  },
  menuDescription: {
    en: "The last native pharaohs, two Persian conquests, and the arrival of Alexander.",
    el: "Οι τελευταίοι εγχώριοι φαραώ, δύο περσικές κατακτήσεις κι η άφιξη του Αλεξάνδρου."
  },
  footerLabel: {
    en: "Late Period · c. 664–332 BCE",
    el: "Ύστερη Περίοδος · περ. 664–332 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Late Period",
    el: "Η Ύστερη Περίοδος"
  },
  theme: THEMES.azure,
  timeline: [
    {
      year: -664,
      era: {
        en: "Twenty-sixth Dynasty",
        el: "Εικοστή Έκτη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "The Saite renaissance",
            el: "Η Σαϊτική αναγέννηση"
          },
          description: {
            en: "Reunited under the kings of Sais, Egypt enjoys a revival of prosperity, art, and tradition, deliberately modelled on the glories of the Old and Middle Kingdoms.",
            el: "Επανενωμένη υπό τους βασιλείς της Σάιδας, η Αίγυπτος απολαμβάνει μια αναβίωση ευημερίας, τέχνης και παράδοσης, σκόπιμα διαμορφωμένη κατά τα πρότυπα της δόξας του Παλαιού και του Μέσου Βασιλείου."
          },
          extendedDescription: {
            en: "The Twenty-sixth (Saite) Dynasty, founded by Psamtik I, presided over a self-conscious renaissance: sculptors and scribes copied the styles and texts of earlier ages, archaising art flourished, and the bureaucracy and economy were reorganised. Psamtik II campaigned into Nubia, while the dynasty reopened Egypt to the Mediterranean world, settling Greek mercenaries and granting the trading colony of Naucratis in the Delta — the first permanent Greek foothold in Egypt.",
            el: "Η Εικοστή Έκτη (Σαϊτική) Δυναστεία, ιδρυμένη από τον Ψαμμήτιχο Α΄, προήδρευσε μιας συνειδητής αναγέννησης: γλύπτες και γραφείς αντέγραφαν τα ύφη και τα κείμενα προηγούμενων εποχών, η αρχαΐζουσα τέχνη άνθησε, και η γραφειοκρατία και η οικονομία αναδιοργανώθηκαν. Ο Ψαμμήτιχος Β΄ εκστράτευσε στη Νουβία, ενώ η δυναστεία ξανάνοιξε την Αίγυπτο στον μεσογειακό κόσμο, εγκαθιστώντας Έλληνες μισθοφόρους και παραχωρώντας την εμπορική αποικία της Ναύκρατης στο Δέλτα — το πρώτο μόνιμο ελληνικό προγεφύρωμα στην Αίγυπτο."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -610,
      era: {
        en: "Twenty-sixth Dynasty",
        el: "Εικοστή Έκτη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Necho II, Carchemish, and a canal to the Red Sea",
            el: "Ο Νεχώ Β΄, η Χαρχεμίς και μια διώρυγα προς την Ερυθρά Θάλασσα"
          },
          description: {
            en: "Necho II marches into Syria but is checked by Babylon at Carchemish; at home he begins a canal linking the Nile to the Red Sea and reputedly sponsors a voyage around Africa.",
            el: "Ο Νεχώ Β΄ προελαύνει στη Συρία αλλά ανακόπτεται από τη Βαβυλώνα στη Χαρχεμίδα· στο εσωτερικό ξεκινά μια διώρυγα που συνδέει τον Νείλο με την Ερυθρά Θάλασσα και φημολογείται ότι χρηματοδοτεί έναν περίπλου της Αφρικής."
          },
          extendedDescription: {
            en: "Seeking to restore Egyptian influence in the Levant after the fall of Assyria, Necho II killed King Josiah of Judah at Megiddo but was decisively defeated by Nebuchadnezzar II of Babylon at Carchemish in 605 BCE, ending Egyptian ambitions beyond Sinai. He launched an ambitious canal project between the Nile and the Red Sea and, according to Herodotus, dispatched Phoenician sailors who circumnavigated Africa over three years — the earliest such voyage on record.",
            el: "Επιδιώκοντας να αποκαταστήσει την αιγυπτιακή επιρροή στον Λεβάντε μετά την πτώση της Ασσυρίας, ο Νεχώ Β΄ σκότωσε τον βασιλιά Ιωσία του Ιούδα στη Μεγιδδώ, αλλά νικήθηκε αποφασιστικά από τον Ναβουχοδονόσορα Β΄ της Βαβυλώνας στη Χαρχεμίδα το 605 π.Χ., τερματίζοντας τις αιγυπτιακές φιλοδοξίες πέρα από το Σινά. Ξεκίνησε ένα φιλόδοξο έργο διώρυγας μεταξύ Νείλου και Ερυθράς Θάλασσας και, κατά τον Ηρόδοτο, απέστειλε Φοίνικες ναυτικούς που περιέπλευσαν την Αφρική σε τρία χρόνια — τον αρχαιότερο καταγεγραμμένο τέτοιο πλου."
          },
          category: "military"
        }
      ]
    },
    {
      year: -570,
      era: {
        en: "Twenty-sixth Dynasty",
        el: "Εικοστή Έκτη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Amasis and the golden age of Sais",
            el: "Ο Άμασις και η χρυσή εποχή της Σάιδας"
          },
          description: {
            en: "Amasis, the last great Saite king, presides over a wealthy, cosmopolitan Egypt, strengthening ties with the Greek world and prospering through trade.",
            el: "Ο Άμασις, ο τελευταίος μεγάλος Σαΐτης βασιλιάς, προεδρεύει μιας πλούσιας, κοσμοπολίτικης Αιγύπτου, ενισχύοντας τους δεσμούς με τον ελληνικό κόσμο και ευημερώντας μέσω του εμπορίου."
          },
          extendedDescription: {
            en: "A general who seized the throne, Amasis (Ahmose II) reigned for over forty years, remembered by Herodotus as a shrewd and convivial ruler under whom Egypt was said to be at its most prosperous. He concentrated Greek traders at Naucratis, cultivated alliances with Cyrene, Samos, and Lydia, and contributed to Greek sanctuaries such as Delphi. Yet the rising power of Persia loomed; within months of his death his son Psamtik III would face the armies of Cambyses.",
            el: "Στρατηγός που κατέλαβε τον θρόνο, ο Άμασις (Άχμωσης Β΄) βασίλευσε για πάνω από σαράντα χρόνια, καταγεγραμμένος από τον Ηρόδοτο ως οξυδερκής και ευχάριστος ηγεμόνας υπό τον οποίο η Αίγυπτος λεγόταν ότι ήταν στην πιο εύπορη κατάστασή της. Συγκέντρωσε τους Έλληνες εμπόρους στη Ναύκρατη, καλλιέργησε συμμαχίες με την Κυρήνη, τη Σάμο και τη Λυδία, και συνέβαλε σε ελληνικά ιερά όπως οι Δελφοί. Όμως η ανερχόμενη δύναμη της Περσίας πλησίαζε· μήνες μετά τον θάνατό του ο γιος του Ψαμμήτιχος Γ΄ θα αντιμετώπιζε τους στρατούς του Καμβύση."
          },
          category: "political"
        }
      ]
    },
    {
      year: -525,
      era: {
        en: "Twenty-seventh Dynasty",
        el: "Εικοστή Έβδομη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "The Persian conquest of Cambyses",
            el: "Η περσική κατάκτηση του Καμβύση"
          },
          description: {
            en: "The Persian king Cambyses II defeats Psamtik III at Pelusium and annexes Egypt, making it a satrapy of the Achaemenid Empire — the First Persian Period.",
            el: "Ο Πέρσης βασιλιάς Καμβύσης Β΄ νικά τον Ψαμμήτιχο Γ΄ στο Πηλούσιο και προσαρτά την Αίγυπτο, καθιστώντας την σατραπεία της Αχαιμενιδικής Αυτοκρατορίας — η Πρώτη Περσική Περίοδος."
          },
          extendedDescription: {
            en: "At the Battle of Pelusium in 525 BCE, Cambyses II crushed the last Saite king and entered Memphis. Egypt became the wealthy satrapy of the Achaemenid Persian Empire, ruled by satraps and, at times, by the Great King in person. Later Egyptian and Greek tradition painted Cambyses as a sacrilegious tyrant, though Darius I, who organised the satrapy, was honoured as a lawgiver and completed Necho's Red Sea canal. Persian rule, however, was deeply resented, and revolts were frequent.",
            el: "Στη Μάχη του Πηλουσίου το 525 π.Χ., ο Καμβύσης Β΄ συνέτριψε τον τελευταίο Σαΐτη βασιλιά και εισήλθε στη Μέμφιδα. Η Αίγυπτος έγινε η πλούσια σατραπεία της Αχαιμενιδικής Περσικής Αυτοκρατορίας, κυβερνώμενη από σατράπες και, ενίοτε, από τον ίδιο τον Μεγάλο Βασιλέα. Η μεταγενέστερη αιγυπτιακή και ελληνική παράδοση παρουσίασε τον Καμβύση ως ιερόσυλο τύραννο, αν και ο Δαρείος Α΄, που οργάνωσε τη σατραπεία, τιμήθηκε ως νομοθέτης και ολοκλήρωσε τη διώρυγα του Νεχώ προς την Ερυθρά Θάλασσα. Η περσική κυριαρχία, ωστόσο, ήταν βαθιά μισητή, και οι εξεγέρσεις ήταν συχνές."
          },
          category: "military"
        }
      ]
    },
    {
      year: -404,
      era: {
        en: "Last Native Dynasties",
        el: "Τελευταίες Εγχώριες Δυναστείες"
      },
      events: [
        {
          title: {
            en: "Egypt throws off Persian rule",
            el: "Η Αίγυπτος αποτινάσσει την περσική κυριαρχία"
          },
          description: {
            en: "Amyrtaeus of Sais expels the Persians and restores native rule, beginning six decades of independence under the Twenty-eighth to Thirtieth Dynasties.",
            el: "Ο Αμυρταίος της Σάιδας εκδιώκει τους Πέρσες και αποκαθιστά την εγχώρια κυριαρχία, ξεκινώντας έξι δεκαετίες ανεξαρτησίας υπό τις Εικοστή Όγδοη έως Τριακοστή Δυναστεία."
          },
          extendedDescription: {
            en: "Exploiting Persian weakness after the death of Darius II, Amyrtaeus restored an independent Egypt as the sole king of the Twenty-eighth Dynasty. The succeeding Twenty-ninth Dynasty, based at Mendes, and especially the Thirtieth Dynasty fended off repeated Persian attempts at reconquest, often with the help of Greek generals and mercenaries. For sixty years Egypt was again ruled by its own pharaohs — the last era of native independence in antiquity.",
            el: "Εκμεταλλευόμενος την περσική αδυναμία μετά τον θάνατο του Δαρείου Β΄, ο Αμυρταίος αποκατέστησε μια ανεξάρτητη Αίγυπτο ως ο μοναδικός βασιλιάς της Εικοστής Όγδοης Δυναστείας. Η επόμενη Εικοστή Ένατη Δυναστεία, με έδρα τη Μένδη, και ιδίως η Τριακοστή Δυναστεία απέκρουσαν επανειλημμένες περσικές απόπειρες επανάκτησης, συχνά με τη βοήθεια Ελλήνων στρατηγών και μισθοφόρων. Για εξήντα χρόνια η Αίγυπτος κυβερνήθηκε ξανά από δικούς της φαραώ — η τελευταία εποχή εγχώριας ανεξαρτησίας στην αρχαιότητα."
          },
          category: "political"
        }
      ]
    },
    {
      year: -380,
      era: {
        en: "Thirtieth Dynasty",
        el: "Τριακοστή Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Nectanebo I and the last native pharaohs",
            el: "Ο Νεκτανεβώ Α΄ και οι τελευταίοι εγχώριοι φαραώ"
          },
          description: {
            en: "Nectanebo I founds the Thirtieth Dynasty, the last of native Egyptian kings, and adorns the land with a great wave of temple building.",
            el: "Ο Νεκτανεβώ Α΄ ιδρύει την Τριακοστή Δυναστεία, την τελευταία των εγχώριων αιγυπτίων βασιλέων, και κοσμεί τη χώρα με ένα μεγάλο κύμα ναοδομίας."
          },
          extendedDescription: {
            en: "Nectanebo I repelled a major Persian invasion in 373 BCE, aided by the flooding Nile, and launched a prolific building programme, including the first pylon at Karnak and the temple complex on the island of Philae dedicated to Isis. His grandson Nectanebo II, an energetic builder and patron of the animal cults, would be the last native pharaoh, his reign marking the final flowering of pharaonic art before the long ages of foreign rule.",
            el: "Ο Νεκτανεβώ Α΄ απέκρουσε μια μεγάλη περσική εισβολή το 373 π.Χ., βοηθούμενος από την πλημμύρα του Νείλου, και ξεκίνησε ένα παραγωγικό οικοδομικό πρόγραμμα, μεταξύ άλλων το πρώτο πυλώνα στο Καρνάκ και το ναϊκό συγκρότημα στη νήσο Φιλαί αφιερωμένο στην Ίσιδα. Ο εγγονός του Νεκτανεβώ Β΄, δραστήριος οικοδόμος και προστάτης των ζωολατρειών, θα ήταν ο τελευταίος εγχώριος φαραώ, με τη βασιλεία του να σηματοδοτεί την τελευταία άνθηση της φαραωνικής τέχνης πριν από τις μακρές εποχές της ξένης κυριαρχίας."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -343,
      era: {
        en: "Thirty-first Dynasty",
        el: "Τριακοστή Πρώτη Δυναστεία"
      },
      events: [
        {
          title: {
            en: "The second Persian conquest",
            el: "Η δεύτερη περσική κατάκτηση"
          },
          description: {
            en: "Artaxerxes III reconquers Egypt, driving out Nectanebo II and reimposing Persian rule in the brief and bitter Thirty-first Dynasty.",
            el: "Ο Αρταξέρξης Γ΄ ανακατακτά την Αίγυπτο, εκδιώκοντας τον Νεκτανεβώ Β΄ και επαναεπιβάλλοντας την περσική κυριαρχία στη σύντομη και πικρή Τριακοστή Πρώτη Δυναστεία."
          },
          extendedDescription: {
            en: "After earlier failures, the Persian king Artaxerxes III invaded in force in 343 BCE and overcame Nectanebo II, who fled south to Nubia and vanished from history. The second period of Persian domination was remembered as harsh and impious — temples were plundered and sacred animals reportedly killed. It proved short-lived: within just over a decade the Achaemenid Empire itself would be swept away by a young Macedonian king.",
            el: "Μετά από προηγούμενες αποτυχίες, ο Πέρσης βασιλιάς Αρταξέρξης Γ΄ εισέβαλε με ισχυρές δυνάμεις το 343 π.Χ. και κατέβαλε τον Νεκτανεβώ Β΄, ο οποίος διέφυγε νότια στη Νουβία και εξαφανίστηκε από την ιστορία. Η δεύτερη περίοδος περσικής κυριαρχίας θυμόταν ως σκληρή και ασεβής — ναοί λεηλατήθηκαν και ιερά ζώα φέρεται να σκοτώθηκαν. Αποδείχθηκε βραχύβια: μέσα σε λίγο περισσότερο από μια δεκαετία η ίδια η Αχαιμενιδική Αυτοκρατορία θα σαρωνόταν από έναν νεαρό Μακεδόνα βασιλιά."
          },
          category: "military"
        }
      ]
    },
    {
      year: -332,
      era: {
        en: "Macedonian Conquest",
        el: "Μακεδονική Κατάκτηση"
      },
      events: [
        {
          title: {
            en: "Alexander the Great enters Egypt",
            el: "Ο Μέγας Αλέξανδρος εισέρχεται στην Αίγυπτο"
          },
          description: {
            en: "Alexander the Great takes Egypt from the Persians without a fight, is hailed as liberator and pharaoh, and founds Alexandria, ending the Late Period.",
            el: "Ο Μέγας Αλέξανδρος αποσπά την Αίγυπτο από τους Πέρσες χωρίς μάχη, χαιρετίζεται ως ελευθερωτής και φαραώ, και ιδρύει την Αλεξάνδρεια, τερματίζοντας την Ύστερη Περίοδο."
          },
          extendedDescription: {
            en: "Welcomed as a deliverer from the hated Persians, Alexander was crowned pharaoh at Memphis and made a celebrated pilgrimage to the oracle of Amun at the Siwa Oasis, where he was reportedly greeted as the son of the god. On the Mediterranean coast he founded Alexandria, destined to become the greatest city of the Hellenistic world. His arrival closed thirty centuries of pharaonic Egypt and opened the Graeco-Roman age, under which his general Ptolemy would found a new dynasty.",
            el: "Καλωσορισμένος ως απελευθερωτής από τους μισητούς Πέρσες, ο Αλέξανδρος στέφθηκε φαραώ στη Μέμφιδα και πραγματοποίησε ένα ξακουστό προσκύνημα στο μαντείο του Άμμωνα στην όαση Σίβα, όπου φέρεται να χαιρετίστηκε ως ο γιος του θεού. Στη μεσογειακή ακτή ίδρυσε την Αλεξάνδρεια, που προοριζόταν να γίνει η μεγαλύτερη πόλη του ελληνιστικού κόσμου. Η άφιξή του έκλεισε τριάντα αιώνες φαραωνικής Αιγύπτου και άνοιξε την ελληνορωμαϊκή εποχή, υπό την οποία ο στρατηγός του Πτολεμαίος θα ίδρυε μια νέα δυναστεία."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
