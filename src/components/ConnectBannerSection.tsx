import React from 'react';
import { motion } from 'motion/react';
import { MessageSquareQuote } from 'lucide-react';

interface ConnectBannerSectionProps {
  onOpenContact?: () => void;
  onOpenReview?: () => void;
}

export const ConnectBannerSection: React.FC<ConnectBannerSectionProps> = ({ onOpenContact, onOpenReview }) => {
  return (
    <section id="contact-section" className="relative w-full bg-white py-12 sm:py-16 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden px-6 sm:px-12 py-16 sm:py-20 flex flex-col items-center justify-center text-center shadow-[0_15px_40px_rgba(15,58,64,0.12)] border border-teal-900/10"
          style={{
            background: 'linear-gradient(135deg, #1b5b63 0%, #28747c 50%, #154e55 100%)',
          }}
        >
          {/* Subtle translucent faceted background shards */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-400/15 rounded-full blur-[100px]" />
            <div className="absolute -top-10 left-1/4 w-72 h-72 bg-white/[0.04] rotate-45 pointer-events-none" />
            <div className="absolute top-4 -left-12 w-64 h-64 bg-white/[0.03] -rotate-12 pointer-events-none" />
            <div className="absolute -bottom-16 -right-12 w-72 h-72 bg-white/[0.04] rotate-12 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
            {/* Centered Badge */}
            <div className="w-full flex justify-center mb-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-emerald-200 border border-white/20 text-xs font-semibold tracking-wide shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                ارتباط مستقیم و شروع پروژه
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-bold tracking-tight text-white flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1.5 leading-tight">
              <span>با ما در ارتباط</span>
              <span className="text-emerald-300 font-normal">باشید</span>
            </h2>

            {/* Subtitle Description */}
            <p className="mt-4 text-xs sm:text-sm text-slate-200/90 font-normal leading-relaxed max-w-md mx-auto text-center">
              فرصت راهبردی بعدی شما از اینجا آغاز می‌شود. با تیم تخصصی ما گفتگو کنید و ظرفیت‌های رشد کسب‌وکار خود را کشف نمایید.
            </p>

            {/* Action Buttons: Start Conversation & Submit Review */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#0e3b42] font-semibold text-xs sm:text-sm px-6 sm:px-7 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer select-text group"
              >
                <span>شروع گفتگوی اختصاصی</span>
                <span className="group-hover:-translate-x-0.5 transition-transform text-sm">←</span>
              </button>

              <button
                type="button"
                onClick={onOpenReview}
                className="inline-flex items-center gap-2.5 bg-emerald-950/40 hover:bg-emerald-900/50 text-white border border-emerald-400/30 hover:border-emerald-300/60 font-semibold text-xs sm:text-sm px-6 sm:px-7 py-3 rounded-full backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer select-text group"
              >
                <MessageSquareQuote className="w-4 h-4 text-emerald-300 group-hover:text-emerald-200 transition-colors" />
                <span>ثبت نظر و تجربه همکاری</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
