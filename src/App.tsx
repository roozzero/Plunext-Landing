import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Menu, X, CheckCircle2, Sparkles, PhoneCall, Star, Quote, MessageSquareQuote } from 'lucide-react';
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
import { BlogListPage } from './components/BlogListPage';
import { BlogDetailPage } from './components/BlogDetailPage';
import { TermsPage } from './components/TermsPage';
import { PrivacyPage } from './components/PrivacyPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog' | 'article' | 'terms' | 'privacy'>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string>('why-every-business-needs-a-website');
  const [activeNav, setActiveNav] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [reviewRating, setReviewRating] = useState(5);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    role: '',
    company: '',
    category: 'طراحی وب‌سایت و پورتال سازمانی',
    duration: 'همکاری ۲ ساله',
    quote: '',
  });
  const [portfolioModalOpen, setPortfolioModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleWindowScroll, { passive: true });
    handleWindowScroll();
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

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
    { id: 'Approach', label: 'رویکرد ما', targetId: 'insight-section' },
    { id: 'Expertise', label: 'تخصص ها', targetId: 'approach-section' },
    { id: 'Clients', label: 'مشتریان', targetId: 'clients-section' },
    { id: 'Portfolio', label: 'نمونه کار ها', targetId: 'portfolio-section' },
    { id: 'Testimonials', label: 'نظرات', targetId: 'testimonials-section' },
    { id: 'Blog', label: 'وبلاگ', targetId: 'blog' },
    { id: 'About Us', label: 'درباره ما', targetId: 'leadership-section' },
    { id: 'Contact', label: 'ارتباط با ما', targetId: 'contact-section' },
  ];

  const scrollToTarget = (targetId: string) => {
    const doScroll = () => {
      const el = document.getElementById(targetId);
      if (el) {
        const headerOffset = 85;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth',
        });
      }
    };

    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(doScroll, 180);
    } else {
      doScroll();
    }
  };

  const handleNavClick = (id: string) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    if (id === 'Home') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'Approach') {
      // رویکرد ما = بخش رویکرد و فلسفه پلانکست
      scrollToTarget('insight-section');
    } else if (id === 'Expertise') {
      // تخصص ها = تخصص‌ها و راهکارهای طراحی سایت
      scrollToTarget('approach-section');
    } else if (id === 'Clients') {
      // مشتریان = بخش برندهای همکار و مشتریان
      scrollToTarget('clients-section');
    } else if (id === 'Portfolio') {
      // نمونه کار ها
      scrollToTarget('portfolio-section');
    } else if (id === 'Testimonials') {
      // نظرات
      scrollToTarget('testimonials-section');
    } else if (id === 'Blog') {
      // وبلاگ
      setCurrentPage('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'About Us') {
      // درباره ما
      scrollToTarget('leadership-section');
    } else if (id === 'Contact') {
      // ارتباط با ما
      scrollToTarget('contact-section');
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
      className="relative w-full min-h-screen overflow-x-clip font-['Vazir',sans-serif] bg-[#071317] text-white select-text text-right"
    >
      {/* ======================================================== */}
      {/* FLOATING NAVIGATION BAR WITH SCROLL ACCOMPANIMENT (RTL)  */}
      {/* Placed at root level with highest z-index (z-[999]) so it*/}
      {/* stays above all sections, charts, canvas, and cards       */}
      {/* ======================================================== */}
      <header
        className={`fixed top-0 inset-x-0 z-[999] transition-all duration-300 w-full px-6 sm:px-10 md:px-14 lg:px-16 flex items-center justify-between ${
          isScrolled
            ? 'py-3.5 bg-[#061418]/92 backdrop-blur-2xl border-b border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.55)]'
            : 'pt-6 sm:pt-8 pb-4 bg-transparent'
        }`}
      >
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
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group transition-opacity hover:opacity-90 cursor-pointer"
          >
            <img
              src={logoImg}
              alt="لوگوی پلانکست"
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
          className="hidden md:flex items-center bg-white/95 backdrop-blur-md p-1 lg:p-1.5 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.28)] border border-white/40 overflow-hidden"
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
                  delay: 0.65 + index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`text-[12px] lg:text-[13.5px] font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#0d3b43] text-white px-3.5 lg:px-4 py-1.5 rounded-full shadow-[0_2px_8px_rgba(13,59,67,0.4)]'
                    : 'text-[#334155] hover:text-[#0f172a] px-2.5 lg:px-3 py-1.5 rounded-full hover:bg-slate-100/60'
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

      {/* Mobile Drawer Navigation (with z-[1000] above everything) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-[1000] bg-[#0a2328]/95 backdrop-blur-xl border border-white/15 p-5 rounded-3xl shadow-2xl space-y-3 text-right">
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

      {currentPage === 'home' && (
        <>
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
                alt="توسعه و برنامه نویسی"
                className="absolute inset-0 w-full h-full object-cover object-center select-text"
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
          {/* HERO MAIN CONTENT SECTION (RTL)                          */}
          {/* ======================================================== */}
          <main className="relative z-20 min-h-[calc(100vh-100px)] flex flex-col justify-end px-6 sm:px-10 md:px-14 lg:px-16 pt-24 sm:pt-28 pb-4 sm:pb-6 text-right">
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
                  انتخابی حرفه‌ای<br />
                  برای ساختن برندی متمایز
                </motion.h1>

                {/* Subtitle / Paragraph */}
                <motion.p
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[14px] sm:text-[15px] text-slate-200/90 font-normal leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] text-right"
                >
                 در پلانکست، وب‌سایت‌هایی طراحی و توسعه می‌دهیم که ترکیبی از استراتژی، طراحی و تکنولوژی‌اند؛ از اولین ایده تا تجربه‌ای سریع، زیبا و هدفمند که برای رشد برند شما ساخته شده است.
                </motion.p>

                {/* 5. Hero Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-1 text-[15px]">
                  {/* White Pill Button: Start Project -> Opens Order Modal */}
                  <motion.button
                    type="button"
                    onClick={() => setOrderModalOpen(true)}
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
                      پروژه‌تان را شروع کنید
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

                  {/* Dark Translucent Glass Pill: See Projects -> Scrolls to Portfolio Section */}
                  <motion.button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById('portfolio-section');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
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
                      پروژه‌های ما را ببینید
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
                    <span>{toPersianDigits(27)}</span>
                    {/* <span className="text-emerald-400 mr-1">B$</span> */}
                    {isCountingDone ? <span className="text-emerald-400">+</span> : ''}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200/80 mt-2 font-normal leading-snug text-right">
                    برندی که با پلانکست همکاری داشته‌اند
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
          <ApproachSection onOpenOrder={() => setOrderModalOpen(true)} />

          {/* ======================================================== */}
          {/* CLIENT LOGOS SECTION                                     */}
          {/* ======================================================== */}
          <ClientLogosSection />

          {/* ======================================================== */}
          {/* PORTFOLIO CASES SECTION                                  */}
          {/* ======================================================== */}
          <PortfolioCasesSection onOpenOrder={() => setOrderModalOpen(true)} />

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
          <FeaturedInsightsSection
            onOpenBlog={() => {
              setCurrentPage('blog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectArticle={(articleId) => {
              setSelectedArticleId(articleId);
              setCurrentPage('article');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          {/* ======================================================== */}
          {/* FAQ SECTION                                              */}
          {/* ======================================================== */}
          <FaqSection onAskQuestion={() => setContactModalOpen(true)} />

          {/* ======================================================== */}
          {/* CONNECT WITH US BANNER                                   */}
          {/* ======================================================== */}
          <ConnectBannerSection
            onOpenContact={() => setContactModalOpen(true)}
            onOpenReview={() => setReviewModalOpen(true)}
          />
        </>
      )}

      {currentPage === 'blog' && (
        <BlogListPage
          onSelectArticle={(articleId) => {
            setSelectedArticleId(articleId);
            setCurrentPage('article');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onGoHome={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenOrder={() => setOrderModalOpen(true)}
        />
      )}

      {currentPage === 'article' && (
        <BlogDetailPage
          articleId={selectedArticleId}
          onGoBackToBlog={() => {
            setCurrentPage('blog');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onGoHome={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSelectArticle={(articleId) => {
            setSelectedArticleId(articleId);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenOrder={() => setOrderModalOpen(true)}
        />
      )}

      {currentPage === 'terms' && (
        <TermsPage
          onGoHome={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenContact={() => setContactModalOpen(true)}
        />
      )}

      {currentPage === 'privacy' && (
        <PrivacyPage
          onGoHome={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenContact={() => setContactModalOpen(true)}
        />
      )}

      {/* ======================================================== */}
      {/* FOOTER SECTION                                           */}
      {/* ======================================================== */}
      <FooterSection
        onOpenContact={() => setContactModalOpen(true)}
        onNavigate={(id) => handleNavClick(id)}
        onOpenTerms={() => {
          setCurrentPage('terms');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPrivacy={() => {
          setCurrentPage('privacy');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Floating Back-To-Top Button */}
      <BackToTop />

      {/* ======================================================== */}
      {/* ONLINE SUPPORT MODAL (LIGHT THEME, WIDER, PHONE NUMBER, NO SCROLL) */}
      {/* z-[1050] to always sit on top of floating navbar (z-[999])*/}
      {/* ======================================================== */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-[1050] flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-md select-text" dir="rtl">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-[28px] p-6 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.2)] text-slate-800 text-right">
            <button
              type="button"
              onClick={() => {
                setContactModalOpen(false);
                setContactSubmitted(false);
              }}
              className="absolute top-5 left-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="بستن پنجره"
            >
              <X className="w-5 h-5" />
            </button>

            {contactSubmitted ? (
              <div className="py-7 text-center space-y-3.5">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">درخواست شما در پشتیبانی آنلاین ثبت شد</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  از ارتباط شما با پشتیبانی آنلاین ورت متشکریم. کارشناسان ما به زودی از طریق شماره تلفن و ایمیل ثبت‌شده با شما ارتباط برقرار خواهند کرد.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setContactModalOpen(false);
                    setContactSubmitted(false);
                  }}
                  className="mt-3 px-6 py-2.5 rounded-full bg-[#0a4852] text-white font-semibold text-xs sm:text-sm hover:bg-[#07363e] transition-colors cursor-pointer"
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
                className="space-y-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-[11px] font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      پشتیبانی آنلاین فعال — پاسخگویی سریع
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    پشتیبانی آنلاین و ارتباط مستقیم با کارشناسان
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    پرسش یا درخواست خود را مطرح نمایید؛ کارشناسان پشتیبانی و سرمایه‌گذاری ورت آماده پاسخگویی هستند.
                  </p>
                </div>

                <div className="space-y-3 text-right">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">نام و نام خانوادگی <span className="text-emerald-600">*</span></label>
                      <input
                        type="text"
                        required
                        placeholder="مثال: علی احمدی"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-right"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">شماره تلفن تماس <span className="text-emerald-600">*</span></label>
                      <input
                        type="tel"
                        required
                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-right dir-ltr"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">ایمیل سازمانی</label>
                      <input
                        type="email"
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-left dir-ltr"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">موضوع گفتگو</label>
                      <select className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all cursor-pointer text-right">
                        <option>مشاوره فنی طراحی سایت و نرم‌افزار</option>
                        <option>مشارکت در جذب سرمایه و پورتفولیو</option>
                        <option>توسعه و بازآفرینی محصول دیجیتال</option>
                        <option>پشتیبانی و پیگیری قراردادهای فعال</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">متن پیام یا پرسش شما <span className="text-emerald-600">*</span></label>
                    <textarea
                      rows={2}
                      required
                      placeholder="پرسش، ایده یا جزئیات درخواست خود را بنویسید..."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all resize-none text-right"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-[#0a4852] hover:bg-[#07363e] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>ثبت و اتصال به پشتیبانی آنلاین</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* PORTFOLIO & INVESTMENT CRITERIA MODAL                    */}
      {/* z-[1050] so it stays above floating navbar (z-[999])    */}
      {/* ======================================================== */}
      {portfolioModalOpen && (
        <div className="fixed inset-0 z-[1050] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md" dir="rtl">
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
      {/* CONSULTATION & ORDER REGISTRATION MODAL (LIGHT THEME, WIDE, COMPREHENSIVE WEB & SOFTWARE ORDER) */}
      {/* z-[1050] so it stays above floating navbar (z-[999])    */}
      {/* ======================================================== */}
      {orderModalOpen && (
        <div className="fixed inset-0 z-[1050] flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md select-text" dir="rtl">
          <div className="relative w-full max-w-4xl bg-white border border-slate-200/90 rounded-[28px] sm:rounded-[34px] p-6 sm:p-9 shadow-[0_25px_70px_rgba(0,0,0,0.35)] text-slate-900 text-right max-h-[92vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => {
                setOrderModalOpen(false);
                setOrderSubmitted(false);
              }}
              className="absolute top-5 left-5 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
              aria-label="بستن پنجره"
            >
              <X className="w-5 h-5" />
            </button>

            {orderSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-200">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">سفارش پروژه شما با موفقیت ثبت شد</h3>
                <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold">
                  کد پیگیری رسمی: VRT-PRJ-{Math.floor(10000 + Math.random() * 90000)}
                </div>
                <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                  مشخصات فنی و نیازمندی‌های پروژه شما دریافت گردید. تیم فنی و مهندسی ورت پروپوزال و برآورد زمان‌بندی را آماده کرده و ظرف حداکثر ۲ ساعت کاری جهت هماهنگی جلسه مشاوره آنلاین یا حضوری با شما تماس خواهند گرفت.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setOrderModalOpen(false);
                    setOrderSubmitted(false);
                  }}
                  className="mt-4 px-8 py-3 rounded-full bg-[#0a4852] text-white font-bold text-sm hover:bg-[#07363e] transition-colors cursor-pointer"
                >
                  بستن و بازگشت به صفحه
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setOrderSubmitted(true);
                }}
                className="space-y-6"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      فرم جامع سفارش پروژه‌های طراحی سایت، اپلیکیشن و نرم‌افزار سازمانی
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    مشاوره تخصصی و ثبت سفارش پروژه
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    لطفاً اطلاعات و نیازمندی‌های پروژه خود را جهت برآورد دقیق فنی، هزینه‌ای و تدوین پروپوزال رسمی تکمیل فرمایید.
                  </p>
                </div>

                <div className="space-y-5 text-right">
                  {/* بخش ۱: اطلاعات متقاضی */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>۱. مشخصات ارتباطی متقاضی / کارفرما</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">نام و نام خانوادگی <span className="text-rose-500">*</span></label>
                        <input
                          type="text"
                          required
                          placeholder="مثال: رضا صادقی"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-colors text-right"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">شماره تماس مستقیم <span className="text-rose-500">*</span></label>
                        <input
                          type="tel"
                          required
                          placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-colors text-right dir-ltr"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">نام سازمان / شرکت / استارتاپ</label>
                        <input
                          type="text"
                          placeholder="نام برند شما"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-colors text-right"
                        />
                      </div>
                    </div>
                  </div>

                  {/* بخش ۲: مشخصات فنی و نوع پروژه */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-500" />
                      <span>۲. نوع پروژه و مشخصات نرم‌افزاری</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">دسته‌بندی اصلی پروژه <span className="text-rose-500">*</span></label>
                        <select className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer text-right">
                          <option>طراحی وب‌سایت شرکتی و پورتال سازمانی</option>
                          <option>فروشگاه آنلاین و مارکت‌پلیس پیشرفته</option>
                          <option>نرم‌افزار تحت وب اختصاصی (SaaS / Web App)</option>
                          <option>اپلیکیشن موبایل (iOS و Android)</option>
                          <option>اتوماسیون اداری و CRM اختصاصی</option>
                          <option>بازطراحی کامل (Redesign) و ارتقای UI/UX</option>
                          <option>یکپارچه‌سازی با هوش مصنوعی و ربات‌های خودکار</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">سکوی اجرایی مدنظر</label>
                        <select className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer text-right">
                          <option>وب رسپانسیو مدرن (React / Next.js)</option>
                          <option>وب همراه با اپلیکیشن موبایل یکپارچه</option>
                          <option>PWA (وب‌اپلیکیشن پیش‌رونده قابل نصب)</option>
                          <option>سامانه ابری متمرکز چندشعبه‌ای</option>
                          <option>نیاز به مشاوره فنی برای انتخاب استک</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">بازه زمانی مورد انتظار تحویل</label>
                        <select className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer text-right">
                          <option>فوری (کمتر از ۱ ماه - MVP سریع)</option>
                          <option>معمولی (۱ الی ۳ ماه)</option>
                          <option>طرح توسعه‌ای جامع (۳ الی ۶ ماه)</option>
                          <option>پشتیبانی و توسعه مستمر بلندمدت</option>
                        </select>
                      </div>
                    </div>

                    {/* امکانات و ماژول‌های تکمیلی مورد نیاز */}
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">امکانات و نیازمندی‌های کلیدی پروژه (چند موردی):</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-700">
                        {[
                          'درگاه پرداخت آنلاین شتابی',
                          'احراز هویت پیامکی / دو مرحله‌ای',
                          'پنل مدیریت اختصاصی و گزارشات',
                          'چندزبانه بودن (انگلیسی / عربی)',
                          'سئو و بهینه‌سازی موتورهای جستجو',
                          'یکپارچگی با سپیدار / حسابداری',
                          'چت آنلاین و سیستم تیکتینگ',
                          'اتصال به هوش مصنوعی گفتگوگر',
                        ].map((feature, fIdx) => (
                          <label key={fIdx} className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200/80 hover:border-emerald-400 cursor-pointer transition-colors">
                            <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                            <span className="text-[11.5px]">{feature}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* بخش ۳: بودجه و شرح جزئیات */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-500" />
                      <span>۳. برآورد بودجه و توضیحات تکمیلی</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">بازه بودجه مدنظر کارفرما</label>
                        <select className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer text-right">
                          <option>۲۰ الی ۵۰ میلیون تومان (پروژه پایه)</option>
                          <option>۵۰ الی ۱۲۰ میلیون تومان (سایت حرفه‌ای و پورتال)</option>
                          <option>۱۲۰ الی ۳۰۰ میلیون تومان (پلتفرم و وب‌اپلیکیشن اختصاصی)</option>
                          <option>بیش از ۳۰۰ میلیون تومان (سامانه سازمانی در مقیاس بالا)</option>
                          <option>نیاز به برآورد و کارشناسی دقیق قیمت پس از جلسه</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">آدرس سایت یا نمونه رفرنس مشابه (در صورت وجود)</label>
                        <input
                          type="text"
                          placeholder="https://example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-colors text-left dir-ltr"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">شرح کامل نیازمندی‌ها، سناریوهای کاربری یا ایده‌های پروژه</label>
                      <textarea
                        rows={3}
                        placeholder="در مورد مخاطبان هدف، قابلیت‌های مدنظر، اهداف بازاریابی و هر نکته مهمی که مایلید تیم فنی در نظر بگیرد بنویسید..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none text-right"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setOrderModalOpen(false)}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    انصراف
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0a4852] hover:bg-[#07363e] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>ثبت نهایی سفارش و ارسال به کارشناس پروژه</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TESTIMONIAL / USER REVIEW MODAL (LIGHT THEME, MATCHES TESTIMONIAL CARDS) */}
      {/* z-[1050] to always sit on top of floating navbar (z-[999])*/}
      {/* ======================================================== */}
      {reviewModalOpen && (
        <div className="fixed inset-0 z-[1050] flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md select-text" dir="rtl">
          <div className="relative w-full max-w-3xl bg-white border border-slate-200/90 rounded-[28px] sm:rounded-[36px] p-6 sm:p-9 shadow-[0_25px_70px_rgba(0,0,0,0.35)] text-slate-900 text-right max-h-[92vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => {
                setReviewModalOpen(false);
                setReviewSubmitted(false);
              }}
              className="absolute top-5 left-5 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
              aria-label="بستن پنجره"
            >
              <X className="w-5 h-5" />
            </button>

            {reviewSubmitted ? (
              <div className="py-8 text-center space-y-5">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-200">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    نظر و دیدگاه ارزشمند شما با موفقیت ثبت شد
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                    از همراهی شما سپاسگزاریم. دیدگاه شما با موفقیت دریافت گردید و پس از تأیید تیم روابط عمومی، در بخش تجربیات شرکای تجاری ورت قرار خواهد گرفت.
                  </p>
                </div>

                {/* Preview of the review styled exactly like WhyPartnerSection testimonial cards */}
                <div className="max-w-lg mx-auto p-5 sm:p-6 rounded-[24px] bg-slate-50 border border-slate-200 text-right shadow-sm relative overflow-hidden">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                        {reviewForm.name ? reviewForm.name.slice(0, 2) : 'شما'}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{reviewForm.name || 'کاربر گرامی'}</h4>
                        <p className="text-xs text-slate-500 font-medium">
                          {reviewForm.role || 'مدیر'} • {reviewForm.company || 'شرکت همکار'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`w-3.5 h-3.5 ${
                            s <= reviewRating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                      {reviewForm.category}
                    </span>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-200/70 text-slate-700 font-medium">
                      {reviewForm.duration}
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed italic bg-white p-3 rounded-xl border border-slate-200/80">
                    "{reviewForm.quote || 'همکاری بسیار عالی، حرفه‌ای و ارزش‌آفرین با تیم ورت.'}"
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setReviewModalOpen(false);
                    setReviewSubmitted(false);
                  }}
                  className="px-8 py-3 rounded-full bg-[#0a4852] hover:bg-[#07363e] text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
                >
                  بستن و بازگشت به سایت
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setReviewSubmitted(true);
                }}
                className="space-y-5"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center gap-1.5">
                      <MessageSquareQuote className="w-3.5 h-3.5 text-emerald-700" />
                      فرم ثبت نظر و رضایت‌سنجی همکاری با ورت
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    ثبت نظر و تجربه همکاری با گروه ورت
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    دیدگاه شما به سایر کارآفرینان و مدیران کمک می‌کند تا شناخت بهتری از رویکرد و کیفیت خدمات ورت به دست آورند.
                  </p>
                </div>

                {/* Form Fields Matching Testimonials Data */}
                <div className="space-y-4 text-right">
                  {/* Row 1: Name & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        نام و نام خانوادگی <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={reviewForm.name}
                        onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                        placeholder="مثال: دکتر علیرضا صادقی"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-right"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        سمت یا نقش سازمانی <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={reviewForm.role}
                        onChange={(e) => setReviewForm({ ...reviewForm, role: e.target.value })}
                        placeholder="مثال: مدیرعامل و هم‌بنیان‌گذار"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-right"
                      />
                    </div>
                  </div>

                  {/* Row 2: Company & Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        نام برند یا شرکت <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={reviewForm.company}
                        onChange={(e) => setReviewForm({ ...reviewForm, company: e.target.value })}
                        placeholder="مثال: آکادمی تیچرشو"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-right"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        حوزه فعالیت / دسته‌بندی پروژه <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={reviewForm.category}
                        onChange={(e) => setReviewForm({ ...reviewForm, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all cursor-pointer text-right"
                      >
                        <option>فناوری آموزشی (EdTech)</option>
                        <option>تجارت الکترونیک و مارکت‌پلیس</option>
                        <option>سلامت دیجیتال و ورزش</option>
                        <option>طراحی وب‌سایت و پورتال سازمانی</option>
                        <option>نرم‌افزار تحت وب و اپلیکیشن اختصاصی</option>
                        <option>اتوماسیون صنعتی و لجستیک</option>
                        <option>هوش مصنوعی و مهندسی داده</option>
                        <option>خدمات مالی و فین‌تک</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Duration & Star Rating */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        مدت زمان همکاری با ورت
                      </label>
                      <select
                        value={reviewForm.duration}
                        onChange={(e) => setReviewForm({ ...reviewForm, duration: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all cursor-pointer text-right"
                      >
                        <option>همکاری ۶ ماهه (پروژه کوتاه‌مدت)</option>
                        <option>همکاری ۱ ساله</option>
                        <option>همکاری ۲ ساله</option>
                        <option>همکاری ۳ ساله</option>
                        <option>بیش از ۳ سال (شریک راهبردی بلندمدت)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        امتیاز و درجه رضایت از همکاری ({reviewRating} از ۵ ستاره)
                      </label>
                      <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-50 border border-slate-200">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setReviewRating(star)}
                            onMouseEnter={() => setHoveredStar(star)}
                            onMouseLeave={() => setHoveredStar(null)}
                            className="p-1 hover:scale-125 transition-transform cursor-pointer"
                            title={`${star} ستاره`}
                          >
                            <Star
                              className={`w-5 h-5 ${
                                star <= (hoveredStar ?? reviewRating)
                                  ? 'text-amber-400 fill-amber-400'
                                  : 'text-slate-300'
                              } transition-colors`}
                            />
                          </button>
                        ))}
                        <span className="text-xs font-bold text-amber-700 mr-2">
                          {reviewRating === 5
                            ? 'عالی (۵ ستاره)'
                            : reviewRating === 4
                            ? 'بسیار خوب (۴ ستاره)'
                            : reviewRating === 3
                            ? 'خوب (۳ ستاره)'
                            : reviewRating === 2
                            ? 'متوسط (۲ ستاره)'
                            : 'قابل بهبود (۱ ستاره)'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Review Quote Textarea */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      متن دیدگاه، نظر و تجربه همکاری شما <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={reviewForm.quote}
                      onChange={(e) => setReviewForm({ ...reviewForm, quote: e.target.value })}
                      placeholder="کیفیت مشاوره، انضباط مالی، سرعت اجرا، تخصص تیم یا دستاوردهای این همکاری را شرح دهید..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all resize-none text-right"
                    />
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setReviewModalOpen(false)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    انصراف
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#0a4852] hover:bg-[#07363e] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
                    <span>ثبت رسمی دیدگاه و ارسال</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
