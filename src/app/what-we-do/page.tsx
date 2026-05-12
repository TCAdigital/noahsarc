"use client";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  School, 
  University, 
  GraduationCap, 
  Church, 
  Users2, 
  HeartHandshake, 
  BookText, 
  Droplets, 
  Stethoscope,
  ArrowRight,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export default function WhatWeDo() {
  const educationStats = [
    { label: "Primary Level", value: "427", icon: School, color: "bg-emerald-50 text-emerald-600" },
    { label: "Secondary Level", value: "50", icon: University, color: "bg-amber-50 text-amber-600" },
    { label: "Tertiary & University", value: "11", icon: GraduationCap, color: "bg-blue-50 text-blue-600" },
    { label: "Already Graduated", value: "20", icon: Sparkles, color: "bg-purple-50 text-purple-600" },
  ];

  const spiritualPrograms = [
    {
      title: "Pastoral & Church Leaders",
      description: "Enhancing knowledge, leadership skills, and pastoral care abilities for spiritual guidance.",
      icon: Church,
    },
    {
      title: "Youth Conferences",
      description: "Providing a space for youth to explore faith and build strong spiritual foundations.",
      icon: Users2,
    },
    {
      title: "Marriage & Counseling",
      description: "Strengthening relationships and fostering lasting bonds through the 'Couple for Life' program.",
      icon: HeartHandshake,
    },
    {
      title: "Bible Distribution",
      description: "Equipping families with Bibles as a tool for spiritual growth and enlightenment.",
      icon: BookText,
    },
  ];

  return (
    <main className="bg-white text-stone-900 leading-relaxed min-h-screen">
      {/* Hero Section - Standardized Premium */}
      <section className="relative py-32 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://i.imgur.com/Q9ytvOn.jpeg" 
            alt="Impact Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-amber-500 font-bold uppercase text-xs tracking-[0.4em] mb-4 block">Our Impact</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">What We Do</h1>
            <p className="text-xl text-stone-300 leading-relaxed max-w-xl">
              Fighting poverty, hunger, and illiteracy through sustainable programs that transform communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl md:text-4xl font-bold text-stone-900 mb-8 leading-tight"
            >
              We are driven by a deep commitment to fighting poverty, hunger, illiteracy, and preventable diseases in <span className="text-emerald-700 italic">Kyenjojo District</span> and surrounding areas.
            </motion.h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Through our various programs and initiatives, we strive to make a tangible and lasting impact on the lives of individuals and communities in need.
            </p>
          </div>
        </div>
      </section>

      {/* Education Support Section */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-amber-600 font-black uppercase text-xs tracking-widest mb-4">Foundation for Change</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Education Support</h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                At Noah's ARC, we believe that education is the cornerstone of positive change. We are dedicated to providing comprehensive support to empower children and young adults, breaking the cycle of poverty and unlocking potential.
              </p>
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
                <div className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-2">Currently Serving</div>
                <div className="text-6xl font-black text-emerald-700 mb-2">488</div>
                <div className="text-lg text-stone-600 font-medium italic">Children across all levels of education</div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6">
              {educationStats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-3xl shadow-lg border border-stone-100 hover:shadow-2xl transition duration-500"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${stat.color}`}>
                    <stat.icon size={24} />
                  </div>
                  <div className="text-3xl font-black text-stone-900 mb-1">{stat.value}</div>
                  <div className="text-xs font-bold text-stone-400 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Growth Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <h3 className="text-emerald-600 font-black uppercase text-xs tracking-widest mb-4">Holistic Well-being</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight">Spiritual Growth</h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Nurturing the spirit is fundamental to a fulfilling life. Our initiatives foster deeper connections with faith and promote community-wide spiritual well-being.
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {spiritualPrograms.map((program, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[2.5rem] bg-stone-50 border border-stone-100 hover:bg-emerald-900 hover:text-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-emerald-700 shadow-sm mb-6 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                  <program.icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3">{program.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed group-hover:text-emerald-50/80 transition-colors">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Enhancement Section */}
      <section className="py-24 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://i.imgur.com/dbj0jK3.jpeg" alt="Water" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-amber-400 font-black uppercase text-xs tracking-widest mb-4">A Healthier Future</h3>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-none">Health <br /><span className="text-emerald-500">Enhancement</span></h2>
              <p className="text-emerald-100 text-lg leading-relaxed mb-10 max-w-xl">
                Good health is the foundation for a fulfilling life. We aim to provide clean water, promote healthy living, and prevent illnesses across underserved communities.
              </p>
              
              <div className="grid gap-6">
                <div className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Droplets size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Supply of Clean Water</h4>
                    <p className="text-emerald-200/70 text-sm">Constructing shallow wells to reduce the spread of water-borne diseases and increase community productivity.</p>
                  </div>
                </div>
                <div className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <Stethoscope size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Medical Camps</h4>
                    <p className="text-emerald-200/70 text-sm">Bringing free consultations, essential healthcare screenings, and medications to communities in need.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-[3rem] rotate-3 -z-10"></div>
              <img 
                src="https://i.imgur.com/dbj0jK3.jpeg" 
                alt="Medical Support" 
                className="rounded-[3rem] shadow-2xl w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white px-6">
        <div className="container mx-auto">
          <div className="bg-amber-500 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Make a tangible and lasting impact.</h2>
              <p className="text-amber-50 text-xl mb-12">
                Join us in our mission to break the cycle of poverty and nurture holistic growth in Kyenjojo.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/#donate" className="bg-white text-stone-900 px-12 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-stone-100 transition shadow-xl inline-flex items-center gap-2">
                  Donate Now <ArrowRight size={16} />
                </Link>
                <Link href="/sponsor" className="bg-emerald-900 text-white px-12 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-emerald-950 transition shadow-xl">
                  Sponsor a Child
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
