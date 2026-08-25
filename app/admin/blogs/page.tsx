"use client";

import React, { useEffect, useState } from "react";
import { initialBlogs } from "@/lib/data/seedData";
import { blogFromRow, blogToRow } from "@/lib/blogs";
import { createClient } from "@/lib/supabase/client";
import { BlogPost } from "@/types";
import { Plus, Trash2, Edit, X, FileText, CheckCircle2 } from "lucide-react";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    const loadBlogs = async () => {
      const { data } = await createClient().from("blogs").select("*").order("published_at", { ascending: false });
      if (data?.length) setBlogs(data.map(blogFromRow));
    };
    void loadBlogs();
  }, []);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "Anil Kumar Shukla",
    authorRole: "Program Director & Remote Sensing Lead",
    category: "GIS & Remote Sensing",
  });

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const draft: Omit<BlogPost, "id"> = {
      tags: ["Jhansi", "GIS", "RSAK"], readTime: "5 min read",
      publishedAt: editingBlog?.publishedAt || new Date().toISOString().split("T")[0],
      imageUrl: editingBlog?.imageUrl || "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop",
      isPublished: true, ...formData,
    };
    const supabase = createClient();
    if (editingBlog) {
      const { data, error } = await supabase.from("blogs").update(blogToRow(draft)).eq("id", editingBlog.id).select().single();
      if (error) return alert("Unable to save in Supabase. Sign in with a Supabase admin account first.");
      setBlogs(blogs.map((b) => (b.id === editingBlog.id ? blogFromRow(data) : b)));
    } else {
      const { data, error } = await supabase.from("blogs").insert(blogToRow(draft)).select().single();
      if (error) return alert("Unable to publish to Supabase. Sign in with a Supabase admin account first.");
      setBlogs([blogFromRow(data), ...blogs]);
    }
    setIsModalOpen(false);
    setEditingBlog(null);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this publication?")) {
      const { error } = await createClient().from("blogs").delete().eq("id", id);
      if (error) return alert("Unable to delete from Supabase.");
      setBlogs(blogs.filter((b) => b.id !== id));
    }
  };

  const openCreateModal = () => {
    setEditingBlog(null);
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      author: "Anil Kumar Shukla",
      authorRole: "Program Director & Remote Sensing Lead",
      category: "GIS & Remote Sensing",
    });
    setIsModalOpen(true);
  };

  const openEditModal = (b: BlogPost) => {
    setEditingBlog(b);
    setFormData({
      title: b.title,
      slug: b.slug,
      excerpt: b.excerpt,
      content: b.content,
      author: b.author,
      authorRole: b.authorRole,
      category: b.category,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Publications & Blog Articles CRUD
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Write, edit content, or delete technical research papers and news articles.
          </p>
        </div>
        <button
          onClick={openCreateModal}
          className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-amber-500 transition shadow-md"
        >
          <Plus className="h-4 w-4" />
          <span>Write New Article</span>
        </button>
      </div>

      {/* Blog Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((b) => (
          <div
            key={b.id}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-3 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-2">
              <span className="rounded bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold text-amber-500">
                {b.category}
              </span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">{b.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {b.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">By {b.author}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => openEditModal(b)}
                  className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500"
                >
                  <Edit className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(b.id)}
                  className="p-1.5 rounded-lg bg-rose-500/10 text-rose-500 hover:bg-rose-500/20"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {editingBlog ? "Edit Article" : "Write Article"}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Article Title</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      title: e.target.value,
                      slug: e.target.value.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, ""),
                    })
                  }
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Author Name</label>
                  <input
                    type="text"
                    required
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Category</label>
                  <input
                    type="text"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Excerpt / Abstract</label>
                <textarea
                  rows={2}
                  required
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Full Content</label>
                <textarea
                  rows={5}
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white"
                />
              </div>

              <div className="pt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-amber-600 text-xs font-bold text-white hover:bg-amber-500"
                >
                  Publish Article
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
