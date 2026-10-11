import React, { useRef, useState, useEffect } from 'react';
import {
  PORTFOLIO_CARDS,
  CATALOG_PROJECTS,
  CatalogProject,
} from '../data/portfolioData';
import { PortfolioCard } from './portfolio/PortfolioCard';
import { PortfolioDetailModal } from './portfolio/PortfolioDetailModal';
import { PortfolioProgressNav } from './portfolio/PortfolioProgressNav';

interface PortfolioCasesSectionProps {
  onOpenOrder?: () => void;
}

export const PortfolioCasesSection: React.FC<PortfolioCasesSectionProps> = ({ onOpenOrder }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const isProgrammaticRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Catalog Modal State
  const [selectedCatalog, setSelectedCatalog] = useState<CatalogProject | null>(null);

  const handleOpenCatalog = (projectId: string) => {
    const project = CATALOG_PROJECTS[projectId];
    if (project) {
      setSelectedCatalog(project);
    }
  };

  const totalCards = PORTFOLIO_CARDS.length;
  const maxSteps = totalCards - 1;

  // Immediate smooth progress calculation (from ~6% at start to 100% at end)
  const progressPercent = Math.min(
    100,
    Math.round(6 + (currentStep / maxSteps) * 94)
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

    // If target is 0, always scroll smoothly back to initial origin (rightmost in RTL)
    if (targetStep === 0) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
      if (cardElements && cardElements[0]) {
        (cardElements[0] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
          block: 'nearest',
        });
      }
      return;
    }

    if (targetStep >= maxSteps) {
      if (cardElements && cardElements[maxSteps]) {
        (cardElements[maxSteps] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          inline: 'end',
          block: 'nearest',
        });
      }
      return;
    }

    if (cardElements && cardElements[targetStep]) {
      const targetCard = cardElements[targetStep] as HTMLElement;
      targetCard.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
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

  return (
    <section
      id="portfolio-section"
      className="relative w-full bg-[#fbfdfc] text-[#0a181c] py-16 sm:py-24 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden border-t border-[#f0f3f2] select-text"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Badge (Centered) */}
        <div className="w-full flex justify-center mb-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-[#0a4852] border border-emerald-200/60 text-xs font-semibold tracking-wide shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#439683]" />
            نمونه‌کارها و پروژه‌های اجرا شده
          </span>
        </div>

        {/* ======================================================== */}
        {/* TOP ROW: HEADINGS ON RIGHT ONLY                           */}
        {/* ======================================================== */}
        <div className="w-full mb-10 sm:mb-14 text-right">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] font-bold text-[#0c2227] tracking-tight flex flex-wrap items-baseline gap-x-2.5 gap-y-1.5 leading-snug mt-2">
            <span className="text-[#0c2227]">پورتفولیو پلانکست؛ از ایده تا اجرا:</span>
            <span className="text-[#439683] font-normal">
              نگاهی به نمونه پروژه‌های طراحی و توسعه وب‌اپلیکیشن پلانکست
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed w-full max-w-none text-justify">
            در پلانکست، وب‌سایت‌هایی متناسب با نیاز کسب‌وکارها طراحی و توسعه می‌دهیم؛ از فروشگاه‌های اینترنتی و وب‌سایت‌های شرکتی تا پلتفرم‌های آموزشی و پروژه‌های اختصاصی. در این بخش، با نمونه‌کارها و حوزه‌های فعالیت برندهایی آشنا شوید که در مسیر حضور حرفه‌ای در فضای دیجیتال گام برداشته‌اند
          </p>
        </div>

        {/* ======================================================== */}
        {/* HORIZONTAL CAROUSEL (RICH CARDS)                         */}
        {/* ======================================================== */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto scrollbar-none pb-4 scroll-smooth"
        >
          {PORTFOLIO_CARDS.map((card) => (
            <PortfolioCard
              key={card.id}
              card={card}
              onOpenCatalog={handleOpenCatalog}
            />
          ))}
        </div>

        {/* ======================================================== */}
        {/* BOTTOM CONTROLS: PROGRESS BAR WITH BUTTONS BESIDE IT     */}
        {/* ======================================================== */}
        <PortfolioProgressNav
          progressPercent={progressPercent}
          canGoPrev={canGoPrev}
          canGoNext={canGoNext}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>

      {/* ======================================================== */}
      {/* GRAPHIC & INTERACTIVE PROJECT CATALOG MODAL              */}
      {/* ======================================================== */}
      <PortfolioDetailModal
        project={selectedCatalog}
        onClose={() => setSelectedCatalog(null)}
        onOpenOrder={onOpenOrder}
      />
    </section>
  );
};
