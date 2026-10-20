import { SITE } from './site';

export type ServiceGroup = 'Repair' | 'Upgrades' | 'Install' | 'Safety' | 'Commercial';

export interface ServiceItem {
  name: string;
  href: string;
  group: ServiceGroup;
  icon: string;
  summary: string;
  /** False until the page exists. Dead URLs stay out of nav, footer, cards, and schema. */
  live: boolean;
}

export const serviceGroups: ServiceGroup[] = [
  'Repair',
  'Upgrades',
  'Install',
  'Safety',
  'Commercial',
];

const LIVE_SERVICE_HREFS = new Set([
  '/services/electrical-repair',
  '/services/emergency-electrician',
  '/services/ev-charger-installation',
  '/services/panel-upgrades',
  '/services/lighting-installation',
  '/services/wiring-rewiring',
  '/services/commercial-electrician',
]);

const serviceList: Omit<ServiceItem, 'live'>[] = [
  {
    name: 'Electrical repair',
    href: '/services/electrical-repair',
    group: 'Repair',
    icon: 'wrench',
    summary: 'Dead outlets, bad switches, flickering lights, and breakers that trip.',
  },
  {
    name: 'Emergency electrician',
    href: '/services/emergency-electrician',
    group: 'Repair',
    icon: 'flame',
    summary: 'Sparking, a burning smell, or power out in part of the building. Call 911 if there is smoke or fire.',
  },
  {
    name: 'Outlet and switch installation',
    href: '/services/outlet-switch-installation',
    group: 'Repair',
    icon: 'plug',
    summary: 'New outlets, GFCI protection, dimmers, and 240-volt receptacles.',
  },
  {
    name: 'Panel upgrades',
    href: '/services/panel-upgrades',
    group: 'Upgrades',
    icon: 'gauge',
    summary: 'Replace a full, warm, or outdated panel, including an old fuse box.',
  },
  {
    name: 'Wiring and rewiring',
    href: '/services/wiring-rewiring',
    group: 'Upgrades',
    icon: 'cable',
    summary: 'Old wiring, added circuits, and rewires for one room or a whole house.',
  },
  {
    name: 'Generator installation',
    href: '/services/generator-installation',
    group: 'Upgrades',
    icon: 'bolt',
    summary: 'Standby generators, transfer switches, and inlets for a portable generator.',
  },
  {
    name: 'EV charger installation',
    href: '/services/ev-charger-installation',
    group: 'Install',
    icon: 'car',
    summary: 'Level 2 home chargers and the circuit that feeds them.',
  },
  {
    name: 'Lighting installation',
    href: '/services/lighting-installation',
    group: 'Install',
    icon: 'bulb',
    summary: 'Recessed lights, LED swaps, and outdoor lighting.',
  },
  {
    name: 'Ceiling fan installation',
    href: '/services/ceiling-fan-installation',
    group: 'Install',
    icon: 'fan',
    summary: 'Fan-rated boxes, replacements, and fans with a light.',
  },
  {
    name: 'Hot tub wiring',
    href: '/services/hot-tub-wiring',
    group: 'Install',
    icon: 'waves',
    summary: 'The dedicated circuit and disconnect a hot tub needs.',
  },
  {
    name: 'Electrical inspections',
    href: '/services/electrical-inspections',
    group: 'Safety',
    icon: 'search',
    summary: 'A safety check of the panel, wiring, and devices. This is not a city inspection.',
  },
  {
    name: 'Surge protection',
    href: '/services/surge-protection',
    group: 'Safety',
    icon: 'shield',
    summary: 'Whole-house surge protection installed at the panel.',
  },
  {
    name: 'Smoke and CO detectors',
    href: '/services/smoke-co-detectors',
    group: 'Safety',
    icon: 'bell',
    summary: 'Hardwired smoke alarms and carbon monoxide detectors.',
  },
  {
    name: 'Commercial electrician',
    href: '/services/commercial-electrician',
    group: 'Commercial',
    icon: 'buildings',
    summary: 'Lighting, circuits, and other electrical work for Sioux Falls businesses.',
  },
];

export const services: ServiceItem[] = serviceList.map((service) => ({
  ...service,
  live: LIVE_SERVICE_HREFS.has(service.href),
}));

export interface GuideItem {
  href: string;
  title: string;
  summary: string;
  featured: boolean;
  /** False until the guide page exists. */
  live: boolean;
}

export const guides: GuideItem[] = [
  {
    href: '/guides/breaker-keeps-tripping',
    title: 'Why does my breaker keep tripping?',
    summary: 'What overload, a weak breaker, and a short look like, and when to stop resetting it.',
    featured: true,
    live: false,
  },
  {
    href: '/guides/older-home-wiring-sioux-falls',
    title: 'Older home wiring in Sioux Falls',
    summary: 'Fuse boxes, knob-and-tube, and aluminum wiring, explained in plain words.',
    featured: true,
    live: false,
  },
  {
    href: '/guides/home-ev-charging-sioux-falls',
    title: 'Home EV charging in Sioux Falls',
    summary: 'What a Level 2 charger asks of the panel, the garage, and the permit office.',
    featured: true,
    live: false,
  },
  {
    href: '/guides/winter-electrical-tips-sioux-falls',
    title: 'Winter electrical safety tips',
    summary: 'Space heaters, outdoor outlets, and heat tape when the temperature drops.',
    featured: false,
    live: false,
  },
  {
    href: '/guides/storm-power-outage-generator-guide',
    title: 'Storm and outage generator guide',
    summary: 'Why a generator must not backfeed the house, and what a transfer switch does.',
    featured: false,
    live: false,
  },
  {
    href: '/guides/panel-upgrade-cost-factors',
    title: 'Panel upgrade cost factors',
    summary: 'What changes the quote for a panel upgrade. No prices are listed.',
    featured: false,
    live: false,
  },
  {
    href: '/guides/electrical-permits-sioux-falls',
    title: 'Electrical permits in Sioux Falls',
    summary: 'When the city expects a permit, and why this site does not cite code sections.',
    featured: false,
    live: false,
  },
];

export function townHref(name: string): string {
  if (name === 'Sioux Falls') return '/';
  return `/locations/${name.toLowerCase().replace(/\s+/g, '-')}`;
}

const LIVE_TOWNS = new Set(['Sioux Falls', 'Brandon', 'Harrisburg', 'Tea']);

export const townPages = SITE.serviceTowns.map((name) => ({
  name,
  href: townHref(name),
  live: LIVE_TOWNS.has(name),
}));

export const footerTowns = townPages.filter((town) => town.name !== 'Sioux Falls');

export const featuredGuides = guides.filter((guide) => guide.featured && guide.live);
