import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import christianImg from '../assets/imgs/christian_miller.jpg';
import markImg from '../assets/imgs/mark_davies.jpg';
import johnImg from '../assets/imgs/john_wilson.jpg';

interface Leader {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedinUrl?: string;
}

export const LeadershipSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const leaders: Leader[] = [
    {
      id: 'christian-miller',
      name: 'Christian Miller',
      role: 'CEO',
      image: christianImg,
      linkedinUrl: 'https://linkedin.com',
    },
    {
      id: 'mark-davies',
      name: 'Mark Davies',
      role: 'Managing Partner',
      image: markImg,
      linkedinUrl: 'https://linkedin.com',
    },
    {
      id: 'john-wilson',
      name: 'John Wilson',
      role: 'Managing Partner',
      image: johnImg,
      linkedinUrl: 'https://linkedin.com',
    },
    {
      id: 'elena-rostova',
      name: 'Elena Rostova',
      role: 'Partner, Infrastructure',
      image: markImg,
      linkedinUrl: 'https://linkedin.com',
    },
  ];

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const offset = direction === 'left' ? -380 : 380;
    scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-white text-[#0a181c] py-16 sm:py-24 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* ======================================================== */}
        {/* HEADER: TITLE LEFT | ARROW BUTTONS RIGHT */}
        {/* ======================================================== */}
        <div className="flex items-center justify-between mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-[#0a1e23]"
          >
            Our Leadership Team
          </motion.h2>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            {/* Prev Arrow */}
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Previous leader"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'border-slate-300 text-slate-700 hover:border-slate-900 hover:text-slate-950 active:scale-95 cursor-pointer'
                  : 'border-slate-200 text-slate-300 cursor-not-allowed opacity-50'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Next leader"
              className="w-11 h-11 rounded-full bg-[#094751] hover:bg-[#07363e] text-white flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* LEADERSHIP CARDS GRID / CAROUSEL */}
        {/* ======================================================== */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-6 sm:gap-7 overflow-x-auto scrollbar-none pb-4 snap-x snap-mandatory select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {leaders.map((leader, idx) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-[280px] sm:w-[340px] lg:w-[380px] shrink-0 snap-start flex flex-col group cursor-pointer"
            >
              {/* Leader Photo */}
              <div className="relative w-full aspect-[4/4.7] rounded-[26px] sm:rounded-[30px] overflow-hidden bg-slate-100 shadow-[0_6px_25px_rgba(0,0,0,0.04)]">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Leader Details & LinkedIn Button */}
              <div className="mt-4 flex items-center justify-between px-1">
                <div>
                  <h3 className="text-xl sm:text-[22px] font-medium text-[#0b242a] tracking-tight leading-snug group-hover:text-[#094751] transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 font-normal mt-0.5">
                    {leader.role}
                  </p>
                </div>

                {/* LinkedIn Badge matching screenshot */}
                <a
                  href={leader.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${leader.name} LinkedIn Profile`}
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 rounded-lg bg-[#094751] hover:bg-[#07363e] active:scale-95 text-white flex items-center justify-center transition-all shadow-sm group/in"
                >
                  <span className="font-sans font-bold text-xs lowercase tracking-tighter">
                    in
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
