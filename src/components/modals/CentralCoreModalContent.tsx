import React from 'react';
import { Activity, ShieldCheck, Cpu, Terminal, Sparkles, Orbit, Radio, Globe2 } from 'lucide-react';

export const CentralCoreModalContent: React.FC<{ onNavigateToSection: (sectionId: string) => void }> = ({
  onNavigateToSection,
}) => {
  return (
    <div className="space-y-8 text-slate-200">
      {/* Intro */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/20 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white mb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>PLUNEX CENTRAL SYNAPSE CORE // 100% OPERATIONAL</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          The Gravitational Engine of Plunex
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          You are at the focal nucleus of our digital network. Every capability, publication, case study, and team member connects directly back to this unifying computational philosophy.
        </p>
      </div>

      {/* Real-time System Telemetry */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Active Synapses', val: '8 Nodes', icon: Orbit, color: 'text-sky-400' },
          { label: 'Physics Loop', val: '120 FPS RAF', icon: Cpu, color: 'text-indigo-400' },
          { label: 'Network Latency', val: '0.8ms Delta', icon: Radio, color: 'text-emerald-400' },
          { label: 'Security Layer', val: 'TLS 1.3 / E2E', icon: ShieldCheck, color: 'text-amber-400' },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase">{item.label}</span>
                <Icon className={`w-4 h-4 ${item.color}`} />
              </div>
              <div className="text-lg font-bold font-mono text-white">{item.val}</div>
            </div>
          );
        })}
      </div>

      {/* Quick Node Launchpad */}
      <div>
        <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
          Direct Orbital Access Vectors
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { id: 'about', label: '01 · About Us', desc: 'Studio DNA' },
            { id: 'services', label: '02 · Services', desc: 'Core Capabilities' },
            { id: 'projects', label: '03 · Projects', desc: 'Case Studies' },
            { id: 'portfolio', label: '04 · Creative Lab', desc: 'Interactive R&D' },
            { id: 'team', label: '05 · Team', desc: 'The Collective' },
            { id: 'blog', label: '06 · Blog', desc: 'Research Signals' },
            { id: 'contact', label: '07 · Contact', desc: 'Initialize Uplink' },
            { id: 'careers', label: '08 · Careers', desc: 'Open Missions' },
          ].map((node) => (
            <button
              key={node.id}
              type="button"
              onClick={() => onNavigateToSection(node.id)}
              className="p-3.5 rounded-xl text-left bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/25 transition-all cursor-pointer group"
            >
              <div className="text-xs font-semibold text-white group-hover:text-sky-300 transition-colors">
                {node.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">{node.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
