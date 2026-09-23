import { ExternalLink, Handshake, Heart, MapPin, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import ContactForm from "@/components/ContactForm";
import { getSiteContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us | Noah’s Arc Organization",
  description:
    "Reach the Noah’s Arc team in Kyenjojo, Uganda, or our strategic partner in the United States.",
};

export default async function Contact() {
  const { contact, topBar } = await getSiteContent();

  return (
    <main className="bg-white text-stone-900 leading-relaxed min-h-screen">
      <section className="bg-stone-900 text-white py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <span className="text-amber-500 font-bold uppercase text-xs tracking-[0.4em] mb-4 block">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              {contact.title}
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed">
              {contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {contact.offices.map((office, index) => (
              <div
                key={office.title}
                className="bg-stone-50 p-10 rounded-[2rem] border border-stone-100 shadow-sm"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                    index === 0
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {index === 0 ? <MapPin size={28} /> : <Handshake size={28} />}
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4 tracking-tight">
                  {office.title}
                </h2>
                <div className="space-y-4 text-stone-600 leading-relaxed">
                  <p
                    className={`font-bold ${
                      index === 0 ? "text-emerald-800" : "text-amber-700"
                    }`}
                  >
                    {office.organisation}
                  </p>
                  {office.people && <p className="text-sm">{office.people}</p>}
                  <p className="text-sm italic">{office.address}</p>
                  <div className="h-px w-full bg-stone-200 my-4" />

                  <div className="text-sm flex flex-col">
                    <span className="font-bold text-stone-900">Tel:</span>
                    {office.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                        className="hover:text-emerald-600 transition"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>

                  {office.whatsapp && (
                    <a
                      href={`https://wa.me/${office.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#128C7E] hover:text-[#075E54] transition"
                    >
                      <MessageCircle size={16} /> WhatsApp {office.whatsapp}
                    </a>
                  )}

                  <div className="text-sm flex flex-col">
                    <span className="font-bold text-stone-900">Email:</span>
                    {office.emails.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="hover:text-emerald-600 transition break-all"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-white p-10 rounded-[2rem] border border-stone-200 shadow-2xl">
              <h2 className="text-2xl font-bold text-stone-900 mb-6 tracking-tight">
                Send a Message
              </h2>
              <ContactForm email={topBar.email} />
            </div>
          </div>
        </div>
      </section>

      {/* Where we are */}
      <section className="pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center bg-stone-50 rounded-[2.5rem] border border-stone-100 overflow-hidden">
            <div className="relative h-72 md:h-96 w-full">
              <Image
                src="/images/teachers-and-staff.jpg"
                alt="The Noah’s Arc team in Kyenjojo"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-10 md:pl-0 md:pr-14">
              <span className="text-emerald-700 font-bold uppercase text-[10px] tracking-[0.3em] mb-4 block">
                Where We Are
              </span>
              <h2 className="text-3xl font-bold text-stone-900 mb-4 tracking-tight">
                {contact.locationLine}
              </h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Kyenjojo is a district in Mid-Western Uganda, roughly 250 km west
                of Kampala. Our office, schools, and project sites are based in
                and around the district.
              </p>
              <a
                href={contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-700 font-bold uppercase text-[11px] tracking-widest hover:text-emerald-800 transition"
              >
                View on the map <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How to give */}
      <section className="pb-24 px-6">
        <div className="container mx-auto">
          <div className="bg-emerald-900 text-white rounded-[2.5rem] p-10 md:p-14 max-w-4xl">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-amber-400 mb-8">
              <Heart size={26} />
            </div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">
              How to Give
            </h2>
            <p className="text-emerald-50 leading-relaxed mb-4">
              Supporters in the United States who would like a tax-deductible
              receipt can give through ThinSpace Africa, our U.S. strategic
              partner, which supports the work of Noah’s Arc.
            </p>
            <p className="text-emerald-50 leading-relaxed">
              Supporters may also give directly to Noah’s Arc Organization.
              Please contact us using the details above and we will share the
              current giving options and instructions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
