"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Scene3() {
  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Core expansion
      gsap.to(coreRef.current, {
        scale: 4,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: true,
        },
      });

      // Orbiting elements reveal
      gsap.from(".orbit-item", {
        opacity: 0,
        scale: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 20%",
          end: "bottom 80%",
          scrub: true,
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-black overflow-hidden flex items-center justify-center">
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* The Neural Core */}
        <div ref={coreRef} className="w-32 h-32 rounded-full bg-neon-cyan/20 blur-[60px] animate-pulse" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-[10vw] font-bold tracking-tighter opacity-10">ECOSYSTEM</h2>
        </div>

        {/* Orbiting Systems */}
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="orbit-item absolute top-1/4 left-1/4 glass-morphism p-8 rounded-3xl">
              <span className="text-neon-cyan font-bold tracking-widest uppercase text-xs mb-2 block">AI</span>
              <h3 className="text-2xl font-bold">Neural Core</h3>
           </div>
           <div className="orbit-item absolute bottom-1/4 right-1/4 glass-morphism p-8 rounded-3xl">
              <span className="text-ai-purple font-bold tracking-widest uppercase text-xs mb-2 block">Fintech</span>
              <h3 className="text-2xl font-bold">Zero Bank</h3>
           </div>
           <div className="orbit-item absolute top-1/3 right-1/5 glass-morphism p-8 rounded-3xl">
              <span className="text-electric-blue font-bold tracking-widest uppercase text-xs mb-2 block">OS</span>
              <h3 className="text-2xl font-bold">Iris OS</h3>
           </div>
        </div>
      </div>
    </section>
  );
}
