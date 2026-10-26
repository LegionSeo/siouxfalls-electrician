import { joinNames, townPages } from '../config/catalog';
import { SITE } from '../config/site';

export interface FaqItem {
  question: string;
  paragraphs: string[];
}

/** Visible FAQ copy. Schema uses the same strings. */
export const homeFaqs: FaqItem[] = [
  {
    question: 'How do I find a good electrician in Sioux Falls?',
    paragraphs: [
      'When you compare electrical contractors in Sioux Falls, ask whether the job needs a city permit, because a careful electrician explains the problem in plain words and tells you what they will and will not touch.',
      'Call and say which room stopped working and what you already tried.',
    ],
  },
  {
    question: 'What does an electrician in Sioux Falls typically charge, and what affects the price?',
    paragraphs: [
      'There is no single price for electrical work in Sioux Falls, because the price changes with the type of repair, how hard the wiring is to reach, the space left in the panel, the materials, and whether the city requires a permit and inspection.',
    ],
  },
  {
    question: 'Do I need a permit for electrical work in Sioux Falls?',
    paragraphs: [
      'The City of Sioux Falls requires a permit for most electrical work, including many new circuits, panel changes, and equipment installs, so confirm the current rules with city building services before you start.',
      "The electrician you're matched with pulls a permit when the city requires one.",
    ],
  },
  {
    question: 'Is it an emergency if my outlet is sparking or smells like burning?',
    paragraphs: [
      'Yes, sparking or a burning smell at an outlet, switch, or panel is a fire risk, so keep people back, shut the breaker off if you can do it safely, and call 911 if you see smoke or flames.',
      'After everyone is safe, call an electrician to find the cause. We do not promise how soon someone can be there.',
    ],
  },
  {
    question: 'Can you work on both homes and businesses?',
    paragraphs: [
      'Yes. We connect you with a local licensed electrician for houses and businesses in Sioux Falls and nearby towns, from a single repair to a larger planned job.',
      'Home calls are often outlets, panels, lighting, and EV chargers. Business work can include lighting and added circuits.',
    ],
  },
  {
    question: 'Which towns around Sioux Falls do you serve?',
    paragraphs: [
      `We connect you with a local licensed electrician in ${joinNames(townPages.map((town) => town.name))}, South Dakota.`,
      'We do not publish a trip fee. Ask about travel when you call.',
    ],
  },
  {
    question: 'How do I know if my electrical panel needs an upgrade?',
    paragraphs: [
      'You may need a panel upgrade if breakers trip often, the panel is warm or buzzing, you still have a fuse box, every breaker slot is full, or you are adding a large load such as an EV charger, a hot tub, or a heat pump.',
      'Call and describe the label on the panel door.',
    ],
  },
  {
    question: 'Can you install an EV charger in my garage?',
    paragraphs: [
      "Yes. We connect you with a local licensed electrician who can install a Level 2 charger in a garage, including a charger you already bought, after they check that the panel can carry the extra load.",
      'Many chargers need a new 240-volt circuit, and the city often requires a permit. Call with the panel size and where you park.',
    ],
  },
];

export function faqAnswerText(item: FaqItem): string {
  return item.paragraphs.join(' ');
}

/** Same FAQ copy the page shows, including the 24/7 line only when the flag is on. */
export function homepageFaqs(): FaqItem[] {
  if (!SITE.available247) return homeFaqs;
  return homeFaqs.map((item) => {
    if (!item.question.startsWith('Is it an emergency')) return item;
    return {
      ...item,
      paragraphs: [item.paragraphs[0], `${SITE.availabilityNote} ${item.paragraphs[1]}`],
    };
  });
}
