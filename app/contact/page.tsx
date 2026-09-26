'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', mobile: '', email: '', date: '', group_size: '1–2 people', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errMsg, setErrMsg] = useState('')

  const set = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', mobile: '', email: '', date: '', group_size: '1–2 people', message: '' })
      } else {
        const d = await res.json()
        setErrMsg(d.error || 'Something went wrong.')
        setStatus('error')
      }
    } catch {
      setErrMsg('Network error. Please WhatsApp us directly.')
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '300px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <Image src="/images/villa-pool.jpg" alt="Contact" fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,36,10,0.7)' }}/>
        <div style={{ position: 'relative', zIndex: 2, paddingTop: '4rem' }}>
          <p style={{ color: '#e8b84b', letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>We'd Love to Hear From You</p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#fff', fontWeight: 700 }}>Plan Your Visit</h1>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="section-pad" style={{ background: '#f7f3ec' }}>
        <div className="container-lg" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

          {/* Contact info */}
          <div>
            <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Get in Touch</h2>
            <span className="earth-line"/>
            <p style={{ color: '#6b7c5a', lineHeight: 1.8, marginBottom: '2rem' }}>
              Whether you'd like to book a stay, plan a family day out, or enquire about packages — reach us on WhatsApp for the fastest response.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: '#2d4a1e', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>💬</div>
                <div>
                  <p style={{ fontWeight: 700, color: '#1e3210', marginBottom: '0.2rem' }}>WhatsApp (Fastest)</p>
                  <a href="https://wa.me/919928738349" target="_blank" rel="noopener noreferrer"
                    style={{ color: '#25d366', fontWeight: 600, textDecoration: 'none', fontSize: '1.05rem' }}>
                    +91 99287 38349
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: '#2d4a1e', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>📞</div>
                <div>
                  <p style={{ fontWeight: 700, color: '#1e3210', marginBottom: '0.2rem' }}>Call Us</p>
                  <a href="tel:+919928738349" style={{ color: '#2d4a1e', fontWeight: 600, textDecoration: 'none', fontSize: '1.05rem' }}>
                    +91 99287 38349
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: '#2d4a1e', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>📍</div>
                <div>
                  <p style={{ fontWeight: 700, color: '#1e3210', marginBottom: '0.2rem' }}>Our Address</p>
                  <p style={{ color: '#4a5c3a', lineHeight: 1.7, fontSize: '0.95rem' }}>
                    Near, Asotiya Rd, phatak<br/>
                    Kankroli, Mohi<br/>
                    Rajsamand, Rajasthan 313324
                  </p>
                  <a href="https://share.google/9crbTHBKeq5YGwL9G" target="_blank" rel="noopener noreferrer"
                    style={{ color: '#c8973a', fontSize: '0.88rem', fontWeight: 600, display: 'inline-block', marginTop: '0.4rem' }}>
                    View on Google Maps →
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: '#2d4a1e', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>🚗</div>
                <div>
                  <p style={{ fontWeight: 700, color: '#1e3210', marginBottom: '0.4rem' }}>How to Reach Us</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {[
                      { icon: '🏙️', text: 'Rajsamand City — 8 km (15 min)' },
                      { icon: '🛕', text: 'Nathdwara (Shrinathji) — 20 km (30 min)' },
                      { icon: '🏰', text: 'Kumbhalgarh Fort — 48 km (1 hr)' },
                      { icon: '⚔️', text: 'Haldighati — 24 km (35 min)' },
                      { icon: '🏙️', text: 'Udaipur City — 66 km (1.5 hrs)' },
                      { icon: '✈️', text: 'Udaipur Airport — 72 km (1.5 hrs)' },
                    ].map(d => (
                      <p key={d.text} style={{ color: '#6b7c5a', fontSize: '0.88rem' }}>{d.icon} {d.text}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: '#2d4a1e', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>🕐</div>
                <div>
                  <p style={{ fontWeight: 700, color: '#1e3210', marginBottom: '0.2rem' }}>Timings</p>
                  <p style={{ color: '#6b7c5a' }}>Check-in: 12:00 PM &nbsp;|&nbsp; Check-out: 11:00 AM</p>
                  <p style={{ color: '#6b7c5a', fontSize: '0.85rem' }}>Day visit: 9 AM – 7 PM</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: '#fff', borderRadius: '12px', border: '1px solid #ede6d9' }}>
              <p style={{ fontWeight: 700, color: '#1e3210', marginBottom: '0.5rem' }}>🎯 Quick Enquiry</p>
              <p style={{ color: '#6b7c5a', fontSize: '0.88rem', marginBottom: '1rem' }}>
                Send us a WhatsApp with your dates, group size and what you'd like to experience. We'll respond within 1 hour.
              </p>
              <a href="https://wa.me/919928738349?text=Hi%20Hari%20Bhakti%20Farm%2C%20I%27d%20like%20to%20enquire%20about%20a%20visit.%0A%0ADates%3A%20%0AGroup%20size%3A%20%0AInterested%20in%3A"
                target="_blank" rel="noopener noreferrer"
                style={{ background: '#25d366', color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}>
                💬 Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Enquiry form */}
          <div style={{ background: '#fff', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.3rem', color: '#1e3210', fontWeight: 700, marginBottom: '1.5rem' }}>
              Send an Enquiry
            </h3>

            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h4 style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', color: '#2d4a1e', marginBottom: '0.5rem' }}>Enquiry Received!</h4>
                <p style={{ color: '#6b7c5a', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Thank you! We'll reach out to you via WhatsApp or phone within 1 hour.
                </p>
                <button onClick={() => setStatus('idle')}
                  style={{ background: '#2d4a1e', color: '#fff', padding: '0.65rem 1.5rem', borderRadius: '4px', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

                {[
                  { label: 'Your Name',       field: 'name',    type: 'text',  placeholder: 'Full name',           required: true  },
                  { label: 'Mobile Number',   field: 'mobile',  type: 'tel',   placeholder: '+91 98765 43210',     required: true  },
                  { label: 'Email Address',   field: 'email',   type: 'email', placeholder: 'your@email.com',      required: false },
                ].map(f => (
                  <div key={f.field}>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', color: '#1e3210', marginBottom: '0.4rem' }}>{f.label}{f.required ? '' : ' (optional)'}</label>
                    <input name={f.field} type={f.type} placeholder={f.placeholder} required={f.required}
                      value={(form as Record<string, string>)[f.field]}
                      onChange={(e) => set(f.field, e.target.value)}
                      style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '6px', border: '1.5px solid #dde8d5', fontSize: '0.92rem', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                ))}

                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', color: '#1e3210', marginBottom: '0.4rem' }}>Preferred Visit Date</label>
                  <input name="date" type="date" value={form.date} onChange={(e) => set('date', e.target.value)}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '6px', border: '1.5px solid #dde8d5', fontSize: '0.92rem', boxSizing: 'border-box' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', color: '#1e3210', marginBottom: '0.4rem' }}>Group Size</label>
                  <select name="group_size" value={form.group_size} onChange={(e) => set('group_size', e.target.value)}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '6px', border: '1.5px solid #dde8d5', fontSize: '0.92rem', background: '#fff', boxSizing: 'border-box' }}>
                    <option>1–2 people</option>
                    <option>3–5 people</option>
                    <option>6–10 people</option>
                    <option>11–20 people</option>
                    <option>20+ people</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', color: '#1e3210', marginBottom: '0.4rem' }}>Message</label>
                  <textarea name="message" rows={4} placeholder="Tell us what you're looking for — stay, day visit, event, activities..."
                    value={form.message} onChange={(e) => set('message', e.target.value)}
                    style={{ width: '100%', padding: '0.7rem 0.9rem', borderRadius: '6px', border: '1.5px solid #dde8d5', fontSize: '0.92rem', resize: 'vertical', boxSizing: 'border-box' }} />
                </div>

                {status === 'error' && (
                  <p style={{ color: '#c0392b', fontSize: '0.88rem', background: '#fdf0ee', padding: '0.6rem 0.9rem', borderRadius: '6px', border: '1px solid #f5c6c1' }}>
                    ❌ {errMsg}
                  </p>
                )}

                <button type="submit" disabled={status === 'loading'}
                  className="btn-primary" style={{ fontSize: '1rem', padding: '0.85rem', textAlign: 'center', border: 'none', cursor: 'pointer', opacity: status === 'loading' ? 0.7 : 1 }}>
                  {status === 'loading' ? 'Sending...' : 'Send Enquiry →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Google Map embed */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: '100%' }}>
          <div style={{ padding: '1.5rem 2rem 0.5rem', textAlign: 'center' }}>
            <p style={{ color: '#c8973a', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Find Us</p>
            <h2 className="section-title" style={{ marginBottom: '0.2rem' }}>We're on the Map</h2>
            <p style={{ color: '#6b7c5a', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Near, Asotiya Rd, phatak, Kankroli, Mohi, Rajsamand, Rajasthan 313324
            </p>
          </div>
          <iframe
            title="Hari Bhakti Farm Location"
            src="https://maps.google.com/maps?q=Hari+Bhakti+Farm,+Asotiya+Road,+Kankroli,+Mohi,+Rajsamand,+Rajasthan+313324&output=embed"
            width="100%"
            height="480"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div style={{ textAlign: 'center', padding: '1rem', background: '#f7f3ec' }}>
            <a href="https://share.google/9crbTHBKeq5YGwL9G" target="_blank" rel="noopener noreferrer"
              className="btn-primary" style={{ display: 'inline-block' }}>
              📍 Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
