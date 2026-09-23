"use client";

import { ChevronDown, Heart, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import SmartLink from "@/components/SmartLink";
import { DONATE_URL } from "@/lib/links";

const WHO_WE_ARE = [
  { href: "/mission-vision", label: "Mission And Vision" },
  { href: "/objectives", label: "Our Objectives" },
  { href: "/core-values", label: "Core Values" },
];

const PROJECTS = [
  { href: "/education-fund", label: "Education Fund" },
  { href: "/girls-dormitory", label: "Girls’ Dormitory Construction" },
];

export default function Navbar({ logo }: { logo: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      id="navbar"
      className={`sticky top-0 z-50 transition-all duration-300 border-b bg-white/95 backdrop-blur-md ${
        isScrolled ? "shadow-lg py-2" : "border-stone-100 py-4"
      }`}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center gap-6">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={logo}
            alt="Noah’s Arc Organization"
            width={198}
            height={64}
            priority
            className="h-12 md:h-16 w-auto transition-transform hover:scale-105"
          />
        </Link>

        {/* The gap before "Home" keeps the logo subtitle readable. */}
        <div className="hidden lg:flex lg:ml-12 xl:ml-16 space-x-9 font-bold text-[13px] text-stone-700 uppercase tracking-wider items-center">
          <Link href="/" className="hover:text-emerald-700 transition">
            Home
          </Link>

          <div className="relative group h-full flex items-center">
            <button className="hover:text-emerald-700 transition flex items-center gap-1 uppercase tracking-wider py-8 outline-none">
              Who We Are <ChevronDown size={10} className="mt-0.5" />
            </button>
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 w-56 bg-white shadow-xl border border-stone-100 rounded-b-lg py-2 overflow-hidden z-50 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              {WHO_WE_ARE.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-6 py-3 text-stone-600 hover:bg-stone-50 hover:text-emerald-700 transition border-b border-stone-50 last:border-b-0"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/what-we-do" className="hover:text-emerald-700 transition">
            What We Do
          </Link>
          <Link href="/sponsor" className="hover:text-emerald-700 transition py-4">
            Sponsor a Child
          </Link>

          <div className="relative group h-full flex items-center">
            <button className="hover:text-emerald-700 transition flex items-center gap-1 uppercase tracking-wider py-4 outline-none">
              Projects <ChevronDown size={10} className="mt-0.5" />
            </button>
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 w-64 bg-white shadow-xl border border-stone-100 rounded-b-lg py-2 overflow-hidden z-50 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              {PROJECTS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-6 py-3 text-stone-600 hover:bg-stone-50 hover:text-emerald-700 transition border-b border-stone-50 last:border-b-0"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/upcoming-visits"
            className="hover:text-emerald-700 transition"
          >
            Upcoming Visits
          </Link>
          <Link href="/contact" className="hover:text-emerald-700 transition">
            Contact Us
          </Link>
        </div>

        <div className="flex items-center space-x-4 shrink-0">
          <SmartLink
            href={DONATE_URL}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            <Heart size={14} fill="currentColor" />
            Donate
          </SmartLink>
          <button
            className="lg:hidden text-2xl"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-start py-20 space-y-6 text-xl font-bold uppercase overflow-y-auto px-10 text-center text-stone-800">
          <button
            className="absolute top-6 right-6 text-stone-800"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <X size={28} />
          </button>
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <div className="w-full h-px bg-stone-100" />
          <p className="text-stone-400 text-[10px] tracking-widest font-black">
            Who We Are
          </p>
          {WHO_WE_ARE.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <div className="w-full h-px bg-stone-100" />
          <Link href="/what-we-do" onClick={closeMenu}>
            What We Do
          </Link>
          <Link href="/sponsor" onClick={closeMenu} className="text-amber-600">
            Sponsor a Child
          </Link>
          <div className="w-full h-px bg-stone-100" />
          <p className="text-stone-400 text-[10px] tracking-widest font-black">
            Projects
          </p>
          {PROJECTS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <div className="w-full h-px bg-stone-100" />
          <Link href="/upcoming-visits" onClick={closeMenu}>
            Upcoming Visits
          </Link>
          <div className="w-full h-px bg-stone-100" />
          <Link href="/contact" onClick={closeMenu}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
