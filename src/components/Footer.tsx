import React from 'react';
import { ExternalLink, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#100D16] text-slate-400 py-12 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/5">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#F5B301]/30 bg-[#1F1B26] p-0.5 flex items-center justify-center">
              <img 
                src="/nov4_logo.jpg" 
                alt="Nov4" 
                className="w-full h-full object-cover rounded-md"
                onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold font-display text-white">NOV4</span>
                <span className="text-xs px-2 py-0.5 rounded font-mono bg-[#F5B301]/10 text-[#F5B301] border border-[#F5B301]/25">
                  SUPERNOVA
                </span>
              </div>
              <p className="text-xs text-slate-500 font-mono">
                Endüstriyel Telemetri, SCADA & Fabrika Raporlama
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-300">
            <a href="#simulator" className="hover:text-[#F5B301] transition-colors">
              Canlı Simülatör
            </a>
            <a href="#capabilities" className="hover:text-white transition-colors">
              Modüller
            </a>
            <a href="#architecture" className="hover:text-white transition-colors">
              Teknik Mimari
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              İletişim
            </a>
            <a 
              href="/demo/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#F5B301] hover:underline flex items-center gap-1"
            >
              <span>/demo/ Tam Ekran</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Bottom copyright & node note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 font-mono">
            <Terminal className="w-3.5 h-3.5 text-[#F5B301]" />
            <span>Nov4 Supernova Platform • On-Premises Ready</span>
          </div>
          <div>
            © {new Date().getFullYear()} Nov4. Tüm hakları saklıdır.
          </div>
        </div>

      </div>
    </footer>
  );
};
