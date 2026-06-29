import { motion } from 'motion/react';
import { cn } from '@/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  light?: boolean;
}

export function SectionTitle({ title, subtitle, align = 'center', className, light }: SectionTitleProps) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={cn('mb-12 md:mb-16', alignStyles[align], className)}
    >
      {subtitle && (
        <span className={cn(
          'inline-block text-sm uppercase tracking-[0.2em] mb-3 font-body font-medium',
          light ? 'text-[#D4AF37]' : 'text-[#D4AF37]'
        )}>
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        'text-h3 md:text-h2 lg:text-h2 font-heading',
        light ? 'text-white' : 'text-[#1C1C1C] dark:text-white'
      )}>
        {title}
      </h2>
      <div className={cn(
        'h-[2px] w-16 mt-4 bg-gradient-gold',
        align === 'center' && 'mx-auto',
        align === 'right' && 'ml-auto'
      )} />
    </motion.div>
  );
}
