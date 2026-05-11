"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Who We Are", href: "#who-we-are" },
    { name: "What We Do", href: "#what-we-do" },
    { name: "Projects", href: "#edu-funds" },
    { name: "Donate", href: "#donate" },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed w-full z-50 transition-all duration-500 px-6 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="relative group">
          <img
            src="https://i.imgur.com/96Ycrrj.png"
            alt="Noah's Arc Logo"
            className={`h-12 w-auto transition-all duration-500 ${
              isScrolled ? "brightness-100" : "brightness-0 invert"
            }`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] hover:text-amber-500 transition ${
                isScrolled ? "text-stone-600" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#donate"
            className="bg-amber-500 text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg hover:bg-amber-600 transition transform hover:scale-105"
          >
            Sponsor
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden text-2xl ${isScrolled ? "text-stone-900" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-8 px-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-stone-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#donate"
              className="bg-amber-500 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              Sponsor
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
