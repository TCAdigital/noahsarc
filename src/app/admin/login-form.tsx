"use client";

import { Lock, LogIn, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import { createClient } from "@/lib/supabase/client";

export default function LoginForm({ redirectTo }: { redirectTo: string }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const { error: signInError } = await createClient().auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }

    // `refresh()` lets the server pick up the session cookie the client just set.
    router.replace(redirectTo);
    router.refresh();
  };

  return (
    <form onSubmit={handleLogin} className="p-10 space-y-6">
      {error && (
        <p
          role="alert"
          className="bg-red-50 text-red-500 text-xs p-4 rounded-xl border border-red-100 font-bold uppercase tracking-widest"
        >
          {error}
        </p>
      )}

      <div>
        <label
          htmlFor="email"
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-2"
        >
          Email Address
        </label>
        <div className="relative">
          <Mail
            className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300"
            size={18}
          />
          <input
            id="email"
            type="email"
            autoComplete="username"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full bg-stone-50 border border-stone-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition"
            required
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-2"
        >
          Password
        </label>
        <div className="relative">
          <Lock
            className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300"
            size={18}
          />
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full bg-stone-50 border border-stone-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-amber-500 text-white font-bold py-4 rounded-2xl uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-amber-600 transition disabled:opacity-60 shadow-lg"
      >
        <LogIn size={14} />
        {loading ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
