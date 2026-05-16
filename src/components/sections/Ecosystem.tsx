"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Zap, Shield, Database, BarChart } from "lucide-react";

const ecosystemItems = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Neural Core",
    description: "The central AI brain powering every interaction within the Sabeer-Verse.",
    color: "bg-ai-purple/20",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Mesh",
    description: "Decentralized infrastructure ensuring ultra-low latency worldwide.",
    color: "bg-neon-cyan/20",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Real-time Sync",
    description: "Synchronizing data across all platforms in milliseconds.",
    color: "bg-electric-blue/20",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Sentinel Security",
    description: "Military-grade encryption and AI-driven threat detection.",
    color: "bg-white/10",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Quantum Storage",
    description: "Immutable, scalable data lakes built for the future of fintech.",
    color: "bg-ai-purple/20",
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Predictive Analytics",
    description: "Advanced forecasting models for enterprise-level decision making.",
    color: "bg-neon-cyan/20",
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-32 bg-matte-black relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold tracking-tighter mb-6"
          >
            A Unified <span className="text-gradient">Ecosystem.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/50 text-xl max-w-2xl mx-auto font-light"
          >
            Sabeer-Verse is more than a suite of tools. It's an interconnected universe
            of technologies working in perfect harmony.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecosystemItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[32px] glass-morphism group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/40 leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
