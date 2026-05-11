import Link from "next/link";
import { Mail, Phone, MapPin, Link2, Share2, Globe } from "lucide-react";
import { siteContent } from "@/lib/data";

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer id="contact" className="bg-stone-900 text-stone-400 py-16 px-6">
      <div className="container mx-auto grid md:grid-cols-4 gap-12 border-b border-stone-800 pb-12">
        <div className="col-span-1 md:col-span-1 text-center md:text-left">
          <Link href="#" className="mb-6 block">
            <img
              src="https://i.imgur.com/96Ycrrj.png"
              alt="Noah's Arc Logo"
              className="h-16 w-auto brightness-110 mx-auto md:mx-0"
            />
          </Link>
          <p className="text-xs leading-loose">
            A 501(c)(3) non-profit organization helping children choose peace through the power of expression.
          </p>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Connect</h5>
          <ul className="text-xs space-y-3">
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-amber-500" /> {footer.email}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-amber-500" /> {footer.phone}
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="text-amber-500 mt-1" /> {footer.address}
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navigation</h5>
          <ul className="text-xs space-y-3 font-bold uppercase tracking-widest">
            <li>
              <Link href="#who-we-are" className="hover:text-amber-500 transition">
                Who We Are
              </Link>
            </li>
            <li>
              <Link href="#what-we-do" className="hover:text-amber-500 transition">
                What We Do
              </Link>
            </li>
            <li>
              <Link href="#edu-funds" className="hover:text-amber-500 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#donate" className="hover:text-amber-500 transition">
                Donate
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-right">
          <h5 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Social</h5>
          <div className="flex justify-center md:justify-end gap-6 text-xl text-white/50">
            <Link href={footer.social.instagram} className="hover:text-amber-500 transition">
              <Link2 size={20} />
            </Link>
            <Link href={footer.social.facebook} className="hover:text-amber-500 transition">
              <Share2 size={20} />
            </Link>
            <Link href={footer.social.twitter} className="hover:text-amber-500 transition">
              <Globe size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 text-center text-[10px] font-bold uppercase tracking-[0.3em]">
        &copy; {new Date().getFullYear()} Noah's Arc Foundation. All Rights Reserved. | Development by TCA Digital
      </div>
    </footer>
  );
}
