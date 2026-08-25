import type { GalleryItem } from "@/types";

type GalleryRow = { id: string; title: string; description: string; category: GalleryItem["category"]; image_url: string; location: string | null; date: string | null; is_featured: boolean };
export const galleryFromRow = (row: GalleryRow): GalleryItem => ({ id: row.id, title: row.title, description: row.description, category: row.category, imageUrl: row.image_url, location: row.location || undefined, date: row.date || undefined, isFeatured: row.is_featured });
export const galleryToRow = (item: Omit<GalleryItem, "id">) => ({ title: item.title, description: item.description, category: item.category, image_url: item.imageUrl, location: item.location || null, date: item.date || null, is_featured: item.isFeatured || false });
