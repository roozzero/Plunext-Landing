import React, { useState } from 'react';
import { motion } from 'motion/react';
import partnersImg from '../assets/imgs/Partners.jpg';

interface HubPin {
  id: string;
  name: string;
  region: string;
  x: number; // percentage
  y: number; // percentage
}

const GLOBAL_HUBS: HubPin[] = [
  { id: 'sf', name: 'San Francisco', region: 'North America Tech Hub', x: 19, y: 35 },
  { id: 'ny', name: 'New York', region: 'Private Markets Capital', x: 28, y: 38 },
  { id: 'lon', name: 'London', region: 'European Headquarters', x: 48, y: 28 },
  { id: 'fra', name: 'Frankfurt', region: 'Continental Infrastructure', x: 53, y: 30 },
  { id: 'dxb', name: 'Dubai', region: 'MENA Strategic Gateway', x: 62, y: 46 },
  { id: 'sg', name: 'Singapore', region: 'Southeast Asia Hub', x: 78, y: 62 },
  { id: 'tyo', name: 'Tokyo', region: 'East Asia Growth Office', x: 86, y: 38 },
  { id: 'syd', name: 'Sydney', region: 'Pacific Infrastructure', x: 88, y: 80 },
];

const GROWTH_DATA = [
  { year: '2020', height: 28, value: '+1k', color: '#c7ded8', textColor: '#2b524c' },
  { year: '2021', height: 38, value: '+1.2k', color: '#c7ded8', textColor: '#2b524c' },
  { year: '2022', height: 48, value: '+1.5k', color: '#c7ded8', textColor: '#2b524c' },
  { year: '2023', height: 68, value: '+2.2k', color: '#b6d7ce', textColor: '#1e4b44' },
  { year: '2024', height: 82, value: '+2.6k', color: '#a2ccc1', textColor: '#123f38' },
  { year: '2025', height: 100, value: '+3k', color: '#0a4852', textColor: '#ffffff' },
];

export const InsightSection: React.FC = () => {
  const [activePin, setActivePin] = useState<HubPin | null>(null);
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(null);

  return (
    <section
      id="insight-section"
      className="relative w-full bg-[#fbfdfc] text-[#0a181c] py-10 sm:py-14 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* ======================================================== */}
        {/* SECTION HEADER: COMPACT HEIGHT MATCHING SPEC */}
        {/* ======================================================== */}
        <div className="max-w-2xl mb-6 sm:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight leading-[1.12]"
          >
            <span className="block text-[#0b1e22]">Every Investment</span>
            <span className="block text-[#97d0c0] font-normal">Begins With Insight</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2.5 text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-xl"
          >
            Our partners bring decades of private market experience, a global perspective, and a shared commitment to sustainable value creation.
          </motion.p>
        </div>

        {/* ======================================================== */}
        {/* 2-COLUMN MAIN GRID: COMPACT PROPORTIONED HEIGHT */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* ======================================================== */}
          {/* LEFT COLUMN: PARTNERS CARD WITH FLOATING FUNDS OVER TIME */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 rounded-[24px] sm:rounded-[28px] overflow-hidden relative shadow-[0_8px_30px_rgba(0,0,0,0.05)] min-h-[380px] sm:min-h-[420px] flex flex-col justify-end p-5 sm:p-6 group"
          >
            {/* Background Image: Partners Photo */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={partnersImg}
                alt="Vort Partners"
                className="w-full h-full object-cover object-top sm:object-center group-hover:scale-[1.01] transition-transform duration-700"
              />
              {/* Subtle bottom vignette to frame the floating card */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
            </div>

            {/* Floating Glassmorphism Card: Our Funds Over Time */}
            <div className="relative z-10 bg-black/60 hover:bg-black/70 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 sm:p-5 text-white max-w-[280px] shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-300">
              <h4 className="text-xs sm:text-sm font-medium text-slate-100 mb-2.5 tracking-wide">
                Our Funds Over Time
              </h4>

              <div className="flex items-center gap-6">
                {/* Fund I */}
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-none">
                    $35M
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-300 mt-1 font-normal">
                    Fund I (2024)
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="w-[1px] h-8 bg-white/20" />

                {/* Fund II */}
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-none">
                    $55M
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-300 mt-1 font-normal">
                    Fund II (2025)
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: STRATEGIC PERSPECTIVE + DISCIPLINED GROWTH */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5 justify-between">
            {/* 1. Strategic Perspective (Dotted World Map + Hub Pins) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#f2f6f5] hover:bg-[#eef3f1] rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 border border-[#e2eae7] flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] min-h-[185px] sm:min-h-[200px] relative overflow-hidden transition-colors duration-300"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-medium text-[#0c2227] tracking-tight">
                  Strategic Perspective
                </h3>
              </div>

              {/* Dotted World Map with Location Pins */}
              <div className="relative w-full h-[125px] sm:h-[145px] mt-2 flex items-center justify-center">
                {/* SVG Dotted Matrix World Map */}
                <svg
                  viewBox="0 0 1000 500"
                  className="w-full h-full object-contain opacity-75"
                  fill="none"
                >
                  <defs>
                    <pattern id="dot-matrix" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                      <circle cx="3" cy="3" r="1.5" fill="#4a555b" opacity="0.85" />
                    </pattern>
                  </defs>

                  {/* Continental Dotted Silhouettes */}
                  <path
                    d="M 120 100 Q 180 80 250 90 Q 320 110 300 190 Q 260 260 210 270 Q 160 250 140 180 Z"
                    fill="url(#dot-matrix)"
                  />
                  <path
                    d="M 240 280 Q 300 300 320 370 Q 280 470 250 480 Q 220 420 230 330 Z"
                    fill="url(#dot-matrix)"
                  />
                  <path
                    d="M 440 90 Q 550 70 580 140 Q 550 200 460 200 Q 420 150 440 90 Z"
                    fill="url(#dot-matrix)"
                  />
                  <path
                    d="M 450 210 Q 560 210 570 300 Q 540 420 480 430 Q 430 340 440 260 Z"
                    fill="url(#dot-matrix)"
                  />
                  <path
                    d="M 580 90 Q 820 80 880 180 Q 820 280 680 260 Q 580 210 580 140 Z"
                    fill="url(#dot-matrix)"
                  />
                  <path
                    d="M 760 340 Q 860 330 880 400 Q 840 460 770 440 Q 750 380 760 340 Z"
                    fill="url(#dot-matrix)"
                  />
                </svg>

                {/* Hub Location Pins */}
                {GLOBAL_HUBS.map((hub) => {
                  const isHovered = activePin?.id === hub.id;
                  return (
                    <div
                      key={hub.id}
                      style={{
                        position: 'absolute',
                        left: `${hub.x}%`,
                        top: `${hub.y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      onMouseEnter={() => setActivePin(hub)}
                      onMouseLeave={() => setActivePin(null)}
                      className="cursor-pointer group/pin z-20"
                    >
                      {/* Outer pulse */}
                      <span className="absolute -inset-1 rounded-full bg-emerald-500/20 animate-ping pointer-events-none" />

                      {/* Pin Marker Badge */}
                      <div className="relative w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0a3138] border-2 border-white flex items-center justify-center shadow-md group-hover/pin:scale-125 transition-transform">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5eead4]" />
                      </div>

                      {/* Tooltip on hover */}
                      {isHovered && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 whitespace-nowrap bg-[#0a1e24] text-white text-[11px] px-2.5 py-1 rounded-lg shadow-xl border border-white/10 z-30 pointer-events-none">
                          <div className="font-semibold text-emerald-300">{hub.name}</div>
                          <div className="text-[10px] text-slate-300">{hub.region}</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* 2. Disciplined Growth (Bar Chart) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#f2f6f5] hover:bg-[#eef3f1] rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 border border-[#e2eae7] shadow-[0_4px_20px_rgba(0,0,0,0.02)] min-h-[185px] sm:min-h-[200px] flex flex-col justify-between transition-colors duration-300"
            >
              {/* Header Texts */}
              <div>
                <h3 className="text-xl sm:text-2xl font-medium text-[#0c2227] tracking-tight">
                  Disciplined Growth
                </h3>
                <p className="mt-1 text-xs text-slate-500 max-w-sm leading-relaxed">
                  A steady, research-driven approach focused on sustainable performance across market cycles.
                </p>
              </div>

              {/* Bar Chart Container */}
              <div className="mt-4 pt-2 flex items-end justify-between sm:justify-end sm:gap-4 h-28 sm:h-32">
                {GROWTH_DATA.map((item, index) => {
                  const isHovered = hoveredBarIndex === index;
                  return (
                    <div
                      key={item.year}
                      onMouseEnter={() => setHoveredBarIndex(index)}
                      onMouseLeave={() => setHoveredBarIndex(null)}
                      className="flex flex-col items-center gap-1.5 group cursor-pointer"
                    >
                      {/* Vertical Bar */}
                      <div className="relative w-7 sm:w-9 bg-slate-200/40 rounded-lg overflow-hidden flex flex-col justify-end h-20 sm:h-24">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${item.height}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            delay: 0.2 + index * 0.08,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          style={{
                            backgroundColor: item.color,
                          }}
                          className={`w-full rounded-lg flex items-center justify-center transition-all ${
                            isHovered ? 'brightness-110 shadow-md' : ''
                          }`}
                        >
                          {/* Inner Metric Label */}
                          <span
                            style={{ color: item.textColor }}
                            className="text-[9px] sm:text-[10px] font-mono font-medium -rotate-90 sm:rotate-0 tracking-tight"
                          >
                            {item.value}
                          </span>
                        </motion.div>
                      </div>

                      {/* Year Label */}
                      <span
                        className={`text-[10px] sm:text-[11px] font-mono transition-colors ${
                          isHovered || item.year === '2025'
                            ? 'text-[#0a4852] font-bold'
                            : 'text-slate-500'
                        }`}
                      >
                        {item.year}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
