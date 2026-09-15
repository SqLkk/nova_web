import React, { useState, useEffect } from 'react';
import { X, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Background Click */}
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-lg bg-[#14111B] border border-[#F5B301]/30 rounded-2xl shadow-2xl shadow-black overflow-hidden z-10 animate-scaleUp">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 bg-[#1B1624] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#F5B301]/10 border border-[#F5B301]/30 flex items-center justify-center text-[#F5B301]">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold font-display text-white">İletişim</h3>
              <p className="text-xs text-slate-400 font-mono">Bize Doğrudan Ulaşın</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#272132] text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Direct Info Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-[#1B1624] border border-white/5 flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#F5B301] shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block font-mono">E-POSTA</span>
                <a href="mailto:iletisim@nov4.com.tr" className="text-white hover:underline font-medium">
                  iletisim@nov4.com.tr
                </a>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#1B1624] border border-white/5 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#FF7A1A] shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block font-mono">LOKASYON</span>
                <span className="text-white font-medium">İstanbul, Türkiye</span>
              </div>
            </div>
          </div>

          {/* Form / Success State */}
          {isSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold font-display text-white">Mesajınız İletildi</h4>
              <p className="text-xs text-slate-300">
                Geri bildiriminiz kaydedildi. En kısa sürede sizinle irtibat kuracağız.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-2 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 bg-[#272132] hover:text-white"
              >
                Yeni Mesaj
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Adınız Soyadınız"
                  className="w-full px-3 py-2 rounded-lg bg-[#0C0A10] border border-white/10 text-white placeholder:text-slate-600 text-xs focus:outline-none focus:border-[#F5B301] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  E-posta
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ornek@sirket.com"
                  className="w-full px-3 py-2 rounded-lg bg-[#0C0A10] border border-white/10 text-white placeholder:text-slate-600 text-xs focus:outline-none focus:border-[#F5B301] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  Mesajınız
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Sorularınız, iş birliği veya teknik talepleriniz..."
                  className="w-full px-3 py-2 rounded-lg bg-[#0C0A10] border border-white/10 text-white placeholder:text-slate-600 text-xs focus:outline-none focus:border-[#F5B301] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold font-display text-[#14111B] bg-gradient-to-r from-[#F5B301] to-[#FF7A1A] hover:brightness-110 shadow-lg shadow-[#F5B301]/20 transition-all cursor-pointer"
              >
                {isLoading ? (
                  <span>Gönderiliyor...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Gönder</span>
                  </>
                )}
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};
