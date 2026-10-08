import React from 'react';
import { motion } from 'motion/react';
import { Users } from 'lucide-react';
import christianImg from '../assets/imgs/christian_miller.jpg';
import markImg from '../assets/imgs/mark_davies.jpg';
import johnImg from '../assets/imgs/john_wilson.jpg';

interface Leader {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedinUrl: string;
}

export const LeadershipSection: React.FC = () => {
  const leaders: Leader[] = [
    {
      id: 'christian-miller',
      name: 'کریستین میلر (Christian Miller)',
      role: 'مدیرعامل و بنیان‌گذار (CEO)',
      bio: 'بیش از ۲۲ سال تجربه در تملک‌های استراتژیک، بازسازی ساختارهای مالی و هدایت شرکت‌ها به سمت بازارهای جهانی.',
      image: christianImg,
      linkedinUrl: 'https://linkedin.com',
    },
    {
      id: 'mark-davies',
      name: 'مارک دیویس (Mark Davies)',
      role: 'شریک ارشد اجرایی (Managing Partner)',
      bio: 'متخصص رشد عملیاتی و بهینه‌سازی زنجیره ارزش در صنایع پیشرفته با سابقه مدیریت سرمایه‌گذاری‌های چندصد میلیون دلاری.',
      image: markImg,
      linkedinUrl: 'https://linkedin.com',
    },
    {
      id: 'john-wilson',
      name: 'جان ویلسون (John Wilson)',
      role: 'مدیر ارشد سرمایه‌گذاری (CIO)',
      bio: 'راهبر استراتژی‌های تخصیص سرمایه، انضباط مالی و مدیریت ریسک‌های سیستماتیک در بازارهای رقابتی و فناوری.',
      image: johnImg,
      linkedinUrl: 'https://linkedin.com',
    },
  ];

  return (
    <section id="leadership-section" className="relative w-full bg-white text-[#0a181c] py-16 sm:py-24 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden select-none" dir="rtl">
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
            تیمی متعهد متشکل از رهبران اجرایی و استراتژیست‌های بازار که با انضباط مالی و بینش عملیاتی، کسب‌وکارها را در مسیر جهش پایدار همراهی می‌کنند.
          </motion.p>
        </div>

        {/* ======================================================== */}
        {/* 3 LEADERSHIP CARDS GRID (NO HORIZONTAL SCROLL)            */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {leaders.map((leader, idx) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col group cursor-pointer text-right bg-slate-50/70 hover:bg-white rounded-[30px] p-4 sm:p-5 border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-[0_16px_36px_rgba(10,30,35,0.08)] transition-all duration-300"
            >
              {/* Leader Photo */}
              <div className="relative w-full aspect-[4/4.5] rounded-[24px] overflow-hidden bg-slate-100 shadow-[0_6px_20px_rgba(0,0,0,0.03)]">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Leader Details & LinkedIn Button */}
              <div className="mt-5 flex items-start justify-between gap-3 px-1">
                <div className="text-right">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0b242a] tracking-tight leading-snug group-hover:text-[#094751] transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-emerald-700 font-medium mt-1">
                    {leader.role}
                  </p>
                </div>

                {/* LinkedIn Badge */}
                <a
                  href={leader.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`پروفایل لینکدین ${leader.name}`}
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 rounded-lg bg-[#094751] hover:bg-[#07363e] active:scale-95 text-white flex items-center justify-center transition-all shadow-sm shrink-0"
                >
                  <span className="font-sans font-bold text-xs lowercase tracking-tighter">
                    in
                  </span>
                </a>
              </div>

              {/* Bio summary */}
              <p className="mt-3 text-xs text-slate-500 font-normal leading-relaxed px-1">
                {leader.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
