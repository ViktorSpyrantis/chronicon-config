/** Divided & Modern Germany — Διαιρεμένη & Σύγχρονη Γερμανία · German History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const MODERN_GERMANY = {
  id: "modern-germany" as const,
  label: {
    en: "Divided & Modern Germany",
    el: "Διαιρεμένη & Σύγχρονη Γερμανία"
  },
  supertitle: {
    en: "Bundesrepublik",
    el: "Ομοσπονδιακή Δημοκρατία"
  },
  title: {
    en: "Divided & Modern Germany",
    el: "Διαιρεμένη & Σύγχρονη Γερμανία"
  },
  subtitle: {
    en: "From the Potsdam Conference and the four zones of occupation through the Berlin Blockade and the founding of two German states, the 1953 uprising and the building of the Wall, the Élysée Treaty and Brandt's Ostpolitik, the German Autumn and Helmut Kohl, the fall of the Wall and reunification, the move of the capital back to Berlin and the introduction of the euro, the Merkel years and the refugee summer, to the Zeitenwende after Russia's invasion of Ukraine. Slide across the decades to read the major events of post-war Germany.",
    el: "Από το Συνέδριο του Πότσνταμ και τις τέσσερις ζώνες κατοχής μέσα από τον Αποκλεισμό του Βερολίνου και την ίδρυση δύο γερμανικών κρατών, την εξέγερση του 1953 και την κατασκευή του Τείχους, τη Συνθήκη του Ηλυσίου και την Ostpolitik του Μπραντ, το Γερμανικό Φθινόπωρο και τον Χέλμουτ Κολ, την πτώση του Τείχους και την επανένωση, τη μεταφορά της πρωτεύουσας πίσω στο Βερολίνο και την εισαγωγή του ευρώ, τα χρόνια Μέρκελ και το προσφυγικό καλοκαίρι, έως το Zeitenwende μετά την εισβολή της Ρωσίας στην Ουκρανία. Μετακινηθείτε ανάμεσα στις δεκαετίες για να διαβάσετε τα γεγονότα της μεταπολεμικής Γερμανίας."
  },
  menuDescription: {
    en: "Division and the Wall, reunification and the euro, from 1945 to the Zeitenwende.",
    el: "Διαίρεση και Τείχος, επανένωση και ευρώ, από το 1945 ως το Zeitenwende."
  },
  footerLabel: {
    en: "Divided & Modern Germany · 1945-Present",
    el: "Διαιρεμένη & Σύγχρονη Γερμανία · 1945-Σήμερα"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Divided & Modern Germany",
    el: "Διαιρεμένη & Σύγχρονη Γερμανία"
  },
  theme: THEMES.amber,
  timeline: [
    {
      year: 1945,
      era: {
        en: "Stunde Null",
        el: "Stunde Null"
      },
      events: [
        {
          title: {
            en: "Potsdam Conference and the four zones",
            el: "Συνέδριο του Πότσνταμ και οι τέσσερις ζώνες"
          },
          description: {
            en: "From 17 July to 2 August, Stalin, Truman, and Churchill — replaced mid-conference by Attlee — meet at Cecilienhof Palace outside Berlin. They divide Germany into four occupation zones, transfer the Polish frontier westward to the Oder-Neisse line, and authorise the expulsion of ethnic Germans from Czechoslovakia, Poland, and Hungary.",
            el: "Από τις 17 Ιουλίου έως τις 2 Αυγούστου, ο Στάλιν, ο Τρούμαν και ο Τσώρτσιλ — που αντικαθίσταται στη μέση της διάσκεψης από τον Άτλι — συναντώνται στο Παλάτι Cecilienhof έξω από το Βερολίνο. Διαιρούν τη Γερμανία σε τέσσερις ζώνες κατοχής, μεταφέρουν τα πολωνικά σύνορα δυτικά στη γραμμή Όντερ-Νάισε και εξουσιοδοτούν την εκδίωξη εθνικών Γερμανών από την Τσεχοσλοβακία, την Πολωνία και την Ουγγαρία."
          },
          extendedDescription: {
            en: "Between 1945 and 1950, twelve to fourteen million ethnic Germans were expelled from territories where their ancestors had lived for centuries — East Prussia, Pomerania, Silesia, the Sudetenland, the Banat. Perhaps half a million died on the trek west; the survivors flooded into the ruined remnants of the Reich, where over 70 percent of housing had been destroyed in many cities. The Allied Control Council governed the four zones jointly until the deepening Cold War paralysed it; meanwhile, Allied policy moved from Morgenthau's pastoralisation through JCS 1067 to the Marshall Plan and the active rebuilding of West German democracy. The Stunde Null — 'zero hour' — myth held that everything started over in May 1945. It did not; but it became the founding fiction of the new Germany.",
            el: "Μεταξύ 1945 και 1950, δώδεκα έως δεκατέσσερα εκατομμύρια εθνικοί Γερμανοί εκδιώχθηκαν από εδάφη όπου οι πρόγονοί τους είχαν ζήσει για αιώνες — Ανατολική Πρωσία, Πομερανία, Σιλεσία, Σουδητία, Βανάτι. Ίσως μισό εκατομμύριο πέθαναν στο ταξίδι προς τη Δύση· οι επιζώντες πλημμύρισαν στα ερειπωμένα υπολείμματα του Reich, όπου πάνω από 70 τοις εκατό των κατοικιών είχαν καταστραφεί σε πολλές πόλεις. Το Συμμαχικό Συμβούλιο Ελέγχου κυβέρνησε τις τέσσερις ζώνες από κοινού μέχρι που ο βαθαίνων Ψυχρός Πόλεμος το παρέλυσε· εν τω μεταξύ, η συμμαχική πολιτική κινήθηκε από την αγροτικοποίηση του Μόργκενθάου διαμέσου της JCS 1067 στο Σχέδιο Μάρσαλ και την ενεργό ανοικοδόμηση της δυτικογερμανικής δημοκρατίας. Ο μύθος του Stunde Null — «μηδενική ώρα» — υποστήριζε ότι όλα ξεκίνησαν από την αρχή τον Μάιο του 1945. Δεν ξεκίνησαν· αλλά έγινε ο ιδρυτικός μύθος της νέας Γερμανίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1948,
      era: {
        en: "Berlin Blockade",
        el: "Αποκλεισμός του Βερολίνου"
      },
      events: [
        {
          title: {
            en: "Marshall Plan, currency reform, and the Berlin Airlift",
            el: "Σχέδιο Μάρσαλ, νομισματική μεταρρύθμιση και η Αερογέφυρα του Βερολίνου"
          },
          description: {
            en: "On 20 June the western zones introduce the Deutsche Mark, replacing the worthless Reichsmark; three days later the Soviets blockade West Berlin. For 462 days, until 12 May 1949, American and British aircraft fly in 2.3 million tons of food, coal, and supplies. The blockade is a Soviet defeat.",
            el: "Στις 20 Ιουνίου οι δυτικές ζώνες εισάγουν το γερμανικό μάρκο, αντικαθιστώντας το αμελητέας αξίας Reichsmark· τρεις μέρες αργότερα οι Σοβιετικοί αποκλείουν το Δυτικό Βερολίνο. Για 462 ημέρες, μέχρι τις 12 Μαΐου 1949, αμερικανικά και βρετανικά αεροπλάνα μεταφέρουν 2,3 εκατομμύρια τόνους τροφίμων, άνθρακα και προμηθειών. Ο αποκλεισμός είναι σοβιετική ήττα."
          },
          extendedDescription: {
            en: "The currency reform under Ludwig Erhard — black-marketeer's nemesis and architect of the social market economy — instantly revived West German trade and signalled the integration of the western zones into a Western capitalist economy. The Marshall Plan, with $1.4 billion of US aid flowing into Germany between 1948 and 1951, accelerated the Wirtschaftswunder. The Berlin Airlift — Operation Vittles, run by General Lucius Clay and the legendary 'Candy Bomber' Gail Halvorsen — convinced West Berliners that the Americans would defend them. The blockade made the Cold War concrete, made permanent partition inevitable, and confirmed that West Germany would belong to the Atlantic world. The Federal Republic was founded in May 1949; the German Democratic Republic in October.",
            el: "Η νομισματική μεταρρύθμιση υπό τον Λούντβιχ Έρχαρτ — εχθρό της μαύρης αγοράς και αρχιτέκτονα της κοινωνικής οικονομίας της αγοράς — αναζωογόνησε ακαριαία το δυτικογερμανικό εμπόριο και σήμανε την ενσωμάτωση των δυτικών ζωνών σε δυτική καπιταλιστική οικονομία. Το Σχέδιο Μάρσαλ, με 1,4 δισεκατομμύρια δολάρια αμερικανικής βοήθειας να ρέουν στη Γερμανία μεταξύ 1948 και 1951, επιτάχυνε το Wirtschaftswunder. Η Αερογέφυρα του Βερολίνου — η Επιχείρηση Vittles, που διοικούσε ο Στρατηγός Lucius Clay και ο θρυλικός «Candy Bomber» Gail Halvorsen — έπεισε τους Δυτικοβερολινέζους ότι οι Αμερικανοί θα τους υπερασπίζονταν. Ο αποκλεισμός έκανε τον Ψυχρό Πόλεμο συγκεκριμένο, έκανε αναπόφευκτη τη μόνιμη διαίρεση και επιβεβαίωσε ότι η Δυτική Γερμανία θα ανήκε στον Ατλαντικό κόσμο. Η Ομοσπονδιακή Δημοκρατία ιδρύθηκε τον Μάιο του 1949· η Λαοκρατική Δημοκρατία της Γερμανίας τον Οκτώβριο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1949,
      era: {
        en: "Two Germanies",
        el: "Δύο Γερμανίες"
      },
      events: [
        {
          title: {
            en: "Founding of the Federal Republic and the GDR",
            el: "Ίδρυση της Ομοσπονδιακής Δημοκρατίας και της ΛΔΓ"
          },
          description: {
            en: "On 23 May the Basic Law (Grundgesetz) is promulgated; the Federal Republic of Germany is constituted at Bonn, with Konrad Adenauer of the CDU as first chancellor. On 7 October, in response, the Soviet zone is reorganised as the German Democratic Republic, with Walter Ulbricht's SED in power. Germany is divided.",
            el: "Στις 23 Μαΐου εκδίδεται ο Θεμελιώδης Νόμος (Grundgesetz)· η Ομοσπονδιακή Δημοκρατία της Γερμανίας συγκροτείται στη Βόννη, με τον Κόνραντ Αντενάουερ του CDU ως πρώτο καγκελάριο. Στις 7 Οκτωβρίου, ως απάντηση, η σοβιετική ζώνη αναδιοργανώνεται σε Λαοκρατική Δημοκρατία της Γερμανίας, με το SED του Βάλτερ Ούλμπριχτ στην εξουσία. Η Γερμανία είναι διαιρεμένη."
          },
          extendedDescription: {
            en: "The Basic Law was a deliberately provisional document, called Grundgesetz rather than Verfassung because the Western Allies and the Parliamentary Council under Carlo Schmid expected eventual reunification on West German terms. It enshrined eternal human dignity (Article 1), a federal structure, an independent Constitutional Court at Karlsruhe, and a 'militant democracy' (streitbare Demokratie) able to ban antidemocratic parties. Adenauer's CDU — Catholic, conservative, Atlanticist — would govern until 1969. East Germany's Basic Law of 1949 promised democracy too, but Ulbricht's Stalinist apparatus, the Stasi (founded 1950), and the dependence on Soviet troops made the GDR a Soviet satellite from the start. Two German states, two ideologies, two economies, two armies — and a frontier that would by 1961 be the most militarised in the world.",
            el: "Ο Θεμελιώδης Νόμος ήταν σκόπιμα προσωρινό έγγραφο, που ονομάστηκε Grundgesetz αντί για Verfassung επειδή οι Δυτικοί Σύμμαχοι και το Κοινοβουλευτικό Συμβούλιο υπό τον Κάρλο Σμιντ προσδοκούσαν τελική επανένωση με δυτικογερμανικούς όρους. Κατοχύρωσε αιώνια ανθρώπινη αξιοπρέπεια (Άρθρο 1), ομοσπονδιακή δομή, ανεξάρτητο Συνταγματικό Δικαστήριο στην Καρλσρούη και μια «μαχητική δημοκρατία» (streitbare Demokratie) ικανή να απαγορεύει αντιδημοκρατικά κόμματα. Το CDU του Αντενάουερ — καθολικό, συντηρητικό, ατλαντικό — θα κυβερνούσε μέχρι το 1969. Ο Θεμελιώδης Νόμος της Ανατολικής Γερμανίας του 1949 υποσχέθηκε επίσης δημοκρατία, αλλά ο σταλινικός μηχανισμός του Ούλμπριχτ, η Stasi (ιδρύθηκε 1950) και η εξάρτηση από σοβιετικά στρατεύματα έκαναν τη ΛΔΓ σοβιετικό δορυφόρο από την αρχή. Δύο γερμανικά κράτη, δύο ιδεολογίες, δύο οικονομίες, δύο στρατοί — και ένα σύνορο που έως το 1961 θα ήταν το πιο στρατιωτικοποιημένο στον κόσμο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1953,
      era: {
        en: "East German Uprising",
        el: "Εξέγερση της Ανατολικής Γερμανίας"
      },
      events: [
        {
          title: {
            en: "The 17 June uprising in East Berlin",
            el: "Η εξέγερση της 17ης Ιουνίου στο Ανατολικό Βερολίνο"
          },
          description: {
            en: "On 16 June construction workers on the Stalinallee strike against work-quota increases; the next day a million East Germans across 700 towns join in. Soviet T-34 tanks crush the demonstrators in Berlin and elsewhere; at least 55 are killed. The first popular rising in the Soviet bloc fails — but signals the GDR's chronic legitimacy crisis.",
            el: "Στις 16 Ιουνίου εργάτες οικοδομών στη Stalinallee απεργούν κατά αυξήσεων στα όρια εργασίας· την επόμενη μέρα ένα εκατομμύριο Ανατολικογερμανοί σε 700 πόλεις συμμετέχουν. Σοβιετικά άρματα μάχης Τ-34 συντρίβουν τους διαδηλωτές στο Βερολίνο και αλλού· τουλάχιστον 55 σκοτώνονται. Η πρώτη λαϊκή εξέγερση στο σοβιετικό μπλοκ αποτυγχάνει — αλλά σηματοδοτεί τη χρόνια κρίση νομιμοποίησης της ΛΔΓ."
          },
          extendedDescription: {
            en: "The June uprising broke out three months after Stalin's death, when Beria in Moscow was briefly considering abandoning East Germany altogether to permit a neutral, reunified Germany. The bloody suppression ended that option; Ulbricht's leadership was reinforced, and Beria fell in the Kremlin power struggle that followed. Brecht's response — 'The people had forfeited the confidence of the government, and could win it back only by redoubled labour. Would it not be easier in that case for the government to dissolve the people and elect another?' — captured the absurdity of a workers' state shooting workers. Between 1949 and 1961, before the Wall, two and a half million East Germans voted with their feet by going to West Berlin and the FRG.",
            el: "Η εξέγερση του Ιουνίου ξέσπασε τρεις μήνες μετά τον θάνατο του Στάλιν, όταν ο Μπέρια στη Μόσχα εξέταζε για λίγο την εγκατάλειψη της Ανατολικής Γερμανίας ώστε να επιτραπεί ουδέτερη, επανενωμένη Γερμανία. Η αιματηρή καταστολή έκλεισε αυτή την επιλογή· η ηγεσία του Ούλμπριχτ ενισχύθηκε και ο Μπέρια έπεσε στον αγώνα εξουσίας του Κρεμλίνου που ακολούθησε. Η απάντηση του Μπρεχτ — «Ο λαός είχε χάσει την εμπιστοσύνη της κυβέρνησης, και θα μπορούσε να την κερδίσει πίσω μόνο με διπλάσια εργασία. Δεν θα ήταν τότε ευκολότερο για την κυβέρνηση να διαλύσει τον λαό και να εκλέξει άλλον;» — αποτύπωσε τον παραλογισμό ενός εργατικού κράτους που πυροβολεί εργάτες. Μεταξύ 1949 και 1961, πριν από το Τείχος, δυόμισι εκατομμύρια Ανατολικογερμανοί ψήφισαν με τα πόδια τους πηγαίνοντας στο Δυτικό Βερολίνο και τη FRG."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1955,
      era: {
        en: "Sovereignty and NATO",
        el: "Κυριαρχία και ΝΑΤΟ"
      },
      events: [
        {
          title: {
            en: "West Germany joins NATO; East Germany joins the Warsaw Pact",
            el: "Η Δυτική Γερμανία εντάσσεται στο ΝΑΤΟ· η Ανατολική Γερμανία στο Σύμφωνο της Βαρσοβίας"
          },
          description: {
            en: "On 5 May the Paris Treaties restore West German sovereignty; on 9 May the Federal Republic joins NATO and the Bundeswehr is constituted. Five days later the Warsaw Pact is signed, with East Germany's Volksarmee admitted in 1956. The two German states are armed against each other under their respective superpower alliances.",
            el: "Στις 5 Μαΐου οι Συνθήκες των Παρισίων αποκαθιστούν τη δυτικογερμανική κυριαρχία· στις 9 Μαΐου η Ομοσπονδιακή Δημοκρατία εντάσσεται στο ΝΑΤΟ και συγκροτείται η Bundeswehr. Πέντε μέρες αργότερα υπογράφεται το Σύμφωνο της Βαρσοβίας, με την Volksarmee της Ανατολικής Γερμανίας να γίνεται δεκτή το 1956. Τα δύο γερμανικά κράτη είναι οπλισμένα το ένα κατά του άλλου υπό τις αντίστοιχες υπερδυναμικές συμμαχίες τους."
          },
          extendedDescription: {
            en: "Adenauer's Westbindung — anchoring the FRG firmly in the Atlantic camp — was the most consequential strategic decision of post-war Germany, and the most contested. The SPD opposition under Kurt Schumacher and then Erich Ollenhauer argued that NATO membership would entrench division and forfeit any chance of reunification on neutral terms. Adenauer judged that integration into the West was worth the price; he turned out to be right when the Soviet Union collapsed thirty-six years later and a reunified Germany could remain in NATO. The Bundeswehr, designed as a citizen-army with 'inner leadership' (Innere Führung) under parliamentary control, became the model of a democratic European military and broke decisively with the Wehrmacht tradition. By 1957 the Federal Republic was a founding member of the European Economic Community as well.",
            el: "Η Westbindung του Αντενάουερ — η σταθερή πρόσδεση της FRG στο Ατλαντικό στρατόπεδο — ήταν η πιο μοιραία στρατηγική απόφαση της μεταπολεμικής Γερμανίας, και η πιο αμφισβητούμενη. Η αντιπολίτευση του SPD υπό τον Κουρτ Σουμάχερ και κατόπιν τον Έριχ Όλενχάουερ υποστήριξε ότι η ένταξη στο ΝΑΤΟ θα παγίωνε τη διαίρεση και θα στερούσε κάθε ευκαιρία επανένωσης με ουδέτερους όρους. Ο Αντενάουερ έκρινε ότι η ενσωμάτωση στη Δύση άξιζε το τίμημα· αποδείχθηκε σωστός όταν η Σοβιετική Ένωση κατέρρευσε τριάντα έξι χρόνια αργότερα και μια επανενωμένη Γερμανία μπορούσε να παραμείνει στο ΝΑΤΟ. Η Bundeswehr, σχεδιασμένη ως πολιτικός στρατός με «εσωτερική ηγεσία» (Innere Führung) υπό κοινοβουλευτικό έλεγχο, έγινε το πρότυπο ενός δημοκρατικού ευρωπαϊκού στρατού και διέρρηξε αποφασιστικά την παράδοση της Wehrmacht. Έως το 1957 η Ομοσπονδιακή Δημοκρατία ήταν επίσης ιδρυτικό μέλος της Ευρωπαϊκής Οικονομικής Κοινότητας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1961,
      era: {
        en: "Berlin Wall",
        el: "Τείχος του Βερολίνου"
      },
      events: [
        {
          title: {
            en: "The Berlin Wall goes up",
            el: "Υψώνεται το Τείχος του Βερολίνου"
          },
          description: {
            en: "In the early hours of 13 August, East German troops and police begin sealing the boundary between East and West Berlin with barbed wire; the concrete wall follows in the days after. The 'Anti-Fascist Protection Rampart' is in fact built to stop the haemorrhage of East Germans to the West — 2,000 a day in the preceding weeks.",
            el: "Τις πρώτες ώρες της 13ης Αυγούστου, ανατολικογερμανικά στρατεύματα και αστυνομία αρχίζουν να σφραγίζουν το όριο μεταξύ Ανατολικού και Δυτικού Βερολίνου με συρματόπλεγμα· το τσιμεντένιο τείχος ακολουθεί τις επόμενες ημέρες. Το «Αντιφασιστικό Προστατευτικό Ανάχωμα» χτίζεται στην πραγματικότητα για να σταματήσει την αιμορραγία των Ανατολικογερμανών προς τη Δύση — 2.000 την ημέρα τις προηγούμενες εβδομάδες."
          },
          extendedDescription: {
            en: "The Wall was 155 kilometres long and was eventually a fortified system with watchtowers, dog runs, anti-vehicle ditches, and a death strip patrolled by border guards under orders to shoot. Between 1961 and 1989, at least 140 people were killed trying to cross it. The Wall solved the GDR's economic problem — the brain drain that had taken away its doctors, engineers, and skilled workers — at the cost of becoming the most dramatic symbol of communist failure in the twentieth century. President Kennedy went to West Berlin in June 1963 and declared 'Ich bin ein Berliner'. The Wall would stand for twenty-eight years and three days. When it fell, the world saw it as the end of the Cold War.",
            el: "Το Τείχος είχε μήκος 155 χιλιόμετρα και τελικά ήταν ένα οχυρωμένο σύστημα με σκοπιές, διαδρόμους σκυλιών, τάφρους αντιαρματικές και μια νεκρή ζώνη που περιπολούσαν συνοριοφύλακες με εντολές να πυροβολούν. Μεταξύ 1961 και 1989, τουλάχιστον 140 άνθρωποι σκοτώθηκαν προσπαθώντας να το διασχίσουν. Το Τείχος έλυσε το οικονομικό πρόβλημα της ΛΔΓ — την εγκεφαλική διαφυγή που είχε πάρει τους γιατρούς, μηχανικούς και ειδικευμένους εργάτες της — με κόστος να γίνει το πιο δραματικό σύμβολο της κομμουνιστικής αποτυχίας του εικοστού αιώνα. Ο Πρόεδρος Κένεντι πήγε στο Δυτικό Βερολίνο τον Ιούνιο του 1963 και διακήρυξε «Ich bin ein Berliner». Το Τείχος θα στεκόταν για είκοσι οχτώ χρόνια και τρεις μέρες. Όταν έπεσε, ο κόσμος το είδε ως το τέλος του Ψυχρού Πολέμου."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1963,
      era: {
        en: "Élysée Treaty",
        el: "Συνθήκη του Ηλυσίου"
      },
      events: [
        {
          title: {
            en: "The Élysée Treaty with France",
            el: "Η Συνθήκη του Ηλυσίου με τη Γαλλία"
          },
          description: {
            en: "On 22 January, Konrad Adenauer and Charles de Gaulle sign the Élysée Treaty in Paris, formalising Franco-German reconciliation. The hereditary enmity of three wars in seventy-five years becomes a partnership that will drive European integration for the next half-century.",
            el: "Στις 22 Ιανουαρίου, ο Κόνραντ Αντενάουερ και ο Σαρλ ντε Γκωλ υπογράφουν τη Συνθήκη του Ηλυσίου στο Παρίσι, επισημοποιώντας τη γαλλογερμανική συμφιλίωση. Η κληρονομική εχθρότητα τριών πολέμων σε εβδομηνταπέντε χρόνια γίνεται μια εταιρική σχέση που θα οδηγεί την ευρωπαϊκή ολοκλήρωση για τον επόμενο μισό αιώνα."
          },
          extendedDescription: {
            en: "The Élysée Treaty institutionalised what European political historian Alfred Grosser called 'the most successful Franco-German partnership since Charlemagne and Pope Leo III'. Twice-yearly summits, joint military exercises, the Franco-German Youth Office (which by the 2020s would have organised exchanges for more than nine million young people): the architecture of reconciliation was deliberate and durable. The Auschwitz Trials in Frankfurt, beginning in December the next year and lasting until 1965, brought twenty-two camp guards and officers to justice in German courts before German juries — a difficult, public reckoning with the recent past that paralleled Adenauer's reconciliation with France. Vergangenheitsbewältigung — 'coming to terms with the past' — became a defining German political concept.",
            el: "Η Συνθήκη του Ηλυσίου θεσμοποίησε αυτό που ο ευρωπαίος πολιτικός ιστορικός Άλφρεντ Γκρόσερ αποκάλεσε «την πιο επιτυχημένη γαλλογερμανική εταιρική σχέση από τον Καρλομάγνο και τον Πάπα Λέοντα Γ΄». Δύο φορές τον χρόνο διασκέψεις κορυφής, κοινές στρατιωτικές ασκήσεις, το Γαλλογερμανικό Γραφείο Νεολαίας (που έως το 2020 θα είχε οργανώσει ανταλλαγές για περισσότερους από εννέα εκατομμύρια νέους): η αρχιτεκτονική της συμφιλίωσης ήταν σκόπιμη και ανθεκτική. Οι Δίκες του Άουσβιτς στη Φραγκφούρτη, που ξεκίνησαν τον Δεκέμβριο του επόμενου χρόνου και διήρκεσαν μέχρι το 1965, οδήγησαν είκοσι δύο φύλακες και αξιωματικούς του στρατοπέδου ενώπιον της δικαιοσύνης σε γερμανικά δικαστήρια με γερμανούς ενόρκους — μια δύσκολη, δημόσια αναμέτρηση με το πρόσφατο παρελθόν παράλληλα προς τη συμφιλίωση του Αντενάουερ με τη Γαλλία. Το Vergangenheitsbewältigung — «έρχομαι σε όρους με το παρελθόν» — έγινε καθοριστική γερμανική πολιτική έννοια."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1968,
      era: {
        en: "Generation of 1968",
        el: "Γενιά του 1968"
      },
      events: [
        {
          title: {
            en: "The student revolt and the second German republic",
            el: "Η φοιτητική εξέγερση και η δεύτερη γερμανική δημοκρατία"
          },
          description: {
            en: "Throughout the year, students under Rudi Dutschke occupy West German universities, protesting Vietnam, the emergency laws, the Springer press, and — above all — the unbroken Nazi careers of their professors and their parents. The first generation born after 1945 demands an accounting from the first generation of the Federal Republic.",
            el: "Όλο τον χρόνο, φοιτητές υπό τον Ρούντι Ντούτσκε καταλαμβάνουν δυτικογερμανικά πανεπιστήμια, διαμαρτυρόμενοι για το Βιετνάμ, τους νόμους έκτακτης ανάγκης, τον τύπο Springer και — πάνω από όλα — τις αδιάκοπες ναζιστικές καριέρες των καθηγητών τους και των γονιών τους. Η πρώτη γενιά γεννημένη μετά το 1945 απαιτεί λογαριασμό από την πρώτη γενιά της Ομοσπονδιακής Δημοκρατίας."
          },
          extendedDescription: {
            en: "The '68 movement transformed West Germany more lastingly than its Paris or American counterparts. It produced a generation of politicians, intellectuals, and lawyers — Joschka Fischer, Daniel Cohn-Bendit, Jürgen Habermas's interlocutors — who would govern from the 1990s. It forced the trials of West Germany's Auschwitz, Treblinka, and Belzec guards in the 1960s and 1970s; it transformed schools' history curricula; it cracked open the silence of the Wirtschaftswunder generation. Its dark side was the Red Army Faction terrorism of the next decade. But the cultural revolution that followed — sexual liberation, feminism, the women's movement, environmentalism, the founding of the Greens in 1980 — made the Federal Republic a different country from the one Adenauer had governed.",
            el: "Το κίνημα του '68 μεταμόρφωσε τη Δυτική Γερμανία πιο διαρκώς από τα ομόλογά του στο Παρίσι ή στις ΗΠΑ. Παρήγαγε γενιά πολιτικών, διανοουμένων και νομικών — τον Γιόσκα Φίσερ, τον Ντανιέλ Κον-Μπεντίτ, τους συνομιλητές του Γιούργκεν Χάμπερμας — που θα κυβερνούσαν από τη δεκαετία του 1990. Επέβαλε τις δίκες των φυλάκων του Άουσβιτς, της Τρεμπλίνκας και του Μπέλζετς στη Δυτική Γερμανία τις δεκαετίες του 1960 και του 1970· μεταμόρφωσε τα σχολικά αναλυτικά προγράμματα ιστορίας· έσπασε τη σιωπή της γενιάς του Wirtschaftswunder. Η σκοτεινή πλευρά της ήταν η τρομοκρατία του Κόκκινου Στρατού της επόμενης δεκαετίας. Αλλά η πολιτιστική επανάσταση που ακολούθησε — η σεξουαλική απελευθέρωση, ο φεμινισμός, το γυναικείο κίνημα, ο περιβαλλοντισμός, η ίδρυση των Πρασίνων το 1980 — έκανε την Ομοσπονδιακή Δημοκρατία διαφορετική χώρα από αυτή που είχε κυβερνήσει ο Αντενάουερ."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1970,
      era: {
        en: "Ostpolitik",
        el: "Ostpolitik"
      },
      events: [
        {
          title: {
            en: "Willy Brandt kneels at the Warsaw Ghetto memorial",
            el: "Ο Βίλλυ Μπραντ γονατίζει στο μνημείο του Γκέτο της Βαρσοβίας"
          },
          description: {
            en: "On 7 December, Chancellor Willy Brandt — Social Democrat, anti-Nazi exile, mayor of West Berlin during the building of the Wall — falls to his knees before the Warsaw Ghetto Uprising memorial. Der Kniefall von Warschau becomes the most powerful gesture of post-war German reconciliation with eastern Europe.",
            el: "Στις 7 Δεκεμβρίου, ο Καγκελάριος Βίλλυ Μπραντ — Σοσιαλδημοκράτης, αντιναζιστής εξόριστος, δήμαρχος του Δυτικού Βερολίνου κατά την κατασκευή του Τείχους — πέφτει στα γόνατα ενώπιον του μνημείου της Εξέγερσης του Γκέτο της Βαρσοβίας. Το Der Kniefall von Warschau γίνεται η πιο ισχυρή χειρονομία μεταπολεμικής γερμανικής συμφιλίωσης με την ανατολική Ευρώπη."
          },
          extendedDescription: {
            en: "Brandt's Ostpolitik — initiated in 1969 with Egon Bahr's slogan 'change through rapprochement' (Wandel durch Annäherung) — was the most consequential strategic shift of post-war Germany. The treaties of Moscow (1970), Warsaw (1970), the Four-Power Agreement on Berlin (1971), and the Basic Treaty with East Germany (1972) recognised post-war frontiers, including the Oder-Neisse line, and admitted both German states to the United Nations in 1973. Brandt received the Nobel Peace Prize in 1971. His policy did not produce reunification — that came twenty years later through a different mechanism — but it created the diplomatic preconditions for it, and it transformed how the Federal Republic was seen in eastern Europe. The Auschwitz survivor and Polish prime minister Józef Cyrankiewicz, asked what Brandt's kneeling meant, replied: 'It is the gesture of someone who is not guilty, and who carries the guilt of those who could not kneel.'",
            el: "Η Ostpolitik του Μπραντ — που ξεκίνησε το 1969 με το σύνθημα του Έγκον Μπαρ «αλλαγή μέσω προσέγγισης» (Wandel durch Annäherung) — ήταν η πιο μοιραία στρατηγική μετατόπιση της μεταπολεμικής Γερμανίας. Οι συνθήκες της Μόσχας (1970), της Βαρσοβίας (1970), η Συμφωνία των Τεσσάρων Δυνάμεων για το Βερολίνο (1971) και η Βασική Συνθήκη με την Ανατολική Γερμανία (1972) αναγνώρισαν τα μεταπολεμικά σύνορα, μεταξύ άλλων τη γραμμή Όντερ-Νάισε, και επέτρεψαν την είσοδο και των δύο γερμανικών κρατών στα Ηνωμένα Έθνη το 1973. Ο Μπραντ έλαβε το Νόμπελ Ειρήνης το 1971. Η πολιτική του δεν παρήγαγε επανένωση — αυτή ήρθε είκοσι χρόνια αργότερα μέσω διαφορετικού μηχανισμού — αλλά δημιούργησε τις διπλωματικές προϋποθέσεις γι' αυτήν και μεταμόρφωσε τον τρόπο με τον οποίο γινόταν αντιληπτή η Ομοσπονδιακή Δημοκρατία στην ανατολική Ευρώπη. Ο επιζών του Άουσβιτς και πολωνός πρωθυπουργός Γιόζεφ Τσιραγκίεβιτς, ερωτηθείς τι σήμαινε η γονυκλισία του Μπραντ, απάντησε: «Είναι η χειρονομία κάποιου που δεν είναι ένοχος, και που φέρει την ενοχή εκείνων που δεν μπορούσαν να γονατίσουν»."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1977,
      era: {
        en: "German Autumn",
        el: "Γερμανικό Φθινόπωρο"
      },
      events: [
        {
          title: {
            en: "The German Autumn and the Red Army Faction",
            el: "Το Γερμανικό Φθινόπωρο και ο Κόκκινος Στρατός"
          },
          description: {
            en: "In September the Red Army Faction kidnaps the industrialist Hanns-Martin Schleyer; in October Palestinian sympathisers hijack a Lufthansa jet to Mogadishu. After commandos free the hostages, the RAF leaders in Stammheim prison kill themselves; Schleyer is murdered. The crisis tests the Federal Republic's democracy to the limit.",
            el: "Τον Σεπτέμβριο ο Κόκκινος Στρατός απαγάγει τον βιομήχανο Χανς-Μάρτιν Σλάιερ· τον Οκτώβριο Παλαιστίνιοι συμπαθούντες αεροπειρατούν αεροπλάνο της Lufthansa στο Μογκαντίσου. Αφού κομάντος απελευθερώνουν τους ομήρους, οι ηγέτες του RAF στη φυλακή Στάμμχαϊμ αυτοκτονούν· ο Σλάιερ δολοφονείται. Η κρίση δοκιμάζει στα όριά της τη δημοκρατία της Ομοσπονδιακής Δημοκρατίας."
          },
          extendedDescription: {
            en: "The Red Army Faction — Andreas Baader, Ulrike Meinhof, Gudrun Ensslin and their successors — emerged from the radical wing of '68 disillusioned by the failure of mass mobilisation. They robbed banks, bombed American bases, and killed thirty-four people between 1970 and 1991. The Federal Republic's response was uncompromising — Helmut Schmidt's government refused to negotiate over Schleyer — but it preserved constitutional process throughout, never resorting to the kinds of emergency dictatorship that had haunted the Weimar imagination. The German Autumn was the most severe test of Bonn democracy, and Bonn democracy passed. By the time the RAF dissolved itself in 1998, the Federal Republic had become a society that could absorb terrorism without losing its constitutional shape.",
            el: "Ο Κόκκινος Στρατός — ο Άντρεας Μπάαντερ, η Ούλρικε Μάινχοφ, η Γκούντρουν Ένσλιν και οι διάδοχοί τους — αναδύθηκαν από τη ριζοσπαστική πτέρυγα του '68 απογοητευμένοι από την αποτυχία της μαζικής κινητοποίησης. Λήστεψαν τράπεζες, βομβάρδισαν αμερικανικές βάσεις και σκότωσαν τριάντα τέσσερις ανθρώπους μεταξύ 1970 και 1991. Η απάντηση της Ομοσπονδιακής Δημοκρατίας ήταν ασυμβίβαστη — η κυβέρνηση του Χέλμουτ Σμιτ αρνήθηκε να διαπραγματευτεί για τον Σλάιερ — αλλά διατήρησε τη συνταγματική διαδικασία σε όλη τη διάρκεια, χωρίς ποτέ να καταφύγει στις μορφές δικτατορίας έκτακτης ανάγκης που είχαν στοιχειώσει τη φαντασία της Βαϊμάρης. Το Γερμανικό Φθινόπωρο ήταν η σοβαρότερη δοκιμασία της δημοκρατίας της Βόννης, και η δημοκρατία της Βόννης πέρασε. Όταν ο RAF διέλυσε τον εαυτό του το 1998, η Ομοσπονδιακή Δημοκρατία είχε γίνει κοινωνία που μπορούσε να απορροφήσει την τρομοκρατία χωρίς να χάσει το συνταγματικό της σχήμα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1989,
      era: {
        en: "Fall of the Wall",
        el: "Πτώση του Τείχους"
      },
      events: [
        {
          title: {
            en: "The Berlin Wall falls",
            el: "Πέφτει το Τείχος του Βερολίνου"
          },
          description: {
            en: "On the evening of 9 November, the Politburo spokesman Günter Schabowski misreads a press-conference note and announces — incorrectly — that East Germans may now travel freely 'as of immediately, without delay'. Within hours, crowds gather at the Bornholmer Strasse crossing; the guards, without orders, open the barriers. The Berlin Wall has fallen.",
            el: "Το βράδυ της 9ης Νοεμβρίου, ο εκπρόσωπος του Πολιτικού Γραφείου Γκύντερ Σαμπόφσκι παρερμηνεύει σημείωμα συνέντευξης Τύπου και ανακοινώνει — λανθασμένα — ότι οι Ανατολικογερμανοί μπορούν τώρα να ταξιδεύουν ελεύθερα «από αυτή τη στιγμή, χωρίς καθυστέρηση». Μέσα σε ώρες, πλήθη συγκεντρώνονται στη διάβαση Bornholmer Strasse· οι φύλακες, χωρίς διαταγές, ανοίγουν τα φράγματα. Το Τείχος του Βερολίνου έχει πέσει."
          },
          extendedDescription: {
            en: "The fall of the Wall came at the climax of a year that had begun with the Hungarians cutting the wire of their Austrian border, continued with massive emigration of East Germans through Hungary and Czechoslovakia, and reached fever pitch with the Monday demonstrations in Leipzig — 'Wir sind das Volk' (We are the people) — in October and November. Gorbachev's refusal to authorise Soviet troops to intervene was decisive; without Moscow's backing, Honecker had no way to crush the demonstrations. Chancellor Helmut Kohl, who was in Warsaw on 9 November, hurried to Berlin to deliver a famous speech at the Schöneberg town hall the next day. Within four weeks he announced a ten-point reunification plan; within a year a treaty of unification had been signed and both German states had ceased to exist as separate entities.",
            el: "Η πτώση του Τείχους ήρθε στην κορύφωση ενός έτους που είχε ξεκινήσει με τους Ούγγρους να κόβουν το σύρμα του αυστριακού τους συνόρου, είχε συνεχιστεί με μαζική μετανάστευση Ανατολικογερμανών μέσω Ουγγαρίας και Τσεχοσλοβακίας και είχε φτάσει στο αποκορύφωμα με τις Δευτεριάτικες διαδηλώσεις στη Λειψία — «Wir sind das Volk» (Εμείς είμαστε ο λαός) — τον Οκτώβριο και τον Νοέμβριο. Η άρνηση του Γκορμπατσόφ να εξουσιοδοτήσει σοβιετικά στρατεύματα να παρέμβουν ήταν αποφασιστική· χωρίς την υποστήριξη της Μόσχας, ο Χόνεκερ δεν είχε τρόπο να συντρίψει τις διαδηλώσεις. Ο Καγκελάριος Χέλμουτ Κολ, που βρισκόταν στη Βαρσοβία στις 9 Νοεμβρίου, έσπευσε στο Βερολίνο για να εκφωνήσει περίφημη ομιλία στο δημαρχείο του Σένεμπεργκ την επόμενη μέρα. Μέσα σε τέσσερις εβδομάδες ανακοίνωσε δεκαετές σχέδιο επανένωσης· μέσα σε έναν χρόνο είχε υπογραφεί συνθήκη ενοποίησης και τα δύο γερμανικά κράτη είχαν πάψει να υπάρχουν ως ξεχωριστές οντότητες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1990,
      era: {
        en: "Reunification",
        el: "Επανένωση"
      },
      events: [
        {
          title: {
            en: "German reunification",
            el: "Γερμανική επανένωση"
          },
          description: {
            en: "On 3 October, the German Democratic Republic accedes to the Federal Republic under Article 23 of the Basic Law. Forty-five years of partition end. The Two-Plus-Four Treaty (12 September) settles the external aspects: a united Germany within NATO, accepting permanent eastern frontiers, with full sovereignty restored after the withdrawal of the last Soviet troops in 1994.",
            el: "Στις 3 Οκτωβρίου, η Λαοκρατική Δημοκρατία της Γερμανίας προσχωρεί στην Ομοσπονδιακή Δημοκρατία βάσει του Άρθρου 23 του Θεμελιώδους Νόμου. Σαράντα πέντε χρόνια διαίρεσης τελειώνουν. Η Συνθήκη Δύο-συν-Τέσσερα (12 Σεπτεμβρίου) ρυθμίζει τις εξωτερικές πτυχές: μια ενωμένη Γερμανία εντός του ΝΑΤΟ, αποδεχόμενη μόνιμα ανατολικά σύνορα, με πλήρη κυριαρχία αποκατεστημένη μετά την απόσυρση των τελευταίων σοβιετικών στρατευμάτων το 1994."
          },
          extendedDescription: {
            en: "Reunification was Helmut Kohl's masterpiece. The exchange of the East German Mark for the Deutsche Mark at parity for small savings — proposed against the advice of the Bundesbank — secured popular support in the East but devastated its industry, which suddenly faced Western competition with Western wage levels. The cost of reunification, financed largely by additional borrowing and a 'solidarity surcharge' on Western taxpayers, would reach approximately two trillion euros by 2020. Politically the achievement was greater than the economic difficulties: the dissolution of one of the most thoroughly surveilled societies in history was peaceful, the Stasi archives were opened, and East German voters chose democracy. Mikhail Gorbachev — who had given the green light — received the Nobel Peace Prize the same month.",
            el: "Η επανένωση ήταν το αριστούργημα του Χέλμουτ Κολ. Η ανταλλαγή του ανατολικογερμανικού μάρκου με το δυτικογερμανικό μάρκο σε ισοτιμία για μικρές αποταμιεύσεις — που προτάθηκε ενάντια στη συμβουλή της Bundesbank — εξασφάλισε λαϊκή υποστήριξη στην Ανατολή αλλά κατέστρεψε τη βιομηχανία της, που ξαφνικά αντιμετώπισε δυτικό ανταγωνισμό με δυτικά μισθολογικά επίπεδα. Το κόστος της επανένωσης, που χρηματοδοτήθηκε κυρίως από πρόσθετο δανεισμό και μια «προσαύξηση αλληλεγγύης» στους δυτικογερμανούς φορολογούμενους, θα έφτανε περίπου τα δύο τρισεκατομμύρια ευρώ έως το 2020. Πολιτικά το επίτευγμα ήταν μεγαλύτερο από τις οικονομικές δυσκολίες: η διάλυση μιας από τις πιο εξαντλητικά παρακολουθούμενες κοινωνίες στην ιστορία ήταν ειρηνική, τα αρχεία της Stasi άνοιξαν και οι ανατολικογερμανοί ψηφοφόροι επέλεξαν τη δημοκρατία. Ο Μιχαήλ Γκορμπατσόφ — που είχε δώσει το πράσινο φως — έλαβε το Νόμπελ Ειρήνης τον ίδιο μήνα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1991,
      era: {
        en: "Berlin Republic",
        el: "Δημοκρατία του Βερολίνου"
      },
      events: [
        {
          title: {
            en: "Berlin restored as capital",
            el: "Το Βερολίνο αποκαθίσταται ως πρωτεύουσα"
          },
          description: {
            en: "On 20 June, after a famous debate, the Bundestag votes 338-320 to move the seat of government from Bonn back to Berlin. The Berlin Republic — distinct in feel from the Bonn Republic of the Federal era — slowly takes shape over the next decade as the federal ministries, parliament, and chancellery move east.",
            el: "Στις 20 Ιουνίου, μετά από περίφημη συζήτηση, το Bundestag ψηφίζει 338-320 να μεταφερθεί η έδρα της κυβέρνησης από τη Βόννη πίσω στο Βερολίνο. Η Δημοκρατία του Βερολίνου — διακριτή στην αίσθηση από τη Δημοκρατία της Βόννης της Ομοσπονδιακής εποχής — διαμορφώνεται σταδιακά την επόμενη δεκαετία καθώς τα ομοσπονδιακά υπουργεία, το κοινοβούλιο και η καγκελαρία μετακινούνται προς τα ανατολικά."
          },
          extendedDescription: {
            en: "The decision to move the capital was contested, and the vote was unusually narrow. Supporters argued that Berlin's symbolic weight was essential for the new Germany; opponents worried that Bonn's provincial modesty had been part of what kept the post-war republic decent. The actual transfer took place in 1999, when the Reichstag — restored under Norman Foster's glass dome — opened as the home of the Bundestag. The dome itself became the most-visited tourist attraction in Berlin, a deliberate architectural statement that the people sat above the politicians. Around it, in the next decade, a new diplomatic and government quarter rose: the chancellery (Schloss Bellevue), the Federal Foreign Office on Werderscher Markt, the embassies along the Tiergarten. The Berlin Republic had a physical face by the time of Merkel's chancellorship.",
            el: "Η απόφαση μεταφοράς της πρωτεύουσας ήταν αμφισβητούμενη, και η ψηφοφορία ασυνήθιστα στενή. Οι υποστηρικτές υποστήριζαν ότι το συμβολικό βάρος του Βερολίνου ήταν ουσιαστικό για τη νέα Γερμανία· οι αντίπαλοι ανησυχούσαν ότι η επαρχιακή μετριοφροσύνη της Βόννης ήταν μέρος αυτού που είχε κρατήσει τη μεταπολεμική δημοκρατία αξιοπρεπή. Η πραγματική μεταφορά πραγματοποιήθηκε το 1999, όταν το Reichstag — αποκατεστημένο υπό τον γυάλινο τρούλο του Νόρμαν Φόστερ — άνοιξε ως έδρα του Bundestag. Ο ίδιος ο τρούλος έγινε το πιο επισκεπτόμενο τουριστικό αξιοθέατο στο Βερολίνο, μια σκόπιμη αρχιτεκτονική δήλωση ότι ο λαός καθόταν πάνω από τους πολιτικούς. Γύρω του, την επόμενη δεκαετία, ένα νέο διπλωματικό και κυβερνητικό τέταρτο υψώθηκε: η καγκελαρία (Schloss Bellevue), το Ομοσπονδιακό Υπουργείο Εξωτερικών στο Werderscher Markt, οι πρεσβείες κατά μήκος του Tiergarten. Η Δημοκρατία του Βερολίνου είχε φυσικό πρόσωπο μέχρι την καγκελαρία της Μέρκελ."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1999,
      era: {
        en: "Out of Area",
        el: "Εκτός Περιοχής"
      },
      events: [
        {
          title: {
            en: "Kosovo and the first Bundeswehr combat",
            el: "Κόσοβο και η πρώτη μάχη της Bundeswehr"
          },
          description: {
            en: "On 24 March, German Tornados take part in NATO air strikes against Serbia — the first combat action by German troops since 1945. Foreign Minister Joschka Fischer, a former '68 radical and Green pacifist, justifies the intervention with the argument 'Never again Auschwitz' against ethnic cleansing in Kosovo.",
            el: "Στις 24 Μαρτίου, γερμανικά Tornado συμμετέχουν σε αεροπορικά πλήγματα του ΝΑΤΟ κατά της Σερβίας — η πρώτη πολεμική ενέργεια γερμανικών στρατευμάτων από το 1945. Ο Υπουργός Εξωτερικών Γιόσκα Φίσερ, πρώην ριζοσπάστης του '68 και Πράσινος πασιφιστής, δικαιολογεί την επέμβαση με το επιχείρημα «Ποτέ ξανά Άουσβιτς» κατά της εθνικής εκκαθάρισης στο Κόσοβο."
          },
          extendedDescription: {
            en: "The Kosovo intervention was the moment when the Federal Republic accepted the responsibilities of a normal sovereign state in the international system. The Schröder-Fischer red-green coalition, in power since the previous October, had inherited the deployments and chose to support them; the Bundestag debate, in which Fischer was attacked from his own benches and physically struck with a paint bomb, established a new normal. The Bundeswehr would deploy again to Afghanistan (2001-2021), where it took its first combat casualties since 1945, and to Mali (2013-2024). The constitutional debate about out-of-area deployments was settled by the Federal Constitutional Court at Karlsruhe, which had ruled in 1994 that the Bundestag must authorise foreign deployments. The Parliamentenheer — 'parliament army' — became one of the distinctive features of the Berlin Republic.",
            el: "Η επέμβαση στο Κόσοβο ήταν η στιγμή που η Ομοσπονδιακή Δημοκρατία αποδέχτηκε τις ευθύνες ενός κανονικού κυρίαρχου κράτους στο διεθνές σύστημα. Ο κυβερνητικός συνασπισμός Σρέντερ-Φίσερ ερυθρών-πρασίνων, στην εξουσία από τον προηγούμενο Οκτώβριο, είχε κληρονομήσει τις αναπτύξεις και επέλεξε να τις υποστηρίξει· η συζήτηση του Bundestag, στην οποία ο Φίσερ δέχθηκε επίθεση από τα ίδια του τα έδρανα και χτυπήθηκε φυσικά από βόμβα μπογιάς, καθιέρωσε ένα νέο κανονικό. Η Bundeswehr θα ανέπτυσσε ξανά στρατεύματα στο Αφγανιστάν (2001-2021), όπου υπέστη τις πρώτες της απώλειες μάχης από το 1945, και στο Μαλί (2013-2024). Η συνταγματική συζήτηση για τις αναπτύξεις εκτός περιοχής ρυθμίστηκε από το Ομοσπονδιακό Συνταγματικό Δικαστήριο στην Καρλσρούη, που είχε αποφασίσει το 1994 ότι το Bundestag πρέπει να εξουσιοδοτεί ξένες αναπτύξεις. Ο Parlamentenheer — «κοινοβουλευτικός στρατός» — έγινε ένα από τα διακριτικά χαρακτηριστικά της Δημοκρατίας του Βερολίνου."
          },
          category: "military"
        }
      ]
    },
    {
      year: 2002,
      era: {
        en: "The Euro",
        el: "Το Ευρώ"
      },
      events: [
        {
          title: {
            en: "Germans give up the Deutsche Mark for the euro",
            el: "Οι Γερμανοί παραδίδουν το γερμανικό μάρκο για το ευρώ"
          },
          description: {
            en: "On 1 January, after a year of dual circulation, euro notes and coins replace the Deutsche Mark as legal tender. The currency that had symbolised the Wirtschaftswunder gives way to a European money managed by the European Central Bank in Frankfurt — a German institution running a continental currency.",
            el: "Την 1η Ιανουαρίου, μετά από έναν χρόνο διπλής κυκλοφορίας, τα ευρώ χαρτονομίσματα και κέρματα αντικαθιστούν το γερμανικό μάρκο ως νόμιμο χρήμα. Το νόμισμα που είχε συμβολίσει το Wirtschaftswunder υποχωρεί σε ένα ευρωπαϊκό νόμισμα που διαχειρίζεται η Ευρωπαϊκή Κεντρική Τράπεζα στη Φραγκφούρτη — ένας γερμανικός θεσμός που διοικεί ένα ηπειρωτικό νόμισμα."
          },
          extendedDescription: {
            en: "Helmut Kohl had agreed to the abandonment of the Deutsche Mark partly as the price of French acquiescence to reunification: the deal at Maastricht in 1991 was 'monetary union for unification'. The euro was modelled on the Bundesbank's mandate of price stability and built around the German economy's structural surplus. For the first decade it worked beautifully; in the eurozone crisis of 2010-2012, when southern Europe was caught in a debt trap of its own making, Germany under Angela Merkel emerged as the indispensable creditor power of Europe. The 'austerity' settlement was harsh in Athens and Madrid, but it preserved the currency. By the mid-2020s the euro was the second-largest reserve currency in the world, and the Bundesbank — though it had given up its mark — wielded influence at the ECB that no other central bank could match.",
            el: "Ο Χέλμουτ Κολ είχε συμφωνήσει με την εγκατάλειψη του γερμανικού μάρκου εν μέρει ως τίμημα της γαλλικής συναίνεσης για την επανένωση: η συμφωνία στο Μάαστριχτ το 1991 ήταν «νομισματική ένωση για ενοποίηση». Το ευρώ διαμορφώθηκε κατά το πρότυπο της εντολής σταθερότητας τιμών της Bundesbank και χτίστηκε γύρω από το διαρθρωτικό πλεόνασμα της γερμανικής οικονομίας. Για την πρώτη δεκαετία λειτούργησε υπέροχα· στην κρίση της ευρωζώνης του 2010-2012, όταν η νότια Ευρώπη παγιδεύτηκε σε χρέη της δικής της κατασκευής, η Γερμανία υπό την Άνγκελα Μέρκελ αναδύθηκε ως η απαραίτητη πιστωτική δύναμη της Ευρώπης. Η «λιτότητα» συμφωνία ήταν σκληρή στην Αθήνα και στη Μαδρίτη, αλλά διατήρησε το νόμισμα. Έως τα μέσα της δεκαετίας του 2020 το ευρώ ήταν το δεύτερο μεγαλύτερο αποθεματικό νόμισμα στον κόσμο, και η Bundesbank — αν και είχε παραιτηθεί από το μάρκο της — ασκούσε επιρροή στην ΕΚΤ που καμία άλλη κεντρική τράπεζα δεν μπορούσε να ισοφαρίσει."
          },
          category: "political"
        }
      ]
    },
    {
      year: 2005,
      era: {
        en: "The Merkel Era",
        el: "Η Εποχή Μέρκελ"
      },
      events: [
        {
          title: {
            en: "Angela Merkel becomes chancellor",
            el: "Η Άνγκελα Μέρκελ γίνεται καγκελάριος"
          },
          description: {
            en: "On 22 November, after an inconclusive election, Angela Merkel — East German pastor's daughter, physicist, Christian Democrat — is elected chancellor in a grand coalition with the SPD. She becomes the first woman, the first East German, and the first scientist to hold the office. She will hold it for sixteen years.",
            el: "Στις 22 Νοεμβρίου, μετά από ασαφείς εκλογές, η Άνγκελα Μέρκελ — κόρη ανατολικογερμανού πάστορα, φυσικός, Χριστιανοδημοκράτισσα — εκλέγεται καγκελάριος σε μεγάλο συνασπισμό με το SPD. Γίνεται η πρώτη γυναίκα, η πρώτη Ανατολικογερμανίδα και η πρώτη επιστήμονας που κατέχει το αξίωμα. Θα το κρατήσει για δεκαέξι χρόνια."
          },
          extendedDescription: {
            en: "Merkel governed through four world crises — the global financial crisis of 2008-9, the eurozone crisis of 2010-12, the refugee crisis of 2015, and the Covid pandemic of 2020-21 — without losing her parliamentary majority. Her stewardship of the eurozone made her, by the early 2010s, the most powerful elected leader in Europe; her decision to open Germany's borders to nearly a million Syrian and other refugees in 2015 was one of the great moral choices of the period, costly in political capital and ultimately consequential for the rise of the right-wing AfD. By the time she retired in December 2021, she had also presided over the phase-out of German nuclear power, accelerated by the 2011 Fukushima disaster — a decision whose strategic consequences would become acute when Russia's energy weapon was deployed in 2022.",
            el: "Η Μέρκελ κυβέρνησε μέσα από τέσσερις παγκόσμιες κρίσεις — την παγκόσμια χρηματοοικονομική κρίση του 2008-9, την κρίση της ευρωζώνης του 2010-12, την προσφυγική κρίση του 2015 και την πανδημία Covid του 2020-21 — χωρίς να χάσει την κοινοβουλευτική της πλειοψηφία. Η διαχείριση της ευρωζώνης από αυτήν την έκανε, στις αρχές της δεκαετίας του 2010, την πιο ισχυρή εκλεγμένη ηγέτιδα στην Ευρώπη· η απόφασή της να ανοίξει τα σύνορα της Γερμανίας σε σχεδόν ένα εκατομμύριο Σύρους και άλλους πρόσφυγες το 2015 ήταν μία από τις μεγάλες ηθικές επιλογές της εποχής, ακριβή σε πολιτικό κεφάλαιο και τελικά μοιραία για την άνοδο του δεξιού AfD. Όταν αποχώρησε τον Δεκέμβριο του 2021, είχε επίσης επιβλέψει τη σταδιακή κατάργηση της γερμανικής πυρηνικής ενέργειας, που επιταχύνθηκε από την καταστροφή της Φουκουσίμα του 2011 — απόφαση της οποίας οι στρατηγικές συνέπειες θα γίνονταν οξείες όταν αναπτύχθηκε το ενεργειακό όπλο της Ρωσίας το 2022."
          },
          category: "political"
        }
      ]
    },
    {
      year: 2015,
      era: {
        en: "Refugee Crisis",
        el: "Προσφυγική Κρίση"
      },
      events: [
        {
          title: {
            en: "'Wir schaffen das' — the refugee summer",
            el: "«Wir schaffen das» — το προσφυγικό καλοκαίρι"
          },
          description: {
            en: "Through the summer of 2015, hundreds of thousands of Syrian, Afghan, and Iraqi refugees move up the Balkan route toward Germany. On 31 August, Merkel tells a press conference: 'Wir schaffen das' — we can manage this. By year's end the country has admitted some 890,000 asylum seekers, the largest single-year admission in German history.",
            el: "Όλο το καλοκαίρι του 2015, εκατοντάδες χιλιάδες πρόσφυγες από τη Συρία, το Αφγανιστάν και το Ιράκ κινούνται προς τη βαλκανική διαδρομή προς τη Γερμανία. Στις 31 Αυγούστου, η Μέρκελ λέει σε συνέντευξη Τύπου: «Wir schaffen das» — μπορούμε να το διαχειριστούμε. Έως το τέλος του έτους η χώρα έχει δεχτεί περίπου 890.000 αιτούντες άσυλο, την μεγαλύτερη ετήσια αποδοχή στη γερμανική ιστορία."
          },
          extendedDescription: {
            en: "Merkel's decision was rooted in both legal obligation under the Geneva Convention and a deliberate moral framing of the moment: a country that had been the source of the twentieth century's worst refugee catastrophe could not turn its back on refugees fleeing the twenty-first century's. Most of the new arrivals were absorbed into the German economy and language by the early 2020s; integration was real if uneven. The political cost was substantial: the right-populist Alternative für Deutschland, founded in 2013 as a eurosceptic party, became a refugee-sceptic party in 2015 and broke into the Bundestag in 2017 with 12.6 percent of the vote — the first hard-right party to win seats since the early 1950s. The German political system would absorb this challenge as it had absorbed others, but the consensus of the Berlin Republic was no longer unchallenged.",
            el: "Η απόφαση της Μέρκελ ριζωνόταν τόσο σε νομική υποχρέωση βάσει της Σύμβασης της Γενεύης όσο και σε σκόπιμη ηθική πλαισίωση της στιγμής: μια χώρα που είχε υπάρξει η πηγή της χειρότερης προσφυγικής καταστροφής του εικοστού αιώνα δεν μπορούσε να γυρίσει την πλάτη της σε πρόσφυγες που έφευγαν από εκείνη του εικοστού πρώτου. Οι περισσότεροι από τους νεοαφιχθέντες απορροφήθηκαν στη γερμανική οικονομία και γλώσσα έως τις αρχές της δεκαετίας του 2020· η ένταξη ήταν πραγματική αν και άνιση. Το πολιτικό κόστος ήταν σημαντικό: η δεξιά-λαϊκιστική Alternative für Deutschland, που ιδρύθηκε το 2013 ως ευρωσκεπτικιστικό κόμμα, έγινε προσφυγικά-σκεπτικιστικό κόμμα το 2015 και εισήλθε στο Bundestag το 2017 με 12,6 τοις εκατό της ψήφου — το πρώτο σκληρά δεξιό κόμμα που κέρδιζε έδρες από τις αρχές της δεκαετίας του 1950. Το γερμανικό πολιτικό σύστημα θα απορροφούσε αυτή την πρόκληση όπως είχε απορροφήσει άλλες, αλλά η συναίνεση της Δημοκρατίας του Βερολίνου δεν ήταν πλέον αναμφισβήτητη."
          },
          category: "political"
        }
      ]
    },
    {
      year: 2022,
      era: {
        en: "Zeitenwende",
        el: "Zeitenwende"
      },
      events: [
        {
          title: {
            en: "Zeitenwende: Germany rearms",
            el: "Zeitenwende: η Γερμανία επανεξοπλίζεται"
          },
          description: {
            en: "On 27 February, three days after Russia's full invasion of Ukraine, Chancellor Olaf Scholz tells the Bundestag that the country faces a Zeitenwende — a 'turning of the age'. He announces a special €100-billion fund to rearm the Bundeswehr, a commitment to permanent NATO defence spending above two percent of GDP, and the supply of weapons to Ukraine.",
            el: "Στις 27 Φεβρουαρίου, τρεις ημέρες μετά την πλήρη εισβολή της Ρωσίας στην Ουκρανία, ο Καγκελάριος Όλαφ Σολτς λέει στο Bundestag ότι η χώρα αντιμετωπίζει ένα Zeitenwende — «μια στροφή της εποχής». Ανακοινώνει ειδικό ταμείο 100 δισεκατομμυρίων ευρώ για τον επανεξοπλισμό της Bundeswehr, δέσμευση για μόνιμες αμυντικές δαπάνες ΝΑΤΟ πάνω από δύο τοις εκατό του ΑΕΠ και την προμήθεια όπλων στην Ουκρανία."
          },
          extendedDescription: {
            en: "Russia's invasion shattered three pillars of post-1990 German foreign policy: Wandel durch Handel (change through trade) with Moscow, cheap Russian gas through Nord Stream, and the assumption that Europe's peace order was permanent. The Nord Stream 2 pipeline was suspended on 22 February; the Nord Stream 1 line was sabotaged in September. By the winter of 2022-23, Germany had weaned itself off Russian gas at a furious pace, with LNG terminals built in record time. The supply of weapons — Leopard 2 tanks delivered to Ukraine in early 2023, Patriot air-defence systems, Iris-T launchers — represented a more dramatic break with seventy-five years of strategic culture than any single act since the Bundeswehr's founding. By the mid-2020s Germany was again, as it had not been since 1945, a continental military power. Friedrich Merz of the CDU, returning the chancellorship to the centre-right in 2025, would deepen the rearmament programme into a broader Sicherheitswende, embedding it in a generational fiscal commitment alongside the climate transition.",
            el: "Η εισβολή της Ρωσίας συνέτριψε τρεις πυλώνες της γερμανικής εξωτερικής πολιτικής μετά το 1990: το Wandel durch Handel (αλλαγή μέσω εμπορίου) με τη Μόσχα, το φθηνό ρωσικό αέριο μέσω του Nord Stream και την υπόθεση ότι η ειρηνική τάξη της Ευρώπης ήταν μόνιμη. Ο αγωγός Nord Stream 2 ανεστάλη στις 22 Φεβρουαρίου· η γραμμή Nord Stream 1 σαμποταρίστηκε τον Σεπτέμβριο. Έως τον χειμώνα του 2022-23, η Γερμανία είχε απογαλακτιστεί από το ρωσικό αέριο με μανιώδη ρυθμό, με τερματικούς σταθμούς LNG που χτίστηκαν σε χρόνο ρεκόρ. Η προμήθεια όπλων — Leopard 2 άρματα μάχης που παραδόθηκαν στην Ουκρανία στις αρχές του 2023, συστήματα αεράμυνας Patriot, εκτοξευτές Iris-T — αντιπροσώπευε μια πιο δραματική ρήξη με εβδομηνταπέντε χρόνια στρατηγικής κουλτούρας από οποιαδήποτε μεμονωμένη πράξη από την ίδρυση της Bundeswehr. Έως τα μέσα της δεκαετίας του 2020 η Γερμανία ήταν ξανά, όπως δεν ήταν από το 1945, ηπειρωτική στρατιωτική δύναμη. Ο Φρίντριχ Μερτς του CDU, επαναφέροντας την καγκελαρία στην κεντροδεξιά το 2025, θα βάθαινε το πρόγραμμα επανεξοπλισμού σε μια ευρύτερη Sicherheitswende, εντάσσοντάς το σε γενιακή δημοσιονομική δέσμευση παράλληλα με την κλιματική μετάβαση."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
