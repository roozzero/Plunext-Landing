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
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(true);

  const cards: PortfolioCard[] = [
    // 1. Steel River (Text Card)
    {
      id: 'steel-river-text',
      type: 'text',
      title: 'استیل ریور (Steel River)',
      description:
        'پلتفرم خدمات صنعتی پیشرو با راهبرد خرید و توسعه هدفمند در حوزه‌های تخصصی. هسته اصلی آن، CraneTech، متخصص در بازرسی، نوسازی و ساخت جرثقیل‌های سقفی سنگین و پیشرفته صنعتی است.',
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
          <div className="flex flex-col leading-[1.05] tracking-tight font-extrabold text-sm font-sans">
            <span>STEEL</span>
            <span>RIVER</span>
          </div>
        </div>
      ),
    },

    // 2. Steel River (Image Card)
    {
      id: 'steel-river-image',
      type: 'image',
      imageSrc: constructionImg,
      imageAlt: 'تجهیزات و زیرساخت‌های مهندسی استیل ریور',
    },

    // 3. Union Software Group (Text Card: Vibrant Teal)
    {
      id: 'union-software-text',
      type: 'text',
      title: 'گروه نرم‌افزاری یونین (Union)',
      description:
        'هلدینگ بلندمدت که نرم‌افزارهای تخصصی بازارهای عمودی را جذب و توسعه می‌دهد. دارایی اصلی آن، BusPlanner، نرم‌افزار پیشرو مدیریت لجستیک، مسیربندی و ناوبری ناوگان ترابری دانش‌آموزی و شهری است.',
      bgColor: 'bg-[#4096a1]',
      textColor: 'text-white',
      logo: (
        <div className="flex flex-col items-start leading-[1.05] text-white">
          <span className="font-bold text-2xl tracking-tight font-sans">Union</span>
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/85 font-semibold">
            SOFTWARE
          </span>
        </div>
      ),
    },

    // 4. Union Software Group (Image Card)
    {
      id: 'union-software-image',
      type: 'image',
      imageSrc: skyscraperImg,
      imageAlt: 'زیرساخت‌های فناوری و مراکز ابری سازمانی',
    },

    // 5. Sabrepak (Text Card)
    {
      id: 'sabrepak-text',
      type: 'text',
      title: 'صنایع فناور سابرپک (Sabrepak)',
      description:
        'توسعه‌دهنده بسته‌بندی‌ها و تجهیزات محافظتی فوق دقیق با استانداردهای سخت‌گیرانه برای زنجیره تأمین تجهیزات پزشکی حیاتی و صنایع هوانوردی در سطح جهانی.',
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
    const absScroll = Math.abs(scrollLeft);
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }
    const progress = Math.min(Math.max(absScroll / maxScroll, 0), 1);
    setScrollProgress(progress);
    setCanScrollRight(absScroll > 10);
    setCanScrollLeft(absScroll < maxScroll - 10);
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

  const scrollByAmount = (direction: 'next' | 'prev') => {
    if (!scrollContainerRef.current) return;
    // In RTL, scrolling right or left:
    const sign = direction === 'next' ? -380 : 380;
    scrollContainerRef.current.scrollBy({ left: sign, behavior: 'smooth' });
  };

  return (
    <section id="portfolio-section" className="relative w-full bg-white text-[#0a181c] py-16 sm:py-24 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* ======================================================== */}
        {/* HEADER ROW */}
        {/* ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12 sm:mb-16 text-right">
          {/* Right Title in RTL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight text-[#0a1e23] leading-[1.2]">
              نمونه‌ها
            </h2>
          </motion.div>

          {/* Left Description & Button in RTL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start lg:max-w-md text-right"
          >
            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed text-right">
              نمونه‌ها و پرونده‌های موفق ما نشان‌دهنده تمرکز منضبط بر بخش‌های بنیادین، فناوری‌های مقیاس‌پذیر و مدیریت پیشرو است.
            </p>

            <button
              type="button"
              className="mt-5 inline-flex items-center gap-2 bg-[#094751] hover:bg-[#07363e] text-white text-xs sm:text-[13px] font-medium px-5 py-2.5 rounded-full shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
            >
              <span>مشاهده همه نمونه‌ها</span>
              <span className="group-hover:-translate-x-0.5 transition-transform text-sm">←</span>
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
                  className={`w-[320px] sm:w-[360px] lg:w-[380px] shrink-0 ${card.bgColor} rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 flex flex-col justify-between min-h-[400px] sm:min-h-[430px] relative overflow-hidden snap-start shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-200/40 text-right`}
                >
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rotate-45 -translate-x-12 -translate-y-12 pointer-events-none" />

                  {/* Card Logo */}
                  <div className="relative z-10">{card.logo}</div>

                  {/* Card Content */}
                  <div className="relative z-10 mt-auto pt-10 text-right">
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
                  alt={card.imageAlt || 'دارایی‌های پورتفولیو'}
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
                transform: `translateX(-${scrollProgress * 185}%)`,
              }}
              className="h-full bg-[#0a4852] rounded-full transition-transform duration-200 ease-out"
            />
          </div>

          {/* Circular Arrows */}
          <div className="flex items-center gap-3">
            {/* Forward/Left Arrow */}
            <button
              type="button"
              onClick={() => scrollByAmount('next')}
              aria-label="اسلاید بعدی"
              className="w-11 h-11 rounded-full bg-[#094751] hover:bg-[#07363e] text-white flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            {/* Back/Right Arrow */}
            <button
              type="button"
              onClick={() => scrollByAmount('prev')}
              aria-label="اسلاید قبلی"
              className="w-11 h-11 rounded-full border border-slate-300 text-slate-700 hover:border-slate-900 hover:text-slate-950 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
