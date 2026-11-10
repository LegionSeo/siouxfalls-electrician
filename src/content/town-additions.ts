import type { TextPart } from './town-electrical';

const powerFailure: TextPart[] = [
  { text: 'Power failure help', href: '/services/emergency-electrician#power-failure' },
  { text: ': see whether the outage is the utility or the house.' },
];

const calculator: TextPart[] = [
  { text: 'For a rough range first, try our ' },
  { text: 'electrical cost calculator', href: '/tools/electrical-cost-calculator' },
  { text: '.' },
];

const acreage: TextPart[] = [
  { text: 'Acreage on propane? See ' },
  { text: 'standby generator and transfer switch costs', href: '/services/generator-installation#standby-cost' },
  { text: '.' },
];

const generatorSize: TextPart[] = [
  { text: 'What size generator do you need? Try the ' },
  { text: 'generator size calculator', href: '/tools/generator-size-calculator' },
  { text: '.' },
];

/** Extra service-list lines from the Nov 2026 brief. Existing job lines stay as they are. */
export function townAdditions(slug: string): TextPart[][] {
  const lines: TextPart[][] = [powerFailure, calculator];
  if (slug === 'brandon') {
    lines.push(
      [
        { text: 'Older Brandon homes on fuses or 100 amp service: see ' },
        { text: 'panel upgrade costs', href: '/services/panel-upgrades#upgrade-200-amp' },
        { text: '.' },
      ],
      [
        { text: 'See ' },
        { text: 'hot tub electrical installation cost', href: '/services/hot-tub-wiring#hot-tub-cost' },
        { text: '.' },
      ],
    );
  }
  if (slug === 'harrisburg' || slug === 'tea') {
    lines.push([
      { text: 'Adding an EV? See ' },
      { text: 'EV charger installation cost', href: '/services/ev-charger-installation#ev-cost' },
      { text: '.' },
    ]);
  }
  if (slug === 'hartford' || slug === 'canton' || slug === 'dell-rapids') {
    lines.push(acreage, generatorSize);
  }
  return lines;
}
