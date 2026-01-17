import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, ScanEye, Waves, ArrowUpRight } from "lucide-react";

interface FieldReportProps {
  id: string;
  title: string;
  location: string;
  modules: string[];
  description: string;
  metrics: { label: string; value: string }[];
}

export function FieldReport({
  id,
  title,
  location,
  modules,
  description,
  metrics,
}: FieldReportProps) {
  return (
    <Card className="bg-card group hover:border-primary/40 overflow-hidden border-white/5 transition-all duration-500">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Visual Side: Tactical Map or Image Placeholder */}
          <div className="relative h-64 overflow-hidden bg-zinc-900 md:h-full">
            {/* Subtle scanline effect */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%]" />
            <div className="absolute top-4 left-4 z-20">
              <Badge className="bg-primary/10 text-primary border-primary/20 font-mono text-[10px] tracking-tighter uppercase">
                Live_Field_Report // {id}
              </Badge>
            </div>
          </div>

          {/* Data Side */}
          <div className="flex flex-col justify-between p-8">
            <div>
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-foreground text-2xl font-bold tracking-tight">
                  {title}
                </h3>
                <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-secondary mb-6 font-mono text-xs tracking-widest uppercase">
                {location}
              </p>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                {description}
              </p>

              {/* Stack Integration */}
              <div className="mb-8 flex gap-4">
                {modules.includes("Horus") && (
                  <Cpu className="text-primary h-5 w-5 opacity-60" />
                )}
                {modules.includes("Odin") && (
                  <ScanEye className="text-secondary h-5 w-5 opacity-60" />
                )}
                {modules.includes("Aether") && (
                  <Waves className="text-terminal h-5 w-5 opacity-60" />
                )}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
              {metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-muted-foreground font-mono text-[10px] tracking-tighter uppercase">
                    {m.label}
                  </p>
                  <p className="text-foreground text-lg font-bold">{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
