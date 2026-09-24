/** 19th-Century France — Γαλλία του 19ου Αιώνα · French History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const NINETEENTH_CENTURY_FRANCE = {
  id: "nineteenth-century-france" as const,
  label: {
    en: "19th-Century France",
    el: "Γαλλία του 19ου Αιώνα"
  },
  supertitle: {
    en: "Le long XIXe siècle",
    el: "Ο μακρύς 19ος αιώνας"
  },
  title: {
    en: "19th-Century France",
    el: "Η Γαλλία του 19ου Αιώνα"
  },
  subtitle: {
    en: "From the Second Restoration after Waterloo through five regimes — Bourbon, Orleanist, Second Republic, Second Empire, Third Republic — the July barricades and the conquest of Algiers, the railway age and Haussmann's Paris, the disaster of Sedan and the Commune, the Eiffel Tower and the Dreyfus Affair, the laws of separation and the second colonial empire, to the mobilisation of August 1914. Slide across a century of revolutions, restorations, and republics.",
    el: "Από τη Δεύτερη Παλινόρθωση μετά το Βατερλό μέσα από πέντε καθεστώτα — Βουρβωνικό, Ορλεανικό, Δεύτερη Δημοκρατία, Δεύτερη Αυτοκρατορία, Τρίτη Δημοκρατία — τα οδοφράγματα του Ιουλίου και την κατάκτηση του Αλγερίου, την εποχή των σιδηροδρόμων και το Παρίσι του Οσμάν, την καταστροφή του Σεντάν και την Κομμούνα, τον Πύργο του Άιφελ και την Υπόθεση Ντρέιφους, τους νόμους του χωρισμού και τη δεύτερη αποικιακή αυτοκρατορία, έως την επιστράτευση του Αυγούστου 1914. Μετακινηθείτε σε έναν αιώνα επαναστάσεων, παλινορθώσεων και δημοκρατιών."
  },
  menuDescription: {
    en: "Restoration to Republic: revolutions, the Commune, the Dreyfus Affair, and 1914.",
    el: "Από την Παλινόρθωση στη Δημοκρατία: επαναστάσεις, η Κομμούνα, η Υπόθεση Ντρέιφους και το 1914."
  },
  footerLabel: {
    en: "19th-Century France · 1815–1914",
    el: "Γαλλία του 19ου Αιώνα · 1815–1914"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "19th-Century France",
    el: "Γαλλία του 19ου Αιώνα"
  },
  theme: THEMES.ruby,
  timeline: [
    {
      year: 1815,
      month: 7,
      era: {
        en: "Second Restoration",
        el: "Δεύτερη Παλινόρθωση"
      },
      events: [
        {
          title: {
            en: "Louis XVIII returns in the baggage-train of the allies",
            el: "Ο Λουδοβίκος ΙΗ΄ επιστρέφει στις αποσκευές των συμμάχων"
          },
          description: {
            en: "After Waterloo, Louis XVIII re-enters Paris on 8 July. The Charter of 1814 — a constitutional compromise between throne and revolution — is restored. In the south the 'White Terror' of royalist gangs lynches Bonapartists and Protestants; Marshal Brune is murdered at Avignon, Marshal Ney shot in December at the Luxembourg.",
            el: "Μετά το Βατερλό, ο Λουδοβίκος ΙΗ΄ επιστρέφει στο Παρίσι στις 8 Ιουλίου. Ο Χάρτης του 1814 — συνταγματικός συμβιβασμός μεταξύ θρόνου και επανάστασης — αποκαθίσταται. Στον νότο η «Λευκή Τρομοκρατία» των βασιλόφρων ομάδων λιντσάρει Βοναπαρτιστές και Προτεστάντες· ο στρατάρχης Μπρυν δολοφονείται στην Αβινιόν, ο στρατάρχης Νέι εκτελείται τον Δεκέμβριο στο Λουξεμβούργο."
          },
          extendedDescription: {
            en: "The settlement at the Congress of Vienna had been generous: France kept her 1792 frontiers and an army of occupation withdrew by 1818. Louis governed with the doctrinaires Decazes and Richelieu, balancing the émigré 'ultras' under his brother the comte d'Artois against the liberals of the Chamber. For five years the compromise held.",
            el: "Η ρύθμιση στο Συνέδριο της Βιέννης ήταν γενναιόδωρη: η Γαλλία κράτησε τα σύνορα του 1792 και ο κατοχικός στρατός αποσύρθηκε ως το 1818. Ο Λουδοβίκος κυβέρνησε με τους doctrinaires Ντεκάζ και Ρισελιέ, ισορροπώντας τους εμιγκρέ «ultras» του αδελφού του κόμη ντ' Αρτουά με τους φιλελεύθερους της Βουλής. Επί πέντε χρόνια ο συμβιβασμός κράτησε."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1820,
      month: 2,
      era: {
        en: "Ultras in Power",
        el: "Οι Ultras στην Εξουσία"
      },
      events: [
        {
          title: {
            en: "Assassination of the duc de Berry",
            el: "Δολοφονία του δούκα ντε Μπερύ"
          },
          description: {
            en: "On 13 February, leaving the Opéra in the rue de Richelieu, the king's nephew the duc de Berry is stabbed to death by the saddler Louvel — a lone Bonapartist who hoped to extinguish the dynasty. Decazes is dismissed; the Villèle ministry of ultras takes office; the press is muzzled and the franchise narrowed.",
            el: "Στις 13 Φεβρουαρίου, βγαίνοντας από την Όπερα στη rue de Richelieu, ο ανιψιός του βασιλιά δούκας ντε Μπερύ μαχαιρώνεται θανάσιμα από τον σαγματοποιό Λουβέλ — έναν μοναχικό Βοναπαρτιστή που ήλπιζε να εξαλείψει τη δυναστεία. Ο Ντεκάζ απομακρύνεται· το υπουργείο Βιλέλ των ultras αναλαμβάνει· ο τύπος φιμώνεται και η εκλογική βάση στενεύει."
          },
          extendedDescription: {
            en: "Berry was the only member of the royal family young enough to continue the line, but seven months later his widow gave birth to a son, Henri, hailed by royalists as 'the miracle child'. The ultras blamed the liberal minister Decazes; Chateaubriand wrote that 'his foot slipped in the blood'. The boy, later the comte de Chambord, would be the Legitimist claimant for half a century and in 1873 threw away his chance of the throne by refusing to accept the tricolour flag.",
            el: "Ο Μπερί ήταν το μόνο μέλος της βασιλικής οικογένειας αρκετά νέο για να συνεχίσει τη δυναστεία, αλλά επτά μήνες αργότερα η χήρα του γέννησε έναν γιο, τον Ερρίκο, που οι βασιλόφρονες χαιρέτισαν ως «το παιδί του θαύματος». Οι υπερβασιλόφρονες κατηγόρησαν τον φιλελεύθερο υπουργό Ντεκάζ· ο Σατομπριάν έγραψε ότι «το πόδι του γλίστρησε στο αίμα». Το αγόρι, αργότερα κόμης του Σαμπόρ, θα ήταν ο νομιμόφρων διεκδικητής του θρόνου για μισό αιώνα και το 1873 έχασε την ευκαιρία να βασιλεύσει αρνούμενος να δεχτεί την τρίχρωμη σημαία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1824,
      era: {
        en: "Accession of Charles X",
        el: "Άνοδος του Καρόλου Ι΄"
      },
      events: [
        {
          title: {
            en: "The last anointed king of France",
            el: "Ο τελευταίος χρισμένος βασιλιάς της Γαλλίας"
          },
          description: {
            en: "On the death of Louis XVIII in September, his brother the comte d'Artois becomes Charles X. He has himself anointed at Reims with the old chrism in May 1825 — the last French king crowned by the medieval rite. His reign opens with a billion-franc indemnity to the émigrés and a law of sacrilege punishing desecration with death.",
            el: "Με τον θάνατο του Λουδοβίκου ΙΗ΄ τον Σεπτέμβριο, ο αδελφός του κόμης ντ' Αρτουά γίνεται Κάρολος Ι΄. Χρίεται στη Ρεμς με το παλιό μύρο τον Μάιο του 1825 — ο τελευταίος Γάλλος βασιλιάς που στέφθηκε με το μεσαιωνικό τυπικό. Η βασιλεία του ανοίγει με αποζημίωση ενός δισεκατομμυρίου φράγκων στους εμιγκρέ και νόμο ιεροσυλίας που τιμωρεί τη βεβήλωση με θάνατο."
          },
          extendedDescription: {
            en: "The young Victor Hugo wrote an ode for the coronation, and Rossini composed the opera Il viaggio a Reims for the celebrations. Charles X, who had spent the Revolution in exile, openly sought to restore the power of the Church and the old nobility. When in July 1830 he issued ordinances dissolving the newly elected Chamber, censoring the press and restricting the vote, Paris rose against him.",
            el: "Ο νεαρός Βίκτωρ Ουγκώ έγραψε μια ωδή για τη στέψη, και ο Ροσίνι συνέθεσε την όπερα «Το ταξίδι στη Ρενς» για τους εορτασμούς. Ο Κάρολος Ι΄, που είχε περάσει την Επανάσταση στην εξορία, επιδίωκε ανοιχτά να αποκαταστήσει την ισχύ της Εκκλησίας και της παλαιάς αριστοκρατίας. Όταν τον Ιούλιο του 1830 εξέδωσε διατάγματα που διέλυαν τη νεοεκλεγμένη Βουλή, λογόκριναν τον Τύπο και περιόριζαν το δικαίωμα ψήφου, το Παρίσι εξεγέρθηκε εναντίον του."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1830,
      month: 7,
      era: {
        en: "Three Glorious Days",
        el: "Τρεις Ένδοξες Ημέρες"
      },
      events: [
        {
          title: {
            en: "Algiers falls; the July Ordinances overthrow Charles X",
            el: "Το Αλγέρι πέφτει· τα Διατάγματα του Ιουλίου ανατρέπουν τον Κάρολο Ι΄"
          },
          description: {
            en: "On 5 July, a French expeditionary force takes Algiers — the prestige victory Charles hopes will save his ministry. On 26 July he issues the Saint-Cloud ordinances dissolving the new Chamber, suspending the press, and restricting the franchise. Paris answers with the barricades of the Trois Glorieuses (27-29 July). On 2 August, Charles abdicates and sails for England.",
            el: "Στις 5 Ιουλίου, γαλλικό εκστρατευτικό σώμα καταλαμβάνει το Αλγέρι — η νίκη γοήτρου που ο Κάρολος ελπίζει ότι θα σώσει το υπουργείο του. Στις 26 Ιουλίου εκδίδει τα διατάγματα του Saint-Cloud που διαλύουν τη νέα Βουλή, αναστέλλουν τον τύπο και περιορίζουν την εκλογική βάση. Το Παρίσι απαντά με τα οδοφράγματα των Trois Glorieuses (27-29 Ιουλίου). Στις 2 Αυγούστου, ο Κάρολος παραιτείται και αναχωρεί για την Αγγλία."
          },
          extendedDescription: {
            en: "Some eighteen hundred Parisians and two hundred soldiers died on the barricades; Delacroix would paint Liberty Leading the People before the year was out. The conquest of Algiers, begun as a court diversion, would draw France into a century of colonial war in North Africa. The settlement was an act of revolution — the elder Bourbon line was overthrown — but its political conclusion was not a republic.",
            el: "Περίπου χίλιοι οκτακόσιοι Παριζιάνοι και διακόσιοι στρατιώτες πέθαναν στα οδοφράγματα· ο Ντελακρουά θα ζωγράφιζε την Ελευθερία Οδηγούσα τον Λαό πριν τελειώσει η χρονιά. Η κατάκτηση του Αλγερίου, που άρχισε ως αυλικός αντιπερισπασμός, θα παράσερνε τη Γαλλία σε αιώνα αποικιακού πολέμου στη Βόρεια Αφρική. Η ρύθμιση ήταν πράξη επανάστασης — η πρεσβύτερη γραμμή των Βουρβώνων ανατράπηκε — αλλά η πολιτική κατάληξή της δεν ήταν δημοκρατία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1830,
      month: 8,
      era: {
        en: "July Monarchy",
        el: "Ιουλιανή Μοναρχία"
      },
      events: [
        {
          title: {
            en: "Louis-Philippe, King of the French",
            el: "Λουδοβίκος-Φίλιππος, Βασιλιάς των Γάλλων"
          },
          description: {
            en: "On 9 August, on the recommendation of Lafayette and the bankers around Casimir Périer, the Orléans cousin Louis-Philippe d'Orléans accepts the crown — no longer as 'King of France' but as 'King of the French'. The tricolore returns. The Charter is revised, the franchise widened to about two hundred thousand voters, and France becomes a constitutional bourgeois monarchy.",
            el: "Στις 9 Αυγούστου, με σύσταση του Λαφαγέτ και των τραπεζιτών γύρω από τον Καζιμίρ Περιέ, ο εξάδελφος των Ορλεάνης Λουδοβίκος-Φίλιππος δ' Ορλεάνη αποδέχεται το στέμμα — όχι πια ως «Βασιλιάς της Γαλλίας» αλλά ως «Βασιλιάς των Γάλλων». Η τρίχρωμη επιστρέφει. Ο Χάρτης αναθεωρείται, η εκλογική βάση διευρύνεται περίπου σε διακόσιες χιλιάδες ψηφοφόρους, και η Γαλλία γίνεται συνταγματική αστική μοναρχία."
          },
          extendedDescription: {
            en: "Three days of street fighting in late July — the 'Three Glorious Days' — drove Charles X into exile; Delacroix commemorated them in Liberty Leading the People. Louis-Philippe, who had fought for the Revolution at Valmy and taught school in Swiss exile, cultivated the image of a 'citizen king' who walked Paris with an umbrella. His minister Guizot told those who wanted the vote to 'enrich yourselves', and the conquest of Algeria, begun weeks before the revolution, continued under the new regime.",
            el: "Τρεις μέρες οδομαχιών στα τέλη Ιουλίου — οι «Τρεις Ένδοξες Μέρες» — έστειλαν τον Κάρολο Ι΄ στην εξορία· ο Ντελακρουά τις απαθανάτισε στον πίνακα «Η Ελευθερία οδηγεί τον λαό». Ο Λουδοβίκος Φίλιππος, που είχε πολεμήσει για την Επανάσταση στο Βαλμί και είχε διδάξει σε σχολείο στην εξορία του στην Ελβετία, καλλιεργούσε την εικόνα ενός «βασιλιά-πολίτη» που περπατούσε στο Παρίσι με ομπρέλα. Ο υπουργός του Γκιζό έλεγε σε όσους ζητούσαν ψήφο «πλουτίστε», και η κατάκτηση της Αλγερίας, που είχε αρχίσει λίγες εβδομάδες πριν από την επανάσταση, συνεχίστηκε υπό το νέο καθεστώς."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1832,
      month: 6,
      era: {
        en: "Cholera and the June Rebellion",
        el: "Χολέρα και η Εξέγερση του Ιουνίου"
      },
      events: [
        {
          title: {
            en: "Cholera in Paris and the funeral of General Lamarque",
            el: "Χολέρα στο Παρίσι και η κηδεία του στρατηγού Λαμάρκ"
          },
          description: {
            en: "The Asiatic cholera reaches Paris in March and kills nearly nineteen thousand by autumn, including the prime minister Casimir Périer. At the funeral on 5-6 June of the republican general Lamarque — himself dead of cholera — students and workers throw up barricades in the Saint-Merri quarter. The National Guard crushes them within thirty-six hours.",
            el: "Η ασιατική χολέρα φτάνει στο Παρίσι τον Μάρτιο και σκοτώνει σχεδόν δεκαεννιά χιλιάδες ως το φθινόπωρο, μεταξύ αυτών και τον πρωθυπουργό Καζιμίρ Περιέ. Στην κηδεία της 5-6 Ιουνίου του δημοκρατικού στρατηγού Λαμάρκ — που και αυτός πέθανε από χολέρα — φοιτητές και εργάτες υψώνουν οδοφράγματα στη συνοικία Saint-Merri. Η Εθνοφρουρά τους συντρίβει σε τριάντα έξι ώρες."
          },
          extendedDescription: {
            en: "Among the witnesses at the funeral was a young Victor Hugo, who would build the central scenes of Les Misérables on the memory of these barricades. The rebellion confirmed the regime's bourgeois character: the franchise was based on the property tax; the working classes had no political voice. It would be the first of half a dozen risings before 1848.",
            el: "Ανάμεσα στους αυτόπτες της κηδείας ήταν ο νεαρός Βίκτωρ Ουγκώ, που θα έχτιζε τις κεντρικές σκηνές των Αθλίων στη μνήμη αυτών των οδοφραγμάτων. Η εξέγερση επιβεβαίωσε τον αστικό χαρακτήρα του καθεστώτος: η εκλογική βάση στηριζόταν στον φόρο ιδιοκτησίας· τα εργατικά στρώματα δεν είχαν πολιτική φωνή. Θα ήταν η πρώτη από μισή ντουζίνα εξεγέρσεις πριν το 1848."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1840,
      month: 12,
      era: {
        en: "Return of the Ashes",
        el: "Επιστροφή των Στάχτεων"
      },
      events: [
        {
          title: {
            en: "Napoleon is buried at the Invalides",
            el: "Ο Ναπολέων θάβεται στους Ανάπηρους"
          },
          description: {
            en: "Recovered from Saint Helena by a mission of the prince de Joinville, Napoleon's coffin is borne on 15 December in a colossal funeral car along the Champs-Élysées and laid under the dome of the Invalides. Hugo, Berlioz, the old marshals and a crowd of a million watch in the snow. The Napoleonic legend is officially adopted by the Orleanist monarchy.",
            el: "Ανακτημένος από την Αγία Ελένη με αποστολή του πρίγκιπα ντε Ζουανβίλ, το φέρετρο του Ναπολέοντος μεταφέρεται στις 15 Δεκεμβρίου σε κολοσσιαία νεκρώσιμη άμαξα κατά μήκος των Champs-Élysées και τοποθετείται κάτω από τον τρούλο των Ανάπηρων. Ο Ουγκώ, ο Μπερλιόζ, οι παλιοί στρατάρχες και πλήθος ενός εκατομμυρίου παρακολουθούν στο χιόνι. Ο ναπολεόντειος θρύλος υιοθετείται επίσημα από την ορλεανιστική μοναρχία."
          },
          extendedDescription: {
            en: "By 1840 the romantic generation — Hugo, Balzac, Stendhal, Lamartine, Vigny, Michelet — had made the Napoleon of Saint Helena's memoirs into the great myth of the century. The same year Louis-Napoleon Bonaparte, the emperor's nephew, landed at Boulogne with a few dozen supporters, hoping to overthrow Louis-Philippe. He failed and was sentenced to perpetual imprisonment at Ham. Eight years later he would be president of France.",
            el: "Μέχρι το 1840 η ρομαντική γενιά — Ουγκώ, Μπαλζάκ, Σταντάλ, Λαμαρτίν, Βινί, Μισλέ — είχε κάνει τον Ναπολέοντα των απομνημονευμάτων της Αγίας Ελένης τον μεγάλο μύθο του αιώνα. Την ίδια χρονιά ο Λουδοβίκος-Ναπολέων Βοναπάρτης, ο ανιψιός του αυτοκράτορα, αποβιβάστηκε στη Βουλώνη με μερικές δεκάδες οπαδούς, ελπίζοντας να ανατρέψει τον Λουδοβίκο-Φίλιππο. Απέτυχε και καταδικάστηκε σε ισόβια κάθειρξη στο Αμ. Οκτώ χρόνια αργότερα θα ήταν πρόεδρος της Γαλλίας."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1848,
      month: 2,
      era: {
        en: "February Revolution",
        el: "Επανάσταση του Φεβρουαρίου"
      },
      events: [
        {
          title: {
            en: "The barricades overthrow Louis-Philippe",
            el: "Τα οδοφράγματα ανατρέπουν τον Λουδοβίκο-Φίλιππο"
          },
          description: {
            en: "After the prohibition of a reform banquet on 22 February and a fusillade on the boulevard des Capucines on the 23rd that kills more than fifty, the city rises. On 24 February Louis-Philippe abdicates and flees to England disguised as 'Mr Smith'. Lamartine, on the steps of the Hôtel de Ville, proclaims the Second Republic before the red flag of the workers and the tricolore.",
            el: "Μετά την απαγόρευση μεταρρυθμιστικού συμποσίου στις 22 Φεβρουαρίου και την ομοβροντία στη λεωφόρο des Capucines στις 23 που σκοτώνει πάνω από πενήντα, η πόλη ξεσηκώνεται. Στις 24 Φεβρουαρίου ο Λουδοβίκος-Φίλιππος παραιτείται και διαφεύγει στην Αγγλία μεταμφιεσμένος ως «Mr Smith». Ο Λαμαρτίν, στα σκαλιά του Hôtel de Ville, ανακηρύσσει τη Δεύτερη Δημοκρατία ενώπιον της κόκκινης σημαίας των εργατών και της τρίχρωμης."
          },
          extendedDescription: {
            en: "Within weeks universal manhood suffrage was decreed — nine million voters, where four years earlier there had been a quarter million — slavery in the colonies abolished a second time (this time for good, on the initiative of Victor Schoelcher), and 'national workshops' opened to provide employment for the Parisian unemployed. The 1848 revolution in Paris triggered the springtime of peoples across the continent — in Vienna, Berlin, Milan, Venice, Budapest, Rome.",
            el: "Σε εβδομάδες ψηφίστηκε καθολική ανδρική ψηφοφορία — εννέα εκατομμύρια ψηφοφόροι, εκεί που τέσσερα χρόνια νωρίτερα ήταν διακόσιες πενήντα χιλιάδες — η δουλεία στις αποικίες καταργήθηκε δεύτερη φορά (αυτή τη φορά οριστικά, με πρωτοβουλία του Βίκτωρ Σελσέρ) και άνοιξαν «εθνικά εργαστήρια» για την απασχόληση των ανέργων του Παρισιού. Η επανάσταση του 1848 στο Παρίσι πυροδότησε την άνοιξη των λαών σε όλη την ήπειρο — στη Βιέννη, το Βερολίνο, το Μιλάνο, τη Βενετία, τη Βουδαπέστη, τη Ρώμη."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1848,
      month: 6,
      era: {
        en: "June Days",
        el: "Ημέρες του Ιουνίου"
      },
      events: [
        {
          title: {
            en: "Cavaignac crushes the workers' insurrection",
            el: "Ο Καβενιάκ συντρίβει την εξέγερση των εργατών"
          },
          description: {
            en: "On 22 June the closure of the national workshops drives the workers of eastern Paris to the barricades. General Cavaignac, given dictatorial powers, smashes the rising in four days of fighting. Some five thousand insurgents are killed and four thousand transported. The Republic of the bourgeoisie has fought the Republic of the workers and won.",
            el: "Στις 22 Ιουνίου το κλείσιμο των εθνικών εργαστηρίων ωθεί τους εργάτες του ανατολικού Παρισιού στα οδοφράγματα. Ο στρατηγός Καβενιάκ, με δικτατορικές εξουσίες, συντρίβει την εξέγερση σε τέσσερις ημέρες μαχών. Περίπου πέντε χιλιάδες εξεγερμένοι σκοτώνονται και τέσσερις χιλιάδες απελαύνονται. Η Δημοκρατία της αστικής τάξης πολέμησε τη Δημοκρατία των εργατών και νίκησε."
          },
          extendedDescription: {
            en: "The June Days haunted the political imagination of the nineteenth century. Tocqueville called them 'the greatest and the strangest insurrection in our history… a struggle of class against class'. Marx, watching from Cologne, drew from them the proletarian revolution of his Communist Manifesto. The new constitution of November installed a single-chamber assembly and a directly elected president for a four-year non-renewable term.",
            el: "Οι Ημέρες του Ιουνίου στοίχειωσαν την πολιτική φαντασία του δέκατου ένατου αιώνα. Ο Τοκβίλ τις αποκάλεσε «τη μεγαλύτερη και πιο παράξενη εξέγερση στην ιστορία μας… αγώνα τάξης κατά τάξης». Ο Μαρξ, παρακολουθώντας από την Κολωνία, άντλησε από αυτές την προλεταριακή επανάσταση του Κομμουνιστικού Μανιφέστου του. Το νέο σύνταγμα του Νοεμβρίου εγκατέστησε μονοθάλαμη συνέλευση και άμεσα εκλεγμένο πρόεδρο για τετραετή μη ανανεώσιμη θητεία."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1848,
      month: 12,
      era: {
        en: "Election of Louis-Napoleon",
        el: "Εκλογή του Λουδοβίκου-Ναπολέοντος"
      },
      events: [
        {
          title: {
            en: "The nephew of the emperor wins the presidency",
            el: "Ο ανιψιός του αυτοκράτορα κερδίζει την προεδρία"
          },
          description: {
            en: "On 10 December, the first direct presidential election in French history gives Louis-Napoleon Bonaparte 5,434,000 votes against Cavaignac's 1,448,000. He owes his victory to the name, to the peasants' Bonapartism, and to the readers of his pamphlet on the extinction of pauperism. He swears to the Republic on 20 December.",
            el: "Στις 10 Δεκεμβρίου, η πρώτη άμεση προεδρική εκλογή στη γαλλική ιστορία δίνει στον Λουδοβίκο-Ναπολέοντα Βοναπάρτη 5.434.000 ψήφους κατά των 1.448.000 του Καβενιάκ. Οφείλει τη νίκη του στο όνομα, στον αγροτικό Βοναπαρτισμό και στους αναγνώστες του φυλλαδίου του για την εξάλειψη της φτώχειας. Ορκίζεται στη Δημοκρατία στις 20 Δεκεμβρίου."
          },
          extendedDescription: {
            en: "Louis-Napoleon had twice tried to seize power by coup, in 1836 and 1840, and had escaped from prison at Ham in 1846 disguised as a workman. The Second Republic born in February 1848 had introduced universal male suffrage and abolished slavery in the colonies, but in the June Days General Cavaignac had crushed a workers' rising in Paris, costing him the votes of the left. The new constitution limited the president to a single four-year term — a rule Louis-Napoleon would soon overturn.",
            el: "Ο Λουδοβίκος Ναπολέων είχε προσπαθήσει δύο φορές να καταλάβει την εξουσία με πραξικόπημα, το 1836 και το 1840, και είχε δραπετεύσει από τη φυλακή του Αμ το 1846 μεταμφιεσμένος σε εργάτη. Η Δεύτερη Δημοκρατία που γεννήθηκε τον Φεβρουάριο του 1848 είχε καθιερώσει την καθολική ανδρική ψηφοφορία και καταργήσει τη δουλεία στις αποικίες, αλλά στις Ημέρες του Ιουνίου ο στρατηγός Καβενιάκ είχε συντρίψει μια εργατική εξέγερση στο Παρίσι, χάνοντας έτσι τις ψήφους της αριστεράς. Το νέο σύνταγμα περιόριζε τον πρόεδρο σε μία μόνο τετραετή θητεία — κανόνα που ο Λουδοβίκος Ναπολέων σύντομα θα ανέτρεπε."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1851,
      month: 12,
      era: {
        en: "Coup of 2 December",
        el: "Πραξικόπημα της 2ας Δεκεμβρίου"
      },
      events: [
        {
          title: {
            en: "Louis-Napoleon dissolves the assembly",
            el: "Ο Λουδοβίκος-Ναπολέων διαλύει τη συνέλευση"
          },
          description: {
            en: "Forbidden by the constitution to stand for re-election, the president strikes. On the night of 1-2 December — the anniversary of the coronation and of Austerlitz — his half-brother Morny seizes the printing-presses, the assembly is dissolved, two hundred deputies arrested, and the rump of the republican left massacred on the boulevard Montmartre on the 4th. A plebiscite of 20 December ratifies the coup.",
            el: "Απαγορευμένος από το σύνταγμα να επανεκλεγεί, ο πρόεδρος χτυπά. Τη νύχτα της 1-2 Δεκεμβρίου — επέτειο της στέψης και του Αούστερλιτς — ο ετεροθαλής αδελφός του Μορνύ καταλαμβάνει τα τυπογραφεία, η συνέλευση διαλύεται, διακόσιοι βουλευτές συλλαμβάνονται, και τα υπολείμματα της δημοκρατικής αριστεράς κατασφάζονται στη λεωφόρο Μομαρτρ στις 4. Δημοψήφισμα της 20ής Δεκεμβρίου επικυρώνει το πραξικόπημα."
          },
          extendedDescription: {
            en: "Hugo, who had tried to organise resistance, fled to Brussels and then to Jersey and Guernsey, where he would spend nineteen years in exile and write Les Châtiments and Les Misérables. 'Because they have been great,' he wrote of the coup-makers, 'you are made small.' A year later the prince-president would become Napoleon III, Emperor of the French.",
            el: "Ο Ουγκώ, που είχε προσπαθήσει να οργανώσει αντίσταση, διέφυγε στις Βρυξέλλες και μετά στο Τζέρσεϊ και το Γκέρνσεϊ, όπου θα περνούσε δεκαεννιά χρόνια εξορίας και θα έγραφε τα Châtiments και τους Αθλίους. «Επειδή υπήρξαν μεγάλοι», έγραψε για τους πραξικοπηματίες, «γίνεστε μικροί». Έναν χρόνο αργότερα ο πρίγκιπας-πρόεδρος θα γινόταν Ναπολέων Γ΄, Αυτοκράτορας των Γάλλων."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1852,
      month: 12,
      era: {
        en: "Second Empire",
        el: "Δεύτερη Αυτοκρατορία"
      },
      events: [
        {
          title: {
            en: "The Empire is restored",
            el: "Η Αυτοκρατορία αποκαθίσταται"
          },
          description: {
            en: "A second plebiscite restores the imperial dignity. On 2 December — the third anniversary — Louis-Napoleon is proclaimed Napoleon III, Emperor of the French. The next month he marries the Spanish countess Eugénie de Montijo at Notre-Dame. The Second Empire — authoritarian then liberal, prosperous, expansive — will last eighteen years.",
            el: "Δεύτερο δημοψήφισμα αποκαθιστά την αυτοκρατορική αξιοπρέπεια. Στις 2 Δεκεμβρίου — την τρίτη επέτειο — ο Λουδοβίκος-Ναπολέων ανακηρύσσεται Ναπολέων Γ΄, Αυτοκράτορας των Γάλλων. Τον επόμενο μήνα παντρεύεται την Ισπανίδα κόμισσα Ευγενία ντε Μοντίχο στη Νοτρ-Νταμ. Η Δεύτερη Αυτοκρατορία — απολυταρχική και μετά φιλελεύθερη, εύπορη, επεκτατική — θα διαρκέσει δεκαοκτώ χρόνια."
          },
          extendedDescription: {
            en: "The restoration followed Louis-Napoleon's coup of 2 December 1851, when he dissolved the Assembly and crushed resistance in Paris and the provinces; Victor Hugo went into exile in Jersey and Guernsey and denounced him as 'Napoleon the Little'. Under the Second Empire, Baron Haussmann rebuilt Paris with broad boulevards, parks and sewers, railways spread across France, and department stores such as the Bon Marché transformed shopping.",
            el: "Η παλινόρθωση ακολούθησε το πραξικόπημα του Λουδοβίκου Ναπολέοντα στις 2 Δεκεμβρίου 1851, όταν διέλυσε τη Συνέλευση και συνέτριψε την αντίσταση στο Παρίσι και στις επαρχίες· ο Βίκτωρ Ουγκώ έφυγε εξόριστος στο Τζέρσεϊ και στο Γκέρνζι και τον κατήγγειλε ως «Ναπολέοντα τον Μικρό». Επί Δεύτερης Αυτοκρατορίας, ο βαρόνος Οσμάν ξαναέχτισε το Παρίσι με φαρδιές λεωφόρους, πάρκα και αποχετεύσεις, οι σιδηρόδρομοι απλώθηκαν σε όλη τη Γαλλία, και πολυκαταστήματα όπως το Bon Marché μεταμόρφωσαν τις αγορές."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1853,
      era: {
        en: "Haussmann's Paris",
        el: "Το Παρίσι του Οσμάν"
      },
      events: [
        {
          title: {
            en: "Haussmann begins the rebuilding of Paris",
            el: "Ο Οσμάν αρχίζει την ανοικοδόμηση του Παρισιού"
          },
          description: {
            en: "Napoleon III appoints Baron Georges-Eugène Haussmann prefect of the Seine. For seventeen years he will gut and rebuild Paris: the great boulevards driven through the old quarters, the water and sewer systems, the parks of Buttes-Chaumont, Monceau, the Bois de Boulogne, the new opera, the markets of Les Halles, the standardised cream-coloured apartment blocks of six storeys with their iron balconies.",
            el: "Ο Ναπολέων Γ΄ διορίζει τον βαρόνο Ζωρζ-Ευγένιο Οσμάν νομάρχη του Σηκουάνα. Για δεκαεπτά χρόνια θα ξεσπαστεί και θα ξαναχτίσει το Παρίσι: οι μεγάλες λεωφόροι σπρωγμένες μέσα από τις παλιές συνοικίες, το σύστημα ύδρευσης και αποχέτευσης, τα πάρκα Buttes-Chaumont, Monceau, το Bois de Boulogne, η νέα όπερα, οι αγορές Les Halles, οι τυποποιημένες κρεμ πολυκατοικίες έξι ορόφων με τα σιδερένια μπαλκόνια τους."
          },
          extendedDescription: {
            en: "The wider boulevards served strategic purposes — easier to move troops, harder to barricade — but also turned Paris into the showcase capital of Europe. Half a million people were displaced; the old central neighbourhoods of the popular classes disappeared. The city of the Impressionists, of Manet and Baudelaire, of the cafés-concerts and the department stores — the city Haussmann left — is in essential outline the Paris of today.",
            el: "Οι ευρύτερες λεωφόροι εξυπηρετούσαν στρατηγικούς σκοπούς — ευκολότερη μετακίνηση στρατευμάτων, δυσκολότερη οδοφραγμάτωση — αλλά και μετέτρεψαν το Παρίσι σε πρωτεύουσα-βιτρίνα της Ευρώπης. Μισό εκατομμύριο άνθρωποι εκτοπίστηκαν· οι παλιές κεντρικές γειτονιές των λαϊκών στρωμάτων εξαφανίστηκαν. Η πόλη των Ιμπρεσιονιστών, του Μανέ και του Μπωντλέρ, των cafés-concerts και των πολυκαταστημάτων — η πόλη που άφησε ο Οσμάν — είναι στις βασικές της γραμμές το σημερινό Παρίσι."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1856,
      month: 3,
      era: {
        en: "Crimean War",
        el: "Πόλεμος της Κριμαίας"
      },
      events: [
        {
          title: {
            en: "France leads the Concert of Europe at Paris",
            el: "Η Γαλλία ηγείται της Συναυλίας της Ευρώπης στο Παρίσι"
          },
          description: {
            en: "The Treaty of Paris of 30 March ends the Crimean War (1853-1856), in which the French army of MacMahon and Bosquet — alongside the British and the Sardinians — took the Malakoff and forced Russia to terms. The conference of plenipotentiaries meets at the Quai d'Orsay; Napoleon III is the arbiter of Europe.",
            el: "Η Συνθήκη του Παρισιού της 30ής Μαρτίου τερματίζει τον Πόλεμο της Κριμαίας (1853-1856), όπου ο γαλλικός στρατός του Μακ Μαόν και του Μποσκέ — μαζί με τους Βρετανούς και τους Σαρδηνούς — κατέλαβε το Μαλακόφ και ανάγκασε τη Ρωσία σε όρους. Η συνδιάσκεψη των πληρεξουσίων συνέρχεται στο Quai d'Orsay· ο Ναπολέων Γ΄ είναι ο διαιτητής της Ευρώπης."
          },
          extendedDescription: {
            en: "The war had grown out of a quarrel between France and Russia over the protection of Christians and the Holy Places in the Ottoman Empire. When MacMahon's troops stormed the Malakoff fortress at Sevastopol in September 1855, he reportedly declared, 'Here I am, here I stay.' To keep Greece from joining Russia, British and French troops occupied Piraeus from 1854 to 1857. The Congress of Paris neutralised the Black Sea, and the Emperor's son and heir was born while it was sitting.",
            el: "Ο πόλεμος προήλθε από μια διαμάχη ανάμεσα στη Γαλλία και τη Ρωσία για την προστασία των χριστιανών και των Αγίων Τόπων στην Οθωμανική Αυτοκρατορία. Όταν τα στρατεύματα του ΜακΜαόν κατέλαβαν με έφοδο το οχυρό Μαλακόφ στη Σεβαστούπολη τον Σεπτέμβριο του 1855, λέγεται ότι δήλωσε: «Εδώ είμαι, εδώ μένω». Για να αποτρέψουν την Ελλάδα από το να ταχθεί με τη Ρωσία, βρετανικά και γαλλικά στρατεύματα κατέλαβαν τον Πειραιά από το 1854 ως το 1857. Το Συνέδριο του Παρισιού ουδετεροποίησε τη Μαύρη Θάλασσα, και ο γιος και διάδοχος του αυτοκράτορα γεννήθηκε ενώ αυτό συνεδρίαζε."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1859,
      month: 6,
      era: {
        en: "Italian War",
        el: "Ιταλικός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Magenta and Solferino",
            el: "Μαγκέντα και Σολφερίνο"
          },
          description: {
            en: "Allied since the Plombières meeting with Cavour, France marches into northern Italy against Austria. At Magenta (4 June) and the bloody Solferino (24 June), the French and Sardinians defeat Franz Joseph. Horrified by the carnage of Solferino, the Swiss businessman Henri Dunant will found the Red Cross. The Armistice of Villafranca gives Lombardy to Piedmont.",
            el: "Συμμαχημένη μετά τη συνάντηση του Πλομπιέρ με τον Καβούρ, η Γαλλία βαδίζει στη βόρεια Ιταλία κατά της Αυστρίας. Στη Μαγκέντα (4 Ιουνίου) και στο αιματηρό Σολφερίνο (24 Ιουνίου), Γάλλοι και Σαρδήνιοι νικούν τον Φραγκίσκο Ιωσήφ. Αναστατωμένος από τη σφαγή του Σολφερίνο, ο Ελβετός επιχειρηματίας Ανρί Ντινάν θα ιδρύσει τον Ερυθρό Σταυρό. Η Ανακωχή της Βιλαφράνκα δίνει τη Λομβαρδία στο Πιεμόντε."
          },
          extendedDescription: {
            en: "By the Treaty of Turin of March 1860, Piedmont in turn ceded Nice and the Duchy of Savoy to France in compensation. Garibaldi's red shirts and the plebiscites of central and southern Italy completed the unification within two years. The free-trade treaty of January 1860 with Cobden's Britain — designed to bind the two liberal empires together — opened France to British industry and dismantled the protectionist tariffs of the previous half-century.",
            el: "Με τη Συνθήκη του Τορίνο του Μαρτίου 1860, το Πιεμόντε με τη σειρά του παραχώρησε τη Νίκαια και το Δουκάτο της Σαβοΐας στη Γαλλία ως αντάλλαγμα. Τα ερυθρά πουκάμισα του Γαριβάλδη και τα δημοψηφίσματα κεντρικής και νότιας Ιταλίας ολοκλήρωσαν την ενοποίηση σε δύο χρόνια. Η συνθήκη ελεύθερου εμπορίου του Ιανουαρίου 1860 με τη Βρετανία του Κόμπντεν — σχεδιασμένη να συνδέσει τις δύο φιλελεύθερες αυτοκρατορίες — άνοιξε τη Γαλλία στη βρετανική βιομηχανία και αποσυναρμολόγησε τους προστατευτικούς δασμούς του προηγούμενου ημίσεος αιώνα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1867,
      month: 6,
      era: {
        en: "Mexican Disaster",
        el: "Μεξικανική Καταστροφή"
      },
      events: [
        {
          title: {
            en: "Maximilian shot at Querétaro; Universal Exposition in Paris",
            el: "Ο Μαξιμιλιανός τυφεκίζεται στο Κερετάρο· Παγκόσμια Έκθεση στο Παρίσι"
          },
          description: {
            en: "On 19 June, the Austrian archduke Maximilian — installed by Napoleon III as emperor of Mexico — is shot by a firing-squad of Benito Juárez's republicans. Manet paints the execution. In Paris that same summer, the second Universal Exposition draws fifteen million visitors. The Empire is at its dazzling apogee and on the edge of disgrace.",
            el: "Στις 19 Ιουνίου, ο Αυστριακός αρχιδούκας Μαξιμιλιανός — εγκατεστημένος από τον Ναπολέοντα Γ΄ ως αυτοκράτορας του Μεξικού — τυφεκίζεται από εκτελεστικό απόσπασμα των ρεπουμπλικανών του Μπενίτο Χουάρες. Ο Μανέ ζωγραφίζει την εκτέλεση. Στο Παρίσι το ίδιο καλοκαίρι, η δεύτερη Παγκόσμια Έκθεση προσελκύει δεκαπέντε εκατομμύρια επισκέπτες. Η Αυτοκρατορία είναι στο εκθαμβωτικό απόγειό της — και στο χείλος της ντροπής."
          },
          extendedDescription: {
            en: "French troops had landed in Mexico in 1861–62 over unpaid debts and suffered a famous defeat at Puebla on 5 May 1862 — still celebrated as Cinco de Mayo — before taking Mexico City. Once the American Civil War ended, pressure from the United States and the rising threat of Prussia forced Napoleon III to withdraw his army, abandoning Maximilian. At the Exposition, Japan exhibited for the first time, sparking the craze for Japanese art that would influence the Impressionists.",
            el: "Γαλλικά στρατεύματα είχαν αποβιβαστεί στο Μεξικό το 1861–62 λόγω απλήρωτων χρεών και υπέστησαν μια διάσημη ήττα στην Πουέμπλα στις 5 Μαΐου 1862 — που γιορτάζεται ακόμη ως Σίνκο ντε Μάγιο — πριν καταλάβουν την Πόλη του Μεξικού. Μόλις τελείωσε ο Αμερικανικός Εμφύλιος, η πίεση των Ηνωμένων Πολιτειών και η αυξανόμενη απειλή της Πρωσίας ανάγκασαν τον Ναπολέοντα Γ΄ να αποσύρει τον στρατό του, εγκαταλείποντας τον Μαξιμιλιανό. Στην Έκθεση, η Ιαπωνία συμμετείχε για πρώτη φορά, πυροδοτώντας τη μανία για την ιαπωνική τέχνη που θα επηρέαζε τους ιμπρεσιονιστές."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1870,
      month: 7,
      era: {
        en: "Franco-Prussian War",
        el: "Γαλλοπρωσικός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Bismarck's Ems despatch and the declaration of war",
            el: "Το τηλεγράφημα του Έμς του Μπίσμαρκ και η κήρυξη του πολέμου"
          },
          description: {
            en: "Provoked by the Hohenzollern candidature to the Spanish throne and the inflammatory edited despatch from the spa of Ems, the French chamber votes war on Prussia on 19 July to roars of À Berlin! In fact the Prussian general staff under Moltke is ready; the French army of Bazaine and MacMahon is not.",
            el: "Προκαλούμενη από την υποψηφιότητα των Χοεντσόλερν στον ισπανικό θρόνο και το εμπρηστικά επεξεργασμένο τηλεγράφημα από το λουτρόπολη του Έμς, η γαλλική βουλή ψηφίζει πόλεμο στην Πρωσία στις 19 Ιουλίου ανάμεσα σε ζητωκραυγές À Berlin! Στην πραγματικότητα το πρωσικό επιτελείο υπό τον Μόλτκε είναι έτοιμο· ο γαλλικός στρατός του Μπαζέν και του Μακ Μαόν δεν είναι."
          },
          extendedDescription: {
            en: "Bismarck shortened the king of Prussia's report of his meeting with the French ambassador so that it read like an insult — a 'red rag to the Gallic bull'. The premier Émile Ollivier declared that he accepted the war 'with a light heart'. Within six weeks one French army was besieged in Metz and another surrendered at Sedan with the emperor himself on 2 September; on 4 September Paris proclaimed the Republic, and in January 1871 the German Empire was proclaimed in the Hall of Mirrors at Versailles.",
            el: "Ο Βίσμαρκ συντόμευσε την αναφορά του βασιλιά της Πρωσίας για τη συνάντησή του με τον Γάλλο πρέσβη ώστε να διαβάζεται σαν προσβολή — ένα «κόκκινο πανί για τον γαλατικό ταύρο». Ο πρωθυπουργός Εμίλ Ολιβιέ δήλωσε ότι αποδεχόταν τον πόλεμο «με ελαφριά καρδιά». Μέσα σε έξι εβδομάδες ένας γαλλικός στρατός πολιορκούνταν στο Μετς και ένας άλλος παραδόθηκε στο Σεντάν μαζί με τον ίδιο τον αυτοκράτορα στις 2 Σεπτεμβρίου· στις 4 Σεπτεμβρίου το Παρίσι ανακήρυξε τη Δημοκρατία, και τον Ιανουάριο του 1871 η Γερμανική Αυτοκρατορία ανακηρύχθηκε στην Αίθουσα των Κατόπτρων των Βερσαλλιών."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1870,
      month: 9,
      era: {
        en: "Sedan and the Republic",
        el: "Σεντάν και η Δημοκρατία"
      },
      events: [
        {
          title: {
            en: "Napoleon III surrenders at Sedan; the Empire falls",
            el: "Ο Ναπολέων Γ΄ παραδίδεται στο Σεντάν· η Αυτοκρατορία πέφτει"
          },
          description: {
            en: "On 2 September, encircled at Sedan with eighty thousand men, Napoleon III surrenders his sword to William I of Prussia. The news reaches Paris on the 3rd. On 4 September a crowd invades the Corps législatif; Gambetta proclaims the Republic at the Hôtel de Ville. The Empress Eugénie flees to England in a dentist's carriage; the Empire is over.",
            el: "Στις 2 Σεπτεμβρίου, περικυκλωμένος στο Σεντάν με ογδόντα χιλιάδες άνδρες, ο Ναπολέων Γ΄ παραδίδει το ξίφος του στον Γουλιέλμο Α΄ της Πρωσίας. Η είδηση φτάνει στο Παρίσι στις 3. Στις 4 Σεπτεμβρίου πλήθος εισβάλλει στο Corps législatif· ο Γκαμπετά ανακηρύσσει τη Δημοκρατία στο Hôtel de Ville. Η αυτοκράτειρα Ευγενία διαφεύγει στην Αγγλία σε άμαξα οδοντίατρου· η Αυτοκρατορία τελείωσε."
          },
          extendedDescription: {
            en: "By 19 September Paris was under siege. The 'government of national defence' under Trochu and Favre held the capital while Gambetta — having escaped Paris by balloon — raised improvised armies in the provinces. The city ate its zoo and most of its horses through a winter of bombardment before surrendering on 28 January 1871. The provincial armies were defeated; Bourbaki's Army of the East was interned in Switzerland.",
            el: "Μέχρι τις 19 Σεπτεμβρίου το Παρίσι ήταν υπό πολιορκία. Η «κυβέρνηση εθνικής άμυνας» υπό τον Τροσύ και τον Φαβρ κράτησε την πρωτεύουσα ενώ ο Γκαμπετά — έχοντας διαφύγει από το Παρίσι με αερόστατο — συγκρότησε αυτοσχέδιους στρατούς στις επαρχίες. Η πόλη έφαγε τον ζωολογικό κήπο και τα περισσότερα άλογά της μέσα σε χειμώνα βομβαρδισμού πριν παραδοθεί στις 28 Ιανουαρίου 1871. Οι επαρχιακοί στρατοί ηττήθηκαν· ο Στρατός της Ανατολής του Μπουρμπακί κρατήθηκε ως κρατούμενος στην Ελβετία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1871,
      month: 5,
      era: {
        en: "Paris Commune",
        el: "Κομμούνα του Παρισιού"
      },
      events: [
        {
          title: {
            en: "The Bloody Week",
            el: "Η Ματωμένη Εβδομάδα"
          },
          description: {
            en: "Refusing to accept the conservative National Assembly elected at Bordeaux in February and the humiliating peace it ratified at Frankfurt — losing Alsace and most of Lorraine, paying five billion francs — the Parisians proclaim the Commune of 1871 on 18 March. For seventy-two days the city governs itself. From 21 to 28 May the Versailles army of Thiers and MacMahon retakes it street by street.",
            el: "Αρνούμενοι να αποδεχθούν τη συντηρητική Εθνοσυνέλευση που εκλέχθηκε στο Μπορντό τον Φεβρουάριο και την ταπεινωτική ειρήνη που επικύρωσε στη Φραγκφούρτη — χάνοντας την Αλσατία και το μεγαλύτερο μέρος της Λωραίνης, πληρώνοντας πέντε δισεκατομμύρια φράγκα — οι Παριζιάνοι ανακηρύσσουν την Κομμούνα του 1871 στις 18 Μαρτίου. Επί εβδομήντα δύο ημέρες η πόλη αυτοδιοικείται. Από τις 21 ως τις 28 Μαΐου ο στρατός των Βερσαλλιών του Θιερ και του Μακ Μαόν την ανακαταλαμβάνει δρόμο προς δρόμο."
          },
          extendedDescription: {
            en: "Some twenty to thirty thousand Communards were killed in the fighting and the summary executions of the Mur des Fédérés in Père Lachaise; another forty thousand were tried and seven and a half thousand transported to New Caledonia. The Tuileries palace was burned; the Vendôme column, pulled down at the urging of the painter Courbet, was rebuilt at his expense. The Commune entered socialist mythology — Marx wrote The Civil War in France within weeks — and ten thousand bullet-marks remained on the walls of Paris.",
            el: "Είκοσι με τριάντα χιλιάδες Κομμουνάροι σκοτώθηκαν στις μάχες και τις συνοπτικές εκτελέσεις του Mur des Fédérés στο Père Lachaise· άλλοι σαράντα χιλιάδες δικάστηκαν και επτάμισι χιλιάδες απεστάλησαν στη Νέα Καληδονία. Το ανάκτορο των Τυιλερί κάηκε· η στήλη της Vendôme, που γκρεμίστηκε με την προτροπή του ζωγράφου Κουρμπέ, ξαναχτίστηκε με δικά του έξοδα. Η Κομμούνα μπήκε στη σοσιαλιστική μυθολογία — ο Μαρξ έγραψε τον Εμφύλιο Πόλεμο στη Γαλλία μέσα σε εβδομάδες — και δέκα χιλιάδες σημάδια από σφαίρες παρέμειναν στους τοίχους του Παρισιού."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1875,
      era: {
        en: "Constitutional Laws",
        el: "Συνταγματικοί Νόμοι"
      },
      events: [
        {
          title: {
            en: "The Wallon amendment establishes the Republic",
            el: "Η τροπολογία Βαλόν εγκαθιδρύει τη Δημοκρατία"
          },
          description: {
            en: "The royalist majority of the Bordeaux assembly cannot agree on a king — the legitimist comte de Chambord will not abandon the white flag — and on 30 January the amendment of the moderate Wallon passes by one vote: 'the President of the Republic is elected by an absolute majority of the Senate and the Chamber of Deputies'. The Third Republic is, almost by accident, a republic.",
            el: "Η βασιλόφρων πλειοψηφία της Συνέλευσης του Μπορντό δεν μπορεί να συμφωνήσει σε βασιλιά — ο legitimist κόμης ντε Σαμπόρ δεν εγκαταλείπει τη λευκή σημαία — και στις 30 Ιανουαρίου η τροπολογία του μετριοπαθούς Βαλόν περνά με μία ψήφο: «ο Πρόεδρος της Δημοκρατίας εκλέγεται με απόλυτη πλειοψηφία της Γερουσίας και της Βουλής των Αντιπροσώπων». Η Τρίτη Δημοκρατία είναι, σχεδόν τυχαία, δημοκρατία."
          },
          extendedDescription: {
            en: "The Third Republic — a regime no party had asked for — would prove the longest French regime since the Ancien Régime, surviving until the German invasion of 1940. The crisis of 16 May 1877, when President MacMahon dismissed the republican Jules Simon and was defeated in the snap elections that followed, established the convention that the cabinet answers to the chamber and not to the president. France became a parliamentary republic in fact.",
            el: "Η Τρίτη Δημοκρατία — καθεστώς που κανένα κόμμα δεν είχε ζητήσει — θα αποδεικνυόταν το μακρόβιότερο γαλλικό καθεστώς από το Παλαιό Καθεστώς, επιβιώνοντας μέχρι τη γερμανική εισβολή του 1940. Η κρίση της 16ης Μαΐου 1877, όταν ο Πρόεδρος Μακ Μαόν απέλυσε τον δημοκρατικό Ζυλ Σιμόν και ηττήθηκε στις πρόωρες εκλογές που ακολούθησαν, εγκατέστησε τη σύμβαση ότι το υπουργικό συμβούλιο λογοδοτεί στη Βουλή και όχι στον πρόεδρο. Η Γαλλία έγινε στην πράξη κοινοβουλευτική δημοκρατία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1881,
      era: {
        en: "Ferry Laws",
        el: "Νόμοι Φερύ"
      },
      events: [
        {
          title: {
            en: "Free, compulsory, secular schooling",
            el: "Δωρεάν, υποχρεωτική, κοσμική εκπαίδευση"
          },
          description: {
            en: "Jules Ferry, twice prime minister of the new republican parliament, carries the laws that establish free public primary education (1881), make it compulsory and lay (1882), and remove the right to teach from the unauthorised religious congregations. The 'hussars of the Republic' — the schoolteachers in their black smocks — go out to make the peasants French.",
            el: "Ο Ζυλ Φερύ, δύο φορές πρωθυπουργός του νέου ρεπουμπλικανικού κοινοβουλίου, περνά τους νόμους που εγκαθιδρύουν δωρεάν δημόσια στοιχειώδη εκπαίδευση (1881), την καθιστούν υποχρεωτική και λαϊκή (1882) και αφαιρούν το δικαίωμα διδασκαλίας από τις μη εξουσιοδοτημένες θρησκευτικές αδελφότητες. Οι «ουσάροι της Δημοκρατίας» — οι δάσκαλοι με τις μαύρες ποδιές — βγαίνουν να κάνουν τους χωρικούς Γάλλους."
          },
          extendedDescription: {
            en: "Ferry was also the chief architect of the second French colonial empire — the protectorate over Tunisia in 1881, the conquest of Tonkin and the war with China in 1884-1885, and the encouragement of the Conquest of the Western Soudan. By 1914 France would rule eleven million square kilometres and fifty million colonial subjects, second only to Britain. The Republic that had refused empires at home built one of the largest abroad.",
            el: "Ο Φερύ ήταν και ο κύριος αρχιτέκτονας της δεύτερης γαλλικής αποικιακής αυτοκρατορίας — το προτεκτοράτο στην Τυνησία το 1881, η κατάκτηση του Τονκίν και ο πόλεμος με την Κίνα το 1884-1885, και η ενθάρρυνση της Κατάκτησης του Δυτικού Σουδάν. Μέχρι το 1914 η Γαλλία θα κυβερνούσε έντεκα εκατομμύρια τετραγωνικά χιλιόμετρα και πενήντα εκατομμύρια αποικιακούς υπηκόους, δεύτερη μόνο μετά τη Βρετανία. Η Δημοκρατία που είχε αρνηθεί αυτοκρατορίες στο εσωτερικό έχτισε μία από τις μεγαλύτερες στο εξωτερικό."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1889,
      month: 5,
      era: {
        en: "Centenary of the Revolution",
        el: "Επέτειος της Επανάστασης"
      },
      events: [
        {
          title: {
            en: "The Eiffel Tower opens at the Universal Exposition",
            el: "Ο Πύργος του Άιφελ ανοίγει στην Παγκόσμια Έκθεση"
          },
          description: {
            en: "On 6 May the great Exposition Universelle opens on the Champ de Mars to mark the centenary of the Estates General. Its centrepiece, Gustave Eiffel's three-hundred-metre iron tower — built in two years and condemned by Maupassant and Garnier — becomes overnight the symbol of the modern republic.",
            el: "Στις 6 Μαΐου η μεγάλη Παγκόσμια Έκθεση ανοίγει στο Champ de Mars για να σηματοδοτήσει την εκατονταετηρίδα των Γενικών Συνελεύσεων. Το κεντρικό της σημείο, ο τριακοσίων μέτρων σιδερένιος πύργος του Γκυστάβ Άιφελ — χτισμένος σε δύο χρόνια και καταδικασμένος από τον Μωπασάν και τον Γκαρνιέ — γίνεται από τη μια μέρα στην άλλη το σύμβολο της σύγχρονης δημοκρατίας."
          },
          extendedDescription: {
            en: "Leading artists and writers had signed a public protest in 1887 against the 'useless and monstrous' tower, which was meant to stand for only twenty years; its value as a radio mast saved it. At 300 metres it remained the tallest structure in the world until New York's Chrysler Building in 1930. The Exposition also displayed the Republic's colonial empire, including reconstructed 'native villages' in which people from the colonies were exhibited to visitors.",
            el: "Κορυφαίοι καλλιτέχνες και συγγραφείς είχαν υπογράψει το 1887 μια δημόσια διαμαρτυρία κατά του «άχρηστου και τερατώδους» πύργου, που προοριζόταν να σταθεί μόνο είκοσι χρόνια· η αξία του ως ραδιοφωνικής κεραίας τον έσωσε. Με ύψος 300 μέτρα, έμεινε η ψηλότερη κατασκευή του κόσμου ώσπου το Chrysler Building της Νέας Υόρκης τον ξεπέρασε το 1930. Η Έκθεση παρουσίαζε επίσης την αποικιακή αυτοκρατορία της Δημοκρατίας, με ανακατασκευασμένα «ιθαγενή χωριά» όπου άνθρωποι από τις αποικίες εκτίθεντο στους επισκέπτες."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tour_Eiffel_Wikimedia_Commons_(cropped).jpg?width=1024",
            alt: {
              en: "The Eiffel Tower in Paris",
              el: "Ο Πύργος του Άιφελ στο Παρίσι"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1894,
      month: 12,
      era: {
        en: "Dreyfus Affair",
        el: "Υπόθεση Ντρέιφους"
      },
      events: [
        {
          title: {
            en: "Captain Dreyfus convicted of treason",
            el: "Ο λοχαγός Ντρέιφους καταδικάζεται για προδοσία"
          },
          description: {
            en: "On 22 December a closed-door court martial finds Captain Alfred Dreyfus, a Jewish officer from Alsace, guilty of selling secrets to the Germans. The Affaire begins. On 5 January 1895 he is publicly degraded in the courtyard of the École militaire and shipped to Devil's Island in French Guiana.",
            el: "Στις 22 Δεκεμβρίου στρατοδικείο κεκλεισμένων των θυρών κρίνει τον λοχαγό Άλφρεντ Ντρέιφους, εβραίο αξιωματικό από την Αλσατία, ένοχο για πώληση μυστικών στους Γερμανούς. Η Υπόθεση αρχίζει. Στις 5 Ιανουαρίου 1895 υφίσταται δημόσιο εξευτελισμό στο προαύλιο της École militaire και στέλνεται στο Νησί του Διαβόλου στη Γαλλική Γουιάνα."
          },
          extendedDescription: {
            en: "The real spy was another officer, Major Esterhazy; when Colonel Picquart discovered this in 1896, the army covered it up and acquitted Esterhazy. In January 1898 Émile Zola's open letter 'J'accuse…!' in L'Aurore split France between Dreyfusards and anti-Dreyfusards, exposing deep currents of anti-Semitism. Dreyfus was pardoned in 1899 and fully rehabilitated in 1906. The journalist Theodor Herzl, who witnessed the degradation, later said the Affair helped convince him of the need for a Jewish state.",
            el: "Ο πραγματικός κατάσκοπος ήταν ένας άλλος αξιωματικός, ο ταγματάρχης Εστερχάζι· όταν ο συνταγματάρχης Πικάρ το ανακάλυψε το 1896, ο στρατός το συγκάλυψε και αθώωσε τον Εστερχάζι. Τον Ιανουάριο του 1898 η ανοιχτή επιστολή του Εμίλ Ζολά «Κατηγορώ…!» στην L'Aurore δίχασε τη Γαλλία σε ντρεϊφουσιστές και αντιντρεϊφουσιστές, αποκαλύπτοντας βαθιά ρεύματα αντισημιτισμού. Ο Ντρέιφους έλαβε χάρη το 1899 και αποκαταστάθηκε πλήρως το 1906. Ο δημοσιογράφος Τέοντορ Χερτσλ, που παρακολούθησε την καθαίρεση, είπε αργότερα ότι η Υπόθεση συνέβαλε να πειστεί για την ανάγκη ενός εβραϊκού κράτους."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1898,
      month: 1,
      era: {
        en: "J'accuse",
        el: "J'accuse"
      },
      events: [
        {
          title: {
            en: "Zola accuses the army",
            el: "Ο Ζολά κατηγορεί τον στρατό"
          },
          description: {
            en: "On 13 January the front page of L'Aurore carries Émile Zola's open letter to the President of the Republic — J'accuse — naming the officers and ministers who have covered up the Dreyfus forgery. Three hundred thousand copies sell. France splits down the middle: Dreyfusards against anti-Dreyfusards, intellectuals against army, republic against church.",
            el: "Στις 13 Ιανουαρίου η πρώτη σελίδα της L'Aurore φέρει την ανοιχτή επιστολή του Εμίλ Ζολά προς τον Πρόεδρο της Δημοκρατίας — J'accuse — που κατονομάζει τους αξιωματικούς και υπουργούς που έχουν συγκαλύψει την πλαστογραφία Ντρέιφους. Τριακόσιες χιλιάδες αντίτυπα πωλούνται. Η Γαλλία διχάζεται στα δύο: Ντρεϊφουσιστές κατά αντι-Ντρεϊφουσιστών, διανοούμενοι κατά στρατού, δημοκρατία κατά Εκκλησίας."
          },
          extendedDescription: {
            en: "The army's case unravelled over the next three years: the real traitor, Esterhazy, was identified; Colonel Henry confessed his forgeries and committed suicide; the radical government pardoned Dreyfus in 1899 and the Court of Cassation finally rehabilitated him in 1906. The Affair turned the Third Republic decisively to the left, broke the political power of the army and the Church, and produced the Combes ministry — and the law of separation.",
            el: "Η υπόθεση του στρατού ξεδιαλύθηκε τα επόμενα τρία χρόνια: ο πραγματικός προδότης, ο Εστεραζύ, αναγνωρίστηκε· ο συνταγματάρχης Ανρί ομολόγησε τις πλαστογραφίες του και αυτοκτόνησε· η ριζοσπαστική κυβέρνηση χάρισε τον Ντρέιφους το 1899 και το Ακυρωτικό τον αποκατέστησε οριστικά το 1906. Η Υπόθεση έστρεψε την Τρίτη Δημοκρατία αποφασιστικά προς τα αριστερά, έσπασε την πολιτική δύναμη του στρατού και της Εκκλησίας και παρήγαγε το υπουργείο Κομπ — και τον νόμο του χωρισμού."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1905,
      month: 12,
      era: {
        en: "Separation of Church and State",
        el: "Χωρισμός Εκκλησίας και Κράτους"
      },
      events: [
        {
          title: {
            en: "The law of 9 December ends the Concordat",
            el: "Ο νόμος της 9ης Δεκεμβρίου τερματίζει το Κονκορδάτο"
          },
          description: {
            en: "Pushed by Aristide Briand and the Bloc des Gauches, the law of 9 December 1905 abrogates the Napoleonic Concordat of 1801. The Republic 'recognises no cult, salaries none, subsidises none'. Catholic, Protestant, and Jewish institutions become private associations; ecclesiastical property is inventoried, in some places amid resistance.",
            el: "Σπρωγμένος από τον Αριστείδη Μπριάν και το Bloc des Gauches, ο νόμος της 9ης Δεκεμβρίου 1905 καταργεί το ναπολεόντειο Κονκορδάτο του 1801. Η Δημοκρατία «δεν αναγνωρίζει καμία λατρεία, δεν μισθοδοτεί καμία, δεν επιδοτεί καμία». Καθολικά, προτεσταντικά και εβραϊκά ιδρύματα γίνονται ιδιωτικές ενώσεις· η εκκλησιαστική περιουσία απογράφεται, σε ορισμένα μέρη μέσα από αντιστάσεις."
          },
          extendedDescription: {
            en: "Pius X condemned the law in the encyclical Vehementer Nos, but the regime of separation has remained — with the local exception of Alsace-Moselle, which was German in 1905 and kept the Concordat on its return to France in 1918. The principle of laïcité, the daughter of the Revolution, the Ferry laws, and the Dreyfus Affair, became one of the foundations of the French republican constitution.",
            el: "Ο Πίος Ι΄ καταδίκασε τον νόμο στην εγκύκλιο Vehementer Nos, αλλά το καθεστώς του χωρισμού παρέμεινε — με την τοπική εξαίρεση της Αλσατίας-Μοζέλα, που το 1905 ήταν γερμανική και κράτησε το Κονκορδάτο όταν επέστρεψε στη Γαλλία το 1918. Η αρχή της laïcité, θυγατέρα της Επανάστασης, των νόμων Φερύ και της Υπόθεσης Ντρέιφους, έγινε ένα από τα θεμέλια του γαλλικού δημοκρατικού συντάγματος."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1914,
      month: 7,
      era: {
        en: "Eve of War",
        el: "Παραμονή του Πολέμου"
      },
      events: [
        {
          title: {
            en: "Jaurès is assassinated at the Café du Croissant",
            el: "Ο Ζωρές δολοφονείται στο Café du Croissant"
          },
          description: {
            en: "On the evening of 31 July, three days after Austria's declaration of war on Serbia, the socialist leader Jean Jaurès — the great voice against the war — is shot dead at the Café du Croissant in Paris by the nationalist Raoul Villain. The last European resistance to the conflict dies with him. The next day France orders general mobilisation.",
            el: "Το απόγευμα της 31ης Ιουλίου, τρεις ημέρες μετά την κήρυξη πολέμου της Αυστρίας στη Σερβία, ο σοσιαλιστής ηγέτης Ζαν Ζωρές — η μεγάλη φωνή κατά του πολέμου — πυροβολείται θανάσιμα στο Café du Croissant στο Παρίσι από τον εθνικιστή Ραούλ Βιλάν. Η τελευταία ευρωπαϊκή αντίσταση στη σύγκρουση πεθαίνει μαζί του. Την επομένη η Γαλλία διατάζει γενική επιστράτευση."
          },
          extendedDescription: {
            en: "Jaurès, founder of the newspaper L'Humanité and leader of the unified Socialist party, had spent his last days trying to rally European socialists for a general strike against war. In 1919 a jury acquitted his assassin, and Jaurès' widow was ordered to pay the costs of the trial — a verdict that caused outrage on the left. His remains were moved to the Panthéon in 1924; Villain was killed in Ibiza in 1936, early in the Spanish Civil War.",
            el: "Ο Ζορές, ιδρυτής της εφημερίδας L'Humanité και ηγέτης του ενιαίου Σοσιαλιστικού κόμματος, είχε περάσει τις τελευταίες του μέρες προσπαθώντας να συσπειρώσει τους Ευρωπαίους σοσιαλιστές για μια γενική απεργία κατά του πολέμου. Το 1919 ένα σώμα ενόρκων αθώωσε τον δολοφόνο του, και η χήρα του Ζορές υποχρεώθηκε να πληρώσει τα δικαστικά έξοδα — ετυμηγορία που προκάλεσε αγανάκτηση στην αριστερά. Τα λείψανά του μεταφέρθηκαν στο Πάνθεον το 1924· ο Βιλέν σκοτώθηκε στην Ίμπιζα το 1936, στις αρχές του Ισπανικού Εμφυλίου."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1914,
      month: 8,
      era: {
        en: "Mobilisation",
        el: "Επιστράτευση"
      },
      events: [
        {
          title: {
            en: "France goes to war",
            el: "Η Γαλλία βαδίζει στον πόλεμο"
          },
          description: {
            en: "On 1 August the church bells ring the general mobilisation. On 3 August Germany declares war on France; on the 4th, in the Chamber, René Viviani reads the message of President Poincaré: the Union sacrée — a national truce of all parties — is proclaimed. Within four weeks the Germans will be on the Marne. The long nineteenth century is over.",
            el: "Την 1η Αυγούστου οι καμπάνες των εκκλησιών χτυπούν τη γενική επιστράτευση. Στις 3 Αυγούστου η Γερμανία κηρύσσει πόλεμο στη Γαλλία· στις 4, στη Βουλή, ο Ρενέ Βιβιανί διαβάζει το μήνυμα του Προέδρου Πουανκαρέ: η Union sacrée — εθνική εκεχειρία όλων των κομμάτων — ανακηρύσσεται. Σε τέσσερις εβδομάδες οι Γερμανοί θα είναι στον Μάρνη. Ο μακρύς δέκατος ένατος αιώνας έχει τελειώσει."
          },
          extendedDescription: {
            en: "French soldiers marched out in the red trousers and blue coats of the previous century, and the army's doctrine of all-out attack under Plan XVII sent them against German machine guns and artillery in the Battles of the Frontiers. On 22 August 1914 alone some 27,000 French soldiers were killed — the bloodiest day in French military history. Even so, the army and the nation held together, and the Union sacrée would last for most of the war.",
            el: "Οι Γάλλοι στρατιώτες ξεκίνησαν με τα κόκκινα παντελόνια και τα μπλε πανωφόρια του προηγούμενου αιώνα, και το δόγμα της ολομέτωπης επίθεσης του Σχεδίου XVII τους έστειλε απέναντι στα γερμανικά πολυβόλα και στο πυροβολικό στις Μάχες των Συνόρων. Μόνο στις 22 Αυγούστου 1914 σκοτώθηκαν περίπου 27.000 Γάλλοι στρατιώτες — η πιο αιματηρή μέρα της γαλλικής στρατιωτικής ιστορίας. Παρ' όλα αυτά, ο στρατός και το έθνος άντεξαν ενωμένα, και η Ιερή Ένωση κράτησε για το μεγαλύτερο μέρος του πολέμου."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
