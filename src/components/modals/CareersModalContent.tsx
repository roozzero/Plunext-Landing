import React, { useState } from 'react';
import { Briefcase, ArrowRight, CheckCircle2, Globe, Heart, Shield, Terminal } from 'lucide-react';

export const CareersModalContent: React.FC<{ onNavigateToContact: () => void }> = ({ onNavigateToContact }) => {
  const [appliedRole, setAppliedRole] = useState<string | null>(null);

  const roles = [
    {
      id: 'rust-architect',
      title: 'Principal Systems Architect (Rust / WASM / Go)',
      type: 'Full-Time · 100% Remote',
      comp: '$210k – $260k + Equity',
      desc: 'Architect our core browser-native state distribution protocol and sub-millisecond CRDT consensus layer.',
      requirements: ['5+ years high-performance systems engineering', 'Deep proficiency in Rust or Go concurrency', 'Experience with WebSockets or eBPF network layers'],
    },
    {
      id: 'spatial-designer',
      title: 'Creative Technologist & Spatial Interface Designer',
      type: 'Full-Time · Tokyo / Zurich or Remote',
      comp: '$170k – $220k + Equity',
      desc: 'Craft generative GLSL shaders, orbital viewport graph topologies, and mathematical micro-interactions.',
      requirements: ['Expertise with WebGL, Three.js or WebGPU', 'Unrelenting eye for typography & dark-mode aesthetics', 'Working portfolio of interactive web experiments'],
    },
    {
      id: 'ai-researcher',
      title: 'Autonomous Multi-Agent Systems Researcher',
      type: 'Full-Time · San Francisco or Remote',
      comp: '$190k – $240k + Equity',
      desc: 'Design cognitive vector memory graphs, tool execution loops, and automated benchmark pipelines for reasoning agents.',
      requirements: ['Experience training or orchestrating LLM tool-calling', 'Solid foundation in Python/TypeScript systems', 'Track record of production AI deployments'],
    },
  ];

  return (
    <div className="space-y-8 text-slate-200">
      {/* Intro */}
      <div className="p-6 rounded-2xl bg-orange-500/10 border border-orange-500/20">
        <div className="flex items-center gap-2 text-orange-400 text-xs font-mono uppercase tracking-wider mb-2">
          <Briefcase className="w-4 h-4" />
          <span>Open Missions & Apprenticeships</span>
        </div>
        <h3 className="text-2xl font-semibold text-white tracking-tight">
          Build the next era of digital computing with us.
        </h3>
        <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
          We are an asynchronous, high-trust studio of self-directed specialists. No bureaucracy, no pointless meetings—just pristine engineering, generous compensation, and deep creative freedom.
        </p>
      </div>

      {/* Roles List */}
      <div className="space-y-4">
        {roles.map((role) => (
          <div
            key={role.id}
            className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-orange-400/30 transition-all space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-mono text-orange-400 font-semibold">{role.type}</span>
                <h4 className="text-lg font-bold text-white mt-0.5">{role.title}</h4>
              </div>
              <div className="text-sm font-mono font-bold text-emerald-400 sm:text-right">
                {role.comp}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300">{role.desc}</p>

            <div className="space-y-1.5 pt-2">
              <span className="text-[11px] font-mono uppercase text-slate-500">Core Proficiencies</span>
              <div className="flex flex-wrap gap-2">
                {role.requirements.map((req, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-slate-300"
                  >
                    • {req}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">MISSION ID: #{role.id.toUpperCase()}</span>
              {appliedRole === role.id ? (
                <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Initiated via Uplink</span>
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setAppliedRole(role.id);
                    onNavigateToContact();
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold text-xs transition-all cursor-pointer shadow-[0_0_15px_rgba(251,146,60,0.3)]"
                >
                  <span>Apply for Mission</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
