import React from 'react';
import { Users, Globe, ExternalLink, Code2, Award, Terminal } from 'lucide-react';

export const TeamModalContent: React.FC<{ onNavigateToContact: () => void }> = ({ onNavigateToContact }) => {
  const team = [
    {
      name: 'Dr. Valerius Vance',
      role: 'Founding Partner & Chief Systems Architect',
      location: 'Zurich (UTC+2)',
      bio: 'Ex-CERN distributed systems researcher. Specializes in sub-millisecond asynchronous state protocols, Rust WASM kernels, and deterministic execution engines.',
      skills: ['Distributed Topology', 'Rust / WASM', 'Consensus Algorithms'],
      avatar: 'V',
    },
    {
      name: 'Kaori Takahashi',
      role: 'Creative Director & Spatial UX Lead',
      location: 'Tokyo (UTC+9)',
      bio: 'Pioneer of fluid interaction physics and generative WebGL shaders. Former lead interaction designer at teamLab and Sony Interactive Entertainment.',
      skills: ['GLSL Shaders', 'Three.js / WebGPU', 'Interaction Choreography'],
      avatar: 'K',
    },
    {
      name: 'Marcus Chen',
      role: 'Head of Autonomous Intelligence',
      location: 'San Francisco (UTC-7)',
      bio: 'Published author in multi-agent tool cognition and reasoning evaluations. Engineered LLM orchestration pipelines for Fortune 50 platforms.',
      skills: ['Agentic Memory', 'Gemini & Transformer Eval', 'Vector Mesh'],
      avatar: 'M',
    },
    {
      name: 'Soren Lindqvist',
      role: 'Principal Platform Engineer',
      location: 'Stockholm (UTC+2)',
      bio: 'Obsessed with high-throughput event loops, memory zero-copy networks, and fault-tolerant infrastructure design with 99.999% SLA requirements.',
      skills: ['Go', 'Kafka Event Mesh', 'Global Edge CDN', 'Linux eBPF'],
      avatar: 'S',
    },
  ];

  return (
    <div className="space-y-8 text-slate-200">
      {/* Intro */}
      <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider mb-2">
          <Users className="w-4 h-4" />
          <span>The Plunex Collective</span>
        </div>
        <h3 className="text-2xl font-semibold text-white tracking-tight">
          A tight-knit assembly of polymath engineers & digital artists.
        </h3>
        <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
          We operate as an unbundled studio of principal-level builders. When you partner with Plunex, you collaborate directly with the minds designing and coding your platform.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-amber-400/30 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-300 font-mono font-bold text-lg">
                {member.avatar}
              </div>
              <div>
                <h4 className="text-base font-semibold text-white group-hover:text-amber-300 transition-colors">
                  {member.name}
                </h4>
                <div className="text-xs text-amber-400 font-mono">{member.role}</div>
                <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                  <Globe className="w-3 h-3 text-slate-500" />
                  <span>{member.location}</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">{member.bio}</p>

            <div className="mt-4 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
              {member.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Callout */}
      <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-semibold text-white">Have a complex technical puzzle?</h4>
          <p className="text-xs text-slate-400 mt-0.5">Schedule a direct technical deep-dive with our founding engineers.</p>
        </div>
        <button
          type="button"
          onClick={onNavigateToContact}
          className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)] shrink-0 cursor-pointer"
        >
          Book Technical Session
        </button>
      </div>
    </div>
  );
};
