import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rules & Safety Guidelines — Hari Bhakti Farm',
  description: 'Safety rules and guest guidelines for Hari Bhakti Farm — pool, swimming classes, farm activities and general conduct.',
}

const ruleBlocks = [
  {
    icon: '🏊',
    title: 'Swimming Pool Rules',
    color: '#2d4a1e',
    rules: [
      'Shower before entering the pool. This is mandatory and non-negotiable.',
      'Wear proper swimwear. Street clothing, jeans or cotton wear are not permitted in the pool.',
      'No running, pushing, jumping or rough play in the pool or pool deck area.',
      'Children under 12 must be accompanied by a supervising adult at all times in the pool area.',
      'Non-swimmers must not enter the deep section without a flotation aid and adult supervision.',
      'Do not enter the pool if you are unwell, have an open wound, skin infection or are under the influence of alcohol or medication.',
      'No food, glass or plastic bottles inside the pool area. Water in closed containers is permitted.',
      'Respect other swimmers. Avoid blocking lanes or causing disturbance.',
      'The pool is monitored, but Hari Bhakti Farm does not guarantee a lifeguard at all times. Swim with caution.',
      'The management may ask any guest to leave the pool area for misconduct, health or safety reasons.',
    ],
  },
  {
    icon: '🎓',
    title: 'Swimming Class Rules',
    color: '#1a3a6e',
    rules: [
      'Arrive at least 10 minutes before your class is scheduled to begin.',
      'Wear appropriate swimwear and bring a towel and water bottle.',
      'Follow all instructions from Coach Jagdish Chandra Teli and assistant coaches without argument.',
      'No mobile phones or photography in the pool area during classes.',
      'Inform the coach in advance if you have any medical condition, injury or health concern.',
      'Students with ear or eye infections, or contagious skin conditions, will not be permitted to participate until fully recovered.',
      'Parents / guardians of children attending classes must remain on or near the premises for the duration of the class.',
      'Disruptive behaviour by any participant will result in removal from the class without refund.',
      'All class schedules and timings are subject to change; we will notify enrolled students in advance.',
      'Private one-on-one sessions must be pre-booked and are subject to coach availability.',
    ],
  },
  {
    icon: '🌿',
    title: 'Farm & Property Rules',
    color: '#4a7c3a',
    rules: [
      'Treat all farm animals, plants and equipment with care and respect.',
      'Do not pick or damage crops, plants or trees without express permission from staff.',
      'Keep all common areas, pathways and dining spaces clean. Use designated bins for waste.',
      'Do not litter anywhere on the farm premises, including the lake-view areas and nature trails.',
      'Avoid any activity that could disturb the farm\'s natural ecosystem — no chasing animals, no loud music in nature areas.',
      'Farm equipment and vehicles are for staff use only. Guests must not operate any farm machinery.',
      'Bonfires are permitted only in designated areas and only when supervised by a staff member.',
    ],
  },
  {
    icon: '🏡',
    title: 'Room & Stay Rules',
    content: 'Applicable to overnight guests.',
    rules: [
      'Check-in: 12:00 PM | Check-out: 11:00 AM. Please inform us in advance for early check-in or late check-out.',
      'Smoking is strictly prohibited inside rooms. A cleaning charge of ₹2,000 will be levied for violation.',
      'Maintain noise levels respectfully, especially between 10:00 PM and 7:00 AM.',
      'Outside food or alcohol is not permitted in rooms without prior approval.',
      'Guests are responsible for any damage caused to room contents, fixtures or furniture.',
      'The farm is a private property. Visitors to staying guests must be registered at the reception.',
      'Lost room keys will be charged at actuals. Please keep keys safe.',
    ],
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Family & Children Guidelines',
    rules: [
      'Children must be supervised by a responsible adult at all times — in the pool, on the farm and during activities.',
      'Children under 8 are not permitted in the deep section of the pool under any circumstance.',
      'All children participating in swimming classes must have written parental/guardian consent.',
      'Playing near the boundary walls, rooftops or agricultural equipment areas is prohibited for children.',
      'We are a family-friendly property. Please ensure children\'s conduct is in keeping with a calm, natural environment.',
    ],
  },
  {
    icon: '🚨',
    title: 'Emergency & Safety',
    rules: [
      'In case of any emergency, contact our front desk immediately. Emergency contact: +91 99287 38349.',
      'First-aid equipment is available on the premises. Please ask staff for assistance.',
      'Do not attempt to self-rescue a drowning person unless trained to do so — alert staff immediately.',
      'In case of a medical emergency, we will assist in calling emergency services. The nearest government hospital is in Rajsamand (approx. 8 km).',
      'Fire extinguishers are located in marked positions on the property. Do not tamper with firefighting equipment.',
      'Guests must evacuate the premises calmly and immediately if an alarm or evacuation instruction is issued.',
    ],
  },
]

export default function RulesPage() {
  return (
    <main style={{ background: '#f7f3ec', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: '#2d4a1e', padding: '6rem 2rem 3rem', textAlign: 'center' }}>
        <p style={{ color: '#e8b84b', fontSize: '0.82rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Legal</p>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#fff', fontWeight: 700 }}>Rules &amp; Safety Guidelines</h1>
        <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '0.7rem', fontSize: '0.9rem' }}>
          For the safety and enjoyment of all guests — please read before your visit.
        </p>
      </section>

      {/* Intro */}
      <section style={{ maxWidth: '820px', margin: '0 auto', padding: '3rem 2rem 0' }}>
        <div style={{ background: '#fff8ed', border: '1px solid #e8d9b8', borderRadius: '12px', padding: '1.4rem 1.8rem', marginBottom: '2.5rem' }}>
          <p style={{ color: '#7a5c1e', fontSize: '0.93rem', lineHeight: 1.8 }}>
            <strong>A note from us:</strong> Hari Bhakti Farm is a space built on warmth, nature and respect. These guidelines exist not to restrict you, but to ensure that every guest — from a toddler in the pool to a senior guest on a farm walk — feels safe and welcome. We appreciate your cooperation.
          </p>
        </div>
      </section>

      {/* Rule blocks */}
      <section style={{ maxWidth: '820px', margin: '0 auto', padding: '0 2rem 5rem' }}>
        {ruleBlocks.map((block) => (
          <div key={block.title} style={{ marginBottom: '2.5rem', background: '#fff', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            {/* Block header */}
            <div style={{ background: block.color, padding: '1.1rem 1.6rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ fontSize: '1.4rem' }}>{block.icon}</span>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', color: '#fff', fontWeight: 700, margin: 0 }}>{block.title}</h2>
            </div>
            {/* Rules list */}
            <div style={{ padding: '1.4rem 1.8rem' }}>
              {block.rules.map((rule, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span style={{ color: block.color, fontWeight: 700, fontSize: '0.85rem', marginTop: '0.15rem', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}.</span>
                  <p style={{ color: '#4a5c3a', fontSize: '0.91rem', lineHeight: 1.75, margin: 0 }}>{rule}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Acknowledgement box */}
        <div style={{ background: '#2d4a1e', borderRadius: '14px', padding: '2rem', textAlign: 'center', marginTop: '1rem' }}>
          <p style={{ color: '#e8b84b', fontWeight: 700, fontSize: '1rem', marginBottom: '0.6rem' }}>🙏 Thank You</p>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.4rem' }}>
            By entering Hari Bhakti Farm premises, you acknowledge that you have read and agree to these rules and guidelines. For any questions, our staff are always happy to help.
          </p>
          <a href="https://wa.me/919928738349" target="_blank" rel="noopener noreferrer"
            style={{ background: '#25d366', color: '#fff', padding: '0.65rem 1.5rem', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', display: 'inline-block', fontSize: '0.9rem' }}>
            💬 Ask a Question on WhatsApp
          </a>
        </div>

        {/* Footer nav */}
        <div style={{ borderTop: '1px solid #ddd8cc', paddingTop: '2rem', marginTop: '3rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <Link href="/terms-conditions" style={{ color: '#c8973a', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>Terms &amp; Conditions →</Link>
          <Link href="/privacy-policy" style={{ color: '#c8973a', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy →</Link>
          <Link href="/contact" style={{ color: '#2d4a1e', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>Contact Us →</Link>
        </div>
      </section>
    </main>
  )
}
