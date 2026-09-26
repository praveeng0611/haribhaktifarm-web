'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type Enquiry = {
  id: number
  name: string
  mobile: string
  email: string | null
  check_in_date: string | null
  group_size: number | null
  message: string | null
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

export default function AdminDashboardPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/api/admin/enquiries')
      .then((r) => r.json())
      .then((d) => { setEnquiries(d.enquiries || []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const filtered = enquiries.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.mobile.includes(search) ||
      (e.email ?? '').toLowerCase().includes(search.toLowerCase())
  )

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
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"
            >
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
          <h1 className="text-2xl font-bold font-serif text-[#2d4a1e]">Enquiries</h1>
          <p className="text-gray-500 text-sm mt-1">Guest enquiries and booking requests</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-5 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-3xl font-bold text-[#2d4a1e]">{enquiries.length}</p>
            <p className="text-sm text-gray-500 mt-1">Total Enquiries</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-3xl font-bold text-[#c8973a]">
              {enquiries.filter((e) => {
                const d = new Date(e.created_at)
                const now = new Date()
                return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
              }).length}
            </p>
            <p className="text-sm text-gray-500 mt-1">This Month</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-3xl font-bold text-[#2d4a1e]">
              {enquiries.filter((e) => e.check_in_date).length}
            </p>
            <p className="text-sm text-gray-500 mt-1">With Check-in Date</p>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <input
              type="text"
              placeholder="Search by name, phone, or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d4a1e]"
            />
          </div>

          {loading ? (
            <div className="p-10 text-center text-gray-400">Loading enquiries...</div>
          ) : filtered.length === 0 ? (
            <div className="p-10 text-center text-gray-400">
              {enquiries.length === 0
                ? 'No enquiries yet. They will appear here once guests submit the contact form.'
                : 'No results match your search.'}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    {['Name', 'Mobile', 'Email', 'Check-in', 'Group', 'Message', 'Date'].map((h) => (
                      <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {h}
                      </th>
                    ))}
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filtered.map((e) => (
                    <tr key={e.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-800">{e.name}</td>
                      <td className="px-4 py-3 text-gray-600">{e.mobile}</td>
                      <td className="px-4 py-3 text-gray-500">{e.email ?? '—'}</td>
                      <td className="px-4 py-3 text-gray-600">
                        {e.check_in_date ? new Date(e.check_in_date).toLocaleDateString('en-IN') : '—'}
                      </td>
                      <td className="px-4 py-3 text-gray-600 text-center">{e.group_size ?? '—'}</td>
                      <td className="px-4 py-3 text-gray-500 max-w-xs truncate">{e.message ?? '—'}</td>
                      <td className="px-4 py-3 text-gray-400 whitespace-nowrap">
                        {new Date(e.created_at).toLocaleDateString('en-IN')}
                      </td>
                      <td className="px-4 py-3">
                        <a
                          href={`https://wa.me/91${e.mobile}?text=Hi%20${encodeURIComponent(e.name)}%2C%20thank%20you%20for%20your%20enquiry%20at%20Hari%20Bhakti%20Farm!`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-800 font-medium text-xs whitespace-nowrap"
                        >
                          💬 Reply
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
