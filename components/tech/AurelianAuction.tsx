"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Badge } from "@/components/ui/badge";

const AUCTION_CODE = `
// src/modules/strategy/swarm/CbbaAuctioneer.cpp

double Aurelian::calculate_bid(const Task& t, const AgentState& s) {
    // J = w1(Distance) + w2(1/Battery) + w3(SignalRisk)
    
    double dist_j = compute_euclidean(s.pos, t.target);
    double batt_j = 1.0 / s.battery_level;
    double rf_j   = get_rssi_penalty(t.target);

    return (W1 * dist_j) + (W2 * batt_j) + (W3 * rf_j);
}
`;

export function AurelianAuction() {
  return (
    <div className="group hover:border-secondary/40 relative rounded-sm border border-white/10 bg-[#0a0a0a] shadow-2xl transition-all">
      <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-3">
        <div className="flex items-center space-x-2">
          <div className="bg-secondary h-2 w-2 animate-pulse rounded-full" />
          <span className="text-muted-foreground font-mono text-[10px] tracking-widest uppercase">
            Aurelian_Strategy // Market_Auction.cpp
          </span>
        </div>
        <Badge
          variant="outline"
          className="border-secondary/30 text-secondary font-mono text-[9px]"
        >
          C++23 // OPTIMIZED
        </Badge>
      </div>
      <div className="p-1">
        <SyntaxHighlighter
          language="cpp"
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: "24px",
            background: "transparent",
            fontSize: "12px",
            lineHeight: "1.6",
          }}
        >
          {AUCTION_CODE}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
