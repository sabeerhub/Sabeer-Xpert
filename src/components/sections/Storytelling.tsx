"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const storySteps = [
  {
    title: "The Genesis of Intelligence",
    description: "We started with a simple vision: to make AI feel human, intuitive, and invisible.",
    image: "/api/placeholder/800/600",
  },
  {
    title: "Unmatched Scale",
    description: "Processing billions of data points in real-time, Sabeer-Verse powers the world's most ambitious systems.",
    image: "/api/placeholder/800/600",
  },
  {
    title: "Future Proof",
    description: "Our ecosystem evolves with you, anticipating needs before they arise.",
    image: "/api/placeholder/800/600",
  },
];

export default function Storytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray(".story-step");

      steps.forEach((step: any, i) => {
        gsap.fromTo(
          step,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            },
          }
        );
      });

      // Sticky background effect
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: ".sticky-bg",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[300vh] bg-matte-black py-20">
      <div className="sticky-bg absolute inset-0 h-screen w-full flex items-center justify-center pointer-events-none">
        <div className="w-[60vw] h-[60vw] bg-electric-blue/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {storySteps.map((step, index) => (
          <div
            key={index}
            className="story-step h-screen flex flex-col items-center justify-center text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              {step.title}
            </h2>
            <p className="max-w-2xl text-xl md:text-2xl text-white/50 font-light">
              {step.description}
            </p>
            <div className="mt-12 w-full max-w-4xl aspect-video rounded-3xl overflow-hidden glass-morphism border-white/10 flex items-center justify-center">
               <div className="text-white/20 text-sm italic">Visual Representation of {step.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
