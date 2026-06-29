import { create } from 'zustand';

interface LanguageStore {
  language: 'en' | 'sw';
  setLanguage: (lang: 'en' | 'sw') => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: (localStorage.getItem('language') as 'en' | 'sw') || 'en',
  setLanguage: (lang) => {
    localStorage.setItem('language', lang);
    set({ language: lang });
  },
}));
