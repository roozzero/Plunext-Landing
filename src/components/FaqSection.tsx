import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqSectionProps {
  onAskQuestion?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onAskQuestion }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'What types of businesses do you help acquire or sell?',
      answer:
        'We specialize in profitable, market-leading small to mid-market enterprises across industrial services, mission-critical manufacturing, B2B vertical software, and technology-enabled business services. Typically, these firms generate $3M to $30M in EBITDA with durable customer retention, strong cash flow, and defensible competitive advantages.',
    },
    {
      id: 'faq-2',
      question: 'How does the acquisition process work from start to finish?',
      answer:
        'Our process begins with confidential introductory conversations to understand company history, founder legacy, and objectives. Following mutual interest, we provide an indicative valuation and non-binding Letter of Intent (LOI). We then conduct focused, non-disruptive confirmatory due diligence, execute legal agreements, and finalize closing—typically maintaining founder continuity or implementing agreed succession plans.',
    },
    {
      id: 'faq-3',
      question: 'What information do I need to get started?',
      answer:
        'To initiate a high-level confidential review, we typically request three to five years of historical income statements and balance sheets, an overview of core products or service offerings, and an organizational summary. All shared information is protected under a strict mutual Non-Disclosure Agreement (NDA) prior to exchange.',
    },
    {
      id: 'faq-4',
      question: 'How long does a typical acquisition take?',
      answer:
        'A standard transaction generally takes between 60 to 90 days from signed Letter of Intent (LOI) to final funding and close. Because we operate with committed private capital and streamlined internal decision-making, we eliminate unnecessary bureaucratic delays and third-party syndication hurdles.',
    },
    {
      id: 'faq-5',
      question: 'Do you operate internationally or focus on specific markets?',
      answer:
        'While our primary investment focus centers on high-growth North American and European regional hubs, we regularly partner with businesses that possess international supply chains or global distribution channels. We evaluate strategic opportunities globally where cross-border synergies accelerate value creation.',
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative w-full bg-white text-[#0a181c] py-20 sm:py-28 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden">
      {/* Subtle corner geometric accent in bottom-left matching screenshot */}
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-slate-100/60 rotate-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ======================================================== */}
          {/* LEFT COLUMN: TITLE, INTRO, AND "ASK A QUESTION" CTA */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            {/* Category Subtitle with bullet */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-500 font-normal tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              <span>FAQ</span>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight text-[#0a1e23] leading-[1.12]"
            >
              Frequently Asked<br />
              Questions
            </motion.h2>

            {/* Subtitle description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-sm"
            >
              Find quick answers to the most common questions about our services, and policies.
            </motion.p>

            {/* Bottom prompt & CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 sm:mt-12 flex flex-col items-start"
            >
              <span className="text-xs sm:text-[13px] text-slate-500 font-normal mb-3">
                Can't find your question?
              </span>

              <button
                type="button"
                onClick={onAskQuestion}
                className="inline-flex items-center gap-2 bg-[#094751] hover:bg-[#07363e] text-white text-xs sm:text-[13px] font-medium px-6 py-2.5 rounded-full shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer group select-none"
              >
                <span>Ask A Question</span>
                <span className="group-hover:translate-x-0.5 transition-transform text-sm">→</span>
              </button>
            </motion.div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: EXPANDABLE ACCORDION LIST */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
            {faqs.map((faq, idx) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group py-5 sm:py-6"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between text-left cursor-pointer transition-colors"
                  >
                    <span
                      className={`text-base sm:text-[17px] font-medium tracking-tight pr-6 transition-colors ${
                        isOpen
                          ? 'text-[#094751]'
                          : 'text-[#0b242a] group-hover:text-[#094751]'
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span className="shrink-0 text-slate-400 group-hover:text-slate-800 transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.2]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.2]" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 pb-2 text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed pr-8">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
