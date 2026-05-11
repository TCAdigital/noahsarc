"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import { LogIn, Lock, Mail } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      window.location.href = "/admin/dashboard";
    }
  };

  return (
    <main className="min-h-screen bg-stone-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl overflow-hidden"
      >
        <div className="bg-stone-900 p-10 text-center">
          <img src="https://i.imgur.com/96Ycrrj.png" alt="Logo" className="h-12 w-auto mx-auto mb-6 brightness-110" />
          <h1 className="text-white text-xl font-bold uppercase tracking-widest">Admin Access</h1>
          <p className="text-stone-500 text-xs mt-2 uppercase tracking-widest font-bold">Noah's Arc CMS</p>
        </div>

        <form onSubmit={handleLogin} className="p-10 space-y-6">
          {error && (
            <div className="bg-red-50 text-red-500 text-xs p-4 rounded-xl border border-red-100 font-bold uppercase tracking-widest">
              {error}
            </div>
          )}

          <div>
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300" size={18} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-stone-900 text-white py-4 rounded-2xl font-bold uppercase text-[10px] tracking-[0.2em] shadow-xl hover:bg-stone-800 transition transform hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            {loading ? "Verifying..." : (
              <>
                <LogIn size={14} /> Enter Dashboard
              </>
            )}
          </button>
        </form>
      </motion.div>
    </main>
  );
}
