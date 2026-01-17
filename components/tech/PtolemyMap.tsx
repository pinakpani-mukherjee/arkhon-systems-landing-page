"use client";

import { Hexagon, Layers, RefreshCw } from "lucide-react";

const MAP_FEATURES = [
  {
    title: "BeliefGrid (PoS)",
    desc: "A Bayesian probability map that tracks the 'Probability of Success' across a 2D grid.",
    icon: Layers,
  },
  {
    title: "Hex Decomposition",
    desc: "Utilizes H3-style hexagonal clustering for uniform sampling and circle packing.",
    icon: Hexagon,
  },
  {
    title: "Elastic Resizing",
    desc: "Automatically redistributes unsearched sectors if a peer goes MIA during the mission.",
    icon: RefreshCw,
  },
];

export function PtolemyMap() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {MAP_FEATURES.map((feature) => (
        <div
          key={feature.title}
          className="rounded-sm border border-white/5 bg-white/5 p-5"
        >
          <feature.icon className="text-primary mb-4 h-5 w-5" />
          <h4 className="text-foreground mb-2 text-[11px] font-bold tracking-widest uppercase">
            {feature.title}
          </h4>
          <p className="text-muted-foreground text-[11px] leading-relaxed">
            {feature.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
