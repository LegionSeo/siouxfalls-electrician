/**
 * Renter-swappable business details.
 * Every phone number, email, address, hour, and photo path on the site comes from here.
 *
 * Calls use (605) 250-4838. Leave smsEnabled false until this number can receive texts.
 *
 * Photos below are temporary approved images. Point the paths at real job photos
 * when those exist. Do not describe the people in them as this company's crew.
 */

export interface PostalAddress {
  street: string;
  city: string;
  region: string;
  zip: string;
  country: string;
}

export interface GeoPoint {
  lat: number;
  lng: number;
}

export interface OpeningHours {
  label: string;
  specification: {
    dayOfWeek: string | string[];
    opens: string;
    closes: string;
  }[];
}

export interface Rating {
  value: number;
  count: number;
  source: string;
}

export interface JobPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** Swappable responsive photo. Change the paths when a real photo replaces it. */
export interface PhotoSlot {
  alt: string;
  width: number;
  height: number;
  src: string;
  webpSrcset: string;
  avifSrcset: string;
  /** Editor note. Rendered as an HTML comment, not as visible copy. */
  note: string;
}

export interface SiteConfig {
  name: string;
  origin: string;
  phoneDisplay: string;
  phoneE164: string;
  phoneHref: string;
  smsHref: string;
  /** Show sms: links only when the tracking number can receive texts. */
  smsEnabled: boolean;
  email: string;
  address: PostalAddress;
  /** Set false if this street address is ever shared with another rank-and-rent site. */
  showStreetAddress: boolean;
  /** Fill only from a verified geocode of the address. */
  geo: GeoPoint | null;
  /** null hides the hours line and openingHoursSpecification. */
  hours: OpeningHours | null;
  /**
   * Owner-confirmed: calls and service, including emergency service, are offered 24/7.
   * Set false to hide the 24/7 message in the hero, trust bar, and emergency section.
   */
  available247: boolean;
  /** Shown only when available247 is true. */
  availabilityNote: string;
  serviceTowns: string[];
  listOnlyTowns: string[];
  /** Add a Google or Facebook profile only after it really exists. */
  sameAs: string[];
  license: string | null;
  owner: string | null;
  rating: Rating | null;
  /** Dark-surface lockup for the header and footer. */
  logo: string;
  /** Light-surface lockup. */
  logoLight: string;
  /** Bison mark without the wordmark. */
  logoIcon: string;
  /** Alt text, and the name to show if the logo image does not load. */
  logoText: string;
  ogImage: string;
  /** Temporary approved hero. Replace src, srcset, and alt together. */
  heroPhoto: PhotoSlot;
  /**
   * Card photos keyed by service path. Repair and wiring share one file.
   * Services omitted here stay icon-only.
   */
  servicePhotos: Record<string, PhotoSlot>;
  /** Real job photos for the proof block. Empty keeps that block hidden. */
  jobPhotos: JobPhoto[];
  /**
   * HTTPS action for the request form. Null hides that form.
   * The live value is FormSubmit. Mail is sent by formsubmit.co, not this site.
   */
  formEndpoint: string | null;
  /** Palette id. Live tokens are Thunder Sunrise. */
  theme: string;
  /**
   * GA4 measurement id, such as G-ABC123. Empty loads no tag.
   * Ignored when gtmId is set.
   */
  ga4Id: string;
  /**
   * GTM container id, such as GTM-ABC123. Empty loads no tag.
   * When both ids are set, only GTM loads.
   */
  gtmId: string;
}

function photo(
  base: string,
  large: number,
  small: number,
  height: number,
  alt: string,
  note: string,
): PhotoSlot {
  return {
    alt,
    width: large,
    height,
    src: `/images/${base}-${large}.webp`,
    webpSrcset: `/images/${base}-${small}.webp ${small}w, /images/${base}-${large}.webp ${large}w`,
    avifSrcset: `/images/${base}-${small}.avif ${small}w, /images/${base}-${large}.avif ${large}w`,
    note,
  };
}

const repairWiringPhoto = photo(
  'service-repair-wiring',
  800,
  480,
  600,
  'Electrician repairing wiring in a crawl space',
  'Temporary approved photo for electrical repair and wiring cards. Replace service-repair-wiring files, or this slot, with a real job photo. The person is not identified as company staff.',
);

const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const SERVICE_EMAIL = 'service@siouxfalls-electrician.com';

export const SITE: SiteConfig = {
  name: 'Sioux Falls Electricians',
  origin: 'https://www.siouxfalls-electrician.com',
  phoneDisplay: '(605) 250-4838',
  phoneE164: '+16052504838',
  phoneHref: 'tel:+16052504838',
  smsHref: 'sms:+16052504838',
  smsEnabled: false,
  email: SERVICE_EMAIL,
  address: {
    street: '5311 S Sycamore Ave, Suite 104',
    city: 'Sioux Falls',
    region: 'SD',
    zip: '57108',
    country: 'US',
  },
  showStreetAddress: false,
  geo: null,
  hours: {
    label: 'Open 24 hours, 7 days',
    specification: [
      {
        dayOfWeek: week,
        opens: '00:00',
        closes: '23:59',
      },
    ],
  },
  available247: true,
  availabilityNote:
    'Calls answered 24 hours a day, 7 days a week, including emergency service.',
  serviceTowns: [
    'Sioux Falls',
    'Brandon',
    'Harrisburg',
    'Tea',
    'Hartford',
    'Dell Rapids',
    'Canton',
    'Lennox',
  ],
  listOnlyTowns: ['Crooks', 'Renner', 'Baltic', 'Garretson'],
  sameAs: [
    'https://www.linkedin.com/company/sioux-falls-electricians',
    'https://www.instagram.com/siouxfallselectricians/',
  ],
  license: null,
  owner: null,
  rating: null,
  logo: '/logo-white.svg',
  logoLight: '/logo.svg',
  logoIcon: '/logo-icon.svg',
  logoText: 'Sioux Falls Electricians',
  ogImage: '/brand/og-image.jpg',
  heroPhoto: photo(
    'hero-electrician-panel',
    1280,
    800,
    720,
    'Sioux Falls electrician checking a home breaker panel',
    'Temporary approved hero photo. The source file is 1280 pixels wide, so it is not enlarged. Replace hero-electrician-panel files, or heroPhoto, with a real job photo. Do not call the person company staff.',
  ),
  servicePhotos: {
    '/services/panel-upgrades': photo(
      'service-panel-upgrade',
      800,
      480,
      600,
      'Electrician working inside an open residential breaker panel',
      'Temporary approved photo for the panel upgrade card. Replace with a real panel-upgrade photo when one exists.',
    ),
    '/services/ev-charger-installation': photo(
      'service-ev-charger',
      800,
      480,
      600,
      'Electrician mounting a home EV charger on a garage wall',
      'Temporary approved photo for the EV charger card. Replace with a real charger install photo when one exists.',
    ),
    '/services/lighting-installation': photo(
      'service-lighting',
      800,
      480,
      600,
      'Electrician installing a recessed ceiling light',
      'Temporary approved photo for the lighting card. Replace with a real lighting photo when one exists.',
    ),
    '/services/emergency-electrician': photo(
      'service-emergency',
      800,
      480,
      600,
      'Electrician inspecting an outdoor outlet on a house at night',
      'Temporary approved photo for the emergency card. Replace with a real emergency-call photo when one exists.',
    ),
    '/services/commercial-electrician': photo(
      'service-commercial',
      800,
      480,
      600,
      'Electrician working among large electrical cabinets',
      'Temporary approved photo for the commercial card. Replace with a real commercial job photo when one exists.',
    ),
    '/services/electrical-repair': repairWiringPhoto,
    '/services/wiring-rewiring': photo(
      'service-wiring',
      1280,
      800,
      720,
      'Electrician pulling new cable through open wall studs',
      'Page photo for wiring. The person is not company staff.',
    ),
  },
  jobPhotos: [],
  formEndpoint: `https://formsubmit.co/${SERVICE_EMAIL}`,
  theme: 'thunder-sunrise',
  ga4Id: '',
  gtmId: '',
};

const GTM_ID = /^GTM-[A-Z0-9]+$/;
const GA4_ID = /^G-[A-Z0-9]+$/;

/** Which tag to load. GTM wins when both ids are set. Empty or invalid ids load nothing. */
/** AJAX endpoint on the same FormSubmit host. HTTPS only, no API key. */
export function leadAjaxEndpoint(): string {
  return `https://formsubmit.co/ajax/${SITE.email}`;
}

export function activeAnalytics(): { provider: 'gtm' | 'ga4'; id: string } | null {
  const gtmId = SITE.gtmId.trim();
  if (gtmId) return GTM_ID.test(gtmId) ? { provider: 'gtm', id: gtmId } : null;
  const ga4Id = SITE.ga4Id.trim();
  if (ga4Id) return GA4_ID.test(ga4Id) ? { provider: 'ga4', id: ga4Id } : null;
  return null;
}

export function formatAddress(): string {
  const { street, city, region, zip } = SITE.address;
  const place = `${city}, ${region} ${zip}`;
  if (!SITE.showStreetAddress) return place;
  return `${street}, ${place}`;
}

export function mapsUrl(): string {
  const query = SITE.showStreetAddress
    ? formatAddress()
    : `${SITE.address.city}, ${SITE.address.region}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/** Absolute canonical URL. Homepage has no trailing slash. */
export function canonicalUrl(pathname: string): string {
  let path = pathname.split('?')[0].split('#')[0];
  // `build.format: 'file'` reports /about.html during the build. Canonicals stay extension-free.
  path = path.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  if (path === '' || path === '/') return SITE.origin;
  return `${SITE.origin}${path.replace(/\/+$/, '')}`;
}

export function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${SITE.origin}${path.startsWith('/') ? path : `/${path}`}`;
}
