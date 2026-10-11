import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ChevronLeft, Sparkles, CheckCircle2, Layers, Calendar, Clock, ArrowLeft } from 'lucide-react';
import { CatalogProject, toPersianDigits } from '../../data/portfolioData';

interface PortfolioDetailModalProps {
  project: CatalogProject | null;
  onClose: () => void;
  onOpenOrder?: () => void;
}

export const PortfolioDetailModal: React.FC<PortfolioDetailModalProps> = ({
  project,
  onClose,
  onOpenOrder,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset active index when project changes
  React.useEffect(() => {
    setActiveImageIndex(0);
  }, [project?.id]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1050] flex items-center justify-center p-3 sm:p-6" dir="rtl">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#040f13]/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-5xl bg-[#081b20] border border-white/15 text-white rounded-[28px] sm:rounded-[36px] shadow-[0_30px_90px_rgba(0,0,0,0.6)] z-10 text-right overflow-hidden max-h-[94vh] flex flex-col select-text"
        >
          {/* Top Header Bar */}
          <div className="px-6 sm:px-8 py-5 border-b border-white/10 flex items-center justify-between bg-black/30 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-400/25 ml-2">
                  {project.badge}
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  کاتالوگ تصویری پروژه • {project.category}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="بستن کاتالوگ"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Modal Body */}
          <div className="overflow-y-auto space-y-6 p-6 sm:p-8">
            {/* Project Title & Client Banner */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-white/10">
              <div>
                <span className="text-xs text-emerald-400 font-medium block mb-1">
                  کارفرما: {project.client}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                  {project.title}
                </h3>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-300 shrink-0">
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>سال اجرا: {project.year}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>مدت تحویل: {project.duration}</span>
                </div>
              </div>
            </div>

            {/* Main Lookbook / Interactive Catalog Viewer */}
            <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden bg-black/60 border border-white/15 shadow-2xl">
              {/* Current Active Image Display */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[480px] bg-slate-950 flex items-center justify-center overflow-hidden">
                <motion.img
                  key={activeImageIndex}
                  src={project.images[activeImageIndex]?.url}
                  alt={project.images[activeImageIndex]?.caption || project.title}
                  initial={{ opacity: 0.3, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="w-full h-full object-cover object-center"
                />

                {/* Gradient Overlay for bottom caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Previous / Next Arrow Controls on Image */}
                {project.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveImageIndex((prev) =>
                          prev === 0 ? project.images.length - 1 : prev - 1
                        );
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/20 flex items-center justify-center backdrop-blur-md shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                      aria-label="تصویر بعدی"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveImageIndex((prev) =>
                          prev === project.images.length - 1 ? 0 : prev + 1
                        );
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/20 flex items-center justify-center backdrop-blur-md shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                      aria-label="تصویر قبلی"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Image Caption & Index indicator at bottom */}
                <div className="absolute bottom-4 inset-x-5 sm:inset-x-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-white">
                  <p className="font-medium drop-shadow-md text-slate-100 text-xs sm:text-sm line-clamp-1 max-w-[80%] bg-black/55 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 self-start">
                    {project.images[activeImageIndex]?.caption}
                  </p>

                  {/* Re-designed Image Badge with Persian Digits and Vazir Font */}
                  <div className="self-end sm:self-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-xl border border-emerald-400/40 text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] shrink-0 select-none">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                    <span className="text-xs font-semibold text-slate-200">تصویر</span>
                    <span className="text-xs font-bold text-emerald-300 font-['Vazir',sans-serif]">
                      {toPersianDigits(activeImageIndex + 1)}
                    </span>
                    <span className="text-[11px] text-slate-400 font-normal">از</span>
                    <span className="text-xs font-bold text-white font-['Vazir',sans-serif]">
                      {toPersianDigits(project.images.length)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Thumbnail Previews Bar below main picture */}
              {project.images.length > 1 && (
                <div className="p-3 bg-black/40 border-t border-white/10 flex items-center gap-3 overflow-x-auto scrollbar-none">
                  {project.images.map((img, imgIdx) => (
                    <button
                      key={imgIdx}
                      type="button"
                      onClick={() => setActiveImageIndex(imgIdx)}
                      className={`relative shrink-0 w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImageIndex === imgIdx
                          ? 'border-emerald-400 ring-2 ring-emerald-400/40 scale-105'
                          : 'border-white/20 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Project Overview Paragraph */}
            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-right">
              <span className="text-xs font-bold text-emerald-400 mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>خلاصه و استراتژی اجرایی پروژه:</span>
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                {project.overview}
              </p>
            </div>

            {/* 2-Column: Key Stats and Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
              {/* Highlights Checklist */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2 pb-2 border-b border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>ویژگی‌ها و قابلیت‌های اجرا شده در این پروژه:</span>
                </div>
                <div className="space-y-2.5">
                  {project.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Measurable Stats & Tech Stack */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2 pb-2 border-b border-white/10 mb-3">
                    <Layers className="w-4 h-4 text-emerald-400" />
                    <span>شاخص‌های عملکردی و نتایج حاصل:</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2.5">
                    {project.stats.map((stat, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-center"
                      >
                        <span className="text-sm sm:text-base font-bold text-emerald-300 block font-['Vazir',sans-serif]">
                          {stat.value}
                        </span>
                        <span className="text-[10.5px] text-slate-400 mt-0.5 block">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="pt-3 border-t border-white/10">
                  <span className="text-[11px] font-bold text-slate-300 block mb-2">
                    فناوری‌ها و ابزارهای مورد استفاده:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-400/25 text-emerald-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
              >
                بستن کاتالوگ
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onOpenOrder) {
                    onOpenOrder();
                  } else {
                    const el = document.getElementById('consultation-trigger') || document.getElementById('contact-trigger');
                    if (el) el.click();
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-[#14b8a6] hover:from-emerald-400 hover:to-teal-400 text-[#06181d] text-xs sm:text-sm font-bold transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                <span>درخواست طراحی مشابه این پروژه</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
