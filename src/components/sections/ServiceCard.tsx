import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Heart, Sparkles, Flower, Crown, GraduationCap, PartyPopper, Palette, Camera, Home, Scissors, Eye, Clock, ArrowRight } from 'lucide-react';
import { Service } from '@/types';
import { cn } from '@/utils';
import { Button } from '@/components/ui/Button';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Heart, Sparkles, Flower, Crown, GraduationCap, PartyPopper, Palette, Camera, Home, Scissors, Eye,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const { t } = useTranslation();
  const Icon = iconMap[service.icon] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white dark:bg-[#1C1C1C] rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-800 hover:border-[#D4AF37]/30 dark:hover:border-[#D4AF37]/30 hover:shadow-2xl hover:shadow-[#D4AF37]/5 transition-all duration-500"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.4 }}
          className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-5 shadow-lg shadow-[#D4AF37]/20 group-hover:shadow-xl group-hover:shadow-[#D4AF37]/30 transition-shadow"
        >
          <Icon size={24} className="text-white" />
        </motion.div>

        <h3 className="font-heading text-xl font-semibold mb-2 text-[#1C1C1C] dark:text-white">
          {t(`services.${service.slug}.title`, service.title)}
        </h3>

        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 font-body line-clamp-2">
          {t(`services.${service.slug}.description`, service.description)}
        </p>

        <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500 font-body mb-4">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {t(`services.${service.slug}.duration`, service.duration)}
          </span>
          <span className="text-[#D4AF37] font-semibold">{t(`services.${service.slug}.price`, service.price)}</span>
        </div>

        <Link to={`/book?service=${encodeURIComponent(service.title)}`}>
          <Button variant="outline" size="sm" className="w-full group/btn">
            {t('common.bookNow', 'Book Now')}
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
