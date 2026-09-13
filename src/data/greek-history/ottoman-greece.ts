/** Ottoman Greece — Οθωμανική Ελλάδα · Greek History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const OTTOMAN_GREECE = {
  id: "ottoman-greece" as const,
  label: {
    en: "Ottoman Greece",
    el: "Οθωμανική Ελλάδα"
  },
  supertitle: {
    en: "Rumelia",
    el: "Ρωμιοσύνη"
  },
  title: {
    en: "Ottoman Greece",
    el: "Οθωμανική Ελλάδα"
  },
  subtitle: {
    en: "From the fall of Constantinople to the Greek War of Independence",
    el: "Από την Άλωση της Κωνσταντινούπολης έως την Ελληνική Επανάσταση"
  },
  menuDescription: {
    en: "The Greek world under Ottoman rule, and the long road to 1821.",
    el: "Ο ελληνικός κόσμος υπό οθωμανική κυριαρχία και ο μακρύς δρόμος προς το 1821."
  },
  footerLabel: {
    en: "Ottoman Greece · 1453-1830 AD",
    el: "Οθωμανική Ελλάδα · 1453-1830 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Ottoman Greece",
    el: "Οθωμανική Ελλάδα"
  },
  theme: THEMES.sage,
  timeline: [
    {
      year: 1453,
      era: {
        en: "Ottoman Conquest",
        el: "Οθωμανική Κατάκτηση"
      },
      events: [
        {
          title: {
            en: "Fall of Constantinople",
            el: "Άλωση της Κωνσταντινούπολης"
          },
          description: {
            en: "Sultan Mehmed II captures Constantinople, ending the Byzantine Empire and beginning Ottoman rule over the Greek heartland.",
            el: "Ο σουλτάνος Μεχμέτ Β΄ καταλαμβάνει την Κωνσταντινούπολη, τερματίζοντας τη Βυζαντινή Αυτοκρατορία και ξεκινώντας την οθωμανική κυριαρχία στον ελληνικό χώρο."
          },
          extendedDescription: {
            en: "After a 53-day siege, Ottoman forces breached the Theodosian Walls. Emperor Constantine XI died in battle. Mehmed II entered Hagia Sophia and made the city his capital, renaming it Konstantiniyye. The event marked the beginning of nearly four centuries of Ottoman rule over most Greek lands.",
            el: "Μετά από 53 ημέρες πολιορκίας, οι οθωμανικές δυνάμεις διέρρηξαν τα Θεοδοσιανά Τείχη. Ο αυτοκράτορας Κωνσταντίνος ΙΑ΄ σκοτώθηκε μαχόμενος. Ο Μεχμέτ Β΄ εισήλθε στην Αγία Σοφία και κατέστησε την πόλη πρωτεύουσά του. Το γεγονός σηματοδότησε την έναρξη σχεδόν τεσσάρων αιώνων οθωμανικής κυριαρχίας στον ελληνικό χώρο."
          },
          category: "military",
          image: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Zonaro_GatesofConst.jpg/960px-Zonaro_GatesofConst.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
            alt: {
              en: "Mehmed II entering Constantinople",
              el: "Ο Μεχμέτ Β΄ εισέρχεται στην Κωνσταντινούπολη"
            },
            credit: "Fausto Zonaro (public domain)"
          }
        }
      ]
    },
    {
      year: 1460,
      era: {
        en: "Ottoman Conquest",
        el: "Οθωμανική Κατάκτηση"
      },
      events: [
        {
          title: {
            en: "Fall of the Despotate of Morea",
            el: "Πτώση του Δεσποτάτου του Μοριά"
          },
          description: {
            en: "Mehmed II conquers Mystras and the last major Byzantine stronghold in the Peloponnese.",
            el: "Ο Μεχμέτ Β΄ κατακτά το Μυστρά και το τελευταίο σημαντικό βυζαντινό προπύργιο στην Πελοπόννησο."
          },
          extendedDescription: {
            en: "The Despotate of the Morea, ruled by the Palaiologos brothers Demetrios and Thomas, had survived as a Byzantine appanage after 1453. Internal feuds and failure to pay tribute gave Mehmed II his pretext: in the summer of 1460 he marched through the Peloponnese, seized Mystras, Patras, and a string of Frankish-Byzantine castles, and reduced the peninsula to an Ottoman sanjak. Demetrios surrendered and entered Ottoman service, while Thomas fled to Italy with relics of Saint Andrew, where his children carried the imperial title into Western exile.",
            el: "Το Δεσποτάτο του Μορέως, υπό τους αδελφούς Παλαιολόγους Δημήτριο και Θωμά, είχε επιβιώσει ως βυζαντινό φέουδο μετά το 1453. Οι εσωτερικές διαμάχες και η αδυναμία καταβολής φόρου έδωσαν στον Μεχμέτ Β΄ την πρόφαση: το καλοκαίρι του 1460 διέσχισε την Πελοπόννησο, κατέλαβε τον Μυστρά, την Πάτρα και μια σειρά φραγκοβυζαντινών κάστρων, μετατρέποντας τη χερσόνησο σε οθωμανικό σαντζάκι. Ο Δημήτριος παραδόθηκε και εντάχθηκε στην οθωμανική υπηρεσία, ενώ ο Θωμάς κατέφυγε στην Ιταλία με λείψανα του Αγίου Ανδρέα, και τα παιδιά του μετέφεραν τον αυτοκρατορικό τίτλο στη δυτική εξορία."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1461,
      era: {
        en: "Ottoman Conquest",
        el: "Οθωμανική Κατάκτηση"
      },
      events: [
        {
          title: {
            en: "Fall of the Empire of Trebizond",
            el: "Πτώση της Αυτοκρατορίας της Τραπεζούντας"
          },
          description: {
            en: "The last independent Byzantine successor state falls to Mehmed II, ending the final remnant of Byzantine imperial rule.",
            el: "Το τελευταίο ανεξάρτητο βυζαντινό διάδοχο κράτος πέφτει στον Μεχμέτ Β΄, τερματίζοντας το ύστατο κατάλοιπο της βυζαντινής αυτοκρατορικής εξουσίας."
          },
          extendedDescription: {
            en: "Founded in 1204 by the Komnenoi after the Latin sack of Constantinople, the Empire of Trebizond had endured for two and a half centuries on the southeastern shore of the Black Sea, surviving by tribute, marriage diplomacy, and Genoese trade. In August 1461 Mehmed II combined a land march across Anatolia with a fleet under Kasım Pasha to besiege the city. After a brief defense, Emperor David Komnenos surrendered on terms; he and his family were deported to Adrianople and most were executed in 1463. With Trebizond's fall the last fragment of the medieval Roman state ceased to exist, and the Pontic Greek world entered the Ottoman millet system.",
            el: "Ιδρυμένη το 1204 από τους Κομνηνούς μετά τη λατινική άλωση της Κωνσταντινούπολης, η Αυτοκρατορία της Τραπεζούντας είχε αντέξει για δυόμισι αιώνες στη νοτιοανατολική ακτή του Ευξείνου Πόντου, επιβιώνοντας με φόρους, γαμικές συμμαχίες και γενουατικό εμπόριο. Τον Αύγουστο του 1461 ο Μεχμέτ Β΄ συνδύασε χερσαία πορεία στη Μικρά Ασία με στόλο υπό τον Κασίμ Πασά για να πολιορκήσει την πόλη. Μετά από σύντομη άμυνα, ο αυτοκράτορας Δαβίδ Κομνηνός παραδόθηκε με όρους· εκείνος και η οικογένειά του εκτοπίστηκαν στην Αδριανούπολη και οι περισσότεροι εκτελέστηκαν το 1463. Με την πτώση της Τραπεζούντας έπαψε να υπάρχει το τελευταίο θραύσμα του μεσαιωνικού ρωμαϊκού κράτους, και ο ποντιακός ελληνισμός εντάχθηκε στο οθωμανικό σύστημα των μιλλέτ."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1470,
      era: {
        en: "Ottoman Conquest",
        el: "Οθωμανική Κατάκτηση"
      },
      events: [
        {
          title: {
            en: "Fall of Negroponte",
            el: "Πτώση του Νεγροπόντε"
          },
          description: {
            en: "The Ottomans capture Euboea from Venice, tightening their control over the Aegean and central Greece.",
            el: "Οι Οθωμανοί καταλαμβάνουν την Εύβοια από τους Βενετούς, ενισχύοντας τον έλεγχό τους στο Αιγαίο και τη Στερεά Ελλάδα."
          },
          extendedDescription: {
            en: "Negroponte (Chalkis on Euboea) had been a Venetian stronghold and key naval base since the partition of 1204. In July 1470 Mehmed II appeared with an army of around 70,000 and a fleet of more than 300 ships, bridging the Euripos channel with a pontoon to assault the city from both sides. The Venetian relief fleet under Niccolò da Canale failed to break through; Negroponte fell on 12 July and its garrison and Latin population were massacred. The catastrophe stunned Italy, marked the end of Venice's first Ottoman war on disastrous terms, and gave Constantinople undisputed mastery of the central Aegean for a century.",
            el: "Το Νεγροπόντε (Χαλκίδα Ευβοίας) ήταν βενετικό προπύργιο και βασικός ναυτικός σταθμός από τη διανομή του 1204. Τον Ιούλιο του 1470 ο Μεχμέτ Β΄ εμφανίστηκε με στρατό περίπου 70.000 ανδρών και στόλο άνω των 300 πλοίων, ζευγνύοντας τον Εύριπο με πλωτή γέφυρα για να επιτεθεί στην πόλη και από τις δύο πλευρές. Ο βενετικός στόλος βοήθειας υπό τον Νικολό ντα Κανάλε δεν κατάφερε να σπάσει την πολιορκία· το Νεγροπόντε έπεσε στις 12 Ιουλίου και η φρουρά του μαζί με τον λατινικό πληθυσμό σφαγιάστηκαν. Η καταστροφή συγκλόνισε την Ιταλία, σφράγισε με ολέθριους όρους τον πρώτο οθωμανο-βενετικό πόλεμο και χάρισε στην Κωνσταντινούπολη την αδιαμφισβήτητη κυριαρχία του κεντρικού Αιγαίου για έναν αιώνα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1571,
      era: {
        en: "Ottoman-Venetian Wars",
        el: "Οθωμανο-Βενετικοί Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "Battle of Lepanto",
            el: "Ναυμαχία της Ναυπάκτου"
          },
          description: {
            en: "Holy League (Venice, Spain, Papal States) decisively defeats the Ottoman fleet. A major Christian victory, though Greece remains under Ottoman rule.",
            el: "Η Ιερή Συμμαχία (Βενετία, Ισπανία, Παπικά Κράτη) συντρίβει τον οθωμανικό στόλο. Μεγάλη χριστιανική νίκη, αλλά η Ελλάδα παραμένει υπό οθωμανική κυριαρχία."
          },
          extendedDescription: {
            en: "On 7 October 1571, off the entrance to the Gulf of Patras near Naupaktos (Lepanto), the galleys of the Holy League under Don Juan of Austria met the Ottoman fleet of Müezzinzade Ali Pasha. Six Venetian galleasses broke up the Ottoman line at the outset, and after four hours of close combat almost the entire Ottoman fleet was sunk or captured and Ali Pasha was killed. Some 12,000 Christian galley slaves were freed; among the wounded victors was Miguel de Cervantes. Lepanto shattered the myth of Ottoman invincibility at sea and became a touchstone of Counter-Reformation iconography, but the Ottomans rebuilt their navy within a year and Cyprus, lost just before the battle, was never recovered. For the Greeks of the Aegean and the Ionian, Lepanto remained a memory of hope without political deliverance.",
            el: "Στις 7 Οκτωβρίου 1571, στην είσοδο του Πατραϊκού Κόλπου κοντά στη Ναύπακτο, οι γαλέρες της Ιεράς Συμμαχίας υπό τον Δον Χουάν της Αυστρίας συγκρούστηκαν με τον οθωμανικό στόλο του Μουεζινζαντέ Αλή Πασά. Έξι βενετικές γαλεάσσες διέλυσαν την οθωμανική γραμμή στην αρχή της μάχης και μετά από τέσσερις ώρες σώμα με σώμα σχεδόν ολόκληρος ο οθωμανικός στόλος βυθίστηκε ή αιχμαλωτίστηκε και ο Αλή Πασάς σκοτώθηκε. Περίπου 12.000 χριστιανοί κωπηλάτες-σκλάβοι ελευθερώθηκαν· ανάμεσα στους τραυματίες νικητές ήταν και ο Μιγκέλ ντε Θερβάντες. Η Ναύπακτος συνέτριψε τον μύθο του οθωμανικού ναυτικού αλώβητου και έγινε σύμβολο της Αντιμεταρρύθμισης, αλλά οι Οθωμανοί ανασυγκρότησαν τον στόλο τους μέσα σε έναν χρόνο και η Κύπρος, που είχε μόλις χαθεί, δεν ανακτήθηκε ποτέ. Για τους Έλληνες του Αιγαίου και του Ιονίου, η Ναύπακτος παρέμεινε ανάμνηση ελπίδας χωρίς πολιτική απελευθέρωση."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1600,
      era: {
        en: "Ottoman Rule",
        el: "Οθωμανική Κυριαρχία"
      },
      events: [
        {
          title: {
            en: "Flourishing of the Cretan School",
            el: "Άνθηση της Κρητικής Σχολής"
          },
          description: {
            en: "Greek post-Byzantine painting reaches a high point in Crete, blending Orthodox iconography with Venetian artistic influence.",
            el: "Η μεταβυζαντινή ελληνική ζωγραφική φτάνει σε ακμή στην Κρήτη, συνδυάζοντας την ορθόδοξη εικονογραφία με βενετικές καλλιτεχνικές επιρροές."
          },
          extendedDescription: {
            en: "Under Venetian rule, Candia (Heraklion) and Chania became workshops where exiled Constantinopolitan masters trained generations of Greek painters in a synthesis of Palaiologan iconography and Italian Renaissance technique. Around 1600 the school produced figures such as Michael Damaskinos, Theophanes Strelitzas, and the young Domenikos Theotokopoulos, who carried Cretan training to Venice, Rome, and finally Toledo, where he became El Greco. Cretan workshops exported icons across the Orthodox world — to Mount Athos, the Ionian Islands, and Russia — and in parallel a vernacular literature flourished, culminating in Vitsentzos Kornaros's epic Erotokritos. The flowering ended only with the Ottoman conquest of the island in 1669.",
            el: "Υπό τη βενετική κυριαρχία, ο Χάνδακας και τα Χανιά έγιναν εργαστήρια όπου εξόριστοι Κωνσταντινουπολίτες δάσκαλοι εκπαίδευσαν γενιές Ελλήνων ζωγράφων σε μια σύνθεση παλαιολόγειας εικονογραφίας και ιταλικής αναγεννησιακής τεχνικής. Γύρω στο 1600 η σχολή ανέδειξε μορφές όπως ο Μιχαήλ Δαμασκηνός, ο Θεοφάνης Στρελίτζας και ο νεαρός Δομήνικος Θεοτοκόπουλος, που μετέφερε την κρητική παιδεία στη Βενετία, τη Ρώμη και τελικά στο Τολέδο, όπου έγινε Ελ Γκρέκο. Τα κρητικά εργαστήρια εξήγαγαν εικόνες σε όλον τον ορθόδοξο κόσμο — στο Άγιον Όρος, τα Επτάνησα και τη Ρωσία — και παράλληλα άνθισε δημώδης λογοτεχνία που κορυφώθηκε με τον Ερωτόκριτο του Βιτσέντζου Κορνάρου. Η ακμή έσβησε μόνο με την οθωμανική κατάκτηση του νησιού το 1669."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1669,
      era: {
        en: "Ottoman-Venetian Wars",
        el: "Οθωμανο-Βενετικοί Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "Fall of Candia (Heraklion)",
            el: "Πτώση του Χάνδακα"
          },
          description: {
            en: "After a 21-year siege, Crete falls to the Ottomans, ending Venetian rule on the island.",
            el: "Μετά από 21 χρόνια πολιορκίας, η Κρήτη πέφτει στους Οθωμανούς, τερματίζοντας τη βενετική κυριαρχία στο νησί."
          },
          extendedDescription: {
            en: "The Cretan War (1645-1669) saw the Ottomans overrun the island within two years except for Candia (modern Heraklion), whose harbour and Sammicheli walls held out for one of the longest sieges in history. Successive Venetian, papal, and French expeditions kept the city supplied by sea while the besiegers, directed from 1666 by Grand Vizier Köprülü Fazıl Ahmed, dug an intricate system of mines and trenches. After Louis XIV's last French contingent withdrew in 1669, Captain-General Francesco Morosini negotiated honourable terms: the garrison and most of the population were evacuated to Venice and the Ionian Islands, taking icons, manuscripts, and Cretan artists with them. Venice retained only the offshore fortresses of Souda, Spinalonga, and Gramvousa; the long flowering of Venetian Crete ended, and the refugee diaspora reshaped Ionian and Italian Greek culture for the next century.",
            el: "Ο Κρητικός Πόλεμος (1645-1669) είδε τους Οθωμανούς να καταλαμβάνουν το νησί μέσα σε δύο χρόνια εκτός από τον Χάνδακα (το σημερινό Ηράκλειο), του οποίου το λιμάνι και τα τείχη του Σαμμικέλι άντεξαν σε μία από τις μακροβιότερες πολιορκίες της ιστορίας. Διαδοχικές βενετικές, παπικές και γαλλικές αποστολές τροφοδοτούσαν την πόλη από θαλάσσης, ενώ οι πολιορκητές, υπό τον μεγάλο βεζίρη Κιοπρουλού Φαζίλ Αχμέτ από το 1666, έσκαβαν περίπλοκο σύστημα στοών και χαρακωμάτων. Μετά την αποχώρηση του τελευταίου γαλλικού σώματος του Λουδοβίκου ΙΔ΄ το 1669, ο γενικός αρχηγός Φραντζέσκο Μοροζίνι διαπραγματεύτηκε τιμητικούς όρους: η φρουρά και το μεγαλύτερο μέρος του πληθυσμού εκκενώθηκαν προς τη Βενετία και τα Επτάνησα, μεταφέροντας εικόνες, χειρόγραφα και Κρητικούς καλλιτέχνες. Η Βενετία διατήρησε μόνο τα νησάκια-φρούρια Σούδα, Σπιναλόγκα και Γραμβούσα· η μακρά ανθοφορία της βενετικής Κρήτης τερματίστηκε και η προσφυγική διασπορά αναδιαμόρφωσε τον επτανησιακό και ιταλικό ελληνισμό για τον επόμενο αιώνα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1687,
      era: {
        en: "Ottoman-Venetian Wars",
        el: "Οθωμανο-Βενετικοί Πόλεμοι"
      },
      events: [
        {
          title: {
            en: "Siege of Athens and damage to the Parthenon",
            el: "Πολιορκία της Αθήνας και καταστροφή του Παρθενώνα"
          },
          description: {
            en: "Venetian bombardment hits the Ottoman powder magazine inside the Parthenon, causing catastrophic damage to the monument.",
            el: "Βενετικός βομβαρδισμός πλήττει την οθωμανική πυριτιδαποθήκη μέσα στον Παρθενώνα, προκαλώντας καταστροφικές ζημιές στο μνημείο."
          },
          extendedDescription: {
            en: "During the Morean War, the Venetian commander Francesco Morosini swept up from the Peloponnese and besieged Ottoman-held Athens. The garrison fortified the Acropolis and used the Parthenon — still largely intact after twenty-one centuries — as a powder magazine. On the evening of 26 September 1687 a mortar shell fired from the Hill of the Muses ignited the store: the explosion blew out the long sides of the temple, hurled columns and sculptures across the rock, and killed roughly 300 defenders. Morosini's Swedish lieutenant Otto von Königsmarck went on to attempt to remove the western pediment as a trophy; the lifting tackle slipped and the figures shattered on the marble floor. Venetian occupation of Athens lasted only into 1688, but the explosion left the Parthenon a ruin and made it the visual emblem of the modern condition of classical Greece.",
            el: "Κατά τον Μοραΐτικο Πόλεμο, ο Βενετός αρχιστράτηγος Φραντζέσκο Μοροζίνι ανέβηκε από την Πελοπόννησο και πολιόρκησε την οθωμανοκρατούμενη Αθήνα. Η φρουρά οχυρώθηκε στην Ακρόπολη και χρησιμοποίησε τον Παρθενώνα — σχεδόν άθικτο μετά από είκοσι έναν αιώνες — ως πυριτιδαποθήκη. Το βράδυ της 26ης Σεπτεμβρίου 1687, οβίδα όλμου που εκτοξεύτηκε από τον λόφο των Μουσών πυροδότησε την πυριτιδαποθήκη: η έκρηξη γκρέμισε τις μακριές πλευρές του ναού, εκσφενδόνισε κίονες και γλυπτά στον βράχο και σκότωσε περίπου 300 αμυνομένους. Ο Σουηδός υπασπιστής του Μοροζίνι, Όττο φον Καίνιγκσμαρκ, επιχείρησε στη συνέχεια να αφαιρέσει το δυτικό αέτωμα ως τρόπαιο· τα συστήματα ανύψωσης γλίστρησαν και οι μορφές συντρίφθηκαν στο μαρμάρινο δάπεδο. Η βενετική κατοχή της Αθήνας κράτησε μόλις ως το 1688, αλλά η έκρηξη άφησε τον Παρθενώνα ερείπιο και τον κατέστησε το οπτικό σύμβολο της νεωτερικής μοίρας της κλασικής Ελλάδας."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1718,
      era: {
        en: "Ottoman Rule",
        el: "Οθωμανική Κυριαρχία"
      },
      events: [
        {
          title: {
            en: "Treaty of Passarowitz",
            el: "Συνθήκη του Πασσάροβιτς"
          },
          description: {
            en: "The Ottomans retain the Peloponnese after defeating Venice, restoring direct rule over the Morea.",
            el: "Οι Οθωμανοί διατηρούν την Πελοπόννησο μετά την ήττα της Βενετίας, αποκαθιστώντας την άμεση κυριαρχία τους στον Μοριά."
          },
          extendedDescription: {
            en: "Signed on 21 July 1718 in the Serbian town of Požarevac, the treaty closed the Austro-Venetian-Ottoman war that had begun in 1714. Habsburg arms had won crushing victories at Petrovaradin (1716) and Belgrade (1717) under Prince Eugene of Savoy and gained northern Serbia, the Banat of Temesvár, and Lesser Wallachia, but Venice had to accept the loss of the Kingdom of the Morea, conquered by the Ottomans in 1715, along with its last footholds on Crete and in the Aegean. For the Peloponnesian Greeks, the brief twenty-eight-year Venetian interlude ended in a return to Ottoman administration that would last until the Revolution of 1821; for the Republic of Venice, Passarowitz marked the definitive end of its Levantine empire.",
            el: "Υπογεγραμμένη στις 21 Ιουλίου 1718 στη σερβική πόλη Πασσάροβιτς, η συνθήκη έκλεισε τον αυστρο-βενετο-οθωμανικό πόλεμο που είχε αρχίσει το 1714. Οι Αψβούργοι, με συντριπτικές νίκες στο Πέτροβαραντίν (1716) και το Βελιγράδι (1717) υπό τον πρίγκιπα Ευγένιο της Σαβοΐας, κέρδισαν τη βόρεια Σερβία, το Βανάτο του Τεμεσβάρ και τη Μικρή Βλαχία, η Βενετία όμως αναγκάστηκε να αποδεχτεί την απώλεια του Βασιλείου του Μορέως, που είχαν κατακτήσει οι Οθωμανοί το 1715, μαζί με τα τελευταία της ερείσματα στην Κρήτη και το Αιγαίο. Για τους Πελοποννήσιους Έλληνες, η σύντομη εικοσιοκταετής βενετική παρένθεση τελείωσε με την επιστροφή σε οθωμανική διοίκηση που θα διαρκούσε ως την Επανάσταση του 1821· για τη Δημοκρατία της Βενετίας, ο Πασσάροβιτς σήμανε το οριστικό τέλος της λεβαντινής της αυτοκρατορίας."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1770,
      era: {
        en: "Pre-Revolutionary Period",
        el: "Προεπαναστατική Περίοδος"
      },
      events: [
        {
          title: {
            en: "Orlov Revolt",
            el: "Ορλωφικά"
          },
          description: {
            en: "Greek uprising in the Peloponnese, supported by Russian forces during the Russo-Turkish War. Brutally suppressed.",
            el: "Ελληνική εξέγερση στην Πελοπόννησο με ρωσική υποστήριξη κατά τον Ρωσο-Τουρκικό πόλεμο. Σκληρά καταπνίγεται."
          },
          extendedDescription: {
            en: "Encouraged by Catherine the Great's Greek Plan, the brothers Alexei and Fyodor Orlov sailed a Russian squadron from the Baltic into the Mediterranean and landed a small force at Mani in February 1770. Local kapetanioi raised the Peloponnese and briefly captured Mistra, Kalamata, and parts of Arcadia, while a separate revolt flared in Crete and the Aegean. The Ottoman counter-attack relied chiefly on irregular Albanian troops, who defeated the rebels at Tripolitsa in April and embarked on years of plunder remembered as the Albanikon. The Russians won a spectacular naval victory at Çeşme in July 1770 and held the Cyclades for several years, but withdrew at the Treaty of Küçük Kaynarca (1774). The Orlov Revolt left the Peloponnese devastated, taught Greek leaders to mistrust foreign promises, and seeded the Klepht and armatole networks that would rise again in 1821.",
            el: "Εμπνευσμένοι από το «Ελληνικό Σχέδιο» της Αικατερίνης Β΄, οι αδελφοί Αλεξέι και Φιόντορ Ορλόφ μετέφεραν ρωσική μοίρα από τη Βαλτική στη Μεσόγειο και αποβίβασαν μικρό σώμα στη Μάνη τον Φεβρουάριο του 1770. Ντόπιοι καπετάνιοι ξεσήκωσαν την Πελοπόννησο και κατέλαβαν για λίγο τον Μυστρά, την Καλαμάτα και τμήματα της Αρκαδίας, ενώ ξεχωριστή εξέγερση φούντωσε στην Κρήτη και τις Κυκλάδες. Η οθωμανική αντεπίθεση στηρίχθηκε κυρίως σε άτακτα αλβανικά στρατεύματα, που νίκησαν τους εξεγερμένους στην Τριπολιτσά τον Απρίλιο και επιδόθηκαν σε χρόνια λεηλασίες γνωστές ως «Αλβανικά». Οι Ρώσοι κέρδισαν λαμπρή ναυμαχία στο Τσεσμέ τον Ιούλιο του 1770 και κράτησαν τις Κυκλάδες για αρκετά χρόνια, αλλά αποχώρησαν με τη Συνθήκη του Κιουτσούκ Καϊναρτζή (1774). Τα Ορλωφικά άφησαν την Πελοπόννησο ρημαγμένη, δίδαξαν στους Έλληνες ηγέτες να μην εμπιστεύονται εύκολα ξένες υποσχέσεις και έθρεψαν τα δίκτυα κλεφτών και αρματολών που θα ξεσηκώνονταν ξανά το 1821."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1798,
      era: {
        en: "Greek Enlightenment",
        el: "Ελληνικός Διαφωτισμός"
      },
      events: [
        {
          title: {
            en: "Death of Rigas Feraios",
            el: "Θάνατος του Ρήγα Φεραίου"
          },
          description: {
            en: "Revolutionary intellectual and precursor of the Greek Revolution is executed by the Ottomans in Belgrade.",
            el: "Ο επαναστάτης διανοούμενος και πρόδρομος της Ελληνικής Επανάστασης εκτελείται από τους Οθωμανούς στο Βελιγράδι."
          },
          extendedDescription: {
            en: "Born in Thessalian Velestino around 1757, Rigas served as secretary to Phanariot princes in the Danubian principalities and absorbed the radical politics of the French Revolution while in Vienna. There he printed maps of a future Hellenic Republic stretching from the Danube to Crete, the celebrated Thourios war-hymn, and a draft constitution modelled on the Jacobin charter of 1793 but extended to all Balkan peoples. In December 1797 Austrian police, anxious to preserve relations with the Porte, arrested him at Trieste with seven companions. Handed to the Ottomans, they were strangled in the Nebojša Tower of Belgrade fortress in June 1798 and their bodies thrown into the Danube. Rigas's writings circulated underground for the next generation and made him the first martyr of the Greek national movement and a hero across the Balkans.",
            el: "Γεννημένος στο θεσσαλικό Βελεστίνο γύρω στο 1757, ο Ρήγας υπηρέτησε ως γραμματέας Φαναριωτών ηγεμόνων στις Παραδουνάβιες Ηγεμονίες και απορρόφησε τη ριζοσπαστική πολιτική της Γαλλικής Επανάστασης κατά την παραμονή του στη Βιέννη. Εκεί τύπωσε χάρτες μιας μελλοντικής Ελληνικής Δημοκρατίας από τον Δούναβη ως την Κρήτη, τον περίφημο Θούριο και σχέδιο συντάγματος εμπνευσμένο από τον ιακωβίνικο χάρτη του 1793 αλλά επεκταμένο σε όλους τους βαλκανικούς λαούς. Τον Δεκέμβριο του 1797 η αυστριακή αστυνομία, που ήθελε να διατηρήσει τις σχέσεις με την Πύλη, τον συνέλαβε στην Τεργέστη με επτά συντρόφους. Παραδομένοι στους Οθωμανούς, στραγγαλίστηκαν στον πύργο Νεμπόισα του φρουρίου του Βελιγραδίου τον Ιούνιο του 1798 και τα σώματά τους ρίχτηκαν στον Δούναβη. Τα γραπτά του Ρήγα κυκλοφόρησαν παράνομα την επόμενη γενιά και τον ανέδειξαν σε πρώτο μάρτυρα του ελληνικού εθνικού κινήματος και ήρωα ολόκληρων των Βαλκανίων."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1814,
      era: {
        en: "Pre-Revolutionary Period",
        el: "Προεπαναστατική Περίοδος"
      },
      events: [
        {
          title: {
            en: "Foundation of the Filiki Eteria",
            el: "Ίδρυση της Φιλικής Εταιρείας"
          },
          description: {
            en: "A secret society is founded in Odessa to prepare and coordinate a pan-Hellenic uprising against Ottoman rule.",
            el: "Μυστική εταιρεία ιδρύεται στην Οδησσό για να προετοιμάσει και να συντονίσει μια πανελλήνια εξέγερση κατά της οθωμανικής κυριαρχίας."
          },
          extendedDescription: {
            en: "On 14 September 1814 three young Greek merchants — Nikolaos Skoufas of Arta, Athanasios Tsakalov of Ioannina, and Emmanuil Xanthos of Patmos — met in the Black Sea port of Odessa and bound themselves by oath to liberate the Greek nation. Modelled on Italian Carbonarism and the Freemasons, the Filiki Eteria used elaborate degrees of initiation, hand signs, and secret correspondence to recruit through the Greek diaspora and within the Ottoman Empire. By 1820 it counted thousands of members across Russia, the Danubian Principalities, the Peloponnese, and the islands, including merchants, klephts, kapetanioi, and Phanariots, and had named the Russian-service general Alexandros Ypsilantis as its leader. Its agents prepared the simultaneous uprisings that broke out in the Principalities and the Morea in spring 1821.",
            el: "Στις 14 Σεπτεμβρίου 1814 τρεις νέοι Έλληνες έμποροι — ο Νικόλαος Σκουφάς από την Άρτα, ο Αθανάσιος Τσακάλωφ από τα Ιωάννινα και ο Εμμανουήλ Ξάνθος από την Πάτμο — συναντήθηκαν στο λιμάνι της Οδησσού και ορκίστηκαν να απελευθερώσουν το ελληνικό έθνος. Με πρότυπο τους Ιταλούς Καρμπονάρους και τους Τέκτονες, η Φιλική Εταιρεία χρησιμοποιούσε σύνθετους βαθμούς μύησης, συνθηματικά και μυστική αλληλογραφία για να στρατολογεί στην ελληνική διασπορά και εντός της Οθωμανικής Αυτοκρατορίας. Ως το 1820 αριθμούσε χιλιάδες μέλη σε Ρωσία, Παραδουνάβιες Ηγεμονίες, Πελοπόννησο και νησιά — εμπόρους, κλεφταρματολούς, καπετάνιους και Φαναριώτες — και είχε ορίσει αρχηγό της τον Ρώσο αξιωματικό Αλέξανδρο Υψηλάντη. Οι απεσταλμένοι της προετοίμασαν τις ταυτόχρονες εξεγέρσεις που ξέσπασαν στις Ηγεμονίες και τον Μοριά την άνοιξη του 1821."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1821,
      era: {
        en: "Greek War of Independence",
        el: "Ελληνική Επανάσταση"
      },
      events: [
        {
          title: {
            en: "Start of the Greek Revolution",
            el: "Έναρξη της Ελληνικής Επανάστασης"
          },
          description: {
            en: "Revolution breaks out in the Peloponnese and other regions on 25 March (traditional date).",
            el: "Η Επανάσταση ξεσπά στην Πελοπόννησο και άλλες περιοχές στις 25 Μαρτίου (παραδοσιακή ημερομηνία)."
          },
          extendedDescription: {
            en: "Alexandros Ypsilantis crossed the Pruth into the Danubian Principalities on 22 February 1821, but his Sacred Band was crushed at Dragatsani in June. The decisive front opened in the Peloponnese: by mid-March kapetanioi like Theodoros Kolokotronis, Petrobey Mavromichalis of Mani, and Archbishop Germanos of Patras had raised the banner of revolt, traditionally said to have been blessed at the monastery of Agia Lavra on 25 March. Within weeks the countryside of the Morea was in Greek hands and the Ottoman garrisons were besieged in their citadels. Independent risings followed in central Greece, on Hydra, Spetses, and Psara — whose merchant fleets gave the rebellion command of the seas — and across the Aegean. The First National Assembly at Epidaurus in January 1822 issued a Declaration of Independence and a provisional constitution, formally proclaiming the modern Greek state.",
            el: "Ο Αλέξανδρος Υψηλάντης διέβη τον Προύθο στις 22 Φεβρουαρίου 1821, αλλά ο Ιερός Λόχος του συντρίβηκε στο Δραγατσάνι τον Ιούνιο. Το αποφασιστικό μέτωπο άνοιξε στην Πελοπόννησο: ως τα μέσα Μαρτίου, καπετάνιοι όπως ο Θεόδωρος Κολοκοτρώνης, ο Πετρόμπεης Μαυρομιχάλης της Μάνης και ο Παλαιών Πατρών Γερμανός είχαν σηκώσει τη σημαία της επανάστασης, που κατά την παράδοση ευλογήθηκε στη μονή της Αγίας Λαύρας στις 25 Μαρτίου. Μέσα σε εβδομάδες η ύπαιθρος του Μοριά πέρασε σε ελληνικά χέρια και οι οθωμανικές φρουρές πολιορκούνταν στα κάστρα τους. Ακολούθησαν αυτόνομες εξεγέρσεις στη Στερεά Ελλάδα, στην Ύδρα, τις Σπέτσες και τα Ψαρά — των οποίων οι εμπορικοί στόλοι έδωσαν στην επανάσταση κυριαρχία στη θάλασσα — και σε όλο το Αιγαίο. Η Α΄ Εθνοσυνέλευση της Επιδαύρου τον Ιανουάριο του 1822 εξέδωσε τη Διακήρυξη της Ανεξαρτησίας και προσωρινό σύνταγμα, ανακηρύσσοντας τυπικά το νεοελληνικό κράτος."
          },
          category: "political"
        },
        {
          title: {
            en: "Fall of Tripolitsa",
            el: "Άλωση της Τριπολιτσάς"
          },
          description: {
            en: "Greek forces capture the administrative center of the Peloponnese.",
            el: "Οι ελληνικές δυνάμεις καταλαμβάνουν το διοικητικό κέντρο της Πελοποννήσου."
          },
          extendedDescription: {
            en: "Tripolitsa, capital of the Morea Eyalet, was the seat of the Ottoman pasha and the residence of the leading Muslim and Jewish families of the Peloponnese. Theodoros Kolokotronis encircled it from spring 1821, blockading supply routes from his mountain camps. After negotiations broke down, irregular Greek bands stormed the walls on 23 September; the sack that followed left thousands of civilians dead and emptied the city of its Muslim and Jewish populations. The fall of Tripolitsa secured the interior of the Peloponnese for the Revolution, freed Greek forces to besiege the remaining coastal fortresses, and provided the captured artillery and money that sustained the rebel government — but its violence also hardened European public opinion that would soon hear of similar Ottoman atrocities at Chios.",
            el: "Η Τριπολιτσά, πρωτεύουσα του Εγιαλετίου του Μοριά, ήταν έδρα του Οθωμανού πασά και κατοικία των ισχυρότερων μουσουλμανικών και εβραϊκών οικογενειών της Πελοποννήσου. Ο Θεόδωρος Κολοκοτρώνης την περικύκλωσε από την άνοιξη του 1821, αποκόπτοντας τους εφοδιασμούς της από τα ορεινά στρατόπεδά του. Όταν κατέρρευσαν οι διαπραγματεύσεις, άτακτα ελληνικά σώματα εφόρμησαν στα τείχη στις 23 Σεπτεμβρίου· η σφαγή που ακολούθησε άφησε χιλιάδες αμάχους νεκρούς και άδειασε την πόλη από τους μουσουλμάνους και τους Εβραίους κατοίκους της. Η άλωση της Τριπολιτσάς εξασφάλισε στους Έλληνες την ενδοχώρα της Πελοποννήσου, απελευθέρωσε δυνάμεις για την πολιορκία των παραλιακών κάστρων και έδωσε στα αιχμάλωτα κανόνια και χρήματα τη δυνατότητα να συντηρηθεί η επαναστατική διοίκηση — όμως η βιαιότητά της σκλήρυνε επίσης την ευρωπαϊκή κοινή γνώμη, που σύντομα θα μάθαινε για ανάλογες οθωμανικές θηριωδίες στη Χίο."
          },
          category: "military"
        },
        {
          title: {
            en: "Execution of Patriarch Gregory V",
            el: "Απαγχονισμός του Πατριάρχη Γρηγορίου Ε΄"
          },
          description: {
            en: "The Ecumenical Patriarch is executed in Constantinople in reprisal for the uprising, shocking Orthodox communities.",
            el: "Ο Οικουμενικός Πατριάρχης εκτελείται στην Κωνσταντινούπολη ως αντίποινα για την εξέγερση, συγκλονίζοντας τις ορθόδοξες κοινότητες."
          },
          extendedDescription: {
            en: "On Easter Sunday, 22 April 1821, Patriarch Gregory V of Constantinople was hanged from the central gate of the Phanar Patriarchate by order of Sultan Mahmud II — even though he had publicly excommunicated the rebels and condemned Ypsilantis's rising. He was 75 years old and had been Patriarch three times. His body was left for three days, then dragged through the streets and thrown into the Bosporus, where it was recovered by Greek sailors and taken to Odessa, where Tsar Alexander I gave it a state funeral. Pogroms against Phanariots, leading clergy, and merchants in the capital followed for weeks. The execution turned the Russian and European Orthodox public against the Porte, complicated St Petersburg's neutrality, and made the Patriarchal gate — left walled up to this day — a permanent symbol of the price of the Greek Revolution.",
            el: "Την Κυριακή του Πάσχα, στις 22 Απριλίου 1821, ο Πατριάρχης Κωνσταντινουπόλεως Γρηγόριος Ε΄ απαγχονίστηκε από την κεντρική πύλη του Πατριαρχείου του Φαναρίου, με διαταγή του σουλτάνου Μαχμούτ Β΄ — παρότι είχε δημοσίως αφορίσει τους επαναστάτες και καταδικάσει το κίνημα του Υψηλάντη. Ήταν 75 ετών και είχε διατελέσει τρεις φορές Πατριάρχης. Το σώμα του έμεινε κρεμασμένο τρεις ημέρες, στη συνέχεια σύρθηκε στους δρόμους και ρίχτηκε στον Βόσπορο, από όπου το ανέσυραν Έλληνες ναυτικοί και το μετέφεραν στην Οδησσό, όπου ο τσάρος Αλέξανδρος Α΄ του προσέφερε επίσημη κηδεία. Ακολούθησαν για εβδομάδες διωγμοί κατά Φαναριωτών, ανώτερου κλήρου και εμπόρων στην πρωτεύουσα. Η εκτέλεση έστρεψε εναντίον της Πύλης τη ρωσική και την ευρωπαϊκή ορθόδοξη κοινή γνώμη, δυσχέρανε την ουδετερότητα της Πετρούπολης και κατέστησε την Πατριαρχική πύλη — κλειστή ως σήμερα — μόνιμο σύμβολο του τιμήματος της Ελληνικής Επανάστασης."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1822,
      era: {
        en: "Greek War of Independence",
        el: "Ελληνική Επανάσταση"
      },
      events: [
        {
          title: {
            en: "Massacre of Chios",
            el: "Σφαγή της Χίου"
          },
          description: {
            en: "Ottoman forces massacre tens of thousands on Chios. The event shocks Europe and inspires Delacroix.",
            el: "Οθωμανικές δυνάμεις σφάζουν δεκάδες χιλιάδες στη Χίο. Το γεγονός σοκάρει την Ευρώπη και εμπνέει τον Ντελακρουά."
          },
          extendedDescription: {
            en: "Wealthy Chios, famed for its mastic and shipping, had at first stayed clear of the Revolution; in March 1822 a Samian expedition under Lykourgos Logothetis forced its uneasy participation. Ottoman forces sent by Kara Ali landed on 11 April and, on the sultan's orders, embarked on the systematic destruction of the island. Of perhaps 120,000 inhabitants, around 25,000 were killed, 45,000 enslaved, and the rest scattered as refugees to Syros, Trieste, Marseille, and London. In June, Konstantinos Kanaris avenged the massacre by detonating a fireship beside Kara Ali's flagship in the harbour of Chios, killing the admiral and 2,000 men. The atrocity galvanised European philhellenism: Eugène Delacroix's Le Massacre de Scio (1824) and Victor Hugo's poem L'Enfant grec turned Chios into the iconic image of Christian suffering under Ottoman rule.",
            el: "Η εύπορη Χίος, ξακουστή για τη μαστίχα και το εμπορικό της ναυτικό, είχε αρχικά κρατηθεί μακριά από την Επανάσταση· τον Μάρτιο του 1822 η σαμιακή αποστολή του Λυκούργου Λογοθέτη επέβαλε τη διστακτική συμμετοχή της. Οθωμανικές δυνάμεις υπό τον Καρά Αλή αποβιβάστηκαν στις 11 Απριλίου και, με εντολή του σουλτάνου, επιδόθηκαν στη συστηματική καταστροφή του νησιού. Από περίπου 120.000 κατοίκους, γύρω στις 25.000 σκοτώθηκαν, 45.000 πουλήθηκαν δούλοι και οι υπόλοιποι σκορπίστηκαν ως πρόσφυγες στη Σύρο, την Τεργέστη, τη Μασσαλία και το Λονδίνο. Τον Ιούνιο ο Κωνσταντίνος Κανάρης εκδικήθηκε τη σφαγή ανατινάζοντας πυρπολικό δίπλα στη ναυαρχίδα του Καρά Αλή στο λιμάνι της Χίου, σκοτώνοντας τον ναύαρχο και 2.000 άνδρες. Η θηριωδία πυροδότησε τον ευρωπαϊκό φιλελληνισμό: Η Σφαγή της Χίου του Ευγενίου Ντελακρουά (1824) και το ποίημα Το Ελληνόπουλο του Βίκτωρος Ουγκώ ανέδειξαν τη Χίο σε εμβληματική εικόνα του χριστιανικού μαρτυρίου υπό την οθωμανική κυριαρχία."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1823,
      era: {
        en: "Greek War of Independence",
        el: "Ελληνική Επανάσταση"
      },
      events: [
        {
          title: {
            en: "Second National Assembly at Astros",
            el: "Β΄ Εθνοσυνέλευση στο Άστρος"
          },
          description: {
            en: "Revolutionary leaders revise the provisional constitution and attempt to centralize authority during the war.",
            el: "Οι επαναστατικοί ηγέτες αναθεωρούν το προσωρινό σύνταγμα και επιχειρούν να συγκεντρώσουν την εξουσία στη διάρκεια του πολέμου."
          },
          extendedDescription: {
            en: "The Second National Assembly met from late March to mid-April 1823 in the Peloponnesian village of Astros, on the slopes above the Argolic Gulf. About 240 delegates produced the Law of Epidaurus, a revised constitution that abolished the regional senates of the Morea, Western Greece, and Eastern Greece, concentrated executive power in a five-member committee, and made the legislature a single national chamber. The reform was a victory for the political party of Mavrokordatos and the islander shipowners over the Peloponnesian military chieftains around Kolokotronis, who saw their local authority curtailed. The friction unleashed at Astros would erupt later that year into the first of two Greek civil wars, even as Egyptian intervention was being prepared in Cairo.",
            el: "Η Β΄ Εθνοσυνέλευση συνεδρίασε από τα τέλη Μαρτίου ως τα μέσα Απριλίου 1823 στο πελοποννησιακό χωριό Άστρος, στις πλαγιές πάνω από τον Αργολικό κόλπο. Περίπου 240 πληρεξούσιοι ψήφισαν τον Νόμο της Επιδαύρου, αναθεωρημένο σύνταγμα που κατάργησε τις τοπικές γερουσίες του Μοριά, της Δυτικής και της Ανατολικής Στερεάς, συγκέντρωσε την εκτελεστική εξουσία σε πενταμελή επιτροπή και κατέστησε το νομοθετικό σώμα ενιαίο εθνικό. Η μεταρρύθμιση ήταν νίκη της παράταξης του Μαυροκορδάτου και των νησιωτών εφοπλιστών έναντι των Πελοποννησίων στρατιωτικών γύρω από τον Κολοκοτρώνη, που είδαν την τοπική τους εξουσία να περιορίζεται. Οι αντιθέσεις που ξέσπασαν στο Άστρος θα οδηγούσαν αργότερα την ίδια χρονιά στον πρώτο από τους δύο Εμφυλίους της Επανάστασης, ενώ ταυτόχρονα προετοιμαζόταν στο Κάιρο η αιγυπτιακή επέμβαση."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1824,
      era: {
        en: "Greek War of Independence",
        el: "Ελληνική Επανάσταση"
      },
      events: [
        {
          title: {
            en: "Lord Byron dies at Missolonghi",
            el: "Θάνατος του Λόρδου Βύρωνα στο Μεσολόγγι"
          },
          description: {
            en: "The famous philhellene poet dies, galvanizing European support for the Greek cause.",
            el: "Ο διάσημος φιλέλληνας ποιητής πεθαίνει, ενισχύοντας την ευρωπαϊκή υποστήριξη για τον ελληνικό αγώνα."
          },
          extendedDescription: {
            en: "Lord Byron — the most famous poet in Europe — sailed from Genoa as agent of the London Greek Committee in summer 1823, carrying loans, military stores, and the prestige of his name. He landed at Missolonghi on 5 January 1824 and worked to mediate between Mavrokordatos's government and the unruly Suliote bands, fund a brigade of 500 men, and plan an attack on Lepanto. He never marched: a fever caught in the marshes around the lagoon, aggravated by repeated bleeding from his physicians, killed him on 19 April 1824, on his thirty-seventh birthday. His heart was buried at Missolonghi, his body returned to England. Byron's death made the Greek cause an emotional cause in every European capital, helped secure the second London Loan, and turned a swampy lagoon town into the moral capital of philhellenism.",
            el: "Ο Λόρδος Βύρων — ο διασημότερος ποιητής της Ευρώπης — απέπλευσε από τη Γένοβα ως απεσταλμένος της Φιλελληνικής Επιτροπής του Λονδίνου το καλοκαίρι του 1823, μεταφέροντας δάνεια, πολεμικό υλικό και το κύρος του ονόματός του. Αποβιβάστηκε στο Μεσολόγγι στις 5 Ιανουαρίου 1824 και προσπάθησε να μεσολαβήσει ανάμεσα στην κυβέρνηση Μαυροκορδάτου και στα ατίθασα σώματα των Σουλιωτών, να συντηρήσει τάγμα 500 ανδρών και να σχεδιάσει επίθεση κατά της Ναυπάκτου. Δεν πρόλαβε να πορευτεί: πυρετός που έπιασε στους βάλτους της λιμνοθάλασσας, σε συνδυασμό με τις επαναλαμβανόμενες αφαιμάξεις των γιατρών του, τον σκότωσε στις 19 Απριλίου 1824, στα τριακοστά έβδομα γενέθλιά του. Η καρδιά του τάφηκε στο Μεσολόγγι και το σώμα του επέστρεψε στην Αγγλία. Ο θάνατος του Βύρωνα έκανε την ελληνική υπόθεση συγκινητική σε κάθε ευρωπαϊκή πρωτεύουσα, βοήθησε στη σύναψη του δεύτερου δανείου του Λονδίνου και ανέδειξε μια ελώδη λιμνοθαλασσιακή πολίχνη σε ηθική πρωτεύουσα του φιλελληνισμού."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1825,
      era: {
        en: "Greek War of Independence",
        el: "Ελληνική Επανάσταση"
      },
      events: [
        {
          title: {
            en: "Ibrahim Pasha lands in the Peloponnese",
            el: "Απόβαση του Ιμπραήμ Πασά στην Πελοπόννησο"
          },
          description: {
            en: "Egyptian forces under Ibrahim intervene on behalf of the Ottomans, threatening the survival of the Revolution.",
            el: "Αιγυπτιακές δυνάμεις υπό τον Ιμπραήμ επεμβαίνουν υπέρ των Οθωμανών, απειλώντας την επιβίωση της Επανάστασης."
          },
          extendedDescription: {
            en: "Sultan Mahmud II, unable to subdue the rebellion with his own armies, called on his powerful viceroy in Egypt, Mehmed Ali, in exchange for the governorships of Crete and the Morea. Mehmed Ali's adopted son Ibrahim Pasha trained a Nizam-i Cedid army on French models under Colonel Sève (Süleyman Pasha) and shipped it across the Aegean from Crete. Ibrahim landed at Modon (Methoni) on 24 February 1825 with around 10,000 disciplined infantry, regular cavalry, and a strong artillery train; within months he had taken Navarino and Tripolitsa, broken Kolokotronis at Trikorfa, and reduced most of the Peloponnese to scorched-earth campaigning. The Greek Revolution, exhausted by two civil wars, came close to collapse and was saved only by the joint European intervention that began with Navarino in 1827.",
            el: "Ο σουλτάνος Μαχμούτ Β΄, αδυνατώντας να καταπνίξει την επανάσταση με τις δικές του δυνάμεις, ζήτησε τη βοήθεια του ισχυρού αντιβασιλέα του στην Αίγυπτο, Μεχμέτ Αλή, με αντάλλαγμα τις διοικήσεις της Κρήτης και του Μοριά. Ο θετός γιος του Μεχμέτ Αλή, ο Ιμπραήμ Πασάς, εκπαίδευσε έναν στρατό «νιζάμ-ι τζεντίντ» κατά γαλλικά πρότυπα υπό τον συνταγματάρχη Σεβ (Σουλεϊμάν Πασά) και τον μετέφερε από την Κρήτη στο Αιγαίο. Ο Ιμπραήμ αποβιβάστηκε στη Μεθώνη στις 24 Φεβρουαρίου 1825 με περίπου 10.000 πειθαρχημένο πεζικό, τακτικό ιππικό και ισχυρό πυροβολικό· σε λίγους μήνες κατέλαβε το Ναβαρίνο και την Τριπολιτσά, διέλυσε τον Κολοκοτρώνη στα Τρίκορφα και μετέτρεψε το μεγαλύτερο μέρος της Πελοποννήσου σε πεδίο καμένης γης. Η Ελληνική Επανάσταση, εξαντλημένη από δύο εμφυλίους, έφτασε στα όρια της κατάρρευσης και σώθηκε μόνο με τη συντονισμένη ευρωπαϊκή επέμβαση που άρχισε με το Ναβαρίνο το 1827."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1826,
      era: {
        en: "Greek War of Independence",
        el: "Ελληνική Επανάσταση"
      },
      events: [
        {
          title: {
            en: "Fall of Missolonghi",
            el: "Έξοδος του Μεσολογγίου"
          },
          description: {
            en: "Heroic exodus and fall of the city after a long siege. Immortalized in Greek national memory.",
            el: "Ηρωική έξοδος και πτώση της πόλης μετά από μακρά πολιορκία. Αθάνατη στη συλλογική εθνική μνήμη."
          },
          extendedDescription: {
            en: "Missolonghi, on the marshy north shore of the Gulf of Patras, had repulsed two earlier Ottoman sieges before Reşid Mehmed Pasha closed in during April 1825 and was joined by Ibrahim's Egyptians in early 1826. Around 10,500 inhabitants and defenders, cut off by a tight blockade and reduced to eating leather and rats, resolved on a mass breakout. On the night of 10-11 April 1826, the so-called Exodus, some 3,000 fighting men with their families attempted to cut their way through the besiegers; only a few hundred reached the mountains, while those left in the town blew up the powder magazine of the bishop's house rather than surrender. The fall horrified European opinion: it inspired Solomos's hymn The Free Besieged, was depicted in Delacroix's Greece on the Ruins of Missolonghi, and tilted British, French, and Russian governments toward armed mediation, which followed the next year.",
            el: "Το Μεσολόγγι, στην ελώδη βόρεια ακτή του Πατραϊκού Κόλπου, είχε αποκρούσει δύο προηγούμενες οθωμανικές πολιορκίες πριν ο Ρεσίτ Μεχμέτ Πασάς σφίξει τον κλοιό τον Απρίλιο του 1825, ενισχυμένος από τους Αιγυπτίους του Ιμπραήμ στις αρχές του 1826. Περίπου 10.500 κάτοικοι και υπερασπιστές, αποκλεισμένοι ασφυκτικά και αναγκασμένοι να τρέφονται με δέρματα και ποντίκια, αποφάσισαν μαζική έξοδο. Τη νύχτα της 10ης προς 11η Απριλίου 1826, στη φημισμένη Έξοδο, περίπου 3.000 πολεμιστές μαζί με τις οικογένειές τους προσπάθησαν να ανοίξουν δρόμο μέσα από τους πολιορκητές· μόνο λίγες εκατοντάδες έφτασαν στα βουνά, ενώ όσοι έμειναν στην πόλη ανατίναξαν την πυριτιδαποθήκη του Επισκοπείου παρά να παραδοθούν. Η πτώση συγκλόνισε την Ευρώπη: ενέπνευσε τους Ελεύθερους Πολιορκημένους του Σολωμού, αποτυπώθηκε στην Ελλάδα στα ερείπια του Μεσολογγίου του Ντελακρουά και έγειρε τις κυβερνήσεις της Βρετανίας, της Γαλλίας και της Ρωσίας προς την ένοπλη διαμεσολάβηση που ακολούθησε τον επόμενο χρόνο."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1827,
      era: {
        en: "Greek War of Independence",
        el: "Ελληνική Επανάσταση"
      },
      events: [
        {
          title: {
            en: "Battle of Navarino",
            el: "Ναυμαχία του Ναβαρίνου"
          },
          description: {
            en: "Allied British-French-Russian fleet destroys the Ottoman-Egyptian fleet, turning the tide of the war.",
            el: "Συμμαχικός αγγλο-γαλλο-ρωσικός στόλος καταστρέφει τον οθωμανο-αιγυπτιακό στόλο, ανατρέποντας την πορεία του πολέμου."
          },
          extendedDescription: {
            en: "After the Treaty of London (July 1827) bound Britain, France, and Russia to mediate Greek autonomy by force if necessary, their squadrons gathered off the southwestern Peloponnese to halt Ibrahim's campaign. On 20 October 1827 Vice-Admiral Edward Codrington led 27 ships, including 11 ships of the line, into Navarino Bay where 78 Ottoman, Egyptian, and Tunisian vessels lay at anchor in a horseshoe formation. A Turkish fireship opened fire on a British boat sent under flag of truce; within four hours the allied broadsides had sunk or burned about 60 enemy ships and killed roughly 6,000 men, against around 180 allied dead. Navarino was the last great battle fought entirely under sail and the only one in which a European fleet engaged an Ottoman one without a formal declaration of war. It crippled Ibrahim's logistics, forced Egyptian evacuation of the Peloponnese in 1828, and made Greek independence inevitable.",
            el: "Μετά τη Συνθήκη του Λονδίνου (Ιούλιος 1827), που δέσμευσε Βρετανία, Γαλλία και Ρωσία να επιβάλουν την ελληνική αυτονομία ακόμη και με τη βία, οι μοίρες τους συγκεντρώθηκαν στη νοτιοδυτική Πελοπόννησο για να σταματήσουν την εκστρατεία του Ιμπραήμ. Στις 20 Οκτωβρίου 1827 ο αντιναύαρχος Έντουαρντ Κόντρινγκτον οδήγησε 27 πλοία, μεταξύ των οποίων 11 σκάφη γραμμής, μέσα στον κόλπο του Ναβαρίνου, όπου 78 οθωμανικά, αιγυπτιακά και τυνησιακά σκάφη ήταν αγκυροβολημένα σε σχήμα πετάλου. Τουρκικό πυρπολικό πυροβόλησε βρετανική βάρκα που πλησίαζε με λευκή σημαία· μέσα σε τέσσερις ώρες οι συμμαχικές πλάγιες βολές βύθισαν ή έκαψαν περίπου 60 εχθρικά σκάφη και σκότωσαν γύρω στους 6.000 άνδρες, με περίπου 180 νεκρούς συμμάχους. Το Ναβαρίνο ήταν η τελευταία μεγάλη ναυμαχία που δόθηκε εξ ολοκλήρου με ιστιοφόρα και η μόνη όπου ευρωπαϊκός στόλος έπληξε οθωμανικό χωρίς επίσημη κήρυξη πολέμου. Διέλυσε την υλικοτεχνική υποστήριξη του Ιμπραήμ, ανάγκασε τους Αιγυπτίους να εκκενώσουν την Πελοπόννησο το 1828 και κατέστησε αναπόφευκτη την ελληνική ανεξαρτησία."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1828,
      era: {
        en: "Greek War of Independence",
        el: "Ελληνική Επανάσταση"
      },
      events: [
        {
          title: {
            en: "Ioannis Kapodistrias arrives in Greece",
            el: "Άφιξη του Ιωάννη Καποδίστρια στην Ελλάδα"
          },
          description: {
            en: "Kapodistrias assumes office as Governor of Greece and begins building the institutions of the emerging state.",
            el: "Ο Καποδίστριας αναλαμβάνει καθήκοντα ως Κυβερνήτης της Ελλάδας και αρχίζει να οικοδομεί τους θεσμούς του αναδυόμενου κράτους."
          },
          extendedDescription: {
            en: "Born in Corfu in 1776 and a former Foreign Minister of Tsar Alexander I, Ioannis Kapodistrias was elected Governor (Kyvernitis) of Greece for seven years by the Third National Assembly at Troezen. He landed at Nafplio on 7 January 1828 and moved his capital to Aegina, finding a state of about 800,000 ruined and starving people, no treasury, and rival warlords. In three years he established a national bank (the Phoenix), introduced a uniform currency, founded an orphanage and the first agricultural school on Aegina, organised the regular army around General Church and Admiral Miaoulis, expelled Ibrahim from the Peloponnese with French help under General Maison, and pushed the northern frontier as far as Arta and Volos. His autocratic methods, however, alienated the Mavromichalis clan of Mani, two of whom assassinated him on the steps of Saint Spyridon in Nafplio on 9 October 1831.",
            el: "Γεννημένος στην Κέρκυρα το 1776 και πρώην υπουργός Εξωτερικών του τσάρου Αλεξάνδρου Α΄, ο Ιωάννης Καποδίστριας εκλέχθηκε Κυβερνήτης της Ελλάδας για επτά χρόνια από τη Γ΄ Εθνοσυνέλευση της Τροιζήνας. Αποβιβάστηκε στο Ναύπλιο στις 7 Ιανουαρίου 1828 και μετέφερε την έδρα του στην Αίγινα, βρίσκοντας ένα κράτος περίπου 800.000 ρημαγμένων και πεινασμένων ανθρώπων, χωρίς ταμείο και με αντιμαχόμενους οπλαρχηγούς. Σε τρία χρόνια ίδρυσε εθνική τράπεζα (τον Φοίνικα), εισήγαγε ενιαίο νόμισμα, δημιούργησε στην Αίγινα ορφανοτροφείο και την πρώτη γεωργική σχολή, οργάνωσε τακτικό στρατό γύρω από τον στρατηγό Τσωρτς και τον ναύαρχο Μιαούλη, έδιωξε τον Ιμπραήμ από την Πελοπόννησο με γαλλική βοήθεια υπό τον στρατηγό Μαιζών και προώθησε το βόρειο σύνορο ως την Άρτα και τον Βόλο. Οι αυταρχικές μέθοδοί του ωστόσο απομάκρυναν τον οίκο των Μαυρομιχαλαίων της Μάνης, δύο από τους οποίους τον δολοφόνησαν στα σκαλιά του Αγίου Σπυρίδωνα στο Ναύπλιο, στις 9 Οκτωβρίου 1831."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1830,
      era: {
        en: "Independence",
        el: "Ανεξαρτησία"
      },
      events: [
        {
          title: {
            en: "London Protocol",
            el: "Πρωτόκολλο του Λονδίνου"
          },
          description: {
            en: "Britain, France, and Russia recognize Greek independence.",
            el: "Η Βρετανία, η Γαλλία και η Ρωσία αναγνωρίζουν την ελληνική ανεξαρτησία."
          },
          extendedDescription: {
            en: "Signed in London on 3 February 1830 by the three Protecting Powers, the Protocol upgraded the autonomous Greek principality envisaged by the Treaty of Constantinople (1829) into a fully sovereign state and made Greece the first new nation-state recognised by post-Napoleonic Europe. The borders ran from the Achelous on the west to the Spercheios on the east, leaving Thessaly, Epirus, Crete, and Macedonia under Ottoman rule, and the new state was placed under a hereditary, non-Greek monarchy whose ruler had to be acceptable to all three Powers. Prince Leopold of Saxe-Coburg, the Powers' first nominee, accepted in February but resigned in May after Kapodistrias and Russian diplomats objected to the narrow borders and uncertain loan guarantees, leaving the throne open until the choice of Otto of Bavaria in 1832.",
            el: "Υπογραμμένο στο Λονδίνο στις 3 Φεβρουαρίου 1830 από τις τρεις Προστάτιδες Δυνάμεις, το Πρωτόκολλο αναβάθμισε το αυτόνομο ελληνικό ηγεμονικό κράτος που προέβλεπε η Συνθήκη της Κωνσταντινούπολης (1829) σε πλήρως κυρίαρχο κράτος και έκανε την Ελλάδα το πρώτο νέο εθνικό κράτος που αναγνωριζόταν από τη μετα-ναπολεόντεια Ευρώπη. Τα σύνορα έτρεχαν από τον Αχελώο στα δυτικά ως τον Σπερχειό στα ανατολικά, αφήνοντας τη Θεσσαλία, την Ήπειρο, την Κρήτη και τη Μακεδονία υπό οθωμανική κυριαρχία, και το νέο κράτος τοποθετήθηκε υπό κληρονομική, μη ελληνική μοναρχία της οποίας ο ηγεμόνας έπρεπε να γίνει αποδεκτός και από τις τρεις Δυνάμεις. Ο πρίγκιπας Λεοπόλδος του Σαξ-Κόμπουργκ, η πρώτη επιλογή των Δυνάμεων, αποδέχτηκε τον Φεβρουάριο αλλά παραιτήθηκε τον Μάιο, όταν ο Καποδίστριας και ρώσοι διπλωμάτες αντέδρασαν στα στενά σύνορα και τις αβέβαιες εγγυήσεις δανείων, αφήνοντας τον θρόνο κενό ως την εκλογή του Όθωνα της Βαυαρίας το 1832."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1832,
      era: {
        en: "Independence",
        el: "Ανεξαρτησία"
      },
      events: [
        {
          title: {
            en: "Treaty of Constantinople & Arrival of King Otto",
            el: "Συνθήκη Κωνσταντινούπολης & Άφιξη του Όθωνα"
          },
          description: {
            en: "Final borders are set and Bavarian Prince Otto becomes the first King of Greece.",
            el: "Οριστικοποιούνται τα σύνορα και ο Βαυαρός πρίγκιπας Όθων γίνεται ο πρώτος Βασιλιάς της Ελλάδας."
          },
          extendedDescription: {
            en: "On 7 May 1832 the three Protecting Powers and Bavaria signed the Convention of London, offering the Greek crown to the seventeen-year-old Otto, second son of King Ludwig I, with a guaranteed loan of 60 million francs. The Treaty of Constantinople of 21 July 1832 then committed the Sublime Porte to recognise Greek independence and to pay an indemnity of 40 million Turkish piastres in exchange for sovereignty over Thessaly, Epirus, and the islands east of a line drawn through the Maliac Gulf to the mouth of the Achelous. Otto landed at Nafplio on 6 February 1833 with 3,500 Bavarian troops and a regency council of his father's ministers, who governed in his name until his majority in 1835. Their arrival closed the Ottoman period of Greek history and inaugurated the Bavarian regime that would shape the institutions, the new capital at Athens (1834), and the political fault lines of the modern Greek kingdom.",
            el: "Στις 7 Μαΐου 1832 οι τρεις Προστάτιδες Δυνάμεις και η Βαυαρία υπέγραψαν τη Σύμβαση του Λονδίνου, προσφέροντας το ελληνικό στέμμα στον δεκαεπτάχρονο Όθωνα, δευτερότοκο γιο του βασιλιά Λουδοβίκου Α΄, με εγγυημένο δάνειο 60 εκατομμυρίων φράγκων. Η Συνθήκη της Κωνσταντινούπολης της 21ης Ιουλίου 1832 δέσμευσε στη συνέχεια την Υψηλή Πύλη να αναγνωρίσει την ελληνική ανεξαρτησία και να καταβάλει αποζημίωση 40 εκατομμυρίων τουρκικών γροσίων με αντάλλαγμα την κυριαρχία στη Θεσσαλία, την Ήπειρο και τα νησιά ανατολικά γραμμής που χαρασσόταν από τον Μαλιακό κόλπο ως τις εκβολές του Αχελώου. Ο Όθων αποβιβάστηκε στο Ναύπλιο στις 6 Φεβρουαρίου 1833 με 3.500 Βαυαρούς στρατιώτες και αντιβασιλεία αποτελούμενη από υπουργούς του πατέρα του, που κυβέρνησαν στο όνομά του μέχρι την ενηλικίωσή του το 1835. Η άφιξή τους έκλεισε την οθωμανική περίοδο της ελληνικής ιστορίας και εγκαινίασε το βαυαρικό καθεστώς που θα διαμόρφωνε τους θεσμούς, τη νέα πρωτεύουσα στην Αθήνα (1834) και τις πολιτικές αντιπαλότητες του σύγχρονου ελληνικού βασιλείου."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
