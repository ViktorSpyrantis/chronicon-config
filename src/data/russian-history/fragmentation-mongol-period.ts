/** Fragmentation & Mongol Period — Κατακερματισμός & Μογγολική Περίοδος · Russian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const FRAGMENTATION_MONGOL_PERIOD = {
  id: "fragmentation-mongol-period" as const,
  label: {
    en: "Fragmentation & Mongol Period",
    el: "Κατακερματισμός & Μογγολική Περίοδος"
  },
  supertitle: {
    en: "From Horde to Muscovy",
    el: "Από την Ορδή στη Μόσχα"
  },
  title: {
    en: "Fragmentation & Mongol Period",
    el: "Κατακερματισμός & Μογγολική Περίοδος"
  },
  subtitle: {
    en: "From the Mongol sack of Kyiv in 1240 to the end of Horde overlordship around 1480 and the coronation of Ivan IV in 1547, the Rus' lands fragmented, adapted, and were gradually gathered by Moscow.",
    el: "Από τη μογγολική λεηλασία του Κιέβου το 1240 έως το τέλος της επικυριαρχίας της Ορδής γύρω στο 1480 και τη στέψη του Ιβάν Δ΄ το 1547, οι χώρες της Ρως κατακερματίστηκαν, προσαρμόστηκαν και σταδιακά συγκεντρώθηκαν από τη Μόσχα."
  },
  menuDescription: {
    en: "Under the Golden Horde, Moscow rises and gathers the Russian lands.",
    el: "Υπό τη Χρυσή Ορδή, η Μόσχα ανεβαίνει και συγκεντρώνει τα ρωσικά εδάφη."
  },
  footerLabel: {
    en: "Fragmentation & Mongol Period · 1240-c. 1480/1547",
    el: "Κατακερματισμός & Μογγολική Περίοδος · 1240-περ. 1480/1547"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Fragmentation & Mongol Period",
    el: "Κατακερματισμός & Μογγολική Περίοδος"
  },
  theme: THEMES.onyx,
  timeline: [
    {
      year: 1240,
      era: {
        en: "After the Fall of Kyiv",
        el: "Μετά την πτώση του Κιέβου"
      },
      events: [
        {
          title: {
            en: "The old Kievan order collapses",
            el: "Η παλαιά τάξη του Κιέβου καταρρέει"
          },
          description: {
            en: "Batu Khan's sack of Kyiv leaves the old center devastated, while surviving Rus' principalities seek separate paths under Mongol pressure.",
            el: "Η λεηλασία του Κιέβου από τον Μπατού Χαν αφήνει το παλαιό κέντρο κατεστραμμένο, ενώ οι επιζώσες ηγεμονίες της Ρως αναζητούν χωριστούς δρόμους υπό μογγολική πίεση."
          },
          extendedDescription: {
            en: "The conquest did not erase Rus' society or Orthodox Christianity, but it ended Kyiv's role as the effective political center. Galicia-Volhynia, Novgorod, Vladimir-Suzdal, Tver, Ryazan, and later Moscow would adapt to Mongol power in sharply different ways.",
            el: "Η κατάκτηση δεν εξαφάνισε την κοινωνία της Ρως ούτε την Ορθοδοξία, αλλά τερμάτισε τον ρόλο του Κιέβου ως πραγματικού πολιτικού κέντρου. Η Γαλικία-Βολυνία, το Νόβγκοροντ, το Βλαντίμιρ-Σούζνταλ, το Τβερ, το Ριαζάν και αργότερα η Μόσχα θα προσαρμόζονταν στη μογγολική ισχύ με πολύ διαφορετικούς τρόπους."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1242,
      era: {
        en: "Novgorod and the West",
        el: "Το Νόβγκοροντ και η Δύση"
      },
      events: [
        {
          title: {
            en: "Alexander Nevsky wins the Battle on the Ice",
            el: "Ο Αλέξανδρος Νιέφσκι νικά στη Μάχη στον Πάγο"
          },
          description: {
            en: "Prince Alexander of Novgorod defeats the Teutonic Knights on frozen Lake Peipus, strengthening Novgorod's position on the Baltic frontier.",
            el: "Ο πρίγκιπας Αλέξανδρος του Νόβγκοροντ νικά τους Τεύτονες Ιππότες στην παγωμένη λίμνη Πέιπους, ενισχύοντας τη θέση του Νόβγκοροντ στο βαλτικό σύνορο."
          },
          extendedDescription: {
            en: "Nevsky's career symbolized the strategic dilemma of the age: resist Latin crusading powers in the west while accommodating Mongol authority in the east. Later Russian memory turned him into a model defender of Orthodoxy and prudent princely rule.",
            el: "Η σταδιοδρομία του Νιέφσκι συμβόλισε το στρατηγικό δίλημμα της εποχής: αντίσταση στις λατινικές σταυροφορικές δυνάμεις στη δύση και ταυτόχρονη προσαρμογή στη μογγολική εξουσία στην ανατολή. Η μεταγενέστερη ρωσική μνήμη τον μετέτρεψε σε πρότυπο υπερασπιστή της Ορθοδοξίας και συνετού πριγκιπικού ηγεμόνα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1252,
      era: {
        en: "Mongol Suzerainty",
        el: "Μογγολική επικυριαρχία"
      },
      events: [
        {
          title: {
            en: "Alexander Nevsky receives the grand princely title",
            el: "Ο Αλέξανδρος Νιέφσκι λαμβάνει τον τίτλο του μεγάλου πρίγκιπα"
          },
          description: {
            en: "The Golden Horde confirms Alexander Nevsky as grand prince of Vladimir, showing that legitimacy now depends on the khan's patent, or yarlyk.",
            el: "Η Χρυσή Ορδή επιβεβαιώνει τον Αλέξανδρο Νιέφσκι ως μεγάλο πρίγκιπα του Βλαντίμιρ, δείχνοντας ότι η νομιμότητα εξαρτάται πλέον από το χανικό δίπλωμα, το γιαρλίκ."
          },
          extendedDescription: {
            en: "Rus' princes traveled to the Horde for confirmation, tribute arrangements, and political advantage over rivals. Mongol rule was often indirect, but it reshaped taxation, military obligations, diplomacy, and the hierarchy among the northeastern principalities.",
            el: "Οι πρίγκιπες της Ρως ταξίδευαν στην Ορδή για επικύρωση, ρυθμίσεις φόρου και πολιτικό πλεονέκτημα έναντι αντιπάλων. Η μογγολική κυριαρχία ήταν συχνά έμμεση, αλλά αναδιαμόρφωσε τη φορολογία, τις στρατιωτικές υποχρεώσεις, τη διπλωματία και την ιεραρχία ανάμεσα στις βορειοανατολικές ηγεμονίες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1263,
      era: {
        en: "Moscow Emerges",
        el: "Η Μόσχα αναδύεται"
      },
      events: [
        {
          title: {
            en: "Daniel of Moscow begins a new princely line",
            el: "Ο Δανιήλ της Μόσχας αρχίζει νέα πριγκιπική γραμμή"
          },
          description: {
            en: "Daniel, youngest son of Alexander Nevsky, inherits the small principality of Moscow, then still a minor town in the northeastern forest lands.",
            el: "Ο Δανιήλ, νεότερος γιος του Αλέξανδρου Νιέφσκι, κληρονομεί τη μικρή ηγεμονία της Μόσχας, τότε ακόμη δευτερεύουσα πόλη στα βορειοανατολικά δάση."
          },
          extendedDescription: {
            en: "Moscow's rise was not inevitable. Its advantages grew over time: a defensible location, skillful alliance-building, service to the Horde as tax collector, ties to the Orthodox metropolitan, and the steady gathering of neighboring lands.",
            el: "Η άνοδος της Μόσχας δεν ήταν αναπόφευκτη. Τα πλεονεκτήματά της αυξήθηκαν σταδιακά: αμυντική θέση, επιδέξιες συμμαχίες, υπηρεσία προς την Ορδή ως συλλέκτρια φόρων, σχέσεις με τον ορθόδοξο μητροπολίτη και σταθερή συγκέντρωση γειτονικών γαιών."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1299,
      era: {
        en: "Church and North-East",
        el: "Εκκλησία και βορειοανατολή"
      },
      events: [
        {
          title: {
            en: "The metropolitan leaves Kyiv for Vladimir",
            el: "Ο μητροπολίτης εγκαταλείπει το Κίεβο για το Βλαντίμιρ"
          },
          description: {
            en: "The Orthodox metropolitan Maximus relocates from ruined Kyiv to Vladimir, confirming the shift of ecclesiastical gravity toward the northeast.",
            el: "Ο ορθόδοξος μητροπολίτης Μάξιμος μετακινείται από το κατεστραμμένο Κίεβο στο Βλαντίμιρ, επιβεβαιώνοντας τη μετατόπιση του εκκλησιαστικού βάρους προς τα βορειοανατολικά."
          },
          extendedDescription: {
            en: "The church provided continuity across political fragmentation. Its movement toward Vladimir and later Moscow gave the northeastern princes spiritual prestige and helped preserve a shared Rus' identity under Mongol overlordship.",
            el: "Η Εκκλησία προσέφερε συνέχεια μέσα στον πολιτικό κατακερματισμό. Η μετακίνησή της προς το Βλαντίμιρ και αργότερα τη Μόσχα έδωσε στους βορειοανατολικούς πρίγκιπες πνευματικό κύρος και βοήθησε στη διατήρηση μιας κοινής ταυτότητας της Ρως υπό μογγολική επικυριαρχία."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1325,
      era: {
        en: "Moscow and the Church",
        el: "Η Μόσχα και η Εκκλησία"
      },
      events: [
        {
          title: {
            en: "Metropolitan Peter settles in Moscow",
            el: "Ο μητροπολίτης Πέτρος εγκαθίσταται στη Μόσχα"
          },
          description: {
            en: "Metropolitan Peter makes Moscow his residence, strengthening the city under Prince Ivan Kalita and linking its rise to Orthodox authority.",
            el: "Ο μητροπολίτης Πέτρος κάνει τη Μόσχα έδρα του, ενισχύοντας την πόλη υπό τον πρίγκιπα Ιβάν Καλιτά και συνδέοντας την άνοδό της με την ορθόδοξη αυθεντία."
          },
          extendedDescription: {
            en: "Ivan Kalita cultivated the Horde, collected tribute, bought land, and promoted Moscow as a stable center. The alliance of princely power and church residence became one of Moscow's decisive advantages over Tver and other rivals.",
            el: "Ο Ιβάν Καλιτά καλλιέργησε σχέσεις με την Ορδή, συνέλεξε φόρο, αγόρασε γη και προώθησε τη Μόσχα ως σταθερό κέντρο. Η συμμαχία πριγκιπικής ισχύος και εκκλησιαστικής έδρας έγινε ένα από τα αποφασιστικά πλεονεκτήματα της Μόσχας απέναντι στο Τβερ και άλλους αντιπάλους."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1380,
      era: {
        en: "Kulikovo",
        el: "Κουλίκοβο"
      },
      events: [
        {
          title: {
            en: "Dmitry Donskoy defeats Mamai",
            el: "Ο Ντμίτρι Ντονσκόι νικά τον Μαμάι"
          },
          description: {
            en: "Moscow's prince Dmitry defeats the forces of Mamai at Kulikovo Field, a major symbolic victory against a Horde warlord.",
            el: "Ο πρίγκιπας της Μόσχας Ντμίτρι νικά τις δυνάμεις του Μαμάι στο πεδίο του Κουλίκοβο, μεγάλη συμβολική νίκη απέναντι σε πολέμαρχο της Ορδής."
          },
          extendedDescription: {
            en: "Kulikovo did not end Mongol domination; Tokhtamysh sacked Moscow only two years later. Yet the battle became a foundational memory of collective resistance and confirmed Moscow's claim to lead the northeastern Rus' lands.",
            el: "Το Κουλίκοβο δεν τερμάτισε τη μογγολική κυριαρχία· ο Τοχταμίς λεηλάτησε τη Μόσχα μόλις δύο χρόνια αργότερα. Ωστόσο η μάχη έγινε ιδρυτική μνήμη συλλογικής αντίστασης και επιβεβαίωσε την αξίωση της Μόσχας να ηγείται των βορειοανατολικών χωρών της Ρως."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1382,
      era: {
        en: "Horde Retaliation",
        el: "Αντίποινα της Ορδής"
      },
      events: [
        {
          title: {
            en: "Tokhtamysh sacks Moscow",
            el: "Ο Τοχταμίς λεηλατεί τη Μόσχα"
          },
          description: {
            en: "Khan Tokhtamysh restores Horde authority by storming Moscow, forcing Dmitry Donskoy to resume tribute payments.",
            el: "Ο χαν Τοχταμίς αποκαθιστά την εξουσία της Ορδής καταλαμβάνοντας τη Μόσχα και αναγκάζοντας τον Ντμίτρι Ντονσκόι να ξαναρχίσει τις πληρωμές φόρου."
          },
          extendedDescription: {
            en: "The sack showed that Moscow's rise still operated inside the Mongol political order. The princes of Moscow advanced not by sudden liberation, but by surviving, negotiating, collecting tribute, and outlasting rivals.",
            el: "Η λεηλασία έδειξε ότι η άνοδος της Μόσχας λειτουργούσε ακόμη μέσα στη μογγολική πολιτική τάξη. Οι πρίγκιπες της Μόσχας προόδευσαν όχι με ξαφνική απελευθέρωση, αλλά επιβιώνοντας, διαπραγματευόμενοι, συλλέγοντας φόρο και υπερβαίνοντας τους αντιπάλους τους."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1439,
      era: {
        en: "Church Independence",
        el: "Εκκλησιαστική ανεξαρτησία"
      },
      events: [
        {
          title: {
            en: "Moscow rejects the Union of Florence",
            el: "Η Μόσχα απορρίπτει την Ένωση της Φλωρεντίας"
          },
          description: {
            en: "The Union of Florence attempts to reunite the Greek and Latin churches, but Moscow rejects it and later chooses its own metropolitan without Constantinople's approval.",
            el: "Η Ένωση της Φλωρεντίας επιχειρεί να ενώσει την ελληνική και τη λατινική Εκκλησία, αλλά η Μόσχα την απορρίπτει και αργότερα επιλέγει δικό της μητροπολίτη χωρίς έγκριση της Κωνσταντινούπολης."
          },
          extendedDescription: {
            en: "After Constantinople's fall in 1453, Moscow's church identity gained new weight. The idea that Moscow protected true Orthodoxy would later feed the language of a sovereign tsardom and the image of Moscow as a new center of Christian empire.",
            el: "Μετά την πτώση της Κωνσταντινούπολης το 1453, η εκκλησιαστική ταυτότητα της Μόσχας απέκτησε νέο βάρος. Η ιδέα ότι η Μόσχα προστάτευε την αληθινή Ορθοδοξία θα τροφοδοτούσε αργότερα τη γλώσσα ενός κυρίαρχου τσαρικού κράτους και την εικόνα της Μόσχας ως νέου κέντρου χριστιανικής αυτοκρατορίας."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1478,
      era: {
        en: "Gathering the Lands",
        el: "Συγκέντρωση των γαιών"
      },
      events: [
        {
          title: {
            en: "Ivan III annexes Novgorod",
            el: "Ο Ιβάν Γ΄ προσαρτά το Νόβγκοροντ"
          },
          description: {
            en: "Ivan III brings the wealthy republic of Novgorod under Moscow's rule, removing its veche bell and ending its independent political tradition.",
            el: "Ο Ιβάν Γ΄ φέρνει την πλούσια δημοκρατία του Νόβγκοροντ υπό την κυριαρχία της Μόσχας, αφαιρώντας την καμπάνα του βέτσε και τερματίζοντας την ανεξάρτητη πολιτική της παράδοση."
          },
          extendedDescription: {
            en: "Novgorod's fall gave Moscow control over vast northern territories, trade routes, and resources. It also showed the new style of Muscovite rule: centralizing, dynastic, Orthodox, and increasingly intolerant of rival centers.",
            el: "Η πτώση του Νόβγκοροντ έδωσε στη Μόσχα έλεγχο τεράστιων βόρειων εδαφών, εμπορικών δρόμων και πόρων. Έδειξε επίσης το νέο ύφος της μοσχοβίτικης εξουσίας: συγκεντρωτικό, δυναστικό, ορθόδοξο και όλο και λιγότερο ανεκτικό προς αντίπαλα κέντρα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1480,
      era: {
        en: "End of Horde Overlordship",
        el: "Τέλος της επικυριαρχίας της Ορδής"
      },
      events: [
        {
          title: {
            en: "The Great Stand on the Ugra River",
            el: "Η Μεγάλη Στάση στον ποταμό Ούγκρα"
          },
          description: {
            en: "Ivan III and Khan Ahmed of the Great Horde face each other across the Ugra River; the Horde withdraws, traditionally marking the end of Mongol overlordship over Moscow.",
            el: "Ο Ιβάν Γ΄ και ο χαν Αχμέτ της Μεγάλης Ορδής αντιπαρατάσσονται στις όχθες του ποταμού Ούγκρα· η Ορδή αποσύρεται, γεγονός που παραδοσιακά σηματοδοτεί το τέλος της μογγολικής επικυριαρχίας επί της Μόσχας."
          },
          extendedDescription: {
            en: "The end was less a single battle than a political tipping point. Moscow had become strong enough to stop paying tribute, while the Horde world was fragmenting into successor khanates. Ivan III's court increasingly spoke the language of sovereignty.",
            el: "Το τέλος ήταν λιγότερο μία μεμονωμένη μάχη και περισσότερο πολιτικό σημείο καμπής. Η Μόσχα είχε γίνει αρκετά ισχυρή ώστε να σταματήσει να πληρώνει φόρο, ενώ ο κόσμος της Ορδής κατακερματιζόταν σε διάδοχα χανάτα. Η αυλή του Ιβάν Γ΄ μιλούσε όλο και περισσότερο τη γλώσσα της κυριαρχίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1547,
      era: {
        en: "Toward the Tsardom",
        el: "Προς το τσαρικό κράτος"
      },
      events: [
        {
          title: {
            en: "Ivan IV is crowned tsar",
            el: "Ο Ιβάν Δ΄ στέφεται τσάρος"
          },
          description: {
            en: "Ivan IV's coronation as tsar of all Rus' gives formal expression to the sovereign Muscovite state that had emerged from the Mongol and fragmentation period.",
            el: "Η στέψη του Ιβάν Δ΄ ως τσάρου πάσης Ρως δίνει επίσημη έκφραση στο κυρίαρχο μοσχοβίτικο κράτος που είχε αναδυθεί από την περίοδο μογγολικής επικυριαρχίας και κατακερματισμού."
          },
          extendedDescription: {
            en: "Some chronologies end the Mongol period at 1480, with the Ugra standoff. Extending the frame to 1547 captures the institutional transformation that followed: Moscow was no longer only a grand principality but a tsardom claiming imperial and Orthodox authority.",
            el: "Ορισμένες χρονολογήσεις τερματίζουν τη μογγολική περίοδο το 1480, με τη στάση στον Ούγκρα. Η επέκταση του πλαισίου έως το 1547 αποτυπώνει τον θεσμικό μετασχηματισμό που ακολούθησε: η Μόσχα δεν ήταν πλέον μόνο μεγάλη ηγεμονία, αλλά τσαρικό κράτος που διεκδικούσε αυτοκρατορική και ορθόδοξη αυθεντία."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
