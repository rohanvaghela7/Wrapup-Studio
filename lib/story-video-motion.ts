export const storySwipeDirections = [
  { enter: { x: '100%', y: 0 }, exit: { x: '-100%', y: 0 } },
  { enter: { x: '-100%', y: 0 }, exit: { x: '100%', y: 0 } },
  { enter: { x: 0, y: '100%' }, exit: { x: 0, y: '-100%' } },
  { enter: { x: 0, y: '-100%' }, exit: { x: 0, y: '100%' } },
];

export const storyVideoSlideVariants = {
  enter: (direction: number) => ({
    opacity: 1,
    ...storySwipeDirections[direction].enter,
  }),
  center: { opacity: 1, x: 0, y: 0 },
  exit: (direction: number) => ({
    opacity: 1,
    ...storySwipeDirections[direction].exit,
  }),
};

export const storyVideoFadeVariants = {
  enter: { opacity: 0, x: 0, y: 0 },
  center: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
};

export function getRandomSwipeDirection(current: number) {
  let next = current;

  while (next === current) {
    next = Math.floor(Math.random() * storySwipeDirections.length);
  }

  return next;
}

export function getRandomStoryVideoDelay() {
  return Math.round(3200 + Math.random() * 2800);
}
