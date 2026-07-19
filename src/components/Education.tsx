"use client";

import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="font-mono text-xs text-[var(--glow-violet)] tracking-widest uppercase">
            Education
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">
            From software engineering to quantum computing.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {education.map((ed, i) => (
            <motion.div
              key={ed.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass glass-hover rounded-2xl p-7"
            >
              <GraduationCap size={20} className="text-violet-300 mb-4" />
              <h3 className="font-display font-semibold text-lg leading-snug mb-1">{ed.degree}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{ed.institution}</p>
              <p className="text-sm text-[var(--text-muted)]">{ed.location}</p>
              <p className="font-mono text-xs text-[var(--text-muted)] mt-3">{ed.period}</p>
              {ed.note && (
                <p className="text-sm text-[var(--text-secondary)] mt-4 pt-4 border-t border-white/5">
                  {ed.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
