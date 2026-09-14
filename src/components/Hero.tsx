import React from 'react';
import { 
  Shield, 
  Zap, 
  Database, 
  Clock, 
  ArrowRight, 
  FileText, 
  Download, 
  AlertTriangle, 
  Layers, 
  Sparkles,
  Server,
  Activity,
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onNavigateToSandbox: () => void;
  onPreviewShiftReport: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenDemo, 
  onNavigateToSandbox,
  onPreviewShiftReport
}) => {
  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-industrial-grid">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-[400px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-6 shadow-[0_0_15px_rgba(0,229,255,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Local-First Industrial Intelligence Engine</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-sans normal-case">Discrete & Process Manufacturing</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Zero-Cloud Industrial BI. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              Real-Time OEE & Automated
            </span>{' '}
            Plant Reporting.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal mb-8">
            Eliminate manual shift reports and costly unplanned downtime. NOV4 deploys entirely on-premises inside your OT network, turning legacy SCADA and PLC historians into actionable intelligence in seconds.
          </p>

          {/* Primary Action Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={onNavigateToSandbox}
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-mono font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(0,229,255,0.35)] hover:shadow-[0_0_45px_rgba(0,229,255,0.6)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2.5"
            >
              <Activity className="w-4 h-4 text-slate-950" />
              <span>Launch Live Factory Sandbox</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg border border-slate-700 hover:border-cyan-500/60 bg-slate-900/90 text-slate-200 font-mono text-sm font-semibold hover:text-white hover:bg-slate-800/80 transition-all flex items-center justify-center gap-2"
            >
              <Server className="w-4 h-4 text-cyan-400" />
              <span>Request Technical Walkthrough</span>
            </button>
          </div>

          {/* Trust Badges / Quick Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-4 border-t border-slate-800/80 text-left">
            <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
              <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
              <div>
                <p className="text-xs font-mono font-bold text-slate-200">100% Air-Gapped</p>
                <p className="text-[11px] text-slate-400">On-Premises Bare-Metal/VM</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
              <Database className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <p className="text-xs font-mono font-bold text-slate-200">Zero Cloud Egress</p>
                <p className="text-[11px] text-slate-400">Zero Data Leaves Factory</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
              <Layers className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <p className="text-xs font-mono font-bold text-slate-200">OPC-UA / S7 / Modbus</p>
                <p className="text-[11px] text-slate-400">Legacy DB & Historian Ready</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
              <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
              <div>
                <p className="text-xs font-mono font-bold text-slate-200">&lt; 10ms Query Latency</p>
                <p className="text-[11px] text-slate-400">Sub-second Aggregation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual: Dark-Mode Industrial Telemetry Dashboard Preview */}
        <div className="relative rounded-2xl border border-slate-700/80 bg-[#0B0F17] shadow-2xl overflow-hidden p-4 sm:p-6 lg:p-7 glow-cyan">
          
          {/* Terminal / Dashboard Control Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="h-4 w-[1px] bg-slate-800 mx-1"></div>
              <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                <span className="text-cyan-400 font-semibold">PLANT-MUC-01</span>
                <span className="text-slate-600">/</span>
                <span>SCHULER-2500T-PRESS</span>
                <span className="text-slate-600">/</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  POLLING (10ms)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400">
                SHIFTA_CYCLE: <span className="text-white font-bold">03.68s</span> (STD: 03.60s)
              </span>
              <button 
                onClick={onPreviewShiftReport}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 text-xs font-mono transition-colors"
                title="View live shift report preview"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Shift Report</span>
                <Download className="w-3 h-3 ml-0.5 text-cyan-400" />
              </button>
            </div>
          </div>

          {/* Metric Dashboard 3-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Column 1: Real-time Line OEE Circular Gauge (4 cols) */}
            <div className="lg:col-span-4 rounded-xl bg-slate-900/70 border border-slate-800/80 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Line Performance Index
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    EXCEEDS TARGET
                  </span>
                </div>

                {/* Circular Gauge Graphic */}
                <div className="relative flex items-center justify-center my-4">
                  <svg className="w-48 h-48 -rotate-90 transform" viewBox="0 0 120 120">
                    {/* Background Track */}
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="#1E293B"
                      strokeWidth="10"
                      fill="transparent"
                    />
                    {/* OEE Progress Arc (88.4%) */}
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="url(#oeeGradient)"
                      strokeWidth="10"
                      strokeDasharray="314.159"
                      strokeDashoffset="36.4" // ~88.4%
                      strokeLinecap="round"
                      fill="transparent"
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id="oeeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00E5FF" />
                        <stop offset="100%" stopColor="#10B981" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Gauge Inner Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-4xl font-mono font-extrabold text-white tracking-tight">
                      88.4<span className="text-cyan-400 text-2xl">%</span>
                    </span>
                    <span className="text-[11px] font-mono uppercase text-slate-400 tracking-widest mt-1">
                      REAL-TIME OEE
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono mt-0.5">
                      +2.6% vs Target (85.8%)
                    </span>
                  </div>
                </div>
              </div>

              {/* OEE 3-Component Breakdown */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800 text-center font-mono">
                <div className="bg-slate-950/60 p-2 rounded border border-slate-800/60">
                  <p className="text-[10px] text-slate-400">AVAILABILITY</p>
                  <p className="text-sm font-bold text-cyan-400 mt-0.5">92.1%</p>
                </div>
                <div className="bg-slate-950/60 p-2 rounded border border-slate-800/60">
                  <p className="text-[10px] text-slate-400">PERFORMANCE</p>
                  <p className="text-sm font-bold text-teal-300 mt-0.5">96.8%</p>
                </div>
                <div className="bg-slate-950/60 p-2 rounded border border-slate-800/60">
                  <p className="text-[10px] text-slate-400">QUALITY</p>
                  <p className="text-sm font-bold text-emerald-400 mt-0.5">99.2%</p>
                </div>
              </div>
            </div>

            {/* Column 2: Downtime Root-Cause Waterfall (5 cols) */}
            <div className="lg:col-span-5 rounded-xl bg-slate-900/70 border border-slate-800/80 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                      Shift Root-Cause Waterfall
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    27 min Lost (Early Shift)
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-4">
                  Automated SCADA signal correlation detected 3 distinct loss categories during current shift:
                </p>

                {/* Waterfall Visual Bars */}
                <div className="space-y-3">
                  {/* Cause 1 */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-slate-200 font-medium truncate max-w-[240px]">
                        Hydraulic Pressure Fault - Line 2
                      </span>
                      <span className="text-rose-400 font-bold">24 min (88.8%)</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-rose-500 to-amber-500 w-[88%]"></div>
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                      <span>Proportional valve spool stick</span>
                      <span className="text-rose-300">Loss: ~$4,000 USD</span>
                    </div>
                  </div>

                  {/* Cause 2 */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-slate-200 font-medium truncate max-w-[240px]">
                        Feeder Blank Stacker Sensor Drift
                      </span>
                      <span className="text-amber-400 font-bold">3 min (11.2%)</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full rounded-full bg-amber-400 w-[11%]"></div>
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                      <span>42-sec micro-stops aggregated</span>
                      <span className="text-amber-300">Auto-detected without operator</span>
                    </div>
                  </div>

                  {/* Preventive Action */}
                  <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 mt-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Closed-Loop Root Cause Tagged</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      NOV4 auto-assigned corrective ticket #WO-9921 to Mechanical Hydraulics team. No paper forms filed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Total MTTR: <strong className="text-slate-200">13.5 min</strong></span>
                <span>MTBF: <strong className="text-slate-200">7.2 hrs</strong></span>
              </div>
            </div>

            {/* Column 3: Shift Handover Report Preview (3 cols) */}
            <div className="lg:col-span-3 rounded-xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-cyan-500/20 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                    Automated Shift Sheet
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                    PDF READY
                  </span>
                </div>

                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80 font-mono text-[11px] space-y-2 mb-4">
                  <div className="border-b border-slate-800/60 pb-1.5">
                    <p className="text-slate-400 text-[10px]">FACILITY & DATE</p>
                    <p className="text-white font-semibold">Munich Gigafactory 01</p>
                    <p className="text-slate-400 text-[10px]">Early Shift A (06:00-14:00)</p>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">Target Qty:</span>
                    <span className="text-white">4,500 pcs</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">Actual Good:</span>
                    <span className="text-emerald-400 font-bold">3,948 pcs</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">Scrap Rate:</span>
                    <span className="text-amber-400 font-bold">0.80% (32 pcs)</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">Logged Downtime:</span>
                    <span className="text-rose-400">27 min</span>
                  </div>

                  <div className="pt-2 border-t border-slate-800/60">
                    <p className="text-[10px] text-slate-400">CHIEF OPERATOR REMARK:</p>
                    <p className="text-[10px] text-slate-300 italic truncate">
                      "Hydraulic valve calibrated at 12:10..."
                    </p>
                  </div>
                </div>
              </div>

              {/* 1-Click Export Indicator */}
              <button 
                onClick={onPreviewShiftReport}
                className="w-full py-2.5 px-3 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 hover:border-cyan-400"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>1-Click Export (PDF / XLSX)</span>
              </button>
            </div>

          </div>

          {/* Bottom Telemetry Stream Bar */}
          <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                HYDRAULIC_PRESS: <strong className="text-white">212.4 bar</strong> (NOM: 210)
              </span>
              <span className="hidden sm:inline-flex items-center gap-2">
                MOTOR_LOAD: <strong className="text-white">78.5%</strong>
              </span>
              <span className="hidden md:inline-flex items-center gap-2">
                VIB_RMS: <strong className="text-white">1.42 mm/s</strong>
              </span>
              <span className="hidden lg:inline-flex items-center gap-2">
                ACTIVE_POWER: <strong className="text-cyan-400">340.2 kW</strong>
              </span>
            </div>
            <div className="text-cyan-400/80 text-[11px] flex items-center gap-1.5">
              <span>DATABASE: LOCAL POSTGRESQL / SQLITE</span>
              <span className="text-slate-600">|</span>
              <span>ZERO EGRESS</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
