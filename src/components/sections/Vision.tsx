"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section id="vision" className="relative py-32 bg-matte-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-ai-purple/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-[40px] glass-morphism border-white/10 flex items-center justify-center relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent z-10" />
             <div className="text-white/20 italic font-light">Visionary Founder Presentation</div>
             {/* Abstract light effect */}
             <motion.div
               animate={{
                 opacity: [0.3, 0.6, 0.3],
                 scale: [1, 1.1, 1]
               }}
               transition={{ duration: 8, repeat: Infinity }}
               className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-neon-cyan/20 blur-[80px] rounded-full"
             />
          </motion.div>

          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-neon-cyan font-bold tracking-[0.2em] uppercase text-sm mb-6"
            >
              The Visionary
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-10 leading-[0.9]"
            >
              ENGINEERING <br />
              <span className="text-gradient">THE UNKNOWN.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 text-xl text-white/60 font-light leading-relaxed"
            >
              <p>
                "At Sabeer-Verse, we don't just build software. We craft the digital
                fabric of tomorrow. Our mission is to bridge the gap between human
                imagination and artificial intelligence."
              </p>
              <p>
                Founded by Sabeer, the ecosystem is a testament to what happens when
                you refuse to accept the status quo. We are building for the dreamers,
                the builders, and the future-makers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="w-16 h-px bg-white/20" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg">Sabeer</span>
                <span className="text-white/40 text-sm">Founder & Chief Architect</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
