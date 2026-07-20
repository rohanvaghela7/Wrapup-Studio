import type { Metadata } from 'next';
import { SiteIntro } from '@/components/site-intro';
import { SITE_URL } from '@/lib/site-config';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Wrap UP — Indian Wedding Photography, Film & Drone',
    template: '%s | Wrap UP',
  },
  description: 'Colourful Indian wedding, portrait, film, and drone photography by Wrap UP in Mumbai, Delhi, and worldwide.',
  alternates: { canonical: '/' },
  icons: { icon: '/icons8-lens-24.png' },
  openGraph: {
    title: 'Wrap UP',
    description: 'Full colour. Full feeling. Forever.',
    type: 'website',
    url: '/',
    siteName: 'Wrap UP',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wrap UP',
    description: 'Full colour. Full feeling. Forever.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteIntro />{children}</body></html>;
}
