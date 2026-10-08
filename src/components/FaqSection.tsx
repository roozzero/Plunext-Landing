import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqSectionProps {
  onAskQuestion?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = () => {
  // همه منوها در ابتدا بسته هستند (openId = null)
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'چه نوع کسب‌وکارهایی را هدف سرمایه‌گذاری، خرید یا توسعه قرار می‌دهید؟',
      answer:
        'ما روی بنگاه‌های سودآور و پیشرو در بازار متوسط تخصصی تمرکز داریم؛ به‌ویژه در بخش خدمات صنعتی، تولید تجهیزات مهندسی حساس، نرم‌افزارهای تخصصی بازار (B2B Vertical Software) و خدمات فناوری‌محور کسب‌وکارها. به‌طور معمول این مجموعه‌ها دارای سود عملیاتی (EBITDA) بین ۳ تا ۳۰ میلیون دلار، وفاداری پایدار مشتریان، جریان نقدی قدرتمند و مزیت‌های رقابتی اثبات‌شده هستند.',
    },
    {
      id: 'faq-2',
      question: 'فرآیند مشارکت و سرمایه‌گذاری از ابتدا تا انتهای معامله چگونه است؟',
      answer:
        'فرآیند با جلسات مقدماتی کاملاً محرمانه برای شناخت سوابق شرکت، میراث بنیان‌گذاران و اهداف آتی آغاز می‌شود. در صورت علاقه متقابل، ارزش‌گذاری شفاف و تفاهم‌نامه غیرالزام‌آور (LOI) تنظیم می‌گردد. سپس مرحله راستی‌آزمایی متمرکز و بدون ایجاد وقفه در عملیات روزمره شرکت انجام شده و قراردادهای نهایی امضا می‌شود.',
    },
    {
      id: 'faq-3',
      question: 'برای شروع گفتگوی اولیه و ارزیابی به چه اطلاعاتی نیاز است؟',
      answer:
        'جهت شروع ارزیابی محرمانه، معمولاً صورت‌های مالی ۳ تا ۵ سال گذشته، خلاصه خدمات یا محصولات اصلی و ساختار سازمانی کلی را بررسی می‌کنیم. تأکید می‌شود که پیش از انتقال هرگونه داده، تفاهم‌نامه جامع عدم افشای دوجانبه (NDA) امضا می‌گردد.',
    },
    {
      id: 'faq-4',
      question: 'یک فرآیند واگذاری یا سرمایه‌گذاری معمولاً چقدر طول می‌کصل؟',
      answer:
        'یک فرآیند استاندارد معمولاً بین ۶۰ تا ۹۰ روز کاری از زمان توافق‌نامه اولیه (LOI) تا تخصیص سرمایه و نهایی‌سازی به طول می‌انجامد. سرمایه اختصاصی متعهد و ساختار تصمیم‌گیری چابک درون‌سازمانی، مانع از تأخیرهای بوروکراتیک و پیچیدگی‌های مرسوم می‌شود.',
    },
    {
      id: 'faq-5',
      question: 'آیا سرمایه‌گذاری‌های شما محدود به منطقه خاصی است یا بین‌المللی است؟',
      answer:
        'هرچند تمرکز اصلی سرمایه‌گذاری ما بر قطب‌های اقتصادی فعال آمریکای شمالی و اروپا قرار دارد، اما به‌طور پیوسته با کسب‌وکارهایی که زنجیره تأمین بین‌المللی یا کانال‌های توزیع فرامرزی دارند شراکت می‌کنیم. ما هر فرصت راهبردی که هم‌افزایی ارزش‌آفرینی به همراه داشته باشد را با دقت بررسی می‌کنیم.',
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative w-full bg-white text-[#0a181c] py-20 sm:py-28 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden" dir="rtl">
      {/* Subtle corner geometric accent */}
      <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-slate-100/60 rotate-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Right Column in RTL: Header */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28 text-right">
            {/* Category Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-500 font-normal tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              <span>پرسش‌های پرتکرار</span>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight text-[#0a1e23] leading-[1.2]"
            >
              پاسخ به سوالات<br />
              متداول شما
            </motion.h2>

            {/* Subtitle description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-sm text-right"
            >
              پاسخ‌های شفاف و سریع به پرسش‌های کلیدی پیرامون نحوه مشارکت، خدمات و سیاست‌های سرمایه‌گذاری مجموعه ورت.
            </motion.p>
          </div>

          {/* Left Column in RTL: Expandable Accordion List */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-slate-200/80 border-t border-b border-slate-200/80 text-right">
            {faqs.map((faq, idx) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group py-5 sm:py-6"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between text-right cursor-pointer transition-colors"
                  >
                    <span
                      className={`text-base sm:text-[17px] font-medium tracking-tight pl-6 transition-colors ${
                        isOpen
                          ? 'text-[#094751]'
                          : 'text-[#0b242a] group-hover:text-[#094751]'
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span className="shrink-0 text-slate-400 group-hover:text-slate-800 transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.2]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.2]" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 pb-2 text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed pl-8 text-right">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
