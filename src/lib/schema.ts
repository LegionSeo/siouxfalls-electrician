import { services } from '../config/catalog';
import { faqAnswerText, type FaqItem } from '../content/home';
import { SITE, absoluteUrl } from '../config/site';

function areaServed() {
  return [...SITE.serviceTowns, ...SITE.listOnlyTowns].map((name) => ({
    '@type': 'City',
    name,
    containedInPlace: {
      '@type': 'State',
      name: 'South Dakota',
    },
  }));
}

function offerCatalog() {
  return {
    '@type': 'OfferCatalog',
    name: 'Electrical services',
    itemListElement: services
      .filter((service) => service.live)
      .map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          url: `${SITE.origin}${service.href}`,
        },
      })),
  };
}

function electricianNode(catalog: boolean) {
  const node: Record<string, unknown> = {
    '@type': 'Electrician',
    '@id': '#business',
    name: SITE.name,
    url: SITE.origin,
    telephone: SITE.phoneE164,
    email: SITE.email,
    image: absoluteUrl(SITE.ogImage),
    logo: absoluteUrl(SITE.logo),
    areaServed: areaServed(),
  };

  if (catalog) node.hasOfferCatalog = offerCatalog();

  if (SITE.showStreetAddress) {
    node.address = {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    };
  } else {
    node.address = {
      '@type': 'PostalAddress',
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    };
  }

  if (SITE.geo) {
    node.geo = {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    };
  }

  if (SITE.hours) {
    node.openingHoursSpecification = SITE.hours.specification.map((row) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: row.dayOfWeek,
      opens: row.opens,
      closes: row.closes,
    }));
  }

  if (SITE.sameAs.length > 0) {
    node.sameAs = SITE.sameAs;
  }

  return node;
}

export function faqNode(faqs: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faqAnswerText(item),
      },
    })),
  };
}

export function siteGraph(
  page: { url: string; name: string; description: string },
  extra: Record<string, unknown>[] = [],
  options: { fullBusiness?: boolean; catalog?: boolean } = {},
) {
  const fullBusiness = options.fullBusiness ?? false;
  const catalog = options.catalog ?? false;
  const business = fullBusiness
    ? electricianNode(catalog)
    : catalog
      ? { '@type': 'Electrician', '@id': '#business', hasOfferCatalog: offerCatalog() }
      : { '@id': '#business' };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': '#website',
        url: SITE.origin,
        name: SITE.name,
        publisher: { '@id': '#business' },
      },
      business,
      {
        '@type': 'WebPage',
        '@id': '#webpage',
        url: page.url,
        name: page.name,
        description: page.description,
        isPartOf: { '@id': '#website' },
        about: { '@id': '#business' },
        inLanguage: 'en-US',
      },
      ...extra,
    ],
  };
}

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
