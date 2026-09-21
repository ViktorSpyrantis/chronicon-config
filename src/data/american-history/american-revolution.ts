/** The American Revolution — Η Αμερικανική Επανάσταση · American History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const AMERICAN_REVOLUTION = {
  id: "american-revolution" as const,
  label: {
    en: "The American Revolution",
    el: "Η Αμερικανική Επανάσταση"
  },
  supertitle: {
    en: "Founding · 1765-1789",
    el: "Ίδρυση"
  },
  title: {
    en: "The American Revolution",
    el: "Η Αμερικανική Επανάσταση"
  },
  subtitle: {
    en: "From the taxation crises that split the colonies from Britain, through the defiance of the Boston Tea Party and the first shots at Lexington, to the Declaration of Independence, victory at Yorktown, and the Constitution that framed a new republic. Slide across the years to relive the birth of the United States.",
    el: "Από τις φορολογικές κρίσεις που χώρισαν τις αποικίες από τη Βρετανία, μέσα από την αψηφισιά του Τσαγιού της Βοστώνης και τους πρώτους πυροβολισμούς στο Λέξινγκτον, ως τη Διακήρυξη της Ανεξαρτησίας, τη νίκη στο Γιόρκταουν και το Σύνταγμα που διαμόρφωσε μια νέα δημοκρατία. Μετακινηθείτε ανάμεσα στα έτη για να ζήσετε ξανά τη γέννηση των Ηνωμένων Πολιτειών."
  },
  menuDescription: {
    en: "Revolution, independence, and the framing of the Constitution.",
    el: "Επανάσταση, ανεξαρτησία και η σύνταξη του Συντάγματος."
  },
  footerLabel: {
    en: "The American Revolution · 1765-1789",
    el: "Η Αμερικανική Επανάσταση · 1765-1789"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The American Revolution",
    el: "Η Αμερικανική Επανάσταση"
  },
  theme: THEMES.crimson,
  timeline: [
    {
      year: 1765,
      era: {
        en: "No Taxation Without Representation",
        el: "Καμία φορολογία χωρίς εκπροσώπηση"
      },
      events: [
        {
          title: {
            en: "The Stamp Act crisis",
            el: "Η κρίση του Νόμου περί Χαρτοσήμου"
          },
          description: {
            en: "Parliament taxes printed materials in the colonies; furious colonists protest under the cry 'no taxation without representation,' and the tax is soon repealed.",
            el: "Το Κοινοβούλιο φορολογεί τα έντυπα στις αποικίες· εξοργισμένοι άποικοι διαμαρτύρονται με το σύνθημα «καμία φορολογία χωρίς εκπροσώπηση», και ο φόρος σύντομα καταργείται."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1770,
      era: {
        en: "Rising Tensions",
        el: "Κλιμάκωση εντάσεων"
      },
      events: [
        {
          title: {
            en: "The Boston Massacre",
            el: "Η Σφαγή της Βοστώνης"
          },
          description: {
            en: "British soldiers fire into a Boston crowd, killing five. Patriot propagandists turn the deaths into a rallying symbol of imperial tyranny.",
            el: "Βρετανοί στρατιώτες πυροβολούν το πλήθος στη Βοστώνη, σκοτώνοντας πέντε άτομα. Οι Πατριώτες προπαγανδιστές μετατρέπουν τους θανάτους σε σύμβολο συσπείρωσης ενάντια στην αυτοκρατορική τυραννία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1773,
      era: {
        en: "Defiance",
        el: "Αψηφισιά"
      },
      events: [
        {
          title: {
            en: "The Boston Tea Party",
            el: "Το Τσάι της Βοστώνης"
          },
          description: {
            en: "Colonists disguised as Mohawks dump chests of British tea into Boston Harbor to protest the Tea Act; Britain retaliates with the punitive Coercive Acts.",
            el: "Άποικοι μεταμφιεσμένοι σε Μοχόκ ρίχνουν κιβώτια βρετανικού τσαγιού στο λιμάνι της Βοστώνης σε ένδειξη διαμαρτυρίας για τον Νόμο περί Τσαγιού· η Βρετανία απαντά με τους τιμωρητικούς Καταναγκαστικούς Νόμους."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1775,
      era: {
        en: "War Begins",
        el: "Ο πόλεμος αρχίζει"
      },
      events: [
        {
          title: {
            en: "Lexington and Concord",
            el: "Λέξινγκτον και Κόνκορντ"
          },
          description: {
            en: "British troops and colonial militia clash at Lexington and Concord — 'the shot heard round the world' — igniting the War of Independence.",
            el: "Βρετανικά στρατεύματα και αποικιακή πολιτοφυλακή συγκρούονται στο Λέξινγκτον και το Κόνκορντ — «ο πυροβολισμός που ακούστηκε σε όλο τον κόσμο» — πυροδοτώντας τον Πόλεμο της Ανεξαρτησίας."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1776,
      era: {
        en: "Independence",
        el: "Ανεξαρτησία"
      },
      events: [
        {
          title: {
            en: "The Declaration of Independence",
            el: "Η Διακήρυξη της Ανεξαρτησίας"
          },
          description: {
            en: "The Continental Congress adopts Thomas Jefferson's Declaration, proclaiming that all men are created equal and that governments derive their power from the consent of the governed.",
            el: "Το Ηπειρωτικό Κογκρέσο υιοθετεί τη Διακήρυξη του Τόμας Τζέφερσον, διακηρύσσοντας ότι όλοι οι άνθρωποι δημιουργούνται ίσοι και ότι οι κυβερνήσεις αντλούν την εξουσία τους από τη συναίνεση των κυβερνωμένων."
          },
          extendedDescription: {
            en: "The Declaration's ideals of liberty and equality inspired revolutions worldwide, even as they stood in stark contradiction to the enslavement of hundreds of thousands within the new nation.",
            el: "Τα ιδανικά της ελευθερίας και της ισότητας της Διακήρυξης ενέπνευσαν επαναστάσεις σε όλο τον κόσμο, ακόμη κι ενώ βρίσκονταν σε έντονη αντίθεση με τη σκλαβιά εκατοντάδων χιλιάδων μέσα στο νέο έθνος."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/United_States_Declaration_of_Independence.jpg?width=1024",
            alt: {
              en: "John Trumbull's painting of the Declaration of Independence",
              el: "Ο πίνακας του Τζον Τραμπούλ για τη Διακήρυξη της Ανεξαρτησίας"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1777,
      era: {
        en: "Turning Point",
        el: "Σημείο καμπής"
      },
      events: [
        {
          title: {
            en: "Victory at Saratoga",
            el: "Νίκη στη Σαρατόγκα"
          },
          description: {
            en: "The American triumph at Saratoga persuades France to enter the war as an ally, transforming a colonial rebellion into a global conflict Britain could not easily win.",
            el: "Ο αμερικανικός θρίαμβος στη Σαρατόγκα πείθει τη Γαλλία να μπει στον πόλεμο ως σύμμαχος, μετατρέποντας μια αποικιακή εξέγερση σε παγκόσμια σύγκρουση που η Βρετανία δεν μπορούσε εύκολα να κερδίσει."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1781,
      era: {
        en: "Victory",
        el: "Νίκη"
      },
      events: [
        {
          title: {
            en: "Surrender at Yorktown",
            el: "Η παράδοση στο Γιόρκταουν"
          },
          description: {
            en: "Trapped by Washington's army and the French fleet, General Cornwallis surrenders at Yorktown, effectively ending major fighting in the war.",
            el: "Παγιδευμένος από τον στρατό του Ουάσινγκτον και τον γαλλικό στόλο, ο στρατηγός Κορνγουόλις παραδίδεται στο Γιόρκταουν, τερματίζοντας ουσιαστικά τις μεγάλες μάχες του πολέμου."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Surrender_of_Lord_Cornwallis.jpg?width=1024",
            alt: {
              en: "The Surrender of Lord Cornwallis at Yorktown, by John Trumbull",
              el: "Η παράδοση του λόρδου Κορνουάλις στο Γιόρκταουν, έργο του Τζον Τραμπούλ"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1783,
      era: {
        en: "Peace",
        el: "Ειρήνη"
      },
      events: [
        {
          title: {
            en: "Treaty of Paris recognizes independence",
            el: "Η Συνθήκη των Παρισίων αναγνωρίζει την ανεξαρτησία"
          },
          description: {
            en: "Britain recognizes the independence of the United States and cedes territory east of the Mississippi, giving the young nation room to grow.",
            el: "Η Βρετανία αναγνωρίζει την ανεξαρτησία των Ηνωμένων Πολιτειών και παραχωρεί εδάφη ανατολικά του Μισισιπή, δίνοντας στο νεαρό έθνος χώρο να αναπτυχθεί."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1787,
      era: {
        en: "A New Framework",
        el: "Ένα νέο πλαίσιο"
      },
      events: [
        {
          title: {
            en: "The Constitutional Convention",
            el: "Η Συντακτική Συνέλευση"
          },
          description: {
            en: "Delegates in Philadelphia replace the weak Articles of Confederation with the U.S. Constitution, creating a federal government with balanced legislative, executive, and judicial branches.",
            el: "Οι εκπρόσωποι στη Φιλαδέλφεια αντικαθιστούν τα αδύναμα Άρθρα της Συνομοσπονδίας με το Σύνταγμα των ΗΠΑ, δημιουργώντας μια ομοσπονδιακή κυβέρνηση με ισορροπημένη νομοθετική, εκτελεστική και δικαστική εξουσία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1789,
      era: {
        en: "The Republic Launched",
        el: "Η δημοκρατία ξεκινά"
      },
      events: [
        {
          title: {
            en: "Washington becomes first president",
            el: "Ο Ουάσινγκτον γίνεται ο πρώτος πρόεδρος"
          },
          description: {
            en: "George Washington is unanimously chosen as the first president; two years later the Bill of Rights guarantees fundamental freedoms and sets a template for constitutional government.",
            el: "Ο Τζορτζ Ουάσινγκτον επιλέγεται ομόφωνα ως ο πρώτος πρόεδρος· δύο χρόνια αργότερα η Διακήρυξη των Δικαιωμάτων εγγυάται θεμελιώδεις ελευθερίες και θέτει ένα πρότυπο συνταγματικής διακυβέρνησης."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
