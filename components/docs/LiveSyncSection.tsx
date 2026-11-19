import React from "react";

export function LiveSyncSection() {
  return (
    <div className="space-y-12">
      {/* Real-time System Telemetry Overview */}
      <section id="live-telemetry" className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <div>
              <h2 className="text-xl md:text-2xl font-heading font-semibold text-white">Live System Telemetry State</h2>
              <p className="text-xs text-slate-400">Directly mirrored from the GMEWS operational data store</p>
            </div>
          </div>
          <span className="text-xs font-mono text-emerald-400 uppercase">Synchronized</span>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase">Active Monitored Basin</span>
            <div className="text-lg font-mono font-bold text-sky-400">Siachen / Nubra</div>
            <p className="text-[10px] text-slate-500 font-mono">35.42° N, 77.10° E</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase">Tracked Glacier Sectors</span>
            <div className="text-lg font-mono font-bold text-white">4 Main Sectors</div>
            <p className="text-[10px] text-slate-500 font-mono">1,137 km² Total Area</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase">Highest Threat Level</span>
            <div className="text-lg font-mono font-bold text-rose-400">Critical Stage 2</div>
            <p className="text-[10px] text-rose-400/80 font-mono">Teram Shehr Subglacial</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase">Downstream Settlement Lead</span>
            <div className="text-lg font-mono font-bold text-emerald-400">42 min to Warshi</div>
            <p className="text-[10px] text-emerald-400/80 font-mono">Peak Q: 2,420 m³/s</p>
          </div>
        </div>

        {/* Monitored Glacial Sites Snapshot Table */}
        <div className="overflow-x-auto">
          <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-sky-400 text-[18px]">terrain</span>
            Cryosphere Sector State Matrix
          </h3>
          <table className="w-full text-left text-xs border border-slate-800">
            <thead className="bg-slate-950/90 text-slate-300 font-mono">
              <tr>
                <th className="p-3 border-b border-slate-800">Sector Name</th>
                <th className="p-3 border-b border-slate-800">Code</th>
                <th className="p-3 border-b border-slate-800">Risk Status</th>
                <th className="p-3 border-b border-slate-800">Elevation</th>
                <th className="p-3 border-b border-slate-800">Velocity / Surge</th>
                <th className="p-3 border-b border-slate-800">Estimated Volume</th>
                <th className="p-3 border-b border-slate-800">Sensor Sync</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="p-3 font-medium text-white">Teram Shehr Subglacial Basin</td>
                <td className="p-3 font-mono text-slate-400">GL-SIACHEN-04</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-500/20 text-rose-400 border border-rose-500/30">
                    CRITICAL RISK
                  </span>
                </td>
                <td className="p-3 font-mono text-slate-400">4,780m ASL</td>
                <td className="p-3 font-mono text-rose-300">+112% surge accel</td>
                <td className="p-3 font-mono text-slate-300">78.2M m³</td>
                <td className="p-3 font-mono text-emerald-400">14m ago</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white">Siachen Glacier (Central Trunk)</td>
                <td className="p-3 font-mono text-slate-400">SM-01</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    HIGH DILATION
                  </span>
                </td>
                <td className="p-3 font-mono text-slate-400">5,364m ASL</td>
                <td className="p-3 font-mono text-amber-300">0.28 m/day</td>
                <td className="p-3 font-mono text-slate-300">612 km² ice</td>
                <td className="p-3 font-mono text-emerald-400">28m ago</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white">Saltoro Hanging Wall Serac</td>
                <td className="p-3 font-mono text-slate-400">SR-08</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    DETACHMENT RISK
                  </span>
                </td>
                <td className="p-3 font-mono text-slate-400">6,120m ASL</td>
                <td className="p-3 font-mono text-amber-300">+14 cm/month</td>
                <td className="p-3 font-mono text-slate-300">420,000 m³</td>
                <td className="p-3 font-mono text-emerald-400">48m ago</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-white">Nubra Valley Outflow Snout</td>
                <td className="p-3 font-mono text-slate-400">NB-02</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/20 text-sky-400 border border-sky-500/30">
                    ACTIVE RUNOFF
                  </span>
                </td>
                <td className="p-3 font-mono text-slate-400">3,620m ASL</td>
                <td className="p-3 font-mono text-sky-300">142 m³/s Q_out</td>
                <td className="p-3 font-mono text-slate-300">Sediment bulk 1.65x</td>
                <td className="p-3 font-mono text-emerald-400">1h 10m ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Downstream Evacuation Corridors & Wavefront Reach */}
      <section id="live-evacuation" className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-amber-400 text-2xl">evacuation_point</span>
            <div>
              <h2 className="text-xl md:text-2xl font-heading font-semibold text-white">Downstream Settlement Wavefront Timing</h2>
              <p className="text-xs text-slate-400">Model-calculated arrival times and safe altitudes for downstream outposts</p>
            </div>
          </div>
          <span className="text-xs font-mono text-amber-400 uppercase">Emergency Defense</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-white text-sm">Warshi Outpost</h4>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-rose-500/20 text-rose-400">High Risk</span>
            </div>
            <div className="text-2xl font-mono font-bold text-rose-400">T+42 min</div>
            <p className="text-xs text-slate-400">Peak Depth: 8.4m • Vel: 11.2 m/s</p>
            <div className="pt-2 text-[11px] text-slate-300 font-mono border-t border-slate-800">
              Evac: Spur 3 Ridge (&gt;3,350m ASL)
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-white text-sm">Panamik Village</h4>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-400">Medium Risk</span>
            </div>
            <div className="text-2xl font-mono font-bold text-amber-400">T+88 min</div>
            <p className="text-xs text-slate-400">Peak Depth: 5.2m • Vel: 7.8 m/s</p>
            <div className="pt-2 text-[11px] text-slate-300 font-mono border-t border-slate-800">
              Evac: East Terrace Heights (&gt;3,280m ASL)
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-white text-sm">Tegar Bridge Point</h4>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-sky-500/20 text-sky-400">Watch</span>
            </div>
            <div className="text-2xl font-mono font-bold text-sky-400">T+145 min</div>
            <p className="text-xs text-slate-400">Peak Depth: 3.8m • Vel: 5.4 m/s</p>
            <div className="pt-2 text-[11px] text-slate-300 font-mono border-t border-slate-800">
              Evac: North Highway Overpass (&gt;3,190m ASL)
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-white text-sm">Nubra Confluence</h4>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400">Attenuated</span>
            </div>
            <div className="text-2xl font-mono font-bold text-emerald-400">T+210 min</div>
            <p className="text-xs text-slate-400">Peak Depth: 2.1m • Vel: 3.2 m/s</p>
            <div className="pt-2 text-[11px] text-slate-300 font-mono border-t border-slate-800">
              Evac: Shyok River Bench (&gt;3,120m ASL)
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
