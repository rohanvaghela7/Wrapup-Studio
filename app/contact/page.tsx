import { Shell } from '@/components/site-shell';
import { BookingForm, PageIntro } from '@/components/ui';

const officeLocations = ['Ahmedabad', 'Mehsana', 'Delhi', 'Mumbai', 'Pune', 'Jaipur', 'Udaipur'];

export default function ContactPage() {
  return <Shell><main className="contact-page">
    <PageIntro
      kicker="Say namaste"
      title={<>Let’s make<br /><em>something bright.</em></>}
      backgroundVideo="/camera-ready-indian-wedding.mp4"
    />
    <div className="contact-layout">
      <div className="contact-details">
        <p className="eyebrow">Where we create</p>
        <h2 className="contact-location-title">Seven cities.<br /><em>One colourful vision.</em></h2>
        <p className="contact-location-copy">From intimate celebrations to grand destination weddings, our teams are ready to document every honest, joyful moment.</p>
        <div className="office-locations">
          <p className="office-locations-label">Available in</p>
          <ul className="office-location-list">
            {officeLocations.map((location) => <li key={location}>{location}</li>)}
          </ul>
        </div>
      </div>
      <BookingForm />
    </div>
  </main></Shell>;
}
