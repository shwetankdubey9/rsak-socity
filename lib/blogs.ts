import type { BlogPost } from "@/types";

type BlogRow = {
  id: string; title: string; slug: string; excerpt: string; content: string;
  author: string; author_role: string | null; category: string; tags: string[] | null;
  read_time: string | null; published_at: string; image_url: string; is_published: boolean;
};

export function blogFromRow(row: BlogRow): BlogPost {
  return {
    id: row.id, title: row.title, slug: row.slug, excerpt: row.excerpt, content: row.content,
    author: row.author, authorRole: row.author_role || "", category: row.category,
    tags: row.tags || [], readTime: row.read_time || "5 min read", publishedAt: row.published_at,
    imageUrl: row.image_url, isPublished: row.is_published,
  };
}

export function blogToRow(blog: Omit<BlogPost, "id">) {
  return {
    title: blog.title, slug: blog.slug, excerpt: blog.excerpt, content: blog.content,
    author: blog.author, author_role: blog.authorRole, category: blog.category, tags: blog.tags,
    read_time: blog.readTime, published_at: blog.publishedAt, image_url: blog.imageUrl,
    is_published: blog.isPublished,
  };
}
