"use client";

import { motion } from "framer-motion";

export default function Scene6() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-ai-purple/5 blur-[150px] rounded-full" />

      <div className="max-w-4xl px-8 relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-neon-cyan font-bold tracking-[0.4em] uppercase text-xs mb-12 block"
        >
          The Vision
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-7xl font-light tracking-tight leading-tight mb-16"
        >
          "We are not just building for the present. We are engineering the digital
          fabric of the next century."
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-12 h-px bg-white/20 mb-6" />
          <span className="text-white font-bold tracking-widest uppercase text-sm">Sabeer</span>
          <span className="text-white/30 text-xs mt-1">Founder & Chief Architect</span>
        </motion.div>
      </div>
    </section>
  );
}
