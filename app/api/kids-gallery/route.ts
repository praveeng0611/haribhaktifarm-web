import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { sql } from '@/lib/db'

function isAuthenticated() {
  const cookieStore = cookies()
  return cookieStore.get('hbf_admin')?.value === 'authenticated'
}

// Ensure the table exists (idempotent)
async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS kids_gallery (
      id         SERIAL PRIMARY KEY,
      type       TEXT NOT NULL CHECK (type IN ('image', 'video')),
      url        TEXT NOT NULL,
      caption    TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `
}

// GET — public: return all kids gallery items
export async function GET(_req: NextRequest) {
  try {
    await ensureTable()
    const items = await sql`
      SELECT id, type, url, caption, created_at
      FROM kids_gallery
      ORDER BY created_at DESC
      LIMIT 200
    `
    return NextResponse.json({ items })
  } catch (err) {
    console.error('Kids gallery GET error:', err)
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }
}

// POST — admin only: add a new item
export async function POST(req: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    await ensureTable()
    const body = await req.json()
    const { type, url, caption } = body

    if (!type || !url) {
      return NextResponse.json({ error: 'type and url are required' }, { status: 400 })
    }
    if (type !== 'image' && type !== 'video') {
      return NextResponse.json({ error: 'type must be image or video' }, { status: 400 })
    }

    const rows = await sql`
      INSERT INTO kids_gallery (type, url, caption)
      VALUES (${type}, ${url}, ${caption ?? null})
      RETURNING id, type, url, caption, created_at
    `
    return NextResponse.json({ item: rows[0] }, { status: 201 })
  } catch (err) {
    console.error('Kids gallery POST error:', err)
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }
}

// DELETE — admin only: remove an item
export async function DELETE(req: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (!id) {
      return NextResponse.json({ error: 'id is required' }, { status: 400 })
    }
    await sql`DELETE FROM kids_gallery WHERE id = ${parseInt(id)}`
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Kids gallery DELETE error:', err)
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }
}
