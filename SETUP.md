# Hari Bhakti Farm — Setup Guide

## What was built

A complete Next.js 14 website for Hari Bhakti Farm with:

- **Homepage** — hero, stats, activities grid, gallery preview, rooms CTA, testimonials
- **Stay / Rooms** — 5 room types with images, amenities, pricing, WhatsApp book button
- **Activities** — 8 activities with full details: pool, yoga, nature walks, games, water, farm, events, family
- **Gallery** — masonry grid with category filter + lightbox
- **Food & Menu** — digital menu: breakfast, lunch, dinner, special dishes
- **Contact** — WhatsApp, call, enquiry form, directions
- **Navbar** — transparent on homepage, white on scroll; mobile hamburger menu
- **Footer** — links, contact, built by Gnosiso Labs
- **WhatsApp float button** — fixed, always visible
- **DB schema** — Neon PostgreSQL tables for gallery, slider, rooms, activities, menu, testimonials, enquiries, blog

---

## Step 1 — Install dependencies

```bash
cd haribhaktifarm-web
npm install
```

---

## Step 2 — Set up Neon database

1. Go to https://console.neon.tech
2. Create a new project: **haribhaktifarm**
3. Copy the connection string
4. Create `.env.local`:
   ```
   DATABASE_URL=your_neon_connection_string_here
   ```
5. Run the schema:
   - Open Neon SQL editor
   - Paste and run: `db/schema.sql`

---

## Step 3 — Add property images

Place the following photos in `public/images/`:

| Filename              | Which photo                              |
|-----------------------|------------------------------------------|
| pool-eve.jpg          | Swimming pool evening/twilight shot      |
| pool-aerial.jpg       | Aerial view of pool (birds-eye)          |
| pool-aerial-2.jpg     | Second aerial pool shot                  |
| pool-twilight.jpg     | Pool at dusk with lights                 |
| pool-side.jpg         | Poolside shot                            |
| villa-pool.jpg        | Villa with pool exterior (lit evening)   |
| villa-pool-2.jpg      | Villa exterior second shot               |
| kitchen.jpg           | Kitchen with water view                  |
| room-raj.jpg          | Rajasthani Heritage Suite bedroom        |
| room-deluxe.jpg       | Deluxe room (teak/warm tones)            |
| room-deluxe-2.jpg     | Deluxe room second variant               |
| room-standard.jpg     | Standard room                            |
| bathroom-1.jpg        | Dark marble bathroom                     |
| bathroom-2.jpg        | Bathroom with wood panel                 |
| bathroom-3.jpg        | Toilet bathroom                          |
| wardrobe.jpg          | Dark wardrobe/dressing area              |
| tea-tray.jpg          | Tea coffee station tray                  |

The photos you shared map to these names. Rename and copy them here.

---

## Step 4 — Run locally

```bash
npm run dev
# Open http://localhost:3000
```

---

## Step 5 — Deploy to Vercel

1. Push to GitHub: `git init && git add . && git commit -m "init: Hari Bhakti Farm website"`
2. Go to https://vercel.com → New Project → Import from GitHub
3. Add environment variable: `DATABASE_URL` = your Neon connection string
4. Deploy

---

## Pages built

| Route          | Page                    |
|----------------|-------------------------|
| /              | Homepage                |
| /stay          | Rooms & Villas          |
| /activities    | All Activities          |
| /gallery       | Photo Gallery           |
| /food          | Food & Menu             |
| /contact       | Contact & Enquiry       |
| /about         | About (to build next)   |
| /blog          | Blog (to build next)    |

---

## Next steps (next session)

- [ ] About Us page
- [ ] Blog / Articles page + individual post
- [ ] Admin panel (gallery upload, menu edit, enquiries view)
- [ ] Connect Contact form to DB instead of Formspree
- [ ] Add structured data (schema.org) for SEO
- [ ] Connect to real domain
