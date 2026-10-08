import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Menu, X, CheckCircle2, Sparkles, PhoneCall } from 'lucide-react';
import heroBg from './assets/imgs/Hero.png';
import logoImg from './assets/imgs/Logo.png';
import { InsightSection } from './components/InsightSection';
import { StatsCounterSection } from './components/StatsCounterSection';
import { ApproachSection } from './components/ApproachSection';
import { ClientLogosSection } from './components/ClientLogosSection';
import { PortfolioCasesSection } from './components/PortfolioCasesSection';
import { WhyPartnerSection } from './components/WhyPartnerSection';
import { LeadershipSection } from './components/LeadershipSection';
import { CtaBannerSection } from './components/CtaBannerSection';
import { FeaturedInsightsSection } from './components/FeaturedInsightsSection';
import { FaqSection } from './components/FaqSection';
import { ConnectBannerSection } from './components/ConnectBannerSection';
import { FooterSection } from './components/FooterSection';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [portfolioModalOpen, setPortfolioModalOpen] = useState(false);

  // Animated counter for the stat card
  const [statNumber, setStatNumber] = useState<number>(0);
  const [isCountingDone, setIsCountingDone] = useState<boolean>(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      const duration = 1400; // ms
      const startTime = performance.now();
      const targetVal = 2.2;

      const animateCount = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = parseFloat((targetVal * ease).toFixed(1));
        setStatNumber(current);

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setStatNumber(targetVal);
          setIsCountingDone(true);
        }
      };

      requestAnimationFrame(animateCount);
    }, 1100);

    return () => clearTimeout(startTimeout);
  }, []);

  const navItems = [
    { id: 'Home', label: 'صفحه اصلی' },
    { id: 'Portfolio', label: 'نمونه کارها' },
    { id: 'Blog', label: 'وبلاگ' },
    { id: 'About Us', label: 'درباره ما' },
    { id: 'Contact', label: 'ارتباط با ما' },
  ];

  const scrollToInsight = () => {
    const el = document.getElementById('insight-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (id: string) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    if (id === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'Portfolio') {
      const el = document.getElementById('portfolio-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        setPortfolioModalOpen(true);
      }
    } else if (id === 'Blog') {
      const el = document.getElementById('blog-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (id === 'About Us') {
      scrollToInsight();
    } else if (id === 'Contact') {
      setContactModalOpen(true);
    }
  };

  // Persian numbers helper
  const toPersianDigits = (num: string | number): string => {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num
      .toString()
      .replace(/[0-9]/g, (w) => farsiDigits[+w]);
  };

  return (
    <div
      dir="rtl"
      className="relative w-full min-h-screen overflow-x-hidden font-['Vazir',sans-serif] bg-[#071317] text-white select-none text-right"
    >
      {/* ======================================================== */}
      {/* HERO SECTION WITH UNZOOMED BACKGROUND IMAGE             */}
      {/* EXACTLY FROM assets/imgs/Hero.png                         */}
      {/* ======================================================== */}
      <section
        id="home"
        className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden"
      >
        {/* ======================================================== */}
        {/* HERO BACKGROUND IMAGE LAYER (z-0)                         */}
        {/* ======================================================== */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={heroBg}
            alt="نمای معماری ساختمان ورت"
            className="absolute inset-0 w-full h-full object-cover object-center select-none"
            onError={(e) => {
              console.warn('Hero background image failed to load', e);
            }}
          />

          {/* Semi-transparent overlays for dark cinematic look and high text readability (no opaque layer) */}
          <div className="absolute inset-0 bg-[#071317]/30" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#071317] via-[#071317]/60 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#071317]/70 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#071317]/40 to-transparent" />
        </div>

        {/* ======================================================== */}
        {/* HERO CONTENT CONTAINER (z-10+)                           */}
        {/* ======================================================== */}
        <div className="relative z-10 flex flex-col justify-between min-h-screen w-full">
          {/* ======================================================== */}
          {/* NAVIGATION BAR WITH CHOREOGRAPHED ENTRANCES (RTL)        */}
          {/* ======================================================== */}
          <header className="relative z-30 w-full px-6 sm:px-10 md:px-14 lg:px-16 pt-6 sm:pt-8 pb-4 flex items-center justify-between">
        {/* 1. Right in RTL: Logo */}
        <motion.div
          initial={{ rotate: 220, scale: 0.25, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center origin-center"
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              setActiveNav('Home');
            }}
            className="flex items-center gap-3 group transition-opacity hover:opacity-90 cursor-pointer"
          >
            <img
              src={logoImg}
              alt="لوگوی ورت"
              className="h-7 sm:h-8 md:h-9 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = document.getElementById('logo-text-fallback');
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div id="logo-text-fallback" className="hidden items-center gap-2">
              <div className="w-5 h-5 rounded bg-emerald-400/80 rotate-45 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-[#071317] rotate-45" />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">Vort</span>
            </div>
          </a>
        </motion.div>

        {/* 2. Center: Navigation Bar */}
        <motion.nav
          aria-label="منوی اصلی"
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex items-center bg-white/95 backdrop-blur-md p-1.5 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.28)] border border-white/40 overflow-hidden"
        >
          {navItems.map((item, index) => {
            const isActive = activeNav === item.id;
            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                initial={{ x: -25, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.65 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`text-[13px] lg:text-[14px] font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#0d3b43] text-white px-5 py-1.5 rounded-full shadow-[0_2px_8px_rgba(13,59,67,0.4)]'
                    : 'text-[#334155] hover:text-[#0f172a] px-4 py-1.5 rounded-full hover:bg-slate-100/60'
                }`}
              >
                {item.label}
              </motion.button>
            );
          })}
        </motion.nav>

        {/* 3. Left in RTL: CTA Button */}
        <div className="flex items-center gap-3">
          <motion.button
            type="button"
            onClick={() => setContactModalOpen(true)}
            initial={{ x: 70, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:flex items-center gap-2.5 bg-[#0c333a]/80 hover:bg-[#0c333a] border border-[#1d5c67]/60 text-white text-[13px] sm:text-[14px] font-medium px-5 py-2.5 rounded-full backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.25)] transition-all duration-200 group cursor-pointer overflow-hidden"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <motion.span
              initial={{ x: 16, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.05, ease: 'easeOut' }}
            >
              پشتیبانی آنلاین
            </motion.span>
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.85, ease: [0.34, 1.56, 0.64, 1] }}
              className="group-hover:-translate-x-0.5 transition-transform"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </motion.span>
          </motion.button>

          {/* Mobile Menu Hamburger */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-black/40 text-white border border-white/20 hover:bg-black/60 transition-colors"
            aria-label="تغییر وضعیت منو"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-40 bg-[#0a2328]/95 backdrop-blur-xl border border-white/15 p-5 rounded-3xl shadow-2xl space-y-3 text-right">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`text-right px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                  activeNav === item.id
                    ? 'bg-[#0e4852] text-white'
                    : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setContactModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 bg-white text-[#0a2328] font-semibold py-3 rounded-2xl text-sm shadow-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>پشتیبانی آنلاین</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* HERO MAIN CONTENT SECTION (RTL)                          */}
      {/* ======================================================== */}
      <main className="relative z-20 min-h-[calc(100vh-100px)] flex flex-col justify-end px-6 sm:px-10 md:px-14 lg:px-16 pt-4 pb-4 sm:pb-6 text-right">
        {/* Main Content Grid positioned close to bottom */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-auto mb-1">
          {/* Right Column in RTL: Heading + Paragraph + Action Buttons */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-5 mb-1 text-right">
            {/* 4. Main Headline: Appears from bottom to top */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="text-[40px] sm:text-[48px] lg:text-[54px] font-bold text-white tracking-tight leading-[1.2] max-w-3xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]"
            >
              خلق ارزش پایدار<br />
              در بازارهای پویا و پرنوسان
            </motion.h1>

            {/* Subtitle / Paragraph */}
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="text-[14px] sm:text-[15px] text-slate-200/90 font-normal leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] text-right"
            >
              ما با بینش عمیق، انضباط مالی و باوری پایدار سرمایه‌گذاری می‌کنیم — مشارکت با رهبران برجسته برای خلق اثری ماندگار در صنایع رو به تحول.
            </motion.p>

            {/* 5. Hero Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-[15px]">
              {/* White Pill Button: Contact */}
              <motion.button
                type="button"
                onClick={() => setContactModalOpen(true)}
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white hover:bg-slate-100 text-slate-950 font-bold px-6 sm:px-7 py-2.5 sm:py-3 rounded-full flex items-center gap-2 shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-[14px] group overflow-hidden"
              >
                <motion.span
                  initial={{ x: 14, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.45, delay: 1.45, ease: 'easeOut' }}
                >
                  ارتباط با ما
                </motion.span>
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.25, ease: [0.34, 1.56, 0.64, 1] }}
                  className="text-base font-normal group-hover:-translate-x-0.5 transition-transform"
                >
                  ←
                </motion.span>
              </motion.button>

              {/* Dark Translucent Glass Pill: Portfolio */}
              <motion.button
                type="button"
                onClick={() => setPortfolioModalOpen(true)}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#0b242a]/60 hover:bg-[#0b242a]/85 border border-white/20 text-white font-medium px-6 sm:px-7 py-2.5 sm:py-3 rounded-full backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-[14px] shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  مشاهده پورتفولیو
                </motion.span>
              </motion.button>
            </div>
          </div>

          {/* 6. Left Column in RTL: Stat Card */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-start justify-end">
            <motion.div
              initial={{ y: -70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/[0.06] hover:bg-white/[0.09] border border-white/15 backdrop-blur-xl rounded-2xl p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.35)] min-w-[240px] sm:min-w-[270px] transition-all duration-300 text-right"
            >
              {/* Animated Incrementing Counter */}
              <div className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                <span>{toPersianDigits(statNumber.toFixed(1))}</span>
                <span className="text-emerald-400 mr-1">B$</span>
                {isCountingDone ? <span className="text-emerald-400">+</span> : ''}
              </div>
              <p className="text-xs sm:text-sm text-slate-200/80 mt-2 font-normal leading-snug text-right">
                سرمایه‌گذاری در بازارهای خصوصی و راهبردی
              </p>
            </motion.div>
          </div>
        </div>

        {/* 7. Bottom spacing */}
        <div className="w-full pb-1" />
      </main>
      </div>
    </section>

      {/* ======================================================== */}
      {/* INSIGHT & GROWTH SECTION                                 */}
      {/* ======================================================== */}
      <InsightSection />

      {/* ======================================================== */}
      {/* STATS COUNTER SECTION                                    */}
      {/* ======================================================== */}
      <StatsCounterSection />

      {/* ======================================================== */}
      {/* APPROACH SECTION                                         */}
      {/* ======================================================== */}
      <ApproachSection />

      {/* ======================================================== */}
      {/* CLIENT LOGOS SECTION                                     */}
      {/* ======================================================== */}
      <ClientLogosSection />

      {/* ======================================================== */}
      {/* PORTFOLIO CASES SECTION                                  */}
      {/* ======================================================== */}
      <PortfolioCasesSection />

      {/* ======================================================== */}
      {/* WHY PARTNER WITH US SECTION                              */}
      {/* ======================================================== */}
      <WhyPartnerSection onOpenContact={() => setContactModalOpen(true)} />

      {/* ======================================================== */}
      {/* LEADERSHIP SECTION                                       */}
      {/* ======================================================== */}
      <LeadershipSection />

      {/* ======================================================== */}
      {/* CTA BANNER SECTION                                       */}
      {/* ======================================================== */}
      <CtaBannerSection onOpenContact={() => setOrderModalOpen(true)} />

      {/* ======================================================== */}
      {/* FEATURED INSIGHTS SECTION                                */}
      {/* ======================================================== */}
      <FeaturedInsightsSection />

      {/* ======================================================== */}
      {/* FAQ SECTION                                              */}
      {/* ======================================================== */}
      <FaqSection onAskQuestion={() => setContactModalOpen(true)} />

      {/* ======================================================== */}
      {/* CONNECT WITH US BANNER                                   */}
      {/* ======================================================== */}
      <ConnectBannerSection onOpenContact={() => setContactModalOpen(true)} />

      {/* ======================================================== */}
      {/* FOOTER SECTION                                           */}
      {/* ======================================================== */}
      <FooterSection
        onOpenContact={() => setContactModalOpen(true)}
        onNavigate={(id) => handleNavClick(id)}
      />

      {/* Floating Back-To-Top Button */}
      <BackToTop />

      {/* ======================================================== */}
      {/* CONTACT MODAL (RTL & PERSIAN)                            */}
      {/* ======================================================== */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md" dir="rtl">
          <div className="relative w-full max-w-lg bg-[#0a1e23] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 text-right">
            <button
              type="button"
              onClick={() => {
                setContactModalOpen(false);
                setContactSubmitted(false);
              }}
              className="absolute top-5 left-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {contactSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-400/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-white">پیام شما با موفقیت ثبت شد</h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                  از تماس شما با مجموعه ورت سپاسگزاریم. یکی از اعضای کمیته سرمایه‌گذاری در اسرع وقت پیام شما را بررسی و پاسخ خواهد داد.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setContactModalOpen(false);
                    setContactSubmitted(false);
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-white text-slate-950 font-medium text-sm hover:bg-slate-100 transition-colors"
                >
                  بستن
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSubmitted(true);
                }}
                className="space-y-5"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      پشتیبانی آنلاین فعال — پاسخگویی سریع
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">پشتیبانی آنلاین و ارتباط با کارشناسان</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    تیم پشتیبانی و کارشناسان سرمایه‌گذاری ورت هم‌اکنون آنلاین و آماده پاسخ به شما هستند.
                  </p>
                </div>

                <div className="space-y-4 text-right">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">نام و نام خانوادگی</label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: علی احمدی"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors text-right"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">ایمیل سازمانی</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors dir-ltr text-left"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">موضوع گفتگو</label>
                    <select className="w-full px-4 py-2.5 rounded-xl bg-[#07171c] border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors cursor-pointer text-right">
                      <option>مشارکت در جذب سرمایه</option>
                      <option>واگذاری یا توسعه کسب‌وکار</option>
                      <option>بررسی پورتفولیو و فرصت‌ها</option>
                      <option>همکاری‌های راهبردی سازمانی</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">متن پیام یا خلاصه معرفی کسب‌وکار</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="خلاصه‌ای از چشم‌انداز یا هدف همکاری خود را بنویسید..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors resize-none text-right"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>ارسال درخواست همکاری</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* PORTFOLIO & INVESTMENT CRITERIA MODAL                    */}
      {/* ======================================================== */}
      {portfolioModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md" dir="rtl">
          <div className="relative w-full max-w-3xl bg-[#091b20] border border-white/15 rounded-3xl p-6 sm:p-9 shadow-2xl text-slate-200 max-h-[90vh] overflow-y-auto text-right">
            <button
              type="button"
              onClick={() => setPortfolioModalOpen(false)}
              className="absolute top-5 left-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  استراتژی بازارهای خصوصی
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  پورتفولیو و معیارهای سرمایه‌گذاری ورت
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed text-right">
                  ما سرمایه‌ای صبورانه، منضبط و هوشمند را به کسب‌وکارهای پیشرو در بازارهای تخصصی تخصیص می‌دهیم تا در تمامی چرخه‌های اقتصادی رشدی استثنایی رقم بزنند.
                </p>
              </div>

              {/* Investment Criteria Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-right">
                {[
                  { title: 'تاب‌آوری بنیادین', desc: 'کسب‌وکارهایی با کارکرد حیاتی در صنعت و مزیت‌های رقابتی ماندگار و دفاع‌پذیر.' },
                  { title: 'مدیریت آینده‌نگر', desc: 'تیم‌های مدیریتی با وضوح استراتژیک، یکپارچگی بالا و سابقه تخصیص بهینه سرمایه.' },
                  { title: 'ارزش‌آفرینی مرکب', desc: 'جریان‌های نقدی قابل‌پیش‌بینی، قدرت قیمت‌گذاری پایدار و اقتصاد واحد مقیاس‌پذیر.' },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5 text-right">
                    <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Sample Portfolio Highlights */}
              <div className="text-right">
                <h4 className="text-sm font-semibold text-slate-400 mb-3">
                  گزیده‌ای از دارایی‌های پورتفولیو
                </h4>
                <div className="space-y-3">
                  {[
                    { name: 'Apex Infrastructure Group', sector: 'سامانه‌های انرژی دیجیتال و شبکه برق هوشمند', metric: 'ارزش کل ۶۴۰M$' },
                    { name: 'Synthetix Core Bio', sector: 'تولید پیشرفته بیولوژیک و دارویی', metric: 'سرمایه‌گذاری رشد ۴۱۰M$' },
                    { name: 'Celestia Autonomous Supply', sector: 'لجستیک تله‌متری و اتوماسیون صنعتی', metric: 'خرید پلتفرم ۷۸۰M$' },
                  ].map((hold, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white/[0.04] transition-colors text-right"
                    >
                      <div>
                        <div className="text-base font-semibold text-white">{hold.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{hold.sector}</div>
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-emerald-400">
                        {hold.metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* CONSULTATION & ORDER REGISTRATION MODAL                  */}
      {/* ======================================================== */}
      {orderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md" dir="rtl">
          <div className="relative w-full max-w-lg bg-[#0a1e23] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 text-right max-h-[92vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => {
                setOrderModalOpen(false);
                setOrderSubmitted(false);
              }}
              className="absolute top-5 left-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {orderSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-400/30">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-white">سفارش و درخواست مشاوره شما ثبت شد</h3>
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                  کد رهگیری: VRT-{Math.floor(10000 + Math.random() * 90000)}
                </div>
                <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                  اطلاعات شما با موفقیت در سامانه اختصاصی ورت ثبت گردید. کارشناسان ارشد سرمایه‌گذاری ظرف کمتر از ۲ ساعت کاری جهت هماهنگی جلسه با شما تماس خواهند گرفت.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setOrderModalOpen(false);
                    setOrderSubmitted(false);
                  }}
                  className="mt-4 px-7 py-2.5 rounded-full bg-white text-slate-950 font-bold text-sm hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  بستن و بازگشت به سایت
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setOrderSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-medium flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      مشاوره تخصصی و ثبت سفارش رسمی
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">مشاوره و ثبت سفارش</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    برای دریافت مشاوره اختصاصی، بررسی فرصت سرمایه‌گذاری یا شروع سفارش پروژه، فرم زیر را تکمیل نمایید.
                  </p>
                </div>

                <div className="space-y-3.5 text-right">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">نام و نام خانوادگی <span className="text-emerald-400">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: رضا صادقی"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors text-right"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">شماره تماس مستقیم <span className="text-emerald-400">*</span></label>
                      <input
                        type="tel"
                        required
                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors text-right dir-ltr"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">نام شرکت / برند</label>
                      <input
                        type="text"
                        placeholder="نام مجموعه شما"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">نوع خدمت یا سفارش مورد تقاضا <span className="text-emerald-400">*</span></label>
                    <select className="w-full px-4 py-2.5 rounded-xl bg-[#07171c] border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors cursor-pointer text-right">
                      <option>جذب سرمایه و تأمین مالی هوشمند</option>
                      <option>مشاوره استراتژیک، توسعه بازار و مقیاس‌پذیری</option>
                      <option>بازطراحی زنجیره ارزش، فناوری و صادرات</option>
                      <option>ادغام و تملک یا شراکت راهبردی (M&A)</option>
                      <option>سایر خدمات و برنامه‌های اختصاصی</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">حجم تخمینی پروژه یا بودجه مدنظر</label>
                    <select className="w-full px-4 py-2.5 rounded-xl bg-[#07171c] border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors cursor-pointer text-right">
                      <option>کمتر از ۱ میلیارد تومان</option>
                      <option>۱ الی ۵ میلیارد تومان</option>
                      <option>۵ الی ۲۰ میلیارد تومان</option>
                      <option>بیش از ۲۰ میلیارد تومان</option>
                      <option>نیازمند ارزیابی و برآورد اولیه کارشناس</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">توضیحات و شرح نیاز پروژه</label>
                    <textarea
                      rows={3}
                      placeholder="چکیده‌ای از وضعیت کنونی کسب‌وکار، اهداف مدنظر یا نیازمندی‌های خود را یادداشت نمایید..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors resize-none text-right"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm transition-all shadow-lg hover:shadow-emerald-400/20 cursor-pointer flex items-center justify-center gap-2 mt-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>ثبت سفارش و هماهنگی جلسه مشاوره</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
