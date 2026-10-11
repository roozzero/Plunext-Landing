import React, { useState } from 'react';
import { motion } from 'motion/react';
import partnersImg from '../assets/imgs/Partners-1.jpg';
import logoImg from '../assets/imgs/Logo.png';
import { WORLD_DOTS_PATH } from './worldMapData';

interface MapPin {
  id: string;
  x: number;
  y: number;
  city: string;
  region: string;
  blinkDelay: number;
}

interface BlinkingDot {
  id: string;
  cx: number;
  cy: number;
  delay: number;
  city: string;
}

const MAP_PINS: MapPin[] = [
  { id: 'p1', x: 115, y: 105, city: 'ونکوور', region: 'کانادا و شمال‌غرب', blinkDelay: 0.1 },
  { id: 'p2', x: 108, y: 168, city: 'سیاتل', region: 'شمال‌غرب آمریکا', blinkDelay: 0.7 },
  { id: 'p3', x: 80, y: 210, city: 'سان‌فرانسیسکو', region: 'سیلیکون ولی / کالیفرنیا', blinkDelay: 1.3 },
  { id: 'p4', x: 185, y: 165, city: 'شیکاگو', region: 'مرکز و غرب میانه', blinkDelay: 0.4 },
  { id: 'p5', x: 228, y: 138, city: 'نیویورک', region: 'ساحل شرقی آمریکا', blinkDelay: 1.0 },
  { id: 'p6', x: 415, y: 155, city: 'لندن', region: 'بریتانیا و اروپای غربی', blinkDelay: 0.2 },
  { id: 'p7', x: 462, y: 118, city: 'استکهلم', region: 'منطقه اسکاندیناوی', blinkDelay: 0.8 },
  { id: 'p8', x: 466, y: 155, city: 'فرانکفورت / زوریخ', region: 'اروپای مرکزی', blinkDelay: 1.5 },
  { id: 'p9', x: 515, y: 135, city: 'هلسینکی / بالتیک', region: 'شمال شرق اروپا', blinkDelay: 0.5 },
  { id: 'p10', x: 545, y: 115, city: 'مسکو / اوراسیا', region: 'ارتباطات اوراسیا', blinkDelay: 1.1 },
  { id: 'p11', x: 538, y: 205, city: 'دبی / خلیج فارس', region: 'خاورمیانه و غرب آسیا', blinkDelay: 0.3 },
  { id: 'p12', x: 850, y: 345, city: 'سیدنی', region: 'استرالیا', blinkDelay: 0.9 },
  { id: 'p13', x: 915, y: 340, city: 'ملبورن / اوکلند', region: 'اقیانوسیه و نیوزیلند', blinkDelay: 1.4 },
];

// نقاط داده‌ای و هاب‌های منطقه‌ای چشمک‌زن روی نقشه جهان
const BLINKING_DATA_DOTS: BlinkingDot[] = [
  { id: 'bd1', cx: 215, cy: 195, delay: 0.3, city: 'میامی' },
  { id: 'bd2', cx: 275, cy: 295, delay: 0.8, city: 'سائوپائولو' },
  { id: 'bd3', cx: 435, cy: 172, delay: 0.5, city: 'پاریس' },
  { id: 'bd4', cx: 562, cy: 192, delay: 1.1, city: 'تهران' },
  { id: 'bd5', cx: 615, cy: 225, delay: 0.7, city: 'بمبئی' },
  { id: 'bd6', cx: 685, cy: 250, delay: 0.2, city: 'سنگاپور' },
  { id: 'bd7', cx: 730, cy: 165, delay: 1.3, city: 'توکیو' },
  { id: 'bd8', cx: 705, cy: 195, delay: 0.6, city: 'شانگهای' },
  { id: 'bd9', cx: 485, cy: 310, delay: 1.0, city: 'ژوهانسبورگ' },
  { id: 'bd10', cx: 250, cy: 340, delay: 1.4, city: 'بوئنوس آیرس' },
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
      className="relative w-full bg-[#fbfdfc] text-[#0a181c] py-10 sm:py-14 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden text-right select-text"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Badge (Centered) */}
        <div className="w-full flex justify-center mb-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-[#0a4852] border border-emerald-200/60 text-xs font-semibold tracking-wide shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#439683]" />
            رویکرد و فلسفه پلانکست
          </span>
        </div>

        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <div className="w-full mb-6 sm:mb-8 text-right">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold tracking-tight flex flex-wrap items-baseline gap-x-2.5 gap-y-1.5 leading-snug"
          >
            <span className="text-[#0b1e22]">هر وب‌سایت ماندگار،</span>
            <span className="text-[#439683] font-normal">با یک فکر خوب آغاز می‌شود</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed w-full max-w-none text-justify"
          >
            ما در پلانکست فقط وب‌سایت طراحی نمی‌کنیم؛ تجربه‌های دیجیتالی می‌سازیم که با هدف، هویت و آینده‌ی برند شما شکل گرفته‌اند.
          </motion.p>
        </div>

        {/* ======================================================== */}
        {/* 2-COLUMN MAIN GRID: EXACT MATCHING HEIGHTS               */}
        {/* Right card height = Top card height + Bottom card height + gap */}
        {/* Top card height = Bottom card height                     */}
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
            className="lg:col-span-6 rounded-[24px] sm:rounded-[28px] overflow-hidden relative shadow-[0_8px_30px_rgba(0,0,0,0.05)] h-full min-h-[460px] sm:min-h-[490px] lg:min-h-[510px] flex flex-col justify-end p-5 sm:p-6 group select-text"
          >
            {/* Background Image: Partners Photo */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={partnersImg}
                alt="تیم پلانکست"
                className="w-full h-full object-cover object-top sm:object-center group-hover:scale-[1.01] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
            </div>

            {/* Floating Glassmorphism Card: Our Funds Over Time */}
            <div>
              <img
                src={logoImg}
                alt="لوگوی پلانکست"
                className="h-7 sm:h-8 md:h-9 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.getElementById('logo-text-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* LEFT COLUMN IN RTL: TWO EQUAL HEIGHT CARDS (flex-1 each) */}
          {/* Total left height matches right card seamlessly          */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6 justify-between h-full">
            {/* 1. دیدگاه راهبردی (فارسی، راست‌چین، نقاط چشمک‌زن، ارتفاع یکسان با کارت پایینی) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 basis-0 min-h-[225px] sm:min-h-[235px] lg:min-h-0 bg-[#edf4f2] hover:bg-[#eaf1ef] rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 border border-[#dfe8e5] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-colors duration-300 w-full relative overflow-hidden text-right select-text"
              dir="rtl"
            >
              {/* عنوان فارسی و کاملاً راست‌چین مطابق درخواست کاربر */}
              <div className="relative z-10 flex items-center justify-between mb-2">
                <div className="text-right">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#102d33] tracking-tight">
                    استراتژی و تجربه دیجیتال
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 font-normal">
                    شناخت دقیق برند، مخاطب و اهداف کسب‌وکار برای ساخت یک تجربه دیجیتال هدفمند
                  </p>
                </div>

                {/* نشانگر وضعیت شبکه فعال یا پیام هاور */}
                {hoveredPin ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="px-3 py-1.5 rounded-lg bg-[#0e272c] text-white text-[11px] font-medium shadow-md border border-emerald-500/30 flex items-center gap-1.5 shrink-0"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{hoveredPin.city} — {hoveredPin.region}</span>
                  </motion.div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] text-emerald-800 font-medium shrink-0">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                    </span>
                    <span>رویکرد ما</span>
                  </div>
                )}
              </div>

              {/* نقشه جهان نقطه‌ای ماتریسی با نقاط پین و گره‌های داده‌ای چشمک‌زن (ارتفاع بهینه هماهنگ با کارت پایینی) */}
              <div className="relative w-full h-[120px] sm:h-[135px] flex items-center justify-center overflow-hidden my-auto">
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

                  {/* گره‌های داده‌ای چشمک‌زن روی نقشه قاره‌ها (Blinking Ambient Network Dots) */}
                  {BLINKING_DATA_DOTS.map((dot) => (
                    <g key={dot.id} className="pointer-events-none">
                      {/* حلقه موج رادار چشمک‌زن */}
                      <motion.circle
                        cx={dot.cx}
                        cy={dot.cy}
                        r="8"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="1.2"
                        initial={{ scale: 0.5, opacity: 0.9 }}
                        animate={{ scale: [0.5, 2.2], opacity: [0.9, 0] }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          delay: dot.delay,
                          ease: 'easeOut',
                        }}
                      />
                      {/* نقطه درخشان چشمک‌زن در مرکز */}
                      <motion.circle
                        cx={dot.cx}
                        cy={dot.cy}
                        r="2.8"
                        fill="#34d399"
                        animate={{
                          opacity: [0.35, 1, 0.35],
                          scale: [0.8, 1.4, 0.8],
                        }}
                        transition={{
                          duration: 1.4,
                          repeat: Infinity,
                          delay: dot.delay,
                          ease: 'easeInOut',
                        }}
                      />
                    </g>
                  ))}

                  {/* پین‌های جغرافیایی چشمک‌زن اصلی (Blinking Animated Map Pins) */}
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
                        {/* هاله امواج رادار چشمک‌زن اصلی (Blinking Pulse Radar) */}
                        <motion.circle
                          cx="0"
                          cy="-16"
                          r="13"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="1.6"
                          initial={{ scale: 0.5, opacity: 0.95 }}
                          animate={{ scale: [0.5, 2.2], opacity: [0.95, 0] }}
                          transition={{
                            duration: 2.1,
                            repeat: Infinity,
                            delay: pin.blinkDelay,
                            ease: 'easeOut',
                          }}
                        />

                        {/* حلقه دوم چشمک‌زن پیوسته */}
                        <motion.circle
                          cx="0"
                          cy="-16"
                          r="7.5"
                          fill="none"
                          stroke="#34d399"
                          strokeWidth="1.2"
                          initial={{ scale: 0.6, opacity: 0.8 }}
                          animate={{ scale: [0.6, 1.7], opacity: [0.8, 0] }}
                          transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            delay: pin.blinkDelay + 0.35,
                            ease: 'easeOut',
                          }}
                        />

                        {/* بدنه قطره‌ای پین نقشه مطابق عکس */}
                        <path
                          d="M 0 0 C -4 -5.5 -8.5 -11 -8.5 -16 A 8.5 8.5 0 1 1 8.5 -16 C 8.5 -11 4 -5.5 0 0 Z"
                          fill="#0c252a"
                          stroke="#1e3d43"
                          strokeWidth="0.8"
                          filter="url(#pin-drop-shadow)"
                          className={isHovered ? 'scale-115 transition-transform' : 'transition-transform'}
                          style={{ transformOrigin: '0px 0px' }}
                        />

                        {/* نشانگر داخلی دایره‌ای */}
                        <circle
                          cx="0"
                          cy="-16"
                          r="4.8"
                          fill="#12363e"
                          stroke="#2dd4bf"
                          strokeWidth="1"
                        />

                        {/* نقطه مرکزی فیروزه‌ای چشمک‌زن با پالس نور پیوسته */}
                        <motion.circle
                          cx="0"
                          cy="-16"
                          r="2.6"
                          fill="#5eead4"
                          animate={{
                            opacity: [0.35, 1, 0.35],
                            scale: [0.8, 1.3, 0.8],
                          }}
                          transition={{
                            duration: 1.3,
                            repeat: Infinity,
                            delay: pin.blinkDelay,
                            ease: 'easeInOut',
                          }}
                        />
                        <path
                          d="M -1.8 -17.8 L 1.8 -14.2"
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

            {/* 2. رشد منضبط و متمرکز (کارت پایینی با ارتفاع کاملاً یکسان با کارت بالایی) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 basis-0 min-h-[225px] sm:min-h-[235px] lg:min-h-0 bg-[#f2f6f5] hover:bg-[#eef3f1] rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 border border-[#e2eae7] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-colors duration-300 text-right w-full select-text"
            >
              {/* Header Texts */}
              <div>
                <h3 className="text-xl sm:text-2xl font-medium text-[#0c2227] tracking-tight">
                  رشد و توسعه مستمر
                </h3>
                <p className="mt-1 text-xs text-slate-500 max-w-sm leading-relaxed">
                  فرآیندی هدفمند از ایده تا اجرا؛ با تمرکز بر کیفیت، عملکرد و ایجاد ارزش پایدار
                </p>
              </div>

              {/* Bar Chart Container: Sequential gentle scroll-triggered motion from smallest to largest */}
              <div className="w-full mt-3 pt-1 flex items-end justify-between gap-2 sm:gap-4 h-24 sm:h-26">
                {GROWTH_DATA.map((item, index) => {
                  const isHovered = hoveredBarIndex === index;
                  return (
                    <div
                      key={item.year}
                      onMouseEnter={() => setHoveredBarIndex(index)}
                      onMouseLeave={() => setHoveredBarIndex(null)}
                      className="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer h-full justify-end"
                    >
                      <div className="relative w-full max-w-[58px] bg-slate-200/50 rounded-xl overflow-hidden flex flex-col justify-end h-16 sm:h-20 shadow-inner">
                        <motion.div
                          initial={{ height: '0%' }}
                          whileInView={{ height: `${item.height}%` }}
                          viewport={{ once: false, amount: 0.35 }}
                          transition={{
                            duration: 1.2 + index * 0.12,
                            delay: index * 0.18,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          style={{
                            backgroundColor: item.color,
                          }}
                          className={`w-full rounded-xl flex items-center justify-center transition-all duration-300 ${isHovered ? 'brightness-110 shadow-md ring-2 ring-emerald-400/40' : ''
                            }`}
                        >
                          <motion.span
                            initial={{ opacity: 0, y: 6 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.35 }}
                            transition={{ duration: 0.5, delay: 0.35 + index * 0.18 }}
                            style={{ color: item.textColor }}
                            className="text-[10px] sm:text-[11px] font-bold tracking-tight select-text font-['Vazir',sans-serif]"
                          >
                            {item.value}
                          </motion.span>
                        </motion.div>
                      </div>

                      <span
                        className={`text-[10px] sm:text-[12px] font-medium transition-colors select-text font-['Vazir',sans-serif] ${isHovered || item.year === '۱۴۰۴'
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
