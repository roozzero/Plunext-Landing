import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={scrollToTop}
          aria-label="بازگشت به بالای صفحه"
          className="fixed bottom-6 left-6 z-40 group p-3.5 rounded-full bg-[#0a383d]/90 hover:bg-[#0d474e] text-white border border-emerald-400/30 shadow-[0_10px_30px_rgba(10,56,61,0.35)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_36px_rgba(16,185,129,0.35)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
        >
          <div className="w-5 h-5 flex items-center justify-center">
            <ArrowUp className="w-5 h-5 text-emerald-300 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
