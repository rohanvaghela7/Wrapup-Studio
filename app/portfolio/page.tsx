'use client';

import { useState } from 'react';
import { portfolioMedia } from '@/lib/data';
import { Shell } from '@/components/site-shell';
import { GalleryCard, PageIntro } from '@/components/ui';

const categories = ['All', 'Weddings', 'Portraits', 'Editorial', 'Film'];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const items = filter === 'All' ? portfolioMedia : portfolioMedia.filter(item => item.category === filter);

  return <Shell>
    <main className="portfolio-page">
      <PageIntro
        kicker="The archive"
        title={<><span className="portfolio-title-line">Work with a little</span><em className="portfolio-title-line">room to breathe.</em></>}
        text="A moving collection of Indian weddings, portraits and celebrations made for people who care about the feeling as much as the frame."
        backgroundVideo="/portfolio-work-background.mp4"
      />
      <div className="filter-bar">{categories.map(category => <button key={category} className={filter === category ? 'active' : ''} onClick={() => setFilter(category)}>{category}</button>)}</div>
      <div className="work-grid">{items.map((item, index) => <GalleryCard item={item} index={index} key={item.id} />)}</div>
    </main>
  </Shell>;
}
