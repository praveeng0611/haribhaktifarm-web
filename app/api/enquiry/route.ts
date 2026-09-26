import { NextResponse } from 'next/server'
import { createEnquiry } from '@/lib/db'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, mobile, email, visit_date, group_size, message } = body

    if (!name || !mobile) {
      return NextResponse.json({ error: 'Name and mobile are required' }, { status: 400 })
    }

    await createEnquiry({ name, mobile, email, visit_date, group_size, message })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Enquiry error:', err)
    return NextResponse.json({ error: 'Failed to submit enquiry' }, { status: 500 })
  }
}
