import { useState } from 'react';
import { Language } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShowcaseGrid } from './components/ShowcaseGrid';
import { LiveSimulator } from './components/LiveSimulator';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export function App() {
  const [lang, setLang] = useState<Language>('tr');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [demoTarget, setDemoTarget] = useState<{ route: string; seq: number } | null>(null);

  const handleJumpToDemo = (route: string) => {
    setDemoTarget((prev) => ({ route, seq: (prev?.seq || 0) + 1 }));
    const el = document.getElementById('demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090A0D] text-[#F3F4F6] flex flex-col">
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <main className="flex-1">
        <Hero lang={lang} onJumpToDemo={handleJumpToDemo} />
        <ShowcaseGrid lang={lang} onJumpToDemo={handleJumpToDemo} />
        <LiveSimulator lang={lang} externalRoute={demoTarget} />
      </main>

      <Footer lang={lang} onOpenContact={() => setIsContactOpen(true)} />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        lang={lang}
      />
    </div>
  );
}

export default App;
