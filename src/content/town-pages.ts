import type { PhotoSlot } from '../config/site';
import { pagePhoto } from '../lib/photos';

export interface TownFact {
  label: string;
  text: string;
}

export interface TownPage {
  slug: string;
  name: string;
  title: string;
  description: string;
  photo: PhotoSlot;
  answer: string;
  facts: TownFact[];
  housing: string;
  permits: string;
  services: string[];
  faqs: { q: string; a: string }[];
  mapQuery: string;
  preview: string;
}

const photo = (base: string, alt: string) => pagePhoto(base, alt);

export const townPagesContent: TownPage[] = [
  {
    slug: 'brandon',
    name: 'Brandon',
    title: 'Electrician Brandon SD',
    description: 'Electrician in Brandon, SD for repairs, panels, EV chargers, and lighting. Brandon is five miles east of Sioux Falls in Minnehaha County.',
    photo: photo('town-brandon', 'Electrician at a breaker panel inside a suburban house'),
    answer:
      'Brandon is a city in Minnehaha County, five miles east of Sioux Falls. The 2020 census counted 11,048 people. Sioux Falls Electricians takes repair, panel, lighting, and EV-charger calls in Brandon. Call {phone}.',
    facts: [
      { label: 'County', text: 'Minnehaha County.' },
      { label: 'Distance', text: 'Five miles east of Sioux Falls.' },
      { label: 'Population', text: '11,048 at the 2020 census.' },
      { label: 'Schools', text: 'Brandon Valley School District. The district office address published with the city inspection page area is on Splitrock Boulevard; city hall inspection staff are at 304 Main Ave.' },
      { label: 'Incorporated', text: '1973. ZIP code 57005.' },
    ],
    housing: 'Named neighborhoods and the age of the housing stock were not in the city or Wikipedia pages used for this write-up, so they are not described here.',
    permits: 'Building permits inside Brandon go through the City of Brandon Planning and Inspection Department at 304 Main Ave. Electrical inspections follow the South Dakota State Electrical Commission. Sioux Falls city limits are a different inspection path.',
    services: ['/services/electrical-repair', '/services/panel-upgrades', '/services/ev-charger-installation', '/services/lighting-installation'],
    faqs: [
      { q: 'How far is Brandon from Sioux Falls?', a: 'Wikipedia places Brandon five miles east of Sioux Falls, in Minnehaha County.' },
      { q: 'Which school district serves Brandon?', a: 'The Brandon Valley School District. Some of its elementary schools sit in eastern Sioux Falls, which is a district fact, not a claim about every house.' },
      { q: 'Who issues a building permit in Brandon?', a: 'The City of Brandon Planning and Inspection Department. State electrical inspection rules still apply, and they are separate from a city building permit.' },
    ],
    mapQuery: 'Brandon, SD',
    preview: '/images/maps/brandon.webp',
  },
  {
    slug: 'harrisburg',
    name: 'Harrisburg',
    title: 'Electrician Harrisburg SD',
    description: 'Electrician in Harrisburg, SD, a Lincoln County suburb of Sioux Falls. Repairs, panels, lighting, and EV chargers.',
    photo: photo('town-harrisburg', 'Electrician running conduit in a residential garage'),
    answer:
      'Harrisburg is a Lincoln County suburb of Sioux Falls. The 2020 census counted 6,732 people. The school district and the city limits do not match, so many district schools sit inside Sioux Falls. Call {phone} for electrical work in Harrisburg.',
    facts: [
      { label: 'County', text: 'Lincoln County. The county seat is Canton, not Harrisburg.' },
      { label: 'Population', text: '6,732 at the 2020 census. Wikipedia also notes later city estimates as the town grew.' },
      { label: 'Schools', text: 'Harrisburg School District. Wikipedia notes that most schools are inside Sioux Falls because the district boundary and the city boundary do not match. Adventure, Freedom, and Liberty elementaries are inside Harrisburg city limits.' },
      { label: 'Founded', text: '1873. ZIP code 57032.' },
    ],
    housing: 'A mile count from downtown Sioux Falls and a list of subdivisions were not on the Wikipedia city page used here, so they are left out.',
    permits: 'Work inside Harrisburg city limits is a city permit question. Electrical inspections outside Sioux Falls city limits go through the South Dakota State Electrical Commission. This page does not invent a Harrisburg permit counter address.',
    services: ['/services/panel-upgrades', '/services/ev-charger-installation', '/services/lighting-installation', '/services/electrical-repair'],
    faqs: [
      { q: 'Is Harrisburg in the same county as Sioux Falls?', a: 'No. Harrisburg is in Lincoln County. Sioux Falls is mostly in Minnehaha County, with part of the city in Lincoln County.' },
      { q: 'Why are some Harrisburg schools in Sioux Falls?', a: 'Wikipedia says the school-district boundary and the municipal boundary do not match, so several Harrisburg schools are inside Sioux Falls.' },
      { q: 'Do you publish a Harrisburg trip fee?', a: 'No. Ask about travel when you call. The town page is for the work, not a mileage table.' },
    ],
    mapQuery: 'Harrisburg, SD',
    preview: '/images/maps/harrisburg.webp',
  },
  {
    slug: 'tea',
    name: 'Tea',
    title: 'Electrician Tea SD',
    description: 'Electrician in Tea, SD, a Lincoln County suburb of Sioux Falls. Repairs, panels, lighting, and wiring.',
    photo: photo('town-tea', 'Electrician at an outdoor electric meter on a house'),
    answer:
      'Tea is an incorporated city in Lincoln County and a suburb of Sioux Falls. The 2020 census counted 5,598 people. Students attend the Tea Area School District. Sioux Falls Electricians takes electrical calls in Tea. Call {phone}.',
    facts: [
      { label: 'County', text: 'Lincoln County.' },
      { label: 'Population', text: '5,598 at the 2020 census.' },
      { label: 'Schools', text: 'Tea Area School District 41-5. The district office is at 131 N Poplar, Tea. Legacy Elementary, Venture Elementary, the middle school, and the high school have Tea addresses. Frontier Elementary is in Sioux Falls.' },
      { label: 'Founded', text: '1894. ZIP code 57064.' },
    ],
    housing: 'Road miles and a main-highway name showed up on a real-estate page, not on Wikipedia or the school district, so they are not repeated here.',
    permits: 'Permits for work inside Tea are a city-hall question. State electrical inspections cover wiring outside the Sioux Falls and Rapid City local programs. No Tea permit desk address is invented here.',
    services: ['/services/electrical-repair', '/services/wiring-rewiring', '/services/lighting-installation', '/services/panel-upgrades'],
    faqs: [
      { q: 'What county is Tea in?', a: 'Lincoln County. It is a suburb of Sioux Falls.' },
      { q: 'Are all Tea Area schools inside Tea?', a: 'No. The district contact page lists Frontier Elementary in Sioux Falls. The other listed schools use Tea street addresses.' },
      { q: 'Which jobs are common on this page?', a: 'Repairs, lighting, wiring, and panel work. EV chargers and the other services are linked from the service list if that is the job.' },
    ],
    mapQuery: 'Tea, SD',
    preview: '/images/maps/tea.webp',
  },
  {
    slug: 'hartford',
    name: 'Hartford',
    title: 'Electrician Hartford SD',
    description: 'Electrician in Hartford, SD, about 10 miles west of Sioux Falls in Minnehaha County. West Central schools.',
    photo: photo('town-hartford', 'Electrician on a ladder at a house service mast'),
    answer:
      'Hartford is a suburban city in Minnehaha County. The city site says it lies about 10 miles west of Sioux Falls. The 2020 census counted 3,354 people. West Central schools serve the town. Call {phone} for electrical work.',
    facts: [
      { label: 'County', text: 'Minnehaha County. Wikipedia describes Hartford as a few miles northwest of Sioux Falls. The city site says about 10 miles west.' },
      { label: 'Population', text: '3,354 at the 2020 census.' },
      { label: 'Schools', text: 'West Central School District. Wikipedia says West Central High School draws from Hartford, Humboldt, the Wall Lake area, and Ellis.' },
      { label: 'Roads', text: 'The city describes itself as a short drive from Sioux Falls. A specific interchange number was not taken from the city page, so it is not listed.' },
    ],
    housing: 'Housing age and subdivision names were not on the city welcome page or the Wikipedia summary used here.',
    permits: 'Building permits inside Hartford go to the city. Electrical inspections follow the state commission unless the work is inside Sioux Falls, which has its own inspection department.',
    services: ['/services/electrical-repair', '/services/panel-upgrades', '/services/generator-installation', '/services/lighting-installation'],
    faqs: [
      { q: 'How far is Hartford from Sioux Falls?', a: 'The City of Hartford says it is about 10 miles west of Sioux Falls.' },
      { q: 'What school district is Hartford in?', a: 'West Central. The district also includes Humboldt, the Wall Lake area, and Ellis.' },
      { q: 'Is Hartford in Lincoln County?', a: 'No. Hartford is in Minnehaha County.' },
    ],
    mapQuery: 'Hartford, SD',
    preview: '/images/maps/hartford.webp',
  },
  {
    slug: 'dell-rapids',
    name: 'Dell Rapids',
    title: 'Electrician Dell Rapids SD',
    description: 'Electrician in Dell Rapids, SD, about 15 miles north of Sioux Falls along I-29. Dell Rapids School District 49-3.',
    photo: photo('town-dell-rapids', 'Electrician in a utility room with a breaker panel'),
    answer:
      'Dell Rapids is at the north end of Minnehaha County, on the Big Sioux River. The South Dakota DOT master plan places it about 15 miles north of Sioux Falls along I-29. Dell Rapids School District 49-3 serves the town. Call {phone}.',
    facts: [
      { label: 'County', text: 'Minnehaha County, at the northern end of the county.' },
      { label: 'Roads', text: 'About 15 miles north of Sioux Falls on the I-29 corridor. Downtown is about three miles from I-29 by SD Highway 115. Old Highway 77 runs north out of the city.' },
      { label: 'River', text: 'The city sits upstream of Sioux Falls on the Big Sioux River.' },
      { label: 'Schools', text: 'Dell Rapids School District 49-3, 1216 N Garfield Ave., with an elementary, a middle school, and a high school.' },
    ],
    housing: 'The DOT plan calls Dell Rapids a bedroom community of Sioux Falls. It does not give a housing-age mix, so none is stated. The plan’s 2017 population figure is not used as a current count.',
    permits: 'City work is permitted by the city. The state electrical commission inspects wiring outside the Sioux Falls local program. No Dell Rapids permit-counter address was verified for this page.',
    services: ['/services/electrical-repair', '/services/panel-upgrades', '/services/wiring-rewiring', '/services/smoke-co-detectors'],
    faqs: [
      { q: 'How do you get from Dell Rapids to Sioux Falls?', a: 'The DOT master plan says SD Highway 115 connects downtown to I-29, about three miles west, and then south to Sioux Falls.' },
      { q: 'What schools are in town?', a: 'Dell Rapids Elementary, Middle School, and High School, in district 49-3.' },
      { q: 'Is a current population printed here?', a: 'No. The figure in the 2017 transportation plan is old, and a newer census number was not pulled into this page.' },
    ],
    mapQuery: 'Dell Rapids, SD',
    preview: '/images/maps/dell-rapids.webp',
  },
  {
    slug: 'canton',
    name: 'Canton',
    title: 'Electrician Canton SD',
    description: 'Electrician in Canton, SD, the Lincoln County seat, 18 miles south of Sioux Falls.',
    photo: photo('town-canton', 'Electrician replacing a light in an older brick house'),
    answer:
      'Canton is the county seat of Lincoln County, 18 miles south of Sioux Falls. The 2020 census counted 3,066 people. Canton School District 41-1 serves the city. Sioux Falls Electricians takes calls in Canton. Call {phone}.',
    facts: [
      { label: 'County', text: 'Lincoln County. Canton is the county seat.' },
      { label: 'Distance', text: '18 miles south of Sioux Falls.' },
      { label: 'Population', text: '3,066 at the 2020 census.' },
      { label: 'Schools', text: 'Canton School District 41-1, listed among Lincoln County school districts.' },
      { label: 'Incorporated', text: '1881. ZIP code 57013.' },
    ],
    housing: 'Wikipedia describes Canton as part of the Sioux Falls metropolitan area. It does not give a housing-age breakdown, so none is added.',
    permits: 'The city and Lincoln County are the permit offices to ask, depending on whether the job is inside city limits. State electrical inspections apply outside Sioux Falls city limits. A specific Canton building-department URL was not verified, so none is linked.',
    services: ['/services/electrical-repair', '/services/panel-upgrades', '/services/lighting-installation', '/services/commercial-electrician'],
    faqs: [
      { q: 'Is Canton the county seat?', a: 'Yes. Lincoln County’s seat is Canton. The courthouse is in Canton.' },
      { q: 'How far south of Sioux Falls is Canton?', a: 'Wikipedia says 18 miles south.' },
      { q: 'Which district are the schools in?', a: 'Canton School District 41-1.' },
    ],
    mapQuery: 'Canton, SD',
    preview: '/images/maps/canton.webp',
  },
  {
    slug: 'lennox',
    name: 'Lennox',
    title: 'Electrician Lennox SD',
    description: 'Electrician in Lennox, SD, 20 miles southwest of Sioux Falls in Lincoln County. Lennox School District 41-4.',
    photo: photo('town-lennox', 'Electrician at a floor outlet in a ranch-house kitchen'),
    answer:
      'Lennox is a city in Lincoln County, 20 miles southwest of Sioux Falls. The 2020 census counted 2,423 people. Lennox School District 41-4 operates the local schools. Call {phone} for electrical work in Lennox.',
    facts: [
      { label: 'County', text: 'Lincoln County.' },
      { label: 'Distance', text: '20 miles southwest of Sioux Falls.' },
      { label: 'Population', text: '2,423 at the 2020 census.' },
      { label: 'Schools', text: 'Lennox School District 41-4. Wikipedia lists Lennox Elementary and LWC Intermediate, plus LWC Junior High and Lennox High School.' },
      { label: 'Founded', text: '1889. ZIP code 57039.' },
    ],
    housing: 'No sourced description of housing age or neighborhoods was used, so that section is not filled in.',
    permits: 'Jobs inside Lennox go to the city for a building permit. Electrical inspection outside Sioux Falls is a state-commission inspection. This page does not invent a counter address.',
    services: ['/services/electrical-repair', '/services/wiring-rewiring', '/services/generator-installation', '/services/smoke-co-detectors'],
    faqs: [
      { q: 'How far is Lennox from Sioux Falls?', a: 'Wikipedia says 20 miles southwest.' },
      { q: 'What county is Lennox in?', a: 'Lincoln County, the same county as Canton, Harrisburg, and Tea.' },
      { q: 'What is the school district number?', a: 'Lennox School District 41-4.' },
    ],
    mapQuery: 'Lennox, SD',
    preview: '/images/maps/lennox.webp',
  },
];

export function townPageBySlug(slug: string) {
  return townPagesContent.find((page) => page.slug === slug);
}
