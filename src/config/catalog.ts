import { SITE } from './site';

export function joinNames(names: string[]): string {
  if (names.length <= 1) return names.join('');
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(', ')}, and ${names[names.length - 1]}`;
}

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

const serviceList: Omit<ServiceItem, 'live'>[] = [
  {
    name: 'Electrical repair',
    href: '/services/electrical-repair',
    group: 'Repair',
    icon: 'wrench',
    summary: 'Dead outlets, bad switches, flickering lights, and breakers that trip. The visit stays on the circuit that failed.',
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
    summary: 'New outlets, GFCI protection, dimmers, and 240-volt receptacles. The circuit is checked before a new device is added.',
  },
  {
    name: 'Panel upgrades',
    href: '/services/panel-upgrades',
    group: 'Upgrades',
    icon: 'gauge',
    summary: 'Replace a full, warm, or outdated panel, including an old fuse box. The new panel has to match the service and the loads you plan to add.',
  },
  {
    name: 'Wiring and rewiring',
    href: '/services/wiring-rewiring',
    group: 'Upgrades',
    icon: 'cable',
    summary: 'Old wiring, added circuits, and rewires for one room or a whole house. The plan says which cables stay and which are replaced.',
  },
  {
    name: 'Generator installation',
    href: '/services/generator-installation',
    group: 'Upgrades',
    icon: 'bolt',
    summary: 'Standby generators, transfer switches, and inlets for a portable generator. The generator must not backfeed the utility lines.',
  },
  {
    name: 'EV charger installation',
    href: '/services/ev-charger-installation',
    group: 'Install',
    icon: 'car',
    summary: 'Level 2 home chargers and the circuit that feeds them. The panel is checked for space before the charger is mounted.',
  },
  {
    name: 'Lighting installation',
    href: '/services/lighting-installation',
    group: 'Install',
    icon: 'bulb',
    summary: 'Recessed lights, LED swaps, and outdoor lighting. The layout is marked before a hole is cut.',
  },
  {
    name: 'Ceiling fan installation',
    href: '/services/ceiling-fan-installation',
    group: 'Install',
    icon: 'fan',
    summary: 'Fan-rated boxes, replacements, and fans with a light. A regular light box is replaced when it cannot carry a fan.',
  },
  {
    name: 'Hot tub wiring',
    href: '/services/hot-tub-wiring',
    group: 'Install',
    icon: 'waves',
    summary: 'The dedicated circuit and disconnect a hot tub needs. The size comes from the tub nameplate.',
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
    summary: 'Whole-house surge protection installed at the panel. Plug-in strips do not cover the service.',
  },
  {
    name: 'Smoke and CO detectors',
    href: '/services/smoke-co-detectors',
    group: 'Safety',
    icon: 'bell',
    summary: 'Hardwired smoke alarms and carbon monoxide detectors. Each alarm is dated and tested from its button.',
  },
  {
    name: 'Commercial electrician',
    href: '/services/commercial-electrician',
    group: 'Commercial',
    icon: 'buildings',
    summary: 'Lighting, circuits, and other electrical work for Sioux Falls businesses. The visit is set around the hours the equipment can be off.',
  },
];

export const services: ServiceItem[] = serviceList.map((service) => ({
  ...service,
  live: true,
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
    summary: 'What changes the price of a panel upgrade.',
    featured: false,
    live: false,
  },
  {
    href: '/guides/electrical-permits-sioux-falls',
    title: 'Electrical permits in Sioux Falls',
    summary: 'When the city expects a permit for electrical work in Sioux Falls.',
    featured: false,
    live: false,
  },
];

export function townHref(name: string): string {
  if (name === 'Sioux Falls') return '/';
  return `/locations/${name.toLowerCase().replace(/\s+/g, '-')}`;
}

/**
 * One entry per town page. Crooks, Renner, Baltic, and Garretson
 * are list-only names in site.ts and must not be added here.
 */
const TOWN_ENTRIES: { name: string; live: boolean }[] = [
  { name: 'Sioux Falls', live: true },
  { name: 'Brandon', live: true },
  { name: 'Harrisburg', live: true },
  { name: 'Tea', live: true },
  { name: 'Hartford', live: true },
  { name: 'Dell Rapids', live: true },
  { name: 'Canton', live: true },
  { name: 'Lennox', live: true },
];

for (const name of SITE.listOnlyTowns) {
  if (TOWN_ENTRIES.some((town) => town.name === name)) {
    throw new Error(`${name} is list-only and must not have a town page entry`);
  }
}

export const townPages = TOWN_ENTRIES.map((town) => ({
  name: town.name,
  href: townHref(town.name),
  live: town.live,
}));

export const footerTowns = townPages.filter((town) => town.name !== 'Sioux Falls');

export const featuredGuides = guides.filter((guide) => guide.featured && guide.live);
