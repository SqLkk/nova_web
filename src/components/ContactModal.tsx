import React, { useState, useEffect } from 'react';
import { X, Mail, Check, Copy, ArrowUpRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const email = 'utku.karaca@nov4.com.tr';

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
        <div className="p-6 sm:p-8 text-center space-y-6">
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            İletişim için lütfen buraya mail atın:
          </p>

          {/* Email Box */}
          <div className="p-4 rounded-xl bg-[#0D0B12] border border-[#F5B301]/40 shadow-inner flex flex-col sm:flex-row items-center justify-between gap-3 group">
            <a
              href={`mailto:${email}`}
              className="text-sm sm:text-base font-mono font-semibold text-[#F5B301] hover:text-[#FFC837] hover:underline transition-colors flex items-center gap-1.5 break-all"
            >
              <span>{email}</span>
              <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 shrink-0" />
            </a>

            <button
              onClick={handleCopy}
              className="w-full sm:w-auto px-3 py-1.5 rounded-lg bg-[#1B1624] hover:bg-[#272132] text-slate-300 hover:text-white border border-white/10 text-xs font-mono flex items-center justify-center gap-1.5 transition-all cursor-pointer shrink-0"
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

          {/* Direct mail action button */}
          <a
            href={`mailto:${email}`}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold font-display text-[#14111B] bg-gradient-to-r from-[#F5B301] to-[#FF7A1A] hover:brightness-110 shadow-lg shadow-[#F5B301]/20 transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>E-posta Gönder</span>
          </a>
        </div>
      </div>
    </div>
  );
};
