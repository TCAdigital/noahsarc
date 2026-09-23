-- Noah's Arc Organization CMS schema.
-- Run this once in the Supabase SQL editor (or via `supabase db push`).

-- ---------------------------------------------------------------------------
-- Who is allowed to edit the site.
--
-- Supabase projects accept sign-ups by default, so write access is granted to
-- an explicit allow-list rather than to every authenticated user. After
-- inviting someone from Authentication > Users, add their id here:
--
--   insert into public.site_admins (user_id) values ('<uuid>');
-- ---------------------------------------------------------------------------
create table if not exists public.site_admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.site_admins enable row level security;

drop policy if exists "site_admins_self_read" on public.site_admins;
create policy "site_admins_self_read" on public.site_admins
  for select to authenticated using (user_id = auth.uid());

create or replace function public.is_site_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.site_admins where user_id = auth.uid()
  );
$$;

-- ---------------------------------------------------------------------------
-- The site content itself: one row, holding the whole `SiteContent` object
-- from `src/lib/data.ts`.
-- ---------------------------------------------------------------------------
create table if not exists public.site_content (
  id text primary key,
  content jsonb not null,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users (id) on delete set null
);

alter table public.site_content enable row level security;

-- The website is public, so anyone may read the published content.
drop policy if exists "site_content_public_read" on public.site_content;
create policy "site_content_public_read" on public.site_content
  for select using (true);

drop policy if exists "site_content_admin_insert" on public.site_content;
create policy "site_content_admin_insert" on public.site_content
  for insert to authenticated with check (public.is_site_admin());

drop policy if exists "site_content_admin_update" on public.site_content;
create policy "site_content_admin_update" on public.site_content
  for update to authenticated
  using (public.is_site_admin())
  with check (public.is_site_admin());

-- ---------------------------------------------------------------------------
-- Messages sent through the Contact Us form.
--
-- Anyone may submit one (that is the point of a public contact form), but only
-- the editors listed in site_admins can read them back.
-- ---------------------------------------------------------------------------
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  message text not null,
  handled boolean not null default false
);

alter table public.contact_messages enable row level security;

drop policy if exists "contact_messages_public_insert" on public.contact_messages;
create policy "contact_messages_public_insert" on public.contact_messages
  for insert to anon, authenticated with check (true);

drop policy if exists "contact_messages_admin_read" on public.contact_messages;
create policy "contact_messages_admin_read" on public.contact_messages
  for select to authenticated using (public.is_site_admin());

drop policy if exists "contact_messages_admin_update" on public.contact_messages;
create policy "contact_messages_admin_update" on public.contact_messages
  for update to authenticated
  using (public.is_site_admin())
  with check (public.is_site_admin());

create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);
