import React from 'react';
import { ArrowUpRight, Lock } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface ShowcaseGridProps {
  lang: Language;
  onJumpToDemo: (route: string) => void;
}

export const ShowcaseGrid: React.FC<ShowcaseGridProps> = ({ lang, onJumpToDemo }) => {
  const t = translations[lang].cards;

  return (
    <section id="modules" className="py-16 md:py-24 border-b border-white/[0.06]">
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
            className="group text-left rounded-2xl border border-white/[0.08] hover:border-white/20 bg-[#0F1116] p-6 transition-colors cursor-pointer flex flex-col justify-between min-h-[290px]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] tracking-[0.12em] text-[#7D8594]">
                  {t.topologyTag}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-1.5">
                  {t.topologyTitle}
                </h3>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-[#9CA3AF] group-hover:text-white transition-colors">
                <span>{t.openInDemo}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Minimal Topology Visual */}
            <div className="mt-6 rounded-xl border border-white/[0.06] bg-[#090A0D] p-4">
              <div className="flex items-center justify-between gap-2">
                <div className="px-3 py-2 rounded-lg border border-emerald-500/30 bg-emerald-500/[0.07]">
                  <div className="font-mono text-[10px] text-emerald-400">PLT-IZM</div>
                  <div className="text-xs font-semibold text-white mt-0.5">İzmir Kampüs · 91%</div>
                </div>
                <div className="flex-1 h-px bg-white/10" />
                <div className="flex flex-col gap-2">
                  <div className="px-3 py-1.5 rounded-md border border-white/10 bg-[#14171F] flex items-center justify-between gap-4">
                    <span className="text-[11px] text-[#D1D5DB]">Lazer Kaynak A1</span>
                    <span className="font-mono text-[11px] text-emerald-400">92%</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-md border border-amber-500/25 bg-amber-500/[0.06] flex items-center justify-between gap-4">
                    <span className="text-[11px] text-[#D1D5DB]">5-Eksen CNC B1</span>
                    <span className="font-mono text-[11px] text-amber-400">74%</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-md border border-white/10 bg-[#14171F] flex items-center justify-between gap-4">
                    <span className="text-[11px] text-[#D1D5DB]">SMT Dizgi C1</span>
                    <span className="font-mono text-[11px] text-emerald-400">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </button>

          {/* 02 · LIVE REPORT & EXCEL/PDF OUTPUTS */}
          <button
            type="button"
            onClick={() => onJumpToDemo('/reports?preview=tpl_shift_oee')}
            className="group text-left rounded-2xl border border-white/[0.08] hover:border-white/20 bg-[#0F1116] p-6 transition-colors cursor-pointer flex flex-col justify-between min-h-[290px]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] tracking-[0.12em] text-[#7D8594]">
                  {t.outputsTag}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-1.5">
                  {t.outputsTitle}
                </h3>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-[#9CA3AF] group-hover:text-white transition-colors">
                <span>{t.openInDemo}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Minimal Spreadsheet Output Visual */}
            <div className="mt-6 rounded-xl border border-white/[0.06] bg-[#090A0D] overflow-hidden">
              <div className="px-3.5 py-2 border-b border-white/[0.06] flex items-center justify-between bg-[#12151D]">
                <span className="font-mono text-[11px] text-[#D1D5DB]">Vardiya_OEE_Master.xlsx</span>
                <div className="flex items-center gap-1.5">
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/15 text-emerald-400">XLSX</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/10 text-[#D1D5DB]">PDF</span>
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
                <div className="grid grid-cols-4 px-3.5 py-1.5 bg-white/[0.03] font-semibold text-white">
                  <span>SUM / AVG</span>
                  <span>10 Parti</span>
                  <span className="text-right">7,927</span>
                  <span className="text-right text-emerald-400">89.1%</span>
                </div>
              </div>
            </div>
          </button>

          {/* 03 · SQL, PYTHON & LIVE DASHBOARD */}
          <button
            type="button"
            onClick={() => onJumpToDemo('/dashboard')}
            className="group text-left rounded-2xl border border-white/[0.08] hover:border-white/20 bg-[#0F1116] p-6 transition-colors cursor-pointer flex flex-col justify-between min-h-[270px]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] tracking-[0.12em] text-[#7D8594]">
                  {t.telemetryTag}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-1.5">
                  {t.telemetryTitle}
                </h3>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-[#9CA3AF] group-hover:text-white transition-colors">
                <span>{t.openInDemo}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Minimal Telemetry Chart Visual */}
            <div className="mt-6 rounded-xl border border-white/[0.06] bg-[#090A0D] p-4">
              <div className="flex items-end justify-between gap-2 h-24 px-1">
                {[78, 91, 86, 95, 74, 92, 89, 94].map((v, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                    <div
                      className={`w-full rounded-sm ${v < 76 ? 'bg-amber-400/80' : 'bg-[#E5E7EB]/85'}`}
                      style={{ height: `${v}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-[#9CA3AF]">
                <span>SQL · PYTHON SANDBOX</span>
                <span className="text-white">16,390 kWh · 89.4% OEE</span>
              </div>
            </div>
          </button>

          {/* 04 · LOCAL AI COPILOT — VISIBLE SHOWCASE, STRICTLY LOCKED */}
          <div
            id="ai"
            aria-disabled="true"
            className="rounded-2xl border border-white/[0.08] bg-[#0F1116] p-6 flex flex-col justify-between min-h-[270px] select-none"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] tracking-[0.12em] text-[#7D8594]">
                  {t.aiTag}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-1.5 flex items-center gap-2.5">
                  <span>{t.aiTitle}</span>
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-amber-500/25 bg-amber-500/[0.08] font-mono text-[10px] font-medium text-amber-300">
                <Lock className="w-3 h-3" />
                <span>{t.aiLockBadge}</span>
              </span>
            </div>

            {/* Locked Non-Interactive Copilot Preview */}
            <div className="mt-6 rounded-xl border border-white/[0.06] bg-[#090A0D] p-4 opacity-75">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 font-mono text-[11px] text-[#D1D5DB]">
                  <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                  <span>Qwen3.5 · Air-Gapped LoRA</span>
                </div>
                <span className="font-mono text-[10px] text-[#7D8594]">SQL · XLSX · MAP</span>
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

