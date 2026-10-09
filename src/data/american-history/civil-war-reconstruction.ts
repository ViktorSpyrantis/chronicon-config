/** Civil War & Reconstruction — Εμφύλιος Πόλεμος & Ανασυγκρότηση · American History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const CIVIL_WAR_RECONSTRUCTION = {
  id: "civil-war-reconstruction" as const,
  label: {
    en: "Civil War & Reconstruction",
    el: "Εμφύλιος Πόλεμος & Ανασυγκρότηση"
  },
  supertitle: {
    en: "A House Divided · 1861-1877",
    el: "Ένα Διχασμένο Σπίτι"
  },
  title: {
    en: "The Civil War & Reconstruction",
    el: "Ο Εμφύλιος Πόλεμος & η Ανασυγκρότηση"
  },
  subtitle: {
    en: "From the guns over Fort Sumter through the bloodiest battles in American history, the Emancipation Proclamation, and Lincoln's assassination, to the constitutional amendments that abolished slavery and promised equality — and the fraught decade that tried, and largely failed, to secure it. Slide across the years to relive the nation's defining ordeal.",
    el: "Από τα κανόνια πάνω από το Φορτ Σάμτερ, μέσα από τις πιο αιματηρές μάχες στην αμερικανική ιστορία, τη Διακήρυξη της Χειραφέτησης και τη δολοφονία του Λίνκολν, ως τις συνταγματικές τροπολογίες που κατάργησαν τη δουλεία και υποσχέθηκαν ισότητα — και τη δύσκολη δεκαετία που προσπάθησε, και σε μεγάλο βαθμό απέτυχε, να την εξασφαλίσει. Μετακινηθείτε ανάμεσα στα έτη για να ζήσετε ξανά την καθοριστική δοκιμασία του έθνους."
  },
  menuDescription: {
    en: "The war that ended slavery and the struggle to rebuild the Union.",
    el: "Ο πόλεμος που τερμάτισε τη δουλεία και ο αγώνας ανοικοδόμησης της Ένωσης."
  },
  footerLabel: {
    en: "Civil War & Reconstruction · 1861-1877",
    el: "Εμφύλιος Πόλεμος & Ανασυγκρότηση · 1861-1877"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Civil War & Reconstruction",
    el: "Ο Εμφύλιος Πόλεμος & η Ανασυγκρότηση"
  },
  theme: THEMES.slate,
  timeline: [
    {
      year: 1861,
      era: {
        en: "The War Begins",
        el: "Ο πόλεμος αρχίζει"
      },
      events: [
        {
          title: {
            en: "Fort Sumter and the outbreak of war",
            el: "Το Φορτ Σάμτερ και το ξέσπασμα του πολέμου"
          },
          description: {
            en: "Confederate guns fire on Fort Sumter in Charleston Harbor, opening the Civil War. Eleven Southern states form the Confederacy to defend slavery and states' rights.",
            el: "Τα κανόνια της Συνομοσπονδίας βάλλουν κατά του Φορτ Σάμτερ στο λιμάνι του Τσάρλεστον, ανοίγοντας τον Εμφύλιο Πόλεμο. Έντεκα νότιες πολιτείες σχηματίζουν τη Συνομοσπονδία για να υπερασπιστούν τη δουλεία και τα δικαιώματα των πολιτειών."
          },
          extendedDescription: {
            en: "The bombardment began before dawn on 12 April 1861, and the fort surrendered the next day without a single death in combat. When Lincoln called for 75,000 volunteers to put down the rebellion, Virginia, Arkansas, North Carolina and Tennessee joined the Confederacy, while the slave-holding border states of Delaware, Maryland, Kentucky and Missouri stayed in the Union. Both sides expected a short war; the Union rout at Bull Run in July ended that illusion.",
            el: "Ο βομβαρδισμός ξεκίνησε πριν από την αυγή της 12ης Απριλίου 1861, και το οχυρό παραδόθηκε την επόμενη μέρα χωρίς ούτε έναν νεκρό στη μάχη. Όταν ο Λίνκολν ζήτησε 75.000 εθελοντές για να καταστείλει την ανταρσία, η Βιρτζίνια, το Άρκανσο, η Βόρεια Καρολίνα και το Τενεσί προσχώρησαν στη Συνομοσπονδία, ενώ οι δουλοκτητικές παραμεθόριες πολιτείες Ντέλαγουερ, Μέριλαντ, Κεντάκι και Μιζούρι έμειναν στην Ένωση. Και οι δύο πλευρές περίμεναν σύντομο πόλεμο· η κατατρόπωση της Ένωσης στο Μπουλ Ραν τον Ιούλιο διέλυσε αυτή την ψευδαίσθηση."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1862,
      era: {
        en: "Total War",
        el: "Ολοκληρωτικός πόλεμος"
      },
      events: [
        {
          title: {
            en: "Antietam, the bloodiest day",
            el: "Το Άντιεταμ, η πιο αιματηρή ημέρα"
          },
          description: {
            en: "The Battle of Antietam becomes the single bloodiest day in American history, with over 22,000 casualties, and gives Lincoln the victory he needs to act against slavery.",
            el: "Η Μάχη του Άντιεταμ γίνεται η πιο αιματηρή ημέρα στην αμερικανική ιστορία, με πάνω από 22.000 απώλειες, και δίνει στον Λίνκολν τη νίκη που χρειάζεται για να δράσει κατά της δουλείας."
          },
          extendedDescription: {
            en: "Robert E. Lee had invaded Maryland hoping a victory on Northern soil would win European recognition for the Confederacy. On 17 September 1862, along Antietam Creek near Sharpsburg, the armies fought to a bloody standstill, and Lee withdrew to Virginia, though General McClellan failed to pursue him. Five days later Lincoln issued the preliminary Emancipation Proclamation, and Britain and France stepped back from intervening.",
            el: "Ο Ρόμπερτ Λι είχε εισβάλει στο Μέριλαντ ελπίζοντας ότι μια νίκη σε βόρειο έδαφος θα εξασφάλιζε την ευρωπαϊκή αναγνώριση της Συνομοσπονδίας. Στις 17 Σεπτεμβρίου 1862, κατά μήκος του ρέματος Αντίταμ κοντά στο Σάρπσμπεργκ, οι στρατοί πολέμησαν ως ένα αιματηρό αδιέξοδο, και ο Λι αποσύρθηκε στη Βιρτζίνια, αν και ο στρατηγός ΜακΚλέλαν δεν τον καταδίωξε. Πέντε μέρες αργότερα ο Λίνκολν εξέδωσε την προκαταρκτική Διακήρυξη Χειραφέτησης, και η Βρετανία και η Γαλλία υπαναχώρησαν από μια παρέμβαση."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1863,
      era: {
        en: "A New Birth of Freedom",
        el: "Μια νέα γέννηση της ελευθερίας"
      },
      events: [
        {
          title: {
            en: "Emancipation Proclamation and Gettysburg",
            el: "Η Διακήρυξη της Χειραφέτησης και το Γκέτισμπεργκ"
          },
          description: {
            en: "Lincoln's Emancipation Proclamation frees enslaved people in the rebel states and makes ending slavery a war aim; the Union victory at Gettysburg turns the tide of the war.",
            el: "Η Διακήρυξη της Χειραφέτησης του Λίνκολν απελευθερώνει τους σκλαβωμένους στις αποστάτισσες πολιτείες και καθιστά τον τερματισμό της δουλείας πολεμικό στόχο· η νίκη της Ένωσης στο Γκέτισμπεργκ αντιστρέφει την πορεία του πολέμου."
          },
          extendedDescription: {
            en: "At the dedication of the battlefield cemetery, Lincoln's brief Gettysburg Address redefined the war as a struggle for human equality and 'government of the people, by the people, for the people.'",
            el: "Στα εγκαίνια του κοιμητηρίου του πεδίου της μάχης, η σύντομη Ομιλία του Γκέτισμπεργκ του Λίνκολν επαναπροσδιόρισε τον πόλεμο ως αγώνα για την ανθρώπινη ισότητα και για «κυβέρνηση του λαού, από τον λαό, για τον λαό»."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Thure_de_Thulstrup_-_L._Prang_and_Co._-_Battle_of_Gettysburg_-_Restoration_by_Adam_Cuerden_(cropped).jpg?width=1024",
            alt: {
              en: "The Battle of Gettysburg, painting by Thure de Thulstrup",
              el: "Η μάχη του Γκέτισμπεργκ, έργο του Τούρε ντε Θούλστρουπ"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1865,
      era: {
        en: "Victory and Tragedy",
        el: "Νίκη και τραγωδία"
      },
      events: [
        {
          title: {
            en: "Appomattox, the 13th Amendment, and Lincoln's death",
            el: "Το Απομάτοξ, η 13η Τροπολογία και ο θάνατος του Λίνκολν"
          },
          description: {
            en: "Lee surrenders at Appomattox, ending the war; the Thirteenth Amendment abolishes slavery. Days later, Lincoln is assassinated, leaving Reconstruction to lesser hands.",
            el: "Ο Λι παραδίδεται στο Απομάτοξ, τερματίζοντας τον πόλεμο· η Δέκατη Τρίτη Τροπολογία καταργεί τη δουλεία. Λίγες ημέρες αργότερα, ο Λίνκολν δολοφονείται, αφήνοντας την Ανασυγκρότηση σε λιγότερο ικανά χέρια."
          },
          extendedDescription: {
            en: "Grant offered generous terms at Appomattox Court House on 9 April 1865: Lee's men could go home with their horses and would not be tried for treason. Five days later, on Good Friday, the actor and Confederate sympathiser John Wilkes Booth shot Lincoln at Ford's Theatre; he died the next morning. The Thirteenth Amendment, passed by Congress in January, was ratified in December. Some 620,000 to 750,000 soldiers had died, nearly as many as in all other American wars combined.",
            el: "Ο Γκραντ πρόσφερε γενναιόδωρους όρους στο Απομάτοξ Κορτ Χάους στις 9 Απριλίου 1865: οι άνδρες του Λι μπορούσαν να γυρίσουν σπίτι με τα άλογά τους και δεν θα δικάζονταν για προδοσία. Πέντε μέρες αργότερα, τη Μεγάλη Παρασκευή, ο ηθοποιός και συμπαθών της Συνομοσπονδίας Τζον Γουίλκς Μπουθ πυροβόλησε τον Λίνκολν στο θέατρο Φορντ· πέθανε το επόμενο πρωί. Η Δέκατη Τρίτη Τροπολογία, που είχε ψηφίσει το Κογκρέσο τον Ιανουάριο, επικυρώθηκε τον Δεκέμβριο. Περίπου 620.000 έως 750.000 στρατιώτες είχαν σκοτωθεί, σχεδόν όσοι σε όλους τους άλλους αμερικανικούς πολέμους μαζί."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Abraham_Lincoln_O-77_matte_collodion_print.jpg?width=1024",
            alt: {
              en: "Portrait of Abraham Lincoln (1863)",
              el: "Προσωπογραφία του Αβραάμ Λίνκολν (1863)"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1868,
      era: {
        en: "Reconstruction",
        el: "Ανασυγκρότηση"
      },
      events: [
        {
          title: {
            en: "The Fourteenth Amendment",
            el: "Η Δέκατη Τέταρτη Τροπολογία"
          },
          description: {
            en: "The Fourteenth Amendment grants citizenship and equal protection under the law to all born in the United States, a cornerstone of American civil rights.",
            el: "Η Δέκατη Τέταρτη Τροπολογία παρέχει ιθαγένεια και ίση προστασία ενώπιον του νόμου σε όλους όσους γεννιούνται στις Ηνωμένες Πολιτείες, έναν ακρογωνιαίο λίθο των αμερικανικών πολιτικών δικαιωμάτων."
          },
          extendedDescription: {
            en: "The amendment overturned the Dred Scott decision by making everyone born on American soil a citizen, and forbade states to deny any person 'due process of law' or 'the equal protection of the laws'. Former Confederate states had to ratify it to regain representation in Congress. The same year President Andrew Johnson, who had fought the Radical Republicans' Reconstruction plans, was impeached and escaped removal by a single vote in the Senate. The amendment later became the basis for Brown v. Board of Education and many other civil rights rulings.",
            el: "Η τροπολογία ανέτρεψε την απόφαση Ντρεντ Σκοτ, κάνοντας πολίτη όποιον γεννιόταν σε αμερικανικό έδαφος, και απαγόρευε στις πολιτείες να στερούν από οποιοδήποτε πρόσωπο τη «νόμιμη διαδικασία» ή την «ίση προστασία των νόμων». Οι πρώην συνομόσπονδες πολιτείες έπρεπε να την επικυρώσουν για να ανακτήσουν την εκπροσώπησή τους στο Κογκρέσο. Την ίδια χρονιά ο πρόεδρος Άντριου Τζόνσον, που είχε πολεμήσει τα σχέδια Ανασυγκρότησης των Ριζοσπαστών Ρεπουμπλικανών, παραπέμφθηκε και γλίτωσε την καθαίρεση για μία μόνο ψήφο στη Γερουσία. Η τροπολογία έγινε αργότερα η βάση της απόφασης Μπράουν κατά Εκπαιδευτικού Συμβουλίου και πολλών άλλων αποφάσεων για τα πολιτικά δικαιώματα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1870,
      era: {
        en: "The Vote",
        el: "Η ψήφος"
      },
      events: [
        {
          title: {
            en: "The Fifteenth Amendment and Black officeholders",
            el: "Η Δέκατη Πέμπτη Τροπολογία και μαύροι αξιωματούχοι"
          },
          description: {
            en: "The Fifteenth Amendment bars denying the vote on grounds of race; Black men are elected to Congress and state legislatures across the South.",
            el: "Η Δέκατη Πέμπτη Τροπολογία απαγορεύει την άρνηση του δικαιώματος ψήφου με βάση τη φυλή· μαύροι άνδρες εκλέγονται στο Κογκρέσο και στα νομοθετικά σώματα των πολιτειών σε ολόκληρο τον Νότο."
          },
          extendedDescription: {
            en: "In 1870 Hiram Revels of Mississippi became the first Black U.S. senator, taking the seat once held by Jefferson Davis, and some two thousand Black men held public office in the South during Reconstruction. But the Ku Klux Klan and other white-supremacist groups used murder and terror to drive them out. Congress passed Enforcement Acts against the Klan in 1870–71, but Northern will to protect Black voters steadily weakened.",
            el: "Το 1870 ο Χάιραμ Ρέβελς από τον Μισισιπή έγινε ο πρώτος μαύρος γερουσιαστής των ΗΠΑ, καταλαμβάνοντας την έδρα που είχε κάποτε ο Τζέφερσον Ντέιβις, και περίπου δύο χιλιάδες μαύροι άνδρες κατείχαν δημόσια αξιώματα στον Νότο κατά την Ανασυγκρότηση. Όμως η Κου Κλουξ Κλαν και άλλες ομάδες λευκής υπεροχής χρησιμοποίησαν τη δολοφονία και τον τρόμο για να τους εκδιώξουν. Το Κογκρέσο ψήφισε νόμους επιβολής κατά της Κλαν το 1870–71, αλλά η βούληση του Βορρά να προστατεύσει τους μαύρους ψηφοφόρους εξασθένησε σταθερά."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1877,
      era: {
        en: "Reconstruction Abandoned",
        el: "Η εγκατάλειψη της Ανασυγκρότησης"
      },
      events: [
        {
          title: {
            en: "The Compromise of 1877",
            el: "Ο Συμβιβασμός του 1877"
          },
          description: {
            en: "A disputed election is settled by withdrawing federal troops from the South, ending Reconstruction and opening the way to disenfranchisement and Jim Crow segregation.",
            el: "Μια αμφισβητούμενη εκλογή διευθετείται με την απόσυρση των ομοσπονδιακών στρατευμάτων από τον Νότο, τερματίζοντας την Ανασυγκρότηση και ανοίγοντας τον δρόμο στη στέρηση δικαιωμάτων και στον φυλετικό διαχωρισμό Τζιμ Κρόου."
          },
          extendedDescription: {
            en: "In the 1876 election the Democrat Samuel Tilden won the popular vote, but the results in three Southern states were disputed. A special electoral commission awarded them to the Republican Rutherford B. Hayes, and in an informal bargain the last federal troops were withdrawn from South Carolina and Louisiana. Southern 'Redeemer' governments then stripped most Black citizens of the vote through poll taxes, literacy tests and violence, and in Plessy v. Ferguson (1896) the Supreme Court upheld segregation as 'separate but equal'.",
            el: "Στις εκλογές του 1876 ο Δημοκρατικός Σάμιουελ Τίλντεν κέρδισε τη λαϊκή ψήφο, αλλά τα αποτελέσματα σε τρεις νότιες πολιτείες αμφισβητήθηκαν. Μια ειδική εκλογική επιτροπή τα απέδωσε στον Ρεπουμπλικανό Ράδερφορντ Χέις, και με μια άτυπη συμφωνία τα τελευταία ομοσπονδιακά στρατεύματα αποσύρθηκαν από τη Νότια Καρολίνα και τη Λουιζιάνα. Οι νότιες κυβερνήσεις των «Λυτρωτών» στέρησαν τότε την ψήφο από τους περισσότερους μαύρους πολίτες με κεφαλικούς φόρους, τεστ αλφαβητισμού και βία, και στην υπόθεση Πλέσι κατά Φέργκιουσον (1896) το Ανώτατο Δικαστήριο επικύρωσε τον διαχωρισμό ως «χωριστό αλλά ίσο»."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
