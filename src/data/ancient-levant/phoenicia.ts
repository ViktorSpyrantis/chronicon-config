/** Phoenicia: Traders of the Sea — Φοινίκη: Έμποροι της Θάλασσας · Ancient Levant */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const PHOENICIA = {
  id: "phoenicia" as const,
  label: {
    en: "Phoenicia: Traders of the Sea",
    el: "Φοινίκη: Έμποροι της Θάλασσας"
  },
  supertitle: {
    en: "The Ancient Levant",
    el: "Ο Αρχαίος Λεβάντες"
  },
  title: {
    en: "Phoenicia: Traders of the Sea",
    el: "Φοινίκη: Έμποροι της Θάλασσας"
  },
  subtitle: {
    en: "From the Canaanite ports of Tyre, Sidon, and Byblos, the Phoenicians became the great seafarers of the ancient world. They spread the alphabet across the Mediterranean, dyed cloth the priceless purple that gave them their name, planted colonies from Cyprus to Spain, and founded Carthage — until they fell in turn to Assyria, Babylon, Persia, and finally Alexander. Slide across the age of the sea traders.",
    el: "Από τα χαναναϊκά λιμάνια της Τύρου, της Σιδώνας και της Βύβλου, οι Φοίνικες έγιναν οι μεγάλοι θαλασσοπόροι του αρχαίου κόσμου. Διέδωσαν το αλφάβητο σε όλη τη Μεσόγειο, έβαψαν ύφασμα με την ανεκτίμητη πορφύρα που τους έδωσε το όνομά τους, φύτεψαν αποικίες από την Κύπρο ως την Ισπανία και ίδρυσαν την Καρχηδόνα — ώσπου έπεσαν με τη σειρά τους στην Ασσυρία, τη Βαβυλώνα, την Περσία και τελικά στον Αλέξανδρο. Μετακινηθείτε στην εποχή των εμπόρων της θάλασσας."
  },
  menuDescription: {
    en: "Tyre and Sidon, the alphabet, the purple dye, and the founding of Carthage.",
    el: "Η Τύρος και η Σιδώνα, το αλφάβητο, η πορφύρα και η ίδρυση της Καρχηδόνας."
  },
  footerLabel: {
    en: "Phoenicia · 1100-332 BC",
    el: "Φοινίκη · 1100-332 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Phoenicia: Traders of the Sea",
    el: "Φοινίκη: Έμποροι της Θάλασσας"
  },
  theme: THEMES.violet,
  timeline: [
    {
      year: -1100,
      label: "c. 1100 BC",
      era: {
        en: "Rise of Phoenicia",
        el: "Άνοδος της Φοινίκης"
      },
      events: [
        {
          title: {
            en: "The Phoenician cities rise",
            el: "Οι φοινικικές πόλεις ανέρχονται"
          },
          description: {
            en: "As the Bronze Age powers fall, the Canaanite ports of Tyre, Sidon, and Byblos emerge as independent trading cities.",
            el: "Καθώς πέφτουν οι δυνάμεις της Εποχής του Χαλκού, τα χαναναϊκά λιμάνια της Τύρου, της Σιδώνας και της Βύβλου αναδύονται ως ανεξάρτητες εμπορικές πόλεις."
          },
          extendedDescription: {
            en: "The people the Greeks called Phoenicians were the coastal Canaanites, freed by the collapse of Egyptian and Hittite power to trade on their own account. Each city — Tyre, Sidon, Byblos, Arwad — was an independent kingdom, but together they made the eastern Mediterranean a Phoenician sea, carrying goods and ideas between civilizations.",
            el: "Ο λαός που οι Έλληνες αποκαλούσαν Φοίνικες ήταν οι παράκτιοι Χαναναίοι, ελεύθεροι πλέον από την κατάρρευση της αιγυπτιακής και της χεττιτικής ισχύος να εμπορεύονται για δικό τους λογαριασμό. Κάθε πόλη — Τύρος, Σιδώνα, Βύβλος, Άρβαδος — ήταν ανεξάρτητο βασίλειο, μαζί όμως έκαναν την ανατολική Μεσόγειο μια φοινικική θάλασσα, μεταφέροντας αγαθά και ιδέες ανάμεσα στους πολιτισμούς."
          },
          category: "political"
        }
      ]
    },
    {
      year: -1050,
      label: "c. 1050 BC",
      era: {
        en: "Rise of Phoenicia",
        el: "Άνοδος της Φοινίκης"
      },
      events: [
        {
          title: {
            en: "The Phoenician alphabet",
            el: "Το φοινικικό αλφάβητο"
          },
          description: {
            en: "The Phoenicians refine the alphabet to twenty-two letters and carry it across the sea to the Greeks.",
            el: "Οι Φοίνικες τελειοποιούν το αλφάβητο σε είκοσι δύο γράμματα και το μεταφέρουν πέρα από τη θάλασσα στους Έλληνες."
          },
          extendedDescription: {
            en: "The Phoenician alphabet of twenty-two consonants, spread by merchants along their trade routes, was adopted by the Greeks, who added vowels — the direct ancestor of the Greek and Latin letters used today. It may be the single greatest gift of the Levant to the world: a writing system simple enough for everyone.",
            el: "Το φοινικικό αλφάβητο των είκοσι δύο συμφώνων, που διαδόθηκε από εμπόρους κατά μήκος των εμπορικών τους δρόμων, υιοθετήθηκε από τους Έλληνες, οι οποίοι πρόσθεσαν φωνήεντα — ο άμεσος πρόγονος των ελληνικών και λατινικών γραμμάτων που χρησιμοποιούνται σήμερα. Ίσως είναι το μεγαλύτερο δώρο του Λεβάντε στον κόσμο: ένα σύστημα γραφής αρκετά απλό για όλους."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -1000,
      label: "c. 1000 BC",
      era: {
        en: "Age of Trade",
        el: "Εποχή του Εμπορίου"
      },
      events: [
        {
          title: {
            en: "Purple, glass, and the sea",
            el: "Πορφύρα, γυαλί και η θάλασσα"
          },
          description: {
            en: "Phoenician workshops produce the famous purple dye and fine glass, and their ships trade across the Mediterranean.",
            el: "Φοινικικά εργαστήρια παράγουν την περίφημη πορφύρα και εκλεκτό γυαλί, και τα πλοία τους εμπορεύονται σε όλη τη Μεσόγειο."
          },
          extendedDescription: {
            en: "The Phoenicians extracted a brilliant, costly purple dye from murex sea-snails — so identified with them that the Greek name Phoinikes may mean 'the purple people.' Alongside purple cloth they traded cedar, worked metals, ivory, and clear glass, and their sailors ventured farther than any others, reputedly even circumnavigating Africa for an Egyptian pharaoh.",
            el: "Οι Φοίνικες εξήγαγαν μια λαμπερή, ακριβή πορφύρα από θαλάσσια σαλιγκάρια πορφύρας — τόσο ταυτισμένη μαζί τους ώστε το ελληνικό όνομα Φοίνικες ίσως σημαίνει «ο λαός της πορφύρας». Μαζί με το πορφυρό ύφασμα εμπορεύονταν κέδρο, κατεργασμένα μέταλλα, ελεφαντόδοντο και διαφανές γυαλί, και οι ναυτικοί τους τολμούσαν μακρύτερα από κάθε άλλον, φημολογείται δε ότι περέπλευσαν ακόμη και την Αφρική για έναν Αιγύπτιο φαραώ."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -970,
      label: "c. 970 BC",
      era: {
        en: "Age of Trade",
        el: "Εποχή του Εμπορίου"
      },
      events: [
        {
          title: {
            en: "Hiram of Tyre and Solomon",
            el: "Ο Χιράμ της Τύρου και ο Σολομών"
          },
          description: {
            en: "King Hiram of Tyre allies with Solomon of Israel, sending cedar and craftsmen to build the Temple in Jerusalem.",
            el: "Ο βασιλιάς Χιράμ της Τύρου συμμαχεί με τον Σολομώντα του Ισραήλ, στέλνοντας κέδρο και τεχνίτες για την ανέγερση του Ναού στην Ιερουσαλήμ."
          },
          extendedDescription: {
            en: "According to the Hebrew Bible, Hiram supplied the timber, gold, and skilled workers for Solomon's Temple and palace, and the two kings sent joint trading fleets down the Red Sea. The alliance shows Tyre at the height of its wealth and reach, its influence extending deep into the neighbouring kingdoms of the interior.",
            el: "Σύμφωνα με την Εβραϊκή Βίβλο, ο Χιράμ προμήθευσε την ξυλεία, τον χρυσό και τους ειδικευμένους εργάτες για τον Ναό και το ανάκτορο του Σολομώντα, και οι δύο βασιλείς έστελναν κοινούς εμπορικούς στόλους στην Ερυθρά Θάλασσα. Η συμμαχία δείχνει την Τύρο στο απόγειο του πλούτου και της εμβέλειάς της, με την επιρροή της να εκτείνεται βαθιά στα γειτονικά βασίλεια της ενδοχώρας."
          },
          category: "political"
        }
      ]
    },
    {
      year: -900,
      label: "c. 900 BC",
      era: {
        en: "Age of Colonies",
        el: "Εποχή των Αποικιών"
      },
      events: [
        {
          title: {
            en: "The westward colonies",
            el: "Οι αποικίες της δύσης"
          },
          description: {
            en: "Phoenician traders plant colonies from Cyprus to Spain, reaching the Atlantic in search of silver and tin.",
            el: "Φοίνικες έμποροι φυτεύουν αποικίες από την Κύπρο ως την Ισπανία, φτάνοντας στον Ατλαντικό αναζητώντας ασήμι και κασσίτερο."
          },
          extendedDescription: {
            en: "Chasing metals and trade, the Phoenicians founded outposts across the Mediterranean — Kition on Cyprus, colonies in Sardinia and Sicily, and Gadir (Cadiz) beyond the Strait of Gibraltar on the Atlantic coast of Spain. This network of harbours knit the western sea into a single trading world long before Rome.",
            el: "Κυνηγώντας μέταλλα και εμπόριο, οι Φοίνικες ίδρυσαν σταθμούς σε όλη τη Μεσόγειο — το Κίτιον στην Κύπρο, αποικίες στη Σαρδηνία και τη Σικελία, και τα Γάδειρα (Κάδιξ) πέρα από τα Στενά του Γιβραλτάρ στην ατλαντική ακτή της Ισπανίας. Αυτό το δίκτυο λιμανιών ύφανε τη δυτική θάλασσα σε έναν ενιαίο εμπορικό κόσμο πολύ πριν από τη Ρώμη."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -814,
      era: {
        en: "Age of Colonies",
        el: "Εποχή των Αποικιών"
      },
      events: [
        {
          title: {
            en: "The founding of Carthage",
            el: "Η ίδρυση της Καρχηδόνας"
          },
          description: {
            en: "Colonists from Tyre, led by tradition's Queen Dido, found Carthage on the coast of North Africa.",
            el: "Άποικοι από την Τύρο, με επικεφαλής κατά την παράδοση τη βασίλισσα Διδώ, ιδρύουν την Καρχηδόνα στην ακτή της Βόρειας Αφρικής."
          },
          extendedDescription: {
            en: "Legend told that Dido (Elissa), fleeing her murderous brother, the king of Tyre, founded Carthage on land she cleverly measured out with an ox-hide. Whatever its origins, Carthage grew into the greatest Phoenician city of all, a maritime empire that would one day challenge Rome for the mastery of the western Mediterranean.",
            el: "Ο θρύλος έλεγε ότι η Διδώ (Έλισσα), φεύγοντας από τον φονικό αδελφό της, τον βασιλιά της Τύρου, ίδρυσε την Καρχηδόνα σε γη που μέτρησε πανούργα με ένα βοδινό δέρμα. Όποια κι αν ήταν η καταγωγή της, η Καρχηδόνα εξελίχθηκε στη μεγαλύτερη φοινικική πόλη όλων, μια θαλάσσια αυτοκρατορία που μια μέρα θα διεκδικούσε από τη Ρώμη την κυριαρχία της δυτικής Μεσογείου."
          },
          category: "political"
        }
      ]
    },
    {
      year: -730,
      era: {
        en: "Under Assyria",
        el: "Υπό την Ασσυρία"
      },
      events: [
        {
          title: {
            en: "Under the Assyrian yoke",
            el: "Υπό τον ασσυριακό ζυγό"
          },
          description: {
            en: "The Neo-Assyrian Empire subdues the Phoenician cities, taking tribute while leaving their trade to flourish.",
            el: "Η Νεοασσυριακή Αυτοκρατορία υποτάσσει τις φοινικικές πόλεις, εισπράττοντας φόρο ενώ αφήνει το εμπόριό τους να ακμάζει."
          },
          extendedDescription: {
            en: "The Assyrian kings valued the Phoenicians more as tribute-paying traders than as lands to occupy, and Tyre and Sidon kept their kings and their commerce under imperial overlordship. But heavy demands provoked repeated revolts, and Sidon was sacked when it rebelled — the price of autonomy on the edge of a hungry empire.",
            el: "Οι Ασσύριοι βασιλείς εκτιμούσαν τους Φοίνικες περισσότερο ως φορολογούμενους εμπόρους παρά ως εδάφη προς κατοχή, και η Τύρος και η Σιδώνα κράτησαν τους βασιλείς και το εμπόριό τους υπό αυτοκρατορική επικυριαρχία. Όμως οι βαριές απαιτήσεις προκάλεσαν επανειλημμένες εξεγέρσεις, και η Σιδώνα λεηλατήθηκε όταν επαναστάτησε — το τίμημα της αυτονομίας στην άκρη μιας πεινασμένης αυτοκρατορίας."
          },
          category: "military"
        }
      ]
    },
    {
      year: -585,
      era: {
        en: "Under Babylon",
        el: "Υπό τη Βαβυλώνα"
      },
      events: [
        {
          title: {
            en: "The long siege of Tyre",
            el: "Η μακρά πολιορκία της Τύρου"
          },
          description: {
            en: "Nebuchadnezzar II of Babylon besieges the island city of Tyre for thirteen years without taking it by storm.",
            el: "Ο Ναβουχοδονόσορ Β΄ της Βαβυλώνας πολιορκεί τη νησιωτική πόλη της Τύρου επί δεκατρία χρόνια χωρίς να την κυριεύσει με έφοδο."
          },
          extendedDescription: {
            en: "Protected by its island fortress, Tyre held out against Babylon in a legendary thirteen-year siege, submitting at last only on terms. The great prophets of neighbouring Judah, watching the proud merchant city humbled, made Tyre a byword for wealth brought low — even as its resilience became equally famous.",
            el: "Προστατευμένη από το νησιωτικό της φρούριο, η Τύρος άντεξε απέναντι στη Βαβυλώνα σε μια θρυλική δεκατριάχρονη πολιορκία, υποτασσόμενη τελικά μόνο με όρους. Οι μεγάλοι προφήτες του γειτονικού Ιούδα, βλέποντας την περήφανη εμπορική πόλη ταπεινωμένη, έκαναν την Τύρο σύμβολο του πλούτου που κατέρρευσε — ενώ η ανθεκτικότητά της έγινε εξίσου ξακουστή."
          },
          category: "military"
        }
      ]
    },
    {
      year: -539,
      era: {
        en: "Under Persia",
        el: "Υπό την Περσία"
      },
      events: [
        {
          title: {
            en: "Serving the Persian king",
            el: "Στην υπηρεσία του Πέρση βασιλιά"
          },
          description: {
            en: "Under Persian rule the Phoenician cities supply the fleets that carry the Great King's power across the sea.",
            el: "Υπό περσική κυριαρχία οι φοινικικές πόλεις παρέχουν τους στόλους που μεταφέρουν την ισχύ του Μεγάλου Βασιλέα πέρα από τη θάλασσα."
          },
          extendedDescription: {
            en: "The Phoenicians became the naval backbone of the Persian Empire, their ships forming the core of the fleets that fought the Greeks at Salamis and elsewhere. In return they kept wide autonomy and prospered, with Sidon now foremost among the cities — though resentment of Persian demands would eventually boil over into a great and doomed revolt.",
            el: "Οι Φοίνικες έγιναν η ναυτική ραχοκοκαλιά της Περσικής Αυτοκρατορίας, με τα πλοία τους να αποτελούν τον πυρήνα των στόλων που πολέμησαν τους Έλληνες στη Σαλαμίνα και αλλού. Σε αντάλλαγμα κράτησαν ευρεία αυτονομία και ευημέρησαν, με τη Σιδώνα πλέον πρώτη ανάμεσα στις πόλεις — αν και η δυσαρέσκεια για τις περσικές απαιτήσεις θα ξεχείλιζε τελικά σε μια μεγάλη και καταδικασμένη εξέγερση."
          },
          category: "political"
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
            en: "Alexander destroys Tyre",
            el: "Ο Αλέξανδρος καταστρέφει την Τύρο"
          },
          description: {
            en: "Alexander the Great takes island Tyre by building a causeway to its walls, ending Phoenician independence.",
            el: "Ο Μέγας Αλέξανδρος κυριεύει τη νησιωτική Τύρο χτίζοντας ένα πρόχωμα ως τα τείχη της, τερματίζοντας τη φοινικική ανεξαρτησία."
          },
          extendedDescription: {
            en: "When Tyre refused to submit, Alexander spent seven months building a great mole from the mainland to its island — a causeway that survives, silted up, to this day — and stormed the city. Phoenicia passed into the Hellenistic world, its cities becoming Greek in speech and culture, while its far colony Carthage carried the Phoenician name on for two more centuries.",
            el: "Όταν η Τύρος αρνήθηκε να υποταχθεί, ο Αλέξανδρος πέρασε επτά μήνες χτίζοντας ένα μεγάλο πρόχωμα από την ξηρά ως το νησί της — ένα πρόχωμα που σώζεται, προσχωμένο, ως σήμερα — και κυρίευσε την πόλη. Η Φοινίκη πέρασε στον ελληνιστικό κόσμο, με τις πόλεις της να γίνονται ελληνικές στη γλώσσα και τον πολιτισμό, ενώ η μακρινή αποικία της Καρχηδόνα κράτησε το φοινικικό όνομα ζωντανό για δύο ακόμη αιώνες."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
