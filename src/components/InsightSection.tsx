import React, { useState } from 'react';
import { motion } from 'motion/react';
import partnersImg from '../assets/imgs/Partners.jpg';
import { WORLD_DOTS_PATH } from './worldMapData';

interface MapPin {
  id: string;
  x: number;
  y: number;
  city: string;
  region: string;
}

const MAP_PINS: MapPin[] = [
  { id: 'p1', x: 115, y: 105, city: 'ونکوور', region: 'کانادا و شمال‌غرب' },
  { id: 'p2', x: 108, y: 168, city: 'سیاتل', region: 'شمال‌غرب آمریکا' },
  { id: 'p3', x: 80, y: 210, city: 'سان‌فرانسیسکو', region: 'سیلیکون ولی / کالیفرنیا' },
  { id: 'p4', x: 185, y: 165, city: 'شیکاگو', region: 'مرکز و غرب میانه' },
  { id: 'p5', x: 228, y: 138, city: 'نیویورک', region: 'ساحل شرقی و تورنتو' },
  { id: 'p6', x: 415, y: 155, city: 'لندن', region: 'بریتانیا و اروپای غربی' },
  { id: 'p7', x: 462, y: 118, city: 'استکهلم', region: 'منطقه اسکاندیناوی' },
  { id: 'p8', x: 466, y: 155, city: 'فرانکفورت / زوریخ', region: 'اروپای مرکزی' },
  { id: 'p9', x: 515, y: 135, city: 'هلسینکی / بالتیک', region: 'شمال شرق اروپا' },
  { id: 'p10', x: 545, y: 115, city: 'مسکو / اوراسیا', region: 'ارتباطات اوراسیا' },
  { id: 'p11', x: 538, y: 205, city: 'دبی / خلیج فارس', region: 'خاورمیانه و غرب آسیا' },
  { id: 'p12', x: 850, y: 345, city: 'سیدنی', region: 'استرالیا' },
  { id: 'p13', x: 915, y: 340, city: 'ملبورن / اوکلند', region: 'اقیانوسیه و نیوزیلند' },
];

const GROWTH_DATA = [
  { year: '۱۳۹۹', height: 28, value: '+۱K', color: '#c7ded8', textColor: '#2b524c' },
  { year: '۱۴۰۰', height: 38, value: '+۱.۲K', color: '#c7ded8', textColor: '#2b524c' },
  { year: '۱۴۰۱', height: 48, value: '+۱.۵K', color: '#c7ded8', textColor: '#2b524c' },
  { year: '۱۴۰۲', height: 68, value: '+۲.۲K', color: '#b6d7ce', textColor: '#1e4b44' },
  { year: '۱۴۰۳', height: 82, value: '+۲.۶K', color: '#a2ccc1', textColor: '#123f38' },
  { year: '۱۴۰۴', height: 100, value: '+۳K', color: '#0a4852', textColor: '#ffffff' },
];

export const InsightSection: React.FC = () => {
  const [hoveredPinId, setHoveredPinId] = useState<string | null>(null);
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(null);

  const hoveredPin = MAP_PINS.find((p) => p.id === hoveredPinId);

  return (
    <section
      id="insight-section"
      className="relative w-full bg-[#fbfdfc] text-[#0a181c] py-10 sm:py-14 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden text-right"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        {/* ======================================================== */}
        {/* SECTION HEADER: COMPACT HEIGHT                           */}
        {/* ======================================================== */}
        <div className="max-w-2xl mb-6 sm:mb-8 text-right">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight leading-[1.2]"
          >
            <span className="block text-[#0b1e22]">هر سرمایه‌گذاری ماندگار</span>
            <span className="block text-[#439683] font-normal">با بینش عمیق آغاز می‌شود</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2.5 text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-xl text-right"
          >
            شرکای ما دهه‌ها تجربه در بازارهای پیشرو، چشم‌اندازی آینده‌نگر و تعهدی مشترک به خلق ارزش پایدار و بلندمدت را در کنار یکدیگر قرار داده‌اند.
          </motion.p>
        </div>

        {/* ======================================================== */}
        {/* 2-COLUMN MAIN GRID: COMPACT PROPORTIONED HEIGHT          */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* ======================================================== */}
          {/* RIGHT COLUMN IN RTL: PARTNERS CARD                       */}
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
                alt="شرکای ورت (Vort)"
                className="w-full h-full object-cover object-top sm:object-center group-hover:scale-[1.01] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
            </div>

            {/* Floating Glassmorphism Card: Our Funds Over Time */}
            <div className="relative z-10 bg-black/60 hover:bg-black/70 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 sm:p-5 text-white max-w-[290px] shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-300 text-right">
              <h4 className="text-xs sm:text-sm font-medium text-slate-100 mb-2.5 tracking-wide">
                روند ارزش صندوق‌ها
              </h4>

              <div className="flex items-center gap-6 justify-between">
                <div className="text-right">
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-none">
                    ۳۵M$
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-300 mt-1 font-normal">
                    صندوق ۱ (۱۴۰۳)
                  </div>
                </div>

                <div className="w-[1px] h-8 bg-white/20" />

                <div className="text-right">
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-none">
                    ۵۵M$
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-300 mt-1 font-normal">
                    صندوق ۲ (۱۴۰۴)
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* LEFT COLUMN IN RTL: STRATEGY + GROWTH                    */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5 justify-between">
            {/* 1. Strategic Perspective (EXACT REPLICA OF ATTACHED SCREENSHOT) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#edf4f2] hover:bg-[#eaf1ef] rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 border border-[#dfe8e5] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-colors duration-300 w-full relative overflow-hidden text-left"
              dir="ltr"
            >
              {/* Title matching attached screenshot: 'Strategic Perspective' */}
              <div className="relative z-10 flex items-center justify-between mb-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-[27px] font-normal text-[#123137] tracking-tight font-sans select-none">
                    Strategic Perspective
                  </h3>
                </div>

                {/* Tooltip badge for active pin if hovered */}
                {hoveredPin && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="px-2.5 py-1 rounded-lg bg-[#0e272c] text-white text-[11px] font-medium shadow-md border border-emerald-500/30 flex items-center gap-1.5"
                    dir="rtl"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{hoveredPin.city} — {hoveredPin.region}</span>
                  </motion.div>
                )}
              </div>

              {/* Dotted World Map Canvas matching screenshot */}
              <div className="relative w-full h-[220px] sm:h-[250px] flex items-center justify-center select-none overflow-hidden my-auto">
                <svg
                  viewBox="0 0 950 440"
                  className="w-full h-full object-contain"
                  fill="none"
                >
                  <defs>
                    <filter id="pin-drop-shadow" x="-30%" y="-30%" width="160%" height="160%">
                      <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.28" />
                    </filter>
                  </defs>

                  {/* Dotted World Continents Path */}
                  <path
                    d={WORLD_DOTS_PATH}
                    fill="#384f54"
                    opacity="0.88"
                  />

                  {/* Interactive Map Pins identical to screenshot */}
                  {MAP_PINS.map((pin) => {
                    const isHovered = hoveredPinId === pin.id;
                    return (
                      <g
                        key={pin.id}
                        transform={`translate(${pin.x}, ${pin.y})`}
                        className="cursor-pointer transition-transform duration-200"
                        onMouseEnter={() => setHoveredPinId(pin.id)}
                        onMouseLeave={() => setHoveredPinId(null)}
                      >
                        {/* Pulse halo when hovered */}
                        {isHovered && (
                          <circle
                            cx="0"
                            cy="-16"
                            r="14"
                            fill="none"
                            stroke="#2dd4bf"
                            strokeWidth="1.5"
                            className="animate-ping"
                            opacity="0.6"
                          />
                        )}

                        {/* Teardrop Pin Marker Body */}
                        <path
                          d="M 0 0 C -4 -5.5 -8.5 -11 -8.5 -16.5 A 8.5 8.5 0 1 1 8.5 -16.5 C 8.5 -11 4 -5.5 0 0 Z"
                          fill="#0c252a"
                          stroke="#1e3d43"
                          strokeWidth="0.8"
                          filter="url(#pin-drop-shadow)"
                          className={isHovered ? 'scale-110 transition-transform' : 'transition-transform'}
                          style={{ transformOrigin: '0px 0px' }}
                        />

                        {/* Inner Circular Badge */}
                        <circle
                          cx="0"
                          cy="-16.5"
                          r="4.8"
                          fill="#12363e"
                          stroke="#2dd4bf"
                          strokeWidth="1"
                        />

                        {/* Stylized Logo / Compass icon in badge center */}
                        <circle
                          cx="0"
                          cy="-16.5"
                          r="2.2"
                          fill="#5eead4"
                        />
                        <path
                          d="M -1.8 -18.3 L 1.8 -14.7"
                          stroke="#0c252a"
                          strokeWidth="0.8"
                          strokeLinecap="round"
                        />
                      </g>
                    );
                  })}
                </svg>
              </div>
            </motion.div>

            {/* 2. Disciplined Growth (BAR CHART SPANNING FULL WIDTH) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#f2f6f5] hover:bg-[#eef3f1] rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 border border-[#e2eae7] shadow-[0_4px_20px_rgba(0,0,0,0.02)] min-h-[200px] sm:min-h-[220px] flex flex-col justify-between transition-colors duration-300 text-right w-full"
            >
              {/* Header Texts */}
              <div>
                <h3 className="text-xl sm:text-2xl font-medium text-[#0c2227] tracking-tight">
                  رشد منضبط و متمرکز
                </h3>
                <p className="mt-1 text-xs text-slate-500 max-w-sm leading-relaxed">
                  رویکردی باثبات و مبتنی بر تحقیق و تحلیل، با هدف بازدهی مستمر و مطمئن در طول چرخه‌های گوناگون بازار.
                </p>
              </div>

              {/* Bar Chart Container */}
              <div className="w-full mt-4 pt-2 flex items-end justify-between gap-2 sm:gap-4 h-28 sm:h-34">
                {GROWTH_DATA.map((item, index) => {
                  const isHovered = hoveredBarIndex === index;
                  return (
                    <div
                      key={item.year}
                      onMouseEnter={() => setHoveredBarIndex(index)}
                      onMouseLeave={() => setHoveredBarIndex(null)}
                      className="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer h-full justify-end"
                    >
                      <div className="relative w-full max-w-[58px] bg-slate-200/50 rounded-xl overflow-hidden flex flex-col justify-end h-20 sm:h-24 shadow-inner">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${item.height}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.4,
                            delay: 0.15 + index * 0.1,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                          style={{
                            backgroundColor: item.color,
                          }}
                          className={`w-full rounded-xl flex items-center justify-center transition-all duration-300 ${
                            isHovered ? 'brightness-110 shadow-md ring-2 ring-emerald-400/40' : ''
                          }`}
                        >
                          <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                            style={{ color: item.textColor }}
                            className="text-[10px] sm:text-[11px] font-mono font-bold tracking-tight select-none"
                          >
                            {item.value}
                          </motion.span>
                        </motion.div>
                      </div>

                      <span
                        className={`text-[10px] sm:text-[12px] font-mono transition-colors select-none ${
                          isHovered || item.year === '۱۴۰۴'
                            ? 'text-[#0a4852] font-bold scale-105'
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
