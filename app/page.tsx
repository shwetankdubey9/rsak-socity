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
    <div className="agri-page space-y-28 pb-24">
      {/* HERO SECTION */}
      <section className="agri-hero overflow-hidden bg-pearl pb-6 pt-14 text-moss dark:bg-[#0B0F0A] dark:text-pearl lg:pb-10 lg:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-7 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-herb/35 bg-gleam px-3.5 py-1.5 text-[11px] font-bold tracking-[0.08em] text-moss">
                <span className="h-2 w-2 rounded-full bg-herb animate-ping" />
                <span>Pioneering GIS Mapping & Soil Testing in Jhansi</span>
              </div>

              <h1 className="max-w-3xl text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl lg:text-6xl text-moss dark:text-white leading-[1.05]">
                Remote Sensing & <br className="hidden sm:inline" />
                <span className="text-herb dark:text-gleam">Agricultural Intelligence</span>
              </h1>

              <p className="max-w-2xl text-base leading-8 text-moss/80 dark:text-slate-300 sm:text-lg">
                <strong>Remote Sensing Agriculture Knowledge Help Integral Society (RAKHI-Society)</strong>, established in 2017 under Program Director <strong>Rakhi Shukla</strong> and Remote Sensing Lead <strong>Anil Kumar Shukla (RS&amp;GIS-(IIRS-ISRO))</strong>. Delivering high-precision 3D GIS mapping, soil, other type social work and watershed development across Bundelkhand, Uttar Pradesh, and India.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl bg-radiate px-6 py-3.5 text-sm font-semibold text-moss shadow-md hover:bg-gleam transition-colors"
                >
                  <span>Explore GIS Services</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-herb/60 bg-white px-6 py-3.5 text-sm font-semibold text-moss shadow-sm hover:border-herb hover:bg-gleam transition dark:bg-transparent dark:text-white dark:border-[#34422F] dark:hover:bg-herb/20 dark:hover:border-herb"
                >
                  <MapPin className="h-4 w-4 text-herb" />
                  <span>Jhansi HQ Directions</span>
                </Link>
              </div>

              {/* Badges Bar */}
              <div className="grid grid-cols-3 gap-4 border-t border-herb/30 pt-6 text-xs font-medium text-moss/70 dark:text-slate-400 dark:border-[#34422F]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-herb flex-shrink-0" />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-herb flex-shrink-0" />
                  <span>37+ Completed Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-herb flex-shrink-0" />
                  <span>India-wide Services</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visualizer: Interactive Majith DEM */}
            <div className="relative lg:col-span-5 lg:pl-4">
              <div className="absolute -right-3 -top-3 hidden rounded-xl border border-herb bg-pearl px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-herb shadow-sm md:block dark:bg-[#151D13] dark:border-[#34422F] dark:text-gleam">Live spatial view</div>
              <MajithDEMVisualizer />
            </div>
          </div>
        </div>
      </section>

      {/* STATS OVERVIEW */}
      <section className="agri-stat-section py-14 text-white">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:divide-x md:divide-slate-700/80 text-center">
            <div className="space-y-1">
              <p className="text-3xl font-extrabold text-gleam">37+</p>
              <p className="text-xs text-pearl/80 font-medium uppercase tracking-wider">GIS & Agri Projects</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-extrabold text-gleam">15,000+</p>
              <p className="text-xs text-pearl/80 font-medium uppercase tracking-wider">Soil Samples Tested</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-extrabold text-gleam">2017</p>
              <p className="text-xs text-pearl/80 font-medium uppercase tracking-wider">Established Year</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-extrabold text-gleam">100%</p>
              <p className="text-xs text-pearl/80 font-medium uppercase tracking-wider">Bundelkhand Commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* GIS MAPPING IN JHANSI 3D SHOWCASE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-herb/30 bg-radiate/10 px-3 py-1 text-xs font-semibold text-herb">
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
            <span className="text-xs font-semibold uppercase tracking-wider text-herb">What We Do</span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Agricultural & Spatial Expertise
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-herb hover:text-gleam"
          >
            <span>View All Services</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initialServices.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="premium-card group relative flex flex-col justify-between rounded-2xl p-7"
            >
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-radiate/10 text-herb flex items-center justify-center border border-herb/20 group-hover:scale-110 transition-transform">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-herb transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {service.shortDesc}
                </p>
                <ul className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                  {service.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gleam" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-herb dark:text-gleam group-hover:translate-x-1 transition-transform"
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
        <div className="premium-card rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Leadership Details */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-gleam px-3 py-1 text-xs font-semibold text-moss border border-herb/30">
                <span>Society Leadership</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-moss dark:text-white">
                Guided by Visionary Leadership & Technical Excellence
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="rounded-2xl bg-white border border-herb/30 p-5 space-y-3 relative overflow-hidden dark:bg-[#1A2417] dark:border-[#34422F]">
                  <div className="flex items-center gap-4">
                    <DirectorAvatar size="md" />
                    <div>
                      <h3 className="font-bold text-lg text-moss dark:text-white">Rakhi Devi</h3>
                      <p className="text-xs text-herb font-medium">Director</p>
                      <span className="inline-block mt-1 rounded bg-radiate/20 px-2 py-0.5 text-[10px] font-semibold text-radiate border border-radiate/30">
                        Director
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white border border-herb/30 p-5 space-y-2 dark:bg-[#1A2417] dark:border-[#34422F]">
                  <h3 className="font-bold text-lg text-moss dark:text-white">Anil Kumar Shukla</h3>
                  <p className="text-xs text-herb font-medium">Program Director & GIS Lead</p>
                </div>
              </div>
            </div>

            {/* NGO Registration & Contact Direct Callout */}
            <div className="lg:col-span-4 rounded-2xl bg-gleam border border-herb/40 p-6 space-y-4 text-center">
              <Compass className="h-12 w-12 text-herb mx-auto" />
              <h4 className="font-bold text-base text-moss">Headquarters Contact</h4>
              <p className="text-xs text-moss/75">
                K.K. Puri Colony, Awas Vikas, Shivpuri Road, Jhansi (U.P.) 284003
              </p>
              <div className="pt-2 space-y-2">
                <a
                  href="tel:+919415504335"
                  className="inline-flex items-center gap-2 rounded-xl bg-radiate px-4 py-2.5 text-xs font-semibold text-moss hover:bg-gleam transition w-full justify-center"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call 91-9415504335</span>
                </a>
                <a
                  href="tel:+919307909728"
                  className="inline-flex items-center gap-2 rounded-xl border border-herb/60 bg-white px-4 py-2.5 text-xs font-semibold text-moss shadow-sm hover:border-herb hover:bg-gleam transition w-full justify-center dark:bg-transparent dark:text-white dark:border-[#34422F] dark:hover:bg-herb/20"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call 91-9307909728</span>
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
            <span className="text-xs font-semibold uppercase tracking-wider text-herb">Track Record</span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Key Projects Handled
            </h2>
          </div>
          <Link href="/about#projects" className="text-xs font-semibold text-herb hover:underline">
            View All 37+ Projects →
          </Link>
        </div>

        <div className="premium-card overflow-x-auto rounded-2xl">
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
                  <td className="p-4 font-mono font-bold text-herb">{p.sn}</td>
                  <td className="p-4 font-semibold text-slate-900 dark:text-white">
                    {p.name}
                    {p.pdfUrl && (
                      <a href={p.pdfUrl} target="_blank" rel="noopener noreferrer" className="ml-2 inline-flex items-center gap-1 rounded bg-radiate/10 px-2 py-0.5 text-[10px] font-bold text-herb hover:bg-radiate hover:text-white transition">
                        PDF
                      </a>
                    )}
                  </td>
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
            <span className="text-xs font-semibold uppercase tracking-wider text-herb">Publications</span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
              GIS & Agricultural Articles
            </h2>
          </div>
          <Link href="/blog" className="text-xs font-semibold text-herb hover:underline">
            Browse All Articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="premium-card flex flex-col justify-between overflow-hidden rounded-2xl"
            >
              <div className="p-6 space-y-3">
                <span className="inline-block rounded-md bg-radiate/10 px-2.5 py-1 text-[10px] font-bold text-herb dark:text-gleam">
                  {blog.category}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-2">
                  <Link href={`/blog/${blog.slug}`} className="hover:text-herb transition">
                    {blog.title}
                  </Link>
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 mt-4">
                <span>By {blog.author}</span>
                <span>{blog.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NATURAL FARMING SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="premium-card rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://res.cloudinary.com/sb6zkuxk/image/upload/v1789759415/Natural_Forming_kanpur.jpg.jpg"
                alt="Natural farming GIS project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-radiate/10 px-3 py-1 text-xs font-semibold text-herb mb-4">
                <Sprout className="h-3.5 w-3.5" />
                <span>Natural Farming & GIS</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
                GIS-Based Natural Farming Model
              </h2>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                RSAKHI Society has developed a natural farming model using GIS technology for farm-level monitoring, satellite-based observation, land-use change detection and assessment of farm-specific information including Khasra/plot numbers and cluster mapping.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl bg-radiate px-5 py-3 text-xs font-semibold text-moss shadow-md hover:bg-gleam transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-herb/60 bg-white px-5 py-3 text-xs font-semibold text-moss shadow-sm hover:border-herb hover:bg-gleam transition dark:bg-transparent dark:text-white dark:border-[#34422F] dark:hover:bg-herb/20 dark:hover:border-herb"
                >
                  <span>Contact Us</span>
                </Link>
                <a
                  href="/documents/Natural_Farming_Model_Uttar_Pradesh.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-herb/60 bg-white px-5 py-3 text-xs font-semibold text-moss shadow-sm hover:border-herb hover:bg-gleam transition dark:bg-transparent dark:text-white dark:border-[#34422F] dark:hover:bg-herb/20 dark:hover:border-herb"
                >
                  <span>View PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-herb p-8 text-center text-pearl shadow-xl sm:p-12 space-y-6 dark:bg-[#1E3006] dark:border dark:border-[#34422F]">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Need Expert GIS Mapping or Soil Testing in Jhansi?
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-pearl/85 leading-relaxed">
            Contact Remote Sensing Agriculture Knowledge Help Integral Society for government DPR preparation, satellite topography surveys, and soil fertility cards.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-radiate px-6 py-3 text-xs font-bold text-moss shadow-md hover:bg-gleam transition"
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
