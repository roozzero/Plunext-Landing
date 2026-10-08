import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Calendar } from 'lucide-react';
import ipoImg from '../assets/imgs/insight_ipo.jpg';
import skyscraperImg from '../assets/imgs/insight_skyscraper.jpg';
import globeImg from '../assets/imgs/insight_globe.jpg';

interface InsightArticle {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  category: string;
  fullContent?: string;
}

export const FeaturedInsightsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  const articles: InsightArticle[] = [
    {
      id: 'ipo-planning',
      title: 'چگونه برنامه عرضه عمومی (IPO) را با اطمینان کامل هدایت کنیم؟',
      excerpt:
        'تحلیل جامع روندهای جهانی عرضه اولیه سهام، گزارش‌ها و چشم‌انداز بازار سرمایه در سال ۲۰۲۵ و راهبردهای ورود به بورس را بررسی می‌کند.',
      readTime: '۱۸ دقیقه مطالعه',
      date: '۸ اکتبر ۲۰۲۵',
      image: ipoImg,
      category: 'بازارهای سرمایه',
      fullContent:
        'ورود به بازار عمومی یکی از سرنوشت‌سازترین نقاط عطف در چرخه حیات هر بنگاه اقتصادی است. موفقیت در این مسیر نیازمند آمادگی دقیق از سال‌ها قبل در گزارشگری مالی، استانداردهای حاکمیت شرکتی، ارتباط با سرمایه‌گذاران نهادی و تبیین شفاف اقتصاد واحد کسب‌وکار است. در بازارهای امروز، انضباط مالی و شفافیت تفاوت میان یک عرضه اولیه درخشان و یک ورود ناموفق را رقم می‌زند.',
    },
    {
      id: 'growth-blueprint',
      title: 'آیا تحولات بنیادین امروز، نقشه راه رشد و سرآمدی فردا را ترسیم می‌کند؟',
      excerpt:
        'پیمایش جامع مدیران ارشد اجرایی نشان می‌دهد چگونه رهبران سازمان‌ها، تاب‌آوری، بازآفرینی استراتژیک و مسیرهای نوین رشد را شکل می‌دهند...',
      readTime: '۱۵ دقیقه مطالعه',
      date: '۸ اکتبر ۲۰۲۵',
      image: skyscraperImg,
      category: 'استراتژی و رهبری',
      fullContent:
        'نوسانات بازار و تحولات پرشتاب فناوری، تیم‌های مدیریتی را ناگزیر به بازنگری بنیادین در مدل‌های عملیاتی خود کرده است. مدیران عامل پیشرو از ابهامات کلان اقتصادی نه به عنوان مانع، بلکه به عنوان فرصتی طلایی برای متوازن‌سازی دارایی‌ها، سرمایه‌گذاری روی فناوری‌های اختصاصی و ادغام‌های هدفمند استفاده می‌کنند.',
    },
    {
      id: 'reimagining-risk',
      title: 'چگونه بازتعریف مفهوم ریسک، سازمان شما را برای دنیای غیرقابل‌پیش‌بینی آماده می‌سازد؟',
      excerpt:
        'مطالعه تحول ریسک نشان می‌دهد که چگونه استراتژیست‌های هوشمند، اختلالات بازار را پیش از وقوع شناسایی و سریع‌تر از رقبا با آن هماهنگ می‌شوند...',
      readTime: '۱۲ دقیقه مطالعه',
      date: '۸ اکتبر ۲۰۲۵',
      image: globeImg,
      category: 'مدیریت ریسک جهانی',
      fullContent:
        'به‌جای نگاه سنتی به ریسک به عنوان یک مکانیزم دفاعی، سازمان‌های پیشگام، تاب‌آوری را به مزیتی رقابتی و ماندگار تبدیل می‌کنند. با پیش‌بینی نقاط تنش در زنجیره تأمین و ادغام داده‌های تحلیلی در تصمیمات هیئت‌مدیره، بنگاه‌های چابک در زمانی که رقبا دچار تردید هستند سهم بازار خود را تثبیت کرده و ارتقا می‌بخشند.',
    },
  ];

  return (
    <section id="blog-section" className="relative w-full bg-white text-[#0a181c] py-16 sm:py-24 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden" dir="rtl">
      {/* Decorative subtle faceted accents */}
      <div className="absolute top-8 right-1/3 w-32 h-32 bg-slate-100/50 rotate-45 pointer-events-none" />
      <div className="absolute bottom-6 left-8 w-44 h-44 bg-slate-100/40 rotate-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ======================================================== */}
        {/* HEADER: TITLE RIGHT | "View All" BUTTON LEFT */}
        {/* ======================================================== */}
        <div className="flex items-center justify-between mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-[#0a1e23]"
          >
            تحلیل‌ها و بینش‌های برگزیده
          </motion.h2>

          {/* View All Button */}
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#094751] hover:bg-[#07363e] text-white text-xs sm:text-[13px] font-medium px-5 py-2.5 rounded-full shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer group select-text"
          >
            <span>مشاهده همه مقالات</span>
            <span className="group-hover:-translate-x-0.5 transition-transform text-sm">←</span>
          </motion.button>
        </div>

        {/* ======================================================== */}
        {/* 3 INSIGHT CARDS GRID */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9">
          {articles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedArticle(article)}
              className="group cursor-pointer flex flex-col justify-between text-right"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[16/10.5] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-slate-100 shadow-[0_6px_25px_rgba(0,0,0,0.04)]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Card Text Content */}
              <div className="mt-5 flex flex-col flex-grow justify-between text-right">
                <div>
                  <h3 className="text-lg sm:text-[21px] font-medium text-[#0b242a] tracking-tight leading-snug group-hover:text-[#094751] transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                {/* Card Meta */}
                <div className="mt-4 pt-1 flex items-center gap-2 text-[11px] sm:text-xs text-slate-400 font-normal">
                  <span>{article.readTime}</span>
                  <span className="text-slate-300">•</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* ARTICLE READER MODAL */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md" dir="rtl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-[#0a1e23] max-h-[90vh] overflow-y-auto text-right"
            >
              {/* Close Button top-left in RTL */}
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-5 left-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                <span className="px-2.5 py-1 bg-emerald-50 text-[#094751] font-medium rounded-full">
                  {selectedArticle.category}
                </span>
                <span>{selectedArticle.readTime}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#08292e] leading-snug mb-4">
                {selectedArticle.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal whitespace-pre-line">
                {selectedArticle.fullContent}
              </p>

              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 rounded-full bg-[#094751] text-white text-xs sm:text-sm font-medium hover:bg-[#07363e] transition-colors"
                >
                  بستن پنجره
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
