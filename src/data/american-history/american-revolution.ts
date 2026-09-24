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
          extendedDescription: {
            en: "The Stamp Act required a tax stamp on newspapers, legal documents and even playing cards. Nine colonies sent delegates to a Stamp Act Congress in New York, merchants boycotted British goods, and the Sons of Liberty pressured the stamp distributors into resigning. Parliament repealed the tax in 1766 but passed the Declaratory Act, asserting its right to legislate for the colonies 'in all cases whatsoever'.",
            el: "Ο Νόμος περί Χαρτοσήμου απαιτούσε φορολογικό χαρτόσημο σε εφημερίδες, νομικά έγγραφα, ακόμη και τράπουλες. Εννέα αποικίες έστειλαν αντιπροσώπους σε ένα Συνέδριο για το Χαρτόσημο στη Νέα Υόρκη, οι έμποροι μποϊκόταραν τα βρετανικά προϊόντα και οι Γιοι της Ελευθερίας πίεσαν τους διανομείς του χαρτοσήμου να παραιτηθούν. Το Κοινοβούλιο κατάργησε τον φόρο το 1766, αλλά ψήφισε τον Διακηρυκτικό Νόμο, διεκδικώντας το δικαίωμα να νομοθετεί για τις αποικίες «σε κάθε περίπτωση»."
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
          extendedDescription: {
            en: "British troops had been stationed in Boston since 1768 to enforce the Townshend duties. Among the dead was Crispus Attucks, a sailor of African and Native American descent. John Adams defended the soldiers in court to show that the colonists respected the rule of law: most were acquitted, while two were convicted of manslaughter and branded on the thumb. Paul Revere's engraving of the scene became one of the most famous pieces of propaganda of the age.",
            el: "Βρετανικά στρατεύματα σταθμεύαν στη Βοστώνη από το 1768 για να επιβάλουν τους δασμούς Τάουνσεντ. Ανάμεσα στους νεκρούς ήταν ο Κρίσπους Άτακς, ναυτικός αφρικανικής και ιθαγενούς αμερικανικής καταγωγής. Ο Τζον Άνταμς υπερασπίστηκε τους στρατιώτες στο δικαστήριο για να δείξει ότι οι άποικοι σέβονταν το κράτος δικαίου: οι περισσότεροι αθωώθηκαν, ενώ δύο καταδικάστηκαν για ανθρωποκτονία και σημαδεύτηκαν με πυρωμένο σίδερο στον αντίχειρα. Η χαλκογραφία του Πολ Ριβίαρ με τη σκηνή έγινε ένα από τα πιο διάσημα έργα προπαγάνδας της εποχής."
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
          extendedDescription: {
            en: "The Tea Act actually lowered the price of tea, but it gave the East India Company a monopoly and upheld Parliament's right to tax. On the night of 16 December, men of the Sons of Liberty dumped 342 chests of tea into the harbour. Britain closed the port of Boston and curtailed Massachusetts' self-government; the colonies responded by calling the First Continental Congress in Philadelphia in 1774.",
            el: "Ο Νόμος για το Τσάι στην πραγματικότητα μείωνε την τιμή του τσαγιού, αλλά έδινε μονοπώλιο στην Εταιρεία Ανατολικών Ινδιών και επιβεβαίωνε το δικαίωμα του Κοινοβουλίου να φορολογεί. Τη νύχτα της 16ης Δεκεμβρίου, άνδρες των Γιων της Ελευθερίας πέταξαν 342 κιβώτια τσαγιού στο λιμάνι. Η Βρετανία έκλεισε το λιμάνι της Βοστώνης και περιόρισε την αυτοδιοίκηση της Μασαχουσέτης· οι αποικίες απάντησαν συγκαλώντας το Πρώτο Ηπειρωτικό Συνέδριο στη Φιλαδέλφεια το 1774."
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
          extendedDescription: {
            en: "On the night of 18 April, Paul Revere and William Dawes rode out to warn that British troops were marching to seize militia weapons at Concord. At dawn shots were exchanged on Lexington Green; at Concord's North Bridge the militia forced the British back, and they were harried by musket fire all the way to Boston. The phrase 'the shot heard round the world' comes from Ralph Waldo Emerson's Concord Hymn of 1837.",
            el: "Τη νύχτα της 18ης Απριλίου, ο Πολ Ριβίαρ και ο Γουίλιαμ Ντόους ίππευσαν για να προειδοποιήσουν ότι βρετανικά στρατεύματα βάδιζαν για να κατασχέσουν τα όπλα της πολιτοφυλακής στο Κόνκορντ. Την αυγή ανταλλάχθηκαν πυροβολισμοί στο Λέξινγκτον Γκριν· στη Βόρεια Γέφυρα του Κόνκορντ η πολιτοφυλακή ανάγκασε τους Βρετανούς να υποχωρήσουν, και εκείνοι δέχονταν πυρά μουσκέτων σε όλη τη διαδρομή ως τη Βοστώνη. Η φράση «ο πυροβολισμός που ακούστηκε σε όλο τον κόσμο» προέρχεται από τον «Ύμνο του Κόνκορντ» του Ραλφ Γουάλντο Έμερσον του 1837."
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
          extendedDescription: {
            en: "General John Burgoyne's army, marching south from Canada to cut off New England, was defeated in two battles near Saratoga and surrendered some 6,000 men on 17 October. In Paris, Benjamin Franklin used the victory to secure a treaty of alliance with France in February 1778; Spain and the Netherlands later joined the war against Britain. French money, troops and above all warships would prove decisive.",
            el: "Ο στρατός του στρατηγού Τζον Μπεργκόιν, που βάδιζε νότια από τον Καναδά για να αποκόψει τη Νέα Αγγλία, ηττήθηκε σε δύο μάχες κοντά στη Σαρατόγκα και παραδόθηκε με περίπου 6.000 άνδρες στις 17 Οκτωβρίου. Στο Παρίσι, ο Βενιαμίν Φραγκλίνος χρησιμοποίησε τη νίκη για να εξασφαλίσει συνθήκη συμμαχίας με τη Γαλλία τον Φεβρουάριο του 1778· η Ισπανία και οι Κάτω Χώρες μπήκαν αργότερα στον πόλεμο κατά της Βρετανίας. Τα γαλλικά χρήματα, στρατεύματα και κυρίως πολεμικά πλοία θα αποδεικνύονταν καθοριστικά."
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
          extendedDescription: {
            en: "Cornwallis had fortified Yorktown expecting support from the Royal Navy, but in September the French fleet under the Comte de Grasse defeated the British at the Battle of the Chesapeake. Washington and the French general Rochambeau marched south to besiege the town, and on 19 October some 8,000 British troops laid down their arms. On hearing the news, the prime minister Lord North is said to have exclaimed, 'Oh God! It is all over.'",
            el: "Ο Κορνουάλις είχε οχυρώσει το Γιορκτάουν περιμένοντας υποστήριξη από το Βασιλικό Ναυτικό, αλλά τον Σεπτέμβριο ο γαλλικός στόλος υπό τον κόμη Ντε Γκρας νίκησε τους Βρετανούς στη Ναυμαχία του Τσέζαπικ. Ο Ουάσινγκτον και ο Γάλλος στρατηγός Ροσαμπό βάδισαν νότια για να πολιορκήσουν την πόλη, και στις 19 Οκτωβρίου περίπου 8.000 Βρετανοί στρατιώτες κατέθεσαν τα όπλα. Ακούγοντας τα νέα, ο πρωθυπουργός λόρδος Νορθ λέγεται ότι αναφώνησε: «Θεέ μου! Όλα τελείωσαν»."
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
          extendedDescription: {
            en: "Negotiated by Benjamin Franklin, John Adams and John Jay, the treaty set the new nation's borders at the Great Lakes, the Mississippi and Florida, which returned to Spain. It said nothing about the Native nations who had fought on both sides and whose lands Britain now signed away. Tens of thousands of Loyalists left for Canada, Britain and the Caribbean.",
            el: "Η συνθήκη, που διαπραγματεύτηκαν ο Βενιαμίν Φραγκλίνος, ο Τζον Άνταμς και ο Τζον Τζέι, όριζε τα σύνορα του νέου έθνους στις Μεγάλες Λίμνες, στον Μισισιπή και στη Φλόριντα, που επέστρεψε στην Ισπανία. Δεν έλεγε τίποτα για τα ιθαγενή έθνη που είχαν πολεμήσει και με τις δύο πλευρές και των οποίων τα εδάφη παραχωρούσε τώρα η Βρετανία. Δεκάδες χιλιάδες Νομιμόφρονες έφυγαν για τον Καναδά, τη Βρετανία και την Καραϊβική."
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
          extendedDescription: {
            en: "Fifty-five delegates met behind closed doors in Philadelphia through the summer, with Washington presiding and James Madison shaping much of the plan. The Great Compromise gave each state equal votes in the Senate and seats by population in the House, while the three-fifths clause counted enslaved people toward Southern representation. Ratification was fiercely debated; the Federalist Papers by Hamilton, Madison and Jay made the case for the new system.",
            el: "Πενήντα πέντε αντιπρόσωποι συνεδρίασαν κεκλεισμένων των θυρών στη Φιλαδέλφεια όλο το καλοκαίρι, με πρόεδρο τον Ουάσινγκτον και τον Τζέιμς Μάντισον να διαμορφώνει μεγάλο μέρος του σχεδίου. Ο Μεγάλος Συμβιβασμός έδωσε σε κάθε πολιτεία ίσες ψήφους στη Γερουσία και έδρες ανάλογα με τον πληθυσμό στη Βουλή των Αντιπροσώπων, ενώ η ρήτρα των τριών πέμπτων προσμετρούσε τους σκλάβους υπέρ της εκπροσώπησης του Νότου. Η επικύρωση προκάλεσε σφοδρή αντιπαράθεση· τα Φεντεραλιστικά Κείμενα των Χάμιλτον, Μάντισον και Τζέι υπερασπίστηκαν το νέο σύστημα."
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
          extendedDescription: {
            en: "Washington took the oath of office on the balcony of Federal Hall in New York on 30 April 1789. He set lasting precedents — a cabinet of department heads, the modest title 'Mr. President', and, by retiring after two terms in 1797, a peaceful handover of power. The Bill of Rights, the first ten amendments protecting freedoms of speech, religion, the press and assembly among others, was ratified in 1791.",
            el: "Ο Ουάσινγκτον ορκίστηκε στο μπαλκόνι του Federal Hall στη Νέα Υόρκη στις 30 Απριλίου 1789. Καθιέρωσε διαρκή προηγούμενα — ένα υπουργικό συμβούλιο από τους επικεφαλής των υπουργείων, τον σεμνό τίτλο «Κύριε Πρόεδρε» και, αποσυρόμενος μετά από δύο θητείες το 1797, την ειρηνική μεταβίβαση της εξουσίας. Η Διακήρυξη των Δικαιωμάτων, οι πρώτες δέκα τροπολογίες που προστατεύουν μεταξύ άλλων την ελευθερία του λόγου, της θρησκείας, του Τύπου και του συνέρχεσθαι, επικυρώθηκε το 1791."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
