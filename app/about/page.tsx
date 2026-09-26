import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us | Hari Bhakti Farm',
  description:
    'Learn about Hari Bhakti Farm — a luxury farmstay born from a love of nature, Rajasthani heritage, and warm hospitality. Meet the family behind the experience.',
}

const values = [
  {
    icon: '🌿',
    title: 'Rooted in Nature',
    desc: 'Every corner of Hari Bhakti Farm is designed to bring you closer to the earth — organic gardens, open skies, and the gentle rhythm of rural life.',
  },
  {
    icon: '🏡',
    title: 'Genuine Hospitality',
    desc: 'We treat every guest like family. From the moment you arrive, our team is here to make sure your stay is relaxed, personal, and memorable.',
  },
  {
    icon: '🎨',
    title: 'Rajasthani Heritage',
    desc: 'Our architecture, decor, and cuisine draw deeply from Rajasthani culture — celebrating centuries of artisanship, colour, and tradition.',
  },
  {
    icon: '♻️',
    title: 'Sustainable Living',
    desc: 'We grow our own vegetables, harvest rainwater, and compost organic waste. Sustainability is not a policy here — it is a way of life.',
  },
]

const team = [
  {
    name: 'Hari Om Sharma',
    role: 'Founder & Host',
    bio: 'A retired civil engineer who traded city blueprints for farm fields, Hari Om built this property with his own hands over five years. His vision: a place where families could slow down and reconnect.',
    img: '/images/pool-eve.jpg',
  },
  {
    name: 'Sunita Sharma',
    role: 'Co-Founder & Head of Hospitality',
    bio: 'With a background in home economics and a lifelong passion for cooking, Sunita oversees every meal served at the farm — all prepared from scratch using fresh, seasonal ingredients.',
    img: '/images/kitchen.jpg',
  },
]

const milestones = [
  { year: '2015', event: 'Land acquired in the green belt outside Jaipur' },
  { year: '2017', event: 'Construction begins on the Heritage Suite and first cottages' },
  { year: '2019', event: 'First guests welcomed — word spreads by recommendation alone' },
  { year: '2021', event: 'Swimming pool and activity zone added' },
  { year: '2023', event: 'Farm Villa with private pool opens' },
  { year: '2024', event: '500+ families hosted, rated #1 farmstay in the region' },
]

export default function AboutPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/pool-aerial.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="uppercase tracking-[4px] text-sm text-amber-300 mb-3">Our Story</p>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">About Hari Bhakti Farm</h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            A family dream turned into Rajasthan's most beloved farmstay
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-[3px] text-xs text-[#c8973a] font-semibold mb-3">The Beginning</p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#2d4a1e] mb-6">
              Born from a love of land and family
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hari Bhakti Farm began as a personal dream — a five-acre plot of land, a family's determination, and a belief that the best hospitality is the kind you feel at home.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nestled in the lush green belt near Jaipur, the farm was built organically over several years. What started as a weekend retreat for the Sharma family gradually became a destination that friends, colleagues, and travellers wanted to experience too.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, Hari Bhakti Farm blends Rajasthani heritage architecture with modern comfort — offering guests a rare combination of luxury, authenticity, and the simple joy of open skies.
            </p>
          </div>
          <div className="relative h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/villa-pool.jpg"
              alt="Hari Bhakti Farm property"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#f7f3ec]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[3px] text-xs text-[#c8973a] font-semibold mb-3">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#2d4a1e]">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-[#2d4a1e] text-lg mb-3 font-serif">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#2d4a1e] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[3px] text-xs text-amber-300 font-semibold mb-3">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif">How We Grew</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/20 md:-translate-x-px" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={m.year} className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`pl-16 md:pl-0 md:w-5/12 ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'}`}>
                    <p className="text-amber-300 font-bold text-lg mb-1">{m.year}</p>
                    <p className="text-white/80 leading-relaxed">{m.event}</p>
                  </div>
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-amber-300 mt-1.5 ring-4 ring-[#2d4a1e]" />
                  <div className="hidden md:block md:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[3px] text-xs text-[#c8973a] font-semibold mb-3">The People Behind It</p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#2d4a1e]">Meet the Family</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-[#f7f3ec] rounded-2xl overflow-hidden shadow-sm">
                <div className="relative h-56 w-full">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-5 text-white">
                    <p className="font-bold text-lg font-serif">{member.name}</p>
                    <p className="text-amber-300 text-sm">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-[#f7f3ec]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-[3px] text-xs text-[#c8973a] font-semibold mb-3">Find Us</p>
            <h2 className="text-3xl font-bold font-serif text-[#2d4a1e] mb-6">Tucked into the greenbelt near Jaipur</h2>
            <div className="space-y-4 text-gray-600">
              <div className="flex gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-semibold text-[#2d4a1e]">Address</p>
                  <p>Hari Bhakti Farm, Jaipur–Sikar Highway, Rajasthan 302 028</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-xl">🚗</span>
                <div>
                  <p className="font-semibold text-[#2d4a1e]">From Jaipur City</p>
                  <p>~45 minutes drive via NH-52, Sikar Road. Easy pickup from Jaipur Airport on request.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-xl">🚂</span>
                <div>
                  <p className="font-semibold text-[#2d4a1e]">Nearest Station</p>
                  <p>Jaipur Junction (JU) — 38 km. Cab available.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-xl">✈️</span>
                <div>
                  <p className="font-semibold text-[#2d4a1e]">Nearest Airport</p>
                  <p>Jaipur International Airport (JAI) — 42 km.</p>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/919928738349?text=Hi%2C%20I%20need%20directions%20to%20Hari%20Bhakti%20Farm"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex items-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp for Directions
            </a>
          </div>
          {/* Map placeholder */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-80 bg-gray-200 flex items-center justify-center">
            <a
              href="https://www.google.com/maps/search/Hari+Bhakti+Farm+Jaipur"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 text-gray-500 hover:text-[#2d4a1e] transition-colors"
            >
              <span className="text-5xl">🗺️</span>
              <span className="font-semibold">Open in Google Maps</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2d4a1e] text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Come experience it yourself</h2>
          <p className="text-white/70 mb-8 text-lg">
            No brochure can fully capture what it feels like to wake up to birdsong, sip chai by the pool, and have nowhere to be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919928738349?text=Hi%2C%20I%27d%20like%20to%20plan%20a%20visit%20to%20Hari%20Bhakti%20Farm"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Plan Your Visit
            </a>
            <a href="/stay" className="btn-outline border-white text-white hover:bg-white hover:text-[#2d4a1e]">
              View Rooms
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
