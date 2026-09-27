import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X, Sparkles, Orbit, Send, Terminal } from 'lucide-react';
import { sound } from '../utils/sound';

interface NavbarProps {
  activeTab?: string;
  onSelectTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab = 'Home',
  onSelectTab,
}) => {
  const [currentActive, setCurrentActive] = useState(activeTab);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync external activeTab prop
  useEffect(() => {
    setCurrentActive(activeTab);
  }, [activeTab]);

  const handleSelect = (name: string) => {
    sound.playHover();
    setCurrentActive(name);
    onSelectTab(name);
    setIsDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { id: 'Home', label: 'Home' },
    { id: 'About', label: 'About' },
    { id: 'Services', label: 'Services' },
    { id: 'Projects', label: 'Projects' },
    { id: 'Team', label: 'Team' },
    { id: 'Blog', label: 'Blog' },
    { id: 'Contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-5 px-3 sm:px-8 pointer-events-auto">
      <div className="max-w-6xl mx-auto">
        {/* Smoked Frosted Glass Navigation Bar */}
        <nav
          aria-label="Main Navigation"
          className="relative flex items-center justify-between px-5 sm:px-7 py-3 rounded-2xl sm:rounded-full shadow-[0_14px_40px_rgba(0,0,0,0.55)] border border-white/10"
          style={{
            backgroundColor: 'rgba(32, 34, 46, 0.65)',
            backdropFilter: 'blur(24px) saturate(140%)',
            WebkitBackdropFilter: 'blur(24px) saturate(140%)',
          }}
        >
          {/* ZONE 1: Brand Wordmark (Left) */}
          <div className="flex items-center shrink-0 min-w-[70px]">
            <button
              type="button"
              onClick={() => handleSelect('Home')}
              className="flex items-center gap-2 group text-white font-semibold text-[15px] sm:text-base tracking-wider focus:outline-none cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-sky-400 group-hover:scale-125 transition-transform shadow-[0_0_10px_#38bdf8]" />
              <span className="tracking-tight uppercase font-sans">PLUNEX</span>
            </button>
          </div>

          {/* ZONE 2: Centered Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-4">
            <div className="flex items-center gap-5 sm:gap-6 text-[13px] sm:text-[14px]">
              {navLinks.map((item) => {
                const isActive = currentActive === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item.id)}
                    className={`relative py-1 transition-colors duration-200 focus:outline-none cursor-pointer ${
                      isActive ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full shadow-[0_0_8px_#38bdf8]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}

              {/* Dropdown for More Sections */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors duration-150 focus:outline-none cursor-pointer py-1"
                  aria-expanded={isDropdownOpen}
                >
                  <span>Explore</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-sky-400' : 'text-slate-400'}`} />
                </button>

                {/* Frosted Glass Dropdown Menu */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className="absolute left-1/2 -translate-x-1/2 mt-3.5 w-52 rounded-2xl py-2 shadow-[0_18px_50px_rgba(0,0,0,0.7)] z-50 overflow-hidden border border-white/10"
                      style={{
                        backgroundColor: 'rgba(24, 26, 36, 0.94)',
                        backdropFilter: 'blur(28px) saturate(140%)',
                        WebkitBackdropFilter: 'blur(28px) saturate(140%)',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => handleSelect('Portfolio')}
                        className="w-full text-left px-4 py-2.5 text-[13px] text-slate-200 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer flex items-center justify-between"
                      >
                        <span>Creative Lab & Sandbox</span>
                        <span className="text-[10px] font-mono text-pink-400">R&D</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleSelect('Careers')}
                        className="w-full text-left px-4 py-2.5 text-[13px] text-slate-200 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer flex items-center justify-between"
                      >
                        <span>Open Missions</span>
                        <span className="text-[10px] font-mono text-orange-400">3 ROLES</span>
                      </button>

                      <div className="my-1.5 h-[1px] bg-white/[0.08]" />

                      <button
                        type="button"
                        onClick={() => handleSelect('Core')}
                        className="w-full text-left px-4 py-2.5 text-[13px] text-sky-300 hover:text-white hover:bg-sky-500/15 transition-colors cursor-pointer flex items-center justify-between font-mono"
                      >
                        <span>Central Hub Status</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ZONE 3: Right Zone (Status + Uplink Quick Action) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleSelect('Contact')}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono transition-all cursor-pointer hover:border-teal-400/40"
            >
              <Send className="w-3 h-3 text-teal-400" />
              <span>Initiate Uplink</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 p-4 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              style={{
                backgroundColor: 'rgba(20, 22, 32, 0.95)',
                backdropFilter: 'blur(28px)',
                WebkitBackdropFilter: 'blur(28px)',
              }}
            >
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  ...navLinks,
                  { id: 'Portfolio', label: 'Creative Lab' },
                  { id: 'Careers', label: 'Careers' },
                  { id: 'Core', label: 'Central Core' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item.id)}
                    className={`p-2.5 rounded-xl text-left font-medium transition-colors cursor-pointer ${
                      currentActive === item.id
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
