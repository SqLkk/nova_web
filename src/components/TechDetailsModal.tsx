import React, { useState, useEffect } from 'react';
import { 
  X, 
  Cpu, 
  ShieldCheck, 
  Database, 
  Server, 
  Radio, 
  Lock, 
  Terminal, 
  FileSpreadsheet, 
  Activity, 
  Network, 
  Users, 
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface TechDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechDetailsModal: React.FC<TechDetailsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>('architecture');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const faqList = [
    {
      q: 'Fabrikamızda internet bağlantısı yok, sistem çalışır mı?',
      a: 'Evet, kesinlikle. Nov4 %100 internetsiz ve yerel (on-premise) çalışacak şekilde tasarlanmıştır. Web arayüzü, veritabanı ve raporlama kütüphaneleri yerel paketin içindedir. İnternet kablosu takılı olmasa dahi hiçbir özellik kısıtlanmaz.'
    },
    {
      q: 'PLC programımızda değişiklik yapmamız gerekir mi, makineyi durdurma riski var mı?',
      a: 'Hayır. Nov4 varsayılan olarak tamamen salt-okunur (read-only) modda çalışır. PLC yazılımınızdaki mevcut DB (Data Block) ve bellek alanlarını dinler; hiçbir parametreyi değiştirmez ve makine çalışmasını asla etkilemez.'
    },
    {
      q: 'Kullanıcı sayısı veya ekran sınırı var mıdır?',
      a: 'Hayır. Sistem istemci başı lisanslama kısıtı içermez. Fabrika içi yerel ağınızdaki yetkili mühendisler, operatörler ve yöneticiler bilgisayarlarından veya tabletlerinden tarayıcı ile aynı anda bağlanabilir.'
    },
    {
      q: 'Kurulum ne kadar sürer ve nereye kurulur?',
      a: 'Fabrika sahasındaki standart bir endüstriyel IPC, mini PC veya sanal sunucuya (Docker / yerel servis) 15-30 dakika içinde kurulur. İstemci bilgisayarlara hiçbir ek program kurmak gerekmez.'
    },
    {
      q: 'Mevcut Excel raporlarımızı kullanabilir miyiz?',
      a: 'Evet. Nov4 şablon editörü Excel formülleriyle tam uyumludur. Mevcut hesaplama tablolarınızı şablon olarak içeri alabilir, hücreleri canlı makine verilerine bağlayarak tek tıkla otomatik Excel (.xlsx) çıktısı alabilirsiniz.'
    }
  ];

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
                  Nov4
                </h2>
                <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded font-mono bg-[#F5B301]/10 text-[#F5B301] border border-[#F5B301]/30 uppercase font-bold">
                  TEKNİK KILAVUZ
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-mono truncate max-w-[200px] sm:max-w-none">
                Mimari, Protokoller, Güvenlik & SSS
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-lg bg-[#1F192A] text-slate-400 hover:text-white hover:bg-[#2A233A] transition-colors cursor-pointer"
            title="Kapat"
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
            Genel Mimari
          </button>

          <button
            onClick={() => setActiveTab('protocols')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'protocols'
                ? 'bg-[#F5B301] text-[#08060B] font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Protokoller
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'security'
                ? 'bg-[#F5B301] text-[#08060B] font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            İnternetsiz Güvenlik
          </button>

          <button
            onClick={() => setActiveTab('hardware')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'hardware'
                ? 'bg-[#F5B301] text-[#08060B] font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Donanım
          </button>

          <button
            onClick={() => setActiveTab('faq')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'faq'
                ? 'bg-[#F5B301] text-[#08060B] font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            SSS
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
                  <span>Sistem Nasıl Çalışır?</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Nov4, tesis içi bağımsız sunucu mimarisiyle çalışır. Sahadaki PLC'ler, robotlar ve sensörlerden verileri 
                  yerel ağ üzerinden periyodik olarak toplar. İstemci tarafında hiçbir ek masaüstü yazılımı veya sürücü kurulumu 
                  gerektirmez; yetkili kullanıcılar bilgisayar veya tabletlerinin web tarayıcısından sisteme bağlanır.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5">
                  <div className="w-7 h-7 rounded-lg bg-[#F5B301]/10 text-[#F5B301] flex items-center justify-center mb-2.5">
                    <Network className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-1">Hat Haritalandırma</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                    Fabrika, hat ve makineleri görsel ağaç yapısında birbirine bağlar. Tüm tesisin durumunu anında gösterir.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5">
                  <div className="w-7 h-7 rounded-lg bg-[#FF7A1A]/10 text-[#FF7A1A] flex items-center justify-center mb-2.5">
                    <Activity className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-1">Duruş & Hız Takibi</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                    Makinelerdeki duruş sürelerini ve verimliliği anlık hesaplar. Kök nedenleri sınıflandırır.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2.5">
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-1">Otomatik Excel Raporlama</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                    Canlı verileri Excel formüllerinize bağlayarak vardiya bitiminde otomatik .xlsx dosyaları üretir.
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
                  <span>Desteklenen Endüstriyel Haberleşme Protokolleri</span>
                </h3>
                <p className="text-xs text-slate-400 mb-3">
                  Nov4, sahada kullanılan yaygın cihazlarla yerel ağ üzerinden doğrudan haberleşir.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-white text-xs sm:text-sm font-mono">Siemens PLC Haberleşmesi</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">S7comm</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    S7-1200, S7-1500, S7-300 ve S7-400 serisi PLC'lerle DB blokları üzerinden konuşur. Salt-okunur çalışır.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-white text-xs sm:text-sm font-mono">Modbus TCP & RTU</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#F5B301]/10 text-[#F5B301] border border-[#F5B301]/20">Standart</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Enerji analizörleri, debimetreler ve transmitterlerle register düzeyinde sürekli veri taraması.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-white text-xs sm:text-sm font-mono">OPC-UA Endüstriyel Ağı</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">Binary TCP</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    KUKA robotlar, CNC üniteleri ve hat ekipmanları için şifreli sertifika doğrulamalı haberleşme.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-white text-xs sm:text-sm font-mono">SQL & Veritabanı Köprüleri</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">Entegre</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Mevcut PostgreSQL, SQLite, MS SQL veya Oracle veritabanlarından doğrudan tablo okuma desteği.
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
                  <span>%100 Air-Gapped Güvencesi</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fabrikanızın üretim reçeteleri ve arıza kayıtları yerel sunucunuzda kalır. Nov4, genel buluta veya dış internete asla veri göndermez.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5 space-y-1.5">
                  <div className="font-bold text-white flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-[#F5B301]" />
                    <span>Tesis İçi Şifreli Depolama</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Tüm veriler yerel diskte şifreli ve rotasyonlu olarak saklanır. Dışarı sızıntı imkansızdır.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5 space-y-1.5">
                  <div className="font-bold text-white flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-sky-400" />
                    <span>Rol Tabanlı Kullanıcı İzinleri</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Yönetici, Mühendis, Operatör ve İzleyici rolleri ile sayfa bazlı erişim yetkilendirmesi.
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
                    Minimum Donanım Gereksinimi
                  </h4>
                  <ul className="space-y-1.5 text-xs font-mono text-slate-300">
                    <li>• <strong>İşlemci:</strong> 2 Çekirdek x86_64 CPU</li>
                    <li>• <strong>Bellek:</strong> 4 GB RAM</li>
                    <li>• <strong>Depolama:</strong> 20 GB SSD disk</li>
                    <li>• <strong>Cihaz:</strong> Standart mini PC veya endüstriyel IPC</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5">
                  <h4 className="text-xs sm:text-sm font-bold text-emerald-400 font-mono uppercase mb-2">
                    Önerilen Sunucu (10+ Hat)
                  </h4>
                  <ul className="space-y-1.5 text-xs font-mono text-slate-300">
                    <li>• <strong>İşlemci:</strong> 4 Çekirdek modern CPU</li>
                    <li>• <strong>Bellek:</strong> 8 GB veya 16 GB RAM</li>
                    <li>• <strong>Depolama:</strong> 60 GB SSD / NVMe</li>
                    <li>• <strong>Ortam:</strong> Bare-Metal, VMware veya Proxmox</li>
                  </ul>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#15111D] border border-white/5 text-xs">
                <h4 className="text-xs sm:text-sm font-bold text-white mb-2">Desteklenen Sistemler</h4>
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
                Fabrika ekiplerinin en çok merak ettiği sorular:
              </div>

              {faqList.map((faq, fIdx) => (
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
            Nov4 Platform • Yerel Endüstriyel Veri Sistemi
          </span>
          <button
            onClick={onClose}
            className="px-3 sm:px-4 py-1.5 rounded-lg text-xs font-semibold font-mono bg-[#1F192A] text-white hover:bg-[#2A233A] transition-colors cursor-pointer"
          >
            Kapat
          </button>
        </div>

      </div>
    </div>
  );
};
