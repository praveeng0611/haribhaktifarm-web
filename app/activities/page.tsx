import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Activities — Hari Bhakti Farm',
  description: 'Swimming, yoga, nature walks, games, farm activities and more at Hari Bhakti Farm.',
}

const activities = [
  {
    id:    'pool',
    icon:  '🏊',
    name:  'Swimming Pool',
    image: '/images/pool-side.jpg',
    desc:  'Our stunning swimming pool is the heart of Hari Bhakti Farm. Take a refreshing swim, lounge by the poolside, or enjoy the magical evening when the pool lights come alive.',
    details: [
      'Adult pool + dedicated children\'s splash area',
      'Swimming classes for beginners (all ages)',
      'Pool open 6 AM – 8 PM daily',
      'Poolside seating and sun loungers',
      'Evening lighting for night swims',
      'Professional lifeguard on duty',
    ],
  },
  {
    id:    'yoga',
    icon:  '🧘',
    name:  'Yoga & Wellness',
    image: '/images/pool-twilight.jpg',
    desc:  'Begin your mornings with guided yoga in the open farm air. Our sessions are designed for all levels — from beginners to experienced practitioners.',
    details: [
      'Morning yoga sessions 6:30 AM – 7:30 AM',
      'Evening meditation (on request)',
      'Outdoor yoga in nature setting',
      'Pranayama and breathing exercises',
      'Individual and group sessions',
      'Yoga mats and equipment provided',
    ],
  },
  {
    id:    'nature',
    icon:  '🌿',
    name:  'Nature Walks',
    image: '/images/act-nature.jpg',
    desc:  'Walk through our lush farm, fruit orchards, and green gardens. Our guided nature walks connect you with the land and teach you about sustainable farming.',
    details: [
      'Guided farm tour daily at 7 AM and 4 PM',
      'Orchard walk — seasonal fruits',
      'Bird watching with binoculars',
      'Learn about organic farming practices',
      'Cow care experience',
      'Kids\' nature activity kits',
    ],
  },
  {
    id:    'games',
    icon:  '🏓',
    name:  'Game Zone',
    image: '/images/villa-pool.jpg',
    desc:  'Our fully equipped game zone has something for everyone — from table tennis to badminton to board games. Perfect for families and groups.',
    details: [
      'Table tennis (multiple tables)',
      'Badminton court',
      'Volleyball net',
      'Carrom, chess, ludo, business',
      'Cricket pitch nearby',
      'Kids\' play area',
    ],
  },
  {
    id:    'water',
    icon:  '💦',
    name:  'Water Activities',
    image: '/images/pool-eve.jpg',
    desc:  'From splash pads to water volleyball, our water activities are designed for maximum fun.',
    details: [
      'Water volleyball in the pool',
      'Splash activities for children',
      'Pool floats and inflatables',
      'Water games — buckets, sprays, races',
    ],
  },
  {
    id:    'farm',
    icon:  '🌾',
    name:  'Farm Activities',
    image: '/images/kitchen.jpg',
    desc:  'Connect with the earth. Our farm activities give children and adults alike an authentic rural experience.',
    details: [
      'Sowing and harvesting experience',
      'Cow milking (seasonal)',
      'Composting and organic farming demo',
      'Pottery and mud activity',
      'Cooking on chulha experience',
      'Farm-to-table lunch experience',
    ],
  },
  {
    id:    'events',
    icon:  '🎉',
    name:  'Events & Celebrations',
    image: '/images/act-events.jpg',
    desc:  'Birthdays, anniversaries, family reunions — we make every celebration beautiful against the backdrop of nature.',
    details: [
      'Custom decoration packages',
      'Farm-themed birthday setup',
      'Bonfire evenings',
      'Outdoor party area',
      'Photography-friendly settings',
      'Catered meals for groups',
    ],
  },
  {
    id:    'family',
    icon:  '👨‍👩‍👧',
    name:  'Family Day Out',
    image: '/images/pool-aerial-2.jpg',
    desc:  'A complete day package designed so every family member — grandparents to toddlers — has a perfect day.',
    details: [
      'Breakfast to dinner included',
      'Pool access for the day',
      'All activities included',
      'Kids\' guided nature walk',
      'Evening bonfire & music',
      'Farm-fresh all-meal catering',
    ],
  },
]

export default function ActivitiesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '380px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <Image src="/images/pool-aerial.jpg" alt="Activities at Hari Bhakti Farm" fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,36,10,0.62)' }}/>
        <div style={{ position: 'relative', zIndex: 2, padding: '0 1.5rem', paddingTop: '5rem' }}>
          <p style={{ color: '#e8b84b', letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.7rem' }}>Experiences</p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', fontWeight: 700 }}>Activities & Experiences</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '0.8rem', fontSize: '1.05rem' }}>Every moment at the farm is designed to reconnect you with nature and joy</p>
        </div>
      </section>

      {/* Activities */}
      <section className="section-pad" style={{ background: '#f7f3ec' }}>
        <div className="container-lg" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {activities.map((a, i) => (
            <div key={a.id} id={a.id} style={{
              background: '#fff', borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '320px',
            }}>
              <div style={{ position: 'relative', order: i % 2 === 0 ? 0 : 1 }}>
                <Image src={a.image} alt={a.name} fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#2d4a1e', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                  {a.icon}
                </div>
              </div>
              <div style={{ padding: '2.5rem', order: i % 2 === 0 ? 1 : 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', color: '#1e3210', fontWeight: 700, marginBottom: '0.8rem' }}>{a.name}</h2>
                <p style={{ color: '#6b7c5a', lineHeight: 1.75, fontSize: '0.93rem', marginBottom: '1.2rem' }}>{a.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {a.details.map(d => (
                    <li key={d} style={{ fontSize: '0.88rem', color: '#4a5c3a', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span style={{ color: '#c8973a', flexShrink: 0 }}>✓</span> {d}
                    </li>
                  ))}
                </ul>
                <a href={`https://wa.me/919928738349?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(a.name)}%20at%20Hari%20Bhakti%20Farm`}
                  target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: '1.5rem', alignSelf: 'flex-start' }}>
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
