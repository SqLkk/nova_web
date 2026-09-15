import React from 'react';
import { Cpu, Play, Mail, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onOpenTechDetails: () => void;
  onOpenContact: () => void;
  onNavigateToDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTechDetails,
  onOpenContact,
  onNavigateToDemo
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0C0A10]/80 backdrop-blur-lg border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Left */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-[#F5B301]/40 bg-[#14111B] p-0.5 flex items-center justify-center shadow-lg group-hover:border-[#F5B301] transition-all">
              <img 
                src="/nov4_logo.jpg" 
                alt="NOVA" 
                className="w-full h-full object-cover rounded-md"
                onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-black font-display tracking-tight text-white group-hover:text-[#F5B301] transition-colors">
                NOVA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5B301]"></span>
            </div>
          </a>

          {/* Right Action Items */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* 1. Teknik Detaylar */}
            <button
              onClick={onOpenTechDetails}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-300 hover:text-white bg-[#14111B] hover:bg-[#1B1624] border border-white/10 hover:border-[#F5B301]/40 transition-all cursor-pointer"
            >
              <Cpu className="w-3.5 h-3.5 text-[#F5B301]" />
              <span className="hidden sm:inline">Teknik Detaylar</span>
              <span className="sm:hidden">Detay</span>
            </button>

            {/* 2. Tool'u Dene */}
            <button
              onClick={onNavigateToDemo}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold font-display text-[#0C0A10] bg-gradient-to-r from-[#F5B301] to-[#FF7A1A] hover:brightness-110 shadow-md shadow-[#F5B301]/20 transition-all cursor-pointer"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Tool'u Dene</span>
            </button>

            {/* 3. İletişim */}
            <button
              onClick={onOpenContact}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-400 hover:text-white bg-transparent hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>İletişim</span>
            </button>

            {/* Direct external full screen shortcut (optional small icon) */}
            <a
              href="/demo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center text-slate-500 hover:text-[#F5B301] transition-colors p-1"
              title="Bağımsız /demo/ Sayfası"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

          </div>

        </div>
      </div>
    </header>
  );
};
