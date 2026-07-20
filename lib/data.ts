export type PortfolioImage = {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  location: string;
  size?: 'wide' | 'tall' | 'standard' | 'square' | 'panorama';
  mediaType?: 'image';
};

export const portfolio: PortfolioImage[] = [
  { id: '01', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85', alt: 'Couple embracing in a sunlit field', title: 'The quiet yes', category: 'Weddings', location: 'Hudson Valley', size: 'tall' },
  { id: '02', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85', alt: 'Portrait of a woman in soft shadow', title: 'After the rain', category: 'Portraits', location: 'New York', size: 'standard' },
  { id: '03', src: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85', alt: 'Editorial fashion portrait in black and white', title: 'Form / Function', category: 'Editorial', location: 'Brooklyn', size: 'standard' },
  { id: '04', src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1800&q=85', alt: 'Wedding couple walking through a garden', title: 'A long way home', category: 'Weddings', location: 'Martha’s Vineyard', size: 'wide' },
  { id: '05', src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=85', alt: 'Close portrait with dramatic light', title: 'The in-between', category: 'Portraits', location: 'London', size: 'tall' },
  { id: '06', src: 'https://images.unsplash.com/photo-1542038382126-77ae2819338d?auto=format&fit=crop&w=1800&q=85', alt: 'Photographer holding a medium format camera', title: 'The process', category: 'Film', location: 'At home', size: 'wide' },
  { id: '07', src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=85', alt: 'Editorial beauty close-up', title: 'In profile', category: 'Commercial', location: 'Soho', size: 'standard' },
  { id: '08', src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=85', alt: 'Fashion editorial in a sculptural dress', title: 'Soft architecture', category: 'Editorial', location: 'Paris', size: 'tall' },
  { id: '09', src: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1800&q=85', alt: 'Family walking by the ocean', title: 'Salt air', category: 'Family', location: 'Maine', size: 'wide' },
  { id: '10', src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1600&q=88', alt: 'Traditional Indian wedding ceremony details', title: 'Sacred promises', category: 'Weddings', location: 'Jaipur', size: 'square' },
  { id: '11', src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1600&q=88', alt: 'Indian bride and groom celebrating together', title: 'Together, brightly', category: 'Weddings', location: 'Delhi', size: 'wide' },
  { id: '12', src: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=1600&q=88', alt: 'Colourful Indian wedding celebration', title: 'The joyful hour', category: 'Weddings', location: 'Mumbai', size: 'panorama' },
  { id: '13', src: 'https://images.unsplash.com/photo-1610173827043-9db50e0d8ef9?auto=format&fit=crop&w=1600&q=88', alt: 'Traditional bridal portrait', title: 'Before the vows', category: 'Portraits', location: 'Udaipur', size: 'tall' },
  { id: '14', src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=86', alt: 'Natural light portrait', title: 'Quiet confidence', category: 'Portraits', location: 'Goa', size: 'square' },
  { id: '15', src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1400&q=86', alt: 'Editorial portrait in warm light', title: 'Sun room', category: 'Editorial', location: 'Mumbai', size: 'tall' },
  { id: '16', src: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=1500&q=86', alt: 'Fashion portrait of a man', title: 'Modern classic', category: 'Editorial', location: 'London', size: 'standard' },
  { id: '17', src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1400&q=86', alt: 'Creative beauty portrait', title: 'Soft power', category: 'Commercial', location: 'Delhi', size: 'square' },
  { id: '18', src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=86', alt: 'Fashion editorial on location', title: 'Street light', category: 'Editorial', location: 'Paris', size: 'wide' },
  { id: '19', src: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1400&q=86', alt: 'Studio portrait of a man', title: 'In focus', category: 'Portraits', location: 'Toronto', size: 'tall' },
  { id: '20', src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=86', alt: 'Bold fashion portrait', title: 'Electric red', category: 'Editorial', location: 'New York', size: 'panorama' },
  { id: '21', src: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1500&q=86', alt: 'Clothing and campaign details', title: 'Material study', category: 'Commercial', location: 'Soho', size: 'wide' },
  { id: '22', src: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1500&q=86', alt: 'Fashion model in city light', title: 'After hours', category: 'Editorial', location: 'Berlin', size: 'standard' },
  { id: '23', src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=86', alt: 'Crowd enjoying a live celebration', title: 'Everybody dancing', category: 'Commercial', location: 'Pune', size: 'panorama' },
  { id: '24', src: 'https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&w=1400&q=86', alt: 'Editorial portrait in dramatic light', title: 'New shape', category: 'Portraits', location: 'Dubai', size: 'square' },
];

export const portfolioWeddingPhotos: PortfolioImage[] = [
  { id: 'iw01', src: '/work-indian-wedding-01.jpg', alt: 'Indian groom kissing his bride on the forehead', title: 'A quiet blessing', category: 'Weddings', location: 'Jaipur', size: 'wide' },
  { id: 'iw02', src: '/work-indian-wedding-02.jpg', alt: 'Indian bride and groom wearing flower garlands', title: 'Garlands & glances', category: 'Weddings', location: 'Varanasi', size: 'tall' },
  { id: 'iw03', src: '/work-indian-wedding-03.jpg', alt: 'Indian wedding couple in red and gold at night', title: 'Two hearts, one night', category: 'Weddings', location: 'Jodhpur', size: 'square' },
  { id: 'iw04', src: '/work-indian-wedding-04.jpg', alt: 'Indian bride and groom beneath festive golden lights', title: 'Lights of the baraat', category: 'Weddings', location: 'Lucknow', size: 'panorama' },
  { id: 'iw05', src: '/work-indian-wedding-05.jpg', alt: 'Indian wedding couple walking through a colourful garden venue', title: 'Red in the garden', category: 'Weddings', location: 'Ahmedabad', size: 'tall' },
  { id: 'iw06', src: '/work-indian-wedding-06.jpg', alt: 'Close portrait of an Indian bride and groom', title: 'Close as a promise', category: 'Weddings', location: 'Chennai', size: 'wide' },
];

export const portfolioMedia: PortfolioImage[] = [
  ...portfolio.slice(0, 4), portfolioWeddingPhotos[0],
  ...portfolio.slice(4, 8), portfolioWeddingPhotos[1],
  ...portfolio.slice(8, 12), portfolioWeddingPhotos[2],
  ...portfolio.slice(12, 16), portfolioWeddingPhotos[3],
  ...portfolio.slice(16, 20), portfolioWeddingPhotos[4],
  ...portfolio.slice(20, 24), portfolioWeddingPhotos[5],
];

export const journal = [
  { slug: 'a-field-guide-to-being-present', title: 'A field guide to being present', category: 'Notes on making', date: '04.18.24', excerpt: 'The best photographs happen in the half-second before anyone realizes they are being watched.', image: portfolio[0].src },
  { slug: 'the-case-for-slow-photographs', title: 'The case for slow photographs', category: 'Process', date: '02.06.24', excerpt: 'On film, patience, and finding the frame inside the frame.', image: portfolio[5].src },
  { slug: 'summer-on-the-island', title: 'Summer on the island', category: 'Field notes', date: '08.27.23', excerpt: 'A late-summer wedding, a borrowed sailboat, and light that stayed until 9pm.', image: portfolio[3].src },
];

export const testimonials = [
  { quote: 'There is a calmness to the way she works. We forgot the camera was there, and that is exactly what we wanted.', name: 'Sophie & James', type: 'Wedding, Hudson Valley' },
  { quote: 'The images feel like us on our best day—not polished into something unfamiliar, just deeply seen.', name: 'Mara Chen', type: 'Portraits, New York' },
  { quote: 'A rare combination of intuition and intention. Every frame had a point of view.', name: 'Studio Forma', type: 'Campaign, Brooklyn' },
];

export const instagram = portfolio.slice(1, 7);
