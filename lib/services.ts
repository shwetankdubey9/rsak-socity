import type { ServiceItem } from "@/types";

type ServiceRow = {
  id: string; title: string; slug: string; short_desc: string; full_desc: string;
  icon_name: string; features: string[] | null; image_url: string; category: string; is_featured: boolean;
};

export function serviceFromRow(row: ServiceRow): ServiceItem {
  return { id: row.id, title: row.title, slug: row.slug, shortDesc: row.short_desc,
    fullDesc: row.full_desc, iconName: row.icon_name, features: row.features || [],
    imageUrl: row.image_url, category: row.category, isFeatured: row.is_featured };
}

export function serviceToRow(service: Omit<ServiceItem, "id">) {
  return { title: service.title, slug: service.slug, short_desc: service.shortDesc,
    full_desc: service.fullDesc, icon_name: service.iconName, features: service.features,
    image_url: service.imageUrl, category: service.category, is_featured: service.isFeatured || false };
}
