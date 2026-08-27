"use client";

import { motion } from "framer-motion";

/** Fundraising / construction progress bar that fills once scrolled into view. */
export default function ProgressBar({ value }: { value: number }) {
  const percent = Math.min(100, Math.max(0, value));

  return (
    <div
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      className="h-4 w-full bg-white rounded-full overflow-hidden border border-stone-200 p-1 shadow-inner"
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full relative"
      >
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:40px_40px] animate-shimmer" />
      </motion.div>
    </div>
  );
}
