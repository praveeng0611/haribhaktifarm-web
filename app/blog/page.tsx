import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { posts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Farm Stories & Travel Guide | Hari Bhakti Farm Blog',
  description:
    'Explore Rajsamand, Nathdwara, Kumbhalgarh, Haldighati and more — plus farm recipes, wellness guides and stories from Hari Bhakti Farm.',
}



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
