import React, { useState } from 'react';
import { Layers, ExternalLink, ChevronDown, ChevronUp, Cpu, Sparkles, Shield, Activity } from 'lucide-react';

export const ProjectsModalContent: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [expandedProject, setExpandedProject] = useState<string | null>('nexus');

  const projects = [
    {
      id: 'nexus',
      title: 'NexusOS: 3D Spatial Canvas for Distributed Teams',
      client: 'Synthetix Systems / Swiss Telecom',
      category: 'spatial',
      tagline: 'A browser-based WebGL desktop operating environment with infinite collaborative canvas.',
      metrics: [
        { label: 'Rendering Latency', val: '< 8ms (120 FPS)' },
        { label: 'Active Daily Seats', val: '45,000+' },
        { label: 'Bandwidth Overhead', val: '-68% delta' },
      ],
      stack: ['Three.js', 'WebGPU Shaders', 'WebSockets', 'Rust WASM', 'Tailwind'],
      highlights: [
        'Proprietary spatial scene graph running 100,000+ interactive nodes simultaneously without frame drops.',
        'Zero-latency multi-cursor state broadcast utilizing client-side dead reckoning algorithms.',
        'Seamless viewport zoom transitions from micro-component level to planetary network view.',
      ],
      color: 'emerald',
    },
    {
      id: 'aura',
      title: 'Aura Intelligence: Autonomous Multi-Agent Trading Pipeline',
      client: 'Aethelgard Quantitative Asset Management',
      category: 'ai',
      tagline: 'Multi-model agentic decision tree analyzing real-time order books and regulatory disclosures.',
      metrics: [
        { label: 'Daily Simulated Volume', val: '$4.2B USD' },
        { label: 'Reasoning Execution', val: '140ms avg' },
        { label: 'Decision Accuracy', val: '99.4%' },
      ],
      stack: ['Gemini 2.5 Pro', 'TypeScript Core', 'Vector Index', 'Python Edge', 'TimescaleDB'],
      highlights: [
        'Autonomous validation loops checking hallucination bounds before simulated order execution.',
        'Full cryptographic audit trail preserving every intermediate reasoning token for SEC compliance.',
        'Dynamic tool integration connecting live Bloomberg terminal data with real-time risk calculators.',
      ],
      color: 'sky',
    },
    {
      id: 'hyperion',
      title: 'Hyperion Orbit: Satellite Fleet Telemetry & Defense Visualizer',
      client: 'Celestia Aerospace Consortium',
      category: 'enterprise',
      tagline: 'Real-time orbital tracking and collision prediction for 4,200 low-earth orbit assets.',
      metrics: [
        { label: 'Tracked Assets', val: '4,280 LEO' },
        { label: 'Collision Warnings', val: '0 Missed' },
        { label: 'Global Edge Sync', val: '42 PoPs' },
      ],
      stack: ['CesiumJS', 'Distributed Golang', 'Kafka Event Mesh', 'Redis Geo', 'React 19'],
      highlights: [
        'Sub-second trajectory extrapolation calculating solar radiation drag and atmospheric friction.',
        'Air-gapped tactical display modes optimized for high-stress defense operations centers.',
        'Fault-tolerant offline fallback maintaining local orbital ephemeris tables during loss-of-signal.',
      ],
      color: 'amber',
    },
    {
      id: 'vortex',
      title: 'Vortex Studio: Generative Real-time Audiovisual Instrument',
      client: 'Sonar Experimental Festival & MOMA PS1',
      category: 'creative',
      tagline: 'Interactive sound-to-geometry synthesizer allowing audiences to manipulate acoustic fluid dynamics.',
      metrics: [
        { label: 'Interactive Visitors', val: '180,000' },
        { label: 'Audio Latency', val: '2.1ms WebAudio' },
        { label: 'Press Features', val: 'Pitchfork, Wired' },
      ],
      stack: ['Web Audio API', 'GLSL Fluid Dynamics', 'Compute Shaders', 'Touch Events'],
      highlights: [
        'Fourier transform harmonic analysis mapped directly into real-time Navier-Stokes fluid simulations.',
        'Multi-touch mobile support allowing up to 10 simultaneous resonance nodes on smartphones.',
        'Awarded Site of the Month on Awwwards and RedDot Best of the Best 2025.',
      ],
      color: 'rose',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="space-y-8 text-slate-200">
      {/* Intro */}
      <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-2">
          <Layers className="w-4 h-4" />
          <span>Case Studies & Production Deployments</span>
        </div>
        <h3 className="text-2xl font-semibold text-white tracking-tight">
          Selected works engineered to redefine industry standards.
        </h3>
        <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
          Every project is built from first principles. We do not use cookie-cutter boilerplates; each solution is engineered for performance, resilience, and aesthetic permanence.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.08] pb-4">
        {[
          { id: 'all', label: 'All Works (4)' },
          { id: 'spatial', label: 'Spatial Web & 3D' },
          { id: 'ai', label: 'Autonomous AI' },
          { id: 'enterprise', label: 'Enterprise Systems' },
          { id: 'creative', label: 'Creative Tech' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setFilter(tab.id)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              filter === tab.id
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_12px_rgba(52,211,153,0.2)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="space-y-5">
        {filteredProjects.map((p) => {
          const isExpanded = expandedProject === p.id;
          return (
            <div
              key={p.id}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">{p.client}</span>
                  <h4 className="text-xl font-bold text-white mt-0.5 tracking-tight">{p.title}</h4>
                </div>
                <button
                  type="button"
                  onClick={() => setExpandedProject(isExpanded ? null : p.id)}
                  className="self-start sm:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 transition-colors cursor-pointer"
                >
                  <span>{isExpanded ? 'Collapse Blueprint' : 'Inspect Architecture'}</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              <p className="mt-3 text-slate-300 text-sm leading-relaxed">{p.tagline}</p>

              {/* Metrics row */}
              <div className="grid grid-cols-3 gap-3 mt-4 p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
                {p.metrics.map((m, idx) => (
                  <div key={idx}>
                    <div className="text-xs font-mono font-bold text-emerald-400">{m.val}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="mt-4 flex flex-wrap items-center gap-1.5">
                {p.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Expandable Architecture Blueprint */}
              {isExpanded && (
                <div className="mt-5 pt-5 border-t border-white/[0.08] space-y-3">
                  <div className="text-xs font-mono uppercase text-emerald-400 tracking-wider flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Technical Architecture Highlights</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {p.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5 font-bold">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
