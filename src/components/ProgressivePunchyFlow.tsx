import React, { useState, useEffect } from 'react';
import { ShieldCheck, Network, Activity, FileSpreadsheet, Play, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProgressivePunchyFlowProps {
  onNavigateToDemo: () => void;
}

export const ProgressivePunchyFlow: React.FC<ProgressivePunchyFlowProps> = ({ onNavigateToDemo }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = entry.target.getAttribute('data-step');
            if (stepId) {
              setActiveStep(parseInt(stepId, 10));
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    const slides = document.querySelectorAll('.punchy-slide');
    slides.forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  const stepMeta = [
    {
      step: 1,
      icon: ShieldCheck,
      color: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      glow: 'from-emerald-500/10 via-transparent to-transparent',
    },
    {
      step: 2,
      icon: Network,
      color: 'text-[#F5B301]',
      badgeBg: 'bg-[#F5B301]/10 text-[#F5B301] border-[#F5B301]/30',
      glow: 'from-[#F5B301]/10 via-transparent to-transparent',
    },
    {
      step: 3,
      icon: Activity,
      color: 'text-[#FF7A1A]',
      badgeBg: 'bg-[#FF7A1A]/10 text-[#FF7A1A] border-[#FF7A1A]/30',
      glow: 'from-[#FF7A1A]/10 via-transparent to-transparent',
    },
    {
      step: 4,
      icon: FileSpreadsheet,
      color: 'text-[#FFF8DC]',
      badgeBg: 'bg-[#F5B301]/20 text-[#FFF8DC] border-[#F5B301]/50',
      glow: 'from-[#F5B301]/20 via-[#FF7A1A]/10 to-transparent',
    }
  ];

  return (
    <div className="bg-[#08060B] relative">
      
      {/* Sticky Top-Center Scroll Progress Pill: Mobile Adaptive */}
      <div className="sticky top-16 sm:top-20 z-30 flex justify-center pointer-events-none mb-3 px-3">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#15111D]/90 border border-[#F5B301]/25 backdrop-blur-md font-mono text-[10px] sm:text-xs text-slate-300 shadow-xl max-w-[95vw]">
          <span className="text-[#F5B301] font-bold shrink-0">{t.punchyFlow.stickyStep} {activeStep}/4:</span>
          <span className="truncate max-w-[150px] sm:max-w-none">
            {activeStep === 1 && t.punchyFlow.stepNames.step1}
            {activeStep === 2 && t.punchyFlow.stepNames.step2}
            {activeStep === 3 && t.punchyFlow.stepNames.step3}
            {activeStep === 4 && t.punchyFlow.stepNames.step4}
          </span>
          <div className="flex gap-1 ml-1.5 shrink-0">
            {[1, 2, 3, 4].map((s) => (
              <span
                key={s}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                  s <= activeStep ? 'bg-[#F5B301] shadow-[0_0_8px_#F5B301]' : 'bg-white/10'
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* 4 Punchy Scroll Sections */}
      {t.punchyFlow.steps.map((item, idx) => {
        const meta = stepMeta[idx] || stepMeta[0];
        const Icon = meta.icon;
        const isStep4 = item.step === 4;

        return (
          <section
            key={item.step}
            id={`step-${item.step}`}
            data-step={item.step}
            className="punchy-slide min-h-[85vh] sm:min-h-screen flex items-center justify-center px-3 sm:px-6 py-14 sm:py-20 border-b border-white/5 relative overflow-hidden"
          >
            {/* Ambient Lighting Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-b ${meta.glow} pointer-events-none opacity-50`}></div>
            <div className="absolute inset-0 bg-nova-grid-subtle opacity-30 pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium border mb-4 sm:mb-6 backdrop-blur-md">
                <span className={meta.badgeBg}>{item.tag}</span>
              </div>

              {/* Punchy Sentence */}
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display text-white tracking-tight leading-tight mb-4 sm:mb-6 px-1">
                {item.title}
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-10 px-2">
                {item.subtitle}
              </p>

              {/* Feature Details Box */}
              <div className="p-4 sm:p-8 rounded-2xl bg-[#15111D]/90 border border-white/10 max-w-xl mx-auto backdrop-blur-md shadow-2xl shadow-black/80 text-left mb-6 sm:mb-8">
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#1F192A] border border-white/10 flex items-center justify-center shrink-0">
                    <Icon className={`w-5 h-5 ${meta.color}`} />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      {item.capabilityTitle}
                    </div>
                    <div className="text-xs sm:text-sm font-bold font-display text-white">
                      {item.capabilitySubtitle}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-2.5">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start sm:items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-300 font-mono">
                      <CheckCircle2 className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${meta.color} shrink-0 mt-0.5 sm:mt-0`} />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PROGRESSIVE "DENEYELİM" EVOLUTION */}
              {/* Step 4: BLAZING FULL GLOW (4. kaydırmada tam parlayan kart) */}
              {isStep4 ? (
                <div className="max-w-xl mx-auto animate-scaleUp px-2 sm:px-0">
                  <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#F5B301]/20 via-[#15111D] to-[#FF7A1A]/10 border-2 border-[#F5B301] glow-nova-card-blazing shadow-2xl">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[11px] sm:text-xs font-mono text-[#F5B301] uppercase tracking-wider font-bold mb-1">
                          <Sparkles className="w-3.5 h-3.5 text-[#F5B301] animate-spin" />
                          <span>{t.punchyFlow.step4Card.badge}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-black font-display text-white">
                          {t.punchyFlow.step4Card.title}
                        </h3>
                        <p className="text-xs text-slate-300 mt-1 font-mono">
                          {t.punchyFlow.step4Card.description}
                        </p>
                      </div>

                      <button
                        onClick={onNavigateToDemo}
                        className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-black font-display text-[#08060B] bg-gradient-to-r from-[#F5B301] via-[#FFC107] to-[#FF7A1A] hover:brightness-110 shadow-xl shadow-[#F5B301]/40 transition-all transform hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
                      >
                        <Play className="w-4 h-4 fill-current shrink-0" />
                        <span>{t.punchyFlow.step4Card.buttonText}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Steps 1-3: Progressive faint glow card with step hint */
                <div className="max-w-md mx-auto px-2 sm:px-0">
                  <div 
                    className={`p-3 rounded-xl border transition-all duration-500 ${
                      item.step === 1 ? 'opacity-35 bg-[#15111D]/30 border-[#F5B301]/20' :
                      item.step === 2 ? 'opacity-55 bg-[#15111D]/50 border-[#F5B301]/35 shadow-md shadow-[#F5B301]/5' :
                      'opacity-75 bg-[#15111D]/70 border-[#F5B301]/50 shadow-lg shadow-[#F5B301]/10'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1.5 sm:gap-2">
                        <Terminal className="w-3.5 h-3.5 text-[#F5B301] shrink-0" />
                        <span>{t.punchyFlow.stepHint.preparing}</span>
                      </span>
                      <span className="text-[#F5B301] font-bold">
                        {item.step} / 4 {t.punchyFlow.stepHint.scrolls}
                      </span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </section>
        );
      })}

    </div>
  );
};
