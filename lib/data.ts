export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'team', label: 'Team' },
  { id: 'classes', label: 'Classes' },
  { id: 'events', label: 'Events' },
  { id: 'contact', label: 'Contact' },
];

export const values = [
  {
    kanji: '規',
    title: 'DISCIPLINE',
    desc: 'The foundation of all martial arts. We cultivate mental and physical discipline through structured training and unwavering commitment.',
  },
  {
    kanji: '礼',
    title: 'RESPECT',
    desc: 'Respect for our art, our opponents, and ourselves. The bow before the fight reflects a deeper philosophy of humility and honor.',
  },
  {
    kanji: '卓',
    title: 'EXCELLENCE',
    desc: 'We strive for excellence in every kata, every kumite, and every moment of training. Our national champions are proof of this pursuit.',
  },
];

export const stats = [
  { value: 20, suffix: '+', label: 'Years Teaching' },
  { value: 100, suffix: '+', label: 'Students Trained' },
  { value: 15, suffix: '+', label: 'Years Competing' },
];

export const events = [
  {
    day: '15',
    month: 'AUG',
    tag: 'Tournament',
    tagColor: '#D72638',
    tagBg: 'rgba(215,38,56,0.1)',
    title: 'ALL-KUMITE CHAMPIONSHIPS',
    desc: 'Full-contact kumite tournament open to all belt levels. Test your skills against competitors from across the region.',
  },
  {
    day: '12',
    month: 'JUL',
    tag: 'Community',
    tagColor: '#F97316',
    tagBg: 'rgba(249,115,22,0.1)',
    title: 'BIKE RIDE DAY',
    desc: 'A fun community bike ride for students and families. Build endurance and enjoy the beautiful scenery of St. Vincent.',
  },
  {
    day: 'JUL',
    month: 'AUG',
    tag: 'Program',
    tagColor: '#60A5FA',
    tagBg: 'rgba(59,130,246,0.1)',
    title: 'SUMMER PROGRAM',
    desc: 'Intensive summer training for students of all levels. Accelerate your progress during the break.',
  },
  {
    day: '5–7',
    month: 'SEP',
    tag: 'Training',
    tagColor: '#D72638',
    tagBg: 'rgba(215,38,56,0.1)',
    title: 'TRAINING CAMP',
    desc: 'Multi-day intensive camp featuring guest instructors, advanced techniques, and team building for serious karateka.',
  },
];

export const goldenFighters = [
  {
    name: 'SENSEI SEON STRONGHOLD',
    rank: 'Chief Instructor',
    belt: '3rd Dan Black Belt',
    desc: 'Over 20 years of karate practice and 15+ years teaching. Trainer of national champions and the driving force behind Dragon Ryu Karate.',
    kanji: '先生',
    img: '/images/sensei-seon.jpg',
    imgPos: 'center 20%',
  },
  {
    name: 'SEMPAI ROSE STRONGHOLD',
    rank: 'Instructor',
    belt: '1st Dan Black Belt',
    desc: 'A dedicated 1st Dan practitioner bringing passion, precision, and heart to every class at the dojo.',
    kanji: '先輩',
    img: '/images/sempai-rose.jpg',
    imgPos: 'center 15%',
  },
];

export const fighters = [
  { name: 'RISHAUD ROACHE', rank: 'National Kumite Competitor', belt: 'Brown Belt', beltColor: '#92400E', desc: 'Explosive kumite fighter representing SVG at regional championships.', kanji: '戦' },
  { name: 'J-DON MATTHEWS', rank: 'Junior Champion', belt: 'Purple Belt', beltColor: '#7C3AED', desc: 'Rising star in the junior division with multiple tournament victories.', kanji: '勝' },
  { name: 'RISHAUD ROACHE', rank: 'Team Captain', belt: 'Black Belt', beltColor: '#333', desc: 'Leads by example with discipline and technical mastery on the mat.', kanji: '力' },
  { name: 'DERONIQUE LYTTLE', rank: 'Rising Star', belt: 'Blue Belt', beltColor: '#3B82F6', desc: 'Fast-tracking through the ranks with natural talent and dedication.', kanji: '星' },
  { name: 'MALIK MCKIE', rank: 'Kata Specialist', belt: 'Brown Belt', beltColor: '#92400E', desc: 'Precision kata performer known for flawless form and focus.', kanji: '型' },
  { name: 'ADIANA MORGAN', rank: 'Youth Division', belt: 'Green Belt', beltColor: '#22C55E', desc: 'Youngest competitor on the team with fearless fighting spirit.', kanji: '若' },
  { name: 'JADEEN GUY', rank: 'Senior Competitor', belt: 'Black Belt', beltColor: '#333', desc: 'Veteran fighter with years of national and regional competition.', kanji: '鬼' },
  { name: 'KALIELAH WILLIAMS', rank: 'Forms Champion', belt: 'Purple Belt', beltColor: '#7C3AED', desc: 'Multiple-time forms champion with grace and power in every movement.', kanji: '美' },
  { name: 'MILES RICHARDS', rank: 'Kumite Fighter', belt: 'Brown Belt', beltColor: '#92400E', desc: 'Aggressive and strategic fighter dominating in the kumite ring.', kanji: '拳' },
  { name: 'NYLA CYRUS', rank: 'Junior Division', belt: 'Blue Belt', beltColor: '#3B82F6', desc: 'Athletic and determined competitor with a bright future in karate.', kanji: '光' },
];

export const classPrograms = {
  top: [
    {
      belts: [
        { color: '#FFF', border: '1px solid #444' },
        { color: '#EAB308' },
        { color: '#F97316' },
        { color: '#3B82F6' },
      ],
      title: 'LOWER BELT TRAINING',
      desc: 'Foundation karate for white through blue belt students. Build core technique, kata, and basic kumite skills.',
      schedule: ['Tuesday & Thursday', '3:30 – 4:30 PM'],
      elite: false,
    },
    {
      belts: [
        { color: '#7C3AED' },
        { color: '#92400E' },
        { color: '#1A1A1A', border: '1px solid #555' },
      ],
      title: 'ADVANCED CLASS',
      desc: 'Upper belt training for experienced students. Advanced kata, competitive kumite, and tournament preparation.',
      schedule: ['Tuesday & Thursday', '4:30 – 5:30 PM'],
      elite: false,
    },
    {
      belts: [
        { color: '#1A1A1A', border: '1px solid #555' },
        { color: '#D72638' },
      ],
      title: 'NATIONAL TEAM',
      desc: 'Training for SVG national karate team members. Intensive sessions focused on competition readiness and peak performance.',
      schedule: ['Saturday', '10:00 AM – 1:00 PM'],
      elite: true,
    },
  ],
  bottom: [
    {
      barGradient: 'linear-gradient(to right, #D72638, #FF6B6B)',
      title: "WOMEN'S FITNESS & SELF-DEFENSE",
      desc: 'Practical self-defense techniques combined with a full-body fitness workout. Open to women of all fitness levels.',
      schedule: ['Schedule based on enrollment'],
    },
    {
      barGradient: 'linear-gradient(to right, #F97316, #EAB308)',
      title: 'GENERAL FITNESS CLASS',
      desc: 'High-energy fitness sessions with martial arts conditioning, strength training, and cardio. No karate experience required.',
      schedule: ['Monday & Wednesday', '4:00 – 5:30 PM'],
    },
  ],
};

export const contactInfo = {
  location: {
    line1: 'Higginson Street',
    line2: 'Old Anglican School',
    city: 'Kingstown, St. Vincent',
    country: 'and the Grenadines',
  },
  phone: '+1 (784) 495-2794',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/DragonRyuKarate' },
    { label: 'Facebook', href: 'https://www.facebook.com/RYUSVG' },
    { label: 'YouTube', href: 'https://www.youtube.com/@dragon-ryukarate3873/videos' },
  ],
  hours: [
    { days: 'Mon & Wed', time: '4:00 – 5:30 PM' },
    { days: 'Tue & Thu', time: '3:30 – 5:30 PM' },
    { days: 'Saturday', time: '10 AM – 1 PM' },
  ],
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Higginson+Street+Kingstown+Saint+Vincent+and+the+Grenadines&z=16&output=embed',
};

export const programOptions = [
  { value: 'lower-belt', label: 'Lower Belt Training' },
  { value: 'advanced', label: 'Advanced Class' },
  { value: 'national-team', label: 'National Team' },
  { value: 'womens', label: "Women's Fitness & Self-Defense" },
  { value: 'fitness', label: 'General Fitness' },
];
