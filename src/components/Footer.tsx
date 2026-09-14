import React from 'react';
import { ShieldCheck, Lock, Terminal, FileCode, ExternalLink, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05080E] text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Corporate Statement (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-cyan-500/40 bg-slate-900 p-0.5">
                <img src="./logo.jpg" alt="NOV4 Logo" className="w-full h-full object-cover rounded" />
              </div>
              <span className="font-mono text-xl font-bold tracking-wider text-white">
                NOV<span className="text-cyan-400">4</span>
              </span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                INDUSTRIAL BI
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              NOV4 (Supernova) is the local-first, zero-cloud industrial intelligence engine engineered for mission-critical automotive assembly lines, robotic stamping, and discrete manufacturing plants.
            </p>

            {/* NDA Commitment Badge */}
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs font-mono flex items-start gap-2.5">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-[11px] leading-normal text-slate-300">
                <strong className="text-emerald-400 block mb-0.5">Strict Enterprise NDA-First Policy</strong>
                We respect factory IP and sign strict NDAs before any plant data audit or brownfield architectural assessment.
              </div>
            </div>
          </div>

          {/* Col 1: Platform */}
          <div className="space-y-3 text-xs">
            <h4 className="font-mono font-bold uppercase tracking-wider text-slate-200">
              Platform Modules
            </h4>
            <ul className="space-y-2 font-medium">
              <li><a href="#modules" className="hover:text-cyan-400 transition-colors">Path Definer™ DAG Engine</a></li>
              <li><a href="#modules" className="hover:text-cyan-400 transition-colors">Real-Time OEE & Downtime Studio</a></li>
              <li><a href="#modules" className="hover:text-cyan-400 transition-colors">Automated Shift Report Dispatcher</a></li>
              <li><a href="#try-nov4" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-cyan-400">
                <span>Interactive Live Sandbox</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              </a></li>
              <li><a href="#architecture" className="hover:text-cyan-400 transition-colors">SCADA Ringbuffer Architecture</a></li>
            </ul>
          </div>

          {/* Col 2: Connectivity & Protocols */}
          <div className="space-y-3 text-xs">
            <h4 className="font-mono font-bold uppercase tracking-wider text-slate-200">
              OT Protocols
            </h4>
            <ul className="space-y-2 font-medium font-mono text-[11px]">
              <li><span className="text-slate-300">Siemens S7comm / S7-1500</span></li>
              <li><span className="text-slate-300">OPC-UA (IEC 62541)</span></li>
              <li><span className="text-slate-300">Modbus TCP / Fieldbus</span></li>
              <li><span className="text-slate-300">Rockwell EtherNet/IP CIP</span></li>
              <li><span className="text-slate-300">Wonderware / PI Historians</span></li>
              <li><span className="text-slate-300">PostgreSQL / SQLite On-Prem</span></li>
            </ul>
          </div>

          {/* Col 3: Compliance & Legal */}
          <div className="space-y-3 text-xs">
            <h4 className="font-mono font-bold uppercase tracking-wider text-slate-200">
              Compliance & Terms
            </h4>
            <ul className="space-y-2 font-medium">
              <li><a href="#architecture" className="hover:text-cyan-400 transition-colors">Air-Gap Cyber Security (IEC 62443)</a></li>
              <li><a href="#licensing" className="hover:text-cyan-400 transition-colors">Enterprise PO & Net Terms</a></li>
              <li><a href="#licensing" className="hover:text-cyan-400 transition-colors">Perpetual CapEx Licensing</a></li>
              <li><a href="#architecture" className="hover:text-cyan-400 transition-colors">Zero-Egress Data Guarantee</a></li>
              <li><span className="text-slate-400">IATF 16949 / ISO 9001 Audit Ready</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-slate-500">
            © {new Date().getFullYear()} NOV4 Industrial Intelligence Inc. All rights reserved. On-Premises Industrial SCADA & OEE Systems.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>SYSTEM: AIR-GAPPED</span>
            </span>
            <span className="text-slate-700">|</span>
            <span>BUILD: v2.8.4-PROD</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
