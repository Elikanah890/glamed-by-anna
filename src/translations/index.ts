import en from './en.json';
import sw from './sw.json';

export const resources = {
  en: { translation: en },
  sw: { translation: sw },
} as const;

export type Language = keyof typeof resources;
