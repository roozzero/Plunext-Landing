import React from 'react';
import { motion } from 'motion/react';

interface ConnectBannerSectionProps {
  onOpenContact?: () => void;
}

export const ConnectBannerSection: React.FC<ConnectBannerSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden px-6 sm:px-12 py-16 sm:py-20 flex flex-col items-center justify-center text-center shadow-[0_15px_40px_rgba(15,58,64,0.12)] border border-teal-900/10"
          style={{
            background: 'linear-gradient(135deg, #1b5b63 0%, #28747c 50%, #154e55 100%)',
          }}
        >
          {/* Subtle translucent faceted background shards matching screenshot */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Soft central radiant glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-400/15 rounded-full blur-[100px]" />

            {/* Top right angular facet */}
            <div className="absolute -top-10 right-1/4 w-72 h-72 bg-white/[0.04] rotate-45 pointer-events-none" />

            {/* Far right triangular facet */}
            <div className="absolute top-4 -right-12 w-64 h-64 bg-white/[0.03] -rotate-12 pointer-events-none" />

            {/* Bottom left triangular facet */}
            <div className="absolute -bottom-16 -left-12 w-72 h-72 bg-white/[0.04] rotate-12 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
            {/* Top Subtitle with bullet */}
            <div className="flex items-center gap-2 text-xs sm:text-[13px] text-emerald-100/90 font-normal tracking-wide mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
              <span>Let's Get Started</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-medium tracking-tight text-white leading-tight">
              Connect With Us
            </h2>

            {/* Subtitle Description */}
            <p className="mt-4 text-xs sm:text-sm text-slate-200/90 font-normal leading-relaxed max-w-md mx-auto">
              Your next opportunity starts here. Reach out to our team and discover what's possible.
            </p>

            {/* White Pill Button: Get In Touch → */}
            <div className="mt-8">
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#0e3b42] font-medium text-xs sm:text-[13px] px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer select-none group"
              >
                <span>Get In Touch</span>
                <span className="group-hover:translate-x-0.5 transition-transform text-sm">→</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
