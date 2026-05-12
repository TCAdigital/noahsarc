"use client";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Users, Heart, Sprout } from "lucide-react";

export default function MissionVision() {
  return (
    <main className="bg-white text-stone-900 leading-relaxed min-h-screen">

      {/* Hero Section */}
      <section className="relative py-24 bg-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/images/hero-mission.JPG" 
            alt="Impact" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-amber-500 font-bold uppercase text-xs tracking-[0.4em] mb-4 block">Who We Are</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Mission & Vision</h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-xl">
              Our commitment to empowering the children of Kyenjojo and building a future of dignity and hope.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-last lg:order-first"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-50 rounded-full -z-10 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop" 
                alt="Our Mission" 
                className="rounded-3xl shadow-2xl z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                <Target size={40} />
              </div>
            </motion.div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-emerald-600"></div>
                <span className="text-emerald-700 font-bold uppercase text-xs tracking-widest">Our Commitment</span>
              </div>
              <h2 className="text-4xl font-bold text-emerald-900 mb-8 tracking-tight leading-tight">
                Our Mission is to <span className="text-emerald-600">Empower</span> and <span className="text-emerald-600">Nurture</span>.
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                Our mission is to empower orphans and vulnerable children in Kyenjojo District, Mid-Western Uganda, by providing access to quality education and creating a nurturing environment for their holistic development. 
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700">
                    <Sprout size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">Sustainable Growth</h4>
                    <p className="text-sm text-stone-500">We strive to enhance income generation in the region by promoting sustainable agriculture practices.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">Peace & Human Rights</h4>
                    <p className="text-sm text-stone-500">Committed to promoting peace and resolving conflicts at the family level.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">Spiritual Well-being</h4>
                    <p className="text-sm text-stone-500">Foster spiritual growth among community members, creating an environment that nurtures faith.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-10 bg-emerald-50 rounded-3xl border border-emerald-100 italic text-stone-700 leading-loose"
          >
            "Additionally, we are committed to promoting peace, human rights, and resolving conflicts at the family level, fostering harmony and social cohesion. Finally, we aim to foster spiritual growth among community members, creating an environment that nurtures faith, values, and personal well-being. Together, we envision a community where every child thrives, individuals flourish economically, conflicts are resolved peacefully, and spiritual growth is nurtured."
          </motion.div>
        </div>
      </section>

      {/* Vision Section - Parallax Style */}
      <section className="relative py-48 overflow-hidden bg-emerald-950">
        <div 
          className="absolute inset-0 bg-fixed bg-center bg-cover scale-110"
          style={{ 
            backgroundImage: 'url("/images/IMG_0297@-985416488.jpg")',
          }}
        ></div>
        <div className="absolute inset-0 bg-emerald-950/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-transparent to-stone-900 opacity-40"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block p-4 bg-white/5 backdrop-blur-lg rounded-2xl mb-10 border border-white/10"
            >
              <Eye size={48} className="text-amber-400" />
            </motion.div>
            <h2 className="text-xs uppercase font-black tracking-[0.5em] text-amber-500 mb-8">The Vision</h2>
            <p className="text-4xl md:text-6xl font-bold leading-tight mb-12 tracking-tight text-white">
              To have a community that is free from <span className="text-amber-400 italic">hunger</span>, poverty, illiteracy, preventable diseases and <span className="text-emerald-400 italic">spiritually empowered</span>.
            </p>
            <div className="h-px w-24 bg-white/20 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Core Values Section Placeholder */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-16">Our Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl transition-shadow duration-500">
              <Heart className="text-red-500 mx-auto mb-4" size={32} />
              <h4 className="font-bold uppercase text-xs tracking-widest">Compassion</h4>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl transition-shadow duration-500">
              <Shield className="text-blue-500 mx-auto mb-4" size={32} />
              <h4 className="font-bold uppercase text-xs tracking-widest">Integrity</h4>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl transition-shadow duration-500">
              <Users className="text-emerald-500 mx-auto mb-4" size={32} />
              <h4 className="font-bold uppercase text-xs tracking-widest">Community</h4>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl transition-shadow duration-500">
              <Sprout className="text-amber-500 mx-auto mb-4" size={32} />
              <h4 className="font-bold uppercase text-xs tracking-widest">Sustainability</h4>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
