"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Compass, ShieldCheck, Lock, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const { error } = await createClient().auth.signInWithPassword({ email, password });
      if (error) {
        setErrorMsg("Authentication failed. Please check credentials.");
        return;
      }

      // Retained temporarily for the existing route middleware; Supabase owns the real session.
      document.cookie = `rsak_admin_session=true; path=/; max-age=${60 * 60 * 24 * 7}`;
      router.push("/admin");
      router.refresh();
    } catch {
      setErrorMsg("Authentication failed. Please check credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-3">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-pink-500 via-sky-500 to-emerald-400 p-0.5 shadow-lg">
            <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-slate-950 text-sky-400">
              <ShieldCheck className="h-7 w-7" />
            </div>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Client Admin Portal Login
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Remote Sensing Agriculture Knowledge Help Integral Society CMS
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-xl space-y-6">
          <div className="rounded-2xl bg-sky-500/10 border border-sky-500/20 p-3 text-[11px] text-sky-600 dark:text-sky-400 space-y-1">
            <p className="font-bold flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5" /> Demo Login Credentials Pre-Filled:
            </p>
            <p className="font-mono">Use your Supabase administrator email and password.</p>
          </div>

          {errorMsg && (
            <div className="rounded-xl bg-rose-500/10 border border-rose-500/30 p-3 text-xs text-rose-600 dark:text-rose-400">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Admin Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-xs font-bold text-white hover:bg-sky-500 transition shadow-md w-full disabled:opacity-50"
            >
              <span>{loading ? "Authenticating..." : "Sign In to CMS"}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
