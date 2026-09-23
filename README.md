# Noah's Arc Foundation

Institutional website for [Noah's Arc](https://noahsarc.org), a faith-based
organization working in Kyenjojo District, Mid-Western Uganda, with a small CMS
for the content team.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and Supabase.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional, see "CMS" below
npm run dev
```

The site runs at <http://localhost:3000>. Without Supabase credentials it still
works: every page falls back to the content checked into
[`src/lib/data.ts`](src/lib/data.ts), and `/admin` explains what is missing.

## Project layout

```
src/
  app/
    (site)/        Public pages. Server Components; the site chrome lives in
                   (site)/layout.tsx.
    admin/         The CMS. Login, dashboard and its Server Actions.
  components/      Shared UI. Client Components are the exception, not the rule.
  lib/
    data.ts        SiteContent type + the content the site ships with.
    content.ts     Reads content from Supabase and merges it over the defaults.
    supabase/      Browser, server and session-less Supabase clients.
  proxy.ts         Guards /admin (this is Next 16's renamed middleware).
scripts/
  optimize-images.mjs   One-off asset pipeline, see "Images".
supabase/
  schema.sql       Tables, RLS policies and the editor allow-list.
```

## CMS

1. Create a Supabase project and put its URL and anon key in `.env.local`.
2. Run [`supabase/schema.sql`](supabase/schema.sql) in the SQL editor.
3. Invite yourself under *Authentication > Users*, then allow-list the account:

   ```sql
   insert into public.site_admins (user_id) values ('<your-user-uuid>');
   ```

4. Sign in at `/admin`.

Content is stored as a single JSON row. On save it is merged over the defaults,
which drops unknown keys and rejects values whose type does not match the
schema, so a malformed payload cannot corrupt the site. Fields added in a later
deploy keep their default until someone edits them.

Access is checked in three places: `src/proxy.ts` redirects anonymous visitors,
the dashboard re-verifies the session before rendering, and the Server Action
re-verifies it again before writing (Server Actions are reachable by direct
POST). Supabase RLS is the final gate.

## Contact form

Messages sent through `/contact` are stored in the `contact_messages` table and
read back at `/admin/messages`, where an editor can mark each one as handled.
Anyone may submit a message; only allow-listed editors can read them. The form
carries a hidden honeypot field and validates on the server.

There is no email notification yet: someone has to open the CMS to see new
messages. Adding one means wiring an email provider into
`src/app/(site)/contact/actions.ts` after the insert succeeds.

## Images

Every asset the site ships with lives in `public/images` and is rendered through
`next/image`. `scripts/optimize-images.mjs` is the pipeline that produced them:
it renames files to role-based names, downscales anything wider than 2000px and
re-encodes to progressive JPEG. Re-run it after adding raw photos, adding the
new files to the `JOBS` table first.

Editors can paste an image URL from any host into the CMS. Hosts listed in
`images.remotePatterns` (`next.config.ts`) are optimized; anything else is
served as-is by [`SiteImage`](src/components/SiteImage.tsx) rather than failing.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
