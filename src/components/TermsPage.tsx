import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, FileText, ChevronRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface TermsPageProps {
  onGoHome: () => void;
  onOpenContact: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onGoHome, onOpenContact }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#fbfdfc] text-[#0a181c] pt-28 pb-20 select-text" dir="rtl">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6">
          <button
            type="button"
            onClick={onGoHome}
            className="hover:text-emerald-700 transition-colors flex items-center gap-1 cursor-pointer font-medium"
          >
            صفحه اصلی
          </button>
          <ChevronRight className="w-3.5 h-3.5 rotate-180 text-slate-400" />
          <span className="text-slate-900 font-semibold">شرایط و قوانین استفاده</span>
        </div>

        {/* Section Badge (Centered) */}
        <div className="w-full flex justify-center mb-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-[#0a4852] border border-emerald-200/60 text-xs font-semibold tracking-wide shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#439683]" />
            قوانین و مقررات رسمی همکاری
          </span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2227] tracking-tight leading-[1.3]">
            شرایط و ضوابط ارائه خدمات استودیو پلانکست
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed text-justify">
            هدف از تدوین این مجموعه قوانین، شفاف‌سازی فرآیندهای فنی، تعیین دقیق تعهدات دوطرفه و تضمین بالاترین کیفیت در تحویل پروژه‌های طراحی وب‌سایت، توسعه نرم‌افزار و راهکارهای آنلاین است.
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400">
            <Clock className="w-3.5 h-3.5 text-[#439683]" />
            <span>آخرین به‌روزرسانی: مهرماه ۱۴۰۵</span>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-8 bg-white p-6 sm:p-10 rounded-[32px] border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] text-slate-800">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0c2e36] flex items-center gap-2.5 pb-2 border-b border-slate-100">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#0a4852] flex items-center justify-center text-xs font-bold font-mono">
                ۰۱
              </span>
              تعاریف و کلیات قرارداد
            </h2>
            <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed text-justify">
              در این سند، «پلانکست» به معنای تیم مهندسی و ارائه‌دهنده خدمات طراحی، برنامه‌نویسی و سئو است و «کارفرما» به شخص حقیقی یا حقوقی اطلاق می‌شود که سفارش پروژه را ثبت و قرارداد را تایید نموده است. تمامی مراحل اجرای پروژه‌ها منطبق بر پروپوزال فنی و مالی مصوب طرفین انجام می‌پذیرد.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0c2e36] flex items-center gap-2.5 pb-2 border-b border-slate-100">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#0a4852] flex items-center justify-center text-xs font-bold font-mono">
                ۰۲
              </span>
              مراحل ثبت سفارش، پرداخت و زمان‌بندی
            </h2>
            <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed text-justify">
              شروع رسمی هر پروژه پس از امضای قرارداد یا تایید مکتوب پروپوزال و واریز پیش‌پرداخت توافق‌شده (معمولاً ۴۰ درصد مبلغ کل) آغاز می‌گردد. مابقی اقساط بر اساس جدول گام‌های پیشرفت پروژه (Milestones) و تایید فازهای تحویل دمو تسویه خواهد شد.
            </p>
            <ul className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#439683] shrink-0 mt-0.5" />
                <span>فاز نخست: تحلیل نیازمندی‌ها، طراحی تجربه کاربری و پروتوتایپ وایرفریم (۴۰٪ پیش‌پرداخت)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#439683] shrink-0 mt-0.5" />
                <span>فاز دوم: کدنویسی فرانت‌اند، بک‌اند و اتصال پایگاه داده (۳۰٪ مرحله دوم)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#439683] shrink-0 mt-0.5" />
                <span>فاز نهایی: تست امنیت، سئو تکنیکال و آموزش پنل مدیریت (۳۰٪ تسویه نهایی)</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0c2e36] flex items-center gap-2.5 pb-2 border-b border-slate-100">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#0a4852] flex items-center justify-center text-xs font-bold font-mono">
                ۰۳
              </span>
              مالکیت معنوی و دسترسی به سورس‌کد
            </h2>
            <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed text-justify">
              پس از تسویه کامل حساب، تمامی حقوق مادی و معنوی سورس‌کد، فایل‌های گرافیکی و اطلاعات سامانه به صورت کامل و دائم به کارفرما واگذار می‌گردد. پلانکست حق نمایش پروژه در بخش نمونه‌کارهای آنلاین خود را با رعایت محرمانگی داده‌های خصوصی مشتری محفوظ می‌دارد.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0c2e36] flex items-center gap-2.5 pb-2 border-b border-slate-100">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#0a4852] flex items-center justify-center text-xs font-bold font-mono">
                ۰۴
              </span>
              گارانتی فنی و پشتیبانی رایگان
            </h2>
            <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed text-justify">
              تمامی وب‌سایت‌های طراحی‌شده توسط پلانکست مشمول ۶ ماه گارانتی فنی رایگان و بی‌قید و شرط جهت رفع هرگونه باگ احتمالی، خطای برنامه‌نویسی و پایداری عملکرد در هاست هستند. پس از اتمام دوره گارانتی، قرارداد پشتیبانی سالانه به درخواست کارفرما قابل تمدید است.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0c2e36] flex items-center gap-2.5 pb-2 border-b border-slate-100">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#0a4852] flex items-center justify-center text-xs font-bold font-mono">
                ۰۵
              </span>
              محتوا و تعهدات قانونی کارفرما
            </h2>
            <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed text-justify">
              مسئولیت صحت و قانونی بودن تمامی متون، تصاویر، محصولات و خدمات بارگذاری‌شده در وب‌سایت بر عهده کارفرما بوده و وب‌سایت نباید مغایر با قوانین تجارت الکترونیک و ضوابط جاری کشور فعالیت نماید.
            </p>
          </section>
        </div>

        {/* Contact Banner */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-right">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">سوالی درباره شرایط همکاری دارید؟</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              کارشناسان حقوقی و فنی پلانکست آماده پاسخگویی به ابهامات شما پیش از عقد قرارداد هستند.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenContact}
            className="px-6 py-2.5 rounded-full bg-[#0a4852] hover:bg-[#07363e] text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer shrink-0"
          >
            ارتباط با پشتیبانی
          </button>
        </div>
      </div>
    </div>
  );
};
