"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Heart } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      id="navbar" 
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-white/95 backdrop-blur-md border-stone-100 py-4"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img
            src="https://i.imgur.com/96Ycrrj.png"
            alt="Noah's Arc Logo"
            className="h-12 md:h-16 w-auto transition-transform hover:scale-105"
          />
        </Link>
        
        <div className="hidden lg:flex space-x-10 font-bold text-[13px] text-stone-700 uppercase tracking-wider items-center">
          <Link href="/" className="hover:text-emerald-700 transition">Home</Link>
          
          <div className="relative group h-full flex items-center">
            <button className="hover:text-emerald-700 transition flex items-center gap-1 uppercase tracking-wider py-8 outline-none">
              Who We Are <ChevronDown size={10} className="mt-0.5" />
            </button>
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 w-56 bg-white shadow-xl border border-stone-100 rounded-b-lg py-2 overflow-hidden z-50 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <Link href="/mission-vision" className="block px-6 py-3 text-stone-600 hover:bg-stone-50 hover:text-emerald-700 transition border-b border-stone-50">Mission And Vision</Link>
              <Link href="/objectives" className="block px-6 py-3 text-stone-600 hover:bg-stone-50 hover:text-emerald-700 transition border-b border-stone-50">Our Objectives</Link>
              <Link href="/core-values" className="block px-6 py-3 text-stone-600 hover:bg-stone-50 hover:text-emerald-700 transition">Core Values</Link>
            </div>
          </div>

          <Link href="/what-we-do" className="hover:text-emerald-700 transition">What We Do</Link>
          <Link href="/sponsor" className="hover:text-emerald-700 transition py-4">Sponsor a Child</Link>
          
          <div className="relative group h-full flex items-center">
            <button className="hover:text-emerald-700 transition flex items-center gap-1 uppercase tracking-wider py-4 outline-none">
              Projects <ChevronDown size={10} className="mt-0.5" />
            </button>
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 w-64 bg-white shadow-xl border border-stone-100 rounded-b-lg py-2 overflow-hidden z-50 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <Link href="/education-funds" className="block px-6 py-3 text-stone-600 hover:bg-stone-50 hover:text-emerald-700 transition border-b border-stone-50">Education Funds</Link>
              <Link href="/girls-dormitory" className="block px-6 py-3 text-stone-600 hover:bg-stone-50 hover:text-emerald-700 transition">Girls' Dormitory Construction</Link>
            </div>
          </div>

          <Link href="/future-trips" className="hover:text-emerald-700 transition">Future Trips</Link>

          <Link href="/#contact" className="hover:text-emerald-700 transition">Contact Us</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="#donate" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-105 active:scale-95">
            <Heart size={14} fill="currentColor" />
            Donate
          </Link>
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-start py-20 space-y-6 text-xl font-bold uppercase overflow-y-auto px-10 text-center text-stone-800">
          <button className="absolute top-6 right-6 text-3xl text-stone-800" onClick={() => setIsMenuOpen(false)}>&times;</button>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <div className="w-full h-px bg-stone-100"></div>
          <p className="text-stone-400 text-[10px] tracking-widest font-black">Who We Are</p>
          <Link href="/mission-vision" className="text-sm" onClick={() => setIsMenuOpen(false)}>Mission And Vision</Link>
          <Link href="/objectives" className="text-sm" onClick={() => setIsMenuOpen(false)}>Our Objectives</Link>
          <Link href="/core-values" className="text-sm" onClick={() => setIsMenuOpen(false)}>Core Values</Link>
          <div className="w-full h-px bg-stone-100"></div>
          <Link href="/what-we-do" onClick={() => setIsMenuOpen(false)}>What We Do</Link>
          <Link href="/sponsor" onClick={() => setIsMenuOpen(false)} className="text-amber-600">Sponsor a Child</Link>
          <div className="w-full h-px bg-stone-100"></div>
          <p className="text-stone-400 text-[10px] tracking-widest font-black">Projects</p>
          <Link href="/education-funds" className="text-sm" onClick={() => setIsMenuOpen(false)}>Education Funds</Link>
          <Link href="/girls-dormitory" className="text-sm" onClick={() => setIsMenuOpen(false)}>Girls' Dormitory Construction</Link>
          <div className="w-full h-px bg-stone-100"></div>
          <Link href="/future-trips" onClick={() => setIsMenuOpen(false)}>Future Trips</Link>
          <div className="w-full h-px bg-stone-100"></div>
          <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}
