"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="text-center space-y-6 max-w-md">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-500 border border-rose-500/20">
          <AlertTriangle className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Telemetry Connection Exception
          </h1>
          <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
            An unexpected runtime error occurred while processing spatial data layers.
          </p>
        </div>
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-sky-500 transition shadow-md"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Reload Application Layer</span>
        </button>
      </div>
    </div>
  );
}
