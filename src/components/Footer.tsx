import React from 'react';
import { ExternalLink, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060408] text-slate-400 py-12 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/5">
          
          {/* Brand: Nov4 */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg overflow-hidden border border-[#F5B301]/40 bg-[#15111D] p-0.5 flex items-center justify-center">
              <img 
                src="/nov4_logo.jpg" 
                alt="Nov4" 
                className="w-full h-full object-cover rounded-md"
                onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold font-display text-white">Nov4</span>
                <span className="text-[10px] px-2 py-0.5 rounded font-mono bg-[#F5B301]/10 text-[#F5B301] border border-[#F5B301]/30">
                  SCADA
                </span>
              </div>
              <p className="text-xs text-slate-500 font-mono">
                Endüstriyel Telemetri & Veri Analiz Platformu
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-300">
            <a href="#step-1" className="hover:text-[#F5B301] transition-colors">
              Air-Gapped Güvenlik
            </a>
            <a href="#step-2" className="hover:text-[#F5B301] transition-colors">
              Path Definer
            </a>
            <a href="#step-3" className="hover:text-[#F5B301] transition-colors">
              Query Studio
            </a>
            <a href="#step-4" className="hover:text-[#F5B301] transition-colors">
              Excel Şablon Motoru
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
            <span>Nov4 Platform • On-Premises & Air-Gapped Ready</span>
          </div>
          <div>
            © {new Date().getFullYear()} Nov4. Tüm hakları saklıdır.
          </div>
        </div>

      </div>
    </footer>
  );
};
