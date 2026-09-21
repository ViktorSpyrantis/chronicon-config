/** Neo-Babylonian Empire — Νεοβαβυλωνιακή Αυτοκρατορία · Iraqi History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const NEO_BABYLONIAN_EMPIRE = {
  id: "neo-babylonian-empire" as const,
  label: {
    en: "Neo-Babylonian Empire",
    el: "Νεοβαβυλωνιακή Αυτοκρατορία"
  },
  supertitle: {
    en: "Ancient Mesopotamia",
    el: "Αρχαία Μεσοποταμία"
  },
  title: {
    en: "The Neo-Babylonian Empire",
    el: "Η Νεοβαβυλωνιακή Αυτοκρατορία"
  },
  subtitle: {
    en: "From the wreck of Assyria, a Chaldean dynasty raised Babylon to its final and most dazzling glory. Nebuchadnezzar II rebuilt the city with the blue Ishtar Gate, a towering ziggurat, and gardens remembered as a wonder of the world — and carried the people of Judah into exile. Yet within a single lifetime it all passed, at a stroke, to Cyrus the Persian. Slide across the last age of independent Babylon.",
    el: "Από τα συντρίμμια της Ασσυρίας, μια χαλδαϊκή δυναστεία ανύψωσε τη Βαβυλώνα στην τελευταία και πιο εκθαμβωτική της δόξα. Ο Ναβουχοδονόσορ Β΄ ξανάχτισε την πόλη με τη γαλάζια Πύλη της Ιστάρ, ένα πανύψηλο ζιγκουράτ και κήπους που θυμούνται ως θαύμα του κόσμου — και οδήγησε τον λαό του Ιούδα στην εξορία. Ωστόσο μέσα σε μία μόνο ζωή, όλα πέρασαν, με μια κίνηση, στον Κύρο τον Πέρση. Μετακινηθείτε στην τελευταία εποχή της ανεξάρτητης Βαβυλώνας."
  },
  menuDescription: {
    en: "Nebuchadnezzar's golden Babylon, the exile of Judah, and the coming of Cyrus.",
    el: "Η χρυσή Βαβυλώνα του Ναβουχοδονόσορα, η εξορία του Ιούδα και η έλευση του Κύρου."
  },
  footerLabel: {
    en: "Neo-Babylonian Empire · 626-539 BC",
    el: "Νεοβαβυλωνιακή Αυτοκρατορία · 626-539 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Neo-Babylonian Empire",
    el: "Η Νεοβαβυλωνιακή Αυτοκρατορία"
  },
  theme: THEMES.sapphire,
  timeline: [
    {
      year: -626,
      era: {
        en: "Chaldean Dynasty",
        el: "Χαλδαϊκή Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Nabopolassar frees Babylon",
            el: "Ο Ναβοπολάσσαρ ελευθερώνει τη Βαβυλώνα"
          },
          description: {
            en: "The Chaldean chief Nabopolassar seizes Babylon, throws off the Assyrian yoke, and founds a new empire.",
            el: "Ο Χαλδαίος αρχηγός Ναβοπολάσσαρ καταλαμβάνει τη Βαβυλώνα, αποτινάσσει τον ασσυριακό ζυγό και ιδρύει μια νέα αυτοκρατορία."
          },
          extendedDescription: {
            en: "As Assyria weakened after Ashurbanipal's death, Nabopolassar rose from the Chaldean tribes of the south to claim the throne of Babylon. Allied with the Medes, he tore the heart out of the Assyrian Empire, destroying Nineveh in 612 BCE, and left his son a realm that inherited Assyria's western dominions.",
            el: "Καθώς η Ασσυρία αποδυναμωνόταν μετά τον θάνατο του Ασσουρμπανιπάλ, ο Ναβοπολάσσαρ αναδύθηκε από τις χαλδαϊκές φυλές του νότου για να διεκδικήσει τον θρόνο της Βαβυλώνας. Σύμμαχος των Μήδων, ξερίζωσε την καρδιά της Ασσυριακής Αυτοκρατορίας, καταστρέφοντας τη Νινευή το 612 π.Χ., και άφησε στον γιο του ένα κράτος που κληρονόμησε τις δυτικές κτήσεις της Ασσυρίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: -605,
      era: {
        en: "Chaldean Dynasty",
        el: "Χαλδαϊκή Δυναστεία"
      },
      events: [
        {
          title: {
            en: "The Battle of Carchemish",
            el: "Η Μάχη της Καρχεμίς"
          },
          description: {
            en: "As crown prince, Nebuchadnezzar smashes the Egyptian army at Carchemish, winning Syria and the Levant for Babylon.",
            el: "Ως διάδοχος, ο Ναβουχοδονόσορ συντρίβει τον αιγυπτιακό στρατό στην Καρχεμίς, κερδίζοντας τη Συρία και τον Λεβάντε για τη Βαβυλώνα."
          },
          extendedDescription: {
            en: "At Carchemish on the Euphrates, Nebuchadnezzar destroyed the Egyptians who had marched north to prop up the last Assyrians. The victory handed Babylon the whole of Syria and Palestine and marked him as a general of genius — just before news of his father's death called him home to be crowned.",
            el: "Στην Καρχεμίς επί του Ευφράτη, ο Ναβουχοδονόσορ κατέστρεψε τους Αιγυπτίους που είχαν προελάσει βόρεια για να στηρίξουν τους τελευταίους Ασσυρίους. Η νίκη παρέδωσε στη Βαβυλώνα ολόκληρη τη Συρία και την Παλαιστίνη και τον ανέδειξε στρατηγό ιδιοφυΐα — λίγο πριν η είδηση του θανάτου του πατέρα του τον καλέσει πίσω για να στεφθεί."
          },
          category: "military"
        }
      ]
    },
    {
      year: -604,
      era: {
        en: "Chaldean Dynasty",
        el: "Χαλδαϊκή Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Nebuchadnezzar II takes the throne",
            el: "Ο Ναβουχοδονόσορ Β΄ ανεβαίνει στον θρόνο"
          },
          description: {
            en: "The greatest of Babylon's kings begins a reign of forty-three years that will make his city the wonder of the age.",
            el: "Ο μεγαλύτερος από τους βασιλείς της Βαβυλώνας αρχίζει μια βασιλεία σαράντα τριών ετών που θα κάνει την πόλη του το θαύμα της εποχής."
          },
          extendedDescription: {
            en: "Nebuchadnezzar II ruled the richest empire of his day, drawing tribute from the Mediterranean to the Gulf. A tireless campaigner and even more tireless builder, he poured the wealth of empire into Babylon, determined to make it the most magnificent city on earth — and largely succeeding.",
            el: "Ο Ναβουχοδονόσορ Β΄ κυβέρνησε την πλουσιότερη αυτοκρατορία της εποχής του, αντλώντας φόρους από τη Μεσόγειο ως τον Κόλπο. Ακούραστος εκστρατευτής και ακόμη πιο ακούραστος οικοδόμος, έριξε τον πλούτο της αυτοκρατορίας στη Βαβυλώνα, αποφασισμένος να την κάνει τη μεγαλοπρεπέστερη πόλη της γης — και το πέτυχε σε μεγάλο βαθμό."
          },
          category: "political"
        }
      ]
    },
    {
      year: -600,
      label: "c. 600 BC",
      era: {
        en: "Chaldean Dynasty",
        el: "Χαλδαϊκή Δυναστεία"
      },
      events: [
        {
          title: {
            en: "The wonders of Babylon",
            el: "Τα θαύματα της Βαβυλώνας"
          },
          description: {
            en: "Nebuchadnezzar rebuilds Babylon with the glazed-blue Ishtar Gate, the great ziggurat Etemenanki, and gardens of legend.",
            el: "Ο Ναβουχοδονόσορ ξαναχτίζει τη Βαβυλώνα με την εφυαλωμένη γαλάζια Πύλη της Ιστάρ, το μεγάλο ζιγκουράτ Ετεμενάνκι και θρυλικούς κήπους."
          },
          extendedDescription: {
            en: "The Ishtar Gate, faced with lapis-blue tiles and striding bulls and dragons, opened onto a Processional Way lined with lions. Above the city rose Etemenanki, the ziggurat remembered as the Tower of Babel, and — if the Greek writers are right — the Hanging Gardens, one of the Seven Wonders of the ancient world.",
            el: "Η Πύλη της Ιστάρ, επενδυμένη με πλακίδια σε γαλάζιο λαζουρίτη και βηματίζοντες ταύρους και δράκους, άνοιγε σε μια Πομπική Οδό στολισμένη με λιοντάρια. Πάνω από την πόλη υψωνόταν το Ετεμενάνκι, το ζιγκουράτ που θυμούνται ως Πύργο της Βαβέλ, και — αν έχουν δίκιο οι Έλληνες συγγραφείς — οι Κρεμαστοί Κήποι, ένα από τα Επτά Θαύματα του αρχαίου κόσμου."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ishtar%20Gate%20at%20Berlin%20Museum.jpg?width=1024",
            alt: {
              en: "The reconstructed Ishtar Gate of Babylon, now in Berlin",
              el: "Η ανακατασκευασμένη Πύλη της Ιστάρ της Βαβυλώνας, σήμερα στο Βερολίνο"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -597,
      era: {
        en: "Chaldean Dynasty",
        el: "Χαλδαϊκή Δυναστεία"
      },
      events: [
        {
          title: {
            en: "The first fall of Jerusalem",
            el: "Η πρώτη πτώση της Ιερουσαλήμ"
          },
          description: {
            en: "Nebuchadnezzar captures Jerusalem, deposes its king, and carries off the first captives to Babylon.",
            el: "Ο Ναβουχοδονόσορ καταλαμβάνει την Ιερουσαλήμ, καθαιρεί τον βασιλιά της και μεταφέρει τους πρώτους αιχμαλώτους στη Βαβυλώνα."
          },
          extendedDescription: {
            en: "When Judah wavered in its loyalty, Nebuchadnezzar besieged Jerusalem, took its young king Jehoiachin, and deported the court, craftsmen, and treasure — an event dated precisely by a Babylonian chronicle tablet. He set a puppet, Zedekiah, on the throne, but the peace would not hold for long.",
            el: "Όταν ο Ιούδας κλονίστηκε στην πίστη του, ο Ναβουχοδονόσορ πολιόρκησε την Ιερουσαλήμ, πήρε τον νεαρό βασιλιά της Ιωαχίν και εκτόπισε την αυλή, τους τεχνίτες και τον θησαυρό — ένα γεγονός που χρονολογείται με ακρίβεια από μια βαβυλωνιακή χρονογραφική πινακίδα. Έβαλε έναν υποτελή, τον Σεδεκία, στον θρόνο, όμως η ειρήνη δεν θα κρατούσε πολύ."
          },
          category: "military"
        }
      ]
    },
    {
      year: -587,
      era: {
        en: "Chaldean Dynasty",
        el: "Χαλδαϊκή Δυναστεία"
      },
      events: [
        {
          title: {
            en: "The destruction of Jerusalem and the Exile",
            el: "Η καταστροφή της Ιερουσαλήμ και η Αιχμαλωσία"
          },
          description: {
            en: "After a revolt, Nebuchadnezzar razes Jerusalem and its Temple and deports the people of Judah — the Babylonian Exile.",
            el: "Έπειτα από εξέγερση, ο Ναβουχοδονόσορ ισοπεδώνει την Ιερουσαλήμ και τον Ναό της και εκτοπίζει τον λαό του Ιούδα — η Βαβυλώνια Αιχμαλωσία."
          },
          extendedDescription: {
            en: "Zedekiah's rebellion brought catastrophe: the city was starved, stormed, and burned, and Solomon's Temple destroyed. The exile in Babylon became one of the formative events of Jewish history, shaping the Hebrew Bible and the faith that returned to rebuild the Temple two generations later under Persian rule.",
            el: "Η εξέγερση του Σεδεκία έφερε καταστροφή: η πόλη λιμοκτόνησε, κυριεύτηκε και κάηκε, και ο Ναός του Σολομώντα καταστράφηκε. Η εξορία στη Βαβυλώνα έγινε ένα από τα διαμορφωτικά γεγονότα της εβραϊκής ιστορίας, σχηματίζοντας την Εβραϊκή Βίβλο και την πίστη που επέστρεψε για να ξαναχτίσει τον Ναό δύο γενιές αργότερα υπό περσική κυριαρχία."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -562,
      era: {
        en: "Chaldean Dynasty",
        el: "Χαλδαϊκή Δυναστεία"
      },
      events: [
        {
          title: {
            en: "The death of Nebuchadnezzar",
            el: "Ο θάνατος του Ναβουχοδονόσορα"
          },
          description: {
            en: "The great king dies after forty-three years, and Babylon slides into a decade of coups and short-lived rulers.",
            el: "Ο μεγάλος βασιλιάς πεθαίνει έπειτα από σαράντα τρία χρόνια, και η Βαβυλώνα γλιστρά σε μια δεκαετία πραξικοπημάτων και βραχύβιων ηγεμόνων."
          },
          extendedDescription: {
            en: "None of Nebuchadnezzar's successors matched him. His son was murdered, and the throne changed hands amid intrigue until a courtier named Nabonidus seized power. The empire was still vast and rich, but its foundations were shakier than they looked, and a new power was rising on the Iranian plateau.",
            el: "Κανένας από τους διαδόχους του Ναβουχοδονόσορα δεν τον έφτασε. Ο γιος του δολοφονήθηκε, και ο θρόνος άλλαξε χέρια μέσα σε ίντριγκες ώσπου ένας αυλικός ονόματι Ναβονίδης άρπαξε την εξουσία. Η αυτοκρατορία ήταν ακόμη τεράστια και πλούσια, όμως τα θεμέλιά της ήταν πιο ασταθή απ' ό,τι φαίνονταν, και μια νέα δύναμη ανερχόταν στο ιρανικό οροπέδιο."
          },
          category: "political"
        }
      ]
    },
    {
      year: -560,
      label: "c. 560 BC",
      era: {
        en: "Chaldean Dynasty",
        el: "Χαλδαϊκή Δυναστεία"
      },
      events: [
        {
          title: {
            en: "The astronomers of Babylon",
            el: "Οι αστρονόμοι της Βαβυλώνας"
          },
          description: {
            en: "Babylonian scholars keep meticulous records of the heavens, laying the foundations of mathematical astronomy.",
            el: "Βαβυλώνιοι λόγιοι κρατούν σχολαστικά αρχεία των ουρανών, θέτοντας τα θεμέλια της μαθηματικής αστρονομίας."
          },
          extendedDescription: {
            en: "For centuries the priests of Marduk logged the positions of the moon and planets night after night in 'astronomical diaries.' From this vast dataset they learned to predict eclipses and planetary cycles — knowledge later Greek astronomers built upon. Babylon's base-60 mathematics still divides our hours and degrees today.",
            el: "Επί αιώνες οι ιερείς του Μαρδούκ κατέγραφαν τις θέσεις της σελήνης και των πλανητών νύχτα με τη νύχτα σε «αστρονομικά ημερολόγια». Από αυτό το τεράστιο σύνολο δεδομένων έμαθαν να προβλέπουν εκλείψεις και πλανητικούς κύκλους — γνώση πάνω στην οποία οικοδόμησαν αργότερα οι Έλληνες αστρονόμοι. Τα εξηκονταδικά μαθηματικά της Βαβυλώνας διαιρούν ακόμη και σήμερα τις ώρες και τις μοίρες μας."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -556,
      era: {
        en: "Chaldean Dynasty",
        el: "Χαλδαϊκή Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Nabonidus, the last king",
            el: "Ο Ναβονίδης, ο τελευταίος βασιλιάς"
          },
          description: {
            en: "The devout, eccentric Nabonidus exalts the moon god Sin, withdraws to the Arabian oasis of Tayma, and alienates Babylon's priests.",
            el: "Ο ευλαβής, εκκεντρικός Ναβονίδης εξυμνεί τον θεό της σελήνης Σιν, αποσύρεται στην αραβική όαση Τάιμα και αποξενώνει τους ιερείς της Βαβυλώνας."
          },
          extendedDescription: {
            en: "Nabonidus promoted the moon god over Marduk and spent a decade far away at Tayma, leaving his son Belshazzar as regent. His neglect of Babylon's great New Year festival outraged the powerful priesthood of Marduk — a resentment the Persian Cyrus would exploit to present himself not as a conqueror but a liberator.",
            el: "Ο Ναβονίδης προώθησε τον θεό της σελήνης πάνω από τον Μαρδούκ και πέρασε μια δεκαετία μακριά στην Τάιμα, αφήνοντας τον γιο του Βαλτάσαρ αντιβασιλέα. Η παραμέλησή του προς τη μεγάλη εορτή της Πρωτοχρονιάς της Βαβυλώνας εξόργισε το ισχυρό ιερατείο του Μαρδούκ — μια δυσαρέσκεια που ο Πέρσης Κύρος θα εκμεταλλευόταν για να παρουσιαστεί όχι ως κατακτητής αλλά ως ελευθερωτής."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -539,
      era: {
        en: "Fall of Babylon",
        el: "Πτώση της Βαβυλώνας"
      },
      events: [
        {
          title: {
            en: "Cyrus takes Babylon",
            el: "Ο Κύρος καταλαμβάνει τη Βαβυλώνα"
          },
          description: {
            en: "The Persian king Cyrus the Great enters Babylon almost unopposed, ending Mesopotamian independence for over two thousand years.",
            el: "Ο Πέρσης βασιλιάς Κύρος ο Μέγας εισέρχεται στη Βαβυλώνα σχεδόν αναίμακτα, τερματίζοντας τη μεσοποταμιακή ανεξαρτησία για πάνω από δύο χιλιάδες χρόνια."
          },
          extendedDescription: {
            en: "After defeating the Babylonian army at Opis, Cyrus took the city without a battle; the Cyrus Cylinder proclaims that Marduk himself chose him to restore order. He let the exiled Judahites return home to rebuild their Temple. Babylon lived on as a great city, but never again as a capital of its own — the age of Mesopotamian empires was over.",
            el: "Αφού νίκησε τον βαβυλωνιακό στρατό στην Ώπιδα, ο Κύρος πήρε την πόλη χωρίς μάχη· ο Κύλινδρος του Κύρου διακηρύσσει ότι ο ίδιος ο Μαρδούκ τον επέλεξε για να αποκαταστήσει την τάξη. Άφησε τους εξόριστους Ιουδαίους να επιστρέψουν στην πατρίδα τους για να ξαναχτίσουν τον Ναό τους. Η Βαβυλώνα επέζησε ως μεγάλη πόλη, όμως ποτέ ξανά ως πρωτεύουσα δική της — η εποχή των μεσοποταμιακών αυτοκρατοριών είχε τελειώσει."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Cyrus%20Cylinder%20front.jpg?width=1024",
            alt: {
              en: "The Cyrus Cylinder, which records Cyrus's capture of Babylon",
              el: "Ο Κύλινδρος του Κύρου, που καταγράφει την κατάληψη της Βαβυλώνας από τον Κύρο"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
