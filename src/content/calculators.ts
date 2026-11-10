/**
 * Rounded national ranges for the cost and generator tools.
 * Page copy keeps the brief's published figures. This file is the rounded tool only.
 */

export const PRICE_LABEL =
  'Typical published national ranges, not a quote. Rough estimate only. Your final price comes after an electrician sees the job.';

export const RANGE_DISCLAIMER =
  'This is a typical published national range, not a quote. Rough estimate only. Your final price comes after an electrician sees the job.';

export interface MoneyRange {
  low: number;
  high: number;
  typical?: number;
}

export interface CostOption {
  id: string;
  label: string;
  /** Words after "Rough range for ". */
  phrase: string;
  low: number;
  high: number;
  typical?: number;
  note?: string;
}

export interface CostJob {
  id: string;
  label: string;
  phrase: string;
  optionPrompt?: string;
  options?: CostOption[];
  low?: number;
  high?: number;
  typical?: number;
  note?: string;
  source: string;
}

export const costJobs: CostJob[] = [
  {
    id: 'panel-200',
    label: '100 to 200 amp panel upgrade',
    phrase: 'a 100 to 200 amp panel upgrade',
    low: 1300,
    typical: 1600,
    high: 2000,
    note: 'Meter base or service wire work adds more',
    source: 'Source: Angi, electrical panel upgrade cost, updated Oct 29, 2026',
  },
  {
    id: 'fpe',
    label: 'Federal Pacific or other old panel replacement',
    phrase: 'a Federal Pacific or other old panel replacement',
    low: 600,
    typical: 1300,
    high: 2100,
    source: 'Source: Angi, Federal Pacific breakers, updated Jul 9, 2026',
  },
  {
    id: 'fuse-box',
    label: 'Fuse box to breaker panel',
    phrase: 'a fuse box to breaker panel',
    low: 1500,
    high: 2000,
    source: 'Source: Angi, electrical panel upgrade cost, updated Oct 29, 2026',
  },
  {
    id: 'rewire',
    label: 'Whole house rewire',
    phrase: 'a whole house rewire',
    optionPrompt: 'Home size',
    source: 'Source: Angi, cost to rewire a house, updated Oct 13, 2026',
    options: [
      { id: '1000', label: 'about 1,000 sq ft', phrase: 'a whole house rewire of about 1,000 sq ft', low: 2000, high: 4000, note: 'Older plaster homes run higher' },
      { id: '1500', label: 'about 1,500 sq ft', phrase: 'a whole house rewire of about 1,500 sq ft', low: 3000, high: 6000, note: 'Older plaster homes run higher' },
      { id: '2000', label: 'about 2,000 sq ft', phrase: 'a whole house rewire of about 2,000 sq ft', low: 4000, high: 8000, note: 'Older plaster homes run higher' },
      { id: '2500', label: 'about 2,500 sq ft', phrase: 'a whole house rewire of about 2,500 sq ft', low: 5000, high: 10000, note: 'Older plaster homes run higher' },
      { id: '3000', label: 'about 3,000 sq ft', phrase: 'a whole house rewire of about 3,000 sq ft', low: 6000, high: 12000, note: 'Older plaster homes run higher' },
    ],
  },
  {
    id: 'knob-tube',
    label: 'Knob and tube replacement',
    phrase: 'knob and tube replacement',
    optionPrompt: 'Home size',
    source: 'Source: Angi, knob and tube wiring replacement cost, updated Oct 29, 2026',
    options: [
      { id: '1000', label: 'about 1,000 sq ft', phrase: 'knob and tube replacement for about 1,000 sq ft', low: 10000, high: 20000 },
      { id: '1300', label: 'about 1,300 sq ft', phrase: 'knob and tube replacement for about 1,300 sq ft', low: 13000, high: 26000 },
      { id: '1600', label: 'about 1,600 sq ft', phrase: 'knob and tube replacement for about 1,600 sq ft', low: 16000, high: 32000 },
      { id: '2000', label: 'about 2,000 sq ft', phrase: 'knob and tube replacement for about 2,000 sq ft', low: 20000, high: 40000 },
    ],
  },
  {
    id: 'generator',
    label: 'Standby generator (unit cost by size)',
    phrase: 'a standby generator',
    optionPrompt: 'Generator size',
    note: 'Installation, pad, transfer switch and permit add more',
    source: 'Source: Angi, whole house generator cost, updated Sep 1, 2026',
    options: [
      { id: '14-18', label: '14 to 18 kW', phrase: 'a 14 to 18 kW standby generator', low: 4000, high: 5500, note: 'Installation, pad, transfer switch and permit add more' },
      { id: '20-24', label: '20 to 24 kW', phrase: 'a 20 to 24 kW standby generator', low: 5000, high: 6500, note: 'Installation, pad, transfer switch and permit add more' },
      { id: '26-32', label: '26 to 32 kW', phrase: 'a 26 to 32 kW standby generator', low: 6500, high: 15000, note: 'Installation, pad, transfer switch and permit add more' },
    ],
  },
  {
    id: 'transfer-switch',
    label: 'Transfer switch, installed',
    phrase: 'a transfer switch',
    optionPrompt: 'Switch type',
    source: 'Source: Angi, generator transfer switch cost, updated Oct 16, 2026',
    options: [
      { id: 'manual', label: 'manual', phrase: 'a manual transfer switch', low: 400, high: 1300 },
      { id: 'automatic', label: 'automatic', phrase: 'an automatic transfer switch', low: 600, high: 2500 },
    ],
  },
  {
    id: 'ev-charger',
    label: 'Level 2 EV charger',
    phrase: 'a Level 2 EV charger',
    optionPrompt: 'Charger',
    note: 'Panel upgrade adds more if needed',
    source: 'Source: Angi, EV charging installation costs, updated Sep 23, 2026',
    options: [
      { id: 'have', label: 'I have the charger', phrase: 'a Level 2 EV charger install when you already have the charger', low: 600, typical: 1000, high: 1400, note: 'Panel upgrade adds more if needed' },
      { id: 'include', label: 'Include the charger', phrase: 'a Level 2 EV charger with the charger included', low: 700, high: 2000, note: 'Panel upgrade adds more if needed' },
    ],
  },
  {
    id: 'hot-tub',
    label: 'Hot tub wiring',
    phrase: 'hot tub wiring',
    low: 1900,
    typical: 2300,
    high: 4200,
    source: 'Source: Angi, hot tub wiring cost, updated Oct 13, 2026',
  },
];

export function dollars(amount: number): string {
  return `$${amount.toLocaleString('en-US')}`;
}

export function rangeSentence(phrase: string, range: MoneyRange, note?: string): string {
  const span = `${dollars(range.low)} to ${dollars(range.high)}`;
  const head =
    range.typical == null
      ? `Rough range for ${phrase}: most pay about ${span}.`
      : `Rough range for ${phrase}: about ${span}. Typical: about ${dollars(range.typical)}.`;
  const extra = note ? ` ${note.endsWith('.') ? note : `${note}.`}` : '';
  return `${head}${extra} ${RANGE_DISCLAIMER}`;
}

export interface CostSelection {
  jobId: string;
  optionId: string;
  job: string;
  range: string;
  service: string;
}

export function costJobById(id: string): CostJob {
  return costJobs.find((job) => job.id === id) ?? costJobs[0];
}

export function selectCost(jobId: string, optionId?: string): CostSelection {
  const job = costJobById(jobId);
  const option = job.options?.find((item) => item.id === optionId) ?? job.options?.[0];
  const range = option
    ? { low: option.low, high: option.high, typical: option.typical }
    : { low: job.low ?? 0, high: job.high ?? 0, typical: job.typical };
  const phrase = option?.phrase ?? job.phrase;
  const note = option?.note ?? job.note;
  const jobLabel = option ? `${job.label}, ${option.label}` : job.label;
  return {
    jobId: job.id,
    optionId: option?.id ?? '',
    job: jobLabel,
    range: rangeSentence(phrase, range, note),
    service: jobLabel,
  };
}

export interface CostTableRow {
  job: string;
  option: string;
  low: string;
  typical: string;
  high: string;
  note: string;
}

export function costTableRows(): CostTableRow[] {
  const rows: CostTableRow[] = [];
  for (const job of costJobs) {
    if (job.options) {
      for (const option of job.options) {
        rows.push({
          job: job.label,
          option: option.label,
          low: dollars(option.low),
          typical: option.typical == null ? 'Not published' : dollars(option.typical),
          high: dollars(option.high),
          note: option.note ?? '',
        });
      }
    } else {
      rows.push({
        job: job.label,
        option: '',
        low: dollars(job.low ?? 0),
        typical: job.typical == null ? 'Not published' : dollars(job.typical),
        high: dollars(job.high ?? 0),
        note: job.note ?? '',
      });
    }
  }
  return rows;
}

export function costSourceLines(): { jobs: string; source: string }[] {
  const groups: { jobs: string[]; source: string }[] = [];
  for (const job of costJobs) {
    const existing = groups.find((group) => group.source === job.source);
    if (existing) existing.jobs.push(job.label);
    else groups.push({ jobs: [job.label], source: job.source });
  }
  return groups.map((group) => ({ jobs: group.jobs.join(', '), source: group.source }));
}

export interface HomeSize {
  id: string;
  label: string;
  phrase: string;
  kw: string;
}

export const homeSizes: HomeSize[] = [
  { id: '1000', label: 'about 1,000 sq ft', phrase: 'about 1,000 sq ft', kw: '6 to 9 kW' },
  { id: '1500', label: 'about 1,500 sq ft', phrase: 'about 1,500 sq ft', kw: '7 to 10 kW' },
  { id: '2000', label: 'about 2,000 sq ft', phrase: 'about 2,000 sq ft', kw: '10 to 14 kW' },
  { id: '2500', label: 'about 2,500 sq ft', phrase: 'about 2,500 sq ft', kw: '12 to 16 kW' },
  { id: '3000', label: '3,000 sq ft or more', phrase: '3,000 sq ft or more', kw: '16 to 20 kW or more' },
];

export interface CoverageChoice {
  id: string;
  label: string;
  run: string;
  covers: string;
  kw: string;
  cost: string;
}

export const coverageChoices: CoverageChoice[] = [
  {
    id: 'essentials',
    label: 'Essentials only',
    run: 'essentials only',
    covers: 'fridge, freezer, sump pump, well pump, furnace fan, some lights',
    kw: '7.5 to 10 kW',
    cost: '$2,000 to $3,500',
  },
  {
    id: 'air',
    label: 'Essentials plus central air and water heater',
    run: 'essentials plus central air and a water heater',
    covers: 'essentials plus central air and a water heater',
    kw: '14 to 18 kW',
    cost: '$4,000 to $5,500',
  },
  {
    id: 'most',
    label: 'Most of the house',
    run: 'most of the house, including larger appliances',
    covers: 'most of the house, including larger appliances',
    kw: '20 to 24 kW',
    cost: '$5,000 to $6,500',
  },
];

export const GENERATOR_SOURCE = 'Source: Angi, whole house generator cost, updated Sep 1, 2026';

export interface GeneratorSelection {
  homeId: string;
  coverageId: string;
  job: string;
  range: string;
  service: string;
}

export function selectGenerator(homeId: string, coverageId: string): GeneratorSelection {
  const home = homeSizes.find((item) => item.id === homeId) ?? homeSizes[2];
  const coverage = coverageChoices.find((item) => item.id === coverageId) ?? coverageChoices[1];
  const range = `For ${home.phrase}, published guides suggest about ${home.kw}. To run ${coverage.run}, guides suggest ${coverage.kw}, with a typical generator cost of about ${coverage.cost} before installation. Go with the larger of the two. This is a rough guide from published tables, not a load calculation. An electrician sizes the generator from your actual loads. ${RANGE_DISCLAIMER}`;
  const job = `${home.label}, ${coverage.label}`;
  return {
    homeId: home.id,
    coverageId: coverage.id,
    job,
    range,
    service: `Generator size, ${job}`,
  };
}

export const costFaqs = [
  {
    q: 'Are these electrician prices for Sioux Falls specifically?',
    a: 'No. They are typical published national ranges from Angi, rounded. Local prices can be higher or lower. Your final price comes after an electrician sees the job.',
  },
  {
    q: 'How much does an electrician charge to upgrade to 200 amps?',
    a: 'Published national figures put a 200 amp panel with installation at about $1,300 to $2,000, more if the meter base and service wires also need replacing.',
  },
  {
    q: 'How much does a whole house generator cost?',
    a: 'Published national figures put whole house generator installation at about $1,500 to $8,800, with an average near $5,200. Size and fuel matter most.',
  },
  {
    q: 'Is the calculator free?',
    a: 'Yes, no sign up. Send the form or call for a real quote.',
  },
];

export const generatorFaqs = [
  {
    q: 'What size generator do I need for a 2,000 square foot house?',
    a: 'Published sizing guides suggest about 10 to 14 kW for a 2,000 square foot home. If you want central air and an electric water heater running too, plan on 14 to 18 kW.',
  },
  {
    q: 'Will a 7,500 watt generator run my house?',
    a: 'Published guides say a 7,500 watt generator can cover essentials like a refrigerator, freezer, well pump, and lighting circuits, but not high demand items like an electric water heater or furnace.',
  },
  {
    q: 'How much does a 20 kW to 24 kW generator cost?',
    a: 'Published national figures put the generator itself at about $5,000 to $6,500, before installation, the pad, and the transfer switch.',
  },
];

export const calculatorTowns = [
  'Sioux Falls',
  'Brandon',
  'Harrisburg',
  'Tea',
  'Hartford',
  'Dell Rapids',
  'Canton',
  'Lennox',
  'Other',
];
