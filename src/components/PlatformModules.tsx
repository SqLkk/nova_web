import React, { useState } from 'react';
import { GitBranch, Activity, FileSpreadsheet, ShieldAlert, Cpu, BarChart3, Database, Layers, CheckCircle2, ChevronRight } from 'lucide-react';

export const PlatformModules: React.FC = () => {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  const MODULES = [
    {
      id: 'path-definer',
      tag: 'CORE MODULE 01',
      title: 'Path Definer & DAG Pipeline Engine',
      subtitle: 'Visual data lineage & processing orchestrator for heterogeneous plant floors',
      description: 'Connects fragmented PLC memory blocks, SQL historians, and OPC-UA servers into a unified, deterministic Directed Acyclic Graph (DAG). Clean, transform, and map high-frequency telemetry into structured ISA-95 asset trees without fragile custom Python cron scripts.',
      icon: GitBranch,
      highlights: [
        'Dynamic ISA-95 space-map tree & sequence routing generation',
        'Built-in outlier suppression (3-sigma) & sensor deadband filtering',
        'Dual-mode execution: sub-second streaming ringbuffer & batch historian aggregation',
        'Visual node-based lineage editor with live tag telemetry monitoring'
      ],
      techSpecs: {
        'Engine Type': 'Deterministic C++ & Rust On-Prem Core',
        'Latency': '< 4.2ms end-to-end processing',
        'Supported Nodes': 'Filter, Join, OEE State, Math, Anomaly, Dispatch',
        'Persistence': 'Direct SQLite & PostgreSQL partition tables'
      }
    },
    {
      id: 'oee-studio',
      tag: 'CORE MODULE 02',
      title: 'Real-Time OEE & Downtime Studio',
      subtitle: 'Autonomous machine state categorization and micro-stop root cause analysis',
      description: 'Stops relying on operator subjective memory. NOV4 monitors cycle pulses and spindle load directly from the machine controller to detect micro-stops (<60 seconds) and automatically correlate downtime with active PLC alarm words.',
      icon: Activity,
      highlights: [
        'Deterministic Availability × Performance × Quality (OEE) calculation',
        'Automatic micro-stop classification (< 60s) eliminating clipboard concealment',
        'Real-time Pareto & Waterfall root-cause diagrams per shift/line/operator',
        'Closed-loop corrective maintenance dispatch via local webhook / CMMS'
      ],
      techSpecs: {
        'Standard': 'Full compliance with SEMI E10 & ISO 22400',
        'Resolution': '10ms edge pulse tracking',
        'Classifiers': 'Rule-based alarm mapping + statistical anomaly trigger',
        'Output': 'Live waterfall, MTTR/MTBF, scrap yield indices'
      }
    },
    {
      id: 'report-studio',
      tag: 'CORE MODULE 03',
      title: 'Automated Compliance & Report Studio',
      subtitle: 'Turnkey shift handovers, production audit sheets & QA sign-offs',
      description: 'Eliminates 15 hours per week of manual clerical work. Generates standardized, audit-proof shift handover sheets, environmental ESG compliance logs, and QA batch certificates on schedule or triggered by end-of-shift events.',
      icon: FileSpreadsheet,
      highlights: [
        '1-Click automated PDF & XLSX generation directly to network file shares',
        'Tamper-evident SHA-256 audit trail for ISO 9001 / IATF 16949 compliance',
        'Shift Alpha/Bravo/Charlie automatic boundary detection and sign-off',
        'Dynamic templates supporting multi-line, scrap breakdown & maintenance notes'
      ],
      techSpecs: {
        'Template Engine': 'Zero-dependency native PDF / Excel vector renderer',
        'Delivery': 'Local SMB/NFS share, local SMTP, or SCADA web portal',
        'Sign-off': 'Role-based digital operator & shift supervisor stamp',
        'Audit Trail': 'Cryptographic local ledger with immutable history'
      }
    }
  ];

  const currentMod = MODULES[activeModuleIndex];
  const IconComponent = currentMod.icon;

  return (
    <section id="modules" className="py-20 lg:py-28 bg-[#090D16] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold px-3 py-1 rounded bg-cyan-950/40 border border-cyan-500/30">
            ENTERPRISE OT ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Three Integrated Modules. Zero External Dependencies.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Designed from the ground up for critical plant OT networks where data egress is forbidden and deterministic reliability is non-negotiable.
          </p>
        </div>

        {/* Module Selection Tabs (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {MODULES.map((mod, idx) => {
            const isSelected = idx === activeModuleIndex;
            const ModIcon = mod.icon;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModuleIndex(idx)}
                className={`text-left p-5 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.15)] ring-1 ring-cyan-400/40' 
                    : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-cyan-400">
                      {mod.tag}
                    </span>
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'}`}>
                      <ModIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">
                    {mod.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {mod.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className={isSelected ? 'text-cyan-400 font-bold' : 'text-slate-400'}>
                    {isSelected ? 'Aktif Görünüm' : 'Detayları İncele'}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-500'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep-Dive Module Detail Card */}
        <div className="rounded-2xl border border-slate-800 bg-[#0B0F17] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {currentMod.tag}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  PALANTIR & SIEMENS CLASS ARCHITECTURE
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
                {currentMod.title}
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {currentMod.description}
              </p>

              {/* Key Highlights */}
              <div className="space-y-3 mb-8">
                {currentMod.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Technical Specs Panel (5 cols) */}
            <div className="lg:col-span-5 rounded-xl bg-slate-950/90 border border-slate-800 p-5 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px]">
                  Engine Specifications
                </span>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  AIR-GAP VERIFIED
                </span>
              </div>

              <div className="space-y-3.5">
                {Object.entries(currentMod.techSpecs).map(([label, value]) => (
                  <div key={label} className="flex flex-col border-b border-slate-800/60 pb-2.5 last:border-0 last:pb-0">
                    <span className="text-slate-400 text-[11px]">{label}:</span>
                    <span className="text-white font-semibold text-xs mt-0.5">{value}</span>
                  </div>
                ))}
              </div>

              {/* Code/Terminal Snippet Mock */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <p className="text-[10px] text-slate-400 mb-1.5 font-bold uppercase tracking-wider">
                  Native SQL / SCADA Expression:
                </p>
                <div className="p-3 rounded bg-[#070A10] border border-slate-800/80 text-[11px] text-cyan-300 overflow-x-auto leading-relaxed">
                  <code>
                    SELECT asset_id, <br />
                    &nbsp;&nbsp;calc_oee_iso22400(avail, perf, qual) AS oee, <br />
                    &nbsp;&nbsp;tag_micro_stop(pulse_dur, 60) AS is_bottleneck <br />
                    FROM ot_telemetry_ringbuffer <br />
                    WHERE plant_zone = 'ZONE-MUC-STAMP';
                  </code>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
