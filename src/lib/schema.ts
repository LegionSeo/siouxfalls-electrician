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

function electricianNode() {
  const node: Record<string, unknown> = {
    '@type': 'Electrician',
    '@id': `${SITE.origin}#business`,
    name: SITE.name,
    url: SITE.origin,
    telephone: SITE.phoneE164,
    email: SITE.email,
    image: absoluteUrl(SITE.ogImage),
    logo: absoluteUrl(SITE.logo),
    areaServed: areaServed(),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          ...(service.live ? { url: `${SITE.origin}${service.href}` } : {}),
        },
      })),
    },
  };

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

  if (SITE.rating) {
    node.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: 5,
    };
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
) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE.origin}#website`,
        url: SITE.origin,
        name: SITE.name,
        publisher: { '@id': `${SITE.origin}#business` },
      },
      electricianNode(),
      {
        '@type': 'WebPage',
        '@id': `${page.url}#webpage`,
        url: page.url,
        name: page.name,
        description: page.description,
        isPartOf: { '@id': `${SITE.origin}#website` },
        about: { '@id': `${SITE.origin}#business` },
        inLanguage: 'en-US',
      },
      ...extra,
    ],
  };
}

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
