import React from 'react';
import { Check, Shield, FileCheck, HelpCircle, ArrowRight, Building2, Layers } from 'lucide-react';

interface LicensingTableProps {
  onOpenDemo: () => void;
}

export const LicensingTable: React.FC<LicensingTableProps> = ({ onOpenDemo }) => {
  return (
    <section id="licensing" className="py-20 lg:py-28 bg-[#080C14] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold px-3 py-1 rounded bg-cyan-950/40 border border-cyan-500/30">
            TRANSPARENT ENTERPRISE PROCUREMENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Industrial Licensing Built for Plant Budgets
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            No per-user SaaS tolls, no credit card lock-ins, no unexpected cloud transfer fees. Perpetual on-premises licensing structured for corporate CapEx & OpEx frameworks.
          </p>
        </div>

        {/* 3-Column Licensing Tier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-stretch">
          
          {/* Tier 1: Line-Based License */}
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-slate-400 uppercase font-bold tracking-wider">
                  TIER 01
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  PILOT & LINE DEPLOYMENT
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-mono mb-2">
                Line-Based License
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Ideal for validating NOV4 on 1 to 3 critical bottleneck production lines or robotic cells before plant-wide rollout.
              </p>

              <div className="py-4 border-t border-b border-slate-800 mb-6 font-mono">
                <p className="text-xs text-slate-400">Model:</p>
                <p className="text-lg font-bold text-white mt-0.5">Perpetual On-Premises</p>
                <p className="text-[11px] text-cyan-400 mt-0.5">Fixed CapEx investment</p>
              </div>

              <ul className="space-y-3 text-xs text-slate-300 font-medium">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Up to 3 Production Lines / 10 Machines</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Full Real-Time OEE & Downtime Studio</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Standard OPC-UA & Modbus TCP Connectors</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Automated Shift Report PDF Engine</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Local SQLite or PostgreSQL storage</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenDemo}
              className="w-full mt-8 py-3 rounded-lg border border-slate-700 hover:border-cyan-400/60 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-mono text-xs font-bold transition-all text-center"
            >
              Request Line License Quote
            </button>
          </div>

          {/* Tier 2: Plant-Wide Site License (Featured) */}
          <div className="rounded-2xl bg-gradient-to-b from-cyan-950/40 via-slate-900/80 to-slate-950 border-2 border-cyan-500/60 p-6 sm:p-8 flex flex-col justify-between glow-cyan relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-cyan-400 text-slate-950 text-[10px] font-mono font-extrabold uppercase tracking-widest">
              MOST ADOPTED FOR GIGAFACTORIES
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">
                  TIER 02
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">
                  UNLIMITED PLANT FLOOR
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-mono mb-2">
                Plant-Wide Site License
              </h3>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Enterprise coverage for an entire manufacturing campus. Unlimited machines, lines, operators, and historians.
              </p>

              <div className="py-4 border-t border-b border-cyan-500/20 mb-6 font-mono">
                <p className="text-xs text-slate-400">Model:</p>
                <p className="text-lg font-bold text-white mt-0.5">Facility Enterprise License</p>
                <p className="text-[11px] text-emerald-400 mt-0.5">Zero per-seat or per-tag surcharges</p>
              </div>

              <ul className="space-y-3 text-xs text-slate-200 font-medium">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>Unlimited</strong> Production Lines & Cells</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Full Path Definer™ Visual DAG Engine</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Native Siemens S7, Rockwell CIP & Oracle Drivers</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>On-Prem Active Directory / LDAP RBAC</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Priority On-Site / Remote Commissioning Support</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenDemo}
              className="w-full mt-8 py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 hover:brightness-110 text-slate-950 font-mono text-xs font-bold tracking-wide transition-all shadow-lg text-center"
            >
              Request Plant License Walkthrough
            </button>
          </div>

          {/* Tier 3: Annual SLA & Maintenance Add-On */}
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-slate-400 uppercase font-bold tracking-wider">
                  SERVICE & SLA
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  ANNUAL AGREEMENT
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-mono mb-2">
                Annual Enterprise SLA
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Dedicated mission-critical support agreement ensuring peak SCADA performance, DB index tuning, and regular feature packs.
              </p>

              <div className="py-4 border-t border-b border-slate-800 mb-6 font-mono">
                <p className="text-xs text-slate-400">Model:</p>
                <p className="text-lg font-bold text-white mt-0.5">Annual Support & Updates</p>
                <p className="text-[11px] text-cyan-400 mt-0.5">Direct senior engineering access</p>
              </div>

              <ul className="space-y-3 text-xs text-slate-300 font-medium">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>4-Hour SLA for Critical Production Outages</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>On-Prem Database Tuning & Performance Audits</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Quarterly Air-Gapped Firmware / Software ISO Updates</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Custom PLC Protocol Connector Development</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenDemo}
              className="w-full mt-8 py-3 rounded-lg border border-slate-700 hover:border-cyan-400/60 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-mono text-xs font-bold transition-all text-center"
            >
              Inquire About SLA Terms
            </button>
          </div>

        </div>

        {/* Enterprise PO Procurement Note */}
        <div className="rounded-xl bg-slate-950 border border-slate-800 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white font-mono">
                Corporate Purchase Order (PO) & Net 30/60 Terms
              </h4>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
                All software licenses and engineering services are invoiced through standard corporate vendor agreements. We work seamlessly with SAP Ariba, Coupa, and standard enterprise procurement portals.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded border border-emerald-500/30">
              VENDOR READY
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
