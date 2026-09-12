import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative flex h-14 w-14 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-sky-500/20 border-t-sky-500 animate-spin" />
          <div className="h-6 w-6 rounded-full bg-sky-600 animate-pulse" />
        </div>
        <p className="font-mono text-xs text-slate-500 dark:text-slate-400 tracking-wider uppercase animate-pulse">
          Loading Remote Sensing Telemetry...
        </p>
      </div>
    </div>
  );
}
