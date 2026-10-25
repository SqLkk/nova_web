import React from 'react';
import { Language } from '../data/translations';

interface FooterProps {
  lang: Language;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="border-t border-white/[0.07] py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7D8594]">
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded overflow-hidden border border-white/15">
            <img src="./nov4_logo.jpg" alt="Nov4" className="w-full h-full object-cover" />
          </div>
          <span className="font-display font-semibold text-white">Nov4</span>
          <span className="font-mono text-[#6B7280]">© 2026</span>
        </div>

        <div className="flex items-center gap-6 font-mono">
          <button
            type="button"
            onClick={onOpenContact}
            className="hover:text-white transition-colors cursor-pointer"
          >
            info@nov4.com.tr
          </button>
          <span>İzmir, TR</span>
        </div>
      </div>
    </footer>
  );
};
