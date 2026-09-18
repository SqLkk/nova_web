import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Translations } from '../data/translations';

export type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('nov4_lang') || localStorage.getItem('selectedLanguage');
      if (saved === 'en' || saved === 'tr') {
        return saved;
      }
      // Check browser preferred language
      if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('tr')) {
        return 'tr';
      }
      return 'tr';
    } catch {
      return 'tr';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('nov4_lang', lang);
      localStorage.setItem('selectedLanguage', lang);
    } catch {
      // ignore storage errors
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  const t = translations[language];

  useEffect(() => {
    // Sync document attributes & metadata
    document.documentElement.lang = language;
    document.title = t.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.meta.description);
    }
  }, [language, t]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
