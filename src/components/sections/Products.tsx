"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    title: "Zero Bank",
    category: "Fintech",
    description: "The world's first AI-native banking experience. Managing wealth at the speed of thought.",
    tag: "Beta",
  },
  {
    title: "Iris OS",
    category: "AI Systems",
    description: "A spatial operating system powered by multimodal intelligence.",
    tag: "Coming Soon",
  },
  {
    title: "Nexus Core",
    category: "Infrastructure",
    description: "Enterprise-grade real-time systems for the next billion users.",
    tag: "Enterprise",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-32 bg-matte-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold tracking-tighter"
            >
              CRAFTED <br />
              <span className="text-white/30">FOR PERFORMANCE.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-md text-white/50 text-lg font-light leading-relaxed"
          >
            Our products are engineered with obsession. Every pixel, every interaction,
            and every line of code is optimized for the elite.
          </motion.p>
        </div>

        <div className="space-y-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] md:h-[500px] rounded-[32px] md:rounded-[40px] overflow-hidden glass-morphism border-white/5 p-8 md:p-12 flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-neon-cyan mb-2 block">
                    {product.category}
                  </span>
                  <h3 className="text-3xl md:text-6xl font-bold tracking-tighter">
                    {product.title}
                  </h3>
                </div>
                <span className="px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-white/10 bg-white/5 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">
                  {product.tag}
                </span>
              </div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
                <p className="max-w-md text-lg md:text-xl text-white/50 font-light">
                  {product.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center text-black self-start md:self-auto"
                >
                  <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
                </motion.button>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-electric-blue/20 blur-[100px] rounded-full group-hover:bg-electric-blue/40 transition-colors duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
