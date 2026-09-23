import { CalendarClock } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import GalleryLightbox from "@/components/GalleryLightbox";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Upcoming Visits | Noah’s Arc Organization",
  description:
    "Service and learning opportunities at Noah’s Arc in Kyenjojo, Uganda, beginning in 2027.",
};

/**
 * Photos from previous visits. The Noah's Arc team is selecting 6-9 images;
 * the section stays hidden until they are added here.
 */
const PAST_VISITS: string[] = [];

export default function UpcomingVisits() {
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
            <span className="text-amber-500 font-bold uppercase text-xs tracking-[0.4em] mb-4 block">
              Join Our Mission
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Upcoming Visits
            </h1>
            <p className="text-sm uppercase tracking-[0.2em] font-bold text-amber-400 mb-6">
              Service and learning opportunities at Noah’s Arc.
            </p>
            <p className="text-lg text-stone-300 leading-relaxed max-w-xl">
              Come visit Noah’s Arc in Uganda. Experience the work firsthand,
              connect with the community, and become part of the journey of hope
              and transformation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 flex-grow px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl bg-white p-12 rounded-3xl shadow-xl border border-stone-100">
            <h2 className="text-3xl font-bold text-emerald-900 mb-8">
              Upcoming Opportunities
            </h2>
            <p className="text-stone-600 mb-10 leading-relaxed">
              We are planning future service and learning visits to Noah’s Arc
              beginning in 2027. These visits offer an opportunity to experience
              the work firsthand, spend time with the Noah’s Arc community, and
              participate in projects that support children, families, and local
              communities.
            </p>

            <div className="bg-stone-50 p-10 rounded-2xl border border-stone-200">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-6">
                <CalendarClock size={26} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                2027 Visit Information Coming Soon
              </h3>
              <p className="text-stone-500 leading-relaxed">
                Dates, itinerary details, costs, and participation information
                will be shared as plans are finalized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {PAST_VISITS.length > 0 && (
        <section className="pb-24 px-6">
          <div className="container mx-auto mb-12">
            <h2 className="text-3xl font-bold text-emerald-900 mb-4 tracking-tight">
              Past Visits
            </h2>
            <p className="text-stone-600">
              See moments from previous visits to Noah’s Arc and the communities
              we serve.
            </p>
          </div>
          <GalleryLightbox
            title="Past Visits"
            images={PAST_VISITS}
            featuredCount={PAST_VISITS.length}
          />
        </section>
      )}
    </main>
  );
}
