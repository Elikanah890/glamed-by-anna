import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, HelpCircle, Calendar, Brush, Plane, ShoppingBag, XCircle } from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { faqs, BUSINESS_NAME } from '@/constants';

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  booking: Calendar,
  preparation: Brush,
  bridal: HelpCircle,
  travel: Plane,
  products: ShoppingBag,
  cancellation: XCircle,
};

const categoryKeyMap: Record<string, string> = {
  booking: 'faq.categories.booking',
  preparation: 'faq.categories.preparation',
  bridal: 'faq.categories.bridal',
  travel: 'faq.categories.travel',
  products: 'faq.categories.products',
  cancellation: 'faq.categories.cancellation',
};

const categoryFallbacks: Record<string, string> = {
  booking: 'Booking & Payments',
  preparation: 'Preparation',
  bridal: 'Bridal',
  travel: 'Travel & Home Service',
  products: 'Products & Skin',
  cancellation: 'Cancellation Policy',
};

export default function FAQ() {
  const { t } = useTranslation();
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const groupedFaqs = useMemo(() => {
    const groups: Record<string, typeof faqs> = {};
    faqs.forEach((faq) => {
      if (!groups[faq.category]) {
        groups[faq.category] = [];
      }
      const faqNumber = faq.id.replace(/\D/g, '');
      groups[faq.category].push({
        ...faq,
        question: t(`faq.q${faqNumber}`, faq.question),
        answer: t(`faq.a${faqNumber}`, faq.answer),
      });
    });
    return groups;
  }, [faqs, t]);

  const title = t('faq.title');
  const titleWords = title.split(' ');
  const lastWord = titleWords.pop();
  const prefix = titleWords.join(' ');

  return (
    <PageTransition>
      <Helmet>
        <title>{title} | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content={t('faq.metaDescription', `Find answers to common questions about ${BUSINESS_NAME}'s luxury makeup services — booking, preparation, bridal, travel, products, and cancellation.`)}
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
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />

        <div className="relative z-10 container-luxury section-padding text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm uppercase tracking-[0.3em] text-[#D4AF37] font-body font-medium mb-4"
          >
            {t('faq.badge', 'Your Questions Answered')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-h2 md:text-h1 lg:text-display font-heading text-white"
          >
            {prefix}{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#C8A97E] bg-clip-text text-transparent">
              {lastWord}
            </span>
          </motion.h1>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-[#F8F5F2] dark:bg-[#121212] section-padding">
        <div className="container-luxury max-w-3xl mx-auto">
          <SectionTitle title={t('faq.gridTitle', 'Find Your Answer')} subtitle={t('faq.subtitle')} />

          {Object.entries(groupedFaqs).map(([category, items], gi) => {
            const Icon = categoryIcons[category] || HelpCircle;
            const label = t(categoryKeyMap[category] || `faq.categories.${category}`, categoryFallbacks[category] || category);

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
                className="mb-12 last:mb-0"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center shadow-md shadow-[#D4AF37]/20">
                    <Icon size={18} className="text-white" />
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl font-semibold text-[#1C1C1C] dark:text-white">
                    {label}
                  </h2>
                </div>

                <div className="space-y-3">
                  {items.map((faq) => (
                    <FAQAccordion
                      key={faq.id}
                      faq={faq}
                      isOpen={openFaqId === faq.id}
                      onToggle={() =>
                        setOpenFaqId(openFaqId === faq.id ? null : faq.id)
                      }
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
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
              {t('faq.ctaHeading', 'Still Have Questions?')}
            </h2>
            <p className="text-gray-400 mb-8 font-body">
              {t('faq.ctaDescription', "We're here to help. Reach out and we'll get back to you as soon as possible.")}
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                {t('common.getInTouch', 'Contact Us')}
                <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
