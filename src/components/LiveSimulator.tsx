import React, { useState, useRef } from 'react';
import { MonitorPlay, ExternalLink, RotateCcw, KeyRound, Check, Sparkles, Terminal } from 'lucide-react';

export const LiveSimulator: React.FC = () => {
  const [copiedRole, setCopiedRole] = useState<string | null>(null);
  const [iframeKey, setIframeKey] = useState<number>(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const demoAccounts = [
    {
      role: 'Sistem Yöneticisi',
      username: 'admin',
      password: 'Sp7_Admin#9841',
      badge: 'Admin Paneli & ACL',
      desc: 'Kullanıcı, rol ve sistem izinleri',
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/5'
    },
    {
      role: 'Sistem / Hat Mühendisi',
      username: 'engineer',
      password: 'Sp7_Engineer#5544',
      badge: 'Space Map & Figürler, Python',
      desc: 'Topoloji temaları, figürler ve SQL',
      color: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/5'
    },
    {
      role: 'Düz User (Operatör)',
      username: 'operator',
      password: 'Sp7_Operator#1520',
      badge: 'İzleme & Operasyon',
      desc: 'Canlı panolar ve alarm onayı',
      color: 'border-amber-500/40 text-amber-400 bg-amber-500/5'
    },
    {
      role: 'Geliştirici (Superuser)',
      username: 'utku',
      password: 'utku123',
      badge: 'Full Yetki / Sistem Mimarı',
      desc: 'Tüm modüllerde sınırsız yetki',
      color: 'border-[#F5B301]/40 text-[#F5B301] bg-[#F5B301]/5'
    },
    {
      role: 'İzleyici (Misafir)',
      username: 'viewer',
      password: 'Sp7_Viewer#7611',
      badge: 'Salt Okunur',
      desc: 'Pano ve rapor görüntüleme',
      color: 'border-slate-500/40 text-slate-400 bg-slate-500/5'
    }
  ];

  const handleCopy = (account: typeof demoAccounts[0]) => {
    const textToCopy = `${account.username} / ${account.password}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedRole(account.username);
    setTimeout(() => setCopiedRole(null), 2000);
  };

  const reloadSimulator = () => {
    setIframeKey(prev => prev + 1);
  };

  return (
    <section id="demo-section" className="py-20 bg-[#08060B] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono bg-[#F5B301]/10 text-[#F5B301] border border-[#F5B301]/25 mb-3">
              <MonitorPlay className="w-3.5 h-3.5" />
              <span>İNTERAKTİF CANLI ORTAM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Nov4 Canlı Simülatör
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-2xl font-normal">
              Nov4 endüstriyel veri ve raporlama platformunu doğrudan tarayıcınızda test edin. 
              Aşağıdaki hazır hesaplardan birine tıklayıp giriş yapabilir; montaj hatlarını, KUKA robotlarını, 
              Siemens PLC verilerini ve şablon editörünü canlı inceleyebilirsiniz.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={reloadSimulator}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-medium text-slate-300 bg-[#15111D] border border-white/10 hover:border-white/20 hover:text-white transition-all cursor-pointer"
              title="Simülatörü Yeniden Başlat"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
              <span>Yeniden Başlat</span>
            </button>

            <a
              href="/demo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-[#08060B] bg-gradient-to-r from-[#F5B301] to-[#FF7A1A] hover:brightness-110 shadow-md transition-all"
            >
              <span>Ayrı Sekmede Aç</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Quick Demo Credentials Bar */}
        <div className="mb-6 p-4 rounded-xl bg-[#15111D] border border-[#F5B301]/20">
          <div className="flex items-center gap-2 mb-3">
            <KeyRound className="w-4 h-4 text-[#F5B301]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
              Hazır Test Hesapları (Kopyalamak için tıklayın)
            </span>
            <span className="text-[11px] text-slate-400 ml-auto hidden sm:inline">
              Tıklayarak bilgileri panoya alabilir ve giriş ekranına yapıştırabilirsiniz.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
            {demoAccounts.map((acc) => (
              <button
                key={acc.username}
                onClick={() => handleCopy(acc)}
                className={`flex flex-col text-left p-2.5 rounded-lg border transition-all cursor-pointer ${acc.color} hover:border-[#F5B301]`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="text-xs font-semibold truncate">{acc.role}</span>
                  {copiedRole === acc.username ? (
                    <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                  ) : (
                    <span className="text-[9px] opacity-75 font-mono shrink-0">{acc.badge}</span>
                  )}
                </div>
                <div className="font-mono text-xs text-white/90">
                  <span className="opacity-70">kullanıcı:</span> <span className="font-bold text-white">{acc.username}</span>
                </div>
                <div className="font-mono text-xs text-white/90">
                  <span className="opacity-70">şifre:</span> <span className="font-bold text-white">{acc.password}</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1 line-clamp-1 opacity-80">
                  {acc.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Embedded Supernova Application Frame */}
        <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#15111D] shadow-2xl shadow-black/80">
          
          {/* Machine Frame Header Bar */}
          <div className="h-11 px-4 bg-[#0E0B14] border-b border-white/10 flex items-center justify-between select-none">
            
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5 mr-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                <Terminal className="w-3.5 h-3.5 text-[#F5B301]" />
                <span className="font-semibold text-white">nov4-node://cluster-01</span>
                <span className="text-slate-500">|</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  In-Memory Mock Fabrika (21 Makine Aktif)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <span>Tesisler:</span>
                <span className="text-slate-200">Alpha • Beta • Gamma</span>
              </div>
              <a
                href="/demo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#F5B301] hover:underline flex items-center gap-1"
              >
                <span>Tam Ekran</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

          {/* Embedded Iframe */}
          <div className="relative w-full h-[780px] bg-[#08060B]">
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
          <div className="px-4 py-2.5 bg-[#0E0B14] border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F5B301]" />
              <span>
                <strong>Giriş Yaptıktan Sonra:</strong> Sol menüden <em>Dashboard</em>, <em>Ağ Haritası</em>, <em>Alarmlar</em> ve <em>Şablon Editörü</em> sekmelerini dolaşabilir; sol alttaki tema butonuyla Açık / Koyu tema geçişini test edebilirsiniz.
              </span>
            </div>
            <div className="font-mono text-[11px] text-slate-500">
              Çevrimdışı Mock Modu • %100 Air-Gapped Simülasyon
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
