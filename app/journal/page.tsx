import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { journal } from '@/lib/data';
import { Shell } from '@/components/site-shell';
import { Reveal, VideoFrame } from '@/components/ui';

export default function JournalPage() {
  return <Shell><main className="journal-page">
    <section className="page-intro journal-page-intro">
      <span className="journal-margin-note" aria-hidden="true">Observations / process / people</span>
      <Reveal className="journal-intro-content">
        <p className="eyebrow">The journal</p>
        <h1>Notes from<br /><em>the in-between.</em></h1>
        <p className="intro-copy">Field notes, process thoughts, and stories from the other side of the lens.</p>
      </Reveal>
      <div className="journal-issue-dial" aria-hidden="true">
        <div className="journal-issue-dial-core"><span>✦</span><strong>01</strong><small>Issue / 2026</small></div>
      </div>
      <div className="journal-topic-index" aria-hidden="true">
        <span><b>01</b> Light</span>
        <span><b>02</b> People</span>
        <span><b>03</b> Process</span>
      </div>
    </section>
    <section className="journal-grid">{journal.map((post) => <Reveal key={post.slug} className="journal-card"><VideoFrame src={post.media} alt={post.title} /><div><div className="journal-meta"><span>{post.category}</span><span>{post.date}</span></div><h2>{post.title}</h2><p>{post.excerpt}</p><Link className="arrow-link" href={`/journal/${post.slug}`}>Read the note <ArrowUpRight size={16} /></Link></div></Reveal>)}</section>
  </main></Shell>;
}
