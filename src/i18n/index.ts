import ca from './ca';
import es from './es';
import fr from './fr';
import en from './en';

export const languages = {
  ca: 'Català',
  es: 'Castellano',
  fr: 'Français',
  en: 'English',
};

export const defaultLang = 'ca';

const dictionaries = { ca, es, fr, en } as const;

export type Lang = keyof typeof dictionaries;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in dictionaries) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}

/** Build the same path in a different language, preserving the rest of the URL. */
export function getLocalizedPath(pathname: string, targetLang: Lang): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) return `/${targetLang}/`;
  const rest = parts[0] in dictionaries ? parts.slice(1) : parts;
  return `/${targetLang}/${rest.join('/')}${rest.length ? '/' : ''}`;
}
