/** British India — Βρετανική Ινδία · Indian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const BRITISH_INDIA = {
  id: "british-india" as const,
  label: {
    en: "British India",
    el: "Βρετανική Ινδία"
  },
  supertitle: {
    en: "The Company and the Raj",
    el: "Η Εταιρεία και το Ρατζ"
  },
  title: {
    en: "British India",
    el: "Η Βρετανική Ινδία"
  },
  subtitle: {
    en: "From the East India Company's seizure of Bengal at Plassey and a century of company rule, through the great rebellion of 1857 and the coming of the British Crown's Raj, to the birth of the national movement, the shock of Amritsar and Gandhi's mass struggle for freedom, ending in independence and the agony of Partition. Slide across two centuries in which a trading company and then an empire ruled India — and Indians remade themselves into a nation and won their liberty.",
    el: "Από την αρπαγή της Βεγγάλης από την Εταιρεία Ανατολικών Ινδιών στο Πλάσεϊ κι έναν αιώνα εταιρικής κυριαρχίας, μέσα από τη μεγάλη εξέγερση του 1857 και την έλευση του Ρατζ του βρετανικού Στέμματος, ως τη γέννηση του εθνικού κινήματος, το σοκ του Αμριτσάρ και τον μαζικό αγώνα του Γκάντι για ελευθερία, με κατάληξη την ανεξαρτησία και την αγωνία του Διαμελισμού. Μετακινηθείτε μέσα σε δύο αιώνες όπου μια εμπορική εταιρεία κι έπειτα μια αυτοκρατορία κυβέρνησαν την Ινδία — κι οι Ινδοί αναπλάθηκαν σε έθνος και κέρδισαν την ελευθερία τους."
  },
  menuDescription: {
    en: "From Plassey and Company rule through 1857 and the Raj to Gandhi, independence and Partition.",
    el: "Από το Πλάσεϊ και την εταιρική κυριαρχία μέσα από το 1857 και το Ρατζ ως τον Γκάντι, την ανεξαρτησία και τον Διαμελισμό."
  },
  footerLabel: {
    en: "British India · 1757–1947 AD",
    el: "Βρετανική Ινδία · 1757–1947 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "British India",
    el: "Η Βρετανική Ινδία"
  },
  theme: THEMES.crimson,
  timeline: [
    {
      year: 1757,
      era: {
        en: "The Company's Conquest",
        el: "Η Κατάκτηση της Εταιρείας"
      },
      events: [
        {
          title: {
            en: "The battle of Plassey",
            el: "Η μάχη του Πλάσεϊ"
          },
          description: {
            en: "Robert Clive's victory at Plassey wins the East India Company control of rich Bengal.",
            el: "Η νίκη του Ρόμπερτ Κλάιβ στο Πλάσεϊ κερδίζει για την Εταιρεία Ανατολικών Ινδιών τον έλεγχο της πλούσιας Βεγγάλης."
          },
          extendedDescription: {
            en: "Through bribery and battle, Robert Clive defeated the Nawab of Bengal at Plassey and installed a puppet in his place. The trading company became the effective ruler of India's wealthiest province, gaining the right to collect its taxes. A merchant corporation had begun to conquer a subcontinent, funding its expansion from Indian revenue itself.",
            el: "Μέσα από δωροδοκία και μάχη, ο Ρόμπερτ Κλάιβ νίκησε τον Ναβάβ της Βεγγάλης στο Πλάσεϊ κι εγκατέστησε έναν υποχείριο στη θέση του. Η εμπορική εταιρεία έγινε ο ουσιαστικός κυβερνήτης της πλουσιότερης επαρχίας της Ινδίας, αποκτώντας το δικαίωμα να εισπράττει τους φόρους της. Μια εμπορική εταιρεία είχε αρχίσει να κατακτά μια υποήπειρο, χρηματοδοτώντας την επέκτασή της από τα ίδια τα ινδικά έσοδα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1793,
      era: {
        en: "Company Rule",
        el: "Η Κυριαρχία της Εταιρείας"
      },
      events: [
        {
          title: {
            en: "The Company Raj",
            el: "Το Ρατζ της Εταιρείας"
          },
          description: {
            en: "The Company spreads its rule across India, reshaping land, revenue and trade to its own profit.",
            el: "Η Εταιρεία απλώνει την κυριαρχία της σε όλη την Ινδία, αναδιαμορφώνοντας γη, έσοδα κι εμπόριο προς όφελός της."
          },
          extendedDescription: {
            en: "Over the following decades the Company annexed kingdom after kingdom by war and by treaty. New systems of land tax, such as the Permanent Settlement in Bengal, and floods of cheap British cloth transformed the economy — enriching the Company while ruining Indian weavers and burdening the peasantry. A foreign corporation now governed most of India.",
            el: "Στις επόμενες δεκαετίες η Εταιρεία προσάρτησε βασίλειο μετά το βασίλειο με πόλεμο και με συνθήκες. Νέα συστήματα φόρου γης, όπως ο Μόνιμος Διακανονισμός στη Βεγγάλη, και πλημμύρες φθηνού βρετανικού υφάσματος μεταμόρφωσαν την οικονομία — πλουτίζοντας την Εταιρεία ενώ κατέστρεφαν τους Ινδούς υφαντές και βάραιναν τους αγρότες. Μια ξένη εταιρεία κυβερνούσε πλέον το μεγαλύτερο μέρος της Ινδίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1857,
      era: {
        en: "The Great Rebellion",
        el: "Η Μεγάλη Εξέγερση"
      },
      events: [
        {
          title: {
            en: "The rebellion of 1857",
            el: "Η εξέγερση του 1857"
          },
          description: {
            en: "A mutiny of Indian soldiers flares into a vast uprising against Company rule across the north.",
            el: "Μια ανταρσία Ινδών στρατιωτών εξελίσσεται σε τεράστια εξέγερση κατά της κυριαρχίας της Εταιρείας σε όλον τον βορρά."
          },
          extendedDescription: {
            en: "Sparked by a rumour that cartridges were greased with cow and pig fat, offending Hindu and Muslim soldiers alike, the sepoys of the Company's army rose in revolt. The rebellion spread into a broad uprising of princes, soldiers and peasants, who rallied around the aged Mughal emperor. After savage fighting on both sides, the British crushed it — but the old order had been shattered.",
            el: "Πυροδοτημένη από μια φήμη ότι τα φυσίγγια ήταν λιπασμένα με λίπος αγελάδας και χοίρου, προσβάλλοντας Ινδουιστές και Μουσουλμάνους στρατιώτες, οι σιπάι του στρατού της Εταιρείας εξεγέρθηκαν. Η εξέγερση εξαπλώθηκε σε ευρεία εξέγερση πριγκίπων, στρατιωτών κι αγροτών, που συσπειρώθηκαν γύρω από τον γηραιό αυτοκράτορα των Μουγκάλ. Ύστερα από άγρια μάχη κι από τις δύο πλευρές, οι Βρετανοί την συνέτριψαν — όμως η παλιά τάξη είχε θρυμματιστεί."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1858,
      era: {
        en: "The British Raj",
        el: "Το Βρετανικό Ρατζ"
      },
      events: [
        {
          title: {
            en: "The Crown takes India",
            el: "Το Στέμμα παίρνει την Ινδία"
          },
          description: {
            en: "The Crown abolishes the Company and rules India directly; in 1877 Victoria is proclaimed Empress of India.",
            el: "Το Στέμμα καταργεί την Εταιρεία και κυβερνά την Ινδία απευθείας· το 1877 η Βικτώρια ανακηρύσσεται Αυτοκράτειρα των Ινδιών."
          },
          extendedDescription: {
            en: "After the rebellion, Britain abolished the East India Company and brought India under the direct rule of the Crown — the Raj. The last Mughal emperor was exiled, and in 1877 Queen Victoria was proclaimed Empress of India. A British viceroy governed the vast territory, its railways, army and civil service binding the subcontinent into a single imperial possession.",
            el: "Μετά την εξέγερση, η Βρετανία κατάργησε την Εταιρεία Ανατολικών Ινδιών κι έφερε την Ινδία υπό την άμεση κυριαρχία του Στέμματος — το Ρατζ. Ο τελευταίος αυτοκράτορας των Μουγκάλ εξορίστηκε, και το 1877 η βασίλισσα Βικτώρια ανακηρύχθηκε Αυτοκράτειρα των Ινδιών. Ένας Βρετανός αντιβασιλέας κυβερνούσε την απέραντη επικράτεια, με τους σιδηροδρόμους, τον στρατό και τη δημόσια διοίκησή της να δένουν την υποήπειρο σε ένα ενιαίο αυτοκρατορικό κτήμα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1885,
      era: {
        en: "The Rise of Nationalism",
        el: "Η Άνοδος του Εθνικισμού"
      },
      events: [
        {
          title: {
            en: "The Indian National Congress",
            el: "Το Ινδικό Εθνικό Κογκρέσο"
          },
          description: {
            en: "Educated Indians found the Indian National Congress, giving voice to a growing demand for self-rule.",
            el: "Μορφωμένοι Ινδοί ιδρύουν το Ινδικό Εθνικό Κογκρέσο, δίνοντας φωνή σε ένα αυξανόμενο αίτημα για αυτοδιοίκηση."
          },
          extendedDescription: {
            en: "A new class educated in English began to demand a share in governing their own land. The Indian National Congress, founded in 1885, at first sought only reform, but grew into the great vehicle of the freedom movement. The clumsy partition of Bengal in 1905 inflamed opinion and pushed the Congress toward a bolder call for self-rule, or swaraj.",
            el: "Μια νέα τάξη μορφωμένη στα αγγλικά άρχισε να απαιτεί μερίδιο στη διακυβέρνηση της ίδιας της χώρας της. Το Ινδικό Εθνικό Κογκρέσο, ιδρυμένο το 1885, στην αρχή ζητούσε μόνο μεταρρυθμίσεις, όμως εξελίχθηκε στο μεγάλο όχημα του κινήματος για την ελευθερία. Ο αδέξιος διαμελισμός της Βεγγάλης το 1905 άναψε τα πνεύματα κι έσπρωξε το Κογκρέσο προς ένα πιο τολμηρό αίτημα για αυτοδιοίκηση, το σουαράτζ."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1919,
      era: {
        en: "The Freedom Struggle",
        el: "Ο Αγώνας για την Ελευθερία"
      },
      events: [
        {
          title: {
            en: "The Amritsar massacre",
            el: "Η σφαγή του Αμριτσάρ"
          },
          description: {
            en: "British troops fire on an unarmed crowd at Amritsar, a slaughter that turns millions against the Raj.",
            el: "Βρετανικά στρατεύματα ανοίγουν πυρ σε άοπλο πλήθος στο Αμριτσάρ, μια σφαγή που στρέφει εκατομμύρια κατά του Ρατζ."
          },
          extendedDescription: {
            en: "At Jallianwala Bagh in Amritsar, soldiers under General Dyer fired without warning on a peaceful gathering penned in a walled garden, killing hundreds. The massacre destroyed Indian faith in British justice and became a turning point. It thrust forward a new leader who would transform the freedom struggle: Mohandas Gandhi.",
            el: "Στο Τζαλιανουάλα Μπαγκ στο Αμριτσάρ, στρατιώτες υπό τον στρατηγό Ντάιερ άνοιξαν πυρ χωρίς προειδοποίηση σε μια ειρηνική συγκέντρωση εγκλωβισμένη σε έναν περιτειχισμένο κήπο, σκοτώνοντας εκατοντάδες. Η σφαγή κατέστρεψε την ινδική πίστη στη βρετανική δικαιοσύνη κι έγινε σημείο καμπής. Έφερε στο προσκήνιο έναν νέο ηγέτη που θα μεταμόρφωνε τον αγώνα για την ελευθερία: τον Μοχάντας Γκάντι."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1930,
      era: {
        en: "The Freedom Struggle",
        el: "Ο Αγώνας για την Ελευθερία"
      },
      events: [
        {
          title: {
            en: "Gandhi and the Salt March",
            el: "Ο Γκάντι και η Πορεία του Αλατιού"
          },
          description: {
            en: "Gandhi marches to the sea to make salt in defiance of British law, igniting mass non-violent resistance.",
            el: "Ο Γκάντι βαδίζει προς τη θάλασσα για να φτιάξει αλάτι αψηφώντας τον βρετανικό νόμο, πυροδοτώντας μαζική μη βίαιη αντίσταση."
          },
          extendedDescription: {
            en: "Gandhi forged a new weapon: satyagraha, non-violent civil disobedience by millions. In 1930 he walked 240 miles to the sea to make salt in defiance of the British monopoly, a simple act that electrified the nation and drew the world's eyes. Through boycotts, marches and cheerful acceptance of prison, the freedom movement became a mass struggle no empire could long resist.",
            el: "Ο Γκάντι σφυρηλάτησε ένα νέο όπλο: τη σατυαγκράχα, τη μη βίαιη πολιτική ανυπακοή εκατομμυρίων. Το 1930 βάδισε 385 χιλιόμετρα ως τη θάλασσα για να φτιάξει αλάτι αψηφώντας το βρετανικό μονοπώλιο, μια απλή πράξη που ηλέκτρισε το έθνος και τράβηξε τα βλέμματα του κόσμου. Μέσα από μποϊκοτάζ, πορείες και τη χαρούμενη αποδοχή της φυλακής, το κίνημα για την ελευθερία έγινε ένας μαζικός αγώνας που καμία αυτοκρατορία δεν μπορούσε να αντέξει για πολύ."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1947,
      era: {
        en: "Independence and Partition",
        el: "Ανεξαρτησία και Διαμελισμός"
      },
      events: [
        {
          title: {
            en: "Independence and Partition",
            el: "Ανεξαρτησία και Διαμελισμός"
          },
          description: {
            en: "India wins its freedom, but is split into India and Pakistan amid vast migration and bloodshed.",
            el: "Η Ινδία κερδίζει την ελευθερία της, όμως διχοτομείται σε Ινδία και Πακιστάν μέσα σε τεράστια μετακίνηση κι αιματοχυσία."
          },
          extendedDescription: {
            en: "Exhausted by war and unable to hold India, Britain withdrew in August 1947. But freedom came with a terrible price: the land was partitioned into a mainly Hindu India and a Muslim Pakistan. Some fifteen million people fled across the new borders and perhaps a million died in the communal violence — a triumph and a tragedy inseparably bound together.",
            el: "Εξαντλημένη από τον πόλεμο κι ανίκανη να κρατήσει την Ινδία, η Βρετανία αποχώρησε τον Αύγουστο του 1947. Όμως η ελευθερία ήρθε με τρομερό τίμημα: η χώρα διαμελίστηκε σε μια κυρίως ινδουιστική Ινδία κι ένα μουσουλμανικό Πακιστάν. Περίπου δεκαπέντε εκατομμύρια άνθρωποι κατέφυγαν πέρα από τα νέα σύνορα κι ίσως ένα εκατομμύριο πέθαναν στη διακοινοτική βία — ένας θρίαμβος κι μια τραγωδία αξεδιάλυτα δεμένα μαζί."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
