"use client";

import { Settings2, Zap, ShieldCheck } from "lucide-react";

const LEVERS = [
  {
    name: "Sim_Bridge",
    type: "ROS 2",
    logic:
      "Wraps rclcpp to isolate the Kernel from ROS-induced memory pollution.",
    icon: Settings2,
  },
  {
    name: "Direct_Iron",
    type: "MAVLink",
    logic: "Direct UART/Serial communication for physical flight controllers.",
    icon: Zap,
  },
];

export function ArchimedesBridge() {
  return (
    <div className="space-y-6">
      <div className="rounded-sm border border-white/10 bg-white/5 p-6">
        <div className="mb-4 flex items-center gap-3">
          <Settings2 className="text-primary h-5 w-5" />
          <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase">
            Hardware_Bridge // Sidecar
          </span>
        </div>
        <p className="text-muted-foreground border-primary/30 mb-6 border-l pl-4 text-sm leading-relaxed italic">
          "Archimedes acts as the universal translator, mapping abstract intent
          to physical levers without compromising Kernel stability."
        </p>
        <div className="grid grid-cols-1 gap-4">
          {LEVERS.map((lever) => (
            <div
              key={lever.name}
              className="rounded-sm border border-white/5 bg-black/40 p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <lever.icon className="text-primary h-4 w-4" />
                  <span className="text-foreground font-mono text-[11px] font-bold">
                    {lever.name}
                  </span>
                </div>
                <span className="text-terminal font-mono text-[9px]">
                  {lever.type}
                </span>
              </div>
              <p className="text-muted-foreground text-[11px] leading-relaxed">
                {lever.logic}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
