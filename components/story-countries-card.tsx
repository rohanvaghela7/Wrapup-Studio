'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getRandomStoryVideoDelay, getRandomSwipeDirection, storyVideoFadeVariants, storyVideoSlideVariants } from '@/lib/story-video-motion';

const countrySlides = [
  { src: '/country-dubai.mp4', label: 'Dubai · UAE' },
  { src: '/country-canada.mp4', label: 'Canada' },
  { src: '/country-india.mp4', label: 'Agra · India' },
  { src: '/country-usa.mp4', label: 'New York · USA' },
];

export function StoryCountriesCard() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let timer = 0;

    const showNextVideo = () => {
      setDirection(current => getRandomSwipeDirection(current));
      setActive(current => (current + 1) % countrySlides.length);
      timer = window.setTimeout(showNextVideo, getRandomStoryVideoDelay());
    };

    timer = window.setTimeout(showNextVideo, getRandomStoryVideoDelay());
    return () => window.clearTimeout(timer);
  }, []);

  const slide = countrySlides[active];
  return <>
    <div className="country-card-media">
      <AnimatePresence initial={false} mode="sync" custom={direction}>
        <motion.video key={slide.src} custom={direction} src={slide.src} autoPlay muted loop playsInline preload="metadata" variants={reduceMotion ? storyVideoFadeVariants : storyVideoSlideVariants} initial="enter" animate="center" exit="exit" style={{ scale: 1.08 }} transition={{ duration: reduceMotion ? .2 : .9, ease: [.76, 0, .24, 1] }} />
      </AnimatePresence>
      <motion.span className="country-card-location" key={slide.label} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>{slide.label}</motion.span>
    </div>
    <div className="country-card-copy"><strong>6</strong><h3>Countries reached</h3><p>One creative standard, shaped for every place and culture.</p></div>
  </>;
}
