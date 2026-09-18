import React, { useState, useEffect } from 'react';
import { 
  X, 
  Cpu, 
  ShieldCheck, 
  Server, 
  Radio, 
  Lock, 
  FileSpreadsheet, 
  Activity, 
  Network, 
  Users, 
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TechDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechDetailsModal: React.FC<TechDetailsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>('architecture');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Background Click to Dismiss */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Box: Full Height Mobile Responsive */}
      <div className="relative w-full max-w-5xl max-h-[96vh] sm:max-h-[92vh] bg-[#0E0B14] border border-[#F5B301]/30 rounded-xl sm:rounded-2xl shadow-2xl shadow-black overflow-hidden flex flex-col z-10 animate-scaleUp">
        
        {/* Header Bar */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 bg-[#15111D] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F5B301]/10 border border-[#F5B301]/30 flex items-center justify-center text-[#F5B301] shrink-0">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <h2 className="text-lg sm:text-xl font-black font-display text-white">
                  {t.techDetails.modalTitle}
                </h2>
                <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded font-mono bg-[#F5B301]/10 text-[#F5B301] border border-[#F5B301]/30 uppercase font-bold">
                  {t.techDetails.modalBadge}
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-mono truncate max-w-[200px] sm:max-w-none">
                {t.techDetails.modalSubtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-lg bg-[#1F192A] text-slate-400 hover:text-white hover:bg-[#2A233A] transition-colors cursor-pointer"
            title={t.techDetails.closeTitle}
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Tab Navigation: Touch Horizontal Scroll */}
        <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 bg-[#110D18] border-b border-white/5 overflow-x-auto text-[11px] sm:text-xs font-mono shrink-0 no-scrollbar">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'bg-[#F5B301] text-[#08060B] font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {t.techDetails.tabs.architecture}
          </button>

          <button
            onClick={() => setActiveTab('protocols')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'protocols'
                ? 'bg-[#F5B301] text-[#08060B] font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {t.techDetails.tabs.protocols}
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'security'
                ? 'bg-[#F5B301] text-[#08060B] font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {t.techDetails.tabs.security}
          </button>

          <button
            onClick={() => setActiveTab('hardware')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'hardware'
                ? 'bg-[#F5B301] text-[#08060B] font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {t.techDetails.tabs.hardware}
          </button>

          <button
            onClick={() => setActiveTab('faq')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'faq'
                ? 'bg-[#F5B301] text-[#08060B] font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {t.techDetails.tabs.faq}
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6 text-slate-300 text-xs sm:text-sm">
          
          {/* TAB 1: Genel Mimari & Çalışma */}
          {activeTab === 'architecture' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#15111D] border border-white/5 leading-relaxed">
                <h3 className="text-sm sm:text-base font-bold font-display text-white mb-1.5 flex items-center gap-2">
                  <Server className="w-4 h-4 text-[#F5B301]" />
                  <span>{t.techDetails.architecture.title}</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.techDetails.architecture.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5">
                  <div className="w-7 h-7 rounded-lg bg-[#F5B301]/10 text-[#F5B301] flex items-center justify-center mb-2.5">
                    <Network className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-1">{t.techDetails.architecture.card1Title}</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                    {t.techDetails.architecture.card1Desc}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5">
                  <div className="w-7 h-7 rounded-lg bg-[#FF7A1A]/10 text-[#FF7A1A] flex items-center justify-center mb-2.5">
                    <Activity className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-1">{t.techDetails.architecture.card2Title}</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                    {t.techDetails.architecture.card2Desc}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2.5">
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-1">{t.techDetails.architecture.card3Title}</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                    {t.techDetails.architecture.card3Desc}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Protokoller & Entegrasyon */}
          {activeTab === 'protocols' && (
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-sm sm:text-base font-bold font-display text-white mb-1 flex items-center gap-2">
                  <Radio className="w-4 h-4 text-[#F5B301]" />
                  <span>{t.techDetails.protocols.title}</span>
                </h3>
                <p className="text-xs text-slate-400 mb-3">
                  {t.techDetails.protocols.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-white text-xs sm:text-sm font-mono">{t.techDetails.protocols.siemensTitle}</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{t.techDetails.protocols.siemensBadge}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {t.techDetails.protocols.siemensDesc}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-white text-xs sm:text-sm font-mono">{t.techDetails.protocols.modbusTitle}</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#F5B301]/10 text-[#F5B301] border border-[#F5B301]/20">{t.techDetails.protocols.modbusBadge}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {t.techDetails.protocols.modbusDesc}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-white text-xs sm:text-sm font-mono">{t.techDetails.protocols.opcuaTitle}</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">{t.techDetails.protocols.opcuaBadge}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {t.techDetails.protocols.opcuaDesc}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-white text-xs sm:text-sm font-mono">{t.techDetails.protocols.sqlTitle}</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">{t.techDetails.protocols.sqlBadge}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {t.techDetails.protocols.sqlDesc}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: İnternetsiz Güvenlik (Air-Gap) */}
          {activeTab === 'security' && (
            <div className="space-y-4">
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#15111D] border border-emerald-500/20">
                <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1.5 text-xs sm:text-sm">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{t.techDetails.security.airGapTitle}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.techDetails.security.airGapDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5 space-y-1.5">
                  <div className="font-bold text-white flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-[#F5B301]" />
                    <span>{t.techDetails.security.storageTitle}</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    {t.techDetails.security.storageDesc}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5 space-y-1.5">
                  <div className="font-bold text-white flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-sky-400" />
                    <span>{t.techDetails.security.rbacTitle}</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    {t.techDetails.security.rbacDesc}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Donanım & Gereksinimler */}
          {activeTab === 'hardware' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5">
                  <h4 className="text-xs sm:text-sm font-bold text-[#F5B301] font-mono uppercase mb-2">
                    {t.techDetails.hardware.minTitle}
                  </h4>
                  <ul className="space-y-1.5 text-xs font-mono text-slate-300">
                    <li>• <strong>{t.techDetails.hardware.cpuLabel}</strong> {t.techDetails.hardware.minCpu}</li>
                    <li>• <strong>{t.techDetails.hardware.ramLabel}</strong> {t.techDetails.hardware.minRam}</li>
                    <li>• <strong>{t.techDetails.hardware.storageLabel}</strong> {t.techDetails.hardware.minStorage}</li>
                    <li>• <strong>{t.techDetails.hardware.deviceLabel}</strong> {t.techDetails.hardware.minDevice}</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5">
                  <h4 className="text-xs sm:text-sm font-bold text-emerald-400 font-mono uppercase mb-2">
                    {t.techDetails.hardware.recTitle}
                  </h4>
                  <ul className="space-y-1.5 text-xs font-mono text-slate-300">
                    <li>• <strong>{t.techDetails.hardware.cpuLabel}</strong> {t.techDetails.hardware.recCpu}</li>
                    <li>• <strong>{t.techDetails.hardware.ramLabel}</strong> {t.techDetails.hardware.recRam}</li>
                    <li>• <strong>{t.techDetails.hardware.storageLabel}</strong> {t.techDetails.hardware.recStorage}</li>
                    <li>• <strong>{t.techDetails.hardware.envLabel}</strong> {t.techDetails.hardware.recEnv}</li>
                  </ul>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5 text-xs">
                <h4 className="text-xs sm:text-sm font-bold text-white mb-2">{t.techDetails.hardware.supportedTitle}</h4>
                <div className="flex flex-wrap gap-1.5 font-mono text-slate-300 text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-[#1F192A] border border-white/10">Ubuntu 20/22/24</span>
                  <span className="px-2 py-0.5 rounded bg-[#1F192A] border border-white/10">Debian 11/12</span>
                  <span className="px-2 py-0.5 rounded bg-[#1F192A] border border-white/10">RHEL</span>
                  <span className="px-2 py-0.5 rounded bg-[#1F192A] border border-white/10">Windows Server</span>
                  <span className="px-2 py-0.5 rounded bg-[#1F192A] border border-white/10">Docker & Compose</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: Sıkça Sorulan Sorular (SSS) */}
          {activeTab === 'faq' && (
            <div className="space-y-2.5">
              <div className="text-xs text-slate-400 mb-1 font-mono">
                {t.techDetails.faq.header}
              </div>

              {t.techDetails.faq.items.map((faq, fIdx) => (
                <div 
                  key={fIdx}
                  className="rounded-xl bg-[#15111D] border border-white/5 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(fIdx)}
                    className="w-full p-3 sm:p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-white hover:text-[#F5B301] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F5B301] shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    {openFaq === fIdx ? (
                      <ChevronUp className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {openFaq === fIdx && (
                    <div className="px-3 sm:px-4 pb-3.5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-3 border-t border-white/10 bg-[#15111D] flex items-center justify-between shrink-0">
          <span className="text-[11px] sm:text-xs font-mono text-slate-400">
            {t.techDetails.footerDisclaimer}
          </span>
          <button
            onClick={onClose}
            className="px-3 sm:px-4 py-1.5 rounded-lg text-xs font-semibold font-mono bg-[#1F192A] text-white hover:bg-[#2A233A] transition-colors cursor-pointer"
          >
            {t.techDetails.closeBtn}
          </button>
        </div>

      </div>
    </div>
  );
};
