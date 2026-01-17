"use client";

const PROTOCOLS = [
  {
    layer: "Critical_Command",
    freq: "920 MHz (LoRa)",
    logic: "Ultra-narrowband; punches through concrete and wet canopy.",
    status: "Always_Active",
  },
  {
    layer: "Telemetry_Mesh",
    freq: "Mesh / Gossip",
    logic: "Gossip-based propagation ensures zero single-points-of-failure.",
    status: "Self_Healing",
  },
  {
    layer: "Payload_Stream",
    freq: "2.4 GHz (Wi-Fi)",
    logic: "High-bandwidth on-demand link for visual verification only.",
    status: "Dynamic_Handover",
  },
];

export function AetherSpecs() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {PROTOCOLS.map((p, i) => (
        <div
          key={i}
          className="rounded-sm border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10"
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="text-secondary font-mono text-[10px] font-bold tracking-widest uppercase">
              {p.layer}
            </span>
            <span className="text-terminal font-mono text-[9px]">
              {p.status}
            </span>
          </div>
          <p className="text-foreground mb-1 text-sm font-bold">{p.freq}</p>
          <p className="text-muted-foreground text-xs leading-relaxed italic">
            "{p.logic}"
          </p>
        </div>
      ))}
    </div>
  );
}
