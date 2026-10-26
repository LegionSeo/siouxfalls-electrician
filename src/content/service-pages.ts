export interface ServicePage {
  slug: string;
  title: string;
  /** Document title only. Visible H1 stays `title`. Include the city. No brand suffix. */
  documentTitle?: string;
  sub: string;
  description: string;
  photo: string;
  alt: string;
  answer: string;
  /** Overrides the shared “What’s included” heading. */
  includedHeading?: string;
  includedLead: string;
  included: string[];
  /** Overrides the shared “Signs you need it” heading. */
  signsHeading?: string;
  signsLead: string;
  signs: string[];
  /** Repair-versus-replace list. Omitted on pages that do not need one. */
  compare?: {
    heading: string;
    lead: string;
    rows: { title: string; text: string }[];
  };
  cost: string[];
  /** Overrides the shared “What affects the price” heading. */
  costHeading?: string;
  /** Overrides the shared “24/7 emergency service” heading. */
  emergencyHeading?: string;
  emergency: string;
  visit: string;
  faqs: { q: string; a: string }[];
  related: string[];
  /** Overrides the shared bottom call-to-action heading. */
  ctaHeading?: string;
}

export const servicePages: ServicePage[] = [
  {
    slug: 'electrical-repair',
    title: 'Electrical Repair Sioux Falls SD',
    documentTitle: 'Electrical Repair in Sioux Falls, SD',
    description: 'Electrical repair in Sioux Falls for dead outlets, bad switches, flickering lights, and tripping breakers.',
    sub: 'Dead outlets, warm switches, and breakers that trip.',
    photo: 'service-repair-hero',
    alt: 'Electrician repairing an outlet in a living room',
    answer:
      'Electrical repair in Sioux Falls means finding why an outlet, switch, light, or breaker stopped working and fixing that fault. The check covers the device, the circuit, and the panel before any parts are replaced. Home electrical repair and small-business calls use the same phone number. Call {phone}.',
    signsHeading: 'Signs you need electrical repair',
    includedLead: 'We stay on the circuit that failed. We check the device, the wires, and the breaker before we replace anything.',
    included: [
      'Dead outlets, including a run of outlets that quit on one wall. We follow that whole run, not just the one that looks dead.',
      'Switches that feel warm, stick, or no longer turn the light on. Leave a warm switch off until we open it.',
      'Lights that flicker, dim, or buzz when another load starts. That usually means a loose wire or a circuit doing too much.',
      'Breakers that trip again after a normal reset. If it trips again, leave it off. A failed breaker or a damaged panel is [circuit breaker and panel repair](/services/circuit-breaker-panel-repair).',
      'Loose devices, cracked covers, and fixtures that wobble. We check the box and the device.',
      'A burning smell at a device after the area is safe to enter. If you see smoke, call 911 first, then call us.',
    ],
    signsLead: 'Stop using that circuit and call us if you notice one of these. A hot cover or a burning smell should not wait.',
    signs: [
      'A cover plate is hot or discolored. Stop using that outlet and call us.',
      'You smell burning plastic near an outlet or the panel. If you can reach the breaker safely, turn it off.',
      'The same breaker trips on an ordinary load. That is more than one appliance doing too much once.',
      'Lights dip when the refrigerator or a heater starts. Too many things may be sharing that circuit.',
      'An outlet works only when the plug is held a certain way. The contact inside is loose.',
    ],
    cost: [
      'The price changes with how long it takes to reach the fault, whether the box is buried in finished plaster, and whether the breaker or the wire is the part that failed.',
      'A single device is a smaller job than a circuit that has to be opened in more than one room. Panel space, permit needs, and the materials on the truck also change the number.',
    ],
    emergency: 'Sparking, a burning smell, or a breaker that will not stay on is treated as urgent. If you see smoke or fire, call 911 first.',
    visit: 'You name the room and the device when you call, and you say what changed. On site the circuit is tested before a cover comes off. A failed device stays a device repair. A fault farther down the run is written as the boxes that have to open. The breaker is labeled when the visit ends, and you are shown the circuit that was touched. A second problem found on site is written as its own item before anyone keeps going.',
    faqs: [
      { q: 'What does an electrical repair visit include?', a: 'The visit starts with the room you name and the tests that show whether the device, the connection, or the breaker failed. Parts are replaced after that fault is identified.' },
      { q: 'Can one dead outlet mean a bigger wiring problem?', a: 'Yes. Outlets are often daisy-chained. One loose connection can kill the rest of the run. The repair follows that run instead of only swapping the face that looks dead.' },
      { q: 'Do you repair both houses and small businesses?', a: 'Yes. Homes and businesses use the same phone number. Say whether the problem is in a house, a shop, or an office so the visit matches the building.' },
      { q: 'Should I keep resetting a breaker?', a: 'Reset it once if you can do that safely. If it trips again, leave it off and call. Repeated resets can hide a short or an overload.' },
    ],
    related: ['/services/circuit-breaker-panel-repair', '/services/emergency-electrician', '/services/wiring-rewiring', '/services/panel-upgrades'],
  },
  {
    slug: 'emergency-electrician',
    title: 'Emergency Electrician Sioux Falls SD',
    documentTitle: '24/7 Emergency Electrician in Sioux Falls, SD',
    description: '24/7 emergency electrician in Sioux Falls for sparking, burning smells, and partial power loss. Call 911 if you see smoke or fire.',
    sub: 'Sparking, burning smells, and partial power loss. Call 911 if you see smoke or fire.',
    photo: 'service-emergency-hero',
    alt: 'Emergency electrician checking an outdoor outlet at night',
    answer:
      'An emergency electrician in Sioux Falls handles sparking, a burning smell, a dead section of the building, or a panel that will not reset. Make the area safe, then call. If you see smoke or flames, call 911 before you call an electrician. Call {phone}.',
    includedHeading: 'What an emergency electrical service call includes',
    emergencyHeading: '24/7 emergency electrician service',
    includedLead: 'Call us when it should not wait until tomorrow. If you see smoke or fire, call 911 first.',
    included: [
      'Sparking outlets, switches, or panel buses. Keep everyone away from the spark.',
      'A burning smell with no visible flame. Call us even if you cannot see where it is coming from.',
      'Power out in one room, one floor, or half the panel. Tell us which lights are still on.',
      'A breaker that trips the moment it is reset. Leave that breaker off. Once the area is safe, that fault is [circuit breaker and panel repair](/services/circuit-breaker-panel-repair).',
      'Water that has reached a panel, outlet, or light. Do not touch it. Call us.',
      'Storm damage to a mast, meter, or outdoor circuit after the utility says the service drop is safe. Wait until the power company says the line is safe.',
    ],
    signsLead: 'Call us if waiting could start a fire or shock someone. Tell us if anyone is still inside.',
    signs: [
      'You hear buzzing from the panel. If it is also hot, do not wait until morning.',
      'Lights brighten and dim on their own. Tell us. That can be a loose neutral.',
      'A plug or cord is melted. Unplug it only if you can do that without touching the bad spot.',
      'The panel is warm to the touch. Leave the cover on and call us.',
      'People in the building cannot tell which circuits are still live. Treat any circuit you are not sure about as live.',
    ],
    cost: [
      'The number moves with the hour, the access, and whether the fault is a device or a damaged feeder.',
      'Say what you see and whether anyone is still in the building.',
    ],
    emergency: 'Calls are answered 24 hours a day, including after-hours electrician calls at night and on weekends. Arrival time is not promised. Smoke or fire is a 911 call.',
    visit: 'The first questions are whether anyone is still inside and whether you see smoke. Smoke or fire means the call stops at 911. Otherwise you shut off the breaker you can reach without stepping in water, then you wait. On arrival the live parts are isolated before the fault is traced. That visit covers the repair that makes the building usable again. A panel change or a rewire, if one is needed, is a separate job. No clock time is promised.',
    faqs: [
      { q: 'When should I call 911 instead of an electrician?', a: 'Call 911 if you see smoke, flames, or someone who has been shocked and needs medical help. After the fire department says the building is safe, call an electrician to find the fault.' },
      { q: 'What should I do before the electrician arrives?', a: 'Keep people away from the sparking device. Shut the breaker off if you can reach it without stepping in water or touching a hot cover. Do not pour water on an electrical fire.' },
      { q: 'Is a partial power outage always an emergency?', a: 'Not always. A single tripped breaker can be a simple overload. Partial power with a burning smell, heat, or buzzing should be treated as urgent.' },
      { q: 'Do emergency calls cover businesses too?', a: 'Yes. Shops and offices can lose lights, coolers, or a section of circuits. Say what equipment is down when you call.' },
    ],
    related: ['/services/circuit-breaker-panel-repair', '/services/electrical-repair', '/services/panel-upgrades', '/services/generator-installation'],
  },
  {
    slug: 'outlet-switch-installation',
    title: 'Outlet and Switch Installation Sioux Falls SD',
    documentTitle: 'Outlet & Switch Installation in Sioux Falls, SD',
    description: 'Outlet repair and replacement, new outlets, GFCI protection, dimmers, and 240-volt receptacles in Sioux Falls homes and businesses.',
    sub: 'New outlets, GFCI protection, dimmers, and 240-volt receptacles.',
    photo: 'service-outlet',
    alt: 'Electrician installing an outlet and a switch',
    answer:
      'Outlet and switch installation in Sioux Falls covers outlet repair and replacement, new receptacles, switches, GFCI protection, dimmers, and 240-volt outlets. The circuit is checked for capacity before a new device is tied on. A new outlet can be fished from a basement or attic when a path is open. Call {phone}.',
    includedLead: 'New devices and replacements, not tracing a dead circuit. A dead circuit is a repair.',
    included: [
      'New general-use outlets where a lamp or tool currently uses an extension cord. We put an outlet there so you can put the cord away.',
      'GFCI receptacles in kitchens, baths, garages, and outdoor locations. We check which devices on that circuit still need protection.',
      'Replacement switches, including dimmers on a dimmable lamp. The bulb has to be one that can dim.',
      '240-volt receptacles for a welder, heater, or shop tool. We match the wire and the breaker to the label on your tool.',
      'USB or tamper-resistant devices where the box has room. If the box is packed, we put in a deeper one first.',
      'Covers and boxes that no longer hold the device tight. We snug the device up before the new cover goes on.',
    ],
    signsHeading: 'Signs you need outlet repair or replacement',
    signsLead: 'Call us when the room does not have enough outlets for how you use it. A dead circuit is a repair, not a new outlet.',
    signs: [
      'Extension cords are a permanent setup. A real wall outlet is the safer fix.',
      'A kitchen counter has open spots with no receptacle. We mark those spots with you before we cut.',
      'Outdoor tools plug into an indoor outlet through a window. We can run a proper outdoor circuit for that.',
      'A dimmer buzzes or only works with old bulbs. The dimmer and the bulb have to match.',
      'A shop tool needs 240 volts and the wall only has 120. Your panel needs an open space for that circuit.',
    ],
    cost: [
      'A replacement in an existing box is smaller than a new outlet that needs a new cable back to the panel. GFCI and 240-volt devices need the right breaker and wire size, which changes the materials.',
      'Finished walls, brick, and crowded panels take longer. Permit rules depend on the city.',
    ],
    emergency: 'A melting plug or a switch that smells hot is not a routine install. Treat that as an emergency repair and call right away.',
    visit: 'Start with a photo of the wall and, if you can take it safely, a photo of the panel. The visit confirms the circuit can take the new device and marks where the box will sit. A cable that can be fished is listed that way. A wall that has to open is listed with the opening. Devices go in only after you accept the plan. GFCI and 240-volt work includes the breaker that matches. The new device is tested, and the breaker that feeds it is labeled before the visit ends.',
    faqs: [
      { q: 'Can you add an outlet without opening the whole wall?', a: 'Sometimes, if a cable can be fished from a basement, attic, or an existing box. Finished plaster and brick often need an opening. The visit shows which way the run will go.' },
      { q: 'Where does a GFCI belong?', a: 'Kitchens, bathrooms, garages, unfinished basements, and outdoor outlets are the usual spots. The visit confirms which devices on that circuit still need protection.' },
      { q: 'Will a dimmer work on every light?', a: 'No. The lamp has to be dimmable, and the dimmer has to match the load. A mismatched dimmer buzzes or fails early.' },
      { q: 'Do you install 240-volt outlets for shop tools?', a: 'Yes, when the panel has space and the wire size matches the tool. Bring the tool nameplate or a photo of it.' },
    ],
    related: ['/services/electrical-repair', '/services/wiring-rewiring', '/services/ev-charger-installation'],
  },
  {
    slug: 'panel-upgrades',
    title: 'Panel Upgrades Sioux Falls SD',
    documentTitle: 'Electrical Panel Upgrades in Sioux Falls, SD',
    description: 'Panel upgrades in Sioux Falls for full, warm, or outdated breaker panels and old fuse boxes. Calls answered 24/7.',
    sub: 'Full, warm, or fuse-box panels replaced.',
    photo: 'service-panel-hero',
    alt: 'Electrician replacing a residential breaker panel',
    answer:
      'A panel upgrade in Sioux Falls replaces a full or outdated breaker panel, including an old fuse box, when you need more capacity or open breaker spaces. A failed breaker or a damaged panel is a repair, not this upgrade. The new panel has to match the service and the loads you plan to add. The mast and meter are checked when a service change might be involved. Call {phone}.',
    includedLead:
      'Panel work is planned. It is not the same visit as [repairing a failed breaker or a damaged panel](/services/circuit-breaker-panel-repair).',
    included: [
      'Replacement of a panel that has no open breaker spaces. A full panel cannot safely take another circuit.',
      'Replacement of a fuse box with a breaker panel. We match the new panel to your service and to what you want to run.',
      'Panels that are warm, rusted, or buzzing. We look at the heat or the buzzing before we set the upgrade. If the service size can stay, that visit is a repair.',
      'Service changes coordinated with the utility when the meter or mast has to move. If the power company has to move the meter, we line that up before we swap the panel.',
      'Labeling of circuits after the new panel is on. You get a copy of the new directory.',
      'Room for a later EV charger, shop, or addition when you say that is the goal. Tell us, and we will leave space for it.',
      'Stab-Lok panel replacement when that is the panel you have. The new panel is sized to the service and to the loads you plan to add, the same way as any other panel upgrade.',
    ],
    signsHeading: 'Signs you need a panel upgrade',
    signsLead: 'These are the usual reasons we replace the panel, not just one device. A photo of the panel door helps us on the call.',
    signs: [
      'Every breaker space is full and you still need a circuit. A skinny tandem breaker does not fit every panel.',
      'You still have fuses and want breakers. We match the new panel to your service.',
      'Breakers trip when two ordinary appliances run. Your panel or that circuit may be too small for them.',
      'The panel cover is hot or shows scorch marks. Leave the cover on and call us.',
      'An insurer or a buyer asked about the age and type of the panel. A photo of the label helps us on the call.',
    ],
    cost: [
      'The price moves with the panel size, whether the mast and meter stay, how far the new panel sits from the old one, and whether the city requires a permit and inspection.',
      'A panel in a finished wall or a tight closet takes more labor than one in an open utility room.',
    ],
    costHeading: 'What affects panel upgrade cost',
    emergency: 'A buzzing or hot panel is urgent even if the upgrade itself is scheduled. Call if the panel is hot, and call 911 if you see smoke.',
    visit: 'The visit starts with the cover off when that is safe, plus a list of loads you want to keep or add. The mast and the meter are photographed when a service change might be involved. The notes name the panel size, whether the utility has to move anything, and whether a permit is part of the job. Power is off for the swap. Circuits are landed and labeled before the cover goes back. You keep a copy of the directory. Space for a later charger or shop circuit is noted only if you asked for it.',
    faqs: [
      { q: 'Does a panel upgrade always mean a larger service?', a: 'No. Some homes need a new panel at the same service size because the old one is full or unsafe. A larger service, such as a 200-amp panel upgrade, is a separate decision based on the loads you list.' },
      { q: 'Can you add circuits without replacing the panel?', a: 'Only when there is space and the panel is in sound condition. Tandem breakers are not a fit for every panel. The visit says which path is real.' },
      { q: 'Who inspects a panel change?', a: 'Inside Sioux Falls, the city has its own inspection path. Other towns follow that city plus the state electrical inspection rules. The visit notes what the job needs.' },
      { q: 'How should I prepare for a panel visit?', a: 'Send a photo of the panel with the cover closed and another with it open if you can do that safely. List any large loads you plan to add.' },
    ],
    related: ['/services/circuit-breaker-panel-repair', '/services/ev-charger-installation', '/services/wiring-rewiring', '/services/surge-protection'],
  },
  {
    slug: 'circuit-breaker-panel-repair',
    title: 'Circuit Breaker and Panel Repair Sioux Falls SD',
    documentTitle: 'Circuit Breaker & Panel Repair in Sioux Falls, SD',
    description:
      'Circuit breaker repair and panel repair in Sioux Falls for breakers that keep tripping and panels that are hot, rusted, or damaged. Calls answered 24/7.',
    sub: 'Tripping breakers and damaged panels. Not a capacity upgrade.',
    photo: 'service-inspect',
    alt: 'Electrician inspecting an open breaker panel',
    includedHeading: 'Why does a breaker keep tripping?',
    signsHeading: 'What are the signs your panel needs repair or replacement?',
    emergencyHeading: 'What should you do right now?',
    answer:
      'Circuit breaker and panel repair in Sioux Falls means finding why a breaker trips, or why a panel is hot, rusted, or damaged, and fixing that fault. Replacing one failed breaker is not a [panel upgrade](/services/panel-upgrades) for more capacity. Homes and small businesses use the same number. Call {phone}.',
    includedLead:
      'A breaker trips to stop an overload, a short, a ground fault, or heat from a loose connection. Resetting it does not tell you which one. We test the circuit and the panel before we replace a part.',
    included: [
      'Too much load on one circuit. In a Sioux Falls winter a space heater or a microwave can trip a sound breaker that already shares a run. Unplug the extra load, then reset the breaker once.',
      'A short, where a hot wire touches a neutral or a ground. The breaker trips the instant it is reset. Leave that breaker off. Do not keep forcing it on.',
      'A ground fault near a kitchen, bath, garage, or outdoor outlet. A GFCI or an AFCI can open before a standard breaker does. We find the device or the cable that is leaking.',
      'A loose wire at the breaker, at a device, or in a splice. The cover may feel warm, or lights may dip when a motor starts. We remake the connection that is heating. A larger breaker is not the fix.',
      'A breaker that opens below its rating because it is worn out. We test that before we change it. The replacement has to be the type that panel is built to hold. A new breaker does not fix a damaged wire.',
      'Water, rust, or a breaker that will not seat on the bus. That is panel damage. If the service size can stay, we repair or replace the panel. More spaces or more amps is a panel upgrade.',
    ],
    signsLead:
      'These are signs the panel or a breaker has failed. A panel that still works but has no open spaces, or a fuse box you want to leave so you can add a charger or a shop, belongs on the [panel upgrades](/services/panel-upgrades) page. A Stab-Lok panel replacement belongs there too.',
    signs: [
      'The same breaker trips during ordinary use, then trips again after one reset. Stop resetting it and call.',
      'The panel cover is warm, you smell hot plastic, or you see scorch marks around a breaker. Leave the cover on.',
      'A breaker will not stay on, rocks in its slot, or shows melted plastic. That breaker is not a reliable shutoff.',
      'Rust, water stains, or white corrosion inside the panel. Moisture and a live bus should not be left until the next day.',
      'Buzzing from the panel, or lights that brighten and dim on their own. A loose connection can do that, including a loose neutral. Tell us which rooms are affected.',
    ],
    compare: {
      heading: 'Should you repair the breaker or replace the panel?',
      lead: 'Repair and replacement here mean the equipment failed. Adding capacity is a different job. We say which one it is after the panel is open and the circuit is tested.',
      rows: [
        {
          title: 'Replace one breaker',
          text: 'The panel is dry and the bus is clean, one breaker fails the test, and the cable on that circuit is intact. We install a breaker listed for that panel and label the circuit.',
        },
        {
          title: 'Repair the circuit',
          text: 'The breaker is doing its job. The fault is a device, a splice, or a damaged cable. That visit is an [electrical repair](/services/electrical-repair), and the breaker stays unless the test says it is finished.',
        },
        {
          title: 'Replace a damaged panel',
          text: 'The bus is burned, the enclosure is rusted through, or breakers no longer seat. The replacement is sized to the service you already have, unless you also need more capacity.',
        },
        {
          title: 'Upgrade for capacity',
          text: 'Every space is full, you still have fuses and want room for new loads, or you are adding an EV charger, a hot tub, or a shop. That is a [panel upgrade](/services/panel-upgrades), including the meter and mast when the service size changes.',
        },
      ],
    },
    cost: [
      'The price changes with how long the test takes, whether one breaker failed or the bus is damaged, and whether a permit is required. Inside Sioux Falls, the city has its own inspection path. [Brandon](/locations/brandon) and the other towns outside Sioux Falls follow the state electrical inspection rules, plus any local permit that town requires.',
      'A breaker on a sound panel is a smaller job than a panel that has to come out, or a cable opened in finished plaster. A tight closet takes more labor than an open utility room. Parts follow the panel brand and the breaker that bus will accept.',
    ],
    costHeading: 'What affects breaker repair and replacement cost',
    emergency:
      'Reset a tripped breaker once, if you can reach it without touching a hot cover or standing in water. If it trips again, leave it off. Do not take the panel cover off. If you see smoke or fire, leave and call 911 before you call an electrician. A burning smell, buzzing, or a breaker that will not stay on should not wait. Sparking at the panel is an [emergency electrician](/services/emergency-electrician) call.',
    visit:
      'You say which breaker opened, which rooms went dark, and what you already reset. A photo of the closed panel door helps when you can take it safely. On site the circuit is tested before a breaker is changed. A sound panel with one failed breaker stays a breaker replacement. A burned bus, rust, or a breaker that will not seat is written as a panel repair. A full panel, or a plan to add a large load, is a panel upgrade and a separate job. The breaker is labeled before we leave, and you are shown the circuit. A second problem found on site is its own item before anyone keeps going.',
    faqs: [
      {
        q: 'Why does my breaker keep tripping?',
        a: 'It is opening for an overload, a short, a ground fault, or a loose connection that is heating up. A worn breaker can also open below its rating. Reset it once if that is safe. If it trips again, leave it off and call so the circuit can be tested instead of guessed at.',
      },
      {
        q: 'Is a tripping breaker the same as a bad panel?',
        a: 'No. Many trips are one circuit doing too much, or a fault in a device or a cable. The panel needs repair when it is hot, rusted, scorched, buzzing, or when a breaker will not seat. A panel that only lacks empty spaces is a capacity question, not a failed breaker.',
      },
      {
        q: 'Can you replace one breaker without replacing the panel?',
        a: 'Yes, when the panel is in sound condition and the new breaker is the type that panel is made to hold. A burned bus, a rusted enclosure, or a breaker that will not stay seated is not a one-breaker repair.',
      },
      {
        q: 'When is panel replacement a repair, and when is it an upgrade?',
        a: 'Replacing a damaged panel at the same service size is a repair. A larger service, a fuse box changed so you can add circuits, or space for an EV charger or a shop is a panel upgrade. The visit names which one matches the panel in front of us.',
      },
      {
        q: 'Do you repair breakers and panels in Brandon?',
        a: 'Yes. [Brandon](/locations/brandon) and the other towns on the service area page use this same phone number. Older houses near Main Street in Brandon are where a small service or a fuse box shows up more often. A failed breaker there is a repair. A service that is too small for a new load is an upgrade.',
      },
    ],
    related: ['/services/panel-upgrades', '/services/electrical-repair', '/services/emergency-electrician'],
  },
  {
    slug: 'wiring-rewiring',
    title: 'Wiring and Rewiring Sioux Falls SD',
    documentTitle: 'Home Wiring & Rewiring in Sioux Falls, SD',
    description: 'Wiring and rewiring in Sioux Falls for old circuits, added rooms, and whole-house rewires. Calls answered 24/7.',
    sub: 'Old circuits, added rooms, and rewires.',
    photo: 'service-wiring',
    alt: 'Electrician pulling new cable through open wall studs',
    answer:
      'Wiring and rewiring in Sioux Falls covers old circuits, added rooms, and rewires of one area or a whole house. The plan says which cables stay and which are replaced. Attic and basement paths are checked before plaster is opened. Call {phone}.',
    includedLead: 'Rewiring is planned work. A single dead outlet is a repair unless the cable itself is bad.',
    included: [
      'New circuits for a kitchen, addition, or garage workshop. We list each new circuit before we pull cable.',
      'Replacement of brittle or damaged cable found during a repair. We treat that cable as its own job.',
      'Rewiring one room when the rest of the house can stay. We tell you what can stay on the old wiring.',
      'Whole-house rewires when many circuits are past use. One bad device is a repair. A rewire is the bigger job.',
      'Dedicated circuits for a heater, pump, or fixed appliance. The label on the appliance sets the breaker size.',
      'Fishing cable where the finish can be saved, and open-wall runs during a remodel. We open plaster only where the wire has to go.',
    ],
    signsLead: 'Call us when the trouble is in the cable, not just the device. One dead outlet is still a repair unless the cable is bad.',
    signs: [
      'Lights dim all over the house, not in one fixture. That is bigger than one lamp.',
      'You find cloth-covered or cracked cable in an attic or basement. Leave it alone until we replace it.',
      'Outlets have no ground and you need equipment that requires one. We add a ground only on a real path back to the panel.',
      'A remodel opens walls and the old wiring is in the way. That is a good time for us to replace the cable you can see.',
      'Breakers are the right size and still trip because the circuit is shared too widely. We can add a circuit and split that load.',
    ],
    cost: [
      'Opening finished walls, plaster, and brick costs more labor than wiring a house that is already down to studs. The length of each run and the number of new circuits change the materials.',
      'A one-room rewire is not priced like a whole house. Permit and inspection needs depend on the city.',
    ],
    emergency: 'Exposed glowing or burning cable is an emergency, not a remodel. Shut the breaker off if you can do it safely and call.',
    visit: 'The walk-through marks which rooms stay on the old cable and which rooms get new cable. Attic and basement paths are checked before anyone talks about opening plaster. The notes list each new circuit, the path it takes, and the openings required. Walls open only where that list says so. New cable is pulled, devices are landed, and the panel directory is updated. Old cable that is left behind is made safe at both ends. Work held for a later phase is written as its own item.',
    faqs: [
      { q: 'Do you rewire one room without doing the whole house?', a: 'Yes, when that circuit can be separated safely. The notes say what stays on the old wiring and what is new.' },
      { q: 'Can new wire be fished without wrecking the plaster?', a: 'Often in attics and basements. Lathe and plaster, brick, and insulated walls are slower. The visit tells you where an opening is required.' },
      { q: 'What if the house has aluminum wiring?', a: 'If aluminum branch wiring is found, those connections are their own scope.' },
      { q: 'Will a rewire include new devices?', a: 'The new cable ends at new devices where the old ones will not grip the new wire. A device swap by itself is outlet and switch work.' },
    ],
    related: ['/services/electrical-repair', '/services/panel-upgrades', '/services/lighting-installation'],
  },
  {
    slug: 'generator-installation',
    title: 'Generator Installation Sioux Falls SD',
    documentTitle: 'Generator Installation in Sioux Falls, SD',
    description: 'Home backup generator installation in Sioux Falls: standby generators, transfer switches, and inlets for a portable generator. No backfeed setups.',
    sub: 'Standby units, transfer switches, and inlets. No backfeed setups.',
    photo: 'service-generator',
    alt: 'Electrician checking a home standby generator',
    answer:
      'Generator installation in Sioux Falls covers a home backup generator (a standby unit), a transfer switch, or an inlet for a portable generator. The panel has to accept the switch, and the generator must not backfeed the utility lines. A portable inlet is a different job from a standby set. Call {phone}.',
    includedLead: 'The safe part is the transfer switch, not just setting a generator on a pad. We will not hook up a double-ended cord.',
    included: [
      'Manual transfer switches and interlock kits that the panel can accept. We check your panel before we pick a kit.',
      'Inlets and cords for a portable generator you already own. Send us the model or a photo of the label.',
      'Standby units with an automatic transfer switch when the site fits. The pad and the fuel line are part of that job.',
      'A circuit list so the generator is not asked to run the whole house unless it is sized for that. We write down what it will run before we connect the switch.',
      'Coordination with the utility when a standby set needs their approval. We call the power company only when they have to sign off.',
      'A clear refusal of any double-ended cord or backfeed trick. Backfeeding can put power on the utility lines.',
    ],
    signsHeading: 'Signs you need a home backup generator',
    signsLead: 'Think about a generator before storm season if an outage costs you heat, a sump, or a medical device. If you already own one, have the model number handy.',
    signs: [
      'You run a generator with an extension cord through a door. An inlet is the right way to bring that power inside.',
      'A sump, freezer, or oxygen machine has to stay on. Tell us those first so we put them on the generator.',
      'The panel has no inlet and no transfer switch. Without one, the generator stays off your house wiring.',
      'A previous outage lasted long enough to spoil food or flood a basement. We start the list with what you lost.',
      'You bought a generator and it is still in the box. The label tells us what your panel can take.',
    ],
    cost: [
      'A portable inlet is a smaller job than a standby set with a concrete pad, gas piping, and an automatic switch. Fuel type, distance from the panel, and the circuits you choose all change the price.',
      'Bring the model number or a photo of the nameplate.',
    ],
    costHeading: 'What affects emergency generator installation cost',
    emergency: 'Do not backfeed the house during an outage. That can energize the utility lines. Call for a proper inlet instead of improvising in the storm.',
    visit: 'Send the model or a photo of the nameplate when you already own the unit. On site the panel is checked for a place to land a transfer switch or an interlock, and the pad or inlet spot is marked. The notes list the circuits that will be on the generator and the circuits that stay off. A double-ended cord is not offered. After the switch is in, those circuits are tested with the utility separated by the transfer equipment. The utility is contacted only when that setup needs their approval.',
    faqs: [
      { q: 'Can I plug a generator into a dryer outlet?', a: 'No. A dryer outlet is not a transfer switch. Backfeeding can send power onto the utility lines and injure a line worker. Use an inlet and a transfer method.' },
      { q: 'Will a portable generator run the whole house?', a: 'Usually no. The circuits that fit the unit you have are the ones on the generator, such as a furnace fan, a fridge, and a few lights.' },
      { q: 'Do standby generators need the utility involved?', a: 'Often yes, because the automatic switch sits between the meter and the panel. The visit notes when that approval is part of the job.' },
      { q: 'Where should the generator sit?', a: 'Away from windows and the intake of a furnace, on a pad the manufacturer allows. The visit marks a spot.' },
    ],
    related: ['/services/panel-upgrades', '/services/emergency-electrician', '/services/surge-protection'],
  },
  {
    slug: 'ev-charger-installation',
    title: 'EV Charger Installation Sioux Falls SD',
    documentTitle: 'EV Charger Installation in Sioux Falls, SD',
    description: 'Level 2 home EV charger installation in Sioux Falls, including the circuit and a panel check. Calls answered 24/7.',
    sub: 'A Level 2 home charger on a new circuit, after the panel is checked.',
    photo: 'service-ev-hero',
    alt: 'Electrician mounting a home EV charger in a garage',
    answer:
      'EV charger installation in Sioux Falls puts a Level 2 home charger on a new circuit after the panel is checked for capacity. A charger you already bought can be mounted if it matches the circuit. The run is measured from the panel to the parking spot. Call {phone}.',
    includedLead: 'The charger is only half the job. The circuit and the panel decide whether it can run.',
    included: [
      'The panel is checked before a charger is installed. We will not mount a charger your panel cannot feed.',
      'A new 240-volt circuit from the panel to the garage or outdoor pad. We measure that run while we are there.',
      'Mounting a charger you already own, or one chosen before the visit. The label has to match the wire and the breaker.',
      'An outdoor pedestal or wall mount when the parking spot is not inside. The charger has to be rated for the weather.',
      'Permit paperwork when the city requires it. We pull the permit with the office your city uses.',
      'A load talk if the panel is already full. If it is full, we do the panel before the charger.',
    ],
    signsLead: 'Call us before you buy a charger if you are not sure your panel can feed it. A full panel means the charger has to wait.',
    signs: [
      'You park in a garage that has only 120-volt outlets. We add a 240-volt circuit for a Level 2 charger.',
      'The panel has no empty spaces. We look for space before we give the charger a breaker.',
      'You want overnight charging instead of a cord out a window. A cord through the window should not be your everyday setup.',
      'The parking spot is outside and needs a weatherproof mount. We run the conduit to that spot.',
      'A previous visit said the panel must grow first. In that case we do the panel before the charger.',
    ],
    cost: [
      'A charger on the other side of the panel wall is a shorter run than one at the far end of the garage or on a detached pad. Trenching, finished walls, and a panel upgrade change the price.',
      'Charger brand and amperage change the wire and the breaker. Send a photo of the panel and say where the car parks.',
    ],
    costHeading: 'What affects EV charger installation cost',
    emergency: 'A charger that smells hot, trips as soon as the car plugs in, or shows a burned plug is a repair, not a new install. Stop using it and call.',
    visit: 'Say where the car parks, and send a photo of the panel plus the charger label if you already bought one. The visit measures the run and checks spare capacity. If the panel cannot feed the charger, the job stops at a panel upgrade instead of treating the charger as ready. If it can, the notes list the breaker, the wire path, and any trench or wall opening. The unit is mounted and tested. The breaker is labeled with the parking spot it serves.',
    faqs: [
      { q: 'Can every panel take a Level 2 charger?', a: 'No. The panel needs space and spare capacity. Some houses need a panel upgrade first. The visit says which one is true before the charger is sold as ready.' },
      { q: 'Do you install a charger I already bought?', a: 'Yes, if the unit is meant for a home circuit and the nameplate matches the wire and breaker. Bring the manual or a photo of the label.' },
      { q: 'Is a permit part of an EV circuit?', a: 'Often yes for a new 240-volt circuit. The visit names the city office when the job is inside a town that issues its own permits.' },
      { q: 'Can the charger be outside?', a: 'Yes, with a weather-rated unit and a mount that keeps the cord off the ground. The parking spot decides the route of the conduit.' },
    ],
    related: ['/services/panel-upgrades', '/services/wiring-rewiring', '/services/outlet-switch-installation'],
  },
  {
    slug: 'lighting-installation',
    title: 'Lighting Installation Sioux Falls SD',
    documentTitle: 'Lighting Installation in Sioux Falls, SD',
    description: 'Recessed lights, LED swaps, new fixtures and outdoor lighting installed in Sioux Falls, SD and nearby towns. Calls answered 24/7.',
    sub: 'Recessed lights, LED swaps, and outdoor lighting.',
    photo: 'service-lighting-hero',
    alt: 'Electrician installing recessed lights in a kitchen ceiling',
    answer:
      'Lighting installation in Sioux Falls covers recessed lights, LED swaps, new fixtures, and outdoor lighting. The existing circuit is checked before more lamps are added to it. The layout is marked in the room before a hole is cut. Call {phone}.',
    includedHeading: 'What’s included in lighting installation',
    includedLead: 'We install new lights and we replace old ones, inside and outside. We check the circuit before we add more lamps.',
    included: [
      'Recessed lights in kitchens, halls, and living rooms. We mark the holes with you before we cut.',
      'Swapping old fixtures for LED fixtures you already chose. The box has to hold the new weight.',
      'Under-cabinet lights fed from a proper switch. We feed them from a real switch, not a plug-in strip.',
      'Outdoor wall lights, soffit lights, and yard circuits, including landscape lighting repair when a yard light or its wiring has quit. A long run across the yard usually gets its own circuit.',
      'Chandelier installation for a hanging fixture you already chose, when the box can carry the weight. A heavy chandelier that needs a listed brace is called out before it goes up.',
      'Dimmer swaps when the new lamps can dim. If they do not match, the light flickers.',
      'Repair of a fixture that fell or lost its support, when the box is the problem. We fix the box before the light goes back up.',
    ],
    signsLead: 'Call us when the room is dark where you actually stand. We mark the layout with you before we cut a hole.',
    signs: [
      'A kitchen has one center light and the counters are in shadow. We aim the new lights at the counters you use.',
      'Bulbs burn out quickly or the fixture buzzes. We check the socket and the connection, not just the bulb.',
      'An outdoor light is fed by an extension cord. That light needs a real outdoor circuit, and we can run it.',
      'You are remodeling and the ceiling is open anyway. Open joists make the new runs easier.',
      'A stair or hall has no switch at each end. A second switch needs a traveler wire or a new cable.',
    ],
    cost: [
      'Recessed lights in an open attic are simpler than the same lights under a finished second floor. Insulation, joist direction, and the number of holes change the labor.',
      'Outdoor runs that need trench or conduit cost more than a fixture on an existing box.',
    ],
    emergency: 'If a light sparks or smells like burning, turn it off and call us. If you cannot tell where the smell is coming from, call anyway.',
    visit: 'The layout is marked in the room before a hole is cut, so the dark corners are the ones that get a light. The notes list the count, whether those lamps share a circuit or need a new one, and whether a dimmer changes. A joist or a duct can force a mark to move, and that move is pointed out before the saw runs. Fixtures are switched and left with lamps that match the dimmer when a dimmer was part of the job.',
    faqs: [
      { q: 'Can recessed lights go in any ceiling?', a: 'No. Joists, ducts, and the wrong fixture for insulation can block a spot. The visit marks holes that are actually possible.' },
      { q: 'Do you install fixtures I bought?', a: 'Yes, when the box can carry the weight and the wiring matches. Heavy fixtures need a fan-rated or listed brace, which may be a different visit.' },
      { q: 'Will new LED lamps work on my old dimmer?', a: 'Only if the dimmer is listed for those lamps. A mismatch flickers. A dimmer change can be part of the same visit.' },
      { q: 'Can outdoor lights share an indoor circuit?', a: 'Sometimes. The load and the GFCI needs decide it. A long yard run is usually its own circuit.' },
    ],
    related: ['/services/ceiling-fan-installation', '/services/wiring-rewiring', '/services/commercial-electrician'],
  },
  {
    slug: 'ceiling-fan-installation',
    title: 'Ceiling Fan Installation Sioux Falls SD',
    documentTitle: 'Ceiling Fan Installation in Sioux Falls, SD',
    description: 'Ceiling fan installation in Sioux Falls with fan-rated boxes, replacements, and fans that include a light.',
    sub: 'Fans hung on a box rated for the weight.',
    photo: 'service-fan',
    alt: 'Electrician mounting a ceiling fan on a braced box',
    answer:
      'Ceiling fan installation in Sioux Falls hangs the fan on a box rated for that weight and motion. A regular light box is replaced when it cannot carry a fan. The box is checked before the fan goes up. Call {phone}.',
    includedLead: 'The brace is the job. The fan is what you see after the box is right.',
    included: [
      'New fans on a box that is already fan-rated. We check that box before we hang the fan.',
      'Replacement of a light box with a fan-rated brace. We do not leave a light box holding a fan.',
      'Fans that include a light kit and a switch leg. The light uses the switch you already have.',
      'Swaps of an old fan that wobbles because the box moved. We fix the brace, not just the blades.',
      'Ceiling fan repair when the fan hums, will not start, or the light kit fails and the box is still sound.',
      'A two-switch setup when the wall already has the travelers or a second cable. If you need a new switch leg, we open the wall.',
      'A stop-work call if the ceiling structure will not hold the brace. We will not hang a fan on a ceiling that cannot hold it.',
    ],
    signsLead: 'Call us when the box in the ceiling was only meant for a light. We check that box before the fan goes up.',
    signs: [
      'The old fixture is a simple dome on a plastic box. We replace that box before we hang a fan.',
      'A fan wobbles and the canopy shifts. We look at the box first, not the blades.',
      'You want a fan in a bedroom that has only a pull-chain light. The box tells us what the rest of the job is.',
      'The ceiling joists are hidden and you do not know the box type. We open the canopy and look.',
      'A light kit on the fan flickers when the blades start. We check the connections in the canopy.',
    ],
    cost: [
      'A fan on an existing rated box is a short visit. Cutting in a brace from the attic, or from the room when there is no attic, takes longer and can need a ceiling opening.',
      'High ceilings, vaulted drywall, and a new switch leg change the price. Tell us the ceiling height.',
    ],
    emergency: 'A fan that fell or is hanging by the wires should stay off. Do not spin it back onto a damaged box.',
    visit: 'The box decides the rest of the job. A box that is already fan-rated and solid gets the fan you bought. A light box means the job includes a rated brace, and the attic is checked as the way in. The canopy is checked for movement before the visit ends. A light kit uses the switch leg that is already there. A second switch is added only when the wall is opened for a new switch leg.',
    faqs: [
      { q: 'Can any light box hold a ceiling fan?', a: 'No. Fan boxes are listed for the weight and the motion. A standard light box can crack or pull out. The visit checks the box before the fan goes up.' },
      { q: 'Do you install a fan I already bought?', a: 'Yes, if the brace matches that fan. Bring the instructions. Odd weights and very large fans may need a different brace.' },
      { q: 'Can the light and the fan have separate switches?', a: 'Only when a second switch leg exists or can be added. The visit shows if the wall has to open.' },
      { q: 'What if there is no attic above the room?', a: 'The brace can often be installed through the fixture hole. Some ceilings still need a larger opening. That opening is part of the job, not a surprise after the fan is unboxed.' },
    ],
    related: ['/services/lighting-installation', '/services/outlet-switch-installation', '/services/electrical-repair'],
  },
  {
    slug: 'hot-tub-wiring',
    title: 'Hot Tub Wiring Sioux Falls SD',
    documentTitle: 'Hot Tub Wiring in Sioux Falls, SD',
    description: 'Hot tub electrical installation in Sioux Falls, SD: the dedicated circuit and disconnect your tub needs, sized from its nameplate. Calls answered 24/7.',
    sub: 'The dedicated circuit and disconnect a tub needs, sized from the nameplate.',
    photo: 'service-hottub',
    alt: 'Electrician wiring a disconnect near a hot tub',
    answer:
      'Hot tub wiring in Sioux Falls is the dedicated circuit and disconnect the tub needs, sized from the tub nameplate. The panel is checked before a trench or conduit is laid. The disconnect is tested before the tub is connected. Call {phone}.',
    includedLead: 'The work is the electrical run to the tub. The visit does not set the tub.',
    included: [
      'A dedicated circuit matched to the tub nameplate. Your tub does not share the garage circuit.',
      'A disconnect within sight of the tub when the rules for that site require it. We mark that spot when we walk out to the pad.',
      'Conduit or cable on the path from the panel to the pad. We note concrete and gates before anyone digs.',
      'GFCI protection of the type the tub listing requires. The tub listing tells us which kind, so we do not guess.',
      'A panel check, and a panel upgrade if there is no room. If the panel is full, we do not dig until that is solved.',
      'Coordination with the tub delivery so the circuit exists before the water is filled. We do not set or fill the tub on this visit.',
    ],
    signsLead: 'Call us before the tub shows up if the pad has no power yet. Send a photo of the label on the tub.',
    signs: [
      'The spa salesman said “your electrician will handle the power.” Send us the label so we can size it.',
      'The panel is full. We take care of that before anyone digs.',
      'The pad is far from the house. A longer run needs the right wire and a longer path.',
      'An old tub is being swapped and the old circuit size is unknown. We size the new circuit from the new label.',
      'A previous hookup used an extension or a shared circuit. We replace that. We do not reuse it.',
    ],
    cost: [
      'Distance, trenching, concrete, and a full panel are the usual cost drivers. A tub on the other side of the yard is not the same job as a tub against the house.',
      'The nameplate amperage sets the wire and the breaker. Send a photo of the nameplate and of the panel.',
    ],
    emergency: 'A tub that trips, smells hot, or has a chewed cord should be left off. Do not reset a GFCI over and over.',
    visit: 'Send the tub nameplate before any trench is discussed. The visit walks from the panel to the pad and notes concrete, gates, and the distance. The notes list the breaker size, the wire method, where the disconnect sits, and whether the panel has room. If the panel is full, digging is not the next step. The circuit is built and tested at the disconnect before the tub is connected. Final landing waits until the tub is sitting where it will stay. The tub is not set or filled on this visit.',
    faqs: [
      { q: 'Can the tub share a circuit with the garage?', a: 'No. A hot tub needs its own circuit sized from its nameplate. Shared circuits trip and can overheat.' },
      { q: 'Do you need the tub on site to wire it?', a: 'The nameplate is enough to build the circuit. The final connection waits until the tub is set where it will stay.' },
      { q: 'What if the panel is full?', a: 'Then the tub job includes a panel upgrade, or the tub circuit waits. Space is checked before the trench is dug.' },
      { q: 'Who pulls the permit?', a: 'When the city requires a permit, it is part of the job. The office depends on which town the pad is in.' },
    ],
    related: ['/services/panel-upgrades', '/services/wiring-rewiring', '/services/ev-charger-installation'],
    ctaHeading: 'Need a hot tub electrician in Sioux Falls?',
  },
  {
    slug: 'electrical-inspections',
    title: 'Electrical Inspections Sioux Falls SD',
    documentTitle: 'Electrical Inspections in Sioux Falls, SD',
    description: 'Home electrical inspection in Sioux Falls: a private safety check of panels, wiring, and devices. This is not a city inspection.',
    sub: 'A private look at the panel and visible wiring. This is not a city inspection.',
    photo: 'service-inspect',
    alt: 'Electrician inspecting an open breaker panel',
    answer:
      'An electrical inspection is a private safety check of the panel, wiring, and devices in a Sioux Falls area building. It is not a city or state inspection and it does not replace a permit inspection. You get a written list of what was seen. Call {phone}.',
    includedLead: 'The visit looks. It does not certify the whole building.',
    included: [
      'A look at the panel cover, breakers, and any signs of heat. We take the cover off only when it is safe.',
      'A sample of outlets, switches, and visible cable in the attic or basement. We do not open walls to chase hidden cable.',
      'Notes on missing covers, open splices, and doubled-up devices. You can use that list when you plan repairs.',
      'A written list you can use to plan repairs. It is not a city approval.',
      'Repairs after the look are a separate job. You pick which items you want us to come back for.',
      'A clear statement that city and state inspectors still do official inspections. This visit does not close a permit.',
    ],
    signsLead: 'People book this before a project, after a scare, or when a buyer asks what an electrician sees. You get a written list of what we saw.',
    signs: [
      'You are buying a house and want a second look at the panel. Bring any report you already have with you.',
      'A breaker melted or a cover is scorched. We look at that first.',
      'The basement was finished by a previous owner and you do not trust the wiring. We can see the panel and any cable that is already open.',
      'An insurance letter asked about the panel type. A photo of the panel label helps us.',
      'You want a list before a remodel opens the walls. We note what you can replace while the walls are open.',
    ],
    cost: [
      'A walkthrough of a small house is a different visit from a large shop with more than one panel. Access to attics, locked rooms, and buried panels changes the time.',
      'Repair work is separate from the inspection.',
    ],
    costHeading: 'What affects electrical inspection cost',
    emergency: 'If something is sparking or you smell burning, call us right away. Leave that device off, and call 911 if you see smoke.',
    visit: 'You walk the building along or you leave a key and a room list. The panel is opened when that is safe. Cable that can be seen in the attic, the basement, and open joists is noted. Devices are sampled. They are not pulled from every wall. Findings go on a written list. That list is not a city approval. Repairs you want are a separate job drawn from the items you pick.',
    faqs: [
      { q: 'Is this the same as a city inspection?', a: 'No. City and state inspectors sign off on permitted work. This visit is a private look for the owner. It does not close a permit.' },
      { q: 'Will you open every wall?', a: 'No. The check uses the panel and the wiring that can be seen. Hidden cable stays hidden unless you approve an opening as a repair.' },
      { q: 'Can the same visit include repairs?', a: 'Small, safe repairs can happen on the same visit. Larger work is scheduled on its own.' },
      { q: 'Do you inspect businesses?', a: 'Yes. Say how many panels and whether the visit is during open hours so equipment can be shut off if needed.' },
    ],
    related: ['/services/electrical-repair', '/services/panel-upgrades', '/services/surge-protection'],
  },
  {
    slug: 'surge-protection',
    title: 'Surge Protection Sioux Falls SD',
    documentTitle: 'Whole-Home Surge Protection in Sioux Falls, SD',
    description: 'Whole-house surge protection installed at the panel in Sioux Falls, SD and nearby towns like Brandon and Tea. Calls answered 24/7.',
    sub: 'A whole-house device at the panel.',
    photo: 'service-surge',
    alt: 'Whole-house surge protector installed beside a breaker panel',
    answer:
      'Surge protection in Sioux Falls means a whole-home surge protector installed at the panel so a spike has a path before it reaches the branch circuits. Point-of-use strips are not a substitute. The panel is opened to find a place for the device. Call {phone}.',
    includedLead: 'The device sits at the service equipment. It does not replace a ground or a damaged panel.',
    included: [
      'A surge protective device listed for the panel you have. Your panel brand decides which one fits.',
      'A breaker space or a side mount, depending on the panel. A full panel may not have a spot for it.',
      'A check that the grounding electrode path is present. If that ground path is missing, we fix it first or we wait on the device.',
      'Labels so the next person knows the device is there. We check the indicator light before the cover goes back on.',
      'A note that plug-in strips can still be used for electronics. You can still keep a strip on your computer.',
      'A stop if the panel is too damaged to accept the device safely. If the panel is damaged, we repair that first.',
    ],
    signsLead: 'People add this after a storm, a power surge, or a string of dead electronics. A plug-in strip does not cover the whole house.',
    signs: [
      'Several devices failed at the same time after a storm. That is why people put a protector on the panel.',
      'The house has no whole-house device and you are adding an EV charger or a furnace board. Those boards do not like spikes on the wires.',
      'A previous protector at the panel has a failed indicator. If that light says it failed, we should look at it.',
      'You want one device instead of a strip on every desk. You can keep the strips. The panel device covers power coming into the house.',
      'The panel is being replaced and the protector can go in with it. That is often the easiest time to add one.',
    ],
    cost: [
      'A protector added to a sound panel is a short visit. A panel that has no space, or a grounding path that has to be repaired first, is a larger job.',
      'Device type follows the panel brand and the service size.',
    ],
    emergency: 'A surge device that is burned, cracked, or buzzing should be left alone. Call for a repair. It did its job or it failed, and either way it should be looked at.',
    visit: 'The panel is opened to find a place for the protector and to see that a grounding path is actually there. A damaged or full panel means the protector waits. A panel that can take the device gets a note that names the unit and the breaker space. It is mounted, landed, and labeled. The indicator is checked before the cover goes on. Plug-in strips can stay on computers and televisions. A burned indicator later is a new visit, not a reason to ignore the device.',
    faqs: [
      { q: 'Does a power strip count as whole-house protection?', a: 'No. A strip only covers what is plugged into it. A panel device covers the service. Many people use both.' },
      { q: 'Will this stop lightning from hitting the house?', a: 'No. A direct strike can still destroy equipment. The device is for surges that come in on the wires, not a promise against a strike.' },
      { q: 'Can it be added during a panel upgrade?', a: 'Yes. That is often the simplest time, because the cover is already off and the new panel can include a space for it.' },
      { q: 'Does every panel accept one?', a: 'Most modern panels do. Damaged, obsolete, or full panels may need repair or replacement first. The visit says which.' },
    ],
    related: ['/services/panel-upgrades', '/services/generator-installation', '/services/electrical-inspections'],
  },
  {
    slug: 'smoke-co-detectors',
    title: 'Smoke and CO Detectors Sioux Falls SD',
    documentTitle: 'Smoke & CO Detector Installation in Sioux Falls, SD',
    description: 'Hardwired smoke alarms and carbon monoxide detectors installed or replaced in Sioux Falls, SD homes and nearby towns. Calls answered 24/7.',
    sub: 'Hardwired smoke alarms and carbon monoxide detectors.',
    photo: 'service-smoke',
    alt: 'Electrician installing a hardwired smoke detector on a ceiling',
    answer:
      'Smoke detector installation in Sioux Falls replaces or adds hardwired smoke alarms and carbon monoxide detectors, including the interconnect wire when the house already has it. Each alarm is dated and tested from its button. Call {phone}.',
    includedLead: 'This is device and circuit work, from smoke detector installation to hardwired smoke detector replacement.',
    included: [
      'Replacement of hardwired smoke alarms that are past their date or that chirp after a new battery. That date means the sensor is done, not just the battery.',
      'Carbon monoxide alarms on levels that already have a place for them. We use a combined head only if you want one.',
      'Interconnect wiring where a cable is already in the box. If the traveler wire is missing, that is its own job.',
      'New devices during a remodel when the ceiling is open. An open ceiling is the easy time to add a wire.',
      'A check that the circuit feeding the alarms is the one that should stay on. We find that circuit while we are there.',
      'Battery-only advice when a house has no alarm circuit and a hardwired run is a separate job. We will not tack a hardwired run onto the end of a simple swap.',
    ],
    signsLead: 'Replace alarms on a date you can see, not after they fail in a drill. The date on the back tells you when the sensor is done.',
    signs: [
      'An alarm chirps with a fresh battery. It can be the sensor, the battery, or the wire that links them.',
      'The date on the back is older than the maker allows. We replace the alarm, not just the battery.',
      'Alarms do not sound together when one is tested. The wire that links them may be missing or loose.',
      'A remodel removed alarms and they were not put back. We put alarms back on the boxes that are still there.',
      'You have fuel-burning appliances and no CO alarm on that level. We put a carbon monoxide alarm on that floor.',
    ],
    cost: [
      'Swapping devices on existing boxes is smaller than fishing a new interconnect through a finished ceiling. The number of alarms and the ceiling height change the time.',
      'Count the alarms and say whether they are hardwired.',
    ],
    emergency: 'If an alarm is sounding and you smell smoke or feel ill, leave and call 911. An electrician visit is for after the building is safe.',
    visit: 'Count the alarms and note which ones are hardwired if you can do that before the visit. Each head is dated, and the circuit that feeds the alarms is identified. The notes list the devices to replace, whether a carbon monoxide alarm is included, and whether an interconnect wire is already in the boxes. Heads are swapped and tested from the button. Fishing a missing interconnect is its own line, not a task added after the ladders are up. A battery-only house gets a note instead of a hardwired run.',
    faqs: [
      { q: 'Why does a hardwired alarm still chirp?', a: 'The backup battery, a failing sensor, or a loose interconnect can chirp. The date stamp also ends the life of the sensor. The visit says which one it is.' },
      { q: 'Can you add interconnection to old alarms?', a: 'Only if a traveler wire can be run or is already in the box. Wireless interconnect is a product choice. Not every ceiling can be fished.' },
      { q: 'Do you tell me how many alarms the code requires?', a: 'The city or the fire official sets the required locations. We install the devices you approve.' },
      { q: 'Are CO alarms the same device as smoke alarms?', a: 'They can be separate or combined. The notes list which heads go where, based on the appliances and the floors you describe.' },
    ],
    related: ['/services/electrical-repair', '/services/lighting-installation', '/services/electrical-inspections'],
  },
  {
    slug: 'commercial-electrician',
    title: 'Commercial Electrician Sioux Falls SD',
    documentTitle: 'Commercial Electrician in Sioux Falls, SD',
    description: 'Commercial electrician in Sioux Falls, SD. Commercial electrical services for lighting, circuits, and panels in shops, offices, and other buildings.',
    sub: 'Lighting, circuits, and panels for shops and offices, scheduled around your hours.',
    photo: 'service-commercial-hero',
    alt: 'Commercial electrician working among electrical cabinets',
    answer:
      'A commercial electrician in Sioux Falls does lighting, circuits, and panel work for shops, offices, and other businesses. The visit is scheduled around your hours when the equipment can be off. The suite, the ceiling type, and the panel directory are part of the visit. Call {phone}.',
    includedHeading: 'What our commercial electrical services include',
    includedLead: 'Business work uses the same phone number as house calls. The scope is different.',
    included: [
      'Lighting swaps and added lights in a sales floor or office. Tell us about the ceiling before we book a lift.',
      'New circuits for equipment, a counter, or a small addition. The label on the equipment sets the breaker.',
      'Panel labeling and breaker additions when space exists. If the panel is full, that is a bigger job.',
      'Troubleshooting a circuit that takes down a cooler, a kiln, or a row of lights. Tell us which equipment is down.',
      'Coordination with a landlord when the meter is not in your name. We need someone who can open that meter room.',
      'A written line between what this visit will touch and what a larger build-out needs. This visit is not a full building design.',
    ],
    signsLead: 'Call us when the problem is the building, not one outlet in a house. Tell us the hours you can have a circuit off.',
    signs: [
      'A row of lights is out and the bulbs are fine. We check the circuit or the switch next.',
      'New equipment trips a breaker the old equipment did not. We compare the label on the equipment with the breaker.',
      'The panel directory is blank and nobody knows the breakers. We can come just to label them.',
      'A tenant finish needs a few circuits, not a full design team. We list those circuits before the walls close.',
      'You share a meter room with another suite. Tell us who can unlock it.',
    ],
    cost: [
      'After-hours work, ceiling type, and lift access change the price. A retail ceiling grid is not an office drywall ceiling.',
      'Landlord approval and utility shutdowns can add time that is not labor. Say the address, the hours you can be dark, and the equipment nameplate.',
    ],
    emergency: 'A burning smell in a shop panel is an emergency. Get people out if there is smoke and call 911, then call for the repair.',
    visit: 'The call names the suite, the hours a circuit can be dark, and whether a landlord has to open the meter room. The visit reads the panel directory, the failed circuit, and the ceiling type. The notes split work that can happen while you are open from work that waits until the door is locked. A ladder or a lift is named when the ceiling needs one. Breakers are labeled in plain words before the visit ends. A machine circuit uses the nameplate amperage you provided. Anything outside that list is a new item.',
    faqs: [
      { q: 'Do you work in occupied stores?', a: 'Yes, when the lights or the circuit can be off in a section. Say the hours. Some work has to wait until the door is locked.' },
      { q: 'Can you add one circuit for a new machine?', a: 'Yes, if the panel has space and capacity. A full panel means a larger job. Bring the machine nameplate.' },
      { q: 'Will you design a whole building?', a: 'No. The work is repair, lighting, and added circuits. A full build-out needs its own design.' },
      { q: 'Are house calls and business calls the same number?', a: 'Yes. Say that it is a business and whether a landlord has to approve access.' },
    ],
    related: ['/services/lighting-installation', '/services/panel-upgrades', '/services/electrical-repair'],
  },
];

export function servicePageBySlug(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}
