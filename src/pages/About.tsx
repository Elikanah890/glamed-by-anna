import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Heart,
  Star,
  Sparkles,
  RefreshCw,
  Shield,
  Smile,
  Target,
  Eye,
  ArrowRight,
  Users,
  Clock,
  Scissors,
  Award,
} from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { stats, BUSINESS_NAME, WHATSAPP_LINK } from '@/constants';
import { cn } from '@/utils';

const values = [
  {
    icon: Star,
    titleKey: 'about.values.excellence',
    descKey: 'about.values.excellenceDesc',
  },
  {
    icon: Shield,
    titleKey: 'about.values.authenticity',
    descKey: 'about.values.authenticityDesc',
  },
  {
    icon: RefreshCw,
    titleKey: 'about.values.innovation',
    descKey: 'about.values.innovationDesc',
  },
  {
    icon: Award,
    titleKey: 'about.values.integrity',
    descKey: 'about.values.integrityDesc',
  },
  {
    icon: Smile,
    titleKey: 'about.values.joy',
    descKey: 'about.values.joyDesc',
  },
];

const statIcons = [Users, Clock, Scissors, Star];

export default function About() {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <Helmet>
        <title>{t('about.meta.title', 'About Us')} | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content={t('about.meta.description', {
            defaultValue: "Discover the story behind {{name}}, Tanzania's premier luxury makeup studio. Meet Anna, explore our values, and see why 500+ women trust us.",
            name: BUSINESS_NAME,
          })}
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#C8A97E]/5 rounded-full blur-3xl" />

        <div className="relative z-10 container-luxury section-padding text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm uppercase tracking-[0.3em] text-[#D4AF37] font-body font-medium mb-4"
          >
            {t('about.title')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-h2 md:text-h1 lg:text-display font-heading text-white mb-6"
          >
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#C8A97E] bg-clip-text text-transparent">
              {t('about.subtitle')}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto font-body leading-relaxed"
          >
            {t('about.hero.description', 'Where artistry meets elegance, and every woman discovers her most radiant self.')}
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-[#F8F5F2] dark:bg-[#121212] section-padding">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <SectionTitle title={t('about.story.heading', 'How It All Began')} subtitle={t('about.story.subtitle', 'Our Foundation')} />

            <div className="space-y-6 relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37] via-[#C8A97E] to-transparent hidden md:block" />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-body md:pl-8"
              >
                {t('about.story.paragraph1')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-body md:pl-8"
              >
                {t('about.story.paragraph2')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-body md:pl-8"
              >
                {t('about.story.paragraph3')}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Anna */}
      <section className="bg-white dark:bg-[#0a0a0a] section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-[#D4AF37] via-[#C8A97E] to-[#D4AF37] flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="text-center text-white p-8">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center">
                    <Heart size={40} className="text-white" />
                  </div>
                  <p className="font-heading text-2xl font-semibold">{t('about.meetAnna.name', 'Anna')}</p>
                  <p className="text-white/70 font-body text-sm mt-1">{t('about.meetAnna.role', 'Founder & Lead Artist')}</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-[#D4AF37] -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle title={t('about.meetAnna.title')} subtitle={t('about.meetAnna.subtitle', 'The Artist Behind the Brush')} align="left" className="mb-6" />

              <div className="space-y-4 text-gray-600 dark:text-gray-300 font-body leading-relaxed">
                <p>
                  {t('about.meetAnna.paragraph1')}
                </p>
                <p>
                  {t('about.meetAnna.paragraph2')}
                </p>
                <p>
                  {t('about.meetAnna.paragraph3', 'Her approach goes beyond application — it\'s a collaborative experience where your vision, comfort, and confidence come first.')}
                </p>
              </div>

              <blockquote className="mt-8 border-l-4 border-[#D4AF37] pl-6">
                <div className="flex gap-1 mb-2">
                  <span className="text-5xl font-heading text-[#D4AF37] leading-none">&ldquo;</span>
                </div>
                <p className="text-xl font-accent italic text-[#1C1C1C] dark:text-white leading-relaxed">
                  {t('about.meetAnna.quote')}
                </p>
                <footer className="mt-4 text-[#D4AF37] font-body font-medium">{t('about.meetAnna.signature', '— Anna')}</footer>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#F8F5F2] dark:bg-[#121212] section-padding">
        <div className="container-luxury">
          <SectionTitle title={t('about.purpose.heading', 'Our Purpose')} subtitle={t('about.purpose.subtitle', 'Mission & Vision')} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="relative p-8 rounded-2xl bg-white dark:bg-[#1C1C1C] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 shadow-lg transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C8A97E] rounded-t-2xl" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-5 shadow-lg shadow-[#D4AF37]/20">
                <Target size={26} className="text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-[#1C1C1C] dark:text-white">{t('about.mission.title')}</h3>
              <p className="text-gray-500 dark:text-gray-400 font-body leading-relaxed text-sm">
                {t('about.mission.text')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: -5 }}
              className="relative p-8 rounded-2xl bg-white dark:bg-[#1C1C1C] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 shadow-lg transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C8A97E] to-[#D4AF37] rounded-t-2xl" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-5 shadow-lg shadow-[#D4AF37]/20">
                <Eye size={26} className="text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-[#1C1C1C] dark:text-white">{t('about.vision.title')}</h3>
              <p className="text-gray-500 dark:text-gray-400 font-body leading-relaxed text-sm">
                {t('about.vision.text')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white dark:bg-[#0a0a0a] section-padding">
        <div className="container-luxury">
          <SectionTitle title={t('about.values.heading', 'What We Stand For')} subtitle={t('about.values.title')} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={value.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group p-6 rounded-2xl bg-[#F8F5F2] dark:bg-[#1C1C1C] border border-transparent hover:border-[#D4AF37]/30 hover:shadow-xl transition-all duration-300 text-center"
              >
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.4 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#D4AF37]/20 group-hover:shadow-xl group-hover:shadow-[#D4AF37]/30 transition-shadow"
                >
                  <value.icon size={24} className="text-white" />
                </motion.div>
                <h4 className="font-heading text-lg font-semibold text-[#1C1C1C] dark:text-white mb-2">{t(value.titleKey)}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-body leading-relaxed">{t(value.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-[#121212] to-[#1a1a1a] section-padding">
        <div className="container-luxury">
          <SectionTitle title={t('about.stats.heading', 'By the Numbers')} light />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-[#D4AF37]/30 transition-colors"
                >
                  <Icon size={24} className="text-[#D4AF37] mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm font-body">{t(stat.label, stat.label)}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8F5F2] dark:bg-[#121212] section-padding">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-h3 md:text-h2 font-heading text-[#1C1C1C] dark:text-white mb-4">
              {t('home.cta.heading')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 font-body">
              {t('about.cta.description', 'Let Anna and her team create the perfect look for your next special occasion. Your beauty journey starts here.')}
            </p>
            <Link to="/book">
              <Button variant="primary" size="lg">
                {t('common.bookNow')}
                <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
