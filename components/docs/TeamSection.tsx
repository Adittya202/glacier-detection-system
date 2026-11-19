import React from "react";
import { TEAM_POCO } from "./docsData";

export function TeamSection() {
  return (
    <section id="team" className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 md:p-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-400/20 text-sky-400 text-xs font-mono uppercase tracking-wider mb-2">
            <span className="material-symbols-outlined text-[15px]">psychology</span>
            AI Congress Delegation • Founding Team
          </div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight">
            {TEAM_POCO.teamName}
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            {TEAM_POCO.leadQuote}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <span className="px-3 py-1.5 rounded-lg bg-sky-950/60 border border-sky-500/30 text-xs font-mono text-sky-300">
            AI Congress Presentation
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            Cross-Disciplinary R&amp;D
          </span>
        </div>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM_POCO.members.map((member) => {
          // Compute clean initials
          const initials = member.name
            .split(" ")
            .filter(Boolean)
            .map((part) => part[0])
            .slice(0, 2)
            .join("")
            .toUpperCase();

          return (
            <div
              key={member.name}
              className="group relative flex flex-col justify-between rounded-xl bg-slate-950/80 border border-slate-800/90 hover:border-sky-500/40 p-6 transition-all duration-200 hover:shadow-xl hover:shadow-sky-500/5 hover:-translate-y-0.5"
            >
              <div className="space-y-4">
                {/* Clean Neutral Avatar with Initials */}
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-slate-800 via-slate-850 to-sky-950/80 border border-sky-500/30 flex items-center justify-center text-sky-300 font-heading font-bold text-xl shadow-inner group-hover:border-sky-400 transition-colors">
                    {initials}
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider bg-slate-900 border border-slate-700/80 text-sky-400">
                    {member.badge}
                  </span>
                </div>

                {/* Name & Role */}
                <div>
                  <h3 className="text-lg font-heading font-semibold text-white group-hover:text-sky-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-400 mt-0.5">
                    {member.role}
                  </p>
                </div>

                {/* Focus / Scope */}
                <p className="text-xs text-slate-300/90 leading-relaxed min-h-[3rem]">
                  {member.focus}
                </p>
              </div>

              {/* Competency Tags */}
              <div className="pt-4 border-t border-slate-800/80 mt-4">
                <span className="text-[10px] uppercase font-mono text-slate-300 tracking-wider block mb-2 font-medium">
                  Domain Specialization
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
