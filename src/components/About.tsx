"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[200px_1fr] gap-10">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-[var(--glow-violet)] tracking-widest uppercase">
            About
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 sm:p-10"
        >
          <p className="text-lg sm:text-xl leading-relaxed text-[var(--text-primary)]">
            {profile.summary}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
