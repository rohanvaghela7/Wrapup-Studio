'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Camera, Check, ChevronLeft, ChevronRight, Film, Heart, Plus, Send, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { testimonials } from '@/lib/data';
import { bookingAvailability } from '@/lib/mock-data';
import { addOns, formatINR, packageTiers } from '@/lib/pricing-config';
import { createWhatsAppUrl } from '@/lib/site-config';

export function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 56, rotate: 1.2 }} whileInView={reduce ? undefined : { opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ duration: .95, delay, ease: [.16, 1, .3, 1] }}>{children}</motion.div>;
}

export function ImageFrame({ src, alt, label, className = '', priority = false, contain = false, aspectRatio }: { src: string; alt: string; label?: string; className?: string; priority?: boolean; contain?: boolean; aspectRatio?: string }) {
  return <motion.div className={`image-frame ${contain ? 'media-fit-contain' : ''} ${className}`} style={aspectRatio ? { aspectRatio } : undefined} whileHover={contain ? undefined : { scale: 1.015, rotate: -.35 }} transition={{ type: 'spring', stiffness: 180, damping: 20 }}><Image src={src} alt={alt} fill sizes="(max-width: 560px) 100vw, (max-width: 800px) 50vw, 33vw" priority={priority} className="cover-image" />{label && <span className="image-label"><Camera size={12} />{label}</span>}</motion.div>;
}

export function VideoFrame({ src, alt, label, className = '', contain = false, aspectRatio }: { src: string; alt: string; label?: string; className?: string; contain?: boolean; aspectRatio?: string }) {
  return <motion.div className={`image-frame media-video-frame ${contain ? 'media-fit-contain' : ''} ${className}`} style={aspectRatio ? { aspectRatio } : undefined} whileHover={contain ? undefined : { scale: 1.015, rotate: -.35 }} transition={{ type: 'spring', stiffness: 180, damping: 20 }}><video src={src} autoPlay muted loop playsInline preload="metadata" className="cover-image" aria-label={alt} />{label && <span className="image-label"><Film size={12} />{label}</span>}</motion.div>;
}

export function ArrowLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) { return <Link className={`arrow-link ${light ? 'light' : ''}`} href={href}>{children}<ArrowUpRight size={16} /></Link>; }

export function Marquee() { return <div className="marquee" aria-label="Services"><div className="marquee-track">INDIAN WEDDINGS <i>✦</i> PHOTO + FILM <i>✦</i> DRONE <i>✦</i> PORTRAITS <i>✦</i> PRE-WEDDING <i>✦</i> HALDI <i>✦</i> INDIAN WEDDINGS <i>✦</i> PHOTO + FILM <i>✦</i> DRONE <i>✦</i> PORTRAITS <i>✦</i> PRE-WEDDING <i>✦</i> HALDI <i>✦</i></div></div>; }

function CountUpStat({ target, label, index }: { target: number; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(reduceMotion ? target : 0);

  useEffect(() => {
    if (!isInView) return;

    if (reduceMotion) {
      setValue(target);
      return;
    }

    let animationFrame = 0;
    const duration = 1400 + index * 180;
    const startTime = performance.now();

    const count = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(count);
      }
    };

    animationFrame = requestAnimationFrame(count);
    return () => cancelAnimationFrame(animationFrame);
  }, [index, isInView, reduceMotion, target]);

  return (
    <Reveal delay={index * .12}>
      <motion.div
        ref={ref}
        className="stat"
        whileHover={{ y: -10, rotate: index === 1 ? 1 : -1 }}
      >
        <span className="stat-number">{value}<sup>+</sup></span>
        <span className="stat-label">{label}</span>
      </motion.div>
    </Reveal>
  );
}

export function Stats() {
  const stats = [
    { target: 250, label: 'weddings in full colour' },
    { target: 12, label: 'years behind the camera' },
    { target: 24, label: 'cities across India' },
  ];

  return (
    <div className="stats">
      {stats.map((stat, index) => (
        <CountUpStat key={stat.label} {...stat} index={index} />
      ))}
    </div>
  );
}

export function Testimonials() { const [active, setActive] = useState(0); const item = testimonials[active]; useEffect(() => { const timer = window.setInterval(() => setActive(current => (current + 1) % testimonials.length), 6500); return () => window.clearInterval(timer); }, []); return <section className="testimonial-section section-dark"><div className="section-intro"><p className="eyebrow">Kind words</p><span className="muted">0{active + 1} / 0{testimonials.length}</span></div><div className="quote-wrap"><div className="quote-mark">“</div><AnimatePresence mode="wait"><motion.div key={active} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: .6 }}><blockquote>{item.quote}</blockquote><p className="quote-attribution">{item.name}<span>{item.type}</span></p></motion.div></AnimatePresence></div><div className="carousel-controls"><button onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial"><ChevronLeft /></button><button onClick={() => setActive((active + 1) % testimonials.length)} aria-label="Next testimonial"><ChevronRight /></button></div></section>; }

export function ScrollProgressTracker() { useEffect(() => { const updateProgress = () => { const height = document.documentElement.scrollHeight - window.innerHeight; document.documentElement.style.setProperty('--scroll-progress', `${height > 0 ? (window.scrollY / height) * 100 : 0}%`); }; window.addEventListener('scroll', updateProgress, { passive: true }); updateProgress(); return () => window.removeEventListener('scroll', updateProgress); }, []); return null; }

export function GalleryCard({ item, index = 0, photoOnly = false, onOpen }: { item: any; index?: number; photoOnly?: boolean; onOpen?: () => void }) {
  const isVideo = item.mediaType === 'video';

  if (photoOnly) {
    return <Reveal delay={Math.min(index * .025, .3)} className={`gallery-card ${item.size || ''}`}>
      <button className="gallery-photo-button" type="button" onClick={onOpen} aria-label={`Open ${item.alt}`}>
        <ImageFrame src={item.src} alt={item.alt} className="gallery-media-frame" contain aspectRatio={item.width && item.height ? `${item.width} / ${item.height}` : undefined} />
      </button>
    </Reveal>;
  }

  return <Reveal delay={Math.min(index * .025, .3)} className={`gallery-card ${item.size || ''} ${isVideo ? 'gallery-video-card' : 'gallery-photo-card'}`}>
    <Link href={`/portfolio/${item.category.toLowerCase()}`}>
      {isVideo
        ? <div className="gallery-video-wrap"><VideoFrame src={item.src} alt={item.alt} className="gallery-media-frame" contain aspectRatio="16 / 9" /></div>
        : <><ImageFrame src={item.src} alt={item.alt} label={item.category} className="gallery-media-frame" contain aspectRatio={item.width && item.height ? `${item.width} / ${item.height}` : undefined} /><div className="gallery-caption"><span>{item.title}</span><span>{item.location}</span></div></>}
    </Link>
  </Reveal>;
}

export function FavoriteButton({ id }: { id: string }) { const [liked, setLiked] = useState(false); useEffect(() => setLiked(localStorage.getItem(`favorite-${id}`) === 'true'), [id]); const toggle = () => { setLiked(!liked); localStorage.setItem(`favorite-${id}`, String(!liked)); }; return <button className={`favorite ${liked ? 'is-liked' : ''}`} onClick={toggle} aria-label={liked ? 'Remove from favorites' : 'Add to favorites'}><Heart size={17} fill={liked ? 'currentColor' : 'none'} /></button>; }

export function ScrollMark() { return <div className="scroll-mark"><span>Scroll to explore</span><ArrowDown size={14} /></div>; }

export function PageIntro({ kicker, title, text, backgroundVideo, backgroundImage }: { kicker: string; title: React.ReactNode; text?: string; backgroundVideo?: string; backgroundImage?: string }) { const hasBackground = Boolean(backgroundVideo || backgroundImage); return <section className={`page-intro ${hasBackground ? 'page-intro-video' : ''}`}>{backgroundVideo && <video className="page-intro-video-media" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src={backgroundVideo} type="video/mp4" /></video>}{backgroundImage && <Image className="page-intro-video-media" src={backgroundImage} alt="" fill priority sizes="100vw" aria-hidden="true" />}{hasBackground && <div className="page-intro-video-shade" />}<Reveal className={hasBackground ? 'page-intro-content' : ''}><p className="eyebrow">{kicker}</p><h1>{title}</h1>{text && <p className="intro-copy">{text}</p>}</Reveal></section>; }

const sendMessageLetters = Array.from('SEND VIA WHATSAPP');
const sentMessageLetters = Array.from('SENT');

export function BookingForm() {
  const [sent, setSent] = useState(false);

  const send = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '');
    const email = String(form.get('email') || '');
    const message = String(form.get('message') || '');
    const whatsappMessage = [
      'Hello Wrap UP, I would like to enquire about a photography booking.',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Message: ${message}`,
    ].join('\n');
    window.open(createWhatsAppUrl(whatsappMessage), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return <form className="contact-form" onSubmit={send}>
      <div className="form-row">
        <label>Your name<input name="name" required placeholder="First and last name" /></label>
        <label>Email address<input name="email" type="email" required placeholder="you@example.com" /></label>
      </div>
      <label>Tell us a little more<textarea name="message" rows={5} placeholder="The feeling, the place, the people…" /></label>
      <button
        className={`send-message-button ${sent ? 'is-sent' : ''}`}
        type="submit"
        disabled={sent}
        aria-label={sent ? 'Message sent' : 'Send via WhatsApp'}
      >
        <span className="send-button-outline" aria-hidden="true" />
        <span className="send-button-state send-button-state-default" aria-hidden="true">
          <span className="send-button-icon"><Send size={19} strokeWidth={1.8} /></span>
          <span className="send-button-letters">
            {sendMessageLetters.map((letter, index) => (
              <span key={`${letter}-${index}`} style={{ '--i': index } as React.CSSProperties}>
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </span>
        </span>
        <span className="send-button-state send-button-state-sent" aria-hidden="true">
          <span className="send-button-icon"><Check size={20} strokeWidth={2} /></span>
          <span className="send-button-letters">
            {sentMessageLetters.map((letter, index) => (
              <span key={`${letter}-${index}`} style={{ '--i': index + 5 } as React.CSSProperties}>{letter}</span>
            ))}
          </span>
        </span>
      </button>
      {sent && <p className="send-message-confirmation" role="status">Message sent! WhatsApp is ready with your enquiry.</p>}
    </form>;
}

export function PlanBuilder() { const [step, setStep] = useState(1); const [type, setType] = useState('Wedding'); const [tier, setTier] = useState('signature'); const [selected, setSelected] = useState<string[]>([]); const chosen = packageTiers.find((item) => item.id === tier)!; const total = chosen.price + addOns.filter((item) => selected.includes(item.id)).reduce((sum, item) => sum + item.price, 0); const toggle = (id: string) => setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]); return <div className="builder"><div className="builder-main"><div className="builder-progress"><span className="eyebrow">Your experience</span><span>Step {step} of 4</span></div><AnimatePresence mode="wait">{step === 1 && <motion.div key="step-1" className="builder-step" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-18}}><h2>What are we<br /><em>making together?</em></h2><div className="choice-grid">{['Wedding','Portrait','Editorial','Commercial','Family','Event'].map(item => <button key={item} className={`choice-card ${type === item ? 'selected' : ''}`} onClick={() => { setType(item); setStep(2); }}>{item}<ArrowUpRight size={16} /></button>)}</div></motion.div>}{step === 2 && <motion.div key="step-2" className="builder-step" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-18}}><h2>Choose your<br /><em>starting point.</em></h2><div className="tier-list">{packageTiers.map((item) => <button key={item.id} onClick={() => setTier(item.id)} className={`tier-card ${tier === item.id ? 'selected' : ''}`}><span className="tier-name">{item.name}</span><strong>${item.price.toLocaleString()}</strong><span>{item.description}</span><small>{item.hours} · {item.photos} · {item.delivery}</small></button>)}</div><div className="step-actions"><button className="text-button" onClick={() => setStep(1)}>Back</button><button className="button button-dark" onClick={() => setStep(3)}>Continue <ArrowUpRight size={16} /></button></div></motion.div>}{step === 3 && <motion.div key="step-3" className="builder-step" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-18}}><h2>Add the<br /><em>little extras.</em></h2><p className="muted step-note">Optional ways to make the final collection feel even more like yours.</p><div className="addon-list">{addOns.map((item) => <button key={item.id} className={`addon-row ${selected.includes(item.id) ? 'selected' : ''}`} onClick={() => toggle(item.id)}><span className="addon-check">{selected.includes(item.id) ? <Check size={14} /> : <Plus size={14} />}</span><span><strong>{item.label}</strong><small>{item.detail}</small></span><b>+${item.price}</b></button>)}</div><div className="step-actions"><button className="text-button" onClick={() => setStep(2)}>Back</button><button className="button button-dark" onClick={() => setStep(4)}>See your estimate <ArrowUpRight size={16} /></button></div></motion.div>}{step === 4 && <motion.div key="step-4" className="builder-step" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}}><div className="final-kicker">A thoughtful beginning</div><h2>Your {type.toLowerCase()}<br /><em>looks like this.</em></h2><div className="final-details"><p>We’ll hold your date with a 30% retainer. Your full proposal will include a tailored timeline, location guidance, and a few questions to make sure we’re a good fit.</p><Link href={`/booking?type=${type}&package=${chosen.name}&total=${total}`} className="button button-dark">Request this package <ArrowUpRight size={16} /></Link></div><button className="text-button" onClick={() => setStep(3)}>Edit selections</button></motion.div>}</AnimatePresence></div><aside className="builder-summary"><div className="summary-top"><span className="eyebrow">Your estimate</span><span className="summary-dot" /></div><p className="summary-type">{type}<span>{chosen.name} collection</span></p><div className="summary-items"><div><span>Base collection</span><strong>${chosen.price.toLocaleString()}</strong></div>{addOns.filter((item) => selected.includes(item.id)).map((item) => <div key={item.id}><span>{item.label}</span><strong>${item.price}</strong></div>)}</div><div className="summary-total"><span>Estimated total</span><motion.strong key={total} initial={{opacity:.35,y:8}} animate={{opacity:1,y:0}}>${total.toLocaleString()}</motion.strong></div><p className="summary-foot">A custom proposal will follow your enquiry.</p></aside></div>; }

export function DownloadButton() { const [ready, setReady] = useState(false); return <button className="button button-dark" onClick={() => setReady(true)}>{ready ? 'Selection queued ✓' : 'Select & download'}</button>; }

export function AvailabilityCalendar() { const [selected, setSelected] = useState<number | null>(null); const [slot, setSlot] = useState(''); return <div className="availability"><div className="calendar-head"><button aria-label="Previous month" disabled><ChevronLeft size={17}/></button><h3>{bookingAvailability.monthLabel}</h3><button aria-label="Next month" disabled><ChevronRight size={17}/></button></div><div className="weekdays">{['S','M','T','W','T','F','S'].map((day,index)=><span key={`${day}-${index}`}>{day}</span>)}</div><div className="calendar-grid">{Array.from({length:bookingAvailability.leadingBlankDays}).map((_,i)=><span key={`empty-${i}`} />)}{Array.from({length:bookingAvailability.daysInMonth}).map((_,i)=>{const day=i+1;const disabled=bookingAvailability.unavailableDays.includes(day);return <button key={day} disabled={disabled} className={selected===day?'selected':''} onClick={()=>setSelected(day)}><span>{day}</span></button>})}</div><AnimatePresence>{selected && <motion.div className="slot-panel" initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}}><div><p className="eyebrow">September {selected}</p><h4>Choose a time</h4></div><div className="slot-list">{bookingAvailability.timeSlots.map(time=><button key={time} className={slot===time?'selected':''} onClick={()=>setSlot(time)}>{time}</button>)}</div>{slot&&<p className="slot-note">Perfect. We’ll include {slot} in your enquiry below.</p>}</motion.div>}</AnimatePresence></div>; }
