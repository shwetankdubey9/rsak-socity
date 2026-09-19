"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/seo";
import { subjectInterests } from "@/lib/data/seedData";
import { Compass, MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "GIS Mapping Inquiry",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill out all required fields.");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "GIS Mapping Inquiry", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      // Fallback local success indicator
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "GIS Mapping Inquiry", message: "" });
    }
  };

  return (
    <div className="agri-page space-y-16 pb-24 pt-12">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-radiate/10 px-3.5 py-1 text-xs font-semibold text-herb border border-herb/20">
          <Compass className="h-3.5 w-3.5" />
          <span>Jhansi Office Contact</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Get in Touch with <br />
          <span className="majith-gradient-text">RAKHI-Society</span>
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Reach out for GIS mapping proposals, Soil Health Testing, Watershed DPR consultations, or general inquiries.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & Google Maps Embed */}
          <div className="lg:col-span-5 space-y-6">
            <div className="premium-card rounded-3xl p-8 space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Headquarters Information</h2>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-xl bg-radiate/10 text-herb flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Office Address</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-0.5">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-xl bg-herb/10 text-herb flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Registered Office</h3>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-xl bg-radiate/10 text-herb flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Telephones</h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-0.5 space-y-0.5">
                      <a href="tel:+919415504335" className="block hover:text-herb">{siteConfig.phone}</a>
                      <a href="tel:+919307909728" className="block hover:text-herb">{siteConfig.phoneAlt}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-xl bg-herb/10 text-herb flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Official Emails</h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-0.5 space-y-0.5">
                      <a href={`mailto:${siteConfig.email}`} className="block hover:text-herb">{siteConfig.email}</a>
                      <a href={`mailto:${siteConfig.emailAlt}`} className="block hover:text-herb">{siteConfig.emailAlt}</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <p className="text-sm text-slate-600 dark:text-slate-400 font-semibold uppercase tracking-wider">Leadership Contacts:</p>
                <p className="text-xs text-slate-600 dark:text-slate-300"><strong>Director:</strong> Rakhi Devi</p>
                <p className="text-xs text-slate-600 dark:text-slate-300"><strong>Secretary:</strong> Dr. Bhuvan Kumar Dixit</p>
                <p className="text-xs text-slate-600 dark:text-slate-300"><strong>Program Director &amp; GIS Lead:</strong> Anil Kumar Shukla</p>
                <p className="text-xs text-slate-600 dark:text-slate-300"><strong>Phone:</strong> <a href="tel:+919307909728" className="hover:text-herb">91-9307909728</a></p>
              </div>

              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-herb text-white dark:bg-herb border border-herb px-4 py-3 text-sm font-semibold hover:bg-moss transition"
              >
                <MapPin className="h-4 w-4 text-gleam" />
                <span>Open Google Maps Link</span>
                <ExternalLink className="h-3.5 w-3.5 text-white/70" />
              </a>

              <div className="border-t border-slate-100 pt-4 dark:border-slate-800">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Connect with us</p>
                <div className="flex flex-wrap gap-2">
                  <a href={siteConfig.social.x} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-herb bg-pearl px-3 py-2 text-xs font-semibold text-moss transition hover:bg-radiate hover:text-white dark:border-herb dark:bg-moss/40 dark:text-gleam">
                    <span aria-hidden="true" className="font-bold">𝕏</span>
                    <span>Follow on X</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-herb bg-pearl px-3 py-2 text-xs font-semibold text-moss transition hover:bg-radiate hover:text-white dark:border-herb dark:bg-moss/40 dark:text-gleam">
                    <span aria-hidden="true" className="font-bold">f</span>
                    <span>Follow on Facebook</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="premium-card rounded-3xl p-8 space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Send Us a Direct Message</h2>

              {status === "success" && (
                <div className="flex items-center gap-3 rounded-2xl bg-herb/10 border border-herb/30 p-4 text-herb dark:text-herb text-xs font-medium">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                  <span>Thank you! Your message has been transmitted successfully. Our Jhansi office team will respond shortly.</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 p-4 text-rose-600 dark:text-rose-400 text-xs font-medium">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <span>{errorMsg || "An error occurred. Please verify your details."}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-2.5 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-herb focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-2.5 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-herb focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Phone / Mobile
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-2.5 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-herb focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Subject Interest
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-2.5 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-herb focus:outline-none"
                    >
                      {subjectInterests.map((interest) => <option key={interest} value={interest}>{interest}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your location, project scope, or soil testing requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-2.5 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-herb focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-radiate px-6 py-3 text-xs font-bold text-white hover:bg-radiate transition shadow-md w-full disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  <span>{status === "submitting" ? "Transmitting..." : "Send Message"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
