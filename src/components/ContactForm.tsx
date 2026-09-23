"use client";

import { AlertTriangle, CheckCircle2, Send } from "lucide-react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { submitContactMessage } from "@/app/(site)/contact/actions";
import { type ContactState } from "@/lib/contact";

const INPUT_CLASS =
  "w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 transition";
const LABEL_CLASS =
  "block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700 text-white font-bold py-4 rounded-xl hover:bg-emerald-800 transition uppercase text-xs tracking-widest shadow-lg disabled:opacity-60"
    >
      {pending ? "Sending..." : "Send Message"} <Send size={14} />
    </button>
  );
}

export default function ContactForm({ email }: { email: string }) {
  const [state, formAction] = useActionState<ContactState, FormData>(
    submitContactMessage,
    { status: "idle" },
  );

  if (state.status === "success") {
    return (
      <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-center">
        <CheckCircle2 className="text-emerald-600 mx-auto mb-4" size={36} />
        <h3 className="font-bold text-emerald-900 mb-2">Message sent</h3>
        <p className="text-sm text-emerald-800 leading-relaxed">
          Thank you for reaching out. We will get back to you as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      {state.status === "error" && (
        <p
          role="alert"
          className="flex items-start gap-3 bg-red-50 text-red-600 text-xs font-bold p-4 rounded-xl border border-red-100"
        >
          <AlertTriangle size={16} className="shrink-0 mt-0.5" />
          <span>
            {state.message}{" "}
            <a href={`mailto:${email}`} className="underline">
              {email}
            </a>
          </span>
        </p>
      )}

      <div>
        <label htmlFor="contact-name" className={LABEL_CLASS}>
          Your Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          maxLength={120}
          autoComplete="name"
          className={INPUT_CLASS}
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className={LABEL_CLASS}>
          Email Address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          className={INPUT_CLASS}
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={LABEL_CLASS}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          maxLength={5000}
          className={`${INPUT_CLASS} h-32`}
          placeholder="How can we help?"
        />
      </div>

      {/* Spam trap: hidden from people, tempting to bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} />
      </div>

      <SubmitButton />
    </form>
  );
}
