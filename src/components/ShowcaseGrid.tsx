import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Cpu, Database, Lock, Network } from 'lucide-react';
import { Language, translations } from '../data/translations';
import { TemplateBuilderMark } from './TemplateBuilderMark';

interface ShowcaseGridProps {
  lang: Language;
  onJumpToDemo: (route: string) => void;
}

export const ShowcaseGrid: React.FC<ShowcaseGridProps> = ({ lang, onJumpToDemo }) => {
  const t = translations[lang].cards;
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="modules"
      ref={sectionRef}
      className="py-16 md:py-24 border-b border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
            {t.sectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* 01 · SPACE MAP TOPOLOGY */}
          <button
            type="button"
            onClick={() => onJumpToDemo('/network-map')}
            className={`reveal-on-scroll ${visible ? 'is-visible' : ''} card-interactive group text-left rounded-2xl border border-white/[0.08] hover:border-white/20 bg-[#0F1116] p-6 cursor-pointer flex flex-col justify-between min-h-[296px]`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl border border-white/10 bg-[#141720] flex items-center justify-center shrink-0">
                  <Network className="w-4.5 h-4.5 text-[#E5E7EB]" />
                </div>
                <div>
                  <span className="font-mono text-[11px] tracking-[0.12em] text-[#7D8594]">
                    {t.topologyTag}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mt-1">
                    {t.topologyTitle}
                  </h3>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-[#9CA3AF] group-hover:text-white transition-colors shrink-0">
                <span>{t.openInDemo}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>

            {/* Minimal Topology Visual with Subtle Signal Flow */}
            <div className="mt-6 rounded-xl border border-white/[0.06] bg-[#090A0D] p-4">
              <div className="flex items-center justify-between gap-2">
                <div className="px-3 py-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/[0.07] shrink-0">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 anim-soft-pulse" />
                    <span className="font-mono text-[10px] text-emerald-400">PLT-IZM</span>
                  </div>
                  <div className="text-xs font-semibold text-white mt-0.5">İzmir Kampüs · 91%</div>
                </div>

                {/* Animated SVG Signal Connector */}
                <svg
                  viewBox="0 0 72 88"
                  className="w-14 sm:w-18 h-22 shrink-0 text-white/25"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M2 44H30" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M30 14V74" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M30 14H70" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M30 44H70" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M30 74H70" stroke="currentColor" strokeWidth="1.2" />

                  <path
                    d="M2 44H30L30 14H70"
                    stroke="rgba(52, 211, 153, 0.65)"
                    strokeWidth="1.4"
                    className="anim-dash-flow"
                  />
                  <path
                    d="M30 44H70"
                    stroke="rgba(251, 191, 36, 0.55)"
                    strokeWidth="1.4"
                    className="anim-dash-flow"
                  />
                  <path
                    d="M30 44V74H70"
                    stroke="rgba(52, 211, 153, 0.65)"
                    strokeWidth="1.4"
                    className="anim-dash-flow"
                  />
                </svg>

                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  <div className="px-3 py-1.5 rounded-md border border-white/10 bg-[#14171F] flex items-center justify-between gap-3">
                    <span className="text-[11px] text-[#D1D5DB] truncate">Lazer Kaynak A1</span>
                    <span className="font-mono text-[11px] text-emerald-400">92%</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-md border border-amber-500/25 bg-amber-500/[0.06] flex items-center justify-between gap-3">
                    <span className="text-[11px] text-[#D1D5DB] truncate">5-Eksen CNC B1</span>
                    <span className="font-mono text-[11px] text-amber-400">74%</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-md border border-white/10 bg-[#14171F] flex items-center justify-between gap-3">
                    <span className="text-[11px] text-[#D1D5DB] truncate">SMT Dizgi C1</span>
                    <span className="font-mono text-[11px] text-emerald-400">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </button>

          {/* 02 · TEMPLATE BUILDER & LIVE EXCEL/PDF OUTPUTS */}
          <div
            style={{ transitionDelay: '70ms' }}
            className={`reveal-on-scroll ${visible ? 'is-visible' : ''} card-interactive group text-left rounded-2xl border border-white/[0.08] hover:border-white/20 bg-[#0F1116] p-6 flex flex-col justify-between min-h-[296px]`}
          >
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl border border-emerald-500/25 bg-emerald-500/[0.08] flex items-center justify-center shrink-0">
                  <TemplateBuilderMark
                    className="w-5 h-5 text-[#F3F4F6]"
                    accentClassName="text-emerald-400"
                  />
                </div>
                <div>
                  <span className="font-mono text-[11px] tracking-[0.12em] text-[#7D8594]">
                    {t.outputsTag}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mt-1">
                    {t.outputsTitle}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => onJumpToDemo('/template-builder/tpl_shift_oee')}
                  className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-white/12 bg-white/[0.04] hover:bg-white/[0.1] text-[11px] font-medium text-white transition-colors cursor-pointer"
                >
                  <TemplateBuilderMark className="w-3.5 h-3.5 text-[#E5E7EB]" accentClassName="text-emerald-400" />
                  <span>{t.openBuilder}</span>
                </button>
                <button
                  type="button"
                  onClick={() => onJumpToDemo('/reports?preview=tpl_shift_oee')}
                  className="inline-flex items-center gap-1 h-7 px-2.5 rounded-md border border-emerald-500/25 bg-emerald-500/[0.08] hover:bg-emerald-500/[0.15] text-[11px] font-medium text-emerald-300 transition-colors cursor-pointer"
                >
                  <span>{t.openPreview}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Template Builder Grid + Formula Ribbon Visual */}
            <button
              type="button"
              onClick={() => onJumpToDemo('/template-builder/tpl_shift_oee')}
              className="mt-6 w-full text-left rounded-xl border border-white/[0.06] hover:border-white/15 bg-[#090A0D] overflow-hidden transition-colors cursor-pointer"
            >
              <div className="px-3.5 py-2 border-b border-white/[0.06] flex items-center justify-between bg-[#12151D]">
                <div className="flex items-center gap-2 min-w-0">
                  <TemplateBuilderMark className="w-3.5 h-3.5 text-[#D1D5DB] shrink-0" accentClassName="text-emerald-400" />
                  <span className="font-mono text-[11px] text-[#D1D5DB] truncate">
                    Vardiya_OEE_Master.xlsx
                  </span>
                  <span className="hidden sm:inline font-mono text-[10px] text-[#7D8594]">
                    fx =SUM(C5:C14)
                  </span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/15 text-emerald-400">
                    XLSX
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/10 text-[#D1D5DB]">
                    PDF
                  </span>
                </div>
              </div>
              <div className="divide-y divide-white/[0.05] font-mono text-[11px]">
                <div className="grid grid-cols-4 px-3.5 py-1.5 text-[#7D8594]">
                  <span>PARTİ</span>
                  <span>HAT</span>
                  <span className="text-right">ADET</span>
                  <span className="text-right">OEE</span>
                </div>
                <div className="grid grid-cols-4 px-3.5 py-1.5 text-[#E5E7EB]">
                  <span>B-2610-01</span>
                  <span>Kaynak A1</span>
                  <span className="text-right">738</span>
                  <span className="text-right text-emerald-400">92.1%</span>
                </div>
                <div className="grid grid-cols-4 px-3.5 py-1.5 text-[#E5E7EB]">
                  <span>B-2610-05</span>
                  <span>SMT C1</span>
                  <span className="text-right">1,894</span>
                  <span className="text-right text-emerald-400">95.3%</span>
                </div>
                <div className="grid grid-cols-4 px-3.5 py-1.5 bg-emerald-500/[0.05] font-semibold text-white">
                  <span>SUM / AVG</span>
                  <span>10 Parti</span>
                  <span className="text-right">7,927</span>
                  <span className="text-right text-emerald-400">89.1%</span>
                </div>
              </div>
            </button>
          </div>

          {/* 03 · SQL, PYTHON, MULTI-DB & LIVE DASHBOARD */}
          <button
            type="button"
            style={{ transitionDelay: '140ms' }}
            onClick={() => onJumpToDemo('/dashboard')}
            className={`reveal-on-scroll ${visible ? 'is-visible' : ''} card-interactive group text-left rounded-2xl border border-white/[0.08] hover:border-white/20 bg-[#0F1116] p-6 cursor-pointer flex flex-col justify-between min-h-[276px]`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl border border-white/10 bg-[#141720] flex items-center justify-center shrink-0">
                  <Database className="w-4.5 h-4.5 text-[#E5E7EB]" />
                </div>
                <div>
                  <span className="font-mono text-[11px] tracking-[0.12em] text-[#7D8594]">
                    {t.telemetryTag}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mt-1">
                    {t.telemetryTitle}
                  </h3>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-[#9CA3AF] group-hover:text-white transition-colors shrink-0">
                <span>{t.openInDemo}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>

            {/* Minimal Telemetry Chart Visual with Restrained Bar Entrance */}
            <div className="mt-6 rounded-xl border border-white/[0.06] bg-[#090A0D] p-4">
              <div className="flex items-end justify-between gap-2 h-24 px-1">
                {[78, 91, 86, 95, 74, 92, 89, 94].map((v, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                    <div
                      className={`w-full rounded-sm ${visible ? 'anim-bar-rise' : 'opacity-0'} ${
                        v < 76 ? 'bg-amber-400/80' : 'bg-[#E5E7EB]/85 group-hover:bg-white transition-colors'
                      }`}
                      style={{
                        height: `${v}%`,
                        animationDelay: `${160 + idx * 45}ms`,
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-[#9CA3AF]">
                <span>PG · ORACLE · MSSQL · SQLITE</span>
                <span className="text-white">16,390 kWh · 89.4% OEE</span>
              </div>
            </div>
          </button>

          {/* 04 · LOCAL AI COPILOT — VISIBLE SHOWCASE, STRICTLY LOCKED */}
          <div
            id="ai"
            aria-disabled="true"
            style={{ transitionDelay: '210ms' }}
            className={`reveal-on-scroll ${visible ? 'is-visible' : ''} rounded-2xl border border-white/[0.08] bg-[#0F1116] p-6 flex flex-col justify-between min-h-[276px] select-none`}
          >
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl border border-amber-500/20 bg-amber-500/[0.07] flex items-center justify-center shrink-0">
                  <Cpu className="w-4.5 h-4.5 text-amber-300" />
                </div>
                <div>
                  <span className="font-mono text-[11px] tracking-[0.12em] text-[#7D8594]">
                    {t.aiTag}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mt-1">
                    {t.aiTitle}
                  </h3>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-amber-500/25 bg-amber-500/[0.08] font-mono text-[10px] font-medium text-amber-300">
                <Lock className="w-3 h-3" />
                <span>{t.aiLockBadge}</span>
              </span>
            </div>

            {/* Locked Non-Interactive Copilot Preview */}
            <div className="mt-6 rounded-xl border border-white/[0.06] bg-[#090A0D] p-4 opacity-80">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 font-mono text-[11px] text-[#D1D5DB]">
                  <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                  <span>Qwen3.5 · Air-Gapped LoRA</span>
                </div>
                <span className="font-mono text-[10px] text-[#7D8594]">SQL · TEMPLATE · MAP</span>
              </div>

              <div className="h-10 px-3 rounded-lg border border-white/[0.07] bg-[#11131A] flex items-center justify-between text-xs text-[#6B7280] cursor-not-allowed">
                <span>{t.aiInputPlaceholder}</span>
                <Lock className="w-3.5 h-3.5 text-[#6B7280]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
