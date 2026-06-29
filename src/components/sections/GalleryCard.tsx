import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye } from 'lucide-react';
import { GalleryItem } from '@/types';
import { cn } from '@/utils';

interface GalleryCardProps {
  item: GalleryItem;
  index?: number;
  onClick?: () => void;
}

export function GalleryCard({ item, index = 0, onClick }: GalleryCardProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative group cursor-pointer overflow-hidden rounded-2xl"
      onClick={onClick}
    >
      {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-2xl" />
      )}

      {/* Image */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6 }}
        className="aspect-[3/4] overflow-hidden rounded-2xl"
      >
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={cn(
            'w-full h-full object-cover transition-all duration-700',
            !loaded && 'opacity-0'
          )}
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl flex items-end justify-between p-5">
        <span className="text-white text-sm font-medium bg-[#D4AF37]/90 px-3 py-1 rounded-full font-body">
          {item.category}
        </span>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#D4AF37] transition-colors"
          aria-label="View image"
        >
          <Eye size={18} />
        </motion.button>
      </div>
    </motion.div>
  );
}
