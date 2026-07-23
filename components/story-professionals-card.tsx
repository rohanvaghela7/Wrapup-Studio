export function StoryProfessionalsCard() {
  return <>
    <div className="professionals-card-media" aria-hidden="true">
      <video
        src="/story-professionals.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
    <div className="professionals-card-copy">
      <strong>75</strong>
      <h3>Professionals</h3>
      <p>Photographers, filmmakers, editors, pilots, and producers.</p>
    </div>
  </>;
}
