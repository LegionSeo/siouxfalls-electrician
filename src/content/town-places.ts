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
    heading: 'Main Street, the river, and Interstate 90',
    intro: [
      'Brandon is in Minnehaha County, five miles east of Sioux Falls, where the Big Sioux River and Split Rock Creek meet the city. Interstate 90 runs along the north edge, next to Corson. That is the east and west highway on this side of the metro. Inside town, South Dakota Highway 11 is Splitrock Boulevard, and most of the businesses sit on that road. Holly Boulevard, Sioux Boulevard, and Aspen Boulevard carry the neighborhood traffic. Aspen Boulevard continues east to Valley Springs, then toward Beaver Creek and Luverne in Minnesota.',
      'Main Street is the older downtown. The Big Sioux Recreation Area is west of Robert Bennis Elementary, with trails and bridges over the river. Great Bear Recreation Park is about two and a half miles west of Brandon on Rice Street. The census counted 3,238 housing units in 2010 and 4,038 in 2020, so the city added about 800 homes in ten years. A house from that newer stretch and a house near Main Street are not the same job.',
    ],
    workHeading: 'What to tell us when you call',
    work: [
      'In a newer Brandon house, the job is often lighting, or an EV charger in the garage. The panel needs space and capacity before a charger goes on the wall. Near Main Street, the call is more often a repair, or a panel that filled up as rooms were added. Tell us the street, the room, and whether the power is out or only unreliable.',
      'We take repair, panel upgrade, lighting, and EV charger calls in Brandon. If a switch or a breaker smells hot, say that first. A building permit goes through the city on Main Avenue. State electrical inspection is a separate step, and it is not the same path as a job inside Sioux Falls city limits.',
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
      'Harrisburg is in Lincoln County, about 2.7 miles from the south edge of Sioux Falls. The railroad made the town. Before the tracks, a stagecoach brought mail to the Johnson Harris homestead on Nine Mile Creek. The first train came through on August 1, 1879, between Sioux City and Sioux Falls. The depot moved to the present site in 1890, and the post office took the name Harrisburg again. The old State Bank still stands at 101 Railroad Avenue. That building went up in 1899 and was restored in 2006.',
      'You come off Interstate 29 at Exit 71, then follow 273rd Street east or west into town. South Dakota Highway 115 also runs through the city. The 2010 census counted 4,089 people and 1,507 housing units. The 2020 census counted 6,732 people and 2,399 housing units. The older block is the one by the tracks. The houses added after 2010 are a newer kind of building. Adventure Elementary, Freedom Elementary, and Liberty Elementary sit inside the city. Other Harrisburg schools sit in Sioux Falls because the district line and the city line do not match.',
    ],
    workHeading: 'Older blocks and newer houses',
    work: [
      'Near Railroad Avenue, an older building may need a repair, or a panel that can take a modern circuit. In a newer house, the call is more often lighting or an EV charger, and the panel has to have room for it. Say which one you need, and give us the street so we know which part of town we are coming to.',
      'We do panel upgrades, EV chargers, lighting, and repairs in Harrisburg. A building permit inside the city is a city question. Electrical inspection outside Sioux Falls city limits goes through the South Dakota State Electrical Commission.',
    ],
  },
  {
    slug: 'tea',
    photo: placePhoto(
      'place-tea',
      'Hansen-Hagedorn barn on a farm east of Tea in rural Lincoln County, South Dakota',
      1600,
      1061,
      'https://commons.wikimedia.org/wiki/File:Hansen-Hagedorn_barn_from_SE_1.jpg',
    ),
    caption: 'The Hansen-Hagedorn barn east of Tea, in rural Lincoln County.',
    author: 'Ammodramus',
    license: 'CC0 1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hansen-Hagedorn_barn_from_SE_1.jpg',
    heading: 'A short name and a fast growing suburb',
    intro: [
      'Tea was laid out in 1894 in Lincoln County, and the name was chosen because it is short. The city is a suburb on the south side of Sioux Falls. Interstate 29 Exit 73, at 271st Street, is the way in. The 2000 census counted 1,742 people and about 600 housing units. The 2020 census counted 5,598 people and 1,970 housing units. The Census Bureau estimate for 2024 is 7,699. In 2020 the median age was 29.7, and 36.1 percent of residents were under 18.',
      'The city parks are Tea City Park, the Tea Athletic Complex, Howling Ridge Park, and Prairie Trails Park. East of town, the Hansen-Hagedorn barn still stands on a farm at 46954 252 St in rural Lincoln County. New streets near the interstate and older farm buildings on the section roads are both part of a call in this area. Tea Area schools use the district office at 131 North Poplar. Legacy Elementary, Venture Elementary, the middle school, and the high school have Tea addresses. Frontier Elementary is in Sioux Falls.',
    ],
    workHeading: 'New houses and older buildings',
    work: [
      'In a newer Tea house, people call about lighting, or a panel that needs one more circuit. In an older house, or in a farm building that has stood for years, the work is usually the circuit that quit, or a rewire of that one room. Tell us the address, and say whether we are coming to a house or a shop.',
      'We do repairs, rewiring, lighting, and panel upgrades in Tea. A permit inside the city is a city question. State electrical inspection covers wiring outside the Sioux Falls local program.',
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
    heading: 'Oaksville, then Hartford, west of Sioux Falls',
    intro: [
      'Hartford began as Oaksville in 1878, named for I. E. Oaks. Early settlers renamed it Hartford in 1881, after Hartford, Connecticut. A post office has been here since 1880, and the city incorporated in 1896. You are in Minnehaha County, about 10 miles west of Sioux Falls. South Dakota Highway 38 runs through town and meets Interstate 90 at Exit 390, just east of the city. That exit is the simple way in from the interstate.',
      'The 2020 census counted 3,354 people and 1,294 housing units. West Central High School serves students from Hartford, Humboldt, the Wall Lake area, and Ellis. Downtown is the older commercial block. The Mundt Block in Hartford is on the National Register of Historic Places. Trails in the southwest part of the city pass about half a mile of apple trees. Hartford City Park has five shelters and an amphitheater. Turtle Creek Park has one shelter, and you reserve a shelter through city hall.',
    ],
    workHeading: 'Repairs, panels, lights, and generator inlets',
    work: [
      'A house on the older streets may need a repair or a lighting change. Before storm season, people ask about a generator inlet so a portable generator can feed the house and cannot send power back to the utility. A house in the later additions is more likely to need a panel with space for what you want to add. Tell us which of those fits, and which room lost power.',
      'We do repairs, panel upgrades, generator installation, and lighting in Hartford. A building permit inside the city goes to the city. Electrical inspection follows the state commission unless the work is inside Sioux Falls.',
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
      'Dell Rapids is at the north end of Minnehaha County, on the Big Sioux River, about 15 miles north of Sioux Falls. The rapids reminded people of the Dells of the Wisconsin River. The first name was Dell City, and it was changed to match the water. A fire burned most of the main street, and the town was rebuilt in Sioux quartzite, the pink stone quarried here. LG Everist still runs two large quartzite quarries. The D and I Railroad serves those quarries. The public school teams are the Quarriers, named for that rock. St. Mary\'s is a separate Catholic school, with an elementary, a junior high, and a high school.',
      'Downtown is about three miles from Interstate 29. South Dakota Highway 115 connects the interstate to the quartzite blocks. Old Highway 77 runs north out of the city. The 2020 census counted 3,996 people. Public school students go to Dell Rapids Elementary, Dell Rapids Middle School, and Dell Rapids High School. The district office is at 1216 North Garfield Avenue. The winter street in the photo is that downtown block.',
    ],
    workHeading: 'Old stone buildings and newer edges',
    work: [
      'A quartzite storefront, or a house from the years after that fire, can need a rewire, a panel upgrade, or smoke and carbon monoxide detectors that are past their date. A house on a newer lot, away from those stone blocks, is usually a repair or a lighting job. Tell us the street and what you want checked. If only part of the house is out, say which rooms still have power.',
      'We do repairs, panel upgrades, rewiring, and smoke and carbon monoxide detectors in Dell Rapids. The city handles a building permit inside the city. The state electrical commission inspects wiring outside the Sioux Falls local program.',
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
      'Canton is the Lincoln County seat, 18 miles south of Sioux Falls. The city sits on the Big Sioux River, across from Beloit, Iowa. James M. Wahl, a Norwegian settler and former legislator, named the town. In 1868 a group of Norwegian settlers crossed the river and stayed. The Chicago, Milwaukee, St. Paul and Pacific Railroad reached Canton in 1880, and freight trains still serve the city. Interstate 29 Exit 62 is the Canton interchange. Highway 18 crosses the interstate there and runs east into town.',
      'Downtown keeps buildings from the late 1800s. The Lincoln County Courthouse was built in 1889. The Historical Society House dates to 1886. Canton Lutheran Church was built in 1908, and the Kennedy Mansion stands on Dakota Street. Newton Hills State Park is six miles south, with camping and trails. The 2020 census counted 3,066 people and 1,375 housing units. In that count, 18.8 percent of residents were 65 or older. In July 2012 the Canton Industrial Park became the first South Dakota Certified Ready Site.',
    ],
    workHeading: 'Houses downtown and shops at the park',
    work: [
      'An older house or a downtown building often needs a repair, a panel upgrade, or new lighting. A shop at the industrial park is a different visit. Tell us whether the job is a house or a business, the hours a circuit can be off, and the address. If a landlord has to open a meter room, say that on the call.',
      'We do repairs, panel upgrades, lighting, and commercial electrical work in Canton. Ask the city or Lincoln County about a building permit, depending on whether you are inside city limits. State electrical inspection applies outside Sioux Falls city limits.',
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
      'Lennox is in Lincoln County, 20 miles southwest of Sioux Falls. Settlers arrived in 1879. The town was named for Ben Lennox, private secretary to the general manager of the Milwaukee Railroad, and it was founded in 1889. The 2020 census counted 2,423 people, 905 households, and 961 housing units. The median age was 38.1, and 17.2 percent of residents were 65 or older. It is a small grid, so the drive from the highway to a house is short.',
      'South Dakota Highway 44 runs through Lennox and east to Interstate 29. Exit 68 is the interchange for Lennox and Parker, at 276th Street. Downtown is the commercial block from the railroad years, and the photo looks along that street. Houses from those early years and houses added later are different buildings, even in a town this size. The Lennox schools are an elementary school, an intermediate school, a junior high, and a high school.',
    ],
    workHeading: 'Older houses, rewires, and storm power',
    work: [
      'In an older Lennox house, the work is often a rewire, a repair, or smoke and carbon monoxide detectors. A generator inlet is a separate job. It lets a portable generator feed the house, and it is wired so that power cannot go back to the utility. Tell us the address and which of those you need. If the panel is in a basement or a mud room, say so.',
      'We do repairs, rewiring, generator installation, and smoke and carbon monoxide detectors in Lennox. A building permit inside the city goes to the city. Electrical inspection outside Sioux Falls is a state commission inspection.',
    ],
  },
];

export function townPlaceBySlug(slug: string) {
  return townPlaces.find((place) => place.slug === slug);
}
