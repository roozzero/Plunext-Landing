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
      question: 'پلانکست چه خدماتی ارائه می‌دهد؟',
      answer:
        'پلانکست در زمینه طراحی سایت فروشگاهی و شرکتی، توسعه وب‌سایت با وردپرس و React، برنامه‌نویسی اختصاصی، طراحی قالب و افزونه وردپرس و خدمات سئو فعالیت می‌کند. خدمات هر پروژه متناسب با نیازها و اهداف کسب‌وکار بررسی و پیشنهاد می‌شود.',
    },
    {
      id: 'faq-2',
      question: 'هزینه طراحی سایت چقدر است؟',
      answer:
        'هزینه طراحی سایت به نوع وب‌سایت، امکانات موردنیاز، پیچیدگی پروژه، روش توسعه و نیازهای اختصاصی شما بستگی دارد. پس از بررسی جزئیات پروژه، می‌توان برآورد دقیق‌تری از هزینه و محدوده خدمات ارائه کرد.'
    },
    {
      id: 'faq-3',
      question: 'طراحی سایت چقدر زمان می‌برد؟',
      answer:
        'مدت‌زمان اجرای پروژه به نوع سایت، تعداد صفحات، امکانات موردنیاز و آماده‌بودن محتوا بستگی دارد. پس از مشخص‌شدن نیازها و محدوده پروژه، زمان‌بندی متناسب با آن تعیین می‌شود.'
    },
    {
      id: 'faq-4',
      question: 'برای کسب‌وکار من وردپرس بهتر است یا طراحی اختصاصی؟',
      answer:
        'انتخاب بین وردپرس و برنامه‌نویسی اختصاصی به نوع فعالیت، بودجه، امکانات موردنیاز و برنامه توسعه آینده بستگی دارد. وردپرس برای بسیاری از سایت‌های شرکتی و فروشگاهی گزینه‌ای کاربردی است؛ درحالی‌که پروژه‌های دارای نیازهای خاص ممکن است به توسعه اختصاصی نیاز داشته باشند.'
    },
    {
      id: 'faq-5',
      question: 'برای سفارش طراحی سایت از کجا شروع کنم؟',
      answer:
        'کافی است نیازها، نوع کسب‌وکار، امکانات موردانتظار و هدف خود از راه‌اندازی سایت را مشخص کنید و درخواستتان را از طریق فرم ثبت سفارش پلانکست ارسال کنید. با بررسی اطلاعات اولیه، می‌توان درباره مسیر مناسب اجرای پروژه گفت‌وگو کرد.'
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
        {/* Section Badge (Centered) */}
        <div className="w-full flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-[#0a4852] border border-emerald-200/60 text-xs font-semibold tracking-wide shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#439683]" />
            پرسش‌های متداول مشتریان
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Right Column in RTL: Header */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28 text-right">
            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight text-[#0a1e23] flex flex-wrap items-baseline gap-x-2 gap-y-1.5 leading-snug"
            >
              <span className="text-[#0c2227]">سؤالات شما،</span>
              <span className="text-[#439683] font-normal">پاسخ‌های ما</span>
            </motion.h2>

            {/* Subtitle description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-sm text-justify"
            >
              از هزینه و زمان طراحی سایت تا انتخاب بهترین راهکار برای کسب‌وکار آنلاین و بهینه‌سازی سایت برای گوگل؛ پاسخ پرسش‌های متداول را اینجا پیدا کنید تا با آگاهی بیشتر برای پروژه خود تصمیم بگیرید
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
                      className={`text-base sm:text-[17px] font-medium tracking-tight pl-6 transition-colors ${isOpen
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
                        <p className="pt-3 pb-2 text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed pl-8 text-justify">
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
