import flickerSchema from './guides/lights-flickering-in-house.schema.json';
import outletSchema from './guides/outlet-not-working.schema.json';

export interface Guide {
  slug: string;
  /** Full <title>. Must include the city. */
  title: string;
  h1: string;
  description: string;
  /** One line for the guides index card. */
  summary: string;
  datePublished: string;
  dateLabel: string;
  /** WebPage dateModified. Outlet keeps the brief date when this is omitted. */
  dateModified?: string;
  /** Related guide shown after the post. */
  related?: { href: string; label: string };
  /** BlogPosting, FAQPage and BreadcrumbList nodes, placed in the head as written. */
  schema: Record<string, unknown>[];
}

export const guides: Guide[] = [
  {
    slug: 'outlet-not-working',
    title: 'Outlet Not Working? Sioux Falls Homeowner Guide',
    h1: 'Outlet Not Working? What to Check First in Sioux Falls',
    description:
      'Outlet not working in your Sioux Falls home? Check GFCIs, wall switches, and breakers in order, learn the winter causes, and know when to call (605) 250-4838.',
    summary: 'Check GFCIs, wall switches, and breakers in order, and know when a dead outlet needs an electrician.',
    datePublished: '2026-11-04',
    dateLabel: 'November 4, 2026',
    related: {
      href: '/guides/lights-flickering-in-house',
      label: 'what flickering lights mean',
    },
    schema: outletSchema as Record<string, unknown>[],
  },
  {
    slug: 'lights-flickering-in-house',
    title: 'Lights Flickering in Your House? Sioux Falls Guide',
    h1: 'Lights Flickering in Your House? What It Means in Sioux Falls',
    description:
      'Lights flickering in your Sioux Falls house? Check bulbs, dimmers, and big loads in order, learn the winter causes, and know when to call (605) 250-4838.',
    summary: 'Check bulbs, dimmers, and big loads in order, and know when flickering lights need an electrician.',
    datePublished: '2026-11-11',
    dateLabel: 'November 11, 2026',
    dateModified: '2026-11-11',
    related: {
      href: '/guides/outlet-not-working',
      label: 'what to check when an outlet is not working',
    },
    schema: flickerSchema as Record<string, unknown>[],
  },
];
