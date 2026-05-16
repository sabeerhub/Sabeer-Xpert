"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Scene5() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".product-launch");

      sections.forEach((section: any) => {
        gsap.fromTo(section.querySelector(".product-visual"),
          { scale: 0.8, opacity: 0, rotateY: 45 },
          {
            scale: 1, opacity: 1, rotateY: 0,
            scrollTrigger: {
              trigger: section,
              start: "top center",
              end: "bottom center",
              scrub: true,
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-black">
      {/* Zero Bank Launch */}
      <div className="product-launch h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-blue/5 to-transparent pointer-events-none" />

        <div className="relative z-10 text-center mb-20 px-4">
          <motion.span className="text-electric-blue font-bold tracking-[0.5em] uppercase text-xs mb-4 block">World Premiere</motion.span>
          <h2 className="text-7xl md:text-[10vw] font-bold tracking-tighter leading-none mb-6">ZERO BANK.</h2>
          <p className="text-white/40 text-xl md:text-2xl font-light">The first AI-native wealth engine.</p>
        </div>

        <div className="product-visual relative w-full max-w-5xl aspect-video glass-morphism rounded-[60px] flex items-center justify-center overflow-hidden cinematic-shadow mx-4">
          <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/20 to-transparent" />
          <div className="text-white/10 text-4xl md:text-6xl font-black tracking-[1em] uppercase">SECURE</div>

          {/* Mockup Elements */}
          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
            <div className="flex flex-col gap-2">
               <div className="w-32 h-2 bg-white/20 rounded-full" />
               <div className="w-24 h-2 bg-white/10 rounded-full" />
            </div>
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
               <div className="w-8 h-8 rounded-full bg-electric-blue animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Iris OS Launch */}
      <div className="product-launch h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ai-purple/5 to-transparent pointer-events-none" />

        <div className="relative z-10 text-center mb-20 px-4">
          <motion.span className="text-ai-purple font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Spatial Intelligence</motion.span>
          <h2 className="text-7xl md:text-[10vw] font-bold tracking-tighter leading-none mb-6">IRIS OS.</h2>
          <p className="text-white/40 text-xl md:text-2xl font-light">See reality through the eyes of AI.</p>
        </div>

        <div className="product-visual relative w-full max-w-5xl aspect-video glass-morphism rounded-[60px] flex items-center justify-center overflow-hidden cinematic-shadow mx-4">
          <div className="absolute inset-0 bg-gradient-to-tr from-ai-purple/20 to-transparent" />
          <div className="text-white/10 text-4xl md:text-6xl font-black tracking-[1em] uppercase">VISION</div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-ai-purple/30 rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full" />
        </div>
      </div>
    </section>
  );
}
