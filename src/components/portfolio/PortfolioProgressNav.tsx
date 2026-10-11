import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PortfolioProgressNavProps {
  progressPercent: number;
  canGoPrev: boolean;
  canGoNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export const PortfolioProgressNav: React.FC<PortfolioProgressNavProps> = ({
  progressPercent,
  canGoPrev,
  canGoNext,
  onPrev,
  onNext,
}) => {
  return (
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
          onClick={onPrev}
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

        {/* Next button: advances step */}
        <button
          type="button"
          onClick={onNext}
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
  );
};
