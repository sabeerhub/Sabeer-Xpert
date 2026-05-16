"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Scene7() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 atmosphere opacity-30" />

      <div className="relative z-10 text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-[12vw] font-bold tracking-tighter leading-none mb-12"
        >
          JOIN THE <br /> <span className="text-gradient">FUTURE.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <button className="px-12 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform duration-500">
            Apply for Access
          </button>
          <button className="px-12 py-5 rounded-full glass-morphism font-bold text-lg hover:bg-white/10 transition-colors duration-500">
            Documentation
          </button>
        </motion.div>
      </div>

      <footer className="absolute bottom-12 left-0 w-full px-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold tracking-[0.3em] uppercase text-white/20">
        <div className="flex gap-12">
          <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
          <Link href="#" className="hover:text-white transition-colors">Discord</Link>
        </div>
        <span>© 2026 Sabeer-Verse. All rights reserved.</span>
        <div className="flex gap-12">
          <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </footer>
    </section>
  );
}
