'use client';

import Link from 'next/link';
import { Aperture, ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPhoneUrl, PHONE_DISPLAY } from '@/lib/site-config';
import { ScrollProgressTracker } from './ui';

function HandDrawnFilters() {
  return (
    <svg className="talk-button-filters" aria-hidden="true" width="0" height="0">
      <filter id="handDrawnNoise">
        <feTurbulence result="noise" numOctaves="8" baseFrequency="0.1" type="fractalNoise" />
        <feDisplacementMap yChannelSelector="G" xChannelSelector="R" scale="3" in2="noise" in="SourceGraphic" />
      </filter>
      <filter id="handDrawnNoise2">
        <feTurbulence result="noise" numOctaves="8" baseFrequency="0.1" seed="1010" type="fractalNoise" />
        <feDisplacementMap yChannelSelector="G" xChannelSelector="R" scale="3" in2="noise" in="SourceGraphic" />
      </filter>
      <filter id="handDrawnNoiset">
        <feTurbulence result="noise" numOctaves="8" baseFrequency="0.1" type="fractalNoise" />
        <feDisplacementMap yChannelSelector="G" xChannelSelector="R" scale="6" in2="noise" in="SourceGraphic" />
      </filter>
      <filter id="handDrawnNoiset2">
        <feTurbulence result="noise" numOctaves="8" baseFrequency="0.1" seed="1010" type="fractalNoise" />
        <feDisplacementMap yChannelSelector="G" xChannelSelector="R" scale="6" in2="noise" in="SourceGraphic" />
      </filter>
    </svg>
  );
}

function TalkButton() {
  return (
    <Link className="talk-button" href="/contact" aria-label="Open the contact page">
      <svg className="highlight" viewBox="0 0 144.75738 77.18431" preserveAspectRatio="none" aria-hidden="true">
        <g transform="translate(-171.52826,-126.11624)"><g fill="none" strokeWidth="17" strokeLinecap="round" strokeMiterlimit="10"><path d="M180.02826,169.45123c0,0 12.65228,-25.55115 24.2441,-25.66863c6.39271,-0.06479 -5.89143,46.12943 4.90937,50.63857c10.22345,4.2681 24.14292,-52.38336 37.86455,-59.80493c3.31715,-1.79413 -5.35094,45.88889 -0.78872,58.34589c5.19371,14.18125 33.36934,-58.38221 36.43049,-56.91633c4.67078,2.23667 -0.06338,44.42744 5.22574,47.53647c6.04041,3.55065 19.87185,-20.77286 19.87185,-20.77286" /></g></g>
      </svg>
      <span>Let’s Talk</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <Link href="/" className="brand" aria-label="Wrap UP home">
        <span className="brand-camera"><img src="/icons8-lens-24.png" alt="" /></span>
        <span className="brand-name">WRAP <span>UP</span></span>
        <small>PHOTO + FILM</small>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/portfolio">Work</Link>
        <Link href="/about">Our Story</Link>
        <Link href="/journal">Journal</Link>
      </nav>
      <div className="header-actions">
        <TalkButton />
        <button className="menu-button" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <Link onClick={() => setOpen(false)} href="/portfolio">Work</Link>
          <Link onClick={() => setOpen(false)} href="/about">Our Story</Link>
          <Link onClick={() => setOpen(false)} href="/journal">Journal</Link>
          <a onClick={() => setOpen(false)} href={createPhoneUrl()}>Contact</a>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <div className="footer-mark"><Aperture size={22} /> WRAP <span>UP</span></div>
        <p className="footer-note">Beautiful photographs and films for weddings, families, brands, and unforgettable celebrations.</p>
        <p className="footer-copyright">© 2026 Wrap UP Studio. All rights reserved.</p>
      </div>
      <div className="footer-links">
        <div>
          <p className="eyebrow">Explore</p>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">Our Story</Link>
        </div>
        <div>
          <p className="eyebrow">Elsewhere</p>
          <a className="footer-glitch-link" href="https://instagram.com" target="_blank" rel="noreferrer">
            <span className="footer-glitch-text">Instagram</span><span className="footer-glitch-cursor">_</span><ArrowUpRight size={12} />
          </a>
          <a className="footer-glitch-link" href="mailto:hello@wrapupstudio.in">
            <span className="footer-glitch-text">Email</span><span className="footer-glitch-cursor">_</span><ArrowUpRight size={12} />
          </a>
          <a className="footer-glitch-link" href={createPhoneUrl()} aria-label={`Call ${PHONE_DISPLAY}`}>
            <span className="footer-glitch-text">Contact</span><span className="footer-glitch-cursor">_</span><ArrowUpRight size={12} />
          </a>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 Wrap UP Studio. All rights reserved.</span><span>Mumbai · Delhi · Available worldwide</span><span>Photo · Film · Drone</span></div>
    </footer>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  return <><HandDrawnFilters /><ScrollProgressTracker /><div className="scroll-progress" /><Header />{children}<Footer /></>;
}
