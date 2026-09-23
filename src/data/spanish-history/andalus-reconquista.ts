/** Al-Andalus & the Reconquista — Αλ-Άνδαλους & Reconquista · Spanish History */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const ANDALUS_RECONQUISTA = {
  id: "andalus-reconquista" as const,
  label: {
    en: "Al-Andalus & the Reconquista",
    el: "Αλ-Άνδαλους & Reconquista"
  },
  supertitle: {
    en: "al-Andalus",
    el: "αλ-Άνδαλους"
  },
  title: {
    en: "Al-Andalus & the Reconquista",
    el: "Αλ-Άνδαλους & Reconquista"
  },
  subtitle: {
    en: "From Pelagius at Covadonga and Abd al-Rahman's foundation of the Emirate of Córdoba through the caliphate of the Umayyads, Madinat al-Zahra and Almanzor's raids, the taifa kingdoms and the school of translators at Toledo, the Almoravid and Almohad crossings, the great Christian victory at Las Navas de Tolosa and the conquests of Fernando III, the Alhambra of the Nasrids, the pogroms of 1391 and the marriage of the Catholic Monarchs, to the fall of Granada, the Alhambra Decree, and Columbus's landfall in 1492. Slide across seven centuries of conquest, convivencia, and Reconquista.",
    el: "Από τον Πελάγιο στην Κοβαντόνγκα και την ίδρυση του Εμιράτου της Κόρδοβας από τον Αμπντ αρ-Ραχμάν, μέσα από το χαλιφάτο των Ομεϋαδών, τη Μαντινάτ αλ-Ζάχρα και τις επιδρομές του Αλμανθόρ, τα βασίλεια των ταΐφα και τη σχολή των μεταφραστών του Τολέδου, τις διαβάσεις των Αλμοραβιδών και των Αλμοχαδών, τη μεγάλη χριστιανική νίκη στη Λας Νάβας ντε Τολόσα και τις κατακτήσεις του Φερνάντο Γ΄, την Αλάμπρα των Νασριδών, τα πογκρόμ του 1391 και τον γάμο των Καθολικών Μοναρχών, ως την πτώση της Γρανάδας, το Διάταγμα της Αλάμπρας και την προσγείωση του Κολόμβου το 1492. Μετακινηθείτε ανάμεσα σε επτά αιώνες κατάκτησης, convivencia και Reconquista."
  },
  menuDescription: {
    en: "Al-Andalus and the Christian kingdoms, from Covadonga to the fall of Granada in 1492.",
    el: "Η Αλ-Άνδαλους και τα χριστιανικά βασίλεια, από την Κοβαντόνγκα ως την πτώση της Γρανάδας το 1492."
  },
  footerLabel: {
    en: "Al-Andalus & the Reconquista · 711–1492 CE",
    el: "Αλ-Άνδαλους & Reconquista · 711–1492 μ.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Al-Andalus & the Reconquista",
    el: "Αλ-Άνδαλους & Reconquista"
  },
  theme: THEMES.copper,
  timeline: [
    {
      year: 722,
      era: {
        en: "Asturias",
        el: "Αστούριας"
      },
      events: [
        {
          title: {
            en: "Pelagius at Covadonga",
            el: "Ο Πελάγιος στην Κοβαντόνγκα"
          },
          description: {
            en: "In a narrow valley of the Picos de Europa, the Visigothic exile Pelagius defeats a Muslim column under Munuza and is acclaimed king by his followers — the legendary origin of the Christian kingdom of Asturias and of the Reconquista.",
            el: "Σε μια στενή κοιλάδα των Πίκος ντε Εουρόπα, ο Βισιγότθος εξόριστος Πελάγιος νικά μουσουλμανικό απόσπασμα υπό τον Μουνούζα και ανακηρύσσεται βασιλιάς από τους ακολούθους του — η θρυλική αφετηρία του χριστιανικού βασιλείου της Αστούριας και της Reconquista."
          },
          extendedDescription: {
            en: "The earliest source, the Mozarabic Chronicle of 754, mentions only a 'rebellion of Pelagius' in the northern mountains. By the time of the Chronicle of Alfonso III a century later, Covadonga had become a divine victory: the Virgin turned Muslim arrows back upon the besiegers, and a mountain collapsed upon the fleeing army. Whatever its scale, the skirmish founded a redoubt that Moorish governors could not easily reach — and from which, two centuries later, the kingdoms of Asturias and León would advance south.",
            el: "Η παλαιότερη πηγή, το Μοζαραβικό Χρονικό του 754, αναφέρει μόνο «εξέγερση του Πελαγίου» στα βόρεια όρη. Έναν αιώνα αργότερα, στο Χρονικό του Αλφόνσου Γ΄, η Κοβαντόνγκα έχει γίνει θεϊκή νίκη: η Παναγία στρέφει τα βέλη των μουσουλμάνων πίσω στους πολιορκητές και ένα βουνό καταρρέει πάνω στον στρατό που υποχωρεί. Όποια κι αν ήταν η κλίμακά της, η αψιμαχία εδραίωσε ένα προγεφύρωμα όπου οι μαυριτανοί διοικητές δεν μπορούσαν να φτάσουν εύκολα — και από εκεί, δύο αιώνες αργότερα, τα βασίλεια της Αστούριας και της Λεόν θα προέλαυναν νότια."
          },
          category: "military"
        }
      ]
    },
    {
      year: 756,
      era: {
        en: "Independent Córdoba",
        el: "Ανεξάρτητη Κόρδοβα"
      },
      events: [
        {
          title: {
            en: "Abd al-Rahman I founds the Emirate of Córdoba",
            el: "Ο Αμπντ αρ-Ραχμάν Α΄ ιδρύει το Εμιράτο της Κόρδοβας"
          },
          description: {
            en: "The young Umayyad prince Abd al-Rahman, sole survivor of the dynasty's massacre by the Abbasids in 750, lands in al-Andalus, defeats the Abbasid governor, and proclaims himself emir at Córdoba — founding a state that will rule Iberian Islam for nearly three centuries.",
            el: "Ο νεαρός Ομεϋάδης πρίγκιπας Αμπντ αρ-Ραχμάν, μοναδικός επιζών από τη σφαγή της δυναστείας του από τους Αββασίδες το 750, αποβιβάζεται στην αλ-Άνδαλους, νικά τον αββασίδη διοικητή και ανακηρύσσεται εμίρης στην Κόρδοβα — ιδρύοντας ένα κράτος που θα κυβερνήσει το ιβηρικό Ισλάμ για τρεις σχεδόν αιώνες."
          },
          extendedDescription: {
            en: "Abd al-Rahman's flight from Damascus through the Levant, North Africa, and Morocco — a fugitive of nineteen swimming the Euphrates while his brother was caught and killed — is one of the great romances of early Islamic history. As emir he built irrigation works, settled Syrian troops as a counterweight to the Berber and muladí factions, and in 785 began the Great Mosque of Córdoba on the site of the Visigothic basilica of Saint Vincent, whose forest of horseshoe arches would astonish travellers for a thousand years.",
            el: "Η φυγή του Αμπντ αρ-Ραχμάν από τη Δαμασκό μέσω της Λεβάντης, της Βόρειας Αφρικής και του Μαρόκου — ένας φυγάς δεκαεννέα ετών που διασχίζει κολυμπώντας τον Ευφράτη ενώ ο αδελφός του πιάνεται και σκοτώνεται — είναι μία από τις μεγάλες μυθιστορίες της πρώιμης ισλαμικής ιστορίας. Ως εμίρης κατασκεύασε αρδευτικά έργα, εγκατέστησε σύριους στρατιώτες ως αντίβαρο στις βερβερικές και μουλαντί φατρίες, και το 785 ξεκίνησε το Μέγα Τέμενος της Κόρδοβας στη θέση της βισιγοτθικής βασιλικής του Αγίου Βικεντίου, του οποίου το δάσος των πεταλόμορφων τόξων θα ξάφνιαζε ταξιδιώτες επί χίλια χρόνια."
          },
          category: "political"
        }
      ]
    },
    {
      year: 929,
      era: {
        en: "Caliphate of Córdoba",
        el: "Χαλιφάτο της Κόρδοβας"
      },
      events: [
        {
          title: {
            en: "Abd al-Rahman III proclaims the Caliphate",
            el: "Ο Αμπντ αρ-Ραχμάν Γ΄ ανακηρύσσει το Χαλιφάτο"
          },
          description: {
            en: "After bringing the rebel cities and Berber chiefs to heel, Abd al-Rahman III takes the title of Caliph and 'Commander of the Faithful', breaking definitively with Baghdad and Fatimid Tunis and giving Córdoba a rank with the great cities of the Mediterranean world.",
            el: "Αφού έχει υποτάξει τις στασιαστικές πόλεις και τους βέρβερους αρχηγούς, ο Αμπντ αρ-Ραχμάν Γ΄ προσλαμβάνει τον τίτλο του Χαλίφη και «Αρχηγού των Πιστών», σπάζοντας οριστικά με τη Βαγδάτη και τη Φατιμιδική Τυνησία και δίνοντας στην Κόρδοβα θέση δίπλα στις μεγάλες πόλεις της Μεσογείου."
          },
          extendedDescription: {
            en: "Under Abd al-Rahman III and his son al-Hakam II, Córdoba grew to perhaps half a million inhabitants — the largest city in Western Europe — and acquired paved streets, public baths, and a library of four hundred thousand volumes. The palatine city of Madinat al-Zahra, founded in 936 and built in white marble against the slope of the Sierra Morena, dazzled embassies from Constantinople and the Holy Roman Empire alike. The age of the Cordoban caliphate would be remembered as al-Andalus's golden century.",
            el: "Υπό τον Αμπντ αρ-Ραχμάν Γ΄ και τον γιο του αλ-Χακάμ Β΄, η Κόρδοβα έφτασε ίσως το μισό εκατομμύριο κατοίκους — η μεγαλύτερη πόλη της Δυτικής Ευρώπης — και απέκτησε πλακόστρωτους δρόμους, δημόσια λουτρά και βιβλιοθήκη τετρακοσίων χιλιάδων τόμων. Η ανακτορική πόλη Μαντινάτ αλ-Ζάχρα, που ιδρύθηκε το 936 και χτίστηκε με λευκό μάρμαρο στις πλαγιές της Σιέρα Μορένα, εντυπωσίαζε πρεσβείες από την Κωνσταντινούπολη και από την Αγία Ρωμαϊκή Αυτοκρατορία εξίσου. Ο αιώνας του χαλιφάτου της Κόρδοβας θα θυμόταν ως ο χρυσός αιώνας της αλ-Άνδαλους."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mezquita_de_C%C3%B3rdoba_desde_el_aire_(C%C3%B3rdoba,_Espa%C3%B1a).jpg?width=1024",
            alt: {
              en: "The Great Mosque of Córdoba",
              el: "Το Μεγάλο Τζαμί της Κόρδοβα"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    },
    {
      year: 997,
      era: {
        en: "The age of al-Mansur",
        el: "Η εποχή του αλ-Μανσούρ"
      },
      events: [
        {
          title: {
            en: "Almanzor sacks Santiago de Compostela",
            el: "Ο Αλμανθόρ λεηλατεί το Σαντιάγο ντε Κομποστέλα"
          },
          description: {
            en: "The hajib al-Mansur — Almanzor in the Christian sources — leads his Berber army through Galicia and sacks the pilgrim shrine of Saint James, carrying off its bells to be hung as lamps in the Great Mosque of Córdoba.",
            el: "Ο χατζίμπ αλ-Μανσούρ — Αλμανθόρ στις χριστιανικές πηγές — οδηγεί τον βέρβερο στρατό του διαμέσου της Γαλικίας και λεηλατεί το προσκύνημα του Αγίου Ιακώβου, μεταφέροντας τις καμπάνες του για να κρεμαστούν ως καντήλια στο Μέγα Τέμενος της Κόρδοβας."
          },
          extendedDescription: {
            en: "Al-Mansur, vizier and effective ruler under the boy caliph Hisham II, mounted some fifty-seven campaigns against the Christian north between 977 and 1002. The Andalusi armies could now strike at will from Barcelona to León, and the Christian kingdoms paid tribute. Yet Almanzor's reliance on Berber mercenaries and his open contempt for the caliph fatally hollowed out the dynasty. Within thirty years of his death the caliphate would dissolve into civil war, the fitna of 1009–1031.",
            el: "Ο αλ-Μανσούρ, βεζίρης και πραγματικός κυβερνήτης υπό τον παιδί-χαλίφη Χισάμ Β΄, οργάνωσε γύρω στις πενήντα επτά εκστρατείες κατά του χριστιανικού βορρά μεταξύ 977 και 1002. Οι ανδαλουσιανοί στρατοί μπορούσαν τώρα να χτυπούν κατά βούληση από τη Βαρκελώνη ως τη Λεόν, και τα χριστιανικά βασίλεια πλήρωναν φόρο. Όμως η εξάρτηση του Αλμανθόρ από βέρβερους μισθοφόρους και η ανοιχτή του περιφρόνηση για τον χαλίφη υπέσκαψαν θανάσιμα τη δυναστεία. Μέσα σε τριάντα χρόνια από τον θάνατό του το χαλιφάτο θα διαλυόταν σε εμφύλιο, τη φίτνα του 1009–1031."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1031,
      era: {
        en: "Taifa kingdoms",
        el: "Βασίλεια ταΐφα"
      },
      events: [
        {
          title: {
            en: "The caliphate dissolves into taifas",
            el: "Το χαλιφάτο διασπάται σε ταΐφα"
          },
          description: {
            en: "After more than twenty years of civil war between Umayyad, Berber, and Slav factions, the notables of Córdoba abolish the caliphate. Al-Andalus splinters into more than thirty mutually warring city-states — the muluk al-tawa'if, 'party kings'.",
            el: "Ύστερα από είκοσι και πλέον χρόνια εμφυλίου μεταξύ ομεϋαδικών, βερβερικών και σλαβικών φατριών, οι ευγενείς της Κόρδοβας καταργούν το χαλιφάτο. Η αλ-Άνδαλους κατακερματίζεται σε πάνω από τριάντα αλληλομαχόμενα κρατίδια — τους μουλούκ αλ-ταουάιφ, «βασιλιάδες των φατριών»."
          },
          extendedDescription: {
            en: "The taifa courts of Seville, Granada, Toledo, Zaragoza, and Valencia, though militarily weak, became extraordinarily brilliant centres of poetry, philosophy, and astronomy. The Jewish vizier Samuel ibn Naghrillah of Granada, the poet-king al-Mu'tamid of Seville, the astronomer al-Zarqali of Toledo — all flourished in this fragmented age. The price was tribute to the Christian north: the parias paid by the taifas to León-Castile and to Aragon would soon finance the cathedrals of Compostela and Jaca.",
            el: "Οι αυλές των ταΐφα της Σεβίλλης, της Γρανάδας, του Τολέδου, της Σαραγόσας και της Βαλένθια, αν και στρατιωτικά αδύναμες, έγιναν εξαιρετικά λαμπρά κέντρα ποίησης, φιλοσοφίας και αστρονομίας. Ο Εβραίος βεζίρης Σαμουήλ ιμπν Ναγκρίλα της Γρανάδας, ο ποιητής-βασιλιάς αλ-Μουταμίντ της Σεβίλλης, ο αστρονόμος αλ-Ζαρκάλι του Τολέδου — όλοι άνθησαν σε αυτήν τη διασπασμένη εποχή. Το τίμημα ήταν φόρος στον χριστιανικό βορρά: τα parias που πλήρωναν τα ταΐφα στη Λεόν-Καστίλη και στην Αραγκόνα θα χρηματοδοτούσαν σύντομα τους καθεδρικούς της Κομποστέλα και της Χάκα."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1085,
      era: {
        en: "Reconquista resumes",
        el: "Η Reconquista αναζωπυρώνεται"
      },
      events: [
        {
          title: {
            en: "Alfonso VI takes Toledo",
            el: "Ο Αλφόνσος ΣΤ΄ καταλαμβάνει το Τολέδο"
          },
          description: {
            en: "After a long blockade, Alfonso VI of León-Castile receives the surrender of Toledo, the ancient Visigothic capital. The first great taifa to fall to a Christian king transforms the strategic and intellectual map of the peninsula.",
            el: "Ύστερα από μακρύ αποκλεισμό, ο Αλφόνσος ΣΤ΄ της Λεόν-Καστίλης δέχεται την παράδοση του Τολέδου, της αρχαίας βισιγοτθικής πρωτεύουσας. Το πρώτο μεγάλο ταΐφα που πέφτει σε χριστιανό βασιλιά μεταμορφώνει τον στρατηγικό και πνευματικό χάρτη της χερσονήσου."
          },
          extendedDescription: {
            en: "The peaceful surrender preserved the city's mosques, Mozarabic churches, and great Arabic library. Within a generation Toledo had become the school of translators where Gerard of Cremona, Dominicus Gundissalinus, and others rendered Aristotle, Avicenna, Euclid, and Ptolemy from Arabic into Latin. The recovery of Greek science in twelfth-century Europe ran very largely through Toledo — and behind that, through al-Andalus.",
            el: "Η ειρηνική παράδοση διατήρησε τα τεμένη της πόλης, τις μοζαραβικές εκκλησίες και τη μεγάλη αραβική βιβλιοθήκη. Μέσα σε μία γενιά το Τολέδο είχε γίνει η σχολή των μεταφραστών όπου ο Γεράρδος της Κρεμόνας, ο Δομινικός Γκουντισαλίνι και άλλοι μετέφραζαν τον Αριστοτέλη, τον Αβικέννα, τον Ευκλείδη και τον Πτολεμαίο από τα αραβικά στα λατινικά. Η ανάκτηση της ελληνικής επιστήμης στην Ευρώπη του 12ου αιώνα διήλθε σε πολύ μεγάλο βαθμό μέσα από το Τολέδο — και πίσω από αυτό, μέσα από την αλ-Άνδαλους."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1086,
      era: {
        en: "Almoravids",
        el: "Αλμοραβίδες"
      },
      events: [
        {
          title: {
            en: "The Almoravids cross at Sagrajas",
            el: "Οι Αλμοραβίδες περνούν στη Σαγκράχας"
          },
          description: {
            en: "Summoned by the alarmed taifa kings, the Almoravid amir Yusuf ibn Tashfin crosses from Morocco and routs Alfonso VI at Sagrajas (al-Zallaqa) near Badajoz, halting the Christian advance and ushering in two generations of Berber rule over al-Andalus.",
            el: "Καλεσμένος από τους ανήσυχους βασιλιάδες των ταΐφα, ο εμίρης των Αλμοραβιδών Γιουσούφ ιμπν Τασφίν περνά από το Μαρόκο και τρέπει σε φυγή τον Αλφόνσο ΣΤ΄ στη Σαγκράχας (αλ-Ζαλάκα) κοντά στο Μπαντάχοθ, σταματώντας τη χριστιανική προέλαση και εγκαινιάζοντας δύο γενιές βερβερικής κυριαρχίας στην αλ-Άνδαλους."
          },
          extendedDescription: {
            en: "Ibn Tashfin returned to Morocco after the victory, but in 1090 came back to depose the taifa kings one after another. The puritanical Almoravids, fresh from the Sahara, disapproved of the cultivated court life of Seville and Granada; the Jewish viziers of the old taifas were expelled or worse. In 1094 the Castilian warlord Rodrigo Díaz de Vivar — el Cid — would carve out his own princedom at Valencia, his death in 1099 already a piece of Castilian legend.",
            el: "Ο ιμπν Τασφίν επέστρεψε στο Μαρόκο μετά τη νίκη, αλλά το 1090 ξαναγύρισε για να καθαιρέσει διαδοχικά τους βασιλιάδες των ταΐφα. Οι αυστηροί Αλμοραβίδες, νωπά από τη Σαχάρα, αποδοκίμαζαν την καλλιεργημένη αυλική ζωή της Σεβίλλης και της Γρανάδας· οι Εβραίοι βεζίρηδες των παλαιών ταΐφα εξορίστηκαν ή χειρότερα. Το 1094 ο καστιλιάνος πολέμαρχος Ροδρίγο Ντίαθ ντε Βιβάρ — ο Σιντ — θα έκοβε δικό του πριγκιπάτο στη Βαλένθια, με τον θάνατό του το 1099 ήδη μέρος του καστιλιάνικου θρύλου."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1212,
      era: {
        en: "Las Navas de Tolosa",
        el: "Λας Νάβας ντε Τολόσα"
      },
      events: [
        {
          title: {
            en: "Crusade at Las Navas de Tolosa",
            el: "Σταυροφορία στη Λας Νάβας ντε Τολόσα"
          },
          description: {
            en: "On 16 July, a coalition led by Alfonso VIII of Castile, with Pedro II of Aragon, Sancho VII of Navarre, and the bishops of half Iberia, breaks the army of the Almohad caliph al-Nasir in a single day at Las Navas de Tolosa in the Sierra Morena.",
            el: "Στις 16 Ιουλίου, συμμαχία υπό τον Αλφόνσο Η΄ της Καστίλης, με τον Πέδρο Β΄ της Αραγκόνας, τον Σάντσο Ζ΄ της Ναβάρας και τους επισκόπους της μισής Ιβηρικής, συντρίβει σε μία ημέρα τον στρατό του Αλμοχάδη χαλίφη αλ-Νάσιρ στη Λας Νάβας ντε Τολόσα, στη Σιέρα Μορένα."
          },
          extendedDescription: {
            en: "The Almohad caliphate, which had crossed in the 1140s as a new wave of Maghrebi reformers and crushed Castile at Alarcos in 1195, never recovered from Las Navas. The shepherd Martín Halaja was remembered as having shown the crusaders the secret pass that turned the Almohad position. Within a generation Córdoba (1236), Valencia (1238), and Seville (1248) would fall to Christian armies, and the political map of the peninsula would be set for the next two and a half centuries.",
            el: "Το χαλιφάτο των Αλμοχαδών, που είχε περάσει τη δεκαετία του 1140 ως νέο κύμα μαγκρεμπιανών μεταρρυθμιστών και είχε συντρίψει την Καστίλη στο Αλαρκός το 1195, δεν συνήλθε ποτέ από τη Λας Νάβας. Ο βοσκός Μαρτίν Χαλάχα έμεινε στη μνήμη πως έδειξε στους σταυροφόρους το μυστικό πέρασμα που γύρισε την αλμοχαδική θέση. Μέσα σε μία γενιά η Κόρδοβα (1236), η Βαλένθια (1238) και η Σεβίλλη (1248) θα έπεφταν σε χριστιανικούς στρατούς, και ο πολιτικός χάρτης της χερσονήσου θα οριζόταν για τους επόμενους δυόμισι αιώνες."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1238,
      era: {
        en: "Emirate of Granada",
        el: "Εμιράτο της Γρανάδας"
      },
      events: [
        {
          title: {
            en: "Muhammad I founds the Nasrid kingdom",
            el: "Ο Μωάμεθ Α΄ ιδρύει το Νασρίδειο βασίλειο"
          },
          description: {
            en: "Muhammad ibn al-Ahmar enters Granada and is acclaimed sultan, founding the Nasrid dynasty that will hold the last Muslim state of Iberia for two and a half centuries — a tributary of Castile but a brilliant centre of arts and learning.",
            el: "Ο Μωάμεθ ιμπν αλ-Αχμάρ μπαίνει στη Γρανάδα και ανακηρύσσεται σουλτάνος, ιδρύοντας τη δυναστεία των Νασριδών που θα κρατήσει το τελευταίο μουσουλμανικό κράτος της Ιβηρικής για δυόμισι αιώνες — φόρου υποτελή στην Καστίλη αλλά λαμπρό κέντρο τεχνών και επιστημών."
          },
          extendedDescription: {
            en: "Sheltered behind the Sierra Nevada and bound to Castile by a treaty of vassalage signed at Jaén in 1246, Granada flourished as a refuge for Andalusi Muslims fleeing the Castilian advance. Its sultans, especially Yusuf I and Muhammad V in the fourteenth century, built the Alhambra into the supreme monument of Hispano-Moorish architecture: the Court of the Lions, the Hall of the Two Sisters, and the Comares Tower stand among the most refined achievements of medieval Islam.",
            el: "Προστατευμένο πίσω από τη Σιέρα Νεβάδα και δεσμευμένο στην Καστίλη με συνθήκη υποτέλειας που υπογράφηκε στο Χαέν το 1246, η Γρανάδα άνθησε ως καταφύγιο των ανδαλουσιανών μουσουλμάνων που έφευγαν από την καστιλιανή προέλαση. Οι σουλτάνοι της, ιδίως ο Γιουσούφ Α΄ και ο Μωάμεθ Ε΄ τον 14ο αιώνα, διαμόρφωσαν την Αλάμπρα στο ύψιστο μνημείο της ισπανομαυριτανικής αρχιτεκτονικής: η Αυλή των Λεόντων, η Αίθουσα των Δύο Αδελφών και ο Πύργος των Κομάρες συγκαταλέγονται στα πιο εκλεπτυσμένα επιτεύγματα του μεσαιωνικού Ισλάμ."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1248,
      era: {
        en: "Great conquests",
        el: "Μεγάλες κατακτήσεις"
      },
      events: [
        {
          title: {
            en: "Fernando III takes Seville",
            el: "Ο Φερνάντο Γ΄ καταλαμβάνει τη Σεβίλλη"
          },
          description: {
            en: "After a fifteen-month siege, the Almohad capital of Seville surrenders to Fernando III of Castile and León. Its great mosque becomes the cathedral, its minaret the Giralda, and Castile reaches the Atlantic at Cádiz and the bay of Algeciras.",
            el: "Ύστερα από δεκαπεντάμηνη πολιορκία, η αλμοχαδική πρωτεύουσα της Σεβίλλης παραδίδεται στον Φερνάντο Γ΄ της Καστίλης και της Λεόν. Το μεγάλο της τέμενος γίνεται καθεδρικός, ο μιναρές του η Χιράλντα, και η Καστίλη φτάνει στον Ατλαντικό στο Κάδιθ και στον κόλπο της Αλχεθίρας."
          },
          extendedDescription: {
            en: "Fernando, canonised in 1671, would be remembered as the great king who united León and Castile permanently (1230), patronised the new universities of Salamanca and Valladolid, and pressed the Reconquista to its near-completion. By his death in 1252 only the Nasrid kingdom of Granada and a few coastal districts remained Muslim. His son Alfonso X, called the Wise, would commission the great cultural projects of the second half of the century — the Cantigas, the Siete Partidas, the Alfonsine Tables.",
            el: "Ο Φερνάντο, αγιοκαταχθείς το 1671, θα θυμόταν ως ο μεγάλος βασιλιάς που ένωσε οριστικά τη Λεόν και την Καστίλη (1230), προστάτεψε τα νέα πανεπιστήμια της Σαλαμάνκα και του Βαλλαδολίδ και ώθησε τη Reconquista σχεδόν στην ολοκλήρωσή της. Στον θάνατό του το 1252 μόνο το Νασρίδειο βασίλειο της Γρανάδας και λίγα παράκτια διαμερίσματα παρέμεναν μουσουλμανικά. Ο γιος του Αλφόνσος Ι΄, ο Σοφός, θα ανέθετε τα μεγάλα πολιτιστικά έργα του δεύτερου μισού του αιώνα — τα Καντίγκας, τις Επτά Παρτίδες, τους Αλφονσινούς Πίνακες."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1340,
      era: {
        en: "Río Salado",
        el: "Ρίο Σαλάδο"
      },
      events: [
        {
          title: {
            en: "Río Salado and the end of African intervention",
            el: "Ρίο Σαλάδο και το τέλος της αφρικανικής παρέμβασης"
          },
          description: {
            en: "Beside the river Salado near Tarifa, Alfonso XI of Castile, joined by Alfonso IV of Portugal, smashes a joint Marinid–Granadan army. The defeat ends seven centuries of attempted Muslim invasions from the Maghreb.",
            el: "Δίπλα στον ποταμό Σαλάδο κοντά στην Ταρίφα, ο Αλφόνσος ΙΑ΄ της Καστίλης, μαζί με τον Αλφόνσο Δ΄ της Πορτογαλίας, συντρίβει συνδυασμένο μαρινίδειο-γρανάδιο στρατό. Η ήττα τερματίζει επτά αιώνες προσπαθειών μουσουλμανικής εισβολής από τη Μαγκρέμπη."
          },
          extendedDescription: {
            en: "The chronicler Pero López de Ayala called Salado 'the greatest battle ever fought in Spain'. The booty was so vast that Castilian markets devalued the price of gold for two years; the Marinid emir Abu al-Hasan fled to Algeciras and Africa. Soon afterwards Alfonso XI took Algeciras itself (1344), securing the Strait. The Reconquista now paused for over a century while Castile turned to civil war and Trastámara dynastic strife, and Granada to internal feud.",
            el: "Ο χρονικογράφος Πέρο Λόπεθ ντε Αγιάλα αποκάλεσε τη Σαλάδο «τη μεγαλύτερη μάχη που δόθηκε ποτέ στην Ισπανία». Τα λάφυρα ήταν τόσο μεγάλα ώστε οι καστιλιανές αγορές υποτίμησαν την τιμή του χρυσού για δύο χρόνια· ο μαρινίδειος εμίρης Αμπού αλ-Χασάν διέφυγε στην Αλχεθίρας και την Αφρική. Λίγο αργότερα ο Αλφόνσος ΙΑ΄ κατέλαβε την ίδια την Αλχεθίρας (1344), εξασφαλίζοντας τα Στενά. Η Reconquista σταμάτησε τότε για πάνω από έναν αιώνα, ενώ η Καστίλη στρεφόταν στον εμφύλιο και στις τραστάμαρες δυναστικές έριδες και η Γρανάδα σε εσωτερικές διαμάχες."
          },
          category: "military"
        }
      ]
    },
    {
      year: 1391,
      era: {
        en: "Pogroms and conversos",
        el: "Πογκρόμ και conversos"
      },
      events: [
        {
          title: {
            en: "The pogroms of 1391",
            el: "Τα πογκρόμ του 1391"
          },
          description: {
            en: "Beginning in Seville on the preaching of archdeacon Ferrand Martínez, anti-Jewish riots sweep the Iberian cities. Hundreds are killed, and tens of thousands accept baptism under duress — creating a converso population whose ambiguous status will haunt Spain for generations.",
            el: "Ξεκινώντας στη Σεβίλλη με το κήρυγμα του αρχιδιακόνου Φεράν Μαρτίνεθ, αντιεβραϊκοί στασιασμοί σαρώνουν τις πόλεις της Ιβηρικής. Εκατοντάδες σκοτώνονται και δεκάδες χιλιάδες δέχονται τον βαπτισμό υπό πίεση — δημιουργώντας έναν πληθυσμό conversos του οποίου το αμφίσημο καθεστώς θα στοιχειώσει την Ισπανία για γενιές."
          },
          extendedDescription: {
            en: "The pogroms of 1391 destroyed the great Jewish communities of Seville, Valencia, and Barcelona. The conversos who emerged — many sincere Christians, many crypto-Jews, many somewhere between — entered the universities, the royal bureaucracy, and the Church in numbers. Within a century the suspicion of crypto-Judaism would lead to the establishment of the Spanish Inquisition (1478) under Tomás de Torquemada — and to the increasing obsession with limpieza de sangre, purity of blood, that would distinguish early modern Castile.",
            el: "Τα πογκρόμ του 1391 κατέστρεψαν τις μεγάλες εβραϊκές κοινότητες της Σεβίλλης, της Βαλένθια και της Βαρκελώνης. Οι conversos που προέκυψαν — πολλοί ειλικρινείς χριστιανοί, πολλοί κρυπτοεβραίοι, πολλοί κάπου ενδιάμεσα — μπήκαν στα πανεπιστήμια, στη βασιλική γραφειοκρατία και στην Εκκλησία σε μεγάλους αριθμούς. Μέσα σε έναν αιώνα η υποψία του κρυπτοϊουδαϊσμού θα οδηγούσε στην ίδρυση της Ισπανικής Ιεράς Εξέτασης (1478) υπό τον Τομάς ντε Τορκεμάδα — και στην αυξανόμενη εμμονή με τη limpieza de sangre, την καθαρότητα του αίματος, που θα ξεχώριζε την πρώιμη νεότερη Καστίλη."
          },
          category: "religious"
        }
      ]
    },
    {
      year: 1469,
      era: {
        en: "Catholic Monarchs",
        el: "Καθολικοί Μονάρχες"
      },
      events: [
        {
          title: {
            en: "Ferdinand and Isabella marry at Valladolid",
            el: "Ο Φερδινάνδος και η Ισαβέλλα παντρεύονται στο Βαλλαδολίδ"
          },
          description: {
            en: "On 19 October, Princess Isabella of Castile, eighteen, marries her cousin Ferdinand of Aragon, seventeen, in a private ceremony at the Palace of the Vivero. The dynastic union that emerges will weld Castile and Aragon into the political body of a future Spain.",
            el: "Στις 19 Οκτωβρίου, η πριγκίπισσα Ισαβέλλα της Καστίλης, δεκαοκτώ ετών, παντρεύεται τον ξάδερφό της Φερδινάνδο της Αραγκόνας, δεκαεπτά ετών, σε ιδιωτική τελετή στο παλάτι του Βιβέρο. Η δυναστική ένωση που θα προκύψει θα συγκολλήσει την Καστίλη και την Αραγκόνα στο πολιτικό σώμα της μελλοντικής Ισπανίας."
          },
          extendedDescription: {
            en: "Isabella's claim to Castile would still need to be made good in a five-year civil war against her niece, Juana la Beltraneja, ending only with the Treaty of Alcáçovas in 1479; in the same year Ferdinand inherited Aragon. The 'Catholic Monarchs', as Alexander VI named them in 1496, reorganised the Castilian crown, founded the Holy Brotherhood for rural policing, established the Inquisition (1478), and turned the resources of two kingdoms upon the remaining task of the Reconquista.",
            el: "Η αξίωση της Ισαβέλλας στην Καστίλη θα έπρεπε να επικυρωθεί ακόμη σε πενταετή εμφύλιο εναντίον της ανιψιάς της, Χουάνα της Μπελτρανέχα, που τερματίστηκε μόνο με τη Συνθήκη του Αλκασόβας το 1479· τον ίδιο χρόνο ο Φερδινάνδος κληρονόμησε την Αραγκόνα. Οι «Καθολικοί Μονάρχες», όπως τους ονόμασε ο Αλέξανδρος ΣΤ΄ το 1496, αναδιοργάνωσαν την καστιλιανή κορώνα, ίδρυσαν την Άγια Αδελφότητα για την αγροτική αστυνόμευση, εγκαθίδρυσαν την Ιερά Εξέταση (1478) και έστρεψαν τους πόρους δύο βασιλείων στο εναπομένον έργο της Reconquista."
          },
          category: "political"
        }
      ]
    },
    {
      year: 1492,
      era: {
        en: "Annus mirabilis",
        el: "Annus mirabilis"
      },
      events: [
        {
          title: {
            en: "Granada surrenders",
            el: "Η Γρανάδα παραδίδεται"
          },
          description: {
            en: "On 2 January, the last Nasrid sultan Muhammad XII — Boabdil to the Spaniards — hands over the keys of the Alhambra to Ferdinand and Isabella. After seven hundred and eighty-one years, no Muslim state remains in the Iberian peninsula.",
            el: "Στις 2 Ιανουαρίου, ο τελευταίος Νασρίδης σουλτάνος Μωάμεθ ΙΒ΄ — Μποαμπντίλ για τους Ισπανούς — παραδίδει τα κλειδιά της Αλάμπρας στον Φερδινάνδο και την Ισαβέλλα. Έπειτα από επτακόσια ογδόντα ένα χρόνια, κανένα μουσουλμανικό κράτος δεν παραμένει στην Ιβηρική χερσόνησο."
          },
          extendedDescription: {
            en: "Tradition has Boabdil weeping as he turned to look back at Granada from the pass that still bears the name El Suspiro del Moro — the Moor's Sigh — and his mother saying, 'Weep like a woman for what you could not defend as a man.' On 31 March the monarchs signed the Alhambra Decree expelling the Jews of their kingdoms; on 17 April they signed the Capitulations of Santa Fe with a Genoese mariner named Cristoforo Colombo, who would sail from Palos on 3 August and sight the Bahamas on 12 October. The medieval history of Spain ended, and the modern history of the world began, in a single twelvemonth.",
            el: "Η παράδοση θέλει τον Μποαμπντίλ να δακρύζει καθώς γυρίζει να κοιτάξει για τελευταία φορά τη Γρανάδα από το πέρασμα που ακόμη ονομάζεται El Suspiro del Moro — ο Στεναγμός του Μαυριτανού — και τη μητέρα του να του λέει: «Κλαις σαν γυναίκα γι’ αυτό που δεν μπόρεσες να υπερασπιστείς σαν άντρας». Στις 31 Μαρτίου οι μονάρχες υπέγραψαν το Διάταγμα της Αλάμπρας για την εκδίωξη των Εβραίων των βασιλείων τους· στις 17 Απριλίου υπέγραψαν τις Συνθηκολογήσεις της Σάντα Φε με έναν Γενουάτη ναυτικό ονόματι Κριστόφορο Κολόμβο, ο οποίος θα απέπλεε από το Πάλος στις 3 Αυγούστου και θα αντίκριζε τις Μπαχάμες στις 12 Οκτωβρίου. Η μεσαιωνική ιστορία της Ισπανίας τελείωσε και η νεότερη ιστορία του κόσμου άρχισε μέσα σε ένα δωδεκάμηνο."
          },
          category: "political",
          image: {
            src: "https://commons.wikimedia.org/wiki/Special:FilePath/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg?width=1024",
            alt: {
              en: "The Alhambra in Granada",
              el: "Η Αλάμπρα στη Γρανάδα"
            },
            credit: "via Wikimedia Commons"
          }
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
