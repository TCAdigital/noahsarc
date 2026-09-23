import {
  ArrowRight,
  CheckCircle2,
  Coffee,
  GraduationCap,
  Home,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import Reveal from "@/components/Reveal";
import SmartLink from "@/components/SmartLink";
import { SPONSOR_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Sponsor a Child | Noah’s Arc Organization",
  description:
    "Sponsorship helps students in Kyenjojo, Uganda, access education, care, and opportunities at every level of their education.",
};

const GALLERY = Array.from(
  { length: 8 },
  (_, index) => `/images/gallery/gallery-0${index + 1}.jpg`,
);

const BENEFITS = [
  {
    title: "Education",
    description: "Tuition, books, and uniforms for school success.",
    icon: GraduationCap,
    color: "text-emerald-600",
  },
  {
    title: "Nutrition",
    description: "Balanced meals and clean drinking water.",
    icon: Coffee,
    color: "text-amber-600",
  },
  {
    title: "Well-being",
    description: "Healthcare and a safe environment to grow.",
    icon: Home,
    color: "text-blue-600",
  },
  {
    title: "Mentorship",
    description: "Guidance and spiritual support for life.",
    icon: CheckCircle2,
    color: "text-purple-600",
  },
];

/** Monthly sponsorship levels confirmed by the Noah's Arc team. */
const LEVELS = [
  {
    stage: "Primary & Secondary",
    full: "$120",
    partial: "$60",
  },
  {
    stage: "Tertiary & University",
    full: "$150",
    partial: "$75",
  },
];

const JOURNEY = [
  {
    title: "Begin Your Sponsorship",
    description: "Support a student based on need and educational level.",
  },
  {
    title: "Get Connected",
    description:
      "Learn more about the student you are supporting and their journey with Noah’s Arc.",
  },
  {
    title: "Stay Updated",
    description:
      "Receive progress updates, photos, and news about their education and well-being.",
  },
  {
    title: "See the Impact",
    description:
      "Follow their growth from school through higher education and toward self-reliance.",
  },
];

export default function SponsorAChild() {
  return (
    <main className="bg-white text-stone-900 leading-relaxed min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/sponsor-hero.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <Reveal className="max-w-3xl" trigger="mount">
            <span className="text-amber-500 font-bold uppercase text-xs tracking-[0.4em] mb-4 block">
              Take Action
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Sponsor a Child
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-xl mb-10">
              Give a student the gift of hope, dignity, and the opportunity to
              reach their full potential through the power of sponsorship.
            </p>
            <SmartLink
              href={SPONSOR_URL}
              className="inline-flex items-center gap-3 bg-amber-500 text-white px-10 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-amber-600 transition shadow-xl"
            >
              Sponsor a Child <ArrowRight size={18} />
            </SmartLink>
          </Reveal>
        </div>
      </section>

      {/* How Your Sponsorship Helps */}
      <section className="py-24 bg-white px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              How Your Sponsorship Helps
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Your sponsorship helps provide education, care, and opportunities
              for students and young adults at every level of their education.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="p-10 bg-stone-50 rounded-3xl border border-stone-100"
              >
                <div
                  className={`w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-sm ${benefit.color}`}
                >
                  <benefit.icon size={44} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-xl mb-3">{benefit.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship levels */}
      <section className="py-24 bg-stone-50 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Sponsorship Levels
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Sponsorship is a monthly commitment. Full sponsorship covers a
              student’s support on its own; partial sponsorship is combined with
              other supporters to cover a student together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {LEVELS.map((level) => (
              <div
                key={level.stage}
                className="bg-white p-10 rounded-[2rem] border border-stone-100 shadow-sm"
              >
                <h3 className="text-xl font-bold text-emerald-900 mb-8">
                  {level.stage}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-black text-stone-900 tracking-tight">
                      {level.full}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mt-2">
                      Full / month
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-amber-500 tracking-tight">
                      {level.partial}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mt-2">
                      Partial / month
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Noah's Arc */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-stone-900">
              Life at Noah’s Arc
            </h2>
            <p className="text-stone-500">
              A glimpse into the lives you are helping transform through
              sponsorship.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {GALLERY.map((image, index) => (
              <Reveal
                key={image}
                className="relative aspect-square rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group"
                delay={index * 0.1}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Connection Journey */}
      <section className="py-24 bg-emerald-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute top-0 left-0 w-24 h-24 bg-amber-500/20 rounded-full blur-3xl" />
              <h2 className="text-4xl font-bold mb-12">
                The Connection Journey
              </h2>
              <ol className="space-y-10">
                {JOURNEY.map((step, index) => (
                  <li key={step.title} className="flex gap-6 items-start">
                    <span className="shrink-0 w-14 h-14 rounded-full bg-amber-500 text-white flex items-center justify-center text-xl font-black shadow-lg">
                      {index + 1}
                    </span>
                    <div className="pt-2">
                      <h3 className="text-xl font-bold mb-2 text-amber-400">
                        {step.title}
                      </h3>
                      <p className="text-stone-300 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/education-fund.jpg"
                  alt="A school supported by Noah’s Arc"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-80 w-full mt-12 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/gallery/gallery-02.jpg"
                  alt="Students supported by Noah’s Arc"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white px-6">
        <div className="container mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-6 text-stone-900">
              Ready to Change a Life?
            </h2>
            <p className="text-stone-500 mb-10 leading-relaxed">
              Join our community of sponsors and see the transformation
              firsthand. Your support makes a world of difference.
            </p>
            <SmartLink
              href={SPONSOR_URL}
              className="inline-flex items-center gap-3 bg-amber-500 text-white px-12 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-amber-600 transition shadow-xl"
            >
              Sponsor Now <ArrowRight size={20} />
            </SmartLink>
          </div>
        </div>
      </section>
    </main>
  );
}
