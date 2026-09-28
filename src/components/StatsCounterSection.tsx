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
        // Smooth ease-out cubic
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

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: delay * 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-start"
    >
      {/* Number with Incremental Animation */}
      <div className="text-4xl sm:text-5xl lg:text-[54px] font-medium tracking-tight text-[#0a1e23] leading-none select-none font-['Plus_Jakarta_Sans',sans-serif]">
        {prefix}
        {isDecimal ? count.toFixed(1) : count}
        {suffix}
      </div>

      {/* 2-line Description Text */}
      <div className="mt-3 sm:mt-3.5 text-xs sm:text-[13px] md:text-sm text-slate-500 font-normal leading-relaxed">
        <p>{line1}</p>
        <p>{line2}</p>
      </div>
    </motion.div>
  );
};

export const StatsCounterSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#fbfdfc] text-[#0a181c] py-14 sm:py-20 px-6 sm:px-10 md:px-14 lg:px-16 border-t border-[#e8eeec]/80 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Stat 1: 17+ */}
          <StatCounter
            target={17}
            prefix=""
            suffix="+"
            isDecimal={false}
            line1="Years proven experience"
            line2="in private investments"
            delay={0.1}
          />

          {/* Stat 2: 12+ */}
          <StatCounter
            target={12}
            prefix=""
            suffix="+"
            isDecimal={false}
            line1="Industries across technology,"
            line2="infrastructure, and energy"
            delay={0.2}
          />

          {/* Stat 3: $1.8B+ */}
          <StatCounter
            target={1.8}
            prefix="$"
            suffix="B+"
            isDecimal={true}
            line1="Capital deployed across energy,"
            line2="technology, and private markets"
            delay={0.3}
          />

          {/* Stat 4: 11+ */}
          <StatCounter
            target={11}
            prefix=""
            suffix="+"
            isDecimal={false}
            line1="Offices and partners"
            line2="across 3 continents"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};
