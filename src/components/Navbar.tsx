import React, { useState } from 'react';
import { Play, Menu, X, ExternalLink, Activity, Layers, Cpu, Mail } from 'lucide-react';

interface NavbarProps {
  onNavigateToSimulator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToSimulator }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#14111B]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#F5B301]/30 bg-[#1F1B26] p-0.5 flex items-center justify-center shadow-lg group-hover:border-[#F5B301] transition-all">
              <img 
                src="/nov4_logo.jpg" 
                alt="Nov4 Supernova" 
                className="w-full h-full object-cover rounded-md"
                onError={(e) => {
                  // Fallback if image not found
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold font-display tracking-tight text-white group-hover:text-[#F5B301] transition-colors">
                  NOV4
                </span>
                <span className="text-xs px-2 py-0.5 rounded font-mono font-medium bg-[#F5B301]/10 text-[#F5B301] border border-[#F5B301]/30">
                  SUPERNOVA
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono tracking-wide uppercase">
                Plant Telemetry & SCADA
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a 
              href="#simulator" 
              onClick={(e) => { e.preventDefault(); onNavigateToSimulator(); }}
              className="flex items-center gap-1.5 hover:text-[#F5B301] transition-colors py-1"
            >
              <Activity className="w-4 h-4 text-[#F5B301]" />
              <span>Canlı Simülatör</span>
              <span className="flex h-2 w-2 relative ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </a>
            
            <a href="#capabilities" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Layers className="w-4 h-4 text-slate-400" />
              <span>Modüller & Yetenekler</span>
            </a>

            <a href="#architecture" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Cpu className="w-4 h-4 text-slate-400" />
              <span>Teknik Mimari</span>
            </a>

            <a href="#contact" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-slate-400" />
              <span>İletişim</span>
            </a>
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/demo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium text-slate-300 bg-[#1F1B26] border border-white/10 hover:border-white/20 hover:text-white transition-all"
            >
              <span>Tam Ekran Demo</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <button
              onClick={onNavigateToSimulator}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold font-display text-[#14111B] bg-gradient-to-r from-[#F5B301] to-[#FF7A1A] hover:brightness-110 shadow-lg shadow-[#F5B301]/20 transition-all cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Simülatörü Başlat</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-[#1F1B26] border border-white/10 text-slate-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#1F1B26] px-4 pt-3 pb-5 space-y-3">
          <a
            href="#simulator"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              onNavigateToSimulator();
            }}
            className="flex items-center justify-between py-2 text-sm font-medium text-[#F5B301]"
          >
            <span className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Canlı Simülatör (Demo)
            </span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
              Aktif
            </span>
          </a>

          <a
            href="#capabilities"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-medium text-slate-300 hover:text-white"
          >
            <Layers className="w-4 h-4 text-slate-400" />
            Modüller & Yetenekler
          </a>

          <a
            href="#architecture"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-medium text-slate-300 hover:text-white"
          >
            <Cpu className="w-4 h-4 text-slate-400" />
            Teknik Mimari
          </a>

          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-medium text-slate-300 hover:text-white"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            İletişim
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="/demo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 text-xs font-mono font-medium bg-[#2F2934] text-white rounded-lg border border-white/10"
            >
              <span>Bağımsız Tam Ekran Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
