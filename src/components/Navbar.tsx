import React, { useState } from 'react';
import { ShieldCheck, Cpu, Terminal, ChevronRight, Menu, X, Activity, HardDrive } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onNavigateToSandbox: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onNavigateToSandbox }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#080C14]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand & Badge */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-cyan-500/40 bg-slate-900 p-0.5 shadow-lg group-hover:border-cyan-400 transition-colors">
              <img 
                src="./logo.jpg" 
                alt="NOV4 Industrial Intelligence Logo" 
                className="w-full h-full object-cover rounded-md"
                onError={(e) => {
                  // Fallback geometric glyph if image not ready
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-cyan-500/10 pointer-events-none group-hover:bg-cyan-500/0 transition-colors"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xl font-bold tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                  NOV<span className="text-cyan-400">4</span>
                </span>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  v2.8-AIRGAP
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium tracking-tight">
                Local-First Industrial Intelligence
              </span>
            </div>
          </a>

          {/* Plant Network Status Indicator */}
          <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-slate-800 text-[11px] font-mono text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300 font-medium">OT NETWORK:</span>
            <span className="text-emerald-400">100% AIR-GAPPED</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-wider font-semibold text-slate-300">
          <a href="#modules" className="hover:text-cyan-400 transition-colors">Platform Modules</a>
          <a href="#architecture" className="hover:text-cyan-400 transition-colors">Architecture & Security</a>
          <button 
            onClick={onNavigateToSandbox}
            className="flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 transition-colors px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 animate-pulse"
          >
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Simulator</span>
            <span className="bg-cyan-500 text-black text-[9px] font-bold px-1 rounded uppercase">Try Now</span>
          </button>
          <a href="#roi-calculator" className="hover:text-cyan-400 transition-colors">ROI Calculator</a>
          <a href="#licensing" className="hover:text-cyan-400 transition-colors">Licensing & PO</a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenDemo}
            className="relative group overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-xs font-mono font-bold tracking-wide text-slate-950 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:brightness-110 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Book Plant Demo</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#080C14] px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center gap-2 py-2 px-3 rounded bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>AIR-GAPPED OT ARCHITECTURE</span>
          </div>
          <a 
            href="#modules" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-cyan-400 py-1.5"
          >
            Platform Modules
          </a>
          <a 
            href="#architecture" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-cyan-400 py-1.5"
          >
            Architecture & Security
          </a>
          <button 
            onClick={() => { setMobileMenuOpen(false); onNavigateToSandbox(); }}
            className="w-full text-left flex items-center justify-between text-sm font-medium text-cyan-400 py-1.5"
          >
            <span>Try NOV4 Live Sandbox</span>
            <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded">DEMO</span>
          </button>
          <a 
            href="#roi-calculator" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-cyan-400 py-1.5"
          >
            ROI Calculator
          </a>
          <a 
            href="#licensing" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-cyan-400 py-1.5"
          >
            Licensing & Enterprise Terms
          </a>
          <div className="pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
              className="w-full py-2.5 rounded-lg bg-cyan-500 font-mono text-xs font-bold text-black text-center"
            >
              Request Technical Walkthrough
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
