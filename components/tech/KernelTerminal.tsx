"use client";

import { motion } from "framer-motion";

const BOOT_LOGS = [
  "[BOOT] Loading Horus Kernel v1.4...",
  "[INIT] EventBus initialized (Zero-Copy P2P)",
  "[INIT] Blackboard memory allocated (RCU Sync)",
  "[MESH] Zenoh Gossip Mesh: 12 nodes discovered",
  "[WARN] LinkWiFi noise high (-60dBm). Switching to LoRa...",
  "[EXEC] Loading Mission DAG: MISSION_AXIMAND",
  "[READY] System State: INDESTRUCTIBLE",
];

export function KernelTerminal() {
  return (
    <div className="w-full rounded-sm border border-white/10 bg-black/80 p-6 font-mono text-xs shadow-2xl backdrop-blur-md">
      <div className="mb-6 flex space-x-2 border-b border-white/5 pb-4">
        <div className="bg-primary/50 size-2 rounded-full" />
        <div className="bg-secondary/50 size-2 rounded-full" />
        <div className="bg-terminal/50 size-2 rounded-full" />
        <span className="text-muted-foreground ml-4 text-[10px] tracking-widest uppercase">
          Kernel_Uplink // Tokyo_Node
        </span>
      </div>
      <div className="space-y-2">
        {BOOT_LOGS.map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.3 }}
            className={
              log.includes("WARN")
                ? "text-primary"
                : log.includes("READY")
                  ? "text-secondary font-bold"
                  : "text-terminal/80"
            }
          >
            <span className="mr-2 opacity-50">
              [{new Date().toLocaleTimeString()}]
            </span>
            {log}
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="bg-terminal inline-block h-4 w-2 translate-y-1"
        />
      </div>
    </div>
  );
}
