import React from 'react';
import { ShieldCheck, Zap, Network, FileSpreadsheet, BellRing, CheckCircle2 } from 'lucide-react';

interface PunchyScrollSectionsProps {
  onNavigateToDemo: () => void;
}

export const PunchyScrollSections: React.FC<PunchyScrollSectionsProps> = ({ onNavigateToDemo }) => {
  const slides = [
    {
      id: 'airgap',
      tag: '01 / GÜVENLİK & İZOLASYON',
      title: 'İnternet bağlantısı gerektirmez.',
      subtitle: '%100 Air-Gapped ve tesis içi (on-premise) mimari. Fabrikanızın üretim ve makine verisi asla dışarı veya genel buluta çıkmaz.',
      icon: ShieldCheck,
      color: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      accentGlow: 'from-emerald-500/10 to-transparent',
      specs: [
        'Sıfır dış bulut bağımlılığı',
        'Yerel şifreli SQLite / Timeseries depolama',
        'Fiziksel izole OT ağlarında kesintisiz çalışma'
      ]
    },
    {
      id: 'latency',
      tag: '02 / DOĞRUDAN TELEMETRİ',
      title: 'Her sinyali sıfır gecikmeyle yakalar.',
      subtitle: 'Siemens S7, Modbus TCP ve endüstriyel PLC\'lerle aracı katman olmadan doğrudan haberleşir; telemetriyi milisaniyeler içinde ekrana yansıtır.',
      icon: Zap,
      color: 'text-[#F5B301]',
      badgeBg: 'bg-[#F5B301]/10 text-[#F5B301] border-[#F5B301]/30',
      accentGlow: 'from-[#F5B301]/10 to-transparent',
      specs: [
        'Siemens S7-1200 / S7-1500 yerel DB okuma',
        'Modbus holding & input register taraması',
        'Düşük donanımlı IPC\'lerde bile ultra akıcı'
      ]
    },
    {
      id: 'topology',
      tag: '03 / AĞ HARİTASI',
      title: 'Karmakarışık hatları tek bakışta haritalandırır.',
      subtitle: 'Tesis -> Üretim Hattı -> İstasyon ve Makine hiyerarşisini dinamik ağ topolojisi ve zoom-to-fit desteğiyle önünüze serer.',
      icon: Network,
      color: 'text-[#FF7A1A]',
      badgeBg: 'bg-[#FF7A1A]/10 text-[#FF7A1A] border-[#FF7A1A]/30',
      accentGlow: 'from-[#FF7A1A]/10 to-transparent',
      specs: [
        'İnteraktif pan & zoom topoloji haritası',
        'Canlı makine durum renklendirmesi',
        'KUKA robot, konveyör ve istasyon düğümleri'
      ]
    },
    {
      id: 'template',
      tag: '04 / ŞABLON MOTORU',
      title: 'Raporlama derdine son: Excel esnekliğinde şablon editörü.',
      subtitle: 'Canlı telemetri verilerini hücre formüllerine bağlayın; vardiya teslim, günlük OEE ve operasyon raporlarını tek tıkla otomatik üretin.',
      icon: FileSpreadsheet,
      color: 'text-amber-300',
      badgeBg: 'bg-amber-400/10 text-amber-300 border-amber-400/30',
      accentGlow: 'from-amber-400/10 to-transparent',
      specs: [
        'Hücre bazlı formüller ve veri bağlama',
        'Otomatik vardiya ve denetim raporları',
        'PDF ve Excel formatlarında doğrudan dışa aktarım'
      ]
    },
    {
      id: 'alarms',
      tag: '05 / ERKEN UYARI',
      title: 'Milisaniyelik erken uyarı: Alarmlar gözden kaçmaz.',
      subtitle: 'Kritik eşik aşımlarını oluştuğu anda yakalayın; operatör onay akışı ve olay geçmişiyle arıza kök nedenini saniyeler içinde aydınlatın.',
      icon: BellRing,
      color: 'text-rose-400',
      badgeBg: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
      accentGlow: 'from-rose-500/10 to-transparent',
      specs: [
        'Öncelik seviyeli alarm sıralaması',
        'Operatör onay (Acknowledge) mekanizması',
        'Arıza geçmişi ve kök neden günlüğü'
      ]
    }
  ];

  return (
    <div className="bg-[#0C0A10] relative selection:bg-[#F5B301]/30">
      
      {slides.map((slide, index) => {
        const Icon = slide.icon;
        return (
          <section
            key={slide.id}
            id={`punchy-${slide.id}`}
            className="min-h-[85vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 border-b border-white/5 relative overflow-hidden"
          >
            {/* Subtle background gradient glow per slide */}
            <div className={`absolute inset-0 bg-gradient-to-b ${slide.accentGlow} pointer-events-none opacity-40`}></div>
            
            {/* Subtle grid background */}
            <div className="absolute inset-0 bg-nova-grid opacity-30 pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
              
              {/* Slide Counter / Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border mb-6 backdrop-blur-md transition-all">
                <span className={slide.badgeBg}>
                  {slide.tag}
                </span>
              </div>

              {/* Big Punchy Headline (Her kaydırmada 1 kısa vurucu cümle) */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-white tracking-tight leading-tight mb-6">
                {slide.title}
              </h2>

              {/* Clear, crisp supporting explanation */}
              <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed mb-10">
                {slide.subtitle}
              </p>

              {/* High-Impact Visual Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#14111B]/90 border border-white/10 max-w-xl mx-auto backdrop-blur-md shadow-2xl shadow-black/80 text-left">
                
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#1B1624] border border-white/10 flex items-center justify-center shrink-0">
                    <Icon className={`w-6 h-6 ${slide.color}`} />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Teknik Güvence
                    </div>
                    <div className="text-sm font-bold font-display text-white">
                      Sahada Kanıtlanmış Endüstriyel Altyapı
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {slide.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-mono">
                      <CheckCircle2 className={`w-4 h-4 ${slide.color} shrink-0`} />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Subtle trigger button on slide 5 */}
                {index === slides.length - 1 && (
                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono">Hazır Fabrika Verileriyle:</span>
                    <button
                      onClick={onNavigateToDemo}
                      className="px-4 py-2 rounded-lg text-xs font-semibold font-display text-[#0C0A10] bg-gradient-to-r from-[#F5B301] to-[#FF7A1A] hover:brightness-110 shadow-md cursor-pointer transition-all"
                    >
                      Tool'u Canlı Dene ↓
                    </button>
                  </div>
                )}

              </div>

            </div>
          </section>
        );
      })}

    </div>
  );
};
