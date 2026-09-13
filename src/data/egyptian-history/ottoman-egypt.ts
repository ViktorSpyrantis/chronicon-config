/** Ottoman Egypt — Οθωμανική Αίγυπτος · Egyptian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const OTTOMAN_EGYPT = {
  id: "ottoman-egypt" as const,
  label: {
    en: "Ottoman Egypt",
    el: "Οθωμανική Αίγυπτος"
  },
  supertitle: {
    en: "Eyalet-i Mısır",
    el: "Εγιαλέτι της Αιγύπτου"
  },
  title: {
    en: "Ottoman Egypt",
    el: "Οθωμανική Αίγυπτος"
  },
  subtitle: {
    en: "From Selim I's incorporation of Egypt as an Ottoman province and the administrative order of the Qanun-name through the rise of the Mamluk beylicate and Ali Bey al-Kabir's bid for independence, Napoleon's invasion and the corps of savants who launched Egyptology, to the French withdrawal and the power vacuum from which Muhammad Ali would emerge in 1805. Slide across three centuries of the Ottoman province on the Nile.",
    el: "Από την ενσωμάτωση της Αιγύπτου ως οθωμανικής επαρχίας από τον Σελίμ Α΄ και τη διοικητική τάξη του Κανουν-ναμέ, μέσα από την άνοδο της μαμελουκικής μπεηλίκης και την απόπειρα ανεξαρτησίας του Αλί Μπέη αλ-Καμπίρ, την εισβολή του Ναπολέοντα και το σώμα των σοφών που ξεκίνησαν την Αιγυπτιολογία, ως την αποχώρηση των Γάλλων και το κενό εξουσίας από το οποίο θα αναδυόταν ο Μωχάμεντ Άλι το 1805. Μετακινηθείτε ανάμεσα σε τρεις αιώνες της οθωμανικής επαρχίας στον Νείλο."
  },
  menuDescription: {
    en: "An Ottoman province run by Mamluk beys, shaken by Napoleon's invasion of 1798.",
    el: "Μια οθωμανική επαρχία στα χέρια μαμελούκων μπέηδων, που συγκλονίζεται από την εισβολή του Ναπολέοντα το 1798."
  },
  footerLabel: {
    en: "Ottoman Egypt · 1517–1805",
    el: "Οθωμανική Αίγυπτος · 1517–1805"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Ottoman Egypt",
    el: "Οθωμανική Αίγυπτος"
  },
  theme: THEMES.ruby,
  timeline: [
    {
      year: 1517,
      era: {
        en: "Ottoman Province",
        el: "Οθωμανική Επαρχία"
      },
      events: [
        {
          title: {
            en: "Egypt becomes an Ottoman province",
            el: "Η Αίγυπτος γίνεται οθωμανική επαρχία"
          },
          description: {
            en: "After Selim I's conquest, Egypt is governed as an Ottoman eyalet under a pasha sent from Istanbul, its grain and revenues feeding the empire.",
            el: "Μετά την κατάκτηση του Σελίμ Α΄, η Αίγυπτος κυβερνάται ως οθωμανικό εγιαλέτι υπό έναν πασά σταλμένο από την Κωνσταντινούπολη, με το σιτάρι και τα έσοδά της να τρέφουν την αυτοκρατορία."
          },
          extendedDescription: {
            en: "The Ottomans ruled Egypt through a governor (wali or pasha) backed by garrisons of janissaries and other corps, but they retained the defeated Mamluk beys as a local administrative and military class. Egypt was one of the richest provinces of the empire, supplying grain, taxes, and the annual caravan that protected pilgrims to Mecca. Cairo remained a great commercial and religious centre, even as real power was increasingly contested between the pasha, the soldiery, and the Mamluk households.",
            el: "Οι Οθωμανοί κυβερνούσαν την Αίγυπτο μέσω ενός διοικητή (βαλή ή πασά) στηριζόμενου σε φρουρές γενιτσάρων και άλλων σωμάτων, αλλά διατήρησαν τους ηττημένους Μαμελούκους μπέηδες ως τοπική διοικητική και στρατιωτική τάξη. Η Αίγυπτος ήταν μία από τις πλουσιότερες επαρχίες της αυτοκρατορίας, προμηθεύοντας σιτάρι, φόρους και το ετήσιο καραβάνι που προστάτευε τους προσκυνητές προς τη Μέκκα. Το Κάιρο παρέμεινε ένα μεγάλο εμπορικό και θρησκευτικό κέντρο, ακόμη και όταν η πραγματική εξουσία αμφισβητούνταν ολοένα και περισσότερο μεταξύ του πασά, της στρατιωτικής δύναμης και των μαμελουκικών οίκων."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1525,
      era: {
        en: "Ottoman Province",
        el: "Οθωμανική Επαρχία"
      },
      events: [
        {
          title: {
            en: "The Qanun-name of Egypt",
            el: "Το Κανουν-ναμέ της Αιγύπτου"
          },
          description: {
            en: "The grand vizier Ibrahim Pasha issues a great administrative code organising the government, taxation, and military of the new province.",
            el: "Ο μέγας βεζίρης Ιμπραήμ Πασάς εκδίδει έναν μεγάλο διοικητικό κώδικα που οργανώνει τη διακυβέρνηση, τη φορολογία και τον στρατό της νέας επαρχίας."
          },
          extendedDescription: {
            en: "Sent by Sultan Suleiman the Magnificent to restore order after an early revolt, Ibrahim Pasha promulgated the Kanun-name-i Misir in 1525, the foundational charter of Ottoman rule in Egypt. It defined the powers of the governor and his advisory council (divan), the duties of the seven military corps, and the system of tax-farming that funded the province and remitted a fixed annual surplus to Istanbul. This framework would shape Egyptian administration for nearly three centuries.",
            el: "Σταλμένος από τον σουλτάνο Σουλεϊμάν τον Μεγαλοπρεπή για να αποκαταστήσει την τάξη μετά από μια πρώιμη εξέγερση, ο Ιμπραήμ Πασάς εξέδωσε το Κανουν-ναμέ-ι Μισίρ το 1525, τον θεμελιώδη καταστατικό χάρτη της οθωμανικής κυριαρχίας στην Αίγυπτο. Όριζε τις εξουσίες του διοικητή και του συμβουλευτικού του σώματος (ντιβάν), τα καθήκοντα των επτά στρατιωτικών σωμάτων και το σύστημα φοροενοικίασης που χρηματοδοτούσε την επαρχία και απέδιδε ένα σταθερό ετήσιο πλεόνασμα στην Κωνσταντινούπολη. Το πλαίσιο αυτό θα διαμόρφωνε την αιγυπτιακή διοίκηση για σχεδόν τρεις αιώνες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1700,
      era: {
        en: "Rise of the Beys",
        el: "Άνοδος των Μπέηδων"
      },
      events: [
        {
          title: {
            en: "The Mamluk beylicate eclipses the pasha",
            el: "Η μαμελουκική μπεηλίκη επισκιάζει τον πασά"
          },
          description: {
            en: "As Istanbul's grip loosens, the Mamluk beys and rival regimental factions become the real masters of Egypt, reducing the Ottoman governor to a figurehead.",
            el: "Καθώς η λαβή της Κωνσταντινούπολης χαλαρώνει, οι Μαμελούκοι μπέηδες και οι αντίπαλες στρατιωτικές φατρίες γίνονται οι πραγματικοί κύριοι της Αιγύπτου, υποβιβάζοντας τον Οθωμανό διοικητή σε διακοσμητική φιγούρα."
          },
          extendedDescription: {
            en: "Through the seventeenth and eighteenth centuries the households of the beys — perpetuated, like the medieval Mamluks, by importing and training military slaves — steadily reclaimed power. Cairo was riven by the rivalry of the Faqari and Qasimi factions and frequent revolts of the soldiery, while the office of the powerful Shaykh al-Balad ('chief of the city') often outweighed the pasha. The province remained nominally Ottoman, but its wealth and government had passed into local hands.",
            el: "Κατά τον δέκατο έβδομο και δέκατο όγδοο αιώνα οι οίκοι των μπέηδων — που διαιωνίζονταν, όπως οι μεσαιωνικοί Μαμελούκοι, με την εισαγωγή και εκπαίδευση στρατιωτικών δούλων — ανέκτησαν σταθερά την εξουσία. Το Κάιρο σπαρασσόταν από την αντιπαλότητα των φατριών Φακάρι και Κασίμι και συχνές εξεγέρσεις της στρατιωτικής δύναμης, ενώ το αξίωμα του ισχυρού Σεΐχη αλ-Μπαλάντ («αρχηγού της πόλης») συχνά υπερτερούσε του πασά. Η επαρχία παρέμενε ονομαστικά οθωμανική, αλλά ο πλούτος και η διακυβέρνησή της είχαν περάσει σε τοπικά χέρια."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1768,
      era: {
        en: "Mamluk Resurgence",
        el: "Μαμελουκική Αναγέννηση"
      },
      events: [
        {
          title: {
            en: "Ali Bey al-Kabir's bid for independence",
            el: "Η απόπειρα ανεξαρτησίας του Αλί Μπέη αλ-Καμπίρ"
          },
          description: {
            en: "The Mamluk leader Ali Bey al-Kabir seizes control of Egypt, expels the Ottoman governor, and briefly rules as an independent sultan.",
            el: "Ο Μαμελούκος ηγέτης Αλί Μπέης αλ-Καμπίρ καταλαμβάνει τον έλεγχο της Αιγύπτου, εκδιώκει τον Οθωμανό διοικητή και κυβερνά για λίγο ως ανεξάρτητος σουλτάνος."
          },
          extendedDescription: {
            en: "Ali Bey al-Kabir went furthest of all the beys, halting tribute to Istanbul, striking his own coinage, and even sending armies into Arabia and Syria in a short-lived attempt to revive an independent Egyptian state. His revolt collapsed through the betrayal of his lieutenant Abu al-Dhahab, but it revealed how loose Ottoman authority over Egypt had become on the eve of a far greater shock from Europe.",
            el: "Ο Αλί Μπέης αλ-Καμπίρ προχώρησε περισσότερο από όλους τους μπέηδες, σταματώντας τον φόρο προς την Κωνσταντινούπολη, κόβοντας δικό του νόμισμα και στέλνοντας ακόμη στρατούς στην Αραβία και τη Συρία σε μια βραχύβια προσπάθεια αναβίωσης ενός ανεξάρτητου αιγυπτιακού κράτους. Η εξέγερσή του κατέρρευσε λόγω της προδοσίας του υπασπιστή του Αμπού αλ-Νταχάμπ, αλλά αποκάλυψε πόσο χαλαρή είχε γίνει η οθωμανική εξουσία επί της Αιγύπτου στις παραμονές ενός πολύ μεγαλύτερου κλονισμού από την Ευρώπη."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1798,
      era: {
        en: "The French Invasion",
        el: "Η Γαλλική Εισβολή"
      },
      events: [
        {
          title: {
            en: "Napoleon invades Egypt",
            el: "Ο Ναπολέων εισβάλλει στην Αίγυπτο"
          },
          description: {
            en: "Napoleon Bonaparte lands in Egypt and shatters the Mamluk cavalry at the Battle of the Pyramids, bringing French rule and a corps of scholars.",
            el: "Ο Ναπολέων Βοναπάρτης αποβιβάζεται στην Αίγυπτο και συντρίβει το μαμελουκικό ιππικό στη Μάχη των Πυραμίδων, φέρνοντας τη γαλλική κυριαρχία και ένα σώμα λογίων."
          },
          extendedDescription: {
            en: "Seeking to strike at British routes to India, Napoleon seized Cairo in 1798, but his fleet was destroyed by Nelson at the Battle of the Nile, stranding his army. The expedition brought 160 savants whose great Description de l'Égypte and the discovery of the Rosetta Stone launched modern Egyptology. The shock of the invasion jolted Egypt into contact with revolutionary Europe.",
            el: "Επιδιώκοντας να πλήξει τους βρετανικούς δρόμους προς την Ινδία, ο Ναπολέων κατέλαβε το Κάιρο το 1798, αλλά ο στόλος του καταστράφηκε από τον Νέλσον στη Ναυμαχία του Νείλου, αφήνοντας τον στρατό του αποκλεισμένο. Η εκστρατεία έφερε 160 σοφούς των οποίων η μεγάλη Περιγραφή της Αιγύπτου και η ανακάλυψη της Στήλης της Ροζέτας ξεκίνησαν τη σύγχρονη Αιγυπτιολογία. Ο κλονισμός της εισβολής ταρακούνησε την Αίγυπτο σε επαφή με την επαναστατική Ευρώπη."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1801,
      era: {
        en: "The Power Vacuum",
        el: "Το Κενό Εξουσίας"
      },
      events: [
        {
          title: {
            en: "The French withdrawal and the struggle for Egypt",
            el: "Η αποχώρηση των Γάλλων και ο αγώνας για την Αίγυπτο"
          },
          description: {
            en: "A joint Ottoman–British campaign forces the French army to evacuate Egypt, leaving a three-way struggle for power among Ottomans, Mamluks, and Albanian troops.",
            el: "Μια κοινή οθωμανο-βρετανική εκστρατεία αναγκάζει τον γαλλικό στρατό να εκκενώσει την Αίγυπτο, αφήνοντας έναν τριμερή αγώνα εξουσίας μεταξύ Οθωμανών, Μαμελούκων και αλβανικών στρατευμάτων."
          },
          extendedDescription: {
            en: "After Napoleon slipped back to France and his successor Kléber was assassinated, the isolated French army capitulated to an Anglo-Ottoman force and was repatriated in 1801. Egypt was left without a settled master: the Ottoman pasha, the surviving Mamluk beys, and the irregular Albanian and Turkish soldiery contended for control of a war-torn country. From this turmoil an ambitious Albanian officer would soon rise to seize Egypt for himself in 1805.",
            el: "Αφού ο Ναπολέων ξέφυγε πίσω στη Γαλλία και ο διάδοχός του Κλεμπέρ δολοφονήθηκε, ο απομονωμένος γαλλικός στρατός συνθηκολόγησε σε μια αγγλο-οθωμανική δύναμη και επαναπατρίστηκε το 1801. Η Αίγυπτος έμεινε χωρίς εδραιωμένο κύριο: ο Οθωμανός πασάς, οι επιζώντες Μαμελούκοι μπέηδες και η άτακτη αλβανική και τουρκική στρατιωτική δύναμη διεκδικούσαν τον έλεγχο μιας κατεστραμμένης από τον πόλεμο χώρας. Από αυτή την αναταραχή ένας φιλόδοξος Αλβανός αξιωματικός θα ανερχόταν σύντομα για να αρπάξει την Αίγυπτο για τον εαυτό του το 1805."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
