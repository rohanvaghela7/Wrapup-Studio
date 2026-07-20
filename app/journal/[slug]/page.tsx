import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { journal, portfolio } from '@/lib/data';
import { Shell } from '@/components/site-shell';
import { ImageFrame, Reveal } from '@/components/ui';

type JournalParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return journal.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: JournalParams }): Promise<Metadata> {
  const { slug } = await params;
  const post = journal.find((item) => item.slug === slug);
  return {
    title: post ? post.title : 'Journal',
    description: post?.excerpt,
  };
}

export default async function JournalPost({ params }: { params: JournalParams }) {
  const { slug } = await params;
  const post = journal.find((item) => item.slug === slug);
  if (!post) return notFound();

  return <Shell><main className="post-page">
    <Reveal className="post-header">
      <div className="journal-meta"><span>{post.category}</span><span>{post.date}</span></div>
      <h1>{post.title}</h1>
      <p className="intro-copy" style={{ marginLeft: 0 }}>{post.excerpt}</p>
    </Reveal>
    <div className="post-cover"><ImageFrame src={post.image} alt={post.title} priority /></div>
    <article className="post-content">
      <p>There is a moment, just before the shutter, when everything is possible. The light is still moving. Someone is about to laugh. A hand finds another hand beneath the table.</p>
      <p>That is the part I’m always looking for—not the performance of a day, but its pulse. The details that won’t make the schedule. The beautiful accidents that turn a collection of images into a memory with a point of view.</p>
      <h2>Leave a little room.</h2>
      <p>My favorite photographs are rarely the ones we planned. They are the ones that arrive when we’re patient enough to let the day speak in its own voice.</p>
      <div className="post-inline"><ImageFrame src={portfolio[7].src} alt="Editorial detail" /></div>
      <p>So, wherever you are in the planning, leave a little room. For the weather. For the long hug. For everything that happens after the photograph was supposed to happen.</p>
    </article>
  </main></Shell>;
}
