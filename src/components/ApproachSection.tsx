import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeft, CheckCircle2, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';

interface ValueCardItem {
  id: string;
  title: string;
  shortDesc: string;
  icon: React.ReactNode;
  tag: string;
  details: {
    overview: string;
    keyPoints: string[];
    metrics: string;
    impact: string;
  };
}

export const ApproachSection: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<ValueCardItem | null>(null);

  const items: ValueCardItem[] = [
    {
      id: 'insight',
      title: 'تخصص مبتنی بر بینش و تحلیل عمیق از بازار',
      shortDesc: 'استفاده از داده‌های ساختاریافته، روندهای کلان اقتصادی و پژوهش‌های اختصاصی در هر صنعت.',
      tag: 'تحلیل داده‌محور',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <circle cx="9" cy="9" r="6" />
          <path d="M9 6.5v5" />
          <path d="M7.5 7.5h3a1 1 0 0 1 0 2H7.5a1 1 0 0 0 0 2h3" />
          <path d="M15 11a6 6 0 0 1-5 5" />
          <circle cx="15.5" cy="15.5" r="4.5" />
        </svg>
      ),
      details: {
        overview:
          'ارزش‌آفرینی ماندگار بر پایه شناخت موشکافانه از محرک‌های اقتصادی، الگوهای تقاضا و زنجیره ارزش آغاز می‌شود. تیم‌های تخصصی ما با ترکیب تحلیل‌های مالی پیشرفته و درک میدانی از صنعت، فرصت‌های نامتقارن رشد را کشف می‌کنند.',
        keyPoints: [
          'بررسی موشکافانه ریسک‌ها و ساختار درآمدی پایدار',
          'مدل‌سازی مالی چندسناریویی برای تمامی چرخه‌های رونق و رکود',
          'ارزیابی مزیت رقابتی دفاع‌پذیر و مقیاس‌پذیری عملیاتی',
        ],
        metrics: '+۴۵٪ بهره‌وری در تصمیم‌گیری‌های کلان سرمایه‌گذاری',
        impact: 'کاهش خطاهای راهبردی و تضمین تخصیص بهینه منابع مالی و انسانی.',
      },
    },
    {
      id: 'partnership',
      title: 'شراکتی که بسیار فراتر از تأمین سرمایه امتداد می‌یابد',
      shortDesc: 'حضور فعال در کنار بنیان‌گذاران و مدیران ارشد برای گشایش بازارهای جدید و ارتقای حاکمیت شرکتی.',
      tag: 'همکاری راهبردی',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M3 10l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M8 15l3-3 2 2 3-4" />
        </svg>
      ),
      details: {
        overview:
          'ما خود را صرفاً تأمین‌کننده نقدینگی نمی‌دانیم، بلکه به عنوان هم‌سنگری متعهد در کنار تیم مدیریتی می‌ایستیم. تجربه، شبکه ارتباطی و اعتباری که طی سال‌ها انباشته شده، در خدمت توسعه پورتفولیو قرار می‌گیرد.',
        keyPoints: [
          'دسترسی به شبکه گسترده مشتریان شرکتی و شرکای تجاری',
          'استقرار ساختارهای نظارتی شفاف و استاندارد بین‌المللی',
          'حمایت در جذب نخبگان کلیدی و مدیران تراز اول',
        ],
        metrics: '۳.۲ برابر شتاب در گسترش سهم بازار شرکت‌های همکار',
        impact: 'گذار امن از یک کسب‌وکار بومی به یک پیشرو در سطح ملی و منطقه‌ای.',
      },
    },
    {
      id: 'adaptability',
      title: 'توانمندی راهبردی از مسیر انعطاف و چابکی عملیاتی',
      shortDesc: 'تطبیق بلادرنگ استراتژی‌ها با تحولات بازار، پیشرفت‌های فناورانه و تغییرات مقرراتی.',
      tag: 'انعطاف‌پذیری',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" />
          <circle cx="12" cy="11" r="3.5" />
          <path d="M12 9.5v1.5l1 1" />
        </svg>
      ),
      details: {
        overview:
          'در دنیای پرشتاب امروز، صلب بودن استراتژی به معنای توقف است. ما کسب‌وکارها را به ابزارها و فرآیندهایی مجهز می‌کنیم که تغییرات ناگهانی بازار را نه به شکل تهدید، بلکه به عنوان کاتالیزور تسریع موفقیت دریافت کنند.',
        keyPoints: [
          'بهینه‌سازی پویا در زنجیره تأمین و فرآیندهای توزیع',
          'پیاده‌سازی فناوری‌های نوآورانه در کاهش هزینه‌های سربار',
          'سنجش مستمر رضایت مشتریان و نرخ نگهداشت کاربران',
        ],
        metrics: 'کاهش ۶۰ روزه در زمان ورود محصولات جدید به بازار (TTM)',
        impact: 'حفظ سودآوری پایدار حتی در شدیدترین دوره‌های رکود اقتصادی.',
      },
    },
    {
      id: 'trust',
      title: 'اعتماد متقابل به عنوان شالوده و بنیان ارزش‌آفرینی',
      shortDesc: 'تعهد پایدار به صداقت، هم‌راستایی کامل منافع و شفافیت مطلق در تمامی تعاملات حرفه‌ای.',
      tag: 'اصول بنیادی',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <circle cx="12" cy="6" r="2.5" />
          <circle cx="6" cy="17" r="2.5" />
          <circle cx="18" cy="17" r="2.5" />
          <circle cx="12" cy="18" r="2" />
          <path d="M12 8.5v3.5" />
          <path d="M7.5 15l3-2" />
          <path d="M16.5 15l-3-2" />
        </svg>
      ),
      details: {
        overview:
          'هیچ استراتژی‌ای بدون اعتماد دوجانبه به بار نمی‌نشیند. ما باور داریم بیشترین بازدهی اقتصادی زمانی محقق می‌شود که همه طرف‌های ذی‌نفع با شفافیت کامل و افق دید مشترک به سمت یک آرمان حرکت کنند.',
        keyPoints: [
          'گزارش‌دهی ماهانه منظم با دسترسی مستقیم به داده‌های تحلیلی',
          'حفظ استقلال تصمیم‌گیری کارآفرینان در امور جاری کسب‌وکار',
          'قراردادهای منصفانه، شفاف و پایدار بر مبنای منافع متقابل',
        ],
        metrics: '۱۰۰٪ حفظ نرخ همکاری با بنیان‌گذاران در طول دوره‌های سرمایه‌گذاری',
        impact: 'ایجاد آرامش روانی و تمرکز کامل مدیریت بر ارزش‌آفرینی واقعی.',
      },
    },
  ];

  return (
    <section id="approach-section" className="relative w-full bg-white text-[#0a181c] py-16 sm:py-24 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden border-t border-[#f0f3f2]" dir="rtl">
      {/* Subtle background ambient geometric shards */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f4f7f6]/70 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f0f6f4]/60 rounded-full blur-3xl pointer-events-none translate-y-1/3" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-[#f2f7f5]/50 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ======================================================== */}
        {/* HEADER ROW: TITLE ONLY                                   */}
        {/* ======================================================== */}
        <div className="mb-10 sm:mb-14 text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight text-[#0a1e23] leading-[1.2]">
              رویکرد ما<br />
              در ارزش‌آفرینی پایدار
            </h2>
          </motion.div>
        </div>

        {/* ======================================================== */}
        {/* CARDS GRID: EXACTLY 2 CARDS PER ROW                      */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {items.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedCard(item)}
                className="group relative bg-[#f9fbfa] hover:bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 border border-slate-200/80 hover:border-[#0a8268]/40 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden text-right"
              >
                {/* Top Corner Subtle Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/30 rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center border border-slate-300/80 bg-white text-slate-600 group-hover:border-[#0a8268] group-hover:bg-[#0a8268]/10 group-hover:text-[#0a8268] group-hover:scale-105 transition-all duration-300 shadow-sm shrink-0">
                      {item.icon}
                    </div>

                    <span className="text-[11px] sm:text-xs font-medium px-3 py-1 rounded-full bg-slate-200/60 group-hover:bg-[#0a8268]/15 text-slate-600 group-hover:text-[#0a8268] transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#0e272c] group-hover:text-[#0a8268] transition-colors leading-[1.35] tracking-tight mb-2.5">
                    {item.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-500 group-hover:text-slate-600 transition-colors leading-relaxed">
                    {item.shortDesc}
                  </p>
                </div>

                {/* Bottom CTA row inside card */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-[#0a8268]">
                  <span>مشاهده جزئیات و راهبردها</span>
                  <div className="w-7 h-7 rounded-full bg-emerald-50 group-hover:bg-[#0a8268] group-hover:text-white flex items-center justify-center transition-all duration-200 group-hover:-translate-x-1">
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ======================================================== */}
      {/* MODAL ON CARD CLICK                                      */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" dir="rtl">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-[28px] p-6 sm:p-8 shadow-2xl z-10 text-right overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedCard(null)}
                className="absolute top-5 left-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                aria-label="بستن پنجره"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content Scroll Area */}
              <div className="overflow-y-auto space-y-6 pl-1 pr-1">
                {/* Header: Icon + Category Badge + Title */}
                <div className="flex items-start gap-4 pt-2">
                  <div className="w-14 h-14 rounded-2xl bg-[#0a8268]/10 text-[#0a8268] border border-[#0a8268]/30 flex items-center justify-center shrink-0">
                    {selectedCard.icon}
                  </div>
                  <div>
                    <span className="inline-block text-[11px] font-semibold text-[#0a8268] bg-emerald-50 px-2.5 py-0.5 rounded-full mb-1">
                      {selectedCard.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0a2328] leading-tight">
                      {selectedCard.title}
                    </h3>
                  </div>
                </div>

                {/* Overview Text */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedCard.details.overview}
                </div>

                {/* Strategic Key Points */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#0a8268]" />
                    <span>محورهای کلیدی عملیاتی:</span>
                  </h4>
                  <div className="space-y-2">
                    {selectedCard.details.keyPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact & Metric Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 flex flex-col justify-between">
                    <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-semibold mb-1">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                      <span>سنجه عملکردی</span>
                    </div>
                    <div className="text-xs font-medium text-emerald-950">
                      {selectedCard.details.metrics}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex flex-col justify-between">
                    <div className="text-slate-500 text-xs font-semibold mb-1">
                      دستاورد راهبردی
                    </div>
                    <div className="text-xs text-slate-700">
                      {selectedCard.details.impact}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedCard(null)}
                    className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    بستن پنجره
                  </button>

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedCard(null);
                      const el = document.getElementById('contact-trigger');
                      if (el) el.click();
                    }}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#094751] hover:bg-[#07363e] text-white text-xs font-semibold transition-all shadow-sm cursor-pointer"
                  >
                    <span>درخواست جلسه مشاوره</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
