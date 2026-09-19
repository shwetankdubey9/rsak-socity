"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ShieldCheck, MapPin } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

// Official logo URLs
const LOGO_URL = "https://res.cloudinary.com/sb6zkuxk/image/upload/v1789757884/WhatsApp_Image_2026-09-19_at_00.26.12.jpg";
const WORDMARK_URL = "https://res.cloudinary.com/sb6zkuxk/image/upload/v1789757884/WhatsApp_Image_2026-09-19_at_00.26.10.jpg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "GIS Gallery", href: "/gallery" },
    { name: "Publications & Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-herb/30 bg-pearl text-moss shadow-[0_2px_14px_rgba(30,48,6,0.10)] backdrop-blur-xl transition-colors">
      {/* Top Info Bar */}
      <div className="hidden md:flex items-center justify-between border-b border-herb/60 bg-herb px-6 py-1.5 text-xs text-pearl">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-gleam flex-shrink-0" />
            <span className="text-pearl/90">K.K. Puri Colony, Awas Vikas, Shivpuri Road, Jhansi (U.P.) 284003</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono">
            <span className="inline-block h-2 w-2 rounded-full bg-gleam animate-pulse" />
            <span className="text-pearl/80">GIS, Remote Sensing &amp; Social Work</span>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="tel:+919415504335"
            className="flex items-center gap-1.5 font-medium text-pearl hover:text-gleam transition"
          >
            <Phone className="h-3.5 w-3.5 text-gleam" />
            <span>91-9415504335</span>
          </a>
          <a
            href="tel:+919307909728"
            className="flex items-center gap-1.5 font-medium text-pearl hover:text-gleam transition"
          >
            <Phone className="h-3.5 w-3.5 text-gleam" />
            <span>91-9307909728</span>
          </a>
          <Link
            href="/admin"
            className="flex items-center gap-1 text-pearl/70 hover:text-pearl transition font-medium"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-gleam" />
            <span>Admin Portal</span>
          </Link>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand: Logo + Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group min-w-0 flex-shrink-0" aria-label="RSAKHI Society Home">
          {/* Logo circle */}
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white border border-herb/30 shadow-sm overflow-hidden">
            <img
              src={LOGO_URL}
              alt="RSAKHI Society official logo"
              className="h-10 w-10 object-contain"
              loading="eager"
            />
          </div>
          {/* Wordmark — hidden on very small screens, visible from sm up */}
          <img
            src={WORDMARK_URL}
            alt="RSAKHI Society wordmark"
            className="hidden sm:block h-9 w-auto max-w-[140px] md:max-w-[180px] object-contain"
            loading="eager"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-herb/10 text-herb font-semibold"
                  : "text-moss hover:text-herb hover:bg-gleam/60"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Link
            href="/admin"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-herb/40 bg-white px-3.5 py-2 text-sm font-semibold text-herb hover:bg-herb hover:text-pearl transition-colors"
          >
            <ShieldCheck className="h-4 w-4" />
            <span className="hidden xl:inline">Upload &amp; Edit CMS</span>
            <span className="inline xl:hidden">CMS</span>
          </Link>

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-radiate px-4 py-2 text-sm font-semibold text-moss shadow-sm hover:bg-moss hover:text-pearl transition-colors"
          >
            Get Map Quote
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex lg:hidden items-center justify-center rounded-lg p-2 text-moss hover:bg-gleam transition"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-herb/30 bg-pearl px-4 pt-2 pb-6 backdrop-blur-lg">
          <nav className="flex flex-col space-y-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-herb/10 text-herb font-semibold"
                    : "text-moss hover:bg-gleam/60"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-herb/30 space-y-2">
              <Link
                href="/admin"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-moss hover:text-herb rounded-lg hover:bg-gleam/40 transition"
              >
                <ShieldCheck className="h-4 w-4 text-herb" />
                Admin Dashboard &amp; CMS
              </Link>
              <a
                href="tel:+919415504335"
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-herb rounded-lg hover:bg-gleam/40 transition"
              >
                <Phone className="h-4 w-4" />
                Call 91-9415504335
              </a>
              <a
                href="tel:+919307909728"
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-herb rounded-lg hover:bg-gleam/40 transition"
              >
                <Phone className="h-4 w-4" />
                Call 91-9307909728
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
