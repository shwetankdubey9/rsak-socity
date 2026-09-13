"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { initialBlogs } from "@/lib/data/seedData";
import type { BlogPost } from "@/types";
import { blogFromRow } from "@/lib/blogs";
import { createClient } from "@/lib/supabase/client";
import { Compass, Search, Calendar, User, Clock, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string>("All");
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);

  useEffect(() => {
    const loadBlogs = async () => {
      const { data } = await createClient().from("blogs").select("*").eq("is_published", true).order("published_at", { ascending: false });
      if (data?.length) setBlogs(data.map(blogFromRow));
    };
    void loadBlogs();
  }, []);

  const tags = ["All", "GIS Mapping Jhansi", "Soil Health Card", "DEM", "Watershed"];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag =
      activeTag === "All" || blog.tags.some((t) => t.toLowerCase().includes(activeTag.toLowerCase()));

    return matchesSearch && matchesTag;
  });

  return (
    <div className="space-y-12 pb-20 pt-10">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-herb/10 px-3.5 py-1 text-xs font-semibold text-herb border border-herb/20">
          <Compass className="h-3.5 w-3.5" />
          <span>Research & Project Insights</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          RSAK Society Publications & <br />
          <span className="majith-gradient-text">Research Articles</span>
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Explore technical papers and field insights on Majith Digital Elevation Models, soil fertility mapping in Jhansi, and watershed hydrogeology.
        </p>

        {/* Search */}
        <div className="max-w-md mx-auto relative pt-2">
          <Search className="absolute left-3 top-5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search articles by keyword or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 pl-10 pr-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-herb shadow-sm"
          />
        </div>

        {/* Tags filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTag(t)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition ${
                activeTag === t
                  ? "bg-radiate text-white shadow-sm"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
              }`}
            >
              #{t}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-radiate/10 px-2.5 py-1 text-[10px] font-bold text-herb dark:text-gleam uppercase tracking-wider">
                    {blog.category}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                    <Clock className="h-3 w-3 text-gleam" />
                    <span>{blog.readTime}</span>
                  </span>
                </div>

                <h2 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-2 hover:text-herb transition">
                  <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h2>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>

              <div className="p-6 pt-0 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{blog.author}</p>
                  <p className="text-[10px] text-slate-400 font-mono">{blog.publishedAt}</p>
                </div>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-herb dark:text-gleam hover:translate-x-1 transition-transform"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
