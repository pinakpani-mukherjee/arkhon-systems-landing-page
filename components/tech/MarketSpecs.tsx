"use client";

import { Scale, TrendingUp, ShieldCheck } from "lucide-react";

const MARKET_FEATURES = [
  {
    title: "Market Economy",
    desc: "Tasks are commodities; agents are bidders. Physics-based pricing ensures optimal allocation.",
    icon: TrendingUp,
  },
  {
    title: "Conflict Resolution",
    desc: "Uses Lamport Timestamps to resolve bidding wars across the decentralized mesh.",
    icon: Scale,
  },
  {
    title: "Self-Healing",
    desc: "MIA detection triggers an immediate release of held tasks back to the open market.",
    icon: ShieldCheck,
  },
];

export function MarketSpecs() {
  return (
    <div className="space-y-8">
      {MARKET_FEATURES.map((feature, i) => (
        <div key={i} className="flex items-start space-x-6">
          <div className="border-secondary/20 bg-secondary/5 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border">
            <feature.icon className="text-secondary h-5 w-5" />
          </div>
          <div>
            <h4 className="text-foreground text-sm font-bold tracking-widest uppercase">
              {feature.title}
            </h4>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed italic">
              "{feature.desc}"
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
