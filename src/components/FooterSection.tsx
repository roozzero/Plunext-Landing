import React from 'react';
import logoImg from '../assets/imgs/Logo.png';

interface FooterSectionProps {
  onOpenContact?: () => void;
  onNavigate?: (navId: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onOpenContact,
  onNavigate,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#08383f] text-slate-300 pt-16 sm:pt-20 pb-10 sm:pb-12 px-6 sm:px-10 md:px-14 lg:px-16 rounded-t-[32px] sm:rounded-t-[44px] overflow-hidden select-none">
      {/* Decorative dot matrix pattern in bottom-left corner matching screenshot */}
      <div className="absolute bottom-4 left-4 w-56 h-48 opacity-15 pointer-events-none">
        <svg width="100%" height="100%" fill="none">
          <defs>
            <pattern id="footer-dots-left" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.3" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-dots-left)" />
        </svg>
      </div>

      {/* Decorative dot matrix pattern in top-right corner matching screenshot */}
      <div className="absolute top-2 right-4 w-64 h-48 opacity-15 pointer-events-none">
        <svg width="100%" height="100%" fill="none">
          <defs>
            <pattern id="footer-dots-right" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.3" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-dots-right)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col justify-between min-h-[340px]">
        {/* ======================================================== */}
        {/* TOP ROW: 4 COLUMNS */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 sm:pb-20">
          {/* Column 1: Mission Tagline & CTA Button (lg:col-span-5) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <p className="text-xs sm:text-[13px] text-slate-200/90 font-normal leading-relaxed max-w-[280px]">
              Vort backs exceptional entrepreneurs in acquisition and growth.
            </p>

            <button
              type="button"
              onClick={onOpenContact}
              className="mt-6 inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#08383f] font-medium text-xs sm:text-[13px] px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer select-none group"
            >
              <span>Get In Touch</span>
              <span className="group-hover:translate-x-0.5 transition-transform text-sm">→</span>
            </button>
          </div>

          {/* Column 2: Navigation Links (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col space-y-3.5 text-xs sm:text-[13px]">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('Home');
                scrollToTop();
              }}
              className="inline-flex items-center gap-2 text-white hover:text-emerald-300 transition-colors cursor-pointer w-fit group"
            >
              {/* Subtle green marker like screenshot */}
              <span className="w-1.5 h-3 bg-emerald-400 rounded-sm inline-block group-hover:scale-110 transition-transform" />
              <span>Home</span>
            </a>

            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('About Us');
              }}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer w-fit"
            >
              About
            </a>

            <a
              href="#approach"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('Our Approach');
              }}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer w-fit"
            >
              Our Approach
            </a>

            <a
              href="#criteria"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('Investment Criteria');
              }}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer w-fit"
            >
              Investment Criteria
            </a>

            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('Portfolio');
              }}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer w-fit"
            >
              Portfolio
            </a>
          </div>

          {/* Column 3: Legal & Social Links (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col space-y-3.5 text-xs sm:text-[13px]">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors cursor-pointer w-fit"
            >
              LinkedIn
            </a>

            <a
              href="#terms"
              onClick={(e) => e.preventDefault()}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer w-fit"
            >
              Terms of Use
            </a>

            <a
              href="#privacy"
              onClick={(e) => e.preventDefault()}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer w-fit"
            >
              Privacy Policy
            </a>
          </div>

          {/* Column 4: Contact Details (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col space-y-3.5 text-xs sm:text-[13px]">
            <a
              href="mailto:info@vort.com"
              className="text-slate-300 hover:text-white transition-colors cursor-pointer w-fit"
            >
              info@vort.com
            </a>

            <span className="text-slate-300">
              Los Angeles, CA
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* BOTTOM ROW: LOGO LEFT | COPYRIGHT CENTER | BACK TO TOP RIGHT */}
        {/* ======================================================== */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left: Brand Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="Vort Logo"
              className="h-7 sm:h-8 w-auto object-contain cursor-pointer brightness-100"
              onClick={scrollToTop}
            />
          </div>

          {/* Center: Copyright Notice */}
          <div className="text-xs sm:text-[13px] text-slate-400 font-normal">
            © 2025 All Rights Reserved.
          </div>

          {/* Right: Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="text-xs sm:text-[13px] text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer group select-none"
          >
            <span>Back to Top</span>
            <span className="group-hover:-translate-y-0.5 transition-transform">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
