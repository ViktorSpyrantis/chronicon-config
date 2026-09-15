/** Meiji Period — Περίοδος Μεϊτζί · Japanese History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const MEIJI_JAPAN = {
  id: "meiji-japan" as const,
  label: {
    en: "Meiji Period",
    el: "Περίοδος Μεϊτζί"
  },
  supertitle: {
    en: "明治 · The Restoration",
    el: "Η Παλινόρθωση"
  },
  title: {
    en: "The Meiji Period",
    el: "Η Περίοδος Μεϊτζί"
  },
  subtitle: {
    en: "From the Meiji Restoration and the astonishing drive to remake Japan as a modern industrial nation, through the abolition of the samurai, a written constitution and a conscript army, to the victories over China and Russia that announced a new great power to the world. Slide across a single generation in which a secluded feudal realm transformed itself into an empire of railways, factories and battleships.",
    el: "Από την Παλινόρθωση Μεϊτζί και την εκπληκτική ώθηση να αναπλαστεί η Ιαπωνία ως σύγχρονο βιομηχανικό έθνος, μέσα από την κατάργηση των σαμουράι, ένα γραπτό σύνταγμα και έναν στρατό κληρωτών, ως τις νίκες επί της Κίνας και της Ρωσίας που ανήγγειλαν μια νέα μεγάλη δύναμη στον κόσμο. Μετακινηθείτε σε μία μόνο γενιά όπου ένα απομονωμένο φεουδαρχικό βασίλειο μεταμόρφωσε τον εαυτό του σε αυτοκρατορία σιδηροδρόμων, εργοστασίων και θωρηκτών."
  },
  menuDescription: {
    en: "Japan's headlong modernization: the fall of the samurai, a constitution and victory over Russia.",
    el: "Η ραγδαία εκσυγχρονιστική πορεία της Ιαπωνίας: η πτώση των σαμουράι, ένα σύνταγμα και η νίκη επί της Ρωσίας."
  },
  footerLabel: {
    en: "Meiji Period · 1868–1912 AD",
    el: "Περίοδος Μεϊτζί · 1868–1912 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Meiji Period",
    el: "Η Περίοδος Μεϊτζί"
  },
  theme: THEMES.sapphire,
  timeline: [
    {
      year: 1868,
      era: {
        en: "The Meiji Restoration",
        el: "Η Παλινόρθωση Μεϊτζί"
      },
      events: [
        {
          title: {
            en: "The Meiji Restoration",
            el: "Η Παλινόρθωση Μεϊτζί"
          },
          description: {
            en: "Reformers restore the emperor and pledge in the Charter Oath to seek knowledge throughout the world.",
            el: "Μεταρρυθμιστές αποκαθιστούν τον αυτοκράτορα και ορκίζονται στον Χάρτη Όρκο να αναζητήσουν τη γνώση σε όλο τον κόσμο."
          },
          extendedDescription: {
            en: "The young leaders who ruled in Meiji's name set out to save Japan by transforming it. The Charter Oath promised deliberative assemblies and an end to old customs, and the court moved to Edo, renamed Tokyo, the \"eastern capital.\" Their slogan — \"rich country, strong army\" — would drive a generation of breakneck change.",
            el: "Οι νέοι ηγέτες που κυβερνούσαν στο όνομα του Μεϊτζί ξεκίνησαν να σώσουν την Ιαπωνία μεταμορφώνοντάς την. Ο Χάρτης Όρκος υποσχέθηκε συμβουλευτικές συνελεύσεις και τέλος στα παλιά έθιμα, και η αυλή μετακόμισε στο Έντο, μετονομασμένο σε Τόκιο, την «ανατολική πρωτεύουσα». Το σύνθημά τους — «πλούσια χώρα, ισχυρός στρατός» — θα οδηγούσε μια γενιά ιλιγγιώδους αλλαγής."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mutsuhito-Emperor-Meiji-1873.png?width=1024",
            alt: {
              en: "Emperor Meiji in Western dress, 1873",
              el: "Ο Αυτοκράτορας Μεϊτζί με δυτική ενδυμασία, 1873"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1871,
      era: {
        en: "Remaking the State",
        el: "Η Αναδιάπλαση του Κράτους"
      },
      events: [
        {
          title: {
            en: "The abolition of the domains",
            el: "Η κατάργηση των επικρατειών"
          },
          description: {
            en: "The feudal domains are abolished and replaced by prefectures, and the Iwakura Mission sails to study the West.",
            el: "Οι φεουδαρχικές επικράτειες καταργούνται και αντικαθίστανται από νομαρχίες, και η Αποστολή Ιβακούρα αποπλέει για να μελετήσει τη Δύση."
          },
          extendedDescription: {
            en: "In a single stroke the daimyō surrendered their lands, and the map of feudal Japan gave way to a centralized state of prefectures and governors. That same era saw universal conscription, a national land tax and compulsory schooling, while a great embassy toured Europe and America to learn the secrets of their power.",
            el: "Με μία μονοκονδυλιά οι νταϊμιό παρέδωσαν τις γαίες τους, και ο χάρτης της φεουδαρχικής Ιαπωνίας έδωσε τη θέση του σε ένα συγκεντρωτικό κράτος νομαρχιών και κυβερνητών. Η ίδια εποχή είδε την καθολική στράτευση, έναν εθνικό φόρο γης και την υποχρεωτική εκπαίδευση, ενώ μια μεγάλη πρεσβεία περιόδευσε την Ευρώπη και την Αμερική για να μάθει τα μυστικά της δύναμής τους."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Iwakura_mission.jpg?width=1024",
            alt: {
              en: "Members of the Iwakura Mission to the West",
              el: "Μέλη της Αποστολής Ιβακούρα στη Δύση"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1877,
      era: {
        en: "The Last Samurai",
        el: "Οι Τελευταίοι Σαμουράι"
      },
      events: [
        {
          title: {
            en: "The Satsuma Rebellion",
            el: "Η Εξέγερση της Σατσούμα"
          },
          description: {
            en: "Saigō Takamori leads a last samurai revolt, crushed by the new conscript army of the modern state.",
            el: "Ο Σάιγκο Τακαμόρι ηγείται μιας τελευταίας εξέγερσης σαμουράι, που συντρίβεται από τον νέο στρατό κληρωτών του σύγχρονου κράτους."
          },
          extendedDescription: {
            en: "Stripped of their stipends, their swords and their monopoly on arms, many samurai felt betrayed by the revolution they had made. When Saigō, a hero of the Restoration, led Satsuma's warriors in revolt, the peasant conscripts of the imperial army defeated them decisively. The old warrior class passed into history and legend.",
            el: "Στερημένοι από τα επιδόματα, τα σπαθιά και το μονοπώλιό τους στα όπλα, πολλοί σαμουράι ένιωσαν προδομένοι από την επανάσταση που είχαν κάνει. Όταν ο Σάιγκο, ήρωας της Παλινόρθωσης, οδήγησε τους πολεμιστές της Σατσούμα σε εξέγερση, οι αγρότες κληρωτοί του αυτοκρατορικού στρατού τους νίκησαν αποφασιστικά. Η παλιά πολεμική τάξη πέρασε στην ιστορία και τον θρύλο."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Saigo_Takamori_%28b%29.jpg?width=1024",
            alt: {
              en: "Saigō Takamori, leader of the Satsuma Rebellion",
              el: "Ο Σάιγκο Τακαμόρι, ηγέτης της Εξέγερσης της Σατσούμα"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1889,
      era: {
        en: "The Constitution",
        el: "Το Σύνταγμα"
      },
      events: [
        {
          title: {
            en: "The Meiji Constitution",
            el: "Το Σύνταγμα Μεϊτζί"
          },
          description: {
            en: "Japan adopts a written constitution and an elected Diet, becoming the first constitutional state in Asia.",
            el: "Η Ιαπωνία υιοθετεί ένα γραπτό σύνταγμα και μια εκλεγμένη Δίαιτα, γινόμενη το πρώτο συνταγματικό κράτος στην Ασία."
          },
          extendedDescription: {
            en: "Modelled on Prussia, the constitution granted by the emperor created a parliament, the Diet, while keeping sovereignty in the throne and real power with an oligarchy of statesmen. Limited though it was, it gave Japan the forms of a modern nation-state and a framework of law admired and feared across the region.",
            el: "Διαμορφωμένο κατά το πρότυπο της Πρωσίας, το σύνταγμα που παραχωρήθηκε από τον αυτοκράτορα δημιούργησε ένα κοινοβούλιο, τη Δίαιτα, κρατώντας παράλληλα την κυριαρχία στον θρόνο και την πραγματική εξουσία σε μια ολιγαρχία πολιτικών. Όσο περιορισμένο κι αν ήταν, έδωσε στην Ιαπωνία τις μορφές ενός σύγχρονου έθνους-κράτους και ένα πλαίσιο δικαίου που θαυμαζόταν και φοβόταν σε όλη την περιοχή."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1895,
      era: {
        en: "The First Sino-Japanese War",
        el: "Ο Πρώτος Σινοϊαπωνικός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Victory over China",
            el: "Νίκη επί της Κίνας"
          },
          description: {
            en: "Japan's modern forces defeat Qing China, winning Taiwan and announcing the arrival of a new power in Asia.",
            el: "Οι σύγχρονες δυνάμεις της Ιαπωνίας νικούν την Κίνα των Τσινγκ, κερδίζοντας την Ταϊβάν και αναγγέλλοντας την άφιξη μιας νέας δύναμης στην Ασία."
          },
          extendedDescription: {
            en: "A quarrel over Korea brought war with the ancient empire of China — and Japan's new navy and army won a swift, crushing victory. The peace gave Japan Taiwan and a huge indemnity, though Western powers forced it to disgorge some gains. In a generation, the once-threatened islands had become the rising power of the East.",
            el: "Μια διαμάχη για την Κορέα έφερε πόλεμο με την αρχαία αυτοκρατορία της Κίνας — και το νέο ναυτικό και ο στρατός της Ιαπωνίας κέρδισαν μια ταχεία, συντριπτική νίκη. Η ειρήνη έδωσε στην Ιαπωνία την Ταϊβάν και μια τεράστια αποζημίωση, αν και οι δυτικές δυνάμεις την ανάγκασαν να αποδώσει κάποια κέρδη. Μέσα σε μια γενιά, τα άλλοτε απειλούμενα νησιά είχαν γίνει η ανερχόμενη δύναμη της Ανατολής."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/%E6%97%85%E9%A1%BA%E6%B5%B7%E5%86%9B%E5%85%AC%E6%89%80.jpg?width=1024",
            alt: {
              en: "A scene from the First Sino-Japanese War",
              el: "Σκηνή από τον Πρώτο Σινοϊαπωνικό Πόλεμο"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1905,
      era: {
        en: "The Russo-Japanese War",
        el: "Ο Ρωσοϊαπωνικός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "The defeat of Russia",
            el: "Η ήττα της Ρωσίας"
          },
          description: {
            en: "At Tsushima the Japanese fleet annihilates a Russian armada — the first modern defeat of a Western empire by an Asian power.",
            el: "Στην Τσουσίμα ο ιαπωνικός στόλος αφανίζει μια ρωσική αρμάδα — η πρώτη σύγχρονη ήττα μιας δυτικής αυτοκρατορίας από ασιατική δύναμη."
          },
          extendedDescription: {
            en: "War with Russia over Manchuria and Korea was decided by the siege of Port Arthur and, at sea, by Admiral Tōgō's near-total destruction of the Russian Baltic Fleet at Tsushima. Japan's victory stunned the world, inspired colonized peoples from India to Egypt, and confirmed the empire as a great power to be reckoned with.",
            el: "Ο πόλεμος με τη Ρωσία για τη Μαντζουρία και την Κορέα κρίθηκε από την πολιορκία του Πορτ Άρθουρ και, στη θάλασσα, από τη σχεδόν ολοκληρωτική καταστροφή του ρωσικού Στόλου της Βαλτικής από τον ναύαρχο Τόγκο στην Τσουσίμα. Η νίκη της Ιαπωνίας συγκλόνισε τον κόσμο, ενέπνευσε αποικιοκρατούμενους λαούς από την Ινδία ως την Αίγυπτο και επιβεβαίωσε την αυτοκρατορία ως μεγάλη δύναμη υπολογίσιμη."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Battle_of_Tsushima%2C_1905_by_T%C5%8Dj%C5%8D_Sh%C5%8Dtar%C5%8D.jpg?width=1024",
            alt: {
              en: "The Battle of Tsushima, 1905",
              el: "Η Ναυμαχία της Τσουσίμα, 1905"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1912,
      era: {
        en: "The End of an Era",
        el: "Το Τέλος μιας Εποχής"
      },
      events: [
        {
          title: {
            en: "The death of Emperor Meiji",
            el: "Ο θάνατος του Αυτοκράτορα Μεϊτζί"
          },
          description: {
            en: "The Meiji emperor dies, mourned as the sovereign under whom Japan rose from seclusion to world power.",
            el: "Ο αυτοκράτορας Μεϊτζί πεθαίνει, θρηνούμενος ως ο κυρίαρχος επί του οποίου η Ιαπωνία ανυψώθηκε από την απομόνωση σε παγκόσμια δύναμη."
          },
          extendedDescription: {
            en: "In forty-four years Japan had gained an empire, an industry and a constitution, and had annexed Korea in 1910. The emperor's death closed that heroic age of transformation. The general Nogi, hero of Port Arthur, followed his lord in ritual suicide — a startling gesture that captured a nation poised uneasily between old spirit and new power.",
            el: "Σε σαράντα τέσσερα χρόνια η Ιαπωνία είχε αποκτήσει αυτοκρατορία, βιομηχανία και σύνταγμα, και είχε προσαρτήσει την Κορέα το 1910. Ο θάνατος του αυτοκράτορα έκλεισε εκείνη την ηρωική εποχή μεταμόρφωσης. Ο στρατηγός Νόγκι, ήρωας του Πορτ Άρθουρ, ακολούθησε τον άρχοντά του σε τελετουργική αυτοκτονία — μια εντυπωσιακή χειρονομία που αποτύπωσε ένα έθνος αμήχανα ισορροπημένο ανάμεσα στο παλιό πνεύμα και τη νέα δύναμη."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/M-NOGI.png?width=1024",
            alt: {
              en: "General Nogi Maresuke, hero of the Russo-Japanese War",
              el: "Ο στρατηγός Νόγκι Μαρεσούκε, ήρωας του Ρωσοϊαπωνικού Πολέμου"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
