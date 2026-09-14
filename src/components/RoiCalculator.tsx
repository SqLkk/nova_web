import React, { useState } from 'react';
import { DollarSign, TrendingUp, Clock, Calculator, ShieldCheck, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenDemo: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemo }) => {
  // Sliders state with requested defaults
  const [hourlyDowntimeCost, setHourlyDowntimeCost] = useState<number>(10000);
  const [unplannedHoursMonth, setUnplannedHoursMonth] = useState<number>(2);
  const [reportingHoursWeek, setReportingHoursWeek] = useState<number>(12);

  // Financial model formulas
  // NOV4 reduces unplanned downtime by ~40-50% through automated edge detection & micro-stop isolation
  const downtimeReductionFactor = 0.45;
  const monthlyDowntimeLoss = hourlyDowntimeCost * unplannedHoursMonth;
  const monthlyDowntimeSavings = monthlyDowntimeLoss * downtimeReductionFactor;

  // Fully-burdened manufacturing/quality engineer cost ~$75/hour
  const engineerHourlyRate = 75;
  const monthlyReportingLaborCost = reportingHoursWeek * 4.33 * engineerHourlyRate;
  // NOV4 eliminates ~90% of manual reporting hours
  const monthlyReportingSavings = monthlyReportingLaborCost * 0.90;

  const totalMonthlySavings = Math.round(monthlyDowntimeSavings + monthlyReportingSavings);
  const totalAnnualSavings = totalMonthlySavings * 12;

  // Standard line-based license investment assumption (~$29,500 turnkey on-prem deployment)
  const estimatedInvestment = 29500;
  const paybackDays = Math.max(12, Math.round((estimatedInvestment / totalMonthlySavings) * 30));

  return (
    <section id="roi-calculator" className="py-20 lg:py-28 bg-[#090D16] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold px-3 py-1 rounded bg-cyan-950/40 border border-cyan-500/30">
            FINANCIAL IMPACT MODEL
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Interactive Plant ROI Calculator
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Quantify the exact dollar value of eliminating hidden micro-stops and replacing manual shift spreadsheets with automated on-premise SCADA reporting.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="rounded-2xl border border-slate-800 bg-[#0B0F17] p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Inputs: 3 Sliders (7 cols) */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Slider 1: Hourly Downtime Cost */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                    <span>Hourly Cost of Line Downtime</span>
                    <span className="text-xs font-mono text-slate-400">(Takt time impact)</span>
                  </label>
                  <span className="text-base font-mono font-bold text-cyan-400 bg-slate-900 px-3 py-1 rounded border border-slate-800">
                    ${hourlyDowntimeCost.toLocaleString()} / hr
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="40000"
                  step="1000"
                  value={hourlyDowntimeCost}
                  onChange={(e) => setHourlyDowntimeCost(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                  <span>$2,000 (Sub-assembly)</span>
                  <span>$10,000 (Default Body-in-White)</span>
                  <span>$40,000 (Final Assembly Line)</span>
                </div>
              </div>

              {/* Slider 2: Unplanned Downtime Hours/Month */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                    <span>Estimated Unplanned Downtime / Month</span>
                    <span className="text-xs font-mono text-slate-400">(Including micro-stops)</span>
                  </label>
                  <span className="text-base font-mono font-bold text-cyan-400 bg-slate-900 px-3 py-1 rounded border border-slate-800">
                    {unplannedHoursMonth} Hours / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="15"
                  step="0.5"
                  value={unplannedHoursMonth}
                  onChange={(e) => setUnplannedHoursMonth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                  <span>0.5 Hours (High Automation)</span>
                  <span>2.0 Hours (Industry Benchmark)</span>
                  <span>15 Hours (Legacy Lines)</span>
                </div>
              </div>

              {/* Slider 3: Engineering Hours on Manual Reporting */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                    <span>Engineering Hours Spent on Manual Reporting</span>
                    <span className="text-xs font-mono text-slate-400">(/ Week across shifts)</span>
                  </label>
                  <span className="text-base font-mono font-bold text-cyan-400 bg-slate-900 px-3 py-1 rounded border border-slate-800">
                    {reportingHoursWeek} Hours / wk
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="35"
                  step="1"
                  value={reportingHoursWeek}
                  onChange={(e) => setReportingHoursWeek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                  <span>2 Hours</span>
                  <span>12 Hours (3 shifts × 4h)</span>
                  <span>35 Hours</span>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800/80 text-xs text-slate-400 leading-relaxed font-mono flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Grounding: Calculations use a conservative 45% micro-stop recovery model & $75/hr fully loaded manufacturing engineer rate.
                </span>
              </div>
            </div>

            {/* Right Output Card (5 cols) */}
            <div className="lg:col-span-5 rounded-xl bg-gradient-to-b from-cyan-950/40 via-slate-900/90 to-slate-950 border border-cyan-500/40 p-6 sm:p-7 glow-cyan flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20 mb-5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                    Financial Assessment
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                    HIGH RETURN
                  </span>
                </div>

                {/* Projected Monthly Savings */}
                <div className="mb-6">
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wide">
                    Projected Monthly Savings
                  </p>
                  <div className="text-4xl sm:text-5xl font-mono font-extrabold text-white mt-1 tracking-tight">
                    ${totalMonthlySavings.toLocaleString()}
                    <span className="text-cyan-400 text-2xl">+</span>
                  </div>
                  <p className="text-xs text-emerald-400 font-mono mt-1">
                    ≈ ${(totalAnnualSavings).toLocaleString()} saved annually per line
                  </p>
                </div>

                {/* Payback Period */}
                <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 font-mono space-y-2 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">Estimated Payback Period:</span>
                    <span className="text-sm font-bold text-emerald-400">
                      &lt; {paybackDays} Days
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">Downtime Loss Avoided:</span>
                    <span className="text-xs font-bold text-slate-200">
                      ${Math.round(monthlyDowntimeSavings).toLocaleString()}/mo
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">Clerical Time Reclaimed:</span>
                    <span className="text-xs font-bold text-slate-200">
                      {Math.round(reportingHoursWeek * 4.33 * 0.9)} hrs/mo
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenDemo}
                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-slate-950 font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Request Custom Plant Business Case</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
