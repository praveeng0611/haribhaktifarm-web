'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const links = [
  { href: '/',                  label: 'Home'            },
  { href: '/stay',              label: 'Stay'            },
  { href: '/activities',        label: 'Activities'      },
  { href: '/swimming-classes',  label: '🏊 Swimming'     },
  { href: '/gallery',           label: 'Gallery'         },
  { href: '/food',              label: 'Food'            },
  { href: '/blog',              label: 'Blog'            },
  { href: '/about',             label: 'About'           },
  { href: '/contact',           label: 'Contact'         },
]

export default function Navbar() {
  const pathname    = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen    ] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome  = pathname === '/'
  const darkNav = scrolled || !isHome

  return (
    <header
      style={{
        position:   'fixed',
        top: 0, left: 0, right: 0,
        zIndex:     100,
        background: darkNav ? '#fff' : 'transparent',
        boxShadow:  darkNav ? '0 2px 16px rgba(0,0,0,0.09)' : 'none',
        transition: 'background 0.3s, box-shadow 0.3s',
        padding:    '0.75rem 2rem',
        display:    'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
        <Image src="/logo.svg" alt="Hari Bhakti Farm" width={42} height={42} priority />
        <span style={{
          fontFamily: 'Georgia, serif',
          fontWeight: 700,
          fontSize:   '1.05rem',
          color:      darkNav ? '#1e3210' : '#fff',
          lineHeight: 1.2,
          transition: 'color 0.3s',
        }}>
          Hari Bhakti<br/>
          <span style={{ fontSize: '0.75rem', fontWeight: 400, color: '#c8973a', letterSpacing: '0.1em' }}>F A R M</span>
        </span>
      </Link>

      {/* Desktop nav */}
      <nav style={{ display: 'flex', gap: '1.4rem', alignItems: 'center' }} className="hidden md:flex">
        {links.map(l => (
          <Link key={l.href} href={l.href}
            className={`nav-link ${darkNav ? 'dark' : ''}`}
            style={{ borderBottomColor: pathname === l.href ? 'var(--earth)' : undefined }}
          >
            {l.label}
          </Link>
        ))}
        <a
          href="https://wa.me/919928738349"
          target="_blank" rel="noopener noreferrer"
          className="btn-primary"
          style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem', marginLeft: '0.5rem' }}
        >
          Plan Your Visit
        </a>
      </nav>

      {/* Mobile hamburger */}
      <button
        className="md:hidden"
        onClick={() => setOpen(p => !p)}
        style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer',
                 color: darkNav ? '#1e3210' : '#fff' }}
        aria-label="Menu"
      >
        {open ? '✕' : '☰'}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: 'fixed', top: '60px', left: 0, right: 0, bottom: 0,
          background: '#fff', zIndex: 99, padding: '2rem',
          display: 'flex', flexDirection: 'column', gap: '1.2rem',
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1e3210',
                       textDecoration: 'none', borderBottom: '1px solid #ede6d9', paddingBottom: '0.8rem' }}>
              {l.label}
            </Link>
          ))}
          <a href="https://wa.me/919928738349" target="_blank" rel="noopener noreferrer"
            className="btn-primary" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            Plan Your Visit
          </a>
        </div>
      )}
    </header>
  )
}
