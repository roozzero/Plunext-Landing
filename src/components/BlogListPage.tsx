import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Search, Clock, Calendar, BookOpen, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { BLOG_ARTICLES, BlogArticle } from '../data/blogData';

interface BlogListPageProps {
  onSelectArticle: (articleId: string) => void;
  onGoHome?: () => void;
  onOpenOrder: () => void;
}

export const BlogListPage: React.FC<BlogListPageProps> = ({
  onSelectArticle,
  onOpenOrder,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('همه');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    const cats = ['همه'];
    BLOG_ARTICLES.forEach((item) => {
      if (!cats.includes(item.category)) {
        cats.push(item.category);
      }
    });
    return cats;
  }, []);

  const filteredArticles = useMemo(() => {
    return BLOG_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === 'همه' || article.category === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full min-h-screen bg-[#fbfdfc] text-[#0a181c] pt-28 pb-20 select-text" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        {/* Section Badge (Centered) */}
        <div className="w-full flex justify-center mb-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-[#0a4852] border border-emerald-200/60 text-xs font-semibold tracking-wide shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#439683]" />
            وبلاگ و مقالات آموزشی تخصصی
          </span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0c2227] tracking-tight leading-[1.25]">
            دانش و استراتژی‌های رشد در دنیای دیجیتال
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed text-justify">
            جدیدترین مقالات، آموزش‌ها و تحلیل‌های کاربردی در زمینه طراحی وب‌سایت، سئو، هویت برند، تجربه کاربری و توسعه کسب‌وکارهای مدرن را اینجا بخوانید.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] mb-10 space-y-4">
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جست‌وجو در مقالات، کلمات کلیدی، موضوعات..."
                className="w-full pr-11 pl-4 py-3 rounded-2xl bg-slate-50/80 border border-slate-200 text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#439683] focus:bg-white transition-all text-right"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  پاک کردن
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-1">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 shrink-0 ml-1">
              <Filter className="w-3.5 h-3.5 text-[#439683]" />
              دسته‌بندی:
            </span>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0a4852] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Articles Count */}
        <div className="flex items-center justify-between mb-8 text-xs sm:text-sm text-slate-500 px-1">
          <span>نمایش {filteredArticles.length} مقاله تخصصی</span>
          {searchQuery && (
            <span>نتیجه جست‌وجو برای: «{searchQuery}»</span>
          )}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200/80 shadow-xs">
            <BookOpen className="w-12 h-12 mx-auto text-slate-300 mb-3" />
            <h3 className="text-lg font-bold text-slate-700">مقاله‌ای با این مشخصات یافت نشد</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              لطفاً کلمات کلیدی دیگری را امتحان کنید یا فیلتر دسته‌بندی را تغییر دهید.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('همه');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-[#0a4852] text-white text-xs font-semibold cursor-pointer"
            >
              نمایش همه مقالات
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9">
            {filteredArticles.map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => onSelectArticle(article.id)}
                className="group cursor-pointer bg-white rounded-[28px] overflow-hidden border border-slate-200/80 hover:border-emerald-300/60 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image & Badge */}
                <div>
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0a4852] text-[11px] font-bold shadow-xs">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-3">
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

                    <h2 className="text-lg sm:text-xl font-bold text-[#0c2227] tracking-tight leading-snug group-hover:text-[#439683] transition-colors mb-3 line-clamp-2">
                      {article.title}
                    </h2>

                    <p className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed line-clamp-3 text-justify">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer with Author and Read Button */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-emerald-500/20"
                    />
                    <span className="text-xs font-semibold text-slate-700">
                      {article.author.name}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0a4852] group-hover:text-[#439683] transition-colors">
                    <span>مطالعه</span>
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Bottom Banner to Start Project */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-br from-[#0c333a] to-[#071d22] rounded-[32px] p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              همکاری با تیم مهندسی پلانکست
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              آماده‌اید وب‌سایت برند خود را به سطحی بالاتر ارتقا دهید؟
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              از طراحی گرافیکی اختصاصی تا کدنویسی پیشرفته و سئو، تیم ما آماده است پروژه رویایی شما را به واقعیت تبدیل کند.
            </p>
            <div className="pt-2 flex items-center justify-center">
              <button
                type="button"
                onClick={onOpenOrder}
                className="px-7 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
              >
                ثبت سفارش و شروع پروژه
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
