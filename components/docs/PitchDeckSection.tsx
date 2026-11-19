import React from "react";

export function PitchDeckSection() {
  return (
    <div className="space-y-12">
      {/* Hero / Vision Slide */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/60 border border-sky-500/30 p-8 md:p-12 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-mono tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            YC Pitch Deck — GMEWS by Team Chronos
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
            Glacier Monitoring &amp; Early Warning System <span className="text-sky-400">(GMEWS)</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Continuous Earth Observation and predictive Glacial Lake Outburst Flood (GLOF) intelligence
            safeguarding mountain basins, critical military outposts, and downstream populations.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 font-mono">
              Mission Sector: Siachen Basin &amp; Upper Indus
            </span>
            <span className="px-3 py-1 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-xs text-emerald-400 font-mono">
              Live Real-Time Telemetry Connected
            </span>
            <span className="px-3 py-1 rounded-lg bg-sky-950/50 border border-sky-500/30 text-xs text-sky-300 font-mono">
              Next.js 16 • React 19 • Vector Hydrodynamics
            </span>
          </div>
        </div>
      </div>

      {/* Slide 1: The Problem */}
      <section id="pitch-problem" className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 font-mono font-bold text-sm border border-rose-500/20">
              01
            </span>
            <h2 className="text-xl md:text-2xl font-heading font-semibold text-white">The Problem</h2>
          </div>
          <span className="text-xs font-mono text-rose-400/80 uppercase">Catastrophic Mountain Threat</span>
        </div>
        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
          Accelerated climate change has destabilized high-altitude cryosphere systems across the Himalayas, Karakoram, and Hindu Kush.
          Glacial retreat and surge events form volatile moraine-dammed and subglacial reservoirs without warning.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-slate-950/60 border border-rose-500/20 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
              <span className="material-symbols-outlined text-[18px]">warning</span>
              Zero-Hour Sudden Breaches
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Moraine-dam collapse and hanging serac detachments release tens of millions of cubic meters of meltwater in minutes with no ground sensor warning.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-950/60 border border-rose-500/20 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
              <span className="material-symbols-outlined text-[18px]">satellite_alt</span>
              Fragmented &amp; Delayed Data
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Agencies rely on periodic manual satellite imagery inspection. Cloud cover, orbit latency, and uncalibrated raw radar data delay response until after destruction.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-950/60 border border-rose-500/20 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
              <span className="material-symbols-outlined text-[18px]">emergency</span>
              Downstream Vulnerability
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Downstream valleys (e.g., Warshi, Panamik, Nubra Confluence) suffer devastating infrastructure loss, bridges swept away, and civilian casualties with zero evacuation lead time.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 2: The Solution */}
      <section id="pitch-solution" className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 font-mono font-bold text-sm border border-sky-500/20">
              02
            </span>
            <h2 className="text-xl md:text-2xl font-heading font-semibold text-white">The Solution: GMEWS</h2>
          </div>
          <span className="text-xs font-mono text-sky-400 uppercase">Unified Cryosphere Intelligence</span>
        </div>
        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
          GMEWS is a unified Earth Observation and GLOF modeling platform that merges multi-frequency Synthetic Aperture Radar (SAR),
          ICESat-2 photon altimetry, and optical multi-spectral satellite passes into automated risk classification and dynamic flood routing simulations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-slate-950/60 border border-sky-500/20 space-y-2">
            <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
              <span className="material-symbols-outlined text-[18px]">satellite</span>
              Multi-Mission EO Ingestion
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ingests Sentinel-1B SAR (all-weather penetrating), Landsat-9 SWIR thermal, and ICESat-2 ATL06 elevation tracks to detect surface deformation down to centimeters.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-950/60 border border-sky-500/20 space-y-2">
            <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
              <span className="material-symbols-outlined text-[18px]">schema</span>
              Hydrodynamic Breach Modeling
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Simulates dam-break hydrographs, wave fronts, peak discharge (Q_peak), arrival timelines, and flood inundation depths across downstream settlements.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-950/60 border border-sky-500/20 space-y-2">
            <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
              <span className="material-symbols-outlined text-[18px]">notifications_active</span>
              Actionable Civil Defense Triage
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Empowers defense personnel, emergency responders, and water basin administrators with automated threshold alerts and evacuation corridors before flood wave arrival.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 3: Why Now */}
      <section id="pitch-why-now" className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 font-mono font-bold text-sm border border-amber-500/20">
              03
            </span>
            <h2 className="text-xl md:text-2xl font-heading font-semibold text-white">Why Now?</h2>
          </div>
          <span className="text-xs font-mono text-amber-400 uppercase">Convergence of Timing &amp; Tech</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-amber-400">trending_up</span>
              Record Glacial Melt Rates
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cryosphere loss in the HKH region has doubled in the last decade. High-altitude glacial lakes have expanded in volume by over 35%, increasing GLOF probabilities exponentially.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-amber-400">dataset</span>
              Free Open Earth Observation Data
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              ESA Copernicus (Sentinel) and NASA/USGS (Landsat, ICESat-2) provide sub-weekly public radar and altimetry streams that previously required millions in dedicated surveillance hardware.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-amber-400">speed</span>
              Modern Edge-Rendered Vector Stack
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Next.js 16 and client vector rendering allow instant hydrodynamic flood wave visualization and satellite tile overlays directly on ordinary field laptops and emergency operations displays without GIS desktop software.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 4: Product Demo & Core Modules */}
      <section id="pitch-product" className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-sm border border-teal-500/20">
              04
            </span>
            <h2 className="text-xl md:text-2xl font-heading font-semibold text-white">Live Product Architecture</h2>
          </div>
          <span className="text-xs font-mono text-teal-400 uppercase">Operational Workspaces</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-teal-500/40 transition-colors">
            <span className="text-[10px] font-mono text-teal-400 block mb-1">ROUTE: /</span>
            <h4 className="text-sm font-semibold text-white">Mission Control</h4>
            <p className="text-xs text-slate-400 mt-1">Real-time surveillance overview with interactive geospatial map and live telemetry feeds.</p>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-teal-500/40 transition-colors">
            <span className="text-[10px] font-mono text-teal-400 block mb-1">ROUTE: /investigate</span>
            <h4 className="text-sm font-semibold text-white">Investigation Hub</h4>
            <p className="text-xs text-slate-400 mt-1">Target triage, transverse crevasse displacement, and DInSAR surface dilation profiling.</p>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-teal-500/40 transition-colors">
            <span className="text-[10px] font-mono text-teal-400 block mb-1">ROUTE: /glof-modeling</span>
            <h4 className="text-sm font-semibold text-white">GLOF Modeling</h4>
            <p className="text-xs text-slate-400 mt-1">Interactive dam-break hydrographs, breach width adjustment, and settlement wave-arrival times.</p>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-teal-500/40 transition-colors">
            <span className="text-[10px] font-mono text-teal-400 block mb-1">ROUTE: /glaciers</span>
            <h4 className="text-sm font-semibold text-white">Glaciers Explorer</h4>
            <p className="text-xs text-slate-400 mt-1">Catalog of Siachen, Teram Shehr, Saltoro, and Nubra sectors with volume and moraine ratings.</p>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-teal-500/40 transition-colors">
            <span className="text-[10px] font-mono text-teal-400 block mb-1">ROUTE: /observations</span>
            <h4 className="text-sm font-semibold text-white">Observations Feed</h4>
            <p className="text-xs text-slate-400 mt-1">Satellite scene catalog filtering Sentinel-1B SAR, Landsat-9, Sentinel-2B, and ICESat-2 passes.</p>
          </div>
        </div>
      </section>

      {/* Slide 5: Market Opportunity & Target Users */}
      <section id="pitch-market" className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 font-mono font-bold text-sm border border-indigo-500/20">
              05
            </span>
            <h2 className="text-xl md:text-2xl font-heading font-semibold text-white">Target Beneficiaries &amp; Market Need</h2>
          </div>
          <span className="text-xs font-mono text-indigo-400 uppercase">Impact Spectrum</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
              <span className="material-symbols-outlined text-[18px]">shield</span>
              Defense &amp; Strategic Outposts
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Outposts deployed across high-altitude glaciated zones (e.g., Siachen Glacier, Saltoro Ridge) requiring real-time avalanche chute warnings and supply route integrity monitoring.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
              <span className="material-symbols-outlined text-[18px]">domain</span>
              Disaster Management Authorities
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              National Disaster Management Agencies (NDMAs) and regional civil protection teams needing verified simulation models to establish pre-planned evacuation trigger points.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
              <span className="material-symbols-outlined text-[18px]">water</span>
              Hydroelectric &amp; Infrastructure
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Downstream dam operators and transboundary river basin authorities managing turbine intake protection, reservoir flood headroom, and highway bridge safety.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 6: Business Model & Sustainability */}
      <section id="pitch-business" className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 font-mono font-bold text-sm border border-emerald-500/20">
              06
            </span>
            <h2 className="text-xl md:text-2xl font-heading font-semibold text-white">Delivery Model &amp; Sustainability</h2>
          </div>
          <span className="text-xs font-mono text-emerald-400 uppercase">Dual Enterprise &amp; Public Good</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg bg-slate-950/60 border border-emerald-500/20 space-y-2">
            <h4 className="text-sm font-semibold text-white">Public Sector &amp; Civic Warning</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Open humanitarian warning tiers for local municipalities, rescue services, and academic research partners monitoring regional glacier stability.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-950/60 border border-emerald-500/20 space-y-2">
            <h4 className="text-sm font-semibold text-white">Infrastructure Critical Tier</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dedicated high-cadence automated alerting, SLA-backed anomaly detection pipelines, and custom basin GIS integrations for energy utilities and infrastructure developers.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-950/60 border border-emerald-500/20 space-y-2">
            <h4 className="text-sm font-semibold text-white">Custom Basin Modeling</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Specialized hydrodynamic scenario engineering, high-resolution DEM calibration (Pleiades/WorldView), and field sensor telemetry integrations.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 7: Unique Advantage & Competition */}
      <section id="pitch-advantage" className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/10 text-violet-400 font-mono font-bold text-sm border border-violet-500/20">
              07
            </span>
            <h2 className="text-xl md:text-2xl font-heading font-semibold text-white">Competitive Differentiation</h2>
          </div>
          <span className="text-xs font-mono text-violet-400 uppercase">Why GMEWS Wins</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-800">
            <thead className="bg-slate-950/90 text-slate-300 font-mono">
              <tr>
                <th className="p-3 border-b border-slate-800">Capability</th>
                <th className="p-3 border-b border-slate-800 text-sky-400">GMEWS Platform</th>
                <th className="p-3 border-b border-slate-800 text-slate-400">Traditional Desktop GIS (QGIS/ArcGIS)</th>
                <th className="p-3 border-b border-slate-800 text-slate-400">Static Satellite Portals</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="p-3 font-medium text-white">Observation Mode</td>
                <td className="p-3 text-emerald-400 font-semibold">Continuous Multi-Sensor (SAR + Altimetry)</td>
                <td className="p-3 text-slate-400">Manual batch processing</td>
                <td className="p-3 text-slate-400">Optical catalog only</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white">All-Weather Cloud Penetration</td>
                <td className="p-3 text-emerald-400 font-semibold">Yes (Sentinel-1 C-band SAR)</td>
                <td className="p-3 text-slate-400">Requires manual radar processing</td>
                <td className="p-3 text-rose-400">Blocked by monsoonal cloud cover</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white">Dynamic GLOF Simulation</td>
                <td className="p-3 text-emerald-400 font-semibold">Interactive in-browser hydrographs &amp; wave travel</td>
                <td className="p-3 text-slate-400">Multi-day HEC-RAS batch execution</td>
                <td className="p-3 text-rose-400">No simulation capability</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white">Time to Emergency Insight</td>
                <td className="p-3 text-emerald-400 font-semibold">Instantaneous / Sub-minute</td>
                <td className="p-3 text-slate-400">Hours to days by specialist</td>
                <td className="p-3 text-slate-400">Inspection only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Slide 8: Go-to-Market & Validation */}
      <section id="pitch-gtm" className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-pink-500/10 text-pink-400 font-mono font-bold text-sm border border-pink-500/20">
              08
            </span>
            <h2 className="text-xl md:text-2xl font-heading font-semibold text-white">Roadmap &amp; Deployment Plan</h2>
          </div>
          <span className="text-xs font-mono text-pink-400 uppercase">Phase Execution</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/20 text-sky-300 border border-sky-500/30">Phase 1 (Completed)</span>
            <h4 className="text-sm font-semibold text-white">Core Basin Engine &amp; Modeling</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Operational deployment of Siachen Basin, Teram Shehr Subglacial Basin, and downstream Nubra settlements with interactive GLOF hydrographs.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">Phase 2 (Current Focus)</span>
            <h4 className="text-sm font-semibold text-white">Automated STAC Satellite Pipelines</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Direct connection to planetary-scale SpatioTemporal Asset Catalogs for automated interferometric coherence loss alerts.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">Phase 3 (Expansion)</span>
            <h4 className="text-sm font-semibold text-white">Pan-Himalayan Basin Network</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Scaling observation across Bhutan, Nepal (Imja &amp; Tsho Rolpa lakes), and Gilgit-Baltistan early warning corridors.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
