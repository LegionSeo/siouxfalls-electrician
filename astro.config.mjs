// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://siouxfalls-electrician.com',
  integrations: [icon()],
  server: {
    port: Number(process.env.PORT) || 4321,
  },
  vite: {
    plugins: [tailwindcss()]
  }
});