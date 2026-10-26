import { services } from '../config/catalog';
import { faqAnswerText, type FaqItem } from '../content/home';
import { OPERATOR_LEGAL_NAME, REFERRAL_DISCLOSURE, SITE, absoluteUrl } from '../config/site';

const referralServiceDescription =
  'Referral to a local licensed electrician. Sioux Falls Electricians does not perform electrical work.';

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
          description: referralServiceDescription,
          url: `${SITE.origin}${service.href}`,
        },
      })),
  };
}

const businessId = `${SITE.origin}/#business`;
const websiteId = `${SITE.origin}/#website`;

function organizationNode(catalog: boolean) {
  const node: Record<string, unknown> = {
    '@type': 'Organization',
    '@id': businessId,
    name: SITE.name,
    legalName: OPERATOR_LEGAL_NAME,
    description: REFERRAL_DISCLOSURE,
    url: SITE.origin,
    telephone: SITE.phoneE164,
    email: SITE.email,
    image: absoluteUrl('/logo.png'),
    logo: absoluteUrl('/logo.png'),
    parentOrganization: {
      '@type': 'Organization',
      name: OPERATOR_LEGAL_NAME,
    },
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
  page: { url: string; name: string; description: string; dateModified?: string },
  extra: Record<string, unknown>[] = [],
  options: { catalog?: boolean } = {},
) {
  const catalog = options.catalog ?? false;
  // Every page carries the same Organization node. Rich Results Test reads one
  // URL at a time and does not fill in a bare @id from another page.
  const business = organizationNode(catalog);

  const webpage: Record<string, unknown> = {
    '@type': 'WebPage',
    '@id': `${page.url}#webpage`,
    url: page.url,
    name: page.name,
    description: page.description,
    isPartOf: { '@id': websiteId },
    about: { '@id': businessId },
    inLanguage: 'en-US',
  };
  if (page.dateModified) webpage.dateModified = page.dateModified;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE.origin,
        name: SITE.name,
        publisher: { '@id': businessId },
      },
      business,
      webpage,
      ...extra,
    ],
  };
}

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
