import { notFound } from 'next/navigation';
import { clientGalleries } from '@/lib/mock-data';
import { Shell } from '@/components/site-shell';
import { DownloadButton, FavoriteButton, ImageFrame } from '@/components/ui';

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ clientSlug: string }>;
}) {
  const { clientSlug } = await params;
  const gallery = clientGalleries.find((item) => item.slug === clientSlug);
  if (!gallery) return notFound();

  return <Shell><main className="gallery-page">
    <div className="gallery-header">
      <div><p className="eyebrow">Private gallery · {gallery.year}</p><h1>{gallery.couple}</h1></div>
      <p>{gallery.note}</p>
    </div>
    <div className="proof-grid">{gallery.images.map((item) => <div className="proof-item" key={item.id}>
      <ImageFrame src={item.src} alt={item.alt} />
      <div className="proof-actions"><FavoriteButton id={`${gallery.slug}-${item.id}`} /></div>
      <span className="watermark">Wrap UP</span>
    </div>)}</div>
    <div className="download-panel">
      <div>
        <p>{gallery.images.length} photographs in this proofing gallery</p>
        <span>Select your favorites and we’ll prepare the final collection.</span>
      </div>
      <DownloadButton />
    </div>
  </main></Shell>;
}
