'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type IntroPhase = 'playing' | 'capturing';

export function SiteIntro() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<IntroPhase>('playing');
  const finishing = useRef(false);
  const exitTimer = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const finishIntro = useCallback(() => {
    if (finishing.current) return;
    finishing.current = true;

    videoRef.current?.pause();
    setPhase('capturing');
    exitTimer.current = window.setTimeout(() => {
      document.documentElement.classList.remove('site-intro-active');
      setVisible(false);
    }, 1800);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add('site-intro-active');
    const video = videoRef.current;
    const startPlayback = () => {
      if (!finishing.current) void video?.play().catch(() => undefined);
    };
    const emergencyTimer = window.setTimeout(finishIntro, 15000);

    video?.addEventListener('canplay', startPlayback);
    startPlayback();

    return () => {
      video?.removeEventListener('canplay', startPlayback);
      window.clearTimeout(emergencyTimer);
      if (exitTimer.current) window.clearTimeout(exitTimer.current);
      document.documentElement.classList.remove('site-intro-active');
    };
  }, [finishIntro]);

  if (!visible) return null;

  return <div className={`site-intro site-intro-${phase}`} aria-label="Wrap UP opening film">
    <div className="site-intro-video-shell">
      <video
        ref={videoRef}
        className="site-intro-video"
        src="/site-intro.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onTimeUpdate={event => {
          const video = event.currentTarget;
          if (video.duration && video.duration - video.currentTime <= .75) finishIntro();
        }}
        onEnded={finishIntro}
      />
      <div className="site-intro-video-shade" />
      <div className="site-intro-photo-stamp"><strong>WRAP UP</strong><span>Captured in full colour</span></div>
    </div>
    <div className="site-intro-flash" aria-hidden="true" />
    <div className="site-intro-shutter" aria-hidden="true" />
    <div className="site-intro-brand">WRAP <span>UP</span><small>Opening frame</small></div>
    <button className="site-intro-skip" type="button" onClick={finishIntro}>Skip intro</button>
  </div>;
}
