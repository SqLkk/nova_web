import React, { useEffect } from 'react';
import { X, Cpu, ShieldCheck, Database, Server, Radio, Lock, Terminal, Layers } from 'lucide-react';

interface TechDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechDetailsModal: React.FC<TechDetailsModalProps> = ({ isOpen, onClose }) => {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Background Click to Dismiss */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Box */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#14111B] border border-[#F5B301]/30 rounded-2xl shadow-2xl shadow-black overflow-hidden flex flex-col z-10 animate-scaleUp">
        
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-white/10 bg-[#1B1624] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#F5B301]/10 border border-[#F5B301]/30 flex items-center justify-center text-[#F5B301]">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-display text-white flex items-center gap-2">
                <span>NOVA / Supernova</span>
                <span className="text-xs px-2 py-0.5 rounded font-mono bg-[#F5B301]/10 text-[#F5B301] border border-[#F5B301]/25">
                  TEKNİK DETAYLAR
                </span>
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                Mimari Spesifikasyonları, Protokoller ve Çalışma Parametreleri
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#272132] text-slate-400 hover:text-white hover:bg-[#342C42] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm">
          
          {/* Section 1: Protocols */}
          <div>
            <div className="flex items-center gap-2 text-[#F5B301] font-mono text-xs font-semibold uppercase tracking-wider mb-3">
              <Radio className="w-4 h-4" />
              <span>1. Endüstriyel Haberleşme & Protokol Desteği</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#1B1624] border border-white/5">
                <div className="font-semibold text-white font-mono text-xs mb-1">Siemens S7comm (Native)</div>
                <div className="text-xs text-slate-400">
                  S7-1200, S7-1500, S7-300 ve S7-400 serisi PLC'ler ile doğrudan DB blokları ve I/O bellek okuma/yazma.
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1B1624] border border-white/5">
                <div className="font-semibold text-white font-mono text-xs mb-1">Modbus TCP & RTU</div>
                <div className="text-xs text-slate-400">
                  Holding registers, input registers ve coil seviyesinde milisaniyelik telemetri taraması.
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1B1624] border border-white/5">
                <div className="font-semibold text-white font-mono text-xs mb-1">OPC-UA (Binary TCP)</div>
                <div className="text-xs text-slate-400">
                  Endüstri standardı düğüm ağacı gezinmesi, şifreli sertifika doğrulama ve subscription dinleme.
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1B1624] border border-white/5">
                <div className="font-semibold text-white font-mono text-xs mb-1">MQTT & Sparkplug B</div>
                <div className="text-xs text-slate-400">
                  Uç nokta sensörler ve akıllı IIoT ağ geçitleri için düşük bant genişlikli yayın/abone mimarisi.
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Deployment & Infrastructure */}
          <div>
            <div className="flex items-center gap-2 text-[#FF7A1A] font-mono text-xs font-semibold uppercase tracking-wider mb-3">
              <Server className="w-4 h-4" />
              <span>2. Dağıtım Modelleri & Sistem Gereksinimleri</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-[#1B1624] border border-white/5">
                <div className="font-semibold text-white font-mono text-xs mb-1">Bare-Metal / IPC</div>
                <div className="text-xs text-slate-400">
                  Ubuntu, Debian, RHEL veya Windows Server üzerinde doğrudan servis olarak çalışma.
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1B1624] border border-white/5">
                <div className="font-semibold text-white font-mono text-xs mb-1">Konteyner & VM</div>
                <div className="text-xs text-slate-400">
                  Docker Compose ile tek komutla kurulum, VMware ESXi OVA ve Proxmox imajları.
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1B1624] border border-white/5">
                <div className="font-semibold text-white font-mono text-xs mb-1">Düşük Kaynak Tüketimi</div>
                <div className="text-xs text-slate-400">
                  Minimum 2 Core CPU, 4 GB RAM ile standart fabrika içi mini bilgisayarlarda yüksek verim.
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Data & Storage */}
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
              <Database className="w-4 h-4" />
              <span>3. Veri Güvenliği & Depolama</span>
            </div>
            <div className="p-4 rounded-xl bg-[#1B1624] border border-white/5 space-y-2">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white">Air-Gapped Güvencesi:</strong> Dış internet bağlantısına sıfır bağımlılık. Tüm veriler fabrika içi yerel disklerde saklanır; hiçbir telemetri dışarı sızmaz.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-[#F5B301] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white">Şifreli Yedekleme:</strong> Otomatik rotasyonlu yerel SQLite / PostgreSQL yedekleme motoru ve geri yükleme garantisi.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Layers className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white">Rol Tabanlı Yetkilendirme (RBAC):</strong> Superuser, Admin, Mühendis, Operatör ve İzleyici seviyelerinde granular erişim kontrolü.
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Live Architecture Stack */}
          <div className="p-4 rounded-xl bg-[#0C0A10] border border-[#F5B301]/20 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#F5B301] mb-2 font-bold">
              <Terminal className="w-4 h-4" />
              <span>Teknoloji Yığını (Stack)</span>
            </div>
            <div className="text-slate-400 space-y-1">
              <div>• <strong>Arayüz:</strong> Angular & Tailwind SCADA Engine, Canvas/SVG Ağ Topolojisi Haritası</div>
              <div>• <strong>Çekirdek:</strong> Yüksek hızlı I/O telemetri işleyici, in-memory önbellek ve zaman serisi motoru</div>
              <div>• <strong>Raporlama:</strong> Excel formül motoru uyumlu, çok sayfalı şablon derleyici (Template Builder)</div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#1B1624] flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Nov4 Supernova • Industrial Edge SCADA
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold font-mono bg-[#272132] text-white hover:bg-[#342C42] transition-colors cursor-pointer"
          >
            Kapat
          </button>
        </div>

      </div>
    </div>
  );
};
