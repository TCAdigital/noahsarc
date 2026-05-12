"use client";

import { siteContent } from "@/lib/data";
import { MapPin, Phone, Mail } from "lucide-react";

export default function TopBar() {
  const { topBar } = siteContent;

  return (
    <div className="bg-emerald-900 text-white py-2 px-4 text-sm hidden md:block">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-emerald-400" /> {topBar.address}
          </span>
          <span className="flex items-center gap-2">
            <Phone size={14} className="text-emerald-400" /> {topBar.phone}
          </span>
          <span className="flex items-center gap-2">
            <Mail size={14} className="text-emerald-400" /> {topBar.email}
          </span>
        </div>
        <div className="flex space-x-4">
          <a href={topBar.socials.facebook} className="hover:text-emerald-400 transition">
            <svg size={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href={topBar.socials.instagram} className="hover:text-emerald-400 transition">
            <svg size={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href={topBar.socials.twitter} className="hover:text-emerald-400 transition">
            <svg size={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
