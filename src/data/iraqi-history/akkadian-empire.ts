/** Akkadian Empire & Ur III — Ακκαδική Αυτοκρατορία & Τρίτη Ουρ · Iraqi History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const AKKADIAN_EMPIRE = {
  id: "akkadian-empire" as const,
  label: {
    en: "Akkadian Empire & Ur III",
    el: "Ακκαδική Αυτοκρατορία & Τρίτη Ουρ"
  },
  supertitle: {
    en: "Ancient Mesopotamia",
    el: "Αρχαία Μεσοποταμία"
  },
  title: {
    en: "The Akkadian Empire & the Third Dynasty of Ur",
    el: "Η Ακκαδική Αυτοκρατορία & η Τρίτη Δυναστεία της Ουρ"
  },
  subtitle: {
    en: "Sargon of Akkad forged the world's first empire, binding Sumer and the Semitic north under one crown and one god-like king. After Akkad fell to drought and the Gutians, the kings of Ur raised a last, brilliant Sumerian renaissance — with its towering ziggurat, vast bureaucracy, and the oldest law code yet found — before it too was swept away. Slide across the centuries to follow the first age of empire.",
    el: "Ο Σαργών της Ακκάδ σφυρηλάτησε την πρώτη αυτοκρατορία του κόσμου, ενώνοντας το Σουμέρ και τον σημιτικό βορρά υπό ένα στέμμα και έναν θεοποιημένο βασιλιά. Αφού η Ακκάδ έπεσε από την ξηρασία και τους Γουταίους, οι βασιλείς της Ουρ ύψωσαν μια τελευταία, λαμπρή σουμεριακή αναγέννηση — με το πανύψηλο ζιγκουράτ της, την τεράστια γραφειοκρατία και τον αρχαιότερο νομικό κώδικα που έχει βρεθεί — προτού κι αυτή σαρωθεί. Μετακινηθείτε στους αιώνες για να παρακολουθήσετε την πρώτη εποχή των αυτοκρατοριών."
  },
  menuDescription: {
    en: "Sargon's first empire and the Sumerian renaissance of Ur that followed.",
    el: "Η πρώτη αυτοκρατορία του Σαργών και η σουμεριακή αναγέννηση της Ουρ που ακολούθησε."
  },
  footerLabel: {
    en: "Akkad & Ur III · 2334-2004 BC",
    el: "Ακκάδ & Τρίτη Ουρ · 2334-2004 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Akkadian Empire & Ur III",
    el: "Η Ακκαδική Αυτοκρατορία & η Τρίτη Ουρ"
  },
  theme: THEMES.bronze,
  timeline: [
    {
      year: -2334,
      era: {
        en: "Akkadian Empire",
        el: "Ακκαδική Αυτοκρατορία"
      },
      events: [
        {
          title: {
            en: "Sargon founds the first empire",
            el: "Ο Σαργών ιδρύει την πρώτη αυτοκρατορία"
          },
          description: {
            en: "Sargon of Akkad overthrows Lugalzagesi, conquers all Sumer, and builds a realm reaching from the Persian Gulf to the Mediterranean.",
            el: "Ο Σαργών της Ακκάδ ανατρέπει τον Λουγκαλζαγκέζι, κατακτά όλο το Σουμέρ και χτίζει ένα κράτος που εκτείνεται από τον Περσικό Κόλπο ως τη Μεσόγειο."
          },
          extendedDescription: {
            en: "Sargon rose, legend said, from cupbearer to conqueror, and set his daughter and generals over the cities he took. His capital Akkad — still undiscovered — gave its name to the Akkadian language, the Semitic tongue that would replace Sumerian as the speech of Mesopotamia. Later kings measured themselves against him for two thousand years.",
            el: "Ο Σαργών ανήλθε, έλεγε ο θρύλος, από οινοχόος σε κατακτητής, και τοποθέτησε την κόρη και τους στρατηγούς του πάνω από τις πόλεις που κατέλαβε. Η πρωτεύουσά του Ακκάδ — που παραμένει άγνωστη — έδωσε το όνομά της στην ακκαδική γλώσσα, τη σημιτική λαλιά που θα αντικαθιστούσε τη σουμεριακή ως ομιλία της Μεσοποταμίας. Μεταγενέστεροι βασιλείς μετριούνταν με αυτόν επί δύο χιλιάδες χρόνια."
          },
          category: "political"
        }
      ]
    },
    {
      year: -2300,
      era: {
        en: "Akkadian Empire",
        el: "Ακκαδική Αυτοκρατορία"
      },
      events: [
        {
          title: {
            en: "Enheduanna, the first author",
            el: "Η Ενχεντουάννα, η πρώτη συγγραφέας"
          },
          description: {
            en: "Sargon's daughter, high priestess of the moon god at Ur, writes hymns signed with her own name — the earliest author known to history.",
            el: "Η κόρη του Σαργών, αρχιέρεια του θεού της σελήνης στην Ουρ, γράφει ύμνους υπογεγραμμένους με το ίδιο της το όνομα — η αρχαιότερη επώνυμη συγγραφέας της ιστορίας."
          },
          extendedDescription: {
            en: "Enheduanna's temple hymns and her passionate poems to the goddess Inanna are the first literature we can attribute to a named individual. Installed to bind Sumer's priesthood to her father's throne, she wove together the gods of conqueror and conquered — and, extraordinarily for the ancient world, spoke in the first person of her own exile and return.",
            el: "Οι ναϊκοί ύμνοι της Ενχεντουάννα και τα παθιασμένα ποιήματά της προς τη θεά Ινάννα είναι η πρώτη λογοτεχνία που μπορούμε να αποδώσουμε σε επώνυμο πρόσωπο. Τοποθετημένη για να δέσει το ιερατείο του Σουμέρ με τον θρόνο του πατέρα της, ύφανε μαζί τους θεούς κατακτητή και κατακτημένων — και, κάτι εξαιρετικό για τον αρχαίο κόσμο, μίλησε σε πρώτο πρόσωπο για τη δική της εξορία και επιστροφή."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -2254,
      era: {
        en: "Akkadian Empire",
        el: "Ακκαδική Αυτοκρατορία"
      },
      events: [
        {
          title: {
            en: "Naram-Sin, king of the four quarters",
            el: "Ο Ναράμ-Σιν, βασιλιάς των τεσσάρων γωνιών"
          },
          description: {
            en: "Sargon's grandson Naram-Sin raises the empire to its height and becomes the first Mesopotamian king to declare himself a living god.",
            el: "Ο εγγονός του Σαργών, Ναράμ-Σιν, ανεβάζει την αυτοκρατορία στο απόγειό της και γίνεται ο πρώτος μεσοποταμιακός βασιλιάς που ανακηρύσσεται ζωντανός θεός."
          },
          extendedDescription: {
            en: "Naram-Sin styled himself 'king of the four quarters of the world' and 'god of Akkad,' writing his name with the divine sign. His victory stele shows him climbing a mountain over fallen foes, crowned with the horns of a god — the earliest surviving image of a deified ruler, later carried off to Susa as Elamite plunder.",
            el: "Ο Ναράμ-Σιν αυτοαποκαλούνταν «βασιλιάς των τεσσάρων γωνιών του κόσμου» και «θεός της Ακκάδ», γράφοντας το όνομά του με το θεϊκό σύμβολο. Η στήλη νίκης του τον δείχνει να ανεβαίνει ένα βουνό πάνω από πεσμένους εχθρούς, στεφανωμένος με τα κέρατα θεού — η αρχαιότερη σωζόμενη εικόνα θεοποιημένου ηγεμόνα, που αργότερα μεταφέρθηκε στα Σούσα ως ελαμιτικό λάφυρο."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -2190,
      era: {
        en: "Gutian Interlude",
        el: "Γουτιανό Μεσοδιάστημα"
      },
      events: [
        {
          title: {
            en: "The fall of Akkad",
            el: "Η πτώση της Ακκάδ"
          },
          description: {
            en: "Drought, revolt, and raids by the mountain Gutians break the Akkadian Empire, an end later poets blamed on the anger of the gods.",
            el: "Ξηρασία, εξεγέρσεις και επιδρομές των ορεινών Γουταίων συντρίβουν την Ακκαδική Αυτοκρατορία, ένα τέλος που μεταγενέστεροι ποιητές απέδωσαν στην οργή των θεών."
          },
          extendedDescription: {
            en: "The Curse of Akkad tells how Naram-Sin offended Enlil and doomed his city to ruin. Modern scientists point to a century-long drought that struck the whole Near East around 2200 BCE. As central power dissolved, the Gutians from the Zagros overran the north, and Mesopotamia fractured once more into its cities.",
            el: "Η Κατάρα της Ακκάδ αφηγείται πώς ο Ναράμ-Σιν προσέβαλε τον Ενλίλ και καταδίκασε την πόλη του στην καταστροφή. Σύγχρονοι επιστήμονες επισημαίνουν μια ξηρασία ενός αιώνα που έπληξε ολόκληρη την Εγγύς Ανατολή γύρω στο 2200 π.Χ. Καθώς η κεντρική εξουσία διαλυόταν, οι Γουταίοι από τα Ζάγρος κατέκλυσαν τον βορρά, και η Μεσοποταμία κατακερματίστηκε ξανά στις πόλεις της."
          },
          category: "other"
        }
      ]
    },
    {
      year: -2144,
      era: {
        en: "Gutian Interlude",
        el: "Γουτιανό Μεσοδιάστημα"
      },
      events: [
        {
          title: {
            en: "Gudea of Lagash",
            el: "Ο Γκουντέα της Λαγκάς"
          },
          description: {
            en: "While the Gutians hold the north, the pious governor Gudea makes Lagash a centre of temple-building and art.",
            el: "Ενώ οι Γουταίοι κρατούν τον βορρά, ο ευσεβής κυβερνήτης Γκουντέα κάνει τη Λαγκάς κέντρο ναοδομίας και τέχνης."
          },
          extendedDescription: {
            en: "Gudea left dozens of serene diorite statues of himself in prayer, and long inscriptions describing how he built the temple Eninnu for the god Ningirsu, importing cedar from Lebanon and stone from Arabia. His reign is a quiet golden age of Sumerian craftsmanship between two empires.",
            el: "Ο Γκουντέα άφησε δεκάδες γαλήνια αγάλματα του εαυτού του σε στάση προσευχής από διορίτη, και μακρές επιγραφές που περιγράφουν πώς έχτισε τον ναό Ενίννου για τον θεό Νινγκίρσου, εισάγοντας κέδρο από τον Λίβανο και πέτρα από την Αραβία. Η βασιλεία του είναι μια ήσυχη χρυσή εποχή σουμεριακής τέχνης ανάμεσα σε δύο αυτοκρατορίες."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -2112,
      era: {
        en: "Third Dynasty of Ur",
        el: "Τρίτη Δυναστεία της Ουρ"
      },
      events: [
        {
          title: {
            en: "Ur-Nammu revives Sumer",
            el: "Ο Ουρ-Νάμμου αναβιώνει το Σουμέρ"
          },
          description: {
            en: "Ur-Nammu drives out the Gutians, unites the south under Ur, and proclaims the oldest law code yet discovered.",
            el: "Ο Ουρ-Νάμμου διώχνει τους Γουταίους, ενώνει τον νότο υπό την Ουρ και εκδίδει τον αρχαιότερο νομικό κώδικα που έχει ανακαλυφθεί."
          },
          extendedDescription: {
            en: "The Third Dynasty of Ur opened a brilliant Neo-Sumerian revival. Ur-Nammu's law code, three centuries older than Hammurabi's, sets fixed fines and punishments in the name of justice for the weak. His dynasty restored Sumerian as the language of state even as Akkadian speakers filled the land.",
            el: "Η Τρίτη Δυναστεία της Ουρ άνοιξε μια λαμπρή νεοσουμεριακή αναγέννηση. Ο νομικός κώδικας του Ουρ-Νάμμου, τρεις αιώνες αρχαιότερος από εκείνον του Χαμουραμπί, ορίζει σταθερά πρόστιμα και ποινές στο όνομα της δικαιοσύνης για τους αδύναμους. Η δυναστεία του αποκατέστησε τη σουμεριακή ως γλώσσα του κράτους, ακόμη κι ενώ ακκαδόφωνοι γέμιζαν τη χώρα."
          },
          category: "political"
        }
      ]
    },
    {
      year: -2100,
      era: {
        en: "Third Dynasty of Ur",
        el: "Τρίτη Δυναστεία της Ουρ"
      },
      events: [
        {
          title: {
            en: "The Great Ziggurat of Ur",
            el: "Το Μεγάλο Ζιγκουράτ της Ουρ"
          },
          description: {
            en: "Ur-Nammu raises the towering ziggurat to the moon god Nanna, the best-preserved of all Mesopotamian temple-mountains.",
            el: "Ο Ουρ-Νάμμου υψώνει το πανύψηλο ζιγκουράτ προς τον θεό της σελήνης Νάννα, το καλύτερα διατηρημένο από όλα τα μεσοποταμιακά ναϊκά όρη."
          },
          extendedDescription: {
            en: "The ziggurat of Ur still rises from the plain of southern Iraq, its lowest terrace of baked brick partly restored. A mud-brick mountain crowned by a shrine to Nanna, it was the heart of a temple complex that ran the city's economy — and, over four thousand years later, the enduring emblem of Sumerian civilization.",
            el: "Το ζιγκουράτ της Ουρ υψώνεται ακόμη από την πεδιάδα του νότιου Ιράκ, με τη χαμηλότερη βαθμίδα του από ψημένη πλίνθο εν μέρει αποκατεστημένη. Ένα πλίνθινο όρος στεφανωμένο με ιερό του Νάννα, ήταν η καρδιά ενός ναϊκού συγκροτήματος που διηύθυνε την οικονομία της πόλης — και, τέσσερις χιλιετίες αργότερα, το διαχρονικό έμβλημα του σουμεριακού πολιτισμού."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -2094,
      era: {
        en: "Third Dynasty of Ur",
        el: "Τρίτη Δυναστεία της Ουρ"
      },
      events: [
        {
          title: {
            en: "Shulgi and the perfect state",
            el: "Ο Σουλγκί και το τέλειο κράτος"
          },
          description: {
            en: "King Shulgi builds a vast bureaucracy, standardizes weights and calendars, and has himself worshipped as a god.",
            el: "Ο βασιλιάς Σουλγκί χτίζει μια τεράστια γραφειοκρατία, τυποποιεί μέτρα και ημερολόγια, και λατρεύεται ως θεός."
          },
          extendedDescription: {
            en: "Shulgi's forty-eight-year reign left tens of thousands of accounting tablets, recording every sheep and sack of grain of a tightly managed realm. He founded scribal schools, reformed the army, built roads with rest-houses, and boasted in hymns of his own learning and speed — the model of the omnicompetent god-king.",
            el: "Η σαρανταοκτάχρονη βασιλεία του Σουλγκί άφησε δεκάδες χιλιάδες λογιστικές πινακίδες, που κατέγραφαν κάθε πρόβατο και σακί σιτηρών ενός αυστηρά διαχειριζόμενου κράτους. Ίδρυσε σχολές γραφέων, μεταρρύθμισε τον στρατό, έχτισε δρόμους με σταθμούς ανάπαυσης και καυχιόταν σε ύμνους για τη μάθηση και την ταχύτητά του — το πρότυπο του παντοδύναμου θεού-βασιλιά."
          },
          category: "political"
        }
      ]
    },
    {
      year: -2004,
      era: {
        en: "Third Dynasty of Ur",
        el: "Τρίτη Δυναστεία της Ουρ"
      },
      events: [
        {
          title: {
            en: "The fall of Ur",
            el: "Η πτώση της Ουρ"
          },
          description: {
            en: "Famine, Amorite pressure, and an Elamite assault destroy Ur and carry off its last king, ending Sumerian power forever.",
            el: "Η πείνα, η πίεση των Αμορραίων και μια ελαμιτική επίθεση καταστρέφουν την Ουρ και απάγουν τον τελευταίο βασιλιά της, τερματίζοντας για πάντα τη σουμεριακή ισχύ."
          },
          extendedDescription: {
            en: "The Lament for Ur mourns a city given over to fire and flood, its people scattered, King Ibbi-Sin dragged in chains to Elam. Sumer would never rule itself again: the future belonged to the Semitic Amorites who founded new dynasties at Isin, Larsa, and a small town on the Euphrates called Babylon.",
            el: "Ο Θρήνος για την Ουρ πενθεί μια πόλη παραδομένη στη φωτιά και την πλημμύρα, με τον λαό της διασκορπισμένο και τον βασιλιά Ιμπί-Σιν να σέρνεται αλυσοδεμένος στο Ελάμ. Το Σουμέρ δεν θα κυβερνούσε ποτέ ξανά τον εαυτό του: το μέλλον ανήκε στους Σημίτες Αμορραίους που ίδρυσαν νέες δυναστείες στην Ισίν, τη Λάρσα και μια μικρή πόλη στον Ευφράτη ονόματι Βαβυλώνα."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
