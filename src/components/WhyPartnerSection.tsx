import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import teachershowLogo from '../assets/imgs/portfolio/teachershow/teachershowLogo.png';
import digiLogo from '../assets/imgs/portfolio/digikolah/digiLogo.png';
import fitLogo from '../assets/imgs/portfolio/fitclub/fitLogo.svg';
import charmLogo from '../assets/imgs/portfolio/Chardoozak/charmLogo.webp';
import cheemodeLogo from '../assets/imgs/portfolio/cheemode/CheemodeLogo.png';
import roozzeroLogo from '../assets/imgs/portfolio/roozzero/RoozzeroLogo.png';
import learnoLogo from '../assets/imgs/portfolio/learnobit/learnoLogo.png';
import pelashanLogo from '../assets/imgs/portfolio/pelashan/pelashanLogo.webp';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  category: string;
  duration: string;
  quote: string;
  rating: number;
  logo: string;
}

interface WhyPartnerSectionProps {
  onOpenContact?: () => void;
}

export const WhyPartnerSection: React.FC<WhyPartnerSectionProps> = ({ onOpenContact }) => {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 'teacher-sho',
      name: 'مهندس پرویز بابائی',
      role: 'هم‌بنیان‌گذار',
      company: 'پلتفرم تیچرشو',
      category: 'فناوری آموزشی',
      duration: 'همکاری ۱ ساله',
      quote: 'همکاری با تیم پلانکست تجربه خوبی برای ما بود. از ابتدا به نیازهای پروژه توجه کردند و با طراحی یک وب‌سایت متناسب با اهداف ما، کمک کردند خدمات آموزشی‌مان را حرفه‌ای‌تر در فضای آنلاین معرفی کنیم.',
      rating: 5,
      logo: teachershowLogo,
    },
    {
      id: 'digi-kolah',
      name: 'خانم مریم کاظمی',
      role: 'مدیر توسعه کسب‌وکار',
      company: 'دیجی کلاه',
      category: 'تجارت الکترونیک مد و پوشاک',
      duration: 'همکاری ۳ ساله',
      quote: 'تیم پلانکست با درک خوبی که از نیازهای یک فروشگاه اینترنتی داشت، توانست تجربه‌ای حرفه‌ای برای معرفی محصولات ما ایجاد کند. نظم صفحات و توجه به تجربه خرید کاربران از نکات مثبت این همکاری بود.',
      rating: 5,
      logo: digiLogo,
    },
    {
      id: 'fit-club',
      name: 'آقای پیمان مصلی',
      role: 'مدیر باشگاه فیت کلاب',
      company: 'فیت کلاب',
      category: 'سلامت دیجیتال و ورزش',
      duration: 'همکاری ۱۸ ماهه',
      quote: 'از همکاری با پلانکست رضایت داشتیم. تیم پروژه با دقت به نیازهای ما گوش داد و تلاش کرد وب‌سایتی متناسب با خدمات مجموعه طراحی کند. ارتباط مناسب و توجه به جزئیات، تجربه همکاری خوبی برای ما رقم زد.',
      rating: 5,
      logo: fitLogo,
    },
    {
      id: 'charm-doozak',
      name: 'خانم زهرا یزدانی',
      role: 'مدیر کسب و کار',
      company: 'فروشگاه چرمدوزک',
      category: 'صنایع دستی و چرم فاخر',
      duration: 'همکاری ۲ ساله',
      quote: 'همکاری با پلانکست به ما کمک کرد محصولاتمان را در بستری منظم‌تر و حرفه‌ای‌تر معرفی کنیم. توجه به نحوه نمایش محصولات و تجربه کاربری، از نکاتی بود که در فرایند طراحی برای ما اهمیت داشت.',
      rating: 5,
      logo: charmLogo,
    },
    {
      id: 'learnobit',
      name: 'مهندس آرین بهرامی',
      role: 'هم‌بنیان‌گذار و مدیر آکادمی',
      company: 'آکادمی لرنوبیت',
      category: 'آموزش برنامه‌نویسی و مهارت‌های دیجیتال',
      duration: 'همکاری ۲ ساله',
      quote: 'یکی از نقاط قوت همکاری با پلانکست، درک عمیق از زیرساخت‌های پلتفرم آموزش آنلاین و استریم روان دوره‌ها بود. وب‌سایت لرنوبیت بستری امن، پرسرعت و بسیار کارآمد برای آموزش و تعامل دانشجویان با منتورها فراهم کرده است.',
      rating: 5,
      logo: learnoLogo,
    },
    {
      id: 'chi-mode',
      name: 'خانم فاطمه معتمدی',
      role: 'مدیر مارکتینگ و برند',
      company: 'پلتفرم چی مده',
      category: 'پلتفرم هوشمند استایل',
      duration: 'همکاری ۱ ساله',
      quote: 'تیم پلانکست به اهمیت ساختار محتوا و تجربه کاربری در یک وب‌سایت محتوایی توجه داشت. همکاری با این تیم برای ما فرصتی بود تا مطالب و موضوعات مرتبط با حوزه فعالیت‌مان را در بستری منظم‌تر و حرفه‌ای‌تر ارائه کنیم.',
      rating: 5,
      logo: cheemodeLogo,
    },
    {
      id: 'pelashan',
      name: 'آقای مجید پلاشان',
      role: 'مدیرعامل و بنیان‌گذار',
      company: 'مجموعه بازرگانی پلاشان',
      category: 'صادرات و تجارت الکترونیک خشکبار',
      duration: 'همکاری ۲ ساله',
      quote: 'از اینکه در فرایند طراحی، استانداردهای بین‌المللی و نیازهای صادراتی برند ما مورد توجه قرار گرفت، رضایت کامل داریم. پلانکست ساختاری مدرن و چندزبانه ایجاد کرد تا مشتریان بین‌المللی با سهولت سفارش‌گذاری کنند.',
      rating: 5,
      logo: pelashanLogo,
    },
    {
      id: 'rooziro-academy',
      name: 'مهندس پویا شمس',
      role: 'مدیر راهبردی و محتوا',
      company: 'آکادمی روزیرو',
      category: 'توسعه مهارت‌های فردی و مالی',
      duration: 'همکاری ۲ ساله',
      quote: 'در یک وب‌سایت آموزشی، ارائه منظم اطلاعات و دسترسی آسان کاربران اهمیت زیادی دارد. پلانکست در طراحی ساختار سایت به این نیازها توجه کرد و برای ایجاد بستری حرفه‌ای‌تر جهت معرفی خدمات آموزشی ما تلاش کرد.',
      rating: 5,
      logo: roozzeroLogo,
    },
  ];

  const renderTestimonialGroup = (groupIndex: number) => (
    <div
      key={groupIndex}
      className="flex shrink-0 gap-6 sm:gap-7 pr-6 sm:pr-7"
      aria-hidden={groupIndex === 1}
    >
      {testimonials.map((item) => (
        <div
          key={`${item.id}-g${groupIndex}`}
          dir="rtl"
          className="w-[330px] sm:w-[380px] lg:w-[410px] shrink-0 bg-white/10 hover:bg-white/[0.15] backdrop-blur-xl border border-white/15 hover:border-emerald-400/40 rounded-[28px] p-6 sm:p-7 transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:-translate-y-1 flex flex-col justify-between group relative overflow-hidden text-right"
        >
          {/* Subtle background quote watermark */}
          <div className="absolute top-4 left-4 text-white/[0.04] group-hover:text-emerald-400/[0.08] transition-colors pointer-events-none">
            <Quote className="w-20 h-20 -scale-x-100" />
          </div>

          <div>
            {/* Top Badge: Company & Category & Rating */}
            <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/10">
              <div className="flex items-center gap-1 text-amber-300">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                ))}
              </div>

              <span className="px-2.5 py-1 rounded-full bg-white/10 text-[11px] font-medium text-emerald-300 border border-white/10">
                {item.duration}
              </span>
            </div>

            {/* Quote Body */}
            <p className="mt-4 text-[13px] sm:text-sm text-slate-100 font-normal leading-relaxed text-justify line-clamp-4">
              «{item.quote}»
            </p>
          </div>

          {/* Customer Info Card Footer */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {/* Logo container instead of personal avatar */}
              <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center p-1.5 shadow-md group-hover:border-emerald-400/50 group-hover:bg-white/20 transition-all shrink-0 overflow-hidden">
                <img
                  src={item.logo}
                  alt={item.company}
                  className="w-full h-full object-contain filter drop-shadow-xs"
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                  {item.name}
                </h4>
                <p className="text-[11px] text-slate-300">
                  {item.role}
                </p>
              </div>
            </div>

            {/* Company Name Badge */}
            <div className="text-left shrink-0">
              <span className="block text-xs font-bold text-white bg-white/10 px-2.5 py-1 rounded-lg border border-white/10 group-hover:border-emerald-400/30 transition-colors">
                {item.company}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="testimonials-section" className="relative w-full bg-[#0a383d] text-white py-14 sm:py-20 overflow-hidden select-text" dir="rtl">
      {/* Background rich dark teal gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c3d42] via-[#09353a] to-[#062428] pointer-events-none" />

      {/* Radial soft emerald glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#10565e]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Dotted watermark */}
      <div className="absolute right-0 bottom-0 w-80 h-80 pointer-events-none opacity-20">
        <svg width="100%" height="100%" fill="none">
          <defs>
            <pattern id="testimonials-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2.5" cy="2.5" r="1.5" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonials-dots)" />
        </svg>
      </div>

      {/* Centered Badge and Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 mb-8 sm:mb-10 text-center relative z-10">
        <div className="w-full flex justify-center mb-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-emerald-300 border border-white/15 text-xs font-semibold tracking-wide shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            نظرات مشتریان و همکاران پلانکست
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[38px] font-bold text-white tracking-tight flex flex-wrap items-baseline justify-center gap-x-2.5 gap-y-1.5 leading-snug">
          <span>روایت همراهی و رضایت</span>
          <span className="text-emerald-400 font-normal">کسب‌وکارهای همکار</span>
        </h2>
      </div>

      {/* ======================================================== */}
      {/* INFINITE RIGHT-TO-LEFT TESTIMONIAL TICKER                */}
      {/* ======================================================== */}
      <div 
        className="w-full overflow-hidden relative"
        dir="ltr"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Soft edge fade masks for premium presentation */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0a383d] to-transparent z-10 pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0a383d] to-transparent z-10 pointer-events-none" />

        <div
          className="animate-marquee-testimonials"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {renderTestimonialGroup(0)}
          {renderTestimonialGroup(1)}
        </div>
      </div>

      {/* Bottom CTA to Action */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 mt-12 sm:mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 text-xs sm:text-sm text-slate-300"
        >
          <span>شما هم می‌خواهید داستان موفقیت بعدی باشید؟</span>
          <button
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 text-emerald-300 hover:text-white font-medium underline underline-offset-4 decoration-emerald-400/50 hover:decoration-white transition-all cursor-pointer"
          >
            <span>همین حالا گفتگو را شروع کنید</span>
            <span className="text-sm">←</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
