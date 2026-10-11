import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { PortfolioCardItem } from '../../data/portfolioData';

interface PortfolioCardProps {
  card: PortfolioCardItem;
  onOpenCatalog: (projectId: string) => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ card, onOpenCatalog }) => {
  if (card.type === 'image') {
    return (
      <div
        onClick={() => onOpenCatalog(card.projectId)}
        className="w-[280px] sm:w-[320px] md:w-[360px] h-[380px] sm:h-[420px] shrink-0 rounded-[28px] overflow-hidden relative shadow-[0_4px_24px_rgba(0,0,0,0.04)] group cursor-pointer"
      >
        <img
          src={card.imageSrc}
          alt={card.imageAlt || 'پروژه'}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  return (
    <div
      onClick={() => onOpenCatalog(card.projectId)}
      className={`w-[300px] sm:w-[350px] md:w-[380px] h-[380px] sm:h-[420px] shrink-0 rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-black/5 text-right ${card.bgColor} ${card.textColor} transition-transform duration-300 hover:-translate-y-1 cursor-pointer`}
    >
      {/* Top Header: Logo & Badge */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          {/* Logo container with uniform sizing and balanced proportion */}
          <div className="h-9 sm:h-10 max-w-[130px] flex items-center justify-start overflow-hidden">
            {card.logoImg ? (
              <img
                src={card.logoImg}
                alt={card.title || 'لوگو'}
                className="h-8 max-h-8 max-w-[120px] w-auto object-contain brightness-100"
              />
            ) : card.logoSvgText ? (
              <div className="flex items-center gap-1.5 font-sans font-black text-sm tracking-wider opacity-90">
                <span>{card.logoSvgText.text}</span>
              </div>
            ) : null}
          </div>

          {card.metricsBadge && (
            <span className="text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full bg-black/10 border border-black/10 shrink-0 select-none">
              {card.metricsBadge}
            </span>
          )}
        </div>

        {card.category && (
          <span className="text-[11px] font-medium opacity-75 block mb-1">
            {card.category}
          </span>
        )}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
          {card.title}
        </h3>
        <p className="text-xs sm:text-[13px] leading-relaxed opacity-90 font-normal line-clamp-4 text-justify">
          {card.description}
        </p>
      </div>

      {/* Bottom link: Click to open catalog */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          onOpenCatalog(card.projectId);
        }}
        className="pt-4 border-t border-black/10 flex items-center justify-between text-xs font-semibold cursor-pointer group hover:opacity-85 transition-opacity"
      >
        <span>مشاهده کاتالوگ و تصاویر</span>
        <div className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:-translate-x-1 transition-transform">
          <ArrowLeft className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};
