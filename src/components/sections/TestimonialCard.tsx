import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Testimonial } from '@/types';
import { getInitials } from '@/utils';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  const { t } = useTranslation();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-gray-300 dark:text-gray-600'}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-[#1C1C1C] rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
    >
      <Quote size={32} className="text-[#D4AF37]/30 mb-3" />

      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5 font-body italic">
        "{testimonial.text}"
      </p>

      <div className="flex items-center gap-1 mb-4">
        {renderStars(testimonial.rating)}
      </div>

      <div className="flex items-center gap-3">
        {testimonial.image ? (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-white font-semibold text-sm font-body">
            {getInitials(testimonial.name)}
          </div>
        )}
        <div>
          <h4 className="font-heading text-base font-semibold text-[#1C1C1C] dark:text-white">
            {testimonial.name}
          </h4>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-body">
            {testimonial.location}
            {testimonial.service && ` · ${testimonial.service}`}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
