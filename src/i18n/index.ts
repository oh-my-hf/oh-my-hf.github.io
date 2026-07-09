import en from './en.json';
import zhCN from './zh-CN.json';

export type Locale = 'en' | 'zh-CN';

export const locales: Locale[] = ['en', 'zh-CN'];

const dictionaries = {
  en,
  'zh-CN': zhCN,
} as const;

export type TranslationKey = PathsToStringValues<typeof en>;

type PathsToStringValues<T, Prefix extends string = ''> = T extends string
  ? Prefix
  : {
      [K in keyof T & string]: PathsToStringValues<
        T[K],
        Prefix extends '' ? K : `${Prefix}.${K}`
      >;
    }[keyof T & string];

function getByPath(obj: unknown, path: string): string {
  const value = path.split('.').reduce<unknown>((acc, segment) => {
    if (acc && typeof acc === 'object' && segment in acc) {
      return (acc as Record<string, unknown>)[segment];
    }
    return undefined;
  }, obj);

  if (typeof value !== 'string') {
    throw new Error(`Missing translation for key: ${path}`);
  }
  return value;
}

/**
 * Typed translation helper keyed from `en.json`.
 *
 * @example
 * const t = useTranslations('en');
 * t('nav.features'); // "Features"
 */
export function useTranslations(locale: Locale) {
  const dict = dictionaries[locale] ?? dictionaries.en;

  return function t(key: TranslationKey): string {
    try {
      return getByPath(dict, key);
    } catch {
      return getByPath(dictionaries.en, key);
    }
  };
}

/** HTML `lang` attribute value for a locale. */
export function htmlLang(locale: Locale): string {
  switch (locale) {
    case 'en':
      return 'en';
    case 'zh-CN':
      return 'zh-CN';
    default: {
      const _exhaustive: never = locale;
      return _exhaustive;
    }
  }
}

/** Deploy base path without trailing slash (`''` when serving from the root). */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Public path prefix for a locale (`''` for English, `/zh` for Chinese), relative to the site root. */
export function localePath(locale: Locale, path = ''): string {
  const normalized = path.startsWith('/') ? path : path ? `/${path}` : '';
  switch (locale) {
    case 'en':
      return normalized || '/';
    case 'zh-CN':
      return `/zh${normalized || '/'}`;
    default: {
      const _exhaustive: never = locale;
      return _exhaustive;
    }
  }
}

/** Browser-facing link for a locale: `localePath` prefixed with the deploy base. */
export function localeHref(locale: Locale, path = ''): string {
  return `${BASE}${localePath(locale, path)}`;
}

/** Opposite locale for the language switcher. */
export function alternateLocale(locale: Locale): Locale {
  switch (locale) {
    case 'en':
      return 'zh-CN';
    case 'zh-CN':
      return 'en';
    default: {
      const _exhaustive: never = locale;
      return _exhaustive;
    }
  }
}
