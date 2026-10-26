import type { FaqItem } from './home';

export interface TextPart {
  text: string;
  href?: string;
}

export interface TownFaq {
  question: string;
  paragraphs: TextPart[][];
}

export interface TownBlock {
  slug: string;
  name: string;
  answer: string;
  workIntro: string;
  jobs: TextPart[][];
  warningLead: string;
  warnings: string[];
  warningNote: string;
  housing: string[];
  housingSource: string;
  housingSourceHref: string;
  permits: TextPart[][];
  faqs: TownFaq[];
  serving: TextPart[];
  mapNote: string;
}

const INSPECT = 'https://dlr.sd.gov/electrical/inspections.aspx';
const COMMISSION = 'https://dlr.sd.gov/electrical/';
const CODE = 'https://dlr.sd.gov/electrical/tool_box.aspx';

function census(geo: string) {
  return `https://censusreporter.org/data/table/?table=B25034&geo_ids=${geo}&primary_geo_id=${geo}`;
}

const ev = '/services/ev-charger-installation';
const tub = '/services/hot-tub-wiring';
const wire = '/services/wiring-rewiring';
const light = '/services/lighting-installation';
const panel = '/services/panel-upgrades';
const breaker = '/services/circuit-breaker-panel-repair';
const outlet = '/services/outlet-switch-installation';
const repair = '/services/electrical-repair';
const surge = '/services/surge-protection';
const alarm = '/services/smoke-co-detectors';
const gen = '/services/generator-installation';

export const townBlocks: TownBlock[] = [
  {
    slug: 'brandon',
    name: 'Brandon',
    answer:
      'Need an electrician in Brandon, SD? We connect you with a local licensed electrician for repairs, panel work, Level 2 EV chargers, and outlet work for homes and businesses across Brandon. Calls are answered 24/7. Call {phone} and tell us your street and what is going on at the house or the shop.',
    workIntro:
      'Brandon has newer subdivisions and an older core near Main Street. The call depends on which one you are in.',
    jobs: [
      [
        { text: 'Level 2 EV charger', href: ev },
        { text: ' on a dedicated 240-volt circuit, with a load calculation first.' },
      ],
      [
        { text: 'Hot tub circuits', href: tub },
        { text: ', ' },
        { text: 'basement finish wiring', href: wire },
        { text: ', ' },
        { text: 'recessed and LED lighting', href: light },
        { text: ', and ' },
        { text: 'garage subpanels', href: panel },
        { text: '.' },
      ],
      [
        { text: 'A ' },
        { text: '200-amp service upgrade', href: panel },
        { text: ' for a 60 or 100 amp service covers the meter and the service entrance, and it is coordinated with the utility. A ' },
        { text: 'panel replacement or a fuse box replacement', href: panel },
        { text: ' for more room is a different job. A breaker that keeps tripping, or a panel that is scorched or rusted, is ' },
        { text: 'circuit breaker and panel repair', href: breaker },
        { text: '.' },
      ],
      [
        { text: 'Ungrounded two-prong outlets', href: outlet },
        { text: ', too few outlets, ' },
        { text: 'flickering lights', href: repair },
        { text: ', and ' },
        { text: 'GFCI protection', href: outlet },
        { text: ' in kitchens and baths. GFCI means shock protection near water.' },
      ],
      [
        { text: 'Whole-home surge protection', href: surge },
        { text: ' reduces surge damage. ' },
        { text: 'Smoke and CO alarm replacement', href: alarm },
        { text: ' matters because alarms wear out after about 10 years. A ' },
        { text: 'generator hookup', href: gen },
        { text: ' uses a transfer switch or an interlock kit. In winter, ' },
        { text: 'heat tape', href: outlet },
        { text: ' goes on a GFCI-protected outlet, and an outdoor ' },
        { text: 'block heater outlet', href: outlet },
        { text: ' needs a weatherproof in-use cover.' },
      ],
    ],
    warningLead: 'Call us if you notice any of these.',
    warnings: [
      'Warm outlets or switches',
      'A burning smell',
      'Buzzing',
      'Sparks',
      'Lights that flicker when an appliance starts',
      'Breakers that trip repeatedly',
      'Scorch marks',
      'Half the house losing power',
      'A mild shock from a fixture',
    ],
    warningNote:
      'A breaker that keeps tripping is a symptom. Smoke or fire means get out and call 911. A downed line means stay at least 30 feet away and call 911 or the utility, then call us.',
    housing: [
      "The Census Bureau's American Community Survey estimates 4,189 housing units in Brandon city. An estimated 3,291 were built in 1980 or later, and an estimated 898 were built in 1979 or earlier. Most of the estimated homes are the newer ones.",
      'Newer subdivisions are where a Level 2 charger, a hot tub, basement wiring, or room in the panel usually comes up. Homes from 1979 or earlier, including older houses near Main Street, are where a 60 or 100 amp service, a fuse box, ungrounded two-prong outlets, and too few circuits show up more often.',
      'A 200-amp service upgrade is the meter and the service entrance, coordinated with the utility. A panel replacement is a different job.',
    ],
    housingSource:
      'Source: U.S. Census Bureau, American Community Survey 2024 5-year estimates, table B25034, Year Structure Built, Brandon city, South Dakota. These figures are estimates.',
    housingSourceHref: census('16000US4606840'),
    permits: [
      [
        { text: 'Outside the Sioux Falls and Rapid City city limits, a ' },
        { text: 'state electrical inspector', href: INSPECT },
        { text: ' inspects wiring. You need a rough-in inspection and a final inspection.' },
      ],
      [
        { text: 'The ' },
        { text: 'South Dakota Electrical Commission', href: COMMISSION },
        { text: ' says permits received on or after November 12, 2024 are inspected under the 2023 National Electrical Code, and the state ' },
        { text: 'lists exceptions', href: CODE },
        { text: ' to that code.' },
      ],
      [
        { text: "Brandon's " },
        { text: 'Planning and Inspection department', href: 'https://cityofbrandon.org/inspections' },
        { text: ' says it makes sure builders have the proper permits and inspects the work when it is done. That city page does not say Brandon issues the electrical wiring permit. Permit-required wiring is done by a licensed electrician, with a state wiring permit and inspection, plus any local permits Brandon requires.' },
      ],
    ],
    faqs: [
      {
        question: 'Do you serve all of Brandon?',
        paragraphs: [[
          { text: 'Yes. We connect you with a local licensed electrician for homes and businesses across Brandon, in the newer subdivisions and along the older streets near Main Street. We answer 24/7. Call {phone}, tell us the street, and tell us what the power is doing.' },
        ]],
      },
      {
        question: 'Do I need a permit for a panel upgrade in Brandon?',
        paragraphs: [[
          { text: 'A panel replacement and a 200-amp service upgrade are different jobs. The service upgrade is the meter and the service entrance, coordinated with the utility. Outside Sioux Falls and Rapid City, this wiring needs a state wiring permit and a state inspection, plus any local permit Brandon requires. Permit-required wiring is done by a licensed electrician.' },
        ]],
      },
      {
        question: 'Can you install an EV charger in a Brandon garage?',
        paragraphs: [[
          { text: 'Yes. We connect you with a local licensed electrician for a Level 2 charger on its own 240-volt circuit in a Brandon garage. The electrician starts with a load calculation to see whether the panel and the service can carry it. A full panel, or a 60 or 100 amp service, is a separate job from the charger. Call {phone} and tell us the garage.' },
        ]],
      },
      {
        question: 'Who do I call for a power outage in Brandon?',
        paragraphs: [[
          { text: 'Call your power company first. The ' },
          { text: 'City of Brandon', href: 'https://cityofbrandon.org/?SEC=FA13EDCD-AF41-4BD1-BDF6-941B9D23834D' },
          { text: ' says Sioux Valley Energy supplies electricity in Brandon, and Xcel Energy serves only parts of Sunset Addition, Stone Ridge Addition, and Bethany Meadows. If the utility says the problem is on your side of the meter, call us at {phone}.' },
        ]],
      },
    ],
    serving: [
      { text: 'Brandon is east of Sioux Falls. Interstate 90 runs along the north side of town, and South Dakota Highway 11 runs north and south through Brandon. The drive from Sioux Falls is about 10 to 20 minutes, depending on where you start. We also connect callers in ' },
      { text: 'Harrisburg', href: '/locations/harrisburg' },
      { text: ' and ' },
      { text: 'Dell Rapids', href: '/locations/dell-rapids' },
      { text: ', and the ' },
      { text: 'Sioux Falls Electricians', href: '/' },
      { text: ' page covers the city itself. The full list is on the ' },
      { text: 'service area page', href: '/service-area' },
      { text: '.' },
    ],
    mapNote: 'This pin marks the town, not your house. When you call, give us the address where you need an electrician.',
  },
  {
    slug: 'harrisburg',
    name: 'Harrisburg',
    answer:
      'Need an electrician in Harrisburg, SD? Most requests here are newer houses: panel room, Level 2 EV chargers, lighting, and a repair when one circuit quits. We answer 24/7 and connect you with a local licensed electrician. Call {phone} and tell us the addition and what stopped working.',
    workIntro:
      'Harrisburg grew fast after 2000. A smaller set of older houses still sits near the original town. Those two groups are different jobs.',
    jobs: [
      [
        { text: 'Level 2 EV charger', href: ev },
        { text: ' in a garage, on its own 240-volt circuit, after a load calculation.' },
      ],
      [
        { text: 'Basement finish wiring', href: wire },
        { text: ' and ' },
        { text: 'recessed or LED lighting', href: light },
        { text: ' in a house built in the last couple of decades.' },
      ],
      [
        { text: 'A garage subpanel', href: panel },
        { text: ' when the main panel has no open spaces left for the next circuit.' },
      ],
      [
        { text: 'Whole-home surge protection', href: surge },
        { text: ' that reduces surge damage, plus ' },
        { text: 'smoke and CO alarm replacement', href: alarm },
        { text: ' when the alarms are about 10 years old.' },
      ],
      [
        { text: 'On the older streets, a ' },
        { text: 'panel or fuse box replacement', href: panel },
        { text: ' is separate from a 200-amp service upgrade. The upgrade is the meter and the service entrance, coordinated with the utility. ' },
        { text: 'GFCI protection', href: outlet },
        { text: ' in a kitchen or bath is shock protection near water.' },
      ],
    ],
    warningLead: 'Phone us when you notice one of these.',
    warnings: [
      'A switch or outlet that feels warm',
      'A burning smell',
      'Buzzing from a device or the panel',
      'Sparks',
      'Lights that dip when a motor starts',
      'A breaker that trips again and again',
      'Scorch marks',
      'Power gone in only part of the house',
      'A tingle from a fixture',
    ],
    warningNote:
      'Repeated trips are a symptom, not a breaker to swap and forget. If you see smoke or fire, get out and call 911. Stay at least 30 feet from a downed line, call 911 or the utility, then call us.',
    housing: [
      'The American Community Survey estimates 3,130 housing units in Harrisburg city. An estimated 2,809 were built in 1980 or later, and an estimated 321 were built in 1979 or earlier. About 2,520 of the newer estimate were built in 2000 or later.',
      'That mix is why a new subdivision usually asks about a charger, a finished basement, or whether the panel has room. The smaller older group is where a 60 or 100 amp service, a fuse box, or ungrounded two-prong outlets still show up.',
      'Replacing the panel does not, by itself, change the meter and the service entrance. That 200-amp service upgrade is coordinated with the utility.',
    ],
    housingSource:
      'Census Bureau estimates for Harrisburg city, South Dakota: American Community Survey 2024 5-year, table B25034, Year Structure Built.',
    housingSourceHref: census('16000US4627260'),
    permits: [
      [
        { text: 'Harrisburg is not inside Sioux Falls, so wiring is inspected by a ' },
        { text: 'state electrical inspector', href: INSPECT },
        { text: '. The visit is a rough-in, then a final. Nothing is finished until the final passes.' },
      ],
      [
        { text: 'For permits the ' },
        { text: 'Electrical Commission', href: COMMISSION },
        { text: ' received on or after November 12, 2024, the inspection uses the 2023 National Electrical Code. South Dakota ' },
        { text: 'lists exceptions', href: CODE },
        { text: ' to that code.' },
      ],
      [
        { text: 'City ' },
        { text: 'Building Services', href: 'https://www.harrisburgsd.gov/207/Building-Services' },
        { text: ' reviews, issues, and inspects building permits. A city ' },
        { text: 'basement permit note', href: 'https://harrisburgsd.gov/download_file/7269/223/' },
        { text: ' says electrical wiring that is installed or changed also needs a state permit. That building page is not the wiring permit. Permit-required wiring is done by a licensed electrician, with a state wiring permit and inspection, plus any local permits Harrisburg requires.' },
      ],
    ],
    faqs: [
      {
        question: 'Do you cover the new Harrisburg additions and the older blocks?',
        paragraphs: [[
          { text: 'Yes. We connect you with a local licensed electrician for both the subdivisions built since 2000 and the smaller older part of Harrisburg. We answer 24/7. Call {phone}, name the addition or the street, and say whether you need a new circuit or a repair.' },
        ]],
      },
      {
        question: 'Does Harrisburg issue the wiring permit for a new circuit?',
        paragraphs: [[
          { text: 'The city building permit is not the wiring permit. Outside Sioux Falls, a state wiring permit and a state inspection cover the electrical work, along with any local permit Harrisburg requires. Permit-required wiring is done by a licensed electrician. A panel swap and a 200-amp service upgrade are still two different jobs.' },
        ]],
      },
      {
        question: 'Can a Harrisburg garage get a Level 2 charger?',
        paragraphs: [[
          { text: 'Yes. We connect you with a local licensed electrician for a Level 2 charger on a dedicated 240-volt circuit. The electrician runs a load calculation before mounting it, so the panel and the service can carry the car. If the panel is full, a subpanel is a separate conversation. Call {phone} and describe the garage and the panel if you know it.' },
        ]],
      },
      {
        question: 'Who do I call when the power fails in Harrisburg?',
        paragraphs: [[
          { text: 'Start with the power company. The ' },
          { text: 'City of Harrisburg', href: 'https://www.harrisburgsd.gov/239/Moving-to-Harrisburg' },
          { text: ' says Xcel Energy serves most areas, and Southeastern Electric serves the area on the city map. If they tell you the trouble is on your side of the meter, call us at {phone}.' },
        ]],
      },
    ],
    serving: [
      { text: 'Harrisburg is south of Sioux Falls. Interstate 29 meets 273rd Street on the way, and South Dakota Highway 115 also runs down from the city. The drive is about 15 to 25 minutes, depending on where you start. We also connect callers in ' },
      { text: 'Tea', href: '/locations/tea' },
      { text: ' and ' },
      { text: 'Canton', href: '/locations/canton' },
      { text: ', and the ' },
      { text: 'Sioux Falls Electricians', href: '/' },
      { text: ' page covers the city itself. See the ' },
      { text: 'service area page', href: '/service-area' },
      { text: ' for the rest.' },
    ],
    mapNote: 'The marker is Harrisburg, not your address. Tell us the street when you call.',
  },
  {
    slug: 'tea',
    name: 'Tea',
    answer:
      'Looking for an electrician in Tea, SD? We connect you with a local licensed electrician for newer houses and the smaller number of older ones: chargers, basements, lighting, and repairs. Calls are answered 24/7. Call {phone} with the street and a short description of the problem.',
    workIntro:
      'Tea added a lot of houses from the 1990s through the last few years. The older streets are a smaller share of the calls.',
    jobs: [
      [
        { text: 'A ' },
        { text: 'Level 2 charger', href: ev },
        { text: ' on a dedicated 240-volt circuit. The load calculation comes before the charger goes on the wall.' },
      ],
      [
        { text: 'Hot tub circuits', href: tub },
        { text: ' and ' },
        { text: 'garage subpanels', href: panel },
        { text: ' when a newer house has used up the spaces in the main panel.' },
      ],
      [
        { text: 'Recessed and LED lighting', href: light },
        { text: ', plus ' },
        { text: 'basement finish wiring', href: wire },
        { text: ' in houses that were built with unfinished lower levels.' },
      ],
      [
        { text: 'Winter outlets: ' },
        { text: 'heat tape', href: outlet },
        { text: ' on a GFCI-protected outlet, and a block heater receptacle with a weatherproof in-use cover.' },
      ],
      [
        { text: 'A ' },
        { text: 'generator hookup', href: gen },
        { text: ' through a transfer switch or an interlock kit, and ' },
        { text: 'whole-home surge protection', href: surge },
        { text: ' that reduces surge damage.' },
      ],
    ],
    warningLead: 'These are reasons to call before the problem spreads.',
    warnings: [
      'Outlets or switches that are warm',
      'The smell of something burning',
      'A buzz in the wall or the panel',
      'Sparks at a plug',
      'Flicker when the microwave or a tool starts',
      'Breakers that will not stay on',
      'Dark marks around a device',
      'One half of the house dark',
      'A mild shock from a light or switch',
    ],
    warningNote:
      'A breaker that keeps opening is telling you something else is wrong. Smoke or fire means leave and call 911. For a line on the ground, stay at least 30 feet away, call 911 or the utility, and then call us.',
    housing: [
      'Tea city has an estimated 2,336 housing units in the 2024 5-year survey. An estimated 1,992 were built in 1980 or later, including 348 from 2020 or later. An estimated 344 were built in 1979 or earlier.',
      'New streets are where people ask if the panel can take a charger, a hot tub, or a finished basement. The older houses are the ones more likely to have too few outlets or a service that was sized for a smaller load.',
      'If the service itself is still 60 or 100 amp, a 200-amp service upgrade means the meter and the service entrance, worked out with the utility. Putting in a new panel is not that same step.',
    ],
    housingSource:
      'Figures for Tea city, South Dakota, from American Community Survey 2024 5-year estimates, table B25034, Year Structure Built. They are survey estimates.',
    housingSourceHref: census('16000US4663100'),
    permits: [
      [
        { text: 'A ' },
        { text: 'state electrical inspector', href: INSPECT },
        { text: ' covers wiring in Tea, because the town is outside Sioux Falls and Rapid City. Plan on a rough-in inspection and a final inspection.' },
      ],
      [
        { text: 'Permits received on or after November 12, 2024 follow the 2023 National Electrical Code. The ' },
        { text: 'Electrical Commission', href: COMMISSION },
        { text: ' page states that date, and the ' },
        { text: 'toolbox page', href: CODE },
        { text: ' lists the state exceptions.' },
      ],
      [
        { text: 'Tea ' },
        { text: 'Planning and Zoning', href: 'https://www.teasd.com/departments/planning-zoningbuilding-services' },
        { text: ' handles city building permits and building inspections. The city ' },
        { text: 'permit handbook', href: 'https://www.teasd.com/media/library1/fluid-mod-page/82/documents/PermitHandbook.pdf' },
        { text: ' says a building permit does not cover the electrical work, and electrical permits go through the state commission. Permit-required wiring is done by a licensed electrician, with a state wiring permit and inspection, plus any local permits Tea requires.' },
      ],
    ],
    faqs: [
      {
        question: 'Do you work in the newer Tea neighborhoods?',
        paragraphs: [[
          { text: 'Yes. Newer additions are most of Tea, and we also take requests from the older streets. We answer 24/7 and connect you with a local licensed electrician. Call {phone} and give the street, then say if the job is a charger, a basement, lighting, or a circuit that failed.' },
        ]],
      },
      {
        question: 'Will a Tea basement finish need its own wiring permit?',
        paragraphs: [[
          { text: 'The city building permit is for the building work. Wiring still needs a state wiring permit and a state inspection, because Tea is outside Sioux Falls, plus any local permit Tea requires. Permit-required wiring is done by a licensed electrician. We do not promise how soon an inspector can come.' },
        ]],
      },
      {
        question: 'What do you check before a charger goes in a Tea garage?',
        paragraphs: [[
          { text: 'The electrician you\'re matched with treats a home unit as a Level 2 charger on a 240-volt circuit of its own. The first step is a load calculation, so they know the panel and the service can feed it. A full panel is a different job from the charger. Call {phone} and tell us which garage and what the panel looks like.' },
        ]],
      },
      {
        question: 'My lights are out in Tea. Who is the first call?',
        paragraphs: [[
          { text: 'Call the power company before you call an electrician. The ' },
          { text: 'City of Tea', href: 'https://www.teasd.com/new-residents' },
          { text: ' says Xcel Energy serves most of town, and Southeastern Electric serves areas east of Heritage Parkway, north of Brian Street, and west of Deerview Avenue. If the utility says the fault is on your side, call {phone}.' },
        ]],
      },
    ],
    serving: [
      { text: 'Tea sits southwest of Sioux Falls, with Interstate 29 along the east side and 271st Street into town. The drive is about 10 to 20 minutes, depending on your start. We also connect callers in ' },
      { text: 'Harrisburg', href: '/locations/harrisburg' },
      { text: ' and ' },
      { text: 'Lennox', href: '/locations/lennox' },
      { text: ', and the ' },
      { text: 'Sioux Falls Electricians', href: '/' },
      { text: ' page covers the city itself. The ' },
      { text: 'service area page', href: '/service-area' },
      { text: ' lists every town.' },
    ],
    mapNote: 'You are seeing Tea on the map. The address we need is the one you give us by phone.',
  },
  {
    slug: 'hartford',
    name: 'Hartford',
    answer:
      'Need an electrician in Hartford, SD? We connect you with a local licensed electrician for downtown houses, newer additions, and acreages at the edge of town. Panels, repairs, shop circuits, and generator hookups are the usual list. We answer 24/7. Call {phone} and say which place and what failed.',
    workIntro:
      'Hartford is a mix. Newer additions and an older downtown sit in the same town, and the roads out of town turn into acreages.',
    jobs: [
      [
        { text: 'Repairs', href: repair },
        { text: ' in an older house, including lights that flicker and outlets that quit.' },
      ],
      [
        { text: 'A ' },
        { text: 'panel replacement', href: panel },
        { text: ' when the box is full or a fuse box is still in use. A 200-amp service upgrade is separate: it is the meter and the service entrance, coordinated with the utility.' },
      ],
      [
        { text: 'Shop subpanels', href: panel },
        { text: ' and ' },
        { text: 'outbuilding wiring', href: wire },
        { text: ' for a shed or a shop that needs its own circuits.' },
      ],
      [
        { text: 'A ' },
        { text: 'standby generator', href: gen },
        { text: ' connected with a transfer switch or an interlock kit. ' },
        { text: 'Well pump', href: wire },
        { text: ' circuits are sized from the pump label, not from a guess.' },
      ],
      [
        { text: 'GFCI protection', href: outlet },
        { text: ' near water, including a stock tank heater, plus ' },
        { text: 'whole-home surge protection', href: surge },
        { text: ' that reduces surge damage.' },
      ],
    ],
    warningLead: 'Stop and call if the house shows any of these.',
    warnings: [
      'Warm devices',
      'Burning odor',
      'Buzzing',
      'Sparks when something is plugged in',
      'Lights that flicker as a pump or heater starts',
      'Breakers that trip over and over',
      'Scorched plates',
      'Only part of the property has power',
      'A shock from a fixture, even a small one',
    ],
    warningNote:
      'Do not treat a tripping breaker as the whole repair. It is a symptom. Get out and call 911 if there is smoke or fire. Stay at least 30 feet from a downed line, call 911 or the utility, then call us.',
    housing: [
      'Hartford city has an estimated 1,399 housing units. An estimated 922 were built in 1980 or later, and an estimated 477 were built in 1979 or earlier. That is a real split, not a town of only new houses.',
      'Newer additions are where a charger, more lighting, or a panel with no open spaces comes up. Older houses, and places on the edge with a shop or a well, are where a small service, a fuse box, or too few circuits show up more often.',
      'The service upgrade and the panel replacement stay separate jobs even when both are on the wish list.',
    ],
    housingSource:
      'Hartford city, South Dakota, housing age estimates: U.S. Census Bureau, American Community Survey 2024 5-year, table B25034.',
    housingSourceHref: census('16000US4627540'),
    permits: [
      [
        { text: 'Hartford sits outside Sioux Falls, so a ' },
        { text: 'state electrical inspector', href: INSPECT },
        { text: ' does the rough-in and the final on wiring.' },
      ],
      [
        { text: 'The ' },
        { text: 'commission', href: COMMISSION },
        { text: ' inspects permits received on or after November 12, 2024 under the 2023 National Electrical Code, with the ' },
        { text: 'exceptions the state lists', href: CODE },
        { text: '.' },
      ],
      [
        { text: 'The city ' },
        { text: 'building permit page', href: 'https://www.hartfordsd.us/index.asp?DE=A454FEDE-0130-4105-BB57-0597471E1F47&SEC=041A0F8F-CA13-4E7B-A825-4EC6DC6F6216' },
        { text: ' is for building permits and building inspections. A separate city note says ' },
        { text: 'state wiring permits and inspections', href: 'https://www.hartfordsd.us/index.asp?DE=E922B278-D23E-4F8E-8CA5-07973CAF9FA6&SEC=0011F119-0FA8-48D9-905D-E784AE76A202' },
        { text: ' are the resident\'s responsibility to obtain. Permit-required wiring is done by a licensed electrician, with a state wiring permit and inspection, plus any local permits Hartford requires.' },
      ],
    ],
    faqs: [
      {
        question: 'Do you come to Hartford houses and to acreages outside town?',
        paragraphs: [[
          { text: 'Yes. We connect you with a local licensed electrician for the older downtown streets and the later additions. Outside town, shops, wells, and outbuildings are part of the same referral area. We answer 24/7. Call {phone} with the address and what lost power or what you want added.' },
        ]],
      },
      {
        question: 'Is a Hartford shop subpanel the same as a service upgrade?',
        paragraphs: [[
          { text: 'No. A shop subpanel feeds the outbuilding from the service you already have. A 200-amp service upgrade changes the meter and the service entrance, and the utility is part of that. A house panel replacement is a third job. Call {phone} and say which building the power is for.' },
        ]],
      },
      {
        question: 'How do you connect a generator at a Hartford property?',
        paragraphs: [[
          { text: 'A standby or portable generator is connected through a transfer switch or an interlock kit. That is the safe way to use it during an outage. The electrician you\'re matched with looks at the panel and the loads first. Call {phone} and tell us if the generator is already on site or still a plan. We answer 24/7.' },
        ]],
      },
      {
        question: 'Who gets the first call when Hartford loses power?',
        paragraphs: [[
          { text: 'The utility, not us. The ' },
          { text: 'City of Hartford', href: 'https://www.hartfordsd.us/index.asp?DE=ECDAE70F-4220-41EC-BD92-FCCE3238A61C&SEC=561FF2AA-6D02-4041-B8FA-7E2DAB03761D' },
          { text: ' lists Sioux Valley Energy for electrical service. If they say the problem is on your side of the meter, then call {phone}. If a line is down, stay at least 30 feet away and call 911 or the utility first.' },
        ]],
      },
    ],
    serving: [
      { text: 'Hartford is west of Sioux Falls. South Dakota Highway 38 runs out to town and meets Interstate 90. Figure about 15 to 25 minutes from Sioux Falls, depending on the start. We also connect callers in ' },
      { text: 'Dell Rapids', href: '/locations/dell-rapids' },
      { text: ' and ' },
      { text: 'Tea', href: '/locations/tea' },
      { text: ', and the ' },
      { text: 'Sioux Falls Electricians', href: '/' },
      { text: ' page covers the city itself. Every town we take requests from is on the ' },
      { text: 'service area page', href: '/service-area' },
      { text: '.' },
    ],
    mapNote: 'The pin is Hartford. We still need the street, and whether the job is a house or a shop.',
  },
  {
    slug: 'dell-rapids',
    name: 'Dell Rapids',
    answer:
      'Need an electrician in Dell Rapids, SD? Older houses near downtown and newer ones farther out need different work. We connect you with a local licensed electrician for both, plus shops at the edge of town. We answer 24/7. Call {phone} and describe the street and the trouble.',
    workIntro:
      'A large share of Dell Rapids housing is from 1939 or earlier, and another large share was built after 1980. The job follows the house.',
    jobs: [
      [
        { text: 'Fuse box replacement', href: panel },
        { text: ' and ' },
        { text: 'ungrounded two-prong outlets', href: outlet },
        { text: ' in older houses. Too few outlets and flickering lights belong on that same list.' },
      ],
      [
        { text: 'A 200-amp service upgrade', href: panel },
        { text: ' when a 60 or 100 amp service cannot carry what you want to add. That upgrade is the meter and the service entrance, coordinated with the utility. A ' },
        { text: 'panel replacement', href: panel },
        { text: ' is not the same visit.' },
      ],
      [
        { text: 'GFCI protection', href: outlet },
        { text: ' in kitchens and baths. GFCI is shock protection near water. ' },
        { text: 'Smoke and CO alarms', href: alarm },
        { text: ' also wear out after about 10 years.' },
      ],
      [
        { text: 'Rewiring', href: wire },
        { text: ' in one room or more, when the old wiring is the reason a circuit keeps failing.' },
      ],
      [
        { text: 'At the edge of town, ' },
        { text: 'shop subpanels', href: panel },
        { text: ', well pumps, and a ' },
        { text: 'generator hookup', href: gen },
        { text: ' through a transfer switch or an interlock kit.' },
      ],
    ],
    warningLead: 'In an older house, these signs are worth a call.',
    warnings: [
      'A warm outlet or switch',
      'Any burning smell',
      'Buzzing behind a plate',
      'Sparks',
      'Flicker when an appliance starts',
      'Breakers or fuses that open repeatedly',
      'Scorch marks on a device',
      'Half the rooms dark',
      'A mild shock from a lamp or fixture',
    ],
    warningNote:
      'Opening the fuse or the breaker again is not the repair. Tripping is a symptom. Leave the building and call 911 if you have smoke or fire. A downed line means stay at least 30 feet away and call 911 or the utility, then call us.',
    housing: [
      'Dell Rapids city has an estimated 1,606 housing units. An estimated 832 were built in 1980 or later, and an estimated 774 were built in 1979 or earlier. The single largest group in that estimate is 415 units from 1939 or earlier.',
      'Houses from that older group are where a fuse box, a 60 or 100 amp service, two-prong outlets, and too few circuits still come up. Newer houses on the edge of that stock are more often a repair, lighting, or a question about panel space.',
      'Keep the service upgrade and the panel change as two conversations. One touches the meter and the service entrance. The other replaces the panel itself.',
    ],
    housingSource:
      'Dell Rapids city estimates for the year structures were built come from the Census Bureau American Community Survey, 2024 5-year, table B25034.',
    housingSourceHref: census('16000US4615980'),
    permits: [
      [
        { text: 'Wiring in Dell Rapids is outside the Sioux Falls and Rapid City inspection cities, so a ' },
        { text: 'state electrical inspector', href: INSPECT },
        { text: ' handles the rough-in and the final.' },
      ],
      [
        { text: 'Permits in hand on or after November 12, 2024 are checked against the 2023 National Electrical Code. See the ' },
        { text: 'commission notice', href: COMMISSION },
        { text: ' and the ' },
        { text: 'listed exceptions', href: CODE },
        { text: '.' },
      ],
      [
        { text: 'City ' },
        { text: 'community development', href: 'https://www.cityofdellrapids.org/departments/community_development.php' },
        { text: ' enforces the building code and issues building permits. The ' },
        { text: 'building permit steps', href: 'https://cms2.revize.com/revize/dellrapidssd/departments/building_inspection_and_code_enforcement/apply_for_a_building_permit.php' },
        { text: ' describe that building review. They do not say the city issues the electrical wiring permit. Permit-required wiring is done by a licensed electrician, with a state wiring permit and inspection, plus any local permits Dell Rapids requires.' },
      ],
    ],
    faqs: [
      {
        question: 'Do you work on the older houses near downtown Dell Rapids?',
        paragraphs: [[
          { text: 'Yes. Downtown and the older streets are a large part of the housing here, and we also connect you with a local licensed electrician for newer houses and shops at the edge of town. We answer 24/7. Call {phone}, give the street, and say if you are looking at a fuse box, a dead circuit, or something you want added.' },
        ]],
      },
      {
        question: 'My Dell Rapids house still has a fuse box. What gets replaced?',
        paragraphs: [[
          { text: 'Replacing the fuse box is a panel job. If the service is still 60 or 100 amp, a 200-amp service upgrade is extra: the meter and the service entrance, coordinated with the utility. A new fuse does not explain why it opened. Call {phone} and tell us what the box looks like.' },
        ]],
      },
      {
        question: 'Can you replace smoke and CO alarms in an older Dell Rapids house?',
        paragraphs: [[
          { text: 'Yes. We connect you with a local licensed electrician who can replace them. Alarms wear out after about 10 years, so the date on the back matters more than whether the button still clicks. The electrician can also talk about GFCI shock protection in kitchens and baths on the same visit if those outlets are the old ungrounded kind. Call {phone} and say how many alarms you have.' },
        ]],
      },
      {
        question: 'Dell Rapids is dark. Do I call you or the power company?',
        paragraphs: [[
          { text: 'Call the power company first. The ' },
          { text: 'City of Dell Rapids', href: 'https://www.cityofdellrapids.org/departments/utility_billing/utility_setup.php' },
          { text: ' lists Xcel Energy for electricity. Call us at {phone} only after they say the problem is on your side of the meter. For a downed line, stay at least 30 feet away and call 911 or the utility.' },
        ]],
      },
    ],
    serving: [
      { text: 'Dell Rapids is north of Sioux Falls. Interstate 29 is the highway north, and South Dakota Highway 115 runs from the interstate into town. The drive is about 25 to 35 minutes. We also connect callers in ' },
      { text: 'Hartford', href: '/locations/hartford' },
      { text: ' and ' },
      { text: 'Brandon', href: '/locations/brandon' },
      { text: ', and the ' },
      { text: 'Sioux Falls Electricians', href: '/' },
      { text: ' page covers the city itself. The rest of the list is the ' },
      { text: 'service area page', href: '/service-area' },
      { text: '.' },
    ],
    mapNote: 'This view is Dell Rapids, not the house. Say the address when you call.',
  },
  {
    slug: 'canton',
    name: 'Canton',
    answer:
      'Need an electrician in Canton, SD? A lot of the houses are older, so rewires, panels, and small services are common, along with shops and wells at the edge of town. We connect you with a local licensed electrician. We answer 24/7. Call {phone} and tell us the address and what you need.',
    workIntro:
      'Canton\'s housing estimate leans old. The largest group was built in 1939 or earlier. Newer houses exist, and they are the smaller share.',
    jobs: [
      [
        { text: 'Rewiring', href: wire },
        { text: ' and ' },
        { text: 'repairs', href: repair },
        { text: ' in older houses, including flickering lights and circuits that quit.' },
      ],
      [
        { text: 'A ' },
        { text: '200-amp service upgrade', href: panel },
        { text: ' from a 60 or 100 amp service. That is the meter and the service entrance, coordinated with the utility. A ' },
        { text: 'fuse box or panel replacement', href: panel },
        { text: ' is a different job.' },
      ],
      [
        { text: 'Ungrounded two-prong outlets', href: outlet },
        { text: ' and ' },
        { text: 'GFCI protection', href: outlet },
        { text: ' in kitchens and baths. GFCI means shock protection near water.' },
      ],
      [
        { text: 'Smoke and CO alarm replacement', href: alarm },
        { text: ', because those alarms wear out after about 10 years, and ' },
        { text: 'whole-home surge protection', href: surge },
        { text: ' that reduces surge damage.' },
      ],
      [
        { text: 'On acreages, a ' },
        { text: 'well pump circuit', href: wire },
        { text: ', a stock tank heater on a GFCI-protected circuit, and a ' },
        { text: 'generator', href: gen },
        { text: ' on a transfer switch or an interlock kit.' },
      ],
    ],
    warningLead: 'Treat these as a reason to call, not as something to watch.',
    warnings: [
      'Heat at an outlet or a switch',
      'A burning smell in a room',
      'Buzzing from a box',
      'Sparks',
      'Lights that flicker when a motor starts',
      'Fuses or breakers that open again after you reset them',
      'Scorch marks',
      'Power missing in half the house',
      'A tingle or mild shock from a fixture',
    ],
    warningNote:
      'Resetting the same fuse is not a repair. The trip is a symptom. Smoke or fire means get outside and call 911. Stay at least 30 feet from a downed line, call 911 or the utility, and call us after that.',
    housing: [
      'Canton city has an estimated 1,540 housing units. An estimated 1,105 were built in 1979 or earlier, and 653 of those estimates are from 1939 or earlier. An estimated 435 were built in 1980 or later. The estimate for 2020 or later is 0.',
      'That is why a Canton call is often an older service, a fuse box, two-prong outlets, or a rewire, not a brand new subdivision. The newer houses are real, and they are the minority in this estimate.',
      'A 200-amp service upgrade still means the meter and the service entrance, with the utility involved. Swapping only the panel leaves that service where it is.',
    ],
    housingSource:
      'Canton city, South Dakota: American Community Survey 2024 5-year estimates, table B25034, Year Structure Built. Published as estimates.',
    housingSourceHref: census('16000US4609500'),
    permits: [
      [
        { text: 'Canton is well outside Sioux Falls and Rapid City, so a ' },
        { text: 'state electrical inspector', href: INSPECT },
        { text: ' inspects the rough-in and comes back for the final.' },
      ],
      [
        { text: 'If the wiring permit was received on or after November 12, 2024, the ' },
        { text: 'Electrical Commission', href: COMMISSION },
        { text: ' uses the 2023 National Electrical Code, including the ' },
        { text: 'state exceptions', href: CODE },
        { text: '.' },
      ],
      [
        { text: 'The ' },
        { text: 'City of Canton permits page', href: 'https://www.cantonsd.org/page/permits' },
        { text: ' is where to check for a local building permit. That page is not, by itself, the state wiring permit. Permit-required wiring is done by a licensed electrician, with a state wiring permit and inspection, plus any local permits Canton requires.' },
      ],
    ],
    faqs: [
      {
        question: 'Do you take older Canton houses and places just outside town?',
        paragraphs: [[
          { text: 'Yes. We connect you with a local licensed electrician for older houses, newer houses, and acreages with a shop or a well. We answer 24/7. Call {phone} and say whether the job is a house downtown, a newer street, or a place on the edge.' },
        ]],
      },
      {
        question: 'What permit covers a rewire in Canton?',
        paragraphs: [[
          { text: 'A rewire needs a state wiring permit and a state inspection. Canton is not in Sioux Falls or Rapid City, where those cities run their own electrical inspection. Check the city for any local building permit too. Permit-required wiring is done by a licensed electrician. We do not give an inspection date.' },
        ]],
      },
      {
        question: 'Can you wire a well pump or a stock tank heater near Canton?',
        paragraphs: [[
          { text: 'Yes. We connect you with a local licensed electrician when the place is in the towns on this site. A well pump circuit is sized from the pump label. A stock tank heater sits near water, so the circuit needs GFCI shock protection. Neither one is a 200-amp service upgrade unless the service itself is too small. Call {phone} and describe the building the power comes from.' },
        ]],
      },
      {
        question: 'The power is out in Canton. What is the first call?',
        paragraphs: [[
          { text: 'Call the power company listed on your electric bill first. If they say the problem is on your side of the meter, call {name} at {phone}.' },
        ]],
      },
    ],
    serving: [
      { text: 'Canton is south of Sioux Falls. The usual roads are Interstate 29 to US Highway 18, or South Dakota Highway 11. The drive is about 30 to 40 minutes. We also connect callers in ' },
      { text: 'Harrisburg', href: '/locations/harrisburg' },
      { text: ' and ' },
      { text: 'Lennox', href: '/locations/lennox' },
      { text: ', and the ' },
      { text: 'Sioux Falls Electricians', href: '/' },
      { text: ' page covers the city itself. The ' },
      { text: 'service area page', href: '/service-area' },
      { text: ' has the full list.' },
    ],
    mapNote: 'The pin lands on Canton. Tell us the house, the shop, or the acreage address.',
  },
  {
    slug: 'lennox',
    name: 'Lennox',
    answer:
      'Need an electrician in Lennox, SD? We connect you with a local licensed electrician for older houses in town and outbuildings on the edge: repairs, panels, shop circuits, and generator hookups. We answer 24/7. Call {phone} with the street and a plain description of the problem.',
    workIntro:
      'Lennox is not a new subdivision town. More than half of the estimated housing was built before 1980, with both a prewar group and a 1970s group.',
    jobs: [
      [
        { text: 'Repairs', href: repair },
        { text: ' and ' },
        { text: 'rewiring', href: wire },
        { text: ' where an older circuit flickers, overheats, or simply quits.' },
      ],
      [
        { text: 'Panel replacement', href: panel },
        { text: ' or a fuse box change. If the service is 60 or 100 amp, a 200-amp service upgrade is the meter and the service entrance, coordinated with the utility, and it is not the same as the panel job.' },
      ],
      [
        { text: 'Two-prong outlets', href: outlet },
        { text: ' and added outlets where a room does not have enough. ' },
        { text: 'GFCI protection', href: outlet },
        { text: ' in kitchens and baths is shock protection near water.' },
      ],
      [
        { text: 'A shop subpanel', href: panel },
        { text: ' and ' },
        { text: 'outbuilding wiring', href: wire },
        { text: ' for a shed or a shop, including a well pump sized from the label on the pump.' },
      ],
      [
        { text: 'A ' },
        { text: 'generator hookup', href: gen },
        { text: ' with a transfer switch or an interlock kit, ' },
        { text: 'smoke and CO alarms', href: alarm },
        { text: ' that are due after about 10 years, and ' },
        { text: 'surge protection', href: surge },
        { text: ' that reduces surge damage.' },
      ],
    ],
    warningLead: 'Call when you see or smell any of these. Do not wait on a repeat trip.',
    warnings: [
      'Outlets or switches running warm',
      'Burning smell',
      'A buzz you can hear',
      'Sparks at a cord or a switch',
      'Flickering tied to a motor starting',
      'Breakers that trip more than once',
      'Marks that look burned',
      'Rooms on only one side of the house without power',
      'A small shock from a fixture',
    ],
    warningNote:
      'The breaker is not the fix by itself. Tripping points at a cause. If there is smoke or fire, get out and call 911. Stay at least 30 feet from a downed line and call 911 or the utility before you call us.',
    housing: [
      'Lennox city has an estimated 1,032 housing units. An estimated 579 were built in 1979 or earlier, and an estimated 453 were built in 1980 or later. Within the older estimate, 222 units date from 1939 or earlier and 234 from the 1970s.',
      'So the town is not one age. Houses from 1939 or earlier and houses from the 1970s can both have tight panels, while the newer streets are fewer. Places at the edge add shops, wells, and outbuildings that a house on a town lot does not have.',
      'Say which building the electrician would be feeding. A subpanel in a shop does not replace a 200-amp service upgrade at the house.',
    ],
    housingSource:
      'Lennox city, South Dakota housing counts are estimates from American Community Survey 2024 5-year table B25034, Year Structure Built.',
    housingSourceHref: census('16000US4636380'),
    permits: [
      [
        { text: 'Lennox is outside Sioux Falls and Rapid City, which means a ' },
        { text: 'state electrical inspector', href: INSPECT },
        { text: ' does both the rough-in and the final wiring inspection.' },
      ],
      [
        { text: 'The 2023 National Electrical Code applies to permits the ' },
        { text: 'commission', href: COMMISSION },
        { text: ' received on or after November 12, 2024, along with ' },
        { text: 'state exceptions', href: CODE },
        { text: '.' },
      ],
      [
        { text: 'The ' },
        { text: 'City of Lennox', href: 'https://www.cityoflennoxsd.com/article/1367494' },
        { text: ' requires building permits and says it has adopted the 2021 residential and building codes, which the city describes as covering electrical systems among other things. That is the building permit, not a substitute for the state wiring permit. ' },
        { text: 'Zoning and building services', href: 'https://www.cityoflennoxsd.com/o/lennox/page/zoning-building-services' },
        { text: ' is the city page for that local process. Permit-required wiring is done by a licensed electrician, with a state wiring permit and inspection, plus any local permits Lennox requires.' },
      ],
    ],
    faqs: [
      {
        question: 'Will you come to an older Lennox house and to a shop outside town?',
        paragraphs: [[
          { text: 'Yes. We connect you with a local licensed electrician for older houses, and for shops or wells just outside town. We answer 24/7. Call {phone} and say house, shop, or both, plus the street or the rural address.' },
        ]],
      },
      {
        question: 'Does a Lennox panel replacement need a state wiring permit?',
        paragraphs: [[
          { text: 'Yes when the work is permit-required wiring. Lennox does not use the Sioux Falls or Rapid City electrical inspection offices. You get a state wiring permit and a state inspection, plus any local permit Lennox requires. Permit-required wiring is done by a licensed electrician. A service upgrade is an added step with the utility.' },
        ]],
      },
      {
        question: 'Can you add a shop subpanel on a Lennox acreage?',
        paragraphs: [[
          { text: 'Yes. We connect you with a local licensed electrician for a subpanel in the shop or the outbuilding. It does not, by itself, raise the house to a 200-amp service. If the existing service is 60 or 100 amp, the electrician talks about that upgrade separately and coordinates the meter work with the utility. Call {phone} and tell us what the shop needs to run.' },
        ]],
      },
      {
        question: 'Who should I call during a Lennox outage?',
        paragraphs: [[
          { text: 'Start with the power company named on your electric bill. If they tell you the trouble is on your side of the meter, call {name} at {phone}.' },
        ]],
      },
    ],
    serving: [
      { text: 'Lennox is southwest of Sioux Falls. Interstate 29 to South Dakota Highway 44 is the usual drive, about 25 to 35 minutes depending on the start. We also connect callers in ' },
      { text: 'Tea', href: '/locations/tea' },
      { text: ' and ' },
      { text: 'Canton', href: '/locations/canton' },
      { text: ', and the ' },
      { text: 'Sioux Falls Electricians', href: '/' },
      { text: ' page covers the city itself. The ' },
      { text: 'service area page', href: '/service-area' },
      { text: ' names the others.' },
    ],
    mapNote: 'Lennox is the pin. Your call still needs the street or the rural address.',
  },
];

export function withPhone(text: string, phone: string, name: string) {
  return text.replaceAll('{phone}', phone).replaceAll('{name}', name);
}

export function townBlockBySlug(slug: string) {
  return townBlocks.find((block) => block.slug === slug);
}

export function faqItemsFor(block: TownBlock, phone: string, name: string): FaqItem[] {
  return block.faqs.map((item) => ({
    question: item.question,
    paragraphs: item.paragraphs.map((parts) => parts.map((part) => withPhone(part.text, phone, name)).join('')),
  }));
}
