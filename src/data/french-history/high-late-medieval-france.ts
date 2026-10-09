/** High & Late Middle Ages — Ώριμος & Ύστερος Μεσαίωνας · French History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const HIGH_LATE_MEDIEVAL_FRANCE = {
  id: "high-late-medieval-france" as const,
  label: {
    en: "High & Late Middle Ages",
    el: "Ώριμος & Ύστερος Μεσαίωνας"
  },
  supertitle: {
    en: "Regnum Franciae",
    el: "Βασίλειον της Γαλλίας"
  },
  title: {
    en: "High & Late Medieval France",
    el: "Η Ώριμη & Ύστερη Μεσαιωνική Γαλλία"
  },
  subtitle: {
    en: "From the early Capetians and the Norman conquest of England through the crusades, Bouvines and the Albigensian war, the age of Saint Louis and Philip the Fair, the Avignon papacy, the Hundred Years War, the Black Death and Joan of Arc, to Louis XI's consolidation and the eve of the Italian Wars. Slide across the centuries to read the major events that made medieval France.",
    el: "Από τους πρώιμους Καπετιανούς και τη νορμανδική κατάκτηση της Αγγλίας, μέσα από τις Σταυροφορίες, τη Μάχη του Μπουβίν και την Αλβιγηνική σταυροφορία, την εποχή του Αγίου Λουδοβίκου και του Φιλίππου του Ωραίου, την παπικότητα της Αβινιόν, τον Εκατονταετή Πόλεμο, τον Μαύρο Θάνατο και την Ιωάννα της Λωραίνης, έως τη συνένωση του Λουδοβίκου ΙΑ΄ και τις παραμονές των Ιταλικών Πολέμων. Μετακινηθείτε ανάμεσα στους αιώνες για να διαβάσετε τα γεγονότα που έπλασαν τη μεσαιωνική Γαλλία."
  },
  menuDescription: {
    en: "The Capetians, the crusades, Joan of Arc, and the long climb out of the Hundred Years' War.",
    el: "Οι Καπετιανοί, οι σταυροφορίες, η Ιωάννα της Λωραίνης κι η μακρά έξοδος από τον Εκατονταετή Πόλεμο."
  },
  footerLabel: {
    en: "High & Late Medieval France · 10th–15th centuries CE",
    el: "Ώριμη & Ύστερη Μεσαιωνική Γαλλία · 10ος–15ος αιώνας μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "High & Late Middle Ages",
    el: "Ώριμος & Ύστερος Μεσαίωνας"
  },
  theme: THEMES.rose,
  timeline: [
    {
      year: 996,
      era: {
        en: "Early Capetian France",
        el: "Πρώιμη Καπετιανή Γαλλία"
      },
      events: [
        {
          title: {
            en: "Robert the Pious and the Peace of God",
            el: "Ο Ροβέρτος ο Ευσεβής και η Ειρήνη του Θεού"
          },
          description: {
            en: "Hugh Capet dies and is succeeded by his son Robert the Pious. From Aquitaine the bishops are already proclaiming the Pax Dei — sworn assemblies of arms-bearers pledging not to attack the unarmed, the church, the merchant, and the peasant.",
            el: "Ο Ούγος Καπετίνγκος πεθαίνει και τον διαδέχεται ο γιος του Ροβέρτος ο Ευσεβής. Στην Ακυτανία οι επίσκοποι ήδη διακηρύσσουν την Pax Dei — ένορκες συνελεύσεις ενόπλων που υπόσχονται να μην προσβάλλουν τους άοπλους, την Εκκλησία, τον έμπορο και τον αγρότη."
          },
          extendedDescription: {
            en: "The councils of Charroux (989) and Le Puy (994) had already set the form. By the 1020s the movement would be reinforced by the Truce of God, prohibiting fighting on the days of Christ's passion and the great feasts. In a kingdom where the king's writ ran little beyond the Île-de-France, the Church became the chief framework of public order.",
            el: "Οι σύνοδοι του Charroux (989) και του Le Puy (994) είχαν ήδη θέσει τη μορφή. Μέχρι τη δεκαετία του 1020 το κίνημα θα ενισχυθεί από την Treuga Dei, που απαγορεύει τη μάχη τις ημέρες του πάθους του Χριστού και των μεγάλων εορτών. Σε βασίλειο όπου η εξουσία του βασιλιά έφτανε ελάχιστα πέρα από την Île-de-France, η Εκκλησία γίνεται το κύριο πλαίσιο της δημόσιας τάξης."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1066,
      era: {
        en: "Normandy Conquers England",
        el: "Η Νορμανδία Κατακτά την Αγγλία"
      },
      events: [
        {
          title: {
            en: "Hastings and the Norman empire",
            el: "Το Χάστινγκς και η Νορμανδική αυτοκρατορία"
          },
          description: {
            en: "Duke William II of Normandy crosses the Channel, kills King Harold at Hastings, and is crowned king of England at Westminster on Christmas Day. A vassal of the king of France now wears a royal crown of his own.",
            el: "Ο δούκας Γουλιέλμος Β΄ της Νορμανδίας διασχίζει τη Μάγχη, σκοτώνει τον βασιλιά Χάρολντ στο Χάστινγκς και στέφεται βασιλιάς της Αγγλίας στο Γουέστμινστερ τα Χριστούγεννα. Ένας υποτελής του βασιλιά της Γαλλίας φοράει πλέον δικό του βασιλικό στέμμα."
          },
          extendedDescription: {
            en: "The Bayeux Tapestry, embroidered within a generation, would tell the story in seventy metres of linen. The conquest knitted England to the continental French aristocracy for three centuries, made Norman French the language of English government, and created the paradox that would generate the Hundred Years War: a king in Paris with a vassal in London who was also a king.",
            el: "Η Ταπισερί του Μπαγιέ, κεντημένη μέσα σε μία γενιά, θα διηγηθεί την ιστορία σε εβδομήντα μέτρα λινό. Η κατάκτηση συνέδεσε την Αγγλία με την ηπειρωτική γαλλική αριστοκρατία για τρεις αιώνες, έκανε τη νορμανδική γαλλική γλώσσα της αγγλικής διοίκησης και δημιούργησε το παράδοξο που θα γεννήσει τον Εκατονταετή Πόλεμο: έναν βασιλιά στο Παρίσι με υποτελή στο Λονδίνο που ήταν και ο ίδιος βασιλιάς."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1095,
      era: {
        en: "Calling of the First Crusade",
        el: "Κήρυγμα της Α΄ Σταυροφορίας"
      },
      events: [
        {
          title: {
            en: "Urban II preaches at Clermont",
            el: "Ο Ουρβανός Β΄ κηρύσσει στο Κλερμόν"
          },
          description: {
            en: "At a great council at Clermont in Auvergne, Pope Urban II — himself a Frenchman from Châtillon-sur-Marne — summons the warriors of the Latin West to recover Jerusalem from the Seljuks. The crowd shouts back Deus vult, 'God wills it'.",
            el: "Σε μεγάλη σύνοδο στο Κλερμόν στην Ωβέρνη, ο πάπας Ουρβανός Β΄ — Γάλλος από το Σατιγιόν-σιρ-Μαρν — καλεί τους πολεμιστές της Λατινικής Δύσης να ανακτήσουν την Ιερουσαλήμ από τους Σελτζούκους. Το πλήθος απαντά Deus vult, «ο Θεός το θέλει»."
          },
          extendedDescription: {
            en: "The First Crusade was overwhelmingly a French enterprise: Godfrey of Bouillon, Raymond of Toulouse, Bohemond of Taranto (Norman-French of southern Italy), Robert of Normandy, Robert of Flanders. By 1099 they had taken Jerusalem in a notorious massacre and established four Crusader states; from the Saracens' point of view, the crusaders were simply al-Faranj — the Franks. France would lead Christian arms in the Levant for two centuries.",
            el: "Η Α΄ Σταυροφορία ήταν συντριπτικά γαλλικό εγχείρημα: Γοδεφρείδος του Μπουιγιόν, Ραϊμόνδος της Τουλούζης, Βοημούνδος του Τάραντα (Νορμανδογάλλος της νότιας Ιταλίας), Ροβέρτος της Νορμανδίας, Ροβέρτος της Φλάνδρας. Μέχρι το 1099 είχαν καταλάβει την Ιερουσαλήμ σε γνωστή σφαγή και είχαν ιδρύσει τέσσερα σταυροφορικά κράτη· από τη σκοπιά των Σαρακηνών, οι σταυροφόροι ήταν απλώς al-Faranj — οι Φράγκοι. Η Γαλλία θα ηγηθεί των χριστιανικών όπλων στη Λεβάντη για δύο αιώνες."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1108,
      era: {
        en: "Consolidation of Royal Power",
        el: "Παγίωση της Βασιλικής Εξουσίας"
      },
      events: [
        {
          title: {
            en: "Louis VI the Fat tames the Île-de-France",
            el: "Ο Λουδοβίκος ΣΤ΄ ο Παχύς δαμάζει την Île-de-France"
          },
          description: {
            en: "Louis VI inherits the throne and spends a generation in the saddle, breaking the petty castellans of the royal demesne — Hugues du Puiset, Thomas de Marle — and making the king's peace mean something between the Seine and the Loire.",
            el: "Ο Λουδοβίκος ΣΤ΄ κληρονομεί τον θρόνο και περνά μια γενιά πάνω σε άλογο, συντρίβοντας τους μικρούς castellani της βασιλικής γαιοκτησίας — Hugues du Puiset, Thomas de Marle — και κάνοντας την ειρήνη του βασιλιά να έχει νόημα μεταξύ Σηκουάνα και Λίγηρα."
          },
          extendedDescription: {
            en: "His chief adviser Abbot Suger of Saint-Denis recorded the reign in a Vita Ludovici Grossi that is also a manifesto of royal sacrality. Suger's reconstruction of the abbey-church of Saint-Denis, begun in 1135 and dedicated in 1144, gave the West its first Gothic building — and a royal mausoleum to match.",
            el: "Ο κύριος σύμβουλός του, ο ηγούμενος Σουζέ του Σαιν-Ντενί, κατέγραψε τη βασιλεία σε Vita Ludovici Grossi που είναι και μανιφέστο βασιλικής ιερότητας. Η ανοικοδόμηση του αββαείου του Σαιν-Ντενί από τον Σουζέ, που άρχισε το 1135 και εγκαινιάστηκε το 1144, έδωσε στη Δύση το πρώτο της γοτθικό κτίριο — και βασιλικό μαυσωλείο αντάξιό του."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1152,
      era: {
        en: "Rise of the Angevin Empire",
        el: "Άνοδος της Πλανταγενετικής Αυτοκρατορίας"
      },
      events: [
        {
          title: {
            en: "Eleanor of Aquitaine weds Henry of Anjou",
            el: "Η Ελεωνόρα της Ακυτανίας παντρεύεται τον Ερρίκο της Ανζού"
          },
          description: {
            en: "Eight weeks after the annulment of her marriage to Louis VII, Eleanor — duchess of Aquitaine and Poitiers — marries the young Henry Plantagenet. Two years later he becomes Henry II of England. From Hadrian's Wall to the Pyrenees, half of France now belongs to a single foreign king.",
            el: "Οκτώ εβδομάδες μετά την ακύρωση του γάμου της με τον Λουδοβίκο Ζ΄, η Ελεωνόρα — δούκισσα Ακυτανίας και Πουατιέ — παντρεύεται τον νεαρό Ερρίκο Πλανταγενέτη. Δύο χρόνια αργότερα γίνεται Ερρίκος Β΄ της Αγγλίας. Από το Τείχος του Αδριανού ως τα Πυρηναία, η μισή Γαλλία ανήκει πλέον σε έναν ξένο βασιλιά."
          },
          extendedDescription: {
            en: "Eleanor had accompanied Louis VII on the Second Crusade, and their marriage was annulled on grounds of kinship after producing two daughters but no son. Granddaughter of William IX, the first known troubadour, she was a great patron of courtly poetry, and she became the mother of two English kings, Richard the Lionheart and John. She outlived nearly all her children and died around the age of eighty in 1204 at the abbey of Fontevraud, where her tomb effigy still lies beside Henry's.",
            el: "Η Ελεονώρα είχε συνοδεύσει τον Λουδοβίκο Ζ΄ στη Β΄ Σταυροφορία, και ο γάμος τους ακυρώθηκε λόγω συγγένειας, αφού απέκτησαν δύο κόρες αλλά κανέναν γιο. Εγγονή του Γουλιέλμου Θ΄, του πρώτου γνωστού τροβαδούρου, ήταν μεγάλη προστάτιδα της αυλικής ποίησης και έγινε μητέρα δύο βασιλέων της Αγγλίας, του Ριχάρδου του Λεοντόκαρδου και του Ιωάννη. Έζησε περισσότερο από σχεδόν όλα τα παιδιά της και πέθανε σε ηλικία περίπου ογδόντα ετών το 1204 στο αβαείο του Φοντεβρό, όπου το ταφικό της ομοίωμα βρίσκεται ακόμη δίπλα σε εκείνο του Ερρίκου."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1204,
      era: {
        en: "Conquest of Normandy",
        el: "Κατάκτηση της Νορμανδίας"
      },
      events: [
        {
          title: {
            en: "Philip Augustus takes Château Gaillard and Normandy",
            el: "Ο Φίλιππος Β΄ ο Αύγουστος καταλαμβάνει το Σατώ Γκαϊγιάρ και τη Νορμανδία"
          },
          description: {
            en: "After a six-month siege Philip II Augustus takes Richard the Lionheart's great fortress on the Seine and overruns Normandy from the weak John Lackland. By 1206 Anjou, Maine, Touraine, and Poitou are also in the royal hand. The Angevin empire is broken on its French side.",
            el: "Μετά από εξάμηνη πολιορκία ο Φίλιππος Β΄ ο Αύγουστος καταλαμβάνει το μεγάλο φρούριο του Ριχάρδου του Λεοντόκαρδου στον Σηκουάνα και κατακυριεύει τη Νορμανδία από τον αδύναμο Ιωάννη Ακτήμονα. Μέχρι το 1206 το Ανζού, το Μεν, η Τουρένη και η Πουατού βρίσκονται επίσης στο βασιλικό χέρι. Η Πλανταγενετική αυτοκρατορία συντρίβεται στη γαλλική της πλευρά."
          },
          extendedDescription: {
            en: "Richard had built Château Gaillard in barely two years, calling it his 'saucy castle' and boasting that he could hold it even if its walls were made of butter. According to a chronicler, the attackers finally got into its inner defences through a latrine chute. Rouen surrendered in June 1204, and Philip, who had begun styling himself 'King of France' rather than 'King of the Franks', roughly quadrupled the lands under direct royal rule.",
            el: "Ο Ριχάρδος είχε χτίσει το Σατό Γκαγιάρ σε μόλις δύο χρόνια, αποκαλώντας το «αυθάδες κάστρο» του και καυχώμενος ότι θα μπορούσε να το κρατήσει ακόμη κι αν τα τείχη του ήταν φτιαγμένα από βούτυρο. Σύμφωνα με έναν χρονογράφο, οι επιτιθέμενοι μπήκαν τελικά στις εσωτερικές οχυρώσεις του μέσα από έναν αγωγό αποχωρητηρίου. Η Ρουέν παραδόθηκε τον Ιούνιο του 1204, και ο Φίλιππος, που είχε αρχίσει να αυτοαποκαλείται «Βασιλιάς της Γαλλίας» αντί για «Βασιλιάς των Φράγκων», σχεδόν τετραπλασίασε τα εδάφη υπό άμεση βασιλική εξουσία."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1209,
      era: {
        en: "Albigensian Crusade",
        el: "Αλβιγηνική Σταυροφορία"
      },
      events: [
        {
          title: {
            en: "The crusade against the Cathars",
            el: "Η σταυροφορία κατά των Καθαρών"
          },
          description: {
            en: "Innocent III proclaims a crusade against the Cathar heretics of Languedoc. Simon de Montfort leads northern French knights south; Béziers is stormed in July with the cry attributed to the legate Arnaud Amalric — 'kill them all, God will know his own'.",
            el: "Ο Ιννοκέντιος Γ΄ κηρύσσει σταυροφορία κατά των αιρετικών Καθαρών της Λανγκντόκ. Ο Σιμών ντε Μονφόρ οδηγεί βόρειους Γάλλους ιππότες προς τον νότο· το Μπεζιέ καταλαμβάνεται τον Ιούλιο με την κραυγή που αποδίδεται στον λεγάτο Αρνώ Αμαλρίκ — «σκοτώστε τους όλους, ο Θεός θα γνωρίσει τους δικούς του»."
          },
          extendedDescription: {
            en: "Twenty years of war and the Treaty of Paris (1229) would bring the great County of Toulouse under Capetian suzerainty and prepare its absorption into the royal demesne. The crusade also gave the Church the inquisitorial procedure: papal inquisitors of heretical depravity, manned by the new Dominican order, would investigate the south for a generation. The Occitan civilisation of the troubadours was the cultural casualty.",
            el: "Είκοσι χρόνια πολέμου και η Συνθήκη του Παρισιού (1229) θα φέρουν τη μεγάλη Κομητεία της Τουλούζης υπό την επικυριαρχία των Καπετιάνων και θα προετοιμάσουν την ενσωμάτωσή της στη βασιλική γαιοκτησία. Η σταυροφορία έδωσε επίσης στην Εκκλησία την ιεροεξεταστική διαδικασία: παπικοί ιεροεξεταστές της αιρετικής διαστροφής, στελεχωμένοι από το νέο τάγμα των Δομινικανών, θα ανακρίνουν τον νότο για μία γενιά. Ο πολιτισμός των τροβαδούρων της Οκσιτανίας ήταν η πολιτιστική απώλεια."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1214,
      era: {
        en: "Triumph of the Capetians",
        el: "Θρίαμβος των Καπετιάνων"
      },
      events: [
        {
          title: {
            en: "Philip Augustus wins at Bouvines",
            el: "Ο Φίλιππος ο Αύγουστος νικά στο Μπουβίν"
          },
          description: {
            en: "On a July Sunday near Lille, Philip II crushes the coalition of John of England, the emperor Otto IV, and the count of Flanders. The defeat of Otto loses him the empire; the defeat of John makes Magna Carta inevitable in England. France is left the great power of the West.",
            el: "Μια κυριακή του Ιουλίου κοντά στη Λιλ, ο Φίλιππος Β΄ συντρίβει τον συνασπισμό του Ιωάννη της Αγγλίας, του αυτοκράτορα Όθωνα Δ΄ και του κόμη της Φλάνδρας. Η ήττα στερεί τον Όθωνα από την αυτοκρατορία· η ήττα του Ιωάννη καθιστά αναπόφευκτη τη Magna Carta στην Αγγλία. Η Γαλλία απομένει η μεγάλη δύναμη της Δύσης."
          },
          extendedDescription: {
            en: "In the thick of the fighting Philip was pulled from his horse and saved only by his armour and his knights. The count of Flanders was taken captive and paraded in chains to Paris, where students and townspeople celebrated for a week. The historian Georges Duby later made the battle the subject of a famous book, Le Dimanche de Bouvines, as a moment when a French national feeling first became visible.",
            el: "Στη δίνη της μάχης ο Φίλιππος ρίχτηκε από το άλογό του και σώθηκε μόνο χάρη στην πανοπλία του και στους ιππότες του. Ο κόμης της Φλάνδρας αιχμαλωτίστηκε και περιφέρθηκε αλυσοδεμένος ως το Παρίσι, όπου φοιτητές και κάτοικοι γιόρταζαν επί μία εβδομάδα. Ο ιστορικός Ζορζ Ντυμπύ έκανε αργότερα τη μάχη θέμα ενός διάσημου βιβλίου, «Η Κυριακή της Μπουβίν», ως στιγμή όπου ένα γαλλικό εθνικό αίσθημα έγινε για πρώτη φορά ορατό."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1248,
      era: {
        en: "Age of Saint Louis",
        el: "Εποχή του Αγίου Λουδοβίκου"
      },
      events: [
        {
          title: {
            en: "Louis IX and the Seventh Crusade",
            el: "Ο Λουδοβίκος Θ΄ και η Ζ΄ Σταυροφορία"
          },
          description: {
            en: "King Louis IX sails from his new port of Aigues-Mortes for Egypt. Two years later he is captured at Mansurah and ransomed for an immense sum. He spends four years in the Holy Land and brings back, in another moment, the Crown of Thorns — for which the Sainte-Chapelle is built in Paris.",
            el: "Ο βασιλιάς Λουδοβίκος Θ΄ αποπλέει από το νέο του λιμάνι, τις Aigues-Mortes, για την Αίγυπτο. Δύο χρόνια αργότερα συλλαμβάνεται στη Μανσούρα και απελευθερώνεται έναντι τεράστιου ποσού. Περνά τέσσερα χρόνια στους Αγίους Τόπους και φέρνει πίσω, σε άλλη στιγμή, το Ακάνθινο Στέφανο — για το οποίο χτίζεται η Sainte-Chapelle στο Παρίσι."
          },
          extendedDescription: {
            en: "His chronicler Jean de Joinville, his hagiographer the friar Geoffroy de Beaulieu, and his canonisation in 1297 made Saint Louis the model of Christian kingship for centuries. At home his enquêtes against royal officials, the parlement at Paris, the codification of customary law, and the gold écu — France's first stable gold coinage since antiquity — built the institutional shape of medieval French government.",
            el: "Ο χρονικογράφος του Ζαν ντε Ζουανβίλ, ο αγιογράφος του ο φραγκισκανός Ζοφρουά ντε Μπολιέ και η αγιοποίησή του το 1297 έκαναν τον Άγιο Λουδοβίκο πρότυπο της χριστιανικής βασιλείας για αιώνες. Στο εσωτερικό οι enquêtes του κατά των βασιλικών αξιωματούχων, το parlement στο Παρίσι, η κωδικοποίηση του εθιμικού δικαίου και το χρυσό écu — το πρώτο σταθερό χρυσό νόμισμα της Γαλλίας από την αρχαιότητα — οικοδόμησαν το θεσμικό σχήμα της μεσαιωνικής γαλλικής διακυβέρνησης."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1270,
      era: {
        en: "Death of Saint Louis",
        el: "Θάνατος του Αγίου Λουδοβίκου"
      },
      events: [
        {
          title: {
            en: "The king dies at Tunis",
            el: "Ο βασιλιάς πεθαίνει στην Τύνιδα"
          },
          description: {
            en: "On a second crusade, this time diverted to Tunis, Louis IX dies of dysentery on the Carthaginian dunes in August. His son Philip III brings home his bones in a long mournful procession through Italy and the Alps; the route would be marked by stone crosses called montjoies.",
            el: "Σε δεύτερη σταυροφορία, αυτή τη φορά εκτραπείσα προς την Τύνιδα, ο Λουδοβίκος Θ΄ πεθαίνει από δυσεντερία στις καρχηδονιακές αμμοθίνες τον Αύγουστο. Ο γιος του Φίλιππος Γ΄ φέρνει πίσω τα οστά του σε μακρά πένθιμη πομπή μέσα από την Ιταλία και τις Άλπεις· η διαδρομή θα σημαδευτεί με λίθινους σταυρούς που λέγονται montjoies."
          },
          extendedDescription: {
            en: "Louis's first crusade, to Egypt in 1248–54, had ended with his capture at Mansourah and a huge ransom. At home he was admired as a just ruler who heard petitions beneath an oak tree at Vincennes, forbade judicial duels and reformed royal officials. His friend Jean de Joinville wrote a vivid Life of Saint Louis, and in 1297 Pope Boniface VIII canonised him — the only French king to become a saint.",
            el: "Η πρώτη σταυροφορία του Λουδοβίκου, στην Αίγυπτο το 1248–54, είχε τελειώσει με την αιχμαλωσία του στη Μανσούρα και με τεράστια λύτρα. Στην πατρίδα τον θαύμαζαν ως δίκαιο ηγεμόνα που άκουγε αιτήματα κάτω από μια βελανιδιά στη Βενσέν, απαγόρευσε τις δικαστικές μονομαχίες και αναμόρφωσε τους βασιλικούς αξιωματούχους. Ο φίλος του Ζαν ντε Ζουανβίλ έγραψε έναν ζωντανό «Βίο του Αγίου Λουδοβίκου», και το 1297 ο πάπας Βονιφάτιος Η΄ τον ανακήρυξε άγιο — ο μόνος Γάλλος βασιλιάς που αγιοποιήθηκε."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1302,
      era: {
        en: "Philip the Fair and the Estates",
        el: "Ο Φίλιππος ο Ωραίος και τα Τάγματα"
      },
      events: [
        {
          title: {
            en: "First Estates General and the Battle of Courtrai",
            el: "Πρώτη Γενική Συνέλευση των Τάγματων και η Μάχη της Κορτράι"
          },
          description: {
            en: "Locked in struggle with Pope Boniface VIII over taxation of the clergy, Philip IV summons clergy, nobles, and townsmen to Notre-Dame — the first Estates General. The same year his army of knights is annihilated by the urban militias of Flanders at Courtrai, the 'Battle of the Golden Spurs'.",
            el: "Σε διαμάχη με τον πάπα Βονιφάτιο Η΄ για τη φορολογία του κλήρου, ο Φίλιππος Δ΄ συγκαλεί κλήρο, ευγενείς και αστούς στη Notre-Dame — η πρώτη Γενική Συνέλευση των Τάγματων. Την ίδια χρονιά ο στρατός ιπποτών του εκμηδενίζεται από τις αστικές πολιτοφυλακές της Φλάνδρας στην Κορτράι, τη «Μάχη των Χρυσών Σπιρουνιών»."
          },
          extendedDescription: {
            en: "A year later, royal officers under Guillaume de Nogaret would corner the eighty-six-year-old Boniface at Anagni and rough him up; the pope died of shock within weeks. The Church, broken, would soon move to Avignon. Philip's reign — austere, secretive, surrounded by Roman-trained lawyers — already shows the modern state in outline.",
            el: "Ένα χρόνο αργότερα, βασιλικοί αξιωματούχοι υπό τον Γκιγιόμ ντε Νογκαρέ θα παγιδεύσουν τον ογδονταεξάχρονο Βονιφάτιο στην Ανάνι και θα τον κακοποιήσουν· ο πάπας πέθανε από σοκ σε εβδομάδες. Η Εκκλησία, συντετριμμένη, θα μετακινηθεί σύντομα στην Αβινιόν. Η βασιλεία του Φιλίππου — αυστηρή, μυστική, περιτριγυρισμένη από νομικούς εκπαιδευμένους στο ρωμαϊκό δίκαιο — δείχνει ήδη το περίγραμμα του σύγχρονου κράτους."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1309,
      era: {
        en: "Avignon Papacy",
        el: "Παπικότητα της Αβινιόν"
      },
      events: [
        {
          title: {
            en: "The popes move to Avignon",
            el: "Οι πάπες μετακινούνται στην Αβινιόν"
          },
          description: {
            en: "Pope Clement V, a Gascon elected under French pressure, settles his curia at Avignon on the Rhône. For seventy years, until 1377, the seven popes who reign there will all be Frenchmen, and the papacy will be a virtual annex of the Valois court.",
            el: "Ο πάπας Κλήμης Ε΄, Γασκώνος εκλεγμένος υπό γαλλική πίεση, εγκαθιστά την curia του στην Αβινιόν στον Ροδανό. Επί εβδομήντα χρόνια, ως το 1377, οι επτά πάπες που θα βασιλεύσουν εκεί θα είναι όλοι Γάλλοι, και η παπικότητα θα είναι σχεδόν παράρτημα της αυλής των Βαλουά."
          },
          extendedDescription: {
            en: "The move followed Philip the Fair's humiliation of Pope Boniface VIII, who died in 1303 after the king's agents had seized him at Anagni; Clement V went on to help Philip destroy the Knights Templar. The popes built the vast Palace of the Popes and bought Avignon itself in 1348, while critics such as Petrarch denounced a 'Babylonian captivity' of the Church. Gregory XI returned to Rome in 1377, but the election that followed his death split the Church for decades, with rival popes in Rome and Avignon.",
            el: "Η μετακίνηση ακολούθησε την ταπείνωση του πάπα Βονιφατίου Η΄ από τον Φίλιππο τον Ωραίο· ο πάπας πέθανε το 1303, αφού πράκτορες του βασιλιά τον είχαν συλλάβει στο Ανάνι, και ο Κλήμης Ε΄ βοήθησε στη συνέχεια τον Φίλιππο να εξοντώσει τους Ναΐτες Ιππότες. Οι πάπες έχτισαν το τεράστιο Παλάτι των Παπών και αγόρασαν την ίδια την Αβινιόν το 1348, ενώ επικριτές όπως ο Πετράρχης κατήγγελλαν μια «βαβυλώνια αιχμαλωσία» της Εκκλησίας. Ο Γρηγόριος ΙΑ΄ επέστρεψε στη Ρώμη το 1377, αλλά η εκλογή που ακολούθησε τον θάνατό του δίχασε την Εκκλησία για δεκαετίες, με αντίπαλους πάπες στη Ρώμη και στην Αβινιόν."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1314,
      era: {
        en: "Suppression of the Templars",
        el: "Κατάλυση των Ναϊτών"
      },
      events: [
        {
          title: {
            en: "Jacques de Molay burns on the Île aux Juifs",
            el: "Ο Ζακ ντε Μολέ καίγεται στην Île aux Juifs"
          },
          description: {
            en: "After seven years of torture and confessions, Jacques de Molay, the last grand master of the Templars, is burned alive on a small Seine island opposite the royal palace. He is said to curse Philip and Clement to meet him before God's tribunal within the year. Both die within months.",
            el: "Μετά από επτά χρόνια βασανιστηρίων και ομολογιών, ο Ζακ ντε Μολέ, ο τελευταίος μέγας μαγίστρος των Ναϊτών, καίγεται ζωντανός σε μικρό νησί του Σηκουάνα απέναντι από το βασιλικό παλάτι. Λέγεται ότι καταριέται τον Φίλιππο και τον Κλήμη να τον συναντήσουν ενώπιον του δικαστηρίου του Θεού μέσα στον χρόνο. Και οι δύο πεθαίνουν σε μήνες."
          },
          extendedDescription: {
            en: "The order's vast wealth had financed the royal house since the Crusades; its destruction allowed Philip to clear his debts. The dramatic dissolution of the Templars, the suspicious deaths of all three of Philip's sons within fourteen years, and the contemporary scandal of the Tour de Nesle (1314) — in which the king's three daughters-in-law were accused of adultery — would convince the French of a curse on the senior Capetian line.",
            el: "Ο τεράστιος πλούτος του τάγματος είχε χρηματοδοτήσει τον βασιλικό οίκο από τις Σταυροφορίες· η καταστροφή του επέτρεψε στον Φίλιππο να εκκαθαρίσει τα χρέη του. Η δραματική διάλυση των Ναϊτών, οι ύποπτοι θάνατοι και των τριών γιων του Φιλίππου μέσα σε δεκατέσσερα χρόνια και το σύγχρονο σκάνδαλο του Πύργου της Νελ (1314) — όπου οι τρεις νύφες του βασιλιά κατηγορήθηκαν για μοιχεία — θα έπειθαν τους Γάλλους ότι μια κατάρα βάραινε την πρεσβύτερη γραμμή των Καπετιάνων."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1328,
      era: {
        en: "From Capetian to Valois",
        el: "Από τους Καπετιανούς στους Βαλουά"
      },
      events: [
        {
          title: {
            en: "Death of Charles IV and the Valois succession",
            el: "Θάνατος του Καρόλου Δ΄ και η διαδοχή των Βαλουά"
          },
          description: {
            en: "Charles IV, third son of Philip the Fair to reign and die without a male heir, leaves the throne open. The peers of France pass over the strongest claimant — Edward III of England, grandson of Philip through his mother Isabella — and crown Philip of Valois, the late king's first cousin. Salic law has been invented.",
            el: "Ο Κάρολος Δ΄, τρίτος γιος του Φιλίππου του Ωραίου που βασίλεψε και πέθανε χωρίς αρσενικό κληρονόμο, αφήνει τον θρόνο ανοιχτό. Οι πέρες της Γαλλίας προσπερνούν τον ισχυρότερο διεκδικητή — τον Εδουάρδο Γ΄ της Αγγλίας, εγγονό του Φιλίππου μέσω της μητέρας του Ισαβέλλας — και στέφουν τον Φίλιππο των Βαλουά, πρωτεξάδερφο του εκλιπόντος. Ο σαλικός νόμος έχει εφευρεθεί."
          },
          extendedDescription: {
            en: "A precedent had been set in 1316, when Louis X's daughter Jeanne was passed over for her uncles; in 1328 the magnates preferred a French-born prince to the young king of England. Edward III at first accepted the decision and did homage for his duchy of Guyenne. But when Philip VI confiscated Guyenne in 1337, Edward revived his claim to the French crown — the start of the Hundred Years' War. Jurists later justified the exclusion of women by appeal to the ancient Salic law of the Franks.",
            el: "Ένα προηγούμενο είχε δημιουργηθεί το 1316, όταν η κόρη του Λουδοβίκου Ι΄, Ιωάννα, παρακάμφθηκε υπέρ των θείων της· το 1328 οι μεγιστάνες προτίμησαν έναν γεννημένο στη Γαλλία πρίγκιπα από τον νεαρό βασιλιά της Αγγλίας. Ο Εδουάρδος Γ΄ αρχικά αποδέχτηκε την απόφαση και έδωσε όρκο υποτέλειας για το δουκάτο του της Γυιέν. Όμως όταν ο Φίλιππος ΣΤ΄ κατάσχεσε τη Γυιέν το 1337, ο Εδουάρδος αναβίωσε τη διεκδίκησή του στο γαλλικό στέμμα — η αρχή του Εκατονταετούς Πολέμου. Νομομαθείς δικαιολόγησαν αργότερα τον αποκλεισμό των γυναικών επικαλούμενοι τον αρχαίο Σαλικό νόμο των Φράγκων."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1346,
      era: {
        en: "The Hundred Years War",
        el: "Ο Εκατονταετής Πόλεμος"
      },
      events: [
        {
          title: {
            en: "Crécy and the English longbow",
            el: "Το Κρεσύ και το αγγλικό μακρύ τόξο"
          },
          description: {
            en: "Edward III's army, perhaps ten thousand strong, destroys the French chivalry on a slope near Crécy-en-Ponthieu. The longbowmen of Wales and Cheshire shoot down wave after wave of knights, including the blind king John of Bohemia. Calais falls within the year.",
            el: "Ο στρατός του Εδουάρδου Γ΄, ίσως δέκα χιλιάδων ανδρών, καταστρέφει τη γαλλική ιπποσύνη σε πλαγιά κοντά στο Κρεσύ-εν-Πονθιέ. Οι τοξότες της Ουαλίας και του Τσεσάιρ κατεβάζουν κύμα μετά από κύμα ιππότες, μεταξύ των οποίων τον τυφλό βασιλιά Ιωάννη της Βοημίας. Το Καλέ πέφτει μέσα στον χρόνο."
          },
          extendedDescription: {
            en: "The Genoese crossbowmen in French service, their strings wet from rain and the sun in their eyes, were cut down by English arrows and then ridden over by their own impatient knights. Edward's sixteen-year-old son, the Black Prince, fought in the front line; tradition says he took the blind king of Bohemia's ostrich-feather badge and motto, 'Ich dien'. Calais fell after an eleven-month siege — remembered through Rodin's Burghers of Calais — and stayed English until 1558.",
            el: "Οι Γενουάτες βαλλιστροφόροι στην υπηρεσία των Γάλλων, με τις χορδές τους βρεγμένες από τη βροχή και τον ήλιο στα μάτια, θερίστηκαν από τα αγγλικά βέλη και έπειτα ποδοπατήθηκαν από τους ανυπόμονους ιππότες της ίδιας τους της πλευράς. Ο δεκαεξάχρονος γιος του Εδουάρδου, ο Μαύρος Πρίγκιπας, πολέμησε στην πρώτη γραμμή· η παράδοση λέει ότι πήρε το έμβλημα με τα φτερά στρουθοκαμήλου και το σύνθημα «Ich dien» του τυφλού βασιλιά της Βοημίας. Το Καλαί έπεσε μετά από πολιορκία έντεκα μηνών — που τη θυμίζουν οι «Αστοί του Καλαί» του Ροντέν — και έμεινε αγγλικό ως το 1558."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1348,
      era: {
        en: "Black Death",
        el: "Μαύρος Θάνατος"
      },
      events: [
        {
          title: {
            en: "The plague reaches France",
            el: "Η πανώλη φτάνει στη Γαλλία"
          },
          description: {
            en: "From Marseille, where it arrived from Genoese ships off Caffa, the plague reaches Avignon in January, Paris by August. The papal physician Guy de Chauliac watches it carry off cardinals; the chronicler Jean Froissart says a third of the world dies.",
            el: "Από τη Μασσαλία, όπου έφτασε από γενοβέζικα πλοία από το Κάφφα, η πανώλη φτάνει στην Αβινιόν τον Ιανουάριο και στο Παρίσι ως τον Αύγουστο. Ο παπικός γιατρός Γκυ ντε Σολιάκ τη βλέπει να παίρνει καρδιναλίους· ο χρονικογράφος Ζαν Φρουασάρ λέει ότι το ένα τρίτο του κόσμου πεθαίνει."
          },
          extendedDescription: {
            en: "Modern estimates put the mortality between one-third and one-half of the kingdom's population. Whole villages were left empty and would never be reoccupied; rural cults of the protective saints — Roch, Sebastian — were everywhere reinforced. The shock collapsed seignorial revenues, sent wages up, and prepared the social tinder for the Jacquerie of 1358 and the Maillotin and Cabochien revolts of Paris.",
            el: "Σύγχρονες εκτιμήσεις τοποθετούν τη θνησιμότητα μεταξύ ενός τρίτου και του μισού του πληθυσμού του βασιλείου. Ολόκληρα χωριά έμειναν άδεια και δεν θα ξανακατοικηθούν· οι αγροτικές λατρείες των προστατευτικών αγίων — Ρόκκο, Σεβαστιανό — ενισχύθηκαν παντού. Το σοκ κατέρρευσε τα φεουδαρχικά εισοδήματα, εκτόξευσε τους μισθούς και προετοίμασε το κοινωνικό προσάναμμα για τη Ζακερί του 1358 και τις εξεγέρσεις των Maillotins και των Cabochiens στο Παρίσι."
          },
          category: "other"
        }
      ]
    },
    {
      year: 1356,
      era: {
        en: "Captivity of a King",
        el: "Αιχμαλωσία Βασιλιά"
      },
      events: [
        {
          title: {
            en: "Poitiers and the capture of John II",
            el: "Πουατιέ και η σύλληψη του Ιωάννη Β΄"
          },
          description: {
            en: "The Black Prince Edward, son of Edward III, defeats and captures John II of France at Maupertuis near Poitiers. The king is carried to London. In his absence, the dauphin Charles, the Estates General, and the Parisian provost Étienne Marcel struggle for control of the kingdom.",
            el: "Ο Μαύρος Πρίγκιπας Εδουάρδος, γιος του Εδουάρδου Γ΄, νικά και συλλαμβάνει τον Ιωάννη Β΄ της Γαλλίας στο Μωπερτυί κοντά στο Πουατιέ. Ο βασιλιάς μεταφέρεται στο Λονδίνο. Στην απουσία του, ο δελφίνος Κάρολος, η Γενική Συνέλευση των Τάγματων και ο πρόεδρος των εμπόρων του Παρισιού Ετιέν Μαρσέλ παλεύουν για τον έλεγχο του βασιλείου."
          },
          extendedDescription: {
            en: "The Treaty of Brétigny (1360) gave Edward sovereign possession of an enlarged Aquitaine and a ransom of three million écus for the king. Étienne Marcel's Paris revolt collapsed in 1358, the same year as the Jacquerie peasant rising in the Beauvaisis, brutally repressed by Charles of Navarre. The reign of Charles V (1364-1380) and his constable Bertrand du Guesclin would patiently reverse much of the loss before the war exploded again.",
            el: "Η Συνθήκη του Μπρετινί (1360) έδωσε στον Εδουάρδο κυρίαρχη κατοχή διευρυμένης Ακυτανίας και λύτρα τριών εκατομμυρίων écus για τον βασιλιά. Η εξέγερση του Μαρσέλ στο Παρίσι κατέρρευσε το 1358, την ίδια χρονιά με την αγροτική εξέγερση Ζακερί στο Μποβεζί, που καταπνίγηκε άγρια από τον Κάρολο της Ναβάρρας. Η βασιλεία του Καρόλου Ε΄ (1364-1380) και του κονόσταβλού του Μπερτράντ ντι Γκεσκλέν θα ανατρέψει υπομονετικά μεγάλο μέρος της απώλειας προτού ο πόλεμος ξεσπάσει ξανά."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1415,
      era: {
        en: "Lancastrian Conquest",
        el: "Λανκαστριανή Κατάκτηση"
      },
      events: [
        {
          title: {
            en: "Agincourt",
            el: "Αζινκούρ"
          },
          description: {
            en: "Henry V of England, with an exhausted and outnumbered army, slaughters the chivalry of France in a muddy ploughed field in the Pas-de-Calais. Constable Charles d'Albret falls; thousands of French nobles die or are captured. Within five years Henry will be heir to the French crown.",
            el: "Ο Ερρίκος Ε΄ της Αγγλίας, με στρατό εξαντλημένο και αριθμητικά κατώτερο, κατασφάζει την ιπποσύνη της Γαλλίας σε λασπώδες οργωμένο χωράφι στο Πα-ντε-Καλέ. Ο κονόσταβλος Σαρλ ντ' Αλμπρέ πέφτει· χιλιάδες Γάλλοι ευγενείς πεθαίνουν ή αιχμαλωτίζονται. Σε πέντε χρόνια ο Ερρίκος θα είναι κληρονόμος του γαλλικού στέμματος."
          },
          extendedDescription: {
            en: "The battle was fought on St Crispin's Day, 25 October, after Henry's army, weakened by dysentery after the siege of Harfleur, had been trying to reach Calais. Fearing a new attack, Henry ordered many of his French prisoners to be killed. Among the captives was the poet Charles of Orléans, who spent twenty-five years in England writing verse. Shakespeare's Henry V later made the battle a legend of English courage.",
            el: "Η μάχη δόθηκε την ημέρα του Αγίου Κρισπίνου, 25 Οκτωβρίου, ενώ ο στρατός του Ερρίκου, εξασθενημένος από τη δυσεντερία μετά την πολιορκία του Αρφλέρ, προσπαθούσε να φτάσει στο Καλαί. Φοβούμενος νέα επίθεση, ο Ερρίκος διέταξε να σκοτωθούν πολλοί από τους Γάλλους αιχμαλώτους του. Ανάμεσα στους αιχμαλώτους ήταν ο ποιητής Κάρολος της Ορλεάνης, που πέρασε είκοσι πέντε χρόνια στην Αγγλία γράφοντας στίχους. Ο «Ερρίκος Ε΄» του Σαίξπηρ έκανε αργότερα τη μάχη θρύλο αγγλικής ανδρείας."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1420,
      era: {
        en: "The Treaty of Troyes",
        el: "Η Συνθήκη του Τρουά"
      },
      events: [
        {
          title: {
            en: "Henry V of England, heir of France",
            el: "Ο Ερρίκος Ε΄ της Αγγλίας, κληρονόμος της Γαλλίας"
          },
          description: {
            en: "Allied with the Burgundians after the murder of Duke John the Fearless at Montereau, the mad Charles VI signs the Treaty of Troyes: his daughter Catherine marries Henry V, who is made regent of France and heir to the throne. The dauphin Charles is disinherited.",
            el: "Συμμαχημένος με τους Βουργουνδούς μετά τη δολοφονία του δούκα Ιωάννη του Άφοβου στη Μοντερό, ο τρελός Κάρολος ΣΤ΄ υπογράφει τη Συνθήκη του Τρουά: η κόρη του Αικατερίνη παντρεύεται τον Ερρίκο Ε΄, που γίνεται αντιβασιλέας της Γαλλίας και κληρονόμος του θρόνου. Ο δελφίνος Κάρολος αποκληρώνεται."
          },
          extendedDescription: {
            en: "Duke John the Fearless of Burgundy was killed on the bridge at Montereau in 1419 during a meeting with the dauphin's party, and his son Philip the Good sided with England in revenge. But Henry V died in August 1422, two months before Charles VI, leaving a baby, Henry VI, as king of both realms. The disinherited dauphin, mocked as the 'king of Bourges', held out south of the Loire until Joan of Arc revived his cause in 1429.",
            el: "Ο δούκας της Βουργουνδίας Ιωάννης ο Άφοβος σκοτώθηκε στη γέφυρα του Μοντερό το 1419, κατά τη διάρκεια μιας συνάντησης με την παράταξη του δελφίνου, και ο γιος του Φίλιππος ο Αγαθός συντάχθηκε με την Αγγλία από εκδίκηση. Όμως ο Ερρίκος Ε΄ πέθανε τον Αύγουστο του 1422, δύο μήνες πριν από τον Κάρολο ΣΤ΄, αφήνοντας ένα βρέφος, τον Ερρίκο ΣΤ΄, βασιλιά και των δύο βασιλείων. Ο αποκληρωμένος δελφίνος, που τον χλεύαζαν ως «βασιλιά της Μπουρζ», άντεξε νότια του Λίγηρα ώσπου η Ιωάννα της Λωρραίνης αναζωπύρωσε την υπόθεσή του το 1429."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1429,
      era: {
        en: "The Maid of Orléans",
        el: "Η Παρθένος της Ορλεάνης"
      },
      events: [
        {
          title: {
            en: "Joan of Arc lifts the siege of Orléans",
            el: "Η Ιωάννα της Λωραίνης λύνει την πολιορκία της Ορλεάνης"
          },
          description: {
            en: "A seventeen-year-old shepherdess from Domrémy in Lorraine, claiming visions of saints Michael, Catherine, and Margaret, persuades the dauphin Charles to give her armour and an army. In ten days she breaks the English siege of Orléans. Two months later Charles is crowned king at Reims.",
            el: "Μια δεκαεπτάχρονη βοσκοπούλα από το Ντομρεμί στη Λωραίνη, που διεκδικεί οράσεις των αγίων Μιχαήλ, Αικατερίνης και Μαργαρίτας, πείθει τον δελφίνο Κάρολο να της δώσει πανοπλία και στρατό. Σε δέκα μέρες σπάει την αγγλική πολιορκία της Ορλεάνης. Δύο μήνες αργότερα ο Κάρολος στέφεται βασιλιάς στη Ρεμς."
          },
          extendedDescription: {
            en: "Captured at Compiègne by the Burgundians in 1430, sold to the English, tried at Rouen by a court of pro-English French clergy under bishop Pierre Cauchon, Joan was burned in the market-place of Rouen on 30 May 1431, aged nineteen. A second trial of 1456 quashed the verdict; the Catholic Church canonised her in 1920. She would be remembered as the saint who saved France, made by enemies and friends alike into the symbol of national resistance.",
            el: "Συλληφθείσα στο Κομπιέν από τους Βουργουνδούς το 1430, πωλημένη στους Άγγλους, δικασμένη στη Ρουέν από δικαστήριο φιλοαγγλικού γαλλικού κλήρου υπό τον επίσκοπο Πιερ Κοσόν, η Ιωάννα κάηκε στην αγορά της Ρουέν στις 30 Μαΐου 1431, σε ηλικία δεκαεννέα ετών. Η δεύτερη δίκη του 1456 ακύρωσε την ετυμηγορία· η Καθολική Εκκλησία την αγιοποίησε το 1920. Θα παραμείνει η αγία που έσωσε τη Γαλλία, μετατρεπόμενη από εχθρούς και φίλους εξίσου σε σύμβολο της εθνικής αντίστασης."
          },
          category: "military",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Joan_of_Arc_miniature_graded.jpg?width=1024",
            alt: {
              en: "Joan of Arc",
              el: "Η Ιωάννα της Λωρραίνης"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1453,
      era: {
        en: "End of the Hundred Years War",
        el: "Τέλος του Εκατονταετούς Πολέμου"
      },
      events: [
        {
          title: {
            en: "Castillon and the recovery of Aquitaine",
            el: "Καστιγιόν και η ανάκτηση της Ακυτανίας"
          },
          description: {
            en: "On the banks of the Dordogne, French royal artillery under the brothers Bureau destroys the last English army under John Talbot, earl of Shrewsbury. Bordeaux falls in October. The English keep only Calais. The same year, Constantinople falls to the Turks.",
            el: "Στις όχθες της Ντορντόν, το γαλλικό βασιλικό πυροβολικό υπό τους αδελφούς Μπιρό καταστρέφει τον τελευταίο αγγλικό στρατό υπό τον Τζον Τάλμποτ, κόμη του Σρούσμπερι. Το Μπορντό πέφτει τον Οκτώβριο. Οι Άγγλοι κρατούν μόνο το Καλέ. Την ίδια χρονιά, η Κωνσταντινούπολη πέφτει στους Τούρκους."
          },
          extendedDescription: {
            en: "The reforms of Charles VII (1422-1461) made the recovery possible: the standing companies d'ordonnance, the regular taille and franc-archers, the codification of customary law, and the firm alliance with Jacques Cœur's mercantile capital. By his death France had a professional army, a regular income, and the institutional shape it would carry to Versailles.",
            el: "Οι μεταρρυθμίσεις του Καρόλου Ζ΄ (1422-1461) έκαναν την ανάκτηση δυνατή: οι μόνιμοι λόχοι d'ordonnance, η τακτική taille και οι franc-archers, η κωδικοποίηση του εθιμικού δικαίου και η στέρεη συμμαχία με το εμπορικό κεφάλαιο του Ζακ Κερ. Με τον θάνατό του η Γαλλία είχε επαγγελματικό στρατό, τακτικό εισόδημα και το θεσμικό σχήμα που θα μετέφερε ως τις Βερσαλλίες."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1477,
      era: {
        en: "Fall of Burgundy",
        el: "Πτώση της Βουργουνδίας"
      },
      events: [
        {
          title: {
            en: "Charles the Bold dies at Nancy",
            el: "Ο Κάρολος ο Τολμηρός πεθαίνει στη Νανσύ"
          },
          description: {
            en: "Charles the Bold, last Valois duke of Burgundy, is killed before Nancy by the Swiss pikemen of René II of Lorraine — his face half eaten by wolves when found in the snow. Louis XI of France seizes the duchy of Burgundy. Mary, Charles's daughter, marries Maximilian of Habsburg, taking the Low Countries with her.",
            el: "Ο Κάρολος ο Τολμηρός, τελευταίος δούκας Βαλουά της Βουργουνδίας, σκοτώνεται έξω από τη Νανσύ από τους Ελβετούς πικενιέρους του Ρενέ Β΄ της Λωραίνης — το πρόσωπό του μισοφαγωμένο από λύκους όταν βρέθηκε στο χιόνι. Ο Λουδοβίκος ΙΑ΄ της Γαλλίας καταλαμβάνει το δουκάτο της Βουργουνδίας. Η Μαρία, η κόρη του Καρόλου, παντρεύεται τον Μαξιμιλιανό των Αψβούργων, παίρνοντας μαζί της τις Κάτω Χώρες."
          },
          extendedDescription: {
            en: "Louis XI — the 'Universal Spider' of Commynes' Mémoires — picked up Burgundy, Picardy, Anjou (1481), Maine, and Provence (1481, with the inheritance of King René), and ate the last great fiefs into the royal demesne. The Habsburg-French rivalry over the Burgundian inheritance in the Netherlands and Franche-Comté would dominate Europe for two centuries.",
            el: "Ο Λουδοβίκος ΙΑ΄ — η «Παγκόσμια Αράχνη» των Mémoires του Κομινί — πήρε τη Βουργουνδία, την Πικαρδία, το Ανζού (1481), το Μεν και την Προβηγκία (1481, με την κληρονομιά του βασιλιά Ρενέ) και έφαγε τα τελευταία μεγάλα φέουδα μέσα στη βασιλική γαιοκτησία. Η Αψβουργοαγγλική αντιπαλότητα για τη βουργουνδική κληρονομιά στις Κάτω Χώρες και την Franche-Comté θα κυριαρχήσει στην Ευρώπη επί δύο αιώνες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1494,
      era: {
        en: "End of the Medieval Order",
        el: "Τέλος της Μεσαιωνικής Τάξης"
      },
      events: [
        {
          title: {
            en: "Charles VIII marches into Italy",
            el: "Ο Κάρολος Η΄ εισβάλλει στην Ιταλία"
          },
          description: {
            en: "Pressing a claim to Naples through the old Angevin inheritance, the young Charles VIII crosses the Alps with forty thousand men and the new royal artillery. The Italian states fall before him in months. The Italian Wars — and the encounter of France with the Renaissance — have begun.",
            el: "Διεκδικώντας τη Νάπολη μέσω της παλαιάς ανζουικής κληρονομιάς, ο νεαρός Κάρολος Η΄ διασχίζει τις Άλπεις με σαράντα χιλιάδες άνδρες και το νέο βασιλικό πυροβολικό. Τα ιταλικά κράτη πέφτουν μπροστά του σε μήνες. Οι Ιταλικοί Πόλεμοι — και η συνάντηση της Γαλλίας με την Αναγέννηση — έχουν αρχίσει."
          },
          extendedDescription: {
            en: "Niccolò Machiavelli, watching the French king ride through Florence, would later write that Italy had been 'overrun by Charles, plundered by Louis, taken by Ferdinand, and shamed by the Swiss'. The expedition was a military success and a political failure, but it brought back to France Italian humanists, architects, painters, gardeners, and cooks; the medieval kingdom returned home a Renaissance monarchy in waiting.",
            el: "Ο Νικολό Μακιαβέλι, βλέποντας τον Γάλλο βασιλιά να ιππεύει μέσα από τη Φλωρεντία, θα έγραφε αργότερα ότι η Ιταλία είχε «κατακυριευθεί από τον Κάρολο, λεηλατηθεί από τον Λουδοβίκο, παρθεί από τον Φερδινάνδο και ντροπιαστεί από τους Ελβετούς». Η εκστρατεία ήταν στρατιωτική επιτυχία και πολιτική αποτυχία, αλλά έφερε πίσω στη Γαλλία Ιταλούς ουμανιστές, αρχιτέκτονες, ζωγράφους, κηπουρούς και μαγείρους· το μεσαιωνικό βασίλειο επέστρεψε στο σπίτι αναγεννησιακή μοναρχία εν αναμονή."
          },
          category: "military"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
