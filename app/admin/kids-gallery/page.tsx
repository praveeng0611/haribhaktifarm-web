'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type MediaItem = {
  id: number
  type: 'image' | 'video'
  url: string
  caption: string | null
  created_at: string
}

const navItems = [
  { label: 'Enquiries',    icon: '📋', href: '/admin/dashboard'    },
  { label: 'Kids Gallery', icon: '🎠', href: '/admin/kids-gallery' },
  { label: 'Gallery',      icon: '🖼️', href: '/admin/gallery'      },
  { label: 'Menu',         icon: '🍽️', href: '/admin/menu'         },
  { label: 'Blog',         icon: '✍️', href: '/admin/blog'         },
  { label: '← Website',   icon: '🌐', href: '/'                   },
]

function getYouTubeId(url: string): string | null {
  const patterns = [
    /youtu\.be\/([A-Za-z0-9_-]{11})/,
    /[?&]v=([A-Za-z0-9_-]{11})/,
    /youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,
    /youtube\.com\/embed\/([A-Za-z0-9_-]{11})/,
  ]
  for (const p of patterns) {
    const m = url.match(p)
    if (m) return m[1]
  }
  if (/^[A-Za-z0-9_-]{11}$/.test(url)) return url
  return null
}

export default function AdminKidsGalleryPage() {
  const [items, setItems] = useState<MediaItem[]>([])
  const [loading, setLoading] = useState(true)
  const [type, setType] = useState<'image' | 'video'>('image')
  const [url, setUrl] = useState('')
  const [caption, setCaption] = useState('')
  const [adding, setAdding] = useState(false)
  const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null)
  const [deleting, setDeleting] = useState<number | null>(null)

  const loadItems = () => {
    setLoading(true)
    fetch('/api/kids-gallery')
      .then((r) => r.json())
      .then((d) => { setItems(d.items || []); setLoading(false) })
      .catch(() => setLoading(false))
  }

  useEffect(() => { loadItems() }, [])

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url.trim()) return
    setAdding(true)
    setMsg(null)
    try {
      const res = await fetch('/api/kids-gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, url: url.trim(), caption: caption.trim() || null }),
      })
      if (res.ok) {
        setMsg({ text: '✅ Added successfully!', ok: true })
        setUrl('')
        setCaption('')
        loadItems()
      } else {
        const d = await res.json()
        setMsg({ text: `❌ Error: ${d.error}`, ok: false })
      }
    } catch {
      setMsg({ text: '❌ Network error', ok: false })
    }
    setAdding(false)
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this item?')) return
    setDeleting(id)
    try {
      const res = await fetch(`/api/kids-gallery?id=${id}`, { method: 'DELETE' })
      if (res.ok) {
        setItems((prev) => prev.filter((i) => i.id !== id))
      } else {
        alert('Failed to delete')
      }
    } catch {
      alert('Network error')
    }
    setDeleting(null)
  }

  return (
    <div className="min-h-screen bg-[#f7f3ec] flex">

      {/* Sidebar */}
      <aside className="w-56 bg-[#2d4a1e] text-white min-h-screen flex flex-col py-8 px-4 fixed top-0 left-0 z-20">
        <div className="text-center mb-10">
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-xl">🌿</span>
          </div>
          <p className="font-bold text-sm">HBF Admin</p>
        </div>
        <nav className="space-y-1 flex-1">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${item.href === '/admin/kids-gallery' ? 'bg-white/20 text-white font-semibold' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}>
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <form action="/api/admin/logout" method="POST">
          <button className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/60 hover:bg-white/10 transition-colors">
            <span>🚪</span> Sign Out
          </button>
        </form>
      </aside>

      {/* Main */}
      <main className="ml-56 flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold font-serif text-[#2d4a1e]">Kids Gallery</h1>
          <p className="text-gray-500 text-sm mt-1">Add photos and YouTube videos to the public kids gallery</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-5 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-3xl font-bold text-[#2d4a1e]">{items.length}</p>
            <p className="text-sm text-gray-500 mt-1">Total Items</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-3xl font-bold text-[#c8973a]">{items.filter((i) => i.type === 'image').length}</p>
            <p className="text-sm text-gray-500 mt-1">Photos</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-3xl font-bold text-[#2d4a1e]">{items.filter((i) => i.type === 'video').length}</p>
            <p className="text-sm text-gray-500 mt-1">Videos</p>
          </div>
        </div>

        {/* Add form */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-bold text-[#2d4a1e] mb-4">Add New Item</h2>
          <form onSubmit={handleAdd} className="space-y-4">
            <div className="flex gap-3">
              {(['image', 'video'] as const).map((t) => (
                <button key={t} type="button" onClick={() => setType(t)}
                  className={`px-5 py-2 rounded-lg font-semibold text-sm border-2 transition-colors ${type === t ? 'bg-[#2d4a1e] text-white border-[#2d4a1e]' : 'bg-white text-gray-600 border-gray-200 hover:border-[#2d4a1e]'}`}>
                  {t === 'image' ? '📸 Photo' : '🎥 YouTube Video'}
                </button>
              ))}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {type === 'image' ? 'Image URL' : 'YouTube URL or Video ID'}
              </label>
              <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} required
                placeholder={type === 'image' ? 'https://example.com/photo.jpg' : 'https://youtu.be/VIDEO_ID  or  VIDEO_ID'}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d4a1e]" />
              {type === 'image' && (
                <p className="text-xs text-gray-400 mt-1">Paste any public image URL — Google Drive direct link, WhatsApp, Instagram CDN, etc.</p>
              )}
              {type === 'video' && (
                <p className="text-xs text-gray-400 mt-1">Supports youtube.com/watch?v=, youtu.be/, youtube.com/shorts/, or just the 11-char video ID</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Caption (optional)</label>
              <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)}
                placeholder="e.g. First swimming lesson — Arjun, age 5"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d4a1e]" />
            </div>

            <div className="flex items-center gap-4">
              <button type="submit" disabled={adding || !url.trim()}
                className="px-6 py-2.5 bg-[#2d4a1e] text-white font-semibold rounded-lg text-sm hover:bg-[#1e3210] transition-colors disabled:opacity-50">
                {adding ? 'Adding...' : '+ Add to Gallery'}
              </button>
              {msg && <p className={`text-sm font-medium ${msg.ok ? 'text-green-700' : 'text-red-600'}`}>{msg.text}</p>}
            </div>
          </form>
        </div>

        {/* Current items */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-[#2d4a1e]">All Items ({items.length})</h2>
            <a href="/gallery/kids" target="_blank" rel="noopener noreferrer"
              className="text-sm text-[#c8973a] font-semibold hover:underline">
              View Public Gallery →
            </a>
          </div>

          {loading ? (
            <div className="p-10 text-center text-gray-400">Loading...</div>
          ) : items.length === 0 ? (
            <div className="p-10 text-center text-gray-400">No items yet. Add your first photo or video above.</div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {items.map((item) => {
                const ytId = item.type === 'video' ? getYouTubeId(item.url) : null
                return (
                  <div key={item.id} className="rounded-lg overflow-hidden border border-gray-100 bg-gray-50">
                    <div style={{ position: 'relative', aspectRatio: '16/9', background: '#111', overflow: 'hidden' }}>
                      {item.type === 'image' ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={item.url} alt={item.caption ?? ''} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : ytId ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                      ) : (
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.75rem' }}>
                          🎥 {item.url.slice(0, 30)}…
                        </div>
                      )}
                      <span style={{ position: 'absolute', top: '0.5rem', left: '0.5rem', background: item.type === 'image' ? '#2d4a1e' : '#ff0000', color: '#fff', fontSize: '0.65rem', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                        {item.type === 'image' ? 'PHOTO' : 'VIDEO'}
                      </span>
                    </div>
                    <div className="p-3 flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        {item.caption ? (
                          <p className="text-xs text-gray-600 truncate">{item.caption}</p>
                        ) : (
                          <p className="text-xs text-gray-300 italic">No caption</p>
                        )}
                        <p className="text-xs text-gray-400 mt-0.5">{new Date(item.created_at).toLocaleDateString('en-IN')}</p>
                      </div>
                      <button onClick={() => handleDelete(item.id)} disabled={deleting === item.id}
                        className="text-red-500 hover:text-red-700 text-xs font-semibold px-2 py-1 rounded hover:bg-red-50 transition-colors disabled:opacity-40 shrink-0">
                        {deleting === item.id ? '...' : '🗑 Delete'}
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
