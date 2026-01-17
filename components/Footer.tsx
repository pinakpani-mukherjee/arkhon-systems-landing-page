"use client";

import { Separator } from "@/components/ui/separator";
import { LogoVertical } from "@/components/LogoVertical";
import { Github, Linkedin, Twitter, Instagram, AtSign } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background w-full border-t border-white/5 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* 1. Brand Identity */}
          <div className="flex flex-col items-start md:col-span-3">
            <LogoVertical className="text-primary mb-6 h-20 w-auto" />
            <p className="text-muted-foreground/60 max-w-xs font-mono text-[10px] leading-relaxed tracking-tighter uppercase">
              // Arkhon Industries <br />
              // Decentralized Swarm Orchestration <br />
              // HQ: Tokyo Node_Active
            </p>
          </div>

          {/* 2. Platform Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-primary mb-8 font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
              Platform
            </h4>
            <ul className="space-y-6">
              <li>
                <Link href="/technology" className="group block">
                  <span className="text-foreground group-hover:text-primary text-sm font-bold transition-colors">
                    Horus Kernel
                  </span>
                  <span className="text-muted-foreground/50 mt-1 block font-mono text-[9px] tracking-tighter uppercase">
                    // State Manager
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/technology#aurelian" className="group block">
                  <span className="text-foreground group-hover:text-secondary text-sm font-bold transition-colors">
                    Aurelian
                  </span>
                  <span className="text-muted-foreground/50 mt-1 block font-mono text-[9px] tracking-tighter uppercase">
                    // Market Logic
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/technology#aether" className="group block">
                  <span className="text-foreground group-hover:text-terminal text-sm font-bold transition-colors">
                    Aether Mesh
                  </span>
                  <span className="text-muted-foreground/50 mt-1 block font-mono text-[9px] tracking-tighter uppercase">
                    // Cognitive Link
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Organization Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-primary mb-8 font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
              Organization
            </h4>
            <ul className="space-y-6">
              <li>
                <Link href="/about" className="group block">
                  <span className="text-foreground group-hover:text-primary text-sm font-bold transition-colors">
                    About Us
                  </span>
                  <span className="text-muted-foreground/50 mt-1 block font-mono text-[9px] tracking-tighter uppercase">
                    // Mission Dossier
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="group block">
                  <span className="text-foreground group-hover:text-primary text-sm font-bold transition-colors">
                    Use Cases
                  </span>
                  <span className="text-muted-foreground/50 mt-1 block font-mono text-[9px] tracking-tighter uppercase">
                    // Deployments
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group block">
                  <span className="text-foreground group-hover:text-primary text-sm font-bold transition-colors">
                    Contact
                  </span>
                  <span className="text-muted-foreground/50 mt-1 block font-mono text-[9px] tracking-tighter uppercase">
                    // Inbound Portal
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Sensor Stack & Hardware */}
          <div className="md:col-span-2">
            <h4 className="text-primary mb-8 font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
              Hardware
            </h4>
            <ul className="space-y-6">
              <li>
                <Link href="/technology#odin" className="group block">
                  <span className="text-foreground group-hover:text-secondary text-sm font-bold transition-colors">
                    Odin Vision
                  </span>
                  <span className="text-muted-foreground/50 mt-1 block font-mono text-[9px] tracking-tighter uppercase">
                    // Edge Inference
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/technology#ptolemy" className="group block">
                  <span className="text-foreground group-hover:text-primary text-sm font-bold transition-colors">
                    Ptolemy
                  </span>
                  <span className="text-muted-foreground/50 mt-1 block font-mono text-[9px] tracking-tighter uppercase">
                    // Spatial Awareness
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 5. Status & Full Social Array */}
          <div className="flex flex-col md:col-span-3 md:items-end">
            <h4 className="text-primary mb-8 font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
              Signal_Status
            </h4>
            <div className="bg-primary/5 border-primary/20 text-primary mb-8 flex items-center gap-2 rounded border px-3 py-2 font-mono text-[9px]">
              <span className="bg-terminal h-1 w-1 animate-pulse rounded-full" />
              UP-LINK: ACTIVE // JP_TYO_NODE
            </div>
            {/* Restored Full Social Array */}
            <div className="flex flex-wrap gap-5 md:justify-end">
              <Github className="text-muted-foreground hover:text-primary size-4 cursor-pointer transition-colors" />
              <Linkedin className="text-muted-foreground hover:text-primary size-4 cursor-pointer transition-colors" />
              <Twitter className="text-muted-foreground hover:text-primary size-4 cursor-pointer transition-colors" />
              <Instagram className="text-muted-foreground hover:text-primary size-4 cursor-pointer transition-colors" />
              <AtSign className="text-muted-foreground hover:text-primary size-4 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <Separator className="mb-8 bg-white/5" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-muted-foreground font-mono text-[9px] tracking-[0.2em] uppercase">
            © 2026 ARKHON INDUSTRIES // ALL RIGHTS RESERVED
          </p>
          <div className="text-muted-foreground flex space-x-8 font-mono text-[9px] tracking-[0.2em] uppercase">
            <span className="hover:text-foreground cursor-pointer transition-colors">
              Security
            </span>
            <span className="hover:text-foreground cursor-pointer transition-colors">
              Compliance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
