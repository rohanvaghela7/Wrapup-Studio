'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const weddingSlides = [
  { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1400&q=88', alt: 'Indian wedding couple during a traditional ceremony', label: 'Wedding rituals' },
  { src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1400&q=88', alt: 'Indian bride and groom celebrating together', label: 'Bride + groom' },
  { src: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=1400&q=88', alt: 'Colourful Indian wedding celebration', label: 'Full colour' },
  { src: 'https://images.unsplash.com/photo-1610173827043-9db50e0d8ef9?auto=format&fit=crop&w=1400&q=88', alt: 'Traditional Indian bridal portrait', label: 'Bridal portrait' },
  { src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1400&q=88', alt: 'Wedding couple walking together', label: 'Golden hour' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=88', alt: 'Newly married couple in soft natural light', label: 'Just married' },
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
        <Image src={slide.src} alt={slide.alt} fill sizes="(max-width: 800px) 100vw, 48vw" className="indian-wedding-image" />
      </motion.div>
    </AnimatePresence>
    <div className="indian-wedding-shade" />
    <div className="indian-wedding-label"><span>{slide.label}</span><strong>0{active + 1} / 0{weddingSlides.length}</strong></div>
    <div className="indian-wedding-dots">{weddingSlides.map((item, index) => <span key={item.src} className={index === active ? 'active' : ''} />)}</div>
  </div>;
}
