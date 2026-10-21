import type { PhotoSlot } from '../config/site';
import { pagePhoto } from '../lib/photos';

export interface TownStat {
  label: string;
  value: string;
}

export interface TownPage {
  slug: string;
  name: string;
  title: string;
  /** Document title only. Unique per town, and it names that town. */
  documentTitle: string;
  description: string;
  sub: string;
  photo: PhotoSlot;
  answer: string;
  stats: TownStat[];
  detail: string;
  about: string;
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
    title: 'Electrician in Brandon, SD',
    documentTitle: 'Best Electrician in Brandon, SD | 24/7 Service',
    description: 'Electrician in Brandon, SD for repairs, panels, EV chargers, and lighting. Brandon is five miles east of Sioux Falls in Minnehaha County.',
    sub: 'Repair, panel, lighting, and EV-charger calls five miles east of Sioux Falls.',
    photo: photo('town-brandon', 'Electrician at a breaker panel inside a suburban house'),
    answer:
      'Brandon is a city in Minnehaha County, five miles east of Sioux Falls. The 2020 census counted 11,048 people. Sioux Falls Electricians takes repair, panel, lighting, and EV-charger calls in Brandon. Call {phone}.',
    stats: [
      { label: 'County', value: 'Minnehaha' },
      { label: 'Distance', value: '5 miles east' },
      { label: 'Population 2020', value: '11,048' },
      { label: 'School district', value: 'Brandon Valley' },
      { label: 'ZIP', value: '57005' },
    ],
    detail: 'Brandon incorporated in 1973. The schools are in the Brandon Valley School District.',
    about:
      'Brandon is a city in Minnehaha County, five miles east of Sioux Falls. A post office called Brandon has been in operation since 1878, and the city took its name from Brandon Township. Brandon incorporated in 1973. The 2020 census counted 11,048 people. The city lies along the Big Sioux River and Split Rock Creek. Students are in the Brandon Valley School District. The high school, middle school, intermediate school, Brandon Elementary, Robert Bennis Elementary, and Burkman Valley Elementary are inside Brandon. Inspiration Elementary and Fred Assam Elementary sit a few miles southwest, in eastern Sioux Falls. The ZIP code is 57005.',
    permits: 'We pull permits when the city requires them.',
    services: ['/services/electrical-repair', '/services/panel-upgrades', '/services/ev-charger-installation', '/services/lighting-installation'],
    faqs: [
      { q: 'How far is Brandon from Sioux Falls?', a: 'Brandon is five miles east of Sioux Falls, in Minnehaha County.' },
      { q: 'Which school district serves Brandon?', a: 'Brandon Valley School District.' },
      { q: 'Do you pull permits in Brandon?', a: 'We pull permits when the city requires them.' },
    ],
    mapQuery: 'Brandon, SD',
    preview: '/images/maps/brandon.webp',
  },
  {
    slug: 'harrisburg',
    name: 'Harrisburg',
    title: 'Electrician in Harrisburg, SD',
    documentTitle: 'Best Electrician in Harrisburg, SD | 24/7 Service',
    description: 'Electrician in Harrisburg, SD, a Lincoln County suburb of Sioux Falls. Repairs, panels, lighting, and EV chargers.',
    sub: 'Electrical calls in this Lincoln County suburb.',
    photo: photo('town-harrisburg', 'Electrician running conduit in a residential garage'),
    answer:
      'Harrisburg is a Lincoln County suburb of Sioux Falls. The 2020 census counted 6,732 people. The school district and the city limits do not match, so many district schools sit inside Sioux Falls. Call {phone} for electrical work in Harrisburg.',
    stats: [
      { label: 'County', value: 'Lincoln' },
      { label: 'Population 2020', value: '6,732' },
      { label: 'School district', value: 'Harrisburg' },
      { label: 'ZIP', value: '57032' },
    ],
    detail:
      'The county seat is Canton. The school-district boundary and the city boundary do not match, so many Harrisburg schools sit inside Sioux Falls. Adventure, Freedom, and Liberty elementaries are inside Harrisburg city limits.',
    about:
      'Harrisburg is a suburb of Sioux Falls in Lincoln County, about 2.7 miles from the southern edge of Sioux Falls. The 2020 census counted 6,732 people. The ZIP code is 57032. Canton is the Lincoln County seat. The Harrisburg School District boundary and the city boundary do not match, so most district schools sit inside Sioux Falls. Adventure Elementary, Freedom Elementary, and Liberty Elementary are inside Harrisburg city limits.',
    permits: 'We pull permits when the city requires them.',
    services: ['/services/panel-upgrades', '/services/ev-charger-installation', '/services/lighting-installation', '/services/electrical-repair'],
    faqs: [
      { q: 'Is Harrisburg in the same county as Sioux Falls?', a: 'Harrisburg is in Lincoln County. Sioux Falls is mostly in Minnehaha County, with part of the city in Lincoln County.' },
      { q: 'Why are some Harrisburg schools in Sioux Falls?', a: 'The school-district boundary and the municipal boundary do not match, so several Harrisburg schools are inside Sioux Falls.' },
      { q: 'When did the railroad reach Harrisburg?', a: 'The first train came through on August 1, 1879, between Sioux City and Sioux Falls. Canton is the Lincoln County seat.' },
    ],
    mapQuery: 'Harrisburg, SD',
    preview: '/images/maps/harrisburg.webp',
  },
  {
    slug: 'tea',
    name: 'Tea',
    title: 'Electrician in Tea, SD',
    documentTitle: 'Best Electrician in Tea, SD | 24/7 Service',
    description: 'Electrician in Tea, SD, a Lincoln County suburb of Sioux Falls. Repairs, panels, lighting, and wiring.',
    sub: 'House and business electrical calls in this Lincoln County suburb.',
    photo: photo('town-tea', 'Electrician at an outdoor electric meter on a house'),
    answer:
      'Tea is an incorporated city in Lincoln County and a suburb of Sioux Falls. The 2020 census counted 5,598 people. Students attend the Tea Area School District. Sioux Falls Electricians takes electrical calls in Tea. Call {phone}.',
    stats: [
      { label: 'County', value: 'Lincoln' },
      { label: 'Population 2020', value: '5,598' },
      { label: 'School district', value: 'Tea Area 41-5' },
      { label: 'ZIP', value: '57064' },
    ],
    detail:
      'Tea was laid out in 1894. The district office is at 131 N Poplar. Legacy Elementary, Venture Elementary, the middle school, and the high school use Tea addresses. Frontier Elementary is in Sioux Falls.',
    about:
      'Tea is an incorporated city in Lincoln County and a suburb of Sioux Falls. The town was laid out in 1894, and the name was chosen because it is short. The 2020 census counted 5,598 people. The Census Bureau estimate for 2024 is 7,699. The ZIP code is 57064. Students attend Tea Area School District 41-5. The district office is at 131 N Poplar. Legacy Elementary, Venture Elementary, the middle school, and the high school use Tea addresses. Frontier Elementary is in Sioux Falls.',
    permits: 'We pull permits when the city requires them.',
    services: ['/services/electrical-repair', '/services/wiring-rewiring', '/services/lighting-installation', '/services/panel-upgrades'],
    faqs: [
      { q: 'What county is Tea in?', a: 'Lincoln County. It is a suburb of Sioux Falls.' },
      { q: 'Are all Tea Area schools inside Tea?', a: 'No. Frontier Elementary is in Sioux Falls. The other schools use Tea street addresses.' },
      { q: 'When was Tea laid out?', a: 'Tea was laid out in 1894. The Census Bureau estimate for 2024 is 7,699 people.' },
    ],
    mapQuery: 'Tea, SD',
    preview: '/images/maps/tea.webp',
  },
  {
    slug: 'hartford',
    name: 'Hartford',
    title: 'Electrician in Hartford, SD',
    documentTitle: 'Best Electrician in Hartford, SD | 24/7 Service',
    description: 'Electrician in Hartford, SD, about 10 miles west of Sioux Falls in Minnehaha County. West Central schools.',
    sub: 'Electrical calls about 10 miles west of Sioux Falls, in Minnehaha County.',
    photo: photo('town-hartford', 'Electrician on a ladder at a house service mast'),
    answer:
      'Hartford is a suburban city in Minnehaha County. The city site says it lies about 10 miles west of Sioux Falls. The 2020 census counted 3,354 people. West Central schools serve the town. Call {phone} for electrical work.',
    stats: [
      { label: 'County', value: 'Minnehaha' },
      { label: 'Distance', value: '10 miles west' },
      { label: 'Population 2020', value: '3,354' },
      { label: 'School district', value: 'West Central' },
    ],
    detail:
      'Hartford is northwest of Sioux Falls. West Central High School also draws from Humboldt, the Wall Lake area, and Ellis.',
    about:
      'Hartford is a suburban city in Minnehaha County, northwest of Sioux Falls. The city site says Hartford is about 10 miles west of Sioux Falls. The settlement was named Oaksville in 1878, renamed Hartford in 1881, and incorporated in 1896. A post office has been in operation since 1880. The 2020 census counted 3,354 people. The ZIP code is 57033. West Central High School draws students from Hartford, Humboldt, the Wall Lake area, and Ellis.',
    permits: 'We pull permits when the city requires them.',
    services: ['/services/electrical-repair', '/services/panel-upgrades', '/services/generator-installation', '/services/lighting-installation'],
    faqs: [
      { q: 'How far is Hartford from Sioux Falls?', a: 'Hartford is about 10 miles west of Sioux Falls.' },
      { q: 'What school district is Hartford in?', a: 'West Central. The district also includes Humboldt, the Wall Lake area, and Ellis.' },
      { q: 'Is Hartford in Lincoln County?', a: 'Hartford is in Minnehaha County.' },
    ],
    mapQuery: 'Hartford, SD',
    preview: '/images/maps/hartford.webp',
  },
  {
    slug: 'dell-rapids',
    name: 'Dell Rapids',
    title: 'Electrician in Dell Rapids, SD',
    documentTitle: 'Best Electrician in Dell Rapids, SD | 24/7 Service',
    description: 'Electrician in Dell Rapids, SD, about 15 miles north of Sioux Falls along I-29. Dell Rapids School District 49-3.',
    sub: 'Electrical calls about 15 miles north of Sioux Falls, along I-29.',
    photo: photo('town-dell-rapids', 'Electrician in a utility room with a breaker panel'),
    answer:
      'Dell Rapids is at the north end of Minnehaha County, on the Big Sioux River, about 15 miles north of Sioux Falls along I-29. Dell Rapids School District 49-3 serves the town. Call {phone}.',
    stats: [
      { label: 'County', value: 'Minnehaha' },
      { label: 'Distance', value: '15 miles north' },
      { label: 'School district', value: 'District 49-3' },
      { label: 'Population 2020', value: '3,996' },
    ],
    detail:
      'The city sits on the Big Sioux River, upstream of Sioux Falls. The public schools and St. Mary\'s Catholic school both serve the town.',
    about:
      'Dell Rapids sits in Minnehaha County on the Big Sioux River, upstream of Sioux Falls. The 2020 census counted 3,996 people. It is a bedroom community about 15 miles north of Sioux Falls. The public schools are Dell Rapids Elementary, Dell Rapids Middle School, and Dell Rapids High School. St. Mary\'s is a separate Catholic school.',
    permits: 'We pull permits when the city requires them.',
    services: ['/services/electrical-repair', '/services/panel-upgrades', '/services/wiring-rewiring', '/services/smoke-co-detectors'],
    faqs: [
      { q: 'What is the public school mascot?', a: 'The Quarriers, named for the Sioux quartzite quarries in town.' },
      { q: 'What schools are in town?', a: 'Dell Rapids Elementary, Middle School, and High School, plus St. Mary\'s Catholic school.' },
      { q: 'Which river runs through Dell Rapids?', a: 'The Big Sioux River. The city is upstream of Sioux Falls.' },
    ],
    mapQuery: 'Dell Rapids, SD',
    preview: '/images/maps/dell-rapids.webp',
  },
  {
    slug: 'canton',
    name: 'Canton',
    title: 'Electrician in Canton, SD',
    documentTitle: 'Best Electrician in Canton, SD | 24/7 Service',
    description:
      'Electrician in Canton, SD, the Lincoln County seat 18 miles south of Sioux Falls. Repairs, panels, lighting and commercial work, 24/7.',
    sub: 'Electrical calls in the Lincoln County seat, 18 miles south of Sioux Falls.',
    photo: photo('town-canton', 'Electrician replacing a light in an older brick house'),
    answer:
      'Canton is the county seat of Lincoln County, 18 miles south of Sioux Falls. The 2020 census counted 3,066 people. Canton School District 41-1 serves the city. Sioux Falls Electricians takes calls in Canton. Call {phone}.',
    stats: [
      { label: 'County', value: 'Lincoln' },
      { label: 'Distance', value: '18 miles south' },
      { label: 'Population 2020', value: '3,066' },
      { label: 'School district', value: 'District 41-1' },
      { label: 'ZIP', value: '57013' },
    ],
    detail: 'Canton is the Lincoln County seat. It incorporated in 1881. The schools are in Canton School District 41-1.',
    about:
      'Canton is the county seat of Lincoln County, 18 miles south of Sioux Falls. The city sits on the Big Sioux River across from Beloit, Iowa, and it incorporated in 1881. The 2020 census counted 3,066 people. The ZIP code is 57013. Canton is part of the Sioux Falls metropolitan area. The city received the South Dakota Community of the Year Award in 2004 and again in 2011. Lincoln County Courthouse was built in 1889. Canton School District 41-1 serves the city.',
    permits: 'We pull permits when the city requires them.',
    services: ['/services/electrical-repair', '/services/panel-upgrades', '/services/lighting-installation', '/services/commercial-electrician'],
    faqs: [
      { q: 'Is Canton the county seat?', a: 'Yes. Lincoln County’s seat is Canton. The courthouse is in Canton.' },
      { q: 'How far south of Sioux Falls is Canton?', a: 'Canton is 18 miles south of Sioux Falls.' },
      { q: 'Which district are the schools in?', a: 'Canton School District 41-1.' },
    ],
    mapQuery: 'Canton, SD',
    preview: '/images/maps/canton.webp',
  },
  {
    slug: 'lennox',
    name: 'Lennox',
    title: 'Electrician in Lennox, SD',
    documentTitle: 'Best Electrician in Lennox, SD | 24/7 Service',
    description: 'Electrician in Lennox, SD, 20 miles southwest of Sioux Falls in Lincoln County. Lennox School District 41-4.',
    sub: 'Electrical calls 20 miles southwest of Sioux Falls, in Lincoln County.',
    photo: photo('town-lennox', 'Electrician at a floor outlet in a ranch-house kitchen'),
    answer:
      'Lennox is a city in Lincoln County, 20 miles southwest of Sioux Falls. The 2020 census counted 2,423 people. Lennox School District 41-4 operates the local schools. Call {phone} for electrical work in Lennox.',
    stats: [
      { label: 'County', value: 'Lincoln' },
      { label: 'Distance', value: '20 miles SW' },
      { label: 'Population 2020', value: '2,423' },
      { label: 'School district', value: 'District 41-4' },
      { label: 'ZIP', value: '57039' },
    ],
    detail:
      'Settlers arrived in 1879. The district runs Lennox Elementary, LWC Intermediate, LWC Junior High, and Lennox High School.',
    about:
      'Lennox is a city in Lincoln County, 20 miles southwest of Sioux Falls. Settlers arrived in 1879, and the town was named for Ben Lennox, private secretary to the general manager of the Milwaukee Railroad. The 2020 census counted 2,423 people. The ZIP code is 57039. Lennox School District 41-4 runs Lennox Elementary, LWC Intermediate, LWC Junior High, and Lennox High School.',
    permits: 'We pull permits when the city requires them.',
    services: ['/services/electrical-repair', '/services/wiring-rewiring', '/services/generator-installation', '/services/smoke-co-detectors'],
    faqs: [
      { q: 'How far is Lennox from Sioux Falls?', a: 'Lennox is 20 miles southwest of Sioux Falls.' },
      { q: 'What county is Lennox in?', a: 'Lincoln County, the same county as Canton, Harrisburg, and Tea.' },
      { q: 'What is the school district number?', a: 'Lennox School District 41-4.' },
    ],
    mapQuery: 'Lennox, SD',
    preview: '/images/maps/lennox.webp',
  },
];

const townDocumentTitles = new Set<string>();
for (const page of townPagesContent) {
  if (!page.documentTitle.includes(page.name) || !page.documentTitle.includes('SD')) {
    throw new Error(`Town title must name ${page.name} and SD`);
  }
  if (townDocumentTitles.has(page.documentTitle)) {
    throw new Error(`Duplicate town title: ${page.documentTitle}`);
  }
  townDocumentTitles.add(page.documentTitle);
}

export function townPageBySlug(slug: string) {
  return townPagesContent.find((page) => page.slug === slug);
}
