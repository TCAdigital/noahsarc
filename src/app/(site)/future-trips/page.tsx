import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function FutureTrips() {
  return (
    <main className="bg-stone-50 text-stone-900 leading-relaxed min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="relative py-24 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/gallery/gallery-07.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <Reveal className="max-w-3xl" trigger="mount">
            <span className="text-amber-500 font-bold uppercase text-xs tracking-[0.4em] mb-4 block">Join Our Mission</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Future Trips</h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-xl">
              Join us on our next journey to Uganda. Experience the impact firsthand and become part of our story on the ground.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 flex-grow">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-xl border border-stone-100">
            <h2 className="text-3xl font-bold text-emerald-900 mb-8">Upcoming Opportunities</h2>
            <p className="text-stone-600 mb-8 leading-relaxed">
              We are currently planning several trips for 2024 and 2025. These trips provide a unique opportunity to see our work firsthand, interact with the children, and participate in community projects.
            </p>

            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 text-center">
              <span className="inline-block bg-amber-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Coming Soon</span>
              <p className="text-stone-400 italic">Detailed trip schedules and application forms will be available shortly.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
