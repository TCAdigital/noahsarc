import { ArrowRight, BookOpen, Home, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";

import Reveal from "@/components/Reveal";
import SmartLink from "@/components/SmartLink";
import { DORMITORY_DONATE_URL } from "@/lib/links";

export default function GirlsDormitory() {
  return (
    <main className="bg-white text-stone-900 leading-relaxed min-h-screen">
      {/* Hero Section - Standardized */}
      <section className="relative py-24 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/girls-dormitory-construction.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-left">
          <Reveal className="max-w-3xl" trigger="mount">
            <span className="text-amber-500 font-bold uppercase text-xs tracking-[0.4em] mb-4 block">Construction Projects</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Girls’ Dormitory</h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-xl">
              Building a safe, secure, and nurturing home for 250 girls.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content Section - Pattern: Photo Left, Text Right */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Photo Left */}
            <Reveal className="relative order-last lg:order-first">
              <div className="absolute -inset-4 bg-emerald-50 rounded-[3rem] -rotate-2 -z-10"></div>
              <div className="relative w-full aspect-[4/3] rounded-[3rem] shadow-2xl overflow-hidden">
                <Image
                  src="/images/girls-dormitory-construction.jpg"
                  alt="The dormitory under construction"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-stone-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    <Users size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-stone-900">250</div>
                    <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Girls’ Capacity</div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Text Right */}
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 tracking-tight">
                A <span className="text-emerald-600 italic">Safe Place</span> to Live and Learn
              </h2>
              <p className="text-xl text-stone-600 leading-relaxed mb-10">
                Our current dorms are overcrowded, compromising our girls’ health, safety, and well-being. The new dormitory is a direct response to this urgent need.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-emerald-600">
                    <Home size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Comfortable Living</h3>
                    <p className="text-stone-500">A spacious living environment designed to accommodate 250 girls safely and comfortably.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-emerald-600">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Secure & Nurturing</h3>
                    <p className="text-stone-500">A protected space designed to foster a sense of community and safety.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-emerald-600">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Learning Environment</h3>
                    <p className="text-stone-500">A conducive setting that supports both personal growth and academic learning.</p>
                  </div>
                </div>
              </div>

              <SmartLink
                href={DORMITORY_DONATE_URL}
                className="inline-flex items-center gap-3 bg-emerald-700 text-white px-10 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-emerald-800 transition shadow-xl mb-12"
              >
                Help Build the Home <ArrowRight size={18} />
              </SmartLink>

              {/* Project status */}
              <div className="p-8 bg-stone-50 rounded-[2rem] border border-stone-100 shadow-sm">
                <div className="flex flex-wrap justify-between items-end gap-6 mb-8">
                  <div>
                    <span className="text-emerald-700 font-bold uppercase text-[10px] tracking-widest block mb-2">Project Status</span>
                    <h3 className="text-xl font-bold text-stone-900">Phase 3 of Construction</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-black text-emerald-600 tracking-tighter">$115,906.34</span>
                    <span className="block text-[10px] uppercase font-bold text-stone-400 tracking-widest mt-1">Still needed</span>
                  </div>
                </div>

                <ol className="flex items-center gap-2 mb-6">
                  {[1, 2, 3].map((phase) => (
                    <li key={phase} className="flex-1">
                      <div
                        className={`h-2 rounded-full ${
                          phase < 3 ? "bg-emerald-600" : "bg-amber-500"
                        }`}
                      />
                      <span
                        className={`block mt-3 text-[9px] uppercase font-bold tracking-widest ${
                          phase === 3 ? "text-amber-600" : "text-stone-400"
                        }`}
                      >
                        Phase {phase}
                        {phase === 3 ? " · current" : ""}
                      </span>
                    </li>
                  ))}
                </ol>

                <p className="text-sm text-stone-600 leading-relaxed">
                  The girls’ dormitory is now in Phase 3 of construction, with
                  $115,906.34 still needed to complete the project.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote Section - Solid Green */}
      <section className="relative py-48 bg-emerald-950 text-white">
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            A safe home is the first step toward a bright future for every child.
          </h2>
        </div>
      </section>

    </main>
  );
}
