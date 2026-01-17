export function Vision() {
  return (
    <section className="border-t border-white/5 bg-transparent py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-primary mb-6 font-mono text-xs tracking-[0.3em] uppercase">
              01 // The Problem
            </h2>
            <h3 className="text-foreground mb-8 text-4xl font-bold tracking-tight">
              Robotics is trapped in <br />
              monolithic silos.
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Current orchestration systems are brittle, centralized, and
              hardware-dependent. When one node fails, the swarm collapses.
              Scaling from one robot to a hundred requires an entire
              infrastructure overhaul.
            </p>
          </div>

          <div className="bg-primary/5 border-primary/10 rounded-sm border p-10">
            <h2 className="text-secondary mb-6 font-mono text-xs tracking-[0.3em] uppercase">
              02 // The Solution
            </h2>
            <h3 className="text-foreground mb-8 text-4xl font-bold tracking-tight">
              A decentralized <br />
              operating kernel.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Arkhon Systems provides a hardware-agnostic layer that treats
              every agent as a modular node. Through our **Horus Kernel**,
              swarms become self-healing, intent-driven, and infinitely
              scalable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
