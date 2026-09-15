import React from 'react';
import { Play, ChevronDown, Terminal, Cpu } from 'lucide-react';

interface HeroProps {
  onNavigateToDemo: () => void;
  onScrollDown: () => void;
  scrollStep?: number;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToDemo, onScrollDown, scrollStep = 0 }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-between pt-20 sm:pt-24 pb-8 sm:pb-12 px-3 sm:px-6 bg-[#08060B] bg-nova-wide-aura overflow-hidden selection:bg-[#F5B301]/30">
      
      {/* Broad Ambient Golden Light Spill */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[1200px] h-[450px] sm:h-[750px] bg-gradient-to-b from-[#F5B301]/20 via-[#FF7A1A]/8 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-nova-grid-subtle opacity-70 pointer-events-none"></div>

      {/* Top Spacer */}
      <div></div>

      {/* Main Center Stage */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center w-full">
        
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium bg-[#F5B301]/10 text-[#F5B301] border border-[#F5B301]/30 mb-4 sm:mb-6 backdrop-blur-md">
          <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          <span className="tracking-wider sm:tracking-widest uppercase">Endüstriyel Veri & Otomatik Raporlama</span>
        </div>

        {/* GIANT "Nov4" TITLE: Fully responsive from mobile to 4K */}
        <div className="relative my-0 sm:my-1 select-none">
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[11.5rem] font-black font-display tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#FFF8DC] via-[#F5B301] to-[#E68A00] glow-nova-headline drop-shadow-[0_15px_35px_rgba(245,179,1,0.3)]">
            Nov4
          </h1>
        </div>

        {/* Plain Language Purpose: What it actually does */}
        <p className="text-sm sm:text-base md:text-xl text-slate-300 font-normal max-w-2xl leading-relaxed mt-3 sm:mt-4 mb-8 sm:mb-10 px-2">
          Fabrikanızdaki tüm makinelerin verilerini tek ekranda toplayan, üretim hatlarınızı haritalandırarak kolay takip sağlayan ve verilerinizi Excel formülleriyle otomatik raporlayan yerel platform.
        </p>

        {/* ORTADAKİ SİLİK "TOOL'U DENE" KARTI (Mobile touch friendly) */}
        <div className="w-full max-w-md px-2 sm:px-0">
          <button
            onClick={onNavigateToDemo}
            className="w-full group relative p-3.5 sm:p-4 rounded-2xl bg-[#15111D]/50 hover:bg-[#15111D]/90 border border-[#F5B301]/30 hover:border-[#F5B301]/60 backdrop-blur-md transition-all duration-500 glow-nova-card-faint cursor-pointer text-left active:scale-[0.99]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F5B301]/10 border border-[#F5B301]/30 flex items-center justify-center text-[#F5B301] group-hover:bg-[#F5B301] group-hover:text-[#08060B] transition-all shrink-0">
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-[#F5B301] uppercase tracking-wider font-semibold">
                    Simülasyon Ortamı
                  </div>
                  <div className="text-sm sm:text-base font-bold font-display text-white group-hover:text-[#FCD34D] transition-colors">
                    Tool'u Dene
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-black/40 border border-white/5 font-mono text-[10px] sm:text-[11px] text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Canlı Demo</span>
              </div>
            </div>

            {/* Hint about scrolling */}
            <div className="mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-1.5 text-slate-400">
                <Terminal className="w-3 h-3 text-[#F5B301]" />
                Mock Fabrika (21 Makine)
              </span>
              <span className="text-[#F5B301] font-semibold">
                Aşağı Kaydırın ↓
              </span>
            </div>
          </button>
        </div>

      </div>

      {/* Bottom Scroll Prompt */}
      <div 
        onClick={onScrollDown}
        className="relative z-10 flex flex-col items-center gap-1.5 text-slate-500 hover:text-slate-200 transition-colors cursor-pointer select-none mt-4"
      >
        <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#F5B301]/80">
          Özellikleri İnceleyin
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#F5B301]" />
      </div>

    </section>
  );
};
