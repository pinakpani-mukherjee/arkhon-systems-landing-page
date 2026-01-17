"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { NeuralField } from "@/components/NeuralField";
import { KernelTerminal } from "@/components/tech/KernelTerminal";
import { Activity, ShieldAlert, Zap, Box } from "lucide-react";

export default function SimulationPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 1. Background Layer */}
      <NeuralField />

      {/* 2. Content Layer */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Badge
              variant="outline"
              className="border-primary/30 text-primary mb-4 font-mono text-[10px] tracking-[0.4em] uppercase"
            >
              Mission_Visualizer // Zero_G_Sim
            </Badge>
            <h1 className="text-foreground text-4xl font-extrabold tracking-tighter sm:text-6xl">
              Sim-to-Real <span className="text-primary">Benchmark</span>
            </h1>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-end">
              <span className="text-muted-foreground font-mono text-[10px] uppercase">
                Environment
              </span>
              <span className="text-foreground text-sm font-bold">
                Gazebo_Debris_Field
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-muted-foreground font-mono text-[10px] uppercase">
                Stability
              </span>
              <span className="text-terminal text-sm font-bold">
                OPTIMAL // 120 FPS
              </span>
            </div>
          </div>
        </div>

        {/* The Main Simulation Viewport */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Video Feed */}
          <div className="group relative aspect-video overflow-hidden rounded-sm border border-white/10 bg-black shadow-2xl lg:col-span-8">
            {/* Tactical Overlays */}
            <div className="pointer-events-none absolute inset-0 z-20 p-6">
              <div className="flex items-start justify-between">
                <div className="rounded-sm border border-white/10 bg-black/60 p-3 backdrop-blur-md">
                  <div className="mb-2 flex items-center gap-2">
                    <Activity className="text-secondary h-3 w-3 animate-pulse" />
                    <span className="text-secondary font-mono text-[9px] uppercase">
                      Swarm_Telemetry
                    </span>
                  </div>
                  <div className="space-y-1 font-mono text-[10px] text-white/70">
                    <p>AGENTS: 12 ACTIVE</p>
                    <p>LEDGER: SYNCHRONIZED</p>
                    <p>MODE: SEARCH_SAR</p>
                  </div>
                </div>
                <Badge
                  variant="destructive"
                  className="animate-pulse border-red-500/50 bg-red-500/20 font-mono text-[9px] text-red-500"
                >
                  LIVE_RECORDING
                </Badge>
              </div>
            </div>

            {/* Video Placeholder (Replace with your video tag later) */}
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-zinc-900/50">
              <Box className="h-12 w-12 animate-bounce text-white/20" />
              <p className="absolute mt-20 font-mono text-[10px] tracking-[0.2em] text-white/30">
                GAZEBO_VIDEO_UPLINK_PENDING
              </p>
            </div>

            {/* The actual video tag once you have the mp4 */}
            {/* <video src="/sim-demo.mp4" autoPlay loop muted className="h-full w-full object-cover" /> */}
          </div>

          {/* Side Info Panel */}
          <div className="space-y-6 lg:col-span-4">
            <div className="rounded-sm border border-white/5 bg-white/5 p-6">
              <h3 className="text-primary mb-4 flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
                <ShieldAlert className="h-4 w-4" /> The Kill-Switch Test
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed italic">
                "Demonstrating anti-fragility: Drone A is forced into a
                SEGFAULT. Watchdog identifies MIA status within 500ms. Aurelian
                re-auctions abandoned tasks. Drone B shifts position to heal the
                gap."
              </p>
            </div>

            {/* Real-time Log Feed */}
            <KernelTerminal />
          </div>
        </div>

        {/* Technical Capabilities Section */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="border border-white/10 bg-white/5 p-6">
            <Zap className="text-secondary mb-4 h-6 w-6" />
            <h4 className="mb-2 text-sm font-bold uppercase">
              Sub-1ms Coordination
            </h4>
            <p className="text-muted-foreground text-xs">
              FlatBuffer serialization allows for near-instantaneous swarm
              re-balancing.
            </p>
          </div>
          <div className="border border-white/10 bg-white/5 p-6">
            <ShieldAlert className="text-primary mb-4 h-6 w-6" />
            <h4 className="mb-2 text-sm font-bold uppercase">
              Visual Resilience
            </h4>
            <p className="text-muted-foreground text-xs">
              Hardened against process failure. The Kernel ensures mission
              continuity.
            </p>
          </div>
          <div className="border border-white/10 bg-white/5 p-6">
            <Activity className="text-terminal mb-4 h-6 w-6" />
            <h4 className="mb-2 text-sm font-bold uppercase">
              Sim-to-Real Portability
            </h4>
            <p className="text-muted-foreground text-xs">
              The exact same C++23 binary running in this sim is deployed to
              Jetson hardware.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
