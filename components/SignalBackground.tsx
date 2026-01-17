"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function SignalBackground() {
  const { scrollYProgress } = useScroll();

  // Scroll animations
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  // We'll use a constant subtle opacity so you can actually see it first
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3]);

  return (
    // This container now provides the "Void Black" background for the whole site
    <div className="fixed inset-0 z-[-1] bg-[#030303]">
      <motion.div
        style={{ rotate, scale, opacity }}
        className="absolute inset-[-5%] h-[110%] w-[110%]"
      >
        {/* The Grid */}
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #FF5722 1px, transparent 1px),
              linear-gradient(to bottom, #FF5722 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black, transparent 90%)",
          }}
        />
      </motion.div>

      {/* Vignette to ensure content stays readable */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)]" />
    </div>
  );
}
