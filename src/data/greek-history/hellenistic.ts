/** Hellenistic Period — Ελληνιστική Περίοδος · Greek History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const HELLENISTIC = {
  id: "hellenistic" as const,
  label: {
    en: "Hellenistic Period",
    el: "Ελληνιστική Περίοδος"
  },
  supertitle: {
    en: "Hellas",
    el: "Ἑλλάς"
  },
  title: {
    en: "The Hellenistic World",
    el: "Ο Ελληνιστικός Κόσμος"
  },
  subtitle: {
    en: "From Alexander to Rome — age of classical civilization",
    el: "Από τον Αλέξανδρο στη Ρώμη — εποχή του κλασικού πολιτισμού"
  },
  menuDescription: {
    en: "Alexander's heirs and their kingdoms, from Babylon to Cleopatra's Egypt.",
    el: "Οι διάδοχοι του Αλεξάνδρου και τα βασίλειά τους, από τη Βαβυλώνα ως την Αίγυπτο της Κλεοπάτρας."
  },
  footerLabel: {
    en: "Hellenistic Period · 323-31 BC",
    el: "Ελληνιστική Περίοδος · 323-31 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Hellenistic Period",
    el: "Ελληνιστική Περίοδος"
  },
  theme: THEMES.sapphire,
  timeline: [
    {
      year: -323,
      era: {
        en: "Wars of the Diadochi",
        el: "Πόλεμοι των Διαδόχων"
      },
      events: [
        {
          title: {
            en: "Death of Alexander the Great",
            el: "Ο θάνατος του Μεγάλου Αλεξάνδρου"
          },
          description: {
            en: "Alexander dies in Babylon at age 32, leaving his vast empire without a clear heir. His generals, the Diadochi, begin to carve up the territories.",
            el: "Ο Αλέξανδρος πεθαίνει στη Βαβυλώνα σε ηλικία 32 ετών, αφήνοντας την τεράστια αυτοκρατορία του χωρίς σαφή διάδοχο. Οι στρατηγοί του, οι Διάδοχοι, αρχίζουν να μοιράζονται τα εδάφη."
          },
          extendedDescription: {
            en: "After more than a decade of unbroken conquest from the Aegean to the Indus, Alexander succumbed to a fever in Nebuchadnezzar's palace at Babylon, having named no successor and leaving only an unborn child by Roxana and a half-brother of limited capacity. Ancient sources, principally Arrian, Plutarch and the so-called Royal Diaries, attribute his death to illness, perhaps complicated by exhaustion and heavy drinking, while a persistent later tradition alleges poisoning at the hands of Antipater's family; modern scholarship generally favours malaria or typhoid. According to Diodorus, Alexander left his ring and empire 'to the strongest', and the resulting power vacuum unleashed nearly half a century of civil wars among the Macedonian marshals, out of which the Hellenistic world would emerge.",
            el: "Μετά από μία και πλέον δεκαετία ασταμάτητων κατακτήσεων από το Αιγαίο έως τον Ινδό, ο Μέγας Αλέξανδρος ενέδωσε σε πυρετό μέσα στα ανάκτορα του Ναβουχοδονόσορα στη Βαβυλώνα, χωρίς να έχει ορίσει διάδοχο και αφήνοντας πίσω του μόνον ένα αγέννητο τέκνο από τη Ρωξάνη και έναν ετεροθαλή αδελφό περιορισμένων δυνατοτήτων. Οι αρχαίες πηγές, κυρίως ο Αρριανός, ο Πλούταρχος και οι λεγόμενες Βασιλικές Εφημερίδες, αποδίδουν τον θάνατό του σε νόσο, ίσως επιδεινωμένη από κάματο και υπερβολική οινοποσία, ενώ μια επίμονη μεταγενέστερη παράδοση κάνει λόγο για δηλητηρίαση από τον οίκο του Αντιπάτρου· η σύγχρονη έρευνα κλίνει συνήθως προς ελονοσία ή τυφοειδή. Κατά τον Διόδωρο, ο Αλέξανδρος άφησε το δακτυλίδι και την αυτοκρατορία του 'τω κρατίστω', και το κενό εξουσίας που προέκυψε πυροδότησε σχεδόν μισό αιώνα εμφυλίων πολέμων μεταξύ των Μακεδόνων στρατηγών, μέσα από τους οποίους θα γεννιόταν ο ελληνιστικός κόσμος."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Alexander_the_Great_mosaic.jpg?width=1024",
            alt: {
              en: "Alexander the Great, detail from the Alexander Mosaic, Pompeii",
              el: "Ο Μέγας Αλέξανδρος, λεπτομέρεια από το Μωσαϊκό του Αλεξάνδρου, Πομπηία"
            },
            credit: "Alexander Mosaic, Pompeii, via Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: -322,
      era: {
        en: "Wars of the Diadochi",
        el: "Πόλεμοι των Διαδόχων"
      },
      events: [
        {
          title: {
            en: "Lamian War",
            el: "Ο Λαμιακός Πόλεμος"
          },
          description: {
            en: "Athens and other Greek states revolt against Macedonian rule but are defeated at the Battle of Crannon, ending Greek hopes for independence.",
            el: "Η Αθήνα και άλλες ελληνικές πόλεις επαναστατούν ενάντια στη μακεδονική κυριαρχία αλλά ηττώνται στη Μάχη του Κραννίου, τερματίζοντας τις ελληνικές ελπίδες για ανεξαρτησία."
          },
          extendedDescription: {
            en: "News of Alexander's death prompted Athens, joined by the Aetolians, Thessalians and most of central Greece, to take up arms in what came to be known as the Hellenic or Lamian War, named for the long siege of Antipater's army inside the town of Lamia. Initial Greek successes under the Athenian general Leosthenes raised genuine hopes of throwing off Macedonian hegemony, but Leosthenes' death and the arrival of reinforcements under Craterus turned the tide. The decisive defeat at Crannon in 322 was followed by the imposition of an oligarchic regime on Athens, the disenfranchisement of the poorer citizens and the suicide of Demosthenes, who had championed resistance. The war effectively ended the political independence of the classical Greek city-state.",
            el: "Η είδηση του θανάτου του Αλεξάνδρου ώθησε την Αθήνα, μαζί με τους Αιτωλούς, τους Θεσσαλούς και το μεγαλύτερο μέρος της κεντρικής Ελλάδος, να καταφύγουν στα όπλα στον λεγόμενο Ελληνικό ή Λαμιακό Πόλεμο, που έλαβε το όνομά του από την πολύμηνη πολιορκία του Αντιπάτρου εντός της πόλεως της Λαμίας. Οι αρχικές ελληνικές επιτυχίες υπό τον Αθηναίο στρατηγό Λεωσθένη γέννησαν πραγματικές ελπίδες αποτινάξεως της μακεδονικής ηγεμονίας, όμως ο θάνατός του και η άφιξις ενισχύσεων υπό τον Κρατερό αντέστρεψαν την κατάσταση. Η αποφασιστική ήττα στο Κράννωνα το 322 ακολουθήθηκε από την επιβολή ολιγαρχικού καθεστώτος στην Αθήνα, την απώλεια των πολιτικών δικαιωμάτων των φτωχότερων πολιτών και την αυτοκτονία του Δημοσθένους, ο οποίος είχε υπερασπισθεί την αντίσταση. Ο πόλεμος ουσιαστικά τερμάτισε την πολιτική ανεξαρτησία της κλασικής ελληνικής πόλεως."
          },
          category: "military"
        }
      ]
    },
    {
      year: -321,
      era: {
        en: "Wars of the Diadochi",
        el: "Πόλεμοι των Διαδόχων"
      },
      events: [
        {
          title: {
            en: "Partition of Triparadisus",
            el: "Η Διανομή της Τριπαραδείσου"
          },
          description: {
            en: "The Diadochi formally divide Alexander's empire, with Antigonus receiving Asia Minor, Ptolemy Egypt, Seleucus Babylon, and Antipater Macedonia.",
            el: "Οι Διάδοχοι διαιρούν επισήμως την αυτοκρατορία του Αλεξάνδρου, με τον Αντίγονο να λαμβάνει τη Μικρά Ασία, τον Πτολεμαίο την Αίγυπτο, τον Σέλευκο τη Βαβυλώνα και τον Αντίπατρο τη Μακεδονία."
          },
          extendedDescription: {
            en: "Held in northern Syria after the murder of the regent Perdiccas during a failed invasion of Egypt, the conference of Triparadisus reorganised the satrapal map first sketched at Babylon two years earlier. Antipater, the aged regent of Macedonia, assumed guardianship of the two nominal kings, Philip III Arrhidaeus and the infant Alexander IV, while Antigonus the One-Eyed was charged with prosecuting the war against the supporters of Perdiccas in Asia. Seleucus, hitherto a junior officer, received the great satrapy of Babylonia, the basis of his future empire, and Ptolemy was confirmed in his rich self-chosen province of Egypt. Although presented as a settlement, Triparadisus in fact entrenched the regional power bases from which the Successors would soon make war on one another for the imperial inheritance.",
            el: "Συγκληθείσα στη βόρεια Συρία μετά τον φόνο του επιτρόπου Περδίκκα κατά την αποτυχημένη εισβολή στην Αίγυπτο, η σύσκεψις της Τριπαραδείσου αναδιοργάνωσε τον σατραπικό χάρτη που είχε αρχικά σχεδιασθεί στη Βαβυλώνα δύο χρόνια νωρίτερα. Ο γηραιός Αντίπατρος, αντιβασιλεύς της Μακεδονίας, ανέλαβε την επιτροπεία των δύο τυπικών βασιλέων, του Φιλίππου Γ΄ Αρριδαίου και του βρέφους Αλεξάνδρου Δ΄, ενώ στον Αντίγονο τον Μονόφθαλμο ανατέθηκε η συνέχισις του πολέμου εναντίον των οπαδών του Περδίκκα στην Ασία. Ο Σέλευκος, μέχρι τότε υφιστάμενος αξιωματικός, έλαβε τη μεγάλη σατραπεία της Βαβυλωνίας, βάση της μελλοντικής αυτοκρατορίας του, ενώ ο Πτολεμαίος επικυρώθηκε στην πλούσια αυτοεπιλεγμένη επαρχία του στην Αίγυπτο. Αν και παρουσιάστηκε ως διευθέτησις, η Τριπαράδεισος στην πραγματικότητα παγίωσε τις περιφερειακές βάσεις ισχύος από τις οποίες οι Διάδοχοι σύντομα θα πολεμούσαν ο ένας τον άλλον για την αυτοκρατορική κληρονομιά."
          },
          category: "political"
        }
      ]
    },
    {
      year: -312,
      era: {
        en: "Wars of the Diadochi",
        el: "Πόλεμοι των Διαδόχων"
      },
      events: [
        {
          title: {
            en: "Foundation of the Seleucid Era",
            el: "Η ίδρυση της Σελευκιδικής Εποχής"
          },
          description: {
            en: "Seleucus I Nicator recaptures Babylon and establishes the Seleucid Empire, marking the beginning of the Seleucid Era used throughout the Near East.",
            el: "Ο Σέλευκος Α΄ Νικάτωρ ανακαταλαμβάνει τη Βαβυλώνα και ιδρύει τη Σελευκιδική Αυτοκρατορία, σηματοδοτώντας την αρχή της Σελευκιδικής Εποχής που χρησιμοποιήθηκε σε όλη τη Εγγύς Ανατολή."
          },
          extendedDescription: {
            en: "Driven from his satrapy by Antigonus in 316, Seleucus had taken refuge with Ptolemy in Egypt; after the allied victory over Antigonus's son Demetrius at Gaza he returned to Babylon with a small force and was welcomed back by populace and garrison alike. The reconquest of his old province in the spring of 312 was retrospectively chosen as year one of the Seleucid Era, the first continuous regnal calendar in world history, which would remain in use among Jews, Christians and Mesopotamians for many centuries. From this base Seleucus over the next decade extended his authority across Iran as far as the Indus, ceding the easternmost provinces to the Indian king Chandragupta in exchange for war elephants. The Seleucid Empire that emerged was the largest of the Hellenistic kingdoms and the principal heir to the Achaemenid administrative tradition.",
            el: "Εκδιωχθείς από τη σατραπεία του από τον Αντίγονο το 316, ο Σέλευκος είχε καταφύγει στον Πτολεμαίο στην Αίγυπτο· μετά τη συμμαχική νίκη επί του υιού του Αντιγόνου, Δημητρίου, στη Γάζα, επέστρεψε στη Βαβυλώνα με μικρή δύναμη και έγινε δεκτός από τον λαό και τη φρουρά. Η ανακατάκτησις της παλαιάς επαρχίας του την άνοιξη του 312 επελέγη αναδρομικά ως το έτος ένα της Σελευκιδικής Εποχής, του πρώτου αδιάλειπτου βασιλικού ημερολογίου στην παγκόσμια ιστορία, το οποίο θα παρέμενε σε χρήση μεταξύ Ιουδαίων, Χριστιανών και Μεσοποταμιτών επί πολλούς αιώνες. Από τη βάση αυτή ο Σέλευκος επεξέτεινε κατά την επόμενη δεκαετία την εξουσία του σε ολόκληρο το Ιράν έως τον Ινδό, παραχωρώντας τις ανατολικότερες επαρχίες στον Ινδό βασιλέα Σανδρόκοττο έναντι πολεμικών ελεφάντων. Η Σελευκιδική Αυτοκρατορία που προέκυψε υπήρξε το μεγαλύτερο των ελληνιστικών βασιλείων και ο κύριος κληρονόμος της αχαιμενιδικής διοικητικής παραδόσεως."
          },
          category: "political"
        }
      ]
    },
    {
      year: -310,
      era: {
        en: "Wars of the Diadochi",
        el: "Πόλεμοι των Διαδόχων"
      },
      events: [
        {
          title: {
            en: "Murder of Alexander IV",
            el: "Ο φόνος του Αλεξάνδρου Δ΄"
          },
          description: {
            en: "Cassander murders Alexander IV, the young son of Alexander the Great, along with his mother Roxana, ending the Argead dynasty.",
            el: "Ο Κάσσανδρος δολοφονεί τον Αλέξανδρο Δ΄, τον μικρό γιο του Μεγάλου Αλεξάνδρου, μαζί με τη μητέρα του Ρωξάνη, τερματίζοντας τη δυναστεία των Αργεάδων."
          },
          extendedDescription: {
            en: "By the time Alexander IV approached the age at which he might assume real authority, Cassander, son of Antipater and master of Macedonia, had every reason to fear that loyalists across the empire would rally to the legitimate Argead heir. Holding the boy and his Bactrian mother under close confinement at Amphipolis, Cassander ordered their secret killing, allegedly through the agency of his lieutenant Glaucias, and concealed the deed for some time. The murder, conventionally dated to 311 or 310, removed the last credible male of the line of Philip II and Alexander, since the half-brother Philip III Arrhidaeus had already been put to death by Olympias in 317. With no Argead figurehead remaining, the Diadochi were free, within a few years, to assume the royal title in their own right and to refound the Macedonian world as a system of competing dynasties.",
            el: "Καθώς ο Αλέξανδρος Δ΄ πλησίαζε στην ηλικία κατά την οποία θα μπορούσε να αναλάβει πραγματική εξουσία, ο Κάσσανδρος, υιός του Αντιπάτρου και κύριος της Μακεδονίας, είχε κάθε λόγο να φοβάται μήπως οι πιστοί ανά την αυτοκρατορία ταχθούν με τον νόμιμο Αργεάδη κληρονόμο. Κρατώντας το παιδί και τη Βακτριανή μητέρα του υπό αυστηρό περιορισμό στην Αμφίπολη, ο Κάσσανδρος διέταξε τη μυστική τους εκτέλεση, κατά τα λεγόμενα διά μέσου του υπασπιστού του Γλαυκία, και απέκρυψε την πράξη για ικανό χρονικό διάστημα. Ο φόνος, που τοποθετείται συμβατικά στο 311 ή 310, εξαφάνισε τον τελευταίο αξιόπιστο άρρενα της γενεάς του Φιλίππου Β΄ και του Αλεξάνδρου, αφού ο ετεροθαλής αδελφός Φίλιππος Γ΄ Αρριδαίος είχε ήδη θανατωθεί από την Ολυμπιάδα το 317. Χωρίς πλέον αργεαδικό σύμβολο, οι Διάδοχοι ήταν ελεύθεροι, εντός ολίγων ετών, να αναλάβουν τον βασιλικό τίτλο εξ ιδίων και να ξανασυστήσουν τον μακεδονικό κόσμο ως σύστημα ανταγωνιστικών δυναστειών."
          },
          category: "political"
        }
      ]
    },
    {
      year: -306,
      era: {
        en: "Hellenistic Kingdoms",
        el: "Ελληνιστικά Βασίλεια"
      },
      events: [
        {
          title: {
            en: "Antigonus and Demetrius take the title of King",
            el: "Ο Αντίγονος και ο Δημήτριος παίρνουν τον τίτλο του Βασιλιά"
          },
          description: {
            en: "Antigonus I and his son Demetrius I declare themselves kings, followed soon after by Ptolemy, Seleucus, Lysimachus, and Cassander, formalizing the division into Hellenistic kingdoms.",
            el: "Ο Αντίγονος Α΄ και ο γιος του Δημήτριος Α΄ ανακηρύσσουν τον εαυτό τους βασιλείς, ακολουθούμενοι σύντομα από τον Πτολεμαίο, Σέλευκο, Λυσίμαχο και Κάσσανδρο, επισημοποιώντας τη διαίρεση σε ελληνιστικά βασίλεια."
          },
          extendedDescription: {
            en: "After Demetrius's spectacular naval victory over Ptolemy at Salamis in Cyprus, Antigonus the One-Eyed assumed the diadem and proclaimed his son co-king, presenting himself as the rightful continuator of Alexander's universal monarchy. The other dynasts, unwilling to be cast as mere satraps in such a scheme, swiftly took the same step: Ptolemy in Egypt, Seleucus in Asia, Lysimachus in Thrace and Cassander in Macedonia. The so-called Year of the Kings thus marked the formal abandonment of the fiction that the empire still belonged to the deceased Argead house and the public birth of a multi-state Hellenistic order. Each new king founded his legitimacy on personal achievement, especially military victory, and on dynastic cult rather than on hereditary right, a pattern that would shape Greek royal ideology for the next three centuries.",
            el: "Μετά την εντυπωσιακή ναυτική νίκη του Δημητρίου επί του Πτολεμαίου στη Σαλαμίνα της Κύπρου, ο Αντίγονος ο Μονόφθαλμος έθεσε το διάδημα και ανακήρυξε τον υιό του συμβασιλέα, παρουσιάζοντας τον εαυτό του ως τον νόμιμο συνεχιστή της οικουμενικής μοναρχίας του Αλεξάνδρου. Οι άλλοι δυνάστες, μη επιθυμούντες να εμφανίζονται ως απλοί σατράπες ενός τέτοιου σχήματος, έσπευσαν να πράξουν το ίδιο: ο Πτολεμαίος στην Αίγυπτο, ο Σέλευκος στην Ασία, ο Λυσίμαχος στη Θράκη και ο Κάσσανδρος στη Μακεδονία. Έτσι, το λεγόμενο Έτος των Βασιλέων σηματοδότησε την επίσημη εγκατάλειψη του πλάσματος ότι η αυτοκρατορία ανήκε ακόμη στον αποθανόντα οίκο των Αργεαδών και τη δημοσία γέννησιν μιας πολυκρατικής ελληνιστικής τάξεως. Κάθε νέος βασιλεύς θεμελίωνε τη νομιμότητά του στην προσωπική του επιτυχία, και ιδίως στη στρατιωτική νίκη, καθώς και στη δυναστική λατρεία, και όχι στο κληρονομικό δίκαιο, πρότυπο που θα διέπλαθε την ελληνική βασιλική ιδεολογία για τους επόμενους τρεις αιώνες."
          },
          category: "political"
        }
      ]
    },
    {
      year: -301,
      era: {
        en: "Hellenistic Kingdoms",
        el: "Ελληνιστικά Βασίλεια"
      },
      events: [
        {
          title: {
            en: "Battle of Ipsus",
            el: "Η μάχη της Ιψού"
          },
          description: {
            en: "Antigonus is defeated and killed by a coalition of the other Diadochi. His empire is divided, with Seleucus taking most of Asia and Lysimachus receiving western Asia Minor.",
            el: "Ο Αντίγονος ηττάται και σκοτώνεται από έναν συνασπισμό των άλλων Διαδόχων. Η αυτοκρατορία του διαιρείται, με τον Σέλευκο να παίρνει το μεγαλύτερο μέρος της Ασίας και τον Λυσίμαχο να λαμβάνει τη δυτική Μικρά Ασία."
          },
          extendedDescription: {
            en: "Fought in Phrygia in the spring of 301, Ipsus was the largest pitched battle of the Successor Wars, pitting the eighty-one-year-old Antigonus and Demetrius at the head of perhaps seventy thousand men against the combined armies of Seleucus, Lysimachus and Cassander. The decisive factor proved to be the four hundred Indian elephants that Seleucus had received from Chandragupta: deployed as a screen, they cut Demetrius's victorious cavalry off from the main phalanx, which was then enveloped and broken. Antigonus, refusing to flee, fell on the field, while Demetrius escaped to maintain a fugitive sea-power for another decade. The victors carved up his territories: Seleucus annexed Syria and the bulk of Asia, Lysimachus took western Asia Minor, and the dream of a single reunified Macedonian empire was extinguished for good.",
            el: "Διεξαχθείσα στη Φρυγία την άνοιξιν του 301, η μάχη της Ιψού υπήρξε η μεγαλύτερη παρατεταγμένη σύγκρουσις των πολέμων των Διαδόχων, αντιπαραθέτοντας τον ογδοντάχρονο Αντίγονο και τον Δημήτριο επικεφαλής περίπου εβδομήντα χιλιάδων ανδρών εναντίον των συνηνωμένων στρατιών του Σελεύκου, του Λυσιμάχου και του Κασσάνδρου. Καθοριστικός παράγων αποδείχθηκαν οι τετρακόσιοι ινδικοί ελέφαντες τους οποίους είχε λάβει ο Σέλευκος από τον Σανδρόκοττο: αναπτυχθέντες ως φραγμός, απέκοψαν το νικηφόρο ιππικό του Δημητρίου από την κυρία φάλαγγα, η οποία περικυκλώθηκε και διαλύθηκε. Ο Αντίγονος, αρνηθείς να φύγει, έπεσε στο πεδίο της μάχης, ενώ ο Δημήτριος διέφυγε διατηρώντας μία περιπλανώμενη ναυτική δύναμη επί μίαν ακόμη δεκαετίαν. Οι νικητές κατένειμαν τα εδάφη του: ο Σέλευκος προσήρτησε τη Συρία και το μέγιστον μέρος της Ασίας, ο Λυσίμαχος έλαβε τη δυτική Μικρά Ασία, και το όνειρον μιας ενιαίας μακεδονικής αυτοκρατορίας έσβησε διά παντός."
          },
          category: "military"
        }
      ]
    },
    {
      year: -300,
      era: {
        en: "Philosophical Schools",
        el: "Φιλοσοφικές Σχολές"
      },
      events: [
        {
          title: {
            en: "Zeno founds Stoicism",
            el: "Ο Ζήνων ιδρύει τον Στωικισμό"
          },
          description: {
            en: "Zeno of Citium establishes the Stoic school in Athens, teaching that virtue is sufficient for happiness and that one should live in accordance with nature and reason.",
            el: "Ο Ζήνων του Κιτίου ιδρύει τη Στωική σχολή στην Αθήνα, διδάσκοντας ότι η αρετή είναι επαρκής για την ευτυχία και ότι ο άνθρωπος πρέπει να ζει σύμφωνα με τη φύση και τον λόγο."
          },
          extendedDescription: {
            en: "A Phoenician merchant who is said to have turned to philosophy after a shipwreck cast him onto the shores of Attica, Zeno gathered his disciples beneath the Stoa Poikile, the painted colonnade in the Athenian Agora that gave the school its name. Drawing on Cynic ethics, Heraclitean physics and Megarian dialectic, he and his successors Cleanthes and Chrysippus elaborated a tightly integrated system of logic, natural philosophy and ethics, in which the cosmos is governed by a rational divine fire and human happiness lies in the cultivation of virtue and assent in conformity with nature. Stoicism flourished alongside the rival schools of Epicurus and the sceptical Academy and proved peculiarly suited to a world of cosmopolitan kingdoms, ultimately providing much of the moral vocabulary of Roman civic life and, through Cicero, Seneca and Marcus Aurelius, of the later Western tradition.",
            el: "Φοίνιξ έμπορος που λέγεται ότι εστράφη στη φιλοσοφία μετά από ναυάγιον το οποίο τον εξέβρασε στις ακτές της Αττικής, ο Ζήνων συγκέντρωνε τους μαθητές του υπό την Ποικίλην Στοάν, την κιονοστοιχίαν με τις ζωγραφιές στην Αθηναϊκή Αγορά που έδωσε στη σχολή το όνομά της. Αντλώντας από την κυνικήν ηθικήν, την ηρακλείτειον φυσικήν και την μεγαρικήν διαλεκτικήν, εκείνος και οι διάδοχοί του Κλεάνθης και Χρύσιππος επεξεργάσθησαν ένα στενά συνδεδεμένο σύστημα λογικής, φυσικής και ηθικής, κατά το οποίον ο κόσμος κυβερνάται από ένα έλλογο θείον πυρ και η ευδαιμονία του ανθρώπου έγκειται στην καλλιέργειαν της αρετής και της ορθής συγκαταθέσεως κατά φύσιν. Ο Στωικισμός άνθησε παραλλήλως προς τις αντίπαλες σχολές του Επικούρου και της σκεπτικής Ακαδημίας και αποδείχθηκε ιδιαιτέρως κατάλληλος για τον κόσμο των κοσμοπολιτικών βασιλείων, παρέχοντας τελικώς το μεγαλύτερο μέρος του ηθικού λεξιλογίου του ρωμαϊκού δημόσιου βίου και, μέσω του Κικέρωνος, του Σενέκα και του Μάρκου Αυρηλίου, της κατοπινής δυτικής παραδόσεως."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -295,
      era: {
        en: "Cultural Development",
        el: "Πολιτιστική Ανάπτυξη"
      },
      events: [
        {
          title: {
            en: "Library of Alexandria founded",
            el: "Ίδρυση της Βιβλιοθήκης της Αλεξάνδρειας"
          },
          description: {
            en: "Ptolemy I establishes the Library of Alexandria, which becomes the greatest center of learning in the ancient world, housing up to 700,000 scrolls.",
            el: "Ο Πτολεμαίος Α΄ ιδρύει τη Βιβλιοθήκη της Αλεξάνδρειας, που γίνεται το μεγαλύτερο κέντρο μάθησης του αρχαίου κόσμου, στεγάζοντας έως 700.000 πάπυρους."
          },
          extendedDescription: {
            en: "Conceived under Ptolemy I Soter on the advice, according to tradition, of the Aristotelian Demetrius of Phaleron, and brought to fruition by his son Ptolemy II Philadelphus, the Library was the textual arm of a larger research institute, the Mouseion, housed within the royal quarter of Alexandria. Royal agents systematically purchased or copied books across the Greek-speaking world; ships entering the harbour were reportedly searched for unknown texts, which were retained while only copies were returned to their owners. The collection underpinned the great editorial labours of Hellenistic scholarship, including Zenodotus's recension of Homer, Callimachus's Pinakes catalogue and the geographical and astronomical work of Eratosthenes and Aristarchus. Ancient claims of three or seven hundred thousand rolls are debated and probably exaggerated, but the Library remained the symbol of organised learning until its slow decline under Roman rule.",
            el: "Συλληφθείσα υπό του Πτολεμαίου Α΄ Σωτήρος κατά παράδοσιν με τη συμβουλή του αριστοτελικού Δημητρίου του Φαληρέως και ολοκληρωθείσα από τον υιόν του Πτολεμαίον Β΄ Φιλάδελφον, η Βιβλιοθήκη αποτελούσε το γραμματειακό σκέλος μιας ευρύτερης ερευνητικής ιδρύσεως, του Μουσείου, που στεγαζόταν εντός της βασιλικής συνοικίας της Αλεξανδρείας. Βασιλικοί απεσταλμένοι αγόραζαν ή αντέγραφαν συστηματικώς βιβλία ανά τον ελληνόφωνον κόσμον· τα πλοία που κατέπλεαν στον λιμένα ερευνώντο, λέγεται, για άγνωστα κείμενα, τα οποία κατακρατούντο, ενώ στους κυρίους τους επιστρέφοντο μόνον αντίγραφα. Η συλλογή υποστήριξε τα μεγάλα φιλολογικά έργα της ελληνιστικής λογιοσύνης, μεταξύ των οποίων η ομηρική έκδοσις του Ζηνοδότου, οι Πίνακες του Καλλιμάχου και τα γεωγραφικά και αστρονομικά έργα του Ερατοσθένους και του Αριστάρχου. Οι αρχαίοι ισχυρισμοί περί τριακοσίων ή επτακοσίων χιλιάδων κυλίνδρων αμφισβητούνται και πιθανότατα είναι υπερβολικοί, όμως η Βιβλιοθήκη παρέμεινε σύμβολον της οργανωμένης μαθήσεως μέχρι την αργή της παρακμή υπό τη ρωμαϊκή κυριαρχία."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -285,
      era: {
        en: "Ptolemaic Egypt",
        el: "Πτολεμαϊκή Αίγυπτος"
      },
      events: [
        {
          title: {
            en: "Ptolemy I abdicates",
            el: "Ο Πτολεμαίος Α΄ παραιτείται"
          },
          description: {
            en: "Ptolemy I Soter abdicates in favor of his son Ptolemy II Philadelphus, who becomes one of the most successful and cultured Hellenistic rulers.",
            el: "Ο Πτολεμαίος Α΄ Σωτήρ παραιτείται υπέρ του γιου του Πτολεμαίου Β΄ Φιλάδελφου, που γίνεται ένας από τους πιο επιτυχημένους και πολιτισμένους ελληνιστικούς ηγέτες."
          },
          extendedDescription: {
            en: "By preferring his younger son by Berenice over the elder Ptolemy Ceraunus, the founder of the dynasty engineered an orderly transmission of power virtually unique among the Successors and so set a template that the Lagid house would follow for two and a half centuries. Ptolemy II inherited a kingdom that was already the wealthiest of the Hellenistic states, sustained by the agricultural surplus of the Nile, the silver of Cyprus and a near monopoly on Mediterranean grain. His long reign saw the consolidation of the dynastic ruler cult, exemplified by his marriage to his sister Arsinoe II in the Egyptian fashion, the celebration of the spectacular Grand Procession recorded by Callixeinus, and the steady patronage of the Mouseion and Library. Under Philadelphus Alexandria became, beyond dispute, the greatest cultural and economic city of the Greek world.",
            el: "Προκρίνοντας τον νεότερον υιόν του από την Βερενίκην έναντι του πρεσβυτέρου Πτολεμαίου Κεραυνού, ο ιδρυτής της δυναστείας μηχανεύθηκε μίαν ομαλή μεταβίβασιν εξουσίας σχεδόν μοναδική μεταξύ των Διαδόχων, θέτοντας έτσι το πρότυπον που θα ακολουθούσε ο Λαγίδης οίκος επί δυόμισι αιώνες. Ο Πτολεμαίος Β΄ κληρονόμησε ένα βασίλειον που ήταν ήδη το πλουσιότερον των ελληνιστικών κρατών, στηριζόμενον στο γεωργικό πλεόνασμα του Νείλου, στον άργυρον της Κύπρου και σε ένα οιονεί μονοπώλιον της σιτοπαραγωγής της Μεσογείου. Η μακρά βασιλεία του είδε την παγίωσιν της δυναστικής λατρείας, εκφραζομένην με τον γάμον του με την αδελφήν του Αρσινόην Β΄ κατά το αιγυπτιακόν έθος, τον πανηγυρισμόν της εντυπωσιακής Μεγάλης Πομπής που κατέγραψε ο Καλλίξεινος, και τη σταθερή προστασίαν του Μουσείου και της Βιβλιοθήκης. Επί Φιλαδέλφου η Αλεξάνδρεια κατέστη αναμφισβητήτως η μεγαλυτέρα πολιτιστική και οικονομική πόλις του ελληνικού κόσμου."
          },
          category: "political"
        }
      ]
    },
    {
      year: -281,
      era: {
        en: "Hellenistic Kingdoms",
        el: "Ελληνιστικά Βασίλεια"
      },
      events: [
        {
          title: {
            en: "Death of Seleucus I",
            el: "Ο θάνατος του Σελεύκου Α΄"
          },
          description: {
            en: "Seleucus I is assassinated by Ptolemy Ceraunus, who briefly seizes the Macedonian throne before being killed by invading Gauls.",
            el: "Ο Σέλευκος Α΄ δολοφονείται από τον Πτολεμαίο Κεραυνό, που καταλαμβάνει για λίγο τον μακεδονικό θρόνο πριν σκοτωθεί από εισβάλλοντες Γαλάτες."
          },
          extendedDescription: {
            en: "Having defeated and killed Lysimachus at Corupedium earlier the same year, Seleucus crossed the Hellespont in old age intending, after half a century in Asia, to return at last to the Macedonia of his birth. He was struck down at Lysimacheia by Ptolemy Ceraunus, the disinherited eldest son of Ptolemy I, whom he had received as a guest. Ceraunus, whose epithet 'Thunderbolt' captured both his impetuousness and his violence, swiftly had himself acclaimed king by the Macedonian army, married his half-sister Arsinoe II in order to seize her sons' inheritance and then murdered the children. His usurpation lasted barely two years before he fell in battle against the invading Galatians; the assassination of Seleucus thus deprived the Hellenistic world of its last surviving founder and plunged Macedonia into a generation of instability.",
            el: "Έχοντας νικήσει και θανατώσει τον Λυσίμαχον στο Κουροπέδιον νωρίτερον το ίδιο έτος, ο Σέλευκος επέρασε σε προχωρημένη ηλικία τον Ελλήσποντον με σκοπόν, ύστερα από μισόν αιώνα στην Ασία, να επιστρέψει επιτέλους στη Μακεδονία της γεννήσεώς του. Δολοφονήθηκε στη Λυσιμάχειαν από τον Πτολεμαίον Κεραυνόν, τον αποκληρωμένον πρεσβύτερον υιόν του Πτολεμαίου Α΄, τον οποίον είχε δεχθεί ως φιλοξενούμενον. Ο Κεραυνός, του οποίου το επώνυμον αποτύπωνε τόσο την παρόρμησιν όσο και τη βιαιότητά του, ανηγορεύθη ταχέως βασιλεύς από τον μακεδονικόν στρατόν, ενυμφεύθη την ετεροθαλή αδελφήν του Αρσινόην Β΄ προκειμένου να αρπάξει την κληρονομίαν των υιών της και κατόπιν εφόνευσε τα παιδιά. Η σφετερισμένη του εξουσία μόλις διήρκεσε δύο έτη πριν πέσει σε μάχην εναντίον των εισβαλόντων Γαλατών· η δολοφονία του Σελεύκου εστέρησε έτσι τον ελληνιστικόν κόσμον από τον τελευταίον επιζώντα ιδρυτήν του και εβύθισε τη Μακεδονίαν σε μίαν γενεάν αστάθειας."
          },
          category: "political"
        }
      ]
    },
    {
      year: -279,
      era: {
        en: "Gallic Invasions",
        el: "Γαλατικές Εισβολές"
      },
      events: [
        {
          title: {
            en: "Celtic invasion of the Balkans",
            el: "Κελτική εισβολή στα Βαλκάνια"
          },
          description: {
            en: "Large Celtic forces invade Macedonia and Greece, defeating the Macedonian king Ptolemy Ceraunus, who is killed. The Gauls eventually settle in Thrace.",
            el: "Μεγάλες κελτικές δυνάμεις εισβάλλουν στη Μακεδονία και την Ελλάδα, νικώντας τον μακεδονικό βασιλιά Πτολεμαίο Κεραυνό, που σκοτώνεται. Οι Γαλάτες τελικά εγκαθίστανται στη Θράκη."
          },
          extendedDescription: {
            en: "Streaming south from the middle Danube in three great hosts under Bolgios, Brennus and Cerethrius, the Galatian peoples confronted the unstable kingdoms of the southern Balkans almost simultaneously with the death of Seleucus. Ptolemy Ceraunus, refusing to take the threat seriously, was defeated and beheaded; thereafter Brennus pressed on into central Greece, where his army was repelled at the pass of Thermopylae and broken before the sanctuary of Delphi, an event the Greeks celebrated as a second Persian defeat sent by Apollo himself. Some of the survivors crossed into Asia Minor at the invitation of Nicomedes of Bithynia, where they would become the Galatians of central Anatolia, while others settled in eastern Thrace under the kingdom of Tylis. The crisis ultimately allowed Antigonus Gonatas, victor over a Galatian band at Lysimacheia in 277, to seize the Macedonian throne.",
            el: "Κατερχόμενοι από τον μέσον Δούναβιν εις τρία μεγάλα στίφη υπό τον Βόλγιον, τον Βρέννον και τον Κερέθριον, οι Γαλατικοί λαοί ευρέθησαν αντιμέτωποι με τα ασταθή βασίλεια της νοτίου Βαλκανικής σχεδόν συγχρόνως προς τον θάνατον του Σελεύκου. Ο Πτολεμαίος Κεραυνός, αρνούμενος να εκτιμήσει σοβαρώς την απειλήν, ηττήθη και απεκεφαλίσθη· εν συνεχεία ο Βρέννος προήλασε εις την κεντρικήν Ελλάδα, όπου ο στρατός του απεκρούσθη εις τα στενά των Θερμοπυλών και κατεστράφη ενώπιον του ιερού των Δελφών, γεγονός που οι Έλληνες εώρτασαν ως δευτέραν περσικήν ήτταν αποσταλμένην από τον ίδιον τον Απόλλωνα. Ορισμένοι εκ των επιζώντων διέβησαν εις τη Μικράν Ασίαν μετά πρόσκλησιν του Νικομήδους της Βιθυνίας, όπου θα αποτελούσαν τους Γαλάτας της κεντρικής Ανατολίας, ενώ άλλοι εγκατεστάθησαν εις την ανατολικήν Θράκην υπό το βασίλειον της Τύλιδος. Η κρίσις επέτρεψεν εν τέλει εις τον Αντίγονον Γονατάν, νικητήν επί γαλατικής φάλαγγος εις τη Λυσιμάχειαν το 277, να καταλάβει τον μακεδονικόν θρόνον."
          },
          category: "military"
        }
      ]
    },
    {
      year: -276,
      era: {
        en: "Hellenistic Kingdoms",
        el: "Ελληνιστικά Βασίλεια"
      },
      events: [
        {
          title: {
            en: "Antiochus I defeats the Gauls",
            el: "Ο Αντίοχος Α΄ νικά τους Γαλάτες"
          },
          description: {
            en: "Antiochus I Soter defeats invading Gauls in the 'Elephant Victory', earning his surname 'Savior' and securing the Seleucid Asian territories.",
            el: "Ο Αντίοχος Α΄ Σωτήρ νικά τους εισβάλλοντες Γαλάτες στη 'Νίκη των Ελεφάντων', κερδίζοντας το επώνυμό του 'Σωτήρ' και εξασφαλίζοντας τα ασιατικά εδάφη των Σελευκιδών."
          },
          extendedDescription: {
            en: "The Galatian bands that had crossed into Asia Minor at the invitation of Nicomedes of Bithynia had spent half a decade ravaging the Greek cities of the western seaboard, exacting tribute and threatening the cohesion of the Seleucid west. Antiochus, son of Seleucus I and the Iranian noblewoman Apama, met them somewhere in central Anatolia with a force whose decisive arm was a screen of sixteen Indian war elephants, animals the Galatians had never faced. According to Lucian's account, the elephants panicked the Celtic horse and chariot squadrons and the day was won with little Macedonian loss. The grateful Greek cities hailed Antiochus as Soter, 'Saviour', and the surviving Galatians were eventually confined to the highland region thereafter known as Galatia, ending their threat to Seleucid Asia.",
            el: "Τα γαλατικά στίφη που είχαν διαπεραιωθεί εις τη Μικράν Ασίαν κατόπιν προσκλήσεως του Νικομήδους της Βιθυνίας είχαν επί μίαν πενταετίαν λεηλατήσει τας ελληνικάς πόλεις της δυτικής παραλίας, εισπράττοντες φόρον υποτελείας και απειλούντες τη συνοχήν της σελευκιδικής δύσεως. Ο Αντίοχος, υιός του Σελεύκου Α΄ και της Ιρανής αρχόντισσας Απάμας, τους αντιμετώπισε κάπου εις τη μέσην Ανατολίαν με δύναμιν, της οποίας καθοριστικόν όπλον υπήρξεν φραγμός δεκαέξι ινδικών πολεμικών ελεφάντων, ζώων αγνώστων εις τους Γαλάτας. Κατά τον Λουκιανόν, οι ελέφαντες ετάραξαν το κελτικόν ιππικόν και τα άρματα και η μάχη εκερδήθη με ελάχιστας μακεδονικάς απωλείας. Αι ευγνώμονες ελληνικαί πόλεις αναγόρευσαν τον Αντίοχον Σωτήρα, και οι επιζώντες Γαλάται περιωρίσθησαν τελικώς εις την ορεινήν περιοχήν που έκτοτε ωνομάσθη Γαλατία, παύοντες να απειλούν τη σελευκιδικήν Ασίαν."
          },
          category: "military"
        }
      ]
    },
    {
      year: -267,
      era: {
        en: "Hellenistic Greece",
        el: "Ελληνιστική Ελλάδα"
      },
      events: [
        {
          title: {
            en: "Cremonidean War",
            el: "Ο Κρεμωνίδειος Πόλεμος"
          },
          description: {
            en: "Athens and Sparta, supported by Ptolemaic Egypt, rebel against Macedonian rule. The war ends in Macedonian victory and further loss of Greek independence.",
            el: "Η Αθήνα και η Σπάρτη, με την υποστήριξη της Πτολεμαϊκής Αιγύπτου, επαναστατούν ενάντια στη μακεδονική κυριαρχία. Ο πόλεμος τελειώνει με μακεδονική νίκη και περαιτέρω απώλεια της ελληνικής ανεξαρτησίας."
          },
          extendedDescription: {
            en: "Named after the Athenian statesman Chremonides, whose decree in alliance with Sparta and Ptolemy II announced a fresh war for Greek freedom, the conflict was the most ambitious attempt to break Macedonian hegemony since the Lamian War. Antigonus II Gonatas, master of the strategic fortresses Chalcis, Demetrias and the Acrocorinth, methodically blockaded Attica while the Spartan king Areus failed to break through the isthmus and the Ptolemaic admiral Patroclus, encamped on the offshore island that still bears his name, dared not engage the Macedonian fleet. After several years of siege, Athens capitulated around 261 and was forced to admit a permanent garrison on the Mouseion hill; Sparta, exhausted, retreated into provincialism. The settlement confirmed Macedonian dominance over Greece for almost half a century.",
            el: "Ο πόλεμος, λαβών το όνομά του από τον Αθηναίον πολιτικόν Χρεμωνίδην, του οποίου το ψήφισμα εν συμμαχία προς την Σπάρτην και τον Πτολεμαίον Β΄ εκήρυξε νέαν πάλην υπέρ της ελευθερίας των Ελλήνων, υπήρξεν η πλέον φιλόδοξος απόπειρα κατάλυσης της μακεδονικής ηγεμονίας μετά τον Λαμιακόν Πόλεμον. Ο Αντίγονος Β΄ Γονατάς, κύριος των στρατηγικών φρουρίων της Χαλκίδος, της Δημητριάδος και του Ακροκορίνθου, απέκλεισε μεθοδικώς την Αττικήν, ενώ ο Σπαρτιάτης βασιλεύς Αρεύς απέτυχε να διαβεί τον Ισθμόν και ο Πτολεμαϊκός ναύαρχος Πάτροκλος, αγκυροβολημένος εις την νησίδα που έκτοτε φέρει το όνομά του, δεν ετόλμησε να συγκρουσθεί με τον μακεδονικόν στόλον. Μετά πολυετή πολιορκίαν, αι Αθήναι παρεδόθησαν περί το 261 και ηναγκάσθησαν να δεχθούν μόνιμον φρουράν εις τον λόφον του Μουσείου· η Σπάρτη, εξηντλημένη, απεσύρθη εις την επαρχιακήν αφάνειαν. Η διευθέτησις επεκύρωσε τη μακεδονικήν κυριαρχίαν επί της Ελλάδος για μισόν σχεδόν αιώνα."
          },
          category: "military"
        }
      ]
    },
    {
      year: -260,
      era: {
        en: "Syrian Wars",
        el: "Συριακοί Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "Second Syrian War begins",
            el: "Αρχή του Δεύτερου Συριακού Πολέμου"
          },
          description: {
            en: "Ptolemy II and Antiochus II fight over control of Coele-Syria and Phoenicia. The war ends inconclusively with minor territorial exchanges.",
            el: "Ο Πτολεμαίος Β΄ και ο Αντίοχος Β΄ μάχονται για τον έλεγχο της Κοίλης Συρίας και της Φοινίκης. Ο πόλεμος τελειώνει χωρίς αποτέλεσμα με μικρές εδαφικές ανταλλαγές."
          },
          extendedDescription: {
            en: "The Second Syrian War arose from Antiochus II's determination to recover the cities of western Asia Minor and the Aegean coast that had been seized by Ptolemy II during the First Syrian War. Allied with Antigonus Gonatas of Macedonia, who had defeated the Ptolemaic fleet at Cos, Antiochus pressed the Lagid garrisons hard along the Ionian seaboard, while Cyrene revolted from Ptolemaic control under the local dynast Magas. The fighting ranged across Phoenicia, Cilicia and the islands and was sealed in 253 by a peace by which Antiochus repudiated his queen Laodice and married Ptolemy's daughter Berenice Syra. Although the territorial gains for the Seleucids were modest, the dynastic marriage planted the seeds of a far graver conflict, since Berenice's claim to the succession would soon ignite the Third Syrian War.",
            el: "Ο Δεύτερος Συριακός Πόλεμος επήγασεν εκ της αποφάσεως του Αντιόχου Β΄ να ανακτήσει τας πόλεις της δυτικής Μικράς Ασίας και της αιγαιακής παραλίας που είχαν καταληφθεί από τον Πτολεμαίον Β΄ κατά τον Πρώτον Συριακόν Πόλεμον. Εν συμμαχία προς τον Αντίγονον Γονατάν της Μακεδονίας, ο οποίος είχε νικήσει τον πτολεμαϊκόν στόλον εις την Κω, ο Αντίοχος επίεσε σκληρά τας λαγίδειους φρουράς κατά μήκος των ιωνικών ακτών, ενώ η Κυρήνη απεστάτησεν από την πτολεμαϊκήν εξουσίαν υπό τον επιτόπιον δυνάστην Μάγαν. Αι μάχαι εξετυλίχθησαν εις τη Φοινίκην, την Κιλικίαν και τα νησιά, και επεσφραγίσθησαν το 253 διά συνθήκης ειρήνης, καθ' ην ο Αντίοχος απεκήρυξε τη βασίλισσάν του Λαοδίκην και ενυμφεύθη την κόρην του Πτολεμαίου Βερενίκην Σύραν. Αν και τα εδαφικά κέρδη των Σελευκιδών υπήρξαν μέτρια, ο δυναστικός γάμος εφύτευσε τον σπόρον πολύ βαρυτέρας συγκρούσεως, καθώς η αξίωσις της Βερενίκης επί της διαδοχής θα ανέφλεγε σύντομα τον Τρίτον Συριακόν Πόλεμον."
          },
          category: "military"
        }
      ]
    },
    {
      year: -246,
      era: {
        en: "Syrian Wars",
        el: "Συριακοί Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "Third Syrian War",
            el: "Ο Τρίτος Συριακός Πόλεμος"
          },
          description: {
            en: "Also known as the Laodicean War, it breaks out over disputed succession in both Egypt and Syria. Ptolemy III invades Syria, reaching Babylon before being forced to withdraw.",
            el: "Γνωστός και ως Λαοδίκειος Πόλεμος, ξεσπά λόγω αμφισβητούμενης διαδοχής τόσο στην Αίγυπτο όσο και στη Συρία. Ο Πτολεμαίος Γ΄ εισβάλλει στη Συρία, φτάνοντας μέχρι τη Βαβυλώνα πριν αναγκαστεί να αποσυρθεί."
          },
          extendedDescription: {
            en: "When Antiochus II died suddenly in 246, his repudiated wife Laodice and her son Seleucus II contested the throne against the infant son of Berenice Syra at Antioch. Ptolemy III Euergetes, Berenice's brother, marched east at the head of a great army to defend his sister and nephew, only to discover on his arrival that they had already been murdered. In a campaign of striking reach, recorded in the so-called Adulis Inscription and on the Gurob Papyrus, he overran Syria and Mesopotamia, advancing as far as Seleuceia on the Tigris and reportedly even into Iran, before a revolt at home compelled him to return. The peace of 241 left Egypt with Seleuceia in Pieria, the port of Antioch, and a string of footholds along the Phoenician coast, marking the apogee of Ptolemaic territorial power.",
            el: "Όταν ο Αντίοχος Β΄ απέθανεν αιφνιδίως το 246, η αποκηρυχθείσα σύζυγός του Λαοδίκη και ο υιός της Σέλευκος Β΄ διεκδίκησαν τον θρόνον εναντίον του βρέφους υιού της Βερενίκης Σύρας εις την Αντιόχειαν. Ο Πτολεμαίος Γ΄ Ευεργέτης, αδελφός της Βερενίκης, εξεστράτευσεν προς ανατολάς επικεφαλής μεγάλης στρατιάς για να υπερασπισθεί την αδελφήν και τον ανεψιόν του, για να ανακαλύψει ότι κατά την άφιξίν του είχαν ήδη φονευθεί. Εις εκστρατείαν εντυπωσιακής εμβελείας, καταγεγραμμένην εις την λεγομένην Επιγραφήν της Αδούλιδος και εις τον Πάπυρον Γκιρόμπ, κατέλαβε τη Συρίαν και τη Μεσοποταμίαν, προελαύνοντας μέχρι τη Σελεύκειαν επί του Τίγρητος και κατά τα λεγόμενα έως και εντός του Ιράν, προτού επανάστασις εις τον οίκον του τον υποχρεώσει να επιστρέψει. Η ειρήνη του 241 άφησεν εις την Αίγυπτον τη Σελεύκειαν εν Πιερία, τον λιμένα της Αντιοχείας, και σειράν προγεφυρωμάτων εις τη φοινικικήν παραλίαν, σηματοδοτώντας τη μέγιστη εδαφική έκταση της πτολεμαϊκής δυνάμεως."
          },
          category: "military"
        }
      ]
    },
    {
      year: -241,
      era: {
        en: "Hellenistic Kingdoms",
        el: "Ελληνιστικά Βασίλεια"
      },
      events: [
        {
          title: {
            en: "War of the Brothers weakens the Seleucid Empire",
            el: "Ο Πόλεμος των Αδελφών αποδυναμώνει τη Σελευκιδική Αυτοκρατορία"
          },
          description: {
            en: "After the Third Syrian War, rivalry between Seleucus II and his brother Antiochus Hierax erupts into the War of the Brothers, deepening the empire's fragmentation.",
            el: "Μετά τον Τρίτο Συριακό Πόλεμο, η αντιπαλότητα μεταξύ του Σελεύκου Β΄ και του αδελφού του Αντιόχου Ιέρακος εκρήγνυται στον Πόλεμο των Αδελφών, επιτείνοντας τον κατακερματισμό της αυτοκρατορίας."
          },
          extendedDescription: {
            en: "While the date refers conventionally to the new troubles attending the close of the Third Syrian War, what crippled the dynasty was the so-called War of the Brothers between Seleucus II Callinicus and his younger brother Antiochus, nicknamed Hierax, the 'Hawk', whom their mother Laodice had set up as co-ruler in Asia Minor. Backed by Galatian mercenaries and the kingdoms of Pontus and Cappadocia, Hierax defeated Seleucus near Ancyra, but the war devolved into a destructive stalemate. While the Seleucid centre was thus paralysed, Pergamon under Attalus I won decisive victories over the Galatians and over Hierax himself, and the satrap Diodotus of Bactria and the Parni chieftain Arsaces seized the opportunity to detach the eastern provinces, founding the Greco-Bactrian and Parthian kingdoms. Seleucid imperial unity was permanently broken in this generation.",
            el: "Αν και η χρονολογία αναφέρεται συμβατικώς εις τας νέας περιπετείας που συνώδευσαν το πέρας του Τρίτου Συριακού Πολέμου, εκείνο που εκλόνισε τη δυναστείαν υπήρξεν ο λεγόμενος Πόλεμος των Αδελφών μεταξύ του Σελεύκου Β΄ Καλλινίκου και του νεωτέρου αδελφού του Αντιόχου, παρωνύμω Ιέρακος, τον οποίον η μήτηρ τους Λαοδίκη είχε προβάλει ως συμβασιλέα εις τη Μικράν Ασίαν. Με στήριγμα Γαλατών μισθοφόρων και των βασιλείων του Πόντου και της Καππαδοκίας, ο Ιέραξ ενίκησε τον Σέλευκον πλησίον της Αγκύρας, όμως ο πόλεμος εξεφυλίσθη εις καταστροφικόν αδιέξοδον. Ενώ το σελευκιδικόν κέντρον ήταν ούτω παραλελυμένον, η Πέργαμος υπό τον Άτταλον Α΄ έλαβε αποφασιστικάς νίκας επί των Γαλατών και επί του ιδίου του Ιέρακος, ενώ ο σατράπης Διόδοτος της Βακτρίας και ο πάρνιος αρχηγός Αρσάκης έδραξαν την ευκαιρίαν για να αποσπάσουν τας ανατολικάς επαρχίας, ιδρύοντες τα ελληνοβακτριανά και παρθικά βασίλεια. Η αυτοκρατορική ενότης των Σελευκιδών ερράγη οριστικώς εις αυτήν τη γενεάν."
          },
          category: "political"
        }
      ]
    },
    {
      year: -240,
      era: {
        en: "Scientific Achievement",
        el: "Επιστημονικό Επίτευγμα"
      },
      events: [
        {
          title: {
            en: "Eratosthenes calculates Earth's circumference",
            el: "Ο Ερατοσθένης υπολογίζει την περιφέρεια της Γης"
          },
          description: {
            en: "Eratosthenes of Cyrene, librarian at Alexandria, calculates the circumference of Earth with remarkable accuracy using geometry and observations of the sun.",
            el: "Ο Ερατοσθένης ο Κυρηναίος, βιβλιοθηκάριος στην Αλεξάνδρεια, υπολογίζει την περιφέρεια της Γης με αξιοσημείωτη ακρίβεια χρησιμοποιώντας γεωμετρία και παρατηρήσεις του ήλιου."
          },
          extendedDescription: {
            en: "Tutor to the future Ptolemy IV and third chief librarian of the Mouseion, Eratosthenes was the very type of the polymath that Hellenistic Alexandria produced, equally at home in mathematics, astronomy, geography, philology and verse. His celebrated measurement, preserved by Cleomedes, exploited the observation that on the summer solstice the sun cast no shadow at Syene, near modern Aswan, while at Alexandria, taken to lie due north on the same meridian, the angle of the gnomon was about one fiftieth of a circle. Multiplying the surveyed distance between the two cities by fifty, he obtained a figure of around 252,000 stades, equivalent to roughly 39,000 to 46,000 kilometres depending on which stade is meant, against a true value of about 40,075 kilometres. Eratosthenes also produced the first scientific map of the inhabited world, a chronological system reaching back to the fall of Troy, and the prime-number sieve that bears his name.",
            el: "Διδάσκαλος του μέλλοντος Πτολεμαίου Δ΄ και τρίτος αρχιβιβλιοθηκάριος του Μουσείου, ο Ερατοσθένης υπήρξεν ο τύπος κατ' εξοχήν του πολυμαθούς λογίου που έπλασεν η ελληνιστική Αλεξάνδρεια, εξ ίσου οικείος εις τα μαθηματικά, την αστρονομίαν, τη γεωγραφίαν, τη φιλολογίαν και την ποίησιν. Η περίφημος μέτρησίς του, διασωθείσα από τον Κλεομήδην, εστηρίχθη εις την παρατήρησιν ότι κατά το θερινόν ηλιοστάσιον ο ήλιος δεν έρριπτεν σκιάν εις τη Συήνην, πλησίον του σημερινού Ασσουάν, ενώ εις την Αλεξάνδρειαν, που εθεωρείτο κειμένη ακριβώς προς βορράν επί του ιδίου μεσημβρινού, η γωνία του γνώμονος ήταν περίπου εν πεντηκοστόν του κύκλου. Πολλαπλασιάζων τη μετρηθείσαν απόστασιν των δύο πόλεων επί πεντήκοντα, υπελόγισε περιφέρειαν περί τους 252.000 σταδίους, ήτοι 39.000 έως 46.000 χιλιόμετρα αναλόγως του σταδίου που υπενοείτο, έναντι της αληθούς τιμής των περίπου 40.075 χιλιομέτρων. Ο Ερατοσθένης συνέταξεν επίσης τον πρώτον επιστημονικόν χάρτην της οικουμένης, χρονολογικόν σύστημα ανατρέχον έως την Άλωσιν της Τροίας, και το γνωστόν με το όνομά του κόσκινον των πρώτων αριθμών."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -235,
      era: {
        en: "Spartan Revolution",
        el: "Σπαρτιατική Επανάστασις"
      },
      events: [
        {
          title: {
            en: "Cleomenes III's revolutionary kingship",
            el: "Η επαναστατική βασιλεία του Κλεομένους Γ΄"
          },
          description: {
            en: "King Cleomenes III seizes sole power at Sparta, abolishes debts, redistributes land and revives the Lycurgan constitution, briefly restoring Spartan ascendancy in the Peloponnese.",
            el: "Ο βασιλεύς Κλεομένης Γ΄ καταλαμβάνει την μοναρχικήν εξουσίαν εις τη Σπάρτην, καταργεί τα χρέη, αναδιανέμει τη γη και αναβιοί το λυκούργειον σύνταγμα, αποκαθιστών διά βραχύ διάστημα την σπαρτιατικήν υπεροχήν εις τη Πελοπόννησον."
          },
          extendedDescription: {
            en: "By the late third century the citizen body of Sparta had shrunk to barely seven hundred Spartiates, most of them landless and indebted, while a handful of wealthy households controlled the soil. Building on the abortive reforms of Agis IV, Cleomenes used a successful campaign against the Achaean League to secure popular support, then mounted a coup at home: he murdered the four ephors at dinner, abolished their office, exiled eighty oligarchs, cancelled debts and redistributed the land into four thousand kleroi. He restored the agoge, the messes, and the rigorous training that had defined the Lycurgan polity, enrolling perioikoi and resident aliens to refill the citizen rolls. The model proved formidable enough that the Achaean strategos Aratus, fearing social revolution, invited Antigonus III Doson of Macedonia to intervene. The new Spartan order was crushed at Sellasia in 222, but its memory inspired both later Spartan revolutionaries and modern theorists of social reform.",
            el: "Κατά τα τέλη του τρίτου αιώνος το πολιτικόν σώμα της Σπάρτης είχε συρρικνωθή εις μόλις επτακοσίους Σπαρτιάτας, οι πλείστοι των οποίων ήσαν ακτήμονες και κατάχρεοι, ενώ ολίγαι πλούσιαι οικίαι ήλεγχον το έδαφος. Στηριζόμενος επί των αποτυχόντων μεταρρυθμίσεων του Άγιδος Δ΄, ο Κλεομένης εξεμεταλλεύθη μίαν επιτυχή εκστρατείαν κατά της Αχαϊκής Συμπολιτείας διά να εξασφαλίση λαϊκήν υποστήριξιν και κατόπιν επραγματοποίησεν εις την πόλιν πραξικόπημα: εφόνευσε τους τέσσαρας εφόρους εις το δείπνον, κατήργησε το αξίωμά των, εξώρισεν ογδοήκοντα ολιγαρχικούς, ηκύρωσε τα χρέη και ανεδιένειμε τη γην εις τετρακιλίους κλήρους. Αποκατέστησε την αγωγήν, τα συσσίτια και τη σκληράν εκπαίδευσιν που είχε καθορίσει την λυκούργειον πολιτείαν, εγγράφων περιοίκους και μετοίκους εις τους πολιτικούς καταλόγους διά να τους αναπληρώσει. Το πρότυπον απεδείχθη τόσον φοβερόν ώστε ο αχαϊκός στρατηγός Άρατος, φοβούμενος κοινωνικήν επανάστασιν, εκάλεσε τον Αντίγονον Γ΄ Δώσωνα της Μακεδονίας να επέμβη. Η νέα σπαρτιατική τάξις συνετρίβη εις τη Σελλασίαν το 222, αλλ' η μνήμη της ενέπνευσε τόσον μεταγενεστέρους Σπαρτιάτας επαναστάτας όσον και νεωτέρους θεωρητικούς της κοινωνικής μεταρρυθμίσεως."
          },
          category: "political"
        }
      ]
    },
    {
      year: -223,
      era: {
        en: "Seleucid Revival",
        el: "Σελευκιδική Αναγέννηση"
      },
      events: [
        {
          title: {
            en: "Accession of Antiochus III",
            el: "Η ανάβαση του Αντίοχου Γ΄ στον θρόνο"
          },
          description: {
            en: "Antiochus III the Great becomes Seleucid king and begins ambitious campaigns to restore the empire's former glory, earning his epithet through military successes.",
            el: "Ο Αντίοχος Γ΄ ο Μέγας γίνεται βασιλιάς των Σελευκιδών και αρχίζει φιλόδοξες εκστρατείες για να αποκαταστήσει την παλιά δόξα της αυτοκρατορίας, κερδίζοντας το επώνυμό του μέσω των στρατιωτικών του επιτυχιών."
          },
          extendedDescription: {
            en: "Eighteen at his accession, Antiochus inherited an empire badly fragmented by the secessions of Bactria, Parthia, Pergamon, and parts of Asia Minor. Over the next two decades he reasserted Seleucid authority through a long anabasis east — reaching the Hindu Kush and renewing tributary relations with the Mauryas — that consciously emulated Alexander and earned him the title 'the Great.' His Fourth Syrian War with Egypt ended in defeat at Raphia, but he later recovered Coele-Syria and pushed into Thrace. The collision with Rome at Thermopylae and Magnesia, however, would expose the limits of Hellenistic military power against the legion and shrink his empire to its Syrian core.",
            el: "Δεκαοκτώ ετών κατά την ανάβαση στον θρόνο, ο Αντίοχος κληρονόμησε αυτοκρατορία βαθιά αποσπασματική, με τις αποστασίες της Βακτριανής, της Παρθίας, της Περγάμου και τμημάτων της Μικράς Ασίας. Μέσα στις επόμενες δύο δεκαετίες αποκατέστησε τη σελευκιδική εξουσία με μακρά ανάβαση προς ανατολάς — έφθασε ως τον Ινδικό Καύκασο και ανανέωσε τις φορολογικές σχέσεις με τους Μαυρυανούς — που μιμήθηκε συνειδητά τον Αλέξανδρο και του χάρισε τον τίτλο του 'Μεγάλου'. Ο Τέταρτος Συριακός Πόλεμός του με την Αίγυπτο έληξε με ήττα στη Ράφια, αλλά αργότερα ανέκτησε την Κοίλη Συρία και προχώρησε στη Θράκη. Η σύγκρουση με τη Ρώμη στις Θερμοπύλες και στη Μαγνησία θα αποκάλυπτε όμως τα όρια της ελληνιστικής στρατιωτικής ισχύος απέναντι στις λεγεώνες και θα συρρίκνωνε την αυτοκρατορία του στον συριακό πυρήνα της."
          },
          category: "political"
        }
      ]
    },
    {
      year: -221,
      era: {
        en: "Ptolemaic Egypt",
        el: "Πτολεμαϊκή Αίγυπτος"
      },
      events: [
        {
          title: {
            en: "Accession of Ptolemy IV",
            el: "Η ανάβαση του Πτολεμαίου Δ΄ στον θρόνο"
          },
          description: {
            en: "Ptolemy IV Philopator becomes ruler of Egypt. His reign is marked by military victory at Raphia but also by increasing internal decay and religious strife.",
            el: "Ο Πτολεμαίος Δ΄ Φιλοπάτωρ γίνεται κυβερνήτης της Αιγύπτου. Η βασιλεία του χαρακτηρίζεται από στρατιωτική νίκη στη Ράφια αλλά και από αυξανόμενη εσωτερική παρακμή και θρησκευτικές συγκρούσεις."
          },
          extendedDescription: {
            en: "Ptolemy IV's accession was steeped in palace blood: his minister Sosibius murdered the queen mother Berenice II, the king's brother Magas, and his uncle Lysimachus to clear the throne. Polybius portrays Philopator as a king devoted to luxury and Dionysiac mysteries while Sosibius and Agathocles ruled in his name. The arming of native Egyptians as a phalanx for Raphia, however, shifted the political balance: thereafter the Egyptian garrison troops who had won the battle backed a long native revolt centered on Thebes, which detached Upper Egypt from Alexandrian control for two decades. The dynasty's grip on its own kingdom would never fully recover.",
            el: "Η ανάβαση του Πτολεμαίου Δ΄ ήταν βαμμένη με ανακτορικό αίμα: ο υπουργός του Σωσίβιος δολοφόνησε τη βασιλομήτορα Βερενίκη Β΄, τον αδελφό του βασιλιά Μάγα και τον θείο του Λυσίμαχο για να εκκαθαρίσει τον θρόνο. Ο Πολύβιος παρουσιάζει τον Φιλοπάτορα ως βασιλιά αφοσιωμένο στην πολυτέλεια και τα διονυσιακά μυστήρια, ενώ ο Σωσίβιος και ο Αγαθοκλής κυβερνούσαν στο όνομά του. Ο εξοπλισμός των αυτοχθόνων Αιγυπτίων ως φάλαγγας για τη Ράφια, ωστόσο, μετατόπισε την πολιτική ισορροπία: έκτοτε οι Αιγύπτιοι φρουροί που είχαν κερδίσει τη μάχη υποστήριξαν μακρά ντόπια εξέγερση με κέντρο τις Θήβες, που απέσπασε την Άνω Αίγυπτο από τον αλεξανδρινό έλεγχο για δύο δεκαετίες. Η δυναστεία ποτέ δεν θα ανέκτησε πλήρως τον έλεγχο του ίδιου της του βασιλείου."
          },
          category: "political"
        }
      ]
    },
    {
      year: -220,
      era: {
        en: "Social War",
        el: "Συμμαχικός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Outbreak of the Social War",
            el: "Έκρηξη του Συμμαχικού Πολέμου"
          },
          description: {
            en: "The Hellenic League under Philip V of Macedon and the Achaeans goes to war against the Aetolian League, the last major contest among the Greek powers before Roman intervention.",
            el: "Η Ελληνική Συμπολιτεία υπό τον Φίλιππο Ε΄ της Μακεδονίας και τους Αχαιούς κηρύσσει πόλεμο εναντίον της Αιτωλικής Συμπολιτείας — η τελευταία μεγάλη αναμέτρηση μεταξύ των ελληνικών δυνάμεων πριν τη ρωμαϊκή επέμβαση."
          },
          extendedDescription: {
            en: "Aetolian raids into Messenia and Achaea provided the immediate provocation, but the deeper cause was the new alignment that Antigonus Doson had forged after Sellasia: a Hellenic League of Macedonia, Achaea, Boeotia, Phocis, Epirus and Thessaly, designed to contain the freebooting Aetolians and assert Macedonian leadership over the peninsula. The young Philip V threw himself into the campaign with energy, marching deep into Aetolia and storming the great federal sanctuary of Thermon, whose colonnades and dedications he razed in retaliation for similar Aetolian sacrileges. Polybius, our principal source, treats the war as the proving ground of Philip's character — initially energetic and just, then increasingly cruel and unscrupulous — and as the moment when Hellenistic affairs began to be drawn inexorably into the orbit of Rome. The Peace of Naupactus in 217 ended the war on terms of mutual exhaustion, but its true significance lay in the warning that Agelaus of Naupactus delivered there: that the cloud rising in the west, of Roman power, would soon engulf them all.",
            el: "Αιτωλικές επιδρομές στη Μεσσηνία και την Αχαΐα έδωσαν την άμεση αφορμή, αλλά η βαθύτερη αιτία ήταν η νέα διάταξη που είχε διαμορφώσει ο Αντίγονος Δώσων μετά τη Σελλασία: μία Ελληνική Συμπολιτεία της Μακεδονίας, της Αχαΐας, της Βοιωτίας, της Φωκίδας, της Ηπείρου και της Θεσσαλίας, σχεδιασμένη να αναχαιτίσει τους ληστρικούς Αιτωλούς και να επιβεβαιώσει την μακεδονική ηγεμονία στη χερσόνησο. Ο νέος Φίλιππος Ε΄ ρίχτηκε στην εκστρατεία με ενεργητικότητα, εισβάλλοντας βαθιά στην Αιτωλία και πορθώντας το μεγάλο ομοσπονδιακό ιερό του Θερμού, τις στοές και τα αναθήματα του οποίου ισοπέδωσε ως αντίποινα για ανάλογες αιτωλικές ιεροσυλίες. Ο Πολύβιος, η κύρια πηγή μας, αντιμετωπίζει τον πόλεμο ως δοκιμαστήριο του χαρακτήρα του Φιλίππου — αρχικά δραστήριου και δίκαιου, αργότερα ολοένα σκληρότερου και αδίστακτου — και ως τη στιγμή κατά την οποία οι ελληνιστικές υποθέσεις άρχισαν να σύρονται αναπότρεπτα στην τροχιά της Ρώμης. Η Ειρήνη της Ναυπάκτου το 217 τερμάτισε τον πόλεμο με όρους αμοιβαίας εξαντλήσεως, αλλά η αληθής της σημασία έγκειται στην προειδοποίηση που εκφώνησε εκεί ο Αγέλαος ο Ναυπάκτιος: ότι το νέφος που ανέτελλε στη Δύση, η ρωμαϊκή ισχύς, θα τους κατάπινε σύντομα όλους."
          },
          category: "military"
        }
      ]
    },
    {
      year: -217,
      era: {
        en: "Syrian Wars",
        el: "Συριακοί Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "Battle of Raphia",
            el: "Η μάχη της Ράφια"
          },
          description: {
            en: "Ptolemy IV defeats Antiochus III near Gaza in the Fourth Syrian War, temporarily securing Egypt's control over Coele-Syria. It's one of the largest Hellenistic battles.",
            el: "Ο Πτολεμαίος Δ΄ νικά τον Αντίοχο Γ΄ κοντά στη Γάζα στον Τέταρτο Συριακό Πόλεμο, εξασφαλίζοντας προσωρινά τον έλεγχο της Αιγύπτου στην Κοίλη Συρία. Είναι μια από τις μεγαλύτερες ελληνιστικές μάχες."
          },
          extendedDescription: {
            en: "About seventy thousand Ptolemaic troops, including a newly raised Egyptian phalanx of twenty thousand, faced sixty-eight thousand Seleucids in one of the largest engagements between Hellenistic kingdoms. Each side fielded scores of war elephants — Indian for the Seleucids, smaller African for the Ptolemies, whose animals quickly broke in fear. On the wings the cavalry exchanged blows with mixed success; the decision came in the center, where Ptolemy's reformed phalanx held and his army's reserves overwhelmed the Seleucid line. Antiochus retreated to Antioch and surrendered Coele-Syria, but the price for Egypt was the militarization of the native population, which soon turned its weapons against the Ptolemaic regime.",
            el: "Περίπου εβδομήντα χιλιάδες πτολεμαϊκοί στρατιώτες, μεταξύ των οποίων νεοσύστατη αιγυπτιακή φάλαγγα είκοσι χιλιάδων, αντιμετώπισαν εξήντα οκτώ χιλιάδες Σελευκίδες σε μία από τις μεγαλύτερες συγκρούσεις μεταξύ ελληνιστικών βασιλείων. Κάθε πλευρά παρέταξε δεκάδες πολεμικούς ελέφαντες — Ινδικούς για τους Σελευκίδες, μικρότερους αφρικανικούς για τους Πτολεμαίους, των οποίων τα ζώα γρήγορα διαλύθηκαν τρομαγμένα. Στα κέρατα το ιππικό αντάλλαξε χτυπήματα με ανάμικτη επιτυχία· η κρίση ήλθε στο κέντρο, όπου η αναμορφωμένη φάλαγγα του Πτολεμαίου άντεξε και οι εφεδρείες του στρατού του συνέτριψαν τη σελευκιδική γραμμή. Ο Αντίοχος υποχώρησε στην Αντιόχεια και παρέδωσε την Κοίλη Συρία, αλλά το τίμημα για την Αίγυπτο ήταν η στρατιωτικοποίηση του ντόπιου πληθυσμού, που σύντομα έστρεψε τα όπλα του εναντίον του πτολεμαϊκού καθεστώτος."
          },
          category: "military"
        }
      ]
    },
    {
      year: -200,
      era: {
        en: "Roman Intervention",
        el: "Ρωμαϊκή Παρέμβαση"
      },
      events: [
        {
          title: {
            en: "Seleucid victory at Panium",
            el: "Σελευκιδική νίκη στο Πάνιον"
          },
          description: {
            en: "Antiochus III defeats the Ptolemaic forces at Panium and secures Coele-Syria, while the Ptolemaic appeal to Rome signals growing Roman involvement in Hellenistic affairs.",
            el: "Ο Αντίοχος Γ΄ νικά τις πτολεμαϊκές δυνάμεις στο Πάνιον και εξασφαλίζει την Κοίλη Συρία, ενώ η πτολεμαϊκή έκκληση προς τη Ρώμη σηματοδοτεί την αυξανόμενη ρωμαϊκή εμπλοκή στις ελληνιστικές υποθέσεις."
          },
          extendedDescription: {
            en: "The traditional date of Panium is in fact the great Seleucid victory near the headwaters of the Jordan, where Antiochus III shattered the Ptolemaic army of Scopas and at last wrested Coele-Syria from Egypt — overturning Raphia's settlement of seventeen years earlier. Polybius preserves a fragment showing how Antiochus combined heavy cavalry with cataphract elephants and a deep phalanx to crush the Egyptian centre. The aftermath redrew the map: Phoenicia, Palestine, and Judaea passed to the Seleucids, where Jewish communities at first welcomed the change. The minor Roman contingent was not decisive, but the appeal of the young Ptolemy V's regents to the Senate marked the moment when Rome was first invited into the eastern balance of power.",
            el: "Η παραδοσιακή χρονολογία του Πανίου ανήκει στην πραγματικότητα στη μεγάλη σελευκιδική νίκη κοντά στις πηγές του Ιορδάνη, όπου ο Αντίοχος Γ΄ συνέτριψε τον πτολεμαϊκό στρατό του Σκόπα και τελικά απέσπασε την Κοίλη Συρία από την Αίγυπτο — ανατρέποντας τη ρύθμιση της Ράφιας δεκαεπτά χρόνια ενωρίτερα. Ο Πολύβιος διασώζει απόσπασμα όπου ο Αντίοχος συνδυάζει βαρύ ιππικό με καταφράκτους ελέφαντες και βαθιά φάλαγγα για να συντρίψει το αιγυπτιακό κέντρο. Οι συνέπειες ξανασχεδίασαν τον χάρτη: η Φοινίκη, η Παλαιστίνη και η Ιουδαία πέρασαν στους Σελευκίδες, όπου οι ιουδαϊκές κοινότητες χαιρέτισαν αρχικά την αλλαγή. Το μικρό ρωμαϊκό απόσπασμα δεν ήταν καθοριστικό, αλλά η έκκληση των επιτρόπων του νεαρού Πτολεμαίου Ε΄ προς τη Σύγκλητο σήμανε τη στιγμή κατά την οποία η Ρώμη προσκλήθηκε για πρώτη φορά στην ανατολική ισορροπία ισχύος."
          },
          category: "military"
        }
      ]
    },
    {
      year: -197,
      era: {
        en: "Roman Conquest",
        el: "Ρωμαϊκή Κατάκτηση"
      },
      events: [
        {
          title: {
            en: "Battle of Cynoscephalae",
            el: "Η μάχη των Κυνός Κεφαλών"
          },
          description: {
            en: "Rome defeats Philip V of Macedon, ending Macedonian dominance in Greece. This victory establishes Rome as the major power in the Greek world.",
            el: "Η Ρώμη νικά τον Φίλιππο Ε΄ της Μακεδονίας, τερματίζοντας τη μακεδονική κυριαρχία στην Ελλάδα. Αυτή η νίκη καθιερώνει τη Ρώμη ως τη μεγάλη δύναμη στον ελληνικό κόσμο."
          },
          extendedDescription: {
            en: "On the rocky 'Dog's Heads' ridges of Thessaly, the consul Titus Quinctius Flamininus brought the Second Macedonian War to its climax. The Macedonian phalanx of about twenty-five thousand met the legions in a confused encounter battle on broken ground, where the rigid sarissa formation could not maintain its line and Roman maniples turned the unprotected right rear of the phalanx with deadly effect. Some thirteen thousand Macedonians were killed or captured. Philip preserved his throne but lost his Greek possessions; at the Isthmian Games of 196, Flamininus proclaimed the 'freedom of the Greeks,' a slogan that delighted his audience but in fact inaugurated Rome as the arbiter of the Hellenic world.",
            el: "Στις βραχώδεις κορυφογραμμές των Κυνός Κεφαλών στη Θεσσαλία, ο ύπατος Τίτος Κουίντιος Φλαμινίνος έφερε τον Δεύτερο Μακεδονικό Πόλεμο στην κορύφωσή του. Η μακεδονική φάλαγγα περίπου είκοσι πέντε χιλιάδων αντιμετώπισε τις λεγεώνες σε σύγχυτη μάχη συνάντησης σε ανώμαλο έδαφος, όπου ο άκαμπτος σχηματισμός των σαρισών δεν μπόρεσε να διατηρήσει τη γραμμή του και οι ρωμαϊκές μανίπυλες κύκλωσαν τα απροστάτευτα νώτα του δεξιού κέρατος της φάλαγγας με ολέθριο αποτέλεσμα. Περίπου δεκατρείς χιλιάδες Μακεδόνες σκοτώθηκαν ή αιχμαλωτίστηκαν. Ο Φίλιππος διατήρησε τον θρόνο του, αλλά έχασε τις ελληνικές κτήσεις του· στα Ίσθμια του 196, ο Φλαμινίνος ανακήρυξε την 'ελευθερία των Ελλήνων', σύνθημα που ενθουσίασε το ακροατήριο, αλλά εγκαινίασε στην πραγματικότητα τη Ρώμη ως διαιτητή του ελληνικού κόσμου."
          },
          category: "military"
        }
      ]
    },
    {
      year: -192,
      era: {
        en: "Roman-Seleucid War",
        el: "Ρωμαϊκο-Σελευκιδικός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Antiochus invades Greece",
            el: "Ο Αντίοχος εισβάλλει στην Ελλάδα"
          },
          description: {
            en: "Antiochus III, invited by the Aetolian League, invades Greece with a small force. This provokes war with Rome, ending Hellenistic independence.",
            el: "Ο Αντίοχος Γ΄, προσκαλεσμένος από την Αιτωλική Συμμαχία, εισβάλλει στην Ελλάδα με μικρή δύναμη. Αυτό προκαλεί πόλεμο με τη Ρώμη, τερματίζοντας την ελληνιστική ανεξαρτησία."
          },
          extendedDescription: {
            en: "Encouraged by Hannibal — now in exile at his court — and lured by Aetolian appeals against Roman dominance, Antiochus crossed to Demetrias with only ten thousand men, expecting that the proclaimed Greek freedom would crumble at his appearance. Instead the Achaean League and most other states stayed loyal to Rome, and his attempt to hold Thermopylae against the consul Manius Acilius Glabrio in 191 ended in a familiar disaster: a flanking column under Cato turned the pass exactly as Xerxes' had done in 480. Antiochus retreated to Asia, his prestige shattered, leaving the Aetolians to face Roman vengeance and opening the way for the decisive engagement at Magnesia.",
            el: "Παρακινημένος από τον Αννίβα — εξόριστο πλέον στην αυλή του — και παρασυρμένος από τις αιτωλικές εκκλήσεις εναντίον της ρωμαϊκής κυριαρχίας, ο Αντίοχος διέβη στη Δημητριάδα με μόνο δέκα χιλιάδες άνδρες, αναμένοντας ότι η διακηρυγμένη ελευθερία των Ελλήνων θα κατέρρεε με την εμφάνισή του. Αντιθέτως, η Αχαϊκή Συμπολιτεία και οι περισσότερες άλλες πόλεις παρέμειναν πιστές στη Ρώμη, και η προσπάθειά του να κρατήσει τις Θερμοπύλες έναντι του υπάτου Μάνιου Ακιλίου Γλαβρίωνος το 191 κατέληξε σε γνώριμη καταστροφή: πλευρική φάλαγγα υπό τον Κάτωνα παρέκαμψε το πέρασμα ακριβώς όπως είχαν πράξει οι δυνάμεις του Ξέρξη το 480. Ο Αντίοχος υποχώρησε στην Ασία, με τη φήμη του διαλυμένη, αφήνοντας τους Αιτωλούς αντιμέτωπους με τη ρωμαϊκή εκδίκηση και ανοίγοντας τον δρόμο για την κρίσιμη μάχη της Μαγνησίας."
          },
          category: "military"
        }
      ]
    },
    {
      year: -190,
      era: {
        en: "Roman-Seleucid War",
        el: "Ρωμαϊκο-Σελευκιδικός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Battle of Magnesia",
            el: "Η μάχη της Μαγνησίας"
          },
          description: {
            en: "Romans and their allies decisively defeat Antiochus III, forcing him to accept a humiliating peace treaty that severely limits Seleucid power and territory.",
            el: "Οι Ρωμαίοι και οι σύμμαχοί τους νικούν αποφασιστικά τον Αντίοχο Γ΄, αναγκάζοντάς τον να αποδεχτεί μια ταπεινωτική συνθήκη ειρήνης που περιορίζει σοβαρά τη δύναμη και τα εδάφη των Σελευκιδών."
          },
          extendedDescription: {
            en: "Lucius Cornelius Scipio Asiaticus and his more famous brother Africanus crossed to Asia Minor and met Antiochus' grand army of perhaps seventy thousand on the Hermus plain near Magnesia ad Sipylum. Despite a disparity of nearly two to one in numbers, the Roman legions and Pergamene cavalry under Eumenes II routed both wings; the Seleucid scythed chariots panicked and crashed into their own lines, the cataphracts and elephants proved unwieldy in the rain-soaked terrain, and the phalanx was again outmaneuvered. The Treaty of Apamea (188) stripped Antiochus of all Asia Minor north of the Taurus, imposed a fifteen-thousand-talent indemnity, and forbade war elephants and a war fleet — beginning the irreversible decline of the Seleucid Empire.",
            el: "Ο Λεύκιος Κορνήλιος Σκιπίων ο Ασιατικός και ο διασημότερος αδελφός του Αφρικανός διέβησαν στη Μικρά Ασία και αντιμετώπισαν τη μεγαλειώδη στρατιά του Αντιόχου, ίσως εβδομήντα χιλιάδων ανδρών, στην πεδιάδα του Έρμου, κοντά στη Μαγνησία την επί Σιπύλω. Παρά τη σχεδόν διπλάσια αριθμητική υπεροχή των Σελευκιδών, οι ρωμαϊκές λεγεώνες και το περγαμηνό ιππικό υπό τον Ευμένη Β΄ έτρεψαν σε φυγή και τα δύο κέρατα· τα δρεπανηφόρα άρματα του Αντιόχου πανικοβλήθηκαν και έπεσαν επί των δικών τους γραμμών, οι κατάφρακτοι και οι ελέφαντες αποδείχθηκαν δύσχρηστοι στο βρεγμένο έδαφος και η φάλαγγα και πάλι παρακάμφθηκε. Η Συνθήκη της Απάμειας (188) αφαίρεσε από τον Αντίοχο όλη τη Μικρά Ασία βόρεια του Ταύρου, επέβαλε αποζημίωση δεκαπέντε χιλιάδων ταλάντων και απαγόρευσε τους πολεμικούς ελέφαντες και τον στόλο — εγκαινιάζοντας την αμετάκλητη παρακμή της Σελευκιδικής Αυτοκρατορίας."
          },
          category: "military"
        }
      ]
    },
    {
      year: -183,
      era: {
        en: "End of the Hellenistic Generals",
        el: "Τέλος των Ελληνιστικών Στρατηγών"
      },
      events: [
        {
          title: {
            en: "Death of Hannibal",
            el: "Ο θάνατος του Αννίβα"
          },
          description: {
            en: "Hannibal Barca, refugee at the court of Bithynia, takes poison rather than be surrendered to Rome — the same year that his great adversary Scipio Africanus dies in voluntary exile.",
            el: "Ο Αννίβας Βάρκας, πρόσφυγας στην αυλή της Βιθυνίας, αυτοκτονεί με δηλητήριο για να μην παραδοθεί στη Ρώμη — την ίδια χρονιά που και ο μεγάλος αντίπαλός του Σκιπίων ο Αφρικανός πεθαίνει σε εθελούσια εξορία."
          },
          extendedDescription: {
            en: "After leading Carthage to the brink of victory in the Second Punic War, Hannibal had returned home to reform the city's finances and constitution, only to be denounced by his domestic enemies and forced into exile when Roman commissioners arrived in 195. He took refuge first with Antiochus III, advising the king during the disastrous war that ended at Magnesia, and then, after Apamea required his surrender, fled in turn to Crete, to the Armenian kingdom of Artaxias, and finally to Prusias I of Bithynia, for whom he won a naval engagement against Pergamon by hurling pots of venomous snakes onto the enemy decks. When Flamininus came demanding his extradition in 183, Hannibal, surrounded in his fortified house at Libyssa, drank the poison he kept hidden in his ring, reportedly remarking that the Romans could no longer wait for an old man to die. Almost simultaneously Scipio Africanus, embittered by tribunician prosecution, died on his estate at Liternum and forbade his bones to be returned to Rome. The two men whose duel had decided the western Mediterranean ended their lives within months of each other, neither in his own city.",
            el: "Αφού οδήγησε την Καρχηδόνα στο χείλος της νίκης κατά τον Β΄ Καρχηδονιακό Πόλεμο, ο Αννίβας είχε επιστρέψει στην πατρίδα του για να μεταρρυθμίσει τα οικονομικά και το πολίτευμα της πόλης, μόνο για να καταγγελθεί από τους εσωτερικούς εχθρούς του και να αναγκαστεί σε εξορία όταν Ρωμαίοι επίτροποι έφθασαν το 195. Κατέφυγε πρώτα στον Αντίοχο Γ΄, συμβουλεύοντας τον βασιλιά κατά τον καταστροφικό πόλεμο που έληξε στη Μαγνησία, και κατόπιν, αφού η Συνθήκη της Απάμειας απαιτούσε την παράδοσή του, έφυγε διαδοχικά στην Κρήτη, στο αρμενικό βασίλειο του Αρταξία και τελικά στον Προυσία Α΄ της Βιθυνίας, για τον οποίο κέρδισε ναυμαχία εναντίον της Περγάμου εκτοξεύοντας πιθάρια με δηλητηριώδη φίδια στα εχθρικά καταστρώματα. Όταν ο Φλαμινίνος έφθασε ζητώντας την έκδοσή του το 183, ο Αννίβας, πολιορκημένος στο οχυρωμένο σπίτι του στη Λιβύσσα, ήπιε το δηλητήριο που κρατούσε κρυμμένο στο δαχτυλίδι του, σχολιάζοντας λέγεται ότι οι Ρωμαίοι δεν μπορούσαν πλέον να περιμένουν να πεθάνει ένας γέροντας. Σχεδόν ταυτόχρονα ο Σκιπίων ο Αφρικανός, πικραμένος από δίωξη δημάρχων, πέθανε στο κτήμα του στο Λίτερνο και απαγόρευσε την επιστροφή των οστών του στη Ρώμη. Οι δύο άνδρες των οποίων η μονομαχία είχε κρίνει τη δυτική Μεσόγειο τερμάτισαν τη ζωή τους μέσα σε λίγους μήνες ο ένας από τον άλλον, κανένας στην ίδια του την πόλη."
          },
          category: "military"
        }
      ]
    },
    {
      year: -167,
      era: {
        en: "Religious Persecution",
        el: "Θρησκευτική Δίωξη"
      },
      events: [
        {
          title: {
            en: "Antiochus IV persecutes Jews",
            el: "Ο Αντίοχος Δ΄ διώκει τους Εβραίους"
          },
          description: {
            en: "Antiochus IV Epiphanes bans Jewish religious practices, desecrates the Temple, and imposes Hellenizing decrees, triggering the Maccabean Revolt.",
            el: "Ο Αντίοχος Δ΄ Επιφανής απαγορεύει τις εβραϊκές θρησκευτικές πρακτικές, βεβηλώνει τον Ναό και επιβάλλει εξελληνιστικά διατάγματα, προκαλώντας την Επανάσταση των Μακκαβαίων."
          },
          extendedDescription: {
            en: "Returning humiliated from his second Egyptian invasion — turned back at Eleusis by the Roman envoy Popillius Laenas, who drew a circle in the sand around him — Antiochus channeled his frustration into Judaea, where Hellenizing high priests had already provoked civic factionalism. He garrisoned the Akra in Jerusalem, plundered the Temple, banned circumcision and the Sabbath under penalty of death, and ordered an altar to Olympian Zeus erected on the altar of burnt offering — the 'abomination of desolation' of Daniel and 1 Maccabees. Whether this was a deliberate policy of religious eradication or a misjudged reaction to revolt has been debated since antiquity. The persecution unified pious Jews and the dispossessed priesthood behind armed resistance.",
            el: "Επιστρέφοντας ταπεινωμένος από τη δεύτερη εισβολή του στην Αίγυπτο — έπειτα από την παρέμβαση του Ρωμαίου πρέσβη Ποπιλίου Λαίνα, που του χάραξε κύκλο γύρω του στην άμμο — ο Αντίοχος ξέσπασε την οργή του στην Ιουδαία, όπου οι εξελληνιστές αρχιερείς είχαν ήδη πυροδοτήσει εμφύλια αντιπαράθεση. Φρουρά εγκατέστησε στην Άκρα της Ιερουσαλήμ, λεηλάτησε τον Ναό, απαγόρευσε την περιτομή και το σάββατο επί ποινή θανάτου και διέταξε την ανέγερση βωμού του Ολυμπίου Διός επί του θυσιαστηρίου των ολοκαυτωμάτων — το 'βδέλυγμα της ερημώσεως' του Δανιήλ και του Α΄ Μακκαβαίων. Εάν επρόκειτο για συνειδητή πολιτική θρησκευτικής εξάλειψης ή για κακοδιαλεγμένη αντίδραση σε εξέγερση, αποτελεί αντικείμενο συζήτησης από την αρχαιότητα. Ο διωγμός ένωσε τους ευσεβείς Ιουδαίους και την εκπεσούσα ιερατική τάξη πίσω από την ένοπλη αντίσταση."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -168,
      era: {
        en: "Roman Conquest",
        el: "Ρωμαϊκή Κατάκτηση"
      },
      events: [
        {
          title: {
            en: "Battle of Pydna",
            el: "Η μάχη της Πύδνας"
          },
          description: {
            en: "Rome defeats Perseus of Macedon, ending the Antigonid dynasty and dissolving the Macedonian kingdom. Greece becomes a Roman protectorate.",
            el: "Η Ρώμη νικά τον Περσέα της Μακεδονίας, τερματίζοντας την Αντιγονιδική δυναστεία και διαλύοντας το μακεδονικό βασίλειο. Η Ελλάδα γίνεται ρωμαϊκό προτεκτοράτο."
          },
          extendedDescription: {
            en: "Lucius Aemilius Paullus brought the Third Macedonian War to an end on the slopes above the Pierian coast. Perseus' phalanx of forty-four thousand surged forward in good order — Polybius, who saw a phalanx in action, called it 'a sight as terrifying as anything ever seen' — but on uneven ground gaps opened in its line. Paullus ordered the legions to break into maniples and pour into those gaps, and the phalanx came apart at close quarters in a few hours. About twenty thousand Macedonians fell. Perseus surrendered shortly afterwards and was paraded in the Roman triumph. The kingdom was abolished and divided into four tributary republics; in 148 BC it was annexed as the Roman province of Macedonia. The political existence of independent Macedon, founded by the Argead kings, ended at Pydna.",
            el: "Ο Λεύκιος Αιμίλιος Παύλος έφερε στο τέλος του τον Τρίτο Μακεδονικό Πόλεμο στις πλαγιές υπεράνω της Πιερίας ακτής. Η φάλαγγα του Περσέα των σαράντα τεσσάρων χιλιάδων ανδρών προήλασε σε καλή τάξη — ο Πολύβιος, που είδε φάλαγγα εν δράσει, την αποκάλεσε 'θέαμα τρομερότερο από κάθε άλλο που είχα ποτέ αντικρίσει' — αλλά σε ανώμαλο έδαφος άνοιξαν κενά στη γραμμή της. Ο Παύλος διέταξε τις λεγεώνες να διασπαστούν σε μανίπυλες και να εισχωρήσουν σε εκείνα τα κενά, και η φάλαγγα διαλύθηκε εκ του συστάδην μέσα σε λίγες ώρες. Περίπου είκοσι χιλιάδες Μακεδόνες έπεσαν. Ο Περσέας παραδόθηκε λίγο μετά και πομπεύθηκε στον ρωμαϊκό θρίαμβο. Το βασίλειο καταργήθηκε και διαιρέθηκε σε τέσσερις φόρου υποτελείς δημοκρατίες· το 148 π.Χ. προσαρτήθηκε ως ρωμαϊκή επαρχία Μακεδονίας. Η πολιτική ύπαρξη της ανεξάρτητης Μακεδονίας, που ίδρυσαν οι Αργεάδες βασιλείς, τερματίστηκε στην Πύδνα."
          },
          category: "military"
        }
      ]
    },
    {
      year: -167,
      era: {
        en: "Jewish Revolt",
        el: "Εβραϊκή Επανάσταση"
      },
      events: [
        {
          title: {
            en: "Maccabean Revolt begins",
            el: "Αρχή της Επανάστασης των Μακκαβαίων"
          },
          description: {
            en: "Jewish revolt against Seleucid religious persecution begins under Mattathias and his sons. This leads to the establishment of the Hasmonean dynasty.",
            el: "Εβραϊκή εξέγερση ενάντια στη σελευκιδική θρησκευτική δίωξη αρχίζει υπό τον Ματταθία και τους γιους του. Αυτό οδηγεί στην ίδρυση της Ασμοναϊκής δυναστείας."
          },
          extendedDescription: {
            en: "When royal officers arrived at the village of Modein to enforce sacrifice to Zeus, the priest Mattathias killed an apostate Jew at the altar and the official with him, then fled with his five sons into the hills. After his death the next year, his son Judas, called Maccabaeus ('the Hammer'), waged guerrilla warfare against successive Seleucid armies in the Judaean uplands, defeating columns under Apollonius, Seron, Gorgias, and Lysias. In 164 the Temple was recaptured and rededicated — the origin of Hanukkah. Internal Seleucid weakness allowed his brothers Jonathan and Simon to convert military success into political autonomy, founding the Hasmonean dynasty that would rule Judaea until Pompey's intervention a century later.",
            el: "Όταν αυλικοί αξιωματούχοι έφτασαν στο χωριό Μωδίν για να επιβάλουν θυσία στον Δία, ο ιερέας Ματταθίας σκότωσε αποστάτη Ιουδαίο πάνω στον βωμό και τον αξιωματούχο μαζί του, και κατόπιν έφυγε με τους πέντε γιους του στα όρη. Μετά τον θάνατό του το επόμενο έτος, ο γιος του Ιούδας, ο επωνομαζόμενος Μακκαβαίος ('το σφυρί'), διεξήγαγε ανταρτοπόλεμο εναντίον διαδοχικών σελευκιδικών στρατευμάτων στις ορεινές περιοχές της Ιουδαίας, νικώντας στρατιώτες υπό τον Απολλώνιο, τον Σήρωνα, τον Γοργία και τον Λυσία. Το 164 ο Ναός ανακαταλήφθηκε και αφιερώθηκε εκ νέου — η αρχή της εορτής της Χανουκά. Η εσωτερική αδυναμία των Σελευκιδών επέτρεψε στους αδελφούς του Ιωνάθαν και Σίμωνα να μετατρέψουν τη στρατιωτική επιτυχία σε πολιτική αυτονομία, ιδρύοντας την Ασμοναϊκή δυναστεία που θα κυβερνούσε την Ιουδαία ως την επέμβαση του Πομπηίου έναν αιώνα αργότερα."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -150,
      era: {
        en: "Hellenistic Decline",
        el: "Ελληνιστική Παρακμή"
      },
      events: [
        {
          title: {
            en: "Alexander Balas claims Seleucid throne",
            el: "Ο Αλέξανδρος Βάλας διεκδικεί τον σελευκιδικό θρόνο"
          },
          description: {
            en: "A supposed son of Antiochus IV, Alexander Balas claims the Seleucid throne with Ptolemaic support, leading to further dynastic instability.",
            el: "Ένας υποτιθέμενος γιος του Αντίοχου Δ΄, ο Αλέξανδρος Βάλας διεκδικεί τον σελευκιδικό θρόνο με πτολεμαϊκή υποστήριξη, οδηγώντας σε περαιτέρω δυναστική αστάθεια."
          },
          extendedDescription: {
            en: "Diodorus and Polybius treat Balas as an obscure adventurer of Smyrna passed off as the son of Antiochus IV with the connivance of Pergamon, Egypt, and the Roman Senate, all eager to humiliate the reigning Demetrius I Soter. Balas defeated and killed Demetrius in 150 and ruled in Antioch for five years, but his court collapsed into corruption while Jonathan Maccabaeus extended Judaean independence under his nominal commission. Demetrius' son Demetrius II Nicator returned to dispute the throne with Egyptian help, and Balas was murdered after his defeat at Antioch. The episode marked the beginning of the long civil wars that would consume the Seleucid house.",
            el: "Ο Διόδωρος και ο Πολύβιος αντιμετωπίζουν τον Βάλα ως άσημο τυχοδιώκτη της Σμύρνης που παρουσιάστηκε ως γιος του Αντιόχου Δ΄ με τη συγκατάθεση της Περγάμου, της Αιγύπτου και της ρωμαϊκής Συγκλήτου, όλων πρόθυμων να ταπεινώσουν τον τότε βασιλέα Δημήτριο Α΄ Σωτήρα. Ο Βάλας νίκησε και σκότωσε τον Δημήτριο το 150 και βασίλευσε στην Αντιόχεια για πέντε χρόνια, αλλά η αυλή του βυθίστηκε στη διαφθορά, ενώ ο Ιωνάθαν ο Μακκαβαίος επέκτεινε την ιουδαϊκή ανεξαρτησία υπό την ονομαστική εξουσιοδότησή του. Ο γιος του Δημητρίου, Δημήτριος Β΄ Νικάτωρ, επέστρεψε για να αμφισβητήσει τον θρόνο με αιγυπτιακή βοήθεια, και ο Βάλας δολοφονήθηκε μετά την ήττα του στην Αντιόχεια. Το επεισόδιο σήμανε την αρχή των μακροχρόνιων εμφύλιων πολέμων που θα κατανάλωναν τον σελευκιδικό οίκο."
          },
          category: "political"
        }
      ]
    },
    {
      year: -146,
      era: {
        en: "Roman Conquest",
        el: "Ρωμαϊκή Κατάκτηση"
      },
      events: [
        {
          title: {
            en: "Destruction of Corinth",
            el: "Η καταστροφή της Κορίνθου"
          },
          description: {
            en: "Rome destroys Corinth and annexes Greece as the province of Achaea, ending Greek political independence after more than a millennium.",
            el: "Η Ρώμη καταστρέφει την Κόρινθο και προσαρτά την Ελλάδα ως επαρχία της Αχαΐας, τερματίζοντας την ελληνική πολιτική ανεξαρτησία μετά από περισσότερο από χιλιετία."
          },
          extendedDescription: {
            en: "After the Achaean League foolishly declared war on Rome over Spartan secession, the consul Lucius Mummius defeated the league forces at Leucopetra and entered defenseless Corinth. The Senate decreed exemplary punishment: the male population slaughtered, the women and children sold into slavery, the artworks shipped to Rome — Polybius watched soldiers playing dice on an Aristides painting — and the city itself burned and razed. The synchronicity with the destruction of Carthage in the same year was not lost on contemporaries. Greek independence, though long compromised, was now formally extinguished. Corinth would lie deserted for a century until refounded by Julius Caesar as a Roman colony.",
            el: "Μετά την παράλογη κήρυξη πολέμου της Αχαϊκής Συμπολιτείας προς τη Ρώμη για την απόσχιση της Σπάρτης, ο ύπατος Λεύκιος Μόμμιος νίκησε τις συμπολιτειακές δυνάμεις στη Λευκοπέτρα και εισήλθε στην ανυπεράσπιστη Κόρινθο. Η Σύγκλητος διέταξε παραδειγματική τιμωρία: ο ανδρικός πληθυσμός σφαγιάστηκε, οι γυναίκες και τα παιδιά πουλήθηκαν ως σκλάβοι, τα έργα τέχνης μεταφέρθηκαν στη Ρώμη — ο Πολύβιος είδε στρατιώτες να παίζουν ζάρια πάνω σε πίνακα του Αριστείδη — και η ίδια η πόλη πυρπολήθηκε και ισοπεδώθηκε. Η σύμπτωση με την καταστροφή της Καρχηδόνος το ίδιο έτος δεν διέφυγε των συγχρόνων. Η ελληνική ανεξαρτησία, αν και από καιρό υπονομευμένη, τώρα έσβησε επίσημα. Η Κόρινθος θα έμενε έρημη επί έναν αιώνα, ώσπου να ξαναϊδρυθεί ως ρωμαϊκή αποικία από τον Ιούλιο Καίσαρα."
          },
          category: "military"
        }
      ]
    },
    {
      year: -133,
      era: {
        en: "Roman Expansion",
        el: "Ρωμαϊκή Επέκταση"
      },
      events: [
        {
          title: {
            en: "Attalus III bequeaths Pergamon to Rome",
            el: "Ο Άτταλος Γ΄ κληροδοτεί την Πέργαμο στη Ρώμη"
          },
          description: {
            en: "King Attalus III of Pergamon dies without heirs and bequeaths his kingdom to Rome, creating the Roman province of Asia and ending the Attalid dynasty.",
            el: "Ο βασιλιάς Άτταλος Γ΄ της Περγάμου πεθαίνει χωρίς κληρονόμους και κληροδοτεί το βασίλειό του στη Ρώμη, δημιουργώντας τη ρωμαϊκή επαρχία της Ασίας και τερματίζοντας την Ατταλιδική δυναστεία."
          },
          extendedDescription: {
            en: "Reclusive and devoted to botany, toxicology, and metalwork rather than statecraft, Attalus left a will making the Roman people his heir — a step probably motivated by fear that his half-brother Aristonicus would seize the throne and embroil the kingdom in war. He was right: Aristonicus rose anyway, calling his slave-and-peasant followers Heliopolitae after a utopian solar commonwealth, and held out for nearly four years before being captured. The bequest gave Rome the wealthiest part of Asia Minor, organized as the province of Asia. Its tax-farming would underwrite Roman politics for a century — and provoke the great revolt of Mithridates VI.",
            el: "Απομονωμένος και αφοσιωμένος στη βοτανική, την τοξικολογία και τη μεταλλοτεχνία αντί στην πολιτική διακυβέρνηση, ο Άτταλος άφησε διαθήκη με την οποία ονόμαζε τον ρωμαϊκό λαό κληρονόμο του — ενέργεια που πιθανόν υπαγορεύθηκε από τον φόβο ότι ο ετεροθαλής αδελφός του Αριστόνικος θα καταλάμβανε τον θρόνο και θα ενεπλεκόταν σε πόλεμο. Είχε δίκιο: ο Αριστόνικος εξεγέρθηκε ούτως ή άλλως, ονομάζοντας τους δούλους και χωρικούς οπαδούς του Ηλιοπολίτες, σύμφωνα με ουτοπικό ηλιακό κράτος, και άντεξε σχεδόν τέσσερα χρόνια προτού συλληφθεί. Η κληροδοσία έδωσε στη Ρώμη το πλουσιότερο τμήμα της Μικράς Ασίας, οργανωμένο ως επαρχία της Ασίας. Η εκμίσθωση των φόρων της θα χρηματοδοτούσε τη ρωμαϊκή πολιτική επί έναν αιώνα — και θα προκαλούσε τη μεγάλη εξέγερση του Μιθριδάτη ΣΤ΄."
          },
          category: "political"
        }
      ]
    },
    {
      year: -130,
      era: {
        en: "Cultural Achievement",
        el: "Πολιτιστικό Επίτευγμα"
      },
      events: [
        {
          title: {
            en: "Hipparchus creates star catalog",
            el: "Ο Ίππαρχος δημιουργεί αστρικό κατάλογο"
          },
          description: {
            en: "Hipparchus of Nicaea compiles the first comprehensive star catalog, discovers precession of the equinoxes, and develops trigonometry, revolutionizing astronomy.",
            el: "Ο Ίππαρχος ο Νικαίος συνθέτει τον πρώτο ολοκληρωμένο αστρικό κατάλογο, ανακαλύπτει την προσημείωση των ισημεριών και αναπτύσσει την τριγωνομετρία, επαναστατώντας την αστρονομία."
          },
          extendedDescription: {
            en: "Working at Rhodes with Mesopotamian observational records and Egyptian instruments, Hipparchus catalogued some 850 stars by ecliptic coordinates and apparent magnitude, the latter classification still in use today. By comparing his own observations with those of Timocharis a century and a half earlier, he detected the slow westward drift of the equinoxes — the precession — and estimated its rate to within a degree per century of the modern value. He compiled the first known table of chords, the trigonometry of antiquity, and refined the lunar and solar models that Ptolemy would later canonize in the Almagest. Most of his works are lost; we know him chiefly through Ptolemy's continuous citation.",
            el: "Εργαζόμενος στη Ρόδο με μεσοποτάμια παρατηρησιακά αρχεία και αιγυπτιακά όργανα, ο Ίππαρχος κατέγραψε περίπου 850 αστέρες κατά εκλειπτικές συντεταγμένες και φαινόμενο μέγεθος — η τελευταία κατάταξη ισχύει ακόμη σήμερα. Συγκρίνοντας τις δικές του παρατηρήσεις με εκείνες του Τιμοχάρη ενάμιση αιώνα νωρίτερα, ανίχνευσε την αργή δυτική μετατόπιση των ισημεριών — την προσημείωση — και εκτίμησε τον ρυθμό της σε λιγότερο από έναν βαθμό ανά αιώνα από τη σύγχρονη τιμή. Συνέθεσε τον πρώτο γνωστό πίνακα χορδών, την τριγωνομετρία της αρχαιότητας, και τελειοποίησε τα σεληνιακά και ηλιακά μοντέλα που ο Πτολεμαίος θα καθιέρωνε αργότερα στη Μαθηματική Σύνταξη. Τα περισσότερα έργα του χάθηκαν· τον γνωρίζουμε κυρίως μέσω των διαρκών παραπομπών του Πτολεμαίου."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: -129,
      era: {
        en: "Seleucid Collapse",
        el: "Σελευκιδική Συντριβή"
      },
      events: [
        {
          title: {
            en: "Death of Antiochus VII",
            el: "Ο θάνατος του Αντίοχου Ζ΄"
          },
          description: {
            en: "Antiochus VII Sidetes, the last strong Seleucid ruler, is killed fighting the Parthians. The Seleucid Empire collapses into warring factions.",
            el: "Ο Αντίοχος Ζ΄ Σιδήτης, ο τελευταίος ισχυρός σελευκιδικός ηγέτης, σκοτώνεται πολεμώντας τους Πάρθους. Η Σελευκιδική Αυτοκρατορία καταρρέει σε εμπόλεμες φατρίες."
          },
          extendedDescription: {
            en: "Antiochus VII had spent his short reign reasserting Seleucid authority — subduing rebellious Judaea under John Hyrcanus, restoring discipline to a fractious court — and now mounted the empire's last serious eastern offensive against the Parthians of Phraates II. After initial successes that recovered Babylonia and Media, his army was ambushed in winter quarters near Ecbatana, and Antiochus, refusing to flee, fell sword in hand. With his death the Seleucid empire collapsed inward: Mesopotamia and Iran were lost permanently to Parthia, and the surviving Syrian rump fell prey to interminable dynastic wars among descendants of the cousin lines. Within sixty years the kingdom would be a Roman province.",
            el: "Ο Αντίοχος Ζ΄ είχε αφιερώσει τη σύντομη βασιλεία του στην αποκατάσταση της σελευκιδικής εξουσίας — καθυποτάσσοντας την επαναστατημένη Ιουδαία υπό τον Ιωάννη Υρκανό, επαναφέροντας την πειθαρχία σε διχασμένη αυλή — και τώρα ανέλαβε την τελευταία σοβαρή ανατολική επίθεση της αυτοκρατορίας εναντίον των Πάρθων του Φραάτη Β΄. Μετά τις αρχικές επιτυχίες που ανέκτησαν τη Βαβυλωνία και τη Μηδία, ο στρατός του ενέδρευσε στις χειμερινές του διαμονές κοντά στα Εκβάτανα, και ο Αντίοχος, αρνούμενος να φύγει, έπεσε με το ξίφος στο χέρι. Με τον θάνατό του η Σελευκιδική αυτοκρατορία κατέρρευσε εσωτερικά: η Μεσοποταμία και το Ιράν χάθηκαν οριστικά προς την Παρθία, και το επιβιώσαν συριακό υπόλειμμα έπεσε θύμα ατέρμονων δυναστικών πολέμων ανάμεσα στους απογόνους των δευτερευόντων κλάδων. Μέσα σε εξήντα χρόνια, το βασίλειο θα γινόταν ρωμαϊκή επαρχία."
          },
          category: "military"
        }
      ]
    },
    {
      year: -120,
      era: {
        en: "Pontic Kingdom",
        el: "Βασίλειο του Πόντου"
      },
      events: [
        {
          title: {
            en: "Accession of Mithridates VI Eupator",
            el: "Η ανάβαση του Μιθριδάτη ΣΤ΄ Ευπάτορος"
          },
          description: {
            en: "The young Mithridates VI takes the throne of Pontus after the murder of his father, beginning a reign that will fuse Hellenistic and Iranian traditions and challenge Rome itself.",
            el: "Ο νεαρός Μιθριδάτης ΣΤ΄ καταλαμβάνει τον θρόνο του Πόντου μετά τη δολοφονία του πατέρα του, αρχίζοντας μια βασιλεία που θα συνενώσει ελληνιστικές και ιρανικές παραδόσεις και θα προκαλέσει την ίδια τη Ρώμη."
          },
          extendedDescription: {
            en: "Pontus, founded a century and a half earlier by a minor Persian satrap who had survived the Macedonian conquest, had grown into a substantial Black Sea kingdom that combined Greek coastal cities with an Iranian interior aristocracy and a self-styled descent from Cyrus and Darius. After his father Mithridates V was poisoned at a banquet, the young heir, perhaps eleven years old, fled into the wilderness for several years to escape his mother and her courtiers, returning to seize sole rule. The reign that followed turned Pontus into the dominant power of Asia Minor: he absorbed Colchis and the Bosporan kingdom, allied with Armenia, and built an army that drew on Greek mercenaries, Scythian cavalry and Anatolian peasant levies. His later wars with Rome — beginning with the orchestrated massacre of perhaps eighty thousand Italian residents of Asia in 88 — would consume four Roman commanders and three decades, ending only with his suicide in 63. Cicero called him the greatest of the kings since Alexander.",
            el: "Ο Πόντος, ιδρυμένος έναν αιώνα και μισό νωρίτερα από έναν δευτερεύοντα Πέρση σατράπη που είχε επιβιώσει της μακεδονικής κατακτήσεως, είχε εξελιχθεί σε σημαντικό βασίλειο του Ευξείνου Πόντου το οποίο συνδύαζε ελληνικές παράκτιες πόλεις με ιρανική εσωτερική αριστοκρατία και αυτοαναγορευμένη καταγωγή από τον Κύρο και τον Δαρείο. Αφού ο πατέρας του Μιθριδάτης Ε΄ δηλητηριάστηκε σε συμπόσιο, ο νεαρός διάδοχος, ίσως ένδεκα ετών, έφυγε στην ερημιά για αρκετά χρόνια για να ξεφύγει από τη μητέρα του και τους αυλικούς της, και επέστρεψε για να αρπάξει την αποκλειστική εξουσία. Η βασιλεία που ακολούθησε ανέδειξε τον Πόντο σε κυρίαρχη δύναμη της Μικράς Ασίας: απορρόφησε την Κολχίδα και το βασίλειο του Βοσπόρου, συμμάχησε με την Αρμενία και συγκρότησε στρατό που στηριζόταν σε Έλληνες μισθοφόρους, σκυθικό ιππικό και ανατολικές αγροτικές στρατολογίες. Οι μετέπειτα πόλεμοί του με τη Ρώμη — που άρχισαν με την ενορχηστρωμένη σφαγή ίσως ογδόντα χιλιάδων Ιταλών κατοίκων της Ασίας το 88 — θα κατανάλωναν τέσσερις Ρωμαίους στρατηγούς και τρεις δεκαετίες, και θα τελείωναν μόνο με την αυτοκτονία του το 63. Ο Κικέρων τον αποκάλεσε τον μεγαλύτερο των βασιλέων μετά τον Αλέξανδρο."
          },
          category: "political"
        }
      ]
    },
    {
      year: -96,
      era: {
        en: "Ptolemaic Decline",
        el: "Πτολεμαϊκή Παρακμή"
      },
      events: [
        {
          title: {
            en: "Ptolemy Apion bequeaths Cyrenaica to Rome",
            el: "Ο Πτολεμαίος Απίων κληροδοτεί την Κυρηναϊκή στη Ρώμη"
          },
          description: {
            en: "Ptolemy Apion, ruler of Cyrenaica, dies and bequeaths his territory to Rome, further expanding Roman control in North Africa.",
            el: "Ο Πτολεμαίος Απίων, κυβερνήτης της Κυρηναϊκής, πεθαίνει και κληροδοτεί την επικράτειά του στη Ρώμη, επεκτείνοντας περαιτέρω τον ρωμαϊκό έλεγχο στη Βόρεια Αφρική."
          },
          extendedDescription: {
            en: "An illegitimate son of Ptolemy VIII, Apion had been carved off Cyrenaica as a separate appanage and ruled it for two decades before dying childless. Following the precedent of Attalus III, he willed his realm to Rome — but the Senate, distracted by Italian politics, declined formal annexation and merely freed the principal Greek cities of the Pentapolis. The arrangement collapsed in disorder over a generation, and only in 74 BC was Cyrenaica organized as a regular province, later joined administratively to Crete. The bequest illustrates a recurring pattern: as Hellenistic kings exhausted their resources and faced internal threats, Rome was repeatedly named as ultimate heir, absorbing the eastern Mediterranean piece by piece.",
            el: "Νόθος γιος του Πτολεμαίου Η΄, ο Απίων είχε αποσπαστεί ως ξεχωριστή απανάγη της Κυρηναϊκής και την κυβέρνησε επί δύο δεκαετίες προτού πεθάνει άτεκνος. Ακολουθώντας το παράδειγμα του Αττάλου Γ΄, κληροδότησε το βασίλειό του στη Ρώμη — αλλά η Σύγκλητος, απορροφημένη από την ιταλική πολιτική, αρνήθηκε την επίσημη προσάρτηση και απλώς ελευθέρωσε τις κύριες ελληνικές πόλεις της Πεντάπολης. Η ρύθμιση κατέρρευσε μέσα σε μία γενιά, και μόλις το 74 π.Χ. η Κυρηναϊκή οργανώθηκε σε κανονική επαρχία, αργότερα συνδεδεμένη διοικητικά με την Κρήτη. Η κληροδοσία απεικονίζει επαναλαμβανόμενο μοτίβο: καθώς οι ελληνιστικοί βασιλείς εξαντλούσαν τους πόρους τους και αντιμετώπιζαν εσωτερικές απειλές, η Ρώμη ονομαζόταν επανειλημμένα έσχατος κληρονόμος, απορροφώντας την ανατολική Μεσόγειο τμήμα προς τμήμα."
          },
          category: "political"
        }
      ]
    },
    {
      year: -88,
      era: {
        en: "Mithridatic Wars",
        el: "Μιθριδατικοί Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "First Mithridatic War begins",
            el: "Αρχή του Πρώτου Μιθριδατικού Πολέμου"
          },
          description: {
            en: "Mithridates VI of Pontus invades Asia Minor, sparking the First Mithridatic War against Rome. He orders the massacre of Roman and Italian residents.",
            el: "Ο Μιθριδάτης ΣΤ΄ του Πόντου εισβάλλει στη Μικρά Ασία, πυροδοτώντας τον Πρώτο Μιθριδατικό Πόλεμο ενάντια στη Ρώμη. Διατάσσει τη σφαγή Ρωμαίων και Ιταλών κατοίκων."
          },
          extendedDescription: {
            en: "Provoked by the rapacity of the Roman tax-farming companies and the cynical machinations of the proconsul Manius Aquillius, Mithridates seized the moment of Roman distraction during the Social War to overrun the province of Asia. He was greeted as a liberator from Roman extortion, and on a single day in 88 BC — the so-called Asiatic Vespers — orchestrated the massacre of perhaps eighty thousand Italian residents across Asian cities. He carried his offensive into Greece, where Athens declared for him. Sulla, breaking off the civil war with Cinna, retook Athens after a brutal siege and broke Mithridatic armies at Chaeronea and Orchomenus. Mithridates would survive — and revolt twice more — before falling to Pompey in 63.",
            el: "Προκληθείς από την αρπακτικότητα των ρωμαϊκών εταιρειών εκμίσθωσης φόρων και τις κυνικές μηχανορραφίες του ανθυπάτου Μάνιου Ακυλίου, ο Μιθριδάτης άδραξε την ευκαιρία της ρωμαϊκής περισπάσεως κατά τον Συμμαχικό Πόλεμο για να καταλάβει την επαρχία της Ασίας. Έγινε δεκτός ως απελευθερωτής από τη ρωμαϊκή εκμετάλλευση και, σε μία ημέρα του 88 π.Χ. — τους λεγόμενους Ασιατικούς Εσπερινούς — ενορχήστρωσε τη σφαγή ίσως ογδόντα χιλιάδων Ιταλών κατοίκων σε ολόκληρες τις πόλεις της Ασίας. Επεξέτεινε την επίθεσή του στην Ελλάδα, όπου η Αθήνα τάχθηκε στο πλευρό του. Ο Σύλλας, διακόπτοντας τον εμφύλιο με τον Κίννα, ανακατέλαβε την Αθήνα μετά από αιματηρή πολιορκία και συνέτριψε τους μιθριδατικούς στρατούς στη Χαιρώνεια και τον Ορχομενό. Ο Μιθριδάτης θα επιβίωνε — και θα ξεσηκωνόταν δύο φορές ακόμη — πριν πέσει υπό τον Πομπήιο το 63."
          },
          category: "military"
        }
      ]
    },
    {
      year: -81,
      era: {
        en: "Ptolemaic Egypt",
        el: "Πτολεμαϊκή Αίγυπτος"
      },
      events: [
        {
          title: {
            en: "Sulla restores Ptolemy XI",
            el: "Ο Σύλλας αποκαθιστά τον Πτολεμαίο ΙΑ΄"
          },
          description: {
            en: "Roman dictator Sulla intervenes in Egyptian succession, installing Ptolemy XI Alexander II, who reigns briefly before being murdered by Alexandrians.",
            el: "Ο Ρωμαίος δικτάτορας Σύλλας επεμβαίνει στην αιγυπτιακή διαδοχή, εγκαθιστώντας τον Πτολεμαίο ΙΑ΄ Αλέξανδρο Β΄, που βασιλεύει για λίγο πριν δολοφονηθεί από τους Αλεξανδρινούς."
          },
          extendedDescription: {
            en: "After the death of Cleopatra Berenice III, Sulla — using his influence as Roman dictator — sent her young stepson and nephew Ptolemy XI Alexander II to Alexandria as her co-ruler and husband. Within nineteen days the new king murdered his bride, an act so flagrant that the Alexandrians dragged him from the gymnasium and lynched him. The dynastic crisis that followed brought illegitimate sons of Ptolemy IX to the throne and saw a rumor circulate, never proved or wholly disproved, that Alexander II had bequeathed Egypt to Rome by will. The Senate would invoke this 'will' for two generations to justify intermittent intervention in Ptolemaic affairs.",
            el: "Μετά τον θάνατο της Κλεοπάτρας Βερενίκης Γ΄, ο Σύλλας — αξιοποιώντας την επιρροή του ως Ρωμαίος δικτάτορας — έστειλε τον νεαρό προγονό και ανιψιό της Πτολεμαίο ΙΑ΄ Αλέξανδρο Β΄ στην Αλεξάνδρεια ως συγκυβερνήτη και σύζυγό της. Μέσα σε δεκαεννέα ημέρες, ο νέος βασιλιάς δολοφόνησε τη νύφη του — πράξη τόσο εξόφθαλμη ώστε οι Αλεξανδρινοί τον έσυραν από το γυμνάσιο και τον λυντσάρισαν. Η δυναστική κρίση που ακολούθησε ανέβασε νόθους γιους του Πτολεμαίου Θ΄ στον θρόνο και διέδωσε φήμη, ουδέποτε αποδεδειγμένη ή πλήρως διαψευσθείσα, ότι ο Αλέξανδρος Β΄ είχε κληροδοτήσει την Αίγυπτο στη Ρώμη με διαθήκη. Η Σύγκλητος θα επικαλούνταν αυτήν τη 'διαθήκη' επί δύο γενεές για να δικαιολογήσει τις περιστασιακές παρεμβάσεις της στα πτολεμαϊκά πράγματα."
          },
          category: "political"
        }
      ]
    },
    {
      year: -69,
      era: {
        en: "Mithridatic Wars",
        el: "Μιθριδατικοί Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "Battle of Tigranocerta",
            el: "Η μάχη της Τιγρανοκέρτης"
          },
          description: {
            en: "Lucullus defeats Tigranes II of Armenia, Mithridates' ally. This victory weakens the anti-Roman coalition in the East.",
            el: "Ο Λούκουλλος νικά τον Τιγράνη Β΄ της Αρμενίας, σύμμαχο του Μιθριδάτη. Αυτή η νίκη αποδυναμώνει τον αντιρωμαϊκό συνασπισμό στην Ανατολή."
          },
          extendedDescription: {
            en: "Tigranes the Great had carved out an Armenian empire stretching from the Caspian to Syria, gathered the displaced Seleucid royal family at his new capital of Tigranocerta, and given asylum to his father-in-law Mithridates. With about fifteen thousand legionaries, Lucullus crossed the Taurus, lured the much larger Armenian and Iberian host out of the city's walls, and routed them with a hammer-blow against the cataphract cavalry — Tigranes is said to have remarked, surveying the small Roman force, 'If they come as ambassadors, they are too many; if as soldiers, too few.' Tigranocerta fell that night and was systematically plundered. The defeat shattered Tigranes' empire and confirmed Roman supremacy east of the Euphrates.",
            el: "Ο Τιγράνης ο Μέγας είχε δημιουργήσει αρμενική αυτοκρατορία που εκτεινόταν από την Κασπία μέχρι τη Συρία, είχε συγκεντρώσει την εκτοπισμένη σελευκιδική βασιλική οικογένεια στη νέα πρωτεύουσά του, την Τιγρανόκερτα, και είχε προσφέρει άσυλο στον πεθερό του Μιθριδάτη. Με περίπου δεκαπέντε χιλιάδες λεγεωνάριους, ο Λούκουλλος διέσχισε τον Ταύρο, παρέσυρε την πολύ μεγαλύτερη αρμενοϊβηρική στρατιά έξω από τα τείχη της πόλης και την έτρεψε σε φυγή με σφυροκόπημα κατά του καταφράκτου ιππικού — ο Τιγράνης λέγεται ότι παρατήρησε, βλέποντας τη μικρή ρωμαϊκή δύναμη, 'Εάν έρχονται ως πρέσβεις, είναι πολλοί· εάν ως στρατιώτες, λίγοι'. Η Τιγρανόκερτα έπεσε εκείνη τη νύχτα και λεηλατήθηκε συστηματικά. Η ήττα συνέτριψε την αυτοκρατορία του Τιγράνη και επικύρωσε τη ρωμαϊκή υπεροχή ανατολικά του Ευφράτη."
          },
          category: "military"
        }
      ]
    },
    {
      year: -63,
      era: {
        en: "Roman Conquest",
        el: "Ρωμαϊκή Κατάκτηση"
      },
      events: [
        {
          title: {
            en: "Pompey captures Jerusalem",
            el: "Ο Πομπήιος καταλαμβάνει την Ιερουσαλήμ"
          },
          description: {
            en: "Pompey the Great captures Jerusalem, ending Hasmonean independence and making Judea a Roman client state. The Seleucid Empire is formally dissolved.",
            el: "Ο Πομπήιος ο Μέγας καταλαμβάνει την Ιερουσαλήμ, τερματίζοντας την Ασμοναϊκή ανεξαρτησία και κάνοντας τη Ιουδαία ρωμαϊκό κράτος-πελάτη. Η Σελευκιδική Αυτοκρατορία διαλύεται επίσημα."
          },
          extendedDescription: {
            en: "Drawn into the Hasmonean civil war between the brothers Hyrcanus II and Aristobulus II, Pompey besieged the Temple Mount for three months, finally breaching the walls on a Sabbath when the defenders refused to interrupt their rites. Twelve thousand Jews were said to have died. Pompey then committed what Josephus calls his most notorious sacrilege: he entered the Holy of Holies and inspected its empty sanctum, but ordered that nothing be touched and the Temple service restored. Hyrcanus was confirmed as high priest under Roman supervision, and Judaea became a tributary kingdom. In the same campaign Pompey reorganized the Levant, abolished the moribund Seleucid throne, and erected the new province of Syria — the formal end of Alexander's Asian inheritance.",
            el: "Παρασυρμένος στον ασμοναϊκό εμφύλιο πόλεμο μεταξύ των αδελφών Υρκανού Β΄ και Αριστόβουλου Β΄, ο Πομπήιος πολιόρκησε το Όρος του Ναού επί τρεις μήνες, διασπώντας τέλος τα τείχη ένα Σάββατο, όταν οι αμυνόμενοι αρνήθηκαν να διακόψουν τις τελετουργίες τους. Λέγεται ότι δώδεκα χιλιάδες Ιουδαίοι έπεσαν νεκροί. Ο Πομπήιος τότε διέπραξε εκείνο που ο Ιώσηπος ονομάζει τη μεγαλύτερη ιεροσυλία του: εισήλθε στα Άγια των Αγίων και επιθεώρησε το άδειο άδυτο, αλλά διέταξε να μην αγγίξουν τίποτα και να αποκατασταθεί η ναϊκή λατρεία. Ο Υρκανός επιβεβαιώθηκε ως αρχιερέας υπό ρωμαϊκή εποπτεία, και η Ιουδαία έγινε φόρου υποτελές βασίλειο. Στην ίδια εκστρατεία ο Πομπήιος αναδιοργάνωσε τον Λεβάντε, κατήργησε τον ετοιμοθάνατο σελευκιδικό θρόνο και ίδρυσε τη νέα επαρχία της Συρίας — το επίσημο τέλος της ασιατικής κληρονομιάς του Αλεξάνδρου."
          },
          category: "military"
        }
      ]
    },
    {
      year: -55,
      era: {
        en: "Roman Intervention",
        el: "Ρωμαϊκή Παρέμβαση"
      },
      events: [
        {
          title: {
            en: "Ptolemy XII restored by Rome",
            el: "Ο Πτολεμαίος ΙΒ΄ αποκαθίσταται από τη Ρώμη"
          },
          description: {
            en: "Ptolemy XII Auletes is restored to the Egyptian throne with Roman military support after being overthrown, increasing Roman influence over Egypt.",
            el: "Ο Πτολεμαίος ΙΒ΄ Αυλητής αποκαθίσταται στον αιγυπτιακό θρόνο με ρωμαϊκή στρατιωτική υποστήριξη μετά την ανατροπή του, αυξάνοντας τη ρωμαϊκή επιρροή στην Αίγυπτο."
          },
          extendedDescription: {
            en: "Driven from Alexandria by his own subjects in 58 BC for selling the rights to Cyprus to Rome and crushing his people with new taxes, Ptolemy XII — nicknamed Auletes, 'the flute-player,' for his musical hobby — fled to Rome, where he poured borrowed money into bribing the senators of the late Republic. After three years of intrigue, the proconsul of Syria, Aulus Gabinius, on Pompey's quiet authority and against the Senate's express prohibition, marched to Egypt and reinstalled the king. The young Mark Antony commanded Gabinius' cavalry — his first sight of Alexandria. The vast debts incurred by the restoration would weigh on the dynasty until its end and tie Cleopatra VII's fate inextricably to Roman politics.",
            el: "Διωγμένος από την Αλεξάνδρεια από τους ίδιους τους υπηκόους του το 58 π.Χ. επειδή πούλησε τα δικαιώματα της Κύπρου στη Ρώμη και πλάκωσε τον λαό του με νέους φόρους, ο Πτολεμαίος ΙΒ΄ — επονομαζόμενος Αυλητής λόγω του μουσικού του χόμπι — κατέφυγε στη Ρώμη, όπου σκόρπιζε δανεικά χρήματα δωροδοκώντας τους συγκλητικούς της ύστερης Δημοκρατίας. Έπειτα από τρία χρόνια ραδιουργιών, ο ανθύπατος της Συρίας Αύλος Γαβίνιος, με τη σιωπηρή έγκριση του Πομπηίου και αντίθετα στη ρητή απαγόρευση της Συγκλήτου, εξεστράτευσε στην Αίγυπτο και επανέφερε τον βασιλιά. Ο νεαρός Μάρκος Αντώνιος διοίκησε το ιππικό του Γαβινίου — η πρώτη του εμπειρία της Αλεξάνδρειας. Τα τεράστια χρέη που είχαν δημιουργηθεί από την αποκατάσταση θα βάραιναν τη δυναστεία ως το τέλος της και θα έδεναν τη μοίρα της Κλεοπάτρας Ζ΄ άρρηκτα με τη ρωμαϊκή πολιτική."
          },
          category: "political"
        }
      ]
    },
    {
      year: -51,
      era: {
        en: "Ptolemaic Egypt",
        el: "Πτολεμαϊκή Αίγυπτος"
      },
      events: [
        {
          title: {
            en: "Cleopatra VII becomes co-ruler",
            el: "Η Κλεοπάτρα Ζ΄ γίνεται συγκυβερνήτης"
          },
          description: {
            en: "Cleopatra VII becomes co-ruler with her brother Ptolemy XIII. She will become the last active ruler of the Ptolemaic dynasty and one of history's most famous figures.",
            el: "Η Κλεοπάτρα Ζ΄ γίνεται συγκυβερνήτης με τον αδελφό της Πτολεμαίο ΙΓ΄. Θα γίνει η τελευταία ενεργή κυβερνήτης της Πτολεμαϊκής δυναστείας και μία από τις πιο διάσημες φιγούρες της ιστορίας."
          },
          extendedDescription: {
            en: "Cleopatra VII Philopator was the seventh Ptolemaic queen of that name and, by tradition, the first member of the dynasty to learn Egyptian — alongside the eight or nine other languages Plutarch credits her with. On her father's death she was eighteen and obliged to share the throne with her ten-year-old brother Ptolemy XIII under the regency of his eunuch advisors. The arrangement quickly broke into civil war: by 49 BC she had been driven from Alexandria and was raising an army in Syria. The arrival of Caesar in 48, in pursuit of Pompey, would give her the opportunity to seize back the kingdom — and entangle Egypt fatally in the politics of the late Roman Republic.",
            el: "Η Κλεοπάτρα Ζ΄ Φιλοπάτωρ ήταν η έβδομη πτολεμαϊκή βασίλισσα με αυτό το όνομα και, κατά την παράδοση, το πρώτο μέλος της δυναστείας που έμαθε αιγυπτιακά — μαζί με τις άλλες οκτώ ή εννέα γλώσσες που της αποδίδει ο Πλούταρχος. Στον θάνατο του πατέρα της ήταν δεκαοκτώ ετών και υποχρεώθηκε να μοιραστεί τον θρόνο με τον δεκάχρονο αδελφό της Πτολεμαίο ΙΓ΄ υπό την επιτροπεία των ευνούχων συμβούλων του. Η ρύθμιση γρήγορα κατέληξε σε εμφύλιο πόλεμο: ως το 49 π.Χ. είχε εκδιωχθεί από την Αλεξάνδρεια και συγκέντρωνε στρατό στη Συρία. Η άφιξη του Καίσαρα το 48, σε καταδίωξη του Πομπηίου, θα της έδινε την ευκαιρία να ανακαταλάβει το βασίλειο — και να μπλέξει την Αίγυπτο μοιραία στην πολιτική της ύστερης ρωμαϊκής Δημοκρατίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: -48,
      era: {
        en: "Roman Civil War",
        el: "Ρωμαϊκός Εμφύλιος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Caesar pursues Pompey to Egypt",
            el: "Ο Καίσαρας καταδιώκει τον Πομπήιο στην Αίγυπτο"
          },
          description: {
            en: "Julius Caesar follows Pompey to Egypt, where Pompey is murdered. Caesar becomes involved in Egyptian politics and meets Cleopatra.",
            el: "Ο Ιούλιος Καίσαρας ακολουθεί τον Πομπήιο στην Αίγυπτο, όπου ο Πομπήιος δολοφονείται. Ο Καίσαρας εμπλέκεται στην αιγυπτιακή πολιτική και συναντά την Κλεοπάτρα."
          },
          extendedDescription: {
            en: "Reaching Alexandria days after Pharsalus, Caesar was met not by his rival but by a slave bearing Pompey's severed head, an offering from Ptolemy XIII's regents. Plutarch records that Caesar wept. Lodging in the royal palace, he summoned both monarchs to him as arbiter, and Cleopatra — barred from the city — was famously smuggled into his presence rolled in a carpet or bedding bag. The young queen's wit and political acumen won him over; soon they were lovers and political partners. The faction of Ptolemy XIII besieged the palace, beginning the so-called Alexandrian War in which the great Library may first have suffered fire. Caesar would emerge as Cleopatra's patron and the father of her son Caesarion.",
            el: "Φθάνοντας στην Αλεξάνδρεια λίγες ημέρες μετά τα Φάρσαλα, ο Καίσαρας υποδέχθηκε όχι τον αντίπαλό του, αλλά δούλο που του προσέφερε το κομμένο κεφάλι του Πομπηίου — δώρο των επιτρόπων του Πτολεμαίου ΙΓ΄. Ο Πλούταρχος αναφέρει ότι ο Καίσαρας δάκρυσε. Εγκατεστημένος στα βασιλικά ανάκτορα, κάλεσε αμφότερους τους μονάρχες ως διαιτητής, και η Κλεοπάτρα — αποκλεισμένη από την πόλη — διοχετεύτηκε διασήμως στην παρουσία του τυλιγμένη σε χαλί ή κουρτινόμπαλα. Η εξυπνάδα και η πολιτική οξύνοια της νεαρής βασίλισσας τον κέρδισαν· σύντομα έγιναν εραστές και πολιτικοί συνεργάτες. Η παράταξη του Πτολεμαίου ΙΓ΄ πολιόρκησε το ανάκτορο, εγκαινιάζοντας τον λεγόμενο Αλεξανδρινό Πόλεμο, κατά τον οποίο πιθανόν η μεγάλη Βιβλιοθήκη υπέστη για πρώτη φορά πυρκαγιά. Ο Καίσαρας θα αναδεικνυόταν προστάτης της Κλεοπάτρας και πατέρας του γιου της Καισαρίωνος."
          },
          category: "political"
        }
      ]
    },
    {
      year: -47,
      era: {
        en: "Roman Civil War",
        el: "Ρωμαϊκός Εμφύλιος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Battle of the Nile",
            el: "Η μάχη του Νείλου"
          },
          description: {
            en: "Caesar defeats Ptolemy XIII's forces in the Battle of the Nile. Cleopatra is restored to the throne with her brother Ptolemy XIV.",
            el: "Ο Καίσαρας νικά τις δυνάμεις του Πτολεμαίου ΙΓ΄ στη Μάχη του Νείλου. Η Κλεοπάτρα αποκαθίσταται στον θρόνο με τον αδελφό της Πτολεμαίο ΙΔ΄."
          },
          extendedDescription: {
            en: "Penned in the palace quarter for months and reduced to drinking sea-water, Caesar held out until the relief column led by Mithridates of Pergamon broke through from Syria. Together they pursued Ptolemy XIII to a fortified camp on the Nile delta, stormed it from two sides, and routed the army; the boy-king drowned in the river, his gold-armoured corpse later fished out as proof. Caesar entered Alexandria in triumph, restored Cleopatra, and married her to her even younger brother Ptolemy XIV as nominal co-ruler. He then lingered in Egypt for several months — including a celebrated Nile cruise with Cleopatra — before returning to confront the unfinished civil war in Africa and Spain.",
            el: "Παγιδευμένος στο ανακτορικό συγκρότημα επί μήνες και αναγκασμένος να πίνει θαλασσινό νερό, ο Καίσαρας άντεξε ώσπου η αποστολή ανακούφισης υπό τον Μιθριδάτη της Περγάμου διέσχισε από τη Συρία. Μαζί καταδίωξαν τον Πτολεμαίο ΙΓ΄ σε οχυρωμένο στρατόπεδο στο δέλτα του Νείλου, του επιτέθηκαν από δύο πλευρές και διέλυσαν τον στρατό· ο νεαρός βασιλιάς πνίγηκε στον ποταμό, και το κάτεστραμμένο πτώμα του με χρυσά όπλα ψαρεύτηκε αργότερα ως απόδειξη. Ο Καίσαρας εισήλθε θριαμβευτικά στην Αλεξάνδρεια, αποκατέστησε την Κλεοπάτρα και την πάντρεψε με τον ακόμη μικρότερο αδελφό της Πτολεμαίο ΙΔ΄ ως ονομαστικό συγκυβερνήτη. Παρέμεινε στη συνέχεια στην Αίγυπτο επί αρκετούς μήνες — μεταξύ άλλων με ξακουστή κρουαζιέρα στον Νείλο μαζί με την Κλεοπάτρα — προτού επιστρέψει για να αντιμετωπίσει τον ημιτελή εμφύλιο στην Αφρική και την Ισπανία."
          },
          category: "military"
        }
      ]
    },
    {
      year: -44,
      era: {
        en: "Roman Civil War",
        el: "Ρωμαϊκός Εμφύλιος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Caesar assassinated",
            el: "Δολοφονία του Καίσαρα"
          },
          description: {
            en: "Julius Caesar is assassinated in Rome. Cleopatra, who was in Rome with their son Caesarion, returns to Egypt to secure her position.",
            el: "Ο Ιούλιος Καίσαρας δολοφονείται στη Ρώμη. Η Κλεοπάτρα, που ήταν στη Ρώμη με τον γιο τους Καίσαρωνα, επιστρέφει στην Αίγυπτο για να εξασφαλίσει τη θέση της."
          },
          extendedDescription: {
            en: "Caesar fell beneath the daggers of some sixty senators on the Ides of March, his lover and her son still resident across the Tiber in his villa as guests of state. The will named his great-nephew Octavian as heir; Caesarion received nothing. Cleopatra slipped quickly out of Rome and back to Alexandria, where she shortly arranged the death of Ptolemy XIV and elevated the four-year-old Caesarion as Ptolemy XV — coupling the dynasty's claim to the Caesarian succession with her own. Over the next decade she would seek a new Roman patron in Mark Antony, lieutenant of the dictator and inheritor of his eastern policy, in a partnership that would shape — and finally destroy — the Hellenistic world.",
            el: "Ο Καίσαρας έπεσε κάτω από τα στιλέτα περίπου εξήντα συγκλητικών στις Ειδούς του Μαρτίου, ενώ η ερωμένη του και ο γιος τους εξακολουθούσαν να φιλοξενούνται στην έπαυλή του πέρα από τον Τίβερη ως κρατικοί καλεσμένοι. Η διαθήκη όρισε διάδοχο τον προγονό του Οκταβιανό· ο Καισαρίων δεν έλαβε τίποτα. Η Κλεοπάτρα διέφυγε γρήγορα από τη Ρώμη και επέστρεψε στην Αλεξάνδρεια, όπου σύντομα φρόντισε για τον θάνατο του Πτολεμαίου ΙΔ΄ και ανύψωσε τον τετράχρονο Καισαρίωνα ως Πτολεμαίο ΙΕ΄ — συνδέοντας την αξίωση της δυναστείας στην καισαριανή διαδοχή με τη δική της. Στην επόμενη δεκαετία θα αναζητούσε νέο Ρωμαίο προστάτη στον Μάρκο Αντώνιο, υπολοχαγό του δικτάτορα και κληρονόμο της ανατολικής πολιτικής του, σε συνεργασία που θα διέπλαθε — και τελικά θα κατέστρεφε — τον ελληνιστικό κόσμο."
          },
          category: "political"
        }
      ]
    },
    {
      year: -31,
      era: {
        en: "End of Hellenistic Era",
        el: "Τέλος της Ελληνιστικής Εποχής"
      },
      events: [
        {
          title: {
            en: "Battle of Actium",
            el: "Η μάχη της Ακτίου"
          },
          description: {
            en: "Octavian's forces defeat Mark Antony and Cleopatra in the naval Battle of Actium. This marks the end of the Hellenistic period and the beginning of Roman domination of the Eastern Mediterranean.",
            el: "Οι δυνάμεις του Οκταβιανού νικούν τον Μάρκο Αντώνιο και την Κλεοπάτρα στη ναυμαχία της Ακτίου. Αυτό σηματοδοτεί το τέλος της ελληνιστικής περιόδου και την αρχή της ρωμαϊκής κυριαρχίας στην Ανατολική Μεσόγειο."
          },
          extendedDescription: {
            en: "After Antony's territorial 'Donations of Alexandria' in 34 BC handed Roman provinces to Cleopatra and her children, Octavian secured Italy's loyalty and declared war — formally on Cleopatra alone. Their fleets met outside the Ambracian Gulf: Antony's heavy quinqueremes and Cleopatra's sixty Egyptian ships against the lighter, more maneuverable squadron of Marcus Vipsanius Agrippa. With his army weakened by desertions and his lines breached, Antony's center wavered. Cleopatra's squadron broke out and sailed for Egypt; Antony followed with a few ships, abandoning his fleet, which surrendered after burning. The land army, leaderless, gave up a week later. Octavian was now the unchallenged master of the Roman world — and, by extension, of the Mediterranean.",
            el: "Έπειτα από τις εδαφικές 'Δωρεές της Αλεξάνδρειας' του Αντωνίου το 34 π.Χ., που παρέδιδαν ρωμαϊκές επαρχίες στην Κλεοπάτρα και τα παιδιά της, ο Οκταβιανός εξασφάλισε την πίστη της Ιταλίας και κήρυξε πόλεμο — επισήμως μόνο εναντίον της Κλεοπάτρας. Οι στόλοι τους συναντήθηκαν έξω από τον Αμβρακικό Κόλπο: οι βαριές πεντήρεις του Αντωνίου και τα εξήντα αιγυπτιακά πλοία της Κλεοπάτρας απέναντι στην ελαφρύτερη και πιο ευέλικτη μοίρα του Μάρκου Βιψάνιου Αγρίππα. Με τον στρατό του εξασθενημένο από λιποταξίες και τη γραμμή του διασπασμένη, το κέντρο του Αντωνίου τράνταξε. Η μοίρα της Κλεοπάτρας διέρρηξε και απέπλευσε για την Αίγυπτο· ο Αντώνιος την ακολούθησε με λίγα πλοία, εγκαταλείποντας τον στόλο του, που παραδόθηκε αφού πυρπολήθηκε. Ο χερσαίος στρατός, χωρίς ηγέτη, παραδόθηκε μία εβδομάδα αργότερα. Ο Οκταβιανός ήταν πλέον ο αδιαφιλονίκητος κύριος του ρωμαϊκού κόσμου — και, εκ τούτου, της Μεσογείου."
          },
          category: "military"
        }
      ]
    },
    {
      year: -30,
      era: {
        en: "End of Hellenistic Era",
        el: "Τέλος της Ελληνιστικής Εποχής"
      },
      events: [
        {
          title: {
            en: "Suicide of Antony and Cleopatra",
            el: "Αυτοκτονία του Αντώνιου και της Κλεοπάτρας"
          },
          description: {
            en: "Following defeat at Actium, Mark Antony and Cleopatra commit suicide in Alexandria. Egypt becomes a Roman province, ending the last Hellenistic kingdom.",
            el: "Μετά την ήττα στην Ακτίο, ο Μάρκος Αντώνιος και η Κλεοπάτρα αυτοκτονούν στην Αλεξάνδρεια. Η Αίγυπτος γίνεται ρωμαϊκή επαρχία, τερματίζοντας το τελευταίο ελληνιστικό βασίλειο."
          },
          extendedDescription: {
            en: "Octavian advanced on Alexandria in summer 30 BC. Antony, deceived by a false report of Cleopatra's death, fell on his sword and was carried dying to her in the half-completed mausoleum she had taken refuge in. Captive in her own palace, Cleopatra negotiated with Octavian for the recognition of her children's claims; convinced that he intended to display her in his triumph, she had a basket of figs brought in — concealing, in the famous tradition, an asp whose bite she invited, though some ancient sources favor poison taken in a needle or comb. She was thirty-nine. Caesarion, fleeing south, was overtaken and executed; the dynastic line of the Ptolemies, three centuries old, was extinguished. Egypt became Octavian's personal possession, an imperial province governed thereafter by an equestrian prefect.",
            el: "Ο Οκταβιανός προήλασε προς την Αλεξάνδρεια το καλοκαίρι του 30 π.Χ. Ο Αντώνιος, εξαπατημένος από ψευδή είδηση του θανάτου της Κλεοπάτρας, έπεσε στο ξίφος του και μεταφέρθηκε ετοιμοθάνατος κοντά της στο ημιτελές μαυσωλείο όπου είχε καταφύγει. Αιχμάλωτη στο ίδιο της το ανάκτορο, η Κλεοπάτρα διαπραγματεύθηκε με τον Οκταβιανό για την αναγνώριση των δικαιωμάτων των παιδιών της· πεπεισμένη ότι σκόπευε να την εκθέσει στον θρίαμβό του, ζήτησε καλάθι με σύκα — που έκρυβε, κατά τη διάσημη παράδοση, μίαν οχιά, της οποίας το δάγκωμα προκάλεσε, αν και κάποιες αρχαίες πηγές προτιμούν δηλητήριο που χορηγήθηκε με βελόνα ή κτένα. Ήταν τριάντα εννέα ετών. Ο Καισαρίων, διαφεύγοντας προς τον νότο, συνελήφθη και εκτελέστηκε· η δυναστική γραμμή των Πτολεμαίων, τριακοσίων ετών, σβήστηκε. Η Αίγυπτος έγινε προσωπική κτήση του Οκταβιανού, αυτοκρατορική επαρχία διοικούμενη έκτοτε από ιππικής τάξεως έπαρχο."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
