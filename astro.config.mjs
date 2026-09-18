import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cal-portal.com',
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca', 'es', 'fr', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
