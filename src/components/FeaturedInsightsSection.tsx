import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Calendar, ArrowRight } from 'lucide-react';
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
      title: 'How can you navigate your IPO planning with confidence?',
      excerpt:
        'The EY Global IPO Trends covers news and insights on the global IPO market for Q3 2025 and an outlook for Q4 2025.',
      readTime: '18 minute read',
      date: '08 Oct 2025',
      image: ipoImg,
      category: 'Capital Markets',
      fullContent:
        'Going public is one of the most pivotal milestones in an enterprise’s lifecycle. Success requires preparing well in advance across financial reporting, governance architecture, equity storytelling, and investor relations. In today’s selective public market environment, discipline and transparent unit economics separate standout debuts from underperforming listings.',
    },
    {
      id: 'growth-blueprint',
      title: 'Does today’s disruption provide the blueprint for tomorrow’s growth?',
      excerpt:
        'EY-Parthenon CEO Survey September 2025 reveals how leaders build confidence, resilience, and growth strategies...',
      readTime: '18 minute read',
      date: '08 Oct 2025',
      image: skyscraperImg,
      category: 'Strategy & Leadership',
      fullContent:
        'Market volatility and technological shifts are forcing leadership teams to fundamentally rethink their operating models. Forward-looking chief executives are using macro uncertainty to accelerate portfolio rebalancing, double down on mission-critical IP, and execute opportunistic buy-and-build M&A.',
    },
    {
      id: 'reimagining-risk',
      title: 'How can reimagining risk prepare you for an unpredictable world?',
      excerpt:
        'The 2025 EY Global Risk Transformation Study explores how Risk Strategists see disruption earlier, adapt faster...',
      readTime: '18 minute read',
      date: '08 Oct 2025',
      image: globeImg,
      category: 'Global Risk',
      fullContent:
        'Rather than viewing risk merely as a defense mechanism, leading organizations transform resilience into a competitive moat. By anticipating supply chain stress points and integrating geopolitical intelligence into boardroom decisions, agile firms capture market share while peers remain paralyzed.',
    },
  ];

  return (
    <section className="relative w-full bg-white text-[#0a181c] py-16 sm:py-24 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden">
      {/* Decorative subtle faceted accents matching screenshot */}
      <div className="absolute top-8 left-1/3 w-32 h-32 bg-slate-100/50 rotate-45 pointer-events-none" />
      <div className="absolute bottom-6 right-8 w-44 h-44 bg-slate-100/40 rotate-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ======================================================== */}
        {/* HEADER: TITLE LEFT | "View All →" BUTTON RIGHT */}
        {/* ======================================================== */}
        <div className="flex items-center justify-between mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-[#0a1e23]"
          >
            Featured Insights
          </motion.h2>

          {/* View All Button */}
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#094751] hover:bg-[#07363e] text-white text-xs sm:text-[13px] font-medium px-5 py-2.5 rounded-full shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer group select-none"
          >
            <span>View All</span>
            <span className="group-hover:translate-x-0.5 transition-transform text-sm">→</span>
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
              className="group cursor-pointer flex flex-col justify-between"
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
              <div className="mt-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg sm:text-[21px] font-medium text-[#0b242a] tracking-tight leading-snug group-hover:text-[#094751] transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                {/* Card Meta: Read Time • Date */}
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-[#0a1e23] max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
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

              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4 text-[#0a1e23]">
                {selectedArticle.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                {selectedArticle.fullContent}
              </p>

              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="bg-[#094751] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#07363e] transition-colors"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
