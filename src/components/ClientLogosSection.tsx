import React from 'react';
import { 
  GraduationCap, 
  Crown, 
  Dumbbell, 
  Scissors, 
  Package, 
  Sparkles, 
  ShoppingBag, 
  Award 
} from 'lucide-react';

interface CompanyBrand {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
}

export const ClientLogosSection: React.FC = () => {
  const companies: CompanyBrand[] = [
    {
      id: 'teachersho',
      name: 'تیچرشو',
      category: 'پلتفرم آموزش معلمان',
      icon: <GraduationCap className="w-5 h-5 text-emerald-600" />,
    },
    {
      id: 'digikolah',
      name: 'دیجی کلاه',
      category: 'مرجع مد و اکسسوری',
      icon: <Crown className="w-5 h-5 text-amber-500" />,
    },
    {
      id: 'fitclub',
      name: 'فیت کلاب',
      category: 'سلامت و تناسب اندام',
      icon: <Dumbbell className="w-5 h-5 text-cyan-600" />,
    },
    {
      id: 'charmdoozak',
      name: 'چرمدوزک',
      category: 'صنایع چرم دست‌دوز',
      icon: <Scissors className="w-5 h-5 text-rose-500" />,
    },
    {
      id: 'wikipackage',
      name: 'ویکی پکیج',
      category: 'صنعت بسته‌بندی و لجستیک',
      icon: <Package className="w-5 h-5 text-indigo-500" />,
    },
    {
      id: 'chimede',
      name: 'چی مده',
      category: 'رسانه ترند و فشن',
      icon: <Sparkles className="w-5 h-5 text-fuchsia-500" />,
    },
    {
      id: 'sapinoshop',
      name: 'ساپینو شاپ',
      category: 'فروشگاه سبک زندگی مدرن',
      icon: <ShoppingBag className="w-5 h-5 text-teal-600" />,
    },
    {
      id: 'rooziro',
      name: 'آکادمی روزیرو',
      category: 'توسعه مهارت و سرمایه‌گذاری',
      icon: <Award className="w-5 h-5 text-blue-600" />,
    },
  ];

  const renderCompanyGroup = (groupIndex: number) => (
    <div
      key={groupIndex}
      className="flex shrink-0 items-center gap-6 sm:gap-8 pr-6 sm:pr-8"
      aria-hidden={groupIndex === 1}
    >
      {companies.map((company) => (
        <div
          key={`${company.id}-g${groupIndex}`}
          dir="rtl"
          className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-[#f8faf9] hover:bg-white border border-slate-200/80 hover:border-emerald-500/40 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-200 cursor-pointer group shrink-0"
        >
          {/* Logo Icon Badge */}
          <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-emerald-50 border border-slate-200/70 group-hover:border-emerald-200 flex items-center justify-center transition-colors shadow-sm shrink-0">
            {company.icon}
          </div>

          {/* Company Info */}
          <div className="flex flex-col text-right">
            <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-emerald-700 transition-colors leading-tight">
              {company.name}
            </span>
            <span className="text-[10px] text-slate-400 group-hover:text-slate-500 transition-colors mt-0.5">
              {company.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative w-full bg-white text-[#0a181c] py-10 sm:py-14 border-t border-[#f0f4f3] overflow-hidden" dir="rtl">
      {/* Soft gradient masks on sides for elegant fade-in / fade-out */}
      <div className="absolute top-0 right-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 left-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-7 text-center">
        <p className="text-xs sm:text-[13px] text-slate-400 font-medium tracking-wide">
          مورد اعتماد برترین شرکت‌ها و پلتفرم‌های تخصصی پیشرو
        </p>
      </div>

      {/* Infinite Seamless Continuous Motion Track */}
      <div className="w-full overflow-hidden flex select-text py-2" dir="ltr">
        <div className="animate-marquee-logos">
          {renderCompanyGroup(0)}
          {renderCompanyGroup(1)}
        </div>
      </div>
    </section>
  );
};
