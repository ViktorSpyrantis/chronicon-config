/** Foreign Domination & Early Modern Era — Ξένη Κυριαρχία & Πρώιμη Νεωτερική Εποχή · Italian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const ITALIAN_FOREIGN_DOMINATION = {
  id: "italian-foreign-domination" as const,
  label: {
    en: "Foreign Domination & Early Modern Era",
    el: "Ξένη Κυριαρχία & Πρώιμη Νεωτερική Εποχή"
  },
  supertitle: {
    en: "Secolo di Ferro",
    el: "Σιδηρός Αιώνας"
  },
  title: {
    en: "Foreign Domination & Early Modern Italy",
    el: "Ξένη Κυριαρχία & Πρώιμη Νεωτερική Ιταλία"
  },
  subtitle: {
    en: "From the Peace of Cateau-Cambrésis to the fall of the Venetian Republic — Spanish viceroys, Austrian Habsburgs, and Bourbon kings ruled an Italy that nonetheless gave Europe Galileo, the opera, and the Enlightenment of Beccaria. Slide across the centuries to read the major events of the peninsula's long age of foreign hegemony.",
    el: "Από την Ειρήνη του Κατώ-Καμπρεζί έως την πτώση της Δημοκρατίας της Βενετίας — Ισπανοί αντιβασιλείς, Αυστριακοί Αψβούργοι και Βουρβώνοι βασιλείς κυβέρνησαν μια Ιταλία που παρ' όλα αυτά χάρισε στην Ευρώπη τον Γαλιλαίο, την όπερα και τον Διαφωτισμό του Μπεκκαρία. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα σημαντικότερα γεγονότα της μακράς εποχής της ξένης ηγεμονίας στη χερσόνησο."
  },
  menuDescription: {
    en: "Two centuries of Spanish, Austrian and Bourbon masters, from Cateau-Cambrésis to Napoleon.",
    el: "Δύο αιώνες ισπανών, αυστριακών και βουρβώνων αφεντάδων, από το Κατώ-Καμπρεζί ως τον Ναπολέοντα."
  },
  footerLabel: {
    en: "Foreign Domination & Early Modern Italy · 1559-1797 AD",
    el: "Ξένη Κυριαρχία & Πρώιμη Νεωτερική Ιταλία · 1559-1797 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Foreign Domination & Early Modern Italy",
    el: "Ξένη Κυριαρχία & Πρώιμη Νεωτερική Ιταλία"
  },
  theme: THEMES.crimson,
  timeline: [
    {
      year: 1559,
      era: {
        en: "Spanish Hegemony",
        el: "Ισπανική Ηγεμονία"
      },
      events: [
        {
          title: {
            en: "Peace of Cateau-Cambrésis",
            el: "Ειρήνη του Κατώ-Καμπρεζί"
          },
          description: {
            en: "France renounces its claims in Italy, sealing nearly a century and a half of Spanish Habsburg dominance over the peninsula.",
            el: "Η Γαλλία παραιτείται από τις διεκδικήσεις της στην Ιταλία, σφραγίζοντας σχεδόν ενάμιση αιώνα ισπανικής αψβουργικής κυριαρχίας στη χερσόνησο."
          },
          extendedDescription: {
            en: "Concluded between Henry II of France and Philip II of Spain in April 1559, the treaties of Cateau-Cambrésis ended the Italian Wars that had ravaged the peninsula since 1494. France abandoned its long contest for Milan and Naples; Spain emerged with direct rule over the Duchy of Milan, the Kingdom of Naples, Sicily, and Sardinia, and indirect lordship over a chain of client states including Tuscany, Genoa, and Mantua. Only Venice, the Papal States, and the Duchy of Savoy retained meaningful autonomy. The settlement opened the so-called secolo di ferro, a 'century of iron' in which Italian political life unfolded under the shadow of Madrid's viceroys and the Spanish tercios garrisoning Lombardy.",
            el: "Συνομολογημένες τον Απρίλιο του 1559 μεταξύ του Ερρίκου Β' της Γαλλίας και του Φιλίππου Β' της Ισπανίας, οι συνθήκες του Κατώ-Καμπρεζί έθεσαν τέλος στους Ιταλικούς Πολέμους που είχαν ρημάξει τη χερσόνησο από το 1494. Η Γαλλία εγκατέλειψε τη μακρά διεκδίκηση του Μιλάνου και της Νάπολης· η Ισπανία αναδείχθηκε με άμεση κυριαρχία στο Δουκάτο του Μιλάνου, το Βασίλειο της Νάπολης, τη Σικελία και τη Σαρδηνία, καθώς και έμμεση επικυριαρχία σε αλυσίδα κρατιδίων όπως η Τοσκάνη, η Γένοβα και η Μάντοβα. Μόνο η Βενετία, τα Παπικά Κράτη και το Δουκάτο της Σαβοΐας διατήρησαν ουσιαστική αυτονομία. Η συμφωνία εγκαινίασε το λεγόμενο secolo di ferro, έναν «σιδηρό αιώνα» κατά τον οποίο η ιταλική πολιτική ζωή ξεδιπλώθηκε υπό τη σκιά των αντιβασιλέων της Μαδρίτης και των ισπανικών τέρθιο που στάθμευαν στη Λομβαρδία."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Map_Italy_in_1559_-_Touring_Club_Italiano_CART-TRC-48_01.jpg?width=1024",
            alt: {
              en: "Map of Italy after the Peace of Cateau-Cambrésis, 1559",
              el: "Χάρτης της Ιταλίας μετά την Ειρήνη του Κατώ-Καμπρεζί, 1559"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1571,
      era: {
        en: "Holy League",
        el: "Ιερή Συμμαχία"
      },
      events: [
        {
          title: {
            en: "Battle of Lepanto",
            el: "Ναυμαχία της Ναυπάκτου"
          },
          description: {
            en: "A Holy League fleet led by Venice, Spain, and the Papacy crushes the Ottoman navy in the Gulf of Patras, the last great galley battle of the Mediterranean.",
            el: "Στόλος της Ιερής Συμμαχίας υπό τη Βενετία, την Ισπανία και την Παπική Έδρα συντρίβει τον οθωμανικό στόλο στον Πατραϊκό Κόλπο, στην τελευταία μεγάλη ναυμαχία γαλέρων της Μεσογείου."
          },
          extendedDescription: {
            en: "Welded together by Pope Pius V after the Ottoman invasion of Venetian Cyprus, the Holy League fleet of more than two hundred galleys sailed under the supreme command of Don John of Austria, half-brother of Philip II. On 7 October 1571 it met an Ottoman armada of comparable size off Lepanto and broke its centre with a combination of disciplined arquebus fire and the heavy guns of six Venetian galleasses. Some thirty thousand Turks were killed and fifteen thousand Christian galley-slaves freed; among the Spanish wounded was the young Miguel de Cervantes. Lepanto did not reverse the loss of Cyprus, and the Ottomans rebuilt their fleet within a year, but the victory shattered the myth of Turkish invincibility at sea and became the central celebratory image of Counter-Reformation Italy, repeated in canvases by Veronese, Vicentino, and Titian's workshop.",
            el: "Συσπειρωμένος από τον πάπα Πίο Ε' μετά την οθωμανική εισβολή στη βενετική Κύπρο, ο στόλος της Ιερής Συμμαχίας, με περισσότερες από διακόσιες γαλέρες, έπλευσε υπό την ανώτατη διοίκηση του Δον Χουάν της Αυστρίας, ετεροθαλούς αδελφού του Φιλίππου Β'. Στις 7 Οκτωβρίου 1571 συνάντησε οθωμανική αρμάδα ανάλογου μεγέθους έξω από τη Ναύπακτο και διέρρηξε το κέντρο της με συνδυασμό πειθαρχημένου πυρός αρκεβουζίων και του βαρέος πυροβολικού έξι βενετικών γαλεάσσων. Σκοτώθηκαν περίπου τριάντα χιλιάδες Τούρκοι και απελευθερώθηκαν δεκαπέντε χιλιάδες Χριστιανοί κωπηλάτες· ανάμεσα στους Ισπανούς τραυματίες ήταν ο νεαρός Μιγκέλ ντε Θερβάντες. Η Ναύπακτος δεν αντέστρεψε την απώλεια της Κύπρου και οι Οθωμανοί ανασυγκρότησαν τον στόλο τους μέσα σε έναν χρόνο, όμως η νίκη συνέτριψε τον μύθο της τουρκικής αήττητης δύναμης στη θάλασσα και έγινε η κεντρική εορταστική εικόνα της αντιμεταρρυθμιστικής Ιταλίας, επαναλαμβανόμενη σε έργα του Βερονέζε, του Βιτσεντίνο και του εργαστηρίου του Τιτσιάνο."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Battle_of_Lepanto_1571.jpg?width=1024",
            alt: {
              en: "The Battle of Lepanto, anonymous painting, National Maritime Museum, Greenwich",
              el: "Η Ναυμαχία της Ναυπάκτου, ανώνυμος πίνακας, Εθνικό Ναυτικό Μουσείο, Γκρίνουιτς"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1600,
      era: {
        en: "Counter-Reformation",
        el: "Αντιμεταρρύθμιση"
      },
      events: [
        {
          title: {
            en: "Birth of Opera in Florence",
            el: "Η Γέννηση της Όπερας στη Φλωρεντία"
          },
          description: {
            en: "Jacopo Peri's Euridice is staged at the Pitti Palace for the wedding of Maria de' Medici and Henry IV, the earliest opera whose music survives.",
            el: "Η Ευρυδίκη του Τζάκοπο Πέρι ανεβαίνει στο Παλάτι Πίτι για τους γάμους της Μαρίας ντε' Μέντιτσι με τον Ερρίκο Δ', η πρωιμότερη όπερα της οποίας σώζεται η μουσική."
          },
          extendedDescription: {
            en: "Out of the discussions of the Florentine Camerata — the circle of poets, theorists, and musicians around Count Giovanni de' Bardi who sought to recover the lost emotional power of Greek tragedy — emerged a new genre that united continuous sung dialogue, instrumental accompaniment, and stage spectacle. Peri's Euridice, on a libretto by Ottavio Rinuccini, was performed in October 1600 in the Pitti Palace and brought together monodic recitative, basso continuo, and elaborate intermedi. Within a few years Claudio Monteverdi's Orfeo (Mantua, 1607) gave the form its first masterpiece, and by mid-century Venice had opened the world's first public opera houses. Born as court entertainment under foreign-connected dynasties, opera became the most influential Italian export of the Baroque age.",
            el: "Από τις συζητήσεις της Φλωρεντινής Καμεράτας — του κύκλου ποιητών, θεωρητικών και μουσικών γύρω από τον κόμη Τζοβάννι ντε' Μπάρντι, που αναζητούσαν να ανακτήσουν τη χαμένη συναισθηματική δύναμη της αρχαίας ελληνικής τραγωδίας — γεννήθηκε ένα νέο είδος που ένωνε τον συνεχή τραγουδιστό διάλογο, την οργανική συνοδεία και το σκηνικό θέαμα. Η Ευρυδίκη του Πέρι, σε λιμπρέτο του Οτάβιο Ρινουτσίνι, ανέβηκε τον Οκτώβριο του 1600 στο Παλάτι Πίτι και συνένωσε το μονωδικό ρετσιτατίβο, το basso continuo και περίτεχνα intermedi. Μέσα σε λίγα χρόνια ο Ορφέας του Κλάουντιο Μοντεβέρντι (Μάντοβα, 1607) έδωσε στο είδος το πρώτο του αριστούργημα, και ως τα μέσα του αιώνα η Βενετία είχε ανοίξει τις πρώτες δημόσιες όπερες του κόσμου. Γεννημένη ως αυλική ψυχαγωγία υπό δυναστείες με ξένους δεσμούς, η όπερα έγινε η πιο επιδραστική ιταλική εξαγωγή της εποχής του Μπαρόκ."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jacopo_Peri_1.jpg?width=1024",
            alt: {
              en: "Portrait of the composer Jacopo Peri, c. 1600",
              el: "Πορτρέτο του συνθέτη Τζάκοπο Πέρι, π. 1600"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1633,
      era: {
        en: "Roman Inquisition",
        el: "Ρωμαϊκή Ιερά Εξέταση"
      },
      events: [
        {
          title: {
            en: "Trial of Galileo Galilei",
            el: "Η Δίκη του Γαλιλαίου Γαλιλέι"
          },
          description: {
            en: "Galileo is condemned by the Roman Inquisition for defending Copernican heliocentrism in his Dialogue Concerning the Two Chief World Systems.",
            el: "Ο Γαλιλαίος καταδικάζεται από τη Ρωμαϊκή Ιερά Εξέταση επειδή υπερασπίστηκε τον κοπερνίκειο ηλιοκεντρισμό στον Διάλογό του για τα Δύο Κυριότερα Συστήματα του Κόσμου."
          },
          extendedDescription: {
            en: "Published in Florence in 1632 with the imprimatur of Tuscan and Roman censors, the Dialogo presented Ptolemaic and Copernican cosmologies as a debate between three speakers — but its Aristotelian defender, Simplicio, was unmistakably given the lines of Pope Urban VIII himself. Stung by the perceived betrayal of his old protector, Urban referred the work to the Holy Office. Aged sixty-nine and threatened with torture, Galileo was made to abjure 'on his knees' in the Dominican convent of Santa Maria sopra Minerva on 22 June 1633; the Dialogue was placed on the Index, and he was sentenced to indefinite house arrest at his villa in Arcetri, where he wrote his greatest scientific book, the Discourses on Two New Sciences. The condemnation, formally lifted only by John Paul II in 1992, became Europe's enduring symbol of the conflict between revealed authority and natural philosophy.",
            el: "Δημοσιευμένος στη Φλωρεντία το 1632 με την έγκριση τοσκανικών και ρωμαϊκών λογοκριτών, ο Dialogo παρουσίαζε την πτολεμαϊκή και την κοπερνίκεια κοσμολογία ως διάλογο μεταξύ τριών συνομιλητών — αλλά ο αριστοτελικός υπερασπιστής, ο Σιμπλίκιος, έπαιρνε αναμφισβήτητα τα λόγια του ίδιου του πάπα Ουρβανού Η'. Πληγωμένος από την υποτιθέμενη προδοσία του παλιού του προστάτη, ο Ουρβανός παρέπεμψε το έργο στην Ιερά Εξέταση. Στα εξήντα εννέα του χρόνια και υπό την απειλή βασανιστηρίων, ο Γαλιλαίος υποχρεώθηκε να αποκηρύξει «γονυπετής» τη θεωρία του στη μονή της Σάντα Μαρία σόπρα Μινέρβα στις 22 Ιουνίου 1633· ο Διάλογος μπήκε στο Index και ο ίδιος καταδικάστηκε σε αόριστο κατ' οίκον περιορισμό στην έπαυλή του στο Αρτσέτρι, όπου έγραψε το μεγαλύτερο επιστημονικό του βιβλίο, τις Συνομιλίες για Δύο Νέες Επιστήμες. Η καταδίκη, που τυπικά αναιρέθηκε μόνο από τον Ιωάννη Παύλο Β' το 1992, έγινε το διαρκές ευρωπαϊκό σύμβολο της σύγκρουσης μεταξύ της αποκεκαλυμμένης εξουσίας και της φυσικής φιλοσοφίας."
          },
          category: "religious",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Galileo_facing_the_Roman_Inquisition.jpg?width=1024",
            alt: {
              en: "Cristiano Banti, Galileo Facing the Roman Inquisition, 1857",
              el: "Κριστιάνο Μπάντι, Ο Γαλιλαίος Αντιμέτωπος με τη Ρωμαϊκή Ιερά Εξέταση, 1857"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1647,
      era: {
        en: "Revolts of the Iron Century",
        el: "Εξεγέρσεις του Σιδηρού Αιώνα"
      },
      events: [
        {
          title: {
            en: "Masaniello's Revolt in Naples",
            el: "Η Εξέγερση του Μαζανιέλο στη Νάπολη"
          },
          description: {
            en: "The fishmonger Tommaso Aniello leads the people of Naples against Spanish taxation, briefly proclaiming a popular republic before his murder.",
            el: "Ο ψαράς Τομάσο Ανιέλο ηγείται του λαού της Νάπολης ενάντια στην ισπανική φορολογία, ανακηρύσσοντας για λίγο μια λαϊκή δημοκρατία πριν δολοφονηθεί."
          },
          extendedDescription: {
            en: "On 7 July 1647 a riot in the Mercato over a new tax on fruit, imposed by the Spanish viceroy the Duke of Arcos to fund the Thirty Years' War, escalated within hours into a city-wide insurrection. Its leader, the twenty-seven-year-old fishmonger Tommaso Aniello — Masaniello — was acclaimed Capitano generale del fedelissimo popolo and for ten extraordinary days governed Naples from a wooden balcony, executing tax-farmers and burning the houses of nobles. Driven mad by responsibility and possibly by poison, he was assassinated by his own followers on 16 July, but the revolt continued under the blacksmith Gennaro Annese, who in October proclaimed the Real Repubblica Napoletana under the protection of the Duc de Guise. Spanish forces under Don John of Austria the Younger crushed the republic in April 1648, yet the memory of Masaniello — magnified by Romantic opera and revolutionary pamphlets — would echo through every subsequent uprising in the Mezzogiorno.",
            el: "Στις 7 Ιουλίου 1647 μια ταραχή στο Mercato για νέο φόρο στα φρούτα, που είχε επιβάλει ο Ισπανός αντιβασιλέας Δούκας του Άρκος για να χρηματοδοτήσει τον Τριακονταετή Πόλεμο, κλιμακώθηκε μέσα σε ώρες σε γενικευμένη εξέγερση. Ο ηγέτης της, ο εικοσιεπτάχρονος ψαράς Τομάσο Ανιέλο — ο Μαζανιέλο — επευφημήθηκε ως Capitano generale del fedelissimo popolo και για δέκα εξαιρετικές ημέρες κυβέρνησε τη Νάπολη από έναν ξύλινο εξώστη, εκτελώντας φοροεκμισθωτές και πυρπολώντας αρχοντικά. Παρασυρμένος στην παραφροσύνη από την ευθύνη και ίσως από δηλητήριο, δολοφονήθηκε από τους ίδιους τους οπαδούς του στις 16 Ιουλίου, όμως η εξέγερση συνεχίστηκε υπό τον σιδηρουργό Τζενάρο Αννέζε, που τον Οκτώβριο ανακήρυξε τη Real Repubblica Napoletana υπό την προστασία του δούκα ντε Γκιζ. Οι ισπανικές δυνάμεις υπό τον Δον Χουάν της Αυστρίας τον Νεότερο συνέτριψαν τη δημοκρατία τον Απρίλιο του 1648, αλλά η μνήμη του Μαζανιέλο — μεγεθυμένη από τη ρομαντική όπερα και τα επαναστατικά φυλλάδια — επρόκειτο να αντηχεί σε κάθε μετέπειτα εξέγερση του Μεζοτζόρνο."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Domenico_Gargiulo_-_Piazza_del_Mercato_during_the_Revolt_of_Masaniello.jpg?width=1024",
            alt: {
              en: "Domenico Gargiulo, the Piazza del Mercato in Naples during the Revolt of Masaniello, 1647",
              el: "Ντομένικο Γκαρτζιούλο, η Πιάτσα ντελ Μερκάτο της Νάπολης κατά την Εξέγερση του Μαζανιέλο, 1647"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1669,
      era: {
        en: "Decline of the Stato da Mar",
        el: "Παρακμή του Stato da Mar"
      },
      events: [
        {
          title: {
            en: "Fall of Candia",
            el: "Η Άλωση του Χάνδακα"
          },
          description: {
            en: "After a twenty-one-year siege, Venice surrenders the Cretan capital of Candia to the Ottomans, ending its centuries-long maritime empire.",
            el: "Μετά από είκοσι ένα χρόνια πολιορκίας, η Βενετία παραδίδει την κρητική πρωτεύουσα, τον Χάνδακα, στους Οθωμανούς, τερματίζοντας τη μακραίωνη ναυτική της αυτοκρατορία."
          },
          extendedDescription: {
            en: "Begun by the Ottomans in 1648, the siege of Candia became the longest in early modern European history, drawing in volunteers from across Catholic Europe and consuming the lifeblood of the Republic. The Venetian commander Francesco Morosini held the city through twenty-one campaigning seasons against the engineers of Grand Vizier Köprülü Ahmed Pasha, but in September 1669, with the walls reduced to rubble and reinforcements from France withdrawn, he negotiated an honourable evacuation: the garrison and most of the inhabitants were allowed to depart with their movable property and their saints' relics. Crete passed to the sultan, and apart from a brief Morean revival under the same Morosini at the end of the century, Venice's role as a Mediterranean power was finished. The fall of the City of Candia, sung in laments composed in both Italian and Cretan Greek, marked the symbolic end of a Latin presence in the Aegean that reached back to the Fourth Crusade.",
            el: "Έχοντας ξεκινήσει από τους Οθωμανούς το 1648, η πολιορκία του Χάνδακα έγινε η μακρύτερη της πρώιμης νεωτερικής ευρωπαϊκής ιστορίας, προσελκύοντας εθελοντές από ολόκληρη την καθολική Ευρώπη και αναλώνοντας τις δυνάμεις της Δημοκρατίας. Ο Βενετός διοικητής Φραντσέσκο Μοροζίνι κράτησε την πόλη μέσα από είκοσι μία εκστρατευτικές περιόδους εναντίον των μηχανικών του μεγάλου βεζίρη Κιοπρουλού Αχμέτ Πασά, αλλά τον Σεπτέμβριο του 1669, με τα τείχη ερειπωμένα και τις γαλλικές ενισχύσεις να αποσύρονται, διαπραγματεύτηκε έντιμη παράδοση: η φρουρά και οι περισσότεροι κάτοικοι μπόρεσαν να αποχωρήσουν με την κινητή περιουσία τους και τα λείψανα των αγίων τους. Η Κρήτη πέρασε στον σουλτάνο και, εκτός από μια σύντομη ανάκαμψη στον Μοριά υπό τον ίδιο Μοροζίνι στα τέλη του αιώνα, ο ρόλος της Βενετίας ως μεσογειακής δύναμης είχε λήξει. Η πτώση του Χάνδακα, υμνημένη σε θρήνους γραμμένους τόσο στα ιταλικά όσο και στα κρητικά ελληνικά, σήμανε το συμβολικό τέλος μιας λατινικής παρουσίας στο Αιγαίο που ανέτρεχε στην Τετάρτη Σταυροφορία."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Candie_assi%C3%A9g%C3%A9e.png?width=1024",
            alt: {
              en: "French engraving of Candia besieged by the Ottomans, with galleys in the harbour",
              el: "Γαλλική χαλκογραφία του Χάνδακα πολιορκημένου από τους Οθωμανούς, με γαλέρες στο λιμάνι"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1714,
      era: {
        en: "Habsburg Italy",
        el: "Αψβουργική Ιταλία"
      },
      events: [
        {
          title: {
            en: "Treaty of Rastatt: Italy Passes to Austria",
            el: "Συνθήκη του Ράστατ: Η Ιταλία Περνά στην Αυστρία"
          },
          description: {
            en: "The settlement of the War of the Spanish Succession transfers Milan, Naples, Sardinia, and the Tuscan ports from the Spanish to the Austrian Habsburgs.",
            el: "Η διευθέτηση του Πολέμου της Ισπανικής Διαδοχής μεταβιβάζει το Μιλάνο, τη Νάπολη, τη Σαρδηνία και τους τοσκανικούς λιμένες από τους Ισπανούς στους Αυστριακούς Αψβούργους."
          },
          extendedDescription: {
            en: "Although the principal European peace had been signed at Utrecht in 1713, the territorial settlement for Italy was finalised in March 1714 at Rastatt between Louis XIV and the Emperor Charles VI. After more than a decade of campaigning under Prince Eugene of Savoy, the Spanish Habsburg inheritance in Italy was dismembered: the Duchy of Milan, the Kingdom of Naples, the island of Sardinia, and the Tuscan State of the Presidi went to Vienna, while Sicily passed for a few years to the Duke of Savoy as a kingdom (he exchanged it for Sardinia in 1720). Spain's two-century hegemony was at an end, and a new Italian map of Habsburg viceroyalties, Bourbon dependencies, and a more aggressive Savoyard kingdom in the north-west took shape — the configuration that would dominate the peninsula until Napoleon.",
            el: "Παρότι η κύρια ευρωπαϊκή ειρήνη είχε υπογραφεί στην Ουτρέχτη το 1713, η εδαφική διευθέτηση για την Ιταλία οριστικοποιήθηκε τον Μάρτιο του 1714 στο Ράστατ μεταξύ του Λουδοβίκου ΙΔ' και του αυτοκράτορα Καρόλου ΣΤ'. Μετά από πάνω από μία δεκαετία εκστρατειών υπό τον πρίγκιπα Ευγένιο της Σαβοΐας, η ισπανο-αψβουργική κληρονομιά στην Ιταλία διαμελίστηκε: το Δουκάτο του Μιλάνου, το Βασίλειο της Νάπολης, η νήσος Σαρδηνία και το τοσκανικό Stato dei Presidi πέρασαν στη Βιέννη, ενώ η Σικελία περιήλθε για λίγα χρόνια στον δούκα της Σαβοΐας ως βασίλειο (την αντάλλαξε με τη Σαρδηνία το 1720). Η ισπανική ηγεμονία δύο αιώνων είχε λάβει τέλος, και διαμορφώθηκε ένας νέος ιταλικός χάρτης από αψβουργικές αντιβασιλείες, βουρβωνικές εξαρτήσεις και ένα πιο επιθετικό σαβοϋικό βασίλειο στα βορειοδυτικά — η διάταξη που θα κυριαρχούσε στη χερσόνησο μέχρι τον Ναπολέοντα."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Paul_Dominique_Philippoteaux_-_Prince_Eugene_of_Savoy_and_the_Marshal_de_Villars_at_Rastatt%2C_1714.jpg?width=1024",
            alt: {
              en: "Prince Eugene of Savoy and Marshal Villars meeting at Rastatt in 1714, engraving after Paul Dominique Philippoteaux",
              el: "Ο πρίγκιπας Ευγένιος της Σαβοΐας και ο στρατάρχης Βιλάρ συναντώνται στο Ράστατ το 1714, χαλκογραφία κατά τον Πωλ Ντομινίκ Φιλιπποτώ"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1734,
      era: {
        en: "Bourbon Restoration",
        el: "Βουρβωνική Παλινόρθωση"
      },
      events: [
        {
          title: {
            en: "Charles of Bourbon Conquers Naples",
            el: "Ο Κάρολος των Βουρβώνων Κατακτά τη Νάπολη"
          },
          description: {
            en: "The Spanish Infante Charles wrests Naples and Sicily from Austria, founding an independent Bourbon kingdom in southern Italy.",
            el: "Ο Ισπανός Ινφάντες Κάρολος αποσπά τη Νάπολη και τη Σικελία από την Αυστρία, ιδρύοντας ανεξάρτητο βουρβωνικό βασίλειο στη νότια Ιταλία."
          },
          extendedDescription: {
            en: "During the War of the Polish Succession, Philip V of Spain dispatched his eighteen-year-old son Charles at the head of a Spanish-Walloon army that swept down the peninsula, defeating the Austrians at Bitonto in May 1734 and entering Naples to popular acclaim. Recognised as King Charles VII of Naples and Sicily by the Treaty of Vienna in 1738, he established the first independent monarchy the Mezzogiorno had known since the Middle Ages. Advised by the Tuscan jurist Bernardo Tanucci, his reign undertook reforms unimaginable under the Spanish viceroys: a concordat curbing ecclesiastical privilege, the construction of the Royal Palace of Caserta and the San Carlo opera house, the launching of the excavations at Herculaneum and Pompeii, and the foundation of a national university. When he succeeded his half-brother as Charles III of Spain in 1759, he left the Neapolitan throne to his son Ferdinand and a tradition of enlightened reform that would eventually clash with both the privileged classes and the French Revolution.",
            el: "Κατά τον Πόλεμο της Πολωνικής Διαδοχής, ο Φίλιππος Ε' της Ισπανίας έστειλε τον δεκαοκτάχρονο γιο του Κάρολο επικεφαλής ισπανο-βαλλωνικού στρατού που σάρωσε τη χερσόνησο, νικώντας τους Αυστριακούς στο Μπιτόντο τον Μάιο του 1734 και εισερχόμενος στη Νάπολη μέσα σε λαϊκές επευφημίες. Αναγνωρισμένος ως βασιλιάς Κάρολος Ζ' της Νάπολης και της Σικελίας με τη Συνθήκη της Βιέννης του 1738, ίδρυσε την πρώτη ανεξάρτητη μοναρχία που είχε γνωρίσει ο Μεζοτζόρνο από τον Μεσαίωνα. Με σύμβουλο τον Τοσκανό νομικό Μπερνάρντο Τανούτσι, η βασιλεία του ανέλαβε μεταρρυθμίσεις αδιανόητες υπό τους Ισπανούς αντιβασιλείς: κονκορδάτο που περιόρισε τα εκκλησιαστικά προνόμια, την ανέγερση του Βασιλικού Ανακτόρου της Καζέρτας και του θεάτρου Σαν Κάρλο, την έναρξη των ανασκαφών στο Ερκολάνο και την Πομπηία και την ίδρυση εθνικού πανεπιστημίου. Όταν διαδέχθηκε τον ετεροθαλή αδελφό του ως Κάρολος Γ' της Ισπανίας το 1759, άφησε τον ναπολιτάνικο θρόνο στον γιο του Φερδινάνδο και μια παράδοση φωτισμένης μεταρρύθμισης που θα συγκρουόταν τελικά τόσο με τις προνομιούχες τάξεις όσο και με τη Γαλλική Επανάσταση."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Carlo_di_Borbone_visita_il_papa_Benedetto_XIV_nella_coffee-house_del_Quirinale%2C_Pannini_001.jpg?width=1024",
            alt: {
              en: "Giovanni Paolo Pannini, Charles of Bourbon visiting Pope Benedict XIV in Rome, 1746",
              el: "Τζοβάννι Πάολο Παννίνι, Ο Κάρολος των Βουρβώνων επισκέπτεται τον πάπα Βενέδικτο ΙΔ' στη Ρώμη, 1746"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1737,
      era: {
        en: "Lorraine Tuscany",
        el: "Τοσκάνη των Λωρραινών"
      },
      events: [
        {
          title: {
            en: "Extinction of the Medici",
            el: "Σβέση των Μεδίκων"
          },
          description: {
            en: "Gian Gastone, the last Medici Grand Duke, dies childless; the Grand Duchy of Tuscany passes to Francis Stephen of Lorraine, husband of Maria Theresa.",
            el: "Ο Τζαν Γκαστόνε, ο τελευταίος Μέγας Δούκας των Μεδίκων, πεθαίνει άτεκνος· το Μεγάλο Δουκάτο της Τοσκάνης περιέρχεται στον Φραγκίσκο Στέφανο της Λωρραίνης, σύζυγο της Μαρίας Θηρεσίας."
          },
          extendedDescription: {
            en: "Three centuries after Cosimo the Elder had built Florentine banking into a European power, the Medici dynasty died out in the obese, melancholic figure of Gian Gastone, who had spent his last years bedridden in the Pitti Palace. By the secret terms of the 1735 preliminaries to the War of the Polish Succession, Tuscany was earmarked as compensation for Francis Stephen of Lorraine, who had been forced to surrender his ancestral duchy to the displaced King Stanisław Leszczyński of Poland. On 9 July 1737 Lorraine commissioners took possession of Florence; the celebrated Medici art collections were preserved for the city by Anna Maria Luisa, the last surviving Medici, in the Patto di Famiglia. Though resented at first as another foreign import, the Lorraine dynasty — under Francis's son Peter Leopold — would make Tuscany the laboratory of enlightened despotism in Italy, abolishing torture and the death penalty in 1786 in the first such code in Europe.",
            el: "Τρεις αιώνες αφότου ο Κόζιμο ο Πρεσβύτερος είχε καταστήσει τη φλωρεντινή τραπεζική ευρωπαϊκή δύναμη, η δυναστεία των Μεδίκων εξέλιπε με τη μορφή του παχύσαρκου και μελαγχολικού Τζαν Γκαστόνε, που είχε περάσει τα τελευταία του χρόνια κλινήρης στο Παλάτι Πίτι. Με τους μυστικούς όρους των προκαταρκτικών του 1735 για τον Πόλεμο της Πολωνικής Διαδοχής, η Τοσκάνη είχε προοριστεί ως αντιστάθμιση για τον Φραγκίσκο Στέφανο της Λωρραίνης, ο οποίος είχε υποχρεωθεί να παραδώσει το πατρογονικό του δουκάτο στον εκτοπισμένο βασιλιά Στανίσλαο Λεστσίνσκι της Πολωνίας. Στις 9 Ιουλίου 1737 επίτροποι της Λωρραίνης κατέλαβαν τη Φλωρεντία· οι περίφημες συλλογές τέχνης των Μεδίκων διατηρήθηκαν για την πόλη από την Άννα Μαρία Λουίζα, τελευταία επιζώσα των Μεδίκων, με το Patto di Famiglia. Αν και αρχικά αντιμετωπίστηκε ως ακόμη μία ξενική εισαγωγή, η δυναστεία της Λωρραίνης — υπό τον γιο του Φραγκίσκου, Πέτρο Λεοπόλδο — θα μετέτρεπε την Τοσκάνη σε εργαστήριο φωτισμένης δεσποτείας στην Ιταλία, καταργώντας τα βασανιστήρια και τη θανατική ποινή το 1786 με τον πρώτο τέτοιο κώδικα στην Ευρώπη."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Gabbiani%2C_Giovanni_Gaetano_(attr.)_-_Official_portrait_of_Gian_Gastone_de'_Medici_as_Grand_Duke_of_Tuscany.jpg?width=1024",
            alt: {
              en: "Official portrait of Gian Gastone de' Medici as Grand Duke of Tuscany, attributed to Giovanni Gaetano Gabbiani",
              el: "Επίσημο πορτρέτο του Τζαν Γκαστόνε ντε' Μέντιτσι ως Μεγάλου Δούκα της Τοσκάνης, αποδιδόμενο στον Τζοβάννι Γκαετάνο Γκαμπιάνι"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1764,
      era: {
        en: "Italian Enlightenment",
        el: "Ιταλικός Διαφωτισμός"
      },
      events: [
        {
          title: {
            en: "Beccaria's On Crimes and Punishments",
            el: "Το Περί Εγκλημάτων και Ποινών του Μπεκκαρία"
          },
          description: {
            en: "The young Milanese marquis Cesare Beccaria publishes Dei delitti e delle pene, founding modern penal reform and arguing against torture and the death penalty.",
            el: "Ο νεαρός Μιλανέζος μαρκήσιος Τσέζαρε Μπεκκαρία δημοσιεύει το Dei delitti e delle pene, θεμελιώνοντας τη σύγχρονη μεταρρύθμιση του ποινικού δικαίου και επιχειρηματολογώντας ενάντια στα βασανιστήρια και τη θανατική ποινή."
          },
          extendedDescription: {
            en: "Issued anonymously at Livorno in July 1764, Beccaria's slim treatise emerged from the discussions of the Accademia dei Pugni, the circle of Lombard reformers around the brothers Pietro and Alessandro Verri and their journal Il Caffè. Drawing on Hobbes, Locke, Montesquieu, and Rousseau, Beccaria argued that the only legitimate basis of punishment was utility, that penalties must be proportionate, prompt, and certain rather than savage, that secret accusations and judicial torture were both cruel and epistemically worthless, and that the death penalty should be abolished as neither necessary nor effective. Within two years the book had been translated into French (with a commentary by Voltaire), placed on the Index by the Roman Inquisition, and adopted as a manual by reforming sovereigns from Catherine the Great to Joseph II. Peter Leopold's Tuscan code of 1786, which abolished capital punishment for the first time in European history, was its direct child.",
            el: "Εκδομένη ανώνυμα στο Λιβόρνο τον Ιούλιο του 1764, η λιγοσέλιδη πραγματεία του Μπεκκαρία προέκυψε από τις συζητήσεις της Accademia dei Pugni, του κύκλου των Λομβαρδών μεταρρυθμιστών γύρω από τους αδελφούς Πιέτρο και Αλεσσάντρο Βέρρι και το περιοδικό τους Il Caffè. Αντλώντας από τον Χομπς, τον Λοκ, τον Μοντεσκιέ και τον Ρουσσώ, ο Μπεκκαρία υποστήριξε ότι η μόνη νόμιμη βάση της τιμωρίας ήταν η χρησιμότητα, ότι οι ποινές πρέπει να είναι αναλογικές, άμεσες και βέβαιες αντί για άγριες, ότι οι μυστικές κατηγορίες και τα δικαστικά βασανιστήρια ήταν εξίσου σκληρά και γνωσιολογικά άχρηστα, και ότι η θανατική ποινή έπρεπε να καταργηθεί ως ούτε αναγκαία ούτε αποτελεσματική. Μέσα σε δύο χρόνια το βιβλίο είχε μεταφραστεί στα γαλλικά (με σχόλιο του Βολταίρου), είχε μπει στο Index από τη Ρωμαϊκή Ιερά Εξέταση και είχε υιοθετηθεί ως εγχειρίδιο από μεταρρυθμιστές μονάρχες από την Αικατερίνη τη Μεγάλη ως τον Ιωσήφ Β'. Ο τοσκανικός κώδικας του Πέτρου Λεοπόλδου του 1786, που για πρώτη φορά στην ευρωπαϊκή ιστορία κατάργησε τη θανατική ποινή, ήταν το άμεσο τέκνο του."
          },
          category: "cultural",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Beccaria_-_Dei_delitti_e_delle_pene_-_6043967_A.jpg?width=1024",
            alt: {
              en: "Allegorical frontispiece of Beccaria's Dei delitti e delle pene: Justice turns away from the executioner offering severed heads",
              el: "Αλληγορική προμετωπίδα του έργου του Μπεκαρία Dei delitti e delle pene: η Δικαιοσύνη αποστρέφεται τον δήμιο που της προσφέρει κομμένα κεφάλια"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    },
    {
      year: 1797,
      era: {
        en: "End of an Old Regime",
        el: "Τέλος του Παλαιού Καθεστώτος"
      },
      events: [
        {
          title: {
            en: "Treaty of Campo Formio: Fall of the Venetian Republic",
            el: "Συνθήκη του Κάμπο Φόρμιο: Πτώση της Βενετικής Δημοκρατίας"
          },
          description: {
            en: "Napoleon's Italian campaign culminates in the dissolution of the thousand-year Republic of Venice, partitioned between France and Austria.",
            el: "Η ιταλική εκστρατεία του Ναπολέοντα κορυφώνεται με τη διάλυση της χιλιόχρονης Δημοκρατίας της Βενετίας, η οποία διαμελίζεται μεταξύ Γαλλίας και Αυστρίας."
          },
          extendedDescription: {
            en: "In a single year of brilliant manoeuvre — Lodi, Castiglione, Arcole, Rivoli — the twenty-seven-year-old General Bonaparte had broken the Austrian armies in northern Italy and forced Vienna to the negotiating table. To buy peace at Campo Formio on 17 October 1797, France ceded the Republic of Venice, neutral and exhausted, to the Habsburgs; in return Austria recognised the new French-sponsored Cisalpine Republic in Lombardy and accepted French annexation of the Austrian Netherlands. Three months earlier Bonaparte had already engineered the abdication of the Doge Ludovico Manin and the last Maggior Consiglio, ending eleven hundred years of Venetian self-government. The Italian campaign collapsed not only the old aristocratic republics of Venice and Genoa but also the patchwork of duchies and ecclesiastical states, replacing them with French-style sister republics — the first stirring of a unitary Italian political consciousness that would, after a longer struggle, become the Risorgimento.",
            el: "Σε έναν μόνο χρόνο λαμπρών ελιγμών — Λόντι, Καστιλιόνε, Αρκόλε, Ριβόλι — ο εικοσιεπτάχρονος στρατηγός Βοναπάρτης είχε συντρίψει τους αυστριακούς στρατούς στη βόρεια Ιταλία και είχε εξαναγκάσει τη Βιέννη στο τραπέζι των διαπραγματεύσεων. Για να εξαγοράσει την ειρήνη στο Κάμπο Φόρμιο, στις 17 Οκτωβρίου 1797, η Γαλλία παραχώρησε τη Δημοκρατία της Βενετίας, ουδέτερη και εξαντλημένη, στους Αψβούργους· σε αντάλλαγμα η Αυστρία αναγνώρισε τη νέα Τσισαλπική Δημοκρατία γαλλικής έμπνευσης στη Λομβαρδία και αποδέχθηκε την προσάρτηση των Αυστριακών Κάτω Χωρών από τη Γαλλία. Τρεις μήνες νωρίτερα ο Βοναπάρτης είχε ήδη οργανώσει την παραίτηση του Δόγη Λοντοβίκο Μανίν και του τελευταίου Maggior Consiglio, τερματίζοντας έντεκα αιώνες βενετικής αυτοδιοίκησης. Η ιταλική εκστρατεία κατέλυσε όχι μόνο τις παλαιές αριστοκρατικές δημοκρατίες της Βενετίας και της Γένοβας αλλά και το μωσαϊκό των δουκάτων και των εκκλησιαστικών κρατών, αντικαθιστώντας τα με γαλλικού τύπου αδελφές δημοκρατίες — το πρώτο σκίρτημα μιας ενιαίας ιταλικής πολιτικής συνείδησης που, μετά από μακρότερο αγώνα, θα γινόταν το Risorgimento."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Napoleon_at_the_Battle_of_Rivoli.jpg?width=1024",
            alt: {
              en: "Felix Philippoteaux, Napoleon at the Battle of Rivoli, 1844",
              el: "Φελίξ Φιλιππότο, Ο Ναπολέων στη Μάχη του Ριβόλι, 1844"
            },
            credit: "Wikimedia Commons (public domain)"
          }
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
