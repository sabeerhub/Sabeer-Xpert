"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Ecosystem", href: "#ecosystem" },
  { name: "Products", href: "#products" },
  { name: "Vision", href: "#vision" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-4 md:top-8 inset-x-4 md:inset-x-0 mx-auto z-[100] w-auto md:w-fit px-4 md:px-6 py-3 rounded-full glass-morphism flex items-center justify-between md:justify-start gap-4 md:gap-8"
    >
      <Link href="/" className="text-lg md:text-xl font-bold tracking-tighter whitespace-nowrap">
        SABEER-VERSE
      </Link>

      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <button className="px-4 py-1.5 rounded-full bg-white text-black text-xs md:text-sm font-bold hover:bg-white/90 transition-colors whitespace-nowrap">
        Connect
      </button>
    </motion.nav>
  );
}
