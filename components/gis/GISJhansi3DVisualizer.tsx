"use client";

import React, { useState } from "react";
import { Building2, Layers, MapPin, Search, ZoomIn, ZoomOut } from "lucide-react";

export default function GISJhansi3DVisualizer() {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedSector, setSelectedSector] = useState("K.K. Puri Colony, Awas Vikas, Jhansi");
  const [activeLayer, setActiveLayer] = useState<"3d" | "satellite" | "hybrid">("3d");

  const buildings = [
    { id: 1, name: "RSAK Society HQ", height: "h-32", color: "bg-pink-500/80 border-pink-400", x: "col-start-2", y: "row-start-2", floors: 4, desc: "Remote Sensing Lab & NGO Office" },
    { id: 2, name: "Regional Soil Testing Lab", height: "h-40", color: "bg-amber-400/80 border-amber-300", x: "col-start-3", y: "row-start-2", floors: 5, desc: "Soil Spectrometry & NPK Testing" },
    { id: 3, name: "Awas Vikas Urban Block A", height: "h-24", color: "bg-cyan-400/80 border-cyan-300", x: "col-start-1", y: "row-start-3", floors: 3, desc: "Residential Spatial Sector" },
    { id: 4, name: "Jhansi Agri Tech Center", height: "h-48", color: "bg-sky-400/80 border-sky-300", x: "col-start-3", y: "row-start-3", floors: 6, desc: "GIS Server Telemetry Hub" },
    { id: 5, name: "K.K. Puri Commercial Hub", height: "h-28", color: "bg-emerald-400/80 border-emerald-300", x: "col-start-2", y: "row-start-4", floors: 4, desc: "Market Survey & Planning Sector" },
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-white shadow-2xl">
      {/* Visualizer Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 bg-slate-950/90 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-sky-400" />
          <span className="font-semibold text-sm tracking-wide text-slate-100">
            GIS 3D Spatial Building Model — Jhansi City
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="flex rounded-lg bg-slate-900 p-1 border border-slate-800">
            <button
              onClick={() => setActiveLayer("3d")}
              className={`px-2 py-1 rounded text-xs transition ${
                activeLayer === "3d" ? "bg-sky-600 text-white font-medium" : "text-slate-400 hover:text-white"
              }`}
            >
              3D Extrusions
            </button>
            <button
              onClick={() => setActiveLayer("satellite")}
              className={`px-2 py-1 rounded text-xs transition ${
                activeLayer === "satellite" ? "bg-sky-600 text-white font-medium" : "text-slate-400 hover:text-white"
              }`}
            >
              Satellite Base
            </button>
          </div>
        </div>
      </div>

      {/* 3D Isometric View Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950 p-8 flex items-center justify-center">
        {/* Isometric Grid Floor */}
        <div
          className="relative transition-transform duration-500 transform ease-out"
          style={{
            transform: `rotateX(55deg) rotateZ(-35deg) scale(${zoomLevel})`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Base Grid Plate */}
          <div className="grid grid-cols-4 grid-rows-4 gap-6 w-[420px] h-[420px] p-4 bg-slate-900/90 border-2 border-sky-500/40 rounded-xl shadow-[0_0_50px_rgba(14,165,233,0.25)]">
            {buildings.map((b) => (
              <div
                key={b.id}
                onClick={() => setSelectedSector(`${b.name} (${b.desc})`)}
                className={`${b.x} ${b.y} relative group cursor-pointer transition-all duration-300`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* 3D Extruded Prism Building */}
                <div
                  className={`w-full ${b.height} ${b.color} rounded-sm border shadow-lg backdrop-blur-sm transition-transform group-hover:-translate-z-4`}
                  style={{
                    transform: "translateZ(30px)",
                    boxShadow: "10px 10px 20px rgba(0,0,0,0.6)",
                  }}
                >
                  <div className="p-2 text-[9px] font-bold text-slate-900 truncate">
                    {b.name}
                  </div>
                </div>

                {/* Building Shadow */}
                <div className="absolute inset-0 bg-black/40 blur-xs rounded-sm transform translate-x-4 translate-y-4" />
              </div>
            ))}
          </div>
        </div>

        {/* Map Telemetry HUD Box */}
        <div className="absolute top-4 left-4 rounded-xl bg-slate-900/90 border border-slate-800 p-3 backdrop-blur-md text-xs space-y-1.5 max-w-xs">
          <div className="flex items-center gap-1.5 font-semibold text-sky-400">
            <MapPin className="h-4 w-4" />
            <span>Target Location Telemetry</span>
          </div>
          <p className="text-slate-300 font-medium truncate">{selectedSector}</p>
          <div className="text-[10px] text-slate-400 font-mono">
            District: Jhansi | State: Uttar Pradesh | Pin: 284003
          </div>
        </div>
      </div>

      {/* Control Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 bg-slate-950 px-4 py-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-400">Zoom Level:</span>
          <button
            onClick={() => setZoomLevel(Math.min(zoomLevel + 0.15, 1.4))}
            className="p-1 rounded bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          <button
            onClick={() => setZoomLevel(Math.max(zoomLevel - 0.15, 0.75))}
            className="p-1 rounded bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <Layers className="h-4 w-4 text-emerald-400" />
          <span>Vector Extrusions: Active (ISRO Cadastral Standards)</span>
        </div>
      </div>
    </div>
  );
}
