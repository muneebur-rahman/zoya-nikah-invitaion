// Zoya Firdous & Musavvir Ameen - Royal Islamic Wedding Invitation Data
// Theme: Deep Royal Burgundy, Warm Ivory & Elegant Rose Gold

export const INVITATION_DATA = {
  bride: {
    name: "Zoya Firdous",
    urduName: "زویا فردوس",
    title: "Bride",
    father: "Mohammad Bilal",
    urduFather: "محمد بلال",
    relation: "Daughter of Mrs. & Mr. Mohammad Bilal",
    urduRelation: "دخترِ ارجمند محترمہ و محترم محمد بلال",
  },

  groom: {
    name: "Musavvir Ameen",
    urduName: "مصوّر امین",
    title: "Groom",
    father: "Abid Ali",
    urduFather: "عابد علی",
    relation: "Son of Mrs. & Mr. Abid Ali",
    urduRelation: "نور چشم محترمہ و محترم عابد علی",
  },

  hosts: {
    english: "Mrs. & Mr. Mohammad Bilal",
    urdu: "محترمہ و محترم محمد بلال",
    relation: "Parents of the Bride",
    urduRelation: "والدینِ دلہن",
    description: "Cordially request the honour of your benign presence and gracious blessings on the auspicious occasion of the Nikah Ceremony of their beloved daughter.",
    urduDescription: "اللہ تبارک و تعالیٰ کے فضل و کرم سے بصد مسرت و احترام آپ کو اپنی دخترِ ارجمند کے عقدِ مسنون (تقریبِ نکاح) میں شرکت کی پُرتپاک دعوت دیتے ہیں۔",
  },

  eventDate: {
    day: "Monday",
    urduDay: "بروز پیر",
    date: "23rd November 2026",
    urduDate: "۲۳ نومبر ۲۰۲۶ء",
    targetIsoDate: "2026-11-23T18:00:00+05:30", // After Maghrib approx 6:00 PM IST
    timezone: "Asia/Kolkata",
  },

  // TWO SEPARATE EVENTS WITH VENUES
  events: [
    {
      id: "nikah",
      title: "The Sacred Nikah Ceremony",
      urduTitle: "عقدِ مسنون و رسمِ نکاح",
      category: "Solemnization of Sunnah",
      time: "After Maghrib",
      urduTime: "بعد نمازِ مغرب",
      venueName: "Ismail Pura Masjid",
      urduVenueName: "اسماعیل پورہ مسجد",
      venueAddress: "Ismail Pura, Kamptee, Maharashtra",
      urduVenueAddress: "اسماعیل پورہ، کامٹی، مہاراشٹر",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ismail+Pura+Masjid+Kamptee",
      embedQuery: "Ismail+Pura+Masjid+Kamptee",
      description: "The solemnization of the sacred Nikah following the noble Sunnah of Prophet Muhammad (ﷺ).",
      urduDescription: "شریعتِ مطہرہ اور سنتِ نبویؐ کے مطابق نکاح خوانی و ایجاب و قبول۔",
      badge: "Sacred Ceremony",
    },
    {
      id: "dinner",
      title: "Wedding Dinner & Celebration",
      urduTitle: "ضیافتِ طعام و جشنِ مسرت",
      category: "Reception & Feast",
      time: "7:00 PM onwards",
      urduTime: "بوقت شام ۷:۰۰ بجے سے",
      venueName: "Green Leaf Garden Celebration Lawn",
      urduVenueName: "گرین لیف گارڈن سیلیبریشن لان",
      venueAddress: "Kalamna Road, Kamptee, Maharashtra",
      urduVenueAddress: "کالمنا روڈ، کامٹی، مہاراشٹر",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Green+Leaf+Garden+Celebration+Lawn+Kalamna+Road+Kamptee",
      embedQuery: "Green+Leaf+Garden+Celebration+Lawn+Kalamna+Road+Kamptee",
      description: "Royal dinner banquet and festive celebration in gracious hospitality of all guests.",
      urduDescription: "پُرتکلف عشائیہ، ضیافتِ طعام اور معزز مہمانانِ گرامی کا پُرتپاک استقبال۔",
      badge: "Royal Reception",
    },
  ],

  islamicQuotes: {
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    quranVerseArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    quranVerseRef: "Surah Ar-Rum (30:21)",
    quranVerseTranslation: "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts.",
    shortVerseArabic: "وَخَلَقْنَاكُمْ أَزْوَاجًا",
    shortVerseTranslation: "And We created you in pairs.",
    shortVerseRef: "Surah An-Naba (78:8)",
    sunnahDuaArabic: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    sunnahDuaTranslation: "May Allah bless you, and shower His blessings upon you, and unite you both in goodness.",
    closingBlessing: "Your gracious presence and heartfelt prayers will make our happiness truly complete.",
    urduClosingBlessing: "آپ کی پُروقار شرکت اور پُرخلوص دعائیں ہمارے مسرتوں کو دوبالا کریں گی۔",
  },

  family: {
    hosts: {
      englishLabel: "Hosts",
      urduLabel: "میزبان",
      names: [
        {
          english: "Mrs. & Mr. Mohammad Bilal",
          urdu: "محترمہ و محترم محمد بلال",
          relation: "Parents of the Bride (والدینِ دلہن)",
        },
      ],
    },
    compliments: {
      englishLabel: "With Best Compliments From",
      urduLabel: "بہترین تمناؤں اور تہنیات کے ساتھ",
      groups: [
        {
          englishTitle: "Bilal Family, Relatives & Well-Wishers",
          urduTitle: "بلال فیملی و جملہ عزیز و اقارب و دوست احباب",
          note: "جملہ محبین و مخلصین",
        },
      ],
    },
    awaiting: {
      englishLabel: "Awaiting to Welcome You",
      urduLabel: "چشم براہ و مشتاقینِ دید",
      messageEnglish: "Mrs. & Mr. Mohammad Bilal and Family warmly look forward to welcoming you.",
      messageUrdu: "محمد بلال و جملہ اہل خانہ آپ کی آمد کے تہہِ دل سے منتظر ہیں۔",
    },
  },

  developer: {
    name: "Muneebur Rahman",
    role: "Website Designed & Developed By",
    phone: "9021996784",
    formattedPhone: "+91 90219 96784",
    whatsappUrl: "https://wa.me/919021996784",
    email: "muneeburrahman0213@gmail.com",
    linkedin: "https://www.linkedin.com/in/muneebur-rahman-657658319/",
    ctaText: "Need an elegant wedding invitation or portfolio website?",
    ctaButton: "CONNECT WITH DEVELOPER",
    inquirySubject: "Website Design & Development Inquiry",
  },
};

/**
 * Generates the Google Calendar event URL covering both Nikah & Dinner
 */
export function getGoogleCalendarUrl() {
  const title = encodeURIComponent("Nikah Ceremony: Zoya Firdous & Musavvir Ameen");
  const details = encodeURIComponent(
    "Mrs. & Mr. Mohammad Bilal cordially request the honour of your presence at the Nikah Ceremony of their daughter Zoya Firdous with Musavvir Ameen.\n\n" +
    "1. The Sacred Nikah: Ismail Pura Masjid, Kamptee (After Maghrib)\n" +
    "2. Wedding Dinner & Celebration: Green Leaf Garden Celebration Lawn, Kalamna Road, Kamptee (7:00 PM onwards)"
  );
  const location = encodeURIComponent("Ismail Pura Masjid & Green Leaf Garden Celebration Lawn, Kamptee, Maharashtra");
  const dates = "20261123T123000Z/20261123T180000Z";

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}&ctz=Asia/Kolkata`;
}

/**
 * Generates an .ics file download for Apple Calendar / Outlook / iCal
 */
export function downloadIcsFile() {
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Zoya and Musavvir Nikah Invitation//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:nikah-zoya-musavvir-20261123@invitation
DTSTAMP:20261105T120000Z
DTSTART:20261123T123000Z
DTEND:20261123T180000Z
SUMMARY:Nikah Ceremony: Zoya Firdous & Musavvir Ameen
DESCRIPTION:Mrs. & Mr. Mohammad Bilal request the honour of your presence at the Nikah of Zoya Firdous & Musavvir Ameen.\\nNikah: Ismail Pura Masjid (After Maghrib)\\nDinner: Green Leaf Garden Celebration Lawn (7:00 PM).
LOCATION:Ismail Pura Masjid & Green Leaf Garden Lawn, Kamptee, Maharashtra
STATUS:CONFIRMED
BEGIN:VALARM
TRIGGER:-PT24H
ACTION:DISPLAY
DESCRIPTION:Reminder: Nikah Ceremony of Zoya Firdous & Musavvir Ameen tomorrow
END:VALARM
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'Zoya-and-Musavvir-Nikah-Invitation.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
