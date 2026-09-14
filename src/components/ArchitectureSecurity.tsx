import React from 'react';
import { Shield, Server, Cpu, HardDrive, Lock, Zap } from 'lucide-react';

export const ArchitectureSecurity: React.FC = () => {
  const specs = [
    {
      icon: Shield,
      title: 'Air-Gapped & Sıfır Bulut Bağımlılığı',
      desc: 'Fabrikanızın üretim verisi asla dış ağa veya genel buluta çıkmaz. Tamamen tesis içindeki sunucularda veya endüstriyel IPC\'lerde bağımsız çalışır.'
    },
    {
      icon: Server,
      title: 'Geniş Endüstriyel Protokol Desteği',
      desc: 'Siemens S7 (S7-1200 / S7-1500), Modbus TCP/RTU, OPC-UA, MQTT ve özel REST servisleri ile doğrudan PLC ve sensör entegrasyonu.'
    },
    {
      icon: Zap,
      title: 'Hafif & Optimize Mimari',
      desc: 'Düşük kaynak tüketimi sayesinde standart endüstriyel panolar veya mini PC\'lerde dahi yüksek performanslı ve akıcı SCADA izleme sunar.'
    },
    {
      icon: HardDrive,
      title: 'Yerel Güvenli Veri Depolama',
      desc: 'Zaman serisi telemetri verileri ve şablonlar yerel veritabanında (SQLite / PostgreSQL) şifreli ve rotasyonlu yedekleme desteğiyle korunur.'
    }
  ];

  return (
    <section id="architecture" className="py-20 bg-[#181420] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono bg-[#FF7A1A]/10 text-[#FF7A1A] border border-[#FF7A1A]/25 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>TEKNİK ALTYAPI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Endüstriyel Saha İçin Tasarlandı
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Üretim hatlarının kesintisiz çalışma gereksinimlerini karşılayan, dış bağımlılıklardan izole, sağlam ve modern bir mühendislik mimarisi.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-xl bg-[#1F1B26] border border-white/10 hover:border-white/20 transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-[#2F2934] border border-white/10 flex items-center justify-center shrink-0 text-[#F5B301]">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-display text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* OT / IT Isolation Diagram Bar */}
        <div className="mt-12 p-6 rounded-xl bg-[#14111B] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold font-display text-white">
                OT (Operasyonel Teknoloji) Ağ Güvenliği
              </h4>
              <p className="text-xs text-slate-400">
                SCADA seviyesinde veri dinleme, çift yönlü erişim kısıtlaması ve izole üretim hattı segmentasyonu.
              </p>
            </div>
          </div>
          <div className="font-mono text-xs text-[#F5B301] bg-[#1F1B26] px-4 py-2 rounded-lg border border-[#F5B301]/20">
            Air-Gap Ready • Zero Telemetry Leak
          </div>
        </div>

      </div>
    </section>
  );
};
