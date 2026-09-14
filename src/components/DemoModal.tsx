import React, { useState } from 'react';
import { X, CheckCircle2, Shield, Calendar, Building, Mail, User, Layers, HelpCircle, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    plantLocation: '',
    infrastructure: 'Siemens SIMATIC / WinCC',
    primaryChallenge: 'Automated Shift Reporting & Handover',
    preferredDemoType: 'Remote Web Session (Air-gapped simulator)'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate enterprise booking dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Confetti optional
      }
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#0B0F17] border border-cyan-500/50 shadow-2xl p-6 sm:p-8 overflow-hidden glow-cyan max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2">
                <Shield className="w-3.5 h-3.5" />
                <span>Confidential OT Evaluation</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Schedule Technical Plant Walkthrough
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                Connect directly with our industrial solutions architects. We respect factory confidentiality and sign strict NDAs prior to any technical discussion.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Dr. Thomas Becker"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      required
                      type="email"
                      placeholder="t.becker@bmw-group.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Plant / Company Name *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Continental Automotive"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Plant Location (City/Country)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Leipzig, Germany"
                    value={formData.plantLocation}
                    onChange={(e) => setFormData({ ...formData, plantLocation: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Current SCADA / Control Infrastructure
                </label>
                <div className="relative">
                  <select
                    value={formData.infrastructure}
                    onChange={(e) => setFormData({ ...formData, infrastructure: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors appearance-none font-mono"
                  >
                    <option value="Siemens SIMATIC / WinCC">Siemens SIMATIC S7 / WinCC</option>
                    <option value="Rockwell FactoryTalk / Allen-Bradley">Rockwell Automation / FactoryTalk</option>
                    <option value="AVEVA Wonderware / System Platform">AVEVA Wonderware / System Platform</option>
                    <option value="Inductive Automation Ignition">Inductive Automation Ignition</option>
                    <option value="Custom In-House SQL Historian">Custom In-House SQL / SQLite Historian</option>
                    <option value="Mixed Heterogeneous Multi-Vendor">Mixed Heterogeneous Multi-Vendor Floor</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Primary Manufacturing Challenge
                </label>
                <select
                  value={formData.primaryChallenge}
                  onChange={(e) => setFormData({ ...formData, primaryChallenge: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors appearance-none font-mono"
                >
                  <option value="Automated Shift Reporting & Handover">Automated Shift Reporting & Eliminating Excel</option>
                  <option value="Unplanned Downtime & Micro-Stop Detection">Unplanned Micro-Stops & Bottleneck Detection</option>
                  <option value="SCADA Modernization & Air-Gap Compliance">SCADA Modernization & Air-Gap InfoSec Compliance</option>
                  <option value="Full ISA-95 Data Unification (Path Definer)">Full ISA-95 Data Unification (Path Definer™)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Preferred Walkthrough Format
                </label>
                <select
                  value={formData.preferredDemoType}
                  onChange={(e) => setFormData({ ...formData, preferredDemoType: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors appearance-none font-mono"
                >
                  <option value="Remote Web Session (Air-gapped simulator)">Remote Web Session (Air-Gapped Telemetry Sim)</option>
                  <option value="On-Site Factory Proof-of-Concept (PoC)">On-Site Factory Proof-of-Concept (PoC)</option>
                  <option value="Technical Architecture Q&A for IT/OT Sec">Technical Architecture Q&A for IT/OT Sec</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-slate-950 font-mono text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                      <span>Dispatching Request to Solutions Team...</span>
                    </span>
                  ) : (
                    <>
                      <span>Schedule Technical Plant Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500 font-mono">
                🔒 Enterprise NDA Guaranteed. No spam. No cloud tracking.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-bold text-white font-mono mb-2">
              Walkthrough Request Confirmed
            </h3>
            
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed mb-6">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. A dedicated NOV4 Senior OT Solutions Engineer will contact you at <strong className="text-cyan-400">{formData.workEmail}</strong> within 4 business hours to coordinate mutual NDA exchange and calendar alignment.
            </p>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left font-mono text-xs max-w-md mx-auto mb-6 space-y-2">
              <div className="text-slate-400">DEMO DETAILS:</div>
              <div className="text-white">Facility: {formData.companyName} ({formData.plantLocation || 'On-Prem'})</div>
              <div className="text-slate-300">Target SCADA: {formData.infrastructure}</div>
              <div className="text-slate-300">Focus: {formData.primaryChallenge}</div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs font-bold transition-colors"
            >
              Return to Platform Overview
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
