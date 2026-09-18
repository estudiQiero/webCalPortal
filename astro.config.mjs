import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://calportal.netlify.app', // TODO: cambiar a https://cal-portal.com cuando se publique el dominio real
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca', 'es', 'fr', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
