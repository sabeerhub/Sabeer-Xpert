"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const systems = [
  {
    title: "Neural Core",
    description: "The autonomous brain of the ecosystem.",
    detail: "Processing 4.2 quadrillion parameters per second with zero-latency inference.",
  },
  {
    title: "Quantum Mesh",
    description: "Instantaneous global connectivity.",
    detail: "Decentralized infrastructure utilizing photon-based synchronization.",
  },
  {
    title: "Sentinel",
    description: "The guardian of digital integrity.",
    detail: "AI-driven proactive defense systems that evolve with every threat.",
  }
];

export default function Scene4() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".system-item");

      items.forEach((item: any, i) => {
        gsap.from(item, {
          opacity: 0,
          x: i % 2 === 0 ? -100 : 100,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-32">
          <span className="text-neon-cyan font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Deep Systems</span>
          <h2 className="text-[8vw] font-bold tracking-tighter leading-[0.9]">INTERNAL <br /> <span className="text-white/20">ARCHITECTURE.</span></h2>
        </div>

        <div className="space-y-32">
          {systems.map((system, i) => (
            <div key={system.title} className="system-item flex flex-col md:flex-row gap-12 items-start">
              <div className="w-full md:w-1/2">
                <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{system.title}</h3>
                <p className="text-xl md:text-2xl text-white/50 font-light max-w-md">{system.description}</p>
              </div>
              <div className="w-full md:w-1/2 p-12 glass-morphism rounded-[40px]">
                <p className="text-white/40 text-lg md:text-xl font-light italic leading-relaxed">
                  "{system.detail}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
