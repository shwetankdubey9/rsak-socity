import React from "react";
import Link from "next/link";
import { Compass, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="text-center space-y-6 max-w-md">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-radiate/10 text-herb border border-herb/20">
          <Compass className="h-8 w-8 animate-spin" />
        </div>
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            404 - Coordinates Not Found
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            The spatial layer or page you are requesting could not be located on our GIS map index.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-radiate px-5 py-2.5 text-xs font-semibold text-white hover:bg-radiate transition shadow-md"
          >
            <Home className="h-4 w-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-5 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
