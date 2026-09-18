export interface Translations {
  navbar: {
    techDetails: string;
    techDetailsMobile: string;
    techDetailsTitle: string;
    liveDemo: string;
    liveDemoMobile: string;
    contact: string;
    externalLinkTitle: string;
    langAriaLabel: string;
  };
  hero: {
    badge: string;
    purpose: string;
    demoCard: {
      badge: string;
      title: string;
      status: string;
      factoryHint: string;
      scrollHint: string;
    };
    scrollPrompt: string;
  };
  punchyFlow: {
    stickyStep: string;
    stepNames: {
      step1: string;
      step2: string;
      step3: string;
      step4: string;
    };
    steps: Array<{
      step: number;
      tag: string;
      title: string;
      subtitle: string;
      capabilityTitle: string;
      capabilitySubtitle: string;
      specs: string[];
    }>;
    step4Card: {
      badge: string;
      title: string;
      description: string;
      buttonText: string;
    };
    stepHint: {
      preparing: string;
      scrolls: string;
    };
  };
  liveSimulator: {
    badge: string;
    title: string;
    description: string;
    restartBtn: string;
    restartTitle: string;
    openNewTab: string;
    mobileNotice: string;
    mobileFullscreen: string;
    credentialsTitle: string;
    credentialsHint: string;
    userLabel: string;
    passLabel: string;
    copied: string;
    copy: string;
    accounts: Array<{
      id: string;
      role: string;
      username: string;
      password: string;
      badge: string;
      desc: string;
      color: string;
    }>;
    terminalCluster: string;
    terminalMachines: string;
    terminalMachinesMobile: string;
    terminalPlants: string;
    terminalFullscreen: string;
    footerHintPrefix: string;
    footerHintText: string;
    footerAirGap: string;
  };
  techDetails: {
    modalTitle: string;
    modalBadge: string;
    modalSubtitle: string;
    closeTitle: string;
    tabs: {
      architecture: string;
      protocols: string;
      security: string;
      hardware: string;
      faq: string;
    };
    architecture: {
      title: string;
      description: string;
      card1Title: string;
      card1Desc: string;
      card2Title: string;
      card2Desc: string;
      card3Title: string;
      card3Desc: string;
    };
    protocols: {
      title: string;
      subtitle: string;
      siemensTitle: string;
      siemensBadge: string;
      siemensDesc: string;
      modbusTitle: string;
      modbusBadge: string;
      modbusDesc: string;
      opcuaTitle: string;
      opcuaBadge: string;
      opcuaDesc: string;
      sqlTitle: string;
      sqlBadge: string;
      sqlDesc: string;
    };
    security: {
      airGapTitle: string;
      airGapDesc: string;
      storageTitle: string;
      storageDesc: string;
      rbacTitle: string;
      rbacDesc: string;
    };
    hardware: {
      minTitle: string;
      minCpu: string;
      minRam: string;
      minStorage: string;
      minDevice: string;
      recTitle: string;
      recCpu: string;
      recRam: string;
      recStorage: string;
      recEnv: string;
      supportedTitle: string;
      cpuLabel: string;
      ramLabel: string;
      storageLabel: string;
      deviceLabel: string;
      envLabel: string;
    };
    faq: {
      header: string;
      items: Array<{
        q: string;
        a: string;
      }>;
    };
    footerDisclaimer: string;
    closeBtn: string;
  };
  contact: {
    title: string;
    prompt: string;
    copyBtn: string;
    copiedBtn: string;
    copyTitle: string;
    location: string;
    closeAria: string;
  };
  footer: {
    slogan: string;
    linkStep1: string;
    linkStep2: string;
    linkStep3: string;
    linkStep4: string;
    linkContact: string;
    linkDemo: string;
    airGapDisclaimer: string;
    allRightsReserved: string;
  };
  meta: {
    title: string;
    description: string;
  };
}

export const translations: Record<'tr' | 'en', Translations> = {
  tr: {
    navbar: {
      techDetails: 'Teknik Detaylar',
      techDetailsMobile: 'Detay',
      techDetailsTitle: 'Teknik Detaylar ve Kılavuz',
      liveDemo: 'Canlı Deneyimleyin',
      liveDemoMobile: 'Deneyelim',
      contact: 'İletişim',
      externalLinkTitle: 'Bağımsız /demo/ Sayfası',
      langAriaLabel: 'Dili Değiştir (Türkçe / İngilizce)',
    },
    hero: {
      badge: 'Endüstriyel Veri & Otomatik Raporlama',
      purpose: 'Fabrikanızdaki tüm makinelerin verilerini tek ekranda toplayan, üretim hatlarınızı haritalandırarak kolay takip sağlayan ve verilerinizi Excel formülleriyle otomatik raporlayan yerel platform.',
      demoCard: {
        badge: 'Canlı Simülasyon',
        title: "Nov4'ü Canlı Deneyelim",
        status: 'Canlı Demo',
        factoryHint: 'Mock Fabrika (21 Makine)',
        scrollHint: 'Keşfedelim • Aşağı Kaydırın ↓',
      },
      scrollPrompt: 'Özellikleri İnceleyin',
    },
    punchyFlow: {
      stickyStep: 'Adım',
      stepNames: {
        step1: 'İnternetsiz Güvenlik',
        step2: 'Hat Haritalandırma',
        step3: 'Duruş & Verimlilik',
        step4: 'Otomatik Raporlama',
      },
      steps: [
        {
          step: 1,
          tag: '01 / GÜVENLİK & AIR-GAP',
          title: 'İnternet bağlantısı gerektirmez.',
          subtitle: '%100 tesis içi çalışır. Fabrikanızın üretim verisi asla dışarıya veya genel buluta çıkmaz; tamamen kendi yerel sunucularınızda güvende kalır.',
          capabilityTitle: 'Nov4 Yeteneği',
          capabilitySubtitle: 'Fabrikanız İçin Pratik Çözüm',
          specs: [
            'Sıfır dış ağ ve bulut bağımlılığı',
            'Fabrika içi şifreli yerel depolama',
            'İzole üretim hatlarında kesintisiz çalışma',
          ],
        },
        {
          step: 2,
          tag: '02 / HARİTALANDIRMA',
          title: 'Hatlarınızı haritalandırarak kolay takip sağlar.',
          subtitle: 'Fabrikanızdaki hatları, istasyonları ve makineleri görsel bir haritada birbirine bağlar; hangi makinenin nerede ve ne durumda olduğunu anında görmenizi sağlar.',
          capabilityTitle: 'Nov4 Yeteneği',
          capabilitySubtitle: 'Fabrikanız İçin Pratik Çözüm',
          specs: [
            'Tüm makineleri ve hatları görsel ağaç olarak görme',
            'İstasyon durumlarını (çalışıyor, durdu, arıza) anında izleme',
            'Hızlı arama ile istediğiniz makineye tek tıkla ulaşma',
          ],
        },
        {
          step: 3,
          tag: '03 / DURUŞ VE VERİMLİLİK',
          title: 'Duruşları ve arızaları anında görmenizi sağlar.',
          subtitle: 'Makinelerdeki duruş sürelerini, arıza nedenlerini ve hat verimliliğini gecikmesiz hesaplar; kritik sorunları oluştuğu saniyede yakalar.',
          capabilityTitle: 'Nov4 Yeteneği',
          capabilitySubtitle: 'Fabrikanız İçin Pratik Çözüm',
          specs: [
            'Duruş süreleri ve kök neden dağılımı',
            'Hat bazında anlık verimlilik ve hız takibi',
            'Operatör onaylı anlık arıza bildirimleri',
          ],
        },
        {
          step: 4,
          tag: '04 / OTOMATİK RAPORLAMA',
          title: 'Verilerinizi doğrudan Excel formatında raporlar.',
          subtitle: 'Canlı üretim verilerini kendi Excel formüllerinize bağlar; vardiya teslim ve günlük üretim raporlarını tek tıkla otomatik oluşturur.',
          capabilityTitle: 'Nov4 Yeteneği',
          capabilitySubtitle: 'Fabrikanız İçin Pratik Çözüm',
          specs: [
            'Excel formüllerinizle tam uyumlu otomatik hesaplama',
            'Vardiya ve gün sonu raporlarını tek tıkla derleme',
            'Saatler süren manuel veri toplama derdine son',
          ],
        },
      ],
      step4Card: {
        badge: 'Tüm Modüller Hazır • 4. Adım Tamamlandı',
        title: "Nov4'ü Şimdi Birlikte Deneyelim",
        description: '21 makine, montaj hatları ve şablon editörüyle hazır ortam.',
        buttonText: 'Canlı Deneyimi Başlatın ↓',
      },
      stepHint: {
        preparing: 'Canlı Deneyim Hazırlanıyor...',
        scrolls: 'Kaydırma',
      },
    },
    liveSimulator: {
      badge: 'İNTERAKTİF CANLI ORTAM',
      title: 'Nov4 Canlı Simülatör',
      description: 'Nov4 endüstriyel veri ve raporlama platformunu doğrudan tarayıcınızda test edin. Aşağıdaki hazır hesaplardan birine tıklayıp bilgileri panoya alabilir; montaj hatlarını, KUKA robotlarını ve şablon editörünü inceleyebilirsiniz.',
      restartBtn: 'Yeniden Başlat',
      restartTitle: 'Simülatörü Yeniden Başlat',
      openNewTab: 'Ayrı Sekmede Aç',
      mobileNotice: 'Telefonda daha rahat kullanmak için:',
      mobileFullscreen: 'Tam Ekran Aç',
      credentialsTitle: 'Hazır Test Hesapları',
      credentialsHint: '(Tıklayarak kopyalayabilirsiniz)',
      userLabel: 'kullanıcı:',
      passLabel: 'şifre:',
      copied: 'Kopyalandı',
      copy: 'Kopyala',
      accounts: [
        {
          id: 'admin',
          role: 'Sistem Yöneticisi',
          username: 'admin',
          password: 'Sp7_Admin#9841',
          badge: 'Admin & ACL',
          desc: 'Kullanıcı, rol ve sistem izinleri',
          color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/5',
        },
        {
          id: 'engineer',
          role: 'Sistem / Hat Mühendisi',
          username: 'engineer',
          password: 'Sp7_Engineer#5544',
          badge: 'Harita & Figürler, Python',
          desc: 'Topoloji temaları, figürler ve SQL',
          color: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/5',
        },
        {
          id: 'operator',
          role: 'Düz User (Operatör)',
          username: 'operator',
          password: 'Sp7_Operator#1520',
          badge: 'İzleme & Operasyon',
          desc: 'Canlı panolar ve alarm onayı',
          color: 'border-amber-500/40 text-amber-400 bg-amber-500/5',
        },
        {
          id: 'utku',
          role: 'Geliştirici (Superuser)',
          username: 'utku',
          password: 'utku123',
          badge: 'Full Yetki / Mimari',
          desc: 'Tüm modüllerde sınırsız yetki',
          color: 'border-[#F5B301]/40 text-[#F5B301] bg-[#F5B301]/5',
        },
        {
          id: 'viewer',
          role: 'İzleyici (Misafir)',
          username: 'viewer',
          password: 'Sp7_Viewer#7611',
          badge: 'Salt Okunur',
          desc: 'Pano ve rapor görüntüleme',
          color: 'border-slate-500/40 text-slate-400 bg-slate-500/5',
        },
      ],
      terminalCluster: 'nov4-node://cluster-01',
      terminalMachines: 'In-Memory Mock Fabrika (21 Makine Aktif)',
      terminalMachinesMobile: '21 Makine',
      terminalPlants: 'Tesisler: Alpha • Beta • Gamma',
      terminalFullscreen: 'Tam Ekran',
      footerHintPrefix: 'Giriş Yaptıktan Sonra:',
      footerHintText: 'Sol menüden Dashboard, Ağ Haritası, Alarmlar ve Şablon Editörü sekmelerini dolaşabilirsiniz.',
      footerAirGap: '%100 Air-Gapped Simülasyon',
    },
    techDetails: {
      modalTitle: 'Nov4',
      modalBadge: 'TEKNİK KILAVUZ',
      modalSubtitle: 'Mimari, Protokoller, Güvenlik & SSS',
      closeTitle: 'Kapat',
      tabs: {
        architecture: 'Genel Mimari',
        protocols: 'Protokoller',
        security: 'İnternetsiz Güvenlik',
        hardware: 'Donanım',
        faq: 'SSS',
      },
      architecture: {
        title: 'Sistem Nasıl Çalışır?',
        description: "Nov4, tesis içi bağımsız sunucu mimarisiyle çalışır. Sahadaki PLC'ler, robotlar ve sensörlerden verileri yerel ağ üzerinden periyodik olarak toplar. İstemci tarafında hiçbir ek masaüstü yazılımı veya sürücü kurulumu gerektirmez; yetkili kullanıcılar bilgisayar veya tabletlerinin web tarayıcısından sisteme bağlanır.",
        card1Title: 'Hat Haritalandırma',
        card1Desc: 'Fabrika, hat ve makineleri görsel ağaç yapısında birbirine bağlar. Tüm tesisin durumunu anında gösterir.',
        card2Title: 'Duruş & Hız Takibi',
        card2Desc: 'Makinelerdeki duruş sürelerini ve verimliliği anlık hesaplar. Kök nedenleri sınıflandırır.',
        card3Title: 'Otomatik Excel Raporlama',
        card3Desc: 'Canlı verileri Excel formüllerinize bağlayarak vardiya bitiminde otomatik .xlsx dosyaları üretir.',
      },
      protocols: {
        title: 'Desteklenen Endüstriyel Haberleşme Protokolleri',
        subtitle: 'Nov4, sahada kullanılan yaygın cihazlarla yerel ağ üzerinden doğrudan haberleşir.',
        siemensTitle: 'Siemens PLC Haberleşmesi',
        siemensBadge: 'S7comm',
        siemensDesc: "S7-1200, S7-1500, S7-300 ve S7-400 serisi PLC'lerle DB blokları üzerinden konuşur. Salt-okunur çalışır.",
        modbusTitle: 'Modbus TCP & RTU',
        modbusBadge: 'Standart',
        modbusDesc: 'Enerji analizörleri, debimetreler ve transmitterlerle register düzeyinde sürekli veri taraması.',
        opcuaTitle: 'OPC-UA Endüstriyel Ağı',
        opcuaBadge: 'Binary TCP',
        opcuaDesc: 'KUKA robotlar, CNC üniteleri ve hat ekipmanları için şifreli sertifika doğrulamalı haberleşme.',
        sqlTitle: 'SQL & Veritabanı Köprüleri',
        sqlBadge: 'Entegre',
        sqlDesc: 'Mevcut PostgreSQL, SQLite, MS SQL veya Oracle veritabanlarından doğrudan tablo okuma desteği.',
      },
      security: {
        airGapTitle: '%100 Air-Gapped Güvencesi',
        airGapDesc: 'Fabrikanızın üretim reçeteleri ve arıza kayıtları yerel sunucunuzda kalır. Nov4, genel buluta veya dış internete asla veri göndermez.',
        storageTitle: 'Tesis İçi Şifreli Depolama',
        storageDesc: 'Tüm veriler yerel diskte şifreli ve rotasyonlu olarak saklanır. Dışarı sızıntı imkansızdır.',
        rbacTitle: 'Rol Tabanlı Kullanıcı İzinleri',
        rbacDesc: 'Yönetici, Mühendis, Operatör ve İzleyici rolleri ile sayfa bazlı erişim yetkilendirmesi.',
      },
      hardware: {
        minTitle: 'Minimum Donanım Gereksinimi',
        minCpu: '2 Çekirdek x86_64 CPU',
        minRam: '4 GB RAM',
        minStorage: '20 GB SSD disk',
        minDevice: 'Standart mini PC veya endüstriyel IPC',
        recTitle: 'Önerilen Sunucu (10+ Hat)',
        recCpu: '4 Çekirdek modern CPU',
        recRam: '8 GB veya 16 GB RAM',
        recStorage: '60 GB SSD / NVMe',
        recEnv: 'Bare-Metal, VMware veya Proxmox',
        supportedTitle: 'Desteklenen Sistemler',
        cpuLabel: 'İşlemci:',
        ramLabel: 'Bellek:',
        storageLabel: 'Depolama:',
        deviceLabel: 'Cihaz:',
        envLabel: 'Ortam:',
      },
      faq: {
        header: 'Fabrika ekiplerinin en çok merak ettiği sorular:',
        items: [
          {
            q: 'Fabrikamızda internet bağlantısı yok, sistem çalışır mı?',
            a: 'Evet, kesinlikle. Nov4 %100 internetsiz ve yerel (on-premise) çalışacak şekilde tasarlanmıştır. Web arayüzü, veritabanı ve raporlama kütüphaneleri yerel paketin içindedir. İnternet kablosu takılı olmasa dahi hiçbir özellik kısıtlanmaz.',
          },
          {
            q: 'PLC programımızda değişiklik yapmamız gerekir mi, makineyi durdurma riski var mı?',
            a: 'Hayır. Nov4 varsayılan olarak tamamen salt-okunur (read-only) modda çalışır. PLC yazılımınızdaki mevcut DB (Data Block) ve bellek alanlarını dinler; hiçbir parametreyi değiştirmez ve makine çalışmasını asla etkilemez.',
          },
          {
            q: 'Kullanıcı sayısı veya ekran sınırı var mıdır?',
            a: 'Hayır. Sistem istemci başı lisanslama kısıtı içermez. Fabrika içi yerel ağınızdaki yetkili mühendisler, operatörler ve yöneticiler bilgisayarlarından veya tabletlerinden tarayıcı ile aynı anda bağlanabilir.',
          },
          {
            q: 'Kurulum ne kadar sürer ve nereye kurulur?',
            a: 'Fabrika sahasındaki standart bir endüstriyel IPC, mini PC veya sanal sunucuya (Docker / yerel servis) 15-30 dakika içinde kurulur. İstemci bilgisayarlara hiçbir ek program kurmak gerekmez.',
          },
          {
            q: 'Mevcut Excel raporlarımızı kullanabilir miyiz?',
            a: 'Evet. Nov4 şablon editörü Excel formülleriyle tam uyumludur. Mevcut hesaplama tablolarınızı şablon olarak içeri alabilir, hücreleri canlı makine verilerine bağlayarak tek tıkla otomatik Excel (.xlsx) çıktısı alabilirsiniz.',
          },
        ],
      },
      footerDisclaimer: 'Nov4 Platform • Yerel Endüstriyel Veri Sistemi',
      closeBtn: 'Kapat',
    },
    contact: {
      title: 'İletişim',
      prompt: 'Buradan iletişime geçebilirsiniz:',
      copyBtn: 'Kopyala',
      copiedBtn: 'Kopyalandı',
      copyTitle: 'Adresi Kopyala',
      location: 'İzmir, Türkiye',
      closeAria: 'Kapat',
    },
    footer: {
      slogan: 'Endüstriyel Veri ve Otomatik Raporlama Platformu',
      linkStep1: 'İnternetsiz Güvenlik',
      linkStep2: 'Hat Haritalandırma',
      linkStep3: 'Duruş & Verimlilik',
      linkStep4: 'Otomatik Excel Raporlama',
      linkContact: 'İletişim',
      linkDemo: '/demo/ Tam Ekran',
      airGapDisclaimer: 'Nov4 Platform • %100 Yerel & Air-Gapped Çalışma',
      allRightsReserved: 'Tüm hakları saklıdır.',
    },
    meta: {
      title: 'Nov4 — Endüstriyel Veri ve Otomatik Raporlama Platformu',
      description: 'Nov4: %100 internetsiz tesis içi çalışan, üretim hatlarınızı haritalandıran, duruşları anında gösteren ve Excel formülleriyle otomatik raporlar üreten platform.',
    },
  },
  en: {
    navbar: {
      techDetails: 'Technical Details',
      techDetailsMobile: 'Details',
      techDetailsTitle: 'Technical Details & Manual',
      liveDemo: 'Experience Live',
      liveDemoMobile: 'Try Demo',
      contact: 'Contact',
      externalLinkTitle: 'Standalone /demo/ Page',
      langAriaLabel: 'Switch Language (Turkish / English)',
    },
    hero: {
      badge: 'Industrial Data & Automated Reporting',
      purpose: 'An on-premise platform aggregating telemetry from all machines across your plant on a single screen, mapping production lines for seamless monitoring, and generating automated reports with native Excel formulas.',
      demoCard: {
        badge: 'Live Simulation',
        title: 'Experience Nov4 Live',
        status: 'Live Demo',
        factoryHint: 'Mock Factory (21 Machines)',
        scrollHint: 'Explore • Scroll Down ↓',
      },
      scrollPrompt: 'Explore Features',
    },
    punchyFlow: {
      stickyStep: 'Step',
      stepNames: {
        step1: 'Air-Gapped Security',
        step2: 'Line Mapping',
        step3: 'Downtime & OEE',
        step4: 'Automated Reporting',
      },
      steps: [
        {
          step: 1,
          tag: '01 / SECURITY & AIR-GAP',
          title: 'No internet connection required.',
          subtitle: '100% on-premise operation. Your factory production data never leaves your facility or reaches the public cloud; it stays completely secure on your own local servers.',
          capabilityTitle: 'Nov4 Capability',
          capabilitySubtitle: 'Practical Solution for Your Plant',
          specs: [
            'Zero external network or public cloud dependency',
            'Encrypted on-premise local storage inside your facility',
            'Uninterrupted real-time operation on isolated production lines',
          ],
        },
        {
          step: 2,
          tag: '02 / LINE MAPPING',
          title: 'Maps your lines for effortless monitoring.',
          subtitle: 'Interconnects lines, stations, and machines across your plant on a visual interactive map; instantly shows where each machine is located and its operational state.',
          capabilityTitle: 'Nov4 Capability',
          capabilitySubtitle: 'Practical Solution for Your Plant',
          specs: [
            'Visualize all machines and production lines in a clean hierarchy tree',
            'Instantly monitor station states (running, stopped, fault, warning)',
            'Single-click instant navigation to any machine with rapid search',
          ],
        },
        {
          step: 3,
          tag: '03 / DOWNTIME & EFFICIENCY',
          title: 'Instant visibility into downtimes and faults.',
          subtitle: 'Calculates machine downtime durations, root-cause categories, and line efficiency without latency; captures critical issues the second they happen.',
          capabilityTitle: 'Nov4 Capability',
          capabilitySubtitle: 'Practical Solution for Your Plant',
          specs: [
            'Real-time downtime durations and Pareto root-cause breakdown',
            'Live line-by-line efficiency, OEE, and cycle speed tracking',
            'Operator-acknowledged instant fault and alert notifications',
          ],
        },
        {
          step: 4,
          tag: '04 / AUTOMATED REPORTING',
          title: 'Reports your data directly in Excel format.',
          subtitle: 'Binds live production telemetry directly to your native Excel formulas; automatically generates shift handover and daily production reports in one click.',
          capabilityTitle: 'Nov4 Capability',
          capabilitySubtitle: 'Practical Solution for Your Plant',
          specs: [
            'Automated calculations 100% compatible with your Excel formulas',
            'Compile shift handover and daily summary reports with a single click',
            'Eliminates hours of error-prone manual clipboard data collection',
          ],
        },
      ],
      step4Card: {
        badge: 'All Modules Ready • Step 4 Completed',
        title: 'Experience Nov4 Live Right Now',
        description: 'Ready-to-use sandbox with 21 machines, assembly lines, and template editor.',
        buttonText: 'Launch Live Experience ↓',
      },
      stepHint: {
        preparing: 'Preparing live experience...',
        scrolls: 'Scrolls',
      },
    },
    liveSimulator: {
      badge: 'INTERACTIVE LIVE ENVIRONMENT',
      title: 'Nov4 Live Simulator',
      description: 'Test the Nov4 industrial data and reporting platform directly inside your browser. Click any of the pre-configured accounts below to copy credentials to your clipboard; explore assembly lines, KUKA robots, and the template editor.',
      restartBtn: 'Restart',
      restartTitle: 'Restart Simulator',
      openNewTab: 'Open in New Tab',
      mobileNotice: 'For a smoother mobile experience:',
      mobileFullscreen: 'Open Fullscreen',
      credentialsTitle: 'Pre-Configured Test Accounts',
      credentialsHint: '(Click to copy credentials)',
      userLabel: 'user:',
      passLabel: 'pass:',
      copied: 'Copied',
      copy: 'Copy',
      accounts: [
        {
          id: 'admin',
          role: 'System Administrator',
          username: 'admin',
          password: 'Sp7_Admin#9841',
          badge: 'Admin & ACL',
          desc: 'User management, roles, and system security',
          color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/5',
        },
        {
          id: 'engineer',
          role: 'System / Line Engineer',
          username: 'engineer',
          password: 'Sp7_Engineer#5544',
          badge: 'Map & Figures, Python',
          desc: 'Topology themes, figures, formulas, and SQL',
          color: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/5',
        },
        {
          id: 'operator',
          role: 'Standard User (Operator)',
          username: 'operator',
          password: 'Sp7_Operator#1520',
          badge: 'Monitoring & Operations',
          desc: 'Live telemetry dashboards and alarm acknowledgment',
          color: 'border-amber-500/40 text-amber-400 bg-amber-500/5',
        },
        {
          id: 'utku',
          role: 'Developer (Superuser)',
          username: 'utku',
          password: 'utku123',
          badge: 'Full Access / Architecture',
          desc: 'Unrestricted control across all modules and configs',
          color: 'border-[#F5B301]/40 text-[#F5B301] bg-[#F5B301]/5',
        },
        {
          id: 'viewer',
          role: 'Viewer (Guest)',
          username: 'viewer',
          password: 'Sp7_Viewer#7611',
          badge: 'Read-Only',
          desc: 'Dashboard observation and report inspection',
          color: 'border-slate-500/40 text-slate-400 bg-slate-500/5',
        },
      ],
      terminalCluster: 'nov4-node://cluster-01',
      terminalMachines: 'In-Memory Mock Factory (21 Machines Active)',
      terminalMachinesMobile: '21 Machines',
      terminalPlants: 'Plants: Alpha • Beta • Gamma',
      terminalFullscreen: 'Fullscreen',
      footerHintPrefix: 'After Logging In:',
      footerHintText: 'Explore Dashboard, Network Map, Alarms, and Template Editor from the left navigation bar.',
      footerAirGap: '100% Air-Gapped Simulation',
    },
    techDetails: {
      modalTitle: 'Nov4',
      modalBadge: 'TECHNICAL MANUAL',
      modalSubtitle: 'Architecture, Protocols, Security & FAQ',
      closeTitle: 'Close',
      tabs: {
        architecture: 'Architecture',
        protocols: 'Protocols',
        security: 'Air-Gapped Security',
        hardware: 'Hardware',
        faq: 'FAQ',
      },
      architecture: {
        title: 'How Does the System Work?',
        description: 'Nov4 operates on an autonomous on-premise server architecture. It periodically collects telemetry from field PLCs, robots, and sensors over the local OT network. It requires zero client-side desktop software or driver installations; authorized users access the system directly via web browsers on laptops, PCs, or tablets.',
        card1Title: 'Line Mapping',
        card1Desc: 'Interconnects plants, lines, and machines in a visual hierarchy tree. Instantly displays overall facility status.',
        card2Title: 'Downtime & Speed Tracking',
        card2Desc: 'Calculates machine downtime durations and efficiency in real time. Automatically categorizes root causes.',
        card3Title: 'Automated Excel Reporting',
        card3Desc: 'Binds live machine metrics to your Excel formulas, generating automated .xlsx reports at shift end.',
      },
      protocols: {
        title: 'Supported Industrial Communication Protocols',
        subtitle: 'Nov4 interfaces directly with common industrial equipment over the local plant network.',
        siemensTitle: 'Siemens PLC Communication',
        siemensBadge: 'S7comm',
        siemensDesc: 'Direct DB-block communication with S7-1200, S7-1500, S7-300, and S7-400 series PLCs. Operates strictly read-only.',
        modbusTitle: 'Modbus TCP & RTU',
        modbusBadge: 'Standard',
        modbusDesc: 'Continuous register-level polling across energy analyzers, flow meters, and industrial transmitters.',
        opcuaTitle: 'OPC-UA Industrial Network',
        opcuaBadge: 'Binary TCP',
        opcuaDesc: 'Encrypted, certificate-verified telemetry exchange for KUKA robots, CNC controllers, and production tooling.',
        sqlTitle: 'SQL & Database Bridges',
        sqlBadge: 'Integrated',
        sqlDesc: 'Native table and view querying from existing PostgreSQL, SQLite, MS SQL, or Oracle databases.',
      },
      security: {
        airGapTitle: '100% Air-Gapped Assurance',
        airGapDesc: 'Your production recipes, telemetry, and downtime logs remain entirely on your local server. Nov4 never sends data to public cloud providers or external networks.',
        storageTitle: 'On-Premise Encrypted Storage',
        storageDesc: 'All records are stored locally with encryption and automated rotation policies. External data leakage is impossible.',
        rbacTitle: 'Role-Based Access Control (RBAC)',
        rbacDesc: 'Granular role and page authorization across Administrator, Engineer, Operator, and Viewer accounts.',
      },
      hardware: {
        minTitle: 'Minimum Hardware Requirements',
        minCpu: '2-Core x86_64 CPU',
        minRam: '4 GB RAM',
        minStorage: '20 GB SSD disk',
        minDevice: 'Standard industrial IPC or mini PC',
        recTitle: 'Recommended Server (10+ Lines)',
        recCpu: '4-Core modern CPU',
        recRam: '8 GB or 16 GB RAM',
        recStorage: '60 GB SSD / NVMe',
        recEnv: 'Bare-Metal, VMware, or Proxmox',
        supportedTitle: 'Supported Operating Systems',
        cpuLabel: 'Processor:',
        ramLabel: 'Memory:',
        storageLabel: 'Storage:',
        deviceLabel: 'Device:',
        envLabel: 'Environment:',
      },
      faq: {
        header: 'Frequently asked questions from plant engineering teams:',
        items: [
          {
            q: 'Our factory has no internet connection, will the system work?',
            a: 'Yes, absolutely. Nov4 is engineered from the ground up to operate 100% offline and on-premise. The web application, database, and reporting engines are embedded in the local deployment package. No features are throttled even without an internet uplink.',
          },
          {
            q: 'Do we need to modify our PLC programs or risk stopping machines?',
            a: 'No. By default, Nov4 operates in strictly read-only mode. It reads existing DB (Data Block) structures and memory flags without modifying any parameters, ensuring zero risk to production.',
          },
          {
            q: 'Is there a limit on connected users or screens?',
            a: 'No. Nov4 does not enforce per-seat client licensing. Any authorized engineer, operator, or plant manager on the local plant network can log in simultaneously from desktops or tablets.',
          },
          {
            q: 'How long does installation take and where is it installed?',
            a: 'It installs on a standard industrial IPC, mini PC, or virtual server (Docker / local service) in 15–30 minutes. Zero client-side software needs to be installed on workstations.',
          },
          {
            q: 'Can we utilize our existing Excel report templates?',
            a: 'Yes. The Nov4 template editor is fully compatible with standard Excel formulas. You can upload existing spreadsheets as templates, map cells to live machine metrics, and generate .xlsx files automatically.',
          },
        ],
      },
      footerDisclaimer: 'Nov4 Platform • On-Premise Industrial Data System',
      closeBtn: 'Close',
    },
    contact: {
      title: 'Contact',
      prompt: 'Feel free to get in touch with us:',
      copyBtn: 'Copy',
      copiedBtn: 'Copied',
      copyTitle: 'Copy Email Address',
      location: 'Izmir, Turkey',
      closeAria: 'Close',
    },
    footer: {
      slogan: 'Industrial Data & Automated Reporting Platform',
      linkStep1: 'Air-Gapped Security',
      linkStep2: 'Line Mapping',
      linkStep3: 'Downtime & Efficiency',
      linkStep4: 'Automated Excel Reporting',
      linkContact: 'Contact',
      linkDemo: '/demo/ Fullscreen',
      airGapDisclaimer: 'Nov4 Platform • 100% On-Premise & Air-Gapped Operation',
      allRightsReserved: 'All rights reserved.',
    },
    meta: {
      title: 'Nov4 — Industrial Data & Automated Reporting Platform',
      description: 'Nov4: 100% air-gapped on-premise industrial platform that maps production lines, detects downtimes instantly, and automates Excel reports.',
    },
  },
};
