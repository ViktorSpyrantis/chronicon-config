/** Classical Greece — Κλασική Ελλάδα · Greek History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const CLASSICAL_GREECE = {
  id: "classical-greece" as const,
  label: {
    en: "Classical Greece",
    el: "Κλασική Ελλάδα"
  },
  supertitle: {
    en: "Classical Greece",
    el: "Κλασική Ελλάδα"
  },
  title: {
    en: "Classical Greece",
    el: "Κλασική Ελλάδα"
  },
  subtitle: {
    en: "The golden age of Athens and birth of Western civilization",
    el: "Η χρυσή εποχή της Αθήνας και η γέννηση του δυτικού πολιτισμού"
  },
  menuDescription: {
    en: "Athens and Sparta at their height — democracy, tragedy, and a war that never seemed to end.",
    el: "Η Αθήνα κι η Σπάρτη στην ακμή τους: δημοκρατία, τραγωδία κι ένας πόλεμος που δεν έλεγε να τελειώσει."
  },
  footerLabel: {
    en: "Classical Greece · 490-323 BC",
    el: "Κλασική Ελλάδα · 490-323 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Classical Greece",
    el: "Κλασική Ελλάδα"
  },
  theme: THEMES.azure,
  timeline: [
    {
      year: -490,
      era: {
        en: "Persian Wars",
        el: "Περσικοί Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "Battle of Marathon",
            el: "Η μάχη του Μαραθώνα"
          },
          description: {
            en: "Athenian forces decisively defeat the Persian invasion force, establishing Athens as a major power and preserving Greek independence.",
            el: "Οι αθηναϊκές δυνάμεις νικούν αποφασιστικά την περσική εισβολή, καθιερώνοντας την Αθήνα ως μεγάλη δύναμη και διατηρώντας την ελληνική ανεξαρτησία."
          },
          extendedDescription: {
            en: "Sent by Darius I to punish Athens and Eretria for their support of the Ionian Revolt, the Persian expedition landed on the plain of Marathon some forty kilometres from the city. There the Athenian hoplites, joined by a small Plataean contingent and commanded in practice by Miltiades, charged across the open ground and broke a numerically superior enemy. Herodotus records roughly 6,400 Persian dead against 192 Athenian fallen, figures that modern scholars treat with caution but which encapsulate the scale of the upset. The victory shaped Athenian self-understanding for generations, was commemorated in painting and oratory, and convinced the Greeks that the Persian advance could be checked.",
            el: "Σταλμένη από τον Δαρείο Α΄ για να τιμωρήσει την Αθήνα και την Ερέτρια για την υποστήριξή τους στην Ιωνική Επανάσταση, η περσική εκστρατεία αποβιβάστηκε στην πεδιάδα του Μαραθώνα, περίπου σαράντα χιλιόμετρα από την πόλη. Εκεί οι Αθηναίοι οπλίτες, ενισχυμένοι από μικρό σώμα Πλαταιέων και υπό την ουσιαστική ηγεσία του Μιλτιάδη, εξόρμησαν διασχίζοντας το ανοιχτό πεδίο και διέλυσαν αριθμητικά υπέρτερο εχθρό. Ο Ηρόδοτος αναφέρει περίπου 6.400 Πέρσες νεκρούς έναντι 192 Αθηναίων, αριθμοί που η σύγχρονη έρευνα αντιμετωπίζει με επιφύλαξη αλλά που αποτυπώνουν την κλίμακα της ανατροπής. Η νίκη διαμόρφωσε την αθηναϊκή αυτοσυνειδησία για γενεές, εξυμνήθηκε στη ζωγραφική και τη ρητορεία και έπεισε τους Έλληνες ότι η περσική προέλαση μπορούσε να ανακοπεί."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Battle_of_Marathon_Greek_Double_Envelopment.png?width=1024",
            alt: {
              en: "Map of the Battle of Marathon (490 BC)",
              el: "Χάρτης της μάχης του Μαραθώνα (490 π.Χ.)"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: -480,
      era: {
        en: "Persian Wars",
        el: "Περσικοί Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "Battle of Thermopylae",
            el: "Η μάχη των Θερμοπυλών"
          },
          description: {
            en: "King Leonidas and 300 Spartans make a heroic last stand against the massive Persian army, buying time for Greek forces to regroup.",
            el: "Ο βασιλιάς Λεωνίδας και 300 Σπαρτιάτες κάνουν έναν ηρωικό αγώνα εναντίον του τεράστιου περσικού στρατού, δίνοντας χρόνο στις ελληνικές δυνάμεις να ανασυνταχθούν."
          },
          extendedDescription: {
            en: "At the narrow pass of Thermopylae, Leonidas commanded a Greek allied force of perhaps seven thousand, including his celebrated royal guard of three hundred Spartiates, against the immense host of Xerxes I. For two days the defenders held the defile, exploiting the terrain to neutralise Persian numbers, until the local traitor Ephialtes revealed a mountain path that allowed the Persians to outflank them. Dismissing most of the allies, Leonidas remained with his Spartans and the Thespians and Thebans to die fighting. Although tactically a defeat, the stand became a paradigm of disciplined sacrifice in defence of Greek freedom, immortalised by Simonides' epitaph and shaping Hellenic memory of the Persian Wars.",
            el: "Στο στενό πέρασμα των Θερμοπυλών, ο Λεωνίδας ηγήθηκε ελληνικού συμμαχικού σώματος περίπου επτά χιλιάδων ανδρών, μεταξύ των οποίων και η περίφημη βασιλική φρουρά των τριακοσίων Σπαρτιατών, εναντίον του τεράστιου στρατού του Ξέρξη Α΄. Επί δύο ημέρες οι αμυνόμενοι κράτησαν τη δίοδο, εκμεταλλευόμενοι το έδαφος για να εξουδετερώσουν την περσική αριθμητική υπεροχή, ώσπου ο ντόπιος προδότης Εφιάλτης αποκάλυψε ορεινό μονοπάτι που επέτρεψε στους Πέρσες να τους υπερκεράσουν. Απολύοντας τους περισσότερους συμμάχους, ο Λεωνίδας έμεινε με τους Σπαρτιάτες, τους Θεσπιείς και τους Θηβαίους και έπεσε μαχόμενος. Αν και τακτική ήττα, η αντίσταση κατέστη υπόδειγμα πειθαρχημένης θυσίας υπέρ της ελληνικής ελευθερίας, αθανατισμένο στο επίγραμμα του Σιμωνίδη και διαμορφωτικό για τη μνήμη των Περσικών Πολέμων."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Leonidas_at_Thermopylae_by_Jacques-Louis_David.jpg?width=1024",
            alt: {
              en: "Leonidas at Thermopylae, painting by Jacques-Louis David (1814)",
              el: "Ο Λεωνίδας στις Θερμοπύλες, πίνακας του Jacques-Louis David (1814)"
            },
            credit: "Jacques-Louis David, via Wikimedia Commons (public domain)"
          }
        },
        {
          title: {
            en: "Battle of Salamis",
            el: "Η μάχη της Σαλαμίνας"
          },
          description: {
            en: "Themistocles leads the Greek fleet to a decisive victory over the Persian navy, saving Athens and the Greek cause.",
            el: "Ο Θεμιστοκλής ηγείται του ελληνικού στόλου σε μια αποφασιστική νίκη εναντίον του περσικού ναυτικού, σώζοντας την Αθήνα και την ελληνική υπόθεση."
          },
          extendedDescription: {
            en: "After the evacuation of Attica and the burning of Athens, Themistocles persuaded the allies to give battle in the cramped strait between Salamis and the mainland, where the heavier and more numerous Persian ships could not deploy effectively. By a combination of guile and strategic foresight, including a deliberately misleading message to Xerxes, the Greeks lured the royal fleet into the narrows. The triremes of Athens, Aegina and the Peloponnesian states broke the Persian line and inflicted catastrophic losses while Xerxes watched from a throne on the slopes of Mount Aigaleos. Aeschylus, himself a participant, dramatised the defeat in The Persians. Salamis turned the strategic tide, compelled Xerxes to withdraw to Asia and confirmed the importance of sea power.",
            el: "Μετά την εκκένωση της Αττικής και την πυρπόληση της Αθήνας, ο Θεμιστοκλής έπεισε τους συμμάχους να δώσουν τη μάχη στο στενό μεταξύ Σαλαμίνας και ηπειρωτικής ακτής, όπου τα βαρύτερα και πολυπληθέστερα περσικά πλοία δεν μπορούσαν να αναπτυχθούν. Με συνδυασμό δολιότητας και στρατηγικής προνοητικότητας, μεταξύ άλλων με σκόπιμα παραπλανητικό μήνυμα προς τον Ξέρξη, οι Έλληνες παρέσυραν τον βασιλικό στόλο στα στενά. Οι τριήρεις της Αθήνας, της Αίγινας και των πελοποννησιακών πόλεων διέρρηξαν την περσική παράταξη και προκάλεσαν καταστροφικές απώλειες, ενώ ο Ξέρξης παρακολουθούσε από θρόνο στις πλαγιές του Αιγάλεω. Ο Αισχύλος, ο ίδιος μετέχων στη μάχη, αναπαρέστησε την ήττα στους Πέρσες. Η Σαλαμίνα μετέστρεψε τη στρατηγική ισορροπία, ανάγκασε τον Ξέρξη να αποσυρθεί στην Ασία και κατέδειξε τη σημασία της ναυτικής ισχύος."
          },
          category: "military"
        }
      ]
    },
    {
      year: -479,
      era: {
        en: "Persian Wars",
        el: "Περσικοί Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "Battle of Plataea",
            el: "Η μάχη των Πλαταιών"
          },
          description: {
            en: "Greek forces under Pausanias decisively defeat the Persian army, ending the Persian invasion and establishing Greek military supremacy.",
            el: "Ελληνικές δυνάμεις υπό τον Παυσανία νικούν αποφασιστικά τον περσικό στρατό, τερματίζοντας την περσική εισβολή και καθιερώνοντας την ελληνική στρατιωτική υπεροχή."
          },
          extendedDescription: {
            en: "Plataea was the largest hoplite engagement of the Persian Wars, fought in Boeotia between a coalition of Greek city-states under the Spartan regent Pausanias and the Persian land army left in Greece under Mardonius. After days of manoeuvring and skirmishing across the Asopos plain, a confused Greek redeployment tempted Mardonius into a general assault, which the Spartans and Tegeans on the right and the Athenians on the left repulsed in heavy fighting. Mardonius himself fell, his camp was stormed, and the surviving Persian forces fled north. Tradition pairs Plataea with the naval victory at Mycale on the same day, completing the expulsion of Persia from European Greece and clearing the way for the Greek counter-offensive in the Aegean.",
            el: "Οι Πλαταιές υπήρξαν η μεγαλύτερη οπλιτική σύγκρουση των Περσικών Πολέμων, διεξήχθη στη Βοιωτία ανάμεσα σε συνασπισμό ελληνικών πόλεων υπό τον Σπαρτιάτη αντιβασιλέα Παυσανία και στον περσικό στρατό ξηράς που είχε αφεθεί στην Ελλάδα υπό τον Μαρδόνιο. Έπειτα από ημέρες ελιγμών και αψιμαχιών στην πεδιάδα του Ασωπού, μια συγκεχυμένη ελληνική μετακίνηση παρέσυρε τον Μαρδόνιο σε γενική επίθεση, την οποία απέκρουσαν με βαριά μάχη οι Σπαρτιάτες και οι Τεγεάτες στη δεξιά πτέρυγα και οι Αθηναίοι στην αριστερή. Ο ίδιος ο Μαρδόνιος έπεσε, το στρατόπεδο του εκπορθήθηκε και οι επιζώντες Πέρσες υποχώρησαν προς βορρά. Η παράδοση συνδέει τις Πλαταιές με τη ναυτική νίκη στη Μυκάλη την ίδια ημέρα, ολοκληρώνοντας την εκδίωξη των Περσών από την ευρωπαϊκή Ελλάδα και ανοίγοντας τον δρόμο για την ελληνική αντεπίθεση στο Αιγαίο."
          },
          category: "military"
        }
      ]
    },
    {
      year: -477,
      era: {
        en: "Athenian Empire",
        el: "Αθηναϊκή Αυτοκρατορία"
      },
      events: [
        {
          title: {
            en: "Formation of the Delian League",
            el: "Η ίδρυση της Δηλιακής Συμμαχίας"
          },
          description: {
            en: "Athens forms an alliance of Greek city-states to protect against future Persian aggression, which gradually becomes the Athenian Empire.",
            el: "Η Αθήνα σχηματίζει μια συμμαχία ελληνικών πόλεων-κρατών για προστασία από μελλοντική περσική επιθετικότητα, η οποία σταδιακά γίνεται η Αθηναϊκή Αυτοκρατορία."
          },
          extendedDescription: {
            en: "When the Spartans withdrew from offensive operations in the Aegean, the Ionian and island Greeks turned to Athens for continued protection against Persia. The new league, organised under the leadership of Aristides and based at the sanctuary of Apollo on Delos, pooled ships and silver tribute under Athenian command. Member states swore solemn oaths and dropped lumps of iron into the sea to symbolise their permanence. Over the following decades, however, the relationship between Athens and her allies hardened: contributions in ships were converted into cash payments, recalcitrant members were coerced, and Athenian magistrates and garrisons supervised internal affairs, transforming a voluntary symmachy into the arche, the Athenian Empire.",
            el: "Όταν οι Σπαρτιάτες αποσύρθηκαν από τις επιθετικές επιχειρήσεις στο Αιγαίο, οι Ίωνες και οι νησιώτες Έλληνες στράφηκαν στην Αθήνα ζητώντας συνεχή προστασία από την Περσία. Η νέα συμμαχία, που οργανώθηκε υπό την ηγεσία του Αριστείδη και είχε έδρα το ιερό του Απόλλωνος στη Δήλο, συγκέντρωνε πλοία και αργυρό φόρο υπό αθηναϊκή διοίκηση. Τα κράτη-μέλη ορκίστηκαν επίσημα και έριξαν σιδερένιους όγκους στη θάλασσα ως σύμβολο αιωνιότητας του δεσμού. Στις επόμενες δεκαετίες, ωστόσο, η σχέση Αθήνας και συμμάχων σκλήρυνε: οι εισφορές σε πλοία μετατράπηκαν σε χρηματικές, τα απείθαρχα μέλη υποτάχθηκαν με τη βία, ενώ Αθηναίοι άρχοντες και φρουρές επόπτευαν τις εσωτερικές υποθέσεις, μετατρέποντας μια εκούσια συμμαχία στην αρχή, την Αθηναϊκή Αυτοκρατορία."
          },
          category: "political"
        }
      ]
    },
    {
      year: -471,
      era: {
        en: "Athenian Politics",
        el: "Αθηναϊκή Πολιτική"
      },
      events: [
        {
          title: {
            en: "Ostracism of Themistocles",
            el: "Ο εξοστρακισμός του Θεμιστοκλή"
          },
          description: {
            en: "The architect of the victory at Salamis is ostracised from Athens, ending the political ascendancy of the Persian-war generation and clearing the way for Cimon.",
            el: "Ο αρχιτέκτονας της νίκης της Σαλαμίνας εξοστρακίζεται από την Αθήνα, τερματίζοντας την πολιτική επιρροή της γενιάς των περσικών πολέμων και ανοίγοντας τον δρόμο στον Κίμωνα."
          },
          extendedDescription: {
            en: "Suspicions had built against Themistocles for years: his fortification of the Piraeus had alarmed Sparta, his haughty manner had alienated colleagues, and his foreign-policy instincts pointed away from the cordial relations with Sparta favoured by Cimon's faction. The assembly voted his removal under the procedure of ostracism, an honourable banishment of ten years that left property and citizenship intact. He withdrew first to Argos, but a Spartan-instigated charge of medism — collusion with Persia in the abortive plot of Pausanias — drove him into outright flight. After dramatic adventures recounted by Thucydides he reached the court of Artaxerxes I, who installed him as governor of Magnesia on the Maeander, where he died about 459. The man who had saved Greece from Xerxes ended his career as a pensioner of the Persian king, an irony not lost on his contemporaries.",
            el: "Οι υποψίες κατά του Θεμιστοκλή είχαν συσσωρευτεί επί χρόνια: η οχύρωση του Πειραιά είχε ανησυχήσει τη Σπάρτη, η αλαζονική του συμπεριφορά είχε αποξενώσει συναδέλφους και ο εξωτερικοπολιτικός του προσανατολισμός απομακρυνόταν από τις εγκάρδιες σχέσεις με τη Σπάρτη που ευνοούσε η παράταξη του Κίμωνα. Η εκκλησία του δήμου ψήφισε την απομάκρυνσή του διά της διαδικασίας του εξοστρακισμού, έντιμης δεκαετούς εξορίας η οποία άφηνε ανέπαφες περιουσία και πολιτεία. Αποσύρθηκε πρώτα στο Άργος, αλλά κατηγορία μηδισμού υποκινούμενη από τη Σπάρτη — συνεργασίας με την Περσία στην αποτυχημένη συνωμοσία του Παυσανία — τον ανάγκασε σε φυγή. Έπειτα από τις δραματικές περιπέτειες που εξιστορεί ο Θουκυδίδης, έφθασε στην αυλή του Αρταξέρξη Α΄, ο οποίος τον εγκατέστησε ως αρμοστή της Μαγνησίας του Μαιάνδρου, όπου απέθανε περί το 459. Ο άνθρωπος που είχε σώσει την Ελλάδα από τον Ξέρξη τελείωσε τον βίο του ως μισθοδότης του Πέρση βασιλέως, ειρωνεία που δεν διέφυγε των συγχρόνων του."
          },
          category: "political"
        }
      ]
    },
    {
      year: -466,
      era: {
        en: "Athenian Expansion",
        el: "Αθηναϊκή Επέκταση"
      },
      events: [
        {
          title: {
            en: "Battle of Eurymedon",
            el: "Η μάχη του Ευρυμέδοντα"
          },
          description: {
            en: "Athenian commander Cimon defeats the Persian fleet and army at the Battle of Eurymedon, securing Athenian naval dominance.",
            el: "Ο αθηναϊκός στρατηγός Κίμων νικά τον περσικό στόλο και στρατό στη μάχη του Ευρυμέδοντα, εξασφαλίζοντας την αθηναϊκή ναυτική κυριαρχία."
          },
          extendedDescription: {
            en: "Cimon, son of Miltiades, led a combined Delian fleet to the mouth of the river Eurymedon in Pamphylia, where the Persians were assembling a new fleet and army for operations in the eastern Mediterranean. In a single day he defeated the Persian ships at sea and then landed his hoplites to rout the encamped land force, capturing or destroying perhaps two hundred triremes. The double victory effectively cleared the south coast of Asia Minor of Persian power and pushed the frontier of the Achaemenid empire deep inland. It also entrenched Cimon's prestige at home and confirmed the strategic logic of the Delian League, even as it raised the question of what purpose the alliance still served.",
            el: "Ο Κίμων, υιός του Μιλτιάδη, οδήγησε συνδυασμένο δηλιακό στόλο στις εκβολές του ποταμού Ευρυμέδοντα στην Παμφυλία, όπου οι Πέρσες συγκέντρωναν νέο στόλο και στρατό για επιχειρήσεις στην ανατολική Μεσόγειο. Σε μία ημέρα νίκησε τα περσικά πλοία στη θάλασσα και κατόπιν αποβίβασε τους οπλίτες του, διαλύοντας το χερσαίο σώμα στο στρατόπεδό του και αιχμαλωτίζοντας ή καταστρέφοντας περίπου διακόσιες τριήρεις. Η διπλή νίκη απάλλαξε ουσιαστικά τις νότιες ακτές της Μικράς Ασίας από την περσική παρουσία και ώθησε τα σύνορα της αχαιμενιδικής αυτοκρατορίας βαθιά στο εσωτερικό. Παγίωσε επίσης το κύρος του Κίμωνα στην πατρίδα και επιβεβαίωσε τη στρατηγική λογική της Δηλιακής Συμμαχίας, αν και άφηνε ανοιχτό το ερώτημα τι σκοπό εξακολουθούσε να εξυπηρετεί η συμμαχία."
          },
          category: "military"
        }
      ]
    },
    {
      year: -464,
      era: {
        en: "Spartan Crisis",
        el: "Σπαρτιατική Κρίση"
      },
      events: [
        {
          title: {
            en: "Spartan Earthquake",
            el: "Ο σπαρτιατικός σεισμός"
          },
          description: {
            en: "A massive earthquake devastates Sparta, killing thousands and triggering a helot revolt that threatens Spartan survival.",
            el: "Ένας τεράστιος σεισμός καταστρέφει τη Σπάρτη, σκοτώνοντας χιλιάδες και προκαλώντας μια εξέγερση ειλώτων που απειλεί την επιβίωση της Σπάρτης."
          },
          extendedDescription: {
            en: "Ancient sources, especially Thucydides and Plutarch, describe a catastrophic earthquake that levelled much of Sparta and killed a substantial portion of its citizen body. The Messenian and Laconian helots seized the moment to rise in revolt, fortifying themselves on Mount Ithome and tying down Spartan forces for years. Sparta's call for outside aid produced a famous diplomatic rupture: the Athenian contingent under Cimon was sent home in suspicion, contributing to Cimon's ostracism and to the cooling of relations between the two leading cities. The crisis exposed the demographic fragility of the Spartan state and the chronic insecurity created by its dependence on a subjugated helot population.",
            el: "Οι αρχαίες πηγές, ιδίως ο Θουκυδίδης και ο Πλούταρχος, περιγράφουν καταστροφικό σεισμό που ισοπέδωσε μεγάλο μέρος της Σπάρτης και αφάνισε σημαντικό τμήμα του πολιτικού σώματος. Οι Μεσσήνιοι και οι Λάκωνες είλωτες εκμεταλλεύτηκαν την ευκαιρία και ξεσηκώθηκαν, οχυρωμένοι στην Ιθώμη, καθηλώνοντας τις σπαρτιατικές δυνάμεις επί έτη. Η σπαρτιατική έκκληση για εξωτερική βοήθεια προκάλεσε διάσημη διπλωματική ρήξη: το αθηναϊκό σώμα υπό τον Κίμωνα απομακρύνθηκε με δυσπιστία, γεγονός που συντέλεσε στον εξοστρακισμό του και στην ψύχρανση των σχέσεων ανάμεσα στις δύο ηγέτιδες πόλεις. Η κρίση αποκάλυψε τη δημογραφική ευθραυστότητα της σπαρτιατικής πολιτείας και τη χρόνια ανασφάλεια που προκαλούσε η εξάρτησή της από έναν υποδουλωμένο πληθυσμό ειλώτων."
          },
          category: "other"
        }
      ]
    },
    {
      year: -462,
      era: {
        en: "Spartan Crisis",
        el: "Σπαρτιατική Κρίση"
      },
      events: [
        {
          title: {
            en: "Battle of Tanagra",
            el: "Η μάχη της Τανάγρας"
          },
          description: {
            en: "Athens and Sparta clash at the Battle of Tanagra, with Sparta victorious but unable to exploit their advantage.",
            el: "Αθήνα και Σπάρτη συγκρούονται στη μάχη της Τανάγρας, με τη Σπάρτη να νικά αλλά αδύναμη να εκμεταλλευτεί το πλεονέκτημά της."
          },
          extendedDescription: {
            en: "Returning home from operations in central Greece, a Spartan-led Peloponnesian army was confronted in Boeotia by an Athenian force seeking to block its passage. The hard-fought battle near Tanagra ended in a Spartan tactical victory, but the casualties on both sides were severe and the Spartans withdrew without subjugating Attica. Within two months the Athenians, under Myronides, returned to Boeotia and won the battle of Oenophyta, which gave them control of most of the region for a decade. Tanagra is significant less for its result than for its illustration of how directly Athens and Sparta were now competing for influence in central Greece, a foretaste of the long struggle to come.",
            el: "Καθώς επέστρεφε από επιχειρήσεις στην κεντρική Ελλάδα, σπαρτιατικής ηγεσίας πελοποννησιακός στρατός συνάντησε στη Βοιωτία αθηναϊκή δύναμη που ζητούσε να του φράξει το πέρασμα. Η σκληρή μάχη κοντά στην Τανάγρα έληξε με τακτική σπαρτιατική νίκη, αλλά οι απώλειες και των δύο πλευρών ήταν βαρύτατες και οι Σπαρτιάτες αποσύρθηκαν χωρίς να υποτάξουν την Αττική. Δύο μήνες αργότερα οι Αθηναίοι, υπό τον Μυρωνίδη, επέστρεψαν στη Βοιωτία και νίκησαν στα Οινόφυτα, αποκτώντας τον έλεγχο μεγάλου μέρους της περιοχής για μια δεκαετία. Η Τανάγρα έχει σημασία λιγότερο για το αποτέλεσμά της και περισσότερο γιατί δείχνει με πόση αμεσότητα Αθήνα και Σπάρτη ανταγωνίζονταν πλέον για επιρροή στην κεντρική Ελλάδα, πρόδρομος του μεγάλου αγώνα που επρόκειτο να ακολουθήσει."
          },
          category: "military"
        }
      ]
    },
    {
      year: -461,
      era: {
        en: "Age of Pericles",
        el: "Εποχή του Περικλή"
      },
      events: [
        {
          title: {
            en: "Pericles becomes dominant statesman",
            el: "Ο Περικλής γίνεται κυρίαρχος πολιτικός"
          },
          description: {
            en: "Pericles begins his long period of influence over Athenian politics, ushering in the golden age of Athenian democracy and culture.",
            el: "Ο Περικλής αρχίζει τη μακρά περίοδο επιρροής του στην αθηναϊκή πολιτική, εισάγοντας τη χρυσή εποχή της αθηναϊκής δημοκρατίας και πολιτισμού."
          },
          extendedDescription: {
            en: "Following the ostracism of his rival Cimon and the reforms of Ephialtes, which stripped the aristocratic Areopagus of most of its political functions, Pericles emerged as the leading voice in the Athenian assembly and was repeatedly elected strategos. He championed the introduction of pay for jurors and other public officials, opening political life to poorer citizens, and directed the surplus of imperial tribute to the great building programme on the Acropolis. Although ancient critics, notably Thucydides and the comic poets, accused him of monarchical influence, Pericles operated through persuasion in a sovereign assembly. His ascendancy, lasting until his death in 429, defines the cultural and political peak of fifth-century Athens.",
            el: "Μετά τον εξοστρακισμό του αντιπάλου του Κίμωνα και τις μεταρρυθμίσεις του Εφιάλτη, οι οποίες αφαίρεσαν από τον αριστοκρατικό Άρειο Πάγο τις περισσότερες πολιτικές αρμοδιότητες, ο Περικλής αναδείχθηκε σε ηγετική φωνή της αθηναϊκής εκκλησίας του δήμου και εκλεγόταν επανειλημμένως στρατηγός. Υποστήριξε τη μισθοδοσία των δικαστών και άλλων δημοσίων λειτουργών, ανοίγοντας τον πολιτικό βίο στους πτωχότερους πολίτες, και διοχέτευσε το πλεόνασμα του αυτοκρατορικού φόρου στο μεγάλο οικοδομικό πρόγραμμα της Ακρόπολης. Αν και αρχαίοι επικριτές, ιδίως ο Θουκυδίδης και οι κωμικοί ποιητές, του προσήψαν μοναρχικές τάσεις, ο Περικλής ενεργούσε διά της πειθούς εντός κυρίαρχης συνέλευσης. Η υπεροχή του, που διήρκεσε ως τον θάνατό του το 429, σηματοδοτεί την πολιτιστική και πολιτική κορύφωση της Αθήνας του πέμπτου αιώνα."
          },
          category: "political"
        }
      ]
    },
    {
      year: -460,
      era: {
        en: "First Peloponnesian War",
        el: "Πρώτος Πελοποννησιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "First Peloponnesian War begins",
            el: "Η αρχή του Πρώτου Πελοποννησιακού Πολέμου"
          },
          description: {
            en: "War breaks out between Athens and allies against Sparta and the Peloponnesian League, beginning 15 years of intermittent conflict.",
            el: "Ξεσπά πόλεμος μεταξύ Αθήνας και συμμάχων ενάντια στη Σπάρτη και την Πελοποννησιακή Συμμαχία, αρχίζοντας 15 χρόνια διακεκομμένων συγκρούσεων."
          },
          extendedDescription: {
            en: "The conflict that modern historians call the First Peloponnesian War grew out of the rapid expansion of Athenian power after the Persian Wars and the realignment of cities such as Megara, Argos and the Thessalians toward Athens. Fighting was sporadic and geographically dispersed, ranging across the Saronic Gulf, Boeotia, Megarid, Aegina and as far afield as Egypt, where an Athenian expedition in support of Inaros ended disastrously. The war demonstrated the limits of Athenian land power and the resilience of the Peloponnesian League, but also the difficulty of Sparta projecting force across central Greece. It ended inconclusively with the Thirty Years' Peace of 446/5, which set the framework for the truce uneasily kept until 431.",
            el: "Η σύγκρουση που η σύγχρονη ιστοριογραφία ονομάζει Πρώτο Πελοποννησιακό Πόλεμο προήλθε από την ταχεία επέκταση της αθηναϊκής ισχύος μετά τους Περσικούς Πολέμους και από την προσέγγιση πόλεων όπως τα Μέγαρα, το Άργος και οι Θεσσαλοί προς την Αθήνα. Οι εχθροπραξίες ήταν αποσπασματικές και γεωγραφικά διασκορπισμένες, εκτυλίχθηκαν στον Σαρωνικό, στη Βοιωτία, στη Μεγαρίδα, στην Αίγινα, ακόμη και ως την Αίγυπτο, όπου αθηναϊκή εκστρατεία υπέρ του Ινάρω κατέληξε καταστροφικά. Ο πόλεμος ανέδειξε τα όρια της αθηναϊκής χερσαίας ισχύος και την ανθεκτικότητα της Πελοποννησιακής Συμμαχίας, αλλά και τη δυσκολία της Σπάρτης να προβάλει δύναμη στην κεντρική Ελλάδα. Έληξε αναποφάσιστα με την Τριακονταετή Ειρήνη του 446/5, που έθεσε το πλαίσιο της εκεχειρίας έως το 431."
          },
          category: "military"
        }
      ]
    },
    {
      year: -458,
      era: {
        en: "Cultural Achievement",
        el: "Πολιτιστικό Επίτευγμα"
      },
      events: [
        {
          title: {
            en: "Aeschylus' Oresteia trilogy",
            el: "Η Ορέστεια του Αισχύλου"
          },
          description: {
            en: "Aeschylus stages his masterpiece trilogy, the pinnacle of Greek tragedy, exploring themes of justice and divine law.",
            el: "Ο Αισχύλος ανεβάζει το αριστούργημά του, την τριλογία που αποτελεί την κορυφή της ελληνικής τραγωδίας, εξερευνώντας θέματα δικαιοσύνης και θεϊκού νόμου."
          },
          extendedDescription: {
            en: "Performed at the City Dionysia and victorious in the dramatic competition, the Oresteia is the only surviving complete trilogy of Greek tragedy. Across Agamemnon, the Libation Bearers and the Eumenides, Aeschylus traces the curse of the house of Atreus from the king's homecoming and murder by Clytemnestra, through the matricide committed by Orestes, to his trial on the Areopagus, where Athena establishes a court of citizens and the Furies are reconciled as the Eumenides, the Kindly Ones. The trilogy mirrors contemporary Athenian debates about the recently reformed Areopagus and the proper relation between blood vengeance and civic justice, transforming archaic religious anxieties into a foundational myth of the polis.",
            el: "Παραστάθηκε στα Μεγάλα Διονύσια και νίκησε στον δραματικό αγώνα, η Ορέστεια είναι η μόνη σωζόμενη ολόκληρη τριλογία της αρχαίας τραγωδίας. Στον Αγαμέμνονα, στις Χοηφόρες και στις Ευμενίδες ο Αισχύλος ιχνηλατεί την κατάρα του οίκου των Ατρειδών από τον νόστο και τη δολοφονία του βασιλιά από την Κλυταιμνήστρα, στη μητροκτονία του Ορέστη, ως τη δίκη του στον Άρειο Πάγο, όπου η Αθηνά συνιστά δικαστήριο πολιτών και οι Ερινύες συμφιλιώνονται ως Ευμενίδες. Η τριλογία αντικατοπτρίζει τις σύγχρονες αθηναϊκές διαμάχες για τον πρόσφατα μεταρρυθμισμένο Άρειο Πάγο και τη σωστή σχέση μεταξύ φονικής εκδίκησης και πολιτικής δικαιοσύνης, μεταπλάθοντας αρχαϊκές θρησκευτικές αγωνίες σε ιδρυτικό μύθο της πόλεως."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -454,
      era: {
        en: "Athenian Empire",
        el: "Αθηναϊκή Αυτοκρατορία"
      },
      events: [
        {
          title: {
            en: "Treasury moved to Athens",
            el: "Μεταφορά του ταμείου στην Αθήνα"
          },
          description: {
            en: "The Delian League treasury is moved from Delos to Athens, marking the transformation from alliance to empire.",
            el: "Το ταμείο της Δηλιακής Συμμαχίας μεταφέρεται από τη Δήλο στην Αθήνα, σηματοδοτώντας τον μετασχηματισμό από συμμαχία σε αυτοκρατορία."
          },
          extendedDescription: {
            en: "The transfer of the league treasury from the sanctuary of Apollo on Delos to the Athenian Acropolis was justified by the threat posed by Persia and the supposed insecurity of the island after the disastrous Egyptian campaign. In practice it placed the accumulated tribute of the allies under direct Athenian control and made it a fund of Athenian public finance. From this point forward sixty drachmas in the talent of allied tribute was set aside as aparche for Athena, and the inscribed tribute lists allow modern historians to trace the economic shape of the empire. The decision marks one of the clearest steps from voluntary symmachy to imperial rule, and it would later furnish the resources for the Periclean building programme.",
            el: "Η μεταφορά του ταμείου της συμμαχίας από το ιερό του Απόλλωνος στη Δήλο στην αθηναϊκή Ακρόπολη δικαιολογήθηκε με την περσική απειλή και τη φερόμενη ανασφάλεια του νησιού μετά την καταστροφική αιγυπτιακή εκστρατεία. Στην πράξη έθεσε τον συσσωρευμένο φόρο των συμμάχων υπό τον άμεσο αθηναϊκό έλεγχο και τον μετέτρεψε σε πόρο των δημοσίων οικονομικών της πόλεως. Έκτοτε εξήντα δραχμές ανά τάλαντο φόρου παρακρατούνταν ως απαρχή για την Αθηνά, και οι σωζόμενες επιγραφικές λίστες φόρων επιτρέπουν στη σύγχρονη έρευνα να ανασυστήσει την οικονομική φυσιογνωμία της αυτοκρατορίας. Η απόφαση σηματοδοτεί ένα από τα σαφέστερα βήματα από την εκούσια συμμαχία στην αυτοκρατορική κυριαρχία και θα προσέφερε αργότερα τους πόρους για το οικοδομικό πρόγραμμα του Περικλή."
          },
          category: "political"
        }
      ]
    },
    {
      year: -451,
      era: {
        en: "Peace Attempts",
        el: "Προσπάθειες Ειρήνης"
      },
      events: [
        {
          title: {
            en: "Five Years' Truce",
            el: "Πενταετής Εκεχειρία"
          },
          description: {
            en: "Athens and Sparta agree to a five-year truce, temporarily halting the First Peloponnesian War.",
            el: "Αθήνα και Σπάρτη συμφωνούν σε μια πενταετή εκεχειρία, παγώνοντας προσωρινά τον Πρώτο Πελοποννησιακό Πόλεμο."
          },
          extendedDescription: {
            en: "Negotiated under the influence of the recently restored Cimon, the Five Years' Truce suspended hostilities between Athens and the Peloponnesian states without resolving the underlying issues. The pause allowed Cimon to revive the offensive against Persia, leading a fleet to Cyprus where he died, and gave Pericles the breathing space to consolidate Athenian institutions and finances at home. By stepping back from confrontation in Greece, Athens implicitly accepted that its land empire on the mainland was overextended, while Sparta tacitly recognised that Athens could not be quickly broken at sea. The truce foreshadowed the more durable Thirty Years' Peace of 446/5, but it also revealed the persistence of mutual suspicion that would erupt again a generation later.",
            el: "Διαπραγματευμένη υπό την επιρροή του πρόσφατα αποκαταστημένου Κίμωνα, η Πενταετής Εκεχειρία ανέστειλε τις εχθροπραξίες μεταξύ Αθήνας και πελοποννησιακών πόλεων χωρίς να επιλύσει τις βαθύτερες αιτίες της σύγκρουσης. Η παύση επέτρεψε στον Κίμωνα να ανανεώσει την επίθεση κατά της Περσίας, οδηγώντας στόλο στην Κύπρο όπου και πέθανε, και έδωσε στον Περικλή τον αναγκαίο χρόνο να εδραιώσει τους αθηναϊκούς θεσμούς και τα οικονομικά. Αποσυρόμενη από τη σύγκρουση στην Ελλάδα, η Αθήνα αναγνώριζε σιωπηρώς ότι η χερσαία αρχή της είχε υπερεκταθεί, ενώ η Σπάρτη παραδεχόταν ότι η Αθήνα δεν μπορούσε να καμφθεί γρήγορα στη θάλασσα. Η εκεχειρία προμηνύει την πιο διαρκή Τριακονταετή Ειρήνη του 446/5, αλλά αποκαλύπτει και την επιμένουσα αμοιβαία δυσπιστία που θα ξεσπούσε πάλι μια γενεά αργότερα."
          },
          category: "political"
        }
      ]
    },
    {
      year: -447,
      era: {
        en: "Cultural Achievement",
        el: "Πολιτιστικό Επίτευγμα"
      },
      events: [
        {
          title: {
            en: "Construction of the Parthenon begins",
            el: "Η κατασκευή του Παρθενώνα αρχίζει"
          },
          description: {
            en: "Under Pericles' direction, construction begins on the Parthenon temple on the Acropolis, the ultimate expression of Classical Greek architecture.",
            el: "Υπό την καθοδήγηση του Περικλή, αρχίζει η κατασκευή του ναού του Παρθενώνα στην Ακρόπολη, την απόλυτη έκφραση της κλασικής ελληνικής αρχιτεκτονικής."
          },
          extendedDescription: {
            en: "The Parthenon was the centrepiece of an extensive building programme funded in large part by the tribute of the empire and supervised by the sculptor Pheidias under the political patronage of Pericles. The architects Iktinos and Kallikrates designed a Doric temple of unusual scale and refinement, incorporating subtle optical corrections such as the curvature of the stylobate and the entasis of the columns. Within stood Pheidias' colossal chryselephantine statue of Athena Parthenos, while the metopes, frieze and pediments depicted mythological battles and the great procession of the Panathenaia. Critics in the Athenian assembly objected that imperial money was being spent to dress the city as a courtesan; their complaints were overruled, and the temple became the enduring image of Classical Greece.",
            el: "Ο Παρθενώνας υπήρξε το επίκεντρο εκτεταμένου οικοδομικού προγράμματος που χρηματοδοτήθηκε σε μεγάλο βαθμό από τον φόρο της αυτοκρατορίας και επιβλεπόταν από τον γλύπτη Φειδία υπό την πολιτική προστασία του Περικλή. Οι αρχιτέκτονες Ικτίνος και Καλλικράτης σχεδίασαν δωρικό ναό ασυνήθους μεγέθους και λεπτότητας, ενσωματώνοντας λεπτές οπτικές διορθώσεις όπως την κύρτωση του στυλοβάτη και την ένταση των κιόνων. Στο εσωτερικό υψωνόταν το κολοσσιαίο χρυσελεφάντινο άγαλμα της Αθηνάς Παρθένου του Φειδία, ενώ οι μετόπες, η ζωφόρος και τα αετώματα παρίσταναν μυθικές μάχες και τη μεγάλη πομπή των Παναθηναίων. Επικριτές στην εκκλησία του δήμου διαμαρτυρήθηκαν ότι οι αυτοκρατορικοί πόροι δαπανώνται για να στολιστεί η πόλη σαν εταίρα, αλλά οι αντιρρήσεις απορρίφθηκαν και ο ναός κατέστη η διαρκής εικόνα της Κλασικής Ελλάδος."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -431,
      era: {
        en: "Peloponnesian War",
        el: "Πελοποννησιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Outbreak of the Peloponnesian War",
            el: "Η έναρξη του Πελοποννησιακού Πολέμου"
          },
          description: {
            en: "War breaks out between Athens and its empire against Sparta and the Peloponnesian League, beginning a 27-year conflict that will reshape Greece.",
            el: "Ξεσπά πόλεμος μεταξύ Αθήνας και της αυτοκρατορίας της εναντίον της Σπάρτης και της Πελοποννησιακής Συμμαχίας, αρχίζοντας μια 27ετή σύγκρουση που θα αναδιαμορφώσει την Ελλάδα."
          },
          extendedDescription: {
            en: "Thucydides identified the truest cause of the war as the growth of Athenian power and the fear it provoked in Sparta, although the immediate flashpoints were disputes over Corcyra, Potidaea and the Megarian Decree. Pericles devised a strategy of avoiding land battle in Attica, withdrawing the rural population behind the Long Walls, and using the fleet to harass the Peloponnesian coast. The first invasion under King Archidamus duly devastated the Attic countryside without provoking the Athenians to come out and fight. The opening campaign set the pattern of asymmetric warfare between a maritime empire and a hoplite confederacy that would consume Greece for a generation.",
            el: "Ο Θουκυδίδης χαρακτήρισε ως αληθεστάτη πρόφαση την αύξηση της αθηναϊκής ισχύος και τον φόβο που προκάλεσε στη Σπάρτη, αν και τα άμεσα αίτια ήταν οι διαφορές για την Κέρκυρα, την Ποτίδαια και το Μεγαρικό Ψήφισμα. Ο Περικλής διαμόρφωσε στρατηγική αποφυγής της χερσαίας μάχης στην Αττική, αποσύροντας τον αγροτικό πληθυσμό πίσω από τα Μακρά Τείχη και χρησιμοποιώντας τον στόλο για να παρενοχλεί τις πελοποννησιακές ακτές. Η πρώτη εισβολή υπό τον βασιλιά Αρχίδαμο ερήμωσε όντως την αττική ύπαιθρο χωρίς να παρασύρει τους Αθηναίους σε αναμέτρηση. Η εναρκτήρια εκστρατεία καθόρισε το πρότυπο ασύμμετρου πολέμου μεταξύ ναυτικής αυτοκρατορίας και οπλιτικής συνομοσπονδίας που θα κατέτρωγε την Ελλάδα για μια ολόκληρη γενεά."
          },
          category: "military"
        }
      ]
    },
    {
      year: -430,
      era: {
        en: "Peloponnesian War",
        el: "Πελοποννησιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Plague in Athens",
            el: "Η πανώλη στην Αθήνα"
          },
          description: {
            en: "A devastating plague strikes Athens, killing up to a third of the population including Pericles' sons and weakening the city.",
            el: "Μια καταστροφική πανώλη χτυπά την Αθήνα, σκοτώνοντας έως και το ένα τρίτο του πληθυσμού, συμπεριλαμβανομένων των γιων του Περικλή, και αποδυναμώνοντας την πόλη."
          },
          extendedDescription: {
            en: "The epidemic, possibly typhus or a haemorrhagic fever and described unforgettably by Thucydides, who survived it himself, struck a city packed with refugees who had abandoned the countryside on Pericles' advice. Mortality was catastrophic, with conservative estimates placing losses at a quarter to a third of the population, including the strategos Pericles, his sister and his two legitimate sons. Beyond the demographic blow, the plague corroded social and religious order: customary funerals collapsed, oaths lost their force, and many turned to lawlessness in the conviction that life was short. Athenian manpower never fully recovered, weakening the city for the long war ahead and demonstrating how quickly fortune could turn even at the height of empire.",
            el: "Η επιδημία, πιθανώς τύφος ή αιμορραγικός πυρετός και περιγραμμένη αξέχαστα από τον Θουκυδίδη, ο οποίος και ο ίδιος ασθένησε, χτύπησε πόλη υπερπλήρη από πρόσφυγες που είχαν εγκαταλείψει την ύπαιθρο κατ' υπόδειξη του Περικλή. Η θνησιμότητα ήταν καταστροφική, με συντηρητικές εκτιμήσεις να τοποθετούν τις απώλειες στο ένα τέταρτο έως ένα τρίτο του πληθυσμού, μεταξύ των οποίων ο στρατηγός Περικλής, η αδελφή και οι δύο γνήσιοι υιοί του. Πέραν του δημογραφικού πλήγματος, η πανώλη διέβρωσε την κοινωνική και θρησκευτική τάξη: οι έθιμες ταφές κατέρρευσαν, οι όρκοι έχασαν την ισχύ τους, και πολλοί παραδόθηκαν στην ανομία πιστεύοντας πως η ζωή ήταν βραχεία. Το αθηναϊκό ανθρώπινο δυναμικό δεν συνήλθε ποτέ πλήρως, αποδυναμώνοντας την πόλη για τον μακρύ πόλεμο και αποδεικνύοντας πόσο γρήγορα μπορούσε να μεταστραφεί η τύχη ακόμη και στο απόγειο της αυτοκρατορίας."
          },
          category: "other"
        }
      ]
    },
    {
      year: -429,
      era: {
        en: "Peloponnesian War",
        el: "Πελοποννησιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Death of Pericles",
            el: "Ο θάνατος του Περικλή"
          },
          description: {
            en: "Pericles dies of plague, removing Athens' greatest statesman during the critical early years of the Peloponnesian War.",
            el: "Ο Περικλής πεθαίνει από πανώλη, αφαιρώντας τον μεγαλύτερο πολιτικό της Αθήνας κατά τα κρίσιμα πρώτα χρόνια του Πελοποννησιακού Πολέμου."
          },
          extendedDescription: {
            en: "Already weakened by grief, having lost his sister and his sons Xanthippos and Paralos to the epidemic, Pericles himself succumbed to a lingering form of the disease in the autumn of 429. Briefly suspended from office and fined the previous year by an angry assembly, he had been recalled to lead the city through the crisis, and the demos voted to legitimise his surviving son by Aspasia. With his death the steady hand that had guided Athenian strategy for thirty years was gone, and Thucydides remarks that his successors competed for popular favour rather than directing it. The way was opened for the more volatile leadership of Cleon, Nicias and ultimately Alcibiades, with consequences that would prove ruinous.",
            el: "Ήδη εξασθενημένος από τη θλίψη, έχοντας χάσει την αδελφή και τους υιούς του Ξάνθιππο και Πάραλο από την επιδημία, ο ίδιος ο Περικλής υπέκυψε σε μακροχρόνια μορφή της νόσου το φθινόπωρο του 429. Έχοντας προσωρινά καθαιρεθεί και χρηματικώς ζημιωθεί τον προηγούμενο χρόνο από οργισμένη εκκλησία του δήμου, είχε ανακληθεί για να ηγηθεί της πόλης μέσα στην κρίση, και ο δήμος ψήφισε να νομιμοποιήσει τον επιζώντα υιό του από την Ασπασία. Με τον θάνατό του χανόταν το σταθερό χέρι που είχε καθοδηγήσει την αθηναϊκή στρατηγική επί τριάντα έτη, και ο Θουκυδίδης παρατηρεί ότι οι διάδοχοί του ανταγωνίζονταν την εύνοια του πλήθους αντί να την κατευθύνουν. Άνοιξε ο δρόμος για την πιο ευμετάβλητη ηγεσία του Κλέωνα, του Νικία και τελικά του Αλκιβιάδη, με ολέθριες συνέπειες."
          },
          category: "other",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Pericles_Pio-Clementino_Inv269_n2.jpg?width=1024",
            alt: {
              en: "Bust of Pericles, Roman copy after a Greek original by Kresilas",
              el: "Προτομή του Περικλή, ρωμαϊκό αντίγραφο ελληνικού πρωτοτύπου του Κρησίλα"
            },
            credit: "Vatican Museums, via Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: -425,
      era: {
        en: "Peloponnesian War",
        el: "Πελοποννησιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Battle of Pylos",
            el: "Η μάχη της Πύλου"
          },
          description: {
            en: "Demosthenes leads Athenian forces to victory at Pylos, capturing Spartan hoplites on the island of Sphacteria.",
            el: "Ο Δημοσθένης ηγείται των αθηναϊκών δυνάμεων σε νίκη στην Πύλο, συλλαμβάνοντας σπαρτιατικούς οπλίτες στο νησί της Σφακτηρίας."
          },
          extendedDescription: {
            en: "Seizing the headland of Pylos in Messenian territory, Demosthenes fortified an Athenian foothold deep within the Spartan zone of control and used it to encourage helot desertion. When the Spartans landed a force on the offshore island of Sphacteria, an Athenian blockade trapped them, and the politician Cleon, against his apparent expectations, sailed out to share the command. The combined operation captured roughly 120 Spartiates alive, an outcome unprecedented in Greek warfare and one that shocked the Hellenic world, since Spartans were expected to die rather than surrender. The hostages gave Athens powerful leverage in negotiations, encouraged Sparta to seek peace, and confirmed the rise of populist commanders like Cleon over the older aristocratic elite.",
            el: "Καταλαμβάνοντας το ακρωτήριο της Πύλου σε μεσσηνιακό έδαφος, ο Δημοσθένης οχύρωσε αθηναϊκό προγεφύρωμα εντός της σπαρτιατικής σφαίρας ελέγχου και το χρησιμοποίησε για να ενθαρρύνει τη λιποταξία ειλώτων. Όταν οι Σπαρτιάτες αποβίβασαν δύναμη στη νήσο Σφακτηρία, αθηναϊκός αποκλεισμός τους εγκλώβισε, ενώ ο πολιτικός Κλέων, παρά τις φαινομενικές προσδοκίες του, εξέπλευσε για να μοιραστεί τη διοίκηση. Η συνδυασμένη επιχείρηση αιχμαλώτισε περίπου 120 Σπαρτιάτες ζωντανούς, αποτέλεσμα άνευ προηγουμένου στον ελληνικό πόλεμο, που συντάραξε τον ελληνικό κόσμο, καθώς οι Σπαρτιάτες θεωρούνταν ικανοί μάλλον να πέσουν παρά να παραδοθούν. Οι όμηροι έδωσαν στην Αθήνα ισχυρό διαπραγματευτικό πλεονέκτημα, ώθησαν τη Σπάρτη σε αναζήτηση ειρήνης και επιβεβαίωσαν την άνοδο λαϊκιστών διοικητών όπως ο Κλέων εις βάρος της παλαιότερης αριστοκρατικής ελίτ."
          },
          category: "military"
        }
      ]
    },
    {
      year: -424,
      era: {
        en: "Peloponnesian War / Cultural Achievement",
        el: "Πελοποννησιακός Πόλεμος / Πολιτιστικό Επίτευγμα"
      },
      events: [
        {
          title: {
            en: "Battle of Delium",
            el: "Η μάχη του Δελίου"
          },
          description: {
            en: "The Boeotians defeat the Athenians at the Battle of Delium, where Socrates fought as a hoplite and saved Alcibiades.",
            el: "Οι Βοιωτοί νικούν τους Αθηναίους στη μάχη του Δελίου, όπου ο Σωκράτης πολέμησε ως οπλίτης και έσωσε τον Αλκιβιάδη."
          },
          extendedDescription: {
            en: "An ambitious Athenian plan to detach Boeotia from the Peloponnesian alliance miscarried when the army of Hippocrates, having fortified the sanctuary of Delium near the Euboean strait, was intercepted by the Boeotians under Pagondas. Pagondas drew up his Theban hoplites at unusual depth on the right wing, prefiguring the tactics that Epaminondas would perfect at Leuctra, and shattered the Athenian line. Hippocrates fell with about a thousand of his men. Plato preserves the tradition that Socrates conducted himself with conspicuous coolness during the rout and helped to extricate the wounded Alcibiades, an episode that fed the philosopher's later reputation for soldierly virtue and reinforced the close link between citizenship and martial duty.",
            el: "Φιλόδοξο αθηναϊκό σχέδιο να αποσπάσει τη Βοιωτία από την πελοποννησιακή συμμαχία απέτυχε, όταν ο στρατός του Ιπποκράτη, αφού οχύρωσε το ιερό του Δηλίου κοντά στον ευβοϊκό πορθμό, αναχαιτίστηκε από τους Βοιωτούς υπό τον Παγώνδα. Ο Παγώνδας παρέταξε τους Θηβαίους οπλίτες σε ασυνήθιστο βάθος στη δεξιά πτέρυγα, προαναγγέλλοντας την τακτική που θα τελειοποιούσε ο Επαμεινώνδας στα Λεύκτρα, και διέρρηξε την αθηναϊκή παράταξη. Ο Ιπποκράτης έπεσε μαζί με χιλίους περίπου άνδρες του. Ο Πλάτων διασώζει την παράδοση ότι ο Σωκράτης συμπεριφέρθηκε με αξιοθαύμαστη ψυχραιμία κατά την υποχώρηση και βοήθησε στη διάσωση του τραυματισμένου Αλκιβιάδη, επεισόδιο που τροφοδότησε τη μετέπειτα φήμη του φιλοσόφου για στρατιωτική αρετή και ενίσχυσε τον στενό δεσμό μεταξύ πολιτείας και στρατιωτικού καθήκοντος."
          },
          category: "military"
        },
        {
          title: {
            en: "Herodotus publishes Histories",
            el: "Ο Ηρόδοτος δημοσιεύει τις Ιστορίες"
          },
          description: {
            en: "Herodotus completes his Histories, founding the discipline of history and documenting the Greco-Persian Wars.",
            el: "Ο Ηρόδοτος ολοκληρώνει τις Ιστορίες του, ιδρύοντας τον κλάδο της ιστορίας και τεκμηριώνοντας τους Ελληνο-Περσικούς Πολέμους."
          },
          extendedDescription: {
            en: "Born in Halicarnassus and a long-time traveller through Egypt, the Levant, the Black Sea and southern Italy, Herodotus organised an enormous body of oral testimony, ethnography and political reflection into a single sustained prose narrative. The Histories ostensibly recount the conflict between Greeks and barbarians from the rise of Lydia and Persia to the Greek victories of 480 and 479, but they also explore the customs of Egyptians, Scythians, Babylonians and others, asking how civilisations differ and how empires overreach. Cicero called him the father of history, while Thucydides defined his own more austere method partly in opposition. Whether read in Athens or recited at Olympia, the work shaped the very idea that human events could be investigated and explained.",
            el: "Γεννημένος στην Αλικαρνασσό και επί μακρόν περιηγητής στην Αίγυπτο, στη Λεβάντο, στον Εύξεινο Πόντο και στη Νότια Ιταλία, ο Ηρόδοτος οργάνωσε έναν τεράστιο όγκο προφορικής μαρτυρίας, εθνογραφίας και πολιτικής στοχασμού σε ενιαία εκτενή πεζή αφήγηση. Οι Ιστορίες αφηγούνται φαινομενικά τη σύγκρουση Ελλήνων και βαρβάρων, από την άνοδο της Λυδίας και της Περσίας ως τις ελληνικές νίκες του 480 και του 479, αλλά εξερευνούν επίσης τα ήθη Αιγυπτίων, Σκυθών, Βαβυλωνίων και άλλων, αναρωτώμενες πώς διαφέρουν οι πολιτισμοί και πώς οι αυτοκρατορίες υπερεκτείνονται. Ο Κικέρων τον αποκάλεσε πατέρα της ιστορίας, ενώ ο Θουκυδίδης διαμόρφωσε εν μέρει τη δική του αυστηρότερη μέθοδο σε αντιπαράθεση. Είτε αναγνωσμένο στην Αθήνα είτε απαγγελμένο στην Ολυμπία, το έργο διαμόρφωσε αυτή καθαυτή την ιδέα ότι τα ανθρώπινα συμβάντα μπορούν να ερευνηθούν και να ερμηνευθούν."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -421,
      era: {
        en: "Peloponnesian War",
        el: "Πελοποννησιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Peace of Nicias",
            el: "Η Νικίειος ειρήνη"
          },
          description: {
            en: "Athens and Sparta swear a fifty-year peace, ending the Archidamian phase of the Peloponnesian War — a settlement that neither side can sustain.",
            el: "Η Αθήνα και η Σπάρτη ορκίζονται πεντηκονταετή ειρήνη, τερματίζοντας την Αρχιδάμειο φάση του Πελοποννησιακού Πολέμου — ρύθμιση την οποία ουδεμία πλευρά μπορεί να διατηρήσει."
          },
          extendedDescription: {
            en: "After the deaths of Cleon and the Spartan general Brasidas at Amphipolis, both sides were exhausted enough to listen to the moderate counsels of the Athenian general Nicias and the Spartan king Pleistoanax. The treaty restored prisoners and territory and undertook to refer disputes to arbitration, ostensibly returning Greece to the status quo of 431. In practice it satisfied no one. Sparta could not compel her allies Corinth, Megara and Boeotia to accept the terms, while Athens never received Amphipolis as promised, and within a year Argos was assembling a new anti-Spartan alliance with Athenian support. Thucydides treats the period that followed as merely a hollow truce, the same war prosecuted by other means, and his narrative of these years is itself a study in how appearances of peace can mask the slow deterioration of trust between great powers.",
            el: "Μετά τους θανάτους του Κλέωνος και του σπαρτιάτου στρατηγού Βρασίδα στην Αμφίπολη, αμφότερες αι πλευραί ευρίσκοντο εις τοιαύτην εξάντλησιν ώστε να ακούσουν τας μετρίους συμβουλάς του αθηναίου στρατηγού Νικίου και του σπαρτιάτου βασιλέως Πλειστοάνακτος. Η συνθήκη αποκαθιστούσε τους αιχμαλώτους και τα εδάφη και προέβλεπε διαιτησίαν επί των διαφορών, επαναφέρουσα φαινομενικώς την Ελλάδα εις την κατάστασιν του 431. Εις την πράξιν δεν ικανοποίησε κανέναν. Η Σπάρτη δεν ηδυνήθη να αναγκάσει τους συμμάχους της — Κόρινθον, Μέγαρα και Βοιωτίαν — να αποδεχθούν τους όρους, ενώ η Αθήνα ουδέποτε έλαβε την Αμφίπολιν ως είχε υποσχεθή, και εντός ενός έτους το Άργος συγκροτούσε νέαν αντισπαρτιατικήν συμμαχίαν με αθηναϊκήν υποστήριξιν. Ο Θουκυδίδης αντιμετωπίζει την περίοδον που ηκολούθησε ως κενήν εκεχειρίαν απλώς, ως τον ίδιον πόλεμον διεξαγόμενον δι' άλλων μέσων, και η αφήγησίς του των ετών τούτων είναι αυτή καθ' εαυτήν μελέτη του πώς αι όψεις ειρήνης δύνανται να συγκαλύπτουν την βραδείαν φθοράν της εμπιστοσύνης μεταξύ μεγάλων δυνάμεων."
          },
          category: "political"
        }
      ]
    },
    {
      year: -418,
      era: {
        en: "Peloponnesian War",
        el: "Πελοποννησιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Battle of Mantinea",
            el: "Η μάχη της Μαντινείας"
          },
          description: {
            en: "Sparta crushes the Argive-Athenian coalition at Mantinea, restoring her hegemony in the Peloponnese and exposing the hollowness of the Peace of Nicias.",
            el: "Η Σπάρτη συντρίβει την αργιτο-αθηναϊκήν συμμαχίαν εις τη Μαντίνειαν, αποκαθιστώσα την ηγεμονίαν της εν τη Πελοποννήσω και αποκαλύπτουσα το κενόν της Νικιείου ειρήνης."
          },
          extendedDescription: {
            en: "Encouraged by Alcibiades, Argos, Mantinea, Elis and a small Athenian contingent had combined to challenge Spartan supremacy in the heart of the Peloponnese. King Agis II, manoeuvring with great caution after his early hesitations almost cost him his command, brought the Spartan army into battle on the plain of Mantinea against a coalition of roughly equal numbers. Thucydides describes it as the largest hoplite engagement in many years and the one in which the Spartans showed once again their superiority of nerve and drill: a momentary disorder on their left was redeemed by the steady advance of the right, and the allied centre disintegrated. Two thousand of the coalition fell. Within months Argos accepted a treaty of alliance with Sparta, the league against her dissolved, and the apparent restoration of Spartan prestige seemed to confirm that the war begun in 431 had merely been suspended.",
            el: "Παρακινούμενοι υπό του Αλκιβιάδου, το Άργος, η Μαντίνεια, η Ήλις και μικρόν αθηναϊκόν σώμα είχον ενωθή διά να αμφισβητήσουν τη σπαρτιατικήν υπεροχήν εις την καρδίαν της Πελοποννήσου. Ο βασιλεύς Άγις Β΄, ελιγμένος μετά μεγάλης προσοχής αφότου οι αρχικοί διστασμοί του παρ' ολίγον εστοίχισαν εις αυτόν τη διοίκησιν, οδήγησε τον σπαρτιατικόν στρατόν εις μάχην επί του πεδίου της Μαντινείας εναντίον συνασπισμού περίπου ίσων δυνάμεων. Ο Θουκυδίδης τη περιγράφει ως την μεγίστην οπλιτικήν σύρραξιν πολλών ετών και ως εκείνην εις την οποίαν οι Σπαρτιάται απέδειξαν εκ νέου την υπεροχήν του φρονήματος και της πειθαρχίας των: στιγμιαία αταξία του αριστερού των εξιλεώθη διά της σταθεράς προελάσεως του δεξιού, και το συμμαχικόν κέντρον διελύθη. Δισχίλιοι του συνασπισμού έπεσαν. Εντός μηνών το Άργος απεδέχθη συμμαχίαν με τη Σπάρτην, η αντισπαρτιατική ένωσις διελύθη, και η φαινομενική αποκατάστασις του σπαρτιατικού γοήτρου εδόκει να επιβεβαιώνει ότι ο πόλεμος που είχεν αρχίσει το 431 είχε απλώς ανασταλή."
          },
          category: "military"
        }
      ]
    },
    {
      year: -415,
      era: {
        en: "Peloponnesian War",
        el: "Πελοποννησιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Sicilian Expedition",
            el: "Η Σικελική Εκστρατεία"
          },
          description: {
            en: "Athens launches a massive expedition against Syracuse, ending in catastrophic defeat that severely weakens Athenian power.",
            el: "Η Αθήνα εξαπολύει μια τεράστια εκστρατεία εναντίον των Συρακουσών, που τελειώνει σε καταστροφική ήττα που αποδυναμώνει σοβαρά την αθηναϊκή δύναμη."
          },
          extendedDescription: {
            en: "Urged on by Alcibiades and against the cautious advice of Nicias, the Athenian assembly voted to send the largest expedition in its history to Sicily, ostensibly to aid the small city of Egesta but in reality to bring the wealth of the west under Athenian control. The launch was overshadowed by the mutilation of the herms and the parody of the Mysteries, scandals that led to Alcibiades' recall and his defection to Sparta. Command devolved on the irresolute Nicias, while Sparta sent Gylippus to organise the Syracusan defence. What had begun as a bold projection of imperial power became a slow, suffocating siege of the besiegers, a paradigmatic example in Thucydides of how hubris and faulty deliberation can destroy a great state.",
            el: "Παρακινημένη από τον Αλκιβιάδη και παρά τις επιφυλακτικές προειδοποιήσεις του Νικία, η αθηναϊκή εκκλησία του δήμου ψήφισε να σταλεί η μεγαλύτερη εκστρατεία στην ιστορία της προς τη Σικελία, φαινομενικά για να βοηθήσει τη μικρή πόλη της Εγέστης, στην πραγματικότητα όμως για να φέρει τον πλούτο της Δύσης υπό αθηναϊκό έλεγχο. Η αναχώρηση επισκιάστηκε από τον ακρωτηριασμό των Ερμών και τη διακωμώδηση των Μυστηρίων, σκάνδαλα που οδήγησαν στην ανάκληση του Αλκιβιάδη και στην αποστασία του προς τη Σπάρτη. Η διοίκηση μετακυλίστηκε στον αναποφάσιστο Νικία, ενώ η Σπάρτη απέστειλε τον Γύλιππο να οργανώσει την άμυνα των Συρακουσών. Ό,τι ξεκίνησε ως τολμηρή προβολή αυτοκρατορικής ισχύος μετατράπηκε σε αργή, ασφυκτική πολιορκία των πολιορκητών, υπόδειγμα στον Θουκυδίδη για το πώς η ύβρις και η ελαττωματική κρίση μπορούν να καταστρέψουν ένα μεγάλο κράτος."
          },
          category: "military"
        }
      ]
    },
    {
      year: -413,
      era: {
        en: "Peloponnesian War",
        el: "Πελοποννησιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Destruction of Athenian fleet",
            el: "Η καταστροφή του αθηναϊκού στόλου"
          },
          description: {
            en: "The Athenian fleet is destroyed in Syracuse harbor, marking the complete failure of the Sicilian Expedition.",
            el: "Ο αθηναϊκός στόλος καταστρέφεται στο λιμάνι των Συρακουσών, σηματοδοτώντας την πλήρη αποτυχία της Σικελικής Εκστρατείας."
          },
          extendedDescription: {
            en: "After reinforcements under Demosthenes failed to retrieve the situation, Nicias delayed withdrawal because of a lunar eclipse, and the Syracusans bottled the Athenian triremes inside the Great Harbour. A series of cramped naval engagements destroyed Athenian sea power in the west, after which the survivors attempted to retreat overland through hostile country. Pursued, harassed and denied water, they were cut to pieces at the Assinarus river; both Nicias and Demosthenes were captured and executed, and tens of thousands of prisoners were herded into the Syracusan stone quarries to die of thirst, hunger and exposure. Thucydides describes this as the greatest action that befell any Hellenic state, and the catastrophe shook the foundations of the empire.",
            el: "Αφού οι ενισχύσεις υπό τον Δημοσθένη απέτυχαν να αντιστρέψουν την κατάσταση, ο Νικίας ανέβαλε την αποχώρηση εξαιτίας έκλειψης της σελήνης, και οι Συρακούσιοι απέκλεισαν τις αθηναϊκές τριήρεις εντός του Μεγάλου Λιμένος. Σειρά ασφυκτικών ναυμαχιών εκμηδένισε τη ναυτική ισχύ της Αθήνας στη Δύση, και έπειτα οι επιζώντες επιχείρησαν να υποχωρήσουν διά ξηράς μέσα από εχθρικό έδαφος. Καταδιωκόμενοι, παρενοχλούμενοι και στερημένοι ύδατος, αποδεκατίστηκαν στον ποταμό Ασσίναρο. Νικίας και Δημοσθένης συνελήφθησαν και εκτελέστηκαν, ενώ δεκάδες χιλιάδες αιχμάλωτοι στοιβάχτηκαν στις λατομικές φυλακές των Συρακουσών για να πεθάνουν από δίψα, πείνα και κακουχίες. Ο Θουκυδίδης χαρακτηρίζει το γεγονός ως το μεγαλύτερο πάθημα που έπληξε ελληνικό κράτος, και η καταστροφή κλόνισε τα θεμέλια της αυτοκρατορίας."
          },
          category: "military"
        }
      ]
    },
    {
      year: -411,
      era: {
        en: "Peloponnesian War / Cultural Achievement",
        el: "Πελοποννησιακός Πόλεμος / Πολιτιστικό Επίτευγμα"
      },
      events: [
        {
          title: {
            en: "Athenian Coup",
            el: "Αθηναϊκό Πραξικόπημα"
          },
          description: {
            en: "The oligarchic coup of the Four Hundred overthrows Athenian democracy, though it is quickly restored.",
            el: "Το ολιγαρχικό πραξικόπημα των Τετρακοσίων ανατρέπει την αθηναϊκή δημοκρατία, αν και αποκαθίσταται γρήγορα."
          },
          extendedDescription: {
            en: "Disaster at Syracuse and the loss of revenues from defecting allies had drained the treasury, and a faction led by Antiphon, Phrynichus, and Theramenes seized the moment to dismantle the democracy in the name of efficiency. The Council of Five Hundred was abolished and replaced by the oligarchic Four Hundred, with a nominal larger body of Five Thousand that never met. The fleet at Samos refused to recognize the new regime and recalled Alcibiades to its command. Within four months the Four Hundred fell amid mutual recriminations and Phrynichus' assassination; an intermediate constitution under the Five Thousand gave way to full democracy in 410. The episode left a lasting suspicion of oligarchic conspiracy in Athenian politics.",
            el: "Η καταστροφή στις Συρακούσες και η απώλεια εσόδων από τους αποστατούντες συμμάχους είχαν αδειάσει το ταμείο, και μια παράταξη υπό τον Αντιφώντα, τον Φρύνιχο και τον Θηραμένη άδραξε την ευκαιρία να καταργήσει τη δημοκρατία στο όνομα της αποτελεσματικότητας. Η Βουλή των Πεντακοσίων καταργήθηκε και αντικαταστάθηκε από τους ολιγαρχικούς Τετρακοσίους, με ονομαστικό ευρύτερο σώμα Πεντακισχιλίων που ουδέποτε συνεκλήθη. Ο στόλος στη Σάμο αρνήθηκε να αναγνωρίσει το νέο καθεστώς και ανακάλεσε τον Αλκιβιάδη στη διοίκησή του. Μέσα σε τέσσερις μήνες οι Τετρακόσιοι κατέρρευσαν μέσα σε αμοιβαίες κατηγορίες και τη δολοφονία του Φρύνιχου· ενδιάμεσο πολίτευμα υπό τους Πεντακισχιλίους παραχώρησε τη θέση του στην πλήρη δημοκρατία το 410. Το επεισόδιο άφησε διαρκή υποψία ολιγαρχικής συνωμοσίας στην αθηναϊκή πολιτική."
          },
          category: "political"
        },
        {
          title: {
            en: "Aristophanes' Lysistrata",
            el: "Η Λυσιστράτη του Αριστοφάνη"
          },
          description: {
            en: "Aristophanes stages his anti-war comedy Lysistrata, using humor to comment on the futility of the Peloponnesian War.",
            el: "Ο Αριστοφάνης ανεβάζει την αντιπολεμική του κωμωδία Λυσιστράτη, χρησιμοποιώντας το χιούμορ για να σχολιάσει την ματαιότητα του Πελοποννησιακού Πολέμου."
          },
          extendedDescription: {
            en: "Performed amid the gathering despair of the war's twenty-first year, Lysistrata depicts the heroine of its title organizing the women of Athens, Sparta, and the rest of Greece in a sex strike to compel their husbands to make peace. The play seizes the Acropolis treasury, satirizes magistrates and demagogues, and stages frank debates between male and female choruses. Aristophanes' bawdy humor disguises a serious political appeal: the war was bleeding all of Greece for no clear benefit. The comedy survived as one of his eleven extant plays and became, in modern times, a touchstone of pacifist and feminist drama.",
            el: "Παρουσιαζόμενη μέσα στην απαισιοδοξία του εικοστού πρώτου έτους του πολέμου, η Λυσιστράτη απεικονίζει την ομώνυμη ηρωίδα να οργανώνει τις γυναίκες της Αθήνας, της Σπάρτης και ολόκληρης της Ελλάδας σε απεργία ερωτικής αποχής για να εξαναγκάσουν τους άνδρες τους σε ειρήνη. Το έργο καταλαμβάνει το ταμείο της Ακρόπολης, σατιρίζει άρχοντες και δημαγωγούς και σκηνοθετεί ωμές αντιπαραθέσεις ανάμεσα στους ανδρικούς και γυναικείους χορούς. Το ιλαρό χιούμορ του Αριστοφάνη συγκαλύπτει σοβαρή πολιτική έκκληση: ο πόλεμος αιμορραγούσε ολόκληρη την Ελλάδα χωρίς κανένα προφανές όφελος. Η κωμωδία διασώθηκε ως ένα από τα ένδεκα σωζόμενα έργα του και κατέστη, στους νεότερους χρόνους, εμβληματικό κείμενο του ειρηνιστικού και του φεμινιστικού θεάτρου."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -404,
      era: {
        en: "Peloponnesian War",
        el: "Πελοποννησιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Fall of Athens",
            el: "Η πτώση της Αθήνας"
          },
          description: {
            en: "Athens surrenders to Sparta, ending the Peloponnesian War. The Long Walls are demolished, and Athens loses its empire.",
            el: "Η Αθήνα παραδίδεται στη Σπάρτη, τερματίζοντας τον Πελοποννησιακό Πόλεμο. Τα Μακρά Τείχη κατεδαφίζονται και η Αθήνα χάνει την αυτοκρατορία της."
          },
          extendedDescription: {
            en: "Lysander's victory at Aegospotami the previous autumn had destroyed the Athenian fleet and severed the grain route from the Black Sea. With the city blockaded by sea and besieged by land, famine forced negotiations after several months. Corinth and Thebes urged Athens' destruction; Sparta refused to enslave the city that had once defied Persia, but imposed terms whose harshness was unmistakable: the Long Walls and the fortifications of Piraeus pulled down to flute music, all but twelve ships surrendered, exiles recalled, and Athens enrolled as a Spartan ally. The Thirty Tyrants, a Spartan-imposed oligarchy, took power. The peace ended Athens' fifth-century empire and shifted Greek hegemony to Sparta.",
            el: "Η νίκη του Λυσάνδρου στους Αιγός Ποταμούς το προηγούμενο φθινόπωρο είχε καταστρέψει τον αθηναϊκό στόλο και είχε αποκόψει τον δρόμο των σιτηρών από τον Εύξεινο Πόντο. Με την πόλη αποκλεισμένη από θάλασσα και πολιορκημένη από ξηρά, ο λιμός εξανάγκασε σε διαπραγματεύσεις μετά από αρκετούς μήνες. Η Κόρινθος και οι Θήβες ζητούσαν την καταστροφή της Αθήνας· η Σπάρτη αρνήθηκε να εξανδραποδίσει την πόλη που είχε κάποτε αψηφήσει την Περσία, αλλά επέβαλε όρους αδιαμφισβήτητης σκληρότητας: τα Μακρά Τείχη και οι οχυρώσεις του Πειραιά κατεδαφίστηκαν υπό τους ήχους αυλών, παραδόθηκαν όλα τα πλοία πλην δώδεκα, ανακλήθηκαν οι εξόριστοι και η Αθήνα ενεγράφη ως σπαρτιατική σύμμαχος. Οι Τριάκοντα Τύραννοι, ολιγαρχία επιβεβλημένη από τη Σπάρτη, κατέλαβαν την εξουσία. Η ειρήνη τερμάτισε την αθηναϊκή αυτοκρατορία του πέμπτου αιώνα και μετατόπισε την ελληνική ηγεμονία στη Σπάρτη."
          },
          category: "military"
        }
      ]
    },
    {
      year: -403,
      era: {
        en: "Athenian Recovery",
        el: "Αθηναϊκή Ανάκαμψη"
      },
      events: [
        {
          title: {
            en: "Restoration of Democracy",
            el: "Η αποκατάσταση της δημοκρατίας"
          },
          description: {
            en: "Thrasybulus leads the democratic restoration in Athens, overthrowing the Spartan-backed oligarchy.",
            el: "Ο Θρασύβουλος ηγείται της δημοκρατικής αποκατάστασης στην Αθήνα, ανατρέποντας την ολιγαρχία που στήριζε η Σπάρτη."
          },
          extendedDescription: {
            en: "The Thirty Tyrants under Critias had executed perhaps fifteen hundred citizens and confiscated metic property in their few months of power. From exile in Thebes, Thrasybulus seized the frontier fort of Phyle with seventy men, defeated a Spartan-backed expedition, and marched on the port of Piraeus, where his force grew to a thousand. After defeating the Thirty in battle at Munychia, Thrasybulus negotiated, with Spartan King Pausanias' acquiescence, an amnesty covering all but the Thirty themselves. Athens passed the celebrated 'amnesty oath' — μη μνησικακείν, 'not to remember wrongs' — and a restored democracy resumed. The settlement is regarded as one of antiquity's earliest formal reconciliations after civil war.",
            el: "Οι Τριάκοντα Τύραννοι υπό τον Κριτία είχαν θανατώσει ίσως χίλιους πεντακόσιους πολίτες και είχαν δημεύσει την περιουσία μετοίκων μέσα σε λίγους μήνες εξουσίας. Από την εξορία του στις Θήβες, ο Θρασύβουλος κατέλαβε το συνοριακό φρούριο της Φυλής με εβδομήντα άνδρες, νίκησε εκστρατεία που στήριζε η Σπάρτη και προήλασε προς τον Πειραιά, όπου η δύναμή του έφτασε τους χιλίους. Αφού νίκησε τους Τριάκοντα στη μάχη της Μουνιχίας, διαπραγματεύτηκε, με τη συγκατάθεση του Σπαρτιάτη βασιλιά Παυσανία, αμνηστία που κάλυπτε όλους πλην των Τριάκοντα. Η Αθήνα ψήφισε τον περίφημο όρκο 'μη μνησικακείν', και αποκαταστημένη δημοκρατία επανήλθε. Η ρύθμιση θεωρείται μία από τις παλαιότερες επίσημες συμφιλιώσεις της αρχαιότητας μετά από εμφύλιο πόλεμο."
          },
          category: "political"
        }
      ]
    },
    {
      year: -399,
      era: {
        en: "Socratic Period",
        el: "Σωκρατική Περίοδος"
      },
      events: [
        {
          title: {
            en: "Trial and execution of Socrates",
            el: "Η δίκη και εκτέλεση του Σωκράτη"
          },
          description: {
            en: "Socrates is tried and executed for corrupting the youth and impiety, becoming a martyr for philosophy and free thought.",
            el: "Ο Σωκράτης δικάζεται και εκτελείται για διαφθορά των νέων και ασέβεια, γίνοντας μάρτυρας της φιλοσοφίας και της ελεύθερης σκέψης."
          },
          extendedDescription: {
            en: "Charged by Meletus, Anytus, and Lycon under the formal indictments of impiety toward the city's gods and corruption of the young, Socrates was tried before a jury of five hundred and one Athenians. The accusations were political as much as religious: his closest associates included Critias of the Thirty and Alcibiades, whose careers had wounded the city. Refusing to plead for mercy or propose a serious counter-penalty, Socrates was condemned and, after a delay imposed by the sacred embassy to Delos, drank hemlock in his cell. Plato's Apology, Crito, and Phaedo dramatize his last days and bequeathed Western philosophy its founding image of the philosopher as moral witness against unjust authority.",
            el: "Κατηγορούμενος από τον Μέλητο, τον Άνυτο και τον Λύκωνα με τις επίσημες κατηγορίες της ασέβειας προς τους θεούς της πόλης και της διαφθοράς των νέων, ο Σωκράτης δικάστηκε ενώπιον δικαστηρίου πεντακοσίων ενός Αθηναίων. Οι κατηγορίες ήταν εξίσου πολιτικές όσο και θρησκευτικές: στους στενούς του φίλους περιλαμβάνονταν ο Κριτίας των Τριάκοντα και ο Αλκιβιάδης, των οποίων η σταδιοδρομία είχε πληγώσει την πόλη. Αρνούμενος να ικετεύσει για επιείκεια ή να προτείνει σοβαρή αντιποινή, ο Σωκράτης καταδικάστηκε και, μετά από καθυστέρηση που επέβαλε η ιερή πρεσβεία στη Δήλο, ήπιε το κώνειο στο κελί του. Η Απολογία, ο Κρίτων και ο Φαίδων του Πλάτωνος δραματοποιούν τις τελευταίες του ημέρες και κληροδότησαν στη δυτική φιλοσοφία τη θεμελιώδη εικόνα του φιλοσόφου ως ηθικού μάρτυρα απέναντι στην άδικη εξουσία."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/David_-_The_Death_of_Socrates.jpg?width=1024",
            alt: {
              en: "The Death of Socrates, painting by Jacques-Louis David (1787)",
              el: "Ο θάνατος του Σωκράτη, πίνακας του Jacques-Louis David (1787)"
            },
            credit: "Jacques-Louis David, via Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: -395,
      era: {
        en: "Corinthian War",
        el: "Κορινθιακός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Corinthian War begins",
            el: "Η αρχή του Κορινθιακού Πολέμου"
          },
          description: {
            en: "Athens, Thebes, Corinth, and Argos fight against Sparta and Persian support, beginning the Corinthian War.",
            el: "Αθήνα, Θήβες, Κόρινθος και Άργος πολεμούν ενάντια στη Σπάρτη και την περσική υποστήριξη, αρχίζοντας τον Κορινθιακό Πόλεμο."
          },
          extendedDescription: {
            en: "Spartan attempts to dictate terms across the Aegean and to interfere in central Greece had alienated former allies, while Persian gold financed a coalition aimed at clipping Spartan ambition. The naval defeat of Sparta by the Persian-Athenian fleet under Conon at Cnidus in 394 BC ended Spartan thalassocracy and allowed Athens to rebuild her Long Walls with Persian funds. The land war devolved into inconclusive campaigns around Corinth — the 'Corinthian War' — punctuated by the bloody Battle of the Nemea River and Agesilaus' victory at Coronea. The conflict ended in 387 with the King's Peace dictated by Persia, which restored Asia Minor to Persian control and confirmed Spartan hegemony over the Greek mainland — but exhausted the Greek city-states.",
            el: "Οι σπαρτιατικές προσπάθειες να επιβληθούν όροι σε ολόκληρο το Αιγαίο και να υπάρξει ανάμιξη στην κεντρική Ελλάδα είχαν αποξενώσει πρώην συμμάχους, ενώ ο περσικός χρυσός χρηματοδότησε συνασπισμό που στόχευε να αναχαιτίσει τη σπαρτιατική φιλοδοξία. Η ναυτική ήττα της Σπάρτης από τον περσο-αθηναϊκό στόλο υπό τον Κόνωνα στην Κνίδο το 394 π.Χ. τερμάτισε τη σπαρτιατική θαλασσοκρατία και επέτρεψε στην Αθήνα να ανοικοδομήσει τα Μακρά της Τείχη με περσικά κονδύλια. Ο χερσαίος πόλεμος εξελίχθηκε σε αναποφάσιστες εκστρατείες γύρω από την Κόρινθο — τον 'Κορινθιακό Πόλεμο' — με σημαία τη φονική Μάχη του Νεμέου ποταμού και τη νίκη του Αγησιλάου στην Κορώνεια. Η σύρραξη έληξε το 387 με την Ανταλκίδειο Ειρήνη που υπαγόρευσε η Περσία, η οποία αποκατέστησε την περσική κυριαρχία στη Μικρά Ασία και επιβεβαίωσε την σπαρτιατική ηγεμονία στην ηπειρωτική Ελλάδα — αλλά εξάντλησε τις ελληνικές πόλεις."
          },
          category: "military"
        }
      ]
    },
    {
      year: -387,
      era: {
        en: "Philosophical Schools",
        el: "Φιλοσοφικές Σχολές"
      },
      events: [
        {
          title: {
            en: "Plato founds the Academy",
            el: "Ο Πλάτων ιδρύει την Ακαδημία"
          },
          description: {
            en: "Plato establishes his school of philosophy in Athens, which will operate for nearly 900 years and influence Western thought profoundly.",
            el: "Ο Πλάτων ιδρύει τη φιλοσοφική του σχολή στην Αθήνα, η οποία θα λειτουργήσει για σχεδόν 900 χρόνια και θα επηρεάσει βαθιά τη δυτική σκέψη."
          },
          extendedDescription: {
            en: "After travels to Italy and Sicily following Socrates' execution, Plato acquired land near the grove sacred to the hero Akademos, just outside Athens, and gathered students for instruction in mathematics, dialectic, and political theory. The Academy charged no fees and admitted at least one woman, Axiothea of Phlius, in male disguise. Aristotle entered as a pupil at seventeen and remained for twenty years. The school survived as a continuous institution until its closure under Justinian in 529 AD, undergoing successive transformations into the skeptical New Academy and the late-antique Platonist revival under Proclus. Its model of disciplined, communal philosophical inquiry became the prototype of the European university.",
            el: "Μετά από ταξίδια στην Ιταλία και τη Σικελία ύστερα από την εκτέλεση του Σωκράτη, ο Πλάτων αγόρασε γη κοντά στο άλσος που ήταν αφιερωμένο στον ήρωα Ακάδημο, ακριβώς έξω από την Αθήνα, και συγκέντρωσε μαθητές για διδασκαλία στα μαθηματικά, τη διαλεκτική και την πολιτική θεωρία. Η Ακαδημία δεν επέβαλε δίδακτρα και δέχθηκε τουλάχιστον μία γυναίκα, την Αξιοθέα από τη Φλιούντα, με ανδρική μεταμφίεση. Ο Αριστοτέλης εισήλθε ως μαθητής στα δεκαεπτά του και παρέμεινε είκοσι χρόνια. Η σχολή επιβίωσε ως αδιάκοπος θεσμός έως το κλείσιμό της επί Ιουστινιανού το 529 μ.Χ., περνώντας από διαδοχικές μετασχηματίσεις στη σκεπτική Νέα Ακαδημία και την υστερορωμαϊκή πλατωνική αναβίωση υπό τον Πρόκλο. Το πρότυπό της της πειθαρχημένης κοινοτικής φιλοσοφικής έρευνας έγινε ο πρόδρομος του ευρωπαϊκού πανεπιστημίου."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -371,
      era: {
        en: "Theban Hegemony",
        el: "Θηβαϊκή Ηγεμονία"
      },
      events: [
        {
          title: {
            en: "Battle of Leuctra",
            el: "Η μάχη των Λεύκτρων"
          },
          description: {
            en: "Thebes under Epaminondas defeats Sparta, ending Spartan military supremacy and establishing Theban dominance in Greece.",
            el: "Οι Θήβες υπό τον Επαμεινώντα νικούν τη Σπάρτη, τερματίζοντας τη σπαρτιατική στρατιωτική υπεροχή και καθιερώνοντας τη θηβαϊκή κυριαρχία στην Ελλάδα."
          },
          extendedDescription: {
            en: "Outnumbered roughly seven thousand to ten thousand Spartans and allies, Epaminondas overturned classical hoplite doctrine by stacking his left wing fifty shields deep — with the elite Sacred Band of Pelopidas in the front rank — while refusing his weaker right. The reinforced wedge struck the Spartan right where King Cleombrotus stood, killed him, and shattered the supposedly unbreakable Spartan phalanx. Roughly four hundred of the seven hundred Spartiates present fell, a casualty rate Sparta could not absorb given her dwindling citizen body. Within a generation, Epaminondas would invade Laconia itself and free Messenia. Leuctra is widely treated as the moment Sparta's military supremacy, dating from the Persian Wars, was decisively broken.",
            el: "Σε μειονεκτική θέση, αντιπαρατάχθηκαν περίπου επτά χιλιάδες σε δέκα χιλιάδες Σπαρτιάτες και συμμάχους· ο Επαμεινώντας ανέτρεψε την κλασική οπλιτική τακτική στοιβάζοντας το αριστερό κέρας πενήντα ασπίδες βάθος — με τον επίλεκτο Ιερό Λόχο του Πελοπίδα στην πρώτη γραμμή — αρνούμενος συγχρόνως να εμπλέξει το ασθενέστερο δεξιό. Η ενισχυμένη σφήνα έπληξε το σπαρτιατικό δεξιό όπου ευρισκόταν ο βασιλιάς Κλεόμβροτος, τον σκότωσε και συνέτριψε την υποτίθεται άθραυστη σπαρτιατική φάλαγγα. Περίπου τετρακόσιοι από τους επτακόσιους παρόντες Σπαρτιάτες έπεσαν — απώλειες που η Σπάρτη δεν μπορούσε να απορροφήσει, δεδομένου του μειούμενου αριθμού των πολιτών της. Μέσα σε μία γενεά, ο Επαμεινώντας θα εισέβαλε στην ίδια τη Λακωνία και θα απελευθέρωνε τη Μεσσηνία. Τα Λεύκτρα θεωρούνται ευρέως η στιγμή κατά την οποία θραύστηκε αμετάκλητα η σπαρτιατική στρατιωτική υπεροχή, που χρονολογείτο από τους Περσικούς Πολέμους."
          },
          category: "military"
        }
      ]
    },
    {
      year: -370,
      era: {
        en: "Theban Hegemony",
        el: "Θηβαϊκή Ηγεμονία"
      },
      events: [
        {
          title: {
            en: "Invasion of the Peloponnese",
            el: "Η εισβολή στην Πελοπόννησο"
          },
          description: {
            en: "Epaminondas leads Theban forces into the Peloponnese, liberating Messenia and ending Spartan dominance.",
            el: "Ο Επαμεινώντας ηγείται των θηβαϊκών δυνάμεων στην Πελοπόννησο, απελευθερώνοντας τη Μεσσηνία και τερματίζοντας τη σπαρτιατική κυριαρχία."
          },
          extendedDescription: {
            en: "Crossing the Isthmus in midwinter at the head of perhaps forty thousand Boeotians, Arcadians, Argives, and Eleans, Epaminondas became the first invader in three centuries to bring an army into the Eurotas valley. Sparta itself, walled only by the courage of its citizens, was held by Agesilaus with a scratch defense, but the surrounding country was ravaged. Crucially, Epaminondas freed the Messenian helots, who had labored under Spartan dominion since the eighth century, and refounded their capital at Messene around the slopes of Mount Ithome. The loss of Messenia stripped Sparta of half her arable land and the labor pool that had sustained her hoplite class. The expedition broke Spartan power for good and inaugurated the brief Theban hegemony.",
            el: "Διασχίζοντας τον Ισθμό μέσα στον χειμώνα επικεφαλής περίπου σαράντα χιλιάδων Βοιωτών, Αρκάδων, Αργείων και Ηλείων, ο Επαμεινώντας υπήρξε ο πρώτος εισβολέας σε τρεις αιώνες που έφερε στρατό στην κοιλάδα του Ευρώτα. Η ίδια η Σπάρτη, οχυρωμένη μόνον με το θάρρος των πολιτών της, κρατήθηκε από τον Αγησίλαο με αυτοσχέδια άμυνα, αλλά η γύρω χώρα ρημάχθηκε. Καθοριστικά, ο Επαμεινώντας απελευθέρωσε τους Μεσσήνιους είλωτες, που μοχθούσαν υπό σπαρτιατική κυριαρχία από τον όγδοο αιώνα, και ίδρυσε εκ νέου την πρωτεύουσά τους στη Μεσσήνη γύρω από τις πλαγιές της Ιθώμης. Η απώλεια της Μεσσηνίας στέρησε από τη Σπάρτη το ήμισυ των καλλιεργήσιμων γαιών της και την εργατική δύναμη που είχε στηρίξει την οπλιτική της τάξη. Η εκστρατεία έθραυσε οριστικά τη σπαρτιατική ισχύ και εγκαινίασε τη σύντομη θηβαϊκή ηγεμονία."
          },
          category: "military"
        }
      ]
    },
    {
      year: -369,
      era: {
        en: "Theban Hegemony",
        el: "Θηβαϊκή Ηγεμονία"
      },
      events: [
        {
          title: {
            en: "Foundation of Megalopolis",
            el: "Η ίδρυση της Μεγαλόπολης"
          },
          description: {
            en: "Thebes founds Megalopolis as a buffer state against Sparta, permanently altering the balance of power in the Peloponnese.",
            el: "Οι Θήβες ιδρύουν τη Μεγαλόπολη ως κράτος-ασπίδα ενάντια στη Σπάρτη, αλλάζοντας οριστικά την ισορροπία δυνάμεων στην Πελοπόννησο."
          },
          extendedDescription: {
            en: "On Epaminondas' urging, the scattered villages of southern Arcadia were synoecized into a single great city — Megale Polis — to anchor a new Arcadian League and seal Laconia's northern frontier. Some forty communities were drained of population to fill the new urban site, and walls some nine kilometers in circumference were thrown up. Together with the refounding of Messene and the strengthening of Mantinea, Megalopolis formed a ring of fortified states whose function was overtly anti-Spartan. The city later produced Philopoemen, the 'last of the Greeks,' and the historian Polybius. Its scale, beyond the resources of its hinterland, contributed to the Arcadian League's later instability.",
            el: "Με την παρότρυνση του Επαμεινώντα, τα διάσπαρτα χωριά της νότιας Αρκαδίας συνοικίστηκαν σε μία μεγάλη πόλη — Μεγάλη Πόλις — για να αποτελέσει αγκύρωση της νέας Αρκαδικής Συμπολιτείας και να σφραγίσει τα βόρεια σύνορα της Λακωνίας. Περίπου σαράντα κοινότητες αποψιλώθηκαν πληθυσμιακά για να γεμίσουν τη νέα αστική θέση, και τείχη μήκους περίπου εννέα χιλιομέτρων ανυψώθηκαν. Μαζί με την επανίδρυση της Μεσσήνης και την ενίσχυση της Μαντινείας, η Μεγαλόπολη σχημάτισε δακτύλιο οχυρωμένων πόλεων με σαφή αντι-σπαρτιατικό προσανατολισμό. Η πόλη ανέδειξε αργότερα τον Φιλοποίμενα, τον 'έσχατο των Ελλήνων', και τον ιστορικό Πολύβιο. Το μέγεθός της, υπερβολικό για τους πόρους της ενδοχώρας της, συνέβαλε στην μετέπειτα αστάθεια της Αρκαδικής Συμπολιτείας."
          },
          category: "political"
        }
      ]
    },
    {
      year: -367,
      era: {
        en: "Theban Hegemony",
        el: "Θηβαϊκή Ηγεμονία"
      },
      events: [
        {
          title: {
            en: "Second Invasion of the Peloponnese",
            el: "Δεύτερη εισβολή στην Πελοπόννησο"
          },
          description: {
            en: "Epaminondas leads a second invasion of the Peloponnese, further weakening Spartan power.",
            el: "Ο Επαμεινώντας ηγείται μιας δεύτερης εισβολής στην Πελοπόννησο, αποδυναμώνοντας περαιτέρω τη σπαρτιατική δύναμη."
          },
          extendedDescription: {
            en: "The expedition consolidated the Theban arrangements of 370–369: cementing the Arcadian League around Megalopolis, encouraging Argive activity along the eastern Peloponnesian coast, and pinning Spartan forces in Laconia while Athenian and Achaean diplomats vacillated. Epaminondas avoided general engagement, preferring to demonstrate that Theban power could move at will across the peninsula and that Spartan hegemony could no longer protect her allies. The campaign also exposed widening fissures within the anti-Spartan coalition itself, as the Arcadians began to chafe at Theban tutelage. The seeds of the realignment that would lead to Mantinea in 362 were already present.",
            el: "Η εκστρατεία εδραίωσε τις θηβαϊκές διευθετήσεις των ετών 370–369: παγίωσε την Αρκαδική Συμπολιτεία γύρω από τη Μεγαλόπολη, ενθάρρυνε τη δραστηριότητα του Άργους κατά μήκος της ανατολικής πελοποννησιακής ακτής και καθήλωσε τις σπαρτιατικές δυνάμεις στη Λακωνία, ενώ οι Αθηναίοι και Αχαιοί διπλωμάτες κυμαίνονταν. Ο Επαμεινώντας απέφυγε γενικευμένη σύγκρουση, προτιμώντας να αποδείξει ότι η θηβαϊκή ισχύς μπορούσε να κινείται ελεύθερα στη χερσόνησο και ότι η σπαρτιατική ηγεμονία αδυνατούσε πλέον να προστατεύσει τους συμμάχους της. Η εκστρατεία ανέδειξε επίσης τις διευρυνόμενες ρωγμές εντός του ίδιου του αντισπαρτιατικού συνασπισμού, καθώς οι Αρκάδες άρχισαν να δυσφορούν υπό τη θηβαϊκή κηδεμονία. Οι σπόροι του μετασχηματισμού που θα οδηγούσε στη Μαντίνεια το 362 ήταν ήδη παρόντες."
          },
          category: "military"
        }
      ]
    },
    {
      year: -362,
      era: {
        en: "Theban Hegemony",
        el: "Θηβαϊκή Ηγεμονία"
      },
      events: [
        {
          title: {
            en: "Battle of Mantinea",
            el: "Η μάχη της Μαντινείας"
          },
          description: {
            en: "Epaminondas wins his final battle at Mantinea but is killed, ending Theban dominance in Greece.",
            el: "Ο Επαμεινώντας κερδίζει την τελευταία του μάχη στη Μαντίνεια αλλά σκοτώνεται, τερματίζοντας τη θηβαϊκή κυριαρχία στην Ελλάδα."
          },
          extendedDescription: {
            en: "Confronted by a coalition of Sparta, Athens, Mantinea, and the Achaeans against Thebes, Tegea, Argos, and Messenia, Epaminondas applied at Mantinea the same oblique strategy that had won at Leuctra: a deep, refused right and a hammer-blow with a reinforced left, supported by cavalry and light infantry. The Theban left smashed through the Spartans and routed their wing, but at the moment of victory Epaminondas was struck by a javelin and mortally wounded. Without his presence the Boeotians could not consolidate the field, and the battle became, as Xenophon famously concluded his Hellenica, a victory that produced 'still greater confusion and disorder in Greece than before.' Theban hegemony, dependent on one man, dissolved with him.",
            el: "Αντιμέτωπος με συνασπισμό Σπαρτιατών, Αθηναίων, Μαντινέων και Αχαιών εναντίον Θηβαίων, Τεγεατών, Αργείων και Μεσσηνίων, ο Επαμεινώντας εφάρμοσε στη Μαντίνεια την ίδια λοξή στρατηγική που είχε νικήσει στα Λεύκτρα: βαθύ και αναδιπλούμενο δεξί κέρας και σφυροκόπημα με ενισχυμένο αριστερό, υποστηριζόμενο από ιππικό και ψιλούς. Το θηβαϊκό αριστερό συνέτριψε τους Σπαρτιάτες και έτρεψε σε φυγή την πτέρυγά τους, αλλά τη στιγμή της νίκης ο Επαμεινώντας πληγώθηκε θανάσιμα από ακόντιο. Χωρίς την παρουσία του, οι Βοιωτοί δεν μπόρεσαν να εκμεταλλευτούν τη μάχη, και αυτή έγινε, όπως κατέληγε ο Ξενοφών στα Ελληνικά του, νίκη που προκάλεσε 'ακόμη μεγαλύτερη σύγχυση και αταξία στην Ελλάδα από πριν'. Η θηβαϊκή ηγεμονία, εξαρτημένη από έναν άνδρα, διαλύθηκε μαζί του."
          },
          category: "military"
        }
      ]
    },
    {
      year: -359,
      era: {
        en: "Macedonian Rise",
        el: "Άνοδος της Μακεδονίας"
      },
      events: [
        {
          title: {
            en: "Philip II becomes king of Macedon",
            el: "Ο Φίλιππος Β΄ γίνεται βασιλιάς της Μακεδονίας"
          },
          description: {
            en: "Philip II ascends the Macedonian throne and begins reforms that will create the most powerful military force in Greece.",
            el: "Ο Φίλιππος Β΄ ανεβαίνει στον μακεδονικό θρόνο και αρχίζει μεταρρυθμίσεις που θα δημιουργήσουν την πιο ισχυρή στρατιωτική δύναμη στην Ελλάδα."
          },
          extendedDescription: {
            en: "Philip came to power as regent — and soon king — after the death of his brother Perdiccas III in battle against the Illyrians, with Macedon ringed by hostile peoples and a pretender supported by Athens. Drawing on what he had learned as a hostage in Thebes from Pammenes and Epaminondas, he restructured the army around the long sarissa pike, integrated cavalry and light infantry into a combined-arms force, and instituted year-round drill. Within a few years he had crushed the Illyrians and Paeonians, secured the throne, and begun absorbing the cities of Chalcidice. The reformed Macedonian phalanx that emerged would, in his son's hands, conquer the Persian Empire.",
            el: "Ο Φίλιππος ήλθε στην εξουσία ως αντιβασιλέας — και σύντομα βασιλιάς — μετά τον θάνατο του αδελφού του Περδίκκα Γ΄ σε μάχη με τους Ιλλυριούς, με τη Μακεδονία κυκλωμένη από εχθρικούς λαούς και διεκδικητή που υποστήριζε η Αθήνα. Αξιοποιώντας όσα είχε μάθει ως όμηρος στις Θήβες από τον Παμμένη και τον Επαμεινώντα, αναδιοργάνωσε τον στρατό γύρω από τη μακριά σάρισα, ενσωμάτωσε το ιππικό και τους ψιλούς σε ενιαία δύναμη συνδυασμένης διάταξης και θέσπισε ολοχρονιάτικη εκπαίδευση. Μέσα σε λίγα χρόνια είχε συντρίψει τους Ιλλυριούς και τους Παίονες, εδραιώσει τον θρόνο και αρχίσει να απορροφά τις πόλεις της Χαλκιδικής. Η αναμορφωμένη μακεδονική φάλαγγα που προέκυψε θα κατακτούσε, στα χέρια του γιου του, την Περσική Αυτοκρατορία."
          },
          category: "political"
        }
      ]
    },
    {
      year: -357,
      era: {
        en: "Macedonian Expansion",
        el: "Μακεδονική Επέκταση"
      },
      events: [
        {
          title: {
            en: "Conquest of Amphipolis",
            el: "Η κατάκτηση της Αμφίπολης"
          },
          description: {
            en: "Philip II captures Amphipolis, gaining control of rich gold mines and securing Macedon's eastern frontier.",
            el: "Ο Φίλιππος Β΄ καταλαμβάνει την Αμφίπολη, αποκτώντας τον έλεγχο πλούσιων χρυσωρυχείων και εξασφαλίζοντας τα ανατολικά σύνορα της Μακεδονίας."
          },
          extendedDescription: {
            en: "Athens had lost Amphipolis in 424 and never recovered it; Philip's seizure of the city, after a brief siege using the new torsion artillery, broke a long Athenian hope and gave Macedon the Strymon river crossing. Far more important was the access it gave to the gold and silver of Mount Pangaeus. Philip refounded the workings — the new town of Philippi was named after him — and raised production to perhaps a thousand talents a year, more than the silver of Laurium had ever yielded. The bullion paid for diplomacy, mercenaries, and bribes across Greece; ancient observers noted that Philip's gold opened more gates than his sarissas.",
            el: "Η Αθήνα είχε χάσει την Αμφίπολη το 424 και ουδέποτε την ανέκτησε· η κατάληψη της πόλης από τον Φίλιππο, μετά από σύντομη πολιορκία με χρήση των νέων τορσιακών μηχανημάτων, εξανέμισε μια μακρόχρονη αθηναϊκή προσδοκία και έδωσε στη Μακεδονία τη διάβαση του Στρυμόνα. Πολύ σημαντικότερη ήταν η πρόσβαση στον χρυσό και τον άργυρο του Παγγαίου. Ο Φίλιππος αναζωογόνησε τα μεταλλεία — η νέα πόλη των Φιλίππων πήρε το όνομά του — και αύξησε την παραγωγή σε ίσως χίλια τάλαντα ετησίως, περισσότερα από όσα είχε ποτέ αποδώσει ο άργυρος του Λαυρίου. Ο πολύτιμος μέταλλος χρηματοδότησε διπλωματία, μισθοφόρους και δωροδοκίες σε ολόκληρη την Ελλάδα· αρχαίοι παρατηρητές σημείωσαν ότι ο χρυσός του Φιλίππου άνοιγε περισσότερες πύλες από τις σάρισές του."
          },
          category: "military"
        }
      ]
    },
    {
      year: -356,
      era: {
        en: "Macedonian Rise",
        el: "Άνοδος της Μακεδονίας"
      },
      events: [
        {
          title: {
            en: "Birth of Alexander the Great",
            el: "Η γέννηση του Μεγάλου Αλεξάνδρου"
          },
          description: {
            en: "Alexander is born to Philip II and Olympias at Pella, destined to become one of history's greatest conquerors.",
            el: "Ο Αλέξανδρος γεννιέται από τον Φίλιππο Β΄ και την Ολυμπιάδα στην Πέλλα, προορισμένος να γίνει ένας από τους μεγαλύτερους κατακτητές της ιστορίας."
          },
          extendedDescription: {
            en: "Plutarch dates the birth to the sixth of Hekatombaion, the same day, by tradition, that the Temple of Artemis at Ephesus burned down — a coincidence later read as omen. Olympias, princess of Epirus and devotee of the ecstatic cult of Dionysus, would dominate Alexander's early years; Philip's frequent campaigns kept father and son apart and contributed to the personal tensions of the prince's youth. From the age of thirteen Alexander was tutored by Aristotle at the school of Mieza, where he received the Iliad that would accompany him under his pillow on every campaign. By his teens he was already serving as regent in Philip's absence and commanding the cavalry charge at Chaeronea.",
            el: "Ο Πλούταρχος χρονολογεί τη γέννηση στις έξι Εκατομβαιώνος, την ίδια — κατά την παράδοση — ημέρα κατά την οποία κάηκε ο ναός της Αρτέμιδος στην Έφεσο: σύμπτωση που ερμηνεύθηκε αργότερα ως οιωνός. Η Ολυμπιάς, πριγκίπισσα της Ηπείρου και αφοσιωμένη στη μυστηριακή λατρεία του Διονύσου, θα κυριαρχούσε στα παιδικά χρόνια του Αλεξάνδρου· οι συχνές εκστρατείες του Φιλίππου τον κρατούσαν μακριά από τον γιο του και συνέβαλαν στις προσωπικές εντάσεις της εφηβείας του πρίγκιπα. Από τα δεκατρία του χρόνια ο Αλέξανδρος είχε για δάσκαλο τον Αριστοτέλη στη σχολή των Μιεζών, όπου έλαβε την Ιλιάδα που θα τον συντρόφευε κάτω από το προσκέφαλό του σε κάθε εκστρατεία. Στα έφηβα χρόνια του υπηρετούσε ήδη ως αντιβασιλέας απουσιάζοντος του Φιλίππου και διοικούσε την έφοδο του ιππικού στη Χαιρώνεια."
          },
          category: "other"
        }
      ]
    },
    {
      year: -352,
      era: {
        en: "Macedonian Expansion",
        el: "Μακεδονική Επέκταση"
      },
      events: [
        {
          title: {
            en: "Battle of Crocus Field",
            el: "Η μάχη του Κρόκου Πεδίου"
          },
          description: {
            en: "Philip II defeats the Phocians at the Battle of Crocus Field, establishing Macedonian dominance in central Greece.",
            el: "Ο Φίλιππος Β΄ νικά τους Φωκείς στη μάχη του Κρόκου Πεδίου, θεμελιώνοντας τη μακεδονική κυριαρχία στην κεντρική Ελλάδα."
          },
          extendedDescription: {
            en: "Drawn into Thessaly by the Aleuad faction, Philip presented his army wearing laurel crowns to declare himself the champion of Apollo against the Phocians, who had seized Delphi and were funding their war from the temple treasures. In what may have been the largest hoplite-versus-pike battle yet fought, his Macedonians and Thessalian cavalry destroyed the Phocian commander Onomarchus and some six thousand of his men; survivors were drowned or, by some accounts, crucified for sacrilege. The victory let Philip take possession of Thessaly outright, secured him a seat on the Amphictyonic Council overseeing Delphi, and gave Macedon a permanent voice in the politics of central Greece.",
            el: "Παρασυρόμενος στη Θεσσαλία από την παράταξη των Αλευαδών, ο Φίλιππος εμφάνισε τον στρατό του στεφανωμένο με δάφνες δηλώνοντας τον εαυτό του υπερασπιστή του Απόλλωνος εναντίον των Φωκέων, οι οποίοι είχαν καταλάβει τους Δελφούς και χρηματοδοτούσαν τον πόλεμό τους από τους θησαυρούς του ιερού. Σε ό,τι ήταν ίσως η μεγαλύτερη μέχρι τότε σύγκρουση οπλιτών εναντίον σαρισοφόρων, οι Μακεδόνες και το θεσσαλικό ιππικό συνέτριψαν τον Φωκαίο στρατηγό Ονόμαρχο και περίπου έξι χιλιάδες άνδρες· οι επιζώντες πνίγηκαν ή, κατ' άλλες πηγές, σταυρώθηκαν ως ιερόσυλοι. Η νίκη επέτρεψε στον Φίλιππο να καταλάβει τη Θεσσαλία ολοσχερώς, του εξασφάλισε έδρα στο Αμφικτυονικό Συνέδριο που εποπτεύει τους Δελφούς και έδωσε στη Μακεδονία μόνιμο λόγο στην πολιτική της κεντρικής Ελλάδας."
          },
          category: "military"
        }
      ]
    },
    {
      year: -338,
      era: {
        en: "Macedonian Hegemony",
        el: "Μακεδονική Ηγεμονία"
      },
      events: [
        {
          title: {
            en: "Battle of Chaeronea",
            el: "Η μάχη της Χαιρώνειας"
          },
          description: {
            en: "Philip II defeats the combined forces of Athens and Thebes, establishing Macedonian dominance over the Greek city-states.",
            el: "Ο Φίλιππος Β΄ νικά τις συνδυασμένες δυνάμεις της Αθήνας και των Θηβών, καθιερώνοντας τη μακεδονική κυριαρχία στις ελληνικές πόλεις-κράτη."
          },
          extendedDescription: {
            en: "Demosthenes' Philippics had at last welded a coalition of Athens, Thebes, Corinth, and other cities against Philip's southward advance. On the Boeotian plain, Philip — perhaps thirty thousand foot and two thousand horse — drew the allied left out of position with a feigned withdrawal, then crushed it. On the opposite wing the eighteen-year-old Alexander led the Companion cavalry through the Theban line and annihilated the Sacred Band of Thebes, three hundred paired warriors who fell where they stood. Demosthenes himself fled. The peace that followed established the League of Corinth under Philip's hegemony, with Macedon as 'leader' and the Greeks bound to a common army for the long-planned invasion of Persia.",
            el: "Οι Φιλιππικοί λόγοι του Δημοσθένη είχαν τέλος ενώσει συνασπισμό Αθήνας, Θηβών, Κορίνθου και άλλων πόλεων εναντίον της νότιας προέλασης του Φιλίππου. Στη βοιωτική πεδιάδα, ο Φίλιππος — με ίσως τριάντα χιλιάδες πεζούς και δύο χιλιάδες ιππείς — έσυρε με προσποιητή υποχώρηση το συμμαχικό αριστερό κέρας έξω από τη θέση του και το συνέτριψε. Στο αντίθετο κέρας, ο δεκαοκτάχρονος Αλέξανδρος οδήγησε τους Εταίρους ιππείς μέσα από τη θηβαϊκή γραμμή και αφάνισε τον Ιερό Λόχο των Θηβών, τους τριακόσιους ζευγαρωτούς πολεμιστές που έπεσαν εκεί όπου στέκονταν. Ο ίδιος ο Δημοσθένης τράπηκε σε φυγή. Η ειρήνη που ακολούθησε εγκαθίδρυσε την Κοινή των Ελλήνων στην Κόρινθο υπό την ηγεμονία του Φιλίππου, με τη Μακεδονία ως 'ηγεμόνα' και τους Έλληνες δεσμευμένους σε κοινό στρατό για τη μακροχρόνια σχεδιαζόμενη εισβολή στην Περσία."
          },
          category: "military"
        }
      ]
    },
    {
      year: -336,
      era: {
        en: "Macedonian Hegemony",
        el: "Μακεδονική Ηγεμονία"
      },
      events: [
        {
          title: {
            en: "Alexander becomes king",
            el: "Ο Αλέξανδρος γίνεται βασιλιάς"
          },
          description: {
            en: "Alexander succeeds his assassinated father Philip II and immediately secures his position and begins planning the Persian invasion.",
            el: "Ο Αλέξανδρος διαδέχεται τον δολοφονηθέντα πατέρα του Φίλιππο Β΄ και αμέσως εξασφαλίζει τη θέση του και αρχίζει να σχεδιάζει την περσική εισβολή."
          },
          extendedDescription: {
            en: "Philip was murdered at Aegae during the wedding feast of Alexander's sister Cleopatra by his bodyguard Pausanias of Orestis, in obscure circumstances ancient writers ascribed variously to personal grievance, court intrigue, or even Olympias' connivance. Twenty-year-old Alexander moved swiftly: rivals were eliminated, including the infant son of Philip's last wife and his cousin Amyntas IV. He marched south to receive the renewed allegiance of the League of Corinth, then northward to crush Thracian and Illyrian uprisings, and finally back to destroy Thebes when it revolted on a false rumor of his death. Within two years his rear was secure and he could turn the inherited Persian campaign into reality.",
            el: "Ο Φίλιππος δολοφονήθηκε στις Αιγές κατά τους γάμους της κόρης του Κλεοπάτρας από τον σωματοφύλακά του Παυσανία τον Ορέστη, υπό σκοτεινές συνθήκες που οι αρχαίοι συγγραφείς απέδιδαν εναλλακτικά σε προσωπική μνησικακία, αυλικό μηχανορραφικό σχέδιο ή ακόμη και στη συμπαιγνία της Ολυμπιάδος. Ο εικοσάχρονος Αλέξανδρος ενέργησε αστραπιαία: εξάλειψε αντιπάλους, συμπεριλαμβανομένου του βρέφους γιου της τελευταίας συζύγου του Φιλίππου και του ξαδέλφου του Αμύντα Δ΄. Προήλασε νότια για να δεχθεί την ανανεωμένη υποταγή της Κοινής των Ελλήνων στην Κόρινθο, στη συνέχεια βόρεια για να συντρίψει εξεγέρσεις Θρακών και Ιλλυριών, και τελικά πίσω για να καταστρέψει τις Θήβες, όταν εκείνες εξεγέρθηκαν επί ψευδεί φήμη του θανάτου του. Μέσα σε δύο χρόνια τα νώτα του ήταν εξασφαλισμένα και μπορούσε να μεταβάλει την κληρονομημένη περσική εκστρατεία σε πραγματικότητα."
          },
          category: "political"
        }
      ]
    },
    {
      year: -335,
      era: {
        en: "Cultural Achievement",
        el: "Πολιτιστικό Επίτευγμα"
      },
      events: [
        {
          title: {
            en: "Aristotle founds Lyceum",
            el: "Ο Αριστοτέλης ιδρύει το Λύκειο"
          },
          description: {
            en: "Aristotle establishes his school of philosophy in Athens, creating a systematic approach to knowledge that will influence science for centuries.",
            el: "Ο Αριστοτέλης ιδρύει τη φιλοσοφική του σχολή στην Αθήνα, δημιουργώντας μια συστηματική προσέγγιση στη γνώση που θα επηρεάσει την επιστήμη για αιώνες."
          },
          extendedDescription: {
            en: "Returning to Athens after tutoring Alexander, Aristotle was barred from the Academy by Plato's heirs and instead rented buildings in a public gymnasium attached to the sanctuary of Apollo Lykeios — hence the name. His followers were called Peripatetics, from the colonnaded walks where he taught while strolling. The Lyceum's program — covering logic, physics, biology, ethics, politics, rhetoric, and poetics — was pursued through sustained empirical observation and the dialectical sifting of received opinion, and produced a library of treatises that organized nearly the entire field of inquiry as it then existed. After Alexander's death, anti-Macedonian feeling forced Aristotle into exile lest, as he said, Athens 'sin twice against philosophy.'",
            el: "Επιστρέφοντας στην Αθήνα ύστερα από τη διδασκαλία του Αλεξάνδρου, ο Αριστοτέλης απαγορεύτηκε από την Ακαδημία από τους κληρονόμους του Πλάτωνος και ενοικίασε αντ' αυτής κτήρια σε δημόσιο γυμνάσιο πλησίον του ιερού του Λυκείου Απόλλωνος — εξ ου και το όνομα. Οι μαθητές του ονομάστηκαν Περιπατητικοί, από τις κιονοστοιχίες όπου δίδασκε περπατώντας. Το πρόγραμμα του Λυκείου — που κάλυπτε λογική, φυσική, βιολογία, ηθική, πολιτική, ρητορική και ποιητική — επιδιώκετο μέσα από επίμονη εμπειρική παρατήρηση και διαλεκτική διηθήσεως των κρατούντων απόψεων, και παρήγαγε μια βιβλιοθήκη πραγματειών που οργάνωσε σχεδόν ολόκληρο το πεδίο της γνώσεως όπως υπήρχε τότε. Μετά τον θάνατο του Αλεξάνδρου, το αντι-μακεδονικό κλίμα ανάγκασε τον Αριστοτέλη σε εξορία ώστε, όπως είπε, να μη 'σφάλει η Αθήνα δις προς τη φιλοσοφία'."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -334,
      era: {
        en: "Alexander's Conquests",
        el: "Οι κατακτήσεις του Αλεξάνδρου"
      },
      events: [
        {
          title: {
            en: "Battle of Granicus",
            el: "Η μάχη του Γρανικού"
          },
          description: {
            en: "Alexander wins his first major victory against the Persian Empire, crossing into Asia and beginning his epic conquests.",
            el: "Ο Αλέξανδρος κερδίζει την πρώτη του μεγάλη νίκη εναντίον της Περσικής Αυτοκρατορίας, περνώντας στην Ασία και αρχίζοντας τις επικές του κατακτήσεις."
          },
          extendedDescription: {
            en: "Crossing the Hellespont with about thirty-five thousand troops, Alexander made a pilgrimage to Troy and laid a wreath on the supposed tomb of Achilles before marching east. The Persian satraps, against the advice of the mercenary commander Memnon of Rhodes, chose to fight on the steep eastern bank of the Granicus rather than withdraw. Alexander led the Companion cavalry across the river in person, was nearly killed in a melee with Persian noblemen, and was saved by Cleitus the Black. The Persian line broke; the Greek mercenaries who fought on for Persia were ringed and slaughtered. The victory opened Asia Minor: most coastal cities surrendered, and Alexander could send three hundred sets of captured armor to Athens with the inscription 'from the Greeks except the Lacedaemonians.'",
            el: "Διασχίζοντας τον Ελλήσποντο με περίπου τριάντα πέντε χιλιάδες άνδρες, ο Αλέξανδρος επισκέφθηκε την Τροία ως προσκυνητής και κατέθεσε στεφάνι στον υποτιθέμενο τάφο του Αχιλλέως πριν προελάσει ανατολικά. Οι Πέρσες σατράπες, αντίθετα προς τη συμβουλή του μισθοφόρου διοικητή Μέμνονος του Ρόδιου, επέλεξαν να δώσουν μάχη στην απότομη ανατολική όχθη του Γρανικού αντί να αποχωρήσουν. Ο Αλέξανδρος οδήγησε αυτοπροσώπως τους Εταίρους ιππείς διά μέσου του ποταμού, παρά λίγο να σκοτωθεί σε συμπλοκή με Πέρσες ευγενείς και διασώθηκε από τον Κλείτο τον Μέλανα. Η περσική γραμμή διασπάστηκε· οι Έλληνες μισθοφόροι που εξακολούθησαν να μάχονται για την Περσία περικυκλώθηκαν και κατασφάγηκαν. Η νίκη άνοιξε τη Μικρά Ασία: οι περισσότερες παράκτιες πόλεις παραδόθηκαν και ο Αλέξανδρος μπόρεσε να αποστείλει τριακόσιες πανοπλίες λαφύρων στην Αθήνα με την επιγραφή 'από των Ελλήνων πλην Λακεδαιμονίων'."
          },
          category: "military"
        }
      ]
    },
    {
      year: -333,
      era: {
        en: "Alexander's Conquests",
        el: "Οι κατακτήσεις του Αλεξάνδρου"
      },
      events: [
        {
          title: {
            en: "Battle of Issus",
            el: "Η μάχη της Ισσού"
          },
          description: {
            en: "Alexander defeats Darius III despite being outnumbered, capturing the Persian royal family and securing control of Asia Minor.",
            el: "Ο Αλέξανδρος νικά τον Δαρείο Γ΄ παρά το ότι ήταν σε μειονεκτική θέση, συλλαμβάνοντας την περσική βασιλική οικογένεια και εξασφαλίζοντας τον έλεγχο της Μικράς Ασίας."
          },
          extendedDescription: {
            en: "Darius marched the imperial host into Cilicia and, with daring but disastrous initiative, slipped behind Alexander and forced battle in the narrow coastal plain at Issus, where Persian numbers could not deploy. Alexander, recovering from a near-fatal fever, recrossed the pass and accepted the engagement. The Macedonian phalanx pinned the Persian line while the Companion cavalry, with Alexander at its head, charged directly at Darius' chariot. The Great King fled, leaving behind his treasury, his bow, his royal robes, and his mother, wife, and children — whom Alexander treated with conspicuous courtesy. The disproportionate casualties and the loss of the royal family were an unmistakable signal to the empire's western provinces that Persian invincibility was over.",
            el: "Ο Δαρείος προέλασε με την αυτοκρατορική στρατιά στην Κιλικία και, με τολμηρή αλλά καταστροφική πρωτοβουλία, πέρασε πίσω από τον Αλέξανδρο και επέβαλε μάχη στη στενή παράκτια πεδιάδα της Ισσού, όπου το περσικό αριθμητικό πλεονέκτημα δεν μπορούσε να αναπτυχθεί. Ο Αλέξανδρος, αναρρώνοντας από επικίνδυνο πυρετό, επέστρεψε διά του στενού και δέχθηκε τη μάχη. Η μακεδονική φάλαγγα καθήλωσε την περσική γραμμή, ενώ οι Εταίροι, με τον Αλέξανδρο επικεφαλής, επιτέθηκαν κατευθείαν στο άρμα του Δαρείου. Ο Μέγας Βασιλέας ετράπη σε φυγή, εγκαταλείποντας το ταμείο, το τόξο, τον βασιλικό μανδύα, καθώς και τη μητέρα, τη σύζυγο και τα παιδιά του — που ο Αλέξανδρος μεταχειρίστηκε με επιδεικτική ευγένεια. Οι δυσανάλογες απώλειες και η αιχμαλωσία της βασιλικής οικογένειας απετέλεσαν αδιαμφισβήτητο μήνυμα στις δυτικές επαρχίες της αυτοκρατορίας ότι η περσική ανικητότητα είχε λήξει."
          },
          category: "military"
        }
      ]
    },
    {
      year: -331,
      era: {
        en: "Alexander's Conquests",
        el: "Οι κατακτήσεις του Αλεξάνδρου"
      },
      events: [
        {
          title: {
            en: "Foundation of Alexandria",
            el: "Η ίδρυση της Αλεξάνδρειας"
          },
          description: {
            en: "Alexander founds Alexandria in Egypt, which will become the greatest center of learning and culture in the ancient world.",
            el: "Ο Αλέξανδρος ιδρύει την Αλεξάνδρεια στην Αίγυπτο, που θα γίνει το μεγαλύτερο κέντρο μάθησης και πολιτισμού του αρχαίου κόσμου."
          },
          extendedDescription: {
            en: "Crowned Pharaoh in the temples of Memphis, Alexander chose a strip of land between the Mediterranean and Lake Mareotis, opposite the island of Pharos, as the site for a new Greek city — the first of more than seventy Alexandrias he would found across his empire. The architect Deinocrates of Rhodes laid out the streets on a Hippodamian grid, and the city was endowed with double harbors and a freshwater canal from the Nile. Under the Ptolemies it would house the Library and Museum, the Pharos lighthouse counted among the Seven Wonders, and a population approaching half a million — making it for centuries the most populous Greek-speaking city of the Mediterranean and the intellectual capital of the Hellenistic world.",
            el: "Στεμμένος Φαραώ στους ναούς της Μέμφιδος, ο Αλέξανδρος επέλεξε μια λωρίδα γης ανάμεσα στη Μεσόγειο και τη λίμνη Μαρεώτιδα, απέναντι από τη νήσο Φάρο, ως τόπο νέας ελληνικής πόλης — της πρώτης από τις άνω των εβδομήντα Αλεξανδρειών που θα ίδρυε σε ολόκληρη την αυτοκρατορία του. Ο αρχιτέκτονας Δεινοκράτης ο Ρόδιος χάραξε τους δρόμους σε ιπποδάμειο σχέδιο, και η πόλη προικίστηκε με διπλά λιμάνια και διώρυγα γλυκού νερού από τον Νείλο. Υπό τους Πτολεμαίους θα στέγαζε τη Βιβλιοθήκη και το Μουσείο, τον Φάρο μεταξύ των Επτά Θαυμάτων και πληθυσμό που πλησίαζε το μισό εκατομμύριο — καθιστώντας την επί αιώνες την πολυπληθέστερη ελληνόφωνη πόλη της Μεσογείου και την πνευματική πρωτεύουσα του ελληνιστικού κόσμου."
          },
          category: "cultural"
        },
        {
          title: {
            en: "Battle of Gaugamela",
            el: "Η μάχη της Γαυγάμηλης"
          },
          description: {
            en: "Alexander decisively defeats Darius III, ending the Persian Empire and completing his conquest of the Persian heartland.",
            el: "Ο Αλέξανδρος νικά αποφασιστικά τον Δαρείο Γ΄, τερματίζοντας την Περσική Αυτοκρατορία και ολοκληρώνοντας την κατάκτηση της περσικής καρδιάς."
          },
          extendedDescription: {
            en: "On a plain Darius had levelled and seeded with iron caltrops east of the Tigris, the imperial army of perhaps a hundred thousand drew up with scythed chariots, war elephants, and contingents from the eastern satrapies. Alexander, with about forty-seven thousand men, led his cavalry diagonally across the field to draw the Persian left out of position, then wheeled with the Companions and drove a wedge straight at the spot where Darius stood. As at Issus, the Great King fled. The pursuit broke the Persian center; the chariots were neutralized by Macedonian discipline, the elephants captured. Babylon, Susa, and finally Persepolis surrendered or were stormed. The fall of Persepolis, with the burning of Xerxes' palace, marked the symbolic end of the Achaemenid Empire.",
            el: "Σε πεδιάδα την οποία ο Δαρείος είχε εξομαλύνει και σκορπίσει σιδερένιες ακίδες ανατολικά του Τίγρη, η αυτοκρατορική στρατιά των περίπου εκατό χιλιάδων ανδρών παρατάχθηκε με δρεπανοφόρα άρματα, πολεμικούς ελέφαντες και αποσπάσματα από τις ανατολικές σατραπείες. Ο Αλέξανδρος, με περί τις σαράντα επτά χιλιάδες άνδρες, οδήγησε λοξά το ιππικό του διά μέσου του πεδίου ώστε να σύρει το περσικό αριστερό κέρας έξω από τη θέση του και κατόπιν στράφηκε με τους Εταίρους εναντίον του σημείου όπου στεκόταν ο Δαρείος. Όπως και στην Ισσό, ο Μέγας Βασιλέας ετράπη σε φυγή. Η καταδίωξη διέλυσε το περσικό κέντρο· τα άρματα εξουδετερώθηκαν από τη μακεδονική πειθαρχία, οι ελέφαντες αιχμαλωτίστηκαν. Η Βαβυλώνα, τα Σούσα και τέλος η Περσέπολη παραδόθηκαν ή κυριεύθηκαν. Η πτώση της Περσέπολης, με την πυρπόληση του ανακτόρου του Ξέρξη, σήμανε το συμβολικό τέλος της Αχαιμενιδικής Αυτοκρατορίας."
          },
          category: "military"
        }
      ]
    },
    {
      year: -326,
      era: {
        en: "Eastern Campaigns",
        el: "Ανατολικές Εκστρατείες"
      },
      events: [
        {
          title: {
            en: "Battle of the Hydaspes",
            el: "Η μάχη του Υδάσπη"
          },
          description: {
            en: "Alexander defeats King Porus in India, his most difficult battle. His army refuses to go further, forcing him to turn back.",
            el: "Ο Αλέξανδρος νικά τον βασιλιά Πώρο στην Ινδία, τη δυσκολότερη μάχη του. Ο στρατός του αρνείται να προχωρήσει περισσότερο, αναγκάζοντάς τον να γυρίσει πίσω."
          },
          extendedDescription: {
            en: "Crossing the swollen Hydaspes by night during a thunderstorm, Alexander surprised Porus' army of perhaps thirty thousand foot, four thousand horse, and two hundred war elephants — the latter a foe his Macedonians had never faced in such numbers. The cavalry-and-light-infantry tactics he developed on the spot pinned the elephants and turned them back upon their own lines. Porus, wounded but unbroken, was taken prisoner; asked how he wished to be treated, he replied, 'Like a king,' and was restored to his realm as Alexander's vassal. The horse Bucephalas died of wounds and exhaustion shortly after, and Alexander founded the city of Bucephala in his honor. At the Hyphasis river beyond, the army mutinied; for the first time, Alexander turned back.",
            el: "Διασχίζοντας τον πλημμυρισμένο Υδάσπη νύχτα μέσα σε καταιγίδα, ο Αλέξανδρος αιφνιδίασε τη στρατιά του Πώρου — ίσως τριάντα χιλιάδες πεζών, τέσσερις χιλιάδες ιππέων και διακοσίων πολεμικών ελεφάντων — τους τελευταίους εχθρούς που οι Μακεδόνες του δεν είχαν αντιμετωπίσει ποτέ σε τέτοιο πλήθος. Οι τακτικές του ιππικού και των ψιλών που σχεδίασε επί τόπου καθήλωσαν τους ελέφαντες και τους έστρεψαν ενάντια στις ίδιες τις γραμμές τους. Ο Πώρος, πληγωμένος αλλά αλώβητος, αιχμαλωτίστηκε· όταν ερωτήθηκε πώς επιθυμεί να αντιμετωπιστεί, απήντησε 'Βασιλικώς' και αποκαταστάθηκε στο βασίλειό του ως υποτελής του Αλεξάνδρου. Το άλογο Βουκεφάλας πέθανε λίγο αργότερα από πληγές και εξάντληση, και ο Αλέξανδρος ίδρυσε την πόλη Βουκέφαλα στη μνήμη του. Στον Ύφασιν ποταμό πιο πέρα, ο στρατός στασίασε· για πρώτη φορά, ο Αλέξανδρος υποχώρησε."
          },
          category: "military"
        }
      ]
    },
    {
      year: -323,
      era: {
        en: "Death of Alexander",
        el: "Ο θάνατος του Αλεξάνδρου"
      },
      events: [
        {
          title: {
            en: "Death of Alexander the Great",
            el: "Ο θάνατος του Μεγάλου Αλεξάνδρου"
          },
          description: {
            en: "Alexander dies in Babylon at age 32, leaving his vast empire without a clear heir and ushering in the Hellenistic period.",
            el: "Ο Αλέξανδρος πεθαίνει στη Βαβυλώνα σε ηλικία 32 ετών, αφήνοντας την τεράστια αυτοκρατορία του χωρίς σαφή διάδοχο και εισάγοντας την ελληνιστική περίοδο."
          },
          extendedDescription: {
            en: "After eleven days of fever following a long banquet at Medius' house, Alexander died on 10 or 11 June 323 BC in Nebuchadnezzar's old palace. Ancient sources disagree about the cause — malaria, typhoid, the cumulative effects of wounds and drink, even poison administered by Cassander or Antipater — and the question is still debated. Asked on his deathbed to whom he left the empire, he is said to have answered 'to the strongest,' or, by another tradition, to have given his ring to Perdiccas. His half-brother Philip III and posthumous infant son Alexander IV both reigned briefly under regents before being murdered. The Macedonian generals — Ptolemy, Seleucus, Antigonus, Lysimachus, Cassander — divided the empire among themselves in the wars of the Diadochi.",
            el: "Μετά από έντεκα ημέρες πυρετού ύστερα από μακρύ συμπόσιο στην οικία του Μηδίου, ο Αλέξανδρος πέθανε στις 10 ή 11 Ιουνίου του 323 π.Χ. στο παλιό ανάκτορο του Ναβουχοδονόσορα. Οι αρχαίες πηγές διαφωνούν για την αιτία — ελονοσία, τυφοειδής πυρετός, αθροιστικές επιπτώσεις τραυμάτων και ποτού, ακόμη και δηλητηρίαση από τον Κάσσανδρο ή τον Αντίπατρο — και το ερώτημα παραμένει συζητούμενο. Στο νεκρικό κρεβάτι, όταν ερωτήθηκε σε ποιον αφήνει την αυτοκρατορία, λέγεται ότι απάντησε 'τω κρατίστω', ή κατά άλλη παράδοση παρέδωσε το δαχτυλίδι του στον Περδίκκα. Ο ετεροθαλής αδελφός του Φίλιππος Γ΄ και ο μεταθανάτιος βρέφος γιος του Αλέξανδρος Δ΄ βασίλευσαν αμφότεροι σύντομα υπό αντιβασιλείς προτού δολοφονηθούν. Οι Μακεδόνες στρατηγοί — Πτολεμαίος, Σέλευκος, Αντίγονος, Λυσίμαχος, Κάσσανδρος — διαμοίρασαν την αυτοκρατορία στους πολέμους των Διαδόχων."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
