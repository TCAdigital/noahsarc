"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { siteContent as initialData } from "@/lib/data";
import { motion } from "framer-motion";
import { Save, LogOut, Layout, Image as ImageIcon, Settings, CheckCircle } from "lucide-react";

export default function AdminDashboard() {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    // In a real implementation, we would update Supabase here
    // const { error } = await supabase.from('site_config').upsert(data);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/admin";
  };

  return (
    <main className="min-h-screen bg-stone-50 flex">
      {/* Sidebar */}
      <aside className="w-80 bg-white border-r border-stone-200 hidden lg:flex flex-col p-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-white">
            <Settings size={20} />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-stone-900">CMS Panel</div>
            <div className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-0.5">Noah's Arc v1.0</div>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-stone-900 text-white font-bold text-[10px] uppercase tracking-widest">
            <Layout size={16} /> Home Editor
          </button>
          <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-stone-400 hover:bg-stone-50 transition font-bold text-[10px] uppercase tracking-widest">
            <ImageIcon size={16} /> Media Assets
          </button>
        </nav>

        <button 
          onClick={handleLogout}
          className="flex items-center gap-4 p-4 text-red-500 hover:bg-red-50 rounded-2xl transition font-bold text-[10px] uppercase tracking-widest"
        >
          <LogOut size={16} /> Logout
        </button>
      </aside>

      {/* Content */}
      <section className="flex-1 p-8 lg:p-16 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <header className="flex justify-between items-end mb-12">
            <div>
              <h1 className="text-4xl font-serif text-stone-900 mb-2">Home Page Editor</h1>
              <p className="text-stone-400 text-sm">Update your site content in real-time.</p>
            </div>
            <button
              onClick={handleSave}
              disabled={loading}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold uppercase text-[10px] tracking-[0.2em] transition transform active:scale-95 ${
                success ? "bg-emerald-500 text-white" : "bg-amber-500 text-white hover:bg-amber-600 shadow-xl"
              }`}
            >
              {loading ? "Saving..." : success ? <><CheckCircle size={14} /> Saved!</> : <><Save size={14} /> Save Changes</>}
            </button>
          </header>

          <div className="space-y-8">
            {/* Hero Section Edit */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-stone-100"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-amber-500 mb-8 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div> Hero Section
              </h3>
              
              <div className="grid gap-8">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-3">Main Headline</label>
                  <input 
                    type="text" 
                    value={data.hero.title}
                    onChange={(e) => setData({...data, hero: {...data.hero, title: e.target.value}})}
                    className="w-full bg-stone-50 border border-stone-200 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-3">Description Paragraph</label>
                  <textarea 
                    value={data.hero.description}
                    onChange={(e) => setData({...data, hero: {...data.hero, description: e.target.value}})}
                    rows={4}
                    className="w-full bg-stone-50 border border-stone-200 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-3">Background Image URL</label>
                  <input 
                    type="text" 
                    value={data.hero.backgroundImage}
                    onChange={(e) => setData({...data, hero: {...data.hero, backgroundImage: e.target.value}})}
                    className="w-full bg-stone-50 border border-stone-200 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>
              </div>
            </motion.div>

            {/* Other sections would go here... */}
            <div className="bg-stone-200/30 p-10 rounded-[2.5rem] border-2 border-dashed border-stone-200 text-center">
              <p className="text-stone-400 text-xs font-bold uppercase tracking-widest">More sections coming soon...</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
