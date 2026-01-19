// src/i18n/utils.ts
import { ui, defaultLang } from "./ui";

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    const translations = ui[lang] as Record<string, string>;
    const defaultTranslations = ui[defaultLang] as Record<string, string>;

    return translations[key] || defaultTranslations[key] || key;
  };
}
export function getLangFromUrl(url: URL) {
  // Lấy phần đầu tiên của đường dẫn (ví dụ: /vi/about -> lấy 'vi')
  const [, lang] = url.pathname.split("/");

  // Nếu ngôn ngữ đó có trong danh sách ui thì trả về, không thì trả về mặc định
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}
