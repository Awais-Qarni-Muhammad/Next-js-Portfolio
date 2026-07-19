"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="font-mono text-xs text-[var(--glow-violet)] tracking-widest uppercase">
            Skills
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">
            A full stack, in either direction.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <h3 className="font-display text-sm font-medium text-[var(--text-secondary)] mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
