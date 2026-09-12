"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Compass, Phone, ShieldCheck, MapPin } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

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
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors">
      {/* Top Telemetry Notification Bar */}
      <div className="hidden md:flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800/50 bg-slate-900 px-6 py-1.5 text-xs text-slate-300">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-pink-400" />
            <span>K.K. Puri Colony, Awas Vikas, Shivpuri Road, Jhansi (U.P.) 284003</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 font-mono">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>GIS, Remote Sensing &amp; Social Work</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:+919415504335"
            className="flex items-center gap-1.5 hover:text-sky-400 transition"
          >
            <Phone className="h-3.5 w-3.5 text-sky-400" />
            <span>Phone: 91-9415504335</span>
          </a>
          <Link
            href="/admin"
            className="flex items-center gap-1 text-slate-400 hover:text-white transition font-medium"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />
            <span>Client Admin Portal</span>
          </Link>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 p-0.5 shadow-sm group-hover:bg-sky-700 transition-colors">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950">
              <Compass className="h-5 w-5 text-sky-400 group-hover:rotate-45 transition-transform duration-500" />
            </div>
          </div>
          <div>
            <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white">
              RAKHI-Society
            </span>
            <span className="block text-[10px] font-medium text-slate-500 dark:text-slate-400 tracking-wide uppercase">
              Remote Sensing & GIS • Jhansi
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 font-semibold"
                  : "text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="/admin"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-sky-50 border border-sky-200 px-3.5 py-2 text-xs font-bold text-sky-700 hover:bg-sky-600 hover:text-white transition-colors shadow-sm"
          >
            <ShieldCheck className="h-4 w-4" />
            <span>Upload & Edit CMS</span>
          </Link>

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-sky-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-sky-700 transition-colors"
          >
            Get Map Quote
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex lg:hidden items-center justify-center rounded-lg p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 px-4 pt-2 pb-6 backdrop-blur-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 font-semibold"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
              <Link
                href="/admin"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-sky-500"
              >
                <ShieldCheck className="h-4 w-4 text-sky-500" />
                Admin Dashboard & CMS
              </Link>
              <a
                href="tel:+919415504335"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400"
              >
                <Phone className="h-4 w-4" />
                Call 91-9415504335
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
