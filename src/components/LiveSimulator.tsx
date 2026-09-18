import React, { useState, useRef } from 'react';
import { MonitorPlay, ExternalLink, RotateCcw, KeyRound, Check, Sparkles, Terminal, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LiveSimulator: React.FC = () => {
  const [copiedRole, setCopiedRole] = useState<string | null>(null);
  const [iframeKey, setIframeKey] = useState<number>(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { t } = useLanguage();

  const handleCopy = (account: { username: string; password: string }) => {
    const textToCopy = `${account.username} / ${account.password}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedRole(account.username);
    setTimeout(() => setCopiedRole(null), 2000);
  };

  const reloadSimulator = () => {
    setIframeKey(prev => prev + 1);
  };

  return (
    <section id="demo-section" className="py-14 sm:py-20 bg-[#08060B] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] sm:text-xs font-mono bg-[#F5B301]/10 text-[#F5B301] border border-[#F5B301]/25 mb-2.5">
              <MonitorPlay className="w-3.5 h-3.5" />
              <span>{t.liveSimulator.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              {t.liveSimulator.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl font-normal leading-relaxed">
              {t.liveSimulator.description}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={reloadSimulator}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-medium text-slate-300 bg-[#15111D] border border-white/10 hover:border-white/20 hover:text-white transition-all cursor-pointer active:scale-95"
              title={t.liveSimulator.restartTitle}
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
              <span>{t.liveSimulator.restartBtn}</span>
            </button>

            <a
              href="/demo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-semibold text-[#08060B] bg-gradient-to-r from-[#F5B301] to-[#FF7A1A] hover:brightness-110 shadow-md transition-all active:scale-95"
            >
              <span>{t.liveSimulator.openNewTab}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Mobile Quick Launcher Notice Bar */}
        <div className="sm:hidden mb-4 p-3 rounded-xl bg-[#15111D] border border-[#F5B301]/30 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Smartphone className="w-4 h-4 text-[#F5B301] shrink-0" />
            <span className="text-[11px]">{t.liveSimulator.mobileNotice}</span>
          </div>
          <a
            href="/demo/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded-lg bg-[#F5B301] text-[#08060B] text-[11px] font-mono font-bold shrink-0 flex items-center gap-1"
          >
            <span>{t.liveSimulator.mobileFullscreen}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Quick Demo Credentials Bar */}
        <div className="mb-6 p-3.5 sm:p-4 rounded-xl bg-[#15111D] border border-[#F5B301]/20">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <KeyRound className="w-4 h-4 text-[#F5B301] shrink-0" />
              <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
                {t.liveSimulator.credentialsTitle}
              </span>
            </div>
            <span className="text-[10px] text-slate-400 hidden sm:inline font-mono">
              {t.liveSimulator.credentialsHint}
            </span>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5">
            {t.liveSimulator.accounts.map((acc) => (
              <button
                key={acc.username}
                onClick={() => handleCopy(acc)}
                className={`flex flex-col text-left p-2.5 rounded-lg border transition-all cursor-pointer active:scale-95 ${acc.color} hover:border-[#F5B301]`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="text-[11px] sm:text-xs font-semibold truncate">{acc.role}</span>
                  {copiedRole === acc.username ? (
                    <span className="flex items-center gap-0.5 text-[9px] sm:text-[10px] text-emerald-400 font-mono shrink-0">
                      <Check className="w-3 h-3" /> {t.liveSimulator.copied}
                    </span>
                  ) : (
                    <span className="text-[9px] opacity-75 font-mono shrink-0">{acc.badge}</span>
                  )}
                </div>
                <div className="font-mono text-[11px] sm:text-xs text-white/90 truncate">
                  <span className="opacity-70">{t.liveSimulator.userLabel}</span> <span className="font-bold text-white">{acc.username}</span>
                </div>
                <div className="font-mono text-[11px] sm:text-xs text-white/90 truncate">
                  <span className="opacity-70">{t.liveSimulator.passLabel}</span> <span className="font-bold text-white">{acc.password}</span>
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-400 mt-1 line-clamp-1 opacity-80">
                  {acc.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Embedded Application Frame: Responsive Height for Mobile */}
        <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#15111D] shadow-2xl shadow-black/80">
          
          {/* Machine Frame Header Bar */}
          <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#0E0B14] border-b border-white/10 flex items-center justify-between select-none">
            
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5 mr-1 sm:mr-2">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-xs text-slate-300">
                <Terminal className="w-3.5 h-3.5 text-[#F5B301] shrink-0" />
                <span className="font-semibold text-white truncate max-w-[130px] sm:max-w-none">{t.liveSimulator.terminalCluster}</span>
                <span className="text-slate-500 hidden sm:inline">|</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                  <span className="hidden sm:inline">{t.liveSimulator.terminalMachines}</span>
                  <span className="sm:hidden text-[10px]">{t.liveSimulator.terminalMachinesMobile}</span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden md:flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <span>{t.liveSimulator.terminalPlants}</span>
              </div>
              <a
                href="/demo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] sm:text-xs font-mono text-[#F5B301] hover:underline flex items-center gap-1 shrink-0"
              >
                <span>{t.liveSimulator.terminalFullscreen}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

          {/* Embedded Iframe */}
          <div className="relative w-full h-[520px] sm:h-[650px] lg:h-[780px] bg-[#08060B]">
            <iframe
              ref={iframeRef}
              key={iframeKey}
              src="/demo/"
              title="Nov4 Web Live Demo"
              className="w-full h-full border-0"
              allow="clipboard-read; clipboard-write; fullscreen"
            />
          </div>

          {/* Simulator Footer Hint */}
          <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-[#0E0B14] border-t border-white/10 flex flex-wrap items-center justify-between text-[10px] sm:text-xs text-slate-400 gap-1.5">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F5B301] shrink-0" />
              <span>
                <strong>{t.liveSimulator.footerHintPrefix}</strong> {t.liveSimulator.footerHintText}
              </span>
            </div>
            <div className="font-mono text-[9px] sm:text-[11px] text-slate-500">
              {t.liveSimulator.footerAirGap}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
