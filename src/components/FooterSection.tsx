import React from 'react';
import logoImg from '../assets/imgs/Logo.png';

interface FooterSectionProps {
  onOpenContact?: () => void;
  onNavigate?: (navId: string) => void;
  onOpenTerms?: () => void;
  onOpenPrivacy?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onOpenContact,
  onNavigate,
  onOpenTerms,
  onOpenPrivacy,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white">
      <footer className="relative w-full bg-[#08383f] text-slate-300 pt-8 sm:pt-10 pb-5 sm:pb-6 px-6 sm:px-10 md:px-14 lg:px-16 rounded-t-[28px] sm:rounded-t-[36px] overflow-hidden select-text" dir="rtl">
        {/* Decorative dot matrix pattern */}
      <div className="absolute bottom-2 right-4 w-48 h-36 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" fill="none">
          <defs>
            <pattern id="footer-dots-right" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.3" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-dots-right)" />
        </svg>
      </div>

      <div className="absolute top-2 left-4 w-48 h-36 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" fill="none">
          <defs>
            <pattern id="footer-dots-left" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.3" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-dots-left)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col justify-between">
        {/* ======================================================== */}
        {/* TOP ROW: 4 COLUMNS (COMPACT & BALANCED)                  */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-7 lg:gap-8 pb-7 sm:pb-8 text-right">
          {/* Column 1: Mission Tagline & CTA Button (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start text-right">
            <div className="mb-2.5">
              
              {/* Prominently Styled Brand Tagline */}
              <div className="relative inline-block py-1">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-emerald-500/25 via-teal-400/10 to-transparent blur-sm pointer-events-none" />
                <h2 className="relative text-base sm:text-lg lg:text-xl font-extrabold tracking-tight leading-snug flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse shrink-0" />
                  <span className="bg-gradient-to-r from-white via-emerald-200 to-teal-100 bg-clip-text text-transparent font-black tracking-normal">
                    پلانکست؛ همراه شما در مسیر رشد آنلاین
                  </span>
                </h2>
              </div>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-200/90 font-normal leading-relaxed max-w-[320px] text-justify">
              طراحی سایت فروشگاهی و شرکتی تا توسعه وردپرس، برنامه‌نویسی اختصاصی و خدمات سئو
            </p>

            <button
              type="button"
              onClick={onOpenContact}
              className="mt-4 inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#08383f] font-medium text-xs sm:text-[13px] px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer select-text group"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>پشتیبانی آنلاین</span>
              <span className="group-hover:-translate-x-0.5 transition-transform text-sm">←</span>
            </button>
          </div>

          {/* Column 2: Navigation Links (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col space-y-2 text-xs sm:text-[13px] text-right">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('Home');
                scrollToTop();
              }}
              className="inline-flex items-center gap-2 text-white hover:text-emerald-300 transition-colors cursor-pointer w-fit group"
            >
              <span className="w-1.5 h-3 bg-emerald-400 rounded-sm inline-block group-hover:scale-110 transition-transform" />
              <span>صفحه اصلی</span>
            </a>

            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('Portfolio');
              }}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer w-fit"
            >
              نمونه کارها
            </a>

            <a
              href="#blog"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('Blog');
              }}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer w-fit"
            >
              وبلاگ
            </a>

            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('About Us');
              }}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer w-fit"
            >
              درباره ما
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('Contact');
              }}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer w-fit"
            >
              ارتباط با ما
            </a>
          </div>

          {/* Column 3: Legal & Social Links (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col space-y-2 text-xs sm:text-[13px] text-right">
            <a
              href="#terms"
              onClick={(e) => {
                e.preventDefault();
                if (onOpenTerms) onOpenTerms();
              }}
              className="text-slate-300 hover:text-emerald-300 transition-colors cursor-pointer w-fit"
            >
              شرایط و قوانین استفاده
            </a>

            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                if (onOpenPrivacy) onOpenPrivacy();
              }}
              className="text-slate-300 hover:text-emerald-300 transition-colors cursor-pointer w-fit"
            >
              سیاست حفظ حریم خصوصی
            </a>
          </div>

          {/* Column 4: Contact Details (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col space-y-2 text-xs sm:text-[13px] text-right">
            <a
              href="mailto:info@vort.com"
              className="text-slate-300 hover:text-white transition-colors cursor-pointer w-fit dir-ltr"
            >
              info@plunex.ir
            </a>

            <span className="text-slate-300">
              زنجان، ابهر 
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* BOTTOM ROW: LOGO RIGHT | COPYRIGHT CENTER | BACK TO TOP LEFT */}
        {/* ======================================================== */}
        <div className="pt-4 sm:pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          {/* Brand Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="لوگوی پلانکست"
              className="h-6 sm:h-7 w-auto object-contain cursor-pointer brightness-100"
              onClick={scrollToTop}
            />
          </div>

          {/* Center: Copyright Notice */}
          <div className="text-xs text-slate-400 font-normal">
            تمامی حقوق مادی و معنوی محفوظ است © ۱۴۰۵
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};
