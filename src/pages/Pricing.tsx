import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { PricingCard } from '@/components/sections/PricingCard';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { pricingPackages, faqs, BUSINESS_NAME } from '@/constants';

export default function Pricing() {
  const { t } = useTranslation();
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const pricingFaqs = useMemo(() =>
    faqs.filter((f) =>
      ['booking', 'bridal', 'cancellation'].includes(f.category)
    ).slice(0, 6).map((faq) => {
      const faqNumber = faq.id.replace(/\D/g, '');
      return {
        ...faq,
        question: t(`faq.q${faqNumber}`, faq.question),
        answer: t(`faq.a${faqNumber}`, faq.answer),
      };
    }), [faqs, t]);

  const title = t('pricing.title');

  return (
    <PageTransition>
      <Helmet>
        <title>{title} | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content={t('pricing.metaDescription', `View ${BUSINESS_NAME}'s transparent pricing packages — Basic, Standard, Premium, and VIP. Find the perfect beauty package for your occasion.`)}
        />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#2a2015]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />

        <div className="relative z-10 container-luxury section-padding text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm uppercase tracking-[0.3em] text-[#D4AF37] font-body font-medium mb-4"
          >
            {t('pricing.badge', 'Transparent Rates')}
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

      {/* Pricing Cards */}
      <section className="bg-[#F8F5F2] dark:bg-[#121212] section-padding">
        <div className="container-luxury">
          <SectionTitle title={t('pricing.gridTitle', 'Choose Your Package')} subtitle={t('pricing.subtitle')} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {pricingPackages.map((pkg, i) => (
              <PricingCard key={pkg.id} package_={pkg} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white dark:bg-[#0a0a0a] section-padding">
        <div className="container-luxury max-w-3xl mx-auto">
          <SectionTitle title={t('pricing.faqTitle', 'Pricing Questions')} subtitle={t('pricing.faqSubtitle', 'Common Inquiries')} />

          <div className="space-y-3">
            {pricingFaqs.map((faq) => (
              <FAQAccordion
                key={faq.id}
                faq={faq}
                isOpen={openFaqId === faq.id}
                onToggle={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
              />
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
