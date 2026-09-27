import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, ArrowLeft, ArrowRight, Share2, Check } from 'lucide-react';

export const BlogModalContent: React.FC = () => {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const articles = [
    {
      id: 'post-flat-web',
      title: 'The Post-Flat Web: Designing for Spatial Autonomous Agents',
      date: 'Sep 18, 2026',
      readTime: '6 min read',
      author: 'Kaori Takahashi',
      category: 'Interface Philosophy',
      summary: 'Why traditional rectangular cards and 2D scroll containers are failing modern cognitive models, and how multi-dimensional orbital topologies restore visual orientation.',
      content: `The modern web interface has stagnated inside a 15-year-old grid paradigm. We build flat rectangular cards, stack them into vertical flexboxes, and expect users to scroll endlessly through uniform grey containers.

When artificial intelligence entered the ecosystem, most platforms simply wedged a 360px chat drawer onto the right side of the screen. This is a cognitive failure.

### The Spatial Synapse Paradigm

At Plunex, we advocate for the Post-Flat Web. In an ecosystem where autonomous agents operate concurrently on hundreds of background streams, the human user requires an orientation hub—a visual anchor that represents connections, relationships, and priorities spatially.

By treating the viewport as a living network with orbital gravitation:
1. Core priorities occupy the gravitational center.
2. Peripheral or specialized capabilities orbit with predictable frequency.
3. Information expands along connected filaments rather than popping up as disorienting disconnected modals.

This preserves cognitive spatial memory. When users return to the interface, their biological spatial cortex already knows where systems reside in relation to the center.`,
    },
    {
      id: 'zero-latency-multiagent',
      title: 'Zero-Latency State Synchronization in Multi-Agent Workflows',
      date: 'Aug 29, 2026',
      readTime: '8 min read',
      author: 'Dr. Valerius Vance',
      category: 'Distributed Systems',
      summary: 'Architecting sub-millisecond event streams for real-time collaboration between human operators and autonomous background workers.',
      content: `When three autonomous reasoning agents and two human engineers collaborate inside the same spatial workspace, standard polling or naive REST request cycles create unbearable friction.

### Deterministic Event Replay & Conflict Resolution

We implemented a hybrid CRDT (Conflict-free Replicated Data Type) layered on top of a WebAssembly-compiled state kernel. Rather than transmitting complete UI states over the wire, client runtimes exchange compact mathematical deltas (delta-CRDTs) over binary WebSockets.

Key architectural breakthroughs:
- **Client-Side Speculative Execution**: The browser calculates anticipated agent outcomes immediately, smoothing micro-interactions to 120 FPS.
- **Rollback Sandboxes**: If an agent revises a decision tree, only the divergent subtree is pruned, eliminating jarring screen reflows.
- **Sub-5ms Sync**: Across trans-Atlantic fiber routes, our distributed edge relays achieve complete state convergence in under 18ms.`,
    },
    {
      id: 'resilient-anti-fragile',
      title: 'Anti-Fragile Systems Architecture: Lessons from 100M Concurrency',
      date: 'Jul 14, 2026',
      readTime: '5 min read',
      author: 'Marcus Chen',
      category: 'Engineering',
      summary: 'How to build web systems that actually benefit from unexpected traffic surges and model API latency degradations.',
      content: `Distributed failure is inevitable. Third-party model providers encounter rate limits, transatlantic cables suffer degradation, and viral traffic surges spike baseline loads by 1000%.

Fragile architectures crash. Robust architectures resist until they snap. But anti-fragile architectures degrade gracefully into secondary operational modes.

In this dispatch, we share our production architectural playbook for hierarchical fallback circuits, synthetic semantic caching, and client-side offline autonomy.`,
    },
  ];

  const selectedArticle = articles.find((a) => a.id === selectedArticleId);

  const handleShare = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8 text-slate-200">
      {/* Intro */}
      <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
        <div className="flex items-center gap-2 text-purple-400 text-xs font-mono uppercase tracking-wider mb-2">
          <BookOpen className="w-4 h-4" />
          <span>Signals & Dispatches</span>
        </div>
        <h3 className="text-2xl font-semibold text-white tracking-tight">
          Field notes on spatial systems, agents & interface craft.
        </h3>
        <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
          Unfiltered technical reflections and research papers written directly by our studio engineers and designers.
        </p>
      </div>

      {selectedArticle ? (
        // Full Article Reader View
        <div className="space-y-6">
          <button
            type="button"
            onClick={() => setSelectedArticleId(null)}
            className="flex items-center gap-2 text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Dispatches</span>
          </button>

          <div className="p-7 sm:p-9 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-3">
                <span className="px-2 py-0.5 rounded bg-purple-500/15 border border-purple-400/25 text-purple-300">
                  {selectedArticle.category}
                </span>
                <span>·</span>
                <span>{selectedArticle.date}</span>
                <span>·</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {selectedArticle.title}
              </h2>
              <div className="text-xs text-slate-400 mt-2 font-mono">Dispatched by {selectedArticle.author}</div>
            </div>

            <div className="h-[1px] bg-white/[0.08]" />

            <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line font-sans">
              {selectedArticle.content}
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">DISPATCH #{selectedArticle.id.toUpperCase()}</span>
              <button
                type="button"
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-purple-300 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied' : 'Share Dispatch'}</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        // List of Articles
        <div className="space-y-4">
          {articles.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticleId(art.id)}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-400/30 transition-all cursor-pointer group"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-2">
                <span className="text-purple-400">{art.category}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-500" />
                  <span>{art.date}</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span>{art.readTime}</span>
                </span>
              </div>

              <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                {art.title}
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">{art.summary}</p>

              <div className="mt-4 flex items-center gap-1 text-xs font-mono text-purple-400 group-hover:translate-x-1 transition-transform">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
