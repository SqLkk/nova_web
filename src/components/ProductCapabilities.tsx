import React from 'react';
import { 
  Activity, 
  Network, 
  BellRing, 
  FileSpreadsheet, 
  Database, 
  ShieldCheck,
  Cpu,
  Workflow
} from 'lucide-react';

export const ProductCapabilities: React.FC = () => {
  const capabilities = [
    {
      icon: Activity,
      title: 'Canlı Operasyon Paneli (Dashboard)',
      tag: 'Gerçek Zamanlı Telemetri',
      color: 'from-[#F5B301]/20 to-transparent border-[#F5B301]/40 text-[#F5B301]',
      description: 'Fabrika sahasındaki makine ve hatların anlık durumlarını (Çalışıyor, Uyarı, Alarm, Çevrimdışı), OEE metriklerini ve üretim hızlarını tek bir ekranda canlı izleyin.',
      features: [
        'Anlık durum sayaçları ve OEE dağılımı',
        'KUKA robot, CNC tezgah ve PLC durum telemetrisi',
        'Zaman serisi grafikleri ve vardiya performans takibi'
      ]
    },
    {
      icon: Network,
      title: 'Fabrika Ağ Haritası (Network Map)',
      tag: 'Dinamik Topoloji',
      color: 'from-[#FF7A1A]/20 to-transparent border-[#FF7A1A]/40 text-[#FF7A1A]',
      description: 'Lokasyon (Tesis) -> Üretim Hattı -> İstasyon ve Makine hiyerarşisini interaktif bir topoloji haritasında görselleştirin. Zoom-to-fit desteğiyle tesis genelini anında denetleyin.',
      features: [
        'Hiyerarşik ağ görünümü (Fabrika > Hat > Makine)',
        'Dinamik zoom-to-fit ve serbest gezinme (Pan/Zoom)',
        'Makine arızalarında anında parlayan durum düğümleri'
      ]
    },
    {
      icon: BellRing,
      title: 'Merkezi Alarm & Olay Yönetimi',
      tag: 'Erken Uyarı Sistemi',
      color: 'from-rose-500/20 to-transparent border-rose-500/40 text-rose-400',
      description: 'Sensör ve PLC eşik aşımlarını milisaniye hassasiyetinde yakalayın. Kritik, uyarı ve bilgi seviyeli alarmları operatör onay mekanizmasıyla yönetin.',
      features: [
        'Öncelik dereceli alarm listesi ve filtreleme',
        'Kök neden analizi ve arıza geçmişi günlüğü',
        'Operatör onay (Acknowledge) ve müdahale takibi'
      ]
    },
    {
      icon: FileSpreadsheet,
      title: 'Excel Benzeri Şablon Editörü',
      tag: 'Rapor Kalbi',
      color: 'from-emerald-500/20 to-transparent border-emerald-500/40 text-emerald-400',
      description: 'Supernova\'nın güçlü şablon editörüyle Excel benzeri hücre ızgarasında dinamik raporlar tasarlayın. Fabrika veritabanındaki canlı verileri hücrelere kolayca bağlayın.',
      features: [
        'Hücre bazlı matematiksel formüller ve veri bağlama',
        'Otomatik vardiya, günlük ve periyodik rapor üretimi',
        'PDF, Excel ve görsel formatlarda anında dışa aktarım'
      ]
    },
    {
      icon: Database,
      title: 'Tablo Gezgini & Sorgu Katmanı',
      tag: 'Veri Keşfi',
      color: 'from-sky-500/20 to-transparent border-sky-500/40 text-sky-400',
      description: 'Fabrika telemetri tablolarını doğrudan tarayıcı üzerinden keşfedin. Özel SQL sorguları ve Python betikleriyle verilerinizi analiz edin.',
      features: [
        'Canlı SQLite / Timeseries veritabanı gezgini',
        'Görsel sorgu oluşturucu ve SQL konsolu',
        'Python çalışma alanı ile ileri düzey analitik'
      ]
    },
    {
      icon: ShieldCheck,
      title: 'Kapsamlı Yetkilendirme (RBAC)',
      tag: 'Endüstriyel Güvenlik',
      color: 'from-purple-500/20 to-transparent border-purple-500/40 text-purple-400',
      description: 'Yönetici, Mühendis, Hat Operatörü ve İzleyici gibi roller bazında granular sayfa ve işlem izinleri. Kimin hangi hattı veya raporu göreceğini tam kontrol edin.',
      features: [
        'Rol bazlı erişim kontrolü (Role-Based Access)',
        'Sayfa seviyesinde dinamik izin filtreleme',
        'Tesis içi yerel kimlik doğrulama mimarisi'
      ]
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-[#14111B] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono bg-[#F5B301]/10 text-[#F5B301] border border-[#F5B301]/25 mb-4">
            <Workflow className="w-3.5 h-3.5" />
            <span>PLATFORM MODÜLLERİ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Supernova'nın Asıl Yetenekleri
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Supernova bir web vitrini değil; üretim sahasının her adımını anlık olarak yönetebilmeniz için tasarlanmış modüler bir endüstriyel zeka platformudur.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="rounded-xl p-6 bg-[#1F1B26] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center border bg-gradient-to-br ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#2F2934] text-slate-300 border border-white/5">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-white group-hover:text-[#F5B301] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <ul className="space-y-1.5">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-slate-300 flex items-center gap-2 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5B301]"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
