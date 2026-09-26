import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { sql } from '@/lib/db'

function isAuthenticated() {
  const cookieStore = cookies()
  return cookieStore.get('hbf_admin')?.value === 'authenticated'
}

export async function GET(_req: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const enquiries = await sql`
      SELECT id, name, mobile, email, check_in_date, group_size, message, created_at
      FROM enquiries
      ORDER BY created_at DESC
      LIMIT 200
    `
    return NextResponse.json({ enquiries })
  } catch (err) {
    console.error('Admin enquiries error:', err)
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }
}
