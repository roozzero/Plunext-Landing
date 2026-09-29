import React from 'react';
import { motion } from 'motion/react';

interface CardItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  hasWatermark?: boolean;
}

interface WhyPartnerSectionProps {
  onOpenContact?: () => void;
}

export const WhyPartnerSection: React.FC<WhyPartnerSectionProps> = ({ onOpenContact }) => {
  const cards: CardItem[] = [
    {
      id: 'practical-exp',
      title: 'Practical Experience That\nShapes Better Decisions',
      hasWatermark: true,
      icon: (
        // Diamond / Gem icon
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-[#0d3f44]"
        >
          <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
          <path d="M2 9h20" />
          <path d="M10 3l-4 6 6 12 6-12-4-6" />
        </svg>
      ),
    },
    {
      id: 'true-alignment',
      title: 'True Alignment Through\nShared Commitment',
      icon: (
        // Money bag / pouch / value lock
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-white/90"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
    },
    {
      id: 'responsive-collab',
      title: 'Responsive, Transparent,\nAnd Collaborative',
      icon: (
        // Pulse checkmark / handshake
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-white/90"
        >
          <path d="m9 11 3 3L22 4" />
          <path d="m21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-[#0a383d] text-white py-20 sm:py-28 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden">
      {/* Background rich dark teal/forest gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c3d42] via-[#09353a] to-[#062428] pointer-events-none" />

      {/* Radial soft emerald glow in center-top */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#10565e]/30 rounded-full blur-[140px] pointer-events-none" />

      {/* Bottom left dotted grid pattern matching screenshot */}
      <div className="absolute left-0 bottom-0 w-80 h-80 pointer-events-none opacity-20">
        <svg width="100%" height="100%" fill="none">
          <defs>
            <pattern id="why-partner-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2.5" cy="2.5" r="1.5" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#why-partner-dots)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#09353a]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ======================================================== */}
          {/* LEFT COLUMN: TITLE, BADGE, TEXT, AND BUTTON */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            {/* Category Subtitle with Bullet */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 text-xs sm:text-[13px] text-emerald-200/80 font-normal tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
              <span>Why Partner with Us</span>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight text-white leading-[1.14]"
            >
              Trusted By Founders<br />
              And Investors Alike
            </motion.h2>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-xs sm:text-sm text-slate-200/80 font-normal leading-relaxed max-w-sm"
            >
              We bring alignment, agility, and real-world experience to every partnership — ensuring value is built, not just financed.
            </motion.p>

            {/* Outlined Pill CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8"
            >
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white hover:bg-white/10 text-xs sm:text-[13px] font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer group select-none shadow-sm"
              >
                <span>Get In Touch</span>
                <span className="group-hover:translate-x-0.5 transition-transform text-sm">→</span>
              </button>
            </motion.div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: STACKED GLASSMORPHISM CARDS */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
            {cards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-white/10 hover:bg-white/[0.14] backdrop-blur-xl border border-white/15 hover:border-white/25 rounded-[26px] sm:rounded-[30px] p-7 sm:p-9 transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.15)] group overflow-hidden"
              >
                {/* Optional subtle watermark matrix inside card 1 */}
                {card.hasWatermark && (
                  <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none opacity-10">
                    <svg width="100%" height="100%" fill="none">
                      <pattern id="card-dot-watermark" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.2" fill="#ffffff" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#card-dot-watermark)" />
                    </svg>
                  </div>
                )}

                {/* Card Icon Badge */}
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ${
                    idx === 0
                      ? 'bg-white shadow-md'
                      : 'bg-white/15 border border-white/20'
                  }`}
                >
                  {card.icon}
                </div>

                {/* Card Title */}
                <h3 className="mt-8 text-xl sm:text-2xl font-medium text-white tracking-tight leading-[1.25] whitespace-pre-line">
                  {card.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
