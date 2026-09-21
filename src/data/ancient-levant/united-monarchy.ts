/** The United Monarchy — Η Ενωμένη Μοναρχία · Ancient Levant */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const UNITED_MONARCHY = {
  id: "united-monarchy" as const,
  label: {
    en: "The United Monarchy",
    el: "Η Ενωμένη Μοναρχία"
  },
  supertitle: {
    en: "The Ancient Levant",
    el: "Ο Αρχαίος Λεβάντες"
  },
  title: {
    en: "The United Monarchy of David & Solomon",
    el: "Η Ενωμένη Μοναρχία του Δαβίδ & του Σολομώντα"
  },
  subtitle: {
    en: "In the biblical account, David united the tribes of Israel, made Jerusalem his capital, and forged a small empire, and his son Solomon crowned it with a great Temple, fabled wealth, and wisdom. How large this kingdom really was is fiercely debated by historians, but its memory became the golden age against which all later ages of Israel and Judah were measured. Slide across the united kingdom and its division.",
    el: "Στη βιβλική αφήγηση, ο Δαβίδ ένωσε τις φυλές του Ισραήλ, έκανε την Ιερουσαλήμ πρωτεύουσά του και σφυρηλάτησε μια μικρή αυτοκρατορία, και ο γιος του Σολομών τη στεφάνωσε με έναν μεγάλο Ναό, μυθικό πλούτο και σοφία. Το πόσο μεγάλο ήταν πραγματικά αυτό το βασίλειο αμφισβητείται έντονα από τους ιστορικούς, όμως η μνήμη του έγινε η χρυσή εποχή με την οποία μετρήθηκαν όλες οι μεταγενέστερες εποχές του Ισραήλ και του Ιούδα. Μετακινηθείτε στο ενωμένο βασίλειο και τη διάσπασή του."
  },
  menuDescription: {
    en: "David's kingdom, Solomon's Temple, and the golden age remembered by tradition.",
    el: "Το βασίλειο του Δαβίδ, ο Ναός του Σολομώντα και η χρυσή εποχή της παράδοσης."
  },
  footerLabel: {
    en: "The United Monarchy · 1003-931 BC",
    el: "Η Ενωμένη Μοναρχία · 1003-931 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The United Monarchy",
    el: "Η Ενωμένη Μοναρχία"
  },
  theme: THEMES.gold,
  timeline: [
    {
      year: -1003,
      label: "c. 1003 BC",
      era: {
        en: "Reign of David",
        el: "Βασιλεία του Δαβίδ"
      },
      events: [
        {
          title: {
            en: "David, king of all Israel",
            el: "Ο Δαβίδ, βασιλιάς όλου του Ισραήλ"
          },
          description: {
            en: "David unites the tribes of Judah and Israel under a single crown after years of civil war.",
            el: "Ο Δαβίδ ενώνει τις φυλές του Ιούδα και του Ισραήλ υπό ένα στέμμα, έπειτα από χρόνια εμφυλίου πολέμου."
          },
          extendedDescription: {
            en: "First acclaimed king by his own tribe of Judah at Hebron, David outlasted the house of Saul and won over the northern tribes to become king of a united Israel. The Bible presents him as the ideal warrior-king and founder of an enduring dynasty; the 'House of David' inscription at Tel Dan gives independent support for a real dynastic founder.",
            el: "Ανακηρυγμένος πρώτα βασιλιάς από τη δική του φυλή του Ιούδα στη Χεβρών, ο Δαβίδ επέζησε του οίκου του Σαούλ και προσεταιρίστηκε τις βόρειες φυλές για να γίνει βασιλιάς ενός ενωμένου Ισραήλ. Η Βίβλος τον παρουσιάζει ως τον ιδανικό πολεμιστή-βασιλιά και ιδρυτή μιας μακρόβιας δυναστείας· η επιγραφή του «Οίκου του Δαβίδ» στο Τελ Νταν παρέχει ανεξάρτητη στήριξη για έναν πραγματικό ιδρυτή δυναστείας."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/JRSLM%20300116%20Tel%20Dan%20Stele%2001.jpg?width=1024",
            alt: {
              en: "The Tel Dan Stele, whose inscription names the 'House of David'",
              el: "Η Στήλη του Τελ Νταν, της οποίας η επιγραφή αναφέρει τον «Οίκο του Δαβίδ»"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: -1000,
      label: "c. 1000 BC",
      era: {
        en: "Reign of David",
        el: "Βασιλεία του Δαβίδ"
      },
      events: [
        {
          title: {
            en: "Jerusalem, the City of David",
            el: "Η Ιερουσαλήμ, η Πόλη του Δαβίδ"
          },
          description: {
            en: "David captures the hill fortress of Jerusalem and makes it his capital, neutral between the tribes.",
            el: "Ο Δαβίδ κυριεύει το ορεινό φρούριο της Ιερουσαλήμ και το κάνει πρωτεύουσά του, ουδέτερη ανάμεσα στις φυλές."
          },
          extendedDescription: {
            en: "Jerusalem, an old Canaanite stronghold belonging to no tribe, made an ideal capital for a king ruling over rival tribes. David's choice bound the city forever to his name and dynasty, and Jerusalem — never before especially important — began the ascent that would make it one of the holiest cities on earth.",
            el: "Η Ιερουσαλήμ, ένα παλιό χαναναϊκό οχυρό που δεν ανήκε σε καμία φυλή, αποτελούσε ιδανική πρωτεύουσα για έναν βασιλιά που κυβερνούσε αντίπαλες φυλές. Η επιλογή του Δαβίδ έδεσε την πόλη για πάντα με το όνομα και τη δυναστεία του, και η Ιερουσαλήμ — ποτέ πριν ιδιαίτερα σημαντική — άρχισε την άνοδο που θα την έκανε μία από τις ιερότερες πόλεις της γης."
          },
          category: "political"
        }
      ]
    },
    {
      year: -995,
      label: "c. 995 BC",
      era: {
        en: "Reign of David",
        el: "Βασιλεία του Δαβίδ"
      },
      events: [
        {
          title: {
            en: "The Ark comes to Jerusalem",
            el: "Η Κιβωτός έρχεται στην Ιερουσαλήμ"
          },
          description: {
            en: "David brings the Ark of the Covenant to Jerusalem, making his capital the religious heart of Israel.",
            el: "Ο Δαβίδ φέρνει την Κιβωτό της Διαθήκης στην Ιερουσαλήμ, κάνοντας την πρωτεύουσά του τη θρησκευτική καρδιά του Ισραήλ."
          },
          extendedDescription: {
            en: "By installing the Ark, Israel's most sacred object, in Jerusalem, David united political and religious authority in his city. The Bible says he danced before it in celebration, and that God promised his house would rule forever — the root of the later hope for a messiah of David's line.",
            el: "Εγκαθιστώντας την Κιβωτό, το ιερότερο αντικείμενο του Ισραήλ, στην Ιερουσαλήμ, ο Δαβίδ ένωσε την πολιτική και τη θρησκευτική εξουσία στην πόλη του. Η Βίβλος λέει ότι χόρεψε μπροστά της πανηγυρίζοντας, και ότι ο Θεός υποσχέθηκε πως ο οίκος του θα κυβερνούσε αιώνια — η ρίζα της μεταγενέστερης ελπίδας για έναν μεσσία από τη γενιά του Δαβίδ."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -970,
      label: "c. 970 BC",
      era: {
        en: "Reign of Solomon",
        el: "Βασιλεία του Σολομώντα"
      },
      events: [
        {
          title: {
            en: "Solomon succeeds David",
            el: "Ο Σολομών διαδέχεται τον Δαβίδ"
          },
          description: {
            en: "Solomon takes the throne and, in the biblical account, asks God not for riches but for wisdom to rule.",
            el: "Ο Σολομών ανεβαίνει στον θρόνο και, στη βιβλική αφήγηση, ζητά από τον Θεό όχι πλούτη αλλά σοφία για να κυβερνά."
          },
          extendedDescription: {
            en: "Solomon inherited a secure kingdom and, tradition says, a legendary wisdom that made his name a byword for it. His reign is remembered as the peak of Israel's power and splendour, an age of grand building, foreign trade, and diplomatic marriages — though also of the heavy taxes and forced labour that would later split the realm.",
            el: "Ο Σολομών κληρονόμησε ένα ασφαλές βασίλειο και, λέει η παράδοση, μια θρυλική σοφία που έκανε το όνομά του συνώνυμό της. Η βασιλεία του μνημονεύεται ως το απόγειο της ισχύος και της λαμπρότητας του Ισραήλ, μια εποχή μεγαλόπρεπης οικοδόμησης, εξωτερικού εμπορίου και διπλωματικών γάμων — αλλά και των βαριών φόρων και της καταναγκαστικής εργασίας που αργότερα θα διχάσουν το κράτος."
          },
          category: "political"
        }
      ]
    },
    {
      year: -966,
      label: "c. 966 BC",
      era: {
        en: "Reign of Solomon",
        el: "Βασιλεία του Σολομώντα"
      },
      events: [
        {
          title: {
            en: "The First Temple",
            el: "Ο Πρώτος Ναός"
          },
          description: {
            en: "Solomon builds the Temple in Jerusalem, the central sanctuary of Israel's God and a wonder of its age.",
            el: "Ο Σολομών χτίζει τον Ναό στην Ιερουσαλήμ, το κεντρικό ιερό του Θεού του Ισραήλ και θαύμα της εποχής του."
          },
          extendedDescription: {
            en: "Built with Phoenician cedar and craftsmanship, the Temple housed the Ark in its innermost sanctuary and became the single legitimate place of sacrifice for the God of Israel. Though no trace of it survives beneath later Jerusalem, the First Temple was the spiritual centre of the kingdom and shaped Judaism for a thousand years.",
            el: "Χτισμένος με φοινικικό κέδρο και τεχνική, ο Ναός στέγασε την Κιβωτό στο εσώτατο ιερό του και έγινε ο μοναδικός νόμιμος τόπος θυσίας για τον Θεό του Ισραήλ. Αν και κανένα ίχνος του δεν σώζεται κάτω από τη μεταγενέστερη Ιερουσαλήμ, ο Πρώτος Ναός ήταν το πνευματικό κέντρο του βασιλείου και διαμόρφωσε τον Ιουδαϊσμό για χίλια χρόνια."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -958,
      label: "c. 958 BC",
      era: {
        en: "Reign of Solomon",
        el: "Βασιλεία του Σολομώντα"
      },
      events: [
        {
          title: {
            en: "Solomon's wealth and trade",
            el: "Ο πλούτος και το εμπόριο του Σολομώντα"
          },
          description: {
            en: "Solomon fortifies cities, sends out trading fleets, and receives the fabled Queen of Sheba.",
            el: "Ο Σολομών οχυρώνει πόλεις, στέλνει εμπορικούς στόλους και υποδέχεται τη θρυλική βασίλισσα του Σαβά."
          },
          extendedDescription: {
            en: "The Bible describes Solomon fortifying Megiddo, Hazor, and Gezer, trading in gold, horses, and spices, and hosting the Queen of Sheba, who came to test his wisdom. Archaeologists still argue over how much of this grandeur was real and how much later idealization, but the tradition made Solomon the emblem of wealth and wisdom for the ages.",
            el: "Η Βίβλος περιγράφει τον Σολομώντα να οχυρώνει το Μεγιδδώ, την Ασώρ και τη Γεζέρ, να εμπορεύεται χρυσό, άλογα και μπαχαρικά, και να φιλοξενεί τη βασίλισσα του Σαβά, που ήρθε να δοκιμάσει τη σοφία του. Οι αρχαιολόγοι ακόμη διαφωνούν για το πόσο από αυτό το μεγαλείο ήταν πραγματικό και πόσο μεταγενέστερη εξιδανίκευση, όμως η παράδοση έκανε τον Σολομώντα το έμβλημα του πλούτου και της σοφίας για τους αιώνες."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -950,
      label: "c. 950 BC",
      era: {
        en: "Reign of Solomon",
        el: "Βασιλεία του Σολομώντα"
      },
      events: [
        {
          title: {
            en: "The strain on the kingdom",
            el: "Η καταπόνηση του βασιλείου"
          },
          description: {
            en: "Solomon's grand projects rest on heavy taxes and forced labour that breed deep resentment in the north.",
            el: "Τα μεγαλόπνοα έργα του Σολομώντα στηρίζονται σε βαριούς φόρους και καταναγκαστική εργασία που γεννούν βαθιά δυσαρέσκεια στον βορρά."
          },
          extendedDescription: {
            en: "The cost of the Temple, the palaces, and the fortresses fell hardest on the northern tribes, who resented being taxed and conscripted to glorify the southern capital. Beneath the golden surface of Solomon's reign, the old tension between north and south was hardening into a fault line ready to crack.",
            el: "Το κόστος του Ναού, των ανακτόρων και των φρουρίων έπεσε βαρύτερα στις βόρειες φυλές, που αγανακτούσαν που φορολογούνταν και στρατεύονταν για να δοξάσουν τη νότια πρωτεύουσα. Κάτω από τη χρυσή επιφάνεια της βασιλείας του Σολομώντα, η παλιά ένταση ανάμεσα στον βορρά και τον νότο σκλήραινε σε μια ρωγμή έτοιμη να σπάσει."
          },
          category: "political"
        }
      ]
    },
    {
      year: -931,
      era: {
        en: "Division of the Kingdom",
        el: "Διάσπαση του Βασιλείου"
      },
      events: [
        {
          title: {
            en: "The kingdom divides",
            el: "Το βασίλειο διχάζεται"
          },
          description: {
            en: "At Solomon's death the northern tribes reject his son Rehoboam, splitting the realm into Israel and Judah.",
            el: "Στον θάνατο του Σολομώντα οι βόρειες φυλές απορρίπτουν τον γιο του Ροβοάμ, διχάζοντας το κράτος σε Ισραήλ και Ιούδα."
          },
          extendedDescription: {
            en: "When Rehoboam threatened to rule even more harshly than his father, the northern tribes broke away under Jeroboam to form the kingdom of Israel, leaving Rehoboam only Judah in the south. The united monarchy, if it was ever as grand as remembered, lasted barely three generations — and the two kingdoms would go their separate ways.",
            el: "Όταν ο Ροβοάμ απείλησε να κυβερνήσει ακόμη σκληρότερα από τον πατέρα του, οι βόρειες φυλές αποσχίστηκαν υπό τον Ιεροβοάμ σχηματίζοντας το βασίλειο του Ισραήλ, αφήνοντας στον Ροβοάμ μόνο τον Ιούδα στον νότο. Η ενωμένη μοναρχία, αν υπήρξε ποτέ τόσο μεγαλειώδης όσο τη θυμούνται, κράτησε μόλις τρεις γενιές — και τα δύο βασίλεια θα ακολουθούσαν χωριστούς δρόμους."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
