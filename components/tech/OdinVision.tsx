"use client";

import { ScanEye, ShieldAlert, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const RUNES = [
  {
    name: "Standard_YOLO",
    logic:
      "Filters for 'person' or 'vehicle' classes to trigger EVENT_OBJECT_FOUND.",
    icon: ScanEye,
  },
  {
    name: "Fire_Watch",
    logic:
      "Specialized safety rune; triggers EVENT_PANIC if fire area > 30% of frame.",
    icon: ShieldAlert,
  },
];

export function OdinVision() {
  return (
    <div className="space-y-6">
      <div className="rounded-sm border border-white/10 bg-white/5 p-6">
        <div className="mb-4 flex items-center gap-3">
          <Cpu className="text-secondary h-5 w-5" />
          <span className="text-secondary font-mono text-xs tracking-[0.2em] uppercase">
            Edge_AI // TensorRT
          </span>
        </div>
        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
          Odin utilizes <strong>Runes</strong> (C++ plugins) to decouple
          perception logic from AI model weights. This sidecar architecture
          protects the Kernel if the GPU driver panics.
        </p>
        <div className="grid grid-cols-1 gap-4">
          {RUNES.map((rune) => (
            <div
              key={rune.name}
              className="rounded-sm border border-white/5 bg-black/40 p-4"
            >
              <div className="mb-2 flex items-center gap-3">
                <rune.icon className="text-secondary h-4 w-4" />
                <span className="text-foreground font-mono text-[11px] font-bold">
                  {rune.name}
                </span>
              </div>
              <p className="text-muted-foreground text-[11px] leading-relaxed italic">
                "{rune.logic}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
