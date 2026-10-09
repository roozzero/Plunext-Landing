import React from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/blogData';

interface FeaturedInsightsSectionProps {
  onOpenBlog?: () => void;
  onSelectArticle?: (articleId: string) => void;
}

export const FeaturedInsightsSection: React.FC<FeaturedInsightsSectionProps> = ({
  onOpenBlog,
  onSelectArticle,
}) => {
  const articles = BLOG_ARTICLES.slice(0, 3);

  return (
    <section id="blog-section" className="relative w-full bg-white text-[#0a181c] py-16 sm:py-24 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden" dir="rtl">
      {/* Decorative subtle faceted accents */}
      <div className="absolute top-8 right-1/3 w-32 h-32 bg-slate-100/50 rotate-45 pointer-events-none" />
      <div className="absolute bottom-6 left-8 w-44 h-44 bg-slate-100/40 rotate-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Badge (Centered) */}
        <div className="w-full flex justify-center mb-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-[#0a4852] border border-emerald-200/60 text-xs font-semibold tracking-wide shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#439683]" />
            وبلاگ و مقالات آموزشی تخصصی
          </span>
        </div>

        {/* ======================================================== */}
        {/* HEADER: TITLE RIGHT | "View All" BUTTON LEFT */}
        {/* ======================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold tracking-tight text-[#0a1e23] flex flex-wrap items-baseline gap-x-2 gap-y-1.5 leading-snug"
          >
            <span className="text-[#0c2227]">هرآنچه برای رشد آنلاین</span>
            <span className="text-[#439683] font-normal">باید بدانید</span>
          </motion.h2>

          {/* View All Button */}
          <motion.button
            type="button"
            onClick={onOpenBlog}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#094751] hover:bg-[#07363e] text-white text-xs sm:text-[13px] font-medium px-5 py-2.5 rounded-full shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer group select-text self-start sm:self-auto shrink-0"
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
              onClick={() => onSelectArticle ? onSelectArticle(article.id) : (onOpenBlog && onOpenBlog())}
              className="group cursor-pointer flex flex-col justify-between text-right"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[16/10.5] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-slate-100 shadow-[0_6px_25px_rgba(0,0,0,0.04)]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0a4852] text-[11px] font-bold shadow-xs">
                    {article.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Card Text Content */}
              <div className="mt-5 flex flex-col flex-grow justify-between text-right">
                <div>
                  <h3 className="text-lg sm:text-[21px] font-medium text-[#0b242a] tracking-tight leading-snug group-hover:text-[#439683] transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed line-clamp-2 text-justify">
                    {article.excerpt}
                  </p>
                </div>

                {/* Card Meta & Read Link */}
                <div className="mt-4 pt-1 flex items-center justify-between text-[11px] sm:text-xs text-slate-400 font-normal">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#439683]" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <span className="text-xs font-semibold text-[#0a4852] group-hover:text-[#439683] flex items-center gap-1 transition-colors">
                    <span>مطالعه</span>
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

