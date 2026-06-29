import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { BookingFormData } from '@/types';
import { WHATSAPP_NUMBER } from '@/constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateWhatsAppMessage(data: BookingFormData): string {
  const lines = [
    'Hello Glamed by Anna Team! 👋',
    '',
    'I would like to book an appointment for:',
    '',
    `📋 Service: ${data.service}`,
    `📅 Date: ${data.date}`,
    `⏰ Time: ${data.time}`,
    `📍 Location: ${data.location === 'studio' ? 'Studio' : 'Home Service'}`,
    `👤 Name: ${data.name}`,
    `📞 Phone: ${data.phone}`,
    `📧 Email: ${data.email}`,
    '',
    'Additional Details:',
    data.message || 'None',
    '',
    'I look forward to hearing from you soon!',
    '',
    'Best regards,',
    data.name,
  ];

  return lines.join('\n');
}

export function getWhatsAppLink(data: BookingFormData): string {
  const message = generateWhatsAppMessage(data);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function getDirectWhatsAppLink(): string {
  const message = encodeURIComponent(
    "Hello Glamed by Anna Team! 👋\n\nI'm interested in your makeup services. Please share more information.\n\nThank you!"
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-TZ').format(price) + ' TZS';
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}
