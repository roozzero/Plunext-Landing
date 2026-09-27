import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Award, Zap, ArrowRight, Shield, RefreshCw } from 'lucide-react';

export const AboutModalContent: React.FC<{ onNavigateToContact: () => void }> = ({ onNavigateToContact }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 4000);
    }, 1200);
  };

  return (
    <div className="space-y-10 text-slate-200">
      {/* Hero statement */}
      <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-sky-500/10 via-slate-900/40 to-transparent border border-sky-500/20">
        <div className="flex items-center gap-2.5 text-sky-400 text-xs font-mono tracking-wider uppercase mb-3">
          <Sparkles className="w-4 h-4" />
          <span>Studio Philosophy · Founded 2022</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
          We architect digital ecosystems where mathematical precision meets human intuition.
        </h3>
        <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          Plunex is an independent creative technology and systems laboratory. We partner with visionary founders and global enterprises to engineer next-generation spatial computing interfaces, autonomous multi-agent pipelines, and zero-compromise distributed platforms.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={handleDownload}
            disabled={downloading}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-400/30 text-sky-300 text-sm font-medium transition-all cursor-pointer"
          >
            {downloading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Generating Blueprint Deck...</span>
              </>
            ) : downloaded ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Plunex_Capability_2026.pdf Ready</span>
              </>
            ) : (
              <>
                <Shield className="w-4 h-4" />
                <span>Download Studio Deck (.PDF)</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onNavigateToContact}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all cursor-pointer"
          >
            <span>Initiate Studio Uplink</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Deployed Systems', value: '48+', detail: 'Global enterprise scale' },
          { label: 'System Uptime SLA', value: '99.99%', detail: 'Sub-millisecond latency' },
          { label: 'Design Awards', value: '18', detail: 'Awwwards, FWA, RedDot' },
          { label: 'End Users Touched', value: '120M+', detail: 'Across 34 countries' },
        ].map((stat, i) => (
          <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-white/20 transition-all">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">{stat.value}</div>
            <div className="text-xs font-semibold text-sky-400 mt-1">{stat.label}</div>
            <div className="text-[11px] text-slate-400 mt-0.5">{stat.detail}</div>
          </div>
        ))}
      </div>

      {/* 4 Pillars */}
      <div>
        <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">Core Architecture Principles</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              num: '01',
              title: 'Quantum Precision',
              description: 'We reject sloppy approximations. Every animation curve, state transition, and cryptographic payload is calculated with mathematical rigor and sub-frame fluid physics.',
              icon: Zap,
              color: 'text-amber-400',
              bg: 'bg-amber-400/10',
            },
            {
              num: '02',
              title: 'Zero-Pill Aesthetic Discipline',
              description: 'True sophistication does not hide behind generic template pills or gradient cliches. We prioritize typographical hierarchy, natural glass refraction, and spatial integrity.',
              icon: Award,
              color: 'text-sky-400',
              bg: 'bg-sky-400/10',
            },
            {
              num: '03',
              title: 'Human-Agent Ergonomics',
              description: 'Interfaces are no longer static click-targets. We engineer co-cognitive canvases where autonomous background intelligence elevates human strategic output without friction.',
              icon: Sparkles,
              color: 'text-indigo-400',
              bg: 'bg-indigo-400/10',
            },
            {
              num: '04',
              title: 'Resilient Scalability',
              description: 'Designed from day one for continuous high-concurrency operation. Distributed edge caching, event-sourced states, and graceful degradation during network degradation.',
              icon: Shield,
              color: 'text-emerald-400',
              bg: 'bg-emerald-400/10',
            },
          ].map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.num} className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-lg ${pillar.bg} flex items-center justify-center ${pillar.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 font-semibold">{pillar.num}</span>
                </div>
                <h4 className="text-base font-semibold text-white tracking-tight">{pillar.title}</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Studio Timeline */}
      <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
        <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-5">Evolutionary Milestones</div>
        <div className="space-y-6">
          {[
            {
              year: '2022',
              title: 'Genesis of Plunex Lab',
              desc: 'Formed as an elite skunkworks collective in Zurich & Tokyo specializing in WebGL procedural worlds and high-throughput real-time streaming engines.',
            },
            {
              year: '2024',
              title: 'Spatial Intelligence Expansion',
              desc: 'Introduced proprietary reactive node-based state systems, servicing 12 tier-1 enterprise platforms across autonomous logistics and fintech.',
            },
            {
              year: '2026',
              title: 'The Post-Flat Network',
              desc: 'Deployment of autonomous multi-agent canvas frameworks, bridging browser-native spatial computing with real-time neural inference.',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <span className="text-xs font-mono font-bold text-sky-400 px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-400/20 shrink-0">
                {item.year}
              </span>
              <div>
                <h5 className="text-sm font-semibold text-white">{item.title}</h5>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
