import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { PricingPackage } from '@/types';
import { cn } from '@/utils';
import { Button } from '@/components/ui/Button';

interface PricingCardProps {
  package_: PricingPackage;
  index?: number;
}

export function PricingCard({ package_: pkg, index = 0 }: PricingCardProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={cn(
        'relative rounded-2xl p-6 md:p-8 border transition-all duration-500',
        pkg.popular
          ? 'bg-gradient-gold text-white border-transparent shadow-2xl shadow-[#D4AF37]/30 scale-[1.02] md:scale-105'
          : 'bg-white dark:bg-[#1C1C1C] border-gray-100 dark:border-gray-800 hover:border-[#D4AF37]/30 hover:shadow-xl'
      )}
    >
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#D4AF37] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg font-body">
          <Sparkles size={12} className="inline mr-1" />
          {t('pricing.popular', 'Most Popular')}
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className={cn(
          'font-heading text-xl font-semibold mb-2',
          pkg.popular ? 'text-white' : 'text-[#1C1C1C] dark:text-white'
        )}>
          {t(`pricing.${pkg.id}.name`, pkg.name)}
        </h3>
        <div className={cn(
          'text-3xl md:text-4xl font-bold font-heading mb-1',
          pkg.popular ? 'text-white' : 'text-[#1C1C1C] dark:text-white'
        )}>
          {pkg.price}
        </div>
        <p className={cn(
          'text-sm font-body',
          pkg.popular ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'
        )}>
          {t(`pricing.${pkg.id}.services`, pkg.services)}
        </p>
      </div>

      <ul className="space-y-3 mb-6">
        {pkg.includes.map((item, i) => (
          <li key={item} className="flex items-start gap-3 text-sm font-body">
            <Check size={16} className={cn(
              'flex-shrink-0 mt-0.5',
              pkg.popular ? 'text-white' : 'text-[#D4AF37]'
            )} />
            <span className={pkg.popular ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'}>
              {t(`pricing.${pkg.id}.include${i}`, item)}
            </span>
          </li>
        ))}
      </ul>

      <div className="text-center">
        <Link to={`/book?service=${encodeURIComponent(pkg.name)}`}>
          <Button
            variant={pkg.popular ? 'secondary' : 'primary'}
            size="md"
            className="w-full group"
          >
            {t('common.bookNow', 'Book Now')}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <p className={cn(
          'text-xs mt-3 font-body',
          pkg.popular ? 'text-white/60' : 'text-gray-400 dark:text-gray-500'
        )}>
          {t('pricing.bestFor', 'Best for:')} {t(`pricing.${pkg.id}.bestFor`, pkg.bestFor)}
        </p>
      </div>
    </motion.div>
  );
}
