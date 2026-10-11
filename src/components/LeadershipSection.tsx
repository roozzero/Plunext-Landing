import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, X, Briefcase, GraduationCap, Award, CheckCircle2, Mail, ExternalLink, Sparkles, Building2, ChevronRight, ChevronLeft } from 'lucide-react';
import { Leader, LEADERS_DATA } from '../data/leadershipData';

export const LeadershipSection: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const leaders = LEADERS_DATA;

  const scrollToIndex = (index: number) => {
    setActiveSlide(index);
    if (scrollRef.current) {
      const cards = scrollRef.current.children;
      if (cards[index]) {
        (cards[index] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const children = Array.from(scrollRef.current.children) as HTMLElement[];
    const containerRect = scrollRef.current.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let minDistance = Infinity;
    children.forEach((child, idx) => {
      const rect = child.getBoundingClientRect();
      const childCenter = rect.left + rect.width / 2;
      const dist = Math.abs(containerCenter - childCenter);
      if (dist < minDistance) {
        minDistance = dist;
        closestIndex = idx;
      }
    });
    setActiveSlide(closestIndex);
  };

  return (
    <section id="leadership-section" className="relative w-full bg-white text-[#0a181c] py-16 sm:py-24 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden select-text" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Section Badge (Centered) */}
        <div className="w-full flex justify-center mb-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-[#0a4852] border border-emerald-200/60 text-xs font-semibold tracking-wide shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#439683]" />
            تیم و مدیران متخصص پلانکست
          </span>
        </div>

        {/* ======================================================== */}
        {/* HEADER: TITLE & SUBTITLE DIRECTLY BELOW IT (MATCHING OTHER SECTIONS) */}
        {/* ======================================================== */}
        <div className="w-full mb-10 sm:mb-14 text-right">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] font-bold text-[#0c2227] tracking-tight flex flex-wrap items-baseline gap-x-2.5 gap-y-1.5 leading-snug mt-2"
          >
            <span className="text-[#0c2227]">تیم متخصص و همراهان پلانکست:</span>
            <span className="text-[#439683] font-normal">
              با اعضای متخصص و مدیران فنی پلانکست آشنا شویم
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed w-full max-w-none text-justify"
          >
            تیمی متخصص در طراحی و توسعه وب‌سایت که با تکیه بر دانش فنی، تجربه و شناخت نیازهای کسب‌وکارها، راهکارهای دیجیتال متناسب با اهداف هر پروژه ارائه می‌دهد. برای آشنایی بیشتر با اعضای تیم، روی تصویر هر فرد کلیک کنید.
          </motion.p>
        </div>

        {/* ======================================================== */}
        {/* LEADERSHIP CARDS: MOBILE HORIZONTAL SLIDER / DESKTOP 3-COL */}
        {/* ======================================================== */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex md:grid md:grid-cols-3 gap-5 md:gap-7 lg:gap-8 items-stretch overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 touch-pan-x scroll-smooth"
          >
            {leaders.map((leader, idx) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedLeader(leader)}
                className="w-[84vw] max-w-[340px] shrink-0 snap-center md:w-auto md:shrink flex flex-col justify-between h-full group cursor-pointer text-right bg-slate-50/70 hover:bg-white rounded-[30px] p-5 sm:p-6 border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-[0_16px_36px_rgba(10,30,35,0.08)] transition-all duration-300"
              >
                {/* Top Section */}
                <div>
                  {/* Leader Photo */}
                  <div className="relative w-full aspect-[4/4.5] rounded-[24px] overflow-hidden bg-slate-100 shadow-[0_6px_20px_rgba(0,0,0,0.03)]">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-4">
                      <span className="text-white text-xs font-bold bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        مشاهده رزومه کامل 📄
                      </span>
                    </div>
                  </div>

                  {/* Leader Details */}
                  <div className="mt-5 text-right px-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0b242a] tracking-tight leading-snug group-hover:text-[#094751] transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-emerald-700 font-medium mt-1">
                      {leader.role}
                    </p>
                  </div>

                  {/* Bio summary: Strictly justified & max 2 lines with '...' */}
                  <p className="mt-3 text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed px-1 text-justify line-clamp-2">
                    {leader.bio}
                  </p>

                  {/* Social media buttons right under the description (LinkedIn, Instagram, Telegram, X) */}
                  <div
                    className="mt-4 px-1 flex items-center gap-2 select-none"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="text-[11px] font-medium text-slate-400 shrink-0 ml-1">
                      ارتباط:
                    </span>

                    {/* LinkedIn */}
                    <a
                      href={leader.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`لینکدین ${leader.name}`}
                      aria-label={`لینکدین ${leader.name}`}
                      className="w-8 h-8 rounded-full bg-slate-100/90 text-[#094751] hover:bg-emerald-600 hover:text-white border border-slate-200/80 hover:border-emerald-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_14px_rgba(16,185,129,0.35)] cursor-pointer"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.5a1.63 1.63 0 1 0 1.63 1.63A1.63 1.63 0 0 0 7.86 6.5z" />
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`اینستاگرام ${leader.name}`}
                      aria-label={`اینستاگرام ${leader.name}`}
                      className="w-8 h-8 rounded-full bg-slate-100/90 text-[#094751] hover:bg-emerald-600 hover:text-white border border-slate-200/80 hover:border-emerald-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_14px_rgba(16,185,129,0.35)] cursor-pointer"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                    </a>

                    {/* Telegram */}
                    <a
                      href="https://t.me/vort_support"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`تلگرام ${leader.name}`}
                      aria-label={`تلگرام ${leader.name}`}
                      className="w-8 h-8 rounded-full bg-slate-100/90 text-[#094751] hover:bg-emerald-600 hover:text-white border border-slate-200/80 hover:border-emerald-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_14px_rgba(16,185,129,0.35)] cursor-pointer"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06-.01.19-.02.32z"/>
                      </svg>
                    </a>

                    {/* X (Twitter) */}
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`ایکس ${leader.name}`}
                      aria-label={`ایکس ${leader.name}`}
                      className="w-8 h-8 rounded-full bg-slate-100/90 text-[#094751] hover:bg-emerald-600 hover:text-white border border-slate-200/80 hover:border-emerald-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_14px_rgba(16,185,129,0.35)] cursor-pointer"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* View Resume Action Hint: Perfectly aligned in the same row across all cards */}
                <div className="mt-5 pt-3.5 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-[#094751] px-1">
                  <span>مشاهده رزومه و سوابق حرفه‌ای</span>
                  <span className="group-hover:-translate-x-1 transition-transform">←</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Slider Controls (Arrows & Pagination Dots) */}
          <div className="flex md:hidden items-center justify-center gap-3 mt-4">
            <button
              type="button"
              onClick={() => scrollToIndex(Math.max(0, activeSlide - 1))}
              disabled={activeSlide === 0}
              className="p-2 rounded-full bg-slate-100 text-slate-700 disabled:opacity-30 disabled:pointer-events-none hover:bg-emerald-50 hover:text-emerald-700 transition-colors shadow-2xs cursor-pointer"
              aria-label="اسلاید قبلی"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {leaders.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlide === i ? 'w-6 bg-emerald-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`رفتن به اسلاید ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToIndex(Math.min(leaders.length - 1, activeSlide + 1))}
              disabled={activeSlide === leaders.length - 1}
              className="p-2 rounded-full bg-slate-100 text-slate-700 disabled:opacity-30 disabled:pointer-events-none hover:bg-emerald-50 hover:text-emerald-700 transition-colors shadow-2xs cursor-pointer"
              aria-label="اسلاید بعدی"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* WIDE RESUME MODAL FOR EACH LEADER                        */}
      {/* max-w-5xl, Rich Resume Layout, Photo, Experience & Badges */}
      {/* z-[1050] so it sits well above the floating navbar (z-[999])*/}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedLeader && (
          <div className="fixed inset-0 z-[1050] flex items-center justify-center p-3 sm:p-6" dir="rtl">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLeader(null)}
              className="absolute inset-0 bg-slate-950/75 backdrop-blur-md"
            />

            {/* Resume Dialog: Ultra-wide (max-w-5xl) with structured CV design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 25 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="relative w-full max-w-5xl bg-white border border-slate-200/90 rounded-[28px] sm:rounded-[36px] shadow-[0_25px_70px_rgba(0,0,0,0.35)] z-10 text-right overflow-hidden max-h-[92vh] flex flex-col select-text"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedLeader(null)}
                className="absolute top-5 left-5 z-20 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 shadow-sm transition-colors cursor-pointer"
                aria-label="بستن پنجره"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scroll Area */}
              <div className="overflow-y-auto space-y-7 p-6 sm:p-9">
                {/* Header: Photo + Profile Info + Contact Badges */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-200">
                  {/* Photo */}
                  <div className="w-32 h-36 sm:w-40 sm:h-44 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-slate-100">
                    <img
                      src={selectedLeader.image}
                      alt={selectedLeader.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Name, Role & Details */}
                  <div className="flex-1 text-center sm:text-right">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold mb-2">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>رزومه و پروفایل رسمی مدیریت</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                      {selectedLeader.name}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-emerald-700 mt-1">
                      {selectedLeader.role}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                      {selectedLeader.summary}
                    </p>

                    {/* Contact details & Social media buttons matching the card */}
                    <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs">
                      <a
                        href={`mailto:${selectedLeader.email}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-300 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-slate-500" />
                        <span className="font-mono dir-ltr">{selectedLeader.email}</span>
                      </a>

                      {/* Social media tokens: LinkedIn, Instagram, Telegram, X */}
                      <div className="flex items-center gap-2 select-none pr-1">
                        <span className="text-[11px] font-medium text-slate-400">شبکه‌ها:</span>

                        {/* LinkedIn */}
                        <a
                          href={selectedLeader.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`لینکدین ${selectedLeader.name}`}
                          aria-label={`لینکدین ${selectedLeader.name}`}
                          className="w-8 h-8 rounded-full bg-slate-100 text-[#094751] hover:bg-emerald-600 hover:text-white border border-slate-200 hover:border-emerald-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_14px_rgba(16,185,129,0.35)] cursor-pointer"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.5a1.63 1.63 0 1 0 1.63 1.63A1.63 1.63 0 0 0 7.86 6.5z" />
                          </svg>
                        </a>

                        {/* Instagram */}
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`اینستاگرام ${selectedLeader.name}`}
                          aria-label={`اینستاگرام ${selectedLeader.name}`}
                          className="w-8 h-8 rounded-full bg-slate-100 text-[#094751] hover:bg-emerald-600 hover:text-white border border-slate-200 hover:border-emerald-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_14px_rgba(16,185,129,0.35)] cursor-pointer"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                          </svg>
                        </a>

                        {/* Telegram */}
                        <a
                          href="https://t.me/vort_support"
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`تلگرام ${selectedLeader.name}`}
                          aria-label={`تلگرام ${selectedLeader.name}`}
                          className="w-8 h-8 rounded-full bg-slate-100 text-[#094751] hover:bg-emerald-600 hover:text-white border border-slate-200 hover:border-emerald-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_14px_rgba(16,185,129,0.35)] cursor-pointer"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06-.01.19-.02.32z"/>
                          </svg>
                        </a>

                        {/* X */}
                        <a
                          href="https://x.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`ایکس ${selectedLeader.name}`}
                          aria-label={`ایکس ${selectedLeader.name}`}
                          className="w-8 h-8 rounded-full bg-slate-100 text-[#094751] hover:bg-emerald-600 hover:text-white border border-slate-200 hover:border-emerald-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_14px_rgba(16,185,129,0.35)] cursor-pointer"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2-Column CV Body */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
                  {/* Right Column in RTL: Work Experience & Projects (lg:col-span-7) */}
                  <div className="lg:col-span-7 space-y-7">
                    {/* 1. Work Experience */}
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-4 flex items-center gap-2 pb-2 border-b border-slate-200">
                        <Briefcase className="w-5 h-5 text-emerald-600" />
                        <span>سوابق و مسئولیت‌های اجرایی (Work Experience)</span>
                      </h4>

                      <div className="space-y-4">
                        {selectedLeader.workExperience.map((exp, idx) => (
                          <div key={idx} className="relative pr-5 border-r-2 border-emerald-500/40 pb-4">
                            <span className="absolute -right-[7px] top-1.5 w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-emerald-100" />
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                              <h5 className="text-sm font-bold text-slate-900">{exp.role}</h5>
                              {/* Bold Year Badge with Vazir font */}
                              <span className="text-[11px] font-bold font-['Vazir',sans-serif] px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-300 w-fit shadow-2xs">
                                {exp.period}
                              </span>
                            </div>
                            <div className="text-xs font-semibold text-emerald-800 mb-1 flex items-center gap-1.5">
                              <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                              <span>{exp.company}</span>
                            </div>
                            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                              {exp.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 2. Key Projects & Strategic Milestones (Requested: زیر بخش سوابق یک قسمت پروژه ها نیز قرار بده) */}
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-4 flex items-center gap-2 pb-2 border-b border-slate-200">
                        <Award className="w-5 h-5 text-emerald-600" />
                        <span>پروژه‌ها و دستاوردهای شاخص (Key Projects & Milestones)</span>
                      </h4>

                      <div className="space-y-3">
                        {selectedLeader.projects.map((proj, pIdx) => (
                          <div
                            key={pIdx}
                            className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-emerald-300 hover:bg-emerald-50/20 transition-all text-right shadow-2xs"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                              <h5 className="text-sm font-bold text-slate-900">{proj.title}</h5>
                              {/* Bold Year Badge with Vazir font */}
                              <span className="text-[11px] font-bold font-['Vazir',sans-serif] px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 w-fit">
                                {proj.year}
                              </span>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 mb-2 text-xs">
                              <span className="text-slate-500 font-medium">{proj.client}</span>
                              <span className="text-slate-300">•</span>
                              <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                                {proj.metric}
                              </span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {proj.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Left Column in RTL: Skills, Education & Honors (lg:col-span-5) */}
                  <div className="lg:col-span-5 space-y-6">
                    {/* Redesigned Core Competencies (Requested: قسمت مهارت های کلیدی را بهتر دیزاین و چیدمان کن) */}
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50/60 via-teal-50/30 to-slate-50 border border-emerald-200/80 shadow-2xs">
                      <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-emerald-200/50">
                        <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-emerald-600" />
                          <span>مهارت‌های کلیدی و تخصص‌ها</span>
                        </h4>
                        <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/90 px-2.5 py-0.5 rounded-full border border-emerald-300 shadow-2xs">
                          تایید شده
                        </span>
                      </div>
                      <div className="space-y-2">
                        {selectedLeader.coreCompetencies.map((skill, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/80 text-slate-800 shadow-2xs hover:border-emerald-300 transition-colors"
                          >
                            <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs font-semibold leading-relaxed">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Education */}
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2 pb-2 border-b border-slate-200">
                        <GraduationCap className="w-4 h-4 text-emerald-600" />
                        <span>تحصیلات و مدارک تخصصی</span>
                      </h4>
                      <div className="space-y-3">
                        {selectedLeader.education.map((edu, eIdx) => (
                          <div key={eIdx} className="text-xs border-b border-slate-200/70 pb-2.5 last:border-none last:pb-0">
                            <span className="font-bold text-slate-900 block">{edu.degree}</span>
                            <div className="text-slate-500 mt-1 flex items-center gap-1.5">
                              <span>{edu.institution}</span>
                              {/* Bold Year Badge with Vazir font */}
                              <span className="text-xs font-bold font-['Vazir',sans-serif] text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                                {edu.year}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Honors & Accolades */}
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2 pb-2 border-b border-slate-200">
                        <Award className="w-4 h-4 text-emerald-600" />
                        <span>افتخارات و عضویت‌های حرفه‌ای</span>
                      </h4>
                      <div className="space-y-2.5">
                        {selectedLeader.honors.map((honor, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-700 p-2 rounded-xl bg-white border border-slate-200/70">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{honor}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action: (Requested: دکمه جلسه هماهنگی با این مدیر باید مستقیم به تلگرام برود) */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedLeader(null)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    بستن رزومه
                  </button>

                  <a
                    href="https://t.me/vort_support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-[#0a4852] hover:bg-[#07363e] text-white text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <span>هماهنگی جلسه با این مدیر در تلگرام</span>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06-.01.19-.02.32z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
