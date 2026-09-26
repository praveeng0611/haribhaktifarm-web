-- Hari Bhakti Farm — Neon PostgreSQL schema
-- Run this on your Neon project via the SQL editor

-- Gallery images (managed from admin)
CREATE TABLE IF NOT EXISTS gallery (
  id         SERIAL PRIMARY KEY,
  src        TEXT NOT NULL,
  alt        TEXT,
  category   TEXT DEFAULT 'General',  -- Pool | Rooms | Nature | Food | Events | General
  caption    TEXT,
  featured   BOOLEAN DEFAULT false,
  sort_order INT DEFAULT 0,
  active     BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Hero slider images
CREATE TABLE IF NOT EXISTS slider (
  id         SERIAL PRIMARY KEY,
  image_src  TEXT NOT NULL,
  title      TEXT,
  subtitle   TEXT,
  btn_text   TEXT,
  btn_url    TEXT,
  sort_order INT DEFAULT 0,
  active     BOOLEAN DEFAULT true
);

-- Activities
CREATE TABLE IF NOT EXISTS activities (
  id          SERIAL PRIMARY KEY,
  slug        TEXT UNIQUE NOT NULL,
  name        TEXT NOT NULL,
  icon        TEXT,
  image_src   TEXT,
  short_desc  TEXT,
  full_desc   TEXT,
  details     TEXT[],        -- array of bullet points
  timings     TEXT,
  pricing     TEXT,
  sort_order  INT DEFAULT 0,
  active      BOOLEAN DEFAULT true
);

-- Rooms
CREATE TABLE IF NOT EXISTS rooms (
  id          SERIAL PRIMARY KEY,
  slug        TEXT UNIQUE NOT NULL,
  name        TEXT NOT NULL,
  type        TEXT,          -- Standard | Deluxe | Suite | Villa
  image_src   TEXT,
  images      TEXT[],
  description TEXT,
  size_sqft   TEXT,
  max_guests  TEXT,
  amenities   TEXT[],
  price_night TEXT,
  tag         TEXT,          -- "Most Popular" | "Pool View" etc
  active      BOOLEAN DEFAULT true,
  sort_order  INT DEFAULT 0
);

-- Food menu items
CREATE TABLE IF NOT EXISTS menu_items (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  description TEXT,
  category    TEXT NOT NULL,  -- Breakfast | Lunch | Dinner | Special | Snacks
  is_veg      BOOLEAN DEFAULT true,
  image_src   TEXT,
  price       TEXT,
  available   BOOLEAN DEFAULT true,
  is_special  BOOLEAN DEFAULT false,
  sort_order  INT DEFAULT 0
);

-- Testimonials
CREATE TABLE IF NOT EXISTS testimonials (
  id         SERIAL PRIMARY KEY,
  name       TEXT NOT NULL,
  city       TEXT,
  avatar_src TEXT,
  review     TEXT NOT NULL,
  rating     INT DEFAULT 5,
  active     BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enquiries (from contact form)
CREATE TABLE IF NOT EXISTS enquiries (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  mobile      TEXT,
  email       TEXT,
  visit_date  DATE,
  group_size  TEXT,
  message     TEXT,
  status      TEXT DEFAULT 'new',  -- new | read | replied | closed
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- Blog / Articles
CREATE TABLE IF NOT EXISTS blog_posts (
  id           SERIAL PRIMARY KEY,
  slug         TEXT UNIQUE NOT NULL,
  title        TEXT NOT NULL,
  excerpt      TEXT,
  content      TEXT,
  cover_image  TEXT,
  category     TEXT,          -- Nature | Wellness | Farming | Travel | Events
  tags         TEXT[],
  published    BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at   TIMESTAMPTZ DEFAULT now()
);

-- Admin users
CREATE TABLE IF NOT EXISTS admin_users (
  id           SERIAL PRIMARY KEY,
  username     TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role         TEXT DEFAULT 'admin',
  created_at   TIMESTAMPTZ DEFAULT now()
);

-- Seed: initial hero slider images
INSERT INTO slider (image_src, title, subtitle, btn_text, btn_url, sort_order) VALUES
  ('/images/pool-eve.jpg',    'Hari Bhakti Farm',           'A beautiful escape into nature',              'Explore Rooms',  '/stay',       1),
  ('/images/villa-pool.jpg',  'Swim. Breathe. Reconnect.',  'A stunning pool surrounded by lush greenery', 'Our Activities', '/activities', 2),
  ('/images/room-raj.jpg',    'Premium Farm Rooms',         'Wake up to nature every single morning',      'View Rooms',     '/stay',       3);

-- Seed: initial gallery
INSERT INTO gallery (src, alt, category, featured) VALUES
  ('/images/pool-aerial.jpg',  'Aerial view of pool',         'Pool',   true),
  ('/images/pool-eve.jpg',     'Pool at twilight',            'Pool',   true),
  ('/images/villa-pool.jpg',   'Villa with pool',             'Pool',   false),
  ('/images/room-raj.jpg',     'Rajasthani Heritage Suite',   'Rooms',  true),
  ('/images/room-deluxe.jpg',  'Deluxe Room',                 'Rooms',  false),
  ('/images/bathroom-1.jpg',   'Marble bathroom',             'Rooms',  false),
  ('/images/kitchen.jpg',      'Farm kitchen with water view','Nature', false);

-- Seed: initial testimonials
INSERT INTO testimonials (name, city, review, rating) VALUES
  ('Rajesh Sharma', 'Jaipur', 'Absolutely magical experience. The pool at sunset, the farm-fresh food, and the warm hospitality made it a trip our family will never forget.', 5),
  ('Priya Mehta',   'Udaipur','The rooms are beautiful — clean, spacious and so tastefully decorated. Best farmstay we have visited in Rajasthan.', 5),
  ('Sunil & Family','Delhi',  'Our kids loved the swimming and games. We loved the yoga and nature walks. Perfect for families. We are already planning to come back!', 5);
