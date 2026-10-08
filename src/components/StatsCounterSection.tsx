import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface StatItemProps {
  target: number;
  prefix?: string;
  suffix?: string;
  isDecimal?: boolean;
  line1: string;
  line2: string;
  delay?: number;
}

const toPersianDigits = (num: string | number): string => {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num
    .toString()
    .replace(/[0-9]/g, (w) => farsiDigits[+w]);
};

const StatCounter: React.FC<StatItemProps> = ({
  target,
  prefix = '',
  suffix = '+',
  isDecimal = false,
  line1,
  line2,
  delay = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!isInView) return;

    let timeoutId: NodeJS.Timeout;
    let animId: number;

    timeoutId = setTimeout(() => {
      const duration = 1600; // ms
      const startTime = performance.now();

      const updateCounter = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentVal = target * ease;

        if (isDecimal) {
          setCount(parseFloat(currentVal.toFixed(1)));
        } else {
          setCount(Math.floor(currentVal));
        }

        if (progress < 1) {
          animId = requestAnimationFrame(updateCounter);
        } else {
          setCount(target);
        }
      };

      animId = requestAnimationFrame(updateCounter);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isInView, target, isDecimal, delay]);

  const displayValue = isDecimal ? count.toFixed(1) : count.toString();
  const persianFormatted = toPersianDigits(displayValue);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: delay * 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center text-center mx-auto"
      dir="rtl"
    >
      {/* Number with Incremental Animation */}
      <div className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#0a1e23] leading-none select-none flex items-center justify-center">
        <span>{persianFormatted}</span>
        <span className="text-[#124d57] mr-1">{suffix}</span>
        {prefix && <span className="text-2xl mr-1 text-slate-600">{prefix}</span>}
      </div>

      {/* 2-line Description Text */}
      <div className="mt-3 sm:mt-3.5 text-xs sm:text-[13px] md:text-sm text-slate-500 font-normal leading-relaxed text-center">
        <p className="font-semibold text-slate-800">{line1}</p>
        <p className="text-slate-500 text-xs mt-0.5">{line2}</p>
      </div>
    </motion.div>
  );
};

export const StatsCounterSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#fbfdfc] text-[#0a181c] py-14 sm:py-20 px-6 sm:px-10 md:px-14 lg:px-16 border-t border-[#e8eeec]/80 overflow-hidden" dir="rtl">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-14 w-full items-center justify-center text-center">
          {/* Stat 1: کل پروژه ها = +17 */}
          <StatCounter
            target={17}
            suffix="+"
            isDecimal={false}
            line1="کل پروژه‌ها"
            line2="موفق و ارزش‌آفرین"
            delay={0.1}
          />

          {/* Stat 2: شرکت ها = +12 */}
          <StatCounter
            target={12}
            suffix="+"
            isDecimal={false}
            line1="شرکت‌ها"
            line2="همکار و سرمایه‌پذیر"
            delay={0.2}
          />

          {/* Stat 3: اعضای تیم = +3 */}
          <StatCounter
            target={3}
            suffix="+"
            isDecimal={false}
            line1="اعضای تیم"
            line2="متخصص و مدیران ارشد"
            delay={0.3}
          />

          {/* Stat 4: دفاتر فعال = +2 */}
          <StatCounter
            target={2}
            suffix="+"
            isDecimal={false}
            line1="دفاتر فعال"
            line2="مرکزی و منطقه‌ای"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};
