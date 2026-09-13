"use client";

import React, { useEffect, useState } from "react";
import { initialServices } from "@/lib/data/seedData";
import { ServiceItem } from "@/types";
import { createClient } from "@/lib/supabase/client";
import { serviceFromRow, serviceToRow } from "@/lib/services";
import { Plus, Trash2, Edit, X, Layers } from "lucide-react";

export default function AdminServicesPage() {
  const [services, setServices] = useState<ServiceItem[]>(initialServices);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    const loadServices = async () => {
      const { data } = await createClient().from("services").select("*").order("created_at", { ascending: false });
      if (data?.length) setServices(data.map(serviceFromRow));
    };
    void loadServices();
  }, []);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    shortDesc: "",
    fullDesc: "",
    category: "GIS & Remote Sensing",
  });

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const draft: Omit<ServiceItem, "id"> = {
      iconName: editingService?.iconName || "Map",
      features: editingService?.features || ["DGPS Telemetry", "GIS Cadastral Delineation", "Technical DPR Preparation"],
      imageUrl: editingService?.imageUrl || "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop",
      isFeatured: editingService?.isFeatured || false,
      ...formData,
    };
    const supabase = createClient();
    if (editingService) {
      const { data, error } = await supabase.from("services").update(serviceToRow(draft)).eq("id", editingService.id).select().single();
      if (error) return alert("Unable to save in Supabase. Sign in with a Supabase admin account first.");
      setServices(services.map((s) => (s.id === editingService.id ? serviceFromRow(data) : s)));
    } else {
      const { data, error } = await supabase.from("services").insert(serviceToRow(draft)).select().single();
      if (error) return alert("Unable to save in Supabase. Sign in with a Supabase admin account first.");
      setServices([serviceFromRow(data), ...services]);
    }
    setIsModalOpen(false);
    setEditingService(null);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this service entry?")) {
      const { error } = await createClient().from("services").delete().eq("id", id);
      if (error) return alert("Unable to delete from Supabase.");
      setServices(services.filter((s) => s.id !== id));
    }
  };

  const openCreateModal = () => {
    setEditingService(null);
    setFormData({
      title: "",
      slug: "",
      shortDesc: "",
      fullDesc: "",
      category: "GIS & Remote Sensing",
    });
    setIsModalOpen(true);
  };

  const openEditModal = (s: ServiceItem) => {
    setEditingService(s);
    setFormData({
      title: s.title,
      slug: s.slug,
      shortDesc: s.shortDesc,
      fullDesc: s.fullDesc,
      category: s.category,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Services & Technical Offerings CRUD
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Create, update descriptions, or remove service offerings.
          </p>
        </div>
        <button
          onClick={openCreateModal}
          className="inline-flex items-center gap-2 rounded-xl bg-radiate px-4 py-2.5 text-xs font-bold text-moss hover:bg-gleam transition shadow-md"
        >
          <Plus className="h-4 w-4" />
          <span>Add New Service</span>
        </button>
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div
            key={s.id}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-3 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-2">
              <span className="rounded bg-herb/10 px-2 py-0.5 text-[10px] font-bold text-herb">
                {s.category}
              </span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">{s.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{s.shortDesc}</p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">/{s.slug}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => openEditModal(s)}
                  className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-herb"
                >
                  <Edit className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(s.id)}
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
                {editingService ? "Edit Service" : "Add Service"}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Service Title</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Short Summary</label>
                <textarea
                  rows={2}
                  required
                  value={formData.shortDesc}
                  onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Full Description</label>
                <textarea
                  rows={4}
                  required
                  value={formData.fullDesc}
                  onChange={(e) => setFormData({ ...formData, fullDesc: e.target.value })}
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
                  className="px-4 py-2 rounded-xl bg-radiate text-xs font-bold text-moss hover:bg-gleam"
                >
                  Save Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
