import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Shield, Mail, Terminal, Clock, MapPin, Sparkles } from 'lucide-react';

interface ContactModalProps {
  initialScope?: string;
}

export const ContactModalContent: React.FC<ContactModalProps> = ({ initialScope }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$50k - $100k',
    service: 'Autonomous AI & Spatial Web',
    message: initialScope ? `Scope proposal from Services Estimator:\n${initialScope}\n\nOur project goals:` : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Live clocks for global studio hubs
  const [times, setTimes] = useState({
    zurich: '',
    tokyo: '',
    sf: '',
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTimes({
        zurich: now.toLocaleTimeString('en-US', { timeZone: 'Europe/Zurich', hour: '2-digit', minute: '2-digit', hour12: false }),
        tokyo: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', hour12: false }),
        sf: now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', hour12: false }),
      });
    };
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please provide your name, valid work email, and brief project vision.');
      return;
    }
    setError(null);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="space-y-8 text-slate-200">
      {/* Intro */}
      <div className="p-6 rounded-2xl bg-teal-500/10 border border-teal-500/20">
        <div className="flex items-center gap-2 text-teal-400 text-xs font-mono uppercase tracking-wider mb-2">
          <Terminal className="w-4 h-4" />
          <span>Encrypted Direct Terminal // Uplink</span>
        </div>
        <h3 className="text-2xl font-semibold text-white tracking-tight">
          Initialize collaboration with Plunex Studio.
        </h3>
        <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
          We take on a limited number of flagship client projects each quarter to preserve our intense standard of engineering craft. Let’s discuss your vision.
        </p>
      </div>

      {/* Global Timezones Hub Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { city: 'Zurich Hub', tz: 'CET (UTC+2)', time: times.zurich, ping: '2ms' },
          { city: 'Tokyo Studio', tz: 'JST (UTC+9)', time: times.tokyo, ping: '12ms' },
          { city: 'San Francisco', tz: 'PST (UTC-7)', time: times.sf, ping: '8ms' },
        ].map((hub, idx) => (
          <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-teal-400" />
                <span>{hub.city}</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono mt-0.5">{hub.tz}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold font-mono text-teal-300">{hub.time || '12:00'}</div>
              <div className="text-[10px] text-emerald-400 font-mono flex items-center justify-end gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>{hub.ping}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Form or Success State */}
      {isSubmitted ? (
        <div className="p-8 rounded-2xl bg-teal-950/30 border border-teal-400/40 text-center space-y-4 shadow-[0_0_40px_rgba(45,212,191,0.2)]">
          <div className="w-14 h-14 mx-auto rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-bold text-white tracking-tight">Transmission Acknowledged</h4>
          <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
            Your encrypted project packet has been routed to our founding partners. We review every submission within 24 standard hours.
          </p>
          <div className="text-xs font-mono text-teal-400 pt-2">
            TRANSMISSION_HASH: {Math.random().toString(36).substring(2, 12).toUpperCase()}
          </div>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                email: '',
                company: '',
                budget: '$50k - $100k',
                service: 'Autonomous AI & Spatial Web',
                message: '',
              });
            }}
            className="mt-4 px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono text-white transition-colors cursor-pointer"
          >
            Send Another Dispatch
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-5">
          {error && (
            <div className="p-3 rounded-lg bg-rose-500/20 border border-rose-500/40 text-xs font-mono text-rose-300">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Elena Rostova"
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-teal-400/60 focus:ring-1 focus:ring-teal-400/40 transition-all font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">Corporate / Work Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="elena@venture.com"
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-teal-400/60 focus:ring-1 focus:ring-teal-400/40 transition-all font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">Company / Venture Name</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Aethelgard Labs"
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-teal-400/60 focus:ring-1 focus:ring-teal-400/40 transition-all font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">Project Budget Band</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#0a0d14] border border-white/10 text-white text-sm focus:outline-none focus:border-teal-400/60 focus:ring-1 focus:ring-teal-400/40 transition-all font-sans cursor-pointer"
              >
                <option value="$25k - $50k">$25k - $50k (Focused Sprint)</option>
                <option value="$50k - $100k">$50k - $100k (Standard Platform)</option>
                <option value="$100k - $250k">$100k - $250k (Flagship Architecture)</option>
                <option value="$250k+">$250k+ (Enterprise Multi-Agent Mesh)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">Project Vision & Requirements *</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe your technical objectives, target timeline, or architectural challenges..."
              className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-teal-400/60 focus:ring-1 focus:ring-teal-400/40 transition-all font-sans resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <Shield className="w-3.5 h-3.5 text-teal-400" />
              <span>END-TO-END TLS 1.3 ENCRYPTION // ZERO-SPAM GUARANTEE</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 disabled:opacity-50 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(45,212,191,0.35)] cursor-pointer"
            >
              <Send className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
              <span>{isSubmitting ? 'Routing Uplink...' : 'Transmit Inquiry'}</span>
            </button>
          </div>
        </form>
      )}

      {/* Alternative direct contacts */}
      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-3">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-teal-400" />
          <span>DIRECT ENCRYPTED INBOX:</span>
          <span className="text-white">uplink@plunex.studio</span>
        </div>
        <div className="text-slate-500">
          PGP: 4A89 F219 B34D 01E6
        </div>
      </div>
    </div>
  );
};
