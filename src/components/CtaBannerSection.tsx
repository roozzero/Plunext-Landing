import React from 'react';
import { motion } from 'motion/react';

interface CtaBannerSectionProps {
  onOpenContact?: () => void;
}

export const CtaBannerSection: React.FC<CtaBannerSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden px-8 sm:px-12 md:px-16 py-12 sm:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-[0_15px_40px_rgba(15,58,64,0.12)] border border-teal-900/10"
          style={{
            background: 'linear-gradient(98deg, #539490 0%, #357b7a 32%, #1a565d 70%, #0d383f 100%)',
          }}
        >
          {/* Subtle geometric facets & dot pattern in top-right corner matching screenshot */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none overflow-hidden">
            {/* Polygonal decorative shards */}
            <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-white/[0.04] rotate-45 pointer-events-none" />
            <div className="absolute top-[10%] right-[15%] w-64 h-64 bg-white/[0.03] rotate-12 pointer-events-none" />

            {/* Subtle dot matrix watermark */}
            <div className="absolute top-2 right-24 w-48 h-32 opacity-15">
              <svg width="100%" height="100%" fill="none">
                <defs>
                  <pattern id="cta-dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.2" fill="#ffffff" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-dots)" />
              </svg>
            </div>
          </div>

          {/* Left Title: 2 lines */}
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-normal sm:font-medium tracking-tight text-white leading-tight">
              Ready To Find The Perfect Capital Partner<br className="hidden sm:inline" />
              {' '}For Your Next Move?
            </h2>
          </div>

          {/* Right Button: White pill */}
          <div className="relative z-10 shrink-0">
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#0d383f] font-medium text-xs sm:text-[13px] px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer select-none group"
            >
              <span>Contact Us</span>
              <span className="group-hover:translate-x-0.5 transition-transform text-sm">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
