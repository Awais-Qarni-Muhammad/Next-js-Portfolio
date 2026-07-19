"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="font-mono text-xs text-[var(--glow-violet)] tracking-widest uppercase">
            Experience
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">
            Five years of shipping production systems.
          </h2>
        </div>

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-400/50 via-violet-400/30 to-transparent" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <motion.div
                key={job.company + job.period}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative"
              >
                <span className="absolute -left-8 sm:-left-10 top-2 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-indigo-400 to-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.6)]" />

                <div className="glass glass-hover rounded-2xl p-6 sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                    <h3 className="font-display text-lg font-semibold">{job.role}</h3>
                    <span className="font-mono text-xs text-[var(--text-muted)]">{job.period}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">
                    {job.company} — {job.location}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {job.points.map((p) => (
                      <li key={p} className="text-sm text-[var(--text-secondary)] leading-relaxed pl-4 relative">
                        <span className="absolute left-0 top-[0.55em] w-1.5 h-1.5 rounded-full bg-violet-400/60" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
