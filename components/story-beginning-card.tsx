'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getRandomStoryVideoDelay, getRandomSwipeDirection, storyVideoFadeVariants, storyVideoSlideVariants } from '@/lib/story-video-motion';

const beginningVideos = [
  '/story-beginning-01.mp4',
  '/story-beginning-02.mp4',
];

export function StoryBeginningCard() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let timer = 0;

    const showNextVideo = () => {
      setDirection(current => getRandomSwipeDirection(current));
      setActive(current => (current + 1) % beginningVideos.length);
      timer = window.setTimeout(showNextVideo, getRandomStoryVideoDelay());
    };

    timer = window.setTimeout(showNextVideo, getRandomStoryVideoDelay());
    return () => window.clearTimeout(timer);
  }, []);

  const video = beginningVideos[active];
  return (
    <>
      <div className="beginning-card-media" aria-hidden="true">
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
      <div className="beginning-card-copy">
        <strong>1996</strong>
        <h3>The year our story began</h3>
        <p>Three decades of learning where the real moments hide.</p>
      </div>
    </>
  );
}
