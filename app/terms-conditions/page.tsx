import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Hari Bhakti Farm',
  description: 'Terms and conditions for staying at Hari Bhakti Farm and enrolling in swimming classes at Rajsamand.',
}

const sections = [
  {
    title: '1. General',
    content: [
      `These Terms & Conditions govern all stays, day visits, activities and swimming class enrolments at Hari Bhakti Farm, located at Near Asotiya Road, Phatak, Kankroli, Mohi, Rajsamand, Rajasthan 313324. By making a booking or attending the premises, you agree to these terms in full.`,
      `Hari Bhakti Farm reserves the right to update these terms at any time. The version published on this website at the time of your booking shall apply.`,
    ],
  },
  {
    title: '2. Bookings & Reservations',
    content: [
      `All bookings are subject to availability and are confirmed only upon receipt of the advance payment as communicated by our team.`,
      `Bookings made via WhatsApp, phone or the website enquiry form are tentative until confirmed in writing by Hari Bhakti Farm.`,
      `The guest making the booking is responsible for ensuring all members of their group comply with these terms.`,
      `We reserve the right to decline any booking or entry at our discretion without assigning a reason.`,
    ],
  },
  {
    title: '3. Payment Terms',
    content: [
      `Advance payment (percentage as communicated at the time of booking) is required to confirm a reservation.`,
      `The balance is payable at check-in unless agreed otherwise.`,
      `Payments are accepted via bank transfer, UPI or cash. Receipts will be issued upon request.`,
      `All prices quoted are inclusive of applicable taxes unless stated otherwise.`,
    ],
  },
  {
    title: '4. Cancellation & Refund Policy',
    content: [
      `Cancellations made 7 or more days before the check-in date: full advance refund, less a processing fee of ₹500.`,
      `Cancellations made 3–6 days before check-in: 50% of the advance amount is refunded.`,
      `Cancellations within 48 hours of check-in or no-shows: no refund.`,
      `Hari Bhakti Farm reserves the right to cancel a booking due to circumstances beyond our control (natural events, maintenance, force majeure). In such cases, a full refund of any advance paid will be provided.`,
    ],
  },
  {
    title: '5. Check-in & Check-out',
    content: [
      `Standard check-in time is 12:00 PM and check-out is 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability and applicable charges.`,
      `Valid government-issued photo identification (Aadhaar, PAN, Passport, Driving Licence) is required for all adult guests at check-in.`,
    ],
  },
  {
    title: '6. Guest Conduct',
    content: [
      `Guests are expected to conduct themselves in a respectful and responsible manner at all times.`,
      `Hari Bhakti Farm is a family-friendly space. Any behaviour that disturbs other guests, staff or the local community will result in immediate eviction without refund.`,
      `Noise must be kept to a minimum between 10:00 PM and 7:00 AM.`,
      `Outside alcohol is not permitted on the premises. Farm-approved beverages may be available.`,
      `Smoking is not permitted in rooms, near the pool, or in any enclosed areas. Designated smoking areas may be indicated on-site.`,
      `Pets are not permitted unless prior written approval has been obtained.`,
    ],
  },
  {
    title: '7. Swimming Pool — Terms of Use',
    content: [
      `The swimming pool is available to registered guests only. Day visitors may access the pool only with an explicit pool-access package.`,
      `Children below 12 years of age must be accompanied by an adult in the pool area at all times.`,
      `Guests must shower before entering the pool. Swimwear is mandatory; street clothing is not permitted in the pool.`,
      `The pool depth and dimensions will be clearly displayed on-site. Guests swim at their own risk.`,
      `Hari Bhakti Farm is not liable for any injuries, accidents or medical events arising from use of the pool.`,
      `The management may close the pool at any time for maintenance or safety reasons without prior notice.`,
    ],
  },
  {
    title: '8. Swimming Classes — Enrolment Terms',
    content: [
      `Swimming classes are conducted under the supervision of certified coach Jagdish Chandra Teli and trained staff.`,
      `Enrolment in a swimming class batch confirms your understanding that swimming carries inherent physical risks. All participants accept these risks voluntarily.`,
      `A medical fitness declaration may be required for participants with pre-existing health conditions. Hari Bhakti Farm reserves the right to refuse participation if we believe it poses a health risk to the individual.`,
      `Batch timings, fees and duration will be communicated at the time of enrolment and are subject to change with prior notice.`,
      `Fees once paid for a class batch are non-refundable except in the case of cancellation of the batch by Hari Bhakti Farm.`,
      `Missed classes cannot be compensated unless approved in advance by the coach.`,
      `Participants must arrive on time. Admission after the class has commenced is at the coach's discretion.`,
    ],
  },
  {
    title: '9. Liability',
    content: [
      `Hari Bhakti Farm and its staff are not liable for any loss, theft, damage to personal belongings, injury or illness sustained on the premises, except where caused by our gross negligence.`,
      `Guests are advised to take adequate personal travel and health insurance.`,
      `All activities — swimming, yoga, farm walks, nature activities — are undertaken at the participant's own risk.`,
    ],
  },
  {
    title: '10. Property & Damage',
    content: [
      `Guests are liable for any damage caused to farm property, equipment or premises during their stay.`,
      `The cost of repair or replacement will be charged to the guest and must be settled before departure.`,
    ],
  },
  {
    title: '11. Privacy',
    content: [
      `We collect personal information (name, mobile, email) solely for the purpose of booking management and communication. Please refer to our Privacy Policy for details.`,
    ],
  },
  {
    title: '12. Governing Law',
    content: [
      `These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Rajsamand, Rajasthan.`,
    ],
  },
  {
    title: '13. Contact',
    content: [
      `For any queries regarding these terms, please contact us via WhatsApp at +91 99287 38349 or through the Contact page on this website.`,
    ],
  },
]

export default function TermsPage() {
  return (
    <main style={{ background: '#f7f3ec', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: '#2d4a1e', padding: '6rem 2rem 3rem', textAlign: 'center' }}>
        <p style={{ color: '#e8b84b', fontSize: '0.82rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Legal</p>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#fff', fontWeight: 700 }}>Terms &amp; Conditions</h1>
        <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '0.7rem', fontSize: '0.9rem' }}>
          Last updated: September 2026
        </p>
      </section>

      {/* Content */}
      <section style={{ maxWidth: '820px', margin: '0 auto', padding: '3rem 2rem 5rem' }}>
        <p style={{ color: '#6b7c5a', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '0.95rem' }}>
          Please read these Terms &amp; Conditions carefully before making a booking or using our facilities. These terms apply to all guests of Hari Bhakti Farm — including those staying overnight, visiting for the day, using the swimming pool, or enrolling in swimming classes.
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
          <Link href="/privacy-policy" style={{ color: '#c8973a', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy →</Link>
          <Link href="/rules-guidelines" style={{ color: '#c8973a', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>Rules &amp; Safety Guidelines →</Link>
          <Link href="/contact" style={{ color: '#2d4a1e', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>Contact Us →</Link>
        </div>
      </section>
    </main>
  )
}
