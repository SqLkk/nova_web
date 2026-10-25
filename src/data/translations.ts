export type Language = 'tr' | 'en';

export const translations = {
  tr: {
    meta: {
      title: 'Nov4 — Endüstriyel Veri, Haritalama ve Raporlama',
      description: 'Nov4 — Endüstriyel Veri, Topoloji Haritalama ve Canlı Raporlama Platformu.',
    },
    nav: {
      modules: 'Modüller',
      ai: 'Yerel AI',
      demo: 'Canlı Demo',
      contact: 'İletişim',
    },
    hero: {
      tag: 'ON-PREMISE · AIR-GAPPED',
      titleLine1: 'Endüstriyel Veri,',
      titleLine2: 'Haritalama ve Raporlama.',
      ctaDemo: 'Canlı Demoyu Aç',
      ctaOutputs: 'Rapor Çıktıları',
    },
    cards: {
      sectionTitle: 'Platform Modülleri',
      openInDemo: 'Demoda Aç',
      topologyTag: '01 · TOPOLOJİ',
      topologyTitle: 'Üretim Haritaları',
      outputsTag: '02 · ÇIKTILAR',
      outputsTitle: 'Canlı Excel & PDF Raporlar',
      telemetryTag: '03 · TELEMETRİ',
      telemetryTitle: 'SQL, Python & Canlı Pano',
      aiTag: '04 · YEREL MODEL',
      aiTitle: 'Yerel AI Copilot',
      aiLockBadge: 'KULLANIMA KAPALI · ON-PREMISE',
      aiInputPlaceholder: 'Web demosunda kilitli',
    },
    demo: {
      title: 'Canlı Platform Demosu',
      views: {
        dashboard: 'Genel Pano',
        maps: 'Haritalar',
        outputs: 'Raporlar & Çıktılar',
        builder: 'Şablon Editörü',
        sql: 'SQL & Python',
        alarms: 'Alarmlar',
      },
      roles: {
        utku: 'Superuser',
        admin: 'Admin',
        engineer: 'Mühendis',
        operator: 'Operatör',
        login: 'Giriş Ekranı',
      },
      fullscreen: 'Tam Ekran',
      exitFullscreen: 'Küçült',
      newTab: 'Yeni Sekme',
    },
    contact: {
      title: 'İletişim',
      copied: 'Kopyalandı',
      copy: 'Kopyala',
      location: 'İzmir, Türkiye',
      close: 'Kapat',
    },
  },
  en: {
    meta: {
      title: 'Nov4 — Industrial Data, Mapping & Reporting',
      description: 'Nov4 — Industrial Data, Topology Mapping & Live Reporting Platform.',
    },
    nav: {
      modules: 'Modules',
      ai: 'Local AI',
      demo: 'Live Demo',
      contact: 'Contact',
    },
    hero: {
      tag: 'ON-PREMISE · AIR-GAPPED',
      titleLine1: 'Industrial Data,',
      titleLine2: 'Mapping & Reporting.',
      ctaDemo: 'Open Live Demo',
      ctaOutputs: 'Report Outputs',
    },
    cards: {
      sectionTitle: 'Platform Modules',
      openInDemo: 'Open in Demo',
      topologyTag: '01 · TOPOLOGY',
      topologyTitle: 'Production Maps',
      outputsTag: '02 · OUTPUTS',
      outputsTitle: 'Live Excel & PDF Reports',
      telemetryTag: '03 · TELEMETRY',
      telemetryTitle: 'SQL, Python & Dashboards',
      aiTag: '04 · LOCAL ENGINE',
      aiTitle: 'Local AI Copilot',
      aiLockBadge: 'LOCKED · ON-PREMISE ONLY',
      aiInputPlaceholder: 'Locked in public demo',
    },
    demo: {
      title: 'Live Platform Demo',
      views: {
        dashboard: 'Dashboard',
        maps: 'Space Maps',
        outputs: 'Reports & Outputs',
        builder: 'Template Builder',
        sql: 'SQL & Python',
        alarms: 'Alarms',
      },
      roles: {
        utku: 'Superuser',
        admin: 'Admin',
        engineer: 'Engineer',
        operator: 'Operator',
        login: 'Login Screen',
      },
      fullscreen: 'Fullscreen',
      exitFullscreen: 'Exit',
      newTab: 'New Tab',
    },
    contact: {
      title: 'Contact',
      copied: 'Copied',
      copy: 'Copy',
      location: 'Izmir, Turkey',
      close: 'Close',
    },
  },
};

export type Translations = typeof translations.tr;

