/** Soviet Union — Σοβιετική Ένωση · Russian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const SOVIET_UNION = {
  id: "soviet-union" as const,
  label: {
    en: "Soviet Union",
    el: "Σοβιετική Ένωση"
  },
  supertitle: {
    en: "СССР · USSR",
    el: "СССР · ΕΣΣΔ"
  },
  title: {
    en: "The Soviet Union",
    el: "Η Σοβιετική Ένωση"
  },
  subtitle: {
    en: "From the foundation of the USSR in 1922 and the death of Lenin through Stalin's five-year plans, collectivization, the Great Terror, and the triumph and trauma of the Great Patriotic War, the Cold War and the space race, the thaw and the long stagnation, to Gorbachev's perestroika, Chernobyl, the fall of the Eastern Bloc, and the dissolution of the union in 1991. Slide across the decades to read the major events of the world's first socialist superpower.",
    el: "Από την ίδρυση της ΕΣΣΔ το 1922 και τον θάνατο του Λένιν, μέσα από τα πεντάχρονα σχέδια του Στάλιν, την κολεκτιβοποίηση, τον Μεγάλο Τρόμο και τον θρίαμβο και το τραύμα του Μεγάλου Πατριωτικού Πολέμου, τον Ψυχρό Πόλεμο και την κούρσα του διαστήματος, την απόψυξη και τη μακρά στασιμότητα, έως την περεστρόικα του Γκορμπατσόφ, το Τσερνόμπιλ, την πτώση του Ανατολικού Μπλοκ και τη διάλυση της ένωσης το 1991. Μετακινηθείτε ανάμεσα στις δεκαετίες για να διαβάσετε τα σημαντικότερα γεγονότα της πρώτης σοσιαλιστικής υπερδύναμης του κόσμου."
  },
  menuDescription: {
    en: "Lenin to Gorbachev: revolution, terror, the Great Patriotic War, and collapse.",
    el: "Από τον Λένιν στον Γκορμπατσόφ: επανάσταση, τρόμος, ο Μεγάλος Πατριωτικός Πόλεμος κι η κατάρρευση."
  },
  footerLabel: {
    en: "Soviet Union · 1922-1991",
    el: "Σοβιετική Ένωση · 1922-1991"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Soviet Union",
    el: "Σοβιετική Ένωση"
  },
  theme: THEMES.crimson,
  timeline: [
    {
      year: 1922,
      era: {
        en: "Foundation",
        el: "Ίδρυση"
      },
      events: [
        {
          title: {
            en: "The Union of Soviet Socialist Republics is founded",
            el: "Ιδρύεται η Ένωση Σοβιετικών Σοσιαλιστικών Δημοκρατιών"
          },
          description: {
            en: "On 30 December 1922, the Russian, Ukrainian, Belarusian, and Transcaucasian republics unite to form the USSR, the world's first socialist federal state.",
            el: "Στις 30 Δεκεμβρίου 1922, η ρωσική, η ουκρανική, η λευκορωσική και η υπερκαυκασιανή δημοκρατία ενώνονται για να σχηματίσουν την ΕΣΣΔ, το πρώτο σοσιαλιστικό ομοσπονδιακό κράτος στον κόσμο."
          },
          extendedDescription: {
            en: "Built on the ruins of the Russian Empire after revolution and civil war, the new union was nominally a federation of equal republics but in practice was ruled from Moscow by the Communist Party. The recovering economy still operated under Lenin's market-friendly New Economic Policy.",
            el: "Χτισμένη στα ερείπια της Ρωσικής Αυτοκρατορίας μετά από επανάσταση και εμφύλιο πόλεμο, η νέα ένωση ήταν ονομαστικά μια ομοσπονδία ισότιμων δημοκρατιών, αλλά στην πράξη κυβερνιόταν από τη Μόσχα από το Κομμουνιστικό Κόμμα. Η ανακάμπτουσα οικονομία λειτουργούσε ακόμη υπό τη φιλική προς την αγορά Νέα Οικονομική Πολιτική του Λένιν."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1924,
      era: {
        en: "Death of Lenin",
        el: "Θάνατος του Λένιν"
      },
      events: [
        {
          title: {
            en: "Lenin dies and the succession struggle opens",
            el: "Ο Λένιν πεθαίνει και ανοίγει ο αγώνας διαδοχής"
          },
          description: {
            en: "Vladimir Lenin dies after a series of strokes; his body is embalmed and a power struggle begins between Stalin and Trotsky.",
            el: "Ο Βλαντίμιρ Λένιν πεθαίνει έπειτα από σειρά εγκεφαλικών· η σορός του ταριχεύεται και αρχίζει αγώνας εξουσίας ανάμεσα στον Στάλιν και τον Τρότσκι."
          },
          extendedDescription: {
            en: "Lenin's 'Testament' had warned against Stalin's concentration of power, but the document was suppressed. Over the next years Stalin, as General Secretary, outmaneuvered Trotsky, Zinoviev, Kamenev, and Bukharin to become undisputed leader.",
            el: "Η «Διαθήκη» του Λένιν είχε προειδοποιήσει για τη συγκέντρωση εξουσίας του Στάλιν, αλλά το έγγραφο αποσιωπήθηκε. Τα επόμενα χρόνια ο Στάλιν, ως Γενικός Γραμματέας, ξεπέρασε σε ελιγμούς τον Τρότσκι, τον Ζηνόβιεφ, τον Κάμενεφ και τον Μπουχάριν για να γίνει αδιαμφισβήτητος ηγέτης."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1928,
      era: {
        en: "The Five-Year Plans",
        el: "Τα Πεντάχρονα Σχέδια"
      },
      events: [
        {
          title: {
            en: "The First Five-Year Plan and collectivization",
            el: "Το Πρώτο Πεντάχρονο Σχέδιο και η κολεκτιβοποίηση"
          },
          description: {
            en: "Stalin launches the First Five-Year Plan, forcing breakneck industrialization and the collectivization of peasant agriculture.",
            el: "Ο Στάλιν εξαπολύει το Πρώτο Πεντάχρονο Σχέδιο, επιβάλλοντας ιλιγγιώδη εκβιομηχάνιση και την κολεκτιβοποίηση της αγροτικής γεωργίας."
          },
          extendedDescription: {
            en: "The plans built vast new industries, dams, and cities like Magnitogorsk almost overnight. Collectivization destroyed the independent peasantry: millions of 'kulaks' were deported or killed, and the upheaval helped cause catastrophic famine.",
            el: "Τα σχέδια έχτισαν τεράστιες νέες βιομηχανίες, φράγματα και πόλεις όπως το Μαγκνιτογκόρσκ σχεδόν εν μία νυκτί. Η κολεκτιβοποίηση κατέστρεψε την ανεξάρτητη αγροτιά: εκατομμύρια «κουλάκοι» εκτοπίστηκαν ή σκοτώθηκαν, και η αναταραχή συνέβαλε στην πρόκληση καταστροφικού λιμού."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1932,
      era: {
        en: "Famine",
        el: "Λιμός"
      },
      events: [
        {
          title: {
            en: "The famine of 1932-1933 and the Holodomor",
            el: "Ο λιμός του 1932-1933 και το Χολοντομόρ"
          },
          description: {
            en: "Forced grain requisitions amid collectivization cause a famine that kills millions, with Ukraine — the Holodomor — and Kazakhstan worst affected.",
            el: "Οι βίαιες επιτάξεις σιτηρών εν μέσω της κολεκτιβοποίησης προκαλούν λιμό που σκοτώνει εκατομμύρια, με την Ουκρανία — το Χολοντομόρ — και το Καζακστάν να πλήττονται περισσότερο."
          },
          extendedDescription: {
            en: "The famine was driven by impossible procurement quotas, the seizure of all food, and bans on peasants leaving the affected regions. Many countries now recognize the Ukrainian Holodomor as a genocide; debate over Soviet intent continues.",
            el: "Ο λιμός προκλήθηκε από ανέφικτες ποσοστώσεις παράδοσης, την κατάσχεση όλων των τροφίμων και την απαγόρευση εξόδου των χωρικών από τις πληγείσες περιοχές. Πολλές χώρες αναγνωρίζουν σήμερα το ουκρανικό Χολοντομόρ ως γενοκτονία· η συζήτηση για τη σοβιετική πρόθεση συνεχίζεται."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1936,
      era: {
        en: "The Great Terror",
        el: "Ο Μεγάλος Τρόμος"
      },
      events: [
        {
          title: {
            en: "The Great Purge and the Moscow Trials",
            el: "Η Μεγάλη Εκκαθάριση και οι Δίκες της Μόσχας"
          },
          description: {
            en: "Stalin unleashes a campaign of terror, with show trials of Old Bolsheviks and mass arrests and executions carried out by the NKVD.",
            el: "Ο Στάλιν εξαπολύει εκστρατεία τρόμου, με δίκες-βιτρίνα παλαιών Μπολσεβίκων και μαζικές συλλήψεις και εκτελέσεις από την NKVD."
          },
          extendedDescription: {
            en: "Sparked by the 1934 murder of the party leader Sergei Kirov, the Great Terror of 1936-1938 killed perhaps three-quarters of a million people and sent millions more to the Gulag labor camps. The purge gutted the party, the army officer corps, and society at large.",
            el: "Πυροδοτημένος από τη δολοφονία του ηγέτη του κόμματος Σεργκέι Κίροφ το 1934, ο Μεγάλος Τρόμος του 1936-1938 σκότωσε ίσως τρία τέταρτα του εκατομμυρίου ανθρώπους και έστειλε εκατομμύρια άλλους στα στρατόπεδα καταναγκαστικής εργασίας Γκουλάγκ. Η εκκαθάριση αποδεκάτισε το κόμμα, το σώμα των αξιωματικών του στρατού και την κοινωνία ευρύτερα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1939,
      era: {
        en: "The Nazi-Soviet Pact",
        el: "Το Ναζιστικο-Σοβιετικό Σύμφωνο"
      },
      events: [
        {
          title: {
            en: "The Molotov-Ribbentrop Pact",
            el: "Το Σύμφωνο Μολότοφ-Ρίμπεντροπ"
          },
          description: {
            en: "The USSR and Nazi Germany sign a non-aggression pact whose secret protocol divides Eastern Europe; days later the Second World War begins.",
            el: "Η ΕΣΣΔ και η ναζιστική Γερμανία υπογράφουν σύμφωνο μη επίθεσης του οποίου το μυστικό πρωτόκολλο διαμοιράζει την Ανατολική Ευρώπη· λίγες ημέρες αργότερα αρχίζει ο Β΄ Παγκόσμιος Πόλεμος."
          },
          extendedDescription: {
            en: "The pact let Stalin annex eastern Poland, the Baltic states, and parts of Romania and Finland. It bought time to prepare for war, but Soviet purges and complacency would leave the Red Army dangerously exposed when Hitler struck in 1941.",
            el: "Το σύμφωνο επέτρεψε στον Στάλιν να προσαρτήσει την ανατολική Πολωνία, τα κράτη της Βαλτικής και τμήματα της Ρουμανίας και της Φινλανδίας. Κέρδισε χρόνο για προετοιμασία πολέμου, αλλά οι σοβιετικές εκκαθαρίσεις και ο εφησυχασμός θα άφηναν τον Κόκκινο Στρατό επικίνδυνα εκτεθειμένο όταν χτύπησε ο Χίτλερ το 1941."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1941,
      era: {
        en: "The Great Patriotic War",
        el: "Ο Μεγάλος Πατριωτικός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Operation Barbarossa",
            el: "Επιχείρηση Μπαρμπαρόσα"
          },
          description: {
            en: "Germany launches the largest invasion in history; the Wehrmacht drives deep into Soviet territory and reaches the outskirts of Moscow before being halted.",
            el: "Η Γερμανία εξαπολύει τη μεγαλύτερη εισβολή στην ιστορία· η Βέρμαχτ διεισδύει βαθιά στο σοβιετικό έδαφος και φτάνει στα προάστια της Μόσχας προτού αναχαιτιστεί."
          },
          extendedDescription: {
            en: "The surprise attack of 22 June inflicted staggering losses, but the Soviet state survived. Industry was evacuated east, the winter and fierce resistance stopped the Germans before Moscow, and a war of unprecedented brutality engulfed the eastern front.",
            el: "Η αιφνιδιαστική επίθεση της 22ας Ιουνίου προκάλεσε συγκλονιστικές απώλειες, αλλά το σοβιετικό κράτος επιβίωσε. Η βιομηχανία μεταφέρθηκε ανατολικά, ο χειμώνας και η σφοδρή αντίσταση σταμάτησαν τους Γερμανούς πριν από τη Μόσχα, και ένας πόλεμος πρωτοφανούς βαναυσότητας κατέκλυσε το ανατολικό μέτωπο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1943,
      era: {
        en: "The Tide Turns",
        el: "Η ροή αντιστρέφεται"
      },
      events: [
        {
          title: {
            en: "Victory at Stalingrad",
            el: "Η νίκη στο Στάλινγκραντ"
          },
          description: {
            en: "The encirclement and destruction of the German Sixth Army at Stalingrad marks the great turning point of the war on the eastern front.",
            el: "Η περικύκλωση και καταστροφή της γερμανικής Έκτης Στρατιάς στο Στάλινγκραντ σηματοδοτεί το μεγάλο σημείο καμπής του πολέμου στο ανατολικό μέτωπο."
          },
          extendedDescription: {
            en: "After Stalingrad and the vast tank battle at Kursk later in 1943, the Red Army seized the initiative for good. At a cost of some 27 million Soviet dead, it drove the Wehrmacht back across Eastern Europe toward Berlin.",
            el: "Μετά το Στάλινγκραντ και την τεράστια μάχη αρμάτων στο Κουρσκ αργότερα το 1943, ο Κόκκινος Στρατός πήρε οριστικά την πρωτοβουλία. Με κόστος περίπου 27 εκατομμύρια σοβιετικούς νεκρούς, έσπρωξε τη Βέρμαχτ πίσω μέσα από την Ανατολική Ευρώπη προς το Βερολίνο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1945,
      era: {
        en: "Victory and Empire",
        el: "Νίκη και αυτοκρατορία"
      },
      events: [
        {
          title: {
            en: "Victory over Germany and the new world order",
            el: "Η νίκη επί της Γερμανίας και η νέα παγκόσμια τάξη"
          },
          description: {
            en: "Soviet forces capture Berlin; at Yalta and Potsdam the USSR secures dominance over Eastern Europe and emerges as a superpower.",
            el: "Σοβιετικές δυνάμεις καταλαμβάνουν το Βερολίνο· στη Γιάλτα και το Πότσνταμ η ΕΣΣΔ εξασφαλίζει κυριαρχία στην Ανατολική Ευρώπη και αναδεικνύεται σε υπερδύναμη."
          },
          extendedDescription: {
            en: "Victory in the Great Patriotic War became the central legitimizing myth of the Soviet state. The Red Army's presence allowed communist governments to be installed across Eastern Europe, drawing the 'Iron Curtain' that would divide the continent for forty years.",
            el: "Η νίκη στον Μεγάλο Πατριωτικό Πόλεμο έγινε ο κεντρικός νομιμοποιητικός μύθος του σοβιετικού κράτους. Η παρουσία του Κόκκινου Στρατού επέτρεψε την εγκατάσταση κομμουνιστικών κυβερνήσεων σε όλη την Ανατολική Ευρώπη, χαράσσοντας το «Σιδηρούν Παραπέτασμα» που θα διαιρούσε την ήπειρο για σαράντα χρόνια."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1949,
      era: {
        en: "The Cold War",
        el: "Ο Ψυχρός Πόλεμος"
      },
      events: [
        {
          title: {
            en: "The Soviet atomic bomb",
            el: "Η σοβιετική ατομική βόμβα"
          },
          description: {
            en: "The USSR tests its first atomic bomb, breaking the American nuclear monopoly and ushering in the nuclear arms race of the Cold War.",
            el: "Η ΕΣΣΔ δοκιμάζει την πρώτη της ατομική βόμβα, σπάζοντας το αμερικανικό πυρηνικό μονοπώλιο και εγκαινιάζοντας την πυρηνική κούρσα εξοπλισμών του Ψυχρού Πολέμου."
          },
          extendedDescription: {
            en: "The same year saw the founding of Comecon to bind the Eastern Bloc economies and the victory of communism in China. The world was dividing into two armed camps, a confrontation that would define global politics for decades.",
            el: "Την ίδια χρονιά ιδρύθηκε η Κομεκόν για να συνδέσει τις οικονομίες του Ανατολικού Μπλοκ και θριάμβευσε ο κομμουνισμός στην Κίνα. Ο κόσμος διαιρούνταν σε δύο ένοπλα στρατόπεδα, μια αντιπαράθεση που θα καθόριζε την παγκόσμια πολιτική για δεκαετίες."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1953,
      era: {
        en: "Death of Stalin",
        el: "Θάνατος του Στάλιν"
      },
      events: [
        {
          title: {
            en: "Stalin dies and the Thaw begins",
            el: "Ο Στάλιν πεθαίνει και αρχίζει η Απόψυξη"
          },
          description: {
            en: "Joseph Stalin dies after nearly thirty years in power; a collective leadership emerges and the secret police chief Beria is arrested and shot.",
            el: "Ο Ιωσήφ Στάλιν πεθαίνει έπειτα από σχεδόν τριάντα χρόνια εξουσίας· αναδύεται μια συλλογική ηγεσία και ο αρχηγός της μυστικής αστυνομίας Μπέρια συλλαμβάνεται και εκτελείται."
          },
          extendedDescription: {
            en: "Stalin's death ended an era of mass terror. The struggle for the succession was won by Nikita Khrushchev, who began to release Gulag prisoners and to ease the harshest features of the Stalinist system in the period known as the Thaw.",
            el: "Ο θάνατος του Στάλιν τερμάτισε μια εποχή μαζικού τρόμου. Τον αγώνα διαδοχής κέρδισε ο Νικίτα Χρουστσόφ, ο οποίος άρχισε να απελευθερώνει κρατουμένους των Γκουλάγκ και να αμβλύνει τα σκληρότερα χαρακτηριστικά του σταλινικού συστήματος στην περίοδο γνωστή ως Απόψυξη."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1956,
      era: {
        en: "De-Stalinization",
        el: "Αποσταλινοποίηση"
      },
      events: [
        {
          title: {
            en: "Khrushchev's Secret Speech and Hungary",
            el: "Ο Μυστικός Λόγος του Χρουστσόφ και η Ουγγαρία"
          },
          description: {
            en: "Khrushchev denounces Stalin's crimes in a secret speech to the Party Congress, then crushes the Hungarian uprising with tanks the same year.",
            el: "Ο Χρουστσόφ καταγγέλλει τα εγκλήματα του Στάλιν σε μυστικό λόγο προς το Συνέδριο του Κόμματος, και έπειτα συντρίβει την ουγγρική εξέγερση με άρματα μάχης την ίδια χρονιά."
          },
          extendedDescription: {
            en: "The Secret Speech shook the communist world and began de-Stalinization, but the suppression of Hungary showed the strict limits of reform within the Soviet bloc. The contradiction between liberalization at home and control abroad would recur for decades.",
            el: "Ο Μυστικός Λόγος συγκλόνισε τον κομμουνιστικό κόσμο και ξεκίνησε την αποσταλινοποίηση, αλλά η καταστολή της Ουγγαρίας έδειξε τα αυστηρά όρια της μεταρρύθμισης εντός του σοβιετικού μπλοκ. Η αντίφαση ανάμεσα στη φιλελευθεροποίηση στο εσωτερικό και τον έλεγχο στο εξωτερικό θα επανερχόταν για δεκαετίες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1961,
      era: {
        en: "The Space Age",
        el: "Η Εποχή του Διαστήματος"
      },
      events: [
        {
          title: {
            en: "Gagarin becomes the first man in space",
            el: "Ο Γκαγκάριν γίνεται ο πρώτος άνθρωπος στο διάστημα"
          },
          description: {
            en: "Cosmonaut Yuri Gagarin orbits the Earth aboard Vostok 1, a triumph of Soviet science following the launch of Sputnik in 1957.",
            el: "Ο κοσμοναύτης Γιούρι Γκαγκάριν περιφέρεται γύρω από τη Γη με το Βοστόκ 1, θρίαμβος της σοβιετικής επιστήμης μετά την εκτόξευση του Σπούτνικ το 1957."
          },
          extendedDescription: {
            en: "The space race showcased Soviet technological prowess and prestige. The same year, to stem the flight of refugees, the East German regime built the Berlin Wall, the starkest symbol of the divided Cold War world.",
            el: "Η κούρσα του διαστήματος ανέδειξε τη σοβιετική τεχνολογική ικανότητα και κύρος. Την ίδια χρονιά, για να ανακόψει τη φυγή προσφύγων, το ανατολικογερμανικό καθεστώς έχτισε το Τείχος του Βερολίνου, το πιο έντονο σύμβολο του διαιρεμένου κόσμου του Ψυχρού Πολέμου."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1962,
      era: {
        en: "The Brink",
        el: "Στο χείλος"
      },
      events: [
        {
          title: {
            en: "The Cuban Missile Crisis",
            el: "Η Κρίση των Πυραύλων της Κούβας"
          },
          description: {
            en: "The deployment of Soviet nuclear missiles in Cuba triggers a confrontation with the United States that brings the world to the edge of nuclear war.",
            el: "Η ανάπτυξη σοβιετικών πυρηνικών πυραύλων στην Κούβα προκαλεί αντιπαράθεση με τις Ηνωμένες Πολιτείες που φέρνει τον κόσμο στο χείλος πυρηνικού πολέμου."
          },
          extendedDescription: {
            en: "After thirteen tense days, Khrushchev withdrew the missiles in exchange for an American pledge not to invade Cuba and the secret removal of US missiles from Turkey. The terrifying brush with catastrophe led to arms-control talks and a partial test-ban treaty.",
            el: "Έπειτα από δεκατρείς τεταμένες ημέρες, ο Χρουστσόφ απέσυρε τους πυραύλους με αντάλλαγμα αμερικανική δέσμευση να μην εισβάλει στην Κούβα και τη μυστική απομάκρυνση αμερικανικών πυραύλων από την Τουρκία. Η τρομακτική εγγύτητα με την καταστροφή οδήγησε σε συνομιλίες ελέγχου εξοπλισμών και σε μερική συνθήκη απαγόρευσης δοκιμών."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1964,
      era: {
        en: "The Brezhnev Era",
        el: "Η Εποχή Μπρέζνιεφ"
      },
      events: [
        {
          title: {
            en: "Khrushchev is ousted; Brezhnev takes power",
            el: "Ο Χρουστσόφ ανατρέπεται· ο Μπρέζνιεφ αναλαμβάνει την εξουσία"
          },
          description: {
            en: "Leonid Brezhnev leads a Politburo coup that removes Khrushchev, beginning two decades of conservative, stable rule.",
            el: "Ο Λεονίντ Μπρέζνιεφ ηγείται πραξικοπήματος του Πολιτμπιρό που απομακρύνει τον Χρουστσόφ, εγκαινιάζοντας δύο δεκαετίες συντηρητικής, σταθερής διακυβέρνησης."
          },
          extendedDescription: {
            en: "The Brezhnev years brought stability, superpower parity, and rising living standards, but also creeping economic stagnation, corruption, and a sclerotic gerontocracy. The period later became known as the 'Era of Stagnation'.",
            el: "Τα χρόνια του Μπρέζνιεφ έφεραν σταθερότητα, ισοτιμία υπερδυνάμεων και άνοδο του βιοτικού επιπέδου, αλλά και βαθμιαία οικονομική στασιμότητα, διαφθορά και μια σκληρυμένη γεροντοκρατία. Η περίοδος έγινε αργότερα γνωστή ως «Εποχή της Στασιμότητας»."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1968,
      era: {
        en: "The Prague Spring",
        el: "Η Άνοιξη της Πράγας"
      },
      events: [
        {
          title: {
            en: "The invasion of Czechoslovakia",
            el: "Η εισβολή στην Τσεχοσλοβακία"
          },
          description: {
            en: "Warsaw Pact tanks crush the Prague Spring reform movement, and the Brezhnev Doctrine asserts Moscow's right to intervene in socialist states.",
            el: "Άρματα μάχης του Συμφώνου της Βαρσοβίας συντρίβουν το μεταρρυθμιστικό κίνημα της Άνοιξης της Πράγας, και το Δόγμα Μπρέζνιεφ διακηρύσσει το δικαίωμα της Μόσχας να επεμβαίνει σε σοσιαλιστικά κράτη."
          },
          extendedDescription: {
            en: "Alexander Dubček's attempt to build 'socialism with a human face' alarmed the Kremlin. The invasion ended hopes of reforming communism from within the bloc and disillusioned many Western communists, deepening the long stagnation.",
            el: "Η προσπάθεια του Αλεξάντερ Ντούμπτσεκ να οικοδομήσει «σοσιαλισμό με ανθρώπινο πρόσωπο» ανησύχησε το Κρεμλίνο. Η εισβολή τερμάτισε τις ελπίδες μεταρρύθμισης του κομμουνισμού εντός του μπλοκ και απογοήτευσε πολλούς δυτικούς κομμουνιστές, βαθαίνοντας τη μακρά στασιμότητα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1979,
      era: {
        en: "Afghanistan",
        el: "Αφγανιστάν"
      },
      events: [
        {
          title: {
            en: "The Soviet invasion of Afghanistan",
            el: "Η σοβιετική εισβολή στο Αφγανιστάν"
          },
          description: {
            en: "Soviet troops intervene to prop up a communist government in Afghanistan, beginning a nine-year war against US-backed mujahideen insurgents.",
            el: "Σοβιετικά στρατεύματα επεμβαίνουν για να στηρίξουν μια κομμουνιστική κυβέρνηση στο Αφγανιστάν, αρχίζοντας έναν εννιάχρονο πόλεμο κατά των ανταρτών μουτζαχεντίν που υποστηρίζονταν από τις ΗΠΑ."
          },
          extendedDescription: {
            en: "The war became the Soviet Union's Vietnam: a costly, unwinnable quagmire that drained resources and morale. It shattered détente, prompted a Western boycott of the 1980 Moscow Olympics, and contributed to the system's later collapse.",
            el: "Ο πόλεμος έγινε το Βιετνάμ της Σοβιετικής Ένωσης: ένα δαπανηρό, ανέφικτο τέλμα που αποστράγγισε πόρους και ηθικό. Διέλυσε την ύφεση, προκάλεσε δυτικό μποϊκοτάζ των Ολυμπιακών της Μόσχας του 1980 και συνέβαλε στη μεταγενέστερη κατάρρευση του συστήματος."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1985,
      era: {
        en: "Perestroika",
        el: "Περεστρόικα"
      },
      events: [
        {
          title: {
            en: "Gorbachev launches reform",
            el: "Ο Γκορμπατσόφ εξαπολύει μεταρρυθμίσεις"
          },
          description: {
            en: "Mikhail Gorbachev becomes leader and introduces perestroika (restructuring) and glasnost (openness) to revive the stagnant Soviet system.",
            el: "Ο Μιχαήλ Γκορμπατσόφ γίνεται ηγέτης και εισάγει την περεστρόικα (αναδιάρθρωση) και την γκλάσνοστ (διαφάνεια) για να αναζωογονήσει το στάσιμο σοβιετικό σύστημα."
          },
          extendedDescription: {
            en: "Gorbachev sought to save socialism through reform, easing censorship, allowing limited markets, and pursuing arms reduction with the West. Instead, openness exposed the system's failures and unleashed forces of national and democratic dissent he could not control.",
            el: "Ο Γκορμπατσόφ επιδίωξε να σώσει τον σοσιαλισμό μέσω μεταρρυθμίσεων, χαλαρώνοντας τη λογοκρισία, επιτρέποντας περιορισμένες αγορές και επιδιώκοντας μείωση εξοπλισμών με τη Δύση. Αντ' αυτού, η διαφάνεια αποκάλυψε τις αποτυχίες του συστήματος και απελευθέρωσε δυνάμεις εθνικής και δημοκρατικής αμφισβήτησης που δεν μπορούσε να ελέγξει."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1986,
      era: {
        en: "Chernobyl",
        el: "Τσερνόμπιλ"
      },
      events: [
        {
          title: {
            en: "The Chernobyl disaster",
            el: "Η καταστροφή του Τσερνόμπιλ"
          },
          description: {
            en: "A reactor at the Chernobyl nuclear plant in Ukraine explodes, causing history's worst nuclear accident and a vast radioactive contamination.",
            el: "Ένας αντιδραστήρας στον πυρηνικό σταθμό του Τσερνόμπιλ στην Ουκρανία εκρήγνυται, προκαλώντας το χειρότερο πυρηνικό ατύχημα στην ιστορία και τεράστια ραδιενεργό μόλυνση."
          },
          extendedDescription: {
            en: "The regime's initial secrecy and bungled response discredited the Soviet system and gave urgency to glasnost. For many, Chernobyl became a symbol of a sclerotic state that endangered its own people and could no longer hide the truth.",
            el: "Η αρχική μυστικοπάθεια του καθεστώτος και η κακοδιαχειρισμένη αντίδραση απαξίωσαν το σοβιετικό σύστημα και έδωσαν επείγοντα χαρακτήρα στην γκλάσνοστ. Για πολλούς, το Τσερνόμπιλ έγινε σύμβολο ενός σκληρυμένου κράτους που έθετε σε κίνδυνο τον ίδιο του τον λαό και δεν μπορούσε πλέον να κρύψει την αλήθεια."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1989,
      era: {
        en: "The Fall of the Bloc",
        el: "Η πτώση του Μπλοκ"
      },
      events: [
        {
          title: {
            en: "The collapse of the Eastern Bloc",
            el: "Η κατάρρευση του Ανατολικού Μπλοκ"
          },
          description: {
            en: "As Gorbachev refuses to intervene, communist regimes fall across Eastern Europe and the Berlin Wall is opened in November.",
            el: "Καθώς ο Γκορμπατσόφ αρνείται να επέμβει, κομμουνιστικά καθεστώτα πέφτουν σε όλη την Ανατολική Ευρώπη και το Τείχος του Βερολίνου ανοίγει τον Νοέμβριο."
          },
          extendedDescription: {
            en: "From Poland's Solidarity to the velvet revolutions and the fall of the Wall, 1989 ended Soviet control of Eastern Europe and effectively ended the Cold War. Within the USSR itself, nationalist movements in the republics now gathered force.",
            el: "Από την Αλληλεγγύη της Πολωνίας έως τις βελούδινες επαναστάσεις και την πτώση του Τείχους, το 1989 τερμάτισε τον σοβιετικό έλεγχο της Ανατολικής Ευρώπης και ουσιαστικά τερμάτισε τον Ψυχρό Πόλεμο. Εντός της ίδιας της ΕΣΣΔ, τα εθνικιστικά κινήματα στις δημοκρατίες αποκτούσαν τώρα δύναμη."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1991,
      era: {
        en: "Dissolution",
        el: "Διάλυση"
      },
      events: [
        {
          title: {
            en: "The August coup and the end of the USSR",
            el: "Το πραξικόπημα του Αυγούστου και το τέλος της ΕΣΣΔ"
          },
          description: {
            en: "A failed hardliner coup against Gorbachev accelerates the collapse; on 26 December the Soviet Union is formally dissolved into fifteen independent states.",
            el: "Ένα αποτυχημένο πραξικόπημα σκληροπυρηνικών κατά του Γκορμπατσόφ επιταχύνει την κατάρρευση· στις 26 Δεκεμβρίου η Σοβιετική Ένωση διαλύεται επίσημα σε δεκαπέντε ανεξάρτητα κράτη."
          },
          extendedDescription: {
            en: "Boris Yeltsin's defiance of the coup made him the dominant figure as the union disintegrated. The dissolution ended seven decades of communist rule and the Cold War order, leaving Russia and its neighbors to remake themselves amid economic turmoil.",
            el: "Η αψήφιση του πραξικοπήματος από τον Μπορίς Γιέλτσιν τον ανέδειξε σε κυρίαρχη μορφή καθώς η ένωση αποσυντίθετο. Η διάλυση τερμάτισε επτά δεκαετίες κομμουνιστικής διακυβέρνησης και την τάξη του Ψυχρού Πολέμου, αφήνοντας τη Ρωσία και τους γείτονές της να αναδημιουργηθούν μέσα σε οικονομική αναταραχή."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
