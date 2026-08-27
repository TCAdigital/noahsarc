import { Mail, MapPin, Phone } from "lucide-react";

import SocialLinks from "@/components/SocialLinks";
import type { SiteContent } from "@/lib/data";

export default function TopBar({
  topBar,
}: {
  topBar: SiteContent["topBar"];
}) {
  return (
    <div className="bg-emerald-900 text-white py-2 px-4 text-sm hidden md:block">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-emerald-400" /> {topBar.address}
          </span>
          <a
            href={`tel:${topBar.phone.replace(/[^+\d]/g, "")}`}
            className="flex items-center gap-2 hover:text-emerald-400 transition"
          >
            <Phone size={14} className="text-emerald-400" /> {topBar.phone}
          </a>
          <a
            href={`mailto:${topBar.email}`}
            className="flex items-center gap-2 hover:text-emerald-400 transition"
          >
            <Mail size={14} className="text-emerald-400" /> {topBar.email}
          </a>
        </div>
        <SocialLinks
          socials={topBar.socials}
          className="flex space-x-4"
          linkClassName="hover:text-emerald-400 transition"
        />
      </div>
    </div>
  );
}
