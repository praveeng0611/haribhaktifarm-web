import { neon } from '@neondatabase/serverless'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set')
}

export const sql = neon(process.env.DATABASE_URL)

// Gallery
export async function getGallery(category?: string) {
  if (category && category !== 'All') {
    return sql`SELECT * FROM gallery WHERE active = true AND category = ${category} ORDER BY sort_order, id DESC`
  }
  return sql`SELECT * FROM gallery WHERE active = true ORDER BY sort_order, id DESC`
}

// Featured gallery for homepage
export async function getFeaturedGallery() {
  return sql`SELECT * FROM gallery WHERE active = true AND featured = true ORDER BY sort_order LIMIT 6`
}

// Slider
export async function getSlider() {
  return sql`SELECT * FROM slider WHERE active = true ORDER BY sort_order`
}

// Rooms
export async function getRooms() {
  return sql`SELECT * FROM rooms WHERE active = true ORDER BY sort_order`
}

export async function getRoomBySlug(slug: string) {
  const rows = await sql`SELECT * FROM rooms WHERE slug = ${slug} AND active = true`
  return rows[0] ?? null
}

// Activities
export async function getActivities() {
  return sql`SELECT * FROM activities WHERE active = true ORDER BY sort_order`
}

// Menu
export async function getMenuByCategory(category: string) {
  return sql`SELECT * FROM menu_items WHERE category = ${category} AND available = true ORDER BY sort_order`
}

export async function getAllMenu() {
  return sql`SELECT * FROM menu_items WHERE available = true ORDER BY category, sort_order`
}

// Testimonials
export async function getTestimonials() {
  return sql`SELECT * FROM testimonials WHERE active = true ORDER BY id DESC LIMIT 6`
}

// Blog
export async function getBlogPosts() {
  return sql`SELECT id, slug, title, excerpt, cover_image, category, published_at FROM blog_posts WHERE published = true ORDER BY published_at DESC`
}

export async function getBlogPostBySlug(slug: string) {
  const rows = await sql`SELECT * FROM blog_posts WHERE slug = ${slug} AND published = true`
  return rows[0] ?? null
}

// Enquiries
export async function createEnquiry(data: {
  name: string; mobile: string; email: string;
  visit_date?: string; group_size?: string; message?: string
}) {
  return sql`
    INSERT INTO enquiries (name, mobile, email, visit_date, group_size, message)
    VALUES (${data.name}, ${data.mobile}, ${data.email}, ${data.visit_date ?? null}, ${data.group_size ?? null}, ${data.message ?? null})
    RETURNING id
  `
}
