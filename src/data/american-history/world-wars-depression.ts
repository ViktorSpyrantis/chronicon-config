/** World Wars & Depression — Παγκόσμιοι Πόλεμοι & Ύφεση · American History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const WORLD_WARS_DEPRESSION = {
  id: "world-wars-depression" as const,
  label: {
    en: "World Wars & Depression",
    el: "Παγκόσμιοι Πόλεμοι & Ύφεση"
  },
  supertitle: {
    en: "Arsenal of Democracy · 1917-1945",
    el: "Οπλοστάσιο της Δημοκρατίας"
  },
  title: {
    en: "The World Wars & the Great Depression",
    el: "Οι Παγκόσμιοι Πόλεμοι & η Μεγάλη Ύφεση"
  },
  subtitle: {
    en: "From entry into World War I and the exuberant Jazz Age, through the Wall Street Crash and the New Deal's reshaping of government, to Pearl Harbor, D-Day, and the atomic bombs that ended World War II and left the United States the foremost power on earth. Slide across the years to relive an era of crisis and triumph.",
    el: "Από την είσοδο στον Α΄ Παγκόσμιο Πόλεμο και την εκρηκτική Εποχή της Τζαζ, μέσα από το Κραχ της Γουόλ Στριτ και την αναδιαμόρφωση της κυβέρνησης από το Νιου Ντιλ, ως το Περλ Χάρμπορ, την Απόβαση της Νορμανδίας και τις ατομικές βόμβες που τερμάτισαν τον Β΄ Παγκόσμιο Πόλεμο και άφησαν τις Ηνωμένες Πολιτείες την πρωταρχική δύναμη στη γη. Μετακινηθείτε ανάμεσα στα έτη για να ζήσετε ξανά μια εποχή κρίσης και θριάμβου."
  },
  menuDescription: {
    en: "Two world wars, the Great Depression, and the New Deal.",
    el: "Δύο παγκόσμιοι πόλεμοι, η Μεγάλη Ύφεση και το Νιου Ντιλ."
  },
  footerLabel: {
    en: "World Wars & Depression · 1917-1945",
    el: "Παγκόσμιοι Πόλεμοι & Ύφεση · 1917-1945"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The World Wars & the Great Depression",
    el: "Οι Παγκόσμιοι Πόλεμοι & η Μεγάλη Ύφεση"
  },
  theme: THEMES.onyx,
  timeline: [
    {
      year: 1917,
      era: {
        en: "The Great War",
        el: "Ο Μεγάλος Πόλεμος"
      },
      events: [
        {
          title: {
            en: "America enters World War I",
            el: "Η Αμερική μπαίνει στον Α΄ Παγκόσμιο Πόλεμο"
          },
          description: {
            en: "After German submarine attacks, the United States enters World War I. Fresh American troops help break the stalemate and tip the balance toward Allied victory in 1918.",
            el: "Μετά τις επιθέσεις γερμανικών υποβρυχίων, οι Ηνωμένες Πολιτείες μπαίνουν στον Α΄ Παγκόσμιο Πόλεμο. Φρέσκα αμερικανικά στρατεύματα βοηθούν να σπάσει το αδιέξοδο και γέρνουν την πλάστιγγα προς τη νίκη των Συμμάχων το 1918."
          },
          extendedDescription: {
            en: "Germany's return to unrestricted submarine warfare in February 1917 and the Zimmermann Telegram, in which Berlin offered Mexico the return of Texas, New Mexico and Arizona for an alliance, ended American neutrality; Congress declared war on 6 April. Under General John Pershing, some two million American soldiers reached France by the armistice, and about 116,000 died, more than half from disease, including the influenza pandemic. President Wilson's Fourteen Points shaped the peace, but the Senate refused to join his League of Nations.",
            el: "Η επιστροφή της Γερμανίας στον απεριόριστο υποβρύχιο πόλεμο τον Φεβρουάριο του 1917 και το Τηλεγράφημα Τσίμερμαν, με το οποίο το Βερολίνο πρόσφερε στο Μεξικό την επιστροφή του Τέξας, του Νέου Μεξικού και της Αριζόνας με αντάλλαγμα μια συμμαχία, τερμάτισαν την αμερικανική ουδετερότητα· το Κογκρέσο κήρυξε τον πόλεμο στις 6 Απριλίου. Υπό τον στρατηγό Τζον Πέρσινγκ, περίπου δύο εκατομμύρια Αμερικανοί στρατιώτες είχαν φτάσει στη Γαλλία ως την ανακωχή, και περίπου 116.000 σκοτώθηκαν, περισσότεροι από τους μισούς από αρρώστιες, μεταξύ αυτών και την πανδημία της γρίπης. Τα Δεκατέσσερα Σημεία του προέδρου Γουίλσον διαμόρφωσαν την ειρήνη, αλλά η Γερουσία αρνήθηκε την ένταξη στην Κοινωνία των Εθνών του."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1920,
      era: {
        en: "The Roaring Twenties",
        el: "Τα Βρυχώμενα Είκοσι"
      },
      events: [
        {
          title: {
            en: "Women's suffrage and the Jazz Age",
            el: "Η ψήφος των γυναικών και η Εποχή της Τζαζ"
          },
          description: {
            en: "The Nineteenth Amendment gives women the vote as the nation plunges into the Jazz Age — a decade of prosperity, automobiles, radio, and Prohibition-era excess.",
            el: "Η Δέκατη Ένατη Τροπολογία δίνει στις γυναίκες το δικαίωμα ψήφου καθώς το έθνος βυθίζεται στην Εποχή της Τζαζ — μια δεκαετία ευημερίας, αυτοκινήτων, ραδιοφώνου και υπερβολών της Ποτοαπαγόρευσης."
          },
          extendedDescription: {
            en: "The Nineteenth Amendment was ratified in August 1920 when Tennessee approved it by a single vote — that of a young legislator, Harry Burn, who changed his mind after a letter from his mother. The same year Prohibition banned alcohol, fuelling speakeasies and organised crime until its repeal in 1933. Radio broadcasting, mass-produced cars and Hollywood films created a national popular culture, while the Harlem Renaissance of writers like Langston Hughes and musicians like Louis Armstrong put Black artists at the centre of American art.",
            el: "Η Δέκατη Ένατη Τροπολογία επικυρώθηκε τον Αύγουστο του 1920, όταν το Τενεσί την ενέκρινε με μία μόνο ψήφο — εκείνη ενός νεαρού βουλευτή, του Χάρι Μπερν, που άλλαξε γνώμη μετά από ένα γράμμα της μητέρας του. Την ίδια χρονιά η Ποτοαπαγόρευση απαγόρευσε το αλκοόλ, τροφοδοτώντας παράνομα μπαρ και το οργανωμένο έγκλημα ως την κατάργησή της το 1933. Οι ραδιοφωνικές εκπομπές, τα αυτοκίνητα μαζικής παραγωγής και οι ταινίες του Χόλιγουντ δημιούργησαν μια εθνική λαϊκή κουλτούρα, ενώ η Αναγέννηση του Χάρλεμ, με συγγραφείς όπως ο Λάνγκστον Χιουζ και μουσικούς όπως ο Λούις Άρμστρονγκ, έφερε τους μαύρους καλλιτέχνες στο κέντρο της αμερικανικής τέχνης."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1929,
      era: {
        en: "Collapse",
        el: "Κατάρρευση"
      },
      events: [
        {
          title: {
            en: "The Wall Street Crash",
            el: "Το Κραχ της Γουόλ Στριτ"
          },
          description: {
            en: "The stock market collapses in October, wiping out fortunes and triggering the Great Depression — a decade of mass unemployment, bank failures, and hardship.",
            el: "Το χρηματιστήριο καταρρέει τον Οκτώβριο, εξανεμίζοντας περιουσίες και πυροδοτώντας τη Μεγάλη Ύφεση — μια δεκαετία μαζικής ανεργίας, τραπεζικών χρεοκοπιών και δυσπραγίας."
          },
          extendedDescription: {
            en: "Stocks had soared on borrowed money through the late 1920s. After panic selling on 'Black Thursday', 24 October, the market collapsed on 'Black Tuesday', 29 October, and by 1932 it had lost almost 90 percent of its value. Thousands of banks failed, taking depositors' savings with them, and by 1933 about a quarter of the workforce was unemployed; on the southern Plains, drought and dust storms turned the 'Dust Bowl' into a symbol of the era's misery.",
            el: "Οι μετοχές είχαν εκτιναχθεί με δανεικά χρήματα στα τέλη της δεκαετίας του 1920. Μετά από πανικόβλητες πωλήσεις τη «Μαύρη Πέμπτη», 24 Οκτωβρίου, η αγορά κατέρρευσε τη «Μαύρη Τρίτη», 29 Οκτωβρίου, και ως το 1932 είχε χάσει σχεδόν το 90% της αξίας της. Χιλιάδες τράπεζες χρεοκόπησαν παίρνοντας μαζί τους τις αποταμιεύσεις των καταθετών, και ως το 1933 περίπου το ένα τέταρτο του εργατικού δυναμικού ήταν άνεργο· στις νότιες Πεδιάδες, η ξηρασία και οι αμμοθύελλες έκαναν το «Ντάστ Μπόουλ» σύμβολο της δυστυχίας της εποχής."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1933,
      era: {
        en: "The New Deal",
        el: "Το Νιου Ντιλ"
      },
      events: [
        {
          title: {
            en: "Franklin Roosevelt and the New Deal",
            el: "Ο Φράνκλιν Ρούζβελτ και το Νιου Ντιλ"
          },
          description: {
            en: "President Franklin D. Roosevelt launches the New Deal, a sweeping program of relief and reform — from Social Security to public works — that reshapes the role of government.",
            el: "Ο πρόεδρος Φράνκλιν Ντ. Ρούζβελτ εγκαινιάζει το Νιου Ντιλ, ένα ευρύ πρόγραμμα ανακούφισης και μεταρρύθμισης — από την Κοινωνική Ασφάλιση ως τα δημόσια έργα — που αναδιαμορφώνει τον ρόλο της κυβέρνησης."
          },
          extendedDescription: {
            en: "Roosevelt's fireside radio chats reassured a frightened public, and agencies like the WPA and the CCC put millions back to work, though full recovery would come only with the war.",
            el: "Οι ραδιοφωνικές συνομιλίες του Ρούζβελτ δίπλα στο τζάκι καθησύχασαν ένα τρομαγμένο κοινό, και υπηρεσίες όπως η WPA και το CCC επανέφεραν εκατομμύρια στην εργασία, αν και η πλήρης ανάκαμψη θα ερχόταν μόνο με τον πόλεμο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1941,
      era: {
        en: "A Day of Infamy",
        el: "Μια ημέρα ατιμίας"
      },
      events: [
        {
          title: {
            en: "Pearl Harbor and entry into World War II",
            el: "Το Περλ Χάρμπορ και η είσοδος στον Β΄ Παγκόσμιο Πόλεμο"
          },
          description: {
            en: "Japan's surprise attack on Pearl Harbor draws the United States into World War II, mobilizing the nation's vast industrial power as the 'arsenal of democracy.'",
            el: "Η αιφνιδιαστική επίθεση της Ιαπωνίας στο Περλ Χάρμπορ σύρει τις Ηνωμένες Πολιτείες στον Β΄ Παγκόσμιο Πόλεμο, κινητοποιώντας την τεράστια βιομηχανική ισχύ του έθνους ως το «οπλοστάσιο της δημοκρατίας»."
          },
          extendedDescription: {
            en: "On the morning of 7 December 1941, Japanese carrier aircraft sank or damaged eight battleships and killed some 2,400 Americans; the U.S. aircraft carriers, away at sea, escaped. Roosevelt called it 'a date which will live in infamy', and four days later Germany declared war on the United States. American factories went on to build around 300,000 aircraft, women took millions of industrial jobs, and some 120,000 Japanese Americans, most of them citizens, were forced into internment camps.",
            el: "Το πρωί της 7ης Δεκεμβρίου 1941, ιαπωνικά αεροσκάφη από αεροπλανοφόρα βύθισαν ή έπληξαν οκτώ θωρηκτά και σκότωσαν περίπου 2.400 Αμερικανούς· τα αμερικανικά αεροπλανοφόρα, που βρίσκονταν στην ανοιχτή θάλασσα, γλίτωσαν. Ο Ρούζβελτ την αποκάλεσε «μια ημερομηνία που θα μείνει στην ατιμία», και τέσσερις μέρες αργότερα η Γερμανία κήρυξε τον πόλεμο στις Ηνωμένες Πολιτείες. Τα αμερικανικά εργοστάσια κατασκεύασαν στη συνέχεια περίπου 300.000 αεροσκάφη, οι γυναίκες ανέλαβαν εκατομμύρια βιομηχανικές θέσεις εργασίας, και περίπου 120.000 Ιαπωνοαμερικανοί, οι περισσότεροι πολίτες των ΗΠΑ, κλείστηκαν αναγκαστικά σε στρατόπεδα κράτησης."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1944,
      era: {
        en: "The Tide Turns",
        el: "Η πλάστιγγα γέρνει"
      },
      events: [
        {
          title: {
            en: "D-Day and the liberation of Europe",
            el: "Η Απόβαση της Νορμανδίας και η απελευθέρωση της Ευρώπης"
          },
          description: {
            en: "American, British, and Canadian forces storm the beaches of Normandy on D-Day, opening the Western Front that will help crush Nazi Germany.",
            el: "Αμερικανικές, βρετανικές και καναδικές δυνάμεις εφορμούν στις παραλίες της Νορμανδίας κατά την Απόβαση, ανοίγοντας το Δυτικό Μέτωπο που θα βοηθήσει να συντριβεί η ναζιστική Γερμανία."
          },
          extendedDescription: {
            en: "Under the supreme command of General Dwight D. Eisenhower, some 156,000 Allied troops landed on five Normandy beaches on 6 June 1944, supported by thousands of ships and aircraft; American losses were heaviest at Omaha Beach. After weeks of hard fighting in the hedgerow country, the Allies broke out, and Paris was liberated on 25 August. Germany's last great counter-offensive in the Ardennes, the Battle of the Bulge that December, was the largest battle the U.S. Army fought in the war.",
            el: "Υπό την ανώτατη διοίκηση του στρατηγού Ντουάιτ Αϊζενχάουερ, περίπου 156.000 συμμαχικοί στρατιώτες αποβιβάστηκαν σε πέντε παραλίες της Νορμανδίας στις 6 Ιουνίου 1944, με την υποστήριξη χιλιάδων πλοίων και αεροσκαφών· οι αμερικανικές απώλειες ήταν βαρύτερες στην παραλία Ομάχα. Μετά από εβδομάδες σκληρών μαχών στη χώρα των φρακτών, οι Σύμμαχοι διέσπασαν το μέτωπο, και το Παρίσι απελευθερώθηκε στις 25 Αυγούστου. Η τελευταία μεγάλη γερμανική αντεπίθεση στις Αρδέννες, η Μάχη του Εξογκώματος εκείνον τον Δεκέμβριο, ήταν η μεγαλύτερη μάχη που έδωσε ο αμερικανικός στρατός στον πόλεμο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1945,
      era: {
        en: "Victory and the Atom",
        el: "Νίκη και το άτομο"
      },
      events: [
        {
          title: {
            en: "Victory and the atomic bomb",
            el: "Νίκη και η ατομική βόμβα"
          },
          description: {
            en: "Germany surrenders in May; in August atomic bombs on Hiroshima and Nagasaki end the war with Japan, leaving the United States the world's foremost military and economic power.",
            el: "Η Γερμανία παραδίδεται τον Μάιο· τον Αύγουστο ατομικές βόμβες στη Χιροσίμα και το Ναγκασάκι τερματίζουν τον πόλεμο με την Ιαπωνία, αφήνοντας τις Ηνωμένες Πολιτείες την πρωταρχική στρατιωτική και οικονομική δύναμη του κόσμου."
          },
          extendedDescription: {
            en: "Roosevelt died on 12 April 1945, weeks before Germany's surrender, and Harry Truman learned only as president of the secret Manhattan Project. The bombs dropped on Hiroshima on 6 August and Nagasaki on 9 August killed well over 100,000 people by the end of the year; with the Soviet Union also entering the war against Japan, Emperor Hirohito announced surrender on 15 August, and the formal ceremony took place aboard USS Missouri on 2 September. Some 405,000 Americans had died in the war, and that year the United Nations was founded in San Francisco.",
            el: "Ο Ρούζβελτ πέθανε στις 12 Απριλίου 1945, εβδομάδες πριν από τη συνθηκολόγηση της Γερμανίας, και ο Χάρι Τρούμαν έμαθε μόνο ως πρόεδρος για το μυστικό Σχέδιο Μανχάταν. Οι βόμβες που ρίχτηκαν στη Χιροσίμα στις 6 Αυγούστου και στο Ναγκασάκι στις 9 Αυγούστου σκότωσαν πολύ περισσότερους από 100.000 ανθρώπους ως το τέλος της χρονιάς· με τη Σοβιετική Ένωση να μπαίνει επίσης στον πόλεμο κατά της Ιαπωνίας, ο αυτοκράτορας Χιροχίτο ανακοίνωσε τη συνθηκολόγηση στις 15 Αυγούστου, και η επίσημη τελετή έγινε πάνω στο USS Missouri στις 2 Σεπτεμβρίου. Περίπου 405.000 Αμερικανοί είχαν σκοτωθεί στον πόλεμο, και εκείνη τη χρονιά ιδρύθηκαν τα Ηνωμένα Έθνη στο Σαν Φρανσίσκο."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
