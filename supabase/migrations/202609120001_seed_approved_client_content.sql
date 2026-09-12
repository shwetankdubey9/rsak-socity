-- Approved RAKHI-Society client content.
-- Run after 202608260001_create_rsak_cms.sql in the Supabase SQL Editor.

insert into public.site_settings (key, value)
values
  ('organization', jsonb_build_object(
    'name', 'Remote Sensing Agriculture Knowledge Help Integral Society (RAKHI-Society)',
    'description', 'Remote Sensing Agriculture Knowledge Help Integral Society (RAKHI-Society), established in 2017 under Program Director Rakhi Shukla and Remote Sensing Lead Anil Kumar Shukla (RS&GIS-(IIRS-ISRO)). Delivering high-precision 3D GIS mapping, soil, other type social work and watershed development across Bundelkhand, Uttar Pradesh, and India.',
    'office_address', 'K.K. Puri Colony, Awas Vikas, Shivpuri Road, Jhansi (U.P.) 284003',
    'registered_office', '',
    'phone', '91-9415504335',
    'email', 'societyrakhi@gmail.com'
  )),
  ('subject_interests', jsonb_build_array(
    'GIS Mapping in India', 'RS & Hyperspectral Technology', 'Watershed Management',
    'DPR General Partnership', 'Digital Satellite KMLZ File', 'Other Social Work',
    'Other Technical Work', 'Satellite Classification'
  ))
on conflict (key) do update set value = excluded.value, updated_at = now();

insert into public.committee_members (sn, name, qualification, designation, specialization, is_active)
values
  (1, 'Rakhi Devi', '', 'Director', '', true),
  (2, 'Dr. Bhuvan Kumar Dixit', '', 'Secretary', '', true),
  (3, 'Anil Kumar Shukla', '', 'Program Director & GIS Lead', '', true)
on conflict (sn) do update set
  name = excluded.name,
  qualification = excluded.qualification,
  designation = excluded.designation,
  specialization = excluded.specialization,
  is_active = excluded.is_active,
  updated_at = now();

insert into public.services (
  title, slug, short_desc, full_desc, icon_name, features, image_url, category, is_featured
)
values (
  'Soil Health Testing & Nutrient Mapping',
  'soil-health-testing-nutrient-mapping',
  'Soil health testing and nutrient mapping support for understanding soil conditions and improving spatial planning and agricultural decision-making.',
  'Soil health testing and nutrient mapping support for understanding soil conditions and improving spatial planning and agricultural decision-making.',
  'FlaskConical',
  array[]::text[],
  'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop',
  'Agricultural Sciences',
  true
)
on conflict (slug) do update set
  title = excluded.title,
  short_desc = excluded.short_desc,
  full_desc = excluded.full_desc,
  icon_name = excluded.icon_name,
  features = excluded.features,
  image_url = excluded.image_url,
  category = excluded.category,
  is_featured = excluded.is_featured,
  updated_at = now();
