import Link from 'next/link';
import { ArrowUpRight, Camera, Sparkles } from 'lucide-react';
import { portfolio, instagram } from '@/lib/data';
import { Shell } from '@/components/site-shell';
import { IndianFeature, RotatingWorkQuote, SplitHeroVideos } from '@/components/vibrant-sections';
import { IndianWeddingCarousel } from '@/components/indian-wedding-carousel';
import { ArrowLink, GalleryCard, ImageFrame, Marquee, Reveal, Stats, Testimonials } from '@/components/ui';

export default function Home() {
  return <Shell><main>
    <section className="hero vibrant-hero home-video-hero">
      <SplitHeroVideos />
      <div className="home-hero-video-shade" />
      <Reveal className="hero-copy">
        <p className="eyebrow hero-eyebrow"><Camera size={14} /> Mumbai · Delhi · Worldwide</p>
        <h1><span>Full colour.</span><br /><em>Full feeling.</em><br /><span>Forever.</span></h1>
        <p className="hero-sub">Joyful photography and cinematic films for Indian weddings, families, brands, and wildly good celebrations.</p>
        <div className="hero-actions"><Link className="button button-pop" href="/services">Inquire now <Sparkles size={16} /></Link><ArrowLink href="/portfolio">Explore the work</ArrowLink></div>
      </Reveal>
    </section>

    <Marquee />

    <section className="section work-section-colour">
      <RotatingWorkQuote />
      <div className="work-grid">{portfolio.slice(0, 6).map((item, index) => <GalleryCard item={item} index={index} key={item.id} />)}</div>
      <div style={{ marginTop: '7vw' }}><ArrowLink href="/portfolio">View full portfolio</ArrowLink></div>
    </section>

    <IndianFeature />

    <section className="section section-dark colour-dark camera-ready-section">
      <video className="camera-ready-background" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
        <source src="/camera-ready-custom.mp4" type="video/mp4" />
      </video>
      <div className="camera-ready-video-shade" />
      <div className="about-split">
        <Reveal className="about-copy"><p className="eyebrow">The people behind the lens</p><h2>Camera ready.<br />Heart open.</h2><p>Wrap UP is a small photo and film studio obsessed with colour, human connection, and the split-second magic that makes a celebration yours.</p><ArrowLink href="/about" light>Meet the photographers</ArrowLink></Reveal>
        <Reveal className="about-image photo-with-tape" delay={.15}><IndianWeddingCarousel /></Reveal>
      </div>
      <Stats />
    </section>

    <section className="instagram-section colourful-instagram">
      <div className="insta-handle"><div><p className="eyebrow">Fresh from the camera roll</p><h2>@wrapupstudio</h2></div><a href="https://instagram.com" target="_blank" className="arrow-link">Follow the colour <ArrowUpRight size={16} /></a></div>
      <div className="insta-belt"><div className="insta-belt-track">{[0, 1].map(sequence => <div className="insta-belt-sequence" aria-hidden={sequence === 1} key={sequence}>{instagram.map((item, index) => <div className={`insta-item insta-${index + 1}`} key={`${item.id}-${sequence}`}><ImageFrame src={item.src} alt={item.alt} /><span className="insta-index">0{index + 1}</span></div>)}</div>)}</div></div>
    </section>

    <Testimonials />

    <section className="section cta-section colour-cta"><div className="cta-camera"><Camera size={48} /></div><p className="eyebrow">Made around your story</p><h2 className="section-heading">Your big day.<br /><em>Your brightest memories.</em></h2><p className="hero-sub">Photo, film and drone experiences shaped around your people, place, and celebration.</p><Link className="button button-pop" href="/services">Explore our services <ArrowUpRight size={16} /></Link></section>
  </main></Shell>;
}
