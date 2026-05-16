"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-20 bg-matte-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
              SABEER-VERSE
            </Link>
            <p className="text-white/40 max-w-sm text-lg font-light">
              Engineering the next generation of AI-powered technology ecosystems.
              Built for the future, today.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-white/40">
              <li><Link href="#ecosystem" className="hover:text-white transition-colors">Ecosystem</Link></li>
              <li><Link href="#products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="#vision" className="hover:text-white transition-colors">Vision</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-white/40">
              <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5">
          <span className="text-white/20 text-sm">
            © {new Date().getFullYear()} Sabeer-Verse. All rights reserved.
          </span>
          <div className="flex gap-8 text-white/20 text-sm">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
