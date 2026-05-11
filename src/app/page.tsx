"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { School, University, GraduationCap, Award, Palette, Trophy, BookOpen } from "lucide-react";

const iconMap = {
  school: School,
  university: University,
  "graduation-cap": GraduationCap,
  award: Award,
  palette: Palette,
  trophy: Trophy,
  "book-open": BookOpen,
};

export default function Home() {
  const { hero, stats, sections } = siteContent;

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={hero.backgroundImage}
            alt="Hero Background"
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4">
                {hero.subtitle}
              </h4>
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
                {hero.title}
              </h1>
              <p className="text-lg text-stone-300 leading-relaxed mb-10 max-w-xl">
                {hero.description}
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="bg-amber-500 text-white px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] shadow-lg hover:bg-amber-600 transition transform hover:scale-105">
                  {hero.ctaText}
                </button>
                <button className="border border-white/20 text-white px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white/10 transition">
                  Our Mission
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => {
                const Icon = iconMap[stat.icon as keyof typeof iconMap];
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl"
                  >
                    <Icon className="text-amber-400 mb-4" size={32} />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-[10px] text-amber-200/60 uppercase tracking-widest font-bold">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="py-24 bg-white px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h5 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
                {sections.whoWeAre.subtitle}
              </h5>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-stone-900">
                {sections.whoWeAre.title}
              </h2>
              <p className="text-stone-600 leading-loose mb-10">
                {sections.whoWeAre.description}
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-amber-500">
                  <Award size={20} />
                </div>
                <div>
                  <div className="font-bold text-stone-900">Official NGO</div>
                  <div className="text-xs text-stone-500 uppercase tracking-widest mt-1">
                    Certified 501(c)(3)
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://i.imgur.com/vHq0A6v.jpeg"
                alt="Impact"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-10 -left-10 bg-amber-500 p-10 rounded-3xl text-white hidden lg:block">
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-xs uppercase tracking-widest font-bold opacity-80">
                  Years of Service
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="py-24 bg-stone-50 px-6">
        <div className="container mx-auto text-center mb-16">
          <h5 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
            {sections.whatWeDo.subtitle}
          </h5>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900">
            {sections.whatWeDo.title}
          </h2>
        </div>
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {sections.whatWeDo.items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-10 rounded-3xl border border-stone-200 hover:shadow-xl transition group"
              >
                <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 mb-8 group-hover:bg-amber-500 group-hover:text-white transition duration-500">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-stone-900">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
