import type { PhotoSlot } from '../config/site';

export interface TownPlace {
  slug: string;
  photo: PhotoSlot;
  caption: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
  heading: string;
  intro: string[];
  workHeading: string;
  work: string[];
}

function placePhoto(base: string, alt: string, width: number, height: number, sourceUrl: string): PhotoSlot {
  return {
    alt,
    width,
    height,
    src: `/images/${base}-1600.webp`,
    webpSrcset: `/images/${base}-800.webp 800w, /images/${base}-1600.webp 1600w`,
    avifSrcset: `/images/${base}-800.avif 800w, /images/${base}-1600.avif 1600w`,
    note: `Resized from ${sourceUrl}`,
  };
}

export const townPlaces: TownPlace[] = [
  {
    slug: 'brandon',
    photo: placePhoto(
      'place-brandon',
      'Downtown Brandon, South Dakota, looking north along Main Street',
      1600,
      900,
      'https://commons.wikimedia.org/wiki/File:Downtown_Brandon.jpg',
    ),
    caption: 'Downtown Brandon, looking north on Main Street.',
    author: 'TCN7JM',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Downtown_Brandon.jpg',
    heading: 'Newer homes and the older downtown',
    intro: [
      'Brandon is in Minnehaha County, five miles east of Sioux Falls. The Big Sioux River and Split Rock Creek run through the city. Interstate 90 runs along the north side of town. A post office called Brandon has been here since 1878, and the city incorporated in 1973. Newer houses fill the streets that were added as the city grew.',
      'The census counted 3,238 housing units in 2010 and 4,038 in 2020. That is about 800 more homes in ten years. Newer homes and older homes near Main Street usually need different work. The Big Sioux Recreation Area sits west of Robert Bennis Elementary, with trails and bridges over the river. Great Bear Recreation Park is about two and a half miles west of town.',
    ],
    workHeading: 'What to tell us when you call',
    work: [
      'In a newer Brandon house, people often call about lighting, or an EV charger in the garage. The panel needs open space and enough capacity before a charger goes on the wall. Near Main Street, the call is more often a repair, or a panel that filled up as rooms were added. Tell us the street, the room, and whether the power is out or only unreliable.',
      'Call us in Brandon for a repair, a panel upgrade, lighting, or an EV charger. If a switch or a breaker smells hot, say that first. We pull permits when the city requires them.',
    ],
  },
  {
    slug: 'harrisburg',
    photo: placePhoto(
      'place-harrisburg',
      'A DAIR locomotive on the tracks in Harrisburg, South Dakota',
      1600,
      1067,
      'https://commons.wikimedia.org/wiki/File:DAIR_3024,_Harrisburg_-_Flickr_-_chief_huddleston.jpg',
    ),
    caption: 'A DAIR locomotive in Harrisburg.',
    author: 'Jerry Huddleston',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:DAIR_3024,_Harrisburg_-_Flickr_-_chief_huddleston.jpg',
    heading: 'The railroad town south of Sioux Falls',
    intro: [
      'Harrisburg is in Lincoln County, about 2.7 miles from the south edge of Sioux Falls. The town grew up with the railroad. Before the tracks, a stagecoach brought mail to the Johnson Harris homestead on Nine Mile Creek. Johnson Harris named the post office Harrisburg. The first train came through on August 1, 1879, between Sioux City and Sioux Falls. In 1890 the depot moved to the present site, and the town took the name Harrisburg.',
      'The old State Bank building still stands at 101 Railroad Avenue. It went up in 1899 and was restored in 2006. The 2010 census counted 4,089 people and 1,507 housing units. The 2020 census counted 6,732 people and 2,399 housing units. The older block is the one by the tracks. The houses added after 2010 are a newer kind of building. Most Harrisburg schools sit in Sioux Falls, because the district line and the city line do not match. Adventure Elementary, Freedom Elementary, and Liberty Elementary are inside the city.',
    ],
    workHeading: 'Older blocks and newer houses',
    work: [
      'Near Railroad Avenue, an older building may need a repair, or a panel that can take a modern circuit. In a newer house, the call is more often lighting or an EV charger, and the panel has to have room for it. Say which one you need, and give us the street so we know which part of town we are coming to.',
      'Panel upgrades, EV chargers, lighting, and repairs are the Harrisburg calls we take. We pull permits when the city requires them.',
    ],
  },
  {
    slug: 'tea',
    photo: placePhoto(
      'place-tea',
      'Entrance to Tea Area High School in Tea, South Dakota',
      1600,
      1205,
      'https://commons.wikimedia.org/wiki/File:Tea_Area_High_School.jpg',
    ),
    caption: 'The entrance to Tea Area High School.',
    author: 'WavingDolphin',
    license: 'CC0 1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tea_Area_High_School.jpg',
    heading: 'A suburb that grew quickly',
    intro: [
      'Tea is a suburb of Sioux Falls in Lincoln County. The town was laid out in 1894, and the name was chosen because it is short. The 2000 census counted 1,742 people and 600 housing units. The 2010 census counted 3,806 people and 1,354 housing units. The 2020 census counted 5,598 people and 1,970 housing units. The Census Bureau estimate for 2024 is 7,699. In 2020 the median age was 29.7, and 36.1 percent of residents were under 18. Many of the houses here went up during that growth. That is a lot of new houses in a short time.',
      'The city parks are Tea City Park, the Tea Athletic Complex, Howling Ridge Park, and Prairie Trails Park. Tea Area schools include three elementary schools, a middle school, and Tea Area High School. A newer house near the schools and an older house from the early years of the city are both part of a call here.',
    ],
    workHeading: 'New houses and older ones',
    work: [
      'In a newer Tea house, people call about lighting, or a panel that needs one more circuit. In an older house, the work is usually the circuit that quit, or rewiring in that one room. Tell us the address, and say whether we are coming to a house or a shop.',
      'Repairs, rewiring, lighting, and panel upgrades are the jobs we do in Tea. We pull permits when the city requires them.',
    ],
  },
  {
    slug: 'hartford',
    photo: placePhoto(
      'place-hartford',
      'Downtown Hartford, South Dakota, along the main commercial block',
      1600,
      756,
      'https://commons.wikimedia.org/wiki/File:Hartford,_South_Dakota_5.jpg',
    ),
    caption: 'Downtown Hartford.',
    author: 'Jon Platek',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hartford,_South_Dakota_5.jpg',
    heading: 'Oaksville, then Hartford',
    intro: [
      'Hartford began as Oaksville in 1878, named for I. E. Oaks. Early settlers renamed it Hartford in 1881, after Hartford, Connecticut. A post office has been here since 1880, and the city incorporated in 1896. You are in Minnehaha County, about 10 miles west of Sioux Falls. The city also points residents to a pool, a golf course, bike trails, and parks. The 2020 census counted 3,354 people and 1,294 housing units.',
      'West Central High School serves students from Hartford, Humboldt, the Wall Lake area, and Ellis. Downtown is the older commercial block. A nature path in the southwest part of the city passes half a mile of apple trees. Hartford City Park has five shelters and an amphitheater. Turtle Creek Park has one shelter, and you reserve a shelter through city hall.',
    ],
    workHeading: 'Repairs, panels, lights, and generator inlets',
    work: [
      'A house on the older streets may need a repair or a lighting change. Before storm season, people ask about a generator inlet. The inlet is wired so a portable generator can power the house without sending power back onto the utility line. A house in a later addition is more likely to need a panel with space for what you want to add. Tell us which of those fits, and which room lost power.',
      'In Hartford we handle repairs, panel upgrades, generator installation, and lighting. We pull permits when the city requires them.',
    ],
  },
  {
    slug: 'dell-rapids',
    photo: placePhoto(
      'place-dell-rapids',
      'Downtown Dell Rapids, South Dakota, on a winter day',
      1600,
      1067,
      'https://commons.wikimedia.org/wiki/File:Downtown_Dell_Rapids,_South_Dakota.JPG',
    ),
    caption: 'Downtown Dell Rapids in winter.',
    author: 'Michaelzamboni',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Downtown_Dell_Rapids,_South_Dakota.JPG',
    heading: 'Quartzite downtown on the Big Sioux',
    intro: [
      'Dell Rapids is in Minnehaha County, on the Big Sioux River. The rapids reminded people of the Dells of the Wisconsin River. The first name was Dell City. After a fire burned most of the main street, the town was rebuilt in Sioux quartzite, the pink stone quarried here. LG Everist still runs two large quartzite quarries. The D and I Railroad serves those quarries. The public school teams are the Quarriers, named for that rock.',
      'The 2020 census counted 3,996 people. The public schools are an elementary school, a middle school, and Dell Rapids High School. St. Mary\'s is a separate Catholic school, with an elementary, a junior high, and a high school. The quartzite blocks along the main street are the older part of downtown.',
    ],
    workHeading: 'Old stone buildings and newer lots',
    work: [
      'A quartzite storefront, or a house from the years after that fire, can need rewiring, a panel upgrade, or smoke and carbon monoxide detectors. If an alarm is past its date, tell us. A house on a newer lot, away from those stone blocks, is usually a repair or a lighting job. Tell us the street and what you want checked. If only part of the house is out, say which rooms still have power.',
      'Bring us a repair, a panel upgrade, a rewire, or new smoke and carbon monoxide detectors. We pull permits when the city requires them.',
    ],
  },
  {
    slug: 'canton',
    photo: placePhoto(
      'place-canton',
      'Downtown Canton, South Dakota, with older brick buildings along the street',
      1600,
      785,
      'https://commons.wikimedia.org/wiki/File:Canton,_South_Dakota_5.jpg',
    ),
    caption: 'Downtown Canton.',
    author: 'AlexiusHoratius',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Canton,_South_Dakota_5.jpg',
    heading: 'The county seat on the Big Sioux',
    intro: [
      'Canton is the Lincoln County seat, 18 miles south of Sioux Falls. The city sits on the Big Sioux River, across from Beloit, Iowa. James M. Wahl, a Norwegian settler and former legislator, named the town. In 1868 a caravan of Norwegian settlers crossed the river and stayed. The railroad reached Canton in 1880, and freight trains still serve the city.',
      'Downtown keeps buildings from the late 1800s. The Lincoln County Courthouse was built in 1889. The Historical Society House dates to 1886. Canton Lutheran Church was built in 1908, and the Kennedy Mansion stands on Dakota Street. Newton Hills State Park is six miles south, with camping and trails. The 2020 census counted 3,066 people and 1,375 housing units. In that count, 18.8 percent of residents were 65 or older. In July 2012 the Canton Industrial Park became the first South Dakota Certified Ready Site.',
    ],
    workHeading: 'Houses downtown and shops at the park',
    work: [
      'An older house or a downtown building often needs a repair, a panel upgrade, or new lighting. A shop at the industrial park is a different visit. Tell us whether the job is a house or a business, the hours a circuit can be off, and the address. If a landlord has to open a meter room, say that on the call.',
      'Repairs, panel upgrades, lighting, and commercial work are all on the list in Canton. We pull permits when the city requires them.',
    ],
  },
  {
    slug: 'lennox',
    photo: placePhoto(
      'place-lennox',
      'Downtown Lennox, South Dakota, with brick storefronts along the street',
      1600,
      710,
      'https://commons.wikimedia.org/wiki/File:Lennox,_South_Dakota_5.jpg',
    ),
    caption: 'Downtown Lennox.',
    author: 'Jon Platek',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lennox,_South_Dakota_5.jpg',
    heading: 'A railroad town southwest of Sioux Falls',
    intro: [
      'Lennox is in Lincoln County, 20 miles southwest of Sioux Falls. Settlers arrived in 1879. The town was named for Ben Lennox, private secretary to the general manager of the Milwaukee Railroad. The 2020 census counted 2,423 people, 905 households, and 961 housing units. The median age was 38.1. In that count, 26.6 percent of residents were under 18, and 17.2 percent were 65 or older.',
      'Downtown is the commercial block from the railroad years. Houses from those early years and houses added later are different buildings, even in a town this size. The Lennox schools include an elementary school, an intermediate school, a junior high, and a high school. Most calls are still one house, so the address and the room matter more than the size of the town.',
    ],
    workHeading: 'Older houses, rewires, and storm power',
    work: [
      'In an older Lennox house, the work is often rewiring, a repair, or smoke and carbon monoxide detectors. A generator inlet is a separate job. It lets you plug in a portable generator during an outage, and it keeps that power off the utility line. Tell us the address and which of those you need. If the panel is in a basement or a mudroom, say so.',
      'A repair, rewiring, a generator inlet, and smoke and carbon monoxide detectors are the Lennox jobs. We pull permits when the city requires them.',
    ],
  },
];

export function townPlaceBySlug(slug: string) {
  return townPlaces.find((place) => place.slug === slug);
}
