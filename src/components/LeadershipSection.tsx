import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, X, Briefcase, GraduationCap, Award, CheckCircle2, Mail, ExternalLink, Sparkles, Building2 } from 'lucide-react';
import christianImg from '../assets/imgs/christian_miller.jpg';
import markImg from '../assets/imgs/mark_davies.jpg';
import johnImg from '../assets/imgs/john_wilson.jpg';

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
}

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

interface Leader {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedinUrl: string;
  email: string;
  summary: string;
  coreCompetencies: string[];
  workExperience: ExperienceItem[];
  education: EducationItem[];
  honors: string[];
}

export const LeadershipSection: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const leaders: Leader[] = [
    {
      id: 'christian-miller',
      name: 'کریستین میلر (Christian Miller)',
      role: 'مدیرعامل و بنیان‌گذار (CEO)',
      bio: 'بیش از ۲۲ سال تجربه در تملک‌های استراتژیک، بازسازی ساختارهای مالی و هدایت شرکت‌ها به سمت بازارهای جهانی.',
      image: christianImg,
      linkedinUrl: 'https://linkedin.com',
      email: 'c.miller@vort-group.com',
      summary:
        'کریستین میلر با بیش از دو دهه رهبری در صندوق‌های سرمایه‌گذاری خصوصی و تملک‌های بین‌المللی (M&A)، هدایت بیش از ۳۵ معامله موفق در حوزه‌های تجهیزات صنعتی، زیرساخت و فناوری را در کارنامه دارد. او معتقد است ارزش‌آفرینی پایدار تنها با تمرکز بر بنیادهای عملیاتی و سرمایه‌گذاری صبورانه به بار می‌نشیند.',
      coreCompetencies: [
        'معماری استراتژیک ادغام و تملک (M&A)',
        'بازسازی مدل‌های درآمدی و بهینه‌سازی ترازنامه',
        'حاکمیت شرکتی و روابط نهادی بین‌المللی',
        'توسعه پورتفولیو در بازارهای نوظهور',
        'مذاکره قراردادهای تأمین مالی پیچیده',
      ],
      workExperience: [
        {
          period: '۲۰۱۸ - اکنون',
          role: 'مدیرعامل و رئیس هیئت مدیره',
          company: 'گروه سرمایه‌گذاری ورت (Vort Group)',
          description:
            'تأسیس و راهبری صندوق‌های ۱ و ۲ با مجموع ارزش ۹۰M$، هدایت تملک‌های کلیدی در صنعت هوانوردی و نرم‌افزارهای سازمانی.',
        },
        {
          period: '۲۰۱۰ - ۲۰۱۸',
          role: 'شریک ارشد سرمایه‌گذاری خصوصی',
          company: 'کنسرسیوم مالی آلپاین پارتنرز (Alpine Partners)',
          description:
            'مدیریت پورتفولیوی ۱.۲ میلیارد دلاری در بخش خدمات مهندسی و نظارت بر تجدید ساختار ۸ شرکت متوسط صنعتی.',
        },
        {
          period: '۲۰۰۴ - ۲۰۱۰',
          role: 'مدیر بانکداری سرمایه‌گذاری',
          company: 'مورگان استنلی (Morgan Stanley - لندن)',
          description:
            'مشاور ارشد معاملات تملک بین‌المللی در حوزه تجهیزات انرژی و زیرساخت‌های اروپای غربی.',
        },
      ],
      education: [
        {
          degree: 'کارشناسی ارشد مدیریت کسب‌وکار (MBA) با گرایش مالی',
          institution: 'مدرسه بازرگانی لندن (London Business School)',
          year: '۲۰۰۴',
        },
        {
          degree: 'کارشناسی اقتصاد کاربردی',
          institution: 'دانشگاه زوریخ (University of Zurich)',
          year: '۲۰۰۱',
        },
      ],
      honors: [
        'انتخاب به عنوان مدیر برتر سرمایه‌گذاری خصوصی سال ۲۰۲۳',
        'عضو ارشد انجمن بین‌المللی مدیران عامل (YPO)',
        'سخنران کلیدی همایش جهانی Private Equity Summit ژنو',
      ],
    },
    {
      id: 'mark-davies',
      name: 'مارک دیویس (Mark Davies)',
      role: 'شریک ارشد اجرایی (Managing Partner)',
      bio: 'متخصص رشد عملیاتی و بهینه‌سازی زنجیره ارزش در صنایع پیشرفته با سابقه مدیریت سرمایه‌گذاری‌های چندصد میلیون دلاری.',
      image: markImg,
      linkedinUrl: 'https://linkedin.com',
      email: 'm.davies@vort-group.com',
      summary:
        'مارک دیویس مهندس تحول عملیاتی و رشد مقیاس‌پذیر در شرکت‌های پورتفولیو است. با سابقه طولانی در مشاوره ارشد استراتژی و هدایت تیم‌های عملیاتی بزرگ، او سیستم‌های تولید و زنجیره تأمین را به بهره‌وری حداکثری و استانداردهای جهانی می‌رساند.',
      coreCompetencies: [
        'بهینه‌سازی زنجیره ارزش و لجستیک جهانی',
        'استقرار اتوماسیون پیشرفته و کنترل کیفیت صنعتی',
        'مدیریت اسپرینت‌های تحول دیجیتال سازمانی',
        'مدیریت بحران و کاهش هزینه‌های عملیاتی (Lean)',
        'توسعه کانال‌های فروش B2B فرامرزی',
      ],
      workExperience: [
        {
          period: '۲۰۱۹ - اکنون',
          role: 'شریک ارشد اجرایی و عملیات',
          company: 'گروه سرمایه‌گذاری ورت (Vort Group)',
          description:
            'راهبری مستقیم تیم‌های عملیاتی در پورتفولیوی استیل ریور و سابرپک، افزایش ۴۲ درصدی حاشیه سود عملیاتی.',
        },
        {
          period: '۲۰۱۲ - ۲۰۱۹',
          role: 'معاون ارشد تعالی عملیات (VP of Operations)',
          company: 'صنایع مهندسی تکسترون (Textron Systems)',
          description:
            'پیاده‌سازی تولید ناب در ۱۲ کارخانه قطعه‌سازی پیشرفته و کاهش ۴۰ درصدی زمان هدررفت خطوط تولید.',
        },
        {
          period: '۲۰۰۶ - ۲۰۱۲',
          role: 'مشاور ارشد استراتژی و زنجیره تأمین',
          company: 'مکنزی اند کمپانی (McKinsey & Company)',
          description:
            'ارائه مشاوره تحول عملیاتی به بزرگ‌ترین هلدینگ‌های صنعتی در اروپا و آمریکای شمالی.',
        },
      ],
      education: [
        {
          degree: 'کارشناسی ارشد مهندسی صنایع و سیستم‌ها',
          institution: 'دانشگاه صنعتی مونیخ (TUM)',
          year: '۲۰۰۶',
        },
        {
          degree: 'کارشناسی مهندسی مکانیک',
          institution: 'کالج سلطنتی لندن (Imperial College London)',
          year: '۲۰۰۳',
        },
      ],
      honors: [
        'گواهینامه ارشد کمربند مشکی شش‌سیگما (Six Sigma Master Black Belt)',
        'رتبه اول دستاورد بهره‌وری صنعتی از کنفدراسیون صنعت آلمان',
        'عضو هیئت داوران نوآوری زنجیره تأمین صنعتی اروپا',
      ],
    },
    {
      id: 'john-wilson',
      name: 'جان ویلسون (John Wilson)',
      role: 'مدیر ارشد سرمایه‌گذاری (CIO)',
      bio: 'راهبر استراتژی‌های تخصیص سرمایه، انضباط مالی و مدیریت ریسک‌های سیستماتیک در بازارهای رقابتی و فناوری.',
      image: johnImg,
      linkedinUrl: 'https://linkedin.com',
      email: 'j.wilson@vort-group.com',
      summary:
        'جان ویلسون استراتژیست ارشد تخصیص سرمایه و مدیریت ریسک ورت است. او با پشتوانه تحلیلی فوق‌العاده قوی و تسلط به ابزارهای ریاضیاتی مالی، وظیفه بررسی موشکافانه فرصت‌های سرمایه‌گذاری و تضمین نرخ بازده داخلی (IRR) پایدار را بر عهده دارد.',
      coreCompetencies: [
        'تخصیص هوشمند سرمایه و پرتفولیو منیجمنت',
        'مدل‌سازی ارزش‌گذاری چندفاکتوره (Valuation Modeling)',
        'مدیریت ریسک‌های سیستماتیک و محافظت از سرمایه',
        'ارزیابی و تحلیل نرم‌افزارهای عمودی و فین‌تک',
        'طراحی سازوکارهای خروج موفق (Exit Strategies)',
      ],
      workExperience: [
        {
          period: '۲۰۲۰ - اکنون',
          role: 'مدیر ارشد سرمایه‌گذاری (CIO)',
          company: 'گروه سرمایه‌گذاری ورت (Vort Group)',
          description:
            'طراحی استراتژی تخصیص سرمایه در صندوق‌های ورت، نظارت بر انطباق ریسک و غربالگری بیش از ۲۵۰ پرونده سرمایه‌گذاری.',
        },
        {
          period: '۲۰۱۴ - ۲۰۲۰',
          role: 'مدیر پورتفولیوی دارایی‌های فناورانه',
          company: 'صندوق بازنشستگی معلمان اونتاریو (OTPP - تورنتو)',
          description:
            'مدیریت دارایی‌های سهام خصوصی به ارزش ۸۵۰M$ با تحقق میانگین بازده سالانه ۲۴٪.',
        },
        {
          period: '۲۰۰۸ - ۲۰۱۴',
          role: 'تحلیلگر ارشد ریسک اعتباری و بازار',
          company: 'گلدمن ساکس (Goldman Sachs - نیویورک)',
          description:
            'طراحی ماتریس‌های استرس‌تست برای سبدهای بدهی سازمانی و ابزارهای مشتقه مالی.',
        },
      ],
      education: [
        {
          degree: 'دارنده مدرک معتبر تحلیلگری مالی (CFA Charterholder)',
          institution: 'موسسه CFA آمریکا',
          year: '۲۰۱۱',
        },
        {
          degree: 'کارشناسی ارشد اقتصادسنجی و ریاضیات مالی',
          institution: 'دانشگاه شیکاگو (University of Chicago)',
          year: '۲۰۰۸',
        },
      ],
      honors: [
        'تحلیلگر برتر بازارهای خصوصی در گزارش سالانه Institutional Investor',
        'عضو هیئت امنای انجمن تحلیلگران مالی فرانکفورت',
        'مؤلف مقالات پژوهشی متعدد پیرامون انضباط سرمایه در چرخه‌های رکود',
      ],
    },
  ];

  return (
    <section id="leadership-section" className="relative w-full bg-white text-[#0a181c] py-16 sm:py-24 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden select-text" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* ======================================================== */}
        {/* HEADER: TITLE RIGHT & SUBTITLE */}
        {/* ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div className="text-right">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 text-xs sm:text-[13px] text-[#094751] font-medium tracking-wide mb-2"
            >
              <Users className="w-4 h-4 text-emerald-600" />
              <span>کمیته راهبری و اعضای ارشد</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-[#0a1e23]"
            >
              تیم رهبری و مدیریت ارشد
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm text-slate-500 font-normal max-w-md text-right leading-relaxed"
          >
            تیمی متعهد متشکل از رهبران اجرایی و استراتژیست‌های بازار که با انضباط مالی و بینش عملیاتی، کسب‌وکارها را همراهی می‌کنند. برای مشاهده رزومه و سوابق هر مدیر، روی تصویر کلیک کنید.
          </motion.p>
        </div>

        {/* ======================================================== */}
        {/* 3 LEADERSHIP CARDS GRID (CLICKABLE TO OPEN RESUME MODAL)  */}
        {/* Uniform style, 2-line justified text, aligned resume bar  */}
        {/* and social buttons: LinkedIn, Instagram, Telegram, X     */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8 items-stretch">
          {leaders.map((leader, idx) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedLeader(leader)}
              className="flex flex-col justify-between h-full group cursor-pointer text-right bg-slate-50/70 hover:bg-white rounded-[30px] p-5 sm:p-6 border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-[0_16px_36px_rgba(10,30,35,0.08)] transition-all duration-300"
            >
              {/* Top Section */}
              <div>
                {/* Leader Photo */}
                <div className="relative w-full aspect-[4/4.5] rounded-[24px] overflow-hidden bg-slate-100 shadow-[0_6px_20px_rgba(0,0,0,0.03)]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-4">
                    <span className="text-white text-xs font-bold bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      مشاهده رزومه کامل 📄
                    </span>
                  </div>
                </div>

                {/* Leader Details */}
                <div className="mt-5 text-right px-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0b242a] tracking-tight leading-snug group-hover:text-[#094751] transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-emerald-700 font-medium mt-1">
                    {leader.role}
                  </p>
                </div>

                {/* Bio summary: Strictly justified & max 2 lines with '...' */}
                <p className="mt-3 text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed px-1 text-justify line-clamp-2">
                  {leader.bio}
                </p>

                {/* Social media buttons right under the description (LinkedIn, Instagram, Telegram, X) */}
                <div
                  className="mt-4 px-1 flex items-center gap-2 select-none"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="text-[11px] font-medium text-slate-400 shrink-0 ml-1">
                    ارتباط:
                  </span>

                  {/* LinkedIn */}
                  <a
                    href={leader.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`لینکدین ${leader.name}`}
                    aria-label={`لینکدین ${leader.name}`}
                    className="w-8 h-8 rounded-full bg-slate-100/90 hover:bg-[#0077b5] text-slate-600 hover:text-white border border-slate-200/70 hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_12px_rgba(0,119,181,0.35)] cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.5a1.63 1.63 0 1 0 1.63 1.63A1.63 1.63 0 0 0 7.86 6.5z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`اینستاگرام ${leader.name}`}
                    aria-label={`اینستاگرام ${leader.name}`}
                    className="w-8 h-8 rounded-full bg-slate-100/90 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-slate-600 hover:text-white border border-slate-200/70 hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_12px_rgba(220,39,67,0.35)] cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>

                  {/* Telegram */}
                  <a
                    href="https://telegram.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`تلگرام ${leader.name}`}
                    aria-label={`تلگرام ${leader.name}`}
                    className="w-8 h-8 rounded-full bg-slate-100/90 hover:bg-[#229ed9] text-slate-600 hover:text-white border border-slate-200/70 hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_12px_rgba(34,158,217,0.35)] cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06-.01.19-.02.32z"/>
                    </svg>
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`ایکس ${leader.name}`}
                    aria-label={`ایکس ${leader.name}`}
                    className="w-8 h-8 rounded-full bg-slate-100/90 hover:bg-[#0f1419] text-slate-600 hover:text-white border border-slate-200/70 hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_12px_rgba(0,0,0,0.35)] cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* View Resume Action Hint: Perfectly aligned in the same row across all cards */}
              <div className="mt-5 pt-3.5 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-[#094751] px-1">
                <span>مشاهده رزومه و سوابق حرفه‌ای</span>
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* WIDE RESUME MODAL FOR EACH LEADER                        */}
      {/* max-w-5xl, Rich Resume Layout, Photo, Experience & Badges */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6" dir="rtl">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLeader(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
            />

            {/* Resume Dialog: Ultra-wide (max-w-5xl) with structured CV design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 25 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="relative w-full max-w-5xl bg-white border border-slate-200/90 rounded-[28px] sm:rounded-[36px] shadow-[0_25px_70px_rgba(0,0,0,0.25)] z-10 text-right overflow-hidden max-h-[92vh] flex flex-col select-text"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedLeader(null)}
                className="absolute top-5 left-5 z-20 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 shadow-sm transition-colors cursor-pointer"
                aria-label="بستن پنجره"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scroll Area */}
              <div className="overflow-y-auto space-y-7 p-6 sm:p-9">
                {/* Header: Photo + Profile Info + Contact Badges */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-200">
                  {/* Photo */}
                  <div className="w-32 h-36 sm:w-40 sm:h-44 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-slate-100">
                    <img
                      src={selectedLeader.image}
                      alt={selectedLeader.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Name, Role & Details */}
                  <div className="flex-1 text-center sm:text-right">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold mb-2">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>رزومه و پروفایل رسمی مدیریت</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                      {selectedLeader.name}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-emerald-700 mt-1">
                      {selectedLeader.role}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                      {selectedLeader.summary}
                    </p>

                    {/* Contact details & links */}
                    <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs">
                      <a
                        href={`mailto:${selectedLeader.email}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-300 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-slate-500" />
                        <span className="font-mono dir-ltr">{selectedLeader.email}</span>
                      </a>

                      <a
                        href={selectedLeader.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#094751] text-white hover:bg-[#07363e] transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>پروفایل لینکدین تایید شده</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* 2-Column CV Body */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
                  {/* Right Column in RTL: Work Experience (lg:col-span-7) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-4 flex items-center gap-2 pb-2 border-b border-slate-200">
                        <Briefcase className="w-5 h-5 text-emerald-600" />
                        <span>سوابق و مسئولیت‌های اجرایی (Work Experience)</span>
                      </h4>

                      <div className="space-y-4">
                        {selectedLeader.workExperience.map((exp, idx) => (
                          <div key={idx} className="relative pr-5 border-r-2 border-emerald-500/40 pb-4">
                            <span className="absolute -right-[7px] top-1.5 w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-emerald-100" />
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                              <h5 className="text-sm font-bold text-slate-900">{exp.role}</h5>
                              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 w-fit">
                                {exp.period}
                              </span>
                            </div>
                            <div className="text-xs font-semibold text-emerald-800 mb-1 flex items-center gap-1.5">
                              <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                              <span>{exp.company}</span>
                            </div>
                            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                              {exp.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Left Column in RTL: Skills, Education & Honors (lg:col-span-5) */}
                  <div className="lg:col-span-5 space-y-6">
                    {/* Core Competencies */}
                    <div className="p-5 rounded-2xl bg-[#f6faf8] border border-emerald-100">
                      <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        <span>مهارت‌های کلیدی و تخصص‌ها</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedLeader.coreCompetencies.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-2xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Education */}
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-emerald-600" />
                        <span>تحصیلات و مدارک تخصصی</span>
                      </h4>
                      <div className="space-y-3">
                        {selectedLeader.education.map((edu, eIdx) => (
                          <div key={eIdx} className="text-xs border-b border-slate-200/70 pb-2.5 last:border-none last:pb-0">
                            <span className="font-bold text-slate-900 block">{edu.degree}</span>
                            <span className="text-slate-500 mt-0.5 block">{edu.institution} ({edu.year})</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Honors & Accolades */}
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-emerald-600" />
                        <span>افتخارات و عضویت‌های حرفه‌ای</span>
                      </h4>
                      <div className="space-y-2">
                        {selectedLeader.honors.map((honor, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{honor}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedLeader(null)}
                    className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    بستن رزومه
                  </button>

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedLeader(null);
                      const el = document.getElementById('consultation-trigger') || document.getElementById('contact-trigger');
                      if (el) el.click();
                    }}
                    className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-[#0a4852] hover:bg-[#07363e] text-white text-xs sm:text-sm font-bold transition-all shadow-md cursor-pointer"
                  >
                    <span>هماهنگی جلسه با این مدیر</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
