import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Check,
  Tag,
  BookOpen,
  ChevronRight,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import { BLOG_ARTICLES, getArticleById, BlogArticle } from '../data/blogData';

interface BlogDetailPageProps {
  articleId: string;
  onGoBackToBlog?: () => void;
  onGoHome?: () => void;
  onSelectArticle: (articleId: string) => void;
  onOpenOrder: () => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  articleId,
  onGoBackToBlog,
  onGoHome,
  onSelectArticle,
  onOpenOrder,
}) => {
  const [copied, setCopied] = useState(false);
  const article = getArticleById(articleId) || BLOG_ARTICLES[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [articleId]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const relatedArticles = BLOG_ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <article className="w-full min-h-screen bg-[#fbfdfc] text-[#0a181c] pt-28 pb-24 select-text" dir="rtl">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        {/* Article Header */}
        <header className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#0a4852] border border-emerald-200/80 text-xs font-bold">
              {article.category}
            </span>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-normal">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#439683]" />
                {article.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {article.date}
              </span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0c2227] tracking-tight leading-[1.3]">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed border-r-4 border-[#439683] pr-4 py-1 text-justify">
            {article.excerpt}
          </p>

          {/* Author bar & share button */}
          <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-11 h-11 rounded-full object-cover ring-2 ring-emerald-500/20 shadow-xs"
              />
              <div>
                <div className="text-sm font-bold text-slate-900">{article.author.name}</div>
                <div className="text-xs text-slate-500">{article.author.role}</div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">لینک کپی شد!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-[#439683]" />
                  <span>اشتراک‌گذاری مقاله</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden bg-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] mb-10">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Article Content */}
        <div className="space-y-8 text-slate-800 leading-relaxed text-sm sm:text-base">
          {/* Intro Paragraph */}
          <p className="text-base sm:text-lg font-normal text-slate-700 leading-loose bg-white p-6 sm:p-7 rounded-2xl border border-slate-100 shadow-xs text-justify">
            {article.content.intro}
          </p>

          {/* Structured Sections */}
          {article.content.sections.map((sec, idx) => (
            <section key={idx} className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0c2227] tracking-tight pb-2 border-b border-slate-100">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-slate-700 font-normal leading-loose text-justify">
                  {p}
                </p>
              ))}

              {sec.bullets && sec.bullets.length > 0 && (
                <ul className="space-y-2.5 my-4 bg-emerald-50/50 border border-emerald-100 rounded-2xl p-5">
                  {sec.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium text-justify">
                      <span className="w-2 h-2 rounded-full bg-[#439683] mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Callout Quote */}
          {article.content.quote && (
            <div className="my-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-white border-r-4 border-[#439683] shadow-xs">
              <p className="text-base sm:text-lg font-bold text-[#0c2e36] italic leading-relaxed text-justify">
                «{article.content.quote}»
              </p>
            </div>
          )}

          {/* Conclusion */}
          <div className="mt-8 p-6 sm:p-7 rounded-3xl bg-slate-100/80 border border-slate-200">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#439683]" />
              جمع‌بندی و نتیجه‌گیری
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal text-justify">
              {article.content.conclusion}
            </p>
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5 ml-2">
              <Tag className="w-3.5 h-3.5 text-[#439683]" />
              برچسب‌ها:
            </span>
            {article.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-medium transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio Box */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center gap-5 text-right">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-16 h-16 rounded-full object-cover ring-4 ring-emerald-500/20 shrink-0"
          />
          <div className="space-y-1 sm:space-y-1.5 flex-1 text-center sm:text-right">
            <div className="text-base font-bold text-slate-900">{article.author.name}</div>
            <div className="text-xs text-[#0a4852] font-semibold">{article.author.role}</div>
            <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed pt-1 text-justify">
              متخصص در حوزه مهندسی نرم‌افزار، توسعه وب و استراتژی رشد دیجیتال با سال‌ها سابقه پیاده‌سازی پروژه‌های پیشرو در اکوسیستم آنلاین ایران.
            </p>
          </div>
        </div>

        {/* Order CTA Banner */}
        <div className="mt-12 bg-gradient-to-br from-[#0c333a] to-[#071d22] rounded-[30px] p-7 sm:p-10 text-white text-center relative overflow-hidden shadow-xl">
          <div className="relative z-10 space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold">
              نیاز به وب‌سایت استاندارد برای رونق کسب‌وکارتان دارید؟
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed text-justify">
              تیم متخصص پلانکست آماده است تا ایده‌های شما را در کوتاه‌ترین زمان و با بالاترین کیفیت فنی به مرحله اجرا برساند.
            </p>
            <div className="pt-2 flex items-center justify-center">
              <button
                type="button"
                onClick={onOpenOrder}
                className="px-7 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              >
                ثبت سفارش آنلاین پروژه
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0c2227] tracking-tight">
              مقالات مرتبط و پیشنهادی
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectArticle(rel.id)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-full aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[10.5px] font-bold text-[#0a4852] bg-emerald-50 px-2 py-0.5 rounded-full">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-800 group-hover:text-[#439683] transition-colors mt-2 line-clamp-2 leading-snug">
                      {rel.title}
                    </h4>
                  </div>
                </div>

                <div className="px-4 pb-4 text-[11px] text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#439683]" />
                  <span>{rel.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
