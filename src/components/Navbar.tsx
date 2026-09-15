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
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#08060B]/85 backdrop-blur-xl border-b border-[#F5B301]/15 transition-all">
      {/* Top subtle golden accent ray */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#F5B301] to-transparent opacity-80"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Brand Left: Strictly "Nov4" */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg overflow-hidden border border-[#F5B301]/50 bg-[#15111D] p-0.5 flex items-center justify-center shadow-lg shadow-[#F5B301]/10 group-hover:border-[#F5B301] transition-all">
              <img 
                src="/nov4_logo.jpg" 
                alt="Nov4" 
                className="w-full h-full object-cover rounded-md"
                onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
              />
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-lg sm:text-xl font-black font-display tracking-tight text-white group-hover:text-[#F5B301] transition-colors">
                Nov4
              </span>
              <span className="hidden xs:inline-block text-[9px] sm:text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-[#F5B301]/10 text-[#F5B301] border border-[#F5B301]/30">
                PRO
              </span>
            </div>
          </a>

          {/* Right Action Items: Mobile Optimized */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            
            {/* 1. Teknik Detaylar */}
            <button
              onClick={onOpenTechDetails}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-300 hover:text-white bg-[#15111D] hover:bg-[#1F192A] border border-white/10 hover:border-[#F5B301]/50 transition-all cursor-pointer shadow-sm active:scale-95"
              title="Teknik Detaylar ve Kılavuz"
            >
              <Cpu className="w-3.5 h-3.5 text-[#F5B301] shrink-0" />
              <span className="hidden sm:inline">Teknik Detaylar</span>
              <span className="sm:hidden text-[11px]">Detay</span>
            </button>

            {/* 2. Tool'u Dene */}
            <button
              onClick={onNavigateToDemo}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 rounded-lg text-xs font-semibold font-display text-[#08060B] bg-gradient-to-r from-[#F5B301] to-[#FF7A1A] hover:brightness-110 shadow-md shadow-[#F5B301]/25 transition-all cursor-pointer active:scale-95 whitespace-nowrap"
            >
              <Play className="w-3 h-3 fill-current shrink-0" />
              <span>Tool'u Dene</span>
            </button>

            {/* 3. İletişim */}
            <button
              onClick={onOpenContact}
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer active:scale-95"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">İletişim</span>
            </button>

            {/* Direct external full screen link */}
            <a
              href="/demo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center text-slate-500 hover:text-[#F5B301] transition-colors p-1"
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
