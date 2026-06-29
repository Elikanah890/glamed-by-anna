import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Camera, Users, Music2, MapPin, Phone, Mail, Clock, ArrowUp, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { navLinks, services, contactInfo, BUSINESS_NAME, BUSINESS_EMAIL, BUSINESS_LOCATION, BUSINESS_PHONE, FOUNDED_YEAR } from '@/constants';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import { scrollToTop } from '@/utils';

const socialIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Instagram: Camera,
  Facebook: Users,
  Music2: Music2,
};

export function Footer() {
  const { t } = useTranslation();
  const quickLinks = navLinks.filter(l => !['Home'].includes(l.label));
  const footerServices = services.slice(0, 5);

  return (
    <footer className="bg-[#1C1C1C] text-white">
      {/* Main Footer */}
      <div className="container-luxury pt-16 md:pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="font-heading text-2xl font-bold">
                Glamed<span className="text-[#D4AF37]"> </span>by<span className="text-[#D4AF37]"> </span>Anna
              </h3>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-body">
              {t('footer.tagline', 'Helping every woman feel beautiful, confident, elegant, and unforgettable through professional makeup artistry.')}
            </p>
            <div className="flex items-center gap-3">
              {contactInfo.socials.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons] || Camera;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-colors text-gray-300"
                    aria-label={social.name}
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t('footer.quickLinks', 'Quick Links')}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm font-body"
                  >
                    {t(`nav.${link.path.replace('/', '') || 'home'}`, link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t('footer.services', 'Services')}</h4>
            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm font-body"
                  >
                    {t(`services.${service.slug}.title`, service.title)}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-[#D4AF37] hover:underline text-sm font-medium font-body">
                  {t('common.viewAll', 'View All Services')} →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">{t('footer.contact', 'Contact')}</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-400 text-sm font-body">
                  <MapPin size={16} className="text-[#D4AF37] flex-shrink-0" />
                  {BUSINESS_LOCATION}
                </li>
                <li>
                  <a href={`tel:${BUSINESS_PHONE}`} className="flex items-center gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors text-sm font-body">
                    <Phone size={16} className="text-[#D4AF37] flex-shrink-0" />
                    {BUSINESS_PHONE}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${BUSINESS_EMAIL}`} className="flex items-center gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors text-sm font-body">
                    <Mail size={16} className="text-[#D4AF37] flex-shrink-0" />
                    {BUSINESS_EMAIL}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm font-body">
                  <Clock size={16} className="text-[#D4AF37] flex-shrink-0" />
                  <span>{t('footer.hoursText', 'Mon-Fri: 8AM-8PM | Sat: 9AM-6PM')}</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-3">{t('footer.newsletter', 'Stay Updated')}</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t('footer.newsletterPlaceholder', 'Your email')}
                  className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#D4AF37] font-body"
                />
                <Button variant="primary" size="sm" className="flex-shrink-0">
                  <Sparkles size={14} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
          <p className="text-gray-500 text-xs font-body text-center">
            © {new Date().getFullYear()} {BUSINESS_NAME}. {t('footer.copyright', 'All rights reserved.')} | {t('footer.established', 'Est.')} {FOUNDED_YEAR}
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
          >
            {t('common.backToTop', 'Back to Top')} <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
