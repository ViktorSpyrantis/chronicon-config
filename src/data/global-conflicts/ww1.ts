/** World War I — Α΄ Παγκόσμιος Πόλεμος · Global Conflicts */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const WW1 = {
  id: "ww1" as const,
  label: {
    en: "World War I",
    el: "Α΄ Παγκόσμιος Πόλεμος"
  },
  supertitle: {
    en: "The Great War",
    el: "Ο Μεγάλος Πόλεμος"
  },
  title: {
    en: "The First World War",
    el: "Ο Α΄ Παγκόσμιος Πόλεμος"
  },
  subtitle: {
    en: "From the assassination at Sarajevo to the armistice in the Forest of Compiègne — four years of industrial war that toppled four empires, killed seventeen million people, and broke the long European peace of the nineteenth century. Slide across the years to read the major events that reshaped the modern world.",
    el: "Από τη δολοφονία στο Σεράγεβο έως την ανακωχή στο δάσος της Κομπιένης — τέσσερα χρόνια βιομηχανικού πολέμου που γκρέμισαν τέσσερις αυτοκρατορίες, σκότωσαν δεκαεπτά εκατομμύρια ανθρώπους και έσπασαν τη μακρά ευρωπαϊκή ειρήνη του δέκατου ένατου αιώνα. Μετακινηθείτε ανάμεσα στα έτη για να διαβάσετε τα γεγονότα που διαμόρφωσαν τον σύγχρονο κόσμο."
  },
  menuDescription: {
    en: "One assassination in Sarajevo, four years of trenches, and four empires gone.",
    el: "Μια δολοφονία στο Σεράγεβο, τέσσερα χρόνια χαρακωμάτων και τέσσερις αυτοκρατορίες που χάθηκαν."
  },
  footerLabel: {
    en: "World War I · 1914-1918",
    el: "Α΄ Παγκόσμιος Πόλεμος · 1914-1918"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "World War I",
    el: "Α΄ Παγκόσμιος Πόλεμος"
  },
  theme: THEMES.onyx,
  timeline: [
    {
      year: 1914,
      month: 6,
      era: {
        en: "Outbreak",
        el: "Έκρηξη του Πολέμου"
      },
      events: [
        {
          title: {
            en: "Assassination at Sarajevo",
            el: "Δολοφονία στο Σεράγεβο"
          },
          description: {
            en: "Archduke Franz Ferdinand of Austria-Hungary and his wife Sophie are shot dead in Sarajevo on 28 June by Gavrilo Princip, a Bosnian Serb nationalist.",
            el: "Ο Αρχιδούκας Φραγκίσκος Φερδινάνδος της Αυστροουγγαρίας και η σύζυγός του Σόφια δολοφονούνται στο Σεράγεβο στις 28 Ιουνίου από τον Γκαβρίλο Πρίντσιπ, Σερβοβόσνιο εθνικιστή."
          },
          extendedDescription: {
            en: "Princip belonged to the Young Bosnia movement, supplied with weapons by the Serbian Black Hand secret society. The Habsburg court used the murder as a pretext to crush Serbian influence in the Balkans. After Berlin's 'blank cheque' of 5 July promising unconditional support, Vienna delivered an ultimatum designed to be rejected, then declared war on Serbia on 28 July — setting Europe's alliance system in motion.",
            el: "Ο Πρίντσιπ ανήκε στο κίνημα «Νεαρά Βοσνία», εφοδιασμένο με όπλα από τη σερβική μυστική οργάνωση «Μαύρη Χείρα». Η αυλή των Αψβούργων χρησιμοποίησε τη δολοφονία ως πρόσχημα για να συντρίψει τη σερβική επιρροή στα Βαλκάνια. Έπειτα από τη «λευκή επιταγή» του Βερολίνου στις 5 Ιουλίου, η Βιέννη επέδωσε τελεσίγραφο σχεδιασμένο να απορριφθεί και κήρυξε τον πόλεμο στη Σερβία στις 28 Ιουλίου — θέτοντας σε κίνηση το ευρωπαϊκό σύστημα συμμαχιών."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1914,
      month: 8,
      era: {
        en: "Outbreak",
        el: "Έκρηξη του Πολέμου"
      },
      events: [
        {
          title: {
            en: "Europe goes to war",
            el: "Η Ευρώπη στον πόλεμο"
          },
          description: {
            en: "Within a week the alliance system pulls in Russia, Germany, France, and Britain. Germany invades neutral Belgium on 4 August, triggering British entry into the war.",
            el: "Μέσα σε μία εβδομάδα το σύστημα συμμαχιών παρασύρει σε πόλεμο Ρωσία, Γερμανία, Γαλλία και Βρετανία. Η Γερμανία εισβάλλει στο ουδέτερο Βέλγιο στις 4 Αυγούστου, προκαλώντας τη βρετανική είσοδο στον πόλεμο."
          },
          extendedDescription: {
            en: "The Schlieffen Plan called for a lightning sweep through Belgium to envelop Paris before turning east against Russia. German violation of Belgian neutrality — guaranteed by the 1839 Treaty of London — gave the Asquith government its casus belli. By mid-August the Western Front stretched from the Channel to Switzerland, and on the Eastern Front the Russian First and Second Armies advanced into East Prussia, only to be annihilated at Tannenberg (26-30 August) by Hindenburg and Ludendorff.",
            el: "Το Σχέδιο Σλίφεν προέβλεπε αστραπιαία διείσδυση μέσω Βελγίου για την κύκλωση του Παρισιού πριν στραφεί ανατολικά κατά της Ρωσίας. Η γερμανική παραβίαση της βελγικής ουδετερότητας — εγγυημένης από τη Συνθήκη του Λονδίνου του 1839 — έδωσε στην κυβέρνηση Άσκουιθ το casus belli. Μέχρι τα μέσα Αυγούστου το Δυτικό Μέτωπο εκτεινόταν από τη Μάγχη μέχρι την Ελβετία, ενώ στο Ανατολικό Μέτωπο η ρωσική Πρώτη και Δεύτερη Στρατιά προήλασαν στην Ανατολική Πρωσία, μόνο για να εξοντωθούν στο Τάννενμπεργκ (26-30 Αυγούστου) από τους Χίντενμπουργκ και Λούντεντορφ."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1914,
      month: 9,
      era: {
        en: "Outbreak",
        el: "Έκρηξη του Πολέμου"
      },
      events: [
        {
          title: {
            en: "First Battle of the Marne",
            el: "Πρώτη Μάχη του Μάρνη"
          },
          description: {
            en: "From 5-12 September French and British forces halt the German advance forty kilometres from Paris, ending hopes of a short war.",
            el: "Από 5-12 Σεπτεμβρίου γαλλικές και βρετανικές δυνάμεις σταματούν τη γερμανική προέλαση σαράντα χιλιόμετρα από το Παρίσι, τερματίζοντας τις ελπίδες σύντομου πολέμου."
          },
          extendedDescription: {
            en: "General Joffre's counter-stroke, including the famous Paris taxis carrying reserves to the front, drove the German First and Second Armies back to the Aisne. Both sides then dug in. The 'race to the sea' that followed extended a continuous line of trenches from the North Sea to the Swiss frontier — the geography of stalemate that would define the next four years.",
            el: "Η αντεπίθεση του στρατηγού Ζοφρ, με τα φημισμένα ταξί του Παρισιού να μεταφέρουν εφεδρείες στο μέτωπο, απώθησε την Α΄ και Β΄ Γερμανική Στρατιά στον Αιν. Και οι δύο πλευρές οχυρώθηκαν. Ο «δρόμος προς τη θάλασσα» που ακολούθησε επέκτεινε τη συνεχή γραμμή χαρακωμάτων από τη Βόρεια Θάλασσα έως τα ελβετικά σύνορα — η γεωγραφία του αδιεξόδου που θα όριζε τα επόμενα τέσσερα χρόνια."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1914,
      month: 10,
      era: {
        en: "Outbreak",
        el: "Έκρηξη του Πολέμου"
      },
      events: [
        {
          title: {
            en: "Ottoman Empire enters the war",
            el: "Η Οθωμανική Αυτοκρατορία εισέρχεται στον πόλεμο"
          },
          description: {
            en: "On 29 October Ottoman warships, joined by two German cruisers, bombard Russian Black Sea ports, bringing the Sublime Porte into the war on the Central Powers' side.",
            el: "Στις 29 Οκτωβρίου οθωμανικά πολεμικά πλοία, μαζί με δύο γερμανικά καταδρομικά, βομβαρδίζουν ρωσικά λιμάνια στη Μαύρη Θάλασσα, φέρνοντας την Υψηλή Πύλη στον πόλεμο στο πλευρό των Κεντρικών Δυνάμεων."
          },
          extendedDescription: {
            en: "The decision of Enver Pasha and the Young Turk triumvirate opened new theatres of war — the Caucasus, Mesopotamia, Sinai, and the Dardanelles. It cut Russia off from her western allies through the Black Sea, accelerating the empire's economic collapse, and exposed Christian minorities, especially the Armenians, to catastrophic violence.",
            el: "Η απόφαση του Ενβέρ Πασά και της τριανδρίας των Νεοτούρκων άνοιξε νέα θέατρα πολέμου — Καύκασος, Μεσοποταμία, Σινά και Δαρδανέλλια. Απέκοψε τη Ρωσία από τους δυτικούς συμμάχους της μέσω της Μαύρης Θάλασσας, επιταχύνοντας την οικονομική κατάρρευση της αυτοκρατορίας, και εξέθεσε τις χριστιανικές μειονότητες, ιδίως τους Αρμενίους, σε καταστροφική βία."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1915,
      month: 4,
      era: {
        en: "Stalemate & New Fronts",
        el: "Αδιέξοδο & Νέα Μέτωπα"
      },
      events: [
        {
          title: {
            en: "Second Battle of Ypres — first poison gas",
            el: "Β΄ Μάχη του Υπρ — πρώτη χρήση δηλητηριωδών αερίων"
          },
          description: {
            en: "On 22 April the German army releases 168 tons of chlorine gas against French colonial troops at Ypres, opening the era of chemical warfare.",
            el: "Στις 22 Απριλίου ο γερμανικός στρατός απελευθερώνει 168 τόνους χλωρίου εναντίον γαλλικών αποικιακών στρατευμάτων στο Υπρ, εγκαινιάζοντας την εποχή του χημικού πολέμου."
          },
          extendedDescription: {
            en: "A yellow-green cloud drifted over a six-kilometre stretch of front, killing or routing the defenders and tearing a gap in the Allied line. German infantry, themselves unprotected, hesitated to exploit the breakthrough. Within months all combatants were producing gas weapons — chlorine, phosgene, and, from 1917, mustard gas — and respirators became standard equipment.",
            el: "Ένα κιτρινοπράσινο σύννεφο διέσχισε ένα μέτωπο έξι χιλιομέτρων, σκοτώνοντας ή διαλύοντας τους αμυνομένους και ανοίγοντας ρήγμα στη συμμαχική γραμμή. Το γερμανικό πεζικό, απροστάτευτο και το ίδιο, δίστασε να εκμεταλλευτεί τη διάσπαση. Μέσα σε μήνες όλοι οι αντιμαχόμενοι παρήγαν χημικά όπλα — χλώριο, φωσγένιο και, από το 1917, αέριο μουστάρδας — και οι αναπνευστήρες έγιναν τυπικός εξοπλισμός."
          },
          category: "military"
        },
        {
          title: {
            en: "Gallipoli Campaign begins",
            el: "Αρχίζει η Εκστρατεία της Καλλίπολης"
          },
          description: {
            en: "Anglo-French and ANZAC forces land on the Gallipoli peninsula on 25 April. After eight months of trench warfare and over 250,000 Allied casualties, the operation is abandoned.",
            el: "Αγγλογαλλικές και Αυστραλο-Νεοζηλανδικές (ANZAC) δυνάμεις αποβιβάζονται στη χερσόνησο της Καλλίπολης στις 25 Απριλίου. Έπειτα από οκτώ μήνες πολέμου χαρακωμάτων και πάνω από 250.000 συμμαχικές απώλειες, η επιχείρηση εγκαταλείπεται."
          },
          extendedDescription: {
            en: "Conceived by First Lord of the Admiralty Winston Churchill to force the Dardanelles and knock Turkey out of the war, the campaign foundered on Ottoman resistance organised by Mustafa Kemal at Anafarta and Chunuk Bair. The disaster cost Churchill his post, gave Australia and New Zealand their founding national myth, and propelled Kemal toward his post-war role as founder of the Turkish Republic.",
            el: "Επινοημένη από τον Πρώτο Λόρδο του Ναυαρχείου Ουίνστον Τσώρτσιλ ώστε να εξαναγκαστούν τα Δαρδανέλλια και να εξουδετερωθεί η Τουρκία, η εκστρατεία ναυάγησε στην οθωμανική αντίσταση που οργάνωσε ο Μουσταφά Κεμάλ στην Ανάφαρτα και τον Τσουνούκ Μπαϊρ. Η καταστροφή κόστισε στον Τσώρτσιλ τη θέση του, χάρισε στην Αυστραλία και τη Νέα Ζηλανδία τον γενεσιουργό εθνικό μύθο τους και ανέδειξε τον Κεμάλ στον μετέπειτα ρόλο του ως ιδρυτή της Τουρκικής Δημοκρατίας."
          },
          category: "military"
        },
        {
          title: {
            en: "Armenian Genocide begins",
            el: "Αρχίζει η Γενοκτονία των Αρμενίων"
          },
          description: {
            en: "On 24 April the Ottoman authorities arrest hundreds of Armenian intellectuals in Constantinople, opening a campaign of deportation and massacre that will kill some 1.5 million Armenians.",
            el: "Στις 24 Απριλίου οι οθωμανικές αρχές συλλαμβάνουν εκατοντάδες Αρμενίους διανοούμενους στην Κωνσταντινούπολη, εγκαινιάζοντας εκστρατεία εκτοπίσεων και σφαγών που θα κοστίσει τη ζωή σε περίπου 1,5 εκατομμύριο Αρμενίους."
          },
          extendedDescription: {
            en: "Under cover of the war, the Committee of Union and Progress organised the systematic destruction of the Armenian population of Anatolia, alongside parallel atrocities against Assyrians and Pontic Greeks. Convoys of women, children, and the elderly were driven into the Syrian desert; men were massacred outright. The killings were a defining template for the twentieth-century crime of genocide, formally named by Raphael Lemkin in 1944.",
            el: "Υπό την κάλυψη του πολέμου, η Επιτροπή Ένωσης και Προόδου οργάνωσε τη συστηματική εξόντωση του αρμενικού πληθυσμού της Ανατολίας, παράλληλα με ανάλογες θηριωδίες κατά Ασσυρίων και Ποντίων Ελλήνων. Φάλαγγες γυναικών, παιδιών και ηλικιωμένων οδηγήθηκαν στη συριακή έρημο· οι άνδρες κατασφάχθηκαν επιτόπου. Οι σφαγές αποτέλεσαν καθοριστικό πρότυπο για το έγκλημα της γενοκτονίας του εικοστού αιώνα, όπως το ονομάτισε επίσημα ο Ραφαέλ Λέμκιν το 1944."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1915,
      month: 5,
      era: {
        en: "Stalemate & New Fronts",
        el: "Αδιέξοδο & Νέα Μέτωπα"
      },
      events: [
        {
          title: {
            en: "Italy enters the war",
            el: "Η Ιταλία εισέρχεται στον πόλεμο"
          },
          description: {
            en: "On 23 May Italy, lured by the secret Treaty of London promising Trentino, South Tyrol, Trieste, and Dalmatian gains, declares war on Austria-Hungary.",
            el: "Στις 23 Μαΐου η Ιταλία, δελεασμένη από τη μυστική Συνθήκη του Λονδίνου που υποσχόταν Τρεντίνο, Νότιο Τιρόλο, Τεργέστη και δαλματικά κέρδη, κηρύσσει πόλεμο στην Αυστροουγγαρία."
          },
          extendedDescription: {
            en: "Italian Chief of Staff Luigi Cadorna launched eleven offensives along the Isonzo river over the next two-and-a-half years, gaining little but suffering massive casualties. The Alpine and Karst terrain produced some of the most brutal mountain warfare in history. Italy's entry stretched Austro-Hungarian resources thin, but the bitter post-war disappointment over 'mutilated victory' would help fuel the rise of fascism.",
            el: "Ο Ιταλός Αρχηγός Επιτελείου Λουίτζι Καντόρνα εξαπέλυσε έντεκα επιθέσεις κατά μήκος του Ιζόντσο τα επόμενα δυόμισι χρόνια, με ελάχιστα κέρδη αλλά τεράστιες απώλειες. Το αλπικό και καρστικό έδαφος ανέδειξε έναν από τους πιο σκληρούς ορεινούς πολέμους της ιστορίας. Η είσοδος της Ιταλίας εξάντλησε αυστροουγγρικούς πόρους, αλλά η πικρή μεταπολεμική απογοήτευση για την «ακρωτηριασμένη νίκη» θα συντελούσε στην άνοδο του φασισμού."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1916,
      month: 2,
      era: {
        en: "Year of Attrition",
        el: "Έτος Φθοράς"
      },
      events: [
        {
          title: {
            en: "Battle of Verdun begins",
            el: "Αρχίζει η Μάχη του Βερντέν"
          },
          description: {
            en: "On 21 February Falkenhayn launches Operation Gericht against the French fortress city. The ten-month battle that follows will produce more than 700,000 casualties.",
            el: "Στις 21 Φεβρουαρίου ο Φάλκενχαϊν εξαπολύει την Επιχείρηση Gericht κατά της γαλλικής οχυρωμένης πόλης. Η δεκάμηνη μάχη που ακολουθεί θα προκαλέσει πάνω από 700.000 απώλειες."
          },
          extendedDescription: {
            en: "Chief of the German General Staff Erich von Falkenhayn chose Verdun precisely because the French would 'bleed white' defending its ring of forts. Marshal Pétain's rotation system — the 'voie sacrée' supply road kept the front fed — saved the city but consumed nearly the entire French army by turn. Verdun became the central trauma of French national memory and the icon of industrial slaughter.",
            el: "Ο Αρχηγός του Γερμανικού Γενικού Επιτελείου Έριχ φον Φάλκενχαϊν επέλεξε το Βερντέν ακριβώς επειδή οι Γάλλοι θα «αφαιμάσσονταν» υπερασπιζόμενοι τον δακτύλιο των φρουρίων του. Το σύστημα εναλλαγής του στρατάρχη Πεταίν — με τη «voie sacrée», την ιερή οδό ανεφοδιασμού, να τροφοδοτεί το μέτωπο — έσωσε την πόλη, αλλά κατανάλωσε εκ περιτροπής σχεδόν ολόκληρο τον γαλλικό στρατό. Το Βερντέν έγινε το κεντρικό τραύμα της γαλλικής μνήμης και εικόνα της βιομηχανικής σφαγής."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1916,
      month: 4,
      era: {
        en: "Year of Attrition",
        el: "Έτος Φθοράς"
      },
      events: [
        {
          title: {
            en: "Easter Rising in Dublin",
            el: "Πασχαλινή Εξέγερση στο Δουβλίνο"
          },
          description: {
            en: "Irish republicans seize the General Post Office and proclaim a republic on 24 April. The rising is crushed in six days; the execution of its leaders transforms Irish politics.",
            el: "Ιρλανδοί δημοκρατικοί καταλαμβάνουν το κεντρικό Ταχυδρομείο και κηρύσσουν Δημοκρατία στις 24 Απριλίου. Η εξέγερση συντρίβεται σε έξι ημέρες· η εκτέλεση των ηγετών της μεταμορφώνει την ιρλανδική πολιτική."
          },
          extendedDescription: {
            en: "Patrick Pearse, James Connolly, and 1,200 volunteers held central Dublin against British troops and artillery. Initially unpopular, the rebellion's leaders became martyrs after British court-martial executions in May. Within two years Sinn Féin had swept the 1918 election, declaring an independent Irish parliament and igniting the War of Independence.",
            el: "Ο Πάτρικ Πιρς, ο Τζέιμς Κόνολι και 1.200 εθελοντές κράτησαν το κέντρο του Δουβλίνου απέναντι σε βρετανικά στρατεύματα και πυροβολικό. Αρχικά αντιδημοφιλείς, οι ηγέτες της εξέγερσης έγιναν μάρτυρες έπειτα από τις εκτελέσεις από βρετανικά στρατοδικεία τον Μάιο. Μέσα σε δύο χρόνια το Σιν Φέιν σάρωσε στις εκλογές του 1918, κήρυξε ανεξάρτητο ιρλανδικό κοινοβούλιο και πυροδότησε τον Πόλεμο της Ανεξαρτησίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1916,
      month: 5,
      era: {
        en: "Year of Attrition",
        el: "Έτος Φθοράς"
      },
      events: [
        {
          title: {
            en: "Battle of Jutland",
            el: "Ναυμαχία της Γιουτλάνδης"
          },
          description: {
            en: "On 31 May - 1 June the British Grand Fleet and the German High Seas Fleet meet in the only full-scale clash of dreadnoughts in history.",
            el: "Στις 31 Μαΐου - 1 Ιουνίου ο βρετανικός Μέγας Στόλος και ο γερμανικός Στόλος της Ανοιχτής Θάλασσας συγκρούονται στη μοναδική ολοκληρωμένη σύγκρουση θωρηκτών στην ιστορία."
          },
          extendedDescription: {
            en: "Admiral Jellicoe's 151 British warships engaged Admiral Scheer's 99 German vessels off the Danish coast. Tactically the Germans inflicted more losses; strategically the High Seas Fleet retreated to harbour and never seriously challenged the Royal Navy again. The British blockade of Germany — slow, suffocating, decisive — held firm to the end of the war.",
            el: "Ο ναύαρχος Τζέλικο με 151 βρετανικά πολεμικά αντιπαρατέθηκε στα 99 γερμανικά πλοία του ναυάρχου Σέερ στα ανοιχτά των δανικών ακτών. Τακτικά οι Γερμανοί προκάλεσαν περισσότερες απώλειες· στρατηγικά ο Στόλος της Ανοιχτής Θάλασσας υποχώρησε στα λιμάνια και δεν αμφισβήτησε σοβαρά ξανά το Βασιλικό Ναυτικό. Ο βρετανικός αποκλεισμός της Γερμανίας — αργός, ασφυκτικός, καθοριστικός — κρατήθηκε ως το τέλος του πολέμου."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1916,
      month: 7,
      era: {
        en: "Year of Attrition",
        el: "Έτος Φθοράς"
      },
      events: [
        {
          title: {
            en: "Battle of the Somme",
            el: "Μάχη του Σομ"
          },
          description: {
            en: "On 1 July the British Army suffers 57,470 casualties — 19,240 killed — in a single day, the bloodiest in its history. The offensive grinds on until November.",
            el: "Την 1η Ιουλίου ο βρετανικός στρατός υφίσταται 57.470 απώλειες — 19.240 νεκρούς — σε μία ημέρα, την αιματηρότερη στην ιστορία του. Η επίθεση συνεχίζεται μέχρι τον Νοέμβριο."
          },
          extendedDescription: {
            en: "General Haig's offensive aimed to relieve pressure on Verdun and break through the German line. The week-long preliminary bombardment failed to cut the German wire or destroy the deep dugouts; advancing British troops were scythed down by machine-gun fire. By the time the battle ended on 18 November, the Allies had advanced ten kilometres at a cost of more than a million casualties on all sides. The tank made its combat debut here on 15 September.",
            el: "Η επίθεση του στρατηγού Χέιγκ απέβλεπε στην αποσυμπίεση του Βερντέν και τη διάσπαση της γερμανικής γραμμής. Ο εβδομαδιαίος προπαρασκευαστικός κανονιοβολισμός δεν κατάφερε να κόψει τα συρματοπλέγματα ή να καταστρέψει τα βαθιά καταφύγια· τα προελαύνοντα βρετανικά στρατεύματα θερίστηκαν από πολυβόλα. Όταν τερματίστηκε η μάχη στις 18 Νοεμβρίου, οι Σύμμαχοι είχαν προχωρήσει δέκα χιλιόμετρα με κόστος άνω του ενός εκατομμυρίου απώλειες συνολικά. Το τανκ έκανε εδώ την πολεμική του πρεμιέρα στις 15 Σεπτεμβρίου."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Going_over_the_top_01.jpg?width=1024",
            alt: {
              en: "British troops advancing at the Battle of the Somme, 1916",
              el: "Βρετανικά στρατεύματα προελαύνουν στη μάχη του Σομ, 1916"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1917,
      month: 3,
      era: {
        en: "Crisis & Revolution",
        el: "Κρίση & Επανάσταση"
      },
      events: [
        {
          title: {
            en: "Russian February Revolution",
            el: "Ρωσική Επανάσταση του Φεβρουαρίου"
          },
          description: {
            en: "Bread riots in Petrograd topple three hundred years of Romanov rule. On 15 March Tsar Nicholas II abdicates and a Provisional Government takes power.",
            el: "Εξεγέρσεις για το ψωμί στην Πετρούπολη ανατρέπουν τριακόσια χρόνια κυριαρχίας των Ρομανώφ. Στις 15 Μαρτίου ο Τσάρος Νικόλαος Β΄ παραιτείται και Προσωρινή Κυβέρνηση αναλαμβάνει την εξουσία."
          },
          extendedDescription: {
            en: "Strikes and demonstrations over food shortages spread through the capital in late February (old style) / early March (new style). Soldiers of the Petrograd garrison joined the crowds rather than fire on them. The Duma formed a Provisional Government under Prince Lvov, while the Petrograd Soviet emerged as a rival authority — the 'dual power' that would paralyse Russia until October. Lenin, in Zurich exile, prepared to return on the famous 'sealed train' provided by Germany.",
            el: "Απεργίες και διαδηλώσεις για τις ελλείψεις τροφίμων εξαπλώθηκαν στην πρωτεύουσα στα τέλη Φεβρουαρίου (παλιό ημερολόγιο) / αρχές Μαρτίου (νέο). Στρατιώτες της φρουράς της Πετρούπολης ενώθηκαν με το πλήθος αντί να πυροβολήσουν. Η Δούμα σχημάτισε Προσωρινή Κυβέρνηση υπό τον πρίγκιπα Λβοφ, ενώ το Σοβιέτ της Πετρούπολης αναδείχθηκε αντίπαλη εξουσία — η «διπλή εξουσία» που θα παρέλυε τη Ρωσία μέχρι τον Οκτώβριο. Ο Λένιν, εξόριστος στη Ζυρίχη, ετοιμαζόταν να επιστρέψει με το φημισμένο «σφραγισμένο τρένο» που του παρείχε η Γερμανία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1917,
      month: 4,
      era: {
        en: "Crisis & Revolution",
        el: "Κρίση & Επανάσταση"
      },
      events: [
        {
          title: {
            en: "United States enters the war",
            el: "Οι ΗΠΑ εισέρχονται στον πόλεμο"
          },
          description: {
            en: "On 6 April Congress declares war on Germany following unrestricted submarine warfare and the Zimmermann Telegram.",
            el: "Στις 6 Απριλίου το Κονγκρέσο κηρύσσει πόλεμο στη Γερμανία έπειτα από τον απεριόριστο υποβρυχιακό πόλεμο και το Τηλεγράφημα Ζίμμερμαν."
          },
          extendedDescription: {
            en: "Germany's resumption of unrestricted U-boat attacks in February — including the sinking of US merchant ships — combined with British interception of Foreign Minister Arthur Zimmermann's telegram offering Mexico an alliance and the return of Texas, New Mexico, and Arizona, swung American public opinion. President Wilson, re-elected in 1916 on the slogan 'he kept us out of war', now sought to make the world 'safe for democracy'. Within a year the American Expeditionary Force under Pershing would tip the balance on the Western Front.",
            el: "Η επανάληψη των απεριόριστων γερμανικών επιθέσεων με U-boat τον Φεβρουάριο — με τη βύθιση και αμερικανικών εμπορικών — μαζί με τη βρετανική υποκλοπή του τηλεγραφήματος του υπουργού Εξωτερικών Άρτουρ Ζίμμερμαν, που πρόσφερε στο Μεξικό συμμαχία και επιστροφή Τέξας, Νέου Μεξικού και Αριζόνας, μετέστρεψαν την αμερικανική κοινή γνώμη. Ο Πρόεδρος Ουίλσον, επανεκλεγμένος το 1916 με το σύνθημα «μας κράτησε εκτός πολέμου», επιδίωκε πλέον να κάνει τον κόσμο «ασφαλή για τη δημοκρατία». Μέσα σε ένα έτος το Αμερικανικό Εκστρατευτικό Σώμα υπό τον Πέρσινγκ θα έγερνε την πλάστιγγα στο Δυτικό Μέτωπο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1917,
      month: 7,
      era: {
        en: "Crisis & Revolution",
        el: "Κρίση & Επανάσταση"
      },
      events: [
        {
          title: {
            en: "Third Battle of Ypres (Passchendaele)",
            el: "Γ΄ Μάχη του Υπρ (Πασσενδάλη)"
          },
          description: {
            en: "From 31 July to November British Empire forces fight through Flanders mud to capture Passchendaele ridge. Some 275,000 Allied and 220,000 German soldiers fall.",
            el: "Από 31 Ιουλίου έως Νοέμβριο δυνάμεις της Βρετανικής Αυτοκρατορίας πολεμούν μέσα στη λάσπη της Φλάνδρας για την κατάληψη του υψώματος της Πασσενδάλης. Πέφτουν περίπου 275.000 Σύμμαχοι και 220.000 Γερμανοί στρατιώτες."
          },
          extendedDescription: {
            en: "Haig's offensive sought to clear the Belgian coast and the U-boat bases at Ostend and Zeebrugge. Prolonged bombardment shattered the drainage system of the Flanders plain; autumn rain turned the battlefield into a swamp where men and horses drowned in shell-holes. Canadian troops took the obliterated village of Passchendaele on 6 November. The name became synonymous with futility in the war's literature, from Wilfred Owen to Siegfried Sassoon.",
            el: "Η επίθεση του Χέιγκ απέβλεπε στην εκκαθάριση της βελγικής ακτής και των βάσεων U-boat σε Οστάνδη και Ζέεμπρουγκε. Παρατεταμένος κανονιοβολισμός κατέστρεψε το αποστραγγιστικό δίκτυο της φλαμανδικής πεδιάδας· οι φθινοπωρινές βροχές μετέτρεψαν το πεδίο μάχης σε βάλτο όπου άντρες και άλογα πνίγονταν σε λάκκους από οβίδες. Καναδικά στρατεύματα κατέλαβαν το κατεστραμμένο χωριό της Πασσενδάλης στις 6 Νοεμβρίου. Το όνομα έγινε συνώνυμο της ματαιότητας στη λογοτεχνία του πολέμου, από τον Γουίλφρεντ Όουεν στον Ζίγκφριντ Σασούν."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1917,
      month: 11,
      era: {
        en: "Crisis & Revolution",
        el: "Κρίση & Επανάσταση"
      },
      events: [
        {
          title: {
            en: "Balfour Declaration",
            el: "Διακήρυξη Μπάλφουρ"
          },
          description: {
            en: "On 2 November British Foreign Secretary Arthur Balfour pledges support for a 'national home for the Jewish people' in Palestine.",
            el: "Στις 2 Νοεμβρίου ο Βρετανός υπουργός Εξωτερικών Άρτουρ Μπάλφουρ δεσμεύεται για στήριξη μιας «εθνικής εστίας για τον εβραϊκό λαό» στην Παλαιστίνη."
          },
          extendedDescription: {
            en: "The letter to Lord Rothschild — drafted with Chaim Weizmann and Nahum Sokolow — sought to win American Jewish support for the war, undermine Ottoman authority, and secure a friendly population astride the Suez approach. Days later General Allenby entered Jerusalem on foot. The contradictory promises Britain made to Arabs (the McMahon-Hussein correspondence) and to Jews would shape Middle Eastern politics for the next century.",
            el: "Η επιστολή στον Λόρδο Ρότσιλντ — συντεταγμένη με τη συμβολή του Χαΐμ Βάιτσμαν και του Ναχούμ Σοκόλοφ — απέβλεπε στην προσέλκυση αμερικανο-εβραϊκής στήριξης, στην υπονόμευση της οθωμανικής εξουσίας και στην εξασφάλιση φιλικού πληθυσμού πάνω από τις προσβάσεις της Διώρυγας του Σουέζ. Λίγες ημέρες μετά, ο στρατηγός Άλενμπι εισήλθε πεζός στην Ιερουσαλήμ. Οι αντιφατικές υποσχέσεις της Βρετανίας προς Άραβες (αλληλογραφία ΜακΜάχον-Χουσεΐν) και Εβραίους θα διαμόρφωναν τη Μέση Ανατολή για τον επόμενο αιώνα."
          },
          category: "political"
        },
        {
          title: {
            en: "Russian October Revolution",
            el: "Ρωσική Επανάσταση του Οκτωβρίου"
          },
          description: {
            en: "On 7 November (25 October old style) the Bolsheviks seize the Winter Palace and the Provisional Government. Lenin proclaims Soviet power and a Decree on Peace.",
            el: "Στις 7 Νοεμβρίου (25 Οκτωβρίου παλιό ημερολόγιο) οι Μπολσεβίκοι καταλαμβάνουν τα Χειμερινά Ανάκτορα και την Προσωρινή Κυβέρνηση. Ο Λένιν κηρύσσει σοβιετική εξουσία και εκδίδει Διάταγμα για την Ειρήνη."
          },
          extendedDescription: {
            en: "Trotsky's Military Revolutionary Committee organised an almost bloodless coup against Kerensky's exhausted Provisional Government. The new Council of People's Commissars repudiated Russia's debts, nationalised the land, and opened armistice negotiations at Brest-Litovsk in December. The exit of Russia from the war freed some fifty German divisions for redeployment to the Western Front in 1918 — the only sliver of hope left to the Kaiserreich.",
            el: "Η Στρατιωτική Επαναστατική Επιτροπή του Τρότσκι οργάνωσε ένα σχεδόν αναίμακτο πραξικόπημα κατά της εξαντλημένης Προσωρινής Κυβέρνησης του Κερένσκι. Το νέο Συμβούλιο των Λαϊκών Επιτρόπων αποκήρυξε τα χρέη της Ρωσίας, εθνικοποίησε τη γη και άνοιξε διαπραγματεύσεις ανακωχής στο Μπρεστ-Λιτόφσκ τον Δεκέμβριο. Η αποχώρηση της Ρωσίας από τον πόλεμο απελευθέρωσε περίπου πενήντα γερμανικές μεραρχίες για μεταφορά στο Δυτικό Μέτωπο το 1918 — τη μόνη ελπίδα που είχε απομείνει στο Κάιζεραϊχ."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1918,
      month: 3,
      era: {
        en: "Decision & Armistice",
        el: "Έκβαση & Ανακωχή"
      },
      events: [
        {
          title: {
            en: "Treaty of Brest-Litovsk",
            el: "Συνθήκη του Μπρεστ-Λιτόφσκ"
          },
          description: {
            en: "On 3 March Soviet Russia signs a harsh peace with the Central Powers, ceding Poland, the Baltic states, Belarus, Ukraine, Finland, and the Caucasus.",
            el: "Στις 3 Μαρτίου η Σοβιετική Ρωσία υπογράφει σκληρή ειρήνη με τις Κεντρικές Δυνάμεις, παραχωρώντας Πολωνία, Βαλτικά κράτη, Λευκορωσία, Ουκρανία, Φινλανδία και Καύκασο."
          },
          extendedDescription: {
            en: "Trotsky's negotiating tactic — 'neither war nor peace' — collapsed when German armies advanced almost unopposed into Russia in February. The resulting treaty stripped Russia of a third of its population, half its industry, and nearly all its coal mines. It also exposed Allied propaganda about German war aims: this, said London and Paris, was what defeat would look like in the West.",
            el: "Η διαπραγματευτική τακτική του Τρότσκι — «ούτε πόλεμος ούτε ειρήνη» — κατέρρευσε όταν γερμανικά στρατεύματα προέλασαν σχεδόν χωρίς αντίσταση στη Ρωσία τον Φεβρουάριο. Η συνθήκη που προέκυψε στέρησε από τη Ρωσία το ένα τρίτο του πληθυσμού της, το μισό της βιομηχανίας και σχεδόν όλα τα ανθρακωρυχεία της. Αποκάλυψε επίσης τη συμμαχική προπαγάνδα για τους γερμανικούς πολεμικούς στόχους: αυτή, έλεγαν Λονδίνο και Παρίσι, θα ήταν η όψη της ήττας στη Δύση."
          },
          category: "political"
        },
        {
          title: {
            en: "German Spring Offensive",
            el: "Γερμανική Εαρινή Επίθεση"
          },
          description: {
            en: "On 21 March Ludendorff launches Operation Michael, the largest German offensive since 1914, hoping to win the war before American forces arrive in strength.",
            el: "Στις 21 Μαρτίου ο Λούντεντορφ εξαπολύει την Επιχείρηση Μίχαελ, τη μεγαλύτερη γερμανική επίθεση από το 1914, ελπίζοντας να κερδίσει τον πόλεμο πριν φτάσουν σε αριθμό οι Αμερικανοί."
          },
          extendedDescription: {
            en: "Using new stormtrooper tactics — short hurricane bombardments, infiltration by small assault groups, gas and smoke — the Germans pushed sixty kilometres into Allied territory, threatening Amiens and Paris. The 'Paris Gun' shelled the French capital from 120 kilometres away. But the offensive outran its supply lines; by July it had stalled, and the Allies under Foch began the counter-offensive that would not stop until the armistice.",
            el: "Με νέες τακτικές καταδρομών — σύντομοι «τυφωνικοί» κανονιοβολισμοί, διείσδυση μικρών ομάδων εφόδου, αέρια και καπνός — οι Γερμανοί προχώρησαν εξήντα χιλιόμετρα μέσα σε συμμαχικό έδαφος, απειλώντας Αμιένη και Παρίσι. Το «Κανόνι του Παρισιού» έπληττε τη γαλλική πρωτεύουσα από απόσταση 120 χιλιομέτρων. Όμως η επίθεση ξεπέρασε τις γραμμές ανεφοδιασμού της· τον Ιούλιο είχε ανασταλεί, και οι Σύμμαχοι υπό τον Φος ξεκίνησαν την αντεπίθεση που δεν θα σταματούσε μέχρι την ανακωχή."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1918,
      month: 10,
      era: {
        en: "Decision & Armistice",
        el: "Έκβαση & Ανακωχή"
      },
      events: [
        {
          title: {
            en: "Spanish Flu — the deadly second wave",
            el: "Ισπανική Γρίπη — το φονικό δεύτερο κύμα"
          },
          description: {
            en: "An H1N1 influenza pandemic peaks in October 1918, killing more people in a few weeks than any plague since the Black Death. Total deaths through 1919 are estimated at 50 million worldwide.",
            el: "Πανδημία γρίπης H1N1 κορυφώνεται τον Οκτώβριο του 1918, σκοτώνοντας σε λίγες εβδομάδες περισσότερους ανθρώπους από οποιαδήποτε πανώλη μετά τον Μαύρο Θάνατο. Οι συνολικοί θάνατοι μέχρι το 1919 εκτιμώνται σε 50 εκατομμύρια παγκοσμίως."
          },
          extendedDescription: {
            en: "Crowded barracks, mass troop movements, and the malnourished civilian populations of the warring states formed an ideal vector. Wartime censorship suppressed reporting in belligerent nations; neutral Spain's free press gave the pandemic its misnomer. Unusually for influenza, it killed young adults at high rates, hollowing out a generation already thinned by four years of war.",
            el: "Πυκνοκατοικημένοι στρατώνες, μαζικές μετακινήσεις στρατευμάτων και υποσιτισμένοι άμαχοι πληθυσμοί των αντιμαχομένων κρατών αποτέλεσαν ιδανικό φορέα. Η λογοκρισία περιόρισε τις αναφορές στις εμπόλεμες χώρες· ο ελεύθερος Τύπος της ουδέτερης Ισπανίας έδωσε λανθασμένα στην πανδημία το όνομά της. Ασυνήθιστα για γρίπη, σκότωνε νέους ενήλικες σε υψηλά ποσοστά, αδειάζοντας μια γενιά ήδη αραιωμένη από τέσσερα χρόνια πολέμου."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1918,
      month: 11,
      era: {
        en: "Decision & Armistice",
        el: "Έκβαση & Ανακωχή"
      },
      events: [
        {
          title: {
            en: "Armistice of Compiègne",
            el: "Ανακωχή της Κομπιένης"
          },
          description: {
            en: "At 11.00 on 11 November in a railway carriage in the Forest of Compiègne, the German delegation signs the armistice that ends fighting on the Western Front.",
            el: "Στις 11.00 της 11ης Νοεμβρίου, σε σιδηροδρομικό βαγόνι στο δάσος της Κομπιένης, η γερμανική αντιπροσωπεία υπογράφει την ανακωχή που τερματίζει τις εχθροπραξίες στο Δυτικό Μέτωπο."
          },
          extendedDescription: {
            en: "Bulgaria had surrendered on 29 September, the Ottoman Empire on 30 October, and Austria-Hungary on 3 November. The German High Seas Fleet mutinied at Kiel; revolution swept the Reich; on 9 November Kaiser Wilhelm II abdicated and a republic was proclaimed in Berlin. Marshal Foch's terms — withdrawal behind the Rhine, surrender of the fleet and railway stock, continuation of the blockade — left Germany defenceless for the peace conference. The Great War cost more than seventeen million lives. Its peace, signed at Versailles on 28 June 1919, would prove only a twenty-year truce.",
            el: "Η Βουλγαρία είχε συνθηκολογήσει στις 29 Σεπτεμβρίου, η Οθωμανική Αυτοκρατορία στις 30 Οκτωβρίου και η Αυστροουγγαρία στις 3 Νοεμβρίου. Ο γερμανικός Στόλος της Ανοιχτής Θάλασσας στασίασε στο Κίελο· επανάσταση σάρωσε το Ράιχ· στις 9 Νοεμβρίου ο Κάιζερ Γουλιέλμος Β΄ παραιτήθηκε και κηρύχθηκε δημοκρατία στο Βερολίνο. Οι όροι του στρατάρχη Φος — αποχώρηση πίσω από τον Ρήνο, παράδοση στόλου και σιδηροδρομικού υλικού, συνέχιση του αποκλεισμού — άφηναν τη Γερμανία ανυπεράσπιστη ενόψει της Διάσκεψης της Ειρήνης. Ο Μεγάλος Πόλεμος κόστισε πάνω από δεκαεπτά εκατομμύρια ζωές. Η ειρήνη του, που υπογράφηκε στις Βερσαλλίες στις 28 Ιουνίου 1919, θα αποδεικνυόταν εικοσαετής μόνο ανακωχή."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
