// test-selection.mjs
import React2 from "react";
import { renderToString } from "react-dom/server";

// src/components/UrduInvitationSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

// src/data/invitationData.js
var INVITATION_DATA = {
  bride: {
    name: "Zoya Firdous",
    urduName: "\u0632\u0648\u06CC\u0627 \u0641\u0631\u062F\u0648\u0633",
    title: "Bride",
    father: "Mohammad Bilal",
    urduFather: "\u0645\u062D\u0645\u062F \u0628\u0644\u0627\u0644",
    relation: "Daughter of Mrs. & Mr. Mohammad Bilal",
    urduRelation: "\u062F\u062E\u062A\u0631\u0650 \u0627\u0631\u062C\u0645\u0646\u062F \u0645\u062D\u062A\u0631\u0645\u06C1 \u0648 \u0645\u062D\u062A\u0631\u0645 \u0645\u062D\u0645\u062F \u0628\u0644\u0627\u0644"
  },
  groom: {
    name: "Musavvir Ameen",
    urduName: "\u0645\u0635\u0648\u0651\u0631 \u0627\u0645\u06CC\u0646",
    title: "Groom",
    father: "Abid Ali",
    urduFather: "\u0639\u0627\u0628\u062F \u0639\u0644\u06CC",
    relation: "Son of Mrs. & Mr. Abid Ali",
    urduRelation: "\u0646\u0648\u0631 \u0686\u0634\u0645 \u0645\u062D\u062A\u0631\u0645\u06C1 \u0648 \u0645\u062D\u062A\u0631\u0645 \u0639\u0627\u0628\u062F \u0639\u0644\u06CC"
  },
  hosts: {
    english: "Mrs. & Mr. Mohammad Bilal",
    urdu: "\u0645\u062D\u062A\u0631\u0645\u06C1 \u0648 \u0645\u062D\u062A\u0631\u0645 \u0645\u062D\u0645\u062F \u0628\u0644\u0627\u0644",
    relation: "Parents of the Bride",
    urduRelation: "\u0648\u0627\u0644\u062F\u06CC\u0646\u0650 \u062F\u0644\u06C1\u0646",
    description: "Cordially request the honour of your benign presence and gracious blessings on the auspicious occasion of the Nikah Ceremony of their beloved daughter.",
    urduDescription: "\u0627\u0644\u0644\u06C1 \u062A\u0628\u0627\u0631\u06A9 \u0648 \u062A\u0639\u0627\u0644\u06CC\u0670 \u06A9\u06D2 \u0641\u0636\u0644 \u0648 \u06A9\u0631\u0645 \u0633\u06D2 \u0628\u0635\u062F \u0645\u0633\u0631\u062A \u0648 \u0627\u062D\u062A\u0631\u0627\u0645 \u0622\u067E \u06A9\u0648 \u0627\u067E\u0646\u06CC \u062F\u062E\u062A\u0631\u0650 \u0627\u0631\u062C\u0645\u0646\u062F \u06A9\u06D2 \u0639\u0642\u062F\u0650 \u0645\u0633\u0646\u0648\u0646 (\u062A\u0642\u0631\u06CC\u0628\u0650 \u0646\u06A9\u0627\u062D) \u0645\u06CC\u06BA \u0634\u0631\u06A9\u062A \u06A9\u06CC \u067E\u064F\u0631\u062A\u067E\u0627\u06A9 \u062F\u0639\u0648\u062A \u062F\u06CC\u062A\u06D2 \u06C1\u06CC\u06BA\u06D4"
  },
  eventDate: {
    day: "Monday",
    urduDay: "\u0628\u0631\u0648\u0632 \u067E\u06CC\u0631",
    date: "23rd November 2026",
    urduDate: "\u06F2\u06F3 \u0646\u0648\u0645\u0628\u0631 \u06F2\u06F0\u06F2\u06F6\u0621",
    targetIsoDate: "2026-11-23T18:00:00+05:30",
    // After Maghrib approx 6:00 PM IST
    timezone: "Asia/Kolkata"
  },
  // TWO SEPARATE EVENTS WITH VENUES
  events: [
    {
      id: "nikah",
      title: "The Sacred Nikah Ceremony",
      urduTitle: "\u0639\u0642\u062F\u0650 \u0645\u0633\u0646\u0648\u0646 \u0648 \u0631\u0633\u0645\u0650 \u0646\u06A9\u0627\u062D",
      category: "Solemnization of Sunnah",
      time: "After Maghrib",
      urduTime: "\u0628\u0639\u062F \u0646\u0645\u0627\u0632\u0650 \u0645\u063A\u0631\u0628",
      venueName: "Ismail Pura Masjid",
      urduVenueName: "\u0627\u0633\u0645\u0627\u0639\u06CC\u0644 \u067E\u0648\u0631\u06C1 \u0645\u0633\u062C\u062F",
      venueAddress: "Ismail Pura, Kamptee, Maharashtra",
      urduVenueAddress: "\u0627\u0633\u0645\u0627\u0639\u06CC\u0644 \u067E\u0648\u0631\u06C1\u060C \u06A9\u0627\u0645\u0679\u06CC\u060C \u0645\u06C1\u0627\u0631\u0627\u0634\u0679\u0631",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ismail+Pura+Masjid+Kamptee",
      embedQuery: "Ismail+Pura+Masjid+Kamptee",
      description: "The solemnization of the sacred Nikah following the noble Sunnah of Prophet Muhammad (\uFDFA).",
      urduDescription: "\u0634\u0631\u06CC\u0639\u062A\u0650 \u0645\u0637\u06C1\u0631\u06C1 \u0627\u0648\u0631 \u0633\u0646\u062A\u0650 \u0646\u0628\u0648\u06CC\u0610 \u06A9\u06D2 \u0645\u0637\u0627\u0628\u0642 \u0646\u06A9\u0627\u062D \u062E\u0648\u0627\u0646\u06CC \u0648 \u0627\u06CC\u062C\u0627\u0628 \u0648 \u0642\u0628\u0648\u0644\u06D4",
      badge: "Sacred Ceremony"
    },
    {
      id: "dinner",
      title: "Wedding Dinner & Celebration",
      urduTitle: "\u0636\u06CC\u0627\u0641\u062A\u0650 \u0637\u0639\u0627\u0645 \u0648 \u062C\u0634\u0646\u0650 \u0645\u0633\u0631\u062A",
      category: "Reception & Feast",
      time: "7:00 PM onwards",
      urduTime: "\u0628\u0648\u0642\u062A \u0634\u0627\u0645 \u06F7:\u06F0\u06F0 \u0628\u062C\u06D2 \u0633\u06D2",
      venueName: "Green Leaf Garden Celebration Lawn",
      urduVenueName: "\u06AF\u0631\u06CC\u0646 \u0644\u06CC\u0641 \u06AF\u0627\u0631\u0688\u0646 \u0633\u06CC\u0644\u06CC\u0628\u0631\u06CC\u0634\u0646 \u0644\u0627\u0646",
      venueAddress: "Kalamna Road, Kamptee, Maharashtra",
      urduVenueAddress: "\u06A9\u0627\u0644\u0645\u0646\u0627 \u0631\u0648\u0688\u060C \u06A9\u0627\u0645\u0679\u06CC\u060C \u0645\u06C1\u0627\u0631\u0627\u0634\u0679\u0631",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Green+Leaf+Garden+Celebration+Lawn+Kalamna+Road+Kamptee",
      embedQuery: "Green+Leaf+Garden+Celebration+Lawn+Kalamna+Road+Kamptee",
      description: "Royal dinner banquet and festive celebration in gracious hospitality of all guests.",
      urduDescription: "\u067E\u064F\u0631\u062A\u06A9\u0644\u0641 \u0639\u0634\u0627\u0626\u06CC\u06C1\u060C \u0636\u06CC\u0627\u0641\u062A\u0650 \u0637\u0639\u0627\u0645 \u0627\u0648\u0631 \u0645\u0639\u0632\u0632 \u0645\u06C1\u0645\u0627\u0646\u0627\u0646\u0650 \u06AF\u0631\u0627\u0645\u06CC \u06A9\u0627 \u067E\u064F\u0631\u062A\u067E\u0627\u06A9 \u0627\u0633\u062A\u0642\u0628\u0627\u0644\u06D4",
      badge: "Royal Reception"
    }
  ],
  islamicQuotes: {
    bismillah: "\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u064E\u0651\u0647\u0650 \u0627\u0644\u0631\u064E\u0651\u062D\u0652\u0645\u064E\u0670\u0646\u0650 \u0627\u0644\u0631\u064E\u0651\u062D\u0650\u064A\u0645\u0650",
    quranVerseArabic: "\u0648\u064E\u0645\u0650\u0646\u0652 \u0622\u064A\u064E\u0627\u062A\u0650\u0647\u0650 \u0623\u064E\u0646\u0652 \u062E\u064E\u0644\u064E\u0642\u064E \u0644\u064E\u0643\u064F\u0645 \u0645\u0650\u0651\u0646\u0652 \u0623\u064E\u0646\u0641\u064F\u0633\u0650\u0643\u064F\u0645\u0652 \u0623\u064E\u0632\u0652\u0648\u064E\u0627\u062C\u064B\u0627 \u0644\u0650\u0651\u062A\u064E\u0633\u0652\u0643\u064F\u0646\u064F\u0648\u0627 \u0625\u0650\u0644\u064E\u064A\u0652\u0647\u064E\u0627 \u0648\u064E\u062C\u064E\u0639\u064E\u0644\u064E \u0628\u064E\u064A\u0652\u0646\u064E\u0643\u064F\u0645 \u0645\u064E\u0651\u0648\u064E\u062F\u064E\u0651\u0629\u064B \u0648\u064E\u0631\u064E\u062D\u0652\u0645\u064E\u0629\u064B",
    quranVerseRef: "Surah Ar-Rum (30:21)",
    quranVerseTranslation: "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts.",
    shortVerseArabic: "\u0648\u064E\u062E\u064E\u0644\u064E\u0642\u0652\u0646\u064E\u0627\u0643\u064F\u0645\u0652 \u0623\u064E\u0632\u0652\u0648\u064E\u0627\u062C\u064B\u0627",
    shortVerseTranslation: "And We created you in pairs.",
    shortVerseRef: "Surah An-Naba (78:8)",
    sunnahDuaArabic: "\u0628\u064E\u0627\u0631\u064E\u0643\u064E \u0627\u0644\u0644\u064E\u0651\u0647\u064F \u0644\u064E\u0643\u064E \u0648\u064E\u0628\u064E\u0627\u0631\u064E\u0643\u064E \u0639\u064E\u0644\u064E\u064A\u0652\u0643\u064E \u0648\u064E\u062C\u064E\u0645\u064E\u0639\u064E \u0628\u064E\u064A\u0652\u0646\u064E\u0643\u064F\u0645\u064E\u0627 \u0641\u0650\u064A \u062E\u064E\u064A\u0652\u0631\u064D",
    sunnahDuaTranslation: "May Allah bless you, and shower His blessings upon you, and unite you both in goodness.",
    closingBlessing: "Your gracious presence and heartfelt prayers will make our happiness truly complete.",
    urduClosingBlessing: "\u0622\u067E \u06A9\u06CC \u067E\u064F\u0631\u0648\u0642\u0627\u0631 \u0634\u0631\u06A9\u062A \u0627\u0648\u0631 \u067E\u064F\u0631\u062E\u0644\u0648\u0635 \u062F\u0639\u0627\u0626\u06CC\u06BA \u06C1\u0645\u0627\u0631\u06D2 \u0645\u0633\u0631\u062A\u0648\u06BA \u06A9\u0648 \u062F\u0648\u0628\u0627\u0644\u0627 \u06A9\u0631\u06CC\u06BA \u06AF\u06CC\u06D4"
  },
  family: {
    hosts: {
      englishLabel: "Hosts",
      urduLabel: "\u0645\u06CC\u0632\u0628\u0627\u0646",
      names: [
        {
          english: "Mrs. & Mr. Mohammad Bilal",
          urdu: "\u0645\u062D\u062A\u0631\u0645\u06C1 \u0648 \u0645\u062D\u062A\u0631\u0645 \u0645\u062D\u0645\u062F \u0628\u0644\u0627\u0644",
          relation: "Parents of the Bride (\u0648\u0627\u0644\u062F\u06CC\u0646\u0650 \u062F\u0644\u06C1\u0646)"
        }
      ]
    },
    compliments: {
      englishLabel: "With Best Compliments From",
      urduLabel: "\u0628\u06C1\u062A\u0631\u06CC\u0646 \u062A\u0645\u0646\u0627\u0624\u06BA \u0627\u0648\u0631 \u062A\u06C1\u0646\u06CC\u0627\u062A \u06A9\u06D2 \u0633\u0627\u062A\u06BE",
      groups: [
        {
          englishTitle: "Bilal Family, Relatives & Well-Wishers",
          urduTitle: "\u0628\u0644\u0627\u0644 \u0641\u06CC\u0645\u0644\u06CC \u0648 \u062C\u0645\u0644\u06C1 \u0639\u0632\u06CC\u0632 \u0648 \u0627\u0642\u0627\u0631\u0628 \u0648 \u062F\u0648\u0633\u062A \u0627\u062D\u0628\u0627\u0628",
          note: "\u062C\u0645\u0644\u06C1 \u0645\u062D\u0628\u06CC\u0646 \u0648 \u0645\u062E\u0644\u0635\u06CC\u0646"
        }
      ]
    },
    awaiting: {
      englishLabel: "Awaiting to Welcome You",
      urduLabel: "\u0686\u0634\u0645 \u0628\u0631\u0627\u06C1 \u0648 \u0645\u0634\u062A\u0627\u0642\u06CC\u0646\u0650 \u062F\u06CC\u062F",
      messageEnglish: "Mrs. & Mr. Mohammad Bilal and Family warmly look forward to welcoming you.",
      messageUrdu: "\u0645\u062D\u0645\u062F \u0628\u0644\u0627\u0644 \u0648 \u062C\u0645\u0644\u06C1 \u0627\u06C1\u0644 \u062E\u0627\u0646\u06C1 \u0622\u067E \u06A9\u06CC \u0622\u0645\u062F \u06A9\u06D2 \u062A\u06C1\u06C1\u0650 \u062F\u0644 \u0633\u06D2 \u0645\u0646\u062A\u0638\u0631 \u06C1\u06CC\u06BA\u06D4"
    }
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
    inquirySubject: "Website Design & Development Inquiry"
  }
};

// src/components/UrduInvitationSection.jsx
function UrduInvitationSection({
  initialOption = "all",
  brideName,
  brideUrduName,
  groomName,
  groomUrduName,
  onOptionChange
} = {}) {
  const [nikahEvent, dinnerEvent] = INVITATION_DATA.events;
  const [selectedOption, setSelectedOption] = useState(initialOption);
  const effectiveBrideName = brideUrduName || INVITATION_DATA.bride.urduName;
  const effectiveGroomName = groomUrduName || INVITATION_DATA.groom.urduName;
  const handleSelectOption = (option) => {
    setSelectedOption(option);
    if (onOptionChange) {
      onOptionChange(option);
    }
  };
  const isBrideOnly = selectedOption === "optionA";
  const isGroomOnly = selectedOption === "optionB";
  const isBrideSelected = selectedOption === "optionA" || selectedOption === "all";
  const isGroomSelected = selectedOption === "optionB" || selectedOption === "all";
  return /* @__PURE__ */ React.createElement("section", { id: "urdu-card", className: "relative py-8 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto" }, /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: 25 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.8 },
      className: "relative z-10"
    },
    /* @__PURE__ */ React.createElement("div", { className: "text-center mb-6" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs font-heading tracking-[0.3em] uppercase text-gold-400 block mb-1" }, "Traditional Urdu Invitation"), /* @__PURE__ */ React.createElement("h2", { className: "font-urdu text-2xl sm:text-4xl text-ivory-50 font-bold" }, "\u062F\u0639\u0648\u062A \u0646\u0627\u0645\u06C1 \u062A\u0642\u0631\u06CC\u0628\u0650 \u0646\u06A9\u0627\u062D"), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center gap-2 mt-2" }, /* @__PURE__ */ React.createElement("div", { className: "h-[1px] w-12 bg-gradient-to-r from-transparent via-gold-400 to-transparent" }), /* @__PURE__ */ React.createElement("span", { className: "text-gold-400 text-xs" }, "\u2726"), /* @__PURE__ */ React.createElement("div", { className: "h-[1px] w-12 bg-gradient-to-l from-transparent via-gold-400 to-transparent" }))),
    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 no-print" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        id: "btn-option-a",
        "data-option": "optionA",
        onClick: () => handleSelectOption("optionA"),
        className: `px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold font-sans transition-all duration-300 flex items-center gap-1.5 cursor-pointer border ${selectedOption === "optionA" ? "bg-yellow-400 text-emerald-950 border-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.5)] scale-105" : "bg-emerald-950/80 text-gold-200 border-gold-500/35 hover:border-gold-400 hover:bg-emerald-900/90"}`
      },
      /* @__PURE__ */ React.createElement("span", { className: "w-2 h-2 rounded-full bg-yellow-400 border border-emerald-950" }),
      /* @__PURE__ */ React.createElement("span", null, "Option A: \u062F\u0644\u06C1\u0646 (", effectiveBrideName, ")")
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        id: "btn-option-b",
        "data-option": "optionB",
        onClick: () => handleSelectOption("optionB"),
        className: `px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold font-sans transition-all duration-300 flex items-center gap-1.5 cursor-pointer border ${selectedOption === "optionB" ? "bg-yellow-400 text-emerald-950 border-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.5)] scale-105" : "bg-emerald-950/80 text-gold-200 border-gold-500/35 hover:border-gold-400 hover:bg-emerald-900/90"}`
      },
      /* @__PURE__ */ React.createElement("span", { className: "w-2 h-2 rounded-full bg-yellow-400 border border-emerald-950" }),
      /* @__PURE__ */ React.createElement("span", null, "Option B: \u062F\u0648\u0644\u06C1\u0627 (", effectiveGroomName, ")")
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        id: "btn-option-all",
        "data-option": "all",
        onClick: () => handleSelectOption("all"),
        className: `px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold font-sans transition-all duration-300 flex items-center gap-1.5 cursor-pointer border ${selectedOption === "all" ? "bg-gradient-to-r from-gold-400 to-yellow-400 text-emerald-950 border-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.5)] scale-105" : "bg-emerald-950/80 text-gold-200 border-gold-500/35 hover:border-gold-400 hover:bg-emerald-900/90"}`
      },
      /* @__PURE__ */ React.createElement(Sparkles, { className: "w-3.5 h-3.5 text-emerald-950" }),
      /* @__PURE__ */ React.createElement("span", null, "\u0645\u0634\u062A\u0631\u06A9\u06C1 \u062F\u0639\u0648\u062A (Both)")
    )),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        dir: "rtl",
        className: "luxury-card relative p-6 sm:p-12 rounded-3xl overflow-hidden border border-gold-500/40 text-center font-urdu shadow-2xl"
      },
      /* @__PURE__ */ React.createElement("div", { className: "ornate-corner ornate-corner-tl" }),
      /* @__PURE__ */ React.createElement("div", { className: "ornate-corner ornate-corner-tr" }),
      /* @__PURE__ */ React.createElement("div", { className: "ornate-corner ornate-corner-bl" }),
      /* @__PURE__ */ React.createElement("div", { className: "ornate-corner ornate-corner-br" }),
      /* @__PURE__ */ React.createElement("div", { className: "luxury-card-inner rounded-2xl p-5 sm:p-10 relative" }, /* @__PURE__ */ React.createElement("div", { className: "mb-6 space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "font-arabic text-2xl sm:text-4xl text-gold-300 drop-shadow-md" }, INVITATION_DATA.islamicQuotes.bismillah), /* @__PURE__ */ React.createElement("div", { className: "font-arabic text-sm sm:text-base text-ivory-300/80" }, "\u0646\u064E\u062D\u0652\u0645\u064E\u062F\u064F\u0647\u064F \u0648\u064E\u0646\u064F\u0635\u064E\u0644\u0650\u0651\u064A \u0639\u064E\u0644\u064E\u0649\u0670 \u0631\u064E\u0633\u064F\u0648\u0644\u0650\u0647\u0650 \u0627\u0644\u0652\u0643\u064E\u0631\u0650\u064A\u0645\u0650")), /* @__PURE__ */ React.createElement("div", { className: "my-5" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg sm:text-2xl font-bold text-ivory-50" }, "\u062C\u0646\u0627\u0628\u0650 \u0639\u0627\u0644\u06CC! \u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u06CC\u06A9\u0645 \u0648\u0631\u062D\u0645\u06C3 \u0627\u0644\u0644\u06C1 \u0648\u0628\u0631\u06A9\u0627\u062A\u06C1")), /* @__PURE__ */ React.createElement("div", { className: "max-w-2xl mx-auto space-y-4 text-ivory-100/95 text-base sm:text-xl leading-loose font-normal" }, /* @__PURE__ */ React.createElement("p", null, "\u0627\u0644\u0644\u06C1 \u062A\u0628\u0627\u0631\u06A9 \u0648 \u062A\u0639\u0627\u0644\u06CC\u0670 \u06A9\u06D2 \u0641\u0636\u0644 \u0648 \u06A9\u0631\u0645 \u0633\u06D2 \u06C1\u0645\u0627\u0631\u06CC \u062F\u062E\u062A\u0631\u0650 \u0627\u0631\u062C\u0645\u0646\u062F"), /* @__PURE__ */ React.createElement(
        "div",
        {
          id: "name-card-bride",
          "data-option": "optionA",
          "data-name": effectiveBrideName,
          "data-selected": isBrideSelected,
          onClick: () => handleSelectOption(isBrideOnly ? "all" : "optionA"),
          role: "button",
          tabIndex: 0,
          onKeyDown: (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleSelectOption(isBrideOnly ? "all" : "optionA");
            }
          },
          className: `urdu-name-container my-3 p-3.5 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${isBrideOnly ? "border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.45)] scale-[1.01]" : "border-gold-500/30 hover:border-gold-400/60"}`,
          style: { isolation: "isolate" }
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: `absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300 z-0 ${isBrideOnly ? "urdu-name-yellow-bg" : "bg-emerald-950/70"}`,
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ React.createElement("div", { className: "relative z-10 overflow-visible text-center select-text" }, isBrideOnly && /* @__PURE__ */ React.createElement("span", { className: "inline-block mb-1 px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-sans font-bold uppercase tracking-wider bg-yellow-400 text-emerald-950 border border-yellow-300 shadow-sm" }, "Option A \u2022 \u0645\u0646\u062A\u062E\u0628 \u062F\u0644\u06C1\u0646"), /* @__PURE__ */ React.createElement(
          "h1",
          {
            className: `urdu-name-display text-3xl sm:text-5xl font-extrabold font-urdu py-1 select-text ${isBrideSelected ? "is-active-name" : ""}`
          },
          effectiveBrideName
        ), /* @__PURE__ */ React.createElement("p", { className: "text-xs sm:text-base text-gold-300 font-medium mt-1 select-text" }, "(", INVITATION_DATA.bride.urduRelation, ")"))
      ), /* @__PURE__ */ React.createElement("p", { className: "text-gold-300 font-semibold text-lg sm:text-xl" }, "\u06A9\u0627 \u0639\u0642\u062F\u0650 \u0645\u0633\u0646\u0648\u0646"), /* @__PURE__ */ React.createElement(
        "div",
        {
          id: "name-card-groom",
          "data-option": "optionB",
          "data-name": effectiveGroomName,
          "data-selected": isGroomSelected,
          onClick: () => handleSelectOption(isGroomOnly ? "all" : "optionB"),
          role: "button",
          tabIndex: 0,
          onKeyDown: (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleSelectOption(isGroomOnly ? "all" : "optionB");
            }
          },
          className: `urdu-name-container my-3 p-3.5 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${isGroomOnly ? "border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.45)] scale-[1.01]" : "border-gold-500/30 hover:border-gold-400/60"}`,
          style: { isolation: "isolate" }
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: `absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300 z-0 ${isGroomOnly ? "urdu-name-yellow-bg" : "bg-emerald-950/70"}`,
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ React.createElement("div", { className: "relative z-10 overflow-visible text-center select-text" }, isGroomOnly && /* @__PURE__ */ React.createElement("span", { className: "inline-block mb-1 px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-sans font-bold uppercase tracking-wider bg-yellow-400 text-emerald-950 border border-yellow-300 shadow-sm" }, "Option B \u2022 \u0645\u0646\u062A\u062E\u0628 \u062F\u0648\u0644\u06C1\u0627"), /* @__PURE__ */ React.createElement(
          "h1",
          {
            className: `urdu-name-display text-3xl sm:text-5xl font-extrabold font-urdu py-1 select-text ${isGroomSelected ? "is-active-name" : ""}`
          },
          effectiveGroomName
        ), /* @__PURE__ */ React.createElement("p", { className: "text-xs sm:text-base text-gold-300 font-medium mt-1 select-text" }, "(", INVITATION_DATA.groom.urduRelation, ")"))
      ), /* @__PURE__ */ React.createElement("p", null, "\u06A9\u06CC ", /* @__PURE__ */ React.createElement("span", { className: "text-gold-300 font-bold" }, "\u0628\u0627\u0628\u0631\u06A9\u062A \u062A\u0642\u0631\u06CC\u0628\u0650 \u0646\u06A9\u0627\u062D"), " \u0628\u062E\u06CC\u0631 \u0648 \u062E\u0648\u0628\u06CC \u0637\u06D2 \u067E\u0627\u0626\u06CC \u06C1\u06D2\u06D4"), /* @__PURE__ */ React.createElement("p", { className: "text-ivory-200 text-sm sm:text-lg italic pt-1" }, "\u0622\u067E \u06A9\u06CC \u067E\u064F\u0631\u0648\u0642\u0627\u0631 \u0634\u0631\u06A9\u062A \u0627\u0648\u0631 \u0646\u0648\u062F\u0645\u06CC\u062F\u06C1 \u062C\u0648\u0691\u06D2 \u06A9\u06D2 \u062D\u0642 \u0645\u06CC\u06BA \u067E\u064F\u0631\u062E\u0644\u0648\u0635 \u062F\u0639\u0627\u0624\u06BA \u06A9\u06D2 \u062A\u06C1\u06C1\u0650 \u062F\u0644 \u0633\u06D2 \u0645\u062A\u0645\u0646\u06CC \u0648 \u062E\u0648\u0627\u0633\u062A\u06AF\u0627\u0631 \u06C1\u06CC\u06BA\u06D4")), /* @__PURE__ */ React.createElement("div", { className: "mt-8 pt-6 border-t border-gold-500/25 grid grid-cols-1 sm:grid-cols-2 gap-4 text-center max-w-xl mx-auto" }, /* @__PURE__ */ React.createElement("div", { className: "p-4 rounded-xl bg-emerald-950/70 border border-gold-500/25 shadow-md" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs text-gold-400 font-bold block mb-1" }, nikahEvent.urduTitle), /* @__PURE__ */ React.createElement("span", { className: "text-base sm:text-lg font-bold text-ivory-50 block" }, nikahEvent.urduVenueName), /* @__PURE__ */ React.createElement("span", { className: "text-xs sm:text-sm text-gold-300 block mt-1" }, INVITATION_DATA.eventDate.urduDay, "\u060C ", INVITATION_DATA.eventDate.urduDate), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-ivory-300/90 block mt-0.5" }, "\u0648\u0642\u062A: ", nikahEvent.urduTime)), /* @__PURE__ */ React.createElement("div", { className: "p-4 rounded-xl bg-emerald-950/70 border border-gold-500/25 shadow-md" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs text-gold-400 font-bold block mb-1" }, dinnerEvent.urduTitle), /* @__PURE__ */ React.createElement("span", { className: "text-base sm:text-lg font-bold text-ivory-50 block" }, dinnerEvent.urduVenueName), /* @__PURE__ */ React.createElement("span", { className: "text-xs sm:text-sm text-gold-300 block mt-1" }, INVITATION_DATA.eventDate.urduDay, "\u060C ", INVITATION_DATA.eventDate.urduDate), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-ivory-300/90 block mt-0.5" }, "\u0648\u0642\u062A: ", dinnerEvent.urduTime))), /* @__PURE__ */ React.createElement("div", { className: "mt-8 pt-6 border-t border-gold-500/20" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs text-gold-400 font-bold block mb-1" }, INVITATION_DATA.family.hosts.urduLabel, ":"), /* @__PURE__ */ React.createElement("p", { className: "text-lg sm:text-2xl font-bold text-ivory-50" }, INVITATION_DATA.hosts.urdu), /* @__PURE__ */ React.createElement("p", { className: "text-xs sm:text-sm text-gold-300/80 mt-1" }, "\u062C\u0645\u0644\u06C1 \u0627\u06C1\u0644 \u062E\u0627\u0646\u06C1\u060C \u0628\u0644\u0627\u0644 \u0641\u06CC\u0645\u0644\u06CC \u0648 \u0627\u0639\u0632\u06C1 \u0648 \u0627\u0642\u0627\u0631\u0628")))
    )
  ));
}

// test-selection.mjs
import fs from "fs";
function runTests() {
  console.log("=== RUNNING URDU INVITATION NAME SELECTION & VISIBILITY TESTS ===\n");
  let passed = 0;
  let total = 0;
  function assert(condition, message) {
    total++;
    if (condition) {
      console.log(`PASS: ${message}`);
      passed++;
    } else {
      console.error(`FAIL: ${message}`);
    }
  }
  const htmlDefault = renderToString(React2.createElement(UrduInvitationSection, { initialOption: "all" }));
  assert(htmlDefault.includes("\u0632\u0648\u06CC\u0627 \u0641\u0631\u062F\u0648\u0633"), 'Default render includes Bride name "\u0632\u0648\u06CC\u0627 \u0641\u0631\u062F\u0648\u0633"');
  assert(htmlDefault.includes("\u0645\u0635\u0648\u0651\u0631 \u0627\u0645\u06CC\u0646"), 'Default render includes Groom name "\u0645\u0635\u0648\u0651\u0631 \u0627\u0645\u06CC\u0646"');
  assert(htmlDefault.includes('dir="rtl"'), "Container has proper Urdu RTL direction");
  assert(htmlDefault.includes("font-urdu"), "Card uses Noto Nastaliq Urdu font");
  const htmlOptionA = renderToString(React2.createElement(UrduInvitationSection, { initialOption: "optionA" }));
  assert(htmlOptionA.includes("\u0632\u0648\u06CC\u0627 \u0641\u0631\u062F\u0648\u0633"), 'Option A: Bride name "\u0632\u0648\u06CC\u0627 \u0641\u0631\u062F\u0648\u0633" is visible and present');
  assert(htmlOptionA.includes("\u0645\u0635\u0648\u0651\u0631 \u0627\u0645\u06CC\u0646"), 'Option A: Groom name "\u0645\u0635\u0648\u0651\u0631 \u0627\u0645\u06CC\u0646" is STILL visible and NOT hidden/unmounted');
  assert(htmlOptionA.includes("Option A \u2022 \u0645\u0646\u062A\u062E\u0628 \u062F\u0644\u06C1\u0646"), "Option A: Bride has active Option A badge");
  assert(htmlOptionA.includes("urdu-name-yellow-bg"), "Option A: Yellow background is applied");
  const htmlOptionB = renderToString(React2.createElement(UrduInvitationSection, { initialOption: "optionB" }));
  assert(htmlOptionB.includes("\u0645\u0635\u0648\u0651\u0631 \u0627\u0645\u06CC\u0646"), 'Option B: Groom name "\u0645\u0635\u0648\u0651\u0631 \u0627\u0645\u06CC\u0646" is visible and present');
  assert(htmlOptionB.includes("\u0632\u0648\u06CC\u0627 \u0641\u0631\u062F\u0648\u0633"), 'Option B: Bride name "\u0632\u0648\u06CC\u0627 \u0641\u0631\u062F\u0648\u0633" is STILL visible and NOT hidden/unmounted');
  assert(htmlOptionB.includes("Option B \u2022 \u0645\u0646\u062A\u062E\u0628 \u062F\u0648\u0644\u06C1\u0627"), "Option B: Groom has active Option B badge");
  assert(htmlOptionB.includes("urdu-name-yellow-bg"), "Option B: Yellow background is applied");
  const customBride = "\u0639\u0627\u0626\u0634\u06C1 \u0641\u0627\u0637\u0645\u06C1";
  const customGroom = "\u0632\u06CC\u062F \u062E\u0627\u0646";
  const htmlCustomA = renderToString(React2.createElement(UrduInvitationSection, {
    initialOption: "optionA",
    brideUrduName: customBride,
    groomUrduName: customGroom
  }));
  assert(htmlCustomA.includes(customBride), 'Custom Names: Option A displays custom bride "\u0639\u0627\u0626\u0634\u06C1 \u0641\u0627\u0637\u0645\u06C1"');
  assert(htmlCustomA.includes(customGroom), 'Custom Names: Option A still displays custom groom "\u0632\u06CC\u062F \u062E\u0627\u0646"');
  const htmlCustomB = renderToString(React2.createElement(UrduInvitationSection, {
    initialOption: "optionB",
    brideUrduName: customBride,
    groomUrduName: customGroom
  }));
  assert(htmlCustomB.includes(customGroom), 'Custom Names: Option B displays custom groom "\u0632\u06CC\u062F \u062E\u0627\u0646"');
  assert(htmlCustomB.includes(customBride), 'Custom Names: Option B still displays custom bride "\u0639\u0627\u0626\u0634\u06C1 \u0641\u0627\u0637\u0645\u06C1"');
  assert(htmlDefault.includes("urdu-name-container"), "Uses urdu-name-container with isolation and relative positioning");
  assert(htmlDefault.includes("z-0"), "Yellow background layer is placed at z-0");
  assert(htmlDefault.includes("pointer-events-none"), "Background layer has pointer-events-none to prevent event interception");
  assert(htmlDefault.includes("relative z-10"), "Urdu name text is placed at relative z-10 above the background");
  assert(htmlDefault.includes("urdu-name-display"), "Urdu name text uses .urdu-name-display styling");
  const cssContent = fs.readFileSync("./src/index.css", "utf-8");
  assert(cssContent.includes("*::selection"), "CSS includes universal *::selection override");
  assert(cssContent.includes("-webkit-text-fill-color: #011c15 !important;"), "Selection sets solid dark text fill color (prevents transparent text vanishing)");
  assert(cssContent.includes(".urdu-name-display"), "CSS defines .urdu-name-display with z-index: 10");
  assert(cssContent.includes("color: #faecc4 !important;"), "CSS specifies solid text color to prevent WebKit clipping bug");
  assert(cssContent.includes(".urdu-name-yellow-bg"), "CSS defines .urdu-name-yellow-bg with z-index: 0 and pointer-events: none");
  console.log(`
=== RESULTS: ${passed}/${total} TESTS PASSED ===
`);
  if (passed !== total) {
    process.exit(1);
  }
}
runTests();
