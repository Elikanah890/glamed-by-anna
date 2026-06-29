import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { Button } from '@/components/ui/Button';
import { BUSINESS_NAME } from '@/constants';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <Helmet>
        <title>404 - {t('404.title')} | {BUSINESS_NAME}</title>
        <meta name="description" content={t('404.metaDescription', "The page you're looking for doesn't exist or has been moved.")} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.png"
            alt="Glamed by Anna"
            className="w-full h-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container-luxury section-padding text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[10rem] md:text-[14rem] font-heading font-bold leading-none bg-gradient-to-b from-[#D4AF37] via-[#C8A97E] to-[#D4AF37] bg-clip-text text-transparent"
            >
              404
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-h3 md:text-h2 font-heading text-[#1C1C1C] dark:text-white mb-4">
              {t('404.title')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-md mx-auto mb-8 font-body leading-relaxed">
              {t('404.message')}
            </p>

            <Link to="/">
              <Button variant="primary" size="lg">
                <ArrowLeft size={18} />
                {t('404.backHome')}
              </Button>
            </Link>
          </motion.div>

          {/* Decorative gold line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-[2px] bg-gradient-gold mx-auto mt-12"
          />
        </div>
      </section>
    </PageTransition>
  );
}
