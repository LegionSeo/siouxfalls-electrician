import type { FaqItem } from './home';

export interface TextPart {
  text: string;
  href?: string;
}

/** Visible Brandon copy. {phone} is replaced from the site config at render time. */
export const brandonAnswer =
  'Need an electrician in Brandon, SD? We handle repairs, panel work, Level 2 EV chargers, and outlet work for homes and businesses across Brandon, 24/7. Call {phone} and tell us your street and what is going on at the house or the shop.';

export const brandonWorkIntro =
  'Brandon has newer subdivisions and an older core near Main Street. The call depends on which one you are in.';

export const brandonJobs: TextPart[][] = [
  [
    { text: 'Level 2 EV charger', href: '/services/ev-charger-installation' },
    { text: ' on a dedicated 240-volt circuit, with a load calculation first.' },
  ],
  [
    { text: 'Hot tub circuits', href: '/services/hot-tub-wiring' },
    { text: ', ' },
    { text: 'basement finish wiring', href: '/services/wiring-rewiring' },
    { text: ', ' },
    { text: 'recessed and LED lighting', href: '/services/lighting-installation' },
    { text: ', and ' },
    { text: 'garage subpanels', href: '/services/panel-upgrades' },
    { text: '.' },
  ],
  [
    { text: 'A ' },
    { text: '200-amp service upgrade', href: '/services/panel-upgrades' },
    {
      text: ' for a 60 or 100 amp service covers the meter and the service entrance, and it is coordinated with the utility. A ',
    },
    { text: 'panel replacement or a fuse box replacement', href: '/services/panel-upgrades' },
    { text: ' is a different job.' },
  ],
  [
    { text: 'Ungrounded two-prong outlets', href: '/services/outlet-switch-installation' },
    { text: ', too few outlets, ' },
    { text: 'flickering lights', href: '/services/electrical-repair' },
    { text: ', and ' },
    { text: 'GFCI protection', href: '/services/outlet-switch-installation' },
    { text: ' in kitchens and baths. GFCI means shock protection near water.' },
  ],
  [
    { text: 'Whole-home surge protection', href: '/services/surge-protection' },
    { text: ' reduces surge damage. ' },
    { text: 'Smoke and CO alarm replacement', href: '/services/smoke-co-detectors' },
    { text: ' matters because alarms wear out after about 10 years. A ' },
    { text: 'generator hookup', href: '/services/generator-installation' },
    { text: ' uses a transfer switch or an interlock kit. In winter, ' },
    { text: 'heat tape', href: '/services/outlet-switch-installation' },
    { text: ' goes on a GFCI-protected outlet, and an outdoor ' },
    { text: 'block heater outlet', href: '/services/outlet-switch-installation' },
    { text: ' needs a weatherproof in-use cover.' },
  ],
];

export const brandonWarnings = [
  'Warm outlets or switches',
  'A burning smell',
  'Buzzing',
  'Sparks',
  'Lights that flicker when an appliance starts',
  'Breakers that trip repeatedly',
  'Scorch marks',
  'Half the house losing power',
  'A mild shock from a fixture',
];

export const brandonWarningNote =
  'A breaker that keeps tripping is a symptom. Smoke or fire means get out and call 911. A downed line means stay at least 30 feet away and call 911 or the utility, then call us.';

export const brandonHousing: string[] = [
  'The Census Bureau\'s American Community Survey estimates 4,189 housing units in Brandon city. An estimated 3,291 were built in 1980 or later, and an estimated 898 were built in 1979 or earlier. Most of the estimated homes are the newer ones.',
  'Newer subdivisions are where a Level 2 charger, a hot tub, basement wiring, or room in the panel usually comes up. Homes from 1979 or earlier, including older houses near Main Street, are where a 60 or 100 amp service, a fuse box, ungrounded two-prong outlets, and too few circuits show up more often.',
  'A 200-amp service upgrade is the meter and the service entrance, coordinated with the utility. A panel replacement is a different job.',
];

export const brandonHousingSource =
  'Source: U.S. Census Bureau, American Community Survey 2024 5-year estimates, table B25034, Year Structure Built, Brandon city, South Dakota. These figures are estimates.';

export const brandonHousingSourceHref =
  'https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US4606840&primary_geo_id=16000US4606840';

export const brandonPermits: TextPart[][] = [
  [
    { text: 'Outside the Sioux Falls and Rapid City city limits, a ' },
    { text: 'state electrical inspector', href: 'https://dlr.sd.gov/electrical/inspections.aspx' },
    { text: ' inspects wiring. You need a rough-in inspection and a final inspection.' },
  ],
  [
    { text: 'The ' },
    { text: 'South Dakota Electrical Commission', href: 'https://dlr.sd.gov/electrical/' },
    {
      text: ' says permits received on or after November 12, 2024 are inspected under the 2023 National Electrical Code, and the state ',
    },
    { text: 'lists exceptions', href: 'https://dlr.sd.gov/electrical/tool_box.aspx' },
    { text: ' to that code.' },
  ],
  [
    { text: 'Brandon\'s ' },
    { text: 'Planning and Inspection department', href: 'https://cityofbrandon.org/inspections' },
    {
      text: ' says it makes sure builders have the proper permits and inspects the work when it is done. That city page does not say Brandon issues the electrical wiring permit. Permit-required wiring is done by a licensed electrician, with a state wiring permit and inspection, plus any local permits Brandon requires.',
    },
  ],
];

export const brandonFaqs: FaqItem[] = [
  {
    question: 'Do you serve all of Brandon?',
    paragraphs: [
      'Yes. We take electrical calls for homes and businesses across Brandon, in the newer subdivisions and along the older streets near Main Street. We answer 24/7. Call {phone}, tell us the street, and tell us what the power is doing. We will say whether that job is one we can take.',
    ],
  },
  {
    question: 'Do I need a permit for a panel upgrade in Brandon?',
    paragraphs: [
      'A panel replacement and a 200-amp service upgrade are different jobs. The service upgrade is the meter and the service entrance, coordinated with the utility. Outside Sioux Falls and Rapid City, this wiring needs a state wiring permit and a state inspection, plus any local permit Brandon requires. Permit-required wiring is done by a licensed electrician.',
    ],
  },
  {
    question: 'Can you install an EV charger in a Brandon garage?',
    paragraphs: [
      'Yes. A home charger in a Brandon garage is a Level 2 charger on its own 240-volt circuit. We start with a load calculation to see whether the panel and the service can carry it. A full panel, or a 60 or 100 amp service, is a separate job from the charger. Call {phone} and tell us the garage.',
    ],
  },
  {
    question: 'Who do I call for a power outage in Brandon?',
    paragraphs: [
      'Call your power company first. The City of Brandon says Sioux Valley Energy supplies electricity in Brandon, and Xcel Energy serves only parts of Sunset Addition, Stone Ridge Addition, and Bethany Meadows. If the utility says the problem is on your side of the meter, call us at {phone}.',
    ],
  },
];

export const brandonOutageLink = {
  phrase: 'City of Brandon',
  href: 'https://cityofbrandon.org/?SEC=FA13EDCD-AF41-4BD1-BDF6-941B9D23834D',
};

export const brandonServing: TextPart[] = [
  { text: 'Brandon is east of Sioux Falls. Interstate 90 runs along the north side of town, and South Dakota Highway 11 runs north and south through Brandon. The drive from Sioux Falls is about 10 to 20 minutes, depending on where you start. We also serve ' },
  { text: 'Harrisburg', href: '/locations/harrisburg' },
  { text: ' and ' },
  { text: 'Dell Rapids', href: '/locations/dell-rapids' },
  { text: '. The full list is on the ' },
  { text: 'service area page', href: '/service-area' },
  { text: '.' },
];

export function withPhone(text: string, phone: string) {
  return text.replaceAll('{phone}', phone);
}
