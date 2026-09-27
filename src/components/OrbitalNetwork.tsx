import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Layers,
  Cpu,
  FlaskConical,
  Users,
  BookOpen,
  Send,
  Briefcase,
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  Compass,
  Radio,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { NetworkNode } from '../types/network';
import { sound } from '../utils/sound';

interface OrbitalNetworkProps {
  nodes: NetworkNode[];
  onSelectNode: (nodeId: string) => void;
  activeNodeId: string | null;
  focusedNodeId: string | null;
}

interface Particle {
  progress: number; // 0 to 1 along line
  speed: number;
  size: number;
  alpha: number;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  sparkles: Sparkles,
  layers: Layers,
  cpu: Cpu,
  flask: FlaskConical,
  users: Users,
  book: BookOpen,
  send: Send,
  briefcase: Briefcase,
};

export const OrbitalNetwork: React.FC<OrbitalNetworkProps> = ({
  nodes,
  onSelectNode,
  activeNodeId,
  focusedNodeId,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Orbital state
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [orbitSpeedMultiplier, setOrbitSpeedMultiplier] = useState<number>(1);
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(true);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  // Shockwave state
  const [shockwaves, setShockwaves] = useState<Array<{ radius: number; maxRadius: number; alpha: number }>>([]);

  // Store live node angles & positions
  const nodeAnglesRef = useRef<Record<string, number>>(
    nodes.reduce((acc, node) => {
      acc[node.id] = node.initialAngle;
      return acc;
    }, {} as Record<string, number>)
  );

  const nodePositionsRef = useRef<Record<string, { x: number; y: number }>>({});
  const [nodePositions, setNodePositions] = useState<Record<string, { x: number; y: number }>>({});

  // Line particles state (photons traveling from center to node)
  const particlesRef = useRef<Record<string, Particle[]>>(
    nodes.reduce((acc, node) => {
      // 3 particles per connection
      acc[node.id] = [
        { progress: 0.15, speed: 0.0035, size: 2.5, alpha: 0.8 },
        { progress: 0.5, speed: 0.004, size: 2.0, alpha: 0.7 },
        { progress: 0.82, speed: 0.003, size: 2.2, alpha: 0.6 },
      ];
      return acc;
    }, {} as Record<string, Particle[]>)
  );

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches) {
        setIsPlaying(false);
      }
    }
  }, []);

  // Sync external focusedNodeId
  useEffect(() => {
    if (focusedNodeId) {
      setHoveredNodeId(focusedNodeId);
      // Auto un-focus after 4 seconds
      const timer = setTimeout(() => {
        setHoveredNodeId((curr) => (curr === focusedNodeId ? null : curr));
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [focusedNodeId]);

  // Trigger shockwave from center
  const triggerShockwave = useCallback(() => {
    sound.playShockwave();
    setShockwaves((prev) => [
      ...prev,
      { radius: 60, maxRadius: Math.max(window.innerWidth, window.innerHeight) * 0.7, alpha: 0.9 },
    ]);
  }, []);

  // Main Animation Loop
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min(time - lastTime, 40); // cap max delta to prevent jumps
      lastTime = time;

      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (!container || !canvas) {
        animId = requestAnimationFrame(render);
        return;
      }

      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Handle HiDPI
      const dpr = window.devicePixelRatio || 1;
      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Adaptive base orbit radius based on viewport
      const minDimension = Math.min(width, height);
      const isMobile = width < 640;
      const isTablet = width >= 640 && width < 1024;

      const baseRadius = isMobile
        ? minDimension * 0.34
        : isTablet
        ? minDimension * 0.38
        : minDimension * 0.40;

      // Draw faint background celestial orbit tracks
      ctx.lineWidth = 1;
      const trackRadii = [baseRadius * 0.85, baseRadius * 1.0, baseRadius * 1.18];
      trackRadii.forEach((r, idx) => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.strokeStyle = idx === 1 ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.025)';
        ctx.setLineDash([4, 8]);
        ctx.stroke();
      });
      ctx.setLineDash([]); // reset dash

      // Calculate node positions
      const newPositions: Record<string, { x: number; y: number }> = {};

      nodes.forEach((node, idx) => {
        const isHovered = hoveredNodeId === node.id;
        const currentAngle = nodeAnglesRef.current[node.id] || 0;

        // Advance angle if not paused or hovered
        if (isPlaying && !isHovered && !activeNodeId) {
          const deltaAngle = node.orbitSpeed * orbitSpeedMultiplier * dt;
          nodeAnglesRef.current[node.id] = currentAngle + deltaAngle;
        }

        const angle = nodeAnglesRef.current[node.id];
        const radius = baseRadius * node.orbitRadiusRatio;

        // Elliptical coordinate calculation with tilt for 3D depth
        const cosAngle = Math.cos(angle);
        const sinAngle = Math.sin(angle);

        // Subtle 3D perspective tilt
        const tiltX = cosAngle * radius;
        const tiltY = sinAngle * (radius * 0.82) + Math.sin(time * 0.0015 + idx) * 5; // gentle floating bobbing

        const nodeX = centerX + tiltX;
        const nodeY = centerY + tiltY;

        newPositions[node.id] = { x: nodeX, y: nodeY };
        nodePositionsRef.current[node.id] = { x: nodeX, y: nodeY };

        // Draw connection filament from center to node
        const isFocusedOrHovered = isHovered || focusedNodeId === node.id;
        const isOtherHovered = hoveredNodeId !== null && !isFocusedOrHovered;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(nodeX, nodeY);

        if (isFocusedOrHovered) {
          ctx.strokeStyle = node.accentColor;
          ctx.lineWidth = 2.2;
          ctx.shadowColor = node.accentColor;
          ctx.shadowBlur = 14;
        } else if (isOtherHovered) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
          ctx.lineWidth = 0.8;
          ctx.shadowBlur = 0;
        } else {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
          ctx.lineWidth = 1;
          ctx.shadowColor = node.accentColor;
          ctx.shadowBlur = 4;
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Update and draw traveling energy photons along connection line
        const nodeParticles = particlesRef.current[node.id] || [];
        nodeParticles.forEach((particle) => {
          // Accelerate photons if hovered
          const particleSpeed = isFocusedOrHovered
            ? particle.speed * 2.8
            : isPlaying
            ? particle.speed * orbitSpeedMultiplier
            : 0.0005;

          particle.progress += particleSpeed * (dt / 16);
          if (particle.progress > 1) {
            particle.progress = 0;
          }

          // Interpolated photon coordinate
          const px = centerX + (nodeX - centerX) * particle.progress;
          const py = centerY + (nodeY - centerY) * particle.progress;

          ctx.beginPath();
          ctx.arc(px, py, isFocusedOrHovered ? particle.size * 1.5 : particle.size, 0, Math.PI * 2);
          ctx.fillStyle = isFocusedOrHovered
            ? '#ffffff'
            : node.accentColor;
          ctx.shadowColor = node.accentColor;
          ctx.shadowBlur = isFocusedOrHovered ? 12 : 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      });

      // Render shockwaves
      setShockwaves((prev) => {
        return prev
          .map((sw) => {
            const newRadius = sw.radius + 12 * (dt / 16);
            const progress = newRadius / sw.maxRadius;
            const newAlpha = Math.max(0, 0.9 * (1 - progress));

            ctx.beginPath();
            ctx.arc(centerX, centerY, newRadius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(56, 189, 248, ${newAlpha})`;
            ctx.lineWidth = 2.5 * (1 - progress);
            ctx.shadowColor = '#38bdf8';
            ctx.shadowBlur = 15;
            ctx.stroke();
            ctx.shadowBlur = 0;

            return { ...sw, radius: newRadius, alpha: newAlpha };
          })
          .filter((sw) => sw.alpha > 0.02 && sw.radius < sw.maxRadius);
      });

      ctx.restore();

      // Sync React state for node DOM elements
      setNodePositions(newPositions);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [nodes, isPlaying, orbitSpeedMultiplier, hoveredNodeId, activeNodeId, focusedNodeId]);

  const handleNodeClick = (nodeId: string) => {
    sound.playChime();
    onSelectNode(nodeId);
  };

  const handleNodeHover = (nodeId: string) => {
    sound.playHover();
    setHoveredNodeId(nodeId);
  };

  const handleNodeLeave = () => {
    setHoveredNodeId(null);
  };

  const toggleAudio = () => {
    const nextMuted = !isAudioMuted;
    setIsAudioMuted(nextMuted);
    sound.setMuted(nextMuted);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[calc(100vh-80px)] min-h-[580px] overflow-hidden select-none"
    >
      {/* Dynamic Canvas Layer for Connection Filaments, Photons & Shockwaves */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10 w-full h-full"
      />

      {/* Atmospheric Starry & Cyber Dust Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 80px 80px, 80px 80px',
        }}
      />

      {/* ======================================================== */}
      {/* CENTRAL LOGO HUB (THE CORE NUCLEUS) */}
      {/* ======================================================== */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        style={{ pointerEvents: 'auto' }}
      >
        <button
          type="button"
          onClick={() => {
            triggerShockwave();
            onSelectNode('core');
          }}
          className="relative group focus:outline-none cursor-pointer"
          aria-label="Plunex Central Core Nucleus"
        >
          {/* Outermost Radar Ring with cardinal ticks */}
          <div className="absolute -inset-8 sm:-inset-10 rounded-full border border-sky-400/20 border-dashed animate-[spin_40s_linear_infinite] pointer-events-none" />

          {/* Secondary rotating counter-ring */}
          <div className="absolute -inset-4 sm:-inset-5 rounded-full border border-white/15 border-dotted animate-[spin_25s_linear_infinite_reverse] pointer-events-none" />

          {/* Ambient Breathing Glow Aura */}
          <div className="absolute -inset-3 sm:-inset-4 rounded-full bg-gradient-to-tr from-sky-500/30 via-indigo-500/20 to-teal-400/30 blur-xl opacity-80 group-hover:opacity-100 group-hover:blur-2xl transition-all duration-700 animate-pulse pointer-events-none" />

          {/* Central Logo Physical Glass Disc */}
          <div
            className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center p-3 text-center transition-all duration-300 transform group-hover:scale-105 shadow-[0_0_50px_rgba(56,189,248,0.35)]"
            style={{
              backgroundColor: 'rgba(24, 25, 36, 0.85)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1.5px solid rgba(255, 255, 255, 0.22)',
            }}
          >
            {/* Specular Rim Arc */}
            <div className="absolute inset-0 rounded-full border-t border-l border-white/50 pointer-events-none" />

            {/* Stylized Plunex Geometric Brand Emblem */}
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-sky-400 via-indigo-400 to-teal-300 shadow-[0_0_20px_rgba(56,189,248,0.5)] p-0.5">
              <div className="w-full h-full rounded-[10px] bg-[#12131c] flex items-center justify-center">
                {/* Cybernetic 'P' Star Emblem */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-sky-300"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                  <path d="m4.93 4.93 2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
            </div>

            {/* Brand Wordmark & Core Status */}
            <div className="mt-1 sm:mt-1.5 flex flex-col items-center">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-white uppercase font-sans">
                PLUNEX
              </span>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  CORE HUB
                </span>
              </div>
            </div>

            {/* Hover tooltip hint */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap px-2.5 py-1 rounded-md bg-black/80 border border-white/10 text-[10px] font-mono text-slate-300">
              Click to emit shockwave · Inspect telemetry
            </div>
          </div>
        </button>
      </div>

      {/* ======================================================== */}
      {/* ORBITING INTERACTIVE NODES */}
      {/* ======================================================== */}
      {nodes.map((node) => {
        const pos = nodePositions[node.id];
        if (!pos) return null;

        const isHovered = hoveredNodeId === node.id;
        const isDimmed = hoveredNodeId !== null && !isHovered;
        const IconComponent = ICON_MAP[node.iconName] || Sparkles;

        return (
          <div
            key={node.id}
            style={{
              position: 'absolute',
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              transform: 'translate(-50%, -50%)',
              zIndex: isHovered ? 40 : 25,
              opacity: isDimmed ? 0.35 : 1,
              filter: isDimmed ? 'grayscale(35%)' : 'none',
              transition: 'opacity 0.25s ease, filter 0.25s ease',
            }}
          >
            <div
              onMouseEnter={() => handleNodeHover(node.id)}
              onMouseLeave={handleNodeLeave}
              onClick={() => handleNodeClick(node.id)}
              className="relative group cursor-pointer"
            >
              {/* Node Outer Ambient Glow (Intensifies on hover) */}
              <div
                className="absolute -inset-2 rounded-full transition-all duration-300 pointer-events-none"
                style={{
                  backgroundColor: node.accentColor,
                  opacity: isHovered ? 0.45 : 0.12,
                  filter: isHovered ? 'blur(16px)' : 'blur(8px)',
                  transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                }}
              />

              {/* Node Glass Disc */}
              <div
                className="relative rounded-full flex flex-col items-center justify-center p-2 text-center transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
                style={{
                  width: isHovered ? '112px' : '82px',
                  height: isHovered ? '112px' : '82px',
                  backgroundColor: isHovered
                    ? 'rgba(28, 30, 44, 0.94)'
                    : 'rgba(22, 24, 34, 0.72)',
                  backdropFilter: 'blur(20px) saturate(160%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                  border: isHovered
                    ? `1.5px solid ${node.accentColor}`
                    : '1px solid rgba(255, 255, 255, 0.16)',
                  boxShadow: isHovered
                    ? `0 0 25px ${node.glowRgba}, inset 0 0 15px ${node.accentColor}25`
                    : '0 8px 30px rgba(0,0,0,0.5)',
                }}
              >
                {/* Thin specular border highlight */}
                <div className="absolute inset-0 rounded-full border-t border-white/30 pointer-events-none" />

                {/* Minimal Icon */}
                <div
                  className="rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    color: node.accentColor,
                    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                  }}
                >
                  <IconComponent className={isHovered ? 'w-5 h-5' : 'w-4 h-4'} />
                </div>

                {/* Node Title */}
                <span className="text-[11px] sm:text-xs font-semibold text-white tracking-tight mt-1 leading-tight px-1">
                  {node.label}
                </span>

                {/* Hover Details Micro-Content (Revealed on hover) */}
                {isHovered ? (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex flex-col items-center mt-1"
                  >
                    <span className="text-[9px] font-mono text-slate-300 font-medium">
                      {node.badge}
                    </span>
                    <span
                      className="text-[9px] font-mono mt-0.5 font-bold flex items-center gap-0.5"
                      style={{ color: node.accentColor }}
                    >
                      <span>Explore</span>
                      <ChevronRight className="w-2.5 h-2.5" />
                    </span>
                  </motion.div>
                ) : (
                  <span className="text-[9px] font-mono text-slate-400 mt-0.5">
                    {node.shortTitle}
                  </span>
                )}
              </div>

              {/* Expanded Floating Popover Card on Hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.94, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-56 p-3.5 rounded-2xl border shadow-[0_16px_40px_rgba(0,0,0,0.8)] z-50 pointer-events-none text-left"
                    style={{
                      backgroundColor: 'rgba(18, 19, 28, 0.95)',
                      borderColor: node.accentColor + '50',
                      backdropFilter: 'blur(24px)',
                      WebkitBackdropFilter: 'blur(24px)',
                    }}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                      <span className="text-white font-bold uppercase">{node.tagline}</span>
                      <span style={{ color: node.accentColor }}>{node.stat.value}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                      {node.description}
                    </p>
                    <div className="mt-2.5 pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono">
                      <span className="text-slate-400">CLICK TO LAUNCH MODAL</span>
                      <span style={{ color: node.accentColor }}>[ENTER]</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );
      })}

      {/* ======================================================== */}
      {/* FLOATING GLASS ORBITAL CONTROLS TOOLBAR (BOTTOM) */}
      {/* ======================================================== */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 px-3 py-1.5 rounded-2xl flex items-center gap-2 sm:gap-3 bg-[#181924]/80 backdrop-blur-2xl border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.65)] text-xs font-mono text-slate-300">
        {/* Play / Pause Orbit Motion */}
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? 'Pause orbital motion' : 'Resume orbital motion'}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl hover:bg-white/10 text-white transition-colors cursor-pointer"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5 text-sky-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
          <span className="hidden sm:inline">{isPlaying ? 'Freeze Orbit' : 'Resume Orbit'}</span>
        </button>

        <div className="h-4 w-[1px] bg-white/10" />

        {/* Orbit Speed Selector */}
        <div className="flex items-center gap-1">
          <span className="text-[11px] text-slate-500 hidden md:inline">Speed:</span>
          {[0.5, 1, 2].map((spd) => (
            <button
              key={spd}
              type="button"
              onClick={() => setOrbitSpeedMultiplier(spd)}
              className={`px-2 py-0.5 rounded-md text-[11px] transition-colors cursor-pointer ${
                orbitSpeedMultiplier === spd
                  ? 'bg-sky-500/25 text-sky-300 font-bold border border-sky-400/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {spd}x
            </button>
          ))}
        </div>

        <div className="h-4 w-[1px] bg-white/10" />

        {/* Audio Synthesizer Toggle */}
        <button
          type="button"
          onClick={toggleAudio}
          title={isAudioMuted ? 'Enable synthesized sound FX' : 'Mute synthesized sound FX'}
          className="flex items-center gap-1.5 px-2 py-1.5 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          {isAudioMuted ? (
            <VolumeX className="w-3.5 h-3.5 text-slate-500" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
          )}
          <span className="hidden sm:inline">{isAudioMuted ? 'Muted' : 'Audio FX On'}</span>
        </button>

        <div className="h-4 w-[1px] bg-white/10" />

        {/* Reset / Pulse Shockwave Button */}
        <button
          type="button"
          onClick={triggerShockwave}
          title="Emit network pulse shockwave"
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5 text-indigo-400" />
          <span className="hidden md:inline">Pulse Core</span>
        </button>
      </div>

      {/* System Telemetry Watermark */}
      <div className="absolute top-4 left-6 hidden lg:flex items-center gap-2 text-[11px] font-mono text-slate-500 pointer-events-none z-10">
        <Radio className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
        <span>TOPOLOGY: ORBITAL MESH · 8 NODES ONLINE</span>
      </div>

      <div className="absolute top-4 right-6 hidden lg:flex items-center gap-2 text-[11px] font-mono text-slate-500 pointer-events-none z-10">
        <span>FPS: 120 RAF</span>
        <span>·</span>
        <span>LATENCY: 0.8ms</span>
      </div>
    </div>
  );
};
