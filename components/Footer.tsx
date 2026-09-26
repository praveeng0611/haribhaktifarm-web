'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: '#1e3210', color: '#e8e4dc', padding: '3.5rem 2rem 1.5rem' }}>
      <div className="container-lg">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1rem' }}>
              <Image src="/logo.svg" alt="Hari Bhakti Farm" width={44} height={44}
                style={{ filter: 'brightness(0) invert(1) opacity(0.9)' }} />
              <div>
                <p style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '1rem' }}>Hari Bhakti Farm</p>
                <p style={{ fontSize: '0.7rem', color: '#c8973a', letterSpacing: '0.1em' }}>F A R M</p>
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#a8b89a', lineHeight: 1.7 }}>
              A serene farmstay escape nestled in nature. Swimming, yoga, farm activities and premium rooms await you.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ fontFamily: 'Georgia, serif', fontSize: '1rem', marginBottom: '1rem', color: '#c8973a' }}>Explore</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { href: '/stay',       label: 'Stay & Rooms'    },
                { href: '/activities', label: 'Activities'      },
                { href: '/gallery',    label: 'Gallery'         },
                { href: '/food',       label: 'Food & Menu'     },
                { href: '/blog',       label: 'Blog'            },
                { href: '/about',      label: 'About Us'        },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  style={{ color: '#a8b89a', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}
                  onMouseOver={e => (e.currentTarget.style.color = '#e8b84b')}
                  onMouseOut={e  => (e.currentTarget.style.color = '#a8b89a')}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Experiences */}
          <div>
            <h4 style={{ fontFamily: 'Georgia, serif', fontSize: '1rem', marginBottom: '1rem', color: '#c8973a' }}>Experiences</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['Swimming Pool', 'Yoga & Wellness', 'Nature Walks', 'Farm Activities',
                'Indoor Games', 'Family Day Out', 'Events & Celebrations'].map(e => (
                <span key={e} style={{ color: '#a8b89a', fontSize: '0.88rem' }}>• {e}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Georgia, serif', fontSize: '1rem', marginBottom: '1rem', color: '#c8973a' }}>Get in Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a href="tel:+919928738349"
                style={{ color: '#a8b89a', textDecoration: 'none', fontSize: '0.88rem' }}>
                📞 +91 99287 38349
              </a>
              <a href="https://wa.me/919928738349" target="_blank" rel="noopener noreferrer"
                style={{ color: '#25d366', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600 }}>
                💬 WhatsApp Us
              </a>
              <Link href="/contact" className="btn-outline"
                style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem', marginTop: '0.5rem', display: 'inline-block' }}>
                Plan Your Visit →
              </Link>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.8rem' }}>
          <p style={{ fontSize: '0.8rem', color: '#6b7c5a' }}>
            © {new Date().getFullYear()} Hari Bhakti Farm. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {[
              { href: '/terms-conditions', label: 'Terms & Conditions' },
              { href: '/privacy-policy',   label: 'Privacy Policy'     },
              { href: '/rules-guidelines', label: 'Rules & Safety'     },
            ].map(l => (
              <Link key={l.href} href={l.href}
                style={{ fontSize: '0.78rem', color: '#6b7c5a', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseOver={e => (e.currentTarget.style.color = '#c8973a')}
                onMouseOut={e  => (e.currentTarget.style.color = '#6b7c5a')}
              >
                {l.label}
              </Link>
            ))}
            <span style={{ fontSize: '0.8rem', color: '#6b7c5a' }}>
              Built by <span style={{ color: '#c8973a' }}>Gnosiso Labs</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
