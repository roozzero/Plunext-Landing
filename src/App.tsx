import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Menu, X, CheckCircle2 } from 'lucide-react';
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

export default function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [portfolioModalOpen, setPortfolioModalOpen] = useState(false);

  // Animated counter for the stat card ($0.0+ to $2.2+)
  const [statNumber, setStatNumber] = useState<number>(0);
  const [isCountingDone, setIsCountingDone] = useState<boolean>(false);

  useEffect(() => {
    // Start counter after the card slides down from the top (around 1.1s)
    const startTimeout = setTimeout(() => {
      const duration = 1400; // ms
      const startTime = performance.now();
      const targetVal = 2.2;

      const animateCount = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Smooth ease-out cubic
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
    { id: 'Home', label: 'Home' },
    { id: 'About Us', label: 'About Us' },
    { id: 'Investment Criteria', label: 'Investment Criteria' },
    { id: 'Portfolio', label: 'Portfolio' },
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
    if (id === 'Portfolio') {
      setPortfolioModalOpen(true);
    } else if (id === 'About Us' || id === 'Investment Criteria') {
      scrollToInsight();
    } else if (id === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden font-['Plus_Jakarta_Sans',sans-serif] bg-[#071317] text-white select-none">
      {/* ======================================================== */}
      {/* HERO BACKGROUND IMAGE - EXACTLY FROM /assets/imgs/Hero.png WITHOUT ANY ZOOM */}
      {/* ======================================================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <img
          src="/assets/imgs/Hero.png"
          alt="Hero Background Architecture"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle cinematic gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040e12]/85 via-transparent to-[#040e12]/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040e12]/60 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* ======================================================== */}
      {/* NAVIGATION BAR WITH CHOREOGRAPHED ENTRANCES */}
      {/* ======================================================== */}
      <header className="relative z-30 w-full px-6 sm:px-10 md:px-14 lg:px-16 pt-6 sm:pt-8 pb-4 flex items-center justify-between">
        {/* 1. Left: Logo rotates in place & appears */}
        <motion.div
          initial={{ rotate: -220, scale: 0.25, opacity: 0 }}
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
            className="flex items-center gap-2 group transition-opacity hover:opacity-90 cursor-pointer"
          >
            <img
              src={logoImg}
              alt="Vort Logo"
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
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">Vort</span>
            </div>
          </a>
        </motion.div>

        {/* 2. Center: Navbar enters from Right to Left, then reveals menus */}
        <motion.nav
          aria-label="Main Navigation"
          initial={{ x: 120, opacity: 0 }}
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
                initial={{ x: 25, opacity: 0 }}
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

        {/* 3. Right: Navbar button enters from the Left, arrow first, then text */}
        <div className="flex items-center gap-3">
          <motion.button
            type="button"
            onClick={() => setContactModalOpen(true)}
            initial={{ x: -70, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:flex items-center gap-2 bg-[#0c333a]/80 hover:bg-[#0c333a] border border-[#1d5c67]/60 text-white text-[13px] sm:text-[14px] font-medium px-5 py-2.5 rounded-full backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.25)] transition-all duration-200 group cursor-pointer overflow-hidden"
          >
            {/* Arrow appears first */}
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.85, ease: [0.34, 1.56, 0.64, 1] }}
              className="order-2 group-hover:translate-x-0.5 transition-transform"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.span>

            {/* Text appears second */}
            <motion.span
              initial={{ x: -16, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.05, ease: 'easeOut' }}
              className="order-1"
            >
              Get In Touch
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
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-40 bg-[#0a2328]/95 backdrop-blur-xl border border-white/15 p-5 rounded-3xl shadow-2xl space-y-3">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
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
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* HERO MAIN CONTENT SECTION */}
      {/* ======================================================== */}
      <main className="relative z-20 min-h-[calc(100vh-100px)] flex flex-col justify-end px-6 sm:px-10 md:px-14 lg:px-16 pt-4 pb-3 sm:pb-4">
        {/* Main Content Grid positioned close to bottom */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-auto mb-1">
          {/* Left Column: Heading + Paragraph + Action Buttons */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-5 mb-1">
            {/* 4. Main Headline: Appears from bottom to top */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="text-[53px] font-medium text-white tracking-tight leading-[1.08] max-w-3xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]"
            >
              Building Long-Term Value<br />
              In Uncertain Markets
            </motion.h1>

            {/* Subtitle / Paragraph: Appears from bottom to top */}
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="text-[15px] text-slate-200/90 font-normal leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
            >
              We invest with conviction, insight, and discipline — partnering with exceptional leaders to create lasting impact across evolving industries.
            </motion.p>

            {/* 5. Hero Buttons: Appear like the navbar button (from left, arrow first then text) */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-[15px]">
              {/* White Pill Button: Get In Touch */}
              <motion.button
                type="button"
                onClick={() => setContactModalOpen(true)}
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white hover:bg-slate-100 text-slate-950 font-semibold px-6 sm:px-7 py-2.5 sm:py-3 rounded-full flex items-center gap-2 shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-[14px] group overflow-hidden"
              >
                {/* Text appears second */}
                <motion.span
                  initial={{ x: -14, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.45, delay: 1.45, ease: 'easeOut' }}
                >
                  Get In Touch
                </motion.span>

                {/* Arrow appears first */}
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.25, ease: [0.34, 1.56, 0.64, 1] }}
                  className="text-base font-normal group-hover:translate-x-0.5 transition-transform"
                >
                  →
                </motion.span>
              </motion.button>

              {/* Dark Translucent Glass Pill: Our Portfolio */}
              <motion.button
                type="button"
                onClick={() => setPortfolioModalOpen(true)}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#0b242a]/60 hover:bg-[#0b242a]/85 border border-white/20 text-white font-medium px-6 sm:px-7 py-2.5 sm:py-3 rounded-full backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-[14px] shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  Our Portfolio
                </motion.span>
              </motion.button>
            </div>
          </div>

          {/* 6. Right Column: Stat Card appears from top to bottom, with increasing number counter */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
            <motion.div
              initial={{ y: -70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/[0.06] hover:bg-white/[0.09] border border-white/15 backdrop-blur-xl rounded-2xl p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.35)] min-w-[240px] sm:min-w-[270px] transition-all duration-300"
            >
              {/* Animated Incrementing Counter */}
              <div className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-white tracking-tight leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                ${statNumber.toFixed(1)}{isCountingDone ? '+' : ''}
              </div>
              <p className="text-xs sm:text-sm text-slate-200/80 mt-2 font-normal leading-snug">
                Invested across private markets
              </p>
            </motion.div>
          </div>
        </div>

        {/* 7. Bottom Bar: Scroll to Explore */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="w-full flex justify-end pt-2 sm:pt-3"
        >
          <button
            type="button"
            onClick={scrollToInsight}
            className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-300/80 hover:text-white transition-colors cursor-pointer group select-none"
          >
            <span>Scroll to Explore</span>
            <span className="text-sm group-hover:translate-y-0.5 transition-transform">↓</span>
          </button>
        </motion.div>
      </main>

      {/* ======================================================== */}
      {/* INSIGHT & GROWTH SECTION - EXACTLY MATCHING SCREENSHOT */}
      {/* ======================================================== */}
      <InsightSection />

      {/* ======================================================== */}
      {/* STATS COUNTER SECTION - EXACTLY MATCHING ATTACHED IMAGE */}
      {/* ======================================================== */}
      <StatsCounterSection />

      {/* ======================================================== */}
      {/* APPROACH SECTION - EXACTLY MATCHING ATTACHED IMAGE */}
      {/* ======================================================== */}
      <ApproachSection />

      {/* ======================================================== */}
      {/* CLIENT LOGOS SECTION - EXACTLY MATCHING ATTACHED IMAGE */}
      {/* ======================================================== */}
      <ClientLogosSection />

      {/* ======================================================== */}
      {/* PORTFOLIO CASES SECTION - EXACTLY MATCHING ATTACHED IMAGE */}
      {/* ======================================================== */}
      <PortfolioCasesSection />

      {/* ======================================================== */}
      {/* WHY PARTNER WITH US SECTION - EXACTLY MATCHING ATTACHED IMAGE */}
      {/* ======================================================== */}
      <WhyPartnerSection onOpenContact={() => setContactModalOpen(true)} />

      {/* ======================================================== */}
      {/* OUR LEADERSHIP TEAM SECTION - EXACTLY MATCHING ATTACHED IMAGE */}
      {/* ======================================================== */}
      <LeadershipSection />

      {/* ======================================================== */}
      {/* CTA BANNER SECTION - EXACTLY MATCHING ATTACHED IMAGE */}
      {/* ======================================================== */}
      <CtaBannerSection onOpenContact={() => setContactModalOpen(true)} />

      {/* ======================================================== */}
      {/* FEATURED INSIGHTS SECTION - EXACTLY MATCHING ATTACHED IMAGE */}
      {/* ======================================================== */}
      <FeaturedInsightsSection />

      {/* ======================================================== */}
      {/* FAQ SECTION - EXACTLY MATCHING ATTACHED IMAGE */}
      {/* ======================================================== */}
      <FaqSection onAskQuestion={() => setContactModalOpen(true)} />

      {/* ======================================================== */}
      {/* CONNECT WITH US BANNER - EXACTLY MATCHING ATTACHED IMAGE */}
      {/* ======================================================== */}
      <ConnectBannerSection onOpenContact={() => setContactModalOpen(true)} />

      {/* ======================================================== */}
      {/* FOOTER SECTION - EXACTLY MATCHING ATTACHED IMAGE */}
      {/* ======================================================== */}
      <FooterSection
        onOpenContact={() => setContactModalOpen(true)}
        onNavigate={(id) => setActiveNav(id)}
      />

      {/* ======================================================== */}
      {/* GET IN TOUCH MODAL / DIALOG */}
      {/* ======================================================== */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0a1e24] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-200">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => {
                setContactModalOpen(false);
                setContactSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {contactSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-400/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Inquiry Received</h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out to Vort. A member of our private markets investment committee will review your message promptly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setContactModalOpen(false);
                    setContactSubmitted(false);
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-white text-slate-950 font-medium text-sm hover:bg-slate-100 transition-colors"
                >
                  Close
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
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                    Connect With Vort
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Get In Touch</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Partnering with exceptional leaders across evolving industries.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Alexander Vance"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Corporate Email</label>
                    <input
                      type="email"
                      required
                      placeholder="vance@enterprise.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Discussion Subject</label>
                    <select className="w-full px-4 py-2.5 rounded-xl bg-[#07171c] border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors cursor-pointer">
                      <option>Investment Partnership</option>
                      <option>Founder / Executive Leadership</option>
                      <option>Portfolio Inquiries</option>
                      <option>General Corporate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Message</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Brief overview of your venture or investment inquiry..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-semibold text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* PORTFOLIO & INVESTMENT CRITERIA MODAL */}
      {/* ======================================================== */}
      {portfolioModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#091b20] border border-white/15 rounded-3xl p-6 sm:p-9 shadow-2xl text-slate-200 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setPortfolioModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  Private Markets Strategy
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  Vort Investment Portfolio & Criteria
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  We deploy patient, disciplined capital into market-leading enterprises positioned to outperform across secular economic cycles.
                </p>
              </div>

              {/* Investment Criteria Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: 'Secular Resilience', desc: 'Businesses with critical mission utility and durable competitive moats.' },
                  { title: 'Visionary Leadership', desc: 'Management teams demonstrating high integrity, strategic clarity, and disciplined capital allocation.' },
                  { title: 'Value Compounding', desc: 'Predictable cash flows, pricing power, and scalable unit economics.' },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5">
                    <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Sample Portfolio Highlights */}
              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Featured Portfolio Holdings
                </h4>
                <div className="space-y-3">
                  {[
                    { name: 'Apex Infrastructure Group', sector: 'Digital Power & Grid Systems', metric: '$640M Enterprise Value' },
                    { name: 'Synthetix Core Bio', sector: 'Advanced Biologics Manufacturing', metric: '$410M Growth Investment' },
                    { name: 'Celestia Autonomous Supply', sector: 'Industrial Telemetry Logistics', metric: '$780M Platform Buyout' },
                  ].map((hold, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white/[0.04] transition-colors"
                    >
                      <div>
                        <div className="text-base font-semibold text-white">{hold.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{hold.sector}</div>
                      </div>
                      <div className="text-xs sm:text-sm font-mono font-medium text-emerald-400">
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
    </div>
  );
}
