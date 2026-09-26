import Image from 'next/image'
import Link  from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rooms & Villas — Hari Bhakti Farm',
  description: 'Stay in our premium rooms and villas at Hari Bhakti Farm. Heritage suites, deluxe rooms and villa experiences surrounded by nature.',
}

const rooms = [
  {
    id:       'heritage-suite',
    name:     'Rajasthani Heritage Suite',
    type:     'Signature Suite',
    image:    '/images/room-raj.jpg',
    images:   ['/images/room-raj.jpg', '/images/bathroom-2.jpg'],
    desc:     'Our most iconic room, decorated in traditional Rajasthani block-print textiles, hand-picked artwork and a beautiful window bay. A room that tells a story.',
    size:     '480 sq ft',
    guests:   '2 Adults',
    amenities: ['King Bed', 'AC & Fan', 'Smart TV', 'Mini Bar', 'Window Bay Seating', 'Premium Bathroom', 'Tea/Coffee Station', 'Heritage Decor'],
    price:    '₹6,500 / night',
    tag:      'Most Popular',
  },
  {
    id:       'deluxe-room-a',
    name:     'Deluxe Room — Garden View',
    type:     'Deluxe',
    image:    '/images/room-deluxe.jpg',
    images:   ['/images/room-deluxe.jpg', '/images/bathroom-1.jpg'],
    desc:     'Spacious, warm and beautifully furnished with teak wood accents. Opens onto the garden with a serene view of palm trees and open sky.',
    size:     '380 sq ft',
    guests:   '2 Adults',
    amenities: ['King Bed', 'Sofa', 'AC & Fan', 'Smart TV', 'Work Desk', 'Attached Bathroom', 'Tea/Coffee Station', 'Garden Balcony'],
    price:    '₹4,800 / night',
    tag:      null,
  },
  {
    id:       'deluxe-room-b',
    name:     'Deluxe Room — Pool View',
    type:     'Deluxe',
    image:    '/images/room-deluxe-2.jpg',
    images:   ['/images/room-deluxe-2.jpg'],
    desc:     'Wake up to the glimmer of the pool from your room. Modern furnishings, warm lighting and a balcony — perfect for couples and families.',
    size:     '360 sq ft',
    guests:   '2 Adults',
    amenities: ['King Bed', 'AC & Fan', 'Smart TV', 'Sofa', 'Work Desk', 'Balcony', 'Attached Bathroom', 'Pool View'],
    price:    '₹5,200 / night',
    tag:      'Pool View',
  },
  {
    id:       'standard-room',
    name:     'Standard Room',
    type:     'Standard',
    image:    '/images/room-standard.jpg',
    images:   ['/images/room-standard.jpg', '/images/tea-tray.jpg'],
    desc:     'Clean, cosy and comfortable. Everything you need for a peaceful night\'s rest after a day of farm activities.',
    size:     '280 sq ft',
    guests:   '2 Adults',
    amenities: ['Double Bed', 'AC & Fan', 'Smart TV', 'Attached Bathroom', 'Tea/Coffee Station'],
    price:    '₹3,200 / night',
    tag:      null,
  },
  {
    id:       'villa',
    name:     'Farm Villa',
    type:     'Villa',
    image:    '/images/villa-pool.jpg',
    images:   ['/images/villa-pool.jpg', '/images/pool-aerial.jpg'],
    desc:     'The ultimate farm escape. Our villa is a private retreat with direct pool access, premium interiors, full kitchen and outdoor spaces — ideal for families and groups.',
    size:     '1,800 sq ft',
    guests:   'Up to 8 Guests',
    amenities: ['3 Bedrooms', 'Private Pool Access', 'Full Kitchen', 'Living & Dining', 'AC in all rooms', 'Multiple Bathrooms', 'Outdoor Seating', 'Dedicated Butler'],
    price:    '₹22,000 / night',
    tag:      'Best for Groups',
  },
]

const amenities = [
  { icon: '🏊', label: 'Swimming Pool'      },
  { icon: '🍽️', label: 'Farm-Fresh Meals'  },
  { icon: '🧘', label: 'Yoga Sessions'      },
  { icon: '🅿️', label: 'Free Parking'      },
  { icon: '📶', label: 'High-Speed WiFi'   },
  { icon: '☕', label: 'Tea / Coffee'       },
  { icon: '🎮', label: 'Game Zone Access'  },
  { icon: '🌿', label: 'Nature Walks'       },
  { icon: '🔒', label: '24/7 Security'     },
  { icon: '🚿', label: 'Hot Water'          },
  { icon: '❄️', label: 'AC in Rooms'       },
  { icon: '📺', label: 'Smart TV'          },
]

export default function StayPage() {
  return (
    <>
      {/* Page Hero */}
      <section style={{ position: 'relative', height: '420px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <Image src="/images/villa-pool.jpg" alt="Stay at Hari Bhakti Farm" fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,36,10,0.62)' }}/>
        <div style={{ position: 'relative', zIndex: 2, padding: '0 1.5rem', paddingTop: '5rem' }}>
          <p style={{ color: '#e8b84b', letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.7rem' }}>Premium Farmstay</p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', fontWeight: 700 }}>Rooms & Villas</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '0.8rem', fontSize: '1.05rem' }}>Nature outside your window, luxury at your fingertips</p>
        </div>
      </section>

      {/* Property Amenities Banner */}
      <section style={{ background: '#2d4a1e', padding: '2rem 2rem' }}>
        <div className="container-lg">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '1.2rem', textAlign: 'center' }}>
            {amenities.map(a => (
              <div key={a.label}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>{a.icon}</div>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.8rem' }}>{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="section-pad" style={{ background: '#f7f3ec' }}>
        <div className="container-lg">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ color: '#c8973a', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Where You'll Sleep</p>
            <h2 className="section-title">Our Rooms & Villas</h2>
            <span className="earth-line" style={{ margin: '1rem auto 0' }}/>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Each room is thoughtfully designed — a blend of comfort, aesthetics and nature.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {rooms.map((room, i) => (
              <div key={room.id} style={{
                background: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                minHeight: '360px',
              }}>
                {/* Image */}
                <div style={{ position: 'relative', order: i % 2 === 0 ? 0 : 1 }}>
                  <Image src={room.image} alt={room.name} fill style={{ objectFit: 'cover' }} />
                  {room.tag && (
                    <div style={{
                      position: 'absolute', top: '1rem', left: '1rem',
                      background: '#c8973a', color: '#fff',
                      padding: '0.3rem 0.8rem', borderRadius: '20px',
                      fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em',
                    }}>
                      {room.tag}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', order: i % 2 === 0 ? 1 : 0 }}>
                  <p style={{ color: '#c8973a', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{room.type}</p>
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', color: '#1e3210', fontWeight: 700, marginBottom: '0.8rem' }}>{room.name}</h3>
                  <p style={{ color: '#6b7c5a', fontSize: '0.93rem', lineHeight: 1.75, marginBottom: '1.2rem' }}>{room.desc}</p>

                  {/* Quick specs */}
                  <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.85rem', color: '#4a5c3a' }}>📐 {room.size}</span>
                    <span style={{ fontSize: '0.85rem', color: '#4a5c3a' }}>👥 {room.guests}</span>
                  </div>

                  {/* Amenities pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {room.amenities.slice(0, 6).map(a => (
                      <span key={a} style={{ background: '#f7f3ec', color: '#4a5c3a', padding: '0.2rem 0.6rem', borderRadius: '20px', fontSize: '0.78rem' }}>
                        {a}
                      </span>
                    ))}
                    {room.amenities.length > 6 && (
                      <span style={{ background: '#e8f4f0', color: '#2d4a1e', padding: '0.2rem 0.6rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 600 }}>
                        +{room.amenities.length - 6} more
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.3rem', fontWeight: 700, color: '#2d4a1e' }}>{room.price}</span>
                    </div>
                    <a
                      href={`https://wa.me/919928738349?text=Hi%2C%20I%27d%20like%20to%20book%20the%20${encodeURIComponent(room.name)}%20at%20Hari%20Bhakti%20Farm`}
                      target="_blank" rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Book This Room
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: '#2d4a1e', textAlign: 'center' }}>
        <div className="container-lg">
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', color: '#fff', fontWeight: 700, marginBottom: '1rem' }}>
            Need Help Choosing the Right Room?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '500px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            WhatsApp us and we'll help you find the perfect fit for your group size, occasion and budget.
          </p>
          <a href="https://wa.me/919928738349" target="_blank" rel="noopener noreferrer"
            style={{ background: '#25d366', color: '#fff', padding: '0.85rem 2.2rem', borderRadius: '4px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
            💬 Chat With Us
          </a>
        </div>
      </section>
    </>
  )
}
