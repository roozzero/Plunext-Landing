import React, { useState, useEffect, useRef } from 'react';
import { FlaskConical, Play, RotateCcw, Sparkles, Terminal, Activity } from 'lucide-react';

export const PortfolioModalContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'particles' | 'matrix' | 'waves'>('particles');

  // Interactive Particle Canvas Ref
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particleCount, setParticleCount] = useState<number>(140);
  const [chaosMode, setChaosMode] = useState<boolean>(false);

  useEffect(() => {
    if (activeTab !== 'particles') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = 320);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }> = [];

    const colors = ['#f472b6', '#38bdf8', '#818cf8', '#34d399', '#fbbf24'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (chaosMode ? 3.5 : 1.2),
        vy: (Math.random() - 0.5) * (chaosMode ? 3.5 : 1.2),
        radius: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.7 + 0.3,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      // Emit explosion of particles
      for (const p of particles) {
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180 && dist > 0) {
          const force = (180 - dist) / 15;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);

    const render = () => {
      ctx.fillStyle = 'rgba(10, 11, 16, 0.28)';
      ctx.fillRect(0, 0, width, height);

      // Draw faint connections between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 65) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(244, 114, 182, ${0.18 * (1 - dist / 65)})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      for (const p of particles) {
        // Mouse gravity / repulsion
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100 && dist > 0) {
          const repulse = (100 - dist) / 120;
          p.vx += (dx / dist) * repulse;
          p.vy += (dy / dist) * repulse;
        }

        // Friction
        p.vx *= 0.985;
        p.vy *= 0.985;

        p.x += p.vx;
        p.y += p.vy;

        // Bounce on borders
        if (p.x < 0) {
          p.x = 0;
          p.vx *= -1;
        }
        if (p.x > width) {
          p.x = width;
          p.vx *= -1;
        }
        if (p.y < 0) {
          p.y = 0;
          p.vy *= -1;
        }
        if (p.y > height) {
          p.y = height;
          p.vy *= -1;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
    };
  }, [activeTab, particleCount, chaosMode]);

  // Matrix Hex Decryptor state
  const [matrixText, setMatrixText] = useState<string>('SYNAPSE PROTOCOL: ACTIVE');
  const [isDecrypting, setIsDecrypting] = useState<boolean>(false);

  const runDecryption = () => {
    setIsDecrypting(true);
    const phrases = [
      'PLUNEX QUANTUM ENGINE // VERIFIED',
      'DISTRIBUTED TOPOLOGY: 8 ACTIVE NODES',
      'LATENCY TO EDGE: 1.48 MILLISECONDS',
      'SPATIAL SYNCHRONIZATION: LOCKED',
    ];
    const target = phrases[Math.floor(Math.random() * phrases.length)];
    const hex = '0123456789ABCDEF!@#$%^&*()_+';
    let iteration = 0;
    const interval = setInterval(() => {
      setMatrixText((_) =>
        target
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return target[index];
            }
            return hex[Math.floor(Math.random() * hex.length)];
          })
          .join('')
      );
      if (iteration >= target.length) {
        clearInterval(interval);
        setIsDecrypting(false);
      }
      iteration += 1 / 2;
    }, 30);
  };

  return (
    <div className="space-y-8 text-slate-200">
      {/* Intro */}
      <div className="p-6 rounded-2xl bg-pink-500/10 border border-pink-500/20">
        <div className="flex items-center gap-2 text-pink-400 text-xs font-mono uppercase tracking-wider mb-2">
          <FlaskConical className="w-4 h-4" />
          <span>Plunex Creative Technology Laboratory</span>
        </div>
        <h3 className="text-2xl font-semibold text-white tracking-tight">
          Experimental interactive prototypes & code sandboxes.
        </h3>
        <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
          Before taking concepts to enterprise production, our team investigates edge-of-browser rendering, fluid physics simulations, and generative math in our R&D lab.
        </p>
      </div>

      {/* Lab Tabs */}
      <div className="flex items-center gap-2 border-b border-white/[0.08] pb-4">
        {[
          { id: 'particles', label: '01. Interactive Quantum Particles' },
          { id: 'matrix', label: '02. Cryptographic Hex Decryption' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              activeTab === tab.id
                ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40 shadow-[0_0_15px_rgba(244,114,182,0.25)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Particle Playground */}
      {activeTab === 'particles' && (
        <div className="space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-pink-500/30 bg-[#090b10] shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            <canvas ref={canvasRef} className="w-full block cursor-crosshair" />
            <div className="absolute top-3 left-4 pointer-events-none flex items-center gap-2 text-[11px] font-mono text-pink-400">
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
              <span>INTERACTIVE CANVAS · HOVER TO ATTRACT · CLICK FOR ENERGY SHOCKWAVE</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400">Particle Density:</span>
              <div className="flex items-center gap-1.5">
                {[80, 140, 240].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setParticleCount(count)}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                      particleCount === count
                        ? 'bg-pink-500 text-white font-bold'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setChaosMode(!chaosMode)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                  chaosMode
                    ? 'bg-pink-500/25 border-pink-400 text-pink-300'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {chaosMode ? 'Chaos Velocity: ON' : 'Standard Gravity'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Hex Decryption */}
      {activeTab === 'matrix' && (
        <div className="p-7 rounded-2xl bg-black/50 border border-white/[0.08] space-y-6 font-mono">
          <div className="flex items-center justify-between text-xs text-pink-400 border-b border-white/[0.08] pb-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>TERMINAL // QUANTUM_KEY_DECRYPTOR</span>
            </div>
            <span className="text-slate-500">HEX_CYPHER_v4.2</span>
          </div>

          <div className="p-5 rounded-xl bg-black/80 border border-pink-500/30 text-center">
            <div className="text-xs text-slate-500 mb-2">// REAL-TIME STREAM DECODER</div>
            <div className="text-xl sm:text-2xl font-bold text-pink-300 tracking-wider break-all min-h-[40px] flex items-center justify-center">
              {matrixText}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={runDecryption}
              disabled={isDecrypting}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-pink-500 hover:bg-pink-600 disabled:opacity-50 text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(244,114,182,0.35)] cursor-pointer"
            >
              <RotateCcw className={`w-4 h-4 ${isDecrypting ? 'animate-spin' : ''}`} />
              <span>{isDecrypting ? 'Decrypting Stream...' : 'Run New Decryption Cycle'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
