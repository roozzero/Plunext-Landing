import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import constructionImg from '../assets/imgs/Construction.jpg';
import skyscraperImg from '../assets/imgs/Skyscrapers.jpg';

interface PortfolioCard {
  id: string;
  type: 'text' | 'image';
  title?: string;
  description?: string;
  bgColor?: string;
  textColor?: string;
  logo?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

export const PortfolioCasesSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const cards: PortfolioCard[] = [
    // 1. Steel River (Text Card)
    {
      id: 'steel-river-text',
      type: 'text',
      title: 'Steel River',
      description:
        'An industrial services platform executing a disciplined buy-and-build strategy in niche verticals. Its foundational acquisition, CraneTech, specializes in the inspection, repair, and manufacturing of industrial overhead cranes.',
      bgColor: 'bg-[#edf4f2]',
      textColor: 'text-[#0b333a]',
      logo: (
        <div className="flex items-center gap-2 text-[#0a3d46]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.2 2.5a2 2 0 0 1 2.6-.9l.7.4a2 2 0 0 0 2 0l.7-.4a2 2 0 0 1 2.6.9l.4.7a2 2 0 0 0 1.5 1.5l.7.4a2 2 0 0 1 .9 2.6l-.4.7a2 2 0 0 0 0 2l.4.7a2 2 0 0 1-.9 2.6l-.7.4a2 2 0 0 0-1.5 1.5l-.4.7a2 2 0 0 1-2.6.9l-.7-.4a2 2 0 0 0-2 0l-.7.4a2 2 0 0 1-2.6-.9l-.4-.7a2 2 0 0 0-1.5-1.5l-.7-.4a2 2 0 0 1-.9-2.6l.4-.7a2 2 0 0 0 0-2l-.4-.7a2 2 0 0 1 .9-2.6l.7-.4a2 2 0 0 0 1.5-1.5l.4-.7Z"
            />
          </svg>
          <div className="flex flex-col leading-[1.05] tracking-tight font-extrabold text-sm">
            <span>STEEL</span>
            <span>RIVER</span>
          </div>
        </div>
      ),
    },

    // 2. Steel River (Image Card: Crane & Modern Skyscraper)
    {
      id: 'steel-river-image',
      type: 'image',
      imageSrc: constructionImg,
      imageAlt: 'Steel River Industrial Cranes & High-Rise Infrastructure',
    },

    // 3. Union Software Group (Text Card: Vibrant Teal)
    {
      id: 'union-software-text',
      type: 'text',
      title: 'Union Software Group',
      description:
        'A long-term holding company that acquires, builds, and grows high-quality vertical market software businesses. Its cornerstone asset, BusPlanner, is the leading provider of student transportation and logistics software.',
      bgColor: 'bg-[#4096a1]',
      textColor: 'text-white',
      logo: (
        <div className="flex flex-col items-start leading-[1.05] text-white">
          <span className="font-bold text-2xl tracking-tight">Union</span>
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/85 font-semibold">
            SOFTWARE
          </span>
        </div>
      ),
    },

    // 4. Union Software Group (Image Card: Connected Enterprise Infrastructure)
    {
      id: 'union-software-image',
      type: 'image',
      imageSrc: skyscraperImg,
      imageAlt: 'Enterprise Software Logistics & Modern City Infrastructure',
    },

    // 5. Sabrepak (Text Card)
    {
      id: 'sabrepak-text',
      type: 'text',
      title: 'Sabrepak Technologies',
      description:
        'A high-precision engineered packaging and protective equipment enterprise serving critical medical device and aerospace manufacturing ecosystems worldwide.',
      bgColor: 'bg-[#e7efec]',
      textColor: 'text-[#0a333b]',
      logo: (
        <div className="flex items-center gap-2 text-[#0a3d46]">
          <span className="font-extrabold italic tracking-wider text-xl font-sans">
            SABREPAK
          </span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path d="M4 14c2-4 6-7 12-7l2 3-4 2 4 4-5 1-2 4-7-7z" />
          </svg>
        </div>
      ),
    },
  ];

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }
    const progress = Math.min(Math.max(scrollLeft / maxScroll, 0), 1);
    setScrollProgress(progress);
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }
    return () => {
      if (el) el.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const offset = direction === 'left' ? -380 : 380;
    scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-white text-[#0a181c] py-16 sm:py-24 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* ======================================================== */}
        {/* HEADER ROW: EXACT MATCH TO SCREENSHOT */}
        {/* ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12 sm:mb-16">
          {/* Left Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight text-[#0a1e23] leading-[1.12]">
              Investing in the<br />
              Builders of the Future
            </h2>
          </motion.div>

          {/* Right Description & Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start lg:max-w-md"
          >
            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
              Our portfolio reflects a disciplined focus on resilient sectors and visionary leadership — where insight meets long-term opportunity.
            </p>

            <button
              type="button"
              className="mt-5 inline-flex items-center gap-2 bg-[#094751] hover:bg-[#07363e] text-white text-xs sm:text-[13px] font-medium px-5 py-2.5 rounded-full shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
            >
              <span>Explore Our Cases</span>
              <span className="group-hover:translate-x-0.5 transition-transform text-sm">→</span>
            </button>
          </motion.div>
        </div>

        {/* ======================================================== */}
        {/* HORIZONTAL CAROUSEL OF PORTFOLIO CARDS */}
        {/* ======================================================== */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto scrollbar-none pb-4 snap-x snap-mandatory select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cards.map((card, idx) => {
            if (card.type === 'text') {
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-[320px] sm:w-[360px] lg:w-[380px] shrink-0 ${card.bgColor} rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 flex flex-col justify-between min-h-[400px] sm:min-h-[430px] relative overflow-hidden snap-start shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-200/40`}
                >
                  {/* Subtle decorative geometric facet in top-right */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 -rotate-45 translate-x-12 -translate-y-12 pointer-events-none" />

                  {/* Card Logo */}
                  <div className="relative z-10">{card.logo}</div>

                  {/* Card Content */}
                  <div className="relative z-10 mt-auto pt-10">
                    <h3
                      className={`text-xl sm:text-2xl font-medium tracking-tight mb-3 ${
                        card.textColor === 'text-white' ? 'text-white' : 'text-[#0b333a]'
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-[13px] leading-relaxed font-normal ${
                        card.textColor === 'text-white'
                          ? 'text-white/90'
                          : 'text-slate-600'
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            }

            // Image Card
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="w-[320px] sm:w-[360px] lg:w-[380px] shrink-0 rounded-[28px] sm:rounded-[32px] overflow-hidden min-h-[400px] sm:min-h-[430px] relative snap-start shadow-[0_4px_20px_rgba(0,0,0,0.04)] group"
              >
                <img
                  src={card.imageSrc}
                  alt={card.imageAlt || 'Portfolio Asset'}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* BOTTOM NAVIGATION TRACK & ARROW BUTTONS */}
        {/* ======================================================== */}
        <div className="flex items-center justify-between mt-8 sm:mt-10 pt-4">
          {/* Progress Indicator Track */}
          <div className="relative w-full max-w-[260px] sm:max-w-[320px] h-[2px] bg-slate-200 rounded-full overflow-hidden">
            <div
              style={{
                width: '35%',
                transform: `translateX(${scrollProgress * 185}%)`,
              }}
              className="h-full bg-[#0a4852] rounded-full transition-transform duration-200 ease-out"
            />
          </div>

          {/* Circular Arrows */}
          <div className="flex items-center gap-3">
            {/* Prev Arrow */}
            <button
              type="button"
              onClick={() => scrollByAmount('left')}
              aria-label="Previous slide"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'border-slate-300 text-slate-700 hover:border-slate-900 hover:text-slate-950 active:scale-95 cursor-pointer'
                  : 'border-slate-200 text-slate-300 cursor-not-allowed opacity-60'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={() => scrollByAmount('right')}
              aria-label="Next slide"
              className="w-11 h-11 rounded-full bg-[#094751] hover:bg-[#07363e] text-white flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
