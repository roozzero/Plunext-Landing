import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, ChevronRight, CheckCircle2, Clock, EyeOff, KeyRound } from 'lucide-react';

interface PrivacyPageProps {
  onGoHome: () => void;
  onOpenContact: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onGoHome, onOpenContact }) => {
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
          <span className="text-slate-900 font-semibold">سیاست حفظ حریم خصوصی</span>
        </div>

        {/* Section Badge (Centered) */}
        <div className="w-full flex justify-center mb-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-[#0a4852] border border-emerald-200/60 text-xs font-semibold tracking-wide shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#439683]" />
            حفاظت از داده‌ها و امنیت سایبری
          </span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2227] tracking-tight leading-[1.3]">
            سیاست حفظ حریم خصوصی کاربران و مشتریان
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed text-justify">
            پلانکس متعهد به پاسداری همه‌جانبه از اطلاعات شخصی، تجاری و سورس‌های فنی مشتریان است. این منشور تشریح می‌کند که داده‌های شما چگونه جمع‌آوری، پردازش و حفاظت می‌گردند.
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
              چه اطلاعاتی را جمع‌آوری می‌کنیم؟
            </h2>
            <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed text-justify">
              هنگامی که فرم‌های ثبت سفارش، استعلام هزینه یا مشاوره آنلاین را تکمیل می‌نمایید، اطلاعاتی شامل نام، شماره تماس، ایمیل سازمانی و نیازمندی‌های پروژه شما به منظور ارتباط و تنظیم پیش‌فاکتور ثبت می‌گردد. هیچ‌گونه اطلاعات غیرضروری یا حساسی از کاربران درخواست نخواهد شد.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0c2e36] flex items-center gap-2.5 pb-2 border-b border-slate-100">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#0a4852] flex items-center justify-center text-xs font-bold font-mono">
                ۰۲
              </span>
              امنیت اطلاعات و پروتکل‌های رمزنگاری
            </h2>
            <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed text-justify">
              تمامی تبادلات داده‌ای در بستر پروتکل رمزنگاری پیشرفته SSL/TLS (۲۵۶ بیتی) صورت می‌پذیرد. پایگاه‌های داده ما با پیشرفته‌ترین فایروال‌ها محافظت شده و دسترسی به اطلاعات مشتریان منحصراً به اعضای مجاز تیم فنی پروژه محدود است.
            </p>
            <ul className="space-y-2 bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#439683] shrink-0 mt-0.5" />
                <span>رمزنگاری سراسری تمامی گذرواژه‌ها و کلیدهای API کارفرمایان</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#439683] shrink-0 mt-0.5" />
                <span>پشتیبان‌گیری رمزنگاری‌شده روزانه از داده‌ها و کدهای پروژه</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#439683] shrink-0 mt-0.5" />
                <span>عدم ذخیره‌سازی اطلاعات کارت‌های بانکی در سرورهای محلی</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0c2e36] flex items-center gap-2.5 pb-2 border-b border-slate-100">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#0a4852] flex items-center justify-center text-xs font-bold font-mono">
                ۰۳
              </span>
              تعهد عدم واگذاری یا فروش داده‌ها به اشخاص ثالث
            </h2>
            <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed text-justify">
              پلانکس تحت هیچ شرایطی اطلاعات هویتی، بانک اطلاعات مشتریان، استراتژی‌ها یا اطلاعات تماس شما را به هیچ شرکت بازاریابی، شخص ثالث یا موسسه‌ای واگذار نخواهد کرد و نخواهد فروخت. حفظ اعتماد شما بزرگ‌ترین سرمایه مجموعه ماست.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0c2e36] flex items-center gap-2.5 pb-2 border-b border-slate-100">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#0a4852] flex items-center justify-center text-xs font-bold font-mono">
                ۰۴
              </span>
              کوکی‌ها و فایل‌های ردگیری موقت
            </h2>
            <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed text-justify">
              وب‌سایت پلانکس صرفاً از کوکی‌های عملکردی جهت به خاطر سپردن ترجیحات کاربری و بهبود سرعت بارگذاری استفاده می‌نماید. شما در هر زمان می‌توانید از طریق تنظیمات مرورگر خود ذخیره این فایل‌ها را غیرفعال سازید.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0c2e36] flex items-center gap-2.5 pb-2 border-b border-slate-100">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#0a4852] flex items-center justify-center text-xs font-bold font-mono">
                ۰۵
              </span>
              حقوق کارفرما برای اصلاح یا حذف اطلاعات
            </h2>
            <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed text-justify">
              شما در هر زمان حق دارید نسبت به مشاهده، اصلاح یا حذف کامل سوابق هویتی خود در سامانه‌های ما اقدام فرمایید. برای این منظور کافیست درخواست خود را از طریق تیکت پشتیبانی یا ایمیل info@plunex.ir ارسال فرمایید.
            </p>
          </section>
        </div>

        {/* Contact Banner */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-right">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">سوالی پیرامون محرمانگی و حریم خصوصی دارید؟</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              تیم پشتیبانی و امنیت سایبری پلانکس آماده پاسخگویی به پرسش‌های شماست.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenContact}
            className="px-6 py-2.5 rounded-full bg-[#0a4852] hover:bg-[#07363e] text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer shrink-0"
          >
            تماس با بخش پشتیبانی
          </button>
        </div>
      </div>
    </div>
  );
};
