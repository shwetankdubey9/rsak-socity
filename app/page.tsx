import React from "react";
import Link from "next/link";
import {
  Compass,
  MapPin,
  Award,
  ArrowRight,
  CheckCircle2,
  Layers,
  FlaskConical,
  Sprout,
  Users,
  FileText,
  Building2,
  Phone,
} from "lucide-react";
import MajithDEMVisualizer from "@/components/gis/MajithDEMVisualizer";
import GISJhansi3DVisualizer from "@/components/gis/GISJhansi3DVisualizer";
import DirectorAvatar from "@/components/ui/DirectorAvatar";
import { initialServices, initialProjects, initialBlogs } from "@/lib/data/seedData";
import { siteConfig } from "@/lib/seo";

export default function HomePage() {
  const featuredProjects = initialProjects.filter((p) => p.isFeatured).slice(0, 6);
  const featuredBlogs = initialBlogs.slice(0, 3);

  return (
    <div className="space-y-24 pb-20">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 lg:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold text-sky-600 dark:text-sky-400">
                <span className="h-2 w-2 rounded-full bg-sky-400 animate-ping" />
                <span>Pioneering GIS Mapping & Soil Testing in Jhansi</span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-[1.1]">
                Remote Sensing & <br className="hidden sm:inline" />
                <span className="majith-gradient-text">Agricultural Intelligence</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                <strong>Remote Sensing Agriculture Knowledge Help Integral Society (RAKHI-Society)</strong>, established in 2017 under Program Director <strong>Rakhi Shukla</strong> and Remote Sensing Lead <strong>Anil Kumar Shukla (RS&amp;GIS-(IIRS-ISRO))</strong>. Delivering high-precision 3D GIS mapping, soil, other type social work and watershed development across Bundelkhand, Uttar Pradesh, and India.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 transition-colors"
                >
                  <span>Explore GIS Services</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <MapPin className="h-4 w-4 text-sky-600" />
                  <span>Jhansi HQ Directions</span>
                </Link>
              </div>

              {/* Badges Bar */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-500 flex-shrink-0" />
                  <span>37+ Completed Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-500 flex-shrink-0" />
                  <span>India-wide Services</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visualizer: Interactive Majith DEM */}
            <div className="lg:col-span-5">
              <MajithDEMVisualizer />
            </div>
          </div>
        </div>
      </section>

      {/* STATS OVERVIEW */}
      <section className="bg-slate-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <p className="text-3xl font-extrabold text-sky-400">37+</p>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">GIS & Agri Projects</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-extrabold text-sky-400">15,000+</p>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Soil Samples Tested</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-extrabold text-emerald-400">2017</p>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Established Year</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-extrabold text-emerald-400">100%</p>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Bundelkhand Commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* GIS MAPPING IN JHANSI 3D SHOWCASE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-600">
            <Building2 className="h-3.5 w-3.5" />
            <span>Interactive Spatial Feature</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            GIS Mapping in Jhansi District
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Utilizing DGPS surveys, satellite remote sensing, and 3D volumetric building footprint extraction across K.K. Puri Colony, Awas Vikas, and regional agricultural zones.
          </p>
        </div>

        <GISJhansi3DVisualizer />
      </section>

      {/* CORE SERVICES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-500">What We Do</span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Agricultural & Spatial Expertise
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-500 hover:text-sky-400"
          >
            <span>View All Services</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initialServices.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center border border-sky-500/20 group-hover:scale-110 transition-transform">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.shortDesc}
                </p>
                <ul className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                  {service.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP SPOTLIGHT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 text-white p-8 lg:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Leadership Details */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-300 border border-sky-500/30">
                <span>Society Leadership</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                Guided by Visionary Leadership & Technical Excellence
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="rounded-2xl bg-slate-900/90 border border-sky-500/30 p-5 space-y-3 relative overflow-hidden">
                  <div className="flex items-center gap-4">
                    <DirectorAvatar size="md" />
                    <div>
                      <h3 className="font-bold text-lg text-sky-300">Rakhi Devi</h3>
                      <p className="text-xs text-slate-300 font-medium">Director</p>
                      <span className="inline-block mt-1 rounded bg-sky-500/20 px-2 py-0.5 text-[10px] font-semibold text-sky-200 border border-sky-500/30">
                        Director
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 space-y-2">
                  <h3 className="font-bold text-lg text-sky-400">Anil Kumar Shukla</h3>
                  <p className="text-xs text-slate-300 font-medium">Program Director & GIS Lead</p>
                </div>
              </div>
            </div>

            {/* NGO Registration & Contact Direct Callout */}
            <div className="lg:col-span-4 rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-4 text-center">
              <Compass className="h-12 w-12 text-sky-400 mx-auto" />
              <h4 className="font-bold text-base text-white">Headquarters Contact</h4>
              <p className="text-xs text-slate-400">
                K.K. Puri Colony, Awas Vikas, Shivpuri Road, Jhansi (U.P.) 284003
              </p>
              <div className="pt-2">
                <a
                  href="tel:+919415504335"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-emerald-500 transition w-full justify-center"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call 91-9415504335</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS TABLE / SHOWCASE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">Track Record</span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Key Projects Handled
            </h2>
          </div>
          <Link href="/about#projects" className="text-xs font-semibold text-sky-500 hover:underline">
            View All 37+ Projects →
          </Link>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-4">S.N.</th>
                <th className="p-4">Project Name</th>
                <th className="p-4">Funder / Partner</th>
                <th className="p-4">Period</th>
                <th className="p-4">Beneficiary Region</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {featuredProjects.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-mono font-bold text-sky-500">{p.sn}</td>
                  <td className="p-4 font-semibold text-slate-900 dark:text-slate-100">{p.name}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400">{p.funder}</td>
                  <td className="p-4 font-mono text-slate-500">{p.period}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">{p.beneficiary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* LATEST BLOGS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">Publications</span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
              GIS & Agricultural Articles
            </h2>
          </div>
          <Link href="/blog" className="text-xs font-semibold text-sky-500 hover:underline">
            Browse All Articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="p-6 space-y-3">
                <span className="inline-block rounded-md bg-sky-500/10 px-2.5 py-1 text-[10px] font-bold text-sky-600 dark:text-sky-400">
                  {blog.category}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-2">
                  <Link href={`/blog/${blog.slug}`} className="hover:text-sky-500 transition">
                    {blog.title}
                  </Link>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100 dark:border-slate-800 mt-4">
                <span>By {blog.author}</span>
                <span>{blog.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-sky-700 p-8 sm:p-12 text-white shadow-lg text-center space-y-6">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Need Expert GIS Mapping or Soil Testing in Jhansi?
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-sky-100 leading-relaxed">
            Contact Remote Sensing Agriculture Knowledge Help Integral Society for government DPR preparation, satellite topography surveys, and soil fertility cards.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-bold text-slate-900 shadow-md hover:bg-slate-100 transition"
            >
              <span>Get In Touch Now</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
