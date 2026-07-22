'use client';

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Aperture, ArrowUpRight, Camera, Sparkles, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { portfolio } from '@/lib/data';
import { Reveal, VideoFrame } from './ui';

export function HeroDecorations() {
  const { scrollY } = useScroll();
  const firstY = useTransform(scrollY, [0, 900], [0, 150]);
  const secondY = useTransform(scrollY, [0, 900], [0, -90]);

  return <div className="hero-decor" aria-hidden="true">
    <motion.span className="colour-orb orb-pink" style={{ y: firstY }} animate={{ rotate: 360, scale: [1, 1.15, 1] }} transition={{ rotate: { duration: 22, repeat: Infinity, ease: 'linear' }, scale: { duration: 4, repeat: Infinity } }} />
    <motion.span className="colour-orb orb-yellow" style={{ y: secondY }} animate={{ rotate: -360, x: [0, 18, 0] }} transition={{ rotate: { duration: 28, repeat: Infinity, ease: 'linear' }, x: { duration: 5, repeat: Infinity } }} />
    <motion.span className="colour-orb orb-blue" animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }} />
  </div>;
}

const workQuotes = [
  { first: 'Life is not', second: 'black & white.', accent: 'Good.' },
  { first: 'Real moments.', second: 'Beautifully', accent: 'framed.' },
  { first: 'Tradition in', second: 'full colour.', accent: 'Always.' },
  { first: 'No stiff poses.', second: 'Just honest', accent: 'joy.' },
  { first: 'Every celebration', second: 'deserves a', accent: 'close-up.' },
];

export function RotatingWorkQuote() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive(current => {
        let next = Math.floor(Math.random() * (workQuotes.length - 1));
        if (next >= current) next += 1;
        return next;
      });
    }, 4400);
    return () => window.clearInterval(timer);
  }, []);

  const quote = workQuotes[active];
  return <h2 className="section-heading rotating-work-heading">
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        className="rotating-work-quote"
        key={active}
        initial={reduceMotion ? false : { opacity: 0, y: 28, filter: 'blur(7px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -24, filter: 'blur(7px)' }}
        transition={{ duration: .62, ease: [.16, 1, .3, 1] }}
      >
        <span>{quote.first}</span><br />
        <span>{quote.second}</span> <em>{quote.accent}</em>
      </motion.span>
    </AnimatePresence>
  </h2>;
}

const leftHeroVideos = ['/home-hero-background.mp4', '/home-hero-slide-left-2.mp4', '/home-hero-slide-left-3.mp4'];
const rightHeroVideos = ['/home-hero-background-right.mp4', '/home-hero-slide-right-2.mp4'];

export function SplitHeroVideos() {
  const [leftActive, setLeftActive] = useState(0);
  const [rightActive, setRightActive] = useState(0);

  useEffect(() => {
    const leftTimer = window.setInterval(() => setLeftActive(current => (current + 1) % leftHeroVideos.length), 5000);
    const rightTimer = window.setInterval(() => setRightActive(current => (current + 1) % rightHeroVideos.length), 8000);
    return () => {
      window.clearInterval(leftTimer);
      window.clearInterval(rightTimer);
    };
  }, []);

  return <div className="home-hero-video-slides" aria-hidden="true">
    <div className="home-hero-video-pane home-hero-video-pane-left">
      <AnimatePresence initial={false} mode="sync">
        <motion.video key={leftActive} className="home-hero-pane-video" src={leftHeroVideos[leftActive]} autoPlay muted loop playsInline preload="metadata" initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 1.05, ease: [.76, 0, .24, 1] }} />
      </AnimatePresence>
    </div>
    <div className="home-hero-video-pane home-hero-video-pane-right">
      <AnimatePresence initial={false} mode="sync">
        <motion.video key={rightActive} className="home-hero-pane-video" src={rightHeroVideos[rightActive]} autoPlay muted loop playsInline preload="metadata" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ duration: 1.05, ease: [.76, 0, .24, 1] }} />
      </AnimatePresence>
    </div>
  </div>;
}

export function CameraBadge() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  return <>
    <motion.button type="button" className="camera-badge" initial={{ opacity: 0, scale: .7, rotate: -15 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: .8, type: 'spring', stiffness: 180 }} whileHover={{ rotate: 3, scale: 1.04 }} whileTap={{ scale: .98 }} onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open}>
      <span className="camera-badge-icon"><Camera size={30} strokeWidth={1.7} /></span>
      <span><strong>Photo + Film</strong><small>Click to open</small></span>
    </motion.button>
    {mounted && createPortal(<AnimatePresence>{open && <motion.div className="photo-film-lightbox" role="dialog" aria-modal="true" aria-label="Photo and film preview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
      <motion.div className="photo-film-lightbox-card" initial={{ opacity: 0, y: 36, scale: .94 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: .96 }} transition={{ duration: .55, ease: [.16, 1, .3, 1] }} onClick={(event) => event.stopPropagation()}>
        <button type="button" className="photo-film-close" onClick={() => setOpen(false)} aria-label="Close preview"><X size={18} /></button>
        <div className="photo-film-preview-frame">
          <div className="film-perforation film-top" /><div className="film-perforation film-bottom" />
          <VideoFrame src={portfolio[0].src} alt={portfolio[0].alt} label="Wedding film · Jaipur" />
          <div className="photo-film-preview-sticker"><Aperture size={25} /><span>WRAP UP<br />FRAME 01</span></div>
          <div className="photo-note">LOVE<br />IN FOCUS</div>
        </div>
        <div className="photo-film-lightbox-copy"><div><p className="eyebrow">Photo + Film</p><h3>Asha + Rohan</h3></div><Link href="/portfolio/weddings" onClick={() => setOpen(false)}>Open the full story <ArrowUpRight size={16} /></Link></div>
      </motion.div>
    </motion.div>}</AnimatePresence>, document.body)}
  </>;
}

export function IndianFeature() {
  return <section className="rang-section">
    <div className="rangoli-mark" aria-hidden="true"><span /><span /><span /><span /><Aperture size={52} /></div>
    <Reveal className="rang-copy">
      <p className="eyebrow">रंग · रोशनी · कहानी</p>
      <h2>India,<br />in every <span className="rang-word-window" aria-label="shade, frame and story"><span className="rang-word-track" aria-hidden="true"><em>shade.</em><em>frame.</em><em>story.</em><em>shade.</em></span></span></h2>
      <p>From haldi yellow and bridal red to the blue hour after the baraat—we photograph celebrations the way they feel: joyful, layered, alive.</p>
      <Link className="rang-link" href="/portfolio/weddings">See Indian celebrations <Sparkles size={16} /></Link>
    </Reveal>
    <div className="rang-collage">
      <motion.div className="rang-photo rang-photo-main" whileInView={{ y: [70, 0], rotate: [-3, 0] }} viewport={{ once: true }} transition={{ duration: 1, ease: [.22, 1, .36, 1] }}><VideoFrame src={portfolio[0].src} alt="Joyful wedding celebration film" label="Shaadi · Jaipur" /></motion.div>
      <motion.div className="rang-photo rang-photo-small" whileInView={{ y: [-50, 0], rotate: [6, 2] }} viewport={{ once: true }} transition={{ duration: 1.1, delay: .12, ease: [.22, 1, .36, 1] }}><VideoFrame src={portfolio[4].src} alt="Colourful portfolio showreel" label="Films · India" /></motion.div>
      <motion.div className="film-stamp" animate={{ rotate: [2, -2, 2] }} transition={{ duration: 4, repeat: Infinity }}><Camera size={19} /> 35MM / DIGITAL / DRONE</motion.div>
    </div>
  </section>;
}
