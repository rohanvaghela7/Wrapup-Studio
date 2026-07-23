import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Shell } from '@/components/site-shell';
import { PageIntro, Reveal, VideoFrame } from '@/components/ui';
import { StoryBeginningCard } from '@/components/story-beginning-card';
import { StoryClientsCard } from '@/components/story-clients-card';
import { StoryCountriesCard } from '@/components/story-countries-card';
import { StoryProfessionalsCard } from '@/components/story-professionals-card';

const milestones = [
  { year: '1996', title: 'One camera. One brave beginning.', text: 'Wrap UP begins as a two-person studio with a borrowed camera, a hand-painted sign, and a belief that honest photographs can outlive every trend.' },
  { year: '2003', title: 'Stories become films.', text: 'We build our first dedicated film unit, bringing movement, music, and family voices into the way celebrations are remembered.' },
  { year: '2010', title: 'A team takes shape.', text: 'Photographers, editors, producers, and album artists join the studio—each chosen for craft, calmness, and genuine care for people.' },
  { year: '2017', title: 'Across borders.', text: 'Our first international commissions lead to permanent creative partnerships across Asia, Europe, and the Middle East.' },
  { year: '2022', title: 'One connected global studio.', text: 'Shared systems, remote editing suites, and local production partners allow every client to receive the same Wrap UP experience wherever they celebrate.' },
  { year: 'Today', title: 'Still personal. Now worldwide.', text: 'A 75-person professional team serves families and brands across six countries, with more than 7,800 client stories delivered.' },
];

const numbers = [
  { value: '1996', label: 'The year our story began', detail: 'Three decades of learning where the real moments hide.' },
  { value: '7,800+', label: 'Clients served', detail: 'Weddings, families, founders, artists, and global brands.' },
  { value: '6', label: 'Countries reached', detail: 'One creative standard, shaped for every place and culture.' },
  { value: '75', label: 'Professionals', detail: 'Photographers, filmmakers, editors, pilots, and producers.' },
];

export default function AboutPage() {
  return <Shell><main className="about-page our-story-page">
    <PageIntro kicker="Our story · Since 1996" title={<>One camera.<br /><em>A world of stories.</em></>} text="Wrap UP grew from a tiny two-person photography studio into a 75-strong creative family working across six countries—without losing the human attention that started it all." backgroundVideo="/our-story-background.mp4" />

    <section className="section story-origin-section">
      <div className="story-grid">
        <Reveal><VideoFrame src="/client-story-03.mp4" alt="Wrap UP team story film" label="The Wrap UP team · Mumbai" /></Reveal>
        <Reveal><p className="eyebrow">Why we began</p><h2>Make the moment<br /><em>mean something.</em></h2><p>In 1996, photography felt formal and distant. We wanted it to feel alive. We wanted the nervous hands before a ceremony, the parents watching from the doorway, and the laughter nobody planned for.</p><p>That simple motivation became our compass: build a serious creative business without making people feel like a production number.</p></Reveal>
      </div>
    </section>

    <section className="story-numbers-section">
      <div className="story-numbers-heading"><p className="eyebrow">The story in numbers</p><h2>Built slowly.<br /><em>Trusted widely.</em></h2></div>
      <div className="story-number-grid">{numbers.map((item, index) => <Reveal key={item.label} delay={index * .08} className={`story-number-card ${index === 0 ? 'beginning-video-card' : ''} ${index === 1 ? 'client-video-card' : ''} ${index === 2 ? 'country-video-card' : ''} ${index === 3 ? 'professionals-video-card' : ''}`}>{index === 0 ? <StoryBeginningCard /> : index === 1 ? <StoryClientsCard /> : index === 2 ? <StoryCountriesCard /> : <StoryProfessionalsCard />}</Reveal>)}</div>
    </section>

    <section className="section story-timeline-section">
      <div className="story-timeline-heading"><p className="eyebrow">1996 → Today</p><h2>How one frame<br /><em>became a movement.</em></h2><p>Every chapter added new skills and new places, but the promise stayed the same: show up prepared, pay attention, and make work people will still feel decades later.</p></div>
      <div className="journey-timeline">{milestones.map((item, index) => <Reveal key={item.year} className="journey-event" delay={index * .05}><div className="journey-year">{item.year}</div><div className="journey-marker"><span /></div><article><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article></Reveal>)}</div>
    </section>

    <section className="story-team-section section-dark">
      <Reveal className="story-team-image"><VideoFrame src="/client-story-05.mp4" alt="Wrap UP team working on location" label="On location · Worldwide" className="story-team-video-frame" /></Reveal>
      <Reveal className="story-team-copy"><p className="eyebrow">75 people · One team</p><h2>Professional scale.<br /><em>Personal energy.</em></h2><p>Our team includes lead photographers, cinematographers, drone pilots, creative directors, producers, colourists, retouchers, sound designers, and client experience specialists.</p><p>Every project has a dedicated core crew and one clear point of contact. Behind them sits the depth of a 75-person studio—ready to solve, support, and deliver.</p><div className="team-role-list"><span>24 photographers</span><span>16 filmmakers</span><span>18 editors</span><span>7 producers</span><span>6 drone specialists</span><span>4 client partners</span></div></Reveal>
    </section>

    <section className="story-belief-section"><p className="eyebrow">What keeps us moving</p><blockquote>“Growth only matters if every client still feels like the reason we started.”</blockquote><p>7,800 stories later, curiosity is still our most important piece of equipment.</p><Link className="button button-dark" href="/contact">Tell us your story <ArrowUpRight size={16} /></Link></section>
  </main></Shell>;
}
