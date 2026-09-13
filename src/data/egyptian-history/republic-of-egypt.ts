/** Republic of Egypt — Δημοκρατία της Αιγύπτου · Egyptian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const REPUBLIC_OF_EGYPT = {
  id: "republic-of-egypt" as const,
  label: {
    en: "Republic of Egypt",
    el: "Δημοκρατία της Αιγύπτου"
  },
  supertitle: {
    en: "Modern Egypt",
    el: "Σύγχρονη Αίγυπτος"
  },
  title: {
    en: "The Republic of Egypt",
    el: "Η Δημοκρατία της Αιγύπτου"
  },
  subtitle: {
    en: "From the proclamation of the republic and the rise of Nasser through the Suez Crisis, the Six-Day War and the Aswan High Dam, Sadat's October War and historic peace with Israel, the long Mubarak era, the January 25 Revolution and the rise of Sisi, to Egypt in the present day. Slide across the modern republic, heir to five thousand years of history on the Nile.",
    el: "Από την ανακήρυξη της δημοκρατίας και την άνοδο του Νάσερ, μέσα από την Κρίση του Σουέζ, τον Πόλεμο των Έξι Ημερών και το Υψηλό Φράγμα του Ασουάν, τον Πόλεμο του Οκτωβρίου του Σαντάτ και την ιστορική ειρήνη με το Ισραήλ, τη μακρά εποχή του Μουμπάρακ, την Επανάσταση της 25ης Ιανουαρίου και την άνοδο του Σίσι, ως την Αίγυπτο των ημερών μας. Μετακινηθείτε ανάμεσα στη σύγχρονη δημοκρατία, κληρονόμο πέντε χιλιάδων ετών ιστορίας στον Νείλο."
  },
  menuDescription: {
    en: "Nasser, the Suez Crisis, Sadat's peace, Mubarak, and the revolution of 2011.",
    el: "Ο Νάσερ, η Κρίση του Σουέζ, η ειρήνη του Σαντάτ, ο Μουμπάρακ κι η επανάσταση του 2011."
  },
  footerLabel: {
    en: "Republic of Egypt · 1952–present",
    el: "Δημοκρατία της Αιγύπτου · 1952–σήμερα"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "The Republic of Egypt",
    el: "Η Δημοκρατία της Αιγύπτου"
  },
  theme: THEMES.sage,
  timeline: [
    {
      year: 1953,
      era: {
        en: "The Republic",
        el: "Η Δημοκρατία"
      },
      events: [
        {
          title: {
            en: "The proclamation of the republic",
            el: "Η ανακήρυξη της δημοκρατίας"
          },
          description: {
            en: "A year after the Free Officers' coup, the monarchy is abolished and Egypt is declared a republic, with Muhammad Naguib as its first president.",
            el: "Έναν χρόνο μετά το πραξικόπημα των Ελεύθερων Αξιωματικών, η μοναρχία καταργείται και η Αίγυπτος ανακηρύσσεται δημοκρατία, με τον Μωχάμεντ Ναγκίμπ ως πρώτο πρόεδρό της."
          },
          extendedDescription: {
            en: "On 18 June 1953 the Revolutionary Command Council abolished the monarchy of the infant king Fuad II and proclaimed the Republic of Egypt. General Muhammad Naguib became the first president, but real power lay with the younger officers. Within a year Naguib was eased aside in a power struggle, and Gamal Abdel Nasser, the true architect of the revolution, emerged as the dominant figure who would reshape Egypt and the Arab world.",
            el: "Στις 18 Ιουνίου 1953 το Επαναστατικό Συμβούλιο Διοίκησης κατάργησε τη μοναρχία του βρέφους βασιλιά Φουάντ Β΄ και ανακήρυξε τη Δημοκρατία της Αιγύπτου. Ο στρατηγός Μωχάμεντ Ναγκίμπ έγινε ο πρώτος πρόεδρος, αλλά η πραγματική εξουσία βρισκόταν στους νεότερους αξιωματικούς. Μέσα σε έναν χρόνο ο Ναγκίμπ παραμερίστηκε σε μια διαμάχη εξουσίας, και ο Γκαμάλ Άμπντελ Νάσερ, ο πραγματικός αρχιτέκτονας της επανάστασης, αναδείχθηκε ως η κυρίαρχη μορφή που θα αναμόρφωνε την Αίγυπτο και τον αραβικό κόσμο."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1956,
      era: {
        en: "The Nasser Era",
        el: "Η Εποχή του Νάσερ"
      },
      events: [
        {
          title: {
            en: "The Suez Crisis",
            el: "Η Κρίση του Σουέζ"
          },
          description: {
            en: "Nasser nationalises the Suez Canal, provoking an invasion by Britain, France, and Israel that ends in a political triumph for Egypt and Nasser.",
            el: "Ο Νάσερ εθνικοποιεί τη Διώρυγα του Σουέζ, προκαλώντας μια εισβολή από τη Βρετανία, τη Γαλλία και το Ισραήλ που καταλήγει σε πολιτικό θρίαμβο για την Αίγυπτο και τον Νάσερ."
          },
          extendedDescription: {
            en: "After the West withdrew funding for the Aswan High Dam, Nasser nationalised the Anglo-French Suez Canal Company in July 1956 to finance the project. Britain, France, and Israel launched a secret coordinated attack in October, seizing the canal zone. But overwhelming pressure from the United States and the Soviet Union forced a humiliating withdrawal. The crisis marked the end of British and French imperial power in the region and made Nasser the hero of Arab nationalism.",
            el: "Αφού η Δύση απέσυρε τη χρηματοδότηση για το Υψηλό Φράγμα του Ασουάν, ο Νάσερ εθνικοποίησε την αγγλογαλλική Εταιρεία της Διώρυγας του Σουέζ τον Ιούλιο του 1956 για να χρηματοδοτήσει το έργο. Η Βρετανία, η Γαλλία και το Ισραήλ εξαπέλυσαν μια μυστική συντονισμένη επίθεση τον Οκτώβριο, καταλαμβάνοντας τη ζώνη της διώρυγας. Όμως η συντριπτική πίεση από τις Ηνωμένες Πολιτείες και τη Σοβιετική Ένωση επέβαλε μια ταπεινωτική υποχώρηση. Η κρίση σηματοδότησε το τέλος της βρετανικής και γαλλικής αυτοκρατορικής ισχύος στην περιοχή και κατέστησε τον Νάσερ ήρωα του αραβικού εθνικισμού."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1967,
      era: {
        en: "The Nasser Era",
        el: "Η Εποχή του Νάσερ"
      },
      events: [
        {
          title: {
            en: "The Six-Day War",
            el: "Ο Πόλεμος των Έξι Ημερών"
          },
          description: {
            en: "Israel destroys the Egyptian air force in a surprise attack and seizes the Sinai Peninsula, a devastating defeat that shakes Nasser's Egypt to its core.",
            el: "Το Ισραήλ καταστρέφει την αιγυπτιακή αεροπορία σε αιφνιδιαστική επίθεση και καταλαμβάνει τη Χερσόνησο του Σινά, μια συντριπτική ήττα που κλονίζει την Αίγυπτο του Νάσερ συθέμελα."
          },
          extendedDescription: {
            en: "In June 1967, amid rising tension, Israel launched a pre-emptive strike that wiped out the Egyptian air force on the ground and routed the army in Sinai within days, also taking the West Bank and Golan Heights from Jordan and Syria. The loss of Sinai and the closure of the Suez Canal were a catastrophe for Egypt and a profound blow to Arab nationalism. A shaken Nasser offered to resign, but mass demonstrations called him back; he died, exhausted, in 1970.",
            el: "Τον Ιούνιο του 1967, εν μέσω αυξανόμενης έντασης, το Ισραήλ εξαπέλυσε ένα προληπτικό πλήγμα που εξαφάνισε την αιγυπτιακή αεροπορία στο έδαφος και διέλυσε τον στρατό στο Σινά μέσα σε ημέρες, παίρνοντας επίσης τη Δυτική Όχθη και τα Υψώματα του Γκολάν από την Ιορδανία και τη Συρία. Η απώλεια του Σινά και το κλείσιμο της Διώρυγας του Σουέζ ήταν καταστροφή για την Αίγυπτο και βαρύ πλήγμα για τον αραβικό εθνικισμό. Ένας κλονισμένος Νάσερ προσφέρθηκε να παραιτηθεί, αλλά μαζικές διαδηλώσεις τον ανακάλεσαν· πέθανε, εξαντλημένος, το 1970."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1970,
      era: {
        en: "The Nasser Era",
        el: "Η Εποχή του Νάσερ"
      },
      events: [
        {
          title: {
            en: "The Aswan High Dam",
            el: "Το Υψηλό Φράγμα του Ασουάν"
          },
          description: {
            en: "The completion of the Aswan High Dam tames the Nile's flood, generating power and reclaiming land, but transforming the river's ancient rhythms forever.",
            el: "Η ολοκλήρωση του Υψηλού Φράγματος του Ασουάν δαμάζει την πλημμύρα του Νείλου, παράγοντας ενέργεια και αποδίδοντας γη, αλλά μεταμορφώνοντας για πάντα τους αρχαίους ρυθμούς του ποταμού."
          },
          extendedDescription: {
            en: "Built with Soviet aid and finance, the High Dam at Aswan was Nasser's great symbol of modernisation. Its vast reservoir, Lake Nasser, ended the annual inundation that had defined Egyptian life for millennia, providing flood control, year-round irrigation, and hydroelectric power. The cost was high: the displacement of Nubian communities, the loss of fertilising silt, and the international rescue of the Abu Simbel temples, which were cut up and raised above the rising waters.",
            el: "Χτισμένο με σοβιετική βοήθεια και χρηματοδότηση, το Υψηλό Φράγμα του Ασουάν ήταν το μεγάλο σύμβολο εκσυγχρονισμού του Νάσερ. Ο τεράστιος ταμιευτήρας του, η Λίμνη Νάσερ, τερμάτισε την ετήσια πλημμύρα που είχε ορίσει την αιγυπτιακή ζωή για χιλιετίες, παρέχοντας αντιπλημμυρικό έλεγχο, ολοετή άρδευση και υδροηλεκτρική ενέργεια. Το κόστος ήταν υψηλό: η εκτόπιση νουβικών κοινοτήτων, η απώλεια της γόνιμης ιλύος και η διεθνής διάσωση των ναών του Άμπου Σιμπέλ, οι οποίοι κόπηκαν και ανυψώθηκαν πάνω από τα ανερχόμενα νερά."
          },
          category: "cultural"
        }
      ]
    },
    {
      year: 1973,
      era: {
        en: "The Sadat Era",
        el: "Η Εποχή του Σαντάτ"
      },
      events: [
        {
          title: {
            en: "The October War",
            el: "Ο Πόλεμος του Οκτωβρίου"
          },
          description: {
            en: "Sadat launches a surprise attack across the Suez Canal, and though the war ends in stalemate, the crossing restores Egyptian pride and reopens the path to peace.",
            el: "Ο Σαντάτ εξαπολύει αιφνιδιαστική επίθεση διασχίζοντας τη Διώρυγα του Σουέζ, και αν και ο πόλεμος καταλήγει σε αδιέξοδο, η διάβαση αποκαθιστά την αιγυπτιακή υπερηφάνεια και ξανανοίγει τον δρόμο προς την ειρήνη."
          },
          extendedDescription: {
            en: "On 6 October 1973, during Yom Kippur, Egyptian forces under Anwar Sadat stormed across the Suez Canal and breached the Israeli Bar Lev Line, achieving a stunning initial success. Though Israel recovered and counterattacked, the war shattered the myth of Israeli invincibility and gave Egypt the leverage and the confidence to negotiate. Sadat then made the bold strategic turn away from the Soviet Union and toward the United States and a settlement with Israel.",
            el: "Στις 6 Οκτωβρίου 1973, κατά το Γιομ Κιπούρ, αιγυπτιακές δυνάμεις υπό τον Ανουάρ Σαντάτ όρμησαν διασχίζοντας τη Διώρυγα του Σουέζ και διέσπασαν την ισραηλινή Γραμμή Μπαρ Λεβ, επιτυγχάνοντας μια εντυπωσιακή αρχική επιτυχία. Αν και το Ισραήλ ανέκαμψε και αντεπιτέθηκε, ο πόλεμος συνέτριψε τον μύθο της ισραηλινής ανικητότητας και έδωσε στην Αίγυπτο τη διαπραγματευτική ισχύ και την αυτοπεποίθηση να διαπραγματευτεί. Ο Σαντάτ έκανε τότε την τολμηρή στρατηγική στροφή μακριά από τη Σοβιετική Ένωση και προς τις Ηνωμένες Πολιτείες και έναν διακανονισμό με το Ισραήλ."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1979,
      era: {
        en: "The Sadat Era",
        el: "Η Εποχή του Σαντάτ"
      },
      events: [
        {
          title: {
            en: "Peace with Israel",
            el: "Ειρήνη με το Ισραήλ"
          },
          description: {
            en: "After the Camp David Accords, Sadat signs a historic peace treaty with Israel, regaining the Sinai but isolating Egypt in the Arab world.",
            el: "Μετά τις Συμφωνίες του Καμπ Ντέιβιντ, ο Σαντάτ υπογράφει μια ιστορική συνθήκη ειρήνης με το Ισραήλ, ανακτώντας το Σινά αλλά απομονώνοντας την Αίγυπτο στον αραβικό κόσμο."
          },
          extendedDescription: {
            en: "Sadat's dramatic 1977 visit to Jerusalem led to the Camp David Accords, brokered by US President Jimmy Carter, and the Egypt–Israel Peace Treaty of 1979 — the first between Israel and an Arab state. Egypt recovered the Sinai Peninsula, and Sadat and Begin shared the Nobel Peace Prize. But much of the Arab world condemned the separate peace; Egypt was expelled from the Arab League, and in 1981 Sadat was assassinated by Islamist soldiers during a military parade.",
            el: "Η δραματική επίσκεψη του Σαντάτ στην Ιερουσαλήμ το 1977 οδήγησε στις Συμφωνίες του Καμπ Ντέιβιντ, με μεσολάβηση του Αμερικανού προέδρου Τζίμι Κάρτερ, και στη Συνθήκη Ειρήνης Αιγύπτου–Ισραήλ του 1979 — την πρώτη μεταξύ Ισραήλ και αραβικού κράτους. Η Αίγυπτος ανέκτησε τη Χερσόνησο του Σινά, και ο Σαντάτ και ο Μπεγκίν μοιράστηκαν το Νόμπελ Ειρήνης. Όμως μεγάλο μέρος του αραβικού κόσμου καταδίκασε τη χωριστή ειρήνη· η Αίγυπτος αποβλήθηκε από τον Αραβικό Σύνδεσμο, και το 1981 ο Σαντάτ δολοφονήθηκε από ισλαμιστές στρατιώτες κατά τη διάρκεια στρατιωτικής παρέλασης."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1981,
      era: {
        en: "The Mubarak Era",
        el: "Η Εποχή του Μουμπάρακ"
      },
      events: [
        {
          title: {
            en: "The long rule of Hosni Mubarak",
            el: "Η μακρά διακυβέρνηση του Χόσνι Μουμπάρακ"
          },
          description: {
            en: "Hosni Mubarak succeeds the assassinated Sadat and governs Egypt for three decades of stability, alignment with the West, and growing authoritarianism.",
            el: "Ο Χόσνι Μουμπάρακ διαδέχεται τον δολοφονημένο Σαντάτ και κυβερνά την Αίγυπτο για τρεις δεκαετίες σταθερότητας, ευθυγράμμισης με τη Δύση και αυξανόμενου αυταρχισμού."
          },
          extendedDescription: {
            en: "Vice-president Mubarak took power after Sadat's murder and ruled under near-permanent emergency law for almost thirty years. He restored Egypt's ties with the Arab world while maintaining the peace with Israel and a close alliance with the United States. His era brought a measure of stability but also entrenched corruption, a hollowed-out political system, suppression of the Muslim Brotherhood and other opposition, and deep economic inequality that bred mounting popular frustration.",
            el: "Ο αντιπρόεδρος Μουμπάρακ ανέλαβε την εξουσία μετά τη δολοφονία του Σαντάτ και κυβέρνησε υπό σχεδόν μόνιμο νόμο έκτακτης ανάγκης για σχεδόν τριάντα χρόνια. Αποκατέστησε τους δεσμούς της Αιγύπτου με τον αραβικό κόσμο διατηρώντας παράλληλα την ειρήνη με το Ισραήλ και μια στενή συμμαχία με τις Ηνωμένες Πολιτείες. Η εποχή του έφερε ένα μέτρο σταθερότητας αλλά και εδραίωσε τη διαφθορά, ένα αποδυναμωμένο πολιτικό σύστημα, την καταστολή της Μουσουλμανικής Αδελφότητας και άλλης αντιπολίτευσης, και βαθιά οικονομική ανισότητα που γέννησε αυξανόμενη λαϊκή απογοήτευση."
          },
          category: "political"
        }
      ]
    },
    {
      year: 2011,
      era: {
        en: "Revolution & After",
        el: "Επανάσταση & Έπειτα"
      },
      events: [
        {
          title: {
            en: "The January 25 Revolution",
            el: "Η Επανάσταση της 25ης Ιανουαρίου"
          },
          description: {
            en: "Inspired by the Arab Spring, mass protests centred on Cairo's Tahrir Square force Mubarak from power after thirty years of rule.",
            el: "Εμπνευσμένες από την Αραβική Άνοιξη, μαζικές διαδηλώσεις με επίκεντρο την πλατεία Ταχρίρ του Καΐρου αναγκάζουν τον Μουμπάρακ να αποχωρήσει από την εξουσία μετά από τριάντα χρόνια διακυβέρνησης."
          },
          extendedDescription: {
            en: "Beginning on 25 January 2011, millions of Egyptians took to the streets demanding 'bread, freedom, and social justice.' After eighteen days of largely peaceful protest centred on Tahrir Square, and the army's refusal to fire on the crowds, Mubarak resigned on 11 February. The revolution electrified the world, but the road that followed was turbulent: a contested transition under military rule led to Egypt's first free presidential election in 2012.",
            el: "Ξεκινώντας στις 25 Ιανουαρίου 2011, εκατομμύρια Αιγύπτιοι βγήκαν στους δρόμους απαιτώντας «ψωμί, ελευθερία και κοινωνική δικαιοσύνη». Μετά από δεκαοκτώ ημέρες κυρίως ειρηνικής διαμαρτυρίας με επίκεντρο την πλατεία Ταχρίρ, και την άρνηση του στρατού να πυροβολήσει τα πλήθη, ο Μουμπάρακ παραιτήθηκε στις 11 Φεβρουαρίου. Η επανάσταση ηλέκτρισε τον κόσμο, αλλά ο δρόμος που ακολούθησε ήταν ταραχώδης: μια αμφισβητούμενη μετάβαση υπό στρατιωτική διακυβέρνηση οδήγησε στις πρώτες ελεύθερες προεδρικές εκλογές της Αιγύπτου το 2012."
          },
          category: "political"
        }
      ]
    },
    {
      year: 2013,
      era: {
        en: "Revolution & After",
        el: "Επανάσταση & Έπειτα"
      },
      events: [
        {
          title: {
            en: "Morsi, the coup, and the rise of Sisi",
            el: "Ο Μόρσι, το πραξικόπημα και η άνοδος του Σίσι"
          },
          description: {
            en: "After a year of Muslim Brotherhood rule under Mohamed Morsi, mass protests and a military takeover led by Abdel Fattah el-Sisi reshape Egypt once again.",
            el: "Μετά από έναν χρόνο διακυβέρνησης της Μουσουλμανικής Αδελφότητας υπό τον Μοχάμεντ Μόρσι, μαζικές διαδηλώσεις και μια στρατιωτική κατάληψη της εξουσίας με επικεφαλής τον Άμπντελ Φατάχ ελ-Σίσι αναμορφώνουν ξανά την Αίγυπτο."
          },
          extendedDescription: {
            en: "Mohamed Morsi of the Muslim Brotherhood won the 2012 election but alarmed many with moves to concentrate power. Amid huge protests, the military under General Abdel Fattah el-Sisi removed him in July 2013, followed by a violent crackdown on Brotherhood supporters. Sisi was elected president in 2014 and consolidated firm control, overseeing megaprojects such as the Suez Canal expansion and a vast New Administrative Capital, while critics decried a return to authoritarian rule.",
            el: "Ο Μοχάμεντ Μόρσι της Μουσουλμανικής Αδελφότητας κέρδισε τις εκλογές του 2012 αλλά ανησύχησε πολλούς με κινήσεις συγκέντρωσης εξουσίας. Εν μέσω τεράστιων διαδηλώσεων, ο στρατός υπό τον στρατηγό Άμπντελ Φατάχ ελ-Σίσι τον απομάκρυνε τον Ιούλιο του 2013, ακολουθούμενος από μια βίαιη καταστολή των υποστηρικτών της Αδελφότητας. Ο Σίσι εξελέγη πρόεδρος το 2014 και εδραίωσε σταθερό έλεγχο, επιβλέποντας μεγάλα έργα όπως η επέκταση της Διώρυγας του Σουέζ και μια τεράστια Νέα Διοικητική Πρωτεύουσα, ενώ οι επικριτές κατήγγειλαν μια επιστροφή στην αυταρχική διακυβέρνηση."
          },
          category: "political"
        }
      ]
    },
    {
      year: 2022,
      era: {
        en: "Egypt Today",
        el: "Η Αίγυπτος Σήμερα"
      },
      events: [
        {
          title: {
            en: "Egypt in the present",
            el: "Η Αίγυπτος στο παρόν"
          },
          description: {
            en: "A nation of over a hundred million, Egypt confronts the challenges of population, water, and economy while reaffirming its ancient heritage on the world stage.",
            el: "Ένα έθνος άνω των εκατό εκατομμυρίων, η Αίγυπτος αντιμετωπίζει τις προκλήσεις του πληθυσμού, του νερού και της οικονομίας, ενώ επιβεβαιώνει την αρχαία κληρονομιά της στην παγκόσμια σκηνή."
          },
          extendedDescription: {
            en: "Modern Egypt, the most populous Arab country, faces pressing strains: a soaring population, dependence on the Nile amid the dispute over Ethiopia's Grand Renaissance Dam, food and currency crises, and questions of political freedom. Yet it remains a cultural and diplomatic heavyweight in the Arab and African worlds. The 2021 'Pharaohs' Golden Parade' of royal mummies through Cairo and the opening of the Grand Egyptian Museum near the pyramids reaffirmed the unbroken thread linking the republic to five thousand years of history along the Nile.",
            el: "Η σύγχρονη Αίγυπτος, η πολυπληθέστερη αραβική χώρα, αντιμετωπίζει πιεστικές εντάσεις: έναν εκτοξευόμενο πληθυσμό, την εξάρτηση από τον Νείλο εν μέσω της διαμάχης για το Φράγμα της Μεγάλης Αναγέννησης της Αιθιοπίας, επισιτιστικές και νομισματικές κρίσεις, και ζητήματα πολιτικής ελευθερίας. Παραμένει όμως πολιτιστικός και διπλωματικός βαρύς παίκτης στον αραβικό και αφρικανικό κόσμο. Η «Χρυσή Παρέλαση των Φαραώ» των βασιλικών μουμιών μέσα από το Κάιρο το 2021 και τα εγκαίνια του Μεγάλου Αιγυπτιακού Μουσείου κοντά στις πυραμίδες επιβεβαίωσαν το αδιάσπαστο νήμα που συνδέει τη δημοκρατία με πέντε χιλιάδες χρόνια ιστορίας κατά μήκος του Νείλου."
          },
          category: "cultural"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
