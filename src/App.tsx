import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TryNov4Sandbox } from './components/TryNov4Sandbox';
import { ProblemSolution } from './components/ProblemSolution';
import { PlatformModules } from './components/PlatformModules';
import { ArchitectureSecurity } from './components/ArchitectureSecurity';
import { RoiCalculator } from './components/RoiCalculator';
import { LicensingTable } from './components/LicensingTable';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { ShiftReportModal } from './components/ShiftReportModal';

export const App: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);
  const [isShiftReportModalOpen, setIsShiftReportModalOpen] = useState<boolean>(false);

  const scrollToSandbox = () => {
    const el = document.getElementById('try-nov4');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar 
        onOpenDemo={() => setIsDemoModalOpen(true)}
        onNavigateToSandbox={scrollToSandbox}
      />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onOpenDemo={() => setIsDemoModalOpen(true)}
          onNavigateToSandbox={scrollToSandbox}
          onPreviewShiftReport={() => setIsShiftReportModalOpen(true)}
        />

        {/* 2. Interactive "Try NOV4" Live Sandbox (Prominently featured directly after Hero) */}
        <TryNov4Sandbox 
          onPreviewShiftReport={() => setIsShiftReportModalOpen(true)}
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />

        {/* 3. Problem vs Solution */}
        <ProblemSolution />

        {/* 4. Core Platform Modules (Path Definer, OEE Studio, Report Studio) */}
        <PlatformModules />

        {/* 5. Security & Industrial Architecture (Air-Gap, OT protocols, Bare-Metal/VM) */}
        <ArchitectureSecurity />

        {/* 6. Interactive ROI Calculator */}
        <RoiCalculator 
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />

        {/* 7. Enterprise Licensing & Corporate PO Terms */}
        <LicensingTable 
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lead Capture / Demo Booking Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      {/* Shift Report Handover Preview Modal */}
      <ShiftReportModal 
        isOpen={isShiftReportModalOpen}
        onClose={() => setIsShiftReportModalOpen(false)}
      />
    </div>
  );
};

export default App;
