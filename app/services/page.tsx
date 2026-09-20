"use client";

import React, { useEffect, useState } from "react";
import { gisMappingOfferings, initialServices } from "@/lib/data/seedData";
import { gisMaps, type GisMap } from "@/lib/data/gisMaps";
import { ServiceItem } from "@/types";
import { createClient } from "@/lib/supabase/client";
import { serviceFromRow } from "@/lib/services";
import { siteConfig } from "@/lib/seo";
import MapCard from "@/components/gis/MapCard";
import { Compass, CheckCircle2, ArrowRight, X, Search, ShieldCheck, Map, ChevronRight, FileDown, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedMap, setSelectedMap] = useState<GisMap | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [services, setServices] = useState<ServiceItem[]>(initialServices);

  useEffect(() => {
    const loadServices = async () => {
      const { data } = await createClient().from("services").select("*").order("created_at", { ascending: false });
      if (data?.length) setServices(data.map(serviceFromRow));
    };
    void loadServices();
  }, []);

  const filteredServices = services.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="agri-page space-y-16 pb-24 pt-12">
      {/* Page Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-radiate/10 px-3.5 py-1 text-xs font-semibold text-herb border border-herb/20">
          <Compass className="h-3.5 w-3.5" />
          <span>Our Technical Capabilities</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          GIS Mapping, Soil Testing & <br />
          <span className="majith-gradient-text">Agronomic Services</span>
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Delivering ISRO-grade remote sensing, 3D cadastral GIS mapping in Jhansi, regional soil laboratory testing, and IWMP watershed Detailed Project Reports (DPR).
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative pt-4">
          <Search className="absolute left-3 top-7 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search services (e.g. GIS, Soil, Watershed)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 pl-10 pr-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-herb shadow-sm"
          />
        </div>

        <a
          href="/documents/rsak-gis-services-profile.pdf"
          download
          className="mt-5 inline-flex items-center gap-2 rounded-xl border border-herb/30 bg-radiate/10 px-4 py-2.5 text-xs font-semibold text-herb transition hover:bg-radiate hover:text-white dark:text-gleam"
        >
          <FileDown className="h-4 w-4" />
          <span>Download GIS Services Profile (PDF)</span>
        </a>
      </section>

      {/* GIS services profile */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6 text-white shadow-lg sm:p-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gleam">RSAK Society</p>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">GIS &amp; Remote Sensing Services Profile</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
                Advanced mapping, survey, spatial analysis, and terrain-modeling services for planning, agriculture, and sustainable watershed development.
              </p>
            </div>

            <div className="grid gap-3 text-xs text-slate-200 sm:grid-cols-2 lg:col-span-5">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gleam" />
                <span><strong className="text-white">Registered Office:</strong> {siteConfig.registeredOffice}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gleam" />
                <span><strong className="text-white">Jhansi Office:</strong> {siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-herb" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-gleam">{siteConfig.phone}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-herb" />
                <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-gleam">{siteConfig.email}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GIS & Remote Sensing Visual Showcase */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-herb/30 bg-radiate/10 px-3 py-1 text-xs font-semibold text-herb">
            <Map className="h-3.5 w-3.5" />
            <span>GIS & Remote Sensing</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Geospatial Mapping Capabilities
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Examples of geomorphology mapping and 3D terrain visualization using advanced GIS technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="premium-card rounded-2xl overflow-hidden">
            <div className="relative h-64 bg-slate-100 dark:bg-slate-950">
              <img
                src="https://res.cloudinary.com/sb6zkuxk/image/upload/v1789759096/geomorphology_map_extracted.png"
                alt="Geomorphology map generated using GIS"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Geomorphology Mapping</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-2 leading-relaxed">
                Detailed terrain analysis and landform classification using satellite imagery and GIS processing.
              </p>
            </div>
          </div>

          <div className="premium-card rounded-2xl overflow-hidden">
            <div className="relative h-64 bg-slate-100 dark:bg-slate-950">
              <img
                src="https://res.cloudinary.com/sb6zkuxk/image/upload/v1789759096/3d_terrain_graph_extracted.png"
                alt="3D terrain visualization using GIS"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">3D Terrain / GIS Visualization</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-2 leading-relaxed">
                Three-dimensional terrain modeling and elevation analysis for watershed and planning applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Farming Document Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="premium-card rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-radiate/10 px-3 py-1 text-xs font-semibold text-herb mb-4">
                <FileDown className="h-3.5 w-3.5" />
                <span>Research Document</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
                GIS-Based Natural Farming Model
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                RSAKHI Society has developed a natural farming model using GIS technology for farm-level monitoring, satellite-based observation, land-use change detection and assessment of farm-specific information including Khasra/plot numbers and cluster mapping.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/documents/natural-farming-gis-model.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-xl bg-radiate px-5 py-3 text-xs font-semibold text-moss shadow-md hover:bg-gleam transition-colors"
                >
                  <FileDown className="h-4 w-4" />
                  <span>Download PDF</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-herb/60 bg-white px-5 py-3 text-xs font-semibold text-moss shadow-sm hover:border-herb hover:bg-gleam transition dark:bg-transparent dark:text-white dark:border-[#34422F] dark:hover:bg-herb/20 dark:hover:border-herb"
                >
                  <span>Request Information</span>
                </Link>
              </div>
            </div>
            <div className="relative h-64 lg:h-80">
              <img
                src="https://res.cloudinary.com/sb6zkuxk/image/upload/v1789759415/Natural_Forming_kanpur.jpg.jpg"
                alt="Natural farming GIS project"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GIS service catalogue and service cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <aside className="premium-card self-start rounded-3xl p-6 lg:col-span-4">
            <div className="mb-5 flex items-center gap-3 border-b border-slate-100 pb-5 dark:border-slate-800">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-herb text-white dark:bg-radiate">
                <Map className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-herb">We Are Offering</p>
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Our GIS Services</h2>
              </div>
            </div>
            <ul className="space-y-0.5">
              {gisMappingOfferings.map((offering) => (
                <li key={offering}>
                  <a href="#service-cards" className="group flex items-start gap-2 rounded-lg px-2 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-herb/10 hover:text-herb dark:text-slate-200 dark:hover:text-gleam">
                    <ChevronRight className="h-4 w-4 shrink-0 text-herb transition-transform group-hover:translate-x-1 mt-0.5" />
                    <span className="leading-snug">{offering}</span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-8 lg:col-span-8">
            <div>
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-herb">Project Visualizations</p>
                <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">Remote Sensing &amp; GIS Solutions</h2>
              </div>
              <div id="map-visualizations" className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {gisMaps.map((map) => <MapCard key={map.id} map={map} onPreview={setSelectedMap} />)}
              </div>
            </div>

            <div>
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-herb">Technical Capabilities</p>
                <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">Detailed Service Specifications</h2>
              </div>
              <div id="service-cards" className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {filteredServices.map((service) => (
                  <div
                    key={service.id}
                    id={service.slug}
                    className="premium-card flex flex-col justify-between space-y-6 rounded-3xl p-6"
                  >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-lg bg-radiate/10 px-3 py-1 text-xs font-bold text-herb">
                      {service.category}
                    </span>
                    <ShieldCheck className="h-5 w-5 text-herb" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{service.shortDesc}</p>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Key Features & Deliverables:</h4>
                    <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-herb" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-6 dark:border-slate-800">
                  <button onClick={() => setSelectedService(service)} className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-900 transition hover:bg-radiate hover:text-white dark:bg-slate-800 dark:text-white">
                    <span>Full Specification</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <Link href="/contact" className="text-xs font-semibold text-herb hover:underline">Request Proposal</Link>
                </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="inline-block rounded-lg bg-radiate/10 px-3 py-1 text-xs font-bold text-herb">
              {selectedService.category}
            </span>

            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {selectedService.title}
            </h3>

            <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed leading-relaxed whitespace-pre-line">
              {selectedService.fullDesc}
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Full Technical Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {selectedService.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="h-4 w-4 text-herb" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                Close
              </button>
              <Link
                href="/contact"
                onClick={() => setSelectedService(null)}
                className="inline-flex items-center gap-2 rounded-xl bg-radiate px-5 py-2 text-xs font-semibold text-white hover:bg-radiate transition shadow-md"
              >
                <span>Inquire About This Service</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {selectedMap?.image && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${selectedMap.title} preview`}>
          <button type="button" onClick={() => setSelectedMap(null)} aria-label="Close map preview" className="absolute inset-0 cursor-default" />
          <div className="relative z-10 max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3 text-white">
              <h2 className="text-sm font-bold">{selectedMap.title}</h2>
              <button type="button" onClick={() => setSelectedMap(null)} className="rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white">Close</button>
            </div>
            <div className="relative h-[70vh] bg-slate-950">
              <Image src={selectedMap.image} alt={selectedMap.alt} fill sizes="90vw" className="object-contain p-4" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
