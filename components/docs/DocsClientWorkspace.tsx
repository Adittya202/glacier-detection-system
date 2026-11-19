"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { DEFAULT_DOCS_CONFIG, DocsConfig } from "./docsData";
import { PitchDeckSection } from "./PitchDeckSection";
import { TeamSection } from "./TeamSection";
import { TechDocsSection } from "./TechDocsSection";
import { LiveSyncSection } from "./LiveSyncSection";
import { AdminControlDrawer } from "./AdminControlDrawer";

type TabMode = "all" | "pitch" | "tech" | "live" | "team";

export function DocsClientWorkspace() {
  const [config, setConfig] = useState<DocsConfig>(DEFAULT_DOCS_CONFIG);
  const [activeTab, setActiveTab] = useState<TabMode>("all");
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [searchQuery, setSearchQuery] = useState("");

  // Update clock every 10 seconds for real-time window validation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  // Compute scheduled window validation
  const startTs = new Date(config.startDate).getTime();
  const endTs = new Date(config.endDate).getTime();
  const nowTs = currentTime.getTime();
  const isWithinWindow = nowTs >= startTs && nowTs <= endTs;

  // Determine if public page should render
  const isVisible = config.published && (isWithinWindow || config.devOverride);

  // If offline / access blocked
  if (!isVisible) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-slate-950 text-center min-h-[calc(100vh-52px)]">
        <div className="max-w-md p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5 shadow-2xl">
          <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mx-auto">
            <span className="material-symbols-outlined text-2xl">lock</span>
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-heading font-bold text-white">Documentation Unavailable</h1>
            <p className="text-xs text-slate-400 leading-relaxed">
              Public access to GMEWS technical whitepapers and investor pitch documents is currently restricted by the system administrator.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 text-[11px] font-mono text-slate-400 space-y-1">
            <div>Scheduled Window:</div>
            <div className="text-sky-400">June 10, 2026 00:00 → June 14, 2026 23:59</div>
            <div className="text-[10px] text-slate-500">Asia/Dhaka (UTC+6)</div>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Return to Mission Control
          </Link>
        </div>

        {/* Admin drawer remains reachable to re-enable/test */}
        <AdminControlDrawer
          config={config}
          onUpdateConfig={setConfig}
          currentTime={currentTime}
          isWithinWindow={isWithinWindow}
        />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-[#070b14] text-slate-200 min-h-[calc(100vh-52px)] overflow-y-auto">
      {/* Top Banner Navigation Bar */}
      <div className="sticky top-0 z-30 bg-slate-950/90 border-b border-slate-800/80 backdrop-blur-md px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800"
              title="Return to Main Workspace"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-white text-base">GMEWS Knowledge Base</span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  Live /docs
                </span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hidden sm:inline-block">
                  Public Available
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Team Poco • AI Congress Presentation • Cryosphere Earth Observation</p>
            </div>
          </div>

          {/* Quick Search & Filters */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-56">
              <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[15px] text-slate-400">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search specs, models..."
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 font-mono"
              />
            </div>

            {/* Quick Export / Print */}
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs text-slate-300 border border-slate-800 font-mono flex items-center gap-1.5 transition-colors"
              title="Export as PDF / Print Documentation"
            >
              <span className="material-symbols-outlined text-[15px]">print</span>
              <span className="hidden sm:inline">Export PDF</span>
            </button>
          </div>
        </div>

        {/* View Selection Tabs */}
        <div className="max-w-7xl mx-auto flex items-center gap-2 mt-3 pt-2 border-t border-slate-800/60 overflow-x-auto">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3 py-1 rounded-md text-xs font-mono transition-colors whitespace-nowrap ${
              activeTab === "all"
                ? "bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            All Sections (Complete Dossier)
          </button>
          <button
            onClick={() => setActiveTab("pitch")}
            className={`px-3 py-1 rounded-md text-xs font-mono transition-colors whitespace-nowrap ${
              activeTab === "pitch"
                ? "bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            1. YC Pitch Deck
          </button>
          <button
            onClick={() => setActiveTab("team")}
            className={`px-3 py-1 rounded-md text-xs font-mono transition-colors whitespace-nowrap ${
              activeTab === "team"
                ? "bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            2. Team Poco (AI Congress)
          </button>
          <button
            onClick={() => setActiveTab("tech")}
            className={`px-3 py-1 rounded-md text-xs font-mono transition-colors whitespace-nowrap ${
              activeTab === "tech"
                ? "bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            3. Technical Whitepaper
          </button>
          <button
            onClick={() => setActiveTab("live")}
            className={`px-3 py-1 rounded-md text-xs font-mono transition-colors whitespace-nowrap ${
              activeTab === "live"
                ? "bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            4. Live Telemetry View
          </button>
        </div>
      </div>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto w-full px-6 py-8 space-y-12">
        {(activeTab === "all" || activeTab === "pitch") && <PitchDeckSection />}
        {(activeTab === "all" || activeTab === "team") && <TeamSection />}
        {(activeTab === "all" || activeTab === "tech") && <TechDocsSection />}
        {(activeTab === "all" || activeTab === "live") && <LiveSyncSection />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-8 px-6 text-center text-xs text-slate-500 space-y-2">
        <div className="font-mono text-slate-400">
          Glacier Monitoring &amp; Early Warning System (GMEWS) • Team Poco • AI Congress 2026
        </div>
        <p className="max-w-xl mx-auto text-[11px] text-slate-500">
          Engineered for continuous cryosphere observation, high-altitude hazard detection, and rapid community early warning.
        </p>
      </footer>

      {/* Admin Publishing Control Drawer */}
      <AdminControlDrawer
        config={config}
        onUpdateConfig={setConfig}
        currentTime={currentTime}
        isWithinWindow={isWithinWindow}
      />
    </div>
  );
}
