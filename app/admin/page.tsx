import React from "react";
import Link from "next/link";
import { initialProjects, initialServices, initialGallery, initialBlogs } from "@/lib/data/seedData";
import { FolderGit2, Layers, Image as ImageIcon, FileText, Plus, Edit3, ArrowRight } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Client Content Management Overview
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Manage GIS projects, services, gallery image uploads, and research publications for RSAK Society.
        </p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-2 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">Total Projects</span>
            <FolderGit2 className="h-5 w-5 text-herb" />
          </div>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
            {initialProjects.length}
          </p>
          <Link href="/admin/projects" className="text-[11px] font-semibold text-herb hover:underline inline-block">
            Manage & Edit Projects →
          </Link>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-2 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">Active Services</span>
            <Layers className="h-5 w-5 text-herb" />
          </div>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
            {initialServices.length}
          </p>
          <Link href="/admin/services" className="text-[11px] font-semibold text-herb hover:underline inline-block">
            Manage Services →
          </Link>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-2 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">Gallery Assets</span>
            <ImageIcon className="h-5 w-5 text-radiate" />
          </div>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
            {initialGallery.length}
          </p>
          <Link href="/admin/gallery" className="text-[11px] font-semibold text-radiate hover:underline inline-block">
            Upload & Edit Photos →
          </Link>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-2 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">Publications</span>
            <FileText className="h-5 w-5 text-amber-500" />
          </div>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
            {initialBlogs.length}
          </p>
          <Link href="/admin/blogs" className="text-[11px] font-semibold text-amber-500 hover:underline inline-block">
            Manage Articles →
          </Link>
        </div>
      </div>

      {/* Quick Action Shortcuts */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-sm">
        <h2 className="text-base font-bold text-slate-900 dark:text-white">
          Client Quick Actions (Upload & Edit)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/admin/gallery"
            className="flex items-center justify-between rounded-xl bg-radiate/10 border border-radiate/20 p-4 text-pink-600 dark:text-gleam font-semibold text-xs hover:bg-radiate/20 transition"
          >
            <span>Upload New Gallery Image</span>
            <Plus className="h-4 w-4" />
          </Link>

          <Link
            href="/admin/projects"
            className="flex items-center justify-between rounded-xl bg-radiate/10 border border-herb/20 p-4 text-herb dark:text-gleam font-semibold text-xs hover:bg-radiate/20 transition"
          >
            <span>Add / Edit GIS Project</span>
            <Plus className="h-4 w-4" />
          </Link>

          <Link
            href="/admin/blogs"
            className="flex items-center justify-between rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 text-amber-600 dark:text-amber-400 font-semibold text-xs hover:bg-amber-500/20 transition"
          >
            <span>Publish New Article</span>
            <Plus className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
