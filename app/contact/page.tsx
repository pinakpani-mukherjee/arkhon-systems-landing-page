"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Send, Globe, ShieldCheck, Zap } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Logic for Resend will go here later
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent px-6 pt-32 pb-20">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 z-0 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Left Column: Tactical Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="border-primary/30 bg-primary/5 text-primary mb-6 px-4 py-1 font-mono text-[10px] tracking-[0.4em] uppercase"
            >
              Comms_Protocol // Inbound
            </Badge>
            <h1 className="text-foreground mb-6 text-5xl font-extrabold tracking-tighter sm:text-7xl">
              Establish <br />
              <span className="text-primary">Uplink</span>
            </h1>
            <p className="text-muted-foreground mb-12 max-w-md text-lg leading-relaxed">
              Initiate a direct channel for enterprise pilots, academic
              collaboration, or strategic investment inquiries.
            </p>

            {/* Terminal Status Cards */}
            <div className="space-y-4">
              <div className="group hover:border-primary/30 flex items-start rounded-sm border border-white/5 bg-white/5 p-4 transition-colors">
                <Globe className="text-primary mt-1 mr-4 h-5 w-5" />
                <div>
                  <h4 className="text-foreground text-sm font-bold tracking-widest uppercase">
                    Tokyo Node
                  </h4>
                  <p className="text-muted-foreground mt-1 font-mono text-xs">
                    LAT: 35.6762° N // LONG: 139.6503° E
                  </p>
                </div>
              </div>
              <div className="flex items-start rounded-sm border border-white/5 bg-white/5 p-4">
                <ShieldCheck className="text-secondary mt-1 mr-4 h-5 w-5" />
                <div>
                  <h4 className="text-foreground text-sm font-bold tracking-widest uppercase">
                    Encryption
                  </h4>
                  <p className="text-muted-foreground mt-1 font-mono text-xs">
                    End-to-End Secure Channel Active
                  </p>
                </div>
              </div>
              <div className="flex items-start rounded-sm border border-white/5 bg-white/5 p-4">
                <Zap className="text-terminal mt-1 mr-4 h-5 w-5" />
                <div>
                  <h4 className="text-foreground text-sm font-bold tracking-widest uppercase">
                    Response Time
                  </h4>
                  <p className="text-muted-foreground mt-1 font-mono text-xs">
                    Typically &lt; 24 Hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Transmission Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="from-primary/20 to-secondary/20 relative rounded-sm bg-gradient-to-br via-transparent p-1"
          >
            <div className="bg-card rounded-sm border border-white/10 p-8 shadow-2xl md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-muted-foreground ml-1 font-mono text-[10px] tracking-widest uppercase">
                      Full_Name
                    </label>
                    <Input
                      placeholder="Kenichi Yamada"
                      className="focus-visible:ring-primary h-12 rounded-none border-white/10 bg-transparent"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-muted-foreground ml-1 font-mono text-[10px] tracking-widest uppercase">
                      Email_Address
                    </label>
                    <Input
                      type="email"
                      placeholder="query@arkhon.sys"
                      className="focus-visible:ring-primary h-12 rounded-none border-white/10 bg-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-muted-foreground ml-1 font-mono text-[10px] tracking-widest uppercase">
                    Organization
                  </label>
                  <Input
                    placeholder="University / Corporation"
                    className="focus-visible:ring-primary h-12 rounded-none border-white/10 bg-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-muted-foreground ml-1 font-mono text-[10px] tracking-widest uppercase">
                    Message_Payload
                  </label>
                  <Textarea
                    placeholder="Briefly describe your mission parameters..."
                    className="focus-visible:ring-primary min-h-[150px] resize-none rounded-none border-white/10 bg-transparent"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 flex h-14 w-full items-center justify-center gap-3 rounded-none font-bold tracking-widest transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Zap className="h-4 w-4 animate-spin" /> TRANSMITTING...
                    </span>
                  ) : (
                    <>
                      TRANSMIT MESSAGE <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="text-muted-foreground mt-4 text-center font-mono text-[9px] tracking-widest uppercase">
                  By transmitting, you agree to Arkhon secure comms protocols.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
