import {
  Cpu,
  Scale,
  Waves,
  ScanEye,
  Settings2,
  Play,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const modules = [
  {
    name: "Horus",
    title: "The Kernel",
    icon: <Cpu className="text-primary h-8 w-8" />,
    description:
      "The decentralized executive state manager. Resolves multi-agent intent conflicts without a central server.",
    className: "md:col-span-2 md:row-span-2",
    accent: "border-primary/20 hover:border-primary/50",
  },
  {
    name: "Odin",
    title: "The Vision",
    icon: <ScanEye className="text-secondary h-6 w-6" />,
    description:
      "Semantic perception engine for real-time object classification and spatial awareness.",
    className: "md:col-span-1 md:row-span-1",
    accent: "border-secondary/20 hover:border-secondary/50",
  },
  {
    name: "Aurelian",
    title: "The Strategy",
    icon: <Scale className="text-secondary h-6 w-6" />,
    description:
      "Market-based task auctioning for optimal agent allocation across the swarm.",
    className: "md:col-span-1 md:row-span-1",
    accent: "border-secondary/20 hover:border-secondary/50",
  },
  {
    name: "Aether",
    title: "The Comms",
    icon: <Waves className="text-terminal h-6 w-6" />,
    description:
      "Inverted priority mesh networking designed for RF-denied environments.",
    className: "md:col-span-1 md:row-span-1",
    accent: "border-terminal/20 hover:border-terminal/50",
  },
  {
    name: "Archimedes",
    title: "The HAL",
    icon: <Settings2 className="text-primary h-6 w-6" />,
    description:
      "Universal hardware abstraction layer for MAVLink, ROS 2, and custom silicon.",
    className: "md:col-span-1 md:row-span-1",
    accent: "border-primary/20 hover:border-primary/50",
  },
];

export function PantheonGrid() {
  return (
    <section className="bg-transparent py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-primary mb-12 font-mono text-xs tracking-[0.3em] uppercase">
          03 // Systems Architecture
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {modules.map((m) => (
            <div
              key={m.name}
              className={`${m.className} ${m.accent} bg-card group relative overflow-hidden border p-8 transition-all`}
            >
              <div className="absolute -inset-px bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-4">{m.icon}</div>
                <h3 className="text-foreground text-xl font-bold">{m.name}</h3>
                <p className="text-primary mb-4 font-mono text-[10px] tracking-widest uppercase">
                  {m.title}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}

          {/* New Simulation CTA Card */}
          <Link
            href="/simulation"
            className="border-primary/40 bg-primary/5 hover:border-primary group relative overflow-hidden border p-8 transition-all md:col-span-1 md:row-span-1"
          >
            <div className="from-primary/10 absolute -inset-px bg-gradient-to-br to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <Play className="text-primary fill-primary/20 mb-4 h-8 w-8" />
                <h3 className="text-foreground text-xl font-bold">
                  Live Simulation
                </h3>
                <p className="text-primary mb-4 font-mono text-[10px] tracking-widest uppercase">
                  The Arena
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Launch the web-based environment to see the Pantheon modules
                  coordinate in real-time.
                </p>
              </div>
              <div className="text-primary mt-6 flex items-center text-xs font-bold tracking-widest uppercase transition-all group-hover:gap-2">
                Execute Simulation <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
