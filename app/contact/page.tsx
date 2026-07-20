import { Shell } from '@/components/site-shell';
import { BookingForm, PageIntro } from '@/components/ui';
import { createPhoneUrl, createWhatsAppUrl, PHONE_DISPLAY, WHATSAPP_DISPLAY } from '@/lib/site-config';

export default function ContactPage() {
  return <Shell><main className="contact-page">
    <PageIntro
      kicker="Say namaste"
      title={<>Let’s make<br /><em>something bright.</em></>}
      backgroundVideo="/camera-ready-indian-wedding.mp4"
    />
    <div className="contact-layout">
      <div className="contact-details">
        <p className="eyebrow">The colourful details</p>
        <p>For weddings, portraits, films, campaigns, and all other good ideas.</p>
        <p>
          <a href="mailto:hello@wrapupstudio.in">hello@wrapupstudio.in</a>
          <a href={createPhoneUrl()}>Call: {PHONE_DISPLAY}</a>
          <a href={createWhatsAppUrl()} target="_blank" rel="noreferrer">
            WhatsApp: {WHATSAPP_DISPLAY}
          </a>
        </p>
        <p>Bandra West, Mumbai<br />Also working from Delhi & Jaipur</p>
      </div>
      <BookingForm />
    </div>
  </main></Shell>;
}
