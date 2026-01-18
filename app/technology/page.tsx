"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { KernelTerminal } from "@/components/tech/KernelTerminal";
import { KernelSpecs } from "@/components/tech/KernelSpecs";
import { NeuralField } from "@/components/NeuralField";
import { AurelianAuction } from "@/components/tech/AurelianAuction";
import { MarketSpecs } from "@/components/tech/MarketSpecs";
import { AetherSpecs } from "@/components/tech/AetherSpecs";
import { AetherMesh } from "@/components/tech/AetherMesh";
import { OdinVision } from "@/components/tech/OdinVision";
import { PtolemyMap } from "@/components/tech/PtolemyMap";
import { ArchimedesBridge } from "@/components/tech/ArchimedesBridge";

export default function TechnologyPage() {
  return (
    <div className="relative min-h-screen">
      {/* 1. Background Layer */}
      <NeuralField />

      {/* 2. Content Layer */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">
        {/* Horus Kernel Section */}
        {/* Note: The Footer "Horus Kernel" link points to the root /technology */}
        <div className="mb-24 text-center">
          <Badge
            variant="outline"
            className="border-primary/30 text-primary mb-6 font-mono text-[10px] tracking-[0.4em] uppercase"
          >
            Technical_Specification // v2.0
          </Badge>
          <h1 className="mb-6 text-5xl font-extrabold tracking-tighter sm:text-7xl">
            The <span className="text-primary">Neuro-Somatic</span> <br />
            Kernel Architecture
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
            Project Horus separates the "Brain" from the "Body." Our C++23
            Kernel is an isolated executive manager that ensures mission
            continuity even if physical modules fail.
          </p>
        </div>

        {/* The Boot Terminal & Specs */}
        <div className="mb-32 grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <KernelTerminal />
          </div>
          <div className="lg:col-span-7">
            <h3 className="mb-6 text-2xl font-bold tracking-tight">
              The "Brain in a Vat" Philosophy
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The Kernel does not know how to fly or drive. It only manages{" "}
              <strong>State</strong> and <strong>Intent</strong>. This
              compartmentalization allows Arkhon to process mission-critical
              telemetry at sub-millisecond coordination latencies using
              FlatBuffer zero-copy serialization.
            </p>
            <KernelSpecs />
          </div>
        </div>

        {/* Aurelian Section */}
        <section
          id="aurelian"
          className="mt-32 scroll-mt-24 border-t border-white/5 pt-32"
        >
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            <div className="order-2 lg:order-1 lg:col-span-7">
              <AurelianAuction />
            </div>
            <div className="order-1 lg:order-2 lg:col-span-5">
              <Badge
                variant="outline"
                className="border-secondary/30 text-secondary mb-6 font-mono text-[10px] tracking-[0.4em] uppercase"
              >
                Module_Aurelian // The Strategist
              </Badge>
              <h2 className="mb-6 text-4xl font-extrabold tracking-tighter sm:text-6xl">
                Decentralized <br />
                <span className="text-secondary">Market</span> Logic
              </h2>
              <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                We reject the "Central Commander" model. Aurelian implements a
                peer-to-peer economy where task allocation emerges from
                real-time bidding on the Zenoh mesh.
              </p>
              <MarketSpecs />
            </div>
          </div>
        </section>

        {/* Aether Section */}
        <section
          id="aether"
          className="mt-32 scroll-mt-24 border-t border-white/5 pt-32 pb-24"
        >
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Badge
                variant="outline"
                className="border-terminal/30 text-terminal mb-6 font-mono text-[10px] tracking-[0.4em] uppercase"
              >
                Module_Aether // The Nervous System
              </Badge>
              <h2 className="mb-6 text-4xl font-extrabold tracking-tighter sm:text-6xl">
                Cognitive <br />
                <span className="text-terminal">Mesh</span> Network
              </h2>
              <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                Aether manages the physics of the swarm. It dynamically routes
                critical commands over low-frequency 920MHz LoRa while
                leveraging high-bandwidth Wi-Fi only when line-of-sight is
                pristine.
              </p>
              <AetherSpecs />
            </div>
            <div className="lg:col-span-7">
              <AetherMesh />
            </div>
          </div>
        </section>

        {/* Archimedes Section */}
        <section
          id="archimedes"
          className="mt-32 scroll-mt-24 border-t border-white/5 pt-32"
        >
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            <div className="order-2 lg:order-1 lg:col-span-7">
              <ArchimedesBridge />
            </div>
            <div className="order-1 lg:order-2 lg:col-span-5">
              <Badge
                variant="outline"
                className="border-primary/30 text-primary mb-6 font-mono text-[10px] tracking-[0.4em] uppercase"
              >
                Module_Archimedes // The Body
              </Badge>
              <h2 className="mb-6 text-4xl font-extrabold tracking-tighter uppercase sm:text-6xl">
                Hardware <span className="text-primary">Abstraction</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                "Archimedes facilitates the translation of high-level missions
                into atomic physical movements, utilizing a plugin-based 'Lever'
                system to remain device-agnostic."
              </p>
            </div>
          </div>
        </section>

        {/* Odin Section */}
        <section
          id="odin"
          className="mt-32 scroll-mt-24 border-t border-white/5 pt-32"
        >
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <OdinVision />
            </div>
            <div className="lg:col-span-5">
              <Badge
                variant="outline"
                className="border-secondary/30 text-secondary mb-6 font-mono text-[10px] tracking-[0.4em] uppercase"
              >
                Module_Odin // The Eye
              </Badge>
              <h2 className="mb-6 text-4xl font-extrabold tracking-tighter sm:text-6xl">
                Semantic <br /> <span className="text-secondary">Vision</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Odin processes high-bandwidth pixels locally on the edge,
                filtering data into semantic events that the Kernel can act upon
                in real-time.
              </p>
            </div>
          </div>
        </section>

        {/* Ptolemy Section */}
        <section
          id="ptolemy"
          className="mt-32 scroll-mt-24 border-t border-white/5 pt-32"
        >
          <div className="mb-16 text-center">
            <Badge
              variant="outline"
              className="border-primary/30 text-primary mb-6 font-mono text-[10px] tracking-[0.4em] uppercase"
            >
              Module_Ptolemy // The Librarian
            </Badge>
            <h2 className="text-4xl font-extrabold tracking-tighter sm:text-6xl">
              Elastic <span className="text-primary">Spatial</span> Awareness
            </h2>
          </div>
          <PtolemyMap />
        </section>
      </div>
    </div>
  );
}
