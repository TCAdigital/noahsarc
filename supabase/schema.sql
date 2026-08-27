-- Noah's Arc Foundation CMS schema.
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
