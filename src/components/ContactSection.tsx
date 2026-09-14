import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Terminal } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate direct contact dispatch
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-[#14111B] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono bg-[#F5B301]/10 text-[#F5B301] border border-[#F5B301]/25 mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>İLETİŞİM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Supernova endüstriyel platformu, fabrika sahası entegrasyonu veya teknik detaylar hakkında görüşmek için doğrudan bize ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-xl bg-[#1F1B26] border border-white/10 space-y-6">
              <h3 className="text-base font-bold font-display text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#F5B301]" />
                <span>Doğrudan İrtibat</span>
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#2F2934] border border-white/10 flex items-center justify-center shrink-0 text-[#F5B301]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">E-POSTA</span>
                    <a href="mailto:iletisim@nov4.com.tr" className="text-white hover:text-[#F5B301] font-medium transition-colors">
                      iletisim@nov4.com.tr
                    </a>
                    <span className="text-xs text-slate-500 block">info@nov4.com.tr</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#2F2934] border border-white/10 flex items-center justify-center shrink-0 text-[#FF7A1A]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">LOKASYON</span>
                    <span className="text-white font-medium">İstanbul, Türkiye</span>
                    <span className="text-xs text-slate-500 block">Endüstriyel Otomasyon & SCADA Geliştirme</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#2F2934] border border-white/10 flex items-center justify-center shrink-0 text-emerald-400">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">CANLI DEMO ERİŞİMİ</span>
                    <a href="/demo/" target="_blank" rel="noopener noreferrer" className="text-[#F5B301] hover:underline font-mono text-xs">
                      www.nov4.com.tr/demo/
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#1F1B26]/50 border border-white/5 font-mono text-xs text-slate-400 leading-relaxed">
              <span className="text-white font-semibold block mb-1">Bilgi Notu:</span>
              Supernova projesi bağımsız tesis içi kullanım için geliştirilmiş olup, tüm demo verileri yerel mock motoruyla güvenle simüle edilmektedir.
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-xl bg-[#1F1B26] border border-white/10">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">Mesajınız Alındı</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    İletişim talebiniz başarıyla kaydedildi. En kısa sürede belirttiğiniz e-posta adresi üzerinden irtibata geçeceğiz.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-lg text-xs font-mono text-slate-300 bg-[#2F2934] hover:text-white transition-colors cursor-pointer"
                  >
                    Yeni Mesaj Gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Adınız Soyadınız"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#14111B] border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-[#F5B301] transition-colors font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                        E-posta Adresi *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ornek@sirket.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#14111B] border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-[#F5B301] transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                      Tesis / Kurum Bilgisi
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Fabrika veya Firma Adı"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#14111B] border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-[#F5B301] transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                      Mesajınız *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Görüşmek istediğiniz konu, tesis gereksinimleri veya teknik sorularınız..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#14111B] border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-[#F5B301] transition-colors font-sans resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold font-display text-[#14111B] bg-gradient-to-r from-[#F5B301] to-[#FF7A1A] hover:brightness-110 shadow-lg shadow-[#F5B301]/20 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isLoading ? (
                        <span className="font-mono text-xs">Gönderiliyor...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Mesajı İlet</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
