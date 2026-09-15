import React from 'react';
import { Play, ChevronDown, Terminal, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigateToDemo: () => void;
  onScrollDown: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToDemo, onScrollDown }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between pt-24 pb-10 px-4 sm:px-6 bg-[#0C0A10] bg-nova-radial overflow-hidden selection:bg-[#F5B301]/30">
      
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-nova-grid opacity-60 pointer-events-none"></div>

      {/* Decorative subtle ambient circle */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5B301]/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Spacer */}
      <div></div>

      {/* Main Center Stage */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Subtle Top Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#F5B301]/10 text-[#F5B301] border border-[#F5B301]/30 mb-4 animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracking-widest uppercase">Endüstriyel Telemetri & Canlı SCADA</span>
        </div>

        {/* GIANT "NOVA" BRANDING */}
        <div className="relative my-2 select-none">
          <h1 className="text-7xl sm:text-9xl lg:text-[11.5rem] font-black font-display tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D0] via-[#F5B301] to-[#FF7A1A] glow-nova-lg drop-shadow-[0_15px_35px_rgba(245,179,1,0.25)]">
            NOVA
          </h1>
        </div>

        {/* Core Purpose: Short & Crisp Statement */}
        <p className="text-base sm:text-xl text-slate-300 font-normal max-w-2xl leading-relaxed mt-2 mb-8">
          Fabrika sahasındaki PLC, robot ve sensör telemetrisini tek ekranda toplayan, 
          ağ topolojisi ve Excel benzeri dinamik şablon motoruyla güçlendirilmiş bağımsız endüstriyel platform.
        </p>

        {/* ORTADA SİLİK / GHOST "TOOL'U DENE" KARTI */}
        <div className="w-full max-w-md">
          <button
            onClick={onNavigateToDemo}
            className="w-full group relative p-4 rounded-2xl bg-[#14111B]/40 hover:bg-[#1B1624]/90 border border-white/10 hover:border-[#F5B301]/50 backdrop-blur-md transition-all duration-300 glow-nova-ghost hover:glow-nova-box cursor-pointer text-left"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F5B301]/10 border border-[#F5B301]/30 flex items-center justify-center text-[#F5B301] group-hover:scale-105 group-hover:bg-[#F5B301] group-hover:text-[#0C0A10] transition-all">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#F5B301] uppercase tracking-wider font-semibold">
                    Simülasyon Ortamı
                  </div>
                  <div className="text-base font-bold font-display text-white group-hover:text-[#FCD34D] transition-colors">
                    Tool'u Dene
                  </div>
                </div>
              </div>

              {/* Status pill */}
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-black/40 border border-white/5 font-mono text-[11px] text-slate-400 group-hover:text-emerald-400 transition-colors">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Canlı Demo</span>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-slate-400 transition-colors">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-[#F5B301]" />
                In-Memory Mock Fabrika (21 Makine)
              </span>
              <span className="text-[#F5B301] opacity-75 group-hover:opacity-100">
                Başlat →
              </span>
            </div>
          </button>
        </div>

      </div>

      {/* Bottom Scroll Prompt */}
      <div className="relative z-10 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer select-none" onClick={onScrollDown}>
        <span className="text-xs font-mono tracking-widest uppercase text-[#F5B301]/80">
          Aşağı Kaydırın
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#F5B301]" />
      </div>

    </section>
  );
};
