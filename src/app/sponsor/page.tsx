"use client";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart, GraduationCap, Coffee, Home, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SponsorAChild() {
  return (
    <main className="bg-white text-stone-900 leading-relaxed min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/images/IMG_3476.jpg" 
            alt="Happy Child" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-amber-500 font-bold uppercase text-xs tracking-[0.4em] mb-4 block">Take Action</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Sponsor a Child</h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-xl">
              Give a child the gift of hope, dignity, and the opportunity to reach their full potential through the power of sponsorship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-24 bg-white px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How Your Sponsorship Helps</h2>
            <p className="text-stone-500">For about $35 a month, you can provide life-changing support to a child in need.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-stone-50 rounded-3xl text-center">
              <div className="w-16 h-16 bg-white text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <GraduationCap size={32} />
              </div>
              <h4 className="font-bold mb-2">Education</h4>
              <p className="text-stone-500 text-sm">Tuition, books, and uniforms for school success.</p>
            </div>
            <div className="p-8 bg-stone-50 rounded-3xl text-center">
              <div className="w-16 h-16 bg-white text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Coffee size={32} />
              </div>
              <h4 className="font-bold mb-2">Nutrition</h4>
              <p className="text-stone-500 text-sm">Balanced meals and clean drinking water.</p>
            </div>
            <div className="p-8 bg-stone-50 rounded-3xl text-center">
              <div className="w-16 h-16 bg-white text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Home size={32} />
              </div>
              <h4 className="font-bold mb-2">Well-being</h4>
              <p className="text-stone-500 text-sm">Healthcare and a safe environment to grow.</p>
            </div>
            <div className="p-8 bg-stone-50 rounded-3xl text-center">
              <div className="w-16 h-16 bg-white text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="font-bold mb-2">Mentorship</h4>
              <p className="text-stone-500 text-sm">Guidance and spiritual support for life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-stone-900">Our Children's Stories</h2>
            <p className="text-stone-500">A glimpse into the lives you are helping transform through sponsorship.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Copy of Kids and Teachers- Fun in the Classroom.JPG",
              "IMG_0290@1228040790.jpg",
              "IMG_0310@359351363.jpg",
              "IMG_0394@-1570701864.jpg",
              "IMG_2090@2051779444.jpg",
              "IMG_2876@-1381431336.jpg",
              "IMG_3644@740402960.jpg",
              "f17b3bd6-7067-42db-8cd8-916270d230c0.JPG"
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <img 
                  src={`/images/galeria/${encodeURIComponent(img)}`} 
                  alt={`Sponsorship Gallery ${i}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="py-24 bg-emerald-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute top-0 left-0 w-24 h-24 bg-amber-500/20 rounded-full blur-3xl"></div>
              <h2 className="text-4xl font-bold mb-8">The Connection Journey</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="text-4xl font-black text-white/10 shrink-0">01</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-amber-400">Choose a Child</h4>
                    <p className="text-stone-400 text-sm leading-relaxed">Connect with a child waiting for a sponsor. We'll send you their photo and story.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-4xl font-black text-white/10 shrink-0">02</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-amber-400">Exchange Letters</h4>
                    <p className="text-stone-400 text-sm leading-relaxed">Build a relationship through letters and photos. It's an encouragement for both of you.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-4xl font-black text-white/10 shrink-0">03</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-amber-400">See the Impact</h4>
                    <p className="text-stone-400 text-sm leading-relaxed">Receive annual updates on your child's progress in school and community activities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/education-fund-new.jpg" className="rounded-2xl h-80 w-full object-cover shadow-lg" alt="Uganda School" />
              <img src="/images/galeria/IMG_0290@1228040790.jpg" className="rounded-2xl h-80 w-full object-cover mt-12 shadow-lg" alt="Children Smiling" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ/CTA Final */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-stone-900">Ready to Change a Life?</h2>
            <p className="text-stone-500 mb-10 leading-relaxed">
              Join our community of sponsors and see the transformation firsthand. Your support makes a world of difference.
            </p>
            <Link href="/#donate" className="inline-flex items-center gap-3 bg-amber-500 text-white px-12 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-amber-600 transition shadow-xl">
              Sponsor Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
