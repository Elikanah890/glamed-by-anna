import { NavLink, Service, PricingPackage, Testimonial, GalleryItem, FAQ, ContactInfo } from '@/types';

export const WHATSAPP_NUMBER = '255655737871';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const BUSINESS_PHONE = '0655737871';
export const BUSINESS_EMAIL = 'anniey5555@gmail.com';
export const BUSINESS_LOCATION = 'Mahakama Avenue, Mbeya, Tanzania';
export const BUSINESS_NAME = 'Glamed by Anna';
export const FOUNDED_YEAR = 2019;

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Bridal', path: '/bridal' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export const services: Service[] = [
  {
    id: 'bridal',
    title: 'Bridal Makeup',
    slug: 'bridal-makeup',
    description: 'Transform your wedding day into a fairytale with our signature bridal makeup. Our expert artists will create a timeless look that photographs beautifully and lasts through your entire celebration.',
    benefits: ['Long-lasting', 'Photographs beautifully', 'Customized to your style', 'Trial included'],
    duration: '3-4 hours',
    price: 'From 150,000 TZS',
    icon: 'Heart',
    featured: true,
  },
  {
    id: 'soft-glam',
    title: 'Soft Glam',
    slug: 'soft-glam',
    description: 'Effortlessly elegant soft glam that enhances your natural beauty. Perfect for daytime events and sophisticated occasions.',
    benefits: ['Natural enhancement', 'Versatile', 'Camera-ready'],
    duration: '1.5-2 hours',
    price: 'From 80,000 TZS',
    icon: 'Sparkles',
    featured: true,
  },
  {
    id: 'natural-glam',
    title: 'Natural Glam',
    slug: 'natural-glam',
    description: 'Look like the best version of yourself with our natural glam service. Subtle enhancement that lets your true beauty shine.',
    benefits: ['Fresh-faced', 'Natural finish', 'Confidence boost'],
    duration: '1-1.5 hours',
    price: 'From 60,000 TZS',
    icon: 'Flower',
    featured: true,
  },
  {
    id: 'luxury-glam',
    title: 'Luxury Glam',
    slug: 'luxury-glam',
    description: 'Red carpet-ready luxury makeup for your most glamorous moments. Full coverage, dramatic eyes, and flawless finish.',
    benefits: ['High-impact', 'Photoshoot ready', 'All-day wear'],
    duration: '2-3 hours',
    price: 'From 120,000 TZS',
    icon: 'Crown',
    featured: true,
  },
  {
    id: 'graduation',
    title: 'Graduation Makeup',
    slug: 'graduation-makeup',
    description: 'Celebrate your academic achievement with makeup that makes you feel accomplished and beautiful. Perfect for graduation photos and ceremonies.',
    benefits: ['Photographs beautifully', 'Lasts through celebrations', 'Youthful glow'],
    duration: '1.5-2 hours',
    price: 'From 70,000 TZS',
    icon: 'GraduationCap',
    featured: true,
  },
  {
    id: 'party',
    title: 'Party Makeup',
    slug: 'party-makeup',
    description: 'Turn heads at your next party with our glamorous party makeup. Glitter, shimmer, and high-impact looks for unforgettable nights.',
    benefits: ['Eye-catching', 'Long-lasting', 'Perfect for photos'],
    duration: '1.5-2 hours',
    price: 'From 85,000 TZS',
    icon: 'PartyPopper',
    featured: true,
  },
  {
    id: 'traditional',
    title: 'Traditional Makeup',
    slug: 'traditional-makeup',
    description: 'Honor your culture with our traditional makeup services. We understand the unique requirements of traditional ceremonies.',
    benefits: ['Culturally appropriate', 'Skin-tone perfected', 'Confidence-building'],
    duration: '2-3 hours',
    price: 'From 100,000 TZS',
    icon: 'Palette',
  },
  {
    id: 'photoshoot',
    title: 'Photoshoot Makeup',
    slug: 'photoshoot-makeup',
    description: 'Professional makeup designed specifically for the camera. Every detail is perfect for your photoshoot.',
    benefits: ['Camera-ready', 'Flawless finish', 'Photoshoot optimized'],
    duration: '2-3 hours',
    price: 'From 90,000 TZS',
    icon: 'Camera',
  },
  {
    id: 'home-service',
    title: 'Home Service',
    slug: 'home-service',
    description: 'Luxury makeup in the comfort of your own home. Our artists come to you for convenience and privacy.',
    benefits: ['Convenient', 'Private', 'Flexible scheduling'],
    duration: 'Varies',
    price: 'From +50,000 TZS travel fee',
    icon: 'Home',
  },
  {
    id: 'hair',
    title: 'Hair Styling',
    slug: 'hair-styling',
    description: 'Complete your look with professional hair styling that complements your makeup perfectly.',
    benefits: ['Complete look', 'Styled to perfection', 'Lasts all day'],
    duration: '1-2 hours',
    price: 'From 50,000 TZS',
    icon: 'Scissors',
  },
  {
    id: 'lashes',
    title: 'Lashes',
    slug: 'lashes',
    description: 'Premium lash application for stunning, fluttery eyes. Available in various styles from natural to dramatic.',
    benefits: ['Instant eye enhancement', 'Variety of styles', 'Professional application'],
    duration: '30-45 minutes',
    price: 'From 30,000 TZS',
    icon: 'Eye',
  },
];

export const pricingPackages: PricingPackage[] = [
  {
    id: 'basic',
    name: 'Basic Package',
    price: '60,000 TZS',
    services: 'Natural Glam Makeup',
    includes: ['Consultation', 'Application', 'Touch-up kit'],
    bestFor: 'Everyday occasions, Casual events',
  },
  {
    id: 'standard',
    name: 'Standard Package',
    price: '100,000 TZS',
    services: 'Soft Glam or Traditional Makeup',
    includes: ['Consultation', 'Application', 'Touch-up kit', 'Lash application'],
    bestFor: 'Graduations, Parties, Photoshoots',
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium Package',
    price: '150,000 TZS',
    services: 'Bridal or Luxury Glam',
    includes: ['Consultation', 'Trial session', 'Application', 'Touch-up kit', 'Premium lashes', 'Lip touch-up kit'],
    bestFor: 'Weddings, Red carpet events',
  },
  {
    id: 'vip',
    name: 'VIP Experience',
    price: '250,000 TZS',
    services: 'Full bridal package + Home service',
    includes: ['Consultation', 'Trial session', 'Wedding day application', 'Touch-up kit', 'Premium lashes', 'Lip touch-up kit', 'Home service'],
    bestFor: 'Luxury weddings, Comprehensive service',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Grace M.',
    location: 'Mbeya',
    text: 'Anna made me feel like a queen on my wedding day. The makeup lasted all night and I\'ve never felt more beautiful.',
    rating: 5,
    service: 'Bridal Makeup',
  },
  {
    id: '2',
    name: 'Sarah K.',
    location: 'Arusha',
    text: 'Absolutely professional and talented. My graduation photos look stunning thanks to Anna\'s incredible work.',
    rating: 5,
    service: 'Graduation Makeup',
  },
  {
    id: '3',
    name: 'Elizabeth J.',
    location: 'Mwanza',
    text: 'The best makeup experience I\'ve ever had. Anna listened to what I wanted and exceeded my expectations.',
    rating: 5,
    service: 'Luxury Glam',
  },
  {
    id: '4',
    name: 'Mary W.',
    location: 'Zanzibar',
    text: 'My bridal makeup was perfection. Anna\'s attention to detail is unmatched.',
    rating: 5,
    service: 'Bridal Makeup',
  },
  {
    id: '5',
    name: 'Jessica N.',
    location: 'Dodoma',
    text: 'I\'ve never had makeup that lasted this long or looked this natural. Highly recommend.',
    rating: 5,
    service: 'Natural Glam',
  },
];

export const galleryItems: GalleryItem[] = [
  { id: '1', src: '/images/gallery/bridal-1.webp', alt: 'Bridal Glam - Wedding Day', category: 'bridal', featured: true },
  { id: '2', src: '/images/gallery/grad-1.webp', alt: 'Soft Natural Glam for Graduation', category: 'graduation' },
  { id: '3', src: '/images/gallery/party-1.webp', alt: 'Luxury Party Makeup - New Year\'s Eve', category: 'party' },
  { id: '4', src: '/images/gallery/traditional-1.webp', alt: 'Traditional Bridal Look - Cultural Ceremony', category: 'traditional' },
  { id: '5', src: '/images/gallery/photoshoot-1.webp', alt: 'Photoshoot Ready - Editorial Style', category: 'photoshoot' },
  { id: '6', src: '/images/gallery/bridal-2.webp', alt: 'Glowing Bride - Outdoor Wedding', category: 'bridal' },
  { id: '7', src: '/images/gallery/grad-2.webp', alt: 'Graduation Glam - University Ceremony', category: 'graduation' },
  { id: '8', src: '/images/gallery/party-2.webp', alt: 'Evening Party Glam', category: 'party' },
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How do I book an appointment?',
    answer: 'You can book an appointment through our website\'s booking form, or contact us directly via WhatsApp at 0655737871.',
    category: 'booking',
  },
  {
    id: '2',
    question: 'Do I need to pay a deposit?',
    answer: 'Yes, we require a 50% deposit to confirm your booking. The remaining balance is due on the day of service.',
    category: 'booking',
  },
  {
    id: '3',
    question: 'What payment methods do you accept?',
    answer: 'We accept M-Pesa, bank transfer, and cash payments.',
    category: 'booking',
  },
  {
    id: '4',
    question: 'How should I prepare for my appointment?',
    answer: 'Come with a clean, moisturized face. If you have any skin concerns, let us know during consultation.',
    category: 'preparation',
  },
  {
    id: '5',
    question: 'Can I bring my own products?',
    answer: 'Absolutely! We\'re happy to use your preferred products if you have allergies or special preferences.',
    category: 'preparation',
  },
  {
    id: '6',
    question: 'When should I book my bridal makeup?',
    answer: 'We recommend booking at least 3-6 months before your wedding, especially during peak season.',
    category: 'bridal',
  },
  {
    id: '7',
    question: 'Do you offer trial sessions?',
    answer: 'Yes! Every bridal booking includes a trial session to perfect your look before the big day.',
    category: 'bridal',
  },
  {
    id: '8',
    question: 'Do you travel for events?',
    answer: 'Yes, we offer home service and travel to various locations. A travel fee applies depending on distance.',
    category: 'travel',
  },
  {
    id: '9',
    question: 'What areas do you cover?',
    answer: 'We primarily serve Mbeya and surrounding areas. For other locations, please contact us for availability.',
    category: 'travel',
  },
  {
    id: '10',
    question: 'What products do you use?',
    answer: 'We use professional, high-quality products from leading brands. We prioritize skin health and use products suitable for all skin types.',
    category: 'products',
  },
  {
    id: '11',
    question: 'Do you cater to sensitive skin?',
    answer: 'Yes, we have hypoallergenic products and can accommodate most skin sensitivities. Please inform us during booking.',
    category: 'products',
  },
  {
    id: '12',
    question: 'What\'s your cancellation policy?',
    answer: 'Cancellations must be made at least 48 hours in advance for a full deposit refund. Last-minute cancellations may forfeit the deposit.',
    category: 'cancellation',
  },
];

export const contactInfo: ContactInfo = {
  phone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  location: BUSINESS_LOCATION,
  whatsapp: WHATSAPP_NUMBER,
  socials: [
    { name: 'Instagram', url: 'https://instagram.com/glamed_by_anna', icon: 'Instagram' },
    { name: 'Facebook', url: 'https://facebook.com/glamed_by_anna', icon: 'Facebook' },
    { name: 'TikTok', url: 'https://tiktok.com/@glamed_by_anna', icon: 'Music2' },
  ],
  businessHours: [
    { day: 'Monday - Friday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: 'Closed (Available for bookings)' },
  ],
};

export const galleryCategories = ['all', 'bridal', 'graduation', 'party', 'traditional', 'photoshoot'];

export const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '11', label: 'Services' },
  { value: '4.9', label: 'Rating' },
];
