"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const founders = [
  {
    id: "CEO_NODE",
    name: "Pinakpani Mukherjee",
    title: "Co-Founder & CEO",
    image: "/pinak.jpg",
    roleBadge: "Systems Architect // Tokyo",
    bio: "A seasoned Sr. Engineer based in Tokyo with a relentless drive for zero-to-one innovation. Pinak holds a deep passion for architecting novel, scalable solutions that challenge the status quo. At Arkhon, he translates theoretical ambition into deployed reality, leading the charge to build the foundational infrastructure for the next generation of decentralized physical intelligence.",
    accent: "text-primary",
    border: "border-primary/50",
    glow: "shadow-primary/20",
  },
  {
    id: "CTO_NODE",
    name: "Romulo Silva Chaves",
    title: "Co-Founder & CTO",
    image: "/romulo.jpg",
    roleBadge: "PhD Candidate, UTokyo // Computer Vision",
    bio: "Operating at the bleeding edge of robotics research at the University of Tokyo, Romulo brings a meticulous, data-driven approach to building systems that perceive and act with precision. With extensive work in agricultural robotics, he is dedicated to addressing Japan's aging population crisis through autonomous systems that augment human capability.",
    accent: "text-secondary",
    border: "border-secondary/50",
    glow: "shadow-secondary/20",
  },
];

function Portrait({
  image,
  border,
  glow,
}: {
  image: string;
  border: string;
  glow: string;
}) {
  return (
    <div className="bg-background group relative h-[450px] w-full overflow-hidden rounded-sm">
      {/* Tactical Frame Overlay */}
      <div
        className={`absolute inset-4 z-30 border-2 ${border} pointer-events-none transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(0,0,0,0.5)]`}
      >
        {/* Corner Accents */}
        <div
          className={`absolute -top-1 -left-1 h-4 w-4 border-t-4 border-l-4 ${border}`}
        />
        <div
          className={`absolute -top-1 -right-1 h-4 w-4 border-t-4 border-r-4 ${border}`}
        />
        <div
          className={`absolute -bottom-1 -left-1 h-4 w-4 border-b-4 border-l-4 ${border}`}
        />
        <div
          className={`absolute -right-1 -bottom-1 h-4 w-4 border-r-4 border-b-4 ${border}`}
        />
      </div>

      {/* Portrait Image */}
      <div className="absolute inset-0 z-10 h-full w-full">
        <Image
          src={image}
          alt="Founder Portrait"
          fill
          className="scale-105 object-cover grayscale transition-all duration-700 group-hover:scale-100 group-hover:grayscale-0"
          priority
        />
        {/* Subtle Scanline Effect */}
        <div className="absolute inset-0 z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%] opacity-10" />
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-background relative w-full overflow-hidden pb-20">
      {/* Hero Section */}
      <section className="relative z-10 flex min-h-[50vh] flex-col items-center justify-center px-6 pt-32 text-center">
        <Badge
          variant="outline"
          className="border-primary/30 bg-primary/5 text-primary mb-6 px-4 py-1 font-mono text-[10px] tracking-[0.4em] uppercase"
        >
          Mission_Log // The Architects
        </Badge>
        <h1 className="text-foreground text-5xl font-extrabold tracking-tighter sm:text-7xl">
          The <span className="text-primary">Founding</span> Unit
        </h1>
        <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg font-medium">
          Arkhon Systems is a Tokyo-based collective engineering the
          decentralized nervous system for autonomous machines.
        </p>
      </section>

      <Separator className="mx-auto my-12 max-w-7xl bg-white/5" />

      {/* Founders Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-32">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-12 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Portrait Column */}
              <div
                className={`lg:col-span-5 ${index % 2 !== 0 ? "lg:order-last" : ""}`}
              >
                <Portrait
                  image={founder.image}
                  border={founder.border}
                  glow={founder.glow}
                />
              </div>

              {/* Bio Column */}
              <div className="flex flex-col lg:col-span-7">
                <div className="mb-4 flex items-center space-x-3">
                  <span
                    className={`h-2 w-2 animate-pulse rounded-full bg-current ${founder.accent}`}
                  />
                  <span
                    className={`font-mono text-xs font-bold tracking-widest uppercase ${founder.accent}`}
                  >
                    {founder.id}
                  </span>
                </div>
                <h2 className="text-foreground mb-1 text-4xl font-bold tracking-tight">
                  {founder.name}
                </h2>
                <p className={`text-xl font-bold ${founder.accent} mb-6`}>
                  {founder.title}
                </p>
                <Badge className="text-muted-foreground mb-8 w-fit rounded-none border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase">
                  {founder.roleBadge}
                </Badge>
                <div className="relative border-l-2 border-white/5 pl-8">
                  <p className="text-muted-foreground text-lg leading-relaxed italic">
                    "{founder.bio}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
