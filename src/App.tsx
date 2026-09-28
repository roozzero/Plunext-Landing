import React, { useState } from 'react';
import { ArrowRight, ArrowDown, Menu, X, Mail, CheckCircle2, ChevronRight } from 'lucide-react';
import heroBg from './assets/imgs/Hero.png';
import logoImg from './assets/imgs/Logo.png';

export default function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [portfolioModalOpen, setPortfolioModalOpen] = useState(false);

  const navItems = [
    { id: 'Home', label: 'Home' },
    { id: 'About Us', label: 'About Us' },
    { id: 'Investment Criteria', label: 'Investment Criteria' },
    { id: 'Portfolio', label: 'Portfolio' },
  ];

  const handleNavClick = (id: string) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    if (id === 'Portfolio') {
      setPortfolioModalOpen(true);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden font-['Plus_Jakarta_Sans',sans-serif] bg-[#071317] text-white select-none">
      {/* ======================================================== */}
      {/* HERO BACKGROUND IMAGE EXACTLY FROM assets/imgs/Hero.png */}
      {/* ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Hero Background Architecture"
          className="w-full h-full object-cover object-center scale-[1.01]"
        />
        {/* Subtle cinematic gradient vignette for maximum text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040e12]/85 via-transparent to-[#040e12]/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040e12]/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* ======================================================== */}
      {/* NAVIGATION BAR EXACTLY MATCHING ATTACHED SCREENSHOT */}
      {/* ======================================================== */}
      <header className="relative z-30 w-full px-6 sm:px-10 md:px-14 lg:px-16 pt-6 sm:pt-8 pb-4 flex items-center justify-between">
        {/* Left: Brand Logo from assets/imgs/Logo.png */}
        <div className="flex items-center">
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
                // Graceful fallback if image has rendering discrepancy
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
        </div>

        {/* Center: Frosted White Pill Navigation (Exact match to screenshot) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center bg-white/95 backdrop-blur-md p-1.5 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.28)] border border-white/40"
        >
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`text-[13px] lg:text-[14px] font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#0d3b43] text-white px-5 py-1.5 rounded-full shadow-[0_2px_8px_rgba(13,59,67,0.4)]'
                    : 'text-[#334155] hover:text-[#0f172a] px-4 py-1.5 rounded-full hover:bg-slate-100/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Get In Touch Button (Translucent dark teal pill) */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setContactModalOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-[#0c333a]/80 hover:bg-[#0c333a] border border-[#1d5c67]/60 text-white text-[13px] sm:text-[14px] font-medium px-5 py-2.5 rounded-full backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.25)] transition-all duration-200 group cursor-pointer"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-black/40 text-white border border-white/20 hover:bg-black/60 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
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
      {/* HERO MAIN CONTENT SECTION (EXACT LAYOUT OF SCREENSHOT) */}
      {/* ======================================================== */}
      <main className="relative z-20 min-h-[calc(100vh-140px)] flex flex-col justify-between px-6 sm:px-10 md:px-14 lg:px-16 pt-8 pb-10 sm:pb-12">
        {/* Spacer top */}
        <div className="hidden lg:block h-6" />

        {/* Center / Lower Main Content Row */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto">
          {/* Left Column: Heading + Paragraph + Action Buttons */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-7">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-medium text-white tracking-tight leading-[1.08] max-w-3xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]">
              Building Long-Term Value<br />
              In Uncertain Markets
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-sm sm:text-base md:text-[17px] text-slate-200/90 font-normal leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
              We invest with conviction, insight, and discipline — partnering with exceptional leaders to create lasting impact across evolving industries.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1 sm:pt-2">
              {/* White Pill Button: Get In Touch -> */}
              <button
                type="button"
                onClick={() => setContactModalOpen(true)}
                className="bg-white hover:bg-slate-100 text-slate-950 font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full flex items-center gap-2 shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-sm sm:text-base group"
              >
                <span>Get In Touch</span>
                <span className="group-hover:translate-x-0.5 transition-transform text-base">→</span>
              </button>

              {/* Dark Translucent Glass Pill: Our Portfolio */}
              <button
                type="button"
                onClick={() => setPortfolioModalOpen(true)}
                className="bg-[#0b242a]/60 hover:bg-[#0b242a]/85 border border-white/20 text-white font-medium px-6 sm:px-7 py-3 sm:py-3.5 rounded-full backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-sm sm:text-base shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
              >
                <span>Our Portfolio</span>
              </button>
            </div>
          </div>

          {/* Right Column: Floating Stat Card ($2.2+) */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
            <div className="bg-white/[0.06] hover:bg-white/[0.09] border border-white/15 backdrop-blur-xl rounded-2xl p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.35)] min-w-[240px] sm:min-w-[270px] transition-all duration-300">
              <div className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-white tracking-tight leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                $2.2+
              </div>
              <p className="text-xs sm:text-sm text-slate-200/80 mt-2 font-normal leading-snug">
                Invested across private markets
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Scroll to Explore */}
        <div className="w-full flex justify-end pt-8 sm:pt-10">
          <button
            type="button"
            onClick={() => setPortfolioModalOpen(true)}
            className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-300/80 hover:text-white transition-colors cursor-pointer group select-none"
          >
            <span>Scroll to Explore</span>
            <span className="text-sm group-hover:translate-y-0.5 transition-transform">↓</span>
          </button>
        </div>
      </main>

      {/* ======================================================== */}
      {/* GET IN TOUCH MODAL / DIALOG */}
      {/* ======================================================== */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
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
