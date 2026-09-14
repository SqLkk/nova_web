import React from 'react';
import { XCircle, CheckCircle2, Clock, FileSpreadsheet, ServerCrash, Cpu, FileCheck2, DatabaseZap } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#080C14] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold px-3 py-1 rounded bg-cyan-950/40 border border-cyan-500/30">
            OPERATIONAL BOTTLENECK VS. LOCAL-FIRST SCADA
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Why Traditional Plant Reporting Fails Heavy Industry
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Industrial manufacturers lose millions every year not to catastrophic disasters, but to hidden micro-stops and 15+ hours/week of manual spreadsheet reconciliation.
          </p>
        </div>

        {/* 2-Column High-Contrast Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: The Legacy Pain */}
          <div className="rounded-2xl bg-gradient-to-b from-rose-950/20 via-slate-900/60 to-slate-950 border border-rose-500/30 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between pb-5 border-b border-rose-500/20 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                    <ServerCrash className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-mono">The Legacy Pain</h3>
                    <p className="text-xs text-rose-400 font-mono">Fragile Manual Paper & Excel Regimes</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-1 rounded bg-rose-500/20 text-rose-300 uppercase font-bold">
                  Status Quo
                </span>
              </div>

              {/* Pain Points List */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200 block mb-0.5">15 Hours/Week Wasted on Manual Excel Handover</strong>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Engineers and supervisors spend the first 45 minutes of each shift copying tag values from SCADA screens into disconnected, macro-heavy Excel sheets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200 block mb-0.5">Blind Spots During Unplanned Micro-Stops</strong>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      30-to-60 second conveyor jams and pneumatic pauses are rounded off or omitted by operators, masking up to $15,000/hour in lost production capacity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200 block mb-0.5">Cloud SaaS Blocked by InfoSec & Air-Gap Mandates</strong>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Plant OT directors cannot send proprietary production cadence or secret recipe data outside the firewall to third-party public cloud vendors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200 block mb-0.5">Disjointed Heterogeneous Historians</strong>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Siemens WinCC, Wonderware, and older Rockwell historians sit in data silos with zero cross-line lineage or unified OEE visibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Pain Stat */}
            <div className="mt-8 pt-4 border-t border-rose-500/20 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Avg. Annual Financial Drag:</span>
              <span className="text-rose-400 font-bold text-sm">$180,000 — $450,000 / Line</span>
            </div>
          </div>

          {/* Right Column: The NOV4 Workflow */}
          <div className="rounded-2xl bg-gradient-to-b from-cyan-950/30 via-slate-900/70 to-slate-950 border border-cyan-500/40 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden glow-cyan">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between pb-5 border-b border-cyan-500/30 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                    <DatabaseZap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-mono">The NOV4 Workflow</h3>
                    <p className="text-xs text-cyan-400 font-mono">Automated, Air-Gapped & Deterministic</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 uppercase font-bold">
                  On-Premises Native
                </span>
              </div>

              {/* Solution List */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100 block mb-0.5">Automated DAG Pipelines & Instant PDF Dispatch</strong>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Shift changeover sheets and QA compliance audit packs are calculated deterministically and published automatically to local file shares at shift close.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100 block mb-0.5">Sub-Minute Anomaly & Micro-Stop Detection</strong>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Edge ring-buffers analyze PLC cycle pulses down to 10ms. Micro-stops under 60 seconds are automatically categorized by root-cause alarm tags without operator bias.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100 block mb-0.5">100% Air-Gapped Local Database (PostgreSQL/SQLite)</strong>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Runs completely disconnected from external internet. Zero telemetry pingbacks, zero cloud subscription risk, full compliance with strict IT/OT cybersecurity protocols.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100 block mb-0.5">Universal ISA-95 Asset Unification</strong>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Native drivers connect directly to Siemens S7-1500, Modbus TCP, OPC-UA, Oracle, and MS SQL simultaneously, mapping all machines to a standardized data tree.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Benefit Stat */}
            <div className="mt-8 pt-4 border-t border-cyan-500/30 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Typical Payback Period:</span>
              <span className="text-emerald-400 font-bold text-sm">&lt; 45 Days on Line 1</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
