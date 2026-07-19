"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { ArrowUpRight, MapPin, Radio } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-full inline-flex items-center gap-2 px-4 py-1.5 mb-8"
        >
          <Radio size={13} className="text-emerald-400" />
          <span className="font-mono text-xs text-[var(--text-secondary)]">
            {profile.availability}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl"
        >
          Backend systems built with{" "}
          <span className="text-gradient">lattice-grade precision.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-[var(--text-secondary)] leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="glass glass-hover rounded-xl px-6 py-3 font-medium text-sm inline-flex items-center gap-2"
          >
            View projects <ArrowUpRight size={16} />
          </a>
          <a
            href="#contact"
            className="rounded-xl px-6 py-3 font-medium text-sm bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 transition-colors shadow-[0_0_30px_rgba(139,92,246,0.35)]"
          >
            Start a project
          </a>
          <span className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
            <MapPin size={14} /> {profile.location}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl"
        >
          {[
            ["5+", "Years experience"],
            ["10", "Projects shown"],
            ["4", "Frontend stacks"],
            ["3", "Backend stacks"],
          ].map(([value, label]) => (
            <div key={label} className="glass rounded-2xl px-5 py-4">
              <div className="font-display text-2xl font-semibold text-gradient">{value}</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
