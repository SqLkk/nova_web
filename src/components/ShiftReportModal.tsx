import React from 'react';
import { X, Download, Printer, CheckCircle, FileSpreadsheet, Shield, Hash, Calendar, Clock, User } from 'lucide-react';
import { SHIFT_HANDOVER_MOCK } from '../data/mockFactoryData';

interface ShiftReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShiftReportModal: React.FC<ShiftReportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMock = () => {
    // Generate a simple CSV/JSON download
    const reportData = `NOV4 AIR-GAPPED SHIFT HANDOVER REPORT\nFacility,${SHIFT_HANDOVER_MOCK.facility}\nShift,${SHIFT_HANDOVER_MOCK.shift}\nLine,${SHIFT_HANDOVER_MOCK.plantLine}\nOEE,${SHIFT_HANDOVER_MOCK.oeeScore}\nTarget Qty,${SHIFT_HANDOVER_MOCK.targetQty}\nActual Qty,${SHIFT_HANDOVER_MOCK.actualQty}\nUnplanned Downtime,${SHIFT_HANDOVER_MOCK.unplannedDowntime}\nBottleneck,${SHIFT_HANDOVER_MOCK.topBottleneck}\nHash,SHA256:7f8a9e2d3c4b5a1f8e9d0c2b4a6f8e7d\n`;
    const blob = new Blob([reportData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `NOV4_Shift_Report_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#0F172A] border border-cyan-500/60 shadow-2xl p-6 sm:p-8 overflow-hidden glow-cyan max-h-[90vh] flex flex-col">
        
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-700/80 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
                <span>Official Shift Handover Certificate</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/40">
                  VERIFIED ISO 9001
                </span>
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Automated compilation from local SCADA ringbuffer :: Zero clipboard manual entry
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadMock}
              className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-mono text-xs flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV/XLSX</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Body (Scrollable) */}
        <div className="my-6 overflow-y-auto pr-1 space-y-6 text-slate-200 text-xs font-mono">
          
          {/* Certificate Header Stamp */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-cyan-400 font-bold text-sm tracking-wider">APEX INDUSTRIAL HOLDINGS GMBH</div>
              <div className="text-slate-400 text-[11px] mt-0.5">Facility: {SHIFT_HANDOVER_MOCK.facility}</div>
              <div className="text-slate-400 text-[11px]">Asset Line: {SHIFT_HANDOVER_MOCK.plantLine}</div>
            </div>
            <div className="text-right text-[11px] text-slate-400">
              <div>Shift: <strong className="text-white">{SHIFT_HANDOVER_MOCK.shift}</strong></div>
              <div>Supervisor: <strong className="text-white">{SHIFT_HANDOVER_MOCK.supervisor}</strong></div>
              <div>Timestamp: <strong className="text-cyan-300">{new Date().toLocaleDateString()} — 14:00:00 CEST</strong></div>
            </div>
          </div>

          {/* Key Metric Snapshot Table */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block uppercase">Overall OEE</span>
              <span className="text-2xl font-bold text-cyan-400 mt-1 block">{SHIFT_HANDOVER_MOCK.oeeScore}</span>
              <span className="text-[10px] text-emerald-400">+2.6% vs Shift Target</span>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block uppercase">Production Qty</span>
              <span className="text-2xl font-bold text-white mt-1 block">{SHIFT_HANDOVER_MOCK.actualQty}</span>
              <span className="text-[10px] text-slate-400">Target: {SHIFT_HANDOVER_MOCK.targetQty}</span>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block uppercase">Quality Rate</span>
              <span className="text-2xl font-bold text-emerald-400 mt-1 block">99.2%</span>
              <span className="text-[10px] text-slate-400">32 Scrap units</span>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block uppercase">Downtime Total</span>
              <span className="text-2xl font-bold text-amber-400 mt-1 block">{SHIFT_HANDOVER_MOCK.unplannedDowntime}</span>
              <span className="text-[10px] text-slate-400">2 Root-causes logged</span>
            </div>
          </div>

          {/* Root-Cause & Corrective Actions */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>Downtime Root-Cause & Interventions</span>
            </h4>
            <div className="space-y-2 text-[11px]">
              <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                <span className="text-slate-300">1. Hydraulic Proportional Valve Pressure Drift</span>
                <span className="text-rose-400 font-bold">24 min lost (Work Order #WO-9921 resolved)</span>
              </div>
              <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                <span className="text-slate-300">2. Infeed Stacker Sensor Micro-stop</span>
                <span className="text-amber-400 font-bold">3 min (Auto-cleared)</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 italic pt-1">
              "Shift Supervisor Note: {SHIFT_HANDOVER_MOCK.operatorRemarks}"
            </p>
          </div>

          {/* Tamper-Evident SHA-256 Audit Trail */}
          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
            <div className="flex items-center gap-2">
              <Hash className="w-3.5 h-3.5 text-cyan-400" />
              <span>SHA-256 HASH: 8f42a19b88c7401d5ee92ba18c304f2910d65e902b</span>
            </div>
            <div className="text-emerald-400 font-bold">IMMUTABLE ON-PREM LEDGER</div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-[11px] font-mono text-slate-400">
            Exported by NOV4 Automated Report Dispatcher (v2.8)
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-bold transition-colors"
          >
            Kapat
          </button>
        </div>

      </div>
    </div>
  );
};
