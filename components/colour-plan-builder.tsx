'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Aperture, ArrowLeft, ArrowUpRight, Camera, Check, Clapperboard, Heart, Plus, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { addOns, formatINR, packageTiers, shootTypes } from '@/lib/pricing-config';

const typeIcons = [Heart, Camera, Aperture, Clapperboard, Sparkles, Camera];

export function ColourPlanBuilder() {
  const [step, setStep] = useState(1);
  const [shootType, setShootType] = useState<(typeof shootTypes)[number]>('Wedding');
  const [tierId, setTierId] = useState('signature');
  const [selected, setSelected] = useState<string[]>(['drone-photo']);
  const tier = packageTiers.find(item => item.id === tierId)!;
  const selectedAddOns = addOns.filter(item => selected.includes(item.id));
  const total = tier.price + selectedAddOns.reduce((sum, item) => sum + item.price, 0);
  const toggle = (id: string) => setSelected(items => items.includes(id) ? items.filter(item => item !== id) : [...items, id]);

  return <section className="colour-builder">
    <div className="colour-progress"><span>SHAPE YOUR WRAP UP EXPERIENCE</span><div>{[1, 2, 3, 4].map(item => <button key={item} className={item <= step ? 'active' : ''} onClick={() => item < step && setStep(item)}><span>{item}</span></button>)}</div><strong>0{step} / 04</strong></div>
    <div className="builder">
      <div className="builder-main">
        <AnimatePresence mode="wait">
          {step === 1 && <motion.div className="builder-step colourful-step" key="colour-step-1" initial={{ opacity: 0, x: -70, rotate: -1 }} animate={{ opacity: 1, x: 0, rotate: 0 }} exit={{ opacity: 0, x: 70 }} transition={{ duration: .65, ease: [.16, 1, .3, 1] }}>
            <p className="step-kicker"><Sparkles size={15} /> Step one</p><h2>What are we<br /><em>celebrating?</em></h2>
            <div className="shoot-type-grid">{shootTypes.map((item, index) => { const Icon = typeIcons[index]; return <button key={item} className={shootType === item ? 'selected' : ''} onClick={() => { setShootType(item); setStep(2); }}><Icon size={24} /><strong>{item}</strong><span>Explore plan <ArrowUpRight size={14} /></span></button>; })}</div>
          </motion.div>}

          {step === 2 && <motion.div className="builder-step colourful-step" key="colour-step-2" initial={{ opacity: 0, x: 70, rotate: 1 }} animate={{ opacity: 1, x: 0, rotate: 0 }} exit={{ opacity: 0, x: -70 }} transition={{ duration: .65, ease: [.16, 1, .3, 1] }}>
            <p className="step-kicker"><Camera size={15} /> Step two · designed around your day</p><h2>Pick your<br /><em>colour story.</em></h2>
            <div className="sale-tier-grid">{packageTiers.map((item, index) => <button key={item.id} onClick={() => setTierId(item.id)} className={tierId === item.id ? 'selected' : ''}>
              <span className="tier-count">0{index + 1}</span><h3>{item.name}</h3><p>{item.description}</p>
              <div className="tier-price"><strong>From {formatINR(item.price)}</strong></div>
              <ul><li><Check size={13} />{item.hours}</li><li><Check size={13} />{item.photos}</li><li><Check size={13} />Delivery in {item.delivery}</li></ul>
            </button>)}</div>
            <div className="step-actions"><button className="text-button" onClick={() => setStep(1)}><ArrowLeft size={15} /> Back</button><button className="button button-pop" onClick={() => setStep(3)}>Choose add-ons <ArrowUpRight size={16} /></button></div>
          </motion.div>}

          {step === 3 && <motion.div className="builder-step colourful-step" key="colour-step-3" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -60 }} transition={{ duration: .65, ease: [.16, 1, .3, 1] }}>
            <p className="step-kicker"><Aperture size={15} /> Step three · thoughtful additions</p><h2>Make it even<br /><em>more you.</em></h2>
            <div className="colour-addon-list">{addOns.map((item, index) => <button key={item.id} className={selected.includes(item.id) ? 'selected' : ''} onClick={() => toggle(item.id)}>
              <span className="addon-number">0{index + 1}</span><span className="addon-icon">{selected.includes(item.id) ? <Check /> : <Plus />}</span><span className="addon-copy"><strong>{item.label}</strong><small>{item.detail}</small></span><span className="addon-sale"><b>+{formatINR(item.price)}</b></span>
            </button>)}</div>
            <div className="step-actions"><button className="text-button" onClick={() => setStep(2)}><ArrowLeft size={15} /> Back</button><button className="button button-pop" onClick={() => setStep(4)}>See my colourful plan <ArrowUpRight size={16} /></button></div>
          </motion.div>}

          {step === 4 && <motion.div className="builder-step colourful-step final-colour-step" key="colour-step-4" initial={{ opacity: 0, scale: .9, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .7, type: 'spring' }}>
            <motion.div className="celebration-aperture" animate={{ rotate: 360 }} transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}><Aperture size={72} /></motion.div>
            <p className="step-kicker"><Sparkles size={15} /> Your collection is ready</p><h2>Let’s make your<br /><em>{shootType.toLowerCase()} shine.</em></h2>
            <p>Send your ideas to the studio and we’ll tailor the dates, locations, timing, and creative details together.</p>
            <Link href={`/booking?type=${shootType}&package=${tier.name}&total=${total}`} className="button button-pop">Send my enquiry <ArrowUpRight size={16} /></Link>
            <button className="text-button" onClick={() => setStep(3)}>Edit my selections</button>
          </motion.div>}
        </AnimatePresence>
      </div>

      <motion.aside className="builder-summary colourful-summary" layout>
        <div className="summary-top"><span>YOUR CREATIVE BRIEF</span><motion.span className="summary-dot" animate={{ scale: [1, 1.8, 1] }} transition={{ duration: 1.5, repeat: Infinity }} /></div>
        <div className="summary-camera"><Camera size={26} /><span>{shootType}<small>{tier.name} collection</small></span></div>
        <div className="summary-items">
          <div><span>Creative direction</span><strong>Included</strong></div>
          <div><span>Timeline planning</span><strong>Included</strong></div>
          <div><span>Edited high-resolution gallery</span><strong>Included</strong></div>
          {selectedAddOns.map(item => <div key={item.id}><span>{item.label}</span><strong>Selected</strong></div>)}
        </div>
        <div className="summary-promise"><span>Your next step</span><strong>Personal consultation</strong></div>
        <p className="summary-foot">Send an enquiry and we’ll create a tailored proposal around your date, location, and celebration.</p>
      </motion.aside>
    </div>
  </section>;
}
