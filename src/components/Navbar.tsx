import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeTab?: string;
  onSelectTab?: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab = 'Home',
  onSelectTab,
}) => {
  const [currentActive, setCurrentActive] = useState(activeTab);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (name: string) => {
    setCurrentActive(name);
    if (onSelectTab) onSelectTab(name);
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-5 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Smoked Frosted Glass Navigation Bar with Rounder Corners */}
        <nav
          aria-label="Main Navigation"
          className="relative flex items-center justify-between px-7 py-3.5 rounded-2xl sm:rounded-full shadow-[0_14px_40px_rgba(0,0,0,0.45)]"
          style={{
            backgroundColor: 'rgba(42, 38, 42, 0.55)',
            backdropFilter: 'blur(22px) saturate(140%)',
            WebkitBackdropFilter: 'blur(22px) saturate(140%)',
          }}
        >
          {/* ZONE 1: Brand Wordmark (Left) */}
          <div className="flex items-center shrink-0 min-w-[70px]">
            <button
              type="button"
              onClick={() => handleSelect('Home')}
              className="text-white font-semibold text-[15px] sm:text-base tracking-normal focus:outline-none cursor-pointer"
            >
              Brand
            </button>
          </div>

          {/* ZONE 2: Centered Navigation Links (Center) */}
          <div className="flex items-center justify-center flex-1 px-4">
            <div className="flex items-center gap-5 sm:gap-7 text-[13px] sm:text-[14px]">
              {/* Home (Active/Link) */}
              <button
                type="button"
                onClick={() => handleSelect('Home')}
                className={`transition-colors duration-150 focus:outline-none cursor-pointer ${
                  currentActive === 'Home'
                    ? 'text-white font-medium'
                    : 'text-white/75 hover:text-white'
                }`}
              >
                Home
              </button>

              {/* Link */}
              <button
                type="button"
                onClick={() => handleSelect('Link')}
                className={`transition-colors duration-150 focus:outline-none cursor-pointer ${
                  currentActive === 'Link'
                    ? 'text-white font-medium'
                    : 'text-white/75 hover:text-white'
                }`}
              >
                Link
              </button>

              {/* Dropdown with Caret: "Dropdown ▾" */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1.5 text-white/75 hover:text-white transition-colors duration-150 focus:outline-none cursor-pointer"
                  aria-expanded={isDropdownOpen}
                >
                  <span>Dropdown</span>
                  <span className="text-[10px] text-white/70 leading-none -mt-0.5">▼</span>
                </button>

                {/* Frosted Glass Dropdown Menu with Rounder Corners */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className="absolute left-1/2 -translate-x-1/2 mt-3.5 w-48 rounded-2xl py-2 shadow-[0_18px_40px_rgba(0,0,0,0.55)] z-50 overflow-hidden"
                      style={{
                        backgroundColor: 'rgba(38, 35, 38, 0.85)',
                        backdropFilter: 'blur(26px) saturate(140%)',
                        WebkitBackdropFilter: 'blur(26px) saturate(140%)',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          handleSelect('Action');
                          setIsDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-[13px] text-white/85 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
                      >
                        Action
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          handleSelect('Another action');
                          setIsDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-[13px] text-white/85 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
                      >
                        Another action
                      </button>
                      <div className="my-1.5 h-[1px] bg-white/[0.08]" />
                      <button
                        type="button"
                        onClick={() => {
                          handleSelect('Something else');
                          setIsDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-[13px] text-white/85 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
                      >
                        Something else here
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Disabled item */}
              <span
                className="text-white/35 cursor-not-allowed select-none hidden xs:inline"
                aria-disabled="true"
              >
                Disabled
              </span>
            </div>
          </div>

          {/* ZONE 3: "plunex" Text (Right) */}
          <div className="flex items-center justify-end shrink-0 min-w-[70px]">
            <span className="text-white/85 font-medium text-[13px] sm:text-[14px] tracking-normal">
              plunex
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
};
