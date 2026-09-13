/** Modern Britain — Σύγχρονη Βρετανία · British History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const MODERN_BRITAIN = {
  id: "modern-britain" as const,
  label: {
    en: "Modern Britain",
    el: "Σύγχρονη Βρετανία"
  },
  supertitle: {
    en: "United Kingdom",
    el: "Ηνωμένο Βασίλειο"
  },
  title: {
    en: "Modern Britain",
    el: "Η Σύγχρονη Βρετανία"
  },
  subtitle: {
    en: "From the Armistice and the first vote for women through the World Wars and Churchill's finest hour, the Labour landslide and the welfare state, the end of empire and the Windrush generation, Elizabeth II and Suez, the Troubles and Thatcherism, devolution and the Good Friday Agreement, Brexit and Covid, to the death of the Queen and the New Carolean age. Slide across the decades to read the major events of the British twentieth and twenty-first centuries.",
    el: "Από την Ανακωχή και την πρώτη ψήφο για τις γυναίκες μέσα από τους Παγκοσμίους Πολέμους και την υπέρτατη ώρα του Τσώρτσιλ, τη σαρωτική νίκη των Εργατικών και το κράτος πρόνοιας, το τέλος της αυτοκρατορίας και τη γενιά του Windrush, την Ελισάβετ Β΄ και το Σουέζ, τις Ταραχές και τον Θατσερισμό, την αυτονομία και τη Συμφωνία της Μεγάλης Παρασκευής, το Brexit και τον Covid, έως τον θάνατο της βασίλισσας και τη Νέα Καρολίνεια εποχή. Μετακινηθείτε ανάμεσα στις δεκαετίες για να διαβάσετε τα γεγονότα του βρετανικού 20ού και 21ου αιώνα."
  },
  menuDescription: {
    en: "Two world wars, the welfare state, the end of empire, Brexit, and Charles III.",
    el: "Δύο παγκόσμιοι πόλεμοι, το κράτος πρόνοιας, το τέλος της αυτοκρατορίας, το Brexit κι ο Κάρολος Γ΄."
  },
  footerLabel: {
    en: "Modern Britain · 1914-Present",
    el: "Σύγχρονη Βρετανία · 1914-Σήμερα"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Modern Britain",
    el: "Σύγχρονη Βρετανία"
  },
  theme: THEMES.slate,
  timeline: [
    {
      year: 1918,
      era: {
        en: "Aftermath of the Great War",
        el: "Επομένη του Μεγάλου Πολέμου"
      },
      events: [
        {
          title: {
            en: "Armistice and the vote for women",
            el: "Ανακωχή και ψήφος για τις γυναίκες"
          },
          description: {
            en: "At 11 a.m. on 11 November the guns fall silent on the Western Front; Britain has lost roughly 723,000 dead. In February the Representation of the People Act gave the vote to all men over 21 and to women householders over 30 — a tripled electorate of 21 million.",
            el: "Στις 11 το πρωί της 11ης Νοεμβρίου τα όπλα σιωπούν στο Δυτικό Μέτωπο· η Βρετανία έχει χάσει περίπου 723.000 νεκρούς. Τον Φεβρουάριο, ο Νόμος Εκπροσώπησης του Λαού έδωσε την ψήφο σε όλους τους άνδρες άνω των 21 και στις γυναίκες νοικοκυρές άνω των 30 — εκλογικό σώμα τριπλασιασμένο στα 21 εκατομμύρια."
          },
          extendedDescription: {
            en: "The war had been won, but at a price almost no contemporary had been prepared to pay: an entire generation of subalterns slaughtered on the Somme and at Passchendaele, the imperial finances drained, the United States risen as creditor of the world. The 1918 Act enfranchised women for the first time after fifty years of suffragette campaigning; the Equal Franchise Act ten years later removed the last age and property restrictions. The 'flapper vote' of 1928 made Britain at last a fully democratic state.",
            el: "Ο πόλεμος είχε κερδηθεί, αλλά με τίμημα που σχεδόν κανένας σύγχρονος δεν ήταν προετοιμασμένος να πληρώσει: μια ολόκληρη γενιά υπαξιωματικών σφαγμένων στον Σομ και στο Πάσχενταλε, τα αυτοκρατορικά οικονομικά αποστραγγισμένα, οι Ηνωμένες Πολιτείες ανερχόμενες ως πιστωτής του κόσμου. Ο Νόμος του 1918 έδωσε για πρώτη φορά το δικαίωμα ψήφου στις γυναίκες μετά από πενήντα χρόνια αγώνα των σουφραζετών· ο Νόμος Ίσης Ψηφοφορίας δέκα χρόνια αργότερα κατάργησε τους τελευταίους περιορισμούς ηλικίας και περιουσίας. Η «ψήφος των φλάπερ» του 1928 έκανε επιτέλους τη Βρετανία πλήρως δημοκρατικό κράτος."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1921,
      era: {
        en: "Irish Free State",
        el: "Ιρλανδικό Ελεύθερο Κράτος"
      },
      events: [
        {
          title: {
            en: "Anglo-Irish Treaty and the partition of Ireland",
            el: "Αγγλοϊρλανδική Συνθήκη και η διχοτόμηση της Ιρλανδίας"
          },
          description: {
            en: "After two years of guerrilla war fought by Michael Collins's IRA, Lloyd George's government signs a treaty granting dominion status to twenty-six Irish counties as the Irish Free State; six Protestant-majority counties of the north remain in the United Kingdom.",
            el: "Μετά από δύο χρόνια ανταρτοπολέμου που διεξήγαγε ο IRA του Μάικλ Κόλλινς, η κυβέρνηση του Λόιντ Τζορτζ υπογράφει συνθήκη που παραχωρεί καθεστώς ντομίνιον σε εικοσιέξι ιρλανδικές κομητείες ως Ιρλανδικό Ελεύθερο Κράτος· έξι κομητείες με προτεσταντική πλειοψηφία στον βορρά παραμένουν στο Ηνωμένο Βασίλειο."
          },
          extendedDescription: {
            en: "The partition was meant as a temporary expedient; it lasted a century. The Free State became the Republic of Ireland in 1949, leaving the Commonwealth; Northern Ireland remained, with its own devolved parliament at Stormont, a sectarian polity that would explode into the Troubles in 1969. Collins, who signed the treaty saying he had signed his own death warrant, was assassinated by anti-Treaty republicans in 1922. The Irish Question, which had dominated Westminster politics since the 1880s, was at last removed from the British agenda — at the cost of a partition still unresolved.",
            el: "Η διχοτόμηση σχεδιάστηκε ως προσωρινή λύση· κράτησε έναν αιώνα. Το Ελεύθερο Κράτος έγινε Δημοκρατία της Ιρλανδίας το 1949, φεύγοντας από την Κοινοπολιτεία· η Βόρεια Ιρλανδία παρέμεινε, με δικό της αυτόνομο κοινοβούλιο στο Στόρμοντ, μια θρησκευτικά διχασμένη πολιτεία που θα εξερρήγνυτο στις Ταραχές το 1969. Ο Κόλλινς, που υπέγραψε τη συνθήκη λέγοντας ότι υπέγραψε τη δική του εκτελεστική απόφαση, δολοφονήθηκε από αντισυνθηκικούς δημοκρατικούς το 1922. Το Ιρλανδικό Ζήτημα, που είχε κυριαρχήσει στην πολιτική του Ουέστμινστερ από τη δεκαετία του 1880, αφαιρέθηκε επιτέλους από τη βρετανική ατζέντα — με κόστος μια διχοτόμηση που παραμένει άλυτη."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1926,
      era: {
        en: "Interwar Britain",
        el: "Μεσοπολεμική Βρετανία"
      },
      events: [
        {
          title: {
            en: "The General Strike",
            el: "Η Γενική Απεργία"
          },
          description: {
            en: "On 4 May the Trades Union Congress calls out 1.7 million workers in support of the locked-out coal miners. For nine days the country runs on volunteer labour and military supply convoys; the strike collapses without concessions.",
            el: "Στις 4 Μαΐου το Συνέδριο των Συνδικάτων καλεί σε απεργία 1,7 εκατομμύρια εργαζομένους προς στήριξη των αποκλεισμένων ανθρακωρύχων. Για εννέα ημέρες η χώρα λειτουργεί με εθελοντική εργασία και στρατιωτικές νηοπομπές εφοδιασμού· η απεργία καταρρέει χωρίς υποχωρήσεις."
          },
          extendedDescription: {
            en: "The strike was the climax of a decade of industrial defeat for British labour, in which the export markets for coal, cotton, and steel had withered while the pound was held at an overvalued pre-war parity. The Trade Disputes Act of 1927 banned sympathy strikes; the miners returned defeated to longer hours and lower wages. The episode hardened the politics of class and prepared the ground for the 1929 Labour government and, after the Great Depression, the National coalition of 1931. Britain did not see industrial militancy on this scale again until the Winter of Discontent in 1979.",
            el: "Η απεργία ήταν η κορύφωση μιας δεκαετίας βιομηχανικής ήττας για τη βρετανική εργατική τάξη, στη διάρκεια της οποίας οι εξαγωγικές αγορές κάρβουνου, βαμβακιού και χάλυβα είχαν μαραθεί ενώ η λίρα διατηρήθηκε σε προπολεμική υπερτιμημένη ισοτιμία. Ο Νόμος για τις Εργατικές Διαφορές του 1927 απαγόρευσε τις απεργίες αλληλεγγύης· οι ανθρακωρύχοι επέστρεψαν ηττημένοι σε μεγαλύτερες ώρες και χαμηλότερους μισθούς. Το επεισόδιο σκλήρυνε την πολιτική των τάξεων και προετοίμασε το έδαφος για την κυβέρνηση των Εργατικών του 1929 και, μετά τη Μεγάλη Ύφεση, για τον Εθνικό συνασπισμό του 1931. Η Βρετανία δεν θα έβλεπε βιομηχανική μαχητικότητα τέτοιας κλίμακας ξανά μέχρι τον Χειμώνα της Δυσαρέσκειας το 1979."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1936,
      era: {
        en: "Interwar Britain",
        el: "Μεσοπολεμική Βρετανία"
      },
      events: [
        {
          title: {
            en: "The Abdication Crisis",
            el: "Η Κρίση της Παραίτησης"
          },
          description: {
            en: "After 326 days as king, Edward VIII abdicates on 11 December to marry the twice-divorced American Wallis Simpson. The crown passes to his shy younger brother Albert, who reigns as George VI.",
            el: "Έπειτα από 326 ημέρες ως βασιλιάς, ο Εδουάρδος Η΄ παραιτείται στις 11 Δεκεμβρίου για να παντρευτεί την δύο φορές διαζευγμένη Αμερικανίδα Γουόλις Σίμπσον. Το στέμμα περνά στον ντροπαλό νεότερο αδελφό του Άλβερτο, που βασιλεύει ως Γεώργιος ΣΤ΄."
          },
          extendedDescription: {
            en: "The abdication was a deeper crisis than the marriage of one king to one divorcée: Edward's sympathies for Hitler, his political meddling, and the doubt he cast on royal duty made the establishment determined to be rid of him. He spent the rest of his life as Duke of Windsor in mostly idle exile. George VI, a stammerer with no preparation for the throne, would prove the indispensable symbol of British endurance through the war that came in 1939. His daughter, the ten-year-old Princess Elizabeth, became heir presumptive.",
            el: "Η παραίτηση ήταν βαθύτερη κρίση από τον γάμο ενός βασιλιά με μια διαζευγμένη γυναίκα: οι συμπάθειες του Εδουάρδου προς τον Χίτλερ, οι πολιτικές παρεμβάσεις του και η αμφιβολία που έριχνε στο βασιλικό καθήκον έκαναν το κατεστημένο αποφασισμένο να τον ξεφορτωθεί. Πέρασε την υπόλοιπη ζωή του ως Δούκας του Ουίνδσορ σε σχεδόν αδρανή εξορία. Ο Γεώργιος ΣΤ΄, που τραύλιζε και δεν είχε προετοιμασία για τον θρόνο, θα αποδεικνυόταν αναντικατάστατο σύμβολο της βρετανικής αντοχής στον πόλεμο που ήρθε το 1939. Η κόρη του, η δεκάχρονη πριγκίπισσα Ελισάβετ, έγινε διάδοχος."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1940,
      era: {
        en: "Britain Alone",
        el: "Η Βρετανία Μόνη"
      },
      events: [
        {
          title: {
            en: "Britain stands alone",
            el: "Η Βρετανία στέκεται μόνη"
          },
          description: {
            en: "After the fall of France in June, the evacuation of 338,000 troops from the beaches of Dunkirk, and Churchill's accession as prime minister on 10 May, Britain faces Nazi Germany alone. Through the summer and autumn the Luftwaffe is defeated in the Battle of Britain; through the autumn and winter the cities endure the Blitz.",
            el: "Μετά την πτώση της Γαλλίας τον Ιούνιο, την εκκένωση 338.000 στρατιωτών από τις παραλίες της Δουνκέρκης και την άνοδο του Τσώρτσιλ στην πρωθυπουργία στις 10 Μαΐου, η Βρετανία αντιμετωπίζει μόνη της τη Ναζιστική Γερμανία. Κατά τη διάρκεια του καλοκαιριού και του φθινοπώρου η Λουφτβάφε ηττάται στη Μάχη της Βρετανίας· το φθινόπωρο και τον χειμώνα οι πόλεις υπομένουν το Μπλιτς."
          },
          extendedDescription: {
            en: "Churchill's speeches — 'We shall fight on the beaches', 'their finest hour', 'never was so much owed by so many to so few' — gave the nation its voice. RAF Fighter Command, outnumbered roughly two to one, denied the Luftwaffe the air superiority needed for invasion; 544 British pilots and many Polish, Czech, and Commonwealth flyers died winning the battle. The Blitz killed 43,000 civilians, half of them in London. Yet the war was decided when Hitler turned east against Russia in June 1941 and when Pearl Harbor brought America into the war that December: thereafter Britain was no longer alone but the junior partner of a coalition.",
            el: "Οι ομιλίες του Τσώρτσιλ — «Θα πολεμήσουμε στις παραλίες», «η υπέρτατη ώρα τους», «ποτέ δεν χρωστούσαν τόσοι πολλοί τόσα σε τόσο λίγους» — έδωσαν στο έθνος τη φωνή του. Η Διοίκηση Μαχητικών της RAF, αριθμητικά κατώτερη σχεδόν δύο προς ένα, αρνήθηκε στη Λουφτβάφε την αεροπορική υπεροχή που απαιτούνταν για εισβολή· 544 Βρετανοί πιλότοι και πολλοί Πολωνοί, Τσέχοι και πιλότοι της Κοινοπολιτείας πέθαναν κερδίζοντας τη μάχη. Το Μπλιτς σκότωσε 43.000 αμάχους, τους μισούς στο Λονδίνο. Όμως ο πόλεμος κρίθηκε όταν ο Χίτλερ στράφηκε ανατολικά εναντίον της Ρωσίας τον Ιούνιο του 1941 και όταν το Περλ Χάρμπορ έφερε την Αμερική στον πόλεμο τον Δεκέμβριο: έκτοτε η Βρετανία δεν ήταν πλέον μόνη αλλά ο κατώτερος εταίρος ενός συνασπισμού."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1945,
      era: {
        en: "Welfare State",
        el: "Κράτος Πρόνοιας"
      },
      events: [
        {
          title: {
            en: "Victory and the Labour landslide",
            el: "Νίκη και η σαρωτική νίκη των Εργατικών"
          },
          description: {
            en: "VE Day on 8 May celebrates the defeat of Nazi Germany. In the general election in July the British public rejects Churchill and gives Clement Attlee's Labour Party a 145-seat majority on a manifesto of nationalisation, full employment, and a national health service.",
            el: "Η Ημέρα Νίκης στην Ευρώπη στις 8 Μαΐου γιορτάζει την ήττα της Ναζιστικής Γερμανίας. Στις γενικές εκλογές του Ιουλίου, ο βρετανικός λαός απορρίπτει τον Τσώρτσιλ και δίνει στο Εργατικό Κόμμα του Κλέμεντ Άτλι πλειοψηφία 145 εδρών με μανιφέστο εθνικοποιήσεων, πλήρους απασχόλησης και εθνικού συστήματος υγείας."
          },
          extendedDescription: {
            en: "The Attlee government of 1945-51 reshaped Britain as comprehensively as any administration since the Whig reformers of 1832: the National Insurance Act, the National Health Service Act, the nationalisation of coal, rail, steel, gas, electricity, and the Bank of England, the New Towns Act, Indian independence. Postwar Britain was exhausted and bankrupt — bread was rationed for the first time in 1946 — but the framework of the modern welfare state was put in place in five years and would endure, modified but largely intact, into the twenty-first century.",
            el: "Η κυβέρνηση Άτλι 1945-51 αναμόρφωσε τη Βρετανία τόσο ολοκληρωτικά όσο οποιαδήποτε κυβέρνηση από τους μεταρρυθμιστές Ουίγους του 1832: ο Νόμος Εθνικής Ασφάλισης, ο Νόμος του Εθνικού Συστήματος Υγείας, η εθνικοποίηση κάρβουνου, σιδηροδρόμων, χάλυβα, αερίου, ηλεκτρισμού και της Τράπεζας της Αγγλίας, ο Νόμος Νέων Πόλεων, η ανεξαρτησία της Ινδίας. Η μεταπολεμική Βρετανία ήταν εξαντλημένη και χρεοκοπημένη — το ψωμί δελτιοποιήθηκε για πρώτη φορά το 1946 — αλλά το πλαίσιο του σύγχρονου κράτους πρόνοιας τέθηκε σε εφαρμογή σε πέντε χρόνια και θα διαρκούσε, τροποποιημένο αλλά ως επί το πλείστον ακέραιο, μέχρι τον 21ο αιώνα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1947,
      era: {
        en: "End of Empire",
        el: "Τέλος της Αυτοκρατορίας"
      },
      events: [
        {
          title: {
            en: "Independence of India and Pakistan",
            el: "Ανεξαρτησία της Ινδίας και του Πακιστάν"
          },
          description: {
            en: "On 15 August India becomes independent under Jawaharlal Nehru; on 14 August Pakistan is founded under Muhammad Ali Jinnah. The partition of British India displaces perhaps fifteen million people and kills up to a million in religious violence.",
            el: "Στις 15 Αυγούστου η Ινδία γίνεται ανεξάρτητη υπό τον Τζαβαχαρλάλ Νεχρού· στις 14 Αυγούστου ιδρύεται το Πακιστάν υπό τον Μωχάμετ Άλι Τζίνα. Η διχοτόμηση της βρετανικής Ινδίας εκτοπίζει ίσως δεκαπέντε εκατομμύρια ανθρώπους και σκοτώνει έως ένα εκατομμύριο σε θρησκευτική βία."
          },
          extendedDescription: {
            en: "Indian independence cracked the spine of the British Empire. Burma followed in 1948, Ceylon the same year, the Sudan in 1956, Ghana in 1957, Malaya, Nigeria, Cyprus, Kenya, Tanganyika, and a long procession of African and Caribbean colonies between 1960 and 1968. The Macmillan 'wind of change' speech in Cape Town in 1960 acknowledged what had become unstoppable. By 1970 the empire that had ruled a quarter of the world's people was reduced to a few small islands and the still-unresolved question of Hong Kong, ceded to China in 1997.",
            el: "Η ανεξαρτησία της Ινδίας έσπασε τη σπονδυλική στήλη της Βρετανικής Αυτοκρατορίας. Η Βιρμανία ακολούθησε το 1948, η Κεϋλάνη τον ίδιο χρόνο, το Σουδάν το 1956, η Γκάνα το 1957, η Μαλάγια, η Νιγηρία, η Κύπρος, η Κένυα, η Τανγκανίκα και μια μακρά πομπή αφρικανικών και καραϊβικών αποικιών μεταξύ 1960 και 1968. Η ομιλία «Άνεμος της Αλλαγής» του Μακμίλαν στο Κέιπ Τάουν το 1960 αναγνώρισε αυτό που είχε γίνει ασταμάτητο. Έως το 1970 η αυτοκρατορία που είχε κυβερνήσει το ένα τέταρτο του παγκόσμιου πληθυσμού είχε περιοριστεί σε λίγα μικρά νησιά και στο ακόμη άλυτο ζήτημα του Χονγκ Κονγκ, που παραχωρήθηκε στην Κίνα το 1997."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1948,
      era: {
        en: "Welfare State",
        el: "Κράτος Πρόνοιας"
      },
      events: [
        {
          title: {
            en: "NHS founded and the Empire Windrush arrives",
            el: "Ιδρύεται το NHS και φτάνει το Empire Windrush"
          },
          description: {
            en: "On 5 July the National Health Service comes into being, free at the point of use for all British residents. Three weeks earlier, on 22 June, the SS Empire Windrush docks at Tilbury with 492 passengers from the West Indies, ushering in the first wave of post-war Commonwealth migration to Britain.",
            el: "Στις 5 Ιουλίου ιδρύεται το Εθνικό Σύστημα Υγείας (NHS), δωρεάν στη χρήση για όλους τους κατοίκους της Βρετανίας. Τρεις εβδομάδες νωρίτερα, στις 22 Ιουνίου, το SS Empire Windrush ελλιμενίζεται στο Τίλμπερι με 492 επιβάτες από τις Δυτικές Ινδίες, εγκαινιάζοντας το πρώτο κύμα της μεταπολεμικής μετανάστευσης από την Κοινοπολιτεία στη Βρετανία."
          },
          extendedDescription: {
            en: "The NHS — the brainchild of the Welsh ex-miner Aneurin Bevan — became the single most popular British institution of the postwar era, a fixture as politically untouchable as the monarchy. The Empire Windrush gave its name to a generation of Caribbean immigrants who manned the trains, the buses, and the wards of the new health service. The mostly white, mostly Christian Britain of 1948 began the long evolution into the multiracial society of the twenty-first century; the contributions and the injustices of the Windrush generation would erupt as scandal seventy years later.",
            el: "Το NHS — η ιδέα του Ουαλού πρώην ανθρακωρύχου Ανεουρίν Μπίβαν — έγινε ο μοναδικά πιο δημοφιλής βρετανικός θεσμός της μεταπολεμικής εποχής, μια σταθερά πολιτικά απαραβίαστη όσο η μοναρχία. Το Empire Windrush έδωσε το όνομά του σε μια γενιά μεταναστών της Καραϊβικής που στελέχωσαν τα τρένα, τα λεωφορεία και τα νοσοκομεία του νέου συστήματος υγείας. Η ως επί το πλείστον λευκή, ως επί το πλείστον χριστιανική Βρετανία του 1948 άρχισε τη μακρά εξέλιξή της στην πολυφυλετική κοινωνία του 21ου αιώνα· οι συνεισφορές και οι αδικίες της γενιάς του Windrush θα ξεσπούσαν ως σκάνδαλο εβδομήντα χρόνια αργότερα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1952,
      era: {
        en: "New Elizabethan Age",
        el: "Νέα Ελισαβετιανή Εποχή"
      },
      events: [
        {
          title: {
            en: "Accession of Elizabeth II",
            el: "Άνοδος της Ελισάβετ Β΄ στον θρόνο"
          },
          description: {
            en: "On 6 February King George VI dies in his sleep at Sandringham. His twenty-five-year-old daughter Elizabeth, on tour in Kenya, returns home as queen. She is crowned in Westminster Abbey on 2 June 1953 — the first coronation televised live.",
            el: "Στις 6 Φεβρουαρίου ο βασιλιάς Γεώργιος ΣΤ΄ πεθαίνει στον ύπνο του στο Σάντρινγκχαμ. Η εικοσιπεντάχρονη κόρη του Ελισάβετ, που περιοδεύει στην Κένυα, επιστρέφει στην πατρίδα ως βασίλισσα. Στέφεται στο Αββαείο του Ουέστμινστερ στις 2 Ιουνίου 1953 — η πρώτη στέψη που μεταδίδεται απευθείας τηλεοπτικά."
          },
          extendedDescription: {
            en: "The talk of a 'new Elizabethan age' — Mount Everest summited by Hillary and Tenzing on coronation eve, a sterling area trading bloc, jet aircraft and atomic power — proved short-lived. Within four years the Suez Crisis would lay bare the limits of British power. But Elizabeth herself proved an enduring constant across seventy turbulent years: from Churchill to Truss, from Stalin to Putin, from Empire to commonwealth, from valve radio to social media. Her reign would last longer than Victoria's.",
            el: "Η συζήτηση για μια «νέα Ελισαβετιανή εποχή» — το Όρος Έβερεστ κατακτημένο από τους Χίλαρι και Τένζινγκ την παραμονή της στέψης, ένα εμπορικό μπλοκ της ζώνης της λίρας, αεριωθούμενα αεροσκάφη και ατομική ενέργεια — αποδείχθηκε σύντομη. Μέσα σε τέσσερα χρόνια η Κρίση του Σουέζ θα αποκάλυπτε τα όρια της βρετανικής ισχύος. Αλλά η ίδια η Ελισάβετ αποδείχθηκε διαρκής σταθερά εβδομήντα ταραχωδών ετών: από τον Τσώρτσιλ έως την Τρας, από τον Στάλιν έως τον Πούτιν, από την αυτοκρατορία στην κοινοπολιτεία, από το ραδιόφωνο λυχνιών έως τα μέσα κοινωνικής δικτύωσης. Η βασιλεία της θα διαρκούσε περισσότερο από της Βικτωρίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1956,
      era: {
        en: "End of Empire",
        el: "Τέλος της Αυτοκρατορίας"
      },
      events: [
        {
          title: {
            en: "The Suez Crisis",
            el: "Η Κρίση του Σουέζ"
          },
          description: {
            en: "In a secret pact with France and Israel, Anthony Eden's government invades Egypt to retake the Suez Canal nationalised by Nasser. American financial pressure forces a humiliating withdrawal within a week. Eden resigns; the illusion of independent British great-power status collapses.",
            el: "Σε μυστική συμφωνία με τη Γαλλία και το Ισραήλ, η κυβέρνηση του Άντονι Ίντεν εισβάλλει στην Αίγυπτο για να ανακαταλάβει τη Διώρυγα του Σουέζ που εθνικοποίησε ο Νάσερ. Η αμερικανική οικονομική πίεση εξαναγκάζει σε ταπεινωτική απόσυρση μέσα σε μία εβδομάδα. Ο Ίντεν παραιτείται· η ψευδαίσθηση ανεξάρτητου βρετανικού καθεστώτος μεγάλης δύναμης καταρρέει."
          },
          extendedDescription: {
            en: "Suez was the moment Britain learned its limits in a world dominated by the superpowers. Eisenhower refused to support sterling unless British troops left the Canal Zone; the run on the pound was unsurvivable. The lesson was harsh: thereafter Britain operated as junior partner to the United States and within the looser framework of the Commonwealth, applying for membership of the European Economic Community by 1961. Macmillan called it the worst day of his political life. Half a century later it remained the textbook case of imperial overreach by a power no longer imperial.",
            el: "Το Σουέζ ήταν η στιγμή που η Βρετανία έμαθε τα όριά της σε έναν κόσμο κυριαρχούμενο από τις υπερδυνάμεις. Ο Άιζενχάουερ αρνήθηκε να στηρίξει τη στερλίνα αν τα βρετανικά στρατεύματα δεν αποχωρούσαν από τη Ζώνη της Διώρυγας· η πτώση της λίρας ήταν αδύνατο να αντέξει. Το δίδαγμα ήταν σκληρό: έκτοτε η Βρετανία λειτουργούσε ως κατώτερος εταίρος των Ηνωμένων Πολιτειών και εντός του χαλαρότερου πλαισίου της Κοινοπολιτείας, υποβάλλοντας αίτηση για ένταξη στην Ευρωπαϊκή Οικονομική Κοινότητα ως το 1961. Ο Μακμίλαν τη χαρακτήρισε ως τη χειρότερη ημέρα της πολιτικής του ζωής. Μισό αιώνα αργότερα παρέμενε η εγχειρίδια περίπτωση αυτοκρατορικής υπέρβασης μιας δύναμης που δεν ήταν πλέον αυτοκρατορική."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1969,
      era: {
        en: "The Troubles",
        el: "Οι Ταραχές"
      },
      events: [
        {
          title: {
            en: "British troops deployed to Northern Ireland",
            el: "Βρετανικά στρατεύματα στη Βόρεια Ιρλανδία"
          },
          description: {
            en: "After two years of escalating sectarian violence — Catholic civil-rights marches, Protestant counter-attacks, the burning of Bombay Street in Belfast — Harold Wilson's government deploys troops on the streets of Belfast and Londonderry in August. The Troubles have begun.",
            el: "Μετά από δύο χρόνια κλιμακούμενης θρησκευτικής βίας — πορείες πολιτικών δικαιωμάτων των καθολικών, προτεσταντικές αντεπιθέσεις, η πυρπόληση της οδού Μπόμπεϊ στο Μπέλφαστ — η κυβέρνηση του Χάρολντ Γουίλσον αναπτύσσει στρατεύματα στους δρόμους του Μπέλφαστ και του Λονδονντέρι τον Αύγουστο. Οι Ταραχές έχουν αρχίσει."
          },
          extendedDescription: {
            en: "The conflict that followed — Provisional IRA, Loyalist paramilitaries, British army, and a polarised civilian population — killed 3,500 people over thirty years, the British state's longest military deployment of the modern era. Bloody Sunday in Derry (1972), the Birmingham pub bombings (1974), the Brighton hotel bomb (1984) that nearly killed Margaret Thatcher, the Warrington and Manchester bombs, and the daily attrition of soldiers and civilians made the Troubles a constant background to British political life. Peace came only in 1998 after secret negotiations with the IRA.",
            el: "Η σύγκρουση που ακολούθησε — Προσωρινός IRA, παραστρατιωτικοί Πιστοί, Βρετανικός στρατός και πολωμένος άμαχος πληθυσμός — σκότωσε 3.500 ανθρώπους σε τριάντα χρόνια, η μακρύτερη στρατιωτική ανάπτυξη του βρετανικού κράτους της σύγχρονης εποχής. Η Ματωμένη Κυριακή στο Ντέρι (1972), οι βομβιστικές επιθέσεις στα παμπ του Μπέρμινχαμ (1974), η βόμβα στο ξενοδοχείο του Μπράιτον (1984) που παραλίγο να σκοτώσει τη Μάργκαρετ Θάτσερ, οι βόμβες στο Γουόρινγκτον και στο Μάντσεστερ και η καθημερινή φθορά στρατιωτών και αμάχων έκαναν τις Ταραχές σταθερό υπόβαθρο της βρετανικής πολιτικής ζωής. Η ειρήνη ήρθε μόνο το 1998 μετά από μυστικές διαπραγματεύσεις με τον IRA."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1973,
      era: {
        en: "European Britain",
        el: "Ευρωπαϊκή Βρετανία"
      },
      events: [
        {
          title: {
            en: "Britain joins the European Economic Community",
            el: "Η Βρετανία εντάσσεται στην Ευρωπαϊκή Οικονομική Κοινότητα"
          },
          description: {
            en: "On 1 January, under Edward Heath's Conservative government, the United Kingdom enters the EEC alongside Denmark and Ireland. Two earlier applications had been vetoed by Charles de Gaulle. A 1975 referendum confirms membership by two to one.",
            el: "Την 1η Ιανουαρίου, υπό τη συντηρητική κυβέρνηση του Έντουαρντ Χιθ, το Ηνωμένο Βασίλειο εντάσσεται στην ΕΟΚ μαζί με τη Δανία και την Ιρλανδία. Δύο προηγούμενες αιτήσεις είχαν τύχει βέτο από τον Σαρλ ντε Γκολ. Δημοψήφισμα το 1975 επικυρώνει τη συμμετοχή με δύο προς ένα."
          },
          extendedDescription: {
            en: "Membership reoriented British politics, trade, and law toward continental Europe for two generations. The Single European Act of 1986 — pushed by Margaret Thatcher's government — created the single market; the Maastricht Treaty in 1992 turned the EEC into the European Union. Successive British governments fought hard for opt-outs, a rebate on the budget contribution, exclusion from the euro and the Schengen area, and exemption from the Social Chapter. The compromises bought Britain forty-three years of awkward membership, ended by the 2016 referendum.",
            el: "Η συμμετοχή αναπροσανατόλισε τη βρετανική πολιτική, το εμπόριο και το δίκαιο προς την ηπειρωτική Ευρώπη για δύο γενιές. Η Ενιαία Ευρωπαϊκή Πράξη του 1986 — που προωθήθηκε από την κυβέρνηση της Μάργκαρετ Θάτσερ — δημιούργησε την ενιαία αγορά· η Συνθήκη του Μάαστριχτ το 1992 μετέτρεψε την ΕΟΚ σε Ευρωπαϊκή Ένωση. Διαδοχικές βρετανικές κυβερνήσεις πάλεψαν σκληρά για εξαιρέσεις, έκπτωση στη συνεισφορά του προϋπολογισμού, αποκλεισμό από το ευρώ και τη Σένγκεν, και απαλλαγή από το Κοινωνικό Κεφάλαιο. Οι συμβιβασμοί εξασφάλισαν στη Βρετανία σαράντα τρία χρόνια αμήχανης συμμετοχής, που τερματίστηκαν με το δημοψήφισμα του 2016."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1979,
      era: {
        en: "Thatcherism",
        el: "Θατσερισμός"
      },
      events: [
        {
          title: {
            en: "Margaret Thatcher becomes Prime Minister",
            el: "Η Μάργκαρετ Θάτσερ γίνεται πρωθυπουργός"
          },
          description: {
            en: "After the Winter of Discontent — strikes that left rubbish uncollected and the dead unburied — the Conservatives win the May election. Margaret Thatcher, the first woman to lead a major British party, becomes the first to lead a British government.",
            el: "Μετά τον Χειμώνα της Δυσαρέσκειας — απεργίες που άφησαν τα σκουπίδια ασυλλεγμένα και τους νεκρούς άταφους — οι Συντηρητικοί κερδίζουν τις εκλογές του Μαΐου. Η Μάργκαρετ Θάτσερ, η πρώτη γυναίκα που ηγείται μεγάλου βρετανικού κόμματος, γίνεται η πρώτη που ηγείται βρετανικής κυβέρνησης."
          },
          extendedDescription: {
            en: "Thatcher's eleven-and-a-half years in office reversed the postwar consensus: monetarism replaced full employment as policy, council houses were sold to their tenants, nationalised industries privatised, the unions broken in the miners' strike of 1984-85, the City deregulated in the Big Bang of 1986. The state retreated; the market expanded; inequality grew; manufacturing communities, especially in the north, were hollowed out. She won three elections, became the longest-serving prime minister of the twentieth century, and was eventually deposed by her own cabinet in 1990. Her settlement, modified, defined British politics for forty years.",
            el: "Τα έντεκα και μισό χρόνια της Θάτσερ στην εξουσία αντέστρεψαν τη μεταπολεμική συναίνεση: ο μονεταρισμός αντικατέστησε την πλήρη απασχόληση ως πολιτική, τα δημοτικά σπίτια πουλήθηκαν στους ενοίκους τους, οι εθνικοποιημένες βιομηχανίες ιδιωτικοποιήθηκαν, τα συνδικάτα έσπασαν στην απεργία των ανθρακωρύχων του 1984-85, η οικονομική αγορά απορρυθμίστηκε στο «Big Bang» του 1986. Το κράτος υποχώρησε· η αγορά επεκτάθηκε· η ανισότητα αυξήθηκε· οι βιομηχανικές κοινότητες, ιδίως στον βορρά, ερημώθηκαν. Κέρδισε τρεις εκλογές, έγινε η μακροβιότερη πρωθυπουργός του 20ού αιώνα και τελικά εκθρονίστηκε από το ίδιο της το υπουργικό συμβούλιο το 1990. Ο διακανονισμός της, τροποποιημένος, καθόρισε τη βρετανική πολιτική για σαράντα χρόνια."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1982,
      era: {
        en: "Thatcherism",
        el: "Θατσερισμός"
      },
      events: [
        {
          title: {
            en: "The Falklands War",
            el: "Ο Πόλεμος των Φώκλαντ"
          },
          description: {
            en: "After Argentina invades the Falkland Islands on 2 April, a British task force sails 8,000 miles south to retake them. Ten weeks of fighting at sea, in the air, and on the islands end with the Argentine surrender at Port Stanley on 14 June.",
            el: "Μετά την εισβολή της Αργεντινής στα νησιά Φώκλαντ στις 2 Απριλίου, μια βρετανική δύναμη ανατέθηκε σαλπάρει 8.000 μίλια νότια για να τα ανακαταλάβει. Δέκα εβδομάδες μαχών στη θάλασσα, στον αέρα και στα νησιά τερματίζονται με την αργεντίνικη παράδοση στο Πορτ Στάνλεϊ στις 14 Ιουνίου."
          },
          extendedDescription: {
            en: "The war cost 255 British and 649 Argentine lives. Politically it was decisive: Thatcher's poll ratings had been the worst of any prime minister; victory gave her the second term that allowed her domestic revolution, and broke the Argentine military junta. Thirty years later the survival of the colony of around 3,000 people, 13,000 km from Westminster, made Britain pour disproportionate resources into the South Atlantic. The Falklands also confirmed that the Royal Navy, much shrunken, could still conduct major expeditionary operations at the edge of its capacity.",
            el: "Ο πόλεμος κόστισε 255 βρετανικές και 649 αργεντίνικες ζωές. Πολιτικά υπήρξε καθοριστικός: τα ποσοστά της Θάτσερ ήταν τα χειρότερα οποιουδήποτε πρωθυπουργού· η νίκη της έδωσε τη δεύτερη θητεία που επέτρεψε την εσωτερική της επανάσταση και διέλυσε την αργεντίνικη στρατιωτική χούντα. Τριάντα χρόνια αργότερα η επιβίωση της αποικίας των περίπου 3.000 ανθρώπων, 13.000 χλμ. από το Ουέστμινστερ, ανάγκαζε τη Βρετανία να ρίχνει δυσανάλογους πόρους στον Νότιο Ατλαντικό. Τα Φώκλαντ επιβεβαίωσαν επίσης ότι το Βασιλικό Ναυτικό, αρκετά συρρικνωμένο, μπορούσε ακόμη να διεξάγει μεγάλες εκστρατευτικές επιχειρήσεις στο όριο της δυναμικότητάς του."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1997,
      era: {
        en: "New Labour",
        el: "Νέοι Εργατικοί"
      },
      events: [
        {
          title: {
            en: "Blair's landslide and devolution",
            el: "Σαρωτική νίκη του Μπλερ και αυτονομία"
          },
          description: {
            en: "After eighteen years of Conservative government, Tony Blair's reformed New Labour wins a 179-seat majority — the largest in any postwar election. Within months referendums in Scotland and Wales approve devolved parliaments at Edinburgh and assemblies at Cardiff.",
            el: "Μετά από δεκαοκτώ χρόνια Συντηρητικής διακυβέρνησης, οι μεταρρυθμισμένοι Νέοι Εργατικοί του Τόνι Μπλερ κερδίζουν πλειοψηφία 179 εδρών — τη μεγαλύτερη σε οποιεσδήποτε μεταπολεμικές εκλογές. Μέσα σε μήνες, δημοψηφίσματα στη Σκωτία και την Ουαλία εγκρίνουν αυτόνομα κοινοβούλια στο Εδιμβούργο και συνελεύσεις στο Κάρντιφ."
          },
          extendedDescription: {
            en: "The Blair government — joined after 2007 by Gordon Brown — accepted most of Thatcher's economic settlement while expanding public spending, the minimum wage, civil partnerships, and the Human Rights Act. Devolution permanently redrew the British constitution: Scotland gained tax powers and its own parliament for the first time since 1707, Wales for the first time ever; in 1999 a Northern Ireland Assembly followed. The unintended legacy was a strong Scottish nationalism that almost broke the Union in the 2014 independence referendum.",
            el: "Η κυβέρνηση Μπλερ — με τον Γκόρντον Μπράουν να εντάσσεται μετά το 2007 — αποδέχτηκε τον περισσότερο οικονομικό διακανονισμό της Θάτσερ ενώ επέκτεινε τις δημόσιες δαπάνες, τον κατώτατο μισθό, τις σύμφωνες συμβίωσης και τον Νόμο Ανθρωπίνων Δικαιωμάτων. Η αυτονομία αναμόρφωσε μόνιμα το βρετανικό σύνταγμα: η Σκωτία απέκτησε φορολογικές εξουσίες και δικό της κοινοβούλιο για πρώτη φορά από το 1707, η Ουαλία για πρώτη φορά ποτέ· το 1999 ακολούθησε η Συνέλευση της Βόρειας Ιρλανδίας. Η αθέλητη κληρονομιά ήταν ένας ισχυρός σκωτικός εθνικισμός που παραλίγο να σπάσει την Ένωση στο δημοψήφισμα ανεξαρτησίας του 2014."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1998,
      era: {
        en: "Northern Ireland Peace",
        el: "Ειρήνη στη Βόρεια Ιρλανδία"
      },
      events: [
        {
          title: {
            en: "Good Friday Agreement",
            el: "Συμφωνία της Μεγάλης Παρασκευής"
          },
          description: {
            en: "On 10 April, after two years of secret talks chaired by the American senator George Mitchell, the British and Irish governments, the SDLP, Sinn Féin, the UUP, and most of the loyalist parties sign an agreement at Stormont. Power-sharing, paramilitary decommissioning, and constitutional reform end thirty years of war.",
            el: "Στις 10 Απριλίου, μετά από δύο χρόνια μυστικών συνομιλιών υπό τον Αμερικανό γερουσιαστή Τζορτζ Μίτσελ, οι βρετανικές και ιρλανδικές κυβερνήσεις, το SDLP, η Σιν Φέιν, το UUP και τα περισσότερα κόμματα των Πιστών υπογράφουν συμφωνία στο Στόρμοντ. Η συμμετοχική εξουσία, ο αφοπλισμός παραστρατιωτικών και η συνταγματική μεταρρύθμιση τερματίζουν τριάντα χρόνια πολέμου."
          },
          extendedDescription: {
            en: "The Good Friday Agreement was one of the great diplomatic achievements of the late twentieth century. It established a Northern Ireland Assembly with mandatory cross-community participation, a North-South Ministerial Council linking Belfast and Dublin, and the principle that the constitutional status of Northern Ireland could only change by majority consent. The Republic of Ireland dropped its territorial claim. Implementation took a decade and the Assembly has been suspended several times, but the IRA destroyed its weapons in 2005 and the political violence has not returned at scale.",
            el: "Η Συμφωνία της Μεγάλης Παρασκευής υπήρξε ένα από τα μεγάλα διπλωματικά επιτεύγματα του ύστερου 20ού αιώνα. Καθιέρωσε μια Συνέλευση της Βόρειας Ιρλανδίας με υποχρεωτική διακοινοτική συμμετοχή, ένα Υπουργικό Συμβούλιο Βορρά-Νότου που συνδέει το Μπέλφαστ με το Δουβλίνο, και την αρχή ότι το συνταγματικό καθεστώς της Βόρειας Ιρλανδίας μπορεί να αλλάξει μόνο με την πλειοψηφική συναίνεση. Η Δημοκρατία της Ιρλανδίας απέσυρε τη διεκδίκηση επί του εδάφους. Η εφαρμογή χρειάστηκε μια δεκαετία και η Συνέλευση έχει ανασταλεί αρκετές φορές, αλλά ο IRA κατέστρεψε τα όπλα του το 2005 και η πολιτική βία δεν επέστρεψε σε μεγάλη κλίμακα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 2016,
      era: {
        en: "Brexit",
        el: "Brexit"
      },
      events: [
        {
          title: {
            en: "Brexit referendum",
            el: "Δημοψήφισμα για το Brexit"
          },
          description: {
            en: "On 23 June, in a referendum called by David Cameron to settle Conservative divisions, 17.4 million British voters (51.9 per cent) choose to leave the European Union. Cameron resigns the next morning; the pound falls eight per cent overnight.",
            el: "Στις 23 Ιουνίου, σε δημοψήφισμα που προκήρυξε ο Ντέιβιντ Κάμερον για να επιλύσει εσωτερικές διαφορές των Συντηρητικών, 17,4 εκατομμύρια Βρετανοί ψηφοφόροι (51,9%) επιλέγουν την έξοδο από την Ευρωπαϊκή Ένωση. Ο Κάμερον παραιτείται το επόμενο πρωί· η λίρα πέφτει οκτώ τοις εκατό σε μία νύχτα."
          },
          extendedDescription: {
            en: "The vote exposed and deepened a geography of grievance: London and Scotland strongly Remain, the English Midlands and Wales strongly Leave, the older against the younger, the graduate against the non-graduate. Three Conservative prime ministers — Cameron, May, Johnson — fell in succession trying to deliver it. The negotiations consumed Westminster for four years; the European Parliament watched, bemused. The eventual settlement of January 2020 took Britain out of the Single Market and Customs Union, ending the deepest economic and political integration in British history.",
            el: "Η ψηφοφορία αποκάλυψε και βάθυνε μια γεωγραφία δυσαρέσκειας: το Λονδίνο και η Σκωτία υπέρ της Παραμονής, τα αγγλικά Μίντλαντς και η Ουαλία υπέρ της Εξόδου, οι μεγαλύτεροι κατά των νεότερων, οι μη πτυχιούχοι κατά των πτυχιούχων. Τρεις Συντηρητικοί πρωθυπουργοί — Κάμερον, Μέι, Τζόνσον — έπεσαν διαδοχικά προσπαθώντας να την υλοποιήσουν. Οι διαπραγματεύσεις απορρόφησαν το Ουέστμινστερ για τέσσερα χρόνια· το Ευρωπαϊκό Κοινοβούλιο παρακολουθούσε σαστισμένο. Ο τελικός διακανονισμός του Ιανουαρίου 2020 έβγαλε τη Βρετανία από την Ενιαία Αγορά και την Τελωνειακή Ένωση, τερματίζοντας τη βαθύτερη οικονομική και πολιτική ενσωμάτωση στη βρετανική ιστορία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 2020,
      era: {
        en: "Brexit",
        el: "Brexit"
      },
      events: [
        {
          title: {
            en: "Britain leaves the European Union",
            el: "Η Βρετανία αποχωρεί από την Ευρωπαϊκή Ένωση"
          },
          description: {
            en: "At 11 p.m. on 31 January, after a delay of three and a half years and the collapse of two governments, the United Kingdom formally leaves the European Union — the first member ever to depart. A transitional period and a thin trade deal end the year in deadline negotiations on Christmas Eve.",
            el: "Στις 11 το βράδυ της 31ης Ιανουαρίου, μετά από καθυστέρηση τριών και μισό ετών και την κατάρρευση δύο κυβερνήσεων, το Ηνωμένο Βασίλειο αποχωρεί επίσημα από την Ευρωπαϊκή Ένωση — το πρώτο κράτος-μέλος που φεύγει. Μεταβατική περίοδος και μια λιτή εμπορική συμφωνία κλείνουν τη χρονιά σε διαπραγματεύσεις της τελευταίας στιγμής την παραμονή των Χριστουγέννων."
          },
          extendedDescription: {
            en: "The same year the Covid-19 pandemic shut Britain down for the first time outside wartime: nationwide lockdowns from March, the largest peacetime expansion of state spending in history, an NHS pushed beyond capacity, more than 200,000 deaths over the course of the pandemic. Boris Johnson, who had won an eighty-seat majority in December 2019 on a Brexit-finishing platform, was himself hospitalised in intensive care. The combined shock of Brexit and Covid produced the worst peacetime economic contraction in three hundred years and left the public finances in their worst state since the Second World War.",
            el: "Την ίδια χρονιά η πανδημία Covid-19 έκλεισε τη Βρετανία για πρώτη φορά εκτός εποχής πολέμου: πανεθνικά lockdown από τον Μάρτιο, η μεγαλύτερη ειρηνική επέκταση των κρατικών δαπανών στην ιστορία, ένα NHS πιεσμένο πέρα από τα όριά του, περισσότεροι από 200.000 θάνατοι κατά τη διάρκεια της πανδημίας. Ο Μπόρις Τζόνσον, που είχε κερδίσει πλειοψηφία ογδόντα εδρών τον Δεκέμβριο του 2019 με πρόγραμμα ολοκλήρωσης του Brexit, νοσηλεύτηκε ο ίδιος σε εντατική. Το συνδυασμένο σοκ του Brexit και της Covid προκάλεσε τη χειρότερη οικονομική συρρίκνωση σε εποχή ειρήνης εδώ και τριακόσια χρόνια και άφησε τα δημόσια οικονομικά στη χειρότερη κατάσταση από τον Β΄ Παγκόσμιο Πόλεμο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 2022,
      era: {
        en: "New Reign",
        el: "Νέα Βασιλεία"
      },
      events: [
        {
          title: {
            en: "Death of Queen Elizabeth II",
            el: "Θάνατος της βασίλισσας Ελισάβετ Β΄"
          },
          description: {
            en: "On 8 September Queen Elizabeth II dies at Balmoral aged 96, after a reign of 70 years and 214 days — the longest in British history. Her seventy-three-year-old son Charles accedes as Charles III, the first new monarch in living memory for most of the population.",
            el: "Στις 8 Σεπτεμβρίου η βασίλισσα Ελισάβετ Β΄ πεθαίνει στο Μπάλμοραλ σε ηλικία 96 ετών, μετά από βασιλεία 70 ετών και 214 ημερών — τη μακρότερη στη βρετανική ιστορία. Ο εβδομηνταριάχρονος γιος της Κάρολος ανέρχεται στον θρόνο ως Κάρολος Γ΄, ο πρώτος νέος μονάρχης στη ζωντανή μνήμη για το μεγαλύτερο μέρος του πληθυσμού."
          },
          extendedDescription: {
            en: "Operation London Bridge — the funeral plans rehearsed for decades — unfolded over ten days: lying-in-state at Westminster Hall with miles-long queues, the state funeral at Westminster Abbey, the committal at St George's Chapel, Windsor. Watched by an estimated four billion people, it was perhaps the largest single shared global media event in history. Charles III inherited a kingdom living through the cost-of-living crisis after Covid and the Russian invasion of Ukraine, a Conservative party in disarray (three prime ministers in 2022 alone), and a Union under continuing Scottish nationalist pressure. The New Carolean age has begun, after a hinge of British history seven decades long.",
            el: "Η Επιχείρηση Γέφυρα του Λονδίνου — τα σχέδια κηδείας που είχαν εξασκηθεί για δεκαετίες — εξελίχθηκαν σε δέκα ημέρες: λαϊκό προσκύνημα στην Αίθουσα του Ουέστμινστερ με ουρές μιλίων, η επίσημη κηδεία στο Αββαείο του Ουέστμινστερ, η τελετή ενταφιασμού στο Παρεκκλήσι του Αγίου Γεωργίου στο Ουίνδσορ. Παρακολουθούμενη από τέσσερα δισεκατομμύρια θεατές περίπου, υπήρξε ίσως το μεγαλύτερο μεμονωμένο κοινό παγκόσμιο μιντιακό γεγονός στην ιστορία. Ο Κάρολος Γ΄ κληρονόμησε ένα βασίλειο που ζούσε μια κρίση του κόστους ζωής μετά τον Covid και τη ρωσική εισβολή στην Ουκρανία, ένα Συντηρητικό κόμμα σε χάος (τρεις πρωθυπουργοί μόνο το 2022) και μια Ένωση υπό συνεχιζόμενη πίεση από τον σκωτικό εθνικισμό. Η Νέα Καρολίνεια εποχή ξεκίνησε, μετά από έναν αρθρωτικό άξονα της βρετανικής ιστορίας εβδομήντα ετών."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
