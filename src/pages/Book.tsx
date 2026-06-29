import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import {
  Sparkles,
  Check,
  Clock,
  Shield,
  Palette,
  Heart,
} from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { BookingForm } from '@/components/sections/BookingForm';
import { BUSINESS_NAME, WHATSAPP_LINK } from '@/constants';

export default function Book() {
  const { t } = useTranslation();

  const benefits = [
    { icon: Clock, text: t('booking.benefit1', 'Flexible scheduling that works around your timeline') },
    { icon: Shield, text: t('booking.benefit2', 'Premium, hypoallergenic products for all skin types') },
    { icon: Palette, text: t('booking.benefit3', 'Customized looks tailored to your unique features') },
    { icon: Heart, text: t('booking.benefit4', '500+ satisfied clients and counting') },
  ];

  const expectItems = [
    t('booking.expect1', 'Personalized consultation before your session'),
    t('booking.expect2', 'Premium products selected for your skin type'),
    t('booking.expect3', 'Professional application in a relaxing environment'),
    t('booking.expect4', 'Touch-up kit for long-lasting wear'),
    t('booking.expect5', 'Aftercare guidance from our expert team'),
  ];

  const title = t('booking.title');
  const titleWords = title.split(' ');
  const lastWord = titleWords.pop();
  const prefix = titleWords.join(' ');

  return (
    <PageTransition>
      <Helmet>
        <title>{title} | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content={t('booking.metaDescription', `Book your luxury makeup appointment with ${BUSINESS_NAME}. Choose your service, date, and time — we'll handle the rest.`)}
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
            {t('booking.badge', 'Reserve Your Spot')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-h2 md:text-h1 lg:text-display font-heading text-white mb-6"
          >
            {prefix}{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#C8A97E] bg-clip-text text-transparent">
              {lastWord}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-lg max-w-xl mx-auto font-body"
          >
            {t('booking.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Booking Content */}
      <section className="bg-[#F8F5F2] dark:bg-[#121212] section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Left: Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <SectionTitle title={t('booking.whyUsTitle', 'Why Book With Us')} subtitle={t('booking.whyUsSubtitle', 'The Experience')} align="left" />

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-[#1C1C1C] border border-gray-100 dark:border-gray-800"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center flex-shrink-0">
                      <benefit.icon size={18} className="text-white" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm font-body leading-relaxed pt-1">
                      {benefit.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Service Summary */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#1C1C1C] border border-[#D4AF37]/20">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles size={20} className="text-[#D4AF37]" />
                  <h3 className="font-heading text-lg font-semibold text-[#1C1C1C] dark:text-white">
                    {t('booking.whatToExpect', 'What to Expect')}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {expectItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400 font-body">
                      <Check size={14} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right: Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <BookingForm />
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
