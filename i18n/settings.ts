export const locales = ['uz', 'ru'] as const;
export const defaultLocale = 'uz' as const;

export type Locale = (typeof locales)[number];
