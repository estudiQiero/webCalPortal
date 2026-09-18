import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cal-portal.com',
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca', 'es', 'fr', 'en'],
    routing: {
      prefixDefaultLocale: true,
      // Astro's built-in "/" redirect uses a 2-second meta-refresh delay,
      // which shows as a blank flash before landing on /ca/. We ship our
      // own instant, browser-language-aware redirect in src/pages/index.astro
      // instead, so switch off the automatic one.
      redirectToDefaultLocale: false,
    },
  },
});
