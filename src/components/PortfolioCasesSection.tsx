import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import constructionImg from '../assets/imgs/Construction.jpg';
import skyscraperImg from '../assets/imgs/Skyscrapers.jpg';

interface PortfolioCard {
  id: string;
  type: 'text' | 'image';
  title?: string;
  category?: string;
  description?: string;
  metricsBadge?: string;
  bgColor?: string;
  textColor?: string;
  logo?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

export const PortfolioCasesSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const isProgrammaticRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalCards = 12;
  const maxSteps = totalCards - 1;

  // Immediate smooth progress calculation (from ~12% at start to 100% at end)
  const progressPercent = Math.min(
    100,
    Math.round(12 + (currentStep / maxSteps) * 88)
  );

  const canGoPrev = currentStep > 0;
  const canGoNext = currentStep < maxSteps;

  const scrollToStep = (targetStep: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardElements = container.children;

    isProgrammaticRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticRef.current = false;
    }, 650);

    // If target is 0, always scroll smoothly back to the exact initial origin (rightmost in RTL)
    if (targetStep === 0) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }

    if (cardElements && cardElements[targetStep]) {
      const firstCard = cardElements[0] as HTMLElement;
      const targetCard = cardElements[targetStep] as HTMLElement;
      const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 380;

      try {
        targetCard.scrollIntoView({
          behavior: 'smooth',
          inline: 'nearest',
          block: 'nearest',
        });
      } catch {
        // fallback
      }

      // Explicit directional scroll position to ensure full cross-browser RTL support
      if (container.scrollLeft <= 0) {
        container.scrollTo({ left: -(targetStep * cardWidth), behavior: 'smooth' });
      } else {
        container.scrollTo({ left: targetStep * cardWidth, behavior: 'smooth' });
      }
    }
  };

  const handleScroll = () => {
    if (isProgrammaticRef.current || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const absScroll = Math.abs(scrollLeft);
    const approxStep = Math.min(
      maxSteps,
      Math.max(0, Math.round((absScroll / maxScroll) * maxSteps))
    );
    if (Math.abs(approxStep - currentStep) >= 1) {
      setCurrentStep(approxStep);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      if (el) el.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [currentStep, maxSteps]);

  const handleNext = () => {
    if (currentStep >= maxSteps) return;
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    scrollToStep(nextStep);
  };

  const handlePrev = () => {
    if (currentStep <= 0) return;
    const prevStep = currentStep - 1;
    setCurrentStep(prevStep);
    scrollToStep(prevStep);
  };

  const cards: PortfolioCard[] = [
    // 1. Steel River (Text Card)
    {
      id: 'steel-river-text',
      type: 'text',
      title: 'استیل ریور (Steel River)',
      category: 'مهندسی و تجهیزات سنگین صنعتی',
      metricsBadge: 'رشد سودآوری ۳۴٪+',
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
      category: 'نرم‌افزارهای یکپارچه سازمانی و ناوگان',
      metricsBadge: 'پوشش ۱۲ هزار ناوگان',
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
      category: 'تجهیزات فوق دقیق و هوانوردی',
      metricsBadge: 'استاندارد بین‌المللی ISO',
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

    // 6. Sabrepak (Image Card)
    {
      id: 'sabrepak-image',
      type: 'image',
      imageSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'آزمایشگاه کالیبراسیون و فناوری مواد سابرپک',
    },

    // 7. NexaCloud Fintech (Text Card: Dark Slate Luxury)
    {
      id: 'nexacloud-text',
      type: 'text',
      title: 'نکساکلاود فین‌تک (NexaCloud)',
      category: 'زیرساخت پرداخت و خدمات بانکی نوین',
      metricsBadge: 'پردازش روزانه +۲ میلیون تراکنش',
      description:
        'سامانه مدیریت پرداخت‌های هوشمند سازمانی، تسویه ارزی بلادرنگ و پلتفرم‌های لایسنس‌گذاری بانکداری باز با امنیت رمزنگاری شده چندمرحله‌ای.',
      bgColor: 'bg-[#0b2b32]',
      textColor: 'text-white',
      logo: (
        <div className="flex items-center gap-2 text-emerald-300">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center font-bold font-mono text-sm">
            N
          </div>
          <span className="font-bold tracking-tight text-lg font-sans text-white">NexaCloud</span>
        </div>
      ),
    },

    // 8. NexaCloud Fintech (Image Card)
    {
      id: 'nexacloud-image',
      type: 'image',
      imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'داشبورد آنالیز تراکنش‌ها و ابزارهای نکساکلاود',
    },

    // 9. BioVant Health (Text Card: Fresh Mint)
    {
      id: 'biovant-text',
      type: 'text',
      title: 'بایووانت سلامت دیجیتال (BioVant)',
      category: 'سلامت همراه و تله‌مدیسین',
      metricsBadge: 'بیش از ۴۵۰ مرکز درمانی متصل',
      description:
        'پلتفرم پرونده الکترونیک سلامت، پایش هوشمند بیماران و اتصال سیستم‌های بیمارستانی به هوش مصنوعی تشخیص زودهنگام در خاورمیانه.',
      bgColor: 'bg-[#e2ede9]',
      textColor: 'text-[#0a3338]',
      logo: (
        <div className="flex items-center gap-2 text-[#0a4852]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
          <span className="font-extrabold tracking-tight text-lg font-sans">BioVant</span>
        </div>
      ),
    },

    // 10. BioVant Health (Image Card)
    {
      id: 'biovant-image',
      type: 'image',
      imageSrc: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'فناوری تله‌مدیسین و پایش پرونده بیماران',
    },

    // 11. LogixTrade AI (Text Card: Emerald Accent)
    {
      id: 'logixtrade-text',
      type: 'text',
      title: 'لوجیکس‌ترِید (LogixTrade AI)',
      category: 'لجستیک بین‌الملل و بهینه‌سازی باربری',
      metricsBadge: 'کاهش ۳۸٪ زمان ترخیص و انبارداری',
      description:
        'نرم‌افزار مدیریت کانتینری و ناوگان کشتیرانی مبتنی بر هوش مصنوعی پیش‌بین برای بهینه‌سازی مسیرهای ترانزیت، ترخیص گمرکی و تخصیص انبارها.',
      bgColor: 'bg-[#2a737d]',
      textColor: 'text-white',
      logo: (
        <div className="flex items-center gap-2 text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="font-extrabold tracking-wider text-base font-sans">LOGIXTRADE</span>
        </div>
      ),
    },

    // 12. LogixTrade AI (Image Card)
    {
      id: 'logixtrade-image',
      type: 'image',
      imageSrc: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'پایانه‌های کانتینری و باربری هوشمند لوجیکس‌ترِید',
    },
  ];

  return (
    <section
      id="portfolio-section"
      className="relative w-full bg-[#fbfdfc] text-[#0a181c] py-16 sm:py-24 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden border-t border-[#f0f3f2] select-text"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        {/* ======================================================== */}
        {/* TOP ROW: HEADINGS ON RIGHT ONLY                           */}
        {/* ======================================================== */}
        <div className="max-w-3xl mb-10 sm:mb-14 text-right">
          <span className="text-xs font-mono uppercase tracking-wider text-[#0a8268] font-bold">
            پورتفولیو و شرکت‌های سرمایه‌پذیر
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2227] tracking-tight leading-[1.25] mt-2">
            گزیده‌ای از مشارکت‌های فعال
            <span className="block text-[#0a8268] font-normal">
              و نمونه پروژه‌های پیشرو در صنایع زیرساختی
            </span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 font-normal leading-relaxed text-right">
            همکاری‌های متمرکز ما در شرکت‌های صنعتی، نرم‌افزارهای عمودی، لجستیک و سلامت با تمرکز بر شتابدهی سودآوری و رهبری بازار.
          </p>
        </div>

        {/* ======================================================== */}
        {/* HORIZONTAL CAROUSEL (12 RICH CARDS)                      */}
        {/* ======================================================== */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto scrollbar-none pb-4 scroll-smooth"
        >
          {cards.map((card) => {
            if (card.type === 'image') {
              return (
                <div
                  key={card.id}
                  className="w-[280px] sm:w-[320px] md:w-[360px] h-[380px] sm:h-[420px] shrink-0 rounded-[28px] overflow-hidden relative shadow-[0_4px_24px_rgba(0,0,0,0.04)] group"
                >
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt || 'پروژه'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>
              );
            }

            return (
              <div
                key={card.id}
                className={`w-[300px] sm:w-[350px] md:w-[380px] h-[380px] sm:h-[420px] shrink-0 rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-black/5 text-right ${card.bgColor} ${card.textColor} transition-transform duration-300 hover:-translate-y-1`}
              >
                {/* Logo & Category Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {card.logo}
                    {card.metricsBadge && (
                      <span className="text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full bg-black/10 border border-black/10">
                        {card.metricsBadge}
                      </span>
                    )}
                  </div>

                  {card.category && (
                    <span className="text-[11px] font-medium opacity-75 block mb-1">
                      {card.category}
                    </span>
                  )}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] leading-relaxed opacity-90 font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom link */}
                <div className="pt-4 border-t border-black/10 flex items-center justify-between text-xs font-semibold cursor-pointer group">
                  <span>مطالعه موردی و نتایج راهبردی</span>
                  <div className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:-translate-x-1 transition-transform">
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* BOTTOM CONTROLS: PROGRESS BAR WITH BUTTONS BESIDE IT     */}
        {/* Immediate progress update with each click, zero delay    */}
        {/* ======================================================== */}
        <div className="mt-8 flex items-center gap-4 sm:gap-6">
          {/* Scroll Progress Bar Track */}
          <div className="flex-1 h-2 bg-slate-200/90 rounded-full overflow-hidden p-0.5 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-[#0a8268] to-[#14b8a6] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Navigation Buttons directly beside progress bar */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Previous button: goes back */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={!canGoPrev}
              aria-label="کارت‌های قبلی"
              className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all ${
                canGoPrev
                  ? 'bg-white text-slate-800 shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:scale-105 active:scale-95 cursor-pointer'
                  : 'bg-slate-100/70 text-slate-300 cursor-not-allowed border-transparent'
              }`}
            >
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Next button: advances step and immediately fills progress */}
            <button
              type="button"
              onClick={handleNext}
              disabled={!canGoNext}
              aria-label="کارت‌های بعدی"
              className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all ${
                canGoNext
                  ? 'bg-[#0a8268] text-white shadow-md hover:bg-[#086b55] hover:scale-105 active:scale-95 cursor-pointer'
                  : 'bg-slate-100/70 text-slate-300 cursor-not-allowed border-transparent'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
