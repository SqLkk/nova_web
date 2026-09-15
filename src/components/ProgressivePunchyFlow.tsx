import React, { useState, useEffect } from 'react';
import { ShieldCheck, Network, Activity, FileSpreadsheet, Play, CheckCircle2, Sparkles, Terminal } from 'lucide-react';

interface ProgressivePunchyFlowProps {
  onNavigateToDemo: () => void;
}

export const ProgressivePunchyFlow: React.FC<ProgressivePunchyFlowProps> = ({ onNavigateToDemo }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

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

  const steps = [
    {
      step: 1,
      tag: '01 / GÜVENLİK & AIR-GAP',
      title: 'İnternet bağlantısı gerektirmez.',
      subtitle: '%100 tesis içi çalışır. Fabrikanızın üretim verisi asla dışarıya veya genel buluta çıkmaz; tamamen kendi yerel sunucularınızda güvende kalır.',
      icon: ShieldCheck,
      color: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      glow: 'from-emerald-500/10 via-transparent to-transparent',
      specs: [
        'Sıfır dış ağ ve bulut bağımlılığı',
        'Fabrika içi şifreli yerel depolama',
        'İzole üretim hatlarında kesintisiz çalışma'
      ]
    },
    {
      step: 2,
      tag: '02 / HARİTALANDIRMA',
      title: 'Hatlarınızı haritalandırarak kolay takip sağlar.',
      subtitle: 'Fabrikanızdaki hatları, istasyonları ve makineleri görsel bir haritada birbirine bağlar; hangi makinenin nerede ve ne durumda olduğunu anında görmenizi sağlar.',
      icon: Network,
      color: 'text-[#F5B301]',
      badgeBg: 'bg-[#F5B301]/10 text-[#F5B301] border-[#F5B301]/30',
      glow: 'from-[#F5B301]/10 via-transparent to-transparent',
      specs: [
        'Tüm makineleri ve hatları görsel ağaç olarak görme',
        'İstasyon durumlarını (çalışıyor, durdu, arıza) anında izleme',
        'Hızlı arama ile istediğiniz makineye tek tıkla ulaşma'
      ]
    },
    {
      step: 3,
      tag: '03 / DURUŞ VE VERİMLİLİK',
      title: 'Duruşları ve arızaları anında görmenizi sağlar.',
      subtitle: 'Makinelerdeki duruş sürelerini, arıza nedenlerini ve hat verimliliğini gecikmesiz hesaplar; kritik sorunları oluştuğu saniyede yakalar.',
      icon: Activity,
      color: 'text-[#FF7A1A]',
      badgeBg: 'bg-[#FF7A1A]/10 text-[#FF7A1A] border-[#FF7A1A]/30',
      glow: 'from-[#FF7A1A]/10 via-transparent to-transparent',
      specs: [
        'Duruş süreleri ve kök neden dağılımı',
        'Hat bazında anlık verimlilik ve hız takibi',
        'Operatör onaylı anlık arıza bildirimleri'
      ]
    },
    {
      step: 4,
      tag: '04 / OTOMATİK RAPORLAMA',
      title: 'Verilerinizi doğrudan Excel formatında raporlar.',
      subtitle: 'Canlı üretim verilerini kendi Excel formüllerinize bağlar; vardiya teslim ve günlük üretim raporlarını tek tıkla otomatik oluşturur.',
      icon: FileSpreadsheet,
      color: 'text-[#FFF8DC]',
      badgeBg: 'bg-[#F5B301]/20 text-[#FFF8DC] border-[#F5B301]/50',
      glow: 'from-[#F5B301]/20 via-[#FF7A1A]/10 to-transparent',
      specs: [
        'Excel formüllerinizle tam uyumlu otomatik hesaplama',
        'Vardiya ve gün sonu raporlarını tek tıkla derleme',
        'Saatler süren manuel veri toplama derdine son'
      ]
    }
  ];

  return (
    <div className="bg-[#08060B] relative">
      
      {/* Sticky Top-Center Scroll Progress Pill: Mobile Adaptive */}
      <div className="sticky top-16 sm:top-20 z-30 flex justify-center pointer-events-none mb-3 px-3">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#15111D]/90 border border-[#F5B301]/25 backdrop-blur-md font-mono text-[10px] sm:text-xs text-slate-300 shadow-xl max-w-[95vw]">
          <span className="text-[#F5B301] font-bold shrink-0">Adım {activeStep}/4:</span>
          <span className="truncate max-w-[150px] sm:max-w-none">
            {activeStep === 1 && 'İnternetsiz Güvenlik'}
            {activeStep === 2 && 'Hat Haritalandırma'}
            {activeStep === 3 && 'Duruş & Verimlilik'}
            {activeStep === 4 && 'Otomatik Raporlama'}
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
      {steps.map((item) => {
        const Icon = item.icon;
        const isStep4 = item.step === 4;

        return (
          <section
            key={item.step}
            id={`step-${item.step}`}
            data-step={item.step}
            className="punchy-slide min-h-[85vh] sm:min-h-screen flex items-center justify-center px-3 sm:px-6 py-14 sm:py-20 border-b border-white/5 relative overflow-hidden"
          >
            {/* Ambient Lighting Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-b ${item.glow} pointer-events-none opacity-50`}></div>
            <div className="absolute inset-0 bg-nova-grid-subtle opacity-30 pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium border mb-4 sm:mb-6 backdrop-blur-md">
                <span className={item.badgeBg}>{item.tag}</span>
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
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Nov4 Yeteneği
                    </div>
                    <div className="text-xs sm:text-sm font-bold font-display text-white">
                      Fabrikanız İçin Pratik Çözüm
                    </div>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-2.5">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start sm:items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-300 font-mono">
                      <CheckCircle2 className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${item.color} shrink-0 mt-0.5 sm:mt-0`} />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PROGRESSIVE "TOOL'U DENE" EVOLUTION */}
              {/* Step 4: BLAZING FULL GLOW (4. kaydırmada tam parlayan kart) */}
              {isStep4 ? (
                <div className="max-w-xl mx-auto animate-scaleUp px-2 sm:px-0">
                  <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#F5B301]/20 via-[#15111D] to-[#FF7A1A]/10 border-2 border-[#F5B301] glow-nova-card-blazing shadow-2xl">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[11px] sm:text-xs font-mono text-[#F5B301] uppercase tracking-wider font-bold mb-1">
                          <Sparkles className="w-3.5 h-3.5 text-[#F5B301] animate-spin" />
                          <span>Tüm Modüller Hazır • 4. Adım Tamamlandı</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-black font-display text-white">
                          Nov4'ü Şimdi Canlı Dene
                        </h3>
                        <p className="text-xs text-slate-300 mt-1 font-mono">
                          21 makine, montaj hatları ve şablon editörüyle hazır ortam.
                        </p>
                      </div>

                      <button
                        onClick={onNavigateToDemo}
                        className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-black font-display text-[#08060B] bg-gradient-to-r from-[#F5B301] via-[#FFC107] to-[#FF7A1A] hover:brightness-110 shadow-xl shadow-[#F5B301]/40 transition-all transform hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
                      >
                        <Play className="w-4 h-4 fill-current shrink-0" />
                        <span>Simülatörü Başlat ↓</span>
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
                        <span>Tool'u Dene (Hazırlanıyor...)</span>
                      </span>
                      <span className="text-[#F5B301] font-bold">
                        {item.step} / 4 Kaydırma
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
