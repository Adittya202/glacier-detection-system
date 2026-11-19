"use client";

import React, { useState } from "react";
import { DocsConfig } from "./docsData";

interface AdminControlDrawerProps {
  config: DocsConfig;
  onUpdateConfig: (newConfig: DocsConfig) => void;
  currentTime: Date;
  isWithinWindow: boolean;
}

export function AdminControlDrawer({
  config,
  onUpdateConfig,
  currentTime,
  isWithinWindow
}: AdminControlDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [published, setPublished] = useState(config.published);
  const [devOverride, setDevOverride] = useState(config.devOverride);
  const [startDate, setStartDate] = useState(config.startDate);
  const [endDate, setEndDate] = useState(config.endDate);
  const [savedFeedback, setSavedFeedback] = useState(false);

  const handleSave = () => {
    onUpdateConfig({
      published,
      startDate,
      endDate,
      timezone: config.timezone,
      devOverride,
    });
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2500);
  };

  return (
    <>
      {/* Floating Toggle Button (Discreet in Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-slate-300 hover:text-white hover:border-sky-500/50 shadow-2xl backdrop-blur-md transition-all group"
          title="Open Admin Publishing &amp; Schedule Controls"
        >
          <span className="material-symbols-outlined text-[17px] text-sky-400 group-hover:rotate-45 transition-transform">
            tune
          </span>
          <span className="hidden sm:inline">Publishing Controls</span>
          <span
            className={`w-2 h-2 rounded-full ${
              (published && (isWithinWindow || devOverride))
                ? "bg-emerald-400"
                : "bg-rose-400"
            }`}
          />
        </button>
      </div>

      {/* Drawer Overlay & Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs">
          <div className="w-full max-w-md bg-slate-950 border-l border-slate-800 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-sky-400 text-xl">admin_panel_settings</span>
                  <div>
                    <h3 className="font-heading font-semibold text-white text-base">Publishing Controls</h3>
                    <p className="text-[11px] text-slate-400 font-mono">GMEWS Documentation Governance</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800/80"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              {/* Status Banner */}
              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">Current Window State:</span>
                  <span
                    className={`font-semibold uppercase ${
                      isWithinWindow ? "text-emerald-400" : "text-amber-400"
                    }`}
                  >
                    {isWithinWindow ? "Scheduled Active" : "Outside Scheduled Dates"}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">Public Visibility:</span>
                  <span
                    className={`font-semibold uppercase ${
                      published && (isWithinWindow || devOverride)
                        ? "text-emerald-400"
                        : "text-rose-400"
                    }`}
                  >
                    {published && (isWithinWindow || devOverride)
                      ? "Online & Accessible"
                      : "Offline (403)"}
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono pt-1">
                  Local System Clock: {currentTime.toISOString()}
                </div>
              </div>

              {/* Main Master Switch */}
              <div className="space-y-3">
                <label className="text-xs font-semibold text-slate-200 uppercase font-mono tracking-wider block">
                  Master Visibility Toggle
                </label>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="text-xs text-slate-300">Public Documentation Enabled</span>
                  <button
                    type="button"
                    onClick={() => setPublished(!published)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      published ? "bg-emerald-500" : "bg-slate-700"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        published ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Schedule Dates */}
              <div className="space-y-4">
                <label className="text-xs font-semibold text-slate-200 uppercase font-mono tracking-wider block">
                  Scheduled Availability Window
                </label>

                <div className="space-y-1.5">
                  <span className="text-[11px] text-slate-400 font-mono">Start Date &amp; Time (UTC+6)</span>
                  <input
                    type="text"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] text-slate-400 font-mono">End Date &amp; Time (UTC+6)</span>
                  <input
                    type="text"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="p-2.5 rounded bg-slate-900/40 border border-slate-800/80 text-[11px] text-slate-400">
                  Configured Timezone: <strong className="text-slate-300">{config.timezone}</strong>
                  <br />
                  Default window: June 10, 2026, 00:00 to June 14, 2026, 23:59.
                </div>
              </div>

              {/* Dev / Testing Override */}
              <div className="space-y-3">
                <label className="text-xs font-semibold text-slate-200 uppercase font-mono tracking-wider block">
                  Dev &amp; Testing Safeguard Override
                </label>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="pr-4">
                    <span className="text-xs text-slate-300 block font-medium">Bypass Date Window for Local Dev</span>
                    <span className="text-[10px] text-slate-500 block leading-tight">
                      Allows reviewing docs outside the June 10-14 scheduled dates without altering production bounds.
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setDevOverride(!devOverride)}
                    className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
                      devOverride ? "bg-sky-500" : "bg-slate-700"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        devOverride ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Save & Apply */}
            <div className="pt-6 border-t border-slate-800 mt-6 space-y-3">
              {savedFeedback && (
                <div className="p-2 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono text-center">
                  Settings saved and applied to active session!
                </div>
              )}
              <button
                onClick={handleSave}
                className="w-full py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs tracking-wide uppercase transition-colors"
              >
                Apply Publishing Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
