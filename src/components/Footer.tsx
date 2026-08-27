"use client";

import { Mail, MapPin, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import SocialLinks from "@/components/SocialLinks";
import type { SiteContent } from "@/lib/data";

const LEGAL_TEXTS = {
  privacy: {
    title: "Privacy Policy",
    content:
      "At Noah’s Arc Foundation, your privacy is our priority. We only collect essential information required to process your donations and improve our community outreach. Your personal data is never sold or shared with third parties for marketing purposes. We employ rigorous security measures to ensure your information remains confidential and protected at all times.",
  },
  terms: {
    title: "Terms of Use",
    content:
      "By accessing this website, you agree to be bound by these terms of service, all applicable laws and regulations. The materials contained in this website are protected by applicable copyright and trademark law. Noah’s Arc Foundation reserves the right to update these terms at any time without notice.",
  },
  security: {
    title: "Security Policy",
    content:
      "We take security seriously. All financial transactions are processed through encrypted, industry-standard gateways. We do not store sensitive credit card information on our servers. Our website is regularly monitored for vulnerabilities to ensure a safe environment for our donors and partners.",
  },
  cookies: {
    title: "Cookie Policy",
    content:
      "We use cookies to enhance your browsing experience and analyze our traffic. By continuing to use our site, you consent to our use of cookies. You can manage your cookie preferences through your browser settings at any time.",
  },
} as const;

type LegalKey = keyof typeof LEGAL_TEXTS;

type FooterProps = {
  footer: SiteContent["footer"];
  topBar: SiteContent["topBar"];
};

export default function Footer({ footer, topBar }: FooterProps) {
  const [openLegal, setOpenLegal] = useState<LegalKey | null>(null);
  const modal = openLegal ? LEGAL_TEXTS[openLegal] : null;

  return (
    <footer id="site-footer" className="bg-stone-900 text-stone-400 py-16 px-6">
      <div className="container mx-auto grid md:grid-cols-5 gap-12 border-b border-stone-800 pb-12 text-left">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="mb-6 block">
            <Image
              src={footer.logo}
              alt="Noah’s Arc Foundation"
              width={180}
              height={64}
              className="h-16 w-auto brightness-110 mx-auto md:mx-0"
            />
          </Link>
          <p className="text-[10px] leading-loose">{footer.description}</p>
        </div>

        <div>
          <h5 className="text-white font-bold mb-6 uppercase text-[10px] tracking-widest">
            Connect
          </h5>
          <ul className="text-[10px] space-y-3">
            <li className="flex items-center gap-2">
              <Mail size={12} className="text-amber-500" />
              <a
                href={`mailto:${topBar.email}`}
                className="hover:text-amber-500 transition"
              >
                {topBar.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={12} className="text-amber-500" />
              <a
                href={`tel:${topBar.phone.replace(/[^+\d]/g, "")}`}
                className="hover:text-amber-500 transition"
              >
                {topBar.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={12} className="text-amber-500 mt-1" />
              {topBar.address}
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-6 uppercase text-[10px] tracking-widest">
            Navigation
          </h5>
          <ul className="text-[10px] space-y-3 font-bold uppercase tracking-widest">
            <li>
              <Link href="/" className="hover:text-amber-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/what-we-do"
                className="hover:text-amber-500 transition"
              >
                What We Do
              </Link>
            </li>
            <li>
              <Link
                href="/girls-dormitory"
                className="hover:text-amber-500 transition"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link href="/sponsor" className="hover:text-amber-500 transition">
                Donate
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-6 uppercase text-[10px] tracking-widest">
            Legal
          </h5>
          <ul className="text-[10px] space-y-3 font-bold uppercase tracking-widest">
            {(Object.keys(LEGAL_TEXTS) as LegalKey[]).map((key) => (
              <li key={key}>
                <button
                  onClick={() => setOpenLegal(key)}
                  className="hover:text-amber-500 transition text-left uppercase"
                >
                  {LEGAL_TEXTS[key].title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center md:text-right">
          <h5 className="text-white font-bold mb-6 uppercase text-[10px] tracking-widest">
            Social
          </h5>
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

      {modal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-stone-900/90 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full relative shadow-2xl">
            <button
              onClick={() => setOpenLegal(null)}
              aria-label="Close"
              className="absolute top-6 right-6 text-stone-400 hover:text-stone-900 transition p-2"
            >
              <X size={24} />
            </button>
            <h3 className="text-3xl font-bold text-stone-900 mb-6 tracking-tight">
              {modal.title}
            </h3>
            <div className="h-px w-12 bg-amber-500 mb-8" />
            <p className="text-stone-600 leading-relaxed text-lg">
              {modal.content}
            </p>
            <div className="mt-12">
              <button
                onClick={() => setOpenLegal(null)}
                className="bg-stone-900 text-white px-8 py-3 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-emerald-800 transition"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
