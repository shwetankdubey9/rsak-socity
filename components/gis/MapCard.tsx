"use client";

import Image from "next/image";
import { Map as MapIcon, Maximize2 } from "lucide-react";
import type { GisMap } from "@/lib/data/gisMaps";

interface MapCardProps {
  map: GisMap;
  onPreview: (map: GisMap) => void;
}

export default function MapCard({ map, onPreview }: MapCardProps) {
  return (
    <article className="premium-card group overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-slate-800">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white">{map.title}</h3>
        {map.image && (
          <button
            type="button"
            onClick={() => onPreview(map)}
            aria-label={`View ${map.title} at full size`}
            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-radiate/10 hover:text-herb focus:outline-none focus:ring-2 focus:ring-herb"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="relative flex h-56 items-center justify-center bg-slate-50 p-4 dark:bg-slate-950">
        {map.image ? (
          <Image
            src={map.image}
            alt={map.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex max-w-[13rem] flex-col items-center gap-3 text-center text-slate-500 dark:text-slate-400">
            <MapIcon className="h-9 w-9 text-herb" />
            <p className="text-xs font-medium">Map asset awaiting client upload</p>
          </div>
        )}
      </div>

      <p className="min-h-14 px-4 py-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{map.description}</p>
    </article>
  );
}
