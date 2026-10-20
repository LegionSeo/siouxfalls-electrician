import type { APIRoute } from 'astro';
import { guides, services, townPages } from '../config/catalog';
import { SITE, formatAddress } from '../config/site';

export const GET: APIRoute = () => {
  const serviceLines = services
    .filter((service) => service.live)
    .map((service) => `- [${service.name}](${SITE.origin}${service.href}): ${service.summary}`)
    .join('\n');
  const townLines = townPages
    .filter((town) => town.live && town.name !== 'Sioux Falls')
    .map((town) => `- [${town.name}](${SITE.origin}${town.href})`)
    .join('\n');
  const guideLines = guides
    .filter((guide) => guide.live)
    .map((guide) => `- [${guide.title}](${SITE.origin}${guide.href}): ${guide.summary}`)
    .join('\n');
  const hours = SITE.available247 ? `\n${SITE.availabilityNote}` : '';
  const guidesBlock = guideLines ? `\n## Guides\n${guideLines}\n` : '';

  const body = `# ${SITE.name}
> Residential and commercial electrical service in Sioux Falls, SD and nearby towns: repairs, panel upgrades, EV chargers, lighting, wiring, generators, inspections, commercial work.

Phone: ${SITE.phoneDisplay} · Email: ${SITE.email} · ${formatAddress()}${hours}
Service area: ${SITE.serviceTowns.join(', ')}; also ${SITE.listOnlyTowns.join(', ')}.

## Services
${serviceLines}

## Service area
${townLines}
${guidesBlock}`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
