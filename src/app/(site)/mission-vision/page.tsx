import Image from "next/image";
import Reveal from "@/components/Reveal";
import {
  Droplets,
  Eye,
  Heart,
  HeartHandshake,
  Shield,
  Sparkles,
  Sprout,
  Target,
  Users,
} from "lucide-react";

const PILLARS = [
  {
    title: "Sustainable Growth",
    description:
      "We support families and communities by promoting sustainable agriculture and opportunities for income generation and greater self-reliance.",
    icon: Sprout,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Peace & Healthy Families",
    description:
      "We work to strengthen families, promote peaceful relationships, and support conflict resolution within homes and communities.",
    icon: HeartHandshake,
    color: "bg-amber-100 text-amber-700",
  },
  {
    title: "Health & Clean Water",
    description:
      "We promote better health through education, disease prevention, and access to clean water, including the construction of boreholes and shallow wells.",
    icon: Droplets,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Spiritual Well-being",
    description:
      "We nurture spiritual growth through faith-based programs, church leader training, conferences, youth activities, marriage and family support, and spiritual mentorship.",
    icon: Sparkles,
    color: "bg-purple-100 text-purple-700",
  },
];

export default function MissionVision() {
  return (
    <main className="bg-white text-stone-900 leading-relaxed min-h-screen">

      {/* Hero Section */}
      <section className="relative py-24 bg-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/mission-hero.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <Reveal className="max-w-3xl" trigger="mount">
            <span className="text-amber-500 font-bold uppercase text-xs tracking-[0.4em] mb-4 block">Who We Are</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Mission & Vision</h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-xl">
              Our commitment to empowering children, strengthening families, and building communities rooted in dignity, hope, and self-reliance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal className="relative order-last lg:order-first">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-50 rounded-full -z-10 animate-pulse"></div>
              <div className="relative z-10 w-full aspect-[4/3] rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/gallery/gallery-03.jpg"
                  alt="Children at a foundation programme"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                <Target size={40} />
              </div>
            </Reveal>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-emerald-600"></div>
                <span className="text-emerald-700 font-bold uppercase text-xs tracking-widest">Our Commitment</span>
              </div>
              <h2 className="text-4xl font-bold text-emerald-900 mb-8 tracking-tight leading-tight">
Our Mission is to <span className="text-emerald-600">Transform</span> Communities.
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                To transform communities through quality education and holistic
                care, sustainable livelihoods and agriculture, improved health and
                access to clean water, strong and peaceful families, and spiritual
                growth — helping individuals and communities become self-reliant
                and thrive.
              </p>
              <div className="space-y-6">
                {PILLARS.map((pillar) => (
                  <div key={pillar.title} className="flex gap-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${pillar.color}`}
                    >
                      <pillar.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-stone-500 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Vision Section - Parallax Style */}
      <section className="relative py-48 overflow-hidden bg-emerald-950">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover scale-110"
          style={{
            backgroundImage: 'url("/images/mission-banner.jpg")',
          }}
        ></div>
        <div className="absolute inset-0 bg-emerald-950/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-transparent to-stone-900 opacity-40"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal className="inline-block p-4 bg-white/5 backdrop-blur-lg rounded-2xl mb-10 border border-white/10">
              <Eye size={48} className="text-amber-400" />
            </Reveal>
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

    </main>
  );
}
