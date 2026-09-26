import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Food & Menu — Hari Bhakti Farm',
  description: 'Farm-fresh, home-cooked meals at Hari Bhakti Farm. Pure vegetarian Rajasthani and Indian cuisine made with organic produce.',
}

const menu = {
  breakfast: [
    { name: 'Aloo Paratha',       desc: 'Homemade with white butter and curd',          veg: true  },
    { name: 'Poha',               desc: 'Light, flavorful and freshly prepared',         veg: true  },
    { name: 'Upma',               desc: 'South Indian style semolina',                   veg: true  },
    { name: 'Fresh Fruits Plate', desc: 'Seasonal farm and market fresh fruits',         veg: true  },
    { name: 'Wagh Bakri Chai',    desc: 'Premium tea with milk — the farm way',          veg: true  },
    { name: 'Filter Coffee',      desc: 'South Indian filter coffee, freshly brewed',    veg: true  },
    { name: 'Bread & Jam',        desc: 'Fresh bread with homemade jams',                veg: true  },
  ],
  lunch: [
    { name: 'Dal Makhani',        desc: 'Slow-cooked black lentils in tomato gravy',     veg: true  },
    { name: 'Rajasthani Dal',     desc: 'Traditional panchmel dal',                      veg: true  },
    { name: 'Mixed Vegetable Sabzi', desc: 'Seasonal vegetables, light spiced',          veg: true  },
    { name: 'Paneer Bhurji',      desc: 'Soft paneer with onion, tomato and spices',     veg: true  },
    { name: 'Phulka / Roti',      desc: 'Soft whole wheat rotis, freshly made',          veg: true  },
    { name: 'Steamed Rice',       desc: 'Long grain basmati rice',                       veg: true  },
    { name: 'Raita',              desc: 'Fresh curd with cucumber and mint',              veg: true  },
    { name: 'Salad',              desc: 'Garden fresh salad with lemon dressing',         veg: true  },
    { name: 'Kheer',              desc: 'Rice pudding with cardamom and saffron',         veg: true  },
  ],
  dinner: [
    { name: 'Dal Tadka',          desc: 'Yellow dal tempered with ghee and cumin',       veg: true  },
    { name: 'Shahi Paneer',       desc: 'Rich Mughlai style paneer in cream gravy',      veg: true  },
    { name: 'Mix Veg Curry',      desc: 'Farm vegetables in Rajasthani masala',          veg: true  },
    { name: 'Phulka / Paratha',   desc: 'Fresh from the tawa',                           veg: true  },
    { name: 'Jeera Rice',         desc: 'Basmati rice tempered with cumin',              veg: true  },
    { name: 'Papad & Pickle',     desc: 'Roasted papad with seasonal achar',             veg: true  },
    { name: 'Gulab Jamun',        desc: 'Soft, spongy and soaked in sugar syrup',        veg: true  },
    { name: 'Buttermilk / Lassi', desc: 'Freshly prepared — sweet or salted',            veg: true  },
  ],
  special: [
    { name: 'Dal Baati Churma',   desc: 'The classic Rajasthani feast — a must try',     veg: true  },
    { name: 'BBQ Paneer Tikka',   desc: 'Marinated and grilled on charcoal',             veg: true  },
    { name: 'Chaat Platter',      desc: 'Pani puri, bhel, papdi chaat for evening',      veg: true  },
    { name: 'Farm Thali',         desc: 'A complete Rajasthani meal — 15+ dishes',       veg: true  },
    { name: 'Bonfire Snacks',     desc: 'Evening bonfire bhajiyas, corn, chai',          veg: true  },
  ],
}

const mealTiming = [
  { meal: 'Breakfast', time: '7:00 AM – 9:30 AM' },
  { meal: 'Lunch',     time: '12:30 PM – 2:30 PM' },
  { meal: 'Evening Snacks', time: '4:30 PM – 6:00 PM' },
  { meal: 'Dinner',    time: '7:30 PM – 9:30 PM'  },
]

function MenuCard({ item }: { item: { name: string; desc: string; veg: boolean } }) {
  return (
    <div style={{ background: '#fff', borderRadius: '10px', padding: '1rem 1.2rem', borderLeft: `3px solid ${item.veg ? '#2d4a1e' : '#c8973a'}` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
        <span style={{ fontSize: '0.6rem', width: '12px', height: '12px', border: `2px solid ${item.veg ? '#2d4a1e' : '#c8973a'}`, borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ width: '6px', height: '6px', background: item.veg ? '#2d4a1e' : '#c8973a', borderRadius: '50%', display: 'block' }}/>
        </span>
        <h4 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1e3210' }}>{item.name}</h4>
      </div>
      <p style={{ color: '#6b7c5a', fontSize: '0.82rem', lineHeight: 1.5 }}>{item.desc}</p>
    </div>
  )
}

export default function FoodPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '320px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <Image src="/images/kitchen.jpg" alt="Farm Kitchen" fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,36,10,0.7)' }}/>
        <div style={{ position: 'relative', zIndex: 2, paddingTop: '4rem' }}>
          <p style={{ color: '#e8b84b', letterSpacing: '0.2em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Farm Fresh</p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#fff', fontWeight: 700 }}>Food & Menu</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '0.7rem' }}>Pure, home-cooked, organic. Food that nourishes the soul.</p>
        </div>
      </section>

      {/* Meal timings */}
      <section style={{ background: '#2d4a1e', padding: '2rem' }}>
        <div className="container-lg" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', textAlign: 'center' }}>
          {mealTiming.map(m => (
            <div key={m.meal}>
              <p style={{ color: '#e8b84b', fontWeight: 700, fontSize: '0.95rem' }}>{m.meal}</p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', marginTop: '0.2rem' }}>{m.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu sections */}
      <section className="section-pad" style={{ background: '#f7f3ec' }}>
        <div className="container-lg">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#c8973a', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Our Menu</p>
            <h2 className="section-title">Farm-to-Table Dining</h2>
            <span className="earth-line" style={{ margin: '1rem auto 0' }}/>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Lovingly prepared in our farm kitchen using fresh, local and organic ingredients. Pure vegetarian — wholesome, nourishing and made with love.
            </p>
          </div>

          {[
            { title: '☀️ Breakfast', items: menu.breakfast },
            { title: '🍛 Lunch',     items: menu.lunch     },
            { title: '🌙 Dinner',    items: menu.dinner    },
            { title: '⭐ Special & Custom', items: menu.special },
          ].map(section => (
            <div key={section.title} style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.35rem', color: '#1e3210', fontWeight: 700, marginBottom: '1.2rem', paddingBottom: '0.5rem', borderBottom: '2px solid #ede6d9' }}>
                {section.title}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.8rem' }}>
                {section.items.map(item => <MenuCard key={item.name} item={item} />)}
              </div>
            </div>
          ))}

          {/* Note */}
          <div style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem 2rem', border: '1px solid #ede6d9', marginTop: '1rem' }}>
            <p style={{ fontWeight: 700, color: '#1e3210', marginBottom: '0.5rem' }}>📝 Good to Know</p>
            <p style={{ color: '#6b7c5a', fontSize: '0.9rem', lineHeight: 1.7 }}>
              All meals are included in stay packages. Day visitors can book meals separately. For special dietary requirements, allergies or custom menus — please WhatsApp us in advance and we will be happy to accommodate.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
