"use client";

import { Badge } from "@/components/ui/badge";
import { Cpu, ShieldAlert, Zap, Layers } from "lucide-react";

const SPECS = [
  {
    title: "The Blackboard",
    desc: "Thread-safe passive memory. The Single Source of Truth for the Mission DAG and Peer Ledger.",
    icon: Layers,
  },
  {
    title: "The Event Bus",
    desc: "Zero-copy Pub/Sub system linking decoupled modules via thread-safe messaging pipes.",
    icon: Zap,
  },
  {
    title: "Self-Healing",
    desc: "Watchdog monitors PeerTable. If an agent goes MIA, the Scheduler rolls back and re-auctions tasks.",
    icon: ShieldAlert,
  },
];

export function KernelSpecs() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {SPECS.map((spec, i) => (
        <div
          key={i}
          className="group hover:border-primary/30 rounded-sm border border-white/5 bg-white/5 p-6 transition-all"
        >
          <spec.icon className="text-primary mb-4 size-6 transition-transform group-hover:scale-110" />
          <h4 className="text-foreground mb-3 text-sm font-bold tracking-widest uppercase">
            {spec.title}
          </h4>
          <p className="text-muted-foreground mb-4 text-xs leading-relaxed">
            {spec.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
