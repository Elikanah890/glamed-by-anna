import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Camera,
  Users,
  Music2,
  Send,
  Smartphone,
  Navigation,
  MessageCircle,
} from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import {
  contactInfo,
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_EMAIL,
  BUSINESS_LOCATION,
  WHATSAPP_LINK,
} from '@/constants';
import { cn } from '@/utils';

const socialIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Instagram: Camera,
  Facebook: Users,
  Music2,
};

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Glamed by Anna Team!%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  const inputClasses =
    'w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1C1C1C] border border-gray-200 dark:border-gray-700 text-[#1C1C1C] dark:text-white placeholder-gray-400 text-sm font-body focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all';

  return (
    <PageTransition>
      <Helmet>
        <title>{t('contact.pageTitle', { businessName: BUSINESS_NAME })}</title>
        <meta
          name="description"
          content={t('contact.metaDescription', { businessName: BUSINESS_NAME })}
        />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.png"
            alt="Glamed by Anna"
            className="w-full h-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent" />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl" />

        <div className="relative z-10 container-luxury section-padding text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm uppercase tracking-[0.3em] text-[#D4AF37] font-body font-medium mb-4"
          >
            {t('contact.subtitle')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-h2 md:text-h1 lg:text-display font-heading text-white"
          >
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#C8A97E] bg-clip-text text-transparent">
              {t('contact.title')}
            </span>
          </motion.h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-[#F8F5F2] dark:bg-[#121212] section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle title={t('contact.letsTalk')} subtitle={t('contact.reachOut')} align="left" />

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-[#1C1C1C] border border-gray-100 dark:border-gray-800 hover:border-[#D4AF37]/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center flex-shrink-0 shadow-md shadow-[#D4AF37]/20">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-body uppercase tracking-wider">{t('contact.info.phone')}</p>
                    <p className="text-[#1C1C1C] dark:text-white font-body font-medium group-hover:text-[#D4AF37] transition-colors">
                      {BUSINESS_PHONE}
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-[#1C1C1C] border border-gray-100 dark:border-gray-800 hover:border-[#D4AF37]/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center flex-shrink-0 shadow-md shadow-[#D4AF37]/20">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-body uppercase tracking-wider">{t('contact.info.email')}</p>
                    <p className="text-[#1C1C1C] dark:text-white font-body font-medium group-hover:text-[#D4AF37] transition-colors">
                      {BUSINESS_EMAIL}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-[#1C1C1C] border border-gray-100 dark:border-gray-800">
                  <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center flex-shrink-0 shadow-md shadow-[#D4AF37]/20">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-body uppercase tracking-wider">{t('contact.info.location')}</p>
                    <p className="text-[#1C1C1C] dark:text-white font-body font-medium">
                      {BUSINESS_LOCATION}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-[#1C1C1C] border border-gray-100 dark:border-gray-800">
                  <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center flex-shrink-0 shadow-md shadow-[#D4AF37]/20">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 font-body uppercase tracking-wider mb-3">{t('contact.info.hours')}</p>
                    {contactInfo.businessHours?.map((bh) => (
                      <div key={bh.day} className="flex justify-between text-sm font-body py-1 border-b border-gray-50 dark:border-gray-800 last:border-0">
                        <span className="text-gray-600 dark:text-gray-300">{bh.day}</span>
                        <span className="text-[#1C1C1C] dark:text-white font-medium">{bh.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Socials */}
                <div className="flex gap-3 pt-4">
                  {contactInfo.socials?.map((social) => {
                    const Icon = socialIcons[social.icon] || Camera;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gradient-gold hover:text-white hover:border-transparent transition-all duration-300"
                        aria-label={social.name}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white dark:bg-[#1C1C1C] rounded-3xl p-8 md:p-10 border border-gray-100 dark:border-gray-800 shadow-xl"
            >
              <h3 className="font-heading text-xl font-semibold text-[#1C1C1C] dark:text-white mb-6">
                {t('contact.form.heading')}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block font-body">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.form.namePlaceholder')}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block font-body">
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.form.emailPlaceholder')}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block font-body">
                    {t('contact.form.subject')} *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.form.subjectPlaceholder')}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block font-body">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className={cn(inputClasses, 'resize-none')}
                  />
                </div>

                <div className="flex flex-col gap-3 pt-2">
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    <Send size={18} />
                    {t('contact.form.send')}
                  </Button>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200 dark:border-gray-700" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="px-3 bg-white dark:bg-[#1C1C1C] text-gray-400 font-body">{t('common.or')}</span>
                    </div>
                  </div>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <Button type="button" variant="whatsapp" size="md" className="w-full">
                      <Smartphone size={18} />
                      {t('common.whatsappUs')}
                    </Button>
                  </a>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-[#F8F5F2] dark:bg-[#121212] section-padding pt-0">
        <div className="container-luxury max-w-6xl mx-auto">
          <SectionTitle
            title={t('contact.mapTitle', 'Find Us')}
            subtitle={t('contact.mapSubtitle', 'Our Location')}
          />

          {/* Map Embed */}
          <div className="rounded-3xl overflow-hidden border-2 border-gray-100 dark:border-gray-800 shadow-xl">
            <div className="w-full h-[400px] md:h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15943.149117528735!2d33.4460512!3d-8.9047767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19107d1a847de305%3A0x5f1a8ae4dc84a105!2sMahakama%20Avenue%2C%20Mbeya!5e0!3m2!1sen!2stz!4v1710000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Glamed by Anna location on Mahakama Avenue, Mbeya"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="https://www.google.com/maps/dir//Mahakama+Avenue+Mbeya+Tanzania"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-white rounded-full font-body font-medium hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300 group"
            >
              <Navigation size={18} className="group-hover:scale-110 transition-transform" />
              {t('contact.getDirections', 'Get Directions')}
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-body font-medium hover:bg-[#1DA851] hover:shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300 group"
            >
              <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
              {t('contact.whatsappBtn', 'Chat on WhatsApp')}
            </a>
          </div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 p-6 rounded-2xl bg-white dark:bg-[#1C1C1C] border border-gray-100 dark:border-gray-800 shadow-lg text-center"
          >
            <div className="flex items-center justify-center gap-2 text-[#D4AF37] mb-2">
              <MapPin size={18} />
              <span className="font-heading text-lg font-semibold text-[#1C1C1C] dark:text-white">
                {BUSINESS_NAME}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 font-body text-sm">
              {BUSINESS_LOCATION}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-3 text-sm text-gray-500 dark:text-gray-400 font-body">
              <a href={`tel:${BUSINESS_PHONE}`} className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                <Phone size={14} />
                {BUSINESS_PHONE}
              </a>
              <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                <Mail size={14} />
                {BUSINESS_EMAIL}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
