import { faqAnchor } from '../lib/faq-anchor';
import { PRICE_LABEL } from './calculators';

export { PRICE_LABEL };

export interface BriefTable {
  caption: string;
  columns: string[];
  rows: string[][];
  source?: string;
  showLabel?: boolean;
}

export interface BriefBlock {
  heading?: string;
  paragraphs: string[];
  list?: string[];
  table?: BriefTable;
  showLabel?: boolean;
  source?: string;
}

export interface BriefLink {
  href: string;
  label: string;
}

export interface BriefSection {
  id: string;
  heading: string;
  paragraphs: string[];
  table?: BriefTable;
  blocks: BriefBlock[];
  links: BriefLink[];
}

export interface PageBrief {
  placement: 'after-signs' | 'after-cost';
  showPriceNote: boolean;
  jumps?: BriefLink[];
  sections: BriefSection[];
}

const panelInspect = `#${faqAnchor('Who inspects a panel change?')}`;
const generatorUtility = `#${faqAnchor('Do standby generators need the utility involved?')}`;
const generatorInterlock = `#${faqAnchor('Interlock kit or transfer switch: which do I need, and does it need a permit?')}`;
const generatorDryer = `#${faqAnchor('Can I plug a generator into a dryer outlet?')}`;
const plasterFaq = `#${faqAnchor('Can new wire be fished without wrecking the plaster?')}`;
const stagedFaq = `#${faqAnchor('Do you rewire one room without doing the whole house?')}`;
const clothFaq = `#${faqAnchor('Is cloth wiring the same as knob-and-tube, and does it need to be replaced?')}`;
const chargerOutside = `#${faqAnchor('Can the charger be outside?')}`;

const panelSource = 'Source: Angi, electrical panel upgrade cost, updated Oct 29, 2026';
const fpeSource = 'Source: Angi, Federal Pacific breakers, updated Jul 9, 2026';
const panelReplaceSource = 'Source: Angi, cost to replace a circuit breaker box, updated Oct 22, 2026';
const rewireSource = 'Source: Angi, cost to rewire a house, updated Oct 13, 2026';
const knobSource = 'Source: Angi, knob and tube wiring replacement cost, updated Oct 29, 2026';
const generatorSource = 'Source: Angi, whole house generator cost, updated Sep 1, 2026';
const transferSource = 'Source: Angi, generator transfer switch cost, updated Oct 16, 2026';
const evSource = 'Source: Angi, EV charging installation costs, updated Sep 23, 2026';
const tubSource = 'Source: Angi, hot tub wiring cost, updated Oct 13, 2026';

const briefs: Record<string, PageBrief> = {
  'panel-upgrades': {
    placement: 'after-cost',
    showPriceNote: true,
    jumps: [
      { href: '#upgrade-200-amp', label: '200 amp upgrade cost' },
      { href: '#federal-pacific', label: 'Federal Pacific panels' },
      { href: '#fuse-box', label: 'Fuse box replacement' },
    ],
    sections: [
      {
        id: 'upgrade-200-amp',
        heading: 'How much does a 100 amp to 200 amp upgrade cost?',
        paragraphs: [
          'Published national figures put a 200 amp panel with installation at about $1,300 to $2,000, and the average electrical panel upgrade near $1,600. Going from 100 to 200 amps usually means more than the panel: the meter base and the service wires coming into the house have to be rated for 200 amps too, and that work adds to the total.',
        ],
        table: {
          caption: 'Typical published ranges for a 200 amp panel upgrade',
          columns: ['Scope', 'Typical published range'],
          rows: [
            ['200 amp panel, installed', '$1,300 to $2,000'],
            ['Average panel upgrade', 'about $1,600'],
            ['Meter box install or replacement, if needed', '$200 to $800'],
            ['Permit (varies by city)', '$50 to $300'],
          ],
          showLabel: true,
          source: panelSource,
        },
        blocks: [
          {
            heading: 'Why people move to 200 amps',
            paragraphs: [
              'An EV charger, a heat pump, a hot tub, a shop, or an addition can push a 100 amp service past what it can safely carry. A load review decides whether you need a bigger service or just a new panel at the same size.',
            ],
          },
          {
            heading: 'The utility side',
            paragraphs: [
              'When the meter or service drop has to change, the power company has to disconnect and reconnect. We line that up before the swap.',
            ],
          },
          {
            heading: 'Permit and inspection',
            paragraphs: [
              `The existing question [Who inspects a panel change?](${panelInspect}) already covers this.`,
            ],
          },
        ],
        links: [
          { href: '/tools/electrical-cost-calculator?job=panel-200', label: 'Get a rough range' },
          { href: '/services/circuit-breaker-panel-repair', label: 'Circuit breaker and panel repair' },
        ],
      },
      {
        id: 'federal-pacific',
        heading: 'Federal Pacific panel replacement cost',
        paragraphs: [
          'Federal Pacific Electric (FPE) panels with Stab-Lok breakers were installed in many homes built from about 1950 to 1990. Testing has found that a share of Stab-Lok breakers can fail to trip, and some insurers and home inspectors flag these panels. Published national figures put replacing a breaker panel like an FPE at about $550 to $2,100, with an average near $1,300.',
        ],
        blocks: [
          { paragraphs: [], showLabel: true, source: fpeSource },
          {
            heading: 'How to tell if you have one',
            paragraphs: [
              'Look for "Federal Pacific" or "FPE" on the panel cover and "Stab-Lok" on the label inside the door. The breakers often have a red strip on the handles. Send us a photo with the cover closed.',
            ],
          },
          {
            heading: 'Other older panels',
            paragraphs: [
              'If an inspector, buyer, or insurer asks about any older panel brand, send us a photo of the label. Published national figures put general panel replacement at about $500 to $2,200, and up to $4,500 for complex jobs.',
            ],
            showLabel: true,
            source: panelReplaceSource,
          },
        ],
        links: [{ href: '/tools/electrical-cost-calculator?job=fpe', label: 'Get a rough range for an old panel' }],
      },
      {
        id: 'fuse-box',
        heading: 'Fuse box replacement cost',
        paragraphs: [
          'Published national figures put replacing a fuse box with a breaker panel at about $1,500 to $2,000. If the home is also moving to a larger service, the 200 amp figures above apply.',
        ],
        blocks: [
          { paragraphs: [], showLabel: true, source: panelSource },
          {
            heading: 'Why fuse boxes come up at sale time',
            paragraphs: [
              'Home inspectors and insurers often ask about fuse panels, and a buyer may ask for a credit or a replacement. A replacement panel also gives you room to add circuits.',
            ],
          },
          {
            heading: 'Older wiring behind the fuses',
            paragraphs: [
              'Homes still on fuses often have older wiring too. We note what we see so you can plan, and the next step may be [wiring and rewiring](/services/wiring-rewiring).',
            ],
          },
        ],
        links: [
          { href: '/tools/electrical-cost-calculator?job=fuse-box', label: 'Get a rough range for a fuse box' },
          { href: '/services/surge-protection', label: 'Surge protection' },
        ],
      },
    ],
  },
  'generator-installation': {
    placement: 'after-cost',
    showPriceNote: true,
    sections: [
      {
        id: 'standby-cost',
        heading: 'How much does a Generac whole house generator cost installed?',
        paragraphs: [
          'Published national figures put whole house generator installation at about $1,500 to $8,800, with an average near $5,200. The generator itself is priced mostly by size, and Generac units start around $6,000. Installation, the pad, the transfer switch, the gas or propane connection, and the permit add to the unit price.',
        ],
        table: {
          caption: 'Typical published generator cost by size',
          columns: ['Generator size', 'Typical published generator cost', 'What it usually runs'],
          rows: [
            ['14 to 18 kW', '$4,000 to $5,500', 'essentials plus central air and a water heater'],
            ['20 to 24 kW', '$5,000 to $6,500', 'most of the house, including larger appliances'],
            ['26 to 32 kW', '$6,500 to $15,000', 'whole house with larger HVAC systems'],
          ],
          showLabel: true,
          source: generatorSource,
        },
        blocks: [
          {
            heading: 'Natural gas or propane',
            paragraphs: [
              'In town, most standby units run on natural gas. On acreages around Hartford, Canton, and Dell Rapids without a gas line, propane is the usual fuel. Fuel choice changes the connection work.',
            ],
          },
          {
            heading: 'Why winter matters here',
            paragraphs: [
              'Blizzards and ice storms are when backup power matters most. Plan the install before the ground freezes so the pad and gas line go in easily.',
            ],
          },
          {
            heading: 'Permit and utility',
            paragraphs: [
              `The question [Do standby generators need the utility involved?](${generatorUtility}) stays and covers this.`,
            ],
          },
        ],
        links: [
          { href: '/tools/generator-size-calculator', label: 'What size do I need?' },
          { href: '/tools/electrical-cost-calculator?job=generator', label: 'Rough cost' },
        ],
      },
      {
        id: 'transfer-switch',
        heading: 'Generator transfer switch installation',
        paragraphs: [
          'A transfer switch lets a generator power your home without backfeeding the utility lines. Published national figures put transfer switch installation at about $1,200 to $1,600, with an average near $1,450. Manual switches run about $400 to $1,300 installed and automatic switches about $600 to $2,500.',
        ],
        table: {
          caption: 'Typical published transfer switch prices',
          columns: ['Type', 'Typical published installed range', 'Best for'],
          rows: [
            ['Manual transfer switch', '$400 to $1,300', 'portable generators, you flip it on'],
            ['Automatic transfer switch', '$600 to $2,500', 'standby generators, switches on its own'],
            ['Permit (varies by city)', '$50 to $350', ''],
          ],
          showLabel: true,
          source: transferSource,
        },
        blocks: [
          {
            heading: 'Transfer switch or interlock kit?',
            paragraphs: [
              `See [Interlock kit or transfer switch: which do I need, and does it need a permit?](${generatorInterlock}) No interlock price is published here.`,
            ],
          },
          {
            heading: 'Never use a dryer outlet',
            paragraphs: [
              `See [Can I plug a generator into a dryer outlet?](${generatorDryer})`,
            ],
          },
        ],
        links: [
          { href: '/tools/electrical-cost-calculator?job=transfer-switch', label: 'Rough cost for a transfer switch' },
          { href: '/services/emergency-electrician#power-failure', label: 'Power failure help' },
          { href: '/services/surge-protection', label: 'Surge protection' },
        ],
      },
    ],
  },
  'emergency-electrician': {
    placement: 'after-signs',
    showPriceNote: false,
    sections: [
      {
        id: 'power-failure',
        heading: 'Power failure: utility or electrician?',
        paragraphs: [
          "When the power goes out, the first question is whether the problem is on the utility's side or inside your home. Here is the quick way to tell.",
        ],
        table: {
          caption: 'Who to call first when the power fails',
          columns: ['What you see', 'Most likely', 'Who to call first'],
          rows: [
            ['Your whole street is dark', 'Utility outage', 'Your power company'],
            ['Half the house is out, no breaker tripped', 'Lost leg of power or failing main or service connection', 'Power company first if neighbors are affected, then us'],
            ['One room or a few outlets are out', 'Tripped breaker, GFCI, or a loose connection', 'Reset once; if it trips again, call us'],
            ['Lights dim or flicker when big appliances start', 'Loose neutral or service connection', 'Call us, this can damage electronics'],
            ['Burning smell, heat, buzzing at the panel', 'Failing breaker or connection', 'Call us now; call 911 if you see smoke'],
            ['Storm tore the service mast or wires off the house', 'Storm damage at the service', 'Power company to make it safe, then an electrician for your side'],
          ],
        },
        blocks: [
          {
            heading: 'What to do while you wait',
            paragraphs: [],
            list: [
              'Keep the panel cover closed if it is hot, buzzing, or smells burnt.',
              'Unplug sensitive electronics if lights are flickering or dim.',
              'Do not run a portable generator through a dryer outlet or any plug. See [generator installation](/services/generator-installation).',
              'If you rely on a sump pump or medical equipment, tell us when you call.',
            ],
          },
          {
            heading: 'We answer 24/7',
            paragraphs: [
              'Calls are answered any time, day or night, any day of the week. We get to you quickly, and we do not promise a clock time.',
            ],
          },
        ],
        links: [
          { href: '/services/circuit-breaker-panel-repair', label: 'Circuit breaker and panel repair' },
          { href: '/services/generator-installation#transfer-switch', label: 'Generator transfer switch' },
          { href: '/services/panel-upgrades', label: 'Panel upgrades' },
          { href: '/services/surge-protection', label: 'Surge protection' },
        ],
      },
    ],
  },
  'wiring-rewiring': {
    placement: 'after-cost',
    showPriceNote: true,
    sections: [
      {
        id: 'rewire-cost',
        heading: 'How much does it cost to rewire an old house?',
        paragraphs: [
          'Published national figures for a whole house rewire run about $2 to $4 per square foot, which is about $4,000 to $8,000 for a 2,000 square foot home. Older homes with plaster and lath walls, no open attic or basement, or knob and tube wiring land much higher, because more walls have to be opened and patched.',
        ],
        table: {
          caption: 'Typical published rewire ranges by home size',
          columns: ['Home size', 'Typical published rewire range (general)'],
          rows: [
            ['1,000 sq ft', '$2,000 to $4,000'],
            ['1,500 sq ft', '$3,000 to $6,000'],
            ['2,000 sq ft', '$4,000 to $8,000'],
            ['2,500 sq ft', '$5,000 to $10,000'],
            ['3,000 sq ft', '$6,000 to $12,000'],
          ],
          showLabel: true,
          source: rewireSource,
        },
        blocks: [
          {
            heading: 'Plaster and lath',
            paragraphs: [
              `Fishing new cable through plaster walls is slower than drywall, and openings have to be patched. See [Can new wire be fished without wrecking the plaster?](${plasterFaq})`,
            ],
          },
          {
            heading: 'Staged rewires while you live there',
            paragraphs: [
              `A rewire can be done a few circuits or rooms at a time so most of the house keeps power each night. See [Do you rewire one room without doing the whole house?](${stagedFaq})`,
            ],
          },
          {
            heading: 'The panel often comes next',
            paragraphs: [
              'An old 60 or 100 amp service may not carry a modern home. See [panel upgrade costs](/services/panel-upgrades#upgrade-200-amp).',
            ],
          },
        ],
        links: [{ href: '/tools/electrical-cost-calculator?job=rewire', label: 'Get a rough rewire range' }],
      },
      {
        id: 'knob-and-tube',
        heading: 'Knob and tube wiring removal cost',
        paragraphs: [
          'Knob and tube wiring was common in homes built from the 1880s to the 1940s. It has no ground wire and its insulation turns brittle with age. Published national figures put replacing it at about $12,000 to $36,600, with an average near $24,300, or about $10 to $20 per square foot, because the work is slower and more walls are opened.',
        ],
        table: {
          caption: 'Typical published knob and tube replacement ranges',
          columns: ['Home size', 'Typical published knob and tube replacement range'],
          rows: [
            ['1,000 sq ft', '$10,000 to $20,000'],
            ['1,300 sq ft', '$13,000 to $26,000'],
            ['1,600 sq ft', '$16,000 to $32,000'],
            ['2,000 sq ft', '$20,000 to $40,000'],
          ],
          showLabel: true,
          source: knobSource,
        },
        blocks: [
          {
            heading: 'Partial or full removal',
            paragraphs: [
              'Electricians usually disconnect and abandon old knob and tube in the walls rather than pulling every piece out, which limits wall damage. Full removal costs more.',
            ],
          },
          {
            heading: 'Insurance and home sales',
            paragraphs: [
              'Insurers and home inspectors often ask about knob and tube. A written scope of what was replaced helps with both.',
            ],
          },
          {
            heading: 'Cloth wiring is different',
            paragraphs: [
              `See [Is cloth wiring the same as knob-and-tube, and does it need to be replaced?](${clothFaq})`,
            ],
          },
        ],
        links: [
          { href: '/tools/electrical-cost-calculator?job=knob-tube', label: 'Get a rough knob and tube range' },
          { href: '/services/electrical-inspections', label: 'Electrical inspections' },
        ],
      },
    ],
  },
  'ev-charger-installation': {
    placement: 'after-cost',
    showPriceNote: true,
    sections: [
      {
        id: 'ev-cost',
        heading: 'How much does EV charger installation cost?',
        paragraphs: [
          'Published national figures put Level 2 home charger installation at about $555 to $1,380, with an average near $970. With the charger itself included, Level 2 setups run about $700 to $2,000. If the panel does not have room or capacity, a panel upgrade adds about $800 to $2,000.',
        ],
        table: {
          caption: 'Typical published Level 2 EV charger ranges',
          columns: ['Scope', 'Typical published range'],
          rows: [
            ['Installation only (you have the charger)', '$555 to $1,380 (average about $970)'],
            ['Level 2 charger plus installation', '$700 to $2,000'],
            ['Panel upgrade, if needed', '$800 to $2,000'],
            ['Permit (varies by city)', '$100 to $200'],
          ],
          showLabel: true,
          source: evSource,
        },
        blocks: [
          {
            heading: 'Older homes vs new builds',
            paragraphs: [
              'Older Sioux Falls homes on 100 amp service may need a [panel upgrade](/services/panel-upgrades#upgrade-200-amp) first. Newer homes in Harrisburg and Tea often have more panel space, but the load still has to be checked.',
            ],
          },
          {
            heading: 'Cold garages',
            paragraphs: [
              `A charger in an attached garage stays out of snow and ice. Outdoor units need a weather rated charger and mount. See [Can the charger be outside?](${chargerOutside})`,
            ],
          },
        ],
        links: [{ href: '/tools/electrical-cost-calculator?job=ev-charger', label: 'Get a rough EV charger range' }],
      },
    ],
  },
  'hot-tub-wiring': {
    placement: 'after-cost',
    showPriceNote: true,
    sections: [
      {
        id: 'hot-tub-cost',
        heading: 'How much does hot tub electrical installation cost?',
        paragraphs: [
          'Published national figures put hot tub wiring at about $1,900 to $4,200, with an average near $2,300. Distance from the panel, trenching, and whether the panel has room for a large 240 volt breaker set the price. If it does not, a subpanel adds about $400 to $1,800.',
        ],
        blocks: [
          { paragraphs: [], showLabel: true, source: tubSource },
          {
            heading: 'What the job includes',
            paragraphs: [
              "A dedicated circuit sized from the tub's nameplate, a GFCI protected disconnect within sight of the tub, and wire run in conduit to the pad.",
            ],
          },
          {
            heading: 'Trench before the ground freezes',
            paragraphs: [
              'If the wire runs underground to a patio or deck, schedule the trench before the frost sets in.',
            ],
          },
          {
            heading: 'Brandon and Sioux Falls patios',
            paragraphs: [
              'Most tubs go on a back patio or deck within a short run of the panel. Longer runs cost more.',
            ],
          },
        ],
        links: [
          { href: '/services/panel-upgrades#upgrade-200-amp', label: 'Panel upgrade costs' },
          { href: '/tools/electrical-cost-calculator?job=hot-tub', label: 'Get a rough hot tub range' },
        ],
      },
    ],
  },
};

export function briefFor(slug: string): PageBrief | undefined {
  return briefs[slug];
}
