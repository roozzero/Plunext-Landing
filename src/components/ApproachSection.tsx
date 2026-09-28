import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ApproachItem {
  id: string;
  title: string;
  icon: React.ReactNode;
}

export const ApproachSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const items: ApproachItem[] = [
    {
      id: 'insight',
      title: 'Expertise Informed By Real-World Insight',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          {/* Outlined currency coin with second small coin */}
          <circle cx="9" cy="9" r="6" />
          <path d="M9 6.5v5" />
          <path d="M7.5 7.5h3a1 1 0 0 1 0 2H7.5a1 1 0 0 0 0 2h3" />
          <path d="M15 11a6 6 0 0 1-5 5" />
          <circle cx="15.5" cy="15.5" r="4.5" />
        </svg>
      ),
    },
    {
      id: 'partnership',
      title: 'Partnership That Extends Beyond Capital',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          {/* Crest / house with rising trend line */}
          <path d="M3 10l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M8 15l3-3 2 2 3-4" />
        </svg>
      ),
    },
    {
      id: 'adaptability',
      title: 'Strength Through Adaptability',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          {/* Hexagon shield with clock / compass meter inside */}
          <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" />
          <circle cx="12" cy="11" r="3.5" />
          <path d="M12 9.5v1.5l1 1" />
        </svg>
      ),
    },
    {
      id: 'trust',
      title: 'Trust As The Foundation Of Value',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          {/* Connected people / team nodes */}
          <circle cx="12" cy="6" r="2.5" />
          <circle cx="6" cy="17" r="2.5" />
          <circle cx="18" cy="17" r="2.5" />
          <circle cx="12" cy="18" r="2" />
          <path d="M12 8.5v3.5" />
          <path d="M7.5 15l3-2" />
          <path d="M16.5 15l-3-2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-white text-[#0a181c] py-16 sm:py-24 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden border-t border-[#f0f3f2]">
      {/* Subtle background ambient geometric shards matching screenshot */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#f4f7f6]/70 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#f0f6f4]/60 rounded-full blur-3xl pointer-events-none translate-y-1/3" />
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-[#f2f7f5]/50 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ======================================================== */}
        {/* HEADER ROW: TITLE LEFT | PARAGRAPH & BUTTON RIGHT */}
        {/* ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-14 sm:mb-20">
          {/* Left Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight text-[#0a1e23] leading-[1.12]">
              Our Approach<br />
              To Value Creation
            </h2>
          </motion.div>

          {/* Right Description & Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start lg:max-w-sm"
          >
            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
              We combine analytical rigor, adaptability, and partnership to navigate complexity and deliver enduring outcomes.
            </p>

            <button
              type="button"
              className="mt-5 inline-flex items-center gap-2 bg-[#094751] hover:bg-[#07363e] text-white text-xs sm:text-[13px] font-medium px-5 py-2.5 rounded-full shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
            >
              <span>Discover More</span>
              <span className="group-hover:translate-x-0.5 transition-transform text-sm">→</span>
            </button>
          </motion.div>
        </div>

        {/* ======================================================== */}
        {/* LIST ITEMS: TURNS GREEN ON HOVER */}
        {/* ======================================================== */}
        <div className="border-t border-slate-200/70">
          {items.map((item, index) => {
            const isHovered = hoveredId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group border-b border-slate-200/70 py-6 sm:py-8 flex items-center gap-5 sm:gap-7 cursor-pointer transition-all duration-300"
              >
                {/* Icon Outline Badge (turns green on hover) */}
                <div
                  className={`w-11 h-11 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                    isHovered
                      ? 'border-[#0a8268] bg-[#0a8268]/10 text-[#0a8268] scale-105 shadow-sm'
                      : 'border-slate-300/80 bg-slate-50/50 text-slate-500 group-hover:border-[#0a8268] group-hover:text-[#0a8268]'
                  }`}
                >
                  {item.icon}
                </div>

                {/* List Title Text (turns green on hover) */}
                <span
                  className={`text-lg sm:text-xl lg:text-[22px] font-normal tracking-tight transition-colors duration-300 ${
                    isHovered
                      ? 'text-[#0a8268]'
                      : 'text-[#102428] group-hover:text-[#0a8268]'
                  }`}
                >
                  {item.title}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
