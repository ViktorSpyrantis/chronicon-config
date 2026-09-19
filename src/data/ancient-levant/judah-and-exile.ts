/** Judah & the Exile — Ο Ιούδας & η Εξορία · Ancient Levant */
import type { PeriodDefinition } from "../../types";
import { THEMES } from "../../themes";

export const JUDAH_AND_EXILE = {
  id: "judah-and-exile" as const,
  label: {
    en: "Judah & the Exile",
    el: "Ο Ιούδας & η Εξορία"
  },
  supertitle: {
    en: "The Ancient Levant",
    el: "Ο Αρχαίος Λεβάντες"
  },
  title: {
    en: "Judah & the Babylonian Exile",
    el: "Ο Ιούδας & η Βαβυλώνια Εξορία"
  },
  subtitle: {
    en: "Alone after the fall of the north, the little kingdom of Judah survived the Assyrians, reformed its worship under kings and prophets, and then was crushed between Egypt and Babylon. Jerusalem and its Temple were destroyed, and its people carried into exile — a catastrophe that, far from ending their story, forged the faith and scriptures of Judaism. Slide across the fall of Judah and the exile in Babylon.",
    el: "Μόνος μετά την πτώση του βορρά, το μικρό βασίλειο του Ιούδα επέζησε των Ασσυρίων, μεταρρύθμισε τη λατρεία του υπό βασιλείς και προφήτες, και έπειτα συνθλίφτηκε ανάμεσα στην Αίγυπτο και τη Βαβυλώνα. Η Ιερουσαλήμ και ο Ναός της καταστράφηκαν, και ο λαός της οδηγήθηκε στην εξορία — μια καταστροφή που, κάθε άλλο παρά τερμάτισε την ιστορία τους, σφυρηλάτησε την πίστη και τις γραφές του Ιουδαϊσμού. Μετακινηθείτε στην πτώση του Ιούδα και την εξορία στη Βαβυλώνα."
  },
  menuDescription: {
    en: "Hezekiah and Josiah, the fall of Jerusalem, and the exile that made Judaism.",
    el: "Ο Εζεκίας και ο Ιωσίας, η πτώση της Ιερουσαλήμ και η εξορία που έπλασε τον Ιουδαϊσμό."
  },
  footerLabel: {
    en: "Judah & the Exile · 716-539 BC",
    el: "Ο Ιούδας & η Εξορία · 716-539 π.Χ."
  },
  headerTimelineLabel: {
    en: "Historical Timeline",
    el: "Ιστορική Χρονογραμμή"
  },
  timelineHeading: {
    en: "Judah & the Exile",
    el: "Ο Ιούδας & η Εξορία"
  },
  theme: THEMES.slate,
  timeline: [
    {
      year: -716,
      label: "c. 716 BC",
      era: {
        en: "Kingdom of Judah",
        el: "Βασίλειο του Ιούδα"
      },
      events: [
        {
          title: {
            en: "Hezekiah's Judah",
            el: "Ο Ιούδας του Εζεκία"
          },
          description: {
            en: "King Hezekiah reforms Judah's worship and fortifies Jerusalem, cutting a tunnel to secure its water.",
            el: "Ο βασιλιάς Εζεκίας μεταρρυθμίζει τη λατρεία του Ιούδα και οχυρώνει την Ιερουσαλήμ, ανοίγοντας μια σήραγγα για να εξασφαλίσει το νερό της."
          },
          extendedDescription: {
            en: "Hezekiah centralized worship on the Jerusalem Temple and prepared his kingdom for the Assyrian storm. His engineers cut a 500-metre tunnel through solid rock to bring the Gihon spring inside the walls — an astonishing feat commemorated by an inscription found within it, and still walkable today.",
            el: "Ο Εζεκίας συγκέντρωσε τη λατρεία στον Ναό της Ιερουσαλήμ και προετοίμασε το βασίλειό του για την ασσυριακή θύελλα. Οι μηχανικοί του άνοιξαν μια σήραγγα 500 μέτρων μέσα από συμπαγή βράχο για να φέρουν την πηγή Γιχών εντός των τειχών — ένα εκπληκτικό επίτευγμα που μνημονεύεται από μια επιγραφή που βρέθηκε μέσα της, και που είναι ακόμη διαβατό σήμερα."
          },
          category: "political"
        }
      ]
    },
    {
      year: -701,
      era: {
        en: "Kingdom of Judah",
        el: "Βασίλειο του Ιούδα"
      },
      events: [
        {
          title: {
            en: "Sennacherib at the gates",
            el: "Ο Σενναχειρίμ στις πύλες"
          },
          description: {
            en: "The Assyrian king Sennacherib devastates Judah and besieges Jerusalem, but the city survives.",
            el: "Ο Ασσύριος βασιλιάς Σενναχειρίμ ερημώνει τον Ιούδα και πολιορκεί την Ιερουσαλήμ, όμως η πόλη επιβιώνει."
          },
          extendedDescription: {
            en: "Sennacherib stormed the great fortress of Lachish — proudly carved on his palace walls — and shut Hezekiah in Jerusalem 'like a bird in a cage,' as his annals boast. Yet Jerusalem was not taken; the Bible credits a miraculous deliverance. Judah survived as an Assyrian vassal, its escape becoming a cornerstone of faith in the city's protection.",
            el: "Ο Σενναχειρίμ κυρίευσε το μεγάλο φρούριο της Λαχίς — περήφανα λαξευμένο στους τοίχους του ανακτόρου του — και έκλεισε τον Εζεκία στην Ιερουσαλήμ «σαν πουλί σε κλουβί», όπως καυχώνται τα χρονικά του. Ωστόσο η Ιερουσαλήμ δεν κυριεύτηκε· η Βίβλος αποδίδει μια θαυματουργή σωτηρία. Ο Ιούδας επέζησε ως υποτελής της Ασσυρίας, με τη διαφυγή του να γίνεται ακρογωνιαίος λίθος της πίστης στην προστασία της πόλης."
          },
          category: "military"
        }
      ]
    },
    {
      year: -622,
      era: {
        en: "Kingdom of Judah",
        el: "Βασίλειο του Ιούδα"
      },
      events: [
        {
          title: {
            en: "Josiah and the Book of the Law",
            el: "Ο Ιωσίας και το Βιβλίο του Νόμου"
          },
          description: {
            en: "King Josiah launches a sweeping religious reform after a 'book of the law' is found in the Temple.",
            el: "Ο βασιλιάς Ιωσίας εξαπολύει μια σαρωτική θρησκευτική μεταρρύθμιση αφού ένα «βιβλίο του νόμου» βρίσκεται στον Ναό."
          },
          extendedDescription: {
            en: "During Temple repairs, a scroll of the law — widely thought to be an early form of Deuteronomy — was discovered, and Josiah used it to purge foreign cults and centralize all worship in Jerusalem. Many scholars see this reform as a decisive moment in the shaping of the Hebrew Bible and of Israelite monotheism.",
            el: "Κατά τη διάρκεια επισκευών στον Ναό, ανακαλύφθηκε ένας πάπυρος του νόμου — που ευρέως θεωρείται πρώιμη μορφή του Δευτερονομίου — και ο Ιωσίας τον χρησιμοποίησε για να εκκαθαρίσει ξένες λατρείες και να συγκεντρώσει όλη τη λατρεία στην Ιερουσαλήμ. Πολλοί μελετητές βλέπουν αυτή τη μεταρρύθμιση ως καθοριστική στιγμή στη διαμόρφωση της Εβραϊκής Βίβλου και του ισραηλιτικού μονοθεϊσμού."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -609,
      era: {
        en: "Kingdom of Judah",
        el: "Βασίλειο του Ιούδα"
      },
      events: [
        {
          title: {
            en: "The death of Josiah",
            el: "Ο θάνατος του Ιωσία"
          },
          description: {
            en: "Josiah is killed at Megiddo confronting Pharaoh Necho, and Judah falls under foreign domination.",
            el: "Ο Ιωσίας σκοτώνεται στο Μεγιδδώ αντιμετωπίζοντας τον φαραώ Νεχαώ, και ο Ιούδας περνά υπό ξένη κυριαρχία."
          },
          extendedDescription: {
            en: "As Assyria collapsed, Josiah tried to block the Egyptian army marching to its aid and was killed at Megiddo. His death shattered the reform and left Judah a pawn between the rising powers of Egypt and Babylon — squeezed in a contest it could not survive.",
            el: "Καθώς η Ασσυρία κατέρρεε, ο Ιωσίας προσπάθησε να ανακόψει τον αιγυπτιακό στρατό που προέλαυνε προς βοήθειά της και σκοτώθηκε στο Μεγιδδώ. Ο θάνατός του συνέτριψε τη μεταρρύθμιση και άφησε τον Ιούδα πιόνι ανάμεσα στις ανερχόμενες δυνάμεις της Αιγύπτου και της Βαβυλώνας — στριμωγμένο σε μια αναμέτρηση που δεν μπορούσε να επιβιώσει."
          },
          category: "political"
        }
      ]
    },
    {
      year: -597,
      era: {
        en: "Babylonian Conquest",
        el: "Βαβυλωνιακή Κατάκτηση"
      },
      events: [
        {
          title: {
            en: "The first deportation",
            el: "Η πρώτη εκτόπιση"
          },
          description: {
            en: "Nebuchadnezzar II captures Jerusalem, deposes its king, and carries off the first exiles to Babylon.",
            el: "Ο Ναβουχοδονόσορ Β΄ καταλαμβάνει την Ιερουσαλήμ, καθαιρεί τον βασιλιά της και μεταφέρει τους πρώτους εξόριστους στη Βαβυλώνα."
          },
          extendedDescription: {
            en: "When Judah wavered between Egypt and Babylon, Nebuchadnezzar took Jerusalem, deported King Jehoiachin along with the elite and craftsmen, and set the puppet Zedekiah on the throne. Among the first exiles was the priest Ezekiel, who would prophesy to his people by the rivers of Babylon.",
            el: "Όταν ο Ιούδας ταλαντεύτηκε ανάμεσα στην Αίγυπτο και τη Βαβυλώνα, ο Ναβουχοδονόσορ πήρε την Ιερουσαλήμ, εκτόπισε τον βασιλιά Ιωαχίν μαζί με την ελίτ και τους τεχνίτες, και έβαλε τον υποτελή Σεδεκία στον θρόνο. Ανάμεσα στους πρώτους εξόριστους ήταν ο ιερέας Ιεζεκιήλ, που θα προφήτευε στον λαό του στις όχθες των ποταμών της Βαβυλώνας."
          },
          category: "military"
        }
      ]
    },
    {
      year: -587,
      era: {
        en: "Fall of Judah",
        el: "Πτώση του Ιούδα"
      },
      events: [
        {
          title: {
            en: "The destruction of Jerusalem",
            el: "Η καταστροφή της Ιερουσαλήμ"
          },
          description: {
            en: "After Judah rebels, Babylon razes Jerusalem and burns the Temple, ending the kingdom of Judah.",
            el: "Αφού ο Ιούδας επαναστατεί, η Βαβυλώνα ισοπεδώνει την Ιερουσαλήμ και καίει τον Ναό, τερματίζοντας το βασίλειο του Ιούδα."
          },
          extendedDescription: {
            en: "Zedekiah's revolt brought Nebuchadnezzar back to storm and destroy Jerusalem. The city walls were thrown down, Solomon's Temple burned, and the last king blinded and led away in chains. After four centuries the kingdom of David was no more, and the land of Judah lay desolate.",
            el: "Η εξέγερση του Σεδεκία έφερε πίσω τον Ναβουχοδονόσορ για να κυριεύσει και να καταστρέψει την Ιερουσαλήμ. Τα τείχη της πόλης γκρεμίστηκαν, ο Ναός του Σολομώντα κάηκε, και ο τελευταίος βασιλιάς τυφλώθηκε και οδηγήθηκε αλυσοδεμένος. Έπειτα από τέσσερις αιώνες το βασίλειο του Δαβίδ δεν υπήρχε πια, και η γη του Ιούδα κείτονταν έρημη."
          },
          category: "military"
        }
      ]
    },
    {
      year: -586,
      era: {
        en: "The Exile",
        el: "Η Εξορία"
      },
      events: [
        {
          title: {
            en: "By the waters of Babylon",
            el: "Επί των ποταμών της Βαβυλώνος"
          },
          description: {
            en: "In exile the people of Judah preserve their identity, and their faith is transformed without Temple or land.",
            el: "Στην εξορία ο λαός του Ιούδα διατηρεί την ταυτότητά του, και η πίστη του μεταμορφώνεται χωρίς Ναό και χωρίς γη."
          },
          extendedDescription: {
            en: "'By the rivers of Babylon we sat down and wept,' sang the exiles. Cut off from the Temple, they turned to scripture, the sabbath, and gathering for study and prayer — the seeds of the synagogue. Far from dissolving, the exiles' faith deepened into a portable religion of the book that could survive anywhere, and the shaping of the Hebrew Bible gathered pace.",
            el: "«Επί των ποταμών της Βαβυλώνος εκεί εκαθίσαμεν και εκλαύσαμεν», τραγουδούσαν οι εξόριστοι. Αποκομμένοι από τον Ναό, στράφηκαν στη γραφή, το σάββατο και τη συγκέντρωση για μελέτη και προσευχή — οι σπόροι της συναγωγής. Κάθε άλλο παρά διαλύθηκε, η πίστη των εξόριστων βάθυνε σε μια φορητή θρησκεία του βιβλίου που μπορούσε να επιβιώσει παντού, και η διαμόρφωση της Εβραϊκής Βίβλου επιταχύνθηκε."
          },
          category: "religious"
        }
      ]
    },
    {
      year: -539,
      era: {
        en: "The Exile",
        el: "Η Εξορία"
      },
      events: [
        {
          title: {
            en: "The edict of Cyrus",
            el: "Το διάταγμα του Κύρου"
          },
          description: {
            en: "Cyrus the Great conquers Babylon and permits the exiles to return home and rebuild their Temple.",
            el: "Ο Κύρος ο Μέγας κατακτά τη Βαβυλώνα και επιτρέπει στους εξόριστους να επιστρέψουν στην πατρίδα τους και να ξαναχτίσουν τον Ναό τους."
          },
          extendedDescription: {
            en: "When Cyrus took Babylon in 539 BCE, he reversed its policy and allowed subject peoples to return to their homelands — including the Judeans, whom the Bible remembers with gratitude, even calling Cyrus God's 'anointed.' The exile was over; a remnant would journey back to a ruined Jerusalem to begin again under Persian rule.",
            el: "Όταν ο Κύρος πήρε τη Βαβυλώνα το 539 π.Χ., αντέστρεψε την πολιτική της και επέτρεψε στους υποτελείς λαούς να επιστρέψουν στις πατρίδες τους — μεταξύ τους και τους Ιουδαίους, που η Βίβλος θυμάται με ευγνωμοσύνη, αποκαλώντας μάλιστα τον Κύρο «χρισμένο» του Θεού. Η εξορία είχε τελειώσει· ένα υπόλειμμα θα ταξίδευε πίσω σε μια ερειπωμένη Ιερουσαλήμ για να ξεκινήσει ξανά υπό περσική κυριαρχία."
          },
          category: "political"
        }
      ]
    }
  ],
} satisfies PeriodDefinition;
