import React, { useState } from 'react';
import { X, Copy, Check } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, lang }) => {
  const [copied, setCopied] = useState(false);
  if (!isOpen) return null;

  const t = translations[lang].contact;
  const email = 'info@nov4.com.tr';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl border border-white/12 bg-[#111319] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-lg font-bold text-white">{t.title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-[#9CA3AF] hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#090A0D] px-4 py-3 flex items-center justify-between gap-3">
          <a href={`mailto:${email}`} className="font-mono text-sm text-white hover:underline">
            {email}
          </a>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-[#D1D5DB] cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? t.copied : t.copy}</span>
          </button>
        </div>

        <div className="mt-4 font-mono text-xs text-[#7D8594]">
          {t.location}
        </div>
      </div>
    </div>
  );
};
