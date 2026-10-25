import React from 'react';
import {
  ArrowDownRight,
  Cpu,
  Database,
  FileSpreadsheet,
  Layers,
  Sliders,
} from 'lucide-react';
import { Language, translations } from '../data/translations';
import { TemplateBuilderMark } from './TemplateBuilderMark';

interface HeroProps {
  lang: Language;
  onJumpToDemo: (route: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onJumpToDemo }) => {
  const t = translations[lang].hero;

  const renderPillarIcon = (key: string) => {
    switch (key) {
      case 'flex':
        return <Sliders className="w-4 h-4 text-[#E5E7EB]" />;
      case 'fit':
        return <Layers className="w-4 h-4 text-[#E5E7EB]" />;
      case 'db':
        return <Database className="w-4 h-4 text-[#E5E7EB]" />;
      case 'ai':
        return <Cpu className="w-4 h-4 text-amber-300" />;
      case 'tb':
      default:
        return <TemplateBuilderMark className="w-4 h-4 text-[#E5E7EB]" accentClassName="text-emerald-400" />;
    }
  };

  const handlePillarClick = (key: string) => {
    if (key === 'ai') {
      const aiEl = document.getElementById('ai');
      aiEl?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    if (key === 'tb') {
      onJumpToDemo('/template-builder/tpl_shift_oee');
      return;
    }
    if (key === 'db') {
      onJumpToDemo('/query-creator');
      return;
    }
    if (key === 'fit') {
      onJumpToDemo('/network-map');
      return;
    }
    onJumpToDemo('/dashboard');
  };

  const delayClasses = ['delay-2', 'delay-3', 'delay-4', 'delay-5', 'delay-6'];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 border-b border-white/[0.06] arch-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Status Pill */}
        <div className="anim-fade-up inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 anim-soft-pulse" />
          <span className="font-mono text-[11px] tracking-[0.14em] text-[#9CA3AF]">
            {t.tag}
          </span>
        </div>

        {/* Minimalist Display Headline */}
        <h1 className="anim-fade-up delay-1 font-display font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-tight text-white max-w-4xl">
          <span className="block">{t.titleLine1}</span>
          <span className="block text-[#9CA3AF]">{t.titleLine2}</span>
        </h1>

        {/* Action Row */}
        <div className="anim-fade-up delay-2 mt-9 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => onJumpToDemo('/dashboard')}
            className="group inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-[#F3F4F6] hover:bg-white text-[#090A0D] text-sm font-semibold transition-all cursor-pointer"
          >
            <span>{t.ctaDemo}</span>
            <ArrowDownRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </button>

          <button
            type="button"
            onClick={() => onJumpToDemo('/template-builder/tpl_shift_oee')}
            className="group inline-flex items-center gap-2.5 h-11 px-5 rounded-lg border border-white/14 bg-[#0F1116] hover:bg-white/[0.06] hover:border-white/25 text-sm font-medium text-white transition-all cursor-pointer"
          >
            <TemplateBuilderMark className="w-4 h-4 text-[#E5E7EB]" accentClassName="text-emerald-400" />
            <span>{t.ctaBuilder}</span>
          </button>

          <button
            type="button"
            onClick={() => onJumpToDemo('/reports?preview=tpl_shift_oee')}
            className="inline-flex items-center gap-2 h-11 px-5 rounded-lg border border-white/10 bg-white/[0.025] hover:bg-white/[0.06] text-sm font-medium text-[#D1D5DB] transition-all cursor-pointer"
          >
            <FileSpreadsheet className="w-4 h-4 text-[#9CA3AF]" />
            <span>{t.ctaOutputs}</span>
          </button>
        </div>

        {/* 5 Crisp Greeting Punchlines */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {t.punchlines.map((item, idx) => (
            <button
              key={item.key}
              type="button"
              onClick={() => handlePillarClick(item.key)}
              className={`anim-fade-up ${delayClasses[idx] || 'delay-5'} card-interactive text-left rounded-xl border border-white/[0.08] hover:border-white/20 bg-[#0F1116]/90 p-4 flex flex-col justify-between gap-3 cursor-pointer`}
            >
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg border border-white/10 bg-[#141720] flex items-center justify-center">
                  {renderPillarIcon(item.key)}
                </div>
                <span className="font-mono text-[10px] tracking-[0.12em] text-[#6B7280]">
                  {item.code}
                </span>
              </div>
              <div>
                <div className="font-display text-sm font-semibold text-white">
                  {item.title}
                </div>
                <div className="mt-1 text-xs leading-snug text-[#9CA3AF]">
                  {item.line}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
