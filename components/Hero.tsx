"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-transparent px-6">
      {/* Tactical Background Grid */}
      <div className="absolute inset-0 z-0 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:40px_40px] opacity-10" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Node Status Indicator */}
        <div className="border-primary/20 bg-primary/5 mb-8 inline-flex items-center space-x-3 rounded-full border px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="bg-terminal absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
            <span className="bg-terminal relative inline-flex h-2 w-2 rounded-full" />
          </span>
          <span className="text-primary font-mono text-[10px] font-bold tracking-[0.2em] uppercase">
            Tokyo_Node_Active // Signal Ready
          </span>
        </div>

        {/* The Core Thesis */}
        <h1 className="text-foreground mb-8 text-6xl font-extrabold tracking-tighter sm:text-8xl lg:leading-[0.9]">
          The <span className="text-primary">Android</span> for <br />
          Physical Intelligence
        </h1>

        <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-lg leading-relaxed font-medium">
          Arkhon Systems is architecting <strong>Project Horus</strong>: the
          decentralized kernel for multi-agent orchestration. Bridging the gap
          between simulation and real-world deployment for the next generation
          of robotics.
        </p>

        {/* High-Contrast CTAs */}
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 rounded-none px-10 font-bold tracking-tight"
          >
            {/* Updated Route: Redirects to Technology Section */}
            <Link href="/technology">
              EXPLORE THE KERNEL <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="ghost"
            asChild
            className="text-foreground hover:text-primary h-14 font-bold tracking-tight transition-colors"
          >
            {/* Updated Route: Staged for future Simulation */}
            <Link href="/simulation">
              VIEW SIMULATION <Play className="ml-2 h-4 w-4 fill-current" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
