export interface NavLink {
  label: string;
  path: string;
  children?: NavLink[];
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  benefits: string[];
  duration: string;
  price: string;
  icon: string;
  image?: string;
  featured?: boolean;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  services: string;
  includes: string[];
  bestFor: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  image?: string;
  service?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  width?: number;
  height?: number;
  featured?: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  location: 'studio' | 'home';
  message?: string;
  agreedToPolicy: boolean;
}

export interface TranslationDict {
  [key: string]: string | TranslationDict;
}

export type Theme = 'light' | 'dark' | 'system';

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  whatsapp: string;
  socials: SocialLink[];
  businessHours: {
    day: string;
    hours: string;
  }[];
}
