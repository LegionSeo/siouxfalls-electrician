// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://siouxfalls-electrician.com',
  integrations: [icon(), sitemap()],
  server: {
    port: Number(process.env.PORT) || 4321,
  },
  vite: {
    plugins: [tailwindcss()]
  }
});