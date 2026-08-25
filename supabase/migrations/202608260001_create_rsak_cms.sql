-- RSAK Society CMS schema.
-- Safe to run in Supabase SQL Editor on a new or partially configured project.

create extension if not exists pgcrypto;

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  sn integer not null,
  name text not null,
  funder text not null,
  amount text,
  period text not null,
  beneficiary text not null,
  category text not null default 'GIS Mapping',
  description text,
  image_url text,
  is_featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  short_desc text not null,
  full_desc text not null,
  icon_name text not null default 'Map',
  features text[] not null default '{}',
  image_url text not null,
  category text not null,
  is_featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blogs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null,
  author text not null,
  author_role text,
  category text not null,
  tags text[] not null default '{}',
  read_time text not null default '5 min read',
  published_at date not null default current_date,
  image_url text not null,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.gallery (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  category text not null,
  image_url text not null,
  cloudinary_public_id text,
  location text,
  date text,
  is_featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null,
  status text not null default 'unread' check (status in ('unread', 'read', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.committee_members (
  id uuid primary key default gen_random_uuid(),
  sn integer not null unique,
  name text not null,
  qualification text not null,
  designation text not null,
  specialization text not null,
  photo_url text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.gis_maps (
  id text primary key,
  title text not null,
  description text not null,
  image_url text,
  alt text not null,
  display_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.media_assets (
  id uuid primary key default gen_random_uuid(),
  cloudinary_public_id text unique,
  secure_url text not null unique,
  resource_type text not null default 'image',
  format text,
  bytes bigint,
  width integer,
  height integer,
  original_filename text,
  uploaded_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id) on delete set null
);

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'editor' check (role in ('admin', 'editor')),
  display_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.projects add column if not exists updated_at timestamptz not null default now();
alter table public.services add column if not exists updated_at timestamptz not null default now();
alter table public.blogs add column if not exists updated_at timestamptz not null default now();
alter table public.gallery add column if not exists cloudinary_public_id text;
alter table public.gallery add column if not exists updated_at timestamptz not null default now();
alter table public.contact_messages add column if not exists updated_at timestamptz not null default now();

create index if not exists projects_sn_idx on public.projects (sn);
create index if not exists blogs_published_at_idx on public.blogs (is_published, published_at desc);
create index if not exists gallery_category_idx on public.gallery (category);
create index if not exists contact_messages_status_idx on public.contact_messages (status, created_at desc);
create index if not exists gis_maps_display_order_idx on public.gis_maps (display_order);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

do $$
declare
  target_table text;
begin
  foreach target_table in array array[
    'projects', 'services', 'blogs', 'gallery', 'contact_messages',
    'committee_members', 'gis_maps', 'media_assets', 'site_settings', 'profiles'
  ] loop
    execute format('drop trigger if exists set_%I_updated_at on public.%I', target_table, target_table);
    if target_table <> 'media_assets' then
      execute format(
        'create trigger set_%I_updated_at before update on public.%I for each row execute function public.set_updated_at()',
        target_table, target_table
      );
    end if;
  end loop;
end;
$$;

alter table public.projects enable row level security;
alter table public.services enable row level security;
alter table public.blogs enable row level security;
alter table public.gallery enable row level security;
alter table public.contact_messages enable row level security;
alter table public.committee_members enable row level security;
alter table public.gis_maps enable row level security;
alter table public.media_assets enable row level security;
alter table public.site_settings enable row level security;
alter table public.profiles enable row level security;

drop policy if exists "Public read projects" on public.projects;
drop policy if exists "Public read services" on public.services;
drop policy if exists "Public read blogs" on public.blogs;
drop policy if exists "Public read gallery" on public.gallery;
drop policy if exists "Public write contact_messages" on public.contact_messages;
drop policy if exists "Admin read contact_messages" on public.contact_messages;
drop policy if exists "Admin write projects" on public.projects;
drop policy if exists "Admin write services" on public.services;
drop policy if exists "Admin write blogs" on public.blogs;
drop policy if exists "Admin write gallery" on public.gallery;

create policy "Public read projects" on public.projects for select using (true);
create policy "Public read services" on public.services for select using (true);
create policy "Public read published blogs" on public.blogs for select using (is_published or public.is_admin());
create policy "Public read gallery" on public.gallery for select using (true);
create policy "Public read committee members" on public.committee_members for select using (is_active or public.is_admin());
create policy "Public read active GIS maps" on public.gis_maps for select using (is_active or public.is_admin());
create policy "Public submit contact messages" on public.contact_messages for insert with check (true);
create policy "Admin read contact messages" on public.contact_messages for select to authenticated using (public.is_admin());
create policy "Users read own profile" on public.profiles for select to authenticated using (id = auth.uid());

do $$
declare
  target_table text;
begin
  foreach target_table in array array[
    'projects', 'services', 'blogs', 'gallery', 'contact_messages',
    'committee_members', 'gis_maps', 'media_assets', 'site_settings'
  ] loop
    execute format(
      'drop policy if exists "Admins manage %s" on public.%I', target_table, target_table
    );
    execute format(
      'create policy "Admins manage %s" on public.%I for all to authenticated using (public.is_admin()) with check (public.is_admin())',
      target_table, target_table
    );
  end loop;
end;
$$;

-- After creating the first Supabase Auth user, run this once in SQL Editor:
-- insert into public.profiles (id, role, display_name)
-- values ('<auth-user-uuid>', 'admin', 'RSAK Administrator');
