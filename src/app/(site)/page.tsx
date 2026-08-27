import { Award, GraduationCap, Handshake, Heart, MapPin, School, University } from "lucide-react";

import ContactForm from "@/components/ContactForm";
import GalleryLightbox from "@/components/GalleryLightbox";
import SiteImage from "@/components/SiteImage";
import SmartLink from "@/components/SmartLink";
import { getSiteContent } from "@/lib/content";
import type { PartnerTheme, StatIcon } from "@/lib/data";

const STAT_ICONS: Record<StatIcon, typeof School> = {
  school: School,
  university: University,
  "graduation-cap": GraduationCap,
  award: Award,
};

/**
 * Partner cards pick from a fixed palette. The classes are spelled out here so
 * Tailwind can see them -- CMS content is never turned into class names.
 */
const PARTNER_THEMES: Record<PartnerTheme, string> = {
  dark: "bg-black text-white",
  amber: "bg-amber-400 text-stone-900",
  blue: "bg-white text-blue-600",
  green: "bg-white text-emerald-800",
};

export default async function Home() {
  const {
    hero,
    mission,
    whatWeDo,
    gallery,
    partners,
    projects,
    sponsorship,
    sponsor,
    contact,
    topBar,
  } = await getSiteContent();

  return (
    <main className="bg-stone-50 text-stone-900 leading-relaxed overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex items-center text-white h-[85vh] overflow-hidden">
        <SiteImage
          src={hero.backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-stone-200">
              {hero.description}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <SmartLink
                href={hero.primaryCta.href}
                className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold text-center hover:bg-stone-100 transition shadow-xl uppercase text-xs tracking-widest"
              >
                {hero.primaryCta.text}
              </SmartLink>
              <SmartLink
                href={hero.secondaryCta.href}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 transition uppercase text-xs tracking-widest"
              >
                {hero.secondaryCta.text}
              </SmartLink>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section
        id="mission"
        className="py-24 bg-white border-b border-stone-100 px-6"
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold text-emerald-900 mb-8 tracking-tight">
                {mission.title}
              </h2>

              <div className="mb-10 pr-4">
                <h3 className="text-xl font-bold text-emerald-800 mb-4 italic">
                  {mission.welcome}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {mission.welcomeText}
                </p>
              </div>

              <div className="space-y-8">
                <div className="border-l-4 border-amber-500 pl-6">
                  <h4 className="text-xs uppercase font-black text-amber-600 tracking-widest mb-3">
                    {mission.missionTitle}
                  </h4>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {mission.missionText}
                  </p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-6">
                  <h4 className="text-xs uppercase font-black text-emerald-600 tracking-widest mb-3">
                    {mission.visionTitle}
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {mission.visionText}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative sticky top-32">
              <div className="relative w-full h-[650px] rounded-3xl shadow-2xl overflow-hidden animate-float-portrait">
                <SiteImage
                  src={mission.image}
                  alt="Children supported by the foundation"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-100 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section id="what-we-do" className="py-24 bg-stone-50 px-6">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 tracking-tight">
              {whatWeDo.title}
            </h2>
            <p className="text-stone-600 text-lg font-medium">
              {whatWeDo.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {whatWeDo.items.map((item) => (
              <div key={item.title} className="group flex flex-col items-center">
                <div className="relative w-full overflow-hidden rounded-2xl mb-6 shadow-lg aspect-[4/3]">
                  <SiteImage
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
                <h3 className="text-2xl font-bold text-emerald-800 mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-center text-sm leading-relaxed px-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GalleryLightbox title={gallery.title} images={gallery.images} />

      {/* Partners Section */}
      <section
        id="partners"
        className="py-24 bg-stone-50 border-b border-stone-100 px-6"
      >
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 tracking-tight">
              {partners.title}
            </h2>
            <p className="text-stone-600 text-lg">{partners.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center mb-16">
            {partners.list.map((partner) => (
              <div
                key={partner.name}
                className={`p-6 rounded-xl flex items-center justify-center h-24 shadow-md transition-transform hover:scale-105 ${
                  PARTNER_THEMES[partner.theme] ?? PARTNER_THEMES.dark
                }`}
              >
                <div className="text-center leading-none">
                  <span className="font-bold text-xl block uppercase tracking-tight">
                    {partner.name}
                  </span>
                  {partner.subName && (
                    <span className="text-stone-400 text-[10px] font-bold uppercase tracking-widest">
                      {partner.subName}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <SmartLink
              href={partners.cta.href}
              className="inline-flex items-center gap-3 border-2 border-emerald-900 text-emerald-900 px-10 py-4 rounded-full font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-emerald-900 hover:text-white transition shadow-lg group"
            >
              {partners.cta.text}{" "}
              <Handshake className="group-hover:scale-110 transition-transform" />
            </SmartLink>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="edu-funds" className="py-24 bg-stone-100 px-6">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">{projects.title}</h2>
            <p className="text-stone-600 text-sm">{projects.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.items.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border border-stone-200"
              >
                <div className="h-64 overflow-hidden relative">
                  <SiteImage
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    className={`absolute top-4 right-4 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                      project.id === "edu-funds"
                        ? "bg-emerald-600"
                        : "bg-amber-500"
                    }`}
                  >
                    {project.status}
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-bold text-emerald-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <SmartLink
                    href={project.cta.href}
                    className={`inline-block text-white px-8 py-3 rounded-full font-bold transition uppercase text-[11px] tracking-widest ${
                      project.id === "edu-funds"
                        ? "bg-stone-900 hover:bg-emerald-800"
                        : "bg-amber-500 hover:bg-amber-600"
                    }`}
                  >
                    {project.cta.text}
                  </SmartLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship changes Everything */}
      <section className="py-24 bg-white px-6">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                {sponsorship.title}
              </h2>
              <p className="text-lg text-amber-500 font-medium mb-6">
                {sponsorship.subtitle}
              </p>
              <p className="text-stone-600 mb-8 leading-relaxed">
                {sponsorship.description}
              </p>
              <SmartLink
                href={sponsorship.cta.href}
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-stone-800 transition shadow-xl"
              >
                {sponsorship.cta.text} <Heart size={14} />
              </SmartLink>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
              <SiteImage
                src={sponsorship.image}
                alt="Sponsorship impact"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor a Child (Stats Section) */}
      <section
        id="sponsor"
        className="py-24 text-white relative overflow-hidden px-6"
      >
        <SiteImage
          src={sponsor.backgroundImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 sponsor-overlay" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 items-center">
            <div className="max-w-xl">
              <span className="text-amber-400 font-bold uppercase text-xs tracking-widest mb-4 block">
                {sponsor.subtitle}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {sponsor.title}
              </h2>

              <div className="bg-emerald-900/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 mb-8">
                <p className="text-emerald-50 mb-8 leading-relaxed text-sm italic border-l-2 border-amber-500 pl-4">
                  {sponsor.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  {sponsor.stats.map((stat) => {
                    const Icon = STAT_ICONS[stat.icon] ?? School;
                    return (
                      <div key={stat.label} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 border border-white/5">
                          <Icon size={20} />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-xs text-emerald-200 uppercase tracking-widest">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p className="text-sm text-emerald-50 leading-relaxed mb-8">
                  {sponsor.footerText}
                </p>

                <SmartLink
                  href={sponsor.cta.href}
                  className="inline-block bg-amber-500 text-white px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] shadow-lg hover:bg-amber-600 transition transform hover:scale-105"
                >
                  {sponsor.cta.text}
                </SmartLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-24 bg-white px-6">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 tracking-tight">
              {contact.title}
            </h2>
            <p className="text-stone-600 text-lg">{contact.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16 items-start mb-24">
            {contact.offices.map((office, index) => (
              <div
                key={office.title}
                className="bg-stone-50 p-10 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-xl transition duration-500"
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
                <h3 className="text-2xl font-bold text-stone-900 mb-4 tracking-tight">
                  {office.title}
                </h3>
                <div className="space-y-4 text-stone-600 leading-relaxed">
                  <p
                    className={`font-bold ${
                      index === 0 ? "text-emerald-800" : "text-amber-700"
                    }`}
                  >
                    {office.organisation}
                  </p>
                  {office.people && (
                    <p className="text-sm">{office.people}</p>
                  )}
                  <p className="text-sm italic">{office.address}</p>
                  <div className="h-px w-full bg-stone-200 my-4" />
                  <p className="text-sm flex flex-col">
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
                  </p>
                  <p className="text-sm flex flex-col">
                    <span className="font-bold text-stone-900">Email:</span>
                    {office.emails.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="hover:text-emerald-600 transition"
                      >
                        {email}
                      </a>
                    ))}
                  </p>
                </div>
              </div>
            ))}

            <div className="bg-white p-10 rounded-[2rem] border border-stone-200 shadow-2xl">
              <h3 className="text-2xl font-bold text-stone-900 mb-6 tracking-tight">
                Send a Message
              </h3>
              <ContactForm email={topBar.email} />
            </div>
          </div>
        </div>

        {/* Google Maps - Full Width */}
        <div className="w-full h-[500px] bg-stone-100 mt-24 grayscale hover:grayscale-0 transition duration-1000 overflow-hidden">
          <iframe
            title="Noah’s Arc Foundation location"
            src={contact.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
