/** Napoleonic Period & Risorgimento — Ναπολεόντεια Περίοδος & Ριζορτζιμέντο · Italian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const NAPOLEONIC_RISORGIMENTO = {
  id: "napoleonic-risorgimento" as const,
  label: {
    en: "Napoleonic Period & Risorgimento",
    el: "Ναπολεόντεια Περίοδος & Ριζορτζιμέντο"
  },
  supertitle: {
    en: "Risorgimento",
    el: "Ριζορτζιμέντο"
  },
  title: {
    en: "The Napoleonic Period & the Risorgimento",
    el: "Η Ναπολεόντεια Περίοδος & το Ριζορτζιμέντο"
  },
  subtitle: {
    en: "From Napoleon's first invasion of 1796 and the fall of Venice through the sister republics, the Restoration, the Carbonari and Mazzini, the revolutions of 1848 and the wars of independence, to Garibaldi's Thousand, the proclamation of the Kingdom of Italy, and the making of Rome its capital in 1871. Slide across the years to read the major events that turned a 'geographical expression' into a nation.",
    el: "Από την πρώτη εισβολή του Ναπολέοντα το 1796 και την πτώση της Βενετίας, μέσα από τις αδελφές δημοκρατίες, την Παλινόρθωση, τους Καρμπονάρους και τον Ματσίνι, τις επαναστάσεις του 1848 και τους πολέμους της ανεξαρτησίας, ως τους Χιλίους του Γκαριμπάλντι, την ανακήρυξη του Βασιλείου της Ιταλίας και την ανάδειξη της Ρώμης σε πρωτεύουσά του το 1871. Μετακινηθείτε ανάμεσα στα έτη για να διαβάσετε τα γεγονότα που μετέτρεψαν μια «γεωγραφική έκφραση» σε έθνος."
  },
  menuDescription: {
    en: "Mazzini, Cavour and Garibaldi make a nation, from Napoleon to the capture of Rome.",
    el: "Ο Ματσίνι, ο Καβούρ κι ο Γκαριμπάλντι φτιάχνουν ένα έθνος, από τον Ναπολέοντα ως την άλωση της Ρώμης."
  },
  footerLabel: {
    en: "Napoleonic Period & Risorgimento · 1796-1871 AD",
    el: "Ναπολεόντεια Περίοδος & Ριζορτζιμέντο · 1796-1871 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Napoleonic Period & the Risorgimento",
    el: "Η Ναπολεόντεια Περίοδος & το Ριζορτζιμέντο"
  },
  theme: THEMES.ruby,
  timeline: [
    {
      year: 1796,
      era: {
        en: "French Invasion",
        el: "Γαλλική Εισβολή"
      },
      events: [
        {
          title: {
            en: "Napoleon's First Italian Campaign",
            el: "Η Πρώτη Ιταλική Εκστρατεία του Ναπολέοντα"
          },
          description: {
            en: "A young General Bonaparte sweeps into northern Italy, routing the Austrians and Piedmontese and overturning the old order of the peninsula in a single dazzling campaign.",
            el: "Ο νεαρός στρατηγός Βοναπάρτης εισβάλλει στη Βόρεια Ιταλία, κατατροπώνοντας Αυστριακούς και Πιεμοντέζους και ανατρέποντας την παλαιά τάξη της χερσονήσου σε μία εκθαμβωτική εκστρατεία."
          },
          extendedDescription: {
            en: "Given command of a ragged, unpaid Army of Italy in March 1796, the twenty-six-year-old Napoleon Bonaparte crossed the Ligurian Alps and in a few weeks split the Austrian and Piedmontese armies, winning at Montenotte, Mondovì, and the bridge of Lodi. Piedmont sued for an armistice, and the French drove on to Milan, Mantua, and the Papal Legations. The campaign introduced revolutionary France to Italy with all its contradictions — the abolition of feudal privilege and the proclamation of liberty on the one hand, the systematic looting of art and treasure for Paris on the other. It also revealed the political genius of a commander who would, within a decade, make himself master of Europe and remake the Italian map at will.",
            el: "Αναλαμβάνοντας τη διοίκηση ενός κουρελιασμένου και απλήρωτου Στρατού της Ιταλίας τον Μάρτιο του 1796, ο εικοσιεξάχρονος Ναπολέων Βοναπάρτης διέσχισε τις Λιγυρικές Άλπεις και μέσα σε λίγες εβδομάδες διέσπασε τους στρατούς της Αυστρίας και του Πιεμόντε, νικώντας στη Μοντενότε, το Μοντοβί και τη γέφυρα του Λόντι. Το Πιεμόντε ζήτησε ανακωχή, και οι Γάλλοι προχώρησαν προς το Μιλάνο, τη Μάντοβα και τις Παπικές Ηγεμονίες. Η εκστρατεία σύστησε στην Ιταλία την επαναστατική Γαλλία με όλες τις αντιφάσεις της — αφενός την κατάργηση των φεουδαρχικών προνομίων και τη διακήρυξη της ελευθερίας, αφετέρου τη συστηματική λεηλασία έργων τέχνης και θησαυρών για το Παρίσι. Φανέρωσε επίσης την πολιτική ιδιοφυΐα ενός στρατηλάτη που μέσα σε μια δεκαετία θα γινόταν κύριος της Ευρώπης και θα ανασχημάτιζε τον χάρτη της Ιταλίας κατά βούληση."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1797,
      era: {
        en: "Fall of Venice",
        el: "Πτώση της Βενετίας"
      },
      events: [
        {
          title: {
            en: "Treaty of Campo Formio Ends the Venetian Republic",
            el: "Η Συνθήκη του Κάμπο Φόρμιο Τερματίζει τη Δημοκρατία της Βενετίας"
          },
          description: {
            en: "Napoleon extinguishes the thousand-year-old Republic of Venice and hands it to Austria, while founding the Cisalpine Republic in Lombardy as a French satellite.",
            el: "Ο Ναπολέων καταλύει τη χιλιόχρονη Δημοκρατία της Βενετίας και την παραδίδει στην Αυστρία, ενώ ιδρύει στη Λομβαρδία την Κισαλπική Δημοκρατία ως γαλλικό δορυφόρο."
          },
          extendedDescription: {
            en: "By the Treaty of Campo Formio of 17 October 1797, Napoleon ended his war with Austria by trading away the Most Serene Republic of Venice, which had surrendered without a fight in May after more than a millennium of independence. Its mainland, Istria, and Dalmatia went to the Habsburgs; the last doge, Ludovico Manin, laid down his ducal cap with the words that he would not need it again. In Lombardy and Emilia, Napoleon meanwhile assembled the Cisalpine Republic, a constitutional client state with a tricolour flag of green, white, and red — the first appearance of the banner that would one day fly over a united Italy. The extinction of Venice shocked patriots and poets alike, and Ugo Foscolo made it the elegiac theme of his Last Letters of Jacopo Ortis.",
            el: "Με τη Συνθήκη του Κάμπο Φόρμιο της 17ης Οκτωβρίου 1797, ο Ναπολέων τερμάτισε τον πόλεμό του με την Αυστρία ανταλλάσσοντας τη Γαληνοτάτη Δημοκρατία της Βενετίας, η οποία είχε παραδοθεί αμαχητί τον Μάιο έπειτα από περισσότερο από μια χιλιετία ανεξαρτησίας. Η ηπειρωτική της επικράτεια, η Ίστρια και η Δαλματία πέρασαν στους Αψβούργους· ο τελευταίος δόγης, Λουδοβίκος Μανίν, απέθεσε τον δουκικό σκούφο του λέγοντας ότι δεν θα τον χρειαζόταν ξανά. Στη Λομβαρδία και την Εμίλια, ο Ναπολέων συγκρότησε εν τω μεταξύ την Κισαλπική Δημοκρατία, ένα συνταγματικό υποτελές κράτος με τρίχρωμη σημαία πράσινη, λευκή και κόκκινη — την πρώτη εμφάνιση του λαβάρου που μια μέρα θα κυμάτιζε πάνω από μια ενωμένη Ιταλία. Η κατάλυση της Βενετίας συγκλόνισε εξίσου πατριώτες και ποιητές, και ο Ούγκο Φώσκολο την έκανε ελεγειακό θέμα των «Τελευταίων Επιστολών του Τζάκοπο Όρτις»."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1799,
      era: {
        en: "Sister Republics",
        el: "Αδελφές Δημοκρατίες"
      },
      events: [
        {
          title: {
            en: "The Parthenopean Republic of Naples",
            el: "Η Παρθενοπαία Δημοκρατία της Νάπολης"
          },
          description: {
            en: "Neapolitan revolutionaries proclaim a short-lived republic that is crushed within months, its leading intellectuals executed in a royalist reaction.",
            el: "Ναπολιτάνοι επαναστάτες ανακηρύσσουν μια βραχύβια δημοκρατία που συντρίβεται μέσα σε μήνες, με τους κορυφαίους διανοούμενούς της να εκτελούνται σε μια βασιλική αντίδραση."
          },
          extendedDescription: {
            en: "When French armies entered Naples in January 1799 and King Ferdinand IV fled to Sicily under British escort, liberal nobles and professionals proclaimed the Parthenopean Republic. Its leaders — among them the scientist Domenico Cirillo and the writer Eleonora Pimentel Fonseca — dreamed of reform but were cut off from the rural masses, whom the cardinal-led Sanfedist army of Fabrizio Ruffo roused against them in the name of throne and altar. After the city fell in June, scores of republicans were hanged despite a promise of safe conduct, with Admiral Nelson lending the Royal Navy to the repression. The brief republic and its martyrs became a foundational memory of the Italian democratic tradition, and a bitter lesson in the gap between enlightened elites and the people they hoped to liberate.",
            el: "Όταν τα γαλλικά στρατεύματα εισήλθαν στη Νάπολη τον Ιανουάριο του 1799 και ο βασιλιάς Φερδινάνδος Δ' κατέφυγε στη Σικελία υπό βρετανική συνοδεία, φιλελεύθεροι ευγενείς και επαγγελματίες ανακήρυξαν την Παρθενοπαία Δημοκρατία. Οι ηγέτες της — ανάμεσά τους ο επιστήμονας Ντομένικο Τσιρίλλο και η συγγραφέας Ελεονόρα Πιμεντέλ Φονσέκα — ονειρεύονταν μεταρρυθμίσεις, αλλά ήταν αποκομμένοι από τις αγροτικές μάζες, τις οποίες ο υπό τον καρδινάλιο σανφεδιστικός στρατός του Φαμπρίτσιο Ρούφο ξεσήκωσε εναντίον τους στο όνομα του θρόνου και του βωμού. Αφού η πόλη έπεσε τον Ιούνιο, δεκάδες δημοκρατικοί απαγχονίστηκαν παρά την υπόσχεση ασφαλούς διέλευσης, με τον ναύαρχο Νέλσον να διαθέτει το Βασιλικό Ναυτικό στην καταστολή. Η σύντομη δημοκρατία και οι μάρτυρές της έγιναν θεμελιακή μνήμη της ιταλικής δημοκρατικής παράδοσης και πικρό μάθημα για το χάσμα ανάμεσα στις πεφωτισμένες ελίτ και τον λαό που ήλπιζαν να απελευθερώσουν."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1805,
      era: {
        en: "Kingdom of Italy",
        el: "Βασίλειο της Ιταλίας"
      },
      events: [
        {
          title: {
            en: "Napoleon Crowned with the Iron Crown",
            el: "Ο Ναπολέων Στέφεται με το Σιδηρούν Στέμμα"
          },
          description: {
            en: "In Milan Cathedral, Napoleon places the ancient Iron Crown of Lombardy on his own head as King of Italy, binding the peninsula's north to his new empire.",
            el: "Στον καθεδρικό του Μιλάνου, ο Ναπολέων τοποθετεί το αρχαίο Σιδηρούν Στέμμα των Λομβαρδών στο ίδιο του το κεφάλι ως Βασιλιάς της Ιταλίας, δένοντας τον Βορρά της χερσονήσου με τη νέα του αυτοκρατορία."
          },
          extendedDescription: {
            en: "Having transformed the Italian Republic into a Kingdom of Italy, Napoleon was crowned in the Duomo of Milan on 26 May 1805, taking up the Iron Crown — said to contain a nail from the True Cross and worn by medieval kings and emperors — with the famous words, 'God gives it to me; let him beware who touches it.' He installed his stepson Eugène de Beauharnais as viceroy. The Napoleonic kingdom, together with the directly annexed departments and the Kingdom of Naples, brought to Italy the Code Napoléon, civil equality, secular administration, conscription, metric weights, and a unified legal and bureaucratic culture. For a generation Italians governed a large modern state and tasted, however imperfectly, the idea of a single Italy — an experience the Restoration could suppress but never erase.",
            el: "Έχοντας μετατρέψει την Ιταλική Δημοκρατία σε Βασίλειο της Ιταλίας, ο Ναπολέων στέφθηκε στον Ντουόμο του Μιλάνου στις 26 Μαΐου 1805, παίρνοντας το Σιδηρούν Στέμμα — που λέγεται ότι περιέχει ένα καρφί από τον Τίμιο Σταυρό και που φορούσαν μεσαιωνικοί βασιλείς και αυτοκράτορες — με τα περίφημα λόγια: «Ο Θεός μου το δίνει· αλίμονο σε όποιον το αγγίξει». Διόρισε τον προγονό του Ευγένιο ντε Μπωαρναί αντιβασιλέα. Το ναπολεόντειο βασίλειο, μαζί με τα απευθείας προσαρτημένα διαμερίσματα και το Βασίλειο της Νάπολης, έφερε στην Ιταλία τον Κώδικα του Ναπολέοντα, την αστική ισότητα, τη λαϊκή διοίκηση, την υποχρεωτική στράτευση, το μετρικό σύστημα και μια ενιαία νομική και γραφειοκρατική κουλτούρα. Για μια γενιά οι Ιταλοί κυβέρνησαν ένα μεγάλο σύγχρονο κράτος και γεύτηκαν, όσο ατελώς κι αν ήταν, την ιδέα μιας ενιαίας Ιταλίας — εμπειρία που η Παλινόρθωση μπορούσε να καταπιέσει αλλά ποτέ να σβήσει."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1808,
      era: {
        en: "Napoleonic South",
        el: "Ναπολεόντειος Νότος"
      },
      events: [
        {
          title: {
            en: "Murat, King of Naples, Reforms the South",
            el: "Ο Μυρά, Βασιλιάς της Νάπολης, Μεταρρυθμίζει τον Νότο"
          },
          description: {
            en: "Joachim Murat, Napoleon's cavalry marshal, takes the throne of Naples and abolishes feudalism, modernising the administration of the Mezzogiorno.",
            el: "Ο Ιωακείμ Μυρά, ίππαρχος του Ναπολέοντα, αναλαμβάνει τον θρόνο της Νάπολης και καταργεί τη φεουδαρχία, εκσυγχρονίζοντας τη διοίκηση του Μετζοτζόρνο."
          },
          extendedDescription: {
            en: "After Joseph Bonaparte was moved to Spain, Napoleon made his brilliant and flamboyant brother-in-law Joachim Murat King of Naples in 1808. Building on reforms begun under Joseph, Murat's government abolished the surviving feudal jurisdictions, dissolved many monasteries, introduced the Napoleonic codes, reorganised the provinces, and began public works and a land survey. The dynamism of these years created a new class of landowners and officials with a stake in modern government, even as conscription and taxation bred resentment and rural banditry. When the empire began to crumble, Murat would gamble on the national idea himself, issuing the 1815 Rimini Proclamation calling on Italians to fight for independence — a romantic failure that nonetheless prefigured the Risorgimento.",
            el: "Αφού ο Ιωσήφ Βοναπάρτης μετατέθηκε στην Ισπανία, ο Ναπολέων έκανε τον λαμπρό και επιδεικτικό γαμπρό του Ιωακείμ Μυρά Βασιλιά της Νάπολης το 1808. Στηριζόμενη στις μεταρρυθμίσεις που είχε ξεκινήσει ο Ιωσήφ, η κυβέρνηση του Μυρά κατάργησε τις εναπομείνασες φεουδαρχικές δικαιοδοσίες, διέλυσε πολλά μοναστήρια, εισήγαγε τους ναπολεόντειους κώδικες, αναδιοργάνωσε τις επαρχίες και ξεκίνησε δημόσια έργα και κτηματολόγιο. Ο δυναμισμός αυτών των χρόνων δημιούργησε μια νέα τάξη γαιοκτημόνων και αξιωματούχων με συμφέρον στη σύγχρονη διακυβέρνηση, ακόμη κι αν η στράτευση και η φορολογία γεννούσαν δυσαρέσκεια και αγροτική ληστεία. Όταν η αυτοκρατορία άρχισε να καταρρέει, ο Μυρά θα ποντάριζε ο ίδιος στην εθνική ιδέα, εκδίδοντας το 1815 την Προκήρυξη του Ρίμινι που καλούσε τους Ιταλούς να αγωνιστούν για την ανεξαρτησία — μια ρομαντική αποτυχία που ωστόσο προεικόνιζε το Risorgimento."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1815,
      era: {
        en: "Restoration",
        el: "Παλινόρθωση"
      },
      events: [
        {
          title: {
            en: "The Congress of Vienna Restores the Old Order",
            el: "Το Συνέδριο της Βιέννης Αποκαθιστά την Παλαιά Τάξη"
          },
          description: {
            en: "With Napoleon defeated, the great powers restore the old dynasties and give Austria mastery of a fragmented Italy of restored kingdoms and duchies.",
            el: "Με τον Ναπολέοντα ηττημένο, οι μεγάλες δυνάμεις αποκαθιστούν τις παλαιές δυναστείες και παραχωρούν στην Αυστρία την κυριαρχία μιας κατακερματισμένης Ιταλίας αποκαταστημένων βασιλείων και δουκάτων."
          },
          extendedDescription: {
            en: "The settlement of 1815 redrew the Italian map into a patchwork once more: the Kingdom of Sardinia (Piedmont) regained Savoy and absorbed Genoa; Lombardy and Venetia became an Austrian crown-land; Habsburg archdukes ruled Tuscany and Modena; Marie Louise held Parma; the pope recovered the Papal States; and the Bourbons returned to a reunited Kingdom of the Two Sicilies. Joachim Murat's desperate bid to rally Italy ended with his defeat at Tolentino and his execution by firing squad in October 1815. Metternich could dismiss Italy as a mere 'geographical expression', yet the Napoleonic decades had left behind law codes, ideas of citizenship, a tricolour, and a generation that had governed itself — combustible material that secret societies and patriots would soon set alight.",
            el: "Η διευθέτηση του 1815 ξαναχάραξε τον χάρτη της Ιταλίας σε ένα νέο συνονθύλευμα: το Βασίλειο της Σαρδηνίας (Πιεμόντε) ανέκτησε τη Σαβοΐα και απορρόφησε τη Γένοβα· η Λομβαρδία και η Βενετία έγιναν αυστριακή επικράτεια· Αψβούργοι αρχιδούκες κυβέρνησαν την Τοσκάνη και τη Μόντενα· η Μαρία Λουίζα κράτησε την Πάρμα· ο πάπας ανέκτησε τα Παπικά Κράτη· και οι Βουρβώνοι επέστρεψαν σε ένα επανενωμένο Βασίλειο των Δύο Σικελιών. Η απεγνωσμένη προσπάθεια του Ιωακείμ Μυρά να ξεσηκώσει την Ιταλία έληξε με την ήττα του στο Τολεντίνο και την εκτέλεσή του δι' εκτελεστικού αποσπάσματος τον Οκτώβριο του 1815. Ο Μέττερνιχ μπορούσε να απορρίπτει την Ιταλία ως απλή «γεωγραφική έκφραση», όμως οι ναπολεόντειες δεκαετίες είχαν αφήσει πίσω τους νομικούς κώδικες, ιδέες ιθαγένειας, μια τρίχρωμη σημαία και μια γενιά που είχε αυτοκυβερνηθεί — εύφλεκτο υλικό που μυστικές εταιρείες και πατριώτες σύντομα θα άναβαν."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1820,
      era: {
        en: "The Carbonari",
        el: "Οι Καρμπονάροι"
      },
      events: [
        {
          title: {
            en: "The Carbonari Revolts",
            el: "Οι Εξεγέρσεις των Καρμπονάρων"
          },
          description: {
            en: "Secret societies rise in Naples and Piedmont demanding constitutions, only to be crushed by Austrian arms — the first stirrings of the Risorgimento.",
            el: "Μυστικές εταιρείες εξεγείρονται στη Νάπολη και το Πιεμόντε απαιτώντας συντάγματα, μόνο για να συντριβούν από τα αυστριακά όπλα — τα πρώτα σκιρτήματα του Risorgimento."
          },
          extendedDescription: {
            en: "In July 1820 army officers and members of the Carbonari — a clandestine network of 'charcoal-burners' bound by oaths and ritual — forced King Ferdinand of the Two Sicilies to grant a constitution. The next spring Piedmontese liberals rose at Turin with the same demand, and Prince Charles Albert briefly seemed to favour them. The Holy Alliance would tolerate no such thing: an Austrian army marched south to restore Ferdinand's absolute rule, and another crushed the Piedmontese at Novara's predecessor engagement. Hundreds of conspirators were imprisoned or exiled, among them the writer Silvio Pellico, whose memoir of his years in the Spielberg fortress, My Prisons, did more for the patriotic cause than a lost battle. The revolts failed, but they forged the conspiratorial, constitution-seeking politics that would drive the next four decades.",
            el: "Τον Ιούλιο του 1820 αξιωματικοί του στρατού και μέλη των Καρμπονάρων — ενός μυστικού δικτύου «καρβουνιάρηδων» δεμένων με όρκους και τελετουργίες — ανάγκασαν τον βασιλιά Φερδινάνδο των Δύο Σικελιών να παραχωρήσει σύνταγμα. Την επόμενη άνοιξη Πιεμοντέζοι φιλελεύθεροι εξεγέρθηκαν στο Τορίνο με το ίδιο αίτημα, και ο πρίγκιπας Κάρολος Αλβέρτος για λίγο φάνηκε να τους ευνοεί. Η Ιερά Συμμαχία δεν θα ανεχόταν κάτι τέτοιο: ένας αυστριακός στρατός βάδισε προς τον Νότο για να αποκαταστήσει την απόλυτη εξουσία του Φερδινάνδου, και ένας άλλος συνέτριψε τους Πιεμοντέζους. Εκατοντάδες συνωμότες φυλακίστηκαν ή εξορίστηκαν, ανάμεσά τους ο συγγραφέας Σίλβιο Πέλλικο, του οποίου το απομνημόνευμα από τα χρόνια στο φρούριο Σπίλμπεργκ, «Οι Φυλακές μου», προσέφερε στην πατριωτική υπόθεση περισσότερα από μια χαμένη μάχη. Οι εξεγέρσεις απέτυχαν, αλλά σφυρηλάτησαν τη συνωμοτική, συνταγματική πολιτική που θα κινούσε τις επόμενες τέσσερις δεκαετίες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1831,
      era: {
        en: "Young Italy",
        el: "Νεαρά Ιταλία"
      },
      events: [
        {
          title: {
            en: "Mazzini Founds Young Italy",
            el: "Ο Ματσίνι Ιδρύει τη Νεαρά Ιταλία"
          },
          description: {
            en: "From exile, Giuseppe Mazzini founds Giovine Italia, preaching a democratic, republican, and united Italy made by the will of its own people.",
            el: "Από την εξορία, ο Τζουζέπε Ματσίνι ιδρύει τη Giovine Italia, κηρύσσοντας μια δημοκρατική, ρεπουμπλικανική και ενωμένη Ιταλία φτιαγμένη από τη βούληση του ίδιου του λαού της."
          },
          extendedDescription: {
            en: "Disillusioned with the failed conspiracies of the Carbonari, the Genoese exile Giuseppe Mazzini founded Young Italy in Marseille in 1831, a movement aimed at the young and built on open propaganda as much as secret organisation. Its creed was uncompromising: a single, independent, republican Italy, 'one, free, and from the Alps to the sea', to be achieved through national insurrection and moral regeneration. Mazzini's tireless writing and his network of cells made the idea of Italian unity a popular faith rather than a court intrigue, and inspired a generation of activists — including the young Giuseppe Garibaldi. His attempted risings of the 1830s and 1840s all failed and cost many lives, but Mazzini gave the Risorgimento its prophetic voice and its insistence that Italy must be made by Italians themselves.",
            el: "Απογοητευμένος από τις αποτυχημένες συνωμοσίες των Καρμπονάρων, ο Γενοβέζος εξόριστος Τζουζέπε Ματσίνι ίδρυσε τη Νεαρά Ιταλία στη Μασσαλία το 1831, ένα κίνημα που απευθυνόταν στους νέους και στηριζόταν τόσο στην ανοιχτή προπαγάνδα όσο και στη μυστική οργάνωση. Το πιστεύω του ήταν αδιάλλακτο: μια ενιαία, ανεξάρτητη, ρεπουμπλικανική Ιταλία, «μία, ελεύθερη, από τις Άλπεις ως τη θάλασσα», που θα επιτυγχανόταν μέσω εθνικής εξέγερσης και ηθικής αναγέννησης. Η ακούραστη γραφή του Ματσίνι και το δίκτυο των πυρήνων του έκαναν την ιδέα της ιταλικής ένωσης λαϊκή πίστη και όχι αυλική ίντριγκα, και ενέπνευσαν μια γενιά αγωνιστών — μεταξύ τους και τον νεαρό Τζουζέπε Γκαριμπάλντι. Οι απόπειρες εξεγέρσεων της δεκαετίας του 1830 και του 1840 απέτυχαν όλες και στοίχισαν πολλές ζωές, αλλά ο Ματσίνι χάρισε στο Risorgimento την προφητική του φωνή και την επιμονή ότι την Ιταλία πρέπει να τη φτιάξουν οι ίδιοι οι Ιταλοί."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1848,
      era: {
        en: "Springtime of Peoples",
        el: "Άνοιξη των Λαών"
      },
      events: [
        {
          title: {
            en: "The Revolutions of 1848 and the First War of Independence",
            el: "Οι Επαναστάσεις του 1848 και ο Πρώτος Πόλεμος της Ανεξαρτησίας"
          },
          description: {
            en: "Revolution sweeps the peninsula: Milan expels the Austrians in the Five Days, Piedmont declares war, and rulers grant constitutions, including the lasting Statuto Albertino.",
            el: "Η επανάσταση σαρώνει τη χερσόνησο: το Μιλάνο εκδιώκει τους Αυστριακούς στις Πέντε Ημέρες, το Πιεμόντε κηρύσσει πόλεμο, και ηγεμόνες παραχωρούν συντάγματα, μεταξύ τους και το διαρκές Αλβερτιανό Καταστατικό."
          },
          extendedDescription: {
            en: "In the European 'springtime of peoples', revolution erupted across Italy in early 1848. Palermo rose in January; Naples, Tuscany, Piedmont, and even the papacy granted constitutions. In March the people of Milan drove the army of Marshal Radetzky from the city in five days of barricade fighting, and Venice proclaimed a republic under Daniele Manin. King Charles Albert of Piedmont declared war on Austria, leading a coalition in the First War of Independence. The promising spring soon soured: Radetzky regrouped and crushed the Piedmontese at Custoza in July, Pope Pius IX withdrew his support, and the coalition fell apart. Yet one achievement endured — the Statuto Albertino, the liberal constitution Charles Albert granted in March 1848, which would become the constitution of a united Italy and last until 1948.",
            el: "Στην ευρωπαϊκή «άνοιξη των λαών», η επανάσταση ξέσπασε σε όλη την Ιταλία στις αρχές του 1848. Το Παλέρμο εξεγέρθηκε τον Ιανουάριο· η Νάπολη, η Τοσκάνη, το Πιεμόντε, ακόμη και ο παπισμός παραχώρησαν συντάγματα. Τον Μάρτιο ο λαός του Μιλάνου έδιωξε τον στρατό του στρατάρχη Ραντέτσκι από την πόλη σε πέντε ημέρες μάχης στα οδοφράγματα, και η Βενετία ανακήρυξε δημοκρατία υπό τον Ντανιέλε Μανίν. Ο βασιλιάς Κάρολος Αλβέρτος του Πιεμόντε κήρυξε πόλεμο στην Αυστρία, ηγούμενος ενός συνασπισμού στον Πρώτο Πόλεμο της Ανεξαρτησίας. Η ελπιδοφόρα άνοιξη σύντομα ξίνισε: ο Ραντέτσκι ανασυντάχθηκε και συνέτριψε τους Πιεμοντέζους στην Κουστότσα τον Ιούλιο, ο Πάπας Πίος Θ' απέσυρε τη στήριξή του και ο συνασπισμός διαλύθηκε. Όμως ένα επίτευγμα διατηρήθηκε — το Αλβερτιανό Καταστατικό, το φιλελεύθερο σύνταγμα που παραχώρησε ο Κάρολος Αλβέρτος τον Μάρτιο του 1848, που θα γινόταν το σύνταγμα μιας ενωμένης Ιταλίας και θα διαρκούσε ως το 1948."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1849,
      era: {
        en: "The Roman Republic",
        el: "Η Ρωμαϊκή Δημοκρατία"
      },
      events: [
        {
          title: {
            en: "The Roman Republic and the Defeat at Novara",
            el: "Η Ρωμαϊκή Δημοκρατία και η Ήττα στη Νοβάρα"
          },
          description: {
            en: "Mazzini and Garibaldi defend a republic in Rome against French arms, while Piedmont's defeat at Novara brings the young Victor Emmanuel II to the throne.",
            el: "Ο Ματσίνι και ο Γκαριμπάλντι υπερασπίζονται μια δημοκρατία στη Ρώμη απέναντι στα γαλλικά όπλα, ενώ η ήττα του Πιεμόντε στη Νοβάρα ανεβάζει στον θρόνο τον νεαρό Βίκτωρα Εμμανουήλ Β'."
          },
          extendedDescription: {
            en: "After Pope Pius IX fled Rome, a constituent assembly proclaimed the Roman Republic in February 1849, governed by a triumvirate dominated by Mazzini and defended by Garibaldi. For a few months the city enacted democratic reforms and abolished the Inquisition, before a French expeditionary army sent by Louis-Napoleon besieged it to restore the pope. Garibaldi's heroic defence of the Janiculum and his subsequent retreat across central Italy — during which his wife Anita died — became legend. In the north, Charles Albert had renewed the war only to be routed by Radetzky at Novara in March; he abdicated that night in favour of his son Victor Emmanuel II, who kept the Statuto and Piedmont's liberal course alive. The revolutions of 1848-49 had failed everywhere, but they made Piedmont the recognised champion of the national cause.",
            el: "Αφού ο Πάπας Πίος Θ' εγκατέλειψε τη Ρώμη, μια συντακτική συνέλευση ανακήρυξε τη Ρωμαϊκή Δημοκρατία τον Φεβρουάριο του 1849, που κυβερνήθηκε από τριανδρία υπό την κυριαρχία του Ματσίνι και υπερασπίστηκε ο Γκαριμπάλντι. Για λίγους μήνες η πόλη θέσπισε δημοκρατικές μεταρρυθμίσεις και κατάργησε την Ιερά Εξέταση, προτού ένα γαλλικό εκστρατευτικό σώμα σταλμένο από τον Λουδοβίκο-Ναπολέοντα την πολιορκήσει για να αποκαταστήσει τον πάπα. Η ηρωική υπεράσπιση του Ιανικούλου από τον Γκαριμπάλντι και η μετέπειτα υποχώρησή του μέσα από την κεντρική Ιταλία — κατά την οποία πέθανε η σύζυγός του Ανίτα — έγιναν θρύλος. Στον Βορρά, ο Κάρολος Αλβέρτος είχε ανανεώσει τον πόλεμο μόνο για να κατατροπωθεί από τον Ραντέτσκι στη Νοβάρα τον Μάρτιο· παραιτήθηκε εκείνο το βράδυ υπέρ του γιου του Βίκτωρα Εμμανουήλ Β', ο οποίος κράτησε ζωντανό το Καταστατικό και τη φιλελεύθερη πορεία του Πιεμόντε. Οι επαναστάσεις του 1848-49 είχαν αποτύχει παντού, αλλά έκαναν το Πιεμόντε τον αναγνωρισμένο πρόμαχο της εθνικής υπόθεσης."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1859,
      era: {
        en: "Second War of Independence",
        el: "Δεύτερος Πόλεμος της Ανεξαρτησίας"
      },
      events: [
        {
          title: {
            en: "Magenta, Solferino, and the Liberation of Lombardy",
            el: "Μαγκέντα, Σολφερίνο και η Απελευθέρωση της Λομβαρδίας"
          },
          description: {
            en: "Cavour's Piedmont, allied with Napoleon III, defeats Austria at Magenta and Solferino and wins Lombardy, setting off a chain of annexations across central Italy.",
            el: "Το Πιεμόντε του Καβούρ, σύμμαχο με τον Ναπολέοντα Γ', νικά την Αυστρία στη Μαγκέντα και το Σολφερίνο και κερδίζει τη Λομβαρδία, πυροδοτώντας μια αλυσίδα προσαρτήσεων στην κεντρική Ιταλία."
          },
          extendedDescription: {
            en: "The architect of victory was Count Camillo Benso di Cavour, the Piedmontese prime minister, who modernised his state's economy and army and at Plombières in 1858 secured a secret alliance with Napoleon III of France. Provoked into declaring war, Austria was beaten at Magenta and, on 24 June 1859, in the immense and bloody battle of Solferino, whose carnage moved the Swiss observer Henry Dunant to found the Red Cross. Napoleon III, alarmed by the casualties and by Prussian mobilisation, made a separate peace at Villafranca that gave Piedmont only Lombardy, not Venetia, infuriating Cavour. But the war's momentum proved unstoppable: over the following months Tuscany, Modena, Parma, and the Romagna expelled their rulers and voted by plebiscite to join the Kingdom of Sardinia, doubling its size and bringing unification within reach.",
            el: "Ο αρχιτέκτονας της νίκης ήταν ο κόμης Καμίλλο Μπένσο ντι Καβούρ, ο πρωθυπουργός του Πιεμόντε, που εκσυγχρόνισε την οικονομία και τον στρατό του κράτους του και στο Πλομπιέρ το 1858 εξασφάλισε μυστική συμμαχία με τον Ναπολέοντα Γ' της Γαλλίας. Προκληθείσα να κηρύξει πόλεμο, η Αυστρία ηττήθηκε στη Μαγκέντα και, στις 24 Ιουνίου 1859, στην τεράστια και αιματηρή μάχη του Σολφερίνο, της οποίας η σφαγή συγκίνησε τον Ελβετό παρατηρητή Ερρίκο Ντυνάν να ιδρύσει τον Ερυθρό Σταυρό. Ο Ναπολέων Γ', ανήσυχος από τις απώλειες και την πρωσική επιστράτευση, συνήψε χωριστή ειρήνη στη Βιλαφράνκα που έδινε στο Πιεμόντε μόνο τη Λομβαρδία, όχι τη Βενετία, εξοργίζοντας τον Καβούρ. Όμως η δυναμική του πολέμου αποδείχθηκε ασταμάτητη: τους επόμενους μήνες η Τοσκάνη, η Μόντενα, η Πάρμα και η Ρομάνια εκδίωξαν τους ηγεμόνες τους και ψήφισαν με δημοψήφισμα να ενωθούν με το Βασίλειο της Σαρδηνίας, διπλασιάζοντας το μέγεθός του και φέρνοντας την ένωση κοντά."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1860,
      era: {
        en: "Expedition of the Thousand",
        el: "Εκστρατεία των Χιλίων"
      },
      events: [
        {
          title: {
            en: "Garibaldi and the Thousand Conquer the South",
            el: "Ο Γκαριμπάλντι και οι Χίλιοι Κατακτούν τον Νότο"
          },
          description: {
            en: "Garibaldi lands in Sicily with a thousand red-shirted volunteers, topples the Bourbon kingdom, and hands the conquered south to Victor Emmanuel II.",
            el: "Ο Γκαριμπάλντι αποβιβάζεται στη Σικελία με χίλιους ερυθροχίτωνες εθελοντές, ανατρέπει το βασίλειο των Βουρβώνων και παραδίδει τον κατακτημένο Νότο στον Βίκτωρα Εμμανουήλ Β'."
          },
          extendedDescription: {
            en: "In May 1860 Giuseppe Garibaldi sailed from Quarto near Genoa with about a thousand volunteers — the Mille, in their red shirts — and landed at Marsala in Sicily. Exploiting a peasant revolt against the Bourbons, he won an improbable victory at Calatafimi, took Palermo, and within months had conquered the whole island and crossed to the mainland, entering Naples in triumph as the Bourbon army collapsed. As Garibaldi, a republican, drove north, Cavour feared he might march on Rome and provoke France, so Piedmontese troops moved south through the Papal States to meet him. At Teano in October the general hailed Victor Emmanuel II as King of Italy and surrendered his conquests to the crown. Plebiscites in the south and in Umbria and the Marches ratified union with Piedmont, leaving only Rome and Venetia outside the new nation.",
            el: "Τον Μάιο του 1860 ο Τζουζέπε Γκαριμπάλντι απέπλευσε από το Κουάρτο κοντά στη Γένοβα με περίπου χίλιους εθελοντές — τους Mille, με τα κόκκινα πουκάμισά τους — και αποβιβάστηκε στη Μαρσάλα της Σικελίας. Εκμεταλλευόμενος μια αγροτική εξέγερση κατά των Βουρβώνων, κέρδισε μια απίθανη νίκη στο Καλατάφιμι, κατέλαβε το Παλέρμο και μέσα σε μήνες είχε κατακτήσει ολόκληρο το νησί και είχε περάσει στην ηπειρωτική χώρα, εισερχόμενος θριαμβευτικά στη Νάπολη καθώς ο στρατός των Βουρβώνων κατέρρεε. Καθώς ο Γκαριμπάλντι, ένας ρεπουμπλικάνος, προχωρούσε βόρεια, ο Καβούρ φοβήθηκε μήπως βαδίσει στη Ρώμη και προκαλέσει τη Γαλλία, γι' αυτό πιεμοντέζικα στρατεύματα κατέβηκαν νότια μέσα από τα Παπικά Κράτη για να τον συναντήσουν. Στο Τεάνο τον Οκτώβριο ο στρατηγός χαιρέτισε τον Βίκτωρα Εμμανουήλ Β' ως Βασιλιά της Ιταλίας και παρέδωσε τις κατακτήσεις του στο στέμμα. Δημοψηφίσματα στον Νότο, την Ούμπρια και τις Μάρκες επικύρωσαν την ένωση με το Πιεμόντε, αφήνοντας μόνο τη Ρώμη και τη Βενετία έξω από το νέο έθνος."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1861,
      era: {
        en: "Kingdom of Italy",
        el: "Βασίλειο της Ιταλίας"
      },
      events: [
        {
          title: {
            en: "Proclamation of the Kingdom of Italy",
            el: "Ανακήρυξη του Βασιλείου της Ιταλίας"
          },
          description: {
            en: "The first Italian parliament meets in Turin and proclaims Victor Emmanuel II King of Italy, uniting most of the peninsula under one crown for the first time since antiquity.",
            el: "Το πρώτο ιταλικό κοινοβούλιο συνέρχεται στο Τορίνο και ανακηρύσσει τον Βίκτωρα Εμμανουήλ Β' Βασιλιά της Ιταλίας, ενώνοντας το μεγαλύτερο μέρος της χερσονήσου υπό ένα στέμμα για πρώτη φορά από την αρχαιότητα."
          },
          extendedDescription: {
            en: "On 17 March 1861 the parliament assembled in Turin declared Victor Emmanuel II 'King of Italy by the grace of God and the will of the nation', and the Kingdom of Italy was born. Its founders faced the daunting task captured in Massimo d'Azeglio's reputed phrase, 'We have made Italy; now we must make Italians' — a land of deep regional divides, mass illiteracy, a yawning gap between an industrialising north and an agrarian south, and a population that mostly spoke dialects rather than Italian. Cavour, the indispensable statesman of unification, died exhausted only weeks later in June 1861, leaving the new state to lesser hands. Two great prizes still lay beyond its borders: Venetia, held by Austria, and Rome, guarded for the pope by a French garrison.",
            el: "Στις 17 Μαρτίου 1861 το κοινοβούλιο που συνήλθε στο Τορίνο ανακήρυξε τον Βίκτωρα Εμμανουήλ Β' «Βασιλιά της Ιταλίας ελέω Θεού και βουλήσει του έθνους», και το Βασίλειο της Ιταλίας γεννήθηκε. Οι ιδρυτές του αντιμετώπιζαν το δυσβάστακτο έργο που αποτυπώνει η αποδιδόμενη στον Μάσσιμο ντ' Αζέλιο φράση: «Φτιάξαμε την Ιταλία· τώρα πρέπει να φτιάξουμε τους Ιταλούς» — μια χώρα με βαθιές περιφερειακές διαιρέσεις, μαζικό αναλφαβητισμό, χαώδες χάσμα ανάμεσα σε έναν εκβιομηχανιζόμενο Βορρά και έναν αγροτικό Νότο, και έναν πληθυσμό που κυρίως μιλούσε διαλέκτους αντί για τα ιταλικά. Ο Καβούρ, ο αναντικατάστατος πολιτικός της ένωσης, πέθανε εξαντλημένος μόλις λίγες εβδομάδες αργότερα τον Ιούνιο του 1861, αφήνοντας το νέο κράτος σε χέρια κατώτερα. Δύο μεγάλα έπαθλα βρίσκονταν ακόμη πέρα από τα σύνορά του: η Βενετία, που κρατούσε η Αυστρία, και η Ρώμη, που φρουρούσε για τον πάπα μια γαλλική φρουρά."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1866,
      era: {
        en: "Third War of Independence",
        el: "Τρίτος Πόλεμος της Ανεξαρτησίας"
      },
      events: [
        {
          title: {
            en: "The Annexation of Venetia",
            el: "Η Προσάρτηση της Βενετίας"
          },
          description: {
            en: "Allied with Prussia against Austria, Italy gains Venetia despite battlefield setbacks at Custoza and Lissa, adding the north-east to the kingdom.",
            el: "Σύμμαχη της Πρωσίας εναντίον της Αυστρίας, η Ιταλία αποκτά τη Βενετία παρά τις στρατιωτικές αναποδιές στην Κουστότσα και τη Λίσσα, προσθέτοντας τον βορειοανατολικό χώρο στο βασίλειο."
          },
          extendedDescription: {
            en: "When Prussia went to war with Austria in 1866, Italy seized the chance and joined Bismarck's side to claim Venetia. The campaign went badly in the field: the Italian army was checked at Custoza, and the navy suffered a humiliating defeat at Lissa in the Adriatic, the first major battle between ironclad fleets. But Prussia's decisive victory at Königgrätz settled the war, and Austria, ceding Venetia to France, allowed it to be transferred to Italy and ratified by plebiscite. The acquisition of Venice and the Veneto rounded out the kingdom's north-east and avenged the lost republic of 1849. Only one great gap remained in the national map — Rome, still ruled by the pope under French protection.",
            el: "Όταν η Πρωσία πολέμησε την Αυστρία το 1866, η Ιταλία άδραξε την ευκαιρία και τάχθηκε στο πλευρό του Μπίσμαρκ για να διεκδικήσει τη Βενετία. Η εκστρατεία πήγε άσχημα στο πεδίο: ο ιταλικός στρατός ανακόπηκε στην Κουστότσα, και ο στόλος υπέστη ταπεινωτική ήττα στη Λίσσα στην Αδριατική, την πρώτη μεγάλη μάχη ανάμεσα σε θωρηκτούς στόλους. Όμως η αποφασιστική νίκη της Πρωσίας στο Καίνιγκρετς έκρινε τον πόλεμο, και η Αυστρία, παραχωρώντας τη Βενετία στη Γαλλία, επέτρεψε τη μεταβίβασή της στην Ιταλία και την επικύρωσή της με δημοψήφισμα. Η απόκτηση της Βενετίας και του Βένετο ολοκλήρωσε τον βορειοανατολικό χώρο του βασιλείου και εκδικήθηκε τη χαμένη δημοκρατία του 1849. Ένα μόνο μεγάλο κενό απέμενε στον εθνικό χάρτη — η Ρώμη, που κυβερνούσε ακόμη ο πάπας υπό γαλλική προστασία."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1870,
      era: {
        en: "Capture of Rome",
        el: "Άλωση της Ρώμης"
      },
      events: [
        {
          title: {
            en: "The Breach of Porta Pia Ends the Papal States",
            el: "Το Ρήγμα της Πόρτα Πία Τερματίζει τα Παπικά Κράτη"
          },
          description: {
            en: "With the French garrison withdrawn, Italian troops breach the walls of Rome at Porta Pia, ending more than a thousand years of papal temporal rule.",
            el: "Με τη γαλλική φρουρά αποσυρμένη, ιταλικά στρατεύματα ανοίγουν ρήγμα στα τείχη της Ρώμης στην Πόρτα Πία, τερματίζοντας περισσότερα από χίλια χρόνια κοσμικής παπικής εξουσίας."
          },
          extendedDescription: {
            en: "The fall of Napoleon III in the Franco-Prussian War removed the French garrison that had shielded the pope since 1849. On 20 September 1870 the army of King Victor Emmanuel II bombarded a breach beside the Porta Pia and entered Rome after token resistance; Pope Pius IX ordered his small force to lay down arms and withdrew into the Vatican, declaring himself a 'prisoner' and refusing to recognise the Italian state. A plebiscite overwhelmingly endorsed annexation. The capture of Rome completed the territorial unification of Italy but opened the 'Roman Question', the bitter rupture between the new kingdom and the papacy that would not be settled until the Lateran Pacts of 1929. For patriots, however, the dream of centuries had at last been realised: Rome was Italian.",
            el: "Η πτώση του Ναπολέοντα Γ' στον Γαλλοπρωσικό Πόλεμο απέσυρε τη γαλλική φρουρά που προστάτευε τον πάπα από το 1849. Στις 20 Σεπτεμβρίου 1870 ο στρατός του βασιλιά Βίκτωρα Εμμανουήλ Β' άνοιξε με κανονιοβολισμό ρήγμα δίπλα στην Πόρτα Πία και εισήλθε στη Ρώμη έπειτα από συμβολική αντίσταση· ο Πάπας Πίος Θ' διέταξε τη μικρή του δύναμη να καταθέσει τα όπλα και αποσύρθηκε στο Βατικανό, αυτοανακηρυσσόμενος «αιχμάλωτος» και αρνούμενος να αναγνωρίσει το ιταλικό κράτος. Δημοψήφισμα ενέκρινε συντριπτικά την προσάρτηση. Η άλωση της Ρώμης ολοκλήρωσε την εδαφική ένωση της Ιταλίας, αλλά άνοιξε το «Ρωμαϊκό Ζήτημα», την πικρή ρήξη ανάμεσα στο νέο βασίλειο και τον παπισμό που δεν θα επιλυόταν παρά με τα Σύμφωνα του Λατερανού το 1929. Για τους πατριώτες, ωστόσο, το όνειρο αιώνων είχε επιτέλους πραγματοποιηθεί: η Ρώμη ήταν ιταλική."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1871,
      era: {
        en: "Capital of Italy",
        el: "Πρωτεύουσα της Ιταλίας"
      },
      events: [
        {
          title: {
            en: "Rome Becomes the Capital of Italy",
            el: "Η Ρώμη Γίνεται Πρωτεύουσα της Ιταλίας"
          },
          description: {
            en: "The government moves from Florence to Rome, which becomes the capital of the united kingdom and the symbolic culmination of the Risorgimento.",
            el: "Η κυβέρνηση μεταφέρεται από τη Φλωρεντία στη Ρώμη, που γίνεται πρωτεύουσα του ενωμένου βασιλείου και η συμβολική κορύφωση του Risorgimento."
          },
          extendedDescription: {
            en: "In the summer of 1871 the capital of the Kingdom of Italy was transferred from Florence — itself capital only since 1865 — to Rome, and Victor Emmanuel II took up residence in the Quirinal Palace, the former papal seat. The Law of Guarantees passed that year unilaterally defined the pope's status and offered him an annual subsidy, which Pius IX refused. The making of Rome into the capital set the final seal on national unification and turned the city of the Caesars and the popes into the centre of a modern nation-state. The heroic age of the Risorgimento was over; the harder, more prosaic work of building Italy — its railways and schools, its army and bureaucracy, its fractious liberal politics and its unresolved 'southern question' — now began in earnest.",
            el: "Το καλοκαίρι του 1871 η πρωτεύουσα του Βασιλείου της Ιταλίας μεταφέρθηκε από τη Φλωρεντία — που ήταν και η ίδια πρωτεύουσα μόλις από το 1865 — στη Ρώμη, και ο Βίκτωρ Εμμανουήλ Β' εγκαταστάθηκε στο Παλάτι του Κυρινάλιου, την πρώην παπική έδρα. Ο Νόμος των Εγγυήσεων που ψηφίστηκε εκείνη τη χρονιά καθόρισε μονομερώς το καθεστώς του πάπα και του πρόσφερε ετήσια επιχορήγηση, την οποία ο Πίος Θ' αρνήθηκε. Η ανάδειξη της Ρώμης σε πρωτεύουσα έβαλε την τελική σφραγίδα στην εθνική ένωση και μετέτρεψε την πόλη των Καισάρων και των παπών στο κέντρο ενός σύγχρονου εθνικού κράτους. Η ηρωική εποχή του Risorgimento είχε τελειώσει· το δυσκολότερο και πιο πεζό έργο της οικοδόμησης της Ιταλίας — οι σιδηρόδρομοι και τα σχολεία της, ο στρατός και η γραφειοκρατία της, η φιλόνικη φιλελεύθερη πολιτική της και το άλυτο «νότιο ζήτημά» της — άρχιζε τώρα στα σοβαρά."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
