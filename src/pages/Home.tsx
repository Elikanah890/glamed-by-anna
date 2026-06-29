import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import {
  ChevronDown,
  ArrowRight,
  Star,
  Users,
  CalendarDays,
  Sparkles,
  Heart,
  MapPin,
  Phone,
  MessageCircle,
  Send,
  Check,
  Quote,
} from 'lucide-react';
import { cn } from '@/utils';
import { PageTransition } from '@/components/ui/PageTransition';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { GalleryCard } from '@/components/sections/GalleryCard';
import { PricingCard } from '@/components/sections/PricingCard';
import { TestimonialCard } from '@/components/sections/TestimonialCard';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import {
  services,
  pricingPackages,
  testimonials,
  galleryItems,
  faqs,
  stats,
  WHATSAPP_LINK,
  BUSINESS_PHONE,
} from '@/constants';
import { getDirectWhatsAppLink } from '@/utils';

const statIcons = [Users, CalendarDays, Sparkles, Star];

const featuredServices = services.filter((s) => s.featured);
const previewGallery = galleryItems.slice(0, 6);
const previewFaqs = faqs.slice(0, 4);

export default function Home() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  const processSteps = useMemo(
    () => [
      {
        number: '01',
        title: t('home.process.step1Title', 'Consultation'),
        description: t(
          'home.process.step1Desc',
          'We discuss your vision, skin type, and desired look to create a personalized plan.'
        ),
      },
      {
        number: '02',
        title: t('home.process.step2Title', 'Trial Session'),
        description: t(
          'home.process.step2Desc',
          'A full trial run ensures every detail is perfected before your big day.'
        ),
      },
      {
        number: '03',
        title: t('home.process.step3Title', 'Execution'),
        description: t(
          'home.process.step3Desc',
          'On the day, we arrive prepared with premium products for a flawless application.'
        ),
      },
      {
        number: '04',
        title: t('home.process.step4Title', 'The Glam'),
        description: t(
          'home.process.step4Desc',
          'You shine with confidence — a look that lasts and photographs beautifully.'
        ),
      },
    ],
    [t]
  );

  const translatedFaqs = useMemo(
    () =>
      previewFaqs.map((faq) => ({
        ...faq,
        question: t(`faq.q${faq.id}`, faq.question),
        answer: t(`faq.a${faq.id}`, faq.answer),
      })),
    [t]
  );

  const translatedTestimonials = useMemo(
    () =>
      testimonials.slice(0, 3).map((tst) => ({
        ...tst,
        text: t(`testimonial.t${tst.id}`, tst.text),
        ...(tst.service
          ? { service: t(`testimonial.s${tst.id}`, tst.service) }
          : {}),
      })),
    [t]
  );

  const bridalChecklist = useMemo(
    () => [
      t('home.bridal.checklist.consultation', 'Personalized bridal consultation'),
      t('home.bridal.checklist.trial', 'Trial session with multiple looks'),
      t('home.bridal.checklist.products', 'Premium, long-lasting products'),
      t('home.bridal.checklist.location', 'On-location service available'),
      t('home.bridal.checklist.touchup', 'Touch-up kit for the entire day'),
    ],
    [t]
  );

  return (
    <PageTransition>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0d0d]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.png"
            alt="Glamed by Anna"
            className="w-full h-full object-contain object-center"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1C]/40 via-[#0d0d0d]/30 to-[#1C1C1C]/50" />
        </div>
        {/* Gold blur orbs for luxury feel */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#C8A97E]/8 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px]" />
        </div>

        <div className="container-luxury relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block text-[#D4AF37] text-sm md:text-base uppercase tracking-[0.3em] font-body font-medium mb-6"
            >
              {t('home.hero.tagline', 'Where Beauty Meets Elegance')}
            </motion.span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-h1 font-heading font-bold mb-8 leading-[1.1]">
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#E8D48B] to-[#C8A97E] bg-clip-text text-transparent">
                {t('home.hero.titleLine1', 'Experience')}
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#E8D48B] to-[#C8A97E] bg-clip-text text-transparent">
                {t('home.hero.titleLine2', 'Luxury Makeup')}
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-300 text-base md:text-lg max-w-xl mx-auto mb-10 font-body leading-relaxed"
            >
              {t(
                'home.hero.subtitle',
                'Transform your beauty with expert artistry. From bridal elegance to red-carpet glamour, every look is crafted to perfection.'
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/book">
                <Button variant="primary" size="lg" className="min-w-[200px] text-sm tracking-wider">
                  {t('home.hero.book', 'Book Appointment')}
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="outline" size="lg" className="min-w-[200px] text-sm tracking-wider">
                  {t('home.hero.gallery', 'View Gallery')}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[#D4AF37]/60 text-xs uppercase tracking-[0.2em] font-body">
                {t('home.hero.scroll', 'Scroll')}
              </span>
              <ChevronDown size={24} className="text-[#D4AF37]" />
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8F5F2] dark:from-[#121212] to-transparent" />
      </section>

      {/* ===== FEATURED SERVICES ===== */}
      <section className="section-padding bg-[#F8F5F2] dark:bg-[#121212]">
        <div className="container-luxury">
          <SectionTitle
            title={t('home.services.title', 'Our Signature Services')}
            subtitle={t('home.services.subtitle', 'Expert Artistry')}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#D4AF37] font-body font-medium text-sm uppercase tracking-[0.15em] hover:gap-4 transition-all duration-300 group"
            >
              {t('home.services.viewAll', 'View All Services')}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section-padding bg-white dark:bg-[#1C1C1C]">
        <div className="container-luxury">
          <SectionTitle
            title={t('home.stats.title', 'Why Choose Us')}
            subtitle={t('home.stats.subtitle', 'Our Impact')}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = statIcons[index];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="relative group text-center p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-[#F8F5F2] dark:bg-[#121212] hover:border-[#D4AF37]/30 hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-gold/10 flex items-center justify-center group-hover:bg-gradient-gold group-hover:text-white transition-all duration-500">
                    <Icon size={24} className="text-[#D4AF37] group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold font-heading text-[#1C1C1C] dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-body uppercase tracking-wider">
                    {t(`home.stats.label${index}`, stat.label)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="section-padding bg-[#F8F5F2] dark:bg-[#121212]">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#D4AF37] via-[#C8A97E] to-[#1C1C1C] overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-white/30 flex items-center justify-center">
                      <Heart size={40} className="text-white" />
                    </div>
                    <p className="text-white/90 font-heading text-xl italic">
                      {t('home.about.quote', '"Beauty is power; a smile is its sword."')}
                    </p>
                    <div className="mt-8 w-16 h-px bg-white/40 mx-auto" />
                    <p className="text-white/70 text-sm font-body mt-4 uppercase tracking-[0.2em]">
                      {t('home.about.brandName', 'Glamed by Anna')}
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-xl shadow-[#D4AF37]/30"
              >
                <div className="text-center text-white">
                  <p className="text-3xl font-bold font-heading">
                    {t('home.about.yearsCount', '5+')}
                  </p>
                  <p className="text-xs uppercase tracking-wider font-body">
                    {t('home.about.yearsLabel', 'Years')}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] font-body font-medium">
                {t('home.about.tagline', 'About Glamed by Anna')}
              </span>
              <h2 className="text-h3 md:text-h2 font-heading font-bold text-[#1C1C1C] dark:text-white mt-3 mb-6 leading-tight">
                {t('home.about.heading', 'Crafting Beauty, One Brushstroke at a Time')}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 font-body">
                {t(
                  'home.about.description',
                  'Founded in 2019, Glamed by Anna has been the premier destination for luxury makeup artistry in Tanzania. Our passion is enhancing natural beauty with techniques that celebrate individuality and elegance.'
                )}
              </p>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 font-body">
                {t(
                  'home.about.mission',
                  'Every face is a canvas, and every brushstroke tells a story. We believe that confidence begins with feeling beautiful in your own skin.'
                )}
              </p>
              <Link to="/about">
                <Button variant="outline" size="md">
                  {t('home.about.cta', 'Learn More About Us')}
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== BRIDAL EXPERIENCE ===== */}
      <section className="section-padding bg-[#1C1C1C] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C8A97E]/8 rounded-full blur-[100px]" />
        </div>

        <div className="container-luxury relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] font-body font-medium">
                {t('home.bridal.tagline', 'Bridal Experience')}
              </span>
              <h2 className="text-h3 md:text-h2 lg:text-h1 font-heading font-bold text-white mt-3 mb-6 leading-tight">
                {t('home.bridal.heading', 'Your Dream Wedding Look')}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8 font-body">
                {t(
                  'home.bridal.description',
                  'Your wedding day deserves nothing less than perfection. Our bridal experience is a curated journey from consultation to the final touch, ensuring you feel radiant and confident as you walk down the aisle.'
                )}
              </p>

              <div className="space-y-5">
                {bridalChecklist.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-[#D4AF37]" />
                    </div>
                    <span className="text-gray-300 font-body text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link to="/bridal" className="inline-block mt-8">
                <Button variant="primary" size="lg">
                  {t('home.bridal.cta', 'Explore Bridal Packages')}
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 via-[#C8A97E]/10 to-transparent border border-[#D4AF37]/10 overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <Quote size={48} className="text-[#D4AF37]/30 mb-6" />
                  <p className="text-white/80 font-heading text-xl md:text-2xl italic leading-relaxed mb-6">
                    &ldquo;{t('home.bridal.testimonialQuote', "Anna made me feel like a queen on my wedding day. The makeup lasted all night and I've never felt more beautiful.")}&rdquo;
                  </p>
                  <div className="w-12 h-px bg-[#D4AF37]/50 mx-auto mb-4" />
                  <p className="text-[#D4AF37] font-heading font-semibold">
                    {t('home.bridal.testimonialName', 'Grace M.')}
                  </p>
                  <p className="text-gray-400 text-sm font-body">
                    {t('home.bridal.testimonialLocation', 'Bride, Mbeya')}
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-6 -left-6 w-28 h-28 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-xl shadow-[#D4AF37]/30"
              >
                <div className="text-center text-white">
                  <Heart size={24} className="mx-auto mb-1 fill-white" />
                  <p className="text-xs uppercase tracking-wider font-body">
                    {t('home.bridal.badge', 'Bridal')}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section-padding bg-[#F8F5F2] dark:bg-[#121212]">
        <div className="container-luxury">
          <SectionTitle
            title={t('home.process.title', 'Our Process')}
            subtitle={t('home.process.subtitle', 'How We Work')}
          />

          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37]/20 via-[#D4AF37]/40 to-[#D4AF37]/20 -translate-x-1/2" />

            <div className="space-y-12 md:space-y-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={cn(
                    'relative flex flex-col md:flex-row items-center gap-6 md:gap-12',
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
                    'md:mb-24'
                  )}
                >
                  <div
                    className={cn(
                      'flex-1 text-center md:text-right',
                      index % 2 === 1 && 'md:text-left'
                    )}
                  >
                    <span className="text-[#D4AF37] text-6xl md:text-7xl font-bold font-heading opacity-20">
                      {step.number}
                    </span>
                    <h3 className="text-h5 md:text-h4 font-heading font-semibold text-[#1C1C1C] dark:text-white mt-2 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-body max-w-xs mx-auto md:mx-0">
                      {step.description}
                    </p>
                  </div>

                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center text-white font-bold font-heading text-lg shadow-lg shadow-[#D4AF37]/30">
                      {index + 1}
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="section-padding bg-white dark:bg-[#1C1C1C]">
        <div className="container-luxury">
          <SectionTitle
            title={t('home.gallery.title', 'Our Work')}
            subtitle={t('home.gallery.subtitle', 'Gallery')}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {previewGallery.map((item, index) => (
              <GalleryCard key={item.id} item={item} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-[#D4AF37] font-body font-medium text-sm uppercase tracking-[0.15em] hover:gap-4 transition-all duration-300 group"
            >
              {t('home.gallery.viewAll', 'View Full Gallery')}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== PRICING PREVIEW ===== */}
      <section className="section-padding bg-[#F8F5F2] dark:bg-[#121212]">
        <div className="container-luxury">
          <SectionTitle
            title={t('home.pricing.title', 'Our Packages')}
            subtitle={t('home.pricing.subtitle', 'Pricing')}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {pricingPackages.slice(0, 4).map((pkg, index) => (
              <PricingCard key={pkg.id} package_={pkg} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 text-[#D4AF37] font-body font-medium text-sm uppercase tracking-[0.15em] hover:gap-4 transition-all duration-300 group"
            >
              {t('home.pricing.viewAll', 'View All Pricing')}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-padding bg-white dark:bg-[#1C1C1C]">
        <div className="container-luxury">
          <SectionTitle
            title={t('home.testimonials.title', 'Client Love')}
            subtitle={t('home.testimonials.subtitle', 'Testimonials')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {translatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-[#D4AF37] font-body font-medium text-sm uppercase tracking-[0.15em] hover:gap-4 transition-all duration-300 group"
            >
              {t('home.testimonials.viewAll', 'Read All Reviews')}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== FAQ PREVIEW ===== */}
      <section className="section-padding bg-[#F8F5F2] dark:bg-[#121212]">
        <div className="container-luxury max-w-3xl">
          <SectionTitle
            title={t('home.faq.title', 'Frequently Asked Questions')}
            subtitle={t('home.faq.subtitle', 'FAQ')}
          />

          <div className="space-y-4">
            {translatedFaqs.map((faq) => (
              <FAQAccordion
                key={faq.id}
                faq={faq}
                isOpen={openFaq === faq.id}
                onToggle={() => toggleFaq(faq.id)}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-10"
          >
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-[#D4AF37] font-body font-medium text-sm uppercase tracking-[0.15em] hover:gap-4 transition-all duration-300 group"
            >
              {t('home.faq.viewAll', 'See All FAQs')}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#C8A97E] to-[#D4AF37]">
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="container-luxury relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-h2 font-heading font-bold text-white mb-4">
              {t('home.cta.heading', 'Ready to Glam?')}
            </h2>
            <p className="text-white/90 text-base md:text-lg max-w-xl mx-auto mb-10 font-body">
              {t(
                'home.cta.subtitle',
                'Book your appointment today and let us create a look that turns heads and captures hearts.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book">
                <Button
                  variant="secondary"
                  size="lg"
                  className="min-w-[180px] bg-white text-[#1C1C1C] hover:bg-white/90"
                >
                  {t('home.cta.book', 'Book Now')}
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <a href={getDirectWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="min-w-[180px]"
                >
                  <MessageCircle size={18} />
                  {t('home.cta.whatsapp', 'WhatsApp Us')}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="section-padding bg-white dark:bg-[#1C1C1C]">
        <div className="container-luxury max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] font-body font-medium">
              {t('home.newsletter.tagline', 'Stay Connected')}
            </span>
            <h2 className="text-h3 md:text-h2 font-heading font-bold text-[#1C1C1C] dark:text-white mt-3 mb-4">
              {t('home.newsletter.title', 'Join Our Mailing List')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 font-body leading-relaxed">
              {t(
                'home.newsletter.description',
                'Be the first to know about exclusive offers, new services, and beauty tips delivered to your inbox.'
              )}
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('home.newsletter.placeholder', 'Enter your email')}
                required
                className="w-full sm:flex-1 px-5 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-[#F8F5F2] dark:bg-[#121212] text-[#1C1C1C] dark:text-white font-body text-sm outline-none focus:border-[#D4AF37] transition-colors"
              />
              <Button type="submit" variant="primary" size="md" className="w-full sm:w-auto whitespace-nowrap">
                {t('home.newsletter.subscribe', 'Subscribe')}
                <Send size={16} />
              </Button>
            </form>

            <p className="text-gray-400 dark:text-gray-500 text-xs mt-4 font-body">
              {t('home.newsletter.privacy', 'No spam. Unsubscribe anytime.')}
            </p>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
