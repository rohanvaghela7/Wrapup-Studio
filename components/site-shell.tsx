'use client';

import Link from 'next/link';
import { Aperture, ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPhoneUrl, PHONE_DISPLAY } from '@/lib/site-config';
import { ScrollProgressTracker } from './ui';

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
        <Link href="/services">Services</Link>
        <Link href="/journal">Journal</Link>
      </nav>
      <div className="header-actions">
        <Link className="header-contact talk-link" href="/contact">
          Let’s talk <ArrowUpRight size={14} />
        </Link>
        <button className="menu-button" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <Link onClick={() => setOpen(false)} href="/portfolio">Work</Link>
          <Link onClick={() => setOpen(false)} href="/about">Our Story</Link>
          <Link onClick={() => setOpen(false)} href="/services">Services</Link>
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
          <Link href="/services">Services</Link>
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
  return <><ScrollProgressTracker /><div className="scroll-progress" /><Header />{children}<Footer /></>;
}
