import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Camera, Sparkles } from 'lucide-react';
import { portfolioPhotos, portfolioVideos } from '@/lib/data';
import { Shell } from '@/components/site-shell';
import { IndianFeature, RotatingWorkQuote, SplitHeroVideos } from '@/components/vibrant-sections';
import { IndianWeddingCarousel } from '@/components/indian-wedding-carousel';
import { ArrowLink, GalleryCard, Marquee, Reveal, Stats, Testimonials } from '@/components/ui';

const beltPhotos = [
  { src: '/belt/belt-photo-01.jpg', alt: 'Newlywed couple in ivory wedding attire' },
  { src: '/belt/belt-photo-02.jpg', alt: 'Couple seated together on a lawn' },
  { src: '/belt/belt-photo-03.jpg', alt: 'Bride in red wedding attire against a patterned backdrop' },
  { src: '/belt/belt-photo-04.jpg', alt: 'Bride and bridesmaids posing on venue steps' },
  { src: '/belt/belt-photo-05.jpg', alt: 'Wedding couple beneath a floral ceremony canopy' },
  { src: '/belt/belt-photo-06.jpg', alt: 'Bride and groom posing on a palace staircase' },
  { src: '/belt/belt-photo-07.jpg', alt: 'Bride during a traditional wedding ceremony' },
  { src: '/belt/belt-photo-08.jpg', alt: 'Newly engaged couple showing their rings' },
];

const homePortfolio = [
  portfolioVideos[0],
  portfolioVideos[1],
  portfolioVideos[2],
  portfolioPhotos[4],
  portfolioVideos[4],
  portfolioPhotos[13],
];

export default function Home() {
  return <Shell><main>
    <section className="hero vibrant-hero home-video-hero">
      <SplitHeroVideos />
      <div className="home-hero-video-shade" />
      <Reveal className="hero-copy">
        <p className="eyebrow hero-eyebrow"><Camera size={14} /> Mumbai · Delhi · Worldwide</p>
        <h1><span>Full colour.</span><br /><em>Full feeling.</em><br /><span>Forever.</span></h1>
        <p className="hero-sub">Joyful photography and cinematic films for Indian weddings, families, brands, and wildly good celebrations.</p>
        <div className="hero-actions"><Link className="button button-pop" href="/contact">Inquire now <Sparkles size={16} /></Link><ArrowLink href="/portfolio">Explore the work</ArrowLink></div>
      </Reveal>
    </section>

    <Marquee />

    <section className="section work-section-colour">
      <RotatingWorkQuote />
      <div className="work-grid">{homePortfolio.map((item, index) => <GalleryCard item={item} index={index} key={item.id} />)}</div>
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
      <div className="insta-belt" aria-label="Wedding camera roll">
        <div className="insta-belt-track">
          {[0, 1].map(sequence => <div className="insta-belt-sequence" aria-hidden={sequence === 1} key={sequence}>{beltPhotos.map((photo, index) => <div className={`insta-item insta-photo insta-${index + 1}`} key={`${sequence}-${photo.src}`}><div className="insta-belt-media"><Image src={photo.src} alt={sequence === 0 ? photo.alt : ''} fill sizes="(max-width: 700px) 230px, 300px" /></div><span className="insta-index">{String(index + 1).padStart(2, '0')}</span></div>)}</div>)}
        </div>
      </div>
    </section>

    <Testimonials />

    <section className="section cta-section colour-cta">
      <div className="cta-copy">
        <div className="cta-camera"><Camera size={42} /></div>
        <p className="eyebrow"><span className="cta-number">01</span> Made around your story</p>
        <h2 className="section-heading">Your big day.<br /><em>Your brightest memories.</em></h2>
        <p className="hero-sub">Photo, film and drone experiences shaped around your people, place, and celebration.</p>
        <div className="cta-actions"><Link className="button button-pop" href="/contact">Let&apos;s talk <ArrowUpRight size={16} /></Link><span className="cta-note">Let’s make something worth remembering.</span></div>
      </div>
      <div className="cta-collage" aria-label="Wrap UP wedding photography">
        <div className="cta-frame cta-frame-main"><video src="/client-story-04.mp4" autoPlay muted loop playsInline preload="metadata" aria-label="Wedding story film" /></div>
        <div className="cta-frame cta-frame-small"><video src="/client-story-02.mp4" autoPlay muted loop playsInline preload="metadata" aria-label="Celebration portrait film" /></div>
        <div className="cta-sticker">PHOTO<br />FILM<br />DRONE</div>
        <span className="cta-collage-label">WRAP UP / 2026</span>
      </div>
    </section>
  </main></Shell>;
}
