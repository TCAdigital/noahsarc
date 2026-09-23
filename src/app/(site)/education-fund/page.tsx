import Image from "next/image";
import Reveal from "@/components/Reveal";
import { GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";

import SmartLink from "@/components/SmartLink";
import { EDUCATION_FUND_DONATE_URL } from "@/lib/links";

export default function EducationFunds() {
  return (
    <main className="bg-white text-stone-900 leading-relaxed min-h-screen">
      {/* Hero Section - Standardized */}
      <section className="relative py-24 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/education-fund.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <Reveal className="max-w-3xl" trigger="mount">
            <span className="text-amber-500 font-bold uppercase text-xs tracking-[0.4em] mb-4 block">Our Projects</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Education Fund</h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-xl">
              Helping students access the support they need to learn, grow, and continue their education with dignity.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content Section - Mission Style (Photo Left, Text Right) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Photo Left */}
            <Reveal className="relative order-last lg:order-first">
              <div className="absolute -inset-4 bg-emerald-50 rounded-[3rem] -rotate-2 -z-10"></div>
              <div className="relative w-full aspect-[4/3] rounded-[3rem] shadow-2xl overflow-hidden">
                <Image
                  src="/images/education-fund.jpg"
                  alt="Students supported by the education fund"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-stone-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-stone-900">100%</div>
                    <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Goes to programs</div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Text Right */}
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 tracking-tight">
                Supporting Students at <span className="text-emerald-600 italic">Every Stage</span>
              </h2>
              <p className="text-xl text-stone-600 leading-relaxed mb-10">
                The Noah’s Arc Education Fund helps students access the support they need to learn, grow, and continue their education with dignity. It covers the everyday essentials that make school possible.
              </p>

              <ul className="space-y-6 mb-12">
                {[
                  "Quality education and tuition fees",
                  "Nutritious food for healthy growth",
                  "Comfortable clothing and school uniforms",
                  "Access to essential medical care",
                  "Personal development resources"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-stone-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg font-bold text-emerald-800 leading-relaxed mb-10 border-l-4 border-amber-500 pl-6">
                100% of every donation goes directly toward supporting Noah’s
                Arc programs and the students, families, and communities they
                serve.
              </p>

              <SmartLink
                href={EDUCATION_FUND_DONATE_URL}
                className="inline-flex items-center gap-3 bg-emerald-700 text-white px-10 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-emerald-800 transition shadow-xl"
              >
                Support the Fund <ArrowRight size={18} />
              </SmartLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote Section - Parallax Style (as learned from Core Values) */}
      <section className="relative py-40 overflow-hidden bg-emerald-900">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover opacity-30 grayscale"
          style={{ backgroundImage: 'url("/images/gallery/gallery-01.jpg")' }}
        ></div>
        <div className="absolute inset-0 bg-emerald-950/70 mix-blend-multiply"></div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Investing in education is the most effective way to break the cycle of poverty.
          </h2>
        </div>
      </section>

    </main>
  );
}
