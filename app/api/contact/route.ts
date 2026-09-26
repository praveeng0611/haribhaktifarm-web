import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, mobile, email, date, group_size, message } = body

    if (!name || !mobile) {
      return NextResponse.json({ error: 'Name and mobile are required' }, { status: 400 })
    }

    await sql`
      INSERT INTO enquiries (name, mobile, email, check_in_date, group_size, message)
      VALUES (
        ${name},
        ${mobile},
        ${email || null},
        ${date || null},
        ${group_size || null},
        ${message || null}
      )
    `

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to save enquiry. Please try WhatsApp instead.' }, { status: 500 })
  }
}
