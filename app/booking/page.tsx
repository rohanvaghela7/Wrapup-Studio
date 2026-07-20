import { Shell } from '@/components/site-shell';
import { BookingForm, PageIntro } from '@/components/ui';

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; package?: string; total?: string }>;
}) {
  const enquiry = await searchParams;

  return <Shell><main className="contact-page">
    <PageIntro
      kicker="Start a conversation"
      title={<>Let’s make it<br /><em>bright.</em></>}
      text="Dates are held on a first-conversation basis. Tell us what you have in mind and we’ll reply with availability, ideas, and next steps."
    />
    <div className="contact-layout">
      <div className="contact-details">
        <p className="eyebrow">Your colourful enquiry</p>
        {enquiry.type && <p>
          Planning a <strong>{enquiry.type.toLowerCase()}</strong> with our{' '}
          <strong>{enquiry.package}</strong> collection
          {enquiry.total ? `, estimated at ₹${Number(enquiry.total).toLocaleString('en-IN')}` : ''}.
        </p>}
        <p>Please include your preferred date in the message so we can confirm availability.</p>
        <p>For a faster answer, email<br /><a href="mailto:hello@wrapupstudio.in">hello@wrapupstudio.in</a></p>
        <p>Based in Mumbai & Delhi.<br />Available across India and worldwide.</p>
      </div>
      <BookingForm />
    </div>
  </main></Shell>;
}
