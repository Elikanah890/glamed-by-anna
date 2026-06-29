import { motion } from 'motion/react';
import { useLanguageStore } from '@/store/languageStore';
import i18n from '@/i18n';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageStore();

  const handleLanguageChange = (lang: 'en' | 'sw') => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-full p-1">
      {(['en', 'sw'] as const).map((lang) => (
        <motion.button
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          className={`relative px-3 py-1 text-xs font-medium rounded-full transition-colors font-body ${
            language === lang
              ? 'text-white'
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          {language === lang && (
            <motion.div
              layoutId="lang-indicator"
              className="absolute inset-0 bg-gradient-gold rounded-full"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{lang.toUpperCase()}</span>
        </motion.button>
      ))}
    </div>
  );
}
