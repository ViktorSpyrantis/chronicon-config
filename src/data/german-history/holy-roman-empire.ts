/** Holy Roman Empire — Αγία Ρωμαϊκή Αυτοκρατορία · German History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const HOLY_ROMAN_EMPIRE = {
  id: "holy-roman-empire" as const,
  label: {
    en: "Holy Roman Empire",
    el: "Αγία Ρωμαϊκή Αυτοκρατορία"
  },
  supertitle: {
    en: "Sacrum Imperium Romanum",
    el: "Ιερά Ρωμαϊκή Αυτοκρατορία"
  },
  title: {
    en: "The Holy Roman Empire",
    el: "Η Αγία Ρωμαϊκή Αυτοκρατορία"
  },
  subtitle: {
    en: "From Charlemagne's coronation in St Peter's on Christmas Day 800 through the Ottonian dynasty, the Investiture Controversy and Canossa, Barbarossa and Frederick II, the Golden Bull and the rise of the Habsburgs, Luther's Reformation and the Thirty Years' War, the relief of Vienna, the rise of Prussia, and the enlightened absolutism of Maria Theresa and Joseph II, to the dissolution of the Empire by Francis II in 1806. Slide across the centuries to read the major events of the thousand-year Reich of princes, prelates, and free cities.",
    el: "Από τη στέψη του Καρλομάγνου στον Άγιο Πέτρο τα Χριστούγεννα του 800 μέσα από την Ωτωνική δυναστεία, τη Διαμάχη των Επενδύσεων και την Κανόσσα, τον Μπαρμπαρόσσα και τον Φρειδερίκο Β΄, το Χρυσόβουλλο και την άνοδο των Αψβούργων, τη Μεταρρύθμιση του Λουθήρου και τον Τριακονταετή Πόλεμο, την απελευθέρωση της Βιέννης, την άνοδο της Πρωσίας και τον φωτισμένο απολυταρχισμό της Μαρίας Θηρεσίας και του Ιωσήφ Β΄, έως τη διάλυση της Αυτοκρατορίας από τον Φραγκίσκο Β΄ το 1806. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα γεγονότα του χιλιόχρονου Reich των ηγεμόνων, των ιεραρχών και των ελεύθερων πόλεων."
  },
  menuDescription: {
    en: "Neither holy, nor Roman, nor an empire — and yet a thousand years of it, from Charlemagne to Napoleon.",
    el: "Ούτε αγία, ούτε ρωμαϊκή, ούτε αυτοκρατορία — κι όμως χίλια χρόνια, από τον Καρλομάγνο ως τον Ναπολέοντα."
  },
  footerLabel: {
    en: "Holy Roman Empire · 800-1806 AD",
    el: "Αγία Ρωμαϊκή Αυτοκρατορία · 800-1806 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Holy Roman Empire",
    el: "Αγία Ρωμαϊκή Αυτοκρατορία"
  },
  theme: THEMES.gold,
  timeline: [
    {
      year: 800,
      era: {
        en: "Carolingian Empire",
        el: "Καρολίγγεια Αυτοκρατορία"
      },
      events: [
        {
          title: {
            en: "Birth of the medieval empire",
            el: "Γέννηση της μεσαιωνικής αυτοκρατορίας"
          },
          description: {
            en: "On Christmas Day, Pope Leo III crowns Charlemagne emperor in St Peter's Basilica. The Carolingian empire he assembled — Francia, Saxony, Lombard Italy, the Spanish March, Bavaria — becomes the first medieval rebirth of a Roman emperor in the West.",
            el: "Την ημέρα των Χριστουγέννων, ο Πάπας Λέων Γ΄ στέφει αυτοκράτορα τον Καρλομάγνο στη Βασιλική του Αγίου Πέτρου. Η Καρολίγγεια αυτοκρατορία που συγκρότησε — Φραγκία, Σαξονία, λομβαρδική Ιταλία, Ισπανικό Σύνορο, Βαυαρία — γίνεται η πρώτη μεσαιωνική αναγέννηση Ρωμαίου αυτοκράτορα στη Δύση."
          },
          extendedDescription: {
            en: "Charlemagne's empire stretched from the Ebro to the Elbe and from the North Sea to Rome. From his palace complex at Aachen — with its Palatine Chapel modelled on San Vitale in Ravenna — he sponsored the Carolingian Renaissance under Alcuin of York, standardised the Latin liturgy, struck a new silver penny that became the basis of European coinage, and dispatched the missi dominici as roving royal inspectors. After his death in 814, the empire would fragment, but the imperial idea remained — a Roman crown bestowed by the pope on a Germanic king. Every Holy Roman Emperor down to Francis II would trace his legitimacy to this Christmas in Rome.",
            el: "Η αυτοκρατορία του Καρλομάγνου εκτεινόταν από τον Έβρο ως τον Έλβα και από τη Βόρεια Θάλασσα ως τη Ρώμη. Από το ανακτορικό συγκρότημα στο Άαχεν — με το Παλατινό Παρεκκλήσι κατά το πρότυπο του Αγίου Βιταλίου της Ραβέννας — προστάτευσε την Καρολίγγεια Αναγέννηση υπό τον Αλκουίνο της Υόρκης, τυποποίησε τη λατινική λειτουργία, έκοψε νέο ασημένιο πέννυ που έγινε η βάση του ευρωπαϊκού νομίσματος και απέστελνε τους missi dominici ως περιοδεύοντες βασιλικούς επιθεωρητές. Μετά τον θάνατό του το 814, η αυτοκρατορία θα κατακερματιζόταν, αλλά η αυτοκρατορική ιδέα παρέμενε — ρωμαϊκό στέμμα που απονέμεται από τον πάπα σε γερμανό βασιλιά. Κάθε αυτοκράτορας της Αγίας Ρωμαϊκής Αυτοκρατορίας μέχρι τον Φραγκίσκο Β΄ θα ανάγει τη νομιμότητά του σε αυτά τα Χριστούγεννα στη Ρώμη."
          },
          category: "political"
        }
      ]
    },
    {
      year: 843,
      era: {
        en: "Treaty of Verdun",
        el: "Συνθήκη του Βερντέν"
      },
      events: [
        {
          title: {
            en: "The Treaty of Verdun divides the Frankish empire",
            el: "Η Συνθήκη του Βερντέν διαιρεί τη φραγκική αυτοκρατορία"
          },
          description: {
            en: "The three surviving grandsons of Charlemagne — Lothair, Louis the German, and Charles the Bald — partition his empire. Louis takes East Francia, the German-speaking lands east of the Rhine; the political map of medieval Germany is born.",
            el: "Οι τρεις επιζώντες εγγονοί του Καρλομάγνου — ο Λοθάριος, ο Λουδοβίκος ο Γερμανός και ο Κάρολος ο Φαλακρός — διαιρούν την αυτοκρατορία του. Ο Λουδοβίκος παίρνει την Ανατολική Φραγκία, τα γερμανόφωνα εδάφη ανατολικά του Ρήνου· γεννιέται ο πολιτικός χάρτης της μεσαιωνικής Γερμανίας."
          },
          extendedDescription: {
            en: "Verdun ended three years of civil war following the death of Louis the Pious. The middle kingdom of Lothair — a long ribbon from the North Sea through Lorraine and Burgundy to Italy — proved unstable and would soon disintegrate, leaving the Franco-German antithesis that would shape European history for the next twelve centuries. The Oaths of Strasbourg, sworn in 842 between the two younger brothers, are the earliest surviving texts in Old French and Old High German: even in the moment of division, the two languages of the inheritance stand revealed.",
            el: "Το Βερντέν τερμάτισε τριετή εμφύλιο πόλεμο μετά τον θάνατο του Λουδοβίκου του Ευσεβούς. Το μεσαίο βασίλειο του Λοθαρίου — μια μακριά λωρίδα από τη Βόρεια Θάλασσα μέσω Λωρραίνης και Βουργουνδίας μέχρι την Ιταλία — αποδείχθηκε ασταθές και σύντομα θα διαλυόταν, αφήνοντας τη γαλλογερμανική αντίθεση που θα διαμόρφωνε την ευρωπαϊκή ιστορία για τους επόμενους δώδεκα αιώνες. Οι Όρκοι του Στρασβούργου, που δόθηκαν το 842 μεταξύ των δύο νεότερων αδελφών, είναι τα παλαιότερα σωζόμενα κείμενα στην Παλαιά Γαλλική και στην Παλαιά Άνω Γερμανική: ακόμη και τη στιγμή της διαίρεσης, οι δύο γλώσσες της κληρονομιάς αποκαλύπτονται."
          },
          category: "political"
        }
      ]
    },
    {
      year: 911,
      era: {
        en: "End of the Eastern Carolingians",
        el: "Τέλος των Ανατολικών Καρολίγγειων"
      },
      events: [
        {
          title: {
            en: "Conrad I elected by the German dukes",
            el: "Ο Κονράδος Α΄ εκλέγεται από τους Γερμανούς δούκες"
          },
          description: {
            en: "On the death of the last Carolingian king of East Francia, Louis the Child, the German stem dukes — Saxons, Franconians, Bavarians, Swabians, Lotharingians — elect Conrad of Franconia as king. The German throne becomes elective.",
            el: "Με τον θάνατο του τελευταίου Καρολίγγειου βασιλιά της Ανατολικής Φραγκίας, του Λουδοβίκου του Παιδιού, οι γερμανοί δούκες των φύλων — Σάξονες, Φραγκόνες, Βαυαροί, Σουηβοί, Λοτριγγοί — εκλέγουν τον Κονράδο της Φραγκονίας βασιλιά. Ο γερμανικός θρόνος γίνεται αιρετός."
          },
          extendedDescription: {
            en: "The shift from dynastic succession to election by the great dukes — institutionalised eventually in the College of Electors — is the defining peculiarity of the German monarchy and would haunt it down to 1806. Conrad's reign was brief and beleaguered by Magyar raids; his greatest act of statesmanship was, on his deathbed, to advise the magnates to choose his rival Henry of Saxony as his successor. The Saxon recognition opened a new chapter in which the German kingdom would acquire the imperial title and become, after 962, the Holy Roman Empire.",
            el: "Η μετάβαση από δυναστική διαδοχή σε εκλογή από τους μεγάλους δούκες — που τελικά θεσμοθετήθηκε στο Κολλέγιο των Εκλεκτόρων — είναι η καθοριστική ιδιαιτερότητα της γερμανικής μοναρχίας και θα τη στοίχειωνε ως το 1806. Η βασιλεία του Κονράδου ήταν σύντομη και ταλαιπωρημένη από επιδρομές Ούγγρων· η μεγαλύτερη πράξη πολιτικής σύνεσης ήταν να συμβουλεύσει στο νεκροκρέβατο τους μεγιστάνες να επιλέξουν τον αντίπαλό του Ερρίκο της Σαξονίας ως διάδοχό του. Η σαξονική αναγνώριση άνοιξε νέο κεφάλαιο στο οποίο το γερμανικό βασίλειο θα αποκτούσε τον αυτοκρατορικό τίτλο και θα γινόταν, μετά το 962, η Αγία Ρωμαϊκή Αυτοκρατορία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 955,
      era: {
        en: "Battle of Lechfeld",
        el: "Μάχη του Λεχφέλντ"
      },
      events: [
        {
          title: {
            en: "Otto I shatters the Magyars on the Lech",
            el: "Ο Όθων Α΄ συντρίβει τους Ούγγρους στον Λεχ"
          },
          description: {
            en: "Outside Augsburg, Otto the Great destroys a great Magyar army that had ravaged Bavaria for half a century. The Hungarian raids on western Europe end forever; the survivors settle in the Carpathian basin and, within a generation, accept Christianity.",
            el: "Έξω από το Άουγκσμπουργκ, ο Όθων ο Μέγας καταστρέφει μεγάλο ουγγρικό στρατό που είχε ρημάξει τη Βαυαρία επί μισόν αιώνα. Οι ουγγρικές επιδρομές στη δυτική Ευρώπη τερματίζονται οριστικά· οι επιζώντες εγκαθίστανται στη λεκάνη των Καρπαθίων και, μέσα σε μία γενιά, αποδέχονται τον χριστιανισμό."
          },
          extendedDescription: {
            en: "Lechfeld was the founding military victory of the Ottonian dynasty. Otto fought under the Holy Lance — said to have pierced the side of Christ — and his soldiers acclaimed him imperator on the battlefield, a precedent for what would come in Rome seven years later. The defeat of the Magyars also stabilised central Europe for centuries and prepared the way for the Christian kingdoms of Hungary, Poland, and Bohemia that would form along the eastern frontier of the new empire.",
            el: "Το Λεχφέλντ ήταν η ιδρυτική στρατιωτική νίκη της Ωτωνικής δυναστείας. Ο Όθων πολέμησε υπό την Αγία Λόγχη — που λέγεται ότι διαπέρασε την πλευρά του Χριστού — και οι στρατιώτες του τον ανευφήμησαν imperator στο πεδίο της μάχης, προηγούμενο για όσα θα ακολουθούσαν στη Ρώμη επτά χρόνια αργότερα. Η ήττα των Ούγγρων σταθεροποίησε επίσης την κεντρική Ευρώπη για αιώνες και προετοίμασε την οδό για τα χριστιανικά βασίλεια Ουγγαρίας, Πολωνίας και Βοημίας που θα σχηματίζονταν κατά μήκος του ανατολικού συνόρου της νέας αυτοκρατορίας."
          },
          category: "military"
        }
      ]
    },
    {
      year: 962,
      era: {
        en: "Imperial Coronation",
        el: "Αυτοκρατορική Στέψη"
      },
      events: [
        {
          title: {
            en: "Otto I crowned Holy Roman Emperor",
            el: "Ο Όθων Α΄ στέφεται αυτοκράτορας της Αγίας Ρωμαϊκής Αυτοκρατορίας"
          },
          description: {
            en: "In St Peter's, Pope John XII places the imperial crown on Otto's head. The Carolingian title, vacant in the west for nearly forty years, is revived as a permanent dignity attached to the German kingship. The Holy Roman Empire is born.",
            el: "Στον Άγιο Πέτρο, ο Πάπας Ιωάννης ΙΒ΄ θέτει το αυτοκρατορικό στέμμα στο κεφάλι του Όθωνα. Ο καρολίγγειος τίτλος, κενός στη Δύση εδώ και σχεδόν σαράντα χρόνια, αναβιώνει ως μόνιμο αξίωμα συνδεδεμένο με τη γερμανική βασιλεία. Η Αγία Ρωμαϊκή Αυτοκρατορία γεννιέται."
          },
          extendedDescription: {
            en: "From this coronation onward, the king of the Germans had also a claim — though never an unbroken practice — to be crowned by the pope as Roman emperor. Otto's settlement, the Privilegium Ottonianum, asserted imperial overlordship over papal elections; within months he was deposing Pope John XII and installing his own candidate. The pattern of imperial intervention in Rome would define the next three centuries, culminating in the Investiture Controversy. The Byzantines, who regarded themselves as the only true Romans, fought a war with Otto over southern Italy before grudgingly recognising him by sending the princess Theophanu to marry his son.",
            el: "Από αυτή τη στέψη και μετά, ο βασιλιάς των Γερμανών είχε επίσης δικαίωμα — αν και ποτέ αδιάκοπη πρακτική — να στέφεται από τον πάπα ως ρωμαίος αυτοκράτορας. Η ωτωνική διευθέτηση, το Privilegium Ottonianum, διεκδίκησε αυτοκρατορική επικυριαρχία επί των παπικών εκλογών· μέσα σε μήνες καθαιρούσε τον Πάπα Ιωάννη ΙΒ΄ και εγκαθιστούσε τον δικό του υποψήφιο. Το μοτίβο της αυτοκρατορικής παρέμβασης στη Ρώμη θα όριζε τους επόμενους τρεις αιώνες, κορυφώμενο στη Διαμάχη των Επενδύσεων. Οι Βυζαντινοί, που θεωρούσαν τους εαυτούς τους τους μόνους αληθινούς Ρωμαίους, διεξήγαγαν πόλεμο με τον Όθωνα για τη νότια Ιταλία πριν τον αναγνωρίσουν απρόθυμα στέλνοντας την πριγκίπισσα Θεοφανώ για να παντρευτεί τον γιο του."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1024,
      era: {
        en: "Salian Dynasty",
        el: "Σαλική Δυναστεία"
      },
      events: [
        {
          title: {
            en: "Conrad II and the Salian dynasty",
            el: "Ο Κονράδος Β΄ και η Σαλική δυναστεία"
          },
          description: {
            en: "On the extinction of the Ottonian line, the princes elect Conrad of Franconia, a great-great-grandson of Otto the Great through the female line. The Salian dynasty he founds will rule the Empire for a century — and crash headlong into the reform papacy.",
            el: "Με την εκλιπούσα ωτωνική γραμμή, οι ηγεμόνες εκλέγουν τον Κονράδο της Φραγκονίας, δισέγγονο του Όθωνα του Μεγάλου μέσω της θηλυκής γραμμής. Η Σαλική δυναστεία που ιδρύει θα κυβερνήσει την Αυτοκρατορία για έναν αιώνα — και θα συγκρουστεί κατά μέτωπο με τον μεταρρυθμιστικό παπισμό."
          },
          extendedDescription: {
            en: "Under Conrad II and his son Henry III, the Empire reached its medieval zenith. Henry III in 1046 deposed three rival popes at the Synod of Sutri and installed the German reformer Clement II — a high point of imperial control over the papacy. But the very reformers the emperors patronised would, within thirty years, declare that simony and lay investiture were the cause of every ill in the Church and turn against imperial authority. The collision would be catastrophic.",
            el: "Υπό τον Κονράδο Β΄ και τον γιο του Ερρίκο Γ΄, η Αυτοκρατορία έφθασε στο μεσαιωνικό απόγειό της. Ο Ερρίκος Γ΄ το 1046 καθαίρεσε τρεις αντίπαλους πάπες στη Σύνοδο του Σούτρι και εγκατέστησε τον γερμανό μεταρρυθμιστή Κλήμη Β΄ — ύψιστο σημείο αυτοκρατορικού ελέγχου επί του παπισμού. Όμως οι ίδιοι οι μεταρρυθμιστές που προστάτευαν οι αυτοκράτορες θα διακήρυσσαν, μέσα σε τριάντα χρόνια, ότι η σιμωνία και η λαϊκή επένδυση ήταν η αιτία κάθε κακού στην Εκκλησία και θα στρέφονταν κατά της αυτοκρατορικής εξουσίας. Η σύγκρουση θα ήταν καταστροφική."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1077,
      era: {
        en: "Walk to Canossa",
        el: "Πορεία προς την Κανόσσα"
      },
      events: [
        {
          title: {
            en: "Henry IV in the snow at Canossa",
            el: "Ο Ερρίκος Δ΄ στο χιόνι της Κανόσσα"
          },
          description: {
            en: "Excommunicated by Pope Gregory VII for asserting the right to invest bishops, the German king Henry IV crosses the Alps in mid-winter and stands for three days barefoot in the snow outside the castle of Canossa, begging absolution. Gregory grants it — but the political damage is done.",
            el: "Αφορισμένος από τον Πάπα Γρηγόριο Ζ΄ για διεκδίκηση του δικαιώματος επένδυσης επισκόπων, ο γερμανός βασιλιάς Ερρίκος Δ΄ διασχίζει τις Άλπεις μέσα στον χειμώνα και στέκεται για τρεις μέρες ξυπόλητος στο χιόνι έξω από το κάστρο της Κανόσσα, ζητώντας άφεση. Ο Γρηγόριος του την παρέχει — αλλά η πολιτική ζημιά έχει γίνει."
          },
          extendedDescription: {
            en: "Canossa was the single most famous scene of the Investiture Controversy — the half-century struggle over who could appoint bishops and abbots within the Empire. Henry knelt to break the political effect of his excommunication, which had freed his vassals from their oaths. But the spectacle of an emperor humiliated before a pope shattered the older Ottonian-Salian theology of sacred kingship. Bismarck would, eight centuries later, declare during the Kulturkampf that 'we shall not go to Canossa' — proof that the wound never fully closed.",
            el: "Η Κανόσσα ήταν η πιο διάσημη σκηνή της Διαμάχης των Επενδύσεων — του μισού αιώνα αγώνα για το ποιος μπορούσε να διορίζει επισκόπους και ηγουμένους εντός της Αυτοκρατορίας. Ο Ερρίκος γονάτισε για να σπάσει την πολιτική επίδραση του αφορισμού του, που είχε απελευθερώσει τους υποτελείς του από τους όρκους τους. Αλλά το θέαμα ενός αυτοκράτορα ταπεινωμένου ενώπιον πάπα συνέτριψε την παλαιότερη ωτωνική-σαλική θεολογία της ιερής βασιλείας. Ο Μπίσμαρκ θα διακήρυσσε, οχτώ αιώνες αργότερα, κατά τον Kulturkampf, ότι «δεν θα πάμε στην Κανόσσα» — απόδειξη ότι η πληγή ποτέ δεν έκλεισε πλήρως."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1122,
      era: {
        en: "Concordat of Worms",
        el: "Σύμφωνο του Βορμς"
      },
      events: [
        {
          title: {
            en: "The Concordat of Worms compromises the Investiture Controversy",
            el: "Το Σύμφωνο του Βορμς συμβιβάζει τη Διαμάχη των Επενδύσεων"
          },
          description: {
            en: "After almost fifty years of war, antipopes, and rival kings, Henry V and Pope Calixtus II sign the Concordat of Worms. The emperor renounces investiture with ring and staff; the pope concedes that bishops in Germany are still elected in the emperor's presence and may receive their temporal regalia from him.",
            el: "Έπειτα από σχεδόν πενήντα χρόνια πολέμου, αντιπαπών και αντίπαλων βασιλέων, ο Ερρίκος Ε΄ και ο Πάπας Καλλίστος Β΄ υπογράφουν το Σύμφωνο του Βορμς. Ο αυτοκράτορας παραιτείται από την επένδυση με δαχτυλίδι και ράβδο· ο πάπας παραχωρεί ότι οι επίσκοποι στη Γερμανία εκλέγονται ακόμη παρουσία του αυτοκράτορα και μπορούν να λαμβάνουν τα κοσμικά τους σύμβολα από αυτόν."
          },
          extendedDescription: {
            en: "Worms was a compromise that both sides could publish as a victory, but the real winners were the German territorial princes, whose autonomy grew immensely during the long civil wars. The unity that the Ottonians and early Salians had imposed on the German Church and aristocracy was permanently broken. From here on the German kingship would be a presidency over a federation of secular princes and prince-bishops, not the centralising monarchy that would emerge in France and England.",
            el: "Το Βορμς ήταν συμβιβασμός που και οι δύο πλευρές μπόρεσαν να παρουσιάσουν ως νίκη, αλλά οι πραγματικοί νικητές ήταν οι γερμανοί εδαφικοί ηγεμόνες, των οποίων η αυτονομία αυξήθηκε τεράστια κατά τους μακρούς εμφυλίους πολέμους. Η ενότητα που είχαν επιβάλει οι Ωτωνίδες και οι πρώιμοι Σαλικοί στη γερμανική Εκκλησία και αριστοκρατία είχε σπάσει μόνιμα. Από εδώ και στο εξής η γερμανική βασιλεία θα ήταν προεδρία επί ομοσπονδίας κοσμικών ηγεμόνων και πριγκιπεπισκόπων, όχι η συγκεντρωτική μοναρχία που θα αναδυόταν στη Γαλλία και την Αγγλία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1152,
      era: {
        en: "Frederick Barbarossa",
        el: "Φρειδερίκος Μπαρμπαρόσσα"
      },
      events: [
        {
          title: {
            en: "Frederick Barbarossa elected king",
            el: "Ο Φρειδερίκος Μπαρμπαρόσσα εκλέγεται βασιλιάς"
          },
          description: {
            en: "The Hohenstaufen Frederick — nephew of the previous emperor Conrad III, but also kin through his mother to the rival Welf dynasty — is elected at Frankfurt. He will spend thirty-eight years trying to make the imperial idea a reality again in Italy and Germany.",
            el: "Ο Χοεντσταούφεν Φρειδερίκος — ανιψιός του προηγούμενου αυτοκράτορα Κονράδου Γ΄, αλλά και συγγενής μέσω της μητέρας του με την αντίπαλη δυναστεία των Welf — εκλέγεται στη Φρανκφούρτη. Θα περάσει τριάντα οχτώ χρόνια προσπαθώντας να κάνει την αυτοκρατορική ιδέα και πάλι πραγματικότητα στην Ιταλία και τη Γερμανία."
          },
          extendedDescription: {
            en: "Barbarossa, 'Redbeard', was the embodiment of the medieval imperial idea. He led six campaigns into Italy to assert his authority over the Lombard cities, suffered a famous defeat at Legnano in 1176, and made peace with the papacy at Venice in 1177. He had the body of Charlemagne canonised by an antipope in 1165 to legitimise his lineage, and he died on the Third Crusade in 1190, drowning in a river in Cilicia. The legend that he sleeps in a mountain in the Kyffhäuser and will return to restore the Empire's glory shaped German national myth into the nineteenth century.",
            el: "Ο Μπαρμπαρόσσα, «Κοκκινογένης», ήταν η ενσάρκωση της μεσαιωνικής αυτοκρατορικής ιδέας. Ηγήθηκε έξι εκστρατειών στην Ιταλία για να επιβάλει την εξουσία του επί των λομβαρδικών πόλεων, υπέστη περιώνυμη ήττα στη Λενιάνο το 1176, και έκανε ειρήνη με τον παπισμό στη Βενετία το 1177. Είχε αγιοποιήσει το σώμα του Καρλομάγνου από αντιπάπα το 1165 για να νομιμοποιήσει την καταγωγή του, και πέθανε στην Γ΄ Σταυροφορία το 1190, πνιγμένος σε ποταμό της Κιλικίας. Ο θρύλος ότι κοιμάται σε βουνό στο Κυφχόυζερ και θα επιστρέψει για να αποκαταστήσει τη δόξα της Αυτοκρατορίας διαμόρφωσε τον γερμανικό εθνικό μύθο μέχρι τον δέκατο ένατο αιώνα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1220,
      era: {
        en: "Stupor Mundi",
        el: "Stupor Mundi"
      },
      events: [
        {
          title: {
            en: "Frederick II crowned emperor",
            el: "Ο Φρειδερίκος Β΄ στέφεται αυτοκράτορας"
          },
          description: {
            en: "The Hohenstaufen Frederick II — king of Sicily, ward of Pope Innocent III, fluent in Arabic and patron of Aristotelian philosophy — is crowned emperor in Rome. Contemporaries called him stupor mundi, the wonder of the world.",
            el: "Ο Χοεντσταούφεν Φρειδερίκος Β΄ — βασιλιάς της Σικελίας, κηδεμονευόμενος του Πάπα Ιννοκέντιου Γ΄, με άπταιστα αραβικά και προστάτης της αριστοτελικής φιλοσοφίας — στέφεται αυτοκράτορας στη Ρώμη. Οι σύγχρονοι τον αποκαλούσαν stupor mundi, το θαύμα του κόσμου."
          },
          extendedDescription: {
            en: "Frederick II governed a Mediterranean empire from his Norman-Arab-Byzantine court at Palermo, while leaving the German lands to his vassals. In Germany he issued the Statutum in favorem principum (1232), formally granting the territorial princes most of the powers of sovereign rulers — the constitutional charter, in effect, of the German territorial state. He won Jerusalem back without a battle in 1229, was repeatedly excommunicated, and died in 1250. The Hohenstaufen dynasty collapsed quickly after him; his grandson Conradin was executed by the Angevins at Naples in 1268. The Empire entered a generation-long crisis known as the Great Interregnum.",
            el: "Ο Φρειδερίκος Β΄ κυβερνούσε μια μεσογειακή αυτοκρατορία από τη νορμανδοαραβοβυζαντινή αυλή του στο Παλέρμο, αφήνοντας τα γερμανικά εδάφη στους υποτελείς του. Στη Γερμανία εξέδωσε το Statutum in favorem principum (1232), παραχωρώντας επισήμως στους εδαφικούς ηγεμόνες τις περισσότερες από τις εξουσίες κυρίαρχων ηγεμόνων — τον συνταγματικό χάρτη, στην πράξη, του γερμανικού εδαφικού κράτους. Ξανακέρδισε την Ιερουσαλήμ χωρίς μάχη το 1229, αφορίστηκε επανειλημμένα και πέθανε το 1250. Η δυναστεία των Χοεντσταούφεν κατέρρευσε γρήγορα μετά από αυτόν· ο εγγονός του Κονραδίνος εκτελέστηκε από τους Ανδεγαβούς στη Νάπολη το 1268. Η Αυτοκρατορία μπήκε σε γενιά κρίσης γνωστή ως η Μεγάλη Μεσοβασιλεία."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1254,
      era: {
        en: "Great Interregnum",
        el: "Μεγάλη Μεσοβασιλεία"
      },
      events: [
        {
          title: {
            en: "The Great Interregnum",
            el: "Η Μεγάλη Μεσοβασιλεία"
          },
          description: {
            en: "After the death of Conrad IV, two foreign candidates — William of Holland, Richard of Cornwall, Alfonso of Castile — claim the imperial title without effective power. For two decades there is no recognised emperor in Germany. The princely confederations and city leagues fill the vacuum.",
            el: "Μετά τον θάνατο του Κονράδου Δ΄, δύο ξένοι υποψήφιοι — ο Γουλιέλμος της Ολλανδίας, ο Ριχάρδος της Κορνουάλης, ο Αλφόνσος της Καστίλης — διεκδικούν τον αυτοκρατορικό τίτλο χωρίς πραγματική εξουσία. Επί δύο δεκαετίες δεν υπάρχει αναγνωρισμένος αυτοκράτορας στη Γερμανία. Οι ηγεμονικές συνομοσπονδίες και οι ενώσεις πόλεων καλύπτουν το κενό."
          },
          extendedDescription: {
            en: "The Interregnum (often dated 1250-1273) was decisive for the constitutional shape of the Empire. The Hanseatic League founded in 1241 grew into a Baltic and North Sea trading power; the Rhenish League of cities and the Swabian League policed their own peace. When in 1273 the electors finally chose Rudolf of Habsburg — a modest Swiss count nobody feared — they did so to confirm that no future emperor would ever again be more than a coordinator of the princes. The Empire would now be ruled by election, by the consent of the princes, and not by hereditary right.",
            el: "Η Μεσοβασιλεία (συνήθως 1250-1273) ήταν αποφασιστική για το συνταγματικό σχήμα της Αυτοκρατορίας. Η Χανσεατική Ένωση που ιδρύθηκε το 1241 αναπτύχθηκε σε εμπορική δύναμη Βαλτικής και Βόρειας Θάλασσας· η Ρηνική Ένωση πόλεων και η Σουηβική Ένωση επέβαλλαν τη δική τους ειρήνη. Όταν το 1273 οι εκλέκτορες επέλεξαν τελικά τον Ροδόλφο των Αψβούργων — μέτριο Ελβετό κόμη που κανείς δεν φοβόταν — το έκαναν για να επιβεβαιώσουν ότι κανένας μελλοντικός αυτοκράτορας δεν θα ήταν ξανά τίποτα περισσότερο από συντονιστής των ηγεμόνων. Η Αυτοκρατορία θα κυβερνιόταν τώρα διά εκλογής, με τη συναίνεση των ηγεμόνων, και όχι με κληρονομικό δικαίωμα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1273,
      era: {
        en: "Rise of the Habsburgs",
        el: "Άνοδος των Αψβούργων"
      },
      events: [
        {
          title: {
            en: "Rudolf of Habsburg elected king",
            el: "Ο Ροδόλφος των Αψβούργων εκλέγεται βασιλιάς"
          },
          description: {
            en: "The electors choose Rudolf, count of Habsburg in the upper Rhine, to end the Interregnum. He never bothers to journey to Rome for imperial coronation, but he wins Austria from Ottokar of Bohemia at Marchfeld in 1278 — and so plants his family in the Danube basin where they will rule for six and a half centuries.",
            el: "Οι εκλέκτορες επιλέγουν τον Ροδόλφο, κόμη των Αψβούργων στον άνω Ρήνο, για να τερματίσουν τη Μεσοβασιλεία. Ποτέ δεν μπαίνει στον κόπο να ταξιδέψει στη Ρώμη για αυτοκρατορική στέψη, αλλά κερδίζει την Αυστρία από τον Οττοκάρ της Βοημίας στο Μάρχφελντ το 1278 — και έτσι φυτεύει την οικογένειά του στη λεκάνη του Δουνάβεως όπου θα κυβερνά για έξι και μισό αιώνες."
          },
          extendedDescription: {
            en: "The Habsburgs would not yet monopolise the imperial title — for the next century and a half it would rotate between the houses of Habsburg, Wittelsbach, and Luxembourg — but their territorial base in Austria, eventually expanded to Styria, Carinthia, Carniola, and Tyrol, gave them the resources that would ultimately make them indispensable. The family motto, A.E.I.O.U. — variously decoded as Austria erit in orbe ultima, 'Austria will be last in the world' — captured the patient, dynastic ambition that would make the Habsburgs the great survivors of European history.",
            el: "Οι Αψβούργοι δεν θα μονοπωλούσαν ακόμη τον αυτοκρατορικό τίτλο — για τον επόμενο ενάμισι αιώνα θα εναλλασσόταν ανάμεσα στους οίκους των Αψβούργων, Wittelsbach και Λουξεμβούργου — αλλά η εδαφική τους βάση στην Αυστρία, που τελικά επεκτάθηκε στη Στυρία, την Καρινθία, την Κάρνιολα και το Τιρόλο, τους έδωσε τους πόρους που τελικά θα τους έκαναν αναντικατάστατους. Το οικογενειακό τους ρητό, A.E.I.O.U. — που αποκωδικοποιείται ποικιλοτρόπως ως Austria erit in orbe ultima, «Η Αυστρία θα είναι η τελευταία στον κόσμο» — αποτύπωσε την υπομονετική, δυναστική φιλοδοξία που θα έκανε τους Αψβούργους τους μεγάλους επιζώντες της ευρωπαϊκής ιστορίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1356,
      era: {
        en: "Golden Bull",
        el: "Χρυσόβουλλο"
      },
      events: [
        {
          title: {
            en: "The Golden Bull of Charles IV",
            el: "Το Χρυσόβουλλο του Καρόλου Δ΄"
          },
          description: {
            en: "At Nuremberg and Metz, the Luxembourg emperor Charles IV promulgates the Golden Bull — the imperial law that fixes the seven Electors who alone may choose a German king and locks the procedure of imperial elections into stone for the next 450 years.",
            el: "Στη Νυρεμβέργη και στη Μετς, ο Λουξεμβούργιος αυτοκράτορας Κάρολος Δ΄ εκδίδει το Χρυσόβουλλο — τον αυτοκρατορικό νόμο που καθορίζει τους επτά Εκλέκτορες που μόνοι μπορούν να επιλέγουν γερμανό βασιλιά και κλειδώνει τη διαδικασία των αυτοκρατορικών εκλογών για τα επόμενα 450 χρόνια."
          },
          extendedDescription: {
            en: "The seven electors — the archbishops of Mainz, Cologne, and Trier; the king of Bohemia; the count palatine of the Rhine; the duke of Saxony; and the margrave of Brandenburg — became the great princes of the Empire, exempt from imperial taxation and enjoying privileges beyond all other lords. The Golden Bull cemented the elective principle, ended the role of the papacy in confirming imperial elections, and tacitly recognised that the medieval imperial idea of universal monarchy was over. Goethe would call it 'the basic law of the Empire', and in 1806 Francis II would dissolve the Empire because its constitution under the Golden Bull no longer fit Napoleonic Europe.",
            el: "Οι επτά εκλέκτορες — οι αρχιεπίσκοποι του Μάιντς, της Κολωνίας και του Τρίερ· ο βασιλιάς της Βοημίας· ο κόμης παλατίνος του Ρήνου· ο δούκας της Σαξονίας· και ο μαργράβος του Βρανδεμβούργου — έγιναν οι μεγάλοι ηγεμόνες της Αυτοκρατορίας, εξαιρούμενοι από αυτοκρατορική φορολογία και απολαμβάνοντας προνόμια πέραν όλων των άλλων αρχόντων. Το Χρυσόβουλλο εδραίωσε την εκλογική αρχή, τερμάτισε τον ρόλο του παπισμού στην επικύρωση των αυτοκρατορικών εκλογών και αναγνώρισε σιωπηρά ότι η μεσαιωνική αυτοκρατορική ιδέα της παγκόσμιας μοναρχίας είχε τελειώσει. Ο Γκαίτε θα το αποκαλούσε «θεμελιώδη νόμο της Αυτοκρατορίας», και το 1806 ο Φραγκίσκος Β΄ θα διέλυε την Αυτοκρατορία επειδή το σύνταγμά της υπό το Χρυσόβουλλο δεν ταίριαζε πλέον με τη ναπολεόντεια Ευρώπη."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1415,
      era: {
        en: "Council of Constance",
        el: "Σύνοδος της Κωνσταντίας"
      },
      events: [
        {
          title: {
            en: "The burning of Jan Hus",
            el: "Η πυρά του Ιωάννη Ους"
          },
          description: {
            en: "At the Council of Constance convened by the emperor Sigismund to heal the Western Schism, the Bohemian reformer Jan Hus — promised an imperial safe-conduct — is condemned for heresy and burned at the stake. The Hussite Wars that follow shake the Empire for two decades.",
            el: "Στη Σύνοδο της Κωνσταντίας που συγκάλεσε ο αυτοκράτορας Σιγισμούνδος για να θεραπεύσει το Δυτικό Σχίσμα, ο Βοημός μεταρρυθμιστής Ιωάννης Ους — στον οποίο υποσχέθηκε αυτοκρατορική ασφαλή διέλευση — καταδικάζεται για αίρεση και καίγεται στην πυρά. Οι Πόλεμοι των Ουσιτών που ακολουθούν συγκλονίζουν την Αυτοκρατορία επί δύο δεκαετίες."
          },
          extendedDescription: {
            en: "The Council of Constance ended the Great Schism by deposing three rival popes and electing Martin V, but its execution of Hus turned Bohemia into a generation-long battleground. Hussite armies under Jan Žižka invented mobile war-wagon tactics that crushed five imperial crusades; only the Compactata of 1436, conceding utraquist communion to the Bohemians, brought peace. The Hussite movement was the first major rupture in the medieval Western Church — a century before Luther, and on imperial soil. The Hussites' insistence that the laity should communicate in both kinds, sub utraque specie, would foreshadow every later Reformation argument about the relation of sacrament, scripture, and authority.",
            el: "Η Σύνοδος της Κωνσταντίας τερμάτισε το Μέγα Σχίσμα καθαιρώντας τρεις αντίπαλους πάπες και εκλέγοντας τον Μαρτίνο Ε΄, αλλά η εκτέλεση του Ους μετέτρεψε τη Βοημία σε πεδίο μάχης μιας ολόκληρης γενιάς. Στρατοί Ουσιτών υπό τον Γιαν Ζίζκα επινόησαν τακτικές κινητών πολεμικών αμαξών που συνέτριψαν πέντε αυτοκρατορικές σταυροφορίες· μόνο τα Compactata του 1436, παραχωρώντας ουτρακιστική κοινωνία στους Βοημούς, έφεραν ειρήνη. Το κίνημα των Ουσιτών ήταν η πρώτη μεγάλη ρήξη στη μεσαιωνική Δυτική Εκκλησία — έναν αιώνα πριν από τον Λούθηρο, και σε αυτοκρατορικό έδαφος. Η επιμονή των Ουσιτών ότι οι λαϊκοί έπρεπε να κοινωνούν και υπό τα δύο είδη, sub utraque specie, θα προμήνυε κάθε μεταγενέστερο επιχείρημα Μεταρρύθμισης για τη σχέση μυστηρίου, γραφής και εξουσίας."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1438,
      era: {
        en: "Habsburg Permanence",
        el: "Αψβουργική Μονιμότητα"
      },
      events: [
        {
          title: {
            en: "Albert II inaugurates Habsburg permanence",
            el: "Ο Αλβέρτος Β΄ εγκαινιάζει τη μονιμότητα των Αψβούργων"
          },
          description: {
            en: "On the death of the Luxembourg emperor Sigismund, his son-in-law Albert of Habsburg is elected king. Apart from a brief Wittelsbach interlude in 1742-45, the imperial crown will remain in Habsburg hands for the rest of the Empire's existence.",
            el: "Με τον θάνατο του Λουξεμβούργιου αυτοκράτορα Σιγισμούνδου, ο γαμπρός του Αλβέρτος των Αψβούργων εκλέγεται βασιλιάς. Εκτός από μία σύντομη ενδιάμεση Wittelsbach περίοδο το 1742-45, το αυτοκρατορικό στέμμα θα παραμείνει στα χέρια των Αψβούργων για το υπόλοιπο της ύπαρξης της Αυτοκρατορίας."
          },
          extendedDescription: {
            en: "The Habsburg ascendancy from 1438 transformed the Empire's geography. Under Maximilian I, who married Mary of Burgundy in 1477, and under Charles V, who inherited Spain and its American empire in 1516, the imperial title became attached to a global Habsburg dynasty rather than a German territorial one. The contradiction between an elective German constitution and a dynastic supranational monarchy would be one of the central tensions of the Empire's final centuries. The Latin adage of the dynasty's marriage policy — Bella gerant alii, tu felix Austria nube — captured the strategy that had, by century's end, made the Habsburgs Europe's first family.",
            el: "Η Αψβουργική ανάβαση από το 1438 μεταμόρφωσε τη γεωγραφία της Αυτοκρατορίας. Υπό τον Μαξιμιλιανό Α΄, που παντρεύτηκε τη Μαρία της Βουργουνδίας το 1477, και υπό τον Κάρολο Ε΄, που κληρονόμησε την Ισπανία και την αμερικανική της αυτοκρατορία το 1516, ο αυτοκρατορικός τίτλος συνδέθηκε με μια παγκόσμια αψβουργική δυναστεία αντί για μια γερμανική εδαφική. Η αντίφαση μεταξύ ενός αιρετού γερμανικού συντάγματος και μιας δυναστικής υπερεθνικής μοναρχίας θα ήταν μία από τις κεντρικές εντάσεις των τελευταίων αιώνων της Αυτοκρατορίας. Η λατινική παροιμία της γαμικής πολιτικής της δυναστείας — Bella gerant alii, tu felix Austria nube — αποτύπωσε τη στρατηγική που είχε, στο τέλος του αιώνα, κάνει τους Αψβούργους την πρώτη οικογένεια της Ευρώπης."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1495,
      era: {
        en: "Imperial Reform",
        el: "Αυτοκρατορική Μεταρρύθμιση"
      },
      events: [
        {
          title: {
            en: "Maximilian's Reichsreform at Worms",
            el: "Η Reichsreform του Μαξιμιλιανού στο Βορμς"
          },
          description: {
            en: "At the Diet of Worms in 1495, the emperor Maximilian I and the imperial estates inaugurate the Reichsreform — establishing a perpetual public peace (Ewiger Landfriede), an imperial supreme court (Reichskammergericht), and a common imperial tax. The Empire is given its first early-modern administrative architecture.",
            el: "Στη Δίαιτα του Βορμς το 1495, ο αυτοκράτορας Μαξιμιλιανός Α΄ και τα αυτοκρατορικά τάγματα εγκαινιάζουν τη Reichsreform — θεσπίζοντας μια αιώνια δημόσια ειρήνη (Ewiger Landfriede), ένα αυτοκρατορικό ανώτατο δικαστήριο (Reichskammergericht) και έναν κοινό αυτοκρατορικό φόρο. Η Αυτοκρατορία αποκτά την πρώτη πρώιμη νεωτερική διοικητική της αρχιτεκτονική."
          },
          extendedDescription: {
            en: "The reform was a compromise between Maximilian's wish for a tax-funded standing army and the princes' wish for a constitutional order they could control. The empire was eventually divided into ten Imperial Circles (Reichskreise) for purposes of policing, conscription, and currency. The famous map of the Empire as a 'monster' in Pufendorf's later judgement — irregularem aliquod corpus et monstro simile — was the price for the political plurality this constitution preserved. Within a generation Luther's Reformation would test it nearly to destruction.",
            el: "Η μεταρρύθμιση ήταν συμβιβασμός μεταξύ της επιθυμίας του Μαξιμιλιανού για στρατό τακτικό χρηματοδοτούμενο από φόρους και της επιθυμίας των ηγεμόνων για συνταγματική τάξη που θα μπορούσαν να ελέγξουν. Η αυτοκρατορία διαιρέθηκε τελικά σε δέκα Αυτοκρατορικούς Κύκλους (Reichskreise) για σκοπούς αστυνόμευσης, στρατολογίας και νομίσματος. Ο περίφημος χάρτης της Αυτοκρατορίας ως «τέρας» στη μεταγενέστερη κρίση του Πούφεντορφ — irregularem aliquod corpus et monstro simile — ήταν το τίμημα για την πολιτική πολλαπλότητα που αυτό το σύνταγμα διατήρησε. Μέσα σε μία γενιά η Μεταρρύθμιση του Λουθήρου θα τη δοκίμαζε σχεδόν μέχρι την καταστροφή."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1517,
      era: {
        en: "Reformation",
        el: "Μεταρρύθμιση"
      },
      events: [
        {
          title: {
            en: "Luther's Ninety-five Theses",
            el: "Οι Ενενήντα Πέντε Θέσεις του Λουθήρου"
          },
          description: {
            en: "On the eve of All Saints, the Augustinian friar Martin Luther — professor at the new university of Wittenberg in electoral Saxony — circulates ninety-five Latin propositions against the sale of indulgences. The pamphlet, translated and reprinted across Germany within months, ignites the Reformation.",
            el: "Την παραμονή των Αγίων Πάντων, ο Αυγουστινιανός μοναχός Μάρτιν Λούθηρος — καθηγητής στο νέο πανεπιστήμιο της Wittenberg στην εκλεκτορική Σαξονία — κυκλοφορεί ενενήντα πέντε λατινικές προτάσεις κατά της πώλησης συγχωροχαρτίων. Το φυλλάδιο, μεταφρασμένο και ανατυπωμένο σε όλη τη Γερμανία μέσα σε μήνες, πυροδοτεί τη Μεταρρύθμιση."
          },
          extendedDescription: {
            en: "Whether Luther actually nailed the Theses to the door of the Castle Church on 31 October is debated, but his letter of that day to archbishop Albert of Mainz is preserved. The campaign that the Theses began led within four years to Luther's excommunication, his appearance before Charles V at the Diet of Worms, and his hiding in the Wartburg, where he translated the New Testament into German — the single most influential book in the formation of the modern German language. The Reformation would split the German nation, divide the Empire into Catholic and Protestant territories, and set the agenda of German politics for at least two centuries.",
            el: "Αν ο Λούθηρος πραγματικά κάρφωσε τις Θέσεις στην πόρτα της Εκκλησίας του Κάστρου στις 31 Οκτωβρίου είναι αμφισβητούμενο, αλλά η επιστολή του εκείνη την ημέρα προς τον αρχιεπίσκοπο Αλβέρτο του Μάιντς διατηρείται. Η εκστρατεία που ξεκίνησαν οι Θέσεις οδήγησε μέσα σε τέσσερα χρόνια στον αφορισμό του Λουθήρου, στην εμφάνισή του ενώπιον του Καρόλου Ε΄ στη Δίαιτα του Βορμς, και στην απόκρυψή του στο Wartburg, όπου μετέφρασε την Καινή Διαθήκη στα γερμανικά — το επιδραστικότερο μεμονωμένο βιβλίο για τη διαμόρφωση της σύγχρονης γερμανικής γλώσσας. Η Μεταρρύθμιση θα χώριζε το γερμανικό έθνος, θα διαιρούσε την Αυτοκρατορία σε καθολικά και προτεσταντικά εδάφη, και θα έθετε την ατζέντα της γερμανικής πολιτικής για τουλάχιστον δύο αιώνες."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1521,
      era: {
        en: "Diet of Worms",
        el: "Δίαιτα του Βορμς"
      },
      events: [
        {
          title: {
            en: "Luther before Charles V at Worms",
            el: "Ο Λούθηρος ενώπιον του Καρόλου Ε΄ στο Βορμς"
          },
          description: {
            en: "At the Diet of Worms, the twenty-one-year-old emperor Charles V demands that Luther retract his books. Luther refuses: 'Here I stand, I can do no other.' Charles places him under the imperial ban with the Edict of Worms, but Elector Frederick the Wise spirits him away to the Wartburg.",
            el: "Στη Δίαιτα του Βορμς, ο εικοσιενός ετών αυτοκράτορας Κάρολος Ε΄ απαιτεί από τον Λούθηρο να αποκηρύξει τα βιβλία του. Ο Λούθηρος αρνείται: «Εδώ στέκομαι, δεν μπορώ αλλιώς». Ο Κάρολος τον θέτει υπό την αυτοκρατορική απαγόρευση με το Διάταγμα του Βορμς, αλλά ο Εκλέκτορας Φρειδερίκος ο Σοφός τον απομακρύνει κρυφά στο Wartburg."
          },
          extendedDescription: {
            en: "The exact words of Luther's reply are disputed, but the political moment was clear: a German monk could defy emperor and pope and survive, protected by a German territorial prince. Charles V — king of Spain, lord of the Burgundian Netherlands, ruler of the new Spanish empire in Mexico and Peru — would spend the rest of his reign trying to crush the heresy his Diet had failed to stop. Yet the Reformation spread inexorably: Saxony, Hesse, Brandenburg, the imperial cities of Nuremberg and Strasbourg, the Scandinavian kingdoms; by 1555 perhaps two-thirds of the Empire had become Protestant.",
            el: "Τα ακριβή λόγια της απάντησης του Λουθήρου είναι αμφισβητούμενα, αλλά η πολιτική στιγμή ήταν σαφής: ένας γερμανός μοναχός μπορούσε να αντισταθεί σε αυτοκράτορα και πάπα και να επιβιώσει, προστατευμένος από έναν γερμανό εδαφικό ηγεμόνα. Ο Κάρολος Ε΄ — βασιλιάς της Ισπανίας, άρχοντας των Βουργουνδιανών Κάτω Χωρών, κυβερνήτης της νέας ισπανικής αυτοκρατορίας στο Μεξικό και το Περού — θα περνούσε το υπόλοιπο της βασιλείας του προσπαθώντας να συντρίψει την αίρεση που η Δίαιτά του είχε αποτύχει να σταματήσει. Όμως η Μεταρρύθμιση εξαπλωνόταν αδυσώπητα: Σαξονία, Έσση, Βρανδεμβούργο, οι αυτοκρατορικές πόλεις της Νυρεμβέργης και του Στρασβούργου, τα σκανδιναβικά βασίλεια· μέχρι το 1555 ίσως τα δύο τρίτα της Αυτοκρατορίας είχαν γίνει προτεσταντικά."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1555,
      era: {
        en: "Peace of Augsburg",
        el: "Ειρήνη του Άουγκσμπουργκ"
      },
      events: [
        {
          title: {
            en: "The Peace of Augsburg",
            el: "Η Ειρήνη του Άουγκσμπουργκ"
          },
          description: {
            en: "After Charles V's defeat in the Schmalkaldic War's second round, his brother Ferdinand negotiates the Peace of Augsburg with the imperial estates. The treaty enshrines the principle cuius regio, eius religio: each prince decides whether his territory shall be Catholic or Lutheran.",
            el: "Μετά την ήττα του Καρόλου Ε΄ στον δεύτερο γύρο του Σμαλκαλδικού Πολέμου, ο αδελφός του Φερδινάνδος διαπραγματεύεται την Ειρήνη του Άουγκσμπουργκ με τα αυτοκρατορικά τάγματα. Η συνθήκη κατοχυρώνει την αρχή cuius regio, eius religio: κάθε ηγεμόνας αποφασίζει αν η επικράτειά του θα είναι καθολική ή λουθηρανική."
          },
          extendedDescription: {
            en: "Augsburg was a constitutional revolution. The medieval idea of a single Christian church coterminous with the Empire was dead; the Empire became a confessional federation. The settlement excluded the Reformed (Calvinist) confession, which would soon become a major German faith in the Palatinate, Hesse-Kassel, and Brandenburg — an omission that would eventually destabilise the peace. Charles V, disillusioned by the failure of his life's work to keep the Church united, abdicated the next year, dividing his vast dominions between his brother Ferdinand (the Empire and Austria) and his son Philip II (Spain, the Netherlands, the Americas). He retired to a monastery in Spain and died there in 1558.",
            el: "Το Άουγκσμπουργκ ήταν συνταγματική επανάσταση. Η μεσαιωνική ιδέα μιας ενιαίας χριστιανικής εκκλησίας ταυτόσημης με την Αυτοκρατορία ήταν νεκρή· η Αυτοκρατορία έγινε ομολογιακή ομοσπονδία. Η διευθέτηση εξαίρεσε την Μεταρρυθμισμένη (Καλβινιστική) ομολογία, που θα γινόταν σύντομα σημαντική γερμανική πίστη στο Παλατινάτο, στην Έσση-Κάσσελ και στο Βρανδεμβούργο — μια παράλειψη που τελικά θα αποσταθεροποιούσε την ειρήνη. Ο Κάρολος Ε΄, απογοητευμένος από την αποτυχία του έργου της ζωής του να κρατήσει την Εκκλησία ενωμένη, παραιτήθηκε τον επόμενο χρόνο, διαιρώντας τις τεράστιες κτήσεις του μεταξύ του αδελφού του Φερδινάνδου (η Αυτοκρατορία και η Αυστρία) και του γιου του Φιλίππου Β΄ (η Ισπανία, οι Κάτω Χώρες, οι Αμερικές). Αποσύρθηκε σε μοναστήρι στην Ισπανία και πέθανε εκεί το 1558."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1618,
      era: {
        en: "Thirty Years' War",
        el: "Τριακονταετής Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Defenestration of Prague",
            el: "Παραθυροβολή της Πράγας"
          },
          description: {
            en: "On 23 May, Bohemian Protestant nobles throw two Catholic regents and their secretary from a window of Hradschin Castle in Prague. They survive — saved, the Jesuits said, by the Virgin's intercession; the dung-heap they fell into, said the Protestants. Within months the rebellion has become the Thirty Years' War.",
            el: "Στις 23 Μαΐου, βοημοί προτεστάντες ευγενείς ρίχνουν δύο καθολικούς αντιβασιλείς και τον γραμματέα τους από παράθυρο του Κάστρου Hradschin στην Πράγα. Επιβιώνουν — σώθηκαν, είπαν οι Ιησουίτες, από τη μεσιτεία της Παρθένου· από τον σωρό κοπριάς όπου έπεσαν, είπαν οι προτεστάντες. Μέσα σε μήνες η εξέγερση έχει γίνει ο Τριακονταετής Πόλεμος."
          },
          extendedDescription: {
            en: "The Bohemian Estates offered their crown to the Calvinist Elector Frederick V of the Palatinate — the 'Winter King' — and the imperial response under Ferdinand II turned a local crisis into Europe's first continental war. Phase by phase, the Bohemian, Danish, Swedish, and French interventions drew in every major power. Magdeburg was sacked in 1631 with the death of perhaps 25,000 people. Wallenstein, the great mercenary entrepreneur, was made and unmade by the emperor. By the time peace came in 1648, the population of the German lands had fallen by perhaps a third, some regions by half — a demographic catastrophe unmatched until 1945.",
            el: "Τα Βοημικά Τάγματα προσέφεραν το στέμμα τους στον Καλβινιστή Εκλέκτορα Φρειδερίκο Ε΄ του Παλατινάτου — τον «Χειμερινό Βασιλιά» — και η αυτοκρατορική απάντηση υπό τον Φερδινάνδο Β΄ μετέτρεψε μια τοπική κρίση στον πρώτο ηπειρωτικό πόλεμο της Ευρώπης. Φάση προς φάση, οι βοημικές, δανικές, σουηδικές και γαλλικές παρεμβάσεις παρέσυραν κάθε μεγάλη δύναμη. Η Μαγδεμβούργη λεηλατήθηκε το 1631 με τον θάνατο ίσως 25.000 ανθρώπων. Ο Βαλλενστάιν, ο μεγάλος μισθοφορικός επιχειρηματίας, ανυψώθηκε και καταστράφηκε από τον αυτοκράτορα. Όταν ήρθε η ειρήνη το 1648, ο πληθυσμός των γερμανικών εδαφών είχε πέσει ίσως κατά ένα τρίτο, ορισμένες περιοχές κατά το ήμισυ — δημογραφική καταστροφή ανυπέρβλητη μέχρι το 1945."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1648,
      era: {
        en: "Peace of Westphalia",
        el: "Ειρήνη της Βεστφαλίας"
      },
      events: [
        {
          title: {
            en: "The Peace of Westphalia",
            el: "Η Ειρήνη της Βεστφαλίας"
          },
          description: {
            en: "After five years of negotiation in Münster and Osnabrück, the Peace of Westphalia ends the Thirty Years' War. The German territorial princes are recognised as effectively sovereign; France acquires Alsace, Sweden takes Pomerania, the Dutch and Swiss are confirmed as independent, and Calvinism is admitted alongside Lutheranism and Catholicism.",
            el: "Έπειτα από πέντε χρόνια διαπραγματεύσεων στο Μύνστερ και το Όσναμπρουκ, η Ειρήνη της Βεστφαλίας τερματίζει τον Τριακονταετή Πόλεμο. Οι γερμανοί εδαφικοί ηγεμόνες αναγνωρίζονται ως ουσιαστικά κυρίαρχοι· η Γαλλία αποκτά την Αλσατία, η Σουηδία παίρνει την Πομερανία, οι Ολλανδοί και οι Ελβετοί επιβεβαιώνονται ως ανεξάρτητοι και ο Καλβινισμός γίνεται δεκτός μαζί με τον Λουθηρανισμό και τον Καθολικισμό."
          },
          extendedDescription: {
            en: "Westphalia is conventionally taken as the foundation of the modern European state system: each prince a sovereign within his territory, free of supranational ecclesiastical or imperial authority. For the Empire itself, the peace was a constitutional consolidation rather than an end: the Imperial Diet became a permanent congress at Regensburg in 1663; the territorial estates governed within fixed law; the emperor remained the apex of a complex hierarchy. Pufendorf's later judgement that the Empire was 'an irregular body resembling a monster' captured the unusual federal-confederal architecture that emerged. Yet it functioned — and held together a century and a half more.",
            el: "Η Βεστφαλία λαμβάνεται συμβατικά ως η θεμελίωση του σύγχρονου ευρωπαϊκού κρατικού συστήματος: κάθε ηγεμόνας κυρίαρχος εντός της επικράτειάς του, ελεύθερος από υπερεθνική εκκλησιαστική ή αυτοκρατορική εξουσία. Για την ίδια την Αυτοκρατορία, η ειρήνη ήταν συνταγματική εδραίωση παρά τέλος: η Αυτοκρατορική Δίαιτα έγινε μόνιμο συνέδριο στο Ρέγκενσμπουργκ το 1663· τα εδαφικά τάγματα κυβερνούσαν εντός σταθερού δικαίου· ο αυτοκράτορας παρέμενε η κορυφή πολύπλοκης ιεραρχίας. Η μεταγενέστερη κρίση του Πούφεντορφ ότι η Αυτοκρατορία ήταν «ακανόνιστο σώμα που μοιάζει με τέρας» αποτύπωσε την ασυνήθιστη ομοσπονδιακή-συνομοσπονδιακή αρχιτεκτονική που αναδύθηκε. Όμως λειτουργούσε — και κρατήθηκε ενωμένη ενάμιση αιώνα ακόμη."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1683,
      era: {
        en: "Siege of Vienna",
        el: "Πολιορκία της Βιέννης"
      },
      events: [
        {
          title: {
            en: "The Ottomans turned back at Vienna",
            el: "Οι Οθωμανοί τρέπονται σε φυγή στη Βιέννη"
          },
          description: {
            en: "On 12 September, the imperial relief army under Charles V of Lorraine and the Polish king Jan Sobieski sweeps down from the Kahlenberg and breaks the Ottoman siege of Vienna. Within fifteen years the Habsburgs will reconquer Hungary; their centre of gravity decisively shifts to the Danube.",
            el: "Στις 12 Σεπτεμβρίου, ο αυτοκρατορικός στρατός αρωγής υπό τον Κάρολο Ε΄ της Λωρραίνης και τον Πολωνό βασιλιά Γιαν Σομπιέσκι σαρώνει από το Κάλενμπεργκ και σπάει την οθωμανική πολιορκία της Βιέννης. Μέσα σε δεκαπέντε χρόνια οι Αψβούργοι θα ξανακερδίσουν την Ουγγαρία· το κέντρο βαρύτητάς τους μετατοπίζεται αποφασιστικά στον Δούναβη."
          },
          extendedDescription: {
            en: "The Polish-Lithuanian winged hussars who charged down the Kahlenberg slope were the largest cavalry attack in early modern history. Sobieski wrote to his queen the next day: 'We came, we saw, God conquered.' The Habsburg counter-offensive that followed — Buda recovered 1686, Belgrade 1688 — turned Austria from a beleaguered German power into a multinational Danubian monarchy. Imperial victory also rebalanced Habsburg interests: from Charles V's Spanish-Atlantic empire to Leopold I's eastern, Catholic, baroque empire centred on Vienna. The new style had its visible embodiment in the Karlskirche and the great palaces of the Belvedere and Schönbrunn.",
            el: "Οι πολωνο-λιθουανοί φτερωτοί ουσάροι που εφόρμησαν από την πλαγιά του Κάλενμπεργκ ήταν η μεγαλύτερη επίθεση ιππικού στην πρώιμη νεωτερική ιστορία. Ο Σομπιέσκι έγραψε στη βασίλισσά του την επομένη: «Ήρθαμε, είδαμε, ο Θεός νίκησε». Η αψβουργική αντεπίθεση που ακολούθησε — η Βούδα ανακτήθηκε το 1686, το Βελιγράδι το 1688 — μετέτρεψε την Αυστρία από μια πολιορκημένη γερμανική δύναμη σε πολυεθνική δουναβική μοναρχία. Η αυτοκρατορική νίκη επανεξισορρόπησε επίσης τα αψβουργικά συμφέροντα: από την ισπανο-ατλαντική αυτοκρατορία του Καρόλου Ε΄ στην ανατολική, καθολική, μπαρόκ αυτοκρατορία του Λεοπόλδου Α΄ με κέντρο τη Βιέννη. Το νέο ύφος είχε ορατή ενσάρκωση στο Karlskirche και στα μεγάλα ανάκτορα του Belvedere και του Schönbrunn."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1701,
      era: {
        en: "Rise of Prussia",
        el: "Άνοδος της Πρωσίας"
      },
      events: [
        {
          title: {
            en: "Elector Frederick III becomes King in Prussia",
            el: "Ο Εκλέκτορας Φρειδερίκος Γ΄ γίνεται Βασιλιάς εν Πρωσία"
          },
          description: {
            en: "At Königsberg, with imperial permission, the elector of Brandenburg crowns himself King in Prussia (Frederick I). A Hohenzollern royal title outside the Empire gives the Brandenburg-Prussian state a footing equal to the Austrian Habsburgs in European protocol.",
            el: "Στο Κένιγκσμπεργκ, με αυτοκρατορική άδεια, ο εκλέκτορας του Βρανδεμβούργου στέφει εαυτόν Βασιλέα εν Πρωσία (Φρειδερίκος Α΄). Ένας Χοεντσόλλερν βασιλικός τίτλος εκτός της Αυτοκρατορίας δίνει στο βρανδεμβουργικό-πρωσικό κράτος ισότιμη θέση με τους Αυστριακούς Αψβούργους στο ευρωπαϊκό πρωτόκολλο."
          },
          extendedDescription: {
            en: "The Duchy of Prussia, around Königsberg in the Baltic, lay outside the Empire's frontiers — and so its elevation to a kingdom did not violate the imperial constitution, which permitted only one Latin Christian king (the king of Bohemia, who was an Elector). Within two generations, under the Soldier-King Frederick William I and his son Frederick the Great, Prussia would become the disciplined military power that, between 1740 and 1763, would seize Silesia from Austria and rise to great-power rank. The dualism between Austria and Prussia — Catholic and Protestant, Danubian and Baltic, dynastic and meritocratic — would now define German politics down to Bismarck's wars of unification.",
            el: "Το Δουκάτο της Πρωσίας, γύρω από το Κένιγκσμπεργκ στη Βαλτική, βρισκόταν εκτός των συνόρων της Αυτοκρατορίας — και έτσι η ανύψωσή του σε βασίλειο δεν παραβίαζε το αυτοκρατορικό σύνταγμα, που επέτρεπε μόνο έναν λατινικό χριστιανό βασιλιά (τον βασιλιά της Βοημίας, που ήταν Εκλέκτορας). Μέσα σε δύο γενιές, υπό τον Στρατιώτη-Βασιλιά Φρειδερίκο Γουλιέλμο Α΄ και τον γιο του Φρειδερίκο τον Μέγα, η Πρωσία θα γινόταν η πειθαρχημένη στρατιωτική δύναμη που, μεταξύ 1740 και 1763, θα άρπαζε τη Σιλεσία από την Αυστρία και θα ανέβαινε στην τάξη των μεγάλων δυνάμεων. Ο δυϊσμός μεταξύ Αυστρίας και Πρωσίας — καθολική και προτεσταντική, δουναβική και βαλτική, δυναστική και αξιοκρατική — θα όριζε πλέον τη γερμανική πολιτική μέχρι τους πολέμους ενοποίησης του Μπίσμαρκ."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1740,
      era: {
        en: "Austrian Succession",
        el: "Διαδοχή της Αυστρίας"
      },
      events: [
        {
          title: {
            en: "Maria Theresa and Frederick the Great",
            el: "Μαρία Θηρεσία και Φρειδερίκος ο Μέγας"
          },
          description: {
            en: "On the death of Charles VI, his daughter Maria Theresa inherits the Habsburg lands by the Pragmatic Sanction; in the same year Frederick II succeeds his father in Prussia. Within months, Frederick invades Silesia. The War of the Austrian Succession (1740-48) and then the Seven Years' War (1756-63) transform Prussia into a great power at Austria's expense.",
            el: "Με τον θάνατο του Καρόλου ΣΤ΄, η κόρη του Μαρία Θηρεσία κληρονομεί τα αψβουργικά εδάφη με την Πραγματική Κύρωση· τον ίδιο χρόνο ο Φρειδερίκος Β΄ διαδέχεται τον πατέρα του στην Πρωσία. Μέσα σε μήνες, ο Φρειδερίκος εισβάλλει στη Σιλεσία. Ο Πόλεμος της Αυστριακής Διαδοχής (1740-48) και κατόπιν ο Επταετής Πόλεμος (1756-63) μεταμορφώνουν την Πρωσία σε μεγάλη δύναμη εις βάρος της Αυστρίας."
          },
          extendedDescription: {
            en: "Maria Theresa would lose Silesia but secure the imperial title for her husband Francis I in 1745, after a brief Wittelsbach interlude under Charles VII. Her reforms — a standing army, a centralised treasury, mandatory primary education in 1774, the abolition of torture, an ambitious cadastre — modernised the Habsburg monarchy as no medieval emperor had. Frederick the Great, meanwhile, would administer Prussia from Sanssouci with French Enlightenment in his correspondence and Spartan discipline in his army. Both rulers exemplified the new model of enlightened absolutism that would dominate eighteenth-century German political theory.",
            el: "Η Μαρία Θηρεσία θα έχανε τη Σιλεσία αλλά θα εξασφάλιζε τον αυτοκρατορικό τίτλο για τον σύζυγό της Φραγκίσκο Α΄ το 1745, έπειτα από σύντομη ενδιάμεση Wittelsbach περίοδο υπό τον Κάρολο Ζ΄. Οι μεταρρυθμίσεις της — τακτικός στρατός, συγκεντρωτικό ταμείο, υποχρεωτική στοιχειώδης εκπαίδευση το 1774, κατάργηση των βασανιστηρίων, φιλόδοξο κτηματολόγιο — εκσυγχρόνισαν την αψβουργική μοναρχία όσο κανένας μεσαιωνικός αυτοκράτορας. Ο Φρειδερίκος ο Μέγας, εν τω μεταξύ, θα διοικούσε την Πρωσία από το Sanssouci με τον γαλλικό Διαφωτισμό στην αλληλογραφία του και σπαρτιατική πειθαρχία στον στρατό του. Και οι δύο ηγεμόνες εκπροσώπησαν το νέο μοντέλο του φωτισμένου απολυταρχισμού που θα κυριαρχούσε στη γερμανική πολιτική θεωρία του δέκατου ογδόου αιώνα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1781,
      era: {
        en: "Josephine Reforms",
        el: "Ιωσηφινές Μεταρρυθμίσεις"
      },
      events: [
        {
          title: {
            en: "Joseph II's Patent of Toleration",
            el: "Διάταγμα Ανεξιθρησκίας του Ιωσήφ Β΄"
          },
          description: {
            en: "The new emperor Joseph II, son of Maria Theresa, issues the Patent of Toleration, granting freedom of worship to Lutherans, Calvinists, and Orthodox Christians across the Habsburg lands; the next year he abolishes serfdom and dissolves the contemplative monastic orders. The age of Enlightenment reaches the imperial throne.",
            el: "Ο νέος αυτοκράτορας Ιωσήφ Β΄, γιος της Μαρίας Θηρεσίας, εκδίδει το Διάταγμα Ανεξιθρησκίας, παραχωρώντας ελευθερία λατρείας σε Λουθηρανούς, Καλβινιστές και Ορθόδοξους Χριστιανούς σε όλα τα αψβουργικά εδάφη· τον επόμενο χρόνο καταργεί τη δουλοπαροικία και διαλύει τα στοχαστικά μοναχικά τάγματα. Η εποχή του Διαφωτισμού φτάνει στον αυτοκρατορικό θρόνο."
          },
          extendedDescription: {
            en: "Joseph II personifies what Voltaire and Kant called enlightened absolutism: reform from above by a philosopher-king. In ten years on the throne he issued more than six thousand decrees — equal civil status for Jews, abolition of capital punishment, German as the bureaucratic language, hospital and asylum reform. His radicalism, however, sparked rebellions in the Austrian Netherlands and Hungary; his successor Leopold II had to walk back the most ambitious measures. Joseph's epitaph, which he wrote himself, expressed his disillusion: 'Here lies a prince whose intentions were pure, but who had the misfortune to see all his projects shipwrecked.'",
            el: "Ο Ιωσήφ Β΄ προσωποποιεί αυτό που ο Βολταίρος και ο Καντ αποκαλούσαν φωτισμένο απολυταρχισμό: μεταρρύθμιση από τα πάνω από έναν φιλόσοφο-βασιλιά. Σε δέκα χρόνια στον θρόνο εξέδωσε περισσότερα από έξι χιλιάδες διατάγματα — ίσο αστικό καθεστώς για τους Εβραίους, κατάργηση της θανατικής ποινής, γερμανικά ως γραφειοκρατική γλώσσα, μεταρρύθμιση νοσοκομείων και ασύλων. Ο ριζοσπαστισμός του, ωστόσο, πυροδότησε εξεγέρσεις στις Αυστριακές Κάτω Χώρες και στην Ουγγαρία· ο διάδοχός του Λεοπόλδος Β΄ έπρεπε να ακυρώσει τα πιο φιλόδοξα μέτρα. Ο επιτάφιος του Ιωσήφ, που έγραψε ο ίδιος, εξέφραζε την απογοήτευσή του: «Εδώ κείται ένας πρίγκιπας του οποίου οι προθέσεις ήταν αγνές, αλλά είχε την ατυχία να δει όλα τα σχέδιά του να ναυαγούν»."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1803,
      era: {
        en: "Reichsdeputationshauptschluss",
        el: "Reichsdeputationshauptschluss"
      },
      events: [
        {
          title: {
            en: "The Final Recess secularises the ecclesiastical states",
            el: "Η Τελική Απόφαση εκκοσμικεύει τα εκκλησιαστικά κράτη"
          },
          description: {
            en: "Under Napoleonic pressure after the Peace of Lunéville (1801), the Imperial Diet's Reichsdeputationshauptschluss abolishes nearly all the ecclesiastical states and free imperial cities of the Empire. Some 112 territories vanish from the map; the surviving secular states, above all Bavaria, Baden, and Württemberg, are vastly enlarged.",
            el: "Υπό ναπολεόντεια πίεση μετά την Ειρήνη του Lunéville (1801), η Reichsdeputationshauptschluss της Αυτοκρατορικής Δίαιτας καταργεί σχεδόν όλα τα εκκλησιαστικά κράτη και τις ελεύθερες αυτοκρατορικές πόλεις της Αυτοκρατορίας. Περίπου 112 επικράτειες εξαφανίζονται από τον χάρτη· τα επιζώντα κοσμικά κράτη, πάνω από όλα η Βαυαρία, η Βάδη και η Βυρτεμβέργη, διευρύνονται τεράστια."
          },
          extendedDescription: {
            en: "The Recess was the deathblow to the constitutional pluralism of the medieval Empire. With the prince-bishoprics and ecclesiastical electorates gone, the Catholic-Protestant confessional balance was overthrown; with the imperial cities reduced to a handful, the older free-city culture of merchant republics — Augsburg, Frankfurt, Nuremberg — was extinguished. The territorial consolidations of 1803 created the framework of the German middle states that would eventually become a sovereign element in the Confederation of the Rhine and, after 1815, in the German Confederation. Hegel, watching from Jena, called it 'the end of the Empire as a great event' — and welcomed it as a clearing of dead wood.",
            el: "Η Τελική Απόφαση ήταν το θανάσιμο πλήγμα στον συνταγματικό πλουραλισμό της μεσαιωνικής Αυτοκρατορίας. Με τις πριγκιπεπισκοπές και τα εκκλησιαστικά εκλέκτορα να έχουν φύγει, η καθολικό-προτεσταντική ομολογιακή ισορροπία ανατράπηκε· με τις αυτοκρατορικές πόλεις να περιορίζονται σε μια χούφτα, η παλαιότερη ελευθερόπολη κουλτούρα των εμπορικών δημοκρατιών — Άουγκσμπουργκ, Φραγκφούρτη, Νυρεμβέργη — εξαλείφθηκε. Οι εδαφικές συγχωνεύσεις του 1803 δημιούργησαν το πλαίσιο των γερμανικών μεσαίων κρατών που τελικά θα γίνονταν κυρίαρχα στοιχεία στη Συνομοσπονδία του Ρήνου και, μετά το 1815, στη Γερμανική Συνομοσπονδία. Ο Χέγκελ, παρακολουθώντας από τη Γένα, την αποκάλεσε «το τέλος της Αυτοκρατορίας ως μεγάλο γεγονός» — και το χαιρέτισε ως εκκαθάριση νεκρού ξύλου."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1806,
      era: {
        en: "End of the Empire",
        el: "Τέλος της Αυτοκρατορίας"
      },
      events: [
        {
          title: {
            en: "Francis II dissolves the Holy Roman Empire",
            el: "Ο Φραγκίσκος Β΄ διαλύει την Αγία Ρωμαϊκή Αυτοκρατορία"
          },
          description: {
            en: "On 6 August, after Napoleon's victory at Austerlitz and the formation of the Confederation of the Rhine, the emperor Francis II — fearing that Napoleon would seize the imperial title himself — abdicates the imperial crown and dissolves the Empire. One thousand and six years after Charlemagne's coronation, the Holy Roman Empire is no more.",
            el: "Στις 6 Αυγούστου, μετά τη νίκη του Ναπολέοντα στο Άουστερλιτς και τον σχηματισμό της Συνομοσπονδίας του Ρήνου, ο αυτοκράτορας Φραγκίσκος Β΄ — φοβούμενος ότι ο Ναπολέων θα οικειοποιούνταν τον αυτοκρατορικό τίτλο ο ίδιος — παραιτείται από το αυτοκρατορικό στέμμα και διαλύει την Αυτοκρατορία. Χίλια και έξι χρόνια μετά τη στέψη του Καρλομάγνου, η Αγία Ρωμαϊκή Αυτοκρατορία δεν υπάρχει πια."
          },
          extendedDescription: {
            en: "Francis had taken the precaution two years earlier of proclaiming himself hereditary emperor of Austria, so that the dynasty's imperial title would survive even if the elective Roman one did not. The act of 1806 also released the German princes from their oaths to the Empire — clearing the constitutional way for them to become full sovereign monarchs in a Napoleonic Europe. Goethe, hearing the news in a Frankfurt inn, noted that his hosts were arguing about who had won the day's coach race — the abolition of the millennial Reich elicited less comment than the local sport. The political vacuum left in Germany would be filled in 1815 by the German Confederation, then by Bismarck's North German Confederation in 1867, and finally by the second German Reich in 1871 — but the old, irregular, federal Empire of princes, prelates, and free cities was gone forever.",
            el: "Ο Φραγκίσκος είχε λάβει το μέτρο δύο χρόνια νωρίτερα να αυτοανακηρυχθεί κληρονομικός αυτοκράτορας της Αυστρίας, ώστε ο αυτοκρατορικός τίτλος της δυναστείας να επιβιώσει ακόμη και αν ο αιρετός ρωμαϊκός δεν επιβίωνε. Η πράξη του 1806 απέλυσε επίσης τους γερμανούς ηγεμόνες από τους όρκους τους προς την Αυτοκρατορία — καθαρίζοντας τον συνταγματικό δρόμο για να γίνουν πλήρεις κυρίαρχοι μονάρχες σε μια ναπολεόντεια Ευρώπη. Ο Γκαίτε, ακούγοντας τα νέα σε ένα πανδοχείο της Φραγκφούρτης, σημείωσε ότι οι οικοδεσπότες του συζητούσαν για το ποιος είχε κερδίσει την αμαξιοδρομία της ημέρας — η κατάργηση του χιλιόχρονου Reich προκάλεσε λιγότερα σχόλια από το τοπικό άθλημα. Το πολιτικό κενό που άφησε η Γερμανία θα γέμιζε το 1815 από τη Γερμανική Συνομοσπονδία, κατόπιν από τη Βορειογερμανική Συνομοσπονδία του Μπίσμαρκ το 1867, και τέλος από το δεύτερο γερμανικό Reich το 1871 — αλλά η παλιά, ακανόνιστη, ομοσπονδιακή Αυτοκρατορία των ηγεμόνων, των ιεραρχών και των ελεύθερων πόλεων είχε χαθεί για πάντα."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
