import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  AlertTriangle, 
  Gauge, 
  GitFork, 
  FileText, 
  Download, 
  HelpCircle, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Activity,
  Layers,
  HardDrive,
  Clock,
  Cpu,
  Zap,
  Info
} from 'lucide-react';
import { INITIAL_PLANT_DATA, DAG_PIPELINE_NODES, ProductionLine } from '../data/mockFactoryData';

interface TryNov4SandboxProps {
  onPreviewShiftReport: () => void;
  onOpenDemo: () => void;
}

export const TryNov4Sandbox: React.FC<TryNov4SandboxProps> = ({ 
  onPreviewShiftReport,
  onOpenDemo
}) => {
  const [lines, setLines] = useState<ProductionLine[]>(INITIAL_PLANT_DATA);
  const [selectedLineId, setSelectedLineId] = useState<string>('line-stamping');
  const [isSimulating, setIsSimulating] = useState<boolean>(true);
  const [activeStepTip, setActiveStepTip] = useState<number>(0);
  const [selectedDagNode, setSelectedDagNode] = useState<string>('calc-oee');
  const [alertNotification, setAlertNotification] = useState<string | null>(null);

  const currentLine = lines.find(l => l.id === selectedLineId) || lines[0];

  // Periodic subtle telemetry jitter to simulate live SCADA feed
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      setLines(prevLines => 
        prevLines.map(line => {
          if (line.status === 'WARNING') {
            return line; // keep anomaly state
          }
          const jitter = (Math.random() - 0.5) * 0.4;
          const loadJitter = (Math.random() - 0.5) * 1.2;
          const vibJitter = (Math.random() - 0.5) * 0.05;
          
          return {
            ...line,
            unitsProduced: line.unitsProduced + (Math.random() > 0.6 ? 1 : 0),
            goodUnits: line.goodUnits + (Math.random() > 0.6 ? 1 : 0),
            telemetry: {
              ...line.telemetry,
              hydraulicPressure: +(line.telemetry.hydraulicNominal + jitter).toFixed(1),
              spindleLoad: Math.min(95, Math.max(40, +(line.telemetry.spindleLoad + loadJitter).toFixed(1))),
              vibrationRms: Math.max(0.2, +(line.telemetry.vibrationRms + vibJitter).toFixed(2))
            }
          };
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [isSimulating]);

  // Interactive Action 1: Inject Hydraulic Pressure Anomaly
  const handleInjectPressureAnomaly = () => {
    setLines(prev => prev.map(line => {
      if (line.id === selectedLineId) {
        const newDowntime = {
          id: `DT-SIM-${Math.floor(1000 + Math.random() * 9000)}`,
          timestamp: new Date().toLocaleTimeString(),
          reason: 'Hydraulic Proportional Valve Pressure Drop (< 165 bar)',
          category: 'Unplanned Pressure Anomaly',
          durationMinutes: 12,
          financialImpact: 2000,
          status: 'INVESTIGATING' as const
        };
        return {
          ...line,
          status: 'WARNING',
          oee: Math.max(65, +(line.oee - 8.2).toFixed(1)),
          availability: Math.max(70, +(line.availability - 9.5).toFixed(1)),
          telemetry: {
            ...line.telemetry,
            hydraulicPressure: 162.5,
            vibrationRms: 4.82
          },
          recentDowntimes: [newDowntime, ...line.recentDowntimes]
        };
      }
      return line;
    }));

    setAlertNotification('🚨 ANOMALİ TESPİT EDİLDİ: Hidrolik basınç 162.5 bar seviyesine düştü! NOV4 otomatik kök neden kaydı açtı.');
    setActiveStepTip(2); // Jump to step 3 in tips
  };

  // Interactive Action 2: Simulate 42-second Micro-Stop (Feeder Jam)
  const handleSimulateMicroStop = () => {
    setLines(prev => prev.map(line => {
      if (line.id === selectedLineId) {
        const newDowntime = {
          id: `MC-${Math.floor(1000 + Math.random() * 9000)}`,
          timestamp: new Date().toLocaleTimeString(),
          reason: 'Infeed Stacker Optical Jam (42s Micro-stop)',
          category: 'Sub-minute Bottleneck',
          durationMinutes: 0.7,
          financialImpact: 350,
          status: 'RESOLVED' as const
        };
        return {
          ...line,
          performance: Math.max(80, +(line.performance - 1.8).toFixed(1)),
          oee: Math.max(75, +(line.oee - 1.4).toFixed(1)),
          recentDowntimes: [newDowntime, ...line.recentDowntimes]
        };
      }
      return line;
    }));

    setAlertNotification('⚡ MİKRO DURUŞ YAKALANDI: 42 saniyelik besleyici tıkanması tespit edildi. Manuel kağıt forma gerek kalmadan kaydedildi.');
    setActiveStepTip(1);
  };

  // Reset to nominal normal run
  const handleResetNominal = () => {
    setLines(INITIAL_PLANT_DATA);
    setAlertNotification(null);
  };

  // Guide tips data
  const TIPS = [
    {
      step: 1,
      badge: 'Fabrika & Hat Seçimi',
      title: 'Heterojen PLC ve Kontrolcüleri Deneyin',
      desc: 'Yukarıdaki butonlardan Hat 1 (Siemens S7), Hat 2 (KUKA KRC4) veya Hat 3 (Sinumerik ONE) arasında geçiş yapın. NOV4, farklı marka ve protokollerdeki veriyi standart ISA-95 modeline otomatik eşitler.',
      actionHint: 'Yukarıdaki hat sekmelerine tıklayarak makineyi değiştirin.'
    },
    {
      step: 2,
      badge: 'Mikro Duruş Avcısı',
      title: 'Operatörlerin Gizlediği < 1 Dk Duruşları Görün',
      desc: 'Klasik Excel vardiya raporlarında 40-50 saniyelik mikro duruşlar asla yazılmaz, ancak vardiya sonunda saatlik %10 kayba neden olur. "42s Mikro Duruş Simüle Et" butonuna basarak NOV4\'ün bunu anında nasıl yakaladığını test edin.',
      actionHint: '"Simulate 42s Micro-Stop" düğmesini test edin.'
    },
    {
      step: 3,
      badge: 'Anomali & OEE Motoru',
      title: 'Gerçek Zamanlı Kök Neden Tespiti',
      desc: 'Sensör eşik sınırları aşıldığında (Örn: Basınç 180 bar altına düştüğünde) sistem OEE Kullanılabilirlik metriğini otomatik günceller ve mekanik bakım ekibine kapalı devre iş emri açar.',
      actionHint: '"Inject Pressure Anomaly" düğmesine tıklayın.'
    },
    {
      step: 4,
      badge: 'Vardiya Teslim Raporu',
      title: '0 Manuel Veri Girişi — Tek Tıkla Rapor',
      desc: 'Vardiya amirlerinin mesai sonundaki 45 dakikalık manuel Excel ve kağıt tutanak derleme çilesi son bulur. Sağ üstteki "1-Click Export" butonuna basarak resmi denetim çıktısını inceleyin.',
      actionHint: '"Export Shift PDF" butonuna tıklayarak raporu açın.'
    }
  ];

  return (
    <section id="try-nov4" className="py-20 lg:py-28 bg-[#070A10] border-t border-b border-slate-800/80 relative">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-industrial-grid opacity-40 pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-800 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
              <Activity className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Canlı Demo Sandbox (Try NOV4)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Fabrika Zeminini Canlı Simüle Edin
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-normal">
              Aşağıdaki gerçekçi endüstriyel dummy veriler ile NOV4'ün mikro duruşları, PLC telemetrisini ve vardiya raporlarını yerel ağda nasıl işlediğini kendiniz test edin.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsSimulating(!isSimulating)}
              className={`px-3.5 py-2 rounded-lg font-mono text-xs font-bold flex items-center gap-2 border transition-all ${
                isSimulating 
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400' 
                  : 'bg-slate-800 border-slate-700 text-slate-300'
              }`}
            >
              {isSimulating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isSimulating ? 'Telemetri Yayını: Canlı' : 'Yayın Duraklatıldı'}</span>
            </button>

            <button
              onClick={handleResetNominal}
              className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white font-mono text-xs flex items-center gap-1.5 transition-colors"
              title="Varsayılan değerlere sıfırla"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Sıfırla</span>
            </button>
          </div>
        </div>

        {/* Guided Interactive Hint & Tour Box */}
        <div className="mb-8 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-950 border border-cyan-500/40 p-5 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-cyan-500/10 to-transparent pointer-events-none"></div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0 text-cyan-400 mt-0.5">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    ADIM {TIPS[activeStepTip].step} / {TIPS.length}: {TIPS[activeStepTip].badge}
                  </span>
                  <span className="text-white text-sm font-bold">
                    {TIPS[activeStepTip].title}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                  {TIPS[activeStepTip].desc}
                </p>
                <p className="text-[11px] font-mono text-cyan-400 font-semibold mt-1 flex items-center gap-1">
                  <span className="text-cyan-400">👉 Yapılacak:</span> {TIPS[activeStepTip].actionHint}
                </p>
              </div>
            </div>

            {/* Stepper Navigation */}
            <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
              <button
                onClick={() => setActiveStepTip((prev) => (prev > 0 ? prev - 1 : TIPS.length - 1))}
                className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Önceki ipucu"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-slate-400">
                {activeStepTip + 1} / {TIPS.length}
              </span>
              <button
                onClick={() => setActiveStepTip((prev) => (prev < TIPS.length - 1 ? prev + 1 : 0))}
                className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Sonraki ipucu"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Alert Banner */}
        {alertNotification && (
          <div className="mb-6 p-4 rounded-xl bg-amber-950/40 border border-amber-500/50 text-amber-200 text-xs font-mono flex items-center justify-between gap-4 animate-pulse">
            <div className="flex items-center gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{alertNotification}</span>
            </div>
            <button 
              onClick={() => setAlertNotification(null)}
              className="text-amber-400 hover:text-white text-[11px] uppercase font-bold underline"
            >
              Kapat
            </button>
          </div>
        )}

        {/* 1. Production Line Switcher Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {lines.map((line) => {
            const isSelected = line.id === selectedLineId;
            return (
              <button
                key={line.id}
                onClick={() => {
                  setSelectedLineId(line.id);
                  setActiveStepTip(0);
                }}
                className={`text-left p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-slate-900 border-cyan-500 shadow-[0_0_20px_rgba(0,229,255,0.15)] ring-1 ring-cyan-500/30' 
                    : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-cyan-400 font-bold">
                      {line.code}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                      line.status === 'RUNNING' 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                    }`}>
                      {line.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {line.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {line.machine}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Protokol:</span>
                  <span className="text-slate-200">{line.protocol}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* 2. Main Sandbox Interactive Workstation */}
        <div className="rounded-2xl border border-slate-800 bg-[#0B0F17] p-5 sm:p-6 lg:p-7 shadow-2xl mb-8">
          
          {/* Workstation Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-800 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white font-mono">
                  {currentLine.machine}
                </h3>
                <span className="text-xs font-mono text-slate-400">({currentLine.plcType})</span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                ISA-95 HİYERARŞİSİ: APEX-GLOBAL &gt; {currentLine.plant} &gt; {currentLine.code}
              </p>
            </div>

            {/* Interactive Simulation Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={handleInjectPressureAnomaly}
                className="px-3.5 py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold transition-all flex items-center gap-2 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]"
              >
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                <span>Simulate Pressure Anomaly</span>
              </button>

              <button
                onClick={handleSimulateMicroStop}
                className="px-3.5 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold transition-all flex items-center gap-2 hover:shadow-[0_0_15px_rgba(0,229,255,0.2)]"
              >
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>Simulate 42s Micro-Stop</span>
              </button>

              <button
                onClick={onPreviewShiftReport}
                className="px-3.5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-mono text-xs font-bold tracking-wide transition-all flex items-center gap-2 shadow-md hover:brightness-110"
              >
                <Download className="w-3.5 h-3.5 text-slate-950" />
                <span>Export Shift PDF</span>
              </button>
            </div>
          </div>

          {/* Interactive Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            
            {/* Metric 1: Real-Time OEE */}
            <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-4 relative overflow-hidden">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase">CANLI OEE SKORU</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400">
                  A × P × Q
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-mono font-extrabold text-white">
                  {currentLine.oee}%
                </span>
                <span className="text-xs font-mono text-emerald-400">
                  {currentLine.oee > 85 ? 'Optimum' : 'Müdahale Gerekli'}
                </span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                <div 
                  className={`h-full transition-all duration-700 ${currentLine.oee > 85 ? 'bg-cyan-400' : 'bg-amber-400'}`}
                  style={{ width: `${currentLine.oee}%` }}
                ></div>
              </div>
              <div className="grid grid-cols-3 gap-1 text-[10px] font-mono text-slate-400 mt-3 pt-2 border-t border-slate-800/60">
                <div>A: <strong className="text-slate-200">{currentLine.availability}%</strong></div>
                <div>P: <strong className="text-slate-200">{currentLine.performance}%</strong></div>
                <div>Q: <strong className="text-slate-200">{currentLine.quality}%</strong></div>
              </div>
            </div>

            {/* Metric 2: Telemetry Sensor: Hydraulic / Spindle */}
            <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase">HİDROLİK BASINÇ</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  currentLine.telemetry.hydraulicPressure < 180 
                    ? 'bg-rose-500/20 text-rose-300' 
                    : 'bg-emerald-500/10 text-emerald-400'
                }`}>
                  {currentLine.telemetry.hydraulicPressure < 180 ? 'CRITICAL_LOW' : 'NOMİNAL'}
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className={`text-3xl font-mono font-extrabold ${
                  currentLine.telemetry.hydraulicPressure < 180 ? 'text-rose-400 animate-pulse' : 'text-white'
                }`}>
                  {currentLine.telemetry.hydraulicPressure}
                </span>
                <span className="text-xs font-mono text-slate-400">bar</span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-3 pt-2 border-t border-slate-800/60">
                <span>LSL: 180 bar</span>
                <span>NOM: {currentLine.telemetry.hydraulicNominal} bar</span>
                <span>USL: 240 bar</span>
              </div>
            </div>

            {/* Metric 3: Vibration RMS */}
            <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase">TİTREŞİM (VIB RMS)</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                  ISO 10816-3
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className={`text-3xl font-mono font-extrabold ${
                  currentLine.telemetry.vibrationRms > 3.5 ? 'text-amber-400' : 'text-white'
                }`}>
                  {currentLine.telemetry.vibrationRms}
                </span>
                <span className="text-xs font-mono text-slate-400">mm/s</span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-3 pt-2 border-t border-slate-800/60">
                <span>Yatak Sıcaklığı: <strong className="text-slate-200">{currentLine.telemetry.temperature}°C</strong></span>
                <span>Güç: <strong className="text-cyan-400">{currentLine.telemetry.activePower} kW</strong></span>
              </div>
            </div>

            {/* Metric 4: Shift Units & Scrap Rate */}
            <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase">VARDİYA ÜRETİM ADEDİ</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                  HEDEF: {currentLine.shiftTarget}
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-mono font-extrabold text-white">
                  {currentLine.goodUnits}
                </span>
                <span className="text-xs font-mono text-emerald-400">
                  İyi Parça ({((currentLine.goodUnits / currentLine.unitsProduced) * 100).toFixed(1)}%)
                </span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-3 pt-2 border-t border-slate-800/60">
                <span>Hurda: <strong className="text-rose-400">{currentLine.scrapUnits} adet</strong></span>
                <span>Çevrim: <strong className="text-slate-200">{currentLine.currentCycleTime}s</strong></span>
              </div>
            </div>

          </div>

          {/* 3. Path Definer Visual DAG Pipeline Interactive Flow */}
          <div className="rounded-xl bg-slate-950/90 border border-slate-800/90 p-5 mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <GitFork className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono uppercase font-bold text-white tracking-wider">
                  Path Definer™ Yerel DAG Akış Motoru
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                Düğmelere tıklayarak veri hattını inceleyin
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {DAG_PIPELINE_NODES.map((node, index) => {
                const isSelected = selectedDagNode === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedDagNode(node.id)}
                    className={`cursor-pointer rounded-lg p-3.5 border transition-all ${
                      isSelected 
                        ? 'bg-slate-900 border-cyan-400/80 shadow-[0_0_15px_rgba(0,229,255,0.2)]' 
                        : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                      <span className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 font-bold">
                        NODE 0{index + 1}
                      </span>
                      <span className="text-emerald-400 flex items-center gap-1 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        {node.latency}
                      </span>
                    </div>
                    <h5 className="text-xs font-bold text-white mb-1">
                      {node.title}
                    </h5>
                    <p className="text-[11px] font-mono text-slate-400 mb-2">
                      {node.protocol}
                    </p>
                    <div className="text-[10px] text-slate-400 border-t border-slate-800/80 pt-2 line-clamp-2">
                      {node.detail}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. Live Downtime & Micro-Stop Event Audit Log */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono uppercase font-bold text-slate-300 tracking-wider">
                  Otomatik SCADA Duruş & Anomali Kayıt Günlüğü
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                100% Yerel SQLite/PostgreSQL Depolama (Sıfır Bulut Çıkışı)
              </span>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-800 bg-slate-950">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-900/80 text-slate-400 text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="py-2.5 px-3">Olay ID</th>
                    <th className="py-2.5 px-3">Zaman</th>
                    <th className="py-2.5 px-3">Kök Neden Açıklaması</th>
                    <th className="py-2.5 px-3">Kategori</th>
                    <th className="py-2.5 px-3">Süre</th>
                    <th className="py-2.5 px-3">Mali Etki</th>
                    <th className="py-2.5 px-3">Durum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {currentLine.recentDowntimes.map((dt) => (
                    <tr key={dt.id} className="hover:bg-slate-900/40">
                      <td className="py-2.5 px-3 text-cyan-400 font-bold">{dt.id}</td>
                      <td className="py-2.5 px-3 text-slate-400">{dt.timestamp}</td>
                      <td className="py-2.5 px-3 font-medium text-white">{dt.reason}</td>
                      <td className="py-2.5 px-3 text-slate-400">{dt.category}</td>
                      <td className="py-2.5 px-3 text-amber-400 font-bold">{dt.durationMinutes} dk</td>
                      <td className="py-2.5 px-3 text-rose-400 font-bold">
                        {dt.financialImpact > 0 ? `$${dt.financialImpact}` : '$0'}
                      </td>
                      <td className="py-2.5 px-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          dt.status === 'RESOLVED'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}>
                          {dt.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Bottom Banner to Enterprise Demo */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 gap-4">
          <div>
            <h4 className="text-white font-bold text-base">
              Kendi Fabrika PLC ve Historian Verinizle Denemek İster Misiniz?
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Mühendis ekibimiz fabrikanıza özel 14 günlük yerel hava boşluklu (air-gapped) PoC kurulumu gerçekleştirebilir.
            </p>
          </div>
          <button
            onClick={onOpenDemo}
            className="px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold transition-colors shrink-0 shadow-lg"
          >
            Teknik PoC Talebi Oluştur
          </button>
        </div>

      </div>
    </section>
  );
};
