/** The Two Kingdoms — Τα Δύο Βασίλεια · Ancient Levant */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const TWO_KINGDOMS = {
  id: "two-kingdoms" as const,
  label: {
    en: "The Two Kingdoms",
    el: "Τα Δύο Βασίλεια"
  },
  supertitle: {
    en: "The Ancient Levant",
    el: "Ο Αρχαίος Λεβάντες"
  },
  title: {
    en: "Israel & Judah: The Two Kingdoms",
    el: "Ισραήλ & Ιούδας: Τα Δύο Βασίλεια"
  },
  subtitle: {
    en: "For two centuries the land was split between two rival kingdoms — richer, stronger Israel in the north, smaller Judah in the south around Jerusalem. It was the age of Omri and Ahab, of Queen Jezebel and the prophet Elijah, of the fiery preaching of Amos and Hosea — and, in the end, of the Assyrian war-machine, which swept the northern kingdom away forever. Slide across the age of the two kingdoms.",
    el: "Επί δύο αιώνες η γη ήταν χωρισμένη σε δύο αντίπαλα βασίλεια — το πλουσιότερο, ισχυρότερο Ισραήλ στον βορρά, ο μικρότερος Ιούδας στον νότο γύρω από την Ιερουσαλήμ. Ήταν η εποχή του Αμρί και του Αχαάβ, της βασίλισσας Ιεζάβελ και του προφήτη Ηλία, του φλογερού κηρύγματος του Αμώς και του Ωσηέ — και, στο τέλος, της ασσυριακής πολεμικής μηχανής, που σάρωσε το βόρειο βασίλειο για πάντα. Μετακινηθείτε στην εποχή των δύο βασιλείων."
  },
  menuDescription: {
    en: "Israel and Judah, the prophets, and the Assyrian fall of Samaria.",
    el: "Το Ισραήλ και ο Ιούδας, οι προφήτες και η ασσυριακή πτώση της Σαμάρειας."
  },
  footerLabel: {
    en: "The Two Kingdoms · 925-722 BC",
    el: "Τα Δύο Βασίλεια · 925-722 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Two Kingdoms",
    el: "Τα Δύο Βασίλεια"
  },
  theme: THEMES.amber,
  timeline: [
    {
      year: -925,
      era: {
        en: "The Divided Kingdom",
        el: "Το Διχασμένο Βασίλειο"
      },
      events: [
        {
          title: {
            en: "Pharaoh Shishak's raid",
            el: "Η επιδρομή του φαραώ Σισάκ"
          },
          description: {
            en: "The Egyptian pharaoh Shishak sweeps through the land, plundering towns in both Israel and Judah.",
            el: "Ο Αιγύπτιος φαραώ Σισάκ σαρώνει τη γη, λεηλατώντας πόλεις τόσο στο Ισραήλ όσο και στον Ιούδα."
          },
          extendedDescription: {
            en: "Soon after the kingdom split, the pharaoh Sheshonq I (the biblical Shishak) campaigned through Canaan, a raid recorded both in the Bible and on the walls of the temple at Karnak. His list of captured towns is one of the earliest external witnesses to the geography of the two young kingdoms.",
            el: "Λίγο μετά τη διάσπαση του βασιλείου, ο φαραώ Σεσόγχ Α΄ (ο βιβλικός Σισάκ) εκστράτευσε στη Χαναάν, μια επιδρομή καταγεγραμμένη τόσο στη Βίβλο όσο και στους τοίχους του ναού του Καρνάκ. Ο κατάλογος των πόλεων που κατέλαβε είναι μία από τις αρχαιότερες εξωτερικές μαρτυρίες για τη γεωγραφία των δύο νεαρών βασιλείων."
          },
          category: "military"
        }
      ]
    },
    {
      year: -880,
      label: "c. 880 BC",
      era: {
        en: "Kingdom of Israel",
        el: "Βασίλειο του Ισραήλ"
      },
      events: [
        {
          title: {
            en: "Omri founds Samaria",
            el: "Ο Αμρί ιδρύει τη Σαμάρεια"
          },
          description: {
            en: "King Omri builds a new capital at Samaria and makes northern Israel a regional power.",
            el: "Ο βασιλιάς Αμρί χτίζει μια νέα πρωτεύουσα στη Σαμάρεια και κάνει το βόρειο Ισραήλ περιφερειακή δύναμη."
          },
          extendedDescription: {
            en: "Omri founded a strong dynasty and a splendid hilltop capital at Samaria, and made Israel prosperous enough that the Assyrians long called it 'the House of Omri.' The northern kingdom, with its fertile valleys and trade routes, was now clearly the greater of the two Hebrew states.",
            el: "Ο Αμρί ίδρυσε μια ισχυρή δυναστεία και μια λαμπρή λοφώδη πρωτεύουσα στη Σαμάρεια, και έκανε το Ισραήλ αρκετά εύπορο ώστε οι Ασσύριοι επί μακρόν να το αποκαλούν «Οίκο του Αμρί». Το βόρειο βασίλειο, με τις εύφορες κοιλάδες και τους εμπορικούς δρόμους του, ήταν πλέον σαφώς το μεγαλύτερο από τα δύο εβραϊκά κράτη."
          },
          category: "political"
        }
      ]
    },
    {
      year: -870,
      label: "c. 870 BC",
      era: {
        en: "Kingdom of Israel",
        el: "Βασίλειο του Ισραήλ"
      },
      events: [
        {
          title: {
            en: "Ahab, Jezebel, and Elijah",
            el: "Ο Αχαάβ, η Ιεζάβελ και ο Ηλίας"
          },
          description: {
            en: "King Ahab and his Phoenician queen Jezebel clash with the prophet Elijah over the worship of Baal.",
            el: "Ο βασιλιάς Αχαάβ και η Φοίνισσα βασίλισσά του Ιεζάβελ συγκρούονται με τον προφήτη Ηλία για τη λατρεία του Βάαλ."
          },
          extendedDescription: {
            en: "Ahab's marriage to the Tyrian princess Jezebel sealed an alliance with Phoenicia but brought the cult of Baal to Samaria, provoking the prophet Elijah's fierce resistance. The struggle, dramatized in the Bible as a contest between Baal and the God of Israel, became a defining story of prophetic opposition to kings.",
            el: "Ο γάμος του Αχαάβ με την πριγκίπισσα της Τύρου Ιεζάβελ σφράγισε μια συμμαχία με τη Φοινίκη αλλά έφερε τη λατρεία του Βάαλ στη Σαμάρεια, προκαλώντας τη σφοδρή αντίσταση του προφήτη Ηλία. Ο αγώνας, δραματοποιημένος στη Βίβλο ως αναμέτρηση ανάμεσα στον Βάαλ και τον Θεό του Ισραήλ, έγινε μια καθοριστική ιστορία προφητικής αντίστασης στους βασιλείς."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -853,
      era: {
        en: "Kingdom of Israel",
        el: "Βασίλειο του Ισραήλ"
      },
      events: [
        {
          title: {
            en: "Israel at the Battle of Qarqar",
            el: "Το Ισραήλ στη Μάχη του Καρκάρ"
          },
          description: {
            en: "Ahab joins a coalition of kings that halts the Assyrian advance at Qarqar in Syria.",
            el: "Ο Αχαάβ συμμετέχει σε μια συμμαχία βασιλέων που ανακόπτει την ασσυριακή προέλαση στο Καρκάρ της Συρίας."
          },
          extendedDescription: {
            en: "An Assyrian inscription lists Ahab of Israel among the western kings who fought Shalmaneser III at Qarqar, crediting him with two thousand chariots — a rare mention of a biblical ruler in a foreign record, and a measure of Israel's military strength at its height.",
            el: "Μια ασσυριακή επιγραφή αναφέρει τον Αχαάβ του Ισραήλ ανάμεσα στους δυτικούς βασιλείς που πολέμησαν τον Σαλμανασάρ Γ΄ στο Καρκάρ, αποδίδοντάς του δύο χιλιάδες άρματα — μια σπάνια μνεία βιβλικού ηγεμόνα σε ξένο αρχείο, και ένα μέτρο της στρατιωτικής ισχύος του Ισραήλ στο απόγειό της."
          },
          category: "military"
        }
      ]
    },
    {
      year: -841,
      era: {
        en: "Kingdom of Israel",
        el: "Βασίλειο του Ισραήλ"
      },
      events: [
        {
          title: {
            en: "Jehu bows to Assyria",
            el: "Ο Ιηού υποκλίνεται στην Ασσυρία"
          },
          description: {
            en: "After seizing the throne in a bloody coup, Jehu pays tribute to Assyria, recorded on the Black Obelisk.",
            el: "Αφού αρπάζει τον θρόνο με ένα αιματηρό πραξικόπημα, ο Ιηού καταβάλλει φόρο στην Ασσυρία, καταγεγραμμένο στον Μαύρο Οβελίσκο."
          },
          extendedDescription: {
            en: "Jehu overthrew the house of Omri, wiping out Ahab's line and the priests of Baal. Soon after, he submitted to Shalmaneser III; the Assyrian Black Obelisk shows a figure labelled as Jehu bowing before the Assyrian king — the earliest surviving picture of an Israelite. Israel was now caught in Assyria's lengthening shadow.",
            el: "Ο Ιηού ανέτρεψε τον οίκο του Αμρί, εξολοθρεύοντας τη γενιά του Αχαάβ και τους ιερείς του Βάαλ. Λίγο αργότερα υποτάχθηκε στον Σαλμανασάρ Γ΄· ο ασσυριακός Μαύρος Οβελίσκος δείχνει μια μορφή που φέρει την ονομασία Ιηού να υποκλίνεται μπροστά στον Ασσύριο βασιλιά — η αρχαιότερη σωζόμενη εικόνα Ισραηλίτη. Το Ισραήλ βρισκόταν πλέον στην επιμηκυνόμενη σκιά της Ασσυρίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: -840,
      label: "c. 840 BC",
      era: {
        en: "Kingdom of Israel",
        el: "Βασίλειο του Ισραήλ"
      },
      events: [
        {
          title: {
            en: "The Mesha Stele",
            el: "Η Στήλη του Μεσά"
          },
          description: {
            en: "King Mesha of Moab records his revolt against Israel on a stone stele — a rare voice from Israel's neighbours.",
            el: "Ο βασιλιάς Μεσά του Μωάβ καταγράφει την εξέγερσή του κατά του Ισραήλ σε μια λίθινη στήλη — μια σπάνια φωνή από τους γείτονες του Ισραήλ."
          },
          extendedDescription: {
            en: "The Moabite king Mesha's victory stele boasts of throwing off the yoke of the 'House of Omri' and names the God of Israel, Yahweh. Written in a language almost identical to Hebrew, it is one of the most important inscriptions from the biblical world, a rival kingdom's own account of the endless border wars east of the Jordan.",
            el: "Η στήλη νίκης του Μωαβίτη βασιλιά Μεσά καυχάται ότι αποτίναξε τον ζυγό του «Οίκου του Αμρί» και κατονομάζει τον Θεό του Ισραήλ, τον Γιαχβέ. Γραμμένη σε γλώσσα σχεδόν ταυτόσημη με την εβραϊκή, είναι μία από τις σημαντικότερες επιγραφές του βιβλικού κόσμου, η αφήγηση ενός αντίπαλου βασιλείου για τους ατέλειωτους μεθοριακούς πολέμους ανατολικά του Ιορδάνη."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mesha%20stele%20(Louvre%2C%20AO%205066).jpg?width=1024",
            alt: {
              en: "The Mesha Stele (the Moabite Stone), now in the Louvre",
              el: "Η Στήλη του Μεσά (η Μωαβιτική Λίθος), σήμερα στο Λούβρο"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -760,
      label: "c. 760 BC",
      era: {
        en: "Age of the Prophets",
        el: "Εποχή των Προφητών"
      },
      events: [
        {
          title: {
            en: "Amos and Hosea",
            el: "Ο Αμώς και ο Ωσηέ"
          },
          description: {
            en: "The first of the writing prophets denounce injustice and idolatry, warning of coming judgement.",
            el: "Οι πρώτοι από τους προφήτες-συγγραφείς καταγγέλλουν την αδικία και την ειδωλολατρία, προειδοποιώντας για επερχόμενη κρίση."
          },
          extendedDescription: {
            en: "In a prosperous but unequal Israel, prophets like Amos, a shepherd, and Hosea thundered against the oppression of the poor and the worship of other gods, insisting that God demanded justice and mercy above sacrifice. Their words, preserved and collected, became a cornerstone of the Hebrew Bible and of later ethical monotheism.",
            el: "Σε ένα εύπορο αλλά άνισο Ισραήλ, προφήτες όπως ο Αμώς, ένας βοσκός, και ο Ωσηέ κεραυνοβολούσαν κατά της καταπίεσης των φτωχών και της λατρείας άλλων θεών, επιμένοντας ότι ο Θεός απαιτούσε δικαιοσύνη και έλεος πάνω από τη θυσία. Τα λόγια τους, διασωσμένα και συγκεντρωμένα, έγιναν ακρογωνιαίος λίθος της Εβραϊκής Βίβλου και του μεταγενέστερου ηθικού μονοθεϊσμού."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -733,
      era: {
        en: "Assyrian Conquest",
        el: "Ασσυριακή Κατάκτηση"
      },
      events: [
        {
          title: {
            en: "Assyria ravages the north",
            el: "Η Ασσυρία ρημάζει τον βορρά"
          },
          description: {
            en: "Tiglath-Pileser III strips Israel of Galilee and the east, deporting their people to Assyria.",
            el: "Ο Τιγλάθ-Πιλεσέρ Γ΄ αφαιρεί από το Ισραήλ τη Γαλιλαία και την ανατολή, εκτοπίζοντας τον λαό τους στην Ασσυρία."
          },
          extendedDescription: {
            en: "When Israel joined a revolt against Assyria, Tiglath-Pileser III annexed Galilee and Gilead and carried off their inhabitants, leaving a rump state around Samaria. The Assyrian policy of mass deportation, designed to break rebellious peoples, was now falling on Israel — a foretaste of the end.",
            el: "Όταν το Ισραήλ συμμετείχε σε εξέγερση κατά της Ασσυρίας, ο Τιγλάθ-Πιλεσέρ Γ΄ προσάρτησε τη Γαλιλαία και τη Γαλαάδ και μετέφερε τους κατοίκους τους, αφήνοντας ένα κολοβωμένο κράτος γύρω από τη Σαμάρεια. Η ασσυριακή πολιτική της μαζικής εκτόπισης, σχεδιασμένη να συντρίβει τους επαναστατημένους λαούς, έπεφτε τώρα πάνω στο Ισραήλ — μια πρόγευση του τέλους."
          },
          category: "military"
        }
      ]
    },
    {
      year: -722,
      era: {
        en: "Fall of Israel",
        el: "Πτώση του Ισραήλ"
      },
      events: [
        {
          title: {
            en: "The fall of Samaria",
            el: "Η πτώση της Σαμάρειας"
          },
          description: {
            en: "Assyria destroys the kingdom of Israel and deports its people — the 'ten lost tribes' of legend.",
            el: "Η Ασσυρία καταστρέφει το βασίλειο του Ισραήλ και εκτοπίζει τον λαό του — τις «δέκα χαμένες φυλές» του θρύλου."
          },
          extendedDescription: {
            en: "After a three-year siege, Samaria fell and the northern kingdom was extinguished; tens of thousands were deported across the Assyrian Empire and vanished from history as the 'ten lost tribes,' while new peoples were settled in their place. Only Judah, in the southern hills, was left to carry on the story of Israel.",
            el: "Έπειτα από τριετή πολιορκία, η Σαμάρεια έπεσε και το βόρειο βασίλειο εξαλείφθηκε· δεκάδες χιλιάδες εκτοπίστηκαν σε όλη την Ασσυριακή Αυτοκρατορία και εξαφανίστηκαν από την ιστορία ως οι «δέκα χαμένες φυλές», ενώ νέοι λαοί εγκαταστάθηκαν στη θέση τους. Μόνο ο Ιούδας, στους νότιους λόφους, απέμεινε να συνεχίσει την ιστορία του Ισραήλ."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
