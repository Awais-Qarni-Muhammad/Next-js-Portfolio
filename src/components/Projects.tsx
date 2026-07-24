"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { Code2, ExternalLink } from "lucide-react";

const statusStyles: Record<string, string> = {
  "In Development": "!bg-amber-500/10 !border-amber-400/30 !text-amber-300",
  "Demo Project": "!bg-slate-500/10 !border-slate-400/30 !text-slate-300",
  Completed: "!bg-emerald-500/10 !border-emerald-400/30 !text-emerald-300",
  Planned: "!bg-sky-500/10 !border-sky-400/30 !text-sky-300",
  Archived: "!bg-slate-500/10 !border-slate-400/30 !text-slate-300",
};

export default function Projects() {
  const [flipped, setFlipped] = useState<string | null>(null);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <span className="font-mono text-xs text-[var(--glow-violet)] tracking-widest uppercase">
            Projects
          </span>

          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">
            Range across every stack you might need.
          </h2>

          <p className="text-sm text-[var(--text-muted)] mt-3 max-w-2xl">
            Projects marked{" "}
            <span className="chip inline-flex mx-1">Demo Project</span> are
            concept builds created to demonstrate stack versatility, not
            delivered client work. Hover a card (or tap on mobile) to preview
            it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className={`flip-card h-[500px] ${
                flipped === project.slug ? "is-flipped" : ""
              }`}
              onClick={() =>
                setFlipped((current) =>
                  current === project.slug ? null : project.slug,
                )
              }
            >
              <div className="flip-card-inner h-full">
                {/* FRONT */}
                <article className="flip-front glass glass-hover rounded-2xl p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display font-semibold text-base leading-snug">
                      {project.title}
                    </h3>

                    <span
                      className={`chip shrink-0 ${
                        statusStyles[project.status] ??
                        "!bg-slate-500/10 !border-slate-400/30 !text-slate-300"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <ul className="space-y-1.5 mb-5 min-h-[88px]">
                    {project.highlights.slice(0, 3).map((h) => (
                      <li
                        key={h}
                        className="text-xs text-[var(--text-muted)] pl-3.5 relative leading-relaxed"
                      >
                        <span className="absolute left-0 top-[0.5em] w-1 h-1 rounded-full bg-indigo-400/60" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    <span className="chip">{project.frontend}</span>
                    <span className="chip">{project.backend}</span>
                    <span className="chip">{project.database}</span>
                    <div className="flex items-center gap-3 pt-4 border-t border-white/5 mt-auto">
                      {project.repoUrl ? (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-white transition-colors"
                        >
                          <Code2 size={14} />
                          View Repo
                        </a>
                      ) : (
                        <span className="text-xs inline-flex items-center gap-1.5 text-[var(--text-muted)]">
                          <Code2 size={14} />
                          Repo Coming Soon
                        </span>
                      )}

                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-white transition-colors"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </article>

                {/* BACK */}
                <div className="flip-back h-full">
                  <img
                    src={`/projects/${project.slug}.svg`}
                    alt={`${project.title} cover art`}
                    className="w-full h-full object-cover"
                  />

                  <div className="flip-back-overlay">
                    <span
                      className={`chip inline-flex w-fit mb-2 ${
                        statusStyles[project.status] ??
                        "!bg-slate-500/10 !border-slate-400/30 !text-slate-300"
                      }`}
                    >
                      {project.status}
                    </span>

                    <h3 className="font-display font-semibold text-lg text-white leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-white/70 mt-1">
                      {project.frontend} · {project.backend} ·{" "}
                      {project.database}
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-white/5 mt-auto">
                      {project.repoUrl ? (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-white transition-colors"
                        >
                          <Code2 size={14} />
                          View Repo
                        </a>
                      ) : (
                        <span className="text-xs inline-flex items-center gap-1.5 text-[var(--text-muted)]">
                          <Code2 size={14} />
                          Repo Coming Soon
                        </span>
                      )}

                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-white transition-colors"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
