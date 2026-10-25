import React from 'react';
import { Language, translations } from '../data/translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenContact }) => {
  const t = translations[lang].nav;

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.07] bg-[#090A0D]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/15 bg-[#12151C] flex items-center justify-center">
            <img src="./nov4_logo.jpg" alt="Nov4" className="w-full h-full object-cover" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-white">
            Nov4
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#9CA3AF]">
          <a href="#modules" className="hover:text-white transition-colors">
            {t.modules}
          </a>
          <a href="#ai" className="hover:text-white transition-colors">
            {t.ai}
          </a>
          <a href="#demo" className="hover:text-white transition-colors">
            {t.demo}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
            className="h-8 px-2.5 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] text-xs font-mono font-medium text-[#D1D5DB] transition-colors cursor-pointer"
          >
            {lang.toUpperCase()}
          </button>

          <button
            type="button"
            onClick={onOpenContact}
            className="h-8 px-3.5 rounded-md bg-[#F3F4F6] hover:bg-white text-[#090A0D] text-xs font-semibold transition-colors cursor-pointer"
          >
            {t.contact}
          </button>
        </div>
      </div>
    </header>
  );
};
