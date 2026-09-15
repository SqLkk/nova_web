import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgressivePunchyFlow } from './components/ProgressivePunchyFlow';
import { LiveSimulator } from './components/LiveSimulator';
import { Footer } from './components/Footer';
import { TechDetailsModal } from './components/TechDetailsModal';
import { ContactModal } from './components/ContactModal';

export const App: React.FC = () => {
  const [isTechDetailsOpen, setIsTechDetailsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToDemo = () => {
    const el = document.getElementById('demo-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollDownFromHero = () => {
    const el = document.getElementById('step-1');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08060B] text-[#F4F1EA] selection:bg-[#F5B301]/30 selection:text-[#FCD34D]">
      {/* Fixed Minimalist Navbar */}
      <Navbar
        onOpenTechDetails={() => setIsTechDetailsOpen(true)}
        onNavigateToDemo={scrollToDemo}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Experience */}
      <main>
        {/* 1. Hero: Giant Glowing Nov4 Title + Real Purpose + Faint Ghost Tool'u Dene Card */}
        <Hero 
          onNavigateToDemo={scrollToDemo} 
          onScrollDown={scrollDownFromHero} 
        />

        {/* 2. 4-Step Progressive Punchy Flow: 
               Each scroll reveals 1 real Nov4 feature. 
               On step 4 (4. kez kaydırınca) the Tool'u Dene card blazes in full golden glory! */}
        <ProgressivePunchyFlow onNavigateToDemo={scrollToDemo} />

        {/* 3. Embedded Live Simulator (Ready with in-memory factory & demo logins) */}
        <LiveSimulator />
      </main>

      {/* Clean Minimalist Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Top-Right Modals */}
      <TechDetailsModal
        isOpen={isTechDetailsOpen}
        onClose={() => setIsTechDetailsOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default App;
