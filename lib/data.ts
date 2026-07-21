export type PortfolioImage = {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  location: string;
  size?: 'wide' | 'tall' | 'standard' | 'square' | 'panorama';
  mediaType: 'video';
};

// Only real project video assets are shown until the client's final photographs
// are supplied. This keeps the public portfolio free of stock/demo photography.
export const portfolio: PortfolioImage[] = [
  { id: 'v01', src: '/camera-ready-indian-wedding.mp4', alt: 'Indian wedding celebration film', title: 'A day in full colour', category: 'Weddings', location: 'Mumbai', size: 'tall', mediaType: 'video' },
  { id: 'v02', src: '/camera-ready-wedding.mp4', alt: 'Wedding story film', title: 'The celebration begins', category: 'Weddings', location: 'Ahmedabad', size: 'wide', mediaType: 'video' },
  { id: 'v03', src: '/client-story-01.mp4', alt: 'Client story highlight film', title: 'The story between moments', category: 'Film', location: 'Jaipur', size: 'standard', mediaType: 'video' },
  { id: 'v04', src: '/client-story-02.mp4', alt: 'Portrait film sequence', title: 'A quiet frame', category: 'Portraits', location: 'Delhi', size: 'square', mediaType: 'video' },
  { id: 'v05', src: '/client-story-03.mp4', alt: 'Wedding highlight sequence', title: 'Joy, uninterrupted', category: 'Weddings', location: 'Udaipur', size: 'panorama', mediaType: 'video' },
  { id: 'v06', src: '/client-story-04.mp4', alt: 'Editorial motion sequence', title: 'Movement and light', category: 'Editorial', location: 'Pune', size: 'tall', mediaType: 'video' },
  { id: 'v07', src: '/client-story-05.mp4', alt: 'Cinematic client story', title: 'Held in motion', category: 'Film', location: 'Mehsana', size: 'wide', mediaType: 'video' },
  { id: 'v08', src: '/portfolio-work-background.mp4', alt: 'Wrap UP portfolio showreel', title: 'The Wrap UP reel', category: 'Film', location: 'Across India', size: 'panorama', mediaType: 'video' },
  { id: 'v09', src: '/home-hero-background.mp4', alt: 'Wedding film moment', title: 'Before the vows', category: 'Weddings', location: 'Ahmedabad', size: 'standard', mediaType: 'video' },
  { id: 'v10', src: '/home-hero-slide-left-2.mp4', alt: 'Editorial celebration film', title: 'Colour in motion', category: 'Editorial', location: 'Jaipur', size: 'tall', mediaType: 'video' },
  { id: 'v11', src: '/home-hero-slide-left-3.mp4', alt: 'Portrait film moment', title: 'In the moment', category: 'Portraits', location: 'Delhi', size: 'square', mediaType: 'video' },
  { id: 'v12', src: '/home-hero-slide-right-2.mp4', alt: 'Cinematic wedding detail', title: 'Every little feeling', category: 'Film', location: 'Udaipur', size: 'wide', mediaType: 'video' },
];

export const portfolioMedia = portfolio;

export const journal = [
  { slug: 'a-field-guide-to-being-present', title: 'A field guide to being present', category: 'Notes on making', date: '04.18.24', excerpt: 'The best photographs happen in the half-second before anyone realizes they are being watched.', media: portfolio[0].src },
  { slug: 'the-case-for-slow-photographs', title: 'The case for slow photographs', category: 'Process', date: '02.06.24', excerpt: 'On film, patience, and finding the frame inside the frame.', media: portfolio[2].src },
  { slug: 'summer-on-the-island', title: 'Summer on the island', category: 'Field notes', date: '08.27.23', excerpt: 'A late-summer wedding and light that stayed with us.', media: portfolio[4].src },
];

export const testimonials = [
  { quote: 'There is a calmness to the way she works. We forgot the camera was there, and that is exactly what we wanted.', name: 'Sophie & James', type: 'Wedding, Hudson Valley' },
  { quote: 'The images feel like us on our best day—not polished into something unfamiliar, just deeply seen.', name: 'Mara Chen', type: 'Portraits, New York' },
  { quote: 'A rare combination of intuition and intention. Every frame had a point of view.', name: 'Studio Forma', type: 'Campaign, Brooklyn' },
];

export const instagram = portfolio.slice(1, 7);
