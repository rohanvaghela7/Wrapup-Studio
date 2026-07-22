import { Aperture, Camera, Clapperboard, Heart, Sparkles } from 'lucide-react';
import { shootTypes } from '@/lib/pricing-config';

const typeIcons = [Heart, Camera, Aperture, Clapperboard, Sparkles, Camera];

const typeDescriptions = [
  'Full-day stories, photographed with feeling.',
  'Relaxed portraits that still feel like you.',
  'Fashion, ideas, and details with a point of view.',
  'Campaigns and brands brought to life in colour.',
  'Honest connection across every generation.',
  'Every bright moment, from arrival to farewell.',
];

export function ColourPlanBuilder() {
  return <section className="colour-builder static-services-board">
    <div className="colour-progress colour-progress-static">
      <span>WRAP UP SERVICES</span>
      <strong>06 COLLECTIONS</strong>
    </div>

    <div className="builder">
      <div className="builder-main">
        <div className="builder-step colourful-step static-service-step">
          <p className="step-kicker"><Sparkles size={15} /> Made around your story</p>
          <h2>What we<br /><em>photograph.</em></h2>

          <div className="shoot-type-grid">
            {shootTypes.map((item, index) => {
              const Icon = typeIcons[index];

              return <article className="service-display-card" key={item}>
                <Icon size={24} />
                <strong>{item}</strong>
                <span>{typeDescriptions[index]}</span>
              </article>;
            })}
          </div>
        </div>
      </div>

      <aside className="builder-summary colourful-summary static-service-summary">
        <div className="summary-top"><span>EVERY COLLECTION</span><span className="summary-dot" /></div>
        <div className="summary-camera">
          <Camera size={26} />
          <span>Made for you<small>Wrap UP studio experience</small></span>
        </div>
        <div className="summary-items">
          <div><span>Creative direction</span><strong>Included</strong></div>
          <div><span>Timeline planning</span><strong>Included</strong></div>
          <div><span>Edited high-resolution gallery</span><strong>Included</strong></div>
          <div><span>Photo, film, and drone options</span><strong>Available</strong></div>
        </div>
        <div className="summary-promise"><span>Your next step</span><strong>Personal consultation</strong></div>
        <p className="summary-foot">Send an enquiry and we&apos;ll create a tailored proposal around your date, location, and celebration.</p>
      </aside>
    </div>
  </section>;
}
