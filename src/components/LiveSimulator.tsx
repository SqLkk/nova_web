import React, { useEffect, useRef, useState } from 'react';
import { Maximize2, Minimize2, ExternalLink } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface LiveSimulatorProps {
  lang: Language;
  externalRoute?: { route: string; seq: number } | null;
}

type RoleKey = 'utku' | 'admin' | 'engineer' | 'operator' | 'login';

export const LiveSimulator: React.FC<LiveSimulatorProps> = ({ lang, externalRoute }) => {
  const t = translations[lang].demo;
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [activeRoute, setActiveRoute] = useState<string>('/dashboard');
  const [activeRole, setActiveRole] = useState<RoleKey>('utku');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const viewTabs = [
    { key: 'dashboard', label: t.views.dashboard, route: '/dashboard' },
    { key: 'maps', label: t.views.maps, route: '/network-map' },
    { key: 'outputs', label: t.views.outputs, route: '/reports?preview=tpl_shift_oee' },
    { key: 'builder', label: t.views.builder, route: '/template-builder/tpl_shift_oee' },
    { key: 'sql', label: t.views.sql, route: '/query-creator' },
    { key: 'alarms', label: t.views.alarms, route: '/alarms' },
  ];

  const rolePills: Array<{ key: RoleKey; label: string }> = [
    { key: 'utku', label: t.roles.utku },
    { key: 'admin', label: t.roles.admin },
    { key: 'engineer', label: t.roles.engineer },
    { key: 'operator', label: t.roles.operator },
    { key: 'login', label: t.roles.login },
  ];

  const sendCommand = (user: RoleKey, route: string) => {
    const win = iframeRef.current?.contentWindow;
    if (!win || typeof window === 'undefined') return;
    win.postMessage(
      {
        type: 'NOV4_DEMO_CMD',
        user,
        route,
      },
      window.location.origin
    );
  };

  useEffect(() => {
    if (!externalRoute) return;
    const nextRole: RoleKey = activeRole === 'login' ? 'utku' : activeRole;
    setActiveRole(nextRole);
    setActiveRoute(externalRoute.route);
    if (iframeLoaded) {
      sendCommand(nextRole, externalRoute.route);
    }
  }, [externalRoute, iframeLoaded]);

  const handleSelectView = (route: string) => {
    const nextRole: RoleKey = activeRole === 'login' ? 'utku' : activeRole;
    setActiveRole(nextRole);
    setActiveRoute(route);
    sendCommand(nextRole, route);
  };

  const handleSelectRole = (role: RoleKey) => {
    setActiveRole(role);
    const targetRoute = role === 'login' ? '/login' : activeRoute === '/login' ? '/dashboard' : activeRoute;
    setActiveRoute(targetRoute);
    sendCommand(role, targetRoute);
  };

  const standaloneHref = `./demo/index.html?demoUser=${encodeURIComponent(activeRole)}&demoView=${encodeURIComponent(activeRoute)}`;

  return (
    <section id="demo" className="py-16 md:py-24">
      <div className={isFullscreen ? 'fixed inset-0 z-50 bg-[#090A0D] flex flex-col p-3 md:p-5' : 'max-w-7xl mx-auto px-6'}>
        {!isFullscreen && (
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
              {t.title}
            </h2>
          </div>
        )}

        <div className={`rounded-2xl border border-white/10 bg-[#0F1116] overflow-hidden flex flex-col ${isFullscreen ? 'flex-1' : ''}`}>
          {/* Top Studio Control Bar */}
          <div className="px-4 py-3 border-b border-white/[0.08] bg-[#12151C] flex flex-wrap items-center justify-between gap-3">
            {/* Module Switcher Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              {viewTabs.map((tab) => {
                const isActive =
                  activeRoute === tab.route ||
                  (tab.key === 'outputs' && activeRoute.startsWith('/reports')) ||
                  (tab.key === 'builder' && activeRoute.startsWith('/template-builder'));
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => handleSelectView(tab.route)}
                    className={`h-8 px-3 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#F3F4F6] text-[#090A0D] font-semibold'
                        : 'text-[#9CA3AF] hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Persona Switcher & Viewport Controls */}
            <div className="flex flex-wrap items-center gap-1.5">
              <div className="inline-flex items-center p-0.5 rounded-lg border border-white/[0.08] bg-[#090A0D]">
                {rolePills.map((r) => (
                  <button
                    key={r.key}
                    type="button"
                    onClick={() => handleSelectRole(r.key)}
                    className={`h-7 px-2.5 rounded-md text-[11px] font-mono transition-colors cursor-pointer ${
                      activeRole === r.key
                        ? 'bg-white/12 text-white font-semibold'
                        : 'text-[#7D8594] hover:text-[#D1D5DB]'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>

              <a
                href={standaloneHref}
                target="_blank"
                rel="noopener noreferrer"
                title={t.newTab}
                className="h-8 px-2.5 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-[#D1D5DB] inline-flex items-center gap-1.5 text-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.newTab}</span>
              </a>

              <button
                type="button"
                onClick={() => setIsFullscreen((v) => !v)}
                className="h-8 px-2.5 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-[#D1D5DB] inline-flex items-center gap-1.5 text-xs cursor-pointer"
              >
                {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{isFullscreen ? t.exitFullscreen : t.fullscreen}</span>
              </button>
            </div>
          </div>

          {/* Embedded Live Angular Application */}
          <div className={`relative w-full bg-[#090A0D] ${isFullscreen ? 'flex-1' : 'h-[740px] md:h-[820px]'}`}>
            <iframe
              ref={iframeRef}
              src="./demo/index.html?demoUser=utku&demoView=%2Fdashboard"
              title="Nov4 Live Platform Demo"
              onLoad={() => {
                setIframeLoaded(true);
                sendCommand(activeRole, activeRoute);
              }}
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
