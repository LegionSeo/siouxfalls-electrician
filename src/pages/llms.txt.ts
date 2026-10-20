import type { APIRoute } from 'astro';
import { services, townPages } from '../config/catalog';
import { SITE, formatAddress } from '../config/site';

export const GET: APIRoute = () => {
  const liveServices = services.filter((service) => service.live);
  const liveTowns = townPages.filter((town) => town.live);
  const serviceLines = liveServices
    .map((service) => `- ${service.name}: ${service.summary} ${SITE.origin}${service.href}`)
    .join('\n');
  const townLines = [
    ...liveTowns.map((town) => `- ${town.name}: ${SITE.origin}${town.href === '/' ? '' : town.href}`),
    ...townPages.filter((town) => !town.live).map((town) => `- ${town.name}`),
    ...SITE.listOnlyTowns.map((name) => `- ${name}`),
  ].join('\n');
  const pages = [
    `${SITE.origin}`,
    `${SITE.origin}/about`,
    `${SITE.origin}/contact`,
    ...liveServices.map((service) => `${SITE.origin}${service.href}`),
    ...liveTowns.filter((town) => town.href !== '/').map((town) => `${SITE.origin}${town.href}`),
  ];
  const hours = [SITE.hours?.label, SITE.available247 ? SITE.availabilityNote : '']
    .filter(Boolean)
    .join('. ');

  const body = `# ${SITE.name}

Phone: ${SITE.phoneDisplay}
Email: ${SITE.email}
Address: ${formatAddress()}
Hours: ${hours}

## Services
${serviceLines}

## Towns served
${townLines}

## Live pages
${pages.map((page) => `- ${page}`).join('\n')}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
