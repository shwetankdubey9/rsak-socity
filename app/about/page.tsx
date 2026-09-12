import React from "react";
import { constructMetadata } from "@/lib/seo";
import { initialCommitteeMembers, initialProjects, subjectInterests } from "@/lib/data/seedData";
import { Compass, Users, ShieldCheck, HardDrive, Tags } from "lucide-react";

export const metadata = constructMetadata({
  title: "About Us & Team | RAKHI-Society",
  description: "Remote Sensing Agriculture Knowledge Help Integral Society (RAKHI-Society) provides GIS mapping, remote sensing, watershed management, soil health testing and related work.",
});

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-20 pt-10">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3.5 py-1 text-xs font-semibold text-sky-500 border border-sky-500/20">
          <Compass className="h-3.5 w-3.5" />
          <span>About RAKHI-Society</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Remote Sensing Agriculture Knowledge Help <br />
          <span className="majith-gradient-text">Integral Society (RAKHI-Society)</span>
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Remote Sensing Agriculture Knowledge Help Integral Society (RAKHI-Society), established in 2017 under Program Director Rakhi Shukla and Remote Sensing Lead Anil Kumar Shukla (RS&amp;GIS-(IIRS-ISRO)). Delivering high-precision 3D GIS mapping, soil, other type social work and watershed development across Bundelkhand, Uttar Pradesh, and India.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 space-y-4 shadow-sm">
            <div className="h-12 w-12 rounded-2xl bg-pink-500/10 text-pink-500 flex items-center justify-center font-bold">
              Vision
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              A just, enlightened, healthy, and democratic Bundelkhand free from hunger, poverty, environmental degradation, and all forms of exploitation based on age, sex, religion, and ethnicity.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 space-y-4 shadow-sm">
            <div className="h-12 w-12 rounded-2xl bg-sky-500/10 text-sky-500 flex items-center justify-center font-bold">
              Mission
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              To work with people whose lives are dominated by extreme poverty, illiteracy, and environmental vulnerability. Through multifaceted GIS mapping, soil testing, and watershed interventions, we strive to bring about positive change in the quality of life of Bundelkhand residents.
            </p>
          </div>
        </div>
      </section>

      {/* Governing Body Table */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-3">
          <Users className="h-6 w-6 text-sky-500" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Organization Team
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Designation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {initialCommitteeMembers.map((member) => (
                <tr key={member.sn} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="p-4 font-semibold text-slate-900 dark:text-slate-100">{member.name}</td>
                  <td className="p-4 text-slate-900 dark:text-slate-200 font-medium">{member.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-3">
          <Tags className="h-6 w-6 text-sky-500" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Subject Interest</h2>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-wrap gap-3">
            {subjectInterests.map((interest) => (
              <span key={interest} className="rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 text-xs font-medium text-sky-800 dark:border-sky-900 dark:bg-sky-950/40 dark:text-sky-300">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Management Committees */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-6 w-6 text-pink-500" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Operational Committees
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-2">
            <h3 className="font-bold text-base text-sky-500">Project Management Committee</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Oversees vital aspects of project setup, regional and district level coordination, thematic team management, and strategic policy decisions.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-2">
            <h3 className="font-bold text-base text-pink-500">Procurement & Purchase Committee</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Handles center needs assessment, market surveys, quotation invites, purchase orders, and AMC finalizations with multi-member approvals.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-2">
            <h3 className="font-bold text-base text-emerald-500">Financial Advisory Committee</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Addresses HR development, personal matters, infrastructure maintenance, financial accounting, and auditing standards.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-2">
            <h3 className="font-bold text-base text-amber-500">Gender Mainstreaming Committee</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Maintains gender-sensitive workplace standards, organizes sensitization workshops, and handles workplace compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment & Infrastructure */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-3">
          <HardDrive className="h-6 w-6 text-emerald-500" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Equipment & Infrastructure Facilities
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
          <p className="text-xs text-slate-600 dark:text-slate-300">
            <strong>Fixed Assets:</strong> 1000 Square Feet well-furnished residential office having training facility in 800 Square Feet at Jhansi.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
            <div className="rounded-xl bg-slate-50 dark:bg-slate-950 p-3 border border-slate-200 dark:border-slate-800">
              <p className="text-xl font-bold text-sky-500">7</p>
              <p className="text-[11px] text-slate-500">Computer Desktops</p>
            </div>
            <div className="rounded-xl bg-slate-50 dark:bg-slate-950 p-3 border border-slate-200 dark:border-slate-800">
              <p className="text-xl font-bold text-sky-500">3</p>
              <p className="text-[11px] text-slate-500">Dell Laptops</p>
            </div>
            <div className="rounded-xl bg-slate-50 dark:bg-slate-950 p-3 border border-slate-200 dark:border-slate-800">
              <p className="text-xl font-bold text-emerald-500">3</p>
              <p className="text-[11px] text-slate-500">Printers</p>
            </div>
            <div className="rounded-xl bg-slate-50 dark:bg-slate-950 p-3 border border-slate-200 dark:border-slate-800">
              <p className="text-xl font-bold text-emerald-500">2</p>
              <p className="text-[11px] text-slate-500">Scanners</p>
            </div>
            <div className="rounded-xl bg-slate-50 dark:bg-slate-950 p-3 border border-slate-200 dark:border-slate-800">
              <p className="text-xl font-bold text-pink-500">6</p>
              <p className="text-[11px] text-slate-500">Lamination Machines</p>
            </div>
            <div className="rounded-xl bg-slate-50 dark:bg-slate-950 p-3 border border-slate-200 dark:border-slate-800">
              <p className="text-xl font-bold text-pink-500">Active</p>
              <p className="text-[11px] text-slate-500">DGPS (GPS) Field Gear</p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Project History Table */}
      <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Projects Handled in Past (Full Registry)
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Complete official list of GIS mapping, watershed, and soil health projects executed by RSAK Society.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-4">S.N.</th>
                <th className="p-4">Name of the Project</th>
                <th className="p-4">Funder / Partner</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Period</th>
                <th className="p-4">Beneficiary Region</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {initialProjects.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="p-4 font-mono font-bold text-sky-500">{p.sn}</td>
                  <td className="p-4 font-semibold text-slate-900 dark:text-slate-100">{p.name}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400">{p.funder}</td>
                  <td className="p-4 font-mono text-emerald-600 dark:text-emerald-400">{p.amount || "-"}</td>
                  <td className="p-4 font-mono text-slate-500">{p.period}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">{p.beneficiary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
