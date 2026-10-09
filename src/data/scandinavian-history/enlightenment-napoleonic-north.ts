/** Enlightenment & the Napoleonic North — Διαφωτισμός & ο Βορράς των Ναπολεόντειων Πολέμων · Vikings & Scandinavia */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const ENLIGHTENMENT_NAPOLEONIC_NORTH = {
  id: "enlightenment-napoleonic-north" as const,
  label: {
    en: "Enlightenment & Napoleonic Wars",
    el: "Διαφωτισμός & Ναπολεόντειοι Πόλεμοι"
  },
  supertitle: {
    en: "18th-Century Scandinavia",
    el: "Η Σκανδιναβία του 18ου Αιώνα"
  },
  title: {
    en: "Science, Liberty & Upheaval: Scandinavia 1721-1814",
    el: "Επιστήμη, Ελευθερία & Αναταραχή: η Σκανδιναβία 1721-1814"
  },
  subtitle: {
    en: "Freed from its wars, the North turned to science and reform. Linnaeus named the living world, Sweden passed the world's first law on press freedom, and Denmark freed its peasants and became the first nation to ban the Atlantic slave trade. But royal coups, a king murdered at a masked ball, and the storms of the Napoleonic Wars redrew the map: Sweden lost Finland, a French marshal became its crown prince, and Norway was handed from Denmark to Sweden. Slide across the Nordic Enlightenment.",
    el: "Απαλλαγμένος από τους πολέμους του, ο Βορράς στράφηκε στην επιστήμη και στις μεταρρυθμίσεις. Ο Λινναίος ονόμασε τον έμβιο κόσμο, η Σουηδία ψήφισε τον πρώτο νόμο στον κόσμο για την ελευθερία του Τύπου, και η Δανία απελευθέρωσε τους αγρότες της και έγινε το πρώτο έθνος που απαγόρευσε το υπερατλαντικό δουλεμπόριο. Όμως βασιλικά πραξικοπήματα, ένας βασιλιάς δολοφονημένος σε χορό μεταμφιεσμένων και οι θύελλες των Ναπολεόντειων Πολέμων ξανασχεδίασαν τον χάρτη: η Σουηδία έχασε τη Φινλανδία, ένας Γάλλος στρατάρχης έγινε διάδοχος του θρόνου της, και η Νορβηγία πέρασε από τη Δανία στη Σουηδία. Μετακινηθείτε στον σκανδιναβικό Διαφωτισμό."
  },
  menuDescription: {
    en: "Linnaeus, press freedom, royal coups, Nelson at Copenhagen, and the birth of the Norwegian constitution.",
    el: "Ο Λινναίος, η ελευθερία του Τύπου, βασιλικά πραξικοπήματα, ο Νέλσον στην Κοπεγχάγη και η γέννηση του νορβηγικού συντάγματος."
  },
  footerLabel: {
    en: "Enlightenment & Napoleonic Wars · 1721-1814",
    el: "Διαφωτισμός & Ναπολεόντειοι Πόλεμοι · 1721-1814"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Enlightenment & the Napoleonic North",
    el: "Διαφωτισμός & ο Βορράς των Ναπολεόντειων Πολέμων"
  },
  theme: THEMES.ivory,
  timeline: [
    {
      year: 1721,
      era: {
        en: "Age of Liberty",
        el: "Εποχή της Ελευθερίας"
      },
      events: [
        {
          title: {
            en: "Hans Egede sails to Greenland",
            el: "Ο Χανς Έγκεντε πλέει στη Γροιλανδία"
          },
          description: {
            en: "The Norwegian missionary Hans Egede sails to Greenland hoping to find the lost Norse colonists; instead he begins a mission to the Inuit that renews Danish–Norwegian rule over the island.",
            el: "Ο Νορβηγός ιεραπόστολος Χανς Έγκεντε πλέει στη Γροιλανδία ελπίζοντας να βρει τους χαμένους νορδικούς αποίκους· αντ' αυτού ξεκινά μια ιεραποστολή στους Ινουίτ που ανανεώνει την κυριαρχία της Δανίας–Νορβηγίας στο νησί."
          },
          extendedDescription: {
            en: "Egede found only the ruins of the medieval settlements. He learned the Greenlandic language, and in 1728 the settlement of Godthåb — today Nuuk, Greenland's capital — was founded near his mission. His arrival is counted as the beginning of the modern colonial era in Greenland, which remains part of the Danish realm, with wide self-government, to this day.",
            el: "Ο Έγκεντε βρήκε μόνο τα ερείπια των μεσαιωνικών οικισμών. Έμαθε τη γροιλανδική γλώσσα, και το 1728 ιδρύθηκε κοντά στην ιεραποστολή του ο οικισμός Γκόντχομπ — σήμερα Νουούκ, η πρωτεύουσα της Γροιλανδίας. Η άφιξή του θεωρείται η αρχή της νεότερης αποικιακής εποχής στη Γροιλανδία, η οποία παραμένει ως σήμερα μέρος του δανικού βασιλείου, με ευρεία αυτοδιοίκηση."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1735,
      era: {
        en: "Age of Liberty",
        el: "Εποχή της Ελευθερίας"
      },
      events: [
        {
          title: {
            en: "Linnaeus orders nature",
            el: "Ο Λινναίος βάζει τη φύση σε τάξη"
          },
          description: {
            en: "The Swedish botanist Carl Linnaeus publishes Systema Naturae, laying the foundations of the modern classification of plants and animals.",
            el: "Ο Σουηδός βοτανολόγος Κάρολος Λινναίος δημοσιεύει το Systema Naturae, θέτοντας τα θεμέλια της σύγχρονης ταξινόμησης φυτών και ζώων."
          },
          extendedDescription: {
            en: "Linnaeus' system of naming every species with two Latin words — genus and species, as in Homo sapiens — is still used by scientists today. From Uppsala he sent his students, the 'apostles', on voyages across the globe to collect specimens. In 1739 he helped found the Royal Swedish Academy of Sciences. Sweden's Age of Liberty also produced Anders Celsius, whose temperature scale is used around the world.",
            el: "Το σύστημα του Λινναίου, που δίνει σε κάθε είδος δύο λατινικές λέξεις — γένος και είδος, όπως Homo sapiens — χρησιμοποιείται ακόμη από τους επιστήμονες. Από την Ουψάλα έστελνε τους μαθητές του, τους «αποστόλους», σε ταξίδια σε όλη την υφήλιο για να συλλέγουν δείγματα. Το 1739 συνέβαλε στην ίδρυση της Βασιλικής Σουηδικής Ακαδημίας Επιστημών. Η Εποχή της Ελευθερίας της Σουηδίας ανέδειξε επίσης τον Άντερς Κέλσιο, του οποίου η κλίμακα θερμοκρασίας χρησιμοποιείται σε όλο τον κόσμο."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Carl_von_Linn%C3%A9.jpg?width=1024",
            alt: {
              en: "Alexander Roslin's portrait of Carl Linnaeus",
              el: "Προσωπογραφία του Κάρολου Λινναίου από τον Αλεξάντερ Ρόσλιν"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1766,
      era: {
        en: "Age of Liberty",
        el: "Εποχή της Ελευθερίας"
      },
      events: [
        {
          title: {
            en: "The world's first press freedom law",
            el: "Ο πρώτος νόμος στον κόσμο για την ελευθερία του Τύπου"
          },
          description: {
            en: "Sweden's Riksdag passes the Freedom of the Press Act, abolishing political censorship and guaranteeing public access to official documents.",
            el: "Το Ρίκσνταγκ της Σουηδίας ψηφίζει τον Νόμο για την Ελευθερία του Τύπου, καταργώντας την πολιτική λογοκρισία και εγγυώμενο την πρόσβαση του κοινού στα επίσημα έγγραφα."
          },
          extendedDescription: {
            en: "During the Age of Liberty after Charles XII's death, the Riksdag held power and two parties — the 'Hats' and the 'Caps' — competed for it. The Act was championed by Anders Chydenius, a priest and economist from Finland. Its principle of public access to government records, the first of its kind anywhere, remains a cornerstone of Swedish and Finnish democracy today.",
            el: "Κατά την Εποχή της Ελευθερίας μετά τον θάνατο του Καρόλου ΙΒ΄, την εξουσία είχε το Ρίκσνταγκ και δύο κόμματα — τα «Καπέλα» και οι «Σκούφοι» — την ανταγωνίζονταν. Τον νόμο υποστήριξε ο Άντερς Κιντένιους, ιερέας και οικονομολόγος από τη Φινλανδία. Η αρχή του για τη δημόσια πρόσβαση στα κρατικά έγγραφα, η πρώτη του είδους της οπουδήποτε, παραμένει ακρογωνιαίος λίθος της σουηδικής και της φινλανδικής δημοκρατίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1770,
      era: {
        en: "Enlightened Absolutism",
        el: "Φωτισμένη Απολυταρχία"
      },
      events: [
        {
          title: {
            en: "Struensee rules Denmark",
            el: "Ο Στρούενζε κυβερνά τη Δανία"
          },
          description: {
            en: "The German doctor Johann Friedrich Struensee, physician to the mentally ill King Christian VII and lover of Queen Caroline Matilda, seizes control of the Danish government.",
            el: "Ο Γερμανός γιατρός Γιόχαν Φρίντριχ Στρούενζε, θεράπων του ψυχικά ασθενούς βασιλιά Χριστιανού Ζ΄ και εραστής της βασίλισσας Καρολίνας Ματθίλδης, αναλαμβάνει τον έλεγχο της δανικής κυβέρνησης."
          },
          extendedDescription: {
            en: "In sixteen months Struensee issued more than a thousand decrees inspired by the Enlightenment: he abolished press censorship, cut court spending, banned torture and reformed the administration. But he ruled by decree in German, ignored Danish opinion, and his affair with the queen caused scandal. In January 1772 a palace coup arrested him; he was executed that April, and the queen was exiled.",
            el: "Σε δεκαέξι μήνες ο Στρούενζε εξέδωσε πάνω από χίλια διατάγματα εμπνευσμένα από τον Διαφωτισμό: κατάργησε τη λογοκρισία του Τύπου, περιέκοψε τις δαπάνες της αυλής, απαγόρευσε τα βασανιστήρια και αναμόρφωσε τη διοίκηση. Όμως κυβερνούσε με διατάγματα στα γερμανικά, αγνοούσε τη δανική κοινή γνώμη, και ο δεσμός του με τη βασίλισσα προκάλεσε σκάνδαλο. Τον Ιανουάριο του 1772 ένα ανακτορικό πραξικόπημα τον συνέλαβε· εκτελέστηκε εκείνον τον Απρίλιο και η βασίλισσα εξορίστηκε."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1772,
      era: {
        en: "Enlightened Absolutism",
        el: "Φωτισμένη Απολυταρχία"
      },
      events: [
        {
          title: {
            en: "Gustav III's royal coup",
            el: "Το βασιλικό πραξικόπημα του Γουσταύου Γ΄"
          },
          description: {
            en: "King Gustav III of Sweden stages a bloodless coup against the feuding parties of the Riksdag, ending the Age of Liberty and restoring strong royal power.",
            el: "Ο βασιλιάς Γουστάβος Γ΄ της Σουηδίας πραγματοποιεί ένα αναίμακτο πραξικόπημα κατά των αντιμαχόμενων κομμάτων του Ρίκσνταγκ, τερματίζοντας την Εποχή της Ελευθερίας και αποκαθιστώντας ισχυρή βασιλική εξουσία."
          },
          extendedDescription: {
            en: "The Riksdag's factions had become notorious for taking bribes from foreign powers. Gustav, a cultured admirer of the French Enlightenment, won the army's support and presented a new constitution to the cowed estates. He founded the Swedish Academy, the Royal Opera and the Royal Dramatic Theatre, and his reign was a golden age of Swedish culture — though his growing autocracy made many enemies among the nobility.",
            el: "Οι φατρίες του Ρίκσνταγκ είχαν γίνει διαβόητες για τη δωροδοκία τους από ξένες δυνάμεις. Ο Γουστάβος, καλλιεργημένος θαυμαστής του γαλλικού Διαφωτισμού, κέρδισε την υποστήριξη του στρατού και παρουσίασε ένα νέο σύνταγμα στις φοβισμένες τάξεις. Ίδρυσε τη Σουηδική Ακαδημία, τη Βασιλική Όπερα και το Βασιλικό Δραματικό Θέατρο, και η βασιλεία του ήταν χρυσή εποχή του σουηδικού πολιτισμού — αν και η αυξανόμενη αυταρχικότητά του του δημιούργησε πολλούς εχθρούς ανάμεσα στους ευγενείς."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1788,
      era: {
        en: "Enlightened Absolutism",
        el: "Φωτισμένη Απολυταρχία"
      },
      events: [
        {
          title: {
            en: "Denmark frees its peasants",
            el: "Η Δανία απελευθερώνει τους αγρότες της"
          },
          description: {
            en: "Denmark abolishes the Stavnsbånd, the law that had bound male peasants to the estate where they were born, as part of sweeping land reforms.",
            el: "Η Δανία καταργεί το Στάβνσμπον, τον νόμο που έδενε τους άνδρες αγρότες με το κτήμα όπου είχαν γεννηθεί, στο πλαίσιο εκτεταμένων αγροτικών μεταρρυθμίσεων."
          },
          extendedDescription: {
            en: "Introduced in 1733 to keep labour and army recruits on the estates, the Stavnsbånd had made Danish peasants almost serfs. The reforms led by Crown Prince Frederick and his ministers also enclosed and consolidated the scattered strip-fields and helped tenants become freeholders. The Liberty Column in Copenhagen commemorates the change, which laid the foundation for Denmark's later prosperous class of independent farmers.",
            el: "Το Στάβνσμπον, που θεσπίστηκε το 1733 για να κρατά εργατικά χέρια και νεοσύλλεκτους στα κτήματα, είχε κάνει τους Δανούς αγρότες σχεδόν δουλοπάροικους. Οι μεταρρυθμίσεις που ηγήθηκαν ο διάδοχος Φρειδερίκος και οι υπουργοί του συνένωσαν επίσης τα διάσπαρτα κομμάτια γης σε ενιαίες εκτάσεις και βοήθησαν τους ενοικιαστές να γίνουν ιδιοκτήτες. Η Στήλη της Ελευθερίας στην Κοπεγχάγη τιμά την αλλαγή, η οποία έθεσε τα θεμέλια για τη μετέπειτα ευημερούσα τάξη ανεξάρτητων αγροτών της Δανίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1792,
      era: {
        en: "Enlightened Absolutism",
        el: "Φωτισμένη Απολυταρχία"
      },
      events: [
        {
          title: {
            en: "Gustav III shot at a masked ball",
            el: "Ο Γουστάβος Γ΄ πυροβολείται σε χορό μεταμφιεσμένων"
          },
          description: {
            en: "At a masquerade in the Stockholm Opera House, Gustav III is shot in the back by the nobleman Jacob Johan Anckarström, part of an aristocratic conspiracy; he dies thirteen days later.",
            el: "Σε έναν χορό μεταμφιεσμένων στην Όπερα της Στοκχόλμης, ο Γουστάβος Γ΄ πυροβολείται στην πλάτη από τον ευγενή Γιάκομπ Γιόχαν Άνκαρστρεμ, μέλος μιας αριστοκρατικής συνωμοσίας· πεθαίνει δεκατρείς μέρες αργότερα."
          },
          extendedDescription: {
            en: "The king had ignored a warning letter and went to the ball anyway. The conspirators, nobles furious at his curbs on their privileges, wore black masks and surrounded him before Anckarström fired. The assassination inspired Verdi's opera Un ballo in maschera. Anckarström was flogged and beheaded; his fellow conspirators got off lightly.",
            el: "Ο βασιλιάς είχε αγνοήσει μια προειδοποιητική επιστολή και πήγε στον χορό παρ' όλα αυτά. Οι συνωμότες, ευγενείς εξοργισμένοι με τους περιορισμούς που είχε επιβάλει στα προνόμιά τους, φορούσαν μαύρες μάσκες και τον περικύκλωσαν πριν πυροβολήσει ο Άνκαρστρεμ. Η δολοφονία ενέπνευσε την όπερα του Βέρντι «Χορός μεταμφιεσμένων». Ο Άνκαρστρεμ μαστιγώθηκε και αποκεφαλίστηκε· οι συνένοχοί του την γλίτωσαν με ελαφρές ποινές."
          },
          category: "political"
        },
        {
          title: {
            en: "Denmark bans the slave trade",
            el: "Η Δανία απαγορεύει το δουλεμπόριο"
          },
          description: {
            en: "Denmark–Norway becomes the first European state to legislate an end to its transatlantic slave trade, with the ban taking effect in 1803.",
            el: "Η Δανία–Νορβηγία γίνεται το πρώτο ευρωπαϊκό κράτος που νομοθετεί τον τερματισμό του υπερατλαντικού δουλεμπορίου της, με την απαγόρευση να τίθεται σε ισχύ το 1803."
          },
          extendedDescription: {
            en: "Denmark had shipped some 100,000 enslaved Africans to its Caribbean colonies of St Thomas, St John and St Croix, from forts on the Gold Coast such as Christiansborg. The decree was a landmark, but slavery itself continued in the Danish West Indies until 1848, when it ended amid a slave uprising on St Croix. The islands were sold to the United States in 1917 and are now the US Virgin Islands.",
            el: "Η Δανία είχε μεταφέρει περίπου 100.000 σκλαβωμένους Αφρικανούς στις αποικίες της στην Καραϊβική, τον Άγιο Θωμά, τον Άγιο Ιωάννη και τον Άγιο Σταυρό, από φρούρια στην Ακτή του Χρυσού όπως το Κρίστιανσμποργκ. Το διάταγμα ήταν ορόσημο, αλλά η ίδια η δουλεία συνεχίστηκε στις Δανικές Δυτικές Ινδίες ως το 1848, όταν τερματίστηκε εν μέσω μιας εξέγερσης σκλάβων στον Άγιο Σταυρό. Τα νησιά πουλήθηκαν στις Ηνωμένες Πολιτείες το 1917 και είναι σήμερα οι Αμερικανικές Παρθένοι Νήσοι."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1801,
      era: {
        en: "Napoleonic Wars",
        el: "Ναπολεόντειοι Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "Nelson at the Battle of Copenhagen",
            el: "Ο Νέλσον στη Ναυμαχία της Κοπεγχάγης"
          },
          description: {
            en: "A British fleet attacks the Danish ships moored before Copenhagen to break Denmark's armed neutrality; Horatio Nelson famously ignores a signal to withdraw.",
            el: "Ένας βρετανικός στόλος επιτίθεται στα δανικά πλοία που ήταν αγκυροβολημένα μπροστά στην Κοπεγχάγη για να σπάσει την ένοπλη ουδετερότητα της Δανίας· ο Οράτιος Νέλσον αγνοεί, όπως είναι γνωστό, ένα σήμα υποχώρησης."
          },
          extendedDescription: {
            en: "Legend says Nelson raised his telescope to his blind eye and declared, 'I really do not see the signal.' The Danes, fighting from hulks and floating batteries with many volunteer crews, resisted fiercely before a truce was agreed. Denmark withdrew from the League of Armed Neutrality. It was only the first blow: Denmark's lucrative neutral trade was about to draw it into the Napoleonic wars.",
            el: "Ο θρύλος λέει ότι ο Νέλσον έφερε το τηλεσκόπιο στο τυφλό του μάτι και δήλωσε: «Πραγματικά δεν βλέπω το σήμα». Οι Δανοί, πολεμώντας από παροπλισμένα σκαριά και πλωτές πυροβολαρχίες με πολλούς εθελοντές, αντιστάθηκαν σθεναρά πριν συμφωνηθεί ανακωχή. Η Δανία αποσύρθηκε από τη Συμμαχία Ένοπλης Ουδετερότητας. Ήταν μόνο το πρώτο πλήγμα: το προσοδοφόρο ουδέτερο εμπόριο της Δανίας επρόκειτο να τη σύρει στους Ναπολεόντειους Πολέμους."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Nicholas_Pocock_-_The_Battle_of_Copenhagen%2C_2_April_1801.jpg?width=1024",
            alt: {
              en: "Nicholas Pocock's painting of the British and Danish lines at the Battle of Copenhagen, 2 April 1801",
              el: "Πίνακας του Νίκολας Πόκοκ με τις βρετανικές και δανικές γραμμές στη Ναυμαχία της Κοπεγχάγης, 2 Απριλίου 1801"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1807,
      era: {
        en: "Napoleonic Wars",
        el: "Ναπολεόντειοι Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "The bombardment of Copenhagen",
            el: "Ο βομβαρδισμός της Κοπεγχάγης"
          },
          description: {
            en: "Fearing Napoleon would seize the Danish fleet, Britain bombards Copenhagen for three nights, forcing the city to surrender and carrying off the entire navy.",
            el: "Φοβούμενη ότι ο Ναπολέων θα καταλάμβανε τον δανικό στόλο, η Βρετανία βομβαρδίζει την Κοπεγχάγη επί τρεις νύχτες, αναγκάζοντας την πόλη να παραδοθεί και παίρνοντας μαζί της ολόκληρο το ναυτικό."
          },
          extendedDescription: {
            en: "The bombardment, among the first to target a city's civilians deliberately and to use Congreve rockets, killed some 200 civilians and destroyed much of the city centre. Outraged, Denmark–Norway allied with Napoleon. The British blockade that followed cut Norway off from Danish grain, bringing famine, and severed the ties between the two countries — a break that would make the loss of Norway in 1814 easier to force.",
            el: "Ο βομβαρδισμός, από τους πρώτους που στόχευσαν σκόπιμα τους αμάχους μιας πόλης και χρησιμοποίησαν ρουκέτες Κόνγκριβ, σκότωσε περίπου 200 αμάχους και κατέστρεψε μεγάλο μέρος του κέντρου της πόλης. Εξοργισμένη, η Δανία–Νορβηγία συμμάχησε με τον Ναπολέοντα. Ο βρετανικός αποκλεισμός που ακολούθησε έκοψε τη Νορβηγία από τα δανικά σιτηρά, φέρνοντας λιμό, και διέκοψε τους δεσμούς ανάμεσα στις δύο χώρες — μια ρήξη που θα έκανε ευκολότερη την επιβολή της απώλειας της Νορβηγίας το 1814."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1809,
      era: {
        en: "Napoleonic Wars",
        el: "Ναπολεόντειοι Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "Sweden loses Finland",
            el: "Η Σουηδία χάνει τη Φινλανδία"
          },
          description: {
            en: "After the Finnish War, Sweden cedes Finland to Russia, which makes it an autonomous Grand Duchy; in Stockholm the defeated king is deposed and a new constitution adopted.",
            el: "Μετά τον Φινλανδικό Πόλεμο, η Σουηδία παραχωρεί τη Φινλανδία στη Ρωσία, η οποία την κάνει αυτόνομο Μεγάλο Δουκάτο· στη Στοκχόλμη ο ηττημένος βασιλιάς εκθρονίζεται και υιοθετείται νέο σύνταγμα."
          },
          extendedDescription: {
            en: "Finland had been part of the Swedish realm for some six centuries, and its loss — a third of Sweden's territory — was a national trauma. Tsar Alexander I let Finland keep its Lutheran church, Swedish-era laws and its own Diet. Sweden's 1809 Instrument of Government, which divided power between king and Riksdag, remained in force until 1974 — one of the longest-lasting constitutions in Europe.",
            el: "Η Φινλανδία αποτελούσε μέρος του σουηδικού βασιλείου για περίπου έξι αιώνες, και η απώλειά της — το ένα τρίτο της επικράτειας της Σουηδίας — ήταν εθνικό τραύμα. Ο τσάρος Αλέξανδρος Α΄ επέτρεψε στη Φινλανδία να κρατήσει τη λουθηρανική Εκκλησία της, τους νόμους της σουηδικής περιόδου και τη δική της Βουλή. Το σουηδικό Πολίτευμα του 1809, που μοίραζε την εξουσία ανάμεσα στον βασιλιά και στο Ρίκσνταγκ, έμεινε σε ισχύ ως το 1974 — ένα από τα μακροβιότερα συντάγματα της Ευρώπης."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1810,
      era: {
        en: "Napoleonic Wars",
        el: "Ναπολεόντειοι Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "A French marshal becomes crown prince",
            el: "Ένας Γάλλος στρατάρχης γίνεται διάδοχος του θρόνου"
          },
          description: {
            en: "Seeking a strong heir for their childless king, the Swedes elect Napoleon's marshal Jean-Baptiste Bernadotte as crown prince.",
            el: "Αναζητώντας έναν ισχυρό διάδοχο για τον άτεκνο βασιλιά τους, οι Σουηδοί εκλέγουν τον στρατάρχη του Ναπολέοντα Ζαν-Μπατίστ Μπερναντότ διάδοχο του θρόνου."
          },
          extendedDescription: {
            en: "Bernadotte, a lawyer's son from Pau who had risen through the revolutionary armies, had won Swedish goodwill by treating prisoners generously. Taking the name Charles John, he became the real ruler of Sweden and, to Napoleon's fury, joined the coalition against France in 1813. Instead of trying to win back Finland, he aimed for Norway. He became king as Charles XIV John in 1818, and the House of Bernadotte still reigns in Sweden.",
            el: "Ο Μπερναντότ, γιος δικηγόρου από το Πω που είχε ανέλθει μέσα από τους επαναστατικούς στρατούς, είχε κερδίσει την εύνοια των Σουηδών φερόμενος γενναιόδωρα στους αιχμαλώτους. Παίρνοντας το όνομα Κάρολος Ιωάννης, έγινε ο πραγματικός ηγεμόνας της Σουηδίας και, προς οργή του Ναπολέοντα, προσχώρησε στον συνασπισμό κατά της Γαλλίας το 1813. Αντί να προσπαθήσει να ανακτήσει τη Φινλανδία, έβαλε στόχο τη Νορβηγία. Έγινε βασιλιάς ως Κάρολος ΙΔ΄ Ιωάννης το 1818, και ο Οίκος των Μπερναντότ βασιλεύει ακόμη στη Σουηδία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1814,
      era: {
        en: "Napoleonic Wars",
        el: "Ναπολεόντειοι Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "The Treaty of Kiel",
            el: "Η Συνθήκη του Κιέλου"
          },
          description: {
            en: "Defeated as Napoleon's last ally, Denmark is forced to cede Norway to Sweden, ending a union of more than four centuries; Iceland, the Faroes and Greenland stay Danish.",
            el: "Ηττημένη ως ο τελευταίος σύμμαχος του Ναπολέοντα, η Δανία αναγκάζεται να παραχωρήσει τη Νορβηγία στη Σουηδία, τερματίζοντας μια ένωση άνω των τεσσάρων αιώνων· η Ισλανδία, οι Φερόες και η Γροιλανδία μένουν δανικές."
          },
          extendedDescription: {
            en: "The treaty was signed on 14 January 1814. The Atlantic islands, historically Norwegian, remained with Denmark almost as an afterthought. For Denmark it was the end of its status as a significant power, and the state had already gone bankrupt the year before. But the Norwegians had no intention of simply being handed over.",
            el: "Η συνθήκη υπογράφηκε στις 14 Ιανουαρίου 1814. Τα νησιά του Ατλαντικού, ιστορικά νορβηγικά, έμειναν στη Δανία σχεδόν σαν υστερόγραφο. Για τη Δανία ήταν το τέλος της θέσης της ως σημαντικής δύναμης, και το κράτος είχε ήδη χρεοκοπήσει την προηγούμενη χρονιά. Όμως οι Νορβηγοί δεν είχαν καμία πρόθεση να παραδοθούν απλώς."
          },
          category: "political"
        },
        {
          title: {
            en: "The Constitution of Eidsvoll",
            el: "Το Σύνταγμα του Άιντσβολ"
          },
          description: {
            en: "An assembly at Eidsvoll declares Norway independent and adopts a liberal constitution on 17 May; after a brief war, Norway accepts union with Sweden but keeps its constitution.",
            el: "Μια συνέλευση στο Άιντσβολ κηρύσσει την ανεξαρτησία της Νορβηγίας και υιοθετεί ένα φιλελεύθερο σύνταγμα στις 17 Μαΐου· μετά από έναν σύντομο πόλεμο, η Νορβηγία δέχεται την ένωση με τη Σουηδία αλλά κρατά το σύνταγμά της."
          },
          extendedDescription: {
            en: "Inspired by the American and French revolutions, the Eidsvoll constitution divided power between king and a parliament, the Storting, and gave the vote to a relatively large share of men. The Danish prince Christian Frederik was elected king, but Bernadotte invaded that summer in what was Sweden's last war. By the Convention of Moss, Norway entered a union with Sweden as a separate kingdom with its own constitution. 17 May is Norway's national day, celebrated with children's parades across the country.",
            el: "Εμπνευσμένο από την Αμερικανική και τη Γαλλική Επανάσταση, το σύνταγμα του Άιντσβολ μοίραζε την εξουσία ανάμεσα στον βασιλιά και σε ένα κοινοβούλιο, το Στόρτινγκ, και έδινε ψήφο σε σχετικά μεγάλο ποσοστό των ανδρών. Ο Δανός πρίγκιπας Χριστιανός Φρειδερίκος εκλέχθηκε βασιλιάς, αλλά ο Μπερναντότ εισέβαλε εκείνο το καλοκαίρι σε αυτόν που ήταν ο τελευταίος πόλεμος της Σουηδίας. Με τη Σύμβαση του Μος, η Νορβηγία μπήκε σε ένωση με τη Σουηδία ως χωριστό βασίλειο με το δικό της σύνταγμα. Η 17η Μαΐου είναι η εθνική εορτή της Νορβηγίας και γιορτάζεται με παρελάσεις παιδιών σε όλη τη χώρα."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Eidsvoll_riksraad_1814.jpeg?width=1024",
            alt: {
              en: "Oscar Wergeland's painting of the Constituent Assembly at Eidsvoll in 1814",
              el: "Πίνακας του Όσκαρ Βέργκελαντ με τη Συντακτική Συνέλευση στο Άιντσβολ το 1814"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    }
  ]
} satisfies PeriodDefinition;
