"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, X } from "lucide-react";
import { siteContent } from "@/lib/data";

export default function Footer() {
  const { footer, topBar } = siteContent;
  const [modalContent, setModalContent] = useState<{ title: string; content: string } | null>(null);

  const legalTexts = {
    privacy: {
      title: "Privacy Policy",
      content: "At Noah’s Arc Foundation, your privacy is our priority. We only collect essential information required to process your donations and improve our community outreach. Your personal data is never sold or shared with third parties for marketing purposes. We employ rigorous security measures to ensure your information remains confidential and protected at all times."
    },
    terms: {
      title: "Terms of Use",
      content: "By accessing this website, you agree to be bound by these terms of service, all applicable laws and regulations. The materials contained in this website are protected by applicable copyright and trademark law. Noah’s Arc Foundation reserves the right to update these terms at any time without notice."
    },
    security: {
      title: "Security Policy",
      content: "We take security seriously. All financial transactions are processed through encrypted, industry-standard gateways. We do not store sensitive credit card information on our servers. Our website is regularly monitored for vulnerabilities to ensure a safe environment for our donors and partners."
    },
    cookies: {
      title: "Cookie Policy",
      content: "We use cookies to enhance your browsing experience and analyze our traffic. By continuing to use our site, you consent to our use of cookies. You can manage your cookie preferences through your browser settings at any time."
    }
  };

  return (
    <footer id="contact" className="bg-stone-900 text-stone-400 py-16 px-6">
      <div className="container mx-auto grid md:grid-cols-5 gap-12 border-b border-stone-800 pb-12 text-left">
        <div className="col-span-1 md:col-span-1">
          <Link href="#" className="mb-6 block">
            <img 
              src={footer.logo} 
              alt="Noah's Arc Logo" 
              className="h-16 w-auto brightness-110 mx-auto md:mx-0"
            />
          </Link>
          <p className="text-[10px] leading-loose">{footer.description}</p>
        </div>
        
        <div>
          <h5 className="text-white font-bold mb-6 uppercase text-[10px] tracking-widest">Connect</h5>
          <ul className="text-[10px] space-y-3">
            <li className="flex items-center gap-2"><Mail size={12} className="text-amber-500" /> {topBar.email}</li>
            <li className="flex items-center gap-2"><Phone size={12} className="text-amber-500" /> {topBar.phone}</li>
            <li className="flex items-start gap-2"><MapPin size={12} className="text-amber-500 mt-1" /> {topBar.address}</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-6 uppercase text-[10px] tracking-widest">Navigation</h5>
          <ul className="text-[10px] space-y-3 font-bold uppercase tracking-widest">
            <li><Link href="/" className="hover:text-amber-500 transition">Home</Link></li>
            <li><Link href="/what-we-do" className="hover:text-amber-500 transition">What We Do</Link></li>
            <li><Link href="/girls-dormitory" className="hover:text-amber-500 transition">Projects</Link></li>
            <li><Link href="/sponsor" className="hover:text-amber-500 transition">Donate</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-6 uppercase text-[10px] tracking-widest">Legal</h5>
          <ul className="text-[10px] space-y-3 font-bold uppercase tracking-widest">
            <li><button onClick={() => setModalContent(legalTexts.privacy)} className="hover:text-amber-500 transition text-left">Privacy Policy</button></li>
            <li><button onClick={() => setModalContent(legalTexts.terms)} className="hover:text-amber-500 transition text-left">Terms of Use</button></li>
            <li><button onClick={() => setModalContent(legalTexts.security)} className="hover:text-amber-500 transition text-left">Security</button></li>
            <li><button onClick={() => setModalContent(legalTexts.cookies)} className="hover:text-amber-500 transition text-left">Cookie Policy</button></li>
          </ul>
        </div>

        <div className="text-center md:text-right">
          <h5 className="text-white font-bold mb-6 uppercase text-[10px] tracking-widest">Social</h5>
          <div className="flex justify-center md:justify-end gap-6 text-xl text-white/50">
            <a href={topBar.socials.instagram} className="hover:text-amber-500 transition">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href={topBar.socials.facebook} className="hover:text-amber-500 transition">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href={topBar.socials.twitter} className="hover:text-amber-500 transition">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto mt-12 text-center text-[10px] font-bold uppercase tracking-[0.3em]">
        {footer.copy}
      </div>

      {/* Legal Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-stone-900/90 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full relative shadow-2xl animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setModalContent(null)}
              className="absolute top-6 right-6 text-stone-400 hover:text-stone-900 transition p-2"
            >
              <X size={24} />
            </button>
            <h3 className="text-3xl font-bold text-stone-900 mb-6 tracking-tight">{modalContent.title}</h3>
            <div className="h-px w-12 bg-amber-500 mb-8"></div>
            <p className="text-stone-600 leading-relaxed text-lg">
              {modalContent.content}
            </p>
            <div className="mt-12">
              <button 
                onClick={() => setModalContent(null)}
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
