import Image from 'next/image'
import Link  from 'next/link'
import HeroSlider from '@/components/HeroSlider'

const activities = [
  { icon: '🏊', title: 'Swimming Pool',    desc: 'Dive into our pristine pool — open daily with swimming classes for all ages.',  href: '/activities#pool'   },
  { icon: '🧘', title: 'Yoga & Wellness',  desc: 'Morning yoga sessions in nature. Begin your day in perfect stillness.',         href: '/activities#yoga'   },
  { icon: '🌿', title: 'Nature Walks',     desc: 'Guided walks through our farm, orchard and natural surroundings.',              href: '/activities#nature' },
  { icon: '🏓', title: 'Game Zone',        desc: 'Table tennis, badminton, carrom, volleyball and more for all ages.',            href: '/activities#games'  },
  { icon: '💦', title: 'Water Activities', desc: 'Splash pad, water games and poolside fun for kids and families.',               href: '/activities#water'  },
  { icon: '🌾', title: 'Farm Experience',  desc: 'Connect with the land — organic farming, harvest activities and cow care.',     href: '/activities#farm'   },
  { icon: '🎉', title: 'Celebrations',     desc: 'Birthdays, anniversaries and family gatherings in a beautiful natural setting.', href: '/activities#events' },
  { icon: '👨‍👩‍👧', title: 'Family Day Out',  desc: 'A complete day experience designed for families — breakfast to bonfire.',      href: '/activities#family' },
]

const stats = [
  { value: '5+', label: 'Acres of Nature'      },
  { value: '10+', label: 'Premium Rooms'       },
  { value: '8+', label: 'Activities'            },
  { value: '500+', label: 'Happy Families'     },
]

const testimonials = [
  {
    name: 'Rajesh Sharma',
    city: 'Jaipur',
    text: 'Absolutely magical experience. The pool at sunset, the farm-fresh food, and the warm hospitality made it a trip our family will never forget.',
    rating: 5,
  },
  {
    name: 'Priya Mehta',
    city: 'Udaipur',
    text: 'The rooms are beautiful — clean, spacious and so tastefully decorated. Hari Bhakti Farm is the best farmstay we have visited in Rajasthan.',
    rating: 5,
  },
  {
    name: 'Sunil & Family',
    city: 'Delhi',
    text: 'Our kids loved the swimming and games. We loved the yoga and nature walks. Perfect for families. We are already planning to come back!',
    rating: 5,
  },
]

const galleryPreview = [
  { src: '/images/pool-aerial.jpg',  alt: 'Aerial pool view'    },
  { src: '/images/pool-eve.jpg',     alt: 'Evening pool'        },
  { src: '/images/room-raj.jpg',     alt: 'Heritage suite'      },
  { src: '/images/kitchen.jpg',      alt: 'Kitchen with view'   },
  { src: '/images/bathroom-1.jpg',   alt: 'Marble bathroom'     },
  { src: '/images/room-deluxe.jpg',  alt: 'Deluxe room'         },
]

export default function HomePage() {
  return (
    <>
      {/* ─── HERO SLIDER ─────────────────────────────────────────── */}
      <HeroSlider />

      {/* ─── STATS ───────────────────────────────────────────────── */}
      <section style={{ background: '#2d4a1e', padding: '2.5rem 2rem' }}>
        <div className="container-lg" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', textAlign: 'center' }}>
          {stats.map(s => (
            <div key={s.label}>
              <p style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', fontWeight: 700, color: '#e8b84b' }}>{s.value}</p>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem', letterSpacing: '0.05em' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WELCOME ─────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#f7f3ec' }}>
        <div className="container-lg" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#c8973a', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Welcome to</p>
            <h2 className="section-title">Hari Bhakti Farm</h2>
            <span className="earth-line"/>
            <p style={{ color: '#4a5c3a', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
              Set amidst lush greenery and open skies, Hari Bhakti Farm is a luxury farmstay where nature, wellness, and warm hospitality come together for an unforgettable experience.
            </p>
            <p style={{ color: '#6b7c5a', lineHeight: 1.8, marginBottom: '2rem' }}>
              Whether you're looking for a relaxing family weekend, a wellness retreat, a swim in our beautiful pool, or a celebration surrounded by nature — Hari Bhakti Farm has it all.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/about" className="btn-primary">Our Story</Link>
              <Link href="/contact" className="btn-outline">Plan Your Visit</Link>
            </div>
          </div>
          <div style={{ position: 'relative', height: '460px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
            <Image src="/images/pool-aerial.jpg" alt="Farm aerial view" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* ─── ACTIVITIES ──────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#fff' }}>
        <div className="container-lg">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#c8973a', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              What We Offer
            </p>
            <h2 className="section-title">Farm Experiences</h2>
            <span className="earth-line" style={{ margin: '1rem auto 0' }}/>
            <p className="section-sub" style={{ margin: '0.5rem auto' }}>
              Every moment at Hari Bhakti Farm is designed to connect you with nature, wellness and joy.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {activities.map(a => (
              <Link key={a.href} href={a.href} className="activity-card" style={{ textDecoration: 'none', color: 'inherit', padding: '1.8rem' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '0.8rem' }}>{a.icon}</div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', color: '#2d4a1e', marginBottom: '0.5rem', fontWeight: 700 }}>
                  {a.title}
                </h3>
                <p style={{ color: '#6b7c5a', fontSize: '0.9rem', lineHeight: 1.7 }}>{a.desc}</p>
                <p style={{ color: '#c8973a', fontSize: '0.85rem', fontWeight: 600, marginTop: '1rem' }}>Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY PREVIEW ─────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#f7f3ec' }}>
        <div className="container-lg">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ color: '#c8973a', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Photo Gallery</p>
              <h2 className="section-title">Life at the Farm</h2>
              <span className="earth-line"/>
            </div>
            <Link href="/gallery" className="btn-outline">View Full Gallery →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 240px)', gap: '0.75rem' }}>
            {galleryPreview.map((img, i) => (
              <div key={img.src} style={{
                position: 'relative',
                gridColumn: i === 0 ? 'span 2' : undefined,
                borderRadius: '10px', overflow: 'hidden',
              }}>
                <Image src={img.src} alt={img.alt} fill className="gallery-thumb" style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ROOMS CTA ───────────────────────────────────────────── */}
      <section style={{ position: 'relative', height: '480px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <Image src="/images/room-raj.jpg" alt="Heritage Suite" fill style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,50,16,0.7)' }}/>
        <div style={{ position: 'relative', zIndex: 2, padding: '0 1.5rem', maxWidth: '640px' }}>
          <p style={{ color: '#e8b84b', letterSpacing: '0.15em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.8rem' }}>Premium Stay</p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', fontWeight: 700, marginBottom: '1rem' }}>
            Rooms & Villas That Feel Like Home
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.7, marginBottom: '1.8rem' }}>
            From the Rajasthani Heritage Suite to modern Deluxe Rooms, every space is crafted for comfort, beauty, and nature.
          </p>
          <Link href="/stay" className="btn-primary" style={{ fontSize: '1rem', padding: '0.85rem 2.2rem' }}>
            Explore Rooms & Villas
          </Link>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#fff' }}>
        <div className="container-lg">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#c8973a', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Guest Stories</p>
            <h2 className="section-title">What Our Guests Say</h2>
            <span className="earth-line" style={{ margin: '1rem auto 0' }}/>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ background: '#f7f3ec', borderRadius: '12px', padding: '2rem', position: 'relative' }}>
                <div style={{ fontSize: '2.5rem', color: '#c8973a', fontFamily: 'Georgia, serif', position: 'absolute', top: '1rem', right: '1.5rem', opacity: 0.3 }}>"</div>
                <div style={{ color: '#e8b84b', marginBottom: '1rem', fontSize: '1.1rem' }}>{'★'.repeat(t.rating)}</div>
                <p style={{ color: '#4a5c3a', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '1.2rem' }}>"{t.text}"</p>
                <p style={{ fontWeight: 700, color: '#2d4a1e', fontSize: '0.9rem' }}>{t.name}</p>
                <p style={{ color: '#c8973a', fontSize: '0.8rem' }}>{t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#2d4a1e', textAlign: 'center' }}>
        <div className="container-lg">
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#fff', fontWeight: 700, marginBottom: '1rem' }}>
            Ready for Your Farm Escape?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 2rem' }}>
            Book your visit today. WhatsApp us for availability, custom packages, or group bookings.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919928738349?text=Hi%2C%20I%27d%20like%20to%20book%20a%20visit%20to%20Hari%20Bhakti%20Farm"
              target="_blank" rel="noopener noreferrer"
              style={{ background: '#25d366', color: '#fff', padding: '0.85rem 2.2rem', borderRadius: '4px',
                       fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}
            >
              💬 WhatsApp Us
            </a>
            <Link href="/contact" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff', padding: '0.82rem 2rem', fontSize: '1rem' }}>
              Enquiry Form →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
