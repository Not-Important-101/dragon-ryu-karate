// Baked-in design values, decided from the "Competition" mood + "Balanced" intensity
// combination the club settled on (see chats/chat1.md). The Claude Design prototype
// exposed these as live tweak-panel props; on the production site they're fixed constants.

export const theme = {
  bg: '#0A0A0A',
  fg: '#F5F5F5',
  accent: '#D72638',
  accentHover: '#B91C2E',
  gold: '#C9A84C',
  heroSub: 'Dragon Ryu Karate · St. Vincent & the Grenadines',
  ctaLabel: 'Book a Free Trial',
  heroBrightness: 0.38,
  heroGradTop: 0.35,
  progressHeight: '3px',
  floatAnim: 'float1 8s ease-in-out infinite',
  ctaPulseAnim: 'ctaPulse 3s ease infinite',
} as const;

export const heroHeadline = 'FIND YOUR FIRE';

function splitHeadline(headline: string) {
  const parts = headline.trim().toUpperCase().split(/\s+/);
  const lastWord = parts.length > 1 ? parts.pop()! : '';
  return { firstPart: parts.join(' '), lastWord };
}

export const hero = splitHeadline(heroHeadline);
