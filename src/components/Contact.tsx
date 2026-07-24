"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { Mail, Phone, Code2 } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-br from-indigo-500/20 to-violet-500/20 blur-3xl rounded-full pointer-events-none" />

          <span className="font-mono text-xs text-[var(--glow-violet)] tracking-widest uppercase relative">
            Contact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4 relative">
            Have a project in mind?
          </h2>
          <p className="text-[var(--text-secondary)] mt-3 max-w-xl mx-auto relative">
            Fully remote, available worldwide. Reach out and let&apos;s talk about what you&apos;re building.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 relative">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl px-6 py-3 font-medium text-sm bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 transition-colors shadow-[0_0_30px_rgba(139,92,246,0.35)] inline-flex items-center gap-2"
            >
              <Mail size={16} /> {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="glass glass-hover rounded-xl px-5 py-3 text-sm inline-flex items-center gap-2"
            >
              <Phone size={16} /> {profile.phone}
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4 relative">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-white transition-colors font-mono text-sm font-semibold border border-current rounded px-1.5 py-0.5 leading-none"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Code2 size={18} />
            </a>
          </div>
        </motion.div>

        <p className="text-center text-xs text-[var(--text-muted)] mt-10">
          © {new Date().getFullYear()} {profile.name}.
        </p>
      </div>
    </section>
  );
}
