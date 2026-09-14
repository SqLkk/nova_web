import React from 'react';
import { Play, ExternalLink, ShieldCheck, Cpu, Database, Network } from 'lucide-react';

interface HeroProps {
  onNavigateToSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToSimulator }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-supernova-radial border-b border-white/5">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-supernova-grid pointer-events-none opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#F5B301]/10 text-[#FCD34D] border border-[#F5B301]/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#F5B301] animate-pulse"></span>
            <span>ENDÜSTRİYEL SCADA & TELEMETRİ PLATFORMU</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight mb-6">
            Fabrikanızın Canlı Nabzı,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B301] via-[#FF7A1A] to-[#F5B301]">
              Supernova ile Tek Ekranda
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-normal">
            Nov4 Supernova; üretim sahasındaki robotlar, PLC'ler ve sensörlerden beslenen canlı telemetriyi 
            interaktif ağ topolojisi, gerçek zamanlı alarm yönetimi ve Excel benzeri esnek şablon raporlama motoruyla 
            tek bir modern web arayüzünde birleştiren yerli endüstriyel platformdur.
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              onClick={onNavigateToSimulator}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold font-display text-[#14111B] bg-gradient-to-r from-[#F5B301] to-[#FF7A1A] hover:brightness-110 shadow-xl shadow-[#F5B301]/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Canlı Simülasyonu İncele</span>
            </button>

            <a
              href="/demo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-mono font-medium text-slate-200 bg-[#1F1B26] hover:bg-[#2F2934] border border-white/10 hover:border-[#F5B301]/40 transition-all"
            >
              <span>Tam Ekran Aç (/demo/)</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="#capabilities"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              <span>Platform Yetenekleri ↓</span>
            </a>
          </div>

          {/* Quick Technical Highlights Pill Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-6 border-t border-white/10 text-left">
            
            <div className="p-3.5 rounded-xl bg-[#1F1B26]/80 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1 text-[#F5B301]">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-mono font-semibold">100% Yerel / Air-Gapped</span>
              </div>
              <p className="text-[11px] text-slate-400">Bulut bağımsız, güvenli tesis içi (on-premise) dağıtım.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#1F1B26]/80 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1 text-[#FF7A1A]">
                <Network className="w-4 h-4" />
                <span className="text-xs font-mono font-semibold">Dinamik Ağ Topolojisi</span>
              </div>
              <p className="text-[11px] text-slate-400">Fabrika, hat ve PLC hiyerarşisi, interaktif harita.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#1F1B26]/80 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1 text-[#F5B301]">
                <Database className="w-4 h-4" />
                <span className="text-xs font-mono font-semibold">Şablon & Rapor Editörü</span>
              </div>
              <p className="text-[11px] text-slate-400">Excel formül motoruyla otomatik vardiya raporları.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#1F1B26]/80 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1 text-emerald-400">
                <Cpu className="w-4 h-4" />
                <span className="text-xs font-mono font-semibold">Mock Veri Simülasyonu</span>
              </div>
              <p className="text-[11px] text-slate-400">21 endüstriyel makine ile hazır çalışan canlı ortam.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
