/** Edo Period — Περίοδος Έντο · Japanese History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const EDO_JAPAN = {
  id: "edo-japan" as const,
  label: {
    en: "Edo Period",
    el: "Περίοδος Έντο"
  },
  supertitle: {
    en: "江戸 · The Tokugawa Peace",
    el: "Η Ειρήνη των Τοκουγκάουα"
  },
  title: {
    en: "The Edo Period",
    el: "Η Περίοδος Έντο"
  },
  subtitle: {
    en: "From Tokugawa Ieyasu's founding of the shogunate at Edo, through the closing of the country and two and a half centuries of peace that gave rise to the vivid townsman culture of kabuki, haiku and the woodblock print, to the arrival of Commodore Perry's black ships and the fall of the last shogun. Slide across the long Tokugawa calm, an isolated Japan of samurai and merchants that ended when the wider world came knocking.",
    el: "Από την ίδρυση του σογκουνάτου στο Έντο από τον Τοκουγκάουα Ιεγιάσου, μέσα από το κλείσιμο της χώρας και δυόμισι αιώνες ειρήνης που γέννησαν τον ζωντανό αστικό πολιτισμό του καμπούκι, του χαϊκού και της ξυλογραφίας, ως την άφιξη των μαύρων πλοίων του πλοιάρχου Πέρι και την πτώση του τελευταίου σογκούν. Μετακινηθείτε στη μακρά γαλήνη των Τοκουγκάουα, μια απομονωμένη Ιαπωνία σαμουράι και εμπόρων που τερματίστηκε όταν ο ευρύτερος κόσμος χτύπησε την πόρτα."
  },
  menuDescription: {
    en: "The Tokugawa shogunate, a closed and peaceful Japan, ukiyo-e culture and Perry's black ships.",
    el: "Το σογκουνάτο των Τοκουγκάουα, μια κλειστή και ειρηνική Ιαπωνία, ο πολιτισμός ουκιγιό-ε και τα μαύρα πλοία του Πέρι."
  },
  footerLabel: {
    en: "Edo Period · 1603–1868 AD",
    el: "Περίοδος Έντο · 1603–1868 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Edo Period",
    el: "Η Περίοδος Έντο"
  },
  theme: THEMES.copper,
  timeline: [
    {
      year: 1603,
      era: {
        en: "The Tokugawa Shogunate",
        el: "Το Σογκουνάτο των Τοκουγκάουα"
      },
      events: [
        {
          title: {
            en: "Ieyasu founds the shogunate",
            el: "Ο Ιεγιάσου ιδρύει το σογκουνάτο"
          },
          description: {
            en: "Tokugawa Ieyasu becomes shogun and rules from Edo, founding a dynasty that will hold Japan for 265 years.",
            el: "Ο Τοκουγκάουα Ιεγιάσου γίνεται σογκούν και κυβερνά από το Έντο, ιδρύοντας μια δυναστεία που θα κρατήσει την Ιαπωνία για 265 χρόνια."
          },
          extendedDescription: {
            en: "From his stronghold at Edo — the future Tokyo — Ieyasu built a system to make war impossible. The great lords were bound by oaths, marriages and hostages, and required to spend alternate years attending the shogun's court. The emperor remained a revered recluse in Kyoto while the Tokugawa governed all.",
            el: "Από το προπύργιό του στο Έντο — το μελλοντικό Τόκιο — ο Ιεγιάσου έχτισε ένα σύστημα που έκανε τον πόλεμο αδύνατο. Οι μεγάλοι άρχοντες δεσμεύτηκαν με όρκους, γάμους και ομήρους, και υποχρεώθηκαν να περνούν εναλλάξ χρόνια στην αυλή του σογκούν. Ο αυτοκράτορας παρέμεινε ένας σεβαστός ερημίτης στο Κιότο ενώ οι Τοκουγκάουα κυβερνούσαν τα πάντα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1615,
      era: {
        en: "The Tokugawa Order",
        el: "Η Τάξη των Τοκουγκάουα"
      },
      events: [
        {
          title: {
            en: "The fall of Osaka",
            el: "Η πτώση της Οσάκα"
          },
          description: {
            en: "Ieyasu destroys the Toyotomi heirs at Osaka Castle and issues laws binding the warrior houses to the shogun.",
            el: "Ο Ιεγιάσου εξοντώνει τους κληρονόμους των Τογιοτόμι στο Κάστρο της Οσάκα και εκδίδει νόμους που δεσμεύουν τους πολεμικούς οίκους στον σογκούν."
          },
          extendedDescription: {
            en: "The last threat to Tokugawa rule fell with the great siege of Osaka, where Hideyoshi's son and his supporters perished. That same year the Buke Shohatto set strict rules for the daimyō, and a code for the imperial court reduced it to ceremony. The order that would keep Japan at peace for centuries was now complete.",
            el: "Η τελευταία απειλή για την κυριαρχία των Τοκουγκάουα έπεσε με τη μεγάλη πολιορκία της Οσάκα, όπου χάθηκαν ο γιος του Χιντεγιόσι και οι υποστηρικτές του. Την ίδια χρονιά το Μπούκε Σοχάτο έθεσε αυστηρούς κανόνες για τους νταϊμιό, και ένας κώδικας για την αυτοκρατορική αυλή την περιόρισε στην τελετουργία. Η τάξη που θα κρατούσε την Ιαπωνία σε ειρήνη για αιώνες ήταν πλέον ολοκληρωμένη."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1639,
      era: {
        en: "The Closed Country",
        el: "Η Κλειστή Χώρα"
      },
      events: [
        {
          title: {
            en: "Sakoku: Japan closes its doors",
            el: "Σακόκου: η Ιαπωνία κλείνει τις πόρτες της"
          },
          description: {
            en: "After crushing the Christian Shimabara revolt, the shogunate seals the country, banning Christianity and foreign trade.",
            el: "Αφού συντρίβει τη χριστιανική εξέγερση της Σιμαμπάρα, το σογκουνάτο σφραγίζει τη χώρα, απαγορεύοντας τον Χριστιανισμό και το ξένο εμπόριο."
          },
          extendedDescription: {
            en: "Fearing that Christianity and European ambition threatened its rule, the shogunate expelled the Portuguese, forbade Japanese to leave, and drove the faith underground with savage persecution. Only a tiny Dutch outpost on the island of Dejima kept a window open to the West. For over two centuries, Japan lived apart from the world.",
            el: "Φοβούμενο ότι ο Χριστιανισμός και η ευρωπαϊκή φιλοδοξία απειλούσαν την κυριαρχία του, το σογκουνάτο εξεδίωξε τους Πορτογάλους, απαγόρευσε στους Ιάπωνες να φεύγουν και έστειλε την πίστη στην παρανομία με άγριους διωγμούς. Μόνο ένα μικροσκοπικό ολλανδικό φυλάκιο στο νησί Ντετζίμα κρατούσε ένα παράθυρο ανοιχτό προς τη Δύση. Για πάνω από δύο αιώνες, η Ιαπωνία έζησε χωριστά από τον κόσμο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1688,
      era: {
        en: "The Genroku Era",
        el: "Η Εποχή Γκενρόκου"
      },
      events: [
        {
          title: {
            en: "The floating world of Genroku",
            el: "Ο πλωτός κόσμος του Γκενρόκου"
          },
          description: {
            en: "In the Genroku years a brilliant merchant culture blooms — kabuki, the poet Bashō, and the pleasures of the \"floating world.\"",
            el: "Στα χρόνια του Γκενρόκου ανθίζει ένας λαμπρός εμπορικός πολιτισμός — το καμπούκι, ο ποιητής Μπάσο και οι απολαύσεις του «πλωτού κόσμου»."
          },
          extendedDescription: {
            en: "Peace made the townsfolk of Edo and Osaka rich, and they built a culture of their own. Kabuki and puppet theatre packed the playhouses, Matsuo Bashō raised the haiku to art, Chikamatsu wrote tragedies of love and duty, and the ukiyo-e print captured the actors and beauties of the pleasure quarters — the exuberant \"floating world.\"",
            el: "Η ειρήνη έκανε τους αστούς του Έντο και της Οσάκα πλούσιους, κι εκείνοι έχτισαν έναν δικό τους πολιτισμό. Το καμπούκι και το κουκλοθέατρο γέμιζαν τα θέατρα, ο Ματσούο Μπάσο ανύψωσε το χαϊκού σε τέχνη, ο Τσικαμάτσου έγραψε τραγωδίες έρωτα και καθήκοντος, και η ξυλογραφία ουκιγιό-ε αποτύπωσε τους ηθοποιούς και τις καλλονές των συνοικιών της απόλαυσης — τον ξέφρενο «πλωτό κόσμο»."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1703,
      era: {
        en: "The Way of the Samurai",
        el: "Ο Δρόμος του Σαμουράι"
      },
      events: [
        {
          title: {
            en: "The Forty-seven Rōnin",
            el: "Οι Σαράντα Επτά Ρόνιν"
          },
          description: {
            en: "Forty-seven masterless samurai avenge their lord and then die by their own hands, becoming a legend of loyalty.",
            el: "Σαράντα επτά αδέσποτοι σαμουράι εκδικούνται τον άρχοντά τους κι έπειτα πεθαίνουν με τα ίδια τους τα χέρια, γινόμενοι θρύλος πίστης."
          },
          extendedDescription: {
            en: "After their lord was forced to take his life, his retainers waited two years, then struck down the official they blamed, and surrendered to face ritual suicide. Their story, retold endlessly as Chūshingura, crystallized the samurai ideal of loyalty unto death, even as such warriors were becoming peaceful bureaucrats in a country long at rest.",
            el: "Αφού ο άρχοντάς τους αναγκάστηκε να θέσει τέρμα στη ζωή του, οι ακόλουθοί του περίμεναν δύο χρόνια, έπειτα σκότωσαν τον αξιωματούχο που θεωρούσαν υπεύθυνο και παραδόθηκαν για να αντιμετωπίσουν την τελετουργική αυτοκτονία. Η ιστορία τους, ξαναειπωμένη ατέλειωτα ως Τσουσινγκούρα, αποκρυστάλλωσε το ιδεώδες των σαμουράι για πίστη μέχρι θανάτου, την ώρα που τέτοιοι πολεμιστές γίνονταν ειρηνικοί γραφειοκράτες σε μια χώρα από καιρό σε ηρεμία."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1831,
      era: {
        en: "The Late Edo",
        el: "Το Ύστερο Έντο"
      },
      events: [
        {
          title: {
            en: "Hokusai's Great Wave",
            el: "Το Μεγάλο Κύμα του Χοκουσάι"
          },
          description: {
            en: "Katsushika Hokusai prints The Great Wave off Kanagawa, the crowning image of the woodblock art of Japan.",
            el: "Ο Κατσουσίκα Χοκουσάι τυπώνει το Μεγάλο Κύμα στην Κανάγκαουα, την κορυφαία εικόνα της ξυλογραφικής τέχνης της Ιαπωνίας."
          },
          extendedDescription: {
            en: "Part of his series Thirty-six Views of Mount Fuji, Hokusai's towering wave became the most famous work of Japanese art in the world. When such prints later reached Europe, they helped spark the craze of Japonisme and shaped the Impressionists — a first sign of the cultural power the closed islands would one day project abroad.",
            el: "Μέρος της σειράς του Τριάντα Έξι Όψεις του Όρους Φούτζι, το πελώριο κύμα του Χοκουσάι έγινε το πιο διάσημο έργο ιαπωνικής τέχνης στον κόσμο. Όταν τέτοιες ξυλογραφίες έφτασαν αργότερα στην Ευρώπη, βοήθησαν να ξεσπάσει η μανία του Ιαπωνισμού και διαμόρφωσαν τους Ιμπρεσιονιστές — μια πρώτη ένδειξη της πολιτιστικής δύναμης που τα κλειστά νησιά θα πρόβαλλαν μια μέρα στο εξωτερικό."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1853,
      era: {
        en: "The Black Ships",
        el: "Τα Μαύρα Πλοία"
      },
      events: [
        {
          title: {
            en: "Perry's black ships",
            el: "Τα μαύρα πλοία του Πέρι"
          },
          description: {
            en: "American warships under Commodore Perry steam into Edo Bay and force Japan to open to the outside world.",
            el: "Αμερικανικά πολεμικά πλοία υπό τον πλοίαρχο Πέρι εισέρχονται στον κόλπο του Έντο και αναγκάζουν την Ιαπωνία να ανοίξει στον έξω κόσμο."
          },
          extendedDescription: {
            en: "Perry's smoke-belching steamers, beyond anything the shogunate could resist, demanded trade and coaling rights. The treaties that followed ended two centuries of seclusion on humiliating terms. The shock exposed the weakness of the Tokugawa and set off a bitter debate over how Japan could survive in a world of predatory Western powers.",
            el: "Τα ατμόπλοια του Πέρι, που ξερνούσαν καπνό, πέρα από ό,τι μπορούσε να αντισταθεί το σογκουνάτο, απαίτησαν εμπόριο και δικαιώματα ανεφοδιασμού σε κάρβουνο. Οι συνθήκες που ακολούθησαν τερμάτισαν δύο αιώνες απομόνωσης με ταπεινωτικούς όρους. Το σοκ εξέθεσε την αδυναμία των Τοκουγκάουα και πυροδότησε μια πικρή διαμάχη για το πώς θα μπορούσε η Ιαπωνία να επιβιώσει σε έναν κόσμο αρπακτικών δυτικών δυνάμεων."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1868,
      era: {
        en: "The Fall of the Shogun",
        el: "Η Πτώση του Σογκούν"
      },
      events: [
        {
          title: {
            en: "The last shogun falls",
            el: "Ο τελευταίος σογκούν πέφτει"
          },
          description: {
            en: "Rebel domains overthrow the Tokugawa in the name of the emperor, ending seven centuries of warrior rule.",
            el: "Επαναστατικές επικράτειες ανατρέπουν τους Τοκουγκάουα στο όνομα του αυτοκράτορα, τερματίζοντας επτά αιώνες πολεμικής κυριαρχίας."
          },
          extendedDescription: {
            en: "The southern domains of Satsuma and Chōshū, rallying to the slogan \"revere the emperor, expel the barbarians,\" forced the last shogun to resign and defeated his loyalists in the Boshin War. Power returned, in name, to the young Emperor Meiji — and Japan stood on the threshold of its headlong rush into the modern age.",
            el: "Οι νότιες επικράτειες της Σατσούμα και της Τσόσου, συσπειρωμένες γύρω από το σύνθημα «τιμήστε τον αυτοκράτορα, διώξτε τους βαρβάρους», ανάγκασαν τον τελευταίο σογκούν να παραιτηθεί και νίκησαν τους πιστούς του στον Πόλεμο Μπόσιν. Η εξουσία επέστρεψε, κατ' όνομα, στον νεαρό Αυτοκράτορα Μεϊτζί — και η Ιαπωνία στάθηκε στο κατώφλι της ραγδαίας εξόρμησής της στη σύγχρονη εποχή."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
