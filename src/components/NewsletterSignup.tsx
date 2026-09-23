"use client";

import { Send } from "lucide-react";
import Link from "next/link";
import { useState, type FormEvent } from "react";

import type { SiteContent } from "@/lib/data";

type NewsletterSignupProps = {
  newsletter: SiteContent["newsletter"];
  /** Where signups are sent until a newsletter platform is connected. */
  recipient: string;
};

/**
 * Update signups.
 *
 * Noah's Arc has not chosen a newsletter platform yet, so the form hands the
 * request to the visitor's own mail client rather than pretending to store an
 * address it cannot keep. Swapping in Mailchimp (or similar) later only
 * touches `handleSubmit`.
 *
 * The consent wording is an active opt-in: the visitor has to submit the form
 * themselves, and no box is pre-ticked.
 */
export default function NewsletterSignup({
  newsletter,
  recipient,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = "Newsletter signup";
    const body = `Please add this address to the Noah's Arc mailing list: ${email}`;

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-3 tracking-tight">
        {newsletter.title}
      </h2>
      <p className="text-stone-600 mb-8">{newsletter.description}</p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 max-w-xl"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="your@email.com"
          className="flex-1 bg-white border border-stone-200 rounded-full px-6 py-4 text-sm outline-none focus:border-emerald-500 transition"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-full font-bold uppercase text-[11px] tracking-widest hover:bg-emerald-800 transition shadow-lg"
        >
          {newsletter.buttonText} <Send size={14} />
        </button>
      </form>

      <p className="text-[11px] text-stone-500 leading-relaxed mt-5 max-w-xl">
        {newsletter.consent.split("Privacy Policy")[0]}
        <Link
          href="/privacy-policy"
          className="text-emerald-700 underline hover:text-emerald-800"
        >
          Privacy Policy
        </Link>
        {newsletter.consent.split("Privacy Policy")[1]}
      </p>
    </div>
  );
}
