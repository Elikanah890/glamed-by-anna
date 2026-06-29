import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { TestimonialCard } from '@/components/sections/TestimonialCard';
import { testimonials, BUSINESS_NAME } from '@/constants';

export default function Testimonials() {
  const { t } = useTranslation();

  const title = t('testimonials.title');

  return (
    <PageTransition>
      <Helmet>
        <title>{title} | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content={t('testimonials.metaDescription', `Read what ${BUSINESS_NAME}'s 500+ happy clients say about their luxury makeup experiences. Real stories from real women.`)}
        />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
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
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl" />

        <div className="relative z-10 container-luxury section-padding text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm uppercase tracking-[0.3em] text-[#D4AF37] font-body font-medium mb-4"
          >
            {t('testimonials.badge', 'From Our Clients')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-h2 md:text-h1 lg:text-display font-heading text-white"
          >
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#C8A97E] bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h1>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-[#F8F5F2] dark:bg-[#121212] section-padding">
        <div className="container-luxury">
          <SectionTitle
            title={t('testimonials.gridTitle', 'What Our Clients Say')}
            subtitle={t('testimonials.subtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#121212] to-[#1a1a1a] section-padding">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-h3 md:text-h2 font-heading text-white mb-4">
              {t('home.cta.heading')}
            </h2>
            <p className="text-gray-400 mb-8 font-body">
              {t('home.cta.description')}
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
