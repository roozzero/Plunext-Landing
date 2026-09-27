import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { NetworkNode } from '../types/network';
import { sound } from '../utils/sound';
import { AboutModalContent } from './modals/AboutModalContent';
import { ServicesModalContent } from './modals/ServicesModalContent';
import { ProjectsModalContent } from './modals/ProjectsModalContent';
import { PortfolioModalContent } from './modals/PortfolioModalContent';
import { TeamModalContent } from './modals/TeamModalContent';
import { BlogModalContent } from './modals/BlogModalContent';
import { ContactModalContent } from './modals/ContactModalContent';
import { CareersModalContent } from './modals/CareersModalContent';
import { CentralCoreModalContent } from './modals/CentralCoreModalContent';

interface NetworkModalProps {
  activeNodeId: string | null;
  nodes: NetworkNode[];
  onClose: () => void;
  onNavigateToSection: (sectionId: string) => void;
  prefilledScope?: string;
  setPrefilledScope?: (scope: string) => void;
}

export const NetworkModal: React.FC<NetworkModalProps> = ({
  activeNodeId,
  nodes,
  onClose,
  onNavigateToSection,
  prefilledScope,
  setPrefilledScope,
}) => {
  const isCoreModal = activeNodeId === 'core';
  const currentNode = nodes.find((n) => n.id === activeNodeId);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        sound.playClose();
        onClose();
      }
    };
    if (activeNodeId) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeNodeId, onClose]);

  const handleClose = () => {
    sound.playClose();
    onClose();
  };

  const handleScopeSelect = (scope: string) => {
    if (setPrefilledScope) {
      setPrefilledScope(scope);
    }
    onNavigateToSection('contact');
  };

  return (
    <AnimatePresence>
      {activeNodeId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-2xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.85)] border z-10 font-sans"
            style={{
              backgroundColor: 'rgba(16, 17, 24, 0.92)',
              borderColor: currentNode ? currentNode.accentColor + '40' : 'rgba(255, 255, 255, 0.15)',
              boxShadow: currentNode
                ? `0 0 60px ${currentNode.accentColor}20, 0 30px 90px rgba(0,0,0,0.85)`
                : '0 0 60px rgba(255,255,255,0.1), 0 30px 90px rgba(0,0,0,0.85)',
            }}
          >
            {/* Ambient Top Glow Line */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background: currentNode
                  ? `linear-gradient(90deg, transparent, ${currentNode.accentColor}, transparent)`
                  : 'linear-gradient(90deg, transparent, #38bdf8, transparent)',
              }}
            />

            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/[0.08] bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: currentNode ? currentNode.accentColor : '#38bdf8' }}
                />
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span>PLUNEX</span>
                  <span>//</span>
                  <span className="text-white font-semibold uppercase">
                    {isCoreModal ? 'CENTRAL CORE' : currentNode?.label || 'SYSTEM'}
                  </span>
                  {currentNode?.badge && (
                    <>
                      <span>//</span>
                      <span className="text-slate-400 hidden sm:inline">{currentNode.badge}</span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close dialog"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer"
                >
                  <span className="hidden sm:inline text-[11px] text-slate-500">ESC</span>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="overflow-y-auto p-6 sm:p-8 md:p-10 space-y-6">
              {isCoreModal && (
                <CentralCoreModalContent onNavigateToSection={onNavigateToSection} />
              )}
              {activeNodeId === 'about' && (
                <AboutModalContent onNavigateToContact={() => onNavigateToSection('contact')} />
              )}
              {activeNodeId === 'services' && (
                <ServicesModalContent onSelectScopeForContact={handleScopeSelect} />
              )}
              {activeNodeId === 'projects' && <ProjectsModalContent />}
              {activeNodeId === 'portfolio' && <PortfolioModalContent />}
              {activeNodeId === 'team' && (
                <TeamModalContent onNavigateToContact={() => onNavigateToSection('contact')} />
              )}
              {activeNodeId === 'blog' && <BlogModalContent />}
              {activeNodeId === 'contact' && (
                <ContactModalContent initialScope={prefilledScope} />
              )}
              {activeNodeId === 'careers' && (
                <CareersModalContent onNavigateToContact={() => onNavigateToSection('contact')} />
              )}
            </div>

            {/* Modal Footer Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-3.5 border-t border-white/[0.08] bg-black/40 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>INTERACTIVE NODE EXPANDED</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Close Panel
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
