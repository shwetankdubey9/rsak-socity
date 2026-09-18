"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { initialGallery } from "@/lib/data/seedData";
import { GalleryItem } from "@/types";
import { Plus, Trash2, Edit, Upload, Check, X, Image as ImageIcon } from "lucide-react";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { createClient } from "@/lib/supabase/client";
import { galleryFromRow, galleryToRow } from "@/lib/gallery";

export default function AdminGalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>(initialGallery);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const loadGallery = async () => {
      const { data } = await createClient().from("gallery").select("*").order("created_at", { ascending: false });
      if (data?.length) setItems(data.map(galleryFromRow));
    };
    void loadGallery();
  }, []);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "GIS Elevation" as GalleryItem["category"],
    imageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop",
    location: "Jhansi (U.P.)",
    date: "2026",
  });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const url = await uploadToCloudinary(file);
      setFormData({ ...formData, imageUrl: url });
    } catch {
      alert("Failed to process image file.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const draft: Omit<GalleryItem, "id"> = { ...formData, isFeatured: editingItem?.isFeatured || false };
    const supabase = createClient();
    if (editingItem) {
      const { data, error } = await supabase.from("gallery").update(galleryToRow(draft)).eq("id", editingItem.id).select().single();
      if (error) return alert("Unable to save in Supabase. Sign in with a Supabase admin account first.");
      setItems(items.map((it) => (it.id === editingItem.id ? galleryFromRow(data) : it)));
    } else {
      const { data, error } = await supabase.from("gallery").insert(galleryToRow(draft)).select().single();
      if (error) return alert("Unable to save in Supabase. Sign in with a Supabase admin account first.");
      setItems([galleryFromRow(data), ...items]);
    }
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this gallery item?")) {
      const { error } = await createClient().from("gallery").delete().eq("id", id);
      if (error) return alert("Unable to delete from Supabase.");
      setItems(items.filter((it) => it.id !== id));
    }
  };

  const openCreateModal = () => {
    setEditingItem(null);
    setFormData({
      title: "",
      description: "",
      category: "GIS Elevation",
      imageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop",
      location: "Jhansi (U.P.)",
      date: "2026",
    });
    setIsModalOpen(true);
  };

  const openEditModal = (item: GalleryItem) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      description: item.description,
      category: item.category,
      imageUrl: item.imageUrl,
      location: item.location || "",
      date: item.date || "",
    });
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Gallery Management & Image Upload (Cloudinary)
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Upload new map visualizers, field photos, and edit existing gallery items live.
          </p>
        </div>
        <button
          onClick={openCreateModal}
          className="inline-flex items-center gap-2 rounded-xl bg-radiate px-4 py-2.5 text-xs font-bold text-white hover:bg-radiate transition shadow-md"
        >
          <Plus className="h-4 w-4" />
          <span>Upload & Add Photo</span>
        </button>
      </div>

      {/* Gallery Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm flex flex-col justify-between"
          >
            <div className="relative aspect-video w-full bg-slate-950">
              <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
            </div>

            <div className="p-4 space-y-2">
              <span className="inline-block rounded bg-radiate/10 px-2 py-0.5 text-[10px] font-bold text-radiate">
                {item.category}
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                {item.description}
              </p>
            </div>

            <div className="p-4 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-2">
              <span className="text-[10px] font-mono text-slate-400">{item.location}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => openEditModal(item)}
                  className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-herb"
                >
                  <Edit className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
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
          <div className="w-full max-w-lg rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {editingItem ? "Edit Gallery Item" : "Upload New Gallery Image"}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Select Image File (Direct Cloudinary Upload)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-radiate/10 file:text-herb"
                />
                {isUploading && <p className="text-[10px] text-gleam font-mono">Uploading image to Cloudinary...</p>}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Title</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as GalleryItem["category"] })}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white"
                >
                  <option value="GIS Elevation">GIS Elevation</option>
                  <option value="3D Mapping">3D Mapping</option>
                  <option value="Field Work">Field Work</option>
                  <option value="Soil Testing">Soil Testing</option>
                  <option value="Events">Events</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Description</label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
                  className="px-4 py-2 rounded-xl bg-radiate text-xs font-bold text-white hover:bg-radiate"
                >
                  Save Gallery Asset
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
