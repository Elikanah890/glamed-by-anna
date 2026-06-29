import { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GalleryCard } from '@/components/sections/GalleryCard';
import { galleryItems, galleryCategories, BUSINESS_NAME } from '@/constants';

const categoryKeyMap: Record<string, string> = {
  all: 'gallery.all',
  bridal: 'gallery.bridal',
  graduation: 'gallery.graduation',
  party: 'gallery.party',
  traditional: 'gallery.traditional',
  photoshoot: 'gallery.photoshoot',
};

export default function Gallery() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const title = t('gallery.title');
  const titleWords = title.split(' ');
  const lastWord = titleWords.pop();
  const prefix = titleWords.join(' ');

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handlePrev = useCallback(() => {
    if (selectedImage === null) return;
    setSelectedImage((prev) =>
      prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
    );
  }, [selectedImage, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedImage === null) return;
    setSelectedImage((prev) =>
      prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
    );
  }, [selectedImage, filteredItems.length]);

  return (
    <PageTransition>
      <Helmet>
        <title>{title} | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content={t('gallery.metaDescription', `Browse ${BUSINESS_NAME}'s portfolio of stunning makeup transformations — bridal, graduation, party, traditional, and photoshoot looks.`)}
        />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#2a2015]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent" />

        <div className="relative z-10 container-luxury section-padding text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm uppercase tracking-[0.3em] text-[#D4AF37] font-body font-medium mb-4"
          >
            {t('gallery.badge', 'Our Portfolio')}
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

      {/* Gallery */}
      <section className="bg-[#F8F5F2] dark:bg-[#121212] section-padding">
        <div className="container-luxury">
          <SectionTitle title={t('gallery.gridTitle', 'Our Work')} subtitle={t('gallery.subtitle')} />

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium font-body transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-gold text-white shadow-lg shadow-[#D4AF37]/20'
                    : 'bg-white dark:bg-[#1C1C1C] text-gray-600 dark:text-gray-400 hover:text-[#D4AF37] border border-gray-200 dark:border-gray-800 hover:border-[#D4AF37]/30'
                }`}
              >
                {t(categoryKeyMap[category] || `gallery.${category}`, category.charAt(0).toUpperCase() + category.slice(1))}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          {filteredItems.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GalleryCard
                      item={item}
                      index={i}
                      onClick={() => setSelectedImage(i)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 dark:text-gray-500 text-lg font-body">
                {t('gallery.noResults', 'No images found for this category.')}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label={t('common.close', 'Close')}
            >
              <X size={24} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label={t('gallery.previous', 'Previous')}
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[selectedImage].src}
                alt={filteredItems[selectedImage].alt}
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
              />
              <p className="text-center text-white/60 text-sm mt-4 font-body">
                {filteredItems[selectedImage].alt}
              </p>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label={t('gallery.next', 'Next')}
            >
              <ChevronRight size={28} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-body">
              {selectedImage + 1} / {filteredItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
