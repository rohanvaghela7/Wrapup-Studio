'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { portfolioMedia, type PortfolioImage } from '@/lib/data';
import { Shell } from '@/components/site-shell';
import { GalleryCard, PageIntro } from '@/components/ui';

const archivePhotos = portfolioMedia.filter(item => item.category !== 'Family' && item.category !== 'Commercial');
const categories = ['All', 'Weddings', 'Portraits', 'Editorial', 'Film'];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState<PortfolioImage | null>(null);
  const items = filter === 'All' ? archivePhotos : archivePhotos.filter(item => item.category === filter);

  useEffect(() => {
    if (!selectedPhoto) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedPhoto(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedPhoto]);

  return <Shell>
    <main className="portfolio-page">
      <PageIntro
        kicker="The archive"
        title={<><span className="portfolio-title-line">Work with a little</span><em className="portfolio-title-line">room to breathe.</em></>}
        text="A colourful collection of Indian weddings, portraits and celebrations made for people who care about the feeling as much as the frame."
        backgroundImage="/work-indian-wedding-04.jpg"
      />
      <div className="filter-bar">{categories.map(category => <button key={category} className={filter === category ? 'active' : ''} onClick={() => setFilter(category)}>{category}</button>)}</div>
      <div className="work-grid">{items.map((item, index) => <GalleryCard item={item} index={index} photoOnly onOpen={() => setSelectedPhoto(item)} key={item.id} />)}</div>
    </main>

    <AnimatePresence>
      {selectedPhoto && <motion.div className="portfolio-photo-viewer" role="dialog" aria-modal="true" aria-label={selectedPhoto.alt} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedPhoto(null)}>
        <button className="portfolio-photo-close" type="button" onClick={() => setSelectedPhoto(null)} aria-label="Close photo"><X size={22} /></button>
        <motion.div className="portfolio-photo-viewer-frame" initial={{ scale: .92, y: 24 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .96, y: 14 }} transition={{ duration: .45, ease: [.16, 1, .3, 1] }} onClick={event => event.stopPropagation()}>
          <Image src={selectedPhoto.src} alt={selectedPhoto.alt} fill sizes="94vw" priority className="portfolio-photo-viewer-image" />
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  </Shell>;
}
