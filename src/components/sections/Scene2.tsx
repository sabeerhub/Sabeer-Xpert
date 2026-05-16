"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Scene2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, scale: 1.1, filter: "blur(10px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen flex items-center justify-center bg-black">
      <div ref={textRef} className="max-w-5xl px-8 text-center">
        <h2 className="text-4xl md:text-7xl font-light tracking-tight leading-tight">
          Sabeer-Verse is more than technology.
          It is an <span className="text-neon-cyan italic">autonomous intelligence ecosystem</span> built to redefine reality.
        </h2>
      </div>
    </section>
  );
}
