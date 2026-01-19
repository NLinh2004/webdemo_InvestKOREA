// src/i18n/utils.ts
import { ui, defaultLang } from './ui';

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    const translations = ui[lang] as Record<string, string>;
    const defaultTranslations = ui[defaultLang] as Record<string, string>;
    
    return translations[key] || defaultTranslations[key] || key;
  }
}