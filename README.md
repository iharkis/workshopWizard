# Workshop Selector

An internal tool for finding and sharing facilitation techniques across public sector UCD and BA practice.

A curated set of workshop methods across 10 categories, with community contribution features — colleagues can add templates, share experience, and suggest new workshops that appear directly in the directory.

---

## Quick start

```bash
npm install
cp .env.local.example .env.local
# fill in .env.local (see below)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be prompted for the password you set.

---

## Setup

### 1. Supabase (database for contributions and suggestions)

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Once the project is ready, go to **SQL Editor** in the left sidebar and run the following to create both tables:

```sql
-- Contributions: templates and experience shared against specific workshops
CREATE TABLE contributions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  workshop_slug TEXT NOT NULL,
  contributor_name TEXT NOT NULL,
  contributor_email TEXT NOT NULL,
  contributor_team TEXT,
  type TEXT NOT NULL CHECK (type IN ('template', 'contact')),
  template_url TEXT,
  template_description TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX contributions_workshop_slug_idx ON contributions(workshop_slug);

-- Workshop suggestions: community-submitted workshops that appear directly in the directory
CREATE TABLE workshop_suggestions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  suggester_name TEXT NOT NULL,
  suggester_email TEXT NOT NULL,
  workshop_name TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT,
  duration TEXT,
  group_size TEXT,
  when_to_use TEXT,
  steps TEXT,
  materials TEXT,
  tips TEXT,
  tags TEXT,
  hidden BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

4. You need two values from two different pages in the left sidebar:
   - **Data API** → copy the Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - **API Keys** → open the **Legacy API keys** tab → copy the **service_role** secret key → `SUPABASE_SERVICE_ROLE_KEY`

### 2. Environment variables

Copy `.env.local.example` to `.env.local` and fill in:

```
SITE_PASSWORD=choose-a-password
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

---

## Deploy to Vercel

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo
3. In the project settings under **Environment Variables**, add all three variables above
4. Deploy — Vercel auto-detects Next.js and handles the rest

---

## Adding or editing curated workshops

The core set of workshops lives in `data/workshops.ts`. Each entry is a TypeScript object:

```typescript
{
  slug: 'my-workshop',
  name: 'My Workshop',
  category: 'ideation',   // see Category type for all options
  duration: '30–45 mins',
  groupSize: '4–12',
  description: 'One paragraph.',
  whenToUse: ['Situation 1.', 'Situation 2.'],
  steps: [
    { title: 'Step name', duration: '5 mins', description: 'What to do.' },
  ],
  materials: ['Sticky notes', 'Markers'],
  tips: ['Practical tip.'],
  tags: ['tag1', 'tag2'],
}
```

**Available categories:** `icebreaker` · `problem-framing` · `ideation` · `prioritisation` · `retrospective` · `discovery` · `service-design` · `requirements` · `planning` · `public-sector`

Community-suggested workshops (submitted via the "Suggest a workshop" form) appear in the grid automatically alongside curated ones, visually marked with the contributor's name.

---

## Managing content

All content is managed through the Supabase dashboard — no separate admin UI is built in.

- **Contributions** (templates and experience): **Table Editor** → `contributions`
- **Community workshops**: **Table Editor** → `workshop_suggestions`

To remove a record, delete the row. To hide a community workshop, delete its row from `workshop_suggestions`.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| Database | Supabase (Postgres) |
| Auth | Password via httpOnly cookie + Next.js Middleware |
| Hosting | Vercel |
