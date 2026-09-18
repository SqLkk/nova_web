import React from 'react';
import { ExternalLink, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#060408] text-slate-400 py-8 sm:py-12 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-white/5">
          
          {/* Brand: Nov4 */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden border border-[#F5B301]/40 bg-[#15111D] p-0.5 flex items-center justify-center shrink-0">
              <img 
                src="/nov4_logo.jpg" 
                alt="Nov4" 
                className="w-full h-full object-cover rounded-md"
                onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-bold font-display text-white">Nov4</span>
                <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded font-mono bg-[#F5B301]/10 text-[#F5B301] border border-[#F5B301]/30">
                  PRO
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-mono">
                {t.footer.slogan}
              </p>
            </div>
          </div>

          {/* Quick Links: Responsive wrap */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs font-mono text-slate-300">
            <a href="#step-1" className="hover:text-[#F5B301] transition-colors">
              {t.footer.linkStep1}
            </a>
            <a href="#step-2" className="hover:text-[#F5B301] transition-colors">
              {t.footer.linkStep2}
            </a>
            <a href="#step-3" className="hover:text-[#F5B301] transition-colors">
              {t.footer.linkStep3}
            </a>
            <a href="#step-4" className="hover:text-[#F5B301] transition-colors">
              {t.footer.linkStep4}
            </a>
            {onOpenContact && (
              <button
                onClick={onOpenContact}
                className="hover:text-[#F5B301] transition-colors cursor-pointer"
              >
                {t.footer.linkContact}
              </button>
            )}
            <a 
              href="/demo/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#F5B301] hover:underline flex items-center gap-1"
            >
              <span>{t.footer.linkDemo}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-500 text-center sm:text-left">
          <div className="flex items-center gap-2 font-mono">
            <Terminal className="w-3.5 h-3.5 text-[#F5B301] shrink-0" />
            <span>{t.footer.airGapDisclaimer}</span>
          </div>
          <div>
            © {new Date().getFullYear()} Nov4. {t.footer.allRightsReserved}
          </div>
        </div>

      </div>
    </footer>
  );
};
