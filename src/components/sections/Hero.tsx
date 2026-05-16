"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ai-purple/20 blur-[120px] rounded-full" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-neon-cyan/10 blur-[100px] rounded-full" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20"
           style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-widest uppercase">
            Intelligence Reimagined
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[140px] font-bold tracking-tighter leading-[0.9] mb-8"
        >
          BUILD BEYOND <br />
          <span className="text-gradient">REALITY.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-xl text-lg md:text-xl text-white/50 font-light mb-12"
        >
          Engineering the next generation of AI-powered technology ecosystems.
          Sabeer-Verse is where visionary engineering meets future digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex gap-4"
        >
          <button className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform">
            Explore Ecosystem
          </button>
          <button className="px-8 py-4 rounded-full glass-morphism font-bold text-lg hover:bg-white/10 transition-colors">
            Our Vision
          </button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-32 h-32 rounded-3xl glass-morphism border-white/10 z-0 hidden lg:block"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 right-40 w-24 h-24 rounded-full glass-morphism border-white/10 z-0 hidden lg:block"
      />
    </section>
  );
}
