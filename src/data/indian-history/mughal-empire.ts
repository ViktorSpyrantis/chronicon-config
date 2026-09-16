/** Mughal Empire — Αυτοκρατορία των Μουγκάλ · Indian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const MUGHAL_EMPIRE = {
  id: "mughal-empire" as const,
  label: {
    en: "Mughal Empire",
    el: "Αυτοκρατορία των Μουγκάλ"
  },
  supertitle: {
    en: "Babur to Aurangzeb",
    el: "Από τον Μπαμπούρ στον Αουρανγκζέμπ"
  },
  title: {
    en: "The Mughal Empire",
    el: "Η Αυτοκρατορία των Μουγκάλ"
  },
  subtitle: {
    en: "From Babur's victory at Panipat and Akbar's building of a tolerant, unified empire, through the golden age of art and the Taj Mahal under Shah Jahan, to the vast conquests and hardening orthodoxy of Aurangzeb, the rise of the Marathas and the plunder of Delhi by Nadir Shah. Slide across three centuries in which a Central Asian dynasty ruled almost all of India, forged a brilliant Indo-Islamic culture, and then slowly lost its empire to rebels and rising European power.",
    el: "Από τη νίκη του Μπαμπούρ στο Πανιπάτ και το χτίσιμο μιας ανεκτικής, ενωμένης αυτοκρατορίας από τον Ακμπάρ, μέσα από τη χρυσή εποχή της τέχνης και το Ταζ Μαχάλ επί Σαχ Τζαχάν, ως τις απέραντες κατακτήσεις και τη σκληρύνουσα ορθοδοξία του Αουρανγκζέμπ, την άνοδο των Μαράθα και τη λεηλασία του Δελχί από τον Ναντίρ Σαχ. Μετακινηθείτε μέσα σε τρεις αιώνες όπου μια δυναστεία της Κεντρικής Ασίας κυβέρνησε σχεδόν όλη την Ινδία, σφυρηλάτησε έναν λαμπρό ινδοϊσλαμικό πολιτισμό, κι έπειτα έχασε σιγά σιγά την αυτοκρατορία της σε επαναστάτες και ανερχόμενη ευρωπαϊκή δύναμη."
  },
  menuDescription: {
    en: "Babur, Akbar and the Taj Mahal to Aurangzeb, the Marathas and the empire's long decline.",
    el: "Ο Μπαμπούρ, ο Ακμπάρ και το Ταζ Μαχάλ ως τον Αουρανγκζέμπ, τους Μαράθα και τη μακρά παρακμή της αυτοκρατορίας."
  },
  footerLabel: {
    en: "Mughal Empire · 1526–1857 AD",
    el: "Αυτοκρατορία των Μουγκάλ · 1526–1857 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Mughal Empire",
    el: "Η Αυτοκρατορία των Μουγκάλ"
  },
  theme: THEMES.emerald,
  timeline: [
    {
      year: 1526,
      era: {
        en: "The Founding",
        el: "Η Ίδρυση"
      },
      events: [
        {
          title: {
            en: "Babur wins at Panipat",
            el: "Ο Μπαμπούρ νικά στο Πανιπάτ"
          },
          description: {
            en: "With cannon and cavalry, Babur destroys the Lodi army at Panipat and founds the Mughal empire.",
            el: "Με κανόνια και ιππικό, ο Μπαμπούρ καταστρέφει τον στρατό των Λόντι στο Πανιπάτ και ιδρύει την αυτοκρατορία των Μουγκάλ."
          },
          extendedDescription: {
            en: "A prince of Ferghana descended from both Timur and Genghis Khan, Babur invaded India and, though vastly outnumbered, shattered the huge army of Ibrahim Lodi at the first battle of Panipat with field artillery and mobile horsemen. Master now of Delhi and Agra, he founded a dynasty that would rule India for three centuries.",
            el: "Πρίγκιπας της Φεργκάνα με καταγωγή τόσο από τον Ταμερλάνο όσο κι από τον Τζένγκις Χαν, ο Μπαμπούρ εισέβαλε στην Ινδία και, αν και κατά πολύ αριθμητικά κατώτερος, συνέτριψε τον τεράστιο στρατό του Ιμπραχίμ Λόντι στην πρώτη μάχη του Πανιπάτ με πυροβολικό πεδίου κι ευκίνητους ιππείς. Κύριος πλέον του Δελχί και της Άγκρα, ίδρυσε μια δυναστεία που θα κυβερνούσε την Ινδία επί τρεις αιώνες."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1556,
      era: {
        en: "Akbar the Great",
        el: "Ο Ακμπάρ ο Μέγας"
      },
      events: [
        {
          title: {
            en: "Akbar builds the empire",
            el: "Ο Ακμπάρ χτίζει την αυτοκρατορία"
          },
          description: {
            en: "Coming to the throne as a boy, Akbar conquers and consolidates an empire across northern India.",
            el: "Ανεβαίνοντας στον θρόνο ως παιδί, ο Ακμπάρ κατακτά κι εδραιώνει μια αυτοκρατορία σε όλη τη βόρεια Ινδία."
          },
          extendedDescription: {
            en: "After his father Humayun briefly lost and regained the throne, the thirteen-year-old Akbar inherited a fragile realm. Over a long reign he became the true architect of the empire, conquering from Gujarat to Bengal and binding the proud Rajput kingdoms to his cause by marriage and honour rather than force alone.",
            el: "Αφού ο πατέρας του Χουμαγιούν έχασε και ξανακέρδισε σύντομα τον θρόνο, ο δεκατριάχρονος Ακμπάρ κληρονόμησε ένα εύθραυστο βασίλειο. Σε μια μακρά βασιλεία έγινε ο πραγματικός αρχιτέκτονας της αυτοκρατορίας, κατακτώντας από το Γκουτζαράτ ως τη Βεγγάλη και δένοντας τα περήφανα βασίλεια των Ρατζπούτ με τον σκοπό του μέσω γάμων και τιμών, όχι μόνο με τη βία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1582,
      era: {
        en: "Akbar the Great",
        el: "Ο Ακμπάρ ο Μέγας"
      },
      events: [
        {
          title: {
            en: "Akbar's peace of all faiths",
            el: "Η ειρήνη όλων των θρησκειών του Ακμπάρ"
          },
          description: {
            en: "Akbar abolishes the tax on non-Muslims and pursues a policy of tolerance and religious dialogue.",
            el: "Ο Ακμπάρ καταργεί τον φόρο επί των μη μουσουλμάνων κι ακολουθεί μια πολιτική ανοχής και θρησκευτικού διαλόγου."
          },
          extendedDescription: {
            en: "Ruling a land of many faiths, Akbar sought harmony rather than conquest of the soul. He abolished the jizya tax on non-Muslims, hosted debates among Hindus, Muslims, Jains, Zoroastrians and Jesuits, and proclaimed a doctrine of \"universal peace,\" sulh-i kul. His efficient administration and enlightened tolerance made the empire strong and, for its age, remarkably inclusive.",
            el: "Κυβερνώντας μια χώρα πολλών θρησκειών, ο Ακμπάρ αναζήτησε αρμονία αντί για κατάκτηση της ψυχής. Κατάργησε τον φόρο τζίζια επί των μη μουσουλμάνων, φιλοξένησε συζητήσεις ανάμεσα σε Ινδουιστές, Μουσουλμάνους, Τζαϊνιστές, Ζωροάστρες και Ιησουίτες, και διακήρυξε ένα δόγμα «καθολικής ειρήνης», το σουλχ-ι κουλ. Η αποδοτική διοίκησή του κι η φωτισμένη ανοχή έκαναν την αυτοκρατορία ισχυρή και, για την εποχή της, αξιοσημείωτα συμπεριληπτική."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1632,
      era: {
        en: "The Golden Age",
        el: "Η Χρυσή Εποχή"
      },
      events: [
        {
          title: {
            en: "Shah Jahan and the Taj Mahal",
            el: "Ο Σαχ Τζαχάν και το Ταζ Μαχάλ"
          },
          description: {
            en: "Shah Jahan begins the Taj Mahal, the marble tomb for his wife that crowns the Mughal golden age of art.",
            el: "Ο Σαχ Τζαχάν αρχίζει το Ταζ Μαχάλ, τον μαρμάρινο τάφο για τη σύζυγό του που στεφανώνει τη χρυσή εποχή της μουγκαλικής τέχνης."
          },
          extendedDescription: {
            en: "Under Shah Jahan the empire reached the summit of its wealth and artistic splendour. To hold the body of his beloved wife Mumtaz Mahal he raised the Taj Mahal at Agra, a vision of white marble and inlaid gems that became the world's most famous building. He also built the Red Fort and the great mosque of a new Delhi, and sat upon the jewelled Peacock Throne.",
            el: "Υπό τον Σαχ Τζαχάν η αυτοκρατορία έφτασε στην κορυφή του πλούτου και της καλλιτεχνικής λαμπρότητάς της. Για να στεγάσει το σώμα της αγαπημένης του συζύγου Μουμτάζ Μαχάλ ύψωσε το Ταζ Μαχάλ στην Άγκρα, ένα όραμα λευκού μαρμάρου κι ένθετων πολύτιμων λίθων που έγινε το πιο διάσημο κτίριο του κόσμου. Έχτισε επίσης το Ερυθρό Φρούριο και το μεγάλο τζαμί ενός νέου Δελχί, κι έκατσε στον στολισμένο με πετράδια Θρόνο του Παγωνιού."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1658,
      era: {
        en: "Aurangzeb",
        el: "Ο Αουρανγκζέμπ"
      },
      events: [
        {
          title: {
            en: "Aurangzeb's vast and rigid empire",
            el: "Η απέραντη κι άκαμπτη αυτοκρατορία του Αουρανγκζέμπ"
          },
          description: {
            en: "Aurangzeb pushes the empire to its greatest extent but strains it with war and religious severity.",
            el: "Ο Αουρανγκζέμπ επεκτείνει την αυτοκρατορία στη μεγαλύτερη έκτασή της αλλά την καταπονεί με πόλεμο και θρησκευτική αυστηρότητα."
          },
          extendedDescription: {
            en: "Seizing the throne from his father and brothers, the austere and orthodox Aurangzeb ruled for nearly fifty years, extending Mughal power over almost the entire subcontinent. But he reimposed the jizya, alienated Hindus and Sikhs, and bogged his armies down in endless war in the Deccan. His long reign marked both the empire's zenith and the beginning of its decline.",
            el: "Αρπάζοντας τον θρόνο από τον πατέρα και τους αδελφούς του, ο λιτός κι ορθόδοξος Αουρανγκζέμπ κυβέρνησε σχεδόν πενήντα χρόνια, επεκτείνοντας τη μουγκαλική δύναμη σχεδόν σε ολόκληρη την υποήπειρο. Όμως επανέφερε τον φόρο τζίζια, αποξένωσε Ινδουιστές και Σιχ, και βύθισε τους στρατούς του σε ατέλειωτο πόλεμο στο Ντεκάν. Η μακρά βασιλεία του σηματοδότησε τόσο το ζενίθ της αυτοκρατορίας όσο και την αρχή της παρακμής της."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1674,
      era: {
        en: "The Maratha Challenge",
        el: "Η Πρόκληση των Μαράθα"
      },
      events: [
        {
          title: {
            en: "Shivaji and the Marathas",
            el: "Ο Σιβατζί και οι Μαράθα"
          },
          description: {
            en: "The Maratha leader Shivaji carves out a Hindu kingdom in the west, defying the might of the Mughals.",
            el: "Ο ηγέτης των Μαράθα Σιβατζί σμιλεύει ένα ινδουιστικό βασίλειο στη δύση, αψηφώντας τη δύναμη των Μουγκάλ."
          },
          extendedDescription: {
            en: "A brilliant guerrilla commander, Shivaji built a Maratha state in the western hills and had himself crowned king in 1674, reviving Hindu sovereignty. His swift, mountain-bred armies harried the Mughals for decades. After Aurangzeb's death the Marathas expanded across much of India, becoming the greatest power to rise from the empire's decline.",
            el: "Λαμπρός διοικητής ανταρτοπολέμου, ο Σιβατζί έχτισε ένα κράτος των Μαράθα στους δυτικούς λόφους κι αυτοστέφθηκε βασιλιάς το 1674, αναβιώνοντας την ινδουιστική κυριαρχία. Οι ταχείς, βουνίσιοι στρατοί του παρενοχλούσαν τους Μουγκάλ επί δεκαετίες. Μετά τον θάνατο του Αουρανγκζέμπ οι Μαράθα επεκτάθηκαν σε μεγάλο μέρος της Ινδίας, γινόμενοι η μεγαλύτερη δύναμη που αναδύθηκε από την παρακμή της αυτοκρατορίας."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1739,
      era: {
        en: "The Decline",
        el: "Η Παρακμή"
      },
      events: [
        {
          title: {
            en: "Nadir Shah sacks Delhi",
            el: "Ο Ναντίρ Σαχ λεηλατεί το Δελχί"
          },
          description: {
            en: "The Persian conqueror Nadir Shah storms Delhi and carries off its treasures, exposing Mughal weakness.",
            el: "Ο Πέρσης κατακτητής Ναντίρ Σαχ κυριεύει το Δελχί κι αρπάζει τους θησαυρούς του, εκθέτοντας την αδυναμία των Μουγκάλ."
          },
          extendedDescription: {
            en: "From Persia, Nadir Shah swept into India, crushed the Mughal army and occupied Delhi, where a massacre and a colossal plunder followed. He bore away the Peacock Throne and the Koh-i-Noor diamond. The catastrophe laid bare how hollow Mughal power had become, and provincial governors, Marathas and foreign trading companies moved to fill the void.",
            el: "Από την Περσία, ο Ναντίρ Σαχ όρμησε στην Ινδία, συνέτριψε τον μουγκαλικό στρατό και κατέλαβε το Δελχί, όπου ακολούθησε σφαγή και κολοσσιαία λεηλασία. Πήρε μαζί του τον Θρόνο του Παγωνιού και το διαμάντι Κοχ-ι-Νουρ. Η καταστροφή αποκάλυψε πόσο κούφια είχε γίνει η μουγκαλική δύναμη, κι επαρχιακοί κυβερνήτες, Μαράθα και ξένες εμπορικές εταιρείες κινήθηκαν να γεμίσουν το κενό."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1757,
      era: {
        en: "The Shadow of Empire",
        el: "Η Σκιά της Αυτοκρατορίας"
      },
      events: [
        {
          title: {
            en: "The empire fades to a shadow",
            el: "Η αυτοκρατορία σβήνει σε σκιά"
          },
          description: {
            en: "As the British win Bengal, the Mughal emperor becomes a pensioner, reigning in name over a lost empire.",
            el: "Καθώς οι Βρετανοί κερδίζουν τη Βεγγάλη, ο αυτοκράτορας των Μουγκάλ γίνεται συνταξιούχος, βασιλεύοντας κατ' όνομα σε μια χαμένη αυτοκρατορία."
          },
          extendedDescription: {
            en: "By the mid-eighteenth century the emperor in Delhi ruled little beyond his palace, as Marathas, regional nawabs and the British East India Company divided his realm. After Plassey the Company took Bengal, and the emperors survived only under its protection. The last of them, Bahadur Shah Zafar, would be swept away with the great rebellion of 1857.",
            el: "Ως τα μέσα του δέκατου όγδοου αιώνα ο αυτοκράτορας στο Δελχί κυβερνούσε ελάχιστα πέρα από το παλάτι του, καθώς Μαράθα, τοπικοί ναβάβ κι η βρετανική Εταιρεία Ανατολικών Ινδιών μοίραζαν το βασίλειό του. Μετά το Πλάσεϊ η Εταιρεία πήρε τη Βεγγάλη, κι οι αυτοκράτορες επιβίωσαν μόνο υπό την προστασία της. Ο τελευταίος τους, ο Μπαχαντούρ Σαχ Ζαφάρ, θα παρασυρόταν με τη μεγάλη εξέγερση του 1857."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
