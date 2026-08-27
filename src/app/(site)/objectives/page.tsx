import Image from "next/image";
import Reveal from "@/components/Reveal";
import { GraduationCap, Sprout, ShieldCheck, Heart, Cross, Plane, Users, HandHeart } from "lucide-react";
import Link from "next/link";

const objectives = [
  {
    title: "Education & Living",
    text: "To help orphans and vulnerable children access education and live in a conducive environment",
    icon: GraduationCap,
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Agricultural Promotion",
    text: "To promote agriculture in Kyenjojo and surroundings so as to enhance income generation",
    icon: Sprout,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  {
    title: "Peace & Human Rights",
    text: "To promote peace, human rights and engaging in conflicts resolutions at family levels",
    icon: ShieldCheck,
    color: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  {
    title: "Spiritual Growth",
    text: "Promotion of spiritual growth among the community members",
    icon: Cross,
    color: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    title: "Health Care Services",
    text: "Promotion of health care services in the community",
    icon: Heart,
    color: "bg-red-50",
    iconColor: "text-red-600"
  }
];

export default function OurObjectives() {
  return (
    <main className="bg-white text-stone-900 leading-relaxed min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/objectives-feature.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <Reveal className="max-w-3xl" trigger="mount">
            <span className="text-amber-500 font-bold uppercase text-xs tracking-[0.4em] mb-4 block">Strategic Goals</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Our Objectives</h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-xl">
              Defining our path towards a sustainable and empowered community in Kyenjojo District.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Objectives Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((obj, i) => (
              <Reveal key={i} className={`${obj.color} p-10 rounded-3xl border border-stone-100 hover:shadow-2xl transition-all duration-500 group`} delay={i * 0.1}>
                <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center ${obj.iconColor} shadow-sm mb-6 group-hover:scale-110 transition-transform`}>
                  <obj.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-4">{obj.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{obj.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs Section */}
      <section className="py-24 bg-stone-50 border-y border-stone-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">How You Can Help</h2>
            <p className="text-stone-500">Choose your way to make an impact today.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Join Trip */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-stone-100 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <Plane size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Join a Trip</h4>
              <p className="text-stone-500 text-sm mb-8 flex-grow">Be part of our mission on the ground. Experience the impact firsthand.</p>
              <Link href="/future-trips" className="w-full bg-blue-600 text-white py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition">
                View Trips
              </Link>
            </div>

            {/* Become a Partner */}
            <div className="bg-emerald-900 p-10 rounded-[2.5rem] shadow-xl text-white text-center flex flex-col items-center scale-105 relative z-10">
              <div className="w-16 h-16 bg-white/10 text-emerald-400 rounded-full flex items-center justify-center mb-6">
                <Users size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Partner with Us</h4>
              <p className="text-emerald-100/60 text-sm mb-8 flex-grow">Global organizations working together for a lasting change.</p>
              <Link href="/#contact" className="w-full bg-amber-500 text-white py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-amber-600 transition">
                Get Involved
              </Link>
            </div>

            {/* Donate */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-stone-100 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-6">
                <HandHeart size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Support Our Work</h4>
              <p className="text-stone-500 text-sm mb-8 flex-grow">Your support provides education and healthcare to those in need.</p>
              <Link href="/#contact" className="w-full bg-stone-900 text-white py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-stone-800 transition">
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
