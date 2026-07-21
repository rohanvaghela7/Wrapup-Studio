'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const weddingSlides = [
  { src: '/camera-ready-indian-wedding.mp4', alt: 'Indian wedding ceremony film', label: 'Wedding rituals' },
  { src: '/client-story-01.mp4', alt: 'Bride and groom story film', label: 'Bride + groom' },
  { src: '/client-story-03.mp4', alt: 'Colourful celebration film', label: 'Full colour' },
  { src: '/client-story-05.mp4', alt: 'Cinematic wedding portrait film', label: 'Wedding portrait' },
  { src: '/home-hero-slide-left-2.mp4', alt: 'Wedding film at golden hour', label: 'Golden hour' },
  { src: '/home-hero-slide-right-2.mp4', alt: 'Newly married couple film', label: 'Just married' },
];

const swipeDirections = [
  { x: 100, y: 0 },
  { x: -100, y: 0 },
  { x: 0, y: 100 },
  { x: 0, y: -100 },
];

const slideVariants = {
  enter: (direction: { x: number; y: number }) => ({ x: `${direction.x}%`, y: `${direction.y}%`, opacity: .25, scale: 1.04 }),
  center: { x: 0, y: 0, opacity: 1, scale: 1 },
  exit: (direction: { x: number; y: number }) => ({ x: `${-direction.x}%`, y: `${-direction.y}%`, opacity: .15, scale: 1.04 }),
};

export function IndianWeddingCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(swipeDirections[0]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDirection(swipeDirections[Math.floor(Math.random() * swipeDirections.length)]);
      setActive(current => {
        let next = Math.floor(Math.random() * weddingSlides.length);
        while (next === current) next = Math.floor(Math.random() * weddingSlides.length);
        return next;
      });
    }, 4000);
    return () => window.clearInterval(timer);
  }, []);

  const slide = weddingSlides[active];
  return <div className="indian-wedding-carousel">
    <AnimatePresence initial={false} custom={direction} mode="sync">
      <motion.div key={slide.src} className="indian-wedding-slide" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: .9, ease: [.76, 0, .24, 1] }}>
        <video src={slide.src} autoPlay muted loop playsInline preload="metadata" className="indian-wedding-image" aria-label={slide.alt} />
      </motion.div>
    </AnimatePresence>
    <div className="indian-wedding-shade" />
    <div className="indian-wedding-label"><span>{slide.label}</span><strong>0{active + 1} / 0{weddingSlides.length}</strong></div>
    <div className="indian-wedding-dots">{weddingSlides.map((item, index) => <span key={item.src} className={index === active ? 'active' : ''} />)}</div>
  </div>;
}
