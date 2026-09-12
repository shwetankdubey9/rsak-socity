"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { initialGallery } from "@/lib/data/seedData";
import { GalleryItem } from "@/types";
import { createClient } from "@/lib/supabase/client";
import { galleryFromRow } from "@/lib/gallery";
import { Compass, Maximize2, X, MapPin, Calendar } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);
  const [items, setItems] = useState<GalleryItem[]>(initialGallery);

  useEffect(() => {
    const loadGallery = async () => {
      const { data } = await createClient().from("gallery").select("*").order("created_at", { ascending: false });
      if (data?.length) setItems(data.map(galleryFromRow));
    };
    void loadGallery();
  }, []);

  const categories = ["All", "GIS Elevation", "3D Mapping", "Field Work", "Soil Testing", "Events"];

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className="agri-page space-y-16 pb-24 pt-12">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-pink-500/10 px-3.5 py-1 text-xs font-semibold text-pink-500 border border-pink-500/20">
          <Compass className="h-3.5 w-3.5" />
          <span>Visual Imagery Showcase</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          GIS Topography & Fieldwork <br />
          <span className="majith-gradient-text">Gallery Portfolio</span>
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          High-resolution Majith Digital Elevation Models (DEM), 3D building extrusions in Jhansi, regional soil testing laboratories, and field survey teams.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-sky-600 text-white shadow-md scale-105"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800"
            >
              {/* Image */}
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-slate-900/80 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="h-4 w-4" />
              </div>

              {/* Content Box */}
              <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1 text-white">
                <span className="inline-block rounded bg-pink-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-bold text-sm line-clamp-1 group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>
                {item.location && (
                  <p className="text-[11px] text-slate-300 flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-pink-400" />
                    <span>{item.location}</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl space-y-4">
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 backdrop-blur-md"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="relative aspect-video w-full">
              <Image
                src={activeLightbox.imageUrl}
                alt={activeLightbox.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6 bg-slate-950 space-y-2 text-white border-t border-slate-800">
              <div className="flex items-center justify-between">
                <span className="rounded bg-sky-500/20 text-sky-400 border border-sky-500/30 px-2.5 py-0.5 text-xs font-bold">
                  {activeLightbox.category}
                </span>
                {activeLightbox.date && (
                  <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                    <Calendar className="h-3.5 w-3.5 text-sky-400" />
                    <span>{activeLightbox.date}</span>
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white">{activeLightbox.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeLightbox.description}
              </p>

              {activeLightbox.location && (
                <p className="text-xs text-pink-400 flex items-center gap-1 pt-1 font-medium">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{activeLightbox.location}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
