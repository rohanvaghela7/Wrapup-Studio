import { portfolio } from './data';

/**
 * Temporary demo content. Replace these records with CMS, calendar, and client
 * portal responses without changing the UI components.
 */
export const bookingAvailability = {
  monthLabel: 'September 2026',
  leadingBlankDays: 2,
  daysInMonth: 30,
  unavailableDays: [3, 7, 12, 18, 24, 27],
  timeSlots: ['10:00 AM', '1:30 PM', '4:00 PM'],
};

export type ClientGallery = {
  slug: string;
  couple: string;
  year: string;
  note: string;
  images: typeof portfolio;
};

export const clientGalleries: ClientGallery[] = [
  {
    slug: 'anna-and-theo',
    couple: 'Anna & Theo',
    year: '2024',
    note: 'A private proofing space for your photographs. Click the heart to save a favorite.',
    images: portfolio.slice(0, 6),
  },
  {
    slug: 'mara-chen',
    couple: 'Mara Chen',
    year: '2024',
    note: 'A private proofing space for your final portrait collection.',
    images: [portfolio[1], portfolio[4], portfolio[6], portfolio[7]],
  },
];

export const demoBookingResponse = {
  message: 'Your enquiry is safely in the studio inbox.',
  responseTime: 'We’ll reply within two business days.',
};
