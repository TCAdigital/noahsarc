"use client";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Home, ShieldCheck, BookOpen, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function GirlsDormitory() {
  return (
    <main className="bg-white text-stone-900 leading-relaxed min-h-screen">
      {/* Hero Section - Standardized */}
      <section className="relative py-24 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/images/girls-dormitory-new.png" 
            alt="Dormitory Construction" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-amber-500 font-bold uppercase text-xs tracking-[0.4em] mb-4 block">Construction Projects</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Girls’ Dormitory</h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-xl">
              Building a safe, secure, and nurturing home for our girls and their mentors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section - Pattern: Photo Left, Text Right */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Photo Left */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-last lg:order-first"
            >
              <div className="absolute -inset-4 bg-emerald-50 rounded-[3rem] -rotate-2 -z-10"></div>
              <img 
                src="/images/girls-dormitory-new.png" 
                alt="Construction Site" 
                className="rounded-[3rem] shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-stone-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    <Users size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-stone-900">271</div>
                    <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Residents Capacity</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Right */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 tracking-tight">
                A Foundation for <span className="text-emerald-600 italic">Safety & Well-being</span>
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
                    <p className="text-stone-500">A spacious environment for 250 girls and 21 female teachers.</p>
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

              <Link href="/#donate" className="inline-flex items-center gap-3 bg-emerald-700 text-white px-10 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-emerald-800 transition shadow-xl mb-12">
                Help Build the Home <ArrowRight size={18} />
              </Link>

              {/* Construction Progress Bar */}
              <div className="p-8 bg-stone-50 rounded-[2rem] border border-stone-100 shadow-sm">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="text-emerald-700 font-bold uppercase text-[10px] tracking-widest block mb-2">Project Milestone</span>
                    <h3 className="text-xl font-bold text-stone-900">Construction Progress</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-black text-emerald-600 tracking-tighter">50%</span>
                  </div>
                </div>
                <div className="h-4 w-full bg-white rounded-full overflow-hidden border border-stone-200 p-1 shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "50%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:40px_40px] animate-shimmer"></div>
                  </motion.div>
                </div>
                <div className="flex justify-between mt-4">
                  <span className="text-[9px] uppercase font-bold text-stone-400 tracking-widest">Groundwork</span>
                  <span className="text-[9px] uppercase font-bold text-stone-400 tracking-widest">Completion</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section - Solid Green */}
      <section className="relative py-48 bg-emerald-950 text-white">
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold italic leading-tight">
            "A safe home is the first step toward a bright future for every child."
          </h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}
