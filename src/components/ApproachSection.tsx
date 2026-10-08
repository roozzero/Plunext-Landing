import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeft, CheckCircle2, Sparkles, TrendingUp, ShieldCheck, Award, Users2, Layers, Eye } from 'lucide-react';

interface ExpertiseRole {
  role: string;
  name: string;
  experience: string;
  skills: string[];
}

interface ValueCardItem {
  id: string;
  title: string;
  shortDesc: string;
  tag: string;
  image: string;
  specialtyTitle: string;
  specialtyDescription: string;
  teamExpertise: ExpertiseRole[];
  coreServices: string[];
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
      tag: 'تحلیل داده‌محور و مهندسی سیستم',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      specialtyTitle: 'تیم معماری داده، تحلیلگران مالی و استراتژیست‌های بازار',
      specialtyDescription:
        'متخصصان ما با سال‌ها تجربه در موسسات ارشد مالی، شرکت‌های فناوری سیلیکون‌ولی و شرکت‌های پیشرو منطقه‌ای، داده‌های خام را به نقشه‌های راه عملیاتی و سیستم‌های سودآور تبدیل می‌کنند.',
      teamExpertise: [
        {
          role: 'سرپرست ارشد تحلیل داده و هوش تجاری',
          name: 'تیم مهندسی داده ورت',
          experience: '+۱۲ سال تجربه',
          skills: ['مدل‌سازی مالی پیشرفته', 'طراحی پایگاه‌های مقیاس‌پذیر', 'پیش‌بینی سناریوهای اقتصادی'],
        },
        {
          role: 'معمار ارشد نرم‌افزار و زیرساخت ابری',
          name: 'تیم زیرساخت و DevOps',
          experience: '+۱۰ سال تجربه',
          skills: ['طراحی معماری میکروسرویس', 'امنیت سایبری داده‌های حساس', 'بهینه‌سازی کارایی'],
        },
      ],
      coreServices: [
        'ارزیابی و موشکافی موانع رشد (Due Diligence جامع دیجیتال و مالی)',
        'طراحی داشبوردهای مانیتورینگ KPI بلادرنگ و تله‌متری عملکرد',
        'مدل‌سازی پیش‌بینی جریان نقدینگی و تحلیل ریسک‌های زنجیره ارزش',
        'طراحی اکوسیستم‌های نرم‌افزاری داده‌محور اختصاصی برای سازمان‌ها',
      ],
      details: {
        overview:
          'ارزش‌آفرینی ماندگار بر پایه شناخت موشکافانه از محرک‌های اقتصادی، الگوهای تقاضا و زنجیره ارزش آغاز می‌شود. تیم‌های تخصصی ما با ترکیب تحلیل‌های مالی پیشرفته و درک میدانی از صنعت، فرصت‌های نامتقارن رشد را کشف می‌کنند.',
        keyPoints: [
          'بررسی موشکافانه ریسک‌ها و ساختار درآمدی پایدار',
          'مدل‌سازی مالی چندسناریویی برای تمامی چرخه‌های رونق و رکود',
          'ارزیابی مزیت رقابتی دفاع‌پذیر و مقیاس‌پذیری عملیاتی',
        ],
        metrics: '+۴۵٪ بهره‌وری در تصمیم‌گیری‌های کلان سرمایه‌گذاری و نرم‌افزاری',
        impact: 'کاهش خطاهای راهبردی و تضمین تخصیص بهینه منابع مالی و انسانی.',
      },
    },
    {
      id: 'partnership',
      title: 'شراکتی که بسیار فراتر از تأمین سرمایه امتداد می‌یابد',
      shortDesc: 'حضور فعال در کنار بنیان‌گذاران و مدیران ارشد برای گشایش بازارهای جدید و ارتقای حاکمیت شرکتی.',
      tag: 'توسعه محصول و رهبری فنی',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      specialtyTitle: 'تیم توسعه محصول، طراحان تجربه کاربری (UI/UX) و مدیران مهندسی',
      specialtyDescription:
        'ما در کنار تیم‌های کارآفرین می‌ایستیم و محصولات نرم‌افزاری با استانداردهای طراحی در کلاس جهانی و زیرساخت‌های پایدار برای ورود به بازارهای جدید خلق می‌کنیم.',
      teamExpertise: [
        {
          role: 'طراحان ارشد تجربه کاربری و محصول (Product Design)',
          name: 'تیم طراحی UI/UX ورت',
          experience: '+۸ سال تجربه',
          skills: ['طراحی رابط‌های کاربری چشم‌نواز', 'سیستم‌های طراحی یکپارچه (Design System)', 'تست‌های کاربردپذیری بین‌المللی'],
        },
        {
          role: 'متخصصان توسعه Full-Stack و موبایل',
          name: 'تیم توسعه وب و نرم‌افزار',
          experience: '+۹ سال تجربه',
          skills: ['React, Next.js, Node.js', 'پلتفرم‌های ابری و مقیاس‌پذیر', 'یکپارچه‌سازی درگاه‌ها و APIهای سازمانی'],
        },
      ],
      coreServices: [
        'طراحی و پیاده‌سازی پلتفرم‌های تحت وب و اپلیکیشن‌های پیشرفته سازمانی',
        'بازآفرینی کامل هویت بصری و تجربه کاربری (Re-branding & UX Overhaul)',
        'اتصال پورتفولیو به شبکه‌های گسترده B2B و شرکای تجاری بین‌المللی',
        'مربیگری فنی و ساخت تیم‌های مهندسی درون‌سازمانی با فرهنگ عملکرد بالا',
      ],
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
      tag: 'تحول دیجیتال و هوش مصنوعی',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
      specialtyTitle: 'تیم تخصصی هوش مصنوعی، اتوماسیون فرآیندها و متدولوژی‌های Agile',
      specialtyDescription:
        'استقرار اتوماسیون‌های هوشمند، ربات‌های تحلیلی و ابزارهای هوش مصنوعی مولد برای کاهش زمان اجرای فرآیندها و افزایش چابکی پاسخگویی سازمان به تغییرات بازار.',
      teamExpertise: [
        {
          role: 'مهندسان هوش مصنوعی و مدل‌های زبانی (AI/ML)',
          name: 'واحد هوش مصنوعی ورت',
          experience: '+۷ سال تجربه',
          skills: ['یکپارچه‌سازی مدل‌های هوش مصنوعی', 'اتوماسیون اسناد و فرآیندها', 'الگوریتم‌های تطبیق و بهینه‌سازی'],
        },
        {
          role: 'مدیران ارشد چابک و اسکرام‌مسترها',
          name: 'تیم مدیریت تحویل پروژه',
          experience: '+۱۱ سال تجربه',
          skills: ['مدیریت اسپرینت‌های سریع', 'به‌روزرسانی پیوسته CI/CD', 'تطبیق بلادرنگ محصول با بازار'],
        },
      ],
      coreServices: [
        'پیاده‌سازی ماژول‌های هوش مصنوعی اختصاصی در سامانه‌های کاری موجود',
        'بهینه‌سازی پویا در زنجیره تأمین و خودکارسازی روندهای پاسخگویی مشتریان',
        'استقرار چرخه‌های توسعه سریع با قابلیت آزمون بازار در کمتر از ۳ هفته',
        'کاهش شدید هزینه‌های سربار از طریق زیرساخت‌های نرم‌افزاری مدرن بدون سرور',
      ],
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
      tag: 'حاکمیت فنی و پشتیبانی پایدار',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
      specialtyTitle: 'تیم تضمین کیفیت (QA)، امنیت اطلاعات، حقوقی و مانیتورینگ ۲۴/۷',
      specialtyDescription:
        'پایداری ۹۹.۹۹٪ زیرساخت‌ها، کدنویسی با بالاترین استانداردهای امنیتی جهان، نگهداری پیوسته و شفافیت گزارش‌دهی تضمین‌کننده آرامش خاطر کامل شرکای ماست.',
      teamExpertise: [
        {
          role: 'سرپرستان تست کیفیت و ممیزی امنیت (Security & QA)',
          name: 'تیم امنیت سایبری و اعتبارسنجی',
          experience: '+۱۰ سال تجربه',
          skills: ['تست نفوذ و ممیزی کدهای حساس', 'تست بار و آزمون‌های استرس', 'انطباق با استانداردهای حریم داده'],
        },
        {
          role: 'کارشناسان ارشد پشتیبانی و نگهداری پلتفرم',
          name: 'تیم مانیتورینگ و SRE',
          experience: '+۸ سال تجربه',
          skills: ['پاسخگویی فوری به رخدادها', 'پشتیبان‌گیری خودکار چندلایه', 'گزارش‌دهی شفاف و لحظه‌ای'],
        },
      ],
      coreServices: [
        'تضمین کیفیت ۱۰۰٪ کدهای نرم‌افزاری با آزمون‌های خودکار End-to-End',
        'طراحی قراردادهای سطح خدمات (SLA) روشن با تعهد جبران زمان توقف',
        'حفاظت کامل از مالکیت معنوی، داده‌های کاربران و اسرار تجاری پروژه',
        'همراهی مستمر پس از لانچ محصول با پایش ۲۴ ساعته و رفع باگ‌های احتمالی',
      ],
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
    <section id="approach-section" className="relative w-full bg-white text-[#0a181c] py-16 sm:py-24 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden border-t border-[#f0f3f2] select-text" dir="rtl">
      {/* Subtle background ambient geometric shards */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-right">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0a8268]/10 border border-[#0a8268]/20 text-[#0a8268] text-xs font-semibold mb-3.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>رویکرد متمایز و تخصص‌های تیم ورت</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2227] tracking-tight leading-[1.25]"
          >
            رویکرد ما؛ فراتر از سرمایه‌گذاری سنتی،
            <span className="block text-[#0a8268] font-normal mt-1">
              معماری پایدار و تخصص فنی در کنار رهبران برجسته
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed text-right"
          >
            ما تجربه انباشته دهه‌ها حضور در بالاترین سطوح بازار، بینش ژرف تحلیل داده‌ها و مهارت‌های نوین مهندسی نرم‌افزار را گردهم آورده‌ایم. برای مشاهده جزئیات و تخصص‌های هر بخش، نشانگر را روی کارت‌ها نگه دارید.
          </motion.p>
        </div>

        {/* ======================================================== */}
        {/* 2 CARDS PER ROW, 2-LINE CLAMPED & JUSTIFIED TEXTS       */}
        {/* Requirement: 2 cards per row, title justified max 2     */}
        {/* lines, description justified max 2 lines with '...',    */}
        {/* 'مشاهده' button completely removed.                      */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-7">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedCard(item)}
              className="group relative h-[320px] sm:h-[350px] rounded-[30px] overflow-hidden cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(10,130,104,0.22)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-end p-6 sm:p-7 text-right select-text border border-black/5"
            >
              {/* Card Photo Background */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-[0.88] group-hover:brightness-[0.75]"
                />
                {/* Multi-stage dark gradient overlay to ensure high readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06181d] via-[#06181d]/80 via-50% to-black/20" />
                <div className="absolute inset-0 bg-[#0a4852]/20 group-hover:bg-[#0a4852]/40 transition-colors duration-500" />
              </div>

              {/* Top Tag */}
              <div className="absolute top-5 right-5 z-10">
                <span className="text-[11px] font-bold text-emerald-200 bg-black/45 backdrop-blur-md px-3.5 py-1 rounded-full border border-emerald-400/30 shadow-sm">
                  {item.tag}
                </span>
              </div>

              {/* Bottom Content Area: Title & Description & View More Action */}
              <div className="relative z-10 text-white flex flex-col justify-end">
                {/* Title: Justified and strictly clamped to max 2 lines */}
                <h3 className="text-lg sm:text-xl font-bold leading-snug tracking-tight text-white group-hover:text-emerald-300 transition-colors duration-300 text-justify line-clamp-2">
                  {item.title}
                </h3>

                {/* Short Description: Justified and strictly clamped to max 2 lines ending with '...' */}
                <p className="mt-2 text-xs sm:text-[13.5px] text-slate-200/90 leading-relaxed font-normal text-justify line-clamp-2">
                  {item.shortDesc}
                </p>

                {/* Thin divider line and View More Specialties & Skills (like Leadership cards) */}
                <div className="mt-3.5 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-semibold text-emerald-300 group-hover:text-white transition-colors">
                  <span>مشاهده بیشتر تخصص‌ها و مهارت‌ها</span>
                  <span className="group-hover:-translate-x-1.5 transition-transform text-sm">←</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* WIDE MODAL FOR INTRODUCING TEAM EXPERTISE & SERVICES     */}
      {/* max-w-5xl, Light Theme, Rich Imagery & Beautiful Grid     */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6" dir="rtl">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
            />

            {/* Modal Dialog: Ultra Wide (max-w-5xl) with Clean Light Styling */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="relative w-full max-w-5xl bg-white border border-slate-200/90 rounded-[28px] sm:rounded-[36px] shadow-[0_25px_70px_rgba(0,0,0,0.25)] z-10 text-right overflow-hidden max-h-[92vh] flex flex-col select-text"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedCard(null)}
                className="absolute top-5 left-5 z-20 p-2.5 rounded-full bg-white/90 hover:bg-slate-100 text-slate-700 hover:text-slate-950 shadow-md border border-slate-200 transition-colors cursor-pointer"
                aria-label="بستن پنجره"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content Scroll Area */}
              <div className="overflow-y-auto space-y-6">
                {/* Hero Banner with Team Picture & Title */}
                <div className="relative w-full h-48 sm:h-64 overflow-hidden rounded-t-[28px] sm:rounded-t-[36px]">
                  <img
                    src={selectedCard.image}
                    alt={selectedCard.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2328] via-[#0a2328]/60 to-transparent" />
                  
                  {/* Overlay Titles */}
                  <div className="absolute bottom-5 right-6 sm:right-8 left-6 text-white text-right">
                    <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/30 border border-emerald-400/40 text-emerald-200 backdrop-blur-md mb-2">
                      {selectedCard.tag}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                      {selectedCard.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-7 pt-1">
                  {/* Overview Paragraph */}
                  <div className="p-5 rounded-2xl bg-[#f5faf8] border border-emerald-100/80 text-sm sm:text-base text-slate-700 leading-relaxed text-right">
                    <p className="font-medium text-[#0a4852] mb-1.5 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span>{selectedCard.specialtyTitle}</span>
                    </p>
                    {selectedCard.specialtyDescription}
                  </div>

                  {/* 2-Column Grid: Team Expertise Roles & Core Services */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                    {/* Left in RTL: Team Expertise Members */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                          <Users2 className="w-5 h-5 text-emerald-600" />
                          <span>ترکیب و شایستگی‌های تیم تخصصی:</span>
                        </div>
                        <div className="space-y-4">
                          {selectedCard.teamExpertise.map((exp, idx) => (
                            <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                              <div className="flex items-center justify-between mb-1.5">
                                <span className="text-sm font-bold text-[#0c2e36]">{exp.role}</span>
                                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                                  {exp.experience}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 mb-2">{exp.name}</p>
                              <div className="flex flex-wrap gap-1.5">
                                {exp.skills.map((skill, sIdx) => (
                                  <span key={sIdx} className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Performance Metric Box */}
                      <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center gap-3">
                        <Award className="w-5 h-5 text-emerald-700 shrink-0" />
                        <div>
                          <span className="text-[11px] font-semibold text-emerald-800 block">سنجه کلیدی بازدهی:</span>
                          <span className="text-xs sm:text-sm font-bold text-emerald-950">{selectedCard.details.metrics}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right in RTL: Core Services & Implementation */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-[#f9fbfa] border border-[#dce8e3] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                          <Layers className="w-5 h-5 text-emerald-600" />
                          <span>خدمات و راهکارهای قابل ارائه به پروژه‌ها:</span>
                        </div>
                        <div className="space-y-3">
                          {selectedCard.coreServices.map((service, sIndex) => (
                            <div key={sIndex} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700">
                        <span className="font-bold text-slate-900 block mb-0.5">اثر راهبردی بر پروژه:</span>
                        {selectedCard.details.impact}
                      </div>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedCard(null)}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      بستن پنجره
                    </button>

                    <a
                      href="#order"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedCard(null);
                        const el = document.getElementById('consultation-trigger') || document.getElementById('contact-trigger');
                        if (el) el.click();
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#0a4852] hover:bg-[#07363e] text-white text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
                    >
                      <span>ثبت سفارش و مذاکره با این تیم</span>
                      <ArrowLeft className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
