import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { OrbitalNetwork } from './components/OrbitalNetwork';
import { NetworkModal } from './components/NetworkModal';
import { NETWORK_NODES } from './data/networkData';
import { sound } from './utils/sound';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('Home');
  const [activeModalNodeId, setActiveModalNodeId] = useState<string | null>(null);
  const [focusedNodeId, setFocusedNodeId] = useState<string | null>(null);
  const [prefilledScope, setPrefilledScope] = useState<string>('');

  // Handle selection from top navigation bar
  const handleNavSelect = (tabName: string) => {
    setActiveTab(tabName);

    if (tabName === 'Home') {
      setActiveModalNodeId(null);
      setFocusedNodeId(null);
      return;
    }

    const mapping: Record<string, string> = {
      About: 'about',
      Services: 'services',
      Projects: 'projects',
      Portfolio: 'portfolio',
      Team: 'team',
      Blog: 'blog',
      Contact: 'contact',
      Careers: 'careers',
      Core: 'core',
    };

    const targetNodeId = mapping[tabName];
    if (targetNodeId) {
      setFocusedNodeId(targetNodeId);
      setActiveModalNodeId(targetNodeId);
    }
  };

  // Handle clicking directly on an orbiting node or central core
  const handleNodeSelect = (nodeId: string) => {
    setActiveModalNodeId(nodeId);
    setFocusedNodeId(nodeId);

    // Sync corresponding top nav tab if applicable
    const reverseMapping: Record<string, string> = {
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      portfolio: 'Portfolio',
      team: 'Team',
      blog: 'Blog',
      contact: 'Contact',
      careers: 'Careers',
      core: 'Home',
    };
    if (reverseMapping[nodeId]) {
      setActiveTab(reverseMapping[nodeId]);
    }
  };

  const handleModalClose = () => {
    setActiveModalNodeId(null);
  };

  return (
    <div className="relative min-h-screen text-slate-100 overflow-hidden font-['Plus_Jakarta_Sans',system-ui,-apple-system,sans-serif] bg-[#07080d] select-none">
      {/* Deep Atmospheric Cosmic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Deep ambient galaxy radial blooms */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 90% 70% at 50% 50%, rgba(20, 24, 38, 0.75), transparent 75%),
              radial-gradient(ellipse 70% 50% at 80% 20%, rgba(56, 189, 248, 0.08), transparent 60%),
              radial-gradient(ellipse 70% 50% at 20% 80%, rgba(129, 140, 248, 0.07), transparent 60%),
              radial-gradient(ellipse 60% 40% at 50% 90%, rgba(45, 212, 191, 0.06), transparent 70%),
              linear-gradient(to bottom, #090a12 0%, #07080e 45%, #05060a 100%)
            `,
          }}
        />

        {/* Soft celestial nebular clouds */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[500px] bg-indigo-600/10 blur-[160px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-400/[0.04] blur-[180px] rounded-full" />
      </div>

      {/* Top Glassmorphism Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleNavSelect}
      />

      {/* Main Orbital Network Viewport */}
      <main className="relative z-10 pt-20 sm:pt-24 flex flex-col items-center justify-center min-h-screen">
        <OrbitalNetwork
          nodes={NETWORK_NODES}
          onSelectNode={handleNodeSelect}
          activeNodeId={activeModalNodeId}
          focusedNodeId={focusedNodeId}
        />
      </main>

      {/* Master Interactive Modal Expanding from Nodes */}
      <NetworkModal
        activeNodeId={activeModalNodeId}
        nodes={NETWORK_NODES}
        onClose={handleModalClose}
        onNavigateToSection={(sectionId) => {
          setActiveModalNodeId(sectionId);
          setFocusedNodeId(sectionId);
        }}
        prefilledScope={prefilledScope}
        setPrefilledScope={setPrefilledScope}
      />
    </div>
  );
}
