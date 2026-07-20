'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getRandomStoryVideoDelay, getRandomSwipeDirection, storyVideoFadeVariants, storyVideoSlideVariants } from '@/lib/story-video-motion';

const clientStoryVideos = [
  '/client-story-01.mp4',
  '/client-story-02.mp4',
  '/client-story-03.mp4',
  '/client-story-04.mp4',
  '/client-story-05.mp4',
];

export function StoryClientsCard() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let timer = 0;

    const showNextVideo = () => {
      setDirection(current => getRandomSwipeDirection(current));
      setActive(current => (current + 1) % clientStoryVideos.length);
      timer = window.setTimeout(showNextVideo, getRandomStoryVideoDelay());
    };

    timer = window.setTimeout(showNextVideo, getRandomStoryVideoDelay());
    return () => window.clearTimeout(timer);
  }, []);

  const video = clientStoryVideos[active];
  return (
    <>
      <div className="client-card-media" aria-hidden="true">
        <AnimatePresence initial={false} mode="sync" custom={direction}>
          <motion.video
            key={video}
            custom={direction}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            variants={reduceMotion ? storyVideoFadeVariants : storyVideoSlideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ scale: 1.06 }}
            transition={{ duration: reduceMotion ? .2 : .9, ease: [.76, 0, .24, 1] }}
          />
        </AnimatePresence>
      </div>
      <div className="client-card-copy">
        <strong>7,800+</strong>
        <h3>Clients served</h3>
        <p>Weddings, families, founders, artists, and global brands.</p>
      </div>
    </>
  );
}
