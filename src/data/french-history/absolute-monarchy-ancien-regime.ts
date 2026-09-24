/** Absolute Monarchy & the Ancien Régime — Απόλυτη Μοναρχία & Παλαιό Καθεστώς · French History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const ABSOLUTE_MONARCHY_ANCIEN_REGIME = {
  id: "absolute-monarchy-ancien-regime" as const,
  label: {
    en: "Absolute Monarchy & the Ancien Régime",
    el: "Απόλυτη Μοναρχία & Παλαιό Καθεστώς"
  },
  supertitle: {
    en: "Ancien Régime",
    el: "Παλαιό Καθεστώς"
  },
  title: {
    en: "Absolute Monarchy & the Ancien Régime",
    el: "Απόλυτη Μοναρχία & το Παλαιό Καθεστώς"
  },
  subtitle: {
    en: "From Richelieu and the fall of La Rochelle through Mazarin, the Fronde, Louis XIV at Versailles, the Revocation of the Edict of Nantes and the wars of the Grand Siècle, the Regency and John Law's bubble, the Encyclopédie and the philosophes, the loss of New France, the American war, to the calling of the Estates General on the eve of the Revolution. Slide across the centuries to read the major events that built and broke the Ancien Régime.",
    el: "Από τον Ρισελιέ και την πτώση της Λα Ροσέλ, μέσα από τον Μαζαρέν, τη Φροντ, τον Λουδοβίκο ΙΔ΄ στις Βερσαλλίες, την ανάκληση του Εδίκτου της Ναντ και τους πολέμους του Grand Siècle, την Αντιβασιλεία και τη φούσκα του Τζον Λο, την Encyclopédie και τους philosophes, την απώλεια της Νέας Γαλλίας, τον αμερικανικό πόλεμο, έως τη σύγκληση των Γενικών Συνελεύσεων στις παραμονές της Επανάστασης. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα γεγονότα που έχτισαν και διέλυσαν το Παλαιό Καθεστώς."
  },
  menuDescription: {
    en: "Richelieu, the Sun King at Versailles, and the Enlightenment that undid them both.",
    el: "Ο Ρισελιέ, ο Βασιλιάς Ήλιος στις Βερσαλλίες κι ο Διαφωτισμός που τους ανέτρεψε και τους δύο."
  },
  footerLabel: {
    en: "Absolute Monarchy & the Ancien Régime · 17th–18th centuries CE",
    el: "Απόλυτη Μοναρχία & Παλαιό Καθεστώς · 17ος–18ος αιώνας μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Absolute Monarchy & the Ancien Régime",
    el: "Απόλυτη Μοναρχία & Παλαιό Καθεστώς"
  },
  theme: THEMES.sapphire,
  timeline: [
    {
      year: 1624,
      era: {
        en: "Rise of Richelieu",
        el: "Άνοδος του Ρισελιέ"
      },
      events: [
        {
          title: {
            en: "Cardinal Richelieu enters the council",
            el: "Ο καρδινάλιος Ρισελιέ μπαίνει στο συμβούλιο"
          },
          description: {
            en: "Recalled by Marie de' Medici, the bishop of Luçon Armand-Jean du Plessis, cardinal de Richelieu, enters the royal council of Louis XIII. Within months he is its head. For eighteen years he will rule the state with the formula of his Testament Politique: 'to ruin the Huguenot party, to abase the pride of the great, to raise the king's name'.",
            el: "Ανακαλούμενος από τη Μαρία των Μεδίκων, ο επίσκοπος του Λυσόν Αρμάν-Ζαν ντι Πλεσί, καρδινάλιος ντε Ρισελιέ, μπαίνει στο βασιλικό συμβούλιο του Λουδοβίκου ΙΓ΄. Σε μήνες είναι επικεφαλής του. Επί δεκαοκτώ χρόνια θα κυβερνά το κράτος με τη φόρμουλα του Πολιτικού του Διαθήκης: «να συντρίψω το κόμμα των Ουγενότων, να ταπεινώσω την υπερηφάνεια των μεγάλων, να υψώσω το όνομα του βασιλιά»."
          },
          extendedDescription: {
            en: "Richelieu survived repeated plots, above all the 'Day of Dupes' in November 1630, when the queen mother Marie de' Medici demanded his dismissal and Louis XIII instead exiled her. He strengthened royal power through provincial intendants, founded the Académie française in 1635, and that same year took Catholic France into the Thirty Years' War on the Protestant side against the Habsburgs. Novels such as Dumas' The Three Musketeers later made him the archetypal scheming cardinal.",
            el: "Ο Ρισελιέ επέζησε από επανειλημμένες συνωμοσίες, κυρίως την «Ημέρα των Εξαπατημένων» τον Νοέμβριο του 1630, όταν η βασιλομήτωρ Μαρία των Μεδίκων ζήτησε την απομάκρυνσή του και ο Λουδοβίκος ΙΓ΄ εξόρισε αντί γι' αυτόν εκείνη. Ενίσχυσε τη βασιλική εξουσία μέσω των επαρχιακών επιτρόπων (intendants), ίδρυσε τη Γαλλική Ακαδημία το 1635 και την ίδια χρονιά έβαλε την καθολική Γαλλία στον Τριακονταετή Πόλεμο στο πλευρό των προτεσταντών κατά των Αψβούργων. Μυθιστορήματα όπως «Οι Τρεις Σωματοφύλακες» του Δουμά τον έκαναν αργότερα το αρχέτυπο του δολοπλόκου καρδιναλίου."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1628,
      era: {
        en: "Siege of La Rochelle",
        el: "Πολιορκία της Λα Ροσέλ"
      },
      events: [
        {
          title: {
            en: "The Huguenot stronghold falls",
            el: "Το προπύργιο των Ουγενότων πέφτει"
          },
          description: {
            en: "After fourteen months of siege and a famous sea-wall built by Richelieu across the harbour mouth to bar the English relief fleet, the Huguenot port of La Rochelle surrenders. Of the city's twenty-eight thousand inhabitants, perhaps five thousand survive. The political and military rights granted at Nantes are stripped two years later by the Peace of Alès.",
            el: "Μετά από δεκατέσσερις μήνες πολιορκίας και ένα διάσημο θαλάσσιο τείχος που έχτισε ο Ρισελιέ μπροστά στο στόμιο του λιμανιού για να κλείσει τον αγγλικό στόλο βοηθείας, το ουγενοτικό λιμάνι της Λα Ροσέλ παραδίδεται. Από τους είκοσι οκτώ χιλιάδες κατοίκους της πόλης, ίσως πέντε χιλιάδες επιβιώνουν. Τα πολιτικά και στρατιωτικά δικαιώματα που χορηγήθηκαν στη Ναντ αφαιρούνται δύο χρόνια αργότερα με την Ειρήνη της Αλές."
          },
          extendedDescription: {
            en: "An English expedition under the Duke of Buckingham had tried and failed to relieve the Huguenots from the Île de Ré in 1627. Richelieu directed the siege in person, and the defiant mayor Jean Guiton held out until famine left the streets full of the dead. The Huguenots kept their freedom of worship, but no longer their fortified towns and armies — until Louis XIV revoked the Edict of Nantes altogether in 1685.",
            el: "Μια αγγλική εκστρατεία υπό τον δούκα του Μπάκιγχαμ είχε προσπαθήσει μάταια να βοηθήσει τους Ουγενότους από το νησί Ρε το 1627. Ο Ρισελιέ διηύθυνε ο ίδιος την πολιορκία, και ο ανυπότακτος δήμαρχος Ζαν Γκιτόν αντιστάθηκε ώσπου ο λιμός γέμισε τους δρόμους με νεκρούς. Οι Ουγενότοι διατήρησαν την ελευθερία της λατρείας τους, αλλά όχι πλέον τις οχυρωμένες πόλεις και τους στρατούς τους — ώσπου ο Λουδοβίκος ΙΔ΄ ανακάλεσε εντελώς το Διάταγμα της Νάντης το 1685."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1635,
      era: {
        en: "Entry into the Thirty Years War",
        el: "Είσοδος στον Τριακονταετή Πόλεμο"
      },
      events: [
        {
          title: {
            en: "France declares war on Spain",
            el: "Η Γαλλία κηρύσσει τον πόλεμο στην Ισπανία"
          },
          description: {
            en: "After two decades of subsidising the Protestant powers against the Habsburgs, Richelieu brings France openly into the Thirty Years War. The Spanish capture Corbie and reach Compiègne in 1636 before the tide turns; the war will run for twenty-four years and bleed France white.",
            el: "Μετά από δύο δεκαετίες επιδότησης των Προτεσταντικών δυνάμεων κατά των Αψβούργων, ο Ρισελιέ φέρνει τη Γαλλία ανοιχτά στον Τριακονταετή Πόλεμο. Οι Ισπανοί καταλαμβάνουν την Κορμπί και φτάνουν στο Κομπιέν το 1636 προτού η παλίρροια αντιστραφεί· ο πόλεμος θα διαρκέσει είκοσι τέσσερα χρόνια και θα αιμορραγήσει τη Γαλλία."
          },
          extendedDescription: {
            en: "The same decade saw the foundation of the Académie française (1635) to standardise the language, Descartes publish his Discours de la méthode (1637), Corneille première Le Cid (1637), and the financial expedients — taille, gabelle, élus, intendants — that built the bureaucratic state Richelieu willed to Mazarin and Louis XIV.",
            el: "Η ίδια δεκαετία είδε την ίδρυση της Académie française (1635) για την τυποποίηση της γλώσσας, τον Καρτέσιο να δημοσιεύει το Discours de la méthode (1637), τον Κορνέιγ να ανεβάζει το Le Cid (1637) και τα δημοσιονομικά μέσα — taille, gabelle, élus, intendants — που οικοδόμησαν το γραφειοκρατικό κράτος που ο Ρισελιέ άφησε στον Μαζαρέν και τον Λουδοβίκο ΙΔ΄."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1643,
      era: {
        en: "Accession of Louis XIV",
        el: "Άνοδος του Λουδοβίκου ΙΔ΄"
      },
      events: [
        {
          title: {
            en: "Rocroi and a four-year-old king",
            el: "Ροκρουά και ένας τετράχρονος βασιλιάς"
          },
          description: {
            en: "Five days after the death of Louis XIII, the young duc d'Enghien — the future Grand Condé — annihilates the Spanish tercios at Rocroi in the Ardennes. The new king, Louis XIV, is four years old; the regent is his mother Anne of Austria, and the government passes to Richelieu's Italian protégé, Cardinal Mazarin.",
            el: "Πέντε ημέρες μετά τον θάνατο του Λουδοβίκου ΙΓ΄, ο νεαρός δούκας ντ' Ενγκιάν — ο μελλοντικός Μέγας Κοντέ — εκμηδενίζει τα ισπανικά tercios στο Ροκρουά στις Αρδέννες. Ο νέος βασιλιάς, Λουδοβίκος ΙΔ΄, είναι τεσσάρων ετών· αντιβασίλισσα η μητέρα του Άννα της Αυστρίας, και η κυβέρνηση περνά στον Ιταλό προστατευόμενο του Ρισελιέ, καρδινάλιο Μαζαρέν."
          },
          extendedDescription: {
            en: "Rocroi broke the reputation of the Spanish infantry that had dominated European battlefields for more than a century. Mazarin's taxes and the regency's weakness led to the Fronde (1648–53), a series of revolts by the Parlement of Paris and the great nobles in which the child king was forced to flee his capital by night — an experience that left Louis XIV with a lasting distrust of Paris and the nobility. The Peace of Westphalia in 1648 gave France most of Alsace.",
            el: "Το Ροκρουά έσπασε τη φήμη του ισπανικού πεζικού που κυριαρχούσε στα ευρωπαϊκά πεδία μάχης για πάνω από έναν αιώνα. Οι φόροι του Μαζαρέν και η αδυναμία της αντιβασιλείας οδήγησαν στη Φρόντα (1648–53), μια σειρά εξεγέρσεων του Κοινοβουλίου του Παρισιού και των μεγάλων ευγενών, κατά την οποία ο ανήλικος βασιλιάς αναγκάστηκε να φύγει νύχτα από την πρωτεύουσά του — μια εμπειρία που άφησε στον Λουδοβίκο ΙΔ΄ μια διαρκή δυσπιστία προς το Παρίσι και τους ευγενείς. Η Ειρήνη της Βεστφαλίας το 1648 έδωσε στη Γαλλία το μεγαλύτερο μέρος της Αλσατίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1648,
      era: {
        en: "Westphalia and the Fronde",
        el: "Βεστφαλία και η Φροντ"
      },
      events: [
        {
          title: {
            en: "Peace abroad, civil war at home",
            el: "Ειρήνη στο εξωτερικό, εμφύλιος στο εσωτερικό"
          },
          description: {
            en: "The Peace of Westphalia ends the Thirty Years War; France keeps Alsace less Strasbourg, and emerges the leading power of Europe. Within weeks the parlement of Paris rises against the wartime taxes of Mazarin. The Fronde — first of the lawyers, then of the princes — will paralyse the regency for five years.",
            el: "Η Ειρήνη της Βεστφαλίας τερματίζει τον Τριακονταετή Πόλεμο· η Γαλλία κρατά την Αλσατία εκτός του Στρασβούργου και αναδεικνύεται κύρια δύναμη της Ευρώπης. Σε εβδομάδες το κοινοβούλιο του Παρισιού ξεσηκώνεται κατά των πολεμικών φόρων του Μαζαρέν. Η Φροντ — πρώτα των δικαστικών, μετά των πριγκίπων — θα παραλύσει την αντιβασιλεία επί πέντε χρόνια."
          },
          extendedDescription: {
            en: "Twice the boy-king and his mother fled Paris by night; once they hid at Saint-Germain. The memory of the Fronde shaped Louis XIV's lifelong distrust of Paris and of the great nobles, and his determination to take the court out into the country and lock up the princes in a court of his own making. Versailles is the answer to the Fronde.",
            el: "Δύο φορές ο μικρός βασιλιάς και η μητέρα του διέφυγαν από το Παρίσι τη νύχτα· μια φορά κρύφτηκαν στο Saint-Germain. Η μνήμη της Φροντ διαμόρφωσε τη δια βίου δυσπιστία του Λουδοβίκου ΙΔ΄ προς το Παρίσι και τους μεγάλους ευγενείς, και την αποφασιστικότητά του να βγάλει την αυλή έξω από την πόλη και να εγκλείσει τους πρίγκιπες σε μια αυλή δικής του δημιουργίας. Οι Βερσαλλίες είναι η απάντηση στη Φροντ."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1661,
      era: {
        en: "Personal Rule of Louis XIV",
        el: "Προσωπική Βασιλεία του Λουδοβίκου ΙΔ΄"
      },
      events: [
        {
          title: {
            en: "The king takes the helm; Fouquet falls",
            el: "Ο βασιλιάς αναλαμβάνει· ο Φουκέ πέφτει"
          },
          description: {
            en: "Mazarin dies in March. The twenty-two-year-old Louis XIV announces that he will rule without a first minister: 'L'État, c'est moi'. In September he has the over-mighty superintendent of finances Nicolas Fouquet — whose château of Vaux-le-Vicomte had eclipsed any of the crown's — arrested by d'Artagnan at Nantes. Colbert takes the finances.",
            el: "Ο Μαζαρέν πεθαίνει τον Μάρτιο. Ο εικοσιδυάχρονος Λουδοβίκος ΙΔ΄ ανακοινώνει ότι θα κυβερνά χωρίς πρώτο υπουργό: «L'État, c'est moi». Τον Σεπτέμβριο διατάζει τη σύλληψη του υπερόπτη γενικού επόπτη των οικονομικών Νικολά Φουκέ — του οποίου το château Vaux-le-Vicomte είχε επισκιάσει οποιοδήποτε του στέμματος — από τον ντ' Αρτανιάν στη Ναντ. Ο Κολμπέρ παίρνει τα οικονομικά."
          },
          extendedDescription: {
            en: "The fifty-four years of Louis's personal rule were the longest in European history. Under Colbert mercantilism — manufactures royales of Gobelins and Saint-Gobain, the East and West India Companies, the Code Noir, the building of the navy — sought to make the kingdom self-sufficient. Le Vau, Le Nôtre, and Le Brun, the men of Vaux, were taken into royal service to build Versailles.",
            el: "Τα πενήντα τέσσερα χρόνια προσωπικής βασιλείας του Λουδοβίκου ήταν η μακρότερη στην ευρωπαϊκή ιστορία. Υπό τον Κολμπέρ ο μερκαντιλισμός — manufactures royales των Γκομπλέν και του Σαιν-Γκομπέν, οι εταιρείες Ανατολικών και Δυτικών Ινδιών, ο Code Noir, η οικοδόμηση του στόλου — προσπάθησε να κάνει το βασίλειο αυτάρκες. Ο Λε Βω, ο Λε Νοτρ και ο Λε Μπρεν, οι άντρες του Βω, μπήκαν στη βασιλική υπηρεσία για να χτίσουν τις Βερσαλλίες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1668,
      era: {
        en: "War of Devolution",
        el: "Πόλεμος του Δικαιώματος Διαδοχής"
      },
      events: [
        {
          title: {
            en: "Aix-la-Chapelle and the Spanish frontier",
            el: "Άαχεν και η Ισπανική μεθόριος"
          },
          description: {
            en: "Claiming the Spanish Netherlands through his wife's right of devolution, Louis XIV invades in 1667. Turenne's army takes Lille, Tournai, and Douai in weeks. The Treaty of Aix-la-Chapelle gives France twelve Flemish fortresses — and starts a half-century of pushing the northern border outward.",
            el: "Διεκδικώντας τις Ισπανικές Κάτω Χώρες μέσω του δικαιώματος devolution της συζύγου του, ο Λουδοβίκος ΙΔ΄ εισβάλλει το 1667. Ο στρατός του Τυρέν καταλαμβάνει τη Λιλ, την Τουρνέ και το Ντουαί σε εβδομάδες. Η Συνθήκη του Άαχεν δίνει στη Γαλλία δώδεκα φλαμανδικά φρούρια — και ξεκινά μισό αιώνα ώθησης της βόρειας μεθορίου προς τα έξω."
          },
          extendedDescription: {
            en: "Louis's claim rested on a local inheritance custom of the Spanish Netherlands, stretched to mean that his wife Maria Theresa, daughter of Philip IV, should inherit before her half-brother. Alarmed at French expansion, England, the Dutch Republic and Sweden formed a Triple Alliance that pushed Louis to make peace quickly. Lille became French for good, and Vauban built there his great star-shaped citadel, the 'queen of citadels'; four years later Louis took revenge on the Dutch with a full-scale invasion.",
            el: "Η διεκδίκηση του Λουδοβίκου στηριζόταν σε ένα τοπικό κληρονομικό έθιμο των Ισπανικών Κάτω Χωρών, που ερμηνεύτηκε έτσι ώστε η σύζυγός του Μαρία Θηρεσία, κόρη του Φιλίππου Δ΄, να κληρονομεί πριν από τον ετεροθαλή αδελφό της. Ανήσυχες για τη γαλλική επέκταση, η Αγγλία, η Δημοκρατία των Κάτω Χωρών και η Σουηδία σχημάτισαν μια Τριπλή Συμμαχία που ώθησε τον Λουδοβίκο να συνάψει γρήγορα ειρήνη. Η Λιλ έγινε οριστικά γαλλική, και ο Βωμπάν έχτισε εκεί τη μεγάλη αστεροειδή ακρόπολή του, τη «βασίλισσα των ακροπόλεων»· τέσσερα χρόνια αργότερα ο Λουδοβίκος πήρε εκδίκηση από τους Ολλανδούς με μια εισβολή πλήρους κλίμακας."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1682,
      era: {
        en: "The Court at Versailles",
        el: "Η Αυλή στις Βερσαλλίες"
      },
      events: [
        {
          title: {
            en: "The king and court settle at Versailles",
            el: "Ο βασιλιάς και η αυλή εγκαθίστανται στις Βερσαλλίες"
          },
          description: {
            en: "On 6 May Louis XIV transfers his household and the government from Saint-Germain-en-Laye to the great new palace at Versailles. Some ten thousand courtiers, servants, and guards crowd into the gilded barracks. The most magnificent court in Europe is open.",
            el: "Στις 6 Μαΐου ο Λουδοβίκος ΙΔ΄ μεταφέρει το νοικοκυριό του και την κυβέρνηση από το Saint-Germain-en-Laye στο μεγάλο νέο ανάκτορο των Βερσαλλιών. Περίπου δέκα χιλιάδες αυλικοί, υπηρέτες και φρουροί συνωστίζονται στους χρυσοποίκιλτους στρατώνες. Η πιο μεγαλοπρεπής αυλή της Ευρώπης είναι ανοιχτή."
          },
          extendedDescription: {
            en: "The Galerie des Glaces of Hardouin-Mansart, the gardens of Le Nôtre, and Le Brun's plafonds proclaimed France's ascendancy in stone, water, and paint. The court — Saint-Simon's hothouse of grades, étiquette, factions — neutralised the great nobles by making proximity to the king the only road to honour. The whole apparatus is the political theatre of absolutism.",
            el: "Η Galerie des Glaces του Αρντουέν-Μανσάρ, οι κήποι του Λε Νοτρ και τα plafonds του Λε Μπρεν διακήρυτταν την υπεροχή της Γαλλίας σε πέτρα, νερό και χρώμα. Η αυλή — το θερμοκήπιο του Σαιν-Σιμόν με βαθμίδες, etiquette και φατρίες — εξουδετέρωσε τους μεγάλους ευγενείς κάνοντας την εγγύτητα στον βασιλιά τη μόνη οδό προς την τιμή. Ολόκληρος ο μηχανισμός είναι το πολιτικό θέατρο του απολυταρχισμού."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Vue_a%C3%A9rienne_du_domaine_de_Versailles_par_ToucanWings_-_Creative_Commons_By_Sa_3.0_-_081_(cropped).jpg?width=1024",
            alt: {
              en: "The Palace of Versailles",
              el: "Το Παλάτι των Βερσαλλιών"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1685,
      era: {
        en: "Revocation of the Edict of Nantes",
        el: "Ανάκληση του Εδίκτου της Ναντ"
      },
      events: [
        {
          title: {
            en: "Edict of Fontainebleau",
            el: "Έδικτο του Φοντενεμπλώ"
          },
          description: {
            en: "Louis XIV revokes his grandfather's Edict of Nantes. Protestant temples are demolished, pastors exiled within fifteen days, the laity forbidden to follow them; royal dragoons quarter on Huguenot households until they convert. Perhaps two hundred thousand French Protestants flee to the Netherlands, England, Prussia, the Cape, and the American colonies.",
            el: "Ο Λουδοβίκος ΙΔ΄ ανακαλεί το Έδικτο της Ναντ του παππού του. Οι προτεσταντικοί ναοί κατεδαφίζονται, οι πάστορες εξορίζονται μέσα σε δεκαπέντε ημέρες, οι λαϊκοί απαγορεύεται να τους ακολουθήσουν· βασιλικοί δραγόνοι στρατωνίζονται σε ουγενοτικά νοικοκυριά μέχρι να ασπαστούν τον Καθολικισμό. Ίσως διακόσιες χιλιάδες Γάλλοι Προτεστάντες φεύγουν προς τις Κάτω Χώρες, την Αγγλία, την Πρωσία, το Ακρωτήριο και τις αμερικανικές αποικίες."
          },
          extendedDescription: {
            en: "The Refuge took French manufacturing, printing, banking, watch-making, and silk skills abroad and turned much of Protestant Europe permanently hostile to the Sun King. In the Cévennes the Camisard war of 1702-1710 would show that the Huguenots had not been wholly broken at home. Vauban, Saint-Simon, and even Mme de Maintenon's confessors would in time call the revocation a colossal mistake.",
            el: "Η Refuge πήρε γαλλική μεταποίηση, τυπογραφία, τραπεζική, ωρολογοποιία και δεξιότητες μετάξης στο εξωτερικό και έστρεψε μεγάλο μέρος της προτεσταντικής Ευρώπης μόνιμα εχθρικό προς τον Βασιλέα Ήλιο. Στις Σεβέν ο πόλεμος των Καμιζάρ 1702-1710 θα δείξει ότι οι Ουγενότοι δεν είχαν εντελώς σπάσει στο εσωτερικό. Ο Βωμπάν, ο Σαιν-Σιμόν και ακόμη οι εξομολογητές της Μαντάμ ντε Μαιντενόν θα ονόμαζαν με τον καιρό την ανάκληση κολοσσιαίο σφάλμα."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1688,
      era: {
        en: "Nine Years War",
        el: "Πόλεμος των Εννέα Ετών"
      },
      events: [
        {
          title: {
            en: "The League of Augsburg against the Sun King",
            el: "Η Λίγκα του Άουγκσμπουργκ κατά του Βασιλιά Ηλίου"
          },
          description: {
            en: "Louis's invasion of the Palatinate triggers a great anti-French coalition under the Dutch stadholder William of Orange — who in the same year sails to England, deposes James II, and joins the British crown to the coalition. The Nine Years War (1688-1697) sees French frontiers strained from Catalonia to the Rhine; Vauban's fortresses hold the line.",
            el: "Η εισβολή του Λουδοβίκου στο Παλατινάτο πυροδοτεί μεγάλο αντιγαλλικό συνασπισμό υπό τον Ολλανδό στάτχολντερ Γουλιέλμο της Οράγγης — που την ίδια χρονιά αποπλέει για την Αγγλία, εκθρονίζει τον Ιάκωβο Β΄ και προσθέτει το βρετανικό στέμμα στη συμμαχία. Ο Πόλεμος των Εννέα Ετών (1688-1697) βλέπει τα γαλλικά σύνορα να καταπονούνται από την Καταλωνία ως τον Ρήνο· τα φρούρια του Βωμπάν κρατούν τη γραμμή."
          },
          extendedDescription: {
            en: "Three years earlier Louis had revoked the Edict of Nantes, driving some 200,000 Huguenots into exile in the Dutch Republic, England, Prussia and beyond, and turning Protestant Europe against him. To deny the Palatinate to his enemies, French troops systematically burned towns and villages, including the castle of Heidelberg. The war ended in 1697 with the Peace of Ryswick, but it drained France, which in 1693–94 also suffered a famine that killed well over a million people.",
            el: "Τρία χρόνια νωρίτερα ο Λουδοβίκος είχε ανακαλέσει το Διάταγμα της Νάντης, στέλνοντας περίπου 200.000 Ουγενότους στην εξορία στη Δημοκρατία των Κάτω Χωρών, στην Αγγλία, στην Πρωσία και αλλού, και στρέφοντας την προτεσταντική Ευρώπη εναντίον του. Για να στερήσουν το Παλατινάτο από τους εχθρούς του, τα γαλλικά στρατεύματα έκαψαν συστηματικά πόλεις και χωριά, μεταξύ αυτών και το κάστρο της Χαϊδελβέργης. Ο πόλεμος έληξε το 1697 με την Ειρήνη του Ράισβαϊκ, αλλά εξάντλησε τη Γαλλία, η οποία το 1693–94 υπέφερε επίσης από έναν λιμό που σκότωσε πολύ περισσότερους από ένα εκατομμύριο ανθρώπους."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1704,
      era: {
        en: "War of the Spanish Succession",
        el: "Πόλεμος της Ισπανικής Διαδοχής"
      },
      events: [
        {
          title: {
            en: "Disaster at Blenheim",
            el: "Καταστροφή στο Μπλένχαϊμ"
          },
          description: {
            en: "On the Danube near Höchstädt, Marlborough and Prince Eugene of Savoy annihilate Marshal Tallard's army at the Battle of Blenheim. France loses thirty thousand men in a single day and her Bavarian ally. Defeats at Ramillies (1706), Oudenarde (1708), and Malplaquet (1709) follow.",
            el: "Στον Δούναβη κοντά στο Χόχστετ, ο Μάρλμπορο και ο πρίγκιπας Ευγένιος της Σαβοΐας εκμηδενίζουν τον στρατό του στρατάρχη Ταλάρ στη Μάχη του Μπλένχαϊμ. Η Γαλλία χάνει τριάντα χιλιάδες άνδρες σε μία ημέρα και τον Βαυαρό σύμμαχό της. Ακολουθούν οι ήττες στο Ραμιγύ (1706), στο Ουντενάρντ (1708) και στο Μαλπλακέ (1709)."
          },
          extendedDescription: {
            en: "The war began with the Bourbon claim to the Spanish empire — the duc d'Anjou as Philip V — and threatened to enthrone Louis XIV's grandson over half the world. The combined Anglo-Dutch-Imperial coalition came near to invading France; the famine winter of 1709 was the bleakest in living memory. Yet the kingdom held, and at Denain in 1712 Villars at last broke the allies.",
            el: "Ο πόλεμος άρχισε με τη βουρβωνική διεκδίκηση της ισπανικής αυτοκρατορίας — ο δούκας ντ' Ανζού ως Φίλιππος Ε΄ — και απείλησε να ενθρονίσει τον εγγονό του Λουδοβίκου ΙΔ΄ πάνω σε μισό κόσμο. Ο αγγλο-ολλανδο-αυτοκρατορικός συνασπισμός έφτασε κοντά στην εισβολή στη Γαλλία· ο χειμώνας λιμού του 1709 ήταν ο πιο μαύρος στη ζωντανή μνήμη. Όμως το βασίλειο άντεξε, και στο Ντενέν το 1712 ο Βιλάρ έσπασε επιτέλους τους συμμάχους."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1715,
      era: {
        en: "Death of the Sun King",
        el: "Θάνατος του Βασιλιά Ηλίου"
      },
      events: [
        {
          title: {
            en: "Louis XIV dies; the Regency begins",
            el: "Ο Λουδοβίκος ΙΔ΄ πεθαίνει· αρχίζει η Αντιβασιλεία"
          },
          description: {
            en: "On 1 September Louis XIV dies of gangrene at Versailles, four days short of his seventy-seventh birthday. His son and grandson having predeceased him, his great-grandson — a five-year-old Louis XV — succeeds. Power passes to the dead king's nephew, Philippe d'Orléans, as regent; the court drifts back to Paris.",
            el: "Την 1η Σεπτεμβρίου ο Λουδοβίκος ΙΔ΄ πεθαίνει από γάγγραινα στις Βερσαλλίες, τέσσερις ημέρες πριν τα εβδομήντα έβδομα γενέθλιά του. Ο γιος του και ο εγγονός του έχοντας προαπεβιώσει, ο δισέγγονός του — ο πεντάχρονος Λουδοβίκος ΙΕ΄ — διαδέχεται. Η εξουσία περνά στον ανιψιό του νεκρού βασιλιά, Φιλίππο της Ορλεάνης, ως αντιβασιλέα· η αυλή επιστρέφει στο Παρίσι."
          },
          extendedDescription: {
            en: "The Treaties of Utrecht (1713) and Rastatt (1714) had already settled the long war: the Bourbon Philip V kept Spain and the Indies on condition the crowns would never unite, but Spain's European empire was broken up — Spanish Netherlands, Naples, Milan, and Sardinia went to the Habsburgs; Gibraltar and Minorca, and a slice of the slave trade through the asiento, to Britain. The price of glory had been paid.",
            el: "Οι Συνθήκες της Ουτρέχτης (1713) και του Ραστάτ (1714) είχαν ήδη ρυθμίσει τον μακρύ πόλεμο: ο Βουρβώνος Φίλιππος Ε΄ κράτησε την Ισπανία και τις Ινδίες με τον όρο ότι τα στέμματα δεν θα ενώνονταν ποτέ, αλλά η ευρωπαϊκή αυτοκρατορία της Ισπανίας διασπάστηκε — οι Ισπανικές Κάτω Χώρες, η Νάπολη, το Μιλάνο και η Σαρδηνία πέρασαν στους Αψβούργους· το Γιβραλτάρ και η Μινόρκα, και ένα κομμάτι του δουλεμπορίου μέσω του asiento, στους Βρετανούς. Η τιμή της δόξας είχε πληρωθεί."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1720,
      era: {
        en: "The Mississippi Bubble",
        el: "Η Φούσκα του Μισισιπή"
      },
      events: [
        {
          title: {
            en: "John Law's system collapses",
            el: "Το σύστημα του Τζον Λο καταρρέει"
          },
          description: {
            en: "The Scottish financier John Law's experiment in paper money and Mississippi Company shares — backed by claims on Louisiana — collapses in panic in the rue Quincampoix. The first French paper-money bank fails; investors are ruined; and Frenchmen will distrust banknotes for a century.",
            el: "Το πείραμα του Σκωτσέζου τραπεζίτη Τζον Λο σε χαρτονομίσματα και μετοχές της Εταιρείας του Μισισιπή — με αντίκρισμα σε αξιώσεις επί της Λουιζιάνας — καταρρέει σε πανικό στη rue Quincampoix. Η πρώτη γαλλική τράπεζα χαρτονομίσματος αποτυγχάνει· οι επενδυτές καταστρέφονται· και οι Γάλλοι θα δυσπιστούν προς τα τραπεζογραμμάτια επί έναν αιώνα."
          },
          extendedDescription: {
            en: "Law, a Scottish gambler and economist who had fled Britain after killing a man in a duel, persuaded the regent, the Duke of Orléans, to let him found a bank issuing paper money in 1716 and then to take over the Mississippi Company and much of the state's debt. Shares soared nearly twentyfold, giving the language the word 'millionaire', and the company founded New Orleans in 1718. After the crash Law fled France in disguise and died poor in Venice in 1729.",
            el: "Ο Λω, Σκωτσέζος τζογαδόρος και οικονομολόγος που είχε φύγει από τη Βρετανία αφού σκότωσε έναν άνδρα σε μονομαχία, έπεισε τον αντιβασιλέα, δούκα της Ορλεάνης, να του επιτρέψει να ιδρύσει μια τράπεζα που εξέδιδε χαρτονομίσματα το 1716 και έπειτα να αναλάβει την Εταιρεία του Μισισιπή και μεγάλο μέρος του κρατικού χρέους. Οι μετοχές εκτινάχθηκαν σχεδόν εικοσαπλάσια, δίνοντας στη γλώσσα τη λέξη «εκατομμυριούχος», και η εταιρεία ίδρυσε τη Νέα Ορλεάνη το 1718. Μετά την κατάρρευση ο Λω διέφυγε από τη Γαλλία μεταμφιεσμένος και πέθανε φτωχός στη Βενετία το 1729."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1751,
      era: {
        en: "Age of Enlightenment",
        el: "Εποχή του Διαφωτισμού"
      },
      events: [
        {
          title: {
            en: "The Encyclopédie appears",
            el: "Η Encyclopédie εμφανίζεται"
          },
          description: {
            en: "Denis Diderot and Jean d'Alembert publish the first volume of the Encyclopédie, ou Dictionnaire raisonné des sciences, des arts et des métiers. By 1772 it will run to seventeen volumes of text and eleven of plates. Voltaire, Rousseau, Montesquieu, d'Holbach, Quesnay — the great names of the French Enlightenment — contribute.",
            el: "Ο Ντενί Ντιντερό και ο Ζαν ντ' Αλαμπέρ δημοσιεύουν τον πρώτο τόμο της Encyclopédie, ou Dictionnaire raisonné des sciences, des arts et des métiers. Μέχρι το 1772 θα φτάσει τους δεκαεπτά τόμους κειμένου και τους έντεκα πινάκων. Βολταίρος, Ρουσσώ, Μοντεσκιέ, ντ' Ολμπάχ, Κενέ — τα μεγάλα ονόματα του γαλλικού Διαφωτισμού — συνεισφέρουν."
          },
          extendedDescription: {
            en: "Twice suppressed by the royal council, the Encyclopédie was the great public face of the philosophes' campaign against superstition, privilege, and arbitrary power. Montesquieu's Esprit des lois (1748), Voltaire's Lettres anglaises (1734), Rousseau's Du contrat social (1762), and the Physiocrats' laissez-faire economics were the manifestos of a public opinion that the monarchy did not know how to answer.",
            el: "Δύο φορές καταργηθείσα από το βασιλικό συμβούλιο, η Encyclopédie ήταν το μεγάλο δημόσιο πρόσωπο της εκστρατείας των philosophes κατά της δεισιδαιμονίας, του προνομίου και της αυθαίρετης εξουσίας. Το Esprit des lois του Μοντεσκιέ (1748), τα Lettres anglaises του Βολταίρου (1734), το Du contrat social του Ρουσσώ (1762) και η οικονομία laissez-faire των Φυσιοκρατών ήταν τα μανιφέστα μιας κοινής γνώμης στην οποία η μοναρχία δεν ήξερε να απαντήσει."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1763,
      era: {
        en: "Loss of the First Colonial Empire",
        el: "Απώλεια της Πρώτης Αποικιακής Αυτοκρατορίας"
      },
      events: [
        {
          title: {
            en: "The Treaty of Paris and the loss of New France",
            el: "Η Συνθήκη του Παρισιού και η απώλεια της Νέας Γαλλίας"
          },
          description: {
            en: "By the Treaty of Paris ending the Seven Years War, France cedes Canada and all her holdings east of the Mississippi to Britain, and Louisiana to her Bourbon ally Spain. New France — Quebec, Montreal, the Great Lakes, the Ohio country — is gone. The defeat at Quebec on the Plains of Abraham (1759) had already been decisive.",
            el: "Με τη Συνθήκη του Παρισιού που τερματίζει τον Επταετή Πόλεμο, η Γαλλία παραχωρεί τον Καναδά και όλες τις κτήσεις της ανατολικά του Μισισιπή στη Βρετανία, και τη Λουιζιάνα στον Βουρβωνικό σύμμαχό της Ισπανία. Η Νέα Γαλλία — Κεμπέκ, Μόντρεαλ, οι Μεγάλες Λίμνες, η χώρα του Οχάιο — έχει εκλείψει. Η ήττα στο Κεμπέκ στα Πεδία του Αβραάμ (1759) ήταν ήδη αποφασιστική."
          },
          extendedDescription: {
            en: "France kept the small but valuable sugar islands of Guadeloupe and Martinique, the slave fortress of Gorée, and fishing rights on the Grand Banks. Voltaire's famous dismissal of 'a few acres of snow' captures the misjudgement: the loss of empire would feed the revanchism that drew Vergennes and Louis XVI into the American war fifteen years later.",
            el: "Η Γαλλία κράτησε τα μικρά αλλά πολύτιμα νησιά ζάχαρης της Γουαδελούπης και της Μαρτινίκας, το δουλεμπορικό φρούριο της Γκορέ και τα δικαιώματα αλιείας στα Grand Banks. Η περίφημη απόρριψη του Βολταίρου για «μερικά στρέμματα χιονιού» συμπυκνώνει την κρίση: η απώλεια της αυτοκρατορίας θα τροφοδοτούσε τον αναθεωρητισμό που έσυρε τον Βερζέν και τον Λουδοβίκο ΙΣΤ΄ στον αμερικανικό πόλεμο δεκαπέντε χρόνια αργότερα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1774,
      era: {
        en: "Accession of Louis XVI",
        el: "Άνοδος του Λουδοβίκου ΙΣΤ΄"
      },
      events: [
        {
          title: {
            en: "The well-meaning king takes the throne",
            el: "Ο καλόψυχος βασιλιάς ανεβαίνει στον θρόνο"
          },
          description: {
            en: "Louis XV dies of smallpox at Versailles on 10 May. His grandson, the nineteen-year-old Louis XVI, succeeds, with the young Austrian princess Marie-Antoinette as queen. He recalls the parlements, appoints Turgot to the finances, and is hailed as the king of a new beginning.",
            el: "Ο Λουδοβίκος ΙΕ΄ πεθαίνει από ευλογιά στις Βερσαλλίες στις 10 Μαΐου. Ο εγγονός του, ο δεκαεννιάχρονος Λουδοβίκος ΙΣΤ΄, διαδέχεται, με τη νεαρή Αυστριακή πριγκίπισσα Μαρία-Αντουανέτα ως βασίλισσα. Ανακαλεί τα κοινοβούλια, διορίζει τον Τυργκώ στα οικονομικά και επευφημείται ως ο βασιλιάς μιας νέας αρχής."
          },
          extendedDescription: {
            en: "Turgot, an economist of the Enlightenment, freed the grain trade and in 1776 proposed abolishing the forced road labour of the corvée and the privileges of the guilds. A bad harvest brought riots in the 'Flour War' of 1775, and the resistance of the parlements and the court led the king to dismiss him in 1776. France's costly support for the American Revolution from 1778 then deepened the debt that would bring the monarchy to crisis.",
            el: "Ο Τυργκό, οικονομολόγος του Διαφωτισμού, απελευθέρωσε το εμπόριο των σιτηρών και το 1776 πρότεινε την κατάργηση της αγγαρείας στην κατασκευή δρόμων και των προνομίων των συντεχνιών. Μια κακή σοδειά έφερε ταραχές στον «Πόλεμο του Αλευριού» του 1775, και η αντίσταση των κοινοβουλίων και της αυλής οδήγησε τον βασιλιά να τον απομακρύνει το 1776. Η δαπανηρή στήριξη της Γαλλίας στην Αμερικανική Επανάσταση από το 1778 βάθυνε έπειτα το χρέος που θα έφερνε τη μοναρχία σε κρίση."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1778,
      era: {
        en: "The American Alliance",
        el: "Η Αμερικανική Συμμαχία"
      },
      events: [
        {
          title: {
            en: "France enters the American war",
            el: "Η Γαλλία μπαίνει στον αμερικανικό πόλεμο"
          },
          description: {
            en: "After Burgoyne's surrender at Saratoga, the foreign minister Vergennes signs treaties of alliance and commerce with Benjamin Franklin's American commissioners. The fleets of Suffren in the Indies and de Grasse at the Chesapeake, the army of Rochambeau in Virginia, give the Americans the victory at Yorktown in 1781.",
            el: "Μετά την παράδοση του Μπεργκόυν στη Σαρατόγκα, ο υπουργός εξωτερικών Βερζέν υπογράφει συνθήκες συμμαχίας και εμπορίου με τους Αμερικανούς απεσταλμένους του Μπέντζαμιν Φραγκλίνου. Οι στόλοι του Σιφρέν στις Ινδίες και του ντε Γκρας στη Σεσαπίκ, ο στρατός του Ροσαμπώ στη Βιρτζίνια, δίνουν στους Αμερικανούς τη νίκη στη Γιόρκταουν το 1781."
          },
          extendedDescription: {
            en: "The peace of Paris (1783) returned to France little more than Tobago and Senegal, but it had broken Britain's American empire and avenged the Treaty of Paris of 1763. The price was financial ruin. The veterans came home as enthusiasts of an American liberty their own king did not yet know how to grant; Lafayette would soon command the first National Guard of revolutionary Paris.",
            el: "Η ειρήνη του Παρισιού (1783) επέστρεψε στη Γαλλία λίγο περισσότερο από το Τομπάγκο και τη Σενεγάλη, αλλά είχε σπάσει τη βρετανική αμερικανική αυτοκρατορία και είχε εκδικηθεί τη Συνθήκη του Παρισιού του 1763. Το τίμημα ήταν δημοσιονομική καταστροφή. Οι βετεράνοι γύρισαν σπίτι ως ένθερμοι μιας αμερικανικής ελευθερίας που ο ίδιος ο βασιλιάς τους δεν ήξερε ακόμη πώς να χορηγήσει· ο Λαφαγέτ θα διοικούσε σύντομα την πρώτη Εθνοφρουρά του επαναστατικού Παρισιού."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1783,
      era: {
        en: "Twilight of the Ancien Régime",
        el: "Λυκόφως του Παλαιού Καθεστώτος"
      },
      events: [
        {
          title: {
            en: "The Montgolfier brothers fly",
            el: "Οι αδελφοί Μομγκολφιέ πετούν"
          },
          description: {
            en: "On 21 November Pilâtre de Rozier and the marquis d'Arlandes ascend over Paris in the Montgolfier brothers' hot-air balloon. Benjamin Franklin watches from the Tuileries. Twelve days earlier the Treaty of Paris had been signed with Britain. The kingdom is full of light, and broke.",
            el: "Στις 21 Νοεμβρίου ο Πιλάτρ ντε Ροζιέ και ο μαρκήσιος ντ' Αρλάντ ανεβαίνουν πάνω από το Παρίσι με το αερόστατο θερμού αέρα των αδελφών Μομγκολφιέ. Ο Μπέντζαμιν Φραγκλίνος παρακολουθεί από τα Τυιλερί. Δώδεκα ημέρες νωρίτερα είχε υπογραφεί η Συνθήκη του Παρισιού με τη Βρετανία. Το βασίλειο είναι γεμάτο φως — και χρεοκοπημένο."
          },
          extendedDescription: {
            en: "By 1786 Calonne reckoned the deficit at a hundred and twelve million livres on revenues of four hundred and seventy-five. Half the budget was service on the war debt. Calonne and his successor Loménie de Brienne tried to make the privileged orders pay; the Assembly of Notables refused; the parlements followed. By 1788 the only way to raise taxes was to summon the Estates General — and that was, in the end, the political end of the Ancien Régime.",
            el: "Μέχρι το 1786 ο Καλόν υπολόγιζε το έλλειμμα σε εκατόν δώδεκα εκατομμύρια livres σε έσοδα τετρακοσίων εβδομήντα πέντε. Το ήμισυ του προϋπολογισμού ήταν τόκοι του πολεμικού χρέους. Ο Καλόν και ο διάδοχός του Λομενί ντε Μπριέν προσπάθησαν να βάλουν τα προνομιούχα τάγματα να πληρώσουν· η Συνέλευση των Επιφανών αρνήθηκε· τα κοινοβούλια ακολούθησαν. Μέχρι το 1788 ο μόνος τρόπος να αυξηθούν οι φόροι ήταν να συγκληθούν οι Γενικές Συνελεύσεις των Τάγματων — και αυτό ήταν, στο τέλος, το πολιτικό τέλος του Παλαιού Καθεστώτος."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1789,
      era: {
        en: "Calling of the Estates General",
        el: "Σύγκληση των Γενικών Συνελεύσεων"
      },
      events: [
        {
          title: {
            en: "The Estates General meet at Versailles",
            el: "Οι Γενικές Συνελεύσεις συνέρχονται στις Βερσαλλίες"
          },
          description: {
            en: "On 5 May, in the Salle des Menus Plaisirs at Versailles, Louis XVI opens the Estates General — the first since 1614. Twelve hundred deputies in three orders, six hundred for the Third Estate, hear a lacklustre speech on financial reform. The cahiers de doléances of the spring sit beside them, full of an angrier program.",
            el: "Στις 5 Μαΐου, στη Salle des Menus Plaisirs των Βερσαλλιών, ο Λουδοβίκος ΙΣΤ΄ ανοίγει τις Γενικές Συνελεύσεις — τις πρώτες από το 1614. Χίλιοι διακόσιοι βουλευτές σε τρία τάγματα, εξακόσιοι για το Τρίτο Τάγμα, ακούν έναν άχρωμο λόγο για δημοσιονομική μεταρρύθμιση. Τα cahiers de doléances της άνοιξης βρίσκονται δίπλα τους, γεμάτα ένα πιο οργισμένο πρόγραμμα."
          },
          extendedDescription: {
            en: "Within six weeks the Third Estate would proclaim itself the National Assembly, take the Tennis Court Oath, and refuse to dissolve; within two months Paris would storm the Bastille. The Ancien Régime — fifty thousand judicial offices, fifteen hundred forms of weight and measure, three hundred forms of personal status, all the carefully accumulated privileges of a thousand years — would be swept away in a single August night. But that is a story for another period.",
            el: "Σε έξι εβδομάδες το Τρίτο Τάγμα θα αυτοανακηρυσσόταν Εθνοσυνέλευση, θα έδινε τον Όρκο του Σφαιριστηρίου και θα αρνιόταν να διαλυθεί· σε δύο μήνες το Παρίσι θα κυρίευε τη Βαστίλη. Το Παλαιό Καθεστώς — πενήντα χιλιάδες δικαστικά αξιώματα, χίλιες πεντακόσιες μορφές μέτρων και σταθμών, τριακόσιες μορφές προσωπικής ιδιότητας, όλα τα προσεκτικά συσσωρευμένα προνόμια χιλίων ετών — θα παρασυρόταν σε μία αυγουστιάτικη νύχτα. Αλλά αυτή είναι μια ιστορία για άλλη περίοδο."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
