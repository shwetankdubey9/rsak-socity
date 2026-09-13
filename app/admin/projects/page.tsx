"use client";

import React, { useState } from "react";
import { initialProjects } from "@/lib/data/seedData";
import { ProjectItem } from "@/types";
import { Plus, Trash2, Edit, X, FolderGit2 } from "lucide-react";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<ProjectItem[]>(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);

  const [formData, setFormData] = useState({
    sn: projects.length + 1,
    name: "",
    funder: "",
    amount: "",
    period: "2026",
    beneficiary: "Jhansi",
    category: "GIS Mapping" as ProjectItem["category"],
    description: "",
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProject) {
      setProjects(projects.map((p) => (p.id === editingProject.id ? { ...p, ...formData } : p)));
    } else {
      const newProj: ProjectItem = {
        id: `proj-${Date.now()}`,
        ...formData,
      };
      setProjects([newProj, ...projects]);
    }
    setIsModalOpen(false);
    setEditingProject(null);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this project entry?")) {
      setProjects(projects.filter((p) => p.id !== id));
    }
  };

  const openCreateModal = () => {
    setEditingProject(null);
    setFormData({
      sn: projects.length + 1,
      name: "",
      funder: "",
      amount: "",
      period: "2026",
      beneficiary: "Jhansi",
      category: "GIS Mapping",
      description: "",
    });
    setIsModalOpen(true);
  };

  const openEditModal = (p: ProjectItem) => {
    setEditingProject(p);
    setFormData({
      sn: p.sn,
      name: p.name,
      funder: p.funder,
      amount: p.amount || "",
      period: p.period,
      beneficiary: p.beneficiary,
      category: p.category,
      description: p.description || "",
    });
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            GIS Projects & Work Handled CRUD
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Create, edit, or remove project records live in the system catalog.
          </p>
        </div>
        <button
          onClick={openCreateModal}
          className="inline-flex items-center gap-2 rounded-xl bg-radiate px-4 py-2.5 text-xs font-bold text-white hover:bg-radiate transition shadow-md"
        >
          <Plus className="h-4 w-4" />
          <span>Add New Project Record</span>
        </button>
      </div>

      {/* Projects Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-800">
            <tr>
              <th className="p-4">S.N.</th>
              <th className="p-4">Project Name</th>
              <th className="p-4">Funder / Partner</th>
              <th className="p-4">Period</th>
              <th className="p-4">Beneficiary</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {projects.map((p) => (
              <tr key={p.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                <td className="p-4 font-mono font-bold text-herb">{p.sn}</td>
                <td className="p-4 font-semibold text-slate-900 dark:text-slate-100">{p.name}</td>
                <td className="p-4 text-slate-600 dark:text-slate-400">{p.funder}</td>
                <td className="p-4 font-mono text-slate-500">{p.period}</td>
                <td className="p-4 text-slate-600 dark:text-slate-300">{p.beneficiary}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openEditModal(p)}
                      className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-herb"
                    >
                      <Edit className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="p-1.5 rounded-lg bg-rose-500/10 text-rose-500 hover:bg-rose-500/20"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {editingProject ? "Edit Project Record" : "Add New Project"}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">S.N. Number</label>
                  <input
                    type="number"
                    required
                    value={formData.sn}
                    onChange={(e) => setFormData({ ...formData, sn: Number(e.target.value) })}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Period / Years</label>
                  <input
                    type="text"
                    required
                    value={formData.period}
                    onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Project Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Funder / Partner Agency</label>
                <input
                  type="text"
                  required
                  value={formData.funder}
                  onChange={(e) => setFormData({ ...formData, funder: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Beneficiary Region</label>
                <input
                  type="text"
                  required
                  value={formData.beneficiary}
                  onChange={(e) => setFormData({ ...formData, beneficiary: e.target.value })}
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
                  Save Project Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
