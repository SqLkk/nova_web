import React from 'react';
import { ShieldCheck, Server, HardDrive, Lock, Cpu, Network, CheckCircle, Database } from 'lucide-react';

export const ArchitectureSecurity: React.FC = () => {
  const PROTOCOLS = [
    { name: 'Siemens SIMATIC S7', type: 'Native S7comm / S7comm-plus (RFC 1006)', tag: 'PLC Driver' },
    { name: 'OPC-UA (IEC 62541)', type: 'Binary TCP / Security Profile Basic256Sha256', tag: 'SCADA Interop' },
    { name: 'Modbus TCP / RTU', type: 'Direct Function Codes 01-04 polling at 10ms', tag: 'Fieldbus' },
    { name: 'Rockwell EtherNet/IP', type: 'CIP (Common Industrial Protocol) tags', tag: 'PLC Driver' },
    { name: 'Enterprise Historians', type: 'Wonderware InSQL, OSIsoft PI, FactoryTalk', tag: 'Historian' },
    { name: 'Local Relational DBs', type: 'PostgreSQL, Microsoft SQL Server, Oracle 19c', tag: 'Storage' }
  ];

  return (
    <section id="architecture" className="py-20 lg:py-28 bg-[#080C14] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold px-3 py-1 rounded bg-emerald-950/40 border border-emerald-500/30">
            AIR-GAP CERTIFIED & OT APPROVED
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Built for Plant OT Networks. Not Public Clouds.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Industrial intelligence without compromising cybersecurity. NOV4 adheres strictly to ISA/IEC 62443 defense-in-depth requirements.
          </p>
        </div>

        {/* 3 Major Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Pillar 1: Deployment Versatility */}
          <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white font-mono mb-2">
                Bare-Metal, VMware or Docker
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Deploy as a single lightweight Linux/Windows binary, an OVA image inside your local VMware ESXi cluster, or via orchestrated Docker Compose on on-premise industrial PCs (IPCs).
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono text-cyan-400">
              ✓ Hardware footprint: 4 Cores, 8GB RAM min.
            </div>
          </div>

          {/* Pillar 2: 100% Air-Gapped Operation */}
          <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white font-mono mb-2">
                Zero Outbound Telemetry Pingbacks
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                No license heartbeat to cloud servers. No external analytics beacons. Works flawlessly behind deep industrial firewalls with the WAN port physically unplugged.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-400">
              ✓ Complies with IEC 62443 Security Level 3
            </div>
          </div>

          {/* Pillar 3: Local RBAC & Active Directory */}
          <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white font-mono mb-2">
                Local RBAC & On-Prem LDAP / Kerberos
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Granular Role-Based Access Control mapped to your local plant Active Directory or internal LDAP. Define permissions for Shift Operators, Plant Managers, and Quality Auditors.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono text-amber-400">
              ✓ Tamper-evident SHA-256 audit logs
            </div>
          </div>

        </div>

        {/* Industrial Connectivity Matrix */}
        <div className="rounded-2xl border border-slate-800 bg-[#0B0F17] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 mb-6 gap-4">
            <div>
              <h3 className="text-xl font-bold text-white font-mono">
                Native Industrial Protocol Connectors
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Zero third-party middleware required. Connect straight to your brownfield PLCs and historians.
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 self-start sm:self-auto">
              ALL DRIVERS INCLUDED OUT-OF-THE-BOX
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-mono">
            {PROTOCOLS.map((p, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-white font-bold text-xs">{p.name}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 font-medium">
                    {p.tag}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">{p.type}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
