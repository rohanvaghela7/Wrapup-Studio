export type PackageTier = { id: string; name: string; description: string; hours: string; photos: string; delivery: string; price: number; originalPrice: number; badge: string };
export type AddOn = { id: string; label: string; detail: string; price: number; originalPrice: number };
export type SpecialOffer = { id: string; name: string; tagline: string; price: number; originalPrice: number; accent: 'pink' | 'orange' | 'blue'; includes: string[] };

export const shootTypes = ['Wedding', 'Portrait', 'Editorial', 'Commercial', 'Family', 'Event'] as const;

export const packageTiers: PackageTier[] = [
  { id: 'essential', name: 'Gulab', description: 'A bright, intimate collection for small celebrations and portraits.', hours: '3 hours', photos: '150+ edited images', delivery: '3 weeks', price: 9999, originalPrice: 13999, badge: 'Save ₹4,000' },
  { id: 'signature', name: 'Wrap UP', description: 'Our most-loved photo + film story, from rituals to dance floor.', hours: '8 hours', photos: '400+ images + highlight film', delivery: '4 weeks', price: 24999, originalPrice: 32999, badge: 'Bestseller · Save ₹8,000' },
  { id: 'legacy', name: 'Maharaja', description: 'The full celebration across two days with a complete creative crew.', hours: '2 full days', photos: '800+ images + cinematic film', delivery: '4 weeks', price: 44999, originalPrice: 59999, badge: 'Save ₹15,000' },
];

export const addOns: AddOn[] = [
  { id: 'drone-photo', label: 'Drone shoot + photo shoot', detail: 'Aerial coverage plus a 90-minute portrait session', price: 6000, originalPrice: 9500 },
  { id: 'extra-hour', label: 'Extra hour of coverage', detail: 'More room for rituals, portraits and the unplanned', price: 2500, originalPrice: 3500 },
  { id: 'second-photographer', label: 'Second photographer', detail: 'A second point of view for every important moment', price: 5000, originalPrice: 7000 },
  { id: 'preview-gallery', label: 'Same-day reel + preview', detail: '20 edited photographs and a social reel by midnight', price: 3500, originalPrice: 5000 },
  { id: 'album', label: 'Luxury wedding album', detail: '40 archival pages with handcrafted Indian textile cover', price: 8000, originalPrice: 11000 },
  { id: 'rush', label: 'Rush delivery', detail: 'Your complete gallery in 10 working days', price: 5000, originalPrice: 7500 },
  { id: 'pre-wedding', label: 'Pre-wedding session', detail: '3 hours, two looks and one cinematic reel', price: 7500, originalPrice: 11000 },
];

export const specialOffers: SpecialOffer[] = [
  { id: 'sky-story', name: 'Sky + Story', tagline: 'Drone shoot + photo shoot', price: 6000, originalPrice: 9500, accent: 'orange', includes: ['90-minute photo session', '15 drone photographs', '60-second aerial reel'] },
  { id: 'shaadi-reel', name: 'Shaadi Social', tagline: 'Photo + same-day reel', price: 8500, originalPrice: 12000, accent: 'pink', includes: ['3 hours coverage', '75 edited photographs', 'One vertical highlight reel'] },
  { id: 'family-rang', name: 'Family Wrap', tagline: 'Family portraits + album', price: 12000, originalPrice: 16500, accent: 'blue', includes: ['2-hour family session', '100 edited photographs', '20-page keepsake album'] },
];

export const formatINR = (value: number) => `₹${value.toLocaleString('en-IN')}`;
