/** Islamic Iran & the Caliphates — Ισλαμικό Ιράν & τα Χαλιφάτα · Persian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const ISLAMIC_IRAN_CALIPHATES = {
  id: "islamic-iran-caliphates" as const,
  label: {
    en: "Islamic Iran & the Caliphates",
    el: "Ισλαμικό Ιράν & τα Χαλιφάτα"
  },
  supertitle: {
    en: "The Persian Revival",
    el: "Η Περσική Αναγέννηση"
  },
  title: {
    en: "Islamic Iran & the Caliphates",
    el: "Ισλαμικό Ιράν & τα Χαλιφάτα"
  },
  subtitle: {
    en: "From the Arab conquest and the Abbasid revolution born in Khurasan through the Persianate court of Baghdad, the House of Wisdom, and the native dynasties of the Iranian Intermezzo, to the New Persian revival of Ferdowsi's Shahnameh and the science of Avicenna. Slide across the centuries to read the major events of Iran's rebirth within Islam.",
    el: "Από την αραβική κατάκτηση και την αββασιδική επανάσταση που γεννήθηκε στο Χορασάν, μέσα από την περσίζουσα αυλή της Βαγδάτης, τον Οίκο της Σοφίας και τις εγχώριες δυναστείες του Ιρανικού Ιντερμέτζο, ως την αναγέννηση της Νέας Περσικής με το Σαχναμέ του Φερντοουσί και την επιστήμη του Αβικέννα. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα γεγονότα της αναγέννησης του Ιράν εντός του Ισλάμ."
  },
  menuDescription: {
    en: "Conquered by the Arabs, Persia remakes Islam: Baghdad, Ferdowsi and Avicenna.",
    el: "Κατακτημένη από τους Άραβες, η Περσία ξαναπλάθει το Ισλάμ: η Βαγδάτη, ο Φερντοουσί κι ο Αβικέννας."
  },
  footerLabel: {
    en: "Islamic Iran & the Caliphates · 651-1040 AD",
    el: "Ισλαμικό Ιράν & τα Χαλιφάτα · 651-1040 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Islamic Iran & the Caliphates",
    el: "Ισλαμικό Ιράν & τα Χαλιφάτα"
  },
  theme: THEMES.emerald,
  timeline: [
    {
      year: 651,
      era: {
        en: "Rashidun & Umayyad",
        el: "Ρασιντούν & Ομεϊάδες"
      },
      events: [
        {
          title: {
            en: "Iran becomes part of the Caliphate",
            el: "Το Ιράν γίνεται μέρος του Χαλιφάτου"
          },
          description: {
            en: "With the fall of the Sasanians, the Iranian plateau is absorbed into the rapidly expanding Islamic Caliphate.",
            el: "Με την πτώση των Σασανιδών, το ιρανικό οροπέδιο ενσωματώνεται στο ταχύτατα επεκτεινόμενο ισλαμικό Χαλιφάτο."
          },
          extendedDescription: {
            en: "Conquest was gradual and often resisted, region by region. Zoroastrians became a protected but taxed minority, and conversion to Islam spread over generations. Arab garrison towns and governors ruled, but Persian remained the language of the countryside and the old administrative classes soon made themselves indispensable.",
            el: "Η κατάκτηση ήταν σταδιακή και συχνά συνάντησε αντίσταση, περιοχή προς περιοχή. Οι Ζωροάστρες έγιναν προστατευόμενη αλλά φορολογούμενη μειονότητα, και ο εξισλαμισμός εξαπλώθηκε επί γενεές. Άραβες φρουροί και διοικητές κυβερνούσαν, όμως η περσική παρέμεινε η γλώσσα της υπαίθρου και οι παλαιές διοικητικές τάξεις σύντομα κατέστησαν τους εαυτούς τους απαραίτητους."
          },
          category: "political"
        }
      ]
    },
    {
      year: 750,
      era: {
        en: "The Abbasid Revolution",
        el: "Η Αββασιδική Επανάσταση"
      },
      events: [
        {
          title: {
            en: "Khurasan and the Abbasid Revolution",
            el: "Το Χορασάν και η Αββασιδική Επανάσταση"
          },
          description: {
            en: "A revolt born in the Iranian province of Khurasan topples the Umayyads and brings the Abbasid caliphs to power.",
            el: "Μια εξέγερση που γεννήθηκε στην ιρανική επαρχία του Χορασάν ανατρέπει τους Ομεϊάδες και φέρνει στην εξουσία τους Αββασίδες χαλίφες."
          },
          extendedDescription: {
            en: "Led by the mysterious Abu Muslim, the black-bannered armies of Khurasan carried the Abbasids to the caliphate, drawing heavily on Iranian discontent with Arab privilege. Persian influence now surged at the heart of the Islamic state, which soon moved its capital eastward to a new city on the Tigris: Baghdad.",
            el: "Υπό τον μυστηριώδη Αμπού Μούσλιμ, οι στρατοί του Χορασάν με τα μαύρα λάβαρα οδήγησαν τους Αββασίδες στο χαλιφάτο, αντλώντας σε μεγάλο βαθμό από την ιρανική δυσαρέσκεια για τα αραβικά προνόμια. Η περσική επιρροή αναδύθηκε πλέον στην καρδιά του ισλαμικού κράτους, που σύντομα μετέφερε την πρωτεύουσά του ανατολικά, σε μια νέα πόλη επί του Τίγρη: τη Βαγδάτη."
          },
          category: "political"
        }
      ]
    },
    {
      year: 762,
      era: {
        en: "Abbasid Golden Age",
        el: "Χρυσή Εποχή των Αββασιδών"
      },
      events: [
        {
          title: {
            en: "Baghdad and the Persianate court",
            el: "Η Βαγδάτη και η περσίζουσα αυλή"
          },
          description: {
            en: "The Abbasids found Baghdad and adopt Sasanian court ceremony, administration, and the powerful Barmakid viziers of Iranian descent.",
            el: "Οι Αββασίδες ιδρύουν τη Βαγδάτη και υιοθετούν τη σασανιδική αυλική εθιμοτυπία, τη διοίκηση και τους ισχυρούς Βαρμακίδες βεζίρηδες ιρανικής καταγωγής."
          },
          extendedDescription: {
            en: "The caliphate increasingly ran on Persian bureaucratic models. The Barmakid family of Balkh guided the state for decades, and the office of vizier itself was a Sasanian inheritance. Under Harun al-Rashid the court's splendour entered legend as the world of the Thousand and One Nights.",
            el: "Το χαλιφάτο λειτουργούσε ολοένα και περισσότερο πάνω σε περσικά γραφειοκρατικά πρότυπα. Η οικογένεια των Βαρμακιδών από το Μπαλχ καθοδήγησε το κράτος επί δεκαετίες, και το ίδιο το αξίωμα του βεζίρη ήταν σασανιδική κληρονομιά. Επί Χαρούν αλ-Ρασίντ η λαμπρότητα της αυλής πέρασε στον θρύλο ως ο κόσμος των Χιλίων και Μίας Νυχτών."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 820,
      era: {
        en: "The Iranian Intermezzo",
        el: "Το Ιρανικό Ιντερμέτζο"
      },
      events: [
        {
          title: {
            en: "The Tahirids and Saffarids rise in the east",
            el: "Οι Ταχιρίδες και οι Σαφφαρίδες ανέρχονται στην ανατολή"
          },
          description: {
            en: "Semi-independent Iranian dynasties emerge in Khurasan and Sistan as Abbasid central power weakens.",
            el: "Ημιανεξάρτητες ιρανικές δυναστείες αναδύονται στο Χορασάν και το Σιστάν καθώς η κεντρική αββασιδική εξουσία εξασθενεί."
          },
          extendedDescription: {
            en: "The Tahirids governed Khurasan in the caliph's name but ran their own affairs, while the coppersmith-turned-warlord Ya'qub ibn al-Layth built the Saffarid state by the sword. This 'Iranian Intermezzo' of native dynasties gradually restored Persian self-rule between the Arab conquest and the Turkish invasions.",
            el: "Οι Ταχιρίδες κυβερνούσαν το Χορασάν στο όνομα του χαλίφη αλλά διαχειρίζονταν τις δικές τους υποθέσεις, ενώ ο χαλκουργός που έγινε πολέμαρχος Γιακούμπ ιμπν αλ-Λάιθ έχτισε το κράτος των Σαφφαριδών με το σπαθί. Αυτό το «Ιρανικό Ιντερμέτζο» των εγχώριων δυναστειών αποκατέστησε σταδιακά την περσική αυτοδιοίκηση ανάμεσα στην αραβική κατάκτηση και τις τουρκικές εισβολές."
          },
          category: "political"
        }
      ]
    },
    {
      year: 850,
      era: {
        en: "Abbasid Golden Age",
        el: "Χρυσή Εποχή των Αββασιδών"
      },
      events: [
        {
          title: {
            en: "Persian scholars and the House of Wisdom",
            el: "Πέρσες λόγιοι και ο Οίκος της Σοφίας"
          },
          description: {
            en: "Iranian scholars like al-Khwarizmi help lead the translation movement and the scientific flowering of Baghdad.",
            el: "Ιρανοί λόγιοι όπως ο αλ-Χουαρίζμι πρωτοστατούν στο μεταφραστικό κίνημα και την επιστημονική άνθηση της Βαγδάτης."
          },
          extendedDescription: {
            en: "In the Bayt al-Hikma, Greek, Persian, and Indian works were translated into Arabic and built upon. Al-Khwarizmi's work gave the world 'algebra' and 'algorithm'; the physician al-Razi (Rhazes) and later the polymath Ibn Sina (Avicenna) — both Iranians — became towering figures of medieval science.",
            el: "Στο Μπάιτ αλ-Χίκμα, ελληνικά, περσικά και ινδικά έργα μεταφράζονταν στα αραβικά και εξελίσσονταν. Το έργο του αλ-Χουαρίζμι χάρισε στον κόσμο την «άλγεβρα» και τον «αλγόριθμο»· ο ιατρός αλ-Ράζι (Ραζής) και αργότερα ο πολυμαθής Ιμπν Σίνα (Αβικέννας) — και οι δύο Ιρανοί — έγιναν κορυφαίες μορφές της μεσαιωνικής επιστήμης."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Maqamat_hariri.jpg?width=1024",
            alt: {
              en: "A library scene from a 13th-century manuscript of the Maqamat of al-Hariri",
              el: "Σκηνή βιβλιοθήκης από χειρόγραφο του 13ου αιώνα των Μακαμάτ του αλ-Χαρίρι"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 874,
      era: {
        en: "The Iranian Intermezzo",
        el: "Το Ιρανικό Ιντερμέτζο"
      },
      events: [
        {
          title: {
            en: "The Samanids and the New Persian revival",
            el: "Οι Σαμανίδες και η αναγέννηση της Νέας Περσικής"
          },
          description: {
            en: "The Samanid dynasty rules Khurasan and Transoxiana from Bukhara, patronizing a golden age of Persian letters.",
            el: "Η δυναστεία των Σαμανιδών κυβερνά το Χορασάν και την Υπερωξιανή από τη Μπουχάρα, προστατεύοντας μια χρυσή εποχή των περσικών γραμμάτων."
          },
          extendedDescription: {
            en: "Under the Samanids, New Persian written in the Arabic script blossomed as a literary language. Bukhara and Samarkand became centres of learning; the poet Rudaki sang at court, and the young Ibn Sina studied in the Samanid library — the cradle of the culture that would define the eastern Islamic world.",
            el: "Υπό τους Σαμανίδες, η Νέα Περσική γραμμένη με αραβικό αλφάβητο άνθισε ως λογοτεχνική γλώσσα. Η Μπουχάρα και η Σαμαρκάνδη έγιναν κέντρα μάθησης· ο ποιητής Ρουντακί τραγουδούσε στην αυλή, και ο νεαρός Ιμπν Σίνα μελετούσε στη βιβλιοθήκη των Σαμανιδών — το λίκνο του πολιτισμού που θα όριζε τον ανατολικό ισλαμικό κόσμο."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Map_of_the_Samanid_amirate_at_the_death_of_Nasr_II,_943.svg?width=1024",
            alt: {
              en: "The Samanid realm at its height in the 10th century",
              el: "Το κράτος των Σαμανιδών στο απόγειό του τον 10ο αιώνα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 934,
      era: {
        en: "The Buyid Age",
        el: "Η Εποχή των Μπουγιδών"
      },
      events: [
        {
          title: {
            en: "The Buyids take Baghdad",
            el: "Οι Μπουγίδες καταλαμβάνουν τη Βαγδάτη"
          },
          description: {
            en: "The Shia Buyid dynasty from northern Iran seizes control of Baghdad, reducing the Abbasid caliph to a figurehead.",
            el: "Η σιιτική δυναστεία των Μπουγιδών από το βόρειο Ιράν καταλαμβάνει τη Βαγδάτη, μειώνοντας τον Αββασίδη χαλίφη σε διακοσμητική μορφή."
          },
          extendedDescription: {
            en: "The Buyids, of Daylamite mountain stock, ruled western Iran and Iraq while keeping the caliph as a religious figurehead. Their Shia patronage, the revived Persian title 'Shahanshah,' and the brilliant courts of Rey and Shiraz marked the fullest flowering of the Iranian Intermezzo.",
            el: "Οι Μπουγίδες, καταγωγής από τους ορεσίβιους Ντεϊλαμίτες, κυβέρνησαν το δυτικό Ιράν και το Ιράκ κρατώντας τον χαλίφη ως θρησκευτική μόνο μορφή. Η σιιτική χορηγία τους, ο αναβιωμένος περσικός τίτλος «Σαχανσάχ» και οι λαμπρές αυλές του Ρέι και της Σιράζ σηματοδότησαν την πληρέστερη άνθηση του Ιρανικού Ιντερμέτζο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1010,
      era: {
        en: "The Persian Renaissance",
        el: "Η Περσική Αναγέννηση"
      },
      events: [
        {
          title: {
            en: "Ferdowsi completes the Shahnameh",
            el: "Ο Φερντοουσί ολοκληρώνει το Σαχναμέ"
          },
          description: {
            en: "The poet Ferdowsi finishes the Shahnameh, the 'Book of Kings,' the national epic that preserved Persian identity.",
            el: "Ο ποιητής Φερντοουσί ολοκληρώνει το Σαχναμέ, το «Βιβλίο των Βασιλέων», το εθνικό έπος που διατήρησε την περσική ταυτότητα."
          },
          extendedDescription: {
            en: "Composed over three decades in some fifty thousand verses of almost pure Persian, the Shahnameh retold the myths and history of Iran from creation to the Arab conquest. It anchored the Persian language and a sense of Iranian nationhood that would survive every conqueror to come.",
            el: "Συντεθειμένο επί τρεις δεκαετίες σε περίπου πενήντα χιλιάδες στίχους σχεδόν καθαρής περσικής, το Σαχναμέ αναδιηγήθηκε τους μύθους και την ιστορία του Ιράν από τη δημιουργία ως την αραβική κατάκτηση. Αγκύρωσε την περσική γλώσσα και μια αίσθηση ιρανικής εθνότητας που θα επιβίωνε από κάθε επερχόμενο κατακτητή."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Imaginary_depiction_of_the_poet_Firdausi._Folio_from_a_Khavarannama_(The_Book_of_the_East)_of_ibn_Husam_al-Din,_1476-1486_(cropped).jpg?width=1024",
            alt: {
              en: "An imaginary depiction of the poet Ferdowsi, author of the Shahnameh",
              el: "Φανταστική απεικόνιση του ποιητή Φερντοουσί, συγγραφέα του Σαχναμέ"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1037,
      era: {
        en: "The Persian Renaissance",
        el: "Η Περσική Αναγέννηση"
      },
      events: [
        {
          title: {
            en: "The death of Avicenna",
            el: "Ο θάνατος του Αβικέννα"
          },
          description: {
            en: "Ibn Sina (Avicenna), the greatest philosopher-physician of the age, dies, leaving works that shaped both Islamic and European thought.",
            el: "Ο Ιμπν Σίνα (Αβικέννας), ο μεγαλύτερος φιλόσοφος-ιατρός της εποχής, πεθαίνει, αφήνοντας έργα που διαμόρφωσαν τόσο την ισλαμική όσο και την ευρωπαϊκή σκέψη."
          },
          extendedDescription: {
            en: "Avicenna's Canon of Medicine was a standard textbook in Europe for six centuries, and his metaphysics reshaped philosophy from Baghdad to Paris. He embodied the Persian scientific renaissance just as a new power — the Seljuk Turks — was riding in from the steppe to seize the Iranian world.",
            el: "Ο Κανών της Ιατρικής του Αβικέννα υπήρξε βασικό εγχειρίδιο στην Ευρώπη επί έξι αιώνες, και η μεταφυσική του ξαναδιαμόρφωσε τη φιλοσοφία από τη Βαγδάτη ως το Παρίσι. Ενσάρκωσε την περσική επιστημονική αναγέννηση ακριβώς τη στιγμή που μια νέα δύναμη — οι Σελτζούκοι Τούρκοι — κατέφτανε από τη στέπα για να καταλάβει τον ιρανικό κόσμο."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Avicenna_Bust,_left_profile_(cropped).jpg?width=1024",
            alt: {
              en: "Bust of Avicenna (Ibn Sina), Persian polymath and physician",
              el: "Προτομή του Αβικέννα (Ιμπν Σίνα), Πέρση πολυμαθή και ιατρού"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
