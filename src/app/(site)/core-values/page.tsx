import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Cross, Heart, Scale, ShieldCheck, MessageSquareQuote } from "lucide-react";

const values = [
  {
    title: "God First",
    description: "We put God first in our work and acknowledge His sovereignty. Our faith is the driving force behind our mission, as we seek to serve and uplift others.",
    icon: Cross,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  {
    title: "Compassion",
    description: "We approach our work with deep compassion and empathy for those in need. We strive to understand their challenges, listen to their stories, and provide support with kindness and care.",
    icon: Heart,
    color: "bg-red-50",
    iconColor: "text-red-600"
  },
  {
    title: "Objectivity",
    description: "We maintain objectivity in our approach, ensuring fairness and impartiality in all our interactions. We treat each individual with respect, dignity, and without prejudice, regardless of their background or circumstances.",
    icon: Scale,
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Integrity",
    description: "We uphold the highest standards of integrity and ethical conduct. We are committed to honesty, transparency, and accountability in all our actions and decisions. We strive to be trustworthy and reliable in our relationships with beneficiaries, partners, and stakeholders.",
    icon: ShieldCheck,
    color: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  {
    title: "Transparency and Trust",
    description: "We value transparency in our operations and maintain open communication with all stakeholders. We strive to build and nurture trust by being transparent about our activities, finances, and the impact of our work.",
    icon: MessageSquareQuote,
    color: "bg-stone-50",
    iconColor: "text-stone-600"
  }
];

export default function CoreValues() {
  return (
    <main className="bg-white text-stone-900 leading-relaxed min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/teachers-and-staff.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-left">
          <Reveal className="max-w-3xl" trigger="mount">
            <span className="text-amber-500 font-bold uppercase text-xs tracking-[0.4em] mb-4 block text-left">Our Principles</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-left">Core Values</h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-xl text-left">
              At NOAH’S ARC, our core values guide everything we do, reflecting our beliefs, principles, and the foundation of our organization.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-8 tracking-tight">Guided by Our Beliefs</h2>
          <p className="text-xl text-stone-600 leading-relaxed">
            These values are not just words on a page; they are the living foundation upon which our organization operates. We are committed to upholding these principles in every interaction and project.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="pb-32 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((val, i) => (
              <Reveal key={i} className={`${val.color} p-12 rounded-[3rem] border border-stone-100 flex flex-col md:flex-row gap-8 items-start hover:shadow-xl transition-shadow`} delay={i * 0.1}>
                <div className={`shrink-0 w-20 h-20 rounded-3xl bg-white flex items-center justify-center ${val.iconColor} shadow-sm`}>
                  <val.icon size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-4">{val.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{val.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section with Parallax */}
      <section className="relative py-48 overflow-hidden bg-emerald-900">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover opacity-40 grayscale"
          style={{ backgroundImage: 'url("/images/teachers-and-staff.jpg")' }}
        ></div>
        <div className="absolute inset-0 bg-emerald-900/60 mix-blend-multiply"></div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <Reveal>
            <MessageSquareQuote size={60} className="mx-auto mb-10 text-emerald-400 opacity-80" />
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white tracking-tight">
              We envision a community where every child thrives, individuals flourish economically, and conflicts are resolved peacefully.
            </h2>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
