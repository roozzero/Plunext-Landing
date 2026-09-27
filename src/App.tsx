import React, { useState } from 'react';
import { Navbar } from './components/Navbar';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="relative min-h-screen text-white overflow-hidden font-['Plus_Jakarta_Sans',system-ui,-apple-system,sans-serif] select-none">
      {/* Cinematic atmospheric background matching the screenshot (dusky mountains & warm twilight sunset clouds) */}
      <div className="fixed inset-0 pointer-events-none bg-[#141215]">
        {/* Layered dusky twilight sunset glow */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 90% 60% at 85% 25%, rgba(185, 95, 45, 0.45), transparent 70%),
              radial-gradient(ellipse 80% 50% at 60% 40%, rgba(135, 60, 35, 0.35), transparent 60%),
              radial-gradient(ellipse 100% 70% at 20% 20%, rgba(85, 55, 65, 0.4), transparent 70%),
              radial-gradient(ellipse 120% 80% at 50% 10%, rgba(55, 45, 52, 0.9), transparent 80%),
              linear-gradient(to bottom, #1d191d 0%, #171418 35%, #100e12 100%)
            `,
          }}
        />

        {/* Soft dusky clouds and warm horizon glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[350px] bg-amber-700/20 blur-[130px] rounded-full" />
        <div className="absolute top-10 right-1/4 w-[500px] h-[300px] bg-orange-800/15 blur-[120px] rounded-full" />
        <div className="absolute top-0 left-0 w-[550px] h-[350px] bg-rose-950/25 blur-[140px] rounded-full" />
      </div>

      {/* The exact Frosted Glass Navbar matching the uploaded image */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={(tab) => setActiveTab(tab)}
      />
    </div>
  );
}
