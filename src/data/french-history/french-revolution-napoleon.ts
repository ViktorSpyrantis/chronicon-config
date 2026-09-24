/** French Revolution & Napoleon — Γαλλική Επανάσταση & Ναπολέων · French History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const FRENCH_REVOLUTION_NAPOLEON = {
  id: "french-revolution-napoleon" as const,
  label: {
    en: "French Revolution & Napoleon",
    el: "Γαλλική Επανάσταση & Ναπολέων"
  },
  supertitle: {
    en: "Liberté · Égalité · Fraternité",
    el: "Liberté · Égalité · Fraternité"
  },
  title: {
    en: "The French Revolution & Napoleon",
    el: "Η Γαλλική Επανάσταση & ο Ναπολέων"
  },
  subtitle: {
    en: "From the Tennis Court Oath and the storming of the Bastille through the Declaration of Rights, the fall of the monarchy and the Terror, Thermidor and the Directory, Bonaparte's rise from Vendémiaire and the Italian campaign to 18 Brumaire and the Empire, the coronation and the wars of the Grande Armée from Austerlitz to Moscow, to the Hundred Days and Waterloo. Slide month by month through the years that made and unmade modern Europe.",
    el: "Από τον Όρκο του Σφαιριστηρίου και την Άλωση της Βαστίλης, μέσα από τη Διακήρυξη των Δικαιωμάτων, την πτώση της μοναρχίας και την Τρομοκρατία, το Θερμιδώρ και το Διευθυντήριο, την άνοδο του Βοναπάρτη από το Βανδαιμέρ και την Ιταλική εκστρατεία έως τις 18 Μπρυμαίρ και την Αυτοκρατορία, τη στέψη και τους πολέμους της Μεγάλης Στρατιάς από το Αούστερλιτς ως τη Μόσχα, έως τις Εκατό Ημέρες και το Βατερλό. Μετακινηθείτε μήνα προς μήνα στα χρόνια που έπλασαν και διέλυσαν τη σύγχρονη Ευρώπη."
  },
  menuDescription: {
    en: "Month by month from the Bastille to Waterloo: revolution, Terror, and Napoleon.",
    el: "Μήνα προς μήνα από τη Βαστίλη ως το Βατερλώ: επανάσταση, Τρομοκρατία και Ναπολέων."
  },
  footerLabel: {
    en: "French Revolution & Napoleon · 1789–1815",
    el: "Γαλλική Επανάσταση & Ναπολέων · 1789–1815"
  },
  headerTimelineLabel: {
    en: "Revolutionary Timeline",
    el: "Επαναστατική Χρονογραμμή"
  },
  timelineHeading: {
    en: "French Revolution & Napoleon",
    el: "Γαλλική Επανάσταση & Ναπολέων"
  },
  theme: THEMES.crimson,
  timeline: [
    {
      year: 1789,
      month: 6,
      era: {
        en: "Birth of the National Assembly",
        el: "Γέννηση της Εθνοσυνέλευσης"
      },
      events: [
        {
          title: {
            en: "The Tennis Court Oath",
            el: "Ο Όρκος του Σφαιριστηρίου"
          },
          description: {
            en: "Locked out of their meeting hall at Versailles on 20 June, the deputies of the Third Estate — now styling themselves the National Assembly — swear in the indoor tennis court not to disband until they have given France a constitution.",
            el: "Αποκλεισμένοι από την αίθουσα συνεδριάσεών τους στις Βερσαλλίες στις 20 Ιουνίου, οι βουλευτές του Τρίτου Τάγματος — που πλέον αυτοαποκαλούνται Εθνοσυνέλευση — ορκίζονται στο εσωτερικό σφαιριστήριο να μη διαλυθούν μέχρι να δώσουν στη Γαλλία ένα σύνταγμα."
          },
          extendedDescription: {
            en: "On 17 June, Sieyès — whose pamphlet Qu'est-ce que le Tiers État? had armed the Revolution with its theory — had moved that the Third Estate alone constituted the nation in assembly. The astronomer Bailly was elected president. When some clergy and a few nobles joined, Louis XVI gave way: on 27 June he ordered the other two orders to unite with the Third. The Ancien Régime had been talked out of existence in five weeks.",
            el: "Στις 17 Ιουνίου, ο Σιεγιές — του οποίου το φυλλάδιο Qu'est-ce que le Tiers État; είχε εξοπλίσει την Επανάσταση με τη θεωρία της — είχε εισηγηθεί ότι το Τρίτο Τάγμα μόνο αποτελούσε το έθνος εν συνελεύσει. Ο αστρονόμος Μπαγύ εκλέγεται πρόεδρος. Όταν προσχωρούν μερικοί κληρικοί και λίγοι ευγενείς, ο Λουδοβίκος ΙΣΤ΄ υποχωρεί: στις 27 Ιουνίου διατάζει τα άλλα δύο τάγματα να ενωθούν με το Τρίτο. Το Παλαιό Καθεστώς είχε εκλιπεί με κουβέντες σε πέντε εβδομάδες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1789,
      month: 7,
      era: {
        en: "Storming of the Bastille",
        el: "Άλωση της Βαστίλης"
      },
      events: [
        {
          title: {
            en: "The 14th of July",
            el: "Η 14η Ιουλίου"
          },
          description: {
            en: "Believing the king is preparing a military coup after the dismissal of Necker, Parisians rise. After looting muskets from the Invalides, a crowd marches on the Bastille for its store of powder. The governor de Launay is overpowered and killed, his head paraded on a pike.",
            el: "Πιστεύοντας ότι ο βασιλιάς ετοιμάζει στρατιωτικό πραξικόπημα μετά την απόλυση του Νεκέρ, οι Παριζιάνοι ξεσηκώνονται. Αφού λεηλατούν μουσκέτα από τους Ανάπηρους, ένα πλήθος βαδίζει στη Βαστίλη για το απόθεμα πυρίτιδας. Ο διοικητής ντε Λωνέ καταβάλλεται και σκοτώνεται, το κεφάλι του παρελαύνει στην αιχμή ενός δόρατος."
          },
          extendedDescription: {
            en: "The medieval fortress held only seven prisoners — four forgers, two madmen, an aristocratic libertine — but it was the symbol of arbitrary detention by lettre de cachet. The next day Louis XVI noted in his hunting diary the single word: 'rien'. The duc de La Rochefoucauld is said to have corrected him: 'Sire, this is not a revolt — it is a revolution.' Bailly was made mayor of Paris and Lafayette commander of the new National Guard.",
            el: "Το μεσαιωνικό φρούριο κρατούσε μόνο επτά κρατούμενους — τέσσερις πλαστογράφους, δύο τρελούς, έναν αριστοκράτη λιμπερτίνο — αλλά ήταν το σύμβολο της αυθαίρετης κράτησης με lettre de cachet. Την επόμενη ημέρα ο Λουδοβίκος ΙΣΤ΄ σημείωσε στο κυνηγετικό του ημερολόγιο μία μόνο λέξη: «rien». Ο δούκας ντε Λα Ροσφουκώ λέγεται ότι τον διόρθωσε: «Σιρ, δεν είναι εξέγερση — είναι επανάσταση». Ο Μπαγύ έγινε δήμαρχος του Παρισιού και ο Λαφαγέτ διοικητής της νέας Εθνοφρουράς."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Anonymous_-_Prise_de_la_Bastille.jpg?width=1024",
            alt: {
              en: "The Storming of the Bastille",
              el: "Η άλωση της Βαστίλης"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1789,
      month: 8,
      era: {
        en: "Night of 4 August",
        el: "Νύχτα της 4ης Αυγούστου"
      },
      events: [
        {
          title: {
            en: "Abolition of feudalism and the Declaration of Rights",
            el: "Κατάργηση της φεουδαρχίας και η Διακήρυξη των Δικαιωμάτων"
          },
          description: {
            en: "On the night of 4 August, in an emotional session of the National Assembly, nobles and clergy surrender their seigneurial dues, tithes, hunting rights, venal offices, and provincial privileges. Three weeks later, on 26 August, the Assembly adopts the Declaration of the Rights of Man and of the Citizen.",
            el: "Τη νύχτα της 4ης Αυγούστου, σε συγκινητική συνεδρίαση της Εθνοσυνέλευσης, ευγενείς και κληρικοί παραιτούνται από τα φεουδαρχικά τους δικαιώματα, τη δεκάτη, τα δικαιώματα κυνηγιού, τα αγοραζόμενα αξιώματα και τα επαρχιακά τους προνόμια. Τρεις εβδομάδες αργότερα, στις 26 Αυγούστου, η Συνέλευση υιοθετεί τη Διακήρυξη των Δικαιωμάτων του Ανθρώπου και του Πολίτη."
          },
          extendedDescription: {
            en: "The seventeen articles drafted under the eyes of Mirabeau and Lafayette — 'men are born and remain free and equal in rights' — were the founding statement of modern liberalism. Translated into every European language within the year, they would shape constitutional thought from Naples to Caracas. The Ancien Régime, in feudal law, ceased to exist that summer.",
            el: "Τα δεκαεπτά άρθρα που συντάχθηκαν υπό τα μάτια του Μιραμπό και του Λαφαγέτ — «οι άνθρωποι γεννιούνται και παραμένουν ελεύθεροι και ίσοι στα δικαιώματα» — ήταν η ιδρυτική διακήρυξη του σύγχρονου φιλελευθερισμού. Μεταφρασμένη σε κάθε ευρωπαϊκή γλώσσα μέσα στη χρονιά, θα διαμόρφωνε τη συνταγματική σκέψη από τη Νάπολη μέχρι το Καράκας. Το Παλαιό Καθεστώς, στο φεουδαρχικό δίκαιο, έπαψε να υπάρχει εκείνο το καλοκαίρι."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1789,
      month: 10,
      era: {
        en: "March on Versailles",
        el: "Πορεία στις Βερσαλλίες"
      },
      events: [
        {
          title: {
            en: "The women bring the king to Paris",
            el: "Οι γυναίκες φέρνουν τον βασιλιά στο Παρίσι"
          },
          description: {
            en: "On 5 October, six thousand market-women march twelve miles to Versailles in the rain demanding bread. They invade the palace, kill two royal guards, and force Louis XVI to return with them to the Tuileries. The Assembly follows. King, queen, and government are now hostages in Paris.",
            el: "Στις 5 Οκτωβρίου, έξι χιλιάδες γυναίκες της αγοράς βαδίζουν δεκαοκτώ χιλιόμετρα ως τις Βερσαλλίες μέσα στη βροχή απαιτώντας ψωμί. Εισβάλλουν στο ανάκτορο, σκοτώνουν δύο φρουρούς και αναγκάζουν τον Λουδοβίκο ΙΣΤ΄ να επιστρέψει μαζί τους στα Τυιλερί. Η Συνέλευση τους ακολουθεί. Βασιλιάς, βασίλισσα και κυβέρνηση είναι πλέον όμηροι στο Παρίσι."
          },
          extendedDescription: {
            en: "Lafayette followed hours later with the National Guard. At dawn on 6 October the crowd broke into the palace, and Marie-Antoinette escaped through a hidden passage to the king's rooms. The royal family was escorted to Paris in a procession led by women who shouted that they were bringing back 'the baker, the baker's wife and the baker's boy'. Louis also accepted the Declaration of the Rights of Man, which he had been delaying.",
            el: "Ο Λαφαγιέτ ακολούθησε ώρες αργότερα με την Εθνοφρουρά. Την αυγή της 6ης Οκτωβρίου το πλήθος εισέβαλε στο ανάκτορο, και η Μαρία Αντουανέτα διέφυγε μέσα από ένα κρυφό πέρασμα στα διαμερίσματα του βασιλιά. Η βασιλική οικογένεια οδηγήθηκε στο Παρίσι σε μια πομπή με επικεφαλής γυναίκες που φώναζαν ότι έφερναν πίσω «τον φούρναρη, τη φουρνάρισσα και το φουρναρόπουλο». Ο Λουδοβίκος αποδέχτηκε επίσης τη Διακήρυξη των Δικαιωμάτων του Ανθρώπου, την οποία καθυστερούσε."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1790,
      month: 7,
      era: {
        en: "The Constitutional Year",
        el: "Το Συνταγματικό Έτος"
      },
      events: [
        {
          title: {
            en: "Fête de la Fédération and the Civil Constitution of the Clergy",
            el: "Fête de la Fédération και η Πολιτική Συνταγή του Κλήρου"
          },
          description: {
            en: "On the first anniversary of the Bastille, three hundred thousand Parisians and federated National Guardsmen gather on the Champ de Mars; Talleyrand, the bishop of Autun, says mass and the king swears to the constitution. Two days earlier, the Civil Constitution of the Clergy had subordinated the French Church to the state.",
            el: "Στην πρώτη επέτειο της Βαστίλης, τριακόσιες χιλιάδες Παριζιάνοι και ομοσπονδιακοί Εθνοφρουροί συγκεντρώνονται στο Champ de Mars· ο Ταλεϋράνδος, ο επίσκοπος της Ωτέν, λέει τη λειτουργία και ο βασιλιάς ορκίζεται στο σύνταγμα. Δύο ημέρες νωρίτερα, η Πολιτική Συνταγή του Κλήρου είχε υπαγάγει τη Γαλλική Εκκλησία στο κράτος."
          },
          extendedDescription: {
            en: "The Constitution required every parish priest and bishop to take an oath to it. Half the clergy refused — the 'refractory' priests would become a permanent fifth column of counter-revolution, particularly in the Vendée and Brittany. The papal condemnation in March 1791 broke the brief honeymoon of revolution and church; the next two centuries of French laïcité begin here.",
            el: "Η Συνταγή απαιτούσε από κάθε ενορίτη και επίσκοπο να ορκιστεί σε αυτήν. Ο μισός κλήρος αρνήθηκε — οι «αντιδραστικοί» ιερείς θα γίνονταν μόνιμη πέμπτη φάλαγγα της αντεπανάστασης, ιδίως στη Βαντέ και τη Βρετάνη. Η παπική καταδίκη τον Μάρτιο του 1791 έσπασε τον σύντομο μήνα του μέλιτος επανάστασης και Εκκλησίας· οι επόμενοι δύο αιώνες της γαλλικής laïcité αρχίζουν εδώ."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1791,
      month: 6,
      era: {
        en: "Flight to Varennes",
        el: "Φυγή στο Βαρέν"
      },
      events: [
        {
          title: {
            en: "The king is arrested at the post-house of Varennes",
            el: "Ο βασιλιάς συλλαμβάνεται στο ταχυδρομείο του Βαρέν"
          },
          description: {
            en: "On the night of 20-21 June, Louis XVI, the queen, and the royal children flee Paris in a heavy berline for the loyalist border armies. Recognised at Sainte-Menehould by the postmaster Drouet, they are detained at Varennes and brought back to Paris in disgrace. The fiction of a constitutional monarchy is mortally wounded.",
            el: "Τη νύχτα της 20-21 Ιουνίου, ο Λουδοβίκος ΙΣΤ΄, η βασίλισσα και τα βασιλικά τέκνα διαφεύγουν από το Παρίσι με βαριά berline προς τους πιστούς συνοριακούς στρατούς. Αναγνωρισμένος στο Σαιντ-Μενεούλντ από τον ταχυδρόμο Ντρουέ, συλλαμβάνεται στο Βαρέν και επιστρέφεται στο Παρίσι ντροπιασμένος. Η φιξιόν της συνταγματικής μοναρχίας τραυματίζεται θανάσιμα."
          },
          extendedDescription: {
            en: "The 'Champ de Mars massacre' of 17 July — when Lafayette's National Guard fired on a republican crowd demanding the king's deposition — split the patriot party. The new Constitution of September 1791, the first written French constitution, was law on paper; in fact, the country was already moving toward republic.",
            el: "Η «σφαγή του Champ de Mars» στις 17 Ιουλίου — όταν η Εθνοφρουρά του Λαφαγέτ άνοιξε πυρ σε ρεπουμπλικανικό πλήθος που απαιτούσε την εκθρόνιση του βασιλιά — διέσπασε το πατριωτικό κόμμα. Το νέο Σύνταγμα του Σεπτεμβρίου 1791, το πρώτο γραπτό γαλλικό σύνταγμα, ήταν νόμος στο χαρτί· στην πραγματικότητα, η χώρα κινούνταν ήδη προς τη δημοκρατία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1792,
      month: 4,
      era: {
        en: "Revolutionary War",
        el: "Επαναστατικός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "France declares war on Austria",
            el: "Η Γαλλία κηρύσσει τον πόλεμο στην Αυστρία"
          },
          description: {
            en: "Pushed by the Girondins and by the king (who hopes for foreign rescue), the Legislative Assembly votes war against the king of Hungary and Bohemia. Prussia joins Austria within weeks. The Brunswick Manifesto of July threatens 'exemplary vengeance' on Paris if any harm comes to the king. It detonates the city.",
            el: "Σπρωγμένη από τους Γιρονδίνους και από τον ίδιο τον βασιλιά (που ελπίζει σε ξένη διάσωση), η Νομοθετική Συνέλευση ψηφίζει τον πόλεμο κατά του βασιλιά της Ουγγαρίας και της Βοημίας. Η Πρωσία προσχωρεί στην Αυστρία σε εβδομάδες. Το Μανιφέστο του Μπράουνσβαϊγκ του Ιουλίου απειλεί «παραδειγματική εκδίκηση» στο Παρίσι αν συμβεί οτιδήποτε στον βασιλιά. Πυροδοτεί την πόλη."
          },
          extendedDescription: {
            en: "Brissot and the Girondins believed a war would spread liberty and unmask traitors at home; Robespierre warned in vain that 'no one loves armed missionaries'. The first campaigns went badly, and in July the Assembly declared 'the fatherland in danger', calling for volunteers. The war song written that April in Strasbourg by the engineer officer Rouget de Lisle for the Army of the Rhine became, as the Marseillaise, the anthem of the Revolution.",
            el: "Ο Μπρισό και οι Γιρονδίνοι πίστευαν ότι ένας πόλεμος θα διέδιδε την ελευθερία και θα ξεσκέπαζε τους προδότες στο εσωτερικό· ο Ροβεσπιέρος προειδοποίησε μάταια ότι «κανείς δεν αγαπά τους ένοπλους ιεραποστόλους». Οι πρώτες εκστρατείες πήγαν άσχημα, και τον Ιούλιο η Συνέλευση κήρυξε «την πατρίδα σε κίνδυνο», καλώντας εθελοντές. Το πολεμικό άσμα που είχε γράψει εκείνον τον Απρίλιο στο Στρασβούργο ο αξιωματικός του μηχανικού Ρουζέ ντε Λιλ για τον Στρατό του Ρήνου έγινε, ως Μασσαλιώτιδα, ο ύμνος της Επανάστασης."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1792,
      month: 8,
      era: {
        en: "Fall of the Monarchy",
        el: "Πτώση της Μοναρχίας"
      },
      events: [
        {
          title: {
            en: "10 August: the Tuileries are stormed",
            el: "10 Αυγούστου: τα Τυιλερί αλώνονται"
          },
          description: {
            en: "Insurgent sections of Paris and federated National Guards from Marseille — singing a war song newly composed by Rouget de Lisle, now called La Marseillaise — storm the Tuileries. The Swiss Guard is massacred to the last man. The king and his family flee to the Assembly, which suspends the monarchy and orders their imprisonment in the Temple.",
            el: "Εξεγερμένα τμήματα του Παρισιού και ομοσπονδιακοί Εθνοφρουροί από τη Μασσαλία — που τραγουδούν ένα πολεμικό άσμα του Ρουζέ ντε Λιλ, που τώρα λέγεται La Marseillaise — αλώνουν τα Τυιλερί. Η Ελβετική Φρουρά κατασφάζεται μέχρι τον τελευταίο. Ο βασιλιάς και η οικογένειά του διαφεύγουν στη Συνέλευση, που αναστέλλει τη μοναρχία και διατάζει την κράτησή τους στον Ναό."
          },
          extendedDescription: {
            en: "About six hundred Swiss Guards died defending the palace. Power passed to the insurrectionary Paris Commune; in early September, amid fears of a Prussian advance, crowds massacred some 1,100 to 1,400 prisoners in the city's jails. On 20 September the revolutionary army halted the Prussians at Valmy, and the next day the new National Convention abolished the monarchy and proclaimed the Republic.",
            el: "Περίπου εξακόσιοι Ελβετοί φρουροί σκοτώθηκαν υπερασπιζόμενοι το ανάκτορο. Η εξουσία πέρασε στην επαναστατική Κομμούνα του Παρισιού· στις αρχές Σεπτεμβρίου, εν μέσω φόβων για πρωσική προέλαση, πλήθη έσφαξαν περίπου 1.100 έως 1.400 κρατουμένους στις φυλακές της πόλης. Στις 20 Σεπτεμβρίου ο επαναστατικός στρατός ανέκοψε τους Πρώσους στο Βαλμί, και την επόμενη μέρα η νέα Εθνική Συνέλευση κατάργησε τη μοναρχία και ανακήρυξε τη Δημοκρατία."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1792,
      month: 9,
      era: {
        en: "Valmy and the Republic",
        el: "Βαλμύ και η Δημοκρατία"
      },
      events: [
        {
          title: {
            en: "September massacres, Valmy, and the proclamation of the Republic",
            el: "Σεπτεμβριανές σφαγές, Βαλμύ και η ανακήρυξη της Δημοκρατίας"
          },
          description: {
            en: "Between 2 and 6 September, Parisian sans-culottes drag suspected counter-revolutionaries from the city prisons and butcher some twelve hundred. On 20 September, the French army under Dumouriez and Kellermann holds the Prussians at Valmy in a cannonade. On the 21st, the new National Convention abolishes the monarchy and proclaims the French Republic.",
            el: "Μεταξύ 2 και 6 Σεπτεμβρίου, Παριζιάνοι σαν-κιλότ σύρουν ύποπτους αντεπαναστάτες από τις φυλακές της πόλης και σφάζουν περίπου χίλιους διακόσιους. Στις 20 Σεπτεμβρίου, ο γαλλικός στρατός υπό τους Ντυμουριέ και Κέλερμαν κρατά τους Πρώσους στο Βαλμύ σε ένα πυροβολισμικό. Στις 21, η νέα Εθνική Συνέλευση καταργεί τη μοναρχία και ανακηρύσσει τη Γαλλική Δημοκρατία."
          },
          extendedDescription: {
            en: "Goethe, watching with the duke of Weimar from the Prussian camp, said that evening: 'from this place and from this day forth begins a new epoch in the history of the world, and you can all say you were present at its birth.' He was not exaggerating. The Republic dated its acts from Year I and would soon mint the first secular calendar in Western history.",
            el: "Ο Γκαίτε, παρακολουθώντας με τον δούκα του Βαϊμάρης από το πρωσικό στρατόπεδο, είπε εκείνο το βράδυ: «από αυτό το μέρος και από αυτή την ημέρα αρχίζει μια νέα εποχή στην ιστορία του κόσμου, και όλοι σας μπορείτε να πείτε ότι ήσασταν παρόντες στη γέννησή της». Δεν υπερέβαλλε. Η Δημοκρατία χρονολογούσε τις πράξεις της από το Έτος Α΄ και θα έκοβε σύντομα το πρώτο κοσμικό ημερολόγιο της δυτικής ιστορίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1793,
      month: 1,
      era: {
        en: "Regicide",
        el: "Βασιλοκτονία"
      },
      events: [
        {
          title: {
            en: "Louis XVI executed on the Place de la Révolution",
            el: "Ο Λουδοβίκος ΙΣΤ΄ εκτελείται στην Place de la Révolution"
          },
          description: {
            en: "After a five-week trial and a roll-call vote in which a bare majority of the Convention chose death without appeal, the king — now called Citizen Louis Capet — is guillotined on what is now the Place de la Concorde on 21 January. He is forty years old. Within weeks war is declared on Britain and the Dutch Republic.",
            el: "Μετά από δίκη πέντε εβδομάδων και ονομαστική ψηφοφορία στην οποία οριακή πλειοψηφία της Συνέλευσης επέλεξε τον θάνατο χωρίς έφεση, ο βασιλιάς — που πλέον αποκαλείται Πολίτης Λουδοβίκος Καπέ — γκιλοτινίζεται σε αυτό που είναι σήμερα η Place de la Concorde στις 21 Ιανουαρίου. Είναι σαράντα ετών. Σε εβδομάδες κηρύσσεται πόλεμος στη Βρετανία και την Ολλανδική Δημοκρατία."
          },
          extendedDescription: {
            en: "The discovery in a Tuileries wall safe of the king's secret correspondence sealed his fate. Among those voting for death was his own cousin, the Duke of Orléans, who called himself Philippe Égalité. On the scaffold Louis tried to address the crowd, declaring that he died innocent, before drums drowned his words; his confessor, the Irish-born Abbé Edgeworth, is said to have told him, 'Son of Saint Louis, ascend to heaven.'",
            el: "Η ανακάλυψη της μυστικής αλληλογραφίας του βασιλιά σε ένα κρυφό χρηματοκιβώτιο στον τοίχο του Κεραμεικού σφράγισε την τύχη του. Ανάμεσα σε όσους ψήφισαν υπέρ του θανάτου ήταν και ο ίδιος ο ξάδελφός του, ο δούκας της Ορλεάνης, που αυτοαποκαλούνταν Φίλιππος Ισότητα. Στο ικρίωμα ο Λουδοβίκος προσπάθησε να απευθυνθεί στο πλήθος, δηλώνοντας ότι πέθαινε αθώος, προτού τα τύμπανα πνίξουν τα λόγια του· ο εξομολόγος του, ο ιρλανδικής καταγωγής αββάς Έτζγουορθ, λέγεται ότι του είπε: «Γιε του Αγίου Λουδοβίκου, ανέβα στον ουρανό»."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1793,
      month: 3,
      era: {
        en: "Vendée and the First Coalition",
        el: "Βαντέ και ο Α΄ Συνασπισμός"
      },
      events: [
        {
          title: {
            en: "The Vendée rises; the Committee of Public Safety is born",
            el: "Η Βαντέ ξεσηκώνεται· γεννιέται η Επιτροπή Δημόσιας Σωτηρίας"
          },
          description: {
            en: "Mass conscription provokes a Catholic and royalist rising in the Vendée and along the lower Loire under noble and peasant leaders — La Rochejaquelein, Cathelineau, Charette. The Convention responds by creating, on 6 April, the Committee of Public Safety: nine, then twelve, men with emergency authority over the war and the state.",
            el: "Η μαζική επιστράτευση προκαλεί καθολική και βασιλόφρονα εξέγερση στη Βαντέ και κατά μήκος του κάτω Λίγηρα υπό ευγενείς και αγρότες αρχηγούς — Λα Ροσζακελέν, Καθελινώ, Σαρέτ. Η Συνέλευση απαντά δημιουργώντας, στις 6 Απριλίου, την Επιτροπή Δημόσιας Σωτηρίας: εννέα, μετά δώδεκα, άνδρες με έκτακτη εξουσία πάνω στον πόλεμο και το κράτος."
          },
          extendedDescription: {
            en: "The rising was sparked by the levy of 300,000 conscripts and by hostility to the Revolution's treatment of the Church. The Republic's repression was merciless: 'infernal columns' burned villages in 1794, and at Nantes the representative Carrier had prisoners drowned en masse in the Loire. Estimates of the dead in the Vendée wars run to around 170,000 or more. On the Committee, Robespierre and the military engineer Lazare Carnot, the 'organiser of victory', became the dominant figures.",
            el: "Την εξέγερση πυροδότησε η στρατολόγηση 300.000 νεοσυλλέκτων και η εχθρότητα προς τη μεταχείριση της Εκκλησίας από την Επανάσταση. Η καταστολή από τη Δημοκρατία ήταν ανελέητη: «κολόνες της κόλασης» έκαψαν χωριά το 1794, και στη Νάντη ο αντιπρόσωπος Καριέ έβαλε να πνίξουν μαζικά κρατουμένους στον Λίγηρα. Οι εκτιμήσεις για τους νεκρούς των πολέμων της Βανδέας φτάνουν περίπου τις 170.000 ή και περισσότερους. Στην Επιτροπή, ο Ροβεσπιέρος και ο στρατιωτικός μηχανικός Λαζάρ Καρνό, ο «οργανωτής της νίκης», έγιναν οι κυρίαρχες μορφές."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1793,
      month: 6,
      era: {
        en: "Fall of the Girondins",
        el: "Πτώση των Γιρονδίνων"
      },
      events: [
        {
          title: {
            en: "The Mountain purges the Convention",
            el: "Το Όρος εκκαθαρίζει τη Συνέλευση"
          },
          description: {
            en: "On 2 June, surrounded by eighty thousand National Guards under Hanriot, the Convention votes the arrest of twenty-nine Girondin deputies. The Mountain — Robespierre, Saint-Just, Couthon, Marat, Danton — rules. In the provinces a 'federalist' revolt breaks out from Lyon to Toulon.",
            el: "Στις 2 Ιουνίου, περικυκλωμένη από ογδόντα χιλιάδες Εθνοφρουρούς υπό τον Ανριό, η Συνέλευση ψηφίζει τη σύλληψη είκοσι εννέα Γιρονδίνων βουλευτών. Το Όρος — Ροβεσπιέρρος, Σαιν-Ζιστ, Κουθόν, Μαρά, Δαντόν — κυβερνά. Στις επαρχίες ξεσπά μια «φεντεραλιστική» εξέγερση από τη Λυών ως την Τουλόν."
          },
          extendedDescription: {
            en: "The Mountain, named for its seats high on the benches of the Convention, relied on the Paris sans-culottes against the more moderate, provincial Girondins. The revolts that followed were crushed brutally: Lyon was besieged and hundreds were shot by cannon fire, while at Toulon, which had opened its harbour to the British fleet, the recapture in December 1793 made the name of a young artillery captain, Napoleon Bonaparte. In August the Convention decreed the levée en masse, mobilising the whole nation for war.",
            el: "Η Ορεινή, που πήρε το όνομά της από τις θέσεις της ψηλά στα έδρανα της Συνέλευσης, στηριζόταν στους σανκιλότους του Παρισιού απέναντι στους πιο μετριοπαθείς, επαρχιακούς Γιρονδίνους. Οι εξεγέρσεις που ακολούθησαν καταπνίγηκαν βάναυσα: η Λυών πολιορκήθηκε και εκατοντάδες εκτελέστηκαν με κανονιές, ενώ στην Τουλόν, που είχε ανοίξει το λιμάνι της στον βρετανικό στόλο, η ανακατάληψη τον Δεκέμβριο του 1793 έκανε γνωστό το όνομα ενός νεαρού λοχαγού του πυροβολικού, του Ναπολέοντα Βοναπάρτη. Τον Αύγουστο η Συνέλευση αποφάσισε τη γενική επιστράτευση (levée en masse), κινητοποιώντας ολόκληρο το έθνος για τον πόλεμο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1793,
      month: 7,
      era: {
        en: "Death of Marat",
        el: "Θάνατος του Μαρά"
      },
      events: [
        {
          title: {
            en: "Charlotte Corday stabs Marat in his bath",
            el: "Η Σαρλότ Κορντέ μαχαιρώνει τον Μαρά στο μπάνιο του"
          },
          description: {
            en: "On 13 July a young Girondin sympathiser from Caen, Charlotte Corday, is admitted to Marat's apartment on the pretext of denouncing fugitive deputies and stabs the journalist of L'Ami du peuple to death in his medicinal bath. She is guillotined four days later. David's painting will turn the demagogue into a republican saint.",
            el: "Στις 13 Ιουλίου μια νεαρή συμπαθούσα των Γιρονδίνων από την Καν, η Σαρλότ Κορντέ, γίνεται δεκτή στο διαμέρισμα του Μαρά με το πρόσχημα της καταγγελίας δραπέτων βουλευτών και μαχαιρώνει θανάσιμα τον δημοσιογράφο της L'Ami du peuple στο φαρμακευτικό του μπάνιο. Γκιλοτινίζεται τέσσερις ημέρες αργότερα. Ο πίνακας του Νταβίντ θα μετατρέψει τον δημαγωγό σε ρεπουμπλικανό άγιο."
          },
          extendedDescription: {
            en: "Marat, a doctor turned journalist, soaked in medicinal baths because of a painful skin disease and worked there on his paper. At her trial Corday, aged twenty-four, declared that she had 'killed one man to save a hundred thousand'. Her act had the opposite effect: Marat became a martyr of the Revolution, and the purge of the Girondins she had hoped to avenge only intensified.",
            el: "Ο Μαρά, γιατρός που έγινε δημοσιογράφος, έκανε θεραπευτικά λουτρά λόγω μιας επώδυνης δερματικής πάθησης και δούλευε εκεί την εφημερίδα του. Στη δίκη της η Κορντέ, είκοσι τεσσάρων ετών, δήλωσε ότι «σκότωσε έναν άνθρωπο για να σώσει εκατό χιλιάδες». Η πράξη της είχε το αντίθετο αποτέλεσμα: ο Μαρά έγινε μάρτυρας της Επανάστασης, και η δίωξη των Γιρονδίνων που ήλπιζε να εκδικηθεί απλώς εντάθηκε."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1793,
      month: 9,
      era: {
        en: "Terror is the Order of the Day",
        el: "Η Τρομοκρατία στην Ημερήσια Διάταξη"
      },
      events: [
        {
          title: {
            en: "The Law of Suspects",
            el: "Ο Νόμος των Υπόπτων"
          },
          description: {
            en: "On 17 September the Convention passes the Law of Suspects, authorising the arrest of anyone who 'by their conduct, their connections, their utterances, or their writings have shown themselves partisans of tyranny'. The Reign of Terror, formally placed à l'ordre du jour on 5 September, is law.",
            el: "Στις 17 Σεπτεμβρίου η Συνέλευση ψηφίζει τον Νόμο των Υπόπτων, που εξουσιοδοτεί τη σύλληψη οποιουδήποτε «με τη συμπεριφορά του, τις σχέσεις του, τις εκφράσεις του ή τα γραπτά του έχει δείξει ότι είναι οπαδός της τυραννίας». Η Βασιλεία της Τρομοκρατίας, επίσημα τεθείσα à l'ordre du jour στις 5 Σεπτεμβρίου, είναι νόμος."
          },
          extendedDescription: {
            en: "By July 1794 the revolutionary tribunals would condemn some seventeen thousand people to death and accumulate three hundred thousand suspects in the prisons; perhaps as many would die without trial in the Vendée and the federalist cities — at Lyon, demolished in part as a punishment, and at Nantes, where Carrier drowned thousands of prisoners in the Loire. The Levée en masse of August had meanwhile put fourteen armies in the field.",
            el: "Μέχρι τον Ιούλιο του 1794 τα επαναστατικά δικαστήρια θα καταδίκαζαν περίπου δεκαεπτά χιλιάδες ανθρώπους σε θάνατο και θα συσσώρευαν τριακόσιες χιλιάδες υπόπτους στις φυλακές· ίσως άλλοι τόσοι θα πέθαιναν χωρίς δίκη στη Βαντέ και στις φεντεραλιστικές πόλεις — στη Λυών, που κατεδαφίστηκε εν μέρει ως τιμωρία, και στη Ναντ, όπου ο Καριέ έπνιξε χιλιάδες κρατουμένους στον Λίγηρα. Η Levée en masse του Αυγούστου είχε εν τω μεταξύ βγάλει δεκατέσσερις στρατούς στο πεδίο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1793,
      month: 10,
      era: {
        en: "Execution of the Queen and the Girondins",
        el: "Εκτέλεση της Βασίλισσας και των Γιρονδίνων"
      },
      events: [
        {
          title: {
            en: "Marie-Antoinette and the Girondins go to the guillotine",
            el: "Η Μαρία-Αντουανέτα και οι Γιρονδίνοι στη γκιλοτίνα"
          },
          description: {
            en: "On 16 October the widow Capet, broken by the Temple prison and the Conciergerie, mounts the scaffold; David sketches her in the tumbril. Two weeks later twenty-one Girondin deputies — Brissot, Vergniaud, Gensonné — sing the Marseillaise on the carts to their execution. The Republic of Virtue is devouring its founders.",
            el: "Στις 16 Οκτωβρίου η χήρα Καπέ, συντετριμμένη από τη φυλακή του Ναού και την Conciergerie, ανεβαίνει στο ικρίωμα· ο Νταβίντ τη σκιτσάρει στην άμαξα. Δύο εβδομάδες αργότερα είκοσι ένας Γιρονδίνοι βουλευτές — Μπρισό, Βεργκνιό, Ζανσονέ — τραγουδούν τη Μασσαλιώτιδα στις άμαξες προς την εκτέλεσή τους. Η Δημοκρατία της Αρετής καταβροχθίζει τους ιδρυτές της."
          },
          extendedDescription: {
            en: "At her trial the queen faced even the accusation, pressed by the journalist Hébert, of abusing her own son, which she answered with an appeal to every mother in the room. The Law of Suspects of September had allowed the arrest of anyone thought hostile to the Revolution, and around 17,000 people were executed after trial during the Terror, with many more dying in prison or without trial. Madame Roland, the Girondins' hostess, went to the scaffold in November, exclaiming, 'O Liberty, what crimes are committed in your name!'",
            el: "Στη δίκη της η βασίλισσα αντιμετώπισε ακόμη και την κατηγορία, που πρόβαλε ο δημοσιογράφος Εμπέρ, ότι κακοποίησε τον ίδιο της τον γιο, στην οποία απάντησε με μια έκκληση σε κάθε μητέρα μέσα στην αίθουσα. Ο Νόμος των Υπόπτων του Σεπτεμβρίου είχε επιτρέψει τη σύλληψη όποιου θεωρούνταν εχθρικός προς την Επανάσταση, και περίπου 17.000 άνθρωποι εκτελέστηκαν μετά από δίκη κατά τη Τρομοκρατία, ενώ πολλοί περισσότεροι πέθαναν στη φυλακή ή χωρίς δίκη. Η κυρία Ρολάν, οικοδέσποινα των Γιρονδίνων, ανέβηκε στο ικρίωμα τον Νοέμβριο αναφωνώντας: «Ω Ελευθερία, πόσα εγκλήματα διαπράττονται στο όνομά σου!»"
          },
          category: "political"
        }
      ]
    },
    {
      year: 1794,
      month: 4,
      era: {
        en: "Robespierre Alone",
        el: "Ο Ροβεσπιέρρος Μόνος"
      },
      events: [
        {
          title: {
            en: "Hébertists and Dantonists fall",
            el: "Πέφτουν Εμπερτίστες και Δαντωνιστές"
          },
          description: {
            en: "In March Robespierre destroys the radical Hébertists of the Paris Commune; on 5 April he sends to the guillotine his own former ally Danton, along with Camille Desmoulins and the Indulgents who had called for an end to the Terror. With the foreign armies driven back, only Robespierre is left.",
            el: "Τον Μάρτιο ο Ροβεσπιέρρος καταστρέφει τους ριζοσπάστες Εμπερτίστες της Κομμούνας του Παρισιού· στις 5 Απριλίου στέλνει στη γκιλοτίνα τον πρώην σύμμαχό του Δαντόν, μαζί με τον Καμίλ Ντεμουλέν και τους Indulgents που είχαν ζητήσει το τέλος της Τρομοκρατίας. Με τους ξένους στρατούς απωθημένους, μόνο ο Ροβεσπιέρρος απομένει."
          },
          extendedDescription: {
            en: "On the way to the guillotine Danton is said to have told the executioner, 'Show my head to the people; it is well worth seeing.' In June the Law of 22 Prairial stripped the accused of defence witnesses, and executions in Paris soared, while Robespierre presided over the Festival of the Supreme Being. Fearing they would be next, members of the Convention turned on him in July — the coup of 9 Thermidor.",
            el: "Στον δρόμο προς τη λαιμητόμο ο Δαντόν λέγεται ότι είπε στον δήμιο: «Δείξε το κεφάλι μου στον λαό· αξίζει να το δει». Τον Ιούνιο ο Νόμος της 22ας Πρεριάλ στέρησε από τους κατηγορουμένους τους μάρτυρες υπεράσπισης, και οι εκτελέσεις στο Παρίσι εκτινάχθηκαν, ενώ ο Ροβεσπιέρος προήδρευε στη Γιορτή του Υπέρτατου Όντος. Φοβούμενα ότι θα ήταν τα επόμενα θύματα, μέλη της Συνέλευσης στράφηκαν εναντίον του τον Ιούλιο — το πραξικόπημα της 9ης Θερμιδόρ."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1794,
      month: 7,
      era: {
        en: "Thermidor",
        el: "Θερμιδώρ"
      },
      events: [
        {
          title: {
            en: "9 Thermidor: the fall of Robespierre",
            el: "9 Θερμιδώρ: η πτώση του Ροβεσπιέρρου"
          },
          description: {
            en: "On 9 Thermidor Year II (27 July), surrounded enemies in the Convention shout him down. Robespierre, Saint-Just, Couthon, and twenty of their followers are arrested. The Commune of Paris fails to rescue them. The next day, his jaw shattered by a pistol-ball, Robespierre is guillotined with twenty-one comrades on the Place de la Révolution.",
            el: "Στις 9 Θερμιδώρ Έτους Β΄ (27 Ιουλίου), περικυκλωμένοι εχθροί στη Συνέλευση τον φιμώνουν με φωνές. Ο Ροβεσπιέρρος, ο Σαιν-Ζιστ, ο Κουθόν και είκοσι από τους ακολούθους τους συλλαμβάνονται. Η Κομμούνα του Παρισιού αποτυγχάνει να τους σώσει. Την επομένη, με τη σιαγόνα του σπασμένη από σφαίρα πιστολιού, ο Ροβεσπιέρρος γκιλοτινίζεται με είκοσι ένα συντρόφους στην Place de la Révolution."
          },
          extendedDescription: {
            en: "Thermidor closed the Jacobin republic. The Convention dismantled the apparatus of terror: the Committee of Public Safety reduced, the revolutionary tribunal abolished, the maximum on prices repealed. The 'gilded youth' beat the last Jacobins in the streets of Paris; the Constitution of Year III established a five-man Directory. The Revolution would consume one more cycle of governments before a soldier ended it.",
            el: "Το Θερμιδώρ έκλεισε τη Ιακωβινική δημοκρατία. Η Συνέλευση αποσυναρμολόγησε τον μηχανισμό της τρομοκρατίας: η Επιτροπή Δημόσιας Σωτηρίας μειώθηκε, το επαναστατικό δικαστήριο καταργήθηκε, το μάξιμουμ στις τιμές ανακλήθηκε. Η «χρυσή νεολαία» χτυπούσε τους τελευταίους Ιακωβίνους στους δρόμους του Παρισιού· το Σύνταγμα του Έτους Γ΄ ίδρυσε ένα πενταμελές Διευθυντήριο. Η Επανάσταση θα κατανάλωνε άλλον έναν κύκλο κυβερνήσεων προτού ένας στρατιωτικός τη σταματήσει."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1795,
      month: 10,
      era: {
        en: "Vendémiaire and the Directory",
        el: "Βανδαιμέρ και το Διευθυντήριο"
      },
      events: [
        {
          title: {
            en: "A whiff of grapeshot",
            el: "Μια ριπή από καρτέτσι"
          },
          description: {
            en: "On 13 Vendémiaire (5 October), a royalist insurrection of the Paris sections is broken up on the steps of Saint-Roch by a young brigadier named Napoleone Buonaparte, firing canister into the crowd. The Directory takes office a few weeks later; the brigadier is rewarded with command of the Army of the Interior, and a Creole widow, Joséphine de Beauharnais.",
            el: "Στις 13 Βανδαιμέρ (5 Οκτωβρίου), μια βασιλόφρων εξέγερση των τμημάτων του Παρισιού διαλύεται στα σκαλιά του Saint-Roch από έναν νεαρό ταξίαρχο ονόματι Ναπολεόνε Μπουοναπάρτε, που πυροβολεί καρτέτσι στο πλήθος. Το Διευθυντήριο αναλαμβάνει λίγες εβδομάδες αργότερα· ο ταξίαρχος ανταμείβεται με τη διοίκηση του Στρατού του Εσωτερικού — και μια Κρεολή χήρα, Ζοζεφίνα ντε Μποαρναί."
          },
          extendedDescription: {
            en: "The royalists had risen against the 'two-thirds decree', which reserved most seats in the new legislature for members of the outgoing Convention. The Convention's leader Paul Barras gave Bonaparte the task of defending it, and the phrase 'a whiff of grapeshot' comes from Thomas Carlyle's later history. In March 1796 Bonaparte married Joséphine, and days later left to take command in Italy.",
            el: "Οι βασιλόφρονες είχαν εξεγερθεί κατά του «διατάγματος των δύο τρίτων», που επιφύλασσε τις περισσότερες έδρες του νέου νομοθετικού σώματος για μέλη της απερχόμενης Συνέλευσης. Ο ηγέτης της Συνέλευσης Πωλ Μπαράς ανέθεσε στον Βοναπάρτη να την υπερασπιστεί, και η φράση «μια ριπή βολιδοφόρου» προέρχεται από τη μεταγενέστερη ιστορία του Τόμας Καρλάιλ. Τον Μάρτιο του 1796 ο Βοναπάρτης παντρεύτηκε την Ιωσηφίνα και λίγες μέρες αργότερα έφυγε για να αναλάβει τη διοίκηση στην Ιταλία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1796,
      month: 4,
      era: {
        en: "Italian Campaign",
        el: "Ιταλική Εκστρατεία"
      },
      events: [
        {
          title: {
            en: "Bonaparte takes command of the Army of Italy",
            el: "Ο Βοναπάρτης αναλαμβάνει τον Στρατό της Ιταλίας"
          },
          description: {
            en: "The twenty-six-year-old general arrives at Nice and takes over a ragged, unpaid army of thirty-eight thousand. Within fourteen months he separates the Austrians and Piedmontese, wins fourteen pitched battles — Montenotte, Lodi, Castiglione, Arcole, Rivoli — and dictates terms in Italy in defiance of his own government.",
            el: "Ο εικοσιεξάχρονος στρατηγός φτάνει στη Νίκαια και αναλαμβάνει έναν κουρελιασμένο, απλήρωτο στρατό τριάντα οκτώ χιλιάδων. Σε δεκατέσσερις μήνες διαχωρίζει Αυστριακούς και Πιεμοντέζους, κερδίζει δεκατέσσερις παρατεταγμένες μάχες — Μοντενότε, Λόντι, Καστιλιόνε, Αρκόλε, Ριβολί — και υπαγορεύει όρους στην Ιταλία αψηφώντας τη δική του κυβέρνηση."
          },
          extendedDescription: {
            en: "He promised his hungry soldiers the 'most fertile plains in the world', and paid them with Italian plunder and indemnities. The victory at Lodi in May 1796, he later said, first convinced him he was destined for great things; at Arcole he was famously painted seizing a flag on the bridge. Italian masterpieces were shipped to the Louvre, and he created the Cisalpine Republic as a French client state.",
            el: "Υποσχέθηκε στους πεινασμένους στρατιώτες του «τις πιο εύφορες πεδιάδες του κόσμου» και τους πλήρωσε με ιταλικά λάφυρα και αποζημιώσεις. Η νίκη στο Λόντι τον Μάιο του 1796, είπε αργότερα, τον έπεισε για πρώτη φορά ότι ήταν προορισμένος για μεγάλα πράγματα· στο Αρκόλε απεικονίστηκε σε έναν διάσημο πίνακα να αρπάζει μια σημαία στη γέφυρα. Ιταλικά αριστουργήματα στάλθηκαν στο Λούβρο, και ίδρυσε την Εντεύθεν των Άλπεων (Κισαλπική) Δημοκρατία ως πελατειακό κράτος της Γαλλίας."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1797,
      month: 10,
      era: {
        en: "Peace of Campo Formio",
        el: "Ειρήνη του Κάμπο Φόρμιο"
      },
      events: [
        {
          title: {
            en: "Bonaparte dictates peace to Austria",
            el: "Ο Βοναπάρτης υπαγορεύει ειρήνη στην Αυστρία"
          },
          description: {
            en: "Without consulting the Directory, Bonaparte signs the Treaty of Campo Formio with Austria. France keeps the Austrian Netherlands and the left bank of the Rhine; Venice is wiped off the map after a thousand years of independence and divided with Austria. The First Coalition is broken.",
            el: "Χωρίς να συμβουλευτεί το Διευθυντήριο, ο Βοναπάρτης υπογράφει τη Συνθήκη του Κάμπο Φόρμιο με την Αυστρία. Η Γαλλία κρατά τις Αυστριακές Κάτω Χώρες και την αριστερή όχθη του Ρήνου· η Βενετία διαγράφεται από τον χάρτη μετά από χίλια χρόνια ανεξαρτησίας και μοιράζεται με την Αυστρία. Ο Α΄ Συνασπισμός έχει σπάσει."
          },
          extendedDescription: {
            en: "The treaty also gave France the former Venetian Ionian Islands — Corfu, Zakynthos, Kefalonia and the rest — which had been ruled by Venice for centuries; French garrisons landed there that summer. Weeks earlier, the coup of 18 Fructidor, backed by Bonaparte's troops, had purged royalists from the Directory and the councils. The general returned to Paris a hero, already more popular than the government he served.",
            el: "Η συνθήκη έδωσε επίσης στη Γαλλία τα πρώην βενετικά Ιόνια Νησιά — την Κέρκυρα, τη Ζάκυνθο, την Κεφαλονιά και τα υπόλοιπα — που κυβερνούσε η Βενετία επί αιώνες· γαλλικές φρουρές αποβιβάστηκαν εκεί εκείνο το καλοκαίρι. Λίγες εβδομάδες νωρίτερα, το πραξικόπημα της 18ης Φρυκτιδόρ, με τη στήριξη των στρατευμάτων του Βοναπάρτη, είχε εκκαθαρίσει τους βασιλόφρονες από τον Διευθυντήριο και τα νομοθετικά συμβούλια. Ο στρατηγός επέστρεψε στο Παρίσι ήρωας, ήδη δημοφιλέστερος από την κυβέρνηση που υπηρετούσε."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1798,
      month: 7,
      era: {
        en: "Egyptian Expedition",
        el: "Αιγυπτιακή Εκστρατεία"
      },
      events: [
        {
          title: {
            en: "Battle of the Pyramids",
            el: "Μάχη των Πυραμίδων"
          },
          description: {
            en: "Landed in Egypt with thirty-five thousand men and one hundred and sixty-seven savants — to strike at British India — Bonaparte destroys the Mamluk cavalry of Murad Bey within sight of the pyramids. 'Soldiers, forty centuries look down upon you from these monuments,' he is supposed to have said.",
            el: "Αποβιβασμένος στην Αίγυπτο με τριάντα πέντε χιλιάδες άντρες και εκατόν εξήντα επτά λόγιους — για να χτυπήσει τη βρετανική Ινδία — ο Βοναπάρτης καταστρέφει το μαμελουκικό ιππικό του Μουράντ Μπέη μέσα στην οπτική εμβέλεια των πυραμίδων. «Στρατιώτες, σαράντα αιώνες σας ατενίζουν από αυτά τα μνημεία», λέγεται ότι είπε."
          },
          extendedDescription: {
            en: "On the way the expedition seized Malta from the Knights of St John. In Cairo Bonaparte founded the Institut d'Égypte, and its scholars' work led to the monumental Description de l'Égypte; in 1799 French soldiers found the Rosetta Stone, whose three scripts allowed Champollion to decipher hieroglyphs in 1822. The expedition founded modern Egyptology, even as it failed as a military venture.",
            el: "Στον δρόμο η εκστρατεία κατέλαβε τη Μάλτα από τους Ιππότες του Αγίου Ιωάννη. Στο Κάιρο ο Βοναπάρτης ίδρυσε το Ινστιτούτο της Αιγύπτου, και το έργο των λογίων του οδήγησε στη μνημειώδη «Περιγραφή της Αιγύπτου»· το 1799 Γάλλοι στρατιώτες βρήκαν τη Στήλη της Ροζέτας, της οποίας οι τρεις γραφές επέτρεψαν στον Σαμπολιόν να αποκρυπτογραφήσει τα ιερογλυφικά το 1822. Η εκστρατεία θεμελίωσε τη σύγχρονη αιγυπτιολογία, παρότι απέτυχε ως στρατιωτικό εγχείρημα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1798,
      month: 8,
      era: {
        en: "Battle of the Nile",
        el: "Μάχη του Νείλου"
      },
      events: [
        {
          title: {
            en: "Nelson destroys the French fleet at Aboukir",
            el: "Ο Νέλσον καταστρέφει τον γαλλικό στόλο στο Αμπουκίρ"
          },
          description: {
            en: "On the night of 1-2 August, Nelson catches the French fleet of Admiral Brueys at anchor in Aboukir Bay and destroys eleven of its thirteen ships of the line. Bonaparte's army is stranded in Egypt; the Second Coalition forms; the Mediterranean is British.",
            el: "Τη νύχτα της 1-2 Αυγούστου, ο Νέλσον αιφνιδιάζει τον γαλλικό στόλο του ναυάρχου Μπρουέ αγκυροβολημένο στον κόλπο του Αμπουκίρ και καταστρέφει έντεκα από τα δεκατρία πλοία γραμμής του. Ο στρατός του Βοναπάρτη εγκλωβίζεται στην Αίγυπτο· σχηματίζεται ο Β΄ Συνασπισμός· η Μεσόγειος είναι βρετανική."
          },
          extendedDescription: {
            en: "Admiral Brueys was killed, and his flagship L'Orient blew up in an explosion heard miles away — the scene of the poem 'The boy stood on the burning deck'. The Ottoman Empire declared war on France, and a Russian–Ottoman fleet took the Ionian Islands from the French, creating the Septinsular Republic in 1800, the first self-governing Greek state of modern times. Bonaparte's march into Syria failed before Acre in 1799, and that August he slipped back to France, leaving his army behind.",
            el: "Ο ναύαρχος Μπρυγιές σκοτώθηκε, και η ναυαρχίδα του L'Orient ανατινάχτηκε με έκρηξη που ακούστηκε χιλιόμετρα μακριά — η σκηνή του ποιήματος «Το αγόρι στεκόταν στο φλεγόμενο κατάστρωμα». Η Οθωμανική Αυτοκρατορία κήρυξε τον πόλεμο στη Γαλλία, και ένας ρωσοοθωμανικός στόλος πήρε τα Ιόνια Νησιά από τους Γάλλους, δημιουργώντας το 1800 την Πολιτεία των Επτά Ενωμένων Νήσων, το πρώτο αυτοδιοίκητο ελληνικό κράτος των νεότερων χρόνων. Η προέλαση του Βοναπάρτη στη Συρία απέτυχε μπροστά στην Άκρα το 1799, και εκείνον τον Αύγουστο γύρισε κρυφά στη Γαλλία, αφήνοντας πίσω τον στρατό του."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1799,
      month: 11,
      era: {
        en: "18 Brumaire",
        el: "18 Μπρυμαίρ"
      },
      events: [
        {
          title: {
            en: "Bonaparte overthrows the Directory",
            el: "Ο Βοναπάρτης ανατρέπει το Διευθυντήριο"
          },
          description: {
            en: "Slipped past the British blockade, Bonaparte joins the conspirators Sieyès and Talleyrand. On 18-19 Brumaire (9-10 November), with bayonets at Saint-Cloud and the dexterity of his brother Lucien, president of the Five Hundred, he scatters the legislative councils and is proclaimed First Consul of the new Consulate.",
            el: "Διαφεύγοντας τον βρετανικό αποκλεισμό, ο Βοναπάρτης ενώνεται με τους συνωμότες Σιεγιές και Ταλεϋράνδο. Στις 18-19 Μπρυμαίρ (9-10 Νοεμβρίου), με τις ξιφολόγχες στο Σαιν-Κλου και τη δεξιότητα του αδελφού του Λουκιανού, προέδρου των Πεντακοσίων, διαλύει τα νομοθετικά συμβούλια και ανακηρύσσεται Πρώτος Ύπατος της νέας Υπατείας."
          },
          extendedDescription: {
            en: "The Constitution of Year VIII, plebiscited in December, gave the First Consul a ten-year term and the substance of all executive power. The Revolution, in Bonaparte's phrase, was 'fixed to the principles which began it; it is ended.' For the next fifteen years, the history of France would be the history of one man.",
            el: "Το Σύνταγμα του Έτους Η΄, που επικυρώθηκε με δημοψήφισμα τον Δεκέμβριο, έδωσε στον Πρώτο Ύπατο δεκαετή θητεία και ουσιαστικά όλη την εκτελεστική εξουσία. Η Επανάσταση, με τα λόγια του Βοναπάρτη, «καθηλώθηκε στις αρχές που την άρχισαν· έχει τελειώσει». Για τα επόμενα δεκαπέντε χρόνια, η ιστορία της Γαλλίας θα ήταν η ιστορία ενός άνδρα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1800,
      month: 6,
      era: {
        en: "Marengo",
        el: "Μαρένγκο"
      },
      events: [
        {
          title: {
            en: "Bonaparte saves Italy at Marengo",
            el: "Ο Βοναπάρτης σώζει την Ιταλία στο Μαρένγκο"
          },
          description: {
            en: "Having crossed the Great St Bernard Pass in May, the First Consul faces General Melas's Austrians at Marengo in Piedmont. The battle is being lost when Desaix arrives with reinforcements and dies in the charge that wins it. Italy is again French.",
            el: "Έχοντας διασχίσει το πέρασμα του Μεγάλου Αγίου Βερνάρδου τον Μάιο, ο Πρώτος Ύπατος αντιμετωπίζει τους Αυστριακούς του στρατηγού Μέλας στο Μαρένγκο του Πιεμόντε. Η μάχη χάνεται όταν ο Ντεζέ φτάνει με ενισχύσεις και πεθαίνει στην έφοδο που την κερδίζει. Η Ιταλία είναι ξανά γαλλική."
          },
          extendedDescription: {
            en: "Bonaparte had seized power in the coup of 18 Brumaire the previous November, and Marengo secured his position as First Consul; his official bulletins rewrote the battle to give himself more of the credit. David's painting of him crossing the Alps on a rearing horse was pure propaganda — he actually made the crossing on a mule. The victory led to the Peace of Lunéville with Austria in 1801.",
            el: "Ο Βοναπάρτης είχε καταλάβει την εξουσία με το πραξικόπημα της 18ης Μπρυμαίρ τον προηγούμενο Νοέμβριο, και το Μαρένγκο εδραίωσε τη θέση του ως Πρώτου Υπάτου· τα επίσημα ανακοινωθέντα του ξαναέγραψαν τη μάχη για να του αποδώσουν μεγαλύτερο μέρος της δόξας. Ο πίνακας του Νταβίντ που τον δείχνει να διασχίζει τις Άλπεις πάνω σε ένα άλογο που ανασηκώνεται ήταν καθαρή προπαγάνδα — στην πραγματικότητα η διάβαση έγινε πάνω σε μουλάρι. Η νίκη οδήγησε στην Ειρήνη του Λυνεβίλ με την Αυστρία το 1801."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1801,
      month: 7,
      era: {
        en: "Concordat",
        el: "Κονκορδάτο"
      },
      events: [
        {
          title: {
            en: "Bonaparte reconciles with Rome",
            el: "Ο Βοναπάρτης συμφιλιώνεται με τη Ρώμη"
          },
          description: {
            en: "A Concordat with Pope Pius VII recognises Catholicism as 'the religion of the great majority of Frenchmen'. The state will pay the clergy, who in turn must swear loyalty to it. The schism with the refractory Church of the Revolution is closed.",
            el: "Ένα Κονκορδάτο με τον πάπα Πίο Ζ΄ αναγνωρίζει τον Καθολικισμό ως «τη θρησκεία της μεγάλης πλειοψηφίας των Γάλλων». Το κράτος θα πληρώνει τον κλήρο, που με τη σειρά του πρέπει να ορκιστεί πίστη σε αυτό. Το σχίσμα με την αντιδραστική Εκκλησία της Επανάστασης κλείνει."
          },
          extendedDescription: {
            en: "The Concordat ended the split between the clergy who had sworn loyalty to the Revolution and those who had refused. Bishops were to be named by the First Consul and invested by the pope, and the Church gave up its claim to lands sold during the Revolution. Bonaparte added 'Organic Articles' in 1802 tightening state control. The Concordat governed Church–state relations until the separation law of 1905, and still applies in Alsace and Moselle.",
            el: "Το Κονκορδάτο τερμάτισε τη διάσπαση ανάμεσα στον κλήρο που είχε ορκιστεί πίστη στην Επανάσταση και σε εκείνους που είχαν αρνηθεί. Οι επίσκοποι θα διορίζονταν από τον Πρώτο Ύπατο και θα χειροτονούνταν από τον πάπα, και η Εκκλησία παραιτήθηκε από τη διεκδίκηση των γαιών που είχαν πουληθεί κατά την Επανάσταση. Ο Βοναπάρτης πρόσθεσε το 1802 «Οργανικά Άρθρα» που αύξαναν τον κρατικό έλεγχο. Το Κονκορδάτο ρύθμιζε τις σχέσεις Εκκλησίας και κράτους ως τον νόμο του χωρισμού του 1905 και ισχύει ακόμη στην Αλσατία και στη Μοζέλα."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1802,
      month: 3,
      era: {
        en: "Peace of Amiens",
        el: "Ειρήνη της Αμιένης"
      },
      events: [
        {
          title: {
            en: "France and Britain make peace",
            el: "Γαλλία και Βρετανία συνάπτουν ειρήνη"
          },
          description: {
            en: "The Treaty of Amiens ends a decade of war and gives Europe its first general peace since 1792. Britain returns nearly all her conquests; France keeps the natural frontiers. In August a plebiscite makes Bonaparte Consul for Life. The breathing-space will last fourteen months.",
            el: "Η Συνθήκη της Αμιένης τερματίζει μια δεκαετία πολέμου και δίνει στην Ευρώπη την πρώτη γενική ειρήνη της από το 1792. Η Βρετανία επιστρέφει σχεδόν όλες τις κατακτήσεις της· η Γαλλία κρατά τα φυσικά σύνορα. Τον Αύγουστο ένα δημοψήφισμα κάνει τον Βοναπάρτη Ύπατο εφ' όρου ζωής. Η ανάσα θα κρατήσει δεκατέσσερις μήνες."
          },
          extendedDescription: {
            en: "Thousands of British visitors flocked to Paris to see the art in the Louvre and the man who had conquered it. But Bonaparte used the peace to send an army to Saint-Domingue, where slavery was being restored in the French colonies; the Haitian revolutionary leader Toussaint Louverture was captured and died in a French fortress in 1803, and Haiti declared its independence in 1804. War with Britain resumed in May 1803, and Bonaparte sold Louisiana to the United States.",
            el: "Χιλιάδες Βρετανοί επισκέπτες συνέρρευσαν στο Παρίσι για να δουν τα έργα τέχνης του Λούβρου και τον άνθρωπο που τα είχε κατακτήσει. Όμως ο Βοναπάρτης χρησιμοποίησε την ειρήνη για να στείλει στρατό στον Άγιο Δομίνικο, ενώ η δουλεία αποκαθίστατο στις γαλλικές αποικίες· ο Αϊτινός επαναστατικός ηγέτης Τουσέν Λουβερτίρ αιχμαλωτίστηκε και πέθανε σε ένα γαλλικό φρούριο το 1803, και η Αϊτή κήρυξε την ανεξαρτησία της το 1804. Ο πόλεμος με τη Βρετανία ξανάρχισε τον Μάιο του 1803, και ο Βοναπάρτης πούλησε τη Λουιζιάνα στις Ηνωμένες Πολιτείες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1804,
      month: 3,
      era: {
        en: "Code and Coronation",
        el: "Κώδικας και Στέψη"
      },
      events: [
        {
          title: {
            en: "The Code Civil and the execution of the duc d'Enghien",
            el: "Ο Code Civil και η εκτέλεση του δούκα ντ' Ενγκιάν"
          },
          description: {
            en: "On 21 March, the Code Civil is promulgated: a single, secular, written civil law for all Frenchmen, the most enduring legacy of the Revolution. The same day Bonaparte's police execute the abducted Bourbon prince the duc d'Enghien in the moats of Vincennes — a crime, as Talleyrand observed, that was 'worse than a crime, it was a blunder'.",
            el: "Στις 21 Μαρτίου, ο Code Civil θεσπίζεται: ένας ενιαίος, κοσμικός, γραπτός αστικός νόμος για όλους τους Γάλλους, η πιο διαρκής κληρονομιά της Επανάστασης. Την ίδια ημέρα η αστυνομία του Βοναπάρτη εκτελεί τον απαχθέντα Βουρβωνιστή πρίγκιπα δούκα ντ' Ενγκιάν στις τάφρους του Βενσέν — ένα έγκλημα, όπως παρατήρησε ο Ταλεϋράνδος, «χειρότερο από έγκλημα, ήταν λάθος»."
          },
          extendedDescription: {
            en: "The Code's more than two thousand articles guaranteed equality before the law, secure property and freedom of contract, though it also subordinated wives to their husbands. Carried by French armies and imitated abroad, it shaped the law of Belgium, the Netherlands, Italy, Louisiana and much of Latin America. Enghien was seized on neutral German soil and shot after a hasty military trial, on the false suspicion that he was part of a royalist plot to kill Bonaparte.",
            el: "Τα πάνω από δύο χιλιάδες άρθρα του Κώδικα εγγυούνταν την ισότητα ενώπιον του νόμου, την ασφάλεια της ιδιοκτησίας και την ελευθερία των συμβάσεων, αν και υπέτασσαν επίσης τις συζύγους στους άνδρες τους. Μεταφερμένος από τους γαλλικούς στρατούς και μιμούμενος στο εξωτερικό, διαμόρφωσε το δίκαιο του Βελγίου, των Κάτω Χωρών, της Ιταλίας, της Λουιζιάνας και μεγάλου μέρους της Λατινικής Αμερικής. Ο Ανγκιέν συνελήφθη σε ουδέτερο γερμανικό έδαφος και τουφεκίστηκε μετά από βιαστική στρατοδικεία, με τη λανθασμένη υποψία ότι συμμετείχε σε βασιλική συνωμοσία για τη δολοφονία του Βοναπάρτη."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1804,
      month: 12,
      era: {
        en: "The Coronation",
        el: "Η Στέψη"
      },
      events: [
        {
          title: {
            en: "Napoleon crowns himself emperor at Notre-Dame",
            el: "Ο Ναπολέων αυτοστέφεται αυτοκράτορας στη Νοτρ-Νταμ"
          },
          description: {
            en: "On 2 December, in the cathedral of Notre-Dame de Paris before Pope Pius VII (brought up from Rome for the occasion), Napoleon Bonaparte places the laurel crown on his own head and then crowns Joséphine. The Empire is proclaimed. David's twenty-foot canvas would record the scene for the Louvre.",
            el: "Στις 2 Δεκεμβρίου, στον καθεδρικό της Notre-Dame de Paris ενώπιον του πάπα Πίου Ζ΄ (που έφεραν από τη Ρώμη για την περίσταση), ο Ναπολέων Βοναπάρτης θέτει το στέμμα της δάφνης στο ίδιο του το κεφάλι και μετά στέφει τη Ζοζεφίνα. Η Αυτοκρατορία ανακηρύσσεται. Ο εξάμετρος καμβάς του Νταβίντ θα κατέγραφε τη σκηνή για το Λούβρο."
          },
          extendedDescription: {
            en: "A plebiscite had approved the Empire by an overwhelming, if managed, majority. On hearing the news, Beethoven is said to have scratched Bonaparte's name from the dedication of his Third Symphony, the Eroica. Napoleon created a new court and, in 1808, an imperial nobility; in 1805 he was also crowned king of Italy in Milan with the ancient Iron Crown of Lombardy.",
            el: "Ένα δημοψήφισμα είχε εγκρίνει την Αυτοκρατορία με συντριπτική, αν και κατευθυνόμενη, πλειοψηφία. Ακούγοντας τα νέα, ο Μπετόβεν λέγεται ότι έσβησε το όνομα του Βοναπάρτη από την αφιέρωση της Τρίτης Συμφωνίας του, της Ηρωικής. Ο Ναπολέων δημιούργησε μια νέα αυλή και, το 1808, μια αυτοκρατορική αριστοκρατία· το 1805 στέφθηκε επίσης βασιλιάς της Ιταλίας στο Μιλάνο με το αρχαίο Σιδερένιο Στέμμα της Λομβαρδίας."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jacques-Louis_David_-_The_Coronation_of_Napoleon_(1805-1807).jpg?width=1024",
            alt: {
              en: "The Coronation of Napoleon, by Jacques-Louis David",
              el: "Η στέψη του Ναπολέοντα, έργο του Ζακ-Λουί Νταβίντ"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1805,
      month: 10,
      era: {
        en: "Trafalgar",
        el: "Τραφάλγκαρ"
      },
      events: [
        {
          title: {
            en: "Nelson dies; Britain rules the waves",
            el: "Ο Νέλσον πεθαίνει· η Βρετανία κυβερνά τα κύματα"
          },
          description: {
            en: "Off Cape Trafalgar on 21 October, Vice-Admiral Nelson with twenty-seven ships destroys Villeneuve's combined Franco-Spanish fleet of thirty-three. France loses twenty-two ships of the line; Nelson dies on the quarterdeck of the Victory. The invasion of England is over before it began.",
            el: "Έξω από το Ακρωτήριο Τραφάλγκαρ στις 21 Οκτωβρίου, ο αντιναύαρχος Νέλσον με είκοσι επτά πλοία καταστρέφει τον συνδυασμένο γαλλο-ισπανικό στόλο του Βιλνέβ από τριάντα τρία. Η Γαλλία χάνει είκοσι δύο πλοία γραμμής· ο Νέλσον πεθαίνει στο κάστρο της Νίκης. Η εισβολή στην Αγγλία τελείωσε προτού αρχίσει."
          },
          extendedDescription: {
            en: "Before the battle Nelson hoisted the signal 'England expects that every man will do his duty'. He was shot by a marksman in the rigging of the French ship Redoutable and died three hours later, knowing he had won; his body was carried home preserved in a cask of spirits. By then the Grande Armée had already left its camps at Boulogne and was marching to the Danube, where the day before Trafalgar it had forced an Austrian army to surrender at Ulm.",
            el: "Πριν από τη ναυμαχία ο Νέλσον ύψωσε το σήμα «Η Αγγλία περιμένει από κάθε άνδρα να κάνει το καθήκον του». Χτυπήθηκε από έναν σκοπευτή στα ξάρτια του γαλλικού πλοίου Redoutable και πέθανε τρεις ώρες αργότερα, γνωρίζοντας ότι είχε νικήσει· η σορός του μεταφέρθηκε στην πατρίδα διατηρημένη σε ένα βαρέλι με οινόπνευμα. Ως τότε η Μεγάλη Στρατιά είχε ήδη εγκαταλείψει τα στρατόπεδά της στη Βουλώνη και βάδιζε προς τον Δούναβη, όπου την παραμονή του Τραφάλγκαρ είχε αναγκάσει έναν αυστριακό στρατό να παραδοθεί στο Ουλμ."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1805,
      month: 12,
      era: {
        en: "Austerlitz",
        el: "Αούστερλιτς"
      },
      events: [
        {
          title: {
            en: "The Battle of the Three Emperors",
            el: "Η Μάχη των Τριών Αυτοκρατόρων"
          },
          description: {
            en: "On 2 December, the anniversary of his coronation, Napoleon destroys the joint armies of the emperors Francis II of Austria and Alexander I of Russia in the Moravian fog at Austerlitz. The Treaty of Pressburg dissolves the Holy Roman Empire within the year; Napoleon is master of central Europe.",
            el: "Στις 2 Δεκεμβρίου, την επέτειο της στέψης του, ο Ναπολέων καταστρέφει τους κοινούς στρατούς των αυτοκρατόρων Φραγκίσκου Β΄ της Αυστρίας και Αλεξάνδρου Α΄ της Ρωσίας στην ομίχλη της Μοραβίας στο Αούστερλιτς. Η Συνθήκη του Πρέσμπουργκ διαλύει την Αγία Ρωμαϊκή Αυτοκρατορία μέσα στη χρονιά· ο Ναπολέων είναι κύριος της κεντρικής Ευρώπης."
          },
          extendedDescription: {
            en: "Napoleon deliberately gave up the Pratzen Heights to lure the allies into attacking his seemingly weak right wing, then struck their centre as the morning fog lifted — the 'sun of Austerlitz'. In 1806 he commissioned the Arc de Triomphe to celebrate his victories. That summer he formed the Confederation of the Rhine from the German states, and on 6 August Francis II laid down the title of Holy Roman Emperor, ending an institution that had lasted a thousand years.",
            el: "Ο Ναπολέων εγκατέλειψε σκόπιμα τα υψώματα του Πράτσεν για να παρασύρει τους συμμάχους να επιτεθούν στη φαινομενικά αδύναμη δεξιά πτέρυγά του, και έπειτα χτύπησε το κέντρο τους καθώς διαλυόταν η πρωινή ομίχλη — ο «ήλιος του Άουστερλιτς». Το 1806 παρήγγειλε την Αψίδα του Θριάμβου για να γιορτάσει τις νίκες του. Εκείνο το καλοκαίρι σχημάτισε τη Συνομοσπονδία του Ρήνου από τα γερμανικά κράτη, και στις 6 Αυγούστου ο Φραγκίσκος Β΄ παραιτήθηκε από τον τίτλο του Αυτοκράτορα της Αγίας Ρωμαϊκής Αυτοκρατορίας, τερματίζοντας έναν θεσμό που είχε διαρκέσει χίλια χρόνια."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1806,
      month: 10,
      era: {
        en: "Fall of Prussia",
        el: "Πτώση της Πρωσίας"
      },
      events: [
        {
          title: {
            en: "Jena and Auerstedt; the Continental System",
            el: "Ιένα και Άουερστετ· το Ηπειρωτικό Σύστημα"
          },
          description: {
            en: "On 14 October, in twin battles at Jena and Auerstedt, Napoleon and Davout annihilate the Prussian army of Frederick the Great's heirs. Berlin falls. From the Prussian capital on 21 November, Napoleon decrees the Continental System closing Europe to British trade.",
            el: "Στις 14 Οκτωβρίου, σε διπλές μάχες στην Ιένα και το Άουερστετ, ο Ναπολέων και ο Νταβού εκμηδενίζουν τον πρωσικό στρατό των κληρονόμων του Φρειδερίκου του Μεγάλου. Το Βερολίνο πέφτει. Από την πρωσική πρωτεύουσα στις 21 Νοεμβρίου, ο Ναπολέων θεσπίζει το Ηπειρωτικό Σύστημα κλείνοντας την Ευρώπη στο βρετανικό εμπόριο."
          },
          extendedDescription: {
            en: "At Auerstedt, Marshal Davout's single corps defeated the main Prussian army, which outnumbered it more than two to one. In Jena the philosopher Hegel watched Napoleon ride through the town and called him 'the world-soul on horseback'. The Continental System hurt Britain but also Europe's own ports and merchants, encouraged massive smuggling, and drew Napoleon into wars in Portugal and Spain to enforce it. In defeated Prussia, reformers such as Stein and Scharnhorst began to rebuild the state and army.",
            el: "Στο Άουερστεντ, ένα μόνο σώμα στρατού του στρατάρχη Νταβού νίκησε τον κύριο πρωσικό στρατό, που το ξεπερνούσε αριθμητικά πάνω από δύο προς ένα. Στην Ιένα ο φιλόσοφος Χέγκελ είδε τον Ναπολέοντα να διασχίζει έφιππος την πόλη και τον αποκάλεσε «το πνεύμα του κόσμου πάνω σε άλογο». Το Ηπειρωτικό Σύστημα έβλαψε τη Βρετανία, αλλά και τα ίδια τα λιμάνια και τους εμπόρους της Ευρώπης, ενθάρρυνε το μαζικό λαθρεμπόριο και έσυρε τον Ναπολέοντα σε πολέμους στην Πορτογαλία και στην Ισπανία για να το επιβάλει. Στην ηττημένη Πρωσία, μεταρρυθμιστές όπως ο Στάιν και ο Σάρνχορστ άρχισαν να ανασυγκροτούν το κράτος και τον στρατό."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1807,
      month: 7,
      era: {
        en: "Tilsit",
        el: "Τιλσίτ"
      },
      events: [
        {
          title: {
            en: "Napoleon meets Alexander on the Niemen",
            el: "Ο Ναπολέων συναντά τον Αλέξανδρο στον Νέμαν"
          },
          description: {
            en: "After Friedland, the two emperors meet on a raft anchored in the river Niemen at Tilsit on 25 June and divide Europe. Russia joins the Continental System; the Grand Duchy of Warsaw is created from Prussia; Napoleon is at the height of his power.",
            el: "Μετά το Φρίντλαντ, οι δύο αυτοκράτορες συναντώνται σε σχεδία αγκυροβολημένη στον ποταμό Νέμαν στο Τιλσίτ στις 25 Ιουνίου και μοιράζονται την Ευρώπη. Η Ρωσία προσχωρεί στο Ηπειρωτικό Σύστημα· το Μέγα Δουκάτο της Βαρσοβίας δημιουργείται από την Πρωσία· ο Ναπολέων είναι στο απόγειο της δύναμής του."
          },
          extendedDescription: {
            en: "Queen Louise of Prussia pleaded with Napoleon in person for gentler terms, in vain: Prussia lost about half its territory and population. By the treaties of Tilsit, Russia also returned the Ionian Islands to France, and French troops reoccupied Corfu. The alliance between the two emperors was fragile from the start, and it collapsed over the Continental System and Poland within five years.",
            el: "Η βασίλισσα Λουίζα της Πρωσίας παρακάλεσε αυτοπροσώπως τον Ναπολέοντα για ηπιότερους όρους, μάταια: η Πρωσία έχασε περίπου τα μισά της εδάφη και του πληθυσμού της. Με τις συνθήκες του Τίλσιτ, η Ρωσία επέστρεψε επίσης τα Ιόνια Νησιά στη Γαλλία, και γαλλικά στρατεύματα κατέλαβαν ξανά την Κέρκυρα. Η συμμαχία των δύο αυτοκρατόρων ήταν εύθραυστη από την αρχή και κατέρρευσε μέσα σε πέντε χρόνια εξαιτίας του Ηπειρωτικού Συστήματος και της Πολωνίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1808,
      month: 5,
      era: {
        en: "The Spanish Ulcer",
        el: "Το Ισπανικό Έλκος"
      },
      events: [
        {
          title: {
            en: "Dos de Mayo and the Bayonne abdications",
            el: "Dos de Mayo και οι παραιτήσεις της Μπαγιόν"
          },
          description: {
            en: "After luring the Spanish Bourbons to Bayonne and forcing their abdication in favour of his brother Joseph, Napoleon faces the rising of 2 May in Madrid — immortalised by Goya — and a national insurrection across Spain. The Peninsular War he calls his 'ulcer' will run for six years.",
            el: "Αφού δελεάζει τους Ισπανούς Βουρβώνους στη Μπαγιόν και τους αναγκάζει να παραιτηθούν υπέρ του αδελφού του Ιωσήφ, ο Ναπολέων αντιμετωπίζει την εξέγερση της 2ας Μαΐου στη Μαδρίτη — αθανατισμένη από τον Γκόγια — και εθνική εξέγερση σε όλη την Ισπανία. Ο Ιβηρικός Πόλεμος που αποκαλεί «έλκος» του θα διαρκέσει έξι χρόνια."
          },
          extendedDescription: {
            en: "Goya's paintings The Second of May 1808 and The Third of May 1808, showing French firing squads executing Madrileños, became some of the most powerful images of war ever painted. In July a whole French army surrendered at Bailén, Napoleon's first great defeat on land, and a British force under Arthur Wellesley, the future Duke of Wellington, landed in Portugal. The war gave the world the word 'guerrilla', and Spain's resistance produced the liberal Constitution of Cádiz in 1812.",
            el: "Οι πίνακες του Γκόγια «Η Δεύτερη Μαΐου 1808» και «Η Τρίτη Μαΐου 1808», που δείχνουν γαλλικά εκτελεστικά αποσπάσματα να εκτελούν κατοίκους της Μαδρίτης, έγιναν από τις πιο ισχυρές εικόνες πολέμου που ζωγραφίστηκαν ποτέ. Τον Ιούλιο ένας ολόκληρος γαλλικός στρατός παραδόθηκε στο Μπαϊλέν, η πρώτη μεγάλη ήττα του Ναπολέοντα στη στεριά, και μια βρετανική δύναμη υπό τον Άρθουρ Γουέλσλι, τον μελλοντικό δούκα του Ουέλινγκτον, αποβιβάστηκε στην Πορτογαλία. Ο πόλεμος έδωσε στον κόσμο τη λέξη «γκερίλα», και η ισπανική αντίσταση γέννησε το φιλελεύθερο Σύνταγμα του Κάδιθ το 1812."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1809,
      month: 7,
      era: {
        en: "Wagram",
        el: "Βάγκραμ"
      },
      events: [
        {
          title: {
            en: "Austria humbled again",
            el: "Η Αυστρία ταπεινώνεται ξανά"
          },
          description: {
            en: "On 5-6 July, after a tactical defeat at Aspern-Essling, Napoleon defeats the Archduke Charles in the costliest battle of his career on the Marchfeld east of Vienna. The Treaty of Schönbrunn strips Austria of three and a half million subjects; in April 1810 Napoleon marries the emperor's daughter Marie-Louise.",
            el: "Στις 5-6 Ιουλίου, μετά από τακτική ήττα στο Άσπερν-Έσλινγκ, ο Ναπολέων νικά τον αρχιδούκα Κάρολο στην πιο πολυέξοδη μάχη της σταδιοδρομίας του στο Μαρχφελντ ανατολικά της Βιέννης. Η Συνθήκη του Σένμπρουν αφαιρεί από την Αυστρία τρεισήμισι εκατομμύρια υπηκόους· τον Απρίλιο του 1810 ο Ναπολέων παντρεύεται την κόρη του αυτοκράτορα Μαρία-Λουίζα."
          },
          extendedDescription: {
            en: "At Aspern-Essling in May, Napoleon had suffered his first personal defeat in a decade, and Wagram cost both sides tens of thousands of casualties. Austria also lost its coast on the Adriatic, which became Napoleon's Illyrian Provinces, while the Tyrolean peasant leader Andreas Hofer, who had risen against Bavarian rule, was captured and shot in 1810. Napoleon divorced the childless Joséphine to marry Marie-Louise, and in 1811 she bore him a son, proclaimed King of Rome.",
            el: "Στο Άσπερν-Έσλινγκ τον Μάιο, ο Ναπολέων είχε υποστεί την πρώτη προσωπική του ήττα εδώ και μια δεκαετία, και το Βάγκραμ κόστισε και στις δύο πλευρές δεκάδες χιλιάδες απώλειες. Η Αυστρία έχασε επίσης τις ακτές της στην Αδριατική, που έγιναν οι Ιλλυρικές Επαρχίες του Ναπολέοντα, ενώ ο αγρότης ηγέτης του Τιρόλου Αντρέας Χόφερ, που είχε εξεγερθεί κατά της βαυαρικής κυριαρχίας, συνελήφθη και τουφεκίστηκε το 1810. Ο Ναπολέων χώρισε την άτεκνη Ιωσηφίνα για να παντρευτεί τη Μαρία Λουίζα, και το 1811 εκείνη του χάρισε έναν γιο, που ανακηρύχθηκε Βασιλιάς της Ρώμης."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1812,
      month: 6,
      era: {
        en: "Invasion of Russia",
        el: "Εισβολή στη Ρωσία"
      },
      events: [
        {
          title: {
            en: "The Grande Armée crosses the Niemen",
            el: "Η Μεγάλη Στρατιά διασχίζει τον Νέμαν"
          },
          description: {
            en: "On 24 June six hundred and eighty thousand soldiers of the Grande Armée — half of them Germans, Poles, Italians, Dutchmen, and others under twenty languages of command — cross the Niemen into Russia. It is the largest army Europe has ever assembled. Behind them lies an empire of vassal kings; ahead, a Russian summer.",
            el: "Στις 24 Ιουνίου εξακόσιοι ογδόντα χιλιάδες στρατιώτες της Μεγάλης Στρατιάς — οι μισοί από αυτούς Γερμανοί, Πολωνοί, Ιταλοί, Ολλανδοί και άλλοι υπό είκοσι γλώσσες διοίκησης — διασχίζουν τον Νέμαν στη Ρωσία. Είναι ο μεγαλύτερος στρατός που έχει συγκεντρώσει ποτέ η Ευρώπη. Πίσω τους βρίσκεται μια αυτοκρατορία υποτελών βασιλέων· μπροστά, ένα ρωσικό καλοκαίρι."
          },
          extendedDescription: {
            en: "The Russians refused the decisive battle Napoleon sought, retreating deep into their country under Barclay de Tolly and then Kutuzov and destroying supplies as they went. Heat, hunger, typhus and dysentery killed and disabled tens of thousands of men and horses before the first great battle was fought. The war had been triggered by Russia's withdrawal from the Continental System and by rivalry over Poland.",
            el: "Οι Ρώσοι αρνήθηκαν την αποφασιστική μάχη που αναζητούσε ο Ναπολέων, υποχωρώντας βαθιά στη χώρα τους υπό τον Μπάρκλεϊ ντε Τόλι και έπειτα τον Κουτούζοφ και καταστρέφοντας τα εφόδια στο πέρασμά τους. Η ζέστη, η πείνα, ο τύφος και η δυσεντερία σκότωσαν και αχρήστευσαν δεκάδες χιλιάδες άνδρες και άλογα προτού δοθεί η πρώτη μεγάλη μάχη. Τον πόλεμο πυροδότησαν η αποχώρηση της Ρωσίας από το Ηπειρωτικό Σύστημα και η αντιπαλότητα για την Πολωνία."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1812,
      month: 9,
      era: {
        en: "Borodino and Moscow",
        el: "Μποροντινό και Μόσχα"
      },
      events: [
        {
          title: {
            en: "Borodino and the burning of Moscow",
            el: "Μποροντινό και η πυρπόληση της Μόσχας"
          },
          description: {
            en: "On 7 September, at Borodino seventy miles west of Moscow, Napoleon wins his bloodiest battle: seventy thousand casualties in a single day. A week later he enters Moscow, abandoned and on fire. He waits five weeks for Alexander to sue for peace. No envoy comes.",
            el: "Στις 7 Σεπτεμβρίου, στο Μποροντινό εβδομήντα μίλια δυτικά της Μόσχας, ο Ναπολέων κερδίζει την πιο αιματηρή μάχη του: εβδομήντα χιλιάδες απώλειες σε μία ημέρα. Μια εβδομάδα αργότερα μπαίνει στη Μόσχα, εγκαταλελειμμένη και στις φλόγες. Περιμένει πέντε εβδομάδες να ζητήσει ο Αλέξανδρος ειρήνη. Κανείς απεσταλμένος δεν έρχεται."
          },
          extendedDescription: {
            en: "The fires that destroyed much of Moscow were probably set on the orders of its governor, Count Rostopchin, to deny the city to the French. Napoleon left on 19 October, and the retreat through an early and bitter winter, harried by Cossacks, turned into a catastrophe; at the Berezina river in November the army barely escaped annihilation. Only a small fraction of the men who had crossed the Niemen returned. Tolstoy's War and Peace made 1812 a founding legend of Russian national memory.",
            el: "Οι φωτιές που κατέστρεψαν μεγάλο μέρος της Μόσχας πιθανότατα ανάφθηκαν με εντολή του διοικητή της, κόμη Ροστοπτσίν, για να στερήσουν την πόλη από τους Γάλλους. Ο Ναπολέων έφυγε στις 19 Οκτωβρίου, και η υποχώρηση μέσα σε έναν πρώιμο και σκληρό χειμώνα, με τους Κοζάκους να την παρενοχλούν, μετατράπηκε σε καταστροφή· στον ποταμό Μπερεζίνα τον Νοέμβριο ο στρατός μόλις γλίτωσε τον αφανισμό. Μόνο ένα μικρό μέρος των ανδρών που είχαν διασχίσει τον Νέμαν επέστρεψε. Το «Πόλεμος και Ειρήνη» του Τολστόι έκανε το 1812 ιδρυτικό θρύλο της ρωσικής εθνικής μνήμης."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1812,
      month: 12,
      era: {
        en: "The Retreat",
        el: "Η Υποχώρηση"
      },
      events: [
        {
          title: {
            en: "The Grande Armée dies in the snow",
            el: "Η Μεγάλη Στρατιά πεθαίνει στο χιόνι"
          },
          description: {
            en: "Beginning the retreat on 18 October, the Grande Armée is harried by Cossacks, starved, and frozen. The crossing of the Berezina in late November becomes a byword for catastrophe; Marshal Ney is the last man over the bridges. Of six hundred thousand who crossed the Niemen, perhaps thirty thousand recross it.",
            el: "Αρχίζοντας την υποχώρηση στις 18 Οκτωβρίου, η Μεγάλη Στρατιά παρενοχλείται από Κοζάκους, λιμοκτονεί και παγώνει. Η διάβαση του Μπερεζίνα στα τέλη Νοεμβρίου γίνεται συνώνυμη της καταστροφής· ο στρατάρχης Νέι είναι ο τελευταίος πάνω στις γέφυρες. Από τις εξακόσιες χιλιάδες που πέρασαν τον Νέμαν, ίσως τριάντα χιλιάδες τον ξαναπερνούν."
          },
          extendedDescription: {
            en: "Napoleon left the army at Smorgoni on 5 December and raced across Europe to reach Paris on the 18th, in time to suppress a coup attempt by General Malet. Charles Joseph Minard's later diagram of the campaign — the thin black line of the retreating army shrinking against the temperature graph — would become the single most haunting infographic in modern history.",
            el: "Ο Ναπολέων εγκατέλειψε τον στρατό στο Σμοργκόνι στις 5 Δεκεμβρίου και διέσχισε την Ευρώπη για να φτάσει στο Παρίσι στις 18, εγκαίρως ώστε να καταστείλει απόπειρα πραξικοπήματος του στρατηγού Μαλέ. Το μεταγενέστερο διάγραμμα του Σαρλ Ζοζέφ Μινάρ για την εκστρατεία — η λεπτή μαύρη γραμμή του υποχωρούντος στρατού που συρρικνώνεται στο γράφημα της θερμοκρασίας — θα γινόταν η πιο στοιχειωτική γραφική απεικόνιση της σύγχρονης ιστορίας."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1813,
      month: 10,
      era: {
        en: "Battle of the Nations",
        el: "Μάχη των Εθνών"
      },
      events: [
        {
          title: {
            en: "Leipzig: Napoleon defeated by all Europe",
            el: "Λειψία: ο Ναπολέων ηττημένος από όλη την Ευρώπη"
          },
          description: {
            en: "From 16 to 19 October at Leipzig, the joined armies of Russia, Prussia, Austria, and Sweden — half a million men in all — beat the two hundred thousand Napoleon can still field. He retreats to the Rhine, abandoning Germany. Holland and the satellite kingdoms fall away within months.",
            el: "Από τις 16 ως τις 19 Οκτωβρίου στη Λειψία, οι ενωμένοι στρατοί Ρωσίας, Πρωσίας, Αυστρίας και Σουηδίας — μισό εκατομμύριο άντρες συνολικά — νικούν τους διακόσιες χιλιάδες που μπορεί ακόμη να παρατάξει ο Ναπολέων. Υποχωρεί στον Ρήνο, εγκαταλείποντας τη Γερμανία. Η Ολλανδία και τα δορυφορικά βασίλεια καταρρέουν σε μήνες."
          },
          extendedDescription: {
            en: "Known as the Battle of the Nations, it was the largest battle in Europe before the First World War. During the fighting Saxon troops changed sides, and when a bridge over the Elster was blown too early, thousands of French soldiers were trapped; Marshal Poniatowski drowned trying to swim the river. A giant monument on the battlefield was dedicated on its centenary in 1913.",
            el: "Γνωστή ως Μάχη των Εθνών, ήταν η μεγαλύτερη μάχη στην Ευρώπη πριν από τον Α΄ Παγκόσμιο Πόλεμο. Κατά τη διάρκειά της τα σαξονικά στρατεύματα άλλαξαν στρατόπεδο, και όταν μια γέφυρα στον ποταμό Έλστερ ανατινάχτηκε πρόωρα, χιλιάδες Γάλλοι στρατιώτες παγιδεύτηκαν· ο στρατάρχης Πονιατόφσκι πνίγηκε προσπαθώντας να διασχίσει κολυμπώντας τον ποταμό. Ένα γιγάντιο μνημείο στο πεδίο της μάχης εγκαινιάστηκε στην εκατονταετηρίδα της το 1913."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1814,
      month: 4,
      era: {
        en: "Abdication",
        el: "Παραίτηση"
      },
      events: [
        {
          title: {
            en: "Fontainebleau, Elba, and the Bourbon Restoration",
            el: "Φοντενεμπλώ, Έλβα και η Παλινόρθωση των Βουρβώνων"
          },
          description: {
            en: "Allied armies enter Paris on 31 March. On 6 April, abandoned by his marshals, Napoleon abdicates at Fontainebleau and is granted sovereignty over the tiny island of Elba. Louis XVIII — long an exile in England — returns to Paris in a carriage of the regent; the Bourbon flag flies again over the Tuileries.",
            el: "Συμμαχικοί στρατοί μπαίνουν στο Παρίσι στις 31 Μαρτίου. Στις 6 Απριλίου, εγκαταλελειμμένος από τους στρατάρχες του, ο Ναπολέων παραιτείται στο Φοντενεμπλώ και του δίνεται κυριαρχία πάνω στο μικροσκοπικό νησί της Έλβα. Ο Λουδοβίκος ΙΗ΄ — εξόριστος για χρόνια στην Αγγλία — επιστρέφει στο Παρίσι σε άμαξα του αντιβασιλέα· η σημαία των Βουρβώνων κυματίζει ξανά πάνω από τα Τυιλερί."
          },
          extendedDescription: {
            en: "The defection of Marshal Marmont's corps left Napoleon no choice but to abdicate; days later he tried to poison himself, but the dose, carried since the Russian campaign, had lost its strength. On 20 April he bade farewell to the Old Guard in the courtyard of Fontainebleau. Louis XVIII granted a constitutional Charter preserving much of the Revolution's legacy, and the Treaty of Paris left France with roughly its borders of 1792 while the Congress of Vienna redrew the map of Europe.",
            el: "Η αυτομόληση του σώματος του στρατάρχη Μαρμόν δεν άφησε στον Ναπολέοντα άλλη επιλογή από την παραίτηση· λίγες μέρες αργότερα προσπάθησε να δηλητηριαστεί, αλλά η δόση, που τη μετέφερε από τη ρωσική εκστρατεία, είχε χάσει τη δραστικότητά της. Στις 20 Απριλίου αποχαιρέτησε την Παλαιά Φρουρά στην αυλή του Φοντενεμπλό. Ο Λουδοβίκος ΙΗ΄ παραχώρησε έναν συνταγματικό Χάρτη που διατηρούσε μεγάλο μέρος της κληρονομιάς της Επανάστασης, και η Συνθήκη του Παρισιού άφησε στη Γαλλία περίπου τα σύνορά της του 1792, ενώ το Συνέδριο της Βιέννης ξανασχεδίαζε τον χάρτη της Ευρώπης."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1815,
      month: 3,
      era: {
        en: "The Hundred Days",
        el: "Οι Εκατό Ημέρες"
      },
      events: [
        {
          title: {
            en: "Napoleon lands at Golfe-Juan and marches on Paris",
            el: "Ο Ναπολέων αποβιβάζεται στο Golfe-Juan και βαδίζει στο Παρίσι"
          },
          description: {
            en: "On 1 March, with eleven hundred guards, Napoleon lands from Elba on the Mediterranean coast. The army sent to arrest him at Grenoble joins him instead — 'le voilà!' — and within twenty days he is at the Tuileries; Louis XVIII has fled to Ghent. The Hundred Days have begun.",
            el: "Στις 1 Μαρτίου, με χίλιους εκατό φρουρούς, ο Ναπολέων αποβιβάζεται από την Έλβα στις μεσογειακές ακτές. Ο στρατός που στάλθηκε να τον συλλάβει στη Γκρενόμπλ ενώνεται μαζί του — «le voilà!» — και σε είκοσι ημέρες είναι στα Τυιλερί· ο Λουδοβίκος ΙΗ΄ έχει διαφύγει στη Γάνδη. Οι Εκατό Ημέρες έχουν αρχίσει."
          },
          extendedDescription: {
            en: "At Laffrey, south of Grenoble, Napoleon walked alone towards the soldiers barring his way and opened his greatcoat: 'If there is one among you who wants to kill his emperor, here I am.' Marshal Ney, who had promised to bring him back to Paris 'in an iron cage', went over to him with his troops — and was shot for treason after the second Restoration. The route he took through the Alps is still called the Route Napoléon.",
            el: "Στο Λαφρέ, νότια της Γκρενόμπλ, ο Ναπολέων προχώρησε μόνος προς τους στρατιώτες που του έφραζαν τον δρόμο και άνοιξε το πανωφόρι του: «Αν υπάρχει κάποιος ανάμεσά σας που θέλει να σκοτώσει τον αυτοκράτορά του, εδώ είμαι». Ο στρατάρχης Νεΐ, που είχε υποσχεθεί να τον φέρει πίσω στο Παρίσι «μέσα σε σιδερένιο κλουβί», πέρασε με τα στρατεύματά του στο πλευρό του — και τουφεκίστηκε για προδοσία μετά τη δεύτερη Παλινόρθωση. Η διαδρομή που ακολούθησε μέσα από τις Άλπεις λέγεται ακόμη Route Napoléon."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1815,
      month: 6,
      era: {
        en: "Waterloo",
        el: "Βατερλό"
      },
      events: [
        {
          title: {
            en: "Wellington and Blücher break the Empire",
            el: "Ο Ουέλινγκτον και ο Μπλύχερ συντρίβουν την Αυτοκρατορία"
          },
          description: {
            en: "On 18 June, in a square mile of Belgian rye south of Brussels, Wellington's Anglo-Allied army holds out from morning to evening against Napoleon's Armée du Nord. The arrival of Blücher's Prussians on the right flank completes the rout. Napoleon flees the field; the Empire dies on the slope of the Belle Alliance.",
            el: "Στις 18 Ιουνίου, σε ένα τετραγωνικό μίλι βελγικής σίκαλης νότια των Βρυξελλών, ο αγγλοσυμμαχικός στρατός του Ουέλινγκτον αντέχει από το πρωί ως το βράδυ κατά της Armée du Nord του Ναπολέοντος. Η άφιξη των Πρώσων του Μπλύχερ στη δεξιά πλευρά ολοκληρώνει την κατατρόπωση. Ο Ναπολέων διαφεύγει από το πεδίο· η Αυτοκρατορία πεθαίνει στην πλαγιά της Belle Alliance."
          },
          extendedDescription: {
            en: "Napoleon abdicated a second time on 22 June, surrendered on the British man-of-war Bellerophon at Rochefort on 15 July, and was packed off to the south Atlantic island of Saint Helena, where he died of stomach cancer on 5 May 1821. The Congress of Vienna, working through the spring, had already redrawn the map of Europe to last a hundred years. The Revolution and Napoleon had unmade the old order and bequeathed to the nineteenth century the modern state — codified law, conscript army, secular administration, careers open to talent — and a memory that would shape French politics until the Third Republic.",
            el: "Ο Ναπολέων παραιτήθηκε για δεύτερη φορά στις 22 Ιουνίου, παραδόθηκε στο βρετανικό πολεμικό Bellerophon στο Ροσφόρ στις 15 Ιουλίου και απεστάλη στο νησί της Αγίας Ελένης του νότιου Ατλαντικού, όπου πέθανε από καρκίνο του στομάχου στις 5 Μαΐου 1821. Το Συνέδριο της Βιέννης, που εργάστηκε όλη την άνοιξη, είχε ήδη χαράξει ξανά τον χάρτη της Ευρώπης ώστε να διαρκέσει εκατό χρόνια. Η Επανάσταση και ο Ναπολέων είχαν διαλύσει την παλιά τάξη και κληροδότησαν στον δέκατο ένατο αιώνα το σύγχρονο κράτος — κωδικοποιημένο δίκαιο, στρατό από επιστράτευση, κοσμική διοίκηση, σταδιοδρομίες ανοιχτές στο ταλέντο — και μια μνήμη που θα διαμόρφωνε τη γαλλική πολιτική μέχρι την Τρίτη Δημοκρατία."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
