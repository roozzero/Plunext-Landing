import React from 'react';
import { motion } from 'motion/react';

interface LogoItem {
  id: string;
  name: string;
  render: () => React.ReactNode;
}

export const ClientLogosSection: React.FC = () => {
  const logos: LogoItem[] = [
    // 1. SABREPAK
    {
      id: 'sabrepak',
      name: 'Sabrepak',
      render: () => (
        <div className="flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors group cursor-pointer select-none">
          <span className="font-extrabold italic tracking-wider text-lg sm:text-xl font-sans text-slate-500 group-hover:text-slate-800 transition-colors">
            SABREPAK
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
          >
            <path d="M4 14c2-4 6-7 12-7l2 3-4 2 4 4-5 1-2 4-7-7z" />
            <path d="M12 9l2-4" />
          </svg>
        </div>
      ),
    },

    // 2. STEEL RIVER
    {
      id: 'steel-river',
      name: 'Steel River',
      render: () => (
        <div className="flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors group cursor-pointer select-none">
          {/* Gear / Cog Icon */}
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-slate-400 group-hover:text-slate-700 transition-colors"
          >
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.2 2.5a2 2 0 0 1 2.6-.9l.7.4a2 2 0 0 0 2 0l.7-.4a2 2 0 0 1 2.6.9l.4.7a2 2 0 0 0 1.5 1.5l.7.4a2 2 0 0 1 .9 2.6l-.4.7a2 2 0 0 0 0 2l.4.7a2 2 0 0 1-.9 2.6l-.7.4a2 2 0 0 0-1.5 1.5l-.4.7a2 2 0 0 1-2.6.9l-.7-.4a2 2 0 0 0-2 0l-.7.4a2 2 0 0 1-2.6-.9l-.4-.7a2 2 0 0 0-1.5-1.5l-.7-.4a2 2 0 0 1-.9-2.6l.4-.7a2 2 0 0 0 0-2l-.4-.7a2 2 0 0 1 .9-2.6l.7-.4a2 2 0 0 0 1.5-1.5l.4-.7Z"
            />
          </svg>
          <div className="flex flex-col leading-[1.05] tracking-tight">
            <span className="font-extrabold text-sm sm:text-base text-slate-500 group-hover:text-slate-800 transition-colors">
              STEEL
            </span>
            <span className="font-extrabold text-sm sm:text-base text-slate-500 group-hover:text-slate-800 transition-colors">
              RIVER
            </span>
          </div>
        </div>
      ),
    },

    // 3. Union SOFTWARE
    {
      id: 'union',
      name: 'Union Software',
      render: () => (
        <div className="flex flex-col items-start leading-[1.05] text-slate-400 hover:text-slate-700 transition-colors group cursor-pointer select-none">
          <span className="font-bold text-xl sm:text-2xl text-slate-500 group-hover:text-slate-800 tracking-tight transition-colors">
            Union
          </span>
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-slate-400 group-hover:text-slate-600 transition-colors font-semibold">
            SOFTWARE
          </span>
        </div>
      ),
    },

    // 4. Pay4Leads (Teal accent matching screenshot)
    {
      id: 'pay4leads',
      name: 'Pay4Leads',
      render: () => (
        <div className="flex items-center text-slate-600 hover:text-[#0b4852] transition-colors group cursor-pointer select-none">
          <span className="font-black text-xl sm:text-2xl tracking-tight text-[#165663] group-hover:text-[#083840] transition-colors">
            Pay<span className="text-[#0e4854]">4</span>Leads
          </span>
        </div>
      ),
    },

    // 5. NileQuest Capital
    {
      id: 'nilequest',
      name: 'NileQuest Capital',
      render: () => (
        <div className="flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors group cursor-pointer select-none">
          {/* River Waves Icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-slate-400 group-hover:text-slate-700 transition-colors"
          >
            <path d="M2 7c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" />
            <path d="M2 12c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" />
            <path d="M2 17c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" />
          </svg>
          <span className="font-medium text-base sm:text-lg text-slate-500 group-hover:text-slate-800 tracking-tight font-serif transition-colors">
            NileQuest Capital
          </span>
        </div>
      ),
    },

    // 6. OAKMONT EDUCATION
    {
      id: 'oakmont',
      name: 'Oakmont Education',
      render: () => (
        <div className="flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors group cursor-pointer select-none">
          {/* Tree Icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-slate-400 group-hover:text-slate-700 transition-colors"
          >
            <path d="M12 22v-6" />
            <path d="M12 16a6 6 0 0 1-6-6 4 4 0 0 1 2-3.4 5 5 0 0 1 8 0 4 4 0 0 1 2 3.4 6 6 0 0 1-6 6z" />
            <path d="M9 13l3-2 3 2" />
          </svg>
          <div className="flex flex-col leading-[1.05] tracking-tight">
            <span className="font-bold text-sm sm:text-base text-slate-500 group-hover:text-slate-800 transition-colors">
              OAKMONT
            </span>
            <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-slate-400 group-hover:text-slate-600 transition-colors">
              EDUCATION
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-[#fafcfb] border-t border-b border-slate-100 py-12 sm:py-16 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden">
      {/* Left side dot grid pattern matching screenshot */}
      <div className="absolute left-0 top-0 bottom-0 w-44 pointer-events-none opacity-40">
        <svg width="100%" height="100%" fill="none">
          <defs>
            <pattern id="client-dot-grid" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#94a3b8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#client-dot-grid)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#fafcfb]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Horizontal Logo Strip */}
        <div className="flex flex-wrap items-center justify-between gap-8 sm:gap-10 lg:gap-12">
          {logos.map((logo, idx) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
            >
              {logo.render()}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
