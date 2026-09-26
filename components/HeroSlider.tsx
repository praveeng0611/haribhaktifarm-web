'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  { src: '/images/pool-twilight.jpg', alt: 'Pool at twilight',          tag: 'Twilight Views'    },
  { src: '/images/villa-pool.jpg',    alt: 'Villa with private pool',   tag: 'Farm Villa'        },
  { src: '/images/pool-side.jpg',     alt: 'Poolside lounge',           tag: 'Poolside'          },
  { src: '/images/room-raj.jpg',      alt: 'Rajasthani Heritage Suite', tag: 'Heritage Suite'    },
  { src: '/images/room-deluxe.jpg',   alt: 'Deluxe room interior',      tag: 'Deluxe Room'       },
  { src: '/images/pool-aerial-2.jpg', alt: 'Pool from above',           tag: 'Pool Area'         },
]

// Ken Burns directions for each slide
const kenBurns = [
  { from: 'scale(1) translate(0%, 0%)',     to: 'scale(1.1) translate(-2%, -1%)' },
  { from: 'scale(1.08) translate(-2%, 1%)', to: 'scale(1) translate(1%, -1%)'   },
  { from: 'scale(1.1) translate(0%, -2%)',  to: 'scale(1) translate(0%, 1%)'    },
  { from: 'scale(1) translate(-1%, 1%)',    to: 'scale(1.08) translate(2%, -2%)'},
  { from: 'scale(1) translate(-2%, -1%)',   to: 'scale(1.1) translate(1%, 2%)'  },
  { from: 'scale(1.08) translate(1%, 2%)',  to: 'scale(1) translate(-2%, -1%)' },
]

const DURATION = 5500  // ms per slide
const FADE     = 1100  // ms crossfade

export default function HeroSlider() {
  const [current, setCurrent]   = useState(0)
  const [prev,    setPrev]      = useState<number | null>(null)
  const [fading,  setFading]    = useState(false)
  const timerRef                = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = (idx: number) => {
    if (idx === current || fading) return
    setPrev(current)
    setCurrent(idx)
    setFading(true)
    setTimeout(() => { setPrev(null); setFading(false) }, FADE)
  }

  const next = () => goTo((current + 1) % slides.length)

  useEffect(() => {
    timerRef.current = setTimeout(next, DURATION)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [current, fading])  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
        background: '#0a1a06',
      }}
    >
      {/* ── Slide stack ── */}
      {slides.map((slide, i) => {
        const isActive = i === current
        const isPrev   = i === prev
        if (!isActive && !isPrev) return null

        const kb = kenBurns[i % kenBurns.length]

        return (
          <div
            key={slide.src}
            style={{
              position:   'absolute',
              inset:      0,
              opacity:    isActive ? 1 : 0,
              transition: `opacity ${FADE}ms cubic-bezier(0.4,0,0.2,1)`,
              zIndex:     isActive ? 2 : 1,
            }}
          >
            <div
              style={{
                position:   'absolute',
                inset:      '-6%',   // extra space for Ken Burns movement
                transform:  isActive ? kb.to : kb.from,
                transition: isActive
                  ? `transform ${DURATION + FADE}ms cubic-bezier(0.4,0,0.2,1)`
                  : 'none',
              }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="100vw"
              />
            </div>
          </div>
        )
      })}

      {/* ── Cinematic overlay ── */}
      <div style={{
        position:   'absolute',
        inset:      0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 40%, rgba(10,26,6,0.65) 80%, rgba(10,26,6,0.85) 100%)',
        zIndex:     3,
      }} />

      {/* ── Top slide tag ── */}
      <div style={{
        position:   'absolute',
        top:        '1.8rem',
        right:      '2rem',
        zIndex:     5,
        opacity:    1,
        transition: 'opacity 0.4s',
      }}>
        <span style={{
          background:    'rgba(255,255,255,0.12)',
          backdropFilter:'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border:        '1px solid rgba(255,255,255,0.2)',
          color:         '#fff',
          fontSize:      '0.72rem',
          fontWeight:    600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          padding:       '0.4rem 1rem',
          borderRadius:  '2rem',
        }}>
          {slides[current].tag}
        </span>
      </div>

      {/* ── Hero text ── */}
      <div style={{
        position:   'absolute',
        bottom:     '9rem',
        left:       0,
        right:      0,
        zIndex:     5,
        textAlign:  'center',
        padding:    '0 1.5rem',
        color:      '#fff',
      }}>
        <p style={{
          letterSpacing: '0.3em',
          fontSize:      '0.75rem',
          fontWeight:    600,
          color:         '#e8b84b',
          textTransform: 'uppercase',
          marginBottom:  '0.8rem',
        }}>
          Hari Bhakti Farm • Rajasthan
        </p>
        <h1 style={{
          fontFamily:  'Georgia, serif',
          fontSize:    'clamp(2.4rem, 6vw, 5rem)',
          fontWeight:  700,
          lineHeight:  1.1,
          marginBottom:'1rem',
          textShadow:  '0 2px 24px rgba(0,0,0,0.4)',
        }}>
          A Beautiful Escape<br />into Nature
        </h1>
        <p style={{
          fontSize:    'clamp(1rem, 2vw, 1.2rem)',
          color:       'rgba(255,255,255,0.82)',
          marginBottom:'2rem',
          maxWidth:    '520px',
          margin:      '0 auto 2rem',
          lineHeight:  1.6,
        }}>
          Luxury farmstay with private pools, heritage rooms,<br />
          and the unhurried rhythm of rural Rajasthan
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://wa.me/919928738349?text=Hi%2C%20I%27d%20like%20to%20plan%20a%20visit%20to%20Hari%20Bhakti%20Farm"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '0.85rem 2rem', fontSize: '0.95rem' }}
          >
            Plan Your Visit
          </a>
          <Link
            href="/stay"
            style={{
              padding:      '0.85rem 2rem',
              fontSize:     '0.95rem',
              border:       '2px solid rgba(255,255,255,0.7)',
              color:        '#fff',
              borderRadius: '50px',
              textDecoration:'none',
              fontWeight:   600,
              backdropFilter:'blur(4px)',
              WebkitBackdropFilter:'blur(4px)',
              background:   'rgba(255,255,255,0.08)',
              transition:   'background 0.2s, border-color 0.2s',
            }}
          >
            Explore Rooms →
          </Link>
        </div>
      </div>

      {/* ── Dot navigation ── */}
      <div style={{
        position:       'absolute',
        bottom:         '2.5rem',
        left:           0,
        right:          0,
        display:        'flex',
        justifyContent: 'center',
        gap:            '0.5rem',
        zIndex:         5,
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width:        i === current ? '2rem' : '0.45rem',
              height:       '0.45rem',
              borderRadius: '1rem',
              border:       'none',
              cursor:       'pointer',
              background:   i === current ? '#e8b84b' : 'rgba(255,255,255,0.45)',
              transition:   'width 0.35s cubic-bezier(0.4,0,0.2,1), background 0.3s',
              padding:      0,
            }}
          />
        ))}
      </div>

      {/* ── Progress bar ── */}
      <div style={{
        position:   'absolute',
        bottom:     0,
        left:       0,
        height:     '3px',
        background: 'rgba(255,255,255,0.15)',
        width:      '100%',
        zIndex:     5,
      }}>
        <div
          key={current}
          style={{
            height:           '100%',
            background:       '#e8b84b',
            width:            '100%',
            transformOrigin:  'left',
            animation:        `slideProgress ${DURATION}ms linear forwards`,
          }}
        />
      </div>

      <style>{`
        @keyframes slideProgress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </section>
  )
}
