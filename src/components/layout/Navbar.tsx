import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/utils';
import { navLinks } from '@/constants';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <header
      className={cn(
        'relative z-[55] transition-all duration-500',
        scrolled
          ? 'bg-white/85 dark:bg-[#1C1C1C]/85 backdrop-blur-xl shadow-lg shadow-black/5'
          : isHome
            ? 'bg-transparent'
            : 'bg-white/95 dark:bg-[#121212]/95'
      )}
    >
      <nav className="container-luxury flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="relative z-[56]">
          <h1 className={cn(
            'font-heading text-xl md:text-2xl font-bold tracking-wide',
            scrolled || !isHome
              ? 'text-[#1C1C1C] dark:text-white'
              : 'text-white'
          )}>
            Glamed<span className="text-[#D4AF37]"> </span>by<span className="text-[#D4AF37]"> </span>Anna
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'px-3 py-2 text-sm font-medium rounded-full transition-colors duration-300 font-body',
                location.pathname === link.path
                  ? 'text-[#D4AF37]'
                  : scrolled || !isHome
                    ? 'text-gray-600 hover:text-[#D4AF37] dark:text-gray-300 dark:hover:text-[#D4AF37]'
                    : 'text-white/80 hover:text-white'
              )}
            >
              {t(`nav.${link.path.replace('/', '') || 'home'}`, link.label)}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <Link to="/book">
            <Button size="sm" variant="primary">
              <Sparkles size={14} />
              {t('common.bookNow', 'Book Now')}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={cn(
            'lg:hidden p-2 rounded-full z-[56]',
            scrolled || !isHome
              ? 'text-[#1C1C1C] dark:text-white'
              : 'text-white'
          )}
          aria-label={t('common.menu', 'Toggle menu')}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] bg-black/40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Side panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 z-[80] h-full w-72 bg-white dark:bg-[#1C1C1C] shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col p-6 pt-20">
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'block px-4 py-3 rounded-lg text-base font-medium transition-colors font-body',
                        location.pathname === link.path
                          ? 'bg-[#D4AF37]/10 text-[#D4AF37]'
                          : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                      )}
                    >
                      {t(`nav.${link.path.replace('/', '') || 'home'}`, link.label)}
                    </Link>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
                  <div className="flex items-center gap-3">
                    <LanguageSwitcher />
                    <ThemeSwitcher />
                  </div>
                  <Link to="/book" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="primary" className="w-full">
                      <Sparkles size={16} />
                      {t('common.bookNow', 'Book Now')}
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
