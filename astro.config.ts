import { execSync } from 'node:child_process';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config/site';

function gitLastmod(pathname: string): string | undefined {
  const path = pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '').replace(/\/$/, '') || '/';
  const files = [
    path === '/' ? 'src/pages/index.astro' : `src/pages${path}.astro`,
    path.startsWith('/services/') ? 'src/pages/services/[slug].astro' : '',
    path.startsWith('/locations/') ? 'src/pages/locations/[town].astro' : '',
  ].filter(Boolean);
  for (const file of files) {
    try {
      const stamp = execSync(`git log -1 --format=%cI -- ${file}`, {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim();
      if (stamp) return stamp;
    } catch {
      /* try the next candidate */
    }
  }
  return undefined;
}

export default defineConfig({
  site: SITE.origin,
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    icon(),
    sitemap({
      filter: (page) => !page.endsWith('/robots.txt') && !page.endsWith('/llms.txt'),
      serialize(item) {
        const stamp = gitLastmod(new URL(item.url).pathname);
        if (stamp) item.lastmod = stamp;
        return item;
      },
    }),
  ],
  server: {
    port: Number(process.env.PORT) || 4321,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
