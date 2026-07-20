import { Camera, Sparkles } from 'lucide-react';
import { Shell } from '@/components/site-shell';
import { ColourPlanBuilder } from '@/components/colour-plan-builder';
import { ExperienceHighlights } from '@/components/vibrant-sections';

export default function ServicesPage() {
  return <Shell><main className="builder-page colourful-services">
    <div className="page-intro services-intro" style={{ padding: '5vw 0 7vw', border: 0 }}>
      <p className="eyebrow"><Camera size={14} /> Photography · Film · Drone</p>
      <span className="services-sale-pill"><Sparkles size={14} /> Made around your story</span>
      <h1>Big colour.<br /><em>Real feeling.</em></h1>
      <p className="intro-copy">Choose a starting point, add the details you love, and shape a photography experience that feels entirely yours.</p>
    </div>
    <ExperienceHighlights />
    <div id="plan-builder"><ColourPlanBuilder /></div>
  </main></Shell>;
}
