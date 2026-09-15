import React, { useState, useEffect } from 'react';
import { X, Mail, Check, Copy, ArrowUpRight, MapPin } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const email = 'info@nov4.com.tr';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Background Click */}
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-md bg-[#14111B] border border-[#F5B301]/30 rounded-2xl shadow-2xl shadow-black overflow-hidden z-10 animate-scaleUp">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 bg-[#1B1624] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#F5B301]/10 border border-[#F5B301]/30 flex items-center justify-center text-[#F5B301]">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold font-display text-white">İletişim</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#272132] text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 text-center space-y-5">
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Buradan iletişime geçebilirsiniz:
          </p>

          {/* Direct Email Box - perfectly fitted with whitespace-nowrap */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-[#0D0B12] border border-[#F5B301]/40 shadow-inner flex items-center justify-between gap-2.5 sm:gap-3 group hover:border-[#F5B301]/70 transition-all">
            <a
              href={`mailto:${email}`}
              className="text-sm sm:text-base font-mono font-semibold text-[#F5B301] hover:text-[#FFC837] hover:underline transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>{email}</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70 group-hover:opacity-100 shrink-0" />
            </a>

            <button
              onClick={handleCopy}
              className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#1B1624] hover:bg-[#272132] text-slate-300 hover:text-white border border-white/10 text-xs font-mono flex items-center justify-center gap-1.5 transition-all cursor-pointer shrink-0 active:scale-95"
              title="Adresi Kopyala"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Kopyalandı</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Kopyala</span>
                </>
              )}
            </button>
          </div>

          {/* Location: İzmir, Türkiye */}
          <div className="pt-4 border-t border-white/5 flex items-center justify-center gap-2 text-xs text-slate-400 font-mono">
            <MapPin className="w-3.5 h-3.5 text-[#F5B301] shrink-0" />
            <span>İzmir, Türkiye</span>
          </div>
        </div>
      </div>
    </div>
  );
};
