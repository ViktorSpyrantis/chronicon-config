/** Muromachi Period — Περίοδος Μουρομάτσι · Japanese History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const MUROMACHI_JAPAN = {
  id: "muromachi-japan" as const,
  label: {
    en: "Muromachi Period",
    el: "Περίοδος Μουρομάτσι"
  },
  supertitle: {
    en: "室町 · The Ashikaga Shoguns",
    el: "Οι Σογκούν Ασικάγκα"
  },
  title: {
    en: "The Muromachi Period",
    el: "Η Περίοδος Μουρομάτσι"
  },
  subtitle: {
    en: "From the Ashikaga shoguns and their Golden and Silver Pavilions, through the refined Zen culture of gardens, tea and Noh theatre, to the ruinous Ōnin War that broke the shogunate and plunged Japan into a century of warring states — the age when the first Europeans landed with guns and the Christian faith. Slide across an era of dazzling art and endless war, in which high culture and chaos advanced together.",
    el: "Από τους σογκούν Ασικάγκα και τα Χρυσά και Αργυρά τους Περίπτερα, μέσα από τον εκλεπτυσμένο πολιτισμό Ζεν των κήπων, του τσαγιού και του θεάτρου Νο, ως τον καταστροφικό Πόλεμο του Όνιν που διέλυσε το σογκουνάτο και βύθισε την Ιαπωνία σε έναν αιώνα αντιμαχόμενων κρατών — την εποχή που αποβιβάστηκαν οι πρώτοι Ευρωπαίοι με όπλα και τη χριστιανική πίστη. Μετακινηθείτε σε μια εποχή εκθαμβωτικής τέχνης και ατέλειωτου πολέμου, όπου ο υψηλός πολιτισμός και το χάος προχωρούσαν μαζί."
  },
  menuDescription: {
    en: "The Ashikaga shoguns, Zen arts and the Ōnin War that opened Japan's age of warring states.",
    el: "Οι σογκούν Ασικάγκα, οι τέχνες Ζεν και ο Πόλεμος του Όνιν που άνοιξε την εποχή των αντιμαχόμενων κρατών."
  },
  footerLabel: {
    en: "Muromachi Period · 1336–1573 AD",
    el: "Περίοδος Μουρομάτσι · 1336–1573 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Muromachi Period",
    el: "Η Περίοδος Μουρομάτσι"
  },
  theme: THEMES.teal,
  timeline: [
    {
      year: 1336,
      era: {
        en: "The Ashikaga Shogunate",
        el: "Το Σογκουνάτο Ασικάγκα"
      },
      events: [
        {
          title: {
            en: "Takauji and the divided courts",
            el: "Ο Τακαούτζι και οι διαιρεμένες αυλές"
          },
          description: {
            en: "Ashikaga Takauji sets up a new shogun in Kyoto, while the exiled Go-Daigo maintains a rival southern court.",
            el: "Ο Ασικάγκα Τακαούτζι εγκαθιστά νέο σογκούν στο Κιότο, ενώ ο εξόριστος Γκο-Ντάιγκο διατηρεί μια αντίπαλη νότια αυλή."
          },
          extendedDescription: {
            en: "Having turned against Go-Daigo, Takauji enthroned a compliant emperor and took the title of shogun, ruling from the Muromachi district of Kyoto. Go-Daigo fled south to Yoshino and proclaimed the true line, opening nearly sixty years of division between Northern and Southern Courts.",
            el: "Έχοντας στραφεί κατά του Γκο-Ντάιγκο, ο Τακαούτζι ενθρόνισε έναν υπάκουο αυτοκράτορα και πήρε τον τίτλο του σογκούν, κυβερνώντας από τη συνοικία Μουρομάτσι του Κιότο. Ο Γκο-Ντάιγκο κατέφυγε νότια στο Γιοσίνο και ανακήρυξε την αληθινή γενιά, ανοίγοντας σχεδόν εξήντα χρόνια διαίρεσης ανάμεσα σε Βόρεια και Νότια Αυλή."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ashikaga_Takauji_J%C5%8Ddo-ji.jpg?width=1024",
            alt: {
              en: "Ashikaga Takauji, founder of the Muromachi shogunate",
              el: "Ο Ασικάγκα Τακαούτζι, ιδρυτής του σογκουνάτου Μουρομάτσι"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1397,
      era: {
        en: "The Golden Pavilion",
        el: "Το Χρυσό Περίπτερο"
      },
      events: [
        {
          title: {
            en: "Yoshimitsu and the Kinkaku-ji",
            el: "Ο Γιοσιμίτσου και το Κινκάκου-τζι"
          },
          description: {
            en: "The shogun Yoshimitsu, having reunited the courts, builds the gold-leafed Kinkaku-ji and patronizes a brilliant culture.",
            el: "Ο σογκούν Γιοσιμίτσου, έχοντας επανενώσει τις αυλές, χτίζει το επίχρυσο Κινκάκου-τζι και προστατεύει έναν λαμπρό πολιτισμό."
          },
          extendedDescription: {
            en: "The third Ashikaga shogun brought the Ashikaga to their height, ending the schism of the courts in 1392 and reopening rich trade with Ming China. His Golden Pavilion, shimmering above its pond, symbolized an age when the shoguns rivalled emperors as patrons of art, and Zen aesthetics permeated the court.",
            el: "Ο τρίτος σογκούν των Ασικάγκα οδήγησε τον οίκο στο απόγειό του, τερματίζοντας το σχίσμα των αυλών το 1392 και ανοίγοντας ξανά πλούσιο εμπόριο με την Κίνα των Μινγκ. Το Χρυσό του Περίπτερο, να λαμποκοπά πάνω από τη λιμνούλα του, συμβόλιζε μια εποχή όπου οι σογκούν ανταγωνίζονταν τους αυτοκράτορες ως προστάτες της τέχνης, και η αισθητική του Ζεν διαπότιζε την αυλή."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Golden_Pavilion_Kinkaku-ji_water_mirror_2024.jpg?width=1024",
            alt: {
              en: "The Golden Pavilion, Kinkaku-ji, in Kyoto",
              el: "Το Χρυσό Περίπτερο, Κινκάκου-τζι, στο Κιότο"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1400,
      era: {
        en: "The Way of Noh",
        el: "Ο Δρόμος του Νο"
      },
      events: [
        {
          title: {
            en: "Zeami and the Noh theatre",
            el: "Ο Ζεάμι και το θέατρο Νο"
          },
          description: {
            en: "Under Yoshimitsu's patronage, the actor Zeami perfects Noh, Japan's austere and haunting classical drama.",
            el: "Υπό την προστασία του Γιοσιμίτσου, ο ηθοποιός Ζεάμι τελειοποιεί το Νο, το λιτό και στοιχειωτικό κλασικό δράμα της Ιαπωνίας."
          },
          extendedDescription: {
            en: "Blending dance, chant, poetry and masks, Noh sought a serene, mysterious beauty its master Zeami called yūgen. His treatises on the actor's art are still studied today. Around the same ideals grew the tea ceremony, ink painting and rock gardens — a whole aesthetic of restraint, suggestion and Zen calm.",
            el: "Συνδυάζοντας χορό, ψαλμωδία, ποίηση και μάσκες, το Νο αναζητούσε μια γαλήνια, μυστηριώδη ομορφιά που ο δάσκαλός του Ζεάμι αποκαλούσε γιούγκεν. Οι πραγματείες του για την τέχνη του ηθοποιού μελετώνται ακόμη σήμερα. Γύρω από τα ίδια ιδεώδη αναπτύχθηκαν η τελετή του τσαγιού, η ζωγραφική με μελάνι και οι κήποι βράχων — μια ολόκληρη αισθητική της εγκράτειας, του υπαινιγμού και της γαλήνης του Ζεν."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Noh_Performance_%28235951661%29.jpeg?width=1024",
            alt: {
              en: "A performance of Noh, Japan's classical masked drama",
              el: "Παράσταση Νο, του κλασικού ιαπωνικού δράματος με μάσκες"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1467,
      era: {
        en: "The Ōnin War",
        el: "Ο Πόλεμος του Όνιν"
      },
      events: [
        {
          title: {
            en: "The Ōnin War shatters Kyoto",
            el: "Ο Πόλεμος του Όνιν συντρίβει το Κιότο"
          },
          description: {
            en: "A dispute over the shogunal succession erupts into a war that burns Kyoto and destroys central authority.",
            el: "Μια διαμάχη για τη διαδοχή του σογκούν εκρήγνυται σε πόλεμο που καίει το Κιότο και καταστρέφει την κεντρική εξουσία."
          },
          extendedDescription: {
            en: "For eleven years rival coalitions of great lords fought through the streets of the capital, reducing much of Kyoto to ash. The shogunate never recovered its power. As the fighting spread to the provinces, Japan dissolved into a patchwork of warring domains — the beginning of the Sengoku, the age of the country at war.",
            el: "Για έντεκα χρόνια αντίπαλοι συνασπισμοί μεγάλων αρχόντων πολεμούσαν στους δρόμους της πρωτεύουσας, μετατρέποντας μεγάλο μέρος του Κιότο σε στάχτη. Το σογκουνάτο δεν ανέκτησε ποτέ τη δύναμή του. Καθώς η σύγκρουση απλώθηκε στις επαρχίες, η Ιαπωνία διαλύθηκε σε ένα μωσαϊκό αντιμαχόμενων επικρατειών — η αρχή του Σενγκόκου, της εποχής της χώρας σε πόλεμο."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Onin-War-1467-1477-The-Battle-of-Onin-by-Utagawa-Yoshitora.png?width=1024",
            alt: {
              en: "A woodblock depiction of the Ōnin War",
              el: "Ξυλογραφική απεικόνιση του Πολέμου του Όνιν"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1543,
      era: {
        en: "The Europeans Arrive",
        el: "Έρχονται οι Ευρωπαίοι"
      },
      events: [
        {
          title: {
            en: "Firearms reach Japan",
            el: "Τα πυροβόλα φτάνουν στην Ιαπωνία"
          },
          description: {
            en: "Portuguese traders shipwrecked on Tanegashima introduce the matchlock gun, soon copied across warring Japan.",
            el: "Πορτογάλοι έμποροι ναυαγισμένοι στο Τανεγκασίμα εισάγουν το εμπροσθογεμές όπλο, που σύντομα αντιγράφεται σε όλη την εμπόλεμη Ιαπωνία."
          },
          extendedDescription: {
            en: "The first Europeans in Japan brought a weapon that would transform its wars. Japanese smiths reproduced the arquebus within a decade, and mass volleys of gunfire began to overturn the old cavalry tactics. Trade with the Portuguese also brought tobacco, bread and new words — the start of Japan's \"Christian century.\"",
            el: "Οι πρώτοι Ευρωπαίοι στην Ιαπωνία έφεραν ένα όπλο που θα μεταμόρφωνε τους πολέμους της. Ιάπωνες οπλουργοί αναπαρήγαγαν το τουφέκι μέσα σε μια δεκαετία, και οι μαζικές ομοβροντίες άρχισαν να ανατρέπουν την παλιά τακτική του ιππικού. Το εμπόριο με τους Πορτογάλους έφερε επίσης καπνό, ψωμί και νέες λέξεις — η αρχή του «χριστιανικού αιώνα» της Ιαπωνίας."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Strings_for_night_firing.jpg?width=1024",
            alt: {
              en: "Japanese matchlock guns, the tanegashima",
              el: "Ιαπωνικά εμπροσθογεμή τουφέκια, τα τανεγκασίμα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1549,
      era: {
        en: "The Christian Century",
        el: "Ο Χριστιανικός Αιώνας"
      },
      events: [
        {
          title: {
            en: "Francis Xavier and Christianity",
            el: "Ο Φραγκίσκος Ξαβιέ και ο Χριστιανισμός"
          },
          description: {
            en: "The Jesuit Francis Xavier lands at Kagoshima, beginning Catholic missions that win many thousands of converts.",
            el: "Ο Ιησουίτης Φραγκίσκος Ξαβιέ αποβιβάζεται στην Καγκοσίμα, ξεκινώντας καθολικές ιεραποστολές που κερδίζουν πολλές χιλιάδες προσηλυτισμένους."
          },
          extendedDescription: {
            en: "Xavier found the Japanese the \"delight of his heart\" and planted a mission that flourished, especially in Kyushu, where some lords converted partly to secure the Portuguese trade. Within decades there were hundreds of thousands of Japanese Christians — a community that would later face brutal suppression under the Tokugawa.",
            el: "Ο Ξαβιέ βρήκε τους Ιάπωνες «απόλαυση της καρδιάς του» και φύτεψε μια ιεραποστολή που άνθισε, ιδίως στο Κιούσου, όπου κάποιοι άρχοντες προσηλυτίστηκαν εν μέρει για να εξασφαλίσουν το πορτογαλικό εμπόριο. Μέσα σε δεκαετίες υπήρχαν εκατοντάδες χιλιάδες Ιάπωνες χριστιανοί — μια κοινότητα που αργότερα θα αντιμετώπιζε βάναυση καταστολή υπό τους Τοκουγκάουα."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Franciscus_de_Xabier.jpg?width=1024",
            alt: {
              en: "The Jesuit missionary Francis Xavier",
              el: "Ο Ιησουίτης ιεραπόστολος Φραγκίσκος Ξαβιέ"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1573,
      era: {
        en: "The End of the Ashikaga",
        el: "Το Τέλος των Ασικάγκα"
      },
      events: [
        {
          title: {
            en: "Nobunaga ends the shogunate",
            el: "Ο Νομπουνάγκα τερματίζει το σογκουνάτο"
          },
          description: {
            en: "The warlord Oda Nobunaga drives the last Ashikaga shogun from Kyoto, ending the dynasty and opening the path to reunification.",
            el: "Ο πολέμαρχος Όντα Νομπουνάγκα εκδιώκει τον τελευταίο σογκούν Ασικάγκα από το Κιότο, τερματίζοντας τη δυναστεία και ανοίγοντας τον δρόμο προς την επανένωση."
          },
          extendedDescription: {
            en: "By the mid-sixteenth century the Ashikaga were shoguns in name only. When Oda Nobunaga marched into Kyoto and then expelled Yoshiaki, the last of the line, the Muromachi shogunate simply ended. Out of the wreckage of the warring states, Nobunaga began the ruthless work of forging a single Japan.",
            el: "Ως τα μέσα του δέκατου έκτου αιώνα οι Ασικάγκα ήταν σογκούν μόνο κατ' όνομα. Όταν ο Όντα Νομπουνάγκα βάδισε στο Κιότο κι έπειτα εκδίωξε τον Γιοσιάκι, τον τελευταίο της γενιάς, το σογκουνάτο Μουρομάτσι απλώς τελείωσε. Μέσα από τα ερείπια των αντιμαχόμενων κρατών, ο Νομπουνάγκα ξεκίνησε το αδίστακτο έργο της σφυρηλάτησης μιας ενιαίας Ιαπωνίας."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Odanobunaga.jpg?width=1024",
            alt: {
              en: "The warlord Oda Nobunaga",
              el: "Ο πολέμαρχος Όντα Νομπουνάγκα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
