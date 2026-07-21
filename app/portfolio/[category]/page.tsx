import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { portfolio } from '@/lib/data';
import { Shell } from '@/components/site-shell';
import { GalleryCard, Reveal, VideoFrame } from '@/components/ui';

const categories = ['weddings', 'portraits', 'editorial', 'film'];
type CategoryParams = Promise<{ category: string }>;

export function generateStaticParams() {
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: CategoryParams }): Promise<Metadata> {
  const { category } = await params;
  const name = category[0]?.toUpperCase() + category.slice(1);
  return {
    title: `${name} Portfolio`,
    description: `Selected ${category} films by Wrap UP.`,
  };
}

export default async function CategoryStory({ params }: { params: CategoryParams }) {
  const { category } = await params;
  if (!categories.includes(category)) return notFound();

  const title = category[0].toUpperCase() + category.slice(1);
  const exact = portfolio.filter((item) => item.category.toLowerCase() === category);
  const items = exact.length >= 2 ? exact : [...exact, ...portfolio.filter((item) => !exact.includes(item)).slice(0, 3)];
  const hero = items[0];

  return <Shell><main>
    <section className="story-hero">
      <div>
        <p className="eyebrow">Portfolio story · 2024</p>
        <h1>{title}<br /><em>in full.</em></h1>
        <p>Honest frames, deliberate light, and the kind of details that keep a story feeling alive.</p>
      </div>
      <VideoFrame src={hero.src} alt={hero.alt} label={`${title} film`} />
    </section>
    <section className="section">
      <div className="section-intro"><p className="eyebrow">Selected films</p><span className="muted">Stories in motion</span></div>
      <div className="work-grid story-work">{items.map((item, index) => <GalleryCard item={item} index={index} key={`${item.id}-${index}`} />)}</div>
    </section>
    <Reveal className="story-closing"><p className="eyebrow">End note</p><blockquote>“A photograph is proof that, for one small second, we paid attention.”</blockquote></Reveal>
  </main></Shell>;
}
