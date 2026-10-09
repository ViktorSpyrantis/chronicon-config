/** Antebellum America — Προπολεμική Αμερική · American History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const ANTEBELLUM_EXPANSION = {
  id: "antebellum-expansion" as const,
  label: {
    en: "Antebellum America",
    el: "Προπολεμική Αμερική"
  },
  supertitle: {
    en: "Manifest Destiny · 1836-1860",
    el: "Το Πεπρωμένο Έθνος"
  },
  title: {
    en: "Antebellum America & Westward Expansion",
    el: "Προπολεμική Αμερική & Εξάπλωση στη Δύση"
  },
  subtitle: {
    en: "From Texas independence and the war with Mexico that carried the nation to the Pacific, through the Gold Rush and the first stirrings of women's rights, to the widening rift over slavery that drove Bleeding Kansas, Dred Scott, and the road to disunion. Slide across the years to watch a restless nation march toward civil war.",
    el: "Από την ανεξαρτησία του Τέξας και τον πόλεμο με το Μεξικό που έφερε το έθνος ως τον Ειρηνικό, μέσα από τον Πυρετό του Χρυσού και τα πρώτα σκιρτήματα των δικαιωμάτων των γυναικών, ως το διευρυνόμενο ρήγμα για τη δουλεία που οδήγησε στο Ματωμένο Κάνσας, στην υπόθεση Ντρεντ Σκοτ και στον δρόμο προς τη διάσπαση. Μετακινηθείτε ανάμεσα στα έτη για να δείτε ένα ανήσυχο έθνος να βαδίζει προς τον εμφύλιο πόλεμο."
  },
  menuDescription: {
    en: "Manifest Destiny, the Mexican War, and the crisis over slavery.",
    el: "Το Πεπρωμένο Έθνος, ο Μεξικανικός Πόλεμος και η κρίση για τη δουλεία."
  },
  footerLabel: {
    en: "Antebellum America · 1836-1860",
    el: "Προπολεμική Αμερική · 1836-1860"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Antebellum America",
    el: "Προπολεμική Αμερική"
  },
  theme: THEMES.amber,
  timeline: [
    {
      year: 1836,
      era: {
        en: "The Republic of Texas",
        el: "Η Δημοκρατία του Τέξας"
      },
      events: [
        {
          title: {
            en: "Texas independence and the Alamo",
            el: "Η ανεξαρτησία του Τέξας και το Άλαμο"
          },
          description: {
            en: "American settlers in Texas revolt against Mexico; after the doomed stand at the Alamo, they win independence and establish the Republic of Texas.",
            el: "Αμερικανοί άποικοι στο Τέξας εξεγείρονται κατά του Μεξικού· μετά την καταδικασμένη αντίσταση στο Άλαμο, κερδίζουν την ανεξαρτησία και ιδρύουν τη Δημοκρατία του Τέξας."
          },
          extendedDescription: {
            en: "Thousands of American settlers, many bringing enslaved people, had moved into Mexican Texas, clashing with a government that had abolished slavery in 1829 and was tightening central control under Santa Anna. At the Alamo mission in San Antonio, about two hundred defenders, among them Jim Bowie and Davy Crockett, were killed on 6 March 1836 after a thirteen-day siege. Six weeks later Sam Houston's army routed the Mexicans at San Jacinto and captured Santa Anna, who signed away Texas.",
            el: "Χιλιάδες Αμερικανοί άποικοι, πολλοί από τους οποίους έφερναν μαζί τους σκλάβους, είχαν εγκατασταθεί στο μεξικανικό Τέξας, συγκρουόμενοι με μια κυβέρνηση που είχε καταργήσει τη δουλεία το 1829 και ενίσχυε τον κεντρικό έλεγχο υπό τον Σάντα Άνα. Στην ιεραποστολή του Άλαμο στο Σαν Αντόνιο, περίπου διακόσιοι υπερασπιστές, ανάμεσά τους ο Τζιμ Μπάουι και ο Ντέιβι Κρόκετ, σκοτώθηκαν στις 6 Μαρτίου 1836 μετά από πολιορκία δεκατριών ημερών. Έξι εβδομάδες αργότερα ο στρατός του Σαμ Χιούστον κατατρόπωσε τους Μεξικανούς στο Σαν Χασίντο και αιχμαλώτισε τον Σάντα Άνα, ο οποίος παραχώρησε το Τέξας."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1845,
      era: {
        en: "Manifest Destiny",
        el: "Το Πεπρωμένο Έθνος"
      },
      events: [
        {
          title: {
            en: "Manifest Destiny and annexation",
            el: "Το Πεπρωμένο Έθνος και η προσάρτηση"
          },
          description: {
            en: "The belief that the United States was destined to span the continent — 'Manifest Destiny' — drives the annexation of Texas and fuels demands for still more territory.",
            el: "Η πεποίθηση ότι οι Ηνωμένες Πολιτείες ήταν προορισμένες να εκταθούν σε ολόκληρη την ήπειρο — το «Πεπρωμένο Έθνος» — οδηγεί στην προσάρτηση του Τέξας και τροφοδοτεί απαιτήσεις για ακόμη περισσότερα εδάφη."
          },
          extendedDescription: {
            en: "The phrase 'manifest destiny' was coined in 1845 by the editor John O'Sullivan, who wrote of the nation's right 'to overspread the continent allotted by Providence'. Texas was annexed that December, and in 1846 a treaty with Britain divided the Oregon Country at the 49th parallel, despite the expansionist slogan 'Fifty-four forty or fight!'. The idea gave a moral gloss to expansion that pushed aside Native nations and Mexico alike.",
            el: "Τη φράση «πρόδηλο πεπρωμένο» επινόησε το 1845 ο εκδότης Τζον Ο'Σάλιβαν, που έγραψε για το δικαίωμα του έθνους «να απλωθεί σε όλη την ήπειρο που του έχει ορίσει η Πρόνοια». Το Τέξας προσαρτήθηκε εκείνον τον Δεκέμβριο, και το 1846 μια συνθήκη με τη Βρετανία μοίρασε τη Χώρα του Όρεγκον στον 49ο παράλληλο, παρά το επεκτατικό σύνθημα «Πενήντα τέσσερα σαράντα ή πόλεμος!». Η ιδέα προσέδωσε ηθικό μανδύα σε μια επέκταση που παραμέρισε τόσο τα ιθαγενή έθνη όσο και το Μεξικό."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/American_Progress_(John_Gast_painting).jpg?width=1024",
            alt: {
              en: "American Progress by John Gast (1872)",
              el: "Αμερικανική Πρόοδος, έργο του Τζον Γκαστ (1872)"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1846,
      era: {
        en: "War with Mexico",
        el: "Πόλεμος με το Μεξικό"
      },
      events: [
        {
          title: {
            en: "The Mexican-American War",
            el: "Ο Μεξικανοαμερικανικός Πόλεμος"
          },
          description: {
            en: "Victory over Mexico brings California and the Southwest into the Union, but the new lands reopen the explosive question of whether slavery should expand westward.",
            el: "Η νίκη επί του Μεξικού φέρνει την Καλιφόρνια και τη Νοτιοδύση στην Ένωση, αλλά τα νέα εδάφη ξανανοίγουν το εκρηκτικό ζήτημα του αν η δουλεία έπρεπε να επεκταθεί προς τα δυτικά."
          },
          extendedDescription: {
            en: "President James K. Polk provoked the war by sending troops into territory disputed with Mexico, and U.S. forces went on to capture Mexico City in September 1847. By the Treaty of Guadalupe Hidalgo in 1848, Mexico lost about half its territory — present-day California, Nevada, Utah and much of Arizona, New Mexico and Colorado. Critics included the young congressman Abraham Lincoln and Henry David Thoreau, who went to jail rather than pay taxes for the war and wrote 'Civil Disobedience'.",
            el: "Ο πρόεδρος Τζέιμς Πολκ προκάλεσε τον πόλεμο στέλνοντας στρατεύματα σε εδάφη αμφισβητούμενα με το Μεξικό, και οι αμερικανικές δυνάμεις κατέλαβαν τελικά την Πόλη του Μεξικού τον Σεπτέμβριο του 1847. Με τη Συνθήκη της Γουαδαλούπης Ιδάλγκο το 1848, το Μεξικό έχασε περίπου τα μισά του εδάφη — τη σημερινή Καλιφόρνια, τη Νεβάδα, τη Γιούτα και μεγάλο μέρος της Αριζόνας, του Νέου Μεξικού και του Κολοράντο. Ανάμεσα στους επικριτές ήταν ο νεαρός βουλευτής Αβραάμ Λίνκολν και ο Χένρι Ντέιβιντ Θορό, που προτίμησε τη φυλακή από το να πληρώσει φόρους για τον πόλεμο και έγραψε την «Πολιτική Ανυπακοή»."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1848,
      era: {
        en: "Gold and Reform",
        el: "Χρυσός και μεταρρύθμιση"
      },
      events: [
        {
          title: {
            en: "Gold Rush and the Seneca Falls Convention",
            el: "Ο Πυρετός του Χρυσού και η Συνέλευση του Σένεκα Φολς"
          },
          description: {
            en: "The discovery of gold in California draws hundreds of thousands westward, while at Seneca Falls reformers issue the first major call for women's rights in America.",
            el: "Η ανακάλυψη χρυσού στην Καλιφόρνια προσελκύει εκατοντάδες χιλιάδες προς τα δυτικά, ενώ στο Σένεκα Φολς μεταρρυθμιστές εκδίδουν το πρώτο μεγάλο κάλεσμα για τα δικαιώματα των γυναικών στην Αμερική."
          },
          extendedDescription: {
            en: "Gold was found at Sutter's Mill in January 1848, and by 1852 some 300,000 people had poured into California from across the world, including China, Chile and Australia; the territory became a state in 1850. The rush was catastrophic for California's Native peoples, whose numbers collapsed through violence, disease and displacement. That July at Seneca Falls, New York, Elizabeth Cady Stanton and Lucretia Mott issued a Declaration of Sentiments modelled on the Declaration of Independence, and Frederick Douglass spoke for its demand that women have the vote.",
            el: "Χρυσός βρέθηκε στο Σάτερς Μιλ τον Ιανουάριο του 1848, και ως το 1852 περίπου 300.000 άνθρωποι είχαν συρρεύσει στην Καλιφόρνια από όλο τον κόσμο, μεταξύ άλλων από την Κίνα, τη Χιλή και την Αυστραλία· η περιοχή έγινε πολιτεία το 1850. Ο πυρετός του χρυσού ήταν καταστροφικός για τους ιθαγενείς λαούς της Καλιφόρνιας, ο αριθμός των οποίων κατέρρευσε από τη βία, τις αρρώστιες και τον εκτοπισμό. Εκείνον τον Ιούλιο στο Σενέκα Φολς της Νέας Υόρκης, η Ελίζαμπεθ Κάντι Στάντον και η Λουκρίσια Μοτ εξέδωσαν μια Διακήρυξη Αισθημάτων κατά το πρότυπο της Διακήρυξης της Ανεξαρτησίας, και ο Φρέντερικ Ντάγκλας υποστήριξε το αίτημά της για την ψήφο των γυναικών."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1850,
      era: {
        en: "An Uneasy Compromise",
        el: "Ένας εύθραυστος συμβιβασμός"
      },
      events: [
        {
          title: {
            en: "The Compromise of 1850",
            el: "Ο Συμβιβασμός του 1850"
          },
          description: {
            en: "Congress tries to balance slave and free states, but the harsh Fugitive Slave Act outrages the North and deepens sectional bitterness.",
            el: "Το Κογκρέσο προσπαθεί να ισορροπήσει τις δουλοκτητικές και τις ελεύθερες πολιτείες, αλλά ο σκληρός Νόμος περί Φυγάδων Δούλων εξοργίζει τον Βορρά και βαθαίνει την περιφερειακή πικρία."
          },
          extendedDescription: {
            en: "Crafted by the veteran senator Henry Clay and pushed through by Stephen Douglas, the package admitted California as a free state and ended the slave trade, though not slavery, in Washington, D.C. In return the Fugitive Slave Act forced Northern officials and citizens to help return people who had escaped slavery, denying them a jury trial. Anger at the law inspired Harriet Beecher Stowe's Uncle Tom's Cabin (1852), which sold hundreds of thousands of copies and turned many Northerners against slavery.",
            el: "Το πακέτο, που σχεδίασε ο βετεράνος γερουσιαστής Χένρι Κλέι και πέρασε ο Στίβεν Ντάγκλας, έκανε δεκτή την Καλιφόρνια ως ελεύθερη πολιτεία και κατάργησε το δουλεμπόριο, όχι όμως τη δουλεία, στην Ουάσινγκτον. Σε αντάλλαγμα, ο Νόμος για τους Φυγάδες Σκλάβους υποχρέωνε τους αξιωματούχους και τους πολίτες του Βορρά να βοηθούν στην επιστροφή όσων είχαν δραπετεύσει από τη δουλεία, στερώντας τους δίκη με ενόρκους. Η οργή για τον νόμο ενέπνευσε την «Καλύβα του Μπαρμπα-Θωμά» (1852) της Χάριετ Μπίτσερ Στόου, που πούλησε εκατοντάδες χιλιάδες αντίτυπα και έστρεψε πολλούς βόρειους κατά της δουλείας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1854,
      era: {
        en: "Bleeding Kansas",
        el: "Το Ματωμένο Κάνσας"
      },
      events: [
        {
          title: {
            en: "Kansas-Nebraska Act and a new party",
            el: "Ο Νόμος Κάνσας-Νεμπράσκα και ένα νέο κόμμα"
          },
          description: {
            en: "Letting territories vote on slavery sparks violence in 'Bleeding Kansas' and gives rise to the antislavery Republican Party.",
            el: "Η δυνατότητα των εδαφών να ψηφίζουν για τη δουλεία πυροδοτεί βία στο «Ματωμένο Κάνσας» και γεννά το αντιδουλοκτητικό Ρεπουμπλικανικό Κόμμα."
          },
          extendedDescription: {
            en: "Stephen Douglas's act repealed the Missouri Compromise line and let settlers decide on slavery by 'popular sovereignty'. Pro- and anti-slavery settlers rushed into Kansas, set up rival governments and fought a small civil war; in 1856 Senator Charles Sumner was beaten nearly to death with a cane on the floor of the Senate after denouncing the 'crime against Kansas'. Opponents of the act founded the Republican Party in 1854, uniting former Whigs, Free-Soilers and antislavery Democrats.",
            el: "Ο νόμος του Στίβεν Ντάγκλας κατάργησε τη γραμμή του Συμβιβασμού του Μιζούρι και άφηνε τους εποίκους να αποφασίζουν για τη δουλεία με «λαϊκή κυριαρχία». Έποικοι υπέρ και κατά της δουλείας συνέρρευσαν στο Κάνσας, σχημάτισαν αντίπαλες κυβερνήσεις και διεξήγαγαν έναν μικρό εμφύλιο πόλεμο· το 1856 ο γερουσιαστής Τσαρλς Σάμνερ ξυλοκοπήθηκε σχεδόν μέχρι θανάτου με μπαστούνι μέσα στη Γερουσία, αφού είχε καταγγείλει «το έγκλημα κατά του Κάνσας». Οι αντίπαλοι του νόμου ίδρυσαν το Ρεπουμπλικανικό Κόμμα το 1854, ενώνοντας πρώην Ουίγους, οπαδούς του Ελεύθερου Εδάφους και αντιδουλοκτικούς Δημοκρατικούς."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1857,
      era: {
        en: "The Courts and the Crisis",
        el: "Τα δικαστήρια και η κρίση"
      },
      events: [
        {
          title: {
            en: "The Dred Scott decision",
            el: "Η απόφαση Ντρεντ Σκοτ"
          },
          description: {
            en: "The Supreme Court rules that Black Americans are not citizens and that Congress cannot bar slavery from the territories, inflaming the North and pushing the nation nearer to war.",
            el: "Το Ανώτατο Δικαστήριο αποφαίνεται ότι οι μαύροι Αμερικανοί δεν είναι πολίτες και ότι το Κογκρέσο δεν μπορεί να απαγορεύσει τη δουλεία στα εδάφη, εξοργίζοντας τον Βορρά και σπρώχνοντας το έθνος πιο κοντά στον πόλεμο."
          },
          extendedDescription: {
            en: "Dred Scott, an enslaved man, sued for his freedom because his owner had taken him to live in the free state of Illinois and the free Wisconsin Territory. Chief Justice Roger Taney ruled that Black people 'had no rights which the white man was bound to respect' and that the Missouri Compromise had been unconstitutional. The decision destroyed any hope of compromise on slavery in the territories and made Lincoln's name in his 1858 debates with Stephen Douglas.",
            el: "Ο Ντρεντ Σκοτ, ένας σκλάβος, προσέφυγε στη δικαιοσύνη για την ελευθερία του, επειδή ο ιδιοκτήτης του τον είχε πάρει να ζήσει στην ελεύθερη πολιτεία του Ιλινόι και στην ελεύθερη Επικράτεια του Ουισκόνσιν. Ο πρόεδρος του Ανωτάτου Δικαστηρίου Ρότζερ Τέινι αποφάνθηκε ότι οι μαύροι «δεν είχαν κανένα δικαίωμα που ο λευκός ήταν υποχρεωμένος να σεβαστεί» και ότι ο Συμβιβασμός του Μιζούρι ήταν αντισυνταγματικός. Η απόφαση κατέστρεψε κάθε ελπίδα συμβιβασμού για τη δουλεία στις επικράτειες και έκανε γνωστό τον Λίνκολν στις αντιπαραθέσεις του με τον Στίβεν Ντάγκλας το 1858."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1859,
      era: {
        en: "The Brink",
        el: "Το χείλος"
      },
      events: [
        {
          title: {
            en: "John Brown's raid on Harpers Ferry",
            el: "Η επιδρομή του Τζον Μπράουν στο Χάρπερς Φέρι"
          },
          description: {
            en: "Abolitionist John Brown attacks a federal arsenal hoping to spark a slave uprising. His execution makes him a martyr in the North and a terror in the South.",
            el: "Ο αβολιτιονιστής Τζον Μπράουν επιτίθεται σε ένα ομοσπονδιακό οπλοστάσιο ελπίζοντας να πυροδοτήσει εξέγερση δούλων. Η εκτέλεσή του τον καθιστά μάρτυρα στον Βορρά και τρόμο στον Νότο."
          },
          extendedDescription: {
            en: "Brown had already led a massacre of pro-slavery settlers at Pottawatomie, Kansas, in 1856. On 16 October 1859 he and about twenty men, Black and white, seized the arsenal at Harpers Ferry, Virginia, but no slave rising followed and U.S. Marines under Colonel Robert E. Lee stormed their stronghold. On the day of his hanging Brown wrote that 'the crimes of this guilty land will never be purged away but with blood.'",
            el: "Ο Μπράουν είχε ήδη ηγηθεί μιας σφαγής εποίκων υπέρ της δουλείας στο Ποταουατόμι του Κάνσας το 1856. Στις 16 Οκτωβρίου 1859, αυτός και περίπου είκοσι άνδρες, μαύροι και λευκοί, κατέλαβαν το οπλοστάσιο στο Χάρπερς Φέρι της Βιρτζίνια, αλλά καμία εξέγερση σκλάβων δεν ακολούθησε και πεζοναύτες υπό τον συνταγματάρχη Ρόμπερτ Λι εισέβαλαν στο οχυρό τους. Την ημέρα του απαγχονισμού του, ο Μπράουν έγραψε ότι «τα εγκλήματα αυτής της ένοχης χώρας δεν θα ξεπλυθούν ποτέ παρά μόνο με αίμα»."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1860,
      era: {
        en: "Toward Disunion",
        el: "Προς τη διάσπαση"
      },
      events: [
        {
          title: {
            en: "Lincoln's election and secession",
            el: "Η εκλογή του Λίνκολν και η απόσχιση"
          },
          description: {
            en: "Abraham Lincoln wins the presidency without a single Southern electoral vote; within weeks South Carolina secedes, and the Union begins to break apart.",
            el: "Ο Αβραάμ Λίνκολν κερδίζει την προεδρία χωρίς ούτε μία εκλογική ψήφο από τον Νότο· μέσα σε εβδομάδες η Νότια Καρολίνα αποσχίζεται και η Ένωση αρχίζει να διαλύεται."
          },
          extendedDescription: {
            en: "With the Democrats split between Stephen Douglas in the North and John Breckinridge in the South, Lincoln won the four-way race with about 40 percent of the popular vote, though he was not even on the ballot in most Southern states. South Carolina seceded on 20 December 1860, and by February six more states of the Deep South had formed the Confederate States of America, with Jefferson Davis as president. Their declarations of secession cited the defence of slavery as the central cause.",
            el: "Με τους Δημοκρατικούς διχασμένους ανάμεσα στον Στίβεν Ντάγκλας στον Βορρά και τον Τζον Μπρέκινριτζ στον Νότο, ο Λίνκολν κέρδισε την τετραμερή αναμέτρηση με περίπου 40% της λαϊκής ψήφου, αν και δεν ήταν καν υποψήφιος στα ψηφοδέλτια των περισσότερων νότιων πολιτειών. Η Νότια Καρολίνα αποσχίστηκε στις 20 Δεκεμβρίου 1860, και ως τον Φεβρουάριο άλλες έξι πολιτείες του Βαθέος Νότου είχαν σχηματίσει τις Συνομόσπονδες Πολιτείες της Αμερικής, με πρόεδρο τον Τζέφερσον Ντέιβις. Οι διακηρύξεις απόσχισής τους ανέφεραν την υπεράσπιση της δουλείας ως κεντρική αιτία."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
