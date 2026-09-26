'use client'

import Image   from 'next/image'
import { useState } from 'react'

const categories = ['All', 'Pool', 'Rooms', 'Nature', 'Food', 'Events']

const photos = [
  { src: '/images/pool-aerial.jpg',  alt: 'Aerial view of pool',        cat: 'Pool'   },
  { src: '/images/pool-eve.jpg',     alt: 'Pool at twilight',            cat: 'Pool'   },
  { src: '/images/villa-pool.jpg',   alt: 'Villa with pool',             cat: 'Pool'   },
  { src: '/images/pool-twilight.jpg',alt: 'Evening pool lights',         cat: 'Pool'   },
  { src: '/images/pool-aerial-2.jpg',alt: 'Pool from above',             cat: 'Pool'   },
  { src: '/images/pool-side.jpg',    alt: 'Poolside view',               cat: 'Pool'   },
  { src: '/images/room-raj.jpg',     alt: 'Rajasthani Heritage Suite',   cat: 'Rooms'  },
  { src: '/images/room-deluxe.jpg',  alt: 'Deluxe Room',                 cat: 'Rooms'  },
  { src: '/images/room-deluxe-2.jpg',alt: 'Deluxe Room Garden View',     cat: 'Rooms'  },
  { src: '/images/room-standard.jpg',alt: 'Standard Room',               cat: 'Rooms'  },
  { src: '/images/bathroom-1.jpg',   alt: 'Marble bathroom',             cat: 'Rooms'  },
  { src: '/images/bathroom-2.jpg',   alt: 'Premium bathroom',            cat: 'Rooms'  },
  { src: '/images/bathroom-3.jpg',   alt: 'Bathroom vanity',             cat: 'Rooms'  },
  { src: '/images/wardrobe.jpg',     alt: 'Wardrobe area',               cat: 'Rooms'  },
  { src: '/images/tea-tray.jpg',     alt: 'Tea coffee station',          cat: 'Rooms'  },
  { src: '/images/kitchen.jpg',      alt: 'Kitchen with water view',     cat: 'Nature' },
  { src: '/images/villa-pool-2.jpg', alt: 'Farm ground view',            cat: 'Nature' },
]

export default function GalleryPage() {
  const [active,  setActive ] = useState('All')
  const [lightbox,setLightbox] = useState<string | null>(null)

  const filtered = active === 'All' ? photos : photos.filter(p => p.cat === active)

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '280px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <Image src="/images/pool-eve.jpg" alt="Gallery" fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,36,10,0.65)' }}/>
        <div style={{ position: 'relative', zIndex: 2, paddingTop: '4rem' }}>
          <p style={{ color: '#e8b84b', letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Photo Gallery</p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#fff', fontWeight: 700 }}>Life at the Farm</h1>
        </div>
      </section>

      {/* Category filter */}
      <section style={{ background: '#fff', borderBottom: '1px solid #ede6d9', padding: '1.2rem 2rem' }}>
        <div className="container-lg" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map(c => (
            <button key={c} onClick={() => setActive(c)} style={{
              padding: '0.4rem 1.2rem', borderRadius: '20px', border: 'none', cursor: 'pointer',
              background: active === c ? '#2d4a1e' : '#f7f3ec',
              color:      active === c ? '#fff'    : '#4a5c3a',
              fontWeight: active === c ? 700       : 500,
              fontSize: '0.88rem', transition: 'all 0.2s',
            }}>
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry grid */}
      <section className="section-pad" style={{ background: '#f7f3ec' }}>
        <div className="container-lg">
          <div className="gallery-grid">
            {filtered.map(p => (
              <img key={p.src} src={p.src} alt={p.alt} onClick={() => setLightbox(p.src)} />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Full size" onClick={e => e.stopPropagation()} />
          <button onClick={() => setLightbox(null)} style={{
            position: 'absolute', top: '1.5rem', right: '1.5rem',
            background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff',
            width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', fontSize: '1.2rem',
          }}>✕</button>
        </div>
      )}
    </>
  )
}
