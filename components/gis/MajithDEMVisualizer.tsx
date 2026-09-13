"use client";

import React, { useState } from "react";
import { Layers, Eye, RefreshCw, Info, Compass } from "lucide-react";

export default function MajithDEMVisualizer() {
  const [showContours, setShowContours] = useState(true);
  const [colorPalette, setColorPalette] = useState<"rainbow" | "terrain" | "thermal">("rainbow");
  const [activeElevation, setActiveElevation] = useState<number | null>(485);
  const [isRotating, setIsRotating] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-white shadow-2xl">
      {/* Visualizer Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 bg-slate-950/80 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-herb animate-ping" />
          <span className="font-mono text-xs font-semibold tracking-wider text-herb uppercase">
            Majith DEM Topography Visualizer
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded bg-slate-800 px-2 py-1 text-slate-300 font-mono">
            Lat: 25.4484° N | Lon: 78.5685° E
          </span>
          <span className="rounded bg-slate-800 px-2 py-1 text-slate-300 font-mono">
            Elevation: {activeElevation ? `${activeElevation}m MSL` : "Hover Map"}
          </span>
        </div>
      </div>

      {/* Interactive Canvas Canvas Body */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950 flex items-center justify-center p-4">
        {/* Dynamic Gradient Topography SVG Map */}
        <div className={`relative w-full h-full max-w-3xl transition-transform duration-700 ${isRotating ? "rotate-3 scale-105" : ""}`}>
          <svg
            viewBox="0 0 800 500"
            className="w-full h-full filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          >
            <defs>
              {/* Rainbow Elevation Gradient */}
              <linearGradient id="majithRainbow" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="25%" stopColor="#a855f7" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="75%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>

              {/* Terrain Gradient */}
              <linearGradient id="majithTerrain" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="35%" stopColor="#047857" />
                <stop offset="70%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>

              {/* Thermal Gradient */}
              <linearGradient id="majithThermal" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="40%" stopColor="#9333ea" />
                <stop offset="80%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#fef08a" />
              </linearGradient>

              <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              </pattern>
            </defs>

            {/* Background Mesh Grid */}
            <rect width="800" height="500" fill="url(#gridPattern)" />

            {/* 3D Topographical Ridge Layers representing Majith DEM Map */}
            <g
              fill={`url(#${
                colorPalette === "rainbow"
                  ? "majithRainbow"
                  : colorPalette === "terrain"
                  ? "majithTerrain"
                  : "majithThermal"
              })`}
              className="transition-all duration-500"
            >
              {/* Outer Ridge Boundary */}
              <path
                d="M 120 400 Q 200 350, 320 380 T 520 340 T 700 420 L 720 180 Q 600 100, 480 140 T 280 110 T 100 240 Z"
                opacity="0.9"
                onMouseEnter={() => setActiveElevation(320)}
                className="cursor-pointer hover:opacity-100 transition-opacity"
              />

              {/* Mid Elevation Contour */}
              <path
                d="M 180 360 Q 260 300, 360 330 T 560 290 L 660 220 Q 560 160, 440 180 T 240 160 Z"
                opacity="0.85"
                onMouseEnter={() => setActiveElevation(440)}
                className="cursor-pointer hover:opacity-100 transition-opacity"
              />

              {/* High Elevation Ridge Peak */}
              <path
                d="M 260 300 Q 340 250, 420 270 T 580 240 L 600 200 Q 500 170, 420 190 T 300 220 Z"
                opacity="0.95"
                onMouseEnter={() => setActiveElevation(590)}
                className="cursor-pointer hover:opacity-100 transition-opacity"
              />
            </g>

            {/* Contour Lines Overlay */}
            {showContours && (
              <g stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" fill="none" strokeDasharray="4 2">
                <path d="M 120 400 Q 200 350, 320 380 T 520 340 T 700 420" />
                <path d="M 180 360 Q 260 300, 360 330 T 560 290" />
                <path d="M 260 300 Q 340 250, 420 270 T 580 240" />
                <path d="M 320 260 Q 400 220, 500 230" />
              </g>
            )}

            {/* Simulated GPS Sampling Markers */}
            <g>
              <circle cx="360" cy="330" r="5" fill="#FFE787" className="animate-ping" />
              <circle cx="360" cy="330" r="4" fill="#ED7A13" />
              <text x="370" y="335" fill="#ffffff" fontSize="12" fontFamily="monospace">Node-A (Stream)</text>

              <circle cx="420" cy="270" r="5" fill="#f43f5e" className="animate-ping" />
              <circle cx="420" cy="270" r="4" fill="#e11d48" />
              <text x="430" y="275" fill="#ffffff" fontSize="12" fontFamily="monospace">Peak (590m)</text>
            </g>
          </svg>
        </div>

        {/* Legend Box */}
        <div className="absolute bottom-4 left-4 rounded-xl bg-slate-900/90 border border-slate-800 p-3 backdrop-blur-md text-xs space-y-2">
          <div className="flex items-center gap-1.5 font-semibold text-slate-200">
            <Info className="h-3.5 w-3.5 text-gleam" />
            <span>Majith DEM Elevation Legend</span>
          </div>
          <div className="h-3 w-48 rounded bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-emerald-500 to-yellow-400" />
          <div className="flex justify-between font-mono text-[10px] text-slate-400">
            <span>220m (Low)</span>
            <span>400m</span>
            <span>600m+ (Peak)</span>
          </div>
        </div>
      </div>

      {/* Visualizer Controls Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 bg-slate-950 px-4 py-3 text-xs">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-gleam" />
          <span className="text-slate-400">Color Spectrum:</span>
          <div className="flex rounded-lg bg-slate-900 p-1 border border-slate-800">
            <button
              onClick={() => setColorPalette("rainbow")}
              className={`px-2 py-1 rounded text-xs transition ${
                colorPalette === "rainbow"
                  ? "bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-medium"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Majith Rainbow
            </button>
            <button
              onClick={() => setColorPalette("terrain")}
              className={`px-2 py-1 rounded text-xs transition ${
                colorPalette === "terrain"
                  ? "bg-herb text-pearl font-medium"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Terrain
            </button>
            <button
              onClick={() => setColorPalette("thermal")}
              className={`px-2 py-1 rounded text-xs transition ${
                colorPalette === "thermal"
                  ? "bg-purple-600 text-white font-medium"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Thermal
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowContours(!showContours)}
            className="flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 border border-slate-800 text-slate-300 hover:text-white transition"
          >
            <Eye className="h-3.5 w-3.5 text-herb" />
            <span>{showContours ? "Hide Contours" : "Show Contours"}</span>
          </button>
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 border border-slate-800 text-slate-300 hover:text-white transition"
          >
            <Compass className="h-3.5 w-3.5 text-amber-400" />
            <span>{isRotating ? "Reset Orientation" : "3D Tilt View"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
