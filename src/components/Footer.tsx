import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import SmartLink from "@/components/SmartLink";
import SocialLinks from "@/components/SocialLinks";
import type { SiteContent } from "@/lib/data";
import { DONATE_URL } from "@/lib/links";

const NAVIGATION = [
  { href: "/what-we-do", label: "What We Do" },
  { href: "/sponsor", label: "Sponsor a Child" },
  { href: "/education-fund", label: "Education Fund" },
  { href: "/girls-dormitory", label: "Girls’ Dormitory" },
  { href: "/contact", label: "Contact Us" },
];

/** Every page carries these, as required by the privacy review. */
const LEGAL = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
];

type FooterProps = {
  footer: SiteContent["footer"];
  topBar: SiteContent["topBar"];
};

export default function Footer({ footer, topBar }: FooterProps) {
  return (
    <footer id="site-footer" className="bg-stone-900 text-stone-400 py-16 px-6">
      <div className="container mx-auto grid md:grid-cols-5 gap-12 border-b border-stone-800 pb-12 text-left">
        <div>
          <Link href="/" className="mb-6 block">
            <Image
              src={footer.logo}
              alt="Noah’s Arc Organization"
              width={198}
              height={64}
              className="h-16 w-auto brightness-110 mx-auto md:mx-0"
            />
          </Link>
          <p className="text-[11px] leading-loose">{footer.description}</p>
        </div>

        <div>
          <h2 className="text-white font-bold mb-6 uppercase text-[10px] tracking-widest">
            Connect
          </h2>
          <ul className="text-[11px] space-y-3">
            <li className="flex items-center gap-2">
              <Mail size={12} className="text-amber-500 shrink-0" />
              <a
                href={`mailto:${topBar.email}`}
                className="hover:text-amber-500 transition break-all"
              >
                {topBar.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={12} className="text-amber-500 shrink-0" />
              <a
                href={`tel:${topBar.phone.replace(/[^+\d]/g, "")}`}
                className="hover:text-amber-500 transition"
              >
                {topBar.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={12} className="text-amber-500 mt-1 shrink-0" />
              {topBar.address}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-bold mb-6 uppercase text-[10px] tracking-widest">
            Navigation
          </h2>
          <ul className="text-[11px] space-y-3">
            {NAVIGATION.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-amber-500 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <SmartLink
                href={DONATE_URL}
                className="hover:text-amber-500 transition"
              >
                Donate
              </SmartLink>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-bold mb-6 uppercase text-[10px] tracking-widest">
            Legal
          </h2>
          <ul className="text-[11px] space-y-3">
            {LEGAL.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-amber-500 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center md:text-right">
          <h2 className="text-white font-bold mb-6 uppercase text-[10px] tracking-widest">
            Social
          </h2>
          <SocialLinks
            socials={topBar.socials}
            size={20}
            className="flex justify-center md:justify-end gap-6 text-white/50"
            linkClassName="hover:text-amber-500 transition"
          />
        </div>
      </div>

      <div className="container mx-auto mt-12 text-center text-[10px] font-bold uppercase tracking-[0.3em]">
        {footer.copy}
      </div>
    </footer>
  );
}
