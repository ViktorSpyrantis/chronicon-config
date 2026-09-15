/** Kamakura Period — Περίοδος Καμακούρα · Japanese History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const KAMAKURA_JAPAN = {
  id: "kamakura-japan" as const,
  label: {
    en: "Kamakura Period",
    el: "Περίοδος Καμακούρα"
  },
  supertitle: {
    en: "鎌倉 · The First Shogunate",
    el: "Το Πρώτο Σογκουνάτο"
  },
  title: {
    en: "The Kamakura Period",
    el: "Η Περίοδος Καμακούρα"
  },
  subtitle: {
    en: "From Minamoto no Yoritomo's founding of Japan's first warrior government, through the shrewd rule of the Hōjō regents and a wave of new, popular Buddhism, to the two Mongol invasions turned back by the \"divine wind\" and the collapse that followed. Slide across a century and a half in which the sword replaced the brush, the samurai became masters of Japan, and a new spiritual life took root among warriors and commoners alike.",
    el: "Από την ίδρυση της πρώτης πολεμικής κυβέρνησης της Ιαπωνίας από τον Μιναμότο νο Γιοριτόμο, μέσα από την οξυδερκή διακυβέρνηση των αντιβασιλέων Χότζο και ένα κύμα νέου, λαϊκού Βουδισμού, ως τις δύο εισβολές των Μογγόλων που αποκρούστηκαν από τον «θεϊκό άνεμο» και την κατάρρευση που ακολούθησε. Μετακινηθείτε σε έναν ενάμιση αιώνα όπου το σπαθί αντικατέστησε το πινέλο, οι σαμουράι έγιναν κυρίαρχοι της Ιαπωνίας και μια νέα πνευματική ζωή ρίζωσε σε πολεμιστές και απλούς ανθρώπους."
  },
  menuDescription: {
    en: "Japan's first shogunate, the Hōjō regents, Zen and the Mongol invasions turned back by the kamikaze.",
    el: "Το πρώτο σογκουνάτο της Ιαπωνίας, οι αντιβασιλείς Χότζο, ο Ζεν και οι μογγολικές εισβολές που απέκρουσε ο καμικάζι."
  },
  footerLabel: {
    en: "Kamakura Period · 1185–1333 AD",
    el: "Περίοδος Καμακούρα · 1185–1333 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Kamakura Period",
    el: "Η Περίοδος Καμακούρα"
  },
  theme: THEMES.slate,
  timeline: [
    {
      year: 1192,
      era: {
        en: "The Shogunate",
        el: "Το Σογκουνάτο"
      },
      events: [
        {
          title: {
            en: "Yoritomo, the first shogun",
            el: "Ο Γιοριτόμο, ο πρώτος σογκούν"
          },
          description: {
            en: "Minamoto no Yoritomo is named shogun and rules Japan from Kamakura, founding a military government apart from the court.",
            el: "Ο Μιναμότο νο Γιοριτόμο ονομάζεται σογκούν και κυβερνά την Ιαπωνία από την Καμακούρα, ιδρύοντας μια στρατιωτική κυβέρνηση χωριστά από την αυλή."
          },
          extendedDescription: {
            en: "Rather than seize the throne, Yoritomo built a parallel state, the bakufu or \"tent government,\" at his eastern base of Kamakura. The emperor reigned in Kyoto as a figurehead while real power lay with the shogun and his vassals. This dual structure — a sacred court and a governing warrior — would define Japan for nearly seven centuries.",
            el: "Αντί να αρπάξει τον θρόνο, ο Γιοριτόμο έχτισε ένα παράλληλο κράτος, το μπακούφου ή «κυβέρνηση της σκηνής», στην ανατολική του βάση, την Καμακούρα. Ο αυτοκράτορας βασίλευε στο Κιότο ως σύμβολο ενώ η πραγματική εξουσία βρισκόταν στον σογκούν και τους υποτελείς του. Αυτή η διπλή δομή — μια ιερή αυλή κι ένας κυβερνών πολεμιστής — θα όριζε την Ιαπωνία για σχεδόν επτά αιώνες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1219,
      era: {
        en: "The Hōjō Regents",
        el: "Οι Αντιβασιλείς Χότζο"
      },
      events: [
        {
          title: {
            en: "The Hōjō take control",
            el: "Οι Χότζο αναλαμβάνουν τον έλεγχο"
          },
          description: {
            en: "With the Minamoto line extinct, Yoritomo's widow and her Hōjō kin rule as regents behind the shoguns.",
            el: "Με τη γενιά των Μιναμότο εξαλειμμένη, η χήρα του Γιοριτόμο και οι συγγενείς της Χότζο κυβερνούν ως αντιβασιλείς πίσω από τους σογκούν."
          },
          extendedDescription: {
            en: "Yoritomo's sons were murdered and his dynasty failed, but his widow Hōjō Masako, the \"nun-shogun,\" kept the government alive. Her family took the post of regent to figurehead shoguns, mirroring how the Fujiwara had once ruled behind the emperors — power now standing three removes from the throne.",
            el: "Οι γιοι του Γιοριτόμο δολοφονήθηκαν και η δυναστεία του έσβησε, όμως η χήρα του Χότζο Μασάκο, η «μοναχή-σογκούν», κράτησε την κυβέρνηση ζωντανή. Η οικογένειά της πήρε το αξίωμα του αντιβασιλέα σε συμβολικούς σογκούν, καθρεφτίζοντας τον τρόπο με τον οποίο οι Φουτζιβάρα κυβερνούσαν άλλοτε πίσω από τους αυτοκράτορες — η εξουσία στεκόταν πλέον τρεις βαθμίδες μακριά από τον θρόνο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1232,
      era: {
        en: "The Warrior's Law",
        el: "Ο Νόμος του Πολεμιστή"
      },
      events: [
        {
          title: {
            en: "The Goseibai Shikimoku",
            el: "Το Γκοσεϊμπάι Σικιμόκου"
          },
          description: {
            en: "The regent Hōjō Yasutoki issues a warrior law code, plain and practical, to govern the samurai class.",
            el: "Ο αντιβασιλέας Χότζο Γιασουτόκι εκδίδει έναν πολεμικό νομικό κώδικα, απλό και πρακτικό, για τη διακυβέρνηση της τάξης των σαμουράι."
          },
          extendedDescription: {
            en: "Where the court had ruled by Chinese-style codes, the Goseibai Shikimoku set out the customs and duties of the warriors in clear terms — inheritance, land, loyalty and justice. Respected for its fairness, it became the enduring foundation of samurai law, cited for centuries after Kamakura itself had fallen.",
            el: "Ενώ η αυλή κυβερνούσε με κώδικες κινεζικού τύπου, το Γκοσεϊμπάι Σικιμόκου όριζε τα έθιμα και τα καθήκοντα των πολεμιστών με σαφείς όρους — κληρονομιά, γη, πίστη και δικαιοσύνη. Σεβαστό για τη δικαιοσύνη του, έγινε το διαχρονικό θεμέλιο του δικαίου των σαμουράι, αναφερόμενο για αιώνες αφότου είχε πέσει η ίδια η Καμακούρα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1253,
      era: {
        en: "New Buddhism",
        el: "Νέος Βουδισμός"
      },
      events: [
        {
          title: {
            en: "Zen, Pure Land and Nichiren",
            el: "Ζεν, Καθαρή Γη και Νιτσιρέν"
          },
          description: {
            en: "Bold new Buddhist movements — Zen, Pure Land and Nichiren — bring the faith to warriors and common people.",
            el: "Τολμηρά νέα βουδιστικά κινήματα — το Ζεν, η Καθαρή Γη και ο Νιτσιρέν — φέρνουν την πίστη σε πολεμιστές και απλούς ανθρώπους."
          },
          extendedDescription: {
            en: "Reformers offered simple paths to salvation: Hōnen and Shinran taught faith in Amida's saving grace, Nichiren proclaimed the Lotus Sutra as Japan's only truth, and Eisai and Dōgen brought Zen from China, its meditation and discipline suiting the warrior temper. Together they made Buddhism, for the first time, a religion of the whole people.",
            el: "Μεταρρυθμιστές πρόσφεραν απλά μονοπάτια σωτηρίας: ο Χόνεν και ο Σινράν δίδασκαν πίστη στη σωτήρια χάρη του Αμίντα, ο Νιτσιρέν διακήρυσσε το Σούτρα του Λωτού ως τη μόνη αλήθεια της Ιαπωνίας, και ο Εϊσάι και ο Ντόγκεν έφεραν το Ζεν από την Κίνα, με τον διαλογισμό και την πειθαρχία του να ταιριάζουν στην πολεμική ιδιοσυγκρασία. Μαζί έκαναν τον Βουδισμό, για πρώτη φορά, θρησκεία ολόκληρου του λαού."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1274,
      era: {
        en: "The Mongol Invasions",
        el: "Οι Μογγολικές Εισβολές"
      },
      events: [
        {
          title: {
            en: "The first Mongol invasion",
            el: "Η πρώτη μογγολική εισβολή"
          },
          description: {
            en: "Kublai Khan's fleet lands in Kyushu, but a storm wrecks the invaders and forces their retreat.",
            el: "Ο στόλος του Κουμπλάι Χαν αποβιβάζεται στο Κιούσου, όμως μια καταιγίδα καταστρέφει τους εισβολείς και τους αναγκάζει σε υποχώρηση."
          },
          extendedDescription: {
            en: "The Mongol empire, master of China, demanded Japan's submission and, refused, sent a great armada. The samurai, used to single combat, met the Mongols' massed tactics and gunpowder bombs with difficulty — but a sudden storm scattered the fleet after a single day's fighting, sparing the islands.",
            el: "Η μογγολική αυτοκρατορία, κυρίαρχος της Κίνας, απαίτησε την υποταγή της Ιαπωνίας και, μετά την άρνηση, έστειλε μια μεγάλη αρμάδα. Οι σαμουράι, συνηθισμένοι στη μονομαχία, αντιμετώπισαν με δυσκολία τη μαζική τακτική και τις πυριτιδοβόμβες των Μογγόλων — όμως μια ξαφνική καταιγίδα διασκόρπισε τον στόλο έπειτα από μία μόνο ημέρα μάχης, γλιτώνοντας τα νησιά."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1281,
      era: {
        en: "The Mongol Invasions",
        el: "Οι Μογγολικές Εισβολές"
      },
      events: [
        {
          title: {
            en: "The divine wind",
            el: "Ο θεϊκός άνεμος"
          },
          description: {
            en: "A far larger Mongol armada returns, only to be destroyed by a typhoon the Japanese hail as the kamikaze, the \"divine wind.\"",
            el: "Μια πολύ μεγαλύτερη μογγολική αρμάδα επιστρέφει, μόνο για να καταστραφεί από τυφώνα που οι Ιάπωνες υμνούν ως καμικάζι, τον «θεϊκό άνεμο»."
          },
          extendedDescription: {
            en: "Behind a defensive wall the samurai held the beaches for weeks against an enormous force. Then a typhoon struck, sinking thousands of ships and drowning much of the invading host. The deliverance convinced the Japanese that heaven itself guarded their land — a belief whose name would echo darkly in the twentieth century.",
            el: "Πίσω από ένα αμυντικό τείχος οι σαμουράι κράτησαν τις ακτές για εβδομάδες απέναντι σε τεράστια δύναμη. Έπειτα χτύπησε τυφώνας, βυθίζοντας χιλιάδες πλοία και πνίγοντας μεγάλο μέρος του εισβολικού στρατού. Η λύτρωση έπεισε τους Ιάπωνες ότι ο ίδιος ο ουρανός φρουρούσε τη γη τους — μια πεποίθηση της οποίας το όνομα θα αντηχούσε ζοφερά τον εικοστό αιώνα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1333,
      era: {
        en: "The Fall of Kamakura",
        el: "Η Πτώση της Καμακούρα"
      },
      events: [
        {
          title: {
            en: "The fall of the shogunate",
            el: "Η πτώση του σογκουνάτου"
          },
          description: {
            en: "Bankrupted by the Mongol wars, the Kamakura government falls as Emperor Go-Daigo raises a revolt.",
            el: "Χρεοκοπημένη από τους μογγολικούς πολέμους, η κυβέρνηση της Καμακούρα καταρρέει καθώς ο Αυτοκράτορας Γκο-Ντάιγκο ξεσηκώνει εξέγερση."
          },
          extendedDescription: {
            en: "Victory had brought no plunder to reward the warriors who defended Japan, and their loyalty curdled into debt and resentment. When Emperor Go-Daigo rebelled, the general Ashikaga Takauji changed sides, and Kamakura was stormed and burned. Go-Daigo's attempt to rule directly, the Kenmu Restoration, would collapse within three years into a new age of warring courts.",
            el: "Η νίκη δεν είχε φέρει λάφυρα για να ανταμείψουν τους πολεμιστές που υπερασπίστηκαν την Ιαπωνία, και η πίστη τους μετατράπηκε σε χρέος και δυσαρέσκεια. Όταν ο Αυτοκράτορας Γκο-Ντάιγκο εξεγέρθηκε, ο στρατηγός Ασικάγκα Τακαούτζι άλλαξε στρατόπεδο, και η Καμακούρα λεηλατήθηκε και κάηκε. Η προσπάθεια του Γκο-Ντάιγκο να κυβερνήσει άμεσα, η Παλινόρθωση Κένμου, θα κατέρρεε μέσα σε τρία χρόνια σε μια νέα εποχή αντιμαχόμενων αυλών."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
