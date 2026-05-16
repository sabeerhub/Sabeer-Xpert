"use client";

import { motion } from "framer-motion";

export default function Scene1() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 atmosphere opacity-50" />

      {/* Massive orchestrated typography */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase text-white/40">
            System Initialization: Active
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[15vw] md:text-[18vw] font-bold tracking-[-0.05em] leading-[0.8] text-center"
        >
          SABEER <br />
          <span className="text-white/20">VERSE.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg md:text-2xl text-white/30 font-light tracking-wide italic">
            Engineering the Intelligence of Tomorrow.
          </p>
        </motion.div>
      </div>

      {/* Atmospheric depth elements */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-black to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] border border-white/[0.02] rounded-full animate-pulse-slow" />
    </section>
  );
}
