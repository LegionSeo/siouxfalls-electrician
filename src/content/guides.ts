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
    schema: outletSchema as Record<string, unknown>[],
  },
];
