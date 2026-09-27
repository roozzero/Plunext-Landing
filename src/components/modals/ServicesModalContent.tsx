import React, { useState } from 'react';
import { Cpu, Layers, Sparkles, Shield, ArrowRight, Check, Calculator } from 'lucide-react';

interface ServicesModalProps {
  onSelectScopeForContact?: (scopeDetails: string) => void;
}

export const ServicesModalContent: React.FC<ServicesModalProps> = ({ onSelectScopeForContact }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['agents', 'spatial']);
  const [timeline, setTimeline] = useState<'accelerated' | 'standard' | 'enterprise'>('standard');

  const servicesList = [
    {
      id: 'agents',
      title: 'Autonomous AI & Agentic Orchestration',
      icon: Cpu,
      badge: 'Core Specialty',
      description: 'Production-ready multi-agent workflows, cognitive memory architectures, tool-use execution, and deterministic agent evaluation pipelines.',
      deliverables: ['Custom ReAct Agent Clusters', 'Streaming Semantic Vector Memory', 'Tool Execution Sandboxes', 'Latency-Optimized Inference Proxy'],
      estWeeks: 4,
    },
    {
      id: 'spatial',
      title: 'Spatial Web & Interactive 3D Canvases',
      icon: Layers,
      badge: 'Signature Visuals',
      description: 'WebGL, Three.js shaders, 60fps physics-driven web interfaces, and node-based interactive digital networks.',
      deliverables: ['Custom GLSL Shaders & Particles', 'Responsive 3D Scene Graphs', 'Fluid Pointer Interactivity', 'Adaptive Resolution Scaling'],
      estWeeks: 3,
    },
    {
      id: 'platform',
      title: 'High-Concurrency Distributed Cloud',
      icon: Shield,
      badge: 'Mission-Critical',
      description: 'Sub-millisecond WebSocket backbones, distributed event sourcing, serverless edge compute, and bulletproof infrastructure.',
      deliverables: ['Global WebSocket Mesh', 'Event-Sourced Redis/SQL Core', 'Zero-Downtime Migration Ops', 'Enterprise SOC2 Hardening'],
      estWeeks: 4,
    },
    {
      id: 'design',
      title: 'Bespoke Product Design & Brand Systems',
      icon: Sparkles,
      badge: 'End-to-End Craft',
      description: 'Anti-slop interface design, bespoke typography pairing, micro-interaction choreography, and cohesive brand design tokens.',
      deliverables: ['Design Token Architecture', 'Figma Production Kits', 'Micro-Interaction Blueprints', 'Design Constitution Docs'],
      estWeeks: 3,
    },
  ];

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const totalWeeks = selectedServices.reduce((sum, sId) => {
    const s = servicesList.find((item) => item.id === sId);
    return sum + (s?.estWeeks || 0);
  }, 0);

  const adjustedDuration =
    timeline === 'accelerated'
      ? Math.max(3, Math.round(totalWeeks * 0.7))
      : timeline === 'enterprise'
      ? Math.round(totalWeeks * 1.3)
      : totalWeeks;

  const handleApplyScope = () => {
    const names = selectedServices
      .map((sId) => servicesList.find((item) => item.id === sId)?.title)
      .filter(Boolean)
      .join(', ');
    const note = `Selected Services: [${names}] | Timeline Target: ${timeline.toUpperCase()} (${adjustedDuration} Weeks Est)`;
    if (onSelectScopeForContact) {
      onSelectScopeForContact(note);
    }
  };

  return (
    <div className="space-y-10 text-slate-200">
      {/* Intro */}
      <div className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-2">
          <Cpu className="w-4 h-4" />
          <span>Full-Spectrum Capabilities</span>
        </div>
        <h3 className="text-2xl font-semibold text-white tracking-tight">
          Engineering capabilities tailored for breakthrough products.
        </h3>
        <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
          From concept to high-scale global launch, we design and construct every layer of your application with unyielding craft and mathematical reliability.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {servicesList.map((service) => {
          const isSelected = selectedServices.includes(service.id);
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              onClick={() => toggleService(service.id)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer select-none ${
                isSelected
                  ? 'bg-indigo-950/30 border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.15)] ring-1 ring-indigo-500/40'
                  : 'bg-white/[0.02] border-white/[0.08] hover:border-white/20'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-400/25 flex items-center justify-center text-indigo-400">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                    {service.badge}
                  </span>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-indigo-500 border-indigo-400 text-white'
                        : 'border-white/20 bg-transparent text-transparent'
                    }`}
                  >
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-white mt-4">{service.title}</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">{service.description}</p>

              <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2">
                <span className="text-[11px] font-mono uppercase text-slate-400">Key Deliverables</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                  {service.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="text-indigo-400">▪</span>
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Scope & Timeline Estimator */}
      <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-2">
          <Calculator className="w-4 h-4" />
          <span>Interactive Architecture & Scope Calculator</span>
        </div>
        <h4 className="text-lg font-semibold text-white">Target Timeline & Execution Speed</h4>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Adjust parameters to calculate estimated sprint cycles and architecture blueprint delivery.
        </p>

        <div className="grid grid-cols-3 gap-3 mt-4">
          {[
            { id: 'accelerated', label: 'Sprint Express', desc: 'Dedicated dual-lead pod' },
            { id: 'standard', label: 'Standard Cadence', desc: 'Balanced phased rollout' },
            { id: 'enterprise', label: 'Enterprise Deep', desc: 'Full compliance & audit' },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTimeline(t.id as any)}
              className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                timeline === t.id
                  ? 'bg-indigo-500/20 border-indigo-400/50 text-white'
                  : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:text-white'
              }`}
            >
              <div className="text-xs font-semibold">{t.label}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{t.desc}</div>
            </button>
          ))}
        </div>

        {/* Estimation Output Bar */}
        <div className="mt-6 p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-indigo-300">
              Selected Modules: <span className="text-white font-bold">{selectedServices.length}</span> · Estimated Delivery:
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-0.5">
              ~{adjustedDuration} Weeks <span className="text-xs font-normal text-slate-400">to production launch</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleApplyScope}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-xs sm:text-sm font-semibold transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] cursor-pointer"
          >
            <span>Proceed with this Scope</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
