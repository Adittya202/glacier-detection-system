import React from "react";

export function TechDocsSection() {
  return (
    <div className="space-y-12">
      {/* Product Overview & System Architecture */}
      <section id="tech-architecture" className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-sky-400 text-2xl">account_tree</span>
            <div>
              <h2 className="text-xl md:text-2xl font-heading font-semibold text-white">System Architecture &amp; Topography</h2>
              <p className="text-xs text-slate-400">Complete frontend, processing pipeline, and hydrodynamic simulation stack</p>
            </div>
          </div>
          <span className="text-xs font-mono text-sky-400 uppercase">Architecture Spec</span>
        </div>

        {/* Visual Architecture Diagram */}
        <div className="rounded-xl bg-slate-950 p-6 border border-slate-800/80 overflow-x-auto">
          <div className="min-w-[680px] flex flex-col gap-4 font-mono text-xs">
            {/* Layer 1: Ingestion */}
            <div className="p-4 rounded-lg bg-slate-900/90 border border-sky-500/20">
              <span className="text-[11px] font-semibold text-sky-400 uppercase tracking-wider block mb-2">
                Layer 1: Earth Observation Ingestion &amp; Sensor Feeds
              </span>
              <div className="grid grid-cols-4 gap-3">
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                  <div className="text-white font-bold">Sentinel-1B</div>
                  <div className="text-[10px] text-slate-400">C-Band SAR / Coherence</div>
                  <div className="text-[9px] text-emerald-400 mt-1">Status: Active</div>
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                  <div className="text-white font-bold">Landsat-9</div>
                  <div className="text-[10px] text-slate-400">SWIR Thermal / Multispectral</div>
                  <div className="text-[9px] text-emerald-400 mt-1">Status: Active</div>
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                  <div className="text-white font-bold">ICESat-2</div>
                  <div className="text-[10px] text-slate-400">ATL06 Photon Altimetry</div>
                  <div className="text-[9px] text-emerald-400 mt-1">Status: Active</div>
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                  <div className="text-white font-bold">Ground Hydrology</div>
                  <div className="text-[10px] text-slate-400">Nubra/Shyok Gauge Telemetry</div>
                  <div className="text-[9px] text-emerald-400 mt-1">Status: Synced</div>
                </div>
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="flex justify-center text-sky-400">
              <span className="material-symbols-outlined">arrow_downward</span>
            </div>

            {/* Layer 2: Core Processing & Models */}
            <div className="p-4 rounded-lg bg-slate-900/90 border border-purple-500/20">
              <span className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider block mb-2">
                Layer 2: Analytics &amp; Hydrodynamic Modeling Engine
              </span>
              <div className="grid grid-cols-3 gap-3">
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                  <div className="text-white font-bold">DInSAR Crevasse Triage</div>
                  <div className="text-[10px] text-slate-400">Transverse shear dilation &amp; velocity tracking</div>
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                  <div className="text-white font-bold">Dam-Break Hydrograph</div>
                  <div className="text-[10px] text-slate-400">Q_peak calculation &amp; impulse wave propagation</div>
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                  <div className="text-white font-bold">Risk Scoring &amp; Triage</div>
                  <div className="text-[10px] text-slate-400">Threshold categorizer (Nominal → Advisory → Critical)</div>
                </div>
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="flex justify-center text-purple-400">
              <span className="material-symbols-outlined">arrow_downward</span>
            </div>

            {/* Layer 3: Presentation Workspaces */}
            <div className="p-4 rounded-lg bg-slate-900/90 border border-emerald-500/20">
              <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block mb-2">
                Layer 3: Next.js 16 Presentation &amp; Operator Interface
              </span>
              <div className="grid grid-cols-5 gap-2 text-center">
                <div className="p-2 rounded bg-slate-950 border border-slate-800 text-white font-bold text-[11px]">
                  Mission Control (/)
                </div>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 text-white font-bold text-[11px]">
                  Surveillance Hub (/dashboard)
                </div>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 text-white font-bold text-[11px]">
                  GLOF Engine (/glof-modeling)
                </div>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 text-white font-bold text-[11px]">
                  Investigation (/investigate)
                </div>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 text-white font-bold text-[11px]">
                  Observations (/observations)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Matrix with Live Status */}
      <section id="tech-features" className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-emerald-400 text-2xl">fact_check</span>
            <div>
              <h2 className="text-xl md:text-2xl font-heading font-semibold text-white">Feature Matrix &amp; Implementation Status</h2>
              <p className="text-xs text-slate-400">Differentiating currently operational capabilities from upcoming features</p>
            </div>
          </div>
          <span className="text-xs font-mono text-emerald-400 uppercase">Audit Verified</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-800">
            <thead className="bg-slate-950/90 text-slate-300 font-mono">
              <tr>
                <th className="p-3 border-b border-slate-800">Module / Capability</th>
                <th className="p-3 border-b border-slate-800">Category</th>
                <th className="p-3 border-b border-slate-800">Route / Component</th>
                <th className="p-3 border-b border-slate-800">Delivery Status</th>
                <th className="p-3 border-b border-slate-800">Verification Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="p-3 font-semibold text-white">Interactive Mission Control &amp; Map</td>
                <td className="p-3 font-mono text-slate-400">Geospatial UI</td>
                <td className="p-3 font-mono text-sky-400">/ &amp; CleanMissionControl</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Live Operational
                  </span>
                </td>
                <td className="p-3 text-slate-400">Full vector map, telemetry timeline, and site selection.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">GLOF Dam-Break Hydrograph Modeling</td>
                <td className="p-3 font-mono text-slate-400">Simulation</td>
                <td className="p-3 font-mono text-sky-400">/glof-modeling</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Live Operational
                  </span>
                </td>
                <td className="p-3 text-slate-400">Preset scenarios, breach width sliders, wave arrival to settlements.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Target Triage &amp; DInSAR Crevasse Dilation</td>
                <td className="p-3 font-mono text-slate-400">Investigation</td>
                <td className="p-3 font-mono text-sky-400">/investigate</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Live Operational
                  </span>
                </td>
                <td className="p-3 text-slate-400">Coherence loss analysis and displacement metrics.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Glacier Basin Inventory &amp; Attributes</td>
                <td className="p-3 font-mono text-slate-400">Data Catalog</td>
                <td className="p-3 font-mono text-sky-400">/glaciers</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Live Operational
                  </span>
                </td>
                <td className="p-3 text-slate-400">Siachen, Teram Shehr, Saltoro, Nubra datasets loaded.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Observations Feed &amp; Scene Filtering</td>
                <td className="p-3 font-mono text-slate-400">Sensor Catalog</td>
                <td className="p-3 font-mono text-sky-400">/observations</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Live Operational
                  </span>
                </td>
                <td className="p-3 text-slate-400">Scene search across Sentinel-1B, Landsat-9, ICESat-2.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Automated STAC API Ingestion Daemon</td>
                <td className="p-3 font-mono text-slate-400">Cloud Pipeline</td>
                <td className="p-3 font-mono text-slate-400">Backend / Workers</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    Upcoming (Phase 2)
                  </span>
                </td>
                <td className="p-3 text-slate-400">Direct polling of ESA Copernicus Hub &amp; Planetary Computer.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Automated Multi-Channel SMS/CAP Emergency Broadcast</td>
                <td className="p-3 font-mono text-slate-400">Dissemination</td>
                <td className="p-3 font-mono text-slate-400">Alerting Gateway</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                    Planned (Phase 3)
                  </span>
                </td>
                <td className="p-3 text-slate-400">Integration with Common Alerting Protocol (CAP) civil warning servers.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Technology Stack & Tooling */}
      <section id="tech-stack" className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-sky-400 text-2xl">memory</span>
            <h2 className="text-xl md:text-2xl font-heading font-semibold text-white">Full Technology Stack</h2>
          </div>
          <span className="text-xs font-mono text-sky-400 uppercase">Engineering Stack</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-2">
            <span className="text-[10px] font-mono text-sky-400 uppercase">Core Framework</span>
            <h3 className="text-base font-bold text-white">Next.js 16</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              App Router architecture with React 19 server components, dynamic client hydrations, and responsive layout shells.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-2">
            <span className="text-[10px] font-mono text-teal-400 uppercase">Language &amp; Types</span>
            <h3 className="text-base font-bold text-white">TypeScript 5</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Strictly typed telemetry, glacier geospatial records, satellite metadata catalogs, and simulation state types.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-2">
            <span className="text-[10px] font-mono text-purple-400 uppercase">Styling &amp; Design</span>
            <h3 className="text-base font-bold text-white">Tailwind CSS v4</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Next-generation CSS utility engine with dark-mode optimized high-contrast palettes for tactical operations.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-2">
            <span className="text-[10px] font-mono text-emerald-400 uppercase">Visualization</span>
            <h3 className="text-base font-bold text-white">Vector &amp; Canvas SVG</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Hardware-accelerated SVG interactive topographic maps, bathymetric gauges, and real-time dam-break hydrographs.
            </p>
          </div>
        </div>
      </section>

      {/* Hydrodynamic & AI/Physics Model Details */}
      <section id="tech-models" className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-purple-400 text-2xl">functions</span>
            <div>
              <h2 className="text-xl md:text-2xl font-heading font-semibold text-white">Hydrodynamic Modeling &amp; Physics Core</h2>
              <p className="text-xs text-slate-400">Mathematical formulation of GLOF breach discharges and wave propagation</p>
            </div>
          </div>
          <span className="text-xs font-mono text-purple-400 uppercase">Empirical Physics</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-3">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-sky-400 text-[18px]">water_drop</span>
              Froehlich (2008) Breach Peak Discharge
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Calculates the catastrophic peak outflow rate when moraine dams or subglacial ice walls give way:
            </p>
            <div className="p-3 rounded bg-slate-900 border border-slate-800 text-sky-300 font-mono text-xs">
              Q_peak = 0.6071 • (V_w)^0.295 • (h_w)^1.24
            </div>
            <p className="text-[11px] text-slate-400">
              Where <code className="text-slate-200">V_w</code> represents stored lake volume in m³, and <code className="text-slate-200">h_w</code> is the breach water head above dam foundation.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-3">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-purple-400 text-[18px]">waves</span>
              Manning-Strickler Wave Front Translation
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Models downstream velocity, wave celerity, and attenuation across high-gradient mountain riverbeds:
            </p>
            <div className="p-3 rounded bg-slate-900 border border-slate-800 text-purple-300 font-mono text-xs">
              V = (1 / n) • R^(2/3) • S^(1/2)
            </div>
            <p className="text-[11px] text-slate-400">
              Downstream arrival times for key outposts (Warshi, Panamik, Nubra Confluence) are computed based on channel roughness (<code className="text-slate-200">n</code>) and local bed slope (<code className="text-slate-200">S</code>).
            </p>
          </div>
        </div>
      </section>

      {/* Security & Access Architecture */}
      <section id="tech-security" className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-teal-400 text-2xl">verified_user</span>
            <h2 className="text-xl md:text-2xl font-heading font-semibold text-white">Security &amp; Operational Governance</h2>
          </div>
          <span className="text-xs font-mono text-teal-400 uppercase">Governance</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded bg-slate-950/80 border border-slate-800 space-y-2">
            <h4 className="font-semibold text-white">Public Accessibility Mode</h4>
            <p className="text-slate-400 leading-relaxed">
              Whenever the documentation window is active, judges and public visitors access the complete suite with zero authentication barriers or personal data harvesting.
            </p>
          </div>
          <div className="p-4 rounded bg-slate-950/80 border border-slate-800 space-y-2">
            <h4 className="font-semibold text-white">Publishing Schedule Engine</h4>
            <p className="text-slate-400 leading-relaxed">
              Window bounds are calculated against Asia/Dhaka (UTC+6) time with automatic status determination (Active, Upcoming, or Expired) and developer override safeguards.
            </p>
          </div>
          <div className="p-4 rounded bg-slate-950/80 border border-slate-800 space-y-2">
            <h4 className="font-semibold text-white">Data Integrity &amp; Privacy</h4>
            <p className="text-slate-400 leading-relaxed">
              All Earth observation metadata is pulled from public scientific platforms without exposing restricted operational frequencies or personal responder contacts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
