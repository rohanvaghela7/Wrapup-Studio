import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { journal } from '@/lib/data';
import { Shell } from '@/components/site-shell';
import { ImageFrame, PageIntro, Reveal } from '@/components/ui';

export default function JournalPage() {
  return <Shell><main><PageIntro kicker="The journal" title={<>Notes from<br /><em>the in-between.</em></>} text="Field notes, process thoughts, and stories from the other side of the lens." /><section className="journal-grid">{journal.map((post) => <Reveal key={post.slug} className="journal-card"><ImageFrame src={post.image} alt={post.title} /><div><div className="journal-meta"><span>{post.category}</span><span>{post.date}</span></div><h2>{post.title}</h2><p>{post.excerpt}</p><Link className="arrow-link" href={`/journal/${post.slug}`}>Read the note <ArrowUpRight size={16} /></Link></div></Reveal>)}</section></main></Shell>;
}
