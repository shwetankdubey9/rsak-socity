import React from "react";
import Link from "next/link";
import { Compass, MapPin, Phone, Mail, ExternalLink, ShieldCheck, Award } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function Footer() {
  return (
    <footer className="w-full border-t border-herb/50 bg-moss text-pearl/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Col 1: NGO Summary */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-herb text-pearl">
                <Compass className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-pearl text-base">RAKHI-Society</h3>
                <p className="text-xs text-gleam font-mono">Established 2017</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Remote Sensing Agriculture Knowledge Help Integral Society (RAKHI-Society). GIS mapping, remote sensing, soil health testing, watershed management, technical and social work services.
            </p>

            <div className="space-y-1 text-xs text-slate-300">
              <p><strong className="text-white">Director:</strong> Rakhi Devi</p>
              <p><strong className="text-white">Program Director &amp; GIS Lead:</strong> Anil Kumar Shukla</p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-gleam text-sm mb-3 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition">Home Overview</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">About Society & Committees</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">GIS & Agricultural Services</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition">Majith DEM & GIS Gallery</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">Research & Project Reports</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">Contact Us & Feedback</Link>
              </li>
              <li>
                <Link href="/admin" className="text-gleam hover:underline flex items-center gap-1 font-medium mt-2">
                  <ShieldCheck className="h-3.5 w-3.5" /> Client Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Certifications & Registrations */}
          <div>
            <h4 className="font-semibold text-gleam text-sm mb-3 uppercase tracking-wider">
              Govt Registrations & ISO
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Award className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <span>ISO 9001:2015 Certified Organization</span>
              </li>
              <li className="flex items-center gap-2">
                <Award className="h-4 w-4 text-herb flex-shrink-0" />
                <span>Government GeM Portal Registered</span>
              </li>
              <li className="flex items-center gap-2">
                <Award className="h-4 w-4 text-gleam flex-shrink-0" />
                <span>NITI Aayog DARPAN Portal Registered</span>
              </li>
              <li className="flex items-center gap-2">
                <Award className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                <span>MSME (Udyam Registration) Certified</span>
              </li>
              <li className="flex items-center gap-2">
                <Award className="h-4 w-4 text-gleam flex-shrink-0" />
                <span>Central Vigilance Commission Registered</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Google Map Direct Link */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gleam text-sm uppercase tracking-wider">
              Jhansi Office Location
            </h4>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gleam flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gleam flex-shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white">{siteConfig.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-herb flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white truncate">{siteConfig.email}</a>
              </div>
            </div>

            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-radiate border border-radiate px-4 py-2.5 text-xs font-semibold text-moss hover:bg-gleam hover:border-gleam transition"
            >
              <MapPin className="h-4 w-4 text-gleam" />
              <span>Open Google Maps Directions</span>
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
            </a>

            <div className="pt-2">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-gleam">Follow RAKHI-Society</p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={siteConfig.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow RAKHI-Society on X"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-herb bg-moss px-3 py-2 text-xs font-semibold text-pearl transition hover:border-gleam hover:text-gleam"
                >
                  <span aria-hidden="true" className="font-bold">𝕏</span>
                  <span>X</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow RAKHI-Society on Facebook"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-herb bg-moss px-3 py-2 text-xs font-semibold text-pearl transition hover:border-gleam hover:text-gleam"
                >
                  <span aria-hidden="true" className="font-bold">f</span>
                  <span>Facebook</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Remote Sensing Agriculture Knowledge Help Integral Society. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-radiate/10 px-3.5 py-1 text-xs font-bold text-gleam border border-herb/30 shadow-sm">
              ✨ Project made by Shwetank Dubey
            </span>
            <p className="text-[11px] text-slate-400">
              Next.js 15 & React 19 • Jhansi, UP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
