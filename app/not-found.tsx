import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-md">
        <p className="text-7xl mb-6">🌿</p>
        <h1 className="text-4xl font-bold font-serif text-[#2d4a1e] mb-4">Page Not Found</h1>
        <p className="text-gray-500 mb-8">
          Looks like this path leads into the fields. Let us guide you back.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </main>
  )
}
