import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config/site';

function gitLastmod(pathname: string): string | undefined {
  const path = pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '').replace(/\/$/, '') || '/';
  const guideSlug = path.startsWith('/guides/') ? path.slice('/guides/'.length) : '';
  const files = [
    path === '/' ? 'src/pages/index.astro' : '',
    path === '/' ? 'src/content/home.ts' : '',
    path.startsWith('/services/') ? 'src/pages/services/[slug].astro' : '',
    path.startsWith('/services/') ? 'src/content/service-pages.ts' : '',
    path.startsWith('/services/') ? 'src/content/brief-sections.ts' : '',
    path.startsWith('/locations/') ? 'src/pages/locations/[town].astro' : '',
    path.startsWith('/locations/') ? 'src/content/town-pages.ts' : '',
    path.startsWith('/locations/') ? 'src/content/town-electrical.ts' : '',
    path.startsWith('/locations/') ? 'src/content/town-additions.ts' : '',
    path.startsWith('/locations/') ? 'src/components/TownElectrical.astro' : '',
    guideSlug ? 'src/pages/guides/[slug].astro' : '',
    guideSlug ? `src/content/guides/${guideSlug}.md` : '',
    guideSlug ? `src/content/guides/${guideSlug}.schema.json` : '',
    path.startsWith('/tools') ? 'src/content/calculators.ts' : '',
    path !== '/' && !path.startsWith('/services/') && !path.startsWith('/locations/') && !path.startsWith('/guides/')
      ? `src/pages${path}.astro`
      : '',
  ].filter((file) => file && existsSync(file));
  const stamps: string[] = [];
  for (const file of files) {
    try {
      const stamp = execSync(`git log -1 --format=%cI -- ${file}`, {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim();
      if (stamp) stamps.push(stamp);
    } catch {
      /* skip a path git cannot read */
    }
  }
  if (stamps.length === 0) return undefined;
  return stamps.sort((a, b) => Date.parse(a) - Date.parse(b)).at(-1);
}

export default defineConfig({
  site: SITE.origin,
  output: 'static',
  trailingSlash: 'never',
  redirects: {
    '/privacy': '/privacy-policy',
  },
  build: {
    format: 'file',
  },
  integrations: [
    icon(),
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/+$/, '') || '/';
        return path !== '/robots.txt' && path !== '/llms.txt' && path !== '/404' && path !== '/privacy';
      },
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
