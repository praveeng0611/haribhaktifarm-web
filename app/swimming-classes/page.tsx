import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Swimming Classes — Hari Bhakti Farm | Gold Medalist Coach Jagdish Chandra Teli',
  description:
    'Learn swimming with Gold Medalist English Channel Swimmer Jagdish Chandra Teli at Hari Bhakti Farm, Rajsamand. Classes for kids, adults & competitive swimmers.',
}

const levels = [
  {
    icon: '🐣',
    name: 'Beginners',
    age: 'Age 4+',
    desc: 'Zero to float. Perfect for kids and adults with no swimming experience. Safe, patient, and step-by-step.',
    includes: [
      'Water comfort & fear removal',
      'Floating and breath control',
      'Basic freestyle arm strokes',
      'Kicking drills and body position',
      'Maximum 6 students per batch',
    ],
    color: '#e8f5e9',
    border: '#4caf50',
  },
  {
    icon: '🏊',
    name: 'Intermediate',
    age: 'Age 6+',
    desc: 'Build speed, stamina and stroke perfection. For swimmers who can complete a lap but want to get better.',
    includes: [
      'Freestyle & backstroke technique',
      'Breaststroke and butterfly intro',
      'Breathing rhythm and turns',
      'Lap endurance training',
      'Video feedback sessions',
    ],
    color: '#e3f2fd',
    border: '#2196f3',
  },
  {
    icon: '🥇',
    name: 'Competitive / Advanced',
    age: 'Age 8+',
    desc: 'Train like a champion. Structured competition prep for school/state events under a world-class coach.',
    includes: [
      'All 4 competitive strokes',
      'Race starts and tumble turns',
      'Interval training & periodisation',
      'Open-water technique drills',
      'Personal performance tracking',
    ],
    color: '#fff8e1',
    border: '#ffc107',
  },
  {
    icon: '👨‍👩‍👧',
    name: 'Family & Adult Fitness',
    age: 'All ages',
    desc: 'Recreational swimming, fitness laps, and water confidence for the whole family. Flexible timings.',
    includes: [
      'Fitness swimming for adults',
      'Parent-child water sessions',
      'Aqua stretching & relaxation',
      'Weekend family batches',
      'No prior experience needed',
    ],
    color: '#fce4ec',
    border: '#e91e63',
  },
]

const schedule = [
  { day: 'Monday – Friday', time: '6:30 AM – 8:00 AM', batch: 'Morning — Competitive & Advanced' },
  { day: 'Monday – Friday', time: '8:00 AM – 9:00 AM', batch: 'Morning — Intermediate' },
  { day: 'Monday – Friday', time: '4:30 PM – 5:30 PM', batch: 'Evening — Beginners (Kids)' },
  { day: 'Monday – Friday', time: '5:30 PM – 6:30 PM', batch: 'Evening — Adults & Fitness' },
  { day: 'Saturday',        time: '7:00 AM – 9:00 AM', batch: 'Weekend Family Batch' },
  { day: 'Sunday',          time: '7:00 AM – 9:00 AM', batch: 'Open Practice / Trial Session' },
]

const achievements = [
  '🏅 Gold Medalist — National Swimming Championship',
  '🌊 English Channel Swimmer — One of the very few in Rajasthan',
  '🎓 Certified Swimming Coach — Government of India',
  '🏆 Trained state-level competitive swimmers',
  '📍 Based at Hari Bhakti Farm, Rajsamand — Coaching since 2018',
  '👥 33,100+ followers on Instagram @swimmer_jagdish_teli',
]

export default function SwimmingClassesPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section style={{ position: 'relative', height: '480px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <Image src="/images/pool-aerial-2.jpg" alt="Swimming Classes at Hari Bhakti Farm" fill style={{ objectFit: 'cover', objectPosition: 'center 60%' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,30,60,0.55) 0%, rgba(0,40,80,0.78) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '0 1.5rem', paddingTop: '2rem' }}>
          <p style={{ color: '#e8b84b', letterSpacing: '0.25em', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.75rem' }}>
            Hari Bhakti Farm — Rajsamand
          </p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: '#fff', fontWeight: 700, lineHeight: 1.1, marginBottom: '1rem' }}>
            Swimming Classes
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '560px', margin: '0 auto 2rem', lineHeight: 1.65 }}>
            Coached by <strong style={{ color: '#e8b84b' }}>Jagdish Chandra Teli</strong> — English Channel Swimmer, Gold Medalist &amp; National Certified Coach
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/919928738349?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Swimming%20Classes%20at%20Hari%20Bhakti%20Farm"
              target="_blank" rel="noopener noreferrer" className="btn-primary"
              style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
              💬 Book a Trial Class
            </a>
            <a href="https://www.instagram.com/swimmer_jagdish_teli/" target="_blank" rel="noopener noreferrer"
              style={{ padding: '0.9rem 2rem', fontSize: '1rem', border: '2px solid rgba(255,255,255,0.7)', color: '#fff', borderRadius: '50px', textDecoration: 'none', fontWeight: 600, background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(4px)' }}>
              📸 Coach on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Coach Profile */}
      <section style={{ background: '#fff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '4rem', alignItems: 'center' }}>

          {/* Photo / card */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '3/4', background: 'linear-gradient(135deg, #003366 0%, #0077b6 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 60px rgba(0,50,100,0.25)' }}>
              <div style={{ textAlign: 'center', color: '#fff', padding: '2rem' }}>
                <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>🏊</div>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Jagdish Chandra Teli</p>
                <p style={{ fontSize: '0.9rem', opacity: 0.85, lineHeight: 1.6 }}>English Channel Swimmer<br/>Gold Medalist · National Coach</p>
              </div>
            </div>
            {/* social badge */}
            <div style={{ position: 'absolute', bottom: '-1.2rem', right: '-1.2rem', background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)', borderRadius: '16px', padding: '1rem 1.4rem', color: '#fff', textAlign: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.25)' }}>
              <p style={{ fontSize: '1.4rem', fontWeight: 800 }}>33.1K</p>
              <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.05em' }}>Instagram Followers</p>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p style={{ color: '#c8973a', letterSpacing: '0.2em', fontSize: '0.82rem', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.5rem' }}>Your Coach</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#1e3210', fontWeight: 700, marginBottom: '0.4rem' }}>
              Jagdish Chandra Teli
            </h2>
            <p style={{ color: '#0077b6', fontWeight: 700, fontSize: '1rem', marginBottom: '1.8rem' }}>
              English Channel Swimmer · Gold Medalist · Certified Coach
            </p>
            <p style={{ color: '#4a5c3a', lineHeight: 1.85, fontSize: '0.97rem', marginBottom: '1.5rem' }}>
              Jagdish Chandra Teli is one of Rajasthan's finest swimming coaches and athletes. A Gold Medalist at the National Swimming Championship, he has accomplished what very few in the country have — swimming across the English Channel, one of the most gruelling open-water challenges in the world.
            </p>
            <p style={{ color: '#4a5c3a', lineHeight: 1.85, fontSize: '0.97rem', marginBottom: '2rem' }}>
              As a Government of India certified coach, Jagdish has trained competitive swimmers at state and national level. His philosophy is simple: build confidence in water first, then technique, then speed. Whether you're a 4-year-old nervous about the pool or an adult who never learned to swim, he meets you exactly where you are.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
              {achievements.map((a) => (
                <div key={a} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '0.97rem', flexShrink: 0, marginTop: '0.05rem' }}>{a.split(' ')[0]}</span>
                  <p style={{ color: '#4a5c3a', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>{a.slice(a.indexOf(' ') + 1)}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://www.instagram.com/swimmer_jagdish_teli/" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.7rem 1.4rem', background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>
                📸 @swimmer_jagdish_teli
              </a>
              <a href="https://www.youtube.com/@swimmer_jagdish_teli" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.7rem 1.4rem', background: '#ff0000', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>
                ▶ YouTube Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Levels */}
      <section style={{ background: '#f7f3ec', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ color: '#c8973a', letterSpacing: '0.2em', fontSize: '0.82rem', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.5rem' }}>For Every Swimmer</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#1e3210', fontWeight: 700, marginBottom: '0.75rem' }}>Class Levels</h2>
            <p style={{ color: '#6b7c5a', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              From a child's first splash to competitive training — we have a batch for you.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.8rem' }}>
            {levels.map((lv) => (
              <div key={lv.name} style={{ background: lv.color, borderRadius: '16px', padding: '2rem', border: `2px solid ${lv.border}30`, boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '0.8rem' }}>{lv.icon}</div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', color: '#1e3210', fontWeight: 700, marginBottom: '0.2rem' }}>{lv.name}</h3>
                <span style={{ display: 'inline-block', background: lv.border, color: '#fff', fontSize: '0.72rem', fontWeight: 700, padding: '0.25rem 0.7rem', borderRadius: '20px', marginBottom: '0.9rem' }}>{lv.age}</span>
                <p style={{ color: '#4a5c3a', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>{lv.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {lv.includes.map((item) => (
                    <li key={item} style={{ fontSize: '0.82rem', color: '#4a5c3a', display: 'flex', gap: '0.45rem', alignItems: 'flex-start' }}>
                      <span style={{ color: lv.border, flexShrink: 0, fontWeight: 700 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section style={{ background: '#fff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#c8973a', letterSpacing: '0.2em', fontSize: '0.82rem', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.5rem' }}>Timings</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#1e3210', fontWeight: 700 }}>Class Schedule</h2>
          </div>
          <div style={{ background: '#f7f3ec', borderRadius: '16px', overflow: 'hidden', border: '1px solid #ede6d9' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#2d4a1e', color: '#fff' }}>
                  {['Day', 'Time', 'Batch'].map((h) => (
                    <th key={h} style={{ textAlign: 'left', padding: '1rem 1.5rem', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #ede6d9', background: i % 2 === 0 ? '#fff' : '#faf7f2' }}>
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.9rem', color: '#1e3210', fontWeight: 600 }}>{row.day}</td>
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.9rem', color: '#c8973a', fontWeight: 700, whiteSpace: 'nowrap' }}>{row.time}</td>
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.88rem', color: '#4a5c3a' }}>{row.batch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: 'center', color: '#6b7c5a', fontSize: '0.85rem', marginTop: '1.2rem' }}>
            * Custom batch timings available for school groups and corporate wellness programs
          </p>
        </div>
      </section>

      {/* Why learn here */}
      <section style={{ background: 'linear-gradient(135deg, #003366 0%, #0077b6 100%)', padding: '5rem 1.5rem', color: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#e8b84b', letterSpacing: '0.2em', fontSize: '0.82rem', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.5rem' }}>Why Train With Us</p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, marginBottom: '3rem' }}>The Best Pool in Rajsamand</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🌊', title: 'Olympic-standard pool', desc: 'Crystal-clear water, depth-marked lanes, and certified filtration' },
              { icon: '🏅', title: 'World-class coach', desc: 'English Channel Swimmer with 6+ years coaching experience' },
              { icon: '🌿', title: 'Nature setting', desc: 'Farm air, open skies — the most peaceful learning environment' },
              { icon: '👶', title: 'Safe for all ages', desc: 'Dedicated shallow area for toddlers and young beginners' },
              { icon: '🎓', title: 'Certified training', desc: 'Courses aligned with SAI and national swimming federation standards' },
              { icon: '📷', title: 'Video feedback', desc: 'Advanced students get technique review with underwater video' },
            ].map((f) => (
              <div key={f.title} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '14px', padding: '1.6rem', backdropFilter: 'blur(8px)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.6rem' }}>{f.icon}</div>
                <h4 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem' }}>{f.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.83rem', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pool image strip */}
      <section style={{ position: 'relative', height: '320px', overflow: 'hidden' }}>
        <Image src="/images/pool-side.jpg" alt="Swimming pool at Hari Bhakti Farm" fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', color: '#fff' }}>
            <p style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Georgia, serif', fontWeight: 700, marginBottom: '0.5rem' }}>
              "Every champion was once a beginner who refused to give up."
            </p>
            <p style={{ color: '#e8b84b', fontSize: '0.9rem', fontWeight: 600 }}>— Jagdish Chandra Teli</p>
          </div>
        </div>
      </section>

      {/* Kids Gallery link */}
      <section style={{ background: '#f7f3ec', padding: '3.5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ color: '#c8973a', letterSpacing: '0.2em', fontSize: '0.82rem', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.5rem' }}>Our Students</p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', color: '#1e3210', fontWeight: 700, marginBottom: '0.75rem' }}>See the Kids Gallery</h2>
          <p style={{ color: '#6b7c5a', lineHeight: 1.7, marginBottom: '1.8rem' }}>
            Watch our young swimmers grow — from their first splash to confident laps. The gallery is updated regularly with photos and videos from our classes.
          </p>
          <Link href="/gallery/kids" className="btn-primary" style={{ display: 'inline-block' }}>
            🎥 View Kids Gallery →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#2d4a1e', padding: '5rem 1.5rem', textAlign: 'center', color: '#fff' }}>
        <div style={{ maxWidth: '620px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, marginBottom: '0.8rem' }}>
            Ready to Make a Splash?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: '2.5rem', fontSize: '1.05rem' }}>
            Book a free trial class. Jagdish will assess your current level and recommend the right batch. No commitment required.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/919928738349?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20trial%20swimming%20class%20at%20Hari%20Bhakti%20Farm.%0A%0AName%3A%20%0AAge%2FLevel%3A%20%0APreferred%20time%3A"
              target="_blank" rel="noopener noreferrer" className="btn-primary"
              style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
              💬 Book Free Trial on WhatsApp
            </a>
            <a href="tel:+919928738349"
              style={{ padding: '1rem 2.5rem', fontSize: '1.05rem', border: '2px solid rgba(255,255,255,0.5)', color: '#fff', borderRadius: '50px', textDecoration: 'none', fontWeight: 600 }}>
              📞 Call to Enquire
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
