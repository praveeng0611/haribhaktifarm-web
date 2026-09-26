import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Farm Stories & Travel Guide | Hari Bhakti Farm Blog',
  description:
    'Explore Rajsamand, Nathdwara, Kumbhalgarh, Haldighati and more — plus farm recipes, wellness guides and stories from Hari Bhakti Farm.',
}

const posts = [
  {
    slug: 'rajsamand-lake-crown-jewel-rajasthan',
    title: 'Rajsamand Lake — The Crown Jewel of Rajasthan',
    excerpt: 'Built by Maharana Raj Singh in 1660, Rajsamand Lake is one of the largest artificial lakes in India and a breathtaking sight minutes from our farm.',
    image: '/images/blog-lake.jpg',
    category: 'Places to Visit',
    date: 'September 20, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'nathdwara-shrinathji-complete-guide',
    title: 'Nathdwara — The Sacred Town of Shrinathji: A Complete Guide',
    excerpt: 'Just 20 km from Hari Bhakti Farm, Nathdwara is home to one of the most revered Vaishnava temples in India. Here is everything you need to know before you visit.',
    image: '/images/blog-temple.jpg',
    category: 'Places to Visit',
    date: 'September 14, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'kumbhalgarh-fort-rajasthan-great-wall',
    title: 'Kumbhalgarh Fort: Rajasthan\'s Hidden Great Wall',
    excerpt: 'With the second-longest wall in the world at 36 km, Kumbhalgarh is a UNESCO World Heritage Site and a spectacular half-day trip from our farmstay.',
    image: '/images/blog-fort.jpg',
    category: 'Places to Visit',
    date: 'September 5, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'haldighati-battle-history-day-trip',
    title: 'Haldighati — Where Maharana Pratap\'s Legend Lives On',
    excerpt: 'The pass of Haldighati, just 24 km from our farm, is one of Rajasthan\'s most historic sites. Walk the same terrain where one of India\'s greatest battles was fought in 1576.',
    image: '/images/blog-sunset.jpg',
    category: 'Places to Visit',
    date: 'August 28, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'udaipur-day-trip-from-rajsamand',
    title: 'Udaipur Day Trip from Rajsamand: The Perfect Itinerary',
    excerpt: 'Udaipur, the City of Lakes, is just 66 km from Hari Bhakti Farm. We\'ve planned the perfect one-day itinerary so you don\'t miss a thing.',
    image: '/images/blog-udaipur.jpg',
    category: 'Travel Tips',
    date: 'August 18, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'ranakpur-jain-temples-marble-marvel',
    title: 'Ranakpur Jain Temples — Marble Marvels of the Aravallis',
    excerpt: 'Carved entirely from white marble with 1,444 intricately carved pillars, the Ranakpur temples are a masterpiece of Jain architecture 60 km from our farm.',
    image: '/images/blog-marble.jpg',
    category: 'Places to Visit',
    date: 'August 10, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'mewar-cuisine-dishes-near-rajsamand',
    title: '10 Mewar Dishes You Must Try Near Rajsamand',
    excerpt: 'Mewar has one of Rajasthan\'s richest culinary traditions. From Dal Baati Churma to Laal Maas, here are the 10 dishes our farm kitchen swears by.',
    image: '/images/blog-food.jpg',
    category: 'Recipes',
    date: 'August 2, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'rajsamand-mela-festival-guide',
    title: 'Rajsamand Mela: The Grand Annual Fair You Should Not Miss',
    excerpt: 'Every year thousands gather at Rajsamand Lake for the grand Rajsamand Mela — a celebration of Rajasthani folk culture, music, craft and livestock that has no equal in the region.',
    image: '/images/blog-festival.jpg',
    category: 'Culture',
    date: 'July 22, 2026',
    readTime: '4 min read',
  },
  {
    slug: 'best-time-to-visit-rajasthan-farmstay',
    title: 'Best Time to Visit Rajsamand: A Month-by-Month Guide',
    excerpt: 'Rajasthan is magical in every season, but each month brings a different mood to the farm. Here\'s our honest guide to planning the perfect visit.',
    image: '/images/pool-twilight.jpg',
    category: 'Travel Tips',
    date: 'July 12, 2026',
    readTime: '4 min read',
  },
  {
    slug: 'birdwatching-rajsamand-farm-guide',
    title: '14 Birds You Can Spot Near Rajsamand — A Nature Guide',
    excerpt: 'Rajsamand\'s wetlands and Aravalli forests host an extraordinary range of birds. Peacocks are just the start. Our nature guide lists every species our guests have spotted.',
    image: '/images/blog-birds.jpg',
    category: 'Nature',
    date: 'July 3, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'yoga-wellness-rajasthan-farmstay',
    title: 'Yoga Retreat at a Rajasthan Farmstay: A Wellness Guide',
    excerpt: 'Why a farmstay in Rajasthan is the ideal setting for a yoga and wellness break — open skies, clean air, farm-fresh food and absolute silence.',
    image: '/images/act-yoga.jpg',
    category: 'Wellness',
    date: 'June 24, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'organic-farming-at-hari-bhakti',
    title: 'How We Grow Our Own Food at Hari Bhakti Farm',
    excerpt: 'From seed to plate — a walk through our kitchen garden, composting system, and the philosophy of eating what the land gives you.',
    image: '/images/blog-farm.jpg',
    category: 'Farm Life',
    date: 'June 10, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'family-weekend-getaway-near-rajsamand',
    title: 'Planning the Perfect Family Weekend Near Rajsamand',
    excerpt: 'A complete weekend itinerary for families visiting Rajsamand — temples, forts, the lake, a farmstay and enough activities to keep every age group happy.',
    image: '/images/act-family.jpg',
    category: 'Travel Tips',
    date: 'May 28, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'rajasthani-dal-baati-churma-recipe',
    title: 'Our Kitchen\'s Dal Baati Churma — Made the Traditional Way',
    excerpt: 'The dish every guest asks about. Sunita Sharma shares the exact recipe from our farm kitchen — wood-fired, slow, and deeply satisfying.',
    image: '/images/tea-tray.jpg',
    category: 'Recipes',
    date: 'May 15, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'pool-villa-design-story',
    title: 'Designing the Farm Villa with a Private Pool',
    excerpt: 'The Farm Villa took three years to design and build. We share the story, the decisions, and the little touches that make it our most-loved space.',
    image: '/images/villa-pool.jpg',
    category: 'Behind the Scenes',
    date: 'April 30, 2026',
    readTime: '6 min read',
  },
]

const categories = ['All', 'Places to Visit', 'Travel Tips', 'Recipes', 'Farm Life', 'Nature', 'Culture', 'Wellness', 'Behind the Scenes']

export default function BlogPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="py-20 bg-[#2d4a1e] text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="uppercase tracking-[4px] text-xs text-amber-300 mb-3 font-semibold">Stories from the Farm</p>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Farm Journal</h1>
          <p className="text-white/70 text-lg">
            Travel guides for Rajsamand, Nathdwara, Kumbhalgarh and beyond — plus farm recipes, wellness tips and behind-the-scenes stories
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="border-b border-gray-200 bg-white sticky top-[72px] z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${
                cat === 'All' ? 'bg-[#2d4a1e] text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Featured post */}
      <section className="pt-16 pb-4 bg-[#f7f3ec]">
        <div className="max-w-7xl mx-auto px-6">
          <Link href={`/blog/${posts[0].slug}`} className="group block mb-12">
            <div className="grid md:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-72 md:h-auto">
                <Image src={posts[0].image} alt={posts[0].title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Featured</span>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#c8973a] mb-3">{posts[0].category}</span>
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#2d4a1e] mb-4 group-hover:text-[#c8973a] transition-colors">{posts[0].title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{posts[0].date}</span><span>·</span><span>{posts[0].readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-8 pb-16 bg-[#f7f3ec]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 text-[#2d4a1e] text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold font-serif text-[#2d4a1e] text-lg mb-3 group-hover:text-[#c8973a] transition-colors">{post.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mt-4 pt-4 border-t border-gray-100">
                      <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[#2d4a1e] text-white text-center">
        <div className="max-w-lg mx-auto px-6">
          <h2 className="text-2xl font-bold font-serif mb-3">Stay in touch</h2>
          <p className="text-white/70 mb-6">Season updates, travel guides, and farm recipes — directly from Hari Bhakti Farm.</p>
          <a href="https://wa.me/919928738349?text=Hi%2C%20I%27d%20like%20to%20stay%20updated%20about%20Hari%20Bhakti%20Farm"
            target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
            💬 Follow on WhatsApp
          </a>
        </div>
      </section>

    </main>
  )
}
