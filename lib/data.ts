export type PortfolioImage = {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  location: string;
  size?: 'wide' | 'tall' | 'standard' | 'square' | 'panorama';
  mediaType: 'image' | 'video';
  width?: number;
  height?: number;
};

export const portfolioVideos: PortfolioImage[] = [
  { id: 'v03', src: '/client-story-01.mp4', alt: 'Client story highlight film', title: 'The story between moments', category: 'Film', location: 'Jaipur', size: 'standard', mediaType: 'video' },
  { id: 'v04', src: '/client-story-02.mp4', alt: 'Portrait film sequence', title: 'A quiet frame', category: 'Portraits', location: 'Delhi', size: 'square', mediaType: 'video' },
  { id: 'v05', src: '/client-story-03.mp4', alt: 'Wedding highlight sequence', title: 'Joy, uninterrupted', category: 'Weddings', location: 'Udaipur', size: 'panorama', mediaType: 'video' },
  { id: 'v07', src: '/client-story-05.mp4', alt: 'Cinematic client story', title: 'Held in motion', category: 'Film', location: 'Mehsana', size: 'wide', mediaType: 'video' },
  { id: 'v08', src: '/portfolio-work-background.mp4', alt: 'Wrap UP portfolio showreel', title: 'The Wrap UP reel', category: 'Film', location: 'Across India', size: 'panorama', mediaType: 'video' },
  { id: 'v10', src: '/home-hero-slide-left-2.mp4', alt: 'Editorial celebration film', title: 'Colour in motion', category: 'Editorial', location: 'Jaipur', size: 'tall', mediaType: 'video' },
];

export const portfolioPhotos: PortfolioImage[] = [
  { id: 'p01', src: '/work/wrapup-wedding-01.jpg', alt: 'Newly married couple sharing a quiet moment', title: 'Just married', category: 'Weddings', location: 'Mumbai', size: 'tall', mediaType: 'image', width: 4160, height: 6240 },
  { id: 'p02', src: '/work/wrapup-wedding-02.jpg', alt: 'Indian bride and groom in red and ivory wedding attire', title: 'The royal portrait', category: 'Weddings', location: 'Delhi', size: 'tall', mediaType: 'image', width: 3566, height: 5349 },
  { id: 'p03', src: '/work/wrapup-wedding-03.jpg', alt: 'Couple during an intimate Indian wedding ritual', title: 'The sacred moment', category: 'Weddings', location: 'Pune', size: 'wide', mediaType: 'image', width: 5472, height: 3648 },
  { id: 'p04', src: '/work/wrapup-wedding-04.jpg', alt: 'Black and white bridal portrait framed through a mirror', title: 'Before the ceremony', category: 'Portraits', location: 'Jaipur', size: 'tall', mediaType: 'image', width: 1842, height: 2897 },
  { id: 'p05', src: '/work/wrapup-wedding-05.jpg', alt: 'Bride surrounded by joyful haldi hands', title: 'Haldi in full colour', category: 'Weddings', location: 'Ahmedabad', size: 'wide', mediaType: 'image', width: 5969, height: 3971 },
  { id: 'p06', src: '/work/wrapup-wedding-06.jpg', alt: 'Indian wedding couple posed before a temple', title: 'A timeless promise', category: 'Weddings', location: 'Mehsana', size: 'wide', mediaType: 'image', width: 6048, height: 4024 },
  { id: 'p07', src: '/work/wrapup-wedding-07.jpg', alt: 'Newly married couple looking at their camera together', title: 'A frame of their own', category: 'Weddings', location: 'Delhi', size: 'wide', mediaType: 'image', width: 6720, height: 4480 },
  { id: 'p08', src: '/work/wrapup-wedding-08.jpg', alt: 'Groom beneath falling rice during a wedding ritual', title: 'Blessings in motion', category: 'Weddings', location: 'Pune', size: 'tall', mediaType: 'image', width: 4160, height: 6240 },
  { id: 'p09', src: '/work/wrapup-wedding-09.jpg', alt: 'Sikh wedding ceremony inside a gurdwara', title: 'A quiet vow', category: 'Weddings', location: 'Delhi', size: 'tall', mediaType: 'image', width: 4480, height: 6720 },
  { id: 'p10', src: '/work/wrapup-wedding-10.jpg', alt: 'Friends celebrating with the groom during haldi', title: 'The loudest laughter', category: 'Weddings', location: 'Jaipur', size: 'wide', mediaType: 'image', width: 6000, height: 4000 },
  { id: 'p11', src: '/work/wrapup-wedding-11.jpg', alt: 'Bride smiling during her haldi celebration', title: 'Golden hour, golden joy', category: 'Portraits', location: 'Ahmedabad', size: 'tall', mediaType: 'image', width: 4000, height: 6000 },
  { id: 'p12', src: '/work/wrapup-wedding-12.jpg', alt: 'Groom in traditional Bengali wedding attire', title: 'Ready for forever', category: 'Portraits', location: 'Mumbai', size: 'tall', mediaType: 'image', width: 4000, height: 6000 },
  { id: 'p13', src: '/work/wrapup-wedding-13.jpg', alt: 'Black and white portrait of a Bengali bride', title: 'Grace in monochrome', category: 'Portraits', location: 'Delhi', size: 'tall', mediaType: 'image', width: 3119, height: 5896 },
  { id: 'p14', src: '/work/wrapup-wedding-14.jpg', alt: 'Groom placing a ceremonial ornament above the bride', title: 'The smallest traditions', category: 'Weddings', location: 'Udaipur', size: 'wide', mediaType: 'image', width: 8256, height: 5504 },
];

// Keep the homepage motion-led while the Work archive combines every supplied
// original-resolution photograph with the selected films.
export const portfolio = portfolioVideos;
export const portfolioMedia: PortfolioImage[] = [
  portfolioPhotos[0], portfolioPhotos[1], portfolioVideos[0],
  portfolioPhotos[2], portfolioPhotos[3], portfolioVideos[1],
  portfolioPhotos[4], portfolioPhotos[5], portfolioVideos[2],
  portfolioPhotos[6], portfolioPhotos[7], portfolioVideos[3],
  portfolioPhotos[8], portfolioPhotos[9], portfolioVideos[4],
  portfolioPhotos[10], portfolioPhotos[11], portfolioVideos[5],
  portfolioPhotos[12], portfolioPhotos[13],
  ...portfolioVideos.slice(6),
];

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

export const instagram: PortfolioImage[] = [];
