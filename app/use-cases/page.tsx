import { FieldReport } from "@/components/FieldReport";

const missions = [
  {
    id: "MISSION_ALPHA",
    title: "Autonomous Land Surveying",
    location: "Chichibu Highlands, Japan",
    modules: ["Horus", "Odin", "Archimedes"],
    description:
      "High-precision 3D topographical mapping. Our decentralized swarm handles real-time data fusion, allowing 20+ agents to map rugged terrain without a central processing hub.",
    metrics: [
      { label: "Precision", value: "±2cm" },
      { label: "Efficiency", value: "4x Standard" },
    ],
  },
  {
    id: "MISSION_BRAVO",
    title: "Vast-Area Firewatch",
    location: "Pacific Northwest, USA",
    modules: ["Horus", "Aurelian", "Aether"],
    description:
      "Continuous thermal surveillance over 50,000+ acres. Using Aurelian's task auctioning, agents dynamically redistribute themselves to cover gaps when a node returns for battery replacement.",
    metrics: [
      { label: "Uptime", value: "24/7/365" },
      { label: "Response", value: "< 2 mins" },
    ],
  },
  {
    id: "MISSION_OMEGA",
    title: "Human Search & Rescue",
    location: "Hokkaido Alpine Region",
    modules: ["Horus", "Odin", "Aether", "Aurelian"],
    description:
      "Time-critical recovery in RF-denied environments. The swarm uses Aether Mesh to maintain connectivity under heavy canopy, allowing semantic identification of targets via Odin Vision.",
    metrics: [
      { label: "Detection", value: "99.2%" },
      { label: "Mesh Range", value: "15km+" },
    ],
  },
];

export default function UseCasesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-20">
        <h2 className="text-primary mb-4 font-mono text-xs tracking-[0.4em] uppercase">
          02 // Operational Scope
        </h2>
        <h1 className="text-foreground mb-6 text-5xl font-extrabold tracking-tighter">
          Physical <span className="text-primary">Intelligence</span> at Scale
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
          Deploying the Arkhon kernel to solve the world's most complex
          multi-agent coordination problems in unstructured environments.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {missions.map((mission) => (
          <FieldReport key={mission.id} {...mission} />
        ))}
      </div>
    </div>
  );
}
