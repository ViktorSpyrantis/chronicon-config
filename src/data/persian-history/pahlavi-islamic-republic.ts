/** Pahlavi Iran & Islamic Republic — Παχλαβικό Ιράν & Ισλαμική Δημοκρατία · Persian History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const PAHLAVI_ISLAMIC_REPUBLIC = {
  id: "pahlavi-islamic-republic" as const,
  label: {
    en: "Pahlavi Iran & Islamic Republic",
    el: "Παχλαβικό Ιράν & Ισλαμική Δημοκρατία"
  },
  supertitle: {
    en: "Modern Iran",
    el: "Σύγχρονο Ιράν"
  },
  title: {
    en: "Pahlavi Iran & the Islamic Republic",
    el: "Παχλαβικό Ιράν & η Ισλαμική Δημοκρατία"
  },
  subtitle: {
    en: "From Reza Shah's authoritarian modernization and the nationalization of oil through the 1953 coup, the White Revolution, and the Islamic Revolution of 1979 that swept away the monarchy, to the war with Iraq, the Green Movement, and Iran's contested place in the world today. Slide across the years to read the major events that made modern Iran.",
    el: "Από τον αυταρχικό εκσυγχρονισμό του Ρεζά Σαχ και την εθνικοποίηση του πετρελαίου, μέσα από το πραξικόπημα του 1953, τη Λευκή Επανάσταση και την Ισλαμική Επανάσταση του 1979 που σάρωσε τη μοναρχία, ως τον πόλεμο με το Ιράκ, το Πράσινο Κίνημα και την αμφισβητούμενη θέση του Ιράν στον σημερινό κόσμο. Μετακινηθείτε ανάμεσα στα έτη για να διαβάσετε τα γεγονότα που διαμόρφωσαν το σύγχρονο Ιράν."
  },
  menuDescription: {
    en: "Oil, the Pahlavi shahs, and the 1979 revolution that made the Islamic Republic.",
    el: "Το πετρέλαιο, οι σάχηδες Παχλαβί κι η επανάσταση του 1979 που δημιούργησε την Ισλαμική Δημοκρατία."
  },
  footerLabel: {
    en: "Pahlavi Iran & Islamic Republic · 1925-Present",
    el: "Παχλαβικό Ιράν & Ισλαμική Δημοκρατία · 1925-Σήμερα"
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Pahlavi Iran & the Islamic Republic",
    el: "Παχλαβικό Ιράν & η Ισλαμική Δημοκρατία"
  },
  theme: THEMES.onyx,
  timeline: [
    {
      year: 1925,
      era: {
        en: "Reza Shah",
        el: "Ρεζά Σαχ"
      },
      events: [
        {
          title: {
            en: "Reza Shah founds the Pahlavi dynasty",
            el: "Ο Ρεζά Σαχ ιδρύει τη δυναστεία των Παχλαβί"
          },
          description: {
            en: "Reza Khan deposes the Qajars, crowns himself Reza Shah Pahlavi, and launches an authoritarian modernization of Iran.",
            el: "Ο Ρεζά Χαν καθαιρεί τους Κατζάρ, στέφεται Ρεζά Σαχ Παχλαβί και εξαπολύει έναν αυταρχικό εκσυγχρονισμό του Ιράν."
          },
          extendedDescription: {
            en: "Admiring Atatürk's Turkey, Reza Shah built roads, railways, and schools, founded the University of Tehran, curbed clerical power, and imposed Western dress. His reforms were sweeping but coercive, and his rule grew increasingly despotic as he centralized power in the throne and the army.",
            el: "Θαυμάζοντας την Τουρκία του Κεμάλ, ο Ρεζά Σαχ έχτισε δρόμους, σιδηροδρόμους και σχολεία, ίδρυσε το Πανεπιστήμιο της Τεχεράνης, περιόρισε την κληρική εξουσία και επέβαλε τη δυτική ενδυμασία. Οι μεταρρυθμίσεις του ήταν σαρωτικές αλλά καταναγκαστικές, και η διακυβέρνησή του γινόταν ολοένα πιο δεσποτική καθώς συγκέντρωνε την εξουσία στον θρόνο και τον στρατό."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Reza_shah_uniform.jpg?width=1024",
            alt: {
              en: "Reza Shah Pahlavi, founder of the Pahlavi dynasty",
              el: "Ο Ρεζά Σαχ Παχλαβί, ιδρυτής της δυναστείας των Παχλαβί"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1941,
      era: {
        en: "Occupation and Oil",
        el: "Κατοχή και Πετρέλαιο"
      },
      events: [
        {
          title: {
            en: "The Allies depose Reza Shah",
            el: "Οι Σύμμαχοι καθαιρούν τον Ρεζά Σαχ"
          },
          description: {
            en: "Britain and the Soviet Union invade Iran and force Reza Shah to abdicate in favour of his young son, Mohammad Reza.",
            el: "Η Βρετανία και η Σοβιετική Ένωση εισβάλλουν στο Ιράν και αναγκάζουν τον Ρεζά Σαχ να παραιτηθεί υπέρ του νεαρού γιου του, Μοχάμαντ Ρεζά."
          },
          extendedDescription: {
            en: "Suspicious of Reza Shah's ties to Germany and needing Iran as a supply corridor to the USSR, the Allies occupied the country. The old shah was exiled and died in South Africa. His son, Mohammad Reza Pahlavi, inherited a throne overshadowed by foreign powers and a restless, awakening politics.",
            el: "Καχύποπτοι για τους δεσμούς του Ρεζά Σαχ με τη Γερμανία και έχοντας ανάγκη το Ιράν ως διάδρομο ανεφοδιασμού προς την ΕΣΣΔ, οι Σύμμαχοι κατέλαβαν τη χώρα. Ο γέρος σάχης εξορίστηκε και πέθανε στη Νότια Αφρική. Ο γιος του, Μοχάμαντ Ρεζά Παχλαβί, κληρονόμησε έναν θρόνο επισκιασμένο από ξένες δυνάμεις και μια ανήσυχη, αφυπνιζόμενη πολιτική."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1953,
      era: {
        en: "The 1953 Coup",
        el: "Το Πραξικόπημα του 1953"
      },
      events: [
        {
          title: {
            en: "The overthrow of Mosaddegh",
            el: "Η ανατροπή του Μοσαντέκ"
          },
          description: {
            en: "A CIA- and MI6-backed coup ousts the elected prime minister Mohammad Mosaddegh after he nationalizes Iran's oil.",
            el: "Ένα πραξικόπημα με την υποστήριξη της CIA και της MI6 ανατρέπει τον εκλεγμένο πρωθυπουργό Μοχάμαντ Μοσαντέκ αφού εθνικοποιεί το πετρέλαιο του Ιράν."
          },
          extendedDescription: {
            en: "Mosaddegh's nationalization of the British-controlled oil industry led to a Western embargo and, in Operation Ajax, his overthrow. The coup restored the shah's power and left a lasting legacy of resentment at foreign interference — a grievance that would echo through the revolution a quarter-century later.",
            el: "Η εθνικοποίηση της βρετανικά ελεγχόμενης πετρελαϊκής βιομηχανίας από τον Μοσαντέκ οδήγησε σε δυτικό εμπάργκο και, στην Επιχείρηση Άτζαξ, στην ανατροπή του. Το πραξικόπημα αποκατέστησε την εξουσία του σάχη και άφησε μια διαρκή κληρονομιά δυσαρέσκειας για την ξένη ανάμιξη — ένα παράπονο που θα αντηχούσε στην επανάσταση ένα τέταρτο του αιώνα αργότερα."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Dr_Mohammad_Mosaddeq.jpg?width=1024",
            alt: {
              en: "Prime Minister Mohammad Mosaddegh, overthrown in the 1953 coup",
              el: "Ο πρωθυπουργός Μοχάμαντ Μοσαντέκ, που ανατράπηκε στο πραξικόπημα του 1953"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1963,
      era: {
        en: "The White Revolution",
        el: "Η Λευκή Επανάσταση"
      },
      events: [
        {
          title: {
            en: "The White Revolution and its opponents",
            el: "Η Λευκή Επανάσταση και οι αντίπαλοί της"
          },
          description: {
            en: "The shah launches sweeping reforms — land redistribution, women's suffrage — provoking clerical opposition led by Ayatollah Khomeini.",
            el: "Ο σάχης εξαπολύει σαρωτικές μεταρρυθμίσεις — αναδιανομή γης, δικαίωμα ψήφου στις γυναίκες — προκαλώντας την κληρική αντίδραση με επικεφαλής τον Αγιατολάχ Χομεϊνί."
          },
          extendedDescription: {
            en: "The White Revolution modernized the economy and society but uprooted traditional structures and concentrated wealth. Protests in 1963 were crushed and Khomeini was exiled, becoming the symbolic leader of an opposition that fused religious, leftist, and nationalist anger against an increasingly autocratic monarchy.",
            el: "Η Λευκή Επανάσταση εκσυγχρόνισε την οικονομία και την κοινωνία, όμως ξερίζωσε παραδοσιακές δομές και συγκέντρωσε τον πλούτο. Οι διαδηλώσεις του 1963 συνετρίβησαν και ο Χομεϊνί εξορίστηκε, γινόμενος ο συμβολικός ηγέτης μιας αντιπολίτευσης που συνένωσε τη θρησκευτική, την αριστερή και την εθνικιστική οργή ενάντια σε μια ολοένα πιο απολυταρχική μοναρχία."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1979,
      era: {
        en: "The Islamic Revolution",
        el: "Η Ισλαμική Επανάσταση"
      },
      events: [
        {
          title: {
            en: "The Islamic Revolution",
            el: "Η Ισλαμική Επανάσταση"
          },
          description: {
            en: "Mass protests topple the shah, Khomeini returns in triumph, and Iran is proclaimed an Islamic Republic.",
            el: "Μαζικές διαδηλώσεις ανατρέπουν τον σάχη, ο Χομεϊνί επιστρέφει θριαμβευτικά, και το Ιράν ανακηρύσσεται Ισλαμική Δημοκρατία."
          },
          extendedDescription: {
            en: "One of the great revolutions of the twentieth century swept away 2,500 years of monarchy. Khomeini's doctrine of velayat-e faqih placed ultimate authority in a Supreme Leader drawn from the clergy. Later that year militants seized the US embassy and held its staff hostage for 444 days, rupturing relations with the West.",
            el: "Μία από τις μεγάλες επαναστάσεις του εικοστού αιώνα σάρωσε 2.500 χρόνια μοναρχίας. Το δόγμα του Χομεϊνί περί βελαγιάτ-ε φακίχ τοποθέτησε την έσχατη εξουσία σε έναν Ανώτατο Ηγέτη προερχόμενο από τον κλήρο. Αργότερα την ίδια χρονιά μαχητές κατέλαβαν την πρεσβεία των ΗΠΑ και κράτησαν το προσωπικό της όμηρο επί 444 ημέρες, ρηγματώνοντας τις σχέσεις με τη Δύση."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mass_demonstration_in_Iran,_date_unknown.jpg?width=1024",
            alt: {
              en: "A mass demonstration in Iran during the 1979 Revolution",
              el: "Μαζική διαδήλωση στο Ιράν κατά την Επανάσταση του 1979"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 1980,
      era: {
        en: "The Iran-Iraq War",
        el: "Ο Πόλεμος Ιράν-Ιράκ"
      },
      events: [
        {
          title: {
            en: "The Iran-Iraq War",
            el: "Ο Πόλεμος Ιράν-Ιράκ"
          },
          description: {
            en: "Iraq invades, beginning an eight-year war of trenches, missiles, and chemical weapons that costs hundreds of thousands of lives.",
            el: "Το Ιράκ εισβάλλει, ξεκινώντας έναν οκταετή πόλεμο χαρακωμάτων, πυραύλων και χημικών όπλων που κοστίζει εκατοντάδες χιλιάδες ζωές."
          },
          extendedDescription: {
            en: "Saddam Hussein's invasion, hoping to exploit the revolution's chaos, instead united Iranians in a grinding war of attrition. Waves of young volunteers, the growth of the Revolutionary Guards, and the trauma of Iraqi gas attacks marked a generation. The war ended in 1988 in stalemate, with borders unchanged.",
            el: "Η εισβολή του Σαντάμ Χουσεΐν, με την ελπίδα να εκμεταλλευτεί το χάος της επανάστασης, αντίθετα ένωσε τους Ιρανούς σε έναν εξοντωτικό πόλεμο φθοράς. Κύματα νεαρών εθελοντών, η ανάπτυξη των Φρουρών της Επανάστασης και το τραύμα των ιρακινών επιθέσεων με αέρια σημάδεψαν μια γενιά. Ο πόλεμος έληξε το 1988 σε αδιέξοδο, με τα σύνορα αμετάβλητα."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1989,
      era: {
        en: "The Islamic Republic",
        el: "Η Ισλαμική Δημοκρατία"
      },
      events: [
        {
          title: {
            en: "The death of Khomeini",
            el: "Ο θάνατος του Χομεϊνί"
          },
          description: {
            en: "Ayatollah Khomeini dies; Ali Khamenei becomes Supreme Leader and Rafsanjani begins postwar reconstruction.",
            el: "Ο Αγιατολάχ Χομεϊνί πεθαίνει· ο Αλί Χαμενεΐ γίνεται Ανώτατος Ηγέτης και ο Ραφσαντζανί ξεκινά τη μεταπολεμική ανασυγκρότηση."
          },
          extendedDescription: {
            en: "The founder's death tested whether the Islamic Republic could endure. Power passed smoothly to Khamenei as Supreme Leader and to elected presidents who managed the economy, beginning a long contest between hardline and reformist currents within the system that continues to define Iranian politics.",
            el: "Ο θάνατος του ιδρυτή δοκίμασε αν η Ισλαμική Δημοκρατία μπορούσε να αντέξει. Η εξουσία πέρασε ομαλά στον Χαμενεΐ ως Ανώτατο Ηγέτη και σε εκλεγμένους προέδρους που διαχειρίζονταν την οικονομία, ξεκινώντας έναν μακρύ ανταγωνισμό ανάμεσα στα σκληροπυρηνικά και τα μεταρρυθμιστικά ρεύματα εντός του συστήματος που εξακολουθεί να ορίζει την ιρανική πολιτική."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_Ruhollah_Khomeini_By_Ali_Kaveh.jpg?width=1024",
            alt: {
              en: "Ayatollah Ruhollah Khomeini, leader of the Islamic Republic",
              el: "Ο αγιατολάχ Ρουχολάχ Χομεϊνί, ηγέτης της Ισλαμικής Δημοκρατίας"
            },
            credit: "Via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 2009,
      era: {
        en: "The Islamic Republic",
        el: "Η Ισλαμική Δημοκρατία"
      },
      events: [
        {
          title: {
            en: "The Green Movement",
            el: "Το Πράσινο Κίνημα"
          },
          description: {
            en: "Disputed elections spark the largest protests since the revolution, met with a harsh crackdown.",
            el: "Αμφισβητούμενες εκλογές πυροδοτούν τις μεγαλύτερες διαδηλώσεις από την επανάσταση, που αντιμετωπίζονται με σκληρή καταστολή."
          },
          extendedDescription: {
            en: "After the contested re-election of President Ahmadinejad, millions took to the streets demanding 'Where is my vote?' The Green Movement was suppressed and its leaders placed under house arrest, but it revealed deep fault lines in Iranian society and foreshadowed further waves of unrest over the economy and civil freedoms.",
            el: "Έπειτα από την αμφισβητούμενη επανεκλογή του προέδρου Αχμαντινετζάντ, εκατομμύρια βγήκαν στους δρόμους απαιτώντας «Πού είναι η ψήφος μου;». Το Πράσινο Κίνημα καταστάλθηκε και οι ηγέτες του τέθηκαν σε κατ' οίκον περιορισμό, όμως αποκάλυψε βαθιά ρήγματα στην ιρανική κοινωνία και προμήνυσε νέα κύματα αναταραχής για την οικονομία και τις πολιτικές ελευθερίες."
          },
          category: "political"
        }
      ]
    },
    {
      year: 2015,
      era: {
        en: "Iran and the World",
        el: "Το Ιράν και ο Κόσμος"
      },
      events: [
        {
          title: {
            en: "The nuclear deal and the sanctions era",
            el: "Η πυρηνική συμφωνία και η εποχή των κυρώσεων"
          },
          description: {
            en: "Iran and world powers sign the nuclear accord (JCPOA), but its later collapse renews confrontation and economic hardship.",
            el: "Το Ιράν και οι παγκόσμιες δυνάμεις υπογράφουν την πυρηνική συμφωνία (JCPOA), όμως η μετέπειτα κατάρρευσή της ανανεώνει την αντιπαράθεση και την οικονομική δυσπραγία."
          },
          extendedDescription: {
            en: "The 2015 agreement traded limits on Iran's nuclear programme for sanctions relief, briefly opening the economy. The US withdrawal in 2018 and reimposed sanctions deepened Iran's isolation and hardship, while regional rivalries and renewed protest movements — including the 2022 unrest after the death of Mahsa Amini — kept the country at the centre of world affairs.",
            el: "Η συμφωνία του 2015 αντάλλαξε περιορισμούς στο πυρηνικό πρόγραμμα του Ιράν με άρση κυρώσεων, ανοίγοντας για λίγο την οικονομία. Η αποχώρηση των ΗΠΑ το 2018 και η επαναφορά των κυρώσεων βάθυναν την απομόνωση και τη δυσπραγία του Ιράν, ενώ οι περιφερειακοί ανταγωνισμοί και τα ανανεωμένα κινήματα διαμαρτυρίας — μεταξύ τους η αναταραχή του 2022 μετά τον θάνατο της Μάχσα Αμινί — κράτησαν τη χώρα στο επίκεντρο των παγκόσμιων υποθέσεων."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
