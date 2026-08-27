"use client";

import { useState, type FormEvent } from "react";

/**
 * The site has no mail backend, so the form hands the message to the visitor’s
 * own mail client instead of silently discarding it.
 */
export default function ContactForm({ email }: { email: string }) {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = [`Name: ${name}`, `Email: ${from}`, "", message].join("\n");
    const subject = `Website enquiry from ${name || "a visitor"}`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="contact-name"
          className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2"
        >
          Your Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 transition"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2"
        >
          Email Address
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={from}
          onChange={(event) => setFrom(event.target.value)}
          className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 transition"
          placeholder="john@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 h-32 outline-none focus:border-emerald-500 transition"
          placeholder="How can we help?"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-emerald-700 text-white font-bold py-4 rounded-xl hover:bg-emerald-800 transition uppercase text-xs tracking-widest shadow-lg"
      >
        Send Message
      </button>
    </form>
  );
}
