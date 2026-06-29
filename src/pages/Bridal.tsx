import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Heart,
  MessageCircle,
  CalendarCheck,
  PartyPopper,
  Sparkles,
  Star,
  Shield,
  Clock,
  Palette,
  Check,
  ArrowRight,
} from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { TestimonialCard } from '@/components/sections/TestimonialCard';
import { testimonials, BUSINESS_NAME, WHATSAPP_LINK } from '@/constants';

const brideTestimonial = testimonials.find((t) => t.service === 'Bridal Makeup') || testimonials[0];

export default function Bridal() {
  const { t } = useTranslation();

  const title = t('bridal.title');
  const titleWords = title.split(' ');
  let titleParts: { prefix: string; gold: string; suffix: string };
  if (titleWords.length >= 3) {
    const midIndex = Math.floor(titleWords.length / 2);
    titleParts = {
      prefix: titleWords.slice(0, midIndex).join(' '),
      gold: titleWords[midIndex],
      suffix: titleWords.slice(midIndex + 1).join(' '),
    };
  } else {
    const lastWord = titleWords.pop();
    titleParts = {
      prefix: titleWords.join(' '),
      gold: lastWord || '',
      suffix: '',
    };
  }

  const timelineSteps = [
    {
      step: 1,
      title: t('bridal.timeline.step1', 'Consultation'),
      icon: MessageCircle,
      description: t('bridal.timeline.step1Desc', 'We discuss your vision, preferred style, inspiration photos, and skin concerns during a personalized consultation.'),
    },
    {
      step: 2,
      title: t('bridal.timeline.step2', 'Trial Session'),
      icon: Palette,
      description: t('bridal.timeline.step2Desc', 'A complete trial run of your bridal look to perfect every detail and ensure you love the final result.'),
    },
    {
      step: 3,
      title: t('bridal.timeline.step3', 'Confirmation'),
      icon: CalendarCheck,
      description: t('bridal.timeline.step3Desc', 'We finalize the look, lock in the date, and coordinate schedules to ensure a seamless wedding day.'),
    },
    {
      step: 4,
      title: t('bridal.timeline.step4', 'Wedding Day'),
      icon: Heart,
      description: t('bridal.timeline.step4Desc', 'We arrive early, create your dream look with premium products, and provide touch-ups for lasting confidence.'),
    },
  ];

  const benefits = [
    { icon: Shield, text: t('bridal.benefits.trained', 'Trained professionals specializing in bridal artistry') },
    { icon: Clock, text: t('bridal.benefits.punctual', 'Punctual, reliable, and dedicated to your timeline') },
    { icon: Palette, text: t('bridal.benefits.customized', 'Customized looks to match your unique style and culture') },
    { icon: Sparkles, text: t('bridal.benefits.premium', 'Premium, long-wear products for all-day radiance') },
    { icon: Star, text: t('bridal.benefits.clients', '500+ brides transformed since 2019') },
    { icon: Heart, text: t('bridal.benefits.trials', 'Trial sessions included to guarantee perfection') },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>{t('bridal.title')} | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content={t('bridal.metaDescription', `Your dream bridal look starts with ${BUSINESS_NAME}. Discover our signature bridal experience — consultation, trial, and flawless wedding day makeup.`)}
        />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.png"
            alt="Glamed by Anna"
            className="w-full h-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/15 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#D4AF37]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#C8A97E]/8 rounded-full blur-3xl" />

        <div className="relative z-10 container-luxury section-padding text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm uppercase tracking-[0.3em] text-[#D4AF37] font-body font-medium mb-4"
          >
            {t('bridal.badge', 'For Your Special Day')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-h2 md:text-h1 lg:text-display font-heading text-white mb-6"
          >
            {titleParts.prefix}{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#C8A97E] bg-clip-text text-transparent">
              {titleParts.gold}
            </span>
            {titleParts.suffix ? <>{' '}{titleParts.suffix}</> : null}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-lg max-w-xl mx-auto font-body leading-relaxed"
          >
            {t('bridal.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F8F5F2] dark:bg-[#121212] section-padding">
        <div className="container-luxury max-w-4xl mx-auto text-center">
          <SectionTitle title={t('bridal.introTitle', 'Your Dream Wedding Look')} subtitle={t('bridal.introSubtitle', 'Bridal Services')} />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-body"
          >
            {t('bridal.introText', 'We believe your wedding day deserves nothing less than perfection. Our bridal package is designed to give you a stress-free, luxurious experience from the first consultation to the final touch-up. We specialize in creating timeless, camera-perfect looks that reflect your personal style and cultural traditions.')}
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white dark:bg-[#0a0a0a] section-padding relative overflow-hidden">
        <div className="container-luxury">
          <SectionTitle title={t('bridal.timeline.title')} subtitle={t('bridal.timeline.subtitle', 'The Process')} />

          <div className="max-w-4xl mx-auto relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37] via-[#C8A97E] to-[#D4AF37] -translate-x-1/2" />

            <div className="space-y-12 md:space-y-0">
              {timelineSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${i > 0 ? 'md:-mt-4' : ''}`}
                >
                  {/* Number */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-xl shadow-[#D4AF37]/30">
                    <span className="text-white font-heading text-2xl font-bold">{step.step}</span>
                  </div>

                  {/* Card */}
                  <div className="flex-1 max-w-md bg-[#F8F5F2] dark:bg-[#1C1C1C] rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-[#D4AF37]/20 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon size={20} className="text-[#D4AF37]" />
                      <h3 className="font-heading text-lg font-semibold text-[#1C1C1C] dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-body leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#F8F5F2] dark:bg-[#121212] section-padding">
        <div className="container-luxury">
          <SectionTitle title={t('bridal.whyUsTitle', 'Why Brides Choose Us')} subtitle={t('bridal.whyUsSubtitle', 'The Difference')} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-[#1C1C1C] border border-gray-100 dark:border-gray-800"
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
        </div>
      </section>

      {/* Bride Testimonial */}
      <section className="bg-white dark:bg-[#0a0a0a] section-padding">
        <div className="container-luxury max-w-2xl mx-auto">
          <SectionTitle title={t('bridal.testimonialTitle', 'Brides Love Us')} subtitle={t('bridal.testimonialSubtitle', 'From Real Brides')} />
          {brideTestimonial && <TestimonialCard testimonial={brideTestimonial} index={0} />}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#121212] to-[#1a0a0a] section-padding">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-h3 md:text-h2 font-heading text-white mb-4">
              {t('bridal.ctaHeading', "Let's Create Your Fairytale")}
            </h2>
            <p className="text-gray-400 mb-8 font-body">
              {t('bridal.ctaDescription', 'Your wedding day look deserves the best. Book your bridal consultation today and let us make your dream a reality.')}
            </p>
            <Link to="/book?service=Bridal+Makeup">
              <Button variant="primary" size="lg">
                {t('common.bookNow', 'Book Your Bridal Consultation')}
                <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
