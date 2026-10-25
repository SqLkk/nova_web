import React from 'react';
import { ArrowDownRight, FileSpreadsheet } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface HeroProps {
  lang: Language;
  onJumpToDemo: (route: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onJumpToDemo }) => {
  const t = translations[lang].hero;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 border-b border-white/[0.06] arch-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="font-mono text-[11px] tracking-[0.14em] text-[#9CA3AF]">
            {t.tag}
          </span>
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-tight text-white max-w-4xl">
          <span className="block">{t.titleLine1}</span>
          <span className="block text-[#9CA3AF]">{t.titleLine2}</span>
        </h1>

        <div className="mt-10 flex flex-wrap items-center gap-3.5">
          <button
            type="button"
            onClick={() => onJumpToDemo('/dashboard')}
            className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-[#F3F4F6] hover:bg-white text-[#090A0D] text-sm font-semibold transition-colors cursor-pointer"
          >
            <span>{t.ctaDemo}</span>
            <ArrowDownRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => onJumpToDemo('/reports?preview=tpl_shift_oee')}
            className="inline-flex items-center gap-2 h-11 px-5 rounded-lg border border-white/12 bg-white/[0.03] hover:bg-white/[0.07] text-sm font-medium text-[#E5E7EB] transition-colors cursor-pointer"
          >
            <FileSpreadsheet className="w-4 h-4 text-[#9CA3AF]" />
            <span>{t.ctaOutputs}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
