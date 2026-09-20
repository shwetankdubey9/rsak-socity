"use client";

import React from "react";
import { Share2 } from "lucide-react";

export default function ShareButton() {
  return (
    <button
      onClick={() => {
        if (navigator.share) {
          navigator.share({ title: document.title, url: window.location.href });
        }
      }}
      className="inline-flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition"
    >
      <Share2 className="h-3.5 w-3.5 text-herb" />
      <span>Share Article</span>
    </button>
  );
}
