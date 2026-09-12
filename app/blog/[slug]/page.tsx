import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { initialBlogs } from "@/lib/data/seedData";
import { blogFromRow } from "@/lib/blogs";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { constructMetadata } from "@/lib/seo";
import { Calendar, Clock, User, ArrowLeft, Share2, Compass, Tag } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase.from("blogs").select("*").eq("slug", slug).eq("is_published", true).maybeSingle();
  const blog = data ? blogFromRow(data) : initialBlogs.find((b) => b.slug === slug);
  if (!blog) return constructMetadata({ title: "Article Not Found" });

  return constructMetadata({
    title: `${blog.title} | RSAK Society Research`,
    description: blog.excerpt,
  });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase.from("blogs").select("*").eq("slug", slug).eq("is_published", true).maybeSingle();
  const blog = data ? blogFromRow(data) : initialBlogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: blog.title,
    description: blog.excerpt,
    author: {
      "@type": "Person",
      name: blog.author,
      jobTitle: blog.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "Remote Sensing Agriculture Knowledge Help Integral Society",
    },
    datePublished: blog.publishedAt,
  };

  return (
    <article className="py-12 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Articles</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-sky-500/10 px-3 py-1 text-xs font-bold text-sky-500 border border-sky-500/20">
              {blog.category}
            </span>
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-sky-400" />
              <span>{blog.readTime}</span>
            </span>
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-emerald-400" />
              <span>Published {blog.publishedAt}</span>
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl leading-tight">
            {blog.title}
          </h1>

          {/* Author Card */}
          <div className="flex items-center gap-3 pt-4 border-t border-b border-slate-200 dark:border-slate-800 py-4">
            <div className="h-10 w-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-sm">
              {blog.author.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-sm text-slate-900 dark:text-white">{blog.author}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{blog.authorRole}</p>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed space-y-4">
          <p className="text-base font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-900/80 p-4 rounded-2xl border-l-4 border-sky-500">
            {blog.excerpt}
          </p>

          <div className="whitespace-pre-line text-slate-600 dark:text-slate-300">
            {blog.content}
          </div>
        </div>

        {/* Tags Footer */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Tag className="h-4 w-4 text-slate-400" />
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-slate-100 dark:bg-slate-900 px-2.5 py-1 text-xs font-mono text-slate-600 dark:text-slate-400"
              >
                #{tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: blog.title, url: window.location.href });
              }
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200"
          >
            <Share2 className="h-3.5 w-3.5 text-sky-500" />
            <span>Share Article</span>
          </button>
        </div>
      </div>
    </article>
  );
}
