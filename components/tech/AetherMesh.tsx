"use client";

import React, { useRef } from "react";
import { Radio, Share2, Cpu } from "lucide-react";
import { AnimatedBeam } from "../ui/animated-beam";

export function AetherMesh() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scoutRef = useRef<HTMLDivElement>(null);
  const relayRef = useRef<HTMLDivElement>(null);
  const gcsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden py-12"
      ref={containerRef}
    >
      <div className="flex h-full w-full max-w-lg flex-row items-center justify-between gap-10">
        {/* Scout Node */}
        <div
          ref={scoutRef}
          className="border-primary bg-background z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 shadow-[0_0_15px_rgba(255,87,34,0.3)]"
        >
          <Radio className="text-primary h-6 w-6" />
        </div>

        {/* Relay Node */}
        <div
          ref={relayRef}
          className="border-secondary bg-background z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 shadow-[0_0_20px_rgba(34,202,255,0.3)]"
        >
          <Share2 className="text-secondary h-8 w-8" />
        </div>

        {/* GCS Node */}
        <div
          ref={gcsRef}
          className="border-terminal bg-background z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 shadow-[0_0_15px_rgba(0,255,65,0.3)]"
        >
          <Cpu className="text-terminal h-6 w-6" />
        </div>
      </div>

      {/* Animated Beams representing 'Inverted Priority' links */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={scoutRef}
        toRef={relayRef}
        gradientStartColor="#FF5722"
        gradientStopColor="#FF9800"
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={relayRef}
        toRef={gcsRef}
        gradientStartColor="#22CAFF"
        gradientStopColor="#00E5FF"
        duration={3}
      />
    </div>
  );
}
