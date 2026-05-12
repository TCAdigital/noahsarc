"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteContent } from "@/lib/data";
import Footer from "@/components/Footer";
import { School, University, GraduationCap, Award, Search, Handshake, Heart, MapPin } from "lucide-react";

const iconMap = {
  school: School,
  university: University,
  "graduation-cap": GraduationCap,
  award: Award,
};

export default function Home() {
  const { hero, mission, whatWeDo, gallery, partners, projects, sponsorship, sponsor } = siteContent;

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-stone-50 text-stone-900 leading-relaxed overflow-x-hidden">

      {/* Hero Section */}
      <section className="hero-container flex items-center text-white relative h-[85vh]">
        <div className="hero-bg-animate"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-stone-200">
              {hero.description}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href={hero.primaryCta.href} className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold text-center hover:bg-stone-100 transition shadow-xl uppercase text-xs tracking-widest">
                {hero.primaryCta.text}
              </a>
              <a href={hero.secondaryCta.href} className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 transition uppercase text-xs tracking-widest">
                {hero.secondaryCta.text}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section id="mission" className="py-24 bg-white border-b border-stone-100 px-6">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold text-emerald-900 mb-8 tracking-tight">{mission.title}</h2>
              
              <div className="mb-10 pr-4">
                <h3 className="text-xl font-bold text-emerald-800 mb-4 italic">{mission.welcome}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {mission.welcomeText}
                </p>
              </div>

              <div className="space-y-8">
                <div className="border-l-4 border-amber-500 pl-6">
                  <h4 className="text-xs uppercase font-black text-amber-600 tracking-widest mb-3">{mission.missionTitle}</h4>
                  <p className="text-sm text-stone-700 leading-relaxed">{mission.missionText}</p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-6">
                  <h4 className="text-xs uppercase font-black text-emerald-600 tracking-widest mb-3">{mission.visionTitle}</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">{mission.visionText}</p>
                </div>
              </div>
            </div>
            <div className="relative sticky top-32">
              <img
                src={mission.image}
                alt="Impact"
                className="rounded-3xl shadow-2xl w-full h-[650px] object-cover animate-float-portrait"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-100 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section id="what-we-do" className="py-24 bg-stone-50 px-6">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 tracking-tight">{whatWeDo.title}</h2>
            <p className="text-stone-600 text-lg font-medium">{whatWeDo.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {whatWeDo.items.map((item, index) => (
              <div key={index} className="group flex flex-col items-center">
                <div className="w-full overflow-hidden rounded-2xl mb-6 shadow-lg aspect-[4/3]">
                  <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={item.title} />
                </div>
                <h3 className="text-2xl font-bold text-emerald-800 mb-4 text-center">{item.title}</h3>
                <p className="text-stone-600 text-center text-sm leading-relaxed px-4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 w-full">
          {gallery.images.map((img, i) => (
            <div 
              key={i} 
              className="h-64 md:h-80 overflow-hidden relative group cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt={`Gallery ${i}`} />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <Search className="text-white" size={32} />
              </div>
            </div>
          ))}
        </div>
        <div className="gallery-banner py-12 px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <h2 className="text-white text-2xl md:text-3xl font-light tracking-wide text-center md:text-left">
              {gallery.title}
            </h2>
            <a href="#" className="border-2 border-white text-white px-8 py-2 rounded font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-[#5d4e9d] transition duration-300">
              View Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-24 bg-stone-50 border-b border-stone-100 px-6">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 tracking-tight">{partners.title}</h2>
            <p className="text-stone-600 text-lg">{partners.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center mb-16">
            {partners.list.map((partner, i) => (
              <div 
                key={i} 
                className={`p-6 rounded-xl flex items-center justify-center h-24 shadow-md transition-transform hover:scale-105 ${partner.color}`}
              >
                <div className="text-center leading-none">
                  <span className={`font-bold text-xl block uppercase tracking-tight ${partner.textColor}`}>
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
            <a href="#contact" className="inline-flex items-center gap-3 border-2 border-emerald-900 text-emerald-900 px-10 py-4 rounded-full font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-emerald-900 hover:text-white transition shadow-lg group">
              Become a partner <Handshake className="group-hover:scale-110 transition-transform" />
            </a>
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
            {projects.items.map((project, i) => (
              <div key={i} className="bg-white rounded-3xl shadow-lg overflow-hidden card-project-hover border border-stone-200">
                <div className="h-64 overflow-hidden relative">
                  <img src={project.image} className="w-full h-full object-cover" alt={project.title} />
                  <div className={`absolute top-4 right-4 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${project.id === 'edu-funds' ? 'bg-emerald-600' : 'bg-amber-500'}`}>
                    {project.id === 'edu-funds' ? 'Active' : 'In Progress'}
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-bold text-emerald-900 mb-4">{project.title}</h3>
                  <p className="text-stone-600 mb-6 leading-relaxed text-sm">{project.description}</p>
                  <a href="#" className={`inline-block text-white px-8 py-3 rounded-full font-bold transition uppercase text-[11px] tracking-widest ${project.id === 'edu-funds' ? 'bg-stone-900 hover:bg-emerald-800' : 'bg-amber-500 hover:bg-amber-600'}`}>
                    {project.cta}
                  </a>
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
                Sponsorship changes <span className="text-green-600">Everything</span>
              </h2>
              <p className="text-lg text-amber-500 font-medium mb-6">
                {sponsorship.subtitle}
              </p>
              <p className="text-stone-600 mb-8 leading-relaxed">
                {sponsorship.description}
              </p>
              <a href="#" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-stone-800 transition shadow-xl">
                READ OUR NEWSLETTER <Heart size={14} />
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
              <img src={sponsorship.image} alt="Sponsorship Impact" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor a Child (Stats Section) */}
      <section id="sponsor" className="sponsor-bg py-24 text-white relative overflow-hidden px-6">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 items-center">
            <div className="max-w-xl">
              <span className="text-amber-400 font-bold uppercase text-xs tracking-widest mb-4 block">{sponsor.subtitle}</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{sponsor.title}</h2>
              
              <div className="bg-emerald-900/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 mb-8">
                <p className="text-emerald-50 mb-8 leading-relaxed text-sm italic border-l-2 border-amber-500 pl-4">
                  {sponsor.description} <span className="font-bold text-white text-lg">500 children</span> and they are at different levels of education:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  {sponsor.stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 border border-white/5">
                        {(() => {
                          const Icon = iconMap[stat.icon as keyof typeof iconMap];
                          return <Icon size={20} />;
                        })()}
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-xs text-emerald-200 uppercase tracking-widest">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <p className="text-sm text-emerald-50 leading-relaxed mb-8">
                  {sponsor.footerText}
                </p>
                
                <a href="#" className="inline-block bg-amber-500 text-white px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] shadow-lg hover:bg-amber-600 transition transform hover:scale-105">
                  Become a Sponsor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-24 bg-white px-6">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 tracking-tight">Contact Us</h2>
            <p className="text-stone-600 text-lg">We'd love to hear from you. Reach out to our teams in Uganda or the USA.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16 items-start mb-24">
            {/* Uganda Office */}
            <div className="bg-stone-50 p-10 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-xl transition duration-500">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-8">
                <MapPin size={28} />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4 tracking-tight">Head Office Uganda</h3>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p className="font-bold text-emerald-800">Noah's Arc Organization</p>
                <p className="text-sm">Kenneth Kabagambe and Beatrice Kabagambe</p>
                <p className="text-sm italic">P.O. Box 1083 Kyenjojo, Uganda</p>
                <div className="h-px w-full bg-stone-200 my-4"></div>
                <p className="text-sm flex flex-col">
                  <span className="font-bold text-stone-900">Tel:</span>
                  <span>+256 701 117410</span>
                  <span>0782880500 / 0700749178</span>
                </p>
                <p className="text-sm flex flex-col">
                  <span className="font-bold text-stone-900">Email:</span>
                  <a href="mailto:info@noahsarc.org" className="hover:text-emerald-600 transition">info@noahsarc.org</a>
                  <a href="mailto:Kenapuuli@gmail.com" className="hover:text-emerald-600 transition">Kenapuuli@gmail.com</a>
                  <a href="mailto:beatricekunihira@yahoo.com" className="hover:text-emerald-600 transition">beatricekunihira@yahoo.com</a>
                </p>
              </div>
            </div>

            {/* USA Partner */}
            <div className="bg-stone-50 p-10 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-xl transition duration-500">
              <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mb-8">
                <Handshake size={28} />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4 tracking-tight">Strategic Partner in USA</h3>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p className="font-bold text-amber-700">ThinSpace Africa</p>
                <p className="text-sm italic">Office and mail: 50 Buckskin Road, Bell Canyon, CA 91307</p>
                <div className="h-px w-full bg-stone-200 my-4"></div>
                <p className="text-sm flex flex-col">
                  <span className="font-bold text-stone-900">Tel:</span>
                  <span>8186875556</span>
                </p>
                <p className="text-sm flex flex-col">
                  <span className="font-bold text-stone-900">Email:</span>
                  <a href="mailto:info@thinspaceafrica.org" className="hover:text-amber-600 transition">info@thinspaceafrica.org</a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-[2rem] border border-stone-200 shadow-2xl">
              <h3 className="text-2xl font-bold text-stone-900 mb-6 tracking-tight">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Your Name</label>
                  <input type="text" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 transition" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 transition" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Message</label>
                  <textarea className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 h-32 outline-none focus:border-emerald-500 transition" placeholder="How can we help?"></textarea>
                </div>
                <button className="w-full bg-emerald-700 text-white font-bold py-4 rounded-xl hover:bg-emerald-800 transition uppercase text-xs tracking-widest shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps - Full Width */}
        <div className="w-full h-[500px] bg-stone-100 mt-24 grayscale hover:grayscale-0 transition duration-1000 overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.1678129037!2d30.640523!3d0.613345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177651a5a0f5a5a5%3A0x5a5a5a5a5a5a5a5!2sKyenjojo%2C%20Uganda!5e0!3m2!1sen!2sbr!4v1715473000000!5m2!1sen!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-10 right-10 text-white text-5xl font-light hover:text-amber-500 transition"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <img 
            src={selectedImage} 
            alt="Expanded Gallery" 
            className="max-w-full max-h-[80vh] shadow-2xl rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
