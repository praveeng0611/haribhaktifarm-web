import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title:       'Hari Bhakti Farm — A Beautiful Escape into Nature',
  description: 'Experience the serenity of Hari Bhakti Farm. Luxury farmstay with swimming pool, yoga, nature walks, farm activities and premium rooms near Rajasthan.',
  keywords:    'Hari Bhakti Farm, farmstay, luxury resort, swimming pool, yoga, Rajasthan, family getaway',
  openGraph: {
    title:       'Hari Bhakti Farm — A Beautiful Escape into Nature',
    description: 'Luxury farmstay experience with swimming pool, yoga, nature walks and premium rooms.',
    type:        'website',
    images:      [{ url: '/images/hero-1.jpg', width: 1200, height: 630 }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* WhatsApp floating button */}
        <a
          href="https://wa.me/919928738349?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Hari%20Bhakti%20Farm"
          target="_blank"
          rel="noopener noreferrer"
          className="wa-float"
          aria-label="Chat on WhatsApp"
        >
          💬
        </a>
      </body>
    </html>
  )
}
