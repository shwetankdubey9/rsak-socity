import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ExternalLink, ShieldCheck, Award } from "lucide-react";
import { siteConfig } from "@/lib/seo";

// Official logo URL
const LOGO_URL = "https://res.cloudinary.com/sb6zkuxk/image/upload/v1789838393/ChatGPT_Image_Sep_19_2026_10_49_22_PM.png";

export default function Footer() {
  return (
    <footer className="w-full border-t border-herb/50 bg-moss text-pearl/90">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          {/* Col 1: NGO Summary */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10 border border-pearl/20 overflow-hidden">
                <img
                  src={LOGO_URL}
                  alt="RSAKHI Society official logo"
                  className="h-full w-full object-cover object-center rounded-full"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-bold text-pearl text-base leading-tight">RAKHI-Society</h3>
                <p className="text-sm text-gleam font-mono mt-0.5">Established 2017</p>
              </div>
            </div>

            <p className="text-sm text-pearl/75 leading-relaxed">
              Remote Sensing Agriculture Knowledge Help Integral Society (RAKHI-Society). GIS mapping, remote sensing, soil health testing, watershed management, technical and social work services.
            </p>

            <div className="space-y-1 text-sm text-pearl/80">
              <p><strong className="text-pearl">Director:</strong> Rakhi Devi</p>
              <p><strong className="text-pearl">GIS Lead:</strong> Anil Kumar Shukla</p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-gleam text-sm mb-4 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-pearl/80">
              <li>
                <Link href="/" className="hover:text-white dark:hover:text-gleam transition">Home Overview</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white dark:hover:text-gleam transition">About Society &amp; Committees</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white dark:hover:text-gleam transition">GIS &amp; Agricultural Services</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white dark:hover:text-gleam transition">Majith DEM &amp; GIS Gallery</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white dark:hover:text-gleam transition">Research &amp; Project Reports</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white dark:hover:text-gleam transition">Contact Us &amp; Feedback</Link>
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
            <h4 className="font-semibold text-gleam text-sm mb-4 uppercase tracking-wider">
              Govt Registrations &amp; ISO
            </h4>
            <ul className="space-y-2.5 text-sm text-pearl/80">
              <li className="flex items-center gap-2">
                <Award className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <span>ISO 9001:2015 Certified</span>
              </li>
              <li className="flex items-center gap-2">
                <Award className="h-4 w-4 text-gleam flex-shrink-0" />
                <span>Government GeM Portal Registered</span>
              </li>
              <li className="flex items-center gap-2">
                <Award className="h-4 w-4 text-gleam flex-shrink-0" />
                <span>NITI Aayog DARPAN Portal</span>
              </li>
              <li className="flex items-center gap-2">
                <Award className="h-4 w-4 text-pearl/60 dark:text-pearl/85 flex-shrink-0" />
                <span>MSME (Udyam Registration)</span>
              </li>
              <li className="flex items-center gap-2">
                <Award className="h-4 w-4 text-gleam flex-shrink-0" />
                <span>Central Vigilance Commission</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gleam text-sm uppercase tracking-wider">
              Jhansi Office Location
            </h4>

            <div className="space-y-3 text-sm text-pearl/80">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gleam flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gleam flex-shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white font-medium">{siteConfig.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gleam flex-shrink-0" />
                <a href={`tel:${siteConfig.phoneAlt}`} className="hover:text-white font-medium">{siteConfig.phoneAlt}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gleam flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white break-all">{siteConfig.email}</a>
              </div>
            </div>

            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-radiate border border-radiate px-4 py-2.5 text-sm font-semibold text-moss hover:bg-gleam hover:border-gleam transition"
            >
              <MapPin className="h-4 w-4" />
              <span>Open Google Maps</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <div className="pt-1">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gleam">Follow RAKHI-Society</p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={siteConfig.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow RAKHI-Society on X"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-pearl/20 bg-pearl/10 px-3 py-2 text-sm font-semibold text-pearl transition hover:border-gleam hover:text-gleam"
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
                  className="inline-flex items-center gap-1.5 rounded-lg border border-pearl/20 bg-pearl/10 px-3 py-2 text-sm font-semibold text-pearl transition hover:border-gleam hover:text-gleam"
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
        <div className="mt-12 border-t border-pearl/10 dark:border-pearl/20 pt-6 text-center text-sm text-pearl/50 dark:text-pearl/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Remote Sensing Agriculture Knowledge Help Integral Society. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-radiate/10 px-3.5 py-1 text-sm font-bold text-gleam border border-herb/30 shadow-sm">
              ✨ Project made by{" "}
              <a
                href="https://shwetank-portfolio-swart.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Shwetank Dubey's portfolio"
                className="underline-offset-2 transition-colors duration-200 hover:text-radiate hover:underline focus-visible:text-radiate"
              >
                Shwetank Dubey
              </a>
            </span>
            <p className="text-xs text-pearl/40 dark:text-pearl/70">
              Next.js &bull; Jhansi, UP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
