/** The Early Republic — Η Πρώιμη Δημοκρατία · American History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const EARLY_REPUBLIC = {
  id: "early-republic" as const,
  label: {
    en: "The Early Republic",
    el: "Η Πρώιμη Δημοκρατία"
  },
  supertitle: {
    en: "Young Nation · 1789-1836",
    el: "Νεαρό Έθνος"
  },
  title: {
    en: "The Early Republic",
    el: "Η Πρώιμη Δημοκρατία"
  },
  subtitle: {
    en: "From Hamilton's financial system and the first peaceful transfer of power, through the Louisiana Purchase that doubled the nation, a second war with Britain, and the rise of Jacksonian democracy, to the market revolution and the tragic removal of Native peoples. Slide across the years to watch a young republic find its footing.",
    el: "Από το χρηματοοικονομικό σύστημα του Χάμιλτον και την πρώτη ειρηνική μεταβίβαση εξουσίας, μέσα από την Αγορά της Λουιζιάνα που διπλασίασε το έθνος, έναν δεύτερο πόλεμο με τη Βρετανία και την άνοδο της δημοκρατίας του Τζάκσον, ως την επανάσταση της αγοράς και τη τραγική απομάκρυνση των ιθαγενών λαών. Μετακινηθείτε ανάμεσα στα έτη για να δείτε μια νεαρή δημοκρατία να βρίσκει τα πατήματά της."
  },
  menuDescription: {
    en: "Louisiana, the War of 1812, and Jacksonian democracy.",
    el: "Η Λουιζιάνα, ο Πόλεμος του 1812 και η δημοκρατία του Τζάκσον."
  },
  footerLabel: {
    en: "The Early Republic · 1789-1836",
    el: "Η Πρώιμη Δημοκρατία · 1789-1836"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Early Republic",
    el: "Η Πρώιμη Δημοκρατία"
  },
  theme: THEMES.sapphire,
  timeline: [
    {
      year: 1791,
      era: {
        en: "Foundations",
        el: "Θεμέλια"
      },
      events: [
        {
          title: {
            en: "Hamilton's financial system",
            el: "Το χρηματοοικονομικό σύστημα του Χάμιλτον"
          },
          description: {
            en: "Treasury Secretary Alexander Hamilton establishes a national bank and assumes state debts, building the credit of the new nation but igniting the first party rivalries.",
            el: "Ο υπουργός Οικονομικών Αλέξανδρος Χάμιλτον ιδρύει μια εθνική τράπεζα και αναλαμβάνει τα χρέη των πολιτειών, χτίζοντας την πιστοληπτική ικανότητα του νέου έθνους αλλά πυροδοτώντας τις πρώτες κομματικές αντιπαλότητες."
          },
          extendedDescription: {
            en: "Hamilton argued that a national debt, if honoured, would be 'a national blessing', binding wealthy creditors to the success of the new government. The Bank of the United States was chartered over the objections of Jefferson and Madison, who held that the Constitution gave Congress no such power. Their quarrel produced the first national parties — Hamilton's Federalists and the Democratic-Republicans — and a bargain that placed the new capital on the Potomac.",
            el: "Ο Χάμιλτον υποστήριζε ότι ένα εθνικό χρέος, αν τιμούνταν, θα ήταν «εθνική ευλογία», δένοντας τους πλούσιους πιστωτές με την επιτυχία της νέας κυβέρνησης. Η Τράπεζα των Ηνωμένων Πολιτειών ιδρύθηκε παρά τις αντιρρήσεις του Τζέφερσον και του Μάντισον, που υποστήριζαν ότι το Σύνταγμα δεν έδινε τέτοια εξουσία στο Κογκρέσο. Η διαμάχη τους γέννησε τα πρώτα εθνικά κόμματα — τους Φεντεραλιστές του Χάμιλτον και τους Δημοκρατικούς-Ρεπουμπλικάνους — και μια συμφωνία που τοποθέτησε τη νέα πρωτεύουσα στον Ποτόμακ."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1800,
      era: {
        en: "Peaceful Transfer",
        el: "Ειρηνική μεταβίβαση"
      },
      events: [
        {
          title: {
            en: "The 'Revolution of 1800'",
            el: "Η «Επανάσταση του 1800»"
          },
          description: {
            en: "Thomas Jefferson's election transfers power peacefully from the Federalists to the Democratic-Republicans, proving the young constitution could survive a change of party.",
            el: "Η εκλογή του Τόμας Τζέφερσον μεταβιβάζει ειρηνικά την εξουσία από τους Φεντεραλιστές στους Δημοκρατικούς-Ρεπουμπλικάνους, αποδεικνύοντας ότι το νεαρό σύνταγμα μπορούσε να επιβιώσει από μια αλλαγή κόμματος."
          },
          extendedDescription: {
            en: "The election was so close that it went to the House of Representatives, where Jefferson prevailed over his own running mate, Aaron Burr, on the 36th ballot; the Twelfth Amendment later fixed the flaw. In his inaugural address Jefferson declared, 'We are all Republicans, we are all Federalists.' The outgoing Federalists had packed the courts with new judges, and the resulting case, Marbury v. Madison (1803), established the Supreme Court's power to strike down unconstitutional laws.",
            el: "Η εκλογή ήταν τόσο αμφίρροπη που κατέληξε στη Βουλή των Αντιπροσώπων, όπου ο Τζέφερσον επικράτησε του ίδιου του συνυποψηφίου του, Άαρον Μπερ, στην 36η ψηφοφορία· η Δωδέκατη Τροπολογία διόρθωσε αργότερα το κενό. Στον εναρκτήριο λόγο του ο Τζέφερσον δήλωσε: «Είμαστε όλοι Ρεπουμπλικάνοι, είμαστε όλοι Φεντεραλιστές». Οι απερχόμενοι Φεντεραλιστές είχαν γεμίσει τα δικαστήρια με νέους δικαστές, και η υπόθεση που προέκυψε, Μάρμπουρι κατά Μάντισον (1803), καθιέρωσε την εξουσία του Ανωτάτου Δικαστηρίου να ακυρώνει αντισυνταγματικούς νόμους."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1803,
      era: {
        en: "A Continent Opens",
        el: "Μια ήπειρος ανοίγει"
      },
      events: [
        {
          title: {
            en: "The Louisiana Purchase",
            el: "Η Αγορά της Λουιζιάνα"
          },
          description: {
            en: "Jefferson buys the vast Louisiana Territory from France, doubling the size of the United States and opening the way to westward expansion.",
            el: "Ο Τζέφερσον αγοράζει το τεράστιο Έδαφος της Λουιζιάνα από τη Γαλλία, διπλασιάζοντας το μέγεθος των Ηνωμένων Πολιτειών και ανοίγοντας τον δρόμο για την εξάπλωση προς τα δυτικά."
          },
          extendedDescription: {
            en: "In 1804 Lewis and Clark set out to explore the new lands, guided in part by the Shoshone woman Sacagawea, reaching the Pacific and mapping a route across the continent.",
            el: "Το 1804 οι Λιούις και Κλαρκ ξεκινούν να εξερευνήσουν τις νέες εκτάσεις, καθοδηγούμενοι εν μέρει από τη Σοσόνε γυναίκα Σακαγκάουια, φτάνοντας στον Ειρηνικό και χαρτογραφώντας μια διαδρομή σε ολόκληρη την ήπειρο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1812,
      era: {
        en: "Second War with Britain",
        el: "Δεύτερος πόλεμος με τη Βρετανία"
      },
      events: [
        {
          title: {
            en: "The War of 1812",
            el: "Ο Πόλεμος του 1812"
          },
          description: {
            en: "The United States goes to war with Britain over trade and impressment. British troops burn Washington in 1814, but the war ends in a draw that confirms American independence.",
            el: "Οι Ηνωμένες Πολιτείες πηγαίνουν σε πόλεμο με τη Βρετανία για το εμπόριο και τη βίαιη ναυτολόγηση. Βρετανικά στρατεύματα πυρπολούν την Ουάσινγκτον το 1814, αλλά ο πόλεμος λήγει ισόπαλος, επιβεβαιώνοντας την αμερικανική ανεξαρτησία."
          },
          extendedDescription: {
            en: "Americans resented the Royal Navy's seizure of sailors from U.S. ships and British support for Native resistance in the Northwest, led by the Shawnee leader Tecumseh. American invasions of Canada failed, and in August 1814 British troops burned the Capitol and the White House. The defence of Fort McHenry at Baltimore inspired Francis Scott Key's 'The Star-Spangled Banner', and Andrew Jackson's victory at New Orleans came two weeks after the peace had been signed at Ghent.",
            el: "Οι Αμερικανοί αγανακτούσαν με την αρπαγή ναυτών από αμερικανικά πλοία από το Βασιλικό Ναυτικό και με τη βρετανική υποστήριξη στην αντίσταση των ιθαγενών στα βορειοδυτικά, με επικεφαλής τον αρχηγό των Σόουνι Τεκούμσε. Οι αμερικανικές εισβολές στον Καναδά απέτυχαν, και τον Αύγουστο του 1814 βρετανικά στρατεύματα έκαψαν το Καπιτώλιο και τον Λευκό Οίκο. Η άμυνα του Φορτ ΜακΧένρι στη Βαλτιμόρη ενέπνευσε το «The Star-Spangled Banner» του Φράνσις Σκοτ Κι, και η νίκη του Άντριου Τζάκσον στη Νέα Ορλεάνη ήρθε δύο εβδομάδες αφότου είχε υπογραφεί η ειρήνη στη Γάνδη."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1823,
      era: {
        en: "A Hemisphere's Doctrine",
        el: "Το δόγμα ενός ημισφαιρίου"
      },
      events: [
        {
          title: {
            en: "The Monroe Doctrine",
            el: "Το Δόγμα Μονρόε"
          },
          description: {
            en: "President Monroe warns European powers against further colonization in the Americas, staking out the Western Hemisphere as a U.S. sphere of influence.",
            el: "Ο πρόεδρος Μονρόε προειδοποιεί τις ευρωπαϊκές δυνάμεις κατά περαιτέρω αποικισμού στην Αμερική, διεκδικώντας το Δυτικό Ημισφαίριο ως σφαίρα επιρροής των ΗΠΑ."
          },
          extendedDescription: {
            en: "Drafted largely by Secretary of State John Quincy Adams, the doctrine answered fears that Europe's monarchies might help Spain recover its rebellious Latin American colonies. In return the United States promised to stay out of European affairs. At the time only the British navy could enforce such a policy, but later presidents, especially Theodore Roosevelt, invoked it to justify U.S. intervention across the hemisphere.",
            el: "Το δόγμα, που συνέταξε σε μεγάλο βαθμό ο υπουργός Εξωτερικών Τζον Κουίνσι Άνταμς, απαντούσε στους φόβους ότι οι ευρωπαϊκές μοναρχίες θα βοηθούσαν την Ισπανία να ανακτήσει τις εξεγερμένες αποικίες της στη Λατινική Αμερική. Σε αντάλλαγμα, οι Ηνωμένες Πολιτείες υπόσχονταν να μένουν έξω από τις ευρωπαϊκές υποθέσεις. Εκείνη την εποχή μόνο το βρετανικό ναυτικό μπορούσε να επιβάλει μια τέτοια πολιτική, αλλά μεταγενέστεροι πρόεδροι, ιδίως ο Θεόδωρος Ρούζβελτ, την επικαλέστηκαν για να δικαιολογήσουν αμερικανικές επεμβάσεις σε όλο το ημισφαίριο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1828,
      era: {
        en: "Jacksonian Democracy",
        el: "Η δημοκρατία του Τζάκσον"
      },
      events: [
        {
          title: {
            en: "Andrew Jackson and the common man",
            el: "Ο Άντριου Τζάκσον και ο κοινός άνθρωπος"
          },
          description: {
            en: "The election of war hero Andrew Jackson ushers in an era of expanded white male suffrage and populist politics that reshape American democracy.",
            el: "Η εκλογή του ήρωα πολέμου Άντριου Τζάκσον εγκαινιάζει μια εποχή διευρυμένου εκλογικού δικαιώματος για λευκούς άνδρες και λαϊκιστικής πολιτικής που αναδιαμορφώνουν την αμερικανική δημοκρατία."
          },
          extendedDescription: {
            en: "Jackson, a frontier general and slaveholding planter from Tennessee, presented himself as the champion of ordinary farmers and workers against eastern elites, and crowds of supporters mobbed the White House at his inauguration. He vetoed the recharter of the Second Bank of the United States, faced down South Carolina in the Nullification Crisis, and made the 'spoils system' of rewarding party loyalists with government jobs a fixture of American politics.",
            el: "Ο Τζάκσον, στρατηγός της μεθορίου και δουλοκτήτης φυτευτής από το Τενεσί, παρουσιαζόταν ως υπέρμαχος των απλών αγροτών και εργατών απέναντι στις ελίτ της Ανατολής, και πλήθη οπαδών του κατέκλυσαν τον Λευκό Οίκο στην ορκωμοσία του. Άσκησε βέτο στην ανανέωση του καταστατικού της Δεύτερης Τράπεζας των Ηνωμένων Πολιτειών, αντιμετώπισε τη Νότια Καρολίνα στην Κρίση της Ακύρωσης και καθιέρωσε στην αμερικανική πολιτική το «σύστημα των λαφύρων», την ανταμοιβή κομματικών πιστών με δημόσιες θέσεις."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1830,
      era: {
        en: "Dispossession",
        el: "Εκτόπιση"
      },
      events: [
        {
          title: {
            en: "Indian Removal and the Trail of Tears",
            el: "Η Απομάκρυνση των Ινδιάνων και το Μονοπάτι των Δακρύων"
          },
          description: {
            en: "The Indian Removal Act forces tens of thousands of Native people from their homelands; the Cherokee march west along the deadly Trail of Tears.",
            el: "Ο Νόμος περί Απομάκρυνσης των Ινδιάνων εκδιώκει δεκάδες χιλιάδες ιθαγενείς από τις πατρίδες τους· οι Τσερόκι βαδίζουν προς τα δυτικά κατά μήκος του θανατηφόρου Μονοπατιού των Δακρύων."
          },
          extendedDescription: {
            en: "The Cherokee had adopted a written constitution, a newspaper and Sequoyah's syllabary, and in Worcester v. Georgia (1832) the Supreme Court upheld their sovereignty — but Jackson refused to enforce the ruling. In 1838–39 the U.S. Army forced some 16,000 Cherokee west to Indian Territory, in present-day Oklahoma, and several thousand died of disease, cold and hunger. The Choctaw, Creek, Chickasaw and Seminole suffered similar removals.",
            el: "Οι Τσερόκι είχαν υιοθετήσει γραπτό σύνταγμα, εφημερίδα και το συλλαβάριο του Σεκουόγια, και στην υπόθεση Γουόρτσεστερ κατά Τζόρτζια (1832) το Ανώτατο Δικαστήριο επιβεβαίωσε την κυριαρχία τους — αλλά ο Τζάκσον αρνήθηκε να εφαρμόσει την απόφαση. Το 1838–39 ο αμερικανικός στρατός εκτόπισε περίπου 16.000 Τσερόκι δυτικά, στην Ινδιάνικη Επικράτεια, τη σημερινή Οκλαχόμα, και αρκετές χιλιάδες πέθαναν από αρρώστιες, κρύο και πείνα. Οι Τσόκτο, οι Κρικ, οι Τσίκασο και οι Σέμινολ υπέστησαν ανάλογους εκτοπισμούς."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1831,
      era: {
        en: "The Market Revolution",
        el: "Η επανάσταση της αγοράς"
      },
      events: [
        {
          title: {
            en: "Canals, factories, and reform",
            el: "Κανάλια, εργοστάσια και μεταρρύθμιση"
          },
          description: {
            en: "Canals, textile mills, and a booming market economy transform the North, while reform movements — temperance, abolition, and women's rights — begin to stir.",
            el: "Κανάλια, κλωστοϋφαντουργεία και μια ακμάζουσα οικονομία της αγοράς μεταμορφώνουν τον Βορρά, ενώ κινήματα μεταρρύθμισης — εγκράτεια, κατάργηση της δουλείας και δικαιώματα των γυναικών — αρχίζουν να αναδύονται."
          },
          extendedDescription: {
            en: "The Erie Canal, opened in 1825, linked the Great Lakes to New York City and made it the nation's commercial capital. In Lowell, Massachusetts, young women from farm families tended the looms of new water-powered textile mills. In 1831 William Lloyd Garrison began publishing The Liberator, demanding the immediate end of slavery, and the same year Nat Turner led a bloody slave rebellion in Virginia.",
            el: "Η Διώρυγα του Ίρι, που άνοιξε το 1825, συνέδεσε τις Μεγάλες Λίμνες με τη Νέα Υόρκη και την έκανε εμπορική πρωτεύουσα του έθνους. Στο Λόουελ της Μασαχουσέτης, νεαρές γυναίκες από αγροτικές οικογένειες δούλευαν στους αργαλειούς νέων υδροκίνητων κλωστοϋφαντουργείων. Το 1831 ο Γουίλιαμ Λόιντ Γκάρισον άρχισε να εκδίδει την εφημερίδα The Liberator, ζητώντας την άμεση κατάργηση της δουλείας, και την ίδια χρονιά ο Νατ Τέρνερ ηγήθηκε μιας αιματηρής εξέγερσης σκλάβων στη Βιρτζίνια."
          },
          category: "cultural"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
