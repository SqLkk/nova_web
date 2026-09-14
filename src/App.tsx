import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveSimulator } from './components/LiveSimulator';
import { ProductCapabilities } from './components/ProductCapabilities';
import { ArchitectureSecurity } from './components/ArchitectureSecurity';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const scrollToSimulator = () => {
    const el = document.getElementById('simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#14111B] text-[#F4F1EA] selection:bg-[#F5B301]/30 selection:text-[#FCD34D]">
      {/* Navigation Header */}
      <Navbar onNavigateToSimulator={scrollToSimulator} />

      {/* Main Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero onNavigateToSimulator={scrollToSimulator} />

        {/* 2. Embedded Live Supernova Simulator */}
        <LiveSimulator />

        {/* 3. Real Product Modules & Capabilities */}
        <ProductCapabilities />

        {/* 4. Industrial Architecture & OT Security */}
        <ArchitectureSecurity />

        {/* 5. Clean Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
