import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config/site';

/**
 * Service pages share service-pages.ts and brief-sections.ts.
 * These stamps are the lastmod from before a later edit to that shared file.
 * The Nov 16 values are the EV and emergency refresh. Pages omitted here pick up git lastmod.
 */
const pinnedServiceLastmod: Record<string, string> = {
  '/services/electrical-repair': '2026-11-11T15:22:47+00:00',
  '/services/emergency-electrician': '2026-11-16T15:38:42+00:00',
  '/services/outlet-switch-installation': '2026-11-11T15:22:47+00:00',
  '/services/panel-upgrades': '2026-11-11T15:22:47+00:00',
  '/services/circuit-breaker-panel-repair': '2026-11-11T15:22:47+00:00',
  '/services/wiring-rewiring': '2026-11-11T15:22:47+00:00',
  '/services/generator-installation': '2026-11-11T15:22:47+00:00',
  '/services/ev-charger-installation': '2026-11-16T15:38:42+00:00',
  '/services/lighting-installation': '2026-11-11T15:22:47+00:00',
  '/services/ceiling-fan-installation': '2026-11-11T15:22:47+00:00',
  '/services/hot-tub-wiring': '2026-11-11T15:22:47+00:00',
  '/services/electrical-inspections': '2026-11-11T15:22:47+00:00',
  '/services/surge-protection': '2026-11-11T15:22:47+00:00',
  '/services/smoke-co-detectors': '2026-11-11T15:22:47+00:00',
  '/services/commercial-electrician': '2026-11-11T15:22:47+00:00',
};

/**
 * Guide posts share src/pages/guides/[slug].astro.
 * These stamps stay at the Nov 11, 2026 lastmod so a shared template edit does not move them.
 * A guide omitted here uses the latest git date of its markdown, schema, and the shared template.
 */
const pinnedGuideLastmod: Record<string, string> = {
  '/guides/outlet-not-working': '2026-11-11T15:22:47+00:00',
  '/guides/lights-flickering-in-house': '2026-11-11T15:22:47+00:00',
};

function gitLastmod(pathname: string): string | undefined {
  const path = pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '').replace(/\/$/, '') || '/';
  const pinned = pinnedServiceLastmod[path] ?? pinnedGuideLastmod[path];
  if (pinned) return pinned;
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
