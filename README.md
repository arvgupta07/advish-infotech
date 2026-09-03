# Advish Infotech website

Production-ready B2B marketing site for Advish Infotech. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Supabase for contact form storage. Designed for Vercel.

## Setup

1. Install Node.js 18.18+ (20 LTS recommended).
2. Clone the repository and install dependencies:

```bash
npm install
```

3. Copy environment variables:

```bash
cp .env.local.example .env.local
```

4. Fill in your Supabase project URL and anon key in `.env.local`.
5. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous (public) key |

These are also the variables to set in the Vercel project settings.

## Supabase table

Run this SQL in the Supabase SQL editor:

```sql
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  company_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_interest TEXT NOT NULL,
  company_size TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

Keep SELECT locked to authenticated/service roles so submissions are not publicly readable.

The contact form posts to `/api/contact`, which inserts a row into `contact_submissions`. There is no payment flow.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — ESLint

## Vercel deployment

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the project in [Vercel](https://vercel.com).
3. Framework preset: Next.js. Build command: `next build`. Output: default.
4. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` under Project Settings → Environment Variables (Production, Preview, and Development as needed).
5. Deploy. After the first deploy, create the table above if you have not already.
6. Submit a test enquiry on `/contact` and confirm the row appears in Supabase.

## Project map

- `app/` — App Router pages, layout, and `/api/contact`
- `components/layout` — Navbar, Footer
- `components/ui` — shared UI (Button, Card, ContactForm, AnimatedCounter)
- `components/sections` — homepage sections
- `lib/supabase.ts` — Supabase client and table SQL comment
- `lib/types.ts` — TypeScript interfaces
