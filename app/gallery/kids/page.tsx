'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type MediaItem = {
  id: number
  type: 'image' | 'video'
  url: string
  caption: string | null
  created_at: string
}

function getYouTubeId(url: string): string | null {
  // Handles: https://youtu.be/ID, https://youtube.com/watch?v=ID, https://youtube.com/shorts/ID
  const patterns = [
    /youtu\.be\/([A-Za-z0-9_-]{11})/,
    /[?&]v=([A-Za-z0-9_-]{11})/,
    /youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,
    /youtube\.com\/embed\/([A-Za-z0-9_-]{11})/,
  ]
  for (const p of patterns) {
    const m = url.match(p)
    if (m) return m[1]
  }
  // If it's already just an ID (11 chars)
  if (/^[A-Za-z0-9_-]{11}$/.test(url)) return url
  return null
}

export default function KidsGalleryPage() {
  const [items, setItems] = useState<MediaItem[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all')
  const [lightbox, setLightbox] = useState<MediaItem | null>(null)

  useEffect(() => {
    fetch('/api/kids-gallery')
      .then((r) => r.json())
      .then((d) => { setItems(d.items || []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const filtered = filter === 'all' ? items : items.filter((i) => i.type === filter)
  const imgCount   = items.filter((i) => i.type === 'image').length
  const videoCount = items.filter((i) => i.type === 'video').length

  return (
    <main className="pt-20">

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #2d4a1e 0%, #1e3210 100%)', padding: '4rem 1.5rem', textAlign: 'center', color: '#fff' }}>
        <p style={{ color: '#e8b84b', letterSpacing: '0.25em', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.6rem' }}>Hari Bhakti Farm</p>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '0.75rem' }}>Kids Gallery 🎉</h1>
        <p style={{ color: 'rgba(255,255,255,0.78)', maxWidth: '520px', margin: '0 auto 2rem', lineHeight: 1.7, fontSize: '1rem' }}>
          Joy, splashes, laughter and little victories — captured at our farm. Updated regularly so families can relive every moment.
        </p>
        <Link href="/swimming-classes"
          style={{ display: 'inline-block', background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.4)', color: '#fff', padding: '0.65rem 1.6rem', borderRadius: '50px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, backdropFilter: 'blur(6px)' }}>
          🏊 View Swimming Classes →
        </Link>
      </section>

      {/* Filter tabs */}
      <section style={{ background: '#fff', borderBottom: '1px solid #ede6d9', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', position: 'sticky', top: '72px', zIndex: 10 }}>
        {([
          { key: 'all',   label: `All  (${items.length})`   },
          { key: 'image', label: `📸 Photos  (${imgCount})`  },
          { key: 'video', label: `🎥 Videos  (${videoCount})` },
        ] as const).map((f) => (
          <button key={f.key} onClick={() => setFilter(f.key)}
            style={{ padding: '0.5rem 1.3rem', borderRadius: '50px', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.87rem', background: filter === f.key ? '#2d4a1e' : '#f0ebe2', color: filter === f.key ? '#fff' : '#4a5c3a', transition: 'all 0.2s' }}>
            {f.label}
          </button>
        ))}
      </section>

      {/* Grid */}
      <section style={{ background: '#f7f3ec', minHeight: '60vh', padding: '2.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '5rem', color: '#6b7c5a' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌿</div>
              <p>Loading gallery...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem', color: '#6b7c5a' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📷</div>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem', color: '#1e3210', marginBottom: '0.6rem' }}>
                {items.length === 0 ? 'Gallery Coming Soon!' : 'Nothing here yet'}
              </h3>
              <p style={{ lineHeight: 1.7 }}>
                {items.length === 0
                  ? 'Our team is curating the first set of memories from our young guests. Check back soon!'
                  : `No ${filter}s added yet.`}
              </p>
            </div>
          ) : (
            <div style={{ columns: '3 280px', columnGap: '1rem' }}>
              {filtered.map((item) => {
                const ytId = item.type === 'video' ? getYouTubeId(item.url) : null
                return (
                  <div key={item.id}
                    style={{ breakInside: 'avoid', marginBottom: '1rem', borderRadius: '12px', overflow: 'hidden', background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
                    onClick={() => setLightbox(item)}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(0,0,0,0.14)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)' }}
                  >
                    {item.type === 'image' ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={item.url} alt={item.caption ?? 'Kids gallery'} style={{ width: '100%', display: 'block', objectFit: 'cover' }} loading="lazy" />
                    ) : ytId ? (
                      <div style={{ position: 'relative', aspectRatio: '16/9', background: '#000' }}>
                        <img src={`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`} alt={item.caption ?? 'Video'} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} loading="lazy" />
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <div style={{ width: '56px', height: '56px', background: '#ff0000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}>
                            <span style={{ color: '#fff', fontSize: '1.4rem', marginLeft: '4px' }}>▶</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div style={{ aspectRatio: '16/9', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.8rem', padding: '1rem', textAlign: 'center' }}>
                        🎥 {item.url}
                      </div>
                    )}
                    {item.caption && (
                      <div style={{ padding: '0.65rem 0.9rem' }}>
                        <p style={{ fontSize: '0.82rem', color: '#6b7c5a', margin: 0, lineHeight: 1.5 }}>{item.caption}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#2d4a1e', padding: '4rem 1.5rem', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.75rem' }}>Is Your Child in Our Classes?</h2>
        <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem', lineHeight: 1.7 }}>
          Send us your photos and videos on WhatsApp — we'll feature them in this gallery!
        </p>
        <a href="https://wa.me/919928738349?text=Hi%2C%20I%27d%20like%20to%20share%20photos%20and%20videos%20of%20my%20child%20from%20Hari%20Bhakti%20Farm"
          target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block', padding: '0.85rem 2rem' }}>
          💬 Share on WhatsApp
        </a>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}
        >
          <button onClick={() => setLightbox(null)}
            style={{ position: 'absolute', top: '1rem', right: '1.5rem', background: 'none', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer' }}>✕</button>
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: '960px', width: '100%' }}>
            {lightbox.type === 'image' ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={lightbox.url} alt={lightbox.caption ?? ''} style={{ width: '100%', borderRadius: '12px', maxHeight: '85vh', objectFit: 'contain' }} />
            ) : (() => {
              const ytId = getYouTubeId(lightbox.url)
              return ytId ? (
                <div style={{ position: 'relative', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${ytId}?autoplay=1`}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </div>
              ) : (
                <p style={{ color: '#fff', textAlign: 'center' }}>Unable to embed this video. <a href={lightbox.url} target="_blank" rel="noopener noreferrer" style={{ color: '#e8b84b' }}>Open directly →</a></p>
              )
            })()}
            {lightbox.caption && <p style={{ color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginTop: '0.75rem', fontSize: '0.9rem' }}>{lightbox.caption}</p>}
          </div>
        </div>
      )}

    </main>
  )
}
