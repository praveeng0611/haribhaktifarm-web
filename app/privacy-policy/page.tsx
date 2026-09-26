import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Hari Bhakti Farm',
  description: 'How Hari Bhakti Farm collects, uses and protects your personal information.',
}

const sections = [
  {
    title: '1. Who We Are',
    content: [
      `Hari Bhakti Farm is a farmstay and recreational facility located at Near Asotiya Road, Phatak, Kankroli, Mohi, Rajsamand, Rajasthan 313324. We operate accommodation, day-visit experiences, and swimming classes. In this Privacy Policy, "we", "us" and "our" refer to Hari Bhakti Farm.`,
    ],
  },
  {
    title: '2. Information We Collect',
    content: [
      `Name, mobile number and email address — provided when you submit an enquiry through our website contact form or WhatsApp.`,
      `Preferred visit date and group size — collected as part of the booking enquiry process.`,
      `Government-issued ID details — collected on-site at check-in as required under applicable hospitality regulations.`,
      `Messages and communications — any queries or messages you send us via WhatsApp or the website contact form.`,
      `We do not collect payment card numbers or banking credentials through this website.`,
    ],
  },
  {
    title: '3. How We Use Your Information',
    content: [
      `To respond to your enquiry and manage your reservation or class enrolment.`,
      `To send you booking confirmations, reminders and relevant farm updates via WhatsApp or phone.`,
      `To maintain records required by law (guest registration as mandated by local authorities).`,
      `To improve our website and services based on general usage patterns.`,
      `We will not use your personal information for unsolicited marketing without your consent.`,
    ],
  },
  {
    title: '4. WhatsApp Communications',
    content: [
      `By submitting an enquiry or booking, you consent to being contacted on the mobile number provided via WhatsApp and/or phone call for the purpose of confirming and managing your booking.`,
      `We will not add you to bulk broadcast lists without your explicit consent.`,
      `You may opt out of non-essential communications at any time by informing us via WhatsApp or the contact form.`,
    ],
  },
  {
    title: '5. Data Storage',
    content: [
      `Your enquiry data is stored securely in our booking management system. We take reasonable technical and organisational measures to protect your data from unauthorised access, loss or misuse.`,
      `We retain booking records for a minimum of 2 years as required by applicable laws, and enquiry data for up to 1 year.`,
    ],
  },
  {
    title: '6. Sharing of Information',
    content: [
      `We do not sell, rent or share your personal information with third parties for marketing purposes.`,
      `We may share your information with local authorities where required by law (e.g., guest registration requirements).`,
      `We may use trusted third-party services (such as our web hosting provider) who process data on our behalf under confidentiality obligations.`,
    ],
  },
  {
    title: '7. Cookies & Website Analytics',
    content: [
      `Our website may use basic cookies to enable core functionality. We do not use tracking cookies or third-party advertising cookies.`,
      `We may use anonymised analytics data (page views, device type) to understand how our website is used. This data is not linked to your personal identity.`,
    ],
  },
  {
    title: '8. Children\'s Privacy',
    content: [
      `We do not knowingly collect personal data directly from children under the age of 18. All bookings and swimming class enrolments for minors must be made by a parent or legal guardian.`,
    ],
  },
  {
    title: '9. Your Rights',
    content: [
      `You may request access to the personal information we hold about you.`,
      `You may request correction of inaccurate information or deletion of your data (where legally permissible).`,
      `To exercise any of these rights, contact us via WhatsApp at +91 99287 38349 or through our Contact page.`,
    ],
  },
  {
    title: '10. Changes to This Policy',
    content: [
      `We may update this Privacy Policy from time to time. The latest version will always be available on this page. Continued use of our services after changes are posted constitutes acceptance of the revised policy.`,
    ],
  },
  {
    title: '11. Contact',
    content: [
      `For any privacy-related queries, please reach us via WhatsApp at +91 99287 38349 or via the Contact form on this website.`,
    ],
  },
]

export default function PrivacyPage() {
  return (
    <main style={{ background: '#f7f3ec', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: '#2d4a1e', padding: '6rem 2rem 3rem', textAlign: 'center' }}>
        <p style={{ color: '#e8b84b', fontSize: '0.82rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Legal</p>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#fff', fontWeight: 700 }}>Privacy Policy</h1>
        <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '0.7rem', fontSize: '0.9rem' }}>
          Last updated: September 2026
        </p>
      </section>

      {/* Content */}
      <section style={{ maxWidth: '820px', margin: '0 auto', padding: '3rem 2rem 5rem' }}>
        <p style={{ color: '#6b7c5a', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '0.95rem' }}>
          At Hari Bhakti Farm, we respect your privacy. This policy explains what personal information we collect, how we use it, and how we keep it safe — whether you are a guest at our farmstay or a student enrolled in our swimming classes.
        </p>

        {sections.map((s) => (
          <div key={s.title} style={{ marginBottom: '2.2rem' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', color: '#1e3210', fontWeight: 700, marginBottom: '0.8rem', paddingBottom: '0.4rem', borderBottom: '1px solid #e2d9cc' }}>
              {s.title}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {s.content.map((para, i) => (
                <p key={i} style={{ color: '#4a5c3a', lineHeight: 1.8, fontSize: '0.92rem' }}>
                  {s.content.length > 1 ? `${String.fromCharCode(9702)} ` : ''}{para}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Footer nav */}
        <div style={{ borderTop: '1px solid #ddd8cc', paddingTop: '2rem', marginTop: '3rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <Link href="/terms-conditions" style={{ color: '#c8973a', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>Terms &amp; Conditions →</Link>
          <Link href="/rules-guidelines" style={{ color: '#c8973a', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>Rules &amp; Safety Guidelines →</Link>
          <Link href="/contact" style={{ color: '#2d4a1e', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>Contact Us →</Link>
        </div>
      </section>
    </main>
  )
}
