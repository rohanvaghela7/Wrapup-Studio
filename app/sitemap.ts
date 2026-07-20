import type { MetadataRoute } from 'next';
import { journal } from '@/lib/data';
import { SITE_URL } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/portfolio', '/services', '/about', '/booking', '/journal', '/contact'];

  return [
    ...pages.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: path === '/journal' ? 'monthly' as const : 'yearly' as const,
      priority: path === '' ? 1 : .7,
    })),
    ...journal.map((post) => ({
      url: `${SITE_URL}/journal/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: .6,
    })),
  ];
}
