import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PunchyScrollSections } from './components/PunchyScrollSections';
import { LiveSimulator } from './components/LiveSimulator';
import { Footer } from './components/Footer';
import { TechDetailsModal } from './components/TechDetailsModal';
import { ContactModal } from './components/ContactModal';

export const App: React.FC = () => {
  const [isTechDetailsOpen, setIsTechDetailsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToDemo = () => {
    const el = document.getElementById('demo-section') || document.getElementById('simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollDownFromHero = () => {
    const el = document.getElementById('punchy-airgap');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0A10] text-[#F4F1EA] selection:bg-[#F5B301]/30 selection:text-[#FCD34D]">
      {/* Fixed Minimalist Navbar */}
      <Navbar
        onOpenTechDetails={() => setIsTechDetailsOpen(true)}
        onNavigateToDemo={scrollToDemo}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Flow */}
      <main>
        {/* 1. Hero: Giant Glowing NOVA + Core Purpose + Ghost 'Tool'u Dene' Card */}
        <Hero 
          onNavigateToDemo={scrollToDemo} 
          onScrollDown={scrollDownFromHero} 
        />

        {/* 2. Punchy Scrollytelling Sections: 1 strong sentence per scroll */}
        <PunchyScrollSections onNavigateToDemo={scrollToDemo} />

        {/* 3. Embedded Live Supernova Simulator */}
        <div id="demo-section">
          <LiveSimulator />
        </div>
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Top-Right Triggered Modals */}
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
